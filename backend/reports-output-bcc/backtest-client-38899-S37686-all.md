# Rapport Backtest - Client EDEKA KLEIN

## Contexte

- **Client** : EDEKA KLEIN (ID: 38899)
- **Commande réelle** : S37686
- **Date commande** : 2025-06-26 06:26:45
- **Date cutoff système** : 2025-06-25 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 8,136 input + 1,557 output = 9,693 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 9 produits prédits, 5 corrects |
| **Rappel** | 62.5% | 8 produits réels, 5 détectés |
| **F1-Score** | 58.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 63.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 80.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -9.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/02/2025, soit plus de 140 jours. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une activité sur la période de mai/juin. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. La médiane des commandes historiques (2, 5, 3) est de 3 unités. Conformément à la règle de maintien des volumes pour les faibles rotations, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 166 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/02/2025, soit plus de 140 jours. Bien que la rotation récente soit très faible (1u), l'historique N-1 montre une activité spécifique sur la période de mai/juin (3u en mai 2024). En application du principe de précaution B2B et face à l'absence de commande récente sur ce trimestre, un risque de rupture est identifié pour couvrir la période estivale. ÉTAPE 2 : Estimation de la quantité. L'historique N-1 à la même période indique une demande constante de 3 unités. La médiane des commandes significatives étant de 3, cette quantité est retenue pour assurer la disponibilité sans surstockage excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 183 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/02/2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport à l'historique (commandes en mars/mai l'an dernier) crée une incertitude sur le stock disponible. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes très faibles (1u en 2025, 2u en 2024). Conformément à la règle sur les rotations faibles, on maintient la quantité minimale observée récemment pour éviter le surstock. La médiane basse est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 199 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 04/02/2025, soit plus de 140 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu en mai l'année précédente (N-1). En suivant la règle des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane basse de l'historique récent pour minimiser le risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 135 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/02/2025, soit plus de 140 jours. Bien que l'historique soit très espacé, le délai actuel dépasse largement tout cycle de rotation raisonnable. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes très faibles (1u à 2u). La médiane des commandes passées est de 2u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 2u sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 180 tokens
- **Total**: 1,083 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-04 12:57:30: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 11:37:39: 2u
- 2024-03-28 08:32:23: 5u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-04 12:57:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 11:37:39: 3u
- 2024-03-28 08:32:23: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-04 12:57:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 11:37:39: 0u
- 2024-03-28 08:32:23: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-04 12:57:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 11:37:39: 2u
- 2024-03-28 08:32:23: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-04 12:57:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 11:37:39: 2u
- 2024-03-28 08:32:23: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:24:28.483Z*
