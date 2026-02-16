# Rapport Backtest - Client BV DELHAIZE WONDELGEM

## Contexte

- **Client** : BV DELHAIZE WONDELGEM (ID: 56983)
- **Commande réelle** : S39847
- **Date commande** : 2025-10-22 07:12:09
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,744 input + 2,101 output = 13,845 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 12 produits prédits, 6 corrects |
| **Rappel** | 60.0% | 10 produits réels, 6 détectés |
| **F1-Score** | 54.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 10 juin 2025, soit plus de 130 jours sans activité. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement tout cycle de réapprovisionnement standard. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture prolongée) et conformément à la règle des rotations faibles (maintenir 1-2u), une commande d'une unité est préconisée pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 120 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>2. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité en juillet. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), et face à un cycle irrégulier, un besoin est identifié pour maintenir le stock. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes très faibles (1u à 3u). Conformément à la règle sur les rotations faibles (1-2u) et au choix de la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 188 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement tout cycle raisonnable, suggérant un besoin de réapprovisionnement pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 1u. L'historique N-1 montre également une commande de 1u en juillet. La commande de 8u en août 2024 est considérée comme un pic exceptionnel. En suivant la règle de la médiane et du maintien des faibles rotations (1-2u), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 188 tokens
- **Total**: 1,110 tokens



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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité en juillet (3u et 1u). En application du principe de précaution B2B et face à une irrégularité de cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes faibles (1u et 3u). Conformément à la règle de la médiane et à la consigne de ne pas surestimer pour les produits à rotation faible (1-2u), la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 186 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité sur la période juillet-octobre. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), une commande est déclenchée. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très bas (1u à 3u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité est fixée à 1 unité pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 177 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>6. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le cycle est difficile à déterminer. Un risque de rupture existe si un besoin survient dans l'horizon des 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unitaire (1u). En respectant la règle de la médiane sur les rotations faibles et en privilégiant la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 155 tokens
- **Total**: 1,060 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:45:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:45:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:53:58: 3u
- 2024-07-03 06:04:33: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:45:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-30 07:02:27: 8u
- 2024-07-31 06:53:58: 0u
- 2024-07-03 06:04:33: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:45:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:53:58: 3u
- 2024-07-03 06:04:33: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:45:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:53:58: 3u
- 2024-07-03 06:04:33: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:45:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:53:58: 3u
- 2024-07-03 06:04:33: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF021] JF PICKLES 350 ML | 3 | Never ordered in previous analysis window (no history) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Never ordered in previous analysis window (no history) |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:21:21.333Z*
