# Auto-Proposal Report - BONNI

**Client:** BONNI (ID: 3750)
**Analysis Date:** 12/30/2025, 3:08:42 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 1 (306.60€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 306.60€ excl. tax
- **MOQ Adjustment:** +219.00€ to meet minimum of 300€

---

## Core Products

**1 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 35 TU1 | 8.76€ | 306.60€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0165] FILOU COCKTAIL FRENKEN 3 L</strong> - 35 TU1 (306.60€)</summary>

**Recommended Quantity:** 35 TU1
**Source:** LLM
**Unit Price:** 8.76€
**Subtotal:** 306.60€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 04/06/2025, soit 56 jours. Bien que l'historique récent soit limité à une seule commande de 10u, le délai écoulé dépasse largement le cycle de réapprovisionnement suggéré par les données N-1 (intervalles de 9 à 70 jours). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé. En application du principe de précaution B2B et de la règle de maintien des quantités régulières, une commande de 10 unités (médiane du volume récent le plus bas) est préconisée.

**Baseline Quantity:** 10
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/4/2025 | 10 | 8.76€ |
| 2/15/2024 | 10 | 8.50€ |
| 11/28/2023 | 30 | 8.50€ |
| 8/31/2023 | 20 | 8.50€ |
| 8/22/2023 | 20 | 8.50€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-07-30 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 1 at-risk products detected
- **Proposal Final:** 1 products after pricing
  - MOQ Adjustment: 87.60€ → 306.60€

### LLM Usage

- **Calls:** 4
- **Tokens:** 3899

### Performance

- **Execution Time:** 2.7s

</details>

---

*Report auto-generated on 12/30/2025, 3:08:42 PM*