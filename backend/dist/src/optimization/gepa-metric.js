/**
 * /backend/src/optimization/gepa-metric.ts
 *
 * Métrique multi-objectifs pour GEPA
 * Retourne 3 scores pour optimisation Pareto frontier
 *
 * Objectifs:
 * - Recall ≥ 90% (PRIORITÉ ABSOLUE)
 * - Precision ≥ 40%
 * - WMAPE ≤ 25%
 */
/**
 * Métrique GEPA: retourne 3 objectifs pour Pareto optimization
 * - recall: Capacité à détecter les vraies commandes (TP/TP+FN)
 * - precision: Qualité des prédictions positives (TP/TP+FP)
 * - accuracy: Précision des quantités (1 - WMAPE/100)
 */
export function gepaMultiObjectiveMetric({ prediction, example, }) {
    const predicted = Math.max(0, Math.round(prediction.quantity || 0));
    const expected = example.quantity;
    // Classification binaire
    const predictedOrder = predicted > 0;
    const actualOrder = expected > 0;
    // 1. RECALL (per-example): Si vraie commande, l'a-t-on détectée?
    let recall = 1.0; // Neutre si pas actualOrder
    if (actualOrder) {
        recall = predictedOrder ? 1.0 : 0.0; // TP=1, FN=0
    }
    // 2. PRECISION (per-example): Si on prédit, est-ce correct?
    let precision = 1.0; // Neutre si pas predictedOrder
    if (predictedOrder) {
        precision = actualOrder ? 1.0 : 0.0; // TP=1, FP=0
    }
    // 3. ACCURACY (quantité): Inverse du MAPE
    let accuracy = 0.0;
    if (actualOrder && predictedOrder) {
        // True Positive: évaluer erreur quantité
        const mape = Math.abs(predicted - expected) / expected;
        accuracy = Math.max(0, 1 - mape); // 0% erreur = 1.0
    }
    else if (!actualOrder && !predictedOrder) {
        // True Negative: parfait
        accuracy = 1.0;
    }
    // FP ou FN: accuracy reste à 0.0
    return { recall, precision, accuracy };
}
/**
 * Calcul métriques agrégées pour validation
 * Compatible avec l'interface existante de metric.ts
 */
export function calculateAggregateMetrics(results) {
    let tp = 0, fp = 0, fn = 0, tn = 0;
    let totalAbsError = 0, totalExpected = 0;
    for (const { prediction, example } of results) {
        const predicted = Math.max(0, Math.round(prediction.quantity || 0));
        const expected = example.quantity;
        const predictedOrder = predicted > 0;
        const actualOrder = expected > 0;
        if (predictedOrder && actualOrder) {
            tp++;
            totalAbsError += Math.abs(predicted - expected);
            totalExpected += expected;
        }
        else if (predictedOrder && !actualOrder) {
            fp++;
        }
        else if (!predictedOrder && actualOrder) {
            fn++;
            totalAbsError += expected; // 100% erreur
            totalExpected += expected;
        }
        else {
            tn++;
        }
    }
    const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
    const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
    const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
    const wmape = totalExpected > 0 ? (totalAbsError / totalExpected) * 100 : 0;
    const avgQuantityError = tp > 0 ? totalAbsError / tp : 0;
    // averageScore compatible avec format existant
    // Poids: Recall (62.5%), Precision (12.5%), Accuracy (25%)
    const averageScore = recall * 0.625 + precision * 0.125 + (1 - wmape / 100) * 0.25;
    return {
        averageScore,
        precision,
        recall,
        f1,
        avgQuantityError,
        wmape,
    };
}
/**
 * Métrique combinée SÉCURISÉE - Ne retourne JAMAIS NaN
 * Système de points: Recall(4pts) + Precision(3pts) - Pénalité rupture(5pts)
 */
export function gepaCombinedMetric({ prediction, example }) {
    // Sécurisation: Si pas de prédiction valide, score 0
    const predicted = prediction?.quantity;
    if (predicted === undefined || predicted === null || isNaN(predicted)) {
        return 0;
    }
    const actual = example.quantity;
    let score = 0;
    // 1. RECALL (Vital) - 4 points
    // Si vraie commande détectée OU si pas de commande et prédit 0
    if (actual > 0 && predicted > 0) {
        score += 4; // True Positive
    }
    else if (actual === 0 && predicted === 0) {
        score += 1; // True Negative (bonus mineur)
    }
    // 2. PRECISION (Bonus) - 3 points
    // Quantité exacte
    if (predicted === actual) {
        score += 3;
    }
    else if (actual > 0 && predicted > 0) {
        // Quantité proche (erreur < 50%)
        const error = Math.abs(predicted - actual) / actual;
        if (error < 0.5) {
            score += 1; // Bonus partiel si proche
        }
    }
    // 3. PÉNALITÉ RUPTURE (Critique) - 5 points
    if (actual > 0 && predicted === 0) {
        score -= 5; // PUNITION SUPRÊME (False Negative = rupture stock)
    }
    // 4. Pénalité False Positive (moins grave)
    if (actual === 0 && predicted > 0) {
        score -= 1; // Surstock moins grave que rupture
    }
    return score;
}
