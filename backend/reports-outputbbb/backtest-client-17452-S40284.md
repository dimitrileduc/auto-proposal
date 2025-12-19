# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S40284
- **Date commande** : 2025-11-12 12:37:06
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 43
- **Tokens**: 97,809 input + 110,953 output = 208,762 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.0% | 43 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 13.0% | Score équilibré global |

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
| **MAE** | 28.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 60.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 56 | 56 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 112 | 56 | 56.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 56 | 28 | 28.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 56u
- 📊 **Baseline calculée**: 84u
- 📊 **Médiane historique**: 56u
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 56u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle sporadique, évalué à 30 jours par défaut par manque de données récentes
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-10-01
- **Prochaine prédite**: 2025-10-31 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 24u, 168u

**🧠 Raisonnement LLM:**
Seule une commande enregistrée récemment (2025-10-01). Selon la règle du cycle par défaut de 30 jours, le client est en retard de commande de plus de 10 jours, ce qui déclenche un risque de rupture imminent. On observe un pattern de quantités multiples de 56 (56, 112, 168), suggérant un conditionnement par carton de 56u. On préconise 56u pour couvrir le besoin immédiat tout en restant cohérent avec le volume de la dernière commande et la saisonnalité N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,234 tokens
- **Output**: 2,492 tokens
- **Total**: 4,726 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Historical Data Points**

I'm currently delving into the past sales data. The goal is to ascertain the product's performance trajectory, identifying pivotal events or trends from the last six months, ultimately informing our sales strategy for the upcoming period. Right now, I am going over the sales figures from October 1st.


**Evaluating the Sales Cycle**

I'm now examining the intervals between past orders. The data suggests a possible cycle, but it's uncertain. With only one recent order, I'm leaning toward applying a 30-day default cycle, which leads me to project the next potential order around the end of October. I'll need to watch for future data points.


**Assessing Potential Order Dates**

Now, I'm integrating the historical data with the current date and the 30-day default cycle. Given that the last order was on October 1st and it's now November 11th, we're already past the predicted 30-day cycle, indicating a potential overdue order. I'm focusing on order quantities and seasonality as well.


**Projecting a Replenishment**

I'm synthesizing the historical data, seasonality trends, and the 30-day cycle to estimate the next order. Given we're already past the projected date, I'm labeling the order as overdue. I'm focusing on the product's ordering pattern, which reveals a sporadic trend, along with potential outlier quantities. The quantity estimate is influenced by a B2B context, leading me to forecast an order, possibly 56 units.


**Predicting Order Details**

I'm now consolidating all the data. The product's reorder cycle is likely 30 days, given the sparse recent data, and we're currently overdue. Quantities tend to be multiples of 56. I'm leaning toward a quantity of 56 units, considering the last order and a "safe" replenishment approach. I've noted a weak seasonality trend and a sporadic ordering pattern overall.


**Forecasting the Replenishment**

I'm synthesizing the historical data, seasonality trends, and the 30-day default cycle. Given that it's November 11th and the last order was October 1st, the order is overdue. The pattern indicates 56-unit multiples are common, especially given the "generous" B2B context. I am leaning toward recommending 56 units.




</details>

</details>


<details>
<summary><strong>2. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 112u vs Médiane: 56u (Réel: 56u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 112u
- 📊 **Baseline calculée**: 88u
- 📊 **Médiane historique**: 56u
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 56u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 112u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle variable long identifié avec une présence historique en fin d'année
- **Cycle médian (jours)**: 76
- **Dernière commande**: 2025-10-01
- **Prochaine prédite**: 2025-12-16 (dans 35j)
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande sporadiquement avec des intervalles allant de 28 à 113 jours, médiane à 76j
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian est de 76 jours. Depuis la dernière commande du 01-10-2025, 41 jours se sont écoulés. La prochaine commande est prévue dans environ 35 jours (soit le 16/12/2025), ce qui entre dans la fenêtre de vigilance B2B (30-40 jours). Historiquement, le client a passé une commande importante de 112u en décembre l'année précédente. Les quantités suivent un pattern de multiples de 56u (56, 112). Pour assurer la disponibilité pendant la période de fin d'année, la quantité de 112u est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,230 tokens
- **Output**: 1,848 tokens
- **Total**: 4,078 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Pizza Trends**

I've been analyzing the LV Pizza Croccantina data. Recent sales show 56 units on 2025-10-01. Looking back, I see a pattern of fluctuating demand. In 2024, there were sales of 112 units, then 56, and then 112 again. I'm trying to determine the predictability of these cycles.


**Anticipating Purchase Dates**

I've calculated the median interval between historical orders of the LV Pizza Croccantina au romarin, finding it to be roughly 76.5 days. With a recent order on 2025-10-01, I estimate the next order around 2025-12-16. Since my current date of analysis is 2025-11-11, and my planning horizon is 30 days, a new order seems likely.


**Evaluating LV002's Future**

My latest analysis focuses on the LV002 product, specifically the Croccantina au romarin. A deeper dive into past orders reveals fluctuations, particularly around year-end. Given the recent order of 56 units, the upcoming December window, and the customer's pattern, a larger order of 112 units seems appropriate, to hedge the risk of non-availability.


**Recommending Order Quantity**

I've re-examined the LV002 data, specifically analyzing order quantities. Considering the client's past behavior and the upcoming December window, I'm leaning toward a quantity of 112 units. This aligns with the historical pattern of ordering either 56 or 112 units, and leverages the "better safe than sorry" approach for B2B. I'm confident with this recommendation.


**Determining the Order Date**

The analysis continues to refine the ordering window. Considering 41 days passed since the last order, and an estimated 76-day cycle, the predicted order date is around December 16th. Given a 30-day planning horizon, and the historical pattern of December orders, the analysis strongly suggests to be ready.




</details>

</details>


<details>
<summary><strong>3. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 56u vs Médiane: 42u (Réel: 28u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 56u
- 📊 **Baseline calculée**: 56u
- 📊 **Médiane historique**: 42u
- ✅ **Réel commandé**: 28u
- 📉 **Erreur LLM**: 28u (100.0%)
- 📉 **Erreur Médiane**: 14u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 56u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel identifié avec quantité standard récurrente de 56u
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-10-01
- **Prochaine prédite**: 2025-10-31 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande habituellement selon un cycle de 30 jours, le retard actuel de 11 jours confirme un besoin imminent
- **Outliers détectés**: 5u, 16u

**🧠 Raisonnement LLM:**
Le cycle médian détecté est d'environ 30 jours (vu en fin d'année 2023 et début 2024). La dernière commande datant du 2025-10-01, le client est en retard de 11 jours par rapport à son rythme théorique, ce qui place la prochaine commande immédiatement dans l'horizon des 30 jours. La quantité de 56u est extrêmement récurrente dans l'historique (5 occurrences sur 7), suggérant un conditionnement standard (carton ou palette).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,254 tokens
- **Output**: 1,792 tokens
- **Total**: 4,046 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Product Data**

I'm currently focused on the LV003 product, specifically the "LV Pizza Croccantina tomate orig an 150 g bio". I've pulled the 2025-10-01 data, which shows 56 units sold. Next, I plan to analyze the N-1 history to establish a baseline. Then, I will focus on projecting the sales within the 30-day horizon, up to December 11th, 2025.


**Projecting Sales Data**

The historical data revealed some interesting patterns. There seems to be a roughly monthly sales cycle, but with infrequent and varying quantities. I've noted a consistent order quantity of 56 units. Considering the last order was on 2025-10-01, and calculating the cycle median, the predicted date was 2025-10-31, making the customer 11 days late. I must now adjust my projection accordingly.


**Calculating Inventory Risks**

Considering the late order, the consistent 56-unit orders, and the 41 days since the last order, I've identified a significant stock-out risk. Therefore, I will forecast a 56-unit order. I also assessed the seasonality and found that this amount is suitable for this time of year.


**Predicting Future Orders**

I've just finalized the analysis of the product's ordering patterns, and the data clearly indicates a 56-unit order is highly probable. The customer's late on their typical cycle, and the quantity aligns with the consistent historical demand. This means I'm confident about recommending an immediate order of 56 units.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:21:21: 56u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 06:56:17: 24u
- 2024-06-17 09:52:59: 168u
- 2024-04-15 11:59:14: 112u
- 2024-01-16 14:39:31: 56u
- 2023-12-19 08:26:37: 112u

**✅ Quantité LLM**: 56u (confidence: low)
**📊 Quantité Réelle**: 56u

</details>


<details>
<summary><strong>2. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:21:21: 56u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 06:56:17: 80u
- 2024-06-17 09:52:59: 112u
- 2024-04-15 11:59:14: 112u
- 2024-01-16 14:39:31: 56u
- 2023-12-19 08:26:37: 112u

**✅ Quantité LLM**: 112u (confidence: medium)
**📊 Quantité Réelle**: 56u

</details>


<details>
<summary><strong>3. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:21:21: 56u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 06:56:17: 5u
- 2024-06-17 09:52:59: 56u
- 2024-04-15 11:59:14: 56u
- 2024-01-16 14:39:31: 56u
- 2023-12-19 08:26:37: 56u
- 2023-11-17 14:13:20: 16u

**✅ Quantité LLM**: 56u (confidence: high)
**📊 Quantité Réelle**: 28u

</details>




---

## False Positives (40)

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
| [LV330] LV BIO Tartinade Toscana 190g | 250 | Stock prédit: 139.8u (12j restants) → prédit 250u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 775 | Stock prédit: 66.8u (2j restants) → prédit 775u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 208 | Stock prédit: 174.3u (31j restants) → prédit 208u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 240 | Stock prédit: 132.8u (10j restants) → prédit 240u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 350 | Stock prédit: 164.7u (22j restants) → prédit 350u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 350 | Stock prédit: 174.4u (31j restants) → prédit 350u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 850 | Stock prédit: 169.7u (7j restants) → prédit 850u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 112 | Stock prédit: 29.5u (10j restants) → prédit 112u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 700 | Stock prédit: 231.7u (16j restants) → prédit 700u mais non commandé |
| [LV139] LV Tartinade Paprika Chili 380g | 192 | Stock prédit: 10.1u (2j restants) → prédit 192u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 1050 | Stock prédit: 365.5u (14j restants) → prédit 1050u mais non commandé |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 144 | Stock prédit: -103.6u (-21j restants) → prédit 144u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 341 | Stock prédit: -168.1u (-13j restants) → prédit 341u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 124 | Stock prédit: 44.1u (15j restants) → prédit 124u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 62 | Stock prédit: 16.3u (10j restants) → prédit 62u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 200 | Stock prédit: -8.4u (0j restants) → prédit 200u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 300 | Stock prédit: 9.8u (1j restants) → prédit 300u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 175 | Stock prédit: 4.1u (0j restants) → prédit 175u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 150 | Stock prédit: 31.0u (8j restants) → prédit 150u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 330 | Stock prédit: 23.3u (3j restants) → prédit 330u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 350 | Stock prédit: 82.3u (17j restants) → prédit 350u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 250 | Stock prédit: -62.0u (-16j restants) → prédit 250u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 700 | Stock prédit: -450.3u (-31j restants) → prédit 700u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 32 | Stock prédit: -20.9u (-43j restants) → prédit 32u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 25 | Stock prédit: -22.3u (-49j restants) → prédit 25u mais non commandé |
| [LV158] LV Moutarde 200 ml | 50 | Stock prédit: -49.7u (-50j restants) → prédit 50u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 350 | Stock prédit: -251.2u (-34j restants) → prédit 350u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 400 | Stock prédit: -177.4u (-31j restants) → prédit 400u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 132 | Stock prédit: 1.2u (0j restants) → prédit 132u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 180 | Stock prédit: -56.1u (-18j restants) → prédit 180u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 50 | Stock prédit: -57.9u (-50j restants) → prédit 50u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 110 | Stock prédit: -49.5u (-26j restants) → prédit 110u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 175 | Stock prédit: -229.9u (-45j restants) → prédit 175u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 250 | Stock prédit: -115.8u (-24j restants) → prédit 250u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 48 | Stock prédit: -32.8u (-38j restants) → prédit 48u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 72 | Stock prédit: -0.7u (0j restants) → prédit 72u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 4 | Stock prédit: -66.9u (-24j restants) → prédit 4u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 160 | Stock prédit: -75.2u (-26j restants) → prédit 160u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 120 | Stock prédit: 1.8u (0j restants) → prédit 120u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 175 | Stock prédit: -66.5u (-19j restants) → prédit 175u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T09:02:25.088Z*
