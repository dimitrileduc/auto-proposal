# Rapport Backtest - Client BIOFRESH BELGIUM NV-SA

## Contexte

- **Client** : BIOFRESH BELGIUM NV-SA (ID: 60207)
- **Commande réelle** : S40061
- **Date commande** : 2025-11-03 08:38:25
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 36,676 input + 87,339 output = 124,015 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.1% | 11 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 16.7% | Score équilibré global |

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
| **MAE** | 36.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 66.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 90 | 54 | 36.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 90u vs Médiane: 120u (Réel: 54u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 90u
- 📊 **Baseline calculée**: 90u
- 📊 **Médiane historique**: 120u
- ✅ **Réel commandé**: 54u
- 📉 **Erreur LLM**: 36u (66.7%)
- 📉 **Erreur Médiane**: 66u (122.2%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 90u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 3 semaines avec volumes alternés
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-21
- **Prochaine prédite**: 2025-11-11 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
DÉTECTION PHASE 1 : Intervalles calculés de [13, 22, 21] jours. Médiane = 21 jours. CV temporel = 26.4% (confiance medium). Prochaine commande estimée au 2025-10-21 + 21j = 2025-11-11, soit dans 9 jours (Risque : OUI). PHASE 2 : Quantités observées [54, 60, 120, 126]. Aucun outlier détecté par la méthode IQR (Barrières : -42 à 222). CV des quantités = 42.5%. Application d'une moyenne tronquée (exclusion du min 54 et max 126) sur les points centraux [60, 120] pour stabiliser la prévision, aboutissant à une recommandation de 90 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,117 tokens
- **Output**: 2,229 tokens
- **Total**: 4,346 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Early Risk Assessment**

I'm currently focused on the initial risk assessment phase. Analyzing the provided data, I see fluctuations in the units sold for the "MATE01" product over several dates in 2025. I'm noting the early figures and will now be comparing these to expected sales.


**Forecasting Potential Stockouts**

I've moved on to Phase 1, assessing stockout risk. I've calculated the intervals between order dates for "MATE01" and find a median of 21 days. The coefficient of variation is 26.4%, indicating a moderate level of variability. Based on this, I predict a risk of stockout within 30 days.


**Predicting Quantity and Stockout Risk**

Now I'm focusing on Phase 2, quantity prediction. The initial Coefficient of Variation (CV) for units sold is at 42.5%, so I'll be using a truncated mean, excluding the minimum and maximum sales. I've also re-evaluated Phase 1 and the risk of stockout remains "yes," considering the median reorder interval.


**Synthesizing Findings and Predictions**

I've combined Phase 1 and 2 results. The estimated reorder date is November 11th. I'm predicting a quantity of 90 units for that order. The frequency pattern shows a cycle of approximately 21 days with volume alternation. I've classified the global confidence as medium due to the CV results, as well as a short dataset.


**Concluding Inventory Predictions**

I've finalized the analysis. Based on the calculated reorder date of November 11th, I'm predicting a requirement of 90 units for MATE01. The cycle appears to repeat roughly every 21 days, and the overall confidence is medium. The data is a short series, so the findings are uncertain.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:38:04: 54u
- 2025-10-08 13:49:43: 126u
- 2025-09-16 06:05:48: 120u
- 2025-08-26 08:04:32: 60u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 90u (confidence: medium)
**📊 Quantité Réelle**: 54u

</details>




---

## False Positives (10)

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 14 | Stock prédit: 7.3u (11j restants) → prédit 14u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 14 | Stock prédit: 1.7u (1j restants) → prédit 14u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 14 | Stock prédit: 7.3u (11j restants) → prédit 14u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 14 | Stock prédit: 11.3u (46j restants) → prédit 14u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 18 | Stock prédit: 9.4u (11j restants) → prédit 18u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 27 | Stock prédit: 5.1u (4j restants) → prédit 27u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 63 | Stock prédit: 34.2u (19j restants) → prédit 63u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 45 | Stock prédit: 16.0u (16j restants) → prédit 45u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 14 | Stock prédit: -8.4u (-17j restants) → prédit 14u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 18 | Stock prédit: 3.6u (11j restants) → prédit 18u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:16:50.844Z*
