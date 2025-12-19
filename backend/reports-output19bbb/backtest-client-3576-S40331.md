# Rapport Backtest - Client HOUGARDY S.A.

## Contexte

- **Client** : HOUGARDY S.A. (ID: 3576)
- **Commande réelle** : S40331
- **Date commande** : 2025-11-13 13:56:08
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 2
- **Tokens**: 4,789 input + 4,382 output = 9,171 total


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
| **MAE** | 27.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 16.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0078] FILOU CHASSEUR 5 L | 133 | 160 | 27.0 | 16.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 133u vs Médiane: 160u (Réel: 160u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 133u
- 📊 **Baseline calculée**: 133.33u
- 📊 **Médiane historique**: 160u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 27u (16.9%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 133u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire majoritaire le jeudi malgré une rupture de rythme en octobre
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-11-06
- **Prochaine prédite**: 2025-11-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian détecté est de 7 jours (intervalles : 7, 7, 21, 7). La prochaine commande est prévue pour le 2025-11-13, soit dans 1 jour (Risque OUI). L'analyse des quantités montre une alternance entre 80u et 160u sans outliers statistiques. Avec un CV de 30.6% sur les quantités, la méthode de la moyenne tronquée (excluant un 80 et un 160) est appliquée, aboutissant à une recommandation de 133u. La saisonnalité N-1 montre des volumes et fréquences comparables, validant la baseline.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,470 tokens
- **Output**: 2,470 tokens
- **Total**: 4,940 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Trajectory**

I'm currently focused on the product [PF0078] FILOU CHASSEUR 5 L, examining its trajectory over the next 30 days, until 2025-12-12. Recent data from the past three months shows a sale of 80 units on 2025-11-06. I'm keen to understand the recent trends.


**Projecting Future Orders**

I'm now calculating the projected next order date, with 2025-11-13 as an initial estimation. Considering the median interval of 7 days, and that the product's last order was on 2025-11-06, this prediction seems reasonable. The intervals show high variability though, and the high coefficient of variation influences my confidence in these early projections.


**Calculating Volatility Assessment**

I'm now calculating the volatility of the order quantities. Using the recent order history, the coefficient of variation is roughly 30.6%, suggesting a moderate degree of fluctuation. The Interquartile Range analysis indicates no outliers in the recent period. This refined perspective helps inform my risk assessment.


**Evaluating Ordering Frequency**

I'm now determining the level of confidence in the forecast for the next order date, using the coefficient of variation (CV) for the intervals between orders, which is quite high at 57.7%. This suggests a 'low' confidence in the initial prediction of 2025-11-13.


**Finalizing Order Predictions**

I'm now assessing both the next order date and the likely quantity, with a low confidence in the frequency prediction due to a high CV of 57.7%. However, the quantity forecast seems more stable, with a moderate CV of 30.6%, suggesting a truncated mean of 133 units. The final risk assessment is now being calculated.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-06 11:37:10: 80u
- 2025-10-30 08:16:33: 160u
- 2025-10-09 09:00:46: 160u
- 2025-10-02 11:42:51: 80u
- 2025-09-25 06:26:38: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 14:10:50: 160u
- 2024-10-17 10:13:31: 160u
- 2024-10-03 06:59:28: 160u
- 2024-09-24 07:02:33: 160u
- 2024-09-12 09:58:22: 160u
- 2024-09-05 11:35:13: 80u
- 2024-08-14 06:06:20: 80u
- 2024-07-04 07:42:30: 160u
- 2024-06-27 07:49:07: 80u
- 2024-06-18 08:13:28: 160u
- 2024-06-06 12:24:49: 160u
- 2024-05-08 14:34:51: 160u

**✅ Quantité LLM**: 133u (confidence: medium)
**📊 Quantité Réelle**: 160u

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
| [PF0077] FILOU PROVENCALE 5 L | 40 | Stock prédit: 31.0u (17j restants) → prédit 40u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:02:47.919Z*
