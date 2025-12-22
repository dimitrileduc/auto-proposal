# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 25
- **Tokens**: 28,110 input + 65,798 output = 93,908 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 52.6% | 19 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 69.0% | Score équilibré global |

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
| **MAE** | 80.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 45.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 45.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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

## True Positives (10)

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
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 100 | 50 | 50.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 155 | 62 | 93.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 124 | 62 | 62.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 186 | 124 | 62.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 868 | 434 | 434.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 80 | 40 | 40.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 155 | 93 | 62.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 100u vs Médiane: 25u (Réel: 50u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 100u
- 📊 **Baseline calculée**: 87.5u
- 📊 **Médiane historique**: 25u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 50u (100.0%)
- 📉 **Erreur Médiane**: 25u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 100u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bi-mensuelle régulière (cycle de 14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: Habituellement le jeudi (confirmé par N-1), la prochaine est due jeudi 16 oct.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de 14 jours est extrêmement stable et historiquement ancré (confirmé en 2024). La prochaine commande est prévue pour demain, le 16 octobre. Concernant la quantité, bien que 2025 affiche une baisse par rapport à 2024 (passant de 125u à ~80-100u), le dernier cycle cumulé (01/10 et 02/10) totalise 100u, ce qui correspond exactement au volume observé à la même période en N-1. On retient ce volume de 100u pour le prochain cycle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,231 tokens
- **Output**: 2,295 tokens
- **Total**: 3,526 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Volumes**

I'm focused on the production volumes for PF1692, specifically looking at the recent activity. I've noted a consistent output of around 50 units per day for the last couple of weeks. There appears to be a pattern. It looks like production jumped from a single run to two runs on 10/01.


**Projecting Future Orders**

I'm now forecasting the next order date. Based on the bi-weekly cycle, and the last order on 2025-10-02, I calculate the next order date as 2025-10-16, tomorrow. There's low risk involved, given the lead time.


**Evaluating Order Patterns**

Okay, I'm digging into the order volumes for PF1692. The recent data shows a clear bi-weekly ordering pattern, which I've calculated the median of. I'm noting the recent output of orders on 2025-10-01 and 2025-10-02, which both occurred in the same bi-weekly cycle, are close. Furthermore, I've noticed a declining trend in volumes compared to the previous year, 2024, despite the consistent cycle.


**Determining Recommended Quantity**

I'm now determining the recommended quantity. I've calculated a baseline of 87.5 units, based on the recent cycle volumes. However, considering the last cycle's 100u and the previous year's figures, I'm leaning toward 100 units to align with the bi-weekly cycle, and also with the prior year's output.


**Analyzing Recommended Quantity**

I've finalized the recommended quantity, landing on 100 units. This is based on the most recent cycle data and historical figures, considering the bi-weekly pattern. While there's a downward trend in volumes compared to the previous year, the last observed cycle and N-1 figures support this decision with high confidence. I've noted a stable 14-day cycle.


**Refining Quantity Recommendation**

I'm now further refining the quantity recommendation. Calculating a baseline of 87.5 units, I've noted the recent order patterns and also the N-1 data. I am favoring a recommendation of 100 units to match the last cycle's total. This is due to the confidence with this 14-day cycle, and because this aligns with last year's volumes.




</details>

</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 434u
- 📊 **Baseline calculée**: 434u
- 📊 **Médiane historique**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 434u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de 14 jours avec commandes groupées de 434u sur 1-2 jours consécutifs
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une régularité exceptionnelle avec des commandes systématiques de 434 unités. L'analyse des intervalles entre les vagues de commandes (04/09, 18/09, 01/10) montre un cycle précis de 13 à 14 jours. La date du jour (15/10) correspond exactement à l'échéance théorique du prochain cycle (01/10 + 14 jours).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,243 tokens
- **Output**: 2,745 tokens
- **Total**: 3,988 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Observing Production Trends**

I've been analyzing the production data for LD FR TARTINADE BIO TOMATE 200 (PF1695). I'm noticing a consistent production quantity of 434 units, particularly in September and October of 2025. The consecutive daily productions on both September 18th and 19th and again on October 1st and 2nd are particularly noteworthy, warranting further investigation into the underlying causes.


**Pinpointing Production Intervals**

I'm now calculating the intervals between the "order blocks," which typically consist of two consecutive days of 434-unit production runs. The cycle seems to be about 13-14 days. These periods are consistent, suggesting a predictable demand pattern, or at least a regular replenishment strategy. The last order date was October 2nd.


**Projecting Order Volume**

I'm focusing now on the anticipated order quantity. Given the consistent 434-unit lot size and the established 14-day cycle, I predict the upcoming order will also be for 434 units. The historical data, including the N-1 data, overwhelmingly supports this conclusion, reinforcing the absence of seasonality effects on the order quantity itself, which remains stable at 434 units, irrespective of the time of year.


**Calculating the Risk Factor**

I'm now focusing on calculating the risk of a stockout. My analysis, using all available data, confirms an order is due today, October 15th. Given the consistent 434-unit order size and the established 14-day cycle, I confidently recommend ordering 434 units, as the data provides a very high degree of confidence.


**Concluding Order Prediction**

I've finalized my analysis. Given today's date, and the consistent 14-day cycle, I recommend ordering 434 units, as the data strongly supports this. This confirms my earlier predictions, solidifying the need for an order today, with 100% confidence in the volume of 434 units.


**Reassessing the Calendar**

My calculations have been re-confirmed. The upcoming order is due today, October 15th, aligning perfectly with the established 14-day cycle. Therefore, I confidently stand by my recommendation of 434 units, maintaining a high degree of confidence in the volume prediction, and given the start of the block was on October 1st, 14 days later is indeed October 15th.


**Finalizing the Recommendation**

I'm now running the final check. Having re-evaluated the cycle, and the fact that orders are usually grouped over two days, and the predicted next block start date *is* today, October 15th, I'm recommending 434 units. The data consistently supports this. All other details adhere to the constraints.




</details>

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 155u vs Médiane: 31u (Réel: 62u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 155u
- 📊 **Baseline calculée**: 155u
- 📊 **Médiane historique**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 93u (150.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 155u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel strict (14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit suit un cycle de renouvellement très régulier de 14 jours, observé tant en 2025 qu'en 2024 (N-1). La dernière commande majeure a eu lieu le 01/10 et 02/10 pour un total cumulé de 155 unités (clusters de commandes simultanées). Avec une date de prédiction au 15/10, nous sommes à J-1 de l'échéance théorique (16/10), ce qui justifie une commande immédiate. La quantité recommandée de 155u correspond au volume du dernier cycle complet, aligné avec les volumes saisonniers identifiés en N-1 (155u-186u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,227 tokens
- **Output**: 2,519 tokens
- **Total**: 3,746 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Observing Cluster Dynamics**

I'm focused on the product LD FR TARTINADE BIO ANANAS 20 0 (PF2973). The date is 2025-10-15. Recent data shows a cluster's growth. Specifically, 93 units were present on 2025-10-02, built from 62 and 31 units. Before that, on 2025-10-01, the cluster was at 62 units.


**Predicting Imminent Demand**

I've refined the analysis. My focus is now on the high risk of a stockout. The 14-day cycle is evident, and today's analysis is close to the predicted date. The critical date for the next predicted cluster is 2025-10-16, just one day away. I've noted that demand has been increasing. Based on prior dates, I expect to see multiples of 31 units sold, and the immediate need is highly likely.


**Evaluating Historical Volumes**

I've dived deeper, examining the 2024 data to gauge demand seasonality. Comparing 2024 to 2025, volumes are consistent around the same time of year, with a strong pattern. I've calculated the median volumes and based on the recent cluster sizes and demand trends, I'm recommending a baseline of 155 units, with the next demand cluster predicted for tomorrow.


**Calculating Required Inventory**

I've finalized my analysis. I'm highly confident about the recommendation. Based on the 14-day cycle, the upcoming order date is tomorrow. Considering seasonality and recent volume, my baseline quantity is 155 units. I am very confident with my findings.


**Synthesizing Recommendations**

I'm solidifying my approach, confirming the 14-day cycle and the 155-unit baseline, and fine-tuning reasoning. I'm satisfied, given strong confidence, but still checking details like the two orders made on the same day on 2025-10-02, which represent a single order. I will recommend 155 units.


**Finalizing Quantity Predictions**

I'm now very certain about the 155-unit recommendation. After reviewing all data, the bi-weekly cycle and the recent cluster sizes are clear. I've re-examined the 2025-10-02 orders, confirming they are essentially a single order. The predicted need is tomorrow, making the timing perfect.




</details>

</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 124u vs Médiane: 62u (Réel: 62u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 124u
- 📊 **Baseline calculée**: 124u
- 📊 **Médiane historique**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 62u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 124u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel régulier identifié toutes les 2 semaines
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: Commandes groupées principalement le jeudi (en N-1 et 2025), la prochaine commande est prévue pour demain, jeudi 16 octobre
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement de 14 jours est extrêmement régulier tant en 2024 qu'en 2025. La dernière commande date du 02/10, plaçant la prochaine échéance au 16/10 (demain). Les volumes de septembre-octobre sont historiquement élevés (saisonnalité forte). Bien que le cumul des 1er et 2 octobre 2025 atteigne 217 unités, la quantité unitaire par commande de 124 unités (4 cartons de 31) est la médiane robuste observée à cette période en N-1 et sur la dernière commande la plus récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,226 tokens
- **Output**: 2,276 tokens
- **Total**: 3,502 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Data Points**

My focus has shifted to the PF2937 product, specifically the LD FR TARTINADE BIO PO IS 200 variant. Recent data from October 2025 shows a significant order on the 2nd. The order, totaling 124 units, warrants further scrutiny. I'm now cross-referencing this with the client's past purchase history.


**Projecting Future Demand**

I've calculated the median order cycle at 14 days, based on the previous year's data. Considering the last order on October 2nd, the next one should be expected on October 16th. Given today's date, October 15th, there's a high probability of an order tomorrow, which will impact the 30-day risk assessment.


**Assessing Order Grouping**

I'm now diving deeper into the order patterns, specifically focusing on the PF2937 variant. The orders on October 1st and 2nd, totaling 217 units, are particularly interesting. I'm grouping them as a single event. Examining the history of these "grouped" orders reveals a 14-day cycle. This supports my prediction of an order on or around October 16th, which necessitates a 30-day risk assessment.


**Synthesizing Order Patterns**

I've examined the recent ordering behavior for the PF2937 variant, including data from 2024 and 2025. Based on this, I anticipate a bi-monthly order cycle with a predicted order for around 124 units (4 x 31u) on October 16th. I'll recommend ordering this amount to prepare for the upcoming cycle. The data reflects similar order volumes from October 2024.


**Refining the Recommendation**

I've finalized my analysis of the PF2937 variant. I'm confident in the bi-monthly ordering pattern, with the next order predicted for tomorrow, the 16th. Based on recent and historical data, I recommend ordering 124 units (4 x 31u). This recommendation is based on the consistent ordering in October of 2024 and 2025.




</details>

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - LLM: 186u vs Médiane: 93u (Réel: 124u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 186u
- 📊 **Baseline calculée**: 186u
- 📊 **Médiane historique**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 62u (50.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 186u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel de 14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Phase 1 : Identification d'un cycle de commande régulier de 14 jours (intervalle entre le 18/09 et le 02/10). Avec une date actuelle au 15/10, la prochaine commande est prévue demain (16/10), ce qui confirme le risque de rupture imminent. Phase 2 : On observe un incrément constant de 31 unités. Les volumes par séquence de réapprovisionnement sont passés de 124u à 248u. En l'absence d'historique long, la moyenne de ces deux cycles (186u) est privilégiée pour stabiliser l'approvisionnement tout en respectant les multiples logistiques de 31.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 901 tokens
- **Output**: 2,722 tokens
- **Total**: 3,623 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Order Patterns**

I'm currently analyzing the order history for the avocado tartinade. I've noted a recent order with a split timestamp, which merits further investigation. It seems to be a single event with potentially two deliveries of the same product. This detail might offer clues about consumer behavior or inventory management at the point of sale.


**Projecting Future Demand**

The avocado tartinade demand seems to have doubled in the most recent cycle. I've predicted the next order date, which aligns with tomorrow. Given the volume jump in the last two replenishment cycles, I'm classifying this as a high-risk situation, necessitating prompt attention.


**Evaluating Order Volumes**

I've re-examined the order history, identifying a consistent 14-day cycle for the tartinade. Further, the most recent volume doubled to 248 units. I'm noting the presence of multiples of 31 units in individual orders, suggesting a possible packaging or palletization effect. The predicted next order is due tomorrow, which aligns with the trend.


**Calculating Optimal Replenishment**

I've been calculating the optimal replenishment volume, initially leaning towards the average of the last two cycles (186 units). I've noted that this product's demand might be increasing. Considering the 31-unit increments in the order quantities and the upward trend, I'm now inclined to suggest an order of around 204 units for tomorrow, which is closer to the previous high.


**Refining Replenishment Strategy**

I'm considering a replenishment order of 186 units, aligning with the average demand. Recognizing the potential for growing demand, I've decided to stick to the median value and stay on the conservative side. Given the 14-day cycle and the current date being just one day before the next order, I'm confident in this estimate, albeit with medium confidence due to the limited historical data.


**Determining Optimal Order Volume**

I've re-evaluated my approach, focusing on distinct order windows instead of individual timestamps. Considering the client's bi-monthly ordering pattern and recent doubling of volume, I've confirmed an upcoming order is necessary. The median of 186 units, aligning with the packing multiples, seems like the most prudent approach.


**Summarizing the Core Findings**

I've finally synthesized the key data points, confirming a bi-monthly order cycle with the next order due tomorrow. After analyzing the trend of increasing volumes, and taking the median of 186 units into account, I'm recommending this value. The confidence on this is medium, due to the limited historical data. The client is following B2B orders with the correct frequency.




</details>

</details>


<details>
<summary><strong>6. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 434u
- 📊 **Baseline calculée**: 434u
- 📊 **Médiane historique**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 434u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-hebdomadaire (14 jours) extrêmement régulier le jeudi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une régularité exceptionnelle avec un cycle de 14 jours observé tant en 2024 qu'en 2025. La date de la prochaine commande est prévue pour demain, le 16 octobre 2025. Bien que le client commande parfois plusieurs multiples de 434 sur une même journée, la dernière commande enregistrée le 02/10 ainsi que la commande équivalente de l'an dernier (03/10/2024) sont de 434 unités, ce qui constitue la base la plus fiable pour la prédiction.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,244 tokens
- **Output**: 2,448 tokens
- **Total**: 3,692 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently processing the recent sales data for the LD FR TARTINAD BIO POIVRON product. I've noted a couple of entries from September, specifically the 18th. It looks like there's a potential duplication; I need to verify whether the 868 units represent a combined total or are separate entries. I'll need to confirm the distinct sale times to clarify.


**Predicting Future Demand**

The pattern appears clear: orders of LD FR TARTINAD BIO POIVRON 20 0 (PF1694) arrive bi-weekly, specifically every 14 days. Based on the last order on October 2nd, the next order is highly likely tomorrow, the 16th. Therefore, there's a demonstrable risk of stockout within the next 30 days. I'll flag this.


**Examining Order Quantities**

I'm now diving deeper into the quantity patterns for LD FR TARTINAD BIO POIVRON 20 0 (PF1694). My focus is on determining the median volume per order. The recent data shows that the base order is 434 units, but there are multiple entries on certain days. Given the instruction to predict *one* order and to use a median resistant to outliers, I calculate a median of 434 units per transaction.


**Finalizing Quantity Recommendation**

I'm now consolidating the findings. The robust median order quantity is 434 units, informed by a strong bi-weekly cycle. The model predicts the next order tomorrow. The high confidence level reflects the very consistent pattern. I'll provide a recommendation of 434 units, ready to feed the system.


**Revisiting Volume Calculations**

I'm now back-calculating the volume, focusing on the individual order, not daily totals, and adhering to recent order data. The median order quantity remains 434, aligning with the "one order" instruction. This reinforces the prediction for tomorrow, while also considering N-1 data, which has a similar trend.


**Final Quantity Verification**

I've re-examined the daily totals, but the instructions emphasize predicting *one* order, not a cumulative daily total. Therefore, the consistent 434-unit order volume, aligned with the most recent order and N-1 data, is the correct recommendation. The 434 prediction for tomorrow remains.




</details>

</details>


<details>
<summary><strong>7. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 868u vs Médiane: 434u (Réel: 434u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 868u
- 📊 **Baseline calculée**: 868u
- 📊 **Médiane historique**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 434u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 868u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier de 14 jours par multiple de 434u
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle de 14 jours très précis observé en 2025 et confirmé par l'historique N-1. La dernière commande date d'il y a 13 jours, rendant une commande imminente pour demain (2025-10-16). La quantité est stable sur un volume de 868u (2 unités logistiques de 434u), correspondant à la médiane des cycles récents et à l'historique N-1 sur la même période.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,250 tokens
- **Output**: 1,685 tokens
- **Total**: 2,935 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Recent Sales Data**

I'm currently focused on the sales data for the mango tartinade, specifically the recent activity in October 2025. I noticed a potential anomaly with a possible sales doubling between October 1st and 2nd. I'll need to investigate that closely to understand the cause. Previous data from September seems stable.


**Projecting Future Inventory Needs**

Following the sales data analysis, I've calculated a likely order for the Mango Tartinade tomorrow, October 16th. Given the recent sales in multiples of 434 units, I'm predicting a potential stockout risk. I'll need to assess the current inventory levels against the likely demand to ensure sufficient supply.


**Determining Order Quantity**

I'm now calculating the order quantity for tomorrow. Based on the pattern of sales, and taking the median quantity per cycle, I've determined 868 units is a sensible baseline. Considering the recent sales on October 2nd, the next order is expected tomorrow, reinforcing the need for this order size.


**Determining the Order Recommendation**

I've reviewed the sales patterns and determined the optimal order quantity to mitigate risk. Considering the 14-day cycle and the most recent sales data, including the doublet on October 1st and 2nd, the projected replenishment order is 868 units. The timing aligns for tomorrow, reinforcing the 868 unit recommendation.




</details>

</details>


<details>
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 80u vs Médiane: 40u (Réel: 40u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 80u
- 📊 **Baseline calculée**: 66.67u
- 📊 **Médiane historique**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 40u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 80u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel régulier observé tous les 13-14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-01
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit suit un cycle de commande extrêmement régulier de 14 jours, avec une échéance prévue précisément le jour actuel (15/10). On observe un pattern récurrent de hausse de volume en milieu de mois (120u en sept 2025, 160u en sept 2024), ce qui invalide la qualification d'outlier pour les grosses commandes. La moyenne glissante de 66.7u et le conditionnement par 40u orientent vers une préconisation de 80u pour sécuriser le stock sur le prochain cycle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,232 tokens
- **Output**: 2,852 tokens
- **Total**: 4,084 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Volumes**

I'm currently reviewing the production volumes for the CB9006 LD FR VINAI CAESAR BIO PET 250ML product. The focus is on understanding the recent history of orders, particularly the split deliveries on September 18th. I'm trying to decipher if those were distinct orders or part of the same batch.


**Calculating Order Cadence**

\n\n

I've moved on to calculating the order cadence and predicting the next order date. Based on the 2025 data, there's an approximate 13-14 day cycle. With the last order on October 1st, a new order is highly overdue. Furthermore, I've noticed the client's orders consistently come in multiples of 40 units.


**Evaluating Potential Volumes**

\n\n

Now I'm diving deeper into volume analysis, specifically looking at the mid-month cadence. The recurring pattern suggests that a higher volume is plausible, maybe even mirroring September's 120-unit order. I'm taking a conservative approach and assessing how to proceed. A low amount is more likely, but a higher one is more beneficial.


**Anticipating Order Quantity**

\n\n

Today, October 15th, marks the predicted order date, and my focus is now shifting to determining the optimal order quantity. Considering the recent history, and a cycle of around 14 days, I've noted a fluctuating pattern of 40u and 120u orders. Given the mid-month context and past trends, I'm leaning toward recommending an 80u order.


**Refining Order Recommendations**

\n\n

Today, I've finalized the order quantity prediction. After meticulous analysis of recent history and cadence, with a cycle time of 14 days, my findings suggest an order is due today. Considering the fluctuating patterns and the fact that orders come in multiples of 40, I'm recommending an 80-unit order. I have high confidence in this prediction.


**Revising Quantity Recommendation**

\n\n

Today, I'm reevaluating the recommendation, given that the pattern fluctuates between 40 and 120 units, ordered in 40-unit increments. The recent 120-unit mid-month order, along with past mid-month data, indicates a seasonal tendency for higher volumes. Given this, and following the instructions, I've re-adjusted the projected order quantity to 80 units for the upcoming period.


**Refining Quantity Assessment**

\n\n

Today, I've concluded my analysis, and I'm confident in my recommendation. After assessing historical data and considering seasonal tendencies, the predictable bi-monthly cadence, with an average of 14 days, suggests an order is due today. Since orders come in 40-unit increments, and with mid-month peaks previously, I'll recommend 80 units.




</details>

</details>


<details>
<summary><strong>9. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 155u vs Médiane: 62u (Réel: 93u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 155u
- 📊 **Baseline calculée**: 155u
- 📊 **Médiane historique**: 62u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 62u (66.7%)
- 📉 **Erreur Médiane**: 31u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 155u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours le jeudi)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-18
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement régulier (14 jours, exclusivement le jeudi) constaté en 2024 et 2025. La dernière commande enregistrée date du 18 septembre. En suivant ce cycle, une commande aurait dû avoir lieu le 2 octobre et la prochaine est prévue pour demain, le 16 octobre. Le volume en 2025 est très stable (155 unités par commande). Bien que l'historique N-1 (octobre 2024) montre une augmentation de volume (279 unités), la stabilité sur l'année 2025 à 155 unités prévaut pour la prédiction de la commande immédiate.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,235 tokens
- **Output**: 2,297 tokens
- **Total**: 3,532 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently focused on the CB9028 pesto product, examining its sales figures. I've noted the total units sold on September 18th and 4th of 2025. It seems like the total units for those days were identical: 155 units. I'll need to analyze the data for the rest of September to discern any trends.


**Calculating Order Frequency**

I've just finished mapping out the bi-weekly order cycle for the CB9028 pesto product. It's a remarkably consistent 14-day pattern. With today being the 15th, I anticipate the next order to be tomorrow, the 16th. Given the historical data, there's a definite risk of stockout, which I must address promptly.


**Anticipating Volume & Quantity**

I'm deep in the analysis, comparing 2024 and 2025 data. Despite a stable 155u baseline in September 2025, I'm noting a substantial increase in volume towards October 2024. Therefore, I must account for that seasonality. The decision is to err on the side of caution.


**Predicting Order Quantity**

I'm now determining the order quantity for tomorrow's order. Considering the 14-day cycle and a flat 155u baseline in 2025, the 2024 data indicates a potential increase in volume towards October. Therefore, I'm carefully considering whether to order more than the recent baseline. After a careful assessment, I am opting to order 155 units.


**Calculating Stock Levels**

I've meticulously assessed the data. There's a rigid 14-day ordering cycle, with a predicted order for tomorrow, the 16th. Examining 2024's October data suggests potential demand increases. However, the current 2025 baseline is consistently at 155 units. Therefore, I've elected to maintain a 155-unit order.


**Refining Quantity & Cycle**

I've re-examined the 2024 and 2025 data, as well as the 14-day ordering cycle for the CB9028 pesto. I'm focusing on tomorrow's order, the 16th. Although 2024 saw a rise in volume, the 2025 data points consistently at 155u. Thus, I stand by my initial estimate of ordering 155 units.




</details>

</details>


<details>
<summary><strong>10. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 25u
- 📊 **Baseline calculée**: 25u
- 📊 **Médiane historique**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 25u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel à mensuel (14-28 jours), majoritairement le jeudi
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-18
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une grande régularité avec des commandes quasi systématiques de 25 unités le jeudi. L'intervalle médian entre les commandes est d'environ 21 jours. La dernière commande datant du 18 septembre 2025 (il y a 27 jours), la prochaine commande est imminente (généralement entre J+14 et J+28). Le volume de 25 unités est la base standard historique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,221 tokens
- **Output**: 1,718 tokens
- **Total**: 2,939 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking the LD BBQ BIO**

I'm focused on the LD BBQ BIO 300G. Specifically, I've noted recent production runs. On September 18th, there were 25 units. Before that, September 4th saw 50 units. Prior to that, I see a few other 25 unit runs. I'll need to analyze trends.


**Forecasting the Production Run**

Now, I'm examining the production cycle for the LD BBQ BIO 300G to predict future runs. Based on the 2024 data, production occurred on Thursdays, bi-weekly. Given today's date of October 15th, and the last run on September 18th, I'm predicting the next run for October 16th.


**Assessing the Cycle and Quantity**

I'm now refining the production run predictions for the LD BBQ BIO 300G. Analyzing the history, I've confirmed a bi-weekly to monthly cycle, often on Thursdays. The median lot size seems to be 25 units, although I also observed a Sept bump to 50u. Considering the 27 days since the last order, I'm leaning toward a predicted run of 25 units, possibly on October 16th.


**Calculating the Order Prediction**

I'm now fully immersed in the predictive model for the LD BBQ BIO 300G, leveraging the data. It appears the production cycle oscillates between two and four weeks, centered around Thursdays. The most recent data, along with historical records, leans me toward a prediction of 25 units, with high confidence, with the order due very soon, possibly today, October 16th.




</details>

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 50u
- 2025-10-01 14:24:40: 25u
- 2025-10-01 14:23:59: 25u
- 2025-09-18 11:03:27: 25u
- 2025-09-18 11:02:40: 50u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 25u
- 2024-10-03 06:12:09: 25u
- 2024-10-03 06:11:51: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:12:09: 25u
- 2024-09-19 21:11:27: 50u
- 2024-09-05 07:12:20: 25u
- 2024-09-05 07:12:01: 50u
- 2024-09-05 07:11:43: 25u
- 2024-09-05 07:10:56: 25u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 434u
- 2025-10-01 14:23:59: 434u
- 2025-09-19 08:03:40: 434u
- 2025-09-18 11:02:40: 434u
- 2025-09-04 08:22:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:38: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:33: 434u
- 2024-08-07 13:00:03: 434u
- 2024-07-25 07:58:01: 434u
- 2024-07-25 07:55:13: 434u
- 2024-07-01 05:44:03: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 62u
- 2025-10-02 06:43:53: 31u
- 2025-10-01 14:24:40: 31u
- 2025-10-01 14:23:59: 31u
- 2025-09-18 11:03:27: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 62u
- 2024-10-03 06:11:28: 31u
- 2024-09-19 21:12:31: 31u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 62u
- 2024-09-05 07:12:20: 93u
- 2024-09-05 07:12:01: 93u
- 2024-09-05 07:11:43: 62u
- 2024-09-05 07:10:56: 31u
- 2024-08-09 05:43:38: 62u

**✅ Quantité LLM**: 155u (confidence: high)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 62u
- 2025-10-02 06:43:53: 62u
- 2025-10-01 14:24:40: 62u
- 2025-10-01 14:23:59: 31u
- 2025-09-18 11:03:27: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 31u
- 2024-10-03 06:11:51: 31u
- 2024-10-03 06:11:28: 31u
- 2024-09-19 21:13:09: 31u
- 2024-09-19 21:12:31: 31u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 62u
- 2024-09-05 07:12:20: 93u
- 2024-09-05 07:12:01: 93u
- 2024-09-05 07:11:43: 31u
- 2024-09-05 07:10:56: 31u

**✅ Quantité LLM**: 124u (confidence: high)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 62u
- 2025-10-02 06:43:53: 93u
- 2025-10-01 14:24:40: 93u
- 2025-09-18 11:03:27: 31u
- 2025-09-18 11:02:40: 93u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 186u (confidence: medium)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>6. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:43:53: 434u
- 2025-09-18 11:03:27: 434u
- 2025-09-18 11:01:30: 434u
- 2025-09-04 08:22:56: 434u
- 2025-09-04 08:22:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-08-09 05:42:53: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:49: 434u
- 2024-08-07 13:00:33: 434u
- 2024-07-25 07:55:56: 434u
- 2024-07-25 07:55:32: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>7. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:43:53: 434u
- 2025-10-01 14:23:59: 434u
- 2025-09-18 11:03:27: 434u
- 2025-09-04 08:22:56: 434u
- 2025-09-04 08:22:01: 868u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:11:51: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:13: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 868u
- 2024-08-07 13:00:33: 868u
- 2024-08-07 13:00:03: 434u

**✅ Quantité LLM**: 868u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:23:59: 40u
- 2025-09-18 11:03:27: 40u
- 2025-09-18 11:02:40: 40u
- 2025-09-18 11:02:12: 40u
- 2025-09-04 08:22:56: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 21:13:09: 40u
- 2024-09-19 21:12:09: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-09-05 07:11:43: 40u
- 2024-09-05 07:10:56: 40u
- 2024-08-09 05:43:38: 40u
- 2024-08-09 05:43:13: 40u
- 2024-08-08 06:02:21: 40u
- 2024-08-07 13:00:49: 40u
- 2024-08-07 13:00:33: 40u
- 2024-07-25 07:58:01: 40u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>9. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-18 11:03:27: 93u
- 2025-09-18 11:02:40: 31u
- 2025-09-18 11:01:30: 31u
- 2025-09-04 08:22:56: 93u
- 2025-09-04 08:22:01: 62u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 62u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 93u
- 2024-10-03 06:11:28: 62u
- 2024-09-19 21:13:09: 62u
- 2024-09-19 21:12:31: 62u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 31u
- 2024-09-05 07:12:20: 31u
- 2024-09-05 07:11:43: 31u
- 2024-09-05 07:10:56: 31u
- 2024-08-09 05:43:38: 31u

**✅ Quantité LLM**: 155u (confidence: high)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>10. [PF1690] LD BBQ BIO 300G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-18 11:02:12: 25u
- 2025-09-04 08:22:01: 25u
- 2025-09-04 08:20:24: 25u
- 2025-08-07 14:18:24: 25u
- 2025-07-18 10:37:55: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:11:27: 25u
- 2024-09-05 07:12:20: 25u
- 2024-08-09 05:42:26: 25u
- 2024-08-08 06:02:21: 25u
- 2024-08-07 13:00:33: 25u
- 2024-07-01 05:44:03: 25u
- 2024-07-01 05:43:42: 25u
- 2024-07-01 05:43:20: 25u
- 2024-06-28 11:30:23: 25u

**✅ Quantité LLM**: 25u (confidence: high)
**📊 Quantité Réelle**: 25u

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
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 62 | Stock prédit: -8.7u (-2j restants) → prédit 62u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | Stock prédit: 29.5u (0j restants) → prédit 434u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | Stock prédit: 29.5u (0j restants) → prédit 434u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 62 | Stock prédit: 7.3u (3j restants) → prédit 62u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -15.5u (-3j restants) → prédit 40u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 800 | Stock prédit: -5125.0u (-17j restants) → prédit 800u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: -4.2u (0j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 496 | Stock prédit: -233.6u (-19j restants) → prédit 496u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 200 | Stock prédit: -650.0u (-37j restants) → prédit 200u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:52:06.517Z*
