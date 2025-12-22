# Rapport Backtest - Client La Fermette Godelaine de Saint-Georges

## Contexte

- **Client** : La Fermette Godelaine de Saint-Georges (ID: 99)
- **Commande réelle** : S39676
- **Date commande** : 2025-10-13 07:37:52
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 50
- **Tokens**: 31,280 input + 106,715 output = 137,995 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 23.8% | 21 produits prédits, 5 corrects |
| **Rappel** | 50.0% | 10 produits réels, 5 détectés |
| **F1-Score** | 32.3% | Score équilibré global |

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
| **MAE** | 0.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 40.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une tendance de commande mensuelle ou bimensuelle
- **Cycle médian (jours)**: 33
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-11 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La commande la plus récente date du 9 octobre. Bien que l'historique soit parcellaire, le cycle médian calculé est de 33 jours. La prochaine commande théorique est donc prévue pour le 11 novembre, soit dans 30 jours. Selon les critères (seuil < 40 jours), un risque de rupture est identifié. La quantité est systématiquement de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 718 tokens
- **Output**: 2,262 tokens
- **Total**: 2,980 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product History**

I'm focused on analyzing the recent sales history for product MF0035, specifically "MF Tarti Tomate A il des ours 250g". I've pinpointed two recorded sales: one unit on October 9th, 2025, and another on August 11th, 2025. My next step is to explore the data, and search for additional sales.


**Forecasting Future Dates**

I'm now calculating a potential reorder date. Analyzing past sales intervals, I've computed a median of 32.5 days between orders. Considering the most recent sale on October 9th, 2025, I anticipate the next order around November 10th, 2025. I am very confident with my findings.


**Evaluating Stock Risks Now**

I'm now determining potential risk based on my reorder date prediction and past sales data. My calculations show approximately 29 days until the next order is expected, which triggers a "RISK YES" condition. With the last order just three days ago, I am very confident with my analysis. The frequency pattern is irregular, with peaks in August and a 1.5-month gap between recent orders.


**Calculating Remaining Time**

I've refined the reorder date calculation, taking into account the irregular sales intervals. The median cycle is roughly 33 days, placing the next predicted order around November 11th, 2025. Given the last order on October 9th, 2025, that's approximately 30 days until the next one, triggering a "RISK YES" status.


**Assessing Current Orders**

I'm now determining whether the user requires an immediate order. Given the recent purchase of one unit three days ago, and a predicted reorder date roughly a month away, the system's "RISK YES" status seems appropriate. However, it's worth noting the low confidence due to inconsistent ordering patterns.


**Confirming the Recommendation**

I'm now completely confident that the model's recommendation is correct, even though the data is sparse. Given that the last order occurred three days ago, and the upcoming order is predicted to be in approximately 30 days (less than the 40-day threshold), the "RISK YES" status applies. The recommended quantity remains 1 unit. The data is still irregular, so my confidence is low.




</details>

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de commande identifié à 38 jours (intervalle entre le 01/09 et le 09/10).
- **Cycle médian (jours)**: 38
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle de 38 jours est observé entre les deux seules commandes enregistrées. La prochaine date de commande estimée (16 novembre 2025) se situe dans 35 jours, ce qui déclenche une alerte selon le critère de risque ≤ 40 jours. Bien que la commande soit récente (3 jours), le stock est supposé bas vu les volumes très faibles. On recommande 1 unité, correspondant à la demande la plus récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 618 tokens
- **Output**: 3,014 tokens
- **Total**: 3,632 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking the Product Data**

I'm currently tracking the sales history for the ReBEL chips. Recent data indicates a sale of 1 unit three days ago, and 2 units were sold approximately six weeks ago. I'm keen on establishing the sales trends to identify patterns.


**Interpreting the Sales Data**

I'm now focusing on the product [REB08] ReBEL chips. My calculations show a 38-day cycle based on the two recent orders. The predicted next sale date is around November 16th, which is approximately 35 days from today. I'm clarifying the risk assessment logic, especially the "≤ 40 days" criteria.


**Assessing the Risk Factor**

Now, reviewing the calculated cycle of 38 days, I'm considering the instruction: "If ≤ 40 days -> RISK YES." The next predicted order date, November 16th, is roughly 35 days from today, therefore, the risk flag should be yes. However, I am considering the low-volume orders, particularly the most recent order.


**Finalizing the Recommendation**

I'm now determining the recommended quantity. The recent order of 1 unit three days ago complicates things. While the 38-day cycle and 35-day proximity to the next order indicate a "RISK YES" status, the recent purchase makes me question the need for an immediate order. I'm leaning toward quantity 0 or 1.


**Finalizing Quantity Prediction**

I'm now determining the recommended quantity. The recent data shows a 38-day cycle, indicating a risk. While the predicted order date is 35 days away, the recent purchase of 1 unit three days ago complicates the decision. I will calculate usage and stock availability to confirm the appropriate number of units. I will also incorporate the low data confidence level.


**Refining the Recommendation**

I'm now integrating all considerations. The "RISK YES" trigger activates based on the 38-day cycle, which is within the 40-day threshold, despite a recent order of one unit. Analyzing the very recent purchase, the low usage, and the 35-day window to the next anticipated order, I'll recommend the replenishment quantity. With low confidence, I will factor the low-volume orders.


**Evaluating the Final Decision**

I'm now fully reviewing the risk assessment and quantity recommendation. Given the low-volume orders, recent purchase, and the 38-day cycle, I will make an appropriate recommendation. The "Si ≤40 jours -> RISQUE OUI" guideline points to "Yes." The history indicates low volume, and consumption calculation indicates a need within the next 30 days. So the final order recommendation is one unit.


**Revising the Decision**

I'm now consolidating the decision, incorporating all insights. Despite the recent purchase and 38-day cycle, indicating a "RISK YES" status, I'm recommending 1 unit. The recent order of 1 unit three days ago, alongside the low volume of orders makes me lean towards this recommendation, despite the technical risk. I've re-examined the 30-day rupture horizon and the 40-day rule to confirm the quantity.


**Revisiting Quantity Recommendation**

I'm now fully committed to the decision. Due to the 38-day cycle, the risk is yes. The recent, very small order and low volumes, coupled with the "mieux vaut trop que pas assez" rule, makes me recommend 1 unit. The most recent order dictates my decision.




</details>

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.33u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle d'environ 41 jours
- **Cycle médian (jours)**: 41
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-19 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La fréquence de commande est d'environ 41 jours. Bien que la dernière commande soit très récente (3 jours), la prochaine échéance est projetée dans 38 jours, ce qui se situe sous le seuil de risque de 40 jours. Conformément aux principes de précaution B2B, on propose de commander la quantité médiane de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 645 tokens
- **Output**: 2,049 tokens
- **Total**: 2,694 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Product's Data**

I'm analyzing the sales data for the [REB04] ReBEL chips. Currently, I'm focusing on the sales trends of the premium and bio thym/romarin 125g variant. I've noted a recent order on 2025-10-09, and am comparing this to earlier orders, specifically those from the start of September. This helps me in discerning patterns.


**Forecasting Order Timing**

I've calculated the mean and median intervals between orders for the [REB04] premium variant. Based on these calculations, I predict the next order around November 19th, approximately 38 days from now. The time since the last order is only 3 days. Since the estimated time until the next order is close to the risk threshold, I'll need to watch for significant deviations.


**Calculating the Risk Level**

I've just refined the risk assessment for the premium [REB04] variant. Because the predicted order date, November 19th, is only 38 days from today, the risk level is considered "YES" based on the provided criteria. This is counterintuitive given the recent order, so I'll review the implications.


**Evaluating the Recommendation**

I've reviewed the risk assessment and considered the recent order. While the data suggests a risk, it seems counterintuitive to reorder so soon after the last order. This makes me consider if the prompt's assumptions are valid here, and whether the lead time is long enough to warrant an order today, for a product with slow movement. However, the rule is to strictly follow instructions.


**Reassessing the Cycle**

I've re-examined the order cycle intervals, and the most recent order was very close to the current date. Even though the calculated risk is "YES" based on the 38-day window, the short time since the last order gives me pause. I'm focusing now on the baseline quantity, which is 1.33.


**Summarizing the Findings**

I'm now fully compiling the data and reasoning. The cycle is about 41 days, with a recent order. Although the time to the next anticipated order is within the 40-day risk window, I'll recommend the median quantity of 1 unit. All variables are calculated, and I've double checked the JSON output for accuracy.




</details>

</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 21 jours détecté le lundi
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La prochaine commande est prévue dans les 24h à 48h selon le cycle médian de 21 jours. Les quantités sont stables (1 ou 2 unités). On recommande 2 unités pour couvrir la demande imminente en se calquant sur le volume de la dernière commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 672 tokens
- **Output**: 1,257 tokens
- **Total**: 1,929 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking ReBEL Chip Sales**

I've been analyzing the sales data for the ReBEL chips, focusing on the paprika fumé flavor. The most recent data point I have is from October 12th, and before that, I noted two units sold on September 22nd. The prior sale was on September 1st.


**Predicting Chip Demand**

I'm zeroing in on the "paprika fumé" ReBEL chips. My calculations show a high likelihood of needing a new order soon, given the sales intervals. The last sale of two units was on September 22nd. I've now projected the next order for tomorrow. I need to make a decision about the order quantity. 


**Refining Order Quantity**

I'm now assessing the order quantity for the paprika fumé chips. Based on sales, and also sales intervals, the last order for two units on September 22nd. The median interval is 21 days, and the predicted next order is in one day. The analysis of past quantities alternates, so I will recommend two units.


**Evaluating Inventory Risk**

I've finalized my analysis of the paprika fumé ReBEL chips. Sales data reveals a consistent pattern, with a high confidence level. The next order is predicted for tomorrow, and my recommendation is two units. The average order interval is 22 days, and the most recent order was also for two units.




</details>

</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle régulier entre 21 et 45 jours, accélération récente à 21 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un historique de commande très stable de 2 unités par commande. L'intervalle le plus récent est de 21 jours. Étant donné que la dernière commande date du 2025-09-22, la prochaine est prévue pour le 2025-10-13, soit demain par rapport à la date du jour. Le risque de rupture est imminent, justifiant une commande de 2 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 645 tokens
- **Output**: 1,565 tokens
- **Total**: 2,210 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Recent Order Trends**

I'm currently tracking the order frequency of [REB01] ReBEL chips. It looks like the product has very infrequent sales, with only two units sold on two Mondays a month apart. The low volume and lack of consistent orders are concerning. Further investigation is needed to understand the demand.


**Projecting Order Schedules**

I've calculated the median cycle for the [REB01] ReBEL chips at roughly 33 days, with recent intervals of 21 and 45 days. Based on this, and the last order date of September 22nd, I anticipate the next order to fall between October 13th and October 25th. Since it's currently October 12th, the risk is 'Yes', indicating a near-term order is highly probable.


**Calculating Recommendation Parameters**

I've determined the next order date for [REB01] ReBEL chips is around October 13th, using the most recent interval, with a high confidence level due to the consistent ordering pattern of 2 units. The recommended quantity remains at 2 units. The analysis confirms a stable demand with no outliers or seasonality.


**Synthesizing Order Predictions**

I've determined that with the most recent interval being 21 days, the [REB01] ReBEL chip order should arrive by October 13th. Since it's October 12th, the risk of needing to replenish is clearly 'Yes'. The confidence in this prediction is high, supported by stable, consistent past orders of two units.




</details>

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:45:30: 1u
- 2025-08-11 09:21:12: 1u
- 2025-08-05 10:30:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:33:27: 2u
- 2024-06-20 06:56:28: 1u
- 2023-11-07 08:16:41: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 2u
- 2025-07-18 08:34:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 1u
- 2025-08-05 10:30:50: 1u
- 2025-07-18 08:34:46: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 2u
- 2025-07-18 08:34:46: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (16)

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
| [ORG04] ORGANICA crunchy fruit fraise 12g | 2 | Stock prédit: 1.9u (59j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.9u (26j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Stock prédit: 1.8u (21j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: 0.9u (12j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: 0.9u (14j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: 1.8u (22j restants) → prédit 2u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.7u (38j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 2 | Stock prédit: -0.7u (-7j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.5u (19j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.8u (59j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Stock prédit: -0.8u (-17j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -0.8u (-27j restants) → prédit 1u mais non commandé |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Stock prédit: 0.3u (45j restants) → prédit 1u mais non commandé |


---

## False Negatives (5)

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
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock suffisant: 1.0u (40j restants > seuil 30j) |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | En rupture (-16j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | En rupture (-7j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [RF003] REFIELD Maïs 500G  | 1 | En rupture (-37j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Stock suffisant: 0.9u (36j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-19T12:50:06.277Z*
