# Rapport Backtest - Client DELI DRENGENE

## Contexte

- **Client** : DELI DRENGENE (ID: 3878)
- **Commande réelle** : S40087
- **Date commande** : 2025-11-04 07:31:42
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 7,287 input + 1,181 output = 8,468 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.9% | 7 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 60.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 2.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -2.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3260] 3311 - LD DD MAYO TRUFFES 280ML DTO | 150 | 150 | 0.0 | 0.0% | exact | LLM |
| [PF3264] 3313 - LD DD SAUCE TARTARE 280ML DTO | 150 | 150 | 0.0 | 0.0% | exact | LLM |
| [PF3261] 3320 - LD DD MAYONNAISE DU CHEF 280ML DTO | 30 | 40 | 10.0 | 25.0% | partial | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PF3260] 3311 - LD DD MAYO TRUFFES 280ML DTO</strong> - LLM: 150u vs Médiane: 150u (Réel: 150u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 150u
- **Baseline calculee**: 150u
- **Mediane historique**: 150u
- **Reel commande**: 150u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 150u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 jours (dernières commandes le 25/09 et le 27/10). La dernière commande datant d'il y a 7 jours, le prochain besoin interviendra durant la période de couverture des 30 jours (Replenishment Threshold Days). L'historique N-1 confirme également une activité soutenue en fin d'année (octobre/décembre). En suivant la règle de la médiane des commandes récentes (150u) et en excluant les pics exceptionnels passés, une quantité de 150u est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,126 tokens
- **Output**: 165 tokens
- **Total**: 1,291 tokens



</details>


<details>
<summary><strong>2. [PF3264] 3313 - LD DD SAUCE TARTARE 280ML DTO</strong> - LLM: 150u vs Médiane: 150u (Réel: 150u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 150u
- **Baseline calculee**: 150u
- **Mediane historique**: 150u
- **Reel commande**: 150u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 150u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande d'environ 30 à 45 jours (dernière commande le 16/10/2025). Avec un seuil de réapprovisionnement de 30 jours et une date actuelle au 03/11/2025, le risque de rupture est imminent d'ici la fin du mois de novembre, d'autant plus qu'une commande avait été passée le 30/10 l'année précédente. La quantité de 150 unités est la valeur médiane et la plus fréquente observée tant sur les commandes récentes que sur l'historique N-1, indiquant une stabilité de la demande pour ce format.

**Tokens utilises pour cette prediction:**
- **Input**: 1,085 tokens
- **Output**: 165 tokens
- **Total**: 1,250 tokens



</details>


<details>
<summary><strong>3. [PF3261] 3320 - LD DD MAYONNAISE DU CHEF 280ML DTO</strong> - LLM: 30u vs Médiane: 30u (Réel: 40u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 30u
- **Baseline calculee**: 30u
- **Mediane historique**: 30u
- **Reel commande**: 40u
- **Erreur LLM**: 10u (25.0%)
- **Erreur Mediane**: 10u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 30u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence d'approvisionnement d'environ 21 à 30 jours. La dernière commande enregistrée date du 04/09/2025, soit 60 jours avant la date actuelle (03/11/2025). Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou un besoin non couvert. L'historique récent montre une stabilité parfaite à 30 unités par commande. En appliquant la règle de la médiane sur les commandes récentes (30u) et en tenant compte de la récurrence de cette quantité sur l'année précédente (N-1), la quantité préconisée est de 30 unités pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,060 tokens
- **Output**: 184 tokens
- **Total**: 1,244 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF3260] 3311 - LD DD MAYO TRUFFES 280ML DTO</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-27 12:11:54: 150u
- 2025-09-25 14:14:25: 150u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 06:58:14: 200u
- 2024-09-30 13:03:29: 150u
- 2024-09-05 06:20:25: 150u
- 2024-08-12 05:40:53: 200u
- 2024-07-11 09:59:44: 200u
- 2024-05-31 06:44:35: 150u
- 2024-05-28 07:41:06: 150u
- 2024-03-08 09:03:51: 150u
- 2024-02-19 08:27:48: 150u
- 2024-01-15 10:25:10: 150u
- 2023-12-28 15:26:26: 150u
- 2023-12-04 13:32:56: 300u

**Quantite Mediane (fallback)**: 150u
**Quantite Reelle**: 150u

</details>


<details>
<summary><strong>2. [PF3264] 3313 - LD DD SAUCE TARTARE 280ML DTO</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-16 09:30:15: 150u
- 2025-09-04 13:27:14: 0u
- 2025-06-27 12:27:32: 150u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 06:58:14: 150u
- 2024-09-30 13:03:29: 150u
- 2024-09-05 06:20:25: 60u
- 2024-07-11 09:59:44: 150u
- 2024-05-31 06:44:35: 150u
- 2024-05-28 07:41:06: 150u
- 2024-03-08 09:03:51: 150u
- 2024-01-15 10:25:10: 100u
- 2023-11-15 14:56:38: 150u

**Quantite Mediane (fallback)**: 150u
**Quantite Reelle**: 150u

</details>


<details>
<summary><strong>3. [PF3261] 3320 - LD DD MAYONNAISE DU CHEF 280ML DTO</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-04 13:27:14: 30u
- 2025-08-14 13:33:02: 30u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 13:03:29: 25u
- 2024-09-05 06:20:25: 30u
- 2024-07-11 09:59:44: 25u
- 2024-05-31 06:44:35: 20u
- 2024-05-28 07:41:06: 30u
- 2024-04-08 12:32:02: 20u
- 2024-03-08 09:03:51: 20u
- 2024-01-15 10:25:10: 30u
- 2023-12-28 15:26:26: 30u

**Quantite Mediane (fallback)**: 30u
**Quantite Reelle**: 40u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3265] 3314 - LD DD SAUCE CHILI 280ML DTO | 40 | Predicted 40u but not ordered |
| [PF1925] DD SAUCE TARTARE  1000 ML | 480 | Predicted 480u but not ordered |
| [PF1057] DD MAYONNAISE TRUFFES  1000 ML | 480 | Predicted 480u but not ordered |
| [PF3263] 3312 - LD DD MAYONNAISE WASABI 280ML DTO | 60 | Predicted 60u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:20.122Z*
