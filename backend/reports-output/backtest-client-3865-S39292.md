# Rapport Backtest - Client REWE MARKT GMBH - WEST

## Contexte

- **Client** : REWE MARKT GMBH - WEST (ID: 3865)
- **Commande réelle** : S39292
- **Date commande** : 2025-09-23 06:18:30
- **Date cutoff système** : 2025-09-22 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 23,821 input + 72,941 output = 96,762 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.0% | 20 produits prédits, 4 corrects |
| **Rappel** | 80.0% | 5 produits réels, 4 détectés |
| **F1-Score** | 32.0% | Score équilibré global |

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
| **MAE** | 1.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 44.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (4)

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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 5.5u
- 📊 **Médiane historique**: 5u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel régulier identifié (médiane 14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec une médiane de 14 jours. La commande prévue pour le 16 septembre n'a pas encore été passée au 22 septembre, indiquant un risque de rupture imminent (overdue). Les quantités en 2025 sont stables entre 5 et 6 unités, ce qui est supérieur à l'historique N-1 (3u). On recommande 5 unités basées sur les deux dernières commandes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,021 tokens
- **Output**: 1,791 tokens
- **Total**: 2,812 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I've been examining the recent sales data for JF001, specifically the JF MAYONNAI TRUFF ES 250ML WECK product. There's been a steady, albeit small, increase in units sold over the past few weeks, with a notable jump on August 11th. I'm focusing on the sales intervals to identify any emerging trends or patterns.


**Assessing Order Prediction Accuracy**

I've re-evaluated the sales cycle, and the predicted order date of September 16th has passed. This warrants immediate action, considering the product's sales trends and recent volume of 5u-6u. The current delay is unusual, potentially indicating a missed order. The risk level is indeed high; I need to investigate further.


**Finalizing Order Recommendation**

I've incorporated the sales data, the cycle details, and the product characteristics. Based on the analysis, I'm ready to propose an order of 5 units, with a high degree of confidence. The predicted date was missed, so action is now required.


**Revising Recommendation Parameters**

I've re-examined the key parameters. The order is overdue, given the product's regular cycle. Considering recent sales patterns, I've confirmed a recommended order quantity of 5 units. I've re-evaluated the reasoning and added that 2025 quantities are superior to 2024.




</details>

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 5u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 5u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 3u (150.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande cyclique régulière tous les 22-27 jours
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement stable avec une médiane de 22 jours. La dernière commande datant du 2 septembre, la prochaine est prévue autour du 24 septembre (sous 48h). Bien que les volumes 2025 montrent une légère érosion (6u en juillet, 5u en août, 4u en septembre), le niveau de demande reste bien supérieur à celui de l'année N-1. La médiane des commandes récentes (5u) est retenue pour couvrir le besoin imminent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 965 tokens
- **Output**: 1,651 tokens
- **Total**: 2,616 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Production Volumes**

I'm currently working on the JF012 - JF SAUCE BEAR NAISE 250ML WECK product, specifically its supply chain needs. I'm focusing on production forecasts, looking at historical demand, to anticipate requirements for the September 22nd, 2025 order. Initial data suggests a fluctuating demand pattern, with significant volume variations observed in prior periods.


**Calculating Order Imminence**

I've determined a median order interval of 22 days based on historical data for the JF012 product. Given the last order on September 2nd, 2025, the next is predicted for September 24th, 2025. With today being September 22nd, I calculate a two-day window. The risk of supply chain rupture within 30 days is **YES**, due to the predicted order date.


**Evaluating Quantity Predictions**

I'm now focusing on calculating the baseline quantity for the upcoming order. Considering the recent volume data, specifically the period from July to September 2025, I've determined a median order volume of 5 units. There's not enough to justify an extra buffer for this order, given the consistency.


**Assessing Demand Patterns**

I'm now consolidating the data, reviewing order intervals, and assessing the trend. The cycle appears consistent, around 22 days, with a predicted order for September 24th. Quantities are also stable, 4-6 units, making a baseline of 5 units. The risk remains YES, due to the order's imminence. My confidence is high.




</details>

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Pattern temporel**: Cycle régulier d'environ 18 jours
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande moyen est de 18 jours, ce qui place la prochaine commande théorique au 20 septembre. Étant donné que nous sommes le 22 septembre, une commande est imminente. La médiane des quantités commandées sur les 3 derniers mois est de 2 unités, ce qui constitue une base fiable malgré la fluctuation entre 1 et 4 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 965 tokens
- **Output**: 2,165 tokens
- **Total**: 3,130 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Sales Data**

The initial data point from September 2nd, 2025, shows a unit sale. Prior to that, I see a pattern of unit sales on Tuesdays, with the most recent sales indicating a slight uptick in the past few months. I'm now trying to correlate these sales trends with external factors.


**Projecting Future Demand**

I've calculated the median cycle for the product JF009, based on sales data. The last order date was September 2nd, 2025, and my projection, using an 18-day cycle, suggested a sale around September 20th. Given that it's now September 22nd, I see a high risk of stockout.


**Calculating Order Quantity**

I've determined the median quantity to be 2 units, considering recent sales data. Analyzing seasonality, I don't see any significant trends to adjust this number. However, since the last order was for 1 unit, and the same was true in the corresponding period last year, I'm now inclined to suggest an order of 1 unit.


**Determining the Order Quantity**

My analysis now focuses on the quantity to order. While the median quantity across recent orders is 2, the last order was for 1 unit, and a similar trend appeared last year. Given these factors, I've re-evaluated and will order 2 units, maintaining stock coverage, as suggested by the product's small volume and the confidence in the established ordering pattern.


**Recommending Final Order**

Given the product's small volume, the median quantity of 2 units seems appropriate, especially since the order is overdue based on the calculated cycle. My confidence is high given the regular ordering pattern. Therefore, I'm recommending an order of 2 units to ensure coverage.




</details>

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
- **Pattern temporel**: Commandes régulières avec un cycle de 8 à 27 jours
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 18 jours. La dernière commande datant du 2 septembre, la prochaine était théoriquement attendue autour du 20 septembre. Nous sommes le 22 septembre, le risque de rupture est donc immédiat. Concernant la quantité, bien qu'un pic à 3 unités ait été observé en août, le volume est revenu à 1 unité en septembre, ce qui correspond à l'historique N-1 et à la médiane globale. Conformément à la règle des petites quantités, on privilégie la médiane de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 967 tokens
- **Output**: 1,324 tokens
- **Total**: 2,291 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Quantity Fluctuations**

I'm currently focused on the product [JF019] JF SAUCE AIOLI PEST O 250M WECK. Analyzing recent data, the quantity shifted from 1u on 2025-09-02, to 3u on 2025-08-19, and then another 3u on 2025-08-11. The intervals between these transactions seem important.


**Evaluating Replenishment Timing**

I've calculated the median interval between orders, settling on 18 days. Based on this, I predicted a new order around September 20th. Today is September 22nd. Given the last order was on September 2nd, I diagnose this as overdue. Risk is deemed "YES" due to the delay, though within a 30-day window.


**Assessing Order Quantities**

I've examined the quantity history for [JF019], including the 2024 data. The median quantity is consistently 1u. While a brief August spike to 3u occurred, September has returned to the 1u baseline. My recommendation is to order 1u, with high confidence in the data.


**Synthesizing Risk and Action**

Now, I'm integrating the risk assessment with the quantity decision. Given the overdue replenishment (Sep 20th passed), coupled with a stable 1u baseline, and the overall pattern, I'm recommending an immediate order of 1u. My confidence remains high due to the consistent data.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 5u
- 2025-08-19 08:35:46: 5u
- 2025-08-11 13:20:39: 5u
- 2025-08-11 10:59:30: 1u
- 2025-07-15 09:34:20: 6u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 3u
- 2024-08-07 13:24:40: 2u
- 2024-06-11 07:20:33: 3u
- 2024-06-04 08:24:14: 1u
- 2024-06-04 08:21:47: 1u

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 4u
- 2025-08-11 13:20:39: 3u
- 2025-08-11 10:59:30: 2u
- 2025-07-15 09:34:20: 6u
- 2025-06-23 06:45:41: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 2u
- 2024-08-07 13:24:40: 2u
- 2024-07-05 08:39:50: 1u

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 1u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 4u
- 2025-07-15 09:34:20: 2u
- 2025-06-23 12:14:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 1u
- 2024-06-11 07:20:33: 1u
- 2024-06-04 08:24:14: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 1u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 3u
- 2025-07-15 09:34:20: 1u
- 2025-06-23 12:14:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 1u
- 2024-08-07 13:24:40: 1u
- 2024-06-11 07:20:33: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (16)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.7u (-5j restants) → prédit 2u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: -1.0u (-6j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 1.0u (9j restants) → prédit 2u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: 2.1u (42j restants) → prédit 2u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Stock prédit: 1.4u (43j restants) → prédit 2u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Stock prédit: 0.6u (8j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | Stock prédit: -1.4u (-13j restants) → prédit 4u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-4j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Stock prédit: -0.5u (-3j restants) → prédit 3u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |


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
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | En rupture (-53j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T14:50:45.211Z*
