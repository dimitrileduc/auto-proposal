# Auto-Proposal Report - ITM ALIMENTAIRE BELGIUM

**Client:** ITM ALIMENTAIRE BELGIUM (ID: 3577)
**Analysis Date:** 12/30/2025, 3:04:12 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (6935.04€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 6935.04€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF2036] ITM BOULETTES TOMATE 800 GR | 128 TU12 | 32.76€ | 4193.28€ | 🟢 High |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 112 TU12 | 12.12€ | 1357.44€ | 🟢 High |
| [PF2997] ITM BO VIN YOGORETTE PET 450 | 112 TU12 | 12.36€ | 1384.32€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF2036] ITM BOULETTES TOMATE 800 GR</strong> - 128 TU12 (4193.28€)</summary>

**Recommended Quantity:** 128 TU12
**Source:** LLM
**Unit Price:** 32.76€
**Subtotal:** 4193.28€

**Confidence:** 🟢 High (37 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 octobre 2025, soit 21 jours avant la date actuelle. Le cycle moyen observé est d'environ 20 à 25 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons le délai habituel entre deux commandes. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une alternance entre 64u et 128u. La médiane des commandes récentes (64, 64, 64, 64, 64, 128, 128, 128) se situe à 64u, mais l'historique N-1 sur la même période (novembre) montre des volumes plus importants (128u et 192u). Par principe de précaution B2B et pour couvrir le cycle complet, la quantité de 128u est retenue.

**Baseline Quantity:** 128
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/19/2024 | 64 | 32.76€ |
| 2/13/2024 | 128 | 32.76€ |
| 1/16/2024 | 128 | 32.76€ |
| 11/29/2023 | 192 | 32.76€ |
| 11/7/2023 | 128 | 32.76€ |

</details>

<details>
<summary><strong>[PF2996] ITM BO VIN CIBOULET PET 450</strong> - 112 TU12 (1357.44€)</summary>

**Recommended Quantity:** 112 TU12
**Source:** LLM
**Unit Price:** 12.12€
**Subtotal:** 1357.44€

**Confidence:** 🟢 High (31 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande irrégulier mais fréquent, avec une dernière commande enregistrée le 14 octobre 2025. Au 4 novembre, 21 jours se sont écoulés, ce qui représente un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B, un besoin est détecté. La quantité retenue est de 112 unités, correspondant à la médiane des commandes récentes et à la valeur la plus fréquente observée historiquement, écartant le pic exceptionnel de 448 unités.

**Baseline Quantity:** 112
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/12/2024 | 112 | 13.68€ |
| 2/13/2024 | 112 | 13.68€ |
| 1/16/2024 | 112 | 13.68€ |
| 12/27/2023 | 112 | 13.68€ |
| 11/7/2023 | 112 | 13.68€ |

</details>

<details>
<summary><strong>[PF2997] ITM BO VIN YOGORETTE PET 450</strong> - 112 TU12 (1384.32€)</summary>

**Recommended Quantity:** 112 TU12
**Source:** LLM
**Unit Price:** 12.36€
**Subtotal:** 1384.32€

**Confidence:** 🟢 High (21 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence moyenne d'environ 20 à 30 jours entre chaque réapprovisionnement. La dernière commande remontant au 09/10/2025 (soit 26 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint, créant un risque imminent de rupture. En appliquant la règle de la médiane sur l'historique récent (112u, 224u, 112u, 224u, 112u, 112u, 112u, 112u), la valeur médiane est de 112u. Conformément au principe de précaution B2B et à la règle de privilégier la quantité la plus basse en cas de doute, une commande de 112 unités est préconisée.

**Baseline Quantity:** 112
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/4/2024 | 112 | 13.68€ |
| 5/16/2024 | 112 | 13.68€ |
| 4/23/2024 | 112 | 13.68€ |
| 3/12/2024 | 112 | 13.68€ |
| 1/16/2024 | 112 | 13.68€ |

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
- **Tokens:** 4116

### Performance

- **Execution Time:** 2.8s

</details>

---

*Report auto-generated on 12/30/2025, 3:04:12 PM*