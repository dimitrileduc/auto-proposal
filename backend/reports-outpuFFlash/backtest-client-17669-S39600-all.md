# Rapport Backtest - Client Epicerie Uhoda Beaufays

## Contexte

- **Client** : Epicerie Uhoda Beaufays (ID: 17669)
- **Commande réelle** : S39600
- **Date commande** : 2025-10-08 07:26:15
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 38
- **Tokens**: 26,313 input + 87,427 output = 113,740 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 30 produits prédits, 10 corrects |
| **Rappel** | 83.3% | 12 produits réels, 10 détectés |
| **F1-Score** | 47.6% | Score équilibré global |

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
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 15.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
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
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.4u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier fluctuant entre 7 et 41 jours avec une médiane de 19 jours.
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-10-01
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen/médian suggère une prochaine commande aux alentours du 20 octobre, soit dans moins de 15 jours, ce qui justifie un risque de rupture imminent selon le seuil des 40 jours. Les quantités sont faibles mais constantes (entre 1 et 2 unités) ; la quantité 1 étant la plus fréquente (mode) et la dernière enregistrée, elle est recommandée pour la prochaine commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,363 tokens
- **Total**: 2,062 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Delivery Intervals**

I'm currently analyzing the delivery intervals for product REB01, focusing on the past few months. Initial observations show varying intervals, with the most recent delivery on October 1st. I'm noting the differences in lead times to identify potential patterns.


**Calculating Future Orders**

I've quantified the delivery intervals, finding a median of approximately 18.5 days. Based on the last delivery on October 1st, I predict the next order around October 19th or 20th. Considering today's date, there's a 12-day window, presenting a potential risk. I'm focusing on quantity stability, trending toward 1-2 units per order.


**Evaluating Risk Factors**

I've just finished the analysis, and the data reveals a risk. The next order is estimated around October 20th. With today being October 7th, a 13-day window presents a potential risk. I recommend ordering 1 unit, given the low volume and somewhat inconsistent intervals. My confidence is medium.


**Determining the Order Quantity**

The product's order frequency is irregular, but averages roughly every three weeks. Recent orders are for 1 and 2 units. The median is 1, and 1 is also the mode. Given the low, stable volume, I'm recommending a single unit for the upcoming order.




</details>

</details>


<details>
<summary><strong>2. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle variable avec une médiane identifiée à 47 jours, malgré une accélération ponctuelle en septembre (13 jours).
- **Cycle médian (jours)**: 47
- **Dernière commande**: 2025-09-16
- **Prochaine prédite**: 2025-11-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le cycle médian calculé sur l'historique long est de 47 jours. En se basant sur la dernière commande du 16 septembre, la prochaine échéance est prévue pour le 2 novembre 2025. Avec un délai de 26 jours restant, le risque de rupture est considéré comme présent selon le seuil de 40 jours. La quantité recommandée de 2 unités s'aligne sur la médiane stable et le volume de la dernière commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 823 tokens
- **Output**: 2,491 tokens
- **Total**: 3,314 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Quantities**

I've been analyzing the production quantities for LV132, focusing on the last three months. It seems there were only two recorded production runs. The time interval between these runs appears significant – around thirteen days. I'm now looking for patterns that might explain these intermittent production cycles.


**Calculating Production Intervals**

I've calculated the median interval between LV132 production runs to be 47 days, based on historical data. Using this, and the last order date, I predicted a next production date. I'm now comparing the current date to this predicted date to determine if a production alert is warranted, given a potential risk of supply disruption.


**Evaluating Supply Disruption Risk**

Based on the calculated median production interval, the next production date is predicted for November 2nd. Given today's date and the recent 13-day production cycle, the 26-day gap until the predicted date suggests a moderate risk of supply disruption. The alert criteria are triggered.


**Calculating Supply Disruption Risk**

Considering the 26-day gap until the predicted production date of November 2nd, and the 21 days since the last order, a potential supply disruption warrants attention. Given a historical median cycle of 47 days and the recent 13-day interval, I confirm that the alert criteria are met, indicating a moderate risk, and production quantities should remain at the baseline.


**Determining Risk Factors**

I'm now consolidating the data, re-evaluating the production history to refine my risk assessment. A recent 13-day production cycle, combined with the 47-day median and 26 days until the predicted date, points to moderate risk. Confirmed alert, baseline quantity maintained.


**Synthesizing Final Recommendations**

I've finalized my analysis. The median production cycle is 47 days, while recent data reveals a shorter 13-day interval. Given the 26-day window until the predicted production date and the criteria, I'm recommending a baseline quantity of 2. All data confirms a moderate risk of supply disruption.


**Concluding Analysis & Output**

I'm now satisfied with the analysis, particularly the risk assessment and recommendation. The model output is validated, including dates and quantity. I've confirmed all criteria are met for a moderate supply disruption risk and a baseline quantity of 2 units. The analysis is complete.




</details>

</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 2u
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
- **Pattern temporel**: Intervalle irrégulier mais cycle médian de 49 jours
- **Cycle médian (jours)**: 49
- **Dernière commande**: 2025-09-16
- **Prochaine prédite**: 2025-11-04 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen indique une prochaine commande début novembre (soit dans environ 28 jours), ce qui rentre dans la fenêtre de risque de 40 jours. Bien que la médiane historique soit de 2 unités, la tendance récente s'est stabilisée à 1 unité par commande (septembre et août 2025), ainsi qu'en septembre 2024. Une commande de 1 unité est recommandée pour couvrir la demande imminente sans surstocker.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 823 tokens
- **Output**: 1,549 tokens
- **Total**: 2,372 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Product Velocity**

I'm currently focused on the product velocity of LV129. I've analyzed recent sales data. It appears there was one unit sold on 2025-09-16, and another on 2025-08-27, with a 20-day difference between those purchases. I'm now calculating the average time between sales.


**Refining Velocity Predictions**

I've calculated the median interval between sales, currently at 49 days. Based on that, I've projected the next order date for LV129 to be around November 4th, placing it 28 days from now. I've also examined the quantities sold, with a median of 2 units. It appears the demand is stable.


**Refining Predictions & Recommendations**

I've examined the product's historical order data to refine my estimates. The median interval between sales remains at 49 days, and I've factored in recent sales of a single unit. Based on this, I'm predicting the next order around November 4th, which is about 28 days away. I'm now recommending an order of one unit.


**Refining Order Recommendations**

I'm now integrating all historical order data to solidify my projections. The median interval remains 49 days. Considering recent demand, I forecast the next order around November 4th, in approximately 28 days. Given the low volume and recent sales of one unit, I recommend ordering just one unit, to avoid overstocking.




</details>

</details>


<details>
<summary><strong>4. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 28 jours avec un raccourcissement récent à 13 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-16
- **Prochaine prédite**: 2025-10-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande médian est de 28 jours. La dernière commande datant du 16 septembre, la prochaine occurrence est prévue autour du 14 octobre (dans 7 jours). Étant donné la régularité absolue des quantités (1 unité à chaque commande), une recommandation de 1 unité est préconisée pour couvrir le besoin imminent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 672 tokens
- **Output**: 1,309 tokens
- **Total**: 1,981 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales Patterns**

My analysis is zeroing in on the sales data for REB11 chips. I'm noticing a sporadic pattern, with single-unit sales on 2025-09-03 and 2025-09-16. This warrants further investigation to understand these low sales figures.


**Calculating Order Frequency**

I've calculated the median interval between the single-unit orders of REB11 chips, which turns out to be 28 days. This allows for prediction of the next order date, which should be around October 14th. Given the current gap of 21 days since the last order, there's a risk of needing more in the next month.


**Evaluating Cycle Stability**

My focus has shifted to the stability of the 28-day cycle for the REB11 chips. The latest calculation confirms the median interval is indeed 28 days, however, one earlier interval was only 13 days. This variation is causing me to analyze the risk of inventory shortages, since the next order is estimated in 7 days.


**Forecasting Demand Refinement**

My calculations on REB11 chip demand are complete. I'm now confident in predicting the next order will be around October 14th, given the consistent 28-day cycle. The short 13-day interval in the past has been considered, but the median interval is indeed 28 days. A re-stocking is highly recommended.




</details>

</details>


<details>
<summary><strong>5. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle intermittent variant entre 20 et 50 jours
- **Cycle médian (jours)**: 35
- **Dernière commande**: 2025-09-16
- **Prochaine prédite**: 2025-10-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La fréquence de commande est irrégulière (intervalle de 50 puis 20 jours) avec une médiane de 35 jours. La dernière commande datant du 16 septembre, la prochaine échéance théorique se situe vers le 21 octobre. Puisque cette date est à moins de 40 jours du présent (14 jours restants), un risque de rupture est identifié. La quantité commandée est systématiquement de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 645 tokens
- **Output**: 1,067 tokens
- **Total**: 1,712 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product History Closely**

I'm currently focused on the sales history of the ReBEL chips, specifically the premium black pepper flavor. The data shows a couple of sales in the past few months: one unit in September, and another in August. I'm keen to understand the recent trends and potential seasonality impacts. The lack of data before July is a slight hindrance.


**Forecasting Future Demand**

The sales cycle appears to be irregular, with a median of approximately 35 days. Based on this, I've projected the next order date for the ReBEL chips premium black pepper to be around October 21st. There's a risk identified, as 14 days remain until the predicted sale. I'm recommending a single unit order based on consistent past sales.


**Calculating Order Projections**

I've refined the sales cycle analysis for the ReBEL chips. My calculations now pinpoint the next order date as October 21st, based on the median cycle. There's a 14-day window before this predicted date, which means I've flagged a risk. I'm sticking with a 1-unit order recommendation, confident in its alignment with previous sales.




</details>

</details>


<details>
<summary><strong>6. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Hebdomadaire (cycle de 7 jours détecté le mercredi)
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-10-08 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Les commandes historiques ont été passées le mercredi. La date actuelle étant un mardi, la prochaine commande théorique est prévue pour demain.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle hebdomadaire de 1 unité a été identifié fin août. Bien qu'aucune commande n'ait été enregistrée depuis 34 jours (soit 4 cycles manqués), ce délai reste inférieur au seuil de risque de 40 jours défini. Le pattern de quantité étant parfaitement stable (1u), on maintient cette recommandation pour la prochaine commande théorique attendue demain.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 621 tokens
- **Output**: 5,878 tokens
- **Total**: 6,499 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Data Points**

I'm analyzing the product data for TEN03, specifically the organic white tea with blueberry. The recent sales history from the last three months shows a purchase of 1 unit on August 27th and another on September 3rd. I'm noting the interval between these purchases to identify any patterns.


**Assessing the Order Risk**

I've calculated the time since the last order at 34 days, exceeding the typical 7-day cycle. Applying the B2B logic, this overdue cycle strongly suggests an active need for the product. The risk assessment aligns with a "RISQUE OUI" flag, warranting further investigation into the customer's needs and stock levels.


**Evaluating the Frequency Pattern**

I'm synthesizing the frequency pattern, noting the weekly cycle that abruptly stopped 34 days ago. This is key, so I'm summarizing: "Weekly order detected, cycle of 7 days, but activity ceased for 34 days." The model sees no outliers or seasonality impact due to limited data. The trend direction is considered stable as the quantities are identical. I will recommend 1 unit, given the previous ordering behavior.


**Calculating the Recommendation**

I've finalized the analysis, including the predicted next order date (already passed). I'm confident about the 1-unit recommendation, despite the limited data. The "RISQUE OUI" flag is still triggered due to the 34-day gap exceeding the typical weekly cycle. I've noted the low confidence in the frequency pattern because of the small sample size, despite the consistent quantities.


**Determining the Parameters**

I'm now calculating the final values, specifically `days_until_next` and the recommended quantity. The prediction model suggests an order is overdue by 27 days, but the system logic flags a "RISQUE OUI" given the 34-day gap. Despite the low sample size, I'm sticking with a 1-unit recommendation, as the quantities have been consistently 1.


**Synthesizing the Reasoning**

I'm now weaving together the findings, highlighting the 7-day cycle and the 34-day lapse, triggering the "RISQUE OUI" flag. I'm focusing on the predicted order date, which, while overdue, still indicates an upcoming order. I'll recommend one unit, adhering to the historical buying pattern.


**Predicting the Upcoming Order**

I've revised the "predicted next date" to October 8th, while also documenting the historical cycle. Even with the overdue status, I'm maintaining the 1-unit recommendation. Although the time since the last order is a concern, I've decided to highlight the recent buying pattern, which is a weekly frequency.


**Finalizing the Recommendation**

I've decided to refine the predicted order date to October 8th, reflecting the next possible cycle. I'm noting the 34-day gap since the last order, triggering the "RISQUE OUI" flag. Despite the overdue status, I'm recommending 1 unit, aligning with historical patterns and the identified 7-day cycle. My confidence remains low, based on the limited data.


**Structuring the Response**

I'm now formatting the response, carefully including the `day_cycle_analysis`, and fine-tuning the `predicted_next_date` to align with the Wednesday cycle, using the existing data points. This should result in a single, complete JSON object.


**Structuring the Output Format**

I'm now carefully crafting the final JSON response, paying close attention to formatting and details. I've re-reviewed all fields to be confident in the data. All the fields in `analysis` are good and the `reasoning` and the `confidence` level are perfect. The schema is followed completely.


**Confirming the Frequency Pattern**

I'm now consolidating the frequency pattern, last order, and current date to finalize the recommendation. I've reevaluated the days until the next order, now predicting October 8th. Despite the 34-day gap, the low confidence from the limited data persists. I'm maintaining the 1-unit recommendation.


**Confirming Final Details**

The analysis is complete, including the final JSON format. I've re-reviewed all calculations, from the frequency pattern to the 1-unit recommendation. My confidence is "low," justified by the small data set, even though the order is potentially due. The "day_cycle_analysis" is included, and the next order is predicted for Wednesday, October 8th.


**Refining the Output**

I'm now carefully crafting the final JSON response, paying close attention to formatting and details. I've re-reviewed all fields to ensure accuracy, including the analysis, reasoning, and the appropriate confidence level. The schema is followed completely.


**Refining the Prediction Logic**

I'm now revising the reasoning to specify the 7-day, Wednesday cycle. Even with the overdue status, and the 34-day gap since the last order, I'm sticking with a 1-unit recommendation, which is in line with the historical pattern. I'll highlight that the next order is predicted for October 8th. The low confidence remains due to the limited data.


**Formulating the Final Response**

I'm now putting everything together, including the analysis, reasoning, and final JSON output. I'm focusing on providing the most concise and accurate information, adhering strictly to the required schema, including the day cycle, and the confidence levels.


**Confirming Final Checks**

I'm now fully confident about the finalized JSON response, and I've reviewed every detail. All validation checks have passed, including the correct inclusion of `day_cycle_analysis`, and `days_until_next`. The recommendation is set to 1 unit.


**Synthesizing the Reasoning**

I'm now integrating all the factors, including the 7-day cycle, the 34-day lapse since the last order, triggering the "RISQUE OUI" flag. Despite the overdue status, the weekly pattern persists, and the recommended quantity is one, considering the customer's behavior. My confidence remains low.




</details>

</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne de 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-10-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est d'environ 28 jours. La dernière commande datant du 2025-09-03, nous sommes déjà à 34 jours d'intervalle, ce qui suggère qu'une commande est imminente ou en retard. La quantité historique est parfaitement stable à 1 unité par commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 645 tokens
- **Output**: 1,389 tokens
- **Total**: 2,034 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Recurring Purchases**

I'm focusing on the ReBEL chips, specifically the piment citron flavor. I've noted the recent purchase history - two units in August and September. I'm trying to determine the frequency, looking for a clear pattern, and then analyzing the implications of this pattern.


**Assessing Potential Stockout Risks**

I've further analyzed the recent purchase data for the ReBEL chips. The intervals vary between 7 and 50 days, but the average is about 28 days. Given that my last order was 34 days ago, a new order is probably overdue. I'm now focused on the implications of a potential stockout risk based on this timing.


**Predicting Future Demand**

The analysis confirms the need for an order, having passed the predicted date of October 1st. Though the cycle is irregular, averaging around 28 days, the last order was 34 days ago, indicating a strong likelihood of imminent need. The consistency of the 1-unit quantity simplifies planning. The confidence level is medium overall, though high for this imminent need.


**Determining Order Imminence**

I'm focused on the risk assessment now, since the predicted date of October 1st has already passed. Examining the logic and the elapsed time since the last order, I've confirmed a high probability of needing to place a new order. The consistent quantity of one unit further simplifies the decision-making process.




</details>

</details>


<details>
<summary><strong>8. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle d'environ 43 jours
- **Cycle médian (jours)**: 43
- **Dernière commande**: 2025-08-27
- **Prochaine prédite**: 2025-10-09 (dans 2j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commande habituellement en milieu de semaine (mardi/mercredi)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes espacées de 43 jours pour une unité chacune. Sur la base de ce cycle, la prochaine commande est prévue pour le 9 octobre 2025. Étant donné que nous sommes le 7 octobre, l'échéance est imminente (sous l'horizon de 40 jours), ce qui justifie un réapprovisionnement d'une unité pour couvrir le besoin prévu.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 621 tokens
- **Output**: 1,034 tokens
- **Total**: 1,655 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently focused on the sales history for the NOD01 product, specifically the pink grapefruit lemonade. The data from August 27th and July 15th, 2025, shows sporadic sales – one unit on each of those dates. I'm now turning my attention to the N-1 history to establish a more comprehensive sales pattern.


**Projecting Order Timing**

I've calculated the cycle between the two recorded orders for the pink grapefruit lemonade. There's a 43-day interval between sales. Based on this, and given the last order was on August 27th, I predict the next order around October 9th. There's a high risk of needing another unit in two days.


**Reassessing Inventory Needs**

Based on the 43-day cycle, my analysis continues to forecast a need for one unit of the pink grapefruit lemonade on October 9th. With today being the 7th, I'm flagging an imminent risk of stock depletion. I'm focusing on the low sales volume and lack of trend data to adjust my confidence level.




</details>

</details>


<details>
<summary><strong>9. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle variable entre 50 et 105 jours
- **Cycle médian (jours)**: 50
- **Dernière commande**: 2025-07-15
- **Prochaine prédite**: 2025-09-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian habituel est d'environ 50 jours. La dernière commande remonte à 84 jours (15 juillet 2025), ce qui place la date actuelle (7 octobre) bien au-delà de l'échéance théorique de réapprovisionnement. Malgré une tendance à la baisse du volume (passant de 3-4u à 1u récemment), l'absence prolongée de commande (84 jours) et l'historique de commandes en fin de Q3/début Q4 suggèrent un risque de rupture immédiat. Une quantité de 2 est recommandée pour stabiliser le stock.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 743 tokens
- **Output**: 2,258 tokens
- **Total**: 3,001 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Timeline**

I'm currently focused on the product timeline for LV134, specifically the LV BIO Tartinade Olives Vertes. I see a purchase of 1 unit on 2025-07-15, and prior to that, a unit purchased on 2024-09-26. I'm noting the dates in relation to the target date.


**Calculating Prediction Accuracy**

I've calculated a predicted reorder date of 2025-09-03, based on the median cycle of 50 days, which now appears off. The target date, 2025-10-07, is already past the predicted date. Further, the 84-day gap since the last order exceeds the shortest cycle in the recent history, indicating a risk.


**Revisiting Order Intervals**

I'm now cross-referencing the calculated predicted reorder date with the target date and recent order intervals. The 84-day gap since the last order seems to be the current focus, along with historic trends. The target date falls beyond my initial prediction. I am also investigating the impact of order volume changes.


**Evaluating Cycle Irregularity**

I'm now focusing on the product's irregular cycles, specifically LV134. I've noted a significant gap of 292 days and a median cycle of approximately 50 days, suggesting inconsistency. The target date falls outside my prediction, which now has a strong risk factor. Furthermore, I've observed a decreasing trend in order volume.


**Refining Recommendations & Risks**

I'm now further analyzing the product's ordering pattern, and specifically, the recommended quantity. I've considered that the baseline should be 2, but could be 1, because recent orders are for only one unit. I now confirm the risk as high, given the 84 days since the last order and the historical cycles, which indicates the need for an immediate order.


**Determining Immediate Action**

I'm now prioritizing the urgency of the order for LV134, given the 84-day gap since the last purchase, which has passed my prediction. Despite uncertainty, and a declining trend in order volume, I've confirmed a high-risk situation. My recommendation is now clear: order two units immediately, due to the extended period since the last replenishment.




</details>

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-22 13:55:28: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**📊 Quantité Médiane (fallback)**: 1u
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 2u
- 2025-08-06 06:23:24: 2u
- 2025-07-15 09:58:18: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 2u
- 2025-09-03 06:40:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 4u
- 2024-07-01 06:32:15: 1u
- 2024-05-13 08:03:20: 1u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 2u
- 2023-10-24 07:06:59: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 2u
- 2024-07-01 06:32:15: 2u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u
- 2023-10-24 07:06:59: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-09-03 06:40:21: 1u
- 2025-08-06 06:23:24: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-27 06:19:11: 1u
- 2025-07-15 09:58:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-15 09:58:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-01 06:32:15: 3u
- 2024-05-13 08:03:20: 4u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u
- 2023-10-24 07:06:59: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (20)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: 1.5u (14j restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Stock prédit: 0.6u (6j restants) → prédit 2u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: 0.7u (13j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: 0.7u (12j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.7u (11j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.8u (15j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: 0.6u (8j restants) → prédit 1u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: 0.8u (15j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: 0.7u (11j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock prédit: -0.4u (-5j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: 0.3u (7j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 0.4u (5j restants) → prédit 2u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 1 | Stock prédit: -0.4u (-9j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -1.6u (-20j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -1.5u (-20j restants) → prédit 1u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -1.2u (-18j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Stock prédit: -0.4u (-9j restants) → prédit 2u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: -0.4u (-9j restants) → prédit 1u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |


---

## False Negatives (2)

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
| [LV342] LV Organic Broccoli Spread 190 g | 1 | En rupture (-62j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock suffisant: 0.9u (33j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-19T12:58:45.182Z*
