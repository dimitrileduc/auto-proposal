# Auto-Proposal Report - LES COCHONAILLES SPRL

**Client:** LES COCHONAILLES SPRL (ID: 3512)
**Analysis Date:** 12/30/2025, 3:18:07 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (1024.55€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1024.55€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0075] FILOU CHASSEUR  10 L | 52 TU1 | 17.00€ | 884.00€ | 🟢 High |
| [PF0077] FILOU PROVENCALE 5 L | 15 TU1 | 9.37€ | 140.55€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0075] FILOU CHASSEUR  10 L</strong> - 52 TU1 (884.00€)</summary>

**Recommended Quantity:** 52 TU1
**Source:** LLM
**Unit Price:** 17.00€
**Subtotal:** 884.00€

**Confidence:** 🟢 High (17 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande moyen d'environ 45 à 60 jours. La dernière commande enregistrée remonte au 04/06/2025, soit plus de 90 jours sans réapprovisionnement. Ce délai dépasse largement le cycle habituel et le seuil de 30 jours (Replenishment Threshold Days), indiquant un risque de rupture imminent ou un besoin déjà présent. La quantité historique est extrêmement stable et systématiquement fixée à 52 unités (médiane parfaite). En application du principe de précaution B2B et de la stabilité du volume, une commande de 52 unités est préconisée.

**Baseline Quantity:** 52
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/11/2023 | 52 | 16.50€ |
| 11/15/2023 | 52 | 16.50€ |
| 10/16/2023 | 52 | 16.50€ |
| 10/2/2023 | 52 | 16.50€ |
| 9/18/2023 | 52 | 16.50€ |

</details>

<details>
<summary><strong>[PF0077] FILOU PROVENCALE 5 L</strong> - 15 TU1 (140.55€)</summary>

**Recommended Quantity:** 15 TU1
**Source:** LLM
**Unit Price:** 9.37€
**Subtotal:** 140.55€

**Confidence:** 🟢 High (13 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 04/06/2025, soit plus de 90 jours sans activité, ce qui dépasse largement les cycles habituels observés l'année précédente (environ 60-80 jours). L'historique N-1 montre une commande importante en août (10u) et une activité régulière en septembre/octobre. En application du principe de précaution B2B et face à l'incertitude du cycle actuel, un besoin de réapprovisionnement est détecté pour couvrir les 30 prochains jours. La quantité retenue est de 15 unités, correspondant à la médiane de la commande la plus récente et des volumes historiques stables, en évitant les pics exceptionnels de 35u.

**Baseline Quantity:** 15
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 1/15/2024 | 35 | 9.10€ |
| 12/11/2023 | 5 | 9.10€ |
| 10/16/2023 | 30 | 9.10€ |
| 10/2/2023 | 5 | 9.10€ |
| 9/18/2023 | 5 | 9.10€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-09-10 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2399

### Performance

- **Execution Time:** 2.7s

</details>

---

*Report auto-generated on 12/30/2025, 3:18:07 PM*