# Rapport Backtest - Client REWE MARKT GMBH - WEST

## Contexte

- **Client** : REWE MARKT GMBH - WEST (ID: 3865)
- **Commande réelle** : S39292
- **Date commande** : 2025-09-23 06:18:30
- **Date cutoff système** : 2025-09-22 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 18,528 input + 48,595 output = 67,123 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 21.1% | 19 produits prédits, 4 corrects |
| **Rappel** | 66.7% | 6 produits réels, 4 détectés |
| **F1-Score** | 32.0% | Score équilibré global |

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
| **MAE** | 1.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 44.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 5.5u
- 📊 **Médiane historique**: 5u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier (médiane de 14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec une médiane de 14 jours. La dernière commande datant du 2 septembre, le client a dépassé son cycle habituel (20 jours écoulés), ce qui indique un besoin immédiat. Le volume est stable sur les derniers mois (5-6 unités) et montre une progression nette par rapport à l'année dernière (2-3 unités).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 825 tokens
- **Output**: 1,622 tokens
- **Total**: 2,447 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Recent Product History**

I'm currently focused on the recent sales history of product JF001. Over the last three months, I've noted several sales of 5 units, with a combined 6 units sold on August 11th. I'm keen to understand the cause behind the combined sale.


**Analyzing Order Frequency Patterns**

The data reveals a consistent pattern in sales quantities, primarily 5 or 6 units per order of product JF001. I've calculated a median order interval of 14 days, and the last order was 20 days ago. The prediction window of 2025-09-16 has passed. Considering the current date of 2025-09-22, this suggests the customer is overdue and there is a high stockout risk.


**Refining Stock Level Predictions**

I've examined the recent sales history, noting the consistent bi-monthly cycle and increasing volume compared to last year. Calculating a prediction window of around 2025-09-16, I recognize the customer is overdue and at risk of stockout. Next I'll determine an order quantity and recommend action.


**Formulating a Recommendation**

My analysis indicates the customer is overdue for an order of JF001, based on a median cycle of 14 days and a last order date of September 2nd. Considering consistent demand for 5-6 units and an increasing trend from last year, I suggest ordering 5 units immediately.




</details>

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 5u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 5u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 3u (150.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier de 22-27 jours
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec une commande environ toutes les 3 à 4 semaines. La dernière commande datant du 2 septembre, la prochaine est prévue autour du 27 septembre (dans 5 jours), ce qui présente un risque de rupture imminent. Les volumes récents (4, 5, 6u) indiquent une demande stable autour d'une médiane de 5 unités, bien que supérieure à n-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 769 tokens
- **Output**: 1,363 tokens
- **Total**: 2,132 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Future Needs**

I'm currently focused on predicting the optimal order quantity for the "JF SAUCE BEARNAISE 250ML WECK" product. Initial data suggests demand fluctuates. Historical sales show 4 units ordered on 2025-09-02 and a combined total of 5 units on 2025-08-11. My next step is analyzing this data for patterns.


**Evaluating Order Timing**

I've calculated the median interval between orders, placing the next estimated order date around September 27th. Comparing this with today's date, September 22nd, I see a short window to make a decision. A risk assessment shows a high chance of a stock-out. Reviewing past orders reveals an upward trend in quantities, suggesting the need to address this new, possibly significant, order.


**Assessing Demand and Risk**

Given the anticipated order date of September 27th, and considering the short lead time, a stock-out is highly probable. Analyzing the data, the product's recent average order volume is 5 units, with a clear and consistent ordering pattern, so I'm recommending an order of 5 units. My confidence is high.


**Recommending an Order**

Based on a detailed analysis, I've confirmed a high probability of a stock-out within five days. The ordering cycle is highly predictable, and the recent average order quantity is 5 units. Considering this, along with the recent volumes, I recommend ordering 5 units. My confidence level remains high.




</details>

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.2u
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
- **Pattern temporel**: Cycle irrégulier avec une médiane de 18 jours (intervalle 8-27 jours)
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian de 18 jours est dépassé (dernière commande il y a 20 jours). La demande est en cours ou imminente. Les quantités récentes oscillent entre 1 et 4 unités. La médiane de 2 unités est choisie comme baseline robuste pour couvrir le besoin sans surstocker, étant donné que le pic d'août (4u) semble ponctuel par rapport au reste de l'historique et au N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 769 tokens
- **Output**: 1,470 tokens
- **Total**: 2,239 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the sales data for product JF009, specifically the JF SAUCE TARTARE, 250ML WECK. Recent history shows sales of 1 unit on September 2nd and 3 units on August 19th. The weekly sales appear somewhat inconsistent, and this needs further investigation.


**Forecasting Order Timing**

I've calculated the median interval between orders for JF009 as 18 days, using the past 3 months' data.  Based on this, and that the last order was placed on September 2nd, I predicted a next order date of September 20th, which has already passed. This indicates a high stockout risk.


**Refining Order Quantity**

I'm now determining the appropriate order quantity for JF009. Recent sales show varying volumes, with a median of 2 units and an average of 2.2. A look at the prior year's data reveals similar low volumes, suggesting no significant seasonality. Considering the decreasing recent trend, I'm leaning toward ordering 2 units.


**Finalizing Recommendations**

I've completed the analysis, determining the product's ordering frequency is around 18 days, with the last order 20 days ago, signaling a stockout risk. My recommended order quantity is 2 units, based on the median and the decreasing trend. While there's some fluctuation, I have moderate confidence in these recommendations, and high confidence in the timing.




</details>

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.8u
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
- **Pattern temporel**: Cycle irrégulier entre 8 et 27 jours (médiane 18 jours)
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 18 jours. La dernière commande datant du 2 septembre, la date théorique de réapprovisionnement (20 septembre) est déjà dépassée au 22 septembre, confirmant un besoin immédiat. Bien qu'un pic à 3 unités ait été observé en août, la commande la plus récente et l'historique N-1 indiquent une consommation de base stable de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 771 tokens
- **Output**: 1,501 tokens
- **Total**: 2,272 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Production Volumes**

I've been analyzing the production data for the JF SAUCE AIOLI PEST O. Recent activity shows a fluctuating demand, with a peak of 3 units on August 19th. The intervals between production runs are irregular, suggesting shifts in consumer needs or inventory management strategies. I need more data points to establish a clear pattern.


**Projecting Demand Trends**

I'm now calculating the median interval between orders, using the last five data points. This yields 18 days. Based on this cycle, and considering the last order was on September 2nd, the next one was predicted to be on September 20th. Today is September 22nd, so it is overdue. I'll need to flag this to action.


**Interpreting Order Volumes**

I've determined that the spike in August seems to be an outlier. The median order quantity is 1 unit, with the mode also being 1 unit. Analysis suggests a bi-monthly to monthly cycle. The most recent order was flagged as overdue by two days. I'm recommending a 1-unit order and calculating the confidence level.


**Evaluating Order Recommendation**

I've determined the recommended order quantity should be 1 unit, with a medium confidence level, given the overdue status of the predicted order date. The analysis indicates a bi-monthly to monthly cycle, influenced by the recent spike in August. However, the September order and N-1 history suggest returning to the 1u baseline.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 5u
- 2025-08-19 08:35:46: 5u
- 2025-08-11 13:20:39: 5u
- 2025-08-11 10:59:30: 1u
- 2025-07-15 09:34:20: 6u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 3u
- 2024-08-07 13:24:40: 2u
- 2024-06-11 07:20:33: 3u
- 2024-06-04 08:24:14: 1u
- 2024-06-04 08:21:47: 1u

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 4u
- 2025-08-11 13:20:39: 3u
- 2025-08-11 10:59:30: 2u
- 2025-07-15 09:34:20: 6u
- 2025-06-23 06:45:41: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 2u
- 2024-08-07 13:24:40: 2u
- 2024-07-05 08:39:50: 1u

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 1u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 4u
- 2025-07-15 09:34:20: 2u
- 2025-06-23 12:14:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 1u
- 2024-06-11 07:20:33: 1u
- 2024-06-04 08:24:14: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 1u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 3u
- 2025-07-15 09:34:20: 1u
- 2025-06-23 12:14:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 1u
- 2024-08-07 13:24:40: 1u
- 2024-06-11 07:20:33: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (15)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.7u (-5j restants) → prédit 2u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | Stock prédit: -1.0u (-6j restants) → prédit 3u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 1.0u (9j restants) → prédit 2u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: 2.1u (42j restants) → prédit 2u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Stock prédit: 1.4u (43j restants) → prédit 2u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: -1.4u (-13j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-4j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Stock prédit: -0.5u (-3j restants) → prédit 3u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Stock prédit: -0.0u (-1j restants) → prédit 2u mais non commandé |


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
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | En rupture (-53j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T11:18:19.611Z*
