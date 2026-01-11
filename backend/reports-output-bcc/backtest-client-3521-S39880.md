# Rapport Backtest - Client LA CAILLE DES FAGNES

## Contexte

- **Client** : LA CAILLE DES FAGNES (ID: 3521)
- **Commande réelle** : S39880
- **Date commande** : 2025-10-22 15:35:19
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 3,047 input + 546 output = 3,593 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 3 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 44.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0075] FILOU CHASSEUR  10 L | 44 | 88 | 44.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 44u vs Médiane: 52u (Réel: 88u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 44u
- **Baseline calculee**: 44u
- **Mediane historique**: 52u
- **Reel commande**: 88u
- **Erreur LLM**: 44u (50.0%)
- **Erreur Mediane**: 36u (40.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 44u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre un intervalle moyen d'environ 20 à 30 jours (19 jours entre les deux dernières commandes, 30 jours précédemment). La dernière commande datant du 08/10/2025 (soit 13 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, bien que l'historique N-1 affiche une médiane de 52u, les commandes les plus récentes de 2025 montrent une stabilisation à 44u. Conformément à la règle de privilégier la médiane récente et de respecter les tendances à la baisse, la quantité retenue est de 44u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,155 tokens
- **Output**: 192 tokens
- **Total**: 1,347 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 14:19:11: 44u
- 2025-09-19 11:04:36: 44u
- 2025-08-20 11:41:20: 75u
- 2025-06-23 12:50:23: 55u
- 2025-06-10 06:38:25: 55u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:05:22: 52u
- 2024-09-16 11:41:17: 52u
- 2024-09-12 07:27:34: 20u
- 2024-08-06 08:44:20: 52u
- 2024-05-30 11:07:54: 52u
- 2024-05-22 11:09:13: 52u
- 2024-04-09 13:24:52: 52u
- 2024-04-09 13:23:02: 52u
- 2024-03-20 08:13:07: 52u
- 2024-02-27 11:00:59: 52u
- 2024-01-24 13:28:15: 52u
- 2023-12-07 06:48:57: 52u

**Quantite Mediane (fallback)**: 44u
**Quantite Reelle**: 88u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 15 | Predicted 15u but not ordered |
| [PF0097] FILOU MOUTARDE 5 KG | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:05.721Z*
