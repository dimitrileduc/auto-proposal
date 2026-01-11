# Auto-Proposal Report - HOUGARDY S.A.

**Client:** HOUGARDY S.A. (ID: 3576)
**Analysis Date:** 12/30/2025, 3:04:36 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (1808.40€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1808.40€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0078] FILOU CHASSEUR 5 L | 160 TU1 | 8.96€ | 1433.60€ | 🟢 High |
| [PF0077] FILOU PROVENCALE 5 L | 40 TU1 | 9.37€ | 374.80€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 160 TU1 (1433.60€)</summary>

**Recommended Quantity:** 160 TU1
**Source:** LLM
**Unit Price:** 8.96€
**Subtotal:** 1433.60€

**Confidence:** 🟢 High (51 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique récent montre un cycle de commande très fréquent, généralement tous les 7 à 14 jours. La dernière commande datant du 06/11 (il y a 6 jours), le risque de rupture est élevé dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que la dernière commande fût de 80u, le volume récurrent le plus fréquent et la médiane des commandes récentes s'établissent à 160u. En application du principe de précaution B2B pour éviter une rupture sur un produit à rotation rapide, une commande de 160u est préconisée.

**Baseline Quantity:** 160
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 1/18/2024 | 160 | 8.70€ |
| 1/4/2024 | 80 | 8.70€ |
| 12/7/2023 | 160 | 8.70€ |
| 11/30/2023 | 160 | 8.70€ |
| 11/16/2023 | 160 | 8.70€ |

</details>

<details>
<summary><strong>[PF0077] FILOU PROVENCALE 5 L</strong> - 40 TU1 (374.80€)</summary>

**Recommended Quantity:** 40 TU1
**Source:** LLM
**Unit Price:** 9.37€
**Subtotal:** 374.80€

**Confidence:** 🟢 High (18 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle récent montre une fréquence de commande régulière d'environ 30 à 35 jours (05/09, 02/10, 06/11). Bien que la dernière commande date de seulement 6 jours, le seuil de réapprovisionnement de 30 jours couvre la période où la prochaine commande est statistiquement attendue (début décembre). Par principe de précaution B2B et pour éviter une rupture sur l'horizon de 30 jours, un besoin est identifié. La quantité retenue est de 40 unités, correspondant à la médiane et à la constante observée sur les trois dernières commandes ainsi que sur la majorité de l'historique N-1.

**Baseline Quantity:** 40
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/4/2024 | 20 | 9.10€ |
| 5/8/2024 | 40 | 9.10€ |
| 4/11/2024 | 40 | 9.10€ |
| 2/21/2024 | 20 | 9.10€ |
| 2/1/2024 | 40 | 9.10€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-12 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2623

### Performance

- **Execution Time:** 2.9s

</details>

---

*Report auto-generated on 12/30/2025, 3:04:36 PM*