# Rapport Backtest - Client NATURKOST WEST GMBH

## Contexte

- **Client** : NATURKOST WEST GMBH (ID: 3818)
- **Commande réelle** : S39694
- **Date commande** : 2025-10-13 10:17:04
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,517 input + 7,600 output = 11,117 total


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
- **Pattern temporel**: Cycle bimensuel régulier identifié sur les données récentes
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande court (14 jours) et la date de la dernière commande (24/09) indiquent qu'une commande aurait dû être passée vers le 08/10. Avec 18 jours écoulés depuis la dernière livraison, le risque de rupture est élevé. La quantité de 32 unités est extrêmement stable tant sur l'historique récent que sur l'historique N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 953 tokens
- **Output**: 1,728 tokens
- **Total**: 2,681 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Intervals**

I'm currently focused on determining the interval between the listed dates in the product's recent history. I've noted the dates, and now I'm calculating the time that has elapsed between 2025-09-10 and 2025-09-24 to understand the product's update frequency.


**Predicting Imminent Reorder**

I've analyzed the product's ordering cycle, finding a consistent 14-day interval in 2025. Given that the last order was 18 days ago, past the predicted date, I'm now classifying the risk of rupture as high. The usual quantity is 32u, and I'm seeing a pattern.


**Evaluating Past Quantities**

I'm now determining the typical order quantity. Both in 2025 and historically, 32 units appears dominant. I've considered that, given the consistent recent pattern and the lack of outliers, I can confidently recommend reordering 32 units. The analysis of seasonality confirms stability in September and October.


**Assessing Ordering Immediacy**

Now I'm focusing on the timing of this overdue order. The 18 days since the last order, exceeding the usual 14-day cycle, confirm the high rupture risk. I'm also confirming the 32-unit quantity, as the recent and historical data strongly supports this number. The confidence level is high.


**Concluding Recommendation Refinement**

Now I'm focusing on the final calculations. Re-examining the 2024 data, ordering patterns seem to accelerate in September. With the next order date already passed, and the quantity consistently 32 units, I'm confirming that a reorder for 32 units is necessary, using a negative value for `days_until_next`. The confidence level remains high.




</details>

</details>


<details>
<summary><strong>2. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 24u (Réel: 32u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 21.3u
- 📊 **Médiane historique**: 24u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 16u (50.0%)
- 📉 **Erreur Médiane**: 8u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel avec une médiane de 14 jours, actuellement en retard de cycle (+32 jours depuis la dernière commande).
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-09-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
Le client suit normalement un cycle de 14 jours avec une forte récurrence de 16 unités. La dernière commande date de 32 jours (10 sept), ce qui signifie que le client a manqué son cycle habituel de fin septembre et début octobre. Le risque de rupture à 30 jours est très élevé. On préconise la quantité standard (médiane) de 16 unités, malgré une pointe à 32u observée lors de la dernière commande qui semble ponctuelle (similaire à septembre N-1).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 973 tokens
- **Output**: 2,723 tokens
- **Total**: 3,696 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I'm now focusing on the sales data for MF Delikatess Mayonnaise. It seems we had a recent bump of 32 units on September 10th of this year. Before that, the numbers were consistently at 16 units in August. I am now comparing these numbers with the previous year's sales to identify any patterns.


**Calculating Sales Interval Data**

I'm now examining the intervals between sales for MF Delikatess Mayonnaise, comparing 2024 and 2025. I've noted the intervals between sales in recent months, calculating their duration in days. The summer gap in 2024 between June 27th and August 16th is noticeable.


**Predicting Order Imminence**

I've just calculated a median sales interval of 14 days for MF Delikatess Mayonnaise, while comparing current and previous years' sales intervals. Given that the last order was on September 10th and today is October 12th, the client is overdue by 18 days. This, coupled with the B2B context, strongly suggests an upcoming order is probable, or at a minimum, warrants attention.


**Refining Risk Assessment**

I'm now zeroing in on the risk evaluation for the MF Delikatess Mayonnaise order. Based on the 14-day median cycle and the 32 days since the last order, I'm classifying the client as high-risk, given the overdue status. I'm taking into account the B2B context.


**Evaluating Quantity Recommendations**

I'm now determining the most appropriate quantity for the upcoming order. While a recent order was for 32 units, historical data indicates a standard of 16. Considering the overdue status, I'm leaning toward 16, while acknowledging the potential for a larger order.


**Calculating Baseline Order Quantity**

I'm now determining the most reasonable order quantity, with 16 being the historical standard. However, the last order was 32 units, and the client is overdue by 18 days. Considering the possibility of a larger replenishment due to the delay, I am leaning toward recommending the standard 16 units, with a note to observe.


**Determining the Order Imminence**

I've examined the data, and since the last order was on September 10th and today is October 12th, the client is 18 days overdue. Based on the 14-day median sales interval and the B2B context, an upcoming order is very probable.




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

**✅ Quantité LLM**: 16u (confidence: medium)
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

*Rapport généré automatiquement le 2025-12-19T12:50:05.000Z*
