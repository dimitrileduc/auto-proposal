# Rapport Backtest - Client LIDL BELGIE GMBH

## Contexte

- **Client** : LIDL BELGIE GMBH (ID: 33628)
- **Commande réelle** : S40152
- **Date commande** : 2025-11-05 14:53:47
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 7,165 input + 11,287 output = 18,452 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
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
| **MAE** | 280.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 72.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 170.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 2.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK | 400 | 672 | 272.0 | 40.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3328] DELUXE MIX SAUCES 250ML WECK | 384 | 96 | 288.0 | 300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK</strong> - LLM: 400u vs Médiane: 400u (Réel: 672u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 400u
- 📊 **Baseline calculée**: 400u
- 📊 **Médiane historique**: 400u
- ✅ **Réel commandé**: 672u
- 📉 **Erreur LLM**: 272u (40.5%)
- 📉 **Erreur Médiane**: 272u (40.5%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 400u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes en grappes avec un cycle de réapprovisionnement long identifié à 40 jours entre les stocks
- **Cycle médian (jours)**: 0.5
- **Dernière commande**: 2025-10-07
- **Prochaine prédite**: 2025-10-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 96u, 960u

**🧠 Raisonnement LLM:**
PHASE 1 : Les intervalles calculés sont [0, 0, 1, 40] jours. La médiane de 0.5 jour est mathématiquement correcte selon le protocole mais reflète une anomalie due aux commandes multi-lignes d'août. La date prédite (2025-10-08) étant dépassée par rapport au 2025-11-04, le risque de rupture est immédiat pour le cycle suivant. CV = 167% (confiance phase 1 : low). PHASE 2 : Analyse des quantités [96, 384, 400, 560, 960]. Q1=384, Q3=560, IQR=176. Les barrières [120 ; 824] excluent 96u (ajustement mineur) et 960u (pic de stock-up). La baseline est calculée sur la médiane des valeurs retenues [384, 400, 560], soit 400u. La saisonnalité N-1 est jugée 'none' car bien que le volume d'août soit élevé dans les deux cas, nous manquons de données comparatives pour novembre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,339 tokens
- **Output**: 5,137 tokens
- **Total**: 7,476 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Lifecycles**

I'm currently focused on the DEL UXE MAYONNAISE OEUFS product. I've noted a series of past orders, specifically looking at the quantity and timing of these past orders. The data spans from late August to early October, which gives a good scope. I'm building a pattern recognition model.


**Evaluating Order Intervals**

Now I'm digging deeper into the order intervals, particularly for the DEL UXE MAYONNAISE product. I've calculated the time differences between significant order events in 2025 and also in 2024. The data from 2024 reveals a concentrated stocking phase in August. I am now trying to see if this pattern is repeating this year.


**Calculating Time Intervals**

My current focus is on calculating the time intervals between orders for the DEL UXE MAYONNAISE OEUFS product. I've listed all the order dates and computed the intervals in between. I see a very concentrated stock-up in late August 2025. Then the next event is 40 days later. Using this, I predict a reorder around November 16.


**Calculating Forecast Variables**

I'm now zeroing in on predicting the next order. I've re-evaluated time intervals and found a significant, yet highly variable pattern. Using the last interval of 40 days, the next order is forecast for November 16. I am also calculating baseline order quantities, which result in a baseline of 400 units.


**Predicting Future Orders**

I'm now deep in analyzing the order patterns. Using the intervals between orders, which show large clusters, and the last observed gap of 40 days, I predict the next order around November 16th. A baseline order quantity of 400 units seems suitable, with medium confidence.


**Evaluating Predictive Accuracy**

My calculations continue, focusing on the DEL UXE MAYONNAISE OEUFS. I've re-evaluated the intervals, and the resulting calculation gave a 40 day lag. Quantities of 400 seems appropriate. Confidence level is medium. The predicted order date is November 16.


**Revising Interval Calculations**

I've re-examined the order intervals for DEL UXE MAYONNAISE, calculating both the mean and the standard deviation. This reveals a very high coefficient of variation, suggesting the median interval is unreliable. Thus, the next order is forecast for November 16, using the last observed 40-day interval, with a baseline quantity of 400.


**Concluding Order Analysis**

After meticulous calculations, I've determined that the next order for DEL UXE MAYONNAISE OEUFS is likely overdue, with a predicted date of October 8th, given the median interval of 0.5 days. The baseline quantity of 400 units is appropriate, with the high degree of variability resulting in a low confidence level for Phase 1, but medium in Phase 2.


**Summarizing Findings' Details**

I've finalized my analysis of the DEL UXE MAYONNAISE product. Considering the intervals of 0, 0, 1 and 40 days, the predicted date for the next order is October 8th, given the median of 0.5 days. With high variability, confidence is low for Phase 1. I'm recommending 400 units, with medium confidence for phase 2.


**Revisiting Order Patterns**

I've re-examined the order data, focusing on the DEL UXE MAYONNAISE OEUFS product. I've re-calculated the intervals and concluded the predicted date of October 8th is in the past, meaning the order is overdue. The baseline quantity of 400 seems appropriate, but the low confidence is a concern.


**Evaluating Predicted Dates**

My focus has shifted to the predicted order date, calculating both the median interval and the last observed gap. Based on the 0.5-day median, the order is overdue, and the risk is imminent. The expected quantity is 400. Confidence is low. I will explain in the reasoning section.




</details>

</details>


<details>
<summary><strong>2. [PF3328] DELUXE MIX SAUCES 250ML WECK</strong> - LLM: 384u vs Médiane: 384u (Réel: 96u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 384u
- 📊 **Baseline calculée**: 384u
- 📊 **Médiane historique**: 384u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 288u (300.0%)
- 📉 **Erreur Médiane**: 288u (300.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 384u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes par rafales suivies d'un cycle de ~40 jours
- **Cycle médian (jours)**: 40
- **Dernière commande**: 2025-10-07
- **Prochaine prédite**: 2025-11-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 864u

**🧠 Raisonnement LLM:**
Cycle de réapprovisionnement par 'bursts' détecté. L'intervalle entre le cluster d'août et la commande d'octobre est de 41 jours. En projetant ce cycle à partir du 2025-10-07, la prochaine commande est estimée au 2025-11-16, soit dans 12 jours. Pour la quantité, une valeur aberrante de 864u a été identifiée (Q3 + 1.5*IQR = 624). Sans cet outlier, le CV tombe à 17.6%, indiquant une grande stabilité. La médiane de 384u est par ailleurs identique à la médiane observée l'an dernier sur la même période (384u), confirmant la pertinence de cette baseline.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,336 tokens
- **Output**: 2,893 tokens
- **Total**: 5,229 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Performance**

I've been analyzing the recent sales data for the DELUXE MIX SAUCES. The 288 units sold on October 7th are concerning, especially compared to the higher volumes in August. I'm focusing on identifying the factors driving this decline, and I need to determine if it's a trend, as well as considering any potential seasonality impacts.


**Evaluating Data Intervals**

I'm now calculating the intervals between order dates for DELUXE MIX SAUCES to identify potential cyclical patterns. The initial analysis revealed a significant gap between August and October in 2025. I've also examined the N-1 data from 2024, calculating intervals to establish a median. It seems the intervals are not consistent, which is making it more difficult to identify a clear cycle. I am focusing on what this might suggest about demand or supply chain.


**Calculating Future Orders**

I've just finished the cycle analysis, focusing on order intervals. My calculations suggest a 40-day cycle from the last cluster in late August to the single October order. Considering the gap, I'm predicting the next order around November 16th, which falls within the 30-day horizon, indicating a risk.


**Calculating Risk Assessment**

I've just finished the calculations on the outlier quantities, identifying 864 units as exceptionally high, and removing it from my baseline. The retained quantities yielded a CV of 17.6%, suggesting a median could be used for the baseline. I'm now integrating this with my cycle analysis to refine the risk assessment, using the predicted order date as a factor.


**Finalizing the Recommendation**

I've just finalized the risk assessment and built the forecast. The analysis reveals a 40-day cycle, predicting the next order around November 16th. Given this, along with the recent data, the system recommends a quantity of 384 units, with a medium level of confidence.


**Refining Cycle Predictions**

I'm now recalculating the intervals, focusing on the burst patterns and trying to refine the predicted date. Using the 40-day cycle, I project the next order around November 16th, which creates a risk, falling within the 30-day window. I've also incorporated the CV and the stability of the quantities, and have finalized the inputs for the recommendations.


**Calculating Recommendations**

I've just finished reviewing the historical data, including seasonality and outlier analysis. The cycle analysis points to a 40-day interval, predicting an order around November 16th, which creates a risk, falling within the 30-day window. The recommended quantity is 384 units, derived from the median quantities. The confidence is medium, factoring the burst pattern.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:01:45: 96u
- 2025-08-28 07:33:10: 960u
- 2025-08-27 12:55:19: 384u
- 2025-08-27 06:03:24: 400u
- 2025-08-27 06:02:20: 560u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-26 08:31:02: 800u
- 2024-08-22 05:50:46: 1360u
- 2024-08-21 13:11:12: 640u
- 2024-08-20 11:56:36: 800u
- 2024-08-14 06:03:44: 320u
- 2024-08-14 06:03:13: 240u
- 2024-08-14 06:02:51: 480u

**✅ Quantité LLM**: 400u (confidence: medium)
**📊 Quantité Réelle**: 672u

</details>


<details>
<summary><strong>2. [PF3328] DELUXE MIX SAUCES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:01:45: 288u
- 2025-08-28 07:33:10: 864u
- 2025-08-27 12:55:19: 384u
- 2025-08-27 06:03:24: 384u
- 2025-08-27 06:02:20: 480u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 07:06:00: 384u
- 2024-08-26 08:31:02: 576u
- 2024-08-22 05:50:46: 672u
- 2024-08-21 13:11:12: 288u
- 2024-08-20 11:56:36: 480u
- 2024-08-14 06:03:44: 288u
- 2024-08-14 06:02:51: 288u

**✅ Quantité LLM**: 384u (confidence: medium)
**📊 Quantité Réelle**: 96u

</details>




---

## False Positives (1)

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
| [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167) | 256 | Stock prédit: -163.6u (-6j restants) → prédit 256u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:09:53.532Z*
