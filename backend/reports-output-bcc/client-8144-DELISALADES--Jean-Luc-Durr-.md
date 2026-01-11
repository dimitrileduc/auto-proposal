# Auto-Proposal Report - DELISALADES, Jean-Luc Durré

**Client:** DELISALADES, Jean-Luc Durré (ID: 8144)
**Analysis Date:** 12/30/2025, 3:20:10 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (3168.00€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 3168.00€ excl. tax

---

## Core Products

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF3251] JEFKE CHIVE VINAIGRETTE 5L | 40 TU4 | 44.08€ | 1763.20€ | 🟢 High |
| [PF0078] FILOU CHASSEUR 5 L | 160 TU1 | 8.78€ | 1404.80€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF3251] JEFKE CHIVE VINAIGRETTE 5L</strong> - 40 TU4 (1763.20€)</summary>

**Recommended Quantity:** 40 TU4
**Source:** LLM
**Unit Price:** 44.08€
**Subtotal:** 1763.20€

**Confidence:** 🟢 High (15 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence régulière d'environ 15 à 25 jours. La dernière commande datant du 30 octobre (il y a 3 jours), le prochain besoin interviendra durant la période de couverture des 30 jours (Replenishment Threshold Days). Bien que la dernière commande ait été de 80u, il s'agit d'un pic exceptionnel par rapport à l'historique stable de 40u observé sur les 6 mois précédents. En appliquant la règle de la médiane et en ignorant les valeurs extrêmes pour éviter le surstockage, la quantité recommandée est de 40u.

**Baseline Quantity:** 40
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 4/8/2025 | 40 | 44.08€ |
| 2/27/2025 | 39 | 44.08€ |
| 1/22/2025 | 50 | 44.08€ |
| 1/2/2025 | 40 | 42.80€ |
| 11/6/2024 | 40 | 42.80€ |

</details>

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 160 TU1 (1404.80€)</summary>

**Recommended Quantity:** 160 TU1
**Source:** LLM
**Unit Price:** 8.78€
**Subtotal:** 1404.80€

**Confidence:** 🟢 High (23 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence régulière d'environ 20 jours entre les dernières livraisons (02/09, 23/09, 13/10). Au 02/11, 20 jours se sont écoulés depuis la dernière commande, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que l'historique N-1 montre des volumes plus faibles (80u), la tendance récente est stabilisée à 160u sur les trois dernières commandes. En suivant la règle de la médiane des commandes récentes et la stabilité du volume actuel, une quantité de 160u est préconisée pour maintenir le stock.

**Baseline Quantity:** 160
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 11/27/2024 | 80 | 8.70€ |
| 11/18/2024 | 80 | 8.70€ |
| 11/6/2024 | 80 | 8.70€ |
| 10/23/2024 | 80 | 8.70€ |
| 10/14/2024 | 80 | 8.70€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-11-02 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2356

### Performance

- **Execution Time:** 2.7s

</details>

---

*Report auto-generated on 12/30/2025, 3:20:10 PM*