# Auto-Proposal Report - SRL SVASTI

**Client:** SRL SVASTI (ID: 58766)
**Analysis Date:** 12/30/2025, 3:28:48 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 0 (0.00€ excl. tax)
- **Optional Products:** 2 (300.00€ excl. tax)
- **Total:** 300.00€ excl. tax
- **MOQ Adjustment:** +96.00€ to meet minimum of 300€

---

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**2 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [LC002] LC Coffret Découverte | 5 TU1 | 18.00€ | 90.00€ |
| [LC001] LC Coffret Exploration  | 7 TU1 | 30.00€ | 210.00€ |

### Product Details

<details>
<summary><strong>[LC002] LC Coffret Découverte</strong> - 5 TU1 (90.00€)</summary>

**Recommended Quantity:** 5 TU1
**Source:** LLM
**Unit Price:** 18.00€
**Subtotal:** 90.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte à 146 jours (12/12/2024). Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement tout cycle de rotation standard en B2B. En application du principe de précaution (Étape 1), un besoin est détecté car l'absence de commande récente suggère un risque de rupture de stock ou un besoin de réassort imminent. Pour la quantité (Étape 2), on se base sur l'unique point de donnée disponible (3 unités), ce qui constitue la médiane de l'historique récent.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/12/2024 | 3 | 18.00€ |

</details>

<details>
<summary><strong>[LC001] LC Coffret Exploration </strong> - 7 TU1 (210.00€)</summary>

**Recommended Quantity:** 7 TU1
**Source:** LLM
**Unit Price:** 30.00€
**Subtotal:** 210.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 12 décembre 2024, soit environ 146 jours. Bien que l'historique soit limité à une seule commande, l'absence de réapprovisionnement sur une période aussi longue pour un produit de type "Coffret" suggère un risque de rupture ou un besoin de renouvellement de stock pour couvrir les 30 prochains jours. En application du principe de précaution B2B (cycle incertain = prévoir), une commande est déclenchée. ÉTAPE 2 : Estimation quantité. En l'absence de données multiples, on se base sur la seule valeur historique disponible (5u) pour maintenir le niveau de stock initial.

**Baseline Quantity:** 5
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/12/2024 | 5 | 30.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-05-07 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing
  - MOQ Adjustment: 204.00€ → 300.00€

### LLM Usage

- **Calls:** 2
- **Tokens:** 2032

### Performance

- **Execution Time:** 3.4s

</details>

---

*Report auto-generated on 12/30/2025, 3:28:48 PM*