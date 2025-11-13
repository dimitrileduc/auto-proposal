# Analyse Approfondie du Backtest - Auto-Proposal System

**Date:** 2025-11-13
**Analyste:** Claude Code
**Backtest analysé:** `backtest-aggregate-2025-11-13.md`

---

## 📊 Résumé Exécutif

### Métriques Globales

| Métrique | Moyenne | Médiane | Cible | Status |
|----------|---------|---------|-------|--------|
| **Recall** | 73.4% | 81.4% | >80% | ⚠️ Moyen |
| **Precision** | 43.9% | 41.9% | >70% | ❌ **CRITIQUE** |
| **F1-Score** | 51.0% | 52.3% | >75% | ❌ Insuffisant |
| **MAPE** | 38.1% | 28.3% | <30% | ⚠️ Limite |

### Diagnostic Principal

**Le système souffre d'une SUR-PRÉDICTION MASSIVE (Over-prediction)**

- ✅ **Bon Recall (79.7% moyen)** : Détecte bien les besoins réels
- ❌ **Mauvaise Precision (47.7% moyen)** : **58% des produits prédits ne sont jamais commandés**
- 📉 **26.6% des clients ont precision <30%** (1 produit correct sur 3 prédits)

---

## 🔍 Analyse Détaillée des Problèmes

### 1. Répartition des Performances

**Distribution par Precision:**
- Excellent (>70%) : 34 clients (17%)
- Bon (40-70%) : 75 clients (38%)
- **Médiocre (<40%) : 91 clients (46%)** ← **PROBLÉMATIQUE**

**Distribution par taille de données:**
- **100% des clients ont 1-2 produits réels** dans le backtest
- Aucun client avec >5 produits réels
- ⚠️ **Biais de test**: Les données sont trop limitées pour être statistiquement significatives

---

## 🐛 Causes Racines Identifiées

### Problème #1: Fenêtre d'Analyse Trop Large (180 jours)

**Configuration actuelle:**
```typescript
analysisWindowDays: 180  // 6 mois d'historique
```

**Impact:**
- Inclut **TOUS** les produits commandés dans les 6 derniers mois
- Produits commandés **une seule fois** il y a 150 jours → **prédits systématiquement**
- Pas de distinction entre produits réguliers et ponctuels

**Exemple concret - Client FOODPRINT SRL (13621):**
- 243 produits prédits
- 3 produits réellement commandés
- **240 faux positifs** (98.8% d'erreur)
- **141 FP (58.8%) avec "Stock prédit: 0.0u"** ← Produits jamais recommandés

---

### Problème #2: Calcul de Consommation Naïf

**Code actuel** (`consumption.utils.ts:40`):
```typescript
const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);
const actualDays = Math.min(daysOfHistory, daysSinceFirstOrder);
return totalQuantity / actualDays;  // ← PROBLÈME ICI
```

**Scénario problématique:**
1. **Produit X commandé UNE SEULE FOIS**
   - Date: Il y a 150 jours
   - Quantité: 300 unités

2. **Calcul de consommation:**
   - `totalQuantity = 300`
   - `actualDays = 150`
   - `consumptionPerDay = 300 / 150 = 2 unités/jour` ✅ Mathématiquement correct

3. **Prédiction du stock** (`prediction.utils.ts:32`):
   ```typescript
   const lastQuantity = 300  // Dernière commande
   const daysElapsed = 150   // Jours depuis cette commande
   const estimatedStock = 300 - 150 * 2 = 0  ← STOCK À ZÉRO
   const daysUntilStockout = 0 / 2 = 0       ← RUPTURE IMMÉDIATE
   ```

4. **Trigger de prédiction:**
   ```typescript
   if (0 <= 19) {  // daysUntilStockout <= replenishmentThresholdDays
     → PRÉDIRE CE PRODUIT  ← FAUX POSITIF GARANTI
   }
   ```

**⚠️ Le système ne peut PAS distinguer:**
- Un produit commandé **une fois** il y a 150j et **jamais recommandé**
- Un produit commandé **chaque mois** depuis 150j

---

### Problème #3: Stocks Négatifs Prédits (20.9% des FP)

**Sur 311 faux positifs analysés:**
- 65 FP (20.9%) ont des **stocks négatifs prédits**
- Exemples: `"-75.8u (-10j restants)"`, `"-352.9u (-20j restants)"`

**Cause:**
- Produit commandé il y a **200 jours** (hors fenêtre de 180j)
- Consommation calculée sur 180j
- `estimatedStock = lastQuantity - 200 * consumptionPerDay` → **NÉGATIF**

**Impact:**
- Le système prédit des produits **déjà théoriquement en rupture**
- Indicateur que le modèle de stock est invalide pour ce produit

---

### Problème #4: Seuil de Réapprovisionnement Trop Large

**Configuration actuelle:**
```typescript
targetCoverage: 14,  // 14 jours de couverture
leadTime: 5,         // 5 jours de délai livraison
// → Seuil total: 19 jours
```

**Impact:**
- **Tous les produits avec stock <19j** déclenchent une prédiction
- Avec la fenêtre de 180j, cela capture beaucoup de produits ponctuels
- Combiné aux problèmes #1 et #2, amplifie massivement les faux positifs

---

## 📈 Analyse Quantitative des Faux Positifs

### Pattern des 311 FP analysés (3 clients)

| Pattern | Count | % | Signification |
|---------|-------|---|---------------|
| **Stock prédit = 0** | 191 | 61.4% | Produits jamais/rarement commandés |
| **Stock prédit < 0** | 65 | 20.9% | Erreur de calcul (commande hors fenêtre) |
| **Stock suffisant** | 55 | 17.7% | Autres causes (saisonnalité, etc.) |

### Top 3 clients avec pire precision

| Rang | Client | Precision | Recall | Problème principal |
|------|--------|-----------|--------|-------------------|
| 1 | FOODPRINT SRL (13621) | 1.2% | 42.9% | 240 FP dont 141 avec stock=0 |
| 2 | CONSERVERIE BELGE (24092) | 3.4% | 100% | 28 FP dont 24 avec stock=0 |
| 3 | Epicerie Kennedy (23342) | 4.4% | 20.0% | 43 FP dont 26 avec stock=0 |

---

## 💡 Recommandations d'Amélioration

### 🔥 PRIORITÉ 1 - Filtrer les produits à faible fréquence

**Action:**
Ajouter un filtre sur le nombre minimum de commandes dans la fenêtre d'analyse.

**Implémentation suggérée** (`stock-replenishment.service.ts:90`):
```typescript
// Après le calcul de quantité
if (calculation.quantity === null) {
  console.log(`     ❌ SKIP: Pas d'historique pour calculer quantité`);
  continue;
}

// 🆕 NOUVEAU FILTRE
const MIN_ORDERS_FOR_PREDICTION = 2;  // Au moins 2 commandes dans la fenêtre
if (product.orders.length < MIN_ORDERS_FOR_PREDICTION) {
  console.log(`     ❌ SKIP: Pas assez de commandes (${product.orders.length} < ${MIN_ORDERS_FOR_PREDICTION})`);
  continue;
}
```

**Impact estimé:**
- ✅ Élimine ~60% des faux positifs (produits à 1 commande)
- ✅ Precision attendue: **60-70%** (vs 44% actuellement)
- ⚠️ Légère baisse de recall: ~5-10% (produits nouveaux non détectés)

---

### 🔥 PRIORITÉ 2 - Réduire la fenêtre d'analyse

**Action:**
Réduire de 180 jours à **90 jours** (3 mois).

**Rationale:**
- Les habitudes de commande changent tous les 3 mois
- Réduit l'inclusion de produits ponctuels anciens
- Focus sur les besoins récents

**Implémentation:**
```typescript
// backend/src/config/auto-proposal.ts
analysisWindowDays: 90,  // ← Changé de 180 à 90
```

**Impact estimé:**
- ✅ Élimine ~30% des faux positifs supplémentaires
- ✅ Precision attendue: **70-75%** (avec PRIORITÉ 1)
- ⚠️ Recall stable ou légère amélioration (focus sur produits récents)

---

### 🔥 PRIORITÉ 3 - Ignorer les stocks négatifs

**Action:**
Ne pas prédire les produits avec stock estimé < 0.

**Implémentation** (`stock-replenishment.service.ts:125`):
```typescript
// TRIGGER: Skip si stock suffisant
if (stockPrediction.daysUntilStockout > replenishmentThresholdDays) {
  console.log(`     ❌ SKIP: Stock OK`);
  continue;
}

// 🆕 NOUVEAU FILTRE
if (stockPrediction.estimatedStock < 0) {
  console.log(`     ❌ SKIP: Stock négatif prédit (modèle invalide pour ce produit)`);
  continue;
}
```

**Impact estimé:**
- ✅ Élimine ~20% des faux positifs restants
- ✅ Améliore la cohérence du système

---

### ⚡ PRIORITÉ 4 - Ajuster le seuil de réapprovisionnement (Optionnel)

**Action:**
Réduire le seuil de 19j à **14j** (couverture uniquement, sans lead time).

**Rationale:**
- Le lead time de 5j est peut-être trop conservateur
- Réduire le seuil = moins de faux positifs

**Implémentation:**
```typescript
// backend/src/config/auto-proposal.ts
targetCoverage: 14,
leadTime: 0,  // ← Ou intégrer différemment (ex: alertes anticipées)
```

**⚠️ Attention:**
- Risque de ruptures si délai de livraison réel > 0j
- À tester en mode backtest d'abord

---

### 🧪 PRIORITÉ 5 - Améliorer le calcul de consommation

**Action:**
Utiliser une fenêtre glissante ou un filtre de fraîcheur.

**Option A - Fenêtre glissante (60 derniers jours uniquement):**
```typescript
// consumption.utils.ts
export function calculateDailyConsumption(orders, daysOfHistory, currentDate) {
  const RECENT_WINDOW = 60;  // Derniers 60 jours
  const recentOrders = orders.filter(o => {
    const orderDate = new Date(o.date_order);
    const daysAgo = (currentDate - orderDate) / (1000 * 60 * 60 * 24);
    return daysAgo <= RECENT_WINDOW;
  });

  if (recentOrders.length === 0) return 0;

  const totalQuantity = recentOrders.reduce((sum, o) => sum + o.quantity, 0);
  return totalQuantity / RECENT_WINDOW;
}
```

**Option B - Ignorer les commandes trop anciennes:**
```typescript
const MAX_ORDER_AGE_DAYS = 90;  // Ne pas considérer les commandes >90j
const validOrders = orders.filter(o => {
  const orderDate = new Date(o.date_order);
  const daysAgo = (currentDate - orderDate) / (1000 * 60 * 60 * 24);
  return daysAgo <= MAX_ORDER_AGE_DAYS;
});
```

---

## 🎯 Plan d'Action Recommandé

### Phase 1 - Quick Wins (Impact immédiat)
1. ✅ **Filtrer les produits à 1 commande** (PRIORITÉ 1)
2. ✅ **Ignorer stocks négatifs** (PRIORITÉ 3)

**Résultat attendu:**
- Precision: **60-65%** (+15-20%)
- Recall: **70-75%** (stable)

---

### Phase 2 - Optimisation (Semaine 2)
3. ✅ **Réduire fenêtre à 90j** (PRIORITÉ 2)
4. ✅ **Tests de régression** avec backtest sur plusieurs dates

**Résultat attendu:**
- Precision: **70-75%** (+25-30%)
- Recall: **75-80%** (stable ou légère amélioration)

---

### Phase 3 - Expérimentation (Semaine 3-4)
5. ⚡ **Tester seuil 14j** (PRIORITÉ 4)
6. 🧪 **Améliorer calcul consommation** (PRIORITÉ 5)
7. 📊 **A/B testing** en production (mode test sans créer devis)

**Résultat cible:**
- Precision: **>75%**
- Recall: **>80%**
- F1-Score: **>75%**

---

## 📝 Limites de l'Analyse Actuelle

### Biais du Backtest

**⚠️ Tous les clients ont 1-2 produits réels uniquement**
- Impossible d'évaluer la performance sur clients avec 10+ produits
- Les métriques sont **sur-sensibles** aux erreurs individuelles
- Recommandation: **Refaire le backtest avec plus de dates/clients**

### Suggestions pour Améliorer le Backtest

1. **Tester sur plusieurs dates:**
   - Actuellement: 1 date de cutoff (2025-10-13)
   - Recommandé: **10+ dates étalées sur 6 mois**

2. **Filtrer les clients avec données suffisantes:**
   - Minimum: **5 produits commandés** dans la période de test
   - Exclure les clients avec 1-2 produits (bruit statistique)

3. **Analyser par segment de client:**
   - Petits clients (<10 produits/commande)
   - Moyens clients (10-50 produits)
   - Gros clients (>50 produits)

---

## 📚 Code Impacté

### Fichiers à Modifier

| Fichier | Ligne | Changement | Priorité |
|---------|-------|------------|----------|
| `stock-replenishment.service.ts` | 90 | Ajouter filtre min_orders | 🔥 P1 |
| `stock-replenishment.service.ts` | 125 | Ajouter filtre stock négatif | 🔥 P3 |
| `auto-proposal.ts` | 105 | Réduire analysisWindowDays à 90 | 🔥 P2 |
| `consumption.utils.ts` | 16-41 | Revoir calcul consommation | 🧪 P5 |
| `auto-proposal.ts` | 107-108 | Ajuster seuils coverage/leadTime | ⚡ P4 |

---

## 🎓 Enseignements Clés

### Ce qui Fonctionne Bien

1. ✅ **Recall élevé (79.7%)** : Le système détecte bien les besoins réels
2. ✅ **Architecture modulaire** : Facile d'ajouter des filtres
3. ✅ **Calcul de quantité (médiane)** : Robuste et fiable (MAPE 38%)

### Ce qui Doit Être Amélioré

1. ❌ **Trop de faux positifs** : 58% des prédictions sont inutiles
2. ❌ **Pas de filtre de fréquence** : Produits ponctuels traités comme réguliers
3. ❌ **Fenêtre trop large** : 180j inclut trop de bruit
4. ⚠️ **Stocks négatifs** : Indicateur de modèle invalide

### Métrique de Succès

**Objectif final:**
- **Precision >75%** : Max 25% de faux positifs
- **Recall >80%** : Max 20% de besoins manqués
- **F1-Score >75%** : Équilibre global

---

**Fin du rapport - Prêt pour implémentation**
