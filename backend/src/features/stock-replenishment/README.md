# Stock Replenishment Analysis

## 🎯 Rôle

Analyse l'historique de commandes d'un client pour détecter les risques de rupture de stock et calculer les quantités recommandées à commander.

Le système utilise une **fenêtre adaptative intelligente** : si un produit n'apparaît qu'une fois dans l'historique récent (120 jours), il élargit automatiquement la recherche à 730 jours (2 ans) pour obtenir plus de données.

## 🔄 Architecture et Flux d'exécution

```
┌─────────────────────────────────────────────────────────────┐
│ 1. RÉCUPÉRATION HISTORIQUE (Double fenêtre)                │
├─────────────────────────────────────────────────────────────┤
│   ├─ Historique récent (120 jours)                         │
│   └─ Historique complet (730 jours) - pour adaptation      │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. CALCUL FENÊTRE CLIENT (Moyenne de recommande)           │
├─────────────────────────────────────────────────────────────┤
│   Médiane des intervalles entre commandes                   │
│   Utilisée pour produits avec 1 seule commande              │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. ANALYSE PAR PRODUIT (Boucle)                            │
├─────────────────────────────────────────────────────────────┤
│   ├─ Filtrage (services, consommation nulle)               │
│   ├─ Adaptation fenêtre (1 commande → 730j)                │
│   ├─ Calcul consommation/jour (avec fenêtre client)        │
│   ├─ Prédiction stock restant                              │
│   ├─ Calcul quantité (médiane historique)                  │
│   └─ TRIGGER: Comparaison seuil                            │
│       ├─ Stock OK → Skip                                    │
│       └─ Risque rupture → Ajouter à liste                  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. RETOUR RÉSULTAT                                          │
├─────────────────────────────────────────────────────────────┤
│   ├─ products: Produits avec rupture détectée              │
│   └─ all_products: TOUS les produits analysés (backtest)   │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Inventaire des Composants

### Fichier: `stock-replenishment.service.ts`

**Description:** Orchestrateur principal qui coordonne l'analyse de réapprovisionnement avec fenêtre adaptative intelligente.

**Référence code:** `/backend/src/features/stock-replenishment/stock-replenishment.service.ts:23`

<details><summary>Voir l'implémentation</summary>

```typescript
export async function calculateReplenishmentNeeds(
  clientId: number = autoProposalConfig.testing.defaultClientId,
  config?: {
    analysisWindowDays?: number;
    analysisEndDate?: string;
    targetCoverage?: number;
    leadTime?: number;
  }
): Promise<StockReplenishmentResult> {
  const daysOfHistory = config?.analysisWindowDays ?? autoProposalConfig.analysisWindowDays;
  const analysisEndDate = config?.analysisEndDate ?? getTodayAsDateString();

  // 1. Récupération double historique
  const recentHistory = await getProductOrderHistory(clientId, daysOfHistory, analysisEndDate);
  const fullHistory = await getProductOrderHistory(clientId, 730, analysisEndDate);

  // 2. Calcul fenêtre de recommande client (médiane intervalles)
  const clientReorderWindow = calculateClientReorderWindow(recentHistory.products);

  const analyzedProducts: ProductStockStatus[] = [];
  const allProducts: ProductStockStatus[] = [];

  // 3. Analyse produit par produit
  for (const product of recentHistory.products) {
    if (product.product_type === "service") continue;

    // FENÊTRE ADAPTATIVE: Si 1 commande en 120j → chercher dans 730j
    let ordersToUse = product.orders;
    let windowDays = daysOfHistory;

    if (product.orders.length === 1) {
      const fullProduct = fullHistory.products.find((p) => p.product_id === product.product_id);
      if (fullProduct && fullProduct.orders.length > 1) {
        ordersToUse = fullProduct.orders;
        windowDays = 730;
      }
    }

    // Calcul consommation (utilise fenêtre client si 1 commande)
    const consumptionPerDay = calculateDailyConsumption(
      ordersToUse,
      windowDays,
      new Date(analysisEndDate),
      clientReorderWindow ?? undefined
    );

    if (consumptionPerDay <= 0) continue;

    // Prédiction stock
    const stockPrediction = predictStockStatus(product, consumptionPerDay, new Date(analysisEndDate));

    // Seuil de rupture
    const targetCoverage = config?.targetCoverage ?? autoProposalConfig.targetCoverage;
    const leadTime = config?.leadTime ?? autoProposalConfig.leadTime;
    const replenishmentThresholdDays = targetCoverage + leadTime;

    // Calcul quantité (médiane historique)
    const calculation = calculateQuantityFromHistory(ordersToUse);
    if (calculation.quantity === null) continue;

    // Construire objet produit
    const productStatus: ProductStockStatus = {
      product_id: product.product_id,
      product_name: product.product_name,
      product_uom: product.product_uom,
      order_history: ordersToUse.map((order) => ({
        order_id: order.order_id,
        order_name: order.order_name,
        date_order: order.date_order,
        quantity: order.quantity,
        price_unit: order.price_unit,
      })),
      stock_prediction: {
        consumption_per_day: consumptionPerDay,
        estimated_stock_remaining: stockPrediction.estimatedStock,
        days_until_stockout: stockPrediction.daysUntilStockout,
        replenishment_threshold_days: replenishmentThresholdDays,
      },
      quantity_to_order: calculation.quantity,
      calculation_metadata: calculation.metadata,
    };

    allProducts.push(productStatus);

    // TRIGGER: Ajouter seulement si risque rupture
    if (stockPrediction.daysUntilStockout <= replenishmentThresholdDays) {
      analyzedProducts.push(productStatus);
    }
  }

  return {
    client_id: clientId,
    products: analyzedProducts,
    total_products_in_history: recentHistory.products.length,
    all_products: allProducts,
  };
}
```

</details>

---

### Fichier: `order-history/order-history.service.ts`

**Description:** Récupère l'historique des commandes Odoo d'un client avec fenêtre temporelle configurable et filtre les catégories de produits exclues.

**Référence code:** `/backend/src/features/stock-replenishment/order-history/order-history.service.ts:23`

<details><summary>Voir l'implémentation</summary>

```typescript
export async function getProductOrderHistory(
  partnerId: number = autoProposalConfig.testing.defaultClientId,
  windowDays: number = autoProposalConfig.analysisWindowDays,
  referenceDate: string
): Promise<ClientOrderHistory> {
  const rawHistory = await odooClient.getOrderHistoryByPartner(
    partnerId,
    windowDays,
    referenceDate,
    autoProposalConfig.testing.includeDraftOrders,
    autoProposalConfig.productFiltering.excludedCategoryIds
  );
  return transformOrderHistory(rawHistory, partnerId);
}
```

**Paramètres:**
- `partnerId`: ID du partenaire Odoo (défaut: config)
- `windowDays`: Nombre de jours d'historique (défaut: 120)
- `referenceDate`: Date de référence pour l'analyse (format: "YYYY-MM-DD HH:MM:SS")

**Retour:** Historique structuré par produit avec toutes les lignes de commande triées par date décroissante

**Note importante:** Cette fonction est appelée **deux fois** dans le flux principal :
1. Avec `windowDays = 120` (historique récent)
2. Avec `windowDays = 730` (historique complet pour adaptation)

</details>

---

### Fichier: `order-history/transform.utils.ts`

**Description:** Transforme les données brutes Odoo en structure groupée par produit avec commandes triées.

**Référence code:** `/backend/src/features/stock-replenishment/order-history/transform.utils.ts:14`

<details><summary>Voir l'implémentation</summary>

```typescript
export function transformOrderHistory(
  rawHistory: OrderHistory,
  partnerId: number
): ClientOrderHistory {
  if (rawHistory.orders.length === 0) {
    return {
      partner_id: partnerId,
      products: [],
    };
  }

  const ordersMap = new Map(
    rawHistory.orders.map((order) => [order.id, order])
  );

  const productsMap = new Map<number, ProductOrderHistory>();

  for (const line of rawHistory.orderLines) {
    const order = ordersMap.get(line.order_id[0]);
    if (!order) continue;

    const productId = line.product_id[0];
    const productName = line.product_id[1];

    if (!productsMap.has(productId)) {
      productsMap.set(productId, {
        product_id: productId,
        product_name: productName,
        product_uom: line.product_uom,
        product_type: line.product_type,
        orders: [],
      });
    }

    productsMap.get(productId)!.orders.push({
      order_id: order.id,
      order_name: order.name,
      date_order: order.date_order,
      quantity: line.product_uom_qty,
      price_unit: line.price_unit,
    });
  }

  // Tri décroissant (plus récent en premier)
  for (const product of productsMap.values()) {
    product.orders.sort(
      (a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime()
    );
  }

  return {
    partner_id: partnerId,
    products: Array.from(productsMap.values()),
  };
}
```

**Note:** Le filtrage des catégories exclues est effectué côté Odoo dans la requête, pas ici.

</details>

---

### Fichier: `utils/consumption.utils.ts`

**Description:** Calcule la consommation moyenne par jour avec adaptation automatique pour nouveaux produits + calcul de fenêtre de recommande client.

**Référence code:** `/backend/src/features/stock-replenishment/utils/consumption.utils.ts:20`

<details><summary>Voir l'implémentation</summary>

#### Fonction 1: `calculateClientReorderWindow()`

**Nouveau:** Calcule la fenêtre moyenne de recommande du client basée sur ses habitudes de commande.

```typescript
export function calculateClientReorderWindow(
  products: ProductOrderHistory[]
): number | null {
  const allIntervals: number[] = [];

  // Collecter tous les intervalles entre commandes de tous les produits
  for (const product of products) {
    if (product.orders.length < 2) continue;

    const sortedOrders = [...product.orders].sort(
      (a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime()
    );

    // Calculer intervalles entre commandes successives
    for (let i = 0; i < sortedOrders.length - 1; i++) {
      const currentDate = new Date(sortedOrders[i].date_order);
      const nextDate = new Date(sortedOrders[i + 1].date_order);
      const daysBetween = (currentDate.getTime() - nextDate.getTime()) / (1000 * 60 * 60 * 24);
      allIntervals.push(daysBetween);
    }
  }

  if (allIntervals.length === 0) return null;

  return calculateMedian(allIntervals);
}
```

**Exemple concret:**
```typescript
// Client avec 3 produits réguliers:
// - Produit A: commandes à J0, J15, J30 → intervalles [15j, 15j]
// - Produit B: commandes à J0, J20, J40 → intervalles [20j, 20j]
// - Produit C: commandes à J0, J12, J24 → intervalles [12j, 12j]
// Tous intervalles: [15, 15, 20, 20, 12, 12]
// Médiane: 15 jours ← fenêtre de recommande client
```

**Utilité:** Cette fenêtre est utilisée pour les produits avec **1 seule commande**, permettant d'estimer leur consommation basée sur le comportement global du client.

---

#### Fonction 2: `calculateDailyConsumption()`

```typescript
export function calculateDailyConsumption(
  orders: OrderLineDetail[],
  daysOfHistory: number,
  currentDate: Date = new Date(),
  clientReorderWindow?: number
): number {
  if (orders.length === 0) return 0;

  const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);

  const firstOrderDate = new Date(
    Math.min(...orders.map((o) => new Date(o.date_order).getTime()))
  );

  const daysSinceFirstOrder = Math.floor(
    (currentDate.getTime() - firstOrderDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // CAS SPÉCIAL: 1 commande → utiliser fenêtre client
  if (orders.length === 1 && clientReorderWindow) {
    return totalQuantity / clientReorderWindow;
  }

  // Adapter la période (ex: produit depuis 60j → calculer sur 60j, pas 120j)
  const actualDays = Math.min(daysOfHistory, daysSinceFirstOrder);

  return totalQuantity / actualDays;
}
```

**Logique d'adaptation:**
- **Produit récent (60j d'existence)** → calcul sur 60j (pas 120j)
- **Produit avec 1 commande** → utilise fenêtre client (ex: 15j)
- **Autres cas** → utilise min(fenêtre analyse, jours depuis première commande)

</details>

---

### Fichier: `utils/prediction.utils.ts`

**Description:** Prédit le nombre de jours avant rupture de stock basé sur la consommation moyenne et la dernière commande.

**Référence code:** `/backend/src/features/stock-replenishment/utils/prediction.utils.ts:11`

<details><summary>Voir l'implémentation</summary>

```typescript
export function predictStockStatus(
  product: ProductOrderHistory,
  consumptionPerDay: number,
  currentDate: Date = new Date()
): { estimatedStock: number; daysUntilStockout: number } {
  if (product.orders.length === 0) {
    return { estimatedStock: 0, daysUntilStockout: 0 };
  }

  // Dernière commande (la plus récente)
  const lastOrder = product.orders[0];
  const lastOrderDate = new Date(lastOrder.date_order);
  const lastQuantity = lastOrder.quantity;

  // Jours écoulés depuis dernière commande
  const daysElapsed = Math.floor(
    (currentDate.getTime() - lastOrderDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Stock restant estimé
  const estimatedStock = lastQuantity - daysElapsed * consumptionPerDay;

  // Jours avant rupture (négatif = déjà en rupture)
  const daysUntilStockout = Math.trunc(estimatedStock / consumptionPerDay);

  return { estimatedStock, daysUntilStockout };
}
```

**Formule:**
```
Stock restant = Quantité dernière commande - (Jours écoulés × Consommation/jour)
Jours avant rupture = Stock restant ÷ Consommation/jour
```

**Exemple:**
```typescript
// Dernière commande: 100 unités le 2025-01-01
// Consommation: 3.33 unités/jour
// Date actuelle: 2025-01-16 (15 jours écoulés)
// Stock restant: 100 - (15 × 3.33) = 50 unités
// Jours avant rupture: 50 ÷ 3.33 = 15 jours
```

</details>

---

### Fichier: `utils/quantity.utils.ts`

**Description:** Calcule la quantité recommandée selon une stratégie médiane à 4 niveaux basée sur le nombre de lignes de commande, avec support optionnel de la stratégie **Copycat Hybride** qui ajuste la médiane selon le ratio dernière commande / médiane.

**Référence code:** `/backend/src/features/stock-replenishment/utils/quantity.utils.ts:31`

<details><summary>Voir l'implémentation</summary>

```typescript
export function calculateQuantityFromHistory(
  orderLines: OrderLineDetail[]
): QuantityCalculationResult {
  const config = autoProposalConfig.quantityStrategy;
  const orderCount = orderLines.length;

  // Niveau 0: Aucune commande → Skip
  if (orderCount === 0) {
    return {
      quantity: null,
      metadata: {
        strategy: "skip",
        confidence: null,
        historical_quantities: [],
        order_count: 0,
        median_value: null,
      },
    };
  }

  const sortedOrders = [...orderLines].sort(
    (a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime()
  );

  const quantities = sortedOrders.map((line) => line.quantity);

  // Niveau 1: Une seule commande → Répéter
  if (orderCount === 1) {
    return {
      quantity: quantities[0],
      metadata: {
        strategy: "single_recent_order",
        confidence: "low",
        historical_quantities: quantities,
        order_count: orderCount,
        median_value: quantities[0],
      },
    };
  }

  // Niveau 2: 2-4 commandes → Médiane de toutes
  if (orderCount < config.minOrdersForHighConfidence) {
    const median = calculateMedian(quantities);
    return {
      quantity: median,
      metadata: {
        strategy: "median_recent_orders",
        confidence: "medium",
        historical_quantities: quantities,
        order_count: orderCount,
        median_value: median,
      },
    };
  }

  // Niveau 3: 5+ commandes → Médiane des N dernières
  const recentQuantities = quantities.slice(0, config.maxRecentOrderLines);
  const median = calculateMedian(recentQuantities);

  return {
    quantity: median,
    metadata: {
      strategy: "median_recent_orders",
      confidence: "high",
      historical_quantities: recentQuantities,
      order_count: orderCount,
      median_value: median,
    },
  };
}
```

**Stratégie à 4 niveaux:**

| Niveau | Commandes | Stratégie | Confiance | Exemple |
|--------|-----------|-----------|-----------|---------|
| 0 | 0 lignes | Skip | null | Produit jamais commandé |
| 1 | 1 ligne | Répéter cette quantité | low | [12] → 12 |
| 2 | 2-4 lignes | Médiane de toutes | medium | [10, 12, 11] → 11 |
| 3 | 5+ lignes | Médiane des 5 dernières | high | [12, 10, 11, 9, 13, 8] → médiane([12,10,11,9,13]) |

</details>

---

### Fichier: `utils/median.utils.ts`

**Description:** Calcule la médiane robuste d'un tableau de nombres en ignorant les valeurs aberrantes.

**Référence code:** `/backend/src/features/stock-replenishment/utils/median.utils.ts:13`

<details><summary>Voir l'implémentation</summary>

```typescript
export function calculateMedian(values: number[]): number {
  if (values.length === 0) {
    throw new Error("Cannot calculate median of empty array");
  }

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  // Nombre pair → moyenne des 2 valeurs centrales
  if (sorted.length % 2 === 0) {
    const median = (sorted[mid - 1] + sorted[mid]) / 2;
    return Math.round(median);
  }

  // Nombre impair → valeur centrale
  return Math.round(sorted[mid]);
}
```

**Exemples:**
```typescript
calculateMedian([10, 12, 11, 100, 12]) // 12 (ignore l'outlier à 100)
calculateMedian([10, 12]) // 11 (moyenne de 10 et 12)
calculateMedian([12]) // 12
```

**Pourquoi la médiane?**
- Robuste aux outliers (ex: commande exceptionnelle de 1000 unités)
- Plus fiable que la moyenne pour les historiques irréguliers
- Reflète mieux les commandes "typiques" du client

</details>

---

## 🔧 Guides Pratiques

<details><summary>Comment modifier la période d'analyse?</summary>

**Modifier la fenêtre d'analyse (analysisWindowDays)**

```typescript
// Dans backend/src/config/auto-proposal.ts
export const autoProposalConfig = {
  analysisWindowDays: 120, // ← Changer ici (défaut: 120 jours = 4 mois)
}
```

**Ou passer dynamiquement à l'appel:**

```typescript
const result = await calculateReplenishmentNeeds(clientId, {
  analysisWindowDays: 365, // Analyser 1 an d'historique
  analysisEndDate: "2025-01-19 23:59:59" // Date de référence
});
```

**Note:** La fenêtre de 730 jours pour l'adaptation est **fixe** et non configurable.

</details>

<details><summary>Comment changer le seuil de rupture?</summary>

**Modifier targetCoverage et leadTime**

Le seuil de rupture = `targetCoverage` (couverture souhaitée) + `leadTime` (délai de livraison)

```typescript
// Dans backend/src/config/auto-proposal.ts
export const autoProposalConfig = {
  targetCoverage: 25, // ← Jours de couverture souhaitée (défaut: 25j)
  leadTime: 5, // ← Délai de livraison en jours (défaut: 5j)
}
```

**Exemple:**
- `targetCoverage: 25` + `leadTime: 5` = **seuil à 30 jours**
- Si stock client prédit < 30j → déclenche recommandation de commande

**Ou passer dynamiquement:**

```typescript
const result = await calculateReplenishmentNeeds(clientId, {
  targetCoverage: 21, // 3 semaines de stock
  leadTime: 7, // 1 semaine de livraison
});
// Seuil = 21 + 7 = 28 jours
```

</details>

<details><summary>Comment changer la stratégie de quantité?</summary>

**Modifier les seuils de confiance**

```typescript
// Dans backend/src/config/auto-proposal.ts
export const autoProposalConfig = {
  quantityStrategy: {
    maxRecentOrderLines: 5, // ← Limiter aux N lignes les plus récentes (high confidence)
    minOrdersForMediumConfidence: 2, // ← Seuil pour confiance Medium (défaut: 2)
    minOrdersForHighConfidence: 5, // ← Seuil pour confiance High (défaut: 5)
  },
}
```

**Exemple de modification:**

```typescript
quantityStrategy: {
  maxRecentOrderLines: 3, // Analyser seulement les 3 dernières commandes
  minOrdersForMediumConfidence: 3, // Medium à partir de 3 commandes
  minOrdersForHighConfidence: 8, // High à partir de 8 commandes
}
```

**Passage à une stratégie moyenne (au lieu de médiane):**

Modifier `backend/src/features/stock-replenishment/utils/quantity.utils.ts`:

```typescript
// Remplacer les appels à calculateMedian() par:
const average = quantities.reduce((sum, q) => sum + q, 0) / quantities.length;
return Math.round(average);
```

</details>

<details><summary>Comment faire une analyse rétroactive?</summary>

**Utiliser analysisEndDate pour simuler une analyse passée**

```typescript
// Analyser comme si on était le 2025-10-01
const result = await calculateReplenishmentNeeds(clientId, {
  analysisWindowDays: 180,
  analysisEndDate: "2025-10-01 00:00:00" // ← Date de référence passée
});
```

**Cas d'usage:**
- **Validation historique:** Comparer prédictions vs commandes réelles
- **Tests de régression:** Vérifier cohérence avant/après refactoring
- **Audits:** Analyser les décisions prises à une date donnée

**Accès aux résultats complets (backtest):**

```typescript
const result = await calculateReplenishmentNeeds(clientId, config);

// Produits avec rupture détectée (pour production)
console.log(`Produits à commander: ${result.products.length}`);

// TOUS les produits analysés (avec + sans rupture)
console.log(`Produits analysés: ${result.all_products?.length}`);

// Exemple: Comparer prédiction vs réalité
result.all_products?.forEach(product => {
  console.log(`${product.product_name}: ${product.stock_prediction.days_until_stockout}j avant rupture`);
});
```

</details>

<details><summary>Comment filtrer les produits analysés?</summary>

**Modifier les catégories exclues**

```typescript
// Dans backend/src/config/auto-proposal.ts
export const autoProposalConfig = {
  productFiltering: {
    excludedCategoryIds: [
      8,  // Bring Back / Bouteilles - non facturés
      10, // BB-Lavage a façon - Casiers (consignés)
      // ... ajouter d'autres IDs de catégories Odoo
    ],
  },
}
```

**Produits automatiquement exclus:**
- Type "service" (transport, lavage, etc.)
- Catégories dans `excludedCategoryIds` (consignes, emballages, palettes)
- Consommation nulle ou négative

**Note:** Le filtrage des catégories est effectué **côté Odoo** dans la requête pour optimiser les performances.

</details>

<details><summary>Comment fonctionne la fenêtre adaptative?</summary>

**Principe:** Si un produit n'apparaît qu'**une fois** dans l'historique récent (120j), le système élargit automatiquement à **730 jours** (2 ans).

**Exemple:**

```typescript
// Produit A: 1 commande dans les 120 derniers jours
// → Recherche dans historique 730j
// → Trouve 5 commandes sur 730j
// → Utilise ces 5 commandes pour calcul

// Produit B: 3 commandes dans les 120 derniers jours
// → Pas d'élargissement
// → Utilise ces 3 commandes
```

**Avantages:**
- Évite de manquer des produits "saisonniers"
- Meilleure confiance pour quantité (5 commandes vs 1)
- Détection automatique sans configuration

**Code impliqué:** `stock-replenishment.service.ts:71-82`

```typescript
if (product.orders.length === 1) {
  const fullProduct = fullHistory.products.find((p) => p.product_id === product.product_id);
  if (fullProduct && fullProduct.orders.length > 1) {
    ordersToUse = fullProduct.orders;
    windowDays = 730;
  }
}
```

</details>

<details><summary>Comment configurer la stratégie Copycat Hybride?</summary>

**Activer/Désactiver Copycat Hybride**

La stratégie Copycat Hybride est une amélioration **expérimentale** qui ajuste la médiane selon le comportement récent du client.

```typescript
// Dans backend/src/config/auto-proposal.ts
export const autoProposalConfig = {
  quantityStrategy: {
    // ...autres paramètres...

    // Activer/désactiver Copycat
    useCopycatHybrid: true, // ← true = Copycat activé, false = Médiane pure

    // Seuils de décision Copycat
    copycatThresholds: {
      upperRatio: 2.0,  // ← Seuil hausse forte (> 2x médiane)
      lowerRatio: 0.5,  // ← Seuil baisse brutale (< 0.5x médiane)
    },
  },
}
```

**🔍 Logique de décision Copycat:**

La stratégie compare la dernière commande avec la médiane historique :

1. **📊 Median-stable** (ratio 0.5x - 2x)
   → Comportement stable → Médiane pure
   Exemple: Médiane = 10, Dernière = 12 (ratio 1.2x) → Propose 10

2. **🔼 Blend** (ratio > 2x)
   → Hausse forte → (Dernière + Médiane) / 2
   Exemple: Médiane = 10, Dernière = 25 (ratio 2.5x) → Propose 18

3. **🔽 Follow-last** (ratio < 0.5x)
   → Baisse brutale → Dernière commande
   Exemple: Médiane = 50, Dernière = 15 (ratio 0.3x) → Propose 15

**⚠️ Points d'attention:**

- Copycat **NE S'APPLIQUE PAS** aux produits avec 1 seule commande (low confidence)
- S'applique uniquement aux niveaux 2 (medium) et 3 (high confidence)
- Risque: Peut amplifier les outliers temporaires (commandes exceptionnelles)
- Avantage: Réactivité aux changements de consommation réels

**📊 Visualisation dans les backtests:**

Quand Copycat est activé, les rapports de backtest affichent une colonne supplémentaire montrant la décision prise :

```
| Produit | Prédit | Réel | Erreur | Type | Copycat          |
|---------|--------|------|--------|------|------------------|
| Prod A  | 18     | 24   | 6.0    | ✅   | 🔼 blend (2.27x) |
| Prod B  | 15     | 15   | 0.0    | 🎯   | 🔽 follow-last (0.31x) |
| Prod C  | 21     | 20   | 1.0    | ✅   | 📊 median-stable (1.00x) |
```

**🧪 Recommandation:**

- **Test A/B:** Comparer MAE avec Copycat ON vs OFF sur historique réel
- **Analyse par décision:** Vérifier si `blend` et `follow-last` améliorent vraiment le MAE
- **Désactiver si:** MAE se dégrade globalement (> 5%)

</details>

---

## 🔗 Points de Vigilance / Dépendances

<details><summary>Configuration et paramètres</summary>

**Paramètres par défaut:**
- `analysisWindowDays: 120` (4 mois d'historique récent)
- `targetCoverage: 25` (25 jours de couverture souhaitée)
- `leadTime: 5` (5 jours de délai de livraison)
- Seuil de rupture = `targetCoverage + leadTime = 30 jours`
- Fenêtre adaptative = `730 jours` (2 ans, non configurable)

**Date de référence:**
- `analysisEndDate` permet l'analyse rétroactive
- Format requis: "YYYY-MM-DD HH:MM:SS"
- Par défaut: date du jour (getTodayAsDateString())

**Stratégie médiane à 4 niveaux:**
- 0 commandes → Skip (null)
- 1 commande → Répéter (low confidence)
- 2-4 commandes → Médiane de toutes (medium confidence)
- 5+ commandes → Médiane des 5 dernières (high confidence)

</details>

<details><summary>Dépendances externes</summary>

**Odoo XML-RPC:**
- Client: `xmlrpc-client.ts` ou `json2-client.ts`
- API: `getOrderHistoryByPartner(partnerId, windowDays, referenceDate, includeDrafts, excludedCategoryIds)`
- Models: `sale.order`, `sale.order.line`, `product.product`, `product.category`

**Configuration:**
- Fichier: `backend/src/config/auto-proposal.ts`
- Variables d'environnement: `ODOO_URL`, `ODOO_DB`, `ODOO_USERNAME`, `ODOO_PASSWORD`

**Utilitaires:**
- `getTodayAsDateString()`: Format date pour Odoo ("YYYY-MM-DD HH:MM:SS")
- `calculateMedian()`: Médiane robuste ignorant les outliers

</details>

<details><summary>Limitations actuelles</summary>

**UoM (Unités de mesure):**
- Pas de conversion entre unités (kg → g, L → mL, etc.)
- Assume que toutes les commandes utilisent la même UoM
- Format UoM: `[id, "nom"]` (ex: `[1, "Unit(s)"]`)

**Catégories exclues:**
- Liste hardcodée dans config
- Nécessite maintenance si nouvelles catégories Odoo créées
- Pas de filtre dynamique par type de produit

**Analyse rétroactive:**
- `analysisEndDate` permet de "remonter dans le temps"
- Utile pour validation mais ne reflète pas les événements futurs
- Stock réel non vérifié (uniquement prédiction basée historique)

**Performance:**
- Appel API Odoo **deux fois** par analyse (120j + 730j)
- Charge proportionnelle au nombre de produits dans l'historique
- Filtrage post-récupération pour fenêtre adaptative (730j)

**Fenêtre adaptative:**
- Fenêtre de 730 jours **non configurable**
- S'applique uniquement aux produits avec 1 commande en 120j
- Peut augmenter significativement le temps d'exécution

</details>

---

## 🔗 Références

### Modules liés
- **Phase suivante:** [Proposal Preparation](../proposal-preparation/README.md) - Enrichissement prix + ajustement MOQ
- **Configuration:** [Config](../../config/README.md) - Tous les paramètres du système
- **Infrastructure:** [Odoo Clients](../../infrastructure/odoo/README.md) - Communication avec l'ERP

### Documentation Odoo
- [Sale Order API](https://www.odoo.com/documentation/17.0/developer/reference/backend/orm.html#odoo.models.Model.search)
- [Product Category](https://www.odoo.com/documentation/17.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/product_categorization.html)
- [XML-RPC External API](https://www.odoo.com/documentation/17.0/developer/reference/external_api.html)

### Algorithmes
- [Médiane (statistiques)](https://fr.wikipedia.org/wiki/M%C3%A9diane_(statistiques)) - Robuste aux valeurs aberrantes
- [Consommation moyenne mobile](https://en.wikipedia.org/wiki/Moving_average) - Lissage des variations

---

## 📊 Types de données

<details><summary>Voir les interfaces TypeScript</summary>

**Résultat principal:**
```typescript
interface StockReplenishmentResult {
  client_id: number;
  products: ProductStockStatus[];           // Uniquement produits avec rupture
  total_products_in_history: number;        // Nombre total avant filtrage
  all_products?: ProductStockStatus[];      // TOUS les produits (pour backtest)
}
```

**Statut produit:**
```typescript
interface ProductStockStatus {
  product_id: number;
  product_name: string;
  product_uom: [number, string];            // Ex: [1, "Unit(s)"]
  order_history: OrderHistoryDetail[];
  stock_prediction: StockPredictionDetails;
  quantity_to_order: number;
  calculation_metadata: QuantityCalculationMetadata;
}
```

**Prédiction stock:**
```typescript
interface StockPredictionDetails {
  consumption_per_day: number;              // Ex: 3.33
  estimated_stock_remaining: number;        // Ex: 50.5
  days_until_stockout: number;              // Ex: 15 (négatif = rupture)
  replenishment_threshold_days: number;     // Ex: 30
}
```

**Métadonnées calcul:**
```typescript
interface QuantityCalculationMetadata {
  strategy: "skip" | "single_recent_order" | "median_recent_orders";
  confidence: "low" | "medium" | "high" | null;
  historical_quantities: number[];
  order_count: number;
  median_value: number | null;
}
```

</details>
