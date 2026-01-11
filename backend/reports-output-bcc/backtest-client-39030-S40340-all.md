# Rapport Backtest - Client REWE KARL ESSER Gmbh&CO OHG

## Contexte

- **Client** : REWE KARL ESSER Gmbh&CO OHG (ID: 39030)
- **Commande réelle** : S40340
- **Date commande** : 2025-11-13 12:49:53
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 18,857 input + 3,268 output = 22,125 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 15.0% | 20 produits prédits, 3 corrects |
| **Rappel** | 30.0% | 10 produits réels, 3 détectés |
| **F1-Score** | 20.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 4.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 70.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 6 | 5.0 | 83.3% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 7 | 4.0 | 57.1% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 7 | 5.0 | 71.4% | partial | LLM |


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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 28/10/2025, soit il y a 15 jours. Le cycle historique moyen est d'environ 30 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (15 jours écoulés + 30 jours de seuil = 45 jours). De plus, une commande avait été passée le 08/11 l'année précédente, confirmant un besoin saisonnier à cette période. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes oscillent entre 1u et 2u. En suivant la règle de la médiane et le principe de prudence pour les rotations faibles (ne pas surestimer), la quantité de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 196 tokens
- **Total**: 1,169 tokens



</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 7u
- **Erreur LLM**: 4u (57.1%)
- **Erreur Mediane**: 4u (57.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence d'environ 30 jours (28/09, 30/09, 28/10). La dernière commande datant du 28 octobre, soit il y a 15 jours, le risque de rupture intervient durant la période de threshold de 30 jours. L'historique N-1 confirme également une activité soutenue en novembre (commande le 08/11/2024). En suivant la règle de la médiane des commandes récentes (3, 2, 2, 1), la valeur centrale se situe à 2, mais compte tenu de la commande de 3 unités à la même période l'an dernier et de la dernière commande de 3 unités, le besoin est validé à 3 unités pour couvrir le cycle à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 189 tokens
- **Total**: 1,194 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 7u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/09/2025, soit 72 jours. L'historique N-1 montre une commande le 08/11/2024, indiquant un besoin récurrent à cette période de l'année. Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation quantité. La médiane des commandes récentes et historiques (1u, 2u, 3u) est de 2u. Conformément à la règle de maintien des rotations régulières et au principe de précaution B2B, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 170 tokens
- **Total**: 1,107 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 10:56:30: 1u
- 2025-09-30 06:14:36: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-08 09:29:18: 1u
- 2024-08-23 08:46:44: 2u
- 2024-07-17 11:27:03: 2u
- 2024-05-28 07:04:34: 1u
- 2024-03-21 14:00:13: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 10:56:30: 3u
- 2025-09-30 06:14:36: 2u
- 2025-09-01 13:34:19: 2u
- 2025-06-26 12:00:42: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-08 09:29:18: 3u
- 2024-08-23 08:46:44: 3u
- 2024-07-17 11:27:03: 3u
- 2024-05-28 07:04:34: 2u
- 2024-03-21 14:00:13: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 13:34:19: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-08 09:29:18: 1u
- 2024-07-17 11:27:03: 3u
- 2024-05-28 07:04:34: 2u
- 2024-03-21 14:00:13: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>




---

## False Positives (17)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |


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

*Rapport généré automatiquement le 2025-12-30T14:20:57.074Z*
