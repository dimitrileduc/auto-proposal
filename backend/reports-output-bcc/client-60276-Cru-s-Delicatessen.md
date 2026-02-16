# Auto-Proposal Report - Cru's Delicatessen

**Client:** Cru's Delicatessen (ID: 60276)
**Analysis Date:** 12/30/2025, 3:29:27 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (457.92€ excl. tax)
- **Optional Products:** 1 (152.64€ excl. tax)
- **Total:** 610.56€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 6 TU24 | 25.44€ | 152.64€ | 🟡 Medium |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 6 TU24 | 25.44€ | 152.64€ | 🟡 Medium |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 6 TU24 | 25.44€ | 152.64€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - 6 TU24 (152.64€)</summary>

**Recommended Quantity:** 6 TU24
**Source:** LLM
**Unit Price:** 25.44€
**Subtotal:** 152.64€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse montre un cycle de commande d'environ 110 jours entre les deux dernières occurrences. La dernière commande datant du 09/09/2025 (il y a 36 jours), nous entrons dans la zone de risque de rupture pour les 30 prochains jours selon le principe de précaution B2B, car le cycle est irrégulier et difficile à déterminer avec précision. Pour la quantité, la médiane des commandes récentes est de 6 unités. Conformément aux règles de gestion des rotations faibles, nous maintenons ce volume historique constant sans surstockage.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/9/2025 | 6 | 25.44€ |
| 5/22/2025 | 6 | 25.44€ |

</details>

<details>
<summary><strong>[NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - 6 TU24 (152.64€)</summary>

**Recommended Quantity:** 6 TU24
**Source:** LLM
**Unit Price:** 25.44€
**Subtotal:** 152.64€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle de 110 jours entre les deux dernières commandes. Au 15 octobre 2025, 36 jours se sont écoulés depuis la dernière commande (09/09/2025). Bien que nous ne soyons pas encore au terme du cycle théorique, l'historique est trop limité pour garantir une régularité stricte. En application du principe de précaution B2B (incertitude sur le cycle = risque), une commande est préconisée pour couvrir l'horizon des 30 prochains jours. La quantité retenue est de 6 unités, correspondant à la médiane et à la constante observée sur les commandes précédentes.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/9/2025 | 6 | 25.44€ |
| 5/22/2025 | 6 | 25.44€ |

</details>

<details>
<summary><strong>[NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - 6 TU24 (152.64€)</summary>

**Recommended Quantity:** 6 TU24
**Source:** LLM
**Unit Price:** 25.44€
**Subtotal:** 152.64€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande date du 09/09/2025, soit 36 jours avant la date actuelle. L'intervalle précédent était de 110 jours, mais le seuil de réapprovisionnement de 30 jours est désormais atteint. En application du principe de précaution B2B (cycle irrégulier), un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 6u et 8u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 6 unités.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/9/2025 | 8 | 25.44€ |
| 5/22/2025 | 6 | 25.44€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**1 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 6 TU24 | 25.44€ | 152.64€ |

### Product Details

<details>
<summary><strong>[NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - 6 TU24 (152.64€)</summary>

**Recommended Quantity:** 6 TU24
**Source:** LLM
**Unit Price:** 25.44€
**Subtotal:** 152.64€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 mai 2025, soit 146 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande, le principe de précaution B2B s'applique face à une absence prolongée de stock ou de mouvement. Le risque de rupture est considéré comme présent par défaut d'information sur la rotation réelle. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la règle de maintien de la quantité de la rotation régulière est appliquée. La médiane et la valeur unique disponible étant de 6 unités, cette quantité est retenue pour reconstituer un stock minimal sans risque de surstockage majeur.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/22/2025 | 6 | 25.44€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-15 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 4 at-risk products detected
- **Proposal Final:** 4 products after pricing

### LLM Usage

- **Calls:** 4
- **Tokens:** 4178

### Performance

- **Execution Time:** 3.1s

</details>

---

*Report auto-generated on 12/30/2025, 3:29:27 PM*