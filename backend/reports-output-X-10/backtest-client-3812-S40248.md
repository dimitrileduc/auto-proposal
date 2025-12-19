# Rapport Backtest - Client ÖKORING HANDELS GMBH

## Contexte

- **Client** : ÖKORING HANDELS GMBH (ID: 3812)
- **Commande réelle** : S40248
- **Date commande** : 2025-11-12 07:35:42
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 21,993 input + 36,302 output = 58,295 total


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
- **Pattern temporel**: Commande tous les 13-14 jours (principalement le mardi)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-04
- **Prochaine prédite**: 2025-11-18 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle très régulier de 14 jours a été identifié sur les commandes les plus récentes (14j et 13j). La prochaine commande est prévue sous 7 jours, ce qui entre dans l'horizon de 30 jours. Concernant la quantité, le client commande systématiquement des multiples de 16 (16, 32, 48), suggérant un conditionnement par carton de 16. La médiane et la dernière commande étant à 16, nous maintenons ce volume pour la prochaine livraison.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,461 tokens
- **Output**: 1,752 tokens
- **Total**: 4,213 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I've been examining the recent sales data for the MF Tarti Datte chili. The 30-day horizon is proving useful. Sales on the 4th of November were 16 units, and looking back further, I see a pattern to understand trends. The figures from October are particularly insightful as I build my forecast.


**Projecting the Next Order**

Now, I've dug into the historical data for the MF Tarti Datte chili, calculating the intervals between orders. The median interval is approximately 14 days, derived from recent order patterns. Based on this, I'm predicting the next order to be around November 18th, well within the 30-day window. I've flagged this as a high-confidence, risky but likely scenario.


**Determining the Order Quantity**

I'm now zeroing in on the anticipated order size for the MF Tarti Datte chili. Analyzing the sales figures, I see a clear pattern of orders in multiples of 16 units. The median order quantity is 16, with some variation, though the most recent data strongly suggests a baseline of 16. I'm focusing on that for the upcoming order.


**Refining the Forecast Parameters**

My analysis now focuses on the "MF Tarti Datte chili" product, specifically the intervals. The median interval between orders is 14 days, with the next predicted order date being around November 18th. Sales figures indicate ordering patterns in multiples of 16. The high confidence level reflects the consistent trends observed.


**Synthesizing Order Parameters**

Now, I've consolidated my findings for the "MF Tarti Datte chili." Based on recent data, I'm predicting an order for 16 units around November 18th. The order interval is consistently 14 days, with a history of units consistently based on a baseline of 16. The high confidence level reflects the consistent trends.




</details>

</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 32u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 16u
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
- **Pattern temporel**: Commande bi-mensuelle tous les 14 jours environ
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-11-04
- **Prochaine prédite**: 2025-11-18 (dans 7j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes régulières en début de semaine (lundi au mercredi)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle très régulier détecté avec une médiane de 14 jours entre les commandes. On observe un pattern d'alternance systématique des quantités (16u, 32u, 16u, 32u, 16u) qui correspond probablement à une gestion de stock par lot de 16 (cartons). La dernière commande étant de 16u en date du 04/11, la prochaine commande est attendue autour du 18/11 pour une quantité de 32u suivant la logique d'alternance du client.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,462 tokens
- **Output**: 1,931 tokens
- **Total**: 4,393 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the sales data for MF Tarti Mangue Curry, specifically focusing on the last week. The figures from last Tuesday, 16 units, are the most recent. My immediate goal is to extrapolate a trend to forecast potential sales for the next 30 days. I'm focusing on identifying any significant fluctuations.


**Forecasting Next Order**

I've calculated the median cycle length at approximately 14 days, accounting for the day-of-week sales consistency. Given the last order on 2025-11-04, the next one is predicted for 2025-11-18. Considering today is 2025-11-11, I'm now assessing the risk of a stockout within the next seven days, as well as the possible sales volume.


**Evaluating Purchase Quantities**

I'm now analyzing the sales quantity history. The alternating pattern of 16 and 32 units intrigues me, suggesting a potential packaging constraint. Given the bi-weekly ordering, and to mitigate stockout risk, I'm leaning toward a purchase of 32 units, rather than the median of 16.


**Refining Purchase Prediction**

I'm now prioritizing the next purchase quantity, focusing on mitigating stockout risks. Based on the consistent bi-weekly orders and the alternating pattern of 16 and 32 units, I've decided to recommend an order of 32 units to account for the current sequence. My confidence remains high due to the clear pattern.


**Refining Order Quantity**

I'm now completely committed to predicting the next order. Given the 16-32 pattern, which aligns with the bi-weekly schedule, I maintain my recommendation of 32 units. The confidence in this prediction is high, based on the consistency of the observed pattern. The reasoning is clear, and the data is consistent.




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
- **Pattern temporel**: Historique limité avec un seul intervalle de 70 jours, application du cycle de sécurité de 30 jours
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-11-04
- **Prochaine prédite**: 2025-12-04 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec seulement deux points de données (un seul intervalle calculable de 70 jours), l'historique est insuffisant pour évaluer une fréquence robuste. En application de la règle 'Dans le doute, on commande', un cycle par défaut de 30 jours est appliqué, prédisant une commande le 04/12/2025. La quantité recommandée est basée sur la médiane stable de 16 unités observée jusqu'ici.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,378 tokens
- **Output**: 1,874 tokens
- **Total**: 4,252 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Olive Inventory**

I'm currently tracking the MF0031 olive product, focusing on its inventory levels. Recent data from November 4th shows 16 units on hand. Considering the 30-day horizon, I'll need to analyze the consumption rate to project future needs and avoid stockouts. Further data from August will be crucial.


**Calculating Replenishment Cycles**

I've been analyzing the MF0031 olive product's replenishment cycle. With only two data points, the historical interval is 70 days, but with only one full interval to use in the analysis, I'm considering using the default 30-day cycle as instructed. This suggests a potential need for an order within the next 30 days, creating a risk, which I've flagged.


**Predicting Order Placement**

I'm now zeroing in on the predicted order date for the MF0031 olives. While the historical interval points to a date in January, my analysis prioritizes the default 30-day cycle due to insufficient data, which flags a risk. Consequently, I anticipate a potential order around December 4th. This approach is intended for safety.


**Evaluating Frequency and Risks**

I'm now prioritizing the safety-first approach. Since my data only gives one interval, my analysis now definitively adopts the 30-day default cycle. This confirms my earlier risk detection, predicting a potential order around December 4th. The confidence is, in fact, low. Quantities, however, remain stable, which is a positive.


**Concluding Risk Assessment**

My analysis is now solidified. With just a single interval for the MF0031 olives, the 30-day cycle is the clear path, based on instructions. The predicted order date remains December 4th. Quantity stability increases confidence, but a "low" rating for the overall process remains due to limited historical data.




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
- **Pattern temporel**: Commande régulière tous les 11 jours environ
- **Cycle médian (jours)**: 11
- **Dernière commande**: 2025-10-21
- **Prochaine prédite**: 2025-11-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande médian est de 11 jours. La dernière commande datant du 21 octobre, la prochaine était attendue autour du 1er novembre. Au 11 novembre, le client est en retard de 10 jours sur son cycle habituel, ce qui déclenche un besoin immédiat pour éviter une rupture. La quantité est extrêmement stable (16u systématiques sur les 5 dernières commandes), correspondant probablement à un conditionnement fixe (carton/colis).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,517 tokens
- **Output**: 1,470 tokens
- **Total**: 3,987 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Recent Intervals**

I'm analyzing the interval between past updates for product [MF0044]. The last two recorded intervals were 13 days, calculated from updates on 2025-09-29, 2025-10-08, and 2025-10-21. I'm focusing on these recent trends.


**Predicting Order Imminence**

My calculations indicate a potential late order for [MF0044] as of today, November 11, 2025. Based on recent intervals and a calculated median of 11 days, the predicted order date was November 1, 2025. Given consistent order quantities of 16 units, I have flagged this as a high-risk situation.


**Confirming Risk Assessment**

My analysis confirms the high-risk alert for [MF0044]. The client's predictable 16-unit orders, with a median 11-day cycle, point towards a November 1st order. However, given today's date of November 11, the order is already overdue. The consistent ordering pattern and stable quantity reinforce this assessment, with a high confidence level.


**Evaluating Final Parameters**

I've finalized the analysis of the [MF0044] data. The 11-day median interval indicates an overdue order, as the current date is November 11th, and the predicted date was November 1st. I've re-examined the N-1 data, which supports the consistent 16-unit ordering pattern. Everything aligns, solidifying the high-risk assessment.




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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 29 jours, actuellement en retard de commande
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-11-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian calculé sur l'historique récent est de 29 jours (intervalles de 15 et 43 jours). La dernière commande datant du 2025-10-08, la date théorique de réapprovisionnement était le 2025-11-06. Le client est donc en retard de 5 jours par rapport à son rythme habituel, ce qui justifie une commande immédiate pour éviter la rupture. La quantité est strictement constante à 16 unités sur toutes les commandes récentes, ce qui indique un conditionnement fixe ou un besoin très stable.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,457 tokens
- **Output**: 1,537 tokens
- **Total**: 3,994 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Timeline**

I've been poring over the data for MF0043, specifically the Apfel Meerrettich spread. My focus is on the 30-day horizon, cross-referencing recent history. I've noted a couple of 16u entries in the past, and I'm looking to see how that informs the current forecast.


**Assessing Order Lateness**

My analysis indicates that the client's last order was over a month ago. Based on the 30-day horizon, the predicted next order date of November 6th is already in the past, meaning the client is 5 days late. The risk factor is confirmed as "Oui," with medium confidence. I'm now evaluating the quantity data to finalize my assessment.


**Predicting Quantity and Risk**

Given the consistent 16u order history for MF0043, I'm highly confident in recommending that quantity. The client is 5 days past due based on a 29-day cycle, confirming a "Oui" risk factor. However, the quantity predictability boosts overall confidence.


**Concluding the Assessment**

The final evaluation is complete. The client is 5 days overdue based on a 29-day cycle, confirming a "Oui" risk factor. With the recent, very stable 16u history, I'm recommending a quantity of 16. My confidence level is now very high, and the JSON output is correct.




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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle long de 7 semaines identifié
- **Cycle médian (jours)**: 49
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-11-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 49 jours détecté entre les deux commandes enregistrées le lundi. La prochaine commande théorique tombe le 2025-11-17, soit dans 6 jours par rapport à la date actuelle du 11/11/2025. Les quantités sont parfaitement stables à 16 unités sur les deux occurences, suggérant un conditionnement fixe ou un besoin régulier spécifique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,373 tokens
- **Output**: 1,360 tokens
- **Total**: 3,733 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Schedules**

I'm currently reviewing the production schedules for MF0062, specifically the MF Tarti Betterave rouge. I've noted recent production runs on September 29th and August 11th, both at 16 units. I'm focusing on the November 11th schedule now.


**Evaluating Cycle Intervals**

I'm now calculating the production cycle for MF0062, the MF Tarti Betterave rouge. I have one observed interval of 49 days and the production quantities are consistently 16 units. Considering a 49-day cycle puts the next production on 2025-11-17, within the 30-day horizon. A 30-day cycle is already passed. Risk of rupture is **YES**.


**Predicting Future Orders**

I'm now assessing the production frequency for MF0062, aiming to forecast the next order. I've noted a 49-day cycle based on available data, the 2025-09-29 and 2025-08-11 production runs. Predicted next production date is 2025-11-17, six days away, inside our 30 day horizon.


**Calculating Probable Outcomes**

The recent assessment confirms a 49-day cycle for MF0062, with the most recent order on September 29, 2025. This yields a predicted order date of November 17, 2025, which is in 6 days, and falls within our 30-day horizon. I'm assigning a medium confidence level given the limited data but consistent ordering. The ordered quantity is reliably 16 units.




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

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>6. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 10:19:21: 16u
- 2025-08-11 11:36:10: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: medium)
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

*Rapport généré automatiquement le 2025-12-19T09:34:06.347Z*
