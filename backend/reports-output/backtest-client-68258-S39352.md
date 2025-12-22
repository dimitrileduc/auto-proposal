# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S39352
- **Date commande** : 2025-09-24 12:49:59
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 15,414 input + 57,356 output = 72,770 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 14 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 83.3% | Score équilibré global |

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
| **MAE** | 1.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 34.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle intermittent avec accélération récente (moyenne ~15j avec pause estivale)
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-09-12
- **Prochaine prédite**: 2025-09-27 (dans 4j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: Commandes irrégulières (Lundi, Mercredi, Mardi, Vendredi), pas de jour fixe détecté
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Le cycle moyen est estimé à 15 jours malgré une irrégularité forte. La dernière commande date d'il y a 11 jours, plaçant la prochaine commande probable d'ici 4 jours (risque de rupture imminent). Le volume a nettement baissé depuis juin (passant de 10u à 2u/4u). La prédiction se base sur la moyenne des deux commandes de septembre (4u et 2u) pour lisser la consommation récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 890 tokens
- **Output**: 1,884 tokens
- **Total**: 2,774 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Trajectory**

I'm focused on the production history of JOY! Organic Strawberry Jam. Specifically, I'm examining the recent output figures. The unit counts from September are now fresh in my mind, and I'm keen to get a sense of the ongoing trends. I'm keen to map how it all tracks towards the target date.


**Projecting Future Orders**

I'm using the collected data for JOY! Organic Strawberry Jam to try and project the next order date and assess the associated risks. I've calculated the median interval between orders, considered recent trends in quantities, and am now focused on the predicted date and the time remaining until the target. The irregular production schedule introduces some uncertainty.


**Assessing Production Intervals**

I'm now zeroing in on the precise intervals between orders for JOY! Organic Strawberry Jam. Examining the irregular pattern, I'm noting the 48-day gap in August. The September orders, with a mere 3-day separation, are key. I'm focusing on deriving a reliable median interval, and how that impacts the predicted ordering date, while understanding the risks.


**Calculating the Next Order**

I'm now zeroing in on predicting the next order date and quantity for the JOY! Organic Strawberry Jam. I've taken the median interval of 15 days, considered the decreasing trend in quantities, and am focusing on the predicted order around Sept 27th. The question of whether to predict 2 or 3 units, given the latest data, remains. The short time frame, only 4 days until the target, adds a layer of complexity.


**Evaluating Quantity Predictions**

I'm now focused on refining my quantity predictions for the next order of JOY! Organic Strawberry Jam. Given that I have a date of 2025-09-27 in mind, I'm now juggling the conflicting signals from the recent data. The 2-unit median versus the 3-unit average requires more thought, as do the risks. The downward trend is clear. My confidence level, and how that informs my recommendation, is now paramount.




</details>

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.8u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervals irréguliers raccourcissant (cycle médian de 18j)
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-12
- **Prochaine prédite**: 2025-09-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande médian est estimé à environ 18 jours. Avec une dernière commande au 12 septembre, la prochaine est prévue autour du 30 septembre, soit dans environ une semaine, ce qui justifie une commande par anticipation. Pour la quantité, bien que le mois de septembre montre une hausse de volume (7u en deux commandes), la médiane historique sur 5 points reste de 2u, ce qui est la mesure la plus robuste pour ce type de petites quantités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 890 tokens
- **Output**: 1,826 tokens
- **Total**: 2,716 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating the Production Run**

I'm currently calculating the optimal production run size for JOY03. The recent data shows a sales history. I am working towards a target date of September 23rd, 2025. I need to consider the sales velocity and the 3-day and 2-day intervals between sales.


**Forecasting Future Demand**

I'm now analyzing the sales interval data for JOY03. Intervals between sales vary greatly, with a median of 17.5 days and an average of 20.25 days. Given the last order was on September 12th, the next order is estimated around September 29th, past the target production date.


**Evaluating Replenishment Strategy**

I'm now deep in the analysis, zeroing in on JOY03. Using the most recent data, I've calculated a replenishment quantity of 2 units, based on a few rules and the historical median. Also, I need to account for the risk of rupture, given my prediction of the next order occurring near the end of September. I have identified an increasing trend, and will factor that into my final recommendation.


**Recommending Order Quantity**

My analysis of the JOY03 data is nearly complete. I'm focusing on the best replenishment quantity. The median historical order quantity is 2. However, with recent sales of 7 units in September, I am considering a slightly larger order to account for increased demand. I am now leaning towards recommending an order quantity of 2 units.


**Confirming the Final Recommendation**

I am now reviewing the final recommendation for JOY03. Using the historical data and recent sales, I have calculated a median order quantity of 2 units. After revisiting all the data, I'm sticking to the safest bet of 2 units, considering the risk of a stockout.




</details>

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier mais actif avec une accélération marquée en septembre (3 jours entre les deux dernières commandes).
- **Cycle médian (jours)**: 18.5
- **Dernière commande**: 2025-09-12
- **Prochaine prédite**: 2025-09-30 (dans 7j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: Les commandes tombent majoritairement le lundi ou mardi, sauf la dernière un vendredi.
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Le produit montre un regain d'activité en septembre avec deux commandes de 4 unités rapprochées. Le cycle médian calculé sur les 3 derniers mois est de 18,5 jours, ce qui place la prochaine commande théorique autour du 30 septembre. Étant donné la récurrence du volume '4u' dans l'historique récent (75% des commandes hors anomalie basse), cette quantité est préconisée pour couvrir le besoin imminent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 891 tokens
- **Output**: 1,319 tokens
- **Total**: 2,210 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Data Points**

I'm currently focused on the sales data for JOY! Organic Four-Fruit Jam. Recent analysis shows a recurring 4u pattern on Tuesdays and Fridays, though I need more data to determine the underlying cause and implications of this trend. I'll need to expand my view to include August's data, too.


**Projecting Future Stock Levels**

Okay, I've crunched the numbers on JOY! Organic Four-Fruit Jam, and the median order cycle is about 18.5 days. Based on that, I'm predicting the next order around September 30th or October 1st. My calculations show a stable pattern of 4u per order, with a clear trend of consistent demand. Given this, I recommend ordering 4 units to maintain a safe stock level.


**Finalizing Order Recommendation**

I've just finalized the order recommendation for JOY! Organic Four-Fruit Jam. Considering all the data, the product should have an order for 4 units. I considered potential stockouts in the next 30 days and ensured the order meets the current volume trend. I'm satisfied that this maintains a good stock level.


**Assessing Ordering Confidence**

I'm now assessing the overall confidence level for the recommendation. Recent orders have been frequent, leading to high confidence in the timing. However, with small quantities and a short sales history, volume confidence remains at medium, even though a recent median of 4 units is clear. The decision is now validated.




</details>

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier d'environ 30 à 51 jours
- **Cycle médian (jours)**: 41
- **Dernière commande**: 2025-09-12
- **Prochaine prédite**: 2025-10-23 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian est estimé à 41 jours. Avec une dernière commande au 12 septembre, la prochaine est prévue pour le 23 octobre, soit exactement à l'horizon des 30 jours, justifiant une commande anticipée. La tendance des quantités est en baisse constante (3, 2 puis 1 unité). Conformément aux règles sur les petites quantités et les tendances nettes, on retient la valeur la plus basse du cycle récent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 836 tokens
- **Output**: 1,480 tokens
- **Total**: 2,316 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Recent Data**

I've been analyzing the recent sales data for the JOY! Organic Rhubarb Jam. The last three months paint a somewhat sparse picture with only two recorded sales. I'm focusing now on identifying any potential trends or patterns within these limited data points.


**Predicting the Next Order**

I've calculated the median cycle between the recorded sales, landing at approximately 41 days. Based on this, and the last order date, I've projected the next order for the rhubarb jam to be around October 23rd. The time remaining until that date is precisely 30 days, placing it within a risk window according to the criteria. I've also identified a decreasing trend in quantities sold.


**Assessing Quantity and Risk**

The analysis continues to refine the quantity and risk assessments. Considering the declining sales trend (3, 2, 1), the median, and B2B safety margins, I'm leaning towards recommending one unit for the next order. The time remaining until the predicted order date is 30 days, classifying it as a "YES" risk according to the given criteria.


**Confirming Order and Risk**

Given the predicted order date of October 23rd, 30 days from now, the risk is classified as "YES." After further review of the decreasing sales trend and the recent order for one unit, I'm recommending a single unit for the next order. I'm taking into account the median cycle and safety B2B margins.




</details>

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 19 jours (intervalles 14, 16, 21, 27)
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle d'achat est très marqué avec une médiane de 19 jours entre les commandes. La dernière commande datant du 2025-09-09, la prochaine est prévue autour du 28 septembre (soit dans environ 5 jours), confirmant le risque de rupture. Les volumes montrent une légère baisse par rapport aux 6 unités de juin/juillet, les trois dernières commandes étant de 4, 2 et 3 unités. La médiane des commandes récentes (3u) est retenue pour la recommandation.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 887 tokens
- **Output**: 1,614 tokens
- **Total**: 2,501 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Sales Trends**

I'm currently focused on the sales data for Organic Cherry Jam (JOY05). Reviewing the last three months, I've noted the quantity sold and the gaps between sales. A pattern is beginning to emerge, particularly with the frequency of orders.


**Projecting Future Orders**

I've calculated the median interval between orders for Organic Cherry Jam (JOY05) to be 18.5 days. Based on this and the last order date, I've projected the next order is due around September 27th or 28th. Given today's date, there's a risk of rupture within the next week. Also, noticing a decreasing trend in quantities.


**Assessing Inventory Risk**

I've calculated the projected next order date as September 27th or 28th, with a current date of September 23rd. This analysis reveals the estimated days until the next order is only 4.5 days, therefore there's a definite risk of rupture. I'm also now factoring in the baseline quantity of 3 units based on recent sales.


**Determining Baseline and Quantity**

I've finalized my analysis of the Organic Cherry Jam's (JOY05) demand. The baseline quantity, informed by the three most recent orders (3, 2, and 4 units), is confirmed as 3. This approach considers the decreasing trend. The recommended order is set to 3 units.




</details>

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 6u
- 📊 **Baseline calculée**: 6u
- 📊 **Médiane historique**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 6u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 21 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-30 (dans 7j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes majoritairement le mardi avec un décalage récent vers le mercredi/lundi
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande très stable avec un cycle médian de 21 jours. La dernière commande datant du 9 septembre, la prochaine occurrence est prévue pour le 30 septembre. Étant à 7 jours de cette échéance, un réapprovisionnement est nécessaire. Le volume est constant à 6 unités (3 occurrences sur les 4 dernières livraisons).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 868 tokens
- **Output**: 1,475 tokens
- **Total**: 2,343 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Performance**

I've been analyzing the sales data for [REB01] ReBEL chips. Recent figures reveal a consistent pattern of sales, with a slight dip in July. The intervals between sales appear to be stabilizing. Further investigation into the factors driving these fluctuations, like promotional activity or seasonality, is now warranted.


**Projecting Order Schedules**

I've just finalized the next order date prediction for the [REB01] chips, calculating a 21-day median interval. Based on that and the last order, I'm anticipating a new order around September 30th. Given today's date, this suggests a need for an order within the next seven days, which means a proactive call to action is required. I've also assessed the median order quantity to be 6 units.


**Forecasting Next Delivery**

I've just finalized the next delivery date prediction for the [REB01] ReBEL chips premium & bio - sel de mer 125g. With the last order on September 9th and consistent 21-day cycles, I estimate an order around September 30th. Since it's currently September 23rd, it's prudent to assume a need for action within a week. I've also reconfirmed a stable order quantity of 6 units.


**Evaluating Stock Risk**

I've just finished the deep dive on the [REB01] ReBEL chips, using the sel de mer variant for analysis. My projection, based on a 21-day median interval, points toward an order date of September 30th. Since it's September 23rd, this triggers a high-confidence alert: we need to act within a week. I've reconfirmed the stable order quantity of 6 units.




</details>

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier entre 14 et 27 jours (médiane ~19 jours)
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec une médiane de 19 jours. La dernière commande date du 09/09, plaçant la prochaine commande estimée autour du 28/09 (soit dans 5 jours), ce qui justifie une commande immédiate. On observe une tendance à la baisse des volumes, passant de 6u à 2u, ces deux dernières commandes s'étant stabilisées à 2u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,212 tokens
- **Total**: 2,107 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the ReBEL Chips**

I'm taking a close look at the sales data for the ReBEL chips. Currently, the paprika fumé variety is in focus. Sales have been pretty slow so far. I see two units sold on the 9th of this month, and two units prior to that, with a three-week interval. It needs more market analysis.


**Calculating Sales Trends**

My focus has shifted to analyzing the sales intervals and predicting the next order date. I calculated a median interval of 18.5 days for the paprika fumé chips, placing the next order around September 27th or 28th. Given today's date, I'm expecting an order soon, within the next 4 days. This indicates a definite risk. I've also observed a concerning downward trend in sales volume, with the quantity now stabilizing at just 2 units.


**Predicting the Upcoming Order**

I've refined the prediction. The median sales interval is approximately 18.5 days, and the last order was on September 9th, putting the anticipated next order around September 28th. Given today's date of September 23rd, the next order is imminent, within about 5 days. The recommended quantity is 2, due to recent stabilization at this level. There's a downward volume trend.


**Forecasting Order Parameters**

The analysis confirms the imminent next order, about 5 days from now. The predicted date remains September 28th. I've pinpointed a consistent downward sales trend, so I'm recommending a quantity of only 2 units. The confidence in the prediction is high for the timing, but moderate due to the low, decreasing sales volume.




</details>

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 21 jours détectée sur les commandes récentes
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des intervalles montre une fréquence moyenne de 21 jours entre les commandes. La date actuelle (23 sept) place la prochaine commande prévue aux alentours du 30 septembre, soit dans l'horizon critique de 30 jours. Bien que les volumes soient faibles (entre 2 et 6 unités), la médiane de l'historique complet (3u) est retenue comme base stable pour couvrir le prochain besoin imminent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 868 tokens
- **Output**: 1,186 tokens
- **Total**: 2,054 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Order Cycles**

I'm currently working on predicting the next order date for the REB03 product based on its past ordering history. Analyzing the intervals between orders, I see cycles of 21, 43, and 14 days. Calculating the median cycle time is key to predicting the next order, so I've calculated it. Given the last order, I am extrapolating.


**Evaluating Replenishment Quantities**

I've determined the next order date and now I'm focusing on the optimal quantity. After examining historical order volumes, I'm calculating the median quantity, comparing the last three orders with the entire history to establish a baseline. I'm also considering the trend, giving extra consideration to the most recent order. I'm using this information to create an accurate recommendation.


**Determining Order Recommendations**

I've now focused on the final output: the recommended order. Given the analysis, my recommendation is for 3 units, using a baseline of the last four orders. I've considered that the most recent order was 4u, indicating the need to replenish the stock, and found a medium confidence in my recommendation.




</details>

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 18-21 jours
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec une médiane de 18,5 jours. La dernière commande datant du 09/09, la prochaine est attendue autour du 28/09 (soit dans 5 jours). Les quantités sont stables avec une médiane de 4 unités sur l'historique récent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,174 tokens
- **Total**: 2,069 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Product's Data**

I'm currently focusing on the REB08 ReBEL chips, specifically the premium & bio piment citron flavor. I'm noting the dates associated with this product. So far, I've got a couple of entries from August and September of 2025. I need to keep tracking the progression of the data to find any trends.


**Predicting Future Orders**

I've crunched the numbers and calculated the intervals between orders for the REB08 chips. The median interval is about 18.5 days. Based on the last order on September 9th, I predict the next order will be around September 28th, just five days from today. The risk assessment indicates a HIGH risk.


**Forecasting Order Details**

I've finalized my analysis of the REB08 product.  The data points to a stable cycle, predicting the next order on or around September 28th, with a quantity of 4 units. I have a high degree of confidence in this prediction due to the consistent ordering pattern.




</details>

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 3 semaines
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est régulier avec une médiane de 19 jours. La prochaine commande est prévue autour du 28 septembre, soit dans 5 jours. La quantité recommandée correspond à la médiane des dernières commandes qui reste stable entre 2 et 6 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,113 tokens
- **Total**: 2,008 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Sales Trends**

I'm currently analyzing the sales data for the [REB04] ReBEL chips. My recent focus has been on calculating the sales interval between the recorded sales figures of 4u on September 9th, and 6u on August 19th. The analysis is going well.


**Projecting Future Orders**

I've just finished calculating the predicted next order date, factoring in the median sales interval of 19 days. Based on the most recent order on September 9th, I've projected the next order to be on September 28th. Given today's date of September 23rd, the risk assessment indicates 5 days until the expected order. I'm also assessing quantity trends.


**Evaluating Product Performance**

I've just finished the analysis for the [REB04] ReBEL chips (premium & bio - thym/romarin 125g) using the available 3-month sales history. The median sales interval is 19 days, and the next order is projected for September 28th. The recommended quantity is 4 units. I assessed risk and found no outliers or concerning trends.




</details>

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 4u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 5u
- 2025-08-19 13:27:28: 1u
- 2025-07-07 08:56:44: 2u
- 2025-06-23 07:14:01: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 4u
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 1u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 1u
- 2025-07-23 10:00:51: 2u
- 2025-06-23 07:14:01: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 3u
- 2025-08-19 13:27:28: 2u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 6u
- 2025-08-19 13:27:28: 6u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: high)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 2u
- 2025-08-19 13:27:28: 2u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 2u
- 2025-07-07 08:56:44: 2u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 4u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 4u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 6u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 4u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 6u

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 3 | Stock prédit: 3.8u (31j restants) → prédit 3u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 2 | Stock prédit: 2.0u (19j restants) → prédit 2u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 11 | Stock prédit: 3.2u (6j restants) → prédit 11u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Stock prédit: -4.4u (-23j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T15:03:06.413Z*
