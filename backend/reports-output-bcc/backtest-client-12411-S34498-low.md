# Rapport Backtest - Client JSC GOURMET LIFE

## Contexte

- **Client** : JSC GOURMET LIFE (ID: 12411)
- **Commande réelle** : S34498
- **Date commande** : 2025-01-23 13:10:21
- **Date cutoff système** : 2025-01-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,252 input + 1,126 output = 7,378 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 3 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 6.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 16.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 64 | 60 | 4.0 | 6.7% | partial | Non | Non | LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 30 | 25 | 5.0 | 20.0% | partial | Non | Non | LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 40 | 30 | 10.0 | 33.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PF2938] LD FR TARTINAD BIO AUBERGI 200</strong> - LLM: 64u vs Médiane: 64u (Réel: 60u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 64u
- **Baseline calculee**: 64u
- **Mediane historique**: 64u
- **Reel commande**: 60u
- **Erreur LLM**: 4u (6.7%)
- **Erreur Mediane**: 4u (6.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 64u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 octobre 2024, soit plus de 100 jours. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique face à une absence de commande sur une période aussi longue. Le risque de rupture est considéré comme probable ou incertain d'ici les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la quantité de la dernière commande connue (64 unités) est retenue comme référence pour maintenir le stock, conformément à la règle de maintien des volumes constatés sur les rotations régulières ou uniques.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 164 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 30u vs Médiane: 30u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 30u
- **Baseline calculee**: 30u
- **Mediane historique**: 30u
- **Reel commande**: 25u
- **Erreur LLM**: 5u (20.0%)
- **Erreur Mediane**: 5u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 30u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 octobre 2024, soit plus de 100 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard en B2B. En application du principe de précaution et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de données comparatives N-1 ou de commandes multiples, la quantité de la dernière commande (30u) est retenue comme référence de volume pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 165 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>3. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 40u vs Médiane: 40u (Réel: 30u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 40u
- **Baseline calculee**: 40u
- **Mediane historique**: 40u
- **Reel commande**: 30u
- **Erreur LLM**: 10u (33.3%)
- **Erreur Mediane**: 10u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 40u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14/10/2024, soit plus de 100 jours. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique car le délai écoulé suggère un besoin imminent de réapprovisionnement pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la quantité de la dernière commande (40u) est retenue comme référence pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 136 tokens
- **Total**: 1,011 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF2938] LD FR TARTINAD BIO AUBERGI 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-10-14 12:31:38: 64u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 64u
**Quantite Reelle**: 60u

</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-10-14 12:31:38: 30u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 30u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>3. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-10-14 12:31:38: 40u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 40u
**Quantite Reelle**: 30u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:28:06.025Z*
