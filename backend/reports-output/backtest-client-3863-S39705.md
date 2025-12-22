# Rapport Backtest - Client C.F. GRELL NACHF. NATURKOST

## Contexte

- **Client** : C.F. GRELL NACHF. NATURKOST (ID: 3863)
- **Commande réelle** : S39705
- **Date commande** : 2025-10-13 14:04:36
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 4,441 input + 7,141 output = 11,582 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score équilibré global |

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
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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

## True Positives (4)

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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 32 | 16 | 16.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 32 | 48 | 16.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 32u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: 16u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel de 14 jours très régulier
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très stable (14 jours entre les trois dernières commandes). La date de commande prédite est le 22/10, soit dans 10 jours, ce qui induit un risque de rupture imminent. Bien que les volumes 2025 montrent une tendance baissière (64 > 48 > 32 > 16), la médiane de 32u est retenue car elle correspond au volume commandé à la même période en N-1 (32u le 04/10/2024) et offre une sécurité B2B raisonnable face à la commande très faible (16u) du 08/10.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,202 tokens
- **Output**: 2,356 tokens
- **Total**: 3,558 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Trends**

I'm currently tracking the sales history of MF0042. Recent data shows sales on October 8th, with previous spikes in September. This is helping me to start to identify the product's regular sales patterns.


**Calculating Expected Timeline**

The analysis continues, and I've focused on predicting the next order date. Based on recent 14-day cycles, I estimate an order around October 22nd, leaving a 10-day window. The risk assessment looks good, as it's well within the acceptable limit. I'm also comparing quantities over time, noting a possible downward trend in 2025 sales volume.


**Predicting Order Quantity**

The product's sales patterns now show a clear bimonthly cycle. The most recent order of 16u, which is small, raises some questions, although it is within a reasonable range. The downward trend in 2025 quantities prompts me to consider whether the demand has started dropping. Given the client's usual order size and the median, I plan to suggest 32u for the next order.


**Finalizing Order Recommendation**

I've meticulously analyzed the recent sales data, confirming the consistent 14-day cycle. While the most recent order was a small one (16u), I'm suggesting 32u for the upcoming order, given the previous volumes and the October 2024 order size. The 10-day window to the predicted order date presents minimal risk, and I am highly confident in the prediction.


**Evaluating Cycle Consistency**

I've re-examined the 14-day cycle, confirming its regularity. Considering the downward trend in 2025 and that the last order was only 4 days ago, I'm still leaning towards recommending 32u for the upcoming order, mirroring the order from Oct 2024. The 10-day window to the predicted date is still acceptable.


**Revisiting Quantity Recommendation**

I'm now consolidating the data and the conclusions. While the 16u order raises concerns about declining demand, I'm sticking with the 32u recommendation. It aligns with historical averages and the October 2024 order size, and is the safer course of action. I am now confident in this recommendation.




</details>

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 48u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 32u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 16u (33.3%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-hebdomadaire strict le mercredi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement régulier (tous les 14 jours, précisément le mercredi sur les dernières occurrences). La prochaine commande est prévue dans environ 10 jours (le 22/10/2025), ce qui justifie une commande par anticipation. La quantité recommandée de 32u correspond à la médiane des trois dernières commandes et s'aligne sur les volumes observés en N-1 à la même période (32u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,205 tokens
- **Output**: 2,128 tokens
- **Total**: 3,333 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Volumes**

I'm currently tracking the production volumes of MF0044, the chickpea and cumin spread. The data indicates recent activity on 2025-10-08 with 48 units produced. Prior to that, there were production runs on 2025-09-24 (32 units) and 2025-09-10 (32 units). I'm looking at the fluctuations to understand the production schedule and identify any trends.


**Predicting Future Demand**

I've calculated the median cycle to be 14 days, based on recent production runs. The last order date was 2025-10-08, so I project the next order for MF0044 will be on 2025-10-22.  With today being 2025-10-12, I estimate about 10 days until that order. The increasing trend in recent order sizes and the need to compare to a similar time period last year requires further analysis to assess the risk of stockout.


**Evaluating Stockout Probability**

I'm now assessing the risk of a stockout, considering the predicted next order date of October 22nd.  I've compared recent production runs and order quantities. My analysis revealed a potential trend toward slightly higher demand, with the last order at 48 units.  Given this and the 2024 data, a conservative estimate of around 40 units might be prudent, but I'll stick with 32 for safety stock.


**Determining Order Quantities**

My analysis now focuses on determining the appropriate order quantity. Examining the recent order history, the median quantity appears to be 32, which I'll recommend. Although there's an uptick to 48 units recently, the trend remains relatively stable. The cycle is bi-weekly on Wednesdays.


**Calculating Reorder Point**

I'm now determining the reorder point, primarily focusing on the quantity of 32 units, consistent with the median recent order size and the established bi-weekly cycle on Wednesdays. Analyzing the recent history and N-1 data, the order pattern is clear. With 10 days until the projected order date, I'm confident in 32 units.




</details>

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

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
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement régulier avec un intervalle de 14 jours constaté sur les trois dernières expéditions (tous les mercredis). La quantité est parfaitement stable à 16 unités, sans aucune variation depuis la reprise du flux en septembre. Un risque de rupture est identifié car la commande suivante est prévue sous 10 jours (le 22 octobre).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,197 tokens
- **Output**: 1,383 tokens
- **Total**: 2,580 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Production Needs**

I'm currently looking at the production history for MF0048, the 250ml mayonnaise. The goal is to determine future production needs. I've compiled the recent 2025 data, noting the 16u production runs on various Wednesdays. I'm now turning my attention to the N-1 history, specifically the 2024 figures, to use in the projections.


**Assessing Order Quantities**

I've just finished analyzing the order history for the mayonnaise, looking at the 2024 and 2025 data to define the baseline quantity. Considering the recent production runs of 16 units every two weeks, and after checking seasonality and trend, I'm now recommending an order for 16 units. The next one is due in 10 days.


**Recommending Final Order**

I've reviewed the data, including the bi-monthly cycle and the consistent 16-unit quantity. Considering all the recent data, and with high confidence, I'm confirming the recommendation for an order of 16 units, as the pattern is extremely stable. The next one is due in 10 days.


**Formulating Final Advice**

I'm now collating the final recommendation. With the established bi-monthly cycle and consistent 16-unit orders, I'm confident about confirming another 16-unit order for 2025-10-22. The 10-day window necessitates action. Everything aligns perfectly, with a high confidence level in the forecast.




</details>

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

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
- **Pattern temporel**: Cycle bimensuel régulier (14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 64u

**🧠 Raisonnement LLM:**
Le produit présente une stabilisation nette avec deux commandes consécutives de 16 unités à exactement 14 jours d'intervalle (mercredi). La commande de 64 unités de juillet est considérée comme un stock initial ou un événement isolé. Prochaine commande prévue sous 10 jours, d'où un besoin immédiat.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 837 tokens
- **Output**: 1,274 tokens
- **Total**: 2,111 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I'm analyzing the sales data for product MF0062, specifically the "MF Tarti Betterave rouge." My focus is on the recent sales history to identify any patterns. I see two instances of 16 units sold on Wednesdays, the most recent being 2025-10-08. I'm now cross-referencing this with older data to discover how this compares over time, to spot any seasonal trends.


**Projecting Future Demand**

The model predicts the next order for MF Tarti Betterave rouge on October 22nd, precisely 14 days after the most recent sale. This projection is based on a bimonthly cycle derived from the two most recent sales, showing consistent demand. It identifies a potential stockout risk within the next 30 days due to the predicted delivery date. I am disregarding the outlier quantity of 64 units.


**Evaluating Outlier Exclusion**

I'm now carefully re-evaluating the decision to exclude the 64-unit order. It's becoming clearer that the subsequent consistent 16-unit orders represent a new, stable demand pattern, making the outlier identification more sound. The JSON structure and date formats are verified as required. The recommendation is holding at 16 units, but I'm increasing the confidence level.


**Refining Quantity Recommendation**

I'm now focusing on refining the 'recommended_quantity'. The analysis shows a stable demand of 16 units every 14 days, with a stockout risk within 30 days.  I have updated the `recommended_quantity` to 16, and the `days_until_next` is confirmed as 10. The JSON structure, date formats, and outlier handling all meet the requirements. I am ready to close this phase of analysis.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 48u
- 2025-07-14 07:23:44: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 48u
- 2024-08-23 06:50:23: 48u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 64u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-24 09:36:53: 64u
- 2024-05-13 07:07:14: 48u
- 2024-04-19 09:15:16: 64u
- 2024-03-22 09:26:53: 32u
- 2024-03-15 08:05:43: 32u

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 48u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 32u
- 2025-07-14 07:23:44: 48u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 16u
- 2024-08-23 06:50:23: 32u
- 2024-08-07 07:50:22: 48u
- 2024-07-19 07:16:19: 16u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-13 07:07:14: 32u
- 2024-04-19 09:15:16: 32u
- 2024-03-22 09:26:53: 32u
- 2024-03-15 08:05:43: 32u
- 2024-02-23 08:44:27: 32u

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-09-10 06:05:27: 16u
- 2025-07-14 07:23:44: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 16u
- 2024-09-23 07:03:10: 16u
- 2024-08-23 06:50:23: 16u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 16u
- 2024-06-14 08:44:06: 32u
- 2024-05-13 07:07:14: 16u
- 2024-03-22 09:26:53: 16u
- 2024-03-15 08:05:43: 16u
- 2024-02-23 08:44:27: 16u
- 2024-02-19 09:05:29: 16u
- 2024-01-26 13:59:24: 32u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-07-14 07:23:44: 64u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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

*Rapport généré automatiquement le 2025-12-19T14:45:02.659Z*
