# Rapport Backtest - Client DLL PROXY RIXENSART SHOPFRAIS

## Contexte

- **Client** : DLL PROXY RIXENSART SHOPFRAIS (ID: 38871)
- **Commande réelle** : S40110
- **Date commande** : 2025-11-05 14:53:54
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 15,731 input + 2,992 output = 18,723 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.1% | 17 produits prédits, 8 corrects |
| **Rappel** | 61.5% | 13 produits réels, 8 détectés |
| **F1-Score** | 53.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit environ 60 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une commande à la même période (22/10/2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. La médiane des commandes est de 1. Conformément à la règle sur les rotations très faibles, on maintient la quantité de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 174 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>2. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/09/2025, soit 60 jours avant la date actuelle. L'historique (N et N-1) montre une rotation très faible mais régulière avec des intervalles de 2 à 3 mois. Bien que le cycle soit lent, le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours et s'approche de la fréquence habituelle de consommation. Par principe de précaution B2B pour éviter une rupture sur un produit à faible rotation, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 156 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>3. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 60 jours. L'historique N-1 montre une commande en septembre suivie d'une absence d'activité jusqu'à l'année suivante, mais le cycle récent (juin à septembre) est de 70 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon critique (60+30 = 90 jours). Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation faible mais régulière, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique est constant à 1 unité par commande. La médiane des commandes récentes et passées est de 1. On maintient cette quantité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 942 tokens
- **Output**: 194 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 60 jours. L'historique N-1 montre une activité régulière entre août et octobre (3 commandes). Le cycle moyen constaté est d'environ 45-60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre 1u et 3u (médiane 2u). L'historique N-1 est très stable à 2u. En suivant le principe de précaution et la médiane historique, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 171 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 60 jours. L'historique N-1 montre une activité régulière en septembre et octobre. Bien que le cycle soit lent, le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours et correspond à une période de commande historique (octobre/novembre). Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 1u et 2u. La médiane des commandes est de 1u. En respectant la règle de choisir la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 192 tokens
- **Total**: 1,167 tokens



</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 60 jours. L'historique montre des cycles de commande variant entre 40 et 70 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle est déjà dépassé. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes très faibles (1u ou 2u). La médiane des commandes est de 1u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 183 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 60 jours. L'historique montre des cycles de commande variant entre 60 et 90 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock (risque de rupture imminent). ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes très faibles et stables (1u ou 2u). La médiane des commandes est de 1u. En respectant le principe de précaution B2B sans surstocker sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 169 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>8. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter une rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 162 tokens
- **Total**: 1,038 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u
- 2025-06-27 09:01:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:23:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 10:19:34: 1u
- 2024-06-07 10:14:11: 1u
- 2024-04-17 08:29:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u
- 2025-06-27 09:01:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 10:19:34: 1u
- 2024-08-07 06:16:00: 1u
- 2024-06-07 10:14:11: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u
- 2025-06-27 09:01:04: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:23:30: 2u
- 2024-09-12 10:19:34: 2u
- 2024-08-07 06:16:00: 2u
- 2024-06-07 10:14:11: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u
- 2025-06-27 09:01:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:23:30: 1u
- 2024-09-12 10:19:34: 1u
- 2024-08-07 06:16:00: 2u
- 2024-06-07 10:14:11: 2u
- 2024-04-17 08:29:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u
- 2025-06-27 09:01:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:23:30: 2u
- 2024-09-12 10:19:34: 1u
- 2024-08-07 06:16:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:23:30: 1u
- 2024-08-07 06:16:00: 2u
- 2024-06-07 10:14:11: 1u
- 2024-04-17 08:29:40: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-27 09:01:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Never ordered in previous analysis window (no history) |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:16:46.155Z*
