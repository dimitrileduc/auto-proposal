# Système de Détection de Rupture de Stock

## Vue d'ensemble

Le système analyse l'historique de commandes de chaque client pour prédire quels produits risquent une rupture de stock dans les jours à venir. L'objectif est de proposer proactivement les bons produits au bon moment.

## Configuration

### Paramètres principaux
- **analysisWindowDays**: Fenêtre d'historique analysée (90j, 120j, ou 180j) - **Défaut: 120j**
- **targetCoverage**: Couverture de stock visée - **Défaut: 25 jours**
- **leadTime**: Délai de livraison - **Défaut: 5 jours**
- **daysBeforePrediction**: Jours d'avance de la prédiction (1 jour par défaut)

### Seuil de déclenchement
```
Seuil = targetCoverage + leadTime = 25 + 5 = 30 jours
```

Produit proposé si: `jours avant rupture ≤ 30 jours`

## Algorithme de Détection (3 étapes)

### 1. Calcul de la Consommation Quotidienne

**Fichier**: `consumption.utils.ts` → `calculateDailyConsumption()`

#### Produits avec 2+ commandes (segment DEFAULT)

```typescript
// Calcul basé sur l'historique réel
totalQuantity = somme de toutes les quantités commandées
firstOrderDate = date de la première commande
currentDate = date de prédiction

daysSinceFirstOrder = (currentDate - firstOrderDate) en jours
actualDays = min(analysisWindowDays, daysSinceFirstOrder)

consommationQuotidienne = totalQuantity / actualDays
```

**Exemple**:
- Client a commandé: 10 unités il y a 60j, 20 unités il y a 30j, 15 unités il y a 10j
- Window: 90j
- Total: 45 unités sur 60 jours réels
- Consommation = 45 / 60 = 0.75 unités/jour

#### Produits avec 1 seule commande (segment LOW)

```typescript
// Utilise le pattern de réapprovisionnement du client
clientReorderWindow = médiane des intervalles entre commandes de TOUS les produits du client

consommationQuotidienne = totalQuantity / clientReorderWindow
```

**Calcul du clientReorderWindow**:
1. Pour chaque produit du client, calculer les intervalles entre commandes consécutives
2. Agréger tous les intervalles de tous les produits
3. Prendre la médiane de ces intervalles

**Exemple**:
- Produit A commandé 1 fois: 20 unités il y a 15j
- Autres produits du client: intervalles de 30j, 45j, 25j, 35j → médiane = 32.5j
- Consommation = 20 / 32.5 = 0.615 unités/jour

### 2. Estimation du Stock Actuel

**Fichier**: `prediction.utils.ts` → `predictStockStatus()`

```typescript
lastOrder = commande la plus récente du produit
lastOrderDate = date de cette commande
lastQuantity = quantité commandée

daysElapsed = (currentDate - lastOrderDate) en jours

// Stock estimé = dernière quantité - consommation écoulée
estimatedStock = lastQuantity - (daysElapsed × consommationQuotidienne)

// Jours avant rupture
daysUntilStockout = Math.trunc(estimatedStock / consommationQuotidienne)
```

**Exemple**:
- Dernière commande: 30 unités il y a 12 jours
- Consommation: 0.75 unités/jour
- Stock estimé: 30 - (12 × 0.75) = 21 unités
- Jours avant rupture: 21 / 0.75 = 28 jours

### 3. Décision de Proposition

**Fichier**: `client-proposal.task.ts` → ligne 111

```typescript
replenishmentThresholdDays = targetCoverage + leadTime  // 30 jours

if (daysUntilStockout <= replenishmentThresholdDays) {
  // Produit à proposer (True Positive ou False Positive)
} else {
  // Produit non proposé (True Negative ou False Negative)
}
```

**Exemple**:
- Jours avant rupture: 35 jours > 30 jours → Pas proposé
- Jours avant rupture: 25 jours ≤ 30 jours → Proposé

## Impact de la Fenêtre d'Analyse

### Fenêtre courte (90j)
- **Avantage**: Capture les changements récents de comportement
- **Inconvénient**: Moins de données pour les clients à faible fréquence
- **Consommation**: Basée sur période réelle (peut être < 90j si première commande récente)

### Fenêtre longue (180j)
- **Avantage**: Plus de données historiques, lisse les variations
- **Inconvénient**: Peut diluer les changements récents de consommation
- **Consommation**: Moyenne sur période plus longue

### Exemple comparatif

**Client avec accélération récente**:
```
Historique:
- Mois 1-4: 10 unités/mois (40 total)
- Mois 5-6: 30 unités/mois (60 total)

Avec 90j (3 mois):
- Mois 4-6 pris en compte: 10 + 30 + 30 = 70 unités / 90j = 0.78 u/j

Avec 180j (6 mois):
- Tous les mois: 100 unités / 180j = 0.56 u/j

Dernière commande: 30 unités il y a 10 jours
Stock estimé (90j): 30 - (10 × 0.78) = 22.2 unités → 28 jours avant rupture → PAS PROPOSÉ
Stock estimé (180j): 30 - (10 × 0.56) = 24.4 unités → 43 jours avant rupture → PAS PROPOSÉ

Mais si accélération continue:
Stock réel probable: 30 - (10 × 1) = 20 unités → 20 jours avant rupture → DEVRAIT ÊTRE PROPOSÉ
```

**Client stable**:
```
10 unités/mois constant sur 6 mois = 60 total

Avec 90j: 30 / 90 = 0.33 u/j
Avec 180j: 60 / 180 = 0.33 u/j

→ Résultats identiques
```

## Métriques de Performance

### Recall (Sensibilité)
```
Recall = Vrais Positifs / (Vrais Positifs + Faux Négatifs)
```
- **Interprétation**: % de produits réellement commandés qui ont été détectés
- **Bon score**: > 80%
- **Améliorer**: Augmenter le seuil ou la fenêtre d'analyse

### Precision (Précision)
```
Precision = Vrais Positifs / (Vrais Positifs + Faux Positifs)
```
- **Interprétation**: % de produits proposés qui sont réellement commandés
- **Bon score**: > 70%
- **Améliorer**: Diminuer le seuil ou affiner l'algorithme de consommation

### F1-Score
```
F1 = 2 × (Precision × Recall) / (Precision + Recall)
```
- **Interprétation**: Équilibre entre Recall et Precision
- **Bon score**: > 75%

### MAPE (Mean Absolute Percentage Error)
```
Pour chaque produit correctement détecté (True Positive):
  erreur = |quantité_prédite - quantité_réelle| / quantité_réelle × 100%

MAPE = moyenne de toutes les erreurs
```
- **Interprétation**: Erreur moyenne sur les quantités (non prioritaire pour ce système)
- **Bon score**: < 30%

## Segmentation des Clients

### Segment DEFAULT (no-low)
- Produits avec **2+ commandes** dans la fenêtre d'analyse
- Consommation calculée sur historique réel
- Généralement plus stable et prévisible

### Segment LOW
- Produits avec **1 seule commande** dans la fenêtre d'analyse
- Consommation estimée via le clientReorderWindow
- Plus incertain, dépend du pattern général du client

### Segment ALL
- Agrégation des deux segments
- Métrique globale du système

## Limites et Cas Particuliers

### Nouveaux produits
- Pas d'historique dans la fenêtre → Pas de détection possible
- Nécessite au moins 1 commande pour segment LOW
- Nécessite 2+ commandes pour segment DEFAULT

### Saisonnalité
- Non gérée: moyenne simple sur la fenêtre
- Une fenêtre de 90j peut mieux capturer la saison actuelle
- Une fenêtre de 180j dilue l'effet saisonnier

### Commandes exceptionnelles
- Une grosse commande unique peut biaiser la consommation moyenne
- Pas de détection d'outliers dans l'algorithme actuel
- Impact plus fort sur fenêtre courte (90j) que longue (180j)

### Stock initial inconnu
- Système suppose que stock = dernière quantité commandée
- Ne prend pas en compte le stock réel restant
- Erreur si le client avait encore du stock lors de sa dernière commande
