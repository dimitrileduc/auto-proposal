# Rapport Backtest - Client LECONTE ETS

## Contexte

- **Client** : LECONTE ETS (ID: 3903)
- **Commande réelle** : S39926
- **Date commande** : 2025-10-27 08:10:05
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,889 input + 367 output = 2,256 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 2 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 7.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 29.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 10 | 24 | 14.0 | 58.3% | partial | Non | Non | LLM |
| [PF0077] FILOU PROVENCALE 5 L | 30 | 30 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> - LLM: 10u vs Médiane: 17u (Réel: 24u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 17u
- **Reel commande**: 24u
- **Erreur LLM**: 14u (58.3%)
- **Erreur Mediane**: 7u (29.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 04/09/2025, soit 52 jours. Bien que l'historique soit limité, l'intervalle entre les deux premières commandes était de 27 jours. Nous avons largement dépassé ce cycle, et avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé ou le cycle est irrégulier. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 (ESTIMATION QUANTITÉ) : Les commandes précédentes étaient de 10u et 24u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation incertaine, la quantité retenue est de 10u.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 201 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 30u vs Médiane: 30u (Réel: 30u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 30u
- **Baseline calculee**: 30u
- **Mediane historique**: 30u
- **Reel commande**: 30u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 30u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 04/09/2025, soit 52 jours. L'historique montre des cycles de commande variant entre 15 et 85 jours, avec une récurrence marquée en octobre/novembre l'année précédente (21/10/2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est réel car nous entrons dans la fenêtre habituelle de commande. En suivant la règle de la médiane des commandes récentes (30, 40, 30), la quantité retenue est de 30 unités, ce qui correspond également au volume le plus fréquent et le plus prudent pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 993 tokens
- **Output**: 166 tokens
- **Total**: 1,159 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-04 08:31:02: 24u
- 2025-08-08 11:46:34: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 24u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-04 08:31:02: 30u
- 2025-06-11 13:57:33: 40u
- 2025-05-27 13:50:03: 30u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 07:29:18: 30u
- 2024-08-21 11:29:03: 30u
- 2024-05-24 11:40:05: 40u
- 2024-03-13 22:00:38: 40u
- 2023-11-24 12:57:12: 40u

**Quantite Mediane (fallback)**: 30u
**Quantite Reelle**: 30u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:31.979Z*
