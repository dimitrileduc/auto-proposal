# Auto-Proposal Report - Fonk's Backwaren SA

**Client:** Fonk's Backwaren SA (ID: 12319)
**Analysis Date:** 12/30/2025, 3:07:12 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (1026.66€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1026.66€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 50 TU6 | 14.46€ | 723.00€ | 🟢 High |
| [MF0034] MF Tarti Pomme Raifort 250g  | 21 TU6 | 14.46€ | 303.66€ | 🟢 High |

### Product Details

<details>
<summary><strong>[MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - 50 TU6 (723.00€)</summary>

**Recommended Quantity:** 50 TU6
**Source:** LLM
**Unit Price:** 14.46€
**Subtotal:** 723.00€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 70 jours entre les réapprovisionnements récents. La dernière commande datant du 22 septembre 2025 (soit 50 jours avant la date actuelle), le produit entre dans la zone de risque de rupture au regard du seuil de 30 jours. Bien que l'historique N-1 montre des volumes plus faibles (21u), la tendance récente de 2025 s'est stabilisée à un niveau supérieur. En appliquant la règle de la médiane sur les commandes les plus récentes (50, 50, 25), la valeur de 50 unités est retenue pour couvrir le cycle de consommation actuel et éviter une rupture de stock imminente.

**Baseline Quantity:** 50
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/3/2025 | 21 | 14.46€ |
| 2/11/2025 | 21 | 14.46€ |
| 9/24/2024 | 21 | 14.46€ |
| 8/28/2024 | 21 | 14.46€ |
| 11/21/2023 | 20 | 14.46€ |

</details>

<details>
<summary><strong>[MF0034] MF Tarti Pomme Raifort 250g </strong> - 21 TU6 (303.66€)</summary>

**Recommended Quantity:** 21 TU6
**Source:** LLM
**Unit Price:** 14.46€
**Subtotal:** 303.66€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée remonte à juin 2025 (0u), mais l'historique N-1 montre une commande récurrente en novembre (2024-11-05). Étant donné que nous sommes le 11 novembre 2025 et que le seuil de réapprovisionnement est de 30 jours, il existe un risque de rupture ou un besoin non couvert pour la période automnale. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente est très stable avec des volumes de 20u et 21u. La médiane des commandes significatives est de 21u. On maintient cette quantité habituelle pour couvrir le besoin saisonnier identifié.

**Baseline Quantity:** 21
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/9/2024 | 21 | 14.46€ |
| 11/5/2024 | 21 | 14.46€ |
| 6/24/2024 | 21 | 14.46€ |
| 5/21/2024 | 21 | 14.46€ |
| 4/12/2024 | 20 | 14.46€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-11 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2285

### Performance

- **Execution Time:** 3.2s

</details>

---

*Report auto-generated on 12/30/2025, 3:07:12 PM*