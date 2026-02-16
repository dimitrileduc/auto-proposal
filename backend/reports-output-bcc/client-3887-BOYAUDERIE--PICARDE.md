# Auto-Proposal Report - BOYAUDERIE  PICARDE

**Client:** BOYAUDERIE  PICARDE (ID: 3887)
**Analysis Date:** 12/30/2025, 3:17:30 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (957.84€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 957.84€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 10 TU6 | 45.12€ | 451.20€ | 🟢 High |
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 8 TU6 | 54.06€ | 432.48€ | 🟢 High |
| [PF0549] YVALLI SAUCE PIZZA 2,5 KG | 2 TU6 | 37.08€ | 74.16€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - 10 TU6 (451.20€)</summary>

**Recommended Quantity:** 10 TU6
**Source:** LLM
**Unit Price:** 45.12€
**Subtotal:** 451.20€

**Confidence:** 🟢 High (8 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 03/09/2025, soit 54 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais espacé (environ tous les 2 à 4 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent si l'on suit la saisonnalité de l'année précédente (commandes en fin d'année). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 10 unités, correspondant à la médiane historique et à la valeur la plus basse constatée hors pic exceptionnel, afin d'éviter le surstockage.

**Baseline Quantity:** 10
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 1/6/2025 | 15 | 45.12€ |
| 7/10/2024 | 10 | 46.50€ |
| 3/26/2024 | 10 | 42.00€ |
| 1/2/2024 | 10 | 43.80€ |
| 11/23/2023 | 15 | 43.80€ |

</details>

<details>
<summary><strong>[PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> - 8 TU6 (432.48€)</summary>

**Recommended Quantity:** 8 TU6
**Source:** LLM
**Unit Price:** 54.06€
**Subtotal:** 432.48€

**Confidence:** 🟢 High (6 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 03/09/2025, soit 54 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés précédemment. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un réapprovisionnement est nécessaire pour couvrir les 30 prochains jours. La quantité retenue est de 8 unités, correspondant à la dernière commande connue et au volume maximal observé, afin de sécuriser le stock sur ce produit à rotation lente.

**Baseline Quantity:** 8
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/10/2025 | 10 | 54.06€ |
| 1/6/2025 | 5 | 54.06€ |
| 7/10/2024 | 8 | 54.90€ |
| 3/26/2024 | 4 | 50.40€ |
| 11/23/2023 | 5 | 50.40€ |

</details>

<details>
<summary><strong>[PF0549] YVALLI SAUCE PIZZA 2,5 KG</strong> - 2 TU6 (74.16€)</summary>

**Recommended Quantity:** 2 TU6
**Source:** LLM
**Unit Price:** 37.08€
**Subtotal:** 74.16€

**Confidence:** 🟢 High (6 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité sporadique. En l'absence de données récentes et compte tenu du principe de précaution B2B, un besoin est identifié pour éviter une rupture prolongée sur cette référence. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente montre des commandes de 1, 2 et 4 unités. La médiane de ces commandes est de 2 unités. Conformément à la règle de ne pas surestimer pour le stock de sécurité et de privilégier la médiane, la quantité retenue est de 2 unités.

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/10/2025 | 4 | 37.08€ |
| 1/6/2025 | 2 | 37.08€ |
| 7/10/2024 | 2 | 38.40€ |
| 1/2/2024 | 4 | 33.90€ |
| 11/23/2023 | 1 | 33.90€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-27 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3225

### Performance

- **Execution Time:** 2.5s

</details>

---

*Report auto-generated on 12/30/2025, 3:17:30 PM*