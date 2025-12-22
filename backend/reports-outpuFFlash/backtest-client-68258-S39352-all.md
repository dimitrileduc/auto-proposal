# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S39352
- **Date commande** : 2025-09-24 12:49:59
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 11,886 input + 32,051 output = 43,937 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 15 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAPE** | 36.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4.8u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes par grappes bimensuelles, reprise d'activité début septembre.
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-09-12
- **Prochaine prédite**: 2025-09-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 15 jours. Avec une dernière commande au 12 septembre, la prochaine est prévue autour du 27 septembre (dans 4 jours), ce qui justifie une commande immédiate. Bien que la tendance des quantités soit à la baisse (de 10u à 2u), la médiane de 4u est retenue comme stock de sécurité standard pour une commande B2B afin d'équilibrer le risque de rupture et le surstock.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 694 tokens
- **Output**: 1,462 tokens
- **Total**: 2,156 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Orders**

I'm currently focused on the sales data for "JOY ! Organic Strawberry Jam 370g (JOY02)." The order history shows recent purchases of 2 units on 2025-09-12 and 4 units on 2025-09-09. Before that, the last order was 2025-07-23 with 2 units. I will now look at longer term sales intervals.


**Calculating Order Predictions**

I've just crunched the numbers on the order intervals, with a median of 15 days. Based on the last order date of 2025-09-12, I predict the next order around 2025-09-27. Considering this, and with only 4 days until that date, there is a clear stockout risk.


**Predicting Order Quantity**

I've analyzed the order history for JOY02, focusing on quantity. The median quantity is 4 units. Considering a decreasing trend and recent orders of 2 and 4 units, I lean towards 4 as a conservative, yet safe, baseline. The recommendation is 4 units, with medium confidence due to some data gaps.


**Synthesizing Findings and Risks**

I've just concluded my analysis, and the data points to a potential stockout in four days, on September 27th. Orders cluster bi-monthly, but recent quantity declines worry me. A conservative estimate of 4 units is the recommendation, while I also acknowledge a medium confidence due to the recent declines.




</details>

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
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
- **Pattern temporel**: Cycle variable avec une médiane d'environ 18 jours, accélération marquée en septembre
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-12
- **Prochaine prédite**: 2025-09-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Le cycle moyen entre les commandes est passé de ~20 jours à moins d'une semaine sur la période la plus récente. Avec une dernière commande le 12 septembre, la prochaine est attendue sous peu (horizon < 30j), justifiant le risque. La quantité de 2 correspond à la médiane historique et au volume de la dernière commande, écartant l'anomalie ponctuelle de 5 unités du 9 septembre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 694 tokens
- **Output**: 1,482 tokens
- **Total**: 2,176 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales Patterns**

My analysis is zeroing in on JOY03 sales. I've been charting the apricot jam's movement, noting specific dates and units sold. Recent data from September shows a small uptick, and I'm comparing that against the longer-term trends to gauge consistency.


**Projecting Order Timing**

My analysis continues on the apricot jam, JOY03, focusing on predicting the next order date. Based on the sales history, I've calculated a median interval of 17.5 days between orders. My prediction is for a potential order around September 29th or 30th. There is a risk, as the prediction is within the 30-day horizon.


**Estimating Order Quantity**

My assessment moves to recommending an order quantity. Considering recent data, the median and mode hover at two units. Although one larger order appears, I'm choosing to recommend two units, based on historical medians and the latest sales.


**Evaluating Quantity Recommendations**

My focus is now entirely on the order quantity, JOY03. I've re-evaluated based on the recent September orders, observing a potential surge. The median and mode suggest an order for two units, yet I'm considering the two recent September orders. Given this activity, I am sticking with my previous recommendation of two units, while noting the potential for future adjustments, and recognizing a more volatile pattern.




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
- **Pattern temporel**: Cycle irrégulier avec une accélération récente, médiane de 18.5 jours
- **Cycle médian (jours)**: 18.5
- **Dernière commande**: 2025-09-12
- **Prochaine prédite**: 2025-09-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
La demande montre une accélération récente avec deux commandes de 4 unités en 3 jours en septembre. La médiane de quantité se situe à 4 unités (en excluant l'outlier de 1u en août). Avec une médiane de cycle de 18,5 jours et une dernière commande le 12 septembre, la prochaine commande est attendue sous peu, justifiant un réapprovisionnement de 4 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 695 tokens
- **Output**: 1,375 tokens
- **Total**: 2,070 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Product's Data**

I'm currently focusing on the JOY04 jam product. The date stamps are starting to solidify the frequency of updates. It seems like the "4u" notation, appearing on specific weekdays, could signify some form of activity or testing. I am eager to decode this pattern further.


**Calculating Order Timelines**

I've crunched the numbers on the JOY04 jam's ordering intervals. The mean interval is about 16.75 days, while the median is slightly higher at 18.5 days. Based on these calculations, I'm predicting the next order to be around September 30th or October 1st. The risk assessment now flags a definite YES.


**Interpreting the Recent Orders**

The "4u" notation has re-emerged in the last two orders of the JOY04 jam. A closer examination of the "1u" outlier is ongoing. I'm focusing on the trend of increasing frequency, specifically how the last two order cycles have been quite close together, and their corresponding quantities.


**Assessing Order Risks**

I've just run a risk assessment based on the JOY04 jam's order history. With the next predicted order around the end of September, the short interval since the last order indicates a definite YES for risk. I'm now evaluating the confidence levels.




</details>

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel à bimestriel irrégulier
- **Cycle médian (jours)**: 40
- **Dernière commande**: 2025-09-12
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen entre les commandes est d'environ 40 jours (médiane entre 30 et 51 jours). La prochaine commande est estimée autour du 22 octobre, soit dans moins de 30 jours, justifiant un besoin de réapprovisionnement. Bien que les quantités soient en baisse (3, 2 puis 1), la médiane de 2 unités est retenue pour maintenir un stock tampon minimum en B2B.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 640 tokens
- **Output**: 1,125 tokens
- **Total**: 1,765 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Inventory**

I'm currently tracking the inventory of JOY! Organic Rhubarb Jam. The most recent data point I have is from September 23rd, 2025. I've noted a couple of recent transactions: one unit on September 12th and two units on July 23rd, 2025. I am planning on determining the velocity of the inventory.


**Forecasting the Replenishment**

I'm projecting the next order date and calculating risk. Based on the sales history, I've estimated a median cycle of 40.5 days. The last order was on September 12th, making today 11 days since the last order. This suggests the next order should be in approximately 29.5 days. Since this is within the 40-day risk threshold, there is, as expected, a risk involved.


**Calculating Reorder Quantities**

I've examined the quantity trends, noticing a decline from 3 to 1 unit. Given the low-volume sales, I'm now leaning towards reordering only 2 units, considering the median, despite the low confidence in the data. The next order is estimated in about a month from now, and I will maintain this number for the moment.




</details>

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4.2u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle régulier d'environ 19 jours (min 14, max 27)
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen de commande est de 19 jours avec une dernière commande effectuée il y a 14 jours ; la prochaine commande est donc attendue sous 5 jours (risque de rupture imminent). Bien que les volumes aient diminué récemment (passant de 6 à 3 unités), la médiane de 4 unités constitue la base la plus robuste pour couvrir le besoin sans surstock excessif.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 691 tokens
- **Output**: 2,159 tokens
- **Total**: 2,850 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Volumes**

I'm currently looking at the production volume history for JOY05 Organic Cherry Jam. Right now, I'm focusing on the dates and quantities produced. The data shows 3 units on September 9th and 2 units on August 19th. My next step is to calculate the time passed.


**Projecting Future Stock Needs**

I've calculated the time intervals between past orders, with the average interval being about 19.5 days. Considering the last order was on September 9th and today's date, September 23rd, my analysis indicates a potential stockout risk in 5 days if we don't place another order. Furthermore, the quantity ordered appears to be trending downwards, so a deeper look into the cause of this reduction may be required.


**Evaluating Order Intervals**

Now, I'm analyzing the time intervals between orders, which average around 19.5 days, though there's some variability. Based on this, and given today is September 23rd, the next order is expected around September 28th. The latest order quantities also seem to be trending downward. The most recent order was for 3 units.


**Predicting Order Placement**

I'm now calculating the next order date and quantity, which I've determined should be around September 28th. Given the trend of decreasing quantities, I've assessed the recommendation will be 4 units, erring on the side of caution. My confidence is medium, acknowledging volume uncertainty.


**Confirming Replenishment Strategy**

I've finalized the order date and quantity, landing on September 28th for 4 units. I considered a decreased quantity due to the recent trend, but the median order quantity provided a more robust baseline. I'm moderately confident in this recommendation given the variability in quantities.


**Formulating a Recommendation**

I'm now determining the order date and quantity, converging on September 28th for 4 units, based on a 19-day average order cycle and a slightly declining quantity trend. While the trend suggests a smaller volume, the median provides a more robust baseline. I remain moderately confident.




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
- **Pattern temporel**: Cycle régulier d'environ 21 jours (médiane)
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-30 (dans 7j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Habitude de commande le mardi sur les deux dernières dates.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le pattern est très stable avec un cycle médian de 21 jours et une quantité récurrente de 6 unités. La prochaine commande est prévue dans environ 7 jours (30/09), justifiant un réapprovisionnement immédiat pour éviter la rupture.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 672 tokens
- **Output**: 1,615 tokens
- **Total**: 2,287 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Order Trends**

I'm currently analyzing the order frequency for [REB01] ReBEL chips. My focus is on the intervals between orders, specifically looking at how often the 125g sea salt variety is reordered. I've noted past order dates in July, August, and September, which helps to establish a clear pattern.


**Projecting Future Demands**

I've just finished the frequency analysis and projected the next order date. The data points suggest the chips are reordered about every 21 days. Based on this, I'm predicting the next order will be on September 30th. Given the current date, that leaves about a week. Considering that, I'm recommending a quantity of six units.


**Confirming Final Quantity**

I've just finalized the recommended quantity and am comfortable with the conclusion. The analysis of past orders, using a 21-day cycle, points to a need for six units, which matches the median and mode of previous orders. Given the predicted reorder date and the current date, the risk assessment confirms the urgency, and I've verified the underlying logic one final time.


**Formulating Recommendation Logically**

I've reviewed the data, and the 21-day cycle and the frequency of past orders allows me to define the relevant parameters. I am calculating the baseline quantity, the confidence level, the potential risk, and the reasoning behind each of the final decisions. The structure is based on the provided JSON schema. I will produce the final analysis in the appropriate JSON format.




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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 3 semaines (médiane 19 jours)
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Le cycle moyen entre les commandes est de 19 jours. La dernière commande ayant eu lieu le 09/09, la prochaine est prévue autour du 28/09 (dans 5 jours), d'où un risque de rupture imminent. Bien que les volumes aient baissé (de 6 à 2 unités sur 3 mois), la stabilité des deux dernières commandes à 2 unités définit la nouvelle ligne de base.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,369 tokens
- **Total**: 2,068 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Product Data**

I'm now carefully reviewing the sales data for the ReBEL chips, specifically the paprika fumé flavor. The most recent data point is from September 9th, showing a sale of 2 units. I'm noting the 21-day interval since the previous sale in August. This will inform my upcoming analysis.


**Calculating Order Prediction**

I've calculated the median interval between sales, about 19 days, and the average, 19.5 days. With the last order on September 9th, I project the next one around September 28th. Since today is September 23rd, the next order is expected within the next five days, which is less than 40 days; thus, "Risque = OUI."


**Confirming Quantity and Analysis**

I've determined that two units should be recommended, mirroring the last two orders. My analysis confirms a regular order cycle of roughly 19 days, but I note a decreasing trend in order size, which influences my confidence in the recommendation. Therefore, I will suggest to only order 2 units of product, since this is consistent with the latest data and will allow us to conserve on inventory.


**Summarizing the Findings**

I've synthesized the analysis and generated a complete JSON output. The primary conclusions are a roughly 19-day ordering cycle, with the next order expected around September 28th. Given recent trends, a quantity of 2 units is recommended, although I maintain a medium confidence due to the decreasing order sizes.




</details>

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 3.5u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

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
Le cycle médian entre les commandes est de 21 jours. La prochaine commande est estimée pour le 30 septembre 2025, soit dans 7 jours, ce qui présente un risque de rupture imminent. Les quantités oscillent entre 2 et 6 unités. La moyenne récente s'établit à 3.5 unités. On arrondit à 4 pour couvrir la tendance à la hausse observée lors de la dernière commande par rapport aux deux précédentes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 672 tokens
- **Output**: 1,421 tokens
- **Total**: 2,093 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Current Trends**

I'm currently focused on the product [REB03], specifically the ReBEL chips. My analysis is centered around sales trends for the "poivre noir 125g" variant. Recent data shows a frequency of 2 units sold bi-weekly, starting from 2025-08-19. Further observation and pattern recognition are underway, considering the most recent data point from 2025-09-09 where 4 units were sold.


**Projecting Future Demand**

The "poivre noir 125g" variant for [REB03] suggests a predicted order date of 2025-09-30, based on a median interval of 21 days, placing the order in 7 days. The risk is marked 'YES'. Regarding quantities, the median and average are close to 3 or 3.5. Considering the most recent increase from 2 to 4 units, I will consider the 2 as the baseline, as well as the median quantity of 3 units.


**Estimating Order Quantity**

I'm now zeroing in on the ideal order quantity for the "poivre noir 125g" variant. Considering the fluctuations and recent data, I've run several calculations. While the median is 3, the mode is 2, and the latest purchase was 4. Given the short timeframe until the next predicted order, I'm leaning toward a baseline of 3 units, but keeping 2 in consideration.


**Determining Final Recommendation**

After reviewing the data, I've confirmed a predicted order date of 2025-09-30, with a 'YES' risk due to the short lead time. I've re-evaluated the quantity, considering both the frequency and the recent trend. While the median is 3, the most frequent purchase size is 2. However, the last order was 4. I'll recommend 3 units, but keep 2 units in mind.




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
- **Pattern temporel**: Cycle régulier d'environ 3 semaines (médiane 19 jours)
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement est stable avec une médiane de 19 jours entre les commandes. La date de commande théorique (28/09) arrive dans 5 jours, ce qui justifie un réapprovisionnement immédiat. La quantité de 4 unités est la plus fréquente et correspond aux deux dernières commandes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,047 tokens
- **Total**: 1,746 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Chip Production Intervals**

I've been analyzing the production intervals for the ReBEL chips. Specifically, I noted the 21-day interval between the August and September 4u production runs. This is important data to consider when predicting future supply.


**Projecting Future Orders**

I've calculated the median interval between ReBEL chip orders, landing on approximately 19 days. Considering the last order was on September 9th, I predict the next one around September 28th. Given today's date of September 23rd, the predicted order is only five days away, indicating a potential risk to the chip supply. I'm suggesting a stable quantity of four units for the next order, with the current trend seemingly stabilized around that level, according to the data.


**Evaluating Order Frequency Risk**

I'm now factoring in the potential risks related to the predicted order date. With the next order estimated for September 28th, just five days from now, and a consistent recent demand of four units, I deem the risk of supply disruption as "yes." My confidence in this evaluation remains high, given the regularity in order patterns.




</details>

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4.4u
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
- **Pattern temporel**: Cycle irrégulier entre 2 et 4 semaines, médiane de 18,5 jours
- **Cycle médian (jours)**: 18.5
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-09-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La fréquence de commande est régulière avec un cycle moyen de 19 jours. La dernière commande datant d'il y a 14 jours, la prochaine est prévue d'ici environ 4 à 5 jours (27-28 septembre), ce qui justifie une commande immédiate. Les quantités oscillent historiquement entre 4 et 6 unités (médiane à 4).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,237 tokens
- **Total**: 1,936 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Product Trajectory**

I'm currently focused on the [REB04] ReBEL chips. My analysis is zeroing in on the bio-thym/romarin125g variant. The sales data for the product shows a drop in sales volume. It's time to evaluate how we can reignite consumer interest, which will involve studying past sales data to find the root cause, and then designing new sales strategies.


**Predicting Sales Cycles**

I've crunched the numbers on the [REB04] ReBEL chips premium variant. Based on sales history, the estimated next order date is around September 27th or 28th. Given the short time since the last order and the historical intervals, I see an imminent order. The median and average sales intervals are close, providing confidence in the prediction. I consider this a risk.


**Assessing Order Imminence**

I've just refined the risk assessment for the premium [REB04] chips, confirming an imminent order, likely within the next five days, by using both the median (18.5 days) and average (19.5 days) purchase intervals. The predicted date is September 27th or 28th. I'm recommending a quantity of 4 units, based on historical sales trends.




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

**✅ Quantité LLM**: 4u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: low)
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

**✅ Quantité LLM**: 4u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 4u (confidence: medium)
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

## False Positives (5)

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
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 5 | Stock prédit: -0.3u (-4j restants) → prédit 5u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T13:04:46.725Z*
