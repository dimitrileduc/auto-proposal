# Rapport Backtest - Client ITM ALIMENTAIRE BELGIUM

## Contexte

- **Client** : ITM ALIMENTAIRE BELGIUM (ID: 3577)
- **Commande réelle** : S39716
- **Date commande** : 2025-10-14 08:27:27
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 2,845 input + 10,930 output = 13,775 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
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
| **MAE** | 88.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 73.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 75.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [PF2036] ITM BOULETTES TOMATE 800 GR | 64 | 128 | 64.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 224 | 112 | 112.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM: 64u vs Médiane: 64u (Réel: 128u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 64u
- 📊 **Baseline calculée**: 64u
- 📊 **Médiane historique**: 64u
- ✅ **Réel commandé**: 128u
- 📉 **Erreur LLM**: 64u (50.0%)
- 📉 **Erreur Médiane**: 64u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 64u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier majoritairement le mardi (mar.), environ toutes les 3 à 4 semaines.
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-03 (dans 21j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande habituellement le mardi, l'écart sur la dernière commande (jeudi) est mineur.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement médian est calculé à 25 jours, ce qui place la prochaine commande théorique au 3 novembre 2025. Avec une échéance à 21 jours (soit < 40 jours selon la règle de gestion), le risque de rupture est activé. La quantité de 64 unités est recommandée car elle constitue la médiane stable des commandes et le volume unitaire de réapprovisionnement le plus fréquent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 982 tokens
- **Output**: 5,172 tokens
- **Total**: 6,154 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Data Points**

\n\n

I've been meticulously examining the data points, noting the frequency and volume changes. Specifically, I'm concentrating on the shifts within the last month. The 64u and 128u fluctuations, and the time intervals between them, are of particular interest. I'm looking for patterns.


**Calculating Cycle Durations**

\n\n

I've begun calculating the intervals between the 64u and 128u occurrences in 2025. It appears there is a burst in early August, and I'm analyzing the implications of this event.  I've found a median interval, and am using it to predict the next order date. I'm focusing on evaluating the risk, which is currently the main subject of thought.


**Predicting Future Orders**

\n\n

I've been working to predict future order dates for this product, using interval analysis. I'm focusing on the current date, 2025-10-13, and the last order's date, 2025-10-09, to calculate the risk, which is currently "RISQUE OUI". The next order is predicted for early November. The last order of 64u and the one before that of 128u adds complexity.


**Determining the Order Quantity**

\n\n

I've shifted my focus to the quantity of the next order. Given the recent 64u order and the historical pattern of 64u and 128u, I'm analyzing the potential for either. The order of October 9th was only 64u, while monthly consumption is around 128u. I also noted the monthly replenishment cadence. The main question: should the next order be for 64u or 128u?


**Deciding Order Quantity**

\n\n

I'm now zeroing in on the quantity, considering the 64u order placed four days ago. Given the historical data, especially the August pattern, another order may be needed soon. I'm focusing on the "RISQUE OUI" constraint, especially if the cycle needs replenishment. I also consider the possibility of ordering either 64u or 128u. I also noted 128u is more frequent.


**Reassessing the Recommendation**

\n\n

My current focus is on reconciling the "RISQUE OUI" trigger with the recent 64u order on October 9th. Although the predicted next order date is in early November, the rule suggests I should consider ordering now. I am weighing the median order quantity, 64u, against the potential need for 128u, particularly given the monthly consumption pattern and possible need for replenishment.


**Recommending an Order Quantity**

\n\n

My assessment is now focused on the quantity of the current order. Taking the "RISQUE OUI" constraint into account, and with a predicted order date in early November, I am looking at the historical data, specifically the recent 64u order. Considering the pattern of monthly consumption, the correct decision appears to be recommending a 64u order, since this is the median and the last order was relatively small.


**Finalizing the Recommendation**

\n\n

My analysis has concluded. Considering the "RISQUE OUI" trigger and the recent 64u order, my recommendation is to order 64u. This aligns with the median order quantity and the observed monthly cycle. The high confidence indicates the decision meets the needs, given the parameters.


**Summarizing the Findings**

\n\n

My analysis has progressed, revisiting the recommendation. The calculations suggest a 64u order is appropriate, given the "RISQUE OUI" trigger. I'm confident in this decision because it's based on a robust historical median. The monthly cycle confirms this.


**Concluding the Analysis**

\n\n

My final decision is confirmed. Considering the recent order on October 9th and the predicted timing, I'm recommending another 64u order. The data shows a regular pattern, and the median order quantity aligns with the ongoing consumption, minimizing risk of stockout. The confidence in this order is very high.


**Refining Cycle Length**

\n\n

I've revised the cycle length calculations, using the latest interval data. Excluding longer gaps, the median interval is closer to 22 days, which shifts the predicted next order date slightly. This also affects the "days until next" calculation. Still, the risk trigger remains active, thus, the analysis continues to recommend a 64u order.


**Confirming the Conclusion**

\n\n

My analysis has led to a confident recommendation. Based on the 22-day cycle and the recent order, I'm sticking with ordering 64u. The historical data and the short time since the last order support this decision. Given the risk criteria, ordering now is necessary.


**Revising Interval Calculations**

\n\n

I've refined my cycle length, incorporating all available interval data. Excluding unusually large gaps, the median interval duration has been updated to 22 days. Consequently, this slight adjustment influences the predicted order date, shifting it to a later date. Despite this change, the established risk trigger remains active, and my recommendation for a 64u order persists.




</details>

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM: 224u vs Médiane: 224u (Réel: 112u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 224u
- 📊 **Baseline calculée**: 224u
- 📊 **Médiane historique**: 224u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 112u (100.0%)
- 📉 **Erreur Médiane**: 112u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 224u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 21 jours avec une période d'inactivité saisonnière constatée d'août à octobre.
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-08-05
- **Prochaine prédite**: 2025-11-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 448u

**🧠 Raisonnement LLM:**
L'historique montre une cyclicité de 21-28 jours en période active, mais avec un arrêt récurrent entre juillet/août et novembre. La dernière commande date d'il y a 69 jours (5 août 2025). Bien que le volume exceptionnel d'août (672u au total) ait pu couvrir la consommation estivale, un réapprovisionnement conforme au pattern de reprise observé en novembre 2023 est imminent. La quantité recommandée de 224u s'aligne sur la tendance haussière des volumes unitaires de 2025 par rapport à 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 960 tokens
- **Output**: 3,874 tokens
- **Total**: 4,834 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating historical trends**

\n\n

I'm currently focused on analyzing the historical sales data for [PF2996]. Recent activity includes a significant jump in August, with 672 units moved over two days. Before that, the sales volume was lower, with 112 units sold on 2024-07-08 and 224 units on 2024-06-11, about a month prior.


**Reviewing Sales Predictors**

\n\n

My analysis has progressed. I've calculated the median inter-order time at approximately 21 days, based on 2024 data. The last order for [PF2996] was on August 5th, 2025; therefore, roughly 69 days have passed since the last order. This suggests the product may be outside of its typical order cycle. I'm now cross-checking this against other influencing factors.


**Assessing Order Anomalies**

\n\n

I've deepened my investigation, focusing on the product's ordering behavior. Observing the 2024 and 2023 trends reveals a potential seasonal pattern, with no orders in August/September/October of 2024. Consequently, I hypothesize that a new order might align with the November 2023 schedule. Since the last order was in early August and 69 days have elapsed, the product appears to be overdue based on a standard 21-day cycle, raising a potential risk.


**Predicting future needs**

\n\n

My analysis has evolved further, and I've focused on the demand pattern. I've noted a strong cluster of orders in August 2025, totaling 672 units, which is notably higher than the previous 2024 orders, most of which fell in the 112-224 unit range. Considering the sales data and potential seasonal impact from August to October, I assess a likely restock in the coming month, suggesting an order for about 224 units would be a good estimation.


**Determining order frequency**

\n\n

My analysis has refined further, highlighting both a cyclical pattern and potential seasonal dormancy. The 2024 orders clustered around a ~21-day cycle, however, there was a complete halt between August and October. Now, with 69 days since the August 5th order, and considering the looming November 2023 order, I assess a likely near-term restock, and I am recommending a 224 unit order.


**Evaluating ordering behavior**

\n\n

My analysis has led me to a refined conclusion. I've noted an observed pattern of roughly 21-28-day cycles when active, interspersed with summer/autumn lulls. Given that it has been 69 days since the last order, and referencing November 2023, I predict an imminent restock. Based on the upward volume trend, I recommend ordering 224 units to meet near-term demand.


**Predicting the Restock Time**

\n\n

My analysis has evolved, considering a larger volume order in August. However, it seems that there's sufficient supply until December, making the immediate risk low, as the last order was 69 days ago, well past the usual 21-day cycles. Therefore, I will currently recommend a "no order" situation.


**Analyzing Restock Requirements**

\n\n

My analysis has evolved again, now with a refined perspective on the product's ordering. The key is in the 2023 vs. 2024 patterns. The order cycle's median is ~21 days. The last order was 69 days ago, making a new order essential. I'm focusing on the significant August 2025 volume and suspect it will require another order. I recommend ordering 224 units due to the uptick in demand.


**Determining the best quantity**

\n\n

My analysis has evolved again, now focusing on the quantity. Despite the 69-day gap since the last order, there's a strong indication that the August orders, totaling 672 units, are sufficient to last until December. Given the established ~21-day cycle, I predict no need to order immediately. Therefore, a "no order" stance is the best recommendation.


**Finalizing quantity recommendations**

\n\n

My analysis has concluded. Despite the 69-day gap since the last order and the typical 21-day cycle, the significant August order suggests sufficient inventory until December. Therefore, I will recommend no immediate action, adhering to the "no order" stance, as the immediate risk is low based on the data.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:37:17: 64u
- 2025-09-16 09:22:58: 128u
- 2025-08-12 09:46:11: 64u
- 2025-08-05 11:52:23: 64u
- 2025-08-04 08:50:19: 128u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 12:49:47: 64u
- 2024-06-11 06:48:14: 192u
- 2024-05-21 13:18:20: 128u
- 2024-04-23 07:54:51: 64u
- 2024-04-09 09:07:56: 64u
- 2024-03-19 08:47:39: 64u
- 2024-02-13 10:12:54: 128u
- 2024-01-16 13:29:59: 128u
- 2023-11-29 10:59:25: 192u
- 2023-11-07 14:55:48: 128u

**✅ Quantité LLM**: 64u (confidence: high)
**📊 Quantité Réelle**: 128u

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 11:52:23: 448u
- 2025-08-04 08:50:19: 224u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-08 06:47:45: 112u
- 2024-06-11 06:48:14: 224u
- 2024-05-21 13:18:20: 224u
- 2024-05-16 11:00:25: 112u
- 2024-04-23 07:54:51: 112u
- 2024-04-09 09:07:56: 224u
- 2024-03-19 08:47:39: 112u
- 2024-03-12 11:47:36: 112u
- 2024-02-13 10:12:54: 112u
- 2024-01-16 13:29:59: 112u
- 2023-12-27 07:11:21: 112u
- 2023-11-07 14:55:48: 112u

**✅ Quantité LLM**: 224u (confidence: medium)
**📊 Quantité Réelle**: 112u

</details>




---

## False Positives (1)

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
| [PF2997] ITM BO VIN YOGORETTE PET 450 | 112 | Stock prédit: 84.5u (9j restants) → prédit 112u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:49:20.164Z*
