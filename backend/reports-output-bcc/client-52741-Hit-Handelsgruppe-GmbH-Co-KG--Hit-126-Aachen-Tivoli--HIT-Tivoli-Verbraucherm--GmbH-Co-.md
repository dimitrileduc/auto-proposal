# Auto-Proposal Report - Hit Handelsgruppe GmbH&Co.KG, Hit 126 Aachen Tivoli, HIT Tivoli Verbraucherm. GmbH&Co.

**Client:** Hit Handelsgruppe GmbH&Co.KG, Hit 126 Aachen Tivoli, HIT Tivoli Verbraucherm. GmbH&Co. (ID: 52741)
**Analysis Date:** 12/30/2025, 3:17:05 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (315.90€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 315.90€ excl. tax
- **MOQ Adjustment:** +62.40€ to meet minimum of 300€

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 TU6 | 19.50€ | 78.00€ | 🟢 High |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 5 TU6 | 19.50€ | 97.50€ | 🟢 High |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 6 TU6 | 23.40€ | 140.40€ | 🟢 High |

### Product Details

<details>
<summary><strong>[JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - 4 TU6 (78.00€)</summary>

**Recommended Quantity:** 4 TU6
**Source:** LLM
**Unit Price:** 19.50€
**Subtotal:** 78.00€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse montre un cycle de commande d'environ 75 jours entre les deux dernières livraisons. La dernière commande datant du 11 août 2025 (il y a 70 jours), nous atteignons le seuil de 70% du cycle moyen, ce qui indique un risque imminent de rupture de stock dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément au principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes (3u et 5u) est de 4u, mais en suivant la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 3u.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/8/2025 | 5 | 19.50€ |
| 3/14/2025 | 4 | 19.50€ |
| 1/30/2025 | 5 | 19.50€ |
| 10/28/2024 | 2 | 19.50€ |
| 4/30/2024 | 2 | 19.50€ |

</details>

<details>
<summary><strong>[JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - 5 TU6 (97.50€)</summary>

**Recommended Quantity:** 5 TU6
**Source:** LLM
**Unit Price:** 19.50€
**Subtotal:** 97.50€

**Confidence:** 🟢 High (8 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 août 2025, soit 70 jours avant la date actuelle. L'intervalle précédent était de 77 jours. Nous atteignons 90% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). Par principe de précaution B2B, le besoin est validé. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 3u et 5u. La médiane de ces deux valeurs est de 4u. Conformément aux règles, on privilégie la médiane pour stabiliser le stock sans surévaluer.

**Baseline Quantity:** 4
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/14/2025 | 4 | 19.50€ |
| 1/30/2025 | 2 | 19.50€ |
| 12/5/2024 | 4 | 19.50€ |
| 10/28/2024 | 1 | 19.50€ |
| 4/30/2024 | 2 | 19.50€ |

</details>

<details>
<summary><strong>[JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - 6 TU6 (140.40€)</summary>

**Recommended Quantity:** 6 TU6
**Source:** LLM
**Unit Price:** 23.40€
**Subtotal:** 140.40€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande long et irrégulier (environ 77 jours entre les deux dernières commandes). La dernière commande remonte au 11 août, soit 70 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 90% du cycle moyen observé. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 5u et 9u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation lente, la quantité retenue est de 5u.

**Baseline Quantity:** 5
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/8/2025 | 5 | 23.40€ |
| 3/14/2025 | 5 | 23.40€ |
| 12/5/2024 | 5 | 23.40€ |
| 10/28/2024 | 11 | 23.40€ |
| 4/30/2024 | 8 | 23.40€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-20 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing
  - MOQ Adjustment: 253.50€ → 315.90€

### LLM Usage

- **Calls:** 3
- **Tokens:** 3236

### Performance

- **Execution Time:** 2.7s

</details>

---

*Report auto-generated on 12/30/2025, 3:17:05 PM*