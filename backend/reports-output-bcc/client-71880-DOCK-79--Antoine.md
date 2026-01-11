# Auto-Proposal Report - DOCK 79, Antoine

**Client:** DOCK 79, Antoine (ID: 71880)
**Analysis Date:** 12/30/2025, 3:25:44 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 0 (0.00€ excl. tax)
- **Optional Products:** 3 (303.15€ excl. tax)
- **Total:** 303.15€ excl. tax
- **MOQ Adjustment:** +89.55€ to meet minimum of 300€

---

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**3 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 6 TU15 | 17.25€ | 103.50€ |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 6 TU15 | 18.90€ | 113.40€ |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 5 TU15 | 17.25€ | 86.25€ |

### Product Details

<details>
<summary><strong>[NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - 6 TU15 (103.50€)</summary>

**Recommended Quantity:** 6 TU15
**Source:** LLM
**Unit Price:** 17.25€
**Subtotal:** 103.50€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/04/2025, soit 55 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation, bien que peu documenté, dépasse probablement le stock résiduel. En application du principe de précaution B2B (cycle irrégulier/difficile à déterminer), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 4 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane se base sur cette valeur de référence pour maintenir le stock.

**Baseline Quantity:** 4
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/8/2025 | 4 | 17.25€ |

</details>

<details>
<summary><strong>[NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - 6 TU15 (113.40€)</summary>

**Recommended Quantity:** 6 TU15
**Source:** LLM
**Unit Price:** 18.90€
**Subtotal:** 113.40€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 08/04/2025, soit 55 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de ce type. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et compte tenu du seuil de 30 jours, une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à l'historique récent disponible.

**Baseline Quantity:** 4
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/8/2025 | 4 | 18.90€ |

</details>

<details>
<summary><strong>[NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - 5 TU15 (86.25€)</summary>

**Recommended Quantity:** 5 TU15
**Source:** LLM
**Unit Price:** 17.25€
**Subtotal:** 86.25€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 08/04/2025, soit 55 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation, bien qu'encore peu documenté (une seule commande récente), suggère un besoin de renouvellement imminent pour maintenir la disponibilité. En application du principe de précaution B2B et face à l'absence d'historique long, une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à la valeur de la dernière commande connue (médiane sur historique récent).

**Baseline Quantity:** 4
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/8/2025 | 4 | 17.25€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-06-02 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing
  - MOQ Adjustment: 213.60€ → 303.15€

### LLM Usage

- **Calls:** 3
- **Tokens:** 3066

### Performance

- **Execution Time:** 3.0s

</details>

---

*Report auto-generated on 12/30/2025, 3:25:44 PM*