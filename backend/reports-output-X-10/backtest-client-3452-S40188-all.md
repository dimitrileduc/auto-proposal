# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S40188
- **Date commande** : 2025-11-07 11:42:07
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 10,498 input + 10,323 output = 20,821 total


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
| **MAE** | 342.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 58.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 62.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -58.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3300] DLL MAYONNAISE OEUFS 300ML | 390 | 780 | 390.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière le lundi, cycle oscillant entre 7 et 14 jours
- **Cycle médian (jours)**: 10.5
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un pattern d'achat extrêmement stable avec les 5 dernières commandes identiques à 98 unités, toujours passées le lundi. Le cycle médian est de 10,5 jours. La dernière commande datant du 2025-11-03, la prochaine est prévue autour du 14 novembre (dans l'horizon des 30 jours). Les données de l'année précédente confirment que 98 est l'unité de base (ou un multiple exact), renforçant la fiabilité de la prédiction.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,573 tokens
- **Output**: 2,421 tokens
- **Total**: 4,994 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Sales Figures**

I've been poring over the sales data for the PF3315 vinaigrette. Initial figures from November 3rd show 98 units sold. I need to extrapolate these early results, consider market trends, and factor in the 30-day horizon to predict future performance. I'm focusing on identifying any patterns or potential fluctuations.


**Calculating Future Demand**

I've examined the sales intervals for PF3315, noting a repeating pattern. Based on the "Monday" cycle, the next order is likely to be on either November 10th or November 17th. I'm now refining the model, using the median of the intervals, and comparing against the weekly and bi-weekly cycles to provide a more accurate forecast for the upcoming 30 days.


**Projecting Future Orders**

I'm now calculating the next order date for the PF3315 vinaigrette. Based on the "Monday" cycle, the client is expected to order again on November 10th. The data shows orders of 98 units each time, suggesting potential demand of around 100 units. I am also assessing the risk of running out of stock.


**Estimating Next Order Date**

The analysis confirms a stable demand pattern of 98 units, with the most recent order on November 3rd. Taking the median interval of 10.5 days, I calculate the next order date to be around November 14th. This, along with the consistent Monday ordering habit, indicates a high probability of a new order within the 30-day window.


**Predicting Order Placement**

I'm now zeroing in on the next order date for the PF3315. Although the median cycle is ~11 days, the data strongly suggests a Monday order pattern. Considering this, I'm confidently predicting an order around November 10th, 4 days from now, maintaining the consistent 98-unit quantity. I've re-checked the data.


**Forecasting Next Ordering Date**

I've examined the recent history of the PF3315 vinaigrette orders again. While the median interval points to around November 14th, the Monday ordering habit makes November 10th the likeliest date. Consistent past orders indicate 98 units for the upcoming 30-day forecast, which is very stable. The data also suggests the customer has a strong buying behavior.




</details>

</details>


<details>
<summary><strong>2. [PF3300] DLL MAYONNAISE OEUFS 300ML</strong> - LLM: 390u vs Médiane: 130u (Réel: 780u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 390u
- 📊 **Baseline calculée**: 130u
- 📊 **Médiane historique**: 130u
- ✅ **Réel commandé**: 780u
- 📉 **Erreur LLM**: 390u (50.0%)
- 📉 **Erreur Médiane**: 650u (83.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 390u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bimensuelle régulière le lundi (cycle 14j)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-03
- **Prochaine prédite**: 2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 780u

**🧠 Raisonnement LLM:**
Cycle de 14 jours identifié (intervalles récents: 14, 21, 7, 14). La prochaine commande est attendue pour le 17/11 (J+11). On observe un pattern de multiples de 130u (130, 390, 780). La dernière commande de 780u étant un outlier massif (6x la médiane), mais s'inscrivant dans une tendance haussière confirmée par N-1 sur la même période (passage de 130 à 390u), on préconise un compromis à 390u pour assurer la disponibilité sans stocker l'excès du dernier pic.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,633 tokens
- **Output**: 2,337 tokens
- **Total**: 4,970 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Historical Data**

I'm currently focused on the sales history for PF3300 DLL MAYONNAISE O EUFS 300ML. I'm noting the significant jump in units sold on November 3rd, comparing it to previous data points from September and October. I'm looking for patterns or anomalies to explain the recent sales spike.


**Predicting Future Demand**

The analysis continues, with a focus on predicting future orders. Calculating the median order interval reveals a 14-day cycle. Using this, I've projected the next order date to be November 17th. With a 30-day horizon, the 11-day timeframe seems reasonable. The 'RISQUE' flag is activated. I'm now examining order quantities to spot patterns.


**Assessing Order Quantity**

I've been analyzing the order quantities, focusing on the recent spike of 780 units. I've noted the consistent appearance of 130 unit orders, and the presence of orders that are multiples of 130. Given the 14-day cycle, an order is expected on November 17th. Based on the pattern, and N-1 data, I'm now predicting if 780 units is a "one-off".


**Calculating Projected Volume**

I've determined a predicted order quantity of 260 units for the next cycle, due on November 17th. I'm basing this on the consistent 130 unit baseline, adjusting for the recent surge to 780 units, and the slight uptick in demand I observed in the previous year's data. I've noted a "medium" confidence.


**Revising Quantity Predictions**

My forecast for the next order quantity is now 390 units, based on the calculation method. This is in response to the last order of 780, six times the median, and the pattern that indicates orders are in multiples of 130. I'm taking into consideration the seasonality I observe in the N-1 data.


**Finalizing the Recommendation**

I'm now revising my prediction. Based on the documented example, which suggests a compromise when the last order is six times the median, I'm setting the predicted quantity to 390 units. This is consistent with the established pattern of orders being multiples of 130 and accounts for the observed upward trend. I will now prepare the output in JSON.




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

**✅ Quantité LLM**: 98u (confidence: high)
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

**✅ Quantité LLM**: 390u (confidence: high)
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
| [PF3301] DLL MAYONNAISE CITRON 300ML | 260 | Stock prédit: 609.8u (30j restants) → prédit 260u mais non commandé |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 196 | Stock prédit: 44.2u (1j restants) → prédit 196u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T09:31:12.494Z*
