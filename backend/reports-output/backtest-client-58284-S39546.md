# Rapport Backtest - Client SPRL GOOD & FOOD

## Contexte

- **Client** : SPRL GOOD & FOOD (ID: 58284)
- **Commande réelle** : S39546
- **Date commande** : 2025-10-03 12:32:05
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 11,048 input + 22,176 output = 33,224 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 12 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 40.0% | Score équilibré global |

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
| **MAE** | 4.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 3.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 3.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 3.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML | 111 | 110 | 1.0 | 0.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML | 135 | 124 | 11.0 | 8.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML | 126 | 125 | 1.0 | 0.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML</strong> - LLM: 111u vs Médiane: 216u (Réel: 110u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 111u
- 📊 **Baseline calculée**: 111u
- 📊 **Médiane historique**: 216u
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 1u (0.9%)
- 📉 **Erreur Médiane**: 106u (96.4%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 111u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Sporadique (une seule commande de volume important identifiée)
- **Cycle médian (jours)**: 60
- **Dernière commande**: 2025-08-14
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Une seule commande de 111u observée le 14 août (il y a 49 jours). Sans historique N-1, on estime un cycle de type bi-mensuel (~60 jours) pour ce volume. La prochaine commande est donc prévue à court terme (~11 jours), ce qui justifie une réapprovisionnement immédiat basé sur le dernier volume connu.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 791 tokens
- **Output**: 1,215 tokens
- **Total**: 2,006 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Sales Patterns**

I'm analyzing the sales data for PF3357. So far, there's only a single order from August, with 111 units sold. It makes pinpointing a definitive sales frequency challenging, given the limited historical data and the absence of an N-1 order. Calculating the days since the last order provides a timeframe, but it's tough to discern any real trends.


**Predicting Replenishment Needs**

I'm focused on anticipating future replenishment. With only one order to go on, the analysis is challenging. The 111-unit order 49 days ago is the sole reference point, suggesting a possible stock-out risk. The date, 2025-08-14, combined with a potential bi-monthly cycle, points to a replenishment date around October 13th. The current date, 2025-10-02, puts the next order within the next 30 days.


**Calculating Order Quantities**

I'm now determining the recommended quantity. Given the single 111-unit order, that's my baseline. The analysis indicates a sporadic pattern, so replicating the previous order volume seems prudent. The confidence is low due to the limited data, yet, a large order 49 days ago makes me lean towards a bi-monthly cycle and a possible order in the next 11 days.




</details>

</details>


<details>
<summary><strong>2. [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML</strong> - LLM: 135u vs Médiane: 350u (Réel: 124u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 135u
- 📊 **Baseline calculée**: 135u
- 📊 **Médiane historique**: 350u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 11u (8.9%)
- 📉 **Erreur Médiane**: 226u (182.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 135u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande unique identifiée, cycle estimé sporadique ou long (>45j)
- **Cycle médian (jours)**: 60
- **Dernière commande**: 2025-08-14
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une seule commande importante de 135u il y a 49 jours. Bien qu'un retrait au-delà de 45 jours suggère habituellement un risque faible, l'exception pour les produits sporadiques s'applique car une commande a eu lieu dans les 90 derniers jours. On anticipe un cycle de 60 jours, plaçant la prochaine commande vers la mi-octobre. La quantité recommandée suit l'unique point de données disponible.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 789 tokens
- **Output**: 1,433 tokens
- **Total**: 2,222 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Order Data**

I'm analyzing the order history for product PF3358, specifically the DLL DRESSING AVOC AT ITALIAN 240ML. The most recent order was back in August, with only a small quantity. Given the lack of recent orders and no prior history, I'm now focusing on potential reasons for the low demand.


**Evaluating the Replenishment Cycle**

I've calculated the time since the last order of PF3358, which is approximately 49 days. Considering this, I'm now contemplating the potential risk of running out within the next 30 days. Also, since there is no existing replenishment history, it is difficult to identify when to reorder, as there is no median purchase cycle. The 135-unit order volume suggests it's likely a regular customer.


**Anticipating Potential Reorder**

I've determined a potential reorder is needed within the next 11 days, with a strong likelihood of rupture if the estimated 60-day cycle is correct. Although the pattern appears sporadic, the significant order size necessitates close monitoring. The exception rule regarding sporadic products is noted, and I'll recommend the same quantity as the last order.


**Predicting the Replenishment Date**

Based on the single order and current date, I've estimated a 60-day cycle for PF3358. This suggests a reorder around October 13th. The elapsed time and volume suggest the potential for replenishment is high, with a potential rupture in the next 30 days. Recommending the previous order quantity.




</details>

</details>


<details>
<summary><strong>3. [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML</strong> - LLM: 126u vs Médiane: 162u (Réel: 125u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 126u
- 📊 **Baseline calculée**: 126u
- 📊 **Médiane historique**: 162u
- ✅ **Réel commandé**: 125u
- 📉 **Erreur LLM**: 1u (0.8%)
- 📉 **Erreur Médiane**: 37u (29.6%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 126u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Produit sporadique, une seule commande observée il y a 49 jours.
- **Cycle médian (jours)**: 60
- **Dernière commande**: 2025-08-14
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Une seule commande de 126u détectée le 14/08. 49 jours se sont écoulés sans nouvelle commande, ce qui suggère une fréquence de type bimestrielle pour ce volume. La commande suivante est estimée aux alentours du 13/10 (J+60), soit dans l'horizon des 30 jours requis. On reconduit la quantité de 126 unités par défaut.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 793 tokens
- **Output**: 1,948 tokens
- **Total**: 2,741 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Data**

I'm currently looking at the product's sales data, specifically the [PF3353] DLL DRESSING AVOC AT MIEL MOUTARDE. I've noted a recent sale of 126 units on August 14th. I'm focusing on historical data, with an eye towards establishing a baseline, but the lack of prior history is making it difficult.


**Assessing Refill Needs**

I'm now weighing the risk of a stockout for the [PF3353] product. The analysis is tricky, because I only have a single data point from August 14th to go on. Given the 49-day gap since that order, the situation is classified as "sporadic." While the >45-day mark triggers a "risk non," the monthly/bi-monthly refill pattern for dressings suggests a potential need soon.


**Predicting Replenishment Needs**

I'm now assessing the quantity to reorder, with an initial baseline of 126 units based on the single historical order. Considering the sporadic nature of this product, and that the product is estimated to cycle about every 60 days, with the last order 49 days ago, I'm predicting the next order will be within the next 30 days.


**Finalizing the Recommendation**

I've just finalized the replenishment recommendation, incorporating all factors. Considering that it's a sporadic product with a single historical order of 126 units 49 days ago, and based on the estimated 60-day cycle, I'm predicting the next order within the next 15 days. I'm recommending a reorder of 126 units, with a low confidence level.


**Evaluating the Replenishment**

I'm revisiting the core logic to clarify the risk assessment. Considering the single order 49 days ago, and projecting a bi-monthly replenishment (60-day cycle), I've determined that a reorder is likely within the next 11 days. My focus is now on confirming this conclusion.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:47:50: 111u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 111u (confidence: low)
**📊 Quantité Réelle**: 110u

</details>


<details>
<summary><strong>2. [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:47:50: 135u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 135u (confidence: low)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>3. [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:47:50: 126u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 126u (confidence: low)
**📊 Quantité Réelle**: 125u

</details>




---

## False Positives (9)

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
| [PF3359] DLL MAYONNAISE AVOCAT CHIPOTLE 200ML | 350 | Stock prédit: 340.8u (36j restants) → prédit 350u mais non commandé |
| [ING0271] SIROP D'AGAVE BIO | 25 | Stock prédit: 22.5u (235j restants) → prédit 25u mais non commandé |
| [PF3354] DLL DRESSING AVOCAT BALSAMICO 240ML | 20 | Stock prédit: -319.6u (-45j restants) → prédit 20u mais non commandé |
| [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML | 118 | Stock prédit: -209.5u (-30j restants) → prédit 118u mais non commandé |
| [PF3355] DLL DRESSING AVOCAT POPPY SEEDS 240ML | 401 | Stock prédit: 22.2u (2j restants) → prédit 401u mais non commandé |
| [PF3350] DLL MARINADE AVOCAT 8 HERBS 240ML | 8 | Stock prédit: -299.8u (-46j restants) → prédit 8u mais non commandé |
| [PF3360] DLL MAYONNAISE AVOCAT 200ML | 141 | Stock prédit: -265.0u (-31j restants) → prédit 141u mais non commandé |
| [PI3338] PI VINAIGRETTE CILANTRO LIME G&F | 80 | Stock prédit: 63.7u (187j restants) → prédit 80u mais non commandé |
| [PI3336] PI VINAIGRETTE ITALIAN G&F | 85 | Stock prédit: 67.8u (189j restants) → prédit 85u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:58:51.407Z*
