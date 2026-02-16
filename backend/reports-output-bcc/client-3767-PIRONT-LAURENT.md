# Auto-Proposal Report - PIRONT LAURENT

**Client:** PIRONT LAURENT (ID: 3767)
**Analysis Date:** 12/30/2025, 3:24:11 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (320.80€ excl. tax)
- **Optional Products:** 3 (15.45€ excl. tax)
- **Total:** 336.25€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 10 TU1 | 23.18€ | 231.80€ | 🟡 Medium |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 5 TU1 | 17.80€ | 89.00€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - 10 TU1 (231.80€)</summary>

**Recommended Quantity:** 10 TU1
**Source:** LLM
**Unit Price:** 23.18€
**Subtotal:** 231.80€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 23 mai 2025, soit plus de 90 jours sans activité. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours et les intervalles historiques observés l'année précédente (environ 5 mois). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. La commande la plus récente est de 10u. L'historique N-1 montre des volumes de 15u, mais conformément à la règle de privilégier la quantité la plus basse en cas de doute ou de tendance incertaine, la médiane récente de 10u est retenue.

**Baseline Quantity:** 10
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/23/2025 | 10 | 23.18€ |
| 12/3/2024 | 10 | 22.50€ |
| 6/27/2024 | 15 | 22.50€ |
| 1/25/2024 | 15 | 22.50€ |

</details>

<details>
<summary><strong>[PF0959] FILOU TOMATO KETCHUP 10KG</strong> - 5 TU1 (89.00€)</summary>

**Recommended Quantity:** 5 TU1
**Source:** LLM
**Unit Price:** 17.80€
**Subtotal:** 89.00€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 23 mai 2025, soit plus de 90 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les seuils de rotation standards. En l'absence d'historique complexe ou de saisonnalité N-1, la quantité est basée sur le dernier volume observé (5u) pour assurer le réapprovisionnement sans risque de surstockage inutile.

**Baseline Quantity:** 5
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/23/2025 | 5 | 17.80€ |
| 12/3/2024 | 5 | 17.25€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**3 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [PF0096] FILOU MOUTARDE 3 KG | 3 TU1 | 5.15€ | 15.45€ |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 1 TU6 | 0.00€ | 0.00€ |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 1 TU6 | 0.00€ | 0.00€ |

### Product Details

<details>
<summary><strong>[PF0096] FILOU MOUTARDE 3 KG</strong> - 3 TU1 (15.45€)</summary>

**Recommended Quantity:** 3 TU1
**Source:** LLM
**Unit Price:** 5.15€
**Subtotal:** 15.45€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 23 mai 2025, soit environ 95 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique ici car le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'historique N-1, la quantité est basée sur la dernière commande connue (3u) pour couvrir un besoin potentiel et éviter une rupture prolongée sur cette référence.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/23/2025 | 3 | 5.15€ |

</details>

<details>
<summary><strong>[PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - 1 TU6 (0.00€)</summary>

**Recommended Quantity:** 1 TU6
**Source:** LLM
**Unit Price:** 0.00€
**Subtotal:** 0.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 mai 2025, soit 95 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles standards de réapprovisionnement. En application du principe de précaution B2B (doute sur le cycle), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique) pour couvrir le besoin sans créer de surstock inutile.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/23/2025 | 1 | 0.00€ |

</details>

<details>
<summary><strong>[PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - 1 TU6 (0.00€)</summary>

**Recommended Quantity:** 1 TU6
**Source:** LLM
**Unit Price:** 0.00€
**Subtotal:** 0.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 23 mai 2025, soit 95 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/23/2025 | 1 | 0.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-08-26 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 5 at-risk products detected
- **Proposal Final:** 5 products after pricing

### LLM Usage

- **Calls:** 5
- **Tokens:** 5177

### Performance

- **Execution Time:** 3.8s

</details>

---

*Report auto-generated on 12/30/2025, 3:24:11 PM*