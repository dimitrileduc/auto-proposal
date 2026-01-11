# Rapport Backtest - Client DLL AD DISTRI INCOURT

## Contexte

- **Client** : DLL AD DISTRI INCOURT (ID: 38797)
- **Commande réelle** : S40076
- **Date commande** : 2025-11-05 14:54:26
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 23
- **Tokens**: 22,037 input + 3,576 output = 25,613 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.8% | 23 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 51.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 44.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 6 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 40 à 60 jours. La dernière commande remontant au 27 août 2025 (soit plus de 65 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent. Bien que l'historique récent soit limité, la médiane des commandes (2u) est privilégiée par rapport aux pics de 3u observés par le passé, conformément au principe de précaution B2B et à la règle de ne pas surestimer les quantités pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 150 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 6u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 28 à 41 jours sur la période récente. Depuis la dernière commande du 27 août 2025, 69 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou une commande déjà en retard. Pour la quantité, bien que l'historique N-1 montre des volumes plus faibles (3-4u), les deux dernières commandes récentes se sont stabilisées à 6u. En suivant la règle de la médiane des commandes récentes (3, 6, 6), la valeur centrale est 6. On maintient ce volume pour couvrir le besoin actuel.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 167 tokens
- **Total**: 1,156 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique montre un cycle de commande moyen d'environ 45 à 60 jours. La dernière commande remonte au 27 août, soit 69 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou un besoin non couvert. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont de 6, 2 et 3 unités. La médiane de l'historique récent est de 3 unités. Bien que la dernière commande fût de 6 unités, ce pic est traité comme exceptionnel conformément aux règles de gestion des valeurs extrêmes. La médiane de 3 unités est donc retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 188 tokens
- **Total**: 1,176 tokens



</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 27/08/2025, soit 69 jours avant la date actuelle (04/11/2025). L'historique montre un cycle de commande irrégulier mais fréquent (environ tous les 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le délai depuis la dernière commande dépasse largement le cycle habituel. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u et 4u. L'historique N-1 sur la période octobre/novembre indique une commande de 3u. La médiane de l'ensemble des commandes historiques (2, 4, 3, 2, 3, 2) se situe à 2.5. Conformément aux règles de privilégier la médiane et de ne pas surestimer, une quantité de 3 unités est retenue pour couvrir les besoins de fin d'année tout en restant cohérent avec le volume de l'année précédente à la même période.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 277 tokens
- **Total**: 1,231 tokens



</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant entre 30 et 70 jours. La dernière commande remontant au 27 août 2025 (soit plus de 60 jours), le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Bien que les commandes récentes soient faibles (médiane de 1u), l'historique N-1 sur la même période (septembre/octobre) montre une consommation plus stable de 2u. En application du principe de précaution B2B et pour couvrir le besoin saisonnier observé l'an dernier, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 154 tokens
- **Total**: 1,143 tokens



</details>


<details>
<summary><strong>6. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (environ une commande tous les 2 à 4 mois). La dernière commande remonte au 17 juillet 2025, soit plus de 100 jours sans activité. Bien que le cycle soit imprévisible, le principe de précaution B2B s'applique ici car le délai depuis la dernière commande dépasse largement les intervalles habituels observés en 2024. Un risque de rupture est identifié pour couvrir les 30 prochains jours. Conformément à la règle des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 157 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>7. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande enregistrée il y a plus de 100 jours (17 juillet). Bien que la rotation soit faible, le délai écoulé depuis la dernière livraison dépasse largement le cycle moyen observé, créant un risque de rupture ou un besoin de réapprovisionnement imminent selon le principe de précaution B2B. En l'absence de stabilité sur les commandes récentes (1u et 3u), la quantité retenue se base sur la médiane historique de l'année précédente (2u), ce qui permet de couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 140 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>8. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande enregistrée date du 17 juillet 2025, soit plus de 100 jours sans réapprovisionnement. Bien que l'historique récent soit espacé, le délai écoulé dépasse largement le cycle moyen observé, créant un risque de rupture imminent pour les 30 prochains jours. En application du principe de précaution B2B et de la règle de la médiane sur les volumes récents (1u en 2025), une commande de 1 unité est préconisée pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 969 tokens
- **Output**: 143 tokens
- **Total**: 1,112 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:21:13: 2u
- 2025-07-17 09:54:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 10:05:24: 1u
- 2024-09-05 07:19:35: 2u
- 2024-07-05 09:01:00: 1u
- 2024-05-29 15:02:12: 3u
- 2024-03-26 09:37:39: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:21:13: 6u
- 2025-07-17 09:54:50: 6u
- 2025-06-19 13:58:14: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 10:05:24: 3u
- 2024-09-05 07:19:35: 4u
- 2024-07-05 09:01:00: 2u
- 2024-05-29 15:02:12: 4u
- 2024-03-26 09:37:39: 4u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:21:13: 6u
- 2025-07-17 09:54:50: 2u
- 2025-06-19 13:58:14: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 10:05:24: 3u
- 2024-09-05 07:19:35: 3u
- 2024-07-05 09:01:00: 2u
- 2024-05-29 15:02:12: 4u
- 2024-03-26 09:37:39: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:21:13: 2u
- 2025-07-17 09:54:50: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 10:05:24: 3u
- 2024-07-05 09:01:00: 2u
- 2024-05-29 15:02:12: 3u
- 2024-03-26 09:37:39: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:21:13: 1u
- 2025-07-17 09:54:50: 3u
- 2025-06-19 13:58:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 10:05:24: 2u
- 2024-09-05 07:19:35: 2u
- 2024-07-05 09:01:00: 0u
- 2024-05-29 15:02:12: 2u
- 2024-03-26 09:37:39: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 09:54:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:19:35: 2u
- 2024-07-05 09:01:00: 1u
- 2024-05-29 15:02:12: 1u
- 2024-03-26 09:37:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 09:54:50: 3u
- 2025-06-19 13:58:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:19:35: 2u
- 2024-07-05 09:01:00: 0u
- 2024-05-29 15:02:12: 2u
- 2024-03-26 09:37:39: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 09:54:50: 1u
- 2025-06-19 13:58:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 10:05:24: 2u
- 2024-09-05 07:19:35: 2u
- 2024-07-05 09:01:00: 1u
- 2024-05-29 15:02:12: 2u
- 2024-03-26 09:37:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 4 | Predicted 4u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 4 | Predicted 4u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Predicted 4u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | Predicted 2u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:57.635Z*
