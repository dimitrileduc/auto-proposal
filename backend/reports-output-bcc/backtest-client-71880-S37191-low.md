# Rapport Backtest - Client DOCK 79, Antoine

## Contexte

- **Client** : DOCK 79, Antoine (ID: 71880)
- **Commande réelle** : S37191
- **Date commande** : 2025-06-03 07:23:19
- **Date cutoff système** : 2025-06-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,624 input + 442 output = 3,066 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 3 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 6.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 6.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 6 | 6 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 6 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 5 | 5 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/04/2025, soit 55 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation, bien que peu documenté, dépasse probablement le stock résiduel. En application du principe de précaution B2B (cycle irrégulier/difficile à déterminer), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 4 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane se base sur cette valeur de référence pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 167 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>2. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 08/04/2025, soit 55 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de ce type. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et compte tenu du seuil de 30 jours, une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à l'historique récent disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 132 tokens
- **Total**: 1,009 tokens



</details>


<details>
<summary><strong>3. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 08/04/2025, soit 55 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation, bien qu'encore peu documenté (une seule commande récente), suggère un besoin de renouvellement imminent pour maintenir la disponibilité. En application du principe de précaution B2B et face à l'absence d'historique long, une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à la valeur de la dernière commande connue (médiane sur historique récent).

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 143 tokens
- **Total**: 1,016 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-08 12:54:24: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-08 12:54:24: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>3. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-08 12:54:24: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:25:45.675Z*
