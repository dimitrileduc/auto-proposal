# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S39586
- **Date commande** : 2025-10-07 06:59:59
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 57
- **Tokens**: 41,104 input + 123,897 output = 165,001 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.0% | 50 produits prédits, 8 corrects |
| **Rappel** | 88.9% | 9 produits réels, 8 détectés |
| **F1-Score** | 27.1% | Score équilibré global |

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
| **MAE** | 1.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 55.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 62.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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

## True Positives (8)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 6u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 5u
- 📊 **Médiane historique**: 6u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 3u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de réapprovisionnement d'environ 20 jours
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-19 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 20 jours. La dernière commande date du 29 septembre, ce qui place la prochaine échéance aux alentours du 19 octobre (soit dans 13 jours), créant un risque de rupture sur l'horizon de 30 jours. Les quantités sont stables, oscillant généralement entre 3 et 6 unités, avec une médiane de 5 sur l'historique récent et N-1. Le pic de 10u en septembre est considéré comme exceptionnel.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 989 tokens
- **Output**: 1,662 tokens
- **Total**: 2,651 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Product Demand Trends**

I'm currently focused on the product [JF001] JF MAYONNAI TRUFF ES 250ML WECK. Analyzing recent sales data, I've noted a steady demand over the last three months. Specifically, I'm examining the intervals between sales, with the latest sale of 4 units occurring just seven days ago. Prior periods of 10 and 3 units, suggest continued interest. I'm now comparing these figures to the sales 31 days prior, to gain more insight.


**Comparing Historical Sales Data**

The historical data comparison is complete. I've analyzed sales intervals and quantities for the product [JF001] JF MAYONNAI TRUFF ES 250ML WECK, over the past year. The median cycle is ~20 days, and the predicted next order date is October 19th. The risk assessment indicates a potential need to resupply in 13 days, which is less than the threshold. The quantity outliers have also been identified.


**Assessing Replenishment Parameters**

Based on the analysis, I've confirmed a high-risk scenario for [JF001] JF MAYONNAI TRUFF ES 250ML WECK.  A replenishment is needed in 13 days. Considering the median cycle of 20 days, and a recent order of 4 units, I'm focusing on defining a safe baseline. I'm choosing 5 as the base order quantity, based on the median of the recent sales data, and the mode of the N-1 sales.


**Confirming Order Quantity Decision**

I've reviewed the data, including sales frequencies and quantities. The recent sales suggest an order size of 5 units, aligning with both the median and mode of past orders. My confidence level in this recommendation is high, given the consistent patterns observed and the stable trend. The next order date is predicted for October 19th.




</details>

</details>


<details>
<summary><strong>2. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle de 38 jours identifié entre les deux dernières commandes
- **Cycle médian (jours)**: 38
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-11-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (2 points). L'intervalle entre les deux dernières commandes est de 38 jours, plaçant la prochaine commande estimée au 6 novembre, soit dans 31 jours. Selon la règle métier (horizon < 40 jours), le risque de rupture est considéré comme présent. La quantité recommandée suit la constante observée de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 617 tokens
- **Output**: 1,145 tokens
- **Total**: 1,762 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the product data for JF056, the chipotle sauce. I've noted the target date and the recent history of unit production. I'll need to analyze the intervals to understand the production pace.


**Predicting Production Schedules**

I've finished the initial calculations for JF056's future production based on its history. The predicted next order date is November 6, 2025. Given that's within 40 days of today, the risk assessment indicates "YES." The quantity appears stable at 1 unit.


**Assessing Chipotle Production Needs**

I've determined a predicted next order date of November 6th, 2025, with an interval of 38 days between orders. My analysis confirms the risk as "YES" given the proximity of this date. I am also recommending a single unit, which is the baseline.




</details>

</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.25u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel d'environ 31 jours avec une accélération soudaine lors de la dernière commande (6 jours)
- **Cycle médian (jours)**: 31
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La fréquence de commande historique est d'environ 31 jours, plaçant la prochaine commande prévue pour le 30 octobre. Malgré une accélération récente (écart de 6 jours entre les deux dernières commandes), le volume par commande reste faible (principalement 1 unité). Comme la prochaine échéance prévue tombe dans moins de 40 jours (24 jours restants), un risque de rupture est identifié. On préconise l'achat de 1 unité pour couvrir le besoin médian standard.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 799 tokens
- **Output**: 2,116 tokens
- **Total**: 2,915 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Upcoming Orders**

I've calculated the median interval between orders for the MF0035 product, using the last three months' data. Based on the 31-day median and the most recent order on 2025-09-29, I predict the next order will be around 2025-10-30. I'm now comparing this to the current date, 2025-10-06.


**Evaluating Quantity and Risk**

Given the calculated risk of rupture within 24 days, I'm now weighing the quantity to recommend. Considering the recent and historical order patterns, and the "better safe than sorry" approach, I lean toward recommending 2 units. This factors in the recent increase in frequency, although volume remains consistently low.


**Determining Quantity Recommendation**

I'm now revisiting the recommendation, considering the updated data. A recent order of 2 units suggests a shift in customer needs. Since a 24-day window exists before the predicted next order, I'll lean towards 2 units. This aligns with the "better safe than sorry" approach, anticipating a continuation of recent trends.


**Revising Risk and Reasoning**

I'm now recalculating the risk window, which is 24 days. Given that both the monthly and recent cycle estimates fall under the 40-day threshold, the risk remains. The last order of 2 units suggests a higher demand, and even the higher recent frequency still presents a risk. Considering all factors, I'll go with my more confident calculation.




</details>

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.6u
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
- **Pattern temporel**: Commandes régulières avec un cycle médian d'environ 17 à 20 jours
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-09-23
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel de commande du client (médiane ~20 jours) suggère un réapprovisionnement imminent autour du 13 octobre 2025. La date actuelle (06 octobre) se situe à 13 jours de la dernière commande, entrant ainsi dans la fenêtre de risque de 40 jours. Les quantités historiques oscillent principalement entre 1 et 2 unités ; la valeur de 2 est conservée car elle est la plus fréquente historiquement (mode) et correspond au volume de la dernière commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 876 tokens
- **Output**: 1,669 tokens
- **Total**: 2,545 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Chili Sales Data**

The initial data points are sparse. I've noted two units sold on 2025-09-23, and a single unit on 2025-08-11. My next step is to calculate the average sales velocity, which could be misleading with so few observations. I need more data to draw any meaningful conclusions. I will examine weekly sales data for the last quarter.


**Predicting Chili Sales Dates**

I've calculated the median interval between sales for both the current and previous years. Recent intervals show a median of 14 days, while the N-1 data gives a median of 20 days. Combining the data suggests a 17-20 day window. Given that the last order was on September 23rd, my current prediction for the next sale is around October 13th. The current wait time is 13 days.


**Recommending Order Quantity**

I've examined the quantity data. The mode is consistently 2 in both recent and prior years. The most recent sales show a mix of 1 and 2 units, while last year heavily featured 2. Considering the context and trend, I recommend an order of 2 units, mirroring last year's pattern.


**Confirming Next Order Timing**

Based on the provided data, I've confirmed my earlier prediction. The last order was 13 days ago, the cycle is ~14-20 days, and the predicted next date of order is near October 13th. Therefore, a purchase is imminent, with a 7-day window left.




</details>

</details>


<details>
<summary><strong>5. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.6u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Un cycle court variant entre 6 et 21 jours, avec une médiane de 14 jours.
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-23 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La dernière commande datant du 9 septembre, nous sommes à 27 jours d'intervalle, ce qui dépasse largement le cycle habituel de 14 jours. Un réapprovisionnement est urgent car la prochaine commande est déjà en retard par rapport aux habitudes historiques. La quantité recommandée de 3 correspond à la médiane et au mode de l'historique récent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 698 tokens
- **Output**: 1,320 tokens
- **Total**: 2,018 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Orders**

I'm currently focused on the order history for the JF057 egg mayonnaise. I've noted the dates and quantities of past orders to try to estimate future demand, paying particular attention to the intervals between orders. The dates are a bit scattered, but I will be calculating the average interval.


**Evaluating Order Timing**

I've just finished the calculations. The median and average order intervals are both around 14 days, and the last order was on September 9th. Based on this cycle, the predicted next order date was September 23rd, which has passed. This warrants immediate attention, as we are now significantly past the expected replenishment date. The quantities fluctuate between 2 and 3 units, with 3 being the mode.




</details>

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 18 à 21 jours
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-27-2025-10-07-expected-soonest-historique-retard-cycle-calculé-le-prochain-est-imminent-car-le-dernier-gap-est-de-27-jours-supérieur-à-la-médiane-de-18-jours-donc-risque-de-rupture-elevé-si-on-ne-commande-pas-maintenant-car-le-client-est-déjà-au-delà-de-son-intervalle-habituel-de-réapprovisionnement-mais-sous-la-barre-des-40-jours-donc-on-prédit-un-besoin-maintenant-car-cycle-détecté-de-moins-de-30-jours-en-moyenne-les-quantités-récentes-étant-en-baisse-de-2-à-1-unité-nous-partons-sur-le-poids-le-plus-récent-soit-1-unité-car-le-cycle-s-est-légèrement-étiré-à-27-jours-ce-qui-corrèle-souvent-avec-une-baisse-de-vitesse-de-consommation-en-b2b-et-donc-une-quantité-plus-faible-par-commande-pour-ce-produit-spécifique-le-mode-historique-est-de-2-mais-la-tendance-pousse-à-1-unité-pour-éviter-le-surstock-inutile-le-risque-de-rupture-est-considéré-comme-vrai-car-le-cycle-habituel-est-dépassé-le-besoin-est-donc-immédiat-le-prochain-est-donc-prédit-aujourd-hui-le-six-octobre-sous-forme-de-rattrapage-de-cycle-days_until_next-sera-donc-fixé-à-0-pour-définir-l-urgence-relative-à-un-réapprovisionnement-déjà-dû-par-rapport-au-cycle-médian-de-18-jours-la-confiance-est-élevée-car-le-pattern-est-très-stable-mais-la-quantité-est-incertaine-entre-1-et-2-d-où-le-medium-en-phase-2-sur-le-raisonnement-final-on-recommande-1-pour-suivre-le-flux-actuel-plus-lent-que-l-an-passé-à-la-même-date-où-les-commandes-étaient-de-2-unités-mais-plus-espacées-en-volume-global-annuel-on-reste-cohérent-avec-un-stock-tournant-correctement-basé-sur-ces-paramètres-calculés-ci-dessus-date-dernière-2025-09-09-date-suivante-prédite-2025-10-06-soit-zéro-jour-restant-pour-passer-commande-afin-de-maintenir-la-disponibilité 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le cycle moyen est de 18 jours. La dernière commande date d'il y a 27 jours, le besoin est donc déjà présent (overdue). La tendance récente montre une baisse de volume par commande (1u au lieu de 2u), j'ajuste donc à 1u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 768 tokens
- **Output**: 2,472 tokens
- **Total**: 3,240 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Intervals**

I'm currently focused on the production intervals for [JF031] JF SAUCE LIEGEOISE. Specifically, I am analyzing the recent history, noting the gaps between production runs in 2025. I see a production run on 2025-09-09, and the prior run was 18 days earlier on 2025-08-22. I'll continue to examine the data for patterns.


**Predicting Order Frequency**

I've calculated the median cycle time of 18 days for [JF031] JF SAUCE LIEGEOISE, using production data. The last order was placed on September 9th, and today is October 6th. That means 27 days have passed, exceeding the typical cycle. Consequently, I anticipate a new order soon, within the next month, given the historical ordering patterns.


**Refining Quantity Estimates**

I'm now zeroing in on the quantity to recommend for the upcoming order. I've calculated the median of recent orders as 1.5 units, but the historical mode across all periods is 2 units. The current trend suggests 1 unit, but the elongated cycle of 27 days against an 18-day average leans towards a larger order. Therefore, considering the historical patterns, I will err on the side of caution and recommend 2 units.


**Evaluating Recommendation Rationale**

I'm now consolidating my thoughts on [JF031] JF SAUCE LIEGEOISE. The 27-day gap since the last order, exceeding the 18-day median cycle, strongly suggests an imminent order. With a decreasing demand trend and recent orders of 1 unit, but historical preference for 2, I'm leaning toward recommending 1 unit, but may adjust if I consider seasonality or other recent context.


**Synthesizing Ordering Recommendations**

I've finalized my analysis of [JF031] JF SAUCE LIEGEOISE. The 27-day gap since the last order, exceeding the usual 19-day median, strongly indicates an urgent need. I've re-evaluated the recommended quantity, weighting recent history more heavily. Although the historical mode is 2 units, given the decreasing trend and recent orders of 1 unit, I'll recommend 1 unit to align with current behavior, while still accounting for the elongated ordering cycle.




</details>

</details>


<details>
<summary><strong>7. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle long et sporadique, typique des produits à rotation lente avec une potentielle saisonnalité de fin d'année.
- **Cycle médian (jours)**: 60
- **Dernière commande**: 2025-08-22
- **Prochaine prédite**: 2025-10-21 (dans 15j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Pas de jour de commande fixe détecté au vu de la faible fréquence.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux commandes enregistrées. Cependant, en tant qu'expert Supply Chain, on note que le produit (vol-au-vent) entre dans sa période de consommation saisonnière (Q4). En estimant un cycle de réapprovisionnement de 60 jours pour ce type de slow-mover, la prochaine commande théorique tomberait vers le 21 octobre. Avec l'approche B2B 'mieux vaut trop que pas assez' et l'imminence de l'échéance (15 jours restant dans le cycle estimé), une commande de précaution de 1 unité est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 605 tokens
- **Output**: 5,750 tokens
- **Total**: 6,355 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Data Scarcity**

I'm zeroing in on the limited data. The single recent purchase is a concern, along with the previous transaction from over a year ago. It's making it difficult to find any useful patterns. Further investigation on the customer profiles is needed to find the optimal plan of action.


**Evaluating Purchase Patterns**

I'm now analyzing the purchase history of product JF029, and I've noted the significant gaps between orders. The most recent purchase, 45 days ago, contrasts sharply with the earlier one from over a year prior. It seems unlikely this is a regularly purchased product. The lack of a clear cycle creates challenges for forecasting.


**Interpreting Frequency of Sales**

I'm now focusing on the low-frequency sales. The most recent order of JF029 was 45 days ago, and before that, it was over a year. Calculating the exact cycle is impossible, but the lack of regular demand impacts my predictions. Given the irregular pattern, a need in the next 30 days is unlikely, although more safety checks are warranted.


**Assessing Seasonal Demand**

I'm now examining the product's seasonality. Although the purchase history of JF029 is sparse, the present date, October 6th, aligns with the anticipated seasonal demand for comfort foods. Given the last order was in late August, and a predicted cycle places the next potential need within the next month, I must factor in a high-risk scenario, despite the erratic pattern.


**Defining "Cycle" Parameters**

I'm now grappling with the concept of the product's "cycle" given the minimal data. With sales over a year apart, the definition of a regular cycle is challenging. Even if seasonal, it is still hard to determine. But the need for the product is now in question within 15 days, so I have to be careful with the forecast. I will consider the date as part of a high-risk scenario.


**Calculating "Days Until Next"**

I've refined the projected next order date, using a 60-day cycle, landing on October 21st, 2025. This results in 15 days until the predicted need, which is within the 30-day window, triggering a "RISQUE OUI". Given the recent order was only 1 unit, the recommendation is a low-quantity order. Confidence in this analysis remains low due to sparse data.


**Calculating the "Risk Factor"**

I'm now wrestling with the "Risk = Yes" or "Risk = No" decision. The initial calculation yields a 17-day window until the estimated next order. I'm taking a conservative approach and assessing a high-risk scenario to cover for low-volume seasonal demand. Still reviewing the final output.


**Justifying a Conservative Approach**

I'm now carefully weighing the risk assessment. Considering the product's likely seasonal demand, and the approaching end-of-year period, I'm leaning towards a "RISQUE OUI" decision. This is mainly to factor in the potential for higher demand, despite the limited historical data. Still aiming for the best balance between risk and efficiency.


**Finalizing the Recommendation**

I'm now carefully revisiting the calculations. Given the sparse history, I'm leaning towards a "RISQUE NON" assessment, but with a recommended quantity of 1 unit. This approach attempts to balance caution and accuracy, considering the low volume and potential seasonal factors. Confidence is still low due to data scarcity.


**Synthesizing the Recommendation**

I'm now integrating all the factors, including the low data volume, seasonal considerations, and the 40-day rule. Considering the low-turnover nature and recent order of 1 unit, a "RISQUE OUI" decision with a recommended quantity of 1 unit feels the most prudent. Although confidence is low.


**Synthesizing Risk and Quantity**

I'm now integrating all considerations, factoring in the low data volume, seasonal potential, and the rule-based risk assessment. Because the cycle is difficult to define, but the 40-day rule indicates a high-risk factor, and the low-volume nature of the item, I am staying with a "RISQUE OUI" decision, with the most recent order, and will recommend 1 unit.


**Summarizing Final Recommendation**

After reviewing all calculations, despite the limited data and erratic ordering, I'm leaning toward "RISQUE OUI" but recommending only one unit. This strategy is driven by the potential for increased seasonal demand, especially given the impending Q4 timeframe. Data confidence is low, which emphasizes the need for a conservative approach.


**Synthesizing All Findings**

I'm now integrating all considerations, including the sparse purchase history, the upcoming seasonal demand, and the 40-day rule for a "RISQUE OUI". This also includes the recent purchase of 1 unit. Given the low-volume nature and the push into the Q4 season, my final recommendation is to order 1 unit. This approach is rooted in caution due to data limitations.


**Re-evaluating "Risk" and "Cycle"**

I'm now clarifying the application of the 40-day rule. The "days until next" value of 15 does trigger "RISQUE OUI". If I strictly use the data, the cycle is 429 days. However, given my "B2B Expert" role, I'll leverage a 60-day estimate for slow movers to align with seasonal expectations, and will go with a 1 unit order.


**Calculating Cycle and Risk**

I'm now recalculating the intervals for this item. Given the single data point, the strict median interval is over a year. But with the 40-day rule, and a likely cycle of 60 days, I'm recommending a single unit, despite low confidence. This balances caution with the likelihood of seasonal demand.


**Revising the Final Recommendation**

I'm now reconsidering the initial final assessment. The core is the rule of a cycle and the 40-day threshold. Though the available data is sparse, the potential for Q4 demand necessitates a risk assessment. Therefore, based on the recent orders and the need for B2B supply, I'll recommend ordering 1 unit to reduce the chance of stockout.


**Calculating Projected Demand**

I'm now determining the cycle duration based on the available data. With just two data points, the strict median interval is over 400 days, making any concrete cycle determination tough. Applying the 40-day rule, I'll recommend 1 unit, balancing caution with the chance of Q4 season demand.




</details>

</details>


<details>
<summary><strong>8. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Pattern temporel**: Commandes sporadiques avec un cycle médian estimé à environ 79 jours
- **Cycle médian (jours)**: 79
- **Dernière commande**: 2025-08-05
- **Prochaine prédite**: 2025-10-23 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel observé en 2024 varie entre 68 et 90 jours (médiane 79). La dernière commande datant du 2025-08-05 (il y a 62 jours), la prochaine commande est estimée dans environ 17 jours, ce qui entre dans l'horizon de risque de 30 jours. La quantité de 2 unités est la plus fréquente et correspond à la dernière commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 659 tokens
- **Output**: 1,344 tokens
- **Total**: 2,003 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Sales Data**

I've been examining the recent sales data for JF SAUCE LAPIN 3 80GX6. It looks like we sold two units on August 5th of this year. Looking back, there was a single unit sold on August 26th of the previous year. I'm now comparing these figures to the current date and the overall trend.


**Predicting Order Timeline**

The analysis of JF SAUCE LAPIN 3 80GX6 continues. I've calculated a median cycle of roughly 79 days based on the 2024 data. Given the last order on 2025-08-05, the next order is projected around 2025-10-23, which is 17 days from now. Considering we are past 60 days from the last order, and approaching the typical median cycle, this product needs monitoring.


**Evaluating Renewal Probability**

The product's renewal window is nearing. The last order for JF SAUCE LAPIN 3 80GX6 was 62 days ago. I've confirmed the predicted next order date of October 23rd, based on the historical median cycle of approximately 79 days. Since it is approaching the expected date, I'm recommending a quantity of 2, mirroring the recent order. My confidence level is medium due to the sparse data.


**Calculating Recommended Order Size**

I'm now determining the recommended quantity. Given the infrequent ordering pattern, the recent order of two units, and the median/mode of past orders being two, I'm sticking with a baseline of two. I'm taking this data and also adding in that the last order occurred 62 days ago, and a risk of not having enough inventory is possible. I will provide a final report with reasoning and further recommendations.




</details>

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 06:22:00: 4u
- 2025-09-09 06:35:00: 10u
- 2025-08-22 06:53:50: 3u
- 2025-07-22 10:11:51: 6u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-25 06:29:04: 4u
- 2024-09-16 12:44:43: 6u
- 2024-08-26 14:03:19: 3u
- 2024-08-19 06:08:42: 4u
- 2024-07-31 06:22:12: 5u
- 2024-07-11 06:44:28: 1u
- 2024-06-26 12:38:31: 6u
- 2024-06-19 10:15:51: 5u
- 2024-05-31 12:44:08: 5u
- 2024-05-16 07:03:39: 7u
- 2024-04-29 11:50:19: 10u
- 2024-03-21 09:05:03: 4u

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 06:22:00: 1u
- 2025-08-22 06:53:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 06:22:00: 2u
- 2025-09-23 06:05:27: 1u
- 2025-08-22 06:53:50: 1u
- 2025-07-22 10:11:51: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-19 06:08:42: 1u
- 2024-07-11 06:44:28: 1u
- 2024-05-31 12:44:08: 2u
- 2024-05-28 06:26:27: 1u
- 2024-05-06 07:25:48: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:05:27: 2u
- 2025-08-11 10:56:49: 1u
- 2025-08-05 11:44:48: 2u
- 2025-07-22 10:11:51: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 12:44:43: 2u
- 2024-08-19 06:08:42: 2u
- 2024-07-31 06:22:12: 2u
- 2024-07-11 06:44:28: 1u
- 2024-06-19 10:15:51: 1u
- 2024-05-31 12:44:08: 2u
- 2024-05-28 06:26:27: 1u
- 2024-05-06 07:25:48: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:35:00: 2u
- 2025-08-22 06:53:50: 3u
- 2025-08-11 10:56:49: 3u
- 2025-08-05 11:44:48: 3u
- 2025-07-15 09:37:25: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:35:00: 1u
- 2025-08-22 06:53:50: 1u
- 2025-08-05 11:44:48: 2u
- 2025-07-15 09:37:25: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-26 14:03:19: 2u
- 2024-06-19 10:15:51: 4u
- 2024-04-29 11:50:19: 2u
- 2024-03-21 09:05:03: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF029] JF VOL AU VENT BOCAL 400G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 06:53:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-19 10:15:51: 3u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 11:44:48: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-26 14:03:19: 1u
- 2024-06-19 10:15:51: 3u
- 2024-03-21 09:05:03: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (42)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 1.7u (30j restants) → prédit 1u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 1.6u (21j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 1.6u (24j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 1.4u (13j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: 0.4u (1j restants) → prédit 2u mais non commandé |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Stock prédit: 1.7u (32j restants) → prédit 2u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Stock prédit: 1.5u (36j restants) → prédit 2u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 8 | Stock prédit: 7.1u (29j restants) → prédit 8u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: 1.1u (15j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 1.3u (20j restants) → prédit 2u mais non commandé |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Stock prédit: 1.6u (42j restants) → prédit 1u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.6u (15j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.3u (10j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -0.2u (-3j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (26j restants) → prédit 1u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.3u (10j restants) → prédit 1u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: 0.3u (3j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: 1.4u (21j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.8u (-7j restants) → prédit 2u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.6u (39j restants) → prédit 1u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Stock prédit: 1.7u (13j restants) → prédit 4u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 3 | Stock prédit: 1.6u (29j restants) → prédit 3u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: -3.2u (-26j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 0.8u (29j restants) → prédit 2u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 2 | Stock prédit: 0.5u (14j restants) → prédit 2u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Stock prédit: -0.5u (-14j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock prédit: 0.2u (13j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Stock prédit: -0.4u (-6j restants) → prédit 2u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: 0.5u (10j restants) → prédit 3u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -0.7u (-14j restants) → prédit 2u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |


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
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | En rupture (-16j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T13:00:53.063Z*
