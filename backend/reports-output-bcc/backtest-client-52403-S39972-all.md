# Rapport Backtest - Client SA SEMAF - AD Thorembais

## Contexte

- **Client** : SA SEMAF - AD Thorembais (ID: 52403)
- **Commande réelle** : S39972
- **Date commande** : 2025-10-29 13:44:56
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 26,474 input + 4,678 output = 31,152 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 27.6% | 29 produits prédits, 8 corrects |
| **Rappel** | 66.7% | 12 produits réels, 8 détectés |
| **F1-Score** | 39.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 40 à 50 jours (49 jours entre juin et août, 40 jours entre août et septembre). La dernière commande datant du 17 septembre, soit il y a 41 jours, nous avons dépassé le cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Concernant la quantité, l'historique récent et N-1 est d'une stabilité parfaite avec 2 unités à chaque occurrence. La médiane est de 2, nous maintenons donc ce volume pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 147 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 45 jours. La dernière commande datant du 17 septembre 2025 (soit 41 jours avant la date actuelle), nous avons largement dépassé le seuil de 70% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours de réapprovisionnement. En application du principe de précaution B2B, une commande est nécessaire. Concernant la quantité, l'historique récent et N-1 oscille entre 1 et 2 unités ; la médiane des commandes récentes est de 1 unité. Conformément à la règle de privilégier la valeur la plus basse en cas de faible rotation pour éviter le surstock, la quantité retenue est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 181 tokens
- **Total**: 1,137 tokens



</details>


<details>
<summary><strong>3. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 17/09/2025, soit 41 jours. Le cycle moyen observé est d'environ 45 jours (51 jours entre juin et août, 40 jours entre août et septembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons largement les 70% du cycle moyen. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u, 1u et 4u. La médiane de ces commandes est de 2u. Conformément à la règle de privilégier la médiane et de ne pas surestimer pour un produit à rotation modérée, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 191 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>4. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 17 septembre, soit 41 jours avant la date actuelle. Bien que le cycle soit irrégulier (49 jours entre juin et août, 40 jours entre août et septembre), nous atteignons le seuil critique de réapprovisionnement. Avec un horizon de 30 jours (Replenishment Threshold Days), le risque de rupture est réel ou du moins incertain. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u, 1u et un pic à 4u. La médiane des commandes récentes est de 1u. Conformément aux règles, les pics exceptionnels sont écartés et la valeur la plus basse est privilégiée en cas de doute pour éviter le surstockage sur un produit à faible rotation. La quantité retenue est donc de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 215 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>5. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 08/08/2025, soit 81 jours. L'historique montre un cycle moyen d'environ 60 à 70 jours (juin à août 2025, ou juillet à septembre 2024). Nous avons largement dépassé ce cycle moyen, ce qui indique un besoin imminent ou une rupture de stock probable. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique est extrêmement stable avec des commandes systématiques de 1 unité (médiane = 1). Conformément aux règles sur les rotations faibles, on maintient la quantité habituelle de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 184 tokens
- **Total**: 1,124 tokens



</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/08/2025, soit 81 jours. L'historique montre des intervalles longs et irréguliers (environ 80 à 90 jours entre les commandes de 2024). Étant donné que nous atteignons ce délai et que le seuil de réapprovisionnement est de 30 jours, il existe un risque de rupture imminent ou un besoin de renouvellement de stock par précaution. ÉTAPE 2 : Estimation quantité. L'historique est constant avec des commandes unitaires systématiques (1u). La médiane et le mode sont de 1. Conformément à la règle de rotation faible, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 176 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/08/2025, soit plus de 80 jours. L'historique N-1 montre une commande fin septembre (30/09/2024). Le cycle moyen est largement dépassé et le risque de rupture est élevé pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et le pic de l'année dernière à la même période indiquent une quantité stable de 2 unités. La médiane des commandes est de 2u. Conformément au principe de précaution B2B, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 161 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse montre une rotation lente mais régulière. La dernière commande remonte à 81 jours (08/08/2025), ce qui dépasse largement le cycle observé entre les deux dernières commandes (49 jours). Bien que le volume soit faible, le principe de précaution B2B s'applique car nous entrons dans une période où une commande a été enregistrée l'année précédente (septembre/octobre). En suivant la règle de la médiane des quantités historiques (1u et 2u) et en observant la commande de l'an dernier (2u), une quantité de 2 unités est préconisée pour couvrir le risque de rupture sur l'horizon des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 159 tokens
- **Total**: 1,063 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:21:02: 2u
- 2025-08-08 11:44:29: 2u
- 2025-06-20 06:28:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 13:21:52: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:21:02: 1u
- 2025-08-08 11:44:29: 2u
- 2025-06-20 06:28:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 13:21:52: 2u
- 2024-07-17 11:10:13: 1u
- 2024-04-25 14:43:50: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:21:02: 4u
- 2025-08-08 11:44:29: 1u
- 2025-06-20 06:28:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:21:02: 4u
- 2025-08-08 11:44:29: 1u
- 2025-06-20 06:28:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:44:29: 1u
- 2025-06-20 06:28:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 13:21:52: 1u
- 2024-07-17 11:10:13: 1u
- 2024-04-25 14:43:50: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:44:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-17 11:10:13: 1u
- 2024-04-25 14:43:50: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:44:29: 2u
- 2025-06-20 06:28:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 13:21:52: 2u
- 2024-07-17 11:10:13: 1u
- 2024-04-25 14:43:50: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:44:29: 2u
- 2025-06-20 06:28:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 13:21:52: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (21)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Predicted 2u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 3 | Predicted 3u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Never ordered in previous analysis window (no history) |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:20:33.497Z*
