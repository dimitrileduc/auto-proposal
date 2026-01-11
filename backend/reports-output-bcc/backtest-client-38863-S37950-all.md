# Rapport Backtest - Client DLL PROXY LOUVEIGNE 2002 S.A.

## Contexte

- **Client** : DLL PROXY LOUVEIGNE 2002 S.A. (ID: 38863)
- **Commande réelle** : S37950
- **Date commande** : 2025-07-10 09:55:58
- **Date cutoff système** : 2025-07-09 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 18,988 input + 3,519 output = 22,507 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 21 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.29 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 45.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 31.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -45.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 5 | 4.0 | 80.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande date du 03/07/2025. L'analyse de l'historique montre un cycle de réapprovisionnement moyen d'environ 45 jours. Bien que seulement 6 jours se soient écoulés, nous entrons dans la période correspondant aux commandes de l'année précédente (juillet). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (Replenishment Threshold Days), un besoin est identifié. La quantité retenue est de 2 unités, correspondant à la médiane et à la mode des commandes récentes ainsi qu'au volume commandé à la même période l'an dernier.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 156 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence d'environ 45 à 50 jours. La dernière commande date du 3 juillet (il y a 6 jours). Bien que le cycle habituel ne soit pas encore atteint, l'historique N-1 montre une commande systématique début juillet (05/07/2024). En application du principe de précaution B2B et pour couvrir l'horizon de 30 jours (Replenishment Threshold Days), un besoin est identifié. Pour la quantité, la médiane des commandes récentes (1, 3, 5) est de 3, mais compte tenu de la règle de prudence sur les faibles rotations et du fait que la commande de 5u est très récente, on privilégie la quantité la plus basse de l'historique N-1 pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 191 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 03/07/2025, soit il y a seulement 6 jours. Cependant, l'historique montre une accélération de la consommation (4u en juillet contre 1u en février). Le cycle moyen est irrégulier (environ 60-80 jours), mais la proximité de la date anniversaire de l'an dernier (05/07/2024) et le seuil de réapprovisionnement de 30 jours imposent une vigilance. En application du principe de précaution B2B (doute sur le cycle), un besoin est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 4u, 3u et 1u. La médiane de l'historique récent est de 3u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 239 tokens
- **Total**: 1,193 tokens



</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 45 jours. La dernière commande date du 3 juillet, soit il y a seulement 6 jours. Cependant, le seuil de réapprovisionnement est de 30 jours et nous entrons dans une période (juillet) où l'historique N-1 montre une activité régulière. En application du principe de précaution B2B et pour couvrir l'horizon des 30 prochains jours face à un cycle qui peut être irrégulier, un besoin est identifié. Pour la quantité, la médiane des commandes récentes (1, 3, 1, 4) est de 2 unités. Ce chiffre correspond également au volume commandé à la même période l'année dernière (2u en juillet 2024). On retient donc la médiane de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 188 tokens
- **Total**: 1,142 tokens



</details>


<details>
<summary><strong>5. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande observé est d'environ 42 jours. La dernière commande date du 03/07/2025, soit il y a seulement 6 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours, l'horizon de prévision atteint le 08/08/2025, date à laquelle le cycle habituel sera largement dépassé (36 jours écoulés). En application du principe de précaution B2B et pour éviter une rupture sur un produit à faible rotation, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane et à la constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 152 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande date du 03/07/2025 (il y a 6 jours). Bien que la commande soit récente, l'historique de l'année précédente montre une activité sur la période juillet (05/07/2024). Le cycle de commande est irrégulier (février puis juillet), ce qui impose l'application du principe de précaution B2B pour éviter une rupture sur un produit à faible rotation. En suivant la règle de la médiane des quantités récentes (médiane entre 1u et 3u = 2u) et la consigne de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 163 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>7. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/07/2025 (il y a 6 jours). Bien que la rotation soit très faible, l'historique N-1 montre une commande identique à cette période précise (05/07/2024). En application du principe de précaution B2B et pour couvrir l'horizon de 30 jours, un risque de besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 170 tokens
- **Total**: 1,074 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:13:34: 2u
- 2025-05-22 10:09:24: 2u
- 2025-04-15 13:14:16: 2u
- 2025-02-27 09:44:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:58:39: 2u
- 2024-05-28 06:44:37: 1u
- 2024-04-15 13:10:13: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:13:34: 5u
- 2025-05-22 10:09:24: 1u
- 2025-04-15 13:14:16: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:58:39: 1u
- 2024-05-28 06:44:37: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:13:34: 4u
- 2025-04-15 13:14:16: 3u
- 2025-02-27 09:44:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:58:39: 1u
- 2024-05-28 06:44:37: 1u
- 2024-04-15 13:10:13: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:13:34: 4u
- 2025-05-22 10:09:24: 1u
- 2025-04-15 13:14:16: 3u
- 2025-02-27 09:44:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:58:39: 2u
- 2024-05-28 06:44:37: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:13:34: 1u
- 2025-05-22 10:09:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:13:34: 3u
- 2025-02-27 09:44:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:58:39: 1u
- 2024-05-28 06:44:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:13:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:58:39: 1u
- 2024-04-15 13:10:13: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | Predicted 2u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:07.889Z*
