# Rapport Backtest - Client BIOK THOREMBAIS

## Contexte

- **Client** : BIOK THOREMBAIS (ID: 60213)
- **Commande réelle** : S39350
- **Date commande** : 2025-09-24 13:05:32
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 21,407 input + 39,962 output = 61,369 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.9% | 22 produits prédits, 9 corrects |
| **Rappel** | 90.0% | 10 produits réels, 9 détectés |
| **F1-Score** | 56.3% | Score équilibré global |

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
| **MAE** | 0.56 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 42.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 23.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (9)

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
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO01] KOKO Kombucha original 330ml | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.6u
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
- **Pattern temporel**: Régulier, environ toutes les 3 semaines
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-21 (dans -2j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes effectuées principalement les mardis et mercredis.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La fréquence de commande est très régulière avec un cycle médian de 18 jours. À la date du 2025-09-23, le client est à J+20 de sa dernière commande, ce qui signifie qu'il est entré dans sa fenêtre habituelle de réapprovisionnement. Bien que les quantités varient entre 1 et 4 unités (moyenne 2.6), la médiane de 3 unités est l'indicateur le plus robuste pour une commande unique sur ce type de petit volume.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,435 tokens
- **Total**: 2,330 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking REB01 Sales**

I'm currently tracking the sales history of the ReBEL chips, specifically the premium sea salt variety. Recent data from September 3rd shows a strong 4-unit sale. I'm also looking into the sales figures from August, July, and June to assess trends.


**Forecasting Chip Demand**

I'm using the sales data for REB01 chips to predict the next order date. Based on the median cycle of 17.5 days and the last order on September 3rd, I estimated a due date around September 20th or 21st. The current date, September 23rd, is now past this, increasing the risk of stockout.


**Evaluating Order Quantity**

I've analyzed the recent sales of REB01 chips, observing erratic but low volumes. While the baseline average is 2.6 units, I've opted for a recommended quantity of 3 units based on the median. This aligns with the regular cycle detected, with the current date already past the predicted replenishment window.


**Finalizing the Recommendation**

I'm now completely confident in recommending an order for 3 units of the REB01 chips. The analysis of past sales data, with a median cycle of 17.5 days, confirms the replenishment window has passed. My reasoning incorporates the erratic but low volumes, with the most recent order being 4 units, aligning with the median of 3, based on the recent sales data.




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
- **Pattern temporel**: Cycle régulier avec des intervalles compris entre 14 et 22 jours
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande médian est de 18 jours, plaçant la date théorique de réapprovisionnement au 21 septembre. Avec une dernière commande effectuée il y a 20 jours (le 3 septembre), le besoin est immédiat. Les volumes historiques sont faibles (entre 1 et 3 unités par commande), la médiane de 2 unités est la mesure de tendance centrale la plus fiable pour ce profil de consommation stable.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,648 tokens
- **Total**: 2,543 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Historical Sales Data**

I'm currently crunching numbers, focusing on the ReBEL chips' sales history. Right now, I'm examining the interval between August 12th and September 3rd to understand the sales velocity. Then, I'll project that data to now.


**Predicting Future Demand**

The model indicates a potential need for ReBEL chips very soon, perhaps even overdue given the 20-day interval since the last order and the predicted 17.5-day cycle. A stockout risk within 30 days is possible. I'll need to flag this.


**Evaluating Recent Data Points**

My analysis of the REB02 ReBEL chips continues. I've calculated a median order cycle of approximately 17.5 days and a predicted next order date around September 20th. Given that today is September 23rd, the command is overdue. The baseline order quantity appears to be 2.


**Calculating The Order Cycle**

I'm now recalculating the order cycle. Analyzing the intervals, the median is 17.5 days, not 18, and the predicted order date was therefore September 20th. Given today's date, September 23rd, this suggests the order is overdue.


**Determining The Quantity**

I'm now determining the baseline quantity, considering a recent order of 3 units, and before that 1 and 1. The median is 2, perfectly balancing recent data points. I'm focusing on providing a recommendation for the upcoming order.




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
- **Pattern temporel**: Cycle mensuel irrégulier (médiane 22 jours)
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La consommation est extrêmement régulière à raison de 1 unité par commande. Sur la base d'un cycle médian de 22 jours, la prochaine commande est estimée autour du 25 septembre, soit dans un délai de 2 jours par rapport à la date actuelle. Un risque de rupture imminent est identifié.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 868 tokens
- **Output**: 1,094 tokens
- **Total**: 1,962 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Product History**

I'm currently focusing on [REB03], specifically the ReBEL chips, and tracking their production history. Recent entries show a pattern I'm trying to quantify: one unit on September 3rd, and another on August 12th. I need to determine the frequency and any trends. The goal is to project a reliable production timeline.


**Forecasting Order Frequency**

I've analyzed the [REB03] production data, focusing on the ReBEL chips. Calculations reveal a median interval of 22 days between orders. Based on the last order on September 3rd, I've projected the next order for September 25th, just two days from today. This indicates an imminent order, with a stable trend of single-unit orders. I've noted an irregular monthly cycle for this.


**Assessing Order Imminence**

I've just finalized the assessment of the [REB03] order cycle, confirming the prediction. Given today's date, September 23rd, the analysis highlights a high probability of an order on September 25th. The consistent trend of single-unit orders further bolsters this prediction, with a 2-day timeframe. There is a `RISQUE OUI`.




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
- **Pattern temporel**: Cycle régulier bi-mensuel (environ 14-22 jours)
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian détecté est de 18 jours. La date de commande théorique (21 septembre) est légèrement dépassée au jour de l'analyse (23 septembre), confirmant un besoin immédiat. Bien que la dernière commande fût de 2 unités, l'historique montre une stabilité forte à 1 unité (4 des 5 dernières commandes). Conformément à la règle des petites quantités, on privilégie la médiane basse pour éviter le surstock.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,126 tokens
- **Total**: 2,021 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Sales Data**

I've been meticulously analyzing the sales data for the [REB08] ReBEL chips. Currently, the focus is on understanding the purchase frequency and intervals. It seems the customer bought 2 units on September 3rd, and the intervals are fluctuating. I am going to delve deeper into these trends.


**Assessing Order Prediction**

I've calculated the predicted next order date as September 21st, based on an 18-day cycle, which is overdue. Considering the recent trend of mostly one-unit orders, though the last was two, I'm now leaning towards predicting a one-unit order, as per our "petite quantité" policy.


**Determining the Order Quantity**

Now, I'm focusing on the quantity. Despite the last order being 2 units, the historical trend strongly suggests 1 unit as the baseline. Given the "petite quantité" policy and the regular 18-day cycle, I'm recommending a single unit. The confidence in this prediction is high. The order is overdue.




</details>

</details>


<details>
<summary><strong>5. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle court d'environ 22 jours détecté
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé entre les deux seules commandes est de 22 jours. La prochaine commande est estimée autour du 25 septembre, soit dans 2 jours. Sur de très faibles volumes (1-2u), on privilégie la stabilité. La recommandation est de 1 unité conformément à la consigne de valeur basse pour les alternances ou les petits historiques.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 816 tokens
- **Output**: 1,137 tokens
- **Total**: 1,953 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently tracking the sales data for BUDDY Organic Energy Drink, focusing on the Pomegranate & Hibiscus variant. Recent figures from September 3rd show a jump to 2 units, a rise from the 1 unit sold back in August. I am now looking to discern the sales intervals.


**Projecting Order Quantities**

I've been calculating the projected order quantities for the Pomegranate & Hibiscus variant. Based on the 22-day cycle and the current date, I anticipate the next order around September 25th. Considering the limited data, I'm leaning toward a conservative estimate of 1 unit, aligning with the "valeur basse" guideline for small quantities, even though the last order was for 2.


**Assessing Stockout Risk**

My analysis indicates a high risk of stockout. The predicted next order is due in two days, on September 25th, but the current data shows only two previous orders. Though the sales have slightly increased, the conservative approach for small quantities suggests recommending a purchase of 1 unit.




</details>

</details>


<details>
<summary><strong>6. [KOKO01] KOKO Kombucha original 330ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 3 semaines (22 jours)
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle régulier de 22 jours est identifié. La prochaine commande est prévue dans environ 2 jours (25 sept.), ce qui confirme un risque de rupture sur l'horizon de 30 jours. Bien que la médiane des quantités non nulles soit de 2, on observe une tendance de croissance linéaire sur les trois derniers paliers (1u, 2u, 3u), justifiant une commande de 3 unités pour accompagner l'augmentation de la demande locale.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 865 tokens
- **Output**: 2,157 tokens
- **Total**: 3,022 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Kombucha Volumes**

I'm currently tracking the sales of KOKO Kombucha original. The most recent data point from September 23rd shows a consumption of 3 units. Prior months reflect a fluctuating pattern, with 2 units in August and 1 in June. Interestingly, July indicates zero units, warranting further investigation. There is no N-1 data available.


**Projecting Future Stock Levels**

The calculations are now complete. I've determined that based on the consumption trend, which is clearly increasing from 1 to 3 units, the next order should likely be for 3 units. However, I am considering the instruction to prioritize the median of recent quantities, which is 2. The deadline is in 2 days. The final decision rests on whether to apply a slight upward adjustment.


**Evaluating Quantity Recommendations**

I am now struggling to reconcile the conflicting instructions. The median suggests 2 units, while the upward trend points to 3. Furthermore, the average of past orders gives 2.33. Given the context and small volumes, I will try to remain as conservative as possible, considering the prior median from non-zero values. The final call is pending.


**Calculating Recommended Quantities**

I'm now fully immersed in the decision-making process. The initial inclination was to heed the median, resulting in a recommendation of 2 units. However, I'm now leaning heavily towards the upward trend. Considering the increasing sales and last order, I believe 3 units are the safer bet, despite my concerns about the small quantity guidelines.


**Revising and Finalizing**

I'm now revisiting the entire process to make a final decision, considering all data points and rules. I'm focusing on reconciling the median with the upward trend. The "Safety B2B" rule is also a key factor. Acknowledging 1, 2, and 3 as a clear trend has brought me to a final recommendation of 3 units.




</details>

</details>


<details>
<summary><strong>7. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle bimensuel régulier variant entre 14 et 22 jours
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande médian (18 jours) est arrivé à échéance le 21 septembre par rapport à la dernière livraison du 3 septembre. Le besoin est donc immédiat (risque de rupture imminent). Les quantités fluctuant entre 1u et 4u, la moyenne glissante de 2u est préférée à la médiane de 1u pour couvrir les pics récents de consommation observés en juillet et septembre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 893 tokens
- **Output**: 2,402 tokens
- **Total**: 3,295 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently focused on the sales history for KOKO Kombucha Lemon Ginger. Recent data shows a noticeable upward trend with 3 units sold on September 3rd. There was a single unit sold on August 12th. I want to analyze these numbers, along with earlier data, to uncover patterns in consumer behavior.


**Forecasting Demand Patterns**

The analysis points to a possible high-risk situation. My calculations suggest a refill was due around September 21st, yet there's been no new order. While the median order quantity is 1, the recent sales show a fluctuating pattern. This variance, coupled with the overdue refill window, warrants further investigation into potential causes for the lack of recent orders.


**Predicting Refill Quantity**

Based on the fluctuating order history, I'm now fine-tuning the quantity prediction.  I've calculated an average of 2 units, and a median of 1. Because of recent sales, I feel the average is more realistic. However, given that a refill is late, I must consider both scenarios. I will check the customer history.


**Evaluating Quantity Recommendations**

Based on the latest data, I'm sticking with a recommended order of 2 units. While the median is 1, considering the recent sales of up to 4 units, and the fact that we're past the expected refill date, I believe a slightly higher volume is appropriate to meet any potential demand. I will document this decision.


**Calculating Recommended Order**

I've finalized the recommended quantity, setting it at 2 units. This reflects the average order size, balancing the median of 1 with recent higher volumes (up to 4 units). My confidence is medium, as small order sizes can lead to high variance. I will create a report.


**Determining Final Recommendation**

After reviewing all the analysis, including recent fluctuations and the alternating high/low pattern in order sizes, I've revised the quantity recommendation to 2 units. This aligns with the average order and provides a safety margin. My confidence is medium due to the small, variable order sizes.


**Determining the Quantity**

I've re-examined the data and the "small quantity" rule. The alternating high/low pattern is key. However, the B2B context favors avoiding stockouts. Considering all recent sales, and the overdue refill date, I'm setting the final recommendation at 2 units.




</details>

</details>


<details>
<summary><strong>8. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier avec une médiane de 18 jours
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande observé varie entre 14 et 22 jours (médiane 18 jours). La dernière commande datant du 2025-09-03, l'échéance théorique (21 septembre) est dépassée de 2 jours, confirmant un risque de rupture imminent. Les volumes sont faibles et stables (1 à 4 unités) ; la médiane de 2 unités est donc retenue comme prédiction robuste.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 894 tokens
- **Output**: 1,559 tokens
- **Total**: 2,453 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Estimating Future Orders**

I'm calculating the expected order date based on historical intervals. The median interval is approximately 18 days. The most recent order was on 2025-09-03. Thus, I predict the next order will be around 18 days from that date.


**Analyzing Replenishment Needs**

I've examined the recent ordering history, noting the intervals between orders. The median interval is now 17.5 days, rounded to 18.  Given the latest order on September 3rd, the predicted next order date was September 21st. Because it's September 23rd, the replenishment is overdue.


**Calculating a Recommendation**

The product's ordering pattern is consistent, with a median cycle of 18 days.  My predicted replenishment date (Sept 21st) has passed; it is now Sept 23rd. The recommended quantity is 2 units, based on historical data. The confidence level is high, as the data is stable and regular.


**Evaluating the Replenishment Needs**

I've examined the order history for KOKO 03 again. Based on a consistent 18-day cycle, the order was due on September 21st. It's now the 23rd, and the need is clear. The median quantity is 2, with the last order being 3. I've classified this as a high confidence situation.




</details>

</details>


<details>
<summary><strong>9. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle mensuel régulier d'environ 29 jours
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-10-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un comportement d'achat extrêmement stable avec 1 unité commandée environ tous les 29 jours. La dernière commande ayant eu lieu le 03/09, la prochaine est estimée autour du 02/10, soit dans environ 9 jours. Étant donné l'imminence du besoin par rapport au cycle et la constance du volume (1u), une commande de 1 unité est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 842 tokens
- **Output**: 1,123 tokens
- **Total**: 1,965 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Sales Trends**

I'm currently working on analyzing the sales data for the NOD04 product, a mango-passionfruit lemonade. I've pinpointed the relevant dates and quantities from the provided history and am now focusing on determining any recent sales trends using the data from September and August. I plan to extrapolate this to estimate future sales.


**Estimating Order Imminence**

I've just finished the calculations. Using the purchase history of NOD04, I've determined that the next order is estimated within the next nine days. Given the product's stable sales pattern, I predict a quantity of one unit. Furthermore, I've assessed the risk of a stock rupture within the upcoming month and flagged it as "Yes," due to the imminent order.


**Finalizing the Recommendation**

I've just finalized the analysis of the NOD04 lemonade. The data indicates a highly predictable pattern with orders roughly every 29 days, always for a single unit. Given the current date and the last order, I've confirmed a high confidence in the upcoming order and am recommending replenishing with one unit. The risk of stock rupture is indeed "Yes".




</details>

</details>




### 📊 Données d'Input LLM (9 produits)


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
<summary><strong>5. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 2u
- 2025-08-12 12:02:43: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [KOKO01] KOKO Kombucha original 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 2u
- 2025-07-23 08:08:35: 0u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - ✅ LLM Réussi</summary>

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
<summary><strong>8. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

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
<summary><strong>9. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 1u
- 2025-08-12 12:02:43: 1u
- 2025-07-08 06:30:25: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (13)

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
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: -0.7u (-7j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.7u (45j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.2u (-6j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.1u (6j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Stock prédit: 0.4u (42j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.3u (-17j restants) → prédit 1u mais non commandé |


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
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock: 1.0u (19j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T14:59:40.949Z*
