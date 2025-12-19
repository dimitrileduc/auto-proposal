# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S40258
- **Date commande** : 2025-11-12 08:36:42
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 31
- **Tokens**: 69,706 input + 55,732 output = 125,438 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.9% | 31 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 22.9% | Score équilibré global |

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
| Exact Match (=0u) | 4 | Égalité parfaite |
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
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | 200 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie) | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV311] LV BIO Tartin'apero Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 434u
- 📊 **Baseline calculée**: 406u
- 📊 **Médiane historique**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 434u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier mais fréquent, médiane de 13 jours
- **Cycle médian (jours)**: 13
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-16 (dans 5j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: Commande généralement en début ou milieu de semaine.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle d'approvisionnement médian est de 13 jours (intervalles de 6 et 20 jours), plaçant la prochaine commande autour du 16 novembre. La tendance est à la hausse par rapport à l'année précédente (350u en 2024 vs 434u récemment). La quantité 434u est récurrente sur les commandes récentes (2 fois sur 3), suggérant un format logistique ou un besoin stabilisé à ce niveau.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,264 tokens
- **Output**: 1,659 tokens
- **Total**: 3,923 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Performance**

I'm currently tracking the sales performance of the LV BIO Tartin'apero Basilico. Focusing on the recent history, I've noted a significant increase in units sold on the 3rd of November. I am curious to understand the drivers behind this notable jump from the earlier figure in October, specifically any marketing initiatives or seasonal trends.


**Predicting Order Timeline**

Now, I'm calculating the potential next order date for the LV BIO Tartin'apero Basilico. Based on the 6 and 20-day intervals between recent orders, the average cycle is 13 days. Given the last order on November 3rd, I estimate a potential order around November 16th. This puts the next order within the next 30 days, indicating a potential need to watch this product carefully.


**Evaluating Quantity Preferences**

My analysis indicates that 434 units have become the most recent order quantity for the LV BIO Tartin'apero Basilico, while 350 units are also frequently ordered. Observing the past and present, I discern a recent trend upwards, suggesting a potential shift in the standard order size.


**Refining Cycle and Quantity**

I've just finished reviewing the calculations. The median cycle of 13 days points to an imminent order, likely around November 16th. My analysis also shows a shift upwards in volume. The most recent quantities are 434 and 350. My decision, therefore, is to recommend an order of 434 units, with the next one within the next 30 days.




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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire de 6 jours identifié sur les commandes récentes
- **Cycle médian (jours)**: 6
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-10-26 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un pattern extrêmement régulier en octobre avec trois commandes consécutives de 434u tous les 6 jours. La commande d'août de 868u (864+4) correspond exactement à un multiple de ce lot (2x434u). La dernière commande datant du 20 octobre, le client est en retard de plus de 20 jours sur son cycle habituel, ce qui génère un risque de rupture imminent. On recommande la quantité standard de 434u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,212 tokens
- **Output**: 1,844 tokens
- **Total**: 4,056 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Weekly Trends**

I'm currently focused on projecting weekly sales trends for the Tartin'apero. Initial data from October 20th shows 434 units sold. I'm crunching numbers, incorporating the 30-day horizon, and aiming to forecast sales for the next few weeks, taking into account any potential seasonality.


**Identifying Order Patterns**

I'm now zeroing in on the order intervals. The 6-day cycle is incredibly consistent in October. The significant gap between August and October is also catching my attention, and I'm flagging this as a potential point of concern. I'm focusing on the "late" status, given the recent activity and current date. Phase 1: Risk = Yes.


**Forecasting Demand Refined**

I've finalized my analysis of the LV BIO Tartin'apero Avocat 180g product. Confirmed a consistent 6-day order cycle with a baseline quantity of 434 units. The client is significantly overdue for an order, which indicates an immediate need. I'm recommending 434 units, with high confidence in my assessment.


**Evaluating Order Delays**

I'm now deep-diving into the 'days_until_next' field. Realizing the cycle's significance, the client's significant lateness necessitates an adjustment. The correct date should be the most recent one, and the number of days until the next order is zero. With the patterns locked, I've confirmed my recommendation of 434 units, with the highest confidence.


**Finalizing Recommendations**

I've now addressed the last order date, cycle, and subsequent calculations. It's evident the client is significantly behind schedule. Considering the consistent 6-day cycle and recent order history of 434 units, I've confirmed my earlier recommendation: 434 units, with the highest confidence level. I've also set the `days_until_next` to 0.




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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières par cycle médian de 16 jours, client actuellement en retard de commande
- **Cycle médian (jours)**: 16
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: Habitudes de commande en milieu de semaine (mar-jeu), dernière commande il y a 34 jours.
- **Outliers détectés**: 600u, 400u

**🧠 Raisonnement LLM:**
Le cycle médian calculé sur l'historique récent est de 16 jours. Avec une dernière commande au 08/10, le client est en retard de 18 jours par rapport à son rythme habituel au moment de la date actuelle (11/11). La quantité de 200u est extrêmement stable dans l'historique (observée dans plus de 80% des cas), suggérant un conditionnement logistique fixe (type palette ou couche). Malgré la saisonnalité forte des produits à la truffe en fin d'année (observée en N-1 avec une commande de 400u en décembre), la prochaine commande devrait respecter le standard de 200u ou constituer le premier palier de stock pour les fêtes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,470 tokens
- **Output**: 2,908 tokens
- **Total**: 5,378 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Recent Production Data**

I'm focused on the production history for LV312, the "CLASSIQUE" truffle mayonnaise. The last three months are the primary focus. I see consistent runs of 200 units in September and October. I'm waiting on the November data to complete the picture. This will give me a clearer view of production trends.


**Predicting Future Demand**

I've analyzed the production intervals and recent order dates for the LV312 mayonnaise. Based on the 16-day median interval, the client is overdue by roughly 18 days. This raises a red flag regarding potential stockouts, so I'm labeling it as a high-risk situation. The quantities are consistently 200 units, indicating a standard order.


**Reviewing Historical Order Quantities**

I'm focused on the "CLASSIQUE" truffle mayonnaise LV312 again, specifically the order quantities. The standard order consistently appears to be 200 units, which is expected. I have flagged that the recent order is overdue. The historical data includes two interesting outliers, 600 units in September 2024 and 400 units in December 2023, possibly related to seasonality, or large client orders. I'm now trying to consider these factors when predicting the next order.


**Determining Order Recommendations**

I'm synthesizing the data. The client is overdue on their truffle mayonnaise order, with a high risk of stockout. While the standard quantity is 200 units, seasonality considerations suggest a possible increase. However, the pattern of 200 units is very strong, so that's what I'll recommend.


**Evaluating Order Timing and Quantity**

I've examined the order history for the truffle mayonnaise, specifically focusing on the 2025-10-08 order. Considering the 16-day median cycle and that today is November 11th, the customer is over 30 days late, making stockout highly likely. Despite a strong 200-unit baseline, the end-of-year seasonality suggests a possible need for increased volumes, although I'm still recommending a quantity of 200 units to avoid making things complicated.


**Recommending Immediate Action**

Given the LV312 mayonnaise's order cycle and that the client is 34 days overdue, I've flagged a critical need. My primary recommendation remains 200 units, as that's the established pattern. Although seasonality might suggest increasing, the pressing need for an immediate order outweighs that.


**Concluding Order Predictions**

I've completed my analysis. The client is overdue by 34 days, and a stockout is likely. The standard order is 200 units, and although it's truffle season, that's what I'll recommend. Given the strong historical pattern, I'm highly confident in this prediction.


**Determining the Final Recommendation**

I've finalized my analysis. The client's late, so an immediate order's needed. The usual quantity's 200, which is what I'm recommending. Truffle season suggests a possible increase, but the consistent 200-unit orders outweigh that. My confidence in this is high, given the strong historical data.




</details>

</details>


<details>
<summary><strong>4. [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie)</strong> - LLM: 434u vs Médiane: 217u (Réel: 434u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 434u
- 📊 **Baseline calculée**: 434u
- 📊 **Médiane historique**: 217u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 217u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 434u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Historique insuffisant, cycle de 30 jours par défaut appliqué
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-08-20
- **Prochaine prédite**: 2025-09-19 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Le client est largement en retard par rapport à un cycle théorique de 30 jours (dernière commande il y a 83 jours).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Seul un point de donnée est disponible (deux commandes le même jour pour un total de 434u). Le client est en retard de plus de 80 jours sur un cycle standard de 30 jours, ce qui déclenche un risque de rupture imminent. Conformément à la philosophie de disponibilité B2B, on recommande de commander le volume identifié lors de l'unique occurrence historique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,135 tokens
- **Output**: 1,434 tokens
- **Total**: 3,569 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing the Timeline**

I'm currently focused on the projected B2B supply chain for LV BIO Tartin'apero Olives Câpres Tomate. My immediate task is to understand the lead time for the 200 ml bio product, specifically for the 2025-11-11 delivery date. I've noted a couple of orders from 2025-08-20 totaling 434 units, which is a starting point, and will need to calculate the cycle time.


**Determining the Risk**

I've determined that the client is behind schedule, as 83 days have passed since the last order, exceeding the assumed 30-day cycle. This places the order at high risk. My confidence level in this assessment is currently low, due to the limited data, and only having one ordering date to base my calculations on. I'll need more data.


**Refining the Forecast**

I'm now zeroing in on the quantity forecast. Given the scarcity of historical data for the LV BIO Tartin'apero Olives Câpres Tomate 200 ml bio, I'm leaning toward a baseline of 434 units, aligning with the initial order. However, I'm considering rounding down to 432 units, reflecting potential carton sizes for B2B orders, but the history will make the most impact.


**Finalizing Recommendations**

I've completed the analysis, determining the client is significantly overdue on the order cycle. Given the lack of historical data, I'm sticking with a recommended quantity of 434 units, matching the previous order. My confidence remains low, but the core analysis is complete, with all data points accounted for.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


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

**✅ Quantité LLM**: 434u (confidence: medium)
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

**✅ Quantité LLM**: 434u (confidence: high)
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

**✅ Quantité LLM**: 200u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>


<details>
<summary><strong>4. [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie)</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-20 10:22:31: 430u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 434u (confidence: low)
**📊 Quantité Réelle**: 434u

</details>




---

## False Positives (27)

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
| [LV365] LV "CLASSIQUE" WECK Vinaigrette CAESAR 200ml (copie) | 150 | Stock prédit: 84.4u (9j restants) → prédit 150u mais non commandé |
| [LV310] LV BIO Tartin'apero Betteraves SDP 200ml | 350 | Stock prédit: 269.6u (20j restants) → prédit 350u mais non commandé |
| [LV349] LV BIO Tartin'apero Brocoli 200 ml  | 360 | Stock prédit: 343.7u (147j restants) → prédit 360u mais non commandé |
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 400 | Stock prédit: 41.5u (2j restants) → prédit 400u mais non commandé |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 400 | Stock prédit: -320.5u (-16j restants) → prédit 400u mais non commandé |
| [LV356] LV SET 3 X 135G trisauces  SDP | 384 | Stock prédit: 158.3u (43j restants) → prédit 384u mais non commandé |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | Stock prédit: -130.7u (-6j restants) → prédit 434u mais non commandé |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Stock prédit: 2.4u (0j restants) → prédit 400u mais non commandé |
| [LV313] LV "CLASSIQUE" WECK Sauce COCKTAIL 250ml | 200 | Stock prédit: 41.0u (8j restants) → prédit 200u mais non commandé |
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 400 | Stock prédit: -95.5u (-10j restants) → prédit 400u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: -207.3u (-10j restants) → prédit 434u mais non commandé |
| [LV358] LV SDP SAUCE BEARNAISE 125G (copie) | 350 | Stock prédit: 23.6u (3j restants) → prédit 350u mais non commandé |
| [LV302] LV BIO Tartin'apero Carotte Gingembre SDP 200 ml  | 350 | Stock prédit: -293.6u (-25j restants) → prédit 350u mais non commandé |
| [LV329] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml | 350 | Stock prédit: 218.8u (91j restants) → prédit 350u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -122.9u (-25j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 200 | Stock prédit: -284.3u (-39j restants) → prédit 200u mais non commandé |
| [LV317] LV "CLASSIQUE" WECK Vinaigrette CIBOULETTE 200ml | 150 | Stock prédit: 92.5u (107j restants) → prédit 150u mais non commandé |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Stock prédit: -266.7u (-25j restants) → prédit 434u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 350 | Stock prédit: 19.2u (3j restants) → prédit 350u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 512 | Stock prédit: -157.3u (-25j restants) → prédit 512u mais non commandé |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Stock prédit: -266.7u (-25j restants) → prédit 434u mais non commandé |
| [LV364] LV SDP SAUCE Cocktail  125ML | 350 | Stock prédit: -4.0u (0j restants) → prédit 350u mais non commandé |
| [LV306] LV BIO Tartin'apero Olives Vertes SDP200 ml  | 350 | Stock prédit: 3.6u (0j restants) → prédit 350u mais non commandé |
| [LV309] LV BIO Tartin'apero Lentilles curry SDP 200ml | 350 | Stock prédit: 88.4u (28j restants) → prédit 350u mais non commandé |
| [LV335] LA VACHE TRAD Sauce Andalouse bocal 250ml WECK SDP | 200 | Stock prédit: 56.1u (32j restants) → prédit 200u mais non commandé |
| [LV333] LV "CLASSIQUE" WECK Mayonnaise au WASABI 250ml SDP  | 200 | Stock prédit: 76.1u (50j restants) → prédit 200u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:58:48.784Z*
