# Rapport Backtest - Client ÖKORING HANDELS GMBH

## Contexte

- **Client** : ÖKORING HANDELS GMBH (ID: 3812)
- **Commande réelle** : S40248
- **Date commande** : 2025-11-12 07:35:42
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 19,698 input + 21,819 output = 41,517 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
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
| **MAE** | 2.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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

## True Positives (6)

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
| [MF0029] MF Tarti Datte chili 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 32 | 16 | 16.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0031] MF Tarti Olives verte 250g  | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 25.6u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier (environ 14 jours)
- **Cycle médian (jours)**: 13.5
- **Dernière commande**: 2025-11-04
- **Prochaine prédite**: 2025-11-18 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 14 jours détecté sur les dernières transactions (derniers intervalles: 14j, 13j). Les commandes tombent principalement le mardi. Les quantités [16, 32, 16, 48, 16] sont toutes des multiples de 16, ce qui indique un conditionnement par carton de 16 unités. Bien que la moyenne soit plus élevée à cause d'anciennes commandes plus fortes, la stabilité récente est de 16u par commande. Prochaine commande prévue dans 7 jours (2025-11-18).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,206 tokens
- **Output**: 1,497 tokens
- **Total**: 3,703 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Expected Demand**

I'm currently focused on projecting demand for MF0029, a B2B product, specifically MF T arti Datte chili 250g. I've noted past order quantities from 2025, but there's a lack of historical data. Phase 1 focuses on risk assessment, I'll need to extrapolate demand given limited inputs.


**Determining Risk Factors**

I've moved on to the risk assessment phase, confirming a high-risk profile, and predicting an order around November 18th. Quantity prediction is next, and I'm analyzing the order history. The most frequent quantity is 16 units, but the range is quite broad, so I need a more nuanced view for Phase 2.


**Predicting the Order Quantity**

Now focusing on the order quantity, I've analyzed the historical data. The consistent pattern of multiples of 16 suggests a packaging unit. Given the recent return to a bi-weekly cycle, and the median order quantity of 16, I'm predicting the next order will be for 16 units, with a high degree of confidence. The model reflects this, and I've also identified key pattern attributes.


**Concluding the Prediction**

I've finalized the analysis. Based on the bi-weekly cycle and the consistent use of multiples of 16, I'm highly confident in predicting the next order. It is expected around November 18th for 16 units, with a very high confidence level. The model is complete, and I'm ready to present the findings.




</details>

</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 32u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 24u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier bi-mensuel de ~14 jours avec alternance systématique de volume
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-04
- **Prochaine prédite**: 2025-11-18 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un comportement B2B très prévisible avec un cycle médian de 14 jours (les commandes tombent presque toujours un mardi). On observe un pattern d'alternance strict entre 16u et 32u (probablement lié à une gestion de stock 'un carton sur deux' ou un complément de rayon). La dernière commande du 2025-11-04 était de 16u, suivant la logique du pattern, la prochaine commande attendue pour le 18/11 doit être de 32u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,207 tokens
- **Output**: 2,062 tokens
- **Total**: 4,269 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the sales data for product MF0030, specifically the MF Tarti Mangue Curry. My focus is on the 30-day horizon, leading up to December 11th, 2025. I've noted the recent sales history and am using that to inform further analysis.


**Projecting Future Orders**

I've calculated the median cycle time for the product as 14 days, with some irregularities noted in the past. Based on the last order on 2025-11-04, I estimate the next order will be around 2025-11-18. Currently, it's 2025-11-11, so the prediction falls within my 30-day window, indicating potential risk.


**Calculating Replenishment Quantity**

After identifying an alternating pattern, the next order should be for 32 units, following the recent sequence. I am confident in this estimate, although the average quantity is 22.4, the alternating 16/32 pattern observed supersedes the mean. The upcoming order date of 2025-11-18 is within the target window.


**Synthesizing Findings and Actions**

The analysis confirms a stable, 14-day cycle with alternating quantities of 16 and 32 units. The model suggests the next order, due around November 18th, will be for 32 units. I've a high degree of confidence in this projection due to the consistent pattern observed.


**Refining Cycle Time Analysis**

I've re-examined the order intervals. While a 14-day cycle is evident, especially in recent orders, I noted an initial 34-day gap. However, I corrected this, and now I'm firmly settled on a 14-day cycle with alternating quantities.




</details>

</details>


<details>
<summary><strong>3. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle ponctuel de 70j observé, cycle de 30j appliqué par défaut pour sécurité
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-11-04
- **Prochaine prédite**: 2025-12-04 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité avec seulement deux commandes. L'intervalle réel calculé est de 70 jours, mais conformément aux règles de précaution B2B, un cycle de 30 jours est utilisé pour la détection du risque. La prochaine commande est donc estimée au 04/12/2025, soit dans l'horizon des 30 jours. La quantité est maintenue à 16 unités car le client a commandé exactement ce volume les deux fois précédentes (multiples de conditionnement probable).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,123 tokens
- **Output**: 1,311 tokens
- **Total**: 3,434 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product History**

I'm focused on MF0031. Right now, I'm noting the current date, November 11th, 2025. I've logged the recent history, specifically the units on hand from 2025-11-04 and 2025-08-26. I've observed that N-1 data is currently unavailable.


**Evaluating Stock Replenishment**

I've examined the product MF0031. My analysis indicates a clear pattern: the client consistently orders 16 units, suggesting a potential carton size or fixed quantity. Since there are only two historical data points, the median calculation isn't possible, so I'm defaulting to a 30-day cycle. Based on the 30-day cycle, I project a potential need for replenishment, with the next order expected around 2025-12-04. Consequently, I recommend ordering 16 units, with low confidence due to limited historical data.


**Confirming Order Prediction**

I've finalized my analysis of MF0031. Based on the 30-day cycle, I project the next order for 16 units around 2025-12-04. Despite the limited data, the fixed quantity pattern increases my confidence in this recommendation. I've noted a long cycle of 70 days between the orders, but the 30-day default cycle is more conservative for this B2B setting.


**Reviewing Order Strategy**

I'm now revisiting the order prediction for MF0031. Given the constraints, I'm analyzing the 70-day gap between the two orders, while the default cycle is 30 days.  The next order is anticipated for December 4th, 2025. I am sticking to the recommendation of 16 units, but maintaining low confidence due to data limitations.




</details>

</details>


<details>
<summary><strong>4. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière avec un cycle médian de 11 jours
- **Cycle médian (jours)**: 11
- **Dernière commande**: 2025-10-21
- **Prochaine prédite**: 2025-11-01Short-term overdue, 2025-11-11 current date context implies immediate need due to delay in cycle. Following logic, we predict the next immediate shipment date as current or very soon, i.e., 2025-11-12 after the late gap. Using 2025-11-01 as the theoretical theoretical date the order was expected actually makes it overdue as of 2025-11-11. We set predicted_next_date as 2025-11-01 to reflect the schedule logic even if relative to now it implies a backlog/delay risk.

Revised predicted_next_date for JSON schema compliance: 2025-11-01. Days_until_next: -10 (relative to 11/11). Logic: Overdue implies immediate order risk = YES.

Actually, following the prompt "Predicted next date (YYYY-MM-DD)", I will set it based on current date + 1 day for immediate replacement if overdue: 2025-11-12.

Wait, strictly calculating last_order + cycle: 2025-10-21 + 11 days = 2025-11-01. The JSON schema asks for this predicted target date to see if it falls in the horizon. Yes it does (it's actually passed). Days_until_next relative to 2025-11-11 would be -10.

Final decision for JSON values: 2025-11-01 and -10 days till next (overdue). Quantity remains 16. 

Correcting predicted_next_date string to valid format: "2025-11-01". Days_until_next is -10.

Wait, to be cleaner with B2B forecast, if overdue we predict NOW. So predicted_next_date: "2025-11-12".

I will use: Predicted_next_date: "2025-11-01" (scheduled) and days_until_next: -10 (status: overdue). This indicates RISQUE = OUI logic explicitly as per prompt. 

Actually, the JSON expects YYYY-MM-DD. 

Summary for JSON Logic:
- Cycle: 8, 9, 13, 41 (Intervals) -> Median 11.
- Last order: 2025-10-21.
- Target: 2025-11-01.
- Today: 2025-11-11.
- Status: Client in delay.
- Quantity: Always 16.

Final values:
predicted_next_date: "2025-11-01"
days_until_next: -10
recommended_quantity: 16
confidence: "high"

Let's provide the JSON now.

--- Corrected Predicted Date Reasoning for JSON ---
predicted_next_date: "2025-11-01"
days_until_next: -10
---

Let's finalize strings.

Analysis JSON:
frequency_pattern: "Commande régulière tous les 11 jours",
detected_outliers: [],
seasonality_impact: "none",
trend_direction: "stable",
cycle_days: 11,
last_order_date: "2025-10-21",
predicted_next_date: "2025-11-01",
days_until_next: -10
baseline_quantity: 16.0
recommended_quantity: 16
confidence: "high"
confidence_phase1: "high"
confidence_phase2: "high"
reasoning: "Le client présente un cycle d'approvisionnement médian de 11 jours avec une quantité extrêmement stable de 16 unités (probablement un conditionnement fixe). La dernière commande datant du 21 octobre, la commande attendue le 1er novembre est en retard par rapport à la date actuelle du 11 novembre. Un risque de rupture est identifié car le cycle est dépassé."

{
  "analysis": {
    "frequency_pattern": "Cycle régulier de 11 jours (médiane)",
    "detected_outliers": [],
    "seasonality_impact": "none",
    "trend_direction": "stable",
    "cycle_days": 11,
    "last_order_date": "2025-10-21",
    "predicted_next_date": "2025-11-01",
    "days_until_next": -10
  },
  "baseline_quantity": 16.0,
  "recommended_quantity": 16,
  "confidence": "high",
  "confidence_phase1": "high",
  "confidence_phase2": "high",
  "reasoning": "Le client commande systématiquement 16 unités avec un cycle médian de 11 jours. La dernière commande date du 21 octobre, la suivante était attendue vers le 1er novembre. Au 11 novembre, le client est en retard de 10 jours sur son rythme habituel, ce qui indique un besoin immédiat pour éviter une rupture."
}
 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande systématiquement 16 unités avec un cycle médian de 11 jours. La dernière commande date du 21 octobre, la suivante était attendue vers le 1er novembre. Au 11 novembre, le client est en retard de 10 jours sur son rythme habituel, ce qui indique un besoin immédiat pour maintenir la disponibilité stock.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,262 tokens
- **Output**: 2,571 tokens
- **Total**: 4,833 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product History Data**

I'm currently reviewing the sales history for the chickpea spread. Recent data points from November, October, and September are in focus, following the older data from August. My aim is to spot any trends or anomalies in the sales figures over time.


**Forecasting Order Timing**

I've calculated the median order interval for the chickpea spread, identifying roughly 11 days between orders. My prediction for the next order was November 1st, but today's date, November 11th, suggests a 10-day delay, indicating a potential supply risk. All recent orders have been for 16 units, forming the current baseline.


**Calculating Supply Needs Now**

I've just finalized the assessment. The client's pattern is remarkably consistent, ordering 16 units every 11 days, with no outliers. However, a 10-day delay warrants attention. Given the current date and the predictable ordering, I'm recommending an immediate order of 16 units to mitigate any potential stock issues, with high confidence in this recommendation.


**Confirming Immediate Supply Needs**

Having re-examined the data and the 10-day delay, I'm reinforcing my prior recommendation. The consistently ordered quantity is 16 units, with an 11-day interval between orders. Because the client is behind schedule, I am confirming my prior suggestion to order 16 units immediately.




</details>

</details>


<details>
<summary><strong>5. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle médian de 29 jours, client actuellement en retard de commande
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-11-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian calculé sur l'historique récent (intervalles de 15j et 43j) est de 29 jours. La date de commande théorique était le 2025-11-06. Au 11/11, le client est en retard de 5 jours sur son cycle habituel, ce qui déclenche une alerte de réapprovisionnement immédiate. Les quantités commandées sont extrêmement stables (16u systématiquement), indiquant un probable conditionnement par carton ou pack complet.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,202 tokens
- **Output**: 1,899 tokens
- **Total**: 4,101 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing the Timeline**

I'm currently reviewing the project timeline for MF0043, specifically the "Apfel Meerrettich" spread. My focus is on the 30-day horizon from November 11th, 2025. I see previous activity on October 8th. I will use this as a starting point.


**Forecasting Next Cycle**

I've calculated the median interval between orders, using the recent history. The average time is 29 days. Based on the last order on October 8th, I predicted a new order around November 6th. Since today is November 11th, and the date has passed, there's a delay. The risk is assessed as "Oui." I also observed a consistent quantity of 16 units per order, with an outlier of 32 in the previous year.


**Confirming Order Details**

I've solidified my conclusions. The client for MF0043 is overdue, with a predicted order date of November 6th that has passed. I'm recommending 16 units, given the consistent order history. The confidence in this prediction is high, supported by the data.


**Calculating Latency and Units**

I've determined a 29-day order cycle, which is now 34 days behind schedule. It seems that the customer is 5 days late. However, the consistent order history of 16 units has no reason to be adjusted, even though the order is overdue. Risk remains "Oui."


**Fine-tuning the Analysis**

I've refined the time delta analysis. The customer's order is 34 days past the last order, while the cycle is 29 days. This validates the "client is late" conclusion. My confidence remains high. There is a need to communicate that the client is 5 days late.




</details>

</details>


<details>
<summary><strong>6. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle observé de 49 jours entre les commandes
- **Cycle médian (jours)**: 49
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
On identifie un intervalle de 49 jours entre les deux commandes disponibles. La dernière commande ayant eu lieu le 2025-09-29, la prochaine commande est estimée pour le 2025-11-17, soit dans 6 jours, ce qui entre dans l'horizon de 30 jours. La quantité commandée est constante (16u), ce qui indique un pattern d'achat par carton ou lot fixe.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,118 tokens
- **Output**: 1,777 tokens
- **Total**: 3,895 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Order Frequency**

I've been analyzing the order frequency for MF0062 MF Tarti Betterave rouge. The current data reveals two orders, one on 2025-08-11 and another on 2025-09-29. This gives an interval of 49 days. My focus is now on understanding the trend to anticipate future demands.


**Calculating Ordering Risk**

I've assessed the ordering risk for MF0062 MF Tarti Betterave rouge, and the current analysis indicates a "YES" risk. Based on the 49-day cycle and the current date (2025-11-11), the predicted next order date is 2025-11-17, within the 30-day horizon. The elapsed time since the last order is 43 days, closely aligning with the predicted cycle.


**Finalizing Quantity & Confidence**

I've determined that the recommended quantity is 16 units, with a low overall confidence but medium confidence in the pattern recognition. The quantities have been consistently 16 units, and the next order is predicted for 2025-11-17. The analysis highlights a 49-day cycle and a stable trend.


**Revisiting Cycle Intervals**

I've been analyzing the 49-day cycle and the default 30-day interval rule, given the limited historical data. Since the 49-day cycle seemed more relevant, I'm sticking with it, but will include a note on the potential for a quicker cycle, given the data constraint.


**Summarizing Key Findings**

I'm now consolidating the data, with the JSON format finalized. My confidence is low overall, due to the limited historical data, but medium regarding the ordering date. The reasoning clarifies the 49-day cycle, the near-term need, and the consistent quantity, with a small mention of the 30-day default cycle.




</details>

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 10:16:05: 16u
- 2025-10-21 10:27:16: 32u
- 2025-10-08 06:30:49: 16u
- 2025-08-26 09:44:27: 48u
- 2025-08-19 07:45:38: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 10:16:05: 16u
- 2025-10-21 10:27:16: 32u
- 2025-10-08 06:30:49: 16u
- 2025-09-29 10:19:21: 32u
- 2025-08-26 09:44:27: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>3. [MF0031] MF Tarti Olives verte 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 10:16:05: 16u
- 2025-08-26 09:44:27: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: low)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>4. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 10:27:16: 16u
- 2025-10-08 06:30:49: 16u
- 2025-09-29 10:19:21: 16u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-28 08:31:22: 32u
- 2024-01-09 09:56:05: 48u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>5. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:30:49: 16u
- 2025-08-26 09:44:27: 16u
- 2025-08-11 11:36:10: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-28 08:31:22: 32u
- 2024-01-09 09:56:05: 16u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>6. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 10:19:21: 16u
- 2025-08-11 11:36:10: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: low)
**📊 Quantité Réelle**: 16u

</details>




---

## False Positives (3)

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
| [MF0027] MF Tarti Aubergine 250g  | 16 | Stock prédit: 12.0u (17j restants) → prédit 16u mais non commandé |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | Stock prédit: 7.9u (5j restants) → prédit 16u mais non commandé |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | Stock prédit: 12.8u (23j restants) → prédit 16u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:54:01.977Z*
