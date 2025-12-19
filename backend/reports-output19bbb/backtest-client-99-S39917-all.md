# Rapport Backtest - Client La Fermette Godelaine de Saint-Georges

## Contexte

- **Client** : La Fermette Godelaine de Saint-Georges (ID: 99)
- **Commande réelle** : S39917
- **Date commande** : 2025-10-27 07:18:16
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 49
- **Tokens**: 100,850 input + 139,983 output = 240,833 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 31.6% | 19 produits prédits, 6 corrects |
| **Rappel** | 35.3% | 17 produits réels, 6 détectés |
| **F1-Score** | 33.3% | Score équilibré global |

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
| **MAE** | 0.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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

## True Positives (6)

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
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle très court de 4 jours détecté sur un historique restreint
- **Cycle médian (jours)**: 4
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-10-29 (dans 3j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes précédentes le jeudi et lundi. Décalage par rapport à la fréquence théorique observé au 26/10.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points), mais montre un cycle de 4 jours (9 oct au 13 oct). En projetant ce cycle à partir de la dernière commande du 13 octobre (théoriquement le 17, 21 et 25), la prochaine date de commande estimée arrivant après la date actuelle (26 oct) est le 29 octobre. Ce produit étant commandé par unité de 1, la recommandation est de 1u pour la prochaine occurrence.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,056 tokens
- **Output**: 2,243 tokens
- **Total**: 4,299 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Volumes**

I'm currently reviewing the production volumes for the OCCHIOLINO SUCO product. It looks like we've only had two production runs in the last month, both of 1 unit, on Mondays and Thursdays. I need to understand if this is due to low demand, supply issues, or something else entirely.


**Forecasting Future Orders**

I've calculated the median interval between orders, which is 4 days. The last order was on Oct 13th, so a new one should have been ordered by now. Given the 4-day interval, the next production date is predicted to be Oct 29th. However, I recognize the low confidence in this prediction due to limited data.


**Calculating Cycle Length Again**

I'm now recalculating the order cycle. I see the last order was on the 13th, the one before that on the 9th, which gave us a 4-day cycle. Today being the 26th, the prediction from Oct 17th has already passed. Thus, I've re-calculated to get a next date of October 29th. The quantity forecast is a stable median of 1.0.


**Finalizing Prediction Calculations**

I've just finalized the next order prediction and am confirming the data. The next order date is calculated as October 29th, with a quantity of 1 unit, given the consistent 4-day cycle. My confidence is low due to the limited historical data, but I've ensured all fields adhere to the proper format, including the correct date format for `predicted_next_date`.


**Reviewing the Calculated Findings**

I've reviewed all data points. The final calculations are complete, and the predicted next order is set for October 29th, with a quantity of 1 unit. All date formats and data types are verified. Despite the consistent cycle, the low confidence is justified due to the limited historical data. The logic appears sound, and it will be confirmed during the next iteration, if the data changes.


**Verifying Data Integrity**

I'm now cross-checking all calculations to ensure nothing was missed. The predicted date of October 29th seems valid. The recommended quantity of 1 unit aligns with the consistent historical data. Low confidence is still maintained due to the limited available data. I am satisfied with the current predictions.




</details>

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier de 21 à 27 jours, majoritairement le lundi (tous les 3 lundis)
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle de 21 jours a été identifié avec une forte régularité (CV temporel de 12.3%). La dernière commande datant du 2025-10-13, la prochaine est prévue pour le 2025-11-03, soit dans 8 jours, ce qui confirme un risque de rupture dans l'horizon de 30 jours. Les quantités commandées sont stables (médiane de 1, maximum à 2), et l'absence de données N-1 ne permet pas d'identifier de saisonnalité. La moyenne tronquée sur les volumes confirme une commande cible de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,105 tokens
- **Output**: 2,608 tokens
- **Total**: 4,713 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Current Inventory Status**

I've been analyzing the inventory data for the [REB02] ReBEL chips. Specifically, I'm focusing on the paprika fumé 125g variant. The data shows an initial unit count of 1 on October 13th. The goal is to track inventory trends over the next 30 days, until November 25th.


**Projecting Future Replenishment Needs**

I've calculated the median cycle time to be 21 days, the mean at 23 days, and the standard deviation around 2.83 days. Based on this, I'm predicting the next replenishment date to be November 3rd, which falls within the 30-day window. The coefficient of variation is low, so I have high confidence in this prediction.


**Calculating Demand Forecasts**

I'm now calculating the demand forecast for the paprika fumé 125g variant. Using a trimmed mean, the initial baseline forecast for the next 30 days is 1 unit. I've also analyzed the variability in quantities and the coefficient of variation, finding it to be at 34.6%, indicating a moderate level of variability.


**Evaluating Supply Chain Dynamics**

I'm now assessing the frequency and variability of orders to refine the forecast. The intervals between orders average around 23 days, with a low coefficient of variation, suggesting a predictable pattern. I've also identified the next replenishment date as November 3rd, based on historical ordering cycles.


**Refining the Predictive Model**

I've re-examined the calculations, particularly the cycle time and the coefficient of variation. The 12.3% CV supports the high confidence level assigned to the order prediction for November 3rd, and the model's confidence for the next 30 days. The quantities' trimmed mean baseline and the confidence rating have been validated.


**Concluding Inventory Assessment**

I've completed the analysis, validating the previous calculations, especially the cycle time and confidence levels. I'm recommending a quantity of 1 unit, with a medium confidence rating, anticipating the next order by November 3rd, 8 days from now. The reasoning integrates temporal and quantitative aspects, including a trimmed mean of 1 unit.




</details>

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Erratique avec variation extrême des intervalles (4j vs 38j)
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 21 jours identifié à partir d'intervalles très inconsistants (4 et 38 jours, CV=114%). La prochaine commande est estimée au 2025-11-03, soit dans 8 jours, ce qui entre dans l'horizon de 30 jours (Phase 1: Risque OUI). Pour le volume, aucune donnée N-1 n'est disponible et l'historique est limité à 3 points. Pas d'outliers détectés (volumes de 1, 1, 2). La baseline est calculée à 1u par moyenne tronquée (CV de 43% sur les quantités retenues). La confiance est faible en raison de l'irrégularité temporelle et du faible volume de données.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,078 tokens
- **Output**: 1,896 tokens
- **Total**: 3,974 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Recent Sales Data**

I've been examining the recent sales data for the [REB08] ReBEL chips, specifically the premium bio-piment citron flavor. My focus is on the sales trends over the past few weeks, including the 1u from 2025-10-13. I'm trying to determine if there is an increasing or decreasing trend over this period.


**Calculating Prediction Parameters**

I've calculated the median interval between the identified sales dates as 21 days, with a high coefficient of variation (CV) of approximately 114%. This suggests significant variability in the sales cycle. Based on this, I've predicted the next sales date to be November 3rd, well within the 30-day horizon. This signals a RISQUE level of OUI.


**Evaluating Current Projections**

I'm assessing the predicted next sales date, which is November 3rd, and that falls within the 30-day window, signaling a "RISQUE OUI". The quantities have a CV of 43%, which, with fewer than 3 points, leads to a low confidence rating. For a forecast, I recommend a baseline of 1.


**Assessing Current Forecast**

I'm now focusing on the product's sales, specifically the [REB08] ReBEL chips. Recent analyses show a predicted next sales date of November 3rd, within the 30-day window, resulting in a "RISQUE OUI."  Quantities display medium CV, with only three data points, therefore suggesting "low" confidence. The baseline is a quantity of 1.


**Synthesizing Sales Projections**

I'm analyzing the [REB08] ReBEL chips' sales, with the predicted next sales date being November 3rd, within the 30-day window, signaling a "RISQUE OUI."  Quantities display a median CV, but with only three data points, the confidence rating remains "low." A baseline of 1 unit is proposed, given the erratic sales patterns.




</details>

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle parfaitement régulier de 21 jours constaté sur les lundis
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement est extrêmement stable avec un intervalle constant de 21 jours (CV cycle de 0%). La prochaine commande est prévue pour le 2025-11-03, soit dans 8 jours, ce qui est inclus dans l'horizon de 30 jours. Bien que le volume ait légèrement baissé lors de la dernière commande (de 2u à 1u), la médiane de l'historique récent est de 2u. En l'absence de données N-1 et avec un faible volume, nous retenons la médiane après avoir vérifié l'absence d'outliers (IQR de 1, barrière à 3.5).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,078 tokens
- **Output**: 1,914 tokens
- **Total**: 3,992 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Current Inventory Status**

I'm currently reviewing the inventory data for the ReBEL chips. I'm focusing on the sales figures and tracking the remaining stock of the premium sea salt variety. My goal is to estimate the rate of consumption and predict whether the current inventory will last the entire 30-day horizon, until November 25th.


**Calculating the Sales Intervals**

I've calculated the time intervals between past sales, which came out to 21 days each time.  The mean and median intervals both are 21 days as a result, with a 0% coefficient of variation. Based on this, I've projected the next order date and assessed the risk, finding a "high" confidence level and a risk factor present. I am proceeding to outlier detection next.


**Evaluating Quantity Consumption Rates**

I've moved on to scrutinizing the quantities sold. Using quartile calculations and the IQR, I've confirmed that all sales data points are within acceptable boundaries, with no outliers detected.  Then, I've derived a baseline quantity of 2 units per order, and assessed a medium confidence level.


**Predicting Future Demand**

I'm now calculating the next order date and assessing the risks. The time interval between orders is a fixed cycle of 21 days, so I predict the next order will be on November 3rd, leaving 8 days until the next order. With a high confidence level, the risk is 'yes', but I need to determine the consumption. I've now calculated an average of 2 units of product will be required per order, and am assessing this further.


**Confirming the Order Cycle**

I've determined that the next order is due on November 3rd, leaving only eight days until it is required. I've estimated that the baseline quantity needed per order is two units, and I have a medium confidence level in this assessment. I am calculating everything is within the 30-day horizon.




</details>

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle irrégulier (moyenne 21j) avec accélération récente
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
DÉTECTION : Nous observons 2 intervalles (38j et 4j) donnant une médiane de 21 jours. La prochaine commande est prévue pour le 2025-11-03, soit dans 8 jours. QUANTITÉ : L'historique des quantités [2, 1, 1] ne présente pas d'outliers (IQR=0.5, barrière haute=2.25). La baseline est fixée à 1.0 via la méthode de la moyenne tronquée (exclusion de l'unité de 2 de septembre) pour refléter la demande récente stabilisée sur un volume plus faible.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,078 tokens
- **Output**: 2,348 tokens
- **Total**: 4,426 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales Projections**

I'm currently looking at the sales data for ReBEL chips, specifically the thym/romarin 125g variant. Initial sales on October 13th were just 1 unit. Now I must analyze the trend and determine the expected sales volume within the next 30 days, considering this limited historical data. This projection is crucial.


**Calculating Sales Predictions**

My focus has shifted to analyzing the sales intervals and their variance. With the available data, I've calculated the median interval between sales to be 21 days, with a significant coefficient of variation, indicating low confidence. Using this, I've projected the next sale to occur around November 3rd, roughly a week from now.


**Predicting Future Sales**

I'm now integrating the analysis of sales quantities. With a coefficient of variation (CV) around 43.3% for the quantities, I've classified the confidence level as "medium." I've also determined that the frequency pattern is irregular. The analysis shows an impact of "none" from missing N-1 data, with an adjustment factor of 1.0.


**Assessing Outlier Calculations**

I'm now cross-referencing my calculations for outliers, particularly in the sales quantity data. I'm focusing on ensuring the quartile calculations and the resulting interquartile range (IQR) are accurate. I'm also reviewing how these calculations will inform the final sales projections.


**Evaluating Cycle Predictions**

The crucial cycle median calculation has been confirmed at 21 days with a high CV. My concern now is assessing the decreasing sales quantity trend and its impact. The baseline quantity of 1 unit seems to align with the median, but I am still evaluating the optimal value to recommend, considering the irregular frequency pattern.


**Confirming Final Parameters**

I'm now carefully reviewing and finalizing all the key parameters before providing the final sales projection. This involves a final check of all calculations, especially the confidence levels, the baseline quantity, the outlier analysis, and all the date-related values. Also, I must ensure that the output JSON format meets all the requirements, including precise data types and string formatting.




</details>

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 21 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 21 jours détecté (médiane entre un intervalle court de 4 jours et un long de 38 jours), projetant la prochaine commande au 2025-11-03, soit dans 8 jours. La quantité est stable à 1 unité sur les 3 dernières commandes sans aucun outlier détecté. L'historique N-1 ne montre pas de saisonnalité assez robuste pour ajuster la baseline.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,148 tokens
- **Output**: 2,627 tokens
- **Total**: 4,775 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I'm analyzing the sales data for MF Tarti Aubergine 250g. I see a few recent sales within the last month. Looking back further, I can see a couple of sales in the past, and I'm keen to see if this is representative of the normal trends. I'm focusing on the dates and the number of units sold to get a better handle on the product's performance.


**Calculating Future Orders**

I've crunched the numbers, focusing on the intervals between orders for MF Tarti Aubergine 250g.  The analysis reveals a high coefficient of variation, indicating low confidence in a regular pattern. Based on the median cycle of 21 days, I predict the next order around November 3rd, approximately 8 days from now.


**Assessing Ordering Patterns**

After a deeper dive, I've calculated the median interval between orders, which is 21 days for MF Tarti Aubergine 250g.  The coefficient of variation is high, so the ordering pattern is quite erratic. I'm predicting the next order around November 3rd, and anticipate ordering a quantity of 1 unit.


**Refining the Predictive Model**

I've re-examined the sales intervals and confirmed a median of 21 days between orders. My prediction for the next order date remains November 3rd, with the next order in approximately 8 days. The recommended quantity is 1 unit, given the consistent recent demand. I've reassessed the outlier detection to ensure accuracy.


**Predicting Future Demand**

The model is finalized, and my analysis of the MF Tarti Aubergine 250g is complete. I'm predicting the next order to be around November 3rd. The recommended quantity is 1 unit, given a low confidence in the cycle's consistency. All outlier analyses and seasonality checks are confirming these predictions.


**Confirming the Final Analysis**

I've finalized all the calculations. The median cycle is 21 days, making the predicted next order date November 3rd, with the next order in 8 days. Based on stable demand, I'm recommending 1 unit.  My confidence is low due to the erratic cycle but medium for the stable quantities.


**Formulating the Summary**

I'm structuring the final report, aiming for a concise synthesis. The analysis reveals an erratic 21-day cycle, predicting the next order on November 3rd, approximately 8 days from now. The baseline quantity of 1 unit remains stable, and no seasonality is evident. My confidence level leans towards low due to the cycle's irregularity.




</details>

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 1u
- 2025-08-05 10:30:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:33:27: 2u
- 2024-06-20 06:56:28: 1u
- 2023-11-07 08:16:41: 3u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (13)

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
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Stock prédit: 0.8u (60j restants) → prédit 1u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Stock prédit: 0.8u (73j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.5u (17j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Stock prédit: 0.8u (11j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: 0.9u (12j restants) → prédit 2u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: -0.2u (-5j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 2 | Stock prédit: -2.7u (-24j restants) → prédit 2u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: -0.5u (-11j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Stock prédit: -1.0u (-27j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 1 | Stock prédit: 0.3u (44j restants) → prédit 1u mais non commandé |
| [MF0014] MF Olives noires 500g | 1 | Stock prédit: 0.4u (70j restants) → prédit 1u mais non commandé |


---

## False Negatives (11)

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
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock: 0.4u (8j restants) - filtré pour autre raison |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock suffisant: 0.5u (48j restants > seuil 30j) |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | En rupture (-36j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [RISH06] RISH kombucha BIO - tagette 750ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock: 0.4u (21j restants) - filtré pour autre raison |
| [WIG01] WIGNAC cidre naturel bio 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | En rupture (-17j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0009] Consigne casier | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 18 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T08:04:33.258Z*
