# Auto-Proposal Report - BOUCHERIE SCHNEIDER

**Client:** BOUCHERIE SCHNEIDER (ID: 3724)
**Analysis Date:** 12/30/2025, 3:18:11 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (526.43€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 526.43€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 20 TU1 | 23.18€ | 463.60€ | 🟢 High |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 1 TU1 | 19.57€ | 19.57€ | 🟢 High |
| [PF0097] FILOU MOUTARDE 5 KG | 6 TU1 | 7.21€ | 43.26€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - 20 TU1 (463.60€)</summary>

**Recommended Quantity:** 20 TU1
**Source:** LLM
**Unit Price:** 23.18€
**Subtotal:** 463.60€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande datant de 90 jours (11 août). Bien que la rotation soit lente, le délai écoulé dépasse largement les intervalles habituels observés l'année précédente (environ 45 à 60 jours entre août et septembre 2024). En application du principe de précaution B2B, un besoin est détecté pour éviter une rupture prolongée. La quantité est fixée à 20 unités, correspondant à la médiane des commandes historiques (15, 20, 20, 20, 26), en écartant le pic exceptionnel de 26 unités pour privilégier la stabilité du stock.

**Baseline Quantity:** 20
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/6/2024 | 20 | 22.50€ |
| 8/22/2024 | 20 | 22.50€ |
| 6/18/2024 | 15 | 22.50€ |
| 4/9/2024 | 15 | 22.50€ |
| 2/9/2024 | 20 | 22.50€ |

</details>

<details>
<summary><strong>[PF0085] FILOU CURRY KETCHUP  10 KG</strong> - 1 TU1 (19.57€)</summary>

**Recommended Quantity:** 1 TU1
**Source:** LLM
**Unit Price:** 19.57€
**Subtotal:** 19.57€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 août 2025, soit environ 90 jours. L'historique N-1 montre des commandes espacées de 2 à 3 mois (avril, juin, août). Nous sommes actuellement le 9 novembre, ce qui correspond à l'intervalle habituel de rotation (environ 60-90 jours). Le risque de rupture est imminent ou le cycle de réapprovisionnement est atteint. ÉTAPE 2 : Estimation de la quantité. L'historique est extrêmement stable avec des commandes systématiques de 1 unité. La médiane et la constante historique étant de 1, la quantité recommandée est de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 2/4/2025 | 1 | 19.57€ |
| 11/20/2024 | 1 | 19.00€ |
| 8/22/2024 | 1 | 19.00€ |
| 6/18/2024 | 1 | 19.00€ |
| 4/9/2024 | 1 | 19.00€ |

</details>

<details>
<summary><strong>[PF0097] FILOU MOUTARDE 5 KG</strong> - 6 TU1 (43.26€)</summary>

**Recommended Quantity:** 6 TU1
**Source:** LLM
**Unit Price:** 7.21€
**Subtotal:** 43.26€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 août 2025, soit 90 jours avant la date actuelle (9 novembre). L'historique montre des cycles irréguliers (février, avril, août). Selon le principe de précaution B2B, un cycle irrégulier ou une absence de commande depuis plus de 70 jours justifie une commande pour éviter une rupture de stock, d'autant plus que le seuil de réapprovisionnement est de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent affiche une commande de 6u. L'historique N-1 montre des volumes de 3u, 6u et 10u. La médiane de l'historique global est de 6u. En respectant la règle de maintien de la quantité pour les rotations régulières et la médiane, la quantité retenue est de 6u.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 2/4/2025 | 7 | 7.21€ |
| 11/20/2024 | 4 | 7.00€ |
| 8/22/2024 | 3 | 7.00€ |
| 4/9/2024 | 10 | 7.00€ |
| 2/9/2024 | 6 | 7.00€ |

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
- **Tokens:** 3344

### Performance

- **Execution Time:** 3.6s

</details>

---

*Report auto-generated on 12/30/2025, 3:18:11 PM*