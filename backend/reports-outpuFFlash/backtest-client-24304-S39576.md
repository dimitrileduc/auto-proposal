# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S39576
- **Date commande** : 2025-10-06 09:27:30
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 33
- **Tokens**: 22,536 input + 53,226 output = 75,762 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 69.2% | 26 produits prédits, 18 corrects |
| **Rappel** | 100.0% | 18 produits réels, 18 détectés |
| **F1-Score** | 81.8% | Score équilibré global |

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
| **MAE** | 0.39 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 29.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
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
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel de 28 jours (4 semaines)
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-20 (dans 15j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commande régulière le lundi
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec un intervalle de 28 jours constaté entre août et septembre. La quantité est stable à 1 unité par commande. La prochaine commande est prévue pour le 20 octobre 2025, soit dans 15 jours, ce qui entre dans la fenêtre de risque de 40 jours.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 621 tokens
- **Output**: 1,940 tokens
- **Total**: 2,561 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Order Intervals**

I'm currently focused on the order intervals for the NOD01 product. I've noted the gap between the last two orders, which was 28 days. My aim is to analyze these intervals to establish a trend. I'm hoping to identify patterns to inform inventory management.


**Projecting Order Timing**

I've projected the next order date for NOD01, arriving at October 20th, based on the established 28-day cycle. Today being October 5th, I've calculated 15 days until the predicted order. Considering the small and consistent order quantity of one unit, I have medium confidence, despite a limited data set. A stockout is a possibility.


**Evaluating The Data Points**

My focus is now on the data validation. I've re-examined the ordering pattern of NOD01. The calculations check out: a 28-day cycle, putting the next order on October 20th, and 15 days until then. The risk of stockout is present. Furthermore, I have refined the analysis and the confidence levels attached to each of these estimates.


**Confirming Order Recommendation**

I've just finalized the JSON output, including all required keys and adhering to the specified formatting rules. The model predicts a need for 1 unit, given the consistent 28-day cycle. The confidence levels remain medium overall, but high for the cycle and quantity stability.


**Formulating the JSON Output**

I'm now implementing the JSON, ensuring correct key names and adhering to all formatting rules. Data validation is complete, so the model predicts a need for one unit. I'm focusing on confidence levels, especially in the context of the small dataset. I have finalized the reasoning for clarity and conciseness.




</details>

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel de 28 jours identifié
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé entre les deux dernières commandes est de 28 jours, plaçant la prochaine commande théorique au 20 octobre. Étant donné que nous sommes le 5 octobre, le besoin se manifestera dans l'horizon des 30 jours. Le volume est faible (1 à 2 unités) ; la médiane de 1,5 est arrondie à 2 pour garantir la disponibilité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 620 tokens
- **Output**: 1,484 tokens
- **Total**: 2,104 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Sales**

The sales data for [NOD02] reveals a sparse ordering pattern. I've noted the intervals between orders, specifically highlighting the significant gap between the last two purchases. I'm now focusing on calculating the average time between orders to understand the demand cycle. I also plan to cross-reference this with external data.


**Evaluating Order Frequency**

I've determined a 28-day cycle for [NOD02] based on the order history. The predicted next order is 2025-10-20. Given today's date, 2025-10-05, the risk is 'YES' as the predicted date is within the next 30 days. I'm now analyzing the order quantities. They are low and need careful consideration.


**Assessing Quantity Recommendations**

Following the order frequency analysis, I've confirmed a monthly cycle for [NOD02]. While the trend hints at a slight decrease, with such low volumes, it's hard to be certain. Given this, I'm recommending a quantity of 2 units for the next order, using the median for safety, but with an eye on that most recent order of only 1 unit.


**Calculating Final Recommendation**

After reviewing all the elements, I've confirmed a 28-day cycle for [NOD02] with a predicted order on 2025-10-20, within the 30-day horizon. Considering the order history of 1 and 2 units, I'm now leaning towards recommending 2 units for the next order. However, low confidence needs consideration.




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
- **Pattern temporel**: Cycle mensuel régulier de 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle de commande très précis de 28 jours (4 semaines) pour une quantité constante de 1 unité. La prochaine commande étant prévue pour le 20 octobre 2025, soit dans environ 15 jours, il y a un risque de rupture sur l'horizon de 30 jours. Une commande d'une unité est préconisée pour répondre à ce besoin cyclique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 620 tokens
- **Output**: 1,087 tokens
- **Total**: 1,707 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Sales Data**

I've been examining the sales data for the NOD03 product. So far, I've noted two recent sales: one unit on September 22nd and another on August 25th. I'm keen to understand the significance of these sales dates, and to consider the yearly trends. My next step is to examine the N-1 history to gain more insight.


**Projecting Future Orders**

Considering the 28-day cycle, I've projected the next order date for the NOD03 product as October 20th. Given the 15 days until that date, and the 'risk yes' condition, I recommend a stockout risk assessment. The historical data, though limited, suggests a stable trend with a median and weighted mean of 1 unit per order.


**Calculating Stock Levels**

I've taken the existing analysis and expanded my approach. Given the upcoming predicted order, and that it is within the 40-day horizon, a risk assessment is now flagged. My confidence level, although based on limited data, is medium due to the clear 28-day cycle. I recommend ordering a single unit, based on the historical data. The JSON is fully validated, and I am satisfied with the result.




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
- **Pattern temporel**: Commande bi-hebdomadaire régulière (tous les 14 jours), systématiquement le lundi.
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement stable avec un intervalle de 14 jours identifié sur les 4 dernières commandes. La date de commande théorique est fixée au 2025-10-06 (demain par rapport à la date actuelle), créant un risque de rupture imminent. Les volumes varient peu (3 à 8 unités), la médiane de 5 est retenue comme quantité cible pour la prochaine commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,299 tokens
- **Total**: 1,998 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Observing Recent Trends**

I'm currently tracking the sales data for the ReBEL chips over the past three months, specifically the "premium & bio - sel de mer 125g" variant. So far, the data points show modest but consistent sales on Mondays. I'm noting the specific quantities sold on each recorded date.


**Forecasting Future Demand**

The data reveals a consistent bi-weekly sales pattern, specifically on Mondays. Given the last recorded sale was on September 22nd, I anticipate the next order tomorrow, October 6th. Based on the median and average of past sales, around 5 units are expected. The variability in quantities suggests a need for a buffer.


**Evaluating Recommended Quantities**

I'm now determining the most appropriate quantity for tomorrow's expected order, factoring in the pattern and the slight variations in past orders. With the next order predicted for tomorrow, the data and historical quantities suggest a likely range, with the median of 5 units. I'm choosing 5 based on that and the trend, given the recent decrease in the last one.


**Calculating the Recommended Order**

I'm now determining the most appropriate quantity for tomorrow's predicted order, accounting for both the 14-day cycle and the slight variations in past orders. With tomorrow being the expected order date, the median of 5 units seems the most reasonable, considering the slight decrease over the last two orders. I'm choosing a value of 5, given this and the regular pattern.




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
- **Pattern temporel**: Commande bi-hebdomadaire régulière (tous les 14 jours le lundi)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 6u, 5u

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement robuste avec un intervalle de 14 jours observé systématiquement (sauf une exception de 28 jours en juillet). La prochaine commande est théoriquement due pour demain, le 2025-10-06. La quantité de 3 unités est la plus fréquente et correspond aux deux commandes les plus récentes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,241 tokens
- **Total**: 1,940 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Historical Data Points**

I'm currently working on understanding the sales history for the ReBEL chips, specifically the paprika fumé flavor. The focus is on the unit sales, tracking them back from October 5th, 2025. I've noted a couple of recent data points: 3 units sold on both September 22nd and September 8th, both Mondays.


**Projecting Future Orders**

I've analyzed the historical sales data for the paprika fumé ReBEL chips. My calculations suggest a stable demand, typically around 3 units, with occasional peaks. Based on the median cycle of 14 days and the last order date, I'm predicting the next order on October 6th. Since today is the 5th, and the risk threshold is positive, a potential stock rupture could happen soon. I recommend ordering 3 units.


**Finalizing the Recommendation**

I've just finished reviewing the entire data set for the ReBEL chips, including frequency, outliers, and confidence levels. Everything looks good. The predicted next order is for 3 units on October 6th, the bi-weekly cycle is confirmed, and the risk threshold is positive. My recommendation remains ordering 3 units.




</details>

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
- **Pattern temporel**: Cycle bi-mensuel strict (tous les 14 jours) le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle de commande très régulier de 14 jours le lundi. La dernière commande datant du 22 septembre, la prochaine est prévue pour demain, le 6 octobre. Le risque de rupture est imminent à horizon 24h. Les quantités varient entre 1 et 5 unités avec une moyenne de 2.8 et une médiane de 3. On retient la médiane pour couvrir le besoin habituel.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,347 tokens
- **Total**: 2,046 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently tracking the sales of the [REB03] ReBEL chips, specifically the premium black pepper flavor. The data from the last three months shows a couple of sales spikes in September. I'm focusing on the fluctuations to understand the sales pattern.


**Forecasting Order Timing**

I've analyzed the [REB03] chip order history and identified a 14-day cycle, always on Mondays. Based on this, I predict the next order is due tomorrow, October 6th. The average order quantity is 2.8 units, with a median of 3. There is a risk to detect, as the order is due in a day.


**Assessing Order Prediction**

I'm solidifying the forecast for the [REB03] chips. My analysis firmly points to an order tomorrow, October 6th, as the data reveals a strict 14-day cycle. The median order quantity is 3 units, aligning with recent sales. I've classified the risk as high due to the predictable cycle.


**Calculating Order Prediction**

I'm now finalizing the JSON structure for the [REB03] chip order forecast. I've populated all the fields. The frequency is confirmed as bi-weekly on Mondays, with a high confidence level due to the strict cycle. The forecast for tomorrow is 3 units, drawn from the median.




</details>

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3.2u
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
- **Pattern temporel**: Commande bi-mensuelle (tous les 14 jours) le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle de commande extrêmement régulier de 14 jours observé sur les 4 dernières itérations (tous les deux lundis). La dernière commande datant du 22 septembre, la prochaine est prévue pour le 6 octobre (soit demain par rapport à la date actuelle du 5 octobre). La quantité médiane et la plus fréquente est de 3 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,125 tokens
- **Total**: 1,824 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Product Sales Data**

The initial data point from September 2nd indicates a sales volume of 3 units, followed by 2 units on September 8th. I'm focusing on these early trends, seeking to understand the initial market response to the [REB04] ReBEL chips. Further analysis will incorporate more data as it becomes available.


**Projecting Future Orders**

My analysis of the [REB04] ReBEL chip sales reveals a consistent bi-weekly order pattern, specifically on Mondays. The last confirmed order was on September 22nd.  Given the 14-day intervals, I'm anticipating the next order to be on October 6th, which is only a day away. I assess a 'YES' risk due to the proximity of the predicted order date. Quantities appear stable, hovering around a median of 3 units.


**Anticipating Further Quantities**

I'm focused on the forthcoming order, expected tomorrow, October 6th. The model indicates a high degree of confidence in the order's timing, given the established bi-weekly cycle. The recommended quantity remains at 3 units, based on the stable historical data. I consider the reasoning behind this to be solid.




</details>

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
- **Pattern temporel**: Commande bi-hebdomadaire très régulière (14 jours), systématiquement le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement robuste avec une récurrence de 14 jours (lundi). La dernière commande datant du 22 septembre, la prochaine est prévue pour le 6 octobre (soit demain par rapport à la date de l'analyse). Le volume médian et le plus récent indique un besoin de 3 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 1,359 tokens
- **Total**: 2,058 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Investigating Sales Intervals**

I'm currently focusing on the REB08 chip's sales data. Analyzing the intervals, I see a pattern of 14-day cycles, but there's a 28-day gap. This suggests either a missed order or a temporary pause in sales, which warrants further investigation to understand the fluctuation.


**Predicting Order Imminence**

My focus has shifted to the REB08 chip's predicted order date. Considering the 14-day sales cycle, I calculated the next order should be around 2025-10-06. Since today is 2025-10-05, the imminent risk is confirmed. I am assessing the standard quantity and trends, and considering potential outliers.


**Evaluating Order Timing**

I've just finished the deep dive on the REB08 chip's sales. Focusing on order timing, I see an extremely regular bi-weekly sales cycle, with the last order on September 22nd. Given today's date of October 5th, the prediction for tomorrow, October 6th, confirms a high-risk situation. I'm now zeroing in on the recommended volume.




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
- **Pattern temporel**: Cycle bimensuel extrêmement régulier (tous les 14 jours, le lundi)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Habituellement commandé le lundi. Aujourd'hui dimanche 05 octobre, la commande est prévue pour demain lundi 06 octobre.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle est parfaitement identifié avec une fréquence de 14 jours. La dernière commande remontant au 22 septembre, la date théorique de réapprovisionnement est le 6 octobre (demain). La quantité est stable à 2 unités sur les trois dernières commandes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 667 tokens
- **Output**: 1,384 tokens
- **Total**: 2,051 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Trends**

I'm currently looking at the sales data for JOY! Organic Strawberry Jam 370g. It seems to have a consistent demand with 2 units sold every other week, going back to late August. This steady pattern suggests a reliable customer base, and I'm interested in digging deeper to see if this trend holds.


**Forecasting Demand Patterns**

I've analyzed the recent order history for JOY! Organic Strawberry Jam 370g, specifically focusing on the 025-07-14 order of 3 units.  The pattern seems consistent at every 14 days, on Mondays. The latest order was 2025-09-22, and the prediction for tomorrow, 2025-10-06, aligns with the cadence. Quantities vary between 2 and 3, but the last three orders have been 2 units. The median suggests a baseline of 2.  Given this analysis, I'm recommending an order of 2 units.


**Determining Optimal Orders**

I've just run a deep analysis on the JOY! Organic Strawberry Jam 370g order history. The results point to a rock-solid, 14-day cycle, every Monday. The last three orders were 2 units, and the median is also 2. My model confidently recommends ordering 2 units for tomorrow, October 6th, given the consistent trend.


**Analyzing the Cycle**

After looking closer at the data, I can see the JOY! Organic Strawberry Jam 370g orders have a perfect 14-day cycle. The intervals match up after accounting for a potential data gap.  I'm now more confident that the recommendation for tomorrow, October 6th, is accurate. The prediction of 2 units for this product is solid.




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
- **Pattern temporel**: Commande bi-mensuelle très régulière (tous les 14 jours le lundi)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client a adopté un cycle de commande extrêmement précis de 14 jours (tous les deux lundis) au cours des deux derniers mois. La dernière commande datant du 2025-09-22, la prochaine est prévue pour le 2025-10-06, soit demain par rapport à la date système. Bien que les volumes soient plus faibles qu'en 2024 (1u vs 2-3u), la récurrence est plus forte. Une commande de 1 unité est recommandée pour couvrir le besoin immédiat du cycle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 904 tokens
- **Output**: 1,589 tokens
- **Total**: 2,493 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Product's Data**

I'm analyzing the provided data for product [MF0033], specifically the MF Tarti Poivron chili in 250g packaging. I'm focusing on the sales history to identify any trends. The sales data reveals intermittent activity, with units sold on September 8th and 22nd. I'm noting the sporadic nature of these transactions.


**Projecting Sales Cycles**

I'm now calculating the sales cycle for product MF0033. I've noted the intervals between orders, focusing on the shift from monthly cycles in 2024 to a bi-weekly pattern in 2025. Based on this, and the last order, I predict an order tomorrow, with a low risk of stockout. My calculations are indicating a 14-day cycle.


**Refining the Prediction Model**

I'm now integrating the observed trends into my model. Analyzing the sales figures, the most probable order size is one unit. The most recent pattern shows a clear bi-weekly cadence. I'm accounting for the decreasing order volume, but increasing frequency.  The model now projects an order for one unit tomorrow.


**Evaluating Cycle Consistency**

I've examined the product's sales data. The bi-weekly pattern remains consistent, with the last order 13 days ago. Tomorrow's predicted order date aligns perfectly with the established 14-day cycle. The model's confidence in this prediction is high, supported by stable recent order quantities of one unit.




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
- **Pattern temporel**: Cycle bimensuel ou mensuel (14 à 28 jours) le lundi
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle régulier de commande le lundi. Bien que le volume ait baissé par rapport à l'année dernière (passant de 3u à 1u), la demande récente est extrêmement stable avec 1 unité commandée systématiquement tous les 14 ou 28 jours depuis juillet. La dernière commande ayant eu lieu il y a 13 jours, une nouvelle commande est prévue de manière imminente (cycle de 14 jours probable).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 878 tokens
- **Output**: 1,717 tokens
- **Total**: 2,595 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Observing Product Trends**

I am currently observing the sales data for product [MF0028] MF Tarti Carotte Gingembre 250g. I've noted consistent weekly sales of 1 unit over the past three months, specifically on Mondays. The data seems limited, however. I'm keen to incorporate longer-term trends to refine the analysis.


**Analyzing Order Frequency**

I've calculated the median cycle, revealing a possible 14- or 28-day cadence for product [MF0028]. Given the last order on September 22nd and today's date, I'm concerned about a potential stockout within the next 30 days. There is a clear pattern of decreasing sales over time, as well.


**Evaluating Demand Patterns**

I've examined the product's historical sales, noting a decline in order volume from the previous year. My analysis indicates a stable pattern of 1 unit per order in recent months, with potential bi-weekly or monthly order frequency. The median cycle has been determined as 28 days. I've considered potential stockout risks, given the time since the last order.


**Assessing Order Prediction**

I'm focused on the predicted next order date, which looks to be either tomorrow or October 20th. Given today's date and the recent bi-weekly orders, I believe tomorrow is more likely. Even using a 28-day cycle, the stockout risk within 30 days remains, justifying a review of the baseline order of 1 unit.


**Calculating Order Recommendations**

I've determined the likely next order date to be October 6th, or tomorrow, as the pattern suggests either a 14- or 28-day cycle, with the recent cycle being 14 days. This aligns with the "Risk: Yes" alert, and justifies my confidence in recommending the baseline order of 1 unit. I've reconfirmed the median cycle of 28 days for analysis purposes, although it might be 14 days.




</details>

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.2u
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
- **Pattern temporel**: Commande bi-mensuelle systématique le lundi tous les 14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-06 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande systématiquement le lundi, la prédiction tombe sur demain (lundi 6 oct.)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement régulier (exactement 14 jours sur les 4 dernières itérations). La date pivot de la prochaine commande est le 2025-10-06, soit demain par rapport à la date de l'analyse. Bien que les volumes soient légèrement inférieurs à N-1 (2-3u contre 4-5u), la stabilité du cycle actuel confirme un besoin imminent de 2 unités, correspondant à la médiane et au mode de l'historique récent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 931 tokens
- **Output**: 1,285 tokens
- **Total**: 2,216 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Inventory Data**

I've been analyzing the recent inventory data for the MF Tarti Aubergine product. I've noted a couple of sales in the last three months, specifically 3 units on September 22nd and 1 unit on September 8th, with a 14-day interval between them. I'm now considering the implications for stock levels.


**Projecting Future Demand**

The 14-day cycle is quite consistent, revealing a predictive opportunity. I've calculated a predicted order date of October 6th, just one day from now. Taking into consideration the median sales volume of two units, the current stock level is at risk. I must begin to consider re-ordering.


**Recommending a Restock Order**

Given the one-day proximity to the predicted order date, and considering the product's recent median sales of two units, my confidence is high for immediate action. I'm inclined to recommend a restock order, accounting for the regular 14-day cycle and the current need to maintain adequate stock levels.




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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier de 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle de commande très précis de 28 jours (4 semaines). La dernière commande datant du 2025-09-08, la prochaine occurrence est prévue pour le 2025-10-06, soit 1 jour après la date actuelle. La quantité est stable à 1 unité par commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 619 tokens
- **Output**: 899 tokens
- **Total**: 1,518 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Sales Patterns**

I'm analyzing the sales data for [NOD04], specifically the mango-passionfruit lemonade. Recent data shows a single unit sold on October 5th, 2025. Prior sales were recorded on September 8th and August 11th. I'm investigating the consistent interval of approximately 20 days between sales.


**Refining Cycle Predictions**

The cycle has been precisely calculated: 28 days. Today's date is October 5th, and the model predicted the next order for October 6th. Risk is assessed as "YES" because the 1-day difference falls well within the acceptable 40-day window. Confidence is rated as medium due to the limited data, but the perfectly consistent cycle boosts it. I'm focusing on the parameters now.


**Assessing Order Implications**

The model confirms a high likelihood of a single unit order tomorrow. I've re-evaluated the risk as "YES" due to the narrow one-day difference. Analyzing historical data reveals a stable trend of one unit per order, and the confidence level is holding at medium, driven by the perfectly consistent 28-day cycle.




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
- **Pattern temporel**: Commande bi-mensuelle très régulière tous les 14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-09-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel de 14 jours est dépassé depuis la dernière commande du 08/09/2025 (27 jours écoulés). La quantité commandée est systématiquement d'une unité. Un risque imminent de rupture client justifie la commande d'une unité maintenant.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 667 tokens
- **Output**: 1,150 tokens
- **Total**: 1,817 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Recent Sales Data**

I'm focused on the sales figures for the JOY03 product, specifically looking at the 70g apricot jam. The sales history reveals one unit sold on various Mondays throughout the past few months. I've noted sales on September 8th, August 25th, August 11th, and July 14th of this year, 2025. There's no prior year's data to compare against yet.


**Predicting Future Demand**

The analysis points to a consistent demand pattern for JOY03. Using a median cycle of 14 days, I predicted a new order around September 22nd, which has already passed. With 27 days since the last order, a new unit is expected immediately. The risk assessment indicates a high probability of needing to replenish stock soon.


**Evaluating Risk of Stockout**

I've re-examined the data and confirmed a 14-day median cycle for JOY03. The last order was September 8th, and today's date, October 5th, indicates 27 days since. All calculations and the risk assessment point to an urgent need to replenish. My confidence in this is high, given the regular demand and overdue nature of the next order.




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
- **Pattern temporel**: Cycle bi-hebdomadaire régulier (14 jours) le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-06 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle de réapprovisionnement extrêmement précis de 14 jours (tous les deux lundis). La dernière commande datant du 08 septembre, le cycle théorique prévoyait une commande le 22/09 (non passée) et la suivante le 06/10. Étant le 05/10, la commande est attendue demain. Bien qu'une commande ait été 'sautée', la régularité historique de 14 jours impose une alerte avant la date de demain.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 637 tokens
- **Output**: 1,511 tokens
- **Total**: 2,148 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Data**

I've begun to analyze the recent production history of the Organic Cherry Jam 370g (JOY05). So far, I've noted two production runs in the last three months, specifically on Mondays. Next, I'll need to calculate the average and variability of these production runs.


**Evaluating Order Frequency**

I've determined a clear bi-weekly ordering pattern for the Organic Cherry Jam 370g (JOY05), specifically on Mondays, with quantities fluctuating between 1 and 2 units. Based on this pattern, the next order was anticipated on September 22nd, but never occurred. It's been 27 days since the last order, indicating a potential deviation from the established rhythm.


**Predicting Order Imminence**

I've finished calculating the expected next order date, which is tomorrow. Considering it has been 27 days since the last order, and with a high level of confidence in the regular 14-day cycle, I predict the next order will be 1 unit of Organic Cherry Jam 370g (JOY05). The current date is 2025-10-05.


**Refining Quantity Estimates**

I've re-examined the quantity data for the Organic Cherry Jam 370g (JOY05). While the median is 1 unit, with the last two orders also at 1 unit, the initial 2-unit order slightly skews the mean. The upcoming order, predicted for tomorrow, is still highly likely to be 1 unit, despite the slight deviation from the typical bi-weekly cadence.




</details>

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel strict de 28 jours (4 semaines) le lundi
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-06_00:00:00.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une régularité parfaite avec un cycle de commande de 28 jours (tous les lundis). La dernière commande ayant eu lieu le 08/09, la prochaine commande théorique est demain, le 06/10. Avec un horizon de seulement 1 jour avant la prochaine échéance, le risque de rupture est immédiat. La quantité suggérée correspond à la médiane et au volume le plus fréquent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 640 tokens
- **Output**: 5,721 tokens
- **Total**: 6,361 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Product Demand**

I'm analyzing the sales data for JOY! Organic Sweet Orange Jam. Looking at the last three months, the data suggests a slow but steady demand. One unit sold in July, then two in August. It's a small sample, but useful for a baseline.


**Forecasting Future Orders**

I've got the data for JOY! Organic Sweet Orange Jam, and I'm predicting the next order. With a 28-day cycle, it should be tomorrow, October 6th. The risk of running out is high given the cycle, as the date is near, only one day away from the predicted date. Baseline demand is around 1 unit.


**Determining Replenishment Quantity**

Analyzing the order history for JOY! Organic Sweet Orange Jam, I've calculated a baseline quantity of 1, given the median and most frequent order size. My reasoning, based on the regular four-week cycle, suggests a high confidence in the prediction. I am confident in recommending the replenishment of 1 unit.




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
- **Pattern temporel**: Commande bimensuelle (cycle 14 jours) observée le lundi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-06 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle très régulier de 14 jours (intervalle exact entre les deux commandes, toutes deux passées un lundi). En projetant ce cycle depuis la dernière commande du 2025-08-25, la prochaine date théorique est le 2025-10-06, soit demain par rapport à la date actuelle du 05 Octobre. Il y a donc un risque immédiat de rupture de stock client. La quantité est stable à 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 614 tokens
- **Output**: 1,933 tokens
- **Total**: 2,547 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Sales**

I'm currently reviewing recent sales data for JOY! Organic Rhubarb Jam. The product, code JOY06, had two sales in the past three months, one on August 11th and another on August 25th, each for a single unit. There's no prior sales history to consider for now, which simplifies the initial analysis. My focus is on establishing the initial sales rate.


**Forecasting Future Purchases**

I've been calculating the next probable order date, given the two sales dates of JOY06. The 14-day median cycle from those sales has passed, putting the next predicted date on September 8th. I'm now comparing the theoretical prediction to the present, since it's now October 5th. It's been 41 days since the last sale, exceeding the 40-day threshold. This raises concern. Even if the cycle was indeed 14 days, the client is past due.


**Analyzing Demand Risk**

I'm now deep-diving into the risk assessment for JOY06, given that the 14-day cycle has clearly been missed twice. Even accounting for a reasonable prediction window, the next expected order falls on 2025-10-06, which is tomorrow. This leaves a high risk of stock rupture if the client is still actively looking to purchase the product.


**Determining Recommended Order**

I've determined a recommended order quantity of 1 unit for JOY06, maintaining consistency with past orders. Based on the 14-day cycle from prior purchases, the next theoretical order falls on tomorrow, 2025-10-06. Since today is October 5th, this highlights the high-risk situation where stock could run out if another order does not occur. My confidence in the pattern is only medium due to the limited data, but the pattern is still clear. The last order was on August 25th, and since then the client has had plenty of time to reorder.


**Finalizing Risk Assessment**

I've confirmed the "commande bimensuelle" frequency pattern, with a 14-day cycle on Mondays. Outliers are non-existent, and there's no seasonality or trend impact, just a stable demand. The last order was on August 25th, and I predict the next one on October 6th, which is tomorrow. Even though the pattern has shown two cycles missed, the theoretical schedule still strongly suggests a high-risk scenario if an order doesn't happen imminently. My recommendation remains 1 unit, with medium confidence, based on the reliable past cadence.




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
- **Pattern temporel**: Cycle régulier d'environ 40 jours
- **Cycle médian (jours)**: 40
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-04 (dans -1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes majoritairement le lundi ou mardi, cycle quasi-mensuel
- **Outliers détectés**: 3u, 1u

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 40 jours. La dernière commande date de 41 jours (25 août au 5 octobre), ce qui place le client exactement dans sa fenêtre de commande habituelle. La quantité est extrêmement stable à 2 unités sur la quasi-totalité de l'historique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 799 tokens
- **Output**: 1,261 tokens
- **Total**: 2,060 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Forecasting Product Demand**

I'm currently focused on the product "MF Tarti Pomme Raifort 250g" ([MF0034]). My latest data point shows a demand of 2 units on August 25th, 2025. Prior to that, I see 2 units sold on July 14th, 2025, which gives me an interval of 42 days. I also have an entry from September 2024. My next step is to analyze these sales trends to predict future demand.


**Assessing Inventory Risk**

I've calculated the median interval between sales to be 40 days, and the last order was on August 25th, 2025. This puts the predicted next order around October 4th, which is today. Since we are so close to the predicted date and 41 days have passed since the last order, there is a substantial risk of either a stockout, or the client is ready to reorder, which is critical insight.


**Defining Order Parameters**

Now I'm focusing on defining the exact order parameters. My analysis shows a strong trend of 2 units ordered every 40 days, with a few outliers. The recommended order quantity is 2, with high confidence in its accuracy due to the consistent historical data. My process is currently a stable JSON format for easy parsing.




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

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

## False Positives (8)

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
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -2.3u (-27j restants) → prédit 2u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 2 | Stock prédit: -1.3u (-30j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: -1.0u (-26j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:57:13.551Z*
