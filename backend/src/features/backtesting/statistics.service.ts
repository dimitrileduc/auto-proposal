/**
 * Statistical analysis service for aggregated backtests
 *
 * Computes descriptive statistics (median, stdDev, percentiles)
 * on backtest metrics collected across multiple clients.
 *
 * @module features/backtesting/statistics
 */

import type { BacktestReportJSONv2 } from "./backtest.types";

/**
 * Individual backtest metrics (simplified)
 */
export interface IndividualBacktestMetrics {
  precision: number;
  recall: number;
  f1Score: number;
  mae: number;
  /** Weighted MAPE (robust metric) */
  wmape: number;
  /** Classic MAPE (kept for reference) */
  mape: number;
  /** Directional bias: >0 = overestimate, <0 = underestimate */
  bias: number;
}

/**
 * Summary metrics matching the executive summary markdown
 * Segmented by product confidence level (base = medium+high, optional = low)
 */
export interface SummaryMetrics {
  /** Base products: ordered 2+ times (medium/high confidence) */
  baseProducts: {
    /** Percentage of total products volume */
    volumePercent: number;
    /** Median recall across clients */
    medianRecall: number;
    /** Median precision across clients */
    medianPrecision: number;
  };
  /** Optional products: ordered once (low confidence) */
  optionalProducts: {
    /** Percentage of total products volume */
    volumePercent: number;
    /** Mean recall across clients (median often 0) */
    meanRecall: number;
    /** Mean precision across clients */
    meanPrecision: number;
  };
  /** Global median WMAPE across all clients */
  medianWmape: number;
}

/**
 * Aggregate statistics computed across N clients
 */
export interface AggregateMetrics {
  /** Executive summary metrics (same as summary markdown) */
  summary: SummaryMetrics;
  /** Median values (robust to outliers) */
  median: {
    precision: number;
    recall: number;
    f1Score: number;
    mae: number;
    wmape: number;
    mape: number;
    bias: number;
  };
  /** Standard deviation (variability measure) */
  stdDev: {
    precision: number;
    recall: number;
    f1Score: number;
    mae: number;
    wmape: number;
    mape: number;
    bias: number;
  };
  /** Percentile distribution for key metrics */
  percentiles: {
    p25: { recall: number; wmape: number; mape: number; bias: number };
    p50: { recall: number; wmape: number; mape: number; bias: number };
    p75: { recall: number; wmape: number; mape: number; bias: number };
    p90: { recall: number; wmape: number; mape: number; bias: number };
  };
}

/**
 * Calculates summary metrics from v2 reports (same as executive summary markdown)
 *
 * Segments products by confidence level:
 * - Base Products: medium + high confidence (2+ historical orders)
 * - Optional Products: low confidence (1 historical order)
 *
 * @param v2Reports - Array of individual backtest JSON v2 reports
 * @returns Summary metrics with base/optional segmentation and global WMAPE
 */
export function calculateSummaryMetrics(v2Reports: BacktestReportJSONv2[]): SummaryMetrics {
  if (v2Reports.length === 0) {
    return {
      baseProducts: { volumePercent: 0, medianRecall: 0, medianPrecision: 0 },
      optionalProducts: { volumePercent: 0, meanRecall: 0, meanPrecision: 0 },
      medianWmape: 0,
    };
  }

  interface ClientMetrics {
    base: { recall: number; precision: number };
    optional: { recall: number; precision: number };
  }

  const clientMetrics: ClientMetrics[] = [];
  const allClientWmape: number[] = [];
  let totalBaseProducts = 0;
  let totalOptionalProducts = 0;

  for (const report of v2Reports) {
    const low = report.metrics.byConfidence.low;
    const medium = report.metrics.byConfidence.medium;
    const high = report.metrics.byConfidence.high;

    // Base Products = medium + high
    const baseTP = medium.counts.truePositives + high.counts.truePositives;
    const baseFP = medium.counts.falsePositives + high.counts.falsePositives;
    const baseFN = medium.counts.falseNegatives + high.counts.falseNegatives;
    const basePrecision = baseTP + baseFP > 0 ? baseTP / (baseTP + baseFP) : 0;
    const baseRecall = baseTP + baseFN > 0 ? baseTP / (baseTP + baseFN) : 0;

    // Optional Products = low
    const optTP = low.counts.truePositives;
    const optFP = low.counts.falsePositives;
    const optFN = low.counts.falseNegatives;
    const optPrecision = optTP + optFP > 0 ? optTP / (optTP + optFP) : 0;
    const optRecall = optTP + optFN > 0 ? optTP / (optTP + optFN) : 0;

    // Volume totals
    totalBaseProducts += baseTP + baseFP + baseFN;
    totalOptionalProducts += optTP + optFP + optFN;

    // WMAPE per client
    allClientWmape.push(report.metrics.all.quantityMetrics.wmape);

    clientMetrics.push({
      base: { recall: baseRecall, precision: basePrecision },
      optional: { recall: optRecall, precision: optPrecision },
    });
  }

  // Filter clients with data
  const clientsWithBase = clientMetrics.filter(c => c.base.recall > 0 || c.base.precision > 0);
  const clientsWithOptional = clientMetrics.filter(c => c.optional.recall > 0 || c.optional.precision > 0);

  // Global median WMAPE
  const globalMedianWmape = calculateMedian(allClientWmape);

  // Median for Base products
  const baseMedianRecall = calculateMedian(clientsWithBase.map(c => c.base.recall));
  const baseMedianPrecision = calculateMedian(clientsWithBase.map(c => c.base.precision));

  // Mean for Optional products (median often 0)
  const optMeanRecall = calculateMean(clientsWithOptional.map(c => c.optional.recall));
  const optMeanPrecision = calculateMean(clientsWithOptional.map(c => c.optional.precision));

  // Volume percentages
  const totalProducts = totalBaseProducts + totalOptionalProducts;
  const baseVolumePct = totalProducts > 0 ? Math.round((totalBaseProducts / totalProducts) * 100) : 0;
  const optVolumePct = totalProducts > 0 ? Math.round((totalOptionalProducts / totalProducts) * 100) : 0;

  return {
    baseProducts: {
      volumePercent: baseVolumePct,
      medianRecall: Math.round(baseMedianRecall * 10000) / 10000,
      medianPrecision: Math.round(baseMedianPrecision * 10000) / 10000,
    },
    optionalProducts: {
      volumePercent: optVolumePct,
      meanRecall: Math.round(optMeanRecall * 10000) / 10000,
      meanPrecision: Math.round(optMeanPrecision * 10000) / 10000,
    },
    medianWmape: Math.round(globalMedianWmape * 100) / 100,
  };
}

/**
 * Computes aggregate statistics (median, stdDev, percentiles)
 * over a collection of individual backtest metrics
 *
 * @param metrics - Array of individual backtest metrics
 * @param v2Reports - Optional v2 reports for summary calculation
 * @returns Computed aggregate statistics
 */
export function calculateAggregateStatistics(
  metrics: IndividualBacktestMetrics[],
  v2Reports?: BacktestReportJSONv2[]
): AggregateMetrics {
  const emptyStats = {
    precision: 0,
    recall: 0,
    f1Score: 0,
    mae: 0,
    wmape: 0,
    mape: 0,
    bias: 0,
  };

  const emptySummary: SummaryMetrics = {
    baseProducts: { volumePercent: 0, medianRecall: 0, medianPrecision: 0 },
    optionalProducts: { volumePercent: 0, meanRecall: 0, meanPrecision: 0 },
    medianWmape: 0,
  };

  if (metrics.length === 0) {
    return {
      summary: emptySummary,
      median: emptyStats,
      stdDev: emptyStats,
      percentiles: {
        p25: { recall: 0, wmape: 0, mape: 0, bias: 0 },
        p50: { recall: 0, wmape: 0, mape: 0, bias: 0 },
        p75: { recall: 0, wmape: 0, mape: 0, bias: 0 },
        p90: { recall: 0, wmape: 0, mape: 0, bias: 0 },
      },
    };
  }

  // Calculate summary from v2Reports if provided
  const summary = v2Reports && v2Reports.length > 0
    ? calculateSummaryMetrics(v2Reports)
    : emptySummary;

  // Calculate mean internally for stdDev calculation (not exported)
  const meanValues = {
    precision: calculateMean(metrics.map((m) => m.precision)),
    recall: calculateMean(metrics.map((m) => m.recall)),
    f1Score: calculateMean(metrics.map((m) => m.f1Score)),
    mae: calculateMean(metrics.map((m) => m.mae)),
    wmape: calculateMean(metrics.map((m) => m.wmape)),
    mape: calculateMean(metrics.map((m) => m.mape)),
    bias: calculateMean(metrics.map((m) => m.bias)),
  };

  const median = {
    precision: calculateMedian(metrics.map((m) => m.precision)),
    recall: calculateMedian(metrics.map((m) => m.recall)),
    f1Score: calculateMedian(metrics.map((m) => m.f1Score)),
    mae: calculateMedian(metrics.map((m) => m.mae)),
    wmape: calculateMedian(metrics.map((m) => m.wmape)),
    mape: calculateMedian(metrics.map((m) => m.mape)),
    bias: calculateMedian(metrics.map((m) => m.bias)),
  };

  const stdDev = {
    precision: calculateStdDev(metrics.map((m) => m.precision), meanValues.precision),
    recall: calculateStdDev(metrics.map((m) => m.recall), meanValues.recall),
    f1Score: calculateStdDev(metrics.map((m) => m.f1Score), meanValues.f1Score),
    mae: calculateStdDev(metrics.map((m) => m.mae), meanValues.mae),
    wmape: calculateStdDev(metrics.map((m) => m.wmape), meanValues.wmape),
    mape: calculateStdDev(metrics.map((m) => m.mape), meanValues.mape),
    bias: calculateStdDev(metrics.map((m) => m.bias), meanValues.bias),
  };

  const recallValues = metrics.map((m) => m.recall).sort((a, b) => a - b);
  const wmapeValues = metrics.map((m) => m.wmape).sort((a, b) => a - b);
  const mapeValues = metrics.map((m) => m.mape).sort((a, b) => a - b);
  const biasValues = metrics.map((m) => m.bias).sort((a, b) => a - b);

  const percentiles = {
    p25: {
      recall: calculatePercentile(recallValues, 25),
      wmape: calculatePercentile(wmapeValues, 25),
      mape: calculatePercentile(mapeValues, 25),
      bias: calculatePercentile(biasValues, 25),
    },
    p50: {
      recall: calculatePercentile(recallValues, 50),
      wmape: calculatePercentile(wmapeValues, 50),
      mape: calculatePercentile(mapeValues, 50),
      bias: calculatePercentile(biasValues, 50),
    },
    p75: {
      recall: calculatePercentile(recallValues, 75),
      wmape: calculatePercentile(wmapeValues, 75),
      mape: calculatePercentile(mapeValues, 75),
      bias: calculatePercentile(biasValues, 75),
    },
    p90: {
      recall: calculatePercentile(recallValues, 90),
      wmape: calculatePercentile(wmapeValues, 90),
      mape: calculatePercentile(mapeValues, 90),
      bias: calculatePercentile(biasValues, 90),
    },
  };

  return { summary, median, stdDev, percentiles };
}

/**
 * Calculates the arithmetic mean of a number array
 *
 * @param values - Array of numeric values
 * @returns Arithmetic mean, or 0 if array is empty
 */
function calculateMean(values: number[]): number {
  if (values.length === 0) return 0;
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

/**
 * Calculates the median of a number array
 *
 * @param values - Array of numeric values
 * @returns Median value, or 0 if array is empty
 */
function calculateMedian(values: number[]): number {
  if (values.length === 0) return 0;

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

/**
 * Calculates the standard deviation of a number array
 *
 * @param values - Array of numeric values
 * @param mean - Pre-computed mean of the values
 * @returns Standard deviation, or 0 if array is empty
 */
function calculateStdDev(values: number[], mean: number): number {
  if (values.length === 0) return 0;

  const squaredDiffs = values.map((val) => Math.pow(val - mean, 2));
  const variance = squaredDiffs.reduce((acc, val) => acc + val, 0) / values.length;
  return Math.sqrt(variance);
}

/**
 * Calculates the Pth percentile of a sorted number array
 *
 * Uses linear interpolation between adjacent values when
 * the percentile falls between two data points.
 *
 * @param sortedValues - Array sorted in ascending order
 * @param percentile - Percentile to compute (0-100)
 * @returns Interpolated percentile value, or 0 if array is empty
 */
function calculatePercentile(sortedValues: number[], percentile: number): number {
  if (sortedValues.length === 0) return 0;

  const index = (percentile / 100) * (sortedValues.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  const weight = index % 1;

  if (lower === upper) {
    return sortedValues[lower];
  }

  return sortedValues[lower] * (1 - weight) + sortedValues[upper] * weight;
}

/**
 * Individual backtest result for aggregation
 */
export interface BacktestIndividualResult {
  clientId: number;
  clientName: string;
  orderName: string;
  success: boolean;
  metrics?: IndividualBacktestMetrics;
  error?: string;
}

/**
 * Input data for generating the aggregate report
 */
export interface AggregateReportData {
  executionDate: string;
  config: {
    daysBeforePrediction?: number;
    replenishmentThreshold?: number;
  };
  aggregateMetrics: AggregateMetrics;
  individualResults: BacktestIndividualResult[];
  llm_usage?: {
    calls: number;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

/**
 * Generates a markdown report with comparative tables for aggregated backtests
 *
 * @param data - Aggregated backtest data
 * @returns Formatted markdown report
 */
export function generateAggregateMarkdownReport(data: AggregateReportData): string {
  const { aggregateMetrics, individualResults } = data;
  const successfulResults = individualResults.filter((r) => r.success && r.metrics);
  const failedResults = individualResults.filter((r) => !r.success);

  return `# Rapport Backtest Agrégé

## Contexte

- **Date d'exécution** : ${new Date(data.executionDate).toLocaleString('fr-FR')}
- **Clients analysés** : ${individualResults.length}
- **Clients réussis** : ${successfulResults.length}
- **Clients échoués** : ${failedResults.length}

### Configuration

- **Jours d'avance** : ${data.config.daysBeforePrediction ?? 1}j
- **Fenêtre d'analyse** : 120j (hardcodé)
- **Seuil réappro** : ${data.config.replenishmentThreshold ?? 30}j

---

## Statistiques Globales

### Métriques Principales

| Métrique | Médiane | Interprétation |
|----------|---------|----------------|
| **Recall** | ${(aggregateMetrics.median.recall * 100).toFixed(1)}% | % de besoins réels détectés |
| **Precision** | ${(aggregateMetrics.median.precision * 100).toFixed(1)}% | % de prédictions correctes (${(100 - aggregateMetrics.median.precision * 100).toFixed(1)}% proposés non commandés) |
| **F1-Score** | ${(aggregateMetrics.median.f1Score * 100).toFixed(1)}% | Équilibre détection/précision |
| **wMAPE** | ${aggregateMetrics.median.wmape.toFixed(1)}% | Écart pondéré robuste (métrique principale) |
| **MAPE** | ${aggregateMetrics.median.mape.toFixed(1)}% | Écart moyen (info, biaisé) |
| **Bias** | ${aggregateMetrics.median.bias.toFixed(1)}% | Biais directionnel (>0 = surestime, <0 = sous-estime) |

${data.llm_usage ? `
### 🤖 Utilisation LLM

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Appels LLM** | ${data.llm_usage.calls} | Nombre de produits prédits par LLM (>2 commandes historiques) |
| **Tokens Total** | ${data.llm_usage.totalTokens.toLocaleString('fr-FR')} | ${data.llm_usage.promptTokens.toLocaleString('fr-FR')} prompt + ${data.llm_usage.completionTokens.toLocaleString('fr-FR')} completion |
| **Tokens Moyen/Appel** | ${Math.round(data.llm_usage.totalTokens / data.llm_usage.calls).toLocaleString('fr-FR')} | Tokens moyen par prédiction LLM |
` : ''}

<details>
<summary>Pourquoi la Médiane ?</summary>

**Médiane** : Valeur du milieu quand on trie tous les scores
- Robuste aux valeurs extrêmes (meilleure représentation du client "typique")

**Exemple** : 5 clients avec Recall [20%, 80%, 90%, 95%, 100%]
- Médiane = 90% (valeur centrale, représentative)

**Bon système** : Médiane élevée pour Recall/Precision/F1, faible pour WMAPE/MAPE
</details>

<details>
<summary>Comment est calculé le Recall ?</summary>

Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Recall = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Client commande 10 produits, système en détecte 8 → Recall = 80%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculée la Precision ?</summary>

Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Precision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Système prédit 10 produits, 6 sont commandés → Precision = 60%

**Bon score** : > 70% (peu de surprédictions)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

Moyenne harmonique entre Precision et Recall

**Calcul** : F1 = 2 × (Precision × Recall) ÷ (Precision + Recall)

**Pourquoi ?** : On peut avoir 100% de precision mais 50% de recall. Le F1 combine les deux.

**Bon score** : > 75% (système performant globalement)
</details>

<details>
<summary>wMAPE vs MAPE : Quelle différence ? 🆕</summary>

**wMAPE (Weighted MAPE)** - ⚖️ MÉTRIQUE PRINCIPALE RECOMMANDÉE

- **Calcul** : sum(|Prédit - Réel|) / sum(Réel) × 100%
- **Pondération globale** sur tous les produits détectés
- **Robuste** aux petites quantités (pas d'explosion d'erreur)
- **Symétrique** : traite sous/sur-estimation équitablement
- **Recommandé** par experts supply chain (Blue Yonder, 2024-2025)

**Exemple wMAPE** :
- Produit A : Prédit 10, Réel 12 → Erreur absolue = 2u
- Produit B : Prédit 5, Réel 4 → Erreur absolue = 1u
- wMAPE = (2 + 1) / (12 + 4) × 100% = 18.8%

**MAPE (Mean Absolute Percentage Error)** - ℹ️ POUR INFO (biaisé)

- **Calcul** : Moyenne des (|Prédit - Réel| / Réel × 100%)
- **Problème 1** : Asymétrique (pénalise 2-3× plus sur-estimation)
- **Problème 2** : Explose sur petites quantités (prédit 2, réel 1 = 100%!)
- **Gardé** pour comparaison historique

**Exemple MAPE** (même cas) :
- Produit A : (2/12) × 100% = 16.7%
- Produit B : (1/4) × 100% = 25%
- MAPE = (16.7% + 25%) / 2 = **20.8%** (pénalisé par produit B!)

**✅ Bon score wMAPE** : < 25% (vs MAPE < 30%)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

En moyenne, le système se trompe de combien en pourcentage sur les quantités prédites ?

**Important** : Calculé **uniquement sur les produits correctement détectés** (True Positives = prédits ET commandés)

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**⚠️ Limitations** : Asymétrique, sensible aux petites quantités → Préférer **wMAPE**

**Bon score** : < 30%
</details>

---

## Distribution des Performances

**Comment se répartissent les ${successfulResults.length} clients ?**

### Détection des besoins (Recall)

| Score | Clients | % |
|-------|---------|---|
| ≥80% | ${successfulResults.filter(r => r.metrics!.recall >= 0.8).length} | ${((successfulResults.filter(r => r.metrics!.recall >= 0.8).length / successfulResults.length) * 100).toFixed(0)}% |
| 50-80% | ${successfulResults.filter(r => r.metrics!.recall >= 0.5 && r.metrics!.recall < 0.8).length} | ${((successfulResults.filter(r => r.metrics!.recall >= 0.5 && r.metrics!.recall < 0.8).length / successfulResults.length) * 100).toFixed(0)}% |
| <50% | ${successfulResults.filter(r => r.metrics!.recall < 0.5).length} | ${((successfulResults.filter(r => r.metrics!.recall < 0.5).length / successfulResults.length) * 100).toFixed(0)}% |

### Justesse des prédictions (Precision)

| Score | Clients | % |
|-------|---------|---|
| ≥70% | ${successfulResults.filter(r => r.metrics!.precision >= 0.7).length} | ${((successfulResults.filter(r => r.metrics!.precision >= 0.7).length / successfulResults.length) * 100).toFixed(0)}% |
| 40-70% | ${successfulResults.filter(r => r.metrics!.precision >= 0.4 && r.metrics!.precision < 0.7).length} | ${((successfulResults.filter(r => r.metrics!.precision >= 0.4 && r.metrics!.precision < 0.7).length / successfulResults.length) * 100).toFixed(0)}% |
| <40% | ${successfulResults.filter(r => r.metrics!.precision < 0.4).length} | ${((successfulResults.filter(r => r.metrics!.precision < 0.4).length / successfulResults.length) * 100).toFixed(0)}% |

${failedResults.length > 0 ? `
---

## Clients Échoués (${failedResults.length})

| Client | Commande | Erreur |
|--------|----------|--------|
${failedResults.map((r) => `| ${r.clientName} | ${r.orderName} | ${r.error || 'Unknown error'} |`).join('\n')}
` : ''}

---

*Rapport généré automatiquement le ${new Date().toISOString()}*
`;
}
