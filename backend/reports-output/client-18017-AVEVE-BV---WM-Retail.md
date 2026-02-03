# Auto-Proposal Report - AVEVE BV - WM Retail

**Client:** AVEVE BV - WM Retail (ID: 18017)
**Email:** servicedesk.retail@aveve.be
**Analysis Date:** 2/3/2026, 6:07:55 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (4582.50€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 4582.50€ excl. tax

---

## PHASE 2.5 - PRICING + MOQ

**Initial Amount:** 4582.50€
**Required MOQ:** 300.00€
**Status:** OK

| Product | Qty | Price | Subtotal | Summary |
|---------|----:|------:|---------:|---------|
| [LV162] LV Tartinade Tomato Basilico ... | 125 | 11.94€ | 1492.50€ | Réapprovisionnement nécessaire (cycle 57j atteint) |
| [LV130] LV Tartinade Paprika Chili 18... | 125 | 12.36€ | 1545.00€ | Cycle de 60j atteint, risque rupture imminent. |
| [LV161] LV Tartinade Mangue curry 180... | 125 | 12.36€ | 1545.00€ | Cycle dépassé (57j), maintien du volume à 125u. |

**Total: 4582.50€**

---

## Core Products Details

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [LV162] LV Tartinade Tomato Basilico 180g bio | 125 TU6 | 11.94€ | 1492.50€ | 🟢 High |
| [LV130] LV Tartinade Paprika Chili 180g bio | 125 TU6 | 12.36€ | 1545.00€ | 🟢 High |
| [LV161] LV Tartinade Mangue curry 180g bio  | 125 TU6 | 12.36€ | 1545.00€ | 🟢 High |

<details>
<summary><strong>[LV162] LV Tartinade Tomato Basilico 180g bio</strong> - 125 TU6 (1492.50€)</summary>

**Recommended Quantity:** 125 TU6
**Source:** LLM
**Unit Price:** 11.94€
**Subtotal:** 1492.50€

**Confidence:** 🟢 High (13 historical order(s))

### LLM Prediction

**Summary:** Réapprovisionnement nécessaire (cycle 57j atteint)

**Reasoning:**

La dernière commande remonte au 08/12/2025, soit il y a 57 jours. L'historique montre un cycle de commande variant entre 55 et 65 jours pour les petits volumes (octobre à décembre). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où le stock risque de s'épuiser. Bien que l'année précédente ait connu des pics à 750u ou 1500u, les commandes récentes sont stabilisées à 125u. En suivant la règle de la médiane sur l'historique récent et le principe de précaution B2B, une commande de 125u est nécessaire pour couvrir les 30 prochains jours sans risque de surstockage.

**Baseline Quantity:** 125
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/9/2024 | 750 | 1.99€ |
| 10/7/2024 | 750 | 1.99€ |
| 7/30/2024 | 125 | 11.94€ |
| 6/3/2024 | 125 | 11.94€ |
| 2/26/2024 | 1500 | 1.99€ |

</details>

<details>
<summary><strong>[LV130] LV Tartinade Paprika Chili 180g bio</strong> - 125 TU6 (1545.00€)</summary>

**Recommended Quantity:** 125 TU6
**Source:** LLM
**Unit Price:** 12.36€
**Subtotal:** 1545.00€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Summary:** Cycle de 60j atteint, risque rupture imminent.

**Reasoning:**

L'analyse de l'historique montre un cycle de commande d'environ 2 mois (55-60 jours). La dernière commande datant du 08/12/2025, nous sommes à 57 jours d'intervalle au 03/02/2026. Le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Concernant la quantité, bien que des pics à 750u apparaissent dans l'historique lointain, les trois dernières commandes sont constantes à 125u. En application de la règle de la médiane et de la stabilité du flux récent, la quantité de 125u est retenue.

**Baseline Quantity:** 125
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 1/20/2025 | 125 | 12.36€ |
| 12/9/2024 | 750 | 2.06€ |
| 7/30/2024 | 125 | 12.36€ |
| 6/3/2024 | 125 | 12.36€ |
| 4/16/2024 | 750 | 2.06€ |

</details>

<details>
<summary><strong>[LV161] LV Tartinade Mangue curry 180g bio </strong> - 125 TU6 (1545.00€)</summary>

**Recommended Quantity:** 125 TU6
**Source:** LLM
**Unit Price:** 12.36€
**Subtotal:** 1545.00€

**Confidence:** 🟢 High (12 historical order(s))

### LLM Prediction

**Summary:** Cycle dépassé (57j), maintien du volume à 125u.

**Reasoning:**

L'analyse de l'historique récent montre un cycle de commande d'environ 55 jours (entre octobre et décembre 2025). La dernière commande datant du 08/12/2025, soit il y a 57 jours, le seuil de réapprovisionnement est largement dépassé. Bien que les volumes de l'année précédente fussent plus élevés (750u), la tendance récente s'est stabilisée à 125u. En application de la règle de la médiane sur l'historique récent et du principe de précaution face à un cycle dépassé, une commande de 125u est nécessaire pour couvrir les besoins immédiats.

**Baseline Quantity:** 125
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/19/2024 | 750 | 2.06€ |
| 10/7/2024 | 750 | 2.06€ |
| 7/16/2024 | 750 | 2.06€ |
| 5/27/2024 | 750 | 2.06€ |
| 2/26/2024 | 750 | 2.06€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2026-02-03 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3670

### Performance

- **Execution Time:** 11.8s

</details>

---

*Report auto-generated on 2/3/2026, 6:07:55 PM*