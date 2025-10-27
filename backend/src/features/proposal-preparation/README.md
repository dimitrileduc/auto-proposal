# Proposal Preparation

## 🎯 Rôle

Enrichit les produits à commander avec les prix et ajuste les quantités pour atteindre le montant minimum de commande (MOQ global de 300€).

## 📦 Inventaire des Composants

### Fichier: `proposal-preparation.service.ts`

**Description:** Orchestrateur principal qui enrichit les produits avec les prix historiques et ajuste les quantités pour atteindre le MOQ de 300€.

<details><summary>Voir l'implémentation</summary>

```typescript
export function prepareProposal(
  stockReplenishment: StockReplenishmentResult,
  odooClient?: OdooClient,
  mode: "historyPriceForClient" | "currentPriceForClient" = "historyPriceForClient",
  minimumOrderAmount: number = autoProposalConfig.pricing.minimumOrderAmount
): ProposalPreparationResult {
  const { client_id, products } = stockReplenishment;

  // Étape 1: Enrichir avec prix
  let productsWithPrices;

  switch (mode) {
    case "historyPriceForClient":
      // Utilise le prix historique (price_unit de la dernière commande)
      productsWithPrices = enrichWithHistoryPrices(products);
      break;

    case "currentPriceForClient":
      // ⚠️ NON IMPLÉMENTÉ - Limitation API Odoo v17
      // Fallback sur prix historiques
      productsWithPrices = enrichWithHistoryPrices(products);
      console.warn(
        `Mode 'currentPriceForClient' non implémenté, utilisation de 'historyPriceForClient' en fallback`
      );
      break;

    default:
      productsWithPrices = enrichWithHistoryPrices(products);
  }

  // Étape 2: Calculer le total initial
  const originalTotal = productsWithPrices.reduce((sum, p) => sum + p.subtotal, 0);

  // Étape 3: Ajuster si total < MOQ
  let moqAdjustmentApplied = false;
  let adjustmentDetails;

  if (originalTotal < minimumOrderAmount) {
    productsWithPrices = adjustForMinimumOrder(
      productsWithPrices,
      originalTotal,
      minimumOrderAmount
    );

    const finalTotal = productsWithPrices.reduce((sum, p) => sum + p.subtotal, 0);

    const productsAdjusted = productsWithPrices.filter((p) => p.moq_adjustment > 0).length;

    moqAdjustmentApplied = true;
    adjustmentDetails = {
      original_total: originalTotal,
      minimum_required: minimumOrderAmount,
      gap_filled: finalTotal - originalTotal,
      products_adjusted: productsAdjusted,
    };
  }

  const totalAmount = productsWithPrices.reduce((sum, p) => sum + p.subtotal, 0);

  return {
    client_id,
    products: productsWithPrices,
    total_amount: totalAmount,
    moq_adjustment_applied: moqAdjustmentApplied,
    adjustment_details: adjustmentDetails,
  };
}
```

**Flow en 3 étapes:**
1. Enrichissement avec prix (historiques ou actuels)
2. Calcul du total initial
3. Ajustement MOQ si total < 300€

</details>

---

### Fichier: `pricing/pricing.service.ts`

**Description:** Enrichit les produits avec les prix historiques extraits de la dernière commande validée.

<details><summary>Voir l'implémentation</summary>

```typescript
export function enrichWithHistoryPrices(
  products: ProductStockStatus[]
): ProductWithCurrentPrice[] {
  return products.map((product) => {
    // Prendre le price_unit de la commande la plus récente
    // Note: order_history est trié par date décroissante dans stock-analysis
    const historicalPrice = product.order_history[0]?.price_unit || 0;

    return {
      ...product,
      current_price_unit: historicalPrice,
      subtotal: product.quantity_to_order * historicalPrice,
      moq_adjustment: 0,
    };
  });
}
```

**Ce que contient le prix historique:**
- Pricelist du client (règles tarifaires négociées)
- Prix au moment de la dernière commande validée
- Promotions relatives à la dernière commande

**Ce qu'il ne contient PAS:**
- Promotions actuelles (peuvent avoir changé)
- Paliers de quantité actuels (basés sur l'ancienne quantité)

</details>

---

### Fichier: `moq/moq-adjustment.service.ts`

**Description:** Ajuste les quantités via algorithme round-robin pour atteindre le MOQ global de 300€.

<details><summary>Voir l'implémentation</summary>

```typescript
export function adjustForMinimumOrder(
  products: ProductWithCurrentPrice[],
  currentTotal: number,
  minimumOrder: number
): ProductWithCurrentPrice[] {
  const gap = minimumOrder - currentTotal;

  // Pas besoin d'ajustement si déjà au-dessus du MOQ
  if (gap <= 0) {
    return products.map((p) => ({ ...p, moq_adjustment: 0 }));
  }

  // Trier par fréquence de commande + confiance
  const sortedProducts = sortByOrderFrequencyAndConfidence(products);

  // Initialiser moq_adjustment à 0 pour tous les produits
  const adjustedProducts = products.map((p) => ({ ...p, moq_adjustment: 0 }));

  let remainingGap = gap;
  let currentIndex = 0;
  let iterations = 0;
  const maxIterations = 10000; // Sécurité anti-boucle infinie

  // Loop round-robin: ajouter +1 unité à chaque tour
  while (remainingGap > 0 && iterations < maxIterations) {
    const sortedProduct = sortedProducts[currentIndex];

    // Trouver ce produit dans adjustedProducts
    const adjustedProduct = adjustedProducts.find(
      (p) => p.product_id === sortedProduct.product_id
    )!;

    // Ajouter +1 unité
    adjustedProduct.quantity_to_order += 1;
    adjustedProduct.subtotal += adjustedProduct.current_price_unit;
    adjustedProduct.moq_adjustment += 1;

    remainingGap -= adjustedProduct.current_price_unit;

    // Passer au produit suivant (round-robin)
    currentIndex = (currentIndex + 1) % sortedProducts.length;
    iterations++;
  }

  return adjustedProducts;
}
```

**Stratégie round-robin avec arrêt immédiat:**
1. Trier les produits par fréquence (DESC) puis confiance (DESC)
2. Ajouter +1 unité au premier produit, recalculer le gap
3. Si gap > 0: passer au produit suivant. Si gap ≤ 0: STOP
4. Répéter en boucle jusqu'à combler le gap

**IMPORTANT:** L'arrêt se fait immédiatement dès que le gap est comblé, même au milieu d'un tour.

</details>

---

### Fichier: `moq/adjustment-strategy.utils.ts`

**Description:** Trie les produits par fréquence de commande (DESC) puis confiance (DESC) pour prioriser les ajustements MOQ.

<details><summary>Voir l'implémentation</summary>

```typescript
export function sortByOrderFrequencyAndConfidence(
  products: ProductWithCurrentPrice[]
): ProductWithCurrentPrice[] {
  return [...products].sort((a, b) => {
    // Critère 1: Fréquence de commande (DESC)
    const orderCountDiff =
      b.calculation_metadata.order_count - a.calculation_metadata.order_count;

    if (orderCountDiff !== 0) {
      return orderCountDiff;
    }

    // Critère 2: Confiance (DESC) - en cas d'égalité
    const confidenceOrder: Record<string, number> = {
      high: 3,
      medium: 2,
      low: 1,
    };

    return (
      confidenceOrder[b.calculation_metadata.confidence] -
      confidenceOrder[a.calculation_metadata.confidence]
    );
  });
}
```

**Critères de tri (par ordre de priorité):**
1. Fréquence de commande (`order_count`) DESC - Les plus commandés en premier
2. Confiance (`high` > `medium` > `low`) - En cas d'égalité

**Exemple:**
```
Avant tri: A(1 cmd, low), B(3 cmd, medium), C(3 cmd, high)
Après tri: C(3 cmd, high), B(3 cmd, medium), A(1 cmd, low)
```

</details>

---

## 🔧 Guides Pratiques

<details><summary>Comment modifier le MOQ minimum?</summary>

**Changer le montant minimum de commande**

```typescript
// Dans backend/src/config/auto-proposal.ts
export const autoProposalConfig = {
  pricing: {
    minimumOrderAmount: 300, // ← Changer ici (défaut: 300€)
  },
}
```

**Ou passer dynamiquement à l'appel:**

```typescript
const proposal = prepareProposal(
  stockReplenishment,
  undefined,
  "historyPriceForClient",
  500 // MOQ de 500€ pour ce client spécifique
);
```

</details>

<details><summary>Comment changer l'algorithme d'ajustement?</summary>

**Remplacer l'algorithme round-robin**

Modifier `backend/src/features/proposal-preparation/moq/moq-adjustment.service.ts`:

**Option 1: Ajouter uniquement au produit le plus fréquent**

```typescript
export function adjustForMinimumOrder(
  products: ProductWithCurrentPrice[],
  currentTotal: number,
  minimumOrder: number
): ProductWithCurrentPrice[] {
  const gap = minimumOrder - currentTotal;
  if (gap <= 0) return products.map((p) => ({ ...p, moq_adjustment: 0 }));

  // Trier par fréquence + confiance
  const sortedProducts = sortByOrderFrequencyAndConfidence(products);

  // Prendre le produit le plus prioritaire
  const topProduct = sortedProducts[0];

  // Calculer combien d'unités ajouter
  const unitsToAdd = Math.ceil(gap / topProduct.current_price_unit);

  // Ajuster uniquement ce produit
  return products.map((p) => {
    if (p.product_id === topProduct.product_id) {
      return {
        ...p,
        quantity_to_order: p.quantity_to_order + unitsToAdd,
        subtotal: (p.quantity_to_order + unitsToAdd) * p.current_price_unit,
        moq_adjustment: unitsToAdd,
      };
    }
    return { ...p, moq_adjustment: 0 };
  });
}
```

**Option 2: Ajuster proportionnellement au prix**

```typescript
// Ajouter des unités proportionnellement au prix de chaque produit
const totalPrice = products.reduce((sum, p) => sum + p.current_price_unit, 0);

return products.map((p) => {
  const proportion = p.current_price_unit / totalPrice;
  const unitsToAdd = Math.ceil((gap * proportion) / p.current_price_unit);

  return {
    ...p,
    quantity_to_order: p.quantity_to_order + unitsToAdd,
    subtotal: (p.quantity_to_order + unitsToAdd) * p.current_price_unit,
    moq_adjustment: unitsToAdd,
  };
});
```

</details>

<details><summary>Comment implémenter currentPriceForClient?</summary>

**Obtenir les prix actuels avec pricelist Odoo**

**Problème:** L'API Odoo v17 ne permet pas d'obtenir les prix avec pricelist via XML-RPC.

**Solutions possibles:**

**Solution 1: Module custom Odoo (recommandé)**

Créer un module Odoo qui expose une méthode publique:

```python
# addons/custom_auto_proposal/models/product_product.py
from odoo import models, api

class ProductProduct(models.Model):
    _inherit = 'product.product'

    @api.model
    def get_products_prices_with_pricelist(self, product_ids, partner_id, pricelist_id):
        """Wrapper public pour _get_products_price()"""
        products = self.browse(product_ids)
        partner = self.env['res.partner'].browse(partner_id)
        pricelist = self.env['product.pricelist'].browse(pricelist_id)

        prices = {}
        for product in products:
            prices[product.id] = pricelist._get_product_price(
                product,
                1.0,  # quantity
                partner,
                date=fields.Date.today()
            )
        return prices
```

Puis l'appeler depuis TypeScript:

```typescript
// backend/src/features/proposal-preparation/pricing/pricing.service.ts
export async function enrichWithCurrentPrices(
  products: ProductStockStatus[],
  clientId: number,
  odooClient: OdooClient
): Promise<ProductWithCurrentPrice[]> {
  // Récupérer le pricelist du client
  const partner = await odooClient.read('res.partner', clientId, ['property_product_pricelist']);
  const pricelistId = partner.property_product_pricelist[0];

  // Appeler la méthode custom
  const productIds = products.map(p => p.product_id);
  const prices = await odooClient.execute(
    'product.product',
    'get_products_prices_with_pricelist',
    [productIds, clientId, pricelistId]
  );

  return products.map((product) => ({
    ...product,
    current_price_unit: prices[product.product_id] || 0,
    subtotal: product.quantity_to_order * prices[product.product_id],
    moq_adjustment: 0,
  }));
}
```

**Solution 2: sale.order.line temporaire**

Créer une commande draft, laisser Odoo calculer les prix, puis les lire:

```typescript
export async function enrichWithCurrentPrices(
  products: ProductStockStatus[],
  clientId: number,
  odooClient: OdooClient
): Promise<ProductWithCurrentPrice[]> {
  // 1. Créer une sale.order draft temporaire
  const orderId = await odooClient.create('sale.order', {
    partner_id: clientId,
    state: 'draft',
  });

  // 2. Créer les lignes de commande (Odoo calcule les prix)
  const lineIds = await Promise.all(
    products.map(async (product) => {
      return await odooClient.create('sale.order.line', {
        order_id: orderId,
        product_id: product.product_id,
        product_uom_qty: product.quantity_to_order,
      });
    })
  );

  // 3. Lire les prix calculés
  const lines = await odooClient.read('sale.order.line', lineIds, ['price_unit']);

  // 4. Supprimer l'ordre temporaire
  await odooClient.execute('sale.order', 'unlink', [[orderId]]);

  // 5. Enrichir les produits
  return products.map((product, index) => ({
    ...product,
    current_price_unit: lines[index].price_unit,
    subtotal: product.quantity_to_order * lines[index].price_unit,
    moq_adjustment: 0,
  }));
}
```

</details>

<details><summary>Comment tester l'ajustement MOQ?</summary>

**Créer un test avec gap à combler**

```typescript
// backend/src/features/proposal-preparation/__tests__/moq-adjustment.test.ts
import { adjustForMinimumOrder } from '../moq/moq-adjustment.service';
import type { ProductWithCurrentPrice } from '../proposal-preparation.types';

describe('MOQ Adjustment', () => {
  test('devrait ajuster les quantités pour atteindre 300€', () => {
    const products: ProductWithCurrentPrice[] = [
      {
        product_id: 1,
        product_name: "Produit A",
        quantity_to_order: 5,
        current_price_unit: 20,
        subtotal: 100,
        moq_adjustment: 0,
        calculation_metadata: {
          order_count: 5,
          confidence: "high",
          // ...
        },
        // ...
      },
      {
        product_id: 2,
        product_name: "Produit B",
        quantity_to_order: 10,
        current_price_unit: 15,
        subtotal: 150,
        moq_adjustment: 0,
        calculation_metadata: {
          order_count: 3,
          confidence: "medium",
          // ...
        },
        // ...
      },
    ];

    // Total initial = 250€, gap = 50€
    const result = adjustForMinimumOrder(products, 250, 300);

    const finalTotal = result.reduce((sum, p) => sum + p.subtotal, 0);
    expect(finalTotal).toBeGreaterThanOrEqual(300);

    // Vérifier que le produit le plus commandé reçoit le plus d'ajustements
    const productA = result.find(p => p.product_id === 1);
    const productB = result.find(p => p.product_id === 2);
    expect(productA.moq_adjustment).toBeGreaterThanOrEqual(productB.moq_adjustment);
  });
});
```

</details>

---

## 🔗 Points de Vigilance / Dépendances

<details><summary>Configuration et paramètres</summary>

**Paramètres par défaut:**
- `minimumOrderAmount: 300` (MOQ global en euros)
- `mode: "historyPriceForClient"` (utilise prix historiques)

**Modes de pricing:**
- `historyPriceForClient`: Prix de la dernière commande (implémenté)
- `currentPriceForClient`: Prix actuels avec pricelist (NON implémenté)

**Algorithme MOQ:**
- Round-robin avec arrêt immédiat
- Tri: fréquence (DESC) puis confiance (DESC)
- Priorité au produit le plus commandé

</details>

<details><summary>Dépendances externes</summary>

**Input depuis stock-replenishment:**
- Type: `StockReplenishmentResult`
- Contient: `client_id`, `products[]` avec `quantity_to_order` calculée
- Phase précédente: [Stock Replenishment Analysis](../stock-replenishment/README.md)

**Configuration:**
- Fichier: `backend/src/config/auto-proposal.ts`
- Paramètre: `pricing.minimumOrderAmount`

**Odoo (optionnel pour mode currentPriceForClient):**
- Client: `xmlrpc-client.ts` ou `json2-client.ts`
- API: `res.partner` (récupération pricelist), `product.pricelist` (calcul prix)

</details>

<details><summary>Limitations actuelles</summary>

**Mode historyPriceForClient:**
- ⚠️ Utilise le prix de la dernière commande validée
- Ne reflète pas les promotions actuelles
- Palier de quantité basé sur l'ancienne quantité, pas la nouvelle
- Exemple: anciennes 5 unités à 10€ → nouvelles 20 unités devraient être 8€, mais on utilise 10€

**Mode currentPriceForClient:**
- ❌ NON IMPLÉMENTÉ - Limitation API Odoo v17
- Méthodes publiques pricing supprimées depuis Odoo v16+
- Nécessite module custom Odoo ou création sale.order.line temporaire

**Algorithme round-robin:**
- S'arrête dès que gap comblé (peut dépasser légèrement le MOQ)
- Pas de prise en compte des contraintes produit (MOQ/multiple par produit)
- Pas de vérification stock disponible

**UoM (Unités de mesure):**
- Pas de conversion entre unités (TU6 → TU12, etc.)
- Assume que toutes les commandes utilisent la même UoM
- Format UoM: `[id, "nom"]` (ex: `[27, "TU6"]`)

</details>

---

## 🔗 Références

### Modules liés
- **Phase précédente:** [Stock Replenishment Analysis](../stock-replenishment/README.md) - Calcul des quantités recommandées
- **Phase suivante:** [Quote Generation](../proposal-generation/README.md) - Création devis Odoo
- **Configuration:** [Config](../../config/README.md) - Tous les paramètres du système

### Documentation Odoo
- [Product Pricelist](https://www.odoo.com/documentation/17.0/applications/sales/sales/products_prices/prices/pricing.html)
- [Sale Order API](https://www.odoo.com/documentation/17.0/developer/reference/backend/orm.html#odoo.models.Model.create)
- [Partner Pricelist](https://www.odoo.com/documentation/17.0/applications/sales/sales/products_prices/prices/pricing.html#customer-specific-pricing)

### Algorithmes
- [Round-robin scheduling](https://en.wikipedia.org/wiki/Round-robin_scheduling) - Distribution équitable
- [Greedy algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm) - Optimisation locale (tri par priorité)
