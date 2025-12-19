# Rapport Backtest - Client DELISALADES, Jean-Luc Durré

## Contexte

- **Client** : DELISALADES, Jean-Luc Durré (ID: 8144)
- **Commande réelle** : S40071
- **Date commande** : 2025-11-03 13:21:41
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 2
- **Tokens**: 4,317 input + 5,374 output = 9,691 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 160.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 320 | 160.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 320u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 160u
- 📊 **Médiane historique**: 160u
- ✅ **Réel commandé**: 320u
- 📉 **Erreur LLM**: 160u (50.0%)
- 📉 **Erreur Médiane**: 160u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières avec un cycle médian de 17.5 jours, montrant une augmentation de volume
- **Cycle médian (jours)**: 17.5
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-10-31 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
PHASE 1 : Cycle identifié via intervalles [15, 13, 21, 20] jours. Médiane = 17.5 jours. Le CV est de 19.36% (< 20%), indiquant une forte régularité (Confiance High). La date prédite était le 2025-10-31, soit au début de l'horizon de 30 jours (actuellement en retard/due). PHASE 2 : Analyse des quantités [80, 80, 160, 160, 160]. Aucun outlier détecté par la méthode IQR (Barrière 280u). Une tendance haussière nette est observée (passage de 80 à 160u). La baseline est établie à 160u (dernière valeur et médiane des points récents). Impact saisonnier fort (+100% vs N-1), confirmant la tendance croissante.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,181 tokens
- **Output**: 3,083 tokens
- **Total**: 5,264 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Data**

The recent production history for the FILOU CHASSEUR product is what I'm currently focused on. Specifically, I'm analyzing the 5-liter variant, product code PF0078. I see consistent production runs of 160 units in September and October. Before that, the previous two months show a smaller run of 80 units each.


**Forecasting Production Cycles**

I'm calculating the expected production cycle for the PF0078 variant, using the last four production run dates. The median cycle is 17.5 days, I'll round this up to 18 days for a more conservative estimate. This yields an estimated next production date of October 31st, which has passed. The current date is November 2nd, therefore, the model has fallen behind.


**Evaluating Recent Data Points**

My focus is shifting to a more detailed analysis of the production quantities for PF0078. The data reveals an upward trend in production volume, with recent runs consistently at 160 units, a notable increase from the earlier 80-unit runs. I'm now quantifying this variance, especially in light of the predicted production date.


**Refining Cycle Time Analysis**

I'm now zeroing in on the production cycle intervals. Calculating the median, mean, standard deviation, and coefficient of variation (CV) reveals a cycle length of approximately 17.5 days. The CV is around 19%, giving high confidence in the prediction. I'm accounting for this as I refine the model.


**Predicting Future Orders**

I'm now integrating the analysis of the production quantities and their timing. The current date is November 2nd, and given the cycle, the next production run was estimated for October 31st, a date that has passed. The baseline quantity of 160 units, showing an increasing trend, should be ordered immediately.


**Calculating Recommendations**

I'm now determining the most appropriate quantity for the next order. Given the 17.5-day cycle and a past-due production date, along with an observed doubling of the production quantity, I'm recommending an immediate order of 160 units. High confidence, due to a stable trend.


**Synthesizing Findings and Recommendations**

I'm now integrating all the data points, including cycle times, quantity shifts, and the recent production runs. Based on the overdue prediction date and the increased, stabilized production volume of 160 units, I'm recommending an immediate order of 160 units, with high confidence.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:07:34: 160u
- 2025-09-23 07:48:19: 160u
- 2025-09-02 06:58:03: 160u
- 2025-08-20 11:49:07: 80u
- 2025-08-05 09:20:37: 80u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-23 09:48:19: 80u
- 2024-10-14 12:00:44: 80u

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 320u

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
| [PF3251] JEFKE CHIVE VINAIGRETTE 5L | 40 | Stock prédit: 75.0u (30j restants) → prédit 40u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:05:11.572Z*
