/**
 * Calcule la médiane d'un tableau de nombres
 * La médiane ignore les valeurs aberrantes (outliers)
 *
 * @param values - Tableau de nombres
 * @returns La médiane arrondie à l'entier le plus proche
 *
 * @example
 * calculateMedian([10, 12, 11, 100, 12]) // 12 (ignore l'outlier à 100)
 * calculateMedian([10, 12]) // 11 (moyenne de 10 et 12)
 * calculateMedian([12]) // 12
 */
export function calculateMedian(values) {
    if (values.length === 0) {
        throw new Error("Cannot calculate median of empty array");
    }
    // Copie et tri du tableau
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    // Si nombre pair d'éléments → moyenne des 2 valeurs centrales
    if (sorted.length % 2 === 0) {
        const median = (sorted[mid - 1] + sorted[mid]) / 2;
        return Math.round(median);
    }
    // Si nombre impair → valeur centrale
    return Math.round(sorted[mid]);
}
