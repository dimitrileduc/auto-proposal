# Auto-Proposal Report - AVEVE BV - WM Retail

**Client:** AVEVE BV - WM Retail (ID: 18017)
**Email:** servicedesk.retail@aveve.be
**Analysis Date:** 1/11/2026, 11:13:47 AM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (4582.50€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 4582.50€ excl. tax
- **Odoo Quote:** S40422 (ID: 92301)

---

## PHASE 2.5 - PRICING + MOQ

**Initial Amount:** 4582.50€
**Required MOQ:** 300.00€
**Status:** OK

| Product | Qty | Price | Subtotal | Summary |
|---------|----:|------:|---------:|---------|
| [LV130] LV BIO Tartinade Paprika Chil... | 125 | 12.36€ | 1545.00€ | Réapprovisionnement de précaution (médiane 125u). |
| [LV162] LV Tartinade Tomato Basilico ... | 125 | 11.94€ | 1492.50€ | Cycle dépassé (89j), réapprovisionnement de 125u. |
| [LV161] LV Tartinade Mangue curry 190g | 125 | 12.36€ | 1545.00€ | Cycle dépassé (89j), réapprovisionnement de 125u. |

**Total: 4582.50€**

---

## PHASE 3 - ODOO QUOTE

**Quote:** S40422 (ID: 92301)
**Status:** draft
**Created:** 1/11/2026, 10:13:31 AM

### Core Products (3)

| Product | Qty | Price | Subtotal | Summary |
|---------|----:|------:|---------:|---------|
| [LV130] LV BIO Tartinade Paprika Chil... | 125 | 12.36€ | 1545.00€ | Réapprovisionnement de précaution (médiane 125u). |
| [LV162] LV Tartinade Tomato Basilico ... | 125 | 11.94€ | 1492.50€ | Cycle dépassé (89j), réapprovisionnement de 125u. |
| [LV161] LV Tartinade Mangue curry 190g | 125 | 12.36€ | 1545.00€ | Cycle dépassé (89j), réapprovisionnement de 125u. |

**Total HT:** 4582.50€
**Taxes:** 274.95€
**Total TTC:** 4857.45€

### Phase 2.5 vs Odoo Comparison

| | Phase 2.5 | Odoo | Difference |
|---------|----------:|-----:|-----------:|
| **Core** | 4582.50€ | 4582.50€ | +0.00€ |
| **Optional** | 0.00€ | 0.00€ | +0.00€ |
| **TOTAL** | 4582.50€ | 4582.50€ | +0.00€ (0.0%) |

---

## Core Products Details

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 125 TU6 | 12.36€ | 1545.00€ | 🟢 High |
| [LV162] LV Tartinade Tomato Basilico 190g | 125 TU6 | 11.94€ | 1492.50€ | 🟢 High |
| [LV161] LV Tartinade Mangue curry 190g | 125 TU6 | 12.36€ | 1545.00€ | 🟢 High |

<details>
<summary><strong>[LV130] LV BIO Tartinade Paprika Chili 190g</strong> - 125 TU6 (1545.00€)</summary>

**Recommended Quantity:** 125 TU6
**Source:** LLM
**Unit Price:** 12.36€
**Subtotal:** 1545.00€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Summary:** Réapprovisionnement de précaution (médiane 125u).

**Reasoning:**

La dernière commande remonte au 14 octobre 2025, soit environ 90 jours. L'historique montre une commande importante de 750u en décembre 2024, mais le cycle habituel de rotation se situe plutôt autour de 125u (médiane des commandes régulières). Étant donné le délai écoulé et le seuil de réapprovisionnement de 30 jours, il existe un risque de rupture imminent. Par principe de précaution B2B et pour éviter le surstockage lié aux pics exceptionnels, la quantité retenue est la médiane stable de 125u.

**Baseline Quantity:** 125
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/9/2024 | 750 | 2.06€ |
| 7/30/2024 | 125 | 12.36€ |
| 6/3/2024 | 125 | 12.36€ |
| 4/16/2024 | 750 | 2.06€ |
| 1/22/2024 | 125 | 12.36€ |

</details>

<details>
<summary><strong>[LV162] LV Tartinade Tomato Basilico 190g</strong> - 125 TU6 (1492.50€)</summary>

**Recommended Quantity:** 125 TU6
**Source:** LLM
**Unit Price:** 11.94€
**Subtotal:** 1492.50€

**Confidence:** 🟢 High (13 historical order(s))

### LLM Prediction

**Summary:** Cycle dépassé (89j), réapprovisionnement de 125u.

**Reasoning:**

L'analyse de l'historique montre un cycle de commande moyen d'environ 60 à 90 jours. La dernière commande enregistrée date du 14 octobre 2025, soit il y a environ 89 jours. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. Bien que l'année précédente ait montré des pics à 750u ou 1500u, les commandes les plus récentes (août et octobre 2025) sont stabilisées à 125u. En application de la règle de la médiane sur l'historique récent et du principe de prudence pour éviter le surstockage, la quantité retenue est de 125u.

**Baseline Quantity:** 125
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 10/7/2024 | 750 | 1.99€ |
| 7/30/2024 | 125 | 11.94€ |
| 6/3/2024 | 125 | 11.94€ |
| 2/26/2024 | 1500 | 1.99€ |
| 1/22/2024 | 125 | 11.94€ |

</details>

<details>
<summary><strong>[LV161] LV Tartinade Mangue curry 190g</strong> - 125 TU6 (1545.00€)</summary>

**Recommended Quantity:** 125 TU6
**Source:** LLM
**Unit Price:** 12.36€
**Subtotal:** 1545.00€

**Confidence:** 🟢 High (11 historical order(s))

### LLM Prediction

**Summary:** Cycle dépassé (89j), réapprovisionnement de 125u.

**Reasoning:**

L'analyse de l'historique montre un cycle de commande d'environ 60 jours en 2025. La dernière commande remonte au 14 octobre 2025, soit 89 jours avant la date actuelle (11 janvier 2026). Ce délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou une commande déjà en retard. Bien que les volumes de 2024 fussent plus élevés (750u), la tendance récente en 2025 s'est stabilisée à 125u. Conformément aux règles de gestion, la médiane des commandes récentes (125u) est retenue pour éviter le surstockage tout en couvrant le besoin.

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

- **Reference Date:** 2026-01-11 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** PRODUCTION

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing
- **Quote Generation:** Quote S40422 created

### LLM Usage

- **Calls:** 3
- **Tokens:** 3667

### Performance

- **Execution Time:** 40.2s

</details>

---

*Report auto-generated on 1/11/2026, 11:13:47 AM*