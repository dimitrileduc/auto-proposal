# Auto-Proposal Report - SB FRISCHMARKT

**Client:** SB FRISCHMARKT (ID: 3872)
**Analysis Date:** 12/30/2025, 3:08:47 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 1 (2014.80€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 2014.80€ excl. tax

---

## Core Products

**1 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 230 TU1 | 8.76€ | 2014.80€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0165] FILOU COCKTAIL FRENKEN 3 L</strong> - 230 TU1 (2014.80€)</summary>

**Recommended Quantity:** 230 TU1
**Source:** LLM
**Unit Price:** 8.76€
**Subtotal:** 2014.80€

**Confidence:** 🟢 High (14 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande date du 07/10/2025, soit 35 jours avant la date actuelle (11/11/2025). L'historique montre un cycle moyen d'environ 45 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre habituelle de commande. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 191u, 300u et 230u. La médiane de ces trois valeurs est 230u. Conformément à la règle de privilégier la médiane et d'éviter les pics (300u), la quantité retenue est de 230u.

**Baseline Quantity:** 230
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/3/2024 | 300 | 8.50€ |
| 4/24/2024 | 300 | 8.50€ |
| 3/21/2024 | 200 | 8.50€ |
| 1/31/2024 | 300 | 8.50€ |
| 11/29/2023 | 300 | 8.50€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-11 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 1 at-risk products detected
- **Proposal Final:** 1 products after pricing

### LLM Usage

- **Calls:** 1
- **Tokens:** 1234

### Performance

- **Execution Time:** 3.0s

</details>

---

*Report auto-generated on 12/30/2025, 3:08:47 PM*