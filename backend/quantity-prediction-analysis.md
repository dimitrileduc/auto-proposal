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

**Note**: `clientReorderWindow` = médiane des intervalles entre toutes les commandes du client (tous produits confondus)

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

## Hypothèses sur les Causes

Nous avons identifié plusieurs **hypothèses** sur les causes possibles, mais nous ne sommes pas certains de leur pertinence ni de comment les adresser:

### 🤔 Hypothèse 1: Outliers de Volume Non Gérés

**Observation**: Quelques clients (3-5) ont des erreurs de **milliers d'unités** (ex: 5370 unités d'erreur pour LEGEND FOOD).

**Questionnement**:
- Ces commandes exceptionnelles sont-elles des anomalies à exclure ou des patterns B2B légitimes?
- L'algorithme utilise une moyenne simple (`totalQuantity / actualDays`) qui est sensible aux pics
- Faut-il traiter différemment les clients grossistes/B2B des clients réguliers?

**Impact**: Ces quelques cas explosent le MAE moyen (48.51) alors que la médiane est excellente (0.875).

---

### 🤔 Hypothèse 2: Sur-Estimation Systématique

**Observation**: 15+ clients avec MAPE > 100% (nous recommandons 2x à 5x trop de quantité).

**Questionnement**:
- Le seuil fixe de 19 jours (`targetCoverage 14j + leadTime 5j`) est-il adapté à tous les clients?
- Certains clients ont peut-être des cycles plus courts/longs
- La consommation moyenne peut être faussée par des périodes de forte activité ponctuelles
- Comment détecter et gérer la saisonnalité ou les tendances?

**Impact**: Risque de gaspillage de produits périssables, perte de confiance client.

---

### 🤔 Hypothèse 3: Estimation du Stock Initial

**Observation**: Le MAPE médian de 33.3% semble élevé même pour des clients stables.

**L'algorithme actuel suppose**:
```typescript
stock = lastQuantity - (daysElapsed × consommation)
```

Cela assume que le client avait **0 stock** avant la dernière commande. Or:
- Si le client avait du stock résiduel lors de la dernière commande, notre estimation de stock actuel est fausse
- Cela conduit à sur-estimer la quantité nécessaire

**Questionnement**:
- Comment estimer le stock résiduel probable lors de la dernière commande?
- Existe-t-il des signaux dans l'historique de commandes qui révèlent le comportement de réapprovisionnement?

---

### 🤔 Hypothèse 4: Pondération Temporelle

**Observation**: Les commandes vieilles de 120 jours ont le même poids que celles d'hier.

**Questionnement**:
- Si un client change sa consommation récemment (ex: baisse d'activité), l'algorithme met du temps à s'adapter
- Faut-il donner plus de poids aux commandes récentes?
- Comment détecter les tendances (hausse/baisse de consommation)?

**Exemple théorique**:
```
Client avec consommation baissière récente:
  Jours 1-60: 10 unités/jour
  Jours 61-120: 5 unités/jour

  Moyenne simple = 7.5 u/j
  Consommation réelle actuelle = 5 u/j
  → Sur-estimation de 50%
```

---

### 🤔 Hypothèse 5: Calcul pour Produits à 1 Commande (LOW)

**Observation**: Paradoxalement, le segment LOW (1 commande) performe mieux que CLEAN.

**L'algorithme LOW utilise**:
```typescript
consommation = totalQuantity / clientReorderWindow
```

Où `clientReorderWindow` est la médiane des intervalles entre **toutes** les commandes du client (tous produits confondus).

**Questionnement**:
- Est-il logique d'utiliser le rythme de commande global du client pour un produit commandé une seule fois?
- Si le client commande le produit A tous les 30j, mais le produit B une seule fois il y a 90j, peut-on vraiment supposer que B sera recommandé selon le même cycle que A?
- Le fait que ça fonctionne "par hasard" (34.4% MAPE) est-il un indicateur de quelque chose?

---

### 🤔 Hypothèse 6: Gestion de la Variabilité

**Observation**: L'algorithme prédit la même quantité qu'un client soit stable ou volatile.

**Questionnement**:
- Un client qui commande toujours 10±1 unités est prévisible
- Un client qui commande entre 5 et 50 unités est imprévisible
- Faut-il ajouter un buffer de sécurité proportionnel à la volatilité historique?
- Quel est le trade-off acceptable entre précision (MAPE) et couverture (éviter les ruptures)?

---

## Données Complémentaires Disponibles

Pour vous aider à analyser le problème, nous pouvons fournir:

### Données Historiques Détaillées
- Historique complet des commandes (client, produit, date, quantité) sur 120+ jours
- Métriques par client: intervalles entre commandes, variabilité des quantités, coefficient de variation
- Distribution des volumes de commande (histogrammes par client/produit)

### Cas d'Usage Spécifiques
- Détails complets sur les 15+ clients avec MAPE > 100%
- Détails sur les 3 outliers de volume (LEGEND FOOD, ZELECTED FOODS, AVEVE BV)
- Exemples de clients "parfaits" (MAPE < 5%) pour comparaison

### Analyses Complémentaires
- Segmentation B2B vs B2C (si nous savons comment l'identifier)
- Patterns saisonniers (hebdomadaires, mensuels, annuels)
- Corrélations entre produits (produits commandés ensemble)
- Impact du MOQ (Minimum Order Quantity) sur les arrondis

---

## Ce Que Nous Recherchons

Nous avons besoin de **pistes d'amélioration** sur:

1. **Priorité HAUTE**:
   - Comment gérer les outliers de volume sans perdre d'information légitime sur les clients B2B?
   - Comment réduire les 15+ cas de sur-estimation massive (MAPE > 100%)?
   - L'hypothèse de stock initial = 0 est-elle problématique? Comment mieux l'estimer?

2. **Priorité MOYENNE**:
   - Faut-il pondérer temporellement les commandes? Si oui, quelle méthode?
   - Le seuil de 19 jours doit-il être adaptatif? Selon quels critères?
   - Comment différencier clients stables vs volatiles dans le calcul?

3. **Priorité BASSE**:
   - Le calcul LOW (utilisant `clientReorderWindow`) est-il fondamentalement incorrect?
   - Comment détecter et intégrer la saisonnalité?
   - Faut-il ajouter des buffers de sécurité? Selon quelle logique?

### Questions Spécifiques

- **Question méthodologique**: Notre approche d'analyse (métriques, segmentation) est-elle appropriée?
- **Question statistique**: Y a-t-il des méthodes statistiques standards pour ces types de prédictions?
- **Question pratique**: Quels sont les quick wins réalistes pour améliorer rapidement le MAPE médian de 33% vers 20-25%?
- **Question architecturale**: Faut-il complètement revoir l'algorithme ou l'améliorer progressivement?

---

## Annexes

### Statistiques Détaillées par Percentile (CLEAN)

| Percentile | Recall | MAPE |
|------------|--------|------|
| P25 | 100% | 12.5% |
| P50 | 100% | 33.33% |
| P75 | 100% | 50.4% |
| P90 | 100% | 83.6% |

**Observation**: Recall parfait (100%) pour 75% des clients → Le problème est la quantité, pas la détection.

### Comparaison CLEAN vs LOW vs ALL

| Métrique | CLEAN (2+ cmd) | LOW (1 cmd) | ALL |
|----------|----------------|-------------|-----|
| Clients | 189 | 158 | 247 |
| MAE moyen | 48.51 | 14.43 | 37.10 |
| MAE médiane | 0.875 | 0.333 | 0.638 |
| MAPE moyen | 40.95% | 34.37% | 37.89% |
| MAPE médiane | 33.33% | 16.67% | 26.49% |
| StdDev MAE | 412.0 | 71.6 | 271.0 |

**Paradoxe**: LOW a un meilleur MAPE que CLEAN malgré moins de données. Explication probable: CLEAN contient des outliers B2B qui explosent les stats.

### Exemples de Succès (MAPE < 5%)

Clients avec d'excellentes prédictions:
- Client 21059 (Chez Lucienne): MAPE = 3.1%, MAE = 0.06
- Client 3514 (LA FAGNARDE): MAPE = 3.6%, MAE = 1.0
- Client 3912 (LEGEND FOOD) LOW: MAPE = 3.4%, MAE = 30.0
- Client 17591 (croquez Local) LOW: MAPE = 3.5%, MAE = 4.3

**Caractéristiques communes**:
- Consommation stable (faible coefficient de variation)
- Intervalles réguliers entre commandes
- Pas de commandes exceptionnelles
- Volumes moyens (ni trop faible, ni trop élevé)

**Conclusion**: Le système fonctionne parfaitement pour les clients "normaux". Le défi est de gérer les edge cases et outliers.
