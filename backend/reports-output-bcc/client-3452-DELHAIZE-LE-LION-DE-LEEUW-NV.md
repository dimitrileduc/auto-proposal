# Auto-Proposal Report - DELHAIZE LE LION/DE LEEUW NV

**Client:** DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
**Analysis Date:** 12/30/2025, 3:15:52 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 3 (4133.04€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 4133.04€ excl. tax

---

## Core Products

**3 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 98 TU12 | 14.34€ | 1405.32€ | 🟢 High |
| [PF3300] DLL MAYONNAISE OEUFS 300ML | 130 TU12 | 9.72€ | 1263.60€ | 🟢 High |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 98 TU12 | 14.94€ | 1464.12€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - 98 TU12 (1405.32€)</summary>

**Recommended Quantity:** 98 TU12
**Source:** LLM
**Unit Price:** 14.34€
**Subtotal:** 1405.32€

**Confidence:** 🟢 High (38 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse de l'historique récent montre un cycle de commande hebdomadaire très régulier (tous les lundis). La dernière commande date du 2025-11-03, soit il y a 3 jours. Avec un seuil de réapprovisionnement de 30 jours, la prochaine commande est attendue sous 4 jours (le lundi 2025-11-10), ce qui justifie une prévision immédiate par précaution. Concernant la quantité, le volume est stabilisé à 98 unités sur les 6 dernières commandes. La médiane des commandes récentes est de 98 unités, ce qui constitue la cible de réapprovisionnement optimale.

**Baseline Quantity:** 98
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 11/8/2024 | 294 | 14.34€ |
| 9/24/2024 | 196 | 14.34€ |
| 9/23/2024 | 196 | 14.34€ |
| 8/6/2024 | 98 | 14.34€ |
| 7/11/2024 | 392 | 14.34€ |

</details>

<details>
<summary><strong>[PF3300] DLL MAYONNAISE OEUFS 300ML</strong> - 130 TU12 (1263.60€)</summary>

**Recommended Quantity:** 130 TU12
**Source:** LLM
**Unit Price:** 9.72€
**Subtotal:** 1263.60€

**Confidence:** 🟢 High (40 historical order(s))

### LLM Prediction

**Reasoning:**

L'analyse du cycle de commande montre une fréquence régulière (souvent hebdomadaire ou bimensuelle le lundi). La dernière commande date du 03/11/2025, soit il y a seulement 3 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours, une nouvelle commande est nécessaire pour couvrir les besoins de fin novembre/début décembre. La commande exceptionnelle de 780u le 03/11 est traitée comme un pic ponctuel (événement ou stock de sécurité massif). En suivant la règle de la médiane des commandes récentes (130, 130, 130, 130, 130, 260, 390, 780), la valeur centrale est 130u. On privilégie cette quantité stable pour éviter le surstockage après le pic récent.

**Baseline Quantity:** 130
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 10/1/2024 | 130 | 9.72€ |
| 9/9/2024 | 130 | 9.72€ |
| 9/5/2024 | 130 | 9.72€ |
| 8/6/2024 | 130 | 9.72€ |
| 7/11/2024 | 390 | 9.72€ |

</details>

<details>
<summary><strong>[PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML</strong> - 98 TU12 (1464.12€)</summary>

**Recommended Quantity:** 98 TU12
**Source:** LLM
**Unit Price:** 14.94€
**Subtotal:** 1464.12€

**Confidence:** 🟢 High (43 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 03/11/2025. Bien que très récente (3 jours), l'historique montre une accélération des besoins en fin d'année par rapport à l'année précédente (94u en novembre 2025 contre aucune commande en novembre 2024). Le cycle est irrégulier avec des pics importants (686u, 490u) suivis de réajustements. En application du principe de précaution B2B (doute sur le cycle récent), un besoin est identifié pour couvrir l'horizon de 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente des valeurs très disparates (de 94u à 686u). La médiane des commandes récentes (94, 98, 98, 196, 392, 490, 490, 686) se situe autour de 294u, mais les deux dernières commandes (196u et 94u) indiquent une tendance à la baisse immédiate. Conformément à la règle de choisir la valeur la plus basse en cas de doute et de respecter la tendance baissière, la quantité retenue est de 98u (proche du dernier volume de 94u et standard historique).

**Baseline Quantity:** 98
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/26/2024 | 98 | 14.94€ |
| 7/8/2024 | 294 | 14.94€ |
| 6/26/2024 | 294 | 14.94€ |
| 5/30/2024 | 392 | 14.94€ |
| 4/18/2024 | 294 | 14.94€ |

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

- **Calls:** 4
- **Tokens:** 5265

### Performance

- **Execution Time:** 4.2s

</details>

---

*Report auto-generated on 12/30/2025, 3:15:52 PM*