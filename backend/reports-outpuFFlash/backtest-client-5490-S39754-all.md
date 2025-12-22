# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 25
- **Tokens**: 22,960 input + 65,979 output = 88,939 total


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
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ❌ Non | 📊 Médiane |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 155 | 93 | 62.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 100u vs Médiane: 25u (Réel: 50u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 100u
- 📊 **Baseline calculée**: 93.75u
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
- **Pattern temporel**: Cycle bi-hebdomadaire très régulier (tous les 14 jours, principalement le jeudi)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La structure des commandes est extrêmement stable avec un cycle de 14 jours identifié à la fois en 2024 et 2025, tombant systématiquement sur un jeudi. La dernière commande datant du 2 octobre, la prochaine est prévue pour le 16 octobre (soit demain par rapport à la date du jour). Le volume par cycle oscille entre 75u et 125u. La médiane des commandes groupées sur les deux dernières années est de 100u, ce qui correspond exactement au volume de la période correspondante en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,035 tokens
- **Output**: 1,927 tokens
- **Total**: 2,962 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Quantities**

I've been analyzing the production data for product PF1692. I've confirmed that on October 1st and 2nd, 2025, a total of 100 units were produced, with 50 units produced on each day. It's crucial to understand these daily figures for planning purposes.


**Projecting Production Cycles**

I'm now calculating the next anticipated production date, which I've determined to be tomorrow, October 16th. Considering the 14-day cycle, and that today is October 15th, the risk assessment indicates that production is likely needed. I'm also comparing 2024 and 2025 volumes, noting some slight variations.


**Evaluating Order Recommendations**

I've finalized my analysis of the order recommendations for product PF1692. Considering recent production trends and the 14-day cycle, a quantity of 100 units seems appropriate for the next bi-weekly order. I'm focusing on the reliability of the 100u figure.


**Calculating Order Frequency**

I've determined the production cycle to be precisely 14 days, with orders consistently placed on Thursdays. The recent order on October 2nd, and the data indicate that an order is indeed due tomorrow. My confidence is high, and the recommended baseline quantity is 100 units.




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
- **Pattern temporel**: Cycle bi-mensuel régulier d'environ 14 jours, avec des commandes souvent passées par lots de 434 unités sur deux jours consécutifs.
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande principalement le mercredi ou le jeudi. Aujourd'hui (mercredi 15 oct.) correspond exactement au cycle d'approvisionnement prévu.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité exceptionnelle avec des commandes systématiques de 434 unités (ou multiples). Le cycle identifié est de 14 jours entre les débuts de sessions de commande (04/09, 18/09, 01/10). Nous sommes à 13-14 jours de la dernière session, ce qui indique un besoin immédiat pour maintenir le stock. Le client commande souvent en deux fois (434u + 434u) sur 24h ; la recommandation porte sur la première unité de commande de ce nouveau cycle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,047 tokens
- **Output**: 2,045 tokens
- **Total**: 3,092 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Order Quantities**

I'm analyzing the product LD FR TARTINADE BIO TOMATE 200 to determine if a new order is needed in the next 30 days and the optimal quantity. Initial stock on 2025-10-02 was 434 units. I need to factor in current sales data and any anticipated demand changes.


**Calculating Likely Demand**

I've reviewed past purchase orders. It appears the client consistently orders in multiples of 434 units, usually around every two weeks, with a total of 868 units in each order cycle. Given the last order was on October 1st and 2nd, and it's October 15th, I'm predicting an order is highly probable today or tomorrow. I'm focusing on quantity calculation now.


**Quantifying the Prediction**

I'm now zeroing in on the quantity. Given the consistent 434-unit base, and the tendency for back-to-back orders to reach 868, I'm leaning toward recommending an order of 434 units, while noting the strong possibility of a follow-up order soon after, bringing the total order to 868. This is based on frequency and standard order size.


**Determining the Order Quantity**

I've made the final decision. Given the prompt's request for a single order prediction and the consistent 434-unit base with the possibility of another one very soon after, I will recommend an order of 434 units. I have a high confidence level due to the clear pattern. This considers the prompt's focus on the next individual order, not the overall quantity over a period.


**Recommending The Order**

I've re-examined the data and confirmed the 434-unit base, with a high probability of a second order following soon. The split-order pattern makes the 434-unit prediction most appropriate, considering the instructions' focus on the next order, not a cumulative quantity. My confidence remains high based on the consistent historical data. I am ready to construct the final JSON.




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
- **Pattern temporel**: Cycle bimensuel très régulier de 14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement robuste avec une récurrence tous les 14 jours observée sur l'historique 2024 et 2025 (jours de commande majoritairement le jeudi). La dernière commande datant du 2 octobre 2025, la prochaine livraison est attendue pour le 16 octobre, soit demain par rapport à la date du jour. Le volume saisonnier en N-1 pour cette période (Sept-Oct) oscille entre 155 et 186 unités. En nous alignant sur la commande groupée du 1er/2 octobre 2025 (155 unités au total), nous maintenons une couverture cohérente avec la demande saisonnière forte du produit.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,031 tokens
- **Output**: 2,580 tokens
- **Total**: 3,611 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Pineapple Tart Sales**

I'm currently focused on the sales of the pineapple tartinade product. I've been reviewing recent data, specifically from the beginning of October. There was a significant jump on October 2nd, and the preceding days show a clear pattern of units sold. It looks like September's figures provide a useful baseline for the analysis.


**Projecting Order Volumes**

I'm now calculating future order volumes. Based on the 2024 data, a 14-day cycle is the median. Considering the last order was on October 2nd, the next one is due on October 16th. Today being the 15th, there's only one day left. This puts me in a "high-risk" scenario for a potential stockout. Looking at recent volume, October's sum is 155u.


**Forecasting Demand Patterns**

The recent data point to a stable demand pattern. I've calculated the median order size and the average cycle time. October's 2024 orders showed a range of 155-279 units. The 2025 cycle suggests the next order is due tomorrow, indicating a high stockout risk. I now consider the need to prepare for an order of 155-186 units.


**Assessing Order Frequency**

I've been analyzing the order frequency, confirming a 14-day cycle. The most recent data reveals the last order was on October 2nd, with the next expected on the 16th. Today being the 15th, there is a high-risk of stockout. A volume of around 155 units should be ordered to prepare for this.


**Refining Quantity Calculations**

I'm now zeroing in on the ideal order quantity. Reviewing historical data, a strong pattern emerges around the 155-unit mark. Taking into account the expected refill event tomorrow, I'm confident in recommending a 155-unit order. I'm also confirming that 155 is a multiple of 31, our base unit.


**Recommending Order Quantity**

My analysis is converging on a 155-unit order. I've considered the 14-day order cycle, the recent 155-unit order on October 2nd, and historical data points around the same period. The N-1 numbers for late September/early October range between 155 and 186. Considering the imminent order date, 155 is the safest recommendation.




</details>

</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 186u vs Médiane: 62u (Réel: 62u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 186u
- 📊 **Baseline calculée**: 186u
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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-hebdomadaire (14 jours) extrêmement régulier
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 31u

**🧠 Raisonnement LLM:**
Le cycle de 14 jours est parfaitement reproduit en N-1 et sur les données actuelles. La dernière commande date du 2 octobre, ce qui porte la prévision de rupture/réapprovisionnement au 16 octobre (soit demain). Les volumes sont historiquement composés de multiples de 31 unités. Malgré une variabilité ponctuelle, la médiane des blocs de commandes hors anomalies se situe à 186 unités (6 colis de 31), ce qui correspond à la moyenne pondérée entre l'historique 2024 et la dynamique récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,030 tokens
- **Output**: 2,197 tokens
- **Total**: 3,227 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Investigating the Data**

I'm currently focused on the product's recent history, specifically the sales data for October 2025. I noted multiple entries per day and am digging deeper to understand the pattern. It appears there might be morning and afternoon sales figures combined for each day.


**Pinpointing the Pattern**

I've discovered a distinct bi-weekly cycle for this product, with a 14-day interval between orders. Based on the last order on October 2nd, I predict the next one will be tomorrow, October 16th. The volumes are also quite different, with a jump in units between the Sept and Oct orders.


**Forecasting Order Volumes**

I'm now diving into the volume trends. Comparing this year's orders (217u) to the previous year, the volume appears to be increasing. I've calculated a median order size of roughly 201.5 units, based on historical data. Also, considering the bi-weekly cycle, and the fact that today is October 15th, I'm expecting an order tomorrow, October 16th.


**Finalizing Recommendations**

I've just finished the final calculations, factoring in both recent and historical data. I'm predicting an order tomorrow, October 16th, based on the established 14-day cycle. With a median order volume of 186 units, and the risk of stockout high, the recommendation will be sent.


**Refining the Prediction**

I'm now recalculating the median order volume, focusing on the core, multi-unit entries. I've excluded the outlier order and am converging on 186 units. Considering the upcoming order on October 16th, and the fact that stockout risk is indeed high, I'm now crafting the final recommendation.




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
- **Pattern temporel**: Cycle bimensuel (environ 14 jours) avec commandes groupées
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande identifié est de 14 jours, ce qui place la prochaine échéance au 16/10/2025, soit demain par rapport à la date actuelle. Il y a donc un risque éminent de rupture (horizon < 40j). Les quantités commandées sont des multiples de 31 (31, 62, 93), suggérant un conditionnement spécifique. On note une tendance à la hausse : le volume par cycle est passé de 124u en septembre à 248u début octobre. La recommandation de 186u (6 x 31) représente la moyenne robuste des volumes par cycle sur l'historique récent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 705 tokens
- **Output**: 1,932 tokens
- **Total**: 2,637 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Avocado Spread**

I've been analyzing the recent data on the avocado tartinade. Specifically, I'm noting the combined unit totals from October 2nd. I need to understand the trends here, and how they relate to the product's performance over the past three months.


**Evaluating the Risk Factor**

I'm deep in the analysis, zeroing in on the avocado tartinade's order patterns. I've noted a concerning trend: the order volume has recently spiked. The frequent appearance of "93" as a base unit is intriguing. Based on the calculated interval, the next order is highly probable. Risk is high.


**Assessing the Order Volumes**

I've been analyzing the order history for the avocado tartinade. Key dates, like the 2nd of October, are critical as they reveal significant volume increases. The persistent presence of "93" as a unit is quite noteworthy, and could indicate some underlying structure in the orders. Based on the calculated interval, the next order is highly probable. I'm focusing on the clusters, and predicting a volume of 186.


**Predicting the Upcoming Order**

I've been calculating the next order date, which should be tomorrow, October 16th. Based on the 14-day cycle, I predict a volume of 186 units. The increasing trend suggests a high probability of a substantial order, and 186 units (6 x 31) seems balanced.


**Calculating the Recommendation**

I've determined the next order date to be October 16th, and I recommend ordering 186 units. This number reflects the recent increasing trend and average volume, fitting the pattern of multiples of 31. The confidence level is medium.




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
- **Pattern temporel**: Cycle bi-hebdomadaire précis (tous les 14 jours) le jeudi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande exclusivement le jeudi ; la prochaine date prévue est demain.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite avec un cycle de 14 jours identifié en 2024 et 2025. La dernière commande date du jeudi 2 octobre, la prochaine est donc attendue pour demain, jeudi 16 octobre. Concernant la quantité, bien que septembre ait vu des volumes plus élevés (868u), le passage en octobre marque historiquement un retour à la quantité de base de 434u (confirmé par la commande du 02/10/25 et celle du 03/10/24).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,048 tokens
- **Output**: 1,753 tokens
- **Total**: 2,801 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Order Duplicates**

I'm now zeroing in on the multiple entries for the same SKU on 2025-09-18. It seems likely that they represent either a split order or, potentially, duplicate entries, given the B2B nature of the data. I'm leaning toward the former, but further investigation is warranted.


**Uncovering Bi-Weekly Patterns**

Okay, I've identified a clear bi-weekly ordering pattern for the LD FR TARTINAD BIO POIVRON SKU. Specifically, it seems to reoccur every 14 days, with orders predominantly placed on Thursdays. The most recent order was on October 2nd. Given today is the 15th, and the next order is due tomorrow, the risk level is deemed "YES". Further analysis will investigate why the latest two order patterns are not consistent.


**Calculating Order Risks & Trends**

After analyzing the LD FR TARTINAD BIO POIVRON SKU, I've confirmed the bi-weekly pattern, with orders due every Thursday, and the next one tomorrow. Although the volume varies between 434 and 868 units, it still has a stable frequency. Given the 14-day cycle and the current date, the risk is indeed "YES."


**Assessing Risk Parameters**

I've now refined the risk assessment for the LD FR TARTINAD BIO POIVRON SKU. The bi-weekly ordering pattern is confirmed, and the next order is due tomorrow. Considering the consistency of the 434-unit order, I am predicting a "YES" risk profile. I am confident in this recommendation.




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
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours) très régulier, principalement le jeudi.
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-16 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande tous les 14 jours le jeudi. La dernière commande groupée a eu lieu les 01-02 octobre.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une cyclicité bi-hebdomadaire très stable (14j). La dernière commande a eu lieu il y a 13 jours, plaçant la prochaine échéance demain (16 octobre). Les quantités sont souvent des multiples de 434 (probablement une unité de manutention), avec une médiane stable à 868u sur les mêmes périodes en 2024 et 2025.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,054 tokens
- **Output**: 1,739 tokens
- **Total**: 2,793 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Order History**

I'm currently looking at the recent order history for product PF1696. On October 1st, there was a significant order, and a very similar one the next day, which warrants further investigation. Is this a double order, or a pattern I haven't spotted yet? I'll need to dig deeper.


**Forecasting Demand Patterns**

The data reveals a consistent bi-weekly ordering cycle for PF1696. Based on this 14-day cycle, I predict the next significant order will occur tomorrow, October 16th. The evidence points to a recurring pattern, with orders consistently around 434 units, often doubling. This is critical for anticipating stock needs.


**Refining Order Predictions**

I'm now calculating the typical order volume based on the available data. The most common order size appears to be 868 units, with 434 as a base unit. Considering the recurring 14-day cycle, I expect a demand of approximately 868 units tomorrow, the 16th.


**Calculating Order Quantities**

I've been analyzing the order data, and I've determined that the standard unit size is 434, probably a pallet. The baseline volume appears to be 868 units, which is a key pattern observed across the historical data. The bi-weekly cycle is confirmed, and the next order is due tomorrow. My confidence in the prediction is extremely high.




</details>

</details>


<details>
<summary><strong>8. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 155u vs Médiane: 62u (Réel: 93u)</summary>

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
Le cycle de commande est très régulier avec une récurrence tous les 14 jours observée tant en 2025 qu'en 2024. La dernière commande date du 18 septembre, ce qui suggère qu'une commande aurait dû être passée le 2 octobre (non visible/manquée) ou est imminente pour le 16 octobre. L'historique récent de 2025 montre une stabilité parfaite à 155 unités (multiple de 31). Bien que la saisonnalité N-1 suggère une hausse en octobre (279u), la prudence B2B recommande de se baser sur le volume stable constaté lors des deux dernières occurrences de 2025.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,039 tokens
- **Output**: 1,936 tokens
- **Total**: 2,975 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Data**

I'm currently processing the historical data for product PF3317, specifically the CB9028 pesto. Initial calculations show two distinct data points in September. I've calculated the interval between them. Next, I'll need to look at the next interval to determine the next steps.


**Predicting Future Orders**

I've analyzed the historical data, identifying a 14-day cycle for product PF3317. Based on this, and the last order on September 18th, I predicted an order around October 2nd, which didn't happen. With today being October 15th, and considering a 40-day threshold, the risk is 'YES'.


**Calculating the Volume**

I'm now focusing on calculating the appropriate order volume. Considering the product's recent order history of 155 units every 14 days, I'm factoring in the seasonality observed last year, where October volumes were higher. I am considering either maintaining the stable 155u or slightly increasing the order based on the prior year's trends.


**Calculating the Recommendation**

I've completed the volume calculation.  Based on recent stable volumes of 155 units every two weeks, and considering the seasonality observed last year, I'm recommending an order of 155 units, because B2B logic prefers the last reliable volume. I am aware that an order is expected tomorrow, the 16th.


**Refining the Approach**

I'm now revisiting the volume recommendation. While a stable 155u seems logical based on the recent cycle, the strong seasonality indicated by last year's data makes me hesitate. I'm weighing whether to slightly increase the order, but the B2B preference for the last consistent volume of 155u remains a strong factor, along with tomorrow's expected date.




</details>

</details>


<details>
<summary><strong>9. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

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
- **Pattern temporel**: Cycle régulier de 14 à 21 jours, principalement le jeudi
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-09-18
- **Prochaine prédite**: 2025-10-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian de commande est d'environ 17-18 jours. La dernière commande date d'il y a 27 jours (18 septembre), ce qui signifie que le client a dépassé sa date de réapprovisionnement habituelle (prédite autour du 5 octobre). Bien qu'il s'agisse d'un produit saisonnier (BBQ), l'historique N-1 montre une commande le 3 octobre, confirmant une demande résiduelle en automne. Une quantité standard de 25 unités (multiple habituel) est recommandée pour couvrir le besoin immédiat.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,025 tokens
- **Output**: 1,897 tokens
- **Total**: 2,922 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing BBQ BIO Sales**

I've been analyzing the recent sales data for the BBQ BIO product, focusing on the last three months. It looks like we're seeing some volume fluctuations. Specifically, there's a pattern of 25u sales, sometimes single, sometimes doubled, which is worth investigating further. I need to understand what's driving these changes.


**Calculating Projected Sales Trends**

My focus has shifted to projecting sales patterns. I've noted a consistent 25-unit order size for the BBQ BIO product, occurring roughly every 14-20 days. Given the last order was on September 18th, I anticipated another around October 5th. Since we're now at October 15th, and there's been no repeat order, I'm flagging this as a potential concern.


**Determining Order Risk Status**

Based on the product history, the most recent order was on September 18th. Using an average cycle of 14-20 days, I expected another around October 8th, but it's now October 15th, and nothing. Comparing this to the N-1 data, the customer *did* place an order in early October last year. Risk appears high, and I need to investigate.


**Assessing Order Delays**

I've calculated the next anticipated order date to be around October 5th, with a lag of 27 days since the last order on September 18th. Comparing against last year's data, there was an order on October 3rd. Given the cycle time and the absence of a recent order, I'm classifying the risk as 'high,' and considering the seasonal decline for BBQ product demand.


**Defining Urgent Action Status**

I've determined that an order is likely due, as we're now at October 15th, and it's been 27 days since the last one. Based on the usual 14-20 day cycle, I expected an order around October 5th, but it hasn't materialized yet. Therefore, the risk is 'YES', and immediate action is required.




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
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - ❌ LLM Échoué (fallback médiane)</summary>

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

**📊 Quantité Médiane (fallback)**: 40u
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
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 235 | Stock prédit: -782.0u (-16j restants) → prédit 235u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1290 | Stock prédit: -5125.0u (-17j restants) → prédit 1290u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 639 | Stock prédit: -2150.0u (-17j restants) → prédit 639u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 1600 | Stock prédit: -1385.0u (-17j restants) → prédit 1600u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-19T12:56:19.778Z*
