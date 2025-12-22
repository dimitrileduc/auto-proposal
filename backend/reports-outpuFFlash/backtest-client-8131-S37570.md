# Rapport Backtest - Client ILIS    SA, FRANCESCO LOZANO

## Contexte

- **Client** : ILIS    SA, FRANCESCO LOZANO (ID: 8131)
- **Commande réelle** : S37570
- **Date commande** : 2025-06-20 08:53:32
- **Date cutoff système** : 2025-06-19 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 5,294 input + 21,122 output = 26,416 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 7 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
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
| **MAE** | 144.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 46.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -71.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (5)

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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 800 | 640.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 24 | 50 | 26.0 | 52.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 5 | 10 | 5.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 104 | 52.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 52 | 52 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 800u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 160u
- 📊 **Médiane historique**: 160u
- ✅ **Réel commandé**: 800u
- 📉 **Erreur LLM**: 640u (80.0%)
- 📉 **Erreur Médiane**: 640u (80.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire robuste, principalement le vendredi
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 240u

**🧠 Raisonnement LLM:**
Le client suit un cycle de commande très régulier de 7 jours (médiane), avec 4 commandes sur 5 effectuées un vendredi. La dernière commande datant du 13 juin, la prochaine est prévue pour le 20 juin, soit demain par rapport à la date de l'analyse (19 juin). La quantité de 160u est la valeur la plus fréquente et la plus stable, le pic à 240u étant considéré comme ponctuel.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 703 tokens
- **Output**: 1,456 tokens
- **Total**: 2,159 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Outputs**

I'm currently reviewing the production output data for the FILOU CHASSEUR product. The most recent data point indicates 160 units produced on June 13th. Prior to that, a potentially higher figure of 240 units was recorded on June 6th, which warrants further investigation to determine if it's a genuine increase or an anomaly.


**Projecting Future Orders**

I've analyzed the production data for the FILOU CHASSEUR product. The median interval between orders is 7 days, placing the next order on June 20th. Given today's date, June 19th, the risk is flagged. The recommended quantity remains at the baseline of 160 units, considering the recent production history and consistent weekly patterns.


**Refining Risk Assessment**

I've just refined the risk assessment for the FILOU CHASSEUR product. Given that today is June 19th and the predicted order date is June 20th, the risk is confirmed. My analysis leverages the cyclical weekly pattern and identified a potential outlier production spike. Consequently, my confidence remains high for the recommendation to maintain the baseline order quantity of 160 units.


**Summarizing Data Insights**

I've just finalized the JSON analysis. The frequency pattern reveals a weekly cycle, primarily on Fridays, with a predicted order for June 20th. I've noted an outlier on June 6th, but the recommended quantity remains at 160 units, based on the stable weekly trend and consistent baseline. My confidence in this recommendation is high.




</details>

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 24u vs Médiane: 24u (Réel: 50u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 24u
- 📊 **Baseline calculée**: 24u
- 📊 **Médiane historique**: 24u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 26u (52.0%)
- 📉 **Erreur Médiane**: 26u (52.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 24u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire à décalé, majoritairement le vendredi
- **Cycle médian (jours)**: 9
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 80u

**🧠 Raisonnement LLM:**
Le cycle de commande moyen se situe autour de 9 jours. La dernière commande datant du 13 juin, la prochaine est prévue aux alentours du 22 juin, soit dans moins de 4 jours, générant un risque de rupture. La quantité de 80u est identifiée comme un événement exceptionnel suite à un intervalle de commande plus long (18 jours). La consommation de fond est stable autour de 20-24u, la quantité de 24u est retenue car plus fréquente historiquement.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 698 tokens
- **Output**: 2,249 tokens
- **Total**: 2,947 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Activity**

I've been crunching the numbers on the recent history for product [PF0077]. Examining the last three months, I've noted two key data points, 20u on June 13th and 80u on June 3rd. Now I'm focusing on extrapolating the trend to understand the product's performance trajectory.


**Forecasting Future Dates**

I'm now calculating the projected order date for product [PF0077]. Based on the median interval and the last order date (June 13th), the next order should be around June 23rd. Considering today's date, this is within the 40-day horizon check, so the prediction looks sound. The next step is to prepare the final analysis.


**Assessing Product Orders**

The analysis of product [PF0077] continues. I've calculated a median order interval of approximately 8.5 days, and based on this, predict the next order around June 23rd. The predicted order date falls within the 40-day horizon, so I am classifying this as "RISQUE OUI". Quantities recently range from 20u to 80u, with 24u being the most common, which is what I've elected to set as the baseline.


**Summarizing Order Predictions**

I've finalized my analysis of product [PF0077]. The predicted order date is June 23rd, roughly 10 days after the last order, and I'm setting a baseline quantity of 24u. The overall risk is clear and I am confident enough to recommend ordering the baseline quantity soon.


**Finalizing Order Recommendations**

I've just refined the analysis for product [PF0077]. The predicted order date is now June 22nd, with an order of 24u. This places the order within a 3-day window, confidently triggering the "RISQUE OUI" flag. I'm satisfied with the recommendation for the baseline quantity based on the analysis.


**Evaluating Date Predictions**

After refining my calculations, the anticipated order date is now June 22nd. The predicted date, which falls within a 3-day window, confidently triggers the "RISQUE OUI" flag. I'm verifying the 24u baseline quantity and ensuring the JSON format meets requirements before finalizing.




</details>

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 5u vs Médiane: 5u (Réel: 10u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 4.5u
- 📊 **Médiane historique**: 5u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 5u (50.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières avec une préférence pour le vendredi, intervalle médian de 14 jours.
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
Le cycle de commande est court (médiane de 14 jours) avec un risque de rupture identifié car la prochaine commande est prévue dans environ 8 jours (cycle < 40 jours). L'historique montre une quantité stable de 5 unités, à l'exception d'un pic exceptionnel à 60 unités en avril et d'une légère baisse à 3 lors de la dernière commande. La médiane filtrée des outliers (5) est préconisée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 696 tokens
- **Output**: 1,441 tokens
- **Total**: 2,137 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product History Data**

I'm currently focused on the sales history for product [PF0088]. Initial review reveals fluctuating sales. I've noted a significant outlier in April, which needs further investigation. My immediate next step is to calculate the average sales volume, and assess seasonality, if applicable.


**Projecting Future Orders**

I've calculated the median cycle time between orders, roughly 14 days, and am projecting the next order date. Considering the outlier, and removing it from the dataset, the baseline quantity is approximately 4.5-5 units. I'm leaning toward recommending an order of 5 units, the mode. This analysis is based on the available history.


**Revising Order Recommendations**

I've re-evaluated the sales frequency, now emphasizing a bi-weekly cycle, primarily on Fridays. Today's date informs the calculation of a predicted order date around June 27th. The outlier has been excluded. The baseline quantity remains approximately 4.5. My recommendation is still 5 units, with a medium confidence level.


**Evaluating Order Frequency Again**

I'm recalculating the cycle time for a more precise prediction. Analyzing the order intervals [28, 18, 10, 7] yields a median of 14 days and a mean of ~15.5 days, confirming a bi-weekly pattern. Considering today's date, June 19th, and the last order on June 13th, there are 8 days until the predicted order date. Risk is confirmed. My recommended quantity remains at 5 units.




</details>

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 104u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 52u
- 📊 **Baseline calculée**: 52u
- 📊 **Médiane historique**: 52u
- ✅ **Réel commandé**: 104u
- 📉 **Erreur LLM**: 52u (50.0%)
- 📉 **Erreur Médiane**: 52u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 52u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande cyclique environ toutes les 3 semaines
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-06-03
- **Prochaine prédite**: 2025-06-22 (dans 3j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Intervalles variables entre 11 et 25 jours, médiane 19 jours
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité de quantité remarquable (systématiquement 52 unités). Le cycle de commande médian est de 19 jours. Avec une dernière commande effectuée le 3 juin et nous étant le 19 juin (soit 16 jours d'écart), la prochaine commande est imminente (sous 3 jours), ce qui justifie le déclenchement d'une commande de réapprovisionnement de 52 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 702 tokens
- **Output**: 1,334 tokens
- **Total**: 2,036 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product History**

I'm currently focused on the product history for [PF0085] FILOU CURRY KET CHUP 10 KG. I've noted the dates of past entries. I'm taking a closer look at the timestamps and attempting to determine if there are any patterns emerging, or any correlations that need to be further investigated.


**Predicting Order Timeline**

The analysis of [PF0085] FILOU CURRY KET CHUP 10 KG indicates the last order was on 2025-06-03. With an average cycle of roughly 18.5 days and a median of 19, I've projected the next order around 2025-06-22.  Given today's date, 2025-06-19, a potential stockout risk exists in the near future.


**Evaluating Stock Out Risk**

I'm now fully focused on [PF0085] FILOU CURRY KET CHUP 10 KG. Based on the analysis, a stockout is likely. Considering the median cycle of 19 days, and the last order's date, the next order should be around 2025-06-22. With today being 2025-06-19, I'm recommending an immediate replenishment of 52 units to mitigate risk.


**Refining Stock Level Strategy**

Now, I've fully dissected the order history for [PF0085] FILOU CURRY KET CHUP 10 KG.  I've pinned down a high probability of a stockout within 3 days. My analysis indicates a consistent demand of 52 units with a 19-day median cycle. Therefore, I strongly advise a replenishment of 52 units to preempt any potential shortages, given the current date of 2025-06-19 and a projected next order date of 2025-06-22.




</details>

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 52u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 52u
- 📊 **Baseline calculée**: 52u
- 📊 **Médiane historique**: 52u
- ✅ **Réel commandé**: 52u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 52u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle irrégulier mais actif, entre 4 et 21 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-05-23
- **Prochaine prédite**: 2025-06-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 26u

**🧠 Raisonnement LLM:**
La dernière commande date d'il y a 27 jours (23 mai), ce qui dépasse le cycle maximal observé de 21 jours. Le client est donc en retard sur son cycle habituel ou sur le point de passer commande. La quantité stable observée est de 52 unités (2 occurrences sur 3), la valeur 26 semblant être un réajustement ponctuel. Un risque de rupture imminent est identifié.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 646 tokens
- **Output**: 1,219 tokens
- **Total**: 1,865 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently focused on the sales history for product [PF0959]. Right now, I am isolating the available data points and reviewing the reported units sold in past intervals to build a clearer picture of demand and identify potential trends. Specifically, I'm examining sales from May and April of the past year.


**Calculating Reorder Timings**

I've crunched the numbers for [PF0959]. The customer seems to order roughly every 21 days, but the last order was 27 days ago, which is overdue. I'm now predicting a stockout risk within the next three days, based on the customer's typical cadence and the existing inventory. I am also classifying 26 units as an outlier.


**Calculating Recommended Order**

I've just finished the deep dive on [PF0959]. The analysis confirms an urgent need, as the last order was 27 days ago, well past the usual 21-day cycle. My calculations suggest a 52-unit order is optimal, given the typical order size, and I'm ready to present the recommendations.


**Evaluating Ketchup Demand**

I'm now deep into the analysis of [PF0959]. The customer's order frequency is quite variable but centered around 21 days, and the last order, over 27 days ago, signals an immediate need. I've classified 26 units as an outlier and, given the standard 52-unit order, I am recommending a replenishment of 52 units, despite the data constraints. My confidence is medium due to the limited data.




</details>

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 160u
- 2025-06-06 12:50:33: 240u
- 2025-06-03 14:09:59: 160u
- 2025-05-23 11:37:51: 160u
- 2025-05-16 09:00:32: 160u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 800u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 20u
- 2025-06-03 14:09:59: 80u
- 2025-05-16 09:00:32: 24u
- 2025-05-09 08:24:16: 24u
- 2025-05-02 09:39:44: 0u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 24u (confidence: medium)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 3u
- 2025-05-16 09:00:32: 5u
- 2025-04-28 06:00:45: 5u
- 2025-04-18 04:55:33: 5u
- 2025-04-11 07:18:35: 60u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-03 14:09:59: 52u
- 2025-05-23 11:37:51: 52u
- 2025-04-28 06:00:45: 52u
- 2025-04-04 11:33:35: 52u
- 2025-03-21 12:22:31: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 52u (confidence: high)
**📊 Quantité Réelle**: 104u

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-23 11:37:51: 52u
- 2025-05-02 09:39:44: 26u
- 2025-04-28 06:00:45: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 52u (confidence: medium)
**📊 Quantité Réelle**: 52u

</details>




---

## False Positives (2)

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
| [PF0097] FILOU MOUTARDE 5 KG | 20 | Stock prédit: -13.5u (-15j restants) → prédit 20u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 36 | Stock prédit: 6.2u (14j restants) → prédit 36u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:51:33.495Z*
