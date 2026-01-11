# Rapport Backtest - Client ITM NESSONVAUX MONBUT

## Contexte

- **Client** : ITM NESSONVAUX MONBUT (ID: 38955)
- **Commande réelle** : S39874
- **Date commande** : 2025-10-22 13:37:10
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 18,895 input + 3,222 output = 22,117 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 15.8% | 19 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 27.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 août, soit environ 60 jours. Le cycle précédent était de 50 jours. Nous avons largement dépassé ce cycle moyen, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B, surtout avec un seuil de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 164 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22/08/2025, soit 60 jours. Bien que l'historique soit irrégulier et à faible rotation, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 80 jours entre mars et mai). En application du principe de précaution B2B (risque de rupture à horizon 30 jours), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et passé montre des volumes très faibles (1 à 2 unités). La médiane des commandes est de 1 unité. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1 unité pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 174 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit plus de 100 jours. L'historique N-1 montre une commande le 23/09/2024, indiquant un besoin non couvert pour la période actuelle. Le cycle est irrégulier mais le délai depuis la dernière commande dépasse largement les seuils de précaution. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des commandes de 1u ou 2u. La médiane des commandes est de 2u. En application du principe de précaution B2B pour éviter la rupture sur un produit à faible rotation, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 173 tokens
- **Total**: 1,112 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:07:37: 2u
- 2025-07-03 12:12:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:07:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 13:45:01: 2u
- 2024-03-05 13:27:24: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:12:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 06:48:32: 2u
- 2024-07-19 10:17:59: 1u
- 2024-05-30 13:45:01: 1u
- 2024-03-05 13:27:24: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:08.704Z*
