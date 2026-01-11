# Auto-Proposal Report - SRL WAL’EPICES

**Client:** SRL WAL’EPICES (ID: 3691)
**Analysis Date:** 12/30/2025, 3:07:06 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (1505.70€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1505.70€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0078] FILOU CHASSEUR 5 L | 160 TU1 | 8.96€ | 1433.60€ | 🟢 High |
| [PF0097] FILOU MOUTARDE 5 KG | 10 TU1 | 7.21€ | 72.10€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 160 TU1 (1433.60€)</summary>

**Recommended Quantity:** 160 TU1
**Source:** LLM
**Unit Price:** 8.96€
**Subtotal:** 1433.60€

**Confidence:** 🟢 High (24 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence moyenne d'environ 35 à 45 jours. La dernière commande datant du 21 octobre (soit 22 jours avant la date actuelle), le risque de rupture se situe dans l'horizon des 30 jours du seuil de réapprovisionnement (Replenishment Threshold Days). En application du principe de précaution B2B, un besoin est détecté. Concernant la quantité, l'historique récent et N-1 montre une récurrence forte sur le volume de 160u, qui constitue la médiane et la valeur standard hors pics exceptionnels. On maintient donc cette quantité de 160u.

**Baseline Quantity:** 160
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 2/6/2024 | 160 | 8.70€ |
| 1/15/2024 | 160 | 8.70€ |
| 12/6/2023 | 80 | 8.70€ |
| 12/5/2023 | 160 | 8.70€ |
| 11/20/2023 | 80 | 8.70€ |

</details>

<details>
<summary><strong>[PF0097] FILOU MOUTARDE 5 KG</strong> - 10 TU1 (72.10€)</summary>

**Recommended Quantity:** 10 TU1
**Source:** LLM
**Unit Price:** 7.21€
**Subtotal:** 72.10€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande date du 21 octobre, soit il y a 22 jours. Le cycle récent entre les deux dernières commandes est de 34 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (22 jours écoulés sur un cycle de 34, soit 65% du cycle, approchant le seuil de précaution de 70% dans l'horizon des 30 prochains jours). La quantité est fixée à 10 unités, correspondant à la médiane et à la valeur constante des commandes récentes les plus significatives.

**Baseline Quantity:** 10
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 11/12/2024 | 10 | 7.00€ |
| 7/5/2024 | 10 | 7.00€ |
| 4/30/2024 | 5 | 7.00€ |
| 2/6/2024 | 10 | 7.00€ |
| 12/5/2023 | 5 | 7.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-12 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2400

### Performance

- **Execution Time:** 2.7s

</details>

---

*Report auto-generated on 12/30/2025, 3:07:06 PM*