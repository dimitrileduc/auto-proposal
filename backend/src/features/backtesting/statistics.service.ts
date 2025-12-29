/**
 * Statistical analysis service for aggregated backtests
 *
 * Computes descriptive statistics (mean, median, stdDev, percentiles)
 * on backtest metrics collected across multiple clients.
 *
 * @module features/backtesting/statistics
 */

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
 * Aggregate statistics computed across N clients
 */
export interface AggregateMetrics {
  /** Arithmetic mean of all metrics */
  mean: {
    precision: number;
    recall: number;
    f1Score: number;
    mae: number;
    wmape: number;
    mape: number;
    bias: number;
  };
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
 * Computes aggregate statistics (mean, median, stdDev, percentiles)
 * over a collection of individual backtest metrics
 *
 * @param metrics - Array of individual backtest metrics
 * @returns Computed aggregate statistics
 */
export function calculateAggregateStatistics(
  metrics: IndividualBacktestMetrics[]
): AggregateMetrics {
  if (metrics.length === 0) {
    const emptyStats = {
      precision: 0,
      recall: 0,
      f1Score: 0,
      mae: 0,
      wmape: 0,
      mape: 0,
      bias: 0,
    };
    return {
      mean: emptyStats,
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

  const mean = {
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
    precision: calculateStdDev(metrics.map((m) => m.precision), mean.precision),
    recall: calculateStdDev(metrics.map((m) => m.recall), mean.recall),
    f1Score: calculateStdDev(metrics.map((m) => m.f1Score), mean.f1Score),
    mae: calculateStdDev(metrics.map((m) => m.mae), mean.mae),
    wmape: calculateStdDev(metrics.map((m) => m.wmape), mean.wmape),
    mape: calculateStdDev(metrics.map((m) => m.mape), mean.mape),
    bias: calculateStdDev(metrics.map((m) => m.bias), mean.bias),
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

  return { mean, median, stdDev, percentiles };
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

| Métrique | Moyenne | Médiane | Interprétation |
|----------|---------|---------|----------------|
| **Recall** | ${(aggregateMetrics.mean.recall * 100).toFixed(1)}% | ${(aggregateMetrics.median.recall * 100).toFixed(1)}% | % de besoins réels détectés |
| **Precision** | ${(aggregateMetrics.mean.precision * 100).toFixed(1)}% | ${(aggregateMetrics.median.precision * 100).toFixed(1)}% | % de prédictions correctes (${(100 - aggregateMetrics.median.precision * 100).toFixed(1)}% proposés non commandés) |
| **F1-Score** | ${(aggregateMetrics.mean.f1Score * 100).toFixed(1)}% | ${(aggregateMetrics.median.f1Score * 100).toFixed(1)}% | Équilibre détection/précision |
| **wMAPE** | ${aggregateMetrics.mean.wmape.toFixed(1)}% | ${aggregateMetrics.median.wmape.toFixed(1)}% | ⚖️ Écart pondéré robuste (métrique principale) |
| **MAPE** | ${aggregateMetrics.mean.mape.toFixed(1)}% | ${aggregateMetrics.median.mape.toFixed(1)}% | Écart moyen (info, biaisé) |
| **Bias** | ${aggregateMetrics.mean.bias.toFixed(1)}% | ${aggregateMetrics.median.bias.toFixed(1)}% | Biais directionnel (>0 = surestime, <0 = sous-estime) |

${data.llm_usage ? `
### 🤖 Utilisation LLM

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Appels LLM** | ${data.llm_usage.calls} | Nombre de produits prédits par LLM (>2 commandes historiques) |
| **Tokens Total** | ${data.llm_usage.totalTokens.toLocaleString('fr-FR')} | ${data.llm_usage.promptTokens.toLocaleString('fr-FR')} prompt + ${data.llm_usage.completionTokens.toLocaleString('fr-FR')} completion |
| **Tokens Moyen/Appel** | ${Math.round(data.llm_usage.totalTokens / data.llm_usage.calls).toLocaleString('fr-FR')} | Tokens moyen par prédiction LLM |
` : ''}

<details>
<summary>Qu'est-ce que la Moyenne vs Médiane ?</summary>

**Moyenne** : Somme de tous les scores ÷ nombre de clients
- Sensible aux valeurs extrêmes (un très mauvais client tire la moyenne vers le bas)

**Médiane** : Valeur du milieu quand on trie tous les scores
- Robuste aux valeurs extrêmes (meilleure représentation du client "typique")

**Exemple** : 5 clients avec Recall [20%, 80%, 90%, 95%, 100%]
- Moyenne = 77% (tirée vers le bas par les 20%)
- Médiane = 90% (valeur centrale, plus représentative)

**Bon système** : Moyenne et médiane élevées pour Recall/Precision/F1, faibles pour MAE/MAPE
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
