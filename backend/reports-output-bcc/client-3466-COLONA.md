# Auto-Proposal Report - COLONA

**Client:** COLONA (ID: 3466)
**Analysis Date:** 12/30/2025, 3:12:55 PM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 1 (982.80€ excl. tax)
- **Optional Products:** 1 (798.00€ excl. tax)
- **Total:** 1780.80€ excl. tax

---

## Core Products

**1 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF3298] COLONA MOUTARDE SUCREE 5 KG | 216 TU1 | 4.55€ | 982.80€ | 🟢 High |

### Product Details

<details>
<summary><strong>[PF3298] COLONA MOUTARDE SUCREE 5 KG</strong> - 216 TU1 (982.80€)</summary>

**Recommended Quantity:** 216 TU1
**Source:** LLM
**Unit Price:** 4.55€
**Subtotal:** 982.80€

**Confidence:** 🟢 High (7 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : Détection du besoin. La dernière commande date du 22 juillet 2025, soit il y a 42 jours. Bien que l'historique récent soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'un cycle régulier clairement défini, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente montre des volumes très importants (1080u), mais la commande la plus récente (216u) indique une baisse significative de la consommation ou un changement de format de commande. Conformément aux règles de privilégier l'historique récent et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 216 unités.

**Baseline Quantity:** 216
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 2/3/2025 | 216 | 4.55€ |
| 4/11/2024 | 1080 | 4.55€ |
| 4/10/2024 | 1080 | 4.55€ |
| 2/13/2024 | 1080 | 4.55€ |
| 1/23/2024 | 1080 | 4.55€ |

</details>

## Optional Products

> **⚠️ Warning:** These products have low confidence (1 order history only).
> They will be proposed as **options** in the Odoo quote, not included in the core total.

**1 products** to propose as options:

| Product | Qty | Unit Price | Subtotal |
|---------|-----|------------|----------|
| [PI3285] PI MOUTARDE SUCREE | 1050 kg | 0.76€ | 798.00€ |

### Product Details

<details>
<summary><strong>[PI3285] PI MOUTARDE SUCREE</strong> - 1050 kg (798.00€)</summary>

**Recommended Quantity:** 1050 kg
**Source:** LLM
**Unit Price:** 0.76€
**Subtotal:** 798.00€

**Confidence:** 🔴 Low (1 historical order(s))

### LLM Prediction

**Reasoning:**

ÉTAPE 1 : La dernière commande remonte au 07/07/2025, soit 57 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, l'absence de commande depuis près de deux mois sur un produit de ce type présente un risque de rupture imminent ou un besoin de restockage immédiat. En l'absence d'historique de cycle complet, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent ne présente qu'une seule commande de 1050 unités. En suivant la règle de maintien de la quantité pour une rotation régulière ou unique sans tendance inverse, la quantité retenue est la médiane de l'historique disponible, soit 1050 unités.

**Baseline Quantity:** 1050
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (1 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 7/7/2025 | 1050 | 0.76€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2025-09-02 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** TEST (skip Odoo)

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing

### LLM Usage

- **Calls:** 2
- **Tokens:** 2221

### Performance

- **Execution Time:** 3.1s

</details>

---

*Report auto-generated on 12/30/2025, 3:12:55 PM*