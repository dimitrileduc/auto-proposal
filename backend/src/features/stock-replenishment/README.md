# Stock Replenishment Analysis

## 🎯 Rôle

Analyse l'historique de commandes d'un client pour détecter les risques de rupture de stock et calculer les quantités recommandées à commander.

## 📦 Inventaire des Composants

### Fichier: `stock-replenishment.service.ts`

**Description:** Orchestrateur principal qui coordonne l'analyse de réapprovisionnement en 3 étapes : récupération historique, prédiction rupture, calcul quantité.

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

  // 1. Récupération de l'historique
  const orderHistory = await getProductOrderHistory(clientId, daysOfHistory, analysisEndDate);

  const analyzedProducts: ProductStockStatus[] = [];

  // 2. Pour chaque produit, analyser le risque de rupture
  for (const product of orderHistory.products) {
    // Skip produits de type "service"
    if (product.product_type === "service") continue;

    // Calcul consommation moyenne
    const consumptionPerDay = calculateDailyConsumption(product.orders, daysOfHistory);
    if (consumptionPerDay <= 0) continue;

    // Prédiction du stock
    const stockPrediction = predictStockStatus(product, consumptionPerDay, new Date());

    // Utiliser les valeurs de config ou les valeurs par défaut
    const targetCoverage = config?.targetCoverage ?? autoProposalConfig.targetCoverage;
    const leadTime = config?.leadTime ?? autoProposalConfig.leadTime;
    const replenishmentThresholdDays = targetCoverage + leadTime;

    // TRIGGER: Skip si stock suffisant
    if (stockPrediction.daysUntilStockout > replenishmentThresholdDays) continue;

    // QUANTITÉ: Calculer selon médiane de l'historique
    const calculation = calculateQuantityFromHistory(product.orders);
    if (calculation.quantity === null) continue;

    analyzedProducts.push({
      product_id: product.product_id,
      product_name: product.product_name,
      product_uom: product.product_uom,
      order_history: product.orders.map((order) => ({...})),
      stock_prediction: {
        consumption_per_day: consumptionPerDay,
        estimated_stock_remaining: stockPrediction.estimatedStock,
        days_until_stockout: stockPrediction.daysUntilStockout,
        replenishment_threshold_days: replenishmentThresholdDays,
      },
      quantity_to_order: calculation.quantity,
      calculation_metadata: calculation.metadata,
    });
  }

  return {
    client_id: clientId,
    products: analyzedProducts,
    total_products_in_history: orderHistory.products.length,
  };
}
```

</details>

---

### Fichier: `order-history/order-history.service.ts`

**Description:** Récupère l'historique des commandes Odoo d'un client avec fenêtre temporelle configurable et filtre les catégories de produits exclues.

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
- `partnerId`: ID du partenaire Odoo (défaut: 3 pour Arthur Schwaiger)
- `windowDays`: Nombre de jours d'historique (défaut: 180 = 6 mois)
- `referenceDate`: Date de référence pour l'analyse rétroactive (format: "YYYY-MM-DD HH:MM:SS")

**Retour:** Historique structuré par produit avec toutes les lignes de commande

</details>

---

### Fichier: `utils/consumption.utils.ts`

**Description:** Calcule la consommation moyenne par jour en adaptant automatiquement la période pour les produits récents.

<details><summary>Voir l'implémentation</summary>

```typescript
export function calculateDailyConsumption(
  orders: OrderLineDetail[],
  daysOfHistory: number,
  currentDate: Date = new Date()
): number {
  if (orders.length === 0) return 0;

  const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);

  // Trouver la première commande de ce produit
  const firstOrderDate = new Date(
    Math.min(...orders.map((o) => new Date(o.date_order).getTime()))
  );

  // Jours depuis la première commande du produit
  const daysSinceFirstOrder = Math.floor(
    (currentDate.getTime() - firstOrderDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Adapter la période: utiliser l'historique réel si < fenêtre d'analyse
  const actualDays = Math.min(daysOfHistory, daysSinceFirstOrder);

  return totalQuantity / actualDays;
}
```

**Logique d'adaptation:**
- Produit commandé depuis 60j → calcul sur 60j (pas 365j)
- Évite de sous-estimer la consommation des nouveaux produits

</details>

---

### Fichier: `utils/prediction.utils.ts`

**Description:** Prédit le nombre de jours avant rupture de stock basé sur la consommation moyenne et la dernière commande.

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

  // Calcul des jours écoulés depuis la dernière commande
  const daysElapsed = Math.floor(
    (currentDate.getTime() - lastOrderDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Estimation du stock restant
  const estimatedStock = lastQuantity - daysElapsed * consumptionPerDay;

  // Calcul des jours avant rupture (négatif = déjà en rupture)
  const daysUntilStockout = Math.trunc(estimatedStock / consumptionPerDay);

  return { estimatedStock, daysUntilStockout };
}
```

**Formule:**
```
Stock restant = Quantité dernière commande - (Jours écoulés × Consommation/jour)
Jours avant rupture = Stock restant ÷ Consommation/jour
```

</details>

---

### Fichier: `utils/quantity.utils.ts`

**Description:** Calcule la quantité recommandée selon une stratégie médiane à 4 niveaux basée sur le nombre de lignes de commande.

<details><summary>Voir l'implémentation</summary>

```typescript
export function calculateQuantityFromHistory(
  orderLines: OrderLineDetail[]
): QuantityCalculationResult {
  const config = autoProposalConfig.quantityStrategy;
  const orderCount = orderLines.length;

  // Niveau 0 : Aucune ligne de commande → Skip
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

  // Niveau 1 : Une seule ligne de commande → Répéter
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

  // Niveau 2 : 2-4 lignes de commande → Médiane de toutes
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

  // Niveau 3 : 5+ lignes de commande → Médiane des N dernières
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

| Niveau | Commandes | Stratégie | Confiance |
|--------|-----------|-----------|-----------|
| 0 | 0 lignes | Skip | null |
| 1 | 1 ligne | Répéter cette quantité | low |
| 2 | 2-4 lignes | Médiane de toutes | medium |
| 3 | 5+ lignes | Médiane des 5 dernières | high |

</details>

---

### Fichier: `utils/median.utils.ts`

**Description:** Calcule la médiane robuste d'un tableau de nombres en ignorant les valeurs aberrantes.

<details><summary>Voir l'implémentation</summary>

```typescript
export function calculateMedian(values: number[]): number {
  if (values.length === 0) {
    throw new Error("Cannot calculate median of empty array");
  }

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  // Si nombre pair d'éléments → moyenne des 2 valeurs centrales
  if (sorted.length % 2 === 0) {
    const median = (sorted[mid - 1] + sorted[mid]) / 2;
    return Math.round(median);
  }

  // Si nombre impair → valeur centrale
  return Math.round(sorted[mid]);
}
```

**Exemples:**
```typescript
calculateMedian([10, 12, 11, 100, 12]) // 12 (ignore l'outlier à 100)
calculateMedian([10, 12]) // 11 (moyenne de 10 et 12)
calculateMedian([12]) // 12
```

</details>

---

## 🔧 Guides Pratiques

<details><summary>Comment modifier la période d'analyse?</summary>

**Modifier la fenêtre d'analyse (analysisWindowDays)**

```typescript
// Dans backend/src/config/auto-proposal.ts
export const autoProposalConfig = {
  analysisWindowDays: 120, // ← Changer ici (défaut: 4 mois)
}
```

**Ou passer dynamiquement à l'appel:**

```typescript
const result = await calculateReplenishmentNeeds(clientId, {
  analysisWindowDays: 365, // Analyser 1 an d'historique
  analysisEndDate: "2025-10-26 23:59:59" // Date de référence
});
```

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
- Validation historique: comparer prédictions vs commandes réelles
- Tests de régression: vérifier cohérence avant/après refactoring
- Audits: analyser les décisions prises à une date donnée

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

</details>

---

## 🔗 Points de Vigilance / Dépendances

<details><summary>Configuration et paramètres</summary>

**Paramètres par défaut:**
- `analysisWindowDays: 120` (4 mois d'historique)
- `targetCoverage: 25` (25 jours de couverture souhaitée)
- `leadTime: 5` (5 jours de délai de livraison)
- Seuil de rupture = `targetCoverage + leadTime = 30 jours`

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
- Liste hardcodée dans config (106 catégories actuellement)
- Nécessite maintenance si nouvelles catégories Odoo créées
- Pas de filtre dynamique par type de produit

**Analyse rétroactive:**
- `analysisEndDate` permet de "remonter dans le temps"
- Utile pour validation mais ne reflète pas les événements futurs
- Stock réel non vérifié (uniquement prédiction basée historique)

**Performance:**
- Appel API Odoo par client (pas de batch)
- Charge proportionnelle au nombre de produits dans l'historique
- Filtrage post-récupération (pas de WHERE côté Odoo)

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
