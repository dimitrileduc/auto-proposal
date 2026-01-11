# Rapport Backtest - Client LES CABANNES DE DOLIMARTS

## Contexte

- **Client** : LES CABANNES DE DOLIMARTS (ID: 60456)
- **Commande réelle** : S39341
- **Date commande** : 2025-09-25 10:11:04
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,560 input + 596 output = 4,156 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 116.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 137.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 116.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [WIG03] WIGNAC cidre naturel bio 750ml | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [WIG01] WIGNAC cidre naturel bio 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle montre une commande tous les 49 jours environ. La dernière commande datant du 05/08/2025 (soit 50 jours avant la date actuelle), nous avons dépassé le cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. En application du principe de précaution B2B et face à une rotation faible mais existante, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la valeur la plus basse de l'historique récent pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 140 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>2. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle observé entre les deux dernières commandes est de 49 jours. Depuis la dernière commande (05/08), 50 jours se sont écoulés, ce qui dépasse 100% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). En suivant la règle de la médiane et la gestion des rotations faibles (1-2u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 145 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>3. [WIG06] WIGNAC cidre naturel bio sans alcool 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 49 jours entre les deux dernières commandes. La dernière commande datant du 05/08/2025, soit il y a 50 jours, nous avons dépassé le cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B et face à une rotation faible mais existante, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la valeur basse de l'historique récent pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 150 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>4. [WIG07] WIGNAC cidre naturel bio sans alcool 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle observé entre les deux dernières commandes est de 49 jours. La dernière commande date du 05/08/2025, soit il y a 50 jours. Nous avons dépassé le cycle moyen, le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 161 tokens
- **Total**: 1,052 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [WIG01] WIGNAC cidre naturel bio 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:25:54: 2u
- 2025-06-17 06:49:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:25:54: 1u
- 2025-06-17 06:49:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [WIG06] WIGNAC cidre naturel bio sans alcool 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:25:54: 2u
- 2025-06-17 06:49:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [WIG07] WIGNAC cidre naturel bio sans alcool 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:25:54: 1u
- 2025-06-17 06:49:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:11.188Z*
