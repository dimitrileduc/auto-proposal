# Auto-Proposal Report - Natürlich Unverpackt

**Client:** Natürlich Unverpackt (ID: 52712)
**Analysis Date:** 12/30/2025, 3:25:05 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 0 (0.00€ excl. tax)
- **Optional Products:** 4 (303.66€ excl. tax)
- **Total:** 303.66€ excl. tax
- **MOQ Adjustment:** +245.82€ to meet minimum of 300€

---

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**4 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [MF0030] MF Tarti Mangue Curry 250g  | 6 TU6 | 14.46€ | 86.76€ |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 5 TU6 | 14.46€ | 72.30€ |
| [MF0027] MF Tarti Aubergine 250g  | 5 TU6 | 14.46€ | 72.30€ |
| [MF0029] MF Tarti Datte chili 250g | 5 TU6 | 14.46€ | 72.30€ |

### Product Details

<details>
<summary><strong>[MF0030] MF Tarti Mangue Curry 250g </strong> - 6 TU6 (86.76€)</summary>

**Recommended Quantity:** 6 TU6
**Source:** LLM
**Unit Price:** 14.46€
**Subtotal:** 86.76€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Absence totale d'historique de commandes (récentes et N-1). En supply chain B2B, l'absence de données sur une référence active constitue un doute majeur sur le cycle de rotation. En application du principe de précaution (mieux vaut détecter un besoin incertain qu'une rupture), un besoin est identifié. ÉTAPE 2 : Sans historique pour calculer une médiane, la règle pour les rotations très faibles ou inconnues impose de ne pas surestimer. Une quantité minimale de 1 unité est préconisée pour tester la rotation sans créer de surstock.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/13/2025 | 1 | 14.46€ |

</details>

<details>
<summary><strong>[MF0035] MF Tarti Tomate Ail des ours 250g </strong> - 5 TU6 (72.30€)</summary>

**Recommended Quantity:** 5 TU6
**Source:** LLM
**Unit Price:** 14.46€
**Subtotal:** 72.30€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou d'absence de cycle défini, une commande est nécessaire pour constituer un stock initial ou tester la rotation. La quantité minimale de 1 unité est retenue conformément à la règle de prudence sur les faibles rotations pour éviter le surstockage initial.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/13/2025 | 1 | 14.46€ |

</details>

<details>
<summary><strong>[MF0027] MF Tarti Aubergine 250g </strong> - 5 TU6 (72.30€)</summary>

**Recommended Quantity:** 5 TU6
**Source:** LLM
**Unit Price:** 14.46€
**Subtotal:** 72.30€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou d'absence de cycle déterminé, une commande est nécessaire pour initialiser le stock ou répondre à un besoin potentiel. La quantité minimale de 1 unité est retenue conformément à la règle de prudence sur les rotations faibles ou inconnues.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/13/2025 | 3 | 14.46€ |

</details>

<details>
<summary><strong>[MF0029] MF Tarti Datte chili 250g</strong> - 5 TU6 (72.30€)</summary>

**Recommended Quantity:** 5 TU6
**Source:** LLM
**Unit Price:** 14.46€
**Subtotal:** 72.30€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou passé (N-1). En supply chain B2B, l'absence totale de données sur un produit référencé crée une incertitude majeure. Selon le principe de précaution et la règle de détection en cas de doute sur le cycle, il est nécessaire de prévoir une commande pour éviter une rupture potentielle dès le lancement ou la mise en stock. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique, la règle pour les rotations très faibles ou inconnues s'applique : maintenir une quantité minimale de sécurité. Une quantité de 1 unité est préconisée pour initialiser le stock sans risque de surstockage.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/13/2025 | 3 | 14.46€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-26 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 4 at-risk products detected
- **Proposal Final:** 4 products after pricing
  - MOQ Adjustment: 57.84€ → 303.66€

### LLM Usage

- **Calls:** 10
- **Tokens:** 9578

### Performance

- **Execution Time:** 3.6s

</details>

---

*Report auto-generated on 12/30/2025, 3:25:05 PM*