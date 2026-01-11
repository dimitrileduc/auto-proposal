# Auto-Proposal Report - BRING BACK

**Client:** BRING BACK (ID: 1)
**Analysis Date:** 12/30/2025, 3:28:33 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 0 (0.00€ excl. tax)
- **Optional Products:** 1 (300.00€ excl. tax)
- **Total:** 300.00€ excl. tax
- **MOQ Adjustment:** +180.00€ to meet minimum of 300€

---

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**1 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [LC001] LC Coffret Exploration  | 10 TU1 | 30.00€ | 300.00€ |

### Product Details

<details>
<summary><strong>[LC001] LC Coffret Exploration </strong> - 10 TU1 (300.00€)</summary>

**Recommended Quantity:** 10 TU1
**Source:** LLM
**Unit Price:** 30.00€
**Subtotal:** 300.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande date du 12 décembre, soit il y a 32 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock. En l'absence d'historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 4 unités. Conformément à la règle de maintien des volumes sur rotation régulière ou unique, la quantité de 4 unités est reconduite pour couvrir la période à venir.

**Baseline Quantity:** 4
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/12/2024 | 4 | 30.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-01-13 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 1 at-risk products detected
- **Proposal Final:** 1 products after pricing
  - MOQ Adjustment: 120.00€ → 300.00€

### LLM Usage

- **Calls:** 1
- **Tokens:** 1020

### Performance

- **Execution Time:** 2.4s

</details>

---

*Report auto-generated on 12/30/2025, 3:28:33 PM*