# Auto-Proposal Report - LA FAGNARDE

**Client:** LA FAGNARDE (ID: 3514)
**Analysis Date:** 12/30/2025, 3:06:58 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (1966.19€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1966.19€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0078] FILOU CHASSEUR 5 L | 80 TU1 | 8.96€ | 716.80€ | 🟢 High |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 27 TU1 | 19.57€ | 528.39€ | 🟢 High |
| [PF0096] FILOU MOUTARDE 3 KG | 140 TU1 | 5.15€ | 721.00€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 80 TU1 (716.80€)</summary>

**Recommended Quantity:** 80 TU1
**Source:** LLM
**Unit Price:** 8.96€
**Subtotal:** 716.80€

**Confidence:** 🟢 High (20 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande récent montre une fréquence de réapprovisionnement environ tous les 28 à 35 jours (août, septembre, fin septembre). La dernière commande datant du 29 septembre 2025, soit il y a 41 jours, le seuil de réapprovisionnement de 30 jours est largement dépassé, indiquant un risque de rupture immédiat. L'historique de l'année précédente confirme également une activité en novembre (commande le 04/11/2024). Concernant la quantité, les quatre dernières commandes sont strictement identiques à 80 unités. Conformément à la règle de maintien de la quantité pour une rotation régulière, la quantité retenue est de 80.

**Baseline Quantity:** 80
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/4/2024 | 10 | 8.70€ |
| 5/6/2024 | 40 | 8.70€ |
| 4/15/2024 | 30 | 8.70€ |
| 2/19/2024 | 60 | 8.70€ |
| 11/20/2023 | 60 | 8.70€ |

</details>

<details>
<summary><strong>[PF0085] FILOU CURRY KETCHUP  10 KG</strong> - 27 TU1 (528.39€)</summary>

**Recommended Quantity:** 27 TU1
**Source:** LLM
**Unit Price:** 19.57€
**Subtotal:** 528.39€

**Confidence:** 🟢 High (14 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande récent montre une fréquence régulière d'environ 28 jours (05/08, 02/09, 29/09). La dernière commande remontant au 29 septembre, soit il y a 41 jours, le cycle habituel est largement dépassé. Il existe un risque de rupture imminent ou une rupture déjà effective au regard du seuil de réapprovisionnement de 30 jours. En application de la règle de précaution B2B, une commande est nécessaire. La quantité est déterminée par la médiane des commandes récentes (26, 27, 28), soit 27 unités, ce qui correspond à la consommation stable observée sur les derniers mois.

**Baseline Quantity:** 27
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/26/2024 | 26 | 19.00€ |
| 6/4/2024 | 26 | 19.00€ |
| 5/6/2024 | 13 | 19.00€ |
| 2/19/2024 | 39 | 19.00€ |
| 11/20/2023 | 25 | 19.00€ |

</details>

<details>
<summary><strong>[PF0096] FILOU MOUTARDE 3 KG</strong> - 140 TU1 (721.00€)</summary>

**Recommended Quantity:** 140 TU1
**Source:** LLM
**Unit Price:** 5.15€
**Subtotal:** 721.00€

**Confidence:** 🟢 High (12 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence de réapprovisionnement d'environ 28 à 30 jours (basée sur les commandes d'août et septembre 2025). La dernière commande enregistrée remonte au 02/09/2025, soit plus de 60 jours avant la date actuelle (09/11/2025). Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture imminent ou un besoin non couvert. Conformément à la règle de précaution B2B, une commande est nécessaire. La quantité retenue est de 140 unités, correspondant à la médiane et à la valeur constante des commandes les plus récentes, reflétant le volume de consommation actuel.

**Baseline Quantity:** 140
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/26/2024 | 100 | 5.00€ |
| 7/11/2024 | 80 | 5.00€ |
| 5/6/2024 | 100 | 5.00€ |
| 2/19/2024 | 100 | 5.00€ |
| 11/20/2023 | 100 | 5.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-09 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3675

### Performance

- **Execution Time:** 3.2s

</details>

---

*Report auto-generated on 12/30/2025, 3:06:58 PM*