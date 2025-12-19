# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S40188
- **Date commande** : 2025-11-07 11:42:07
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 9,190 input + 14,125 output = 23,315 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 472.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 80.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 79.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -80.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 98 | 392 | 294.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3300] DLL MAYONNAISE OEUFS 300ML | 130 | 780 | 650.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - LLM: 98u vs Médiane: 98u (Réel: 392u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 98u
- 📊 **Baseline calculée**: 98u
- 📊 **Médiane historique**: 98u
- ✅ **Réel commandé**: 392u
- 📉 **Erreur LLM**: 294u (75.0%)
- 📉 **Erreur Médiane**: 294u (75.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 98u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire irrégulier (exclusivité le lundi)
- **Cycle médian (jours)**: 10.5
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est strictement positionné le lundi avec des intervalles variant de 7 à 35 jours (médiane de 10,5 jours). La prochaine commande est prévue autour du 13 novembre 2025, soit dans l'horizon de 30 jours (risque de rupture OUI). Bien que l'historique N-1 montre des volumes nettement plus élevés (196u à 392u, soit >50% de différence, classant la saisonnalité en 'strong'), les 5 dernières commandes de 2025 sont parfaitement stables à 98 unités (CV de 0%). Cette stabilité sur les données récentes prévaut sur l'ajustement saisonnier théorique pour maintenir la cohérence opérationnelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,246 tokens
- **Output**: 4,477 tokens
- **Total**: 6,723 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the sales data for PF3315. Specifically, I'm noting the recent sales figures. The 98u sales on the 3rd have caught my attention, and I'm keen to understand the factors driving this. I need to dig deeper into the data.


**Calculating Interval Statistics**

\n\n

I'm now calculating the average interval between the 98u sales. The median is 10.5 days. The average interval is 15.75 days. The standard deviation calculation is underway to further understand the variability. All the sales of 98u occurred on Mondays, which appears significant.


**Evaluating Further Sales Patterns**

\n\n

Now I'm focusing on the product's sales quantities. Every recent order has been for 98 units, with no variability. The Coefficient of Variation for the quantities is zero. The intervals between sales are variable, though the median is 10.5 days. The next order is tentatively predicted around November 13th or 17th. This is within the 30-day window. The CV of 72.8% on the intervals suggests a low confidence.


**Considering Historical Data**

I'm now comparing the current sales data with the "N-1" history. The N-1 data from 2024 reveals fluctuating order sizes, unlike the steady 98 unit orders of late 2025. It also shows a significant difference in quantities (+50%), implying a need to further investigate these older patterns. This contrast suggests that prior periods show more volatility.


**Examining Order Trends**

\n\n

My current analysis focuses on the recent and historical patterns. I've noted a consistent 98-unit order size recently, and I'm comparing this to past periods. I'm taking into account the impact of the historical order volumes, with N-1 showing significant variance, with orders for 196 and 392 units. There is a potential need to adjust the baseline.


**Refining Prediction Logic**

\n\n

I've re-evaluated the recommended quantity, applying the rule to increase the baseline due to the "strong" seasonality impact, resulting in a slightly higher order of 108 units. While the historical data suggests larger quantities, the recent stability is the primary indicator. The prediction is near November 13th.


**Predicting Order Quantity**

I'm now determining the recommended quantity. Given the "strong" seasonality impact from historical data and consistent recent sales, I'm adjusting slightly, predicting a quantity of 108 units. I'm also confirming the next order date around November 13th, based on the established patterns.


**Concluding with Predictions**

I'm now integrating the final predictions. I'm adhering to the prompt rules regarding the "strong" seasonality impact by recommending 108 units, although I'm balancing that with recent sales stability. I am also confirming the next order date around November 13th.


**Synthesizing Recommendations**

I'm now integrating all insights into a concise recommendation. Considering the recent sales stability and the rule for "strong" seasonality, I am advising a quantity of 108 units for the next order. Additionally, the predicted date for the next order is still around November 13th, accounting for variability.


**Formulating the Recommendation**

I'm now integrating the final recommendations, taking into account the robust, stable recent sales figures. While the "strong" seasonality rule would suggest a slight adjustment, I'll recommend 108 units as a compromise, with a predicted order date around November 13th.


**Formulating the Final Advice**

I'm now consolidating all the data points and rules to finalize the recommendations. While the strong historical data suggests a possible uplift, the current very stable order pattern of 98 units guides me. I'm therefore recommending 98 units, and the predicted next order date is around November 13th.




</details>

</details>


<details>
<summary><strong>2. [PF3300] DLL MAYONNAISE OEUFS 300ML</strong> - LLM: 130u vs Médiane: 130u (Réel: 780u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 130u
- 📊 **Baseline calculée**: 130u
- 📊 **Médiane historique**: 130u
- ✅ **Réel commandé**: 780u
- 📉 **Erreur LLM**: 650u (83.3%)
- 📉 **Erreur Médiane**: 650u (83.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 130u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande reguliere tous les lundis avec un cycle median de 14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 780u

**🧠 Raisonnement LLM:**
Un cycle de commande median de 14 jours a ete identifie a partir des intervalles reels (14, 21, 7, 14 jours). La prochaine commande est estimee pour le 2025-11-17, soit dans 11 jours (risque de rupture identifie). Sur le plan des quantites, la valeur de 780u detectee le 2025-11-03 est consideree comme un outlier isole car elle se situe a la limite superieure de l'IQR (780) et ne correspond pas au profil historique (N-1 max 390u). La baseline est calculee via une moyenne tronquee sur les donnees restantes (130, 130, 130, 390), aboutissant a une recommandation de 130u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,306 tokens
- **Output**: 4,238 tokens
- **Total**: 6,544 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Mayonnaise Data**

I'm currently reviewing the sales data for the PF3300 mayonnaise product. Recent figures show a fluctuating pattern. Specifically, the last three Mondays have shown order quantities of 780u, 130u, and 390u, with a previous order of 130u on the 22nd of September. I'll need to dig deeper to see why these numbers are varying.


**Forecasting Next Order Date**

I've calculated the median and mean interval between orders, both landing at 14 days, with a standard deviation of roughly 5 days, resulting in a coefficient of variation around 35%. This suggests a medium level of variability. Based on this, I predict the next order for PF3300 mayonnaise to be around November 17th, approximately 11 days from now.


**Calculating Variance in Orders**

I've now focused on the quantities of the orders and detected an outlier. The recent 780u order stands out. I calculated the interquartile range to check and, based on historical data, this number is a significant jump. I'm now examining the quantities further, post-outlier, to get a better sense of order variability.


**Evaluating the Outlier's Impact**

Now, I've dug into the implications of the outlier (780u order). I've recalculated the coefficient of variation, this time excluding the outlier, which boosted the CV to around 58%, signifying more volatility. I then focused on the seasonality, but it seems there's a weak seasonality here. Considering the erratic data, I am unsure how to interpret the recent spike.


**Finalizing Outlier Analysis**

I've re-evaluated the outlier, and based on the IQR rules, the 780u order is *on* the outlier boundary. So, I will be adjusting my model to reflect the more erratic nature of the sales. This means a less confident forecast for the next order. I've re-calculated everything, and the prediction is for 130 units, the baseline.


**Adjusting the Order Prediction**

I've re-examined the outlier analysis and, despite being *on* the outlier boundary, I've decided to exclude the 780u order. This means I'm leaning toward a more conservative forecast, keeping my predicted order at 130 units. The erratic sales pattern and weak seasonality make me less confident in the prediction.


**Concluding the Analysis**

I've made the decision to exclude the 780u order as an outlier. This led me to a conservative order recommendation of 130 units, with medium confidence. The erratic pattern, the weak seasonality, and the fact that 780 is double the previously highest amount influence this decision.


**Revisiting Order Intervals**

I'm now recalculating the order intervals, to ensure the 14-day cycle remains accurate after removing the 780u data point. The interval variability seems consistent, so I'm maintaining the existing prediction for the next order.


**Confirming the Order Cycle**

I'm now cross-referencing all the data. The 14-day order cycle seems solid, with the next order date still predicted for November 17th. Despite the recent volume fluctuations, the intervals remain consistent. Risk is moderate, and a conservative forecast remains the plan.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 07:40:31: 98u
- 2025-10-27 07:02:27: 98u
- 2025-10-13 07:49:42: 98u
- 2025-09-08 10:16:06: 98u
- 2025-09-01 08:56:14: 98u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 07:05:31: 196u
- 2024-09-23 11:56:39: 196u
- 2024-08-06 10:01:31: 98u
- 2024-07-11 10:01:48: 392u

**✅ Quantité LLM**: 98u (confidence: medium)
**📊 Quantité Réelle**: 392u

</details>


<details>
<summary><strong>2. [PF3300] DLL MAYONNAISE OEUFS 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 07:40:31: 780u
- 2025-10-20 08:14:48: 130u
- 2025-09-29 15:27:45: 390u
- 2025-09-22 10:46:37: 130u
- 2025-09-08 10:16:06: 130u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 11:37:32: 390u
- 2024-10-01 06:38:15: 130u
- 2024-09-09 11:24:26: 130u
- 2024-09-05 05:51:58: 130u
- 2024-08-06 10:01:31: 130u
- 2024-07-11 10:01:48: 390u

**✅ Quantité LLM**: 130u (confidence: medium)
**📊 Quantité Réelle**: 780u

</details>




---

## False Positives (2)

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
| [PF3301] DLL MAYONNAISE CITRON 300ML | 130 | Stock prédit: 609.8u (30j restants) → prédit 130u mais non commandé |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 94 | Stock prédit: 44.2u (1j restants) → prédit 94u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:02:28.180Z*
