# Auto-Proposal Report - LA MOUTARDERIE 2

**Client:** LA MOUTARDERIE 2 (ID: 3658)
**Analysis Date:** 12/30/2025, 3:10:45 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 4 (412.89€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 412.89€ excl. tax

---

## Core Products

**4 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 10 TU1 | 23.18€ | 231.80€ | 🟢 High |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 3 TU12 | 33.36€ | 100.08€ | 🟡 Medium |
| [PF0089] FILOU VOL AU VENT 400 GR | 3 TU12 | 24.60€ | 73.80€ | 🟢 High |
| [PF0097] FILOU MOUTARDE 5 KG | 1 TU1 | 7.21€ | 7.21€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - 10 TU1 (231.80€)</summary>

**Recommended Quantity:** 10 TU1
**Source:** LLM
**Unit Price:** 23.18€
**Subtotal:** 231.80€

**Confidence:** 🟢 High (18 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 à 70 jours. La dernière commande datant du 4 septembre 2025 (soit 46 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement (total de 76 jours écoulés). Historiquement, le client commande très régulièrement ce produit en octobre (cf. 09/10/2024). La quantité est fixée à 10 unités, ce qui correspond à la médiane stricte et constante des commandes récentes et historiques, en excluant le pic ponctuel de 15u et la valeur isolée de 1u.

**Baseline Quantity:** 10
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/9/2024 | 10 | 26.00€ |
| 2/22/2024 | 10 | 22.50€ |
| 1/18/2024 | 10 | 22.50€ |
| 12/7/2023 | 10 | 22.50€ |
| 11/3/2023 | 10 | 22.50€ |

</details>

<details>
<summary><strong>[PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - 3 TU12 (100.08€)</summary>

**Recommended Quantity:** 3 TU12
**Source:** LLM
**Unit Price:** 33.36€
**Subtotal:** 100.08€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 02/07/2025, soit plus de 100 jours sans activité sur un produit qui présente un historique de vente en fin d'année (décembre 2023). En application du principe de précaution B2B, l'absence de commande récente sur une période aussi longue couplée à l'approche de la période de fin d'année (N-2) crée un doute sur le cycle de rotation. Un besoin est donc détecté pour éviter une rupture. La quantité retenue est de 3 unités, correspondant à la médiane des commandes historiques (2, 3, 4) et à la dernière quantité commandée, afin de maintenir un stock minimal sans risque de surstockage.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/2/2025 | 3 | 33.36€ |
| 11/7/2024 | 1 | 32.40€ |
| 7/9/2024 | 4 | 32.40€ |
| 12/7/2023 | 2 | 32.40€ |

</details>

<details>
<summary><strong>[PF0089] FILOU VOL AU VENT 400 GR</strong> - 3 TU12 (73.80€)</summary>

**Recommended Quantity:** 3 TU12
**Source:** LLM
**Unit Price:** 24.60€
**Subtotal:** 73.80€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 02/07/2025, soit plus de 100 jours sans activité pour un produit qui présentait une rotation plus régulière l'année précédente (tous les 1 à 4 mois). En application du principe de précaution B2B, l'absence de commande récente sur une période aussi longue constitue un risque de rupture ou un besoin imminent. La quantité retenue est de 3 unités, correspondant à la médiane des commandes historiques (2, 3, 4, 4, 5) et à la dernière quantité commandée, afin de couvrir le besoin sans surstocker.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 11/7/2024 | 4 | 23.40€ |
| 5/15/2024 | 2 | 23.40€ |
| 4/9/2024 | 4 | 22.80€ |
| 12/7/2023 | 5 | 23.40€ |
| 11/3/2023 | 4 | 23.40€ |

</details>

<details>
<summary><strong>[PF0097] FILOU MOUTARDE 5 KG</strong> - 1 TU1 (7.21€)</summary>

**Recommended Quantity:** 1 TU1
**Source:** LLM
**Unit Price:** 7.21€
**Subtotal:** 7.21€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 20 mai 2025, soit 153 jours sans activité. L'historique montre un cycle de commande irrégulier mais récurrent (environ tous les 2 à 3 mois en 2024). Selon le principe de précaution B2B, l'absence prolongée de commande sur un produit à rotation faible mais constante crée un doute sur l'état du stock. Un besoin est donc détecté pour couvrir les 30 prochains jours. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique (toutes les commandes passées sont de 1u).

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/9/2024 | 1 | 7.00€ |
| 6/11/2024 | 1 | 7.00€ |
| 4/9/2024 | 1 | 8.05€ |
| 1/18/2024 | 1 | 7.00€ |
| 12/7/2023 | 1 | 7.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-20 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 4 at-risk products detected
- **Proposal Final:** 4 products after pricing

### LLM Usage

- **Calls:** 4
- **Tokens:** 4530

### Performance

- **Execution Time:** 3.3s

</details>

---

*Report auto-generated on 12/30/2025, 3:10:45 PM*