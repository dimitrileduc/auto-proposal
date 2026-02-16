/**
 * Fonction de métrique pour l'optimisation ax
 *
 * SIMPLIFIÉ: 100% basé sur la quantité
 * - quantity = 0 signifie pas de commande
 * - quantity > 0 signifie commande avec cette quantité
 */

import type { StockTrainingExample } from "./stock-predictor";

interface Prediction {
  quantity: number;
  reasoning?: string;
}

interface MetricInput {
  prediction: Prediction;
  example: StockTrainingExample;
}

/**
 * Métrique principale - 100% quantité
 *
 * Score entre 0 et 1:
 * - 1.0 = quantité exacte
 * - 0.0 = erreur >= 100%
 *
 * Cas spéciaux:
 * - Si expected = 0 et predicted = 0 → 1.0 (True Negative parfait)
 * - Si expected = 0 et predicted > 0 → 0.0 (False Positive)
 * - Si expected > 0 et predicted = 0 → 0.0 (False Negative)
 * - Si expected > 0 et predicted > 0 → score basé sur l'erreur relative
 */
export function stockMetric({ prediction, example }: MetricInput): number {
  const predicted = Math.max(0, Math.round(prediction.quantity || 0));
  const expected = example.quantity;

  // Cas 1: Les deux sont 0 (True Negative)
  if (expected === 0 && predicted === 0) {
    return 1.0;
  }

  // Cas 2: False Positive (prédit commande alors qu'il n'y en a pas)
  if (expected === 0 && predicted > 0) {
    return 0.0;
  }

  // Cas 3: False Negative (ne prédit pas de commande alors qu'il y en a une)
  if (expected > 0 && predicted === 0) {
    return 0.0;
  }

  // Cas 4: Les deux > 0 - évaluer l'erreur sur la quantité
  const error = Math.abs(predicted - expected);
  const relativeError = error / expected;

  // Score décroissant linéairement avec l'erreur
  // 0% erreur → 1.0
  // 50% erreur → 0.5
  // 100%+ erreur → 0.0
  return Math.max(0, 1 - relativeError);
}

/**
 * Calcule les métriques agrégées sur un ensemble de prédictions
 */
export function calculateAggregateMetrics(
  results: Array<{ prediction: Prediction; example: StockTrainingExample }>
): {
  averageScore: number;
  precision: number;
  recall: number;
  f1: number;
  avgQuantityError: number;
  wmape: number;
} {
  let totalScore = 0;
  let tp = 0,
    fp = 0,
    fn = 0,
    tn = 0;
  let totalAbsError = 0;
  let totalExpected = 0;

  for (const { prediction, example } of results) {
    totalScore += stockMetric({ prediction, example });

    const predicted = Math.max(0, Math.round(prediction.quantity || 0));
    const expected = example.quantity;

    // Classification basée sur quantity > 0
    const predictedOrder = predicted > 0;
    const actualOrder = expected > 0;

    if (predictedOrder && actualOrder) {
      tp++;
      totalAbsError += Math.abs(predicted - expected);
      totalExpected += expected;
    } else if (predictedOrder && !actualOrder) {
      fp++;
    } else if (!predictedOrder && actualOrder) {
      fn++;
      totalAbsError += expected; // Erreur = 100% de la quantité attendue
      totalExpected += expected;
    } else {
      tn++;
    }
  }

  const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
  const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
  const f1 =
    precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
  const wmape = totalExpected > 0 ? (totalAbsError / totalExpected) * 100 : 0;
  const avgQuantityError = tp > 0 ? totalAbsError / tp : 0;

  return {
    averageScore: totalScore / results.length,
    precision,
    recall,
    f1,
    avgQuantityError,
    wmape,
  };
}
