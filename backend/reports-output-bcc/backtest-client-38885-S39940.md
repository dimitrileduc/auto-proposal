# Rapport Backtest - Client E CENTER ENGELS WIDDERSDORF

## Contexte

- **Client** : E CENTER ENGELS WIDDERSDORF (ID: 38885)
- **Commande réelle** : S39940
- **Date commande** : 2025-10-28 07:10:30
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 17,236 input + 2,599 output = 19,835 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 29.4% | 17 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 45.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 43.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle historique montre une fréquence de commande irrégulière mais persistante. La dernière commande remonte à 60 jours (28 août), ce qui dépasse largement le cycle moyen observé en N-1. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est critique (principe de précaution B2B). Pour la quantité, la médiane des commandes récentes et historiques se situe à 3 unités. Le pic de 10u en septembre 2024 est considéré comme exceptionnel et écarté. On retient donc la médiane de 3u pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,042 tokens
- **Output**: 144 tokens
- **Total**: 1,186 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 août 2025, soit environ 60 jours. L'historique de l'année précédente montre une activité régulière en septembre et octobre (commandes les 30/09 et 08/10). L'absence de commande récente en septembre/octobre 2025 suggère un risque de rupture imminent ou un besoin de réapprovisionnement pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. La rotation est faible et stable. La médiane des commandes récentes et historiques se situe à 2 unités. En suivant le principe de précaution B2B et en évitant la surestimation pour ce type de produit à faible rotation, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,077 tokens
- **Output**: 188 tokens
- **Total**: 1,265 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 28 août 2025, soit environ 60 jours. L'historique de l'année précédente montre une activité régulière en septembre et octobre (commandes de 2u et 3u). Bien que le cycle soit espacé, le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture imminent pour ce produit à rotation lente mais constante. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 152 tokens
- **Total**: 1,174 tokens



</details>


<details>
<summary><strong>4. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 35 à 40 jours sur les données récentes). La dernière commande remonte au 28 août 2025, soit 60 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture ou un besoin imminent. Conformément au principe de précaution B2B et à la règle de la médiane sur historique récent (1u), une commande de 1 unité est préconisée pour maintenir le stock sans surstocker ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,023 tokens
- **Output**: 145 tokens
- **Total**: 1,168 tokens



</details>


<details>
<summary><strong>5. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 37 jours entre les commandes récentes. La dernière commande datant du 28 août 2025 (soit 60 jours avant la date actuelle), le seuil de 70% du cycle est largement dépassé, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. Bien que l'historique N-1 montre une activité plus fragmentée, la rotation récente est stable à 2 unités. En appliquant la règle de la médiane sur les commandes récentes (2u, 2u), la quantité préconisée est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 157 tokens
- **Total**: 1,196 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 08:56:36: 3u
- 2025-07-22 06:27:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 12:57:36: 10u
- 2024-08-20 06:11:32: 3u
- 2024-06-25 06:32:05: 3u
- 2024-06-20 08:14:05: 2u
- 2024-05-13 13:27:25: 3u
- 2024-05-07 07:15:03: 4u
- 2024-04-23 09:04:04: 1u
- 2024-04-09 12:51:35: 3u
- 2024-03-07 12:44:52: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 08:56:36: 2u
- 2025-07-22 06:27:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:46:00: 2u
- 2024-09-30 12:57:36: 4u
- 2024-09-03 07:08:01: 2u
- 2024-08-20 06:11:32: 2u
- 2024-06-25 06:32:05: 1u
- 2024-06-20 08:14:05: 1u
- 2024-05-13 13:27:25: 1u
- 2024-05-07 07:15:03: 3u
- 2024-04-23 09:04:04: 1u
- 2024-04-09 12:51:35: 3u
- 2024-03-07 12:44:52: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 08:56:36: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 12:57:36: 3u
- 2024-09-03 07:08:01: 2u
- 2024-06-25 06:32:05: 2u
- 2024-06-20 08:14:05: 2u
- 2024-05-13 13:27:25: 1u
- 2024-05-07 07:15:03: 2u
- 2024-04-23 09:04:04: 1u
- 2024-04-09 12:51:35: 3u
- 2024-03-07 12:44:52: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 08:56:36: 1u
- 2025-07-22 06:27:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:11:32: 1u
- 2024-06-25 06:32:05: 1u
- 2024-06-20 08:14:05: 0u
- 2024-05-13 13:27:25: 0u
- 2024-05-07 07:15:03: 0u
- 2024-04-23 09:04:04: 1u
- 2024-04-09 12:51:35: 0u
- 2024-03-07 12:44:52: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 08:56:36: 2u
- 2025-07-22 06:27:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:46:00: 1u
- 2024-08-20 06:11:32: 2u
- 2024-06-25 06:32:05: 2u
- 2024-06-20 08:14:05: 3u
- 2024-05-13 13:27:25: 2u
- 2024-05-07 07:15:03: 0u
- 2024-04-23 09:04:04: 0u
- 2024-04-09 12:51:35: 1u
- 2024-03-07 12:44:52: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:59.148Z*
