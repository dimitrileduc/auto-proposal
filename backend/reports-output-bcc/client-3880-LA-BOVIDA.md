# Auto-Proposal Report - LA BOVIDA

**Client:** LA BOVIDA (ID: 3880)
**Analysis Date:** 12/30/2025, 3:12:30 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (5236.20€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 5236.20€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 72 TU6 | 45.12€ | 3248.64€ | 🟢 High |
| [PF0609] YVALLI SAUCE TOMATE 2,5 KG | 18 TU6 | 38.34€ | 690.12€ | 🟢 High |
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 24 TU6 | 54.06€ | 1297.44€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - 72 TU6 (3248.64€)</summary>

**Recommended Quantity:** 72 TU6
**Source:** LLM
**Unit Price:** 45.12€
**Subtotal:** 3248.64€

**Confidence:** 🟢 High (12 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande moyen d'environ 70 jours (juin à août 2025). Au 6 octobre, 45 jours se sont écoulés depuis la dernière commande, ce qui place le prochain besoin théorique dans l'horizon des 30 jours du seuil de réapprovisionnement (Replenishment Threshold Days). Par principe de précaution B2B, un risque de rupture est identifié. La quantité est fixée à 72 unités, correspondant à la médiane et à la constante observée sur les cinq dernières commandes (stabilité parfaite à 72u depuis avril 2024).

**Baseline Quantity:** 72
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/8/2024 | 72 | 46.50€ |
| 4/8/2024 | 72 | 46.50€ |
| 1/10/2024 | 120 | 42.00€ |
| 12/13/2023 | 62 | 43.80€ |
| 11/13/2023 | 24 | 43.80€ |

</details>

<details>
<summary><strong>[PF0609] YVALLI SAUCE TOMATE 2,5 KG</strong> - 18 TU6 (690.12€)</summary>

**Recommended Quantity:** 18 TU6
**Source:** LLM
**Unit Price:** 38.34€
**Subtotal:** 690.12€

**Confidence:** 🟢 High (11 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 22 août 2025, soit 45 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais fréquent (environ tous les 1 à 2 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car nous avons dépassé le délai habituel de réapprovisionnement observé en 2024. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 18 unités, correspondant à la médiane des commandes historiques et à la quantité de la commande la plus récente, évitant ainsi toute surestimation liée aux pics ponctuels de 30 ou 36 unités.

**Baseline Quantity:** 18
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 2/6/2024 | 18 | 34.80€ |
| 2/6/2024 | 14 | 34.80€ |
| 1/10/2024 | 30 | 34.80€ |
| 12/13/2023 | 24 | 34.80€ |
| 11/13/2023 | 8 | 34.80€ |

</details>

<details>
<summary><strong>[PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> - 24 TU6 (1297.44€)</summary>

**Recommended Quantity:** 24 TU6
**Source:** LLM
**Unit Price:** 54.06€
**Subtotal:** 1297.44€

**Confidence:** 🟢 High (10 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 11 juin 2025, soit environ 117 jours sans activité. L'historique de l'année précédente montre une commande le 24 septembre 2024, ce qui indique un besoin récurrent à cette période de l'année (saisonnalité N-1). En application du principe de précaution B2B et face à l'absence de commande récente malgré l'historique passé, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 24 unités, correspondant à la médiane des commandes historiques et au volume des commandes les plus récentes.

**Baseline Quantity:** 24
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2024 | 36 | 54.90€ |
| 7/8/2024 | 13 | 54.90€ |
| 4/8/2024 | 36 | 54.90€ |
| 2/6/2024 | 24 | 50.40€ |
| 11/13/2023 | 24 | 50.40€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-06 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3465

### Performance

- **Execution Time:** 2.7s

</details>

---

*Report auto-generated on 12/30/2025, 3:12:30 PM*