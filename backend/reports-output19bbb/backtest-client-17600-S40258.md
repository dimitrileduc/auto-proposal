# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S40258
- **Date commande** : 2025-11-12 08:36:42
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 31
- **Tokens**: 67,474 input + 116,523 output = 183,997 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 15.8% | 19 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 26.1% | Score équilibré global |

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
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | 200 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV311] LV BIO Tartin'apero Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de réapprovisionnement court mais fluctuant avec une médiane de 13 jours
- **Cycle médian (jours)**: 13
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-16 (dans 5j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: Passage d'un cycle de 6 jours à 20 jours sur les dernières observations, la commande du lundi 2025-11-03 dévie du rythme hebdomadaire précédent.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Synthèse : Un cycle médian de 13 jours a été identifié malgré une forte variabilité temporelle (CV > 40% en phase 1). La date de commande prédite (16/11/2025) tombe dans l'horizon des 30 jours, confirmant le risque de rupture. Côté quantité, l'historique récent est stable avec un CV de 11.9% et aucune valeur aberrante détectée (IQR 84). La médiane des quantités récentes (434u) est retenue comme baseline. Bien que la tendance soit légèrement croissante par rapport au mois dernier et à N-1, aucune saisonnalité forte n'est validée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,192 tokens
- **Output**: 1,955 tokens
- **Total**: 4,147 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Inventory**

I'm currently tracking the LV BIO Tartin'apero Basilico SDP 200 ml product. The current date is November 11th, 2025, and I'm focused on a 30-day horizon, up to December 11th. Recent data from November 3rd shows a quantity of 434 units. I need to analyze this further to project future needs.


**Projecting Order Timing**

I'm calculating the time between orders using the available data. The median cycle time appears to be 13 days, but there's high variability. Considering the order on November 3rd, I've projected the next order date to be November 16th. This puts it within the next 30 days. My confidence level on this, considering the high variability, is currently low.


**Refining Inventory Analysis**

I'm now diving deeper into the quantity data, using the interquartile range to define acceptable boundaries. The quantity CV is low, about 12%, suggesting stable demand. I've also checked for seasonality using N-1 data, but the comparison is inconclusive. It seems like the demand has a slight upward trend. My confidence is now medium.


**Refining Cycle Time Assessment**

I've examined the time between orders, noting significant variability. The median cycle is 13 days, but the coefficient of variation is high, at 76%. This irregularity makes predicting the next order date, which I've estimated as November 16th, uncertain. Considering this, my confidence in this prediction is low.


**Confirming Data Integrity**

I'm now verifying the format and structure of the data I'm working with. Ensuring the date formats are consistent and the JSON is valid. Everything looks good so far. The predicted order date, November 16th, is confirmed and consistent with expectations.




</details>

</details>


<details>
<summary><strong>2. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire strict de 6 jours identifié sur la période récente
- **Cycle médian (jours)**: 6
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 864u, 4u

**🧠 Raisonnement LLM:**
Un cycle très régulier de 6 jours a été observé en octobre avec une quantité constante de 434u (CV=0% sur les derniers points). Bien que l'historique présente un trou entre août et octobre, la reprise d'octobre montre une stabilité parfaite. En projetant ce cycle de 6 jours depuis la dernière commande du 20/10/2025, la prochaine échéance après la date actuelle (11/11) tombe le 13/11. Les valeurs d'août (864 et 4) sont traitées comme des outliers car elles ne correspondent pas au pattern de commande actuel.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,140 tokens
- **Output**: 4,445 tokens
- **Total**: 6,585 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Initial Inventory Levels**

I'm currently focused on the initial inventory levels for the LV BIO Tartin'apero Avocat 180g product. I've noted a consistent 434 units on three separate dates in October. My current horizon extends 30 days, so I'm keen to see how these numbers evolve.


**Calculating Inventory Intervals**

My analysis is now concentrated on the intervals between inventory observations for the Tartin'apero Avocat product. I've calculated a median interval of 6 days based on recent data and a high coefficient of variation, indicating significant variability. The most recent pattern points to a 6-day cycle, projecting a potential observation around October 26th.


**Assessing Order Frequency Risk**

I've determined the product is overdue for an inventory observation, and the predicted next date, based on the 6-day cycle, is November 13th, within the 30-day horizon. The high Coefficient of Variation initially suggested low confidence, yet the recent perfect 6-day intervals raise the question of resumed activity.


**Evaluating Current Demand Levels**

I'm now assessing the current demand for the LV BIO Tartin'apero Avocat product, concentrating on the unit quantities. I've analyzed the inventory data, discarding the outliers of 4u and 864u. This leaves a solid baseline of 434 units, observed consistently. The Coefficient of Variation now reflects zero, bolstering my confidence in the median value. The baseline demand is thus perfectly consistent at 434.


**Refining Prediction Accuracy**

I'm now calculating the precise date for the next expected observation, based on the identified 6-day cycle. My calculations pinpoint November 13th, falling within my 30-day horizon, indicating the product is overdue. The consistency of the recent 434-unit baseline further reinforces my confidence.


**Calculating Future Observations**

My focus has shifted to projecting the next expected inventory observation, as the product is overdue. The established 6-day cycle indicates November 13th, within my 30-day window, but recent history suggests this is an estimate.


**Confirming Prediction Results**

My calculations for the next expected observation date have been validated, landing on November 13th, which is within the 30-day forecast horizon. This is based on the 6-day cycle. The product is overdue for an observation.


**Confirming Predicted Observations**

The final date, according to the 6-day cycle, remains November 13th, confirmed within the 30-day window, indicating a high-risk scenario. The consistent 434-unit baseline reinforces the accuracy of my analysis and the product's overdue status.


**Summarizing Final Analyses**

I've finalized my analysis, providing the final structure, including the JSON formatted output. I'm confident in the medium-level confidence rating, despite the past occurrence. I've re-checked the calculations for the predicted observation and the inclusion of outliers. The predicted date is confirmed.


**Synthesizing Final Outputs**

I'm now creating the final JSON output, ensuring all required fields are accurately populated. I've double-checked my calculations, considered the nuances of the data, and included the correct outlier detections. The final structure is complete, and the confidence level is set.


**Formulating JSON Outputs**

I am now structuring the JSON response, incorporating the final calculations. My output incorporates the established 6-day cycle for the 2025-11-13 prediction. I'm satisfied with the "medium" confidence level after reviewing all calculations.




</details>

</details>


<details>
<summary><strong>3. [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml</strong> - LLM: 200u vs Médiane: 200u (Réel: 200u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 200u
- 📊 **Baseline calculée**: 200u
- 📊 **Médiane historique**: 200u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 200u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes fréquentes à intervalles irréguliers avec volume fixe
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-11-01_overdue_checked_at_2025-11-11_therefore_imminent_for_window_period_30d_as_2025-11-11_plus_24_equals_2025-12-05_so_either_late_or_next_coming_soon 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 400u, 600u

**🧠 Raisonnement LLM:**
Le cycle de commande médian est de 24 jours sur l'historique étendu. La dernière commande datant du 2025-10-08 (il y a 34 jours), une commande est statistiquement attendue immédiatement pour couvrir les 30 prochains jours. Les quantités sont remarquablement stables à 200u (4 commandes récentes identiques), les pics historiques à 400u et 600u étant identifiés comme des outliers (IQR = 0 sur les 4 dernières livraisons).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,398 tokens
- **Output**: 2,462 tokens
- **Total**: 4,860 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Production Volumes**

I've been calculating production volumes for LV 312 "CLASSIQUE" WECK Truffle Mayonnaise, analyzing past data. The 2025-11-11 batch with a 30-day window is the current focus. I see a need to determine the demand and plan accordingly. Previous batches from 2025 and 2024 are being reviewed to establish a trend.


**Examining Order Intervals**

I'm now diving into the intervals between orders to assess the risk of stockouts. Analyzing the data, I've calculated the time gaps between orders. It appears orders generally occur within 15-30 day intervals.  The current gap is 34 days since the last order, prompting me to evaluate if a new order is imminent.


**Evaluating Stock Levels**

I'm now focusing on calculating the coefficient of variation (CV) for the intervals between orders to gauge predictability. Recent data suggests high variability, implying a "low" confidence level for predicting the timing. Analyzing the time since the last order indicates that a new one is likely imminent. The next step is quantity prediction.


**Predicting Order Quantity**

I'm now calculating the typical quantity, using recent and prior order data. After removing outliers, I found a clear consistency in orders of 200 units, indicating a stable demand trend. A baseline of 200 units is appropriate, with a high confidence level due to the low variability.


**Synthesizing Findings & Results**

I've just finished the analysis, and the data indicates we're overdue for an order. The order intervals are inconsistent, but the average is about 24 days. Given the last order on 2025-10-08, we're 34 days past that. Meanwhile, the order quantity appears to be consistently 200 units, with almost zero variability. I recommend an order for 200 units.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV311] LV BIO Tartin'apero Basilico SDP 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 11:51:44: 434u
- 2025-10-14 13:50:03: 350u
- 2025-10-08 11:33:10: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-10 12:10:09: 350u
- 2024-08-07 07:54:26: 200u
- 2024-04-24 08:56:28: 350u
- 2023-12-19 08:25:50: 350u

**✅ Quantité LLM**: 434u (confidence: low)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>2. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:56:31: 434u
- 2025-10-14 13:50:03: 434u
- 2025-10-08 11:33:10: 434u
- 2025-08-20 10:22:31: 864u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 434u (confidence: medium)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 200u
- 2025-09-10 09:37:56: 200u
- 2025-09-04 09:10:58: 200u
- 2025-08-19 07:26:59: 200u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 15:21:52: 200u
- 2024-10-10 12:10:09: 200u
- 2024-09-11 07:42:30: 600u
- 2024-08-08 07:00:55: 200u
- 2024-06-11 08:46:37: 200u
- 2024-04-24 08:56:28: 200u
- 2024-04-02 13:39:05: 200u
- 2024-03-13 08:07:55: 200u
- 2024-03-06 09:03:21: 200u
- 2023-12-19 08:25:50: 400u

**✅ Quantité LLM**: 200u (confidence: medium)
**📊 Quantité Réelle**: 200u

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
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 200 | Stock prédit: 44.4u (2j restants) → prédit 200u mais non commandé |
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 267 | Stock prédit: 41.5u (2j restants) → prédit 267u mais non commandé |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 350 | Stock prédit: -320.5u (-16j restants) → prédit 350u mais non commandé |
| [LV356] LV SET 3 X 135G trisauces  SDP | 512 | Stock prédit: 158.3u (43j restants) → prédit 512u mais non commandé |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | Stock prédit: -130.7u (-6j restants) → prédit 434u mais non commandé |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Stock prédit: 2.4u (0j restants) → prédit 400u mais non commandé |
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 200 | Stock prédit: -95.5u (-10j restants) → prédit 200u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: -207.3u (-10j restants) → prédit 434u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -122.9u (-25j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 233 | Stock prédit: -284.3u (-39j restants) → prédit 233u mais non commandé |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Stock prédit: -266.7u (-25j restants) → prédit 434u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 350 | Stock prédit: 19.2u (3j restants) → prédit 350u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 256 | Stock prédit: -157.3u (-25j restants) → prédit 256u mais non commandé |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Stock prédit: -266.7u (-25j restants) → prédit 434u mais non commandé |
| [LV306] LV BIO Tartin'apero Olives Vertes SDP200 ml  | 350 | Stock prédit: 3.6u (0j restants) → prédit 350u mais non commandé |
| [LV309] LV BIO Tartin'apero Lentilles curry SDP 200ml | 350 | Stock prédit: 88.4u (28j restants) → prédit 350u mais non commandé |


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
| [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie) | 434 | Stock: -4.0u (0j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T08:08:53.030Z*
