# Backtesting

Valide la qualité des prédictions en comparant devis générés vs commandes réelles.

## Objectif

Comparer la proposition générée par le système avec l'ordre réel passé par le client, pour évaluer:
- **Détection de produits**: Precision, Recall, F1-Score
- **Précision quantités**: MAE, WMAPE, MAPE, Bias

## Flux

```mermaid
flowchart LR
    A["Ordre Réel<br/>(historique)"] --> B[\"Time Travel<br/>analysisEndDate\"]
    B --> C["Générer Proposal<br/>(comme neuf)"]
    C --> D["Comparer vs<br/>Ordre Réel"]
    D --> E["Metrics +<br/>Rapports"]
```

## Entrée / Sortie

**Fonction principale (Comparison):**
```typescript
compareSystemPredictionVsRealOrder(
  systemProposal: ProposalPreparationResult,
  realOrderLines: OdooSaleOrderLine[],
  stockAnalysis: StockReplenishmentResult,
  orderContext: {
    clientId: number;
    clientName: string;
    orderName: string;
    orderDate: string;
    cutoffDate: string;
    daysBeforePrediction: number;
  }
): BacktestComparisonResult
```

**Résultat (Comparison):**
```typescript
{
  // Arrays de produits
  truePositives: ProductMatch[];     // Prédits ET commandés
  falsePositives: ProductMismatch[]; // Prédits MAIS PAS commandés
  falseNegatives: ProductMismatch[]; // PAS prédits MAIS commandés

  // Accuracy metrics
  precision: number;            // TP / (TP + FP)
  recall: number;               // TP / (TP + FN)
  f1Score: number;              // Harmonic mean

  // Quantity metrics
  mae: number;                  // Mean Absolute Error (units)
  wmape: number;                // Weighted MAPE (%)
  mape: number;                 // MAPE (%)
  bias: number;                 // Directional bias

  // Métadonnées
  llmUsage?: { input_tokens, output_tokens, total_cost }
}
```

**Types (Produits):**

`ProductMatch` (True Positive):
```typescript
{
  product_id: number;
  product_name: string;
  predicted_qty: number;
  real_qty: number;
  absolute_error: number;
  error_percent: number;
  match_type: "exact" | "partial";
  confidence: "low" | "medium" | "high";
  quantity_source: "llm" | "median-fallback";
  order_count: number;
  // Audit trail
  llm_input_data?: {...};
  llm_prediction?: {...};
}
```

`ProductMismatch` (False Positive / False Negative):
```typescript
{
  product_id: number;
  product_name: string;
  predicted_qty?: number;  // FP only
  real_qty?: number;       // FN only
  reason: string;          // "stock_sufficient", "no_history", etc.
  confidence: "low" | "medium" | "high";
}
```

## Metrics

| Metric | Signification |
|--------|---------------|
| **TP/FP/FN** | Produits corrects/faux positifs/manqués |
| **Precision** | De ceux prédits, % corrects |
| **Recall** | Des vrais, % détectés |
| **F1-Score** | Balance precision ↔ recall |
| **MAE** | Erreur moyenne quantité (units) |
| **WMAPE** | % erreur pondérée par montant |

## Segmentation

Résultats agrégés par confiance:

| Segment | Définition | Usage |
|---------|-----------|-------|
| **Clean** | 2+ orders, med/high confidence | Principaux metrics |
| **Low** | 1 order, low confidence | Produits optionnels |
| **All** | Tout combiné | Statistiques globales |

## Cas d'usage

### 1. Backtest un client

```typescript
// Via task backtestClientTask (voir tasks/backtest-client.md)
const result = await backtestClientTask.trigger({
  clientId: 123,
  daysBeforePrediction: 5,
  orderName: "S39729"
});
// → Compare prédiction vs ordre S39729
```

### 2. Analyser par segmentation

```typescript
const result = await backtestClientTask.trigger({
  clientId: 123,
  orderName: "S39729"
});

console.log(`Precision (clean): ${result.comparison.precision}`);
console.log(`Recall (clean): ${result.comparison.recall}`);
console.log(`F1 (clean): ${result.comparison.f1Score}`);
```

### 3. Batch backtesting

```typescript
// Via task backtestAggregateTask
const aggregate = await backtestAggregateTask.trigger({
  autoDiscoverCount: 50,
  daysBeforePrediction: 5
});
// → Statistiques sur 50 clients
```

## Time Travel (pour backtesting)

Pour comparer réellement, le système utilise `analysisEndDate`:

```typescript
// Ordre S39729 le 2025-10-20
// Backtest: analysisEndDate = 2025-10-15 (5 jours avant)
// → Simuler le monde tel qu'il était avant l'ordre
```

Cela permet:
- Prédire comme si on ignorait cette commande
- Comparer prediction vs réalité
- Évaluer qualité système

## Fonctions Utilitaires

### Client Discovery

**Trouver les clients pour backtesting:**
```typescript
findTopBacktestClients(
  odooConfig: { url, db, username, password },
  count: number = 50,        // Top N clients
  year: number = 2025,       // Filtrer par année
  referenceDate?: string     // Ou jusqu'à date
): Promise<number[]>         // Retourne IDs clients
```

Critères:
- Trier par nombre de commandes DESC
- Retourner top N (50 par défaut)
- Filtrer par année ou date

### Summary Metrics (Agrégation simple)

**Résumé haut niveau sur multiple clients:**
```typescript
calculateSummaryMetrics(
  v2Reports: BacktestReportJSONv2[]  // Résultats de plusieurs clients
): SummaryMetrics

// Résultat:
{
  baseProducts: {
    volumePercent: number;
    medianRecall: number;
    medianPrecision: number;
  },
  optionalProducts: { ... },
  overall: { ... }
}
```

### Aggregate Statistics (Agrégation détaillée)

**Analyse complète sur multiple clients:**
```typescript
calculateAggregateStatistics(
  metrics: IndividualBacktestMetrics[],
  reports?: BacktestReportJSONv2[]
): AggregateMetrics

// Résultat:
{
  precision: { median, stdDev, p25, p50, p75, p90 },
  recall: { median, stdDev, p25, p50, p75, p90 },
  f1_score: { median, stdDev, ... },
  wmape: { median, stdDev, ... },
  mape: { median, stdDev, ... },
  bias: { median, stdDev, ... },
  summary: SummaryMetrics
}
```

## Intégration

Utilisé par:
- **[Backtest Client task](../tasks/backtest-client.md)** - Test unitaire
- **[Backtest Aggregate task](../tasks/backtest-aggregate.md)** - Statistiques agrégées
- **[Client Proposal task](../tasks/client-proposal.md)** - Optionnel reporting

Voir aussi:
- **[Proposal Generation](./proposal-generation.md)** - Crée les devis
- **[Backtesting tasks](../tasks/)** - Exécution

---

**Source**: `backend/src/features/backtesting/`
