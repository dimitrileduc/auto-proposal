# Rapport Backtest - Client BONNI, ACHAT

## Contexte

- **Client** : BONNI, ACHAT (ID: 8200)
- **Commande réelle** : S39480
- **Date commande** : 2025-10-01 05:53:38
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 36
- **Tokens**: 22,228 input + 94,571 output = 116,799 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.5% | 19 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 19.0% | Score équilibré global |

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
| **MAE** | 5.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (2)

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
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 24 | 32 | 8.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 6u
- 📊 **Baseline calculée**: 6u
- 📊 **Médiane historique**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 6u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une alternance de commandes très rapprochées (6-8 jours) et un intervalle long récent de 42 jours.
- **Cycle médian (jours)**: 8
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
La structure des commandes montre une tendance à commander des quantités de 6u (moyenne et médiane robuste). Bien qu'un long intervalle de 42 jours ait eu lieu récemment, le cycle médian de 8 jours calculé sur l'historique suggère une prochaine échéance très proche (début octobre). Le risque de rupture est identifié car la date prédite est à moins de 40 jours. On privilégie la quantité récurrente de 6u plutôt que le pic exceptionnel de 16u observé en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 695 tokens
- **Output**: 2,264 tokens
- **Total**: 2,959 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product Quantities**

I'm currently focused on the sales data for FILOU MAYONNAISE, specifically the 1000ml size. I noted a production of 6 units last Wednesday, September 24th, matching the prior week's output. Further back, I see a small order from early August. I'm keen to understand the recent output of ten units in July.


**Calculating Order Intervals**

Now I'm digging deeper into the order cycles. I've calculated the intervals between orders, focusing on the median interval to forecast the next order date. I am predicting the next order will happen very soon, either on October 1st or October 2nd. I'm taking the average into account, and checking the data for the last order to confirm.


**Projecting Order Quantities**

I've examined the order quantities. Considering the recent trend, the median quantity appears to be 6 units. However, I've noted a higher volume of 16 units in September of the previous year. I'm taking the seasonal data and the impact of the outlier "1" into account, with an eye on the baseline order of 6 units.


**Refining Prediction Accuracy**

I'm now zeroing in on the recommended order. Considering the erratic nature of the ordering frequency, I'm setting my confidence level as medium. I am leaning towards recommending 6 units based on the recent order history and calculating the next order date for October 2nd. I have accounted for a higher volume in September of the previous year.


**Synthesizing Recommendations**

I'm now integrating all the data to finalize my recommendations. I'm focusing on the irregular ordering pattern, the median cycle of 8 days, and the predicted date of October 2nd. I am choosing a quantity of 6 units for the next order, while keeping the high risk level and medium confidence in mind.


**Concluding the Analysis**

I've completed my analysis. The irregular pattern, with an 8-day median cycle, points to an order on October 2nd. The recent orders have been 6 units, and I will recommend that quantity, holding a medium confidence level. The impact of the "16" from last September seems to have passed already.




</details>

</details>


<details>
<summary><strong>2. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 24u vs Médiane: 24u (Réel: 32u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 24u
- 📊 **Baseline calculée**: 24u
- 📊 **Médiane historique**: 24u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 8u (25.0%)
- 📉 **Erreur Médiane**: 8u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 24u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Inactivité de 48 jours après un court intervalle de 6 jours en août
- **Cycle médian (jours)**: 6
- **Dernière commande**: 2025-08-13
- **Prochaine prédite**: 2025-09-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Bien que le délai depuis la dernière commande (48 jours) dépasse le seuil théorique de 40 jours, la présence d'une commande en septembre l'année précédente (N-1) et le caractère saisonnier du produit (Vol au Vent) à l'approche du T4 justifient une commande de réapprovisionnement. On se base sur la quantité constante de 24 unités observée en août.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 635 tokens
- **Output**: 2,702 tokens
- **Total**: 3,337 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating historical data**

I'm currently crunching the data for product [PF0088] FILOU VOL AU VENT 800 GR. I've successfully pulled the recent history, specifically from August 7th and 13th, 2025. Now I'm preparing to calculate the history N-1, though the initial data for that period seems to be missing.


**Evaluating Current Risk Level**

I'm now assessing the risk based on the data. It's been 48 days since the last order of [PF0088] FILOU VOL AU VENT 800 GR. The rule's conditions are met, so the client is low-risk. I also note the very small sample for calculating the cycle.


**Assessing Order Patterns**

Okay, I'm now analyzing the order frequency and timing for [PF0088]. The recent history reveals orders in August, and the last order was 48 days ago, which triggered a "non-risk" assessment. However, the short cycle observed in August raises concerns. Comparing this to the N-1 order in September, and considering the product's use case, it seems a replenishment might have been expected already.


**Calculating Order Probability**

I've been wrestling with the data and risk parameters. The 48-day gap since the last order for [PF0088] is concerning, especially given the short interval observed in August. Comparing this year's activity to last year's September order, the client seems behind schedule. Considering the product's seasonality and the rule-based risk assessment, an order is now probable.


**Predicting Next Order Details**

I'm now determining the order parameters. Reviewing the data, the last order was August 13th, with a 6-day cycle observed then. However, the 48-day gap and September's arrival compared to the N-1 order from last year increase the risk. Considering the product, "Vol au Vent," and its likely seasonal use, I'll recommend an order. My recommendation is based on the recent median quantity, being 24 units.


**Concluding Order Recommendations**

I've finalized my analysis and am ready to make a recommendation. Despite the 48-day gap since the last order and a short August cycle, the September N-1 order and seasonal factors warrant an order. Considering the recent median, the recommended quantity is 24 units.


**Confirming Recommendation Parameters**

I'm now revisiting the "days_until_next" calculation, aiming for greater precision. Considering the erratic cycle observed and the 48-day gap, I must reconcile the data with the likely seasonal nature of the product. The last order, the August cycle, and the N-1 September order are all informing my final decision.


**Fine-tuning Recommendations**

I'm now revisiting the "days_until_next" and "predicted_next_date" values. The recent 48-day gap necessitates careful consideration, especially with the limited data and the N-1 September order. I'm focusing on aligning the prediction with the seasonal context and minimizing risk through precise calculations. The JSON format is also being finalized.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 10:24:19: 6u
- 2025-08-13 08:37:02: 6u
- 2025-08-07 14:20:17: 1u
- 2025-07-30 13:32:27: 10u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:20:41: 16u

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>2. [PF0088] FILOU VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-13 08:37:02: 24u
- 2025-08-07 14:20:17: 24u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:20:27: 32u

**✅ Quantité LLM**: 24u (confidence: medium)
**📊 Quantité Réelle**: 32u

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
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 208 | Stock prédit: 183.8u (37j restants) → prédit 208u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 20 | Stock prédit: 26.5u (38j restants) → prédit 20u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 5 | Stock prédit: 5.2u (31j restants) → prédit 5u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 6 | Stock prédit: 5.1u (27j restants) → prédit 6u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 4 | Stock prédit: 3.6u (41j restants) → prédit 4u mais non commandé |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 15 | Stock prédit: 13.9u (65j restants) → prédit 15u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Stock prédit: 1.3u (15j restants) → prédit 3u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 6 | Stock prédit: 2.1u (8j restants) → prédit 6u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 6 | Stock prédit: 1.6u (5j restants) → prédit 6u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 4 | Stock prédit: -0.5u (-4j restants) → prédit 4u mais non commandé |
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 15 | Stock prédit: -1.2u (-3j restants) → prédit 15u mais non commandé |
| [PF0078] FILOU CHASSEUR 5 L | 7 | Stock prédit: -15.7u (-36j restants) → prédit 7u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Stock prédit: 0.4u (14j restants) → prédit 2u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 4 | Stock prédit: -9.8u (-54j restants) → prédit 4u mais non commandé |
| [FIL23] FIL MAYONNAISE 300ML SQUEEZE  | 12 | Stock prédit: -29.5u (-54j restants) → prédit 12u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T11:24:02.930Z*
