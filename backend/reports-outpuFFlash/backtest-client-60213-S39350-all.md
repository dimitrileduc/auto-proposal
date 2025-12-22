# Rapport Backtest - Client BIOK THOREMBAIS

## Contexte

- **Client** : BIOK THOREMBAIS (ID: 60213)
- **Commande réelle** : S39350
- **Date commande** : 2025-09-24 13:05:32
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 16,312 input + 56,037 output = 72,349 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 20 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 0.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 48.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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

## True Positives (10)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO01] KOKO Kombucha original 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel glissant, environ tous les 17-18 jours
- **Cycle médian (jours)**: 17.5
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-20-2025-09-21 (approx.)-2025-09-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 17,5 jours. La dernière commande datant d'il y a 20 jours (3 septembre), le client est entré dans sa fenêtre habituelle de réapprovisionnement. La quantité recommandée de 3 unités correspond à la médiane historique stable du produit.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 2,378 tokens
- **Total**: 3,077 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Past Production Runs**

I'm currently reviewing the production history for the ReBEL chips. My primary focus is on understanding the cadence of past runs. I've noted the dates and quantities, and I'm calculating the intervals between production batches to identify any trends or patterns. So far, the data looks relatively consistent with runs about once a month.


**Assessing Order Frequency**

I've moved on to calculating the time between orders, particularly for the ReBEL chips. My analysis suggests a median interval of 17.5 days. Comparing this to the current date reveals the predicted next order was around September 20th. Given today's date, September 23rd, this signals the order is possibly overdue and raises supply risk concerns. I am also calculating the median quantity for historical context.


**Evaluating Quantity Recommendations**

I've determined a predicted order date of around September 20th. I've also examined quantities ordered. The median quantity is 3, with a range between 1 and 4 units. The average is 2.6. Given the predictable cycle, I recommend ordering 3 units, aligning with historical patterns, and acknowledging some variability. The supply risk horizon, based on the history, looks like a 'YES'.


**Finalizing Recommendations & Rationale**

I've just finalized the assessment of the ReBEL chip demand. My analysis clearly indicates the predicted order date passed, suggesting the order is overdue. Consequently, I maintain the recommendation to order 3 units, aligning with historical patterns. I'm confident about the regular cadence, even if a recent dip occurred in a single order, and the rationale is now complete. The horizon indicates a "YES" for supply risk.




</details>

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier (médiane 18 jours)
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est court et très régulier avec une médiane de 18 jours. La dernière commande datant du 3 septembre, la prochaine était statistiquement attendue autour du 21 septembre. Au 23 septembre, le client est en retard sur son cycle habituel, ce qui indique un risque imminent de rupture. La quantité recommandée de 2 unités correspond à la médiane historique stable.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 2,029 tokens
- **Total**: 2,728 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Chip Sales Data**

The initial data points are in, showing a promising start for the ReBEL chips, specifically the paprika fumé variety. I've noted the initial sales of 3 units on September 3rd and tracked the prior sale on August 12th, indicating a 22-day interval. My next step is to calculate the daily average sales and predict future demand.


**Assessing Sales Intervals**

I've calculated the median interval between orders, settling on approximately 18 days. Based on this, and the last order date of September 3rd, I predicted the next order for September 21st, but have not received it yet. Since today is September 23rd, the order is overdue. Risk: YES. I've also assessed quantities, and the mean is 2.


**Predicting Future Orders**

I've refined my projections based on the latest data. The median interval is approximately 17.5 days, not 18, and I've updated the predicted date. Since the September 21st order is now overdue, I've assessed the risk as "YES." Based on the mean, I now predict a baseline quantity of 2 units for the next order.


**Evaluating Risk Factors Now**

I've finalized my analysis, verifying the median order cycle of 18 days and concluding the customer is overdue for an order. The predicted date of September 21st has passed. I've also confirmed a baseline quantity of 2 units, with high confidence in the accuracy of these projections, and have checked the data fields.


**Revisiting Projections**

I've re-examined the key metrics for the paprika fumé chips, including intervals, to confirm the prediction. My calculations indicate that the predicted order date of September 21st has indeed passed. This necessitates another review of the predicted quantity to provide a finalized recommendation.


**Concluding Analysis of Data**

I've finished the thorough analysis and confirmed a consistent 18-day ordering cycle, with the prediction date, September 21st, already passed. With this in mind, and the historical data, I confidently recommend a quantity of 2 units for the customer's anticipated order, deeming the risk of an order to be "YES." I have finalized all fields.




</details>

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 22 jours (médiane des intervalles)
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande systématiquement une seule unité à chaque itération avec un intervalle médian de 22 jours. La dernière commande datant d'il y a 20 jours, la prochaine commande est attendue immédiatement (sous 48h), justifiant ainsi un réapprovisionnement de fond de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 672 tokens
- **Output**: 1,250 tokens
- **Total**: 1,922 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Order Placement**

The product's order pattern reveals a recent median cycle of 22 days. Based on this, and the last order's date of 2025-09-03, I predict the next order should be expected around 2025-09-25. We're currently just two days away from that predicted timeframe.




</details>

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.2u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier bi-mensuel environ tous les 18 jours
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-21 (dans -2j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: Les commandes tombent principalement le mardi ou mercredi ; nous sommes aujourd'hui mardi, jour habituel de commande
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Le cycle moyen est de 18 jours. La dernière commande date d'il y a 20 jours (03/09), la commande est donc imminente (déjà théoriquement exigible le 21/09). Bien que la dernière commande fût de 2 unités, l'historique montre une stabilité forte à 1 unité dans 80% des cas. On préconise 1 unité pour couvrir le prochain cycle immédiat.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,536 tokens
- **Total**: 2,235 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Sales Trends**

I'm currently analyzing the sales data for the [REB08] ReBEL chip product. I see two units were sold on September 3rd, and one on August 12th. I'm calculating the average sales frequency, identifying any emerging trends, and projecting potential demand based on this limited data. Further data points are required for a statistically relevant conclusion.


**Predicting Order Imminence**

I've refined the analysis for the [REB08] ReBEL chips. Based on the 5 recorded sales, I've calculated an average cycle of approximately 18 days.  The last order was 20 days ago, past the predicted date. The model now flags this, indicating a potential need to proactively engage the customer, since we have passed the anticipated date.


**Forecasting Demand and Quantity**

I've just finished the analysis, and the [REB08] ReBEL chips premium & bio - piment citron 125g product has a recent order frequency suggesting an approximate 18-day cycle. The system has flagged that an order is already overdue. Regarding quantity, the baseline is set to 1 unit. However, I note a recent order of 2 units.


**Finalizing Order Predictions**

I've finished the analysis for the [REB08] ReBEL chips premium & bio -  piment citron 125g product. The order cycle averages 18 days; the last order was on September 3rd. Given today's date, September 23rd, an order is now overdue. The baseline quantity is set at 1 unit, but the last order was for 2.




</details>

</details>


<details>
<summary><strong>5. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle long identifié à environ 57 jours
- **Cycle médian (jours)**: 57
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-10-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre seulement deux commandes séparées de 57 jours. Bien que le cycle soit long, la date de prochaine commande théorique (30 octobre) se situe dans l'horizon de 40 jours (37 jours restants). La quantité recommandée est basée sur la stabilité parfaite observée sur les deux points de données.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 623 tokens
- **Output**: 1,084 tokens
- **Total**: 1,707 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Consumption Patterns**

I'm currently focused on the BUD03 product, specifically its consumption history. I'm crunching the numbers from the past, trying to understand the intervals between purchases. Seeing the dates, I'm already getting a feel for the buying trends.


**Assessing BUD03 Order Behavior**

I've examined the purchasing history for BUD03. The interval between the two observed purchases is 57 days. Based on this, I've predicted the next order date to be October 30th. It seems the quantity ordered is consistently two units. Due to limited data, the confidence level is low overall, but high in relation to order quantity.


**Finalizing BUD03 Risk Assessment**

I've refined my assessment of BUD03. The prediction for the next order date is October 30th, just 37 days away, triggering a "RISQUE OUI" alert. The quantity remains stable at two units. Although the data is limited, I'm confident in the quantity assessment and moderately confident in the timing prediction, given the clear purchase interval. My next step will be to output everything in JSON format.




</details>

</details>


<details>
<summary><strong>6. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle d'environ 22 jours détecté entre les deux commandes
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La prochaine commande est prévue d'ici 2 jours (cycle de 22 jours). La tendance récente montre une légère augmentation (de 1 à 2 unités). Étant donné la proximité de l'échéance et le risque de rupture imminent, une commande de 2 unités alignée sur la dernière transaction est préconisée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 620 tokens
- **Output**: 1,027 tokens
- **Total**: 1,647 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating historical trends**

I'm currently crunching the data on the BUD04 product, focusing on its sales history. I've noted the initial purchase dates and quantities. The task now involves calculating the intervals between purchases to identify any patterns or trends in customer behavior. I'm especially interested in analyzing the frequency and volume.


**Projecting future orders**

The analysis of BUD04 continues, now focused on predicting the next order. I've calculated a 22-day cycle based on past orders, projecting the next order for September 25th. Given the current date (September 23rd), we're close to the predicted window. Considering the recent trend of increasing quantities, I'm leaning toward predicting two units for the next order.


**Determining the final recommendations**

With the calculations complete, I've consolidated everything into a JSON object. I'm recommending two units for the upcoming order, given the detected cycle and the recent uptick in quantity. While the data is limited, the proximity of the predicted order date and the observed trend support this decision. Confidence remains low due to the short history.




</details>

</details>


<details>
<summary><strong>7. [KOKO01] KOKO Kombucha original 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 22 à 29 jours
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 22 jours, ce qui place la prochaine commande théorique au 25 septembre 2025. Avec une date du jour au 23 septembre, le risque de rupture est imminent (horizon < 40j). Bien que les quantités soient faibles, on observe une tendance haussière (1, 2, puis 3 unités). La médiane de 2 unités est retenue comme recommandation de base sûre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 669 tokens
- **Output**: 1,376 tokens
- **Total**: 2,045 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Data Points**

I'm analyzing the KOKO Kombucha sales data for the original 330ml product. My focus is now on the last three months, specifically the unit sales on different days. I've noted sales of 3 units on Wednesday, September 3rd, and 2 units on Tuesday, August 12th. I'm looking for patterns now.


**Projecting Future Inventory Needs**

I've crunched the numbers, and the median cycle appears to be 22 days based on the provided data. My prediction, using this, points to a need for a new order around September 25th. Given today's date of September 23rd, the risk of running out of stock is now considered high.


**Calculating Recommended Order**

I've determined a baseline quantity of 2 units, with a medium confidence. This is informed by a median sales volume and an upward trend, though the sample size is small. Given the short cycle of 22 days and the upcoming predicted order date of September 25th, I recommend ordering 2 units.


**Evaluating Stockout Risk Now**

Given the imminent predicted order date of September 25th, I'm now formally assessing the risk. The cycle is 22 days, and today is the 23rd, 2 days before that order. The increasing trend means I should order 2. I've reconfirmed the JSON data validity, and I'm now proceeding with a medium confidence level.




</details>

</details>


<details>
<summary><strong>8. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier de type bimensuel, entre 14 et 22 jours.
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen identifié est de 18 jours. La date actuelle (23 septembre) dépasse de 2 jours la date de réapprovisionnement prévue (21 septembre), indiquant un risque de rupture imminent. Les quantités ont légèrement augmenté récemment (moyenne de 2.0 sur les 5 dernières commandes), justifiant une commande de 2 unités pour maintenir le stock.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 697 tokens
- **Output**: 1,358 tokens
- **Total**: 2,055 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales Patterns**

My analysis is zeroing in on the sales trends for KOKO Kombucha Lemon Ginger. I'm focusing on the intervals between sales, identifying the fluctuations. The data shows a varying pace, with periods of 14, 15, and 20 days separating purchases. I need to understand what's influencing these shifts.


**Projecting Restock Needs**

I've examined the time since the last order, revealing we're 20 days past the last purchase, exceeding the typical cycle. Using the median interval of 18 days, the predicted restock date was the 21st, two days ago. Given this, and the product's ordering history, the risk is yes for a restock. I'm now calculating target quantities, considering past orders, including an increasing tendency.


**Evaluating Quantity Recommendations**

I've finalized the recommended restock quantity, settling on 2 units. The analysis of past orders, including the 1, 1, 4, 1, and 3 pattern, supports this figure. Although the pattern shows some fluctuation, the average of 2 units feels safe for business-to-business sales. I'm assigning a medium confidence level.


**Refining the Recommendation**

I'm now integrating the sales data analysis, which shows an average sales cycle of 18 days and an increasing trend in order quantities, with the B2B context, the recommendation is set to 2 units, balancing the medium confidence with the recent larger purchases. The analysis confirms a restock is overdue.




</details>

</details>


<details>
<summary><strong>9. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Pattern temporel**: Cycle régulier bimensuel (tous les 14 à 22 jours)
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-21 (dans -2j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Les commandes sont passées principalement le mardi ou mercredi ; nous sommes mardi 23.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle d'approvisionnement est relativement stable avec un intervalle médian de 18 jours. La dernière commande datant du 3 septembre (il y a 20 jours), le réapprovisionnement est nécessaire. Le volume médian constaté de 2 unités est recommandé pour maintenir le stock sans sur-stockage sur ce produit à faible débit.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 698 tokens
- **Output**: 1,893 tokens
- **Total**: 2,591 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Recent Kombucha Sales**

I've been analyzing the sales data for KOKO Kombucha Raspberry Hibiscus. My focus is on the frequency and quantity of recent orders. Today's update includes the 3-unit sale from September 3rd. There was also a single unit sale on August 12th, and looking back, the time gaps between sales are variable.


**Estimating Future Demand**

The sales intervals are now clear: 22, 20, 15, and 14 days, with a median of 17.5. Since today is September 23rd, and the last order was on September 3rd, the prediction already passed. Risk assessment is high; an order is overdue. I'm focusing now on the best order quantity, with a median of 2 units, but recent orders at 3.


**Considering Order Quantity Dynamics**

I'm now determining the appropriate order quantity. Analyzing the data, the median is 2 units, and the most recent order was 3 units. I'm noting the baseline is about 2.2 units, but I'm leaning toward 2 units due to the median's robustness within this dataset. Also, the intervals are widening slightly: 14, 15, 20, and 22.


**Calculating a New Order**

The frequency pattern indicates a cycle of roughly every 14-22 days, with an 18-day average. The last order was on September 3rd; today is the 23rd, 20 days later. Given the widening of the intervals, and the past two sales gaps being 20 and 22, it is a risk to not order.


**Determining the Order Quantity**

I've re-examined the quantities, now sorted: 1, 1, 2, 3, and 4 units. This analysis confirms the median is 2 and the mean 2.2. Also, it appears the intervals are widening slightly: 14, 15, 20, 22 days, with an 18-day average cycle. Given the overdue order and stable demand, I'm sticking to the 2-unit recommendation.




</details>

</details>


<details>
<summary><strong>10. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Mensuel régulier avec accélération légère
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-10-02 (dans 9j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Les commandes ont lieu majoritairement en début/milieu de semaine (mardi, mercredi)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande très stable (médiane de 28.5 jours) avec une quantité constante de 1 unité. La dernière commande datant du 3 septembre, la prochaine est prévue aux alentours du 2 octobre. Étant donné l'horizon de 30 jours et la régularité du cycle (< 40 jours), le risque de rupture/besoin de réapprovisionnement est confirmé.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 646 tokens
- **Output**: 1,372 tokens
- **Total**: 2,018 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales History**

I'm currently focused on the sales data for the [NOD04] product. Initial observations show a couple of past sales, and I'm now looking closely at the dates and units sold to establish a baseline. I'm trying to identify any patterns or trends in the early sales performance of this low-calorie mango-passionfruit lemonade.


**Calculating Order Intervals**

I've calculated the time intervals between past orders for the [NOD04] product, with the average interval being 28.5 days. Based on this, and accounting for the 20 days since the last order, I've predicted a next order date around October 2nd. The risk of stockout or missing an order within the next 30 days looks probable.


**Calculating Recommended Order**

I've determined the next order date for [NOD04] is around October 2nd, with a high risk of needing replenishment within 30 days. Furthermore, I've confirmed a consistent order pattern of one unit per order, suggesting a single unit is the best quantity to recommend. My confidence level, despite the limited data, is medium due to the regular cycle and stable quantities.




</details>

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 4u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 2u
- 2025-07-08 06:30:25: 3u
- 2025-06-24 12:29:05: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 1u
- 2025-07-08 06:30:25: 2u
- 2025-06-24 12:29:05: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 1u
- 2025-08-12 12:02:43: 1u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 2u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 1u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 2u
- 2025-07-08 06:30:25: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 2u
- 2025-08-12 12:02:43: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [KOKO01] KOKO Kombucha original 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 2u
- 2025-07-23 08:08:35: 0u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 4u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 4u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 1u
- 2025-08-12 12:02:43: 1u
- 2025-07-08 06:30:25: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (10)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.6u (32j restants) → prédit 1u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Stock prédit: 0.6u (32j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.6u (28j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: -0.7u (-7j restants) → prédit 2u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | Stock prédit: 1.3u (31j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.7u (45j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.2u (-6j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.1u (6j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T13:02:47.819Z*
