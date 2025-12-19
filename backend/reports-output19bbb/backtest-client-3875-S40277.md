# Rapport Backtest - Client E.L.D. GMBH

## Contexte

- **Client** : E.L.D. GMBH (ID: 3875)
- **Commande réelle** : S40277
- **Date commande** : 2025-11-12 12:18:17
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 9,339 input + 11,037 output = 20,376 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 3 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (3)

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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 96 | 96 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 80 | 80 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 96u vs Médiane: 80u (Réel: 96u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 96u
- 📊 **Baseline calculée**: 96u
- 📊 **Médiane historique**: 80u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 16u (16.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 96u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de 14 jours stabilisé après irrégularité en août
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle régulier de 14 jours a été identifié (derniers 3 intervalles identiques à 14j). La prochaine commande est prévue pour le 17/11/2025, soit dans 6 jours (risque de rupture détecté). L'analyse des quantités montre une base récurrente à 80u avec des pics sporadiques (128u, 192u) qui ne sont pas statistiquement des outliers (IQR=48, limite haute=200). Le calcul de la baseline utilise une moyenne tronquée (excluant min 80 et max 192) pour obtenir 96u, permettant de couvrir la demande de base tout en anticipant les variations de volume constatées sur ce produit.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,471 tokens
- **Output**: 2,884 tokens
- **Total**: 5,355 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Quantities**

I'm analyzing the production quantities for the MF0042 product, specifically the tomato and bear garlic spread. Examining the recent three-month history, I see production runs on various dates in October and November, with some fluctuations in units produced. I am particularly curious about the 192-unit run in early October.


**Projecting Future Production Runs**

I've calculated the median production cycle to be 14 days, and the predicted next production date as November 17th. This is based on examining the intervals between the recent production runs of the MF0042 product. The coefficient of variation is 45.6%, indicating a "low" confidence in this prediction.


**Assessing Production Intervals**

I'm now diving deeper into the intervals between production runs. While the initial cycle prediction seemed uncertain, recent data points suggest a consistent 14-day cycle. However, the coefficient of variation remains "low," and I'm further examining the quantity data, particularly the 192-unit and 128-unit runs.


**Refining Quantity Predictions**

I'm now recalculating the quantity forecast. Based on trimmed mean, the initial prediction is 96 units, however, recent production favors 80u. Given a CV close to 40%, the calculation leans toward an output of 80 units for the next production cycle, which is within the next week.


**Revisiting Quantity Decisions**

I'm now rethinking the quantity forecast. While the initial calculation suggested 96 units, the recent orders consistently delivered 80 units. Reviewing the historical data, including the N-1 values, I'm leaning toward recommending 80 units for the upcoming production run, given the stable 14-day cycle.


**Calculating the Final Recommendation**

I'm now putting together the final recommendation. Despite the trimmed mean suggesting 96 units, I'm leaning towards 80 units based on the latest orders and consistent 14-day cycle. The statistical analyses point to a medium confidence level. The final output is nearly ready.


**Synthesizing Recommendations**

I've now reached the final stages of the analysis. Despite the trimmed mean of 96 units, the recent production history strongly favors an 80-unit order, matching the latest trends. The statistical confidence is considered medium. I am preparing the final JSON output.




</details>

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 80u
- 📊 **Baseline calculée**: 80u
- 📊 **Médiane historique**: 80u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 80u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle médian de 28 jours avec accélération récente (14 jours)
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-12-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 128u, 32u

**🧠 Raisonnement LLM:**
Le cycle de commande récent montre une accélération (intervalles de 34, 28 puis 14 jours) avec une médiane calculée à 28 jours. La prochaine commande est prévue aux alentours du 2025-12-01, soit dans 20 jours (Risque = OUI). Quant au volume, les trois dernières commandes sont stables à 80u, dépassant la médiane N-1 (64u), confirmant une tendance à la hausse stabilisée. Les valeurs 128 et 32 identifiées en N-1 sont écartées comme outliers par la méthode IQR.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,443 tokens
- **Output**: 3,836 tokens
- **Total**: 6,279 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the sales data for the MF0044 product. Recent history shows consistent sales of 80 units in October and early November. Considering this, I am now focusing on determining if the current trend is consistent with previous years, as well as if there are any external factors that may have influenced this.


**Comparing Sales Patterns Now**

I'm now diving into the sales intervals to spot patterns. Recent data reveals a bi-weekly cycle, followed by a longer gap. Last year's data presents a more consistent bi-weekly trend. I'm focusing on the reasons for this fluctuation, and whether seasonal variations play a role.


**Assessing Cycle Time Variance**

I've calculated the median cycle time for recent orders, which is 28 days, showing a clear shift compared to last year. The coefficient of variation is 40.5%, placing it in the medium risk category. My next step will be to confirm the predictions, now that I have a date and risk level.


**Predicting Future Demand**

The median cycle time, recently calculated at 28 days, prompts me to estimate the next order date. Given the last order on 2025-11-03, I forecast a December 1st order. However, given the current date of November 11, the prediction is within 20 days, and the risk level appears elevated.


**Calculating a New Prediction**

I'm now recalculating the predicted order date, considering the bi-weekly pattern observed recently. Given the 14-day interval, and a recent order on November 3rd, the new prediction shifts to November 17th. This makes the risk level elevated.


**Confirming Prediction Timing**

I'm now cross-referencing my calculations, particularly the predicted order date. The median interval of 28 days puts the next order on December 1st, 2025. Given the current date, the prediction is within 20 days.


**Finalizing the Forecast**

I'm now integrating all analyses to provide a final recommendation. The prediction for the next order date remains December 1st, but the bi-weekly pattern raises a flag. I recommend ordering 80 units based on stable recent sales and the observed trend.


**Calculating a Final Estimate**

I'm now consolidating all the data points, including the recent bi-weekly frequency. Despite that trend, the median interval points towards a December 1st order. Given that and my risk assessment, I will recommend ordering 80 units, while accounting for the bi-weekly history.




</details>

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 48u vs Médiane: 56u (Réel: 48u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 48u
- 📊 **Baseline calculée**: 48u
- 📊 **Médiane historique**: 56u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 8u (16.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 48u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 20 jours
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-23 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle médian de 20 jours est identifié sur l'historique global, bien que la régularité soit faible (CV élevé). La prochaine commande est prévue pour le 2025-11-23, ce qui tombe dans l'horizon de 30 jours (jours restants : 12). Concernant le volume, aucune anomalie n'est détectée (IQR [8, 72]). On observe une tendance haussière nette : les commandes sont passées d'une base de 32u l'année dernière à 48u sur les commandes récentes de fin 2025. La prédiction se base sur cette nouvelle baseline stable de 48u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,378 tokens
- **Output**: 3,096 tokens
- **Total**: 5,474 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Timeline**

I'm currently tracking the product lifecycle for MF Delikatess Mayonnaise, specifically the 250ml DE variant. The focus is on a 30-day horizon from November 11th, 2025. I've noted a prior data point from November 3rd and now I'm preparing to evaluate the progress from the current date's information.


**Calculating Order Frequency**

I've just begun calculating the intervals between orders for MF Delikatess Mayonnaise, using both recent and N-1 data. The initial findings reveal a range of order frequencies. It appears that the recent order history has a wide gap. I'm now focusing on calculating the median cycle from N-1 data for a more robust estimate.


**Predicting Next Order Date**

I've determined the next predicted order date for the mayonnaise to be November 23rd, 2025, using a median interval of 20 days calculated from historical data. The high coefficient of variation suggests a low confidence in the prediction. I am also calculating the outlier in quantities for further analysis.


**Refining Prediction Details**

I have completed the calculations for order frequency, now including recent and N-1 data. My analysis shows a median interval of 20 days. Also I have calculated the trend in recent orders, finding a clear increase in quantity. The next predicted order date remains November 23rd, with the "RISQUE = OUI" flag.


**Refining Order Quantity**

I've now analyzed the order quantities, and after sorting and calculating the IQR, I found no outliers. However, there's a strong seasonality impact, specifically a 50% increase compared to N-1 data. My baseline for the next order is therefore 48 units, the same as recent orders. The predicted next order is 2025-11-23, confirmed within the 30-day horizon, flagged as "RISQUE = OUI".


**Calculating the Baseline Quantity**

I've just finished the analysis of the available data, focusing on the baseline quantity for the next order. I've confirmed no outliers after evaluating the IQR. There's a 50% increase in quantities compared to N-1 data, which I've classified as strong seasonality. Given these recent trends, and the quantity levels, I'll be recommending 48 units. The order is set to 2025-11-23, within the 30-day window, and "RISQUE = OUI" is flagged.


**Finalizing Recommendations**

I have now reviewed all the calculations and data. The median cycle is 20 days, but with significant variability, suggesting low initial confidence. Quantities show no outliers, but a clear 50% increase from N-1. The predicted next order is November 23rd, 2025, with a "RISQUE = OUI" flag, and a recommendation of 48 units.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 80u
- 2025-10-20 09:34:51: 80u
- 2025-10-06 12:04:21: 192u
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 128u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 12:12:52: 80u
- 2024-10-15 07:31:18: 80u
- 2024-09-30 08:48:16: 80u
- 2024-09-18 06:24:53: 80u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 80u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 48u
- 2024-06-17 11:39:54: 192u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 48u

**✅ Quantité LLM**: 96u (confidence: medium)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 80u
- 2025-10-20 09:34:51: 80u
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 12:12:52: 64u
- 2024-10-15 07:31:18: 64u
- 2024-09-30 08:48:16: 64u
- 2024-09-18 06:24:53: 64u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 64u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 64u
- 2024-06-17 11:39:54: 64u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 32u

**✅ Quantité LLM**: 80u (confidence: medium)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 48u
- 2025-09-22 10:01:10: 48u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 12:12:52: 32u
- 2024-10-15 07:31:18: 32u
- 2024-09-30 08:48:16: 48u
- 2024-09-18 06:24:53: 32u
- 2024-08-19 09:44:26: 32u
- 2024-07-30 11:20:19: 32u
- 2024-07-15 11:14:37: 48u
- 2024-06-17 11:39:54: 64u
- 2024-05-16 07:53:36: 32u
- 2024-05-06 12:20:45: 64u
- 2024-04-16 06:52:33: 32u
- 2024-01-29 09:49:34: 48u

**✅ Quantité LLM**: 48u (confidence: medium)
**📊 Quantité Réelle**: 48u

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
| [MF0062] ​MF Tarti Betterave rouge | 48 | Stock: 28.6u (10j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T08:05:02.759Z*
