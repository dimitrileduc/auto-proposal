import { getProductOrderHistory } from "./order-history/order-history.service";
import { calculateDailyConsumption } from "./utils/consumption.utils";
import { predictStockStatus } from "./utils/prediction.utils";
import type { ProductAtRisk, StockAnalysisResult } from "./stock-analysis.types";

/**
 * Analyse le stock d'un client et identifie les produits à risque de rupture
 *
 * @param clientId ID du client Odoo (défaut: 3 = Arthur Schwaiger)
 * @param daysOfHistory Nombre de jours d'historique à analyser (défaut: 365)
 * @returns Liste des produits nécessitant une commande
 */
export async function analyzeStockForClient(
  clientId: number = 3,  // Arthur Schwaiger pour tests
  daysOfHistory: number = 365
): Promise<StockAnalysisResult> {
  // console.log(`\nAnalyse stock pour client ${clientId}`);

  // 1. Récupération de l'historique
  const orderHistory = await getProductOrderHistory(clientId, daysOfHistory);
  // console.log(`${orderHistory.products.length} produits trouvés dans l'historique`);

  const productsAtRisk: ProductAtRisk[] = [];

  // 2. Pour chaque produit, calculer la consommation
  for (const product of orderHistory.products) {
    // console.log(`\n  Produit: ${product.product_name}`);
    // console.log(`     Commandes: ${product.orders.length}`);

    // Calcul consommation moyenne
    const consumptionPerDay = calculateDailyConsumption(
      product.orders,
      daysOfHistory
    );

    // console.log(`     Consommation: ${consumptionPerDay.toFixed(2)} unités/jour`);

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

    // TODO: calcul quantités
    // Pour l'instant on met des valeurs temporaires pour tester

    productsAtRisk.push({
      product_id: product.product_id,
      product_name: product.product_name,
      product_uom: product.product_uom_id,
      consumption_per_day: consumptionPerDay,
      days_until_stockout: stockPrediction.daysUntilStockout,
      quantity_needed: 0,     // TODO
      quantity_to_order: 0,   // TODO
    });
  }

  return {
    client_id: clientId,
    products_at_risk: productsAtRisk,
  };
}