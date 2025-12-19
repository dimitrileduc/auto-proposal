# Rapport Backtest - Client BONNI, ACHAT

## Contexte

- **Client** : BONNI, ACHAT (ID: 8200)
- **Commande réelle** : S40213
- **Date commande** : 2025-11-12 09:20:47
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 34
- **Tokens**: 71,832 input + 60,689 output = 132,521 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.3% | 29 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 18.8% | Score équilibré global |

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
| **MAE** | 6.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 271.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 455.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 271.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 7 | 3 | 4.0 | 133.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 7 | 3 | 4.0 | 133.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 12 | 1 | 11.0 | 1100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 7u vs Médiane: 6u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 7u
- 📊 **Baseline calculée**: 7u
- 📊 **Médiane historique**: 6u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 4u (133.3%)
- 📉 **Erreur Médiane**: 3u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 7u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Historique insuffisant (<2 commandes), cycle par défaut de 30 jours appliqué
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-10-09 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Une seule commande de 7u enregistrée le 2025-09-09. Selon la règle du cycle par défaut (30j), le client est considéré 'en retard' par rapport à son rythme théorique (prochaine commande attendue vers le 2025-10-09). Dans une approche B2B prudente privilégiant la disponibilité, un risque de rupture est identifié pour les 30 prochains jours. La quantité recommandée suit l'historique disponible.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,093 tokens
- **Output**: 1,383 tokens
- **Total**: 3,476 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting the Future**

I'm currently working on the demand forecast for JF031. The data shows a single order from September 9th. Since we lack sufficient historical data (less than two intervals), I'm defaulting to a 30-day cycle assumption to project the next order. I need to determine the last order date based on the existing data.


**Calculating the Order Risk**

I've assessed the risk associated with the late order cycle, deeming it high. Based on a single historical data point and the current date, the order is overdue. Although the 30-day assumption puts the next order in October, the absence of an order confirms this risk. Given the B2B nature, I am now focusing on determining a safe unit order quantity.


**Evaluating Product Quantities**

I'm now zeroing in on the quantity, keeping in mind the 30-day cycle, which suggests the client is overdue. I've considered that the only recorded quantity is 7 units, and since it is B2B, and we are aiming for availability, I am erring on the side of caution. My current assessment is that the safe quantity is 7 units.


**Concluding the Assessment**

The assessment is nearly finalized, confirming the high risk due to the overdue order cycle. The initial quantity of 7 units is deemed appropriate given the constraints and B2B context. Both confidence levels remain low due to the lack of historical data, which is an important consideration.




</details>

</details>


<details>
<summary><strong>2. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 7u vs Médiane: 6u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 7u
- 📊 **Baseline calculée**: 7u
- 📊 **Médiane historique**: 6u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 4u (133.3%)
- 📉 **Erreur Médiane**: 3u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 7u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Données insuffisantes, cycle par défaut de 30 jours supposé
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-09
- **Prochaine prédite**: 2025-11-11 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client n'a commandé qu'une seule fois (7u le 2025-09-09). En appliquant la règle du cycle par défaut de 30 jours, le client est en retard de plus de 30 jours par rapport à la date théorique de réapprovisionnement (2025-10-09). Par mesure de sécurité pour garantir la disponibilité produit en B2B (principe 'dans le doute, on commande'), une commande de la même quantité que l'historique récent est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,092 tokens
- **Output**: 1,527 tokens
- **Total**: 3,619 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Anticipating Product Demand**

I'm focused on the JF032 product, specifically the JF SAUCE LAPIN 3 80GX6. It seems we need to predict demand for the next month, considering the recent history from September 9th, where 7 units were moved. There's no prior history to build from; it's a clean slate. I'm now trying to establish a baseline.


**Analyzing Order Timing**

I've just finished analyzing the order timing for JF032. Given the single data point, I've determined the client is late compared to the assumed 30-day cycle. Therefore, the risk assessment indicates a "RISQUE = OUI". As a result, I'm recommending we order. I have very low confidence in this assessment given the limited data.


**Confirming Order Recommendation**

I'm now completely confident that the client is overdue on their next order. The lack of prior history and the reliance on a 30-day default cycle make me favor ordering 7 units to ensure maximum availability, considering the B2B context. The reasoning is clear; given the lack of historical data, we assume a 30-day cycle, putting the next order well past the theoretical due date.


**Fine-Tuning Quantity Analysis**

I'm now refining the quantity. While 7 units are a baseline, I'm considering the packaging (6 per pack). The fact that the client ordered 7 is slightly odd, but due to the context, and the need for availability, it makes sense to suggest 7 again. The JSON structure is also validated and the prediction is now for today.


**Revising Prediction Dates**

I'm now zeroing in on the predicted dates. Since the client is overdue by two theoretical cycles, and with a B2B context, the "predicted_next_date" is being revised from 2025-10-09 to 2025-11-11, the current date. I will confirm again that we need to trigger an immediate order.




</details>

</details>


<details>
<summary><strong>3. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 12u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 12u
- 📊 **Baseline calculée**: 12u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 11u (1100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 12u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Aucun historique disponible - Cycle par défaut de 30 jours appliqué
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-10-12
- **Prochaine prédite**: 2025-11-11 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Absence totale de données historiques récentes et N-1. Selon le principe de précaution Supply Chain B2B, dans le doute et pour garantir la disponibilité produit, une commande est déclenchée. Application d'une quantité forfaitaire de sécurité (12 unités, correspondant à un format carton standard probable pour ce type de conditionnement 300ml) pour réinitialiser le stock ou répondre à un besoin potentiel non capturé par l'historique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,075 tokens
- **Output**: 1,723 tokens
- **Total**: 3,798 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Data**

I'm currently looking at the data for the JF038 ketchup. There's nothing in the recent history or the prior year's data, which gives me nothing to work with. The 30-day horizon is the only thing to focus on, given the data availability, so I'll need to make some assumptions.


**Analyzing Initial Orders**

I've moved on to the core logic. Since the product has no history, the risk is automatically flagged as "OUI," pushing me toward a proactive ordering strategy. Given the lack of data, I'm leaning heavily on the "be generous" rule. I'm considering the product type – ketchup in a squeeze bottle – and thinking about typical order quantities to arrive at a safe baseline.


**Establishing a Baseline Order**

I'm now determining the initial order quantity. With the "OUI" risk flag confirmed, and no historical data, I must lean heavily on the "be generous" approach. Considering it's a 300ml ketchup bottle, a small, safe quantity like 12 seems reasonable for a first order. I'm also logging a default 30-day cycle and a stable trend due to lack of info.


**Calculating Replenishment Order**

I've determined the order quantity and now calculating the *predicted_next_date* for replenishment. Given no history, I'm setting the cycle to 30 days as a default. Since it's 'day 0' due to the "OUI" risk and lack of data, the next order is required immediately. The confidence level is set to "low," since I'm flying blind.


**Finalizing the Recommendation**

I'm now putting the finishing touches on the recommendation. I've re-evaluated and confirmed all my assumptions, settling on a safe, albeit conservative, order. Due to lack of history and the "OUI" risk, I'm ordering 12 units, setting the next cycle to 30 days. The confidence is understandably low due to the complete absence of data, but the recommendation provides a minimum protection.


**Adjusting Final Output**

I'm now carefully double-checking the final JSON output to ensure all constraints are met, especially the date formats.  I'm also making absolutely sure the reasoning clearly reflects the lack of data and the application of the "safety first" rule, ensuring the recommendation is logical and explainable. I'm focusing on confidence levels.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 14:23:24: 7u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 14:23:24: 7u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 12u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (26)

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
| [PF0959] FILOU TOMATO KETCHUP 10KG | 30 | Stock prédit: 27.1u (28j restants) → prédit 30u mais non commandé |
| [PF3274] JF BURGER SAUCE 925ML | 2 | Stock prédit: 1.8u (24j restants) → prédit 2u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 6 | Stock prédit: 5.2u (20j restants) → prédit 6u mais non commandé |
| [PF0096] FILOU MOUTARDE 3 KG | 25 | Stock prédit: 18.3u (31j restants) → prédit 25u mais non commandé |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 100 | Stock prédit: 79.9u (29j restants) → prédit 100u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 40 | Stock prédit: 37.4u (43j restants) → prédit 40u mais non commandé |
| [PF0075] FILOU CHASSEUR  10 L | 88 | Stock prédit: 81.8u (39j restants) → prédit 88u mais non commandé |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 50 | Stock prédit: 37.9u (18j restants) → prédit 50u mais non commandé |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 214 | Stock prédit: 202.7u (35j restants) → prédit 214u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 12 | Stock prédit: 11.2u (39j restants) → prédit 12u mais non commandé |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 6 | Stock prédit: 4.9u (13j restants) → prédit 6u mais non commandé |
| [PF0088] FILOU VOL AU VENT 800 GR | 32 | Stock prédit: -1.7u (-1j restants) → prédit 32u mais non commandé |
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 44 | Stock prédit: 5.4u (6j restants) → prédit 44u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 4 | Stock prédit: 1.1u (18j restants) → prédit 4u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Stock prédit: -0.9u (-14j restants) → prédit 3u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: -0.6u (-22j restants) → prédit 1u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 4 | Stock prédit: -2.6u (-34j restants) → prédit 4u mais non commandé |
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 6 | Stock prédit: -4.4u (-16j restants) → prédit 6u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 4 | Stock prédit: -2.1u (-38j restants) → prédit 4u mais non commandé |
| [PF0078] FILOU CHASSEUR 5 L | 5 | Stock prédit: -26.7u (-75j restants) → prédit 5u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 6 | Stock prédit: -0.3u (-13j restants) → prédit 6u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 12 | Stock prédit: -0.1u (-3j restants) → prédit 12u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 12 | Stock prédit: 1.4u (34j restants) → prédit 12u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 12 | Stock prédit: 0.0u (0j restants) → prédit 12u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 12 | Stock prédit: 0.7u (24j restants) → prédit 12u mais non commandé |
| [JF066] FIL MOUTARDE 300G BOCAL | 6 | Stock prédit: 0.4u (13j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:56:42.443Z*
