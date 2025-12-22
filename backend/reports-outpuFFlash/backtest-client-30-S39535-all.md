# Rapport Backtest - Client Conserverie Et Moutarderie Belge

## Contexte

- **Client** : Conserverie Et Moutarderie Belge (ID: 30)
- **Commande réelle** : S39535
- **Date commande** : 2025-10-03 08:01:58
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 7,328 input + 40,272 output = 47,600 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 28.6% | 7 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 44.4% | Score équilibré global |

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
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Pattern temporel**: Commande régulière toutes les 2 à 3 semaines
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-26
- **Prochaine prédite**: 2025-10-14 (dans 12j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Pas de jour de commande fixe détecté (alternance entre lun, mar, jeu, ven)
- **Outliers détectés**: 13u

**🧠 Raisonnement LLM:**
Le cycle de commande récent est stable avec une médiane de 18 jours. La prochaine commande est prévue aux alentours du 14 octobre, soit dans l'horizon de 30 jours (12 jours restants). Bien que l'historique N-1 montre des pics ponctuels (13u), la tendance sur les 3 derniers mois est très stable à 1 unité par commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 882 tokens
- **Output**: 1,914 tokens
- **Total**: 2,796 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Ketchup Demand**

I'm currently working on the demand for "JF CURRY KETCHUP SQUEE ZE 300ML [JF040]". I've got some historical data points: one unit sold on September 26, 2025; one unit on September 8, 2025; one unit on August 26, 2025; and two units on July 24, 2025. It appears I have a gap for September 12, 2024. I need to figure out what happened in 2024.


**Projecting Future Ketchup Needs**

I've refined the model. Based on the 2025 data, the predicted next order date is October 14th, 2025, which falls within the 30-day horizon. Considering the 6-day gap since the last order and the upcoming 12 days until the predicted order, I've flagged a potential stockout risk. Further, the recent quantities sold suggest a median of 1 unit, with previous years' data showing more variance.


**Evaluating Order Intervals**

I've been analyzing the order intervals, particularly focusing on the most recent data. The average time between orders is around 18 days. Considering the last order was 6 days ago, with the next predicted order in 12 days, I've flagged a stockout risk, and recommend an order of 1 unit. Also, the 13-unit orders in the past are still being reviewed.


**Synthesizing Findings and Recommendations**

I've finalized the analysis. Based on consistent 1-unit orders and an 18-day ordering cycle, I've calculated a predicted order date of October 14, 2025. Given the current date (October 2, 2025), I recommend ordering 1 unit to mitigate potential stockout risk within the 30-day horizon. The analysis is complete.


**Refining Cycle and Dates**

I've re-evaluated the ordering cycle. Based on the recent order patterns, especially those in 2025, I maintain the 18-day cycle. The calculations confirm a predicted order date of October 14th, 2025, posing a stockout risk, and a recommendation of 1 unit.




</details>

</details>


<details>
<summary><strong>2. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.4u
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
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec pic d'activité saisonnier marqué en septembre/octobre
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-08 (dans 6j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: strong
- **Tendance**: decreasing
- **Analyse jour cycle**: Habituellement commandé en milieu de semaine (mardi/jeudi), la dernière commande était un lundi.
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique N-1 démontre une accélération forte des commandes entre le 26 septembre et le 1er octobre (passant de 2u à 4u). Bien que l'année 2025 semble montrer un volume plus faible (tendance baissière), nous arrivons au terme d'un cycle de ~25-30 jours depuis la commande du 08/09. Le risque de rupture est réel car nous entrons dans la fenêtre de commande saisonnière haute. On recommande 1 unité pour couvrir le besoin immédiat sans surstocker face à une tendance 2025 pus prudente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 824 tokens
- **Output**: 2,059 tokens
- **Total**: 2,883 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Prior Sales Trends**

I'm currently working on the sales analysis for product JF038, focusing on the ketchup. Looking at the recent history, I see a clear pattern with small, infrequent orders. I'm now comparing the current period's data with last year's figures to understand the broader sales trends and any seasonal variations. I'm also examining the time elapsed between orders.


**Evaluating Order Intervals**

I've calculated the median interval between orders, around 17 days overall, though the N-1 data from late September/early October of 2024 shows much higher frequency. Considering this season, I'm now looking at the time since the last order (24 days) and comparing it to the 2024 data to gauge potential ordering patterns. It's time to refine the predictions.


**Assessing Ordering Urgency**

I've re-examined the N-1 data and compared it to the current situation. Considering the 24 days since the last order and the historical frequency, there's an increased probability of an imminent order. The seasonal peak in late September/early October of 2024 is now aligned with the current timeframe. I'm projecting a potential need to replenish. I have adjusted the analysis for low volume.


**Finalizing Order Recommendations**

I'm now determining the appropriate order quantity for the ketchup. Considering the recent pattern of 1u orders, and the overall volume of the product, I'm recommending one unit. Although the N-1 data includes a larger, outlier order, the recent trend seems lower. The risk indicator remains "yes" due to seasonality.


**Calculating Predicted Order Date**

The analysis is focusing on when the next order is due for the ketchup. With the last order placed 24 days ago and the seasonal concentration in late September, I'm adjusting the projected date. Considering the varying intervals, I'm calculating the next order date and refining the expected quantity, given recent order sizes. I'm taking the seasonal peak into account.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 06:28:44: 1u
- 2025-09-08 07:52:26: 1u
- 2025-08-26 09:02:26: 1u
- 2025-07-24 13:45:03: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-12 10:01:21: 1u
- 2024-09-05 11:50:34: 2u
- 2024-08-23 08:20:07: 13u
- 2024-08-13 10:10:43: 1u
- 2024-07-05 07:40:56: 1u
- 2024-04-30 10:09:27: 2u
- 2024-04-25 14:37:04: 1u
- 2024-04-25 08:31:46: 13u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 07:52:26: 1u
- 2025-07-24 13:45:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 06:55:39: 4u
- 2024-09-26 09:23:08: 2u
- 2024-09-05 11:50:34: 1u
- 2024-08-23 08:30:23: 1u
- 2024-08-13 10:10:43: 1u
- 2024-05-28 07:49:32: 1u
- 2024-04-30 10:09:27: 2u
- 2024-04-25 14:37:04: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (5)

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
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: -3.3u (-27j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -3.4u (-27j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (33j restants) → prédit 1u mais non commandé |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 161 | Stock prédit: -29.9u (-10j restants) → prédit 161u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:49:08.797Z*
