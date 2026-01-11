# Auto-Proposal Report - BVBA NOYEZ

**Client:** BVBA NOYEZ (ID: 3508)
**Analysis Date:** 12/30/2025, 3:15:17 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (1672.32€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1672.32€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0078] FILOU CHASSEUR 5 L | 60 TU1 | 8.96€ | 537.60€ | 🟢 High |
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 24 TU6 | 47.28€ | 1134.72€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 60 TU1 (537.60€)</summary>

**Recommended Quantity:** 60 TU1
**Source:** LLM
**Unit Price:** 8.96€
**Subtotal:** 537.60€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai 2025, soit plus de 140 jours. L'historique N-1 montre une commande importante à la même période (80u le 24/09/2024) et une autre en octobre 2023. Le cycle est irrégulier mais le délai écoulé dépasse largement les fréquences habituelles, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation de la quantité. La médiane des commandes significatives (60u, 60u, 60u, 80u) est de 60u. Les petites commandes de 15u ou 25u semblent être des ajustements. En suivant le principe de précaution B2B et la médiane historique, une commande de 60u est préconisée.

**Baseline Quantity:** 60
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2024 | 80 | 8.70€ |
| 7/3/2024 | 15 | 8.70€ |
| 5/7/2024 | 60 | 8.70€ |
| 1/16/2024 | 60 | 8.70€ |
| 10/19/2023 | 25 | 8.70€ |

</details>

<details>
<summary><strong>[PF0520] YVALLI PET BOUL TOMATE 2,5 KG</strong> - 24 TU6 (1134.72€)</summary>

**Recommended Quantity:** 24 TU6
**Source:** LLM
**Unit Price:** 47.28€
**Subtotal:** 1134.72€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande très espacé et irrégulier (environ 4 à 5 mois). La dernière commande enregistrée date du 26 mai 2025, soit il y a plus de 140 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés précédemment, ce qui induit un risque de rupture imminent ou un besoin de réapprovisionnement pour la période actuelle (octobre). En application du principe de précaution B2B et face à l'incertitude du cycle, une commande est préconisée. La quantité est fixée à 24 unités, correspondant à la constante stricte observée sur toutes les commandes historiques (médiane parfaite).

**Baseline Quantity:** 24
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/26/2025 | 24 | 47.28€ |
| 11/7/2024 | 24 | 45.90€ |
| 5/7/2024 | 24 | 45.90€ |
| 1/16/2024 | 24 | 45.90€ |
| 10/19/2023 | 24 | 45.90€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-14 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2259

### Performance

- **Execution Time:** 3.6s

</details>

---

*Report auto-generated on 12/30/2025, 3:15:17 PM*