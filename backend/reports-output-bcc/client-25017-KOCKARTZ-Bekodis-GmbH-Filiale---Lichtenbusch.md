# Auto-Proposal Report - KOCKARTZ Bekodis GmbH Filiale : Lichtenbusch

**Client:** KOCKARTZ Bekodis GmbH Filiale : Lichtenbusch (ID: 25017)
**Analysis Date:** 12/30/2025, 3:11:20 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (307.94€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 307.94€ excl. tax
- **MOQ Adjustment:** +242.55€ to meet minimum of 300€

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 7 TU6 | 19.50€ | 136.50€ | 🟡 Medium |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 7 TU6 | 13.10€ | 91.70€ | 🟢 High |
| [LV132] LV Tartinade Houmous type 190g | 6 TU6 | 13.29€ | 79.74€ | 🟢 High |

### Product Details

<details>
<summary><strong>[JF022] JF MOUTARDE MIEL 250ML WECK</strong> - 7 TU6 (136.50€)</summary>

**Recommended Quantity:** 7 TU6
**Source:** LLM
**Unit Price:** 19.50€
**Subtotal:** 136.50€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle d'environ 24 jours entre les deux dernières commandes (22/09 au 16/10). Au 03/11, 18 jours se sont écoulés depuis la dernière commande, ce qui représente 75% du cycle moyen. Le seuil de réapprovisionnement de 30 jours est donc largement atteint, créant un risque de rupture imminent. Conformément à la règle de la médiane sur l'historique récent (2u et 2u), la quantité préconisée est de 2 unités pour maintenir le stock sans surestimation.

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 10/16/2025 | 2 | 19.50€ |
| 9/22/2025 | 2 | 19.50€ |
| 10/9/2024 | 1 | 19.50€ |

</details>

<details>
<summary><strong>[LV130] LV BIO Tartinade Paprika Chili 190g</strong> - 7 TU6 (91.70€)</summary>

**Recommended Quantity:** 7 TU6
**Source:** LLM
**Unit Price:** 13.10€
**Subtotal:** 91.70€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit environ 88 jours. L'historique montre un cycle de commande moyen d'environ 60 à 90 jours (février, avril, juin, septembre). Nous sommes actuellement dans la fenêtre critique de réapprovisionnement pour éviter une rupture, dépassant les 70% du cycle habituel. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une rotation très faible et stable de 1 unité (médiane de 1u). Conformément aux règles de précaution B2B et de maintien des faibles rotations, une commande de 1 unité est préconisée.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 1/6/2025 | 2 | 13.10€ |
| 9/3/2024 | 2 | 12.72€ |
| 6/11/2024 | 1 | 12.72€ |
| 4/5/2024 | 1 | 12.72€ |
| 2/2/2024 | 1 | 12.72€ |

</details>

<details>
<summary><strong>[LV132] LV Tartinade Houmous type 190g</strong> - 6 TU6 (79.74€)</summary>

**Recommended Quantity:** 6 TU6
**Source:** LLM
**Unit Price:** 13.29€
**Subtotal:** 79.74€

**Confidence:** 🟢 High (6 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit environ 88 jours. L'historique N-1 montre des commandes espacées de 2 à 3 mois (avril, juin, septembre). Nous sommes actuellement le 03/11/2025, ce qui correspond à la fenêtre de réapprovisionnement habituelle après la commande d'août. Par principe de précaution B2B et compte tenu du cycle de rotation lent mais existant, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique est extrêmement stable avec des commandes systématiques de 1 unité. La médiane des quantités récentes et passées est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans l'augmenter.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/4/2025 | 2 | 13.29€ |
| 1/6/2025 | 1 | 13.29€ |
| 9/3/2024 | 1 | 12.90€ |
| 6/11/2024 | 1 | 12.90€ |
| 4/5/2024 | 1 | 12.90€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-03 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing
  - MOQ Adjustment: 65.39€ → 307.94€

### LLM Usage

- **Calls:** 3
- **Tokens:** 3286

### Performance

- **Execution Time:** 2.8s

</details>

---

*Report auto-generated on 12/30/2025, 3:11:20 PM*