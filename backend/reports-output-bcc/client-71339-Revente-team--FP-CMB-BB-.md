# Auto-Proposal Report - Revente team (FP/CMB/BB)

**Client:** Revente team (FP/CMB/BB) (ID: 71339)
**Analysis Date:** 12/30/2025, 3:23:45 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (90.29€ excl. tax)
- **Optional Products:** 3 (210.28€ excl. tax)
- **Total:** 300.56€ excl. tax
- **MOQ Adjustment:** +124.52€ to meet minimum of 300€

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [RISH03] RISH kombucha BIO - gingembre 330ml | 2 TU12 | 22.57€ | 45.14€ | 🟡 Medium |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 2 TU12 | 22.57€ | 45.14€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[RISH03] RISH kombucha BIO - gingembre 330ml</strong> - 2 TU12 (45.14€)</summary>

**Recommended Quantity:** 2 TU12
**Source:** LLM
**Unit Price:** 22.57€
**Subtotal:** 45.14€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande date du 20 mars, soit 39 jours écoulés. Bien que le cycle précédent soit plus long (environ 50 jours), nous entrons dans la fenêtre de risque au vu du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (médiane = 1). Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/20/2025 | 1 | 22.57€ |
| 1/29/2025 | 1 | 22.57€ |

</details>

<details>
<summary><strong>[RISH04] RISH kombucha BIO - smash basil 330ml</strong> - 2 TU12 (45.14€)</summary>

**Recommended Quantity:** 2 TU12
**Source:** LLM
**Unit Price:** 22.57€
**Subtotal:** 45.14€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle de 50 jours entre les deux dernières commandes (29/01 au 20/03). Au 28/04, 39 jours se sont écoulés depuis la dernière commande, ce qui représente 78% du cycle moyen. Selon la règle des 70%, le risque de rupture est avéré dans l'horizon des 30 jours (Replenishment Threshold Days). En suivant la règle de la médiane sur l'historique récent (1u et 1u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/20/2025 | 1 | 22.57€ |
| 1/29/2025 | 1 | 22.57€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**3 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [RISH01] RISH kombucha BIO - original 330ml | 3 TU12 | 22.57€ | 67.72€ |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 3 TU24 | 28.94€ | 86.83€ |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 2 TU24 | 27.86€ | 55.73€ |

### Product Details

<details>
<summary><strong>[RISH01] RISH kombucha BIO - original 330ml</strong> - 3 TU12 (67.72€)</summary>

**Recommended Quantity:** 3 TU12
**Source:** LLM
**Unit Price:** 22.57€
**Subtotal:** 67.72€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 20 mars, soit 39 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà effectif pour ce type de produit à rotation lente. En l'absence d'un cycle historique établi, le principe de précaution B2B s'applique : il faut prévoir une commande. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles (1-2u) et à l'utilisation de la médiane, la quantité retenue est de 2 unités.

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/20/2025 | 2 | 22.57€ |

</details>

<details>
<summary><strong>[RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - 3 TU24 (86.83€)</summary>

**Recommended Quantity:** 3 TU24
**Source:** LLM
**Unit Price:** 28.94€
**Subtotal:** 86.83€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 20 mars 2025, soit 39 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré si le cycle de consommation est mensuel. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane des commandes récentes, la quantité retenue est de 2 unités.

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/20/2025 | 2 | 28.94€ |

</details>

<details>
<summary><strong>[RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - 2 TU24 (55.73€)</summary>

**Recommended Quantity:** 2 TU24
**Source:** LLM
**Unit Price:** 27.86€
**Subtotal:** 55.73€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 29 janvier 2025, soit environ 89 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé depuis la dernière commande dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), un besoin est identifié. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane de l'historique disponible.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 1/29/2025 | 1 | 27.86€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-04-28 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 5 at-risk products detected
- **Proposal Final:** 5 products after pricing
  - MOQ Adjustment: 176.04€ → 300.56€

### LLM Usage

- **Calls:** 5
- **Tokens:** 5172

### Performance

- **Execution Time:** 2.7s

</details>

---

*Report auto-generated on 12/30/2025, 3:23:45 PM*