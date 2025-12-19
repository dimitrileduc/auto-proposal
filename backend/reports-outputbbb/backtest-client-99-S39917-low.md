# Rapport Backtest - Client La Fermette Godelaine de Saint-Georges

## Contexte

- **Client** : La Fermette Godelaine de Saint-Georges (ID: 99)
- **Commande réelle** : S39917
- **Date commande** : 2025-10-27 07:18:16
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 50
- **Tokens**: 106,477 input + 107,104 output = 213,581 total


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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Insuffisance de données - cycle par défaut de 30 jours appliqué
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-09-01
- **Prochaine prédite**: 2025-10-01-01T00:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z-05:00:00.000Z 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique extrêmement limité avec une unique commande de 1u le 01/09/2025. En assumant un cycle B2B standard de 30 jours, la commande est théoriquement en retard de 25 jours par rapport à la date actuelle (26/10). Conformément à la règle de priorité à la disponibilité, un risque de rupture est identifié et une commande minimale de substitution est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,095 tokens
- **Output**: 7,693 tokens
- **Total**: 9,788 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Coconut Water Data**

I'm focused on the product "Dr. Antonio Martins organic & fairtrade coconut water 330ml." I've just reviewed the data, noting a single unit sold on September 1st, 2025. My horizon is set to 30 days, ending November 25th, 2025. I need to gather more sales history to analyze trends effectively.


**Calculating Order Timing**

I've determined the next order date based on the single data point. The 30-day cycle predicted an order on October 1st, which has passed. The client's lateness triggers a "YES" flag for Phase 1 risk, indicating a need for replenishment. Despite this, confidence remains low due to the limited sales history.


**Determining Quantity and Baseline**

I've examined the quantity aspect, the lone data point of 1 unit raises questions for B2B. While 1 unit is the baseline, I've considered that the client is now late and, in B2B, a small quantity might indicate a test, meaning the next order could be higher. Still, I'm sticking with 1, recognizing the uncertainty and a potential replenishment need.


**Synthesizing Order Dynamics**

I've finalized my analysis, culminating in a JSON output. The risk is high (Phase 1) due to a late order. I've predicted a replenishment of 1 unit, despite the limited sales history. My reasoning centers on a 30-day cycle and the need to avoid stock rupture, focusing on a conservative approach.


**Formulating the Output**

I'm now generating the JSON output, which will reflect a Phase 1 risk due to the overdue order.  I'm keeping the recommended quantity at 1 unit, given the limited data. The date is set for "now" for the next order. I'm verifying the format to ensure it's JSON-compliant.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:18:56: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 24 | Stock prédit: -5.1u (-91j restants) → prédit 24u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:54:02.409Z*
