# Auto-Proposal Report - LA SALLE A MANGER

**Client:** LA SALLE A MANGER (ID: 60428)
**Analysis Date:** 12/30/2025, 3:14:47 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 4 (297.60€ excl. tax)
- **Optional Products:** 2 (132.36€ excl. tax)
- **Total:** 429.96€ excl. tax

---

## Core Products

**4 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 TU20 | 33.00€ | 66.00€ | 🟡 Medium |
| [RIT05] RITCHIE Cola - verre 275ml | 1 TU24 | 33.36€ | 33.36€ | 🟡 Medium |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 4 TU24 | 33.36€ | 133.44€ | 🟡 Medium |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 4 TU12 | 16.20€ | 64.80€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - 2 TU20 (66.00€)</summary>

**Recommended Quantity:** 2 TU20
**Source:** LLM
**Unit Price:** 33.00€
**Subtotal:** 66.00€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse montre un cycle de commande long et irrégulier (environ 79 jours entre les deux dernières commandes). Depuis la dernière commande du 24 septembre, 50 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de risque de rupture (50 + 30 = 80 jours), ce qui correspond à la périodicité observée. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté. La quantité est fixée à 2 unités, correspondant à la valeur basse de l'historique récent (médiane entre 2 et 3, choix du plus bas pour éviter le surstockage sur un produit à rotation lente).

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 3 | 33.00€ |
| 7/7/2025 | 2 | 33.00€ |
| 2/13/2025 | 3 | 33.00€ |

</details>

<details>
<summary><strong>[RIT05] RITCHIE Cola - verre 275ml</strong> - 1 TU24 (33.36€)</summary>

**Recommended Quantity:** 1 TU24
**Source:** LLM
**Unit Price:** 33.36€
**Subtotal:** 33.36€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle de 79 jours entre les deux dernières commandes. Au 13 novembre 2025, 50 jours se sont écoulés depuis la dernière commande (24 septembre). Bien que nous n'ayons pas encore atteint l'intervalle moyen, le seuil de réapprovisionnement de 30 jours nous place dans une zone de risque de rupture (50 + 30 = 80 jours, soit l'échéance théorique de la prochaine commande). En application du principe de précaution B2B et face à un historique irrégulier, un besoin est détecté. Pour la quantité, la médiane des commandes récentes est de 2 unités, mais conformément à la règle de prudence sur les faibles rotations et le choix de la valeur la plus basse en cas de doute, la quantité de 1 unité est retenue.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 3 | 33.36€ |
| 7/7/2025 | 1 | 33.36€ |
| 2/13/2025 | 3 | 33.36€ |

</details>

<details>
<summary><strong>[RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - 4 TU24 (133.44€)</summary>

**Recommended Quantity:** 4 TU24
**Source:** LLM
**Unit Price:** 33.36€
**Subtotal:** 133.44€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/07/2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Le risque de rupture est considéré comme présent par défaut de visibilité. ÉTAPE 2 : Estimation de la quantité. L'historique récent présente une commande unique de 4 unités. En l'absence d'autres points de comparaison ou de saisonnalité N-1, la quantité de la dernière commande (médiane de l'historique disponible) est reconduite pour maintenir le stock sans risque de surstockage majeur.

**Baseline Quantity:** 4
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/7/2025 | 4 | 33.36€ |
| 2/13/2025 | 2 | 33.36€ |

</details>

<details>
<summary><strong>[UPI01] Jus de pomme bio d'UPIGNY 250ml</strong> - 4 TU12 (64.80€)</summary>

**Recommended Quantity:** 4 TU12
**Source:** LLM
**Unit Price:** 16.20€
**Subtotal:** 64.80€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/07/2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de commande récente sur une période aussi longue, combinée au principe de précaution B2B, impose de prévoir un réapprovisionnement pour éviter une rupture de stock prolongée, surtout avec un seuil de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent ne présente qu'une seule commande de 4 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et régulières, la quantité retenue est la médiane de l'historique disponible, soit 4 unités.

**Baseline Quantity:** 4
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/7/2025 | 4 | 16.20€ |
| 2/13/2025 | 4 | 16.20€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**2 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 3 TU20 | 33.00€ | 99.00€ |
| [RIT01] RITCHIE Orange - verre 275ml | 1 TU24 | 33.36€ | 33.36€ |

### Product Details

<details>
<summary><strong>[TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - 3 TU20 (99.00€)</summary>

**Recommended Quantity:** 3 TU20
**Source:** LLM
**Unit Price:** 33.00€
**Subtotal:** 99.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 24 septembre, soit 50 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré si le cycle de consommation est mensuel. En l'absence d'historique long permettant de définir un cycle précis, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent présente une commande unique de 3 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et l'utilisation de la valeur historique disponible, la quantité retenue est de 3 unités.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 3 | 33.00€ |

</details>

<details>
<summary><strong>[RIT01] RITCHIE Orange - verre 275ml</strong> - 1 TU24 (33.36€)</summary>

**Recommended Quantity:** 1 TU24
**Source:** LLM
**Unit Price:** 33.36€
**Subtotal:** 33.36€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte à plus de 4 mois (129 jours), ce qui dépasse largement un cycle de rotation standard pour ce type de produit. Bien que la rotation soit très faible (1 unité), le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le cycle est irrégulier. Conformément aux règles de gestion des rotations faibles, la quantité est maintenue à 1 unité (médiane de l'historique récent).

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/7/2025 | 1 | 33.36€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-13 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 6 at-risk products detected
- **Proposal Final:** 6 products after pricing

### LLM Usage

- **Calls:** 6
- **Tokens:** 6264

### Performance

- **Execution Time:** 3.2s

</details>

---

*Report auto-generated on 12/30/2025, 3:14:47 PM*