/**
 * Générateur de rapport markdown pour les résultats de backtesting
 *
 * Compare les prédictions du système auto-proposal avec les commandes réelles
 * et génère un rapport détaillé avec métriques et analyses
 */

import type {
  BacktestComparisonResult,
  BacktestReportJSONv2,
  MetricsByConfidence,
  HistoryStatistics,
  ProductFeatures,
  EnrichedProductMatch,
  EnrichedProductMismatch,
  ProductMatch,
} from "../features/backtesting/backtest.types";
import type { ProductStockStatus, StockReplenishmentResult } from "../features/stock-replenishment/stock-replenishment.types";
import { calculateProductMetrics, calculateQuantityMetrics } from "../features/backtesting/comparison.service";
import { calculateMedian } from "../features/stock-replenishment/utils/median.utils";

/**
 * Type interne pour les commandes historiques
 */
interface HistoricalOrder {
  order_id?: number;
  order_name?: string;
  date_order: string;
  product_qty: number;
  price_unit?: number;
}

/**
 * Type pour le rapport agrégé v2
 */
interface AggregatedReportV2 {
  meta: {
    version: string;
    type: string;
    generatedAt: string;
    casesIncluded: number;
    cases: Array<{ clientId: number; orderName: string }>;
  };
  metricsByConfidence: {
    low: MetricsByConfidence;
    medium: MetricsByConfidence;
    high: MetricsByConfidence;
  };
  byClient: {
    precision: { mean: number; median: number; stdDev: number; min: number; max: number };
    recall: { mean: number; median: number; stdDev: number; min: number; max: number };
    f1Score: { mean: number; median: number; stdDev: number; min: number; max: number };
    mae: { mean: number; median: number; stdDev: number; min: number; max: number };
    wmape: { mean: number; median: number; stdDev: number; min: number; max: number };
    mape: { mean: number; median: number; stdDev: number; min: number; max: number };
    clients: Array<{ clientId: number; metrics: Record<string, number> }>;
  };
  llmUsage: {
    calls: number;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

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
 * Génère la section des données d'input LLM pour tous les produits qui ont nécessité le LLM
 */
function generateLLMInputDataSection(truePositives: ProductMatch[]): string {
  const productsWithLLMData = truePositives.filter(tp => tp.llm_input_data);

  if (productsWithLLMData.length === 0) {
    return '';
  }

  return `
### 📊 Données d'Input LLM (${productsWithLLMData.length} produits)

${productsWithLLMData.map((tp, index) => {
  const recentOrders = tp.llm_input_data?.recent_orders || [];
  const lastYearOrders = tp.llm_input_data?.last_year_orders || [];

  return `
<details>
<summary><strong>${index + 1}. ${tp.productName}</strong> - ${tp.llm_success ? '✅ LLM Réussi' : '❌ LLM Échoué (fallback médiane)'}</summary>

**📅 Commandes Récentes (3 derniers mois):**
${recentOrders.length > 0
  ? recentOrders.map((o: { date: string; quantity: number }) => `- ${o.date}: ${o.quantity}u`).join('\n')
  : '- Aucune commande récente'}

**📅 Commandes N-1 (même période année dernière):**
${lastYearOrders.length > 0
  ? lastYearOrders.map((o: { date: string; quantity: number }) => `- ${o.date}: ${o.quantity}u`).join('\n')
  : '- Aucune commande N-1'}

${tp.llm_success
  ? `**✅ Quantité LLM**: ${tp.llmPrediction.quantity}u (confidence: ${tp.llmPrediction.confidence})`
  : `**📊 Quantité Médiane (fallback)**: ${tp.predictedQty}u`}
**📊 Quantité Réelle**: ${tp.realQty}u

</details>
`;
}).join('\n')}
`;
}

/**
 * Génère la section détaillée des prédictions LLM pour les True Positives
 */
function generateLLMDetailSection(truePositives: ProductMatch[]): string {
  const llmProducts = truePositives.filter(tp => tp.quantitySource === 'llm' && tp.llmPrediction);

  if (llmProducts.length === 0) {
    return '';
  }

  return `
### 🤖 Détails des Prédictions LLM (${llmProducts.length} produits)

${llmProducts.map((tp, index) => {
  const medianQty = tp.medianQty !== undefined ? tp.medianQty : 'N/A';
  const medianError = tp.medianQty !== undefined && tp.medianQty !== null
    ? `${Math.abs(tp.medianQty - tp.realQty)}u (${((Math.abs(tp.medianQty - tp.realQty) / tp.realQty) * 100).toFixed(1)}%)`
    : 'N/A';

  return `
<details>
<summary><strong>${index + 1}. ${tp.productName}</strong> - LLM: ${tp.llmPrediction.quantity}u vs Médiane: ${medianQty}u (Réel: ${tp.realQty}u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: ${tp.llmPrediction.quantity}u
- 📊 **Baseline calculée**: ${tp.llmPrediction.baseline_quantity}u
- 📊 **Médiane historique**: ${medianQty}u
- ✅ **Réel commandé**: ${tp.realQty}u
- 📉 **Erreur LLM**: ${Math.abs(tp.llmPrediction.quantity - tp.realQty)}u (${((Math.abs(tp.llmPrediction.quantity - tp.realQty) / tp.realQty) * 100).toFixed(1)}%)
- 📉 **Erreur Médiane**: ${medianError}

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ${tp.llmPrediction.quantity > 0 ? '✅ OUI → Commande nécessaire' : '❌ NON → Pas de commande'}
- **Quantité décidée**: ${tp.llmPrediction.quantity === 0 ? '0u (pas de risque)' : `${tp.llmPrediction.quantity}u (risque détecté)`}

**🎯 Niveaux de Confiance:**
- **Confiance globale**: ${tp.llmPrediction.confidence}
- **Confiance Phase 1 (détection risque)**: ${tp.llmPrediction.confidence_phase1 || 'N/A'}
- **Confiance Phase 2 (quantité)**: ${tp.llmPrediction.confidence_phase2 || 'N/A'}

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: ${tp.llmPrediction.analysis?.frequency_pattern || 'N/A'}
- **Cycle médian (jours)**: ${tp.llmPrediction.analysis?.cycle_days || 'N/A'}
- **Dernière commande**: ${tp.llmPrediction.analysis?.last_order_date || 'N/A'}
- **Prochaine prédite**: ${tp.llmPrediction.analysis?.predicted_next_date || 'N/A'} ${tp.llmPrediction.analysis?.days_until_next ? `(dans ${tp.llmPrediction.analysis.days_until_next}j)` : ''}
- **Dans horizon 30j ?**: ${tp.llmPrediction.analysis?.days_until_next && tp.llmPrediction.analysis.days_until_next <= 30 ? '✅ OUI' : '❌ NON'}
- **Saisonnalité**: ${tp.llmPrediction.analysis?.seasonality_impact || 'N/A'}
- **Tendance**: ${tp.llmPrediction.analysis?.trend_direction || 'N/A'}
- **Analyse jour cycle**: ${tp.llmPrediction.analysis?.day_cycle_analysis || 'N/A'}
- **Outliers détectés**: ${tp.llmPrediction.analysis?.detected_outliers && tp.llmPrediction.analysis.detected_outliers.length > 0
  ? tp.llmPrediction.analysis.detected_outliers.map((o: number) => `${o}u`).join(', ')
  : 'Aucun'}

**🧠 Raisonnement LLM:**
${tp.llmPrediction.reasoning || 'Non disponible'}

${tp.llmPrediction.usage ? `**📊 Tokens utilisés pour cette prédiction:**
- **Input**: ${tp.llmPrediction.usage.promptTokens.toLocaleString()} tokens
- **Output**: ${tp.llmPrediction.usage.completionTokens.toLocaleString()} tokens
- **Total**: ${tp.llmPrediction.usage.totalTokens.toLocaleString()} tokens` : ''}

${tp.llmPrediction.provider_reasoning ? `**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

${tp.llmPrediction.provider_reasoning}

</details>` : ''}

</details>
`;
}).join('\n')}
`;
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

${comparison.llmUsage ? `
### 🤖 Usage LLM

- **Appels**: ${comparison.llmUsage.calls}
- **Tokens**: ${comparison.llmUsage.promptTokens.toLocaleString()} input + ${comparison.llmUsage.completionTokens.toLocaleString()} output = ${comparison.llmUsage.totalTokens.toLocaleString()} total
` : ''}

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
| **MAE** | ${quantityMetrics.mae.toFixed(2)} unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | ${quantityMetrics.wmape.toFixed(1)}% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | ${quantityMetrics.mape.toFixed(1)}% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | ${quantityMetrics.bias.toFixed(1)}% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
${comparison.truePositives.map(tp =>
  `| ${tp.productName} | ${tp.predictedQty} | ${tp.realQty} | ${tp.absoluteError.toFixed(1)} | ${tp.errorPercent.toFixed(1)}% | ${getMatchTypeEmoji(tp.matchType)} ${tp.matchType} | ${tp.llm_required ? '✅ Oui' : '❌ Non'} | ${tp.llm_success ? '✅ Oui' : '❌ Non'} | ${tp.quantitySource === 'llm' ? '🤖 LLM' : '📊 Médiane'} |`
).join('\n')}

${generateLLMDetailSection(comparison.truePositives)}

${generateLLMInputDataSection(comparison.truePositives)}
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

// ============================================================================
// HELPERS POUR FORMAT JSON V2
// ============================================================================

/**
 * Helpers mathématiques
 */

function calculateRMSE(truePositives: ProductMatch[]): number {
  if (truePositives.length === 0) return 0;
  const sumSquaredErrors = truePositives.reduce((sum, tp) => sum + Math.pow(tp.absoluteError, 2), 0);
  return Math.sqrt(sumSquaredErrors / truePositives.length);
}

function calculateDaysAgo(dateString: string, referenceDate?: string): number {
  const date = new Date(dateString);
  const ref = referenceDate ? new Date(referenceDate) : new Date();
  return Math.floor((ref.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
}

function detectTrend(quantities: number[]): 'increasing' | 'stable' | 'decreasing' {
  if (quantities.length < 3) return 'stable';

  const n = quantities.length;
  const x = Array.from({ length: n }, (_, i) => i);
  const sumX = x.reduce((a, b) => a + b, 0);
  const sumY = quantities.reduce((a, b) => a + b, 0);
  const sumXY = x.reduce((sum, xi, i) => sum + xi * quantities[i], 0);
  const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const avgY = sumY / n;
  const relativeSlope = avgY > 0 ? slope / avgY : 0;

  if (relativeSlope > 0.05) return 'increasing';
  if (relativeSlope < -0.05) return 'decreasing';
  return 'stable';
}

function detectSeasonality(dates: Date[]): boolean {
  if (dates.length < 4) return false;

  const monthCounts = new Map<number, number>();
  dates.forEach(date => {
    const month = date.getMonth();
    monthCounts.set(month, (monthCounts.get(month) || 0) + 1);
  });

  const recurringMonths = Array.from(monthCounts.values()).filter(count => count >= 2);
  return recurringMonths.length >= 2;
}

function calculateRegularityScore(orders: HistoricalOrder[], cv: number): number {
  if (orders.length < 2) return 0;

  const cvScore = Math.max(0, 1 - cv);

  const dates = orders.map(o => new Date(o.date_order)).sort((a, b) => a.getTime() - b.getTime());
  const intervals: number[] = [];

  for (let i = 1; i < dates.length; i++) {
    const daysDiff = (dates[i].getTime() - dates[i - 1].getTime()) / (1000 * 60 * 60 * 24);
    intervals.push(daysDiff);
  }

  if (intervals.length === 0) return cvScore;

  const meanInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
  const intervalVariance = intervals.reduce((sum, i) => sum + Math.pow(i - meanInterval, 2), 0) / intervals.length;
  const intervalStdDev = Math.sqrt(intervalVariance);
  const intervalCV = meanInterval > 0 ? intervalStdDev / meanInterval : 0;
  const intervalScore = Math.max(0, 1 - intervalCV);

  return 0.6 * cvScore + 0.4 * intervalScore;
}

/**
 * Helpers de classification
 */

function classifyError(
  predictedQty: number,
  realQty: number,
  absoluteError: number,
  errorPercent: number
): {
  direction: 'over' | 'under' | 'exact';
  severity: 'none' | 'low' | 'medium' | 'high' | 'critical';
  matchType: 'exact' | 'partial';
} {
  const direction = predictedQty > realQty ? 'over' : predictedQty < realQty ? 'under' : 'exact';
  const matchType: 'exact' | 'partial' = absoluteError === 0 ? 'exact' : 'partial';

  let severity: 'none' | 'low' | 'medium' | 'high' | 'critical';
  if (absoluteError === 0) severity = 'none';
  else if (errorPercent <= 10 || absoluteError <= 2) severity = 'low';
  else if (errorPercent <= 25 || absoluteError <= 5) severity = 'medium';
  else if (errorPercent <= 50 || absoluteError <= 10) severity = 'high';
  else severity = 'critical';

  return { direction, severity, matchType };
}

function classifyMismatch(
  mismatchType: 'false_positive' | 'false_negative',
  reason: string,
  quantity: number
): {
  category: 'stock_sufficient' | 'no_history' | 'llm_error' | 'threshold_filtered' | 'other';
  severity: 'low' | 'medium' | 'high';
} {
  let category: 'stock_sufficient' | 'no_history' | 'llm_error' | 'threshold_filtered' | 'other';

  if (reason.includes('Stock suffisant') || reason.includes('stock:')) category = 'stock_sufficient';
  else if (reason.includes('Jamais commandé') || reason.includes("pas d'historique")) category = 'no_history';
  else if (reason.includes('LLM') || reason.includes('llm')) category = 'llm_error';
  else if (reason.includes('filtré') || reason.includes('seuil')) category = 'threshold_filtered';
  else category = 'other';

  let severity: 'low' | 'medium' | 'high';
  if (mismatchType === 'false_positive') {
    severity = quantity <= 5 ? 'low' : quantity <= 15 ? 'medium' : 'high';
  } else {
    severity = quantity <= 3 ? 'low' : quantity <= 10 ? 'medium' : 'high';
  }

  return { category, severity };
}

/**
 * Helpers de statistiques
 */

function calculateHistoryStatistics(quantities: number[], orders: HistoricalOrder[]): HistoryStatistics {
  if (quantities.length === 0) {
    return {
      mean: 0,
      median: 0,
      stdDev: 0,
      min: 0,
      max: 0,
      cv: 0,
      trend: 'stable',
      outliers: [],
      regularityScore: 0,
    };
  }

  const mean = quantities.reduce((a, b) => a + b, 0) / quantities.length;
  const median = calculateMedian(quantities);

  const variance = quantities.reduce((sum, q) => sum + Math.pow(q - mean, 2), 0) / quantities.length;
  const stdDev = Math.sqrt(variance);
  const cv = mean > 0 ? stdDev / mean : 0;
  const min = Math.min(...quantities);
  const max = Math.max(...quantities);

  // Outliers (IQR method)
  const sorted = [...quantities].sort((a, b) => a - b);
  const q1 = sorted[Math.floor(sorted.length * 0.25)];
  const q3 = sorted[Math.floor(sorted.length * 0.75)];
  const iqr = q3 - q1;
  const outliers = quantities.filter(q => q < q1 - 1.5 * iqr || q > q3 + 1.5 * iqr);

  const trend = detectTrend(quantities);
  const regularityScore = calculateRegularityScore(orders, cv);

  return { mean, median, stdDev, min, max, cv, trend, outliers, regularityScore };
}

/**
 * Helpers de features
 */

function calculateProductFeatures(orders: HistoricalOrder[], statistics: HistoryStatistics, cutoffDate?: string): ProductFeatures {
  if (orders.length === 0) {
    return {
      quantityType: 'variable',
      orderingPattern: 'irregular',
      avgDaysBetweenOrders: 0,
      lastOrderDaysAgo: 0,
      isSeasonalProduct: false,
      hasRecentActivity: false,
    };
  }

  const quantityType: 'fixed' | 'variable' | 'highly_variable' =
    statistics.cv < 0.15 ? 'fixed' : statistics.cv < 0.5 ? 'variable' : 'highly_variable';

  const orderingPattern: 'regular' | 'irregular' | 'seasonal' =
    statistics.regularityScore > 0.7 ? 'regular' : statistics.regularityScore > 0.4 ? 'seasonal' : 'irregular';

  const dates = orders.map(o => new Date(o.date_order)).sort((a, b) => a.getTime() - b.getTime());
  const avgDaysBetweenOrders = dates.length >= 2
    ? (dates[dates.length - 1].getTime() - dates[0].getTime()) / (1000 * 60 * 60 * 24) / (dates.length - 1)
    : 0;

  const referenceDate = cutoffDate ? new Date(cutoffDate) : new Date();
  const lastOrderDaysAgo = (referenceDate.getTime() - dates[dates.length - 1].getTime()) / (1000 * 60 * 60 * 24);
  const isSeasonalProduct = detectSeasonality(dates);
  const hasRecentActivity = lastOrderDaysAgo <= 30;

  return { quantityType, orderingPattern, avgDaysBetweenOrders, lastOrderDaysAgo, isSeasonalProduct, hasRecentActivity };
}

function enrichProductWithFeatures(
  product: ProductMatch,
  analyzedProduct?: ProductStockStatus,
  cutoffDate?: string
): {
  orderCount: number;
  orders: Array<{ orderId: number; orderName: string; date: string; quantity: number; priceUnit: number }>;
  statistics: HistoryStatistics;
  features: ProductFeatures;
} {
  const orders = analyzedProduct?.order_history || [];
  const quantities = orders.map(o => o.quantity);
  const statistics = calculateHistoryStatistics(quantities, orders);
  const features = calculateProductFeatures(orders, statistics, cutoffDate);

  return {
    orderCount: orders.length,
    orders: orders.map(o => ({
      orderId: o.order_id,
      orderName: o.order_name,
      date: o.date_order,
      quantity: o.quantity,
      priceUnit: o.price_unit,
    })),
    statistics,
    features,
  };
}

/**
 * Helpers de métriques par confidence
 */

function calculateMetricsForConfidenceLevel(
  comparison: BacktestComparisonResult,
  confidenceLevel: 'low' | 'medium' | 'high'
): MetricsByConfidence {
  const filteredTP = comparison.truePositives.filter(tp => tp.confidence === confidenceLevel);
  const filteredFP = comparison.falsePositives.filter(fp => fp.confidence === confidenceLevel);
  const filteredFN = comparison.falseNegatives.filter(fn => fn.confidence === confidenceLevel);

  const productMetrics = calculateProductMetrics(
    filteredTP.length,
    filteredFP.length,
    filteredFN.length
  );
  const quantityMetrics = {
    ...calculateQuantityMetrics(filteredTP),
    rmse: calculateRMSE(filteredTP),
  };

  return {
    counts: {
      truePositives: filteredTP.length,
      falsePositives: filteredFP.length,
      falseNegatives: filteredFN.length,
      total: filteredTP.length + filteredFP.length + filteredFN.length,
    },
    productMetrics,
    quantityMetrics,
  };
}

function calculateMetricsByConfidence(comparison: BacktestComparisonResult): {
  all: MetricsByConfidence;
  byConfidence: {
    low: MetricsByConfidence;
    medium: MetricsByConfidence;
    high: MetricsByConfidence;
  };
} {
  // Métriques globales
  const all: MetricsByConfidence = {
    counts: {
      truePositives: comparison.truePositives.length,
      falsePositives: comparison.falsePositives.length,
      falseNegatives: comparison.falseNegatives.length,
      total: comparison.truePositives.length + comparison.falsePositives.length + comparison.falseNegatives.length,
    },
    productMetrics: comparison.productMetrics,
    quantityMetrics: {
      ...comparison.quantityMetrics,
      rmse: calculateRMSE(comparison.truePositives),
    },
  };

  // Métriques par confidence
  const byConfidence = {
    low: calculateMetricsForConfidenceLevel(comparison, 'low'),
    medium: calculateMetricsForConfidenceLevel(comparison, 'medium'),
    high: calculateMetricsForConfidenceLevel(comparison, 'high'),
  };

  return { all, byConfidence };
}

// ============================================================================
// FIN HELPERS V2
// ============================================================================

/**
 * Génère un rapport JSON v2 enrichi pour analyse statistique avancée
 *
 * Format complet avec détails produits, historique, features, LLM data
 *
 * @param comparison - Résultat complet de la comparaison système vs réalité
 * @param stockAnalysis - Résultat de l'analyse de stock (contient historique produits)
 * @returns Rapport JSON v2 enrichi avec métriques segmentées et détails produits
 */
export function generateBacktestReportJSONv2(
  comparison: BacktestComparisonResult,
  stockAnalysis: StockReplenishmentResult
): BacktestReportJSONv2 {
  // === META ===
  const meta = {
    version: "2.0.0" as const,
    generatedAt: new Date().toISOString(),
    config: {
      daysBeforePrediction: comparison.daysBeforePrediction,
      analysisWindowDays: 365, // Par défaut 1 an
      cutoffDate: comparison.cutoffDate,
    },
  };

  // === CLIENT ===
  const client = {
    id: comparison.clientId,
    name: comparison.clientName,
    order: {
      name: comparison.orderName,
      date: comparison.orderDate,
    },
  };

  // === METRICS (globales + par confidence) ===
  const metrics = calculateMetricsByConfidence(comparison);

  // === MAP des produits analysés (pour enrichissement) ===
  const allProducts = stockAnalysis.all_products ?? stockAnalysis.products;
  const analyzedProductsMap = new Map(
    allProducts.map((p) => [p.product_id, p])
  );

  // === ENRICH TRUE POSITIVES ===
  const enrichedTP: EnrichedProductMatch[] = comparison.truePositives.map((tp) => {
    const analyzedProduct = analyzedProductsMap.get(tp.productId);

    // Error classification
    const errorClassification = classifyError(
      tp.predictedQty,
      tp.realQty,
      tp.absoluteError,
      tp.errorPercent
    );

    // History + statistics + features
    const history = enrichProductWithFeatures(tp, analyzedProduct, comparison.cutoffDate);

    // LLM data
    const llm: EnrichedProductMatch["llm"] = tp.llm_required
      ? {
          required: true,
          success: tp.llm_success,
          input: {
            recentOrders: tp.llm_input_data?.recent_orders || [],
            lastYearOrders: tp.llm_input_data?.last_year_orders || [],
          },
        }
      : undefined;

    // Si LLM a réussi, ajouter la prédiction + comparaison
    if (llm && tp.llmPrediction) {
      const pred = tp.llmPrediction;
      llm.prediction = {
        quantity: pred.quantity,
        baselineQuantity: pred.baseline_quantity,
        confidence: pred.confidence,
        confidencePhase1: pred.confidence_phase1,
        confidencePhase2: pred.confidence_phase2,
        reasoning: pred.reasoning,
        providerReasoning: pred.provider_reasoning,
        analysis: {
          frequencyPattern: pred.analysis.frequency_pattern,
          seasonalityImpact: pred.analysis.seasonality_impact,
          trendDirection: pred.analysis.trend_direction,
          detectedOutliers: pred.analysis.detected_outliers,
          cycleDays: pred.analysis.cycle_days,
          lastOrderDate: pred.analysis.last_order_date,
          predictedNextDate: pred.analysis.predicted_next_date,
          daysUntilNext: pred.analysis.days_until_next,
          dayCycleAnalysis: pred.analysis.day_cycle_analysis,
        },
        model: pred.model,
        provider: pred.provider,
        usage: pred.usage,
      };

      // Comparaison médiane vs LLM
      if (tp.medianQty !== undefined) {
        const medianError = Math.abs(tp.medianQty - tp.realQty);
        const llmError = Math.abs(pred.quantity - tp.realQty);
        const llmImprovement =
          medianError > 0 ? ((medianError - llmError) / medianError) * 100 : 0;

        llm.comparison = {
          medianQuantity: tp.medianQty,
          llmQuantity: pred.quantity,
          realQuantity: tp.realQty,
          medianError,
          llmError,
          llmImprovement,
        };
      }
    }

    return {
      productId: tp.productId,
      productName: tp.productName,
      productUom: Array.isArray(analyzedProduct?.product_uom)
        ? analyzedProduct.product_uom[1]
        : analyzedProduct?.product_uom || "",

      prediction: {
        quantity: tp.predictedQty,
        source: tp.quantitySource,
        confidence: tp.confidence,
      },

      reality: {
        quantity: tp.realQty,
      },

      error: {
        absolute: tp.absoluteError,
        percent: tp.errorPercent,
        direction: errorClassification.direction,
        severity: errorClassification.severity,
        matchType: errorClassification.matchType,
      },

      history,
      llm,
    };
  });

  // === ENRICH FALSE POSITIVES ===
  const enrichedFP: EnrichedProductMismatch[] = comparison.falsePositives.map((fp) => {
    const analyzedProduct = analyzedProductsMap.get(fp.productId);
    const classification = classifyMismatch("false_positive", fp.reason, fp.qty);

    const context: EnrichedProductMismatch["context"] = {};

    if (analyzedProduct?.order_history) {
      const orderCount = analyzedProduct.order_history.length;
      const lastOrderDaysAgo = orderCount > 0
        ? calculateDaysAgo(analyzedProduct.order_history[0].date_order, comparison.cutoffDate)
        : undefined;

      context.history = {
        orderCount,
        lastOrderDaysAgo,
        orders: analyzedProduct.order_history.map(order => ({
          orderId: order.order_id || 0,
          orderName: order.order_name || '',
          date: order.date_order,
          quantity: order.quantity,
          priceUnit: order.price_unit || 0,
        })),
      };
    }

    // LLM data (enrichissement)
    const llm: EnrichedProductMismatch["llm"] = analyzedProduct?.llm_required
      ? {
          required: true,
          success: analyzedProduct.llm_success,
          input: analyzedProduct.llm_input_data
            ? {
                recentOrders: analyzedProduct.llm_input_data.recent_orders || [],
                lastYearOrders: analyzedProduct.llm_input_data.last_year_orders || [],
              }
            : undefined,
        }
      : undefined;

    // Si LLM a réussi, ajouter la prédiction
    if (llm && analyzedProduct?.llm_prediction) {
      const pred = analyzedProduct.llm_prediction;
      llm.prediction = {
        quantity: pred.quantity,
        baselineQuantity: pred.baseline_quantity,
        confidence: pred.confidence,
        confidencePhase1: pred.confidence_phase1,
        confidencePhase2: pred.confidence_phase2,
        reasoning: pred.reasoning,
        providerReasoning: pred.provider_reasoning,
        analysis: {
          frequencyPattern: pred.analysis.frequency_pattern,
          seasonalityImpact: pred.analysis.seasonality_impact,
          trendDirection: pred.analysis.trend_direction,
          detectedOutliers: pred.analysis.detected_outliers,
          cycleDays: pred.analysis.cycle_days,
          lastOrderDate: pred.analysis.last_order_date,
          predictedNextDate: pred.analysis.predicted_next_date,
          daysUntilNext: pred.analysis.days_until_next,
          dayCycleAnalysis: pred.analysis.day_cycle_analysis,
        },
        model: pred.model,
        provider: pred.provider,
        usage: pred.usage,
      };
    }

    return {
      productId: fp.productId,
      productName: fp.productName,
      mismatchType: "false_positive" as const,
      quantity: fp.qty,
      reason: fp.reason,
      classification,
      context: Object.keys(context).length > 0 ? context : undefined,
      llm,
    };
  });

  // === ENRICH FALSE NEGATIVES ===
  const enrichedFN: EnrichedProductMismatch[] = comparison.falseNegatives.map((fn) => {
    const analyzedProduct = analyzedProductsMap.get(fn.productId);
    const classification = classifyMismatch("false_negative", fn.reason, fn.qty);

    const context: EnrichedProductMismatch["context"] = {};

    if (analyzedProduct?.order_history) {
      const orderCount = analyzedProduct.order_history.length;
      const lastOrderDaysAgo = orderCount > 0
        ? calculateDaysAgo(analyzedProduct.order_history[0].date_order, comparison.cutoffDate)
        : undefined;

      context.history = {
        orderCount,
        lastOrderDaysAgo,
        orders: analyzedProduct.order_history.map(order => ({
          orderId: order.order_id || 0,
          orderName: order.order_name || '',
          date: order.date_order,
          quantity: order.quantity,
          priceUnit: order.price_unit || 0,
        })),
      };
    }

    // LLM data (enrichissement)
    const llm: EnrichedProductMismatch["llm"] = analyzedProduct?.llm_required
      ? {
          required: true,
          success: analyzedProduct.llm_success,
          input: analyzedProduct.llm_input_data
            ? {
                recentOrders: analyzedProduct.llm_input_data.recent_orders || [],
                lastYearOrders: analyzedProduct.llm_input_data.last_year_orders || [],
              }
            : undefined,
        }
      : undefined;

    // Si LLM a réussi, ajouter la prédiction
    if (llm && analyzedProduct?.llm_prediction) {
      const pred = analyzedProduct.llm_prediction;
      llm.prediction = {
        quantity: pred.quantity,
        baselineQuantity: pred.baseline_quantity,
        confidence: pred.confidence,
        confidencePhase1: pred.confidence_phase1,
        confidencePhase2: pred.confidence_phase2,
        reasoning: pred.reasoning,
        providerReasoning: pred.provider_reasoning,
        analysis: {
          frequencyPattern: pred.analysis.frequency_pattern,
          seasonalityImpact: pred.analysis.seasonality_impact,
          trendDirection: pred.analysis.trend_direction,
          detectedOutliers: pred.analysis.detected_outliers,
          cycleDays: pred.analysis.cycle_days,
          lastOrderDate: pred.analysis.last_order_date,
          predictedNextDate: pred.analysis.predicted_next_date,
          daysUntilNext: pred.analysis.days_until_next,
          dayCycleAnalysis: pred.analysis.day_cycle_analysis,
        },
        model: pred.model,
        provider: pred.provider,
        usage: pred.usage,
      };
    }

    return {
      productId: fn.productId,
      productName: fn.productName,
      mismatchType: "false_negative" as const,
      quantity: fn.qty,
      reason: fn.reason,
      classification,
      context: Object.keys(context).length > 0 ? context : undefined,
      llm,
    };
  });

  // === LLM USAGE (global aggregation) ===
  const llmUsage = comparison.llmUsage
    ? {
        calls: comparison.llmUsage.calls,
        promptTokens: comparison.llmUsage.promptTokens,
        completionTokens: comparison.llmUsage.completionTokens,
        totalTokens: comparison.llmUsage.totalTokens,
      }
    : undefined;

  // === RETURN COMPLETE V2 REPORT ===
  return {
    meta,
    client,
    metrics,
    llmUsage,
    products: {
      truePositives: enrichedTP,
      falsePositives: enrichedFP,
      falseNegatives: enrichedFN,
    },
  };
}

/**
 * Agrège les rapports v2 individuels pour une vue globale
 *
 * @param reportsV2 - Liste des rapports v2 à agréger
 * @returns Rapport agrégé v2 avec métriques consolidées
 */
export function generateAggregatedReportV2(
  reportsV2: BacktestReportJSONv2[]
): AggregatedReportV2 {
  if (reportsV2.length === 0) {
    throw new Error("Aucun rapport v2 à agréger");
  }

  // Agréger les counts
  let totalTP = 0,
    totalFP = 0,
    totalFN = 0;
  let totalPromptTokens = 0,
    totalCompletionTokens = 0,
    totalCalls = 0;

  reportsV2.forEach((report) => {
    totalTP += report.metrics.all.counts.truePositives;
    totalFP += report.metrics.all.counts.falsePositives;
    totalFN += report.metrics.all.counts.falseNegatives;

    if (report.llmUsage) {
      totalCalls += report.llmUsage.calls;
      totalPromptTokens += report.llmUsage.promptTokens;
      totalCompletionTokens += report.llmUsage.completionTokens;
    }
  });

  // Calculer métriques globales
  const totalPredicted = totalTP + totalFP;
  const totalReal = totalTP + totalFN;
  const precision = totalPredicted > 0 ? totalTP / totalPredicted : 0;
  const recall = totalReal > 0 ? totalTP / totalReal : 0;
  const f1Score =
    precision + recall > 0
      ? (2 * (precision * recall)) / (precision + recall)
      : 0;

  // Quantité metrics - moyenne pondérée des TP
  let totalMAE = 0,
    totalWMAPE = 0,
    totalMAPE = 0,
    totalBias = 0,
    totalRMSE = 0,
    exactMatchCount = 0,
    partialMatchCount = 0;

  reportsV2.forEach((report) => {
    const tpCount = report.metrics.all.counts.truePositives;
    if (tpCount > 0) {
      totalMAE += report.metrics.all.quantityMetrics.mae * tpCount;
      totalWMAPE += report.metrics.all.quantityMetrics.wmape;
      totalMAPE += report.metrics.all.quantityMetrics.mape;
      totalBias += report.metrics.all.quantityMetrics.bias;
      totalRMSE += report.metrics.all.quantityMetrics.rmse;
      exactMatchCount +=
        report.metrics.all.quantityMetrics.distribution.exactMatch;
      partialMatchCount +=
        report.metrics.all.quantityMetrics.distribution.partialMatch;
    }
  });

  const avgMAE = totalTP > 0 ? totalMAE / totalTP : 0;
  const avgWMAPE = reportsV2.length > 0 ? totalWMAPE / reportsV2.length : 0;
  const avgMAPE = reportsV2.length > 0 ? totalMAPE / reportsV2.length : 0;
  const avgBias = reportsV2.length > 0 ? totalBias / reportsV2.length : 0;
  const avgRMSE = reportsV2.length > 0 ? totalRMSE / reportsV2.length : 0;

  // Agréger par confidence
  const byConfidence: Record<
    "low" | "medium" | "high",
    {
      counts: { truePositives: number; falsePositives: number; falseNegatives: number; total: number };
      productMetrics: { precision: number; recall: number; f1Score: number };
      quantityMetrics: { mae: number; wmape: number; mape: number; bias: number; rmse: number };
    }
  > = {
    low: {
      counts: { truePositives: 0, falsePositives: 0, falseNegatives: 0, total: 0 },
      productMetrics: { precision: 0, recall: 0, f1Score: 0 },
      quantityMetrics: { mae: 0, wmape: 0, mape: 0, bias: 0, rmse: 0 },
    },
    medium: {
      counts: { truePositives: 0, falsePositives: 0, falseNegatives: 0, total: 0 },
      productMetrics: { precision: 0, recall: 0, f1Score: 0 },
      quantityMetrics: { mae: 0, wmape: 0, mape: 0, bias: 0, rmse: 0 },
    },
    high: {
      counts: { truePositives: 0, falsePositives: 0, falseNegatives: 0, total: 0 },
      productMetrics: { precision: 0, recall: 0, f1Score: 0 },
      quantityMetrics: { mae: 0, wmape: 0, mape: 0, bias: 0, rmse: 0 },
    },
  };

  // Accumulateurs pour métriques par confiance
  const confAccumulators: Record<
    "low" | "medium" | "high",
    { tp: number; fp: number; fn: number; mae: number; wmape: number; mape: number; bias: number; rmse: number }
  > = {
    low: { tp: 0, fp: 0, fn: 0, mae: 0, wmape: 0, mape: 0, bias: 0, rmse: 0 },
    medium: { tp: 0, fp: 0, fn: 0, mae: 0, wmape: 0, mape: 0, bias: 0, rmse: 0 },
    high: { tp: 0, fp: 0, fn: 0, mae: 0, wmape: 0, mape: 0, bias: 0, rmse: 0 },
  };

  reportsV2.forEach((report) => {
    (["low", "medium", "high"] as const).forEach((conf) => {
      const confMetrics = report.metrics.byConfidence[conf];
      const confTP = confMetrics.counts.truePositives;

      confAccumulators[conf].tp += confTP;
      confAccumulators[conf].fp += confMetrics.counts.falsePositives;
      confAccumulators[conf].fn += confMetrics.counts.falseNegatives;

      if (confTP > 0) {
        confAccumulators[conf].mae += confMetrics.quantityMetrics.mae * confTP;
        confAccumulators[conf].wmape += confMetrics.quantityMetrics.wmape;
        confAccumulators[conf].mape += confMetrics.quantityMetrics.mape;
        confAccumulators[conf].bias += confMetrics.quantityMetrics.bias;
        confAccumulators[conf].rmse += confMetrics.quantityMetrics.rmse;
      }
    });
  });

  (["low", "medium", "high"] as const).forEach((conf) => {
    const acc = confAccumulators[conf];
    byConfidence[conf].counts = {
      truePositives: acc.tp,
      falsePositives: acc.fp,
      falseNegatives: acc.fn,
      total: acc.tp + acc.fp + acc.fn,
    };

    const confTotalPredicted = acc.tp + acc.fp;
    const confTotalReal = acc.tp + acc.fn;
    const confPrecision = confTotalPredicted > 0 ? acc.tp / confTotalPredicted : 0;
    const confRecall = confTotalReal > 0 ? acc.tp / confTotalReal : 0;
    const confF1 =
      confPrecision + confRecall > 0
        ? (2 * (confPrecision * confRecall)) / (confPrecision + confRecall)
        : 0;

    byConfidence[conf].productMetrics = {
      precision: Math.round(confPrecision * 10000) / 10000,
      recall: Math.round(confRecall * 10000) / 10000,
      f1Score: Math.round(confF1 * 10000) / 10000,
    };

    const avgMAE = acc.tp > 0 ? acc.mae / acc.tp : 0;
    const avgWMAPE = reportsV2.length > 0 ? acc.wmape / reportsV2.length : 0;
    const avgMAPE = reportsV2.length > 0 ? acc.mape / reportsV2.length : 0;
    const avgBias = reportsV2.length > 0 ? acc.bias / reportsV2.length : 0;
    const avgRMSE = reportsV2.length > 0 ? acc.rmse / reportsV2.length : 0;

    byConfidence[conf].quantityMetrics = {
      mae: Math.round(avgMAE * 10000) / 10000,
      wmape: Math.round(avgWMAPE * 100) / 100,
      mape: Math.round(avgMAPE * 100) / 100,
      bias: Math.round(avgBias * 100) / 100,
      rmse: Math.round(avgRMSE * 10000) / 10000,
    };
  });

  // Collecter les métriques par client pour statistiques
  const clientMetrics = reportsV2.map((report) => ({
    clientId: report.client.id,
    clientName: report.client.name,
    precision: report.metrics.all.productMetrics.precision,
    recall: report.metrics.all.productMetrics.recall,
    f1Score: report.metrics.all.productMetrics.f1Score,
    mae: report.metrics.all.quantityMetrics.mae,
    wmape: report.metrics.all.quantityMetrics.wmape,
    mape: report.metrics.all.quantityMetrics.mape,
  }));

  // Calculer statistiques (mean, median, stdDev)
  const calculateStats = (values: number[]) => {
    if (values.length === 0) return { mean: 0, median: 0, stdDev: 0, min: 0, max: 0 };
    const sorted = [...values].sort((a, b) => a - b);
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const median = sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];
    const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
    const stdDev = Math.sqrt(variance);
    return {
      mean: Math.round(mean * 10000) / 10000,
      median: Math.round(median * 10000) / 10000,
      stdDev: Math.round(stdDev * 10000) / 10000,
      min: Math.round(Math.min(...values) * 10000) / 10000,
      max: Math.round(Math.max(...values) * 10000) / 10000,
    };
  };

  const byClient = {
    precision: calculateStats(clientMetrics.map((m) => m.precision)),
    recall: calculateStats(clientMetrics.map((m) => m.recall)),
    f1Score: calculateStats(clientMetrics.map((m) => m.f1Score)),
    mae: calculateStats(clientMetrics.map((m) => m.mae)),
    wmape: calculateStats(clientMetrics.map((m) => m.wmape)),
    mape: calculateStats(clientMetrics.map((m) => m.mape)),
    clients: clientMetrics,
  };

  return {
    meta: {
      version: "2.0.0",
      type: "aggregated-backtest-v2",
      generatedAt: new Date().toISOString(),
      casesIncluded: reportsV2.length,
      cases: reportsV2.map((r) => ({
        clientId: r.client.id,
        orderName: r.client.order.name,
      })),
    },
    metricsByConfidence: byConfidence,
    byClient,
    llmUsage: {
      totalCalls,
      totalPromptTokens,
      totalCompletionTokens,
      totalTokens: totalPromptTokens + totalCompletionTokens,
    },
  };
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
      wmape: comparison.quantityMetrics.wmape,
      mape: comparison.quantityMetrics.mape,
      bias: comparison.quantityMetrics.bias,
    },
    distribution: {
      exactMatch: comparison.quantityMetrics.distribution.exactMatch,
      partialMatch: comparison.quantityMetrics.distribution.partialMatch,
    },
    llmUsage: comparison.llmUsage,
  };
}

/**
 * Génère un rapport summary Markdown à partir des rapports v2 individuels
 *
 * Segmentation:
 * - Produits de Base: >= 2 commandes historiques (confidence medium + high)
 * - Produits Optionnels: 1 commande historique (confidence low)
 *
 * Métriques: Médianes par client pour Base, Moyennes pour Optionnel
 */
export function generateSummaryMarkdown(reportsV2: BacktestReportJSONv2[]): string {
  if (reportsV2.length === 0) {
    return "# Aucun rapport à analyser";
  }

  // Helpers
  const calcMedian = (values: number[]): number => {
    if (values.length === 0) return 0;
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  };

  const calcMean = (values: number[]): number => {
    if (values.length === 0) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
  };

  const formatPercent = (value: number): string => `${(value * 100).toFixed(1)}%`;

  // Collecter métriques par client
  interface ClientMetrics {
    base: { recall: number; precision: number };
    optional: { recall: number; precision: number };
  }

  const clientMetrics: ClientMetrics[] = [];
  const allClientWmape: number[] = [];
  let totalBaseProducts = 0;
  let totalOptionalProducts = 0;

  for (const report of reportsV2) {
    const low = report.metrics.byConfidence.low;
    const medium = report.metrics.byConfidence.medium;
    const high = report.metrics.byConfidence.high;

    // Produits de Base = medium + high
    const baseTP = medium.counts.truePositives + high.counts.truePositives;
    const baseFP = medium.counts.falsePositives + high.counts.falsePositives;
    const baseFN = medium.counts.falseNegatives + high.counts.falseNegatives;
    const basePrecision = baseTP + baseFP > 0 ? baseTP / (baseTP + baseFP) : 0;
    const baseRecall = baseTP + baseFN > 0 ? baseTP / (baseTP + baseFN) : 0;

    // Produits Optionnels = low
    const optTP = low.counts.truePositives;
    const optFP = low.counts.falsePositives;
    const optFN = low.counts.falseNegatives;
    const optPrecision = optTP + optFP > 0 ? optTP / (optTP + optFP) : 0;
    const optRecall = optTP + optFN > 0 ? optTP / (optTP + optFN) : 0;

    // Totaux pour volume
    totalBaseProducts += baseTP + baseFP + baseFN;
    totalOptionalProducts += optTP + optFP + optFN;

    // Collecter WMAPE par client
    allClientWmape.push(report.metrics.all.quantityMetrics.wmape);

    clientMetrics.push({
      base: { recall: baseRecall, precision: basePrecision },
      optional: { recall: optRecall, precision: optPrecision },
    });
  }

  // Filtrer clients avec données
  const clientsWithBase = clientMetrics.filter(c => c.base.recall > 0 || c.base.precision > 0);
  const clientsWithOptional = clientMetrics.filter(c => c.optional.recall > 0 || c.optional.precision > 0);

  // WMAPE: médiane par client
  const globalMedianWmape = calcMedian(allClientWmape);

  // Médianes pour Base
  const baseMedianRecall = calcMedian(clientsWithBase.map(c => c.base.recall));
  const baseMedianPrecision = calcMedian(clientsWithBase.map(c => c.base.precision));

  // Moyennes pour Optionnel (médiane souvent 0)
  const optMeanRecall = calcMean(clientsWithOptional.map(c => c.optional.recall));
  const optMeanPrecision = calcMean(clientsWithOptional.map(c => c.optional.precision));

  // Volume en pourcentage
  const totalProducts = totalBaseProducts + totalOptionalProducts;
  const baseVolumePct = totalProducts > 0 ? (totalBaseProducts / totalProducts * 100).toFixed(0) : "0";
  const optVolumePct = totalProducts > 0 ? (totalOptionalProducts / totalProducts * 100).toFixed(0) : "0";

  const timestamp = new Date().toISOString().split("T")[0];

  return `# Rapport de Performance - Systeme de Prediction de Reapprovisionnement

## Contexte de l'Analyse

- Clients analyses: ${reportsV2.length} clients
- Methode: Backtest sur commandes reelles (prediction J-1)
- Periode d'analyse: 120 jours d'historique

## Segmentation des Produits

Le systeme segmente les produits en deux categories selon leur historique de commandes:

### Produits de Base

Produits commandes au moins 2 fois dans les 120 derniers jours.
Ces produits disposent de suffisamment de donnees pour une prediction fiable.

### Produits Optionnels

Produits commandes une seule fois dans les 120 derniers jours.
Donnees limitees - prediction exploratoire necessitant validation.

## 1. Detection du Risque de Rupture

| Segment | Volume | Recall | Precision |
|---------|--------|--------|-----------|
| Produits de Base | ${baseVolumePct}% | ${formatPercent(baseMedianRecall)} | ${formatPercent(baseMedianPrecision)} |
| Produits Optionnels | ${optVolumePct}% | ${formatPercent(optMeanRecall)} | ${formatPercent(optMeanPrecision)} |

**Recall**: Pourcentage des besoins reels detectes par le systeme.
**Precision**: Pourcentage des suggestions correspondant a un achat reel.

## 2. Precision des Quantites

| Metrique | Valeur |
|----------|--------|
| WMAPE (mediane) | ${globalMedianWmape.toFixed(1)}% |

**WMAPE**: Ecart moyen pondere entre quantites predites et quantites commandees.
Plus la valeur est basse, plus les predictions sont precises.

## Recommandation d'Utilisation

- **Produits de Base**: Activation en mode automatique
- **Produits Optionnels**: Affichage en mode suggestion (validation manuelle recommandee)

---

*Rapport genere le ${timestamp}*
`;
}
