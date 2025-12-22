# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S39586
- **Date commande** : 2025-10-07 06:59:59
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 60
- **Tokens**: 55,227 input + 109,407 output = 164,634 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 17.0% | 47 produits prédits, 8 corrects |
| **Rappel** | 88.9% | 9 produits réels, 8 détectés |
| **F1-Score** | 28.6% | Score équilibré global |

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
| **MAE** | 1.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 61.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 68.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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

## True Positives (8)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 6u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 4.5u
- 📊 **Médiane historique**: 6u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 3u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de commande régulier d'environ 20-21 jours
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-19 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Le cycle médian détecté est de 20 jours, plaçant la prochaine commande autour du 19 octobre (soit dans 13 jours), ce qui justifie une commande prophylactique. Les volumes sont stables avec une médiane de 5 unités sur les commandes récentes (4, 10, 3, 6), tout comme l'historique N-1 qui oscillait entre 3 et 6 unités sur la même période.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,185 tokens
- **Output**: 1,489 tokens
- **Total**: 2,674 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Data**

I'm currently reviewing the production data for product [JF001] JF MAYONNAI TRUFFES, specifically the 250ML WECK variant. I've noted a recent production run of 4 units on 2025-09-29, which is just a week ago. Prior to that, there was a run of 10 units on 2025-09-09. I need to analyze the production trend over time.


**Calculating Potential Stockout Risks**

I've examined the production intervals, identifying a median of 20 days. Based on the last order on 2025-09-29, I project the next order for [JF001] JF MAYONNAI TRUFFES to be around 2025-10-19. Considering the current date, I'm concerned about a potential stockout within the next 30 days due to this relatively tight timeline. I've noted the outlier in production volume.


**Assessing Production Volume Trends**

I've just compared the current year's production with the N-1 data for [JF001] JF MAYONNAI TRUFFES. The volumes seem stable overall, discounting the 10u outlier, and no strong seasonal variance is present.  Based on my calculations using 2024-2025 data, I'm recommending a 5u order to maintain appropriate stock levels. I'm feeling confident in these findings.


**Determining Optimal Order Amount**

I've determined a recommended order quantity of 5 units for [JF001] JF MAYONNAI TRUFFES, based on the median production volume and considering the outlier. This quantity provides a safety buffer. I've also validated the core data: production cycles, potential stockout risk, and key dates.  My confidence is high.




</details>

</details>


<details>
<summary><strong>2. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle sporadique d'environ 38 jours
- **Cycle médian (jours)**: 38
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-11-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande stable mais de faible fréquence (tous les 38 jours environ). Avec une dernière commande au 29 septembre, la prochaine est estimée au 6 novembre, soit dans 31 jours. Selon les critères B2B, un risque à 31 jours avec un cycle identifié nécessite une anticipation. La quantité recommandée est de 1 unité, en accord avec l'historique récent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 813 tokens
- **Output**: 1,108 tokens
- **Total**: 1,921 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Data Points**

I'm currently looking at the product's sales history over the last three months, specifically JF SAUCE CHIPOTLE 250ML WECK. Initial data shows a recent sale of 1 unit a week ago. I'm focusing on identifying any trends or patterns to inform future projections, and I am noting the gaps between sales.


**Projecting Future Orders**

Considering the sporadic sales data for JF056, the next order is predicted for November 6th, 2025, exactly 31 days from today, based on a 38-day cycle. This puts it at high risk, justifying a "yes" on anticipation, with an order of 1 unit recommended. The data is stable, showing consistent orders of 1 unit.


**Calculating Order Anticipation**

I've just finalized the prediction. The next order is due on November 6th, 2025, exactly 31 days from today. Based on a 38-day cycle, I'm recommending a single unit, due to the high-risk, B2B anticipation, since the horizon is just over a month. The history consistently shows single-unit orders. My confidence is moderate given limited data.




</details>

</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.2u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle médian d'environ 31 jours avec une accélération ponctuelle récente (6 jours)
- **Cycle médian (jours)**: 31
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle historique médian est de 31 jours, plaçant la prochaine commande estimée vers le 30 octobre. Bien que l'échéance soit à plus de 20 jours, l'activité récente (2 commandes en septembre dont une de 2u) indique une dynamique de réapprovisionnement active. Conformément à la règle des petites quantités (1-2u), la médiane de 1u est privilégiée malgré le pic à 2u de la semaine dernière.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 995 tokens
- **Output**: 1,670 tokens
- **Total**: 2,665 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Production Frequency**

I'm analyzing the production frequency for MF0035. Observing the recent history, the intervals between production runs are fluctuating, with a couple of instances in September, but longer gaps in the preceding months. I need to determine the optimal production schedule to meet the target date.


**Assessing Production Intervals**

I've calculated the median interval between production runs, which is 31 days. Based on this, and the last production date, I've projected the next run for MF0035 to be October 30th. Considering the target date of October 6th, there may be a potential risk, as the product is scheduled for 24 days later. However, there has been a recent pattern change with closer dates.


**Revising Risk Assessment**

I've re-examined the risk based on the production history. The last two runs were six days apart, challenging the initial 31-day median. With a target date on October 6th, and next production predicted for October 30th (24 days after), I confirmed the risk threshold is met. However, the last production was only 7 days ago.


**Confirming Risk and Quantity**

I've re-evaluated the predicted date against the target, and am confident that there is a risk of a stockout. The most recent history indicates a slight increase to 2u. However, with the general trend of 1u orders, and the recent short interval of only six days, I'm recommending we order only 1 unit of MF0035 to meet the target.




</details>

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières toutes les 2 à 3 semaines (alternance 1-2 unités)
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-09-23
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de réapprovisionnement stable d'environ 20 jours. La prochaine commande est estimée autour du 13 octobre, soit dans l'horizon de 30 jours (risque de rupture identifié). Sur les volumes de 1-2 unités, la règle de l'alternance 1-2-1-2 est appliquée, privilégiant la valeur basse de 1 unité pour la prochaine commande afin de rester prudent sur ce petit volume.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,072 tokens
- **Output**: 1,386 tokens
- **Total**: 2,458 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Delivery Cadence**

I'm currently working on the delivery cadence for MF0029, the MF Tarti Datte chili. I see a recent order of 2 units on September 23rd, following a previous order of 1 unit on August 11th. I'm calculating the interval between these two, to predict the pattern.


**Projecting Future Stock Levels**

\n\n

I've crunched the numbers, and the recent delivery intervals for the MF0029 chili are quite variable, but the median is about 20 days. Given the last order on September 23rd, I'm predicting the next order around October 13th. With today being October 6th, that gives us about 7 days. There's a risk of rupture. Regarding quantity, it looks like approximately 1.5 units will be needed.


**Finalizing Chili Projections**

\n\n

I've confirmed the delivery frequency is roughly 20 days, putting the next order around October 13th, a mere 7 days from now, posing a rupture risk. Considering the alternating pattern of 1 and 2 units, with today's date and the recent history, I'm recommending a conservative order of 1 unit. Confidence is very high given the stable trend.


**Evaluating Next Order Quantities**

\n\n

I've examined the historical data, specifically the alternating 1-2 unit pattern. Considering the stable 20-day interval and the upcoming order on or around October 13th, I'm recommending a single unit, as the recent sequence is indeed, 1-2-1-2. The confidence in this prediction remains very high, given the recurring cycle.




</details>

</details>


<details>
<summary><strong>5. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.6u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 11 à 21 jours (médiane 14,5 jours)
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Les commandes sont principalement effectuées le lundi ou mardi ; la commande est actuellement en retard de cycle.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel de 15 jours est dépassé depuis le 24 septembre (27 jours depuis la dernière commande). Une commande est imminente. Les quantités sont stables entre 2 et 3 unités. La médiane de 3 unités est retenue pour couvrir le besoin immédiat.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 894 tokens
- **Output**: 1,604 tokens
- **Total**: 2,498 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Egg Mayonnaise Orders**

I'm currently reviewing the order history for JF057, the egg mayonnaise product. I've noted the intervals between orders, specifically looking at the 720ML WECK size. This helps me understand the purchasing patterns, including the dates and quantities involved. I am searching for trends.


**Forecasting Demand Imminence**

I've calculated the median and mean order cycles, both around 14 days. Since the last order was on September 9th, and today is October 6th, the 27-day gap suggests a high risk of an overdue order, confirming the customer's need. I am adjusting for potential deviations in order quantities.


**Evaluating Order Quantity Dynamics**

I'm now focusing on the quantity forecasting. Considering the client's past orders for the 720ML WECK size, the recent pattern alternates between 2 and 3 units. Based on the rules, the median quantity of the last 5 orders is 3, making it the most sensible prediction for the next order quantity. I have confirmed that the client is late.


**Predicting Quantity and Date**

I've examined the order history and calculated a median cycle of 14.5 days, predicting an order around September 24th, which is now overdue by 12 days. The client's past orders fluctuate between 2 and 3 units, and the median quantity is 3, making it the most probable quantity for the next order.




</details>

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier toutes les 2 à 3 semaines (médiane 18 jours)
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel de 18 jours est dépassé (27 jours depuis la dernière commande), rendant le risque de rupture certain. Bien que la médiane soit de 1.5u, les deux dernières commandes sont à 1u, marquant une baisse par rapport au début d'été. Suivant la règle des petites quantités, on privilégie la valeur basse de la tendance récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 964 tokens
- **Output**: 1,444 tokens
- **Total**: 2,408 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering JF031 Trends**

I'm currently analyzing the sales data for JF031, focusing on recent purchase history. I've noted a consistent pattern in 2025, revealing a fluctuating demand with sales between 1 and 2 units. The intervals between purchases also seem to vary, with an observed range between 17 and 21 days.


**Evaluating Inventory Needs**

\n\n

I'm now deep-diving into the JF031 data. Given today's date, and the predicted order date of September 27th, I see a high risk of stockout. The last order was 27 days ago. Also, considering past recent purchase quantities and trends, I estimate only 1 unit is needed for this cycle, but the urgency is undeniable.


**Confirming Immediate Action Required**

\n\n

My analysis of the JF031 data indicates an urgent need. Today's date is well past the predicted order date, and the product is overdue. Recent history points to a consistent cycle, and a decreasing trend in quantities, suggesting the need to order 1 unit immediately, with a high degree of confidence.




</details>

</details>


<details>
<summary><strong>7. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Pattern temporel**: Cycle irrégulier de type B2B avec une médiane de 33 jours entre les commandes
- **Cycle médian (jours)**: 33
- **Dernière commande**: 2025-08-22
- **Prochaine prédite**: 2025-09-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le cycle médian détecté est d'environ 33 jours. La dernière commande date d'il y a 45 jours (22 août 2025), ce qui signifie que le réapprovisionnement est en retard par rapport au cycle habituel. Les quantités sont historiquement faibles (majoritairement 1u ou 2u). En suivant la règle des petites quantités et l'alternance récente (2u puis 1u), une commande de 1 unité est préconisée pour couvrir le besoin immédiat sans sur-stockage.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 970 tokens
- **Output**: 2,213 tokens
- **Total**: 3,183 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Sales Trends**

I'm currently working on analyzing the sales data for TVF008. I've just finished reviewing the sales history for the product. I'm focusing on the period between July and August of 2025, and have logged the quantities sold in each of those months. My next step is to calculate the sales interval.


**Predicting Future Order Timing**

I've determined the likely date of the next order, using the interval analysis to arrive at September 26th. Given the typical cycle and the current date of October 6th, I'm now assessing the risk of a potential stockout or urgent requirement. I'm also comparing sales quantities between the recent and prior years.


**Refining Quantity Recommendation**

I've just finalized the recommendation for the quantity to order, settling on 1 unit, given the low and sporadic sales volume of TVF008. While the predicted order date passed ten days ago, I'm considering the potential impact of the time lag. Although the order is overdue, I'm accounting for the irregular sales and the need to avoid overstocking.


**Assessing Overdue Status**

I'm now zeroing in on the overdue status, given the current date and estimated order cycle. The predicted order date was September 26th, but it's now October 6th, confirming an overdue situation. I'm focusing on the risk assessment of a potential stockout due to the delay, and I've noted a slight volume decrease in the recent history.


**Concluding Order Recommendations**

I've re-evaluated the order timing, now basing it on a 33-day cycle, indicating the order was due around September 24th, confirmed by being 12 days late. Despite a slight change in the estimated interval, the 1u quantity recommendation holds, considering the sporadic demand patterns and the potential risk of stockout due to the overdue status. I'm now certain about the order.




</details>

</details>


<details>
<summary><strong>8. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Pattern temporel**: Sporadique avec un cycle médian d'environ 70-90 jours
- **Cycle médian (jours)**: 79
- **Dernière commande**: 2025-08-05
- **Prochaine prédite**: 2025-10-23 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande sporadique. Le délai écoulé depuis la dernière commande (62 jours) se rapproche de la médiane historique des intervalles (79 jours), suggérant une commande probable d'ici environ 17 jours (horizon < 30j). La quantité recommandée de 2 unités correspond à la médiane des commandes passées et au volume de la commande la plus récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 855 tokens
- **Output**: 2,106 tokens
- **Total**: 2,961 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Order Quantities**

I'm currently focused on the product JF032 and aiming to determine optimal order quantities. My analysis hinges on historical sales data to identify trends and inform the decision-making process for the target date. I'm building a framework that factors in both demand patterns and specific rule-based constraints.


**Evaluating Demand Cycles**

I've examined the time intervals between past orders for JF032. The product shows irregular demand. Although 2024 reveals a pattern of orders every 2-3 months, 2025 has only one recorded order. Considering the target date and a cycle of roughly 70-80 days, an order is likely imminent, potentially within the next two weeks.


**Synthesizing Order Decisions**

I've finalized my analysis, focusing on the product's sporadic demand patterns. Based on a cycle of approximately 79 days and recent history, I expect an order soon. Furthermore, given the low and stable order volumes, a baseline of 2 units is suggested, aligning with recent behavior and the absence of clear seasonality or outliers.


**Calculating Cycle Predictions**

The critical path focuses on predicting the order date, refining the 79-day cycle estimation. I've calculated the predicted next order date to be around October 23rd, 2025, which confirms that the target date of October 6th, 2025, falls within the anticipated ordering window. This supports a stockout risk assessment.


**Concluding the Assessment**

The product, JF032, shows a sporadic ordering pattern, with approximately 79-day cycles.  My analysis of recent order dates indicates a high probability of needing a new order soon. Given the consistency of order volumes, a quantity of 2 units is recommended for the target date, October 6, 2025.


**Reviewing the Analysis**

I'm now consolidating the findings. The product's demand is sporadic, with an approximate 79-day cycle, and the last order was in early August. Based on the calculated prediction of October 23rd, 2025, and the target date of October 6th, I am recommending ordering 2 units, accounting for the inherent uncertainties. My confidence level is medium overall.




</details>

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 06:22:00: 4u
- 2025-09-09 06:35:00: 10u
- 2025-08-22 06:53:50: 3u
- 2025-07-22 10:11:51: 6u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-25 06:29:04: 4u
- 2024-09-16 12:44:43: 6u
- 2024-08-26 14:03:19: 3u
- 2024-08-19 06:08:42: 4u
- 2024-07-31 06:22:12: 5u
- 2024-07-11 06:44:28: 1u
- 2024-06-26 12:38:31: 6u
- 2024-06-19 10:15:51: 5u
- 2024-05-31 12:44:08: 5u
- 2024-05-16 07:03:39: 7u
- 2024-04-29 11:50:19: 10u
- 2024-03-21 09:05:03: 4u

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 06:22:00: 1u
- 2025-08-22 06:53:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 06:22:00: 2u
- 2025-09-23 06:05:27: 1u
- 2025-08-22 06:53:50: 1u
- 2025-07-22 10:11:51: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-19 06:08:42: 1u
- 2024-07-11 06:44:28: 1u
- 2024-05-31 12:44:08: 2u
- 2024-05-28 06:26:27: 1u
- 2024-05-06 07:25:48: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:05:27: 2u
- 2025-08-11 10:56:49: 1u
- 2025-08-05 11:44:48: 2u
- 2025-07-22 10:11:51: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 12:44:43: 2u
- 2024-08-19 06:08:42: 2u
- 2024-07-31 06:22:12: 2u
- 2024-07-11 06:44:28: 1u
- 2024-06-19 10:15:51: 1u
- 2024-05-31 12:44:08: 2u
- 2024-05-28 06:26:27: 1u
- 2024-05-06 07:25:48: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:35:00: 2u
- 2025-08-22 06:53:50: 3u
- 2025-08-11 10:56:49: 3u
- 2025-08-05 11:44:48: 3u
- 2025-07-15 09:37:25: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:35:00: 1u
- 2025-08-22 06:53:50: 1u
- 2025-08-05 11:44:48: 2u
- 2025-07-15 09:37:25: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-26 14:03:19: 2u
- 2024-06-19 10:15:51: 4u
- 2024-04-29 11:50:19: 2u
- 2024-03-21 09:05:03: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 06:53:50: 1u
- 2025-07-15 09:37:25: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-19 06:08:42: 1u
- 2024-07-31 06:22:12: 2u
- 2024-06-26 12:38:31: 1u
- 2024-05-31 12:44:08: 4u
- 2024-04-30 13:56:04: 2u
- 2024-03-21 09:05:03: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 11:44:48: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-26 14:03:19: 1u
- 2024-06-19 10:15:51: 3u
- 2024-03-21 09:05:03: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (39)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 1.7u (30j restants) → prédit 1u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 1.6u (21j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 1.6u (24j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 1.4u (13j restants) → prédit 2u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Stock prédit: 1.9u (96j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: 0.4u (1j restants) → prédit 2u mais non commandé |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Stock prédit: 1.7u (32j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 8 | Stock prédit: 7.1u (29j restants) → prédit 8u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock prédit: 1.1u (15j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 1.3u (20j restants) → prédit 2u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.6u (15j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.3u (10j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -0.2u (-3j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (26j restants) → prédit 1u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.3u (10j restants) → prédit 1u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: 0.3u (3j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: 1.4u (21j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.8u (-7j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Stock prédit: 1.7u (13j restants) → prédit 4u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 3 | Stock prédit: 1.6u (29j restants) → prédit 3u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: -3.2u (-26j restants) → prédit 1u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 0.8u (29j restants) → prédit 2u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 2 | Stock prédit: 0.5u (14j restants) → prédit 2u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Stock prédit: -0.5u (-14j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock prédit: 0.2u (13j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Stock prédit: -0.4u (-6j restants) → prédit 2u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: 0.5u (10j restants) → prédit 3u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -0.7u (-14j restants) → prédit 2u mais non commandé |


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
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock suffisant: 0.6u (74j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-19T14:59:02.375Z*
