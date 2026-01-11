# Rapport Backtest - Client VivArdent SRL

## Contexte

- **Client** : VivArdent SRL (ID: 52678)
- **Commande réelle** : S40350
- **Date commande** : 2025-11-13 13:31:32
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 19,201 input + 3,595 output = 22,796 total


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
| **MAE** | 2.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 62.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 62.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -62.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV131] LV Tartinade Potiron 190g | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 13 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle de commande est atteint. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter sans raison.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 131 tokens
- **Total**: 1,002 tokens



</details>


<details>
<summary><strong>2. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
La dernière commande remonte à 149 jours (juin 2025). Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane (et valeur unique) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 135 tokens
- **Total**: 1,007 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:44:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 08:48:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:24.407Z*
