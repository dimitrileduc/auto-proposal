# Auto-Proposal Report - DELISALADES

**Client:** DELISALADES (ID: 3529)
**Analysis Date:** 12/30/2025, 3:27:09 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (2408.00€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 2408.00€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0078] FILOU CHASSEUR 5 L | 80 TU1 | 8.70€ | 696.00€ | 🟢 High |
| [PF3251] JEFKE CHIVE VINAIGRETTE 5L | 40 TU4 | 42.80€ | 1712.00€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 80 TU1 (696.00€)</summary>

**Recommended Quantity:** 80 TU1
**Source:** LLM
**Unit Price:** 8.70€
**Subtotal:** 696.00€

**Confidence:** 🟢 High (40 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande très régulier (environ tous les 14 jours) avec une quantité stable de 80 unités. Bien qu'il n'y ait pas de commandes enregistrées sur la fin d'année 2024, les données N-1 (janvier/février 2024) confirment un besoin actif sur cette période avec des commandes de 80u et 160u. La dernière commande connue remontant à plus de 4 mois, le risque de rupture est critique face au seuil de 30 jours. En application du principe de précaution B2B et de la règle de la médiane historique, une commande de 80 unités est nécessaire pour reconstituer le stock.

**Baseline Quantity:** 80
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/12/2023 | 80 | 8.70€ |
| 4/4/2023 | 80 | 8.70€ |
| 3/21/2023 | 80 | 8.70€ |
| 3/17/2023 | 80 | 8.70€ |
| 3/6/2023 | 80 | 8.70€ |

</details>

<details>
<summary><strong>[PF3251] JEFKE CHIVE VINAIGRETTE 5L</strong> - 40 TU4 (1712.00€)</summary>

**Recommended Quantity:** 40 TU4
**Source:** LLM
**Unit Price:** 42.80€
**Subtotal:** 1712.00€

**Confidence:** 🟢 High (23 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande moyen d'environ 30 à 45 jours. La dernière commande enregistrée remonte au 26 septembre 2024, soit plus de 130 jours sans activité, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire pour reconstituer le stock. La quantité retenue est de 40 unités, correspondant à la médiane et à la valeur la plus fréquente observée dans l'historique récent et passé, tout en évitant les pics exceptionnels de 45 ou 48 unités.

**Baseline Quantity:** 40
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/14/2023 | 48 | 42.80€ |
| 6/8/2023 | 40 | 42.80€ |
| 5/15/2023 | 40 | 42.80€ |
| 4/24/2023 | 40 | 42.80€ |
| 4/12/2023 | 45 | 10.70€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-02-10 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2530

### Performance

- **Execution Time:** 3.1s

</details>

---

*Report auto-generated on 12/30/2025, 3:27:09 PM*