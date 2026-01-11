# Rapport Backtest - Client Ulf GmbH

## Contexte

- **Client** : Ulf GmbH (ID: 12311)
- **Commande réelle** : S39919
- **Date commande** : 2025-10-30 07:23:05
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 11,095 input + 2,132 output = 13,227 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.6% | 11 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 77.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 13.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 4.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0033] MF Tarti Poivron chilli 250g | 6 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0051] MF Kidney Beans 500g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [RF003] REFIELD Maïs 500G  | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0052] MF Pois chiches  500g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 6u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée pour 2025. En se basant sur l'historique N-1, une commande importante de 6 unités a eu lieu le 2023-11-07, ce qui correspond à la période actuelle (fin octobre/début novembre). Le délai depuis la dernière commande théorique dépasse largement le cycle habituel, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre une alternance entre 3u et 6u. Par principe de précaution B2B et pour couvrir la période de fin d'année (basée sur le pic de 6u observé en novembre 2023), la quantité de 6 unités est retenue pour éviter une rupture sur ce produit à rotation lente mais saisonnière.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 202 tokens
- **Total**: 1,177 tokens



</details>


<details>
<summary><strong>2. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande systématique fin octobre/début novembre (dernière commande le 23/09/2024, précédente le 07/11/2023). Le délai depuis la dernière commande théorique dépasse largement le cycle habituel de 45-60 jours. Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais régulière, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique montre une stabilité parfaite à 3 unités sur les 5 dernières commandes de 2024. La médiane et la tendance récente étant de 3u, cette quantité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 184 tokens
- **Total**: 1,159 tokens



</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente enregistrée. L'historique N-1 montre une commande le 23 septembre 2024, suivie d'un vide jusqu'en novembre. Cependant, le cycle historique est irrégulier (intervalles de 1 à 5 mois). En application du principe de précaution B2B (si doute sur le cycle ou absence d'historique récent → prévoir), un besoin est identifié pour éviter une rupture prolongée, le seuil de 30 jours étant largement atteint par rapport à la dernière activité connue. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de données récentes, l'analyse se base sur l'historique N-1. Les quantités commandées sont : 4, 2, 3, 4, 3. La médiane de ces valeurs est de 3. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est 3.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 240 tokens
- **Total**: 1,180 tokens



</details>


<details>
<summary><strong>4. [MF0051] MF Kidney Beans 500g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée en 2025. La dernière commande connue date du 23 septembre 2024. Le cycle historique montre des réapprovisionnements tous les 1.5 à 2 mois environ. En l'absence de données récentes et compte tenu du délai écoulé depuis la dernière commande N-1 (plus d'un an), le risque de rupture est considéré comme critique selon le principe de précaution B2B. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 montre des volumes compris entre 1u et 4u. La médiane des commandes de l'année précédente est de 3u. Conformément aux règles de gestion, nous retenons cette valeur médiane pour reconstituer le stock sans surévaluer.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 191 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>5. [RF003] REFIELD Maïs 500G </strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité régulière jusqu'en septembre. La dernière commande connue date de plus d'un an (septembre 2024). En l'absence de données récentes et selon le principe de précaution B2B, un besoin de réapprovisionnement est identifié pour relancer le stock sur ce produit à rotation saisonnière/régulière. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente montre une stabilité forte avec une quantité récurrente de 4 unités (médiane des commandes de 2024). Conformément aux règles, nous maintenons cette quantité habituelle de 4 unités pour couvrir le cycle de vente sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 184 tokens
- **Total**: 1,122 tokens



</details>


<details>
<summary><strong>6. [MF0052] MF Pois chiches  500g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'y a aucune commande récente enregistrée, mais l'historique de l'année précédente montre une rotation au printemps/été. En l'absence de données récentes et compte tenu du principe de précaution B2B, un doute subsiste sur la reprise du cycle de consommation. Selon la règle "Si cycle irrégulier ou difficile à déterminer → PRÉVOIR", un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 présente une régularité parfaite avec deux commandes de 4 unités. La médiane et la valeur constante de 4u sont donc retenues pour couvrir le besoin sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 170 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>7. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité régulière jusqu'en septembre. La dernière commande connue date de plus d'un an (septembre 2024). En application du principe de précaution B2B et face à l'absence de données récentes, un besoin de réapprovisionnement est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente est très stable avec une médiane de 3 unités (commandes de 3u et 2u). Conformément aux règles de gestion des rotations régulières, la quantité de 3 unités est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 944 tokens
- **Output**: 174 tokens
- **Total**: 1,118 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:28:06: 6u
- 2024-07-29 06:05:05: 3u
- 2024-06-11 12:36:50: 3u
- 2024-04-23 07:41:16: 2u
- 2024-03-14 07:49:46: 3u
- 2024-01-11 10:23:03: 3u
- 2023-11-07 08:20:30: 6u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>2. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:28:06: 3u
- 2024-07-29 06:05:05: 3u
- 2024-06-11 12:36:50: 3u
- 2024-04-23 07:41:16: 3u
- 2024-03-14 07:49:46: 3u
- 2024-01-11 10:23:03: 5u
- 2023-11-07 08:20:30: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:28:06: 4u
- 2024-04-23 07:41:16: 2u
- 2024-03-14 07:49:46: 3u
- 2024-01-11 10:23:03: 4u
- 2023-11-07 08:20:30: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [MF0051] MF Kidney Beans 500g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:28:06: 3u
- 2024-07-29 06:05:05: 4u
- 2024-06-11 12:36:50: 1u
- 2024-04-23 07:41:16: 4u
- 2024-03-14 07:49:46: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [RF003] REFIELD Maïs 500G </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:28:06: 4u
- 2024-07-29 06:05:05: 4u
- 2024-06-11 12:36:50: 4u
- 2024-04-23 07:41:16: 4u
- 2024-03-14 07:49:46: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>6. [MF0052] MF Pois chiches  500g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 12:36:50: 4u
- 2024-04-23 07:41:16: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>7. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:28:06: 3u
- 2024-07-29 06:05:05: 3u
- 2024-06-11 12:36:50: 3u
- 2024-04-23 07:41:16: 2u
- 2024-03-14 07:49:46: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Predicted 2u but not ordered |
| [MF0031] MF Tarti Olives verte 250g  | 3 | Predicted 3u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 3 | Predicted 3u but not ordered |
| [MF0047] MF Mayonnaise 250ml | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:16.519Z*
