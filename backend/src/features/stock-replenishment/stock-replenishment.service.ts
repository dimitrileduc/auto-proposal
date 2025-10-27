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

  // 1. Récupération de l'historique
  const orderHistory = await getProductOrderHistory(clientId, daysOfHistory, analysisEndDate);

  const analyzedProducts: ProductStockStatus[] = [];

  // 2. Pour chaque produit, analyser le risque de rupture
  console.log(`\n🔍 Analyse de ${orderHistory.products.length} produits pour client ${clientId}...`);

  for (const product of orderHistory.products) {
    console.log(`\n  📦 Produit: ${product.product_name} (ID: ${product.product_id})`);

    // Skip produits de type "service" (transport, frais, etc.)
    if (product.product_type === "service") {
      console.log(`     ❌ SKIP: Produit de type service`);
      continue;
    }

    // Calcul consommation moyenne
    const consumptionPerDay = calculateDailyConsumption(
      product.orders,
      daysOfHistory
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
      new Date()
    );
    console.log(`     Stock restant estimé: ${stockPrediction.estimatedStock.toFixed(2)}`);
    console.log(`     Jours avant rupture: ${stockPrediction.daysUntilStockout.toFixed(1)}j`);

    // Utiliser les valeurs de config ou les valeurs par défaut
    const targetCoverage = config?.targetCoverage ?? autoProposalConfig.targetCoverage;
    const leadTime = config?.leadTime ?? autoProposalConfig.leadTime;
    const replenishmentThresholdDays = targetCoverage + leadTime;
    console.log(`     Seuil réappro: ${replenishmentThresholdDays}j (couverture ${targetCoverage}j + lead time ${leadTime}j)`);

    // TRIGGER: Skip si stock suffisant (pas de risque de rupture)
    if (stockPrediction.daysUntilStockout > replenishmentThresholdDays) {
      console.log(`     ❌ SKIP: Stock OK (${stockPrediction.daysUntilStockout.toFixed(1)}j > ${replenishmentThresholdDays}j)`);
      continue;
    }

    console.log(`     ✅ TRIGGER: Risque de rupture détecté!`);

    // QUANTITÉ: Calculer selon médiane de l'historique
    const calculation = calculateQuantityFromHistory(product.orders);
    console.log(`     Quantité calculée: ${calculation.quantity} (${calculation.metadata.strategy}, ${calculation.metadata.confidence})`);

    // Skip si pas d'historique récent pour calculer la quantité
    if (calculation.quantity === null) {
      console.log(`     ❌ SKIP: Pas d'historique pour calculer quantité`);
      continue;
    }

    console.log(`     ✅ À COMMANDER: ${calculation.quantity} unités`);

    // TODO: Ajustement MOQ/multiples à implémenter plus tard
    // const quantityToOrder = adjustQuantityForConstraints(calculation.quantity);

    analyzedProducts.push({
      product_id: product.product_id,
      product_name: product.product_name,
      product_uom: product.product_uom,

      // 1. Historique des commandes (base)
      order_history: product.orders.map((order) => ({
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
    });
  }

  console.log(`\n✅ Analyse terminée: ${analyzedProducts.length} produits à commander\n`);

  return {
    client_id: clientId,
    products: analyzedProducts,
    total_products_in_history: orderHistory.products.length, // Nombre total avant filtrage
  };
}
