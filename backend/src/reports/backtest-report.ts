/**
 * Générateur de rapport markdown pour les résultats de backtesting
 *
 * Compare les prédictions du système auto-proposal avec les commandes réelles
 * et génère un rapport détaillé avec métriques et analyses
 */

import type { BacktestComparisonResult } from "../features/backtesting/backtest.types";
import { calculateProductMetrics, calculateQuantityMetrics } from "../features/backtesting/comparison.service";

/**
 * Filtre les produits avec low confidence (1 seule commande) et recalcule les métriques
 *
 * @param comparison - Résultat complet de la comparaison système vs réalité
 * @returns Nouvelle comparaison sans les produits low confidence
 */
export function filterLowConfidence(
  comparison: BacktestComparisonResult
): BacktestComparisonResult {
  // Filtrer les True Positives (garder seulement medium et high)
  const filteredTP = comparison.truePositives.filter(tp => tp.confidence !== 'low');

  // Recalculer métriques produit
  const productMetrics = calculateProductMetrics(
    filteredTP.length,
    comparison.falsePositives.length,
    comparison.falseNegatives.length
  );

  // Recalculer métriques quantité
  const quantityMetrics = calculateQuantityMetrics(filteredTP);

  return {
    ...comparison,
    truePositives: filteredTP,
    productMetrics,
    quantityMetrics,
  };
}

/**
 * Filtre pour garder UNIQUEMENT les produits avec low confidence (1 seule commande)
 *
 * @param comparison - Résultat complet de la comparaison système vs réalité
 * @returns Nouvelle comparaison avec seulement les produits low confidence
 */
export function filterOnlyLowConfidence(
  comparison: BacktestComparisonResult
): BacktestComparisonResult {
  // Filtrer les True Positives (garder seulement low)
  const filteredTP = comparison.truePositives.filter(tp => tp.confidence === 'low');

  // Recalculer métriques produit
  const productMetrics = calculateProductMetrics(
    filteredTP.length,
    comparison.falsePositives.length,
    comparison.falseNegatives.length
  );

  // Recalculer métriques quantité
  const quantityMetrics = calculateQuantityMetrics(filteredTP);

  return {
    ...comparison,
    truePositives: filteredTP,
    productMetrics,
    quantityMetrics,
  };
}

/**
 * Génère un rapport markdown détaillé du backtest
 *
 * @param comparison - Résultat complet de la comparaison système vs réalité
 * @returns Rapport markdown formaté
 */
export function generateBacktestReport(
  comparison: BacktestComparisonResult
): string {
  const { productMetrics, quantityMetrics } = comparison;

  return `# Rapport Backtest - Client ${comparison.clientName}

## Contexte

- **Client** : ${comparison.clientName} (ID: ${comparison.clientId})
- **Commande réelle** : ${comparison.orderName}
- **Date commande** : ${comparison.orderDate}
- **Date cutoff système** : ${comparison.cutoffDate}
- **Jours d'avance** : ${comparison.daysBeforePrediction}j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | ${(productMetrics.precision * 100).toFixed(1)}% | ${productMetrics.totalPredicted} produits prédits, ${comparison.truePositives.length} corrects |
| **Rappel** | ${(productMetrics.recall * 100).toFixed(1)}% | ${productMetrics.totalReal} produits réels, ${comparison.truePositives.length} détectés |
| **F1-Score** | ${(productMetrics.f1Score * 100).toFixed(1)}% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | ${quantityMetrics.mae.toFixed(2)} unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | ${quantityMetrics.mape.toFixed(1)}% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | ${quantityMetrics.distribution.exactMatch} | Égalité parfaite |
| Partial Match (>0u) | ${quantityMetrics.distribution.partialMatch} | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (${comparison.truePositives.length})

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>

${comparison.truePositives.length > 0 ? `
*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type |
|---------|--------|------|-----------|----------|------|
${comparison.truePositives.map(tp =>
  `| ${tp.productName} | ${tp.predictedQty} | ${tp.realQty} | ${tp.absoluteError.toFixed(1)} | ${tp.errorPercent.toFixed(1)}% | ${getMatchTypeEmoji(tp.matchType)} ${tp.matchType} |`
).join('\n')}
` : '*Aucun produit correctement prédit (rappel = 0%)*'}

---

## False Positives (${comparison.falsePositives.length})

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

${comparison.falsePositives.length > 0 ? `
*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
${comparison.falsePositives.map(fp =>
  `| ${fp.productName} | ${fp.qty} | ${fp.reason} |`
).join('\n')}
` : '*Aucun faux positif (précision = 100%)*'}

---

## False Negatives (${comparison.falseNegatives.length})

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>

${comparison.falseNegatives.length > 0 ? `
*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
${comparison.falseNegatives.map(fn =>
  `| ${fn.productName} | ${fn.qty} | ${fn.reason} |`
).join('\n')}
` : '*Aucun faux négatif (rappel = 100%)*'}

---

*Rapport généré automatiquement le ${new Date().toISOString()}*
`;
}

/**
 * Emoji selon le type de match quantité
 */
function getMatchTypeEmoji(matchType: 'exact' | 'partial'): string {
  switch (matchType) {
    case 'exact': return '🎯';
    case 'partial': return '✅';
  }
}

/**
 * Génère un rapport JSON compact du backtest pour analyse statistique
 *
 * @param comparison - Résultat complet de la comparaison système vs réalité
 * @returns Objet JSON avec métriques clés uniquement
 */
export function generateBacktestReportJSON(
  comparison: BacktestComparisonResult
) {
  return {
    clientId: comparison.clientId,
    clientName: comparison.clientName,
    orderName: comparison.orderName,
    orderDate: comparison.orderDate,
    cutoffDate: comparison.cutoffDate,
    daysBeforePrediction: comparison.daysBeforePrediction,
    metrics: {
      tp: comparison.truePositives.length,
      fp: comparison.falsePositives.length,
      fn: comparison.falseNegatives.length,
      precision: comparison.productMetrics.precision,
      recall: comparison.productMetrics.recall,
      f1Score: comparison.productMetrics.f1Score,
      mae: comparison.quantityMetrics.mae,
      mape: comparison.quantityMetrics.mape,
    },
    distribution: {
      exactMatch: comparison.quantityMetrics.distribution.exactMatch,
      partialMatch: comparison.quantityMetrics.distribution.partialMatch,
    },
  };
}
