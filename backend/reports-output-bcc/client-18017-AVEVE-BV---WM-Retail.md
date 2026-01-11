# Auto-Proposal Report - AVEVE BV - WM Retail

**Client:** AVEVE BV - WM Retail (ID: 18017)
**Analysis Date:** 12/30/2025, 3:20:37 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (3295.00€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 3295.00€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [LV161] LV Tartinade Mangue curry 190g | 125 TU6 | 12.36€ | 1545.00€ | 🟢 High |
| [LV162] LV Tartinade Tomato Basilico 190g | 125 TU6 | 11.94€ | 1492.50€ | 🟢 High |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 125 TU1 | 2.06€ | 257.50€ | 🟢 High |

### Product Details

<details>
<summary><strong>[LV161] LV Tartinade Mangue curry 190g</strong> - 125 TU6 (1545.00€)</summary>

**Recommended Quantity:** 125 TU6
**Source:** LLM
**Unit Price:** 12.36€
**Subtotal:** 1545.00€

**Confidence:** 🟢 High (13 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13/08/2025, soit 61 jours. L'historique récent montre un cycle d'environ 86 jours (entre mai et août). 61 jours représentent 71% du cycle moyen, ce qui dépasse le seuil de précaution de 70%. Un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont stables à 125u. Bien que l'historique N-1 affiche des volumes plus élevés (750u), la tendance actuelle de 2025 montre une baisse significative et stabilisée. En suivant la règle de la médiane des commandes récentes et le respect de la tendance à la baisse, la quantité retenue est de 125u.

**Baseline Quantity:** 125
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/27/2024 | 750 | 2.06€ |
| 2/26/2024 | 750 | 2.06€ |
| 1/3/2024 | 125 | 12.36€ |
| 12/18/2023 | 125 | 12.36€ |
| 11/6/2023 | 750 | 2.06€ |

</details>

<details>
<summary><strong>[LV162] LV Tartinade Tomato Basilico 190g</strong> - 125 TU6 (1492.50€)</summary>

**Recommended Quantity:** 125 TU6
**Source:** LLM
**Unit Price:** 11.94€
**Subtotal:** 1492.50€

**Confidence:** 🟢 High (14 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août 2025, soit il y a 61 jours. L'historique montre une activité régulière à cette période l'année dernière (octobre 2024). Le cycle moyen est irrégulier mais le délai actuel dépasse largement les fréquences habituelles de réapprovisionnement. Il existe un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation de la quantité. La quantité récurrente sur les commandes récentes et une grande partie de l'historique N-1 est de 125 unités. Les volumes de 750u et 1500u sont considérés comme des pics exceptionnels (promotions ou stock initial). En suivant la règle de la médiane et de la prudence, la quantité de 125u est retenue.

**Baseline Quantity:** 125
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/3/2024 | 125 | 11.94€ |
| 2/26/2024 | 1500 | 1.99€ |
| 1/22/2024 | 125 | 11.94€ |
| 1/3/2024 | 125 | 11.94€ |
| 12/4/2023 | 750 | 1.99€ |

</details>

<details>
<summary><strong>[LV130] LV BIO Tartinade Paprika Chili 190g</strong> - 125 TU1 (257.50€)</summary>

**Recommended Quantity:** 125 TU1
**Source:** LLM
**Unit Price:** 2.06€
**Subtotal:** 257.50€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 15 juillet 2025 (il y a 90 jours). L'historique montre un cycle de réapprovisionnement irrégulier mais fréquent (tous les 2 à 3 mois en moyenne). Avec un seuil de 30 jours, le risque de rupture est élevé car nous entrons dans la fenêtre habituelle de commande. Bien qu'une commande exceptionnelle de 750u ait eu lieu récemment, l'historique N-1 sur la même période (octobre/novembre) ainsi que la récurrence globale indiquent des volumes plus stables de 125u. En suivant la règle de la médiane et de la prudence face aux pics exceptionnels, une quantité de 125u est préconisée pour couvrir le besoin sans surstocker.

**Baseline Quantity:** 125
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/30/2024 | 125 | 12.36€ |
| 6/3/2024 | 125 | 12.36€ |
| 4/16/2024 | 750 | 2.06€ |
| 1/22/2024 | 125 | 12.36€ |
| 11/6/2023 | 750 | 2.06€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-13 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3641

### Performance

- **Execution Time:** 3.5s

</details>

---

*Report auto-generated on 12/30/2025, 3:20:37 PM*