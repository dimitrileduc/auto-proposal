# Rapport Backtest - Client Conserverie Et Moutarderie Belge

## Contexte

- **Client** : Conserverie Et Moutarderie Belge (ID: 30)
- **Commande réelle** : S40304
- **Date commande** : 2025-11-13 10:07:30
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 35
- **Tokens**: 76,854 input + 112,362 output = 189,216 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.7% | 26 produits prédits, 2 corrects |
| **Rappel** | 66.7% | 3 produits réels, 2 détectés |
| **F1-Score** | 13.8% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (2)

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
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec ralentissement marqué (37j vs 12j en N-1)
- **Cycle médian (jours)**: 37
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-11-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une forte baisse d'activité par rapport à l'année précédente. En 2024, le cycle médian était de 12 jours, alors que l'unique intervalle récent est de 37 jours. La date théorique de commande était le 08/11/2025, nous sommes le 12/11, la commande est donc attendue de façon imminente. La quantité est calculée sur la base de la médiane des commandes (1.0) et des dernières transactions observées le 02/10/2025, tout en tenant compte de la tendance baissière qui ne justifie pas de suivre le volume plus élevé du pic N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,390 tokens
- **Output**: 3,785 tokens
- **Total**: 6,175 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing the Order Log**

I'm analyzing the order logs for the JF Burger Squeeze. There are two entries logged within a minute of each other, suggesting either a split order or a correction. I'll need to investigate further to determine the exact nature of these entries. The total quantity for the date is either 1 or 2 units depending.


**Calculating Interval Durations**

I'm now calculating the intervals between the order dates in the logs. These intervals are crucial for understanding the frequency of orders. I've noted the intervals for the N-1 dates, sorting them to identify a median interval. I'll need to use this to forecast the future. The median interval is 12 days.


**Projecting Future Orders**

Considering the 2025 data is sparse, I'm focusing on the N-1 data for predictions. Despite a median interval of 12 days, the expected cycle has already been broken, and the last order was 41 days ago. Analyzing the N-1 data for seasonality suggests an order may not arrive soon.


**Evaluating Order Frequency**

I've examined the 2024 order history to establish a baseline for forecasting. Analyzing intervals, I've noted a median of 12 days between orders. However, the recent 2025 data shows a significant gap, and the expected cycle is broken. I'm assessing the risk of an overdue order in the next 30 days.


**Assessing the Decreasing Trend**

I'm now assessing the quantities of the orders. The recent data shows a clear decrease in both order frequency and volume compared to the N-1 data. Both the median and mode of quantities are 1 unit. There is a potential risk to the 30-day forecast due to a missing order in the recent period.


**Assessing Order Quantities**

I'm now determining the typical order quantity. Analyzing order volumes shows a clear downward trend in the recent data. I'm focusing on the last order on October 2, 2025, which totaled 2 units. The median is 1 unit. Given the recent pattern, my baseline recommendation is 1 unit.


**Synthesizing Recommendations**

I'm now consolidating my findings. The recent data shows a clear downward trend in frequency, and the last order's two entries are likely a split order. My predicted date has passed. Given the median of 1 and decreasing volume, I'm recommending a quantity of 1 unit.


**Predicting the Replenishment**

I'm now assessing my recommendation for the order quantity. The product's cycle is longer than usual, and the regular cycle has been broken. My predicted date has passed. Given the median of 1 and the recent trend, I will recommend 1 unit.


**Determining the Cycle and Risk**

The product's cycle is unusually long, and I've analyzed that the predicted replenishment date has passed, by four days. Considering the median of 1 unit and the declining trend, a quantity of 1 unit is recommended. The risk of not ordering soon is high.




</details>

</details>


<details>
<summary><strong>2. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle intermittent avec une régularité récente d'environ 37-38 jours
- **Cycle médian (jours)**: 38
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-11-09 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian global est de 38 jours (intervalles : 7, 37, 38, 148, 330j). Sur les périodes d'activité comparables (août-octobre), l'intervalle est très stable entre 37 et 38 jours. La dernière commande datant du 2025-10-02, la prochaine était prévue pour le 2025-11-09. Étant donné que nous sommes le 2025-11-12, la commande est imminente ou légèrement en retard par rapport au cycle. La quantité est systématiquement de 1 unité sans aucun outlier détecté.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,176 tokens
- **Output**: 1,859 tokens
- **Total**: 4,035 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Order Timelines**

I'm currently focused on the sequence of past orders for the "JF MAYO BARAKI SQUEEZE 300ML" product. Analyzing the dates, I've noticed a pattern of orders in 2024 and 2025. I am working to identify the ordering frequency and the duration between each recorded order.


**Projecting Order Predictions**

I've refined my analysis and calculated the intervals between orders, focusing on the median and coefficient of variation. The CV is high, suggesting low confidence. I've predicted the next order date and compared it to the present. The predicted date was November 9th, and today is November 12th.


**Evaluating Order Patterns**

I've dove deeper into the order data, calculating intervals, medians, and coefficients of variation to assess the predictability of future orders. The analysis indicates a high CV, suggesting low confidence in any prediction. Currently, the most recent order was on October 2nd, 2025. My calculations predicted a new order on November 9th, and it's already November 12th.


**Synthesizing Findings & Decisions**

I've finalized the order analysis, calculating a 38-day median cycle. Based on this, the predicted order date was November 9th, which has passed. Consequently, I recommend ordering 1 unit, given the consistent historical quantity and the overdue status of the product in its recent ordering cycle. Overall confidence remains low.


**Concluding Order Recommendations**

I've finalized my analysis of the order data, confirming a 38-day median cycle with a most recent order on October 2nd, 2025, and a prediction of November 9th. As that date has passed, and given the consistent historical order quantity of one unit, I recommend ordering a single unit immediately. Low confidence is maintained.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 13:11:26: 1u
- 2025-10-02 13:10:20: 1u
- 2025-08-26 09:02:26: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 07:58:24: 3u
- 2024-10-24 13:24:00: 2u
- 2024-10-11 06:31:27: 1u
- 2024-09-30 06:51:46: 1u
- 2024-09-24 13:15:25: 1u
- 2024-09-12 06:23:22: 2u
- 2024-08-29 06:19:36: 4u
- 2024-08-23 08:30:23: 1u
- 2024-08-19 06:01:21: 1u
- 2024-08-05 06:18:28: 5u
- 2024-07-10 11:35:11: 3u
- 2024-07-04 07:31:57: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 13:11:26: 1u
- 2025-10-02 13:10:20: 1u
- 2025-08-26 09:02:26: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:51:46: 1u
- 2024-08-23 08:30:23: 1u
- 2024-03-28 11:30:09: 1u
- 2024-03-21 09:42:04: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (24)

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
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 1.7u (38j restants) → prédit 1u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Stock prédit: -1.1u (-20j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 19 | Stock prédit: -8.0u (-20j restants) → prédit 19u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 10 | Stock prédit: -5.0u (-20j restants) → prédit 10u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 5 | Stock prédit: -4.0u (-20j restants) → prédit 5u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 9 | Stock prédit: -9.0u (-20j restants) → prédit 9u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | Stock prédit: -4.0u (-20j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Stock prédit: -3.0u (-20j restants) → prédit 3u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -2.0u (-20j restants) → prédit 2u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 12 | Stock prédit: -6.0u (-20j restants) → prédit 12u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 12 | Stock prédit: -6.0u (-20j restants) → prédit 12u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 8 | Stock prédit: -4.0u (-20j restants) → prédit 8u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 12 | Stock prédit: -6.0u (-20j restants) → prédit 12u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 3 | Stock prédit: -3.0u (-20j restants) → prédit 3u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 4 | Stock prédit: -2.0u (-20j restants) → prédit 4u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 12 | Stock prédit: -6.0u (-20j restants) → prédit 12u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 12 | Stock prédit: -6.0u (-20j restants) → prédit 12u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 8 | Stock prédit: -4.0u (-20j restants) → prédit 8u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Stock prédit: -2.0u (-20j restants) → prédit 2u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 4 | Stock prédit: -2.0u (-20j restants) → prédit 4u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 8 | Stock prédit: -4.0u (-20j restants) → prédit 8u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 2 | Stock prédit: -0.6u (-14j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 6 | Stock prédit: -3.0u (-20j restants) → prédit 6u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | Stock prédit: -6.9u (-67j restants) → prédit 2u mais non commandé |


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
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | En rupture (-20j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T08:03:24.373Z*
