# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S39727
- **Date commande** : 2025-10-14 13:50:03
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 31
- **Tokens**: 22,805 input + 100,847 output = 123,652 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 22.7% | 22 produits prédits, 5 corrects |
| **Rappel** | 71.4% | 7 produits réels, 5 détectés |
| **F1-Score** | 34.5% | Score équilibré global |

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
| **MAE** | 131.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 44.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 17.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 200 | 400 | 200.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 400 | 200 | 200.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 200 | 200 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ❌ Non | 📊 Médiane |
| [LV356] LV SET 3 X 135G trisauces  SDP | 512 | 256 | 256.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - LLM: 200u vs Médiane: 198u (Réel: 400u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 200u
- 📊 **Baseline calculée**: 200u
- 📊 **Médiane historique**: 198u
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 200u (50.0%)
- 📉 **Erreur Médiane**: 202u (50.5%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 200u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 22 à 27 jours
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-11-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité parfaite tant en volume (200u systématiques) qu'en fréquence (moyenne de 24 jours). La prochaine commande est prévue sous ~19 jours, ce qui justifie l'anticipation du stock pour l'horizon de 30 jours.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 683 tokens
- **Output**: 1,595 tokens
- **Total**: 2,278 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking LV361 Inventory**

I'm focused on the inventory levels for LV361. The "CLASSIQUE" WECK sauce has seen varied activity. Recent data shows a 200-unit batch on October 8th, following a much smaller order of 20 units on September 16th. August saw a similar 200 unit total. There's no N-1 history to review, which is a key gap.


**Forecasting Future Orders**

I'm calculating the estimated next order date for the "CLASSIQUE" WECK sauce, LV361. Based on recent ordering patterns and a 24.5-day cycle, I project a new order around November 1st. Given the 5 days since the last order, I have approximately 19.5 days until the predicted next order. This falls within the 30-day decision horizon. Furthermore, the quantity demand shows stability with a consistent 200-unit baseline.


**Assessing Ordering Consistency**

I'm now deep-diving into the "CLASSIQUE" WECK sauce, focusing on order frequency and volume. The analysis confirms a strong cyclical pattern of roughly 24 days between orders, the last being on October 8th. The quantity consistently lands on 200 units. My confidence is high.


**Evaluating JSON Structure**

I'm now focusing on generating the JSON output. I've confirmed date calculations and refined my reasoning. I'll provide a single JSON object. Also, I've re-read and double-checked the instructions concerning multiple JSON objects.


**Refining the JSON Object**

I am now focusing on the final JSON format. The schema requires an object. I've double-checked my calculations, particularly the date offsets. I'm satisfied with the reasoning, and am now formulating the 'reasoning' portion of the JSON to summarize the key findings concisely.




</details>

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 434u
- 📊 **Baseline calculée**: 434u
- 📊 **Médiane historique**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 434u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier avec une accélération notable en fin de saison (moyenne de 25 jours récemment)
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-11-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle récent entre les commandes est de 25 jours en moyenne. La dernière commande date du 08/10, ce qui place la prochaine échéance aux alentours du 02/11 (soit dans environ 20 jours). Selon la règle métier (horizon < 40 jours), il existe un risque de rupture. La quantité est extrêmement stable à 434 unités sur les trois dernières commandes de 2025, marquant une progression par rapport au palier de 350 unités observé en 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 963 tokens
- **Output**: 2,498 tokens
- **Total**: 3,461 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Historical Data**

I'm currently crunching the numbers for the LV BIO Tartin'apero Tomato Basilico SDP 200 ml product. I've got the recent sales figures from October 8th, and am looking at the prior data from September and August. I'm aiming to get a good read on the product's performance.


**Projecting Future Orders**

I've analyzed the historical sales data for the LV BIO Tartin'apero Tomato Basilico product, focusing on the intervals between orders to understand the ordering cycle. Based on the 2025 and 2024 data, and recent cycles specifically, I project a 25-day ordering cycle. Therefore, I anticipate the next order around November 2nd, 2025.


**Forecasting Order Needs**

I've assessed the risk of a stockout within a 30-day window, considering today's date and the most recent order. Given the 25-day cycle, I calculated the next order date. I am predicting a stockout risk, and therefore, I should flag this. Finally, I confirmed the current order size (434u) based on recent sales.


**Interpreting Stockout Risk**

I'm wrestling with the definition of "risk" in this context. Although I've identified a stockout risk, it is also only a week after the last order, and, therefore, ordering more immediately may be excessive. The 25-day cycle suggests the next order, of 434 units, is about 20 days away.


**Evaluating Recommendation Strategy**

I'm now focusing on the nuances of the "risk" designation. I've re-confirmed the data and the 25-day cycle calculation. Although the next order is about three weeks away, the instructions indicate a "risk" if the order is needed within 40 days, and it is. Therefore, I'm recommending an order of 434 units, consistent with recent purchases.


**Formulating the Recommendation**

I'm now putting together the recommendation in JSON format, as requested. The analysis highlights a 25-day cycle, putting the next order around November 2nd, which is within the 40-day risk horizon. Since the current order quantity is 434 units and demand has been very consistent, I'm recommending an order of 434 units with high confidence. The `days_until_next` is 20.




</details>

</details>


<details>
<summary><strong>3. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - LLM: 400u vs Médiane: 500u (Réel: 200u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 400u
- 📊 **Baseline calculée**: 400u
- 📊 **Médiane historique**: 500u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: 300u (150.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 400u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 25-30 jours
- **Cycle médian (jours)**: 26
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 200u, 600u, 800u

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 26 jours. La dernière commande date du 10 septembre, soit 33 jours avant la date actuelle (13 octobre). Nous avons dépassé la date théorique de réapprovisionnement, d'autant plus que l'historique N-1 confirme une commande identique le 10 octobre 2024. La quantité de 400 unités est la plus stable et la plus fréquente (mode statistique).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 992 tokens
- **Output**: 1,982 tokens
- **Total**: 2,974 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Stock Levels**

My focus remains on the LV "CLASSIQUE" WECK Bearnaise sauce. Initial stock on September 10th was 400 units. Now, with today being October 13th, I'm working to assess the consumption rate and projected demand to see if a refill order is warranted, and if so, of what quantity. The critical timeframe is a potential stockout within the next 30 days.


**Calculating Consumption Rates**

\n\n

I've been analyzing the historical ordering patterns for the LV "CLASSIQUE" Bearnaise sauce to establish a consumption model. The median cycle time calculation, informed by prior data, suggests that ordering every 3-4 weeks is the norm. I'm now weighing this against more recent, shorter intervals in September, to refine the projected refill timing and quantity.


**Refining Refill Projections**

\n\n

Based on the data analysis, the LV "CLASSIQUE" Bearnaise sauce seems to need a refill. The 33 days since the last order exceed the average cycle, making a stockout likely within the next 30 days. Considering past ordering, a quantity of 400 units is the safest bet, aligning with both the median and mode.


**Revisiting Order Intervals**

\n\n

My current focus is on a deeper dive into the historical data to identify consumption patterns. I'm recalculating the cycle time using the full dataset to improve the accuracy of my predictions. The median calculation is now refined to 26 days. Also, based on the findings, I am leaning toward the hypothesis that we will have a stockout risk in less than 30 days.


**Summarizing the Findings**

\n\n

My analysis has concluded. With 33 days since the last order, and an average cycle of 26, the LV "CLASSIQUE" Bearnaise sauce requires a refill. The historical data points to a likely need for an order in mid-October. I'm confident a 400-unit order is the most appropriate, based on consistent past patterns, including a 400u order in October of the prior year, and frequency.




</details>

</details>


<details>
<summary><strong>4. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - LLM: 512u vs Médiane: 512u (Réel: 256u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 512u
- 📊 **Baseline calculée**: 576u
- 📊 **Médiane historique**: 512u
- ✅ **Réel commandé**: 256u
- 📉 **Erreur LLM**: 256u (100.0%)
- 📉 **Erreur Médiane**: 256u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 512u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Saisonnier annuel avec récurrence en début d'automne
- **Cycle médian (jours)**: 55
- **Dernière commande**: 2024-10-01
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Bien qu'il n'y ait aucune commande sur les 3 derniers mois, l'historique N-1 montre une activité spécifique en août et octobre. La date du jour (13 octobre) est très proche de la date de commande de l'an dernier à la même époque (1er octobre). Ce produit de type 'set trisauces' présente un profil saisonnier marqué pour la fin d'année. Le risque de rupture est imminent si l'on suit le pattern de l'an passé. La quantité recommandée correspond au volume exact de la commande d'octobre 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 621 tokens
- **Output**: 2,053 tokens
- **Total**: 2,674 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Reorder Needs**

I'm currently focused on determining whether a reorder is necessary for the LV356 product. The goal is to calculate a reorder quantity, if any, considering the current status. Recent updates show a decrease in units since the 2024-08-07 observation. I need to output either zero or a suggested quantity.


**Calculating Potential Quantity**

I've analyzed the historical data, specifically the Aug 7 to Oct 1 interval, which points to a need for potential reordering. There's no activity for this set in the recent past (3 months), but seasonal factors, plus the timing from last year, strongly suggest an imminent order. A 55-day cycle from the previous summer order, if we apply it, suggests the order should have already happened. Given all those points, I'm now trying to output a non-zero quantity, but am held back from doing so.


**Determining Order Quantity**

I'm now assessing the order quantity, given the seasonal demand pattern. The analysis of past quantities (512, 640) points to an average of 576 units. Considering the timing, I'm leaning toward recommending that quantity. I am also factoring in the absence of recent orders over the past three months, as well as the seasonal window for this item.


**Recommending Final Order**

I've determined a reorder is needed, influenced by the 2024 order pattern, but the exact order quantity is still pending. My assessment now includes a deep analysis. I'm focusing on various data points. The final value, 512, is based on the most recent seasonal equivalent. The risk is medium because I need to consider it's a seasonal item.


**Concluding the Recommendation**

I've finalized my analysis and am ready to output the JSON. The product is likely seasonal, with a strong impact. Based on the 2024 data, a reorder is necessary now. The quantity will be 512, matching the previous year's October order. Risk is medium, since there is no recent order. The predicted date for order is Oct 15.


**Formulating Final Output**

I'm now consolidating all the data, confirming the product's seasonality and strong impact. Based on the 2024 order pattern, a reorder is necessary, with a quantity of 512, matching the last year's order for that period. I'll include the other insights, such as the estimated next order date as Oct 15, and the confidence level.




</details>

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 200u
- 2025-09-16 11:31:53: 200u
- 2025-08-20 10:22:31: 196u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 200u (confidence: high)
**📊 Quantité Réelle**: 400u

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 434u
- 2025-09-04 09:10:58: 434u
- 2025-08-19 07:26:59: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:46:54: 350u
- 2024-09-11 07:42:30: 350u
- 2024-08-08 07:00:55: 350u
- 2024-08-07 07:54:26: 350u
- 2024-06-11 08:53:39: 350u
- 2024-05-23 09:00:22: 305u
- 2024-04-24 08:56:28: 350u
- 2024-04-02 13:39:05: 350u
- 2024-01-30 09:51:19: 350u
- 2023-12-19 08:25:50: 350u
- 2023-11-07 14:19:04: 350u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 09:37:56: 400u
- 2025-09-04 09:10:58: 400u
- 2025-08-19 07:26:59: 600u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-10 12:10:09: 400u
- 2024-09-11 07:42:30: 200u
- 2024-08-08 07:00:55: 200u
- 2024-08-07 07:54:26: 400u
- 2024-06-11 08:46:37: 800u
- 2024-05-23 09:00:22: 400u
- 2024-04-24 08:56:28: 400u
- 2024-04-02 13:39:05: 400u
- 2024-03-25 14:38:30: 200u
- 2024-03-13 08:07:55: 400u
- 2024-01-30 09:51:19: 400u
- 2023-12-19 08:26:46: 400u

**✅ Quantité LLM**: 400u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>


<details>
<summary><strong>4. [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-11 08:46:37: 200u
- 2024-04-02 13:39:05: 200u
- 2023-12-19 08:25:50: 200u
- 2023-10-18 13:56:51: 200u

**📊 Quantité Médiane (fallback)**: 200u
**📊 Quantité Réelle**: 200u

</details>


<details>
<summary><strong>5. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:31:17: 512u
- 2024-08-07 07:56:04: 640u

**✅ Quantité LLM**: 512u (confidence: medium)
**📊 Quantité Réelle**: 256u

</details>




---

## False Positives (17)

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
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | Stock prédit: 145.8u (10j restants) → prédit 200u mais non commandé |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Stock prédit: 345.1u (25j restants) → prédit 400u mais non commandé |
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 200 | Stock prédit: 160.8u (16j restants) → prédit 200u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: 354.3u (17j restants) → prédit 434u mais non commandé |
| [LV358] LV SDP SAUCE BEARNAISE 125G (copie) | 350 | Stock prédit: 175.0u (25j restants) → prédit 350u mais non commandé |
| [LV302] LV BIO Tartin'apero Carotte Gingembre SDP 200 ml  | 350 | Stock prédit: -186.4u (-9j restants) → prédit 350u mais non commandé |
| [LV310] LV BIO Tartin'apero Betteraves SDP 200ml | 350 | Stock prédit: 268.5u (85j restants) → prédit 350u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -81.5u (-10j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 200 | Stock prédit: -98.0u (-12j restants) → prédit 200u mais non commandé |
| [LV317] LV "CLASSIQUE" WECK Vinaigrette CIBOULETTE 200ml | 150 | Stock prédit: 115.5u (127j restants) → prédit 150u mais non commandé |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Stock prédit: -70.9u (-5j restants) → prédit 434u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 350 | Stock prédit: 141.9u (18j restants) → prédit 350u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 256 | Stock prédit: -125.5u (-12j restants) → prédit 256u mais non commandé |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Stock prédit: -19.8u (-1j restants) → prédit 434u mais non commandé |
| [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie) | 434 | Stock prédit: -4.0u (0j restants) → prédit 434u mais non commandé |
| [LV306] LV BIO Tartin'apero Olives Vertes SDP200 ml  | 350 | Stock prédit: -20.6u (-2j restants) → prédit 350u mais non commandé |
| [LV309] LV BIO Tartin'apero Lentilles curry SDP 200ml | 350 | Stock prédit: 168.3u (50j restants) → prédit 350u mais non commandé |


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
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 350 | Stock suffisant: 421.7u (137j restants > seuil 30j) |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 434 | Stock: 335.7u (13j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T11:29:06.748Z*
