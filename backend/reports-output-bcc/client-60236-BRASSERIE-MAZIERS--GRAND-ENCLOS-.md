# Auto-Proposal Report - BRASSERIE MAZIERS (GRAND ENCLOS)

**Client:** BRASSERIE MAZIERS (GRAND ENCLOS) (ID: 60236)
**Analysis Date:** 12/30/2025, 3:23:21 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (1580.00€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1580.00€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 15 TU20 | 31.60€ | 474.00€ | 🟡 Medium |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 30 TU20 | 31.60€ | 948.00€ | 🟡 Medium |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 5 TU20 | 31.60€ | 158.00€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - 15 TU20 (474.00€)</summary>

**Recommended Quantity:** 15 TU20
**Source:** LLM
**Unit Price:** 31.60€
**Subtotal:** 474.00€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 18 juin 2025, soit 78 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : En l'absence de données historiques multiples pour calculer une médiane, la quantité de la dernière commande (15u) est reconduite pour maintenir le stock, conformément à la règle de maintien des volumes sur rotation régulière ou faible.

**Baseline Quantity:** 15
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/18/2025 | 15 | 31.60€ |
| 4/1/2025 | 10 | 31.60€ |

</details>

<details>
<summary><strong>[TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - 30 TU20 (948.00€)</summary>

**Recommended Quantity:** 30 TU20
**Source:** LLM
**Unit Price:** 31.60€
**Subtotal:** 948.00€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 18 juin 2025, soit 78 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement les cycles de réapprovisionnement standards en B2B pour ce type de boisson. En application du principe de précaution (Étape 1), un besoin est détecté pour éviter une rupture de stock prolongée. La quantité retenue correspond à la seule valeur historique disponible (30u), conformément à la règle de maintien des volumes en cas de rotation régulière ou unique.

**Baseline Quantity:** 30
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/18/2025 | 30 | 31.60€ |
| 4/1/2025 | 20 | 31.60€ |

</details>

<details>
<summary><strong>[TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - 5 TU20 (158.00€)</summary>

**Recommended Quantity:** 5 TU20
**Source:** LLM
**Unit Price:** 31.60€
**Subtotal:** 158.00€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 18 juin 2025, soit 78 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé est important. En application du principe de précaution B2B (si doute sur le cycle ou rotation → prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : En l'absence d'historique multiple, la quantité de la dernière commande (5u) est utilisée comme référence pour maintenir le stock, conformément à la règle de maintien des rotations faibles/régulières.

**Baseline Quantity:** 5
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/18/2025 | 5 | 31.60€ |
| 4/1/2025 | 10 | 31.60€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-09-04 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3082

### Performance

- **Execution Time:** 2.6s

</details>

---

*Report auto-generated on 12/30/2025, 3:23:21 PM*