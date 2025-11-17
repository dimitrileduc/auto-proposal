import { getProductOrderHistory } from "./order-history/order-history.service";
import { calculateDailyConsumption } from "./utils/consumption.utils";
import { predictStockStatus } from "./utils/prediction.utils";
import { calculateQuantityFromHistory } from "./utils/quantity.utils";
import { autoProposalConfig } from "../../config/auto-proposal";
import { getTodayAsDateString } from "../../utils/date.utils";
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

  console.log(
    `\n🔍 Analyse de ${recentHistory.products.length} produits pour client ${clientId}...`
  );

  const analyzedProducts: ProductStockStatus[] = []; // Produits à commander uniquement
  const allProducts: ProductStockStatus[] = []; // TOUS les produits analysés (pour backtest)

  // 3. Pour chaque produit récent, analyser le risque de rupture
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
      new Date(analysisEndDate)
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

    // Utiliser les valeurs de config ou les valeurs par défaut
    const targetCoverage = config?.targetCoverage ?? autoProposalConfig.targetCoverage;
    const leadTime = config?.leadTime ?? autoProposalConfig.leadTime;
    const replenishmentThresholdDays = targetCoverage + leadTime;
    console.log(`     Seuil réappro: ${replenishmentThresholdDays}j (couverture ${targetCoverage}j + lead time ${leadTime}j)`);

    // QUANTITÉ: Calculer selon médiane de l'historique
    const calculation = calculateQuantityFromHistory(ordersToUse);
    console.log(`     Quantité calculée: ${calculation.quantity} (${calculation.metadata.strategy}, ${calculation.metadata.confidence})`);

    // Skip si pas d'historique récent pour calculer la quantité
    if (calculation.quantity === null) {
      console.log(`     ❌ SKIP: Pas d'historique pour calculer quantité`);
      continue;
    }

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
      quantity_to_order: calculation.quantity,
      calculation_metadata: calculation.metadata,
    };

    // Ajouter TOUS les produits analysés (pour backtest)
    allProducts.push(productStatus);

    // TRIGGER: Skip si stock suffisant (pas de risque de rupture)
    if (stockPrediction.daysUntilStockout > replenishmentThresholdDays) {
      console.log(`     ❌ SKIP: Stock OK (${stockPrediction.daysUntilStockout.toFixed(1)}j > ${replenishmentThresholdDays}j)`);
      continue;
    }

    console.log(`     ✅ TRIGGER: Risque de rupture détecté!`);
    console.log(`     ✅ À COMMANDER: ${calculation.quantity} unités`);

    // Ajouter dans les produits à commander (pour prod)
    analyzedProducts.push(productStatus);
  }

  console.log(`\n✅ Analyse terminée: ${analyzedProducts.length} produits à commander\n`);

  return {
    client_id: clientId,
    products: analyzedProducts,
    total_products_in_history: recentHistory.products.length, // Nombre total avant filtrage
    all_products: allProducts, // TOUS les produits analysés (pour backtest)
  };
}
