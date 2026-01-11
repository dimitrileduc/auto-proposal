# Rapport Backtest - Client FRANZ TRICOT VINS

## Contexte

- **Client** : FRANZ TRICOT VINS (ID: 60345)
- **Commande réelle** : S39256
- **Date commande** : 2025-10-09 12:18:01
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 7,869 input + 1,343 output = 9,212 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 9 produits prédits, 3 corrects |
| **Rappel** | 60.0% | 5 produits réels, 3 détectés |
| **F1-Score** | 42.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/07/2025, soit 99 jours avant la date actuelle. Bien que le cycle soit difficile à déterminer avec une seule commande, le principe de précaution B2B s'applique ici car le délai écoulé est très important. Un risque de rupture est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la médiane de 2 unités est retenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 157 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>2. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 01/07/2025, soit plus de 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle de réapprovisionnement standard pour un produit de type boisson. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane des commandes récentes est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 170 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>3. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/07/2025, soit plus de 90 jours. Bien que la rotation soit très faible, l'absence de commande récente sur un produit actif crée une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 2 unités (médiane de l'historique disponible) pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 882 tokens
- **Output**: 174 tokens
- **Total**: 1,056 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-01 09:11:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-01 09:11:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-01 09:11:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Predicted 1u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | Predicted 1u but not ordered |
| [WIG03] WIGNAC cidre naturel bio 750ml | 1 | Predicted 1u but not ordered |
| [WIG04] WIGNAC cidre rosé bio 750ml | 1 | Predicted 1u but not ordered |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 4 | Never ordered in previous analysis window (no history) |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 4 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:19:06.256Z*
