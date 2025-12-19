# Rapport Backtest - Client NATURKOST WEST GMBH

## Contexte

- **Client** : NATURKOST WEST GMBH (ID: 3818)
- **Commande réelle** : S39694
- **Date commande** : 2025-10-13 10:17:04
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,517 input + 10,907 output = 14,424 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 50.0% | 4 produits réels, 2 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

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
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 32 | 32 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 32 | 16.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 32u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 32u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier (14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement régulier avec un intervalle de 14 jours observé récemment et historiquement. La dernière commande date d'il y a 18 jours (24/09), la commande suivante était donc théoriquement attendue autour du 8 octobre. Étant au 12 octobre, il y a un risque imminent de rupture de stock sur le point de vente. La quantité de 32 unités est constante sur les dernières occurrences.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 953 tokens
- **Output**: 1,717 tokens
- **Total**: 2,670 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data Points**

My focus is on the sales data for MF0044. I've been charting the "32u" metrics for 2025, noting the most recent entry on September 24th. Comparing this with the bi-weekly interval from earlier in September, and then further back to 2024, reveals some interesting patterns to investigate further.


**Predicting Future Orders**

I'm now calculating the next anticipated order date. Based on the 14-day cycle and the last order on September 24th, I estimated October 8th. Today is October 12th, placing the product slightly overdue for a new order. I'm starting to assess potential stockout risks, considering a 30-day horizon.


**Calculating Stock Risk**

I'm now determining if there's a stockout risk, given the 30-day window. With the last order 18 days ago, against a 14-day cycle, an order is overdue. The frequency pattern is bi-monthly, and the quantity is typically 32 units, with no seasonality or trend changes.


**Finalizing Stockout Assessment**

I've reviewed the reasoning and confirmed the stockout risk. The 18 days since the last order exceed the typical 14-day cycle, indicating an overdue order. Quantities remain stable at 32 units, reinforcing the high confidence in this assessment. Therefore, a new order is definitely warranted.


**Finalizing Order Recommendation**

I've synthesized the recent data to make a final call. The 14-day cycle is rock solid. Since it's October 12th, and the last order was September 24th, a new order is overdue. The quantity remains consistently at 32 units, so I confidently recommend another order of 32 units. The stockout risk is confirmed.




</details>

</details>


<details>
<summary><strong>2. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 24u (Réel: 32u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 24u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 16u (50.0%)
- 📉 **Erreur Médiane**: 8u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières avec un cycle médian de 14 jours, avec un pic saisonnier identifié début septembre.
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-08-01-24-21-28-56-12-08-01-24-21-28-56-11-09-10-2025-10-08-01-24-21-28-56-11-09-10-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-01-10-08-2025-10-01-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-01-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-01-24-21-28-56-11-09-10-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-01-24-21-28-56-11-09-10-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-01-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-01-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08-2025-10-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
La dernière commande de 32u (le double du volume habituel) a eu lieu il y a 32 jours. Compte tenu du cycle médian de 14 jours, ce stock de 32u aurait dû durer environ 28 jours (épuisement estimé vers le 8 octobre). Le risque de rupture est donc immédiat à la date du 12 octobre. Je préconise une commande standard de 16u pour revenir au cycle de fond.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 973 tokens
- **Output**: 6,569 tokens
- **Total**: 7,542 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Data Points**

I've been meticulously analyzing the sales data for MF Delikatess Mayonnaise. The most recent figures show a clear increase in units sold in September compared to August. I need to investigate the factors behind this growth. What external variables might have influenced the September surge?


**Pinpointing Sales Intervals**

I'm now examining the intervals between sales for MF Delikatess Mayonnaise, focusing on the timing of orders. Calculating the intervals between sales dates reveals a variable pattern, and suggests some orders happen in short intervals. I need to determine if seasonality or other factors affect the ordering frequency.


**Evaluating Order Frequency**

I've calculated the median interval between orders for MF Delikatess Mayonnaise, finding it to be roughly 14 days. Considering the 32-day gap since the last order on September 10th, I'm assessing the risk of a stockout. My analysis reveals the product replenishment cycle seems to have been disrupted.


**Calculating Supply Risk**

I am now assessing the potential for a stockout of MF Delikatess Mayonnaise. The 32-day gap since the last order on September 10th raises concerns. While a 32-unit order occurred in September, the history indicates a median order frequency of approximately 14 days, with some fluctuation. The 16 unit pattern is the most frequent.


**Predicting Next Order Details**

Considering the 32-day gap since the last order of MF Delikatess Mayonnaise on September 10th and the median order cycle of 14 days, I estimate that an order is already overdue. The most frequent order size is 16 units, but the last order was for 32. Based on the 32-unit order last month, it is still possible demand is above baseline.


**Assessing Imminent Replenishment**

My assessment indicates an order for MF Delikatess Mayonnaise is overdue, with 32 days since the last order. Based on past behavior and a 32-unit order in September, a 16-unit order appears safe. The fact that the stock from the last order is likely used up now confirms the urgent need.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:49:39: 32u
- 2025-09-10 06:32:45: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 12:35:42: 32u
- 2024-09-05 07:56:09: 32u
- 2024-08-27 12:23:03: 16u
- 2024-08-16 09:58:48: 16u
- 2024-06-27 07:43:54: 16u
- 2024-06-13 06:56:18: 32u
- 2024-05-16 08:11:07: 32u
- 2024-05-14 08:23:32: 16u
- 2024-03-14 08:27:15: 32u
- 2024-03-08 09:59:07: 32u
- 2024-02-22 13:59:46: 32u
- 2024-02-09 09:02:46: 32u

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 32u

</details>


<details>
<summary><strong>2. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:32:45: 32u
- 2025-08-20 12:43:59: 16u
- 2025-08-13 10:37:06: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 12:35:42: 16u
- 2024-09-05 07:56:09: 32u
- 2024-08-27 12:23:03: 16u
- 2024-08-16 09:58:48: 16u
- 2024-06-27 07:43:54: 16u
- 2024-06-13 06:56:18: 16u
- 2024-05-16 08:11:07: 16u
- 2024-05-14 08:23:32: 16u
- 2024-04-18 08:58:20: 16u
- 2024-03-14 08:27:15: 48u
- 2024-02-22 13:59:46: 16u
- 2024-02-09 09:02:46: 16u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 32u

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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 32 | Stock prédit: -3.3u (-1j restants) → prédit 32u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 16 | Stock prédit: -6.9u (-5j restants) → prédit 16u mais non commandé |


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
| [VID0009] Consigne casier | 64 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 384 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T11:17:13.761Z*
