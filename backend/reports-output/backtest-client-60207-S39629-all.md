# Rapport Backtest - Client BIOFRESH BELGIUM NV-SA

## Contexte

- **Client** : BIOFRESH BELGIUM NV-SA (ID: 60207)
- **Commande réelle** : S39629
- **Date commande** : 2025-10-08 13:49:43
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 19
- **Tokens**: 15,103 input + 37,151 output = 52,254 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 6.7% | 15 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 12.5% | Score équilibré global |

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
| **MAE** | 6.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 4.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 4.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 120 | 126 | 6.0 | 4.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 120u vs Médiane: 120u (Réel: 126u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 120u
- 📊 **Baseline calculée**: 120u
- 📊 **Médiane historique**: 120u
- ✅ **Réel commandé**: 126u
- 📉 **Erreur LLM**: 6u (4.8%)
- 📉 **Erreur Médiane**: 6u (4.8%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 120u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 21 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-16
- **Prochaine prédite**: 2025-10-07 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Les commandes alternent entre le mardi et le mercredi, la date actuelle (mardi) correspond parfaitement au cycle.
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 21 jours, ce qui place la prochaine commande théorique précisément au 07/10/2025. Le volume est stable à 120 unités (3 occurrences sur les 4 dernières commandes), la commande de 60 unités étant identifiée comme un outlier bas ponctuel.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 881 tokens
- **Output**: 1,184 tokens
- **Total**: 2,065 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales History Patterns**

I'm analyzing the sales data for MATE01, the yerba mate beverage. I've noted the quantities sold on specific dates: 120 units on September 16th, 60 units on August 26th, and 120 units on both July 23rd and July 9th. My next step is to identify any trends or cyclical patterns in this data.


**Projecting Future Demand**

The analysis confirms a roughly 21-day sales cycle for MATE01. Based on this, and the last order date of September 16th, I've projected the next order should have occurred today, October 7th. The 60-unit sale appears as a potential outlier, so I'm leaning toward the standard order size of 120 units, for safety.


**Calculating Order Recommendation**

I've just finished the calculations. The cycle is confirmed at 21 days, making today, October 7th, the expected order date. With the pattern of 120 units being dominant, I'm recommending a purchase of 120 units for MATE01. My confidence in this recommendation is high due to the consistent pattern.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 06:05:48: 120u
- 2025-08-26 08:04:32: 60u
- 2025-07-23 09:53:39: 120u
- 2025-07-09 06:47:03: 120u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 120u (confidence: high)
**📊 Quantité Réelle**: 126u

</details>




---

## False Positives (14)

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
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 50 | Stock prédit: 32.2u (23j restants) → prédit 50u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 14 | Stock prédit: 5.0u (11j restants) → prédit 14u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 14 | Stock prédit: 8.8u (34j restants) → prédit 14u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 14 | Stock prédit: -4.1u (-4j restants) → prédit 14u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 14 | Stock prédit: 10.9u (69j restants) → prédit 14u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 18 | Stock prédit: 11.3u (34j restants) → prédit 18u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 36 | Stock prédit: 26.0u (52j restants) → prédit 36u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 60 | Stock prédit: 14.4u (12j restants) → prédit 60u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 20 | Stock prédit: 4.8u (13j restants) → prédit 20u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 45 | Stock prédit: 14.4u (12j restants) → prédit 45u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 14 | Stock prédit: -43.7u (-67j restants) → prédit 14u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 14 | Stock prédit: -20.6u (-53j restants) → prédit 14u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 9 | Stock prédit: -8.9u (-44j restants) → prédit 9u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 18 | Stock prédit: -14.2u (-39j restants) → prédit 18u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:59:41.349Z*
