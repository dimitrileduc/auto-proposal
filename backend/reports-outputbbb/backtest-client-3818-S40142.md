# Rapport Backtest - Client NATURKOST WEST GMBH

## Contexte

- **Client** : NATURKOST WEST GMBH (ID: 3818)
- **Commande réelle** : S40142
- **Date commande** : 2025-11-05 12:54:20
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 9,593 input + 6,336 output = 15,929 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 10.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (3)

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
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 32 | 16 | 16.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 32 | 16.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 32u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: 16u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière tous les 14 à 19 jours (médiane 17 jours)
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-10-30 (dans -5j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande habituellement le lundi ou le mercredi. La commande est attendue immédiatement car le dernier cycle est dépassé.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle récent entre les commandes est passé de 14 à 19 jours, donnant une médiane de 17 jours. La dernière commande datant du 13 octobre, la suivante était théoriquement prévue pour le 30 octobre. Le client est donc en retard de 5 jours sur son cycle habituel, ce qui indique un risque imminent de rupture. Au niveau des quantités, le client est extrêmement stable avec 32 unités sur les trois dernières commandes. Bien que l'historique N-1 affiche une commande de 48 unités à cette période, la stabilité parfaite à 32 unités en 2025 suggère de s'en tenir à cette quantité habituelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,486 tokens
- **Output**: 1,396 tokens
- **Total**: 3,882 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Data Points**

\n\n

I've been meticulously examining the timestamps associated with the "MF 0044" product. The pattern seems to indicate regular updates, with a notable concentration of activity in specific months across different years. I'm focusing on the frequency and timing of these recorded instances.


**Calculating the Cycle Length**

\n\n

My current focus is on pinpointing the product's typical order cycle. Based on the provided data for "MF 0044," I've calculated an approximate cycle of 17 days. Considering the last order date, I've projected a next order date and compared it to today's date. The discrepancy of roughly five days indicates a potential risk of stockout. The consistency in recent order quantities, specifically 32 units, further bolsters this analysis.


**Confirming Order Risk Assessment**

\n\n

My analysis of the "MF 0044" data is now solidified. I've concluded a high probability of a stockout situation. The predicted order date was October 30th, and given today's date of November 4th, the order is overdue by five days. Furthermore, the stable demand pattern of 32 units reinforces the recommendation to replenish with that specific quantity.


**Confirming Final Recommendation**

\n\n

My analysis has led me to a high-confidence recommendation. The predicted order date for "MF 0044" was October 30th, but given today's date of November 4th, the order is five days late. The recent order history consistently shows a quantity of 32 units, further reinforcing the need to replenish with this same quantity. The JSON output, date formats, calculations, and recommendations are all verified, and no outliers are present.




</details>

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 48u vs Médiane: 32u (Réel: 48u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 48u
- 📊 **Baseline calculée**: 32u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 48u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande environ tous les 14 jours avec un retard actuel significatif
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Habituellement le mercredi, le client n'a pas commandé depuis 41 jours
- **Outliers détectés**: 80u

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 14 jours. La dernière commande ayant eu lieu le 24 septembre, le client est en retard de plus de 27 jours. La quantité habituelle en 2025 est de 32u (multiples de 16u), mais l'historique N-1 montre une augmentation saisonnière à 48u sur la période d'octobre/novembre. Afin de couvrir ce retard et de répondre à la tendance saisonnière, nous recommandons une commande de 48u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,511 tokens
- **Output**: 1,713 tokens
- **Total**: 4,224 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the production data for product MF0042, focusing on its recent history. I've noted a significant drop in units produced, specifically a decline from 80 units on September 10th to only 32 units on September 24th of 2025. This production dip warrants further investigation to understand its cause.


**Investigating Order Frequency**

I'm now examining the order frequency of product MF0042, specifically analyzing the time intervals between orders. The median interval seems to be 14 days, derived from the periods between recent orders. The last order was on September 24th, 2025. Given this information and today's date, there's a significant delay, which poses a risk of supply disruption.


**Evaluating Production Volumes**

I've now moved on to assess the historical production volumes. Comparing 2025 to the previous year, 2024, reveals potential seasonal patterns. While recent 2025 data shows a consistent 32-unit production, historical data from 2024 indicates a shift to 48 units during the September/October period. Given the current delay in orders and this seasonality, I'm leaning toward recommending 48 units for the next order.


**Recommending Order Quantity**

Based on recent findings, I'm now determining the optimal order quantity. The product's baseline is 32 units, but I'm leaning towards 48 units due to the customer's significant order delay, coupled with the seasonal increase observed in 2024 during the September/October period. This is based on a medium confidence level.


**Synthesizing Recommendations Now**

I'm now integrating all the gathered data to finalize my recommendation. Specifically, I'm taking the product's regular order quantity of 32 units as a baseline, and factoring in the customer's order delay, and the seasonal increase in demand observed in the past. After a review, I've confirmed that the recommendation of 48 units has a medium confidence level.




</details>

</details>


<details>
<summary><strong>3. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 64u (Réel: 32u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 64u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 16u (50.0%)
- 📉 **Erreur Médiane**: 32u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Historique insuffisant (<2 points), cycle de 30j par défaut appliqué
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-11-04 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Dernière commande il y a 41 jours, cycle théorique de 30 jours dépassé
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit n'a été commandé qu'une seule fois le 24/09 pour 16u. En appliquant la règle du cycle par défaut de 30 jours, la prochaine commande était attendue pour le 24/10. Nous sommes le 04/11, le client est donc en retard de 11 jours sur son rythme supposé. Conformément à la philosophie de disponibilité B2B, le risque de rupture est jugé réel malgré la pauvreté des données. On recommande de se baser sur la dernière commande connue.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,090 tokens
- **Output**: 1,323 tokens
- **Total**: 3,413 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Product Demand**

I'm currently focused on the product "MF0062" - specifically, its red beet tart. The initial data shows a single order back in September. With a 30-day horizon, I'm now analyzing the recent order history and previous year's data (or lack thereof) to predict demand through early December.


**Evaluating Order Timing**

I've examined the product's (MF0062) single recorded order, a red beet tart, which occurred on September 24, 2025. Given the lack of historical data, I'm assuming a 30-day cycle. Now, being November 4th, the client is past their theoretical reorder date, posing a risk. My confidence level for this initial assessment is low.


**Determining Next Order Prediction**

I've just finalized the initial calculations for the MF0062 red beet tart. Given a single order on September 24th and a 30-day cycle assumption, the client is now overdue. I've predicted the next order date as today, November 4th, with a recommended quantity of 16 units. The confidence in this prediction remains "low" due to the limited data.


**Summarizing The Findings**

I've just finalized the comprehensive prediction for the MF0062 red beet tart. Considering the single order on September 24th, with a 30-day cycle assumption, the client is now overdue. I've predicted the next order date as today, November 4th, with a quantity of 16 units. The confidence level, understandably, remains "low" due to the limited dataset.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 10:17:04: 32u
- 2025-09-24 09:49:39: 32u
- 2025-09-10 06:32:45: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 06:57:05: 48u
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

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:49:39: 32u
- 2025-09-10 06:32:45: 80u
- 2025-08-20 12:43:59: 32u
- 2025-08-13 10:37:06: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 10:32:25: 48u
- 2024-10-14 06:57:05: 48u
- 2024-09-09 12:35:42: 48u
- 2024-09-05 07:56:09: 48u
- 2024-08-27 12:23:03: 32u
- 2024-08-16 09:58:48: 32u
- 2024-06-27 07:43:54: 32u
- 2024-06-13 06:56:18: 32u
- 2024-05-16 08:11:07: 48u
- 2024-05-14 08:23:32: 32u
- 2024-04-18 08:58:20: 48u
- 2024-03-14 08:27:15: 96u

**✅ Quantité LLM**: 48u (confidence: medium)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:49:39: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: low)
**📊 Quantité Réelle**: 32u

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
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 32 | Stock prédit: 7.4u (6j restants) → prédit 32u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:54:19.202Z*
