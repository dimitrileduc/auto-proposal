# Auto-Proposal Report - KOCKARTZ Filiale Van den Daele

**Client:** KOCKARTZ Filiale Van den Daele (ID: 33769)
**Analysis Date:** 12/30/2025, 3:16:59 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 1 (312.00€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 312.00€ excl. tax
- **MOQ Adjustment:** +292.50€ to meet minimum of 300€

---

## Core Products

**1 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 16 TU6 | 19.50€ | 312.00€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[JF022] JF MOUTARDE MIEL 250ML WECK</strong> - 16 TU6 (312.00€)</summary>

**Recommended Quantity:** 16 TU6
**Source:** LLM
**Unit Price:** 19.50€
**Subtotal:** 312.00€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle de 24 jours entre les deux dernières commandes (22/09 au 16/10). Au 03/11, 18 jours se sont écoulés depuis la dernière commande, soit 75% du cycle moyen. Le seuil de réapprovisionnement étant de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (seuil > 70% du cycle). La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 10/16/2025 | 1 | 19.50€ |
| 9/22/2025 | 1 | 19.50€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-03 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 1 at-risk products detected
- **Proposal Final:** 1 products after pricing
  - MOQ Adjustment: 19.50€ → 312.00€

### LLM Usage

- **Calls:** 1
- **Tokens:** 1030

### Performance

- **Execution Time:** 2.6s

</details>

---

*Report auto-generated on 12/30/2025, 3:16:59 PM*