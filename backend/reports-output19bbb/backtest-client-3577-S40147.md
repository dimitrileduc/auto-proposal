# Rapport Backtest - Client ITM ALIMENTAIRE BELGIUM

## Contexte

- **Client** : ITM ALIMENTAIRE BELGIUM (ID: 3577)
- **Commande réelle** : S40147
- **Date commande** : 2025-11-05 14:17:31
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 7,144 input + 14,770 output = 21,914 total


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
| **MAE** | 24.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 28.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 27.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF2036] ITM BOULETTES TOMATE 800 GR | 85 | 64 | 21.0 | 32.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 140 | 112 | 28.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM: 85u vs Médiane: 64u (Réel: 64u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 85u
- 📊 **Baseline calculée**: 85.33u
- 📊 **Médiane historique**: 64u
- ✅ **Réel commandé**: 64u
- 📉 **Erreur LLM**: 21u (32.8%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 85u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle erratique avec prédominance de commandes le mardi, intervalle variant de 5 à 35 jours
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Dépistage d'un cycle médian de 15 jours. La dernière commande datant du 14/10/2025, la commande théorique suivante aurait dû avoir lieu autour du 29/10. En reportant le cycle de 15 jours à partir de cette échéance passée, la prochaine commande est attendue pour le 13/11/2025, soit dans l'horizon de 30 jours (9 jours restants). Le CV des quantités est de 35%, ce qui impose l'usage d'une moyenne tronquée (85.33u) pour lisser l'alternance entre les volumes de 64u et 128u. Aucune saisonnalité forte n'est détectée par rapport à N-1 malgré une légère hausse historique fin novembre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,415 tokens
- **Output**: 3,838 tokens
- **Total**: 6,253 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Upcoming Deliveries**

\n\n

I've been analyzing the delivery schedule for the "PF 2036 ITM BOULETTES TOMATE 800 GR". Recent data points reveal a pattern of deliveries. Considering the dates and quantities of past deliveries, I'm now working to project future delivery dates, taking into account the cadence of previous shipments. My calculations are narrowing down the potential arrival windows.


**Forecasting Delivery Cadence**

\n\n

I've dived deeper into the delivery intervals. Calculating the median interval between deliveries is 15 days, which I'll use as the basis for predictions. Also, I'm working to compute the coefficient of variation (CV) for the delivery intervals to gauge the consistency of the delivery pattern. Preliminary calculations are promising for predicting the next delivery.


**Evaluating Delivery Risk**

\n\n

I've calculated the median delivery cycle at 15 days, but the coefficient of variation (CV) is high, indicating an inconsistent pattern. With a CV of roughly 70%, the confidence in the predicted delivery date is low.  I've compared the predicted date with the current date, to understand the risk. The prediction is that there's a risk of the next delivery arriving within the next nine days.


**Refining Quantity Estimates**

\n\n

I've calculated the coefficient of variation (CV) for recent delivery quantities, arriving at roughly 35%, between 30 and 60%. This suggests a moderate consistency. To refine the quantity estimates, I've computed a truncated mean (excluding the min and max values, the baseline is now 85.33), and I am also analyzing the median, which is 64.


**Calculating Quantity Baselines**

\n\n

I've taken a deep dive into the historical data to determine a quantity baseline. The median delivery quantity is 64, while the truncated mean, excluding outliers, is calculated at 85.33. Also, I analyzed the 2023 deliveries in November and recent deliveries of October 2025. It also appears that the deliveries are stable with some alternations.


**Synthesizing Findings and Risks**

\n\n

My analysis indicates a projected delivery date of November 13th, with a baseline quantity of 85 units, based on historical data, with a medium confidence level. The delivery pattern fluctuates, and the date is drawing nearer. The analysis considers an increased risk that a delivery arrives within the next nine days.


**Finalizing the Prediction**

\n\n

I've refined the delivery date to November 13th, using a median cycle of 15 days, and I'm recommending a quantity of 85 units. A high CV suggested a "low" confidence initially.  The risk is increased, there is a strong probability of a delivery this week or next, specifically by November 11th. I'm waiting for updates on the new deliveries.


**Synthesizing and Recommending**

\n\n

I've finalized my analysis. The projected delivery is now set for November 13th, with a recommended quantity of 85 units, but the probability of a delivery this week or the next, specifically on November 11th, is high. I am awaiting any new updates to the current cycle.




</details>

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM: 140u vs Médiane: 224u (Réel: 112u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 140u
- 📊 **Baseline calculée**: 140u
- 📊 **Médiane historique**: 224u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 28u (25.0%)
- 📉 **Erreur Médiane**: 112u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 140u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier détecté sur l'historique N-1 avec une médiane de 21 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-04 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 448u

**🧠 Raisonnement LLM:**
Le cycle médian calculé sur l'historique complet (principalement N-1 car données récentes insuffisantes) est de 21 jours. La dernière commande datant du 2025-10-14, la prochaine commande est projetée pour le 2025-11-04 (aujourd'hui), créant un risque immédiat de rupture sur l'horizon 30 jours. L'analyse des quantités (Q1=112, Q3=224, IQR=112) a permis d'isoler la valeur 448u comme outlier (supérieur à la barrière de 392u). La baseline est calculée via une moyenne tronquée sur les valeurs restantes (112u et 224u) pour lisser les variations entre les petites et moyennes commandes récurrentes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,422 tokens
- **Output**: 3,638 tokens
- **Total**: 6,060 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the historical data for product PF2996. The focus is on unit sales, specifically looking at the 30-day horizon from today, November 4th, 2025. I've noted sales of 112 units on October 14th. Next, I will delve into further data points from the preceding months.


**Calculating Interval Data**

I've just finished the interval analysis for the N-1 data. I see a wide range of intervals between sales events. The interval data points are now being used to ascertain the best possible forecast given the limited data. The dates are: 50, 20, 28, 28, 7, 21, 14, 23...


**Predicting Sales Cycles**

I've just calculated the coefficient of variation (CV) for the N-1 intervals, which came out to 52%. The median interval is 21 days. Based on this, and the last known sale date, the next sale should be today. I need to consider that CV for risk.


**Forecasting Quantity Analysis**

I'm now calculating the upper and lower bounds for outlier detection to quantify quantities. The 448 unit sale is confirmed as an outlier and excluded, which skews the calculations. Given the reduced data, the 112 unit is the most common and will drive this period's forecast.


**Assessing Cycle Timing**

I've just calculated a 52% coefficient of variation in the interval data, using N-1 sales history. With a median interval of 21 days, and the last sale being 2025-10-14, I'm predicting the next sale to be today, November 4th, 2025.


**Evaluating Intervals & Dates**

I am now fully analyzing the sales events with a focus on their intervals. I've calculated the coefficient of variation (CV) for the N-1 data, which has yielded a value of 52%. The median interval sits at 21 days, indicating the next sale is predicted for today. Furthermore, the baseline quantity is now set to 140.


**Determining Next Order Date**

I've just finished the calculations on the N-1 data. The median interval is 21 days with a coefficient of variation of 52%. Based on this, I have predicted the next sale for today, November 4th, 2025. I am re-assessing this prediction.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 08:27:27: 128u
- 2025-10-09 08:37:17: 64u
- 2025-09-16 09:22:58: 128u
- 2025-08-12 09:46:11: 64u
- 2025-08-05 11:52:23: 64u

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

**✅ Quantité LLM**: 85u (confidence: medium)
**📊 Quantité Réelle**: 64u

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 08:27:27: 112u
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

**✅ Quantité LLM**: 140u (confidence: medium)
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
| [PF2997] ITM BO VIN YOGORETTE PET 450 | 185 | Stock prédit: -67.8u (-9j restants) → prédit 185u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:03:36.016Z*
