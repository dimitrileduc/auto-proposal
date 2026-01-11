# Rapport Backtest - Client Fromagerie Kaas

## Contexte

- **Client** : Fromagerie Kaas (ID: 71183)
- **Commande réelle** : S39379
- **Date commande** : 2025-09-25 06:32:11
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,130 input + 1,128 output = 7,258 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 25 juin 2025, soit 91 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé est très important. En application du principe de précaution B2B (cycle difficile à déterminer = prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : En l'absence de cycle régulier, la quantité est basée sur la seule valeur historique disponible (2u), ce qui correspond à la médiane et respecte la règle de maintien pour les rotations faibles (1-2u).

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 143 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>2. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 juin 2025, soit 91 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et face à l'incertitude du cycle de rotation, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la quantité de la dernière commande (2u) est utilisée comme référence. Conformément aux règles de rotation faible, on maintient cette quantité initiale sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 168 tokens
- **Total**: 1,046 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-25 06:39:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-25 06:39:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB06] REB chips bio - paprika fumé 35g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:12.464Z*
