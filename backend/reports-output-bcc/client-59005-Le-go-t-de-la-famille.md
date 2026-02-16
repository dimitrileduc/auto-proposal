# Auto-Proposal Report - Le goût de la famille

**Client:** Le goût de la famille (ID: 59005)
**Analysis Date:** 12/30/2025, 3:22:44 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 1 (151.20€ excl. tax)
- **Optional Products:** 1 (151.20€ excl. tax)
- **Total:** 302.40€ excl. tax
- **MOQ Adjustment:** +280.80€ to meet minimum of 300€

---

## Core Products

**1 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 14 TU6 | 10.80€ | 151.20€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - 14 TU6 (151.20€)</summary>

**Recommended Quantity:** 14 TU6
**Source:** LLM
**Unit Price:** 10.80€
**Subtotal:** 151.20€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 05/02/2025, soit plus de 100 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement le cycle observé entre les deux premières commandes (23 jours). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la valeur basse de l'historique récent pour limiter le risque de surstock sur un produit à faible rotation.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 2/5/2025 | 4 | 10.80€ |
| 1/13/2025 | 1 | 10.80€ |
| 12/17/2024 | 1 | 10.80€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**1 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 14 TU6 | 10.80€ | 151.20€ |

### Product Details

<details>
<summary><strong>[TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - 14 TU6 (151.20€)</summary>

**Recommended Quantity:** 14 TU6
**Source:** LLM
**Unit Price:** 10.80€
**Subtotal:** 151.20€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou sur l'année précédente (N-1). Selon le principe de précaution B2B et la règle de détection en cas de cycle indéterminé ou de doute sur la rotation, un besoin est identifié pour éviter une absence de stock sur un produit référencé. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique permettant de calculer une médiane, et conformément à la règle sur les rotations très faibles ou incertaines, la quantité minimale de 1 unité est préconisée pour initialiser le stock sans risque de surstockage.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/17/2024 | 2 | 10.80€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-05-20 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing
  - MOQ Adjustment: 21.60€ → 302.40€

### LLM Usage

- **Calls:** 2
- **Tokens:** 2040

### Performance

- **Execution Time:** 2.4s

</details>

---

*Report auto-generated on 12/30/2025, 3:22:44 PM*