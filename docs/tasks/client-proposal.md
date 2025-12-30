# Client Proposal Task

Traite un client: calcul stock → préparation → génération devis → reports.

## Objectif

Exécuter le pipeline complet pour un client unique: analyser stock replenishment, préparer devis, générer quote Odoo, créer reports.

## Payload

```typescript
{
  client: {
    id: number;
    name: string;
    email?: string;
  };
  config?: {
    analysisEndDate?: string;              // "YYYY-MM-DD" or with time
    replenishmentThreshold?: number;       // Days
    moqMinimum?: number;                   // EUR
    skipOdooQuoteGeneration?: boolean;
    shouldGenerateReport?: boolean;
  };
}
```

**Defaults:**
- `analysisEndDate`: today
- `replenishmentThreshold`: 30 days
- `moqMinimum`: 300 EUR
- `skipOdooQuoteGeneration`: true (TEST mode)
- `shouldGenerateReport`: true

## Résultat

```typescript
{
  client: { id, name, email };
  config: ClientProcessingConfig;
  result: ClientProposalResult;
  summary: {
    hasRisk: boolean;
    productsCount: number;
    finalAmount: number;
    quoteName?: string;
    quoteId?: number;
  };
  report?: {
    markdown?: string;
    json?: string;
  };
  executionTime: number;
}
```

## Étapes d'exécution

1. **Stock Analysis** - Appelle [Stock Replenishment](../features/stock-replenishment.md)
2. **Pricing** - Appelle [Proposal Preparation](../features/proposal-preparation.md)
3. **Quote Creation** - Appelle [Proposal Generation](../features/proposal-generation.md) (si activé)
4. **Reports** - Génère markdown + JSON (si activé)

## Dépendances

- **[Stock Replenishment](../features/stock-replenishment.md)** - Calcul quantités
- **[Proposal Preparation](../features/proposal-preparation.md)** - Pricing + MOQ
- **[Proposal Generation](../features/proposal-generation.md)** - Quote Odoo
- Report generators

## Exemples

### 1. Production

```bash
curl -X POST http://localhost:3000/routes/client-task \
  -H "Content-Type: application/json" \
  -d '{
    "client": {
      "id": 123,
      "name": "ACME Corp",
      "email": "contact@acme.com"
    },
    "config": {
      "skipOdooQuoteGeneration": false,
      "shouldGenerateReport": true
    }
  }'
```

**Response:**
```json
{
  "success": true,
  "summary": {
    "hasRisk": false,
    "productsCount": 12,
    "finalAmount": 1250,
    "quoteName": "S39591",
    "quoteId": 45829
  }
}
```

### 2. Test mode (skip Odoo)

```bash
curl -X POST http://localhost:3000/routes/client-task \
  -H "Content-Type: application/json" \
  -d '{
    "client": {
      "id": 123,
      "name": "ACME Corp"
    },
    "config": {
      "skipOdooQuoteGeneration": true
    }
  }'
```

### 3. Backtest (custom date)

```bash
curl -X POST http://localhost:3000/routes/client-task \
  -H "Content-Type: application/json" \
  -d '{
    "client": { "id": 123, "name": "ACME" },
    "config": {
      "analysisEndDate": "2025-10-15"
    }
  }'
```

## Configuration

| Param | Default | Signification |
|-------|---------|---------------|
| `analysisEndDate` | today | Date d'analyse (pour backtest) |
| `replenishmentThreshold` | 30 | Jours de stock couverture |
| `moqMinimum` | 300 | EUR seuil commande |
| `skipOdooQuoteGeneration` | false | TEST: skip création |
| `shouldGenerateReport` | true | Générer reports |

## Intégration

Utilisé par:
- **[Orchestrator task](./orchestrator.md)** - Triggered en batch
- **[Backtest Client task](./backtest-client.md)** - Appel interne pour prédictions
- HTTP endpoint `/routes/client-task`

Voir aussi:
- **[Orchestrator task](./orchestrator.md)** - Contexte batch
- **[Backtest Client task](./backtest-client.md)** - Comparaison

---

**Source**: `backend/src/trigger/client-proposal.task.ts`
