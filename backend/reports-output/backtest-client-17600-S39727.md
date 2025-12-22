# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S39727
- **Date commande** : 2025-10-14 13:50:03
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 32
- **Tokens**: 29,758 input + 68,133 output = 97,891 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 19.0% | 21 produits prédits, 4 corrects |
| **Rappel** | 57.1% | 7 produits réels, 4 détectés |
| **F1-Score** | 28.6% | Score équilibré global |

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
| **MAE** | 164.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 62.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 19.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 200 | 400 | 200.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 400 | 200 | 200.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV356] LV SET 3 X 135G trisauces  SDP | 512 | 256 | 256.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - LLM: 200u vs Médiane: 198u (Réel: 400u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 200u
- 📊 **Baseline calculée**: 200u
- 📊 **Médiane historique**: 198u
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 200u (50.0%)
- 📉 **Erreur Médiane**: 202u (50.5%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 200u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Mensuel stable (cycle de 22 à 27 jours)
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-11-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une régularité parfaite sur les 3 derniers mois avec un volume constant de 200 unités par commande. L'intervalle médian est de 25 jours, plaçant la prochaine commande estimée au 2 novembre. Étant à 20 jours de cette date, une anticipation est nécessaire pour le cycle B2B.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 879 tokens
- **Output**: 1,148 tokens
- **Total**: 2,027 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Sales Data**

I'm currently analyzing the sales data for the LV "CLASSIQUE" WECK sauce. Recent transactions show two sales dates, with 200 units each. I'm focusing on the dates and quantities to determine trends. I'm especially interested in whether these are regular occurrences or one-offs.


**Calculating Future Orders**

I've determined a monthly replenishment cycle of approximately 25 days for the "BOURGUIGNONNE" sauce. Based on the 2025-10-08 order, I predict the next order around 2025-11-02. With today being 2025-10-13, the anticipation window is a comfortable 20 days.


**Assessing Replenishment Needs**

I've completed the analysis of the "BOURGUIGNONNE" sauce. It reveals a highly predictable monthly order cycle, about 25 days, with orders of 200 units. Based on this, I'm confident a replenishment is likely around November 2nd, about 20 days from today. I'm recommending the standard quantity.




</details>

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

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
- **Pattern temporel**: Cycle mensuel variable entre 16 et 34 jours
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-11-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité remarquable sur les trois dernières commandes de 2025 avec exactement 434u, ce qui marque une augmentation par rapport à la base de 350u en 2024. Avec un cycle médian détecté de 25 jours et une dernière commande le 08/10, la prochaine échéance est estimée sous 20 jours, justifiant une action anticipée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,159 tokens
- **Output**: 1,570 tokens
- **Total**: 2,729 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Sales Trends**

I'm currently focused on the sales figures for the LV BIO Tartin'apero. Looking at the data from October 8th, I see 434 units sold. This seems consistent with the previous months of this year, specifically September and August, which also reported 434 units. I'm now comparing this against the previous year.


**Predicting Order Frequency**

I'm now calculating the typical cycle time between orders for the LV BIO Tartin'apero. Using the dates from the past few months, the median is about 25 days. Given this, and the last order date of October 8th, I'm anticipating the next one around November 2nd. The risk assessment indicates a possible need for action.


**Calculating Inventory Needs**

My analysis indicates a "RISQUE OUI" due to the predicted order date of November 2nd, which is only 20 days away. Given the consistent sales of 434 units in the last three months, and the previous year's sales of 350, I'm recommending an order of 434 units, maintaining the recent stable quantity.


**Validating Data Outputs**

I am now verifying the data format and calculations, particularly the JSON output. I'm focusing on ensuring the date patterns are correct, and that the `recommended_quantity` is an integer, alongside other requirements. The date calculations, including the predicted next order date, have been double-checked for accuracy.




</details>

</details>


<details>
<summary><strong>3. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - LLM: 400u vs Médiane: 500u (Réel: 200u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 400u
- 📊 **Baseline calculée**: 400u
- 📊 **Médiane historique**: 500u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: 300u (150.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 400u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier (~30 jours) avec des phases de réapprovisionnement rapprochées occasionnelles.
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-10 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 600u

**🧠 Raisonnement LLM:**
La dernière commande date du 10 septembre, soit il y a 33 jours. L'historique N-1 confirme une commande à la même période (10 octobre 2024). Le cycle médian de 30 jours est dépassé, rendant le risque de rupture imminent. La quantité de 400u est la constante historique (mode) observée à la fois sur 2025 et 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,188 tokens
- **Output**: 1,521 tokens
- **Total**: 2,709 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Data**

I'm currently analyzing the production data for LV "CLASSIQUE" WECK Sauce BEARNAISE (LV235). I'm focusing on the recent 2025 data, specifically the intervals between production runs. I see a pattern of decreasing intervals, which suggests an acceleration in production frequency. I'll need to investigate further to confirm if this trend continues.


**Evaluating Order Frequency**

I've examined the production intervals for LV "CLASSIQUE" WECK Sauce BEARNAISE, specifically comparing 2024 and 2025 data. The recent 2025 production runs show accelerating frequency, with decreasing intervals. Comparing to the 2024 order history, the timing suggests an order should have been placed recently. Given this, I assess a "RISK YES" decision is warranted.


**Assessing Quantity and Baseline**

I've examined the recent production history for LV "CLASSIQUE" WECK Sauce BEARNAISE, focusing on order quantities and their frequency. Considering the 2024 and 2025 production runs, I see a baseline of 400u, with an outlier of 600u. I am confident that an order for 400u is justified, given the current timing. My assessment strongly suggests an immediate order is warranted.


**Determining the Order Details**

I have finished the full analysis. Given the 33-day gap since the last order and the historical pattern, an order is definitely overdue. The baseline quantity of 400u, based on the stable trend and recent history, seems appropriate, so my recommendation is for an immediate order of 400u. I am very confident.




</details>

</details>


<details>
<summary><strong>4. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - LLM: 512u vs Médiane: 512u (Réel: 256u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 512u
- 📊 **Baseline calculée**: 576u
- 📊 **Médiane historique**: 512u
- ✅ **Réel commandé**: 256u
- 📉 **Erreur LLM**: 256u (100.0%)
- 📉 **Erreur Médiane**: 256u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 512u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Saisonnier / Sporadique (cycle N-1 de 55 jours)
- **Cycle médian (jours)**: 55
- **Dernière commande**: 2024-10-01
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un comportement saisonnier marqué en N-1 avec d'importants volumes en août et octobre, mais aucune activité sur les 90 derniers jours de 2025. Bien que le cycle de 55 jours soit légèrement inférieur au seuil de sporadicité strict (60j), l'absence totale de commandes récentes combinée à l'historique N-1 indique une commande imminente. La quantité recommandée (512u) se base sur la dernière observation de la période équivalente en N-1, reflétant la tendance légèrement baissière par rapport au volume d'août 2024 (640u) tout en restant conservateur.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 817 tokens
- **Output**: 3,597 tokens
- **Total**: 4,414 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Product LV356**

I'm currently focused on the LV356 product, specifically the LV SET 3 X 1 35G trisauces SDP. The target date for this is October 13th, 2025. I'm examining its recent history, but there's nothing logged for the last three months. Looking back to 2024, I see an output of 640u recorded on August 7th and then activity on October. My analysis is ongoing.


**Assessing Order Patterns**

The absence of recent orders is now leading me to consider a potential seasonal pattern. Given the October 1st, 2024 order, and the target date of October 13th, 2025, the lack of activity within the last 90 days, or even since July, is concerning. The 55-day cycle observed last year strengthens the argument for a high-risk situation within the next month, potentially.


**Concluding Order Prediction**

I'm now determining the quantity to order, or if no order is needed. The absence of 2025 orders, coupled with the October 1st, 2024 order, suggests a seasonal pattern. I'm focusing on the N-1 data, which shows quantities of 640u and 512u. Given it's mid-October, and considering the observed downward trend, a quantity of approximately 512 units seems appropriate, pending further insights.


**Determining the Order Quantity**

Now, I'm focusing on the final order quantity. Given the seasonal nature implied by N-1 data, and it being mid-October, the downward trend suggests ordering around 512 units. However, the lack of 2025 orders does raise questions about the product's continued availability. Further, it is past the expected date, which suggests a need for an immediate assessment.


**Confirming Order Recommendation**

Considering the limited N-1 data, which only has two data points, the order recommendation requires more data. Even with the "3+ orders" rule, and given the seasonality, I'm sticking with a 512 unit order. I'm operating under the assumption that the lack of 2025 data might just indicate an upcoming, seasonal order. My confidence is medium.


**Synthesizing Final Recommendations**

The data has presented challenges. The order quantity of 512 units, or potentially none, is still in consideration. I'm focusing on the sparse, only 2-data-point, N-1 history, and the complete lack of orders in 2025 so far. I am assessing the risks of both under- and over-ordering. I'm considering potential for seasonality. My confidence is only medium given the ambiguity.


**Finalizing the Recommendation**

I'm now integrating all data points. The product's sporadic nature, the absence of recent orders, and the N-1 data pointing to an October order are crucial. The 512-unit baseline, derived from the last order, remains my recommendation. I'm noting the limited data as well as the seasonal nature.


**Adjusting for Safety**

I'm now implementing the 576 unit baseline quantity, which is the median, but recommending 512. Given the product's sporadic nature, with seasonal orders anticipated, I'm aiming for a cautious, yet responsive, approach. The downward trend in N-1 data supports the slightly lower quantity. I'm keeping a close eye on any incoming changes.


**Revisiting Quantity Recommendation**

I am now focusing on the final recommendation. Due to the limited N-1 data, only 2 points, I'm sticking to the baseline of 576 units, the median. The product has shown a downward trend, and the season suggests 512 units. Given the imminence of the order and the potential for a seasonal demand surge, I'm going with 512, with medium confidence.


**Re-evaluating Seasonality**

I'm focused on the "Sporadic" designation, and its implications. Although the rule regarding a "sporadic" pattern requires 60 days between orders, and I have 55, I'm still treating it as sporadic. Given the lack of recent orders, but with an N-1 seasonal pattern, a 512-unit order is safest.


**Reviewing Final Adjustments**

I'm now consolidating the final decision. Even though N-1 data is limited to two points, I'm maintaining the 512-unit order, as the latest order, for this season, after a recent review of my thought process. The baseline is still 576, but given the trend, 512 seems the best and safest.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 200u
- 2025-09-16 11:31:53: 200u
- 2025-08-20 10:22:31: 196u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 200u (confidence: high)
**📊 Quantité Réelle**: 400u

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 434u
- 2025-09-04 09:10:58: 434u
- 2025-08-19 07:26:59: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:46:54: 350u
- 2024-09-11 07:42:30: 350u
- 2024-08-08 07:00:55: 350u
- 2024-08-07 07:54:26: 350u
- 2024-06-11 08:53:39: 350u
- 2024-05-23 09:00:22: 305u
- 2024-04-24 08:56:28: 350u
- 2024-04-02 13:39:05: 350u
- 2024-01-30 09:51:19: 350u
- 2023-12-19 08:25:50: 350u
- 2023-11-07 14:19:04: 350u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 09:37:56: 400u
- 2025-09-04 09:10:58: 400u
- 2025-08-19 07:26:59: 600u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-10 12:10:09: 400u
- 2024-09-11 07:42:30: 200u
- 2024-08-08 07:00:55: 200u
- 2024-08-07 07:54:26: 400u
- 2024-06-11 08:46:37: 800u
- 2024-05-23 09:00:22: 400u
- 2024-04-24 08:56:28: 400u
- 2024-04-02 13:39:05: 400u
- 2024-03-25 14:38:30: 200u
- 2024-03-13 08:07:55: 400u
- 2024-01-30 09:51:19: 400u
- 2023-12-19 08:26:46: 400u

**✅ Quantité LLM**: 400u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>


<details>
<summary><strong>4. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:31:17: 512u
- 2024-08-07 07:56:04: 640u

**✅ Quantité LLM**: 512u (confidence: medium)
**📊 Quantité Réelle**: 256u

</details>




---

## False Positives (17)

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
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | Stock prédit: 145.8u (10j restants) → prédit 200u mais non commandé |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Stock prédit: 345.1u (25j restants) → prédit 400u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: 354.3u (17j restants) → prédit 434u mais non commandé |
| [LV358] LV SDP SAUCE BEARNAISE 125G (copie) | 350 | Stock prédit: 175.0u (25j restants) → prédit 350u mais non commandé |
| [LV302] LV BIO Tartin'apero Carotte Gingembre SDP 200 ml  | 350 | Stock prédit: -186.4u (-9j restants) → prédit 350u mais non commandé |
| [LV310] LV BIO Tartin'apero Betteraves SDP 200ml | 350 | Stock prédit: 268.5u (85j restants) → prédit 350u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -81.5u (-10j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 200 | Stock prédit: -98.0u (-12j restants) → prédit 200u mais non commandé |
| [LV317] LV "CLASSIQUE" WECK Vinaigrette CIBOULETTE 200ml | 150 | Stock prédit: 115.5u (127j restants) → prédit 150u mais non commandé |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Stock prédit: -70.9u (-5j restants) → prédit 434u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 434 | Stock prédit: 141.9u (18j restants) → prédit 434u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 256 | Stock prédit: -125.5u (-12j restants) → prédit 256u mais non commandé |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Stock prédit: -19.8u (-1j restants) → prédit 434u mais non commandé |
| [LV364] LV SDP SAUCE Cocktail  125ML | 350 | Stock prédit: -4.0u (0j restants) → prédit 350u mais non commandé |
| [LV306] LV BIO Tartin'apero Olives Vertes SDP200 ml  | 350 | Stock prédit: -20.6u (-2j restants) → prédit 350u mais non commandé |
| [LV309] LV BIO Tartin'apero Lentilles curry SDP 200ml | 350 | Stock prédit: 168.3u (50j restants) → prédit 350u mais non commandé |
| [LV333] LV "CLASSIQUE" WECK Mayonnaise au WASABI 250ml SDP  | 200 | Stock prédit: 125.5u (90j restants) → prédit 200u mais non commandé |


---

## False Negatives (3)

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
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 200 | Stock: 31.2u (18j restants) - filtré pour autre raison |
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 350 | Stock suffisant: 421.7u (137j restants > seuil 30j) |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 434 | Stock: 335.7u (13j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T14:52:39.625Z*
