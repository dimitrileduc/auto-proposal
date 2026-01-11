# Rapport Backtest - Client DLL AD FRERE SA VERLAINE

## Contexte

- **Client** : DLL AD FRERE SA VERLAINE (ID: 38802)
- **Commande réelle** : S40042
- **Date commande** : 2025-11-03 07:49:48
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 19,450 input + 3,466 output = 22,916 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.6% | 21 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 64.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 43.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 45 à 60 jours (25 juin, 7 août, 5 septembre). Depuis la dernière commande du 5 septembre, 58 jours se sont écoulés, ce qui dépasse largement le cycle moyen constaté. Bien que la rotation soit faible, le risque de rupture est imminent ou déjà avéré au regard du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et de la règle de maintien des faibles rotations, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 153 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande moyen d'environ 35 à 40 jours (juin-août : 43j, août-sept : 29j). La dernière commande date du 05/09, soit 58 jours écoulés. Ce délai dépasse largement le cycle habituel et le seuil de 70% du cycle moyen. Le risque de rupture est imminent ou déjà avéré dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 1u, 1u et 2u. La médiane de l'historique récent est de 1u. Conformément à la règle de prudence (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 197 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique montre des commandes environ tous les 45 à 60 jours (25 juin, 7 août, 5 septembre). Au 2 novembre, 58 jours se sont écoulés depuis la dernière commande. Ce délai dépasse 70% du cycle moyen estimé, présentant un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 4u, 1u et 1u. La médiane des commandes récentes est de 1u. Conformément à la règle de précaution sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 170 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 40 jours (35 jours entre juin et août, 29 jours entre août et septembre). Au 2 novembre, la dernière commande remonte à 58 jours, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent non couvert. En application du principe de précaution B2B et de la règle de rotation faible (1-2u), la quantité retenue est la médiane des commandes précédentes, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 139 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 58 jours. L'historique montre un cycle de commande irrégulier mais récurrent à l'automne (commandes en septembre et octobre 2024). Avec un seuil de réapprovisionnement de 30 jours, nous couvrons la période jusqu'à début décembre. Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais constante, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une consommation stable de 1 unité par commande (médiane = 1). Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 191 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 05/09/2025, soit 58 jours. Bien que le cycle historique soit long (environ 70-90 jours), nous entrons dans une période où une commande a été enregistrée l'année dernière (septembre/novembre). En application du principe de précaution B2B et compte tenu du seuil de 30 jours, un risque de rupture est identifié pour couvrir la fin d'année. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilité à 1 unité par commande. La médiane des commandes de 2025 est de 1u. Conformément à la règle de ne pas surestimer pour les rotations faibles, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 194 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>7. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 07/08/2025, soit environ 87 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés précédemment (environ 60-70 jours entre les commandes de l'année dernière). En application du principe de précaution B2B et pour éviter une rupture prolongée, un besoin est détecté. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (2u) et à la dernière commande passée, évitant ainsi tout surstockage pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 140 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande irrégulier avec des intervalles variant de 1 à 3 mois. La dernière commande remonte au 07/08/2025, soit 87 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen observé, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement par précaution (principe B2B). En suivant la règle de la médiane sur l'historique récent et passé (alternance entre 2u et 4u), et conformément à la consigne de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 160 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le délai depuis la dernière commande (07/08/2025) est de 87 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B s'applique car le cycle est difficile à déterminer. Un risque de rupture existe à l'horizon de 30 jours si le stock résiduel est épuisé. ÉTAPE 2 : L'historique récent montre des commandes de 4u et 1u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible (1-2u), la quantité retenue est de 1 unité pour maintenir une présence en rayon sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 163 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Il n'y a aucune commande récente, mais l'historique N-1 montre une activité sur ce produit. En l'absence de données récentes permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture potentielle, surtout avec un horizon de réapprovisionnement de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique disponible (N-1) indique des commandes unitaires (1u). La médiane des commandes passées est de 1. Conformément aux règles de rotation faible, on maintient la quantité minimale historique.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 147 tokens
- **Total**: 1,056 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:45:43: 1u
- 2025-08-07 07:13:11: 1u
- 2025-06-25 11:30:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:45:43: 2u
- 2025-08-07 07:13:11: 1u
- 2025-06-25 11:30:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:45:43: 1u
- 2025-08-07 07:13:11: 1u
- 2025-06-25 11:30:57: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:45:43: 1u
- 2025-08-07 07:13:11: 2u
- 2025-06-25 11:30:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:45:43: 1u
- 2025-06-25 11:30:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 14:26:48: 1u
- 2024-09-03 07:13:19: 1u
- 2024-06-26 07:12:33: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:45:43: 1u
- 2025-06-25 11:30:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:13:19: 2u
- 2024-06-26 07:12:33: 0u
- 2024-05-30 08:15:36: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:13:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 14:26:48: 2u
- 2024-06-26 07:12:33: 0u
- 2024-04-16 12:21:50: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:13:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:13:19: 4u
- 2024-06-26 07:12:33: 2u
- 2024-04-16 12:21:50: 4u
- 2024-03-22 09:49:12: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:13:11: 1u
- 2025-06-25 11:30:57: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 07:12:33: 0u
- 2024-04-16 12:21:50: 1u
- 2024-03-22 09:49:12: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:18.601Z*
