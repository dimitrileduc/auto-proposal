# Rapport Backtest - Client Jardin d'Antan,  QUALITE

## Contexte

- **Client** : Jardin d'Antan,  QUALITE (ID: 52017)
- **Commande réelle** : S37500
- **Date commande** : 2025-06-17 08:09:18
- **Date cutoff système** : 2025-06-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 31
- **Tokens**: 27,405 input + 5,223 output = 32,628 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 35.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV156] LV Sauce barbecue 263 ml bio | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 6 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [LV156] LV Sauce barbecue 263 ml bio</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 mai, soit 34 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans une zone de risque de rupture, d'autant plus que le cycle de rotation n'est pas encore stabilisé (historique récent limité). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 3 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane se base sur cette valeur de 3 unités pour maintenir le stock existant sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 161 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>2. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 6u vs Médiane: 6u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 mai, soit 34 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent, d'autant plus qu'il n'y a pas d'historique long pour établir un cycle précis (principe de précaution B2B appliqué). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 6 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane se base sur ce volume de 6 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 157 tokens
- **Total**: 1,029 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV156] LV Sauce barbecue 263 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 5u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV147] LV Sauce Cocktail 200 ml | 4 | Predicted 4u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 6 | Predicted 6u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:45.033Z*
