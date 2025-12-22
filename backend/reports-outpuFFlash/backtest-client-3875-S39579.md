# Rapport Backtest - Client E.L.D. GMBH

## Contexte

- **Client** : E.L.D. GMBH (ID: 3875)
- **Commande réelle** : S39579
- **Date commande** : 2025-10-06 12:04:21
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,609 input + 7,706 output = 11,315 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 4 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 40.0% | Score équilibré global |

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
| **MAE** | 112.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 58.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -58.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 80 | 192 | 112.0 | 58.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 80u vs Médiane: 128u (Réel: 192u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 80u
- 📊 **Baseline calculée**: 100u
- 📊 **Médiane historique**: 128u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 112u (58.3%)
- 📉 **Erreur Médiane**: 64u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 80u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier (médiane de 21 jours)
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
Le cycle moyen entre les commandes est d'environ 21 jours. La dernière commande datant du 22 septembre, la prochaine est prévue autour du 13 octobre, soit dans 8 jours, ce qui justifie une commande immédiate. La quantité recommandée de 80 unités correspond exactement à la dernière commande ainsi qu'au volume commandé à la même période l'année précédente (saisonnalité N-1 stable à 80u en septembre/octobre).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,011 tokens
- **Output**: 2,147 tokens
- **Total**: 3,158 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Historical Trends**

I've been crunching the numbers on the MF Brotaufstrich Tomate Bärlauch 2 50g product's sales figures. Focusing on the past year's data, I'm identifying the trends. I'm taking a look at the data points from September, and I'm comparing them to the previous month.


**Assessing Cycle Time Variance**

I've calculated the median cycle time based on recent order intervals, identifying a range between 15 and 20 days. Comparing that against the product's ordering pattern, specifically the intervals from late 2024, reveals a variability that's key. Considering the 2025-10-05 target date, the current cycle appears secure.


**Assessing Order Date Risk**

Based on the order history, I've calculated a median cycle time of 21 days for the MF Brotaufstrich Tomate Bärlauch 2 50g product. Given the 2025-10-05 target date, the last order (2025-09-22) plus 21 days gives us an expected order date of 2025-10-13, which exceeds the target. I've assessed this as a risk.


**Evaluating Quantity Predictions**

I've examined the product quantities, focusing on the recent orders and those from the previous year during the same period. The median quantity of the last four orders is 104, while 80 is the most common and recent order quantity, fitting the seasonality. I've decided to predict an order of 80 units.


**Assessing Order Date Risk**

Based on calculations, I've confirmed a high risk of not meeting the 2025-10-05 target date. Using the 21-day median cycle time and the last order's date, the next order is estimated for 2025-10-13, exceeding the target. I've re-evaluated and confirmed.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 128u
- 2025-08-04 10:51:04: 128u
- 2025-07-14 09:47:20: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 08:48:16: 80u
- 2024-09-18 06:24:53: 80u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 80u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 48u
- 2024-06-17 11:39:54: 192u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 48u
- 2024-03-13 08:20:22: 128u
- 2024-02-19 10:46:41: 64u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 192u

</details>




---

## False Positives (3)

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
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 64 | Stock prédit: 29.4u (6j restants) → prédit 64u mais non commandé |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 48 | Stock prédit: 10.0u (3j restants) → prédit 48u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 112 | Stock prédit: 108.0u (24j restants) → prédit 112u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:50:41.547Z*
