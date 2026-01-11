# Auto-Proposal Report - Le Cortil asbl, Amandine Duhaut

**Client:** Le Cortil asbl, Amandine Duhaut (ID: 71197)
**Analysis Date:** 12/30/2025, 3:17:21 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 4 (141.12€ excl. tax)
- **Optional Products:** 3 (200.96€ excl. tax)
- **Total:** 342.08€ excl. tax

---

## Core Products

**4 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 3 TU12 | 15.12€ | 45.36€ | 🟡 Medium |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 3 TU12 | 15.12€ | 45.36€ | 🟡 Medium |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 TU24 | 25.20€ | 25.20€ | 🟡 Medium |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 TU24 | 25.20€ | 25.20€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[DAF002] DAF Lime and Ginger with Jasmine flower 25cl</strong> - 3 TU12 (45.36€)</summary>

**Recommended Quantity:** 3 TU12
**Source:** LLM
**Unit Price:** 15.12€
**Subtotal:** 45.36€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande date du 24 septembre, soit il y a 19 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique très récent unique, il existe une incertitude sur le cycle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent présente une commande unique de 3 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est maintenue à 3 unités, correspondant à la dernière observation stable.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 3 | 15.12€ |
| 5/8/2025 | 3 | 15.12€ |
| 4/15/2025 | 3 | 15.12€ |

</details>

<details>
<summary><strong>[DAF004] DAF Peach and Lemon with Honeybush flower 25cl</strong> - 3 TU12 (45.36€)</summary>

**Recommended Quantity:** 3 TU12
**Source:** LLM
**Unit Price:** 15.12€
**Subtotal:** 45.36€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle de 97 jours entre les deux dernières commandes. La dernière commande datant du 24 septembre (il y a 19 jours), nous entrons dans la zone de risque au cours des 30 prochains jours (seuil de réapprovisionnement), car le délai cumulé atteindra 49 jours. Bien que le cycle soit irrégulier, le principe de précaution B2B impose de prévoir un besoin pour éviter une rupture. Pour la quantité, la valeur la plus basse et la plus récente (3u) est privilégiée par rapport au pic de 10u, conformément à la règle de ne pas surestimer le stock de sécurité sur des rotations faibles.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 3 | 15.12€ |
| 6/19/2025 | 10 | 15.12€ |
| 5/8/2025 | 3 | 15.12€ |
| 4/15/2025 | 3 | 15.12€ |

</details>

<details>
<summary><strong>[PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - 1 TU24 (25.20€)</summary>

**Recommended Quantity:** 1 TU24
**Source:** LLM
**Unit Price:** 25.20€
**Subtotal:** 25.20€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande date du 24 septembre, soit il y a 19 jours. Bien que l'historique soit limité, l'intervalle entre les deux commandes précédentes était d'environ 97 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours et une rotation irrégulière, le principe de précaution B2B s'applique pour éviter une rupture potentielle sur un produit à faible rotation. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation (1-2u), la quantité retenue est de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 2 | 25.20€ |
| 6/19/2025 | 1 | 25.20€ |
| 4/15/2025 | 2 | 25.20€ |
| 1/22/2025 | 3 | 27.60€ |

</details>

<details>
<summary><strong>[PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - 1 TU24 (25.20€)</summary>

**Recommended Quantity:** 1 TU24
**Source:** LLM
**Unit Price:** 25.20€
**Subtotal:** 25.20€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Le cycle entre les deux dernières commandes est de 97 jours. Nous sommes actuellement à 19 jours depuis la dernière commande (24/09). Bien que le délai soit court par rapport au cycle précédent, la rotation est très faible et irrégulière. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est considéré pour l'horizon des 30 prochains jours. ÉTAPE 2 : L'historique récent montre des quantités de 1u et 2u. Conformément à la règle sur les rotations très faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est la médiane basse, soit 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 2 | 25.20€ |
| 6/19/2025 | 1 | 25.20€ |
| 4/15/2025 | 2 | 25.20€ |
| 1/22/2025 | 3 | 27.60€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**3 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 3 TU12 | 14.88€ | 44.64€ |
| [MANA02] MANA natural energy drink - tropical passion 250ml | 2 TU24 | 32.80€ | 65.60€ |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 6 TU12 | 15.12€ | 90.72€ |

### Product Details

<details>
<summary><strong>[BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - 3 TU12 (44.64€)</summary>

**Recommended Quantity:** 3 TU12
**Source:** LLM
**Unit Price:** 14.88€
**Subtotal:** 44.64€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande date du 24 septembre, soit il y a 19 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande), le cycle de rotation est incertain. En application du principe de précaution B2B (incertitude sur le cycle = risque), un besoin est détecté pour éviter toute rupture. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 3 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou faibles, la médiane de 3 unités est retenue.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 3 | 14.88€ |

</details>

<details>
<summary><strong>[MANA02] MANA natural energy drink - tropical passion 250ml</strong> - 2 TU24 (65.60€)</summary>

**Recommended Quantity:** 2 TU24
**Source:** LLM
**Unit Price:** 32.80€
**Subtotal:** 65.60€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande date de 19 jours (24/09). Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande récente), il existe une incertitude sur le cycle de rotation. En application du principe de précaution B2B (Étape 1), un besoin est détecté pour éviter toute rupture. Pour la quantité (Étape 2), on se base sur la seule valeur connue de l'historique récent, soit 2 unités, afin de maintenir le stock sans surstockage.

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 2 | 32.80€ |

</details>

<details>
<summary><strong>[DAF001] DAF Elderflower with Pomegrenade juice 25cl</strong> - 6 TU12 (90.72€)</summary>

**Recommended Quantity:** 6 TU12
**Source:** LLM
**Unit Price:** 15.12€
**Subtotal:** 90.72€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte à 116 jours (19 juin 2025). Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard en B2B. En application du principe de précaution (Étape 1), un risque de rupture est identifié car le stock initial est probablement épuisé. Pour la quantité (Étape 2), on se base sur l'unique point de donnée disponible (6 unités) pour maintenir le niveau de stock habituel sans surestimation.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/19/2025 | 6 | 15.12€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-13 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 7 at-risk products detected
- **Proposal Final:** 7 products after pricing

### LLM Usage

- **Calls:** 7
- **Tokens:** 7239

### Performance

- **Execution Time:** 2.9s

</details>

---

*Report auto-generated on 12/30/2025, 3:17:21 PM*