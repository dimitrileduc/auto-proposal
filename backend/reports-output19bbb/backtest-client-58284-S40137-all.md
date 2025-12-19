# Rapport Backtest - Client SPRL GOOD & FOOD

## Contexte

- **Client** : SPRL GOOD & FOOD (ID: 58284)
- **Commande réelle** : S40137
- **Date commande** : 2025-11-05 11:38:00
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 28,453 input + 56,744 output = 85,197 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.7% | 6 produits prédits, 1 corrects |
| **Rappel** | 50.0% | 2 produits réels, 1 détectés |
| **F1-Score** | 25.0% | Score équilibré global |

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
| **MAE** | 124.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 51.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 51.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -51.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML | 118 | 242 | 124.0 | 51.2% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML</strong> - LLM: 118u vs Médiane: 341u (Réel: 242u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 118u
- 📊 **Baseline calculée**: 118u
- 📊 **Médiane historique**: 341u
- ✅ **Réel commandé**: 242u
- 📉 **Erreur LLM**: 124u (51.2%)
- 📉 **Erreur Médiane**: 99u (40.9%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 118u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Signal faible : commande unique identifiée il y a 82 jours
- **Cycle médian (jours)**: 90
- **Dernière commande**: 2025-08-14
- **Prochaine prédite**: 2025-11-12 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La prédiction repose sur un historique extrêmement limité d'une seule commande le 2025-08-14 (118u). En l'absence de données N-1 et compte tenu du délai de 82 jours écoulés, l'analyse suppose une fréquence trimestrielle (~90 jours). Cela place la prochaine commande théorique autour du 12 novembre 2025, soit dans l'horizon des 30 jours (risque OUI). La quantité recommandée de 118u correspond à la seule valeur de référence disponible.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,030 tokens
- **Output**: 2,188 tokens
- **Total**: 4,218 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Product's Data**

I'm focused on the product [PF3356] and its sales history. Right now, I'm noting the single, older order of 118 units. I'll need to assess the context of that order: What were the sales drivers, and why hasn't there been more recent activity? Then, I'll project future demand over the next 30 days, to December 4th, 2025.


**Evaluating Order Frequency**

I'm now zeroing in on the sporadic nature of the single order. The lack of an N-1 data point confirms the scarcity of information. Given the extended interval since that lone purchase, a recurring cycle is improbable within the 30-day forecast. I'm leaning toward a sporadic pattern, making precise predictions challenging.


**Inferring Demand Patterns**

After assessing the single order, I've dived deeper. The long absence of activity and lack of N-1 data confirms the sporadic nature, therefore it is very infrequent. I'm exploring potential cyclical patterns based on the time elapsed since the order, which suggests a possible 90-day cycle. However, with limited data, predictions remain highly uncertain.


**Determining the Replenishment Risk**

Considering the sporadic nature of the order history, and the 82 days since the single purchase, the frequency is very infrequent. Based on the 82-day period, if a 90-day cycle is assumed, the next order is due around November 12th, or in 8 days. However, given only one data point, the confidence level remains low.


**Predicting Future Replenishment**

I'm synthesizing the data. Given the single order from August and the 82-day gap, I'm leaning on a potential 90-day cycle, making November 12th the likely date for the next order. However, given the limited history, my confidence remains low in this prediction. If a prediction is mandatory, 118 units is the best estimate.


**Determining Replenishment Risk**

Based on the single order from August and the current date, I'm calculating the time elapsed, which is 82 days. Given this and the lack of additional data, I'm postulating a 90-day cycle. Therefore, I anticipate the next order around November 12th. However, my confidence in this projection remains low.


**Synthesizing Order Predictions**

I've finalized my analysis. I'm inferring a possible 90-day cycle, given the single order from August, with the next one due around November 12th. I'll recommend the same quantity as before, but the lack of data results in low confidence, as I'm applying the baseline order.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:47:50: 118u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 118u (confidence: low)
**📊 Quantité Réelle**: 242u

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
| [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML | 111 | Stock prédit: 25.4u (9j restants) → prédit 111u mais non commandé |
| [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML | 126 | Stock prédit: 28.9u (9j restants) → prédit 126u mais non commandé |
| [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML | 130 | Stock prédit: 24.9u (7j restants) → prédit 130u mais non commandé |
| [PF3359] DLL MAYONNAISE AVOCAT CHIPOTLE 200ML | 350 | Stock prédit: 70.4u (8j restants) → prédit 350u mais non commandé |
| [PF3355] DLL DRESSING AVOCAT POPPY SEEDS 240ML | 401 | Stock prédit: -167.6u (-23j restants) → prédit 401u mais non commandé |


---

## False Negatives (1)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [PF3354] DLL DRESSING AVOCAT BALSAMICO 240ML | 273 | En rupture (-77j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T08:13:07.102Z*
