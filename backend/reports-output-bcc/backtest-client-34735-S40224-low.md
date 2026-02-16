# Rapport Backtest - Client L'association Vannieuwenhuyse - Wackers

## Contexte

- **Client** : L'association Vannieuwenhuyse - Wackers (ID: 34735)
- **Commande réelle** : S40224
- **Date commande** : 2025-11-14 12:45:29
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 14,145 input + 2,484 output = 16,629 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 57.1% | 7 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 72.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [WIG03] WIGNAC cidre naturel bio 750ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [WIG04] WIGNAC cidre rosé bio 750ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 69 jours (05/09/2025). Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue correspond à la valeur unique observée dans l'historique récent (1u), conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 119 tokens
- **Total**: 995 tokens



</details>


<details>
<summary><strong>2. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 05/09/2025, soit 69 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours et une absence d'historique long terme pour définir un cycle précis, le principe de précaution B2B s'applique. Le risque de rupture est considéré comme présent en raison de l'intervalle de temps important. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément aux règles de rotation très faible et de maintien de la médiane historique, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 149 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>3. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/09/2025, soit 69 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique car le délai dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'historique complexe, la quantité retenue correspond à la médiane du volume récent (1u) pour éviter une rupture tout en limitant le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 122 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>4. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/09/2025, soit 69 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation très faible), le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit en stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 138 tokens
- **Total**: 1,010 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Predicted 2u but not ordered |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Predicted 1u but not ordered |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:02.373Z*
