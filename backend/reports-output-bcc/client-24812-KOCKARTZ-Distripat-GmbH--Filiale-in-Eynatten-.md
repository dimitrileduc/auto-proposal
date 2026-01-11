# Auto-Proposal Report - KOCKARTZ Distripat GmbH (Filiale in Eynatten)

**Client:** KOCKARTZ Distripat GmbH (Filiale in Eynatten) (ID: 24812)
**Analysis Date:** 12/30/2025, 3:19:29 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (300.82€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 300.82€ excl. tax
- **MOQ Adjustment:** +261.58€ to meet minimum of 300€

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [LV129] LV Tartinade Carotte Gingembre 190g | 8 TU6 | 13.04€ | 104.32€ | 🟡 Medium |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 8 TU6 | 13.10€ | 104.80€ | 🟡 Medium |
| [LV161] LV Tartinade Mangue curry 190g | 7 TU6 | 13.10€ | 91.70€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[LV129] LV Tartinade Carotte Gingembre 190g</strong> - 8 TU6 (104.32€)</summary>

**Recommended Quantity:** 8 TU6
**Source:** LLM
**Unit Price:** 13.04€
**Subtotal:** 104.32€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/04/2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la mi-juillet (18/07/2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique est constant à 1 unité par commande (médiane = 1). Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/4/2025 | 1 | 13.04€ |
| 2/25/2025 | 2 | 13.04€ |
| 7/18/2024 | 1 | 12.66€ |
| 4/5/2024 | 1 | 12.66€ |

</details>

<details>
<summary><strong>[LV130] LV BIO Tartinade Paprika Chili 190g</strong> - 8 TU6 (104.80€)</summary>

**Recommended Quantity:** 8 TU6
**Source:** LLM
**Unit Price:** 13.10€
**Subtotal:** 104.80€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique montre une rotation très faible mais régulière (environ tous les 3 à 6 mois). La dernière commande enregistrée date du 18 juillet 2024. Après plus d'un an sans mouvement, et selon le principe de précaution B2B en cas de cycle irrégulier ou de doute sur la rotation, un besoin de réapprovisionnement est détecté pour éviter une rupture de stock prolongée sur cette référence. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 (2023-2024) montre une constance absolue avec des commandes unitaires (1u). Conformément à la règle sur les rotations très faibles, la quantité maintenue est de 1 unité, correspondant à la médiane historique.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 2/25/2025 | 2 | 13.10€ |
| 7/18/2024 | 1 | 12.72€ |
| 4/5/2024 | 1 | 12.72€ |
| 10/10/2023 | 1 | 12.72€ |

</details>

<details>
<summary><strong>[LV161] LV Tartinade Mangue curry 190g</strong> - 7 TU6 (91.70€)</summary>

**Recommended Quantity:** 7 TU6
**Source:** LLM
**Unit Price:** 13.10€
**Subtotal:** 91.70€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande à la mi-juillet l'année dernière. Nous sommes actuellement le 6 août, soit au-delà de la date anniversaire de la dernière commande connue. En application du principe de précaution B2B et face à l'absence de données récentes, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique complet (N-1) est d'une régularité absolue avec des commandes unitaires (1u). La médiane et la constante historique étant de 1, la quantité préconisée est de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 2/25/2025 | 2 | 13.10€ |
| 7/18/2024 | 1 | 12.72€ |
| 4/5/2024 | 1 | 12.72€ |
| 10/10/2023 | 1 | 12.72€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-08-06 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing
  - MOQ Adjustment: 39.24€ → 300.82€

### LLM Usage

- **Calls:** 3
- **Tokens:** 3242

### Performance

- **Execution Time:** 3.6s

</details>

---

*Report auto-generated on 12/30/2025, 3:19:29 PM*