# Auto-Proposal Report - LEGEND FOOD

**Client:** LEGEND FOOD (ID: 3912)
**Analysis Date:** 12/30/2025, 3:10:43 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (36972.00€ excl. tax)
- **Optional Products:** 2 (100001.75€ excl. tax)
- **Total:** 136973.75€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PI2911] PI SAUCE BURGER BA PO | 12600 kg | 1.64€ | 20664.00€ | 🟢 High |
| [PI2910] PI SAUCE ALGERIENNE BA PO | 8100 kg | 1.76€ | 14256.00€ | 🟢 High |
| [PI0095] PI SAUCE CHEESY EASY 70% PO  | 900 kg | 2.28€ | 2052.00€ | 🟡 Medium |

### Product Details

<details>
<summary><strong>[PI2911] PI SAUCE BURGER BA PO</strong> - 12600 kg (20664.00€)</summary>

**Recommended Quantity:** 12600 kg
**Source:** LLM
**Unit Price:** 1.64€
**Subtotal:** 20664.00€

**Confidence:** 🟢 High (17 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique récent montre un cycle de commande régulier d'environ 60 jours (mai à juillet, juillet à septembre). La dernière commande datant du 18 septembre 2025 (il y a 26 jours), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de 70% du cycle atteint). De plus, l'historique N-1 confirme une commande systématique en octobre (07/10/2024). Conformément à la règle de la médiane sur les commandes récentes (12600, 12600, 13487), la quantité de 12600 unités est retenue pour maintenir la stabilité de l'approvisionnement.

**Baseline Quantity:** 12600
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/28/2024 | 12360 | 1.58€ |
| 2/16/2024 | 12600 | 1.54€ |
| 1/24/2024 | 12413 | 1.58€ |
| 11/10/2023 | 10668 | 1.58€ |
| 11/10/2023 | 12000 | 1.58€ |

</details>

<details>
<summary><strong>[PI2910] PI SAUCE ALGERIENNE BA PO</strong> - 8100 kg (14256.00€)</summary>

**Recommended Quantity:** 8100 kg
**Source:** LLM
**Unit Price:** 1.76€
**Subtotal:** 14256.00€

**Confidence:** 🟢 High (21 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen récent est d'environ 60 jours (58 jours entre mai et juillet, 58 jours entre juillet et septembre). La dernière commande date du 18 septembre 2025, soit il y a 26 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 56 jours d'écart d'ici la fin de la période de vigilance, ce qui correspond à plus de 90% du cycle moyen. Le risque de rupture est imminent. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes oscillent entre 8082u et 9000u. La médiane des trois dernières commandes est de 8100u. Conformément à la règle de prudence privilégiant la valeur la plus basse en cas de doute sur le volume exact, la quantité de 8100u est retenue.

**Baseline Quantity:** 8100
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 1/25/2024 | 3600 | 1.70€ |
| 1/24/2024 | 9000 | 1.70€ |
| 11/14/2023 | 2000 | 1.70€ |
| 11/10/2023 | 10713 | 1.70€ |
| 11/10/2023 | 12000 | 1.70€ |

</details>

<details>
<summary><strong>[PI0095] PI SAUCE CHEESY EASY 70% PO </strong> - 900 kg (2052.00€)</summary>

**Recommended Quantity:** 900 kg
**Source:** LLM
**Unit Price:** 2.28€
**Subtotal:** 2052.00€

**Confidence:** 🟡 Medium (2 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 22/07/2025, soit 84 jours avant la date actuelle. Bien que l'historique récent soit limité à une seule commande, le délai écoulé est significatif pour un produit de type sauce. En application du principe de précaution B2B (cycle difficile à déterminer = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de multiples commandes récentes pour calculer une médiane, la règle de maintien de la quantité historique récente s'applique. La dernière commande était de 900u. Bien que l'historique N-1 affiche 1800u, la règle privilégie la quantité la plus basse en cas de doute pour éviter le surstockage. La quantité retenue est donc de 900u.

**Baseline Quantity:** 900
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (2 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/22/2025 | 900 | 2.28€ |
| 6/4/2024 | 1800 | 2.20€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**2 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [PI0201] PI ANDALOUSE NOUV RECETTE PO | 1 kg | 99999.99€ | 99999.99€ |
| [PI2903] PI SAUCE ANDALOUSE BIO | 1 kg | 1.76€ | 1.76€ |

### Product Details

<details>
<summary><strong>[PI0201] PI ANDALOUSE NOUV RECETTE PO</strong> - 1 kg (99999.99€)</summary>

**Recommended Quantity:** 1 kg
**Source:** LLM
**Unit Price:** 99999.99€
**Subtotal:** 99999.99€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

Le produit présente un historique très limité avec une seule entrée enregistrée il y a 147 jours. Bien que la rotation soit extrêmement faible ou irrégulière, les règles de précaution B2B stipulent qu'en cas de cycle difficile à déterminer ou de doute sur la rotation, il faut prévoir une commande pour éviter une rupture potentielle. En l'absence de données de volume significatives, la quantité minimale de 1 unité est préconisée pour assurer une disponibilité de base sans risquer un surstock important.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/20/2025 | 0 | 99999.99€ |

</details>

<details>
<summary><strong>[PI2903] PI SAUCE ANDALOUSE BIO</strong> - 1 kg (1.76€)</summary>

**Recommended Quantity:** 1 kg
**Source:** LLM
**Unit Price:** 1.76€
**Subtotal:** 1.76€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée remonte au 20 mai 2025 (soit environ 147 jours). Bien que la quantité historique soit nulle, l'absence de données récentes et le principe de précaution B2B imposent de prévoir un besoin pour éviter une rupture potentielle sur un produit référencé, surtout après une si longue période d'inactivité. ÉTAPE 2 : Estimation quantité. En l'absence d'historique de volume positif, la règle de rotation très faible s'applique. On initialise une commande minimale de 1 unité pour tester la rotation sans risquer un surstock inutile.

**Baseline Quantity:** 1
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 5/20/2025 | 0 | 1.76€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-10-14 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 5 at-risk products detected
- **Proposal Final:** 5 products after pricing

### LLM Usage

- **Calls:** 5
- **Tokens:** 5769

### Performance

- **Execution Time:** 3.1s

</details>

---

*Report auto-generated on 12/30/2025, 3:10:43 PM*