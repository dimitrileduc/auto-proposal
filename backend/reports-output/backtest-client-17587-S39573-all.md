# Rapport Backtest - Client Epicerie Uhoda Vennes

## Contexte

- **Client** : Epicerie Uhoda Vennes (ID: 17587)
- **Commande réelle** : S39573
- **Date commande** : 2025-10-06 09:26:46
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 48
- **Tokens**: 41,026 input + 113,555 output = 154,581 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.3% | 34 produits prédits, 12 corrects |
| **Rappel** | 70.6% | 17 produits réels, 12 détectés |
| **F1-Score** | 47.1% | Score équilibré global |

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
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 45.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (12)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (12 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier oscillant entre 30 et 60 jours
- **Cycle médian (jours)**: 41
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-10-26 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 41 jours. Avec une dernière commande au 15 septembre, le réapprovisionnement est attendu pour la fin octobre (environ 21 jours à compter d'aujourd'hui), justifiant l'anticipation de commande. Les quantités historiques sont très stables, centrées sur une médiane de 2 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,045 tokens
- **Output**: 1,485 tokens
- **Total**: 2,530 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Aubergine Orders**

I'm currently focused on the ordering patterns of the LV Tartinade Aubergine. Recent data shows a purchase of 2 units on September 15th, 2025. This follows a previous order of 1 unit about two months prior. Looking back further, I'm noting the earlier sales history, including an order of 3 units in September 2024. I am comparing the data.


**Calculating Purchase Cycles**

Now, I'm analyzing the intervals between orders. I've calculated a median cycle of roughly 41 days. Using this, I predict the next order should be around October 26th, 2025. I am factoring in historical data to establish purchase timing patterns.


**Calculating Quantity Needs**

I've completed my analysis. The cycle remains irregular, between 30 and 60 days. The predicted date is approaching on October 26th, but the current date is October 5th, leaving only 21 days until the next potential order. Based on the historical demand, a quantity of 2 units is recommended.


**Finalizing Order Recommendation**

I've just finalized the analysis. The product's purchase cycle is irregular, but I've identified a median cycle. The next order is predicted for October 26th, but we're only 21 days from that date. Based on historical data, the recommended quantity remains at 2 units. I'm assigning a medium confidence level.




</details>

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
- **Pattern temporel**: Commande environ tous les 30 jours
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes récentes est de 30 jours. Avec une dernière commande au 15 septembre, la prochaine occurrence est prévue autour du 15 octobre, soit dans 10 jours (horizon < 30j). Bien que l'historique N-1 montre des commandes de 2u, les trois dernières commandes de 2025 sont systématiquement de 1u. Conformément à la règle des petites quantités, la médiane récente de 1u est priorisée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 938 tokens
- **Output**: 1,187 tokens
- **Total**: 2,125 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product History**

I'm currently focused on the sales history for LV Tartinade aux Truffes. Right now, I am crunching the numbers from 2025. It looks like sales are sporadic, with a few units sold in September and August. I need to figure out what drove the purchases and see if I can spot any patterns.


**Projecting Future Demand**

The model predicts the next order for the truffle spread around October 15th, just ten days away. Quantities in 2025 have consistently been one unit per order, so that’s the recommended baseline. Based on the rules and analysis, I am going to prioritize the most recent data.


**Finalizing Quantity Recommendation**

I'm now fully confident in the 1-unit recommendation. The recent sales, intervals, and a complete lack of seasonal spikes back it up. I've re-examined the rules, specifically "PETITES QUANTITÉS", and determined that the recent consistent 1u orders trump any slight variations from last year. I will now issue the final order recommendation.




</details>

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 39 jours
- **Cycle médian (jours)**: 39
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-10-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une régularité exceptionnelle avec un cycle médian de 39 jours et une quantité quasi-systématique de 2 unités. La prochaine commande est prévue autour du 24 octobre, soit dans 19 jours, ce qui justifie une commande pour couvrir l'horizon B2B.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,073 tokens
- **Output**: 1,339 tokens
- **Total**: 2,412 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product Performance**

I'm currently focused on the sales data for LV130. The latest update shows two units sold on 2025-09-15. Before that, two units were sold on 2025-08-07, providing an interval of 39 days. This trend requires further investigation.


**Projecting Future Sales**

I've calculated the median sales interval for LV130, landing at 39 days. Based on the last sale on 2025-09-15, I've projected the next sale for 2025-10-24. There are currently 19 days until the predicted sale, and the risk assessment indicates "RISQUE OUI".


**Calculating Recommended Order Size**

I'm now assessing the order quantity. The median quantity sold is consistently 2 units, and there are no seasonal variations to consider. My recommendation, therefore, is to order 2 units for the next cycle. My confidence is high, given the robust historical consistency.


**Evaluating The Sales Intervals**

I'm now diving into the historical sales intervals for LV130, focusing on both current and previous years. I've calculated a median interval of 39 days, and the risk assessment is "RISQUE OUI" given the approaching prediction. I've also re-confirmed the recommended order quantity of 2 units.




</details>

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier avec une médiane de 41 jours
- **Cycle médian (jours)**: 41
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-10-26 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement stable avec des commandes systématiques de 2 unités. Bien qu'une interruption de données soit visible entre fin 2024 et septembre 2025, la reprise en septembre 2025 confirme le volume historique de 2u. Avec un cycle médian détecté de 41 jours, la prochaine commande est attendue autour du 26 octobre, soit dans environ 21 jours, ce qui justifie une commande dans l'horizon B2B de 30 jours.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,019 tokens
- **Output**: 1,816 tokens
- **Total**: 2,835 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product History**

I'm currently reviewing the historical order data for LV129 LV Tartinade Carotte Gingembre. The most recent order was on September 15th, 2025, for two units. Before that, there were two orders in 2024, in August and September. I'll need to analyze the order frequency and volume over time.


**Calculating Order Frequency Gaps**

I've calculated the approximate wait times between orders for LV129 LV Tartinade Carotte Gingembre. Notable gaps include a significant one-year interval before the most recent order. Excluding that outlier, I'm now determining the median cycle time to assess typical order frequency. I'll need to examine if the data is consistent to provide accurate results.


**Projecting Future Orders**

I've calculated the median order cycle at 40.5 days, and based on this, predicted a next order date of October 25th, 2025. Given today's date of October 5th, there's a 20-day window until then, indicating a potential risk to supply. Despite the uncertainty, I'm confident in my analysis.


**Refining Order Cycle Calculation**

I've re-examined the order intervals for LV129 LV Tartinade Carotte Gingembre, recalculating the median order cycle at 40.5 days. This aligns with a predicted next order date of October 25th or 26th, 2025. Given today's date, there's a 20-21 day window, indicating a definite risk to supply.




</details>

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier de 21 jours environ
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-10-06 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes fréquentes le lundi; la date prédite tombe un lundi (06/10)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très stable avec une médiane de 21 jours. La dernière commande date d'il y a 20 jours, plaçant la prochaine commande pour demain (lundi 6 octobre). Concernant la quantité, nous observons une alternance entre 1 et 2 unités sur les quatre dernières commandes. Selon la règle applicable aux petites quantités (1-2u) en cas d'alternance, la valeur basse (1u) est privilégiée, d'autant que le volume en 2025 est inférieur à celui de 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,072 tokens
- **Output**: 2,054 tokens
- **Total**: 3,126 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Product Trends**

I've been calculating the sales interval for the LV Tartinade Tomato Basilico 190g. I've noted a recent sale of 2 units on September 15th, and a previous sale of 1 unit on August 25th. This gives me a 21-day sales interval. I'm now looking at historical data to determine any patterns.


**Projecting Order Volume**

I'm focusing on the LV Tartinade Tomato Basilico 190g and its sales. Based on a 21-day median cycle and the last order on September 15th, I projected the next order for October 6th. The current date is October 5th, so I've flagged an imminent order risk. I've also analyzed recent sales, noting alternating quantities and considering a prediction of 1 unit.


**Determining Optimal Quantity**

I'm now assessing the most suitable order quantity for the LV Tartinade Tomato Basilico 190g. Given the alternating recent sales of 1 and 2 units, and the established frequency pattern, I'm leaning toward recommending a single unit, despite a slightly higher volume in the previous year's data.


**Concluding Order Analysis**

I've finalized my analysis for the LV Tartinade Tomato Basilico 190g. Based on the 2025 data, a one-unit order is recommended due to the recent alternating sales pattern and consistent 21-day cycle, which indicates an imminent order. While past data showed slightly higher volumes, the current trend is stable. I'm now structuring the findings within the required JSON format.


**Formulating the JSON Output**

I'm now fully immersed in constructing the JSON output. I've meticulously reviewed all required fields, including frequency pattern, outliers (none), and seasonality (weak). Also, I ensured that the `day_cycle_analysis` (mostly Mondays) is included, and confirmed the one-day window to the next anticipated order. Everything is ready to be formalized.




</details>

</details>


<details>
<summary><strong>6. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle sporadique de 60 jours
- **Cycle médian (jours)**: 60
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-11-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité avec seulement deux points. L'intervalle observé est de 60 jours. La prochaine commande est prévue dans 40 jours, ce qui correspond à la fenêtre d'anticipation B2B (31-45 jours). La quantité recommandée s'aligne sur le dernier volume observé (2u) par mesure de précaution.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 812 tokens
- **Output**: 1,649 tokens
- **Total**: 2,461 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product History**

I'm currently analyzing the order history for the RISH03 kombucha product. I've noted past order quantities and dates. My focus now is on calculating the intervals between orders to understand purchase frequency. I'm especially interested in the time between the last two orders, and the last order's details.


**Calculating Order Risks**

I've just finished the calculations for the RISH03 product. I determined the interval between the two most recent orders, which is 60 days. This led me to predict a next order date of November 14th. Given the 40 days until that date, and the product's sporadic nature, I'm assessing the risk of a stockout. My analysis considers the need for B2B anticipation, since it is between 31 and 45 days. The situation seems fairly safe currently.


**Calculating New Risks**

I've just finished the calculations for the RISH kombucha product. The order interval is 60 days, and the predicted next order is November 14th, 40 days away. Because the product is sporadic, and because the last order was very recent, I'm now leaning towards a slight risk of a stockout. The increasing trend in order quantity is noted, which should be considered in further decisions.


**Assessing Stockout Probability**

I've just finished the analysis, and I'm now calculating the risk of a stockout. The product, RISH03, has a 60-day ordering cycle, with the next order predicted for November 14th, which is 40 days away. Because this fits the B2B anticipation window, I recommend ordering 2 units. While the history is limited to two orders, the trend suggests an increase in demand.


**Assessing the Recommendation**

I'm now revisiting the recommendation for RISH03. The 60-day cycle predicts a November 14th order, 40 days away. With the B2B window active, a risk of stockout is present, although the data set is small, and demand is trending up. The recommendation remains for 2 units based on the latest order.




</details>

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle régulier moyen de 37 jours, consommation stable à bas volume.
- **Cycle médian (jours)**: 37
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 37 jours. La dernière commande date d'il y a 41 jours (25 août), ce qui place le client en zone de réapprovisionnement imminent. Concernant la quantité, l'historique montre une alternance entre 1u et 2u, avec une tendance récente à la baisse (2u puis 1u). Conformément aux principes de gestion des petites quantités (1-2u), la priorité est donnée à la valeur basse de la médiane récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,018 tokens
- **Output**: 2,558 tokens
- **Total**: 3,576 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently focused on the sales data for the LV Tartinade Mangue Curry. Recent history shows a jump from 1 unit to 2 units in August. Looking back, I can see a previous instance of 3 units sold in August 2024. I'm noting the intervals between sales to identify potential trends.


**Forecasting Demand Patterns**

The LV Tartinade Mangue Curry sales data reveals a median interval of 36.5 days. With 41 days passed since the last order, we're slightly over that cycle. While the current timing suggests a potential restocking opportunity, I'm taking into account the history, specifically a 76-day gap in the past to refine the prediction model.


**Estimating Restock Quantity**

Now, I'm analyzing the order quantity trends for LV Tartinade Mangue Curry. Based on the 1-2-1-2 pattern observed, I'm leaning towards recommending 1 unit for the next order. The history indicates a preference for '2' units, yet the recent 2025 sequence of '2' then '1' suggests a conservative 1-unit order to align with the oscillating pattern.


**Predicting Refill Requirements**

I've just finished the analysis, and the data suggests the customer is overdue for a restock. The product's cycle is approximately 37 days, and 41 have passed since the last order. Despite the recent decrease, with a sales history that trends between 1 and 2 units, I'll recommend ordering 1 unit, aligning with the observed pattern.


**Evaluating Quantity Recommendation**

I'm now finalizing the quantity recommendation for LV Tartinade Mangue Curry, based on all of the recent analysis. Despite a historical preference for ordering two units, and even three units in August 2024, I'm recommending one unit. This decision is driven by the recent alternating pattern and the specific guidelines provided.


**Refining Recommendation Details**

I'm now putting the final touches on the recommendation. The customer is overdue based on an approximate 37-day cycle. My recent analysis of the pattern of 2 then 1 unit orders guides the decision. While the historical data favors 2 units, given the recent trend and specific guidelines for small quantities, I'm sticking with a 1-unit recommendation.


**Synthesizing Final Recommendation**

After a comprehensive review, I've confirmed my earlier analysis. The customer is overdue for a restock, with 41 days past the typical 37-day cycle. Given the recent history of 2 then 1 unit orders, and adhering to the guidelines for small quantities, I'm confidently recommending a 1-unit order.




</details>

</details>


<details>
<summary><strong>8. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Sporadique avec intervalles irréguliers (médiane ~50j)
- **Cycle médian (jours)**: 50
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La tartinade a un comportement sporadique. L'intervalle médian entre les commandes est d'environ 50 jours. La dernière commande datant du 2025-08-25, la prochaine commande est attendue mi-octobre, ce qui entre dans la fenêtre d'anticipation B2B. Bien que les volumes N-1 étaient de 2u à cette période, les commandes de 2025 sont stabilisées à 1u, d'où une recommandation prudente de 1u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 963 tokens
- **Output**: 1,622 tokens
- **Total**: 2,585 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Consumption Trends**

I'm focused on the consumption data for the LV Tartinade Potiron 190g product. I've noted the intervals between purchases. The recent purchase was on 2025-08-25, and I've also observed the earlier consumption patterns from the previous year, specifically how many units were bought and when.


**Evaluating Purchase Timing**

I've analyzed the purchase intervals and their variance, noting a median of roughly 63 days overall, but a recent interval of just 39 days. Since today is October 5th, and considering the 39-day interval, the product order was due around October 3rd. With a low ordering frequency, this is a product that may be currently overdue.


**Synthesizing Ordering Recommendations**

I've finalized my analysis. The product's purchase cycle is roughly 63 days, though recent intervals are shorter. Based on the median and the current date of October 5th, the order was due around October 3rd. Also, considering the most recent consumption, the recommended order quantity is 1 unit. I'm projecting a next order date of October 14th.


**Calculating Prediction Confidence**

I've evaluated the confidence levels for the quantity and timing predictions. The timing is high confidence, given the product's ordering window. The volume prediction also has high confidence, since recent purchases have consistently been for one unit. Based on the analysis, I have a clear recommendation.




</details>

</details>


<details>
<summary><strong>9. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle régulier tournant autour de 39 jours
- **Cycle médian (jours)**: 39
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une consommation régulière avec un cycle médian de 39 jours. La prochaine commande était statistiquement attendue autour du 3 octobre 2025. Nous sommes le 5 octobre, la commande est donc imminente. Les quantités historiques sont ultra-stables (majoritairement 1u), on maintient donc cette valeur.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 937 tokens
- **Output**: 1,373 tokens
- **Total**: 2,310 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Recent Sales Data**

I'm analyzing the sales data for LV Tartinade Paprika Chili, specifically the 380g variant. I've noted two recent sales events, one 39 days ago and another 39 days prior to that. This initial look suggests a potential pattern, and I intend to dig deeper. I'm looking for a clearer understanding of the sales frequency.


**Calculating Ordering Predictions**

I've moved from just observing sales to calculating a reorder date. Using the 2024 and 2025 sales, I determined the median interval between orders is 39 days. Based on that, and considering the most recent sale, I predicted the next order date and compared it to today's date. The order is overdue.


**Finalizing Order Recommendation**

I've rigorously analyzed the product's sales history, incorporating both recent data and the previous year's figures. The calculations confirm a 39-day median order cycle, with the predicted order date already passed. Considering the consistent small quantities, my final recommendation is for a single unit, with high confidence in the assessment.


**Calculating a Recommendation Again**

I've re-examined the data to fine-tune the recommendation for LV Tartinade Paprika Chili 380g. I've re-evaluated the risk, assessed recent quantities, and confirmed my earlier findings. I've considered all factors including seasonality, outliers, and trends, and the recommendation remains a single unit, with a high degree of certainty. The next predicted date is October 3rd, and the date has passed.




</details>

</details>


<details>
<summary><strong>10. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande unique détectée (sporadique)
- **Cycle médian (jours)**: 45
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-09 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Une seule commande de 1 unité enregistrée il y a 41 jours. En l'absence d'historique plus riche, on traite le produit comme sporadique. L'intervalle de 41 jours place la commande probable dans la fenêtre d'anticipation B2B (31-45 jours). Application de la règle des petites quantités (médiane à 1u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 794 tokens
- **Output**: 1,488 tokens
- **Total**: 2,282 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I am currently examining the sales data for MATE02, specifically its single order from August. The lack of a "N-1" history is concerning, as it makes trend analysis impossible. This sparse data makes any projection or meaningful insight extremely difficult. My next step will be to search for additional sales records.


**Interpreting Sparse Data**

My analysis of the MATE02 product continues. I've noted the single August order and calculated the 41 days since that event. The sporadic nature, with only one unit sold, is pushing me to consider it a slow-moving item. Given the "sporadic products" rule, with the 41-day lag, it seems low-risk. I am now pondering the implications of this one-off sale.


**Evaluating Unit Demand**

My focus has shifted to projecting demand based on the limited data. The single order of MATE02, 41 days ago, is the sole indicator. With a slow-moving item like this, the "sporadic products" rule applies. Given the 1 unit volume and the 41-day lag, the risk of rupture is low. Therefore, a prediction of 1 unit is made, aligning with historical patterns and small quantity guidelines.


**Predicting Future Demand**

The single data point for MATE02 continues to be the focus.  The model now incorporates a baseline of 1 unit, reflecting the past order.  With a 41-day lag, and considering it a slow-moving item, the prediction leans toward an order within the next few days. I'm assigning a low confidence level to the prediction. I will consider the 45-day threshold.


**Refining Prediction Accuracy**

I'm now refining the prediction logic for MATE02. Given the single order 41 days ago, I'm considering the potential for a 45-day cycle.  This puts the next predicted order around October 9th. The low confidence remains, but the understanding of the sporadic pattern is solidified.




</details>

</details>


<details>
<summary><strong>11. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande environ tous les 44 à 60 jours
- **Cycle médian (jours)**: 44
- **Dernière commande**: 2025-08-07
- **Prochaine prédite**: 2025-09-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian calculé sur l'historique est d'environ 44 jours (avec une plage allant jusqu'à 74 jours). La dernière commande datant du 2025-08-07, le délai actuel de 59 jours dépasse le cycle médian. Une commande est donc attendue de façon imminente. Les quantités historiques sont faibles et constantes (médiane de 2), sans aucune tendance à la hausse ou à la baisse.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 939 tokens
- **Output**: 1,882 tokens
- **Total**: 2,821 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Trends**

I'm currently reviewing the LV332 data, specifically the LV Tartinade. Recent figures show a slight bump in August, hitting 2 units. I'm digging into past sales, from 2023 and 2024 to understand the long-term patterns, seasonality, and overall performance.


**Calculating Order Frequency**

I've analyzed the historical order data for LV Tartinade, looking at the intervals between purchases. The median cycle is about 44 days, but the spread is significant, ranging from 40 to 74 days. Based on the predicted order date of September 20th and the current date being October 5th, I've determined that an order is likely overdue and there's a definite risk of stockout if we don't act now.


**Refining Quantity Estimates**

I'm now zeroing in on the ideal order quantity for the LV Tartinade. My calculations show a recent median of 2 units, mirroring the last order. Historical averages hover around 1.83 units. There's no distinct seasonality or clear trend. With all factors considered, I'm leaning toward recommending 2 units for the next order to be safe.


**Evaluating Order Timing**

I've examined the latest data on the LV Tartinade, noting the 44-day purchase cycle. Given the date, the next order is overdue with -15 days, which I'll represent as 0. I'm focusing on the risk of stockout due to this. There are no noticeable outliers or seasonal variations, and the trend remains stable.


**Revising Order Strategy**

I've re-examined the LV Tartinade data. The median cycle is still 44 days, and with 59 days since the last order, we're definitely behind schedule. Quantities remain steady, with a median of 2. I'm focused on mitigating the stockout risk due to the missed cycle, and the baseline quantity will remain at 2.




</details>

</details>


<details>
<summary><strong>12. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Produit sporadique avec des cycles longs et irréguliers (médiane ~90-130j)
- **Cycle médian (jours)**: 90
- **Dernière commande**: 2025-07-17
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Le produit est sporadique avec des intervalles de commande dépassant souvent 60 jours. La dernière commande date d'il y a 80 jours (inférieur au seuil de 90 jours pour l'analyse des produits sporadiques). Une commande semble imminente pour maintenir le stock de ce produit à faible rotation. La quantité est fixée à 1 unité conformément à l'historique récent et à la règle des petites quantités, ignorant l'unique commande de 3u de 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 884 tokens
- **Output**: 1,664 tokens
- **Total**: 2,548 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I've been examining the recent sales data for the LV BIO Tartinade Tomato Basil product. Specifically, I'm focusing on the last three months, noting a single unit sold on 2025-07-17. The older data from 2024-09-24, with three units sold, has also been considered. Now I'll start formulating conclusions.


**Evaluating Purchase Frequency**

I'm now delving into the product's purchase cycle. The intervals between orders are notably inconsistent, hinting at its sporadic nature. I'm focusing on the 2024 order pattern, considering the last order was roughly 80 days ago. The product is approaching a year since a previous order, suggesting a potential near-term demand. The median interval also confirms this.


**Projecting Future Demand**

I'm now forecasting the product's next order. Considering the irregular purchase pattern, with an 80-day gap since the last 1u order and a roughly 90-day cycle, I expect a need soon. The recent history, primarily showing 1u sales except for one instance of 3u, suggests a baseline quantity of 1u.


**Forecasting the Restock**

I've been calculating the precise timing for the next order. Considering the sporadic nature of this product, and the 80-day gap since the last replenishment, a new order seems imminent. I'm leaning toward a 1u quantity, considering the history of similar orders. The predicted date is roughly October 15th, making it due soon.


**Concluding Replenishment Strategy**

I've determined a replenishment is likely needed soon, given the 80-day interval since the last order of one unit. While the purchase cycle is irregular, a 1u quantity seems appropriate, based on recent sales and the product's sporadic nature. The predicted date for this order falls around October 15th.




</details>

</details>




### 📊 Données d'Input LLM (12 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 3u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 1u
- 2025-08-07 13:57:36: 1u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 2u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-07 13:57:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2023-11-21 07:34:13: 2u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 2u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 1u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:29:58: 1u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-05-16 07:09:48: 3u
- 2024-02-05 13:12:52: 1u
- 2023-11-21 07:34:13: 1u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV139] LV Tartinade Paprika Chili 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:29:58: 1u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-05-16 07:09:48: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 1u
- 2024-01-04 15:45:16: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 13:57:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 3u
- 2024-03-18 09:21:22: 2u
- 2024-01-04 15:45:16: 1u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-06-26 06:47:10: 1u
- 2024-05-16 07:09:48: 1u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (22)

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
| [LV136] LV Tartinade Betterave 190g | 1 | Stock prédit: 1.3u (37j restants) → prédit 1u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 2 | Stock prédit: 0.3u (9j restants) → prédit 2u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Stock prédit: 0.8u (13j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 1.0u (18j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 1.2u (26j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 1.2u (26j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.8u (12j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 0.6u (7j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: 0.6u (26j restants) → prédit 1u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock prédit: -0.3u (-8j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: -0.8u (-17j restants) → prédit 1u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Stock prédit: 0.4u (23j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 2 | Stock prédit: -0.1u (-1j restants) → prédit 2u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Stock prédit: -0.5u (-20j restants) → prédit 1u mais non commandé |


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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | En rupture (-37j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock suffisant: 1.3u (33j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-19T14:54:09.652Z*
