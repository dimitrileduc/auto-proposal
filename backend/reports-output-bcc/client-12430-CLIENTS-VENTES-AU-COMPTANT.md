# Auto-Proposal Report - CLIENTS VENTES AU COMPTANT

**Client:** CLIENTS VENTES AU COMPTANT (ID: 12430)
**Analysis Date:** 12/30/2025, 3:21:39 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (117.00€ excl. tax)
- **Optional Products:** 3 (223.09€ excl. tax)
- **Total:** 340.09€ excl. tax
- **MOQ Adjustment:** +211.99€ to meet minimum of 300€

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 TU6 | 19.50€ | 58.50€ | 🟡 Medium |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 TU6 | 19.50€ | 58.50€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - 3 TU6 (58.50€)</summary>

**Recommended Quantity:** 3 TU6
**Source:** LLM
**Unit Price:** 19.50€
**Subtotal:** 58.50€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

Le produit présente une rotation très faible et irrégulière. La dernière commande remonte à 146 jours, ce qui dépasse largement tout cycle de réapprovisionnement standard. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture prolongée) et conformément à la règle des rotations faibles (1-2u), une commande de 1 unité est préconisée. La quantité est basée sur la médiane des commandes récentes et de l'historique N-1 à période comparable, en excluant le pic exceptionnel de décembre 2023.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/15/2025 | 1 | 19.50€ |
| 5/31/2024 | 1 | 19.50€ |
| 12/13/2023 | 12 | 1.50€ |

</details>

<details>
<summary><strong>[JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - 3 TU6 (58.50€)</summary>

**Recommended Quantity:** 3 TU6
**Source:** LLM
**Unit Price:** 19.50€
**Subtotal:** 58.50€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse montre une rotation très faible et irrégulière (dernière commande il y a 146 jours). Bien que le cycle soit difficile à définir, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le produit est absent du stock depuis longtemps. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et de l'historique N-1, excluant le pic exceptionnel de 12 unités de fin 2023 conformément aux règles de gestion des valeurs extrêmes.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/15/2025 | 1 | 19.50€ |
| 5/31/2024 | 1 | 19.50€ |
| 3/19/2024 | 1 | 19.50€ |
| 12/13/2023 | 12 | 1.50€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**3 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [JF068] FIL VOL AU VENT 800G BOCAL  | 3 TU12 | 44.89€ | 134.67€ |
| [FIL19] FIL VOL AU VENT 400G BOCAL | 2 TU12 | 29.21€ | 58.42€ |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 TU6 | 15.00€ | 30.00€ |

### Product Details

<details>
<summary><strong>[JF068] FIL VOL AU VENT 800G BOCAL </strong> - 3 TU12 (134.67€)</summary>

**Recommended Quantity:** 3 TU12
**Source:** LLM
**Unit Price:** 44.89€
**Subtotal:** 134.67€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit 77 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles de gestion des rotations faibles et à l'utilisation de la médiane historique, la quantité préconisée est de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/23/2025 | 1 | 44.89€ |

</details>

<details>
<summary><strong>[FIL19] FIL VOL AU VENT 400G BOCAL</strong> - 2 TU12 (58.42€)</summary>

**Recommended Quantity:** 2 TU12
**Source:** LLM
**Unit Price:** 29.21€
**Subtotal:** 58.42€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit 77 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé est important. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière), un risque de rupture est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, la quantité de la commande précédente (1u) est utilisée comme référence. Conformément aux règles de rotation faible, on maintient la quantité minimale de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/23/2025 | 1 | 29.21€ |

</details>

<details>
<summary><strong>[JF029] JF VOL AU VENT BOCAL 400G</strong> - 2 TU6 (30.00€)</summary>

**Recommended Quantity:** 2 TU6
**Source:** LLM
**Unit Price:** 15.00€
**Subtotal:** 30.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 23 juin 2025, soit il y a 77 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé suggère un besoin de réapprovisionnement imminent pour éviter une rupture de stock prolongée sur ce produit. En application du principe de précaution B2B et face à un cycle irrégulier, une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane historique et à la règle de maintien pour les produits à très faible rotation.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/23/2025 | 1 | 15.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-09-08 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 5 at-risk products detected
- **Proposal Final:** 5 products after pricing
  - MOQ Adjustment: 128.10€ → 340.09€

### LLM Usage

- **Calls:** 5
- **Tokens:** 5150

### Performance

- **Execution Time:** 2.8s

</details>

---

*Report auto-generated on 12/30/2025, 3:21:39 PM*