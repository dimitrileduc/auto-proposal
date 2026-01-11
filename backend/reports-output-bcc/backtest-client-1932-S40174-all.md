# Rapport Backtest - Client Stadtmarketing Eupen

## Contexte

- **Client** : Stadtmarketing Eupen (ID: 1932)
- **Commande réelle** : S40174
- **Date commande** : 2025-11-12 09:06:00
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,600 input + 2,113 output = 13,713 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 12 produits prédits, 4 corrects |
| **Rappel** | 57.1% | 7 produits réels, 4 détectés |
| **F1-Score** | 42.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 62.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 51.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | 8 | 7.0 | 87.5% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 5 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 1u vs Médiane: 6u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 6u
- **Reel commande**: 8u
- **Erreur LLM**: 7u (87.5%)
- **Erreur Mediane**: 2u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 13 octobre 2025, soit il y a 29 jours. Bien que le cycle soit irrégulier (intervalle récent de 68 jours), nous approchons du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié. ÉTAPE 2 : L'historique récent montre des quantités disparates (9u et 1u). Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible pour éviter le surstockage, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 165 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle observé entre les deux dernières commandes est de 68 jours. La dernière commande date du 13 octobre, soit il y a 29 jours. Bien que nous ne soyons qu'à 42% du cycle moyen, l'historique est très limité (seulement deux points de données), ce qui rend le cycle irrégulier et incertain. En application du principe de précaution B2B (Si doute sur cycle → Prévoir commande) et compte tenu du seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 4u et 3u. La règle privilégie la médiane ou, en cas de doute entre deux quantités, la plus basse pour éviter le surstockage. La quantité retenue est donc de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 207 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 5u vs Médiane: 5u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 06/08/2025, soit plus de 90 jours. Bien que l'historique récent soit limité à une seule commande de 5u, l'historique N-1 montre une activité à cette période (septembre) et une rotation irrégulière mais existante. En application du principe de précaution B2B (doute sur le cycle = prévoir commande) et pour éviter une rupture prolongée, un réapprovisionnement est nécessaire. La quantité retenue est de 5u, correspondant à la dernière commande connue et proche de la médiane historique (5.5u arrondie à la baisse selon les règles).

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 149 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 06/08/2025, soit 97 jours sans activité pour ce produit. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la seule valeur historique connue (médiane par défaut), afin de reconstituer un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 147 tokens
- **Total**: 1,020 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:48:02: 9u
- 2025-08-06 06:59:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:32:30: 6u
- 2023-11-14 08:17:49: 6u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:48:02: 4u
- 2025-08-06 06:59:26: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:59:26: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:32:30: 6u
- 2024-04-04 15:32:01: 3u
- 2024-01-12 12:52:06: 6u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:59:26: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 2 | Predicted 2u but not ordered |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 4 | Predicted 4u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 5 | Predicted 5u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | Predicted 4u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Predicted 3u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | Predicted 4u but not ordered |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 11 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 66 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:16:52.870Z*
