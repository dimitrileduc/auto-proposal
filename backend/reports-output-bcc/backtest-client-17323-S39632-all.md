# Rapport Backtest - Client CARREFOUR BELGIUM SA, CARREFOUR ST JOB IN T GOOR

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CARREFOUR ST JOB IN T GOOR (ID: 17323)
- **Commande réelle** : S39632
- **Date commande** : 2025-10-09 06:08:25
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 9,732 input + 1,634 output = 11,366 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.6% | 11 produits prédits, 7 corrects |
| **Rappel** | 70.0% | 10 produits réels, 7 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 26.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 09/05/2025, soit 152 jours sans activité. Bien que le cycle soit irrégulier et la rotation faible, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement tout cycle standard. Un risque de rupture ou un besoin de renouvellement de stock est probable à l'horizon de 30 jours. La quantité retenue est de 3 unités, correspondant à la dernière commande enregistrée (médiane du récent), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 129 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/05/2025, soit 152 jours sans activité. Bien que le cycle soit très lent, l'historique N-1 montre une commande en juin. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière -> prévoir), un besoin est identifié pour éviter une rupture prolongée sur cette référence à faible rotation. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 2 unités. La médiane des commandes est de 2. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique de 2 unités sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 175 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 09/05/2025, soit 152 jours sans activité. Bien que le cycle soit très lent et irrégulier, l'historique (2024 et 2025) montre un besoin récurrent de 2 unités. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture sur un produit à faible rotation) et conformément à la règle de la médiane historique, une commande de 2 unités est préconisée pour couvrir l'horizon de 30 jours.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 133 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 09/05/2025, soit 152 jours sans activité. Bien que le cycle soit très lent, l'absence de commande depuis 5 mois sur un produit présent au catalogue l'année précédente à la même période (juin) crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain), un réapprovisionnement est déclenché. ÉTAPE 2 : L'historique récent et N-1 montre une stabilité parfaite à 2 unités. La médiane des commandes étant de 2u, cette quantité est maintenue pour couvrir le besoin sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 168 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>5. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/05/2025, soit 152 jours. Bien que la rotation soit extrêmement faible, le délai écoulé dépasse largement tout cycle raisonnable. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une constante de 1 unité. La médiane des commandes est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 164 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/05/2025, soit 152 jours. Bien que la rotation soit très faible, l'historique montre une commande annuelle (juin 2024, mai 2025). Le délai depuis la dernière commande dépasse largement le cycle habituel et l'horizon de 30 jours. Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais constante, un besoin est détecté. ÉTAPE 2 : Estimation. L'historique récent et N-1 est strictement identique (1 unité). La médiane est de 1. On maintient cette quantité minimale sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 168 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte à 152 jours (mai 2025), ce qui dépasse largement un cycle de rotation standard pour un produit de type condiment. Bien que la rotation soit très faible (1 unité), le principe de précaution B2B et l'absence d'historique N-1 imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée. Conformément aux règles de gestion des rotations faibles, la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 114 tokens
- **Total**: 989 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 13:55:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-06 06:13:34: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 13:55:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-06 06:13:34: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 13:55:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-06 06:13:34: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 13:55:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-06 06:13:34: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 13:55:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-06 06:13:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 13:55:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-06 06:13:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 13:55:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:19:57.231Z*
