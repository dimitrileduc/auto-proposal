import { autoProposalConfig } from "../../../config/auto-proposal";
import type { OrderLineDetail, ProductOrderHistory } from "../order-history/order-history.types";
import { calculateMedian } from "./median.utils";

/**
 * Calcule la fenêtre moyenne de recommande du client
 * basée sur les intervalles entre commandes de ses produits réguliers
 *
 * @param products Liste de tous les produits du client avec leur historique
 * @returns Médiane des intervalles de recommande (jours) | null si pas assez de données
 *
 * @example
 * // Client a 3 produits réguliers :
 * // - Produit A : commandes à J0, J15, J30 → intervalles [15j, 15j]
 * // - Produit B : commandes à J0, J20, J40 → intervalles [20j, 20j]
 * // - Produit C : commandes à J0, J12, J24 → intervalles [12j, 12j]
 * // → Tous intervalles : [15, 15, 20, 20, 12, 12]
 * // → Médiane : 15 jours
 */
export function calculateClientReorderWindow(
  products: ProductOrderHistory[]
): number | null {
  const allIntervals: number[] = [];

  // Pour chaque produit du client
  for (const product of products) {
    // Skip produits avec moins de 2 commandes (pas d'intervalle calculable)
    if (product.orders.length < 2) continue;

    // Trier par date décroissante (plus récent d'abord)
    const sortedOrders = [...product.orders].sort(
      (a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime()
    );

    // Calculer les intervalles entre commandes successives
    for (let i = 0; i < sortedOrders.length - 1; i++) {
      const currentDate = new Date(sortedOrders[i].date_order);
      const nextDate = new Date(sortedOrders[i + 1].date_order);
      const daysBetween = (currentDate.getTime() - nextDate.getTime()) / (1000 * 60 * 60 * 24);
      allIntervals.push(daysBetween);
    }
  }

  // Pas assez de données (aucun produit avec 2+ commandes)
  if (allIntervals.length === 0) return null;

  // Retourner la médiane (robuste aux outliers)
  return calculateMedian(allIntervals);
}

/**
 * Calcule la consommation moyenne par jour basée sur l'historique des commandes
 *
 * Adapte automatiquement la période de calcul pour les produits récents :
 * - Produit commandé depuis 60j → calcul sur 60j (pas 365j)
 * - Évite de sous-estimer la consommation des nouveaux produits
 *
 * @param orders Liste des commandes d'un produit (triées par date décroissante)
 * @param daysOfHistory Période totale d'analyse en jours (ex: 365)
 * @param currentDate
 * @returns Consommation moyenne par jour
 */
export function calculateDailyConsumption(
  orders: OrderLineDetail[],
  daysOfHistory: number,
  currentDate: Date = new Date(),
  clientReorderWindow?: number
): number {
  if (orders.length === 0) {
    return 0;
  }

  const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);

  // Trouver la première commande de ce produit
  const firstOrderDate = new Date(
    Math.min(...orders.map((o) => new Date(o.date_order).getTime()))
  );

  // Jours depuis la première commande du produit
  const daysSinceFirstOrder = Math.floor(
    (currentDate.getTime() - firstOrderDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Pour produits avec 1 commande, utiliser la fenêtre client si disponible
  if (orders.length === 1 && clientReorderWindow) {
    console.log(`     ℹ️  Utilise fenêtre client (${clientReorderWindow.toFixed(1)}j) au lieu de ${daysSinceFirstOrder}j`);
    return totalQuantity / clientReorderWindow;
  }

  // Adapter la période: utiliser l'historique réel si < fenêtre d'analyse
  const actualDays = Math.min(daysOfHistory, daysSinceFirstOrder);

  return totalQuantity / actualDays;
}
