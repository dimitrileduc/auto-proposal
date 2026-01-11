# Rapport Backtest - Client DLL PROXY LILLOIS LILLODIS

## Contexte

- **Client** : DLL PROXY LILLOIS LILLODIS (ID: 38860)
- **Commande réelle** : S39274
- **Date commande** : 2025-09-22 06:21:48
- **Date cutoff système** : 2025-09-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,444 input + 3,509 output = 22,953 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.6% | 21 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
| **F1-Score** | 62.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 30.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre une rotation très faible et irrégulière. La dernière commande remonte à plus de 100 jours (11 juin 2025), ce qui dépasse largement un cycle de réapprovisionnement standard. Bien que le volume soit minime, le principe de précaution B2B et l'absence de cycle prévisible imposent de prévoir une unité pour couvrir un besoin potentiel dans les 30 prochains jours. Conformément aux règles pour les rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la commande la plus récente.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 131 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>2. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à plus de 100 jours (11 juin 2025), ce qui dépasse largement le cycle de rotation suggéré par l'historique. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le délai depuis la dernière commande est très supérieur au seuil de 30 jours. Conformément aux règles de gestion des faibles rotations, la quantité retenue est de 1 unité (médiane des commandes récentes et volume minimal de sécurité).

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 136 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 11 juin 2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible, l'historique de l'année précédente montre une commande à la même période (juin). En B2B, selon le principe de précaution et la règle de détection du besoin en cas de cycle irrégulier ou de doute sur la rotation, un réapprovisionnement est nécessaire pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes historiques (1u en 2024 et 1u en 2025), respectant la règle de ne pas augmenter les stocks sur les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 166 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 4u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 3u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 juin 2025, soit plus de 100 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (avril à juin). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande de 2 unités. Les volumes de l'année précédente (4u et 6u) semblent en baisse. Conformément à la règle de privilégier la médiane basse et de respecter la tendance à la baisse pour les faibles rotations, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 192 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité sur cette période de l'année. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des commandes de 1u et 2u. La médiane des commandes est de 2u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 171 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>6. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels de réapprovisionnement. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), une commande est nécessaire pour reconstituer le stock. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes unitaires (1u et 2u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 166 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>7. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'y a aucune commande récente pour ce produit, mais l'historique de l'année précédente montre une commande fin juin. En l'absence de cycle de rotation établi et face à une période d'inactivité prolongée, le principe de précaution B2B s'applique. Le doute sur le cycle de réapprovisionnement impose de prévoir une commande pour éviter une rupture potentielle si le besoin est saisonnier ou ponctuel. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique récent, la prévision se base sur les données N-1 de la même période. La dernière commande enregistrée était de 2 unités. Conformément aux règles de gestion des rotations faibles et au maintien des quantités historiques, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 190 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>8. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande fin août 2024. Avec une date actuelle au 21 septembre, le cycle annuel est dépassé. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique (N-1) est très stable avec des commandes unitaires (1u). La médiane et la règle de rotation faible (1-2u) imposent de maintenir la quantité à 1 unité pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 171 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>9. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une rotation très faible et sporadique (avril et juin). En l'absence de données récentes et compte tenu du principe de précaution B2B, un besoin est identifié pour éviter une rupture prolongée sur un produit à rotation lente. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente indique des commandes constantes de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 153 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>10. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le produit présente une rotation très faible et irrégulière (2 commandes l'année précédente). La dernière commande enregistrée remonte à plus d'un an (août 2024). En l'absence de commandes récentes et face à un cycle indéterminé, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée, surtout si le produit est de nouveau sollicité en fin d'année. ÉTAPE 2 : Estimation de la quantité. L'historique montre une constante de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, soit la médiane stricte de l'historique disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 174 tokens
- **Total**: 1,065 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 08:29:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-28 06:51:35: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 08:29:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-15 12:02:38: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 08:29:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-28 06:51:35: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 08:29:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-28 06:51:35: 4u
- 2024-04-15 12:02:38: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 08:29:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-28 06:51:35: 2u
- 2024-04-15 12:02:38: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 08:29:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-28 06:51:35: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-28 06:51:35: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-30 11:47:25: 1u
- 2024-04-15 12:02:38: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-28 06:51:35: 1u
- 2024-04-15 12:02:38: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-30 11:47:25: 1u
- 2024-04-15 12:02:38: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Predicted 2u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Predicted 2u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:14:34.420Z*
