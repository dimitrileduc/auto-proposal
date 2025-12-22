# Rapport Backtest - Client BONNI, ACHAT

## Contexte

- **Client** : BONNI, ACHAT (ID: 8200)
- **Commande réelle** : S39480
- **Date commande** : 2025-10-01 05:53:38
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 37
- **Tokens**: 22,817 input + 98,904 output = 121,721 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.5% | 19 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 19.0% | Score équilibré global |

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
| **MAE** | 5.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 24 | 32 | 8.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 6u
- 📊 **Baseline calculée**: 6u
- 📊 **Médiane historique**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 6u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Irrégulier avec une préférence marquée pour le mercredi, cycle moyen estimé à environ 21 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Le client présente un historique de commandes récurrentes de 6 unités (observations du 24/09 et 13/08). Malgré une commande sporadique de 1u et une plus forte de 10u en juillet, la stabilité à 6u est le signal le plus fiable. L'historique N-1 montrait une commande plus importante en septembre (16u), mais la tendance 2025 semble stabilisée plus bas. Intervalle de commande suggérant un besoin sous 15-20 jours.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 695 tokens
- **Output**: 1,750 tokens
- **Total**: 2,445 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Mayonnaise Volumes**

I'm now analyzing the recent sales data for FILOU MAYONNAISE. Looking at the weekly volumes, I see a consistent pattern of 6 units on Wednesdays for the past two months, except for a single-unit outlier in early August. I'm investigating the potential causes of that drop. My plan now is to compare the 10u observed on July 30th and the 6u's since then.


**Projecting Order Frequencies**

I'm now calculating order intervals. The observed gaps vary significantly, with a clear recent trend. I'm focusing on the 14 and 42-day intervals. Given today's date, and a recent order on 2025-09-24, I'm working to predict the next potential ordering dates. I'm also factoring in the previous year's September data.


**Determining Order Quantities**

I've just finished the analysis, and I'm settling on a baseline of 6 units for the next order of FILOU MAYONNAISE. The sales history shows a repeating pattern of 6 units, with the outlier of 1 unit. I'm now taking into account the seasonality from last year's data, which shows an increase in September, but I'm considering this a weak impact on the forecast.


**Predicting Replenishment Cycles**

I'm now calculating the projected replenishment date. Considering the varying order intervals, the next order is likely within the next two weeks. I'm focusing on the median interval and seasonal data. Based on the analysis, I'm proposing an order for approximately 6 units to avoid any potential stockouts.


**Finalizing Order Parameters**

I've now refined the analysis and am ready to conclude. Considering the variable intervals and the 6-unit baseline, I'm comfortable proposing another order for 6 units. The predicted replenishment date is approximately October 15th, aligning well with the typical ordering cycle. The confidence remains medium, given data sparsity.




</details>

</details>


<details>
<summary><strong>2. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 24u vs Médiane: 24u (Réel: 32u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 24u
- 📊 **Baseline calculée**: 24u
- 📊 **Médiane historique**: 24u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 8u (25.0%)
- 📉 **Erreur Médiane**: 8u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 24u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle court initial identifié (6 jours) suivi d'une période d'inactivité de 48 jours.
- **Cycle médian (jours)**: 6
- **Dernière commande**: 2025-08-13
- **Prochaine prédite**: 2025-08-19 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Dernière commande le 13/08, soit il y a 48 jours. Bien que le cycle détecté en août soit de 6 jours, l'historique N-1 montre une commande le 05/09. Le client est donc en retard de commande par rapport au rythme habituel et à la saisonnalité N-1. Risque de rupture probable par rapport au besoin latent. On préconise le volume habituel récent de 24 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 635 tokens
- **Output**: 2,039 tokens
- **Total**: 2,674 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Intervals**

I'm currently focused on the production intervals for [PF0088] FILOU VOL AU VENT 800 GR. Looking at the recent history, I see production runs of 24 units. I need to determine the interval between those runs.


**Evaluating Seasonal Patterns**

I've examined the production intervals for [PF0088] FILOU VOL AU VENT 800 GR and noted the 6-day cycle in August. Considering the 48-day gap since the last order and the historical September data, I am now thinking this might be a seasonal product with potential demand for October. A "RISQUE OUI" alert is triggered.


**Anticipating Potential Demand**

Considering the 48-day gap since the last order of [PF0088], and the history from September 2024, my focus has shifted to the risk of stockout. The 6-day cycle observed in August is now obsolete. I must now account for seasonality, suggesting that a repeat order could be imminent, especially given the timeframe. My estimate for the recommended quantity is now a baseline of 24 units.


**Confirming Order Imminence**

My assessment focuses on the 48-day gap since the last order and the historical September data. The 6-day cycle is deemed outdated. There is now a strong possibility of an imminent order for [PF0088] FILOU VOL AU VENT 800 GR, especially with the date being September 30, and the last order being August 13.


**Predicting Order Imminence**

I am now accounting for the 48-day gap since the last order and the September 2024 history, I've confirmed that the estimated next date is overdue. Considering the context of seasonal products, a repeat order is now not just possible, but quite likely. Therefore, I will recommend the base quantity of 24 units.


**Determining Recommendation Quantity**

Considering the 6-day cycle and the 48-day gap, I'm now certain an order is overdue for [PF0088]. With September ending, the historical data and recent trends strongly suggest an imminent need, and I've set the 'days_until_next' to zero. Given the history of 24 units, and that the product is likely seasonal, my recommendation is to maintain the baseline order of 24 units.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 10:24:19: 6u
- 2025-08-13 08:37:02: 6u
- 2025-08-07 14:20:17: 1u
- 2025-07-30 13:32:27: 10u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:20:41: 16u

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>2. [PF0088] FILOU VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-13 08:37:02: 24u
- 2025-08-07 14:20:17: 24u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:20:27: 32u

**✅ Quantité LLM**: 24u (confidence: low)
**📊 Quantité Réelle**: 32u

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
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 208 | Stock prédit: 183.8u (37j restants) → prédit 208u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 25 | Stock prédit: 26.5u (38j restants) → prédit 25u mais non commandé |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 52 | Stock prédit: 48.1u (62j restants) → prédit 52u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 5 | Stock prédit: 5.2u (31j restants) → prédit 5u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 6 | Stock prédit: 5.1u (27j restants) → prédit 6u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 4 | Stock prédit: 3.6u (41j restants) → prédit 4u mais non commandé |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 15 | Stock prédit: 13.9u (65j restants) → prédit 15u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Stock prédit: 1.3u (15j restants) → prédit 3u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 6 | Stock prédit: 2.1u (8j restants) → prédit 6u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 6 | Stock prédit: 1.6u (5j restants) → prédit 6u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 15 | Stock prédit: -1.2u (-3j restants) → prédit 15u mais non commandé |
| [PF0078] FILOU CHASSEUR 5 L | 7 | Stock prédit: -15.7u (-36j restants) → prédit 7u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Stock prédit: 0.4u (14j restants) → prédit 2u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 6 | Stock prédit: 2.1u (40j restants) → prédit 6u mais non commandé |
| [JF074] FIL MAYONNAISE ŒUFS 1L SEAU  | 10 | Stock prédit: -24.5u (-54j restants) → prédit 10u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:52:52.323Z*
