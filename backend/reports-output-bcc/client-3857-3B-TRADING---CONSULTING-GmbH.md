# Auto-Proposal Report - 3B TRADING & CONSULTING GmbH

**Client:** 3B TRADING & CONSULTING GmbH (ID: 3857)
**Analysis Date:** 12/30/2025, 3:07:53 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (1673.75€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1673.75€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 39 TU1 | 25.75€ | 1004.25€ | 🟢 High |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 26 TU1 | 25.75€ | 669.50€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0070] FILOU/LD SAUCE ANDALOUSE  10 L</strong> - 39 TU1 (1004.25€)</summary>

**Recommended Quantity:** 39 TU1
**Source:** LLM
**Unit Price:** 25.75€
**Subtotal:** 1004.25€

**Confidence:** 🟢 High (18 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 34 jours (intervalles récents de 33, 34 et 34 jours). La dernière commande datant du 22 septembre, soit il y a 35 jours, le seuil de réapprovisionnement de 30 jours est dépassé, confirmant un risque de rupture imminent. Pour la quantité, l'historique récent présente des valeurs de 39, 55, 39 et 44. La médiane de ces commandes est de 41.5, mais conformément à la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute et la récurrence historique forte du chiffre 39 (présent 6 fois sur l'ensemble des données), une quantité de 39 unités est préconisée.

**Baseline Quantity:** 39
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/13/2024 | 40 | 25.00€ |
| 5/6/2024 | 39 | 25.00€ |
| 4/2/2024 | 26 | 25.00€ |
| 1/31/2024 | 39 | 25.00€ |
| 11/30/2023 | 32 | 25.00€ |

</details>

<details>
<summary><strong>[PF0608] FILOU/LD SAUCE SAMOURAI  10 L</strong> - 26 TU1 (669.50€)</summary>

**Recommended Quantity:** 26 TU1
**Source:** LLM
**Unit Price:** 25.75€
**Subtotal:** 669.50€

**Confidence:** 🟢 High (17 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle moyen d'environ 33 jours entre les commandes récentes. La dernière commande datant du 22 septembre (soit 35 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est dépassé, indiquant un risque de rupture imminent. Bien que la dernière commande ait été de 44u (pic exceptionnel), l'historique montre une récurrence stable à 26u (juin et juillet 2025, ainsi qu'avril 2024). En appliquant la règle de la médiane et en ignorant le pic récent pour éviter le surstockage, la quantité préconisée est de 26u.

**Baseline Quantity:** 26
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/13/2024 | 12 | 25.00€ |
| 5/6/2024 | 13 | 25.00€ |
| 4/2/2024 | 26 | 25.00€ |
| 1/31/2024 | 13 | 25.00€ |
| 11/30/2023 | 20 | 25.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-27 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2482

### Performance

- **Execution Time:** 2.7s

</details>

---

*Report auto-generated on 12/30/2025, 3:07:53 PM*