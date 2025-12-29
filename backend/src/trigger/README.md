# Trigger.dev Tasks

Orchestration du système Auto-Proposal via Trigger.dev, permettant le traitement parallèle de 500 clients simultanément pour générer automatiquement des propositions de commande.

## Production Tasks

### orchestrator.task

Tâche principale qui récupère tous les clients inactifs et lance des tasks client-proposal en batch parallèle (chunks de 500).

**Payload:**
```
OrchestratorTaskPayload:
  config (optional):
    dateMin: string (ex: "2025-01-01")
    dateMax: string (ex: "2025-12-29")
    analysisWindowDays: number (ex: 270)
    targetCoverage: number (ex: 30)
    leadTime: number (ex: 14)
    moqMinimum: number (ex: 100)
    maxClientsToAnalyze: number | "all"
    generateReports: boolean
    skipOdooQuoteGeneration: boolean
    forceReanalysis: boolean
```

**Flow:**
1. Récupère clients inactifs entre dateMin et dateMax
2. Lance clientProposalTask par chunks de 500 clients
3. Collecte résultats, calcule statistiques globales
4. Génère rapport markdown global + rapports clients individuels

**Output:**
- success: boolean
- statistics: clientsWithRisk, totalProducts, totalValue, quotesGenerated, etc
- globalReport: markdown complet + chemin fichier
- executionTime: ms

---

### client-proposal.task

Tâche individuelle traitant un client en 3 phases séquentielles.

**Payload:**
```
ClientTaskPayload:
  client:
    id: number
    name: string
    email: string
  config:
    analysisWindowDays: number
    analysisEndDate: string
    targetCoverage: number
    leadTime: number
    moqMinimum: number
    skipOdooQuoteGeneration: boolean
    shouldGenerateReport: boolean
```

**Phases:**
1. Stock Analysis: Analyse historique client, calcule jours avant rupture, identifie produits urgents/modérés
2. Proposal Preparation: Appelle les prix historiques, applique MOQ si besoin
3. Quote Generation: Crée devis Odoo (si skipOdooQuoteGeneration = false et hasRisk = true)

**Output:**
- client: id, name, email
- result: ClientProposalResult avec phases, productsCount, finalAmount, hasRisk, success
- summary: hasRisk, productsCount, urgentProductsCount, moderateProductsCount, finalAmount, quoteName
- report: markdown complet + markdown devis seul
- executionTime: ms

---

## Testing Tasks

### backtest-client.task

Tâche de validation: teste la prédiction du système contre une commande réelle du passé (time travel).

**Payload:**
```
BacktestClientTaskPayload:
  clientId: number
  daysBeforePrediction: number (optional, default 1)
  referenceDate: string (optional)
  orderName: string (optional, ex: "S39729")
```

**Flow:**
1. Récupère la dernière commande réelle du client
2. Calcule cutoff date (X jours avant la commande)
3. Lance clientProposalTask avec analysisEndDate = cutoff (simule l'état du monde à cette date)
4. Compare: prédiction système vs commande réelle
5. Génère rapport comparison (precision, recall, F1)

**Output:**
- Rapport markdown détaillé avec comparaison système vs réalité

---

### backtest-aggregate.task

Tâche d'agrégation: combine N résultats de backtests pour calculer métriques globales de qualité.

**Payload:**
```
BacktestAggregateTaskPayload:
  clientIds: number[]
  daysBeforePrediction: number (optional)
```

**Output:**
- Statistiques globales: accuracy, precision, recall, F1
- Rapports JSON + markdown avec résultats agrégés

---

## Configuration et Déploiement

**Retry policy (toutes les tasks):**
- maxAttempts: 3 (tentative 1 + 2 retries)
- factor: 2 (backoff exponentiel)
- minTimeoutInMs: 1000
- maxTimeoutInMs: 30000
- randomize: true (±25% aléatoire)

**Batch size limit:**
- Maximum 500 tasks par batchTriggerAndWait
- orchestrator.task découpe automatiquement en chunks de 500

**Dépendances:**
- `/features/client-inactivity/` - détection clients inactifs
- `/features/stock-replenishment/` - analyse stock et jours avant rupture
- `/features/proposal-preparation/` - pricing + MOQ
- `/features/proposal-generation/` - création devis Odoo
- `/features/backtesting/` - validation et comparaison (pour backtest tasks)
- `/reports/` - génération rapports markdown

**Utilisé par:**
- `/routes/orchestrator.ts` - endpoint HTTP pour trigger manuel
- Trigger.dev dashboard - triggers directs

## Points importants

1. Config merging: payload.config override autoProposalConfig
2. Result object: triggerAndWait retourne { ok, output, error } - PAS l'output direct
3. Never Promise.all: Ne jamais wrapper triggerAndWait dans Promise.all
4. Erreur batch: Si batch échoue entièrement, marque tous ses clients comme failed et continue
5. Erreur individuelle: Si une task échoue, crée un résultat d'erreur mais continue
