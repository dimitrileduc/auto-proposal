# Rapport Backtest - Client CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON

## Contexte

- **Client** : CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON (ID: 24092)
- **Commande réelle** : S39541
- **Date commande** : 2025-10-03 10:10:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 24,484 input + 103,224 output = 127,708 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 11.1% | 9 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 20.0% | Score équilibré global |

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
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 200.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 200.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 200.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (1)

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
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Mensuel irrégulier avec accélération récente (20 jours)
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-08-22
- **Prochaine prédite**: 2025-09-11 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: Passage d'un rythme mensuel en début d'année à une fréquence plus soutenue en août.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen récent est de 20 jours. La dernière commande datant d'il y a 41 jours (22 août), le client a dépassé son cycle habituel de réapprovisionnement, rendant le risque de rupture très élevé pour cette mayonnaise. La quantité recommandée suit la médiane des commandes de l'été 2025 (3 unités), qui montre une légère progression par rapport à l'historique N-1 (2 unités).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,051 tokens
- **Output**: 1,726 tokens
- **Total**: 2,777 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Product Data**

I'm now examining the product data for FILOU MAYONNAISE, specifically the 1000ml size. I've noted a target date in late 2025. I've started to compile recent sales figures, and noticed a few fluctuations within the last three months, specifically the number of units sold on different dates. Now considering the historical data from a year prior.


**Assessing the Order Frequency**

I'm now calculating the average cycle, which appears to be about 20 days. Given the product's last order date was August 22nd, and the current date is October 2nd, the predicted next order date of September 11th has passed. This suggests a higher risk of needing a new order soon.


**Determining the Order Quantity**

I've just assessed the risk, noting we're past the predicted order date with a significantly longer gap than the typical cycle. Consequently, the risk of needing a new order is assessed to be high, with an expected timeline of 30 days. Analyzing the recent order quantities, the median quantity is 3 units, and the trend shows a slight increase in demand. Based on the logic of prioritizing recent medians, I recommend ordering 3 units.


**Calculating Predicted Quantities**

I'm now integrating the data, calculating the predicted next order date as September 11th, which has passed. Consequently, the analysis indicates a high risk of needing an order. Reviewing order quantities, the median is 3 units, and the trend suggests a slight increase. I'm finalizing the recommendation of ordering 3 units.


**Finalizing the Recommendation**

I'm now integrating all data points, confirming the high-risk assessment for an overdue order. Recent orders show a median of 3 units, with a slight upward trend, so the recommendation remains at 3 units. I'm building the JSON for the analysis.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 11:46:40: 3u
- 2025-08-12 11:22:40: 1u
- 2025-08-12 10:31:34: 2u
- 2025-07-14 07:51:45: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 06:46:55: 2u
- 2024-03-20 07:37:07: 2u
- 2024-01-09 08:56:08: 0u
- 2023-12-12 14:54:31: 0u
- 2023-12-07 10:58:24: 0u
- 2023-11-07 08:23:13: 0u
- 2023-10-17 13:50:06: 0u

**✅ Quantité LLM**: 3u (confidence: medium)
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
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 2 | Stock prédit: 1.8u (59j restants) → prédit 2u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 1 | Stock prédit: 0.7u (18j restants) → prédit 1u mais non commandé |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 2 | Stock prédit: -0.4u (-6j restants) → prédit 2u mais non commandé |
| [PF1687] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock prédit: 0.7u (20j restants) → prédit 2u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [PF3274] JF BURGER SAUCE 925ML | 1 | Stock prédit: 0.6u (71j restants) → prédit 1u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: -0.7u (-21j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:58:18.019Z*
