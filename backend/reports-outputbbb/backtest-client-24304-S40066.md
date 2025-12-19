# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S40066
- **Date commande** : 2025-11-03 12:14:48
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 29
- **Tokens**: 64,411 input + 45,359 output = 109,770 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 39.3% | 28 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 56.4% | Score équilibré global |

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
| **MAE** | 0.73 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 44.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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

## True Positives (11)

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
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bi-mensuelle régulière le lundi (cycle de 14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle de réapprovisionnement très stable de 14 jours (ou un multiple, comme les 28 jours observés entre août et septembre), se produisant systématiquement le lundi. La dernière commande datant du lundi 20 octobre, la prochaine est prévue pour le lundi 3 novembre 2025. La quantité modale étant de 1 unité, celle-ci est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,179 tokens
- **Output**: 1,273 tokens
- **Total**: 3,452 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the product data for the NOD02 limonade. Specifically, I am analyzing the sales data from October, looking closely at the units sold, which appear to be minimal. I'll be projecting future sales based on these initial results, within the 30-day horizon, while accounting for the recent sales history.


**Calculating Order Prediction**

I've just finished the calculations. The median interval between orders is 14 days, with the next order predicted for tomorrow, November 3rd, within the 30-day window. Considering the minimal sales and regular Monday orders, the risk of stockout is present. Furthermore, I have high confidence in this first phase of the analysis.


**Determining Quantity and Strategy**

I've just finalized the quantity recommendation: one unit, with high confidence. The client exhibits a precise 14-day cycle, mostly Mondays. The last order was on October 20th. Given the predicted next order date of November 3rd, and the consistently low order quantities, I am recommending just one unit.


**Concluding The Recommendation**

I've now thoroughly analyzed all data points, including dates, intervals, and quantities. The conclusion remains firm: I recommend ordering a single unit with high confidence, reiterating the 14-day cycle and the predicted order date of tomorrow. The product is NOD02, with sales history dating back to August.




</details>

</details>


<details>
<summary><strong>2. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.8u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bimensuelle régulière le lundi (cycle de 14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: Le client commande systématiquement le lundi. La dernière commande date d'il y a 13 jours.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec une médiane de 14 jours détectée sur 4 intervalles. La date théorique de la prochaine commande est le 2025-11-03 (demain), ce qui place le besoin dans l'horizon immédiat. Bien que les volumes soient en légère diminution (de 3u à 1u), la quantité médiane de 2u est retenue pour assurer la disponibilité produit en accord avec la philosophie B2B.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,203 tokens
- **Output**: 1,681 tokens
- **Total**: 3,884 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Kombucha Data**

My analysis of KOKO Kombucha Raspberry Hibiscus sales is ongoing. I've noted a single unit sold on October 20th and another on September 22nd. Tracking this over the next 30 days is crucial to discern trends.


**Anticipating Product Demand**

I'm now calculating the projected next order date for the KOKO Kombucha. Based on the sales data, the median cycle is 14 days, indicating a strong buying pattern. Using this, the estimated next order date is tomorrow, November 3rd, within the 30-day window. This triggers a "risk" flag, as I anticipate imminent demand. I am now looking at the range of the quantities ordered.


**Forecasting Order Quantities**

I've examined the order quantities, which range from 1 to 3 units. A clear downward trend appears, going from 3 to 1 unit. Considering a "risk = yes" flag and the client's past Monday-based orders, I will choose 2 units for the next order. This aligns with the median while accounting for the recent decrease, adhering to a "safe-rather-than-sorry" approach.


**Calculating Order Quantity Decisions**

I have analyzed the historical data and refined the recommendation. While a downward trend is evident in order quantities, I am recommending 2 units for the upcoming order. This decision balances the decreasing trend with the need to ensure availability, considering the regular 14-day cycle and the inherent uncertainty in these small-volume B2B orders. The "risk=yes" flag further reinforces this approach.


**Confirming Quantity Recommendation**

I'm now completely confident that the predicted order date is tomorrow, November 3rd. Given this, I am leaning towards a recommended order of 2 units. This takes into account both the median quantity and the slight downward trend in recent orders, prioritizing a cautious approach. The small volume and the "risk = yes" flag make this the optimal strategy.




</details>

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bimensuelle extrêmement régulière tous les 14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: Commandes effectuées systématiquement le lundi matin
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement est parfaitement stable à 14 jours. La prochaine commande est prévue demain (2025-11-03). Concernant les quantités, on observe une tendance à la baisse passant de 6u à 2u. Les deux dernières commandes se sont stabilisées à 2u, ce qui constitue désormais le volume de référence pour ce client.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,204 tokens
- **Output**: 1,352 tokens
- **Total**: 3,556 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Sales Trends**

I'm currently focused on the sales data for the ReBEL paprika chips. Specifically, I'm noting the recent sales history, which reveals only two units sold on both October 6th and October 20th. I'm keen to understand the cause of this recent fluctuation, and if these numbers are indicative of future performance.


**Predicting Inventory Needs**

My analysis now extends to forecasting demand. With the next expected order just a day away, the risk of stockout is high. I'm focusing on the downward sales trend, noting a decrease from six units to a consistent two. The historical data suggest the customer typically orders small quantities with a 14-day cycle.


**Projecting Demand Quantities**

I've just finished the deep dive into the historical sales data. My current assessment projects the customer will reorder the ReBEL paprika chips on November 3rd, tomorrow, specifically requesting 2 units, based on the recent stable sales. The cycle is consistent at 14 days. I am highly confident in this forecast.


**Calculating Predicted Reorder**

I'm now deep in the numbers, crunching the recent sales data. The 14-day cycle is rock-solid, placing the next order for ReBEL paprika chips on tomorrow, November 3rd. With the recent trend of two units, and the B2B rule, I'm confidently recommending the customer reorders 2 units.




</details>

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.8u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande tous les 14 jours avec une régularité parfaite le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle extrêmement régulier de 14 jours détecté sur l'ensemble de l'historique récent. La prochaine commande est attendue pour demain (2025-11-03), ce qui justifie un risque immédiat de rupture. Bien que les quantités montrent une tendance décroissante (dernière à 1u), la médiane de 3 unités est préconisée pour assurer la disponibilité produit conformément à la politique B2B.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,204 tokens
- **Output**: 1,279 tokens
- **Total**: 3,483 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering chip inventory trends**

I'm currently tracking the sales of the ReBEL chips. Recent data points to a fluctuating demand for the thym/romarin flavor, with the last five observations showing variations between 1 and 5 units sold. The most recent data, from 2025-10-20, indicates only 1 unit sold. I am reviewing the data from the previous dates, like the 3 units on 2025-10-06, to establish a pattern.


**Evaluating sales predictions**

The 14-day cycle is remarkably consistent. Given today's date, 2025-11-02, the next order is expected tomorrow.  Considering the slight downward trend in sales, and the recent low of 1 unit, the prediction will be revised. I am planning on using the current data in a baseline calculation.


**Determining the order quantity**

I've just finalized the order prediction. Analyzing the data, the frequency of orders is consistently every 14 days, on Mondays. My next order is expected on November 3rd, with the current date being November 2nd. Despite the decreasing sales, I'm recommending 3 units to ensure availability, considering a median of 3 and an average of 2.8 units. My confidence is medium, factoring in the slight downward trend.


**Recommending a final quantity**

Based on the finalized analysis, I've confirmed the 14-day order cycle, anticipating the next order tomorrow, November 3rd. While there's a slight downward trend in recent sales, the median and average hover around 3 units. Therefore, I will recommend ordering 3 units. My confidence is high regarding the cycle, but medium considering the trend.




</details>

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel (14 jours) extrêmement régulier le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement est parfaitement prévisible avec un intervalle constant de 14 jours (tous les deux lundis). La dernière commande datant du 20 octobre, la prochaine est prévue pour demain, le 3 novembre 2025. En termes de volume, le client commande quasi systématiquement 2 unités, à l'exception d'une fois, ce qui rend la prédiction de 2 unités très fiable.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,198 tokens
- **Output**: 1,503 tokens
- **Total**: 3,701 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Recent Product History**

I'm focused on the product's sales history, specifically for JOY02. I've noted the dates and units sold for this jam. Now, I'm charting the data to spot trends, starting with the last two recorded sales figures. The aim is to get a handle on the cadence and quantity.


**Predicting Future Demand Patterns**

Now I'm calculating the median cycle length, which appears to be a consistent 14 days. Based on this, I'm predicting the next order date for JOY02. My confidence is high due to the regular cycle. The small order quantities suggest a small-scale customer, and I've noted the risk of a stockout.


**Finalizing Quantity and Timing**

I've just finished the analysis, and the data is clear. The customer typically orders 2 units every 14 days, specifically on Mondays. The next order is due tomorrow. Based on the consistent pattern, I'm recommending 2 units with high confidence. The system is ready to go!


**Evaluating Data and Output**

I'm now focusing on the data's integrity, ensuring a single JSON object. Also, I've checked all values for accuracy, including frequency, outliers, and trends. Finally, the next order is due tomorrow, confirming the 14-day cycle with 2 units. The analysis is now refined.




</details>

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bi-hebdomadaire régulière (lundi)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement robuste avec une médiane de 14 jours, toutes les commandes ayant lieu le lundi. La dernière commande date du 20 octobre, ce qui place la prochaine échéance au lendemain de la date actuelle (3 novembre). La quantité est systématiquement de 1 unité sans aucune exception.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,199 tokens
- **Output**: 838 tokens
- **Total**: 3,037 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking the Timeline of JOY03**

I am now focused on projecting the timeline for the JOY03 product. I have observed the initial interval of 14 days and its recurrence. However, there has been an extension to 28 days for the last listed interval. I'm exploring the underlying cause of this change to discern if it's a pattern or an outlier.


**Calculating Future Orders of JOY03**

I am now focused on the next order. Considering the bi-weekly pattern, the projected order date is tomorrow, November 3rd. Since the quantity is consistently one unit per order, I recommend one unit for the next order. I'm feeling confident, given the pattern except for a single 28-day gap.


**Recommending the Next Order**

I've just finalized the recommendation. Given the strong bi-weekly pattern, my prediction remains that the next order is due tomorrow. The quantity is a straightforward one unit, consistently observed. Despite the initial 28-day gap, the pattern has resumed. Availability is the priority here, so this feels like a safe call.




</details>

</details>


<details>
<summary><strong>7. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.33u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Intervalle irrégulier entre 14 et 56 jours
- **Cycle médian (jours)**: 35
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian calculé à 35 jours basé sur deux intervalles (14j et 56j). La date de commande prédite (24/11/2025) se situe dans l'horizon des 30 prochains jours (J+22). Les quantités historiques sont très faibles et constantes (1 à 2 unités). On préconise 1 unité pour couvrir le besoin immédiat conformément à la règle de la commande unique la plus probable.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,146 tokens
- **Output**: 1,326 tokens
- **Total**: 3,472 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Dates**

I've been looking at the production dates for JOY04, and the recent history shows some interesting patterns. There was a single unit produced on both the 20th of October and the 25th of August, both Mondays. I'm now trying to figure out why production is so sporadic.


**Assessing Production Intervals**

I'm now calculating the intervals between production runs. There are only two intervals available, 14 days and 56 days. Using the average of 35 days from the two observed cycles, I estimate the next production run will be around November 24th, which is within the 30-day window. I'm rating my confidence in this prediction as low.


**Projecting Order Quantity**

I've determined a predicted order date of November 24th, about 22 days out. My data supports recommending a quantity of "1u," aligning with recent order history. Considering the sporadic production, confidence remains low, but the prediction is within the 30-day window.


**Formulating the Recommendation**

I've finalized my analysis and am ready to make a recommendation. The predicted order date remains November 24th, about 22 days out. I'm suggesting a quantity of "1u," based on the trend of recent orders. Given the very limited historical data, my confidence in this prediction continues to be low, though the timing falls within the specified window.




</details>

</details>


<details>
<summary><strong>8. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier identifié le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Le cycle de 14 jours est très clair sur les commandes récentes (tous les lundis). La prochaine commande est prévue pour demain (2025-11-03), soit dans l'horizon immédiat. Bien que les deux dernières commandes soient de 1u, l'historique N-1 et la commande d'août montrent une base régulière de 2u. Pour garantir la disponibilité B2B sur ce petit volume, on préconise 2u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,357 tokens
- **Output**: 1,963 tokens
- **Total**: 4,320 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Sales Data**

I'm now digging into the sales figures for the MF Tarti Pomme Raifort product. The last three months show a concerning trend of low unit sales, only one or two units each time. This contrasts with the previous year's sales figures from the same time period. Further investigation is needed to determine the cause of the decline.


**Forecasting Future Orders**

I'm using the sales data to forecast the next order of the MF Tarti Pomme Raifort. The 14-day cycle seems most probable, pointing to an order due tomorrow. The risk assessment flags "OUI," and I have high confidence given the recent pattern. I'll need to consider how to account for this in future predictions.


**Revising Quantity Predictions**

I've re-examined the quantity, given the low recent sales, including last month. While the recent orders show 1u and 1u, past performance suggests 2u is a safer bet, particularly in a B2B context. I'm accounting for the "Mieux vaut trop que pas assez" philosophy and recommending 2u for tomorrow's order.


**Confirming the Order Timing**

I've re-evaluated the timing. Considering the 14-day cycle and the last order date, an order is due tomorrow. This confirms the "OUI" risk flag. Based on the historical data, the recent trend of 1u, 1u, and 2u suggests 2u is a safe bet for this product. I need to make sure the data is accurate.


**Calculating the Next Date**

I'm now determining the exact day to expect the next order. Considering the 14-day cycle and the last order date, an order is due tomorrow, which aligns with a Monday. This confirms the "OUI" risk flag. I'm finalizing the JSON structure with the product details and the recommended quantity, including the outliers and trend analysis.




</details>

</details>


<details>
<summary><strong>9. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel ultra-régulier le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Dernière commande effectuée un lundi, prochaine prévue un lundi, correspondant parfaitement au cycle de 14 jours.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de ce produit est extrêmement stable avec une commande de 1u tous les 14 jours (5 occurrences consécutives le lundi). La prochaine commande est prévue pour demain (2025-11-03). Bien que l'historique N-1 affiche des quantités plus importantes (3u), le mode opératoire actuel du client est passé à un réapprovisionnement plus fréquent (tous les 14j au lieu de ~30j) mais plus faible en volume (1u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,463 tokens
- **Output**: 2,833 tokens
- **Total**: 5,296 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Data Points**

I've been analyzing the sales data for the MF0033 product, specifically looking at the 'MF Tarti Poivron chili 250g'. I've taken note of the last few data points, focusing on the Monday sales from the past few months. Right now, I'm trying to identify any patterns or trends.


**Projecting Future Orders**

My analysis indicates a highly predictable cycle of 14 days for the 'MF Tarti Poivron chilli 250g' product. Given the last order on October 20th, I've calculated the next order is due tomorrow, November 3rd. There's a definite risk of stockout within the next 30 days. The confidence level on this is high, given the regular pattern.


**Evaluating Quantity Discrepancies**

I've moved on to refining the order quantity prediction. While the 14-day cycle is rock solid, the recent consistent order of 1 unit contrasts with previous years, where the customer ordered 2-4 units. I'm wavering between predicting 1u, based on recent trends, or 2u, considering the historical context and the "better safe than sorry" principle. I am looking for ways to justify a quantity other than 1.


**Predicting the Order Quantity**

The choice of order quantity still hangs in the balance. While the 14-day cycle is incredibly consistent and the last five orders have been for 1 unit, prior orders from a year ago averaged 2-3 units. I am trying to determine if the customer's needs have genuinely decreased or if the recent pattern is an anomaly. The risk of under-ordering is there, so I am leaning toward recommending 1u, but highlighting the historical context.


**Solidifying the Recommendation**

The final call is 1u for the next order. I've considered historical data, the consistent 14-day cycle, and the current consumption pattern. While N-1 showed higher volumes, the recent rigidity of the 1u orders is compelling. I'm going with the data. The next order is due tomorrow, so stockout risk is real.


**Summarizing the Order History**

I've been meticulously reviewing the historical order data, focusing on the past 12 months. Analyzing the customer's habits, I've noted a transition from monthly orders of 2-3 units to a bi-weekly pattern of 1 unit. This shift in frequency is key. I've re-confirmed that my recommendation of 1u remains valid.


**Finalizing Quantity & Timing**

I've completed the order prediction. The consistent 14-day cycle is rock-solid, and the next order is due tomorrow, November 3rd. While N-1 showed higher volumes, the last five orders have been for 1 unit, and I'm sticking with that.




</details>

</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle ultra-régulier de 14 jours (tous les deux lundis)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-20
- **Prochaine prédite**: 2025-11-03 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande systématiquement le lundi. La date actuelle est un dimanche, la commande est attendue demain.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle est parfaitement stable à 14 jours (médiane exacte). La prochaine commande est prévue pour le 2025-11-03, soit dans 1 jour, car la dernière commande date du 2025-10-20. Au niveau des quantités, on observe une alternance (3u, 1u, 3u, 1u, 2u) avec une moyenne de 2u. Cependant, l'historique N-1 sur cette période (novembre/décembre) montre des volumes légèrement plus élevés (4u à 5u). Pour assurer la disponibilité B2B, je recommande une quantité de 3u, se situant dans le haut de la fourchette récente pour s'aligner progressivement sur la saisonnalité N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,463 tokens
- **Output**: 1,793 tokens
- **Total**: 4,256 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Sales Trends**

I'm analyzing the sales data for MF0027, the MF Tarti Aubergine 250g. I've pinpointed a consistent pattern of low-volume sales, specifically noting 1 to 3 units sold on certain dates. It appears to be a repeating cycle, I must determine the reasoning behind the sales volume.


**Calculating Imminent Demand**

I've pinpointed a recurring 14-day sales cycle for MF0027, with the last order on October 20, 2025. Given today's date, November 2, 2025, my forecast places the next order tomorrow. Considering a low average of 2 units sold recently, compared to last year's higher volumes, a stock shortage is a risk.


**Predicting Future Orders**

I'm synthesizing the recent sales data, now focusing on the alternating low-volume pattern. Given the cycle and the "in doubt, order" philosophy, I'm leaning toward recommending 3 units for the next order. This aligns with the recent history of 3-unit orders, balancing risk.


**Calculating Order Quantities**

I'm now calculating the recommended quantity for the upcoming order, due tomorrow. The cycle is confirmed at 14 days. I'm focusing on the recent alternating pattern of 3, 1, 3, 1, 2 units. Given the "in doubt, order" principle and N-1 data, I'm leaning toward 3 units to mitigate any potential stock issues.


**Formulating Final Recommendations**

I'm consolidating the analysis, particularly the regular 14-day cycle and the alternating quantities of 1, 2, and 3 units. Comparing this to last year's higher volumes, and considering today's date, I'm leaning toward a recommendation of 3 units, as a practical solution.




</details>

</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.25u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane détectée de 44 jours
- **Cycle médian (jours)**: 44
- **Dernière commande**: 2025-08-11
- **Prochaine prédite**: 2025-09-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 44 jours. La dernière commande datant du 11 août 2025, le client est techniquement en retard de plus de 80 jours sur son cycle habituel. L'historique N-1 affiche une commande de 2 unités en novembre 2023. Dans une logique de disponibilité B2B (DANS LE DOUTE ON COMMANDE), on recommande 2 unités, correspondant à la quantité modale historique (2 ou 3 unités).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,273 tokens
- **Output**: 1,635 tokens
- **Total**: 3,908 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Sales Data Patterns**

I'm currently focused on the sales data for product MF0032. Analyzing its history, I've noted the recent sales volume of 1 unit on August 11, 2025. Delving deeper, I'm examining the N-1 history, including the 2-unit sale in November 2023, along with several 2-3 unit sales throughout 2024 to establish a predictive model for *one* unit sale.


**Assessing Order Recurrence**

I've calculated the median cycle time for product MF0032 based on past orders, which is approximately 43.5 days. Comparing this to the time since the last order on August 11, 2025, a significant discrepancy arises: it's been about 83 days, exceeding the median cycle. I'm now cross-referencing this with the N-1 data from November 2023 to identify potential seasonality or a recurring pattern suggesting a need for a proactive intervention. My initial assessment leans towards a high-risk scenario.


**Determining Quantity Prediction**

The focus is now sharpening on the quantity forecast for the next order. Reviewing historical data, a quantity of 2 appears most reasonable, aligning with prior patterns. While the median cycle suggests an earlier order, the upcoming November date, where a previous order of 2 units occurred, increases the likelihood of a 2-unit order. I'm leaning toward this prediction with low-to-medium confidence.


**Determining Next Order Quantity**

I've examined the history and calculated a median quantity of approximately 2 units, with low volatility. Given the historical data and recent date, I'm now confidently predicting an order for 2 units. This aligns with the historical pattern, considering we're nearing the November timeframe. The confidence in this forecast is elevated due to the stable demand.




</details>

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u
- 2025-08-11 06:51:13: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 2u
- 2025-10-06 09:27:30: 2u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 3u
- 2025-08-25 10:25:08: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 3u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 2u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 2u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 07:22:24: 5u
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 2u
- 2024-05-13 13:42:50: 2u
- 2024-03-19 14:47:15: 3u
- 2024-02-09 08:53:20: 2u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 07:22:24: 3u
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 4u
- 2024-06-11 06:44:54: 2u
- 2024-05-13 13:42:50: 4u
- 2024-04-15 11:54:11: 2u
- 2024-03-19 14:47:15: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 3u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 3u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 07:22:24: 4u
- 2024-09-03 09:43:33: 4u
- 2024-08-06 09:10:28: 5u
- 2024-06-11 06:44:54: 4u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 5u
- 2024-03-19 14:47:15: 5u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 5u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 3u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (17)

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.3u (5j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.4u (8j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | Stock prédit: 1.3u (4j restants) → prédit 5u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | Stock prédit: -1.0u (-5j restants) → prédit 3u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: -0.9u (-5j restants) → prédit 2u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 4 | Stock prédit: 2.8u (27j restants) → prédit 4u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 4 | Stock prédit: 3.0u (36j restants) → prédit 4u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Stock prédit: 2.1u (29j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.6u (-9j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 1 | Stock prédit: -1.2u (-45j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 24 | Stock prédit: -0.6u (-26j restants) → prédit 24u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T09:02:37.345Z*
