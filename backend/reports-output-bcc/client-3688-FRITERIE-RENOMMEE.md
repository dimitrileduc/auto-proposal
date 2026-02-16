# Auto-Proposal Report - FRITERIE RENOMMEE

**Client:** FRITERIE RENOMMEE (ID: 3688)
**Analysis Date:** 12/30/2025, 3:16:51 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (748.96€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 748.96€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0085] FILOU CURRY KETCHUP  10 KG | 2 TU1 | 19.57€ | 39.14€ | 🟢 High |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 30 TU1 | 23.18€ | 695.40€ | 🟢 High |
| [PF0097] FILOU MOUTARDE 5 KG | 2 TU1 | 7.21€ | 14.42€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0085] FILOU CURRY KETCHUP  10 KG</strong> - 2 TU1 (39.14€)</summary>

**Recommended Quantity:** 2 TU1
**Source:** LLM
**Unit Price:** 19.57€
**Subtotal:** 39.14€

**Confidence:** 🟢 High (8 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/09/2025, soit 60 jours. Bien que le cycle historique soit irrégulier, l'analyse de l'année précédente montre une activité sur la période fin d'année (décembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est jugé réel par principe de précaution B2B face à l'absence de commande depuis deux mois. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande exceptionnelle de 10u (pic) et une commande de 2u. La médiane historique globale et la dernière commande convergent vers une consommation de base faible. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute sur une rotation faible), la quantité retenue est de 2 unités.

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/20/2024 | 4 | 19.00€ |
| 8/5/2024 | 4 | 19.00€ |
| 5/3/2024 | 6 | 19.00€ |
| 3/28/2024 | 4 | 19.00€ |
| 12/12/2023 | 2 | 19.00€ |

</details>

<details>
<summary><strong>[PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - 30 TU1 (695.40€)</summary>

**Recommended Quantity:** 30 TU1
**Source:** LLM
**Unit Price:** 23.18€
**Subtotal:** 695.40€

**Confidence:** 🟢 High (10 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande irrégulier mais significatif, avec une dernière commande enregistrée il y a 61 jours (03/09). Étant donné que ce délai dépasse largement la fréquence habituelle constatée en 2024 et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est critique (Principe de précaution B2B). Pour la quantité, bien qu'une commande isolée de 7u soit visible, la médiane des commandes récentes et significatives se situe à 30u. Conformément à la règle de maintien des volumes réguliers sans surstockage, la quantité de 30u est retenue pour couvrir la période à venir.

**Baseline Quantity:** 30
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/20/2024 | 16 | 22.50€ |
| 8/5/2024 | 20 | 22.50€ |
| 5/3/2024 | 20 | 22.50€ |
| 3/28/2024 | 10 | 22.50€ |
| 12/12/2023 | 5 | 22.50€ |

</details>

<details>
<summary><strong>[PF0097] FILOU MOUTARDE 5 KG</strong> - 2 TU1 (14.42€)</summary>

**Recommended Quantity:** 2 TU1
**Source:** LLM
**Unit Price:** 7.21€
**Subtotal:** 14.42€

**Confidence:** 🟢 High (6 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle moyen d'environ 84 jours entre les commandes récentes (juin à septembre). Au 3 novembre, 61 jours se sont écoulés depuis la dernière commande, soit environ 73% du cycle moyen. Selon la règle des 70%, le risque de rupture est identifié pour l'horizon des 30 prochains jours. En application du principe de précaution B2B et de la méthode de la médiane sur l'historique récent (2u et 3u), la quantité retenue est de 2 unités (choix de la valeur la plus basse en cas de doute pour éviter le surstockage).

**Baseline Quantity:** 2
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/11/2025 | 3 | 7.21€ |
| 1/23/2025 | 1 | 7.21€ |
| 8/20/2024 | 1 | 7.00€ |
| 5/3/2024 | 2 | 7.00€ |
| 12/12/2023 | 1 | 7.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-03 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3444

### Performance

- **Execution Time:** 2.8s

</details>

---

*Report auto-generated on 12/30/2025, 3:16:51 PM*