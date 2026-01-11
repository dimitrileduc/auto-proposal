# Rapport Backtest - Client L'Epicerie du Nord-Produits en vrac

## Contexte

- **Client** : L'Epicerie du Nord-Produits en vrac (ID: 80)
- **Commande réelle** : S36492
- **Date commande** : 2025-05-12 07:01:21
- **Date cutoff système** : 2025-05-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,558 input + 788 output = 5,346 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 5 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 88.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 14.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LB004] LB Blonde (6,5%) 33CL | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LB005] LB Amber (5,2%) 33CL | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LB002] LB Blonde 75 CL (6,5%) | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LB006] LB Brown (7,0%)  33CL | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [LB004] LB Blonde (6,5%) 33CL</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 février 2025, soit 83 jours avant la date actuelle (11 mai). Le cycle précédent était de 21 jours. Bien que l'historique soit espacé, le délai actuel dépasse largement le cycle habituel et l'historique N-1 montre une activité en mars/mai. Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente mais existante, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. La médiane des commandes récentes (2u, 2u) et de l'historique N-1 (2u) est de 2 unités. On maintient ce volume stable conformément à la règle des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 184 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>2. [LB005] LB Amber (5,2%) 33CL</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle moyen observé entre les deux dernières commandes est de 21 jours. La dernière commande remonte au 17 février 2025, soit 83 jours avant la date actuelle. Bien que le cycle habituel soit largement dépassé, le principe de précaution B2B impose de prévoir une commande pour couvrir le risque de rupture, d'autant plus que le produit montre une activité récente en 2025. ÉTAPE 2 : L'historique récent (janvier et février 2025) ainsi que l'historique N-1 indiquent une quantité constante de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 175 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>3. [LB002] LB Blonde 75 CL (6,5%)</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 21 jours entre les deux dernières commandes (27/01 au 17/02). Depuis la dernière commande du 17 février, plus de 80 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane constante observée sur l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 147 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>4. [LB006] LB Brown (7,0%)  33CL</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 janvier 2025, soit plus de 100 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles historiques observés (environ 3-4 mois). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais constante, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 122 tokens
- **Total**: 1,023 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [LB004] LB Blonde (6,5%) 33CL</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-17 12:46:35: 2u
- 2025-01-27 07:53:00: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-22 14:05:42: 1u
- 2023-12-05 08:12:25: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LB005] LB Amber (5,2%) 33CL</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-17 12:46:35: 1u
- 2025-01-27 07:53:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-05 08:12:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LB002] LB Blonde 75 CL (6,5%)</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-17 12:46:35: 2u
- 2025-01-27 07:53:00: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-22 14:05:42: 2u
- 2023-12-05 08:12:25: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LB006] LB Brown (7,0%)  33CL</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-27 07:53:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-22 14:05:42: 1u
- 2023-12-05 08:12:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LB003] LB Festive (4,5%) 33CL | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:41.215Z*
