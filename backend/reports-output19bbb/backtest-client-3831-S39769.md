# Rapport Backtest - Client DANTESSE GmbH

## Contexte

- **Client** : DANTESSE GmbH (ID: 3831)
- **Commande réelle** : S39769
- **Date commande** : 2025-10-16 10:03:47
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 28,230 input + 39,342 output = 67,572 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 14.3% | 7 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 25.0% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 125.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (1)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 250 | 125 | 125.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 250u vs Médiane: 250u (Réel: 125u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 250u
- 📊 **Baseline calculée**: 250u
- 📊 **Médiane historique**: 250u
- ✅ **Réel commandé**: 125u
- 📉 **Erreur LLM**: 125u (100.0%)
- 📉 **Erreur Médiane**: 125u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 250u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Accélération du cycle de réapprovisionnement (tous les 10 à 19 jours récemment)
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-21 (dans 6j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: Passage d'un cycle long (49j) à un cycle court (~15j) sur les 3 dernières commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian calculé à 19 jours à partir de l'historique récent (intervalles de 49, 19 et 10 jours). La prochaine commande est prévue pour le 21 octobre 2025, soit dans 6 jours, ce qui entre dans l'horizon de 30 jours. Les trois dernières commandes sont strictement identiques à 250u, marquant un doublement de volume par rapport à la même période N-1 (125u en sept. 2024), confirmant une tendance de croissance forte et une saisonnalité marquée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,444 tokens
- **Output**: 2,349 tokens
- **Total**: 4,793 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Production Data**

I'm currently looking into the production data for PF1792. It's the LD MAYONNAI TR UFFES 250ML WECK product, and I've got a 30-day horizon to consider, ending November 14th. Specifically, I'm noting the 250-unit production run that happened on October 2nd. I need to understand this better.


**Forecasting Cycle Times**

I've moved on to calculating the cycle times between production runs. I've computed intervals between the last four dates, then calculated the median and average cycle times. The coefficient of variation is quite high, around 78.5%, indicating significant variability. Based on a median cycle of 19 days, I'm predicting the next production run should occur around October 21st.


**Calculating Production Risks**

I'm now assessing the production risk.  The predicted date of October 21st falls within the 30-day window, but the cycle time variability is high.  The coefficient of variation is roughly 78.5%, indicating a significant risk. I've also identified a clear volume increase, with recent production runs of 250 units exceeding historical levels.


**Predicting Next Production Run**

I've re-examined the cycle times, and the predicted date for the next production run remains October 21st, which is within the 30-day window. The variability, with a CV of 78.5%, remains a significant concern, but the high degree of similarity in recent production levels is somewhat reassuring. I'm now further analyzing the volume and seasonality to refine this prediction.


**Evaluating Order Volumes**

I'm now deep diving into the order quantities, performing an outlier analysis and calculating a baseline. While recent data shows consistent 250-unit orders, there is a clear jump from previous levels. Seasonality also plays a role, with a strong impact, leading to a baseline of 250 units, though the confidence level is still medium.


**Confirming Cycle Predictions**

The critical next step is to confirm the prior predictions. Based on the analysis, I project the next production run for PF1792 on October 21st, just six days from now. The baseline quantity should be 250 units, and the confidence level, while improved by recent consistency, remains medium.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 08:37:42: 250u
- 2025-09-22 05:31:37: 250u
- 2025-09-03 07:49:42: 250u
- 2025-07-16 13:46:45: 55u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-25 19:46:57: 125u
- 2024-08-29 12:54:10: 75u
- 2024-08-23 09:48:48: 50u
- 2024-07-17 09:21:00: 80u
- 2024-06-07 10:11:53: 50u
- 2024-05-28 11:15:02: 125u
- 2024-04-23 06:22:53: 50u
- 2024-04-04 06:34:16: 125u
- 2024-03-12 11:50:55: 50u
- 2024-02-15 07:27:41: 70u
- 2024-01-17 14:53:06: 75u
- 2023-12-13 12:47:04: 125u

**✅ Quantité LLM**: 250u (confidence: medium)
**📊 Quantité Réelle**: 125u

</details>




---

## False Positives (6)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1807] LD SAUCE ANDALOUSE 250ML WECK | 8 | Stock prédit: -0.4u (-1j restants) → prédit 8u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Stock prédit: 0.6u (35j restants) → prédit 1u mais non commandé |
| [PF1802] LD MOUTARDE MIEL 250ML WECK | 6 | Stock prédit: 3.3u (44j restants) → prédit 6u mais non commandé |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 43 | Stock prédit: 10.8u (11j restants) → prédit 43u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 63 | Stock prédit: -18.3u (-11j restants) → prédit 63u mais non commandé |
| [PF1795] LD MAYONNAI WASABI 250ML WECK | 17 | Stock prédit: 42.2u (65j restants) → prédit 17u mais non commandé |


---

## False Negatives (0)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>

*Aucun faux négatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-19T08:04:49.369Z*
