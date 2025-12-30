# Stock Replenishment

Calcule les quantités à commander pour chaque produit, basées sur l'historique et les prédictions LLM.

## Objectif

Analyser l'historique d'achat (2 ans) et utiliser Claude pour prédire les quantités à commander. Fallback sur la médiane si LLM échoue.

## Flux

```mermaid
flowchart LR
    A["Client +<br/>Products"] --> B["Historique<br/>2 ans"]
    B --> C{\"2+ orders?\"}
    C -->|Oui| D["LLM Prediction<br/>(Claude)"]
    C -->|Non| E["Median<br/>Fallback"]
    D --> F["Quantity +<br/>Metadata"]
    E --> F
```

## Entrée / Sortie

**Fonction principale:**
```typescript
calculateReplenishmentNeeds(params: {
  clientId: number;
  analysisEndDate?: string;        // Default: today
  replenishmentThreshold?: number; // Default: 30 days
}): Promise<StockReplenishmentResult>
```

**Résultat:**
```typescript
{
  products: ProductStockStatus[];       // Filtrés: ceux avec risque de stockout
  all_products: ProductStockStatus[];   // Tous analysés (pour backtesting)
  llm_usage: {
    input_tokens: number;
    output_tokens: number;
    total_cost: number;
  }
}
```

**ProductStockStatus** (détail de chaque produit):
```typescript
{
  product_id: number;
  product_name: string;
  product_uom: string;

  // Quantité calculée
  quantity_to_order: number;
  quantity_source: 'llm' | 'median-fallback';  // Stratégie utilisée
  confidence: 'low' | 'medium' | 'high';       // Niveau de confiance

  // Historique de commandes
  order_history: {
    count: number;        // Total commandes
    dates: string[];      // Dates de chaque commande
    quantities: number[]; // Quantités de chaque commande
  };

  // Données envoyées au LLM (audit trail)
  llm_input_data?: {
    recent_orders: Array<{
      order_id: number;
      order_name: string;
      date_order: string;
      quantity: number;
      price_unit: number;
    }>;
    historical_average: number;
    seasonal_data: Record<string, number>;  // Par mois/saison
  };

  // Résultat LLM (si applicable)
  llm_prediction?: {
    quantity: number;
    reasoning: string;
    confidence: number;     // 0-1 (certitude du LLM)
    baseline: number;       // Quantité fallback (pour comparaison)
  };

  // Métadonnées du calcul
  calculation_metadata: {
    strategy: 'llm' | 'median-fallback';
    order_count: number;
    historical_quantities: number[];
    median_value: number;
    confidence_level: 'low' | 'medium' | 'high';
  };
}
```

## Fenêtres de données

| Fenêtre | Durée | Fonction |
|---------|-------|----------|
| **Analysis window** | 180 jours | Filtrer quels produits ont récemment une activité |
| **History window** | 730 jours (2 ans) | Historique complet récupéré d'Odoo |
| **LLM recent** | 5 mois (derniers N orders) | Tendance récente envoyée au LLM |
| **LLM lastYear** | 5 mois (année -1) | Baseline saisonnière pour le LLM |

### Flux exact:
1. Récupérer 730j d'historique complet
2. Filtrer produits avec ≥1 commande dans 180j
3. Split 730j en recent (5 mois) + lastYear (5 mois -1)
4. Envoyer au LLM: recent + lastYear + threshold
5. LLM retourne qty + confiance + reasoning
6. Si LLM échoue: Fallback sur 4 niveaux

## Stratégie: LLM + Fallback

**Tous** les produits (≥1 commande) → Claude LLM

Si LLM échoue → Fallback:

| Commandes | Stratégie | Confiance |
|-----------|-----------|-----------|
| 0 | Skip | — |
| 1 | Repeat | low |
| 2-4 | Médiane | medium |
| 5+ | Médiane 10 dernières | high |

## Configuration

```typescript
replenishmentThreshold: 30  // days of stock coverage
```

Performance:
- Max 10 requêtes LLM en parallèle

## Cas d'usage

### 1. Calcul standard

```typescript
const needs = await calculateReplenishmentNeeds({
  clientId: 123,
  replenishmentThreshold: 30
});
// Produits à commander avec quantités
```

### 2. Test avec date custom (pour backtesting)

```typescript
// Simuler le monde 5 jours avant une commande
const needs = await calculateReplenishmentNeeds({
  clientId: 123,
  analysisEndDate: "2025-10-15"  // 5 days before order
});
```

### 3. Analyser par produit

```typescript
const needs = await calculateReplenishmentNeeds({
  clientId: 123
});

// Products with LLM
const withLLM = needs.filter(p => p.source === 'llm');

// Products with median (only 1 order)
const withMedian = needs.filter(p => p.source === 'median');
```

## LLM vs Fallback

| Condition | Stratégie | Raison |
|-----------|-----------|--------|
| **2+ orders** | Claude LLM | Assez de contexte pour prédiction |
| **1 order** | Médiane historique | Manque de données, fallback sûr |
| **0 orders** | Exclu | Pas de prédiction possible |

## Intégration

Utilisé par:
- **[Client Proposal task](../tasks/client-proposal.md)** - Étape 1
- **[Proposal Preparation](./proposal-preparation.md)** - Consomme output
- **[Backtesting](./backtesting.md)** - Comparaison vs réalité

Voir aussi:
- **[LLM Services](../infrastructure/llm.md)** - Détails Claude
- **[Proposal Preparation](./proposal-preparation.md)** - Étape suivante

---

**Source**: `backend/src/features/stock-replenishment/`
