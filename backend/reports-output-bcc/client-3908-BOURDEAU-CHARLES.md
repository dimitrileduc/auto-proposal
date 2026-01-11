# Auto-Proposal Report - BOURDEAU CHARLES

**Client:** BOURDEAU CHARLES (ID: 3908)
**Analysis Date:** 12/30/2025, 3:14:12 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (710.76€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 710.76€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0549] YVALLI SAUCE PIZZA 2,5 KG | 7 TU6 | 37.08€ | 259.56€ | 🟢 High |
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 10 TU6 | 45.12€ | 451.20€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0549] YVALLI SAUCE PIZZA 2,5 KG</strong> - 7 TU6 (259.56€)</summary>

**Recommended Quantity:** 7 TU6
**Source:** LLM
**Unit Price:** 37.08€
**Subtotal:** 259.56€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande espacé (environ tous les 2 à 3 mois). La dernière commande datant du 31 juillet 2025 (soit 63 jours), nous avons dépassé le délai habituel de réapprovisionnement constaté l'année précédente à la même période (août). Le risque de rupture est imminent dans l'horizon des 30 jours. En suivant la règle de la médiane des commandes historiques (7, 7, 8, 12, 7, 7), la quantité de 7 unités est retenue pour couvrir le besoin sans surstockage.

**Baseline Quantity:** 7
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/5/2024 | 7 | 38.40€ |
| 5/15/2024 | 8 | 33.90€ |
| 3/15/2024 | 12 | 33.90€ |
| 12/11/2023 | 7 | 33.90€ |
| 10/5/2023 | 7 | 33.90€ |

</details>

<details>
<summary><strong>[PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - 10 TU6 (451.20€)</summary>

**Recommended Quantity:** 10 TU6
**Source:** LLM
**Unit Price:** 45.12€
**Subtotal:** 451.20€

**Confidence:** 🟢 High (10 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande espacé d'environ 2 à 3 mois. La dernière commande datant du 31 juillet 2025 (il y a 63 jours), nous atteignons le seuil critique de réapprovisionnement pour couvrir les besoins des 30 prochains jours (Replenishment Threshold Days). Bien que l'historique récent soit limité à une seule commande de 10u, les données N-1 confirment une stabilité autour de ce volume (médiane historique de 10u). En application du principe de précaution B2B et pour éviter une rupture imminente, une commande de 10 unités est préconisée.

**Baseline Quantity:** 10
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/5/2024 | 10 | 46.50€ |
| 5/15/2024 | 8 | 42.00€ |
| 3/15/2024 | 7 | 42.00€ |
| 12/11/2023 | 10 | 43.80€ |
| 10/5/2023 | 14 | 43.80€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-02 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2224

### Performance

- **Execution Time:** 2.6s

</details>

---

*Report auto-generated on 12/30/2025, 3:14:12 PM*