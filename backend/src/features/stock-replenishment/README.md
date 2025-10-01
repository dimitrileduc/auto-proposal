# Stock Replenishment Module

Module d'analyse prédictive pour éviter les ruptures de stock chez les clients.

## Architecture

```
stock-replenishment/
├── stock-replenishment.service.ts   # Orchestrateur principal
├── order-history/
│   ├── order-history.service.ts     # Récupération historique Odoo
│   └── transform.utils.ts           # Groupement par produit
└── utils/
    ├── consumption.utils.ts         # Calcul consommation/jour
    ├── prediction.utils.ts          # Prédiction rupture stock
    └── quantity.utils.ts            # Calcul quantités à commander
```

## Flow

### 1. Récupération historique (order-history)

```typescript
// Récupère 365 jours de commandes du client
const orderHistory = await getProductOrderHistory(clientId, 365);

// Retourne les produits groupés avec leurs commandes
{
  products: [
    {
      product_id: 123,
      product_name: "Tomates",
      orders: [
        { date: "2024-01-15", quantity: 50 },
        { date: "2024-01-01", quantity: 45 },
      ],
    },
  ];
}
```

### 2. Calcul consommation (consumption.utils)

```typescript
// Pour chaque produit: quantité totale / période
consumptionPerDay = totalQuantity / 365;
// Ex: 500 unités en 365j = 1.37 unités/jour
```

### 3. Prédiction rupture (prediction.utils)

```typescript
// Basé sur la dernière commande
daysElapsed = today - lastOrderDate;
stockRemaining = lastQuantity - daysElapsed * consumptionPerDay;
daysUntilStockout = stockRemaining / consumptionPerDay;

// Ex: Commandé 50 unités il y a 10j
// Stock estimé = 50 - (10 * 1.37) = 36.3
// Rupture dans = 36.3 / 1.37 = 26 jours
```

### 4. Décision & Calcul quantités

```typescript
// Seuil critique = 14j (couverture) + 5j (livraison) = 19j

if (daysUntilStockout > 19) {
  // Pas d'action nécessaire
  continue;
}

// Calcul ajusté selon situation:
if (daysUntilStockout > 0) {
  // Stock restant: compléter la différence
  daysToOrder = 19 - daysUntilStockout;
} else {
  // Déjà en rupture: commander pour 19j
  daysToOrder = 19;
}

quantity = daysToOrder * consumptionPerDay;
```

## Exemples

| Situation | Stock estimé | Action    | Calcul         | Quantité |
| --------- | ------------ | --------- | -------------- | -------- |
| Client OK | 25 jours     | Skip      | -              | 0        |
| À risque  | 16 jours     | Commander | (19-16) × 1.37 | 4.11     |
| Critique  | 3 jours      | Commander | (19-3) × 1.37  | 21.92    |
| Rupture   | -10 jours    | Commander | 19 × 1.37      | 26.03    |

## API

### calculateReplenishmentNeeds()

Analyse complète pour un client :

```typescript
const result = await calculateReplenishmentNeeds(
  clientId,     // ID client Odoo
  365           // Jours d'historique
)

// Retourne:
{
  client_id: number,
  products: [{
    product_id: number,
    product_name: string,
    consumption_per_day: number,
    days_until_stockout: number,
    quantity_to_order: number
  }]
}
```

## Configuration

```typescript
// config/auto-proposal.ts
{
  targetCoverage: 14,      // Stock souhaité après livraison
  leadTime: 5,            // Délai livraison
  analysisWindowDays: 365 // Période d'analyse
}
```
