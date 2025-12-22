# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S39663
- **Date commande** : 2025-10-13 08:25:46
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 19
- **Tokens**: 15,272 input + 27,127 output = 42,399 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.3% | 15 produits prédits, 8 corrects |
| **Rappel** | 88.9% | 9 produits réels, 8 détectés |
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
| **MAE** | 3.63 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 23.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 4.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (8)

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
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 30 | 20 | 10.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 3 | 10 | 7.0 | 70.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 44 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 75 | 65 | 10.0 | 15.4% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 40u
- 📊 **Baseline calculée**: 40u
- 📊 **Médiane historique**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 40u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Sporadique (une seule commande enregistrée)
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-10-20 (dans 8j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Dernière commande effectuée un samedi; pas assez de données pour confirmer un jour fixe.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Seule une commande de 40 unités est enregistrée le 20 septembre. Avec 22 jours écoulés, un réapprovisionnement est probable d'ici 8 jours si l'on suit un cycle mensuel standard (30j). En l'absence d'historique plus profond, la quantité de la dernière commande est retenue comme référence.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 792 tokens
- **Output**: 1,068 tokens
- **Total**: 1,860 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Recent Sales Trends**

I'm currently analyzing the sales data for PF1599, specifically focusing on the recent order from September 2025. It appears that there was only a single order within the last three months, which is a noteworthy point. I am now cross-referencing this information to identify any patterns or possible triggers for this order.


**Calculating Inventory Risk Assessment**

My analysis continues, focusing on risk assessment for PF1599. I've pinpointed a high-risk scenario due to the single order observed in the recent timeframe. Therefore, I will prioritize keeping a safety stock close to the baseline quantity of 40u. The next order is expected imminently, given the product's typical lifecycle.


**Forecasting Future Demand**

The assessment is now complete, and the model has outputted its recommendations. It predicts an upcoming order around October 20, just eight days from now, given the estimated 30-day cycle. The advised order quantity remains 40 units, due to the single data point, but my confidence in this prediction is low, as the model is still starved for data.




</details>

</details>


<details>
<summary><strong>2. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 40u
- 📊 **Baseline calculée**: 40u
- 📊 **Médiane historique**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 40u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 46 jours détecté
- **Cycle médian (jours)**: 46
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est stable (46 jours) sur les deux occurrences récentes avec un volume constant de 40 unités. La prochaine commande est estimée pour le 5 novembre 2025, soit dans 24 jours. Étant donné que cet intervalle est inférieur à 30 jours, un réapprovisionnement de 40 unités est recommandé pour couvrir le besoin imminent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 817 tokens
- **Output**: 1,099 tokens
- **Total**: 1,916 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Order Frequency**

I'm currently calculating the time between orders for product PF0502, a 300ml squeeze bottle of FILOU MOUTARDE. Based on the provided data, there's a 46-day gap between the August and September orders. The most recent order was on September 20th, 2025.


**Calculating Future Demand**

I've predicted the next order date for PF0502 as November 5th, 2025, considering the 46-day cycle. With the current date being October 12th, there are 24 days until the expected order. The consistent 40-unit order volume and the 30-day horizon lead me to recommend immediate replenishment.


**Verifying Decision Logic**

I'm double-checking the reasoning to ensure alignment with the established 30-day replenishment window. With the predicted order in 24 days, and a stable demand of 40 units, the calculations confirm the necessity for immediate replenishment, as the risk is confirmed within the decision window. I've re-validated the dates and baseline quantities.




</details>

</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - LLM: 2u vs Médiane: 4u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande unique isolée (cycle supposé mensuel)
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Seulement une commande enregistrée il y a 22 jours pour 2 unités. En l'absence de données historiques supplémentaires, on applique le principe de précaution pour un produit sporadique commandé dans les 90 derniers jours. L'échéance de 30 jours (cycle standard estimé) arrive à terme dans 8 jours, ce qui induit un risque de rupture imminent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 786 tokens
- **Output**: 1,118 tokens
- **Total**: 1,904 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing the Order Data**

\n\n

I'm focusing on the product's ordering history. So far, the only recorded order for FILOU BOULETTE CH ASSEUR 800G was on September 20th, 2025, with two units. There is no prior history to reference, limiting my ability to analyze trends or seasonality at this point.


**Predicting the Replenishment**

\n\n

My analysis indicates a single order for the FILOU BOULETTE product on September 20th. Given the 22 days elapsed since that order and considering a potential 30-day cycle, a reorder seems plausible, especially considering it's been categorized as a sporadic product. I'm leaning toward recommending a replenishment of the same quantity (2 units) as a safety measure. However, I have yet to incorporate the final logic check.


**Confirming the Reorder**

\n\n

My analysis has solidified my reorder recommendation. Considering the single historical order 22 days ago and the 8-day window until the estimated next order date, my risk assessment indicates a potential need. The "Safety B2B" approach, based on the frequency pattern and the 30-day cycle assumption, leads me to confirm the reorder of two units with low confidence.




</details>

</details>


<details>
<summary><strong>4. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.5u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande sporadique (cycle de 46 jours détecté)
- **Cycle médian (jours)**: 46
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La consommation actuelle montre un cycle d'environ 46 jours (août à septembre). Avec une dernière commande au 20 septembre, la prochaine est estimée autour du 5 novembre, soit d'ici 24 jours, ce qui entre dans la fenêtre de risque de 30 jours pour l'approvisionnement B2B. Les volumes sont très faibles et stables (2u en 2024, 3u puis 2u en 2025). On privilégie la médiane récente de 2 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 828 tokens
- **Output**: 1,258 tokens
- **Total**: 2,086 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Quantities**

I've been analyzing the production quantities for [PF0084] FILOU CARBONNADES. It looks like the product saw a two-unit production run on September 20th, 2025, a Saturday. Prior to that, a three-unit production run happened on August 5th, 2025, which fell on a Tuesday. The data is still fresh in my mind.


**Projecting Replenishment Needs**

I've determined a potential replenishment need for [PF0084] FILOU CARBONNADES.  Based on the production cycles, I'm predicting the next order around November 5th, which is within the 30-day window. Considering the small quantities in the historical data, I'm leaning toward a baseline of 2.5 units, potentially adjusting for B2B needs.


**Calculating Recommended Order**

I've just finalized the recommended order quantity for [PF0084] FILOU CARBONNADES. Despite the somewhat sporadic production schedule, I've landed on 2 units, considering the recent history of 2 and 3 unit orders and the historical value in the same period. The confidence level is medium-high, given the consistent low quantities. My analysis of the product's cycle and the proximity to the predicted order date helped solidify this number.




</details>

</details>


<details>
<summary><strong>5. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 30u vs Médiane: 30u (Réel: 20u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 30u
- 📊 **Baseline calculée**: 30u
- 📊 **Médiane historique**: 30u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 10u (50.0%)
- 📉 **Erreur Médiane**: 10u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 30u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de commande d'environ 46 jours détecté
- **Cycle médian (jours)**: 46
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La prochaine commande est estimée pour le 05/11/2025, soit dans 24 jours, ce qui entre dans l'horizon critique des 30 jours pour le B2B. L'historique ne contient que deux points : une baisse est visible (40u vers 20u), mais par prudence B2B, la médiane de 30u est préconisée pour la commande à venir. La confiance est faible en raison du manque de profondeur historique (seulement 2 commandes).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 813 tokens
- **Output**: 1,443 tokens
- **Total**: 2,256 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Orders**

I'm currently focused on the order history for product [PF0094]. My analysis now includes the order interval, which I've calculated to be roughly one and a half months between the last two orders. This information is key to understanding the product's demand cycle.


**Calculating Future Needs**

I've determined the projected next order date for product [PF0094] to be November 5th. Considering today's date, that's just 24 days away, which raises a flag. I'm also now factoring in the quantities, leaning towards 20 units based on the most recent order, while acknowledging the limitations of only having two data points.


**Evaluating Supply Projections**

I've now analyzed the complete dataset for product [PF0094]. My model recommends ordering 30 units, despite the decreasing trend in quantities, to ensure B2B needs are met. The confidence level is low, as the cycle is based on only one interval. The next order is predicted in 24 days.


**Confirming Final Projections**

I've re-examined the data and confirmed the cycle length of 46 days, leading to a predicted order date of November 5th. This is just 24 days away. Despite the decreasing quantity trend (40 to 20 units), I'm sticking with a recommended order of 30 units to meet B2B demands, with low confidence due to limited data.




</details>

</details>


<details>
<summary><strong>6. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM: 3u vs Médiane: 4u (Réel: 10u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 7u (70.0%)
- 📉 **Erreur Médiane**: 6u (60.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Unique commande récente, cycle présumé mensuel (30j)
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Une seule commande de 3 unités enregistrée le 20/09. À J+22, nous entrons dans la fenêtre de réapprovisionnement classique pour un cycle mensuel B2B. La recommandation se base sur l'unique volume connu.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 782 tokens
- **Output**: 1,015 tokens
- **Total**: 1,797 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Order Frequency**

I'm currently analyzing the order data for product [PF0096]. The initial scan reveals a single order on September 20, 2025, for three units, with a target date of October 12, 2025. This single data point makes it impossible to determine the order frequency. I'll need more data.


**Predicting Next Order**

I'm now assessing the implications of the single order. Given the product's nature, a monthly cycle seems plausible. This means the next order might be around October 20th, eight days from now. Considering the 22-day gap since the last order, there's a potential need for replenishment within the next month, so I am recommending maintaining the existing order quantity of 3 units.


**Synthesizing Order Dynamics**

Now, I've consolidated my analysis into a JSON-ready format, ensuring all values are double-quoted and fit valid enums. The lack of historical data necessitates relying on assumptions, but I've incorporated these within the framework. I'm confident that the single-point data will be accurately represented.




</details>

</details>


<details>
<summary><strong>7. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 44u vs Médiane: 74u (Réel: 44u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 44u
- 📊 **Baseline calculée**: 44u
- 📊 **Médiane historique**: 74u
- ✅ **Réel commandé**: 44u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 30u (68.2%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 44u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande unique détectée le 20/09, cycle mensuel estimé à 30 jours
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique contient une commande unique de 44 unités le 20 septembre. Avec 22 jours écoulés, on se trouve dans l'horizon critique (30 jours) pour un réapprovisionnement si l'on suppose un cycle mensuel standard B2B. Faute d'autres données, le volume se base exclusivement sur la dernière référence connue.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 789 tokens
- **Output**: 1,368 tokens
- **Total**: 2,157 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Sales**

The initial data point is sparse, with just one recent sale recorded on 2025-09-20 of 44 units for the mayonnaise product. The absence of historical data (N-1) makes it difficult to ascertain trends. Further insights are necessary to gauge sales performance.


**Estimating Order Volumes**

I've projected the next order based on the 30-day frequency, concluding it's likely within the next week. Given only one data point, I'm setting the replenishment quantity to 44 units, matching the previous order. The frequency pattern is logged as a "Unique order observed, monthly cycle estimated" to indicate the lack of a proper sales history.


**Forecasting Next Order Date**

Given the single data point, I've calculated the time elapsed since the last order at 22 days. Based on the 30-day assumption for B2B bulk items, I predict an order around October 20th. I've noted a low confidence level due to the lack of historical data, but medium confidence in the need for an order based on time proximity.


**Assessing Replenishment Needs**

I've examined the product's sales and determined the time since the last order is 22 days. Given the B2B context, with no historical data, I am estimating a monthly replenishment cycle. This leads to a likely next order date around October 20th, with a recommendation of 44 units.




</details>

</details>


<details>
<summary><strong>8. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 75u vs Médiane: 80u (Réel: 65u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 75u
- 📊 **Baseline calculée**: 75u
- 📊 **Médiane historique**: 80u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 10u (15.4%)
- 📉 **Erreur Médiane**: 15u (23.1%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 75u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 37 jours
- **Cycle médian (jours)**: 37
- **Dernière commande**: 2025-09-11
- **Prochaine prédite**: 2025-10-18 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande identifié entre les deux derniers relevés est de 37 jours. La prochaine commande est prévue autour du 18 octobre 2025, soit dans 6 jours par rapport à la date actuelle. Un risque de rupture est donc identifié pour l'horizon des 30 jours. La quantité recommandée (75u) correspond à la moyenne des deux dernières commandes (80u et 70u), le manque de données historiques ne permettant pas encore de confirmer une tendance baissière structurelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 819 tokens
- **Output**: 1,406 tokens
- **Total**: 2,225 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Performance**

I'm currently focused on the sales data for FILOU MAYONNAISE, specifically the 1000ml size. I noted a drop in units sold, 70 in September compared to 80 in August. It's time to dig deeper, looking for external market factors or internal changes that caused this decline.


**Projecting Future Orders**

I've calculated the predicted next order date for FILOU MAYONNAISE OEUFS SEAU 1000ML, considering the 37-day median cycle. Based on September 11th's order, the model suggests an order around October 18th. With today being October 12th, the forecast horizon is six days. Risk assessment: YES - an order is imminent. The baseline quantity is set to 75.


**Calculating Order Parameters**

I've examined the data for FILOU MAYONNAISE OEUFS SEAU 1000ML more closely. The predicted order date, based on the 37-day cycle, is October 18th. With a six-day horizon, the risk assessment remains YES. Based on a slight downward trend and a baseline of 75 units, I'll recommend 75 units for the upcoming order, with medium confidence.


**Confirming Final Recommendation**

I've finalized my analysis of FILOU MAYONNAISE OEUFS SEAU 1000ML. With a predicted order date of October 18th, and today being the 12th, the risk assessment remains positive. The recommended quantity is 75, based on a slight decreasing trend. Overall confidence is medium, primarily due to the limited historical data. The JSON is validated.




</details>

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-20 05:57:22: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: low)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>2. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-20 05:57:22: 40u
- 2025-08-05 09:12:07: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: medium)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [PF0084] FILOU CARBONNADES 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-20 05:57:22: 2u
- 2025-08-05 09:12:07: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:22:41: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [PF0094] FILOU MOUTARDE 700 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-20 05:57:22: 20u
- 2025-08-05 09:12:07: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 30u (confidence: low)
**📊 Quantité Réelle**: 20u

</details>


<details>
<summary><strong>6. [PF0096] FILOU MOUTARDE 3 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-20 05:57:22: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>7. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-20 05:57:22: 44u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 44u (confidence: low)
**📊 Quantité Réelle**: 44u

</details>


<details>
<summary><strong>8. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 08:06:57: 70u
- 2025-08-05 09:12:07: 80u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 75u (confidence: medium)
**📊 Quantité Réelle**: 65u

</details>




---

## False Positives (7)

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
| [PF0085] FILOU CURRY KETCHUP  10 KG | 5 | Stock prédit: 3.6u (21j restants) → prédit 5u mais non commandé |
| [PF0075] FILOU CHASSEUR  10 L | 10 | Stock prédit: 5.2u (23j restants) → prédit 10u mais non commandé |
| [PF0078] FILOU CHASSEUR 5 L | 10 | Stock prédit: 1.4u (3j restants) → prédit 10u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 10 | Stock prédit: 3.3u (10j restants) → prédit 10u mais non commandé |
| [PF1844] FILOU ANDALOUSE SQUEEZE 300ML | 40 | Stock prédit: -18.3u (-21j restants) → prédit 40u mais non commandé |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 40 | Stock prédit: 0.1u (0j restants) → prédit 40u mais non commandé |
| [PF1845] FILOU SAMOURAI SQUEEZE 300ML | 40 | Stock prédit: 26.6u (133j restants) → prédit 40u mais non commandé |


---

## False Negatives (1)

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
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 4 | Stock: 0.5u (6j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T14:47:48.655Z*
