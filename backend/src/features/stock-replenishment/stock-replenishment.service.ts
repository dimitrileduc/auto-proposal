/**
 * Stock replenishment service
 *
 * Calculates replenishment needs for a client using LLM predictions
 * with median fallback for reliability.
 *
 * @module features/stock-replenishment/service
 */
import { getProductOrderHistory } from "./order-history/order-history.service";
import { calculateQuantityFromHistory } from "./utils/quantity.utils";
import { autoProposalConfig } from "../../config/auto-proposal";
import { getTodayAsDateString } from "../../utils/date.utils";
import { predictWithLLM, type LLMPredictionResult, type LLMPredictionInput } from "../../services/llm-ax-optimized.service";
import { splitOrdersByPeriod } from "../../utils/date-period.utils";
import pLimit from "p-limit";
import type {
  ProductStockStatus,
  StockReplenishmentResult,
} from "./stock-replenishment.types";

/**
 * Calculates stock replenishment needs for a client
 *
 * 1. Trigger: Stockout risk < replenishment threshold
 * 2. Quantity: Median from actual order history (not consumption x days)
 *
 * @param clientId - Odoo client ID
 * @param config - Optional configuration (analysisEndDate, replenishmentThreshold)
 * @returns Products to order with recommended quantities
 */
export async function calculateReplenishmentNeeds(
  clientId: number = autoProposalConfig.testing.defaultClientId,
  config?: {
    analysisEndDate?: string;
    replenishmentThreshold?: number;
  }
): Promise<StockReplenishmentResult> {
  // Hardcoded constants
  const ANALYSIS_WINDOW_DAYS = 180; // Window to filter products to analyze (6 months)
  const FULL_HISTORY_DAYS = 730;   // Full history for LLM (2 years, includes Y-1)

  const analysisEndDate = config?.analysisEndDate ?? getTodayAsDateString();

  // Fetch ONLY full history (730d) to have Y-1
  const fullHistory = await getProductOrderHistory(clientId, FULL_HISTORY_DAYS, analysisEndDate);

  const cutoffDate = new Date(analysisEndDate);
  cutoffDate.setDate(cutoffDate.getDate() - ANALYSIS_WINDOW_DAYS);

  const productsToAnalyze = fullHistory.products.filter(product => {
    return product.orders.some(order => new Date(order.date_order) >= cutoffDate);
  });

  const analyzedProducts: ProductStockStatus[] = []; // Products to order only
  const allProducts: ProductStockStatus[] = []; // ALL analyzed products (for backtest)

  // LLM usage tracking
  let totalLLMCalls = 0;
  let totalPromptTokens = 0;
  let totalCompletionTokens = 0;

  // Use replenishment threshold
  const replenishmentThresholdDays = config?.replenishmentThreshold ?? autoProposalConfig.replenishmentThreshold;

  // ====================================================================
  // PHASE 1: Prepare all products and identify those needing LLM
  // ====================================================================
  interface ProductToProcess {
    product: typeof fullHistory.products[0];
    calculation: ReturnType<typeof calculateQuantityFromHistory>; // Fallback only
  }

  const productsToProcess: ProductToProcess[] = [];

  for (const product of productsToAnalyze) {
    // Skip service type products (transport, fees, etc.)
    if (product.product_type === "service") {
      continue;
    }

    // FALLBACK ONLY: Median calculated only as emergency fallback if LLM fails
    const calculation = calculateQuantityFromHistory(product.orders);
    if (calculation.quantity === null) {
      continue;
    }

    // All products go through LLM
    productsToProcess.push({
      product,
      calculation, // Kept only for fallback
    });
  }

  // ====================================================================
  // PHASE 2: Execute all LLM predictions in parallel
  // ====================================================================
  const llmResults = new Map<number, LLMPredictionResult>();
  const llmInputData = new Map<number, {
    required: boolean;
    success: boolean;
    recent_orders: Array<{ date: string; quantity: number }>;
    last_year_orders: Array<{ date: string; quantity: number }>;
  }>();

  if (productsToProcess.length > 0) {
    // Concurrency limit: 10 simultaneous LLM requests max
    // (Anthropic Haiku tier: 50 req/min, staying safe at 10 parallel)
    const limit = pLimit(10);

    const llmPromises = productsToProcess.map((productData) =>
      limit(async () => {
        const { product } = productData;

        // Use product.orders directly (already 730d from fullHistory)
        const ordersForLLM = product.orders;

        // Split orders into 2 views: recent (5 months) + same period last year
        // Following IRIS: compare current trend vs historical seasonal baseline
        const { recent, lastYear } = splitOrdersByPeriod(
          ordersForLLM,
          analysisEndDate,
          5 // 5 months period (~150d) to have 2+ orders for 76% of products
        );

        const recentOrders = recent.map(o => ({ date: o.date_order, quantity: o.quantity }));
        const lastYearOrders = lastYear.map(o => ({ date: o.date_order, quantity: o.quantity }));

        try {
          // LLM receives history + replenishment threshold
          const llmInput: LLMPredictionInput = {
            productName: product.product_name,
            recentOrders,
            lastYearOrders,
            currentDate: analysisEndDate,
            replenishmentThresholdDays, // Business risk threshold
          };

          const llmResult = await predictWithLLM(llmInput);

          llmResults.set(product.product_id, llmResult);

          // Store input data for report (SUCCESS)
          llmInputData.set(product.product_id, {
            required: true,
            success: true,
            recent_orders: recentOrders,
            last_year_orders: lastYearOrders,
          });

          return { success: true, productId: product.product_id };
        } catch (error) {
          // Store input data for report anyway (FAILED)
          llmInputData.set(product.product_id, {
            required: true,
            success: false,
            recent_orders: recentOrders,
            last_year_orders: lastYearOrders,
          });

          return { success: false, productId: product.product_id };
        }
      })
    );

    // Wait for all LLM predictions
    await Promise.all(llmPromises);
  }

  // ====================================================================
  // PHASE 3: Finalize products with LLM results
  // ====================================================================
  for (const productData of productsToProcess) {
    const { product, calculation } = productData;

    const llmResult = llmResults.get(product.product_id);

    let finalQuantity: number;
    let llmPrediction: any = undefined;
    let quantitySource: "llm" | "median-fallback";

    if (llmResult) {
      // LLM succeeded - use its decision
      finalQuantity = llmResult.prediction.recommended_quantity;
      quantitySource = "llm";

      llmPrediction = {
        quantity: llmResult.prediction.recommended_quantity,
        reasoning: llmResult.prediction.reasoning,
        summary: llmResult.prediction.summary,
        baseline_quantity: llmResult.prediction.baseline_quantity,
        provider_reasoning: llmResult.providerReasoning,
        model: llmResult.model,
        provider: llmResult.provider,
        usage: {
          promptTokens: llmResult.usage.promptTokens,
          completionTokens: llmResult.usage.completionTokens,
          totalTokens: llmResult.usage.totalTokens,
        },
      };

      // Accumulate usage
      totalLLMCalls++;
      totalPromptTokens += llmResult.usage.promptTokens;
      totalCompletionTokens += llmResult.usage.completionTokens;
    } else {
      // EMERGENCY FALLBACK: LLM failed
      finalQuantity = calculation.quantity!;
      quantitySource = "median-fallback";
    }

    // Get LLM input data (if available)
    const inputData = llmInputData.get(product.product_id);

    // Use product.orders directly for report (already 730d from fullHistory)
    const ordersForReport = product.orders;

    // Create analyzed product object (with all info)
    const productStatus: ProductStockStatus = {
      product_id: product.product_id,
      product_name: product.product_name,
      product_uom: product.product_uom,

      order_history: ordersForReport.map((order) => ({
        order_id: order.order_id,
        order_name: order.order_name,
        date_order: order.date_order,
        quantity: order.quantity,
        price_unit: order.price_unit,
      })),

      quantity_to_order: finalQuantity,
      quantity_source: quantitySource,

      calculation_metadata: calculation.metadata,

      llm_prediction: llmPrediction,

      llm_input_data: inputData ? {
        recent_orders: inputData.recent_orders,
        last_year_orders: inputData.last_year_orders,
      } : undefined,
    };

    // Add ALL analyzed products (for backtest) - BEFORE checking qty=0
    allProducts.push(productStatus);

    // If quantity = 0, skip from production order list
    if (finalQuantity === 0) {
      continue;
    }

    // Add to products to order (for prod)
    analyzedProducts.push(productStatus);
  }

  console.log(`Analysis complete: ${analyzedProducts.length} products to order`);

  return {
    client_id: clientId,
    products: analyzedProducts,
    total_products_in_history: productsToAnalyze.length,
    all_products: allProducts,
    llm_usage: totalLLMCalls > 0 ? {
      calls: totalLLMCalls,
      promptTokens: totalPromptTokens,
      completionTokens: totalCompletionTokens,
      totalTokens: totalPromptTokens + totalCompletionTokens,
    } : undefined,
  };
}
