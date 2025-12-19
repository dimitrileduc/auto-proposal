# Rapport Backtest - Client C.F. GRELL NACHF. NATURKOST

## Contexte

- **Client** : C.F. GRELL NACHF. NATURKOST (ID: 3863)
- **Commande réelle** : S39705
- **Date commande** : 2025-10-13 14:04:36
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,657 input + 7,183 output = 10,840 total


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
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 32 | 16 | 16.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 32 | 48 | 16.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 32u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: 16u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel de 14 jours très régulier observé sur les derniers mois
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le rythme de commande est extrêmement stable à 14 jours d'intervalle sur la période récente (septembre et octobre). La prochaine commande est prévue pour le 22/10, soit dans 10 jours (risque de rupture identifié car < 40j). Concernant la quantité, on observe une tendance baissière sur les trois dernières livraisons (48, 32, 16), cependant la quantité de 32 unités correspond à la médiane historique et à la commande d'octobre N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,006 tokens
- **Output**: 2,166 tokens
- **Total**: 3,172 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product History**

I'm currently focused on the product's recent sales history. I'm noting the sales volumes recorded over the past few months. I see a decrease in sales over time, as the weeks pass.


**Predicting Stock Levels**

I'm now calculating the next expected order date, using a 14-day cycle derived from recent sales data. Considering the decreasing sales trend and the last order's quantity, a stockout risk assessment is crucial. Given the 10-day lead time to the next order and the current sales quantities, I have determined the risk of stockout is indeed YES.


**Evaluating Reorder Quantities**

I'm now determining the reorder quantity, focusing on a baseline and considering the decreasing sales trend. I'm leveraging the product's sales history, pinpointing 32 as the standard unit quantity based on historical data. Further, I've assessed the recent orders (48, 32, 16) and their frequency, and thus, I recommend an order of 32 units.


**Calculating Risk Assessment**

I've assessed the risk of a stockout. Considering the predicted next order date of October 22nd and the existing inventory levels, with a ten-day window before that date, the risk assessment is indeed confirmed to be YES.


**Recommending the Order**

I've determined a recommended reorder quantity of 32 units, based on the analysis. The 14-day cycle is evident in recent history, though sales quantities decreased (48, 32, 16), and the 32-unit quantity is historically common. Therefore, I'm confident in 32 for the next order.




</details>

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 48u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 40u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 16u (33.3%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-hebdomadaire très régulier le mercredi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement stable avec un intervalle de 14 jours (tous les mercredis). La prochaine commande est prévue pour le 2025-10-22, soit dans 10 jours (risque de rupture identifié). Bien que la quantité médiane récente soit de 40u et que l'on observe une tendance à la hausse par rapport à 2024, le volume historique standard le plus fréquent est de 32u. On privilégie cette quantité pour maintenir le rythme de livraison.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,009 tokens
- **Output**: 2,678 tokens
- **Total**: 3,687 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product History**

I'm currently tracking the sales history for the MF0044 product. Recent data shows 48 units sold on 2025-10-08, following a prior sale of 32 units on 2025-09-24. Further investigation is needed to determine the causes of the differences, comparing the current data to the other product.


**Calculating Order Predictions**

I've determined a 14-day cycle for MF0044 sales, consistently every two weeks. I've predicted the next order on 2025-10-22.  With today being 2025-10-12, and it being less than 40 days until the next order, I've flagged this as a 'YES' risk.


**Forecasting Demand Refinement**

Now, I'm examining the order quantities more closely. The recent data suggests an upward trend, with the latest order hitting 48 units, whereas in a historical comparison to last year the numbers seem to be lower. I'm focusing on the mode for predicting the next order: it's a toss-up between 32 and 48.


**Predicting Next Order Details**

I am now focusing on refining the predicted order quantity. After analysing the sales data of the last months, the median gives me a value of 40, but historical trends point to either 32 or 48. Given the slight upward trend, I'm weighing whether to select 32 or 48 units for the next replenishment. I will now look further into the most recent data.


**Determining Order Quantity**

I'm now assessing the most suitable order quantity, focusing on both recent data and historical patterns. While the recent median is 40, the historical data skews towards 32. Given the consistent 14-day cycle and recent order of 48 units, I'll lean towards recommending 32 as the baseline, but with a degree of uncertainty.


**Refining Quantity Recommendation**

I'm now prioritizing the recommendation and reviewing the complete data set. While the median order quantity suggests 40, the historical frequency favors 32 units, appearing much more often than 48 units. Given the recent increase in sales is still relatively new and the 14-day cycle remains, I'll recommend 32 units for this replenishment cycle.


**Concluding Quantity Assessment**

Now, I'm integrating all the data to finalize my recommendation. The cycle is 14 days, with the next order on 2025-10-22. Though the median is 40, 32 units appears most frequently historically. Comparing the data points from recent orders, and including the upward trend, I'm recommending 32, with a note on possible overstocking.




</details>

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel (14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande extrêmement régulier de 14 jours sur les trois dernières livraisons (mercredis). Avec une dernière commande le 08/10, la prochaine est prévue pour le 22/10, soit dans 10 jours par rapport à aujourd'hui. La quantité est systématiquement de 16 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,001 tokens
- **Output**: 1,108 tokens
- **Total**: 2,109 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the recent history of product [MF0048] MF Delikatess Mayonnaise, specifically the 250ml DE variant. The data from the last three months shows a couple of Wednesday entries, and I'm cross-referencing this with the current date to understand any production trends. I'm focusing on the units produced per entry.


**Forecasting Demand Patterns**

The analysis confirms a consistent bi-weekly production cycle for the 250ml DE mayonnaise variant, with a mode and median of 16 units per order. Based on the 14-day cycle, and the last order date of 2025-10-08, the next order is estimated for 2025-10-22.  With 10 days until the predicted order, the risk of stockout is deemed low.


**Synthesizing Findings & Action**

I've just finalized the analysis of [MF0048] MF Delikatess Mayonnaise, 250ml DE. The bi-weekly production cycle and consistent 16-unit orders are clear. Given the current date and the predicted order date, the stockout risk is low. Therefore, I'm recommending a baseline order quantity of 16 units.




</details>

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

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
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours) le mercredi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 64u

**🧠 Raisonnement LLM:**
Après un trou durant l'été, le client a établi un rythme régulier sur les deux dernières commandes : 16 unités déposées exactement à 14 jours d'intervalle (mercredi). La commande de 64u en juillet est considérée comme un outlier ou un stock initial. On prévoit la continuité de ce cycle de 16u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 641 tokens
- **Output**: 1,231 tokens
- **Total**: 1,872 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the production data for MF0062, specifically the "MF Tarti Betterave rouge" product. I've noted recent production runs on October 8th and September 24th, both with a 16u output. Further investigation of the July 1st production run is needed to establish a clear pattern.


**Forecasting Future Needs**

I'm now calculating the next potential order date for the "MF Tarti Betterave rouge" product, based on the established 14-day cycle. Using this, I predict an order on October 22nd. The short 10-day window until the next order, combined with the stable 16u trend, indicates a potential risk requiring further scrutiny.


**Evaluating Potential Risk**

I am now focused on the risk assessment for "MF Tarti Betterave rouge." With the predicted order date of October 22nd, only 10 days remain. Given the stable 16u trend in the last two orders, and the short window, the risk flag is triggered and requires immediate attention.


**Interpreting Analytical Results**

I've reviewed the output from the analysis, which confirms the bi-weekly cycle, with orders occurring on Wednesdays, and highlights the outlier from July. The model predicts the next order on October 22nd, maintaining a stable 16u trend. The confidence level is medium overall, though high for the established frequency and consistent quantity. I am now confident in moving to the next steps.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 48u
- 2025-07-14 07:23:44: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 48u
- 2024-08-23 06:50:23: 48u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 64u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-24 09:36:53: 64u
- 2024-05-13 07:07:14: 48u
- 2024-04-19 09:15:16: 64u
- 2024-03-22 09:26:53: 32u
- 2024-03-15 08:05:43: 32u

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 48u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 32u
- 2025-07-14 07:23:44: 48u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 16u
- 2024-08-23 06:50:23: 32u
- 2024-08-07 07:50:22: 48u
- 2024-07-19 07:16:19: 16u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-13 07:07:14: 32u
- 2024-04-19 09:15:16: 32u
- 2024-03-22 09:26:53: 32u
- 2024-03-15 08:05:43: 32u
- 2024-02-23 08:44:27: 32u

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-09-10 06:05:27: 16u
- 2025-07-14 07:23:44: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 16u
- 2024-09-23 07:03:10: 16u
- 2024-08-23 06:50:23: 16u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 16u
- 2024-06-14 08:44:06: 32u
- 2024-05-13 07:07:14: 16u
- 2024-03-22 09:26:53: 16u
- 2024-03-15 08:05:43: 16u
- 2024-02-23 08:44:27: 16u
- 2024-02-19 09:05:29: 16u
- 2024-01-26 13:59:24: 32u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-07-14 07:23:44: 64u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

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

*Rapport généré automatiquement le 2025-12-19T11:17:34.820Z*
