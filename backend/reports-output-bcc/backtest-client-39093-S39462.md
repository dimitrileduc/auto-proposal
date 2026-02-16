# Rapport Backtest - Client VDM FRESHVILLE

## Contexte

- **Client** : VDM FRESHVILLE (ID: 39093)
- **Commande réelle** : S39462
- **Date commande** : 2025-10-02 12:26:24
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,765 input + 3,128 output = 22,893 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.0% | 20 produits prédits, 11 corrects |
| **Rappel** | 91.7% | 12 produits réels, 11 détectés |
| **F1-Score** | 68.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.45 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière. La dernière commande remonte au 26 mai 2025 (soit plus de 120 jours). Bien que le cycle soit difficile à définir précisément, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que l'historique N-1 montre une activité durant le second semestre. En suivant la règle des cas particuliers pour les faibles rotations (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 135 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>2. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 26 mai 2025, soit plus de 120 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement tout cycle de réapprovisionnement standard. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle des rotations faibles (maintenir 1-2u), une commande de 1 unité est préconisée pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 116 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 26 mai 2025, soit plus de 120 jours sans activité. Bien que l'historique récent soit très faible (1u), l'historique de l'année précédente montre des commandes régulières tous les 2 à 3 mois (avril, juin, août). En application du principe de précaution B2B face à un cycle irrégulier et une absence prolongée de commande, un risque de rupture est identifié. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la valeur la plus basse de l'historique pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 153 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>4. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 26 mai 2025, soit plus de 120 jours sans activité. Bien que le cycle soit irrégulier et la rotation très faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu en juin l'année précédente. En suivant la règle de la médiane sur l'historique récent et la consigne de ne pas augmenter les quantités pour les produits à faible rotation (1-2u), la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 898 tokens
- **Output**: 134 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à plus de 120 jours (26 mai 2025), ce qui dépasse largement les cycles observés historiquement (environ 4 mois entre les commandes de 2024). Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, le seuil de 70% du cycle étant largement franchi. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la valeur la plus basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 151 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>6. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Aucune commande récente n'est enregistrée, mais l'historique de l'année précédente montre une rotation très faible et sporadique (1 unité tous les 4 mois environ). La dernière commande connue remontant à plus d'un an, le cycle de réapprovisionnement est largement dépassé. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle sur les rotations faibles, une commande de 1 unité est préconisée pour reconstituer le stock minimal.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 122 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>7. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 - DÉTECTION DU BESOIN : Le produit ne présente aucune commande récente en 2025, mais l'historique N-1 montre une activité régulière entre avril et août. La dernière commande enregistrée date de plus d'un an (août 2024). En l'absence de données récentes et face à un cycle irrégulier, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur une référence active l'année précédente. ÉTAPE 2 - ESTIMATION QUANTITÉ : En l'absence d'historique récent, la prévision se base sur les données N-1. Les quantités commandées étaient de 1, 2 et 3 unités. La médiane de ces commandes est de 2 unités. Conformément à la règle de ne pas surestimer pour les rotations faibles, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 202 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Bien qu'il n'y ait pas de commandes récentes en 2025, l'historique N-1 montre un cycle de rotation régulier environ tous les 60 à 80 jours (avril, juin, août). La dernière commande enregistrée date d'août 2024. Dans un contexte B2B, l'absence de données récentes sur un produit à rotation lente impose l'application du principe de précaution pour éviter une rupture de stock prolongée, surtout si le cycle habituel est dépassé. ÉTAPE 2 : Estimation de la quantité. L'historique est extrêmement stable avec des commandes constantes de 2 unités. La médiane et la valeur constante étant de 2, cette quantité est reconduite pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 189 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité sporadique. En l'absence de données récentes et face à un cycle irrégulier, le principe de précaution B2B s'applique pour éviter une rupture prolongée, surtout si le produit est saisonnier ou à rotation lente. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente montre des commandes de 1u et 2u. Conformément aux règles de gestion des rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité pour maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 164 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>10. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Il n'y a aucune commande récente enregistrée. En l'absence d'historique récent, l'analyse se base sur l'historique N-1. La dernière commande connue date d'août 2024. Selon le principe de précaution B2B et face à l'incertitude du cycle de rotation, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique N-1 montre une consommation constante de 2 unités par commande. La médiane des commandes passées est de 2. Conformément aux règles de gestion des rotations faibles, la quantité de 2 unités est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 163 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>11. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande en août. Avec un seuil de réapprovisionnement de 30 jours et une absence de données récentes, le principe de précaution B2B s'applique pour éviter une rupture sur un produit à rotation lente mais existante. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente est constant avec des commandes de 2 unités. En l'absence de tendance inverse, la médiane de 2 unités est retenue pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 141 tokens
- **Total**: 1,033 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 12:16:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:34:11: 1u
- 2024-06-17 08:11:12: 1u
- 2024-04-30 09:48:20: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 12:16:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 09:48:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 12:16:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:34:11: 2u
- 2024-06-17 08:11:12: 1u
- 2024-04-30 09:48:20: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 12:16:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 08:11:12: 2u
- 2024-04-30 09:48:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 12:16:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:34:11: 2u
- 2024-04-30 09:48:20: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:34:11: 1u
- 2024-04-30 09:48:20: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:34:11: 3u
- 2024-06-17 08:11:12: 1u
- 2024-04-30 09:48:20: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:34:11: 2u
- 2024-06-17 08:11:12: 2u
- 2024-04-30 09:48:20: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:34:11: 2u
- 2024-04-30 09:48:20: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:34:11: 2u
- 2024-04-30 09:48:20: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:34:11: 2u
- 2024-04-30 09:48:20: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande n'a été enregistrée sur la période récente ni sur la période équivalente de l'année précédente (N-1). En l'absence totale d'historique de rotation et de cycle de commande identifiable, il n'y a aucun risque de rupture détecté pour les 30 prochains jours. Le besoin de réapprovisionnement est nul.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:22:25.625Z*
