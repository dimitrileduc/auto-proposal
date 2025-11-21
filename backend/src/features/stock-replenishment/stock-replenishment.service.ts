import { getProductOrderHistory } from "./order-history/order-history.service";
import { calculateDailyConsumption, calculateClientReorderWindow } from "./utils/consumption.utils";
import { predictStockStatus } from "./utils/prediction.utils";
import { calculateQuantityFromHistory } from "./utils/quantity.utils";
import { autoProposalConfig } from "../../config/auto-proposal";
import { getTodayAsDateString } from "../../utils/date.utils";
import { predictWithLLM, type LLMPredictionResult } from "../../services/llm-openrouter.service";
import { splitOrdersByPeriod } from "../../utils/date-period.utils";
import pLimit from "p-limit";
import type {
  ProductStockStatus,
  StockReplenishmentResult,
} from "./stock-replenishment.types";

/**
 * Calcule les besoins de réapprovisionnement d'un client
 *
 *
 * 1. Trigger: Risque de rupture < seuil (couverture + lead time)
 * 2. Quantité: Médiane de l'historique réel (pas consommation × jours)
 *
 * @param clientId ID du client Odoo
 * @param config Configuration optionnelle (analysisWindowDays, analysisEndDate, targetCoverage, leadTime)
 * @returns Produits à commander avec quantités recommandées
 */
export async function calculateReplenishmentNeeds(
  clientId: number = autoProposalConfig.testing.defaultClientId,
  config?: {
    analysisWindowDays?: number;
    analysisEndDate?: string;
    targetCoverage?: number;
    leadTime?: number;
  }
): Promise<StockReplenishmentResult> {
  // Utiliser les valeurs de config ou les valeurs par défaut
  const daysOfHistory = config?.analysisWindowDays ?? autoProposalConfig.analysisWindowDays;
  const analysisEndDate = config?.analysisEndDate ?? getTodayAsDateString();

  // 1. Récupération de l'historique récent (180j)
  const recentHistory = await getProductOrderHistory(clientId, daysOfHistory, analysisEndDate);

  // 2. Récupération de l'historique complet (730j) pour fenêtre adaptative
  const fullHistory = await getProductOrderHistory(clientId, 730, analysisEndDate);

  // 3. Calculer la fenêtre moyenne de recommande du client
  const clientReorderWindow = calculateClientReorderWindow(recentHistory.products);
  if (clientReorderWindow) {
    console.log(`\n📏 Fenêtre moyenne de recommande client: ${clientReorderWindow.toFixed(1)}j`);
  } else {
    console.log(`\n📏 Fenêtre client: N/A (pas assez de produits réguliers)`);
  }

  console.log(
    `\n🔍 Analyse de ${recentHistory.products.length} produits pour client ${clientId}...`
  );

  const analyzedProducts: ProductStockStatus[] = []; // Produits à commander uniquement
  const allProducts: ProductStockStatus[] = []; // TOUS les produits analysés (pour backtest)

  // Tracking LLM usage
  let totalLLMCalls = 0;
  let totalPromptTokens = 0;
  let totalCompletionTokens = 0;

  // Utiliser les valeurs de config ou les valeurs par défaut
  const targetCoverage = config?.targetCoverage ?? autoProposalConfig.targetCoverage;
  const leadTime = config?.leadTime ?? autoProposalConfig.leadTime;
  const replenishmentThresholdDays = targetCoverage + leadTime;

  // ====================================================================
  // PHASE 1: Préparer tous les produits et identifier ceux qui ont besoin du LLM
  // ====================================================================
  interface ProductToProcess {
    product: typeof recentHistory.products[0];
    ordersToUse: typeof recentHistory.products[0]['orders'];
    windowDays: number;
    consumptionPerDay: number;
    stockPrediction: ReturnType<typeof predictStockStatus>;
    calculation: ReturnType<typeof calculateQuantityFromHistory>;
    needsLLM: boolean;
  }

  const productsToProcess: ProductToProcess[] = [];

  for (const product of recentHistory.products) {
    console.log(`\n  📦 Produit: ${product.product_name} (ID: ${product.product_id})`);

    // Skip produits de type "service" (transport, frais, etc.)
    if (product.product_type === "service") {
      console.log(`     ❌ SKIP: Produit de type service`);
      continue;
    }

    // Fenêtre adaptative : Si 1 commande dans 180j, check historique 730j
    let ordersToUse = product.orders;
    let windowDays = daysOfHistory;

    if (product.orders.length === 1) {
      // Lookup dans fullHistory
      const fullProduct = fullHistory.products.find((p) => p.product_id === product.product_id);

      if (fullProduct && fullProduct.orders.length > 1) {
        ordersToUse = fullProduct.orders;
        windowDays = 730;
        console.log(
          `     ℹ️ 1 commande dans 180j, élargissement → ${fullProduct.orders.length} commandes sur 730j`
        );
      }
    }

    // Calcul consommation moyenne
    const consumptionPerDay = calculateDailyConsumption(
      ordersToUse,
      windowDays,
      new Date(analysisEndDate),
      clientReorderWindow ?? undefined
    );
    console.log(`     Consommation/jour: ${consumptionPerDay.toFixed(4)}`);

    // Skip si pas de consommation
    if (consumptionPerDay <= 0) {
      console.log(`     ❌ SKIP: Pas de consommation`);
      continue;
    }

    // Prédiction du stock
    const stockPrediction = predictStockStatus(
      product,
      consumptionPerDay,
      new Date(analysisEndDate)
    );
    console.log(`     Stock restant estimé: ${stockPrediction.estimatedStock.toFixed(2)}`);
    console.log(`     Jours avant rupture: ${stockPrediction.daysUntilStockout.toFixed(1)}j`);
    console.log(`     Seuil réappro: ${replenishmentThresholdDays}j (couverture ${targetCoverage}j + lead time ${leadTime}j)`);

    // QUANTITÉ: Calculer selon médiane de l'historique (baseline)
    const calculation = calculateQuantityFromHistory(ordersToUse);
    console.log(`     Quantité médiane: ${calculation.quantity} (${calculation.metadata.strategy}, ${calculation.metadata.confidence})`);

    // Skip si pas d'historique récent pour calculer la quantité
    if (calculation.quantity === null) {
      console.log(`     ❌ SKIP: Pas d'historique pour calculer quantité`);
      continue;
    }

    // Déterminer si LLM est nécessaire (>2 commandes)
    const needsLLM = ordersToUse.length > 2;
    if (needsLLM) {
      console.log(`     🔜 LLM requis (${ordersToUse.length} commandes)`);
    } else {
      console.log(`     📊 Médiane utilisée (≤2 commandes, pas de LLM)`);
    }

    productsToProcess.push({
      product,
      ordersToUse,
      windowDays,
      consumptionPerDay,
      stockPrediction,
      calculation,
      needsLLM,
    });
  }

  // ====================================================================
  // PHASE 2: Exécuter toutes les prédictions LLM en parallèle
  // ====================================================================
  const llmResults = new Map<number, LLMPredictionResult>();
  const llmInputData = new Map<number, {
    required: boolean;
    success: boolean;
    recent_orders: Array<{ date: string; quantity: number }>;
    last_year_orders: Array<{ date: string; quantity: number }>;
  }>();
  const productsNeedingLLM = productsToProcess.filter(p => p.needsLLM);

  if (productsNeedingLLM.length > 0) {
    console.log(`\n🤖 Lancement de ${productsNeedingLLM.length} prédictions LLM en parallèle (max 10 simultanées)...`);

    // Limite de concurrence: 10 requêtes LLM simultanées max
    // (Anthropic Haiku tier: 50 req/min, on reste safe à 10 parallèles)
    const limit = pLimit(10);

    const llmPromises = productsNeedingLLM.map((productData) =>
      limit(async () => {
        const { product, ordersToUse } = productData;

        // IMPORTANT: Pour le LLM, on utilise TOUJOURS fullHistory (730j) pour avoir accès à N-1
        // ordersToUse (120j) est utilisé pour consommation/stock, mais trop court pour N-1
        const fullProduct = fullHistory.products.find((p) => p.product_id === product.product_id);
        const ordersForLLM = fullProduct?.orders ?? ordersToUse;

        // Split orders into 2 views: recent (3 months) + same period last year
        // Following IRIS: compare current trend vs historical seasonal baseline
        const { recent, lastYear } = splitOrdersByPeriod(
          ordersForLLM, // ← Utiliser fullHistory pour avoir N-1 (12-24 mois avant)
          analysisEndDate,
          3 // 3 months period (maxOrdersPerView defaults to 12 for lastYear)
        );

        const recentOrders = recent.map(o => ({ date: o.date_order, quantity: o.quantity }));
        const lastYearOrders = lastYear.map(o => ({ date: o.date_order, quantity: o.quantity }));

        try {
          const llmResult = await predictWithLLM({
            productName: product.product_name,
            recentOrders,
            lastYearOrders,
            currentDate: analysisEndDate,
          });

          llmResults.set(product.product_id, llmResult);

          // Stocker les input data pour le rapport (SUCCESS)
          llmInputData.set(product.product_id, {
            required: true,
            success: true,
            recent_orders: recentOrders,
            last_year_orders: lastYearOrders,
          });

          console.log(
            `     ✅ LLM [${product.product_id}]: ${llmResult.prediction.recommended_quantity}u (${llmResult.prediction.confidence}) | tokens: ${llmResult.usage.totalTokens}`
          );

          return { success: true, productId: product.product_id };
        } catch (error) {
          // Stocker quand même les input data pour le rapport (FAILED)
          llmInputData.set(product.product_id, {
            required: true,
            success: false,
            recent_orders: recentOrders,
            last_year_orders: lastYearOrders,
          });

          console.log(
            `     ⚠️ LLM [${product.product_id}] failed, fallback to median: ${error instanceof Error ? error.message : "Unknown error"}`
          );
          return { success: false, productId: product.product_id };
        }
      })
    );

    // Attendre toutes les prédictions LLM
    await Promise.all(llmPromises);
    console.log(`\n✅ ${llmResults.size}/${productsNeedingLLM.length} prédictions LLM réussies`);
  }

  // ====================================================================
  // PHASE 3: Finaliser les produits avec les résultats LLM
  // ====================================================================
  for (const productData of productsToProcess) {
    const { product, ordersToUse, consumptionPerDay, stockPrediction, calculation } = productData;

    console.log(`\n  📦 Finalisation: ${product.product_name} (ID: ${product.product_id})`);

    // STRATÉGIE: Si >2 commandes → LLM, sinon → médiane
    let finalQuantity = calculation.quantity!;
    let llmPrediction = undefined;
    let quantitySource: "median" | "llm" = "median";

    const llmResult = llmResults.get(product.product_id);
    if (llmResult) {
      // REMPLACER la médiane par LLM
      finalQuantity = llmResult.prediction.recommended_quantity;
      quantitySource = "llm";

      llmPrediction = {
        quantity: llmResult.prediction.recommended_quantity,
        confidence: llmResult.prediction.confidence,
        reasoning: llmResult.prediction.reasoning,
        baseline_quantity: llmResult.prediction.baseline_quantity,
        // New structured analysis fields
        analysis: {
          frequency_pattern: llmResult.prediction.analysis.frequency_pattern,
          detected_outliers: llmResult.prediction.analysis.detected_outliers,
          seasonality_impact: llmResult.prediction.analysis.seasonality_impact,
          trend_direction: llmResult.prediction.analysis.trend_direction,
        },
        // Token usage for this specific product
        usage: {
          promptTokens: llmResult.usage.promptTokens,
          completionTokens: llmResult.usage.completionTokens,
          totalTokens: llmResult.usage.totalTokens,
        },
      };

      // Accumuler l'usage
      totalLLMCalls++;
      totalPromptTokens += llmResult.usage.promptTokens;
      totalCompletionTokens += llmResult.usage.completionTokens;

      const llmDiff = llmResult.prediction.recommended_quantity - calculation.quantity!;
      const llmDiffPct = (llmDiff / calculation.quantity!) * 100;
      console.log(
        `     ✅ LLM: ${llmResult.prediction.recommended_quantity}u (${llmResult.prediction.confidence}) | vs médiane: ${llmDiff > 0 ? "+" : ""}${llmDiff}u (${llmDiffPct > 0 ? "+" : ""}${llmDiffPct.toFixed(1)}%)`
      );
    }

    console.log(`     ✅ Quantité finale: ${finalQuantity}u (source: ${quantitySource})`);

    // Récupérer les input data LLM (si disponibles)
    const inputData = llmInputData.get(product.product_id);

    // Créer l'objet produit analysé (avec toutes ses infos)
    const productStatus: ProductStockStatus = {
      product_id: product.product_id,
      product_name: product.product_name,
      product_uom: product.product_uom,

      // 1. Historique des commandes (base)
      order_history: ordersToUse.map((order) => ({
        order_id: order.order_id,
        order_name: order.order_name,
        date_order: order.date_order,
        quantity: order.quantity,
        price_unit: order.price_unit,
      })),

      // 2. Stock prediction (Phase 1: TRIGGER)
      stock_prediction: {
        consumption_per_day: consumptionPerDay,
        estimated_stock_remaining: stockPrediction.estimatedStock,
        days_until_stockout: stockPrediction.daysUntilStockout,
        replenishment_threshold_days: replenishmentThresholdDays,
      },

      // 3. Quantity calculation (Phase 2: QUANTITÉ)
      quantity_to_order: finalQuantity, // LLM si >2 commandes, sinon médiane
      calculation_metadata: calculation.metadata,

      // 4. LLM prediction (si utilisé)
      llm_prediction: llmPrediction,
      quantity_source: quantitySource,

      // 5. LLM tracking
      llm_required: productData.needsLLM, // Propagé depuis PHASE 1
      llm_success: quantitySource === 'llm' && !!llmPrediction,

      // 6. LLM input data (pour debug/audit dans rapports)
      llm_input_data: inputData ? {
        recent_orders: inputData.recent_orders,
        last_year_orders: inputData.last_year_orders,
      } : undefined,
    };

    // Ajouter TOUS les produits analysés (pour backtest)
    allProducts.push(productStatus);

    // TRIGGER: Skip si stock suffisant (pas de risque de rupture)
    if (stockPrediction.daysUntilStockout > replenishmentThresholdDays) {
      console.log(`     ❌ SKIP: Stock OK (${stockPrediction.daysUntilStockout.toFixed(1)}j > ${replenishmentThresholdDays}j)`);
      continue;
    }

    console.log(`     ✅ TRIGGER: Risque de rupture détecté!`);
    console.log(`     ✅ À COMMANDER: ${finalQuantity} unités`);

    // Ajouter dans les produits à commander (pour prod)
    analyzedProducts.push(productStatus);
  }

  console.log(`\n✅ Analyse terminée: ${analyzedProducts.length} produits à commander`);

  // Log LLM usage
  if (totalLLMCalls > 0) {
    console.log(`\n🤖 LLM Usage:`);
    console.log(`   Calls: ${totalLLMCalls}`);
    console.log(`   Tokens: ${totalPromptTokens} input + ${totalCompletionTokens} output = ${totalPromptTokens + totalCompletionTokens} total`);
  }

  console.log();

  return {
    client_id: clientId,
    products: analyzedProducts,
    total_products_in_history: recentHistory.products.length, // Nombre total avant filtrage
    all_products: allProducts, // TOUS les produits analysés (pour backtest)
    llm_usage: totalLLMCalls > 0 ? {
      calls: totalLLMCalls,
      promptTokens: totalPromptTokens,
      completionTokens: totalCompletionTokens,
      totalTokens: totalPromptTokens + totalCompletionTokens,
    } : undefined,
  };
}
