# Rapport Backtest - Client VRAC AUDERGHEM

## Contexte

- **Client** : VRAC AUDERGHEM (ID: 60577)
- **Commande réelle** : S40056
- **Date commande** : 2025-11-05 14:50:44
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 15,886 input + 2,808 output = 18,694 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.9% | 7 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 60.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 77.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV131] LV Tartinade Potiron 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
La dernière commande remonte au 09/10/2025, soit 26 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où un nouveau besoin est probable pour maintenir le stock. Bien que l'historique soit limité à une seule commande récente, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. La quantité retenue est de 2 unités, correspondant à la médiane (et unique valeur) de l'historique récent, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 137 tokens
- **Total**: 1,008 tokens



</details>


<details>
<summary><strong>2. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande date du 09/10/2025, soit 26 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de risque de rupture. En l'absence d'un historique long pour définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une commande unique de 3 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou faibles, la médiane de 3 unités est retenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 171 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>3. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 09/10/2025, soit 26 jours. Avec un seuil de réapprovisionnement de 30 jours et une rotation très faible (1 seule commande récente), le cycle est difficile à déterminer avec précision. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles, on maintient la quantité de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 148 tokens
- **Total**: 1,022 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:14:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:14:23: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:14:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Predicted 2u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Predicted 2u but not ordered |
| [WIG04] WIGNAC cidre rosé bio 750ml | 1 | Predicted 1u but not ordered |
| [LV187] LV Tartinade Mangue Curry 380g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:53.381Z*
