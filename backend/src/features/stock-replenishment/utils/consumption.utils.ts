import type { OrderLineDetail } from "../order-history/order-history.types";

/**
 * Calcule la consommation moyenne par jour basée sur l'historique des commandes
 *
 * @param orders Liste des commandes d'un produit
 * @param daysOfHistory Période totale d'analyse en jours
 * @returns Consommation moyenne par jour
 */
export function calculateDailyConsumption(
  orders: OrderLineDetail[],
  daysOfHistory: number
): number {
  // Pas de commandes = pas de consommation
  if (orders.length === 0) {
    return 0;
  }

  // Calcul du total des quantités commandées
  const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);

  // console.log(`     Total commandé: ${totalQuantity} unités sur ${daysOfHistory} jours`);

  // Consommation moyenne par jour
  const dailyConsumption = totalQuantity / daysOfHistory;

  return dailyConsumption;
}
