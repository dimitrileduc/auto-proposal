# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S39719
- **Date commande** : 2025-10-14 10:33:03
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 13,061 input + 41,143 output = 54,204 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 14 produits prédits, 10 corrects |
| **Rappel** | 66.7% | 15 produits réels, 10 détectés |
| **F1-Score** | 69.0% | Score équilibré global |

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
| **MAE** | 0.70 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [RISH04] RISH kombucha BIO - smash basil 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ❌ Non | 📊 Médiane |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycles irréguliers allant de 12 à 21 jours, avec une médiane de 17 jours.
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-09-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel de 17 jours est largement dépassé (33 jours depuis la dernière commande), ce qui indique un besoin imminent ou un retard de réapprovisionnement. On note une tendance à l'augmentation des volumes lors des dernières livraisons (1 -> 1 -> 2 -> 4). La quantité recommandée de 2 unités se base sur la moyenne pondérée pour sécuriser le stock tout en restant prudent face à la variabilité des données.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 670 tokens
- **Output**: 2,091 tokens
- **Total**: 2,761 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Product History**

I'm currently looking at the product's sales history. I've noted a few sales dates with corresponding unit quantities. I am also calculating the intervals between sales to get a sense of the product's velocity.


**Calculating Order Imminence**

I've just finished calculating the predicted next order date based on the median interval, which is 17 days. Considering the current date, the customer is already overdue. The "rupture horizon" risk is assessed as YES, indicating a high likelihood of an imminent order.


**Determining Order Quantity**

I'm now weighing the likely order quantity. Considering the trend of increasing orders (1, 1, 2, then 4 units), coupled with the need to prioritize recent orders, I'm leaning toward forecasting an order of 4 units, while noting the median of 1.5. This warrants some additional scrutiny.


**Predicting Next Actions**

I'm now assessing the order's imminence, confirming the customer's late on their cycle. The last order was on 2025-09-10. Given the 17-day cycle, the order was due on 2025-09-27. Considering the date is now 2025-10-13, the customer needs to order now. I'm prioritizing the most recent order of 4 units, but leaning toward recommending 2 units based on the average.


**Determining Final Recommendation**

Now, I'm putting it all together. The customer is overdue based on their 17-day cycle, indicating an immediate need. I'm recommending 2 units for the order, considering the upward trend in prior orders and the need to balance a conservative estimate with the recent order history.


**Assessing the Recommendation**

I'm now revisiting all the calculations. The customer's late, based on a 17-day cycle. Quantities show an increasing trend, and I've settled on recommending 2 units, which balances recent history with a conservative approach, while acknowledging a medium confidence level.




</details>

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.25u
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
- **Pattern temporel**: Cycle régulier avec une médiane de 17 jours
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-09-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel de commande est de 17 jours. La dernière commande datant du 10 septembre, soit 33 jours avant la date du jour, le client a dépassé son cycle habituel de réapprovisionnement mais reste dans la fenêtre d'analyse active (< 40 jours). Le risque de rupture est élevé car une commande est théoriquement déjà en retard. La quantité recommandée suit la médiane historique de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 670 tokens
- **Output**: 2,194 tokens
- **Total**: 2,864 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently looking at the sales data for RISH03 kombucha over the last few months. It's interesting to see the sporadic sales patterns, with only a couple of units sold in the recent past. The longer interval between sales is a key point to note, so I'm investigating potential explanations.


**Calculating Order Probability**

I've just finished the cycle analysis and am pondering the implications. The 33-day interval since the last order, exceeding the median cycle, makes me lean towards a "RISQUE OUI" scenario, according to the provided guidelines. The predicted order date has passed, and I'm further investigating.


**Interpreting Cycle Data**

My analysis indicates that the predicted order date for RISH03 kombucha was September 27th, and it's now October 13th. The 33-day interval since the last order clearly exceeds the 17-day median cycle. Since the calculation's threshold is under 40 days, the risk is high. Furthermore, the stable demand pattern of one unit per order reinforces this conclusion, so I recommend we proceed accordingly.


**Evaluating Customer Behavior**

I've just finalized the comprehensive analysis of the RISH03 kombucha data. The 33-day gap since the last order, exceeding the median cycle of 17 days, suggests that there's a good chance of an upcoming order within the next few days. The consistent demand for a single unit per order further strengthens this conclusion. The reasoning from the instructions is solid.


**Confirming Risk Assessment**

My analysis confirms the high-risk assessment. The 33-day gap since the last order clearly exceeds the 17-day median cycle, and the predicted order date has passed by 16 days. Quantities are stable, so a single unit is the recommendation. The model has been validated.


**Concluding Order Assessment**

I've completed the full analysis, focusing on RISH03 kombucha. The 33-day interval since the last order, exceeding the 17-day cycle, presents a high risk, and the stable demand of one unit per order confirms this. I've drafted the JSON output and verified its completeness, incorporating the finalized recommendations.




</details>

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière tous les 21 à 29 jours
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande de manière extrêmement stable (4 unités à chaque fois). Le cycle médian détecté est de 25 jours. La dernière commande date d'il y a 33 jours (10 septembre), ce qui signifie que l'on a dépassé la date théorique de réapprovisionnement (5 octobre). Il y a donc un risque élevé de rupture ou un besoin imminent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 645 tokens
- **Output**: 1,132 tokens
- **Total**: 1,777 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Sales Trends**

I'm currently looking into the sales data for ReBEL chips. It looks like the "piment citron 125g" variant saw a bump in demand last month. I'm focusing on the interval between July 22nd and the current date, to clarify if it is following a clear trend. I want to predict future sales, so I need a deeper understanding of this data.


**Evaluating Order Frequency**

I've been using the ReBEL chips data to look at the "piment citron 125g" variant and trying to determine a reordering frequency. Based on past orders, there's a roughly 25-day cycle. Since the last order was on September 10th and it is now October 13th, I've confirmed that the next order is overdue. There appears to be a high risk of rupture within 30 days.


**Confirming Reorder Timing**

I've re-examined the ReBEL chips "piment citron 125g" order data. Calculating from the last order on September 10th and using the approximate 25-day cycle, an order was due around October 5th. Since it's now October 13th, the reorder is overdue. The pattern indicates high confidence in a consistent 4-unit order, due immediately.




</details>

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.33u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier entre 17 et 33 jours (moyenne ~25 jours)
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande en moyenne tous les 25 jours, avec un dernier intervalle de 33 jours. La date théorique de réapprovisionnement (05/10) est déjà passée de 8 jours, ce qui indique un besoin immédiat. Le volume est très stable, oscillant entre 2 et 3 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 647 tokens
- **Output**: 1,440 tokens
- **Total**: 2,087 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently focused on the sales data for the NUT08 product, analyzing the quantity sold over time. I've calculated the intervals between sales dates. Now, I'm trying to identify any patterns or trends in the sales figures.


**Evaluating Recurrence Patterns**

I've just calculated the average sales cycle for NUT08, approximately 25 days, though it's irregular. Given the last order was on 2025-09-10, and today is 2025-10-13, the client is overdue. I'm now assessing the risk of a stockout, considering both the frequency and the quantities ordered.


**Determining Order Recommendations**

I've re-examined the date calculations, confirming the 33-day interval since the last order. My analysis points towards a roughly monthly cycle, but more recent data emphasizes the 33-day gap. Given the overdue status, and the stable order volume (2-3 units), I'll suggest a replenishment of 2 units.


**Revising Interval Calculations**

I'm now meticulously reviewing all date calculations and intervals. I've re-confirmed the 33-day interval since the latest order and the order frequency as roughly monthly. This suggests an urgent need for the customer to reorder. I'm focusing on validating the initial predictions, double-checking for errors.




</details>

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.5u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 33 jours
- **Cycle médian (jours)**: 33
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La prochaine commande est prévue selon le cycle historique de 33 jours précisément pour aujourd'hui (2025-10-13). Le risque de rupture est donc imminent. Bien que la tendance montre une légère baisse (3u puis 2u), le volume reste faible et une recommandation de 3u est privilégiée pour assurer la disponibilité sur ce nouveau produit.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 619 tokens
- **Output**: 1,093 tokens
- **Total**: 1,712 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Unit Sales Trends**

I am analyzing the sales figures for the NUT07 bar. I've noted the recorded unit sales on 2025-09-10 and 2025-08-08. Now, I'm working to discern trends, although the lack of N-1 data complicates this initial assessment. I'm exploring different ways to model the limited data.


**Assessing Demand and Trends**

Having pinpointed the order interval, I see a 33-day cycle. Today, 2025-10-13, aligns with the predicted next order. Given the recent sales of 2 and 3 units, the median is 2.5, suggesting either 2 or 3 units for the next order. However, with only two data points, the decreasing trend is weak. I will prioritize the last order of 2 units.


**Recommending Order Quantity**

I've calculated a baseline of 2.5 units based on past orders of the NUT07 bar. Considering today's date and a 33-day cycle, a new order is due. While a slight decrease in recent sales suggests 2 units, I'll recommend ordering 3 units. This conservative approach mitigates the risk of stock depletion, particularly given the limited data.




</details>

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
- **Pattern temporel**: Cycle régulier d'environ 25 jours
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un comportement d'achat très stable avec une quantité fixe de 2 unités. Le cycle médian est de 25 jours. La dernière commande datant d'il y a 33 jours (soit 8 jours après la date théorique de réapprovisionnement), une commande est imminente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 645 tokens
- **Output**: 1,295 tokens
- **Total**: 1,940 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Sales Figures**

I'm currently working on the [NUT06] NUTS & BERRIES bar. Analyzing the sales history, I have two data points: 2 units sold on 2025-09-10 and 2 units sold on 2025-08-20. The interval between these two sales is 21 days, which will be useful for projection. I am considering different forecasting models.


**Evaluating Order Risk**

I've determined a regular cycle of roughly 25 days, and the last order was on September 10th. Given that today is October 13th, the 33-day gap since the last order exceeds the median cycle. This presents a potential risk, aligning with the guidelines for risk assessment: since 33 days is <= 40 days, the risk is yes. I'm also recommending 2 units based on consistent historical orders.


**Assessing the Cycle's Relevance**

I'm now focusing on calculating the `days_until_next` field. Given that the predicted order date has passed, I'm verifying the logic behind its calculation in relation to the present date, and since the date has already passed, I'm verifying the best negative or zero interpretation for use. I am also working on JSON structure.


**Calculating Predicted Date Values**

I'm now determining how best to represent the `days_until_next` value in the JSON response, specifically when the predicted date has already passed. Initially, I calculated -8 days, showing the order is overdue. However, given the context, a value of 0 might also be suitable, signaling that the order is expected imminently. I will use -8. I am confident in the recommended quantity of 2 units.




</details>

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.25u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 17 jours (intervalles de 12, 17, 21 jours)
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-09-27|2025-10-13 (Imminent/En retard/Provisoire_Octobre_15-2025-10-13-17_jrs_après_sept_27_serais_autour_de_oct_14_le_cycle_suivant_est_ici_maintenant_oct_13.)-Soit une date estimée autour de 2025-09-27, mais étant au 2025-10-13 sans commande, le besoin est immédiat pour le stock de fin octobre. On peut mettre la date du jour : 2025-10-13. Si on prend la date théorique prédictive brute : 2025-09-27. On utilisera 2025-09-27 pour rester fidèle au calcul de cycle. Cela signifie que la commande est en retard de 16 jours par rapport au cycle médian habituel. Le besoin est urgent car le client commande normalement environ toutes les 2.5 semaines. On est à 4 semaines et demi sans commande. On peut prévoir la prochaine pour aujourd'hui : 2025-10-13. Donc days_until_next est 0 ou négatif. Pour être cohérent avec l'objectif de gestion de stock, nous dirons 0 jour de battement restant car prédiction échue. Predicted_next_date : 2025-09-27. Days_until_next : -16. (Mais ici on mettra 2025-10-13 car c'est la date de décision). 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian est de 17 jours. La dernière commande date de 33 jours (le 10 septembre pour aujourd'hui le 13 octobre), ce qui indique un risque de rupture imminent car l'intervalle habituel est largement dépassé. La quantité de 3 unités est recommandée car c'est la quantité la plus fréquente et la plus récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 672 tokens
- **Output**: 1,839 tokens
- **Total**: 2,511 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Volumes**

I'm currently tracking the production volumes of the NUT05 bar. Recent data shows a dip in August, with only 1 unit produced on the 20th. September saw a slight rebound to 3 units on the 10th. I'm focusing on identifying the cause of these fluctuations.


**Assessing Order Imminence**

\n\n

I've calculated the median cycle time at 17 days, with the last order on September 10th. This puts us past the predicted order date of September 27th. The 33 days since the last order indicates a potential risk, triggering the need to take action based on the "Si ≤40 jours → RISQUE OUI" rule.


**Predicting Order Details**

\n\n

My current focus is on the next order. Considering the cycle's consistency, the last order on September 10th, and the 33 days since, I'm leaning toward an imminent order. Based on historical data, I anticipate an order for either 2 or 3 units, with the latter being the more recent quantity. The "Si ≤40 jours → RISQUE OUI" rule clearly indicates a high risk.


**Finalizing Order Recommendations**

\n\n

My current analysis focuses on fine-tuning the order recommendation. Despite a small dataset, the patterns are quite clear: an order is overdue given the 17-day cycle. Considering the historical quantities, predominantly 2 and 3, I'm recommending an order for 3 units. The "RISQUE OUI" rule remains valid. My confidence is high on this being an imminent order and the risk of not having enough stock, if not ordering now.




</details>

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.75u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 17 jours (médiane)
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-09-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 17 jours. La dernière commande date du 10 septembre, soit 33 jours avant la date du jour. La prochaine commande est donc théoriquement en retard ou imminente (le délai de 33 jours dépasse largement le cycle habituel). Le risque de rupture à 30 jours est élevé. La quantité recommandée de 2 unités correspond au mode et à la dernière commande observée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 669 tokens
- **Output**: 1,387 tokens
- **Total**: 2,056 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Consumption Patterns**

I'm analyzing the sales data for the NUT01 energy bar. It appears we sold two units on September 10th and one unit on August 20th, with no recorded sales on August 8th. I'm focusing on the delta between these points. I'm calculating the weekly average, to identify potential trends.


**Assessing Inventory Risk**

I've calculated the median cycle for the NUT01 bar based on the provided sales history, which is about 17 days. Since the last order was on September 10th and today is October 13th, it's been 33 days. Therefore, a restock is indeed overdue, putting the product at a high risk.


**Calculating Further Projections**

I've refined the inventory risk assessment. The median cycle of 17 days has been reconfirmed. I've also calculated the predicted next order date as September 27th. Since today is October 13th, the predicted order date has passed, thus the order is overdue. Risk is categorized as "yes" due to the 33-day gap exceeding the expected cycle. Considering the stable demand, and no seasonality, I'm recommending a reorder for 2 units.


**Confirming Restock urgency**

The previous calculations have been reviewed. Considering the 33-day gap since the last order and the 17-day median cycle, reordering is imperative. Based on the consistent demand, I've confirmed a recommendation to restock two units, reflecting the most frequent order quantity. The confidence in this recommendation is now high.




</details>

</details>


<details>
<summary><strong>9. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Pattern temporel**: Commande cyclique toutes les 3 à 4 semaines (cycle de 25 jours)
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un comportement d'achat extrêmement stable avec 2 unités commandées systématiquement. L'intervalle médian entre les commandes est de 25 jours. La dernière commande datant d'il y a 33 jours (10 septembre), le client a dépassé son cycle habituel, ce qui indique un besoin immédiat de réapprovisionnement pour éviter la rupture.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 643 tokens
- **Output**: 1,285 tokens
- **Total**: 1,928 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I'm analyzing the sales history for the NUT02 energy bar. I've noted the quantity sold on several dates, and currently, I'm focusing on the sales figures from October 13th, 2025. It appears I'm missing some data points, and I need to fill in the gaps to understand the sales trends more accurately.


**Calculating Stock Risk Assessment**

I've moved on to the risk assessment for the NUT02 energy bar, considering that the October 5th predicted order date has been missed. The 33-day gap since the last order exceeds the 25-day median cycle. Given this, along with the consistent order history, the risk is rated as high.


**Determining Stock Replenishment**

I'm revisiting the data, refining my calculations, and focusing on the replenishment needs for the NUT02 bar. The predicted order date was October 5th, but it's now October 13th, so a new order is overdue. The baseline quantity of 2 units remains constant, and the risk assessment confirms the need for immediate action.


**Assessing Replenishment Needs**

I've just refined the assessment for the NUT02 bar. I'm focusing on the interval between orders and the current date to finalize the recommendation. My calculations now pinpoint the imminent need for 2 units, given the 33-day gap since the last order, confirming a high-risk situation. I'm confident in the stability of this analysis.




</details>

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 2u
- 2025-08-08 08:17:38: 1u
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 1u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 4u
- 2025-07-22 11:20:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 3u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**📊 Quantité Médiane (fallback)**: 2u
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (4)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | Stock prédit: 2.1u (17j restants) → prédit 6u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 3 | Stock prédit: 0.8u (10j restants) → prédit 3u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | Stock prédit: 0.8u (7j restants) → prédit 4u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -1.6u (-40j restants) → prédit 1u mais non commandé |


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
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | En rupture (-8j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | En rupture (-3j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | En rupture (-3j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [REB11] ReBEL chips premium & bio - truffes 125g | 4 | En rupture (-28j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | En rupture (-42j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T13:00:13.959Z*
