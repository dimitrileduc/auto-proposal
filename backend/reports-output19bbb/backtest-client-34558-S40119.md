# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S40119
- **Date commande** : 2025-11-04 13:47:12
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 41,323 input + 46,486 output = 87,809 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 84.6% | 13 produits prédits, 11 corrects |
| **Rappel** | 73.3% | 15 produits réels, 11 détectés |
| **F1-Score** | 78.6% | Score équilibré global |

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
| **MAE** | 1.09 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 54.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 71.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (11)

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
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec des intervalles s'allongeant (12, 21, 34 jours)
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-04 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: Dernière commande il y a 20 jours alors que la médiane est de 21 jours.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian calculé à 21 jours sur la base des intervalles [12, 21, 34]. La prochaine commande est prévue pour le 2025-11-04 (dans 1 jour). L'historique des quantités [1, 4, 2, 1] présente un coefficient de variation élevé (> 60%), ce qui impose d'utiliser la dernière valeur enregistrée (1u) comme baseline pour la prochaine commande unique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,103 tokens
- **Output**: 1,918 tokens
- **Total**: 4,021 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I've been poring over the sales figures for the RISH kombucha, specifically the basil flavor. I'm focusing on the last few weeks of data. Initial numbers from mid-October show a small purchase. Now I'm working to get a fuller picture of the sales trend over the last month to project future demand.


**Calculating Kombucha Sales Cycles**

I've moved on to calculating the sales cycle for the basil kombucha. Using the provided data, I've determined the median and mean cycle lengths and calculated a Coefficient of Variation of 40.4%, placing it in the "low" confidence category. Based on this, the next order is predicted to be tomorrow, November 4th, which falls within the 30-day horizon.


**Evaluating RISH04 Demand**

I've just finished the calculations for the RISH04 kombucha, basil flavor. The sales cycle shows a "low" confidence level, with the next order predicted for tomorrow, November 4th. Also, I analyzed the quantity data, concluding that the baseline order quantity should be one unit, given the Coefficient of Variation.


**Evaluating Smash Basil Orders**

I've just finalized the analysis of the RISH04 kombucha, basil flavor, focusing on the latest data. My calculations indicate a "low" confidence level due to the variability in sales cycles and quantities. The predicted next order date is tomorrow, November 4th, with a recommended baseline order quantity of one unit.




</details>

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande environ toutes les 3 semaines avec un allongement progressif du cycle
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-04 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 21 jours détecté (intervalles de 12, 21, 34 jours). La prochaine commande est prévue le 2025-11-04, soit dans 1 jour par rapport à la date actuelle. Les quantités sont très stables (moyenne de 1.25), avec une baseline de 1 unité calculée par moyenne tronquée pour stabiliser la prévision. La confiance globale est faible à cause de l'augmentation régulière de la durée entre les commandes (CV temporel de 40.4%).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,103 tokens
- **Output**: 1,800 tokens
- **Total**: 3,903 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Kombucha Sales Data**

I'm analyzing the sales data for RISH kombucha, specifically the BIO - ging embre 330ml variant. Recent transactions show a single unit sold on October 14th, and another on September 10th. The trend appears to be minimal sales in the last few months, with only single units being purchased.


**Calculating Order Prediction**

I've calculated the median interval between orders, which is 21 days. Based on the last purchase on October 14th, I predict the next order around November 4th. Analyzing the coefficient of variation, there's a low confidence level for this prediction.


**Refining Prediction Accuracy**

I've just refined the interval calculations, noting an increasing trend in order timings. My median interval remains 21 days, and the coefficient of variation (CV) for those intervals is approximately 40%. The next order date, based on the last purchase, appears to be November 4th. Analyzing order quantities shows a low CV, and a trimmed mean quantity of 1.


**Assessing Prediction Confidence**

I've delved deeper into the data, calculating various confidence metrics. The quantity CV is 34.6%, and I'm using a trimmed mean of 1 for the baseline quantity. The frequency pattern reveals an approximate three-week ordering cycle. I now classify the overall confidence as "low" due to rising intervals and limited purchase history.




</details>

</details>


<details>
<summary><strong>3. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel très régulier d'environ 34 jours
- **Cycle médian (jours)**: 34
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
DÉTECTION PHASE 1 : Analyse temporelle basée sur 3 dates (08-08, 10-09, 14-10). Intervalles mesurés : 33 jours et 34 jours. Médiane = 33,5 jours (arrondi à 34). CV temporel extrêmement bas (2.1%), indiquant une régularité exceptionnelle. Date prédite : 14-10-2025 + 34 jours = 17-11-2025. Cette date se situe dans l'horizon des 30 prochains jours (dans 14 jours). Risque de rupture : OUI. PHASE 2 : Analyse des quantités [3, 2, 3]. Calcul IQR : Q1=2.5, Q3=3, IQR=0.5. Bornes [1.75, 3.75]. Aucune valeur n'est un outlier. CV des quantités = 21.6% (<30%), utilisation de la médiane. Baseline = 3.0. Pas de données N-1 pour ajuster la saisonnalité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,080 tokens
- **Output**: 1,916 tokens
- **Total**: 3,996 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Performance**

I'm currently focused on the product performance of the NUT08 bar. The data point from October 14th showing 3 units sold is a key piece of information. I'm building out a deeper understanding of the sales trends, aiming to see how this product is performing over the last 30 days.


**Projecting Sales Cycles**

I've moved on to calculating the sales cycle for the NUT08 bar, using the available historical data. I've computed the mean and median cycle length, approximately 33.5 days, with a low coefficient of variation. This allows for a prediction of the next sale date, which falls within the 30-day horizon, and a high degree of confidence.


**Refining Prediction Accuracy**

I've just finished calculating the predicted next sale date and quantity for the NUT08 bar. The predicted date of November 17th is confirmed within the 30-day horizon, indicating a high confidence level due to the low coefficient of variation in the sales cycles. I've also analyzed the units sold to recommend a quantity of 3 units.


**Evaluating Recommendation Confidence**

I've just finished the final calculations, including a confidence assessment, for the NUT08 bar. While I considered a "medium" level of confidence initially based on the quantity variation, I've adjusted to "high" due to the very clear temporal signal. I am recommending a quantity of 3 units, and the predicted next sale date is November 17th.




</details>

</details>


<details>
<summary><strong>4. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 33-34 jours
- **Cycle médian (jours)**: 34
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec un intervalle médian de 34 jours (CV de 2.1% sur les intervalles). La dernière commande ayant eu lieu le 14/10/2025, la prochaine est estimée autour du 17/11/2025, soit dans 14 jours par rapport à la date actuelle. Aucun outlier n'est détecté dans les volumes (2u, 3u), les quantités sont stables. La baseline est calculée sur la médiane des volumes observés car le CV des quantités est faible (21.6% < 30%). L'absence de données N-1 ne permet pas de confirmer une saisonnalité, on maintient donc la baseline à 3 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,079 tokens
- **Output**: 1,497 tokens
- **Total**: 3,576 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Foreseeing Production Needs**

I'm currently calculating anticipated product requirements for the NUT07 bar, looking at historical data from October. Initial sales figures suggest a baseline, and I'm projecting how demand might shift within the next month, considering seasonal variables. This is crucial for optimizing production volume.


**Calculating Delivery Timing**

I've determined a predicted delivery date for the NUT07 bar, leveraging sales data and interval analysis. The calculated next order date is approximately November 17th, with high confidence due to the low coefficient of variation in the sales intervals. This timeframe aligns with our 30-day production horizon, necessitating immediate action.


**Forecasting Demand Refinement**

Now, I'm refining the volume projection for the NUT07 bar. My analysis shows a stable, monthly ordering pattern, with sales fluctuating between 2 and 3 units. Based on historical data, I'm recommending a production order of 3 units, confidently anticipating the next order around November 17th. This forecast considers the inherent predictability of this product.


**Evaluating the Next Order**

I've just run a full cycle analysis for the NUT07 bar, scrutinizing sales intervals and quantities. The calculations point towards a high probability of a new order around November 17th. Analyzing the historical data, I'm recommending we order three units, given the recent stable demand. My confidence level is medium, due to the low count of historical data points, yet the low CV% for sales intervals is very positive.




</details>

</details>


<details>
<summary><strong>5. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières environ toutes les 4 semaines
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-11 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Identification d'un cycle médian de 28 jours à partir des intervalles récents (21 et 34 jours). La prochaine commande est prévue aux alentours du 2025-11-11, soit dans 8 jours, ce qui entre dans l'horizon d'analyse. Les quantités historiques sont stables [2, 2, 3] avec un coefficient de variation faible (24.5%), justifiant l'utilisation de la médiane de 2 unités comme volume de commande prédictif.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,078 tokens
- **Output**: 2,097 tokens
- **Total**: 4,175 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Upcoming Sales Projections**

I'm currently looking at the sales data for the NUT06 bar. I have the production history, and I am reviewing the figures from mid-October, when three units were sold. Now I'm focused on projecting sales for the next 30 days, from November 3rd to December 3rd, taking into consideration past performance.


**Projecting Future Orders**

I'm now calculating the projected sales date based on the existing data. I've determined the intervals between past orders, and calculated the mean and standard deviation of those intervals to provide a confidence interval. The predicted next order date is estimated to be November 11th, and I will now integrate this data.


**Calculating the Next Order**

I've finished the calculations, and I'm quite happy with my findings. The predicted next order is about 8 days away, and it aligns with my expectation. Confidence levels for both the date and the quantity seem satisfactory, and I've noted the irregular frequency pattern. Next, I will refine the sales projections.


**Finalizing the Order Projections**

I've evaluated the entire dataset, and I'm ready to present my final recommendations. The predicted next order is about 8 days away, around November 11th, and I will recommend a quantity of 2 units. The confidence level is medium, and I am noting the irregular frequency pattern. Everything is well, and I have prepared the relevant documentation.


**Refining Order Recommendations**

I'm now putting the finishing touches on my evaluation of the NUT06 bar. I've re-checked all calculations, including interval and quantity analyses. I'm satisfied with my projections: the next order around November 11th, for 2 units, with a medium confidence level. All relevant data is integrated for the final report.




</details>

</details>


<details>
<summary><strong>6. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande environ tous les 21 jours (médiane), avec des intervalles croissants (12, 21, 34 jours)
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-04 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 21 jours détecté (intervalles : 12, 21, 34). La prochaine commande est prévue le 2025-11-04, soit à J+1 du jour actuel, confirmant un risque de rupture imminent dans l'horizon de 30 jours. Les quantités sont concentrées autour de 3u (CV de 34,6%). En utilisant la méthode de la moyenne tronquée pour exclure le minimum (1u) et une valeur maximale (3u), la baseline s'établit à 3u. Absence de données N-1 pour ajustement saisonnier.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,105 tokens
- **Output**: 2,269 tokens
- **Total**: 4,374 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Bar Inventory Fluctuations**

I'm focused on the inventory of the NUT05 bar. Specifically, I see a pattern of 3 units being tracked. I need to understand what's driving this seemingly consistent number. My next step is to look at the other products and search for a reason for the lack of variation.


**Calculating Ordering Frequency**

I've analyzed the historical data for the NUT05 bar. The intervals between orders vary, with an average of roughly 22 days and a coefficient of variation just over 40%, indicating some volatility. Based on this, I'm predicting the next order date and assessing the risk within a 30-day window.


**Projecting Future Inventory Needs**

Based on the latest data, I've calculated a predicted order date for the NUT05 bar as November 4th. The interval between orders is somewhat volatile, with a coefficient of variation around 40%. The next order is, therefore, at risk, falling within the 30-day window. I've also examined the product quantity trends to prepare for this.


**Evaluating Risk Assessment Results**

Now, I've dived into the product data for the NUT05 bar and calculated a predicted order date of November 4th. The analysis flags this as "at risk" because of the 30-day window. I also assessed the inventory quantity trends and estimated the next recommended quantity at 3 units.


**Determining Final Recommendations**

The analysis confirms a predicted order date of November 4th, with the next order at risk, falling within the 30-day window. After several reviews, I've calculated a quantity recommendation of 3 units, considering the data's stable trend and applying the truncated mean method. All dates and values are confirmed.




</details>

</details>


<details>
<summary><strong>7. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 34 jours
- **Cycle médian (jours)**: 33.5
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle temporel extrêmement stable détecté (intervalles de 33 et 34 jours, CV de 2.1%). La prochaine commande est prévue autour du 2025-11-17, soit dans 14 jours, ce qui confirme un risque de rupture dans l'horizon de 30 jours. Les quantités sont faibles et stables (2u, 2u puis 3u). Malgré une légère hausse sur la dernière commande, la médiane des 3 points (2u) est utilisée comme baseline car l'historique est trop court pour confirmer une tendance haussière structurelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,076 tokens
- **Output**: 2,099 tokens
- **Total**: 4,175 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing the Product's Prospects**

I'm currently focused on the NUT03 energy bar. My projections extend a month out, aiming to understand its potential. Initial data indicates 3 units were tracked on October 14th. Now, I'm working to refine my models for sales forecasts, starting from this baseline. I am assessing how recent market trends will affect my projections.


**Forecasting the Next Order**

I've calculated the next potential order date for the NUT03 energy bar. Based on past intervals, I'm predicting a new order around November 16th or 17th. With a 30-day horizon, the predicted date falls within it. Now I am working to quantify the risk.


**Estimating Order Quantities**

I've just calculated the coefficient of variation for the NUT03 energy bar quantities, which came out to 24.8%. This value falls within a mid-range threshold, influencing how I'm setting the baseline quantity. After this, I'm analyzing the trend to inform my final recommendation.


**Calculating Order Frequency**

I've determined the NUT03 energy bar's ordering cycle is roughly 33 to 34 days, with a median of 33.5. This predicts the next order around November 16th or 17th. This forecast suggests the next order falls within a 30-day window, indicating a potential risk.


**Evaluating Sales Data Points**

My most recent work involved refining the statistical analysis for the NUT03 energy bar. I've re-evaluated order dates, calculating intervals and their variations. This confirms the order cycle and strengthens the projected date of the next order. I've finalized my calculations.




</details>

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-11 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 27.5 jours calculé à partir des intervalles récents (21j et 34j). La prochaine commande est estimée pour le 2025-11-11, soit dans 8 jours, ce qui confirme un risque de rupture dans l'horizon de 30 jours. Les quantités sont parfaitement stables à 2 unités par commande, sans aucun outlier détecté.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,076 tokens
- **Output**: 1,535 tokens
- **Total**: 3,611 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Inventory Levels**

I'm currently focused on the NUT02 energy bar, specifically the Super food bio 40g variant. I've got the current date, November 3rd, 2025, locked in. Looking at the next 30 days, I see that on October 14th I had 2 units. I'm now digging further back to track the history of the inventory levels, back to September 1st.


**Calculating Inventory Cycles**

Now, I've got the data points for the NUT02 energy bar and the intervals between inventory checks. I've crunched the numbers and found the median cycle to be around 27.5 days. The coefficient of variation is about 33.4%, indicating a medium level of confidence in this cycle.


**Evaluating Predicted Ordering Date**

I'm now calculating the predicted ordering date. Based on the 27.5 day cycle, I anticipate another order will be needed around November 11th, 2025, which is within my 30-day window. I've also determined there is a medium level of confidence in this prediction due to the coefficient of variation.


**Predicting Next Order Details**

I've determined a predicted ordering date of November 11th, 2025, with an 8-day lead time from today, November 3rd, and a medium confidence level. My analysis shows a stable trend with a median quantity of 2 units. Regular orders are expected, every 28 days.




</details>

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.5u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de 21 jours identifié sur un historique restreint
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-11-12 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique limité à deux commandes distantes de 21 jours (CV non calculable car N=2). La dernière commande datant du 10/09, le cycle théorique suggère une récurrence manquée en octobre, plaçant la prochaine commande probable (3ème cycle) aux alentours du 12 novembre. La quantité recommandée de 3u correspond à la dernière valeur observée et à la moyenne pondérée de la faible tendance haussière (2u vers 3u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,056 tokens
- **Output**: 1,818 tokens
- **Total**: 3,874 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the data for the BUD03 product, focusing on its biological energy drink formulation. My attention is on the mango and passionfruit flavor variant in the 250ml size, and I'm particularly interested in the sales figures from September 10th. The 30-day horizon is also a key factor.


**Calculating Order Intervals**

Now, I'm analyzing the intervals between orders. The sole interval observed is 21 days, calculated from August 20th to September 10th. Given only one interval, the coefficient of variation is uninformative, and the next predicted order date of October 1st has already passed. This raises a red flag; the product might have irregular demand, or a pending order.


**Evaluating Risk Assessment**

I've re-evaluated the risk assessment for BUD03. With only one interval and the predicted order date already passed, irregular demand is strongly suspected. The time since the last order (54 days) versus the previous interval (21 days) indicates a high probability of replenishment within the 30-day horizon, thus a "YES" risk. The confidence level is low due to the limited data.


**Calculating Next Order Date**

I'm now determining the predicted order for the product. The initial calculation suggests a 21-day cycle, indicating an order on October 1st, which has passed. Consequently, I'm adjusting the logic to account for the current date, November 3rd, and the overdue order. The 30-day horizon is central to the risk evaluation.


**Refining Order Predictions**

I am now fine-tuning the order prediction and the risk assessment. Considering the overdue order and the 21-day cycle, I've calculated the next predicted order date as November 12th, falling within the 30-day horizon. The recommended quantity remains at 3, with confidence still low due to the limited historical data. The reasoning is being refined as well.


**Updating Demand Predictions**

I'm now revising the predicted order date, confirming it as November 12th, given the 21-day cycle and the current date of November 3rd. I've re-evaluated the risk as "YES," with a low confidence level. The recommended quantity remains at 3, justified by the average of the limited historical data, and the slight increasing trend.




</details>

</details>


<details>
<summary><strong>10. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle d'un mois environ (33 jours) détecté
- **Cycle médian (jours)**: 33
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-11-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Seulement deux commandes enregistrées avec un intervalle de 33 jours. La dernière commande datant du 2025-09-10, l'occurrence théorique d'octobre (2025-10-13) n'a pas été observée. En appliquant deux cycles de 33 jours à partir de la dernière date (9 sept + 66 jours), la prochaine commande est estimée autour du 15 novembre 2025 (dans 12 jours), ce qui entre dans l'horizon de 30 jours. La quantité est strictement stable à 4 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,051 tokens
- **Output**: 1,765 tokens
- **Total**: 3,816 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating recent sales data**

I'm currently reviewing the sales data for the ReBEL chips. Recent data points from September and August show consistent demand, with 4 units sold on both occasions. I intend to analyze this data in context of other product lines and consumer behavior. This may help forecast future trends and make smarter supply decisions.


**Calculating expected order date**

The current date is November 3rd, 2025. Based on the 33-day interval between the last two orders, I predicted an order on October 13th, which has already passed. Refining the model, I'm now projecting the *next* order for the ReBEL chips on November 15th, 2025. This prediction hinges on the continued stability of the current demand cycle.


**Refining the Predictive Model**

The date has passed for the last predicted order, and I'm analyzing the implications. Given the ReBEL chips' established 33-day cycle, the absence of an order around October 13th is noteworthy. Currently, my prediction leans toward the next order being on November 15th, but the model's confidence remains low given the limited data. I'm considering that the cycle could have shifted, requiring additional refinement.


**Calculating future risk factors**

I'm now deeply analyzing the delay between the expected and actual order dates. The 54-day gap since the last order indicates either a longer cycle, a skipped order, or an irregular pattern. Although the model projects a November 15th order, I must increase the risk evaluation given this discrepancy, and I am weighing the baseline quantity of 4 with the observed trend.


**Calculating order recommendations**

I've finalized my analysis of the ReBEL chips, and the model now recommends a quantity of 4 units, based on the stable demand history of two orders. While a 33-day cycle is suggested, the existing data points lack statistical depth. This affects my confidence and warrants close monitoring, but the 12-day timeframe to the expected order (Nov 15th) gives a "YES" risk profile.




</details>

</details>


<details>
<summary><strong>11. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle court initial de 12j (août), suivi d'une absence prolongée de 75 jours
- **Cycle médian (jours)**: 12
- **Dernière commande**: 2025-08-20
- **Prochaine prédite**: 2025-11-12 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un seul intervalle de 12 jours a été identifié en août 2025. Bien qu'aucune commande n'ait été passée depuis 75 jours, la projection mathématique de ce cycle (7 cycles de 12 jours à partir du 20/08) place la prochaine occurrence théorique au 12/11/2025, soit dans l'horizon des 30 jours. Le risque de rupture est donc techniquement identifié. La quantité recommandée (2u) se base sur la dernière commande observée (2u) et la médiane des quantités (1.5u), car l'historique de 2 points est insuffisant pour une analyse statistique robuste (CV de 47%).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,057 tokens
- **Output**: 3,461 tokens
- **Total**: 5,518 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Sales Data**

I'm analyzing the sales data for MATE01, specifically looking at the 330ml sparkling yerba mate. Recent figures show a slight increase with 2 units sold on 2025-08-20, up from 1 unit on 2025-08-08. I'm keen to understand the growth pattern and identify influencing factors.


**Calculating Product Cycle Time**

I'm now recalculating the predicted next order date for MATE01. Initial calculations based on the 12-day interval suggested a September 1st order, but it's now November 3rd. With 75 days since the last order, I suspect low demand, ad-hoc purchases, or discontinuation. The original 12 day cycle isn't useful for future predictions.


**Reassessing Order Prediction**

I've re-examined the prediction model for MATE01, based on the sparse sales data. The 12-day cycle is clearly inaccurate, with no orders for 75 days. The situation strongly suggests a dormant product or an ad-hoc ordering pattern. I'm focusing on quantifying the "risk" of an order in the next 30 days, given the lack of recent activity and the past cycle time.


**Evaluating Imminent Order Risk**

I'm now determining the probability of an order in the next 30 days. Despite a 12-day cycle, no orders in 75 days suggest low demand or discontinuation. With only two prior orders, the "N-1" method doesn't apply. While the model predicted an order by now, the lack of activity points towards unpredictable behavior or zero risk of ordering soon.


**Calculating Order Probability**

I'm now determining the probability of an order in the next 30 days. Despite a 12-day cycle, no orders for 75 days suggest low demand or discontinuation. With only two prior orders, the "N-1" method isn't applicable. The predicted date has passed, yet the item is overdue by over 6 cycles, indicating potentially dormant product behavior. I must now quantify the order risk in light of these facts.


**Predicting Next Order Details**

I'm now determining the recommended quantity and order timing, given sparse sales data. I'm focusing on the 30-day "risk" window ending December 3rd, comparing the 12-day cycle with the 75-day gap since the last order. My conclusion points to an order on November 12th with a quantity of 2, due to low but increasing sales in August. I estimate the order risk as "yes".


**Concluding Order Analysis**

The final evaluation determined the lack of recent orders, with the predicted date in the past. After a deep dive, I've concluded there's no imminent order risk in the next 30 days and the recommended quantity is zero. This decision is based on the 75-day gap since the last order and the historical data.


**Summarizing Findings and Risks**

I've finalized my analysis of the MATE01 data, predicting a potential order on November 12th with a quantity of two, based on the historical pattern and a recent sales increase. I've considered that the 12-day cycle has not been repeated but have determined an order is still possible. The "risk" assessment is "yes," but confidence is low.


**Summarizing Final Output**

After re-evaluating the data, I'm now setting the order prediction for November 12th. I estimate a "yes" risk, due to the 12-day cycle's recurrence, and predict a quantity of 2 units. The analysis is complete, including justifications for each calculated value.




</details>

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 1u
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 2u
- 2025-08-08 08:17:38: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 1u
- 2025-09-10 06:04:57: 1u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 2u
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-08 08:17:38: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>11. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-20 11:25:33: 2u
- 2025-08-08 08:17:38: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (2)

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
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | Stock prédit: -0.6u (-4j restants) → prédit 3u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | Stock prédit: 1.2u (11j restants) → prédit 2u mais non commandé |


---

## False Negatives (4)

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
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 6 | Stock: 0.5u (5j restants) - filtré pour autre raison |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | Stock: 0.5u (5j restants) - filtré pour autre raison |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | Stock: 0.9u (8j restants) - filtré pour autre raison |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock: 1.7u (24j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T08:11:40.261Z*
