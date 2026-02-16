# Auto-Proposal Report - FRITE D'OR SPRL

**Client:** FRITE D'OR SPRL (ID: 33668)
**Analysis Date:** 12/30/2025, 3:14:08 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (1109.91€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1109.91€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 TU1 | 19.57€ | 1017.64€ | 🟢 High |
| [PF0097] FILOU MOUTARDE 5 KG | 5 TU1 | 7.21€ | 36.05€ | 🟢 High |
| [PF0077] FILOU PROVENCALE 5 L | 6 TU1 | 9.37€ | 56.22€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0085] FILOU CURRY KETCHUP  10 KG</strong> - 52 TU1 (1017.64€)</summary>

**Recommended Quantity:** 52 TU1
**Source:** LLM
**Unit Price:** 19.57€
**Subtotal:** 1017.64€

**Confidence:** 🟢 High (11 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande régulier d'environ 60 jours (2 mois). La dernière commande remonte au 22 août 2025, soit il y a 60 jours exactement par rapport à la date actuelle (21 octobre). Le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que la dernière commande était de 55u, l'historique long terme (N-1) est extrêmement stable à 52u. En application de la règle de la médiane et de la prudence sur les quantités (choisir la plus basse en cas de doute), une commande de 52u est préconisée pour couvrir les besoins du prochain cycle.

**Baseline Quantity:** 52
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/11/2024 | 52 | 19.00€ |
| 4/16/2024 | 52 | 19.00€ |
| 3/12/2024 | 52 | 19.00€ |
| 1/16/2024 | 52 | 19.00€ |
| 11/8/2023 | 52 | 19.00€ |

</details>

<details>
<summary><strong>[PF0097] FILOU MOUTARDE 5 KG</strong> - 5 TU1 (36.05€)</summary>

**Recommended Quantity:** 5 TU1
**Source:** LLM
**Unit Price:** 7.21€
**Subtotal:** 36.05€

**Confidence:** 🟢 High (8 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 22 août 2025, soit 60 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais fréquent (environ tous les 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car nous entrons dans la fenêtre habituelle de commande. En application du principe de précaution B2B et de la règle des 70% du cycle moyen, un besoin est détecté. La quantité retenue est de 5 unités, correspondant à la médiane des commandes récentes et à la dernière commande effectuée, évitant ainsi une surestimation par rapport aux pics de 10 unités observés l'année précédente.

**Baseline Quantity:** 5
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/11/2024 | 10 | 7.00€ |
| 3/13/2024 | 10 | 7.00€ |
| 3/12/2024 | 0 | 7.00€ |
| 1/16/2024 | 5 | 7.00€ |
| 11/8/2023 | 0 | 7.00€ |

</details>

<details>
<summary><strong>[PF0077] FILOU PROVENCALE 5 L</strong> - 6 TU1 (56.22€)</summary>

**Recommended Quantity:** 6 TU1
**Source:** LLM
**Unit Price:** 9.37€
**Subtotal:** 56.22€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 22 août 2025, soit 60 jours avant la date actuelle. L'historique de l'année précédente montre une commande importante fin septembre (20u), suggérant un besoin saisonnier ou cyclique à cette période de l'année. Avec un seuil de réapprovisionnement de 30 jours, le délai depuis la dernière commande dépasse largement les cycles habituels constatés. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 6 unités, correspondant à la médiane et à la valeur la plus basse des commandes récentes significatives, afin de couvrir le besoin sans surstocker.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/30/2024 | 20 | 9.10€ |
| 6/11/2024 | 10 | 9.10€ |
| 3/13/2024 | 6 | 9.10€ |
| 3/12/2024 | 0 | 9.10€ |
| 11/8/2023 | 0 | 9.10€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-21 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3429

### Performance

- **Execution Time:** 2.8s

</details>

---

*Report auto-generated on 12/30/2025, 3:14:08 PM*