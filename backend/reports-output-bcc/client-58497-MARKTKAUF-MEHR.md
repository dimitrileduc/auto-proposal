# Auto-Proposal Report - MARKTKAUF MEHR

**Client:** MARKTKAUF MEHR (ID: 58497)
**Analysis Date:** 12/30/2025, 3:22:37 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (321.00€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 321.00€ excl. tax
- **MOQ Adjustment:** +271.80€ to meet minimum of 300€

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 7 TU6 | 25.80€ | 180.60€ | 🟡 Medium |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 6 TU6 | 23.40€ | 140.40€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - 7 TU6 (180.60€)</summary>

**Recommended Quantity:** 7 TU6
**Source:** LLM
**Unit Price:** 25.80€
**Subtotal:** 180.60€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune donnée historique (récente ou N-1) n'est disponible pour ce produit. En application du principe de précaution B2B et de la règle sur les cycles indéterminés, l'absence totale d'historique génère un doute sur le besoin immédiat. Il est préférable de prévoir une commande pour éviter une rupture potentielle sur un produit référencé. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de données de rotation, la règle pour les rotations très faibles ou inconnues s'applique : maintien d'une quantité minimale de sécurité de 1 unité pour tester la demande sans risquer un surstock inutile.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/25/2025 | 2 | 25.80€ |
| 1/7/2025 | 1 | 25.80€ |
| 11/7/2024 | 1 | 25.80€ |

</details>

<details>
<summary><strong>[JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - 6 TU6 (140.40€)</summary>

**Recommended Quantity:** 6 TU6
**Source:** LLM
**Unit Price:** 23.40€
**Subtotal:** 140.40€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'existe aucun historique de commande récent ou sur l'année précédente pour ce produit. En l'absence totale de données de cycle ou de rotation, le principe de précaution B2B s'applique : tout doute sur le besoin impose de prévoir une commande pour éviter une rupture potentielle sur un produit référencé. ÉTAPE 2 : ESTIMATION QUANTITÉ. Sans historique pour calculer une médiane, la règle des rotations très faibles est appliquée par défaut. Une quantité minimale de 1 unité est préconisée pour initialiser le stock ou répondre à un besoin ponctuel sans risquer de surstockage.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/25/2025 | 1 | 23.40€ |
| 1/7/2025 | 1 | 23.40€ |
| 11/7/2024 | 1 | 23.40€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-05 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing
  - MOQ Adjustment: 49.20€ → 321.00€

### LLM Usage

- **Calls:** 9
- **Tokens:** 8578

### Performance

- **Execution Time:** 2.9s

</details>

---

*Report auto-generated on 12/30/2025, 3:22:37 PM*