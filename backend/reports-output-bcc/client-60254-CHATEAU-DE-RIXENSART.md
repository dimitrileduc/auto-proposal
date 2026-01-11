# Auto-Proposal Report - CHATEAU DE RIXENSART

**Client:** CHATEAU DE RIXENSART (ID: 60254)
**Analysis Date:** 12/30/2025, 3:25:30 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 0 (0.00€ excl. tax)
- **Optional Products:** 2 (546.00€ excl. tax)
- **Total:** 546.00€ excl. tax

---

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**2 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [REB06] REB chips bio - paprika fumé 35g | 15 TU20 | 18.20€ | 273.00€ |
| [REB05] REB chips bio - sel de mer 35g | 15 TU20 | 18.20€ | 273.00€ |

### Product Details

<details>
<summary><strong>[REB06] REB chips bio - paprika fumé 35g</strong> - 15 TU20 (273.00€)</summary>

**Recommended Quantity:** 15 TU20
**Source:** LLM
**Unit Price:** 18.20€
**Subtotal:** 273.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 - DÉTECTION DU BESOIN : La dernière commande date du 02/07/2025, soit il y a 22 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de réassort. Bien qu'il n'y ait qu'une seule commande historique, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture de stock imminente. ÉTAPE 2 - ESTIMATION QUANTITÉ : En l'absence d'historique multiple pour calculer une médiane, la quantité de la commande la plus récente (15 unités) est reconduite pour maintenir le niveau de stock initialement établi.

**Baseline Quantity:** 15
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/2/2025 | 15 | 18.20€ |

</details>

<details>
<summary><strong>[REB05] REB chips bio - sel de mer 35g</strong> - 15 TU20 (273.00€)</summary>

**Recommended Quantity:** 15 TU20
**Source:** LLM
**Unit Price:** 18.20€
**Subtotal:** 273.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 - DÉTECTION DU BESOIN : La dernière commande date du 02/07/2025, soit il y a 22 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de risque de rupture. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse 70% d'un cycle mensuel standard. ÉTAPE 2 - ESTIMATION QUANTITÉ : L'historique récent montre une commande unique de 15 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité de 15 unités est maintenue pour assurer la continuité du stock sans surstockage.

**Baseline Quantity:** 15
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/2/2025 | 15 | 18.20€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-07-24 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2104

### Performance

- **Execution Time:** 2.8s

</details>

---

*Report auto-generated on 12/30/2025, 3:25:30 PM*