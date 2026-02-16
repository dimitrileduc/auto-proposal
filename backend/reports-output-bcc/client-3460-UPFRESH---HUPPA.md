# Auto-Proposal Report - UPFRESH - HUPPA

**Client:** UPFRESH - HUPPA (ID: 3460)
**Analysis Date:** 12/30/2025, 3:04:47 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (1524.48€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 1524.48€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0078] FILOU CHASSEUR 5 L | 120 TU1 | 8.96€ | 1075.20€ | 🟢 High |
| [PF0088] FILOU VOL AU VENT 800 GR | 6 TU12 | 37.80€ | 226.80€ | 🟢 High |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 3 TU12 | 74.16€ | 222.48€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 120 TU1 (1075.20€)</summary>

**Recommended Quantity:** 120 TU1
**Source:** LLM
**Unit Price:** 8.96€
**Subtotal:** 1075.20€

**Confidence:** 🟢 High (49 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence de réapprovisionnement régulière (environ toutes les 2 à 3 semaines). La dernière commande datant du 03/10/2025, soit il y a 34 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un risque de rupture imminent. Pour la quantité, l'historique récent présente des volumes oscillant entre 80u et 160u. Conformément à la règle de la médiane sur les commandes récentes (80, 80, 120, 160, 160, 160, 160), la valeur centrale se situe à 160u, mais compte tenu de l'historique N-1 à la même période (80u, 120u, 160u) et de la consigne de prudence privilégiant la valeur la plus basse en cas de doute pour éviter le surstock, une quantité de 120u est préconisée.

**Baseline Quantity:** 120
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 1/19/2024 | 80 | 8.70€ |
| 12/11/2023 | 160 | 8.70€ |
| 12/8/2023 | 80 | 8.70€ |
| 11/17/2023 | 80 | 8.70€ |
| 11/10/2023 | 80 | 8.70€ |

</details>

<details>
<summary><strong>[PF0088] FILOU VOL AU VENT 800 GR</strong> - 6 TU12 (226.80€)</summary>

**Recommended Quantity:** 6 TU12
**Source:** LLM
**Unit Price:** 37.80€
**Subtotal:** 226.80€

**Confidence:** 🟢 High (17 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une irrégularité marquée avec une dernière commande remontant au 05/09/2025, soit plus de 60 jours avant la date actuelle. Bien que la rotation soit faible récemment, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant un doute sur le niveau de stock actuel. En application du principe de précaution B2B (Étape 1), une commande est nécessaire pour éviter une rupture. Pour la quantité (Étape 2), la médiane des commandes récentes (4, 6, 12) est de 6 unités. Ce volume est cohérent avec l'historique N-1 à la même période (15u en novembre, 10u en décembre) tout en respectant la tendance à la baisse observée sur les derniers mois.

**Baseline Quantity:** 6
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 2/2/2024 | 10 | 36.00€ |
| 1/19/2024 | 24 | 36.00€ |
| 12/21/2023 | 20 | 36.00€ |
| 12/8/2023 | 10 | 36.00€ |
| 11/17/2023 | 15 | 36.00€ |

</details>

<details>
<summary><strong>[PF3270] JF TRUFFLE MAYONNAISE 925ML</strong> - 3 TU12 (222.48€)</summary>

**Recommended Quantity:** 3 TU12
**Source:** LLM
**Unit Price:** 74.16€
**Subtotal:** 222.48€

**Confidence:** 🟢 High (9 historical order(s))

### LLM Prediction

**Reasoning:**

La dernière commande remonte au 27 juin 2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (février/mars/octobre). Selon le principe de précaution B2B, un besoin est détecté car le délai depuis la dernière commande est très supérieur au cycle moyen. Pour la quantité, bien que la dernière commande isolée fût de 12u, l'historique stable de l'année précédente montre une médiane de 3u (valeurs : 1, 3, 3, 5). Conformément aux règles de privilégier la médiane et d'ignorer les pics exceptionnels récents pour éviter le surstockage, une quantité de 3u est préconisée.

**Baseline Quantity:** 3
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 3/28/2025 | 6 | 74.16€ |
| 10/4/2024 | 3 | 72.00€ |
| 3/15/2024 | 3 | 72.00€ |
| 3/1/2024 | 1 | 72.00€ |
| 2/27/2024 | 5 | 72.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-06 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3874

### Performance

- **Execution Time:** 3.1s

</details>

---

*Report auto-generated on 12/30/2025, 3:04:47 PM*