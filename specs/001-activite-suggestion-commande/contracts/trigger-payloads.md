# Contrat : tâches Trigger.dev, routes HTTP et compte rendu

Projet Trigger.dev `proj_yebxbxzoixxmavgyyjlk`. Identifiants de tâche inchangés :
`orchestrator-daily-7am`, `auto-proposal-orchestrator`, `client-proposal`, `backtest-client`,
`backtest-aggregate`.

## Renommage (rupture volontaire)

`skipOdooQuoteGeneration` → `skipOdooWrite` partout (payloads, résultats, rapports, routes, docs).
Un payload qui envoie encore `skipOdooQuoteGeneration` est ignoré : la valeur par défaut `true`
(mode test) s'applique. Aucune compatibilité ascendante : le seul appelant en prod est la tâche
planifiée, livrée en même temps.

## `orchestrator-daily-7am` (schedules.task, cron `0 7 * * 5` Europe/Paris)

Payload envoyé à l'orchestrateur : `{ config: { skipOdooWrite, generateReports: true,
forceReanalysis: false, companyId: 3 } }`, où `skipOdooWrite` vaut `false` **uniquement si l'environnement
Trigger.dev du run est `PRODUCTION`** (`ctx.environment.type`) ; en dev, staging ou preview, le lancement
planifié reste en mode test (ajout du 01/10/2026, review). Journal de fin : clients traités, activités créées,
opportunités créées, clients écartés, erreurs.

## `auto-proposal-orchestrator`

**Payload** `{ config?: Partial<OrchestratorConfig> }` :

| Champ | Défaut | Note |
|---|---|---|
| `dateMin`, `dateMax` | −30 j, aujourd'hui | détection inchangée |
| `replenishmentThreshold`, `moqMinimum` | 30, 300 | inchangés |
| `skipOdooWrite` | `true` | **renommé** |
| `maxClientsToAnalyze` | `"all"` | |
| `forceReanalysis` | `false` | étiquette 82, inchangé |
| `generateReports` | `true` | |
| `excludedPartnerTagId` | 196 | |
| `companyId` | 3 | |

**Comportement ajouté** : avant la détection, V1 (vérification du type d'activité) ; en cas d'échec,
la tâche lève une erreur explicite et rien n'est lancé. Après la détection, pré-filtre d'éligibilité en
lot (P1 à P5, [odoo-api-calls.md](./odoo-api-calls.md)) : seuls les clients éligibles déclenchent
`client-proposal` ; les écartés sont ajoutés directement aux `outcomes` avec leur raison.

**Résultat** :

```ts
{
  success: boolean;
  config: OrchestratorConfig;
  mode: "test" | "real";
  statistics: {
    totalInactiveClients; clientsProcessed; clientsWithOrderHistory; clientsWithRisk; clientsWithoutRisk;
    activitiesCreated: number;      // ex quotesGenerated
    leadsCreated: number;
    wouldCreate: number;            // mode test
    clientsSkipped: number;
    clientsFailed: number;
    reportsGenerated: number;
    totalValue: number;
  };
  outcomes: Array<{ clientId; clientName; outcome: SuggestionActivityOutcome }>;
  globalReport?: { markdown: string; path: string };
  executionTime: number;
}
```

## `client-proposal`

**Payload** `{ client: { id, name, email }, config: ClientProcessingConfig }` :

| Champ | Défaut | Note |
|---|---|---|
| `analysisEndDate` | aujourd'hui | inchangé |
| `replenishmentThreshold`, `moqMinimum` | config | inchangés |
| `skipOdooWrite` | `true` | **renommé** |
| `shouldGenerateReport` | `true` | |
| `companyId` | 3 | |
| `eligibilityCheck` | `true` | revérification complète avant l'écriture ; `false` en backtest |
| `runDate` | aujourd'hui Europe/Paris | échéance de l'activité, base du délai de 21 j |

**Résultat** : `ClientProposalTaskResult` avec `summary` étendu :

```ts
summary: {
  hasRisk: boolean; productsCount: number; finalAmount: number;
  outcome: SuggestionActivityOutcome;     // created | would_create | skipped | error
}
```

`quoteName`/`quoteId` supprimés. En cas d'exception non gérée, la tâche lève (relance Trigger.dev,
3 tentatives) ; l'orchestrateur convertit la dernière erreur en `outcome.kind = "error"`.

## `backtest-client`

Appelle `client-proposal` avec `skipOdooWrite: true, eligibilityCheck: false`. Résultat inchangé.

## Routes HTTP (Hono, port 3000)

| Route | Changement |
|---|---|
| `POST /orchestrator-task` | corps `{ config }` ; `skipOdooWrite` (défaut `true`) |
| `POST /client-task` | corps `{ clientId, clientName?, clientEmail?, config }` ; `skipOdooWrite` (défaut `true`), `eligibilityCheck?`, `companyId?` transmis |
| `GET /test/clients/inactive` | inchangé (étiquette 82 via `inactivityDetection.autoProposalOrderTagId`) |

## Compte rendu global (`reports-output/global-report-YYYY-MM-DD.md`)

Structure après le titre et les statistiques existantes :

```
**Mode :** TEST (aucune écriture Odoo) | RÉEL

## Activités créées (N)            | Client | Vendeur | Opportunité | Nouvelle ? | Activité |
## Opportunités créées (N)         | Client | Opportunité (id) |
## Clients écartés (N)             | Client | Raison |        (hors « aucun produit suggéré »)
## Erreurs (N)                     | Client | Message | Opportunité créée sans activité |
## Aucun produit suggéré (N)       liste simple des noms, sans tableau, en dernier
```

En mode test, la première section s'intitule « Activités qui auraient été créées (N) » et la colonne
« Nouvelle ? » indique si une opportunité aurait été créée.

Libellés de raison (liste fermée, FR-016) :

| `reason` | Libellé |
|---|---|
| `no_salesperson` | pas de vendeur |
| `inactive_salesperson` | vendeur inactif |
| `salesperson_no_company_access` | vendeur sans accès à FOODPRINT |
| `no_products` | aucun produit suggéré |
| `open_activity` | activité déjà ouverte |
| `recent_follow_up` | relancé il y a moins de 3 semaines (JJ/MM/AAAA) |
| erreur | erreur (message) |

Invariant (FR-017) : chaque client analysé apparaît dans exactement une section.

## Rapport client (`client-<id>-<nom>.md/.json`)

Section « PHASE 3 - ODOO QUOTE » remplacée par « PHASE 3 - ACTIVITÉ » : outcome, opportunité, vendeur,
échéance, et le HTML de la description rendu en markdown. `config.skipOdooWrite` dans les détails
techniques. Les clients écartés avant l'IA n'ont pas de rapport client (pas d'analyse) ; ils figurent
dans le rapport global.
