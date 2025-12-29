/**
 * Backtesting comparison service
 *
 * Compares auto-proposal system predictions with actual Odoo orders.
 * Calculates metrics: TP/FP/FN, Precision/Recall/F1, MAE, MAPE
 *
 * @module features/backtesting/comparison
 */

import type { ProposalPreparationResult } from "../proposal-preparation/proposal-preparation.types";
import type { StockReplenishmentResult } from "../stock-replenishment/stock-replenishment.types";
import type { OdooSaleOrderLine } from "../../infrastructure/odoo/clients/odoo-client.types";
import type {
  BacktestComparisonResult,
  ProductMatch,
  ProductMismatch,
} from "./backtest.types";

/**
 * Compares auto-proposal system predictions with actual order
 *
 * @param systemProposal - System prediction result (ProposalPreparationResult)
 * @param realOrderLines - Actual Odoo order lines (OdooSaleOrderLine[])
 * @param stockAnalysis - Complete stock analysis result (for FN analysis)
 * @param orderContext - Order context (client, dates, etc.)
 * @returns Complete comparison result with metrics
 */
export function compareSystemPredictionVsRealOrder(
  systemProposal: ProposalPreparationResult,
  realOrderLines: OdooSaleOrderLine[],
  stockAnalysis: StockReplenishmentResult,
  orderContext: {
    clientId: number;
    clientName: string;
    orderName: string;
    orderDate: string;
    cutoffDate: string;
    daysBeforePrediction: number;
  }
): BacktestComparisonResult {
  // 1. Create Maps for comparison (key = productId)
  const systemProducts = new Map(
    systemProposal.products.map((p) => [p.product_id, p])
  );

  // Filter services same way as system (stock-replenishment.service.ts)
  const realProducts = new Map(
    realOrderLines
      .filter((line) => line.product_type !== "service")
      .map((line) => [line.product_id[0], line])
  );

  // Map of analyzed products (includes those filtered by stockout threshold)
  // Use all_products if available (for backtest), otherwise products (for compatibility)
  const allProducts = stockAnalysis.all_products ?? stockAnalysis.products;
  const analyzedProducts = new Map(
    allProducts.map((p) => [p.product_id, p])
  );

  // 2. Calculate TP/FP/FN
  const truePositives: ProductMatch[] = [];
  const falsePositives: ProductMismatch[] = [];
  const falseNegatives: ProductMismatch[] = [];

  // 3. Iterate system predictions
  for (const [productId, systemProduct] of systemProducts) {
    const realProduct = realProducts.get(productId);

    if (realProduct) {
      // TRUE POSITIVE: System predicted AND client ordered
      const predictedQty = systemProduct.quantity_to_order;
      const realQty = realProduct.product_uom_qty;
      const absoluteError = Math.abs(predictedQty - realQty);

      // Calculate error percentage (for MAPE)
      // Handle case where realQty = 0 (avoid division by zero)
      const errorPercent = realQty > 0
        ? (absoluteError / realQty) * 100
        : 0;

      // Get LLM info if available
      const analyzedProduct = analyzedProducts.get(productId);
      const quantitySource = analyzedProduct?.quantity_source || 'median';
      const llm_input_data = analyzedProduct?.llm_input_data;
      const llmRequired = analyzedProduct?.llm_required ?? false;
      const llmSuccess = analyzedProduct?.llm_success ?? false;
      const medianQty = quantitySource === 'llm' ? analyzedProduct?.calculation_metadata.median_value : undefined;
      const llmPrediction = analyzedProduct?.llm_prediction;

      truePositives.push({
        productId,
        productName: systemProduct.product_name,
        predictedQty,
        realQty,
        absoluteError,
        errorPercent,
        matchType: classifyQuantityMatch(predictedQty, realQty),
        confidence: systemProduct.calculation_metadata.confidence,
        llm_required: llmRequired,
        llm_success: llmSuccess,
        quantitySource,
        medianQty,
        llm_input_data,
        llmPrediction,
      });
    } else {
      // If we predicted 0, we're saying "no need to order"
      // So if client doesn't order, it's CORRECT (True Negative), not False Positive
      if (systemProduct.quantity_to_order === 0) {
        // TRUE NEGATIVE: We predicted 0 (no need) AND client didn't order
        // Do NOT count as False Positive - it's a good prediction!
        continue;
      }

      // FALSE POSITIVE: System predicted >0 BUT client didn't order
      const analyzedProduct = analyzedProducts.get(productId);
      let reason = analyzedProduct
        ? `Predicted ${systemProduct.quantity_to_order}u but not ordered`
        : "Predicted but not ordered";

      // Determine confidence based on history
      const orderCount = analyzedProduct?.order_history?.length ?? 0;
      const confidence: 'low' | 'medium' | 'high' =
        orderCount >= 5 ? 'high' : orderCount >= 2 ? 'medium' : 'low';

      // Get LLM info (same structure as TP)
      const fpQuantitySource = analyzedProduct?.quantity_source || 'median';
      const fpLlmInputData = analyzedProduct?.llm_input_data;
      const fpLlmRequired = analyzedProduct?.llm_required ?? false;
      const fpLlmSuccess = analyzedProduct?.llm_success ?? false;
      const fpMedianQty = fpQuantitySource === 'llm' ? analyzedProduct?.calculation_metadata.median_value : undefined;
      const fpLlmPrediction = analyzedProduct?.llm_prediction;

      falsePositives.push({
        productId,
        productName: systemProduct.product_name,
        qty: systemProduct.quantity_to_order,
        reason,
        confidence,
        llm_required: fpLlmRequired,
        llm_success: fpLlmSuccess,
        quantitySource: fpQuantitySource,
        medianQty: fpMedianQty,
        llm_input_data: fpLlmInputData,
        llmPrediction: fpLlmPrediction,
      });
    }
  }

  // 4. Iterate real orders to find FN
  for (const [productId, realProduct] of realProducts) {
    const systemProduct = systemProducts.get(productId);

    // If we didn't predict this product at all OR predicted 0
    if (!systemProduct || systemProduct.quantity_to_order === 0) {
      // FALSE NEGATIVE: Client ordered BUT system didn't predict (or predicted 0)
      let reason = "Unknown reason";

      // Check if product was in stockAnalysis (analyzed but filtered)
      const analyzedProduct = analyzedProducts.get(productId);

      if (systemProduct && systemProduct.quantity_to_order === 0) {
        // We predicted 0 (no risk) but client ordered
        reason = `LLM predicted 0 (no risk) but client ordered ${realProduct.product_uom_qty}u`;
      } else if (analyzedProduct) {
        // Product analyzed but not predicted (LLM -> 0)
        reason = `Product analyzed but LLM -> 0 - client ordered ${realProduct.product_uom_qty}u`;
      } else {
        // Product NOT in stockAnalysis -> never ordered before in analysis window
        reason = `Never ordered in previous analysis window (no history)`;
      }

      // Determine confidence based on history
      const orderCount = analyzedProduct?.order_history?.length ?? 0;
      const confidence: 'low' | 'medium' | 'high' =
        orderCount >= 5 ? 'high' : orderCount >= 2 ? 'medium' : 'low';

      // Get LLM info (same structure as TP)
      const fnQuantitySource = analyzedProduct?.quantity_source || 'unknown';
      const fnLlmInputData = analyzedProduct?.llm_input_data;
      const fnLlmRequired = analyzedProduct?.llm_required ?? false;
      const fnLlmSuccess = analyzedProduct?.llm_success ?? false;
      const fnMedianQty = analyzedProduct?.calculation_metadata?.median_value;
      const fnLlmPrediction = analyzedProduct?.llm_prediction;

      falseNegatives.push({
        productId,
        productName: realProduct.product_id[1],
        qty: realProduct.product_uom_qty,
        reason,
        confidence,
        llm_required: fnLlmRequired,
        llm_success: fnLlmSuccess,
        quantitySource: fnQuantitySource,
        medianQty: fnMedianQty,
        llm_input_data: fnLlmInputData,
        llmPrediction: fnLlmPrediction,
      });
    }
  }

  // 5. Calculate metrics
  const productMetrics = calculateProductMetrics(
    truePositives.length,
    falsePositives.length,
    falseNegatives.length
  );

  const quantityMetrics = calculateQuantityMetrics(truePositives);

  // 6. Return complete result
  return {
    ...orderContext,
    truePositives,
    falsePositives,
    falseNegatives,
    productMetrics,
    quantityMetrics,
    llmUsage: stockAnalysis.llm_usage,
  };
}

/**
 * Calculates product detection metrics (binary)
 *
 * @param tp - Number of True Positives
 * @param fp - Number of False Positives
 * @param fn - Number of False Negatives
 * @returns Metrics: precision, recall, f1Score, totals
 */
export function calculateProductMetrics(
  tp: number,
  fp: number,
  fn: number
): {
  precision: number;
  recall: number;
  f1Score: number;
  totalPredicted: number;
  totalReal: number;
} {
  const totalPredicted = tp + fp;
  const totalReal = tp + fn;

  // Precision = TP / (TP + FP)
  // "Out of 100 predicted products, how many are actually ordered?"
  const precision = totalPredicted > 0 ? tp / totalPredicted : 0;

  // Recall = TP / (TP + FN)
  // "Out of 100 ordered products, how many were detected?"
  const recall = totalReal > 0 ? tp / totalReal : 0;

  // F1-Score = 2 x (Precision x Recall) / (Precision + Recall)
  // Balanced score between precision and recall
  const f1Score =
    precision + recall > 0
      ? (2 * (precision * recall)) / (precision + recall)
      : 0;

  return {
    precision,
    recall,
    f1Score,
    totalPredicted,
    totalReal,
  };
}

/**
 * Calculates quantity precision metrics (continuous)
 *
 * @param truePositives - List of correctly predicted products with quantities
 * @returns Metrics: MAE (primary), wMAPE (robust), MAPE (info), distribution
 */
export function calculateQuantityMetrics(
  truePositives: ProductMatch[]
): {
  mae: number;
  wmape: number;
  mape: number;
  bias: number;
  distribution: {
    exactMatch: number;
    partialMatch: number;
  };
} {
  if (truePositives.length === 0) {
    return {
      mae: 0,
      wmape: 0,
      mape: 0,
      bias: 0,
      distribution: { exactMatch: 0, partialMatch: 0 },
    };
  }

  // MAE = Mean Absolute Error (units) - PRIMARY METRIC
  // Formula: MAE = (1/N) x sum |Predicted - Real|
  const mae =
    truePositives.reduce((sum, tp) => sum + tp.absoluteError, 0) /
    truePositives.length;

  // wMAPE = Weighted Mean Absolute Percentage Error (%) - ROBUST RECOMMENDED METRIC
  // Formula: wMAPE = sum |Predicted - Real| / sum Real x 100%
  const totalAbsoluteError = truePositives.reduce((sum, tp) => sum + tp.absoluteError, 0);
  const totalActual = truePositives.reduce((sum, tp) => sum + tp.realQty, 0);
  const wmape = totalActual > 0 ? (totalAbsoluteError / totalActual) * 100 : 0;

  // MAPE = Mean Absolute Percentage Error (%) - INFO (biased, kept for comparison)
  // Formula: MAPE = (1/N) x sum |Predicted - Real| / Real x 100%
  const mape =
    truePositives.reduce((sum, tp) => sum + tp.errorPercent, 0) /
    truePositives.length;

  // BIAS = Directional bias (%) - DIAGNOSTIC OVER/UNDER-ESTIMATION
  // Formula: Bias = sum (Predicted - Real) / sum Real x 100%
  // Interpretation: > 0 = overestimate, < 0 = underestimate, = 0 = balanced
  const totalSignedError = truePositives.reduce((sum, tp) => sum + (tp.predictedQty - tp.realQty), 0);
  const bias = totalActual > 0 ? (totalSignedError / totalActual) * 100 : 0;

  // Distribution: exact (error = 0) vs partial (error > 0)
  const exactMatch = truePositives.filter((tp) => tp.matchType === "exact")
    .length;
  const partialMatch = truePositives.filter((tp) => tp.matchType === "partial")
    .length;

  return {
    mae,
    wmape,
    mape,
    bias,
    distribution: { exactMatch, partialMatch },
  };
}

/**
 * Classifies match quality based on absolute quantity error
 *
 * Simple 2-level classification:
 * - Exact: error = 0 (perfect equality)
 * - Partial: error > 0 (with error, any amount)
 *
 * @param predictedQty - Quantity predicted by system
 * @param realQty - Actual ordered quantity
 * @returns Match type: 'exact' | 'partial'
 */
export function classifyQuantityMatch(
  predictedQty: number,
  realQty: number
): "exact" | "partial" {
  const absoluteError = Math.abs(predictedQty - realQty);

  if (absoluteError === 0) return "exact";
  return "partial";
}
