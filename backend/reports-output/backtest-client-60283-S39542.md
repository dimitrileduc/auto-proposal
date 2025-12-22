# Rapport Backtest - Client DELITRAITEUR

## Contexte

- **Client** : DELITRAITEUR (ID: 60283)
- **Commande réelle** : S39542
- **Date commande** : 2025-10-03 13:14:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 9,145 input + 19,737 output = 28,882 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 72.7% | 11 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 84.2% | Score équilibré global |

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
| **MAE** | 25.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 75.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -53.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 19 | 60 | 41.0 | 68.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 25 | 50 | 25.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 15 | 25 | 10.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 20 | 7 | 13.0 | 185.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 10 | 40 | 30.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 10 | 60 | 50.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 18 | 45 | 27.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 25 | 18 | 7.0 | 38.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 19u vs Médiane: 19u (Réel: 60u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 19u
- 📊 **Baseline calculée**: 19u
- 📊 **Médiane historique**: 19u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 41u (68.3%)
- 📉 **Erreur Médiane**: 41u (68.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 19u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 28 jours le lundi
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle de commande très stable (médiane de 28 jours) avec des commandes passées systématiquement le lundi. La dernière commande datant du 29/09, la prochaine est prévue pour le 27/10 (soit dans 25 jours), ce qui justifie une planification de commande. Les quantités sont régulières, fluctuant entre 17 et 20 unités sur les trois derniers mois.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 879 tokens
- **Output**: 1,621 tokens
- **Total**: 2,500 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Quantities**

I've been analyzing the production data for MATE02, specifically the 250ml canned Mate Mate tea. The last three months have seen fluctuating output: 17 units on September 29th, 20 units on September 1st, 20 units on August 4th, and only 10 units on July 4th. There's no prior period data to compare it to.


**Calculating Future Demand**

I've determined a likely monthly cycle of 28 days based on past order data. Given today's date and the last order, I've projected the next order for MATE02 to be around October 27th. Currently, there's a 25-day window until that anticipated order. Considering the stable production trend, a quantity of 20 seems safe.


**Refining Order Quantity**

I've calculated the median of the last three orders to be 20. The average comes to 19. Considering the stable trend and regular 28-day cycle, I've decided to recommend an order of 19 units for the upcoming order on October 27th, and am confident in this recommendation.


**Evaluating Risk Assessment**

My analysis indicates a "risk YES" due to the predicted order within 25 days. Reviewing recent quantities (17, 20, 20, 10), I'm confident in a recommendation of 19 units for the October 27th order, given the stable trend and regular 28-day cycle, considering also a slight downward trend and regular orders placed on Mondays. I have high confidence.




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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec accélération récente (11j vs 59j)
- **Cycle médian (jours)**: 35
- **Dernière commande**: 2025-09-12
- **Prochaine prédite**: 2025-10-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande montre une accélération nette sur la dernière période (11 jours). En utilisant un cycle médian de 35 jours, la prochaine commande est estimée autour du 17 octobre, soit sous 15 jours (risque de rupture présent). La quantité de 25u est préconisée car elle représente la médiane robuste des trois derniers volumes (5, 25, 50), permettant de lisser la forte volatilité récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 840 tokens
- **Output**: 1,832 tokens
- **Total**: 2,672 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Recent Data Points**

I'm focused on the sales data for the LV Tartinade Aubergine. The most recent data point I have is from September 12th, showing a sale of 50 units. Before that, on September 1st, I see only 5 units sold. I need to understand this fluctuation.


**Calculating Order Timing**

I've calculated a potential next order date for the LV Tartinade Aubergine as October 17th, approximately 15 days from now. This is based on a median cycle of 35 days derived from recent sales data.  I've identified a "RISK = YES" flag given the time horizon. I'm now examining the quantities and checking for outliers.


**Evaluating Quantity and Volatility**

I'm now carefully analyzing the product's sales quantity history. The data points show significant fluctuation: 5u, 25u, and 50u. The calculated baseline is 25, but the recent trend, particularly the jump from 5 to 50, warrants caution. I'm focusing on the median to account for this volatility and B2B requirements. The confidence in the prediction is medium due to the unstable sales cycle.


**Confirming Quantity and Schedule**

I've determined a recommended quantity of 25 units for the LV Tartinade Aubergine.  My confidence is medium, as I'm accounting for unstable order cycles, increasing trends, and the volatility in the data. The next order date, predicted for October 17th, falls within a high-risk time frame.




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
- **Pattern temporel**: Cycle long sporadique d'environ 60 jours
- **Cycle médian (jours)**: 59
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-10-30 (dans 28j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: Variabilité entre Vendredi et Lundi, pas de jour fixe établi
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé entre les deux seules commandes connues est de 59 jours. La prochaine commande est estimée pour le 30 octobre, soit dans 28 jours, entrant dans l'horizon de risque de rupture de 30 jours. Bien qu'une baisse nette soit visible (25u en juillet, 5u en septembre), la prédiction s'établit sur la médiane des volumes (15u) pour pallier le manque de recul statistique et sécuriser le stock.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 812 tokens
- **Output**: 2,023 tokens
- **Total**: 2,835 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Orders**

I'm currently focused on the order history for LV161. The recent data shows two orders: five units on September 1st, and twenty-five units back in July. This translates to an interval of 59 days between the two orders. My history is limited to these two points for now, with no N-1 order.


**Calculating Inventory Risk**

I've just run a risk assessment based on the order data. The predicted next order date for LV161 is October 30th, 28 days from now. Since that falls within the 30-day horizon, I've flagged a risk. The volume trend shows a decline from 25 to 5 units, suggesting a need to be cautious. The decision principles favor caution given the lower volume and trend.


**Interpreting Demand Signals**

Now, I'm focusing on the quantity assessment for LV161. Considering the sporadic and decreasing volume trend (25 to 5 units), I'm leaning toward a quantity of 15 units for the next order. This figure aligns with the median of the two recent orders, offering a balanced approach given the data limitations. The 59-day cycle also needs to be taken into account.


**Determining Order Quantity**

I'm now revisiting the quantity calculation for LV161, specifically the 15-unit baseline. The decision is based on a median, given the limited data. The sporadic, decreasing volume trend strongly suggests maintaining this quantity. I've re-confirmed that a 59-day cycle puts the next order around late October.


**Validating Data Inputs**

My focus is shifting to validating the accuracy of the dates and calculations. Double-checking the interval between orders and the number of days until the predicted next order. This ensures the 59-day cycle and the 28-day risk window are calculated correctly.


**Refining Data Accuracy**

My work now centers on double-checking the accuracy of the dates and the resulting calculations. I'm verifying the 59-day cycle and confirming the 28-day window before the predicted next order. This ensures the risk assessment and subsequent order quantity are based on a sound foundation. Additionally, I'm confirming all values are correctly formatted and ready for the final output.




</details>

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 20u vs Médiane: 25u (Réel: 7u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 20u
- 📊 **Baseline calculée**: 20u
- 📊 **Médiane historique**: 25u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 13u (185.7%)
- 📉 **Erreur Médiane**: 18u (257.1%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 20u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 30 jours entre les commandes
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-10-01_calculated_as_30_days_from_last_order_dated_2025-09-01_which_is_2025-10-01_but_considering_today_is_2025-10-02_it_is_technically_overdue_so_2025-10-02_for_imminent_request_but_formula_yields_2025-10-01_wait_formatted_as_required_2025-10-01_is_the_date_model_predicted_before_current_date_jumped_forward_to_risk_evaluation_so_I_will_output_consistent_with_cycle_count: 2025-10-01_formatted_correctly_as_2025-10-01_to_match_pattern: 2025-10-01_let_me_be_precise:_last_2025-09-01_plus_30_days_equals_2025-10-01_which_is_the_predicted_target_date_for_logic_calculation: 2025-10-01_but_JSON_requires_YYYY-MM-DD: 2025-10-01_days_until_next_is_zero_or_negative_since_it_is_due: 0_last_order_date: 2025-09-01_predicted_next_date: 2025-10-01_wait_rechecking_format_regex_pattern: ^\d{4}-\d{2}-\d{2}$_so_2025-10-01_it_is_period_restarting_formatting: 2025-10-01_wait_days_until_next: 0_since_today_is_Oct_02_and_predicted_was_Oct_01_it_is_now_at_risk_0_days_to_go_to_replenish_stock_due_now: 0_days_until_next: 0_wait_strictly_calculated_it_is_minus_one_but_risk_categorization_uses_relative_distance: 0_last_order_date: 2025-09-01_predicted_next_date: 2025-10-01_days_until_next: 0 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian est de 30 jours, rendant la commande attendue au 01/10/2025. Comme nous sommes le 02/10/2025, le risque de rupture est immédiat. Bien que la médiane historique soit de 25u, on observe une baisse sur la dernière commande (10u) ; une quantité de 20u est recommandée pour lisser la tendance baissière tout en sécurisant le stock.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 841 tokens
- **Output**: 2,922 tokens
- **Total**: 3,763 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product History**

I'm currently focused on the sales history for the LV Tartinade Tomato Basilico. I've noted a couple of past sales events: 25 units on 2025-07-04 and again on 2025-08-19. There is also a sale on 2025-09-01. I'm starting to build out the timeline to understand the sales velocity, but have no N-1 history to compare to, at present.


**Assessing Stockout Risk**

I've determined a stockout risk for the LV Tartinade Tomato Basilico, as the predicted order date was missed. The decreasing trend in quantities, from 25 to 10 units, is something I am considering. My baseline recommendation, considering the small sample size, is 25, while taking the recent drop into account.


**Finalizing Recommendation Quantity**

I'm now revisiting the quantity recommendation. While the median is 25, the decreasing trend from 25 to 10 is concerning, and warrants further weight. I've re-examined the numbers and, considering the potential impact on sales of a staple product, I believe a quantity of 20 units is a more suitable compromise, while still anticipating a relatively stable demand.


**Finalizing Quantity Recommendation**

I'm now revisiting the recommendation, considering the irregular cycle and the recent smaller order. Though the median is 25, the sharp decrease to 10 concerns me. Given the uncertainty, and considering the product's role, I am leaning toward recommending 20 units to balance potential stock-outs with the recent slowdown.


**Evaluating Frequency and Volume**

The sales frequency shows irregular intervals, with a median of approximately 30 days between orders. I've noted a decreasing volume trend in recent orders from 25 to 10. Considering these factors and the overdue order date, I'm recommending 20 units. I am confident in this, despite the fact that the median of past orders is 25.


**Calculating Risk and Quantity**

I'm now zeroing in on the product's ordering pattern, analyzing the 46 and 13-day intervals. The fact that the most recent order was undersized, with only 10 units, concerns me. I've calculated a baseline of 20 units as a compromise, given the overdue order date and the potential for a stockout. I'm feeling confident in this recommendation.




</details>

</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 40u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 10u
- 📊 **Baseline calculée**: 10u
- 📊 **Médiane historique**: 10u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 30u (75.0%)
- 📉 **Erreur Médiane**: 30u (75.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 10u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel devenant mensuel
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-10-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian est de 15 jours, mais l'intervalle actuel atteint 31 jours (identique à l'intervalle de juillet), suggérant une commande imminente ou un passage à un rythme mensuel. La quantité a diminué de 20u à 10u sur les deux dernières commandes, indiquant une baisse de la demande post-estivale. On se base sur les 10u les plus récents.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 874 tokens
- **Output**: 1,555 tokens
- **Total**: 2,429 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Data**

I've been analyzing the sales data for NODA limonade bio. Specifically, I'm noting the dates and quantities sold for the "citron de sicile" variant. The goal is to identify trends in demand and any potential gaps in the supply chain over the past three months, starting from today, October 2nd, 2025. There are some interesting intervals in the existing record.


**Calculating Order Timing**

I've determined the median interval between orders for the "citron de sicile" variant to be 15 days. Based on the last order on September 1st, I projected an order by September 16th. However, today is October 2nd, and no new orders have been placed, placing it overdue by 16 days. The last two intervals were 31 and 13 days respectively. I assess a stockout risk.


**Evaluating Replenishment Quantities**

I've examined the order quantities, noting a recent decline from 20 to 10 units. Considering this trend and the median of recent orders, I estimate a baseline demand of 10 units. Given the potential for a new monthly cycle, I will now recommend 10 units, while further monitoring.


**Determining Cycle Risk**

I'm now zeroing in on the ordering cycle, emphasizing the 31-day gap since the last order. This suggests a potential stockout or a deviation from the usual 15-day median. The fact that the maximum historical interval is reached, and the upcoming recommendation is imminent, significantly raises the risk profile.




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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier (environ 30 jours), tendance à commander le premier lundi du mois
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-10-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
Le client présente un cycle de réapprovisionnement mensuel très stable. Après une commande initiale de 20 unités, le volume s'est stabilisé à 10 unités sur les deux derniers mois. La date de commande théorique (30 jours après la précédente) était le 1er octobre, nous sommes le 2 octobre : le risque de rupture est critique car la commande est imminente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 846 tokens
- **Output**: 1,546 tokens
- **Total**: 2,392 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Sales Data**

I've been poring over the sales figures for the ginger-lemongrass lemonade. Recent data shows a consistent 10-unit sale on Mondays, both in September and August. I need to understand what's causing this predictable pattern and look for potential drivers.


**Forecasting Order Placement**

I've moved on to the next step, using the sales data to predict the next order date for the ginger-lemonade. Based on the 30-day cycle, I expected an order around October 1st. The current date is October 2nd, and given the consistent 10-unit demand, the risk of stock depletion is high. Therefore, I will order 10 units.


**Evaluating the Risk Assessment**

My analysis indicates a high-risk situation, with the next order overdue. The historical data points to a consistent 10-unit demand on a roughly 30-day cycle, indicating a need for replenishment. Given the overdue order and the lack of seasonality, I will order 10 units with high confidence.


**Finalizing Order Recommendations**

I've incorporated the day of the week analysis, confirming a high-risk situation. The customer typically orders on the first Monday of the month, suggesting a potential order on October 6th. Although the order is overdue by one day, that does not change the risk assessment. The recommendation remains to order 10 units with high confidence, based on historical patterns.




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
- **Pattern temporel**: Cycle long d'environ 60 jours
- **Cycle médian (jours)**: 59
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-10-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande systématiquement 18 unités avec un intervalle de 59 jours. La dernière commande datant du 2025-09-01, la prochaine est estimée pour fin octobre (sous 30 jours), ce qui justifie une commande de réapprovisionnement identique à l'historique stable.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 817 tokens
- **Output**: 1,067 tokens
- **Total**: 1,884 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Product History**

I'm currently focused on the historical sales data for the NODA lemonade product, specifically the mango passion flavor. I've noted the 18u sales figures from September 1st, 2025, and July 4th, 2025. I'm now checking for the history from the previous year, but it seems there is none. My next step will be to analyze order data.


**Forecasting Future Orders**

I'm now calculating the next predicted order date using the 60-day cycle, arriving at October 31st. With today's date being October 2nd, I have determined the remaining days until the next order is 29 days, making the risk potentially high, as B2B anticipation suggests. I'll now assess the quantity consistency and baseline units.


**Recommending Replenishment**

I've determined a risk for the NODA mango passion lemonade due to the next order being predicted within 30 days. Specifically, I'm recommending a replenishment of 18 units, the baseline quantity, given the consistent order history. The confidence level is medium overall, high on quantity. I have confirmed that the date format is valid and the quantity is an integer, and the results are JSON parseable.




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
- **Pattern temporel**: Cycle trimestriel potentiel (90 jours)
- **Cycle médian (jours)**: 90
- **Dernière commande**: 2025-07-04
- **Prochaine prédite**: 2025-10-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Une seule commande enregistrée il y a exactement 90 jours. Dans un contexte B2B, cela suggère un cycle de réapprovisionnement trimestriel dont l'échéance tombe à la date actuelle. En l'absence d'autre historique, la quantité de la dernière commande est reconduite.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 786 tokens
- **Output**: 2,527 tokens
- **Total**: 3,313 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Order Frequency**

I'm currently focused on the order frequency of the LV BIO Tartinade Paprika Chili. Only one order was placed in the last three months, specifically on 2025-07-04. Therefore, the elapsed time since the last order is 90 days, classifying it as a low-frequency item.


**Determining Risk of Rupture**

I've considered the B2B context; given the long interval since the last order (90 days), there's no immediate need for replenishment unless we assume the initial order quantity was designed to last precisely the same amount of time. Since there is no indication of a regular cycle, I'm leaning toward predicting zero units for the next period, mitigating any immediate rupture risk.


**Calculating Reorder Quantity**

I'm now revisiting the recommendation based on the "sporadic product" exception, I'm leaning toward recommending a reorder of 25 units. Although there is little data to support a firm conclusion, the 90-day cycle does suggest a possible demand and the risk of a rupture. My confidence, however, remains low due to limited historical data.


**Reassessing Replenishment Strategy**

Based on the prompt, I'm now leaning towards recommending a reorder, specifically the 25 units from the last purchase. While the data is limited to a single point 90 days ago, the timeframe is precisely at the edge of the trigger. I believe a suggestion to replenish the prior quantity is prudent at this point, considering the exact three-month period.


**Refining Recommendation Strategy**

I'm now zeroing in on the final recommendation. I've re-examined the 90-day cycle and the current date, confirming a potential quarterly frequency. Because the model states "RISQUE OUI" given a 0-day distance, I will now recommend ordering the last quantity of 25 units. Confidence is still low due to the lack of historical data, but this seems the most data-driven decision.


**Finalizing the Recommendation**

I've now re-examined the 90-day cycle and the current date, confirming a potential quarterly frequency. Because the model says "RISQUE OUI" at a zero-day distance, I will now recommend ordering the last quantity of 25 units. Confidence is still low due to the lack of historical data, but this seems the most data-driven decision.


**Evaluating a Quarterly Cycle**

I'm now carefully examining the date of the last order, 2025-07-04, precisely 90 days ago, which suggests a potential quarterly pattern, despite limited historical data. This aligns with the "sporadic" product exception and prompts a consideration of replenishment, leading me to a recommendation of 25 units.




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

**✅ Quantité LLM**: 19u (confidence: high)
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

**✅ Quantité LLM**: 25u (confidence: medium)
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

**✅ Quantité LLM**: 20u (confidence: medium)
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

**✅ Quantité LLM**: 10u (confidence: medium)
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

**✅ Quantité LLM**: 10u (confidence: high)
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
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 53 | Stock prédit: -5.4u (-4j restants) → prédit 53u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:59:36.587Z*
