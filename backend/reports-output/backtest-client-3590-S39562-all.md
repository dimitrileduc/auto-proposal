# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S39562
- **Date commande** : 2025-10-06 09:21:48
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 10
- **Tokens**: 10,389 input + 19,726 output = 30,115 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 10 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 57.1% | Score équilibré global |

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
| **MAE** | 13.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 19.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 29.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 19.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 160 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 132 | 88 | 44.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 20 | 12 | 8.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 160u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 160u
- 📊 **Médiane historique**: 160u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières environ tous les 11 jours
- **Cycle médian (jours)**: 11
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-10 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle d'achat médian est de 11 jours, plaçant la prochaine commande autour du 10 Octobre, ce qui présente un risque de rupture imminent. La quantité de base de 160 unités est très stable sur l'historique récent et correspond aux paliers observés en N-1, malgré un pic ponctuel à 240 lors de la dernière commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,237 tokens
- **Output**: 1,813 tokens
- **Total**: 3,050 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Volumes**

I'm currently focused on the production volumes for product [PF0078] FILOU CHASSEUR 5 L. My analysis highlights a recent peak of 240 units on September 29th, a significant jump from the previous 160 units in mid-September, and earlier in August. The rapid increase requires close attention to understand its drivers.


**Calculating Inventory Risks**

I've calculated the median interval between orders, around 10.5 days. With the last order on September 29th, and today being October 5th, I estimate the next order around October 9th or 10th. Given the recent production data, there's a definite risk of stockout within the next 30 days. I'm focusing on the outlier status of 240.


**Evaluating Order Patterns**

\n\n

I've just finished analyzing the order intervals, calculating the median at approximately 10.5 days. With the latest order on September 29th, I'm projecting the next around October 9th or 10th. I've also compared the recent 2025 data to the N-1 data from 2024, noting the frequent high volume orders in September and a trend of stable production with periodic increases. I'm taking the seasonal impact, the outlier status, and the days left until next order into account.


**Summarizing Key Findings**

I'm now consolidating the data, checking the JSON format for accuracy, which is confirmed. My focus is on the cycle length; I'm settling on approximately 11 days. Based on this, I'm predicting the next order will be around October 10th and recommending an order quantity of 160 units, based on the stable historical median. The confidence is very high.




</details>

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 132u vs Médiane: 104u (Réel: 88u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 132u
- 📊 **Baseline calculée**: 132u
- 📊 **Médiane historique**: 104u
- ✅ **Réel commandé**: 88u
- 📉 **Erreur LLM**: 44u (50.0%)
- 📉 **Erreur Médiane**: 16u (18.2%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 132u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier de commandes tous les 15 à 20 jours
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-16_date_not_reached_yet_but_imminent_for_prediction_logic_within_the_cycle_window_from_last_recorded_order_at_the_calculation_date_2025-10-05_so_prediction_is_for_october_16_approximately_17_days_after_sept_29_which_means_next_is_due_promptly_relative_to_today_oct_5_expected_in_11_days_from_baseline_date_2025-10-05_with_cycle_of_17_days_from_2025-09-29_resulting_in_predicted_next_date_2025-10-16_and_days_until_next_11_days_from_calculation_date_2025-10-05_which_is_within_the_30_day_horizon_for_ordering_at_next_cycle_point_even_if_it_is_not_today_exactly_since_the_logic_detects_the_forthcoming_need_within_the_period_considered_high_risk_for_supply_chain_planning_to_ensure_avail_for_next_cycle_window_opening_soon_predict_order_now_if_due_within_30_days_so_oct_16_is_definite_risk_yes_next_predicted_date_2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 52u, 208u

**🧠 Raisonnement LLM:**
Le cycle médian de 17 jours et la régularité des dernières commandes à 132u indiquent un besoin imminent autour du 16 octobre (soit 11 jours après la date d'analyse). La tendance est passée de 104u à 132u récemment, ce qui est corroboré par les volumes élevés constatés en septembre N-1. Aucun outlier majeur ne perturbe la médiane récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,236 tokens
- **Output**: 2,112 tokens
- **Total**: 3,348 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Production Intervals**

I'm currently focused on the production intervals for the FILOU CHASSEUR product. Observing the data, I see the gaps between production runs. I'm noting the 18-day interval from September 11th to September 29th, and the 16-day interval prior to that. I am beginning to look for potential patterns and influencing factors.


**Refining Interval Calculations**

I'm now incorporating N-1 data for the FILOU CHASSEUR product to improve interval predictions. I've calculated a median cycle of roughly 17 days recently, but N-1 data suggests a tighter cycle of 10-13 days. Based on the 2025-09-29 order, my next estimated production date is around 2025-10-16. I am also assessing potential supply rupture risk within the 30-day window.


**Evaluating Future Quantities**

I'm now analyzing the production quantities for FILOU CHASSEUR. I've noted the recent trend of increasing volume, with a baseline quantity of 132 units. Observing N-1 data, I'm finding consistent seasonal patterns, and I estimate the recommended production quantity at 132. The predicted date for the next production run is October 16th.


**Summarizing Production Findings**

I'm now consolidating my analysis for the FILOU CHASSEUR product. The frequency pattern reveals regular cycles of roughly 17 days, with a predicted next production date of October 16th. I've classified seasonality as weak. I've noted a steady upward trend in production volume, with a baseline quantity of 132 units and a high confidence in these findings.




</details>

</details>


<details>
<summary><strong>3. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Sporadique (intervalles irréguliers de 11 à 100+ jours)
- **Cycle médian (jours)**: 45
- **Dernière commande**: 2025-09-11
- **Prochaine prédite**: 2025-10-26 (dans 21j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Pas de jour de commande fixe identifié
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit est très sporadique avec une seule commande en 2025. En se basant sur la médiane des intervalles historiques (environ 45 jours), la prochaine commande est estimée pour fin octobre (sous 30 jours). La quantité recommandée est fixée à 1 unité, suivant la règle stricte des petites quantités récentes (1u en septembre).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 882 tokens
- **Output**: 1,597 tokens
- **Total**: 2,479 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Historical Sales Data**

I'm now digging into the historical sales data for product [PF0084], specifically looking at the 2024 figures to spot trends. The early 2024 data shows a couple of sales spikes, and I'm keen to understand the factors behind the 11-day gap. I will analyze the recent data from September 2025 to see if patterns emerge.


**Predicting Order Imminence**

I'm now assessing the likelihood of an upcoming order for [PF0084]. My analysis reveals sporadic ordering patterns, with significant gaps. Based on the 45-day median cycle from 2024, the next order is potentially due around October 26th. Given that the last order was 24 days ago and a recent one-unit sale, I'm marking it a potential risk.


**Forecasting Demand Parameters**

I'm now assessing the predictive elements for [PF0084] FILOU CARBONNADES. Despite infrequent sales, I've calculated a 45-day median cycle. With the last order placed 24 days ago, the next is projected around October 26th. Given the low-volume, sporadic ordering, a minor risk of an upcoming order is probable, especially considering that the stew sales will begin to occur.


**Determining Order Quantity**

I'm now assessing the order quantity for [PF0084] FILOU CARBONNADES. Despite infrequent sales, I'm sticking with a recommended order of one unit. While the reorder window is approaching, the last order was for a single unit and consistent with the historical sales. I've re-evaluated the risk and am confident in the "one unit" recommendation.




</details>

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 20u vs Médiane: 30u (Réel: 12u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 20u
- 📊 **Baseline calculée**: 20u
- 📊 **Médiane historique**: 30u
- ✅ **Réel commandé**: 12u
- 📉 **Erreur LLM**: 8u (66.7%)
- 📉 **Erreur Médiane**: 18u (150.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 20u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle structuré de 44 jours en 2025 versus hebdomadaire en 2024
- **Cycle médian (jours)**: 44
- **Dernière commande**: 2025-09-11
- **Prochaine prédite**: 2025-10-25 (dans 20j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Passage d'un mode de commande hebdomadaire (N-1) à un mode mensuel espacé avec volumes doublés
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Bien que le rythme de commande ait changé par rapport à 2024 (moins fréquent), le client a commandé exactement 20u à chaque fois en 2025. Avec un cycle de 44 jours détecté entre juillet et septembre, la prochaine commande est attendue autour du 25 octobre. Elle entre dans l'horizon de 30 jours, justifiant une commande basée sur le volume récent constant.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,129 tokens
- **Output**: 1,659 tokens
- **Total**: 2,788 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Sales Data**

I'm analyzing the sales history for the JF SAUCE BEARNAISE, specifically the 3L product. I see two sales points in 2025 and one in the previous year. The interval between the two 2025 sales appears to be 44 days. I'll need to dig deeper into the 2024 data to get a clearer picture.


**Evaluating Stock Risk**

I've assessed the risk, noting a potential stockout within the next 30 days, specifically around October 25th, given the observed 44-day cycle. The high quantity of 20 units per order in 2025 warrants a closer look at current inventory levels. Comparing 2024 and 2025, it appears that the 2025 order quantities are higher but less frequent.


**Predicting Demand Updates**

I'm focused on the frequency pattern and order quantities. Based on the 2025 data, a 44-day cycle is evident. My calculations predict the next order around October 25th, highlighting a potential stockout risk. I recommend a 20-unit order, a quantity observed consistently in the recent past, with high confidence in this prediction.


**Determining the Order Quantity**

The primary focus is now on the recommended order, where 20 units is the established baseline for 2025. The confidence level remains high, as the data from the year indicates consistency. I've considered historical data, but have favored the current patterns, considering the shift in client behavior. The structural change in the buying habits appears to be the most relevant factor.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 05:47:52: 240u
- 2025-09-15 12:12:38: 160u
- 2025-09-11 08:10:53: 160u
- 2025-08-19 09:04:50: 160u
- 2025-08-12 09:41:05: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:21:41: 80u
- 2024-09-26 08:50:24: 240u
- 2024-09-16 11:50:49: 320u
- 2024-09-09 11:38:48: 240u
- 2024-08-27 11:41:12: 160u
- 2024-08-27 11:40:22: 320u
- 2024-08-26 08:27:23: 160u
- 2024-08-14 07:59:29: 160u
- 2024-08-12 08:25:02: 160u
- 2024-07-24 07:35:24: 320u
- 2024-07-24 06:06:23: 320u
- 2024-06-24 09:19:20: 320u

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 160u

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 05:47:52: 132u
- 2025-09-11 08:10:53: 132u
- 2025-08-26 15:29:17: 104u
- 2025-08-19 09:04:50: 104u
- 2025-07-29 06:11:06: 52u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 08:50:24: 156u
- 2024-09-16 11:50:49: 104u
- 2024-09-09 11:38:48: 104u
- 2024-08-27 11:40:22: 104u
- 2024-08-14 07:59:29: 208u
- 2024-07-24 07:35:24: 18u
- 2024-07-24 06:06:23: 156u
- 2024-06-17 07:40:59: 104u
- 2024-06-06 12:27:23: 104u
- 2024-05-31 06:50:36: 52u
- 2024-05-23 06:43:22: 104u
- 2024-05-06 09:33:16: 104u

**✅ Quantité LLM**: 132u (confidence: high)
**📊 Quantité Réelle**: 88u

</details>


<details>
<summary><strong>3. [PF0084] FILOU CARBONNADES 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 08:10:53: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-17 07:40:59: 2u
- 2024-06-06 12:27:23: 1u
- 2024-02-22 07:08:34: 2u
- 2024-01-08 09:20:28: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 08:10:53: 20u
- 2025-07-29 06:11:06: 20u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 08:50:24: 6u
- 2024-09-16 11:50:49: 10u
- 2024-09-09 11:38:48: 8u
- 2024-08-27 11:40:22: 10u
- 2024-08-14 07:59:29: 8u
- 2024-07-24 07:35:24: 6u
- 2024-07-24 06:06:23: 10u
- 2024-06-17 07:40:59: 6u
- 2024-06-06 12:27:23: 8u
- 2024-05-31 06:50:36: 6u
- 2024-05-23 06:43:22: 4u
- 2024-05-06 09:33:16: 6u

**✅ Quantité LLM**: 20u (confidence: high)
**📊 Quantité Réelle**: 12u

</details>




---

## False Positives (6)

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
| [PF1140] FILOU SAUCE CHASSEUR 850G | 7 | Stock prédit: 2.3u (6j restants) → prédit 7u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Stock prédit: 0.7u (38j restants) → prédit 1u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.6u (30j restants) → prédit 1u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 4 | Stock prédit: 1.7u (13j restants) → prédit 4u mais non commandé |
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Stock prédit: -0.6u (-28j restants) → prédit 1u mais non commandé |
| [PF3290] JF MAYO BARAKI 925ML | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:43:47.046Z*
