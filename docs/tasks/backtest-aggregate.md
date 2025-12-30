# Backtest Aggregate Task

Batch backtesting de plusieurs clients avec agrégation statistique.

## Objectif

Lancer le backtest de N clients en parallèle, puis calculer statistiques globales (mean, median, stdDev, percentiles).

## Payload

```typescript
{
  clientIds?: number[];                    // Explicit list of clients
  autoDiscoverCount?: number;              // Auto-discover N clients (default: 50)
  daysBeforePrediction?: number;           // Default: 1
  referenceDate?: string;                  // Order search date
  specificOrders?: Record<string, string>; // { "123": "S39729", ... }
  config?: {
    replenishmentThreshold?: number;       // A/B testing config
  };
}
```

## Résultat

```typescript
{
  success: boolean;
  clientsProcessed: number;
  clientsSucceeded: number;
  clientsFailed: number;

  aggregateMetrics: {
    precision: { mean, median, stdDev, p25, p75, p90 };
    recall: { ... };
    f1Score: { ... };
    wmape: { ... };
    mae: { ... };
  };

  individualResults: BacktestIndividualResult[];

  llm_usage?: {
    calls: number;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };

  reports: {
    json: string;           // backtest-aggregate-{date}-v2.json
    markdown: string;       // backtest-aggregate-{date}-summary.md
  };

  executionTime: number;
}
```

## Étapes d'exécution

```
1. Resolve client list:
   - If specificOrders → use those clients
   - Else if clientIds → use them
   - Else → auto-discover top N active clients

2. Batch process in chunks of 500:
   - Trigger backtest-client tasks (parallel)
   - Continue on failures, collect results

3. Aggregate statistics:
   - Calculate mean, median, stdDev, percentiles
   - Per client and global

4. Generate reports:
   - Read v2 JSON files from disk
   - Generate summary markdown
```

## Dépendances

- **[Backtest Client task](./backtest-client.md)** - Triggered in batches
- **[Client Inactivity](../features/client-inactivity.md)** - For auto-discovery
- **[Backtesting](../features/backtesting.md)** - Statistics aggregation
- Odoo API (auto-discovery)
- Report generators

## Exemples

### 1. Auto-discover 50 clients

```bash
curl -X POST http://localhost:3000/routes/backtest-aggregate \
  -H "Content-Type: application/json" \
  -d '{
    "autoDiscoverCount": 50,
    "daysBeforePrediction": 5
  }'
```

**Response:**
```json
{
  "success": true,
  "clientsProcessed": 50,
  "clientsSucceeded": 48,
  "clientsFailed": 2,
  "aggregateMetrics": {
    "precision": { "mean": 0.87, "median": 0.90, "stdDev": 0.08 },
    "recall": { "mean": 0.82, "median": 0.85, "stdDev": 0.10 },
    "f1Score": { "mean": 0.84, "median": 0.87, "stdDev": 0.09 }
  }
}
```

### 2. Spécifier clients

```bash
curl -X POST http://localhost:3000/routes/backtest-aggregate \
  -H "Content-Type: application/json" \
  -d '{
    "clientIds": [123, 456, 789],
    "daysBeforePrediction": 5
  }'
```

### 3. Ordeers spécifiques

```bash
curl -X POST http://localhost:3000/routes/backtest-aggregate \
  -H "Content-Type: application/json" \
  -d '{
    "specificOrders": {
      "123": "S39729",
      "456": "S39730",
      "789": "S39731"
    },
    "daysBeforePrediction": 5
  }'
```

## Client Resolution

Priorité d'utilisation:

1. **specificOrders** (au plus haut)
   - Format: `{ "clientId": "orderName", ... }`
   - Test spécifique d'ordres

2. **clientIds**
   - Liste explicite de clients
   - Test groupe connu

3. **autoDiscoverCount** (default)
   - Découvre top N clients actifs
   - Default: 50 clients

## Batch Processing

Traite par chunks de 500 clients:

```
Clients 1-500    (batch 1) ─┐
Clients 501-1000 (batch 2) ─┼─→ Parallel backtest
Clients 1001-... (batch 3) ─┘     Continue on failures
```

Chaque batch lance `backtest-client` tasks en parallèle.

## Statistiques Générées

Pour chaque métrique:
- **mean** - Moyenne
- **median** - Médiane
- **stdDev** - Écart-type
- **p25** - 25e percentile
- **p75** - 75e percentile
- **p90** - 90e percentile

## Reports

Deux formats:
- **JSON** (`backtest-aggregate-{date}-v2.json`) - Détail complet
- **Markdown** (`backtest-aggregate-{date}-summary.md`) - Résumé lisible

## Intégration

Utilisé par:
- Direct HTTP endpoint `/routes/backtest-aggregate`
- Testing & evaluation workflows
- Performance validation

Voir aussi:
- **[Backtest Client](./backtest-client.md)** - Task individual
- **[Backtesting](../features/backtesting.md)** - Logic

---

**Source**: `backend/src/trigger/backtest-aggregate.task.ts`
