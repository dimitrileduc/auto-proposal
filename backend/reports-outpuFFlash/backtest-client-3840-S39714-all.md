# Rapport Backtest - Client KORO HANDELS GmbH

## Contexte

- **Client** : KORO HANDELS GmbH (ID: 3840)
- **Commande réelle** : S39714
- **Date commande** : 2025-10-14 07:59:02
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 6,392 input + 21,233 output = 27,625 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 6 produits prédits, 2 corrects |
| **Rappel** | 50.0% | 4 produits réels, 2 détectés |
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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G | 1500 | 1500 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3363] DE_AUFSTR_041_T6 KORO TARTINADE BIO BETTERAVE 380G  | 172 | 172 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - LLM: 1500u vs Médiane: 1518u (Réel: 1500u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1500u
- 📊 **Baseline calculée**: 1510u
- 📊 **Médiane historique**: 1518u
- ✅ **Réel commandé**: 1500u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 18u (1.2%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1500u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel stable d'environ 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement régulier (27 à 29 jours) sur les trois derniers mois. La dernière commande date d'il y a 4 jours, ce qui place la prochaine échéance au 6 novembre 2025 (soit dans 24 jours). Selon le critère de risque à 40 jours, une commande est nécessaire. Les volumes sont très stables autour de 1500 unités en 2025, marquant une forte croissance par rapport à la moyenne de 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 832 tokens
- **Output**: 1,559 tokens
- **Total**: 2,391 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Production Quantities**

I'm currently focused on the production quantities for [PF3313] DE_AUFSTR_ 034_T6 KORO TARTINADE BIO MANGUE  380G. The most recent data point shows 1500 units produced four days ago. Before that, I see a consistent pattern, with around 1500 units produced approximately every month, going back to August.


**Projecting Future Demands**

I've been calculating the next production date, which I estimate to be November 6th, using a 28-day cycle. Currently, there are 24 days remaining until this date. My analysis of the quantity trend reveals a significant increase from roughly 750 units in 2024 to approximately 1500 units recently, with a stable recent pattern. Consequently, I consider the risk threshold as "YES."


**Calculating Recommended Quantity**

Considering the consistent pattern, I'm now recommending 1500 units for the next order, aligning with the recent production volumes. The 28-day cycle continues to hold. My confidence level remains high, given the stability of the data and the recent production run.


**Finalizing Recommendation Details**

I'm now assessing the overall confidence level and reasoning behind my recommendation. I've noted a very stable 28-day cycle, as demonstrated by the last three months of production data. Moreover, I'm reinforcing the decision to replenish based on the upcoming 24-day window. Considering the doubling of volumes compared to last year, my confidence is "high."




</details>

</details>


<details>
<summary><strong>2. [PF3363] DE_AUFSTR_041_T6 KORO TARTINADE BIO BETTERAVE 380G </strong> - LLM: 172u vs Médiane: 330u (Réel: 172u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 172u
- 📊 **Baseline calculée**: 172u
- 📊 **Médiane historique**: 330u
- ✅ **Réel commandé**: 172u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 158u (91.9%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 172u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Donnée isolée (une seule commande enregistrée)
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-08 (dans 26j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Dernière commande effectuée un jeudi. Avec un cycle par défaut de 30 jours, la prochaine commande tomberait un samedi.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit ne présente qu'un seul point de données (172u le 09/10). En appliquant un cycle de réapprovisionnement standard de 30 jours, la prochaine commande est estimée au 08/11/2025. Comme cette date est à moins de 40 jours (26 jours), le risque de rupture à horizon 30 jours est considéré comme présent selon les consignes. La quantité recommandée correspond à la seule observation disponible.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 606 tokens
- **Output**: 3,215 tokens
- **Total**: 3,821 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Refill Potential**

I'm currently focused on the product PF3363, specifically the DE_AUFSTR_ 041_T6 KORO TARTINADE BIO BETTERAVE 380G. My attention is on the need to determine whether a refill is required. Recent sales of 172 units on 2025-10-09 are the key point of reference, with no prior history to provide additional context. My plan is to continue investigating.


**Estimating Replenishment Cycle**

I'm now grappling with the absence of historical data for the PF3363 product. Since the only order was four days ago, a statistical cycle calculation is impossible. Given the "≤40 days → RISQUE OUI" rule, I'm attempting to estimate a cycle. I'm leaning toward a monthly cycle, suggesting a potential refill needed around November 8th. I'll need to confirm if that is the case.


**Interpreting the Risk Assessment**

My latest analysis centers on the "RISQUE OUI" determination. Given the single order and a potential cycle length of 30 days, the upcoming need falls within the 40-day window, triggering the risk alert. I'm now weighing the quantity of the last order against a potential early refill, though the data leans toward a moderate wait period.


**Revisiting Order Recommendations**

I'm now clarifying the implications of the "RISQUE OUI" alert. While the rule suggests a need, I'm reconsidering. Given the recent large order of 172 units, ordering again immediately seems premature. I'm focusing on the timing; it's only been four days since the last order. This prompts the question: Does "risk" necessitate immediate action, or does it trigger a future recommendation? I'm leaning towards the latter, due to the recent replenishment.


**Refining the Recommendation**

I'm now revisiting the "RISQUE OUI" determination, weighing the implications further. The single order 4 days ago complicates this, as immediate reordering seems unwarranted. My analysis continues: I must determine if the instruction, "Si ≤40 jours → RISQUE OUI," dictates *when* I should order. Given the recent order, I'm now leaning toward flagging the risk but cautiously recommending an order for the standard quantity.


**Confirming the Reorder**

I've re-examined the core question: does "RISQUE OUI" compel an *immediate* order? While the "≤40 days" rule triggers the alert, the recent large order makes me hesitate. Considering the standard monthly cycle and the instruction, I'll lean towards recommending 172 units. The confidence level is still low, given the single data point, but my analysis suggests a reorder.


**Determining Immediate Action**

The "RISQUE OUI" alert is confirmed due to the 40-day window. Considering the recent order of 172 units just four days ago, ordering the same amount now seems excessive. I'm now leaning toward recommending a quantity of zero, noting the low confidence given the limited data and recent replenishment. However, the rule requires a quantity prediction.


**Analyzing Final Recommendations**

The analysis is complete, with a final decision now being made. Despite the low confidence given only a single data point, I'm recommending a reorder of 172 units. While an immediate need seems unlikely given the recent replenishment, the "RISQUE OUI" alert and the 40-day window suggest an upcoming order. The reasoning centers around cycle assumptions and the timing of the previous order.


**Reflecting on the Final Decision**

I'm now concluding my analysis. Even though a reorder of 172 units feels premature, the 40-day risk trigger necessitates a quantity. The decision is now finalized to recommend the 172 units. The reasoning reflects my evaluation of the situation. I've considered all relevant points, especially the single historical data point.


**Synthesizing Replenishment Decisions**

I'm now fully focused on the final JSON output, considering the "RISQUE OUI" alert. While the initial impulse was to recommend zero, the 40-day rule and the context of only a single order suggest a need for a reorder. Therefore, despite low confidence, I will recommend the standard quantity of 172, while also emphasizing that the current stock levels are still likely high, reflecting my analysis.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:02:15: 1500u
- 2025-09-10 14:18:40: 1494u
- 2025-08-14 06:52:41: 1536u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:27:40: 758u
- 2024-07-22 13:15:52: 758u
- 2024-05-02 07:07:22: 594u
- 2024-04-17 08:00:24: 244u
- 2024-01-19 12:40:26: 484u
- 2024-01-02 14:39:56: 334u

**✅ Quantité LLM**: 1500u (confidence: high)
**📊 Quantité Réelle**: 1500u

</details>


<details>
<summary><strong>2. [PF3363] DE_AUFSTR_041_T6 KORO TARTINADE BIO BETTERAVE 380G </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:02:15: 172u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 172u (confidence: low)
**📊 Quantité Réelle**: 172u

</details>




---

## False Positives (4)

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
| [PF3362] DE_AUFSTR_037_T6 KORO TARTINADE BIO HOUMOUS 380g | 166 | Stock prédit: 153.9u (38j restants) → prédit 166u mais non commandé |
| [PF3312] DE_AUFSTR_036_T6 KORO TARTINADE BIO AUBERGINE 380G | 1826 | Stock prédit: 183.4u (2j restants) → prédit 1826u mais non commandé |
| [PF3314] DE_AUFSTR_038_T6 KORO TARTINADE BIO TOMATE 380G | 4224 | Stock prédit: 966.7u (6j restants) → prédit 4224u mais non commandé |
| [PF3253] DK_AUFSTR_039 KORO TARTINADE BIO TOMATE 180G | 166 | Stock prédit: -41.5u (-4j restants) → prédit 166u mais non commandé |


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
| [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G | 43 | En rupture (-3j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [PF3364] DE_OLIVE_013_T6 KORO TARTINADE BIO OLIVE 380G | 86 | Stock suffisant: 79.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-19T12:50:35.553Z*
