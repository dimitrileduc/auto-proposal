# Auto-Proposal Report - ILLICO VENDING

**Client:** ILLICO VENDING (ID: 60364)
**Analysis Date:** 12/30/2025, 3:16:17 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 8 (1406.55€ excl. tax)
- **Optional Products:** 1 (110.25€ excl. tax)
- **Total:** 1516.80€ excl. tax

---

## Core Products

**8 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 12 TU15 | 15.75€ | 189.00€ | 🟢 High |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 TU15 | 15.75€ | 15.75€ | 🟢 High |
| [REB05] REB chips bio - sel de mer 35g | 6 TU20 | 17.40€ | 104.40€ | 🟢 High |
| [REB06] REB chips bio - paprika fumé 35g | 1 TU20 | 17.40€ | 17.40€ | 🟢 High |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 10 TU15 | 14.40€ | 144.00€ | 🟡 Medium |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 30 TU12 | 12.00€ | 360.00€ | 🟡 Medium |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 30 TU12 | 12.00€ | 360.00€ | 🟢 High |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 15 TU15 | 14.40€ | 216.00€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - 12 TU15 (189.00€)</summary>

**Recommended Quantity:** 12 TU15
**Source:** LLM
**Unit Price:** 15.75€
**Subtotal:** 189.00€

**Confidence:** 🟢 High (6 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique récent montre un cycle de commande d'environ 70 jours (entre juillet et septembre). Au 11 novembre, 56 jours se sont écoulés depuis la dernière commande du 16 septembre, ce qui représente 80% du cycle moyen. Le seuil de risque (70%) étant dépassé et l'horizon de réapprovisionnement étant de 30 jours, le risque de rupture est imminent. La quantité retenue correspond à la médiane des commandes passées (12 unités), conformément à la règle de maintien des volumes sur une rotation régulière.

**Baseline Quantity:** 12
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/6/2025 | 0 | 15.75€ |
| 7/8/2025 | 12 | 15.75€ |
| 5/13/2025 | 10 | 15.75€ |
| 3/19/2025 | 4 | 15.75€ |
| 2/7/2025 | 8 | 15.75€ |

</details>

<details>
<summary><strong>[NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - 1 TU15 (15.75€)</summary>

**Recommended Quantity:** 1 TU15
**Source:** LLM
**Unit Price:** 15.75€
**Subtotal:** 15.75€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre des intervalles irréguliers (environ 30 à 60 jours). La dernière commande remonte au 16 septembre, soit 56 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen estimé, créant un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, bien qu'une commande de 12 unités ait eu lieu en juillet, les données les plus récentes montrent une rotation très faible (1 unité en septembre). Conformément aux règles de gestion des rotations faibles et à l'utilisation de la médiane pour éviter la surestimation, la quantité retenue est de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/8/2025 | 12 | 15.75€ |
| 5/13/2025 | 10 | 15.75€ |
| 4/4/2025 | 4 | 15.75€ |
| 3/19/2025 | 4 | 15.75€ |
| 2/7/2025 | 8 | 15.75€ |

</details>

<details>
<summary><strong>[REB05] REB chips bio - sel de mer 35g</strong> - 6 TU20 (104.40€)</summary>

**Recommended Quantity:** 6 TU20
**Source:** LLM
**Unit Price:** 17.40€
**Subtotal:** 104.40€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 septembre, soit 56 jours. L'intervalle précédent était de 41 jours. Nous avons largement dépassé le cycle moyen constaté. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est critique ou le stock est déjà épuisé. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre deux commandes (10u et 6u). En application de la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute ou la médiane pour éviter le surstockage sur un produit à faible rotation, la quantité de 6 unités est retenue.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/16/2025 | 10 | 17.40€ |
| 8/6/2025 | 6 | 17.40€ |
| 6/4/2025 | 8 | 17.40€ |
| 4/4/2025 | 8 | 17.40€ |
| 2/7/2025 | 8 | 17.40€ |

</details>

<details>
<summary><strong>[REB06] REB chips bio - paprika fumé 35g</strong> - 1 TU20 (17.40€)</summary>

**Recommended Quantity:** 1 TU20
**Source:** LLM
**Unit Price:** 17.40€
**Subtotal:** 17.40€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 16 septembre, soit 56 jours. Bien que le cycle entre les deux dernières commandes soit de 41 jours, le délai actuel dépasse largement ce cycle (56 > 41). Le risque de rupture est élevé ou le stock est probablement épuisé à l'horizon de 30 jours. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre deux commandes (6u et 1u). Conformément à la règle de privilégier la médiane et, en cas de doute ou de rotation faible, de choisir la valeur la plus basse pour éviter le surstockage, la quantité retenue est de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/16/2025 | 1 | 17.40€ |
| 8/6/2025 | 6 | 17.40€ |
| 6/4/2025 | 8 | 17.40€ |
| 4/4/2025 | 8 | 17.40€ |
| 2/7/2025 | 8 | 17.40€ |

</details>

<details>
<summary><strong>[NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - 10 TU15 (144.00€)</summary>

**Recommended Quantity:** 10 TU15
**Source:** LLM
**Unit Price:** 14.40€
**Subtotal:** 144.00€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 06/08/2025, soit 97 jours sans activité. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 10 unités, correspondant à l'unique point de référence historique disponible (médiane par défaut).

**Baseline Quantity:** 10
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/6/2025 | 10 | 14.40€ |
| 2/7/2025 | 8 | 14.40€ |

</details>

<details>
<summary><strong>[ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - 30 TU12 (360.00€)</summary>

**Recommended Quantity:** 30 TU12
**Source:** LLM
**Unit Price:** 12.00€
**Subtotal:** 360.00€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 08/07/2025, soit plus de 120 jours sans activité pour ce produit. Bien que le cycle de rotation soit indéterminé en raison d'une commande unique, le principe de précaution B2B s'applique face à une absence prolongée de réapprovisionnement. En cas de doute sur le cycle ou de données insuffisantes, la règle impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue correspond à la dernière commande connue (30u), conformément à la règle de maintien des quantités pour les rotations régulières ou uniques sans historique N-1.

**Baseline Quantity:** 30
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/8/2025 | 30 | 12.00€ |
| 5/13/2025 | 25 | 12.00€ |

</details>

<details>
<summary><strong>[ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml</strong> - 30 TU12 (360.00€)</summary>

**Recommended Quantity:** 30 TU12
**Source:** LLM
**Unit Price:** 12.00€
**Subtotal:** 360.00€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 08/07/2025, soit plus de 120 jours sans activité. En l'absence d'un cycle de commande établi (une seule commande récente enregistrée), le principe de précaution B2B s'applique pour éviter une rupture prolongée si le produit est toujours référencé. Conformément aux règles de gestion des cycles irréguliers ou difficiles à déterminer, une commande est préconisée. La quantité retenue correspond à la valeur de la dernière commande connue (30u), servant de référence unique pour maintenir le stock.

**Baseline Quantity:** 30
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/8/2025 | 30 | 12.00€ |
| 6/4/2025 | 20 | 12.00€ |
| 5/13/2025 | 25 | 12.00€ |
| 3/19/2025 | 20 | 12.00€ |
| 1/3/2025 | 30 | 15.48€ |

</details>

<details>
<summary><strong>[NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - 15 TU15 (216.00€)</summary>

**Recommended Quantity:** 15 TU15
**Source:** LLM
**Unit Price:** 14.40€
**Subtotal:** 216.00€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 08/07/2025, soit plus de 120 jours sans activité. Bien que la rotation soit faible ou irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement un cycle standard de réapprovisionnement. En l'absence d'historique multiple, la quantité est basée sur la dernière commande connue (15u) pour assurer la disponibilité du produit sans surstockage, conformément à la règle de maintien des volumes constants pour les rotations faibles.

**Baseline Quantity:** 15
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/8/2025 | 15 | 14.40€ |
| 5/13/2025 | 10 | 14.40€ |
| 2/7/2025 | 8 | 14.40€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**1 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 7 TU15 | 15.75€ | 110.25€ |

### Product Details

<details>
<summary><strong>[NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - 7 TU15 (110.25€)</summary>

**Recommended Quantity:** 7 TU15
**Source:** LLM
**Unit Price:** 15.75€
**Subtotal:** 110.25€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/08/2025, soit 97 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En l'absence d'historique récurrent, le principe de précaution s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent présente une commande unique de 7 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et régulières, la médiane (ici la valeur unique) de 7 unités est retenue pour couvrir le besoin.

**Baseline Quantity:** 7
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/6/2025 | 7 | 15.75€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-11 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 9 at-risk products detected
- **Proposal Final:** 9 products after pricing

### LLM Usage

- **Calls:** 10
- **Tokens:** 10285

### Performance

- **Execution Time:** 2.9s

</details>

---

*Report auto-generated on 12/30/2025, 3:16:17 PM*