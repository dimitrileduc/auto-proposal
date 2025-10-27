# Plan de refactoring : Migration `inactivityDaysThreshold` → `dateMin/dateMax`

## Résumé
Remplacer la logique basée sur un nombre de jours par des dates absolues pour la détection des clients inactifs. L'analyse d'historique utilisera une date de référence explicite (`analysisEndDate`).

## Architecture
- **`dateMin` / `dateMax`** : Période pour détecter l'inactivité
- **`analysisEndDate`** : Date de référence pour l'historique (= `dateMax`)
- **`analysisWindowDays`** : Jours d'historique avant `analysisEndDate` (configurable)

## Defaults (compatibilité)
```ts
dateMin = aujourd'hui - 30j
dateMax = aujourd'hui
analysisEndDate = dateMax
analysisWindowDays = 180
```

---

## 🤖 Agent 1 : Validation & Baseline
**Objectif** : Sauvegarder l'état actuel pour comparaison post-refactoring

**Tâches** :
1. Appeler `getInactiveClients(30)` via le service actuel
2. Sauvegarder liste des IDs clients inactifs
3. Pour 3-5 clients, récupérer leur historique complet
4. Créer `test-data/before-refactoring.json` avec :
   - Liste des client IDs inactifs
   - Pour chaque client test : produits à risque + quantités
5. Afficher résumé : X clients inactifs, Y produits à risque total

---

## 🤖 Agent 2 : Types & Interfaces
**Objectif** : Mettre à jour tous les types TypeScript

**Fichiers** :
- `backend/src/shared/types/orchestrator.types.ts`
- `backend/src/shared/types/client.types.ts`
- `backend/src/infrastructure/odoo/clients/odoo-client.types.ts`

**Changements** :
1. **OrchestratorConfig** :
   - ❌ Supprimer `inactivityDays: number`
   - ✅ Ajouter `dateMin: string` et `dateMax: string`

2. **ClientProcessingConfig** :
   - ✅ Ajouter `analysisEndDate: string`

3. **OdooClient interface** :
   - Modifier `getInactiveCompanyPartners(dateMin, dateMax, excludeTagId?)`
   - Modifier `getOrderHistoryByPartner(partnerId, windowDays, referenceDate, ...)`

---

## 🤖 Agent 3 : Utilitaires & Domaines
**Objectif** : Créer/modifier les helpers de dates et domaines Odoo

**Fichiers** :
- `backend/src/utils/date.utils.ts`
- `backend/src/infrastructure/odoo/clients/odoo-domains.ts`

**Changements** :
1. **date.utils.ts** :
   - ✅ Ajouter `getTodayAsDateString()`
   - ✅ Ajouter `calculateDateBefore(referenceDate, daysBefore)`

2. **odoo-domains.ts** :
   - Modifier `buildRecentOrdersDomain(dateMin, dateMax, excludeTagId?)` pour accepter 2 dates
   - Ajouter condition `["date_order", "<=", dateMax]`

---

## 🤖 Agent 4 : Clients Odoo (Infrastructure)
**Objectif** : Adapter les clients Odoo XML-RPC et JSON-2

**Fichiers** :
- `backend/src/infrastructure/odoo/clients/xmlrpc-client.ts`
- `backend/src/infrastructure/odoo/clients/json2-client.ts`

**Changements** :
1. **Méthode `getInactiveCompanyPartners`** :
   - Signature : `(dateMin, dateMax, excludeTagId?)`
   - Supprimer calcul `getDateDaysAgo(days)`
   - Appeler `buildRecentOrdersDomain(dateMin, dateMax, excludeTagId)`

2. **Méthode `getOrderHistoryByPartner`** :
   - Signature : `(partnerId, windowDays, referenceDate, includeDraft, excludedCategories)`
   - Calculer `dateStart = referenceDate - windowDays`
   - Utiliser `dateStart` dans `buildPartnerOrdersDomain`

---

## 🤖 Agent 5 : Services Métier
**Objectif** : Adapter les services d'inactivité et d'historique

**Fichiers** :
- `backend/src/features/client-inactivity/inactivity.service.ts`
- `backend/src/features/stock-replenishment/order-history/order-history.service.ts`
- `backend/src/features/stock-replenishment/stock-replenishment.service.ts`

**Changements** :
1. **inactivity.service.ts** :
   - Signature `getInactiveClients(dateMin, dateMax, excludeTagId?)`
   - Passer dates au client Odoo

2. **order-history.service.ts** :
   - Signature `getProductOrderHistory(partnerId, windowDays, referenceDate)`
   - Passer `referenceDate` au client Odoo

3. **stock-replenishment.service.ts** :
   - Ajouter param `analysisEndDate?` dans config
   - Default `analysisEndDate = getTodayAsDateString()`
   - Passer au service order-history

---

## 🤖 Agent 6 : Tasks Trigger.dev
**Objectif** : Adapter l'orchestrator et la task client

**Fichiers** :
- `backend/src/trigger/orchestrator.task.ts`
- `backend/src/trigger/client-proposal.task.ts`

**Changements** :
1. **orchestrator.task.ts** :
   - Config avec defaults : `dateMin = getDateDaysAgo(30)`, `dateMax = getTodayAsDateString()`
   - Appeler `getInactiveClients(config.dateMin, config.dateMax, ...)`
   - Passer `analysisEndDate: config.dateMax` aux child tasks
   - Logger : "Inactivity period: {dateMin} to {dateMax}"

2. **client-proposal.task.ts** :
   - Recevoir `analysisEndDate` dans config
   - Passer à `calculateReplenishmentNeeds({ analysisWindowDays, analysisEndDate, ... })`

---

## 🤖 Agent 7 : Routes & Config
**Objectif** : Mettre à jour la route HTTP et la config globale

**Fichiers** :
- `backend/src/routes/orchestrator-task.ts`
- `backend/src/config/auto-proposal.ts`

**Changements** :
1. **orchestrator-task.ts** :
   - Mettre à jour JSDoc avec `dateMin` et `dateMax`
   - Documenter defaults et exemples

2. **auto-proposal.ts** :
   - ❌ Supprimer `inactivityDaysThreshold: 30`
   - ✅ Ajouter commentaire explicatif sur dateMin/dateMax

---

## 🤖 Agent 8 : Validation Post-Refactoring
**Objectif** : Comparer résultats avant/après

**Tâches** :
1. Appeler route orchestrator sans payload (utilise defaults)
2. Comparer avec `test-data/before-refactoring.json` :
   - Même nombre de clients inactifs ?
   - Mêmes produits à risque pour les 3-5 clients tests ?
   - Mêmes quantités recommandées ?
3. Créer `test-data/after-refactoring.json`
4. Générer rapport de comparaison (diff)
5. ✅ Succès si 100% identique, sinon investiguer écarts

---

## Ordre d'exécution
```
Agent 1 (Validation pré)
  ↓
Agent 2 (Types) → Agent 3 (Utils)
  ↓                    ↓
Agent 4 (Clients Odoo)
  ↓
Agent 5 (Services)
  ↓
Agent 6 (Tasks)
  ↓
Agent 7 (Routes & Config)
  ↓
Agent 8 (Validation post)
```

Chaque agent peut travailler de manière isolée sur ses fichiers.

---

## Impact sur le flow

### AVANT (logique actuelle)

#### Détection clients inactifs :
```
orchestrator → getInactiveClients(30)
  → odooClient.getInactiveCompanyPartners(30)
    → dateLimit = getDateDaysAgo(30) = "2025-09-26"
      → Domain: [["date_order", ">=", "2025-09-26"]]
        → Clients sans commande depuis cette date
```

#### Analyse historique :
```
calculateReplenishmentNeeds(clientId, { analysisWindowDays: 180 })
  → getProductOrderHistory(clientId, 180)
    → odooClient.getOrderHistoryByPartner(clientId, 180, ...)
      → dateLimit = getDateDaysAgo(180) = "2025-04-28"
        → Commandes depuis le 28 avril 2025
```

### APRÈS (nouvelle logique)

#### Détection clients inactifs :
```
orchestrator → getInactiveClients("2025-09-26", "2025-10-26")
  → odooClient.getInactiveCompanyPartners("2025-09-26", "2025-10-26")
    → Domain: [
        ["date_order", ">=", "2025-09-26"],
        ["date_order", "<=", "2025-10-26"]
      ]
      → Clients sans commande ENTRE ces dates
```

#### Analyse historique :
```
calculateReplenishmentNeeds(clientId, {
  analysisWindowDays: 180,
  analysisEndDate: "2025-10-26"
})
  → getProductOrderHistory(clientId, 180, "2025-10-26")
    → odooClient.getOrderHistoryByPartner(clientId, 180, "2025-10-26", ...)
      → dateStart = "2025-10-26" - 180 jours = "2025-04-28"
        → Commandes depuis le 28 avril 2025
```

### Bénéfices
- ✅ Analyse rétroactive possible (ex: mars 2025)
- ✅ Période d'inactivité configurable (pas toujours "depuis aujourd'hui")
- ✅ Historique calculé depuis `dateMax` au lieu d'aujourd'hui
- ✅ Compatibilité : defaults donnent les mêmes résultats qu'avant
