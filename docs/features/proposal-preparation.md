# Proposal Preparation

Enrichit les quantités à commander avec les prix historiques et applique la stratégie MOQ.

## Objectif

Prendre l'output du calcul de stock replenishment et ajouter:
1. **Tarification**: Prix unitaire du dernier achat
2. **MOQ adjustment**: Augmenter les quantités pour atteindre seuil de commande minimum

## Flux

```mermaid
flowchart LR
    A["Quantités<br/>(stock-replenishment)"] --> B["Enrichissement<br/>Prix Historiques"]
    B --> C["Calcul<br/>Montants"]
    C --> D{\"Total >= MOQ?\"}
    D -->|Non| E["Ajustement MOQ<br/>(round-robin)"]
    D -->|Oui| F["Proposal Finale"]
    E --> F
```

## Entrée / Sortie

**Fonction principale:**
```typescript
prepareProposal(
  stockReplenishment: StockReplenishmentResult,  // Output de stock-replenishment
  odooClient?: OdooClient,
  mode?: "historyPriceForClient" | "currentPriceForClient",  // Default: history
  minimumOrderAmount?: number                     // Default: 300 EUR
): ProposalPreparationResult  // Synchrone (pas Promise)
```

**Résultat:**
```typescript
{
  client_id: number;
  products: {
    product_id: number;
    product_name: string;
    quantity_to_order: number;
    current_price_unit: number;     // EUR HT (prix historique)
    subtotal: number;               // quantity × price
    moq_adjustment: number;         // Units ajoutés pour MOQ
    confidence: 'low' | 'medium' | 'high';
  }[];
  total_amount: number;             // EUR HT final (après MOQ)
  moq_adjustment_applied: boolean;
  adjustment_details?: {
    original_total: number;         // Avant MOQ
    gap_filled: number;             // EUR ajoutés
    products_adjusted: {
      product_id: number;
      units_added: number;
      new_quantity: number;
    }[]
  };
}
```

## Configuration

MOQ (Minimum Order Quantity) threshold:
```typescript
moqMinimum: 300  // EUR (Default)
```

## Cas d'usage

### 1. Préparation standard

```typescript
const stockReplenishment = await calculateReplenishmentNeeds({ clientId: 123 });

const proposal = prepareProposal(
  stockReplenishment,
  undefined,
  "historyPriceForClient",  // Mode pricing
  300                       // MOQ minimum
);
// → Proposal avec prix historique + MOQ appliqué
```

### 2. Stratégie MOQ (Round-robin)

Exemple: Total 250 EUR, MOQ 300 EUR, Gap 50 EUR

Trier produits par: **Order frequency DESC → Confidence DESC**

Round-robin +1 unité jusqu'à atteindre gap:

```
Iteration 1: P1 (freq=5, high) → +1 unit → +10 EUR → Total 260
Iteration 2: P2 (freq=2, med) → +1 unit → +20 EUR → Total 280
Iteration 3: P3 (freq=1, low) → +1 unit → +25 EUR → Total 305 ✓ STOP
```

Résultat:
```typescript
adjustment_details: {
  original_total: 250,
  gap_filled: 55,
  products_adjusted: [
    { product_id: 1, units_added: 1, new_quantity: 11 },
    { product_id: 2, units_added: 1, new_quantity: 6 },
    { product_id: 3, units_added: 1, new_quantity: 5 }
  ]
}
```

### 3. Vérifier ajustement MOQ

```typescript
const proposal = prepareProposal(stockReplenishment);

if (proposal.moq_adjustment_applied) {
  console.log(`MOQ applied: ${proposal.adjustment_details.gap_filled} EUR added`);
  console.log(`Products touched: ${proposal.adjustment_details.products_adjusted.length}`);
}
```

## Tarification

### Mode: `historyPriceForClient` (Default)

Utilise le **prix unitaire du dernier order** du client:
```typescript
current_price_unit = lastOrder.price_unit
```

### Mode: `currentPriceForClient` (Non-implémenté)

**Limitation Odoo v17**: L'API Odoo v17 n'expose pas le calcul des pricelist. Pour utiliser les prix actuels il faudrait:
1. Module Odoo custom wrappant `_get_products_price()`
2. OU créer une sale.order.line temporaire et récupérer le prix calculé
3. OU répliquer la logique pricelist côté backend (déconseillé)

**Fallback**: Actuellement, le mode `currentPriceForClient` revient automatiquement à `historyPriceForClient` avec un warning.

## Intégration

Utilisé par:
- **[Client Proposal task](../tasks/client-proposal.md)** - Étape 2
- **[Proposal Generation](./proposal-generation.md)** - Input

Voir aussi:
- **[Stock Replenishment](./stock-replenishment.md)** - Étape précédente
- **[Proposal Generation](./proposal-generation.md)** - Étape suivante

---

**Source**: `backend/src/features/proposal-preparation/`
