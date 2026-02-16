# Auto-Proposal Report - MARMA

**Client:** MARMA (ID: 60485)
**Analysis Date:** 12/30/2025, 3:16:18 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 5 (3426.84€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 3426.84€ excl. tax

---

## Core Products

**5 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 36 TU24 | 29.04€ | 1045.44€ | 🟢 High |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 42 TU12 | 12.60€ | 529.20€ | 🟢 High |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 42 TU12 | 12.60€ | 529.20€ | 🟡 Medium |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 63 TU12 | 12.60€ | 793.80€ | 🟢 High |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 42 TU12 | 12.60€ | 529.20€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - 36 TU24 (1045.44€)</summary>

**Recommended Quantity:** 36 TU24
**Source:** LLM
**Unit Price:** 29.04€
**Subtotal:** 1045.44€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 juillet, soit 45 jours. Le cycle moyen observé est d'environ 32 jours (24 jours entre mai/juillet et 39 jours entre juillet/août). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes de 19, 45 et 36 unités. La médiane de ces commandes est de 36. Conformément à la règle de privilégier la médiane et de ne pas surestimer en cas de doute, la quantité retenue est de 36 unités.

**Baseline Quantity:** 36
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/25/2025 | 36 | 29.04€ |
| 7/1/2025 | 45 | 29.04€ |
| 5/23/2025 | 19 | 29.04€ |
| 4/2/2025 | 27 | 29.04€ |
| 3/6/2025 | 18 | 35.76€ |

</details>

<details>
<summary><strong>[ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - 42 TU12 (529.20€)</summary>

**Recommended Quantity:** 42 TU12
**Source:** LLM
**Unit Price:** 12.60€
**Subtotal:** 529.20€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 25 juillet, soit 45 jours. Le cycle moyen observé est d'environ 32 jours. Nous avons largement dépassé ce cycle et le risque de rupture est élevé dans l'horizon des 30 jours (Replenishment Threshold Days). Le besoin est donc confirmé par précaution. ÉTAPE 2 : L'historique présente une valeur extrême (504u) qui doit être écartée. Les autres commandes sont de 21u, 42u et 42u. La médiane des quantités régulières est de 42u. Conformément à la règle de privilégier la médiane et d'écarter les pics exceptionnels, la quantité retenue est de 42u.

**Baseline Quantity:** 42
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/25/2025 | 42 | 12.60€ |
| 5/23/2025 | 21 | 12.60€ |
| 5/7/2025 | 504 | 1.05€ |
| 4/17/2025 | 42 | 12.60€ |
| 3/10/2025 | 21 | 15.48€ |

</details>

<details>
<summary><strong>[ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml</strong> - 42 TU12 (529.20€)</summary>

**Recommended Quantity:** 42 TU12
**Source:** LLM
**Unit Price:** 12.60€
**Subtotal:** 529.20€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre des intervalles de 27 jours puis 52 jours. Depuis la dernière commande du 25 juillet, 45 jours se sont écoulés, ce qui dépasse largement le seuil de 70% du cycle moyen (environ 40 jours). Un risque de rupture est identifié pour les 30 prochains jours. Pour la quantité, on observe une tendance à la baisse (252u > 63u > 42u). Conformément à la règle de la médiane et au respect de la tendance baissière, la quantité retenue est la plus basse du cycle récent pour éviter le surstockage.

**Baseline Quantity:** 42
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/25/2025 | 42 | 12.60€ |
| 6/3/2025 | 63 | 12.60€ |
| 5/7/2025 | 252 | 1.05€ |
| 3/10/2025 | 21 | 15.48€ |

</details>

<details>
<summary><strong>[ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml</strong> - 63 TU12 (793.80€)</summary>

**Recommended Quantity:** 63 TU12
**Source:** LLM
**Unit Price:** 12.60€
**Subtotal:** 793.80€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 33 jours (20, 27, 52 jours). La dernière commande remonte au 25 juillet, soit 45 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes de 42, 252, 63 et 63 unités. La valeur de 252u est un pic exceptionnel à écarter. La médiane des commandes régulières (42, 63, 63) est de 63. Conformément à la règle de maintien de la rotation régulière, la quantité retenue est de 63 unités.

**Baseline Quantity:** 63
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/25/2025 | 63 | 12.60€ |
| 6/3/2025 | 63 | 12.60€ |
| 5/7/2025 | 252 | 1.05€ |
| 4/17/2025 | 42 | 12.60€ |
| 3/10/2025 | 21 | 15.48€ |

</details>

<details>
<summary><strong>[ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - 42 TU12 (529.20€)</summary>

**Recommended Quantity:** 42 TU12
**Source:** LLM
**Unit Price:** 12.60€
**Subtotal:** 529.20€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/07/2025, soit 69 jours. Le cycle moyen observé est d'environ 38 jours (47 jours entre avril et juin, 28 jours entre juin et juillet). Le délai depuis la dernière commande dépasse largement le cycle moyen et l'horizon de 30 jours du seuil de réapprovisionnement. Le risque de rupture est critique. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 21, 63 et 42 unités. La médiane de ces trois valeurs est de 42. Conformément à la règle de privilégier la médiane et d'éviter la surestimation liée aux pics (63u), la quantité retenue est de 42 unités.

**Baseline Quantity:** 42
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/1/2025 | 21 | 12.60€ |
| 6/3/2025 | 63 | 12.60€ |
| 4/17/2025 | 42 | 12.60€ |
| 3/10/2025 | 21 | 15.48€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-09-08 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 5 at-risk products detected
- **Proposal Final:** 5 products after pricing

### LLM Usage

- **Calls:** 5
- **Tokens:** 5502

### Performance

- **Execution Time:** 2.9s

</details>

---

*Report auto-generated on 12/30/2025, 3:16:18 PM*