# Rapport Backtest - Client Alnatura Produktions- und Handels GmbH, Invoice Address

## Contexte

- **Client** : Alnatura Produktions- und Handels GmbH, Invoice Address (ID: 23614)
- **Commande réelle** : S39976
- **Date commande** : 2025-10-29 07:41:55
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 24,638 input + 36,199 output = 60,837 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.0% | 10 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 18.2% | Score équilibré global |

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
| **MAE** | 300.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (1)

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
| [LV104] LV Paprika Chili Aufstri 180g DE | 300 | 600 | 300.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [LV104] LV Paprika Chili Aufstri 180g DE</strong> - LLM: 300u vs Médiane: 300u (Réel: 600u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 300u
- 📊 **Baseline calculée**: 438.46u
- 📊 **Médiane historique**: 300u
- ✅ **Réel commandé**: 600u
- 📉 **Erreur LLM**: 300u (50.0%)
- 📉 **Erreur Médiane**: 300u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 300u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle médian de 21 jours avec retard actuel important
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-10-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
DÉTECTION PHASE 1 : Cycle médian calculé à 21 jours (intervalles : 13, 14, 13, 49, 21, 21, 22, 21, 35, 35, 20, 22, 27). CV temporel de 42.7% (confiance basse) dû à un retard actuel de 55 jours par rapport à la dernière commande (2025-09-03). Le risque pour les 30 prochains jours est OUI car la commande est largement due. PRÉDICTION PHASE 2 : Basé sur 15 points, l'analyse des outliers (Q1=300, Q3=600, IQR=300, Seuil=1050) ne révèle aucune valeur à exclure. CV quantité de 41.7% menant à une baseline de 438.46 (moyenne tronquée). Malgré une saisonnalité N-1 forte (doublement des volumes en octobre 2024 à 600u vs 300u en sept), la stabilité très nette des 3 dernières commandes à 300u prime pour la prédiction de la quantité unitaire immédiate.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,420 tokens
- **Output**: 6,450 tokens
- **Total**: 8,870 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Upcoming Demand**

I'm currently focused on projecting demand for the LV Paprika Chili Aufstri. The data from previous months shows a consistent pattern. Looking at the intervals, I can see the repeating purchase order sizes and dates. I will estimate the order sizes over the next 30 days, incorporating these recent intervals.


**Examining Order Intervals**

I'm now diving into the intervals between orders for the LV Paprika Chili Aufstri. Analyzing the sorted interval data, which shows a range of 13 to 49 days, reveals the order frequency. Given the gap since the last order, I need to understand if the longer intervals are more representative.


**Evaluating The Cycle Variance**

I'm now calculating the mean and standard deviation of the order intervals. The mean is approximately 24 days, with a standard deviation of about 10 days, yielding a coefficient of variation of 42.7%. This indicates a moderate variability in order frequency. Now I must adjust my expectations.


**Forecasting Order Probability**

I'm now determining the probability of an order within the next 30 days. Considering the 55-day gap since the last order and the historical intervals, it's highly probable. Given the product's ordering pattern, I'm anticipating an order soon, likely immediately. Confidence remains low due to the overdue nature.


**Projecting Likely Quantities**

I'm now determining the typical order quantity. The median order size is 300 units. My goal is to incorporate a projection based on the most frequent quantities ordered. The variance is being calculated.


**Refining Quantity Projections**

I'm now determining the most probable order quantity, which is currently at a median of 300 units. Examining historical data reveals a pattern of 300 and 600 unit orders, with a single 900 unit order. Analyzing seasonality reveals no strong patterns, so I will now focus on historical Oct orders for a better projection.


**Predicting Quantity and Timing**

I'm now integrating the recent order data to refine my quantity predictions. The median order of 300 units aligns with the current trend.  Considering the long interval since the last order, I'm expecting an order soon. I'm focusing on the upcoming order date, which should have already occurred.


**Reassessing Order Timing**

I'm now integrating the analysis of the 2024 and 2025 order patterns. Examining intervals, the overdue nature of the current order is clear. Given the recent 300-unit orders and the frequency of orders, I anticipate the next order to appear now.


**Synthesizing Findings and Recommendations**

I'm now integrating all data points to derive final recommendations. The historical data reveal a strong pattern, with a median interval of 21 days between orders and a dominant order quantity of 300 units. Though the last order was on 2025-09-03, I predict another order immediately and suggest 300 units.


**Synthesizing Findings**

I'm now integrating all data points to make the final prediction. Considering the recent pattern of 300 unit orders, and the previous 600 orders, with a median interval of 21 days between orders and a long absence of the product, I suggest the next order immediately, for 300 units.


**Reviewing the Key Metrics**

I'm now consolidating the data, weighing the evidence to make the final prediction. With the analysis complete, I am preparing the final response. Considering the trend, I'm expecting a 300 unit order. The high confidence on the 300 unit recommendation reflects the patterns.


**Refining the Final Prediction**

I've re-examined the 2024 and 2025 order history, as well as seasonality. The significant 55-day absence, past the historical median of 21 days, causes me to consider the most recent pattern. Given the recent and consistent 300-unit orders, I am recommending 300 units for this upcoming order.


**Summarizing the Reasoning**

I'm now integrating all data points to make the final recommendation, after all the calculations and checks. Considering the median interval, the strong historical pattern, and the recent 300-unit trend, I'm now providing a final, data-driven prediction.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV104] LV Paprika Chili Aufstri 180g DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 08:18:02: 300u
- 2025-08-20 06:08:56: 300u
- 2025-08-07 07:25:44: 300u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 11:47:58: 600u
- 2024-09-18 06:25:10: 300u
- 2024-08-27 11:52:00: 300u
- 2024-08-07 07:56:23: 300u
- 2024-07-03 07:36:16: 900u
- 2024-05-29 09:11:13: 300u
- 2024-05-08 06:38:08: 600u
- 2024-04-16 12:55:07: 300u
- 2024-03-26 12:32:16: 300u
- 2024-03-05 13:51:42: 600u
- 2024-01-16 12:42:37: 600u
- 2024-01-03 14:24:51: 600u

**✅ Quantité LLM**: 300u (confidence: medium)
**📊 Quantité Réelle**: 600u

</details>




---

## False Positives (9)

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
| [LV102] LV Karot. Ingwer Aufstrich 180g DE | 300 | Stock prédit: 116.1u (12j restants) → prédit 300u mais non commandé |
| [LV105] LV Tomate Basil Aufstr 180g | 300 | Stock prédit: 159.3u (21j restants) → prédit 300u mais non commandé |
| [LV106] LV Oliven Aufstrich 180g DE | 300 | Stock prédit: 182.5u (29j restants) → prédit 300u mais non commandé |
| [LV343] LV Toskana Aufstrich 180g | 300 | Stock prédit: 225.3u (57j restants) → prédit 300u mais non commandé |
| [LV347] LV Trüffel Aufstrich 180g DE | 150 | Stock prédit: 97.0u (34j restants) → prédit 150u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 300 | Stock prédit: 21.6u (4j restants) → prédit 300u mais non commandé |
| [LV103] LV Mango Curry Aufstrich 180g | 300 | Stock prédit: -137.8u (-17j restants) → prédit 300u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 300 | Stock prédit: -251.4u (-30j restants) → prédit 300u mais non commandé |
| [LV341] LV Zwiebel Aufstrich 180g | 235 | Stock prédit: 1.7u (0j restants) → prédit 235u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:09:04.481Z*
