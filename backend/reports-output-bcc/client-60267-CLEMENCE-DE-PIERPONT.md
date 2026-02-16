# Auto-Proposal Report - CLEMENCE DE PIERPONT

**Client:** CLEMENCE DE PIERPONT (ID: 60267)
**Analysis Date:** 12/30/2025, 3:25:54 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 0 (0.00€ excl. tax)
- **Optional Products:** 4 (318.90€ excl. tax)
- **Total:** 318.90€ excl. tax
- **MOQ Adjustment:** +49.20€ to meet minimum of 300€

---

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**4 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 7 TU12 | 22.20€ | 155.40€ |
| [WIG04] WIGNAC cidre rosé bio 750ml | 2 TU6 | 27.00€ | 54.00€ |
| [WIG03] WIGNAC cidre naturel bio 750ml | 3 TU6 | 25.50€ | 76.50€ |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 TU20 | 33.00€ | 33.00€ |

### Product Details

<details>
<summary><strong>[WIG06] WIGNAC cidre naturel bio sans alcool 330ml</strong> - 7 TU12 (155.40€)</summary>

**Recommended Quantity:** 7 TU12
**Source:** LLM
**Unit Price:** 22.20€
**Subtotal:** 155.40€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 11 mars, soit il y a seulement 5 jours. Bien que le cycle ne soit pas encore établi (une seule commande récente), le seuil de réapprovisionnement est de 30 jours. En application du principe de précaution B2B (si doute sur le cycle ou historique insuffisant -> prévoir), une commande est générée pour éviter toute rupture sur un produit nouveau ou à rotation irrégulière. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique long ou de données N-1, la quantité est basée sur la commande la plus récente. La médiane et la valeur unique étant de 6 unités, ce volume est maintenu pour assurer le stock sans surstockage.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/11/2025 | 6 | 22.20€ |

</details>

<details>
<summary><strong>[WIG04] WIGNAC cidre rosé bio 750ml</strong> - 2 TU6 (54.00€)</summary>

**Recommended Quantity:** 2 TU6
**Source:** LLM
**Unit Price:** 27.00€
**Subtotal:** 54.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande date du 11 mars, soit il y a seulement 5 jours. Bien que le cycle de commande ne soit pas encore établi avec une seule donnée récente, le principe de précaution B2B et l'absence d'historique N-1 imposent de prévoir un réapprovisionnement pour couvrir l'horizon des 30 jours (Replenishment Threshold Days). En suivant la règle de la médiane sur l'historique récent (1u) et la consigne de choisir la valeur la plus basse en cas de rotation faible, la quantité retenue est de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/11/2025 | 1 | 27.00€ |

</details>

<details>
<summary><strong>[WIG03] WIGNAC cidre naturel bio 750ml</strong> - 3 TU6 (76.50€)</summary>

**Recommended Quantity:** 3 TU6
**Source:** LLM
**Unit Price:** 25.50€
**Subtotal:** 76.50€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 11 mars, soit il y a seulement 5 jours. Bien que le délai soit court, nous n'avons pas d'historique suffisant pour établir un cycle de rotation précis (une seule commande récente). En application du principe de précaution B2B (si doute sur le cycle → prévoir commande) et compte tenu du seuil de réapprovisionnement de 30 jours, un risque de rupture ne peut être exclu si la rotation s'accélère. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 3 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane se base sur cette valeur de 3 unités pour maintenir le stock.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/11/2025 | 3 | 25.50€ |

</details>

<details>
<summary><strong>[TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - 1 TU20 (33.00€)</summary>

**Recommended Quantity:** 1 TU20
**Source:** LLM
**Unit Price:** 33.00€
**Subtotal:** 33.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande date de seulement 5 jours (11 mars), mais s'agissant d'un produit à rotation très faible (1 unité) et sans historique étendu, le principe de précaution B2B s'applique pour éviter toute rupture sur un cycle incertain. Le délai de réapprovisionnement de 30 jours couvre une période large où un nouveau besoin peut survenir. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane du volume historique récent.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/11/2025 | 1 | 33.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-03-16 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 4 at-risk products detected
- **Proposal Final:** 4 products after pricing
  - MOQ Adjustment: 269.70€ → 318.90€

### LLM Usage

- **Calls:** 4
- **Tokens:** 4120

### Performance

- **Execution Time:** 3.0s

</details>

---

*Report auto-generated on 12/30/2025, 3:25:54 PM*