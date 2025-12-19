# Rapport Backtest - Client COLRUYT FOOD RETAIL NV NEW

## Contexte

- **Client** : COLRUYT FOOD RETAIL NV NEW (ID: 33598)
- **Commande réelle** : S40243
- **Date commande** : 2025-11-12 07:34:47
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 32
- **Tokens**: 68,105 input + 87,106 output = 155,211 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 13.6% | 22 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 23.1% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (3)

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
| [LV160] LV Tartinade Aubergine 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 100u
- 📊 **Baseline calculée**: 100u
- 📊 **Médiane historique**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 100u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières avec un cycle médian de 17 jours
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-10-21
- **Prochaine prédite**: 2025-11-07 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 150u

**🧠 Raisonnement LLM:**
DÉTECTION : Les intervalles entre les commandes sont [6, 21, 22, 13] jours, soit une médiane de 17 jours. Le CV est de 41.9%, indiquant une régularité modérée (Confiance Phase 1 : low). La date prévue du 07/11/2025 étant échue par rapport à la date actuelle (11/11), une commande est imminente. QUANTITÉ : La série [150, 100, 100, 100, 100] présente un outlier à 150u (IQR=0). La médiane des quantités filtrées est de 100u. L'historique N-1 confirme strictement ce volume de 100u (saisonnalité weak), menant à une recommandation de 100u avec une confiance élevée sur le volume (Phase 2 : high).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,217 tokens
- **Output**: 4,868 tokens
- **Total**: 7,085 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Expected Demand Trajectory**

I've been analyzing the historical sales data for the LV160 Tartinade Aubergine. The initial observations suggest a consistent baseline demand, punctuated by anomalies in August. Now I'm working on smoothing out the data and projecting forward, specifically focusing on the 30-day horizon, taking into account any seasonality.


**Refining Risk Assessment Calculations**

I'm now deep into the calculations for risk detection, specifically the interval analysis.  The median and mean interval periods are now derived from the sales data. I've also calculated the standard deviation, and will use that to determine the degree of variance in the sales cycles, as part of the overall risk profile.


**Evaluating Cycle Risk and Volume**

The interval analysis is complete. My calculations indicate a low confidence level for the cycle, with a coefficient of variation (CV) of 41.9%, just above my threshold. Based on a median interval of 17 days, the next order is due by November 24th. I'm now proceeding with the outlier detection for quantity estimation, using the interquartile range (IQR) method.


**Predicting Order Quantity and Timing**

I've just finalized the outlier detection, identifying 150u as an anomaly. After removing the outlier, the remaining data points show a stable baseline of 100u with a coefficient of variation of 0%. With the historical data indicating a median cycle of 17 days, and an interval CV of 41.9%, the next order is estimated by November 24th, with a recommendation for a quantity of 100u, based on a weak seasonality influence.


**Calculating Next Order Date**

The analysis confirms the previous date of 2025-11-07 has passed without an order. This implies the next expected order is shifted to 2025-11-24, given the 17-day cycle. Today, Nov 11th, we're 21 days past the last order, meaning the order is due.


**Revisiting Order Timing Logic**

After verifying the interval analysis, I see the last order was on 2025-10-21. Since it's currently 2025-11-11, and the cycle is 17 days, we're 4 days past the expected order date. This confirms the order is now due. The prediction continues to indicate November 24th, considering one cycle ahead.


**Refining Order Prediction Logic**

I'm now consolidating the data, and ensuring the order date calculations align with the instructions and the provided framework. Recognizing we are past the originally calculated expected order date of November 7th, I'm now framing the next order as being "due" immediately. The prediction for the quantity remains 100u, based on the stable baseline.


**Refining Date and Quantity Logic**

I'm now focusing on the date calculations, checking that the 'next order' date aligns with both the cycle length and the fact that the previous expected date has passed. The logic for determining the quantity is unchanged, holding at 100u, based on the stable baseline after outlier removal. I will confirm the date is "due" now.


**Refining Final Calculations and Logic**

I'm now integrating the updated interval of 21 days into the calculations. This adjustment aligns perfectly with today's date, 2025-11-11, signifying the order is due immediately. The "predicted next date" will be 2025-11-11, with the quantity still set to the stable baseline of 100u, based on the outlier and seasonability assessment. The "days until next" value is 0.


**Fine-tuning Interval Analysis**

I'm now recalculating the interval analysis, accounting for the 6-day period, which resulted in the 150u order being identified as an outlier. This led me to revise my calculations, and now I'm using the median interval value for the 17 day cycle to predict the next order date, which should have been 2025-11-07. Then I'll determine `days_until_next`.


**Re-evaluating Cycle and Date Logic**

After extensive review, I've adjusted the calculations to reflect the most current state. The 17-day cycle, last order on 2025-10-21, points to an order due on 2025-11-07, which has passed. The order is now due, and I'm updating the date to today, the 11th.




</details>

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 100u
- 📊 **Baseline calculée**: 100u
- 📊 **Médiane historique**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 100u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Accélération du cycle de commande, dernier intervalle de 13 jours
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-10-21
- **Prochaine prédite**: 2025-11-12 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 200u

**🧠 Raisonnement LLM:**
PHASE 1 : Analyse temporelle basée sur les intervalles [34, 22, 13] jours. Médiane = 22 jours. CV = 45.8% (confiance basse). Prochaine commande estimée au 2025-11-12 (2025-10-21 + 22j), soit dans 1 jour. Présence d'un risque de rupture à court terme. PHASE 2 : Analyse des quantités [100, 100, 100, 200]. Q1=100, Q3=100, IQR=0. La commande de 200u (août) est identifiée comme un outlier. La baseline est fixée à 100u (médiane des points restants). La comparaison N-1 montre une stabilité parfaite avec octobre 2024 (100u), validant une recommandation de 100u sans ajustement saisonnier.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,159 tokens
- **Output**: 2,685 tokens
- **Total**: 4,844 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Order Deliveries**

I'm currently focused on the tomato basilico LV162 orders, specifically the 190g jars. Delivery dates for 2025-09-16, 2025-10-08, and 2025-10-21 are in my sights, with quantities of 100 units each. I've also noted a larger delivery of 200 units from 2025-08-13. My aim is to monitor these for fulfillment within the 30-day window.


**Calculating Delivery Intervals**

I've just finished calculating the delivery intervals for the LV162 orders. The median interval is 22 days, with a mean of 23 days and a coefficient of variation of approximately 45.8%. Based on this, the next predicted delivery is 2025-11-12, which is well within the 30-day window.


**Evaluating Order Patterns**

I've just finished the outlier detection and baseline adaptation steps. The 200-unit order from August was flagged and excluded. The baseline is now set at 100 units, and seasonality is being examined, with current data showing a consistent pattern in October for both 2024 and 2025. I'm assessing if there's any significant variance in these recent periods.


**Refining Delivery Predictions**

I'm now assessing the predictive model's output, paying close attention to its confidence levels. Though the coefficient of variation initially flagged a "low" confidence due to interval variability, the analysis now indicates a "medium" confidence. The recommendation remains at 100 units. The shrinking delivery intervals and stable quantities are key observations. The next delivery, 2025-11-12, appears highly likely.


**Predicting Future Orders**

I'm now assessing the final output of the analysis. The model predicts a 100-unit order for LV162 on November 12, 2025, a day from now. The intervals are shrinking, and the quantities are stable. The analysis is highlighting a potential acceleration of the delivery cycle. The confidence level is medium. The risk is high.


**Concluding Order Analysis**

The final touches are being applied to the analysis. The core finding is a predicted 100-unit order for LV162 on November 12, 2025. This aligns with the shrinking delivery intervals and stable quantities. A heightened risk is observed. The confidence level, while starting low, is now medium due to the clear pattern, despite limited data.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 08:23:57: 100u
- 2025-10-08 06:27:45: 100u
- 2025-09-16 09:13:36: 100u
- 2025-08-26 09:29:26: 100u
- 2025-08-20 07:51:02: 150u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-08 10:15:57: 100u
- 2024-10-15 08:44:39: 100u
- 2024-10-08 11:14:44: 100u

**✅ Quantité LLM**: 100u (confidence: medium)
**📊 Quantité Réelle**: 100u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 08:23:57: 100u
- 2025-10-08 06:27:45: 100u
- 2025-09-16 09:13:36: 100u
- 2025-08-13 10:56:00: 200u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 08:44:39: 100u
- 2024-10-08 11:14:44: 100u

**✅ Quantité LLM**: 100u (confidence: medium)
**📊 Quantité Réelle**: 100u

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 09:13:36: 100u
- 2025-08-20 07:51:02: 100u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-08 10:15:57: 100u
- 2024-10-01 08:04:30: 100u

**📊 Quantité Médiane (fallback)**: 100u
**📊 Quantité Réelle**: 100u

</details>




---

## False Positives (19)

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
| [PF3302] BONI BIO MAYONNAISE 500ML | 220 | Stock prédit: 116.9u (3j restants) → prédit 220u mais non commandé |
| [PF1503] BONI VINAI MOUTARDE 450ML | 252 | Stock prédit: 177.2u (7j restants) → prédit 252u mais non commandé |
| [PF1502] BONI VINAI FINE HERBE 450ML | 1008 | Stock prédit: 667.8u (5j restants) → prédit 1008u mais non commandé |
| [PF1501] BONI VINAI CIBOULETTE 450ML | 630 | Stock prédit: 417.4u (5j restants) → prédit 630u mais non commandé |
| [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg | 336 | Stock prédit: 238.3u (9j restants) → prédit 336u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 27 | Stock prédit: 14.1u (14j restants) → prédit 27u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 100 | Stock prédit: 9.1u (1j restants) → prédit 100u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 100 | Stock prédit: -18.4u (-2j restants) → prédit 100u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 100 | Stock prédit: 11.9u (1j restants) → prédit 100u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 100 | Stock prédit: 42.2u (9j restants) → prédit 100u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 100 | Stock prédit: 32.2u (9j restants) → prédit 100u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 48 | Stock prédit: 23.6u (19j restants) → prédit 48u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 50 | Stock prédit: 24.6u (19j restants) → prédit 50u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 100 | Stock prédit: 9.0u (2j restants) → prédit 100u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 100 | Stock prédit: 8.5u (2j restants) → prédit 100u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 48 | Stock prédit: 15.1u (12j restants) → prédit 48u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 80 | Stock prédit: 35.3u (26j restants) → prédit 80u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 80 | Stock prédit: 1.7u (0j restants) → prédit 80u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 100 | Stock prédit: -120.4u (-47j restants) → prédit 100u mais non commandé |


---

## False Negatives (1)

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
| [LV147] LV Sauce Cocktail 200 ml | 50 | Stock: 10.2u (12j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T08:10:29.660Z*
