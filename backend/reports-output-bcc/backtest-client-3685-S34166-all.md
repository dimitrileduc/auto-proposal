# Rapport Backtest - Client CRF HYPER MARKET EUPEN

## Contexte

- **Client** : CRF HYPER MARKET EUPEN (ID: 3685)
- **Commande réelle** : S34166
- **Date commande** : 2025-01-08 07:42:33
- **Date cutoff système** : 2025-01-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 10,060 input + 1,599 output = 11,659 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.4% | 9 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 61.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 5 | 5 | 0.0 | 0.0% | exact | LLM |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [PF1689] FILOU CURRY KETCH SQUEEZE 300</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 30 à 35 jours (07/10, 07/11, 12/12). Depuis la dernière commande du 12 décembre, 26 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (proximité immédiate du cycle habituel). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la quantité la plus basse observée, afin d'éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 159 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>2. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 5u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le cycle moyen de commande est d'environ 25 jours. La dernière commande date du 12 décembre, soit 26 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous avons dépassé l'intervalle habituel. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 5u, 15u, 4u, 5u, 4u et 3u. La valeur 15u est un pic exceptionnel à exclure. La médiane des commandes récentes (3, 4, 4, 5, 5) est de 4u. Cependant, l'historique N-1 à la même période (décembre) indiquait 6u. Par principe de précaution B2B et pour s'aligner sur la récurrence la plus fréquente (5u), une quantité de 5u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,157 tokens
- **Output**: 232 tokens
- **Total**: 1,389 tokens



</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION): Le cycle moyen observé sur les commandes récentes est d'environ 31 jours (août à novembre). La dernière commande remonte au 07/11/2024, soit 61 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou un besoin non couvert. ÉTAPE 2 (QUANTITÉ): L'historique récent montre une stabilité avec des commandes de 2u (médiane de 2u). Conformément à la règle de maintien des rotations régulières, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,125 tokens
- **Output**: 160 tokens
- **Total**: 1,285 tokens



</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 07/10/2024, soit 92 jours. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une activité en fin d'année (novembre/décembre). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes très bas (1u ou 2u). La médiane des commandes positives est de 1u. Conformément à la règle sur les rotations faibles (1-2u) et la consigne de choisir la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,074 tokens
- **Output**: 211 tokens
- **Total**: 1,285 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF1689] FILOU CURRY KETCH SQUEEZE 300</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-12 12:13:43: 1u
- 2024-11-07 08:47:27: 1u
- 2024-10-07 11:40:00: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2023-11-21 15:36:14: 1u
- 2023-09-01 06:29:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-12 12:13:43: 5u
- 2024-11-18 14:26:26: 15u
- 2024-11-07 08:47:27: 4u
- 2024-10-07 11:40:00: 5u
- 2024-08-28 06:17:19: 4u
- 2024-08-07 05:49:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-01 16:45:08: 6u
- 2023-11-21 15:36:14: 2u
- 2023-10-26 13:27:53: 0u
- 2023-10-10 11:39:08: 3u
- 2023-10-10 11:30:56: 0u
- 2023-09-25 07:35:56: 0u
- 2023-09-25 07:35:29: 2u
- 2023-09-01 06:29:05: 4u
- 2023-09-01 06:27:57: 0u
- 2023-08-07 12:36:00: 0u
- 2023-06-27 05:57:51: 5u
- 2023-06-27 05:57:21: 0u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-11-07 08:47:27: 2u
- 2024-10-07 11:40:00: 2u
- 2024-08-28 06:17:19: 1u
- 2024-08-07 05:49:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-01 16:45:08: 1u
- 2023-11-21 15:36:14: 0u
- 2023-10-26 13:27:53: 0u
- 2023-10-10 11:30:56: 0u
- 2023-09-25 07:35:56: 0u
- 2023-09-25 07:35:29: 0u
- 2023-09-01 06:27:57: 0u
- 2023-08-07 12:36:00: 0u
- 2023-06-27 05:57:51: 0u
- 2023-06-27 05:57:21: 0u
- 2023-05-31 06:05:25: 0u
- 2023-05-05 09:29:39: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-10-07 11:40:00: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-01 16:45:08: 1u
- 2023-11-21 15:36:14: 1u
- 2023-10-26 13:27:53: 0u
- 2023-10-10 11:30:56: 0u
- 2023-09-25 07:35:56: 0u
- 2023-09-25 07:35:29: 0u
- 2023-09-01 06:29:05: 1u
- 2023-09-01 06:27:57: 0u
- 2023-08-07 12:36:00: 0u
- 2023-06-27 05:57:51: 2u
- 2023-06-27 05:57:21: 0u
- 2023-05-31 06:05:25: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0094] FILOU MOUTARDE 700 GR | 3 | Predicted 3u but not ordered |
| [PF0093] FILOU MOUTARDE 300GR | 3 | Predicted 3u but not ordered |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 3 | Predicted 3u but not ordered |
| [PF0089] FILOU VOL AU VENT 400 GR | 5 | Predicted 5u but not ordered |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:29:06.143Z*
