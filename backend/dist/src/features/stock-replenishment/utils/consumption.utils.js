import { autoProposalConfig } from "../../../config/auto-proposal";
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
export function calculateDailyConsumption(orders, daysOfHistory, currentDate = new Date()) {
    if (orders.length === 0) {
        return 0;
    }
    const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);
    // Trouver la première commande de ce produit
    const firstOrderDate = new Date(Math.min(...orders.map((o) => new Date(o.date_order).getTime())));
    // Jours depuis la première commande du produit
    const daysSinceFirstOrder = Math.floor((currentDate.getTime() - firstOrderDate.getTime()) / (1000 * 60 * 60 * 24));
    // Adapter la période: utiliser l'historique réel si < fenêtre d'analyse
    const actualDays = Math.min(daysOfHistory, daysSinceFirstOrder);
    return totalQuantity / actualDays;
}
