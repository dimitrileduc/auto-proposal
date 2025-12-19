# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S40296
- **Date commande** : 2025-11-12 14:19:04
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 63,420 input + 63,610 output = 127,030 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.8% | 26 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 70.0% | Score équilibré global |

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
| **MAE** | 163.21 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 69.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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

## True Positives (14)

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
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 62 | 31 | 31.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 50 | 25 | 25.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 100 | 50 | 50.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 120 | 80 | 40.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 868 | 868 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 1302 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 1302 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 1736 | 868 | 868.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 186 | 155 | 31.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 310 | 124 | 186.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 186 | 93 | 93.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 155 | 62 | 93.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 434u
- 📊 **Baseline calculée**: 434u
- 📊 **Médiane historique**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 434u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière toutes les 2 à 4 semaines avec un volume fixe de 434 unités.
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité remarquable avec une quantité récurrente de 434u (probablement un multiple logistique ou une palette). Le cycle médian entre les commandes récentes est de 18 jours (calculé sur les intervalles de 28 et 8 jours en 2025, corroboré par les intervalles de 28 et 14 jours en N-1). La prochaine commande est prévue autour du 25 novembre, soit dans l'horizon des 30 jours.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,560 tokens
- **Output**: 2,253 tokens
- **Total**: 4,813 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering the Anomalies**

I'm currently investigating the multi-entry occurrences. It looks like three entries were logged simultaneously, or nearly so, on November 7th. My focus is now on identifying the root cause of this data duplication and figuring out how to prevent future occurrences. I'll need to dig deeper.


**Analyzing the Order Patterns**

I've been analyzing the order frequency for the product, looking at the time intervals between orders. The shift from the expected four-week intervals to an eight-day interval is significant. I'm now comparing the 2025 data to the previous year's patterns to see if this is recurring, or an isolated event.


**Predicting Future Orders**

I'm now calculating the next order date for product PF3246. Based on the 2025 intervals, and median calculation, I'm predicting an order around November 25th. Given the proximity to the current date (November 11th), and a 30-day window, a "RISQUE = OUI" decision is warranted. I am also working on calculating an appropriate baseline, of 434 units.


**Evaluating Product PF3246**

Following the anomaly detection, I've now calculated the median order interval, which is 18 days. Based on the last order on November 7th and this interval, the next order is predicted around November 25th. Given the current date of November 11th, I'm recommending a "RISQUE = OUI" decision. I've also identified 434 units as the baseline.


**Determining Order Quantities**

I've been calculating the median cycle, which now stands at 21 days, and predicting the next order date as around November 25th. Since today is November 11th, I'm recommending a "RISQUE = OUI" decision. I'm finalizing the JSON structure, including confidence levels and quantity predictions. The baseline quantity remains 434.




</details>

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - LLM: 62u vs Médiane: 31u (Réel: 31u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 62u
- 📊 **Baseline calculée**: 62u
- 📊 **Médiane historique**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 31u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 62u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières avec un cycle moyen de 11 jours
- **Cycle médian (jours)**: 11
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-18 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les dernières commandes est de 11 jours (variations entre 8 et 15 jours). La prochaine commande est attendue autour du 18 novembre 2025, soit dans l'horizon des 30 jours. On observe un pattern strict de multiples de 31 unités (conditionnement carton). Bien que les premières commandes récentes étaient de 31u, la dernière a bondi à 124u (4 cartons), ce qui s'inscrit dans les volumes importants vus en N-1. On recommande une quantité intermédiaire de 62u (2 cartons) pour soutenir cette tendance à la hausse tout en évitant le surstockage après le pic de 124u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,544 tokens
- **Output**: 2,064 tokens
- **Total**: 4,608 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales Projections**

I'm analyzing the sales data for PF 3247 - LD FR TARTINADE BIO KIDS 18 0G. Recent orders include 124 units on 2025-11-07, and 31 units on both 2025-10-30 and 2025-10-15. I'll need to extrapolate these figures to forecast future demand, considering the 30-day window specified, ending on 2025-12-11.


**Calculating Order Intervals**

I've calculated the intervals between the recent orders: 15 days, and 8 days. Summing the same-day orders, particularly on 2025-11-07, reveals a bulk order of 124 units. Considering the median cycle, I predict the next order around 2025-11-18. Since we're tracking a 30-day window ending 2025-12-11, and given the order frequency, there's a definite risk of stockout.


**Refining Stockout Probability**

I've examined the order quantities and box size implications, recognizing the recurring 31-unit increments. The significant recent volume spike warrants further investigation. While the median suggests 31u, the 124u order alters the stockout assessment. The lack of November N-1 data limits seasonality comparisons, so I'm focusing on the current increasing trend, which suggests demand may rise further.


**Extrapolating Future Demand**

I've considered the historical data, including the N-1 data from Summer 2024. The consistent use of 31-unit increments, potentially representing box size, is now clearer. My forecast, based on the observed increasing trend, estimates the next order at 62 units, and I am predicting it by November 18th to mitigate any possible stockouts.


**Calculating Next Order Details**

I'm now assessing the order's implications. The client, based on the recent analysis, has a high likelihood of ordering. My prediction is for a 62-unit order around 2025-11-18, given the increasing trend. This would be in line with the established pattern of 31-unit increments, and my recommended quantity is 62 units.




</details>

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - LLM: 50u vs Médiane: 25u (Réel: 25u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 50u
- 📊 **Baseline calculée**: 41.6u
- 📊 **Médiane historique**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 25u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 50u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel régulier de 14 jours identifié en 2025 et confirmé par l'historique N-1
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-21 (dans 10j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: Les commandes tombent majoritairement le jeudi ou vendredi, cohérent avec la demande actuelle.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle extrêmement stable de 14 jours est observé sur deux ans. Le client commande systématiquement par multiples de 25u (cartons ou sous-colis). Bien que la base historique soit de 25u, on observe une accélération sur les dernières commandes (75u le 07/11, regroupement de 3 lignes). La prochaine commande est prévue mécaniquement autour du 21/11. On recommande 50u pour couvrir la tendance à la hausse tout en respectant le multiple logistique de 25u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,530 tokens
- **Output**: 2,240 tokens
- **Total**: 4,770 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Recent Orders**

I'm currently focused on the recent order history for product PF1690. Three orders of 25 units each on 2025-11-07 immediately jumped out. I am now trying to analyze this unusual spike in demand to understand if it is a real trend or an anomaly, given the target horizon of 30 days ending on 2025-12-11.


**Evaluating Order Intervals**

I've calculated a 14-day median cycle from historical data. This suggests the next order could be around 2025-11-21, well within the 30-day forecast window. Given the recent spike on 2025-11-07 and consistent order intervals, a stockout risk is flagged, and I am recommending immediate action.


**Calculating Replenishment Quantity**

After analyzing historical data, I see the client usually orders in multiples of 25 units. Considering the latest 75u order and the increasing trend, I'm leaning toward advising a 75u replenishment to avoid stockouts. I'm also factoring in the likelihood of similar demand as last year.


**Determining Replenishment Quantity**

My analysis is evolving. The client consistently orders in 25-unit increments, with recent activity showing an increase to 75 units on the latest order. Considering this jump and a slight upward trend, I am now leaning toward recommending a replenishment of 50 units, balancing sufficient stock with prudent inventory management.


**Recommending Order Quantity**

I've re-examined the data and confirmed a 14-day order cycle. Given the 75u order on 2025-11-07 and the consistent 25u increments, I'm recommending a 50u replenishment. This balances the recent volume increase with the need to avoid overstocking, with high confidence in the recommendation.




</details>

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 100u vs Médiane: 50u (Réel: 50u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 100u
- 📊 **Baseline calculée**: 137.5u
- 📊 **Médiane historique**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 50u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 100u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Accélération du cycle passant de 14j (N-1) à environ 8j récemment
- **Cycle médian (jours)**: 8
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 225u

**🧠 Raisonnement LLM:**
Le cycle de commande s'est resserré à 8 jours récemment contre 14 jours en N-1. La dernière commande groupée du 07/11 était exceptionnellement élevée (225u), marquant une forte tendance à la hausse par rapport aux pics de 100u de l'année précédente. Prochaine commande attendue sous 4 jours (15/11). On recommande 100u, aligné sur les pics historiques stables et respectant le multiple de commande habituel de 25u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,541 tokens
- **Output**: 2,772 tokens
- **Total**: 5,313 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Data**

I've been analyzing the product data for [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML. Initial observations focused on the sales figures from November 7th. I've noted two entries, and I'm currently reviewing these and the 30-day horizon to understand recent sales velocity.


**Evaluating Sales Velocity Shift**

I'm now comparing the sales data across the indicated timeframes. The interval analysis reveals a potential acceleration in sales. Comparing 2024 to 2025, the cycle appears to have shortened from a 14-day cadence to a 7-8 day period. My next step is to project sales based on this shift.


**Predicting Future Demand**

The recent data indicates a significantly increased volume, but I'm hesitant to make a broad projection just yet. Based on the 7-8 day cycle, the theoretical next order date is around November 15th. However, the larger order size on November 7th suggests some special factor is driving current demand. I'm taking the 225u cluster as an outlier.


**Calculating Order Quantities**

I'm now assessing the optimal order quantity. Considering the recent 225u order, I'm examining its composition – the individual orders within that batch. Given previous analysis, I'm leaning toward 100u for the next order to align with N-1 trends, while still accounting for the recent volume spike. This seems like a good middle ground.


**Recommending Order Quantity**

My analysis is complete. Based on the 8-day cycle and a 2025-11-07 order, I predict the next order around November 15th. Given the recent spike, I'm recommending 100 units for the next order, aligning with N-1 trends and acknowledging the potential B2B nature of recent orders. My confidence is medium due to the volume variance.


**Synthesizing Findings and Actions**

The analysis is now complete. The updated sales cycle is estimated at 8 days, suggesting an order around November 15th, aligning with the observed B2B behaviour. Considering the volume, the next order recommendation is 100 units. Though the recent volume spiked, I've opted to maintain a safe, conservative quantity.


**Summarizing Key Metrics**

After compiling the data, the order intervals are now clear. I've re-calculated to clarify the data clusters and adjusted confidence levels, leading to a recommendation for 100 units around November 15th, aligning with the 8-day cycle and previous order behavior. The volume spike on November 7th is a notable but considered outlier.




</details>

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 120u vs Médiane: 40u (Réel: 80u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 120u
- 📊 **Baseline calculée**: 100u
- 📊 **Médiane historique**: 40u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 40u (50.0%)
- 📉 **Erreur Médiane**: 40u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 120u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières par multiples de 40 unités, cycle récemment accéléré à 8 jours contre 27 jours en N-1
- **Cycle médian (jours)**: 8
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande semble s'être accéléré par rapport à l'année dernière (8 jours entre les deux dernières commandes vs ~27 jours en N-1). Les commandes sont systématiquement des multiples de 40 (probablement un conditionnement carton ou pack). La dernière commande totale étant passée de 80u (2x40) à 120u (3x40), et la date prédite (15/11) tombant bien dans l'horizon des 30 jours, on recommande une quantité généreuse de 120u pour couvrir l'accélération de la demande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,541 tokens
- **Output**: 2,499 tokens
- **Total**: 5,040 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Caesar Bio Vinaigrette**

I'm focused on the CB9006 LD FR VINAI CAESAR BIO PET 250ML product, currently. It's Bio Caesar Vinaigrette. The horizon is 30 days from 2025-11-11, so up to 2025-12-11. I just started the review process and plan to analyze recent history to look for patterns.


**Assessing Sales Intervals**

I'm now investigating the intervals between orders. The recent data shows an 8-day interval, a much shorter cycle than the median 27-day cycle observed last year. Further, I have identified events where orders were placed, and I will be looking to see what effect these had.


**Evaluating Quantity and Trends**

I am now focused on the quantities and order patterns. I observed multiples of 40u, and the recent trend suggests increasing volumes, from 80u to 120u. Comparing this with N-1 data, the seasonal influence is evident, with potential for orders ranging between 80u and 160u.


**Calculating a Recommendation**

I've quantified the findings and identified a potential order of 120u based on the observed trend and pack sizes. Although the recent cycle is shorter (8 days) than the historical median (27 days), I've determined that the next order is due within the 30-day window, with a predicted date of 2025-11-15, and I have a medium level of confidence in this prediction.


**Predicting Order Details**

I have now finalized the quantity and timing recommendation, after thoroughly reviewing the data. I've predicted an order of 120u, due around November 15, within the 30-day window. Although the cycle has shortened recently, I'm fairly confident, with high confidence in the frequent orders, and medium confidence in the chosen quantity.


**Refining the Recommendation**

I'm now refining the prediction based on the revised interval calculation, incorporating the N-1 data, and the recent 8-day cycle. Using the median interval of 20.5 days, the next order is estimated for November 28th. The recommendation remains 120u, with a medium confidence level.




</details>

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 868u vs Médiane: 434u (Réel: 868u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 868u
- 📊 **Baseline calculée**: 868u
- 📊 **Médiane historique**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 868u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier avec une médiane de 22 jours identifiée entre les clusters de commandes.
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-29 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle de réapprovisionnement de 22 jours. La dernière commande datant du 2025-11-07, la prochaine est prévue autour du 29 novembre, soit dans l'horizon des 30 jours. Les quantités sont systématiquement des multiples de 434u (probablement un conditionnement palette ou demi-palette). Bien que la dernière commande ait atteint 1736u (4x434), la quantité la plus fréquente par cycle (baseline B2B) est de 868u (2x434), observée de manière récurrente en N et N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,553 tokens
- **Output**: 2,559 tokens
- **Total**: 5,112 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking product consumption patterns**

I'm currently focused on the consumption patterns of LD FR TARTINAD BIO CAROTTE 20 0. Today's date is 2025-11-11, and I'm analyzing data up to 2025-12-11. Recent data reveals an interesting spike on 2025-11-07, with multiple order lines totaling 1736 units, appearing as three distinct orders.


**Comparing historical intervals**

\n\n

I've calculated the median interval between order clusters in the N-1 history, which is 22 days. This is based on clusters occurring between July and October of the previous year. Comparing this to the most recent cluster, I see an interval of 22 days, suggesting a pattern.


**Evaluating potential stock depletion**

\n\n

My analysis has narrowed to a potential stock depletion risk for LD FR TARTINAD BIO CAROTTE 20 0. I predicted an order around November 29th, based on a 22-day cycle. The observed quantities are multiples of 434, suggesting pallet-based orders. The most recent order of 1736 units is notably higher than historical averages, which means a possible high consumption rate, and I will assess the current inventory levels.


**Determining the next order**

\n\n

My analysis indicates a high-confidence prediction for the next order of LD FR TARTINAD BIO CAROTTE 20 0 on November 29th, with a quantity of 868 units. The cycle is 22 days, and order sizes are multiples of 434. The last observed order on November 7th showed an atypical peak, suggesting careful inventory checks are now crucial.


**Revising order predictions**

\n\n

My analysis has solidified around predicting an order of 868 units for LD FR TARTINAD BIO CAROTTE 20 0 on November 29th. The 22-day cycle from the last order, and consistent historical order sizes that are multiples of 434, support this conclusion. However, I am closely monitoring the recent increase in demand reflected by the peak order on November 7th and the implications for inventory levels.


**Concluding Order Predictions**

\n\n

My analysis indicates that the next order for LD FR TARTINAD BIO CAROTTE 20 0 is highly likely on November 29th, mirroring a 22-day cycle. The recommended quantity is 868 units, consistent with historical order patterns. I'm taking the observed consumption trends into account, but sticking to 868. My confidence in this prediction is high, despite the recent volume spikes.




</details>

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 1302u vs Médiane: 434u (Réel: 868u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1302u
- 📊 **Baseline calculée**: 1302u
- 📊 **Médiane historique**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1302u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 14 jours historiquement, avec un rapprochement récent à 8 jours.
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-21 (dans 10j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: Le client commande habituellement le jeudi ou vendredi, cohérent avec la date actuelle.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian détecté sur l'historique complet (N et N-1) est de 14 jours, plaçant la prochaine commande vers le 21 novembre. Un pattern de quantité très net se dégage : le client commande systématiquement par multiples de 434 unités (probablement une unité de conditionnement spécifique type palette ou couche). La moyenne des deux dernières commandes (868u et 1736u) donne 1302u, ce qui correspond exactement à 3 unités de 434u. On retient cette valeur cohérente avec la hausse de volume observée par rapport à N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,553 tokens
- **Output**: 1,863 tokens
- **Total**: 4,416 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Volumes**

I'm currently reviewing the production volumes for LD FR TARTINAD BIO POIVRON 20 0 (PF1694). Specifically, I've noted the significant spike on 2025-11-07, with 1736 units produced, a substantial increase compared to the 868 units on 2025-10-30. This warrants further investigation into the factors contributing to this surge.


**Predicting Order Frequency**

I'm now calculating the typical cycle time for this product, LD FR TARTINAD BIO POIVRON 20 0, using the historical data. The analysis of the N-1 data reveals a median cycle of 14 days, with more recent activity indicating an 8-day cycle. Based on this, I'm predicting the next order will be around November 21st, which falls within the defined 30-day window. This assessment flags a potential stockout risk.


**Calculating Stock Levels**

I'm now focusing on calculating the optimal order quantity. Considering the recent trend, I'm leaning toward a baseline of 1302 units, reflecting an average of recent high-volume orders. This aligns with the customer's ordering pattern, which tends to be multiples of 434. I'm also factoring in an expected cycle time of roughly 14 days, though the most recent cycle shortened to 8. This analysis will feed into stock level predictions.


**Evaluating Next Order Date**

I'm now assessing the next order date and quantity, with a high confidence level. Based on a 14-day cycle and recent data, the prediction is November 21st, 10 days from today. The recommended quantity is 1302 units, aligning with recent ordering patterns.




</details>

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 1302u vs Médiane: 434u (Réel: 868u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1302u
- 📊 **Baseline calculée**: 1302u
- 📊 **Médiane historique**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1302u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 21 à 22 jours identifié en N et N-1
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-29 (dans 18j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: Commandes historiquement placées le jeudi ou vendredi (dernière commande un vendredi)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est stable autour de 21-22 jours (médiane calculée sur N et N-1). La prochaine commande est prévue pour le 29 novembre 2025, soit dans l'horizon de 30 jours. Les quantités sont systématiquement des multiples de 434u (unité logistique probable). On observe une tendance à la hausse des volumes lors du dernier passage (2170u le 07/11 contre 868u le 16/10) ainsi qu'une saisonnalité forte sur octobre/novembre comparé à l'été. La quantité recommandée de 1302u correspond à la médiane des volumes par commande (soit 3x434u), ce qui constitue un stock de sécurité cohérent avec l'augmentation récente de la demande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,553 tokens
- **Output**: 4,110 tokens
- **Total**: 6,663 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Tomato Tartinade**

I'm focused on the LD FR TARTINADE BIO TOMATE 200 product. My goal is to understand the sales performance over the past few days. I observed multiple entries on 2025-11-07, and I'm calculating the total units sold on that day. My horizon is set to 30 days, so I'll be monitoring this product's progress until December 11th, 2025.


**Assessing Order Frequency**

I've calculated the interval between orders, focusing on the last few months. The most recent interval is 22 days, while the median of prior intervals is difficult to determine based on incomplete information. It seems like the 434u size is a recurring order. I need more historical data for a good model.


**Projecting Order Volume**

I'm focused on the LD FR TARTINADE BIO TOMATE 200 product's order pattern. Analyzing recent data, the total quantity for 2025-11-07 was 2170 units, likely consisting of multiples of a 434-unit base, hinting at pallet-level orders. I predict the next order around Nov 29th, focusing on a single order quantity.


**Forecasting Order Details**

I'm now calculating the typical order volume, focusing on recent data. The base unit appears to be 434, with multiples observed. Based on past orders, 1302 units (3 of the base unit) seems like a reasonable prediction, while considering the increasing trend. I'm confident for an order around November 29th.


**Determining Volume Confidence**

I'm calculating the confidence level in the predicted order details. Based on recent data and trends, I've assessed the median units per order, which is 1302. While the frequency appears consistent, there's some volatility in the quantity ordered, with orders often based on a 434-unit base. The next order is expected on November 29th.


**Analyzing Line Item Quantities**

I'm revisiting the order quantity prediction. Considering the instruction to avoid cumulating, I'll reassess single-line orders. Examining the data, 434 units appear frequently. However, the last order included 1302 and 434 units. Therefore, I will try 434 units for the next line item. The predicted date remains November 29th.


**Fine-Tuning Quantity Prediction**

The focus is now on the precise quantity prediction, adhering to the instruction of predicting a single order and avoiding any cumulation. Based on recent and historical data, I believe 434 units represents the most likely single-line order. I'm sticking with a 22-day cycle, predicting the next order will be around November 29th.


**Revisiting Baseline Adjustments**

I'm reassessing the 1302 unit baseline, considering the instruction to provide a single-line order. I'm focusing on the base unit of 434 and the fact that 1302 is often made of 3 units. The 434-unit base, due to the instruction of avoiding cumulation and looking at individual entries. I still predict the next order around November 29th.


**Refining Order Prediction**

I'm now fully focused on predicting the order quantity, given the constraint to predict a single order, not cumulating, and with a date of November 29th. Considering the data, especially the multiple 434-unit base, I am confident to predict 434 units for this next line item, aiming for a single order as asked.


**Reiterating Prediction Refinements**

I'm now fully focused on the quantity, keeping in mind the single-order constraint. After carefully re-examining the data, including both recent and historical information, and respecting the instructions, I'm confident in predicting a single order of 434 units for November 29th.




</details>

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 1736u vs Médiane: 868u (Réel: 868u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1736u
- 📊 **Baseline calculée**: 1736u
- 📊 **Médiane historique**: 868u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 868u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1736u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle historique régulier de 14j (jeudis), avec une accélération ponctuelle à 8j récemment.
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique N-1 montre un cycle très stable de 14 jours qui semble se maintenir en 2025 malgré un léger décalage de jour (vendredi). Les quantités sont systématiquement des multiples de 434u (probablement une unité logistique de type palette ou couche). On note une saisonnalité haussière en fin d'année : en N-1 le volume passait de 868u à 1302u, tandis que cette année il passe de 1302u à 2170u. La recommandation de 1736u correspond à la moyenne des deux dernières commandes (4 unités de 434u) pour accompagner cette croissance tout en respectant le multiple logistique du client.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,559 tokens
- **Output**: 2,781 tokens
- **Total**: 5,340 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Investigating Order Volumes**

I'm currently focused on the product [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G and recent sales. The 2025-11-07 data caught my eye, specifically the 868u, 868u, and 434u entries. The timestamps (12:44:50, 12:37:21, 12:37:00) suggest these were parts of a single, large order, which I'll need to confirm.


**Examining Cycle Patterns**

I'm now diving deeper into the temporal aspect. The 14-day cycle, evident in last year's data, seems reliable. However, the eight-day gap suggests a potential shift. I'll need to see if this trend continues or if it reverts to the established pattern. Predicting the next order date, November 21st, seems reasonable, but I remain cautious.


**Calculating Anticipated Volumes**

I'm now factoring in the order quantities. Examining N-1 data shows a clear pattern with multiples of 434u. It's safe to say this is the unit quantity. Recent orders demonstrate an increasing volume, suggesting the predicted volume could be even higher. The next cycle's quantity will likely be at least 1302u, if not more.


**Refining Cycle Estimates**

I'm now revisiting the cycle frequency. While a 14-day pattern is dominant, the recent 8-day interval warrants close attention. Given the last order on the 7th, the next is likely the 15th, or the 21st, but I remain conservative, factoring in potential shifts. I will need to consider the impact.


**Evaluating Predictive Confidence**

I'm now assessing my confidence in the predicted volume of 1736 units. The increasing trend and accelerated cycle pose some uncertainty. Considering the last order's magnitude and the shift from the typical 14-day cycle, I will adjust my confidence in the estimate.


**Calculating Recommendations**

I'm now calculating the recommended order quantity, leaning towards 1736 units, or four multiples of 434u. The increasing trend and recent acceleration in the cycle are crucial. I'm taking the seasonal demand into account, and predicting 1736 units given the most recent volumes.




</details>

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 186u vs Médiane: 93u (Réel: 155u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 186u
- 📊 **Baseline calculée**: 198.4u
- 📊 **Médiane historique**: 93u
- ✅ **Réel commandé**: 155u
- 📉 **Erreur LLM**: 31u (20.0%)
- 📉 **Erreur Médiane**: 62u (40.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 186u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières tous les 8 à 14 jours, accélération récente observée
- **Cycle médian (jours)**: 11
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-21 (dans 10j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: Les commandes tombent majoritairement le jeudi ou vendredi; la prochaine est attendue fin de semaine prochaine
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre l'historique N-1 (14j) et le rythme récent (8j) est de 11 jours, plaçant la prochaine commande autour du 21 novembre. L'analyse des quantités montre que le client commande systématiquement par multiples de 31 unités (probablement le conditionnement carton). La moyenne des sessions de commandes (cumul des lignes le même jour) se situe autour de 198u. On retient 186u (soit 6 cartons de 31u), quantité la plus fréquente dans l'historique stable N-1 et cohérente avec la dynamique actuelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,537 tokens
- **Output**: 2,660 tokens
- **Total**: 5,197 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently focused on the sales data for LD FR TARTINADE BIO ANANAS 20 0 (PF2973). Recent figures from 2025-11-07 show a total of 341 units sold on that day with multiple entry, and 124 units on 2025-10-30. I'm projecting these against a 30-day horizon.


**Forecasting Demand Patterns**

The initial analysis of PF2973's sales suggests a possible stockout risk within the next 30 days, given the observed purchase frequency. My current focus is on predicting the likely quantities needed in the next order cycles. I've noted the intervals and totals, and I'm comparing recent data with last year's sales to gauge potential demand. I will soon be analyzing order frequency, and then order quantities.


**Evaluating Stockout Probability**

I'm now assessing the stockout risk for PF2973 based on order frequency. Comparing the 8-day interval between recent orders to historical 14-day intervals suggests a heightened frequency. With today being 2025-11-11, and given the last order date of 2025-11-07, I project another order between 2025-11-15 and 2025-11-21, clearly within the 30-day horizon. This implies a significant stockout risk.


**Estimating Order Quantity**

I've moved on to estimating the quantity for the next order of PF2973. Considering the recent trend of increasing demand, and the consistent multiples of 31 units per order, I project the next order to be around 186 units. This seems like a good balance based on recurring order totals in recent data.


**Adjusting Quantity & Timing**

I'm now revising the order quantity and cycle predictions. Taking the 14-day median cycle (Oct 30 to Nov 7 is 8 days, but historical is 14 days), I estimate the next order around 2025-11-21, approximately. The revised quantity estimate remains at 186 units, a common order size. I will verify if this prediction has a high probability.


**Finalizing Order Recommendations**

I'm now consolidating the order predictions. The revised analysis, taking historical data into account, strongly indicates a high stockout probability within the 30-day window, given the shortened ordering cycles. I'm recommending an order of 186 units for the next order cycle, a quantity based on the recurring order size. The order is expected around 2025-11-21.




</details>

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 310u vs Médiane: 93u (Réel: 124u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 310u
- 📊 **Baseline calculée**: 263.5u
- 📊 **Médiane historique**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 186u (150.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 310u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Rythme hebdomadaire identifié récemment (tous les 8 jours) contre bimensuel en N-1
- **Cycle médian (jours)**: 8
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle s'est accéléré à 8 jours récemment. Toutes les commandes sont des multiples de 31 (31, 62, 93, 124, 310), suggérant un conditionnement par carton ou palette. La tendance est en forte hausse par rapport à l'année précédente (moyenne récente de 263u vs 155u en N-1). On prévoit une commande de 310 unités, correspondant à la dernière quantité commandée (10 multiples de 31), pour sécuriser le stock face à la croissance de la demande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,537 tokens
- **Output**: 1,798 tokens
- **Total**: 4,335 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Volumes**

I'm currently focused on the production numbers for the LD FR TARTINADE BIO POIS. I see recent entries on 2025-11-07, with multiple instances of 93u and 124u, adding up to a significant total volume of 310u for that day. A smaller volume of 217u was logged on 2025-10-30. I'm keen to understand the cause for the multiple entries on 2025-11-07.


**Projecting Future Demands**

I've moved on to predicting the next order date and assessing the "Risque de Rupture" for the LD FR TARTINADE BIO POIS. Using an 8-day cycle, I predict the next order will be on 2025-11-15, which triggers a "OUI" risk assessment, due to being within the 30-day window. The confidence in this prediction is high, supported by both recent and N-1 activity.


**Evaluating Order Quantities**

I'm now examining the order quantities, focusing on the LD FR TARTINADE BIO POIS. I see a clear pattern: all recent orders are multiples of 31. This strongly suggests a case size or packing unit of 31. The totals are trending upwards, from last year's maximum of 186u to 310u. Predicting the next order, I'll consider the recent 10-unit order and the current 8-day cycle.


**Determining Order Timing**

I'm now deep-diving into the order frequency. The recent 8-day cycle for LD FR TARTINADE BIO POIS seems very strong. With the next order predicted on 2025-11-15 and the current date being 2025-11-11, I've confirmed a "OUI" risk assessment. The high confidence stems from the solid recent activity, and N-1 data confirms the product's regular demand.


**Refining Quantity Calculations**

I'm now assessing both the trend and the base quantity for the LD FR TARTINADE BIO POIS, for which I've calculated an average volume of 263.5. Considering the "increasing" trend and the established pattern of multiples of 31, I'm leaning toward recommending the higher end of the range, at 310 units. I am also assessing a high confidence level due to clear multiples, and upward trends.




</details>

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 186u vs Médiane: 31u (Réel: 93u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 186u
- 📊 **Baseline calculée**: 124u
- 📊 **Médiane historique**: 31u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 93u (100.0%)
- 📉 **Erreur Médiane**: 62u (66.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 186u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier en N-1 (14j), avec une accélération récente observée à 8j
- **Cycle médian (jours)**: 11
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-18 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une commande par multiples de 31 unités (batch size probable). Le rythme s'accélère avec un intervalle réduit à 8 jours contre 14 historiquement. La quantité est en forte augmentation (passage de 62u à 186u), tendance confirmée par l'historique N-1 qui affiche des volumes élevés (jusqu'à 279u) sur cette période de fin d'année. On prévoit la prochaine commande vers le 18 novembre avec une quantité de 186u (6 cartons de 31) pour assurer la disponibilité face à la tendance haussière.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,545 tokens
- **Output**: 2,335 tokens
- **Total**: 4,880 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales Data**

I'm currently focused on the sales data for product [PF3317]. Recent figures show a spike in units sold on November 7th. Before that, there was a smaller bump on October 30th. I'm keen to understand the drivers behind these upticks.


**Calculating Ordering Frequency**

I've moved from simply identifying the spikes in sales to calculating the ordering frequency for product [PF3317]. Analyzing the intervals between high-volume sales days, I see an 8-day interval most recently, but a 14-day median from the previous year. This suggests the next significant order date could be either November 15th or November 21st, depending on whether the acceleration or long-term trends hold.


**Estimating Demand Volumes**

I'm now diving into the quantities sold for [PF3317] to refine my predictions. I've noted the consistent appearance of multiples of 31 units, hinting at a batch size.  Comparing recent volume (186u) to the previous year's figures (up to 279u), I expect the next order to be high. I'm estimating a baseline between 124u and 217u for the upcoming order.


**Refining Order Quantity**

I'm now zeroing in on the precise volume. Taking into account the batch size of 31 units and the most recent high-volume order of 186 units, which occurred on November 7th, I feel confident. Given the seasonality and trend data, I'm recommending an order for 186 units to cover the likely demand within the upcoming 14-day cycle.


**Projecting Future Orders**

I'm now integrating all data points to predict the next order. The 8-14 day cycle and increasing volume, along with a batch size of 31, points towards an order for 186 units. The predicted date is November 18th (give or take a few days). A medium confidence is assigned due to the recent short cycle, however, historical data supports the baseline prediction. Risk of stockout is identified.


**Synthesizing Findings**

I'm now integrating all data points to make the final recommendation. With the 14-day cycle and a strong upward trend, alongside the known batch size of 31 units, I'm maintaining 186 units. The predicted date is shifted to November 21st, which is ten days away. Despite medium confidence, historical data validates this. There remains a risk of stockout.




</details>

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - LLM: 155u vs Médiane: 31u (Réel: 62u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 155u
- 📊 **Baseline calculée**: 139.5u
- 📊 **Médiane historique**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 93u (150.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 155u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle court de 8 jours détecté entre les deux dernières sessions de commande
- **Cycle médian (jours)**: 8
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-15 (dans 4j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: Le client a commandé un jeudi puis un vendredi, indiquant une fréquence hebdomadaire serrée.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle de 8 jours a été identifié entre les sessions du 30/10 (62u) et du 07/11 (217u). Toutes les lignes de commande sont des multiples de 31 (31, 93, 217), ce qui indique une unité logistique de 31u. La tendance est fortement croissante. La prochaine commande est prévue sous 4 jours (15/11), bien dans l'horizon. La quantité recommandée de 155u correspond à 5 unités logistiques de 31u, se situant entre la moyenne (139.5u) et le dernier pic (217u) pour garantir la disponibilité face à la hausse de la demande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,210 tokens
- **Output**: 1,953 tokens
- **Total**: 4,163 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Data Points**

\n\n

I'm focused on the "LD FR TARTINADE BIO OIGNON" data. I've noted the product's details and shelf life information. Right now I am reviewing the dated entries, trying to establish patterns in sales volume. There are several entries for 31u and 93u, but I need to understand what 'u' represents to get a clearer picture of the data. I'm taking notes on the chronological order.


**Assessing Sales Cycles**

\n\n

My current focus is on the "PF3361" product. I've calculated an 8-day sales cycle based on the available data, although the limited history warrants caution. I'm now exploring how that cycle relates to the product's shelf life. The predicted next order date of 2025-11-15 is quite close, and I will now check the shelf life against this date. It appears that the customer's ordering pattern is focused around specific dates.


**Evaluating Stock Risk**

\n\n

My assessment of the "LD FR TARTINADE BIO OIGNON" is in full swing. Based on the 8-day cycle, a stock-out risk is confirmed for the next order. I'm focusing on the quantity prediction phase now. The customer seems to order in multiples of 31 units, with the most recent order totaling 217 units. I'm now evaluating a baseline quantity of around 140 units for the next order.


**Predicting the Next Order**

\n\n

My current focus is finalizing the order prediction. The customer's pattern indicates frequent, escalating orders of the "LD FR TARTINADE BIO OIGNON" product. I've noted the 8-day cycle, putting the next order date at 2025-11-15. Considering the rising order sizes (62u then 217u), I'm recommending a next order quantity of 155 units. This recommendation is based on a baseline quantity adjusted to the nearest multiple of 31.


**Concluding the Recommendation**

\n\n

My analysis is complete. Based on the 8-day cycle, a stock-out is confirmed if no action is taken. The customer's orders are increasing, so the "next" order date is 2025-11-15. Considering these factors, I recommend 155 units. The baseline, seasonality, and multiples have all been evaluated, leading to this precise, data-driven recommendation. The reasoning is clear, and the prediction is set.




</details>

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 40u
- 📊 **Baseline calculée**: 40u
- 📊 **Médiane historique**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 40u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière tous les 15 jours environ avec des quantités en multiples de 40u
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-11-07
- **Prochaine prédite**: 2025-11-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle d'approvisionnement présente une médiane stable de 15 jours (intervalles de 13, 15 et 22 jours). La dernière commande a eu lieu le 7 novembre 2025, soit il y a 4 jours. Selon le cycle médian, la prochaine commande est attendue aux alentours du 22 novembre, ce qui entre dans l'horizon de 30 jours. Bien qu'une commande double (80u) ait été observée le 7 novembre, l'historique long terme (N et N-1) montre que la commande type est de 40u. Conformément à la règle de ne prédire qu'une seule commande, on retient le multiple habituel de 40u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,542 tokens
- **Output**: 2,205 tokens
- **Total**: 4,747 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Product Volumes**

I'm currently working through the data on product [PF1698] and its recent history. I'm focusing on the dates and quantities, specifically the entries from 2025-11-07. I'm now verifying if I have all the instances captured correctly. Then, I plan to get a total of the product volume in that time frame.


**Projecting Future Orders**

I've analyzed the recent order history for [PF1698] and calculated the median interval between orders. Based on the pattern, I'm predicting the next order will be around November 22nd. Given the last order, there's a risk of product shortage. Further, I have to ensure the calculations are accurate.


**Forecasting Next Order Details**

I've reviewed the order history for [PF1698] and have now calculated that the expected order date is November 22nd. I've noted that the customer primarily orders in multiples of 40 units, but can also order 80 or 120 units on occasion. Given the pattern and the recent history, I will project the next order to be 40 units.


**Estimating Order Quantity**

I've taken the existing order history and assessed the patterns and the data to determine the correct quantity for the next order. Reviewing the product's recent order history, and noting that although the last order on 2025-11-07 was for 80 units, the frequency for the standard quantity of 40 units is a more reliable metric. I've concluded with a high degree of confidence that the next order should be for 40 units.


**Confirming Quantity Recommendation**

I'm now running a final validation. I've re-examined the order history and confirmed the 40-unit baseline. The 80-unit orders appear to be exceptions and part of the normal B2B operations. Given the 15-day cycle, the next order is projected around November 22nd. The predicted quantity remains at 40 units, with high confidence.


**Synthesizing Final Recommendations**

I've just finished the analysis, carefully checking all data points. I have confirmed a 15-day order cycle, with the last order on November 7th. Given that, and the client's preference for 40-unit orders, I am confident in recommending 40 units for the next order, expected around November 22nd. This analysis has high confidence.




</details>

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 434u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-02 06:43:53: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:31: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-08-09 05:43:38: 104u
- 2024-08-09 05:43:13: 104u
- 2024-08-09 05:42:53: 104u
- 2024-07-03 06:05:40: 434u
- 2024-07-03 06:04:58: 868u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 62u
- 2025-11-07 12:37:00: 31u
- 2025-10-30 08:14:34: 31u
- 2025-10-15 13:54:30: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-03 06:10:08: 186u
- 2024-07-03 06:09:51: 93u
- 2024-07-03 06:09:33: 93u
- 2024-07-03 06:05:19: 155u
- 2024-07-01 05:44:03: 124u
- 2024-07-01 05:43:42: 93u
- 2024-07-01 05:43:20: 62u
- 2024-06-28 11:30:23: 93u
- 2024-06-17 07:14:56: 31u
- 2024-06-17 07:14:47: 31u
- 2024-05-16 15:26:59: 31u
- 2024-05-16 15:22:16: 31u

**✅ Quantité LLM**: 62u (confidence: high)
**📊 Quantité Réelle**: 31u

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 25u
- 2025-11-07 12:37:21: 25u
- 2025-11-07 12:37:00: 25u
- 2025-10-30 08:14:34: 25u
- 2025-10-16 06:33:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:11:27: 25u
- 2024-09-05 07:12:20: 25u
- 2024-08-09 05:42:26: 25u
- 2024-08-08 06:02:21: 25u
- 2024-08-07 13:00:33: 25u

**✅ Quantité LLM**: 50u (confidence: high)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 50u
- 2025-11-07 12:37:21: 100u
- 2025-11-07 12:37:00: 75u
- 2025-10-30 08:14:34: 25u
- 2025-10-30 08:14:05: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 25u
- 2024-10-31 06:34:23: 25u
- 2024-10-31 06:34:04: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-17 12:47:26: 25u
- 2024-10-03 06:12:28: 25u
- 2024-10-03 06:12:09: 25u
- 2024-10-03 06:11:51: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u

**✅ Quantité LLM**: 100u (confidence: medium)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 40u
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-30 08:14:34: 40u
- 2025-10-30 08:13:39: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 40u
- 2024-10-17 12:48:04: 40u
- 2024-10-17 12:47:46: 40u
- 2024-10-17 12:47:26: 40u
- 2024-09-19 21:13:09: 40u
- 2024-09-19 21:12:09: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-09-05 07:11:43: 40u
- 2024-09-05 07:10:56: 40u
- 2024-08-09 05:43:38: 40u
- 2024-08-09 05:43:13: 40u

**✅ Quantité LLM**: 120u (confidence: medium)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:32:32: 434u
- 2025-10-15 13:54:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-30 14:45:09: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-08-09 05:43:13: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-07 13:00:03: 434u
- 2024-07-25 07:55:56: 434u
- 2024-07-25 07:55:13: 434u
- 2024-07-01 05:44:03: 434u

**✅ Quantité LLM**: 868u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-30 08:13:39: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 14:45:09: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-03 06:12:28: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-08-09 05:42:53: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:49: 434u

**✅ Quantité LLM**: 1302u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 1302u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:33:00: 434u
- 2025-10-16 06:32:32: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:46: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:38: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 434u

**✅ Quantité LLM**: 1302u (confidence: medium)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 868u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 868u
- 2025-10-30 08:14:05: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 434u
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:11:51: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u

**✅ Quantité LLM**: 1736u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 186u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 62u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 186u (confidence: high)
**📊 Quantité Réelle**: 155u

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 124u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 124u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 31u
- 2024-10-03 06:11:51: 31u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 310u (confidence: high)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 93u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 31u
- 2025-10-30 08:13:39: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 155u
- 2024-10-17 12:48:04: 62u
- 2024-10-03 06:12:28: 62u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 93u
- 2024-10-03 06:11:28: 62u
- 2024-09-19 21:13:09: 62u
- 2024-09-19 21:12:31: 62u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 31u
- 2024-09-05 07:12:20: 31u
- 2024-09-05 07:11:43: 31u

**✅ Quantité LLM**: 186u (confidence: medium)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 31u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:13:39: 31u
- 2025-10-30 08:13:10: 31u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 155u (confidence: medium)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-16 06:32:32: 40u
- 2025-10-01 14:23:59: 40u
- 2025-09-18 11:03:27: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:04: 40u
- 2024-10-17 12:48:25: 40u
- 2024-10-03 06:11:28: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-08-09 05:43:13: 40u
- 2024-08-09 05:42:26: 40u
- 2024-08-08 06:02:21: 40u
- 2024-07-25 07:58:01: 40u
- 2024-07-25 07:55:32: 40u
- 2024-07-25 07:55:13: 40u
- 2024-07-01 05:44:03: 40u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>




---

## False Positives (12)

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
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: 335.7u (10j restants) → prédit 434u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: 354.7u (13j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: 185.3u (8j restants) → prédit 248u mais non commandé |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 500 | Stock prédit: 537.4u (14j restants) → prédit 500u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 450 | Stock prédit: -579.6u (-15j restants) → prédit 450u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 320 | Stock prédit: -568.1u (-14j restants) → prédit 320u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 100 | Stock prédit: -274.7u (-22j restants) → prédit 100u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 250 | Stock prédit: -782.0u (-39j restants) → prédit 250u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 3500 | Stock prédit: -5125.0u (-42j restants) → prédit 3500u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 625 | Stock prédit: -2150.0u (-40j restants) → prédit 625u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 315 | Stock prédit: -1084.0u (-40j restants) → prédit 315u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 240 | Stock prédit: -611.0u (-40j restants) → prédit 240u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:56:16.094Z*
