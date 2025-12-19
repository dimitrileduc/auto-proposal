# Rapport Backtest - Client Epicerie Uhoda Beaufays

## Contexte

- **Client** : Epicerie Uhoda Beaufays (ID: 17669)
- **Commande réelle** : S39600
- **Date commande** : 2025-10-08 07:26:15
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 39
- **Tokens**: 26,985 input + 113,932 output = 140,917 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 31.3% | 32 produits prédits, 10 corrects |
| **Rappel** | 83.3% | 12 produits réels, 10 détectés |
| **F1-Score** | 45.5% | Score équilibré global |

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
| **MAE** | 0.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 8.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
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
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle d'environ 35 jours avec une commande ponctuelle plus rapprochée
- **Cycle médian (jours)**: 35
- **Dernière commande**: 2025-10-01
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La consommation est très régulière en quantité (toujours 1 unité). Le cycle médian entre les commandes est de 35 jours. Avec une dernière commande au 1er octobre, la prochaine est estimée autour du 5 novembre. Puisque l'échéance prévue est dans 29 jours (inférieur au seuil de risque de 40 jours adopté pour le B2B), il est conseillé de commander pour anticiper le besoin.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 672 tokens
- **Output**: 1,073 tokens
- **Total**: 1,745 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Sales Data**

I'm analyzing the sales data for LV126, specifically looking at the LV Tartinade Tomate A il des Ours 190g product. Initial observations show sporadic sales over the past three months, with only one unit sold in each of the recorded instances. There is no available N-1 data for this.


**Calculating Future Orders**

I've calculated the median interval between sales, using the last three months of data. Based on this, I've projected the next order date to be November 5th, 2025. With six days passed since the last order, there are 29 days until the predicted replenishment. Risk assessment shows a potential need to replenish within the next 30 days. The quantity recommendation remains at one unit, given the observed stable trend.


**Refining Prediction Accuracy**

I'm now calculating the confidence level, evaluating data consistency and frequency. The analysis indicates medium overall confidence, though I have high confidence in both the cycle clarity and the consistent order quantity of one unit. Considering the variable frequency, the cycle median is the primary driver of prediction. I'm also ensuring the risk horizon remains at 30 days.




</details>

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
- **Pattern temporel**: Cycle irrégulier avec une médiane de 19 jours
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-10-01
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande médian est calculé à 18,5 jours. Avec une dernière commande au 1er octobre, la prochaine est estimée autour du 20 octobre. Comme le délai avant le prochain besoin est inférieur à 40 jours (environ 13 jours), un risque de rupture est identifié. La quantité recommandée suit la médiane des commandes passées (1 unité), les volumes étant faibles et stables.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,428 tokens
- **Total**: 2,127 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product Demand Trends**

I'm currently focused on the sales data for [REB01] ReBEL chips. My analysis is starting with a deep dive into the last three months. So far, the data reveals two distinct sales points: one unit on October 1st and two units on September 16th, showing a fifteen-day interval. I'll need to look at more data to determine if this can be called a trend.


**Projecting Future Orders**

The analysis of [REB01] ReBEL chip sales now incorporates more data points, extending back to July. I've calculated an approximate median order cycle of 18.5 days, based on the intervals. Given the last order on October 1st, I predict the next order around October 19th/20th. With only six days since the last sale, and an estimated 12.5 days until the next, a risk assessment of stockout within 30 days is underway, and quantity suggestions are being assessed.


**Refining Order Quantity Insights**

I've just finalized the analysis of the [REB01] ReBEL chip sales, and am honing in on quantity recommendations.  With a median order cycle of 18.5 days and an approximate next order date around October 20th, I'm recommending an order of 1 unit.  The irregular cycle and small quantities lead me to believe this is a sustainable recommendation, with a medium confidence level in the forecast.


**Recommending Final Order Quantity**

I've just finalized the analysis for the [REB01] ReBEL chips "premium & bio" variant. The irregular cycle, between 7 and 41 days, with a median of 19 days, gives me a predicted next order date of approximately October 20th. Given the low volume of orders, the recommendation is 1 unit, with a medium confidence rating. The JSON-formatted insights are now complete.




</details>

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.7u
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
- **Pattern temporel**: Cycle historique long d'environ 46 jours avec une accélération ponctuelle récente à 13 jours
- **Cycle médian (jours)**: 46
- **Dernière commande**: 2025-09-16
- **Prochaine prédite**: 2025-11-01 (dans 25j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Commandes historiques étalées sur la semaine, aucune préférence de jour marquée
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le cycle médian historique est de 46 jours. En se basant sur la dernière commande du 16 septembre, la prochaine est estimée au 1er novembre, soit une échéance à 25 jours (inférieure au seuil de risque de 30 jours). Malgré une accélération récente de la fréquence en septembre, la demande en volume reste stable avec une médiane de 2 unités, ce qui est retenu pour couvrir le besoin prochain.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 823 tokens
- **Output**: 2,264 tokens
- **Total**: 3,087 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the recent sales history for LV Tartinade Houmous. It seems there was a small order of 2 units on September 16th, following a single unit order on September 3rd. I need to understand the buying patterns for this product in more depth.


**Calculating Purchase Intervals**

I've calculated the purchase intervals for LV Tartinade Houmous over the past two years. The median historical interval appears to be around 49 days. Notably, the most recent purchases show a much shorter interval of 13 days, which is quite different from the historical patterns.


**Assessing Demand Patterns**

I'm now examining the purchase quantities alongside the intervals. Recent orders are small, but the shortened interval is concerning. Using historical and recent intervals, I'm calculating risk factors based on B2B logic and defining decision points for the product. There's a high probability of a missed window.


**Calculating Projected Order Dates**

I'm now calculating projected order dates based on the average historical interval and the recent interval for LV Tartinade Houmous. I am also considering the elapsed time since the last order, and using B2B logic to flag potential risks based on frequency, which suggests a change in demand. My focus is now on the median.


**Evaluating Frequency and Risk**

I'm now integrating the historical and recent frequency data. Calculating the average cycle time, which is roughly 44-46 days. Considering this along with the accelerated recent ordering, there is now a calculated risk of a missed window. My next step will be to finalize the projected date.


**Concluding Recommendations and Analysis**

I'm synthesizing the data. The historical cycle is roughly 45-50 days, but the recent interval is 13. My calculations indicate a high-risk situation, with the next order predicted around November 1st. I will recommend ordering 2 units. I'm now fine-tuning the JSON output for this final recommendation.




</details>

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.9u
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
- **Pattern temporel**: Cycle irrégulier avec une médiane de commande d'environ 48 jours
- **Cycle médian (jours)**: 48
- **Dernière commande**: 2025-09-16
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La médiane historique des intervalles de commande est de 48 jours. Bien que la dernière commande (1u) soit récente (21 jours), le cycle estimé place la prochaine livraison vers début novembre. En appliquant la règle du risque de rupture (échéance prédite < 40 jours restants avant le stockout théorique), on déclenche une commande. La quantité recommandée de 2 se base sur la médiane robuste de l'historique global.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 823 tokens
- **Output**: 1,758 tokens
- **Total**: 2,581 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product History**

I'm currently looking at the sales history of LV Tartinade Carotte Gingembre. The most recent data point is from September 16th, with a single unit sold. Prior to that, a unit was sold on August 27th, representing a 20-day interval. My next step is to further analyze this data, looking for patterns or trends.


**Calculating Sales Intervals**

I've calculated the intervals between sales for LV Tartinade Carotte Gingembre. The most recent gap is 20 days. Analyzing the year prior, 2024, reveals a historical median gap of approximately 48-49 days. I'm now comparing the recent and historical intervals to identify any significant changes in sales frequency.


**Predicting Future Demand**

The elapsed time since the last order is 21 days, and the predicted next order date using the 48-day median is November 3rd, 2025, which gives 27 days left until the next expected order. Given the recent sales data, this suggests a risk of a stockout within the next 30 days. Further investigation of seasonal trends may be needed.


**Assessing Inventory Risk**

I'm now zeroing in on the inventory risk, focusing on the time remaining until the predicted next order. The 27-day window suggests a high probability of running out of stock. Further analysis reveals the median quantity is 2 units, and the most recent orders are one unit each, but there is some variability.




</details>

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle régulier d'environ 28 jours (3-4 semaines)
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-16
- **Prochaine prédite**: 2025-10-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une consommation très stable de 1 unité par commande avec un cycle médian de 28 jours. La dernière commande datant d'il y a 21 jours, la prochaine est prévue sous ~7 jours (14 oct). Il y a donc un risque de rupture imminent sur l'horizon de 30 jours, justifiant le réapprovisionnement habituel de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 672 tokens
- **Output**: 1,146 tokens
- **Total**: 1,818 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Chip Sales Data**

The initial data points are sparse. I've noted two sales of the REB11 chip product: one on September 16th and another on September 3rd. There's a 13-day interval between these two transactions. My immediate task is to track future sales to establish a baseline.


**Projecting Sales Trends**

My focus has shifted to projecting sales cycles. I've calculated the median interval between sales, currently at 28 days, based on the historical data. This suggests the next order for REB11 chips should be around October 14th. Given today's date, I see a high risk of a stock-out within the next 30 days, as the expected order date is only a week away.


**Reassessing Order Timing**

I'm now zeroing in on the next order's timing, specifically, and reevaluating the data. While the median interval points to October 14th, the shorter 13-day interval needs consideration. The fact that the 21 days since the last order means the next shipment is due very soon. The stock-out risk assessment remains high.




</details>

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle irrégulier avec une accélération récente (50 j puis 20 j)
- **Cycle médian (jours)**: 35
- **Dernière commande**: 2025-09-16
- **Prochaine prédite**: 2025-10-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen constaté est de 35 jours. La dernière commande ayant eu lieu il y a 21 jours, la prochaine est estimée dans environ 14 jours, ce qui est inférieur au seuil de risque de 30 jours. Les quantités commandées sont systématiquement de 1 unité, sans exception.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 645 tokens
- **Output**: 1,255 tokens
- **Total**: 1,900 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Sales Velocity Data**

I'm currently analyzing the sales velocity of the [REB03] ReBEL chips premium & bio - poivre noir 125g product. The data from July 8th, August 27th, and September 16th is useful. I've calculated the intervals between sales, with the first at 50 days, followed by a significantly shorter 20 days. This indicates a potential trend worth investigating.


**Assessing the Risk Factor**

I've examined the product's sales cycle to gauge potential risk, factoring in the increasing frequency observed.  Given today's date, October 7th, and the 21 days since the last order, I've calculated that the next order is due, assuming the last interval of 20 days. Risk is high, given the trend, and I'll need to monitor this closely. I've also verified the baseline and recommended order quantities.


**Refining Risk Assessment**

I'm now zeroing in on the data, meticulously calculating the time intervals between orders to refine my risk assessment. The most recent order was placed 21 days ago, on September 16th. Based on the 35-day average cycle, the next order is projected for October 21st, but given the acceleration, the next order *should* have occurred. This informs my recommendation of ordering a single unit, given the consistent order size.


**Summarizing the Findings**

I'm synthesizing the product's ordering characteristics. My calculations point to a 35-day average cycle, although I have also considered the accelerating trend. Given that 21 days have elapsed since the last order, I'm recommending a single unit, and my confidence is "medium", but increasing because of the consistency of the order size.




</details>

</details>


<details>
<summary><strong>7. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire détecté sur les deux dernières commandes (mercredi).
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-10 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé est de 7 jours. La dernière commande remonte à 34 jours, ce qui est inférieur au seuil de risque de 40 jours défini dans les instructions. Bien que le client n'ait pas commandé récemment, le volume historique constant est de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 621 tokens
- **Output**: 1,222 tokens
- **Total**: 1,843 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the product data for TENSAÏ TEA. Focusing on recent sales history, I've noted two units sold over the past three months, specifically in August and September. This is a sparse dataset, so I'm keen to analyze any existing trends and patterns.


**Evaluating Order Frequency**

I've calculated the interval between orders for TENSAÏ TEA. Based on the two data points, the cycle is 7 days. Considering today's date and the last order, it's been 34 days, exceeding the predicted date. The "risk" assessment indicates a "YES" based on this extended gap, implying a need for closer monitoring.


**Concluding Risk Assessment**

I've finalized the risk assessment for TENSAÏ TEA, as 34 days have elapsed since the last order. This is significantly past the predicted date of September 10th based on the observed 7-day cycle. The conclusion indicates a "YES" risk, prompting the recommendation for one unit and closer monitoring due to this extended gap.


**Determining Order Recommendations**

I'm now assessing the ideal quantity. Considering a stable trend and a 1-unit baseline, the recommendation is for a single unit of TENSAÏ TEA. Despite a clear 7-day cycle, the last order was 34 days ago, confirming the existing "YES" risk profile. I feel confident recommending 1 unit.




</details>

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle irrégulier avec intervalle réduit récemment (7j vs 50j précédemment). Médiane 29j.
- **Cycle médian (jours)**: 28.5
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-10-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La dernière commande date de 34 jours (03/09/2025), ce qui dépasse le cycle médian de 28.5 jours. Le client est donc dans sa fenêtre de réapprovisionnement. Risque de rupture probable sous 30 jours au vu de l'écart actuel. La quantité demandée est systématiquement de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 645 tokens
- **Output**: 1,063 tokens
- **Total**: 1,708 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Recent Sales Data**

I'm analyzing the sales history for the ReBEL chips. Recent data points from September and August show a consistent pattern of 1 unit sold per week. Further investigation is needed to identify any trends or seasonality. I'm focusing on those specific weeks to ensure I have a thorough understanding.


**Projecting Future Stock Levels**

My focus has shifted to the ReBEL chips premium product and its potential stockouts. Using the available data, I've calculated a median cycle of 28.5 days. Since the expected order date (October 2nd) has passed, and we're at 34 days since the last order, I'm assessing the risk of a stockout within the next 30 days.


**Forecasting Potential Replenishment**

I've just finalized the analysis of the ReBEL chips premium product. The median cycle of 28.5 days suggests an immediate need for replenishment, as the predicted order date of October 2nd has passed. The sales quantities are consistent at 1 unit, with the last order 34 days ago. This confirms a moderate risk of stockout within the next month, and necessitates a recommendation for immediate replenishment.




</details>

</details>


<details>
<summary><strong>9. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle de commande d'environ 43 jours identifié sur les deux derniers points de donnée
- **Cycle médian (jours)**: 43
- **Dernière commande**: 2025-08-27
- **Prochaine prédite**: 2025-10-09 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen entre les commandes est de 43 jours. La dernière commande remontant au 2025-08-27 (soit 41 jours avant la date du jour), la prochaine commande est statistiquement prévue sous 48h. Etant donné la régularité du volume (1 unité par commande), une commande de 1 unité est recommandée pour couvrir le prochain cycle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 621 tokens
- **Output**: 1,376 tokens
- **Total**: 1,997 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product History**

I'm currently reviewing the product history for the NOD01 grapefruit-flavored lemonade. I've noted two recent purchase dates, one in July and one in August. My next step is to understand the purchase quantities associated with each. Then, I plan to analyze the trend of the purchase over time.


**Calculating Order Intervals**

I've calculated the interval between the two recorded orders of the grapefruit lemonade, which is 43 days. Based on this, and the last order date, I've predicted the next order date to be around October 9th. Considering today's date, I'm assessing the risk of a supply issue. The current gap is 41 days, with only 2 days remaining.


**Confirming Supply Requirements**

I've analyzed the purchase history and confirmed a consistent cycle of approximately 43 days. Considering today's date, and the impending predicted order date, I've assessed the risk of a supply disruption. My analysis recommends ordering one unit, to ensure sufficient stock for the stable sales cycle.


**Refining Risk Assessment**

I'm now refining the risk assessment for the grapefruit lemonade, considering the 43-day purchase cycle. The last order was 41 days ago, placing the predicted next order on October 9th. With only two days until the estimated date, I'm reinforcing the recommendation to order one unit, mitigating potential supply issues.




</details>

</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.1u
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
- **Pattern temporel**: Cycle irrégulier avec une médiane historique autour de 50-70 jours, mais un fort ralentissement récent.
- **Cycle médian (jours)**: 68
- **Dernière commande**: 2025-07-15
- **Prochaine prédite**: 2025-09-21-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-01-03-01-01-01-01-01-01-01-01-01-01-2025-09-21-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-03-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-09-22-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-09-21-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-09-21-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-09-22-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-03-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-03-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-03-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-03-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-03-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-03-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-03-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-03-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-03-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-10-03-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-10-03-01-01-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-01-10-03-2025-10-03-01-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-10-03-01-01-2025-10-03-01-10-03-2025-10-03-01-2025-10-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 292u

**🧠 Raisonnement LLM:**
Le cycle habituel tourne autour de 70 jours, et la dernière commande remonte à 84 jours. Même si les volumes récents ont baissé à 1 unité, la médiane historique est de 3 unités. Une commande de 2 unités permet de pallier une rupture probable tout en tenant compte de la tendance à la baisse.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 743 tokens
- **Output**: 34,351 tokens
- **Total**: 35,094 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing LV134 Timeline**

I'm currently focused on the projected timeline for LV134, specifically the LV BIO Tartinade Olives Vertes. I've been reviewing the sales history, particularly the most recent unit sold on July 15th, 2025. It's crucial to understand this data in the context of the target date of October 7th, 2025. I am also comparing it to the previous year's sales to inform my strategy.


**Assessing Order Frequency Patterns**

I'm now zeroing in on the order intervals. I've calculated the median interval between orders, which is roughly 68 days, though the range is quite broad. Considering the last order was 84 days ago, the data suggests potential risk regarding the target date, given the sporadic buying behavior. I'm investigating how this might translate into risk of stockout.


**Assessing Stockout Probability**

Now I'm looking at the risk of stockout. The product is currently overdue, given the median interval of approximately 68 days. Considering the target date of October 7th, and the fact that an order was due around October 3rd, the risk is high. There's also a clear downward trend in the quantity of recent orders, shifting from 3-4u down to 1u.


**Forecasting Next Order Date**

The analysis confirms the last order was 84 days ago, around October 3rd, making it overdue. Considering all data, including the irregular sales cycle, the recommended quantity is at least 2 units. This is based on the recent downward trend in orders versus the historical median. High risk of stockout is confirmed.


**Evaluating Risk Assessment**

My analysis has now fully crystallized. The product is overdue by approximately four days. The risk of stockout is clearly high, considering the irregular sales pattern and downward trend in order quantities, despite the historical median being higher. I will recommend ordering two units, prioritizing the most recent orders, while considering the historical context.


**Calculating Recommended Order Quantity**

The product is already overdue, according to the analysis. The cycle is roughly 70 days, so the due date has already passed. Recent orders have been for 1 unit, but historical data shows a median of 3, with a clear downward trend. My recommendation is to order 2 units, considering both the high risk and the recent ordering patterns.


**Concluding Risk Assessment**

My analysis is complete and summarized. The product's order is clearly overdue. The irregular order frequency, coupled with a recent downward quantity trend, signifies high stockout risk. My firm recommendation, considering this data, is to order two units, balancing the most recent ordering quantities with the historical context. This strategy mitigates potential stockouts.




</details>

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-22 13:55:28: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

## False Positives (22)

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
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Stock prédit: -0.4u (-9j restants) → prédit 2u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: -0.4u (-9j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: -1.1u (-20j restants) → prédit 1u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 3 | Stock prédit: -4.4u (-53j restants) → prédit 3u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Stock prédit: -0.5u (-18j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T11:27:24.473Z*
