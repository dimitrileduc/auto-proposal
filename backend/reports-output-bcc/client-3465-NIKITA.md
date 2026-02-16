# Auto-Proposal Report - NIKITA

**Client:** NIKITA (ID: 3465)
**Analysis Date:** 12/30/2025, 3:06:52 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (3339.00€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 3339.00€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF3378] MOUTARDE BLANCHE VRAC | 1800 kg | 0.53€ | 954.00€ | 🟢 High |
| [PI2790] PI MOUTARDE BLANCHE | 1800 kg | 0.53€ | 954.00€ | 🟢 High |
| [PF0162] MOUTARDE JAUNE VRAC | 2700 kg | 0.53€ | 1431.00€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF3378] MOUTARDE BLANCHE VRAC</strong> - 1800 kg (954.00€)</summary>

**Recommended Quantity:** 1800 kg
**Source:** LLM
**Unit Price:** 0.53€
**Subtotal:** 954.00€

**Confidence:** 🟢 High (6 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle moyen d'environ 30 à 40 jours entre les réapprovisionnements significatifs. La dernière commande datant du 30 septembre (il y a 27 jours), nous atteignons le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, un risque de rupture est identifié pour l'horizon cible. La quantité est déterminée par la médiane des commandes historiques récentes (1800, 1800, 2611, 2700), soit 1800 unités, en privilégiant la valeur la plus basse pour éviter le surstockage.

**Baseline Quantity:** 1800
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/27/2025 | 0 | 99999.99€ |
| 6/30/2025 | 1800 | 0.53€ |
| 6/20/2025 | 2700 | 0.53€ |
| 6/4/2025 | 1800 | 0.53€ |
| 5/13/2025 | 900 | 0.53€ |

</details>

<details>
<summary><strong>[PI2790] PI MOUTARDE BLANCHE</strong> - 1800 kg (954.00€)</summary>

**Recommended Quantity:** 1800 kg
**Source:** LLM
**Unit Price:** 0.53€
**Subtotal:** 954.00€

**Confidence:** 🟢 High (22 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 30 à 45 jours. La dernière commande significative date du 27 août (61 jours), ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent. Bien que la commande de septembre soit nulle, l'historique N-1 montre une activité soutenue sur cette période (septembre/octobre). En appliquant la règle de la médiane sur l'historique récent et N-1 (excluant les pics à 3600u et les valeurs nulles), la quantité de 1800u est retenue comme volume de référence stable pour ce produit.

**Baseline Quantity:** 1800
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/12/2024 | 900 | 0.53€ |
| 2/6/2024 | 1800 | 0.53€ |
| 1/2/2024 | 900 | 0.53€ |
| 11/21/2023 | 1800 | 0.53€ |
| 11/7/2023 | 900 | 0.53€ |

</details>

<details>
<summary><strong>[PF0162] MOUTARDE JAUNE VRAC</strong> - 2700 kg (1431.00€)</summary>

**Recommended Quantity:** 2700 kg
**Source:** LLM
**Unit Price:** 0.53€
**Subtotal:** 1431.00€

**Confidence:** 🟢 High (26 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande moyen d'environ 25 à 30 jours. La dernière commande enregistrée date du 30 juin 2025, ce qui indique une rupture de stock probable ou une absence de données récentes au 27 octobre 2025. En application du principe de précaution B2B et pour couvrir le risque sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité est fixée à 2700 unités, correspondant à la médiane des commandes historiques (excluant les pics et les faibles volumes ponctuels) et à la volumétrie observée sur la même période l'année précédente (octobre 2024).

**Baseline Quantity:** 2700
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 1/16/2024 | 1800 | 0.53€ |
| 1/2/2024 | 1800 | 0.53€ |
| 12/28/2023 | 1800 | 0.53€ |
| 11/21/2023 | 2700 | 0.53€ |
| 11/7/2023 | 2700 | 0.53€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-27 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3714

### Performance

- **Execution Time:** 2.7s

</details>

---

*Report auto-generated on 12/30/2025, 3:06:52 PM*