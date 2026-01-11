# Rapport Backtest - Client BLACKSTREAM

## Contexte

- **Client** : BLACKSTREAM (ID: 3618)
- **Commande réelle** : S35554
- **Date commande** : 2025-03-21 11:09:37
- **Date cutoff système** : 2025-03-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 9,122 input + 1,698 output = 10,820 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.0% | 10 produits prédits, 2 corrects |
| **Rappel** | 66.7% | 3 produits réels, 2 détectés |
| **F1-Score** | 30.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'historique récent montre une commande de 3 unités le 12 novembre 2024. Depuis cette date, plus de 120 jours se sont écoulés, ce qui dépasse largement les cycles observés l'année précédente (environ 60 à 80 jours). Bien que la rotation soit faible et irrégulière, le principe de précaution B2B s'applique car le risque de rupture est élevé après une si longue période d'inactivité. La quantité retenue est de 1 unité, correspondant à la médiane historique et à la valeur la plus basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 143 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>2. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 12/11/2024, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de visibilité sur le cycle de consommation impose l'application du principe de précaution B2B. Un besoin est probable pour éviter une rupture prolongée sur un produit de fond de rayon. ÉTAPE 2 : L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1u (médiane de l'historique disponible) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 157 tokens
- **Total**: 1,030 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-11-12 08:08:05: 2u
- 2024-11-12 08:08:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-01-24 10:39:09: 1u
- 2023-11-29 12:51:11: 1u
- 2023-09-08 07:07:22: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-11-12 08:08:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 5 | Predicted 5u but not ordered |
| [PF1794] LD MAYONNAI BASILIC 250ML WECK | 4 | Predicted 4u but not ordered |
| [PF1795] LD MAYONNAI WASABI 250ML WECK | 4 | Predicted 4u but not ordered |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Predicted 1u but not ordered |
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 7 | Predicted 7u but not ordered |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 9 | Predicted 9u but not ordered |
| [PF1803] LD SAUCE TARTARE 250ML WECK | 4 | Predicted 4u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF0097] FILOU MOUTARDE 5 KG | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:26:05.610Z*
