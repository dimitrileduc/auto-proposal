import { getProductOrderHistory } from "./order-history/order-history.service";
import { calculateDailyConsumption } from "./utils/consumption.utils";
import { predictStockStatus } from "./utils/prediction.utils";
import { calculateQuantityFromHistory } from "./utils/quantity.utils";
import { autoProposalConfig } from "../../config/auto-proposal";
import { getDateDaysAgo } from "../../utils/date.utils";
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
 * @param daysOfHistory Nombre de jours d'historique à analyser
 * @returns Produits à commander avec quantités recommandées
 */
export async function calculateReplenishmentNeeds(
  clientId: number = autoProposalConfig.testing.defaultClientId,
  daysOfHistory: number = autoProposalConfig.analysisWindowDays
): Promise<StockReplenishmentResult> {
  // 1. Récupération de l'historique
  const orderHistory = await getProductOrderHistory(clientId, daysOfHistory);

  const analyzedProducts: ProductStockStatus[] = [];

  // 2. Pour chaque produit, analyser le risque de rupture
  for (const product of orderHistory.products) {
    // Calcul consommation moyenne
    const consumptionPerDay = calculateDailyConsumption(
      product.orders,
      daysOfHistory
    );

    // Skip si pas de consommation
    if (consumptionPerDay <= 0) {
      continue;
    }

    // Prédiction du stock
    const stockPrediction = predictStockStatus(
      product,
      consumptionPerDay,
      new Date()
    );

    const { targetCoverage, leadTime } = autoProposalConfig;
    const replenishmentThresholdDays = targetCoverage + leadTime;

    // TRIGGER: Skip si stock suffisant (pas de risque de rupture)
    if (stockPrediction.daysUntilStockout > replenishmentThresholdDays) {
      continue;
    }

    // QUANTITÉ: Calculer selon médiane de l'historique
    const calculation = calculateQuantityFromHistory(product.orders);

    // Skip si pas d'historique récent pour calculer la quantité
    if (calculation.quantity === null) {
      continue;
    }

    // TODO: Ajustement MOQ/multiples à implémenter plus tard
    // const quantityToOrder = adjustQuantityForConstraints(calculation.quantity);

    analyzedProducts.push({
      product_id: product.product_id,
      product_name: product.product_name,
      product_uom: product.product_uom_id,
      quantity_to_order: calculation.quantity,
      calculation_metadata: calculation.metadata,
    });
  }

  return {
    client_id: clientId,
    products: analyzedProducts,
  };
}
