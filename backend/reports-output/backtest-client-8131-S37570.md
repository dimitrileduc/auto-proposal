# Rapport Backtest - Client ILIS    SA, FRANCESCO LOZANO

## Contexte

- **Client** : ILIS    SA, FRANCESCO LOZANO (ID: 8131)
- **Commande réelle** : S37570
- **Date commande** : 2025-06-20 08:53:32
- **Date cutoff système** : 2025-06-19 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 6,862 input + 15,719 output = 22,581 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 7 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 83.3% | Score équilibré global |

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
| **MAE** | 144.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 46.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -71.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (5)

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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 800 | 640.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 24 | 50 | 26.0 | 52.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 5 | 10 | 5.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 104 | 52.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 52 | 52 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 800u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 160u
- 📊 **Médiane historique**: 160u
- ✅ **Réel commandé**: 800u
- 📉 **Erreur LLM**: 640u (80.0%)
- 📉 **Erreur Médiane**: 640u (80.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire principalement marqué le vendredi
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-20 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Habituellement le vendredi, la date d'analyse (jeudi) précède l'échéance d'un jour
- **Outliers détectés**: 240u

**🧠 Raisonnement LLM:**
Le produit suit un cycle très régulier avec une médiane de 7 jours entre les commandes. La dernière commande date du 13 juin, ce qui place la prochaine échéance prévisible au 20 juin (demain). La quantité de 160 unités est la norme sur 4 des 5 dernières transactions, l'unique commande de 240u étant traitée comme une fluctuation temporaire.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 899 tokens
- **Output**: 1,683 tokens
- **Total**: 2,582 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Production Volumes**

I'm currently focused on the production volumes for the FILOU CHASSEUR product. Observing the recent history, I'm identifying a pattern across the last three months. There seem to be specific dates where we see production runs of either 160 or 240 units. I need to understand what's driving these fluctuations.


**Projecting Production Needs**

I've just finished analyzing the order intervals and quantities for the FILOU CHASSEUR 5 L. The median production cycle is 7 days, and the predicted next production date is tomorrow, June 20th. Given the target date of June 19th, I've flagged a risk of rupture. My current estimate for the baseline quantity is 160 units, based on recent order history, with no adjustments needed.


**Calculating Cycle and Volumes**

I'm now zeroing in on the FILOU CHASSEUR 5 L, confirming the pattern is a regular weekly cycle, with an outlier of 240 units. The upcoming target date is June 19th and the predicted production date is June 20th, indicating an imminent risk. The baseline quantity is still 160. My confidence level for this analysis is high.


**Evaluating Quantity and Timing**

I'm now consolidating the data, with a focus on delivering a concise, JSON-friendly analysis. The predicted next order date is tomorrow, June 20th, with a target of June 19th, confirming the risk of rupture. The quantity recommendation remains 160 units, based on a stable trend and consistent weekly cycles. I've re-evaluated the outlier, considering the overall pattern. My reasoning is now focused on succinct presentation.




</details>

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 24u vs Médiane: 24u (Réel: 50u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 24u
- 📊 **Baseline calculée**: 24u
- 📊 **Médiane historique**: 24u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 26u (52.0%)
- 📉 **Erreur Médiane**: 26u (52.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 24u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire irrégulier (7 à 10 jours)
- **Cycle médian (jours)**: 9
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 80u

**🧠 Raisonnement LLM:**
Le produit suit un cycle de commande fréquent (médiane de 8-9 jours). La commande de 80 unités le 03/06 est un outlier massif (>3x la consommation courante). En l'excluant, les quantités sont très stables autour de 20-24 unités. Une nouvelle commande est attendue pour environ le 22/06, soit dans 3 jours, justifiant un réapprovisionnement de la quantité habituelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 894 tokens
- **Output**: 1,518 tokens
- **Total**: 2,412 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Data**

I'm currently looking at the production data for the FILOU PROVENCALE product. It looks like the most recent production run was on June 13th, with 20 units. There's been some fluctuation in the past three months, with a peak of 80 units on June 3rd. I'll need to analyze these variations for the expert.


**Calculating Cycle Times**

I've calculated the median cycle time to be 8.5 days. The most recent order was on June 13th, so I've predicted the next order to be between June 21st and 23rd. Considering today is June 19th, there is a clear risk of rupture, given the short timeframe. I've also identified the 80-unit order as an outlier.


**Predicting Next Order Date**

I've examined the order frequency and see a pattern of approximately weekly or bi-weekly orders, with a median cycle time of 8.5 days. Based on this, and given the last order date of June 13th, I'm predicting the next order to be around June 22nd. This suggests a potential risk of rupture, considering today is June 19th. The 80-unit order is confirmed as an outlier.


**Evaluating Data and Patterns**

I've now analyzed the recent history, specifically the inter-order intervals, and determined a median cycle time of 8.5 days, or, roughly weekly/bi-weekly. This confirms the previously noted risk of rupture, given the short timeframe and the upcoming order. The 80-unit order is confirmed as an outlier, with a recommended quantity of 24.




</details>

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 5u vs Médiane: 5u (Réel: 10u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 5u
- 📊 **Médiane historique**: 5u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 5u (50.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier principalement hebdomadaire à bimensuel, majoritairement le vendredi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-27 (dans 8j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Les commandes sont passées quasi exclusivement le vendredi (4 occurrences sur 5)
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
Le cycle de commande médian est de 14 jours avec une forte récurrence le vendredi. La date de prochaine commande estimée est le 27 juin 2025, soit dans 8 jours, créant un risque de rupture imminent. En excluant l'outlier de 60 unités (probablement une commande exceptionnelle ou promotionnelle en début d'historique), la demande de fond est très stable à 5 unités (médiane des commandes récentes).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 892 tokens
- **Output**: 2,198 tokens
- **Total**: 3,090 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I've been examining the recent sales data for the FILOU VOL AU VENT product. It looks like we've sold 3 units on June 13th. Before that, 5 units were sold on May 16th, which is about 28 days prior. I am taking a look at this and the patterns emerging from this data.


**Calculating The Next Date**

I'm zeroing in on predicting the next order date for FILOU VOL AU VENT. Using the median interval, which I calculated to be 14 days, from the order history, I've projected the next order to be around June 27th. Given today's date, this puts us approximately 8 days away from that projected order, hence, I assess some level of risk.


**Predicting Order Quantities**

I'm now focusing on the quantity prediction for the next order. I've identified an outlier in the past order history. After excluding the outlier, the median order quantity comes out at 5 units. The recent trend shows a slight dip, but I'm cautiously recommending an order for 5 units, given the consistent baseline and lack of seasonal influences.


**Synthesizing Findings and Recommendations**

I'm now consolidating the entire analysis for FILOU VOL AU VENT. My confidence remains high regarding the predicted order date of June 27th and the recommended order quantity of 5 units. I'm finalizing the rationale, emphasizing the consistent 14-day cycle and the stable demand, which is currently less than 10 days away.


**Concluding and Refining Analysis**

I'm now putting the final touches on the JSON output, and also looking at the day cycle analysis. It turns out orders tend to fall on Fridays, which provides added context. I am also checking the JSON format, to assure all the expected parameters are included and valid. It also seems the baseline quantity is correct.




</details>

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 104u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 52u
- 📊 **Baseline calculée**: 52u
- 📊 **Médiane historique**: 52u
- ✅ **Réel commandé**: 104u
- 📉 **Erreur LLM**: 52u (50.0%)
- 📉 **Erreur Médiane**: 52u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 52u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel régulier avec des intervalles de 11 à 25 jours (médiane 19j)
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-06-03
- **Prochaine prédite**: 2025-06-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le comportement client est extrêmement stable avec une quantité fixe de 52 unités par commande sur les 3 derniers mois. Le cycle médian suggère une nouvelle commande autour du 22 juin. Étant donné la date actuelle du 19 juin, la commande est imminente sous 3 jours, justifiant une recommandation de réapprovisionnement de 52 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 898 tokens
- **Output**: 1,145 tokens
- **Total**: 2,043 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product History Updates**

I'm focused on the product's update frequency. It looks like the interval between the last two updates is 11 days. Currently, another update is logged, dating back to today, the 19th of June. I am now noting the timing of these updates.


**Assessing Order Prediction**

I'm calculating the median interval, which is 19 days, between orders for PF0085. Given this, I anticipate the next order around June 22nd. Since today is June 19th, the next order is due in 3 days. There may be a stockout risk within the next 30 days.


**Predicting Order Replenishment**

I'm revisiting the order for PF0085. The median interval is precisely 19 days, with the last order on June 3rd. Adding 19 days predicts a new order on June 22nd.  It's now June 19th; thus, the next order is due in 3 days. A stable demand pattern is observed, with each order being exactly 52 units, and the risk detection is high.




</details>

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 52u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 52u
- 📊 **Baseline calculée**: 52u
- 📊 **Médiane historique**: 52u
- ✅ **Réel commandé**: 52u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 52u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier observé entre 4 et 21 jours, moyenne de 12,5 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-05-23
- **Prochaine prédite**: 2025-06-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La dernière commande remonte au 23 mai (soit 27 jours). Étant donné les intervalles précédents (4 et 21 jours), le client est en retard de commande. La quantité de 52 unités est la plus récurrente et représente le volume standard observé.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 842 tokens
- **Output**: 1,679 tokens
- **Total**: 2,521 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Trends**

I'm currently reviewing the recent history of the FILOU TOMATO KET CHUP product, specifically looking at sales volume over the past three months. The data from May reveals two distinct sales events. I'm focusing on identifying any patterns or significant fluctuations in demand to inform the next steps.


**Calculating Order Predictions**

I've moved on to predicting the next order date for PF0959. Considering the 4- and 21-day intervals between orders, the analysis indicates we're overdue. Using the last interval of 21 days leads to a predicted date of 2025-06-13, which has passed. I'll need to re-evaluate the model.


**Refining Order Predictions**

I'm now recalculating the predicted order date for PF0959. Considering it's overdue, I'm analyzing the 21-day cycle, alongside a 4-day gap, to assess potential reasons for the delay. The quantity is stable at 52 units, with no immediate adjustment needed.


**Evaluating Time-Based Data**

I'm now zeroing in on the PF0959 product, specifically the FILOU TOMATO KET CHUP 10KG. Analyzing the dates, I've confirmed an overdue order, 27 days since the last. Using the last cycle of 21 days suggests a due date of 2025-06-13. Given the pattern and the immediate risk, I'll recommend 52 units.


**Recommending Action and Volume**

I've completed the analysis, determining the order for PF0959 is significantly overdue, with 27 days passed since the last order. Considering the typical 21-day cycle, a recommendation of 52 units is warranted immediately to mitigate any risk of disruption, with the high likelihood of an imminent order.




</details>

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 160u
- 2025-06-06 12:50:33: 240u
- 2025-06-03 14:09:59: 160u
- 2025-05-23 11:37:51: 160u
- 2025-05-16 09:00:32: 160u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 800u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 20u
- 2025-06-03 14:09:59: 80u
- 2025-05-16 09:00:32: 24u
- 2025-05-09 08:24:16: 24u
- 2025-05-02 09:39:44: 0u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 24u (confidence: high)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 3u
- 2025-05-16 09:00:32: 5u
- 2025-04-28 06:00:45: 5u
- 2025-04-18 04:55:33: 5u
- 2025-04-11 07:18:35: 60u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-03 14:09:59: 52u
- 2025-05-23 11:37:51: 52u
- 2025-04-28 06:00:45: 52u
- 2025-04-04 11:33:35: 52u
- 2025-03-21 12:22:31: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 52u (confidence: high)
**📊 Quantité Réelle**: 104u

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-23 11:37:51: 52u
- 2025-05-02 09:39:44: 26u
- 2025-04-28 06:00:45: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 52u (confidence: medium)
**📊 Quantité Réelle**: 52u

</details>




---

## False Positives (2)

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
| [PF0089] FILOU VOL AU VENT 400 GR | 20 | Stock prédit: 6.2u (14j restants) → prédit 20u mais non commandé |
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 6 | Stock prédit: -2.5u (-22j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:46:49.911Z*
