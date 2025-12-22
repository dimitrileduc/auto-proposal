# Rapport Backtest - Client Epicerie Uhoda Vennes

## Contexte

- **Client** : Epicerie Uhoda Vennes (ID: 17587)
- **Commande réelle** : S39573
- **Date commande** : 2025-10-06 09:26:46
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 48
- **Tokens**: 31,617 input + 88,390 output = 120,007 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 41.4% | 29 produits prédits, 12 corrects |
| **Rappel** | 70.6% | 17 produits réels, 12 détectés |
| **F1-Score** | 52.2% | Score équilibré global |

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
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 41.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 10.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle intermittent avec une médiane autour de 41 jours
- **Cycle médian (jours)**: 41
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-10-26 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle d'approvisionnement médian est de 41 jours. Avec une dernière commande effectuée le 15 septembre 2025, la prochaine échéance est prévue pour fin octobre. Étant donné que nous sommes le 5 octobre, l'échéance est dans 21 jours, ce qui entre dans la fenêtre de risque de 40 jours définie pour la Supply Chain B2B. La quantité constante de commande (médiane et mode à 2 unités) est préconisée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 849 tokens
- **Output**: 1,655 tokens
- **Total**: 2,504 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Data Points**

I'm currently focused on the sales history for the LV Tartinade Aubergine product. I've noted the recent sales data, specifically the unit sales for September and July of this year. My next step is to examine the historical sales data from the previous year, 2023, to establish a trend.


**Assessing Sales Intervals**

I've calculated the intervals between sales for the LV Tartinade Aubergine. The median interval between orders appears to be 41 days, excluding the large gap. The recent data points show sales separated by 60 days. I'm taking the lack of recent, frequent reordering into consideration.


**Projecting Order Timing**

I've calculated the projected next order date for the LV Tartinade Aubergine as October 26th, based on the median interval of 41 days, which falls in 21 days from today. Based on the past data, the next order should be for 2 units. I'm taking into account the stable trend and the lack of seasonality.


**Reviewing Data and Findings**

I've just finished analyzing the complete sales history for the LV Tartinade Aubergine product. I've re-examined the 2023-2025 data, calculated the intervals, and confirmed the median order cycle of 41 days. Moreover, the lack of seasonality and stable trend has been re-evaluated.




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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 30 jours sur les commandes récentes
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La fréquence de commande montre un cycle médian de 30 jours. Avec une dernière commande au 15 septembre, l'échéance théorique est fixée au 15 octobre, soit dans 10 jours, ce qui justifie un risque de rupture (horizon < 40j). La quantité recommandée se base sur la stabilité observée des dernières commandes (1u), malgré des volumes légèrement supérieurs en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 742 tokens
- **Output**: 1,490 tokens
- **Total**: 2,232 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Consumption Trends**

I'm currently looking into the sales data for LV Tartinade aux Truffes. Analyzing the recent history, I'm calculating the intervals between sales to determine consumption trends. The aim is to understand the frequency of purchases, which should inform future inventory decisions. I've noted a couple of recent sales points and am now working to interpret the implications.


**Evaluating Purchase Frequency**

I've just calculated the median interval between recent sales to be 30 days. Based on that, I've predicted the next order date and compared it to today's date. The analysis suggests a potential risk of stockout within the next 10 days, given the current pace of sales. I'm also assessing the historical purchase quantities to determine if demand has changed over time.


**Refining Stock Level Predictions**

I've just finished the analysis, and the data suggests a potential risk of stockout within ten days. The purchase frequency seems erratic, but the median interval is 30 days. The predicted next order is in mid-October. The quantity is stable at one unit. The confidence in this prediction is medium, given the limited sales data.


**Summarizing Inventory Analysis**

I'm now consolidating the sales data, confirming the median purchase cycle is indeed 30 days. The predicted next order date is October 15th, barely ten days away. Considering the current date of October 5th, and a consistent purchase quantity of one unit recently, the risk of stockout is high.




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
- **Pattern temporel**: Cycle régulier de 35 à 45 jours
- **Cycle médian (jours)**: 40
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-10-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement stable avec une médiane de 40 jours calculée sur plus d'un an d'historique. La dernière commande date du 15 septembre, ce qui place la prochaine commande théorique autour du 25 octobre. Compte tenu du délai de 20 jours à venir et de la régularité parfaite des quantités (quasi-systématiquement 2 unités), une commande de réapprovisionnement de 2 unités est préconisée pour anticiper le besoin de fin octobre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 877 tokens
- **Output**: 1,557 tokens
- **Total**: 2,434 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales History**

I'm currently reviewing the sales data for LV BIO Tartinade Paprika Chili. Recent history shows two units sold in September and two in August of 2025. I need to dig deeper into the N-1 data to understand the trends better.


**Calculating Order Intervals**

\n\n

I've calculated the median cycle time to be 40 days, based on the historical sales data of LV BIO Tartinade Paprika Chili. The intervals between orders have been analyzed from 2023 to present, yielding a range of order durations. Now, I'm ready to predict the next order date based on the calculated cycle.


**Evaluating Replenishment Risk**

\n\n

I've determined a 40-day replenishment cycle for LV BIO Tartinade Paprika Chili. With the last order on September 15th and a calculated next order date of October 25th, the risk assessment indicates a potential need for replenishment, given that today is October 5th. I've noted the consistent order quantity of 2 units.


**Formulating a Recommendation**

\n\n

I've determined a high confidence recommendation for a replenishment order of two units of LV BIO Tartinade Paprika Chili. The analysis of sales history reveals a stable trend with no significant outliers or seasonal influences. The predicted next order date is October 25th, indicating a high likelihood of demand within the next 20 days.




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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier avec une commande environ tous les 40 jours
- **Cycle médian (jours)**: 40
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-10-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique de commande ultra-stable : chaque commande depuis fin 2023 est de exactement 2 unités. Le cycle médian calculé sans les données manquantes est de 40 jours. Avec une dernière commande au 15 septembre, le besoin se manifestera aux alentours du 25 octobre. Étant dans la fenêtre des 30 jours (à 20 jours de l'échéance), une commande de 2 unités est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 823 tokens
- **Output**: 1,632 tokens
- **Total**: 2,455 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Order Trends**

My focus is on understanding the demand for LV129, specifically the LV Tartinade Carotte Gingembre. Recent data shows a small order on 2025-09-15. I'm now analyzing the order history to predict future requirements, looking for patterns and seasonal fluctuations. I'm also comparing this product to similar products.


**Projecting Future Requirements**

I'm now zeroing in on predicting the next order date for LV129. Considering a median cycle of 40 days, the last order on 2025-09-15 suggests a next order around 2025-10-25. However, the data shows a significant gap, implying a low-frequency demand, making the 40-day prediction tentative.


**Refining Risk Evaluation**

I'm now clarifying the "risk" assessment parameters. Based on the 40-day cycle and the current date, I've calculated a predicted order date of 2025-10-25.  The prompt's "RISQUE OUI" condition is triggered because the time until the next order (20 days) is within the median cycle length of 40 days. The quantity is predictably 2 units.


**Calculating the Command**

I've determined the "RISQUE OUI" condition is met. The predicted order date, October 25th, falls within the defined 30-day risk horizon from the current date (October 5th). My analysis indicates a stable demand, with a consistent order quantity of 2 units.




</details>

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.5u
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
- **Pattern temporel**: Cycle régulier toutes les 3 semaines environ
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La fréquence de commande est très régulière avec une médiane de 21 jours. La dernière commande datant du 15 septembre, la prochaine est prévue pour le 6 octobre (soit demain par rapport à la date actuelle). Le risque de rupture est donc immédiat. Bien que la médiane des quantités récentes soit de 1.5, l'historique N-1 affiche des volumes légèrement supérieurs (3u) et la dernière commande reçue était de 2u. Une commande de 2 unités est donc recommandée pour couvrir le besoin du cycle à venir.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 876 tokens
- **Output**: 1,324 tokens
- **Total**: 2,200 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Recent Orders**

\n\n

I'm currently focused on the order history for the LV Tartinade Tomato Basilico. I've noted a couple of recent orders: two units on September 15th, and a single unit on August 25th. The interval between these two orders is 21 days. I will continue to analyze the data to find any trends.


**Predicting the Next Order**

\n\n

I've calculated the predicted next order date for LV Tartinade Tomato Basilico to be tomorrow, October 6th. Based on a 21-day cycle, and the fact that the last order was 20 days ago, I assess a high-risk situation. The median recent quantity is 1.5 units, however, quantities fluctuate.


**Finalizing the Recommendation**

\n\n

I've refined the analysis and synthesized my findings. The product shows a clear 21-day cycle, with the next order predicted for tomorrow. Considering the risk, and the fact that 2 units were frequently ordered in the past, a recommended quantity of 2 units feels right. The confidence level is high.


**Reviewing Order History**

\n\n

I've just finished running through the data. Based on the 21-day cycle, an order is due any moment now. The median quantity is 1.5, however 2 units have been ordered many times. Considering risk, and that the next order is imminent, I will recommend two units. My confidence is very high.




</details>

</details>


<details>
<summary><strong>6. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle d'environ 60 jours
- **Cycle médian (jours)**: 60
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-11-14 (dans 40j)
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: Un intervalle unique de 60 jours identifié entre le jeudi et le lundi.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité avec seulement deux commandes. L'intervalle entre les commandes est de 60 jours. Au 5 octobre, nous sommes à exactement 40 jours de la prochaine commande prévue le 14 novembre, ce qui correspond au seuil limite de risque de rupture pour le réapprovisionnement B2B. La tendance des quantités passe de 1 à 2 unités, on retient donc 2 unités pour sécuriser le stock.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 615 tokens
- **Output**: 1,345 tokens
- **Total**: 1,960 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Item History**

I'm currently focused on the historical sales data for the RISH kombucha product. So far, I've noted the 2025-09-15 sale of two units, and a previous sale on 2025-07-17 for one unit. There's no immediately available data for the period before the mentioned sales. I will need to delve deeper for further details.


**Calculating Product Demand**

I've just finished calculating the predicted next order date as November 14th. This is based on a 60-day cycle, derived from the time between the last two sales. Comparing that with the current date, I've calculated the time until the next predicted order to be 40 days. Based on the 40-day threshold, my analysis indicates a "RISK YES." Then I turned to analyzing unit sales. I've noted a median of 1.5 units, but rounding up, I am recommending an order quantity of 2.


**Reviewing the Findings**

I've just finalized the summary of the analysis, confirming a "RISK YES" scenario with 40 days until the next predicted order date. I am recommending an order quantity of 2 units, considering the recent sales data and the calculated baseline. The entire result set is in a parseable JSON format.


**Evaluating Final Output**

I've meticulously checked the output, confirming it meets all requirements. The JSON is valid, properly formatted, and contains the relevant analyses. The reasoning is now also refined, accounting for the 40-day threshold and incorporating all pertinent data points.




</details>

</details>


<details>
<summary><strong>7. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle long d'environ 60 jours entre les commandes
- **Cycle médian (jours)**: 60
- **Dernière commande**: 2025-09-15
- **Prochaine prédite**: 2025-11-14 (dans 40j)
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: Commandes passées en milieu de mois (jeu./lun.)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec seulement deux points de données, le cycle moyen est estimé à 60 jours. La prochaine commande est prévue autour du 14 novembre (soit exactement 40 jours d'écart avec la date actuelle). Selon la règle de gestion de stock spécifiée (risque si <= 40 jours), une commande est déclenchée. On privilégie la quantité de la commande la plus récente (2u) par rapport à la première (1u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 616 tokens
- **Output**: 1,648 tokens
- **Total**: 2,264 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Stock Levels**

I'm assessing the risk of stockouts for RISH kombucha BIO - gingembre, product code RISH03. Sales data shows two units sold on 2025-09-15 and one unit on 2025-07-17. With this limited sales history and no N-1 data, a risk assessment based on a 30-day window is challenging.


**Determining Stockout Risk**

I've calculated the median interval between sales, finding it to be 60 days.  Predicting the next sale date, based on this, is November 14th.  Since the target date is October 5th, and the predicted next sale is 40 days away, the assessment indicates a "RISQUE OUI" (Yes, there is risk of stockout), despite the long cycle. I am now proceeding with a quantity analysis, given the risk assessment.


**Finalizing Quantity Recommendation**

I've weighed the sparse sales data, acknowledging both the long cycle and the small upward quantity trend. The baseline is 1.5, with an uptick to 2 in the most recent order. Considering the "RISQUE OUI" stockout assessment, and the need for a quantity greater than zero, I'll recommend ordering 2 units. The confidence level remains medium due to the limited historical data.


**Synthesizing Findings and Rationale**

I've reviewed the detailed analysis, compiling the key factors for the recommendation. The long cycle of 60 days, with a predicted next order on November 14th, poses a stockout risk within the target 30-day window, leading to a "RISQUE OUI." I'm recommending an order of 2 units, mirroring the most recent order, despite the limited historical data and the low confidence level of the prediction.




</details>

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Pattern temporel**: Cycle irrégulier avec une médiane d'environ 36 jours.
- **Cycle médian (jours)**: 36
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-09-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 36 jours. La dernière commande datant du 25 août (il y a 41 jours), le seuil critique pour un réapprovisionnement est atteint. Historiquement, la quantité de 2 unités est la plus fréquente (mode) et constitue la norme pour ce produit, indépendamment de la saisonnalité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 822 tokens
- **Output**: 1,771 tokens
- **Total**: 2,593 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently tracking the sales of the LV Tartinade Mangue curry, focusing on recent activity. The most recent purchase was on August 25th, with a single unit sold. Before that, there was a sale of two units on August 7th, showing an 18-day interval. I'm also looking back to the previous year, noting a sale of three units in August 2024.


**Predicting Inventory Needs**

My analysis indicates a potential stock-out risk for LV Tartinade Mangue curry. Based on past sales intervals, the predicted next order date of October 1st has already passed, while the product hasn't been reordered. Moreover, there's a trend of ordering every 30-45 days, and the last order was 41 days ago. I'm focusing on quantity calculations.


**Calculating Replenishment Quantity**

After determining a potential stock-out risk, I am now focused on the recommended order quantity. Historical data indicates a stable trend with a mode of two units. Considering the irregular but roughly monthly cycle, I'll recommend ordering two units, to align with the historical pattern.


**Determining Order Recommendations**

I'm now assessing the order recommendation's confidence level. Despite historical consistency, sparse 2025 sales data warrants a medium confidence level. The last order was 41 days ago, exceeding the 36-day median cycle. Therefore, I propose a quantity of two units.


**Evaluating the Order Urgency**

I am now reviewing the final assessment, incorporating a slightly updated predicted next order date of September 30th. Given that today is October 5th, I assess an immediate need, confirming the risk of stockout. The confidence in the replenishment quantity remains medium.




</details>

</details>


<details>
<summary><strong>9. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle variable avec accélération saisonnière en automne (33-50 jours)
- **Cycle médian (jours)**: 45
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-09-ish (entre le 2025-09-27 et 2025-10-14 selon saisonnalité N-1/N-2). On arrive à échéance : commande requise sous 30j. Proche de 40j de délai depuis la dernière commande, ce qui correspond à la médiane saisonnière (33-50j). Risque de rupture probable sous 30j car nous entrons dans la période de pic pour un produit au potiron (Automne). 2025-10-10 est une estimation réaliste. 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit est une tartinade de potiron, avec une saisonnalité marquée en automne. La dernière commande date d'il y a 41 jours (25 août). Historiquement, les intervalles en fin d'année se resserrent autour de 33-50 jours. Nous sommes donc dans la fenêtre critique de réapprovisionnement. En termes de quantité, le volume oscille entre 1 et 2 unités lors des périodes comparables (N-1 et N-2). On recommande 2 unités pour couvrir le pic saisonnier habituel d'octobre/novembre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 767 tokens
- **Output**: 1,633 tokens
- **Total**: 2,400 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Pumpkin Sales Data**

The initial data points are sparse. We have two recent sales: one unit sold on August 25th, and another on July 17th. Both are for the LV Tartinade Potiron. This limited scope calls for more comprehensive data to establish any meaningful trend analysis, particularly given the product's seasonal nature.


**Calculating Predicted Demand**

Now I'm focusing on the interval data. The median interval of 63 days seems less relevant given the seasonality. Considering we're in early October, the shorter intervals from the previous Autumns are more indicative. Sales from this time last year seem relevant. I should refine the prediction based on those trends.


**Forecasting Next Order Date**

I've just considered the recent elapsed time since the last order and the historical intervals. Given it's October, a key selling period, the prediction window is likely very close. Considering last year's sales, and the product's seasonality, the next order date is likely occurring now, and there is a high risk of rupture.


**Estimating Order Quantity**

I'm now factoring in the historical quantities. The median is 1.5 units, though 1 unit appears most often. However, considering we're in the peak pumpkin season, and based on past October orders, I'm leaning toward 2 units. There's medium confidence due to the limited data.




</details>

</details>


<details>
<summary><strong>10. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle irrégulier long, variant généralement entre 35 et 50 jours
- **Cycle médian (jours)**: 39
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'intervalle entre les deux dernières commandes était de 39 jours. Au 2025-10-05, cela fait 41 jours depuis la dernière commande, ce qui place le client dans la fenêtre critique de réapprovisionnement. La quantité habituelle est de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 741 tokens
- **Output**: 1,246 tokens
- **Total**: 1,987 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Trends**

I've been analyzing the recent sales data for the LV Tartinade Paprika Chili. There's a noticeable gap of 39 days between the last two recorded sales in July and August. This suggests a potential fluctuation in demand or distribution. I'm now cross-referencing this with other product data.


**Predicting Future Orders**

I'm now calculating the expected reorder time frame. Given the median gap in 2024 of roughly 50.5 days, and the latest interval of 39 days, I estimated the next order date to be around October 3rd, which has already passed. This leads me to believe an order is imminently due.


**Evaluating Order Timing**

I've just finalized the calculations for the LV Tartinade Paprika Chili. Based on recent and past order intervals, the predicted reorder date of October 3rd has passed, making an order highly probable. I'm now setting the baseline quantity to 1 unit with a medium confidence level.


**Finalizing the Recommendation**

I've checked the calculations and verified the JSON format, ensuring all strings are double-quoted. Based on the analysis, and the fact the predicted order date has passed, I'm confirming the recommendation for one unit of LV Tartinade Paprika Chili. The confidence level is medium given the irregular ordering cycle.




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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 44 jours et une moyenne de 51 jours.
- **Cycle médian (jours)**: 51
- **Dernière commande**: 2025-08-07
- **Prochaine prédite**: 2025-09-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La dernière commande date du 2025-08-07, soit il y a 59 jours. Si l'on se base sur l'historique N-1, le cycle entre les commandes varie entre 40 et 74 jours (médiane à 44 jours). Nous avons déjà dépassé la médiane et nous approchons de l'intervalle maximal observé. Le risque de rupture est donc imminent (sous 15 jours). La quantité recommandée de 2 unités correspond à la médiane et au mode historique des commandes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 742 tokens
- **Output**: 1,690 tokens
- **Total**: 2,432 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Sales Trends**

I'm currently focused on the sales data for LV Tartinade Olive Caper Tomato. Seeing a recent purchase of 2 units on 2025-08-07 has piqued my interest. My next step will be to dive deeper into the historical data to identify any recurring patterns. I need to understand if the recent purchase is an outlier or part of a growing trend.


**Predicting Future Orders**

I've crunched the numbers on the LV Tartinade Olive Caper Tomato sales. Considering the historical data, the median purchase interval is about 44 days, the average is ~52 days. Given a sale on August 7th, and that today is October 5th, it has been 59 days since the last order. This suggests a new order is overdue.


**Projecting Future Stock Needs**

Analyzing the LV Tartinade data, the 59-day gap since the last order concerns me. The median purchase interval is 44 days, and the average is around 52 days. I've predicted a next order around September 27th, and the product is overdue, with a risk of stockout.


**Forecasting Inventory Needs**

I've incorporated the historical purchase intervals and baseline quantity of two units into my model. Analyzing the data, I've confirmed that the LV Tartinade Olive Caper Tomato order is significantly overdue. Based on the 44-day median, it should have been ordered by September 20th. Given a maximum historical interval of 74 days, I'm recommending a reorder of two units immediately to avoid stockout.


**Recommending Immediate Action**

Based on my analysis, the LV Tartinade Olive Caper Tomato order is significantly overdue. Utilizing the 44-day median purchase interval, the product should have been reordered around September 20th. Given that the maximum historical interval is 74 days, and today is October 5th, I'm recommending an immediate reorder of two units to mitigate the risk of a stockout.




</details>

</details>


<details>
<summary><strong>12. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier à rotation très lente avec une inactivité prolongée (>1 an)
- **Cycle médian (jours)**: 116
- **Dernière commande**: 2024-08-05
- **Prochaine prédite**: 2025-10-19 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Bien que le produit n'ait pas été commandé depuis plus de 400 jours, l'historique de 2023 montre une activité spécifique en octobre et novembre. Suivant le principe de précaution B2B (mieux vaut trop que pas assez) et la détection d'une date anniversaire proche (19 octobre), une commande minimale de 1 unité est recommandée pour couvrir un éventuel besoin saisonnier, malgré la tendance incertaine.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 667 tokens
- **Output**: 2,336 tokens
- **Total**: 3,003 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Performance**

I'm currently focused on the sales data for LV Tartinade Lentilles Curry. The lack of recent orders, combined with a single, isolated sale from over a year ago, paints a concerning picture. My analysis suggests this product is not performing well, and further investigation is required to understand the root cause. I'll need to explore potential factors like market demand or inventory management issues.


**Evaluating Sales Cadence**

I'm now digging into the sales intervals. The median time between orders for the LV Tartinade Lentilles Curry is 116 days, and the average is 97. The last order was placed over a year ago. However, there's a possible seasonal trend in late 2023, with orders in October and November. This is something I'll need to monitor this month. The predictive model has already failed.


**Forecasting Future Demand**

The seasonal trend identified in the previous analysis is crucial. Given that October and November saw activity last year, the imminent arrival of October warrants close scrutiny. Considering the product's inactivity, I'm now leaning towards a conservative approach, recommending ordering either one or two units. The risk is real based on historical patterns.


**Assessing Order Implications**

My analysis now encompasses the period between orders and the potential impact of seasonality. The product's inactivity for over a year is a critical concern, but the historical sales in October and November of the prior year create a dilemma. While the median interval of 116 days is irrelevant, the imminent arrival of October necessitates a decision. A conservative approach is to place a single unit order, but given the observed pattern, I am considering ordering two.


**Determining Replenishment Strategy**

I've re-examined the data. While the product hasn't been ordered in over a year, last year's October/November sales hint at possible seasonal demand. Considering the B2B context and the risk of stockout, I'll order one unit to cover potential sales. Though, the low confidence is noted.


**Recommending Action Based on Dates**

Despite the product's dormancy, the looming October date, aligning with past seasonal sales, influences my decision. Considering the low quantities, B2B context, and the instructions, I'm recommending a single unit order to mitigate potential stockout risk, even with the low confidence in its effectiveness.


**Synthesizing Recommendations**

After thoroughly reviewing the order history and seasonality, I'm recommending ordering a single unit. While the product hasn't been ordered in over a year, the potential for a repeat of the October/November sales from the previous year, given the short time window, means a minimum order is warranted.




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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

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

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

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

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV139] LV Tartinade Paprika Chili 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:29:58: 1u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-05-16 07:09:48: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 1u
- 2024-01-04 15:45:16: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

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

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [LV137] LV Tartinade Lentilles Curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-04-11 06:31:38: 2u
- 2023-11-21 07:34:13: 1u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

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
| [LV136] LV Tartinade Betterave 190g | 2 | Stock prédit: 1.3u (37j restants) → prédit 2u mais non commandé |
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
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 2 | Stock prédit: -0.1u (-1j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.5u (-20j restants) → prédit 1u mais non commandé |


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
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | En rupture (-22j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | En rupture (-17j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T12:53:12.691Z*
