# Rapport Backtest - Client DLL AD OOSTKAMP NV KIESKEUR

## Contexte

- **Client** : DLL AD OOSTKAMP NV KIESKEUR (ID: 57297)
- **Commande réelle** : S40336
- **Date commande** : 2025-11-13 12:43:33
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 15,541 input + 2,766 output = 18,307 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 17.6% | 17 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 28.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 5.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 80.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 80.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -80.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 6 | 5.0 | 83.3% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 7 | 5.0 | 71.4% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 7 | 6.0 | 85.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 6u
- **Erreur LLM**: 5u (83.3%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 20 octobre 2025, soit 23 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de rupture potentielle. L'historique montre une rotation faible et irrégulière (cycle moyen difficile à établir précisément, mais présence de commandes en octobre N-1). En application du principe de précaution B2B face à un cycle incertain, un besoin est détecté. La quantité retenue est de 1 unité, correspondant à la commande la plus récente et à la valeur basse de la médiane historique, afin d'éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 155 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 5u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 20 octobre 2025, soit il y a 23 jours. Le cycle historique récent montre un intervalle d'environ 74 jours, mais l'historique N-1 indique une activité régulière en octobre et août. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture pour couvrir la fin d'année. En suivant le principe de précaution B2B et la règle de la médiane sur les commandes récentes (médiane entre 2u et 3u), on retient la valeur la plus basse, soit 2 unités, pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 155 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 7u
- **Erreur LLM**: 6u (85.7%)
- **Erreur Mediane**: 5u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit plus de 90 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande le 22/10/2024. Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 oscille entre 1 et 2 unités. En suivant la règle de choisir la valeur la plus basse en cas de doute pour les faibles rotations, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 164 tokens
- **Total**: 1,086 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 13:57:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 08:08:07: 2u
- 2024-08-12 06:37:56: 5u
- 2024-07-18 08:55:16: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 13:57:44: 3u
- 2025-08-07 13:56:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 08:08:07: 1u
- 2024-08-12 06:37:56: 3u
- 2024-07-18 08:55:16: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:56:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 08:08:07: 1u
- 2024-08-12 06:37:56: 0u
- 2024-07-18 08:55:16: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 7u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Predicted 3u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 4 | Predicted 4u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:17:41.563Z*
