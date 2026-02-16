# Auto-Proposal Report - LECONTE ETS

**Client:** LECONTE ETS (ID: 3903)
**Analysis Date:** 12/30/2025, 3:16:30 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (821.70€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 821.70€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 10 TU6 | 54.06€ | 540.60€ | 🟡 Medium |
| [PF0077] FILOU PROVENCALE 5 L | 30 TU1 | 9.37€ | 281.10€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> - 10 TU6 (540.60€)</summary>

**Recommended Quantity:** 10 TU6
**Source:** LLM
**Unit Price:** 54.06€
**Subtotal:** 540.60€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 04/09/2025, soit 52 jours. Bien que l'historique soit limité, l'intervalle entre les deux premières commandes était de 27 jours. Nous avons largement dépassé ce cycle, et avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé ou le cycle est irrégulier. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 (ESTIMATION QUANTITÉ) : Les commandes précédentes étaient de 10u et 24u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation incertaine, la quantité retenue est de 10u.

**Baseline Quantity:** 10
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/4/2025 | 24 | 54.06€ |
| 8/8/2025 | 10 | 54.06€ |

</details>

<details>
<summary><strong>[PF0077] FILOU PROVENCALE 5 L</strong> - 30 TU1 (281.10€)</summary>

**Recommended Quantity:** 30 TU1
**Source:** LLM
**Unit Price:** 9.37€
**Subtotal:** 281.10€

**Confidence:** 🟢 High (13 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 04/09/2025, soit 52 jours. L'historique montre des cycles de commande variant entre 15 et 85 jours, avec une récurrence marquée en octobre/novembre l'année précédente (21/10/2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est réel car nous entrons dans la fenêtre habituelle de commande. En suivant la règle de la médiane des commandes récentes (30, 40, 30), la quantité retenue est de 30 unités, ce qui correspond également au volume le plus fréquent et le plus prudent pour éviter le surstock.

**Baseline Quantity:** 30
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 10/21/2024 | 30 | 9.10€ |
| 8/21/2024 | 30 | 9.10€ |
| 5/24/2024 | 40 | 9.10€ |
| 3/13/2024 | 40 | 9.10€ |
| 11/24/2023 | 40 | 9.10€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-26 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2256

### Performance

- **Execution Time:** 2.6s

</details>

---

*Report auto-generated on 12/30/2025, 3:16:30 PM*