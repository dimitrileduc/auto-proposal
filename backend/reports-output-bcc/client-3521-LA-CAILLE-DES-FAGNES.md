# Auto-Proposal Report - LA CAILLE DES FAGNES

**Client:** LA CAILLE DES FAGNES (ID: 3521)
**Analysis Date:** 12/30/2025, 3:06:04 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (889.61€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 889.61€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0075] FILOU CHASSEUR  10 L | 44 TU1 | 17.00€ | 748.00€ | 🟢 High |
| [PF0078] FILOU CHASSEUR 5 L | 15 TU1 | 8.96€ | 134.40€ | 🟢 High |
| [PF0097] FILOU MOUTARDE 5 KG | 1 TU1 | 7.21€ | 7.21€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[PF0075] FILOU CHASSEUR  10 L</strong> - 44 TU1 (748.00€)</summary>

**Recommended Quantity:** 44 TU1
**Source:** LLM
**Unit Price:** 17.00€
**Subtotal:** 748.00€

**Confidence:** 🟢 High (30 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande récent montre un intervalle moyen d'environ 20 à 30 jours (19 jours entre les deux dernières commandes, 30 jours précédemment). La dernière commande datant du 08/10/2025 (soit 13 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, bien que l'historique N-1 affiche une médiane de 52u, les commandes les plus récentes de 2025 montrent une stabilisation à 44u. Conformément à la règle de privilégier la médiane récente et de respecter les tendances à la baisse, la quantité retenue est de 44u.

**Baseline Quantity:** 44
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 2/27/2024 | 52 | 16.50€ |
| 1/24/2024 | 52 | 16.50€ |
| 12/7/2023 | 52 | 16.50€ |
| 11/27/2023 | 52 | 16.50€ |
| 11/13/2023 | 52 | 16.50€ |

</details>

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 15 TU1 (134.40€)</summary>

**Recommended Quantity:** 15 TU1
**Source:** LLM
**Unit Price:** 8.96€
**Subtotal:** 134.40€

**Confidence:** 🟢 High (15 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre un intervalle moyen d'environ 60 jours entre les réapprovisionnements. La dernière commande datant du 20 août 2025 (soit il y a 62 jours), le stock est probablement épuisé ou en phase critique de rupture, dépassant largement le seuil de réapprovisionnement de 30 jours. En appliquant le principe de précaution B2B et la règle de la médiane sur l'historique récent et N-1 (15u en octobre 2024, 15u et 20u en 2025), une quantité de 15 unités est préconisée pour couvrir les besoins immédiats sans surstocker.

**Baseline Quantity:** 15
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/6/2024 | 10 | 8.70€ |
| 5/22/2024 | 20 | 8.70€ |
| 5/22/2024 | 30 | 8.70€ |
| 2/27/2024 | 10 | 8.70€ |
| 1/24/2024 | 10 | 8.70€ |

</details>

<details>
<summary><strong>[PF0097] FILOU MOUTARDE 5 KG</strong> - 1 TU1 (7.21€)</summary>

**Recommended Quantity:** 1 TU1
**Source:** LLM
**Unit Price:** 7.21€
**Subtotal:** 7.21€

**Confidence:** 🟡 Medium (4 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 23 juin 2025, soit environ 120 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés précédemment (environ 60-90 jours entre les commandes N-1). En application du principe de précaution B2B et face à un cycle incertain, le risque de rupture est considéré comme avéré pour les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une commande unique de 1u. Les données N-1 oscillent entre 2u et 3u, mais la règle impose de privilégier la médiane récente et, en cas de doute, la valeur la plus basse pour éviter le surstockage. La quantité retenue est donc de 1u.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (4 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/23/2025 | 1 | 7.21€ |
| 2/3/2025 | 2 | 7.21€ |
| 8/6/2024 | 2 | 7.00€ |
| 2/27/2024 | 3 | 7.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-21 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 3 at-risk products detected
- **Proposal Final:** 3 products after pricing

### LLM Usage

- **Calls:** 3
- **Tokens:** 3593

### Performance

- **Execution Time:** 2.9s

</details>

---

*Report auto-generated on 12/30/2025, 3:06:04 PM*