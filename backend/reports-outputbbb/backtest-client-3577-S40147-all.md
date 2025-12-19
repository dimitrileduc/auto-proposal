# Rapport Backtest - Client ITM ALIMENTAIRE BELGIUM

## Contexte

- **Client** : ITM ALIMENTAIRE BELGIUM (ID: 3577)
- **Commande réelle** : S40147
- **Date commande** : 2025-11-05 14:17:31
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 7,360 input + 7,255 output = 14,615 total


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
| **MAE** | 32.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 36.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [PF2036] ITM BOULETTES TOMATE 800 GR | 128 | 64 | 64.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 112 | 112 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM: 128u vs Médiane: 64u (Réel: 64u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 128u
- 📊 **Baseline calculée**: 89.6u
- 📊 **Médiane historique**: 64u
- ✅ **Réel commandé**: 64u
- 📉 **Erreur LLM**: 64u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 128u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Rythme variable avec une médiane de 15 jours, principalement le mardi.
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-05 (dans 1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: Habitude de commande le mardi (80% des cas récents). Nous sommes actuellement un mardi (2025-11-04) mais aucune commande enregistrée ce matin.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian est de 15 jours. La dernière commande date d'il y a 21 jours (14/10), le client est donc en retard sur son cycle habituel, ce qui déclenche un risque imminent. Historiquement (N-1), le mois de novembre présente des volumes plus importants (128u le 07/11/23 et 192u le 29/11/23). Les commandes se font par multiples de 64u. Compte tenu de la saisonnalité haussière en novembre et de la dernière commande à 128u, nous recommandons 128u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,487 tokens
- **Output**: 2,502 tokens
- **Total**: 4,989 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Order Volumes**

I've begun analyzing the data for product PF2036, focusing on the order quantity predictions. The aim is to forecast the volume needed for the next 30 days, starting from today, November 4th, 2025. I've noted a recent order of 128 units on October 14th, but I'm missing data for October 9th. Now I am trying to use the data to extrapolate future demands.


**Evaluating Demand Patterns**

I've calculated a median order cycle of 15 days, with the most recent order on October 14th. This suggests a theoretical next order around October 29th, making the client six days late as of today, November 4th. This confirms a significant risk of an order within the next 30 days.


**Calculating Order Quantities**

I'm now calculating the mean of the recent quantities, which is roughly 90 units. Examining the historical data from November 2023, there's an increase in demand, with orders of 128 and 192 units. The base unit seems to be 64, with multiples observed. Given the seasonality and a recent order of 128u, I am recommending an order of 128 units.


**Predicting Final Order Volume**

I've re-examined the N-1 data, specifically for November 2023. Given the date being November 4th, I noted orders of 128 and 192 units in that month. The base unit is 64, with multiples observed. Considering the seasonality and the recent 128 unit order, my final recommendation remains 128 units, with high confidence in this range.


**Confirming Final Quantity**

I'm now revisiting the dates and quantities. Considering today's date of November 4th, 2025, and with the client overdue by six days, I am re-assessing the order. The recent orders are multiples of 64 and align with prior year's demand. Given the "now" status, I'm confirming 128 units as the advised order quantity. I'll flag an immediate need.


**Formulating the Recommendation**

I'm now integrating all data points to derive the final quantity. Considering the late status, the 15-day median cycle, and November's historical high of 128 units, the recommendation remains at 128 units. I will set the *days_until_next* to 1, to reflect an order is imminent. I'm also confirming the JSON data is correctly structured.




</details>

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM: 112u vs Médiane: 224u (Réel: 112u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 112u
- 📊 **Baseline calculée**: 112u
- 📊 **Médiane historique**: 224u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 112u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 112u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier basé sur l'historique N-1 de 21 à 28 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-04 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 448u

**🧠 Raisonnement LLM:**
La Phase 1 détecte un risque imminent : le cycle médian historique (21 jours) place la prochaine commande théorique le 2025-11-04 (aujourd'hui). Malgré une pause inhabituelle en septembre, la commande d'octobre confirme la reprise de l'activité. En Phase 2, l'analyse des quantités montre un pattern B2B rigide par multiples de 112u (cartons ou palettes). La quantité de 112u est la plus fréquente (mode) et correspond à la demande de fond observée en N-1 à la même période (Novembre 2023).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,494 tokens
- **Output**: 2,559 tokens
- **Total**: 5,053 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Recent Data Points**

I'm currently focused on the recent data for product PF2996. Specifically, I'm noting the sales figures from October 14th, which show 112 units. I'm also cross-referencing these recent figures against the higher sales volumes of 448 and 224 units from August. The goal is to identify trends within the 30-day horizon.


**Comparing Historical Sales Data**

The historical data is being parsed, noting consistent 112-unit sales at various points. I am also calculating the intervals between sales events. There is a cluster of high sales in August 2025. Now I'm comparing the intervals between sales events in the current 30-day window with historical intervals to identify patterns.


**Interpreting Interval Discrepancies**

I'm now focusing on the discrepancy between the recent 70-day interval and the historical median of 21 days. The next order date, based on the historical pattern, would be today. The B2B decision-making process is confirming a risk situation, and I am reviewing the historical quantities. The client's behavior suggests monthly or faster orders.


**Synthesizing Findings and Actions**

The analysis confirms a likely order date today, based on historical patterns. I'm focusing on the recent 70-day gap and comparing it to the faster historical pace of roughly 21-28 days. The B2B model indicates a high-probability demand, and given the consistent multiples of 112 units, I'm recommending 112 units for replenishment to avoid a rupture.


**Confirming Order and Quantity**

I've finalized my analysis. Given the historical median interval of 21 days and today's date, an order is highly probable. My assessment of the consistent multiples of 112 units, coupled with the B2B model, reinforces that 112 units is the correct quantity. I'm assigning a medium confidence level.


**Reviewing Cycle Calculations**

The analysis continues, with a focus on refining the cycle time calculation. I've re-calculated the median interval, which is 22 days, slightly different from the initial 21. Given the recent 70-day gap and the 22-day historical median, and considering today's date, I'm confirming the previous recommendation for an order.




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

**✅ Quantité LLM**: 128u (confidence: high)
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

**✅ Quantité LLM**: 112u (confidence: medium)
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
| [PF2997] ITM BO VIN YOGORETTE PET 450 | 112 | Stock prédit: -67.8u (-9j restants) → prédit 112u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:52:57.834Z*
