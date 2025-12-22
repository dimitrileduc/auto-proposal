# Rapport Backtest - Client COLRUYT FOOD RETAIL NV NEW

## Contexte

- **Client** : COLRUYT FOOD RETAIL NV NEW (ID: 33598)
- **Commande réelle** : S39712
- **Date commande** : 2025-10-14 13:24:27
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 35
- **Tokens**: 23,024 input + 66,355 output = 89,379 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 14.3% | 28 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 25.0% | Score équilibré global |

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 100u
- 📊 **Baseline calculée**: 100u
- 📊 **Médiane historique**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 100u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières toutes les 2 à 4 semaines (cycle médian de 21 jours)
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-29 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 225u

**🧠 Raisonnement LLM:**
Le rythme de commande est très stable avec un cycle médian de 21 jours. La quantité de 100 unités est récurrente sur les quatre dernières commandes ainsi qu'en N-1 à la même période. La prochaine commande étant prévue dans environ 16 jours (échéance < 40j), le besoin est confirmé.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 727 tokens
- **Output**: 1,417 tokens
- **Total**: 2,144 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Order Frequency**

I've begun examining the order history for the LV BIO Tartinade Paprika Chili. Initial data reveals orders on October 8th and September 16th. Calculating the time between orders, I see a 22-day interval. Further analysis is needed to determine any patterns.


**Projecting Future Demand**

The median interval of 21 days between orders of LV BIO Tartinade Paprika Chili has been established. Based on this, I've projected the next order for October 29th. Considering the current date, there are 16 days until this potential order, meeting the reorder criterion. My analysis strongly suggests a need for an order in the next two weeks.


**Evaluating Quantity and Confidence**

I've nailed down the order quantity: a consistent 100 units is needed. My confidence in this recommendation is high due to stable orders. I'm building out my reasoning with French language descriptors, now. I will also incorporate a seasonality check.


**Reassessing Interval Consistency**

I've re-examined the order intervals, confirming a median of 21 days. The next order is projected for October 29th, with a 16-day window remaining. The reorder criterion is met, and the risk of stockout is high, meaning 100 is the recommended quantity. I also confirmed my reasoning is sound in French.




</details>

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 100u
- 📊 **Baseline calculée**: 100u
- 📊 **Médiane historique**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 100u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Mensuel régulier (environ 27 jours)
- **Cycle médian (jours)**: 27
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé est très stable avec un intervalle d'environ 27 jours entre les commandes. La dernière commande datant du 9 septembre, la date théorique de réapprovisionnement (6 octobre) est déjà dépassée de 7 jours, confirmant un risque imminent de rupture. La quantité commandée est strictement identique (100u) sur toutes les occurrences récentes et en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 638 tokens
- **Output**: 1,172 tokens
- **Total**: 1,810 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Recent Data Points**

My focus has shifted to the product's recent sales history. I've noted the quantities sold on specific dates: 10 units on September 9th and 100 units on August 13th, 2025. Now, I'm ready to move on to interval analysis to identify trends and patterns.


**Calculating Stock Risk Assessment**

My analysis indicates a high risk of stockout. The product's sales cycle appears to be around 27-30 days, yet 34 days have elapsed since the last order. Based on this, I'm recommending the replenishment of 100 units, as historical data consistently shows orders of this quantity.


**Refining Replenishment Strategy**

I've meticulously reviewed the historical data, including the N-1 order from October 2024. My calculations strongly support the high probability of a stockout. The stable demand and predictable 27-day cycle, already exceeded, point to a definite need. I'm now fine-tuning the recommendations based on the existing patterns.




</details>

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 100u
- 📊 **Baseline calculée**: 100u
- 📊 **Médiane historique**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 100u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-10-07 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel de commande est de 28 jours en moyenne. La dernière commande date de 34 jours (soit une date théorique de réapprovisionnement au 07/10 déjà dépassée). La quantité commandée est strictement identique (100u) sur tous les points de données, y compris en N-1, ce qui indique un besoin fixe et prévisible.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 667 tokens
- **Output**: 1,268 tokens
- **Total**: 1,935 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Predicting Order Quantities**

I'm analyzing the historical data for LV Tartin ade Basilico 190g to forecast future order needs. So far, I've identified two past orders: 100 units on September 9th, 2025, and another 100 on August 20th, 2025. Now I will determine if I can use this to predict demand for October 13th, 2025.


**Evaluating Replenishment Needs**

I've examined the product's ordering history, calculating the median cycle length and predicting the next order date. Considering that my predicted date has already passed, and the risk assessment indicates a "YES" for replenishment, the analysis is leaning towards a need. Further, I have considered the impact of any seasonality to arrive at my final conclusion.


**Finalizing the Recommendation**

I've incorporated the JSON format and reviewed the analysis, which confirms the need for an immediate order. The historical consistency of 100 units, the median cycle of 28 days, and the fact that the predicted replenishment date has already passed all strongly support this. The risk assessment further validates this conclusion, and I am confident with the recommendation.




</details>

</details>


<details>
<summary><strong>4. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 48u vs Médiane: 48u (Réel: 48u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 48u
- 📊 **Baseline calculée**: 48u
- 📊 **Médiane historique**: 48u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 48u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle long de 56 jours détecté
- **Cycle médian (jours)**: 56
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-11-04 (dans 22j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Les commandes précédentes ont eu lieu le mardi, l'analyse projette une prochaine livraison début novembre
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court mais extrêmement stable avec deux commandes identiques de 48 unités espacées de 56 jours. L'échéance de la prochaine commande est estimée dans 22 jours (4 novembre), ce qui est inférieur au seuil de précaution de 40 jours. On recommande de commander la quantité habituelle de 48 unités pour couvrir ce besoin cyclique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 619 tokens
- **Output**: 1,840 tokens
- **Total**: 2,459 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product History**

I'm currently looking at the product's order history. It appears there have been two orders so far, one in July and another in September of 2025. Both seem to have a 48u designation. There's no prior history to analyze.


**Calculating Order Proximity**

I'm now calculating the time since the last order and the predicted next order date. Based on the 56-day cycle derived from the two orders, the next order is estimated for November 4th. Currently, 34 days have passed since the last order. This leaves 22 days until the predicted order, but the risk threshold is less than or equal to 40 days, so the product is deemed risky.


**Confirming Order Recommendation**

I'm now determining the recommended quantity and confidence level. Given the stable baseline and consistent ordering pattern of 48 units every 56 days, the recommendation is also 48 units. With no outliers or seasonality detected, the confidence level is high.


**Reassessing Risk Threshold**

I am now reviewing the risk calculations. The 22 days remaining until the next order falls within the 40-day risk window, so I'm confirming there's an increased chance of needing a new order. The cycle is 56 days; this long interval reinforces the need to order 48 units soon.


**Synthesizing Recommendations**

I'm now consolidating all the findings. The product's consistent ordering pattern, with 48 units every 56 days, coupled with 22 days remaining until the next expected order (2025-11-04), triggers a risk flag. Therefore, I will recommend another order of 48 units. The confidence level is medium due to the limited historical data. My reasoning will highlight the stable demand and the need to proactively replenish stock before the predicted replenishment date.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:27:45: 100u
- 2025-09-16 09:13:36: 100u
- 2025-09-02 11:49:23: 100u
- 2025-08-13 10:56:00: 100u
- 2025-07-15 11:13:22: 225u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 11:14:44: 100u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 100u

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 09:42:43: 100u
- 2025-08-13 10:56:00: 100u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:04:30: 100u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 100u

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 09:42:43: 100u
- 2025-08-20 07:51:02: 100u
- 2025-07-15 11:13:22: 100u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 11:14:44: 100u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 100u

</details>


<details>
<summary><strong>4. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 09:42:43: 48u
- 2025-07-15 11:13:22: 48u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 48u (confidence: medium)
**📊 Quantité Réelle**: 48u

</details>




---

## False Positives (24)

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
| [PF3302] BONI BIO MAYONNAISE 500ML | 220 | Stock prédit: 37.6u (1j restants) → prédit 220u mais non commandé |
| [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg | 336 | Stock prédit: 261.3u (10j restants) → prédit 336u mais non commandé |
| [PF1503] BONI VINAI MOUTARDE 450ML | 126 | Stock prédit: 58.6u (2j restants) → prédit 126u mais non commandé |
| [PF1502] BONI VINAI FINE HERBE 450ML | 378 | Stock prédit: -63.0u (0j restants) → prédit 378u mais non commandé |
| [PF1501] BONI VINAI CIBOULETTE 450ML | 378 | Stock prédit: 195.6u (3j restants) → prédit 378u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 27 | Stock prédit: 23.0u (23j restants) → prédit 27u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 100 | Stock prédit: 73.5u (11j restants) → prédit 100u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 100 | Stock prédit: 59.8u (5j restants) → prédit 100u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 100 | Stock prédit: 72.6u (10j restants) → prédit 100u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 100 | Stock prédit: 70.9u (9j restants) → prédit 100u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 100 | Stock prédit: 42.7u (8j restants) → prédit 100u mais non commandé |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 100 | Stock prédit: -62.5u (-5j restants) → prédit 100u mais non commandé |
| [LV339] LV Tripack apéro | 184 | Stock prédit: -115.0u (-5j restants) → prédit 184u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 100 | Stock prédit: 12.4u (3j restants) → prédit 100u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 126 | Stock prédit: 32.6u (11j restants) → prédit 126u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 100 | Stock prédit: -11.2u (-3j restants) → prédit 100u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 50 | Stock prédit: 1.9u (1j restants) → prédit 50u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 48 | Stock prédit: 4.9u (4j restants) → prédit 48u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 56 | Stock prédit: 5.7u (4j restants) → prédit 56u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 100 | Stock prédit: -80.9u (-23j restants) → prédit 100u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 100 | Stock prédit: 14.5u (8j restants) → prédit 100u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 125 | Stock prédit: -96.1u (-26j restants) → prédit 125u mais non commandé |
| [PF3259] EVD MOUTARDE FORTE 350 GR | 3900 | Stock prédit: 1400.0u (33j restants) → prédit 3900u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 56 | Stock prédit: -34.6u (-33j restants) → prédit 56u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:57:45.916Z*
