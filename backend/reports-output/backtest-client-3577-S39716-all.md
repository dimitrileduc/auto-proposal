# Rapport Backtest - Client ITM ALIMENTAIRE BELGIUM

## Contexte

- **Client** : ITM ALIMENTAIRE BELGIUM (ID: 3577)
- **Commande réelle** : S39716
- **Date commande** : 2025-10-14 08:27:27
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 3,433 input + 8,597 output = 12,030 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 56.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 46.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [PF2036] ITM BOULETTES TOMATE 800 GR | 128 | 128 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 224 | 112 | 112.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM: 128u vs Médiane: 64u (Réel: 128u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 128u
- 📊 **Baseline calculée**: 96u
- 📊 **Médiane historique**: 64u
- ✅ **Réel commandé**: 128u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 64u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 128u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel fluctuant entre 21 et 35 jours avec commandes groupées occasionnelles
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen est estimé à environ 25 jours. La dernière commande datant du 09/10, la prochaine échéance est prévue vers le 03/11, soit dans 21 jours, ce qui entre dans l'horizon critique de 30 jours pour la Supply Chain B2B. Les volumes oscillent historiquement entre 64 et 128 unités (multiples logistiques de 64). Bien que la dernière commande fût de 64u, la médiane des événements de commande récents et l'historique de fin d'année suggèrent une base de 96, arrondie à 128 pour sécuriser le stock face aux pics observés en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,178 tokens
- **Output**: 2,652 tokens
- **Total**: 3,830 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently focused on the product PF2036, ITM BOULETTES TOMATE 800 GR. The target date for this is October 13th, 2025. I've been reviewing recent history and noted a production of 64 units on October 9th, following an interval of 23 days from a previous production of 128 units on September 16th. Further back, I also noted a production run of 64 units on August 12th.


**Forecasting Future Production**

I'm now zeroing in on predicting the next production run for PF2036. Based on recent history, a 25-day cycle seems reasonable, pointing towards a November 3rd production date. I will validate this assumption with prior year data.


**Evaluating Order Frequency**

I'm now analyzing the historical order quantities for PF2036. The median quantity appears to be around 96 units, based on the last four order events. However, I note a pattern of 64 or 128 units, and the most recent order was for 64. I will cross-reference this with the cycle and risk analysis.


**Refining Cycle and Risk**

Focusing now on the cycle, I've noticed variability in production intervals, making precise prediction tricky. However, I've re-examined the risk assessment, based on the next predicted production date of November 3rd, and the proximity to the October 13th target date. The conclusion remains: risk is present.


**Determining Quantity and Timing**

I've finalized my analysis, recommending a quantity of 128 units for the next order, erring on the side of caution due to recent production patterns. Based on the 25-day cycle, the order is likely imminent, with the next production run estimated for November 3rd, 2025, which is within the 30-day risk window.


**Synthesizing Recommendations**

I'm now integrating all findings to finalize the recommendation. Risk is present; a cycle's forming within 21 days. Despite a recent 64-unit order, I advise ordering 128 units, erring on the side of caution due to B2B needs.


**Formulating Final Decision**

Now, I'm integrating all the data to finalize my recommendation. Based on the 25-day cycle, the order will likely be in 21 days. Despite the recent 64-unit order, I still advise ordering 128 units to account for potential B2B fluctuations and seasonal patterns.




</details>

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM: 224u vs Médiane: 224u (Réel: 112u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 224u
- 📊 **Baseline calculée**: 224u
- 📊 **Médiane historique**: 224u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 112u (100.0%)
- 📉 **Erreur Médiane**: 112u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 224u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier de 21 à 28 jours observé en 2024, principalement le mardi.
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-08-05
- **Prochaine prédite**: 2025-10-28Requesting next theoretical cycle: Oct 28, based on last order Aug 05 + multiple cycles of 28 days (Sep 02, Sep 30, Oct 28). Current date Oct 13 is within the 30-day window of the next cycle date (Oct 28). Since 69 days have passed since the last order, a restock is necessary despite the large August volume (672u total), as we have entered the Q4 window where a return to standard ordering is expected following the median (224u). Quantity of 224u aligns with the recent 2025 orders and the higher end of historical values (pallet size/multiplier). 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 448u

**🧠 Raisonnement LLM:**
La commande est jugée nécessaire car 69 jours se sont écoulés depuis la dernière livraison, ce qui dépasse largement le cycle médian de 28 jours (3 cycles manqués). Bien que le volume d'août fût important (672u), l'absence de commande en septembre suggère un besoin imminent pour octobre. La quantité de 224u est retenue comme la médiane stable des volumes récents.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,156 tokens
- **Output**: 3,358 tokens
- **Total**: 4,514 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Order History**

I'm currently tracking the order history for product PF2996. The target date is set for October 13th, 2025. Recent orders show 448 units on August 5th, 2025, and 224 units the day before. Comparing this to the target date, there's roughly a 69-day gap. Before that, I see a few orders in 2024, specifically a 112 unit order on a Monday and 224 on a Tuesday.


**Analyzing Historical Patterns**

\n\n

I've been digging deeper, focusing on the cadence of orders. The 2024 data reveals a strong Tuesday trend for this product, mainly for 112 or 224 unit orders. I've calculated the intervals between orders, the median cycle looks to be between 21-28 days. The 69-day gap between the last order and the target date has me considering if this can be defined as 'sporadic'.


**Evaluating Time Elapsed**

\n\n

My analysis has now identified a potential risk. Given the "sporadic" criteria, this product's history necessitates a closer look. The 69-day gap since the August order, combined with the fact that the command was recently placed (within 90 days), triggers a deeper investigation to assess the possibility of a stockout. I'm focusing on those 672 units in August.


**Determining Risk Factors**

\n\n

My analysis has refined the risk assessment. The recent order of 672 units, which is 6x the median historical volume of 112 units, signals a significant shift. Although the sporadic order pattern necessitates attention, the volume of the order has me revising my recommendations. Given the product's consumption rate and the target date in October, I suggest reordering, although at a lesser volume of 224u to safety-stock.


**Finalizing Recommendation Criteria**

\n\n

My analysis has evolved, emphasizing a data-driven approach. Examining consumption since the 672-unit order, I've calculated a remaining stock period of roughly 57 days. The "sporadic" threshold has been met, which increases the possibility of risk. Based on this, and the fact that the predicted next date is in December, I recommend a reorder of 224u by the end of November, well within the safety window to prevent a stockout.


**Finalizing Recommendations Details**

\n\n

My analysis has solidified my reordering advice, based on a risk determination. Given the "sporadic" criteria, and the fact that 69 days have elapsed since the August order, I suggest reordering at the standard unit of 224u before the end of November. Considering recent consumption, the remaining stock should be sufficient, but planning a reorder will reduce the possibility of stockouts.


**Finalizing the Analysis**

\n\n

My analysis has led to a conclusive assessment. Given the "sporadic" criteria, and the fact that 69 days have elapsed, the 28-day cycle threshold has been met, and a risk has been triggered. The recent order of 672u, whilst large, doesn't negate the need for a reorder. Therefore, I recommend reordering 224u before the end of November, to allow for consumption rates, and avoid any stockouts.


**Finalizing Risk Assessment**

\n\n

I've determined the "sporadic" risk criteria have been met due to the 69-day gap, triggering a recommendation. Given that a large order of 672 units was fulfilled in August, and the expected consumption rate suggests remaining stock through November, I recommend a standard reorder of 224 units before the end of November to prevent potential shortages. This should be a small and confident quantity.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:37:17: 64u
- 2025-09-16 09:22:58: 128u
- 2025-08-12 09:46:11: 64u
- 2025-08-05 11:52:23: 64u
- 2025-08-04 08:50:19: 128u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 12:49:47: 64u
- 2024-06-11 06:48:14: 192u
- 2024-05-21 13:18:20: 128u
- 2024-04-23 07:54:51: 64u
- 2024-04-09 09:07:56: 64u
- 2024-03-19 08:47:39: 64u
- 2024-02-13 10:12:54: 128u
- 2024-01-16 13:29:59: 128u
- 2023-11-29 10:59:25: 192u
- 2023-11-07 14:55:48: 128u

**✅ Quantité LLM**: 128u (confidence: high)
**📊 Quantité Réelle**: 128u

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 11:52:23: 448u
- 2025-08-04 08:50:19: 224u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-08 06:47:45: 112u
- 2024-06-11 06:48:14: 224u
- 2024-05-21 13:18:20: 224u
- 2024-05-16 11:00:25: 112u
- 2024-04-23 07:54:51: 112u
- 2024-04-09 09:07:56: 224u
- 2024-03-19 08:47:39: 112u
- 2024-03-12 11:47:36: 112u
- 2024-02-13 10:12:54: 112u
- 2024-01-16 13:29:59: 112u
- 2023-12-27 07:11:21: 112u
- 2023-11-07 14:55:48: 112u

**✅ Quantité LLM**: 224u (confidence: medium)
**📊 Quantité Réelle**: 112u

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
| [PF2997] ITM BO VIN YOGORETTE PET 450 | 112 | Stock prédit: 84.5u (9j restants) → prédit 112u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:43:34.470Z*
