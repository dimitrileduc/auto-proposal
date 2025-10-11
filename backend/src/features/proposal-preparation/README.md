# Proposal Preparation (Phase 2.5)

Module de préparation de proposition de commande avec pricing et ajustement MOQ.

## 🎯 Objectif

Transformer les résultats de réapprovisionnement (Phase 2) en proposition de commande validée avec :
- Prix actuels via pricelist Odoo
- Ajustement des quantités pour atteindre le MOQ global (300€)

## 📦 Inputs & Outputs

### Input
`StockReplenishmentResult` depuis Phase 2 :
```typescript
{
  client_id: 81,
  products: [
    {
      product_id: 123,
      quantity_to_order: 5,  // Calculé par médiane (Phase 2)
      order_history: [...],
      // ...
    }
  ]
}
```

### Output
`ProposalPreparationResult` :
```typescript
{
  client_id: 81,
  pricelist_id: 2,
  products: [
    {
      product_id: 123,
      quantity_to_order: 7,           // Ajusté si nécessaire
      current_price_unit: 12.50,      // Prix actuel (pricelist)
      subtotal: 87.50,                // quantity × price
      moq_adjustment: 2,              // +2 unités pour MOQ
      // ... (hérite de ProductStockStatus)
    }
  ],
  total_amount: 312.50,
  moq_adjustment_applied: true,
  adjustment_details: {
    original_total: 250.00,
    minimum_required: 300.00,
    gap_filled: 62.50,
    products_adjusted: 3
  }
}
```

## 🔄 Workflow

```
┌─────────────────────────────────────────────────────────────┐
│ Phase 2: Stock Replenishment                                │
│ → quantity_to_order calculée par médiane                    │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ ÉTAPE 1: Enrichissement avec prix historiques               │
│ enrichWithHistoryPrices(products)                           │
│                                                              │
│ MODE historyPriceForClient: order_history[0].price_unit     │
│ MODE currentPriceForClient: NON IMPLÉMENTÉ (voir section)   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ ÉTAPE 2: Calcul du total                                    │
│ Total = Σ (quantity_to_order × current_price_unit)          │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
                  Total < 300€ ?
                     │
         ┌───────────┴───────────┐
         │ OUI                   │ NON
         ▼                       ▼
┌─────────────────────┐   ┌──────────────────┐
│ ÉTAPE 3:            │   │ Retourne résultat│
│ Ajustement MOQ      │   │ sans ajustement  │
│ (round-robin)       │   │                  │
└─────────────────────┘   └──────────────────┘
```

## 📋 UoM (Unit of Measure) - Notes importantes

### ✅ Pas de conversion nécessaire

Les quantités récupérées d'Odoo sont **déjà dans le bon UoM** (TU6, TU12, TU20, etc.).

**Exemple concret :**
```json
{
  "product_id": 13086,
  "product_name": "[LV160] LV Tartinade Aubergine 180g",
  "product_uom": [27, "TU6"],
  "quantity_to_order": 2,
  "order_history": [
    { "quantity": 3 },  // = 3 TU6 (3 packs de 6)
    { "quantity": 2 }   // = 2 TU6 (2 packs de 6)
  ]
}
```

**Signification :**
- `quantity: 2` = **2 packs TU6** (pas 2 unités individuelles)
- `current_price_unit: 14.46€` = **prix par TU6** (prix du pack)
- `subtotal: 28.92€` = 2 TU6 × 14.46€

### 🔍 Vérification via Odoo MCP

```bash
# Rechercher un produit
mcp__odoo__search_records model="product.product" domain=[["id","=",13086]]

# Résultat
{
  "id": 13086,
  "name": "[LV160] LV Tartinade Aubergine 180g",
  "uom_id": [27, "TU6"],  # UoM natif du produit
  # ...
}
```

### 📦 UoM disponibles dans le système

| UoM ID | Code  | Description              | Exemple Produit                    |
|--------|-------|--------------------------|-------------------------------------|
| 27     | TU6   | Pack de 6 unités         | Tartinade 180g                     |
| 2      | TU12  | Pack de 12 unités        | Cidre 330ml                        |
| 33     | TU10  | Pack de 10 unités        | Chips 125g                         |
| 77     | TU20  | Pack de 20 unités        | Thé 330ml                          |
| 1      | TU1   | Unité individuelle       | Consigne casier                    |

**Conclusion :** Notre système n'a **aucune conversion UoM à faire**. Odoo gère tout nativement.

## 🔧 Ajustement MOQ - Algorithme Round-Robin

### Stratégie

1. **Trier** les produits par :
   - Fréquence de commande (`order_count`) DESC
   - Confiance (`high` > `medium` > `low`) en cas d'égalité

2. **Distribuer** le gap en round-robin :
   - Ajouter +1 unité au produit prioritaire
   - Recalculer le gap
   - Si gap > 0 → passer au produit suivant
   - **Arrêt immédiat** dès que gap comblé (pas de tour complet obligatoire)

### Exemple détaillé

**Situation initiale :**
- Gap à combler : 55€
- Produits triés :
  - A : 5 commandes, high confidence, 20€/unité
  - B : 3 commandes, medium confidence, 15€/unité
  - C : 1 commande, low confidence, 10€/unité

**Exécution :**
```
Iteration 1: A +1 (20€) → Gap restant: 35€ → Continue
Iteration 2: B +1 (15€) → Gap restant: 20€ → Continue
Iteration 3: C +1 (10€) → Gap restant: 10€ → Continue
Iteration 4: A +1 (20€) → Gap restant: -10€ → STOP ✅
```

**Résultat :**
- A : +2 unités (produit le plus commandé reçoit le plus)
- B : +1 unité
- C : +1 unité
- **Total ajouté** : 55€ (avec dépassement de 10€)

**Note importante** : Le 2ème tour n'est PAS complété. B et C ne reçoivent pas leur 2ème unité car le gap est déjà comblé.

## 🏗️ Architecture

```
proposal-preparation/
├── README.md                           # Cette doc
├── proposal-preparation.service.ts     # Orchestrateur principal
├── proposal-preparation.types.ts       # Types TypeScript
│
├── pricing/
│   ├── pricing.service.ts             # Enrichissement prix (stub isolation)
│   └── pricelist.utils.ts             # Récupération pricelist (stub isolation)
│
├── moq/
│   ├── moq-adjustment.service.ts      # Logique ajustement MOQ
│   └── adjustment-strategy.utils.ts   # Tri des produits
│
└── __tests__/
    ├── test-utils.ts                  # Chargement fichiers JSON test
    └── proposal-preparation.test.ts   # Tests d'intégration
```

## 🧪 Tests

### Tests manuels

```bash
# Tester un client spécifique
pnpm tsx scripts/test-proposal-preparation.ts 81

# Tester tous les clients réels
pnpm tsx scripts/test-all-clients.ts

# Tester les edge cases
pnpm tsx scripts/test-edge-cases.ts
```

### Edge cases couverts

- ✅ Très faible montant (50€ → 300€)
- ✅ Multiple produits avec prix différents
- ✅ Tri par order_count
- ✅ Juste en dessous de 300€ (295€)
- ✅ Exactement 300€ (pas d'ajustement)
- ✅ Tri par confiance (égalité order_count)

## 🚀 Usage

### Dans l'orchestrateur principal

```typescript
import { prepareProposal } from "./features/proposal-preparation/proposal-preparation.service";
import { autoProposalConfig } from "./config/auto-proposal";

// Récupérer résultat Phase 2
const stockReplenishment = await analyzeStockReplenishment(clientId);

// Préparer proposition avec pricing + MOQ
const proposal = await prepareProposal(
  stockReplenishment,
  undefined,                                    // odooClient (non utilisé en mode historyPriceForClient)
  "historyPriceForClient",                     // mode de pricing
  autoProposalConfig.pricing.minimumOrderAmount // 300€
);

console.log(`Total: ${proposal.total_amount.toFixed(2)}€`);
console.log(`MOQ appliqué: ${proposal.moq_adjustment_applied}`);
```

### Valeurs par défaut

Si aucun paramètre n'est fourni, les valeurs par défaut sont :
- `mode = "historyPriceForClient"` (prix historiques du client)
- `minimumOrderAmount = 300` (euros)

```typescript
// Utilise les valeurs par défaut
const proposal = await prepareProposal(stockReplenishment);
```

## 🔄 Modes de pricing

### MODE `historyPriceForClient` (implémenté)

Utilise `order_history[0].price_unit` (prix de la dernière commande validée du client).

**Ce que contient le prix historique :**
- ✅ Pricelist du client (règles tarifaires négociées)
- ✅ Palier de quantité de **l'ancienne commande**
- ✅ Promos produit actives **au moment de l'ancienne commande**
- ❌ **Exclut** discount manuel appliqué sur la ligne de commande

**Limitations :**
- Ne reflète pas les promos **actuellement actives** (peuvent avoir changé/expiré)
- Palier de quantité basé sur l'**ancienne quantité**, pas la **nouvelle proposée**

**Exemple du problème :**
- Dernière commande : 5 unités → prix 10€/unité (palier 1-10 unités)
- Nouvelle proposition : 20 unités → **devrait être** 8€/unité (palier 11-50 unités)
- **Mais on utilise** 10€/unité car c'est le prix de l'historique avec l'ancien palier

### MODE `currentPriceForClient` (NON IMPLÉMENTÉ)

**Pourquoi c'est bloqué :**

L'API Odoo v17 ne permet pas de calculer les prix avec pricelist via XML-RPC :
- Méthodes publiques (`price_get`, `get_product_price`) : supprimées depuis Odoo v16+
- Méthode privée `_get_products_price` : existe mais non callable via API externe
- Prix de base (`list_price`) : volontairement mis à 99999.99€ (modèle 100% pricelist)

**Solutions pour implémenter :**

1. **Module custom Odoo** (recommandé) - Créer un wrapper public pour `_get_products_price()`
2. **sale.order.line temporaire** - Créer draft order, lire prix calculés, supprimer
3. **Calcul backend** - Répliquer logique pricelist (très complexe)

**Contournement actuel :**

Le mode `currentPriceForClient` fait un fallback sur `historyPriceForClient` + warning console,
en attendant l'implémentation d'une des solutions ci-dessus.

## 📊 Configuration

Voir `config/auto-proposal.ts` :

```typescript
pricing: {
  minimumOrderAmount: 300,  // MOQ global en euros
},
testing: {
  defaultClientId: 3,        // Arthur Schwaiger (demo client)
  includeDraftOrders: true,  // Include draft orders in analysis
}
```

## 🔗 Références

- **Phase 1** : Detection stockout → `features/stock-replenishment/stockout-detection/`
- **Phase 2** : Calcul quantités → `features/stock-replenishment/quantity-calculation/`
- **Phase 2.5** : Pricing + MOQ → `features/proposal-preparation/` (ce module)
- **Doc système** : `/docs/AUTO-PROPOSAL-SYSTEM.md`
