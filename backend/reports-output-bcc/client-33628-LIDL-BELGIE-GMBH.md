# Auto-Proposal Report - LIDL BELGIE GMBH

**Client:** LIDL BELGIE GMBH (ID: 33628)
**Analysis Date:** 12/30/2025, 3:15:52 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (27041.28€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 27041.28€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167) | 256 TU6 | 16.08€ | 4116.48€ | 🟢 High |
| [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK | 480 TU6 | 20.40€ | 9792.00€ | 🟢 High |
| [PF3328] DELUXE MIX SAUCES 250ML WECK | 480 TU12 | 27.36€ | 13132.80€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF3279] KANIA BOULETTES TOMATE 800 GR (7404167)</strong> - 256 TU6 (4116.48€)</summary>

**Recommended Quantity:** 256 TU6
**Source:** LLM
**Unit Price:** 16.08€
**Subtotal:** 4116.48€

**Confidence:** 🟢 High (50 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 13 octobre, soit 22 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours et un cycle historique irrégulier (allant de 4 à 38 jours), il existe un risque de rupture imminent. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 256 unités, ce qui correspond à la médiane des commandes récentes et à la quantité la plus fréquente (mode), en excluant le pic exceptionnel de 1024 unités d'août.

**Baseline Quantity:** 256
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 12/12/2023 | 352 | 16.61€ |
| 12/5/2023 | 128 | 16.61€ |
| 12/1/2023 | 640 | 16.61€ |
| 11/22/2023 | 384 | 16.61€ |
| 11/17/2023 | 640 | 16.61€ |

</details>

<details>
<summary><strong>[PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK</strong> - 480 TU6 (9792.00€)</summary>

**Recommended Quantity:** 480 TU6
**Source:** LLM
**Unit Price:** 20.40€
**Subtotal:** 9792.00€

**Confidence:** 🟢 High (23 historical order(s))

### LLM Prediction

**Reasoning:**

Étape 1 : Détection du besoin. La dernière commande date du 07/10/2025, soit 28 jours avant la date actuelle (04/11/2025). Bien que le cycle soit irrégulier avec un pic d'activité massif en août (saisonnalité confirmée par l'historique N-1), le délai de 28 jours combiné au seuil de réapprovisionnement de 30 jours crée un risque de rupture imminent. En application du principe de précaution B2B, une commande est nécessaire. Étape 2 : Estimation de la quantité. L'historique récent montre des volumes extrêmes en août (jusqu'à 1040u) qui semblent liés à un événement ponctuel ou saisonnier, suivis d'une chute brutale à 96u en octobre. La médiane des commandes récentes (excluant les doublons de date pour la rotation) se situe autour de 480u-560u. En cas de doute et pour éviter le surstockage après un pic saisonnier, on retient la valeur médiane basse de 480u.

**Baseline Quantity:** 480
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/21/2024 | 640 | 20.40€ |
| 8/20/2024 | 800 | 20.40€ |
| 8/14/2024 | 320 | 20.40€ |
| 8/14/2024 | 240 | 20.40€ |
| 8/14/2024 | 480 | 20.40€ |

</details>

<details>
<summary><strong>[PF3328] DELUXE MIX SAUCES 250ML WECK</strong> - 480 TU12 (13132.80€)</summary>

**Recommended Quantity:** 480 TU12
**Source:** LLM
**Unit Price:** 27.36€
**Subtotal:** 13132.80€

**Confidence:** 🟢 High (22 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 07/10/2025, soit 28 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. Le cycle historique montre une forte activité en août suivie d'une reprise en octobre/novembre (confirmée par la commande du 28/10 l'année précédente). En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 480 unités, ce qui correspond à la médiane des commandes récentes (excluant les pics à 864u et la commande isolée de 288u), assurant un stock stable sans surstockage.

**Baseline Quantity:** 480
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/22/2024 | 672 | 27.36€ |
| 8/21/2024 | 288 | 27.36€ |
| 8/20/2024 | 480 | 27.36€ |
| 8/14/2024 | 288 | 27.36€ |
| 8/14/2024 | 288 | 27.36€ |

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
- **Tokens:** 4094

### Performance

- **Execution Time:** 2.9s

</details>

---

*Report auto-generated on 12/30/2025, 3:15:52 PM*