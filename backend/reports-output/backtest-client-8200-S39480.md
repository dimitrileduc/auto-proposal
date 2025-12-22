# Rapport Backtest - Client BONNI, ACHAT

## Contexte

- **Client** : BONNI, ACHAT (ID: 8200)
- **Commande réelle** : S39480
- **Date commande** : 2025-10-01 05:53:38
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 36
- **Tokens**: 29,281 input + 91,551 output = 120,832 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.0% | 20 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle court initial (7j) avec une interruption exceptionnelle de 42 jours en août-septembre.
- **Cycle médian (jours)**: 8
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-02 (dans 2j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Les commandes tombent majoritairement le mercredi (75% des cas en 2025), la prochaine est prévue pour mercredi 01/10 ou jeudi 02/10.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian détecté est de 8 jours malgré une anomalie temporelle en septembre. La dernière commande datant du 24/09, une nouvelle commande est attendue sous 48h. La quantité recommandée de 6 unités correspond à la médiane exacte des commandes récentes et à la répétition stricte observée sur les deux dernières dates (6u chacune). L'historique N-1 (16u) n'est pas retenu car il s'agit d'un point isolé ne confirmant pas une tendance saisonnière structurelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 891 tokens
- **Output**: 3,213 tokens
- **Total**: 4,104 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product History**

I'm currently reviewing the production history for PF0121. The recent output of Filou Mayonnaise has been volatile. I see six units produced on the 24th, a similar number in August, and smaller batches before that. This variation merits further investigation into the cause.


**Predicting Production Schedules**

I'm now calculating potential production needs for Filou Mayonnaise. Considering a weekly cycle, the next order is estimated around October 2nd. However, acknowledging the longer gaps observed, particularly the 42-day pause, a November 5th date is also possible. I'm focusing on these divergent scenarios to assess the risk of product shortages within a 30-day timeframe.


**Evaluating the Production Cycle**

I'm now zeroing in on the safety stock levels. A baseline of six units seems appropriate, considering the recent consistent demand and a stable trend. There is a potential need for a replenishment order in the first week of October.


**Forecasting Demand Patterns**

I'm now assessing the risk of product rupture within the next 30 days. Considering the irregular ordering cycles and recent consistent demand of six units, a replenishment order around October 8th seems likely, potentially sooner. The 42-day gap observed earlier introduces uncertainty, but the near-term risk appears manageable, warranting a close watch.


**Finalizing the Risk Assessment**

I've determined a risk of product rupture within the next 30 days. Evaluating the 6u median quantity and the irregular but recent activity, with a last order on September 24th, the next order is likely between October 2nd and October 15th. Given this, I'm recommending a replenishment order of 6 units.


**Determining the Replenishment**

I'm now assessing the next order date and quantity for Filou Mayonnaise, reviewing recent data. The analysis of the product's ordering pattern reveals an erratic cycle. I am leaning toward a replenishment order of 6 units, considering the recent consistent demand. I am confident that there is a high probability of product rupture within 30 days.


**Assessing Order Intervals**

I'm now revisiting the order cycle, recognizing the pattern's irregularity. The 42-day gap throws off simple weekly or bi-weekly expectations. Calculating medians shows potential order dates in October, but considering the varying intervals, I'm focusing on the risk assessment within a 30-day window.


**Calculating The Replenishment**

I've finalized my analysis and generated the JSON output. The next order date is estimated around October 2nd, with a quantity of 6 units. While uncertainty persists due to a 42-day gap, the last two orders align with this assessment, increasing my confidence in these recommendations, and a high probability of product rupture within 30 days.




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
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Activité par grappes (6 jours d'intervalle en août) suivie d'une latence prolongée de 48 jours.
- **Cycle médian (jours)**: 6
- **Dernière commande**: 2025-08-13
- **Prochaine prédite**: 2025-09-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Bien que le délai depuis la dernière commande (48 jours) dépasse le seuil habituel de 45 jours, la présence d'une commande à la même période en N-1 (septembre) et le fait qu'une commande a eu lieu il y a moins de 90 jours indiquent un besoin de réapprovisionnement imminent. La quantité recommandée de 24 unités s'appuie sur la médiane parfaite des commandes récentes en 2025, privilégiant la stabilité actuelle par rapport au volume légèrement plus élevé de l'an dernier (32u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 831 tokens
- **Output**: 2,354 tokens
- **Total**: 3,185 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Production Volumes**

I'm currently focused on the production volume forecast for the 'FILOU VOL AU VENT' product. Based on the recent history, I have a clear picture of the last two production runs with 24 units each, and further back, the September 2024 run with 32 units. Now I am trying to determine the interval between those two dates.


**Calculating Order Frequency**

I've taken a deeper dive into the provided data and I'm focused on the order frequency. There's a clear 6-day cycle in August based on the initial information. However, I've now calculated that 48 days have passed since the last order, and I'm concerned about a potential stockout or a seasonal factor impacting demand. Given that the N-1 date from the previous year is within this time, I am looking at seasonality.


**Interpreting Ordering Patterns**

After a thorough review, I've pinpointed a key discrepancy: the 48-day gap since the last order, contrasting sharply with the 6-day interval observed in August. Given the N-1 order from last September and the product's typical seasonality, I think a replenishment order is highly probable now or soon.


**Evaluating Replenishment Timing**

I'm now zeroing in on the replenishment timing for the product, considering its sporadic ordering behavior. Despite the 48-day gap since the last order, and following the rule, the recent history of an order in September N-1 indicates a likely seasonal replenishment is due now, and 24 units are likely the correct quantity.


**Reassessing Risk Profiles**

I'm now refining the decision criteria, particularly the definition of a "regular cycle" for this product. The limited data suggests a pattern of intense activity followed by a pause. Considering N-1 and the current timing, a replenishment is likely and I am leaning towards recommending 24 units, although confidence remains moderate due to the 48-day gap since the last order.


**Refining the Recommendation**

I'm now revisiting the decision rules. The initial assumption of a regular cycle based on a 6-day gap is questionable. Given that the 48-day absence falls near an N-1 September order, and considering the product's likely seasonal nature, I recommend a replenishment of 24 units.


**Confirming Replenishment Recommendation**

Based on the latest data, the product's ordering pattern is sporadic with a 48-day gap since the last order, but similar to the prior year. While a 6-day cycle was observed, it's not consistent. The seasonal nature combined with the current date suggests replenishment is needed, so I'm sticking with a 24-unit recommendation.




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

## False Positives (18)

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
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 201 | Stock prédit: 183.8u (37j restants) → prédit 201u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 20 | Stock prédit: 26.5u (38j restants) → prédit 20u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 5 | Stock prédit: 5.2u (31j restants) → prédit 5u mais non commandé |
| [PF3274] JF BURGER SAUCE 925ML | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 4 | Stock prédit: 3.6u (41j restants) → prédit 4u mais non commandé |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 15 | Stock prédit: 13.9u (65j restants) → prédit 15u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Stock prédit: 1.3u (15j restants) → prédit 3u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 6 | Stock prédit: 2.1u (8j restants) → prédit 6u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 7 | Stock prédit: 1.6u (5j restants) → prédit 7u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 4 | Stock prédit: -0.5u (-4j restants) → prédit 4u mais non commandé |
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 15 | Stock prédit: -1.2u (-3j restants) → prédit 15u mais non commandé |
| [PF0078] FILOU CHASSEUR 5 L | 7 | Stock prédit: -15.7u (-36j restants) → prédit 7u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Stock prédit: 0.4u (14j restants) → prédit 2u mais non commandé |
| [PF0096] FILOU MOUTARDE 3 KG | 47 | Stock prédit: -20.0u (-31j restants) → prédit 47u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | Stock prédit: 0.8u (18j restants) → prédit 4u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Stock prédit: 0.3u (14j restants) → prédit 2u mais non commandé |
| [JF066] FIL MOUTARDE 300G BOCAL | 4 | Stock prédit: 1.2u (31j restants) → prédit 4u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:53:15.459Z*
