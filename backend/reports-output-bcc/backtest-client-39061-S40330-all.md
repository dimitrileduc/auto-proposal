# Rapport Backtest - Client SMISMANS BV

## Contexte

- **Client** : SMISMANS BV (ID: 39061)
- **Commande réelle** : S40330
- **Date commande** : 2025-11-13 12:32:36
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 7,056 input + 1,133 output = 8,189 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 37.5% | 8 produits prédits, 3 corrects |
| **Rappel** | 30.0% | 10 produits réels, 3 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 5.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 80.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 79.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -80.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 6 | 4.0 | 66.7% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 7 | 6.0 | 85.7% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 7 | 6.0 | 85.7% | partial | LLM |


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
La dernière commande remonte au 23 octobre 2025, soit 20 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock. Bien que l'historique soit limité, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. La quantité retenue est de 2 unités, correspondant à la médiane du volume de la commande la plus récente, conformément à la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 122 tokens
- **Total**: 1,010 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 7u
- **Erreur LLM**: 6u (85.7%)
- **Erreur Mediane**: 6u (85.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 23 octobre 2025, soit 20 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock. Bien que la rotation soit faible et irrégulière (1u récemment, 2u l'année dernière à la même période), le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. En suivant la règle de la médiane des commandes récentes et en privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 144 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 7u
- **Erreur LLM**: 6u (85.7%)
- **Erreur Mediane**: 6u (85.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 23 octobre, soit il y a 20 jours. Bien que l'historique soit limité, le délai de réapprovisionnement de 30 jours impose une vigilance. En application du principe de précaution B2B (cycle incertain), un besoin est détecté pour éviter toute rupture. ÉTAPE 2 : L'historique récent montre une commande de 1 unité. L'historique N-1 à période proche indiquait 2 unités. Conformément à la règle de privilégier la quantité la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 151 tokens
- **Total**: 1,037 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 07:19:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 12:13:50: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 07:19:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 12:13:50: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 07:19:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 12:13:50: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 7u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Predicted 2u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Predicted 2u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | Predicted 4u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (7)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [DIS0012] Display Foodprint Karton LD | 1 | Never ordered in previous analysis window (no history) |
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Never ordered in previous analysis window (no history) |
| [LD014] LD Organic Avocado Spread 180 g | 4 | Never ordered in previous analysis window (no history) |
| [LD015] LD Onion Spread 180g | 4 | Never ordered in previous analysis window (no history) |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 4 | Never ordered in previous analysis window (no history) |
| [LD011] LD Organic Kids Spread 180 g | 4 | Never ordered in previous analysis window (no history) |
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:20:04.448Z*
