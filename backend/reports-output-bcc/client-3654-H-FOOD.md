# Auto-Proposal Report - H-FOOD

**Client:** H-FOOD (ID: 3654)
**Analysis Date:** 12/30/2025, 3:22:17 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 1 (716.80€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 716.80€ excl. tax

---

## Core Products

**1 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0078] FILOU CHASSEUR 5 L | 80 TU1 | 8.96€ | 716.80€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 80 TU1 (716.80€)</summary>

**Recommended Quantity:** 80 TU1
**Source:** LLM
**Unit Price:** 8.96€
**Subtotal:** 716.80€

**Confidence:** 🟢 High (17 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande régulier d'environ 25 à 35 jours. La dernière commande datant du 16 juillet 2025 (soit 33 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint. Le risque de rupture est imminent. Concernant la quantité, l'historique récent et N-1 sur la même période indiquent une stabilité parfaite à 80 unités. La médiane des commandes est de 80u, ce qui constitue la cible de réapprovisionnement pour maintenir le stock sans surstockage.

**Baseline Quantity:** 80
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/15/2023 | 80 | 8.70€ |
| 11/10/2023 | 80 | 8.70€ |
| 10/16/2023 | 80 | 8.70€ |
| 9/18/2023 | 60 | 8.70€ |
| 8/24/2023 | 60 | 8.70€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-08-18 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 1 at-risk products detected
- **Proposal Final:** 1 products after pricing

### LLM Usage

- **Calls:** 1
- **Tokens:** 1210

### Performance

- **Execution Time:** 3.7s

</details>

---

*Report auto-generated on 12/30/2025, 3:22:17 PM*