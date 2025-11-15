/**
 * Trie les produits par fréquence de commande puis confiance
 *
 * Critères de tri (par ordre de priorité):
 * 1. Fréquence de commande (order_count DESC) - Les plus commandés en premier
 * 2. Confiance (high > medium > low) - En cas d'égalité
 *
 * Utilisé pour l'ajustement MOQ: investir le gap sur les produits
 * que le client achète le plus souvent
 *
 * @example
 * ```
 * Avant tri:
 * ┌────┬─────────────────────────┬───────────┬────────────┐
 * │ ID │ Produit                 │ Commandes │ Confiance  │
 * ├────┼─────────────────────────┼───────────┼────────────┤
 * │ A  │ Tartinade Mangue        │ 1         │ low        │
 * │ B  │ Tartinade Paprika       │ 3         │ medium     │
 * │ C  │ Tartinade Houmous       │ 1         │ low        │
 * │ D  │ Tartinade Tomato        │ 3         │ high       │
 * │ E  │ Tartinade Olives        │ 2         │ medium     │
 * │ F  │ Tartinade Basilico      │ 3         │ medium     │
 * └────┴─────────────────────────┴───────────┴────────────┘
 *
 * Après tri:
 * ┌──────┬─────────────────────────┬───────────┬────────────┐
 * │ Rang │ Produit                 │ Commandes │ Confiance  │
 * ├──────┼─────────────────────────┼───────────┼────────────┤
 * │ 1er  │ D - Tomato              │ 3         │ high       │ ← Plus commandé + high conf
 * │ 2e   │ B - Paprika             │ 3         │ medium     │ ← 3 commandes
 * │ 3e   │ F - Basilico            │ 3         │ medium     │ ← 3 commandes
 * │ 4e   │ E - Olives              │ 2         │ medium     │
 * │ 5e   │ A - Mangue              │ 1         │ low        │
 * │ 6e   │ C - Houmous             │ 1         │ low        │
 * └──────┴─────────────────────────┴───────────┴────────────┘
 * ```
 *
 * @param products - Produits avec prix actuels
 * @returns Produits triés par priorité d'ajustement
 */
export function sortByOrderFrequencyAndConfidence(products) {
    return [...products].sort((a, b) => {
        // Critère 1: Fréquence de commande (DESC)
        const orderCountDiff = b.calculation_metadata.order_count - a.calculation_metadata.order_count;
        if (orderCountDiff !== 0) {
            return orderCountDiff;
        }
        // Critère 2: Confiance (DESC) - en cas d'égalité
        const confidenceOrder = {
            high: 3,
            medium: 2,
            low: 1,
        };
        return (confidenceOrder[b.calculation_metadata.confidence] -
            confidenceOrder[a.calculation_metadata.confidence]);
    });
}
