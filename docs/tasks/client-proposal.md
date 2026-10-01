# Client Proposal Task

Traite un client : calcul stock → préparation → activité « Suggestion commande » → reports.

## Objectif

Exécuter le pipeline complet pour un client unique : analyser le stock, préparer les produits suggérés, puis créer dans Odoo l'activité « Suggestion commande » (et l'opportunité qui la porte si besoin), et produire les reports.

## Payload

```typescript
{
  client: {
    id: number;
    name: string;
    email: string | null;
  };
  config: {
    analysisEndDate?: string;              // "YYYY-MM-DD" or with time
    replenishmentThreshold: number;        // Days
    moqMinimum: number;                    // EUR
    skipOdooWrite: boolean;                // Default: true (TEST mode)
    shouldGenerateReport?: boolean;
    companyId?: number;                    // Default: 3
    eligibilityCheck?: boolean;            // Default: true
    runDate?: string;                      // "YYYY-MM-DD", default: today Europe/Paris
  };
}
```

**Defaults:**
- `analysisEndDate`: today
- `replenishmentThreshold`: 30 days
- `moqMinimum`: 300 EUR
- `skipOdooWrite`: true (TEST mode : lectures uniquement)
- `shouldGenerateReport`: true
- `companyId`: 3 (FOODPRINT SRL)
- `eligibilityCheck`: true — revérification complète (vendeur, activité ouverte, relance de moins de 21 jours) juste avant l'écriture. `false` en backtest : pas de décision d'éligibilité et jamais d'écriture.
- `runDate`: aujourd'hui en Europe/Paris — échéance de l'activité et base du délai de 21 jours

`skipOdooQuoteGeneration` n'existe plus : un payload qui l'envoie encore est en mode test.

## Résultat

```typescript
{
  client: { id, name, email };
  config: ClientProcessingConfig;
  result: ClientProposalResult;      // result.outcome, result.activityNote (HTML)
  summary: {
    hasRisk: boolean;
    productsCount: number;
    finalAmount: number;
    outcome: SuggestionActivityOutcome; // created | would_create | skipped | error
  };
  report?: {
    markdown?: string;
    json?: string;
  };
  executionTime: number;
}
```

`quoteName` et `quoteId` n'existent plus.

## Étapes d'exécution

1. **Stock Analysis** - Appelle [Stock Replenishment](../features/stock-replenishment.md)
2. **Pricing** - Appelle [Proposal Preparation](../features/proposal-preparation.md)
3. **Activité** - Appelle [Suggestion Activity](../features/suggestion-activity.md) (`processClientSuggestion`) :
   - aucun produit suggéré → `skipped` (« aucun produit suggéré ») ;
   - revérification de l'éligibilité si `eligibilityCheck` ;
   - plus ancienne opportunité ouverte et date de dernière commande confirmée ;
   - mode test → `would_create` ; sinon opportunité créée si besoin, puis activité → `created`.
4. **Reports** - Génère markdown + JSON (si activé), avec la section « PHASE 3 - ACTIVITÉ »

Une erreur de lecture Odoo fait échouer la tâche (relance Trigger.dev, 3 tentatives). Une erreur d'écriture donne un `outcome` `error`, avec l'id de l'opportunité si elle a été créée sans son activité. La tâche échoue aussi si `eligibilityCheck` est actif et que l'id du type d'activité n'est pas configuré (0).

## Dépendances

- **[Stock Replenishment](../features/stock-replenishment.md)** - Calcul quantités
- **[Proposal Preparation](../features/proposal-preparation.md)** - Pricing + MOQ
- **[Suggestion Activity](../features/suggestion-activity.md)** - Activité Odoo
- Report generators

## Exemples

Route HTTP : `POST /client-task` avec `{ clientId, clientName?, clientEmail?, config }`.

### 1. Mode test (défaut)

```bash
curl -X POST http://localhost:3000/client-task \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": 123,
    "clientName": "ACME Corp"
  }'
```

**Résultat du run (extrait):**
```json
{
  "summary": {
    "hasRisk": true,
    "productsCount": 4,
    "finalAmount": 301.5,
    "outcome": {
      "kind": "would_create",
      "leadId": 1,
      "leadName": "Opportunité mars",
      "leadCreated": false,
      "salespersonId": 7,
      "salespersonName": "Marie Vendeuse"
    }
  }
}
```

### 2. Mode réel

```bash
curl -X POST http://localhost:3000/client-task \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": 123,
    "clientName": "ACME Corp",
    "config": {
      "skipOdooWrite": false
    }
  }'
```

La revérification protège aussi cette tâche lancée seule : un client déjà servi est écarté (« activité déjà ouverte »).

### 3. Backtest (custom date)

```bash
curl -X POST http://localhost:3000/client-task \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": 123,
    "clientName": "ACME",
    "config": {
      "analysisEndDate": "2025-10-15",
      "eligibilityCheck": false
    }
  }'
```

## Configuration

| Param | Default | Signification |
|-------|---------|---------------|
| `analysisEndDate` | today | Date d'analyse (pour backtest) |
| `replenishmentThreshold` | 30 | Jours de stock couverture |
| `moqMinimum` | 300 | EUR seuil commande |
| `skipOdooWrite` | true | TEST : aucune écriture Odoo |
| `shouldGenerateReport` | true | Générer reports |
| `companyId` | 3 | Société analysée |
| `eligibilityCheck` | true | Revérification avant écriture ; `false` en backtest |
| `runDate` | aujourd'hui (Paris) | Échéance de l'activité |

## Intégration

Utilisé par:
- **[Orchestrator task](./orchestrator.md)** - Triggered en batch, clients éligibles seulement
- **[Backtest Client task](./backtest-client.md)** - Appel interne pour prédictions (`skipOdooWrite: true`, `eligibilityCheck: false`)
- HTTP endpoint `/client-task`

Voir aussi:
- **[Orchestrator task](./orchestrator.md)** - Contexte batch
- **[Backtest Client task](./backtest-client.md)** - Comparaison

---

**Source**: `backend/src/trigger/client-proposal.task.ts`
