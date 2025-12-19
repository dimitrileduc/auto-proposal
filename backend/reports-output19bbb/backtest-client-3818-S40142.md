# Rapport Backtest - Client NATURKOST WEST GMBH

## Contexte

- **Client** : NATURKOST WEST GMBH (ID: 3818)
- **Commande réelle** : S40142
- **Date commande** : 2025-11-05 12:54:20
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 9,305 input + 10,723 output = 20,028 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 14.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 43.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 56.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (3)

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
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 32 | 16 | 16.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 38 | 48 | 10.0 | 20.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 32 | 16.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 32u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: 16u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier tous les 14-19 jours
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-16 (dans 12j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Passage d'un rythme hebdomadaire en N-1 à un cycle bimensuel stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
DÉTECTION : Un cycle médian de 17 jours a été calculé sur l'historique récent (intervalles de 14 et 19 jours, CV 21.4%). La dernière commande ayant eu lieu le 13/10, la prochaine était théoriquement attendue vers le 30/10. Étant aujourd'hui le 04/11 sans commande intermédiaire, la prochaine occurrence est prévue pour le 16/11 (30/10 + 17j), soit dans 12 jours. QUANTITÉ : La demande est rigoureusement stable à 32 unités sur les trois derniers mois. L'historique N-1 montre une pointe à 48u en octobre mais la baseline structurelle reste à 32u. Aucun outlier détecté dans les données récentes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,414 tokens
- **Output**: 3,293 tokens
- **Total**: 5,707 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Near-Term Projections**

I'm focusing on the sales data for product MF0044. My initial review involves analyzing the recent sales figures. Currently, I'm examining the 2025-10-13 data, which shows a sales volume of 32 units. This, along with prior sales, is essential for a 30-day sales forecast.


**Assessing Data Intervals**

The data gaps are concerning, so I've calculated the intervals between sales dates. Examining both the recent and N-1 data, I noted the intervals between sales events. Next, I calculated the mean, median, standard deviation, and coefficient of variation for the most recent period to quantify the time between orders, to help with the forecast.


**Projecting Future Orders**

I'm now calculating the next potential order dates. Using a median cycle of 17 days, the last order on 2025-10-13 puts the next order at 2025-10-30, which has passed. I've determined that the following order should be approximately 2025-11-16. This is within the 30-day window, so there's a risk of inaccurate forecasts. The confidence level is medium. I am also calculating the interquartile range to further assess outlier sensitivity.


**Forecasting Quantity and Stability**

I'm now calculating the sales quantity and seasonality. The recent data shows a consistent 32-unit sales volume. Examining the previous year's data for the same period reveals some variation, with a peak of 48 units. However, given the current stability, the seasonality impact seems weak, so I'll predict 32 units, using the median.


**Finalizing the Recommendation**

I'm now putting it all together. Considering the 17-day cycle and the missed October 30th deadline, the next order is due by November 16th, which is within the 30-day forecast. With a stable demand of 32 units and a 'medium' confidence level due to the limited data, the prediction remains at 32 units, as the most likely outcome.


**Evaluating Outlier Sensitivity**

I'm now determining how sensitive the sales forecasts are to outliers. I have calculated the interquartile range (IQR) to identify and understand the impact of any extreme values within the dataset, for both recent and historical sales. The N-1 data shows some variation with some quantities, but not enough to change the baseline recommendation.


**Confirming the Final Recommendation**

I've reviewed the data, calculated the time intervals between orders, and assessed outlier impact, confirming the original recommendation. With a 17-day cycle, the next order is due by November 16th, and I will maintain the 32-unit prediction. The confidence level remains medium, due to the limited number of data points, and seasonality appears to have a weak influence.




</details>

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 38u vs Médiane: 32u (Réel: 48u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 38u
- 📊 **Baseline calculée**: 32u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 10u (20.8%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 38u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec médiane de 14 jours, commande fortement attendue
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 80u

**🧠 Raisonnement LLM:**
PHASE 1 : Cycle médian détecté de 14 jours (intervalles : 7, 21, 14). Avec un CV de 40.8%, la régularité est faible. La dernière commande datant du 24/09/2025, le délai actuel (41 jours) dépasse largement le cycle habituel, rendant une commande imminente. PHASE 2 : Après filtrage de l'outlier (80u), la baseline est de 32u. L'historique N-1 montre une hausse de 32u à 48u (+50%) sur la période oct/nov, justifiant un impact saisonnier 'strong'. Application du coefficient correcteur maximal de 1.2 sur la baseline de 32, soit 38,4u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,439 tokens
- **Output**: 3,116 tokens
- **Total**: 5,555 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Data**

The initial data points, specifically from late August and September, show a consistent but relatively low unit output for the Tomate Bärlauch spread. I'm focusing on those early weeks now, comparing the recent sales figures to other products in the same category.


**Calculating Order Cycles**

I've just finished the interval analysis for MF0042.  The median and mean order cycles are both 14 days, though the coefficient of variation is a relatively high 40.8%.  Given today's date, I'm now realizing my prediction for the next order was off.


**Evaluating Order Timing**

I'm now comparing the current sales data with the past year's performance to detect any seasonal trends, which could explain the lapse in orders for MF0042. Examining the N-1 data confirms the product's ordering pattern, with potentially 35 days between the peak intervals. The recent gap since the last order of 41 days suggests an order is overdue.


**Refining Sales Predictions**

I'm now recalculating the baseline sales forecast, accounting for the detected seasonality. Based on last year's data, I'm applying a strong adjustment, increasing the current baseline by a factor of 1.2. The outlier in the data points will be removed, and that will be taken into account too.


**Calculating Seasonality Impact**

I'm now determining the seasonality impact, comparing this year's data to last year's. A significant volume increase from 32 to 48 units indicates a "strong" impact.  I am applying a 20% adjustment to the baseline, which, along with tomorrow's predicted order date, is the final step.


**Calculating Predictions Refined**

I'm now integrating the results. Seasonality is strong, requiring a 20% baseline adjustment. The analysis points to an overdue order, with a predicted date of tomorrow, 2025-11-05. The recommended quantity is 38 units, but I'm adjusting my confidence to "low."


**Predicting Next Order**

I'm synthesizing the results of the analysis, confirming an overdue order for MF0042, with a predicted date of tomorrow, November 5, 2025. Based on strong seasonality and a 40.8% CV, the recommended quantity is 38, but my confidence remains low.




</details>

</details>


<details>
<summary><strong>3. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 64u (Réel: 32u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 64u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 16u (50.0%)
- 📉 **Erreur Médiane**: 32u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Historique insuffisant (une seule commande)
- **Cycle médian (jours)**: 45
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-11-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un seul point de donnée disponible (16u le 24/09). L'absence d'historique N-1 et de répétition rend le cycle incertain. Cependant, avec 41 jours écoulés depuis la dernière commande, un réapprovisionnement est statistiquement probable sur l'horizon de 30 jours (fenêtre totale > 70 jours). La quantité recommandée se base sur l'unique observation disponible, par défaut.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,018 tokens
- **Output**: 1,328 tokens
- **Total**: 3,346 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering the Timeline**

I've just finished the explicit cycle calculation for MF 0062, focusing on the date 2025-09-24, and noticed there are no intervals specified. Next, I need to look into the 30-day timeframe and end date of 2025-12-04, and how they relate.


**Assessing Temporal Predictions**

I am now focused on projecting the 30-day demand from 2025-11-04 to 2025-12-04, given the prior order on 2025-09-24. Given the nature of Tarti Betterave and its 41-day lag, I'm considering the potential for a repeat order within the next 30 days. The data suggests an overdue monthly cycle.


**Calculating Probabilities of Repeat**

I've determined a "high" probability for a reorder within the 30-day forecast window, despite the lack of cyclical data. My confidence remains low due to the limited historical information, specifically only one data point for the MF Tarti Betterave. The assumption leans on the nature of the product. My next step will be to evaluate the baseline using the latest value and assess the impact of seasonality, or lack thereof.


**Synthesizing Final Recommendations**

My final assessment is complete. I've considered the single data point, the product type, and the requested timeframe. A reorder of 16 units is probable within the 30-day window, given the typical cycle. The risk is marked as "OUI," with low confidence due to limited data. The final output will be formatted as requested.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 10:17:04: 32u
- 2025-09-24 09:49:39: 32u
- 2025-09-10 06:32:45: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 06:57:05: 48u
- 2024-09-09 12:35:42: 32u
- 2024-09-05 07:56:09: 32u
- 2024-08-27 12:23:03: 16u
- 2024-08-16 09:58:48: 16u
- 2024-06-27 07:43:54: 16u
- 2024-06-13 06:56:18: 32u
- 2024-05-16 08:11:07: 32u
- 2024-05-14 08:23:32: 16u
- 2024-03-14 08:27:15: 32u
- 2024-03-08 09:59:07: 32u
- 2024-02-22 13:59:46: 32u

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:49:39: 32u
- 2025-09-10 06:32:45: 80u
- 2025-08-20 12:43:59: 32u
- 2025-08-13 10:37:06: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 10:32:25: 48u
- 2024-10-14 06:57:05: 48u
- 2024-09-09 12:35:42: 48u
- 2024-09-05 07:56:09: 48u
- 2024-08-27 12:23:03: 32u
- 2024-08-16 09:58:48: 32u
- 2024-06-27 07:43:54: 32u
- 2024-06-13 06:56:18: 32u
- 2024-05-16 08:11:07: 48u
- 2024-05-14 08:23:32: 32u
- 2024-04-18 08:58:20: 48u
- 2024-03-14 08:27:15: 96u

**✅ Quantité LLM**: 38u (confidence: low)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:49:39: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: low)
**📊 Quantité Réelle**: 32u

</details>




---

## False Positives (1)

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
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 24 | Stock prédit: 7.4u (6j restants) → prédit 24u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:04:01.586Z*
