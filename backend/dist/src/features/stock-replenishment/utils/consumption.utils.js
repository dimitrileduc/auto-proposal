import { autoProposalConfig } from "../../../config/auto-proposal";
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
export function calculateClientReorderWindow(products) {
    const allIntervals = [];
    // Pour chaque produit du client
    for (const product of products) {
        // Skip produits avec moins de 2 commandes (pas d'intervalle calculable)
        if (product.orders.length < 2)
            continue;
        // Trier par date décroissante (plus récent d'abord)
        const sortedOrders = [...product.orders].sort((a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime());
        // Calculer les intervalles entre commandes successives
        for (let i = 0; i < sortedOrders.length - 1; i++) {
            const currentDate = new Date(sortedOrders[i].date_order);
            const nextDate = new Date(sortedOrders[i + 1].date_order);
            const daysBetween = (currentDate.getTime() - nextDate.getTime()) / (1000 * 60 * 60 * 24);
            allIntervals.push(daysBetween);
        }
    }
    // Pas assez de données (aucun produit avec 2+ commandes)
    if (allIntervals.length === 0)
        return null;
    // Retourner la médiane (robuste aux outliers)
    return calculateMedian(allIntervals);
}
/**
 * Calcule la consommation journalière via l'algorithme SBA (Syntetos-Boylan Approximation)
 *
 * SBA sépare la demande en deux composantes :
 * - Taille typique des commandes (z_hat)
 * - Intervalle typique entre commandes (p_hat)
 *
 * Puis applique une correction de biais : (1 - α/2)
 *
 * Référence : Section 3.2 du rapport expert sur demande intermittente
 *
 * @param orders Liste des commandes d'un produit (triées par date décroissante)
 * @param alpha Coefficient de lissage SBA (défaut: 0.1)
 * @returns Consommation moyenne par jour avec correction biais SBA
 */
function calculateDailyConsumptionSBA(orders, alpha = 0.1) {
    if (orders.length < 2) {
        throw new Error("SBA requires at least 2 orders");
    }
    // Trier par date décroissante (plus récent d'abord)
    const sorted = [...orders].sort((a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime());
    // 1. Calculer z_hat : taille typique des commandes (médiane pour robustesse)
    const quantities = sorted.map(o => o.quantity);
    const z_hat = calculateMedian(quantities);
    // 2. Calculer p_hat : intervalle typique entre commandes (médiane)
    const intervals = [];
    for (let i = 0; i < sorted.length - 1; i++) {
        const currentDate = new Date(sorted[i].date_order);
        const nextDate = new Date(sorted[i + 1].date_order);
        const daysBetween = (currentDate.getTime() - nextDate.getTime()) / (1000 * 60 * 60 * 24);
        intervals.push(daysBetween);
    }
    const p_hat = calculateMedian(intervals);
    // 3. Correction du biais SBA : (1 - α/2)
    // Cette correction réduit le biais positif de la méthode de Croston
    const sbaCorrection = 1 - alpha / 2;
    // 4. Consommation journalière = (taille / intervalle) × correction
    return (z_hat / p_hat) * sbaCorrection;
}
/**
 * Calcule la consommation moyenne par jour basée sur l'historique des commandes
 *
 * Utilise l'algorithme SBA pour les produits avec 2+ commandes (demande intermittente)
 * Fallback sur fenêtre client pour les produits avec 1 seule commande
 *
 * @param orders Liste des commandes d'un produit (triées par date décroissante)
 * @param daysOfHistory Période totale d'analyse en jours (ex: 365)
 * @param currentDate
 * @returns Consommation moyenne par jour
 */
export function calculateDailyConsumption(orders, daysOfHistory, currentDate = new Date(), clientReorderWindow) {
    if (orders.length === 0) {
        return 0;
    }
    // ========================================
    // NOUVELLE APPROCHE : Algorithme SBA
    // ========================================
    // Pour produits avec 2+ commandes, utiliser SBA (demande intermittente B2B)
    if (orders.length >= 2) {
        return calculateDailyConsumptionSBA(orders, 0.1);
    }
    // ========================================
    // FALLBACK : 1 seule commande
    // ========================================
    const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);
    // Trouver la première commande de ce produit
    const firstOrderDate = new Date(Math.min(...orders.map((o) => new Date(o.date_order).getTime())));
    // Jours depuis la première commande du produit
    const daysSinceFirstOrder = Math.floor((currentDate.getTime() - firstOrderDate.getTime()) / (1000 * 60 * 60 * 24));
    // Pour produits avec 1 commande, utiliser la fenêtre client si disponible
    if (clientReorderWindow) {
        console.log(`     ℹ️  Utilise fenêtre client (${clientReorderWindow.toFixed(1)}j) au lieu de ${daysSinceFirstOrder}j`);
        return totalQuantity / clientReorderWindow;
    }
    // Sinon, utiliser l'historique réel
    const actualDays = Math.min(daysOfHistory, daysSinceFirstOrder);
    return totalQuantity / actualDays;
}
