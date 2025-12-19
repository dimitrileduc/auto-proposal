# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S40324
- **Date commande** : 2025-11-13 12:28:59
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 69
- **Tokens**: 148,400 input + 205,224 output = 353,624 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.4% | 54 produits prédits, 4 corrects |
| **Rappel** | 40.0% | 10 produits réels, 4 détectés |
| **F1-Score** | 12.5% | Score équilibré global |

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
| **MAE** | 13.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 84.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 77.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -84.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (4)

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
| [LD011] LD Organic Kids Spread 180 g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 21 | 19.0 | 90.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 21 | 18.0 | 85.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 18 | 15.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Historique insuffisant (1 seule commande détectée)
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-10-27
- **Prochaine prédite**: 2025-11-26 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très restreint avec une unique commande de 2 unités enregistrée le 27/10/2025. En l'absence de données N-1 et d'intervalles calculables, une hypothèse prudente de cycle mensuel (30 jours) est appliquée. La prochaine commande est ainsi estimée autour du 26/11/2025, soit dans 14 jours, ce qui entre dans l'horizon de 30 jours. La quantité recommandée suit l'unique point de données disponible.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,021 tokens
- **Output**: 2,072 tokens
- **Total**: 4,093 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Order Prediction**

I'm focused on predicting the order quantity for LD Organic Kids Spread. The current date is 2025-11-12, with recent history showing a 2-unit order on 2025-10-27. No prior orders exist for comparison. My goal is to estimate the next order size within a 30-day window.


**Considering Current Order Factors**

I'm now analyzing the order frequency, or lack thereof. With only one order to work from, a reliable cycle calculation is impossible. Given the 30-day prediction window and absence of historical data, I'm considering the potential impact of a replenishment cycle, even though I have no solid basis for one. Considering the lack of historical data, risk assessment, and standard assumptions about a low data scenario.


**Calculating Next Order Quantity**

I'm deep in the process, assessing the appropriate order size. My singular historical data point necessitates using the last order quantity as the baseline, as there is insufficient data for more sophisticated analysis. Considering potential replenishment cycles and the timing relative to the last order, I'll recommend the baseline quantity with no adjustments. The next order date prediction is based on the assumption of a monthly cycle.


**Evaluating Predictive Factors**

I'm now focusing on a range of factors. Considering there's only one order, calculating cycle times or statistical measures is impossible. I'm defaulting to assumptions about common replenishment cycles. Risk is assessed based on the last order date and the prediction window. The recommended quantity remains at 2 units, with low confidence in this prediction due to limited data.


**Determining Order Characteristics**

I'm now fully immersed in the data. With just one order, all statistical measures are impossible to compute. My analysis will focus on applying the "low data" rules from the instructions, and use the sole data point as the baseline, as directed, while considering the 30-day window for the prediction.


**Synthesizing Order Characteristics**

I'm now consolidating all the factors. Using the single data point, I calculated a potential 30-day replenishment cycle. Based on this, a next order around November 26th is predicted. Risk assessment is high due to the recent order and the closeness of the estimated replenishment date. The final recommendation is 2 units, with low confidence in this projection given the data constraints.




</details>

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 21u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 21u
- 📉 **Erreur LLM**: 19u (90.5%)
- 📉 **Erreur Médiane**: 19u (90.5%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande environ tous les 31 jours
- **Cycle médian (jours)**: 31
- **Dernière commande**: 2025-10-21
- **Prochaine prédite**: 2025-11-21 (dans 9j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Habitudes de commande réparties entre lundi et mardi, cohérent avec l'historique récent
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Cycle médian calculé à 31 jours avec un CV de 54% (phase 1: low), situant la prochaine commande théorique le 21/11/2025. L'analyse des quantités sur 10 points de données identifie une seule valeur aberrante (6u en avril 2024 via IQR). Les valeurs retenues présentent une grande stabilité autour d'une médiane de 2u. La comparaison avec N-1 ne montre pas de saisonnalité marquée pour cette période de fin d'année.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,256 tokens
- **Output**: 2,470 tokens
- **Total**: 4,726 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating the Forecast**

I'm currently working on projecting the demand for JF009. Initial sales data shows 1 unit sold on October 21st, 2025, and 2 units on September 29th, 2025. I've also noted that in the previous year, two units were sold on October 29th, 2024, and data from September 16th, 2024. These figures will inform the 30-day forecast.


**Examining Data Intervals**

The data intervals have been calculated and analyzed. After sorting, the median and mean of the intervals are both approximately 30.5 days. A standard deviation calculation is in progress to gauge data variability and refine the forecast accordingly.


**Evaluating the Variability**

The standard deviation for the intervals has been calculated at approximately 16.45, with a coefficient of variation of roughly 53.9%. This suggests a "low" confidence level for the forecast. Based on a 31-day median cycle and the last order date, I've determined there's a risk of the next order falling within the 30-day horizon. Outlier analysis is in progress.


**Refining Outlier Analysis**

I've refined the outlier analysis, removing a potential outlier of 6 units. Recalculating the coefficient of variation now yields approximately 36.9%, increasing confidence. After evaluation, I'm predicting demand of 2 units for the upcoming 30-day forecast, deeming the trend "stable" despite low volume.


**Calculating the Final Prediction**

I've finalized the prediction, taking into account the stable trend and a median of 2 units after refining the outlier analysis. I'm confidently forecasting 2 units for the upcoming 30-day period. Further, I've confirmed that the estimated next order date falls within the designated forecast window.




</details>

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 3u vs Médiane: 8u (Réel: 21u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.55u
- 📊 **Médiane historique**: 8u
- ✅ **Réel commandé**: 21u
- 📉 **Erreur LLM**: 18u (85.7%)
- 📉 **Erreur Médiane**: 13u (61.9%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 20 jours
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-09-23
- **Prochaine prédite**: 2025-11-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 10u, 10u

**🧠 Raisonnement LLM:**
DÉTECTION : Le cycle médian est de 20 jours (calculé sur l'historique N-1 et récent, intervalles : 7, 9, 15, 19, 19, 20, 28, 32, 32, 34, 39). Avec une dernière commande au 2025-09-23, le produit est en retard sur son cycle habituel (50 jours écoulés), une commande est donc imminente dans l'horizon 30 jours (risque : OUI). QUANTITÉ : L'analyse statistique (Q1=2, Q3=4, IQR=2) place la barrière haute à 7u. Les deux occurrences de 10u sont exclues comme outliers. La baseline est calculée sur les valeurs retenues (1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5) via une moyenne tronquée (CV de 52%), soit 2.55, arrondie à 3u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,339 tokens
- **Output**: 4,574 tokens
- **Total**: 6,913 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Data Points**

My focus has shifted to analyzing the data points for product [JF012] JF SAUCE BEARNAISE. I've noted a recent history with a recorded 10u on 2025-09-23. The horizon is set for 30 days, ending on 2025-12-12, and I'm currently tracking from 2025-11-12. Further investigation into the recent history is planned.


**Calculating Historical Intervals**

I'm now calculating the intervals between historical sales data points for [JF012]. Examining the N-1 history, I've computed the time elapsed between each sale to identify any recurring patterns. The median cycle time calculation is underway, providing a reference for future sales predictions.


**Evaluating Cycle Times and CV**

I've now calculated the cycle times between sales for [JF012], including both recent and N-1 history. The median cycle is approximately 20 days. Since recent data is < 3, I am using the N-1 as the primary reference, as advised. A coefficient of variation calculation is also underway to gauge the spread of these intervals.


**Predicting Next Command Date**

I have now calculated the median cycle time (20 days) and coefficient of variation (43.7%) for product [JF012] using all available intervals. Based on the last order date of 2025-09-23, and comparing that to the current date, I've determined that a command is overdue, therefore I've flagged a RISK = OUI. Confidence is low due to the CV.


**Calculating Adjusted CV and Mean**

I've now re-evaluated the data, removing the outliers (10u). Recalculating the Coefficient of Variation, it's jumped to 51.7%, meaning I'll be using the truncated mean.  I'm now proceeding to determine the new mean using the reduced dataset, excluding extreme values.


**Evaluating Data Refinements**

I've re-examined the [JF012] data, now focusing on seasonality, finding no significant patterns. The final recommended quantity is 3 units, considering the truncated mean and stable trend, but the date is overdue. The JSON generation process is underway, reflecting the need for immediate action.


**Determining the Order Quantity**

I've finalized the final recommended order quantity of 3 units, accounting for a truncated mean calculation. I've flagged a RISK = OUI as the product order is overdue, with a low confidence score, given the Coefficient of Variation. The JSON generation process is underway and almost complete.


**Confirming the Order Quantity**

My analysis is complete and I've confirmed the final order quantity as 3 units, with the risk status flagged as "OUI," indicating an overdue order. Low confidence persists due to the high Coefficient of Variation. The JSON generation process is wrapping up.


**Refining Final Recommendations**

The analysis is now completely finalized, confirming the final order quantity of 3 units, with the "OUI" risk status due to the order being overdue. Confidence remains low given the high coefficient of variation. The JSON output, including the frequency pattern, cycle days, and trend direction, is ready.


**Finalizing Order Recommendation**

I'm now completely confident in the final recommendation of 3 units for [JF012], given the truncated mean. The order is overdue, flagged as "OUI," with low confidence due to the CV. I've also calculated the expected date, with the JSON ready to go.




</details>

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 4u (Réel: 18u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 18u
- 📉 **Erreur LLM**: 15u (83.3%)
- 📉 **Erreur Médiane**: 14u (77.8%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irregulier d'environ 19 jours avec une forte variabilité temporelle
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-11-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle median detecte est de 19 jours (Intervalles: [39, 7, 25, 19, 7, 35, 19, 28, 9, 34, 18]). La derniere commande datant du 2025-09-09, une extrapolation par cycles (4 x 19j) projette la prochaine commande au 2025-11-24, soit dans 12 jours par rapport a la date actuelle. L'analyse des quantites (Q1=1.5, Q3=4.0) ne revele aucun outlier (Max 6 < Barriere 7.75). Avec un CV de 50%, la moyenne tronquee (excluant min/max) a ete utilisee sur l'ensemble des donnees disponibles (N=13) pour aboutir a une baseline de 3 unites.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,339 tokens
- **Output**: 3,926 tokens
- **Total**: 6,265 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales Projections**

I'm analyzing the sales data for JF005, specifically the JF MAYONNAISE OEUFS 250ML WECK product. Considering the horizon of 30 days, I'm focusing on the recent sales figures. Currently, I'm noting the 5u sold on 2025-09-09 and 3u sold on 2025-08-22, in light of the N-1 sales data.


**Calculating Sales Intervals**

I've calculated the time intervals between sales for JF005, both in the recent period and the N-1 data. The intervals show variability, especially in the N-1 data, with gaps and inconsistent timing. This will make forecasting more challenging, thus I am now investigating the sales volume cycles.


**Investigating Cycle Characteristics**

I'm now calculating the sales cycle metrics using all available data, aiming to determine patterns. Analyzing intervals between orders from 2024 to 2025 reveals a median cycle of 19 days, but also significant volatility. It's clear that the product's sales are highly irregular, indicating that a simplistic cycle model is unlikely to be accurate.


**Predicting Future Demand**

I'm now forecasting the probability of an order in the next 30 days, given the product's history. Based on the calculated median cycle of 19 days, and considering that sales have been infrequent recently, my forecast indicates a potential order around November 24th, falling within the specified time horizon. The quantity analysis suggests a range of possible volumes.


**Finalizing the Recommendation**

I've determined a low confidence level for the forecast due to the product's sales irregularity. Considering the 19-day median cycle and recent sales, I project a potential order around November 24th, within the 30-day horizon. The recommended quantity is 3, with minimal adjustments.


**Evaluating Sales Patterns**

My analysis shows a product with irregular sales, and a median cycle of 19 days. I've predicted a next order around November 24th, considering the gap since the last sale on September 9th. The baseline quantity is set to 3, and I'm maintaining a low confidence level due to the sales volatility.


**Revisiting Frequency and Confidence**

I'm recalculating the cycle and projected dates, and confirming the low confidence level. Based on the 19-day median cycle, I projected the next order for November 24th, considering a significant gap since the last recorded sale. The baseline quantity is set at 3, with no adjustments. The analysis indicates the need to double-check date and confidence calculations.


**Verifying Baseline and Timing**

I've re-examined the date calculations, double-checking the baseline quantity and projected order date. The baseline of 3 units is confirmed via the truncated mean, and the projected date of November 24th is also validated. The analysis now centers on confirming all aspects of the recommended order, before generating the final report.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [LD011] LD Organic Kids Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-27 15:08:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:08:52: 1u
- 2025-09-29 06:22:00: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 07:41:38: 2u
- 2024-09-16 12:44:43: 2u
- 2024-07-31 06:22:12: 2u
- 2024-07-11 06:44:28: 1u
- 2024-06-26 12:38:31: 3u
- 2024-06-19 10:15:51: 3u
- 2024-04-29 11:50:19: 6u
- 2024-03-21 09:05:03: 3u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 21u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:05:27: 10u
- 2025-08-22 06:53:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 07:41:38: 4u
- 2024-09-25 06:29:04: 4u
- 2024-09-16 12:44:43: 1u
- 2024-08-19 06:08:42: 2u
- 2024-07-31 06:22:12: 3u
- 2024-07-11 06:44:28: 2u
- 2024-06-26 12:38:31: 1u
- 2024-06-19 10:15:51: 5u
- 2024-05-31 12:44:08: 2u
- 2024-04-29 11:50:19: 10u
- 2024-03-21 09:05:03: 4u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 21u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:35:00: 5u
- 2025-08-22 06:53:50: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 07:41:38: 4u
- 2024-09-25 06:29:04: 2u
- 2024-09-16 12:44:43: 1u
- 2024-08-19 06:08:42: 1u
- 2024-07-31 06:22:12: 4u
- 2024-06-26 12:38:31: 4u
- 2024-06-19 10:15:51: 2u
- 2024-05-31 12:44:08: 1u
- 2024-05-06 07:16:25: 4u
- 2024-04-29 11:50:19: 6u
- 2024-03-21 09:05:03: 3u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 18u

</details>




---

## False Positives (50)

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
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.1u (17j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Stock prédit: -2.2u (-7j restants) → prédit 3u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Stock prédit: -0.9u (-7j restants) → prédit 2u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.5u (15j restants) → prédit 1u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Stock prédit: 0.9u (11j restants) → prédit 2u mais non commandé |
| [JF067] FIL MOUTARDE 700G BOCAL | 2 | Stock prédit: 0.9u (13j restants) → prédit 2u mais non commandé |
| [FIL27] FIL MOUTARDE 300ML SQUEEZE  | 2 | Stock prédit: 0.9u (13j restants) → prédit 2u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 2 | Stock prédit: 0.7u (7j restants) → prédit 2u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Stock prédit: 0.6u (19j restants) → prédit 1u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock prédit: 0.6u (25j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: 0.4u (8j restants) → prédit 2u mais non commandé |
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Stock prédit: 0.5u (13j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: 0.3u (7j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.2u (6j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | Stock prédit: 0.9u (15j restants) → prédit 3u mais non commandé |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 2 | Stock prédit: 0.5u (7j restants) → prédit 2u mais non commandé |
| [LD008] LD Tartinade Pois chiches bio 180g   | 2 | Stock prédit: 0.5u (7j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: -1.0u (-7j restants) → prédit 2u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Stock prédit: 0.1u (1j restants) → prédit 2u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Stock prédit: -0.4u (-5j restants) → prédit 2u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock prédit: 0.7u (19j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: 0.5u (12j restants) → prédit 2u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 3 | Stock prédit: 0.8u (13j restants) → prédit 3u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: -1.3u (-24j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 0.2u (6j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: -1.1u (-14j restants) → prédit 2u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Stock prédit: 1.2u (66j restants) → prédit 2u mais non commandé |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Stock prédit: 0.5u (13j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: -0.5u (-9j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Stock prédit: 0.6u (21j restants) → prédit 2u mais non commandé |
| [MF0047] MF Mayonnaise 250ml | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: -0.1u (-2j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -2.5u (-35j restants) → prédit 2u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Stock prédit: -0.4u (-7j restants) → prédit 2u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.2u (-6j restants) → prédit 2u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 3 | Stock prédit: -1.4u (-47j restants) → prédit 3u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.2u (-19j restants) → prédit 1u mais non commandé |


---

## False Negatives (6)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [DIS0012] Display Foodprint Karton LD | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Stock suffisant: 1.4u (39j restants > seuil 30j) |
| [LD014] LD Organic Avocado Spread 180 g | 4 | En rupture (-7j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [LD015] LD Onion Spread 180g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF048] JF DISPLAY SAUCES 250ML  | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T08:12:36.835Z*
