# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S40197
- **Date commande** : 2025-11-07 12:51:16
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 34,823 input + 34,228 output = 69,051 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 76.9% | 13 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
| **F1-Score** | 83.3% | Score équilibré global |

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
| **MAE** | 5.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 48.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (10)

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
| [PF0078] FILOU CHASSEUR 5 L | 30 | 30 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | 10 | 8.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 3 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 3 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 68 | 65 | 3.0 | 4.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | 30 | 10.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 10 | 3 | 7.0 | 233.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 40 | 4.0 | 10.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0093] FILOU MOUTARDE 300GR | 30 | 50 | 20.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 30u vs Médiane: 10u (Réel: 30u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 30u
- 📊 **Baseline calculée**: 30u
- 📊 **Médiane historique**: 10u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 20u (66.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 30u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une tendance de réapprovisionnement mensuel
- **Cycle médian (jours)**: 23
- **Dernière commande**: 2025-10-24
- **Prochaine prédite**: 2025-11-27 (dans 21j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: Dernière commande il y a 13 jours, intervalle récent observé de 34 jours vs 11 jours en N-1
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
PHASE 1 : Historique récent insuffisant (<3 commandes), utilisation combinée avec N-1. Intervalles calculés : 34j (2025) et 11j (2024). Médiane = 22.5 jours. Prochaine commande prédite pour le 2025-11-16 (médiane) ou 2025-11-27 (dernier cycle réel), dans les deux cas dans l'horizon de 30 jours (Risque = OUI). CV temporel > 40%, confiance Phase 1 faible. PHASE 2 : Analyse des quantités [10, 20, 30, 50]. Q1=15, Q3=40, IQR=25. Barrière haute à 77.5, aucun outlier détecté. CV des quantités = 62%. Selon la règle CV > 60%, utilisation de la dernière valeur non-outlier (30u). Saisonnalité forte (quantités N-1 70u vs récent 30u), mais absence de cohérence sur le volume total recommandant la prudence. Maintien de la baseline à 30u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,094 tokens
- **Output**: 3,063 tokens
- **Total**: 5,157 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Trajectory**

I'm currently focused on the product [PF0078] FILOU CHASSEUR 5 L, observing its performance. Recent data from the last three months, specifically the 2025-10-24 point with 30 units, is informing my projections for the next 30 days, ending on 2025-12-06. I'm keen to understand the trends.


**Projecting Demand Fluctuations**

I'm now calculating the product's sales cycle to predict future demand. Based on the limited recent data, the interval between orders seems to be about 34 days, though the previous year's data suggests a different pattern. I am assessing the reliability of these cycles for forecasting, especially given the varying intervals.


**Estimating Cycle Reliability**

The coefficient of variation for the order intervals is calculated at 72%, indicating a low confidence level due to the limited data. The predicted next order is due around 2025-11-27, within the 30-day timeframe.


**Calculating Potential Risk**

I'm now assessing the overall risk based on the calculated cycle and its reliability. The next predicted order date of 2025-11-27 falls within my 30-day forecast window. However, the data's variability, indicated by a 72% CV, raises concerns, hence the overall risk is "OUI".


**Evaluating Quantity Predictions**

I'm now determining the predicted quantity, examining the distribution of past orders, using an adaptive baseline approach. With a coefficient of variation above 60%, the last non-outlier, 30 units, is the baseline. Also, a "strong" seasonality impact is observed, so I am refining the volume by 1.1 based on that.


**Refining Quantity Recommendations**

I'm now assessing both the risk and the predicted quantity. While the cycle analysis points to a low confidence level and a predicted next order around 2025-11-27, the quantity prediction relies on the adaptive baseline of 30 units and a strong seasonal impact which slightly increases the volume. However, the confidence in the quantity prediction is also low, therefore I'm maintaining a conservative approach.


**Summarizing Risk and Quantity**

I've reviewed the risk assessment and quantity predictions. Despite the low confidence due to data limitations and high CV, the cycle suggests a potential order around November 27, falling within my 30-day window. The quantity is estimated at 30, but a strong seasonality effect slightly adjusts it upwards.




</details>

</details>


<details>
<summary><strong>2. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 40u
- 📊 **Baseline calculée**: 40u
- 📊 **Médiane historique**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 40u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de 23 jours détecté entre deux commandes consécutives
- **Cycle médian (jours)**: 23
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-05 (dans -1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: La date théorique (2025-11-05) est passée d'un jour par rapport à la date actuelle (2025-11-06), indiquant un besoin immédiat.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle régulier de 23 jours a été identifié entre le 20/09 (40u) et le 13/10 (40u). La prochaine commande était prévue pour le 05/11/2025. Nous sommes actuellement le 06/11/2025, ce qui place le besoin dans l'immédiat ou dans l'horizon très proche. L'historique étant limité à deux points, la confiance est basse, mais la stabilité parfaite de la quantité (40u) justifie ce volume de réapprovisionnement.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,054 tokens
- **Output**: 1,609 tokens
- **Total**: 3,663 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product History**

I'm currently focused on the product history for [PF0502] FILOU MOUTARDE SQUEEZE 300 ML. I've noted the recent production runs of 40 units on October 13th and September 20th. Now, I'm working to establish a 30-day horizon for analysis, comparing the two dates to assess trends. The absence of N-1 history is also being factored in.


**Predicting Future Production**

My focus is shifting to predict the next production date, given the recent history. I've calculated a median interval of 23 days between the two observed production runs. Based on that and the cycle, I predicted yesterday, November 5th, as the next date. Now, I'm analyzing the implications of this near-miss prediction.


**Calculating Production Risks**

The analysis shows a predicted production date yesterday, November 5th, which has passed. This triggered an immediate risk flag. Furthermore, since there's only one interval for the cycle, the confidence remains low. I am sticking with a stable 40 units for the baseline, despite the uncertainty.


**Refining Risk Assessment**

My analysis revealed the predicted date of November 5th has already passed. This triggers an immediate risk alert. Additionally, due to the limited historical data, the confidence level remains low. I am now focused on the implications of the predicted date being in the past and adjusting the risk factor accordingly, with a stable baseline quantity of 40 units.




</details>

</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - LLM: 2u vs Médiane: 2u (Réel: 10u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 8u (80.0%)
- 📉 **Erreur Médiane**: 8u (80.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de 23 jours identifié sur l'historique récent
- **Cycle médian (jours)**: 23
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle unique de 23 jours est détecté entre le 2025-09-20 et le 2025-10-13. Basé sur ce cycle, la prochaine commande était théoriquement prévue pour le 2025-11-05. Étant donné la date actuelle (2025-11-06), le besoin est immédiat ou sur le point de se produire au sein de l'horizon de 30 jours. Les quantités sont parfaitement stables (2u à chaque fois), mais la confiance est faible en raison du très faible nombre de points de données (2 commandes seulement).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,050 tokens
- **Output**: 1,724 tokens
- **Total**: 3,774 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product History**

I'm currently reviewing the sales history of the "PF1539 FILOU BOULETTE CH ASSEUR 800G" product. Initial data shows a recent order of 2 units on October 13th. The horizon is set to 30 days, ending December 6th, and I will be looking into the trend for November.


**Calculating Order Cycles**

I've calculated the order cycle for the "PF1539" product. Based on the two recorded orders, the median and mean interval is 23 days. Since the predicted date of the next order, November 5th, is in the past, a risk has been identified, though I rate my confidence as low given the limited data. The outlier analysis will begin next.


**Finalizing Recommendations**

I've completed the analysis of the "PF1539" product. The order is considered overdue, with the predicted date of November 5th already passed. I recommend ordering 2 units. The analysis also revealed a stable trend and no seasonality, however confidence is low due to limited historical data.


**Revising Risk Assessment**

I've reevaluated the risk and refined the predicted order date. Considering the 23-day cycle and the past order on October 13th, the predicted date was November 5th, which has passed. Since the horizon is 30 days, I maintain a "YES" risk rating.


**Summarizing Key Findings**

I've just finalized the analysis of the "PF1539" product. Based on two orders, the cycle is 23 days, and the predicted order date was November 5th, which is in the past. Therefore, I recommend ordering 2 units. I've rated confidence as low due to the limited historical data. The cycle is stable, and there is no seasonality.




</details>

</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Un cycle unique de 23 jours a été identifié sur les données récentes
- **Cycle médian (jours)**: 23
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle calculé entre le 20/09 et le 13/10 de 23 jours. La date théorique de réapprovisionnement (05/11) étant passée d'un jour par rapport à la date actuelle (06/11), le risque de commande immédiate est élevé. Les volumes sont faibles (2u et 4u récemment), la baseline est établie à 3 unités (médiane/moyenne de l'historique récent), cohérent avec le volume N-1 (2u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,068 tokens
- **Output**: 1,864 tokens
- **Total**: 3,932 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the sales data for FILOU BOULETTES TOMATE. Focusing on the 30-day horizon from November 6th, 2025, I'm analyzing the 2025-10-13 sales data of 4 units. I need to understand this to project future demand.


**Assessing Order Imminence**

I'm now zeroing in on the likelihood of an upcoming order for FILOU BOULETTES TOMATE. Considering the 23-day cycle, the last order on 2025-10-13 implied an overdue order. Given the current date, I'm expecting an order to be placed soon, or is already late.


**Predicting Future Demand**

The assessment of FILOU BOULETTES TOMATE continues. With only two recent data points, I'm working with a low confidence level for the CV. My preliminary calculations place the mean quantity at 3 units, considering the upward trend from 2 to 4. I'm taking into account the lack of seasonality.


**Confirming Imminent Order**

Given the cycle of 23 days, I predicted an order was due yesterday, on November 5th. Since no order has been recorded, the risk level is now high. My primary focus is on an order within the next 24 hours. The baseline quantity remains at 3.


**Determining Risk Factors**

I'm now establishing the risk profile for FILOU BOULETTES TOMATE. Using the 23-day cycle and the passed predicted order date of November 5th, the risk is deemed high. Therefore, the next order is due immediately. My baseline quantity, derived from a median calculation, remains at 3.




</details>

</details>


<details>
<summary><strong>5. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle détecté d'environ 23 jours
- **Cycle médian (jours)**: 23
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle de 23 jours a été identifié entre les deux dernières commandes (septembre et octobre). La date théorique de la prochaine commande (05/11/2025) étant échue par rapport à la date actuelle (06/11/2025), une commande est prévue immédiatement dans l'horizon de 30 jours. La quantité est calculée sur la moyenne des commandes récentes (2u et 4u), la comparaison avec N-1 (2u en sept 2024) confirmant la cohérence du volume de base.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,065 tokens
- **Output**: 2,032 tokens
- **Total**: 4,097 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering the Product's Data**

I'm currently focused on the product [PF0084] FILOU CARBONNADES. It looks like the product was last ordered on the 13th of October and the 20th of September. I'm examining a 30-day horizon from November 6th. Further investigation is needed to determine the best approach.


**Evaluating Order Imminence**

I've examined the product's ordering history, calculating the interval between the two most recent orders. With a cycle median of 23 days and the last order on October 13th, I predicted a next order around November 5th. Since it's now November 6th, I deem an order is likely imminent and have flagged a potential risk. However, confidence in this is low, given the scarcity of data.


**Calculating Expected Quantity**

I've moved on to analyzing the quantities ordered. With only two data points, the coefficient of variation is calculated at 47%. I'm leaning toward using the median, which is 3, because the dataset is so small, and the logic suggests some degree of stability in the order quantity. Examining seasonality shows the quantities in the last two years are very similar in September.


**Calculating Recommended Order**

I've determined a recommended quantity of 3 units, aligning with the median of the order history, since the dataset is small. There's a weak seasonality observed with volumes in the last two years that are very similar in September. The reasoning confirms that this is calculated from the mean of the last two observed data points, excluding no outliers.


**Synthesizing the Recommendation**

I'm now consolidating the data into a final recommendation. The analysis suggests an order is likely overdue, with a predicted order date of November 5th. I'm recommending 3 units, based on the average of the last two orders, considering the limited data available.


**Finalizing Order Details**

I'm now integrating all findings into a concise recommendation.  The product is overdue for an order, with a predicted date of November 5th.  Based on the two previous orders, I am recommending 3 units, while acknowledging the limited data. The increasing trend in the last two orders is considered. The reasoning highlights the cycle time and the imminent need to reorder.




</details>

</details>


<details>
<summary><strong>6. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 68u vs Médiane: 70u (Réel: 65u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 68u
- 📊 **Baseline calculée**: 67.5u
- 📊 **Médiane historique**: 70u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 3u (4.6%)
- 📉 **Erreur Médiane**: 5u (7.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 68u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel identifié
- **Cycle médian (jours)**: 32
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-14 (dans 8j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Intervalle de 32 jours entre les commandes du jeudi 11/09 et du lundi 13/10
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec seulement 2 points de données, un cycle de 32 jours est détecté (11/09 à 13/10). La prochaine commande est prévue au 14/11/2025, soit à J+8 de la date actuelle, entrant dans l'horizon des 30 jours. Les quantités sont stables (70 et 65), générant une baseline médiane de 67.5. L'historique restreint limite la confiance globale.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,056 tokens
- **Output**: 2,547 tokens
- **Total**: 4,603 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Order Quantities**

I'm currently focused on the Filou Mayonnaise product, specifically PF0121. My analysis now includes the order quantities from October 13th, which was 65 units, and September 11th, which was 70 units. My task is to predict the next order quantity within the next 30 days based on these recent data points.


**Calculating Order Frequency**

I've determined the interval between orders for Filou Mayonnaise (PF0121) to be 32 days, derived from the two available data points. Consequently, I predict the next order will be on November 14th, 2025. Given today's date, this is within the 30-day timeframe and highlights a low confidence level due to the limited data.


**Projecting Order Quantity**

I've moved on to the quantitative prediction. With a calculated median of 67.5 units, I'm predicting the next order quantity will be approximately 68 units, rounded. Despite the low number of data points, I find that the Coefficient of Variation for the quantities is only 5.2%. My confidence remains low.


**Evaluating Predictions and Analysis**

I'm now consolidating all the findings. The predicted order date is November 14th, with approximately 8 days left. The quantity is estimated at 68 units, based on the median. I will rate confidence as low, given the insufficient historical data for the model. My final report is almost ready.


**Concluding the Analysis**

I've finalized my analysis and generated the prediction report. The next order date is predicted for November 14th, with approximately 8 days remaining. The recommended order quantity is 68 units. The confidence level remains low, reflecting the limited historical data available. The JSON output will soon be ready.


**Summarizing Data Insights**

I'm now fully immersed in the details, meticulously checking every calculation for Filou Mayonnaise (PF0121). Dates, intervals, and quantities have been re-evaluated, confirming the 32-day cycle and the 68-unit order prediction. The final adjustments include refining the confidence level and drafting the reasoning for the final report.




</details>

</details>


<details>
<summary><strong>7. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 20u vs Médiane: 20u (Réel: 30u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 20u
- 📊 **Baseline calculée**: 20u
- 📊 **Médiane historique**: 20u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 10u (33.3%)
- 📉 **Erreur Médiane**: 10u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 20u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande tous les 23 jours environ
- **Cycle médian (jours)**: 23
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est limité à deux points de données (20u le 20/09 et 20u le 13/10). L'intervalle calculé est de 23 jours. Selon ce cycle, la prochaine commande était prévue pour le 2025-11-05. La date actuelle étant le 2025-11-06, le produit est considéré en risque de rupture immédiat car la commande théorique est due. Les quantités sont parfaitement stables à 20 unités sur les deux occurences.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,050 tokens
- **Output**: 1,664 tokens
- **Total**: 3,714 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Data**

I'm currently looking at the sales data for [PF0094] FILOU MOUTARDE, specifically focusing on the 700 GR size.  I've pulled recent sales history and have noted the dates and times. I'm now diving into the intervals between sales to see if I can identify any patterns or trends.


**Assessing Order Risk**

I've finished the interval analysis for [PF0094] FILOU MOUTARDE, size 700 GR. With only two data points, the median cycle is 23 days. I've predicted the next order date to be 2025-11-05, which is already in the past. Therefore, there's a risk of a missing order, although the confidence in this prediction is low due to limited data. I've flagged this as a 'oui' risk.


**Refining Risk Assessment**

Now I'm delving deeper into the risk profile. Although the initial assessment flagged a "oui" risk, I'm adjusting for the low confidence stemming from the limited data (two orders). I'm also analyzing the stable quantity trend and applying the baseline quantity recommendation. The analysis is nearly complete.


**Calculating Recommendation Parameters**

I've completed the in-depth analysis of the data, and validated the key elements. I've re-examined the 'days_until_next' field, adjusting my approach for overdue orders; in this instance, it's -1. Now I'm synthesizing all the data to derive the final order recommendation, which includes an order of 20 units.


**Synthesizing Order Details**

I've completed the synthesis of the data and I am generating the final recommendation. Due to the order being overdue, with only two data points in the history, the confidence remains low, resulting in a recommended order for 20 units. I am double-checking for consistency.




</details>

</details>


<details>
<summary><strong>8. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM: 10u vs Médiane: 7u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 10u
- 📊 **Baseline calculée**: 10u
- 📊 **Médiane historique**: 7u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 7u (233.3%)
- 📉 **Erreur Médiane**: 4u (133.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 10u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de 23 jours identifié
- **Cycle médian (jours)**: 23
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique restreint (2 commandes récentes) mais cohérent avec N-1. Un cycle de 23 jours a été identifié entre le 2025-09-20 et le 2025-10-13, prédisant une commande pour le 2025-11-05. Étant donné que nous sommes le 2025-11-06, la commande est imminente. La quantité de 10 unités est retenue car elle correspond exactement à la commande de l'année précédente (octobre 2024) et à la dernière commande significative.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,066 tokens
- **Output**: 2,048 tokens
- **Total**: 4,114 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Mustard Demand**

I'm currently focused on projecting demand for the FILOU MOUTARDE product over the next month. Right now, I'm examining its recent sales data, from October and September of this year, and comparing them with the same period last year. The aim is to get a handle on seasonal trends.


**Projecting Order Timing**

I've just finished calculating the predicted next order date as November 5th, which has already passed. Given the single interval and the lack of data, confidence is low, and the risk assessment leans towards a "YES" for an upcoming order. The predicted date is confirmed.


**Evaluating Order Quantities**

I've just run a Coefficient of Variation (CV) on the order quantities. With a high CV of 76%, I'm now leaning toward using the most recent order quantity as the forecast. The N-1 data confirms the importance of order timings and sizes for the month of October. The last order of 10 units is therefore likely the expected volume.


**Analyzing Final Recommendation**

I've just finished the final recommendation for the FILOU MOUTARDE order. My analysis of the order history and the application of the business rules point towards an immediate order for 10 units. Given the low data volume, my confidence in this recommendation is low, but the evidence is consistent.


**Predicting the Upcoming Order**

I've just finished the full prediction cycle for the FILOU MOUTARDE product. The key results indicate an immediate order for 10 units, with low overall confidence. My analysis relies on the recent past, the seasonal pattern, and the order history, and is consistent with N-1 data.




</details>

</details>


<details>
<summary><strong>9. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 44u vs Médiane: 44u (Réel: 40u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 44u
- 📊 **Baseline calculée**: 44u
- 📊 **Médiane historique**: 44u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 4u (10.0%)
- 📉 **Erreur Médiane**: 4u (10.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 44u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de 23 jours identifié sur l'historique récent
- **Cycle médian (jours)**: 23
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle de 23 jours a été calculé entre les deux commandes de septembre et octobre (23 jours). La date prédite selon ce cycle était le 2025-11-05. Étant donné que la date actuelle est le 2025-11-06, la commande est théoriquement en retard ou imminente, ce qui confirme un risque élevé de rupture dans l'horizon des 30 prochains jours. La quantité est restée strictement stable à 44 unités sur les deux derniers points. La donnée N-1 (52 unités) présente un écart de +18,2% par rapport à l'actuel, ce qui reste dans la marge de 20% pour une saisonnalité jugée faible (weak). La recommandation est donc basée sur la médiane des quantités récentes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,073 tokens
- **Output**: 2,578 tokens
- **Total**: 4,651 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Product Data**

I'm currently focused on the product [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L, and its associated data. The horizon is set to 30 days, ending on 2025-12-06. I've noted a recent history data point from 2025-10-13, with a value of 44u. Now I'll be analyzing further data points.


**Predicting Order Frequency**

I've just finished calculating the predicted next order date as November 5th, which has already passed. This indicates a potential issue, as orders are predicted to be due. I'm now looking at the cycle; it's ~23 days. The next expected date after this window would then be November 28th.


**Evaluating the Risks**

My analysis indicates a high risk of stockout. The predicted order date was November 5th, which is already in the past, suggesting a late or missed order. With a ~23-day cycle, the next expected date is November 28th, well within the 30-day window. I'll need to consider the quantity based on the N-1 data.


**Confirming the Order Quantity**

I've reviewed the historical data and calculated a recommended order quantity of 44u, derived from the stable recent values. I've also identified a "weak" seasonality impact, suggesting a minor upward adjustment might be needed. The confidence on this is low, due to the limited number of data points available.


**Determining the Final Recommendation**

My analysis is complete. The system flags the order as overdue, with a predicted due date of November 5th, and a next expected date of November 28th. The recommended quantity remains at 44u, with a low confidence level due to the limited historical data. The reasoning is: a 23-day cycle and a weak seasonality.


**Summarizing My Conclusions**

The analysis is now complete. The predicted order date of November 5th has already passed, indicating an overdue requirement. The recommended order quantity is 44u, with low confidence due to limited data, and a 23-day cycle. The next expected date is November 28th.


**Concluding the Analysis**

I've completed the analysis, determining the order is overdue, with a predicted date of November 5th. The recommended quantity remains 44u, with low confidence due to limited historical data. The reasoning is a 23-day cycle and a weak seasonality. The next action suggested is to address the overdue need immediately.




</details>

</details>


<details>
<summary><strong>10. [PF0093] FILOU MOUTARDE 300GR</strong> - LLM: 30u vs Médiane: 35u (Réel: 50u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 30u
- 📊 **Baseline calculée**: 30u
- 📊 **Médiane historique**: 35u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 20u (40.0%)
- 📉 **Erreur Médiane**: 15u (30.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 30u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Données insuffisantes (cycle mensuel de 30 jours présumé)
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-10-06
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité avec une seule commande enregistrée le 2025-10-06 pour 30 unités. Le délai écoulé depuis la dernière commande (31 jours) suggère qu'une nouvelle commande est imminente si l'on suppose un cycle de réapprovisionnement mensuel classique. En l'absence de données N-1 ou d'autres points de comparaison, la quantité recommandée est basée sur la dernière observation connue.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,022 tokens
- **Output**: 1,500 tokens
- **Total**: 3,522 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Sales Trajectory**

I'm currently focused on the sales trajectory for FILOU MOUTARDE, specifically for the next 30 days. With only a single data point from last month (30 units sold), the forecast is tricky. I'm exploring different methods to account for this limited history, considering potential growth and external factors. The aim is to create a robust and informed projection.


**Projecting Demand from Limited Data**

I'm analyzing the data for product [PF0093] FILOU MOUTARDE, which has a single sales data point. With only one order from last month, calculating a growth trajectory is challenging. I'm focused on a monthly cycle based on the one data point, with a reorder due date of yesterday. Now, I am focused on the binary decision of whether to assume the same order volume or incorporate potential growth.


**Assessing Cycle and Outliers**

My analysis is converging on a monthly cycle for [PF0093] FILOU MOUTARDE, but the lack of history limits confidence. The outlier analysis is a non-event due to the singular data point. The baseline projection currently stands at 30 units, with a "stable" trend direction. The next step is a more thorough risk assessment.


**Determining Order Recommendations**

I'm now deep in the final analysis of [PF0093] FILOU MOUTARDE, leveraging the insights from earlier steps. The system recommends ordering 30 units, mirroring the single historical data point. The confidence remains low due to the limited dataset. The analysis highlights an urgent need to reorder based on the assumed monthly cycle, with yesterday being the theoretical reorder date.


**Determining Order Quantities**

I've completed the analysis of [PF0093] FILOU MOUTARDE and am now solidifying the order recommendation. With only one data point available, the cycle calculation relies on the time elapsed since the last order. This suggests a monthly cycle. The system recommends ordering 30 units, mirroring the initial data point. The confidence remains low, and the need for reordering is immediate.




</details>

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-24 11:20:40: 30u
- 2025-09-20 05:57:22: 10u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 07:08:28: 20u
- 2024-10-03 07:50:47: 50u

**✅ Quantité LLM**: 30u (confidence: low)
**📊 Quantité Réelle**: 30u

</details>


<details>
<summary><strong>2. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 40u
- 2025-09-20 05:57:22: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: low)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 2u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 4u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:22:41: 2u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [PF0084] FILOU CARBONNADES 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 4u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:22:41: 2u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>6. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 65u
- 2025-09-11 08:06:57: 70u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 68u (confidence: low)
**📊 Quantité Réelle**: 65u

</details>


<details>
<summary><strong>7. [PF0094] FILOU MOUTARDE 700 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 20u
- 2025-09-20 05:57:22: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: low)
**📊 Quantité Réelle**: 30u

</details>


<details>
<summary><strong>8. [PF0096] FILOU MOUTARDE 3 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 10u
- 2025-09-20 05:57:22: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 07:08:28: 10u

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>9. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 44u
- 2025-09-20 05:57:22: 44u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 07:08:28: 52u

**✅ Quantité LLM**: 44u (confidence: low)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>10. [PF0093] FILOU MOUTARDE 300GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:06:02: 30u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 30u (confidence: low)
**📊 Quantité Réelle**: 50u

</details>




---

## False Positives (3)

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
| [PF0075] FILOU CHASSEUR  10 L | 10 | Stock prédit: 6.1u (18j restants) → prédit 10u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 10 | Stock prédit: 6.1u (18j restants) → prédit 10u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 40 | Stock prédit: 0.0u (0j restants) → prédit 40u mais non commandé |


---

## False Negatives (1)

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
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 40 | En rupture (-19j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T08:05:55.954Z*
