# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S39729
- **Date commande** : 2025-10-14 14:05:41
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 251
- **Tokens**: 213,396 input + 594,139 output = 807,535 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 1.5% | 194 produits prédits, 3 corrects |
| **Rappel** | 42.9% | 7 produits réels, 3 détectés |
| **F1-Score** | 3.0% | Score équilibré global |

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
| **MAE** | 133.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK | 200 | 400 | 200.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1778] TARTINAPERO BIO TOMATE 200ML | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1810] LV SAUCE BEARNAISE 250ML WECK | 400 | 200 | 200.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


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
Le client présente un cycle d'approvisionnement extrêmement stable de 24 jours avec une quantité constante de 200 unités. La dernière commande ayant eu lieu il y a seulement 4 jours, la prochaine est attendue sous 20 jours (début novembre), ce qui entre dans l'horizon de risque de 30 jours pour une planification B2B. Aucune variation de volume n'étant observée, on maintient la quantité historique de 200u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 849 tokens
- **Output**: 1,151 tokens
- **Total**: 2,000 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Order Patterns**

I've been analyzing the order history for product PF3394. The data reveals consistent 200-unit orders spaced roughly a month apart, most recently on 2025-10-09. This suggests a stable demand pattern, with potential for further insights if we had N-1 data. I am now looking to determine the exact interval.


**Calculating Future Demand**

I've determined the product's ordering cycle to be approximately 24 days. Based on this, and the latest order on 2025-10-09, I predict the next order will be on 2025-11-02. As today is 2025-10-13, there are 20 days until the next order. Given a 30-day stock horizon, there's a risk of out-of-stock.


**Finalizing Demand Forecast**

I've completed the analysis for product PF3394. I've confirmed a highly predictable demand pattern, estimating a 24-day cycle. My calculations predict an order on 2025-11-02, with 20 days until then, so there is indeed an out-of-stock risk. I am recommending an order of 200 units, with high confidence.




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
- **Pattern temporel**: Cycle mensuel régulier avec une augmentation de volume en 2025
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-03 (dans 21j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: Le client commande principalement en milieu de semaine (mar-jeu) avec un intervalle médian de 25 jours.
- **Outliers détectés**: 700u

**🧠 Raisonnement LLM:**
Le cycle de commande médian est de 25 jours. La dernière commande date du 2025-10-09, ce qui place la prochaine échéance au 2025-11-03. Ce délai (21 jours) est inférieur au seuil de risque de 30 jours, déclenchant une recommandation. La quantité est stabilisée à 434 unités sur les trois dernières commandes de 2025, marquant une hausse par rapport à la base de 330-350 unités observée en 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,183 tokens
- **Output**: 6,536 tokens
- **Total**: 7,719 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Past Performance**

I'm currently analyzing the sales data for the TARTINAPERO BIO TOMATE product. I've noted a significant drop in units sold in October 2025 compared to previous months in 2025. I also see that the units sold in October 2024 were at 272u, with a large increase in the September 2024 period.


**Evaluating the Cycle Time**

I'm now zeroing in on the ordering cycle for TARTINAPERO BIO TOMATE. The median cycle time calculation suggests an interval of roughly 21-25 days. Given the last order date of 2025-10-09, I predict the next order around 2025-11-03, approximately 21 days from now. This aligns with the rule concerning stockout risks within 30 days.


**Predicting the Replenishment**

I'm now refining the order prediction for the TARTINAPERO BIO TOMATE product. Calculating the median cycle time across various periods, I see that the product has had orders placed approximately every 25 days. I've noted the last order was 4 days ago. Therefore the next order should be placed in 21 days. Given this time frame, there is a stockout risk, which must be addressed within the 30-day window. The product's recent order volumes are around 434u. Therefore, I will recommend that amount for the next order.


**Calculating Recommended Order Quantity**

I'm now revisiting the order quantity for the TARTINAPERO BIO TOMATE. Although there's a stockout risk, given the recent order placed just four days ago, and based on the standard 25-day cycle, an immediate order isn't required. I still recommend the recent volume, 434u, to maintain the B2B supply.


**Determining Immediate Action**

The next predicted order is roughly 21 days away, a stockout risk exists within 30 days. Based on historical data, specifically, orders placed in 2025 at 434u, I'm recommending a quantity of 434u. However, with an order placed only four days ago, a new order is not yet needed.


**Analyzing Cycle and Risk**

The data shows a consistent order of 434u every 25 days. Given an order placed four days ago, and the upcoming order in about 21 days, I recognize a stockout risk within the 30-day window. Following prompt instructions, I will recommend the 434u quantity.


**Confirming the Order Quantity**

I'm now torn between prompt rules and real-world scenarios. The cycle is roughly 25 days, and an order was placed 4 days ago. Logic dictates a risk exists, leading to a recommendation, which is supported by the 434u order volume, but a new order now seems premature, since no stockout is imminent. I will follow the instructions.


**Synthesizing Recommendations**

I'm now consolidating all the data and observations. Despite recently ordering, the imminent stockout risk within 30 days, as per instructions, forces a "YES." Considering the product's stable 434u volume in 2025, I will recommend that amount for the next order. However, I am aware that the replenishment is close.


**Confirming Final Analysis**

I'm now fully committed to the decision-making process. I've re-evaluated all data, and the 30-day rule compels a "YES" for risk. Consequently, I recommend ordering 434 units, consistent with the stable 2025 volume, even though a recent order was placed. My confidence is very high.


**Finalizing the Recommendation**

I've rigorously analyzed the data, reaffirming a 25-day cycle and a stable 434u order volume. While a recent order was placed, the 30-day risk window mandates a "YES" for risk. Therefore, I will recommend the 434-unit order, a decision informed by the prompt's instructions, despite my concerns about the immediate need.


**Re-evaluating the Decision**

I'm now re-examining the entire process, including the 30-day rule. The recent 25-day cycle and consistent 434u orders highlight an increased demand. Despite a recent order, I am obligated by the prompt's instructions to flag this as a "RISQUE OUI," and recommend 434u for the next replenishment. I am confident.


**Reiterating the Recommendation**

My analysis is complete and I'm ready to finalize. The 25-day cycle and consistent 434-unit orders in 2025 drive my recommendation. Despite ordering 4 days ago, the prompt's 30-day rule means "RISQUE OUI," dictating a 434-unit order. I am confident that the current stock levels are sufficient.


**Revising Final Analysis**

I'm now confirming the 434-unit recommendation. My 25-day cycle calculation aligns with a 21-day window, triggering the 30-day "RISQUE OUI." While the order was recent, the prompt's instructions are clear. I will follow them.


**Finalizing the Recommendation**

I'm now completely satisfied with the analysis. Considering the recent order and the prompt's rules, I will recommend the next order of 434 units, recognizing the consistent 25-day cycle. Though a recent order was placed, the risk window mandates "RISQUE OUI," aligning with a stable demand pattern.


**Reviewing Final Calculations**

I'm now fully committed to the decision and confirming my previous assessments. The data still points to a consistent 25-day cycle with a 434-unit order volume. Despite ordering four days ago, the 30-day "RISQUE OUI" rule applies. Therefore, I'll recommend the 434 units, informed by the prompt's instructions.




</details>

</details>


<details>
<summary><strong>3. [PF1810] LV SAUCE BEARNAISE 250ML WECK</strong> - LLM: 400u vs Médiane: 400u (Réel: 200u)</summary>

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
- **Pattern temporel**: Cycle mensuel régulier avec épisodes de rapprochement de commandes
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-08_10-10-2025 (prédit autour de 28-30j après la dernière commande, déjà due au 13/10/2025). Il reste 0 jours pour agir (en retard de 3 à 5 jours). Les quantités sont déjà dues si on se calque sur le cycle moyen. En anticipant la commande de octobre, il y a un risque de rupture imminent si ce n'est déjà le cas au 13/10 car la fréquence habituelle (24-30 jours) est dépassée (33 jours). Comme le cycle moyen est de 28 jours, une commande est prévue immédiatement car nous sommes à 33 jours depuis la dernière commande (10 sept). En utilisant la médiane de 28 jours, la date probable de commande était autour du 8 octobre. Nous sommes le 13, donc risque de rupture élevé si on n'intervient pas. Prochaine date simulée : 13/10 (aujourd'hui). En conséquence, nous sommes à 33 jours depuis la dernière. Cycle médian calculé sur l'historique : 22-26 jours. On prédit pour aujourd'hui (car retard).  
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 600u, 800u

**🧠 Raisonnement LLM:**
Le cycle moyen oscille entre 17 et 30 jours. La dernière commande date d'il y a 33 jours (2025-09-10), ce qui indique un besoin immédiat d'approvisionnement pour éviter une rupture. La quantité de 400u est extrêmement stable sur l'historique récent et N-1 (septembre/octobre 2024 à 400u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,185 tokens
- **Output**: 1,603 tokens
- **Total**: 2,788 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Production Intervals**

I'm currently focused on the production intervals for the LV SAUCE BEARNAISE. The data shows significant variation, with intervals of 5 and 17 days. I need to understand what's driving this fluctuation. It seems like the production cycle needs a closer look, especially for the next batch, scheduled to begin around September 10th.


**Projecting Future Orders**

Considering the LV SAUCE BEARNAISE, the most recent cycle suggests a significant shift. Intervals have shortened to 5 and 17 days, a stark contrast to the 24-39 day cycles from the previous year. Based on this, and the current date (Oct 13th), an order is very overdue and a stockout is likely. I'll need to recommend action immediately.


**Predicting Order Requirements**

I've just finalized the order recommendation for the LV SAUCE BEARNAISE. Based on the analysis, a 400-unit order is necessary. The 2025-09-10 order was the last, and the cycle is 28 days, making the order overdue. The product is stable with a consistent volume of 400 units.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


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
<summary><strong>3. [PF1810] LV SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

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

## False Positives (191)

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
| [PF1804] LV SAUCE TARTARE 250ML WECK | 200 | Stock prédit: 151.4u (9j restants) → prédit 200u mais non commandé |
| [PF1773] TARTINAPERO BIO MANGUE 200ML | 434 | Stock prédit: 369.9u (17j restants) → prédit 434u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 56 | Stock prédit: 79.7u (9j restants) → prédit 56u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Stock prédit: 29.4u (4j restants) → prédit 56u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: 37.0u (7j restants) → prédit 56u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | Stock prédit: 30.7u (4j restants) → prédit 56u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 4 | Stock prédit: -1.2u (-2j restants) → prédit 4u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 90 | Stock prédit: 47.8u (23j restants) → prédit 90u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 4 | Stock prédit: 3.5u (43j restants) → prédit 4u mais non commandé |
| [RF001] REFIELD Compote de pommes 500g  | 1 | Stock prédit: 0.6u (12j restants) → prédit 1u mais non commandé |
| [RF002] REFIELD Passata tomates 500G | 1 | Stock prédit: 0.6u (12j restants) → prédit 1u mais non commandé |
| [PF0088] FILOU VOL AU VENT 800 GR | 32 | Stock prédit: 18.0u (12j restants) → prédit 32u mais non commandé |
| [PF3400] JF MAYONNAISE OEUFS SQUEEZE 300ML | 112 | Stock prédit: 61.1u (12j restants) → prédit 112u mais non commandé |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 48 | Stock prédit: 40.2u (56j restants) → prédit 48u mais non commandé |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 24 | Stock prédit: 17.2u (27j restants) → prédit 24u mais non commandé |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 48 | Stock prédit: 38.9u (47j restants) → prédit 48u mais non commandé |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 24 | Stock prédit: 17.2u (27j restants) → prédit 24u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 49 | Stock prédit: 15.3u (5j restants) → prédit 49u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 24 | Stock prédit: 12.9u (12j restants) → prédit 24u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 24 | Stock prédit: 16.0u (22j restants) → prédit 24u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 48 | Stock prédit: 38.9u (47j restants) → prédit 48u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 36 | Stock prédit: 36.6u (35j restants) → prédit 36u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 48 | Stock prédit: 36.9u (36j restants) → prédit 48u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 37 | Stock prédit: -0.7u (0j restants) → prédit 37u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 37 | Stock prédit: -0.7u (0j restants) → prédit 37u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 13 | Stock prédit: 13.1u (24j restants) → prédit 13u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 30 | Stock prédit: 18.9u (22j restants) → prédit 30u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 5 | Stock prédit: 0.9u (3j restants) → prédit 5u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 5 | Stock prédit: 1.3u (4j restants) → prédit 5u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 8 | Stock prédit: 1.1u (3j restants) → prédit 8u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 25 | Stock prédit: 18.3u (35j restants) → prédit 25u mais non commandé |
| [RIT02] RITCHIE Citron - verre 275ml | 30 | Stock prédit: 16.7u (16j restants) → prédit 30u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 360 | Stock prédit: 202.2u (21j restants) → prédit 360u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [LV158] LV Moutarde 200 ml | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Stock prédit: 0.8u (61j restants) → prédit 1u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [MF0021] MF Sauce BBQ 250ml | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 36 | Stock prédit: 8.2u (4j restants) → prédit 36u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 36 | Stock prédit: 12.0u (8j restants) → prédit 36u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 90 | Stock prédit: 60.0u (34j restants) → prédit 90u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 72 | Stock prédit: 56.0u (59j restants) → prédit 72u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 850 | Stock prédit: 303.0u (9j restants) → prédit 850u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 240 | Stock prédit: 160.0u (34j restants) → prédit 240u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 20 | Stock prédit: 10.1u (17j restants) → prédit 20u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 20 | Stock prédit: 7.8u (10j restants) → prédit 20u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 20 | Stock prédit: 8.3u (12j restants) → prédit 20u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 25 | Stock prédit: 14.3u (22j restants) → prédit 25u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 10 | Stock prédit: 6.4u (30j restants) → prédit 10u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 1 | Stock prédit: 1.1u (22j restants) → prédit 1u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 2 | Stock prédit: -0.7u (-4j restants) → prédit 2u mais non commandé |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 3 | Stock prédit: 0.9u (7j restants) → prédit 3u mais non commandé |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 1 | Stock prédit: -0.1u (-1j restants) → prédit 1u mais non commandé |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 8 | Stock prédit: -7.3u (-15j restants) → prédit 8u mais non commandé |
| [PF3254] JEFKE VOL AU VENT 400G | 192 | Stock prédit: 143.5u (53j restants) → prédit 192u mais non commandé |
| [PF1462] LV AIOLI BIO 200ML | 185 | Stock prédit: 124.2u (36j restants) → prédit 185u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: -46.5u (-8j restants) → prédit 56u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | Stock prédit: 20.9u (10j restants) → prédit 56u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 235 | Stock prédit: 89.8u (14j restants) → prédit 235u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 15 | Stock prédit: 6.2u (11j restants) → prédit 15u mais non commandé |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 20 | Stock prédit: 12.5u (41j restants) → prédit 20u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 5 | Stock prédit: 1.6u (11j restants) → prédit 5u mais non commandé |
| [PF3329] LV SDP SAUCE BEARNAISE 125G | 2100 | Stock prédit: 1018.8u (24j restants) → prédit 2100u mais non commandé |
| [PF1776] TARTINAPERO BIO CAROTTE 200ML | 392 | Stock prédit: -200.9u (-9j restants) → prédit 392u mais non commandé |
| [PF3232] LV FR TARTINAPERO BIO TOMATE OLIVE CAPRE 190G | 350 | Stock prédit: 284.6u (113j restants) → prédit 350u mais non commandé |
| [PF1446] JF MAYONNA DU CHEF 470 ML WECK | 220 | Stock prédit: 129.7u (37j restants) → prédit 220u mais non commandé |
| [PF1474] JF MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: -18.9u (-2j restants) → prédit 200u mais non commandé |
| [PF1556] LV TARTINADE BIO MANGUE 200ML | 2625 | Stock prédit: 1769.0u (53j restants) → prédit 2625u mais non commandé |
| [PF1627] LV TARTINADE BIO POTIRON 200ML | 330 | Stock prédit: 488.4u (60j restants) → prédit 330u mais non commandé |
| [PF1788] TARTI ALNATUR BIO CAROTTE 200M | 300 | Stock prédit: 209.6u (60j restants) → prédit 300u mais non commandé |
| [PF1705] LV TARTINADE BIO BASILIC 200ML | 525 | Stock prédit: 19.8u (1j restants) → prédit 525u mais non commandé |
| [PF1706] LV TARTINADE BIO BETTERAVE 200 | 350 | Stock prédit: 781.2u (75j restants) → prédit 350u mais non commandé |
| [PF1558] LV TARTINADE BIO CAROTTE 200ML | 1050 | Stock prédit: -485.8u (-10j restants) → prédit 1050u mais non commandé |
| [PF1704] LV TARTINADE BIO OLIVE 200 | 700 | Stock prédit: 472.9u (54j restants) → prédit 700u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 30 | Stock prédit: 14.5u (25j restants) → prédit 30u mais non commandé |
| [UPI02] Jus de pomme-fraise bio d'UPIGNY 250ml | 10 | Stock prédit: -2.3u (-4j restants) → prédit 10u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 10 | Stock prédit: -2.3u (-4j restants) → prédit 10u mais non commandé |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 15 | Stock prédit: 10.1u (56j restants) → prédit 15u mais non commandé |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 10 | Stock prédit: 6.5u (50j restants) → prédit 10u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Stock prédit: -2.3u (-4j restants) → prédit 10u mais non commandé |
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
| [PF1527] JF SAUCE BEARNAISE 250ML WECK | 367 | Stock prédit: -61.1u (-7j restants) → prédit 367u mais non commandé |
| [PF1639] JF BURGER SQUEEZE 300ML | 150 | Stock prédit: 41.2u (11j restants) → prédit 150u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 90 | Stock prédit: 48.8u (39j restants) → prédit 90u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 270 | Stock prédit: 166.9u (53j restants) → prédit 270u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 180 | Stock prédit: 97.5u (39j restants) → prédit 180u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 90 | Stock prédit: 28.1u (15j restants) → prédit 90u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 8 | Stock prédit: 0.5u (1j restants) → prédit 8u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 7 | Stock prédit: -2.9u (-10j restants) → prédit 7u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 20 | Stock prédit: 1.0u (1j restants) → prédit 20u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 16 | Stock prédit: -5.3u (-8j restants) → prédit 16u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 12 | Stock prédit: -5.9u (-12j restants) → prédit 12u mais non commandé |
| [PF0084] FILOU CARBONNADES 800 GR | 8 | Stock prédit: -1.5u (-5j restants) → prédit 8u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 33 | Stock prédit: -2.4u (-2j restants) → prédit 33u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 30 | Stock prédit: 11.1u (14j restants) → prédit 30u mais non commandé |
| [PF1811] LV SAUCE AIOLI PESTO 250M WECK | 200 | Stock prédit: 121.9u (57j restants) → prédit 200u mais non commandé |
| [PF3237] LV MAYONNAISE POIVRE 250ML WECK  | 200 | Stock prédit: -211.1u (-19j restants) → prédit 200u mais non commandé |
| [PF1775] TARTINAPERO BIO PAPRIKA 200ML | 434 | Stock prédit: 24.3u (2j restants) → prédit 434u mais non commandé |
| [PF1779] TARTINAPERO BIO HOUMOUS 200ML | 380 | Stock prédit: 224.4u (39j restants) → prédit 380u mais non commandé |
| [PF1855] LV TARTINAPERO BIO TRIPACK | 1243 | Stock prédit: -497.7u (-10j restants) → prédit 1243u mais non commandé |
| [PF2978] TARTINAPERO BIO AIL OURS 200ML | 434 | Stock prédit: -12.2u (-1j restants) → prédit 434u mais non commandé |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 1600 | Stock prédit: 752.4u (27j restants) → prédit 1600u mais non commandé |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 300 | Stock prédit: -352.9u (-20j restants) → prédit 300u mais non commandé |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 300 | Stock prédit: -352.9u (-20j restants) → prédit 300u mais non commandé |
| [PF1469] JF MAYONNAI TRUFFES 250ML WECK | 400 | Stock prédit: 141.9u (20j restants) → prédit 400u mais non commandé |
| [PF1526] JF SAUCE TARTARE 250ML WECK | 400 | Stock prédit: 166.3u (26j restants) → prédit 400u mais non commandé |
| [PF1967] JF SAUCE AIOLI 250ML WECK | 200 | Stock prédit: 65.5u (18j restants) → prédit 200u mais non commandé |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 60 | Stock prédit: -26.6u (-11j restants) → prédit 60u mais non commandé |
| [PF3370] JF MAYONNAISE CITRON 250ML WECK | 200 | Stock prédit: 44.2u (10j restants) → prédit 200u mais non commandé |
| [PF3387] JF VINAIGRETTE CAESAR 240ML | 200 | Stock prédit: -136.4u (-15j restants) → prédit 200u mais non commandé |
| [PF3383] JF VINAIGRETTE CIBOULETTE 240ML  | 200 | Stock prédit: -136.4u (-15j restants) → prédit 200u mais non commandé |
| [PF3386] JF VINAIGRETTE MIEL MOUTARDE 240ML | 200 | Stock prédit: -136.4u (-15j restants) → prédit 200u mais non commandé |
| [PF3385] JF VINAIGRETTE TRUFFES 240ML | 200 | Stock prédit: -136.4u (-15j restants) → prédit 200u mais non commandé |
| [PF3384] JF VINAIGRETTE FINES HERBES 240ML  | 200 | Stock prédit: -136.4u (-15j restants) → prédit 200u mais non commandé |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 1 | Stock prédit: -0.8u (-17j restants) → prédit 1u mais non commandé |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 100 | Stock prédit: -100.0u (-22j restants) → prédit 100u mais non commandé |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 2064 | Stock prédit: 929.4u (30j restants) → prédit 2064u mais non commandé |
| [PF1685] LV TARTINADE BIO CAROTTE 400G | 166 | Stock prédit: 191.0u (62j restants) → prédit 166u mais non commandé |
| [PF2980] LV TARTINADE BIO AIL OURS200ML | 700 | Stock prédit: -540.0u (-16j restants) → prédit 700u mais non commandé |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 500 | Stock prédit: 240.9u (42j restants) → prédit 500u mais non commandé |
| [PF3365] LV BE TARTINADE BIO BROCOLI 190G | 932 | Stock prédit: 459.4u (44j restants) → prédit 932u mais non commandé |
| [PF3307] LV DE BROTAUFSTRICH BIO DATTE CHILI 180G | 600 | Stock prédit: 178.1u (11j restants) → prédit 600u mais non commandé |
| [PF3233] LV BE TARTINADE BIO TOSCANE 190G | 350 | Stock prédit: 508.4u (59j restants) → prédit 350u mais non commandé |
| [PF3321] LV BE TARTINADE BIO KIDS 190G | 466 | Stock prédit: 232.8u (50j restants) → prédit 466u mais non commandé |
| [PF3395] LV SDP SAUCE COCKTAIL 125G | 2100 | Stock prédit: -2768.2u (-29j restants) → prédit 2100u mais non commandé |
| [PF3392] LV FR TARTINAPERO BIO ASPERGE BOCAL 190G | 434 | Stock prédit: -572.1u (-28j restants) → prédit 434u mais non commandé |
| [PI3072] PI TARTI POIS CHICHES BIO CONS 250G  | 3300 | Stock prédit: 1449.8u (18j restants) → prédit 3300u mais non commandé |
| [PI3073] PI TARTI TOMATE BIO CONS 250 | 5400 | Stock prédit: 2645.5u (19j restants) → prédit 5400u mais non commandé |
| [PI3346] PI TARTINADE BETTERAVE BIO CONS 250G | 6000 | Stock prédit: 714.5u (6j restants) → prédit 6000u mais non commandé |
| [PF1721] LV VIN CAESAR PET 250 BIO | 260 | Stock prédit: 64.5u (16j restants) → prédit 260u mais non commandé |
| [PF1720] LV VIN MIEL MOU PET 250 BIO | 260 | Stock prédit: 113.0u (39j restants) → prédit 260u mais non commandé |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 1800 | Stock prédit: 781.2u (23j restants) → prédit 1800u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 50 | Stock prédit: 1.6u (1j restants) → prédit 50u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 3 | Stock prédit: -4.0u (-29j restants) → prédit 3u mais non commandé |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 15 | Stock prédit: 5.9u (33j restants) → prédit 15u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 15 | Stock prédit: 2.6u (11j restants) → prédit 15u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 10 | Stock prédit: -14.5u (-31j restants) → prédit 10u mais non commandé |
| [JOY02] JOY! Confiture bio à la fraise 370g | 202 | Stock prédit: -20.3u (-4j restants) → prédit 202u mais non commandé |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 200 | Stock prédit: 37.2u (12j restants) → prédit 200u mais non commandé |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 200 | Stock prédit: -45.5u (-10j restants) → prédit 200u mais non commandé |
| [JOY06] JOY! Confiture bio à la rhubarbe 370g | 200 | Stock prédit: -290.9u (-32j restants) → prédit 200u mais non commandé |
| [JOY08] JOY! Confiture bio à la framboise 370g | 200 | Stock prédit: -290.9u (-32j restants) → prédit 200u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 5 | Stock prédit: -1.0u (-9j restants) → prédit 5u mais non commandé |
| [PI3200] PI TARTI AUBERGINE BIO CONS 250 | 1152 | Stock prédit: -302.6u (-12j restants) → prédit 1152u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 1 | Stock prédit: 0.9u (525j restants) → prédit 1u mais non commandé |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 1 | Stock prédit: 0.8u (229j restants) → prédit 1u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 1 | Stock prédit: -0.9u (-32j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY bio functional & energy drink citorn & gingembre - 250ml | 20 | Stock prédit: -52.8u (-57j restants) → prédit 20u mais non commandé |
| [BUD03] BUDDY bio functional & energy drink mangue passion - 250ml | 60 | Stock prédit: -33.6u (-28j restants) → prédit 60u mais non commandé |
| [BUD04] BUDDY bio functional & energy drink grenade hibiscus - 250ml | 60 | Stock prédit: -33.6u (-28j restants) → prédit 60u mais non commandé |
| [PF3331] LV SDP SAUCE POIVRE 125G | 2100 | Stock prédit: 457.4u (21j restants) → prédit 2100u mais non commandé |
| [PF3330] LV SDP SAUCE TARTARE 125G | 2100 | Stock prédit: 457.4u (21j restants) → prédit 2100u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 200 | Stock prédit: -343.3u (-60j restants) → prédit 200u mais non commandé |


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
| [PF1797] LV MAYONNAI TOMATE 250ML WECK | 200 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK | 256 | Stock suffisant: 861.9u (177j restants > seuil 30j) |
| [PF3393] LV FR TARTINAPERO BIO AVOCAT BOCAL 190G | 434 | Stock: 357.4u (13j restants) - filtré pour autre raison |
| [PF1783] TARTINAPERO BIO BASILIC 200ML | 350 | Stock suffisant: 424.7u (137j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-19T14:57:24.526Z*
