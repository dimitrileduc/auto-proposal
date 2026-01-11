# Auto-Proposal Report - 3B TRADING & CONSULTING GmbH

**Client:** 3B TRADING & CONSULTING GmbH (ID: 3857)
**Email:** bbayrak@3bgastro.de
**Analysis Date:** 1/11/2026, 11:13:22 AM
**Replenishment Threshold:** 30 days

## Summary

- **Core Products:** 2 (2060.00€ excl. tax)
- **Optional Products:** 0 (0.00€ excl. tax)
- **Total:** 2060.00€ excl. tax
- **Odoo Quote:** S40412 (ID: 92291)

---

## PHASE 2.5 - PRICING + MOQ

**Initial Amount:** 2060.00€
**Required MOQ:** 300.00€
**Status:** OK

| Product | Qty | Price | Subtotal | Summary |
|---------|----:|------:|---------:|---------|
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 44 | 25.75€ | 1133.00€ | Rupture probable (70j+ sans commande), médiane 44u. |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 36 | 25.75€ | 927.00€ | Cycle dépassé (>70j), réapprovisionnement urgent. |

**Total: 2060.00€**

---

## PHASE 3 - ODOO QUOTE

**Quote:** S40412 (ID: 92291)
**Status:** draft
**Created:** 1/11/2026, 10:13:08 AM

### Core Products (2)

| Product | Qty | Price | Subtotal | Summary |
|---------|----:|------:|---------:|---------|
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 44 | 25.75€ | 1133.00€ | Rupture probable (70j+ sans commande), médiane 44u. |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 36 | 25.75€ | 927.00€ | Cycle dépassé (>70j), réapprovisionnement urgent. |

**Total HT:** 2060.00€
**Taxes:** 0.00€
**Total TTC:** 2060.00€

### Phase 2.5 vs Odoo Comparison

| | Phase 2.5 | Odoo | Difference |
|---------|----------:|-----:|-----------:|
| **Core** | 2060.00€ | 2060.00€ | +0.00€ |
| **Optional** | 0.00€ | 0.00€ | +0.00€ |
| **TOTAL** | 2060.00€ | 2060.00€ | +0.00€ (0.0%) |

---

## Core Products Details

**2 products** recommended with medium to high confidence (2+ orders history).

| Product | Qty | Unit Price | Subtotal | Confidence |
|---------|-----|------------|----------|------------|
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 44 TU1 | 25.75€ | 1133.00€ | 🟢 High |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 36 TU1 | 25.75€ | 927.00€ | 🟢 High |

<details>
<summary><strong>[PF0070] FILOU/LD SAUCE ANDALOUSE  10 L</strong> - 44 TU1 (1133.00€)</summary>

**Recommended Quantity:** 44 TU1
**Source:** LLM
**Unit Price:** 25.75€
**Subtotal:** 1133.00€

**Confidence:** 🟢 High (18 historical order(s))

### LLM Prediction

**Summary:** Rupture probable (70j+ sans commande), médiane 44u.

**Reasoning:**

ÉTAPE 1 (Détection) : Le cycle moyen constaté est d'environ 35 à 40 jours. La dernière commande remonte au 28 octobre 2025, soit plus de 70 jours avant la date actuelle (11 janvier 2026). Le stock est très probablement épuisé ou en rupture imminente, dépassant largement le seuil de 30 jours. ÉTAPE 2 (Quantité) : L'historique récent montre des commandes de 39u, 44u et 65u. La valeur 65u semble être un pic exceptionnel. La médiane des commandes récentes est de 44u. En suivant le principe de précaution et de stabilité, nous retenons la médiane de 44u pour couvrir le besoin sans surstocker.

**Baseline Quantity:** 44
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 6/18/2024 | 52 | 25.00€ |
| 5/13/2024 | 40 | 25.00€ |
| 5/6/2024 | 39 | 25.00€ |
| 4/2/2024 | 26 | 25.00€ |
| 1/31/2024 | 39 | 25.00€ |

</details>

<details>
<summary><strong>[PF0608] FILOU/LD SAUCE SAMOURAI  10 L</strong> - 36 TU1 (927.00€)</summary>

**Recommended Quantity:** 36 TU1
**Source:** LLM
**Unit Price:** 25.75€
**Subtotal:** 927.00€

**Confidence:** 🟢 High (17 historical order(s))

### LLM Prediction

**Summary:** Cycle dépassé (>70j), réapprovisionnement urgent.

**Reasoning:**

L'analyse du cycle de commande montre une fréquence moyenne d'environ 35 à 45 jours entre chaque réapprovisionnement. La dernière commande enregistrée date du 28 octobre 2025, soit il y a plus de 70 jours par rapport à la date actuelle (11 janvier 2026). Le risque de rupture est critique car nous avons largement dépassé le cycle habituel et le seuil de 30 jours. Pour la quantité, bien que l'historique N-1 montre des volumes plus faibles (22u), les commandes les plus récentes de 2025 indiquent une augmentation structurelle de la consommation (36u et 44u). En appliquant la règle de la médiane sur les commandes récentes et en privilégiant la prudence face au pic de 44u, la quantité de 36u est retenue pour couvrir les besoins sans surstockage.

**Baseline Quantity:** 36
**Model:** google/gemini-3-flash-preview (ax-openrouter)

### Order History (5 recent orders)

| Date | Quantity | Unit Price |
|------|----------|------------|
| 8/20/2024 | 13 | 25.00€ |
| 5/13/2024 | 12 | 25.00€ |
| 5/6/2024 | 13 | 25.00€ |
| 4/2/2024 | 26 | 25.00€ |
| 1/31/2024 | 13 | 25.00€ |

</details>

<details>
<summary><strong>🔧 Technical Details</strong></summary>

### Configuration

- **Reference Date:** 2026-01-11 00:00:00
- **Replenishment Threshold:** 30 days
- **MOQ Minimum:** 300€
- **Mode:** PRODUCTION

### Processing Phases

- **Stock Analysis:** 2 at-risk products detected
- **Proposal Final:** 2 products after pricing
- **Quote Generation:** Quote S40412 created

### LLM Usage

- **Calls:** 2
- **Tokens:** 2624

### Performance

- **Execution Time:** 21.1s

</details>

---

*Report auto-generated on 1/11/2026, 11:13:22 AM*