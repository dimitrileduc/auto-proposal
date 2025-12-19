# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 25
- **Tokens**: 22,948 input + 90,354 output = 113,302 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 41.7% | 24 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 58.8% | Score équilibré global |

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
| **MAE** | 82.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 46.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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
| [PF2937] LD FR TARTINADE BIO POIS 200 | 186 | 62 | 124.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 186 | 124 | 62.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 868 | 434 | 434.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 155 | 93 | 62.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 100u vs Médiane: 25u (Réel: 50u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 100u
- 📊 **Baseline calculée**: 100u
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
- **Pattern temporel**: Cycle bi-mensuel régulier tous les 14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit suit un cycle de réapprovisionnement extrêmement précis de 14 jours, identifié à la fois en 2024 et 2025. La dernière commande groupée (100 unités le 01/10-02/10) suggère que la prochaine occurrence doit avoir lieu autour du 16/10/2025. Le volume de fond par cycle est de 100 unités, stable par rapport à fin 2024 (où il oscillait entre 100 et 125 unités).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,035 tokens
- **Output**: 1,686 tokens
- **Total**: 2,721 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Data**

I'm currently reviewing the production data for the PF1692 CB9005 LD FR AIOLI PESTO BIO 200ML. Examining the recent history, I see a steady production pattern. Specifically, on October 1st, I noted 50 units produced, and on October 2nd, the output was 50 units. Prior to that, September 18th showed an output of 75 units. This is helping me form conclusions.


**Forecasting Demand Patterns**

\n\n

I've just finalized the demand forecast for the PF1692 product. Analyzing the 2024 and 2025 production runs, a clear bi-weekly cycle has emerged, indicating a strong correlation between production and demand. The last order was on October 2nd, and the next order is predicted for October 16th. Given today's date, there's only a one-day gap, which indicates a high risk of stockout within the next 30 days, especially considering the cycle length.


**Evaluating Inventory Needs**

\n\n

I've just assessed the likely order quantity. Analyzing the recent bi-weekly cycle, and considering the volume differences between this year and the previous, 100 units appears to be the most realistic current baseline. However, the smaller volume trend in 2025 warrants close monitoring. Given the predicted order tomorrow, I am now focused on fine-tuning.


**Finalizing Recommendations**

\n\n

My analysis has solidified my recommendations. I'm focusing on the product's very consistent bi-weekly order cycle, confirming a high confidence level. Based on the 2025 and 2024 data, a baseline quantity of 100 units should be prepared for tomorrow's predicted order. The slightly decreasing trend is accounted for, ensuring my reasoning is sound.




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
- **Pattern temporel**: Cycle bi-mensuel régulier, souvent commandé par paires (2x434u) sur deux jours consécutifs.
- **Cycle médian (jours)**: 13
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-15-16-11-2025-10-16-11-2025-10-15-16-11-2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La demande est extrêmement stable (434u par unité de commande). Le cycle médian entre les sessions de commande est de 13-14 jours. La dernière commande ayant eu lieu le 2 octobre, la prochaine est prévue aux alentours du 15-16 octobre, soit immédiatement. Il y a donc un risque imminent de rupture si on ne réapprovisionne pas.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,047 tokens
- **Output**: 2,465 tokens
- **Total**: 3,512 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Order Quantities**

I'm currently focused on the LD FR TARTINADE BIO TOMATE 200 product. Assessing the data, I see the current date is October 15, 2025. I need to figure out if we need to reorder, and how much, looking ahead 30 days. I have some sales data from October 1st and 2nd. Next, I'll analyze the trends.


**Predicting Reorder Timing**

I've been analyzing the reorder intervals. It seems there's a pattern of ordering roughly every 13-14 days. This implies a need to forecast the next order date. I'm taking into account the cluster orders (868 units) as part of my calculations, and I see a consistent volume per order.


**Determining Order Quantity**

I'm now zeroing in on the quantity. Given the consistent orders of 434 units, I'm leaning toward that as the base. However, the frequent double orders complicate things. The prompt specified predicting "one order", implying 434 as the base, and not the pair of orders.


**Recommending the Order**

Given the consistent 434-unit orders and the predicted need for a new order tomorrow, my recommendation is clear. The data supports a high confidence level in this prediction. The clusters are still present, but the unit size is the correct factor. The JSON output will be straightforward.


**Validating the Prediction**

I'm now revisiting the order history for the LD FR TARTINADE BIO TOMATE 200 product. Considering the consistent 434-unit orders and the 13-14 day cycle, my prediction for an order is solid. I've confirmed that today is the 15th, and the last order was on the 2nd. The logic is now firm.




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
- **Pattern temporel**: Cycle bi-mensuel régulier identifié (14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très précis de 14 jours (confirmé en 2024 et 2025). La dernière session de commande a eu lieu entre le 1er et le 2 octobre pour un total de 155 unités. Étant donné que nous sommes le 15 octobre, la prochaine commande est prévue demain (16 octobre). Le volume de 155 unités correspond au volume de la session identique en N-1 (septembre 2024) et à la dernière session de 2025. Les commandes se font systématiquement par multiples de 31.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,031 tokens
- **Output**: 1,663 tokens
- **Total**: 2,694 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering the Orders' Volumes**

I've been analyzing the purchase history of PF 2973 (LD FR TARTINADE BIO ANANAS 2 00). It seems there's a clustering pattern in orders, specifically around the beginning of October 2025. The total units ordered on October 2nd and October 1st are significant, which is worth investigating further.


**Examining Temporal Order Cycles**

I've just finished analyzing the order intervals, and a clear 14-day cycle has emerged, particularly in 2024. This pattern strongly suggests a bi-monthly ordering behavior. Based on this, and the last order date of Oct 2nd, I predict another order either today, October 15th, or tomorrow, October 16th. There is a high risk of stock rupture.


**Evaluating Volume Predictions**

I've just finished the calculations. The bi-monthly cycle continues to hold true. Given this, and the history, I estimate the next order to be around 155 units, give or take, with the bulk of orders being multiples of 31 units. The next order date remains either today, the 15th, or tomorrow, the 16th, with a high chance of a stock rupture if an order arrives.


**Synthesizing Findings and Recommendations**

I've finalized the analysis. Based on the consistent 14-day ordering cycle, the predicted order date remains October 16th. Considering the previous volume of 155 units and the tendency for orders to be multiples of 31, I am recommending an order of 155 units to mitigate the risk of stock rupture.




</details>

</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 186u vs Médiane: 62u (Réel: 62u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 186u
- 📊 **Baseline calculée**: 161.2u
- 📊 **Médiane historique**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 124u (200.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 186u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours) très régulier identifié en N et N-1
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une périodicité très stable de 14 jours (confirmée par les cycles de sept/oct 2024 et 2025). La dernière commande cumulée du 02/10 (217u) couplée à la date cible du 15/10 indique une commande imminente (prévue le 16/10). La quantité recommandée est basée sur la médiane des commandes groupées historiques (multiples de 31), soit 186 unités (6 cartons).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,030 tokens
- **Output**: 2,290 tokens
- **Total**: 3,320 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Projected Volumes**

I'm currently focused on the projected volumes for the LD FR TARTINADE BIO POIS 200 product. Recent data shows significant activity in October 2025, specifically on the 1st and 2nd. I'm noting the unit additions and considering how these orders and any subsequent corrections or reorders will impact the overall total. The close proximity of these events suggests a need for deeper investigation.


**Predicting Order Imminence**

I've determined a potential order date of October 16th, based on a 14-day cycle analysis. Considering today is October 15th, there's a risk of a stock rupture. The close proximity of the October 2025 order dates is notable, as is the pattern of clustered orders. I am now evaluating the quantity analysis, looking for trends in the order sizes.


**Evaluating Quantity Estimates**

I'm now focusing on a more nuanced approach to quantity prediction for the LD FR TARTINADE BIO POIS 200 product. I am particularly concerned with the 2025 activity. I'm taking the median cluster, 186, as a baseline, and considering the observed upward trend from the September to October orders, to estimate next order volume. I am examining whether the 2025-10-02 order was a refill or adjustment.


**Estimating Next Order Volume**

I'm now zeroing in on the quantity forecast. Analyzing the recent 2025 data, the 217-unit order is central. Although a high volume compared to 2024, I'm interpreting it as an upward trajectory for this year. Considering the stable 14-day cycle, I predict the next order will be around the October 16th date, using the 217-unit order as a key component in the quantity calculation.


**Determining Order Quantity**

I'm now calculating the recommended quantity for the upcoming order, using the median of significant recent clusters as my guide. While the recent 217-unit order is notable, I am considering 186 units (6 packs of 31) as the baseline, as it is the median of high-volume clusters. I am also evaluating the impact of the 2025-10-02 order. Risk is high.




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
- **Pattern temporel**: Cycle bimensuel identifié (tous les 13-14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier (environ 14 jours). Les quantités sont des multiples de 31 unités. On observe deux événements de commande : le 18 septembre (124u) et les 1er/2 octobre (cumul de 248u). La prochaine commande est prévue autour du 16 octobre, soit demain par rapport à la date de calcul. Vu la tendance à la hausse, on préconise une moyenne pondérée des deux derniers cycles (186u, soit 6 lots de 31).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 705 tokens
- **Output**: 1,949 tokens
- **Total**: 2,654 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Orders**

I'm currently focused on the recent order history for "LD FR TARTINADE BIO AVOCAT 180G." It seems there was a significant order on October 2nd, with two separate entries totaling 155 units. Before that, there was a 93-unit order on October 1st. I'm noting this before analyzing the context in which they are placed.


**Calculating Event Intervals**

I've determined two key events: September 18th with 124 units, and October 1st/2nd with a total of 248 units. The interval between these events is approximately 13-14 days. This suggests a bi-weekly pattern. Considering today is the 15th, and the projected next order date is the 16th, there's a confirmed risk, and I need to re-examine the individual order details.


**Forecasting Order Numbers**

I'm now focusing on calculating the potential order quantity. There's a clear bi-weekly trend and an increasing volume. I see a shift in the individual order lines and a possible scale-up by the client. However, since the prompt specifies one order rather than a sum, the last cluster is what I will work with. I'm looking at the median, 93, versus the total cluster of 248. The risk level is high.


**Evaluating Recommended Quantities**

I'm now determining the most appropriate order quantity. Considering a bi-weekly cycle and an upward trend, the recommendation is 186 units. This is the average between the two most recent "replenishment cycles." I'm also mindful of the frequency of individual order lines and multiples of the baseline unit of 31.


**Calculating the Recommendation**

I'm now consolidating the data, and using the bi-weekly cycle and a doubling volume trend, I'm comfortable recommending 186 units. This number also aligns well with the average of the two most recent replenishment cycles and is a multiple of 31. The confidence level is medium, given the limited history.




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
- **Pattern temporel**: Cycle bi-hebdomadaire très régulier (14 jours) observé le jeudi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande systématiquement le jeudi tous les 14 jours depuis plusieurs mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement de 14 jours est extrêmement stable sur 2024 et 2025. La prochaine commande est prévue pour le 16/10/2025 (demain). Concernant la quantité, bien que des volumes de 868u (2x434) aient été observés en septembre, le passage à 434u le 02/10/2025 concorde avec l'historique N-1 (434u le 03/10/2024), suggérant une réduction saisonnière du volume de commande en octobre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,048 tokens
- **Output**: 3,291 tokens
- **Total**: 4,339 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Investigating Product History**

I'm currently focused on the product LD FR TARTINAD BIO POIVRON 20 0 (PF1694). I've been digging into its recent transaction history, specifically from 2025. I noted a potential issue with duplicated entries on 2025-09-18 and 2025-09-04, each seemingly doubled. These close-in-time entries have triggered some alerts and deserve a deeper dive.


**Examining the Recurring Pattern**

I've been analyzing the frequency of these transactions. The 434u "events" appear to repeat consistently, almost like clockwork. Specifically, it looks like a 14-day cycle, often occurring on Thursdays. This periodicity, evident in both 2024 and 2025, is quite intriguing. My next step is to use this pattern to forecast future activity.


**Refining Order Quantity Analysis**

I'm now focusing on the consistent order quantity of 434 units. While there are sometimes multiple logs on a single day, the volume is *always* 434. It appears the system may occasionally generate duplicate entries, but the actual order size remains constant. This consistency allows for reliable forecasting of demand, and there is a high stockout risk tomorrow.


**Projecting Future Volumes**

I'm now forecasting the quantity for tomorrow's expected order, given that the last one was on October 2nd. Based on prior data, the median quantity appears to be 868, though the most recent order was 434. I'm taking the log duplication into account, and considering a potential shift in purchasing behavior.


**Determining Order Quantity**

I'm now zeroing in on predicting the volume for tomorrow's predicted order. Considering the recent trend of single 434-unit orders in October, versus September's higher volumes, and the consistent 14-day cycle, I'm leaning toward forecasting a single unit of 434. The data suggests a potential seasonal shift.


**Calculating the Baseline Order**

I'm now determining the order quantity for the upcoming order, scheduled for tomorrow. Considering the most recent single order of 434 and the pattern of 14-day cycles, I'm leaning toward predicting another order of 434. The data suggests an expected continuation of the current lower-volume trend, consistent with the start of October.


**Determining Final Recommendation**

After reviewing all the data and considering the prompt, I'm confident in the prediction. Based on the 14-day cycle and recent single 434-unit orders in October, with a slight seasonal volume drop compared to September. The forecast for tomorrow is for a single order of 434 units.


**Concluding the Prediction**

I've made my final determination on the upcoming order. Considering the consistent 14-day cycle, the recent 434-unit orders, and the potential for a slight dip in volume as we enter October, I'm predicting a single order of 434 units for tomorrow.




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
- **Pattern temporel**: Cycle bi-mensuel régulier tous les 14 jours, principalement le jeudi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 1302u

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement stable à 14 jours d'intervalle entre 2024 et 2025. La dernière commande datant du 2 octobre, la prochaine est prévue pour le 16 octobre (demain). La quantité recommandée de 868 unités (2 multiples de 434u) correspond à la médiane constatée sur les cycles récents de septembre/octobre 2025 ainsi qu'à la consommation exacte à la même période en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,054 tokens
- **Output**: 1,847 tokens
- **Total**: 2,901 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Demand Now**

I'm currently working on the product [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G and need to decide if and when to reorder, and at what quantity. The current date is 2025-10-15. I've reviewed the sales data, specifically the starting stock on 2025-10-02, which was 434 units.


**Projecting Future Orders**

I'm now projecting the next two order dates, based on the observed 14-day cycle. With tomorrow being a likely candidate, and the next on October 30th. I'll need to assess potential stock levels to inform the optimal quantities for each order, considering the 30-day horizon.


**Quantifying Order Recommendations**

I'm recommending an order of 868 units for tomorrow, as per the established 14-day cycle and the median order quantity. I've noted a strong seasonality from mid-August through October. I'll continue to monitor demand over the next 30 days, particularly looking at any outlier events, although it seems unlikely at this point.


**Calculating Remaining Risk**

I've just finished the calculations. The customer's pattern is extremely consistent, and the 868-unit order is confirmed. My confidence is high, and I've also verified the date calculations, ensuring accuracy. I'm now documenting the key details and constraints to format the recommendation correctly.


**Summarizing Key Metrics**

After reviewing all the data and analyzing key patterns, I've confirmed that the customer's ordering behavior is highly predictable. The bi-weekly cycle is confirmed, with the next order due tomorrow. Based on the median order quantity and the consistent historical data, I am recommending an order of 868 units, with high confidence in this recommendation.




</details>

</details>


<details>
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 40u
- 📊 **Baseline calculée**: 66.67u
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
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel extrêmement régulier (14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-01
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 120u

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement est parfaitement stable (environ 14 jours entre les cycles). La prochaine commande est prévue précisément pour le 15 octobre (aujourd'hui). Concernant la quantité, bien qu'un pic à 120u ait été observé en septembre (similaire aux pics de volume élevés en N-1 à la même période), la commande la plus récente et la plus fréquente (mode) est de 40u. On privilégie la commande d'une unité de base (40u) pour maintenir le flux.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,036 tokens
- **Output**: 3,822 tokens
- **Total**: 4,858 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Trends**

I'm currently focused on the product PF1699, specifically CB9006 LD FR VINAI CAESAR BIO PET 250ML. My recent analysis of the last three months shows a production pattern of 40u units on specific dates. Now, I’m digging deeper, trying to understand the broader context and any deviations. My goal is to find patterns.


**Projecting Future Orders**

The cycle is consistently about 14 days, and the predicted date has now been reached. Given that the last order was placed on 2025-10-01, a new order is imminent. The data shows a pattern of 40u, with occasional larger orders. I'm focusing on the stockout risk for the next 30 days.


**Evaluating Stock Levels Now**

I'm deep in the analysis, zeroing in on product PF1699, specifically on its order history and the current date, 2025-10-15. The recent data shows a consistent 14-day cycle, with the last order on October 1st. My calculations reveal the next order is due today. I'm taking into account the average recent volume and standard shipping units to gauge the stockout risk within the next 30 days.


**Predicting Next Quantity**

I'm presently analyzing the upcoming order, which is due today, and focused on the product's recent order patterns. Considering that the last order on October 1st was for 40 units, I'm examining the median and average quantities from the past 3-month period, as well as the historical data from N-1. The cycle is 14 days, and the most common shipping unit size is 40.


**Calculating Order Recommendation**

I've examined the product's recent and historical order patterns to formulate the optimal quantity for today's order, considering a 14-day cycle. While the average order size is higher due to an outlier, the median, and the most recent order, suggests 40 units. Despite historical spikes, recent trends point toward a stable demand, and the consistent shipping unit is 40. Therefore, I'll recommend 40 units for this order.


**Deciding on Final Recommendation**

After a comprehensive review, I've weighed several factors. The product's consistent 14-day cycle and the most recent order of 40 units guide me. While historical data hints at higher volumes, the last order and the overall median suggest sticking with 40 units, since recent patterns show a 40 unit standard. I'll stick to a recommendation of 40.


**Concluding Quantity Assessment**

After reviewing all recent data, I've confirmed today's order is due, based on a 14-day cycle from the last one. While the average volume leans towards 66 units, the most frequent recent order size and the median quantity is 40 units. Despite historical higher volumes, I will suggest 40 units for now.


**Determining the Order Quantity**

My analysis is converging. The product PF1699's order is due today, following a 14-day cycle. While historical data presents variability, with 120u orders, the last order was 40u. Considering the most recent ordering pattern, I'm leaning towards 40 units, but the historical data indicates the order could be larger.


**Revisiting Quantity Recommendation**

I've re-examined the data and decided. Although the average is 66, and September historically had higher volumes, the most recent order and median quantity were 40. Given the consistent 14-day cycle and the atomic unit being 40, I'm sticking with a 40-unit recommendation.




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
- **Pattern temporel**: Cycle bimensuel régulier identifié le jeudi (tous les 14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-18
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de 14 jours est extrêmement stable sur 2024 et 2025. La dernière commande date du 18 septembre. Selon le cycle (18/09 + 28 jours), la prochaine commande est attendue autour du 16 octobre, soit demain par rapport à la date actuelle du 15 octobre. Le volume récent en 2025 est de 155 unités par commande (93+62 ou 93+31+31), ce qui constitue notre base de prédiction.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,039 tokens
- **Output**: 2,035 tokens
- **Total**: 3,074 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Production Intervals**

I'm currently focused on the production interval of the LD FR PESTO BIO AIL DES OURS. Data from September shows a 14-day interval between production runs. I need to understand if this is a consistent pattern or just a small sample size. I'll need to check if we have more data, and whether that is a problem.


**Projecting Future Orders**

I'm now projecting future orders for the PF3317, focusing on the LD FR PESTO BIO AIL DES OURS 135G product. Based on historical data, specifically 2024 production intervals, and the most recent 2025 data, a 14-day cycle seems most probable.  The customer is late as of today, October 15th, and this product should have been ordered on or about October 2nd or 16th.


**Assessing Ordering Patterns**

Now I'm delving deeper into the specifics of the CB9028 product. Analyzing 2025 and 2024 data, a 14-day cycle is most prevalent. The customer is behind schedule, given the 2025-10-15 target date. With 27 days since the last order, and an impending Oct 2 or 16 cycle, a stockout is a real concern. I'm focusing on the 155 unit baseline.


**Predicting Order Requirements**

I'm now zeroing in on the CB9028 product for the PF3317, particularly the LD FR PESTO BIO AIL DES OURS 135G. Historical data, spanning 2024 and 2025, reveals a strong 14-day cycle. With the last order placed 27 days ago, the next order of 155 units is due immediately, potentially triggering a stockout risk. The current cycle should have triggered a new order around Oct 2 or Oct 16.


**Refining Quantity Recommendations**

Now, I'm analyzing the 155-unit baseline for the CB9028 product, focusing on the LD FR PESTO BIO AIL DES OURS 135G. Historical data confirms a 14-day cycle. With 27 days passed since the last order, a new order is imminent, potentially due on the 16th. My primary focus is to determine the ideal order quantity, despite observing a volume increase in 2024. Considering recent data, 155 units feels correct, pending final confirmation.




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
- **Pattern temporel**: Cycle bimensuel à mensuel (14-28 jours), prédominance du jeudi
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-18
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel de commande oscille entre 14 et 28 jours (médiane à 21 jours). La dernière commande datant d'il y a 27 jours (18 septembre), la probabilité d'une commande imminente est extrêmement élevée. Les quantités sont stables par multiples de 25u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,025 tokens
- **Output**: 2,275 tokens
- **Total**: 3,300 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Production Volumes**

I've been reviewing the recent production data for the PF1690 LD BBQ BIO 30 0G product. Today's date is 2025-10-15. I've noted a steady output in the last few months, with 25 units on several Thursdays. There was also a notable 50-unit day, which looks like a consolidation of two batches.


**Forecasting Future Deliveries**

I'm now calculating the projected delivery timeline for the PF1690 product, having analyzed the production intervals. Given the 27 days since the last order on 2025-09-18, the previous median interval calculation of 20 days seems inaccurate. Considering the typical 14-day or 28-day cycle, an updated prediction is in order.


**Evaluating Order Patterns**

I've been drilling down into the historical order volumes, and the 25-unit batch size appears consistent. I'm now analyzing the implications of the 50 and 75-unit orders from previous periods, particularly the potential for aggregated deliveries. The next expected order date is tomorrow, October 16th.


**Predicting the Next Order**

I've finalized my analysis, using the provided data, and determined that the next order is highly likely tomorrow. The analysis suggests a 25-unit order, with high confidence, based on the established 14-28 day cycle.


**Confirming the Order Quantity**

The final model has been refined; I've re-evaluated the cycle logic, leaning towards a 28-day cycle. Today, the order is highly probable, as 27 days have passed since the last order. My analysis of the historical data and recent pattern suggests the standard quantity of 25 units is recommended, with high confidence.




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

**✅ Quantité LLM**: 186u (confidence: high)
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

**✅ Quantité LLM**: 40u (confidence: medium)
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

## False Positives (14)

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
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -15.5u (-3j restants) → prédit 40u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 240 | Stock prédit: -782.0u (-16j restants) → prédit 240u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 4925 | Stock prédit: -5125.0u (-17j restants) → prédit 4925u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 638 | Stock prédit: -2150.0u (-17j restants) → prédit 638u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 400 | Stock prédit: -1385.0u (-17j restants) → prédit 400u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 312 | Stock prédit: -1084.0u (-17j restants) → prédit 312u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 188 | Stock prédit: -611.0u (-17j restants) → prédit 188u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 422 | Stock prédit: -1395.0u (-17j restants) → prédit 422u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: -4.2u (0j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 496 | Stock prédit: -233.6u (-19j restants) → prédit 496u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: -572.1u (-38j restants) → prédit 434u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T11:22:45.882Z*
