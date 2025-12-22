# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S39729
- **Date commande** : 2025-10-14 14:05:41
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 250
- **Tokens**: 163,167 input + 576,491 output = 739,658 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 2.5% | 158 produits prédits, 4 corrects |
| **Rappel** | 66.7% | 6 produits réels, 4 détectés |
| **F1-Score** | 4.9% | Score équilibré global |

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
| **MAE** | 266.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 82.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 102.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 51.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK | 200 | 400 | 200.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1778] TARTINAPERO BIO TOMATE 200ML | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK | 920 | 256 | 664.0 | 259.4% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1810] LV SAUCE BEARNAISE 250ML WECK | 400 | 200 | 200.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK</strong> - LLM: 200u vs Médiane: 200u (Réel: 400u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 200u
- 📊 **Baseline calculée**: 200u
- 📊 **Médiane historique**: 200u
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 200u (50.0%)
- 📉 **Erreur Médiane**: 200u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 200u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 24 jours
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le comportement d'achat est extrêmement stable avec des commandes constantes de 200 unités tous les 23 à 25 jours (médiane de 24 jours). La dernière commande ayant eu lieu le 09/10, la prochaine est estimée pour le 02/11, soit dans 20 jours. Puisque cet horizon est inférieur à 30 jours, le risque de rupture est identifié et justifie la commande de la quantité habituelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 653 tokens
- **Output**: 1,011 tokens
- **Total**: 1,664 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product History**

I've been poring over the sales data for [PF3394] LV SAUCE BOURGU IGNONNE 250ML WECK. Initial review reveals a recent order of 200 units on October 9th. Prior to that, another 200 unit order materialized on September 16th. I'm starting to build a profile for this product.


**Calculating Supply Chain Needs**

I've crunched the numbers on [PF3394] LV SAUCE BOURGU IGNONNE 250ML WECK. The product has a tight 24-day cycle. My calculations suggest a next order date of November 2nd, which is only 20 days away. Given the consistent 200-unit orders, I'm recommending we plan for a reorder of that quantity. The risk horizon looks manageable.


**Formulating Order Recommendations**

I've completed my analysis of the product [PF3394] LV SAUCE BOURGU IGNONNE 250ML WECK. Based on the pattern, my recommendation is a reorder of 200 units. The high confidence is driven by the consistent 200-unit orders every 23-25 days. Given the last order on October 9th and a predicted next order around November 2nd, I see no need for adjustments.




</details>

</details>


<details>
<summary><strong>2. [PF1778] TARTINAPERO BIO TOMATE 200ML</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel à bimensuel (17 à 34 jours)
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
La consommation du produit est devenue très stable en 2025 avec trois commandes consécutives de 434 unités. Bien que la dernière commande soit récente (4 jours), le cycle médian de 25 jours place la prochaine commande prévue au 3 novembre, soit sous l'horizon de 30-40 jours. La tendance est à la hausse par rapport à l'année précédente (moyenne de 340u en 2024).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 987 tokens
- **Output**: 2,403 tokens
- **Total**: 3,390 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing the Data Stream**

I'm focused on the data for product PF1778, specifically the TARTINAPERO BIO TOMATE. The recent sales figures from the last three months show consistent demand at 434 units, except for a blip on October 9th. I'm noting this minor discrepancy, before moving on to analyze the historical context.


**Projecting the Order Timing**

I've just finished calculating the predicted next order date, factoring in the average cycle. Based on the recent data, and a 25-day cycle, I anticipate the next order around November 3rd. It's too early to order now, as the last order was only four days ago. I'll need to monitor the data closely over the coming weeks.


**Assessing Stockout Risk**

My analysis indicates a potential stockout risk within the next 30 days. The last order was recent, on October 9th. The calculated cycle predicts the next order around November 3rd, which means we must plan for replenishment. With the rule "Si ≤40 jours → RISQUE OUI", the risk is present.


**Calculating the Risk Factors**

I'm now calculating the risk of a stockout, focusing on the recent sales and order history of TARTINAPERO BIO TOMATE. Based on the 2025 data, a monthly or bimonthly cycle is observed, with a predicted next order around November 3rd. Since it's only 4 days since the last order, and the next possible order will be in 21 days, the risk is real.


**Finalizing Risk and Quantity**

I've determined a high confidence in the recommended quantity of 434 units, with the next order anticipated around November 3rd. Since the cycle is stable and a recent order happened four days ago, there is a risk of stockout within the next 30 days. All the facts point to a need for a new order.


**Summarizing the Findings**

I'm now putting it all together, focusing on the core problem: need for a new order. The analysis is complete. The next order is predicted in early November, which gives us 21 days until the estimated order date, with the recommended quantity of 434 units, meaning we need to place an order.




</details>

</details>


<details>
<summary><strong>3. [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK</strong> - LLM: 920u vs Médiane: 920u (Réel: 256u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 920u
- 📊 **Baseline calculée**: 940u
- 📊 **Médiane historique**: 920u
- ✅ **Réel commandé**: 256u
- 📉 **Erreur LLM**: 664u (259.4%)
- 📉 **Erreur Médiane**: 664u (259.4%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 920u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel estimé (basé sur le volume B2B standard)
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-30
- **Prochaine prédite**: 2025-10-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique restreint avec une seule commande récente, mais un volume très cohérent avec la commande N-1 (920u vs 960u). Sur la base d'un cycle de réapprovisionnement classique de 30 jours pour ce volume, la prochaine commande est prévue sous 17 jours, ce qui entre dans le cadre du risque de rupture défini (< 40j).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 610 tokens
- **Output**: 1,574 tokens
- **Total**: 2,184 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Recent Orders**

I'm currently focused on the sales data for product [PF3295]. I see a recent order of 920 units on September 30th, 2025. This contrasts with a prior order of 960 units from July 15th, 2024. My analysis is aiming to determine the trend.


**Predicting Replenishment Cycles**

I'm now assessing the replenishment cycle for [PF3295] after my initial analysis. I've noted a 13-day interval since the last order. With only one recent order, establishing a definitive cycle is impossible. However, based on the product type and volume, a 30-day cycle seems plausible. This suggests a potential replenishment order around late October. Consequently, if the risk criteria is <= 40 days, then there is a risk.


**Forecasting Next Order Date**

Based on the 920-unit order on September 30th, and given the B2B context, I'm estimating a 30-day cycle for the product [PF3295]. The 13-day interval since the last order points to a potential replenishment around October 30th. Since 17 days remain until then, this scenario suggests the customer is on track with typical replenishment. This supports my earlier conclusion regarding potential risk.


**Evaluating Risk and Quantity**

I'm now determining if there is a risk and recommending a quantity, based on the previous analyses. The time between the last order (September 30th) and today (October 13th) is 13 days. Since a monthly cycle is likely, the next order is estimated for around October 30th, which is 17 days away, and within the 40-day risk threshold. I'm suggesting a quantity of 920.


**Calculating Risk and Quantity**

I'm now integrating all analyses. I've re-evaluated the replenishment cycle, confirming my earlier 30-day estimation. Since the last order was on September 30th, a new order is expected around October 30th. Given the risk threshold of 40 days, I assess a risk exists. I'm recommending a quantity of 920 units. I am confident in my estimate given consistency of the volumes.




</details>

</details>


<details>
<summary><strong>4. [PF1810] LV SAUCE BEARNAISE 250ML WECK</strong> - LLM: 400u vs Médiane: 400u (Réel: 200u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 400u
- 📊 **Baseline calculée**: 400u
- 📊 **Médiane historique**: 400u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: 200u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 400u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier avec accélération ponctuelle
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-05 (dans -8j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Commande attendue début octobre, cohérente avec l'historique N-1 (10/10)
- **Outliers détectés**: 800u

**🧠 Raisonnement LLM:**
Le cycle de commande médian est d'environ 25 jours. La dernière commande datant du 10 septembre, le réapprovisionnement aurait dû intervenir aux alentours du 5 octobre. L'historique N-1 confirme une commande récurrente de 400u à cette période précise (10/10/2024). Le risque de rupture est donc imminent car le délai habituel est dépassé.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 989 tokens
- **Output**: 1,562 tokens
- **Total**: 2,551 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Volumes**

I'm currently tracking the production volume of the LV SAUCE BEARNAISE. Recent data shows we produced 400 units on both September 10th and September 5th. Before that, on August 19th, we made 600 units. The intervals between production runs seem to vary, with a longer gap before the August batch.


**Forecasting Future Orders**

I'm now calculating the next potential order date for LV SAUCE BEARNAISE. Using the median interval from the historical data (around 25 days), and factoring the last order on September 10th, I predicted a date of October 5th. Since it's now October 13th, I'm noting the production schedule is late based on past production cycles. I'm focusing next on why there is a production delay.


**Calculating Urgency & Quantity**

Now, I'm examining the data to assess the urgency of a new order. Given that the predicted order date of October 5th has passed, I've confirmed a delay. Analyzing historical production volumes, 400 units appear to be the baseline. Considering the stable trend and seasonality, I'm recommending an order for 400 units, given the 33 days since the last production run.


**Determining Immediate Action**

The next step is to examine why production is delayed, despite a clear need. I've built a model that determines the required order size and dates. The model recommends 400 units, which is consistent with historical trends. Considering the last order was 33 days ago, and that the cycle is normally around 25 days, the risk is HIGH, and action is needed.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 09:06:10: 200u
- 2025-09-16 11:47:53: 200u
- 2025-08-22 10:32:18: 200u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 200u (confidence: high)
**📊 Quantité Réelle**: 400u

</details>


<details>
<summary><strong>2. [PF1778] TARTINAPERO BIO TOMATE 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 09:06:10: 434u
- 2025-10-09 09:06:10: 0u
- 2025-09-05 11:57:29: 434u
- 2025-08-19 10:32:26: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 11:07:52: 272u
- 2024-09-16 11:33:20: 700u
- 2024-08-08 06:47:17: 329u
- 2024-06-11 12:19:41: 329u
- 2024-05-23 10:05:18: 330u
- 2024-04-24 09:27:22: 350u
- 2024-04-03 05:49:19: 350u
- 2024-02-22 12:16:39: 330u
- 2023-11-29 14:57:26: 350u
- 2023-11-27 14:52:05: 331u
- 2023-11-08 07:48:20: 350u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-30 07:51:11: 920u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-15 11:46:16: 960u

**✅ Quantité LLM**: 920u (confidence: low)
**📊 Quantité Réelle**: 256u

</details>


<details>
<summary><strong>4. [PF1810] LV SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 14:13:23: 400u
- 2025-09-05 11:57:29: 400u
- 2025-08-19 10:32:26: 600u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-10 12:46:58: 400u
- 2024-09-16 11:33:20: 400u
- 2024-08-08 06:47:17: 600u
- 2024-06-11 12:10:50: 800u
- 2024-05-23 10:05:18: 400u
- 2024-04-24 09:27:22: 400u
- 2024-04-24 09:27:22: 400u
- 2024-04-03 05:49:19: 400u
- 2024-03-26 10:30:17: 200u
- 2024-03-18 14:39:12: 400u
- 2024-02-22 12:16:39: 400u
- 2023-12-18 13:37:19: 400u

**✅ Quantité LLM**: 400u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>




---

## False Positives (154)

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
| [PF1790] TARTI ALNATUR BIO TOMATE 200ML | 300 | Stock prédit: 251.4u (15j restants) → prédit 300u mais non commandé |
| [PF1601] JF SAMOURAI SQUEEZE 300ML | 130 | Stock prédit: 120.5u (38j restants) → prédit 130u mais non commandé |
| [PF1549] LV COCKTAIL BIO 200ML | 185 | Stock prédit: 152.4u (13j restants) → prédit 185u mais non commandé |
| [PF1793] LV MAYONNAI TRUFFES 250ML WECK | 200 | Stock prédit: 172.7u (18j restants) → prédit 200u mais non commandé |
| [PF1800] LV MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: 370.3u (37j restants) → prédit 200u mais non commandé |
| [PF1804] LV SAUCE TARTARE 250ML WECK | 300 | Stock prédit: 151.4u (9j restants) → prédit 300u mais non commandé |
| [PF1773] TARTINAPERO BIO MANGUE 200ML | 434 | Stock prédit: 369.9u (17j restants) → prédit 434u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 56 | Stock prédit: 79.7u (9j restants) → prédit 56u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Stock prédit: 29.4u (4j restants) → prédit 56u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: 37.0u (7j restants) → prédit 56u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | Stock prédit: 30.7u (4j restants) → prédit 56u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 4 | Stock prédit: -1.2u (-2j restants) → prédit 4u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 4 | Stock prédit: 3.5u (43j restants) → prédit 4u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 10 | Stock prédit: 8.1u (25j restants) → prédit 10u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 5 | Stock prédit: 3.6u (16j restants) → prédit 5u mais non commandé |
| [PF0088] FILOU VOL AU VENT 800 GR | 32 | Stock prédit: 18.0u (12j restants) → prédit 32u mais non commandé |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 48 | Stock prédit: 40.2u (56j restants) → prédit 48u mais non commandé |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 24 | Stock prédit: 17.2u (27j restants) → prédit 24u mais non commandé |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 48 | Stock prédit: 38.9u (47j restants) → prédit 48u mais non commandé |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 24 | Stock prédit: 17.2u (27j restants) → prédit 24u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 48 | Stock prédit: 15.3u (5j restants) → prédit 48u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 24 | Stock prédit: 12.9u (12j restants) → prédit 24u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 30 | Stock prédit: 16.0u (22j restants) → prédit 30u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 48 | Stock prédit: 38.9u (47j restants) → prédit 48u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 48 | Stock prédit: 36.6u (35j restants) → prédit 48u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 48 | Stock prédit: 36.9u (36j restants) → prédit 48u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 24 | Stock prédit: -0.7u (0j restants) → prédit 24u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 24 | Stock prédit: -0.7u (0j restants) → prédit 24u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 13 | Stock prédit: 13.1u (24j restants) → prédit 13u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 23 | Stock prédit: 18.9u (22j restants) → prédit 23u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 5 | Stock prédit: 0.9u (3j restants) → prédit 5u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 5 | Stock prédit: 1.3u (4j restants) → prédit 5u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 5 | Stock prédit: 1.1u (3j restants) → prédit 5u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 25 | Stock prédit: 18.3u (35j restants) → prédit 25u mais non commandé |
| [RIT02] RITCHIE Citron - verre 275ml | 30 | Stock prédit: 16.7u (16j restants) → prédit 30u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 360 | Stock prédit: 202.2u (21j restants) → prédit 360u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [LV158] LV Moutarde 200 ml | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 36 | Stock prédit: 12.0u (8j restants) → prédit 36u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 90 | Stock prédit: 60.0u (34j restants) → prédit 90u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 72 | Stock prédit: 56.0u (59j restants) → prédit 72u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 740 | Stock prédit: 303.0u (9j restants) → prédit 740u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 240 | Stock prédit: 160.0u (34j restants) → prédit 240u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 20 | Stock prédit: 10.1u (17j restants) → prédit 20u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 20 | Stock prédit: 7.8u (10j restants) → prédit 20u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 20 | Stock prédit: 8.3u (12j restants) → prédit 20u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 25 | Stock prédit: 14.3u (22j restants) → prédit 25u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 10 | Stock prédit: 6.4u (30j restants) → prédit 10u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 2 | Stock prédit: 1.1u (22j restants) → prédit 2u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 2 | Stock prédit: -0.7u (-4j restants) → prédit 2u mais non commandé |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 3 | Stock prédit: 0.9u (7j restants) → prédit 3u mais non commandé |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 1 | Stock prédit: -0.1u (-1j restants) → prédit 1u mais non commandé |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 8 | Stock prédit: -7.3u (-15j restants) → prédit 8u mais non commandé |
| [PF3254] JEFKE VOL AU VENT 400G | 192 | Stock prédit: 143.5u (53j restants) → prédit 192u mais non commandé |
| [PF1828] JF SAUCE BEARNAISE 470ML WECK | 110 | Stock prédit: 68.3u (29j restants) → prédit 110u mais non commandé |
| [PF1462] LV AIOLI BIO 200ML | 185 | Stock prédit: 124.2u (36j restants) → prédit 185u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: -46.5u (-8j restants) → prédit 56u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | Stock prédit: 20.9u (10j restants) → prédit 56u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 235 | Stock prédit: 89.8u (14j restants) → prédit 235u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 15 | Stock prédit: 6.2u (11j restants) → prédit 15u mais non commandé |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 20 | Stock prédit: 12.5u (41j restants) → prédit 20u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 5 | Stock prédit: 1.6u (11j restants) → prédit 5u mais non commandé |
| [PF3329] LV SDP SAUCE BEARNAISE 125G | 2100 | Stock prédit: 1018.8u (24j restants) → prédit 2100u mais non commandé |
| [PF1776] TARTINAPERO BIO CAROTTE 200ML | 350 | Stock prédit: -200.9u (-9j restants) → prédit 350u mais non commandé |
| [PF1782] TARTINAPERO BIO BETTERAVE 200M | 350 | Stock prédit: 268.3u (85j restants) → prédit 350u mais non commandé |
| [PF3232] LV FR TARTINAPERO BIO TOMATE OLIVE CAPRE 190G | 350 | Stock prédit: 284.6u (113j restants) → prédit 350u mais non commandé |
| [PF1446] JF MAYONNA DU CHEF 470 ML WECK | 220 | Stock prédit: 129.7u (37j restants) → prédit 220u mais non commandé |
| [PF1474] JF MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: -18.9u (-2j restants) → prédit 200u mais non commandé |
| [PF1556] LV TARTINADE BIO MANGUE 200ML | 2100 | Stock prédit: 1769.0u (53j restants) → prédit 2100u mais non commandé |
| [PF1627] LV TARTINADE BIO POTIRON 200ML | 700 | Stock prédit: 488.4u (60j restants) → prédit 700u mais non commandé |
| [PF1788] TARTI ALNATUR BIO CAROTTE 200M | 300 | Stock prédit: 209.6u (60j restants) → prédit 300u mais non commandé |
| [PF1705] LV TARTINADE BIO BASILIC 200ML | 500 | Stock prédit: 19.8u (1j restants) → prédit 500u mais non commandé |
| [PF1706] LV TARTINADE BIO BETTERAVE 200 | 700 | Stock prédit: 781.2u (75j restants) → prédit 700u mais non commandé |
| [PF1558] LV TARTINADE BIO CAROTTE 200ML | 700 | Stock prédit: -485.8u (-10j restants) → prédit 700u mais non commandé |
| [PF1704] LV TARTINADE BIO OLIVE 200 | 700 | Stock prédit: 472.9u (54j restants) → prédit 700u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 30 | Stock prédit: 14.5u (25j restants) → prédit 30u mais non commandé |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 15 | Stock prédit: 10.1u (56j restants) → prédit 15u mais non commandé |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 10 | Stock prédit: 6.5u (50j restants) → prédit 10u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 20 | Stock prédit: 14.2u (65j restants) → prédit 20u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 10 | Stock prédit: 5.9u (44j restants) → prédit 10u mais non commandé |
| [fsv04] Amande nature bio vrac 2,8 kg | 8 | Stock prédit: 4.2u (35j restants) → prédit 8u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 6 | Stock prédit: 2.7u (25j restants) → prédit 6u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 5 | Stock prédit: 2.1u (22j restants) → prédit 5u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 5 | Stock prédit: 1.9u (19j restants) → prédit 5u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 5 | Stock prédit: 2.4u (29j restants) → prédit 5u mais non commandé |
| [fsv18] Mendiant bio vrac 2,8kg | 5 | Stock prédit: 2.7u (35j restants) → prédit 5u mais non commandé |
| [PF1703] LV MAYONNAISE BIO 470ML WECK | 140 | Stock prédit: 90.0u (55j restants) → prédit 140u mais non commandé |
| [PF1460] LV MAYONNAISE BIO 200ML | 370 | Stock prédit: -79.8u (-5j restants) → prédit 370u mais non commandé |
| [PF1471] JF MAYONNAIS WASABI 250ML WECK | 200 | Stock prédit: 69.5u (16j restants) → prédit 200u mais non commandé |
| [PF1527] JF SAUCE BEARNAISE 250ML WECK | 400 | Stock prédit: -61.1u (-7j restants) → prédit 400u mais non commandé |
| [PF1639] JF BURGER SQUEEZE 300ML | 150 | Stock prédit: 41.2u (11j restants) → prédit 150u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 90 | Stock prédit: 48.8u (39j restants) → prédit 90u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 270 | Stock prédit: 166.9u (53j restants) → prédit 270u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 180 | Stock prédit: 97.5u (39j restants) → prédit 180u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 90 | Stock prédit: 28.1u (15j restants) → prédit 90u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 10 | Stock prédit: 0.5u (1j restants) → prédit 10u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 7 | Stock prédit: -2.9u (-10j restants) → prédit 7u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 20 | Stock prédit: 1.0u (1j restants) → prédit 20u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 16 | Stock prédit: -5.3u (-8j restants) → prédit 16u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 13 | Stock prédit: -5.9u (-12j restants) → prédit 13u mais non commandé |
| [PF0084] FILOU CARBONNADES 800 GR | 8 | Stock prédit: -1.5u (-5j restants) → prédit 8u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 40 | Stock prédit: -2.4u (-2j restants) → prédit 40u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 30 | Stock prédit: 11.1u (14j restants) → prédit 30u mais non commandé |
| [PF1811] LV SAUCE AIOLI PESTO 250M WECK | 200 | Stock prédit: 121.9u (57j restants) → prédit 200u mais non commandé |
| [PF3237] LV MAYONNAISE POIVRE 250ML WECK  | 200 | Stock prédit: -211.1u (-19j restants) → prédit 200u mais non commandé |
| [PF1775] TARTINAPERO BIO PAPRIKA 200ML | 434 | Stock prédit: 24.3u (2j restants) → prédit 434u mais non commandé |
| [PF1779] TARTINAPERO BIO HOUMOUS 200ML | 350 | Stock prédit: 224.4u (39j restants) → prédit 350u mais non commandé |
| [PF1855] LV TARTINAPERO BIO TRIPACK | 1280 | Stock prédit: -497.7u (-10j restants) → prédit 1280u mais non commandé |
| [PF2978] TARTINAPERO BIO AIL OURS 200ML | 434 | Stock prédit: -12.2u (-1j restants) → prédit 434u mais non commandé |
| [PF1819] LV VINAIGRETTE CIBOU WECK 200M | 150 | Stock prédit: 119.4u (144j restants) → prédit 150u mais non commandé |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 1600 | Stock prédit: 752.4u (27j restants) → prédit 1600u mais non commandé |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 300 | Stock prédit: -352.9u (-20j restants) → prédit 300u mais non commandé |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 600 | Stock prédit: -352.9u (-20j restants) → prédit 600u mais non commandé |
| [PF1469] JF MAYONNAI TRUFFES 250ML WECK | 400 | Stock prédit: 141.9u (20j restants) → prédit 400u mais non commandé |
| [PF1526] JF SAUCE TARTARE 250ML WECK | 400 | Stock prédit: 166.3u (26j restants) → prédit 400u mais non commandé |
| [PF1967] JF SAUCE AIOLI 250ML WECK | 200 | Stock prédit: 65.5u (18j restants) → prédit 200u mais non commandé |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 60 | Stock prédit: -26.6u (-11j restants) → prédit 60u mais non commandé |
| [PF3370] JF MAYONNAISE CITRON 250ML WECK | 200 | Stock prédit: 44.2u (10j restants) → prédit 200u mais non commandé |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 2000 | Stock prédit: 929.4u (30j restants) → prédit 2000u mais non commandé |
| [PF1685] LV TARTINADE BIO CAROTTE 400G | 166 | Stock prédit: 191.0u (62j restants) → prédit 166u mais non commandé |
| [PF2980] LV TARTINADE BIO AIL OURS200ML | 700 | Stock prédit: -540.0u (-16j restants) → prédit 700u mais non commandé |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 450 | Stock prédit: 240.9u (42j restants) → prédit 450u mais non commandé |
| [PF3365] LV BE TARTINADE BIO BROCOLI 190G | 932 | Stock prédit: 459.4u (44j restants) → prédit 932u mais non commandé |
| [PF3307] LV DE BROTAUFSTRICH BIO DATTE CHILI 180G | 600 | Stock prédit: 178.1u (11j restants) → prédit 600u mais non commandé |
| [PF3233] LV BE TARTINADE BIO TOSCANE 190G | 650 | Stock prédit: 508.4u (59j restants) → prédit 650u mais non commandé |
| [PF1630] LV TARTINADE BIO ANANAS 200ML | 466 | Stock prédit: 235.6u (52j restants) → prédit 466u mais non commandé |
| [PF3321] LV BE TARTINADE BIO KIDS 190G | 410 | Stock prédit: 232.8u (50j restants) → prédit 410u mais non commandé |
| [PI3072] PI TARTI POIS CHICHES BIO CONS 250G  | 3600 | Stock prédit: 1449.8u (18j restants) → prédit 3600u mais non commandé |
| [PI3073] PI TARTI TOMATE BIO CONS 250 | 5400 | Stock prédit: 2645.5u (19j restants) → prédit 5400u mais non commandé |
| [PI3346] PI TARTINADE BETTERAVE BIO CONS 250G | 6000 | Stock prédit: 714.5u (6j restants) → prédit 6000u mais non commandé |
| [PF1721] LV VIN CAESAR PET 250 BIO | 260 | Stock prédit: 64.5u (16j restants) → prédit 260u mais non commandé |
| [PF1720] LV VIN MIEL MOU PET 250 BIO | 260 | Stock prédit: 113.0u (39j restants) → prédit 260u mais non commandé |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 1800 | Stock prédit: 781.2u (23j restants) → prédit 1800u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 50 | Stock prédit: 1.6u (1j restants) → prédit 50u mais non commandé |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 15 | Stock prédit: 5.9u (33j restants) → prédit 15u mais non commandé |
| [JOY02] JOY! Confiture bio à la fraise 370g | 200 | Stock prédit: -20.3u (-4j restants) → prédit 200u mais non commandé |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 200 | Stock prédit: 37.2u (12j restants) → prédit 200u mais non commandé |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 200 | Stock prédit: -45.5u (-10j restants) → prédit 200u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 5 | Stock prédit: -1.0u (-9j restants) → prédit 5u mais non commandé |
| [PF3236] LV MAYONNAISE WASABI 250ML WECK | 200 | Stock prédit: 126.7u (93j restants) → prédit 200u mais non commandé |
| [PI3200] PI TARTI AUBERGINE BIO CONS 250 | 800 | Stock prédit: -302.6u (-12j restants) → prédit 800u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 1 | Stock prédit: -0.9u (-32j restants) → prédit 1u mais non commandé |
| [PF3331] LV SDP SAUCE POIVRE 125G | 2100 | Stock prédit: 457.4u (21j restants) → prédit 2100u mais non commandé |
| [PF3330] LV SDP SAUCE TARTARE 125G | 2100 | Stock prédit: 457.4u (21j restants) → prédit 2100u mais non commandé |
| [PF3338] LV DE BROTAUFSTRICH BIO POTIRON 180G | 616 | Stock prédit: 363.8u (124j restants) → prédit 616u mais non commandé |
| [PF1484] JF VINAIGRETTE FH WECK 200ML | 150 | Stock prédit: -127.9u (-43j restants) → prédit 150u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 200 | Stock prédit: -343.3u (-60j restants) → prédit 200u mais non commandé |
| [PF1540] JF SAUCE SAMOURAI 250ML WECK | 195 | Stock prédit: -119.2u (-35j restants) → prédit 195u mais non commandé |
| [PF3371] JF MAYONNAISE MIEL MOUTARDE 250ML WECK | 200 | Stock prédit: 10.9u (5j restants) → prédit 200u mais non commandé |


---

## False Negatives (2)

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
| [PF3393] LV FR TARTINAPERO BIO AVOCAT BOCAL 190G | 434 | Stock: 357.4u (13j restants) - filtré pour autre raison |
| [PF1783] TARTINAPERO BIO BASILIC 200ML | 350 | Stock suffisant: 424.7u (137j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-19T13:00:09.396Z*
