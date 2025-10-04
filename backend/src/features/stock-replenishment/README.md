# Stock Replenishment Module

Module d'analyse prédictive pour éviter les ruptures de stock chez les clients.

---

## Architecture

```
stock-replenishment/
├── stock-replenishment.service.ts   # Orchestrateur principal
├── order-history/
│   ├── order-history.service.ts     # Récupération historique Odoo
│   └── transform.utils.ts           # Groupement par produit
├── utils/
│   ├── consumption.utils.ts         # Calcul consommation/jour
│   ├── prediction.utils.ts          # Prédiction rupture stock
│   ├── quantity.utils.ts            # Calcul quantités (médiane)
│   └── median.utils.ts              # Calcul médiane
└── docs/
    └── QUANTITY-STRATEGY.md         # Stratégie de calcul détaillée
```

---

## Flow complet

### 1. Récupération historique

```typescript
const orderHistory = await getProductOrderHistory(clientId, 365);

// Retourne:
{
  products: [
    {
      product_id: 26,
      product_name: "Mobius Blanche 33cl",
      orders: [
        { date_order: "2024-01-15", quantity: 12 },
        { date_order: "2024-01-01", quantity: 12 },
      ],
    },
  ];
}
```

---

### 2. Calcul consommation (trigger)

```typescript
consumptionPerDay = totalQuantity / daysOfHistory;
```

---

### 3. Prédiction rupture (trigger)

```typescript
daysElapsed = today - lastOrderDate;
stockRemaining = lastQuantity - daysElapsed * consumptionPerDay;
daysUntilStockout = stockRemaining / consumptionPerDay;

// Ex: Commandé 50 unités il y a 10j, consomme 1.37/j
// Stock estimé = 50 - (10 × 1.37) = 36.3
// Rupture dans = 36.3 / 1.37 = 26 jours
```

---

### 4. Décision (trigger)

```typescript
// Seuil = 14j (couverture) + 5j (lead time) = 19j

if (daysUntilStockout > 19) {
  continue; // Skip, stock suffisant
}

// → Risque de rupture détecté
```

---

### 5. Calcul quantité (médiane)

**📖 Voir [QUANTITY-STRATEGY.md](./docs/QUANTITY-STRATEGY.md) pour détails**

```typescript
// Filtrer historique récent (6 mois)
const recentOrders = orders.filter(order => order.date_order >= cutoffDate);

// Calculer selon stratégie médiane
const calculation = calculateQuantityFromHistory(recentOrders);

// Résultat:
{
  quantity: 12,
  metadata: {
    strategy: "median_recent_orders",
    confidence: "high",
    historical_quantities: [10, 12, 11, 12, 12],
    order_count: 5,
    median_value: 12
  }
}
```

---

## Exemple complet

```typescript
// Client commande 12 unités tous les 2 semaines
const result = await calculateReplenishmentNeeds(clientId);

{
  client_id: 3,
  products: [
    {
      product_id: 26,
      product_name: "Mobius Blanche 33cl",
      product_uom: [1, "Units"],
      quantity_to_order: 12,           // ← Médiane de l'historique
      calculation_metadata: {
        strategy: "median_recent_orders",
        confidence: "high",
        historical_quantities: [12, 12, 12, 12, 12],
        order_count: 8,
        median_value: 12
      }
    }
  ]
}
```

---

## Configuration

```typescript
// config/auto-proposal.ts
{
  // Trigger + Quantité (fenêtre unifiée)
  targetCoverage: 14,          // Couverture cible
  leadTime: 5,                 // Délai livraison
  analysisWindowDays: 180,     // Période analyse (6 mois)

  // Quantité (médiane historique)
  quantityStrategy: {
    maxRecentOrderLines: 5,              // 5 dernières lignes
    minOrdersForMediumConfidence: 2,     // ≥2 = Medium
    minOrdersForHighConfidence: 5,       // ≥5 = High
  }
}
```

---

## Documentation

- **[QUANTITY-STRATEGY.md](./docs/QUANTITY-STRATEGY.md)** - Stratégie de calcul des quantités (médiane, 4 niveaux, cas de test)
