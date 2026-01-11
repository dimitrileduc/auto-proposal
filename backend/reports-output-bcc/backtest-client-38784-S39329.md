# Rapport Backtest - Client DLL AD BARVAUX SA COUDELBA

## Contexte

- **Client** : DLL AD BARVAUX SA COUDELBA (ID: 38784)
- **Commande réelle** : S39329
- **Date commande** : 2025-11-07 10:50:45
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 33
- **Tokens**: 30,415 input + 5,286 output = 35,701 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 6.3% | 32 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 11.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 9.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 90.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 90.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -90.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 10 | 9.0 | 90.0% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 10 | 9.0 | 90.0% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 10u
- **Erreur LLM**: 9u (90.0%)
- **Erreur Mediane**: 8u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 62 jours. L'historique montre des cycles de commande variant entre 25 et 60 jours. Avec un seuil de réapprovisionnement de 30 jours, nous couvrons l'horizon jusqu'au 06/12/2025. Le délai actuel dépasse déjà le cycle habituel, créant un risque de rupture imminent. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes de 1u et 2u. La médiane des commandes récentes est de 2u, mais l'historique N-1 sur la même période (septembre/octobre) indique des commandes de 1u. En application de la règle de prudence (choisir la plus basse en cas de doute) et pour respecter la tendance de la dernière commande, une quantité de 1u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 222 tokens
- **Total**: 1,212 tokens



</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 10u
- **Erreur LLM**: 9u (90.0%)
- **Erreur Mediane**: 8u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 15 juillet 2025, soit plus de 110 jours sans activité, ce qui dépasse largement le cycle de rotation observé historiquement (environ 30 à 60 jours). Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu fin octobre l'année précédente. En suivant la règle de la médiane des quantités récentes (médiane entre 1u et 2u) et en privilégiant la valeur la plus basse en cas de doute pour un produit à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 161 tokens
- **Total**: 1,132 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:52:54: 1u
- 2025-07-15 08:39:14: 2u
- 2025-06-19 07:17:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:04:18: 1u
- 2024-09-03 12:24:20: 1u
- 2024-07-05 08:54:50: 3u
- 2024-05-27 08:19:12: 2u
- 2024-04-08 11:35:44: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 08:39:14: 2u
- 2025-06-19 07:17:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:04:18: 1u
- 2024-09-03 12:24:20: 1u
- 2024-07-05 08:54:50: 3u
- 2024-05-27 08:19:12: 2u
- 2024-04-08 11:35:44: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 10u

</details>




---

## False Positives (30)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:17.825Z*
