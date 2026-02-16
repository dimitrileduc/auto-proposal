# Rapport Backtest - Client DLL AD MALDEGEM

## Contexte

- **Client** : DLL AD MALDEGEM (ID: 58378)
- **Commande réelle** : S40335
- **Date commande** : 2025-11-13 12:43:10
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,638 input + 2,170 output = 13,808 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 23.1% | 13 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 35.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 4.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 69.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 6 | 4.0 | 66.7% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 7 | 5.0 | 71.4% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 7 | 5.0 | 71.4% | partial | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 6u
- **Erreur LLM**: 4u (66.7%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/09/2025, soit 72 jours avant la date actuelle. Le cycle précédent était de 60 jours. Le délai actuel dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou un besoin de restockage. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité à 2 unités (juillet et septembre 2025). Bien qu'une commande de 3 unités ait eu lieu l'année dernière à la même période, la règle de la médiane sur l'historique récent et le principe de ne pas surestimer imposent de maintenir la quantité de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 181 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 4u (57.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle irrégulier (environ 60 jours entre les deux dernières commandes). Depuis la dernière commande du 01/09/2025, 72 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou une commande en retard. En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent montre 1u et 3u, tandis que l'historique N-1 à la même période (octobre/novembre) indique 2u. La médiane de l'historique global étant de 2u, cette quantité est retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 183 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 7u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/09/2025, soit 72 jours avant la date actuelle. Le cycle précédent était de 60 jours. Le délai actuel dépasse largement le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement immédiat pour couvrir les 30 prochains jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 3u, tandis que l'historique N-1 à la même période (octobre/novembre) indique 2u. La médiane des commandes récentes et historiques se situe à 2u. En respectant le principe de précaution B2B et en évitant la surestimation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 199 tokens
- **Total**: 1,102 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:48:13: 2u
- 2025-07-03 12:06:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:32:29: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:48:13: 3u
- 2025-07-03 12:06:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:32:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:48:13: 3u
- 2025-07-03 12:06:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:32:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Predicted 3u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:17:15.066Z*
