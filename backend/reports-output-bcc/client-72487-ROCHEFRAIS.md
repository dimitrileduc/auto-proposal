# Auto-Proposal Report - ROCHEFRAIS

**Client:** ROCHEFRAIS (ID: 72487)
**Analysis Date:** 12/30/2025, 3:09:32 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (782.32€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 782.32€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0078] FILOU CHASSEUR 5 L | 80 TU1 | 8.96€ | 716.80€ | 🟢 High |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 1 TU12 | 25.92€ | 25.92€ | 🟡 Medium |
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 TU12 | 39.60€ | 39.60€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[PF0078] FILOU CHASSEUR 5 L</strong> - 80 TU1 (716.80€)</summary>

**Recommended Quantity:** 80 TU1
**Source:** LLM
**Unit Price:** 8.96€
**Subtotal:** 716.80€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence moyenne d'environ 28 jours entre chaque réapprovisionnement. La dernière commande datant du 24 septembre (soit 27 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours du seuil de réapprovisionnement. Concernant la quantité, bien qu'un pic à 160u ait été observé en août, la quantité récurrente et la médiane des commandes récentes est de 80u. En application du principe de précaution et de la règle de la médiane, une commande de 80u est préconisée.

**Baseline Quantity:** 80
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/31/2025 | 80 | 8.96€ |
| 7/9/2025 | 80 | 8.96€ |
| 6/13/2025 | 80 | 8.96€ |
| 6/4/2025 | 80 | 8.96€ |
| 5/12/2025 | 80 | 8.96€ |

</details>

<details>
<summary><strong>[PF1140] FILOU SAUCE CHASSEUR 850G</strong> - 1 TU12 (25.92€)</summary>

**Recommended Quantity:** 1 TU12
**Source:** LLM
**Unit Price:** 25.92€
**Subtotal:** 25.92€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 24 septembre, soit 27 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de risque de rupture. Bien que l'historique soit limité à une seule commande, le principe de précaution B2B impose de prévoir un réapprovisionnement pour couvrir le cycle mensuel probable. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique volumineux, on se base sur la dernière quantité observée (1u). Conformément aux règles de rotation faible et de maintien des quantités récentes, la quantité retenue est de 1 unité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 1 | 25.92€ |
| 5/12/2025 | 1 | 25.92€ |

</details>

<details>
<summary><strong>[PF3273] JF MITRAILLETTE SAUCE 925ML</strong> - 1 TU12 (39.60€)</summary>

**Recommended Quantity:** 1 TU12
**Source:** LLM
**Unit Price:** 39.60€
**Subtotal:** 39.60€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 24 septembre, soit 27 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (27 jours >= 70% du cycle estimé pour un produit à faible rotation). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément aux règles pour les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 9/24/2025 | 1 | 39.60€ |
| 5/12/2025 | 1 | 39.60€ |

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

- **Calls:** 5
- **Tokens:** 5050

### Performance

- **Execution Time:** 2.4s

</details>

---

*Report auto-generated on 12/30/2025, 3:09:32 PM*