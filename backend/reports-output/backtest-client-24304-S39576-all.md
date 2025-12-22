# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S39576
- **Date commande** : 2025-10-06 09:27:30
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 33
- **Tokens**: 28,997 input + 57,100 output = 86,097 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 64.3% | 28 produits prédits, 18 corrects |
| **Rappel** | 90.0% | 20 produits réels, 18 détectés |
| **F1-Score** | 75.0% | Score équilibré global |

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
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 23.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 22.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
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

## True Positives (18)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle mensuel de 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-20 (dans 15j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes régulières le lundi
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle de commande très régulier de 28 jours (environ 4 semaines). La dernière commande date de 13 jours, la prochaine est estimée dans 15 jours (soit < 30 jours), ce qui justifie une commande. La quantité est stable à 1 unité sur l'historique récent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 817 tokens
- **Output**: 840 tokens
- **Total**: 1,657 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing the Timeline**

\n\n

I'm focused on NOD01's production timeline. The initial data shows a sporadic pattern, with a 28-day interval between the observed production units. My projection will be based on this limited data, focusing on the target date of October 5th, 2025. I need to determine the optimal production schedule to meet this deadline.


**Calculating the Production Needs**

\n\n

Now I'm focusing on the predicted production run. Based on the 28-day cycle, the next production date is projected for October 20th, 2025. Given the current date of October 5th, there are 15 days until the next run. Considering the historical data of 1 unit per cycle, my recommendation is a production quantity of 1 unit. Confidence levels remain high, as the pattern is clear and consistent.


**Predicting the Inventory Needs**

\n\n

My analysis of NOD01 continues. The next predicted production run is on October 20th, 2025, which gives us 15 days from now. The pattern is consistent: one unit per cycle, with a 28-day cadence. The baseline quantity is set to 1, and I am recommending the same, with high confidence in this prediction. No adjustment is necessary, given this stability.




</details>

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier de 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très précis (exactement 28 jours entre les deux occurrences). La date prévue du 20/10/2025 tombe dans 15 jours, ce qui présente un risque de rupture imminent à anticiper. Concernant le volume, on observe une baisse de 2u à 1u. Pour les petites quantités B2B, la priorité est donnée à la stabilité et à la valeur basse du cycle récent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 816 tokens
- **Output**: 1,107 tokens
- **Total**: 1,923 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Historical Data**

I'm currently focused on the historical sales data for NOD02. It looks like there were two sales events, but they are not very recent. I'm trying to decide if the data points are enough for the system to predict future quantities. 


**Calculating Probable Quantity**

I've analyzed the interval between sales, and the cycle seems to be roughly 28 days. The next order date, based on this cycle, is estimated for October 20th. Given today's date of October 5th, there's a risk of needing stock in approximately 15 days. Considering the decreasing trend and the small order history, I'm recommending a quantity of 1.


**Formulating the Recommendation**

I've finalized my analysis of NOD02. Based on the 28-day cycle, the next order is due around October 20th. Given the decreasing trend in past orders (2 then 1 unit), the short history, and the date, I am highly confident recommending a quantity of 1 unit.




</details>

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier de 28 jours (4 semaines)
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle de commande très stable de 28 jours (tous les lundis) pour une quantité constante de 1 unité. La prochaine commande est prévue mécaniquement le 20 octobre 2025, soit dans 15 jours. Le risque de rupture à horizon 30 jours est donc confirmé.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 816 tokens
- **Output**: 1,086 tokens
- **Total**: 1,902 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Sales Trends**

I'm currently focused on the sales data for [NOD03]. It's interesting to note the two instances of single-unit sales. I'm wondering if this product is seasonal. The fact that the sales were on Mondays is also something I intend to look into.


**Calculating Replenishment Timelines**

My analysis of [NOD03] continues. I've computed the median cycle at 28 days, predicting the next order on October 20th. Given the 13 days since the last order and the 15 days until the predicted next order, I've flagged an imminent replenishment need due to the 15-day window falling within the acceptable threshold of 30 days, indicating potential stockout risk.


**Evaluating Current Replenishment**

I've examined the product's historical data and confirmed my earlier predictions. The consistent 28-day cycle for [NOD03] is quite reliable, with orders consistently at a single unit. My calculations pinpoint an imminent need for a replenishment of one unit. While the data set is small, the pattern's strength gives me a medium confidence in my recommendation.




</details>

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: 5u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 5u
- 📊 **Médiane historique**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bimensuelle (14 jours) régulière le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: Le cycle de 14 jours tombe précisément le lundi 6 octobre, soit demain par rapport à la date de l'analyse.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle est extrêmement stable avec une commande tous les 14 jours (un lundi sur deux). La prochaine commande est prévue pour demain. Bien que le volume de la dernière commande ait chuté à 3u, la médiane des 3 dernières livraisons (6, 5, 3) est de 5 unités, ce qui représente le volume de fond habituel pour ce produit.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,517 tokens
- **Total**: 2,412 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Product Data**

I'm focused on the ReBEL chips, specifically the premium bio sea salt variety in the 125g size. Over the last few months, I've noted two key data points on Mondays. These were 3u on September 22nd and 5u on September 8th. More analysis is needed to understand the significance of the "u" value and the overall trend.


**Forecasting Demand Patterns**

The data reveals a consistent bi-weekly cycle, with orders placed every two Mondays. The last order was on September 22nd. Given the 14-day cycle, I expect the next order tomorrow, October 6th. The quantities appear small, and recent trend suggests a slightly decreasing demand. I'm focusing on the median of the last three periods to project future needs.


**Estimating the Order Volume**

I've examined the recent ordering history, focusing on the downward trend of the last three orders: 6, 5, and 3 units. Given the "Privilégier les quantités récentes" instruction, I'll recommend 5 units for tomorrow's order, as that's the median of the last three.


**Determining the Order Quantity**

Focusing on the prompt's instruction to prioritize recent quantities, I've calculated a recommendation. The median of the last three orders is 5 units. Although there's a slight downward trend, the 5 unit median provides a safe baseline. I'm ready to advise on tomorrow's order.




</details>

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bimensuelle très régulière (tous les 14 jours le lundi)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle est extrêmement prévisible avec une récurrence de 14 jours identifiée sur les 4 dernières commandes. La prochaine commande est prévue pour le 2025-10-06, soit demain par rapport à la date du jour. Le volume s'est stabilisé à 3 unités lors des deux dernières livraisons, ce qui correspond à la médiane des volumes récents.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,235 tokens
- **Total**: 2,130 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Chip Sales Data**

I'm analyzing the sales data for [REB02] paprika chips. Seeing a drop from 6 units on 2025-08-25 to only 3 units on 2025-09-08 and 2025-09-22 has me concerned. I need to understand this recent decline. The gap in the data between 07-28 and 08-11 is also something to look at.


**Projecting Future Orders**

The 14-day cycle is quite consistent, with the exception of the 28-day gap. The latest data points to a likely order of 3 units tomorrow, October 6th. The risk assessment indicates a "YES" within the 30-day horizon, just one day away, reflecting the need to maintain at least the baseline of 3 units.


**Forecasting Order Recommendations**

The analysis confirms a 14-day cycle, predicting an order of 3 units for tomorrow. The trend has clearly stabilized at the 3-unit level. My confidence remains high due to the regularity of the cycle and the consistent recent order quantities. Risk assessment remains "YES" for tomorrow.




</details>

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel strict (14 jours), commandes passées le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier (tous les 14 jours, le lundi). La prochaine commande est attendue pour demain, le 2025-10-06, ce qui confirme un risque de rupture imminent à l'horizon 30 jours. La médiane des quantités commandées sur les derniers mois s'établit à 3 unités, sans tendance directionnelle marquée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,390 tokens
- **Total**: 2,285 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Recent Order Trends**

I'm currently tracking the sales of the ReBEL chips. Recent orders for the premium black pepper flavor are few and far between. The latest order of 3 units was on September 22nd, and before that, a single unit was ordered on September 8th, showing a possible 14-day interval.


**Calculating Order Risk Assessment**

My analysis indicates a high risk of stock rupture for the ReBEL black pepper chips. The predicted order date, based on the median 14-day cycle, is tomorrow, October 6th. Quantities remain low, averaging around 3 units, with no clear quantity trend in the last three months. I'm focusing on the potential impact of this upcoming order.


**Determining Order Quantity**

My analysis indicates a likely order of 3 units based on the established 14-day cycle. Quantities are consistently small, and I am confident in this prediction, as the 3-month trend shows stability with no clear direction. A B2B replenishment model supports this projection, therefore 3 units is the advised quantity, as the median of the recent quantities, showing a high confidence in the recommendation.


**Refining Order Quantity Prediction**

I've re-evaluated the recommended quantity, cross-referencing my calculations. While the median order size is 3, I considered the small-volume fluctuations, averaging at 2.8. The "Safety B2B" rule allows for a slight increase, but I'll maintain a quantity of 3, based on the customer's regular 14-day cycle and historical median. My confidence level remains high.




</details>

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
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
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel (14 jours) très régulier le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé est extrêmement stable avec un intervalle de 14 jours entre les quatre dernières commandes, toutes passées le lundi. La prochaine commande est attendue demain (2025-10-06), ce qui justifie un risque immédiat. Les volumes oscillent entre 2 et 5 unités avec une médiane solide de 3.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,133 tokens
- **Total**: 2,028 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Production Quantities**

I'm currently focused on the production quantities for the ReBEL chips, specifically the premium and bio variety with thyme and rosemary in 125g packages. Recent data shows a production run of 3 units on September 22nd. Prior to that, I see a run of 2 units on September 8th, indicating a 14-day interval.


**Calculating the Stockout Risk**

I've just calculated the stockout risk for the ReBEL chips. Based on a 14-day cycle and the last order date, the predicted next order is tomorrow. Given today's date, there's only one day until the expected order, indicating a high risk if we haven't already restocked. I'm focusing on quantity and production intervals.


**Assessing Production Intervals**

I'm now zeroing in on the production frequency. With the 14-day intervals appearing consistent recently, I'm noting the predictable Monday order day. The upcoming order is projected for tomorrow, October 6th. I've classified this as a high-confidence prediction due to the regular pattern observed. Quantities are consistently around a median of 3 units.


**Forecasting the ReBEL Order**

I've just finalized the production forecast for the ReBEL chips, specifically the thyme and rosemary variety. My analysis confirms the strong bi-weekly pattern, with orders consistently placed on Mondays. Given the last order date of September 22nd, I've projected the next order for tomorrow, October 6th. The recommended quantity is 3 units, aligning with the stable median volume. High confidence in this prediction!




</details>

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.5u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bimensuelle (tous les 14j) le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement régulier avec un intervalle de 14 jours constaté sur les 4 dernières livraisons. La commande théorique est due pour demain (2025-10-06), créant un risque de rupture imminent. Les quantités sont stables (médiane de 2.5 sur les derniers mois), l'arrondi à 3 unités est recommandé pour sécuriser le stock B2B face à une demande légèrement fluctuante entre 1 et 3 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 1,348 tokens
- **Total**: 2,243 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently focused on the sales history for the ReBEL chips, specifically the premium bio-piment citron flavor. Analyzing the last three months, I see a few key data points to consider, including the unit sales on September 22nd and September 8th. More analysis is needed, of course.


**Evaluating Replenishment Needs**

I've examined the sales data for the ReBEL chips, specifically the premium bio-piment citron flavor. Analyzing the recent sales history, I've noted a consistent bi-weekly pattern, with a median cycle of 14 days. The last order was on September 22nd. Given today's date, October 5th, and considering the predicted next order date of October 6th, the risk of a stockout is high without a new order.


**Predicting Replenishment Needs**

I've just finalized the analysis of the ReBEL chips, premium bio-piment citron. The results highlight a very consistent 14-day cycle, indicating a high risk of stockout if no new order is placed. The next order is estimated for tomorrow, with a recommended quantity of 3 units, given the observed trend. The confidence level of this evaluation is high.


**Synthesizing Replenishment Strategy**

Now I am wrapping up the analysis. I've considered all factors: the consistent 14-day cycle, the recent quantities, and the safety stock considerations. The model's confidence in the recommendation is high, and a JSON object has been produced. I'm ready to move forward.




</details>

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle bi-mensuel strict (tous les 14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commande systématiquement le lundi
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle de réapprovisionnement extrêmement régulier de 14 jours (tous les deux lundis). La dernière commande datant du 22 septembre, la prochaine est prévue pour demain, le lundi 6 octobre. Le volume est stable à 2 unités sur les trois dernières occurrences, ce qui définit la recommandation.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 862 tokens
- **Output**: 1,068 tokens
- **Total**: 1,930 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Product Plan**

I'm revisiting the production schedule for JOY! Organic Strawberry Jam. Specifically, I'm analyzing the 2025-09-22 and 2025-09-08 batches, noting a consistent 2-unit production. Now I'm preparing to look further back, into the August production data, to see how that fits the overall plan.


**Predicting Production Demand**

I'm zeroing in on the JOY! Organic Strawberry Jam forecast. The production history reveals a very clear bi-weekly rhythm, consistently 2 units, except for a 3-unit batch. The next order is predicted for tomorrow, the 6th, and the risk of stockout is imminent! There's no seasonality or trend to complicate this, so I will stick with the 2-unit baseline.


**Calculating the Order Forecast**

My analysis continues on the JOY! Organic Strawberry Jam forecast, homing in on the 14-day cycle. The upcoming order is due tomorrow, October 6th. The stable demand pattern reinforces a recommendation of 2 units. Confidence is high, as the product exhibits consistent bi-weekly orders. I've confirmed all dates, values, and logic, with a JSON output in mind.




</details>

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle très régulier de 14 jours (le lundi)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande bi-mensuel extrêmement prévisible (14 jours précisément sur les 3 dernières occurrences). La prochaine commande est prévue pour demain, le 6 octobre. Bien que les volumes de l'année précédente étaient plus élevés (2-4u), la tendance récente en 2025 s'est stabilisée à 1u par commande. Conformément aux consignes sur les petites quantités, la médiane récente de 1u est privilégiée face à l'historique N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,100 tokens
- **Output**: 1,264 tokens
- **Total**: 2,364 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Recent Data Points**

I'm currently focused on the MF Tarti Poivron chilli 250g, specifically examining its sales history from the last three months. I've noted two recent sales events, both on Mondays, which I'm now comparing for potential patterns and trends, to inform a forecast. I am looking for any interesting observations.


**Projecting Future Demand**

The forecast for the MF Tarti Poivron chilli 250g is now refined. Based on the 14-day cycle and recent sales of 1u, I predict a 1u order tomorrow, 2025-10-06. The analysis highlights a concerning decreasing trend from last year, but the regularity suggests stability at 1u in the short term. The risk of stockout within 30 days is confirmed.


**Synthesizing Order Recommendations**

I've just finalized the detailed analysis. Considering the 14-day cycle and recent 1u orders, I'm strongly recommending ordering 1u tomorrow, 2025-10-06. Despite a concerning downward trend from last year, the recent sales suggest short-term stability at 1u. The risk of stockout within 30 days is still pressing.




</details>

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle bimensuel à mensuel (14-28 jours), commandes régulières le lundi
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente une régularité parfaite sur les 4 dernières commandes en 2025 avec un volume constant de 1u. Bien que l'historique N-1 affichait des quantités plus élevées (3u), la tendance actuelle est stabilisée à 1u. Avec un cycle médian de 28 jours et une dernière commande le 22 septembre, la prochaine échéance est prévue vers le 20 octobre (sous 15 jours), justifiant une commande de réapprovisionnement.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,074 tokens
- **Output**: 2,071 tokens
- **Total**: 3,145 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Product Demand Trends**

I am now focusing on analyzing the historical sales data for product MF0028. Recent sales show a consistent, albeit low, demand. My next step will be to examine the sales from the previous two years to identify any patterns or seasonality in the product's demand.


**Reviewing Sales Order Cycles**

I've examined the recent sales for MF0028 and determined the intervals between orders in 2025. The median cycle is about 28 days, but the latest interval was shorter (14 days). Given today's date, I'm assessing the risk of needing to reorder within the next 30 days based on these cycles.


**Assessing Order Prediction Accuracy**

I've examined the product's historical ordering patterns, considering both recent and previous year's data. I've concluded the most probable quantity to be ordered is one unit, given the consistent recent demand. Based on the 28-day cycle, I project a reorder around October 20th.


**Projecting Next Order Attributes**

I've examined the recent ordering cycle of MF0028, and a clear pattern has emerged: four recent orders consistently show 1 unit per order. I've calculated a predicted reorder date of October 20th. Given the established trends and data consistency, I am highly confident in this prediction.


**Determining Order Timing and Volume**

I've just refined the analysis, pinpointing a reorder date of October 20th, based on a 28-day cycle, or potentially even sooner, around October 6th. The recommended quantity is 1 unit, given recent order consistency. The pattern now indicates orders are expected bi-monthly to monthly, consistently on Mondays.




</details>

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Pattern temporel**: Commande bimensuelle (14 jours) le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement régulier avec une récurrence de 14 jours exactement sur les 4 dernières itérations (les lundis). La dernière commande datant du 22 septembre, la suivante est attendue pour demain, le 6 octobre. La médiane des commandes récentes (2025) est de 2 unités, ce qui prime sur les volumes légèrement plus élevés de N-1 selon les règles de priorisation des petites quantités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,127 tokens
- **Output**: 1,187 tokens
- **Total**: 2,314 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the production history for MF Tarti Aubergine, focusing on the last few months. Specifically, I'm noting the units produced in September, August, and July. The pattern seems a bit erratic, and I'm keen to understand the underlying drivers.


**Calculating Order Forecasts**

I'm now calculating the next order date and volume for MF Tarti Aubergine. Based on the 14-day cycle, I predict the next order is due tomorrow, 2025-10-06. The median recent volume is 2 units, but I'm cross-referencing this with N-1 data, which suggests potentially higher volumes, up to 4 units.


**Determining Quantity and Confidence**

I've determined the recommended quantity to be 2 units, based on the recent median. Although N-1 data suggests higher volumes, the current 2025 trend is more stable. I'm highly confident in this forecast, due to the very regular 14-day ordering cycle. The next order is expected tomorrow.




</details>

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle mensuel régulier (intervalle de 28 jours)
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-06 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes effectuées systématiquement le lundi
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec un intervalle précis de 28 jours (tous les lundis). La dernière commande ayant eu lieu le 8 septembre, la prochaine est statistiquement attendue pour le 6 octobre, soit un jour après la date d'analyse. La quantité est stable à 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 815 tokens
- **Output**: 894 tokens
- **Total**: 1,709 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Order Patterns**

I've begun to analyze the order patterns for the NOD04 product, focusing on the available data. The last two orders were on 2025-09-08 (1 unit) and 2025-08-11 (1 unit). I'm looking at intervals starting from August 1st to determine purchase frequency.


**Estimating Future Purchases**

I've projected the next order date for NOD04 based on the calculated 28-day cycle, landing on October 6th. Today, October 5th, leaves only one day until the predicted order. Considering the small quantities and consistent pattern, I'm recommending a quantity of 1 with medium confidence, acknowledging the limited data. The frequency pattern is showing regular monthly purchases, with a stable trend.


**Finalizing the Recommendation**

I've just finalized the recommendation for the NOD04 product. The model predicts an order tomorrow, October 6th, with a quantity of one unit. The confidence remains medium due to the limited historical data, though the pattern is remarkably consistent. I've noted the 'imminent risk' due to the short timeframe.




</details>

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Commande bi-mensuelle le lundi (cycle 14-28j)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un historique très stable de 1 unité commandée exclusivement le lundi. Le cycle varie entre 14 et 28 jours. À la date actuelle (05/10), nous sommes à 27 jours de la dernière commande. Une commande est donc statistiquement imminente (prévue pour demain, lundi 06/10).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 863 tokens
- **Output**: 1,280 tokens
- **Total**: 2,143 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Sales Data**

I'm analyzing the sales data for JOY03. The pattern seems consistent, with a unit sold roughly every two weeks, always on a Monday. It's a small sample size, but the trend is clear, and I'm keen to see if this continues. There's no prior year history for comparison, but the recent data provides a clear baseline.


**Calculating New Order Timing**

I'm now recalculating the predicted order date for JOY03. The previous prediction of September 22nd has clearly been missed. Analyzing the range of intervals, 14 to 28 days, indicates the cycle may be longer than initially thought. I need to re-evaluate based on the 27-day gap since the last order.


**Anticipating the Upcoming Order**

I'm now zeroing in on the imminent need for an order. It's the 5th of October, and with the last order on September 8th, we're at a 27-day gap. Since the interval ranges between 14-28 days, an order on Monday, October 6th, seems highly likely. All previous orders have been for a single unit.


**Concluding Order Predictions**

I've completed the analysis, determining the next order is highly probable on Monday, October 6th. The cycle is a blend of 14 and 28-day intervals, with the longer one potentially being the pattern, so I'm considering the cycle from July 14th to the present date. Quantity remains stable at one unit. The confidence in this prediction is high.




</details>

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Commande régulière tous les 14 jours le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-06 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande habituellement tous les deux lundis ; le cycle actuel suggère un retard ou une commande groupée imminente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de réapprovisionnement très stable de 14 jours (médiane parfaite sur les 3 dernières commandes). La dernière livraison datant du 08/09, le client a manqué son cycle théorique du 22/09. Une commande est donc statistiquement imminente pour le lundi 06/10. Compte tenu du très faible volume constant (1-2u), on maintient la recommandation sur la médiane récente de 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 833 tokens
- **Output**: 1,242 tokens
- **Total**: 2,075 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently focused on the sales data for [JOY05] Organic Cherry Jam. Right now, I'm calculating the intervals between sales, which appear to be around two weeks. I've noted a slight increase in sales, as the last interval shows an increase to two units, and I am keen to understand any underlying patterns.


**Projecting Future Orders**

Considering the missed cycle on September 22nd, I’ve pinpointed the next potential order date as tomorrow, October 6th. The sales cycle is typically every two weeks, with a median purchase of one unit. Analyzing the slight decrease in quantity, with a need for a restock now, my recommendation is to maintain the baseline quantity.


**Assessing Restock Requirements**

I've just confirmed the customer's sales pattern for [JOY05] Organic Cherry Jam, a regular bi-weekly cycle on Mondays. The most recent order was on September 8th, so the expected refill date should have been September 22nd, however, it appears this cycle was missed. This triggers a need to reorder on October 6th, and I will recommend maintaining a single-unit baseline order.




</details>

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle mensuel de 28 jours le lundi
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement régulier avec un intervalle fixe de 28 jours. La prochaine commande est prévue pour le 2025-10-06, soit demain par rapport à la date du jour. Pour les petites quantités montrant une alternance (1u, 2u, 1u), les consignes préconisent de privilégier la valeur basse de la médiane récente, soit 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 836 tokens
- **Output**: 1,116 tokens
- **Total**: 1,952 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Trends**

I'm currently tracking the sales history of JOY! Organic Sweet Orange Jam, specifically looking at the last three months. It seems like the unit sales are fluctuating, with a low of one unit in September and a high of two units in August. I need to analyze this further to understand the patterns.


**Projecting Future Demand**

The analysis confirms a consistent pattern: orders are placed every four weeks, consistently on Mondays. Based on this, and the last order date of September 8th, I've predicted the next order will be tomorrow, October 6th. The risk assessment indicates a potential for stock rupture within 30 days. Furthermore, I've determined a baseline of 1 unit, with no need for any adjustments.


**Evaluating Final Recommendations**

My analysis is complete; I've meticulously reviewed the sales data for JOY! Organic Sweet Orange Jam. The predicted order date is confirmed for tomorrow. The recommended quantity remains at 1 unit, owing to the consistent pattern and low volume, which prioritizes the lower quantity based on the "petite quantités" rule. The high confidence level reflects the reliable cycle.




</details>

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel de 14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle régulier de 14 jours (observé entre le 11/08 et le 25/08). En projetant ce cycle, la prochaine commande théorique est attendue pour le 6 octobre 2025. Nous sommes actuellement le 5 octobre, la commande est donc imminente. Le volume est strictement constant à 1 unité par commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 809 tokens
- **Output**: 1,376 tokens
- **Total**: 2,185 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering the Product's Data**

I'm focused on the JOY06 rhubarb jam, specifically its production frequency. Initial data points show a pattern, with single-unit productions occurring every other week in August 2025. I need to extrapolate these insights to predict future output, looking for potential seasonal trends, and I'm currently cross-referencing this with similar product data.


**Analyzing Production Cycles**

I've calculated a 14-day production cycle for the rhubarb jam, based on August data.  My model predicted orders on September 8th and 22nd, which were missed.  Now, I'm assessing the risk of a stockout within the next 30 days, considering this customer's potentially altered ordering behavior. The absence of recent orders strongly suggests an upcoming, potentially larger order or a shift in the customer's needs.


**Predicting Upcoming Needs**

I've modeled the customer's behavior and the latest data confirms a high likelihood of an order imminently, most probably tomorrow, the 6th of October. Given the 41-day absence, despite a 14-day cycle, I'm recommending a single-unit order, but I'm maintaining a medium confidence due to the small data sample.


**Determining the Imminent Order**

I've carefully analyzed the two data points, confirming the consistent 14-day cycle. Today, October 5th, indicates a missed order in September, yet the cycle predicts a demand for tomorrow, October 6th. The low order frequency and consistent quantities support a recommendation of one unit with medium confidence, based on the limited data.




</details>

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Pattern temporel**: Cycle irrégulier avec une médiane de 42 jours
- **Cycle médian (jours)**: 42
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande stable, quasi-systématiquement fixée à 2 unités. L'intervalle médian entre les commandes est de 42 jours. La dernière commande ayant eu lieu il y a 41 jours (le 25 août), la prochaine commande est imminente (prévue pour le 6 octobre), créant un risque de rupture immédiat.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 994 tokens
- **Output**: 1,381 tokens
- **Total**: 2,375 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I've been examining the recent sales data for the MF0034 product. Specifically, I noted the sales of 2 units on August 25th, 2025, and another 2 units on July 14th, 2025. This gives me an interval to work with.


**Calculating Cycle Time & Risk**

I've calculated the median interval between sales for the MF0034 product to be 42 days, and compared it against the most recent sales cycle. Given the current date and this calculated cycle, the predicted next order is tomorrow. Therefore, there's a risk of product unavailability if a new order isn't placed soon.


**Evaluating Quantity and Baseline**

I've analyzed the order quantities for the MF0034 product, finding them consistently at 2 units. With a stable history and a clear trend, I'm setting the baseline quantity at 2 units, with high confidence in this recommendation.


**Synthesizing Findings & Recommendations**

I've synthesized the analysis and have a clear picture. The MF0034 product has a 42-day median cycle, and the next order is predicted for tomorrow. My recommendation is a baseline quantity of 2 units, given the stable history. The high confidence level reflects the consistent trends.




</details>

</details>




### 📊 Données d'Input LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 5u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 3u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 4u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 5u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 3u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 2u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-07-14 11:44:16: 2u

**📅 Commandes N-1 (même période année dernière):**
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
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 2u
- 2024-06-11 06:44:54: 3u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 3u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 2u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 4u
- 2024-08-06 09:10:28: 5u
- 2024-06-11 06:44:54: 4u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 5u
- 2024-03-19 14:47:15: 5u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 5u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 2u
- 2024-05-13 13:42:50: 2u
- 2024-03-19 14:47:15: 3u
- 2024-02-09 08:53:20: 2u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 1u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (10)

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.6u (20j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.6u (-4j restants) → prédit 2u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: 0.6u (15j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock prédit: -1.1u (-13j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.8u (-18j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -2.3u (-27j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 1 | Stock prédit: -1.3u (-30j restants) → prédit 1u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: -1.0u (-26j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -1.0u (-26j restants) → prédit 2u mais non commandé |


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
| [VID0009] Consigne casier | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 24 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T14:55:12.946Z*
