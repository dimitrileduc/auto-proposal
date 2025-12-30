# Backtest Client Task

Teste la qualité des prédictions pour un client en comparant système vs ordre réel.

## Objectif

Simuler le monde avant une commande, générer la prédiction système, puis comparer avec l'ordre réel pour évaluer précision.

## Payload

```typescript
{
  clientId: number;                      // e.g., 123
  daysBeforePrediction?: number;         // Default: 1 (day before order)
  referenceDate?: string;                // ISO 8601 (order search date)
  orderName?: string;                    // e.g., "S39729" (specific order)
  config?: {
    replenishmentThreshold?: number;     // A/B testing config
  };
}
```

## Résultat

```typescript
{
  success: boolean;
  clientId: number;
  clientName: string;
  orderName: string;
  orderDate: string;
  cutoffDate: string;                    // analysisEndDate used

  // Product detection metrics (2+ orders = "clean")
  comparison: {
    truePositives: number;
    falsePositives: number;
    falseNegatives: number;
    precision: number;
    recall: number;
    f1Score: number;
    mae: number;                         // units
    wmape: number;                       // % weighted
    mape: number;                        // %
    bias: number;
  };

  comparisonNoLow?: { ... };             // Low confidence (1 order) only
  comparisonAll?: { ... };               // All products combined

  llm_usage?: {
    calls: number;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };

  reportPaths: {
    markdown: string;
    json: string;
    markdownNoLow?: string;
    jsonNoLow?: string;
  };

  executionTime: number;
}
```

## Étapes d'exécution

```
1. Fetch actual order (by name, reference date, or last)
2. Calculate cutoff date (X days before order)
3. Trigger client-proposal with analysisEndDate = cutoff
4. Fetch actual order details from Odoo
5. Compare system prediction vs actual order
6. Segment results (clean, low, all)
7. Generate 4+ reports (markdown + JSON)
```

## Dépendances

- **[Client Proposal task](./client-proposal.md)** - Called internally for predictions
- **[Backtesting](../features/backtesting.md)** - Comparison logic
- Odoo API (order fetching)
- Report generators

## Exemples

### 1. Test dernière commande

```bash
curl -X POST http://localhost:3000/routes/backtest-client \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": 123,
    "daysBeforePrediction": 5
  }'
```

### 2. Test ordre spécifique

```bash
curl -X POST http://localhost:3000/routes/backtest-client \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": 123,
    "orderName": "S39729",
    "daysBeforePrediction": 5
  }'
```

### 3. Test par date référence

```bash
curl -X POST http://localhost:3000/routes/backtest-client \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": 123,
    "referenceDate": "2025-10-20",
    "daysBeforePrediction": 5
  }'
```

**Response:**
```json
{
  "success": true,
  "orderName": "S39729",
  "orderDate": "2025-10-20",
  "cutoffDate": "2025-10-15",
  "comparison": {
    "precision": 0.92,
    "recall": 0.88,
    "f1Score": 0.90,
    "wmape": 12.5,
    "mae": 2.3
  }
}
```

## Segmentation

Résultats séparés par confiance:

| Segment | Critères | Usage |
|---------|----------|-------|
| **Clean** | 2+ orders, med/high confidence | Main KPI |
| **No Low** | Same as clean | Alternative view |
| **All** | Everything combined | Full picture |

## Time Travel

Key concept - `daysBeforePrediction`:

```
Order date: 2025-10-20
daysBeforePrediction: 5
cutoffDate: 2025-10-15
↓
System predicts AS IF it was 2025-10-15 (before knowing about order)
↓
Compare prediction vs actual order placed on 2025-10-20
```

Cela isole vraiment les prédictions du système sans bias d'ordre subséquent.

## Intégration

Utilisé par:
- **[Backtest Aggregate task](./backtest-aggregate.md)** - Batch backtesting
- Direct HTTP endpoint `/routes/backtest-client`
- Testing & validation workflows

Voir aussi:
- **[Backtesting](../features/backtesting.md)** - Comparison logic
- **[Backtest Aggregate](./backtest-aggregate.md)** - Batch stats

---

**Source**: `backend/src/trigger/backtest-client.task.ts`
