# Auto-Proposal Report - MAISON DESPRIET SA, MAISON DESPRIET SA, Adresse de facturation

**Client:** MAISON DESPRIET SA, MAISON DESPRIET SA, Adresse de facturation (ID: 5454)
**Analysis Date:** 12/30/2025, 3:25:51 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 0 (0.00€ excl. tax)
- **Optional Products:** 4 (1698.68€ excl. tax)
- **Total:** 1698.68€ excl. tax

---

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**4 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 TU12 | 39.60€ | 39.60€ |
| [PF3290] JF MAYO BARAKI 925ML | 1 TU12 | 46.92€ | 46.92€ |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 8 TU12 | 25.92€ | 207.36€ |
| [PF0078] FILOU CHASSEUR 5 L | 160 TU1 | 8.78€ | 1404.80€ |

### Product Details

<details>
<summary><strong>[PF3273] JF MITRAILLETTE SAUCE 925ML</strong> - 1 TU12 (39.60€)</summary>

**Recommended Quantity:** 1 TU12
**Source:** LLM
**Unit Price:** 39.60€
**Subtotal:** 39.60€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande date du 14 mai, soit 18 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande), le cycle de rotation est incertain. En application du principe de précaution B2B (mieux vaut prévenir une rupture qu'une absence de stock), un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la médiane de 1 unité est retenue.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/14/2025 | 1 | 39.60€ |

</details>

<details>
<summary><strong>[PF3290] JF MAYO BARAKI 925ML</strong> - 1 TU12 (46.92€)</summary>

**Recommended Quantity:** 1 TU12
**Source:** LLM
**Unit Price:** 46.92€
**Subtotal:** 46.92€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande date du 14 mai, soit 18 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture, d'autant plus que le cycle de ce produit n'est pas encore clairement établi (historique récent unique). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la quantité retenue est de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/14/2025 | 1 | 46.92€ |

</details>

<details>
<summary><strong>[PF0524] FILOU SAUCE TOMATE 815 GR</strong> - 8 TU12 (207.36€)</summary>

**Recommended Quantity:** 8 TU12
**Source:** LLM
**Unit Price:** 25.92€
**Subtotal:** 207.36€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 14 mai 2025 (soit 18 jours). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture, d'autant plus qu'il n'y a qu'une seule commande récente, ce qui rend le cycle de rotation incertain. En application du principe de précaution B2B (détection d'un besoin incertain privilégiée), une commande est nécessaire. La quantité retenue est de 8 unités, correspondant à la valeur unique et médiane de l'historique récent.

**Baseline Quantity:** 8
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/14/2025 | 8 | 25.92€ |

</details>

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 160 TU1 (1404.80€)</summary>

**Recommended Quantity:** 160 TU1
**Source:** LLM
**Unit Price:** 8.78€
**Subtotal:** 1404.80€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande date du 14 mai, soit il y a 18 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique récent limité à une seule commande massive, il existe une incertitude sur le cycle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : En l'absence d'historique multiple pour calculer une médiane, la quantité de la dernière commande (160u) est reconduite pour maintenir le stock opérationnel.

**Baseline Quantity:** 160
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/14/2025 | 160 | 8.78€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-06-01 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 4 at-risk products detected
- **Proposal Final:** 4 products after pricing

### LLM Usage

- **Calls:** 4
- **Tokens:** 4066

### Performance

- **Execution Time:** 3.5s

</details>

---

*Report auto-generated on 12/30/2025, 3:25:51 PM*