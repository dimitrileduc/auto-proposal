# Stock Replenishment Algorithm

## Overview

Calcule les besoins de réapprovisionnement pour éviter les ruptures de stock.

## Algorithme

### 1. Seuil de déclenchement

```
Seuil = TargetCoverage (14j) + LeadTime (5j) = 19 jours
```

### 2. Filtrage

Produits concernés : stock restant < 19 jours

### 3. Calcul des quantités

```typescript
// Si stock > 0 : commander la différence
if (daysUntilStockout > 0) {
  daysToOrder = 19 - daysUntilStockout
}
// Si rupture : commander pour 19 jours
else {
  daysToOrder = 19
}

quantity = daysToOrder * consumptionPerDay
```

### Exemples

| Stock actuel | Action | Quantité |
|-------------|--------|----------|
| 25 jours | Skip | 0 |
| 16 jours | Commander | 3 jours |
| 3 jours | Commander | 16 jours |
| Rupture | Commander | 19 jours |

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