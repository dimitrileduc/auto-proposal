# Rapport Backtest - Client DLL PROXY ANDRIMONT TRIUM RETA

## Contexte

- **Client** : DLL PROXY ANDRIMONT TRIUM RETA (ID: 47771)
- **Commande réelle** : S40161
- **Date commande** : 2025-11-12 10:44:14
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 10,019 input + 1,868 output = 11,887 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 45.5% | 11 produits prédits, 5 corrects |
| **Rappel** | 38.5% | 13 produits réels, 5 détectés |
| **F1-Score** | 41.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 26.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 août 2025, soit 89 jours sans réapprovisionnement. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles habituels observés. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande de 2u. L'historique N-1 montre des volumes faibles (1u et 3u). Conformément à la règle de la médiane et au maintien des quantités pour les rotations faibles, la quantité de 2u est retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 190 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit environ 89 jours. L'historique N-1 montre une commande le 4 novembre 2024. Bien que le cycle soit irrégulier et la rotation faible, nous sommes dans la période anniversaire de la commande de l'an dernier. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et passé montre des volumes très faibles (1u ou 2u). Conformément aux règles sur la rotation faible et le choix de la valeur la plus basse en cas de doute, la médiane de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 189 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit 89 jours avant la date actuelle (11 novembre). L'historique montre des cycles de commande espacés (environ 3 à 5 mois). Bien que le cycle soit lent, le délai depuis la dernière commande est important et le risque de rupture à l'horizon de 30 jours est réel selon le principe de précaution B2B. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes de 2u et 3u. La médiane de l'historique global (2, 3, 2, 3) est de 2,5. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 198 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>4. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit environ 89 jours. L'historique montre des intervalles de commande longs et irréguliers (environ 3 à 4 mois). Étant donné que nous entrons dans la période correspondant à la commande de l'année précédente (novembre 2024) et que le délai depuis la dernière commande est important, le risque de rupture est jugé probable selon le principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique est extrêmement stable avec des commandes systématiques de 1 unité. La médiane et la tendance constante dictent le maintien de cette quantité minimale.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 165 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>5. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit environ 89 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées de plusieurs mois. Dans une optique de précaution B2B et pour éviter une rupture prolongée sur un produit à cycle lent, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des commandes de 1u ou 2u. Conformément à la règle de privilégier la médiane et la valeur la plus basse en cas de doute pour les faibles rotations, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 163 tokens
- **Total**: 1,068 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 10:07:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-17 08:26:56: 3u
- 2024-03-11 13:12:52: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 10:07:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:08:02: 2u
- 2024-04-17 08:26:56: 1u
- 2024-03-11 13:12:52: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 10:07:21: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:08:02: 2u
- 2024-04-17 08:26:56: 3u
- 2024-03-11 13:12:52: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 10:07:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:08:02: 1u
- 2024-07-15 08:01:31: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 10:07:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:01:31: 2u
- 2024-03-11 13:12:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (8)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:19:48.459Z*
