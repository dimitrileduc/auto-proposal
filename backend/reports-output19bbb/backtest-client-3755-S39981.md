# Rapport Backtest - Client BVBA DRINK & FOOD

## Contexte

- **Client** : BVBA DRINK & FOOD (ID: 3755)
- **Commande réelle** : S39981
- **Date commande** : 2025-10-29 07:28:14
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 5
- **Tokens**: 11,534 input + 18,488 output = 30,022 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
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
| [PF0078] FILOU CHASSEUR 5 L | 80 | 80 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 17-18 jours
- **Cycle médian (jours)**: 17.5
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes récentes est de 17,5 jours avec une faible variation (CV≈20%). En projetant ce cycle depuis la dernière commande du 14 octobre 2025, la commande suivante est attendue autour du 31 octobre ou 1er novembre 2025, soit dans 4 jours. La quantité commandée est strictement stable à 80u sur les 5 dernières itérations, confirmant une demande de fond constante.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,461 tokens
- **Output**: 2,319 tokens
- **Total**: 4,780 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Product Trajectory**

I'm currently focused on the product [PF0078] FILOU CHASSEUR 5 L, observing its recent sales. I see a dip on October 14th with 80 units sold. Now, I'm analyzing the 30-day sales projection, anticipating trends through November 27th.


**Calculating Sales Velocity Metrics**

I'm now calculating sales velocity metrics. Analyzing the intervals between sales dates, I've computed a median of 17.5 days. The mean interval is 18.75 days. The 25-day interval stands out; further investigation is warranted for that outlier.


**Forecasting Future Deliveries**

I'm now generating a forecast. Based on the calculated median interval, I predict the next order around October 31st or November 1st. There's a high degree of confidence in this projection due to the consistent sales volume and low coefficient of variation in the recent sales patterns, though one interval is slightly off.


**Calculating Order Frequency**

I've examined the product's sales patterns, focusing on order intervals.  The median interval between orders is 17.5 days, a key factor.  I've also observed the sales volume, which has been consistently 80 units. This is helping me form a solid projection.


**Assessing Order Stability**

I'm now consolidating my findings. I've re-evaluated the sales data, confirming a consistent 80-unit order volume. I'm satisfied that seasonality isn't affecting the predictions. My confidence remains high for the projected order timing and volume, which is based on the 17.5-day interval and the 80-unit orders.




</details>

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
- **Pattern temporel**: Cycle régulier d'environ 25 jours
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
DÉTECTION PHASE 1 : Analyse des intervalles récents [25, 22, 28] jours. Médiane = 25 jours. Écart-type = 3, Moyenne = 25, d'où un Coefficient de Variation (CV) de 12% indiquant une haute régularité temporelle. Prochaine commande prévue : 14/10/2025 + 25 jours = 08/11/2025 (soit dans 11 jours), confirmant le risque de rupture dans l'horizon de 30 jours. PRÉDICTION PHASE 2 : Données récentes [1, 3, 3, 1]. Q1=1, Q3=3, IQR=2, Barrière haute=6. Aucun outlier détecté. CV des quantités = 57.5%, ce qui impose l'usage de la Moyenne Tronquée pour la baseline (exclure un '1' et un '3'). Baseline = (1 + 3) / 2 = 2.0. Impact saisonnier N-1 jugé 'weak' car les volumes (1-3u) sont comparables à l'année dernière (1-2u) sur la même période.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,391 tokens
- **Output**: 2,176 tokens
- **Total**: 4,567 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Recent Sales Trends**

I'm currently focused on the sales data for the FILOU CURRY KET CHUP product. I've noted a recent order from the 14th of October and an older one from September. My immediate task is to analyze these orders, particularly the recent one, and forecast demand within the 30-day horizon. I'm keen to spot any patterns.


**Projecting Future Orders**

I'm now diving into the intervals between orders to refine my demand forecast. The median and mean interval between recent orders is 25 days, with a standard deviation of 3 and a coefficient of variation of 12%. I'm correlating this with past data to make a prediction.


**Calculating Order Quantities**

I'm now assessing the order quantities, which range from 1 to 3 units. Using box plots, the IQR is 2. The data exhibits a CV of 57.5%, prompting the use of a truncated mean. I'll need to remove the minimum and maximum values for greater accuracy, and I am re-assessing and re-evaluating the analysis.


**Predicting Future Demand**

The final phase, where I'm drawing my conclusion, is taking shape. I've considered historical data, and frequency to predict the next order date. I am predicting an order around 2025-11-08 with a quantity of 2 units. Overall confidence level is considered to be "medium".


**Refining Final Recommendations**

I'm now putting the finishing touches on my demand forecast. The predicted order date is November 8th, with a quantity of 2 units, based on a 25-day cycle. The confidence level is medium, considering the variability in order quantities and the limited dataset.




</details>

</details>


<details>
<summary><strong>3. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.54u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier détecté, intervalle médian de 32 jours, mais pattern saisonnier N-1 de 64 jours pour cette période spécifique.
- **Cycle médian (jours)**: 32
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle récent étant restreint (<3 points), l'analyse s'appuie sur le pattern N-1 qui montre une commande anniversaire exactement 64 jours après celle d'août (soit le 28/10/2025). La quantité de base est calculée via une moyenne tronquée excluant les extrêmes (1.54). Bien que l'année dernière 3u aient été commandées en octobre, l'ajustement saisonnier sur la baseline amène à une recommandation prudente de 2 unités pour couvrir le besoin immédiat.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,334 tokens
- **Output**: 3,652 tokens
- **Total**: 5,986 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Trajectory**

I'm now focusing on [PF0077] FILOU PROVENCALE 5 L and its sales figures. I've reviewed the provided data, noting the unit sales for the past three months and historical sales from October 2024. My next step is to project sales for the next 30 days, ending on November 27th, considering the established patterns.


**Calculating Sales Intervals**

I've just finished calculating the intervals between sales dates for [PF0077] FILOU PROVENCALE 5 L. Because recent data is limited, I'm now focusing on the historical patterns. The intervals are [5, 55, 44, 36, 32, 16, 43, 19, 8, 64, 25] in days, which I will use to formulate the projected sales for the next 30 days.


**Predicting Future Orders**

I'm now analyzing the sales pattern for [PF0077] FILOU PROVENCALE 5 L, specifically focusing on the intervals between orders. Based on the historical data, the median interval is 32 days. However, the most recent order was on 2025-08-25, and the time since then (64 days) is longer than the median. This suggests an order may be imminent, aligning with the pattern observed from 2024.


**Evaluating Order Probability**

I've just finished the interval analysis for [PF0077] FILOU PROVENCALE 5 L, confirming that the median interval is 32 days. I've also found that the last order was on 2025-08-25, and it has been 64 days since then. This duration mirrors the interval from 2024-08-21 to 2024-10-24, indicating a high likelihood of an imminent order.


**Calculating Order Projections**

I'm now integrating the historical data, including recent sales, to refine the sales forecast for [PF0077] FILOU PROVENCALE 5 L. My focus is on synthesizing the interval analysis with the baseline calculation and seasonality to determine the likely order date and volume within the 30-day window. Considering an order is highly probable today, I will now project the quantity.


**Determining Quantity and Timing**

I've just finished the comprehensive analysis. Based on historical patterns, the order is highly likely today, 2025-10-28. With strong seasonality, and recent 1u orders, and the prior Oct 2024 orders of 3u, I am projecting an order of 2 units for [PF0077] FILOU PROVENCALE 5 L.


**Evaluating the Final Forecast**

I'm now integrating all data points to summarize my findings and conclusions, including the predicted order date of today, 2025-10-28. With the order highly probable and based on the recent 1u orders, and the prior Oct 2024 order of 3u, I have projected an order of 2 units for [PF0077] FILOU PROVENCALE 5 L.


**Concluding Order Projections**

I'm synthesizing all data to finalize the forecast for [PF0077] FILOU PROVENCALE 5 L. My analysis indicates an order is due today, 2025-10-28, precisely aligning with historical patterns and the recent 1u orders, against a 3u from Oct 2024. Therefore, I'm projecting a 2-unit order, with medium confidence.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 06:43:12: 80u
- 2025-09-29 15:25:16: 80u
- 2025-09-11 08:18:04: 80u
- 2025-08-25 08:11:04: 80u
- 2025-07-31 05:42:22: 80u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 09:57:51: 80u
- 2024-09-24 07:11:41: 160u
- 2024-08-21 11:24:26: 80u
- 2024-08-13 06:35:30: 80u
- 2024-07-25 06:08:11: 80u
- 2024-06-12 13:04:35: 160u
- 2024-06-06 09:56:07: 80u
- 2024-05-27 08:24:25: 80u
- 2024-05-03 12:12:17: 80u
- 2024-04-22 11:43:15: 160u
- 2024-04-08 12:25:11: 80u
- 2024-03-20 08:07:07: 80u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 06:43:12: 1u
- 2025-09-16 05:58:23: 3u
- 2025-08-25 08:11:04: 3u
- 2025-07-31 05:42:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 09:57:51: 2u
- 2024-09-24 07:11:41: 2u
- 2024-08-21 11:24:26: 1u
- 2024-08-13 06:35:30: 2u
- 2024-06-25 09:29:04: 4u
- 2024-06-12 13:04:35: 4u
- 2024-05-27 08:24:25: 2u
- 2024-05-03 12:12:17: 1u
- 2024-04-25 08:06:34: 3u
- 2024-03-20 08:07:07: 1u
- 2023-12-12 09:14:02: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [PF0077] FILOU PROVENCALE 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 08:11:04: 1u
- 2025-07-31 05:42:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 09:57:51: 3u
- 2024-08-21 11:24:26: 1u
- 2024-08-13 06:35:30: 1u
- 2024-07-25 06:08:11: 2u
- 2024-06-12 13:04:35: 2u
- 2024-05-27 08:24:25: 2u
- 2024-04-25 08:06:34: 1u
- 2024-03-20 08:07:07: 1u
- 2024-02-05 07:49:45: 2u
- 2023-12-12 09:14:02: 2u
- 2023-12-07 06:46:14: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (1)

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
| [PF0088] FILOU VOL AU VENT 800 GR | 2 | Stock prédit: 1.0u (30j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:04:15.773Z*
