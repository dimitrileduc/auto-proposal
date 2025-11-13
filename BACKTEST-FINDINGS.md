# Analyse Backtesting : Problème de la Fenêtre Fixe

**Date** : 2025-11-13
**Analysé par** : Claude (Data Scientist)
**Rapports analysés** : 100 backtests clients

---

## 🔴 Diagnostic Principal

Le système génère **80-90% de False Positives** à cause d'une **fenêtre d'analyse fixe de 180 jours** qui ne respecte pas les cycles de commande naturels des produits.

### Métriques Actuelles

```
Precision: 10-20%  ❌ (Objectif: > 80%)
Recall: 70-100%    ⚠️ (Artificiellement élevé à cause des FP)
F1-Score: 15-30%   ❌ (Objectif: > 75%)
MAE: 0-205 unités  ⚠️
```

### Exemples Concrets

| Client | TP | FP | FN | Precision | Recall | F1 |
|--------|----|----|----|-----------|---------|----|
| FOODPRINT SRL | 3 | 240 | 4 | **1.2%** | 42.9% | 2.4% |
| COLRUYT | 4 | 32 | 0 | **11.1%** | 100% | 20.0% |
| CMB | 2 | 34 | 0 | **5.5%** | 100% | 10.5% |
| HYGIENA | 9 | 28 | 4 | **24.3%** | 69.2% | 36.0% |

---

## 🎯 Cause Racine Identifiée

### Le Problème de la Fenêtre Fixe

**Configuration actuelle** (`auto-proposal.ts:18`) :
```typescript
analysisWindowDays: 180,  // 6 mois d'historique FIXE
```

**Problème** : Les produits ont des **cycles de commande variables** :
- Produits haute rotation : 14-30 jours
- Produits rotation moyenne : 60-90 jours
- Produits basse rotation : 180-365 jours

**La fenêtre fixe 180j ne convient à AUCUN de ces profils !**

---

## 📊 Scénario 1 : Cycle Long (> 180j)

### Produit Commandé Tous les 240 Jours

```
Timeline Réelle:
|--------240j--------|--------240j--------|--------240j--------|
        ▼                      ▼                     ▼
      Cmd 1                  Cmd 2                 Cmd 3 (il y a 10j)
```

**Ce que voit le système avec fenêtre 180j** :

```
Fenêtre analyse: [aujourd'hui - 180j ... aujourd'hui]
                  |-------------------180j-------------------|
                                                           ▼
                                                         Cmd 3
```

**Résultat** :
- ✅ Historique visible : **1 commande** (Cmd 3)
- ❌ Confidence : **LOW** (1 seule commande)
- ❌ Système propose le produit (Cmd 2 invisible)
- ❌ Client n'en veut pas (dernière commande il y a 10j !)
- ❌ **FALSE POSITIVE**

**Impact** : 659 occurrences de "Stock prédit: 0.0u (0j restants)" dans les rapports

---

## 📊 Scénario 2 : Cycle Très Long (> 200j)

### Produit Commandé Tous les 220 Jours

```
Timeline Réelle:
|--------220j--------|--------220j--------|
        ▼                      ▼                (aujourd'hui = 10j après)
      Cmd 1                  Cmd 2 (il y a 230j)     👈 Client est EN RETARD !
```

**Ce que voit le système avec fenêtre 180j** :

```
Fenêtre analyse: [aujourd'hui - 180j ... aujourd'hui]
                  |-------------------180j-------------------|

     Cmd 2 ici ▼
    (230j ago)
    HORS FENÊTRE !

Historique visible: VIDE ❌
```

**Résultat** :
- ❌ Aucun historique trouvé
- ❌ Produit **complètement ignoré**
- ❌ **FALSE NEGATIVE** (client avait besoin !)

**Exemple réel** (backtest-client-13621) :
```markdown
| [PF1797] LV MAYONNAI TOMATE 250ML WECK | 200 |
  Jamais commandé avant dans les 180j précédents (pas d'historique) |
```

---

## 📊 Scénario 3 : Cycle Court (< 30j)

### Produit Commandé Tous les 14 Jours

```
Timeline:
|-14j-|-14j-|-14j-|-14j-|-14j-|...(12 commandes en 180j)
  ▼     ▼     ▼     ▼     ▼
```

**Ce que voit le système** :

```
Fenêtre 180j: 12 commandes ✅
Confidence: HIGH ✅
```

**MAIS** : Si dernière commande il y a 3j, **pas besoin de proposer avant 11j** !

**Résultat** :
- ✅ Bon historique
- ❌ Proposition trop tôt
- ❌ **FALSE POSITIVE** (timing incorrect)

---

## 🔧 Solutions Proposées

### Option 1 : Fenêtre Élargie + Détection Cycle (RECOMMANDÉ)

**Architecture** : Utiliser les données déjà chargées (pas de call Odoo supplémentaire)

```typescript
// stock-replenishment.service.ts

// 1. Élargir la fenêtre à 730j (2 ans) au lieu de 180j
const daysOfHistory = config?.analysisWindowDays ?? 730; // 👈 CHANGEMENT

const orderHistory = await getProductOrderHistory(clientId, daysOfHistory, analysisEndDate);
// ☝️ UNE SEULE requête Odoo pour TOUS les produits

// 2. Pour chaque produit
for (const product of orderHistory.products) {

  // NOUVEAU : Détecter le cycle du produit avec les orders DÉJÀ chargés
  const productCycle = detectProductCycle(product.orders);

  // NOUVEAU : Vérifier si on est dans la fenêtre d'achat
  const daysSinceLastOrder = calculateDaysSinceLastOrder(
    product.orders[0],
    analysisEndDate
  );

  // NOUVEAU : Skip si trop tôt dans le cycle
  if (daysSinceLastOrder < productCycle * 0.75) {
    console.log(`❌ SKIP: Trop tôt (${daysSinceLastOrder}j < ${productCycle * 0.75}j)`);
    continue;
  }

  // ... reste du code existant (calcul consommation, quantité, etc.)
}
```

**Nouveaux fichiers à créer** :

#### `/backend/src/features/stock-replenishment/utils/cycle.utils.ts`

```typescript
import { calculateMedian } from "./median.utils";
import type { OrderLineDetail } from "../order-history/order-history.types";

/**
 * Détecte le cycle de commande typique d'un produit
 *
 * @param orders Historique des commandes (déjà trié DESC par date)
 * @returns Nombre de jours entre commandes (médiane des intervalles)
 *
 * @example
 * Commandes: [10j ago, 250j ago, 490j ago]
 * Intervalles: [240j, 240j]
 * Cycle = médiane([240, 240]) = 240j
 */
export function detectProductCycle(orders: OrderLineDetail[]): number {
  if (orders.length < 2) {
    return 180; // Défaut si pas assez de données
  }

  // Calculer intervalles entre commandes consécutives
  const intervals: number[] = [];
  for (let i = 0; i < orders.length - 1; i++) {
    const date1 = new Date(orders[i].date_order);
    const date2 = new Date(orders[i + 1].date_order);
    const daysBetween = (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
    intervals.push(daysBetween);
  }

  // Médiane des intervalles = cycle typique
  const cycle = calculateMedian(intervals);

  // Limiter entre 14j (min) et 365j (max)
  return Math.max(14, Math.min(cycle, 365));
}

/**
 * Calcule jours depuis dernière commande
 *
 * @param lastOrder Dernière commande du produit
 * @param currentDate Date de référence (pour backtesting)
 * @returns Nombre de jours écoulés
 */
export function calculateDaysSinceLastOrder(
  lastOrder: OrderLineDetail,
  currentDate: string | Date
): number {
  const lastOrderDate = new Date(lastOrder.date_order);
  const current = new Date(currentDate);
  return Math.floor((current.getTime() - lastOrderDate.getTime()) / (1000 * 60 * 60 * 24));
}

/**
 * Calcule le coefficient de variation des intervalles
 * Permet de détecter la régularité des commandes
 *
 * @param orders Historique des commandes
 * @returns CV (0 = très régulier, > 1 = très irrégulier)
 *
 * @example
 * Intervalles: [30j, 31j, 29j] → CV = 0.03 (très régulier)
 * Intervalles: [10j, 180j, 45j] → CV = 1.2 (très irrégulier)
 */
export function calculateCoefficientOfVariation(orders: OrderLineDetail[]): number {
  if (orders.length < 3) {
    return 1.0; // Pas assez de données = considérer comme irrégulier
  }

  const intervals: number[] = [];
  for (let i = 0; i < orders.length - 1; i++) {
    const date1 = new Date(orders[i].date_order);
    const date2 = new Date(orders[i + 1].date_order);
    const daysBetween = (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
    intervals.push(daysBetween);
  }

  const mean = intervals.reduce((sum, val) => sum + val, 0) / intervals.length;
  const variance = intervals.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / intervals.length;
  const stdDev = Math.sqrt(variance);

  return stdDev / mean; // CV = σ / μ
}
```

**Impact attendu** :
- ✅ Precision : 50-70% (vs 10-20%)
- ✅ Recall : 60-80% (vs 70-100% artificiel)
- ✅ F1-Score : 55-75% (vs 15-30%)
- ✅ Respect des cycles produits
- ✅ Pas de call Odoo supplémentaire

---

### Option 2 : Quick Fix Fréquence Locale (Simple)

**Si on ne veut pas toucher à la fenêtre 180j** :

```typescript
// stock-replenishment.service.ts:85+

// Calculer fréquence moyenne dans la fenêtre existante
const orderCount = product.orders.length;

if (orderCount >= 2) {
  const oldestOrder = product.orders[orderCount - 1];
  const newestOrder = product.orders[0];
  const daysCovered = (new Date(newestOrder.date_order) - new Date(oldestOrder.date_order)) / (1000*60*60*24);
  const averageDaysBetweenOrders = daysCovered / (orderCount - 1);

  console.log(`📊 Fréquence: ${averageDaysBetweenOrders.toFixed(0)}j entre commandes`);

  // NOUVEAU: Skip si dernière commande trop récente
  const daysSinceLastOrder = (new Date(analysisEndDate) - new Date(newestOrder.date_order)) / (1000*60*60*24);

  if (daysSinceLastOrder < averageDaysBetweenOrders * 0.6) {
    console.log(`❌ SKIP: Commande trop récente (${daysSinceLastOrder}j < ${averageDaysBetweenOrders * 0.6}j)`);
    continue;
  }
}
```

**Impact attendu** :
- ✅ Precision : 40-50% (amélioration modérée)
- ⚠️ Recall : 50-60% (baisse car cycles > 180j invisibles)
- ✅ Simple à implémenter (10 lignes)
- ⚠️ Ne résout pas le problème des cycles longs

---

## 🧪 Plan de Validation

### Phase 1 : Implémenter Option 1

1. Créer `cycle.utils.ts` avec fonctions de détection
2. Modifier `stock-replenishment.service.ts` :
   - Changer `daysOfHistory` de 180 → 730
   - Ajouter détection cycle
   - Ajouter filtre timing
3. Ajouter tests unitaires pour `detectProductCycle()`

### Phase 2 : Relancer Backtests

```bash
# Relancer sur échantillon de 10 clients
curl -X POST http://localhost:3000/api/backtest-client \
  -H "Content-Type: application/json" \
  -d '{"clientId": 13621}'  # FOODPRINT (actuellement 1.2% precision)

curl -X POST http://localhost:3000/api/backtest-client \
  -d '{"clientId": 33598}'  # COLRUYT (actuellement 11.1% precision)

# Etc.
```

### Phase 3 : Comparer Métriques

| Client | Precision AVANT | Precision APRÈS | Amélioration |
|--------|-----------------|-----------------|--------------|
| FOODPRINT | 1.2% | ?? | ?? |
| COLRUYT | 11.1% | ?? | ?? |
| CMB | 5.5% | ?? | ?? |

**Objectif** : Precision > 60% pour validation

---

## 📈 Améliorations Complémentaires

### Filtrage par Régularité

```typescript
// Après détection du cycle
const cv = calculateCoefficientOfVariation(product.orders);

if (cv > 1.5) {
  console.log(`❌ SKIP: Commandes trop irrégulières (CV=${cv.toFixed(2)})`);
  continue;
}
```

**Impact** : Évite de proposer produits à commande ponctuelle/saisonnière

---

### Filtrage par Confidence + Cycle

```typescript
// Combinaison confidence + cycle
if (calculation.metadata.confidence === 'low' && productCycle > 180) {
  console.log(`❌ SKIP: LOW confidence ET cycle long (${productCycle}j)`);
  continue;
}
```

**Impact** : Filtre plus intelligent que "skip tous les LOW"

---

### Score de Confiance Prédictive

```typescript
interface PredictionConfidence {
  score: number; // 0-100
  factors: {
    orderCount: number;      // Plus = mieux
    cycleRegularity: number; // CV inverse
    timingMatch: number;     // Proche du cycle ?
    quantityStability: number; // Médiane stable ?
  };
}

function calculatePredictionConfidence(product, cycle, daysSince): PredictionConfidence {
  const orderCount = Math.min(product.orders.length / 10, 1); // Max à 10 commandes
  const cv = calculateCoefficientOfVariation(product.orders);
  const cycleRegularity = Math.max(0, 1 - cv);
  const timingMatch = daysSince / cycle; // 1.0 = parfait timing

  const score = (orderCount * 0.3 + cycleRegularity * 0.4 + timingMatch * 0.3) * 100;

  return { score, factors: { orderCount, cycleRegularity, timingMatch } };
}

// Usage
const confidence = calculatePredictionConfidence(product, productCycle, daysSinceLastOrder);
if (confidence.score < 50) {
  console.log(`❌ SKIP: Score confiance trop faible (${confidence.score}%)`);
  continue;
}
```

---

## 🚨 Problèmes Connexes Identifiés

### 1. Logique de Prédiction Stock Naïve

**Code actuel** (`prediction.utils.ts:32`) :
```typescript
const estimatedStock = lastQuantity - daysElapsed * consumptionPerDay;
```

**Problème** : Suppose que `lastQuantity` = stock initial (FAUX)

**Solution court-terme** : Filtrer `estimatedStock <= 1`

**Solution long-terme** : Intégrer stock réel Odoo via `stock.quant`

---

### 2. Seuil de Rupture Non Respecté

**Observation** : Produits à `0j restants` proposés alors que seuil = 19j

**Solution** : Déjà résolu par filtre cycle (skip si timing incorrect)

---

### 3. Confidence LOW Pas Filtrée

**Impact actuel** : Produits 1 commande = LOW confidence = proposés quand même

**Solution temporaire** :
```typescript
if (calculation.metadata.confidence === 'low') {
  continue; // Skip tous les LOW
}
```

**Solution définitive** : Option 1 (fenêtre 730j) résout naturellement ce problème

---

## 📊 Comparaison Options

| Critère | Option 1 (Cycle) | Option 2 (Quick Fix) | Actuel |
|---------|------------------|----------------------|--------|
| **Precision** | 50-70% | 40-50% | 10-20% |
| **Recall** | 60-80% | 50-60% | 70-100% |
| **F1-Score** | 55-75% | 45-55% | 15-30% |
| **Calls Odoo** | 1 ✅ | 1 ✅ | 1 ✅ |
| **Complexité** | Moyenne | Faible | Faible |
| **Cycles longs** | ✅ Détectés | ❌ Manqués | ❌ Manqués |
| **Timing** | ✅ Respecté | ⚠️ Partiel | ❌ Ignoré |
| **Implémentation** | 4-6h | 1h | - |

---

## 🎯 Recommandation Finale

**Implémenter Option 1** : Fenêtre élargie + détection cycle

**Raisons** :
1. ✅ Résout le problème à la racine (fenêtre fixe)
2. ✅ Respecte les cycles naturels de chaque produit
3. ✅ Pas de surcharge performance (utilise données déjà chargées)
4. ✅ Amélioration significative attendue (Precision × 3-5)
5. ✅ Évolutif (base pour ML futur)

**Validation** :
- Relancer 100 backtests
- Comparer métriques AVANT/APRÈS
- Si Precision > 60% → déployer en production
- Si Precision < 60% → investiguer cas limites

---

## 📝 Next Steps

1. [ ] Créer `cycle.utils.ts` avec tests unitaires
2. [ ] Modifier `stock-replenishment.service.ts` (fenêtre 730j)
3. [ ] Ajouter filtres cycle + timing
4. [ ] Relancer backtests sur 10 clients test
5. [ ] Analyser résultats
6. [ ] Itérer si nécessaire
7. [ ] Relancer sur 100 clients
8. [ ] Générer rapport comparatif AVANT/APRÈS
9. [ ] Décision GO/NO-GO production

---

**Document créé le** : 2025-11-13
**Statut** : ⏳ En attente d'implémentation
**Priorité** : 🔴 CRITIQUE (Precision actuelle < 20%)
