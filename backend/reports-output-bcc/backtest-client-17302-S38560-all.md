# Rapport Backtest - Client CARREFOUR BELGIUM SA, Market Schilde

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Market Schilde (ID: 17302)
- **Commande réelle** : S38560
- **Date commande** : 2025-08-19 06:27:19
- **Date cutoff système** : 2025-08-18 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 14,131 input + 2,218 output = 16,349 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.7% | 14 produits prédits, 5 corrects |
| **Rappel** | 41.7% | 12 produits réels, 5 détectés |
| **F1-Score** | 38.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 46.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/06/2025, soit plus de 75 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés (comparaison avec la commande de juillet N-1). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant au volume de la commande la plus récente, afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 131 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>2. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/06/2025, soit plus de 75 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels et l'historique N-1 montre un besoin à cette période de l'année (fin juillet). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane du volume récent, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 133 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/06/2025, soit 77 jours. L'historique N-1 montre des commandes en avril et juillet. Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière commande dépasse largement les cycles habituels observés. En application du principe de précaution B2B (risque de rupture sur l'horizon de 30 jours), un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent est très faible (1u), mais les commandes de l'année précédente à la même période (juillet) étaient de 2u. La médiane historique globale se situe à 2u. On retient cette quantité pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 183 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>4. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/06/2025, soit 77 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (risque de rupture si le client a épuisé son unité), un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une constante de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 est maintenue pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 160 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>5. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Il n'y a aucune commande récente enregistrée, mais l'historique N-1 montre une activité. En l'absence de cycle de rotation défini et selon le principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique récent, la prévision se base sur la commande de l'année précédente (1u). Conformément aux règles de rotation faible, on maintient la quantité minimale de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 145 tokens
- **Total**: 1,020 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:20:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:56:56: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:20:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:56:56: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:20:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:56:56: 2u
- 2024-04-25 07:44:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:20:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-25 07:44:29: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-25 07:44:29: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (7)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Never ordered in previous analysis window (no history) |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:21:46.450Z*
