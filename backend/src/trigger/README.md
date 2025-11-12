# Trigger.dev Orchestration

## 🎯 Rôle

Orchestration du système Auto-Proposal via Trigger.dev v3, permettant le traitement parallèle de jusqu'à 500 clients simultanément par batch pour générer automatiquement des propositions de commande.

## 📦 Inventaire des Composants

### Fichier: `orchestrator.task.ts`

**Description:** Task principale qui coordonne l'analyse de tous les clients inactifs en déclenchant des tasks client-proposal en batch parallèle.

<details><summary>Voir l'implémentation</summary>

```typescript
export const orchestratorTask = task({
  id: "auto-proposal-orchestrator",
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 30000,
    randomize: true,
  },
  run: async (payload: OrchestratorTaskPayload): Promise<OrchestratorTaskResult> => {
    // 1. Récupérer tous les clients inactifs
    const allInactiveClients = await getInactiveClients(
      config.dateMin,
      config.dateMax,
      config.forceReanalysis ? autoProposalConfig.quoteGeneration.autoProposalTagId : undefined
    );

    // 2. Limiter les clients à analyser (debug)
    const maxToAnalyze = config.maxClientsToAnalyze === "all"
      ? allInactiveClients.length
      : config.maxClientsToAnalyze;
    const clientsToProcess = allInactiveClients.slice(0, maxToAnalyze);

    // 3. Batch trigger en chunks de 500
    const BATCH_SIZE = 500;
    const totalChunks = Math.ceil(clientsToProcess.length / BATCH_SIZE);

    for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
      const chunkClients = clientsToProcess.slice(chunkStart, chunkEnd);
      const batchPayloads = chunkClients.map((client) => ({ payload: { ... } }));

      // Batch trigger and wait pour ce chunk
      const batchResults = await clientProposalTask.batchTriggerAndWait(batchPayloads);

      // Collecter les résultats
      for (const run of batchResults.runs) {
        if (run.ok) {
          clientResults.push(run.output.result);
        } else {
          // Gérer l'erreur individuelle
        }
      }
    }

    // 4. Générer le rapport global
    const globalMarkdownReport = generateGlobalReport(globalReportData);
    await fs.writeFile(reportPath, globalMarkdownReport);

    return { success: true, statistics, globalReport, executionTime };
  },
});
```

**Points clés:**
- **BATCH_SIZE = 500**: Limite Trigger.dev pour batchTriggerAndWait
- **Retry policy**: 3 tentatives max avec backoff exponentiel (x2) et aléatoire
- **Error handling**: Chaque batch échoué marque tous ses clients comme failed et continue avec le suivant
- **Config merging**: payload.config override autoProposalConfig (lines 63-88)
- **Date handling**: dateMin/dateMax utilisés pour définir la période d'inactivité (pas de nombre de jours fixe)

</details>

---

### Fichier: `client-proposal.task.ts`

**Description:** Task individuelle pour traiter un client, exécutant le workflow complet en 3 phases (Stock Analysis, Proposal Preparation, Quote Generation).

<details><summary>Voir l'implémentation</summary>

```typescript
export const clientProposalTask = task({
  id: "client-proposal",
  retry: {
    maxAttempts: 3,        // Maximum 3 tentatives (1 + 2 retry)
    factor: 2,             // Délai double entre chaque retry
    minTimeoutInMs: 1000,  // Attendre minimum 1 seconde
    maxTimeoutInMs: 30000, // Maximum 30 secondes d'attente
    randomize: true,       // Ajoute ±25% d'aléatoire au délai
  },
  run: async (payload: ClientTaskPayload): Promise<ClientProposalTaskResult> => {
    // Phase 1 & 2: Stock Analysis + Quantity Calculation
    const stockAnalysis = await calculateReplenishmentNeeds(payload.client.id, {
      analysisWindowDays: config.analysisWindowDays,
      analysisEndDate: config.analysisEndDate,
      targetCoverage: config.targetCoverage,
      leadTime: config.leadTime,
    });

    if (stockAnalysis.products.length === 0) {
      return { /* no risk */ };
    }

    // Phase 2.5: Proposal Preparation (Pricing + MOQ)
    const proposalFinal = prepareProposal(
      stockAnalysis,
      undefined,
      "historyPriceForClient",
      config.moqMinimum
    );

    // Phase 3: Quote Generation (si pas en mode skip)
    if (!config.skipOdooQuoteGeneration) {
      const quote = await generateQuote(proposalFinal, odooClient);
      result.phases.quote = quote;
    }

    // Générer le rapport client si hasRisk ET shouldGenerateReport
    if (result.hasRisk && config.shouldGenerateReport) {
      reportMarkdown = generateClientReport(reportData);
      await fs.writeFile(reportPath, reportMarkdown);
    }

    return { client, config, result, summary, report, executionTime };
  },
});
```

**Points clés:**
- **3 phases séquentielles**: Stock → Proposal → Quote
- **Early exit**: Si aucun produit à risque, termine immédiatement
- **Config-driven**: skipOdooQuoteGeneration et shouldGenerateReport contrôlent les phases 3 & 4
- **Return type**: Result object avec `ok` et `output` properties (voir backend/src/trigger/client-proposal.task.ts:165-170)

</details>

---

### Fichier: `index.ts`

**Description:** Point d'export centralisé des tasks Trigger.dev

<details><summary>Voir l'implémentation</summary>

```typescript
export { clientProposalTask } from "./client-proposal.task";
export type { ClientProposalTaskResult } from "./client-proposal.task";

export { orchestratorTask } from "./orchestrator.task";
export type { OrchestratorTaskResult } from "./orchestrator.task";

// Future: export { autoProposalCron } from "./auto-proposal-cron.task";
```

</details>

## 🔧 Guides Pratiques

<details><summary>Comment ajouter une nouvelle task Trigger.dev ?</summary>

1. **Créer le fichier de task**: `backend/src/trigger/my-task.task.ts`
   ```typescript
   import { task } from "@trigger.dev/sdk/v3";

   export const myTask = task({
     id: "my-task-id",
     retry: { maxAttempts: 3, factor: 2 },
     run: async (payload: MyPayload) => {
       // Logic here
       return { success: true };
     },
   });
   ```

2. **Exporter dans `index.ts`**:
   ```typescript
   export { myTask } from "./my-task.task";
   export type { MyTaskResult } from "./my-task.task";
   ```

3. **Utiliser la task**:
   ```typescript
   // Trigger simple
   const handle = await myTask.trigger({ data: "value" });

   // Trigger and wait (retourne Result object)
   const result = await myTask.triggerAndWait({ data: "value" });
   if (result.ok) {
     console.log(result.output); // Accès à l'output de la task
   } else {
     console.error(result.error); // Gérer l'erreur
   }
   ```

</details>

<details><summary>Comment modifier la taille des batchs (BATCH_SIZE) ?</summary>

**Fichier**: `backend/src/trigger/orchestrator.task.ts:118`

```typescript
const BATCH_SIZE = 500; // ← Modifier ici
```

**Points de vigilance:**
- Trigger.dev limite à **500 tasks max** par batchTriggerAndWait
- Si vous augmentez au-delà de 500, le code lèvera une erreur
- Si vous réduisez (ex: 100), plus de chunks seront créés, ralentissant l'exécution globale
- Temps moyen par chunk de 500: ~2-5 minutes

**Recommandation**: Garder 500 sauf contraintes spécifiques (quotas API Odoo, mémoire, etc.)

</details>

<details><summary>Comment configurer les retries ?</summary>

**Niveau orchestrator** (`orchestrator.task.ts:52-58`):
```typescript
retry: {
  maxAttempts: 3,         // ← Nombre total de tentatives
  factor: 2,              // ← Backoff exponentiel (x2 chaque fois)
  minTimeoutInMs: 1000,   // ← Délai minimum entre retries
  maxTimeoutInMs: 30000,  // ← Délai maximum (cap)
  randomize: true,        // ← ±25% aléatoire pour éviter thundering herd
}
```

**Niveau client-proposal** (`client-proposal.task.ts:57-63`):
```typescript
retry: {
  maxAttempts: 3,
  factor: 2,
  minTimeoutInMs: 1000,
  maxTimeoutInMs: 30000,
  randomize: true,
}
```

**Exemple de délais avec factor=2:**
- Tentative 1: Immédiat
- Tentative 2: 1000ms + random(±25%) = 750-1250ms
- Tentative 3: 2000ms + random(±25%) = 1500-2500ms

**Pour désactiver les retries:**
```typescript
retry: { maxAttempts: 1 }
```

</details>

<details><summary>Comment gérer les erreurs batch ?</summary>

**Stratégie actuelle** (`orchestrator.task.ts:212-233`):

```typescript
try {
  const batchResults = await clientProposalTask.batchTriggerAndWait(batchPayloads);

  for (const run of batchResults.runs) {
    if (run.ok) {
      clientResults.push(run.output.result);
    } else {
      // Erreur individuelle: créer un résultat d'erreur mais continuer
      clientResults.push({
        clientId: client.id,
        success: false,
        error: run.error.message,
      });
    }
  }
} catch (batchError) {
  // Si le batch entier échoue (timeout réseau, etc.)
  // Marquer TOUS les clients du batch comme échoués
  for (const client of chunkClients) {
    clientResults.push({ clientId: client.id, success: false, error: "Batch failure" });
  }
  // Continuer avec le prochain batch (pas de throw)
  continue;
}
```

**3 types d'erreurs:**
1. **Erreur individuelle task** (`run.ok === false`): Marquer ce client comme failed, continuer
2. **Erreur batch entier** (catch block): Marquer tous les clients du batch comme failed, continuer avec batch suivant
3. **Erreur orchestrator globale** (catch ligne 321): Tout échoue, throw l'erreur

</details>

<details><summary>Points de vigilance / Dépendances</summary>

### Dépendances Trigger.dev

- **Package**: `@trigger.dev/sdk@^3.0.0` (JAMAIS v2 - pas de `client.defineJob`)
- **Commandes**:
  - Dev mode: `pnpm trigger:dev` (démarre le worker local)
  - Deploy: `pnpm trigger:deploy` (deploy sur Trigger.dev cloud)

### Limites importantes

1. **Batch size limit**: 500 tasks max par `batchTriggerAndWait`
2. **Result object**: `triggerAndWait` retourne `Result<T>` avec `ok`, `output`, `error` - PAS l'output direct
3. **Never wrap in Promise.all**: Ne JAMAIS utiliser `Promise.all` avec `triggerAndWait` (non supporté par Trigger.dev)
4. **Config merging**: Payload override config (orchestrator.task.ts:63-88)

### Variables d'environnement requises

```bash
# .env
TRIGGER_SECRET_KEY=trigger_dev_xxxxx  # Depuis dashboard Trigger.dev
ODOO_URL=https://your-odoo.com
ODOO_DB=your-database
ODOO_USERNAME=your-username
ODOO_PASSWORD=your-password
```

### Relation avec autres modules

- **Dépend de**:
  - `/features/client-inactivity/` (getInactiveClients)
  - `/features/stock-replenishment/` (calculateReplenishmentNeeds)
  - `/features/proposal-preparation/` (prepareProposal)
  - `/features/proposal-generation/` (generateQuote)
  - `/reports/` (generateGlobalReport, generateClientReport)
  - `/config/` (autoProposalConfig)

- **Utilisé par**:
  - `/routes/orchestrator-task.ts` (endpoint HTTP pour trigger manuel)
  - Future: CRON task (auto-proposal-cron.task.ts)

</details>

## 🔗 Références

- [Trigger.dev v3 Documentation](https://trigger.dev/docs)
- [Batch Processing Guide](https://trigger.dev/docs/guides/batch-processing)
- Configuration: [`/backend/src/config/auto-proposal.ts`](../config/auto-proposal.ts)
- Types: [`/backend/src/shared/types/orchestrator.types.ts`](../shared/types/orchestrator.types.ts)
- Claude Code Trigger.dev Reference: `/backend/CLAUDE.md` (sections TRIGGER.DEV basic & advanced-tasks)
