# Rapport Backtest - Client DLL AD EEKLO

## Contexte

- **Client** : DLL AD EEKLO (ID: 38833)
- **Commande réelle** : S40337
- **Date commande** : 2025-11-13 12:43:48
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,800 input + 2,420 output = 16,220 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 13.3% | 15 produits prédits, 2 corrects |
| **Rappel** | 50.0% | 4 produits réels, 2 détectés |
| **F1-Score** | 21.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 44.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -46.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 5 | 6 | 1.0 | 16.7% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 7 | 5.0 | 71.4% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 1u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 80 jours entre les commandes récentes. La dernière commande datant du 25 septembre 2025 (soit 48 jours avant la date actuelle), nous entrons dans la fenêtre de risque de rupture à l'horizon des 30 jours de seuil de réapprovisionnement (48 + 30 = 78 jours). Bien que le cycle soit irrégulier, le principe de précaution B2B impose de prévoir une commande. La quantité retenue est de 5 unités, correspondant à la médiane des commandes récentes et à la quantité commandée à la même période l'année précédente (octobre/novembre 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 165 tokens
- **Total**: 1,121 tokens



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
L'analyse du cycle de commande montre une irrégularité marquée avec une dernière commande remontant à 48 jours (25 septembre), ce qui dépasse largement le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, l'historique N-1 indique une activité sur la période de novembre (4 unités commandées le 08/11/2024). En application du principe de précaution B2B face à un cycle incertain et pour couvrir le risque de rupture imminent, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (excluant les pics à 4u), afin de maintenir un stock minimal sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 164 tokens
- **Total**: 1,152 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-25 12:58:14: 5u
- 2025-07-03 12:08:19: 7u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-08 08:34:26: 2u
- 2024-10-17 07:04:49: 5u
- 2024-07-19 05:58:56: 4u
- 2024-06-04 08:44:30: 3u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-25 12:58:14: 4u
- 2025-07-03 12:08:19: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-08 08:34:26: 2u
- 2024-11-08 08:34:26: 2u
- 2024-10-17 07:04:49: 1u
- 2024-09-03 09:52:39: 2u
- 2024-07-19 05:58:56: 4u
- 2024-06-04 08:44:30: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Predicted 3u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Predicted 2u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | Never ordered in previous analysis window (no history) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 7 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:13:20.245Z*
