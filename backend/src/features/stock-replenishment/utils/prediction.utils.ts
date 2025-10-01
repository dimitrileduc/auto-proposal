import type { ProductOrderHistory } from "../order-history/order-history.types";

/**
 * Prédit le statut du stock basé sur la consommation et la dernière commande
 *
 * @param product Historique des commandes du produit
 * @param consumptionPerDay Consommation moyenne par jour
 * @param currentDate Date actuelle (pour tests)
 * @returns Prédiction du stock
 */
export function predictStockStatus(
  product: ProductOrderHistory,
  consumptionPerDay: number,
  currentDate: Date = new Date()
): { estimatedStock: number; daysUntilStockout: number } {
  // Si pas de commandes, pas de stock
  if (product.orders.length === 0) {
    return { estimatedStock: 0, daysUntilStockout: 0 };
  }

  // Dernière commande (la plus récente)
  const lastOrder = product.orders[0];
  const lastOrderDate = new Date(lastOrder.date_order);
  const lastQuantity = lastOrder.quantity;

  // Calcul des jours écoulés depuis la dernière commande
  const daysElapsed = Math.floor(
    (currentDate.getTime() - lastOrderDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Estimation du stock restant
  const estimatedStock = lastQuantity - daysElapsed * consumptionPerDay;

  // Calcul des jours avant rupture (négatif = déjà en rupture)
  const daysUntilStockout = Math.trunc(estimatedStock / consumptionPerDay);

  return {
    estimatedStock,
    daysUntilStockout,
  };
}
