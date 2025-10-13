# 🔄 Workflow Auto-Proposal

Orchestration principale du système Auto-Proposal.

## 📁 Fichiers

- `auto-proposal.workflow.ts` - Workflow principal (tous les clients)
- `client-proposal.workflow.ts` - Workflow pour 1 client
- `client-report-data.ts` - Prépare données rapport
- `workflow.client-stats.ts` - Transforme résultats → rapports
- `workflow.stats.ts` - Calcule stats globales
- `workflow.types.ts` - Types TypeScript

## 🎯 Workflow Principal

**Fichier**: `auto-proposal.workflow.ts`

### Étapes

```
1. getInactiveClients(30j) → [1451 clients]
2. Loop Phase 1 (TOUS) → calculateReplenishmentNeeds() × 1451
3. Loop Phase 2.5 + 3 (10 premiers avec risque)
   ├─ prepareProposal() → Pricing + MOQ
   └─ generateQuote() → Devis Odoo
4. calculateGlobalWorkflowStatistics() → Stats
5. Génération rapports markdown
   ├─ client-{id}-{name}.md × 10
   └─ global-report-{date}.md
```

### Usage

```typescript
const result = await runAutoProposalWorkflow({
  skipQuoteGeneration: false,          // true = pas de devis Odoo
  maxClientsForProposalGeneration: 10, // ou "all"
});
```

### Retour

```typescript
{
  success: boolean;
  statistics: {...};           // Stats globales
  clientResults: [...];        // Résultats bruts
  clientReportData: [...];     // Données rapports
  reportPath: string;          // global-report-{date}.md
  executionTime: number;       // ms
}
```

## 📊 Rapports Générés

### Rapport Client

**Fichier**: `reports-output/client-{id}-{name}.md`

**Structure**:
- **Phase 1** : Stock Analysis (RAW) avec dropdowns par produit
- **Phase 2.5** : Pricing + MOQ (ADJUSTED)
- **Phase 3** : Devis Odoo (QUOTE) avec taxes
- **Comparaison** : Prix historiques vs Odoo

### Rapport Global

**Fichier**: `reports-output/global-report-{date}.md`

**Contenu**:
- Statistiques globales (produits, montants, MOQ)
- Tableau récapitulatif par client
- Analyse ajustements MOQ
- Temps d'exécution par phase
- Écarts prix historiques vs Odoo

## 🔄 Flux de Données

```
getInactiveClients()
  ↓ [1451 clients]
calculateReplenishmentNeeds() × 1451
  ↓ [StockReplenishmentResult]
prepareProposal() × 10
  ↓ [ProposalPreparationResult]
generateQuote() × 10
  ↓ [QuoteCreationResult]
calculateGlobalWorkflowStatistics()
  ↓ [GlobalWorkflowStatistics]
prepareAllClientReportData()
  ↓ [ClientReportData × 10]
generateClientReport() + generateGlobalReport()
  ↓ [rapports markdown]
```

## 📝 Préparation Rapports

### `prepareClientReportData()`

Transforme 1 résultat client → données rapport

```typescript
interface ClientReportData {
  client: { id, name, email };
  phases: {
    stockAnalysis,      // Phase 1 (RAW)
    proposalFinal,      // Phase 2.5 (ADJUSTED)
    quote?,             // Phase 3 (QUOTE)
  };
  summary: {
    productsCount,
    initialAmount,      // Avant MOQ
    finalAmount,        // Après MOQ
    moqAdjusted,
    moqGap,
  };
}
```

### `prepareAllClientReportData()`

Transforme tous les résultats → données rapports (filtre clients avec full workflow)

### `calculateGlobalWorkflowStatistics()`

Calcule stats globales

```typescript
interface GlobalWorkflowStatistics {
  totalInactiveClients: 1451;
  clientsWithRisk: 124;
  quotesGenerated: 10;
  totalProducts: 87;
  totalValue: 7757.84;  // HT
}
```

## 🎯 Cas d'Usage

### Via HTTP

```bash
curl -X POST http://localhost:3000/workflow \
  -H "Content-Type: application/json" \
  -d '{"skipQuoteGeneration": false, "maxClientsForProposalGeneration": 10}'
```

### Mode Test

```typescript
await runAutoProposalWorkflow({
  skipQuoteGeneration: true,  // Pas de devis
  maxClientsForProposalGeneration: 5,
});
```

## ⚙️ Config

**Fichier**: `src/config/auto-proposal.ts`

```typescript
{
  inactivityDaysThreshold: 30,
  analysisWindowDays: 180,
  targetCoverage: 14,
  leadTime: 5,
  minimumOrderAmount: 300,
  workflow: {
    maxClientsForProposalGeneration: 10,
  },
}
```

## 🚨 Erreurs

- Client en erreur → `success: false`, workflow continue
- `company_id` manquant → fallback à 1
- Erreur Odoo → logged, workflow continue
