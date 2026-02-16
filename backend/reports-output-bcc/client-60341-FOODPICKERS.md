# Auto-Proposal Report - FOODPICKERS

**Client:** FOODPICKERS (ID: 60341)
**Analysis Date:** 12/30/2025, 3:10:40 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 1 (1829.52€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1829.52€ excl. tax

---

## Core Products

**1 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 63 TU24 | 29.04€ | 1829.52€ | 🟢 High |

### Product Details

<details>
<summary><strong>[MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - 63 TU24 (1829.52€)</summary>

**Recommended Quantity:** 63 TU24
**Source:** LLM
**Unit Price:** 29.04€
**Subtotal:** 1829.52€

**Confidence:** 🟢 High (6 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande régulier d'environ 60 jours (juin à juillet, juillet à septembre). La dernière commande date du 04/09/2025, soit il y a 28 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où le risque de rupture est imminent d'ici la prochaine échéance de cycle. ÉTAPE 2 : Estimation quantité. Les trois dernières commandes sont strictement identiques (63u). La médiane et la constante historique convergent vers cette valeur. Application du principe de maintien de la rotation régulière.

**Baseline Quantity:** 63
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/4/2025 | 63 | 29.04€ |
| 6/2/2025 | 63 | 29.04€ |
| 4/28/2025 | 63 | 29.04€ |
| 3/26/2025 | 63 | 29.04€ |
| 2/4/2025 | 63 | 29.04€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-02 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 1 at-risk products detected
- **Proposal Final:** 1 products after pricing

### LLM Usage

- **Calls:** 1
- **Tokens:** 1075

### Performance

- **Execution Time:** 2.5s

</details>

---

*Report auto-generated on 12/30/2025, 3:10:40 PM*