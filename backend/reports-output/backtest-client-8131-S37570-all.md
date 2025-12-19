# Rapport Backtest - Client ILIS    SA, FRANCESCO LOZANO

## Contexte

- **Client** : ILIS    SA, FRANCESCO LOZANO (ID: 8131)
- **Commande réelle** : S37570
- **Date commande** : 2025-06-20 08:53:32
- **Date cutoff système** : 2025-06-19 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 5,294 input + 14,897 output = 20,191 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 6 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 90.9% | Score équilibré global |

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
| **MAE** | 144.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 46.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -71.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (5)

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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 800 | 640.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 24 | 50 | 26.0 | 52.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 5 | 10 | 5.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 104 | 52.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 52 | 52 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 800u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 160u
- 📊 **Médiane historique**: 160u
- ✅ **Réel commandé**: 800u
- 📉 **Erreur LLM**: 640u (80.0%)
- 📉 **Erreur Médiane**: 640u (80.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande hebdomadaire régulière, principalement le vendredi
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 240u

**🧠 Raisonnement LLM:**
Le cycle hebdomadaire est très clair avec 4 commandes sur 5 passées un vendredi à 7 jours d'intervalle. La prochaine commande est statistiquement prévue pour demain (2025-06-20). La quantité de 160u est la norme constante (mode et médiane), la commande de 240u étant un événement isolé.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 703 tokens
- **Output**: 1,160 tokens
- **Total**: 1,863 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Recent Product History**

I'm focused on the production history for [PF0078] FILOU CHASSEUR 5 L. The data shows recent production runs, including 160 units on June 13th, 240 units on June 6th, and another 160 on June 3rd. I'll need to analyze this further to identify patterns or potential issues.


**Predicting Future Demand**

I've calculated the median interval between orders, which is 7 days. Considering the last order was on June 13th, I'm expecting the next one on June 20th – tomorrow. Given the current date and the order history, I'm assessing the risk of a stockout and the recommended order quantity, leaning towards 160 units based on the frequency.


**Assessing Order Prediction Accuracy**

Based on the order history, I've confirmed a clear weekly pattern, with a slight acceleration in early June. With tomorrow's predicted order date (June 20th), the recommendation remains at 160 units, showing a high confidence in the accuracy of my analysis and recommendations. I'm focusing on the outlying order of 240, it is clearly an outlier.




</details>

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 24u vs Médiane: 24u (Réel: 50u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 24u
- 📊 **Baseline calculée**: 24u
- 📊 **Médiane historique**: 24u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 26u (52.0%)
- 📉 **Erreur Médiane**: 26u (52.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 24u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire régulier avec une préférence pour le vendredi
- **Cycle médian (jours)**: 8.5
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 80u

**🧠 Raisonnement LLM:**
Le cycle habituel de ce client est hebdomadaire (intervalles de 7 à 10 jours), souvent le vendredi. La dernière commande datant du 13 juin, la prochaine commande théorique tombe le 20 juin (J+1 par rapport à la date de prédiction). Un risque de rupture à 30 jours est donc confirmé. En excluant l'outlier de 80u, la consommation se stabilise autour de 24u (quantité la plus fréquente et base du cycle).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 698 tokens
- **Output**: 1,648 tokens
- **Total**: 2,346 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Production Needs**

I've been calculating production needs for FILOU PROVENCALE, specifically focusing on the 5L variant. The target date is June 19th, 2025. I've noted a need for 20 units on June 13th, with a jump to 80 units on June 3rd. Before that, the demand was lower, at 24 units on the 16th and 9th of May.


**Predicting Upcoming Demands**

I'm now focusing on projecting upcoming demand, concentrating on the intervals between orders. These vary, but a pattern of roughly 7 to 10 days emerges, leaning towards a week. Given the latest order on June 13th, I anticipate another order imminently, within the next 4 days to meet the June 19th target. The outlier of 80 units warrants further examination, yet the median quantity remains unknown.


**Evaluating Order Quantities**

I'm now assessing the order quantities, focusing on the discrepancy in the 80-unit order compared to the others. The median and mode both point towards 24 units, which seems to be the baseline. Considering the regular weekly cycle, the next order is highly likely to be on June 20th. I'm leaning toward recommending 24 units.


**Determining Order Recommendations**

I'm now consolidating my findings. The frequency is clearly weekly, with Friday as the typical order day. Given the last order on June 13th, I expect one imminently, most likely June 20th. The data suggests a baseline of 24 units, despite the 80-unit outlier. I am recommending a production of 24 units.




</details>

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 5u vs Médiane: 5u (Réel: 10u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 4.5u
- 📊 **Médiane historique**: 5u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 5u (50.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières avec une forte prévalence le vendredi, cycle médian de 14 jours.
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
Le produit présente un cycle de réapprovisionnement régulier (médiane de 14 jours). La prochaine commande est estimée pour le 27 juin, soit dans 8 jours, ce qui justifie une commande préventive. La quantité de 60 unités est identifiée comme un outlier exceptionnel ; le volume récurrent est de 5 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 696 tokens
- **Output**: 1,428 tokens
- **Total**: 2,124 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product Timeline**

I'm focused on the production timeline for product PF0088. Recent updates show a consistent pattern. We have 3 units slated for June 13th, following 5 units on May 16th. This gives us a 28-day gap between those orders. I need to understand if this gap is normal, or a concern.


**Projecting Demand Needs**

I'm now calculating the next potential order date, based on the past order frequency. With a median cycle of 14 days, and the last order on June 13th, I anticipate another order around June 27th. Given the baseline of 5 units and the latest order of 3, a stockout risk is flagged for the near term.


**Confirming Order Predictions**

I'm now cross-referencing my calculations. The frequency analysis points to a 14-day cycle, indicating an order around June 27th. Comparing this with the 60 unit outlier, I'm adjusting for a stable baseline of 5 units. A stockout risk remains given this demand, but is mitigated by the stable demand. I am now finalizing the recommended order quantity of 5 units.


**Predicting Next Demand**

I'm now zeroing in on the anticipated next order. The frequency analysis suggests an order around June 27th. The last order was six days ago, triggering a stockout risk due to consistent demand. Based on the median of 5 units and the 3 units from the most recent order, I'm recommending we order 5 units.




</details>

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 104u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 52u
- 📊 **Baseline calculée**: 52u
- 📊 **Médiane historique**: 52u
- ✅ **Réel commandé**: 104u
- 📉 **Erreur LLM**: 52u (50.0%)
- 📉 **Erreur Médiane**: 52u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 52u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier oscillant entre 11 et 25 jours, avec une médiane de 19 jours.
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-06-03
- **Prochaine prédite**: 2025-06-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La demande est extrêmement stable avec une quantité fixe de 52 unités par commande. Le cycle médian calculé sur les 3 derniers mois est de 19 jours. La dernière commande datant du 3 juin, la prochaine commande est estimée aux alentours du 22 juin, soit dans seulement 3 jours par rapport à la date actuelle (19 juin). Le risque de commande imminente est donc très élevé.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 702 tokens
- **Output**: 1,380 tokens
- **Total**: 2,082 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Recent Product History**

I'm currently focused on the product history for [PF0085] FILOU CURRY KET CHUP 10 KG. Recent data shows a consistent 52u unit usage. The intervals between tracked dates are decreasing - from 25 days to 11. I need to keep an eye on this for any significant deviations.


**Forecasting Future Orders**

I've calculated the median interval between orders to be 19 days. Based on this, and the last order on 2025-06-03, I predict the next order will be around 2025-06-22. With today being 2025-06-19, this suggests an order is expected in approximately 3 days. A risk assessment confirms this needs attention. Quantity has been a consistent 52 units.


**Evaluating Order Predictions**

I've examined the recent order history, confirming the anticipated 52-unit quantity. The predicted order date, June 22nd, is fast approaching, so I've calculated and confirmed it, with a high confidence. The intervals suggest a stable, regular pattern. My recommendations are clear.


**Refining Order Predictions**

I've re-evaluated the order intervals, confirming a median cycle of 19 days. Based on the last order on June 3rd, I've confirmed that the next one is due on June 22nd. This analysis has identified a need for an order in approximately three days. The quantity is stable at 52 units, and the reasoning is sound.




</details>

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 52u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 52u
- 📊 **Baseline calculée**: 52u
- 📊 **Médiane historique**: 52u
- ✅ **Réel commandé**: 52u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 52u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle variable entre 4 et 21 jours, moyenne à 12.5 jours
- **Cycle médian (jours)**: 13
- **Dernière commande**: 2025-05-23
- **Prochaine prédite**: 2025-06-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 26u

**🧠 Raisonnement LLM:**
La dernière commande date d'il y a 27 jours (2025-05-23), ce qui excède le cycle maximum observé de 21 jours. Le client est donc en rupture probable ou en retard critique par rapport à son rythme habituel. La quantité de 52 unités représente le volume standard majoritaire (mode) sur l'historique récent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 646 tokens
- **Output**: 1,389 tokens
- **Total**: 2,035 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Demand**

My initial review of the tomato ketchup product, PF0959, reveals fluctuating demand. I've noted sales of 52 units on May 23rd, 26 units on May 2nd, and 52 units on April 28th. The data suggests the need to analyze the specific factors driving these variations and consider the lack of data prior to the current timeframe.


**Assessing Order Frequency**

I've calculated the intervals between orders, finding a median and average of 12.5 days. Comparing this to the time since the last order, 27 days, and also to the maximum interval (21 days), I've determined that a new order is likely overdue, therefore a supply shortage is possible. I've set a 30-day horizon for analysis.


**Determining Supply Action**

I've just refined the analysis of the tomato ketchup product, PF0959, and confirmed a likely overdue order. The customer's order frequency, approximately every 12.5 days on average, suggests a purchase was predicted on June 5th. Since the current date is June 19th, and 27 days have passed since the last order, I am recommending immediate action to secure a full order of 52 units, mitigating the risk of a supply shortage.


**Refining Order Predictions**

I've just finished running an in-depth analysis of the product's demand history. Based on the calculated frequency patterns and the fact the customer is overdue for an order, I'm recommending the standard quantity of 52 units. I've classified this as a high-risk situation, given the time elapsed since the last order.




</details>

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 160u
- 2025-06-06 12:50:33: 240u
- 2025-06-03 14:09:59: 160u
- 2025-05-23 11:37:51: 160u
- 2025-05-16 09:00:32: 160u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 800u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 20u
- 2025-06-03 14:09:59: 80u
- 2025-05-16 09:00:32: 24u
- 2025-05-09 08:24:16: 24u
- 2025-05-02 09:39:44: 0u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 24u (confidence: medium)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 3u
- 2025-05-16 09:00:32: 5u
- 2025-04-28 06:00:45: 5u
- 2025-04-18 04:55:33: 5u
- 2025-04-11 07:18:35: 60u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-03 14:09:59: 52u
- 2025-05-23 11:37:51: 52u
- 2025-04-28 06:00:45: 52u
- 2025-04-04 11:33:35: 52u
- 2025-03-21 12:22:31: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 52u (confidence: high)
**📊 Quantité Réelle**: 104u

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-23 11:37:51: 52u
- 2025-05-02 09:39:44: 26u
- 2025-04-28 06:00:45: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 52u (confidence: medium)
**📊 Quantité Réelle**: 52u

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
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 6 | Stock prédit: -2.5u (-22j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T11:18:25.532Z*
