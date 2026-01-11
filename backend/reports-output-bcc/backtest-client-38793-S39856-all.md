# Rapport Backtest - Client DLL AD CHASTRE BV

## Contexte

- **Client** : DLL AD CHASTRE BV (ID: 38793)
- **Commande réelle** : S39856
- **Date commande** : 2025-10-22 13:44:21
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 37
- **Tokens**: 33,199 input + 5,924 output = 39,123 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 29.7% | 37 produits prédits, 11 corrects |
| **Rappel** | 84.6% | 13 produits réels, 11 détectés |
| **F1-Score** | 44.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.27 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle montre une rotation lente avec une dernière commande effectuée il y a 48 jours. Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière commande dépasse largement la fréquence habituelle observée entre juin et septembre (environ 70 jours). En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et à la valeur constante des commandes récentes, afin de maintenir le stock sans surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 130 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>2. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 48 jours. L'historique N-1 montre une commande le 14/10/2024. Bien que la rotation soit très faible, nous sommes dans la fenêtre anniversaire de la commande de l'an dernier et le délai depuis la dernière commande suggère un besoin de réapprovisionnement imminent pour éviter une rupture sur ce produit à rotation lente. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité de 1 est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 167 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>3. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/09/2025, soit 48 jours. Le cycle précédent était de 30 jours. Nous avons largement dépassé le cycle moyen constaté, ce qui indique un besoin imminent ou une rupture probable. Selon le principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent (août et septembre 2025) ainsi que l'historique N-1 montrent une consommation constante et très faible de 1 unité par commande. La médiane est de 1. Conformément aux règles pour les rotations faibles, on maintient la quantité de 1 unité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 171 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>4. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre une rotation très faible et irrégulière (environ une commande tous les 3 à 4 mois). La dernière commande remonte au 03/09/2025, soit 48 jours avant la date actuelle. Bien que le cycle soit espacé, le délai écoulé dépasse largement les intervalles observés précédemment (environ 70 jours entre juin et septembre). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture sur un produit à faible rotation), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 157 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 78 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité en août et mai, et le délai actuel dépasse largement un cycle de réapprovisionnement standard pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes constants de 2u (médiane). Conformément à la règle de maintien des rotations faibles (1-2u) sans surestimation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 178 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/08/2025, soit 78 jours. Le cycle moyen observé est d'environ 40 à 60 jours. Nous avons largement dépassé ce cycle, ce qui indique un besoin imminent ou une rupture de stock probable. Le principe de précaution B2B s'applique. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u, 2u et 2u. La médiane des commandes récentes est de 2u. Bien que l'année dernière affichait des pics à 3u, la tendance actuelle est plus basse. Conformément aux règles, nous retenons la médiane récente la plus prudente.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 179 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>7. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 04/08/2025, soit 78 jours sans activité. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles standards de réapprovisionnement en B2B. En application du principe de précaution (Étape 1) face à une rotation irrégulière ou incertaine, un risque de rupture est identifié pour les 30 prochains jours. Pour la quantité (Étape 2), la médiane de l'historique récent est de 2 unités. Ce volume minimal est maintenu pour assurer la disponibilité sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 138 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre une rotation lente mais régulière avec un cycle d'environ 70 à 80 jours entre les commandes. La dernière commande remontant au 4 août 2025 (soit plus de 75 jours), le délai dépasse largement le cycle habituel, ce qui indique un risque de rupture imminent ou un besoin non couvert pour la période actuelle. En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 2 unités, correspondant à la médiane et à la constante des commandes récentes de 2025, tout en restant prudente par rapport aux volumes de l'année précédente (3u).

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 153 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>9. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière avec une dernière commande enregistrée il y a plus de 75 jours (04/08/2025). Bien que le cycle soit irrégulier, le délai écoulé dépasse largement la fréquence habituelle, ce qui induit un risque de rupture imminent selon le principe de précaution B2B. L'historique de l'année précédente (N-1) confirme également un besoin à cette période (commande le 14/10/2024). La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et à la dernière quantité commandée, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 157 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>10. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 78 jours. L'historique N-1 montre une commande le 14/10/2024, indiquant un besoin récurrent à cette période de l'année. Le cycle est irrégulier mais le délai écoulé dépasse largement les intervalles habituels, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. Application de la règle de rotation faible (1-2u) : maintien de la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 172 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>11. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le produit présente une rotation extrêmement faible avec une seule commande enregistrée l'année dernière à la même période (août). Bien qu'il n'y ait pas de commande récente, le principe de précaution B2B et l'absence de cycle défini imposent de prévoir une unité pour éviter une rupture de stock prolongée si un besoin ponctuel se manifeste. ÉTAPE 2 : Estimation de la quantité. En suivant la règle des rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à l'historique disponible, sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 143 tokens
- **Total**: 1,018 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:00:12: 1u
- 2025-06-24 12:30:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 05:58:57: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:00:12: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 13:49:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:00:12: 1u
- 2025-08-04 11:52:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-28 06:58:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:00:12: 1u
- 2025-06-24 12:30:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 05:58:57: 1u
- 2024-05-28 06:58:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:52:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 05:58:57: 2u
- 2024-05-28 06:58:26: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:52:18: 2u
- 2025-06-24 12:30:51: 1u
- 2025-05-26 12:21:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 05:58:57: 3u
- 2024-04-23 14:37:20: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:52:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:52:18: 2u
- 2025-05-26 12:21:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 05:58:57: 3u
- 2024-05-28 06:58:26: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:52:18: 2u
- 2025-06-24 12:30:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 13:49:00: 2u
- 2024-08-12 05:58:57: 1u
- 2024-05-28 06:58:26: 3u
- 2024-04-23 14:37:20: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:52:18: 1u
- 2025-06-24 12:30:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 13:49:00: 1u
- 2024-08-12 05:58:57: 1u
- 2024-05-28 06:58:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 05:58:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (26)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Predicted 2u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Predicted 2u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Predicted 2u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Predicted 2u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Predicted 2u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [KLAK01] KLAK Maté 330ml | 1 | Predicted 1u but not ordered |
| [SOWA03] SOWA ginger beer ardent 250ml | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Predicted 1u but not ordered |
| [REB05] REB chips bio - sel de mer 35g | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 4 | Never ordered in previous analysis window (no history) |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:08:29.538Z*
