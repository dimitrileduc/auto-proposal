# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S40188
- **Date commande** : 2025-11-07 11:42:07
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 9,478 input + 8,764 output = 18,242 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 342.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 58.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 62.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -58.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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

## True Positives (2)

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
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 98 | 392 | 294.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3300] DLL MAYONNAISE OEUFS 300ML | 390 | 780 | 390.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - LLM: 98u vs Médiane: 98u (Réel: 392u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 98u
- 📊 **Baseline calculée**: 98u
- 📊 **Médiane historique**: 98u
- ✅ **Réel commandé**: 392u
- 📉 **Erreur LLM**: 294u (75.0%)
- 📉 **Erreur Médiane**: 294u (75.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 98u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande systématique le lundi avec un cycle de 7 à 14 jours
- **Cycle médian (jours)**: 10.5
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-14 (dans 8j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande exclusivement le lundi. Dernier intervalle de 7 jours, médiane globale calculée à 10.5 jours.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité parfaite sur les 5 dernières commandes avec exactement 98 unités à chaque fois, ce qui correspond probablement à une unité logistique complète (palette ou couche). Bien que l'historique N-1 montrait des volumes plus élevés (multiples de 98), la tendance actuelle est fixe à 98u. Le cycle médian suggère une commande imminente sous 8 à 10 jours.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,318 tokens
- **Output**: 1,601 tokens
- **Total**: 3,919 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Quantities**

I'm currently reviewing the production quantities for the PF3315 DLL VINAIGRETTE YOGORETTE PET 450ML product. Recent data from November 3rd shows a production of 98 units, and it's interesting to compare that with the 98 units produced on October 27th. Further back, on October 13th, only 9 units were produced; I'll need to understand what caused that dip.


**Predicting Future Orders**

I'm now calculating the projected order date for the PF3315 product, leveraging the observed intervals between previous orders. Using the median interval of 10.5 days, I've estimated the next order will be around November 13th or 14th. This falls within the 30-day horizon, but a potential stockout risk has been identified. Confidence in this prediction is presently high, owing to the consistent Monday ordering.


**Assessing Quantity Stability**

I'm now diving into the quantity stability of the PF3315 product, and the data is very clear. Recent orders consistently hit 98 units, and past data reveals higher volumes of 196 or 392, but none recently. Therefore, predicting 98 units for the next order feels very safe.


**Assessing Ordering Patterns**

I'm now examining the ordering frequency, which appears primarily on Mondays with a median cycle of 10.5 days. The last order was November 3rd, suggesting the next around November 14th. There's a potential stockout risk within the 30-day horizon, however.




</details>

</details>


<details>
<summary><strong>2. [PF3300] DLL MAYONNAISE OEUFS 300ML</strong> - LLM: 390u vs Médiane: 130u (Réel: 780u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 390u
- 📊 **Baseline calculée**: 312u
- 📊 **Médiane historique**: 130u
- ✅ **Réel commandé**: 780u
- 📉 **Erreur LLM**: 390u (50.0%)
- 📉 **Erreur Médiane**: 650u (83.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 390u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier (tous les 14 jours) le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-17 (dans 11j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: Le client commande systématiquement le lundi. La prochaine commande théorique tombe le lundi 17 novembre.
- **Outliers détectés**: 780u

**🧠 Raisonnement LLM:**
Cycle très régulier de 14 jours identifié (médiane à 14j). La dernière livraison datant du 03/11, la prochaine est prévue pour le 17/11, soit dans l'horizon des 30 jours. Les quantités commandées sont systématiquement des multiples de 130 (130, 390, 780), ce qui correspond probablement à un format de colisage ou palette. Bien qu'un pic à 780u ait été observé récemment, la moyenne glissante est de 312u. Dans une optique de disponibilité B2B et tenant compte de la tendance haussière par rapport à N-1, une quantité de 390u (multiple habituel de 130) est préconisée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,378 tokens
- **Output**: 2,687 tokens
- **Total**: 5,065 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently focused on the sales data for the [PF3300] mayonnaise product. I've noted the recent sales figures. Seeing the jump from 130 units on October 20th to 780 units on November 3rd is quite interesting and warrants further investigation. I'm eager to understand the factors driving this significant increase.


**Projecting Future Orders**

I've moved on to the next step, calculating the predicted next order date. Based on the median interval of 14 days, and the last order date of November 3rd, I anticipate the next order to be around November 17th. This falls within the 30-day window, so it warrants further scrutiny.


**Predicting Order Quantities**

I'm now deep in the quantity analysis. The recurring pattern of multiples of 130 intrigues me. I've calculated the baseline average and median, 312 and 130 respectively. The recent spike of 780 is a substantial outlier, yet it aligns with the 130-unit habit. Considering the trend and historical comparisons, I need to decide on the best next quantity estimate.


**Estimating the Order Size**

I've been examining the recent order data to estimate the next quantity. The base unit of 130 is clear, and I'm weighing whether to predict 260 or 390 units. Considering the previous 780 unit order, a return to a more standard level seems likely. My current bet is 390, given the slight upward trend.


**Evaluating the Order Cycle**

I'm now assessing the order cycle, confirming the 14-day median interval and the Monday order preference. The last order was November 3rd, projecting the next for November 17th. With an increasing trend, and the base unit being multiples of 130, I am confident in projecting a 390-unit order. I'm finalizing my prediction.


**Synthesizing the Recommendation**

I've finalized my conclusions, and the pieces fit. The 14-day cycle and Monday preference are confirmed. Based on an upward volume trend and the recent 780-unit order, I recommend a 390-unit order for the next cycle, due around November 17th. I'm feeling confident in this assessment.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 07:40:31: 98u
- 2025-10-27 07:02:27: 98u
- 2025-10-13 07:49:42: 98u
- 2025-09-08 10:16:06: 98u
- 2025-09-01 08:56:14: 98u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 07:05:31: 196u
- 2024-09-23 11:56:39: 196u
- 2024-08-06 10:01:31: 98u
- 2024-07-11 10:01:48: 392u

**✅ Quantité LLM**: 98u (confidence: high)
**📊 Quantité Réelle**: 392u

</details>


<details>
<summary><strong>2. [PF3300] DLL MAYONNAISE OEUFS 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 07:40:31: 780u
- 2025-10-20 08:14:48: 130u
- 2025-09-29 15:27:45: 390u
- 2025-09-22 10:46:37: 130u
- 2025-09-08 10:16:06: 130u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 11:37:32: 390u
- 2024-10-01 06:38:15: 130u
- 2024-09-09 11:24:26: 130u
- 2024-09-05 05:51:58: 130u
- 2024-08-06 10:01:31: 130u
- 2024-07-11 10:01:48: 390u

**✅ Quantité LLM**: 390u (confidence: high)
**📊 Quantité Réelle**: 780u

</details>




---

## False Positives (2)

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
| [PF3301] DLL MAYONNAISE CITRON 300ML | 130 | Stock prédit: 609.8u (30j restants) → prédit 130u mais non commandé |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 196 | Stock prédit: 44.2u (1j restants) → prédit 196u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:52:30.597Z*
