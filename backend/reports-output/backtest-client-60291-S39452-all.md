# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S39452
- **Date commande** : 2025-10-01 07:17:25
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 34
- **Tokens**: 28,121 input + 63,627 output = 91,748 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 27 produits prédits, 9 corrects |
| **Rappel** | 81.8% | 11 produits réels, 9 détectés |
| **F1-Score** | 47.4% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 69.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 88.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 69.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (9)

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
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv17] Mélange de noix bio vrac 2,75kg | 5 | 1 | 4.0 | 400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier diminuant de 28j à 7-14j
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le rythme de commande est très régulier avec une phase de stabilisation nette à 2 unités sur les trois dernières livraisons. Le cycle médian est de 14 jours, plaçant la prochaine commande prévue aux alentours du 8 octobre, soit dans l'horizon de 30 jours.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 896 tokens
- **Output**: 1,138 tokens
- **Total**: 2,034 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Order History**

I'm currently focused on the order history for RITCHIE Citron - Fram boise - verre 275ml. I've noted a consistent pattern of 2 units ordered on Wednesdays in September. My next step will be to analyze the data further, perhaps checking for seasonal trends or external factors influencing these orders.


**Calculating Order Prediction**

I've just finished the calculations. The median cycle is around 14.5 days, but recent orders are closer together. Based on a consistent pattern of 2 units ordered recently, I predict the next order between October 1st and October 8th, with a recommended quantity of 2. There's a high risk of an imminent order.


**Synthesizing Recommendations**

I'm now synthesizing the findings. Considering the stable demand, recent cadence, and consistent order volume, the recommendation is set. I'm finalizing the order prediction, confirming the predicted date of October 8th, and setting the quantity to 2 units based on recent patterns. High confidence.




</details>

</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Bimensuel régulier avec accélération hebdomadaire récente
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-08 (dans 8j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes habituellement le mardi/mercredi, aligné avec la date actuelle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier (médiane de 14 jours). Avec une dernière commande le 24 septembre, la prochaine est prévue autour du 8 octobre, soit dans l'horizon des 30 jours. Bien qu'une légère baisse de volume soit notée sur la dernière livraison (2u), la médiane des trois dernières commandes (2, 4, 3) est de 3 unités, ce qui constitue une base solide pour la prédiction.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 891 tokens
- **Output**: 1,452 tokens
- **Total**: 2,343 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Timelines**

My focus is on the RITCHIE Cola product timelines. I've been reviewing the recorded history, specifically the time allocated each week. The recent entries show 2 hours on the 24th, following a pattern of 4 hours on the 17th, and 3 hours on the 2nd. There is some data showing a consistent average.


**Calculating Cycle Predictions**

I've calculated the median cycle time for the RIT05 product, coming out to about 14.5 days. Based on this, and the last order date, I'm predicting the next order will be around October 8th or 9th. There's a "RISQUE OUI" warning based on the 8 days until the predicted order date.


**Determining Quantity Predictions**

I am now focusing on refining the quantity predictions for the RIT05 product. Recent analysis of order history suggests a slight decline in volume. The median calculation, favoring recent data, indicates an expected order quantity of 3 units. However, I am still factoring in a baseline of 4.


**Evaluating Order Recommendations**

I've determined a recommended quantity of 3 units for the next order. I've re-examined the history, especially the most recent orders, and found a stable pattern of orders every two weeks. The risk is high; the next order is due soon. This prediction has a high confidence level due to the consistent cycle.




</details>

</details>


<details>
<summary><strong>3. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier (médiane 14,5 jours)
- **Cycle médian (jours)**: 14.5
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-08 (dans 8j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes majoritairement le mardi ou mercredi, cohérent avec la date du jour
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec une médiane de 14,5 jours. La dernière commande date d'il y a 6 jours, prédisant un réapprovisionnement sous environ 8 jours (vers le 08/10), ce qui justifie une commande. La quantité recommandée de 3 unités correspond à la médiane des commandes récentes (2, 4, 2, 3, 3).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 892 tokens
- **Output**: 1,424 tokens
- **Total**: 2,316 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Trends**

I'm currently focused on the sales data for RITCHIE Cola ZERO. The last few weeks show a clear pattern. There was a 2-hour sale on the 24th, following a 4-hour sale on the 17th, with a 7-day interval. Need to analyze further to understand the underlying drivers and extrapolate potential future sales volumes.


**Calculating Projected Dates**

I've calculated the median interval between sales events for RITCHIE Cola ZERO. Based on this, and the last order date, I've projected the next order is roughly nine days away. The risk assessment indicates the next order is within 30 days. Furthermore, I've analyzed sales quantities, noting they are relatively stable, oscillating between 2 and 4 units, with a median of 3.


**Evaluating Key Parameters**

I've just finished the calculations. The median interval is 14.5 days, putting the next order around October 8th, approximately 8-9 days away. No significant seasonality or outliers were detected. Considering the stable trend and recent sales of 2 and 4 units, I'm recommending a baseline of 3 units.


**Summarizing the Findings**

I've just finalized the analysis of RITCHIE Cola ZERO sales. The cycle appears bi-monthly, with a median of 14.5 days between orders. My prediction places the next order around October 8th, approximately 8 days from now. The baseline quantity is set to 3 units, given the stable trend and recent order volumes. I have high confidence in these projections.




</details>

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel (environ tous les 15 jours)
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-09-17
- **Prochaine prédite**: 2025-10-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande très stable avec un cycle médian de 15 jours. La dernière commande datant du 17 septembre, l'échéance de la prochaine commande est estimée au 2 octobre (sous 2 jours), justifiant un besoin immédiat. La quantité commandée est constante à 2 unités (3 fois sur 4 dans l'historique récent), ce qui définit la recommandation.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 864 tokens
- **Output**: 1,380 tokens
- **Total**: 2,244 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Current Demand**

I've been crunching the numbers on product RIT01, focusing on the RITCHIE Orange - verre 275ml. I analyzed the sales data from earlier in September. Based on the two data points, I'm working to estimate the current demand and potential sales for the end of the month.


**Assessing Order Imminence**

I've just finished the critical calculations for RIT01's order timing. Based on the historical data, the next order is predicted to be in two days. Given this, and the small quantity rules analysis, I'm leaning toward a decision on the imminent need for an order, focusing on its quantity.


**Determining Order Quantity**

I've moved on to the order quantity. Analyzing historical data and the small quantity rule, the recommendation is two units. While the 1-2 alternation suggests conservatism, the median and frequency favor two. The cycle is bimonthly, and there are only two days until the predicted order date. I'm going with two.


**Confirming Imminent Ordering**

Based on the latest data analysis, I've confirmed the imminence of an order, in just two days. With a bimonthly cycle, the predicted date aligns perfectly. The fluctuation between 1 and 2 units influenced my choice. After weighing the options, two units is confirmed, leaning on consistent recent ordering patterns.




</details>

</details>


<details>
<summary><strong>5. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 4.5u
- 📊 **Médiane historique**: 5u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 4u (400.0%)
- 📉 **Erreur Médiane**: 4u (400.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle d'environ 44 jours identifié entre les deux premières commandes
- **Cycle médian (jours)**: 44
- **Dernière commande**: 2025-09-17
- **Prochaine prédite**: 2025-10-31 (dans 31j)
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: Intervalle unique de 44 jours, prochaine commande prévue à 31 jours de la date actuelle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Seulement deux points de données disponibles. Le cycle calculé est de 44 jours, plaçant la prochaine commande estimée au 31 octobre. Selon les règles B2B, un délai de 31 jours justifie une anticipation de commande. La quantité recommandée suit la commande la plus récente qui montre une légère hausse par rapport à la précédente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 812 tokens
- **Output**: 1,208 tokens
- **Total**: 2,020 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Sales Data**

I've been poring over the sales figures, specifically for the organic bulk nut mix. I've noted a unit sale of 5 on the 17th of September and 4 units back in early August. I need to establish a clearer trend over time and understand the significance of these numbers.


**Forecasting Replenishment Needs**

I've just calculated the predicted next order date as October 31st, based on the 44-day cycle derived from the two existing data points. It is also a B2B sale. Given the 31-day lead time from today, I'm flagging this as a potential replenishment need, with a likely order size of around 5 units, based on the historical median. There is a slightly increasing trend in doses.


**Assessing Order Risk**

I've determined a moderate risk level for replenishment, given the 31-day lead time to the predicted order date. Analyzing the sales data, I'm recommending an order of 5 units. This is based on the recent sales and the established 44-day cycle. The slightly increasing trend, and being a B2B sale, justifies this decision. I will also be considering single parseable JSON for my outputs.




</details>

</details>


<details>
<summary><strong>6. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.5u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle d'environ 44 jours entre les deux commandes observées
- **Cycle médian (jours)**: 44
- **Dernière commande**: 2025-09-17
- **Prochaine prédite**: 2025-10-31 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé est de 44 jours. Avec une dernière commande au 17 septembre, la prochaine est prévue pour le 31 octobre (soit 31 jours à partir d'aujourd'hui), ce qui entre dans la fenêtre d'anticipation B2B (31-45 jours). Les quantités sont faibles mais montrent une progression de 2 à 3 unités ; nous recommandons la quantité la plus récente de 3 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 813 tokens
- **Output**: 1,322 tokens
- **Total**: 2,135 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product History**

I'm currently looking at the sales history for product [fsv05]. I see two previous sales recorded: three units on September 17th and two units back on August 4th. There's no sales history for the same period last year. I'm noting the dates and quantities.


**Assessing Order Risk**

I've calculated the predicted next order date as October 31st, which is 31 days from today. This puts the product squarely in the "close to cycle" window. Given the client's history and the 44-day interval, along with the increasing trend in recent orders, I'm classifying the risk as YES.


**Calculating Quantity Recommendation**

I've determined a quantity recommendation of 3 units, considering the slight upward trend in order size and a baseline of 2.5 units derived from previous orders. While I've examined frequency patterns, seasonality, and outliers, the data set is small, warranting a medium confidence level.


**Determining the Verdict**

I'm now consolidating all the findings for product [fsv05]. I've affirmed a "YES" risk rating, given that the predicted order date is 31 days out, placing it within the anticipation window. Furthermore, I've confirmed a recommendation of 3 units, aligning with the observed upward trend and recent order. My confidence level remains medium due to the limited historical data.




</details>

</details>


<details>
<summary><strong>7. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle irrégulier avec une médiane de 25 jours (14j et 36j observés)
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-27_DUE_NOW_OVERDUE_3D_SINCE_EXPECTED_BUT_IN_30D_WINDOW_SINCE_LAST_ORDER_IS_FALSE_LOGIC_AS_PER_RULE_LAST_PLUS_CYCLE_EQUALS_SEP_27_SO_RISK_YES_AS_SEP_30_IS_TODAY_AND_IS_STILL_WITHIN_NEXT_ORDER_IMMINENCE_WINDOW_IF_WE_USE_SEP_30_RELATIVE_TO_SEP_02_IT_IS_28_DAYS_STILL_UNDER_30D_THRESHOLD_IN_PHASE_1_LOGIC_HEADING_BACK_TO_RAW_JSON_VALUES_NOW_2025-09-27_FROM_SEP_02_PLUS_25_DAYS_BUT_SINCE_TODAY_IS_SEP_30_IT_IS_STRICTLY_SPEAKING_PASSED_SO_DUE_NOW. RECALIBRATING_FOR_JSON_COMPLIANCE: 2025-09-27 is correct for prediction, days_until_next is -3 relative to current date 2025-09-30 so the logic 'Si ≤30 jours RISQUE OUI' applies as it has been 28 days since last order (2025-09-02 to 2025-09-30). 2025-09-27 is the date while days_until_next will be expressed as -3 to show it is due/past due date but still within the 30-day imminent risk window for reordering. 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La consommation actuelle montre un cycle médian estimé de 25 jours. Entre le 02/09 (dernière commande) et le 30/09 (aujourd'hui), 28 jours se sont écoulés, ce qui place la prochaine commande dans la fenêtre de risque imminent (≤30j). En accord avec les règles sur les petites quantités (1-2u), la médiane de 1u est privilégiée malgré une occurrence isolée de 2u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 842 tokens
- **Output**: 2,185 tokens
- **Total**: 3,027 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Intervals**

I'm currently working through the purchase intervals for product [RIT03]. I've noted the existing data points and am calculating the interval between the first two purchases. My focus now is determining the interval from the most recent purchase to the present date, 2025-09-30.


**Assessing Purchase Predictions**

I've analyzed the purchase intervals for product [RIT03]. After calculating the intervals between purchases and establishing a median of 25 days, the model predicted a next purchase date of 2025-09-27. Since it is currently 2025-09-30, the product is in the "imminent order" window. I'm also examining the quantities, noting a recent trend of small volumes.


**Finalizing Recommendations for Order**

I've determined the next order date for [RIT03] is overdue, using an estimated 25-day cycle. Quantities are consistently low, and the median quantity is 1 unit. I've concluded a recommendation of 1 unit, with medium confidence due to the limited historical data, but high confidence in the need for immediate ordering.


**Refining Quantity Calculations**

I'm now solidifying the recommended quantity. Given the low volumes and the recent pattern, the median quantity of 1 unit seems appropriate. The safety margin calculation is complete, adding a slight buffer. I've re-examined the small quantities rule and confirming a prediction of 1 unit.


**Reviewing Reasoning and Output**

I'm now finalizing the output, reviewing the reasoning for [RIT03]. The 25-day cycle is confirmed, with the next order date already passed. I'm focusing on the "small quantities" rule and ensuring the recommended quantity of 1 unit is correctly reflected in the JSON, with the proper confidence levels.




</details>

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel à mensuel observé le mardi
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande systématiquement le mardi avec un intervalle variant entre 14 et 28 jours. La dernière commande datant du 02/09 (il y a exactement 28 jours), la probabilité d'une commande ce mardi 30/09 est très élevée. Les volumes sont faibles et stables (alternance 1-2-1), la consigne pour les petites quantités impose de privilégier la valeur basse (1u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 840 tokens
- **Output**: 1,313 tokens
- **Total**: 2,153 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Sales Trends**

I'm currently focused on the sales data for RITCHIE Orange Sanguine. My initial look at the past three months shows a small sample, with sales of 1 unit on September 2nd and 2 units on August 19th. This limited data suggests a low, sporadic demand, though more data points are needed for a clearer picture. I plan to expand my analysis, incorporating additional data to identify any underlying pattern.


**Projecting Future Demand**

\n\n

I've just calculated the median interval between orders, which is around 21 days, given the 14- and 28-day cycles.  My projection suggested the customer would order by September 23rd, but it's now September 30th with no new orders.  Given the 1-2-1 unit sales pattern, I'm predicting the next order will likely be a single unit, and a stockout is definitely a risk.


**Revisiting Order Predictions**

\n\n

Today, September 30th, the anticipated order window has passed, with no new order placed.  My analysis of the 14-28-day cycle, all Tuesdays, pinpointed today as the likely next order date. Given the pattern of 1-2-1 unit sales, I'm still expecting a single unit. The risk of a stockout is definitely a factor in this instance.


**Finalizing Demand Predictions**

\n\n

Today, September 30th, the anticipated order date has aligned perfectly with the calculated 28-day cycle from the previous order. My analysis of the consistent 1-2-1 unit sales pattern points to a single unit for the upcoming order. Given this, I maintain a high confidence in the prediction, and a stockout is still a significant possibility.




</details>

</details>


<details>
<summary><strong>9. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Produit sporadique (une seule commande enregistrée)
- **Cycle médian (jours)**: 70
- **Dernière commande**: 2025-07-23
- **Prochaine prédite**: 2025-10-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une commande unique il y a 69 jours. Selon la règle des produits sporadiques (>60j entre commandes avec une activité dans les 90 derniers jours), un risque de rupture par réapprovisionnement imminent est identifié. On se base sur l'unique point de données pour suggérer une commande de 2 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 789 tokens
- **Output**: 1,892 tokens
- **Total**: 2,681 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Order Patterns**

I'm currently focused on the order history for the NOD02 product. The data shows a single order from July, which raises some flags. I need to dig deeper to understand the low order frequency in the last three months. I'm considering factors such as seasonality or potential supply chain issues.


**Interpreting Data and Logic**

I'm now wrestling with the risk assessment logic. The single order 69 days ago for NOD02 complicates the cycle analysis. Given the sporadic nature of this product, the system flags it. The decision logic seems to confirm that the product is sporadic, triggering the need for further investigation despite the recent order.


**Synthesizing Risk and Action**

I've just finalized the risk assessment and decision logic.  Given the sporadic ordering pattern of NOD02 and the 69-day gap since the last order, I've concluded a high risk of stockout. The estimated next order date of October 1st, alongside the small order quantity, reinforces this assessment. I'm recommending an immediate order of two units.


**Refining the Cycle and Confidence**

I'm revisiting the cycle analysis for NOD02, given the sporadic nature and limited data. The last order was 69 days ago, making the product's next order potentially imminent. I've re-evaluated the confidence level to "low" due to the single data point, but the "90-day" rule for sporadic products reinforces the need for action.


**Concluding Product Assessment**

I've just finished the final calculations and risk assessments. For the NOD02 product, the estimated next order date is October 1st, just a day from now, implying a need to order. The single order 69 days ago, coupled with the sporadic nature of the product, pushes me to recommend ordering 2 units. The confidence level, however, remains low due to the single historical data point.


**Re-evaluating the Next Order**

I'm now revisiting the core logic to be absolutely sure. Given the single order 69 days ago, the product fits the criteria for sporadic ordering. With a cycle estimated around 70 days, an order is likely. Consequently, I stand by recommending a purchase of two units, just to be on the safe side. The confidence is still rated as low.




</details>

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 2u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u
- 2025-07-22 06:58:35: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u
- 2025-09-02 06:42:42: 3u
- 2025-08-19 11:00:28: 5u
- 2025-07-22 06:58:35: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u
- 2025-07-22 06:58:35: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:34:27: 2u
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u
- 2025-07-14 13:52:07: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:33:32: 5u
- 2025-08-04 13:50:22: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:33:32: 3u
- 2025-08-04 13:50:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 1u
- 2025-07-14 13:52:07: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u
- 2025-07-22 06:58:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-23 06:55:48: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (18)

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
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: 0.5u (4j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | Stock prédit: 2.2u (14j restants) → prédit 3u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 1.5u (14j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock prédit: 0.6u (20j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | Stock prédit: 0.9u (9j restants) → prédit 2u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: 0.6u (17j restants) → prédit 1u mais non commandé |
| [fsv04] Amande nature bio vrac 2,8 kg | 3 | Stock prédit: 3.2u (50j restants) → prédit 3u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 2 | Stock prédit: 0.5u (3j restants) → prédit 2u mais non commandé |
| [fsv18] Mendiant bio vrac 2,8kg | 1 | Stock prédit: 1.5u (32j restants) → prédit 1u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | Stock prédit: 3.1u (19j restants) → prédit 5u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Stock prédit: 0.9u (24j restants) → prédit 2u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | Stock prédit: -0.8u (-17j restants) → prédit 1u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | Stock prédit: -0.8u (-17j restants) → prédit 1u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -0.8u (-17j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: -0.6u (-15j restants) → prédit 1u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |


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
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Stock suffisant: 0.7u (38j restants > seuil 30j) |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | En rupture (-4j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T15:00:49.165Z*
