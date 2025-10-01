import { getProductOrderHistory } from "./order-history/order-history.service";
import { calculateDailyConsumption } from "./utils/consumption.utils";
import { predictStockStatus } from "./utils/prediction.utils";
import { calculateQuantityNeeded } from "./utils/quantity.utils";
import { autoProposalConfig } from "../../config/auto-proposal";
import type {
  ProductStockStatus,
  StockReplenishmentResult,
} from "./stock-replenishment.types";

/**
 * Calcule les besoins de réapprovisionnement d'un client
 *
 * @param clientId ID du client Odoo
 * @param daysOfHistory Nombre de jours d'historique à analyser
 * @returns Statut des produits avec consommation et prédictions
 */
export async function calculateReplenishmentNeeds(
  clientId: number = autoProposalConfig.testing.defaultClientId,
  daysOfHistory: number = autoProposalConfig.analysisWindowDays
): Promise<StockReplenishmentResult> {
  // 1. Récupération de l'historique
  const orderHistory = await getProductOrderHistory(clientId, daysOfHistory);

  const analyzedProducts: ProductStockStatus[] = [];

  // 2. Pour chaque produit, calculer la consommation
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

    // Filter: skip if stock sufficient
    if (stockPrediction.daysUntilStockout > replenishmentThresholdDays) {
      continue;
    }

    // Calculate quantity: stock>0 → complete to threshold | stock≤0 → order for threshold (ignore past stockout)
    const daysToCompensate =
      stockPrediction.daysUntilStockout > 0
        ? replenishmentThresholdDays - stockPrediction.daysUntilStockout
        : replenishmentThresholdDays;

    const quantityNeeded = calculateQuantityNeeded(
      consumptionPerDay,
      daysToCompensate
    );

    // TODO: Ajustement MOQ/multiples à implémenter plus tard
    // const quantityToOrder = adjustQuantityForConstraints(quantityNeeded); Moq et UoM

    analyzedProducts.push({
      product_id: product.product_id,
      product_name: product.product_name,
      product_uom: product.product_uom_id,
      consumption_per_day: consumptionPerDay,
      days_until_stockout: stockPrediction.daysUntilStockout,
      quantity_needed: quantityNeeded,
      quantity_to_order: 0, // TODO : Ajustement MOQ/Uom à implémenter plus tard
    });
  }

  return {
    client_id: clientId,
    products: analyzedProducts,
  };
}
