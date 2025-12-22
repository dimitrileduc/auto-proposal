# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S39663
- **Date commande** : 2025-10-13 08:25:46
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 19
- **Tokens**: 11,548 input + 40,315 output = 51,863 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.3% | 12 produits prédits, 7 corrects |
| **Rappel** | 77.8% | 9 produits réels, 7 détectés |
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
| **MAE** | 2.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 9.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 19.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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

## True Positives (7)

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
| [PF0096] FILOU MOUTARDE 3 KG | 3 | 10 | 7.0 | 70.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 44 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 75 | 65 | 10.0 | 15.4% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


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
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande unique détectée, estimation sur cycle mensuel par défaut
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne présente qu'une seule commande de 40 unités le 20 septembre. Avec 22 jours écoulés depuis cette commande, et suivant un cycle de réapprovisionnement B2B standard estimé à 30 jours, la prochaine commande est attendue sous peu (environ 8 jours). Selon la règle de gestion des risques (cycle < 40j), une commande de réapprovisionnement basée sur le volume précédent est préconisée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 596 tokens
- **Output**: 1,221 tokens
- **Total**: 1,817 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Reorder Needs**

I'm currently focused on the reorder requirements for PF1599, the Filou mayonnaise. Observing recent sales on 2025-09-20, along with the current date, 2025-10-12, suggests the reorder calculation is critical within the next month, even though no N-1 data is yet available. I'm running calculations to predict the next needed reorder.


**Calculating Predicted Reorder**

I'm now zeroing in on predicting the reorder quantity for PF1599. Given the single data point and the current replenishment cycle assumption, I'm leaning toward a reorder decision soon. The calculation is complex due to the absence of reliable historical data, but the "RISQUE O UI" metric now feels critical. I will need to factor the 40 unit sale and the 22 days passed since.


**Determining Next Steps**

Given my assessment, a reorder seems necessary within eight days. Considering the single data point, I've applied a default monthly cycle assumption. The predicted reorder date is around 2025-10-20. Due to a single data point, my confidence in this is low, but the quantity recommended is 40 units.


**Synthesizing Risk Assessment**

I've finalized my assessment, now focusing on the JSON output. Given the single data point, a 40-unit reorder, I'm predicting a reorder date around October 20th, with a low confidence score, but approaching the 40-day threshold. My generated JSON output will capture the risk and the estimated replenishment. My next step will be generating the JSON.




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
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle d'un mois et demi (46 jours)
- **Cycle médian (jours)**: 46
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle stable de 46 jours entre les commandes avec une quantité fixe de 40 unités. La prochaine commande est prévue pour le 05/11/2025, soit dans environ 24 jours. Ce délai étant inférieur à l'horizon de sécurité de 30 jours définit dans les règles (risque si ≤40j), une commande de 40 unités est recommandée pour anticiper le besoin.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 621 tokens
- **Output**: 1,438 tokens
- **Total**: 2,059 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Order Timeline**

I'm analyzing the order history for product [PF0502]. It looks like there was a single order interval from August 5th to September 20th, spanning 46 days. So far, there's no history for the year prior. Next, I'll identify the last order date.


**Evaluating the Risk Profile**

I've calculated the predicted next order date as November 5th, 2025, derived from the 46-day cycle. The product's last order was September 20th. Given a 30-day horizon, and the date falls within 24 days, there is a risk of stockout.


**Determining Replenishment Strategy**

I've determined a replenishment strategy. Given the stable 40-unit demand and 46-day cycle, I'm recommending a reorder of 40 units to cover the 30-day horizon, since the predicted order date is within 24 days. My confidence level is medium overall.


**Reassessing the Calendar**

\n\n

I've carefully re-examined the order timeline. My calculations confirm the 46-day cycle and the 24-day window to the next predicted order date. The stockout risk assessment is therefore accurate. The recommendation remains consistent at 40 units, with a medium confidence level. I'm now confident in the stability of the demand and the accuracy of the prediction.




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
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Historique insuffisant (une seule commande enregistrée)
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Une seule commande de 2 unités est enregistrée le 20 septembre. En l'absence de cycle établi, on applique une estimation par défaut de 30 jours pour le réapprovisionnement B2B. La date actuelle (12 octobre) se situe à 22 jours de la dernière commande, plaçant la prochaine commande théorique vers le 20 octobre (dans 8 jours). Le risque de rupture est considéré comme présent selon les critères (horizon < 40j).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 590 tokens
- **Output**: 1,165 tokens
- **Total**: 1,755 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Sales Patterns**

I'm currently focused on the sales data for product PF1539, particularly the FILOU BOULETTE CH ASSEUR 800G. The most recent data point I have indicates a sale of 2 units on September 2nd, 2025. There's no prior sales history to compare this to, which limits my ability to discern any trends.


**Calculating Risk Assessment**

I've considered the sparse sales data. With just one order for the FILOU BOULETTE, a cycle analysis is impossible. I'm using a 30-day default, placing the next potential order around October 20th. Given that, and today being October 12th, the risk assessment leans towards "YES/LOW," although the lack of data warrants careful consideration about any specific recommendations.


**Determining Next Order Prediction**

I've finalized my analysis, focusing on the single recorded order for FILOU BOULETTE. With only one data point, I estimated a 30-day cycle, which means another order should be due around October 20th. Given that the current date is October 12th, and the 40-day threshold for risk assessment, the risk is determined to be yes, and I am recommending another order for 2 units.


**Refining Recommendation Details**

I'm now solidifying my recommendation and evaluating its confidence level. The data sparsity, a single order, forces a reliance on default assumptions, such as a 30-day cycle. Thus, the recommendation of 2 units has a low confidence rating. I am double-checking that all the JSON elements are correct.




</details>

</details>


<details>
<summary><strong>4. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande irrégulière environ tous les 46 jours
- **Cycle médian (jours)**: 46
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle d'environ 46 jours entre les commandes. La prochaine commande est prévue dans environ 24 jours (le 05/11/2025), ce qui est inférieur au seuil de risque de 40 jours. La quantité recommandée de 2 unités est basée sur la médiane historique et la similitude avec la commande de l'année précédente à la même période (2024-09-30).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 632 tokens
- **Output**: 1,240 tokens
- **Total**: 1,872 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Sales Data**

I'm currently looking at the sales data for [PF0084] FILOU CARBONNADES 800 GR. It's interesting how the sales volume varied across the specified intervals. I've noted a couple of sales points from last year, and I'm calculating the differences to understand the fluctuations better. Specifically, the data from August 5th and September 20th are of interest.


**Calculating Upcoming Orders**

I've just crunched the numbers on [PF0084] FILOU CARBONNADES 800 GR. Based on past orders, the product has a cycle of roughly 46 days. My calculations put the next probable order around November 5th. Right now, we're 22 days out from the last order. This puts us at a "RISQUE OUI" state, so I'm flagging this product for potential reordering in the next few weeks. The quantity seems stable around 2u, with a possible recent uptick.


**Evaluating Risk Factors**

I've just finished the deep dive on [PF0084] FILOU CARBONNADES 800 GR. I've cross-referenced order frequency, seasonality, and quantity, and verified the "RISQUE OUI" state based on the calculated intervals. The next predicted order is approximately 24 days away. My recommendation is a baseline of 2 units, with a medium confidence level. The JSON format is good to go.




</details>

</details>


<details>
<summary><strong>5. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM: 3u vs Médiane: 4u (Réel: 10u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Données historiques limitées à une seule commande ; cycle estimé à 30 jours
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Une seule commande de 3 unités enregistrée le 20/09. Avec un intervalle estimé de 30 jours, la prochaine commande est prévue pour le 20/10, soit dans 8 jours. Ce délai étant inférieur à 40 jours, le risque de rupture est identifié. La quantité recommandée suit le volume de la commande précédente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 586 tokens
- **Output**: 1,730 tokens
- **Total**: 2,316 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product History**

I'm currently focused on the product [PF0096] FILOU MOUTARDE, specifically its order history. It looks like there's only one recorded order so far, a batch of 3 units placed on 2025-09-20, with a target date of 2025-10-12. Further analysis needed to understand demand.


**Evaluating Order Frequency**

I've determined there is a risk associated with the order date. Considering the product [PF0096], FILOU MOUTARDE, and the only order placed on 2025-09-20, I calculated the probable next order date based on a 30-day cycle. That places the date at 2025-10-20, which is just 8 days away from today, thus indicating risk.


**Refining Risk Assessment**

I'm now zeroing in on the risk evaluation for [PF0096]. Considering the 30-day cycle and upcoming target date of 2025-10-12, the calculated next order date of 2025-10-20 raises some questions. I'm taking the 22-day interval since the last order, and with the target only 8 days away, I'll need to recommend a reorder of 3 units based on the latest data.


**Concluding the Risk Evaluation**

I'm now satisfied with the risk evaluation for [PF0096]. Considering the available data, I've confirmed a high-risk scenario. The next order date, predicted for 2025-10-20, is just 8 days away, confirming the need for a reorder of 3 units. The reasoning is based on a standard monthly cycle for professional food service.


**Confirming the Reorder**

I've re-evaluated the order situation. Assuming a 30-day cycle, the next order date is just 8 days away. Therefore, a reorder of 3 units is recommended, as the data indicates a high probability of replenishment within the next month, even if confidence is low due to a single historical point.




</details>

</details>


<details>
<summary><strong>6. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 44u vs Médiane: 74u (Réel: 44u)</summary>

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
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande unique identifiée
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-20
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec une seule commande de 44 unités le 20 septembre. En appliquant un cycle standard de 30 jours pour ce type de produit B2B, la prochaine commande théorique est attendue vers le 20 octobre. Comme cette date se situe à seulement 8 jours d'aujourd'hui (soit dans l'horizon de risque de 30 jours), il est recommandé de déclencher une commande basée sur le dernier volume connu pour éviter toute rupture.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 593 tokens
- **Output**: 1,190 tokens
- **Total**: 1,783 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Stock Levels**

My focus is on PF0072, specifically the FILOU MAYONNAISE OEUFS SEAU 10L product. Considering the available data, I'm analyzing the 2025-09-02 sales figures, where we saw 44 units move. A critical part of my analysis involves assessing the risk of stock depletion, based on that recent sales trend.


**Refining Inventory Assessment**

My analysis now extends to the current date, October 12, 2025, considering the single historical data point from September 20, 2025. I'm focusing on the "cycle" definition for the mayonnaise, given the lack of data. I've calculated that it's 22 days since the last recorded order. I'm using the 30-day horizon, and I now need to determine if an order is needed and how much.


**Concluding a Refill Strategy**

I've finalized my recommendation. Due to the limited data, specifically just one order of 44 units on Sept 20, I'm suggesting a refill of 44 units. I'm operating under the assumption of a 30-day replenishment cycle. The confidence in this is low, given the absence of more data, but it seems prudent.


**Synthesizing Final Recommendations**

My analysis is complete, and the recommendation is generated. Despite the limitations of a single data point, I am proposing a refill of 44 units, given the 30-day replenishment cycle assumption and the nearing of the estimated reorder date. I've considered various factors, and the decision prioritizes precaution with low confidence.




</details>

</details>


<details>
<summary><strong>7. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 75u vs Médiane: 80u (Réel: 65u)</summary>

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
- **Pattern temporel**: Cycle d'environ 37 jours détecté entre les deux dernières commandes
- **Cycle médian (jours)**: 37
- **Dernière commande**: 2025-09-11
- **Prochaine prédite**: 2025-10-18 (dans 6j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: Commandes passées en milieu de semaine (mardi, jeudi)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé entre août et septembre est de 37 jours. La dernière commande datant du 11 septembre, la prochaine occurrence est prévue pour le 18 octobre. Étant donné que nous sommes le 12 octobre (J-6 avant l'échéance théorique), le risque de rupture sous 30 jours est certain. La quantité est calculée sur la moyenne des deux dernières commandes (70 et 80 unités).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 623 tokens
- **Output**: 1,387 tokens
- **Total**: 2,010 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Order Predictions**

I'm currently focused on predicting the need for a new order of FILOU MAYONNAISE within the next 30 days. The data shows a decrease in the order quantity from 80 units on August 5th to 70 units on September 11th. I need to determine the best method to predict future orders based on this data, and I'm exploring various time series forecasting techniques. The target date for the prediction is October 12, 2025.


**Refining Order Quantity Analysis**

I've determined a high risk of needing a new order within the next 30 days due to the 31-day window since the last order, slightly under the 37-day cycle. Quantities show a decreasing trend, with 80 and 70 units ordered, so I've calculated a moving average and median of 75 units. I now lean toward recommending 70 units due to the recent downward trend in orders, but 75 units feels balanced. I'm focusing on the best approach to reflect a practical order quantity.


**Finalizing Prediction Calculations**

I've finalized my analysis, including the risk assessment and quantity recommendations. The risk of needing a new order within 30 days is confirmed due to the 31-day window, significantly less than the 40-day threshold. The predicted order date is October 18, just six days away, therefore the risk is high. The recommended quantity remains at 75 units, aligning with the average of the previous two orders and the baseline. All values are formatted to ensure clarity.


**Synthesizing Order Predictions**

I've completed the order prediction. The risk of requiring a new order is confirmed, with the prediction date six days away. The analysis highlights a decreasing order trend, influencing the final recommendation. I've standardized the data format and ensured all numeric values are properly formatted. I recommend ordering 75 units, based on the calculations.




</details>

</details>




### 📊 Données d'Input LLM (7 produits)


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
<summary><strong>5. [PF0096] FILOU MOUTARDE 3 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-20 05:57:22: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>6. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-20 05:57:22: 44u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 44u (confidence: low)
**📊 Quantité Réelle**: 44u

</details>


<details>
<summary><strong>7. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 08:06:57: 70u
- 2025-08-05 09:12:07: 80u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 75u (confidence: medium)
**📊 Quantité Réelle**: 65u

</details>




---

## False Positives (5)

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
| [PF0078] FILOU CHASSEUR 5 L | 10 | Stock prédit: 1.4u (3j restants) → prédit 10u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 10 | Stock prédit: 3.3u (10j restants) → prédit 10u mais non commandé |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 40 | Stock prédit: 0.1u (0j restants) → prédit 40u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 30 | Stock prédit: -15.4u (-17j restants) → prédit 30u mais non commandé |


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
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 4 | Stock: 0.5u (6j restants) - filtré pour autre raison |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | Stock: 2.8u (3j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T12:51:49.439Z*
