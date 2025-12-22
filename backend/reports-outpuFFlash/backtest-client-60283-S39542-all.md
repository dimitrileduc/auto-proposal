# Rapport Backtest - Client DELITRAITEUR

## Contexte

- **Client** : DELITRAITEUR (ID: 60283)
- **Commande réelle** : S39542
- **Date commande** : 2025-10-03 13:14:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 6,990 input + 19,227 output = 26,217 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 72.7% | 11 produits prédits, 8 corrects |
| **Rappel** | 88.9% | 9 produits réels, 8 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 25.88 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 67.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 83.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -51.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 20 | 60 | 40.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 25 | 50 | 25.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 15 | 25 | 10.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 25 | 7 | 18.0 | 257.1% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 10 | 40 | 30.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 10 | 60 | 50.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 18 | 45 | 27.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 25 | 18 | 7.0 | 38.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 20u vs Médiane: 19u (Réel: 60u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 20u
- 📊 **Baseline calculée**: 18.5u
- 📊 **Médiane historique**: 19u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 40u (66.7%)
- 📉 **Erreur Médiane**: 41u (68.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 20u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier calé sur le lundi
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Le client présente un cycle d'approvisionnement extrêmement régulier de 28 jours (3 lundis consécutifs). Bien que la dernière commande date d'il y a seulement 3 jours, la prochaine commande attendue se situe dans 25 jours, ce qui est inférieur au seuil de risque de 40 jours défini. La quantité recommandée de 20 unités correspond au volume le plus fréquent consommé par le client durant ses cycles pleins.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 683 tokens
- **Output**: 1,956 tokens
- **Total**: 2,639 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Sales Trends**

I've been analyzing the sales data for MATE02, specifically looking at the 250ml can. My focus is on tracking recent history, pinpointing shifts. I've noted sales on September 29th and September 1st, so I can see how sales are trending towards the end of September, and how the month of September compares to previous months.


**Predicting Order Timeline**

The analysis of MATE02 sales is continuing. I've calculated the median cycle at 28 days and predicted the next order date to be October 27th. Comparing recent sales quantities, I've noted a slight trend of roughly 17-20 units per order. Based on this, there is a risk of out-of-stock within the next 30 days.


**Confirming Stock Levels**

The calculations are complete. I have modeled the predicted order date as October 27th, 2025. This gives us 25 days before the next order. I've noted a stable trend of 17-20 units per order. Given the recent history and cycle of ordering, I confidently recommend ordering 20 units.


**Finalizing Recommendation Strategy**

The analysis confirms the need for an order, focusing on the 28-day cycle. With 25 days until the next order, and a recent order of 17 units on September 29th, the trigger is met. I'm recommending 20 units, aligning with the frequent order size and mitigating the risk of being out of stock. The high confidence level reflects the consistent pattern.


**Reassessing Order Timing**

I'm now focusing on the implications of the 40-day rule. Considering the recent order of 17 units on September 29th and the 28-day cycle, I'm checking the final recommendations. The calculations show a 25-day window until the next order, validating the risk assessment. The recommendation is still 20 units, based on historical ordering patterns. I'm verifying the JSON format.




</details>

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 25u vs Médiane: 25u (Réel: 50u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 25u
- 📊 **Baseline calculée**: 25u
- 📊 **Médiane historique**: 25u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 25u (50.0%)
- 📉 **Erreur Médiane**: 25u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 25u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Accélération du cycle de commande observée (59 jours réduit à 11 jours).
- **Cycle médian (jours)**: 35
- **Dernière commande**: 2025-09-12
- **Prochaine prédite**: 2025-10-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Le cycle moyen de 35 jours suggère une prochaine échéance le 17 octobre, ce qui entre dans l'horizon de risque des 30 jours (ou 40 selon les consignes). Le volume est en forte croissance (50u dernièrement), mais en l'absence de données historiques plus vastes, la médiane de 25u reste la base de calcul la plus sûre pour éviter un surstockage tout en couvrant le besoin probable.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 644 tokens
- **Output**: 2,915 tokens
- **Total**: 3,559 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Consumption Rates**

I'm currently working on calculating the recent consumption rates for the LV Tartinade Aubergine product. I've got the sales history from September 12th, September 1st, and July 4th. I'll need to use these dates and quantities to determine the intervals and build out a basic consumption rate model.


**Evaluating Order Intervals**

I've analyzed the intervals between orders, finding a significant change from 59 days to 11 days. This suggests a potential shift in the customer's ordering pattern, with the most recent interval being a more accurate indicator. I'm leaning toward a shorter cycle. I'm focusing on "Risque de Rupture" and the next order date. I believe the dates are compressing and have accounted for a 30 day horizon from today's date.


**Determining Consumption and Volumes**

I've re-evaluated the consumption data, focusing on the trend. The cycle appears to be accelerating, and volume is increasing. The 5u order seems like an outlier, and the median quantity is 25u. However, the most recent order was 50u. I will balance these numbers when making a final determination.


**Determining Order Timing and Volume**

I've determined a predicted next order date of October 17th, but the risk of rupture is confirmed. The baseline quantity is set to 25, the median. However, given the most recent order of 50 units, and the trend of increasing volume, I'm considering adjusting my recommended quantity. My confidence is low, as the data set is small and the volume is variable.


**Confirming Final Recommendations**

The analysis confirms a 25-unit order as the most prudent, leveraging the median for outlier robustness. While the recent 50-unit order signals potential growth, I'm sticking to the median due to low confidence and high volume volatility. A next order is predicted around October 17th. I am adhering to the median for the current determination.


**Concluding Procurement Strategy**

I've finalized my analysis, predicting the next order around October 17th. Given the shrinking order cycle and volume increase from 25u to 50u, I still recommend a conservative 25-unit order, leveraging the median to mitigate volatility. The risk of rupture remains a key factor in my recommendation. I'm remaining cautious with the recommendation.


**Reassessing the Recommendation**

I've re-evaluated the recommended quantity, balancing the median of 25 units with the most recent 50-unit order. While I recognize the increasing volume trend, I'm sticking to the more conservative 25-unit recommendation to account for potential volatility and the emphasis on median values to handle outliers. The estimated next order date is still October 17th.


**Synthesizing Procurement Strategy**

I'm now consolidating the data, and still recommending 25 units for the next order, despite the recent 50-unit order and increasing volume trend. I'm focusing on the median to account for potential outliers. The estimated next order date remains around October 17th, confirming a "Risque de Rupture."




</details>

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 15u vs Médiane: 15u (Réel: 25u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 15u
- 📊 **Baseline calculée**: 15u
- 📊 **Médiane historique**: 15u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 10u (40.0%)
- 📉 **Erreur Médiane**: 10u (40.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 15u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier d'environ 59 jours basé sur deux points
- **Cycle médian (jours)**: 59
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-10-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très restreint (n=2). L'intervalle observé de 59 jours place la prochaine commande probable fin octobre (dans moins de 30 jours), justifiant une nouvelle commande. La quantité de 15 représente la médiane entre le volume initial (25u) et le dernier réapprovisionnement (5u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 616 tokens
- **Output**: 1,151 tokens
- **Total**: 1,767 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Data**

I've begun to analyze the sales data for the LV Tartinade Mangue curry. Initial observations show a limited number of sales over the last three months, specifically five units on September 1st and twenty-five units on July 4th. This gives me a preliminary overview, and I'm prepared to dig deeper.


**Calculating Replenishment Risk**

Based on the order history, I've calculated a predicted next order date of October 30th. Given that today is October 2nd, there are 28 days until the predicted order, triggering a stockout risk. The median quantity is 15. The volume shows a negative trend, and I'm aware of the limited data.


**Forecasting Replenishment Strategy**

I've examined the trend, and with only two data points, the pattern reveals an irregular cycle of 59 days. Using the available data, I'm predicting an order around October 30th. My confidence in the quantity is low, but I've settled on 15 units, the median of previous orders. This is a conservative estimate.




</details>

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 25u vs Médiane: 25u (Réel: 7u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 25u
- 📊 **Baseline calculée**: 25u
- 📊 **Médiane historique**: 25u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 18u (257.1%)
- 📉 **Erreur Médiane**: 18u (257.1%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 25u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle irrégulier mais court (moyenne 30 jours)
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-10-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La dernière commande remonte à 31 jours, dépassant la périodicité moyenne calculée (~30 jours). Bien que la dernière quantité commandée ait chuté à 10u, les commandes précédentes de 25u suggèrent un besoin récurrent de ce volume. Risque de rupture identifié car nous sommes à J+31 post-commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 645 tokens
- **Output**: 1,076 tokens
- **Total**: 1,721 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Quantities**

I'm analyzing the production quantities for the LV162 product, specifically the LV Tartinade Tomato Basilico (190g). Currently, I'm focusing on the sales history, noting the volume shifts over the last few months. I'm calculating the intervals between production runs to spot any trends in demand.


**Predicting Production Schedules**

I'm now calculating the next potential production date for LV162 (LV Tartinade Tomato Basilico 190g).  My analysis of the intervals between orders, specifically looking at a 30-day average, suggests that production should have occurred around October 1st. Considering today's date (October 2nd) and the last order, I've identified a risk of stockout. The decreasing order quantity of 10 units relative to prior batches of 25 warrants closer inspection.


**Refining Quantity Recommendations**

I'm now determining the appropriate order quantity for LV162. Given the decreasing trend from 25 to 10 units and an average production cycle of 30 days, I'm leaning toward recommending an order of 25 units to ensure adequate stock levels, while accounting for a lower recent order. My confidence remains medium due to the limited historical data.




</details>

</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 40u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 10u
- 📊 **Baseline calculée**: 15u
- 📊 **Médiane historique**: 10u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 30u (75.0%)
- 📉 **Erreur Médiane**: 30u (75.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 10u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier sur les deux derniers mois, succédant à un cycle mensuel
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-09-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La dernière commande date du 2025-09-01. Avec un cycle médian détecté de 15 jours, la commande aurait dû être passée vers le 16 septembre. Au 2 octobre, nous sommes à 31 jours depuis la dernière commande, ce qui représente un retard significatif par rapport au rythme récent. Un risque de rupture est identifié. Bien que la moyenne historique soit de 15 unités, la quantité recommandée est fixée à 10 unités pour s'aligner sur les deux dernières commandes les plus récentes, privilégiant la tendance actuelle de réduction de volume par commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 678 tokens
- **Output**: 1,773 tokens
- **Total**: 2,451 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Order Quantities**

I'm analyzing the historical demand for NODA limonade, specifically the low-calorie Sicilian lemon variant. Looking at recent sales data, I see a consistent demand of 10 units on specific dates. This insight is crucial for determining the optimal order quantity. Further investigation into these dates might reveal demand drivers.


**Evaluating Order Urgency**

I've calculated the predicted next order date as September 16th, which has already passed. The last order was placed 31 days ago. Given the 15-day median cycle and the decreasing trend in quantities, I'm leaning toward ordering 10 units now to avoid a stockout.


**Determining the Order Size**

I've reviewed the historical order data, with the latest orders being 10 units. Considering the demand pattern and that the predicted order date has passed, and given the consistent demand for 10 units, my plan is to order 10 units immediately. The confidence is high due to the cycle's overdue status.




</details>

</details>


<details>
<summary><strong>6. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 60u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 10u
- 📊 **Baseline calculée**: 10u
- 📊 **Médiane historique**: 10u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 50u (83.3%)
- 📉 **Erreur Médiane**: 50u (83.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 10u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier (~30 jours), avec une préférence pour le début de mois
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-10-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
Le client commande selon un cycle mensuel très précis, avec les deux dernières commandes effectuées au début de chaque mois (les lundis). La date prédite était le 1er octobre ; nous sommes le 2 octobre, une nouvelle commande est donc imminente. La quantité s'est stabilisée à 10 unités après une commande initiale plus importante en juillet.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 650 tokens
- **Output**: 1,578 tokens
- **Total**: 2,228 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Sales Data**

I've been poring over the sales figures for the ginger-lemongrass lemonade. Recent data reveals a consistent 10-unit sale on Mondays, for the past two months. Further analysis is needed to see if this is a trend or an anomaly. I'll need to look at more data.


**Forecasting Order Frequency**

I've calculated the median interval between orders, around 30 days. Based on this, and the last order date, I predicted an order on October 1st, which has already passed. Given the current date and the order history, I've concluded the need for a refill is high, within this month. The quantities appear to have stabilized.


**Evaluating the Refill Need**

I've examined the product's ordering pattern. With a consistent monthly cycle, the predicted refill date was October 1st, which has passed. My analysis of this and the quantities suggests a high probability of needing a refill in the next month. I'm recommending 10 units based on recent orders.


**Recommending Order Quantity**

My analysis indicates an imminent order. The last two orders were for 10 units, and based on the recent cycle, the order is overdue. The monthly cycle and stable recent quantity patterns make me recommend a 10-unit order. I'm feeling confident in this recommendation.


**Finalizing the Recommendation**

I've re-examined the data and confirmed the need for an order. The consistent monthly cycle, with the last order on September 1st, points to an overdue order. I'm confident in recommending 10 units, based on the recent order history and a stable trend. The next Monday is the 6th, and it's definitely high risk.




</details>

</details>


<details>
<summary><strong>7. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 18u vs Médiane: 18u (Réel: 45u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 18u
- 📊 **Baseline calculée**: 18u
- 📊 **Médiane historique**: 18u
- ✅ **Réel commandé**: 45u
- 📉 **Erreur LLM**: 27u (60.0%)
- 📉 **Erreur Médiane**: 27u (60.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 18u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel d'environ 59 jours
- **Cycle médian (jours)**: 59
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-10-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes de 18 unités espacées de 59 jours. La dernière commande datant du 2025-09-01, la prochaine échéance est prévue pour le 2025-10-30. Avec un délai restant de 28 jours par rapport à la date du jour (inférieur au seuil de 40 jours), il existe un risque de rupture imminent qui justifie une commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 621 tokens
- **Output**: 1,208 tokens
- **Total**: 1,829 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product History**

I'm currently reviewing the history of the [NOD04] product, focusing on its sales data over the past few months. I see a couple of data points from the last three months, specifically September and July, both at 18u. I will examine the N-1 data next to gain more insight.


**Calculating Future Demand**

I've determined a cycle of approximately 59 days between orders for [NOD04]. Based on the last order on 2025-09-01, and today's date, I've predicted the next order date to be 2025-10-30. Considering the 30-day horizon, this indicates a moderate risk of stockout. Therefore, I recommend ordering 18 units to cover this demand.


**Assessing Order Frequency**

I've refined the order cycle analysis, confirming a 59-day interval. Given this, I project the next order on 2025-10-30, just under a month away. Given the stable past orders of 18 units, a quantity of 18 is still recommended, albeit with medium confidence due to the limited history.




</details>

</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 25u vs Médiane: 38u (Réel: 18u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 25u
- 📊 **Baseline calculée**: 25u
- 📊 **Médiane historique**: 38u
- ✅ **Réel commandé**: 18u
- 📉 **Erreur LLM**: 7u (38.9%)
- 📉 **Erreur Médiane**: 20u (111.1%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 25u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Historique insuffisant (une seule commande enregistrée il y a 90 jours)
- **Cycle médian (jours)**: 90
- **Dernière commande**: 2025-07-04
- **Prochaine prédite**: 2025-10-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Dernière commande un vendredi, nous sommes actuellement un jeudi. Échéance de 90 jours atteinte.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit n'a été commandé qu'une seule fois (25u) le 2025-07-04. Exactement 90 jours se sont écoulés jusqu'à aujourd'hui (2025-10-02), ce qui peut correspondre à un cycle de réapprovisionnement trimestriel en B2B. Dans le doute, et suivant le principe de précaution pour éviter une rupture de stock sur un produit de fond de placard, on préconise le renouvellement de la quantité initiale.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 590 tokens
- **Output**: 2,532 tokens
- **Total**: 3,122 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Order Risk**

\n\n

I'm analyzing the order risk for LV BIO Tartinade Paprika Chili. The last order was 90 days ago, which is significant. As it's a food product, this time frame is crucial. I'm focusing on the elapsed time since the last order to assess the risk, given the lack of cycle data.


**Evaluating The Risk Further**

\n\n

I've refined the risk assessment for LV BIO Tartinade. Focusing on the elapsed time, 90 days since the last order clearly exceeds the 40-day threshold. This absence of regular ordering makes it difficult to predict. The product is a food item, which adds urgency, while the 25-unit order suggests a typical case size. I'm leaning toward a low-demand scenario or potential delisting. Without clear cycle data, I'm inclined to assume the worst, given the industry's risk-averse stance.


**Finalizing The Recommendation**

\n\n

Now I'm focusing on the final recommendation. Given the lack of a defined cycle, I'm weighing the 90-day lapse since the last order of LV BIO Tartinade against the risk of stockout. The standard case size was 25 units. While a 90-day gap is significant, I am also considering a potential for a new order.  I must decide whether to recommend 25 units or zero. My choice leans towards the cautious side given the risk-averse industry.


**Formulating the Final Verdict**

\n\n

My analysis of the LV BIO Tartinade Paprika Chili has led me to a critical juncture. The lack of a defined cycle is problematic. However, given that the 90-day interval since the last order neatly aligns with the current date, I must reconsider my initial low-risk bias. This potential for an imminent order, coupled with the product's typical 25-unit case size, now leans my recommendation toward advising a replenishment of 25 units, despite the uncertainty, as a best-guess based on the implied cycle.


**Reassessing the Cycle**

\n\n

My analysis has evolved. With one data point, the cycle is undefined, but the 90-day interval since the last order is critical, especially for food. While the exact ordering pattern is uncertain, the 90-day time frame points toward a potential need, which is today, and the last order's size supports a 25-unit recommendation to avert a risk. I am now recommending 25 units.


**Calculating The Replenishment**

\n\n

My analysis now focuses on generating the final JSON output. Considering only one order and a 90-day interval, a quarterly cycle seems probable, with the expected replenishment date being today. Based on the "mieux vaut trop que pas assez" rule, I'm leaning toward recommending 25 units. This is based on the single historic order. Despite a low confidence rating due to a lack of a clear cycle, it is the best prediction.




</details>

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 09:22:29: 17u
- 2025-09-01 06:22:40: 20u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: high)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 09:19:50: 50u
- 2025-09-01 06:22:40: 5u
- 2025-07-04 11:09:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 5u
- 2025-07-04 11:09:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 15u (confidence: low)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 25u
- 2025-07-04 11:09:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 10u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>6. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-04 09:36:12: 10u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>7. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 18u
- 2025-07-04 11:09:53: 18u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: medium)
**📊 Quantité Réelle**: 45u

</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-04 11:09:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 18u

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 126 | Stock prédit: -38.2u (-13j restants) → prédit 126u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 21 | Stock prédit: -18.3u (-27j restants) → prédit 21u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 63 | Stock prédit: -5.4u (-4j restants) → prédit 63u mais non commandé |


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
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 40 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T13:01:56.524Z*
