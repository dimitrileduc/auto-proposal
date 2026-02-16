# Auto-Proposal Report - Sweet Little Belgium

**Client:** Sweet Little Belgium (ID: 23924)
**Analysis Date:** 12/30/2025, 3:23:53 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (279.60€ excl. tax)
- **Optional Products:** 1 (22.20€ excl. tax)
- **Total:** 301.80€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 TU6 | 13.10€ | 26.20€ | 🟡 Medium |
| [LV162] LV Tartinade Tomato Basilico 190g | 20 TU6 | 12.67€ | 253.40€ | 🟢 High |

### Product Details

<details>
<summary><strong>[LV130] LV BIO Tartinade Paprika Chili 190g</strong> - 2 TU6 (26.20€)</summary>

**Recommended Quantity:** 2 TU6
**Source:** LLM
**Unit Price:** 13.10€
**Subtotal:** 26.20€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit environ 145 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue pour un produit de type tartinade suggère un besoin de réapprovisionnement imminent ou un risque de rupture de stock en rayon. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est prévue. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément aux règles pour les rotations faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane et la valeur la plus basse de l'historique convergent vers 2 unités.

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/19/2025 | 2 | 13.10€ |
| 12/16/2024 | 1 | 12.72€ |

</details>

<details>
<summary><strong>[LV162] LV Tartinade Tomato Basilico 190g</strong> - 20 TU6 (253.40€)</summary>

**Recommended Quantity:** 20 TU6
**Source:** LLM
**Unit Price:** 12.67€
**Subtotal:** 253.40€

**Confidence:** 🟢 High (8 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 19 juin 2025, soit plus de 140 jours sans activité, ce qui dépasse largement les cycles observés. L'historique de l'année précédente montre une activité importante sur la période de novembre (pics à 50u et 180u en 2023). En application du principe de précaution B2B et face à l'incertitude du cycle actuel à l'approche de la période de fin d'année, un besoin est détecté. La quantité est fixée à 20 unités, correspondant à la commande la plus récente, afin de couvrir le besoin sans surstocker par rapport aux volumes médians habituels (hors pics exceptionnels).

**Baseline Quantity:** 20
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/30/2024 | 10 | 12.30€ |
| 7/10/2024 | 25 | 12.30€ |
| 12/14/2023 | 35 | 12.30€ |
| 11/28/2023 | 180 | 12.30€ |
| 11/17/2023 | 50 | 12.30€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**1 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 1 TU12 | 22.20€ | 22.20€ |

### Product Details

<details>
<summary><strong>[WIG06] WIGNAC cidre naturel bio sans alcool 330ml</strong> - 1 TU12 (22.20€)</summary>

**Recommended Quantity:** 1 TU12
**Source:** LLM
**Unit Price:** 22.20€
**Subtotal:** 22.20€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit plus de 140 jours. Bien que la rotation soit très faible, le principe de précaution B2B et l'absence de cycle régulier identifiable imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée sur un produit actif. ÉTAPE 2 : Estimation de la quantité. En suivant la règle des rotations très faibles (1-2u), on maintient la quantité observée lors de la dernière commande. La médiane et la valeur la plus basse de l'historique récent convergent vers 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/19/2025 | 1 | 22.20€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-11 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3201

### Performance

- **Execution Time:** 3.6s

</details>

---

*Report auto-generated on 12/30/2025, 3:23:53 PM*