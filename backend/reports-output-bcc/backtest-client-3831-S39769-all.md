# Rapport Backtest - Client DANTESSE GmbH

## Contexte

- **Client** : DANTESSE GmbH (ID: 3831)
- **Commande réelle** : S39769
- **Date commande** : 2025-10-16 10:03:47
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 15,705 input + 2,826 output = 18,531 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 18.8% | 16 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 30.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 54.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 72.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 58.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 38.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 250 | 125 | 125.0 | 100.0% | partial | Non | Non | LLM |
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 12 | 50 | 38.0 | 76.0% | partial | Non | Non | LLM |
| [PF1803] LD SAUCE TARTARE 250ML WECK | 50 | 50 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 250u vs Médiane: 65u (Réel: 125u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 250u
- **Baseline calculee**: 250u
- **Mediane historique**: 65u
- **Reel commande**: 125u
- **Erreur LLM**: 125u (100.0%)
- **Erreur Mediane**: 60u (48.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 250u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence de réapprovisionnement tous les 10 à 19 jours (moyenne ~14 jours). La dernière commande datant du 02/10, soit il y a 13 jours, le seuil de 70% du cycle est largement dépassé, indiquant un risque imminent de rupture sous 30 jours. Concernant la quantité, le client a stabilisé ses commandes à 250 unités sur 4 des 5 dernières occurrences. La médiane des commandes récentes est de 250u, ce volume est donc maintenu pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,169 tokens
- **Output**: 145 tokens
- **Total**: 1,314 tokens



</details>


<details>
<summary><strong>2. [PF1809] LD SAUCE BEARNAISE 250ML WECK</strong> - LLM: 12u vs Médiane: 12u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12u
- **Baseline calculee**: 12u
- **Mediane historique**: 12u
- **Reel commande**: 50u
- **Erreur LLM**: 38u (76.0%)
- **Erreur Mediane**: 38u (76.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée date du 11 juin 2025 (il y a plus de 120 jours). L'historique N-1 montre une activité régulière en septembre et octobre (6u le 25/09/24 et 40u le 23/10/23). Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture imminent pour la période actuelle. ÉTAPE 2 : Estimation de la quantité. La commande récente de 67u semble être un pic exceptionnel par rapport à l'historique N-1 (moyenne autour de 10-15u). En excluant les valeurs extrêmes (67u et 40u) et en privilégiant la médiane des commandes régulières de l'année précédente (6, 12, 13, 10, 10, 15, 10, 12, 6), la médiane se situe à 10-12u. Par mesure de précaution B2B, on retient 12u pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 1,049 tokens
- **Output**: 265 tokens
- **Total**: 1,314 tokens



</details>


<details>
<summary><strong>3. [PF1803] LD SAUCE TARTARE 250ML WECK</strong> - LLM: 50u vs Médiane: 14u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 50u
- **Baseline calculee**: 50u
- **Mediane historique**: 14u
- **Reel commande**: 50u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 36u (72.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 50u (risque detecte)

**Raisonnement LLM:**
La dernière commande enregistrée remonte au 15 mai 2025, soit 153 jours sans réapprovisionnement. L'historique de l'année précédente montre une activité importante sur la période octobre-novembre (50u le 23/10/2023 et 10u le 24/11/2023). Compte tenu du délai écoulé et de la saisonnalité observée l'an dernier, le risque de rupture est critique dans les 30 prochains jours. En application du principe de précaution B2B et en se basant sur la médiane des volumes de commandes significatives (50u), une commande de 50 unités est préconisée pour couvrir les besoins de la période.

**Tokens utilises pour cette prediction:**
- **Input**: 1,015 tokens
- **Output**: 176 tokens
- **Total**: 1,191 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 08:37:42: 250u
- 2025-09-22 05:31:37: 250u
- 2025-09-03 07:49:42: 250u
- 2025-07-16 13:46:45: 55u
- 2025-06-11 13:19:31: 250u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-25 19:46:57: 125u
- 2024-08-29 12:54:10: 75u
- 2024-08-23 09:48:48: 50u
- 2024-07-17 09:21:00: 80u
- 2024-06-07 10:11:53: 50u
- 2024-05-28 11:15:02: 125u
- 2024-04-23 06:22:53: 50u
- 2024-04-04 06:34:16: 125u
- 2024-03-12 11:50:55: 50u
- 2024-02-15 07:27:41: 70u
- 2024-01-17 14:53:06: 75u
- 2023-12-13 12:47:04: 125u

**Quantite Mediane (fallback)**: 250u
**Quantite Reelle**: 125u

</details>


<details>
<summary><strong>2. [PF1809] LD SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 13:53:48: 67u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-25 19:46:57: 6u
- 2024-08-29 12:54:10: 12u
- 2024-07-17 09:21:00: 13u
- 2024-06-07 10:11:53: 10u
- 2024-05-28 11:15:02: 10u
- 2024-04-23 06:22:53: 15u
- 2024-04-04 06:34:16: 10u
- 2024-03-20 08:35:04: 12u
- 2024-02-15 07:27:41: 6u
- 2023-10-23 14:42:54: 40u

**Quantite Mediane (fallback)**: 12u
**Quantite Reelle**: 50u

</details>


<details>
<summary><strong>3. [PF1803] LD SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 14:34:06: 50u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-25 19:46:57: 15u
- 2024-07-17 09:21:00: 32u
- 2024-06-07 10:11:53: 10u
- 2024-05-28 11:15:02: 10u
- 2024-04-23 06:22:53: 10u
- 2024-01-17 14:53:06: 20u
- 2023-11-24 13:00:00: 10u
- 2023-10-23 14:42:54: 50u

**Quantite Mediane (fallback)**: 50u
**Quantite Reelle**: 50u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1807] LD SAUCE ANDALOUSE 250ML WECK | 5 | Predicted 5u but not ordered |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Predicted 1u but not ordered |
| [PF3274] JF BURGER SAUCE 925ML | 1 | Predicted 1u but not ordered |
| [PF1802] LD MOUTARDE MIEL 250ML WECK | 4 | Predicted 4u but not ordered |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 50 | Predicted 50u but not ordered |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 50 | Predicted 50u but not ordered |
| [PF1795] LD MAYONNAI WASABI 250ML WECK | 25 | Predicted 25u but not ordered |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 50 | Predicted 50u but not ordered |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 75 | Predicted 75u but not ordered |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 50 | Predicted 50u but not ordered |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 25 | Predicted 25u but not ordered |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 25 | Predicted 25u but not ordered |
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [CONS070] PALETTE EURO | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:05:07.958Z*
