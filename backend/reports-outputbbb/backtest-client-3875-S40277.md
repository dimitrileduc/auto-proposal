# Rapport Backtest - Client E.L.D. GMBH

## Contexte

- **Client** : E.L.D. GMBH (ID: 3875)
- **Commande réelle** : S40277
- **Date commande** : 2025-11-12 12:18:17
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 9,627 input + 7,328 output = 16,955 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score équilibré global |

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
| **MAE** | 17.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 31.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 13.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 80 | 96 | 16.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 80 | 80 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 100 | 48 | 52.0 | 108.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 80u vs Médiane: 80u (Réel: 96u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 80u
- 📊 **Baseline calculée**: 80u
- 📊 **Médiane historique**: 80u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 16u (16.7%)
- 📉 **Erreur Médiane**: 16u (16.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 80u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande très régulière tous les 14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
Le cycle de 14 jours est extrêmement stable (confirmé par les trois derniers intervalles précis de 14 jours). La prochaine commande est donc attendue pour le 17 novembre 2025, soit dans 6 jours. La quantité récurrente de 80 unités apparaît dans 75% des commandes de cette période (en comptant N-1), suggérant un format logistique ou une habitude de réapprovisionnement fixe.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,543 tokens
- **Output**: 1,444 tokens
- **Total**: 3,987 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Investigating Order Patterns**

I'm currently focused on the sales data for the tomato and wild garlic spread. I've noted a consistent pattern of 80 units sold on Mondays, with some exceptions. One particular Monday in October showed a spike of 192 units. This could be a promotion or an anomaly I need to investigate further.


**Refining Sales Predictions**

I'm now zeroing in on predicting the next order date and stockout risk for the tomato and wild garlic spread. Using the last several order intervals, I've calculated a 14-day median. Based on this, I anticipate a potential order on or around November 17th. With these findings, a stockout is a possibility.


**Calculating Baseline Quantity**

I've examined the product's recent sales data for the tomato and wild garlic spread more deeply. Analyzing the multiples of the observed quantities, particularly 80, 128, and 192 units, reveals a common divisor of 16. This finding strongly suggests a packaging or carton size of 16 units. The baseline quantity of 80 is the most frequent.


**Determining Order Frequency**

I've confirmed the 14-day cycle for the tomato and wild garlic spread orders, predicting a next order around November 17th, with high confidence. Recent analysis confirms the standard 80-unit order, with no seasonality impact. The most recent data aligns with prior-year trends, reinforcing my forecast.




</details>

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 80u
- 📊 **Baseline calculée**: 80u
- 📊 **Médiane historique**: 80u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 80u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier alternant entre 14 et 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-12-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est bien établi avec un intervalle médian de 28 jours, bien que la commande la plus récente ait eu lieu 14 jours après la précédente. La date de livraison estimée pour la prochaine commande est le 01/12/2025, soit dans 20 jours, ce qui entre parfaitement dans l'horizon d'analyse. Côté quantités, le client a stabilisé sa consommation à 80 unités sur les trois dernières commandes, devenant le nouveau palier de référence par rapport aux 64 unités habituelles observées en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,515 tokens
- **Output**: 2,167 tokens
- **Total**: 4,682 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Data**

I'm currently reviewing the production data for MF0044. My initial scan confirms consistent production of 80 units for the past few months. I'm focusing on the trend over the 30-day horizon, which will inform my upcoming analysis.


**Calculating Production Intervals**

I've shifted my focus to calculating the production intervals for MF0044, to identify any fluctuations in the production runs. The most recent data reveals a 14-day interval, followed by a 28-day gap. The data suggests the median interval is 28 days. I must note the changes in production quantities as well.


**Forecasting Upcoming Orders**

After calculating the intervals and accounting for the 30-day horizon, I've predicted the next order date for MF0044 as December 1st. Given the consistent recent demand and the trend towards 80 units, I'm recommending an order of 80 units. There are no clear outliers, and the pattern is relatively stable. I'm satisfied with the results.


**Confirming the Order Recommendation**

I've finalized my analysis of the product MF0044, based on production and order data. The predicted order date is Dec 1st, which falls within the next 30 days. The recent trend of 80 units is strong. The recommended quantity remains 80 units. I am confident in the results. I will produce the recommendation as JSON.


**Generating Final Recommendations**

The analysis is complete, I've calculated the cycle, and the trend. Based on the 30-day horizon, the next order date is December 1st. I will recommend 80 units, based on the recent stable demand. I've performed the JSON formatting and validations, and am ready to submit the findings.




</details>

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 48u vs Médiane: 56u (Réel: 48u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 48u
- 📊 **Baseline calculée**: 48u
- 📊 **Médiane historique**: 56u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 8u (16.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 48u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle variable entre 12 et 42 jours, avec une médiane de 20 jours
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-23Suspension de la récurrence historique courte mais riche en N-1 (12 occurrences). Le cycle médian de 20 jours suggère une commande vers le 23/11/2025, soit dans 12 jours. Les quantités sont des multiples de 16 (32, 48, 64), 48 est retenu comme standard récent stable. 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 20 jours calculé sur l'historique global. La dernière commande datant du 03/11/2025, la prochaine est prévue sous 12 jours (le 23/11). Les quantités suivent un pattern strict de multiples de 16 (probablement des cartons), avec une stabilisation récente à 48u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,450 tokens
- **Output**: 2,013 tokens
- **Total**: 4,463 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Upcoming Deliveries**

I'm focused on the upcoming MF Delikatess Mayonnaise deliveries, specifically the 250ml DE variant. I've noted a consistent pattern, with activity in the 30-day window, and recent entries from November 3rd and September 22nd. Prior data from 2024 is also under review, with an eye toward projecting future activity.


**Projecting Future Orders**

I'm now calculating the median cycle time to predict the next order. I've analyzed the intervals between past orders, sorted them, and found a median cycle of 20 days. Based on the last order on November 3rd, I am now predicting the next delivery date.


**Evaluating Predicted Date Risk**

I've assessed the risk, noting that the predicted delivery date of November 23rd is within the 30-day window, triggering a "RISQUE = OUI" flag. My confidence is high, supported by the extensive order history. I'm now turning my attention toward an in-depth quantity analysis.


**Predicting Order Quantity**

I'm now diving into the quantity analysis, and I've established a baseline volume of 48 units. Considering recent orders and the overall order history, with quantities mainly being multiples of 16, I'm confident in recommending a quantity of 48 units for the upcoming order. My confidence remains high.


**Summarizing Key Findings**

I've synthesized the analysis and generated a final report. The predicted next delivery date is November 23rd, 2025, with a recommended quantity of 48 units. I'm confident in these predictions due to the stable order patterns and the 20-day median cycle time observed.




</details>

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 100u vs Médiane: 64u (Réel: 48u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 100u
- 📊 **Baseline calculée**: 104u
- 📊 **Médiane historique**: 64u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 52u (108.3%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 100u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Un seul intervalle observé de 42 jours
- **Cycle médian (jours)**: 42
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-12-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle unique de 42 jours est identifié entre les deux commandes disponibles. La prochaine commande est prévue pour le 15 décembre 2025, soit dans 34 jours. Ce délai entrant dans la fenêtre de vigilance B2B (30-40 jours), le risque de rupture est considéré comme positif. La tendance quantitative est à la baisse (160u à 48u), mais pour garantir la disponibilité sur un cycle de plus de 40 jours, une quantité intermédiaire de 100 unités est préconisée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,119 tokens
- **Output**: 1,704 tokens
- **Total**: 3,823 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Quantities**

I've been analyzing the production quantities for MF0062 - MF Tarti Betterave rouge. The most recent data reveals 48 units were produced on November 3rd, and before that, a much higher 160 units were made on September 22nd. I'm noting the significant difference and the absence of prior year data for comparison.


**Assessing Order Prediction Risks**

I've determined a predicted next order date of December 15th, outside the 30-day window, indicating a risk. The production history reveals a large quantity difference between the two known orders. Further, I'm analyzing the interval between these orders to gauge the reliability of my prediction. My confidence level, at this stage, remains low to medium.


**Determining Quantity and Confidence**

I've calculated the baseline quantity, considering the average of past orders. My analysis suggests 104 units, though rounding to 100 seems prudent for B2B. I'm taking a cautious stance due to the limited historical data and decreasing trend, with a low to medium confidence level assigned to this order prediction.


**Calculating Recommendations and Risks**

I've finalized my quantity prediction. Considering the decreasing trend and the single 42-day cycle, I recommend 100 units. My confidence is low, given the limited data. Furthermore, I've confirmed that the predicted order date is outside the 30-day window, indicating a risk.


**Summarizing Findings and Risks**

I've reviewed the output, including the calculations and rules. The recommendation is 100 units, due to an observed decreasing trend, and to maintain sufficient stock over a long cycle of over 40 days. The predicted order date is outside the 30-day window, triggering a risk flag. My confidence remains low.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 80u
- 2025-10-20 09:34:51: 80u
- 2025-10-06 12:04:21: 192u
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 128u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 12:12:52: 80u
- 2024-10-15 07:31:18: 80u
- 2024-09-30 08:48:16: 80u
- 2024-09-18 06:24:53: 80u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 80u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 48u
- 2024-06-17 11:39:54: 192u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 48u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 80u
- 2025-10-20 09:34:51: 80u
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 12:12:52: 64u
- 2024-10-15 07:31:18: 64u
- 2024-09-30 08:48:16: 64u
- 2024-09-18 06:24:53: 64u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 64u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 64u
- 2024-06-17 11:39:54: 64u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 32u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 48u
- 2025-09-22 10:01:10: 48u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 12:12:52: 32u
- 2024-10-15 07:31:18: 32u
- 2024-09-30 08:48:16: 48u
- 2024-09-18 06:24:53: 32u
- 2024-08-19 09:44:26: 32u
- 2024-07-30 11:20:19: 32u
- 2024-07-15 11:14:37: 48u
- 2024-06-17 11:39:54: 64u
- 2024-05-16 07:53:36: 32u
- 2024-05-06 12:20:45: 64u
- 2024-04-16 06:52:33: 32u
- 2024-01-29 09:49:34: 48u

**✅ Quantité LLM**: 48u (confidence: high)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 48u
- 2025-09-22 10:01:10: 160u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 100u (confidence: low)
**📊 Quantité Réelle**: 48u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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

*Rapport généré automatiquement le 2025-12-19T08:55:23.907Z*
