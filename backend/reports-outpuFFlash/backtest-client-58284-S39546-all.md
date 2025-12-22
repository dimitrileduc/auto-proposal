# Rapport Backtest - Client SPRL GOOD & FOOD

## Contexte

- **Client** : SPRL GOOD & FOOD (ID: 58284)
- **Commande réelle** : S39546
- **Date commande** : 2025-10-03 12:32:05
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 8,304 input + 41,254 output = 49,558 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 27.3% | 11 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 42.9% | Score équilibré global |

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
- **Pattern temporel**: Commande unique détectée il y a 49 jours
- **Cycle médian (jours)**: 60
- **Dernière commande**: 2025-08-14
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique contient une commande unique datant de 49 jours. En l'absence de cycle établi, on estime un cycle standard de 60 jours pour ce type de produit. La date actuelle (2025-10-02) place l'échéance de réapprovisionnement à environ 11 jours, ce qui justifie une commande préventive (horizon < 40j). La quantité recommandée est basée sur le seul volume connu.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 595 tokens
- **Output**: 1,626 tokens
- **Total**: 2,221 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Reorder Needs**

I'm currently focused on the product PF3357, the DLL DRESSING AVOC AT GINGER MANGO 240ML. Reviewing its sales history, I see a recent sale of 11 units on 2025-08-14. Given the absence of prior sales data (N-1 History), and aiming for a 30-day reorder analysis, I am now assessing the current stock levels and lead times to determine optimal reorder points.


**Determining Risk Factors**

I'm now deeply analyzing the "Risk of Out-of-Stock" assessment, driven by the elapsed time since the last order. Despite the lack of a regular cycle due to only a single data point, I'm considering the 49-day gap and comparing it to estimated cycle times. Leaning toward a "RISK YES" assessment due to a possible 60-day cycle, indicating a potential need within the next 40 days, I am preparing for the next stocking action.


**Confirming Risk and Quantity**

I've determined a "RISK YES" assessment due to the 49-day lapse since the last order of 111 units. Although the cycle is undefined, a 60-day estimate suggests a potential need by October 13th. The recommended reorder is 111 units, with low confidence due to limited historical data. This aligns with the defined JSON schema.




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
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande unique identifiée il y a 49 jours
- **Cycle médian (jours)**: 60
- **Dernière commande**: 2025-08-14
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Seule une commande de 135u est enregistrée (14/08). Avec 49 jours écoulés sans réapprovisionnement, et dans l'absence d'historique long, on suppose un cycle approchant les 60 jours (bimestriel). La prochaine commande tomberait ainsi dans l'horizon des 30 jours (autour du 13/10). Par sécurité B2B, on recommande de prévoir le volume de la commande précédente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 593 tokens
- **Output**: 1,354 tokens
- **Total**: 1,947 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing the Order Data**

I'm currently focused on the single order from August, reviewing the unit count and the product details. It's a bit of a data sparsity issue; I'm missing the "N-1" order data, making it challenging to establish a baseline. I'm exploring potential explanations for the absence of earlier orders.


**Investigating Order Frequency**

I'm now calculating the time since the last order of the product "PF3358" - a 49-day gap. Given the absence of prior orders, establishing a typical ordering cycle is impossible. The decision rules regarding "rupture risk" are challenging to apply, but the 49-day gap suggests a potential need for this dressing product soon.


**Predicting the Next Order**

I've determined a probable "rupture risk" and am now assessing the estimated time for a future order. With only one order to work from, and a lack of reliable data on the customer's typical cadence, I'm working with a 60-day cycle estimate, common for these B2B products. This means the next order may come within the next 11 days. I will recommend the same quantity as the previous order.


**Calculating Rupture Risk**

I'm now zeroing in on the rupture risk. Since the last order was 49 days ago, and I am assuming a 60-day cycle, then the estimated date for a new order is ~Oct 13th. The risk is high given the uncertainty. My next step will be to confirm the product volume and the expected delivery date. I'll maintain the original baseline, and recommend a quantity of 135 units.




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
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Donnée insuffisante (une seule commande enregistrée)
- **Cycle médian (jours)**: 60
- **Dernière commande**: 2025-08-14
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Une seule commande de 126 unités a été enregistrée il y a 49 jours. En l'absence d'historique long, on suppose un cycle de réapprovisionnement bimestriel (60 jours). La date actuelle (J+49) suggère une commande imminente sous 11 jours, ce qui entre dans la fenêtre de risque de 40 jours. Par prudence B2B, on recommande de commander la même quantité que la dernière fois.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 597 tokens
- **Output**: 1,517 tokens
- **Total**: 2,114 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Order Trends**

I'm currently focused on the product PF3353, specifically the DLL DRESSING AVOC AT MIEL MOUTARDE. My data reveals a single order from 2025-08-14, totaling 126 units. The N-1 history is entirely blank, providing a very limited view for forecasting. It's a single data point thus far.


**Evaluating Ordering Frequency**

The 49-day gap since the last order of PF3353, along with the single data point, significantly complicates cycle analysis. Given the limited history, I'm leaning toward a potential risk, particularly if a 30- or 60-day cycle is assumed, because of the time passed. I am going to have to make a call on this product.


**Confirming Order Recommendation**

Considering the 49-day gap and potential for a 60-day cycle, I'm recommending a replenishment order of 126 units to mirror the single past order, and prevent a stockout. The lack of prior data gives low confidence. However, if the customer is following a bi-monthly pattern, this is the right time to re-up.


**Determining Risk Factors**

I'm now calculating risk factors based on the 49-day gap since the last order. Considering potential 30- or 60-day cycles, and because of time passing, I'm declaring a "Risk Yes" on the product. I've corrected the JSON fields accordingly, estimating a 60-day cycle, and factoring in the need to re-order.




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

## False Positives (8)

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
| [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML | 118 | Stock prédit: -209.5u (-30j restants) → prédit 118u mais non commandé |
| [PF3355] DLL DRESSING AVOCAT POPPY SEEDS 240ML | 401 | Stock prédit: 22.2u (2j restants) → prédit 401u mais non commandé |
| [PF3350] DLL MARINADE AVOCAT 8 HERBS 240ML | 8 | Stock prédit: -299.8u (-46j restants) → prédit 8u mais non commandé |
| [PF3360] DLL MAYONNAISE AVOCAT 200ML | 141 | Stock prédit: -265.0u (-31j restants) → prédit 141u mais non commandé |
| [PI3338] PI VINAIGRETTE CILANTRO LIME G&F | 80 | Stock prédit: 63.7u (187j restants) → prédit 80u mais non commandé |
| [PI3337] PI VINAIGRETTE GRAINES DE PAVOT G&F | 95 | Stock prédit: 0.0u (0j restants) → prédit 95u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T13:01:24.598Z*
