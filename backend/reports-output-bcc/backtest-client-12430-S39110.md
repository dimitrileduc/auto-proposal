# Rapport Backtest - Client CLIENTS VENTES AU COMPTANT

## Contexte

- **Client** : CLIENTS VENTES AU COMPTANT (ID: 12430)
- **Commande réelle** : S39110
- **Date commande** : 2025-09-09 13:24:30
- **Date cutoff système** : 2025-09-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,442 input + 708 output = 5,150 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 200.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 200.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 200.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse montre une rotation très faible et irrégulière (dernière commande il y a 146 jours). Bien que le cycle soit difficile à définir, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le produit est absent du stock depuis longtemps. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et de l'historique N-1, excluant le pic exceptionnel de 12 unités de fin 2023 conformément aux règles de gestion des valeurs extrêmes.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 133 tokens
- **Total**: 1,056 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-15 12:14:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-31 10:08:39: 1u
- 2024-03-19 09:03:23: 1u
- 2023-12-13 14:38:16: 12u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:39.917Z*
