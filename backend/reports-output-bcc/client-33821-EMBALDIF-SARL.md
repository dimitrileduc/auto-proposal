# Auto-Proposal Report - EMBALDIF SARL

**Client:** EMBALDIF SARL (ID: 33821)
**Analysis Date:** 12/30/2025, 3:08:12 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (987.24€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 987.24€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 11 TU6 | 45.12€ | 496.32€ | 🟢 High |
| [PF0539] JF VOL AU VENT 2,5 KG | 4 TU6 | 65.22€ | 260.88€ | 🟢 High |
| [PF0609] YVALLI SAUCE TOMATE 2,5 KG | 6 TU6 | 38.34€ | 230.04€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - 11 TU6 (496.32€)</summary>

**Recommended Quantity:** 11 TU6
**Source:** LLM
**Unit Price:** 45.12€
**Subtotal:** 496.32€

**Confidence:** 🟢 High (15 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse des commandes récentes montre un cycle moyen d'environ 25 à 30 jours (intervalles de 20, 31 et 28 jours). La dernière commande date du 07/10/2025, soit 28 jours avant la date actuelle (04/11/2025). Nous avons atteint 100% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des quantités de 10, 11, 20 et 12 unités. La valeur de 20u est un pic exceptionnel à écarter. La médiane des commandes récentes (10, 11, 12) est de 11. Ce volume est cohérent avec l'historique N-1 à la même période (12u en octobre 2024). Par mesure de précaution B2B et respect de la médiane, la quantité retenue est 11.

**Baseline Quantity:** 11
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/20/2024 | 18 | 42.00€ |
| 6/25/2024 | 16 | 43.80€ |
| 5/7/2024 | 16 | 43.80€ |
| 3/28/2024 | 20 | 42.00€ |
| 1/18/2024 | 14 | 42.00€ |

</details>

<details>
<summary><strong>[PF0539] JF VOL AU VENT 2,5 KG</strong> - 4 TU6 (260.88€)</summary>

**Recommended Quantity:** 4 TU6
**Source:** LLM
**Unit Price:** 65.22€
**Subtotal:** 260.88€

**Confidence:** 🟢 High (5 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 07/10/2025, soit 28 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle estimé atteint). L'historique montre une commande de 4 unités à la même période l'année précédente (mars/septembre) et une commande identique de 4 unités le mois dernier. En suivant la règle de la médiane des commandes récentes et la stabilité du volume constaté, une quantité de 4 unités est préconisée pour couvrir les besoins du prochain cycle.

**Baseline Quantity:** 4
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 10/7/2025 | 4 | 65.22€ |
| 1/8/2025 | 4 | 65.22€ |
| 11/27/2024 | 2 | 60.00€ |
| 9/20/2024 | 2 | 60.00€ |
| 3/28/2024 | 4 | 60.00€ |

</details>

<details>
<summary><strong>[PF0609] YVALLI SAUCE TOMATE 2,5 KG</strong> - 6 TU6 (230.04€)</summary>

**Recommended Quantity:** 6 TU6
**Source:** LLM
**Unit Price:** 38.34€
**Subtotal:** 230.04€

**Confidence:** 🟢 High (6 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle récent montre une commande environ tous les 22 jours (entre juillet et août). Depuis la dernière commande du 07/08/2025, 89 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que l'historique récent soit espacé, l'historique N-1 montre une activité en octobre/septembre, suggérant un besoin latent. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire. La quantité retenue est de 6 unités, correspondant à la médiane et à la valeur constante des commandes les plus récentes.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/16/2025 | 6 | 38.34€ |
| 11/27/2024 | 8 | 34.80€ |
| 10/28/2024 | 6 | 34.80€ |
| 9/20/2024 | 2 | 34.80€ |
| 1/18/2024 | 14 | 34.80€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-04 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3449

### Performance

- **Execution Time:** 2.8s

</details>

---

*Report auto-generated on 12/30/2025, 3:08:12 PM*