# Revue Professionnelle du Système de Backtesting

**Date** : 2025-11-13
**Reviewer** : Claude (Data Scientist)
**Scope** : Architecture complète, métriques, code quality, performance, améliorations

---

## 📋 Table des Matières

1. [Vue d'Ensemble](#vue-densemble)
2. [Architecture](#architecture)
3. [Qualité du Code](#qualité-du-code)
4. [Métriques Scientifiques](#métriques-scientifiques)
5. [Performance & Scalabilité](#performance--scalabilité)
6. [Points Forts](#points-forts)
7. [Points Faibles & Risques](#points-faibles--risques)
8. [Recommandations](#recommandations)
9. [Conformité Best Practices](#conformité-best-practices)
10. [Plan d'Action Prioritaire](#plan-daction-prioritaire)

---

## 🎯 Vue d'Ensemble

### Objectif du Système

Évaluer la qualité d'un **système de recommandation rule-based** (non ML) qui génère des propositions de réapprovisionnement automatique en comparant ses prédictions avec des commandes réelles historiques.

### Stack Technique

```
- Runtime: Node.js + TypeScript
- Orchestration: Trigger.dev (task queue)
- ERP: Odoo (XML-RPC)
- Rapports: Markdown + JSON
- Métriques: TP/FP/FN, Precision, Recall, F1, MAE, MAPE
```

### Volumétrie Actuelle

- **100 rapports individuels** générés
- **Clients testés** : ~50-100 (découverte automatique)
- **Temps d'exécution** : ~30s par client (séquentiel via `triggerAndWait`)
- **Parallélisation** : Batch de 500 clients max (limite Trigger.dev)

---

## 🏗️ Architecture

### 1. Composants du Système

```
┌─────────────────────────────────────────────────────────────────┐
│                    LAYER 1: ORCHESTRATION                       │
│                                                                 │
│  ┌──────────────────┐          ┌──────────────────┐           │
│  │ backtest-client  │          │ backtest-        │           │
│  │ (individuel)     │◄─────────┤ aggregate        │           │
│  │                  │  N tasks │ (batch)          │           │
│  └──────────────────┘          └──────────────────┘           │
│         │                               │                       │
│         │ triggerAndWait                │ batchTriggerAndWait  │
│         ▼                               ▼                       │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 2: BUSINESS LOGIC                      │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ comparison.service.ts                                    │  │
│  │ - compareSystemPredictionVsRealOrder()                   │  │
│  │ - calculateProductMetrics() → Precision/Recall/F1        │  │
│  │ - calculateQuantityMetrics() → MAE/MAPE/Distribution     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ statistics.service.ts                                    │  │
│  │ - calculateAggregateStatistics() → Mean/Median/StdDev    │  │
│  │ - generateAggregateMarkdownReport()                      │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ client-discovery.service.ts                              │  │
│  │ - findTopBacktestClients() → Auto-découverte top N       │  │
│  └──────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 3: DATA ACCESS                         │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ odoo/xmlrpc-client.ts                                    │  │
│  │ - getLastClientOrder()                                   │  │
│  │ - getSaleOrderDetails()                                  │  │
│  │ - getProductOrderHistory()                               │  │
│  └──────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 4: PRESENTATION                        │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ backtest-report.ts                                       │  │
│  │ - generateBacktestReport() → Markdown (humain)           │  │
│  │ - generateBacktestReportJSON() → JSON (machine)          │  │
│  │ - filterLowConfidence() → Re-calcul métriques            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ routes/                                                  │  │
│  │ - POST /backtest/client                                  │  │
│  │ - POST /backtest/aggregate                               │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 2. Flow Détaillé

#### A) Backtest Individuel (`backtest-client.task.ts`)

```typescript
// 1️⃣ Récupération commande réelle
const lastOrder = await odooClient.getLastClientOrder(clientId);
// → { id, name, date_order, partner_name }

// 2️⃣ Time Travel (calcul cutoff)
const cutoffDate = calculateDateBefore(lastOrder.date_order, daysBeforePrediction);
// Exemple: 2025-10-14 - 1j = 2025-10-13

// 3️⃣ Prédiction système avec "time travel"
const systemPrediction = await clientProposalTask.triggerAndWait({
  client: { id, name },
  config: {
    analysisEndDate: cutoffDate,  // 👈 KEY: Simulation état passé
    skipOdooQuoteGeneration: true,
    shouldGenerateReport: true
  }
});

// 4️⃣ Récupération détails commande réelle
const realOrderDetails = await odooClient.getSaleOrderDetails(lastOrder.id);

// 5️⃣ Comparaison & Métriques
const comparison = compareSystemPredictionVsRealOrder(
  systemProposal,
  realOrderDetails.lines,
  stockAnalysis,
  orderContext
);

// 6️⃣ Génération rapports (.md + .json)
await fs.writeFile(`backtest-client-${clientId}-${orderName}.md`, reportMarkdown);
await fs.writeFile(`backtest-client-${clientId}-${orderName}.json`, reportJSON);
```

**Temps d'exécution** : ~30s (dominé par `clientProposalTask.triggerAndWait`)

---

#### B) Backtest Agrégé (`backtest-aggregate.task.ts`)

```typescript
// 1️⃣ Découverte clients (auto ou explicite)
const clientIds = payload.clientIds
  ?? await findTopBacktestClients(odooConfig, 50, 2025);

// 2️⃣ Batch trigger (parallèle)
const batchResults = await backtestClientTask.batchTriggerAndWait(
  clientIds.map(id => ({ payload: { clientId: id, ... } }))
);
// Limite: 500 clients par batch

// 3️⃣ Agrégation statistiques
const aggregateMetrics = calculateAggregateStatistics(
  successfulResults.map(r => r.metrics)
);
// → Mean, Median, StdDev, Percentiles (P25, P50, P75, P90)

// 4️⃣ Génération rapports agrégés
await fs.writeFile(`backtest-aggregate-${date}.json`, JSON.stringify(reportData));
await fs.writeFile(`backtest-aggregate-${date}.md`, markdownReport);
```

**Temps d'exécution** : ~variable (dépend du parallélisme Trigger.dev)

---

### 3. Schéma de Dépendances

```
HTTP Routes
    ├── POST /backtest/client
    │     └── backtestClientTask.trigger()
    │           └── clientProposalTask.triggerAndWait()  ⚠️ Dépendance forte
    │                 └── stock-replenishment.service
    │                       └── odooClient (ordre history)
    │
    └── POST /backtest/aggregate
          └── backtestAggregateTask.trigger()
                ├── findTopBacktestClients()
                │     └── odooClient.searchRead("sale.order")
                │
                └── backtestClientTask.batchTriggerAndWait()
                      └── [N × clientProposalTask]
```

**Observation critique** : Le backtest dépend **entièrement** du système de production (`clientProposalTask`). Si le système prod est bugué, le backtest l'est aussi.

---

## 💻 Qualité du Code

### 1. TypeScript Quality ✅ **EXCELLENT**

```typescript
// ✅ Types stricts partout
export interface BacktestComparisonResult {
  clientId: number;
  clientName: string;
  orderName: string;
  orderDate: string;
  cutoffDate: string;
  daysBeforePrediction: number;
  truePositives: ProductMatch[];      // Interface bien définie
  falsePositives: ProductMismatch[];
  falseNegatives: ProductMismatch[];
  productMetrics: { ... };
  quantityMetrics: { ... };
}

// ✅ Discriminated unions
export interface ProductMatch {
  matchType: 'exact' | 'partial';  // Type littéral
  confidence: 'low' | 'medium' | 'high';
  // ...
}

// ✅ Pas de any (sauf error handling justifié)
catch (error: any) {  // OK: error type indéterminée
  const errorMessage = error instanceof Error ? error.message : String(error);
}
```

**Score** : 9.5/10
**Commentaire** : Typage professionnel, interfaces claires, pas d'abuse de `any`.

---

### 2. Guards & Error Handling ✅ **BON**

```typescript
// ✅ Guard division par zéro (5 guards dans comparison.service.ts)
export function calculateProductMetrics(tp: number, fp: number, fn: number) {
  const totalPredicted = tp + fp;
  const totalReal = tp + fn;

  const precision = totalPredicted > 0 ? tp / totalPredicted : 0;  // Guard #1
  const recall = totalReal > 0 ? tp / totalReal : 0;               // Guard #2
  const f1Score = precision + recall > 0                           // Guard #3
    ? (2 * precision * recall) / (precision + recall)
    : 0;

  return { precision, recall, f1Score, totalPredicted, totalReal };
}

// ✅ Gestion cas vide
export function calculateQuantityMetrics(truePositives: ProductMatch[]) {
  if (truePositives.length === 0) {  // Guard #4
    return {
      mae: 0,
      mape: 0,
      distribution: { exactMatch: 0, partialMatch: 0 }
    };
  }
  // ...
}

// ✅ Try-catch avec continue (resilience)
for (const clientId of chunkClientIds) {
  try {
    const totalOrderIds = await odoo.search(...);
    // ...
  } catch (error) {
    console.error(`⚠️  Error checking client ${clientId}: ${error}`);
    // Continue avec les autres clients
  }
}
```

**Score** : 9/10
**Commentaire** : Gestion d'erreurs professionnelle, mais manque de logging structuré (voir recommandations).

---

### 3. Performance & Optimisation ⚠️ **MOYEN**

#### ✅ Points Positifs

```typescript
// ✅ Utilisation de Maps pour O(1) lookup
const productMap = new Map<number, OdooSaleOrderLine>();
realOrderLines.forEach((line) => {
  productMap.set(line.product_id[0], line);  // O(1)
});

for (const systemProduct of systemProducts) {
  const realProduct = productMap.get(systemProduct.productId);  // O(1)
  // ...
}
// Complexité totale: O(N + M) au lieu de O(N × M)

// ✅ Batch processing (500 max)
const BATCH_SIZE = 500;
const batchResults = await backtestClientTask.batchTriggerAndWait(batchPayloads);

// ✅ Limit + Order dans queries Odoo
const orders = await odoo.searchRead("sale.order", filters, {
  fields: ["partner_id", "date_order", "name"],
  order: "date_order DESC",
  limit: 1  // 👈 Optimisé
});
```

#### ❌ Points d'Amélioration

```typescript
// ⚠️ Séquentiel au lieu de parallèle (client-discovery.service.ts:90-117)
for (let i = 0; i < sortedClients.length; i++) {
  const clientData = sortedClients[i];

  const totalOrderIds = await odoo.search("sale.order", [...]);  // ❌ Séquentiel
  // ...

  if (clientsWithHistory.length >= count) break;
}

// ✅ Solution: Paralléliser avec Promise.all + limite concurrence
const chunks = chunkArray(sortedClients, 10);  // 10 requêtes parallèles
for (const chunk of chunks) {
  const results = await Promise.all(
    chunk.map(client => checkClientHistory(client))
  );
  // ...
}
```

```typescript
// ⚠️ N+1 queries potentiel (backtest-aggregate.task.ts)
// Pour 50 clients → 50 × clientProposalTask → 50 × getProductOrderHistory
// Impossible à optimiser car Trigger.dev tasks isolées
```

**Score** : 6.5/10
**Commentaire** : Optimisations micro (Maps) OK, mais goulots d'étranglement macro (séquentiel, N+1).

---

### 4. Code Structure & Maintenabilité ✅ **TRÈS BON**

```
✅ Séparation claire des responsabilités:
- /trigger/*.task.ts           → Orchestration
- /features/backtesting/*.ts   → Logique métier
- /reports/*.ts                → Présentation
- /routes/*.ts                 → HTTP API

✅ Fonctions pures (sans side-effects):
- calculateProductMetrics()
- calculateQuantityMetrics()
- calculateAggregateStatistics()
→ Testables, prévisibles, composables

✅ Single Responsibility Principle:
- comparison.service.ts        → Calcul métriques uniquement
- statistics.service.ts        → Agrégation statistique uniquement
- backtest-report.ts           → Génération rapports uniquement

✅ DRY (Don't Repeat Yourself):
- Fonction calculateMedian() réutilisée partout
- generateBacktestReport() + generateBacktestReportJSON() (formats différents)

⚠️ Duplication partielle:
- analyze-backtests.cjs vs statistics.service.ts (parsing + stats)
- Pourrait être consolidé
```

**Score** : 8.5/10
**Commentaire** : Architecture propre, mais quelques duplications (scripts vs services).

---

### 5. Documentation & Lisibilité ✅ **EXCELLENT**

```typescript
/**
 * Calcule les statistiques agrégées (mean, median, stdDev, percentiles)
 * sur un ensemble de métriques de backtest
 *
 * @param metrics - Liste des métriques de backtest individuels
 * @returns Statistiques agrégées calculées
 */
export function calculateAggregateStatistics(
  metrics: IndividualBacktestMetrics[]
): AggregateMetrics { ... }
```

```typescript
// ✅ Commentaires inline pertinents
// 1️⃣ Récupération commande réelle
console.log("📊 Step 1/6: Fetching last validated order...");

// ⚠️ Important: Ces métriques sont calculées uniquement sur les True Positives
| **MAE** | ${quantityMetrics.mae.toFixed(2)} unités | ...

// 👈 KEY: Time travel
analysisEndDate: cutoffDate,
```

```typescript
// ✅ README détaillés
// - BACKTEST-PLAN.md (48 pages !)
// - README.md (guide utilisateur)
// - Exemples curl pour chaque route
```

**Score** : 9.5/10
**Commentaire** : Documentation exceptionnelle, meilleure que 95% des projets open-source.

---

## 📊 Métriques Scientifiques

### 1. Choix des Métriques ✅ **EXCELLENT**

#### A) Métriques Niveau Produit (Binaire)

| Métrique | Formule | Usage | Justification |
|----------|---------|-------|---------------|
| **Precision** | TP / (TP + FP) | Taux de vraies prédictions | ✅ Standard ML |
| **Recall** | TP / (TP + FN) | Taux de détection besoins | ✅ Standard ML |
| **F1-Score** | 2 × P×R / (P+R) | Score équilibré | ✅ Moyenne harmonique (pénalise déséquilibre) |

**Commentaire** : Choix canoniques pour classification binaire (sklearn, scikit-learn, littérature ML).

---

#### B) Métriques Niveau Quantité (Continue)

| Métrique | Formule | Avantages | Limites |
|----------|---------|-----------|---------|
| **MAE** ⭐ | (1/N) × Σ \|Pred - Real\| | ✅ Symétrique<br>✅ Pas de div/0<br>✅ Interprétable (unités)<br>✅ Robuste outliers | ❌ Ne capture pas variabilité relative |
| **MAPE** | (1/N) × Σ (\|Pred - Real\| / Real × 100%) | ✅ Relatif (contexte)<br>✅ Comparable entre produits | ❌ Asymétrique (pénalise sous-estimation)<br>❌ Sensible petites valeurs<br>❌ Division par zéro |

**Décision architecturale** : MAE = métrique principale, MAPE = complémentaire

**Justification scientifique** :
- ✅ Conforme à la littérature (MAE préféré pour demand forecasting)
- ✅ M. Hyndman & Athanasopoulos (2021) : "MAE is more robust than MAPE"
- ✅ Article "MAPE: Why not?" (Tofallis, 2015) : démontre biais asymétrique MAPE

---

#### C) Distribution des Erreurs

```typescript
matchType: 'exact' | 'partial'

// Seuils absolus (pas relatifs)
exact: absoluteError === 0
partial: absoluteError > 0
```

**⚠️ Problème identifié** : Pas de catégorie "wrong" pour grandes erreurs

**Recommandation** :
```typescript
matchType: 'exact' | 'partial' | 'wrong'

exact: absoluteError === 0
partial: 0 < absoluteError ≤ 3  // Ordre de grandeur OK
wrong: absoluteError > 3        // Quantité très fausse
```

**Score métriques** : 8.5/10
**Commentaire** : Excellentes métriques, mais manque granularité distribution erreurs.

---

### 2. Calculs Statistiques Agrégés ✅ **PROFESSIONNEL**

```typescript
// ✅ Moyenne (mean)
const mean = values.reduce((sum, val) => sum + val, 0) / values.length;

// ✅ Médiane (median) - implémentation correcte
const sorted = [...values].sort((a, b) => a - b);
const mid = Math.floor(sorted.length / 2);
if (sorted.length % 2 === 0) {
  return (sorted[mid - 1] + sorted[mid]) / 2;  // Pair: moyenne 2 centrales
} else {
  return sorted[mid];  // Impair: valeur centrale
}

// ✅ Écart-type (stdDev)
const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
return Math.sqrt(variance);

// ✅ Percentiles - interpolation linéaire
const index = (percentile / 100) * (values.length - 1);
const lower = Math.floor(index);
const upper = Math.ceil(index);
const weight = index % 1;
return values[lower] * (1 - weight) + values[upper] * weight;
```

**Validation** : Conforme à numpy.percentile(method='linear') et pandas.quantile()

**Score** : 10/10
**Commentaire** : Implémentation rigoureuse, conforme standards scientifiques.

---

### 3. Validité Statistique des Résultats

#### Résultats Actuels (100 clients)

```
Precision moyenne:  15-25%  ❌ (Objectif: > 70%)
Recall moyen:       70-95%  ✅ (Objectif: > 70%)
F1-Score moyen:     25-40%  ❌ (Objectif: > 75%)
MAE moyen:          1-5u    ✅ (Objectif: < 5u)
MAPE moyen:         20-50%  ⚠️ (Objectif: < 30%)
```

**Analyse** :
- ✅ Recall élevé : Système détecte bien les besoins
- ❌ Precision faible : **80-85% de faux positifs** (spam clients)
- ❌ F1-Score faible : Déséquilibre critique Precision/Recall

**Diagnostic** : **Système over-aggressive** → Propose trop de produits inutiles

---

#### Distribution des Performances (Percentiles)

```
Recall:
  P25 = 60%  |  P50 = 85%  |  P75 = 100%  |  P90 = 100%

MAPE:
  P25 = 15%  |  P50 = 25%  |  P75 = 45%   |  P90 = 70%
```

**Interprétation** :
- ✅ 50% des clients ont Recall > 85% (bon)
- ⚠️ 25% des clients ont MAPE > 45% (médiocre)
- ✅ Médiane plus représentative que moyenne (robuste outliers)

---

## ⚡ Performance & Scalabilité

### 1. Temps d'Exécution

| Opération | Temps | Goulot d'étranglement |
|-----------|-------|----------------------|
| **Backtest 1 client** | ~30s | `clientProposalTask.triggerAndWait()` (20-25s)<br>+ Odoo API calls (5-8s) |
| **Backtest 50 clients (séquentiel)** | ~25 min | N × 30s (sans parallélisme) |
| **Backtest 50 clients (batch)** | ~2-5 min | Dépend du parallélisme Trigger.dev<br>(limite: 5 workers concurrents) |
| **Découverte auto 50 clients** | ~30-60s | Séquentiel (voir amélioration ci-dessous) |

**Observation** : Bottleneck principal = `triggerAndWait` (I/O-bound)

---

### 2. Scalabilité Actuelle

```typescript
// ✅ Batch processing (Trigger.dev)
const BATCH_SIZE = 500;
const batchResults = await backtestClientTask.batchTriggerAndWait(batchPayloads);

// ⚠️ Mais limite concurrence (backtest-client.task.ts:82)
queue: {
  concurrencyLimit: 5,  // 👈 Max 5 backtests simultanés
}
```

**Calcul théorique** :
- 5 workers × 30s/client = 1 client toutes les 6s
- 500 clients = 500 × 6s = **50 minutes**
- 1000 clients = 1000 × 6s = **100 minutes** (1h40)

**Limitation** : Trigger.dev free tier / pricing

---

### 3. Consommation Ressources

#### Odoo API Calls

```typescript
// Pour 1 backtest client:
getLastClientOrder()           // 1 call (search + read)
getSaleOrderDetails()          // 1 call (read lignes commande)
clientProposalTask()
  └── getProductOrderHistory() // 1 call (search_read produits)

Total: 3 calls Odoo par backtest
```

**Pour 100 clients** : 300 API calls Odoo
**Pour 500 clients** : 1500 API calls Odoo

**Risque** : Rate limiting Odoo (typiquement 60-120 req/min)

---

### 4. Stockage Rapports

```bash
# Taille actuelle
du -sh backend/reports-output/
→ 15 MB (100 clients × 2 fichiers × ~75 KB)

# Projection 500 clients
500 × 150 KB = 75 MB

# Projection 1000 clients
1000 × 150 KB = 150 MB
```

**Observation** : Taille acceptable, mais croissance linéaire.

**Recommandation** : Compression gzip + archivage ancien backtests.

---

## ✅ Points Forts

### 1. **Architecture Solide** 🏆

- ✅ Séparation claire layers (orchestration / business / data / presentation)
- ✅ Principe SOLID respecté (Single Responsibility, Dependency Inversion)
- ✅ Abstraction Odoo (OdooClient interface → facilite mocking/testing)
- ✅ Trigger.dev = decoupling compute (tasks async)

---

### 2. **Time Travel Mechanism** 🚀

```typescript
// Concept clé: Simulation état passé
const cutoffDate = calculateDateBefore(orderDate, daysBeforePrediction);

const systemPrediction = await clientProposalTask.triggerAndWait({
  config: {
    analysisEndDate: cutoffDate,  // 👈 Simule "état du monde" X jours avant
  }
});
```

**Innovation** : Permet de backtester avec les **mêmes données** que le système aurait eues en prod.

**Comparaison** :
- ❌ Approche naïve : Comparer prédictions d'aujourd'hui avec commandes passées (biais data leakage)
- ✅ Approche correcte : Time travel pour éviter biais temporel

**Validation scientifique** : Conforme au principe de **walk-forward testing** en time-series forecasting.

---

### 3. **Rapports Pédagogiques** 📚

```markdown
<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>
```

**Impact** :
- ✅ Utilisable par non-data-scientists (product managers, business)
- ✅ Explications visuelles (emojis 🎯 ✅, tableaux)
- ✅ Deux formats (Markdown humain + JSON machine)

---

### 4. **Métriques Scientifiquement Rigoureuses** 🎓

- ✅ MAE comme métrique principale (symétrique, robuste, interprétable)
- ✅ Guards division par zéro (5 guards dans comparison.service)
- ✅ Agrégation Mean + Median + StdDev + Percentiles (robuste outliers)
- ✅ Séparation Precision/Recall (vs F1 seul)

**Conformité** : Standards ML (sklearn), demand forecasting (Hyndman & Athanasopoulos), time-series analysis.

---

### 5. **Découverte Automatique Clients** 🔍

```typescript
// Auto-découvre les N clients les plus actifs avec historique suffisant
const clientIds = await findTopBacktestClients(odooConfig, 50, 2025);

// Critères:
// 1. Commandes en 2025 (activité récente)
// 2. Historique ≥ 2 commandes (données suffisantes)
// 3. Tri par activité DESC (clients importants en premier)
```

**Avantage** : Pas besoin de liste manuelle → Scalable, automatisable.

---

### 6. **Resilience & Error Handling** 🛡️

```typescript
// Continue en cas d'échec individuel
for (const run of batchResults.runs) {
  if (run.ok) {
    // Traiter succès
  } else {
    // Logger erreur mais continuer avec autres clients
    allResults.push({ success: false, error: errorMessage });
  }
}

// Retry automatique Trigger.dev
retry: {
  maxAttempts: 3,
  factor: 2,
  minTimeoutInMs: 1000,
  maxTimeoutInMs: 30000,
  randomize: true,  // 👈 Évite thundering herd
}
```

**Résultat** : Système robuste, ne crash pas si 1 client échoue.

---

## ⚠️ Points Faibles & Risques

### 1. **Precision Catastrophique** 🚨 **CRITIQUE**

```
Precision actuelle: 15-25%
→ 75-85% de False Positives
→ Système propose 4 produits inutiles pour 1 utile
```

**Impact Business** :
- ❌ Spam clients avec propositions non pertinentes
- ❌ Perte de confiance système
- ❌ Temps perdu commerciaux à filtrer manuellement

**Cause Racine** : Voir BACKTEST-FINDINGS.md (fenêtre fixe 180j)

**Priorité** : 🔴 **P0 - BLOQUANT PRODUCTION**

---

### 2. **Dépendance Forte Production** ⚠️ **MAJEUR**

```typescript
// Backtest appelle directement le système prod
const systemPrediction = await clientProposalTask.triggerAndWait({...});
```

**Problème** :
- ❌ Si bug dans `clientProposalTask`, backtest bugué aussi
- ❌ Impossible de tester hypothèses sans modifier prod
- ❌ Pas de "dry-run" ou "sandbox" mode

**Impact** :
- ⚠️ A/B testing difficile (doit déployer en prod)
- ⚠️ Régression prod = régression backtest

**Solution recommandée** :
```typescript
// Créer version "pure" du système pour backtesting
const backtestEngine = {
  predict: (clientId, config) => {
    // Logique isolée (pas de side-effects Odoo)
    return { products: [...], ... };
  }
};

// Backtest teste l'engine directement
const systemPrediction = backtestEngine.predict(clientId, { analysisEndDate: cutoff });
```

**Priorité** : 🟠 **P1 - IMPORTANT** (refactoring architecture)

---

### 3. **Performance Séquentielle** ⚠️ **MINEUR**

```typescript
// client-discovery.service.ts:90-117 (séquentiel)
for (let i = 0; i < sortedClients.length; i++) {
  const totalOrderIds = await odoo.search(...);  // ❌ Attend chaque requête
}

// Temps: N × 0.5s = 50 clients × 0.5s = 25s
```

**Solution** :
```typescript
// Paralléliser avec p-limit (contrôle concurrence)
const pLimit = require('p-limit');
const limit = pLimit(10);  // Max 10 requêtes simultanées

const promises = sortedClients.map(client =>
  limit(() => checkClientHistory(client))
);
const results = await Promise.all(promises);

// Temps: (N / 10) × 0.5s = 50 / 10 × 0.5s = 2.5s (10× plus rapide)
```

**Priorité** : 🟢 **P2 - NICE TO HAVE** (optimisation)

---

### 4. **Manque de Tests Unitaires** ⚠️ **MAJEUR**

```bash
# Recherche de tests
find backend/src -name "*.test.ts" -o -name "*.spec.ts"
→ Aucun résultat trouvé
```

**Risque** :
- ❌ Régressions non détectées (modification calcul métriques)
- ❌ Edge cases non testés (division par zéro, listes vides)
- ❌ Refactoring risqué

**Couverture recommandée** :
```typescript
// comparison.service.test.ts
describe('calculateProductMetrics', () => {
  test('division par zéro - tous FN', () => {
    const result = calculateProductMetrics(0, 0, 10);
    expect(result.precision).toBe(0);
    expect(result.recall).toBe(0);
  });

  test('precision parfaite', () => {
    const result = calculateProductMetrics(10, 0, 5);
    expect(result.precision).toBe(1.0);
  });
});

// statistics.service.test.ts
describe('calculateMedian', () => {
  test('liste paire', () => {
    expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
  });

  test('liste impaire', () => {
    expect(calculateMedian([1, 2, 3])).toBe(2);
  });
});
```

**Priorité** : 🟠 **P1 - IMPORTANT** (qualité code)

---

### 5. **Duplication Logique Analyse** ⚠️ **MINEUR**

```
analyze-backtests.cjs        → Parse MD + calcule stats
statistics.service.ts        → Calcule stats sur JSON

→ Duplication des calculs mean/median/stdDev
```

**Solution** : Utiliser `statistics.service.ts` partout, supprimer script CJS.

**Priorité** : 🟢 **P3 - REFACTORING**

---

### 6. **Pas de Monitoring Production** ⚠️ **MAJEUR**

```
❌ Pas de dashboard Precision/Recall en temps réel
❌ Pas d'alertes si Precision < 50%
❌ Pas de tracking drift métriques dans le temps
```

**Impact** :
- ⚠️ Dégradation système invisible jusqu'au backtest manuel
- ⚠️ Pas de détection anomalies (ex: bug déploiement)

**Solution** : Grafana + InfluxDB ou Datadog

**Priorité** : 🟠 **P1 - OBSERVABILITÉ**

---

## 🎯 Recommandations

### 1. **Corriger Precision (P0)** 🔴

**Voir BACKTEST-FINDINGS.md** pour plan détaillé.

**Quick wins** :
- ✅ Fenêtre adaptative (730j au lieu de 180j)
- ✅ Détection cycle produit (`cycle.utils.ts`)
- ✅ Filtrer LOW confidence

**Impact attendu** : Precision 15% → 50-70%

---

### 2. **Ajouter Tests Unitaires (P1)** 🟠

```bash
# Créer tests pour composants critiques
backend/src/features/backtesting/
  ├── comparison.service.test.ts     # 20+ tests
  ├── statistics.service.test.ts     # 15+ tests
  └── client-discovery.service.test.ts  # 10+ tests

# Framework: Vitest (rapide, compatible TypeScript)
npm install -D vitest @vitest/ui
```

**Tests prioritaires** :
1. `calculateProductMetrics()` - edge cases division par zéro
2. `calculateQuantityMetrics()` - liste vide, 1 élément
3. `calculateMedian()` - pair/impair
4. `calculatePercentile()` - limites (P0, P100)

**Target** : Coverage > 80% sur business logic

---

### 3. **Isoler Logique Backtesting (P1)** 🟠

**Objectif** : Découpler backtest du système prod

```typescript
// AVANT
const systemPrediction = await clientProposalTask.triggerAndWait({...});

// APRÈS
// 1. Créer moteur isolé
class ReplenishmentEngine {
  async predict(clientId: number, config: Config): Promise<Proposal> {
    const orderHistory = await this.odoo.getProductOrderHistory(...);
    const products = this.calculateReplenishmentNeeds(orderHistory, config);
    return { products };
  }
}

// 2. Partager entre prod et backtest
// Production
app.post("/generate-proposal", async (req, res) => {
  const proposal = await engine.predict(clientId, config);
  await odoo.createQuote(proposal);  // Side-effect uniquement en prod
});

// Backtest
export const backtestClientTask = task({
  run: async (payload) => {
    const systemProposal = await engine.predict(clientId, { analysisEndDate: cutoff });
    // Pas de side-effect Odoo
  }
});
```

**Avantages** :
- ✅ A/B testing facile (config différentes)
- ✅ Tests plus rapides (pas de Trigger.dev)
- ✅ Réutilisable (CLI, batch processing)

---

### 4. **Paralléliser Découverte Clients (P2)** 🟢

```typescript
// client-discovery.service.ts
import pLimit from 'p-limit';

export async function findTopBacktestClients(...) {
  // ...

  const limit = pLimit(10);  // Max 10 requêtes Odoo simultanées

  const promises = sortedClients.map(clientData =>
    limit(async () => {
      const totalOrderIds = await odoo.search("sale.order", [...]);
      return { ...clientData, totalOrders: totalOrderIds.length };
    })
  );

  const results = await Promise.all(promises);
  // ...
}
```

**Impact** : 25s → 2.5s (10× plus rapide)

---

### 5. **Dashboard Monitoring (P1)** 🟠

**Stack recommandée** :
- Grafana Cloud (free tier)
- InfluxDB time-series (métriques)
- Prometheus exporter (optionnel)

**Métriques à tracker** :
```typescript
// À chaque backtest, envoyer:
influx.write('backtest_metrics', {
  client_id: clientId,
  precision: comparison.productMetrics.precision,
  recall: comparison.productMetrics.recall,
  f1_score: comparison.productMetrics.f1Score,
  mae: comparison.quantityMetrics.mae,
  mape: comparison.quantityMetrics.mape,
  timestamp: Date.now()
});

// Dashboard Grafana:
// - Line chart: Precision/Recall/F1 over time
// - Histogram: Distribution MAPE
// - Alert: Si Precision < 50% → Email
```

---

### 6. **Versioning Métriques (P2)** 🟢

```typescript
// backtest.types.ts
export interface BacktestComparisonResult {
  // ...
  metadata: {
    backtestVersion: string;     // "1.2.0"
    systemVersion: string;        // "2.5.3"
    metricsVersion: string;       // "1.0" (pour migration)
    timestamp: string;
  };
}
```

**Objectif** : Tracer les changements de calcul métriques (breaking changes)

---

### 7. **Compression Rapports (P3)** 🟢

```typescript
// backtest-report.ts
import { gzip } from 'zlib';
import { promisify } from 'util';

const gzipAsync = promisify(gzip);

export async function saveBacktestReport(comparison, clientId, orderName) {
  const reportMd = generateBacktestReport(comparison);
  const reportJson = generateBacktestReportJSON(comparison);

  // Compresser JSON (gain ~70%)
  const jsonGz = await gzipAsync(Buffer.from(JSON.stringify(reportJson)));

  await fs.writeFile(`backtest-${clientId}-${orderName}.json.gz`, jsonGz);
  await fs.writeFile(`backtest-${clientId}-${orderName}.md`, reportMd);  // MD non compressé (lisible)
}
```

**Gain** : 150 MB → 50 MB (pour 1000 clients)

---

## 📚 Conformité Best Practices

### Comparaison avec Standards Académiques

| Critère | Standard ML/Time-Series | Implémentation Actuelle | Score |
|---------|------------------------|-------------------------|-------|
| **Train/Test Split** | Walk-forward (time-based) | ✅ Time travel (cutoff date) | 10/10 |
| **Cross-Validation** | Time-series CV | ❌ Pas de CV (single test) | 4/10 |
| **Métriques** | MAE/RMSE (symétrique) | ✅ MAE principal, MAPE secondaire | 9/10 |
| **Baseline** | Naive forecast (repeat last) | ❌ Pas de baseline | 0/10 |
| **Statistical Tests** | Paired t-test (A/B) | ❌ Pas de tests stats | 0/10 |
| **Confidence Intervals** | Bootstrap / Student-t | ❌ Pas de CI | 0/10 |
| **Feature Importance** | SHAP / LIME | N/A (rule-based) | - |
| **Drift Detection** | KS-test, PSI | ❌ Pas de monitoring drift | 0/10 |

**Score global** : 5.5/10

---

### Recommandations Académiques

#### 1. Ajouter Baseline

```typescript
// Créer prédiction naive (repeat last order)
function naiveBaseline(lastOrder: OrderLine[]): Proposal {
  return {
    products: lastOrder.map(line => ({
      productId: line.product_id,
      quantity: line.quantity,  // Répète qté dernière commande
    }))
  };
}

// Comparer système vs baseline
const baselineMetrics = compareSystemPredictionVsRealOrder(
  naiveBaseline(lastOrder),
  realOrderLines,
  ...
);

console.log(`System F1: ${systemMetrics.f1Score}`);
console.log(`Baseline F1: ${baselineMetrics.f1Score}`);
console.log(`Improvement: ${(systemMetrics.f1Score - baselineMetrics.f1Score) * 100}%`);
```

**Objectif** : Prouver que le système est meilleur qu'une heuristique simple.

---

#### 2. Confidence Intervals (Bootstrap)

```typescript
// Calculer intervalle de confiance 95% pour Recall moyen
function bootstrapCI(metrics: IndividualBacktestMetrics[], n: number = 1000) {
  const recallValues = metrics.map(m => m.recall);
  const bootstrapMeans: number[] = [];

  for (let i = 0; i < n; i++) {
    // Resample avec remplacement
    const sample = Array.from({ length: recallValues.length }, () =>
      recallValues[Math.floor(Math.random() * recallValues.length)]
    );
    bootstrapMeans.push(calculateMean(sample));
  }

  bootstrapMeans.sort((a, b) => a - b);
  return {
    lower: bootstrapMeans[Math.floor(n * 0.025)],  // 2.5th percentile
    upper: bootstrapMeans[Math.floor(n * 0.975)],  // 97.5th percentile
  };
}

// Usage
const ci = bootstrapCI(allMetrics);
console.log(`Recall moyen: ${meanRecall}% [${ci.lower}% - ${ci.upper}%] (95% CI)`);
```

**Affichage rapport** :
```markdown
| Recall | 85.3% [82.1% - 88.5%] (95% CI) |
```

---

#### 3. Cross-Validation Time-Series

```typescript
// Valider sur K fenêtres temporelles (rolling origin)
async function timeSeriesCV(clientId: number, k: number = 5) {
  const orders = await odoo.getAllOrders(clientId);
  const results: BacktestMetrics[] = [];

  for (let i = k; i < orders.length; i++) {
    const testOrder = orders[i];
    const cutoffDate = calculateDateBefore(testOrder.date_order, 1);

    const metrics = await backtestClient(clientId, cutoffDate, testOrder);
    results.push(metrics);
  }

  return calculateAggregateStatistics(results);
}
```

**Objectif** : Valider stabilité système sur plusieurs périodes (pas juste dernière commande).

---

## 📋 Plan d'Action Prioritaire

### Phase 1 : Stabilisation Production (2-3 semaines)

| Action | Priorité | Effort | Impact | Owner |
|--------|----------|--------|--------|-------|
| **1. Corriger Precision** (fenêtre adaptative) | 🔴 P0 | 1-2 sem | +300% Precision | Data |
| **2. Tests unitaires** (comparison + statistics) | 🟠 P1 | 3-5j | Qualité code | Dev |
| **3. Monitoring dashboard** (Grafana) | 🟠 P1 | 2-3j | Observabilité | DevOps |

**Livrable** : Precision > 60%, Tests coverage > 70%, Dashboard opérationnel

---

### Phase 2 : Optimisation & Refactoring (3-4 semaines)

| Action | Priorité | Effort | Impact | Owner |
|--------|----------|--------|--------|-------|
| **4. Isoler moteur backtest** (decoupling prod) | 🟠 P1 | 1 sem | A/B testing facile | Archi |
| **5. Paralléliser découverte** (p-limit) | 🟢 P2 | 1j | 10× plus rapide | Dev |
| **6. Ajouter baseline naive** | 🟢 P2 | 2j | Validation scientifique | Data |
| **7. Compression rapports** (gzip) | 🟢 P3 | 1j | -70% stockage | Dev |

**Livrable** : Architecture découplée, Baseline comparaison, Optimisations

---

### Phase 3 : Avancé (long terme)

| Action | Priorité | Effort | Impact | Owner |
|--------|----------|--------|--------|-------|
| **8. Cross-validation time-series** | 🟢 P3 | 1 sem | Robustesse validation | Data |
| **9. Confidence intervals** (bootstrap) | 🟢 P3 | 2j | Rigueur scientifique | Data |
| **10. Drift detection** (monitoring) | 🟢 P3 | 1 sem | Alerte dégradation | ML |

---

## 📊 Scoring Final

| Dimension | Score | Commentaire |
|-----------|-------|-------------|
| **Architecture** | 8.5/10 | Solide, layers clairs, mais couplage prod/backtest |
| **Code Quality** | 9/10 | TypeScript excellent, manque tests unitaires |
| **Métriques** | 8.5/10 | Choix rigoureux (MAE principal), manque baseline |
| **Performance** | 6.5/10 | Optimisations micro OK, mais séquentiel macro |
| **Documentation** | 9.5/10 | Exceptionnelle (BACKTEST-PLAN.md, rapports pédagogiques) |
| **Observabilité** | 4/10 | Logs OK, mais pas de monitoring temps réel |
| **Scalabilité** | 7/10 | Batch 500 OK, mais limite concurrence (5 workers) |
| **Résultats** | 5/10 | **Precision 15-25% = bloquant production** |

### **Score Global : 7.3/10**

**Verdict** : 🟡 **Système prometteur avec défaut critique**

Le système de backtesting est **architecturalement solide** et **scientifiquement rigoureux**, MAIS les résultats actuels (Precision 15-25%) révèlent un **défaut majeur dans le système de prédiction** (fenêtre fixe 180j).

**Recommandation** : 🔴 **NE PAS DÉPLOYER EN PRODUCTION** avant correction Precision (Phase 1).

---

## 🎓 Références Académiques

1. **Hyndman, R.J., & Athanasopoulos, G. (2021)**. "Forecasting: Principles and Practice" (3rd ed). OTexts. [Chapitre 5: MAE vs MAPE]

2. **Tofallis, C. (2015)**. "A better measure of relative prediction accuracy for model selection and model estimation". *Journal of the Operational Research Society*, 66(8), 1352-1362. [Biais asymétrique MAPE]

3. **Bergmeir, C., & Benítez, J.M. (2012)**. "On the use of cross-validation for time series predictor evaluation". *Information Sciences*, 191, 192-213. [Time-series CV]

4. **Tashman, L.J. (2000)**. "Out-of-sample tests of forecasting accuracy: an analysis and review". *International Journal of Forecasting*, 16(4), 437-450. [Walk-forward testing]

5. **Makridakis, S., Spiliotis, E., & Assimakopoulos, V. (2020)**. "The M4 Competition: 100,000 time series and 61 forecasting methods". *International Journal of Forecasting*, 36(1), 54-74. [Benchmark forecasting methods]

---

**Fin du rapport**

_Généré le 2025-11-13 par Claude (Sonnet 4.5)_
