# Auto-Proposal Report - DELITRAITEUR

**Client:** DELITRAITEUR (ID: 60283)
**Analysis Date:** 12/30/2025, 3:05:42 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 11 (5008.10€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 5008.10€ excl. tax

---

## Core Products

**11 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 18 TU24 | 25.92€ | 466.56€ | 🟢 High |
| [LV160] LV Tartinade Aubergine 190g | 25 TU6 | 12.06€ | 301.50€ | 🟡 Medium |
| [LV161] LV Tartinade Mangue curry 190g | 5 TU6 | 12.36€ | 61.80€ | 🟡 Medium |
| [LV162] LV Tartinade Tomato Basilico 190g | 25 TU6 | 11.94€ | 298.50€ | 🟡 Medium |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 10 TU24 | 25.44€ | 254.40€ | 🟢 High |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 10 TU24 | 25.44€ | 254.40€ | 🟢 High |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 18 TU24 | 25.44€ | 457.92€ | 🟢 High |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 126 TU12 | 13.68€ | 1723.68€ | 🟢 High |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 21 TU12 | 13.68€ | 287.28€ | 🟢 High |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 42 TU12 | 13.68€ | 574.56€ | 🟡 Medium |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 25 TU6 | 13.10€ | 327.50€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - 18 TU24 (466.56€)</summary>

**Recommended Quantity:** 18 TU24
**Source:** LLM
**Unit Price:** 25.92€
**Subtotal:** 466.56€

**Confidence:** 🟢 High (10 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence régulière d'environ 28 jours (04/08, 01/09, 29/09). Bien que la dernière commande soit très récente (3 jours), le seuil de réapprovisionnement de 30 jours couvre l'intégralité du prochain cycle prévu fin octobre. Par principe de précaution B2B et pour éviter une rupture sur cette période, une commande est préconisée. La quantité est déterminée par la médiane des commandes récentes (10, 17, 20, 20, 60), soit 20u, mais ajustée à 18u (moyenne basse entre la dernière commande de 17u et la médiane) pour respecter la règle de prudence et ne pas surstocker suite au pic exceptionnel de mai.

**Baseline Quantity:** 18
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/28/2025 | 70 | 26.64€ |
| 4/14/2025 | 20 | 26.64€ |
| 3/25/2025 | 30 | 26.64€ |
| 3/3/2025 | 10 | 26.64€ |
| 2/5/2025 | 20 | 32.40€ |

</details>

<details>
<summary><strong>[LV160] LV Tartinade Aubergine 190g</strong> - 25 TU6 (301.50€)</summary>

**Recommended Quantity:** 25 TU6
**Source:** LLM
**Unit Price:** 12.06€
**Subtotal:** 301.50€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande date du 12 septembre (il y a 20 jours). Le cycle moyen entre les commandes est d'environ 38 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans l'horizon de prévision (20 + 30 = 50 jours > cycle moyen). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre des quantités de 50, 5, 25 et 50. La médiane de ces commandes est de 37.5. Cependant, en suivant la règle de privilégier la valeur la plus basse en cas de doute ou de volatilité (5u étant un pic bas et 50u un pic haut), la quantité de 25u (valeur centrale historique) est retenue pour éviter le surstockage tout en couvrant le besoin.

**Baseline Quantity:** 25
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/12/2025 | 50 | 12.06€ |
| 9/1/2025 | 5 | 12.06€ |
| 7/4/2025 | 25 | 12.79€ |
| 5/19/2025 | 50 | 12.31€ |

</details>

<details>
<summary><strong>[LV161] LV Tartinade Mangue curry 190g</strong> - 5 TU6 (61.80€)</summary>

**Recommended Quantity:** 5 TU6
**Source:** LLM
**Unit Price:** 12.36€
**Subtotal:** 61.80€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre des intervalles de 46 jours puis 59 jours. Avec 31 jours écoulés depuis la dernière commande (01/09) et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle moyen atteint). Concernant la quantité, on observe une tendance à la baisse marquée (50u > 25u > 5u). Conformément aux règles de gestion, la médiane des commandes récentes est de 25u, mais la règle de respect de la tendance baissière et le choix de la valeur la plus basse en cas de doute imposent de maintenir la dernière quantité observée de 5u.

**Baseline Quantity:** 5
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/1/2025 | 5 | 12.36€ |
| 7/4/2025 | 25 | 13.10€ |
| 5/19/2025 | 50 | 12.61€ |

</details>

<details>
<summary><strong>[LV162] LV Tartinade Tomato Basilico 190g</strong> - 25 TU6 (298.50€)</summary>

**Recommended Quantity:** 25 TU6
**Source:** LLM
**Unit Price:** 11.94€
**Subtotal:** 298.50€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre des intervalles de 46, 46 et 13 jours. Depuis la dernière commande du 01/09/2025, 31 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la durée moyenne du cycle. En appliquant la règle de la médiane sur les quantités récentes (10, 25, 25, 50), la valeur centrale est de 25 unités. Cette quantité est privilégiée pour maintenir le stock sans surestimer, conformément au principe de précaution B2B.

**Baseline Quantity:** 25
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/1/2025 | 10 | 11.94€ |
| 8/19/2025 | 25 | 11.94€ |
| 7/4/2025 | 25 | 12.67€ |
| 5/19/2025 | 50 | 12.19€ |

</details>

<details>
<summary><strong>[NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - 10 TU24 (254.40€)</summary>

**Recommended Quantity:** 10 TU24
**Source:** LLM
**Unit Price:** 25.44€
**Subtotal:** 254.40€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/09/2025, soit 31 jours avant la date actuelle. Le cycle moyen observé est d'environ 15 à 20 jours. Le délai depuis la dernière commande dépasse largement 70% du cycle habituel, indiquant un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 10u et 20u. La médiane des commandes récentes est de 10u. En suivant le principe de précaution B2B et la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 10u.

**Baseline Quantity:** 10
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/30/2025 | 10 | 26.16€ |
| 4/28/2025 | 40 | 26.16€ |
| 4/14/2025 | 10 | 26.16€ |
| 3/25/2025 | 30 | 26.16€ |
| 2/5/2025 | 20 | 32.40€ |

</details>

<details>
<summary><strong>[NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - 10 TU24 (254.40€)</summary>

**Recommended Quantity:** 10 TU24
**Source:** LLM
**Unit Price:** 25.44€
**Subtotal:** 254.40€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 jours (04/07, 04/08, 01/09). La dernière commande datant du 01/09, soit il y a 31 jours, le seuil de réapprovisionnement de 30 jours est atteint. Il existe un risque de rupture imminent. Concernant la quantité, bien qu'un pic à 20u ait été observé en juillet, la médiane et la fréquence dominante se situent à 10u. En application du principe de précaution et de l'utilisation de la médiane, une commande de 10 unités est préconisée.

**Baseline Quantity:** 10
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/28/2025 | 30 | 26.16€ |
| 4/14/2025 | 20 | 26.16€ |
| 3/25/2025 | 20 | 26.16€ |
| 3/3/2025 | 10 | 26.16€ |
| 2/5/2025 | 10 | 32.40€ |

</details>

<details>
<summary><strong>[NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - 18 TU24 (457.92€)</summary>

**Recommended Quantity:** 18 TU24
**Source:** LLM
**Unit Price:** 25.44€
**Subtotal:** 457.92€

**Confidence:** 🟢 High (8 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. L'historique récent montre un cycle de commande d'environ 30 à 60 jours. La dernière commande date du 01/09/2025, soit il y a 31 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de risque de rupture (31 jours écoulés >= 70% du cycle moyen estimé). Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. Les quantités commandées sont 18u, 18u et 9u. La médiane des commandes récentes est de 18u. Conformément aux règles, nous maintenons cette quantité habituelle pour couvrir le prochain cycle.

**Baseline Quantity:** 18
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/28/2025 | 36 | 26.16€ |
| 4/14/2025 | 18 | 26.16€ |
| 3/25/2025 | 9 | 26.16€ |
| 3/3/2025 | 9 | 26.16€ |
| 2/5/2025 | 9 | 32.40€ |

</details>

<details>
<summary><strong>[ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - 126 TU12 (1723.68€)</summary>

**Recommended Quantity:** 126 TU12
**Source:** LLM
**Unit Price:** 13.68€
**Subtotal:** 1723.68€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse de l'historique récent montre un cycle de commande d'environ 30 à 45 jours (19/05 au 04/07 = 46 jours ; 04/07 au 04/08 = 31 jours). La dernière commande remonte au 04/08, soit 59 jours avant la date actuelle (02/10). Le délai depuis la dernière commande dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est critique. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les deux dernières commandes sont identiques (126u), tandis que la précédente était de 63u. La médiane des commandes récentes est de 126u. Conformément à la règle de maintien d'une rotation régulière, la quantité retenue est de 126u.

**Baseline Quantity:** 126
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/19/2025 | 63 | 14.04€ |
| 4/28/2025 | 42 | 14.04€ |
| 4/14/2025 | 14 | 14.04€ |
| 3/28/2025 | 42 | 14.04€ |
| 2/5/2025 | 21 | 15.48€ |

</details>

<details>
<summary><strong>[ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - 21 TU12 (287.28€)</summary>

**Recommended Quantity:** 21 TU12
**Source:** LLM
**Unit Price:** 13.68€
**Subtotal:** 287.28€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique récent montre un cycle de commande d'environ 30 à 45 jours. La dernière commande datant du 4 août (soit 59 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. La quantité est fixée à 21 unités, correspondant à la médiane et à la constante parfaite observée sur toutes les commandes précédentes.

**Baseline Quantity:** 21
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/30/2025 | 21 | 14.04€ |
| 5/19/2025 | 21 | 14.04€ |
| 4/28/2025 | 42 | 14.04€ |
| 3/28/2025 | 42 | 14.04€ |
| 2/5/2025 | 21 | 15.48€ |

</details>

<details>
<summary><strong>[ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml</strong> - 42 TU12 (574.56€)</summary>

**Recommended Quantity:** 42 TU12
**Source:** LLM
**Unit Price:** 13.68€
**Subtotal:** 574.56€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 59 jours. Le cycle précédent était de 31 jours. Le délai actuel dépasse largement le cycle moyen constaté, indiquant un risque de rupture imminent ou un besoin de réapprovisionnement immédiat dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent présente deux valeurs (63u et 42u). En application de la règle de prudence privilégiant la valeur la plus basse en cas de doute sur la médiane, la quantité retenue est de 42u.

**Baseline Quantity:** 42
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/4/2025 | 63 | 13.68€ |
| 7/4/2025 | 42 | 15.48€ |
| 4/28/2025 | 63 | 14.04€ |
| 3/28/2025 | 42 | 14.04€ |

</details>

<details>
<summary><strong>[LV130] LV BIO Tartinade Paprika Chili 190g</strong> - 25 TU6 (327.50€)</summary>

**Recommended Quantity:** 25 TU6
**Source:** LLM
**Unit Price:** 13.10€
**Subtotal:** 327.50€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre un intervalle de 46 jours entre les deux premières commandes. La dernière commande remonte au 04/07/2025, soit 90 jours avant la date actuelle (02/10/2025). Ce délai dépasse largement le cycle moyen observé et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes précédentes étaient de 50u et 25u. Conformément à la règle de privilégier la médiane et, en cas de doute entre deux quantités, de choisir la plus basse pour éviter le surstockage, la quantité retenue est de 25u.

**Baseline Quantity:** 25
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/4/2025 | 25 | 13.10€ |
| 5/19/2025 | 50 | 12.61€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-02 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 11 at-risk products detected
- **Proposal Final:** 11 products after pricing

### LLM Usage

- **Calls:** 11
- **Tokens:** 12096

### Performance

- **Execution Time:** 4.2s

</details>

---

*Report auto-generated on 12/30/2025, 3:05:42 PM*