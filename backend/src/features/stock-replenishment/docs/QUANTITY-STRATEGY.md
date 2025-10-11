# Stratégie de Calcul des Quantités

## Principe

Proposer des quantités basées sur l'historique réel du client.

---

## Stratégie à 4 niveaux

| Lignes < 6 mois | Quantité proposée       | Confiance | Stratégie            |
| --------------- | ----------------------- | --------- | -------------------- |
| 0               | Skip                    | -         | -                    |
| 1               | Répéter cette quantité  | Low       | single_recent_order  |
| 2-4             | Médiane de toutes       | Medium    | median_recent_orders |
| 5+              | Médiane des 5 dernières | High      | median_recent_orders |

---

## Pourquoi la médiane ?

**Ignore les outliers** :

```
Historique: [10, 12, 11, 100, 12]  (événement spécial à 100)
Moyenne: 29 ❌
Médiane: 12 ✅
```

---

## Pourquoi 6 mois ?

| Rythme client | Jours entre commandes | Commandes en 6 mois | Stratégie |
| ------------- | --------------------- | ------------------- | --------- |
| Très fréquent | 14 jours              | ~12 commandes       | High      |
| Fréquent      | 21 jours              | ~8 commandes        | High      |
| Moyen         | 30 jours              | 6 commandes         | High      |
| Rare          | 36 jours              | 5 commandes         | High      |
| Très rare     | 60 jours              | 3 commandes         | Medium    |

---

## Pourquoi les 5 dernières ?

**Capte l'évolution récente** :

```
Historique: [10, 10, 15, 20, 25, 30, 35, 40, 45, 50]
Médiane toutes: 27.5 ❌
Médiane 5 dernières: 40 ✅ (suit la tendance actuelle)
```

---

## Configuration

```typescript
// config/auto-proposal.ts
analysisWindowDays: 180,  // 6 mois - fenêtre unifiée (consommation + quantité)

quantityStrategy: {
  maxRecentOrderLines: 5,              // Limiter aux 5 dernières
  minOrdersForMediumConfidence: 2,     // ≥2 = Medium
  minOrdersForHighConfidence: 5,       // ≥5 = High
}
```

---

## Cas de test

### ✅ Cas 1: Client stable régulier

```
Historique: [12, 12, 12, 12, 12, 12, 12, 12]
→ Quantité: 12 | Confiance: High
```

### ✅ Cas 2: Client avec commande exceptionnelle

```
Historique: [10, 12, 11, 12, 10, 100, 12, 11, 12, 10]
5 dernières: [10, 12, 11, 12, 100]
→ Quantité: 12 | Confiance: High
```

Médiane ignore l'outlier à 100.

### ✅ Cas 3: Client en croissance

```
Historique: [10, 10, 15, 15, 20, 25, 30, 35, 40, 45]
5 dernières: [45, 40, 35, 30, 25]
→ Quantité: 35 | Confiance: High
```

Capte la tendance récente.

### ✅ Cas 4: Client avec peu de commandes

```
Historique: [100, 105, 98]
→ Quantité: 100 | Confiance: Medium
```

### ✅ Cas 5: Client rare stable

```
Historique: [100, 100, 100]
→ Quantité: 100 | Confiance: Medium
```

### ✅ Cas 6: Changement de pattern

```
Historique: [10, 10, 10, 10, 50, 50, 50, 50, 50]
5 dernières: [50, 50, 50, 50, 50]
→ Quantité: 50 | Confiance: High
```

### ✅ Cas 7: Une seule ligne de commande

```
Historique: [75]
→ Quantité: 75 | Confiance: Low
```

### ✅ Cas 8: Aucune ligne de commande

```
Historique: []
→ Quantité: null | Stratégie: Skip
```

---

## API Response

```json
{
  "product_id": 26,
  "product_name": "Mobius Blanche 33cl",
  "product_uom": [1, "Units"],
  "quantity_to_order": 12,
  "calculation_metadata": {
    "strategy": "median_recent_orders",
    "confidence": "high",
    "historical_quantities": [10, 12, 11, 12, 12],
    "order_count": 5,
    "median_value": 12
  }
}
```
