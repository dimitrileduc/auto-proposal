# Auto-Proposal Report - PIERRO epicerie

**Client:** PIERRO epicerie (ID: 60516)
**Analysis Date:** 12/30/2025, 3:10:30 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 8 (314.94€ excl. tax)
- **Optional Products:** 2 (54.30€ excl. tax)
- **Total:** 369.24€ excl. tax

---

## Core Products

**8 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 TU24 | 38.16€ | 38.16€ | 🟢 High |
| [fsv17] Mélange de noix bio vrac 2,75kg | 2 TU1 | 39.69€ | 79.38€ | 🟢 High |
| [fsv01] Cerneaux de noix nature bio vrac 1,8kg | 2 TU1 | 22.40€ | 44.80€ | 🟢 High |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 TU12 | 25.80€ | 25.80€ | 🟡 Medium |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 TU12 | 25.80€ | 25.80€ | 🟡 Medium |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 TU12 | 25.80€ | 25.80€ | 🟡 Medium |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 TU10 | 18.80€ | 56.40€ | 🟡 Medium |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 TU10 | 18.80€ | 18.80€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - 1 TU24 (38.16€)</summary>

**Recommended Quantity:** 1 TU24
**Source:** LLM
**Unit Price:** 38.16€
**Subtotal:** 38.16€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 septembre, soit 55 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle observé entre les deux premières commandes (83 jours). En application du principe de précaution B2B (risque de rupture sur un cycle irrégulier), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/10/2025 | 2 | 38.16€ |
| 6/19/2025 | 1 | 38.16€ |
| 5/6/2025 | 1 | 38.16€ |
| 3/25/2025 | 1 | 38.16€ |
| 1/13/2025 | 2 | 38.16€ |

</details>

<details>
<summary><strong>[fsv17] Mélange de noix bio vrac 2,75kg</strong> - 2 TU1 (79.38€)</summary>

**Recommended Quantity:** 2 TU1
**Source:** LLM
**Unit Price:** 39.69€
**Subtotal:** 79.38€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. L'historique montre un intervalle de 83 jours entre les deux dernières commandes. La dernière commande date du 10 septembre, soit il y a 55 jours. Le cycle moyen estimé étant d'environ 80-85 jours, nous atteignons 66% du cycle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans l'horizon de prévision (55 + 30 = 85 jours). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont identiques (2u). La médiane et la constante historique dictent le maintien de cette quantité de 2 unités.

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/10/2025 | 2 | 39.69€ |
| 6/19/2025 | 2 | 39.69€ |
| 5/6/2025 | 1 | 39.69€ |
| 1/23/2025 | 3 | 39.69€ |
| 1/13/2025 | 2 | 39.69€ |

</details>

<details>
<summary><strong>[fsv01] Cerneaux de noix nature bio vrac 1,8kg</strong> - 2 TU1 (44.80€)</summary>

**Recommended Quantity:** 2 TU1
**Source:** LLM
**Unit Price:** 22.40€
**Subtotal:** 44.80€

**Confidence:** 🟢 High (6 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande date du 10 septembre, soit il y a 55 jours. L'intervalle précédent était de 83 jours. À 55 jours, nous entrons dans la zone de risque (70% du cycle moyen estimé) pour couvrir les 30 prochains jours (Replenishment Threshold Days). Par principe de précaution B2B, une commande est nécessaire pour éviter la rupture. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 2u et 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 2 unités.

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/19/2025 | 2 | 22.40€ |
| 5/6/2025 | 3 | 22.40€ |
| 3/25/2025 | 2 | 22.40€ |
| 1/23/2025 | 4 | 22.40€ |
| 1/13/2025 | 2 | 22.40€ |

</details>

<details>
<summary><strong>[RISH03] RISH kombucha BIO - gingembre 330ml</strong> - 1 TU12 (25.80€)</summary>

**Recommended Quantity:** 1 TU12
**Source:** LLM
**Unit Price:** 25.80€
**Subtotal:** 25.80€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle d'environ 83 jours entre les deux dernières commandes. La dernière commande datant du 10 septembre 2025 (soit 55 jours avant la date actuelle), nous atteignons environ 66% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent durant cette période. En application du principe de précaution B2B et face à une rotation faible mais régulière, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/10/2025 | 1 | 25.80€ |
| 6/19/2025 | 1 | 25.80€ |
| 3/25/2025 | 1 | 25.80€ |

</details>

<details>
<summary><strong>[RISH04] RISH kombucha BIO - smash basil 330ml</strong> - 1 TU12 (25.80€)</summary>

**Recommended Quantity:** 1 TU12
**Source:** LLM
**Unit Price:** 25.80€
**Subtotal:** 25.80€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 10 septembre, soit 55 jours. Bien que le cycle soit difficile à déterminer avec une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles, on maintient la quantité historique de 1 unité sans l'augmenter.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/10/2025 | 1 | 25.80€ |
| 5/6/2025 | 1 | 25.80€ |
| 3/25/2025 | 1 | 25.80€ |
| 1/23/2025 | 1 | 25.80€ |

</details>

<details>
<summary><strong>[RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - 1 TU12 (25.80€)</summary>

**Recommended Quantity:** 1 TU12
**Source:** LLM
**Unit Price:** 25.80€
**Subtotal:** 25.80€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 10 septembre 2025, soit 55 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et pour éviter une rupture sur un produit à cycle irrégulier, une commande est nécessaire. La quantité retenue correspond à la médiane historique récente (1 unité), conformément à la règle de maintien des faibles rotations.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/10/2025 | 1 | 25.80€ |
| 3/25/2025 | 1 | 25.80€ |
| 1/23/2025 | 1 | 25.80€ |

</details>

<details>
<summary><strong>[REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - 3 TU10 (56.40€)</summary>

**Recommended Quantity:** 3 TU10
**Source:** LLM
**Unit Price:** 18.80€
**Subtotal:** 56.40€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 19 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue pour un produit de type "chips" (consommation courante) suggère un épuisement probable du stock ou un cycle de réapprovisionnement très espacé. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 3 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et l'utilisation de la médiane historique, la quantité recommandée est de 3 unités.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/19/2025 | 3 | 18.80€ |
| 5/6/2025 | 3 | 18.80€ |
| 3/25/2025 | 3 | 18.80€ |
| 1/13/2025 | 3 | 18.80€ |

</details>

<details>
<summary><strong>[REB08] ReBEL chips premium & bio - piment citron 125g</strong> - 1 TU10 (18.80€)</summary>

**Recommended Quantity:** 1 TU10
**Source:** LLM
**Unit Price:** 18.80€
**Subtotal:** 18.80€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le principe de précaution B2B s'applique face à une absence prolongée de réapprovisionnement pour maintenir une présence en rayon, surtout avec un seuil de 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/19/2025 | 1 | 18.80€ |
| 5/6/2025 | 3 | 18.80€ |
| 3/25/2025 | 3 | 18.80€ |
| 1/13/2025 | 3 | 18.80€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**2 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 TU20 | 33.00€ | 33.00€ |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 TU6 | 21.30€ | 21.30€ |

### Product Details

<details>
<summary><strong>[TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - 1 TU20 (33.00€)</summary>

**Recommended Quantity:** 1 TU20
**Source:** LLM
**Unit Price:** 33.00€
**Subtotal:** 33.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte à plus de 4 mois (138 jours). Bien que la rotation soit très faible, l'absence de visibilité sur un cycle régulier impose l'application du principe de précaution B2B. Un besoin est détecté pour éviter une rupture prolongée si une demande survient dans les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/19/2025 | 1 | 33.00€ |

</details>

<details>
<summary><strong>[WIG07] WIGNAC cidre naturel bio sans alcool 750ml</strong> - 1 TU6 (21.30€)</summary>

**Recommended Quantity:** 1 TU6
**Source:** LLM
**Unit Price:** 21.30€
**Subtotal:** 21.30€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/19/2025 | 1 | 21.30€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-04 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 10 at-risk products detected
- **Proposal Final:** 10 products after pricing

### LLM Usage

- **Calls:** 10
- **Tokens:** 10390

### Performance

- **Execution Time:** 3.1s

</details>

---

*Report auto-generated on 12/30/2025, 3:10:30 PM*