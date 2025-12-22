# Rapport Backtest - Client REWE MARKT GMBH - WEST

## Contexte

- **Client** : REWE MARKT GMBH - WEST (ID: 3865)
- **Commande réelle** : S39292
- **Date commande** : 2025-09-23 06:18:30
- **Date cutoff système** : 2025-09-22 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 18,528 input + 66,210 output = 84,738 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 21.1% | 19 produits prédits, 4 corrects |
| **Rappel** | 66.7% | 6 produits réels, 4 détectés |
| **F1-Score** | 32.0% | Score équilibré global |

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
| **MAE** | 1.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 55.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 54.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 5.25u
- 📊 **Médiane historique**: 5u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel (environ 14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: Habituellement commandé le mardi, la commande est en retard de 6 jours par rapport au cycle théorique.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande bimensuel est tres regulier en 2025 (intervalles de 8 a 14 jours hors ete). La derniere commande date d'il y a 20 jours, ce qui place la prochaine commande comme imminente (retard sur le cycle median de 14j). La quantite recommandee se base sur la stabilite des commandes recentes (5u) qui sont superieures a celles de l'annee precedente (2-3u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 825 tokens
- **Output**: 1,457 tokens
- **Total**: 2,282 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Recent Trends**

I'm currently focused on the sales data for product JF001, specifically its recent history. Examining the 5u sales figures from September 2nd and August 19th provides a snapshot of the product's performance. My next step will be to explore any potential correlations with external factors.


**Projecting Future Demands**

I've just calculated the predicted next order date as September 16th, using a 14-day median interval. Given today's date, September 22nd, I observe that the order is overdue. This, along with a high likelihood of a new order soon, signals a potential stockout risk within the next 30 days. I will also review the recent quantities sold.


**Reviewing Sales Patterns**

My analysis now extends to incorporating historical data from 2024. The quantities sold have notably increased in 2025 compared to 2024. Furthermore, the baseline quantity is now set at approximately 5.25 units based on a more detailed statistical approach. A weak seasonality is also observed.


**Formulating Stock Recommendations**

I'm now determining the appropriate order quantity. Based on recent sales, and the statistical analysis, 5 units appears to be the most frequent, and the most conservative, quantity. The high confidence is reassuring, given the data's consistency. I'm also preparing the data in a parseable JSON format.




</details>

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4.5u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier de 22-27 jours
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Le client suit un cycle de réapprovisionnement très stable d'environ 3 semaines (médiane de 22 jours). La dernière commande date du 02/09, ce qui place la prochaine échéance vers le 24/09. À la date actuelle (22/09), le risque de rupture sous 30 jours est certain. On observe une tendance à la hausse des volumes par rapport à N-1 (passant de 1-2u à 4-6u). La quantité recommandée de 4u correspond à la dernière commande et se situe dans la moyenne haute récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 769 tokens
- **Output**: 1,344 tokens
- **Total**: 2,113 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Product Data**

I'm now examining the historical sales data for the JF SAUCE BEARNAISE product. Initial assessment shows a decline from 6 units in July 2025 to only 4 in September. I'm noting significant fluctuations in demand, with multiple sales on the same day in August. Next, I'll analyze the previous year's figures (N-1).


**Calculating Order Predictions**

I've moved on to predicting the next order date and stock-out risk. The median cycle is approximately 22 days, with the last order on September 2nd. Based on this, and factoring in the two days until the expected order date, I'm flagging a stock-out risk if an order isn't placed soon.


**Synthesizing Recommendations**

I'm now consolidating my findings. The analysis points to an order due within the next two days. Given the demand is trending upward, and the most recent orders, I'm recommending an order quantity of 4 units. I've considered historical data and outlier, and the confidence level in this recommendation is high.




</details>

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 18 jours
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La dernière commande date de 20 jours, ce qui dépasse le cycle médian de 18 jours. Une commande est donc due. Les quantités récentes varient entre 1 et 4 unités (moyenne 2.2, médiane 2). La commande de 1u en Septembre N-1 confirme le besoin à cette période.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 769 tokens
- **Output**: 1,291 tokens
- **Total**: 2,060 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Quantities**

I've been analyzing the production quantities for JF SAUCE TARTARE, specifically the 250ML WECK variant. My focus is on tracking unit sales. I've noted the fluctuating demand from last year, and I'm currently reviewing the unit sales for this year, starting in June.


**Assessing Rupture Risk**

Now, I'm examining the rupture risk for JF SAUCE TARTARE. Given that today is September 22nd, and the predicted next order date was September 20th, I see a high risk. The cycle median is 18 days, the last order was 20 days ago, and demand seems stable, with a median and average around 2 units.


**Synthesizing Order Parameters**

Now I am creating a JSON object to represent the order. I've noted the cycle length, which has been completed. The quantity will be the median, 2 units. There are not any concerning outliers. I am now finalizing the structure.




</details>

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
- **Pattern temporel**: Cycle régulier entre 8 et 27 jours (médiane ~18 jours)
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-02
- **Prochaine prédite**: 2025-09-20 (dans -2j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes principalement le lundi/mardi
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La prochaine commande était prévue aux alentours du 20 septembre (cycle médian de 18 jours depuis le 2 septembre). Nous sommes le 22 septembre, le risque de rupture est imminent. La quantité de 1 unité est la plus fréquente historiquement ainsi qu'en N-1 à la même période.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 771 tokens
- **Output**: 1,432 tokens
- **Total**: 2,203 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating the Intervals**

I've been calculating the time intervals between each recorded order of the JF SAUCE AIOLI PEST O. The most recent gap is 14 days, which I've taken note of. Further back, I see a 27-day gap, so the order frequency seems pretty inconsistent.


**Forecasting the Dates**

I'm focusing now on projecting the next order date for the JF SAUCE AIOLI PEST O. Considering the median cycle of 18 days, with the last order on 2025-09-02, the forecast was 2025-09-20. Since today is 2025-09-22, we're two days late, prompting a "Risk YES" flag.


**Recommending a Quantity**

I've examined the order quantities, finding a consistent trend of 1 unit, reinforced by the N-1 data. While there was a slight uptick in August, I'm leaning toward recommending 1 unit, given the observed stability and minimal impact of seasonality.


**Defining the Risks**

I've quantified the "Risk YES" trigger. With the predicted order date of 2025-09-20, and the current date being 2025-09-22, we are past the expected date. This prompts the 'Risk YES' flag, which means replenishment is needed. Also, I've assessed the recent history of order quantities for baseline and recommendation.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 5u
- 2025-08-19 08:35:46: 5u
- 2025-08-11 13:20:39: 5u
- 2025-08-11 10:59:30: 1u
- 2025-07-15 09:34:20: 6u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 3u
- 2024-08-07 13:24:40: 2u
- 2024-06-11 07:20:33: 3u
- 2024-06-04 08:24:14: 1u
- 2024-06-04 08:21:47: 1u

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 4u
- 2025-08-11 13:20:39: 3u
- 2025-08-11 10:59:30: 2u
- 2025-07-15 09:34:20: 6u
- 2025-06-23 06:45:41: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 2u
- 2024-08-07 13:24:40: 2u
- 2024-07-05 08:39:50: 1u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 1u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 4u
- 2025-07-15 09:34:20: 2u
- 2025-06-23 12:14:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 1u
- 2024-06-11 07:20:33: 1u
- 2024-06-04 08:24:14: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 1u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 3u
- 2025-07-15 09:34:20: 1u
- 2025-06-23 12:14:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 1u
- 2024-08-07 13:24:40: 1u
- 2024-06-11 07:20:33: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (15)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.7u (-5j restants) → prédit 2u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | Stock prédit: -1.0u (-6j restants) → prédit 3u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 1.0u (9j restants) → prédit 2u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: 2.1u (42j restants) → prédit 2u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Stock prédit: 1.4u (43j restants) → prédit 2u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: -1.4u (-13j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-4j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Stock prédit: -0.5u (-3j restants) → prédit 3u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |


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
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | En rupture (-53j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T12:51:18.247Z*
