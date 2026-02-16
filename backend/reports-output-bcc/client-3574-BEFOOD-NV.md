# Auto-Proposal Report - BEFOOD NV

**Client:** BEFOOD NV (ID: 3574)
**Analysis Date:** 12/30/2025, 3:16:37 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 1 (728.00€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 728.00€ excl. tax

---

## Core Products

**1 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0164] FILOU MOUTARDE  10 KG | 104 TU1 | 7.00€ | 728.00€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0164] FILOU MOUTARDE  10 KG</strong> - 104 TU1 (728.00€)</summary>

**Recommended Quantity:** 104 TU1
**Source:** LLM
**Unit Price:** 7.00€
**Subtotal:** 728.00€

**Confidence:** 🟢 High (14 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 03/09/2025, soit il y a 19 jours. Le cycle moyen récent est d'environ 30 à 40 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (19 + 30 = 49 jours sans commande potentielle, ce qui dépasse le cycle habituel). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une récurrence forte autour de 104u (valeur dominante en 2024 et présente en 2025). La médiane des commandes récentes (132, 53, 110, 104) se situe entre 104 et 110. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute et privilégier la stabilité historique), la quantité de 104u est retenue.

**Baseline Quantity:** 104
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/18/2024 | 104 | 7.00€ |
| 4/22/2024 | 104 | 7.00€ |
| 1/4/2024 | 104 | 7.00€ |
| 12/19/2023 | 52 | 7.00€ |
| 11/8/2023 | 104 | 7.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-09-22 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 1 at-risk products detected
- **Proposal Final:** 1 products after pricing

### LLM Usage

- **Calls:** 1
- **Tokens:** 1297

### Performance

- **Execution Time:** 2.9s

</details>

---

*Report auto-generated on 12/30/2025, 3:16:37 PM*