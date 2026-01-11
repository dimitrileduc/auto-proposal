# Auto-Proposal Report - JACKY GROUPE SRL

**Client:** JACKY GROUPE SRL (ID: 52958)
**Analysis Date:** 12/30/2025, 3:15:29 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (3120.00€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 3120.00€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF1854] JACKY MAYONNAISE OEUFS SQUEEZE 300ML | 80 TU12 | 18.60€ | 1488.00€ | 🟡 Medium |
| [PF1853] JACKY MIEL MOUT SQUEEZE 300ML | 80 TU12 | 20.40€ | 1632.00€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[PF1854] JACKY MAYONNAISE OEUFS SQUEEZE 300ML</strong> - 80 TU12 (1488.00€)</summary>

**Recommended Quantity:** 80 TU12
**Source:** LLM
**Unit Price:** 18.60€
**Subtotal:** 1488.00€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 10 juin 2025, soit plus de 60 jours. Bien que le cycle historique semble espacé, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture certain. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 80 unités, correspondant à la dernière commande ferme (médiane du récent), évitant ainsi le pic exceptionnel de 125 unités observé l'année précédente.

**Baseline Quantity:** 80
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/10/2025 | 80 | 18.60€ |
| 2/10/2025 | 80 | 18.60€ |
| 6/20/2024 | 125 | 17.88€ |
| 5/2/2024 | 62 | 17.88€ |

</details>

<details>
<summary><strong>[PF1853] JACKY MIEL MOUT SQUEEZE 300ML</strong> - 80 TU12 (1632.00€)</summary>

**Recommended Quantity:** 80 TU12
**Source:** LLM
**Unit Price:** 20.40€
**Subtotal:** 1632.00€

**Confidence:** 🟡 Medium (3 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 10 juin 2025, soit 64 jours avant la date actuelle. Bien que l'historique récent soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié. ÉTAPE 2 : La commande la plus récente est de 80u. L'historique N-1 à la même période affichait 104u. Conformément à la règle de prudence consistant à choisir la valeur la plus basse en cas de doute ou de tendance non confirmée, la quantité de 80u est retenue pour le réapprovisionnement.

**Baseline Quantity:** 80
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (3 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/10/2025 | 80 | 20.40€ |
| 11/19/2024 | 80 | 19.44€ |
| 6/20/2024 | 104 | 19.44€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-08-13 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2125

### Performance

- **Execution Time:** 2.8s

</details>

---

*Report auto-generated on 12/30/2025, 3:15:29 PM*