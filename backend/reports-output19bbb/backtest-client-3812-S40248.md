# Rapport Backtest - Client ÖKORING HANDELS GMBH

## Contexte

- **Client** : ÖKORING HANDELS GMBH (ID: 3812)
- **Commande réelle** : S40248
- **Date commande** : 2025-11-12 07:35:42
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 19,050 input + 30,718 output = 49,768 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 6 produits prédits, 5 corrects |
| **Rappel** | 83.3% | 6 produits réels, 5 détectés |
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
| **MAE** | 4.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 26.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 26.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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
| [MF0029] MF Tarti Datte chili 250g | 21 | 16 | 5.0 | 31.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 32 | 16 | 16.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 21u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 21u
- 📊 **Baseline calculée**: 21.33u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 5u (31.3%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 21u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel irrégulier détecté le mardi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-04
- **Prochaine prédite**: 2025-11-18 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
PHASE 1 : Les intervalles entre commandes sont de 7, 43, 13 et 14 jours. La médiane est de 13,5 jours (arrondie à 14). Avec un dernier réapprovisionnement le 2025-11-04, la prochaine date prévue est le 2025-11-18 (dans 7 jours), indiquant un risque de rupture imminent. PHASE 2 : L'analyse des quantités (16, 48, 16, 32, 16) montre des multiples de 16 sans outliers statistiques selon IQR (Barrière haute à 56). Le coefficient de variation est de 50%, ce qui impose l'utilisation d'une moyenne tronquée. En excluant le minimum (16) et le maximum (48), on obtient une baseline de 21,33, ajustée à 21 pour la commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,134 tokens
- **Output**: 2,578 tokens
- **Total**: 4,712 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Anticipating Product Demand**

I'm analyzing the historical sales data for [MF0029] MF Tarti Datte chili 250g. I see a pattern of intermittent orders, with varying quantities. I'm focusing on the recent orders, from October and November 2025. I need to determine the best approach for forecasting future demand.


**Calculating Order Frequency**

I've calculated the mean, standard deviation, and coefficient of variation for the order intervals. The CV is around 72.5%, indicating a moderate level of variability. Considering the median interval of 14 days, I predict the next order will be around November 18th, 2025. I will now predict the quantity for the order.


**Estimating Order Quantity**

I'm now calculating the mean, standard deviation, and coefficient of variation for the order quantities. The interquartile range is small, between 16 and 32, with an upper bound of 56. I'm investigating the potential for spikes or outliers, and have identified that, while within bounds, the values vary. I am looking for patterns.


**Refining Demand Prediction**

I'm now integrating the analysis of order frequency and quantity to predict the next order. Given the 14-day median interval, I anticipate an order around November 18th. The quantity forecast uses the truncated mean of 21.33, rounded to 21, although I'm also considering the historical order sizes of 16, 32, and 48, which could affect the final recommendation.


**Concluding Order Prediction**

I've finalized my analysis and determined the recommended order quantity, calculating a baseline of 21 based on the truncated mean, which I'll round down to 21 units. I anticipate the next order around November 18th, 2025, which gives us a 7-day lead time. My confidence level is deemed low due to the variability in historical order intervals.


**Synthesizing Findings**

I'm now synthesizing all the information: the intervals, the quantities, the fluctuations. Based on a truncated mean and the median interval, I'm recommending an order for 21 units. I've considered the inherent variability in the data and the history. The final output will be formatted as requested.




</details>

</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 32u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 21.33u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel avec alternance régulière de volumes 1-2 cartons
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-04
- **Prochaine prédite**: 2025-11-18 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Détection d'un cycle médian de 14 jours (intervalles récents de 13 et 14j). La dernière commande datant du 04/11, la prochaine est prévue le 18/11, soit dans l'horizon de 7 jours. Concernant le volume, l'historique montre une alternance parfaite (16, 32, 16, 32, 16). Bien que la moyenne tronquée (CV 35%) soit de 21.33u, l'analyse expert du pattern binaire indique que la prochaine commande sera de 32u (2 cartons).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,135 tokens
- **Output**: 5,532 tokens
- **Total**: 7,667 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently focused on the sales data for product MF0030. Examining the recent sales history, I see 16 units sold on Tuesday, November 4th, which is significantly lower than the 32 units sold on Tuesday, October 21st. I will use the 30-day horizon to predict future trends.


**Calculating Time Intervals**

The data shows irregular intervals between sales dates. I've calculated the time differences between the recorded sales of product MF0030. The average interval is 17.5 days, with a significant standard deviation of about 9.71 days. This suggests the sales pattern isn't consistently periodic, with a high coefficient of variation (CV) of around 55%.


**Calculating Order Predictions**

I've determined the next predicted order date for MF0030 is 2025-11-18, given the bi-weekly trend. With 7 days remaining until that date, this is within the 30-day horizon, so I must assess the risk. Despite a high coefficient of variation (CV) of around 55%, the more recent sales intervals are much more consistent. I'm focusing on the oscillation between sales quantities of 16 and 32 units, without identifying any outliers.


**Evaluating Quantity Patterns**

I've determined the alternating quantity pattern for product MF0030: 16, 32, 16, 32, 16. Analyzing the quantities yields a truncated mean of 21.33, excluding the minimum and maximum values. However, I must order either 1 or 2 cartons, and the 14-day trend shows it alternates.


**Forecasting Quantity Recommendations**

Based on the recent sales history and a bi-weekly trend, I'm predicting the next order date for MF0030 to be November 18th. With 7 days remaining, I'm evaluating the risk, noting a high coefficient of variation (CV) for the intervals, though more recent data points are more consistent. The pattern is clearly an oscillation of 16 and 32 units, meaning it's either 1 carton or 2 cartons.


**Calculating Sales Patterns**

The recent data reveals a predictable bi-weekly cycle of sales for product MF0030, oscillating between 16 and 32 units, making the next predicted order for 32 units on November 18th. The truncated mean of 21.33 aligns with a medium confidence, yet the alternating sales pattern suggests the next order should be 32, which matches business logic.


**Predicting Order Recommendations**

I'm now prioritizing the final recommendation for product MF0030. The calculated truncated mean is 21.33. Although the bi-weekly sales rhythm has a low confidence rating due to a high coefficient of variation (CV) for the intervals, the quantity pattern consistently alternates between 16 and 32 units, making the next order likely 32. However, I must stick to the logic of the baseline quantity, therefore 21 is my recommendation.


**Finalizing Order Recommendation**

I'm now concluding my analysis for product MF0030, and the baseline quantity calculated is 21.33. Although the sales interval data shows a high coefficient of variation (CV) of around 55%, the quantity is oscillating between 16 and 32 units. The expert recommendation is therefore to order 32 units, following the established sales pattern.


**Concluding Analysis & Prediction**

I'm finalizing the analysis for product MF0030, calculating the baseline quantity at 21.33 based on the provided methodology, where the pattern shows a recent oscillation between 16 and 32 units. Yet the predictable pattern makes the 32-unit order most likely. The confidence is medium, so I'm ordering 32 units.


**Confirming Final Recommendation**

After a thorough review, I've confirmed the bi-weekly sales rhythm, and a baseline quantity of 21.33. Although the sales interval data shows a high coefficient of variation (CV) of around 55%, the quantity is oscillating between 16 and 32 units, making a 32-unit order the most probable. I will order 32 units.


**Confirming Sales Cycle Details**

I am now thoroughly reviewing the data to confirm every calculation and logic step. I've re-calculated the confidence levels for both Phase 1 (low) and Phase 2 (medium), considering the bi-weekly cycle and the oscillating sales quantities. Despite the low confidence, I'm sticking with a 32-unit order, as per the established alternating pattern.


**Confirming Order Recommendation**

I'm now fully confident in the calculations, and the analysis is finalized. The truncated mean of the quantity is 21.33. Although the first sales interval generated a high coefficient of variation, recent sales suggest a clear pattern of alternating 16 and 32 units, so I will recommend ordering 32 units.


**Concluding Order Strategy**

I've finalized my analysis and confirm the recommendation. The calculations yield a baseline quantity of 21.33. Although there's a high coefficient of variation in the sales intervals, I see a clear pattern of 16 and 32 units. The next order should be 32 units.




</details>

</details>


<details>
<summary><strong>3. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle médian de 11 jours avec une quantité constante de 16u
- **Cycle médian (jours)**: 11
- **Dernière commande**: 2025-10-21
- **Prochaine prédite**: 2025-11-12 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique de commande montrant une stabilité parfaite de la quantité (16u) sur les 5 dernières commandes. Le cycle médian détecté est de 11 jours (intervalles : 8, 41, 9, 13 jours). Bien que l'intervalle de 41 jours crée une irrégularité statistique (CV de 76%), les commandes récentes sont plus rapprochées (9 et 13 jours). La dernière commande datant du 21 octobre, la prochaine commande attendue selon le cycle de 11 jours était théoriquement autour du 1er novembre, puis du 12 novembre. La date du 12 novembre étant dans l'horizon de 30 jours, une commande de 16 unités est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,190 tokens
- **Output**: 3,457 tokens
- **Total**: 5,647 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Product Data**

I'm currently focused on the product [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g. The date today is 2025-11-11, and my planning horizon stretches 30 days. Recent history shows activity from 2025-10-21 (16u) and 2025-10-08.


**Calculating the Statistics**

Now, I'm analyzing the interval data, focused on [MF0044]. The median interval is 11 days, and the mean is 17.75 days. The standard deviation is about 13. I'm taking this data for further assessment.


**Refining the Prediction**

I'm now zeroing in on the delivery timeline for [MF0044]. Based on the median interval of 11 days and the latest order on 2025-10-21, I predicted a reorder date of 2025-11-01. Given that today is 2025-11-11, I've flagged the order as potentially overdue, and the reorder risk seems quite high. The next cycle's predicted date is 2025-11-12.


**Assessing Order Quantities**

I've examined the product's ordering quantities, consistently 16 units per order. Analyzing the N-1 data reveals a similar pattern, with volumes stable at approximately 32 units/month. The recommended reorder is 16 units, with a high confidence in quantity.


**Predicting the Next Order**

I've re-calculated the intervals and confirmed a median of 11 days, though with a high CV due to an outlier. Given that the last order was on 2025-10-21, I predicted a reorder for 2025-11-01, which is now overdue. The next predicted order is 2025-11-12.


**Revisiting Quantity Analysis**

I'm now consolidating the data, with a focus on refining the recommendations for product [MF0044]. Given that the reorder date is near, I'm reinforcing that the median quantity remains 16 units. The high CV of intervals makes me reduce my confidence slightly.


**Refining Cycle and Dates**

I'm now finalizing the predicted reorder date. Considering the median interval of 11 days, the latest order from 2025-10-21 suggests a reorder around 2025-11-01, which is now overdue. Thus, I've projected the next order for 2025-11-12.


**Summarizing Key Metrics**

I'm now revisiting all the data, confirming the 11-day median cycle. Although intervals have some volatility, the 16 unit order size is consistent. Based on the 2025-10-21 order, the next order is projected for 2025-11-12. Confidence is medium.




</details>

</details>


<details>
<summary><strong>4. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une dispersion forte (15 à 43 jours)
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-11-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian est calculé à 29 jours sur la base des intervalles récents (15 et 43 jours). La date prédite de commande (06/11/2025) est déjà dépassée par rapport à la date actuelle (11/11/2025), ce qui indique un besoin immédiat dans l'horizon des 30 jours. La quantité est parfaitement stable à 16 unités sur les trois dernières observations, ignorant le pic de 32 unités de l'année précédente qui ne se confirme pas sur les volumes récents de cette année.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,130 tokens
- **Output**: 3,285 tokens
- **Total**: 5,415 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Timelines**

My focus is on the product's historical data, particularly the MF Brotaufstrich. I've been charting the recent and previous year's activity, noticing the frequency and timing of updates. The goal is to understand the update cadence and look for patterns, currently honing in on the August and October periods.


**Calculating Update Intervals**

I'm now deep diving into the intervals between updates for the MF Brotaufstrich Apfel Meerrettich. I calculated the median and standard deviation to get a handle on the cadence. The coefficient of variation is high, suggesting variability. Finally, I predicted the next update and compared it against the current date, to find I've overshot the current date, which warrants a re-evaluation of the data.


**Re-evaluating Order Timing**

I'm now zeroing in on the MF Brotaufstrich Apfel Meerrettich product. Initial calculations suggest an overdue order. However, given the variability (CV 68.2%), and comparing the 15-day and 43-day intervals, I need to reassess. Considering the N-1 data helps, but I'm still uncertain.


**Calculating Order Quantity**

The product, MF Brotaufstrich Apfel Meerrettich, requires a closer look. Analysis of the recent updates reveals a stable trend of 16 units, with no outliers. Despite the irregular cycle of 15 to 43 days and an overdue prediction date, I've adjusted my confidence in the median-based prediction to medium due to only 3 data points. The recommended order quantity remains at 16.


**Refining Order Predictions**

I'm now determining the order quantity for the MF Brotaufstrich Apfel Meerrettich. Three data points show a stable trend of 16 units, despite an irregular update cycle and a predicted date of 2025-11-06 (overdue now). Considering the N-1 data, and the 29-day cycle, I assess it as an imminent order with a stable quantity of 16. My confidence level is now medium, considering the few data points.


**Evaluating Final Confidence Level**

My analysis of the product, MF Brotaufstrich Apfel Meerrettich, is nearing completion. I've calculated the median and the coefficient of variation (CV), then the projected order date and compared to the current date. The CV of 68% and few data points initially gave low confidence, but then the recent stability of 16 units bumped it to medium.


**Finalizing the Recommendation**

I'm now putting the final touches on the MF Brotaufstrich Apfel Meerrettich analysis.  Having calculated a 29-day cycle and a predicted date of November 6th, which has passed, I'm recommending an immediate order. The quantity remains stable at 16 units, but the confidence is "low" due to interval variability and the limited recent data points. I will set the days until the next order to -5.


**Compiling Final Recommendations**

I'm synthesizing all data, including the N-1 order, to prepare the final JSON output. Recent updates and median cycle calculations are complete. Despite the 15 and 43-day intervals, I've prioritized the median for my recommendation, leading to an immediate order. I set "days\_until\_next" to -5 to reflect the overdue status.



</details>

</details>


<details>
<summary><strong>5. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de commande observé d'environ 49 jours
- **Cycle médian (jours)**: 49
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux points de données (16 unités à chaque fois). L'unique intervalle calculé entre les commandes du 11/08/2025 et du 29/09/2025 est de 49 jours. En extrapolant ce cycle de 49 jours à partir de la dernière commande, la date de réapprovisionnement prévue tombe le 17 novembre 2025, soit dans 6 jours. Comme cela se situe dans l'horizon des 30 jours, une commande de 16 unités (quantité stable) est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,046 tokens
- **Output**: 1,515 tokens
- **Total**: 3,561 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Product Volumes**

I'm currently focused on the MF0062 MF Tarti Betterave rouge product. Considering its sales data, specifically the 16-unit sales in September, and a similar number in August, my immediate goal is to forecast sales for the next 30 days, ending December 11th. I'm taking into account past performance to predict future demand.


**Calculating Upcoming Demand**

I've just finished the cycle analysis, determining a median and average cycle of 49 days. Based on the 2025-09-29 order, I'm predicting the next order will be around 2025-11-17, which falls within our 30-day forecast window. Risk has been flagged. Further, the baseline quantity is 16 units, and that's my recommended quantity.


**Assessing Confidence & Adjusting**

I've just concluded the entire analysis for the MF0062 product and the results are in. Although I calculated a prediction for the next order date and quantity, the confidence level is low, primarily due to the limited historical data – only two orders. Because the N-1 history is also empty, the analysis is based on the meager data available. Therefore, I will have to flag this.


**Reviewing & Finalizing Output**

I'm double-checking the calculations and reasoning for the MF0062 product forecast. The limited data continues to be the biggest challenge, but I've confirmed the 49-day cycle and the predicted next order date of November 17th. All dates, and the baseline quantity of 16 are correct. The confidence level, remains low, but the analysis is complete.




</details>

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 10:16:05: 16u
- 2025-10-21 10:27:16: 32u
- 2025-10-08 06:30:49: 16u
- 2025-08-26 09:44:27: 48u
- 2025-08-19 07:45:38: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 21u (confidence: low)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 10:16:05: 16u
- 2025-10-21 10:27:16: 32u
- 2025-10-08 06:30:49: 16u
- 2025-09-29 10:19:21: 32u
- 2025-08-26 09:44:27: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>3. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 10:27:16: 16u
- 2025-10-08 06:30:49: 16u
- 2025-09-29 10:19:21: 16u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-28 08:31:22: 32u
- 2024-01-09 09:56:05: 48u

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>4. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:30:49: 16u
- 2025-08-26 09:44:27: 16u
- 2025-08-11 11:36:10: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-28 08:31:22: 32u
- 2024-01-09 09:56:05: 16u

**✅ Quantité LLM**: 16u (confidence: low)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>5. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 10:19:21: 16u
- 2025-08-11 11:36:10: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: low)
**📊 Quantité Réelle**: 16u

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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | Stock prédit: 7.9u (5j restants) → prédit 16u mais non commandé |


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
| [MF0031] MF Tarti Olives verte 250g  | 16 | Stock: 13.0u (25j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T08:04:13.128Z*
