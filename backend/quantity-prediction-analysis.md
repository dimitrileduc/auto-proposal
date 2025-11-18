# Prédiction des Quantités à Commander - Demande d'Expertise

## Contexte du Système

### Vue d'ensemble

Nous avons développé un système de prédiction automatique de commandes pour le réapprovisionnement de clients en produits alimentaires bio. Le système analyse l'historique de commandes pour:

1. **QUELS** produits commander (détection de rupture de stock) ✅ Performant
2. **COMBIEN** commander de chaque produit (prédiction de quantité) ⚠️ Problématique

**Problème**: Nous avons des difficultés à prédire les **quantités** avec précision, bien que la détection des produits à commander fonctionne correctement.

### Architecture et Paramètres

- **Fenêtre d'analyse**: 120 jours d'historique
- **Seuil de réapprovisionnement**: `targetCoverage (14j) + leadTime (5j) = 19 jours`
- **Date de référence des tests**: 18 Novembre 2025
- **Échantillon testé**:
  - 189 clients avec produits ayant 2+ commandes historiques (segment **CLEAN**)
  - 158 clients avec produits ayant 1 seule commande (segment **LOW**)

### Algorithme de Calcul de Quantité

#### Pour produits avec 2+ commandes (CLEAN)
```typescript
consommation = totalQuantity / actualDays
stock = lastQuantity - (daysElapsed × consommation)
quantityNeeded = consommation × (targetCoverage + leadTime) - stock
```

#### Pour produits avec 1 commande (LOW)
```typescript
consommation = totalQuantity / clientReorderWindow
stock = lastQuantity - (daysElapsed × consommation)
quantityNeeded = consommation × (targetCoverage + leadTime) - stock
```

### Segmentation des Données

- **CLEAN**: Produits avec 2+ commandes historiques (données considérées fiables)
- **LOW**: Produits avec 1 seule commande historique (données limitées)
- **ALL**: CLEAN + LOW combinés

**Note**: Un bug corrigé le 18/11/2025 incluait incorrectement les produits jamais commandés dans CLEAN. Tous les résultats ci-dessous sont post-correction.

---

## Résultats et Problèmes Observés

### Métriques de Performance

| Segment | Clients | MAE Moyen | MAE Médiane | MAPE Moyen | MAPE Médiane | StdDev MAE |
|---------|---------|-----------|-------------|------------|--------------|------------|
| **CLEAN** | 189 | **48.51** | **0.875** | **40.95%** | **33.33%** | 412.0 |
| **LOW** | 158 | **14.43** | **0.333** | **34.37%** | **16.67%** | 71.6 |
| **ALL** | 247 | **37.10** | **0.638** | **37.89%** | **26.49%** | 271.0 |

### Observations Principales

#### 🔴 Problème 1: Distribution Bimodale Extrême (CLEAN)

La distribution des erreurs est profondément déséquilibrée:
- **MAE moyen**: 48.51 unités
- **MAE médiane**: 0.875 unités (54x plus petit!)
- **Écart-type**: 412.0 (8.5x le moyen!)

**Ce que cela signifie**: La majorité des clients ont des erreurs minimes (< 1 unité), mais quelques cas extrêmes explosent les moyennes.

#### 🔴 Problème 2: Dispersion Importante des Erreurs

**Distribution MAPE (segment CLEAN)**:

| Percentile | MAPE |
|------------|------|
| P25 | 12.5% |
| P50 (médiane) | 33.33% |
| P75 | 50.4% |
| P90 | 83.6% |

**Constat critique**: 33% des clients (75e-100e percentile) ont une erreur supérieure à 50% du besoin réel.

#### 🔴 Problème 3: Cas Extrêmes (15+ clients avec MAPE > 100%)

**Sur-estimations massives** (nous prédisons 2x à 5x le besoin réel):
- Client 60146 (ADH QUALITY): MAPE = 466.7%, MAE = 4.67
- Client 60364 (ILLICO VENDING): MAPE = 295%, MAE = 5.0
- Client 34498 (D'ICI NANINNE): MAPE = 189.3%, MAE = 3.21
- Client 3868 (TERRA NATURKOST): MAPE = 117.2%, MAE = 28.75
- Client 60291 (DOMAINE DE RONCHINNE): MAPE = 105%, MAE = 1.2

**Outliers de volume absolu** (erreurs de milliers d'unités):
- Client 3912 (LEGEND FOOD): MAE = **5370 unités**, MAPE = 127.6%
- Client 3877 (ZELECTED FOODS): MAE = **1338 unités**, MAPE = 50.7%
- Client 18017 (AVEVE BV): MAE = **625 unités**, MAPE = 500%

#### ℹ️ Observation: Segment LOW Paradoxalement Meilleur

Le segment LOW (1 seule commande historique) obtient de **meilleures** performances que CLEAN:
- MAPE moyen: 34.4% (vs 41.0% CLEAN)
- 75% des clients < 46.6% MAPE
- MAE médiane: 0.33 unités (vs 0.875 CLEAN)
- Distribution plus uniforme, moins d'outliers extrêmes

**Hypothèse**: CLEAN contient des clients B2B/grossistes avec commandes exceptionnelles qui faussent les calculs.

---

## Problèmes Identifiés

### Problème 1: Outliers de Volume Non Gérés

**Symptôme**: Quelques clients B2B explosent le MAE moyen (ex: 5370 unités d'erreur)

**Cause Racine**:
- Commandes B2B exceptionnelles non détectées comme outliers
- Moyenne simple sensible aux pics
- Pas de cap sur les quantités prédites

**Impact**:
- MAE moyen CLEAN: 48.51 au lieu de ~1-5 réaliste
- Métriques agrégées faussées
- Impossibilité de mesurer vraie performance

**Exemples**:
```json
Client 3912 (LEGEND FOOD):
  Prédit: 5370 unités d'erreur
  MAPE: 127.6%
  → Commande exceptionnelle B2B non filtrée

Client 3877 (ZELECTED FOODS):
  MAE: 1338 unités
  MAPE: 50.7%
  → Grossiste avec volumes irréguliers
```

**Priorité**: 🔴 HAUTE - Affecte toutes les métriques agrégées

---

### Problème 2: Sur-Estimation Systématique (MAPE > 100%)

**Symptôme**: 15+ clients avec MAPE > 100% (prédictions 2x+ supérieures au besoin réel)

**Cause Racine**:
- Seuil de 19 jours trop élevé pour certains clients
- Consommation moyenne faussée par périodes de forte activité
- Pas de prise en compte de la saisonnalité

**Impact**:
- Stock résiduel élevé chez le client
- Gaspillage potentiel (produits périssables)
- Perte de confiance dans les suggestions

**Exemples**:
```json
Client 60146 (ADH QUALITY):
  MAPE: 466.7%
  MAE: 4.67
  → Sur-estimation de 4.67x le besoin

Client 60364 (ILLICO VENDING):
  MAPE: 295%
  MAE: 5.0
  → Prédiction 3x trop élevée
```

**Priorité**: 🔴 HAUTE - Problème récurrent (15+ clients)

---

### Problème 3: Hypothèse de Stock Initial Incorrecte

**Symptôme**: MAPE médian de 33.3% même pour clients stables

**Cause Racine**:
```typescript
stock = lastQuantity - (daysElapsed × consommation)
```

**Hypothèse forte**: Le client avait 0 stock avant `lastQuantity`
- Faux si client avait stock résiduel lors dernière commande
- Sous-estime stock réel → Sur-estimation quantité à commander

**Impact**:
- Biais systématique vers sur-prédiction
- Affecte 100% des prédictions
- MAPE médian gonflé artificiellement

**Priorité**: 🟠 MOYENNE - Impact diffus mais généralisé

---

### Problème 4: Aucune Pondération Temporelle

**Symptôme**: Commandes anciennes (120j) ont même poids que récentes (1j)

**Cause Racine**:
```typescript
consommation = totalQuantity / actualDays  // Moyenne simple
```

**Impact**:
- Changements de consommation récents non détectés
- Lenteur d'adaptation aux nouvelles tendances
- MAPE élevé pour clients avec évolution de consommation

**Exemple Théorique**:
```
Client avec trend baissier:
  Jours 1-60: 10 unités/j
  Jours 61-120: 5 unités/j

  Consommation actuelle = (10×60 + 5×60)/120 = 7.5 u/j
  Consommation réelle (récente) = 5 u/j

  → Sur-estimation de 50%
```

**Priorité**: 🟠 MOYENNE - Affecte clients avec trends

---

### Problème 5: Calcul LOW Conference Peu Fiable

**Symptôme**: MAPE LOW = 34.4% malgré 1 seule commande historique

**Cause Racine**:
```typescript
consommation = totalQuantity / clientReorderWindow
```

Utilise `clientReorderWindow` (médiane intervalles client) **pour un produit commandé 1 fois**

**Paradoxe**:
- Si client commande produit A tous les 30j
- Et produit B 1 fois il y a 90j
- On assume B sera recommandé dans 30j (clientReorderWindow)
- Mais B n'a aucun pattern établi!

**Impact**:
- Prédictions basées sur pattern d'autres produits
- MAPE 34.4% "acceptable" mais logiquement faux
- Risque élevé de sur/sous-estimation

**Priorité**: 🟡 BASSE - Fonctionne "par hasard" pour l'instant

---

### Problème 6: Pas de Gestion de la Variabilité

**Symptôme**: Même quantité prédite quel que soit l'historique de variabilité

**Cause Racine**: Algorithme déterministe sans marge d'erreur

**Impact**:
- Client stable (toujours 10±1 unités) → Prédiction correcte
- Client variable (5 à 50 unités) → Même confiance de prédiction!

**Amélioration Possible**: Buffer de sécurité proportionnel à la volatilité

**Priorité**: 🟡 BASSE - Nice-to-have

---

## Recommandations d'Amélioration

### Amélioration 1: Détection et Exclusion des Outliers

**Problème adressé**: Outliers de volume explosant les métriques (Problème 1)

**Solution**:
Filtrer les commandes exceptionnelles avant calcul de consommation moyenne.

**Méthode IQR (Interquartile Range)**:
```typescript
function removeOutliers(quantities: number[]): number[] {
  const sorted = [...quantities].sort((a, b) => a - b);
  const q1 = sorted[Math.floor(sorted.length * 0.25)];
  const q3 = sorted[Math.floor(sorted.length * 0.75)];
  const iqr = q3 - q1;

  const lowerBound = q1 - 1.5 * iqr;
  const upperBound = q3 + 1.5 * iqr;

  return quantities.filter(q => q >= lowerBound && q <= upperBound);
}

// Dans le calcul de consommation
const cleanedQuantities = removeOutliers(orderQuantities);
consommation = sum(cleanedQuantities) / actualDays;
```

**Implémentation**:
1. Ajouter fonction `removeOutliers()` dans `consumption.service.ts`
2. Appliquer avant calcul moyenne dans `calculateConsumption()`
3. Logger les outliers exclus pour debugging

**Impact Attendu**:
- MAE moyen CLEAN: 48.51 → **~5-10** (réduction 80-90%)
- MAE médiane: reste ~1 (déjà bon)
- Métriques agrégées refléteront vraie performance

**Risques**:
- Peut exclure commandes légitimes de volumes variables
- Nécessite minimum 4-5 commandes pour IQR fiable
- Si < 4 commandes, garder toutes les valeurs

**Priorité**: 🔴 **HAUTE** - Quick win majeur

---

### Amélioration 2: Seuil de Réapprovisionnement Adaptatif

**Problème adressé**: Sur-estimation systématique MAPE > 100% (Problème 2)

**Solution**:
Ajuster le seuil selon la **régularité** du client.

**Métrique de Régularité** (Coefficient de Variation):
```typescript
function calculateRegularity(intervals: number[]): number {
  const mean = intervals.reduce((a, b) => a + b) / intervals.length;
  const variance = intervals.reduce((sum, val) => sum + (val - mean) ** 2, 0) / intervals.length;
  const stdDev = Math.sqrt(variance);

  return stdDev / mean; // CV = coefficient de variation
}

// Ajustement du seuil
function getAdaptiveThreshold(regularity: number): number {
  const baseThreshold = 19; // targetCoverage + leadTime

  if (regularity < 0.2) {
    // Client très régulier → seuil réduit
    return baseThreshold * 0.8; // 15 jours
  } else if (regularity < 0.5) {
    // Client moyennement régulier → seuil standard
    return baseThreshold; // 19 jours
  } else {
    // Client irrégulier → seuil augmenté (buffer de sécurité)
    return baseThreshold * 1.2; // 23 jours
  }
}
```

**Implémentation**:
1. Ajouter calcul de régularité dans `PatternAnalysisPhaseService`
2. Stocker `regularity` dans `calculation_metadata`
3. Utiliser dans calcul `quantityNeeded`

**Impact Attendu**:
- Clients réguliers: MAPE réduit de 33% → **~25%**
- Clients irréguliers: Recall amélioré (moins de ruptures)
- Réduction des cas MAPE > 100% de 15+ → **~5**

**Risques**:
- Peut augmenter Faux Négatifs pour clients réguliers si seuil trop bas
- Nécessite minimum 3 commandes pour calculer régularité

**Priorité**: 🔴 **HAUTE** - Adresse 15+ clients problématiques

---

### Amélioration 3: Correction de l'Estimation de Stock

**Problème adressé**: Hypothèse stock initial = 0 incorrecte (Problème 3)

**Solution**:
Estimer le stock résiduel probable lors de la dernière commande.

**Méthode "Stock Buffer"**:
```typescript
function estimateInitialStock(
  lastQuantity: number,
  avgInterval: number,
  consommation: number
): number {
  // Hypothèse: client commande quand stock restant = 20-30% de la consommation normale
  const bufferDays = 5; // leadTime du client
  const estimatedBuffer = consommation * bufferDays;

  // Stock initial = quantité commandée + buffer estimé
  return lastQuantity + estimatedBuffer;
}

// Dans le calcul de stock
const initialStock = estimateInitialStock(lastQuantity, avgInterval, consommation);
const stock = initialStock - (daysElapsed × consommation);
```

**Alternative Plus Simple** (Multiplicateur):
```typescript
// Assumer que le stock initial était 20% plus élevé que la quantité commandée
const initialStock = lastQuantity * 1.2;
const stock = initialStock - (daysElapsed × consommation);
```

**Implémentation**:
1. Modifier calcul dans `replenishment.service.ts`
2. A/B test multiplicateur (1.0, 1.1, 1.2, 1.3)
3. Choisir valeur optimale selon backtest

**Impact Attendu**:
- MAPE médian: 33.3% → **~25-28%** (réduction 15-25%)
- Réduction biais systématique de sur-prédiction
- Amélioration généralisée (tous les clients)

**Risques**:
- Si multiplicateur trop élevé → sous-estimation → Faux Négatifs
- Nécessite calibration fine (backtest)

**Priorité**: 🟠 **MOYENNE** - Impact diffus mais positif

---

### Amélioration 4: Pondération Exponentielle des Commandes

**Problème adressé**: Commandes anciennes ont même poids que récentes (Problème 4)

**Solution**:
Appliquer décroissance exponentielle selon l'âge des commandes.

**Exponential Weighted Average**:
```typescript
function calculateWeightedConsumption(
  orders: Array<{date: Date, quantity: number}>,
  halfLife: number = 30 // jours
): number {
  const now = new Date();
  const lambda = Math.log(2) / halfLife; // Décroissance exponentielle

  let weightedSum = 0;
  let weightSum = 0;
  let totalDays = 0;

  for (let i = 0; i < orders.length - 1; i++) {
    const daysAgo = (now - orders[i].date) / (1000 * 60 * 60 * 24);
    const weight = Math.exp(-lambda * daysAgo); // Plus récent = poids plus élevé

    const intervalDays = (orders[i+1].date - orders[i].date) / (1000 * 60 * 60 * 24);
    const dailyConsumption = orders[i].quantity / intervalDays;

    weightedSum += dailyConsumption * weight * intervalDays;
    weightSum += weight * intervalDays;
    totalDays += intervalDays;
  }

  return weightedSum / totalDays;
}
```

**Paramètre `halfLife`**:
- 30j = commande vieille de 30j a 50% du poids d'une commande d'aujourd'hui
- Ajustable selon besoin

**Implémentation**:
1. Remplacer calcul dans `consumption.service.ts`
2. Ajouter paramètre `useWeighting: boolean` dans config
3. A/B test avec halfLife = [20j, 30j, 45j]

**Impact Attendu**:
- MAPE pour clients avec trends: Réduction 20-30%
- Adaptation plus rapide aux changements
- Impact neutre pour clients stables

**Risques**:
- Plus complexe à comprendre/debugger
- Nécessite minimum 3-4 commandes
- Peut être instable si dernière commande est outlier

**Priorité**: 🟡 **BASSE** - Nice-to-have, impact limité à certains clients

---

### Amélioration 5: Stratégie LOW Confidence Révisée

**Problème adressé**: Calcul LOW basé sur clientReorderWindow peu logique (Problème 5)

**Solution**:
Utiliser heuristique conservative pour produits avec 1 commande.

**Option A - Intervalle par Défaut**:
```typescript
function calculateLowConfidenceConsumption(
  quantity: number,
  clientReorderWindow?: number
): number {
  const DEFAULT_INTERVAL = 60; // 60 jours par défaut (2 mois)
  const interval = clientReorderWindow ?? DEFAULT_INTERVAL;

  // Si clientReorderWindow < 30j, utiliser minimum de 30j pour éviter sur-estimation
  const safeInterval = Math.max(interval, 30);

  return quantity / safeInterval;
}
```

**Option B - Exclure Segment LOW**:
```typescript
// Dans la configuration
lowConfidenceStrategy: 'exclude' // Ne pas proposer produits 1 commande
```

**Recommandation**: Option A avec `DEFAULT_INTERVAL = 60j`

**Implémentation**:
1. Modifier `consumption.service.ts` pour segment LOW
2. Ajouter config `lowConfidenceDefaultInterval: 60`
3. Logger les prédictions LOW pour monitoring

**Impact Attendu**:
- MAPE LOW: Impact neutre à légèrement positif
- Moins de faux positifs pour produits rarement commandés
- Logique plus défendable

**Risques**:
- Si intervalle trop long → sous-estimation → Faux Négatifs
- Nécessite validation empirique

**Priorité**: 🟡 **BASSE** - Fonctionne "assez bien" actuellement

---

### Amélioration 6: Buffer de Sécurité selon Variabilité

**Problème adressé**: Même quantité prédite quelle que soit la variabilité (Problème 6)

**Solution**:
Ajouter marge proportionnelle à la volatilité historique.

**Coefficient de Variation**:
```typescript
function calculateSafetyBuffer(
  quantities: number[],
  baseQuantity: number
): number {
  const mean = quantities.reduce((a, b) => a + b) / quantities.length;
  const variance = quantities.reduce((sum, val) => sum + (val - mean) ** 2, 0) / quantities.length;
  const stdDev = Math.sqrt(variance);
  const cv = stdDev / mean; // Coefficient de variation

  // Buffer = 0% si CV < 0.2, jusqu'à 30% si CV > 0.8
  let bufferPercent = 0;
  if (cv > 0.2) {
    bufferPercent = Math.min((cv - 0.2) * 50, 30); // Max 30%
  }

  return baseQuantity * (1 + bufferPercent / 100);
}

// Dans le calcul final
const baseQuantity = consommation × (targetCoverage + leadTime) - stock;
const finalQuantity = calculateSafetyBuffer(historicalQuantities, baseQuantity);
```

**Implémentation**:
1. Calculer CV dans `pattern-analysis.service.ts`
2. Appliquer buffer dans `replenishment.service.ts`
3. Config `enableSafetyBuffer: true/false`

**Impact Attendu**:
- Recall amélioré pour clients volatiles
- MAPE légèrement augmenté (sur-prédiction volontaire)
- Moins de ruptures de stock

**Risques**:
- Trade-off Precision vs Recall
- Peut augmenter MAPE moyen de 5-10%

**Priorité**: 🟡 **BASSE** - Optimisation fine, à tester après autres améliorations

---

## Configuration Recommandée

### Phase 1 - Quick Wins (Semaine 1)

```yaml
# Config minimale, maximum impact
quantityPrediction:
  outlierDetection:
    enabled: true
    method: "iqr"  # Interquartile Range
    multiplier: 1.5
    minSamples: 4  # Minimum commandes pour IQR

  adaptiveThreshold:
    enabled: true
    regularityLevels:
      high: 0.2      # CV < 0.2 → régulier
      medium: 0.5    # 0.2 < CV < 0.5 → moyen
    thresholdMultipliers:
      high: 0.8      # 15j au lieu de 19j
      medium: 1.0    # 19j (baseline)
      low: 1.2       # 23j pour irréguliers
```

**Objectif**:
- MAE moyen: 48.5 → **~8-12**
- Clients MAPE > 100%: 15+ → **~5**

**Effort**: 2-3 jours dev + 1 jour test

---

### Phase 2 - Corrections Structurelles (Semaine 2-3)

```yaml
quantityPrediction:
  # Phase 1 config...

  stockEstimation:
    method: "buffer"
    bufferMultiplier: 1.2  # Stock initial = lastQuantity × 1.2
    # Alternative: bufferDays: 5  # leadTime

  lowConfidence:
    defaultInterval: 60  # jours
    minInterval: 30      # minimum de sécurité
    useClientReorderWindow: true  # fallback si disponible
```

**Objectif**:
- MAPE médian: 33.3% → **~25%**
- Réduction biais sur-prédiction généralisé

**Effort**: 3-4 jours dev + 2 jours test + backtest

---

### Phase 3 - Optimisations Avancées (Semaine 4+)

```yaml
quantityPrediction:
  # Phase 1+2 config...

  consumption:
    method: "exponential"  # ou "simple" (default)
    halfLife: 30           # jours (si exponential)
    minOrders: 3           # minimum pour exponential

  safetyBuffer:
    enabled: true
    cvThreshold: 0.2       # Appliquer si CV > 0.2
    maxBufferPercent: 30   # Maximum 30% de buffer
```

**Objectif**:
- MAPE pour clients avec trends: -20-30%
- Recall amélioré pour clients volatiles

**Effort**: 4-5 jours dev + 3 jours test + backtest complet

---

## Plan de Validation

### Tests Unitaires

```typescript
describe('Quantity Prediction Improvements', () => {
  describe('Outlier Detection', () => {
    it('should remove outliers using IQR method', () => {
      const quantities = [10, 12, 11, 10, 150, 9, 11]; // 150 = outlier
      const cleaned = removeOutliers(quantities);
      expect(cleaned).not.toContain(150);
      expect(cleaned.length).toBe(6);
    });

    it('should keep all values if < 4 samples', () => {
      const quantities = [10, 150, 12];
      const cleaned = removeOutliers(quantities);
      expect(cleaned).toEqual(quantities);
    });
  });

  describe('Adaptive Threshold', () => {
    it('should reduce threshold for regular clients', () => {
      const regularity = 0.15; // CV < 0.2
      const threshold = getAdaptiveThreshold(regularity);
      expect(threshold).toBe(15); // 19 × 0.8
    });

    it('should increase threshold for irregular clients', () => {
      const regularity = 0.7; // CV > 0.5
      const threshold = getAdaptiveThreshold(regularity);
      expect(threshold).toBe(23); // 19 × 1.2
    });
  });
});
```

### Backtest Complet

**Méthode**: Rejouer les 189 clients CLEAN + 158 clients LOW avec nouvelle config

**Métriques à Comparer**:

| Métrique | Baseline (Actuel) | Phase 1 Target | Phase 2 Target | Phase 3 Target |
|----------|-------------------|----------------|----------------|----------------|
| MAE moyen CLEAN | 48.51 | **< 12** | **< 10** | **< 8** |
| MAE médiane CLEAN | 0.875 | 0.5-1.0 | 0.5-1.0 | 0.5-1.0 |
| MAPE moyen CLEAN | 40.95% | **< 35%** | **< 30%** | **< 25%** |
| MAPE médian CLEAN | 33.33% | 30% | **< 25%** | **< 22%** |
| Clients MAPE > 100% | 15+ | **< 8** | **< 5** | **< 3** |
| MAE moyen LOW | 14.43 | < 15 | < 12 | < 10 |
| MAPE moyen LOW | 34.37% | < 35% | < 30% | < 28% |

**Seuils d'Acceptation**:
- ✅ **Phase 1 validée si**: MAE CLEAN < 15 ET MAPE CLEAN < 35%
- ✅ **Phase 2 validée si**: MAPE médian < 28% ET clients > 100% < 5
- ✅ **Phase 3 validée si**: MAE < 10 ET MAPE < 28% sans dégrader Recall

### Monitoring Production

**Dashboards à créer**:

1. **Distribution MAE/MAPE**
   - Histogramme par tranche (0-5%, 5-10%, 10-25%, 25-50%, 50-100%, >100%)
   - Évolution temporelle

2. **Clients Problématiques**
   - Top 20 pires MAPE
   - Top 20 pires MAE absolu
   - Alertes si nouveau client > seuils

3. **Efficacité des Améliorations**
   - % de prédictions avec outliers exclus
   - Distribution des seuils adaptatifs utilisés
   - Impact du buffer de sécurité

**Alertes**:
- MAE moyen journalier > 20
- > 10 clients avec MAPE > 100% le même jour
- Régression vs baseline sur 7 jours glissants

---

## Données Supplémentaires Nécessaires

### Analyses Complémentaires Recommandées

1. **Segmentation B2B vs B2C**
   - Identifier clients grossistes (volumes élevés, irréguliers)
   - Algorithme séparé pour B2B avec autres heuristiques

2. **Analyse Saisonnalité**
   - Détecter patterns hebdomadaires/mensuels
   - Ajuster consommation selon période de l'année

3. **Corrélations Produits**
   - Produits commandés ensemble (ex: fromage + pain)
   - Prédire quantités relatives

4. **Impact MOQ (Minimum Order Quantity)**
   - Quantifier combien de prédictions sont arrondies au MOQ
   - MAPE "corrigé" si on exclut l'effet MOQ

### Logs à Ajouter

```typescript
interface QuantityPredictionLog {
  clientId: number;
  productId: number;

  // Inputs
  historicalQuantities: number[];
  outlierDetected: boolean;
  outliersRemoved?: number[];

  // Calculs intermédiaires
  rawConsumption: number;
  cleanedConsumption: number;
  regularity: number;
  adaptiveThreshold: number;
  estimatedStock: number;

  // Output
  baseQuantity: number;
  safetyBuffer: number;
  finalQuantity: number;

  // Metadata
  confidenceLevel: 'low' | 'medium' | 'high';
  predictionDate: Date;
}
```

**Utilité**:
- Debugging des prédictions aberrantes
- A/B testing paramètres
- Amélioration continue

---

## Priorisation Finale

### 🔴 Priorité HAUTE (Semaine 1)

1. **Outlier Detection** (Amélioration 1)
   - Impact: MAE 48.5 → ~10 (-80%)
   - Effort: 2 jours
   - ROI: **Très élevé**

2. **Seuil Adaptatif** (Amélioration 2)
   - Impact: MAPE > 100% réduit de 15 → 5
   - Effort: 2-3 jours
   - ROI: **Élevé**

### 🟠 Priorité MOYENNE (Semaine 2-3)

3. **Correction Stock** (Amélioration 3)
   - Impact: MAPE médian -15-25%
   - Effort: 1-2 jours
   - ROI: **Moyen** (impact diffus)

### 🟡 Priorité BASSE (Semaine 4+)

4. **Pondération Temporelle** (Amélioration 4)
   - Impact: MAPE trends -20-30% (clients limités)
   - Effort: 3-4 jours
   - ROI: **Moyen-Faible**

5. **Stratégie LOW** (Amélioration 5)
   - Impact: Logique plus solide, MAPE neutre
   - Effort: 1 jour
   - ROI: **Faible** (déjà performant)

6. **Safety Buffer** (Amélioration 6)
   - Impact: Trade-off Recall vs MAPE
   - Effort: 2 jours
   - ROI: **Faible** (optimisation fine)

---

## Conclusion

### État Actuel (Post-Bugfix)

✅ **Points Forts**:
- MAE médiane excellent (0.875 CLEAN, 0.333 LOW)
- 50% des clients ont MAPE < 33%
- Détection (Precision/Recall) performante après bugfix

❌ **Points Faibles**:
- Outliers explosent MAE moyen (48.5 vs médiane 0.875)
- 15+ clients avec MAPE > 100% (sur-prédiction 2x+)
- Biais systématique de sur-estimation (hypothèse stock = 0)

### Objectif Final

**Cible après 3 phases**:
- MAE moyen: **< 8 unités** (vs 48.5 actuel)
- MAPE moyen: **< 25%** (vs 41% actuel)
- MAPE médian: **< 22%** (vs 33% actuel)
- Clients MAPE > 100%: **< 3** (vs 15+ actuel)

**Moyens**:
- Améliorations algorithmiques simples (pas de ML)
- Configuration adaptative selon profil client
- Validation empirique par backtest

### Next Steps Immédiats

1. **Jour 1-2**: Implémenter Outlier Detection (Amélioration 1)
2. **Jour 3-4**: Implémenter Seuil Adaptatif (Amélioration 2)
3. **Jour 5**: Backtest Phase 1 sur 189+158 clients
4. **Jour 6-7**: Ajustements selon résultats, documentation

**Go/No-Go**: Si Phase 1 backtest atteint MAE < 15 ET MAPE < 35% → Continuer Phase 2

---

## Annexes

### Statistiques Détaillées par Percentile (CLEAN)

| Percentile | Recall | MAPE |
|------------|--------|------|
| P25 | 100% | 12.5% |
| P50 | 100% | 33.33% |
| P75 | 100% | 50.4% |
| P90 | 100% | 83.6% |

**Observation**: Recall parfait (100%) pour 75% des clients → Problème est quantité, pas détection

### Comparaison CLEAN vs LOW vs ALL

| Métrique | CLEAN (2+ cmd) | LOW (1 cmd) | ALL |
|----------|----------------|-------------|-----|
| Clients | 189 | 158 | 247 |
| MAE moyen | 48.51 | 14.43 | 37.10 |
| MAE médiane | 0.875 | 0.333 | 0.638 |
| MAPE moyen | 40.95% | 34.37% | 37.89% |
| MAPE médiane | 33.33% | 16.67% | 26.49% |
| StdDev MAE | 412.0 | 71.6 | 271.0 |

**Paradoxe**: LOW a meilleur MAPE que CLEAN malgré moins de données
**Explication**: CLEAN contient outliers B2B qui explosent les stats

### Exemples de Succès (MAPE < 5%)

```json
Clients avec excellentes prédictions:
- Client 21059 (Chez Lucienne): MAPE = 3.1%, MAE = 0.06
- Client 3514 (LA FAGNARDE): MAPE = 3.6%, MAE = 1.0
- Client 3912 (LEGEND FOOD) LOW: MAPE = 3.4%, MAE = 30.0
- Client 17591 (croquez Local) LOW: MAPE = 3.5%, MAE = 4.3
```

**Caractéristiques communes**:
- Consommation stable (faible CV)
- Intervalles réguliers
- Pas de commandes exceptionnelles
- Volumes moyens (ni trop faible, ni trop élevé)

→ **Le système fonctionne parfaitement pour clients "normaux"**
→ **Focus amélioration = gérer edge cases et outliers**
