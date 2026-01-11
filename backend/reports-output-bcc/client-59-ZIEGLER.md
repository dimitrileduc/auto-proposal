# Auto-Proposal Report - ZIEGLER

**Client:** ZIEGLER (ID: 59)
**Analysis Date:** 12/30/2025, 3:27:09 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 0 (0.00€ excl. tax)
- **Optional Products:** 4 (1417.02€ excl. tax)
- **Total:** 1417.02€ excl. tax

---

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**4 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [PF1524] JF VINAIGRET TRUFFES WECK 200M | 25 TU9 | 26.10€ | 652.50€ |
| [PF1446] JF MAYONNA DU CHEF 470 ML WECK | 22 TU6 | 22.20€ | 488.40€ |
| [PF2140] MAYONNAISE BIO  10 L | 6 TU1 | 42.50€ | 255.00€ |
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 1 TU12 | 21.12€ | 21.12€ |

### Product Details

<details>
<summary><strong>[PF1524] JF VINAIGRET TRUFFES WECK 200M</strong> - 25 TU9 (652.50€)</summary>

**Recommended Quantity:** 25 TU9
**Source:** LLM
**Unit Price:** 26.10€
**Subtotal:** 652.50€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 22 novembre 2024, soit 53 jours avant la date actuelle. En l'absence d'un historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique car le délai depuis la dernière commande est important et risque de couvrir une rupture imminente dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de la médiane sur l'historique récent, la quantité de 25 unités est reconduite pour maintenir le stock.

**Baseline Quantity:** 25
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 11/22/2024 | 25 | 26.10€ |

</details>

<details>
<summary><strong>[PF1446] JF MAYONNA DU CHEF 470 ML WECK</strong> - 22 TU6 (488.40€)</summary>

**Recommended Quantity:** 22 TU6
**Source:** LLM
**Unit Price:** 22.20€
**Subtotal:** 488.40€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 22 novembre 2024, soit 53 jours avant la date actuelle. En l'absence d'historique plus large pour définir un cycle précis, le principe de précaution B2B s'applique car le délai écoulé suggère un risque imminent de rupture de stock pour couvrir les 30 prochains jours. La quantité retenue correspond à la dernière commande connue (22u), conformément à la règle de maintien des volumes récents en cas de rotation régulière ou unique.

**Baseline Quantity:** 22
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 11/22/2024 | 22 | 22.20€ |

</details>

<details>
<summary><strong>[PF2140] MAYONNAISE BIO  10 L</strong> - 6 TU1 (255.00€)</summary>

**Recommended Quantity:** 6 TU1
**Source:** LLM
**Unit Price:** 42.50€
**Subtotal:** 255.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 07/11/2024, soit 68 jours. En l'absence d'historique plus large pour définir un cycle précis, le principe de précaution B2B s'applique car le délai écoulé suggère un besoin imminent ou un risque de rupture sous 30 jours. La quantité retenue correspond à la dernière commande connue (6u), conformément à la règle de maintien des volumes sur rotation régulière ou unique.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 11/7/2024 | 6 | 42.50€ |

</details>

<details>
<summary><strong>[PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - 1 TU12 (21.12€)</summary>

**Recommended Quantity:** 1 TU12
**Source:** LLM
**Unit Price:** 21.12€
**Subtotal:** 21.12€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou de cycle indéterminé, une commande est nécessaire pour initialiser le stock ou répondre à un besoin potentiel. La quantité minimale de 1 unité est retenue conformément à la règle de rotation faible/incertaine afin d'éviter une rupture sans risquer de surstockage.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/12/2024 | 9 | 21.12€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-01-14 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 4 at-risk products detected
- **Proposal Final:** 4 products after pricing

### LLM Usage

- **Calls:** 4
- **Tokens:** 3942

### Performance

- **Execution Time:** 2.9s

</details>

---

*Report auto-generated on 12/30/2025, 3:27:09 PM*