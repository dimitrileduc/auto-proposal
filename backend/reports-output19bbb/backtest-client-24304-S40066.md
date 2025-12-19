# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S40066
- **Date commande** : 2025-11-03 12:14:48
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 29
- **Tokens**: 62,323 input + 70,271 output = 132,594 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.3% | 26 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 59.5% | Score équilibré global |

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
| **MAE** | 0.55 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 36.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (11)

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
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier (14 jours) après un démarrage plus lent
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement présente une médiane de 14 jours (intervalles de 28, 14, 14j). La dernière commande datant du 2025-10-20, la prochaine est prévue pour le 2025-11-03, soit dans 1 jour (Risque OUI). Les quantités sont quasi-constantes (2, 1, 1, 1) avec un CV de 34,6%. La moyenne tronquée, excluant le maximum initial (2) et un minimum (1), établit une baseline stable de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,107 tokens
- **Output**: 2,423 tokens
- **Total**: 4,530 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Initial Data Points**

I've been analyzing the product data for the NOD02 limonade. My focus is on the sales data, specifically the single unit sold on October 20th. I need to understand the context of this sale within the 30-day window, up to December 2nd, and formulate a plan to boost sales, if necessary.


**Predicting Future Demand**

The sales cycle analysis for NOD02 limonade reveals a pattern. I've calculated the median cycle time, and based on this, the next sale is predicted around November 3rd, just a day from now. This falls within the 30-day window, suggesting a potential repeat purchase is likely, and the risk analysis flags a "yes" to watch.


**Assessing Sales Predictions**

The prediction for the next sale is tomorrow, November 3rd, and this is still holding. My confidence level in this forecast is medium. I've analyzed the historical purchase quantities, and I've also identified the baseline quantity to be 1, after trimming the min and max. No seasonality impacts were found.


**Calculating Order Intervals**

I've rigorously calculated the intervals between past orders, establishing a 14-day median cycle. Analysis using the dates available, specifically the last order on October 20th, suggests the next one is due tomorrow. The standard deviation and coefficient of variation are also computed.


**Calculating Prediction Confidence**

I've finalized the analysis of the NOD02 limonade data. I've rechecked all calculations. The median cycle is 14 days, the predicted next order date is November 3rd, and the predicted quantity is 1 unit. Confidence is medium. The reasoning is complete, with no outliers detected.


**Confirming Prediction Accuracy**

I've validated the predicted date for the next sale of the NOD02 limonade, which is tomorrow, November 3rd. All the dates check out, and calculations confirmed the 14-day median cycle. Quantities are stable, with no outliers. The confidence level remains at medium, as determined by both CV and point-based scoring.




</details>

</details>


<details>
<summary><strong>2. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.67u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel de 14 jours avec un allongement récent à 28 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 14 jours identifié (CV de 34.6%), prévoyant une commande pour le 2025-11-03, soit dans 1 jour (Risque OUI). L'analyse des quantités montre une tendance décroissante monotone passant de 3u à 1u. Bien que la moyenne tronquée suggère 1.67u, l'extrapolation de la tendance baisse et les deux dernières observations à 1u militent pour une recommandation de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,131 tokens
- **Output**: 3,413 tokens
- **Total**: 5,544 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Prediction Scenarios**

I'm currently focused on the upcoming 30 days for KOKO03, specifically predicting the next order quantity. I'm starting by analyzing the potential for stockouts, given the past 3 months' order cycle. My aim is to identify the critical risk factors before moving to actual quantity calculations.


**Calculating Order Cycles**

I've just finished calculating the order cycle statistics for KOKO03. The median cycle is 14 days, with a mean of 17.5 days and a standard deviation of approximately 6.06 days. The coefficient of variation is roughly 34.6%. I'm now determining the predicted next order date based on these calculations, considering the last order on 2025-10-20.


**Refining Risk Assessment**

I'm now zeroing in on the risk evaluation. Based on the calculated order cycles and considering today's date, the next order *is* projected within the 30-day window, so a potential stockout is a *definite* risk. My confidence level, based on the coefficient of variation, is at a medium level.


**Evaluating Quantity Calculations**

I've just finished the quantity calculation, and I'm currently torn between predicting a quantity of 1 or 2 units. The median baseline suggests 2, but the decreasing trend leans towards 1. Considering the latest orders, I'm leaning toward the lower estimate. I'm taking into account the average and truncated averages in my decision.


**Finalizing the Recommendation**

I'm now concluding the analysis. The decreasing demand trend strongly suggests a quantity of 1 unit for the next order. Though the baseline estimate is closer to 2, the recent orders confirm a reduced demand pattern. The confidence level is medium for both phases.


**Assessing Order Prediction**

I'm now integrating the calculated order cycle, the predicted next order date, and today's date into the risk assessment, which is "YES". My confidence level remains at a medium level based on the coefficient of variation.


**Refining JSON Output**

I'm now putting the final touches on the JSON structure. I've re-verified all calculations and the output details. I am now double-checking the confidence levels for both Phase 1 and Phase 2. The reasoning is now finalized.


**Confirming JSON Structure**

I'm now implementing the correct JSON format. I am double-checking that the values are correctly typed, and have double quotes. Furthermore, I'm checking the reasoning. Finally, I'm finalizing the confidence levels.




</details>

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.5u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande ultra-régulière tous les 14 jours le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Détection d'un cycle parfait de 14 jours (CV=0%). La prochaine commande est prévue pour le 2025-11-03 (J+1), soit dans l'horizon de 30 jours. Les quantités montrent une tendance décroissante (6, 3, 3, 2, 2). La valeur 6 est identifiée comme un outlier statistique (IQR). La médiane des quantités retenues est de 2,5. Compte tenu de la stabilisation récente à 2 unités, la recommandation est de 2 unités pour la prochaine commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,132 tokens
- **Output**: 1,728 tokens
- **Total**: 3,860 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Chip Demand**

I'm currently looking at the sales data for [REB02] paprika-flavored chips. Recent sales are quite low, with only 2 units sold on both October 6th and 20th, and 3 units on September 22nd. I'm projecting demand for the next 30 days, keeping in mind the need to understand these low sales, to identify factors, and build the best projection.


**Refining Demand Projections**

I've examined the sales intervals, finding a consistent 14-day cycle with zero variation. This gives high confidence in the prediction. Based on this, I anticipate the next order of paprika-flavored chips by November 3rd, with the current date being November 2nd. The quantities show a rising trend.


**Finalizing Chip Quantity Forecast**

I've now analyzed the sales data more deeply, calculating the baseline at 2.5 units, though the trend appears to be decreasing, so I rounded down. With a high confidence level due to the consistent 14-day cycle and a recent quantity of 2, my final recommendation for the next paprika-flavored chip order is 2 units.


**Recommending Final Order Size**

I've just finished the final stage, after meticulously analyzing sales data. The calculations show a baseline demand of 2.5 units, but the recent trend leans downward. Considering this, the 14-day cycle's unwavering consistency, and recent sales of 2 units, my final, confident recommendation is to order 2 units of [REB02] paprika-flavored chips.




</details>

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.5u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande cyclique hebdomadaire bimensuelle (tous les 14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Cycle de commande extrêmement régulier de 14 jours détecté (CV=0%). La prochaine commande est prévue pour demain (2025-11-03), ce qui confirme le risque de rupture dans l'horizon de 30 jours. On observe une légère tendance à la baisse des volumes (passant de 5u à 1u). Le calcul statistique identifie la première commande de 5u comme un léger outlier (barrière haute à 4.5u). Sur les données filtrées [1, 2, 3, 3], le CV est de 42%, ce qui nécessite l'utilisation de la moyenne tronquée (2.5u) arrondie à l'unité supérieure pour la recommandation finale.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,132 tokens
- **Output**: 2,403 tokens
- **Total**: 4,535 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Product Demand**

I'm currently focused on the product [REB04], specifically the premium & bio ReBEL chips with thyme/rosemary. Initial observations show a single unit sold on 2025-10-20. Now, I'm projecting the next 30 days of demand, aiming to understand potential growth patterns.


**Calculating Probable Sales Dates**

Given the consistent 14-day intervals between past orders of [REB04], and the fact it last sold on 2025-10-20, I predict the next sale will be around 2025-11-03, only a day away from the current date. The high confidence score gives me further conviction.


**Predicting Future Demand**

The model predicts a sale tomorrow, 2025-11-03. After, I began to scrutinize the quantities sold, revealing a fluctuating trend. The mean quantity is 2.8, but a trimmed mean (excluding outliers) is 2.5, which I'll be using. With these values, I'm working to produce a confidence interval and a 30-day demand forecast.


**Finalizing Demand Predictions**

Based on today's date, 2025-11-02, and with the high confidence in a sale tomorrow, I've calculated the key metrics. The truncated mean quantity is 2.5, but I'll use 3 units as a safer forecast. Considering the 14-day cycle and a decreasing trend, I'm now completing the 30-day demand estimate.


**Finalizing Predictions Refined**

Analyzing the data, I've confirmed a 14-day cycle, with the next order expected on 2025-11-03. With the quantities, I calculated the mean as 2.25 and the median at 2.5, using a truncated mean, I'm recommending 3 units due to the decreasing trend.


**Summarizing the Calculations**

Having gathered all the relevant data, including the sales dates, I've calculated the intervals, with perfect 14-day intervals. A high confidence score validates my next sale prediction: 2025-11-03. After, I calculated the mean and median, alongside IQR, to isolate outliers. Considering the decreasing trend, the final quantity has been derived.




</details>

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande tous les 14 jours (cycle hebdomadaire strict le lundi)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle temporel extrêmement régulier de 14 jours détecté (CV=0% sur les intervalles). La dernière commande ayant eu lieu le 2025-10-20, la prochaine est prévue pour le 2025-11-03, soit dans 1 jour (Risque de rupture imminent). Concernant le volume, les quantités sont très stables avec une occurrence de 2 unités dans 80% des cas. Le calcul statistique (IQR) ne détecte aucun outlier significatif. La baseline est calculée sur la médiane des 5 derniers points.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,126 tokens
- **Output**: 2,031 tokens
- **Total**: 4,157 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering JAM02 Trends**

I've been analyzing the recent history of JOY! Organic Strawberry Jam 37 0g. I've noted a couple of units sold on October 20th. I'm now focused on projecting sales for the next month, considering those initial sales numbers and any potential seasonality.


**Estimating Next Order Date**

I've calculated the cycle length based on past orders, identifying a consistent 14-day interval.  Given this and the most recent order date, I've predicted the next order will be on November 3rd. Since that date falls within the 30-day forecast window, the risk is deemed high.


**Forecasting Sales Projections**

I've completed the cycle length calculation, arriving at a consistent 14-day interval, and the standard deviation is 0. My confidence in the prediction is "high." I've also identified the next order date as November 3rd, confirming a high risk within the 30-day forecast. I'm now analyzing the quantity of product sold.


**Evaluating Quantity Predictions**

I've now moved on to analyzing the quantities. With a confidence level of "high," based on a low coefficient of variation, I've calculated a baseline of 2 units. There is no seasonality. I'm recommending an order of 2 units for tomorrow.


**Confirming Order Prediction**

I've just finalized the next order date, November 3rd, and the predicted quantity of 2 units. A 14-day cycle is consistent, with stable sales patterns observed. I am confident in these recommendations for the next order. I have assessed the risk and concluded it to be high.




</details>

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bimensuelle régulière
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 14 jours identifié (intervalles observés de 14, 14, 28, 14 jours). Avec un CV temporel de 34,6%, la régularité est qualifiée de moyenne mais la proximité de l'échéance (prédite à J+1 le 2025-11-03) confirme le risque de rupture imminent. Les quantités sont parfaitement stables à 1u par commande, sans aucun outlier ni tendance détectée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,127 tokens
- **Output**: 2,049 tokens
- **Total**: 4,176 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Sales Patterns**

I'm analyzing the sales data for JOY03. The pattern seems to involve consistent unit sales, but the intervals between those sales are irregular. I'm focusing on the gaps between sales dates to understand any underlying trends.


**Calculating Order Prediction Metrics**

I've crunched the numbers for JOY03.  The median interval is 14 days, with a mean of 17.5 days. The standard deviation is about 6 days, and the coefficient of variation is roughly 34.6%. Using the median, I predict the next order around November 3rd, which is about a day away.


**Evaluating Predictions & Confidence**

I've just finalized the prediction and confidence levels. Based on the analysis, I'm anticipating the next order around November 3rd, with a confidence level that leans towards 'medium' due to the coefficient of variation. The quantity is stable at one unit. The trend is also stable, and there is no seasonality.


**Synthesizing Findings & Results**

I've just finalized the analysis of JOY03. The prediction is for one unit on November 3rd, tomorrow, with a high confidence. The intervals between orders average 14 days, but are somewhat variable. The quantities are consistent, and there is no seasonality or negative trend detected.


**Summarizing Final Recommendations**

The analysis confirms a consistent pattern: JOY03 orders one unit every 14 days, with minor variations. The next order is predicted for November 3rd, with high confidence, given the quantity stability and upcoming date. The data revealed no seasonality or negative trends.




</details>

</details>


<details>
<summary><strong>7. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle erratique avec potentiels sauts de commandes
- **Cycle médian (jours)**: 35
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse basée sur 3 points de données uniquement. Le cycle entre les commandes est passé de 14 jours à 56 jours (écart-type élevé), ce qui donne un cycle médian/moyen de 35 jours. La dernière commande ayant eu lieu le 20/10, la prochaine est estimée au 24/11/2025, soit dans 22 jours (dans l'horizon des 30 jours). Les volumes sont très faibles (1-2u), la moyenne tronquée sur cet échantillon restreint après filtrage (CV 43%) pointe vers une unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,074 tokens
- **Output**: 1,994 tokens
- **Total**: 4,068 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Jam Sales Trends**

I've been analyzing recent sales data for JOY! Organic Four-Fruit Jam. It looks like we had a single unit sold on October 20th. I'm focusing now on projecting sales over the next 30 days, until December 2nd, keeping in mind this early data point. I'll need to consider other factors beyond this initial sale, to provide an accurate forecast.


**Calculating Projected Sales Dates**

I'm using the sales data to determine the likely interval between sales. Intervals are 14 and 56 days, giving an average interval of 35 days and a high coefficient of variation, indicating a very sparse data set. Based on this, I project the next sale around November 24th, 2025.


**Forecasting Sales Quantity**

I'm now calculating the projected sales quantity for the forecasted sale on November 24th, 2025. With a Coefficient of Variation of about 43%, I will use a truncated mean to determine the baseline, which is 1 unit. There's no seasonality, so I'm using a factor of 1.0. The trend appears to be decreasing.


**Evaluating Data Confidence Levels**

I'm now assessing the overall confidence in my projections. With only three data points, both the interval and quantity forecasts have low confidence due to a high coefficient of variation. The predicted sale on November 24th falls within the 30-day window, but the analysis is limited.


**Summarizing Findings' Details**

I've reviewed the sales data again. My analysis of the interval between sales continues to suggest the next sale is likely around November 24th, 2025. I'm sticking with a quantity of 1 for the forecast. Despite this, I'm maintaining a low confidence level due to the limited historical data points.




</details>

</details>


<details>
<summary><strong>8. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.75u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycles irréguliers multiples de 14 jours, médiane 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-17_00:00:00.000Z-00:00:00.000Z-2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
DÉTECTION: Cycle médian identifié de 28 jours basé sur les 3 derniers mois (intervalles de 14 et 42 jours). La prochaine commande est prévue pour le 2025-11-17, soit dans 15 jours, confirmant un risque de rupture dans l'horizon de 30 jours. QUANTITÉ: L'analyse IQR sur l'historique global (n=11) identifie le point 5u comme une valeur aberrante (Barrière haute 3.5). Le calcul de la baseline utilise une moyenne tronquée (excluant min/max) des 10 valeurs retenues car le CV est de 35%, ce qui donne 1.75u, arrondi à 2u. Aucun impact saisonnier significatif n'est observé par rapport à N-1 après retrait de l'outlier.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,285 tokens
- **Output**: 5,417 tokens
- **Total**: 7,702 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Data**

The sales figures for MF0034, the Tarti Pomme Raifort 250g, are in. Over the past three months, sales have been sporadic. There were sales of 1 unit each on October 20th and October 6th, and 2 units on August 25th. I'm focusing on these recent sales to project potential demand over the next month, up to December 2nd.


**Modeling Sales Intervals**

I've been analyzing the intervals between sales, which appear to cycle in multiples of 14 days. This week, I compared the 2024 data to the recent figures and confirmed a similar pattern. The intervals between sales appear consistent, though the frequency is unpredictable. A more granular, deeper investigation into seasonality is next.


**Calculating Prediction Intervals**

The data analysis reveals a cycle length of approximately 28 days, based on recent data. Using this, I calculated a coefficient of variation of around 70.7%, putting this model's confidence in the low range. The next anticipated sale is likely around November 17th. I must refine these predictions with an understanding of seasonality.


**Evaluating Interval Data**

I've examined the time intervals between sales, now including the N-1 data, to improve predictions. I've calculated the median interval as 40.5 days, though the recent data suggests a 14-day cycle. Using the CV, the confidence is low. Based on this, I predict the next sale around November 17th. I must identify any outliers.


**Projecting Demand Refined**

I've examined the recent sales and historical data, confirming a 14-day cycle with a 70.7% coefficient of variation. This suggests low confidence. I've identified the quantity of 5 from 2024-10-15 as an outlier. Further, the baseline estimate now stands at 1.75 units. I now believe sales will most likely occur on November 17th.


**Determining Next Sale Date**

Having refined the prediction model, the cycle length is confirmed at 14 days, with an outlier identified. The analysis, including a trimmed mean, yields a baseline of 1.75 units. I now project the next sale around November 17th. I must identify the risk involved.


**Calculating a Final Prediction**

I've now finalized the model, incorporating the 14-day cycle and outlier removal. With a baseline of 1.75 units, I am recommending 2 units. The next sale is predicted to be on November 17th. I must confirm my understanding of the risk analysis.


**Synthesizing Risk and Demand**

I've finalized the model, incorporating all the recent data, including sales intervals and outlier handling. I predict the next sale will be on November 17th, with a recommended quantity of 2 units. The risk analysis also suggests this is a valid prediction.


**Refining the Recommendation**

I've meticulously reviewed the sales data, identified and excluded an outlier, and calculated a trimmed mean of 1.75 units. Considering the low confidence due to data variability, I'll recommend 2 units for the next sale, projected for November 17th. I must ensure the JSON is correctly formatted.


**Calculating the Final Answer**

I've checked the calculations, the JSON formatting, and every single detail. I'm using a 28-day cycle with an outlier removed. My confidence remains low. I recommend 2 units for the order, and the predicted date remains November 17th.


**Concluding Analysis and Summary**

I've rigorously analyzed the data, now considering both recent and historical information, and confirmed all calculations. The final prediction remains a sale on or around November 17th, with a recommendation for 2 units. I've also re-confirmed the details on all confidence levels.


**Concluding all Calculations**

After a thorough review of all data, including recent and historical sales, I can confirm the final predictions. The next sale is expected around November 17th, and I recommend ordering 2 units. I've re-evaluated all confidence levels, and the reasoning is sound.




</details>

</details>


<details>
<summary><strong>9. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel ultra-régulier de 14 jours détecté le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est d'une stabilité absolue avec un intervalle de 14 jours (CV=0%) et des quantités constantes de 1u sur les 5 dernières occurrences. La dernière commande datant du 2025-10-20, la prochaine est prévue pour le 2025-11-03 (soit à J+1), ce qui confirme le risque de rupture imminent. Bien que l'historique N-1 affiche des volumes supérieurs (3u contre 1u actuellement), la tendance récente est parfaitement stabilisée à 1u par commande; un ajustement saisonnier à la hausse (1.2x) ne modifie pas l'arrondi entier final à 1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,391 tokens
- **Output**: 2,577 tokens
- **Total**: 4,968 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

\n\n

I've been analyzing the sales data for the MF0033 MF Tarti Poivron chilli, focusing on the last few months. It's clear that the product has a consistent but low demand, with a purchase frequency of roughly once a month, primarily on Mondays. Currently, I'm focusing on identifying any trends that could explain this pattern.


**Predicting the Next Order**

\n\n

I've crunched the numbers, and the predicted next order date is tomorrow, November 3rd. With a coefficient of variation of 0%, the model indicates high confidence in this prediction. The consistent 14-day intervals suggest a predictable pattern, despite the overall low volume. There is 1 day until the date, posing a slight risk.


**Evaluating Current Inventory Levels**

\n\n

With the predicted order arriving tomorrow, I'm now scrutinizing the current stock levels of the MF0033 MF Tarti Poivron chilli. Historical data, along with a 0% coefficient of variation, supports the high confidence level in the forecast. Although the recent volumes have been lower compared to the prior year, there is a very stable trend recently and I predict there's no risk of running out. I'm checking the inventory levels against my baseline of one unit.


**Refining the Demand Forecast**

\n\n

I've just finished running a deeper analysis. The bi-monthly order cycle for MF0033 remains consistent, with a predicted order for tomorrow, the 3rd of November. Although the quantities have decreased from 3 to 1 unit per order compared to last year, the recent trend is incredibly stable at 1 unit every two weeks. My confidence level remains high, given a CV of 0%, indicating very little variance.


**Refining Final Recommendations**

\n\n

My analysis is complete and I'm finalizing the recommendations. Given the recent and stable bi-monthly pattern of 1 unit, the next order is indeed predicted for tomorrow, the 3rd. While the previous year saw larger volumes, the current consistent demand makes a quantity of 1 unit the most appropriate, with a high degree of confidence. All key details have been checked.


**Summarizing the Findings**

\n\n

My analysis of the MF0033 product is complete. Considering the consistent 14-day cycle and upcoming order tomorrow, the recommended quantity remains at one unit, with a high degree of confidence. While N-1 quantities were larger, the stable recent demand outweighs historical fluctuations, leading to this conclusion. The final JSON format is ready.




</details>

</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel strict (14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: Commande systématique le lundi, la prochaine prévue demain lundi 03 novembre.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Détection d'un cycle extrêmement régulier de 14 jours (CV = 0%). La dernière commande datant du 20/10, la prochaine est prévue pour le 03/11, soit demain. Sur le plan des quantités, l'historique récent varie entre 1u et 3u (moyenne 2.0u). Malgré un changement de comportement par rapport à N-1 (fréquence doublée mais quantités divisées par deux), le pattern actuel est très stable. On applique la moyenne tronquée sur les volumes récents avec un léger ajustement lié à la forte saisonnalité historique de novembre (N-1 à 5u), stabilisant la recommandation à 2 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,391 tokens
- **Output**: 2,384 tokens
- **Total**: 4,775 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Aubergine Demand**

\n\n

Okay, I'm crunching the numbers for the MF Tarti Aubergine, specifically the 250g size. Right now, I'm focused on the last few deliveries: 3 units on 2025-10-20, and 1 unit on 2025-10-06. The trend seems to be weekly, with some variance. Next, I plan to analyze the other data points from September to spot any patterns for this product, and its likely demand in the next 30 days.


**Evaluating Order Frequency**

\n\n

I've calculated the intervals between the most recent orders for the 250g aubergine, confirming a median of 14 days with zero variation. This gives me high confidence in the prediction. I've predicted the next order date and now, I'm beginning the quartile analysis to determine upper and lower bounds for the quantity ordered, with 25% percentile being 1 unit and 75% being 3.


**Calculating Quantity Bounds**

\n\n

My analysis has narrowed to the product's recent order quantities. I've calculated the coefficient of variation, coming in around 44.7%, which I deem moderately volatile. I'm now proceeding with a truncated mean to get a refined prediction, excluding the extreme values. However, I am now revisiting the N-1 data from October-November 2024, to check for seasonality and refine my quantity estimates.


**Assessing Seasonality Impacts**

\n\n

My current focus is on the pronounced difference between recent and last year's order quantities. Given the strong seasonality signal, and the pattern of 14-day intervals, I've adjusted the baseline quantity upwards, resulting in a refined estimate of 2 units. I'm confident that this accounts for the historical context, considering the downward trend of volumes.


**Validating the Recommendation**

\n\n

My current focus is on finalizing the forecast. I've re-reviewed all key parameters, confirming a strong seasonality signal. Although I'm confident in the quantity of 2, I'm checking to make sure it is in line with the trend. I'm now proceeding with the final JSON formatting and output validation to ensure data integrity and model interpretability.




</details>

</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.33u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier entre 28 et 85 jours, fortement perturbé par un arrêt prolongé en 2024-2025
- **Cycle médian (jours)**: 44
- **Dernière commande**: 2025-08-11
- **Prochaine prédite**: 2025-11-09 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian historique est de 43.5 jours. La dernière commande date du 11/08/2025. Bien que la date prédite par calcul simple (septembre) soit passée, l'historique N-1 montre une commande le 14 novembre. Avec un délai actuel de 83 jours depuis la dernière commande et la proximité de la date historique, une commande est imminente sous 30 jours. Les quantités sont restées très stables entre 1 et 3 unités depuis deux ans. La baseline est calculée par moyenne tronquée (exclusion de 1u et 3u) sur un historique de 8 points.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,201 tokens
- **Output**: 2,801 tokens
- **Total**: 5,002 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating historical trends**

I'm currently looking into the sales data for product MF0032. The focus is on analyzing the historical performance from the previous year, specifically the sales figures from 2024. I've noted sales of 2 and 3 units in September and August respectively.


**Forecasting product cycles**

\n\n

I've just calculated the median and mean intervals between orders, focusing on the historical N-1 data. The median cycle is approximately 43.5 days, while the mean is 49 days. These figures exclude the extended gap in sales data. It indicates the product possibly experiences a regular demand cycle with potential disruptions, possibly related to seasonal stockouts or product discontinuation.


**Evaluating Recent Order Patterns**

\n\n

I've just finished analyzing the order intervals, specifically focusing on the recent N-1 data for product MF0032. Although the median and mean order cycles are about 43.5 and 49 days, the last order was in August 2025. Given it's now November 2025, and there was a November 2023 order, I anticipate a new order within the next month, considering seasonal trends. The high coefficient of variation highlights the order frequency's irregularity.


**Forecasting order intervals**

\n\n

My current focus is on refining the temporal prediction for product MF0032. Although I predicted an order based on the November 2023 order, and it's now early November 2025, I've re-examined the data. The analysis indicates a potential stockout or seasonal behavior, and I've reviewed the quantity analysis, calculating a recommended order of 2 units.


**Refining the Temporal Analysis**

I'm now diving deeper into the temporal predictions for product MF0032, particularly scrutinizing the N-1 data. While the August 2025 order suggests a cycle, the 83-day gap necessitates a seasonal review. Considering the November 2023 order, and now it being early November 2025, a fresh order is anticipated, with a recommended order quantity of 2.


**Summarizing the Order Patterns**

I've re-examined the 2023 and 2024 order history for product MF0032, and calculated the intervals and a median cycle of 43.5 days. With the August 2025 order and the current date in early November 2025, a new order is highly probable. I'm suggesting an order of 2 units. I'm noting the confidence as low.




</details>

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u
- 2025-08-11 06:51:13: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 2u
- 2025-10-06 09:27:30: 2u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 3u
- 2025-08-25 10:25:08: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 3u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 2u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 2u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 07:22:24: 5u
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 2u
- 2024-05-13 13:42:50: 2u
- 2024-03-19 14:47:15: 3u
- 2024-02-09 08:53:20: 2u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 07:22:24: 3u
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 4u
- 2024-06-11 06:44:54: 2u
- 2024-05-13 13:42:50: 4u
- 2024-04-15 11:54:11: 2u
- 2024-03-19 14:47:15: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 3u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 3u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 07:22:24: 4u
- 2024-09-03 09:43:33: 4u
- 2024-08-06 09:10:28: 5u
- 2024-06-11 06:44:54: 4u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 5u
- 2024-03-19 14:47:15: 5u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 5u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 3u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.3u (5j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.4u (8j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | Stock prédit: 1.3u (4j restants) → prédit 5u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: -1.0u (-5j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: -0.9u (-5j restants) → prédit 2u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 4 | Stock prédit: 2.8u (27j restants) → prédit 4u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 3 | Stock prédit: 3.0u (36j restants) → prédit 3u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Stock prédit: 2.1u (29j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.6u (-9j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:10:04.938Z*
