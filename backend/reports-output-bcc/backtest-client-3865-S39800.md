# Rapport Backtest - Client REWE MARKT GMBH - WEST

## Contexte

- **Client** : REWE MARKT GMBH - WEST (ID: 3865)
- **Commande réelle** : S39800
- **Date commande** : 2025-10-20 06:42:38
- **Date cutoff système** : 2025-10-19 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 31
- **Tokens**: 29,697 input + 5,190 output = 34,887 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.7% | 30 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 28.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -18.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 6 | 1.0 | 16.7% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence d'approvisionnement moyenne d'environ 15 à 20 jours. La dernière commande remontant au 23 septembre (soit 26 jours avant la date actuelle), le délai dépasse largement le cycle habituel et entre dans la fenêtre critique des 30 jours du seuil de réapprovisionnement. Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique récent affiche une forte récurrence de commandes de 5 unités (médiane et mode des dernières sessions significatives). Conformément aux règles de gestion B2B privilégiant la médiane pour éviter les ruptures sans surstocker, une commande de 5 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,109 tokens
- **Output**: 164 tokens
- **Total**: 1,273 tokens



</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 21 à 28 jours. La dernière commande datant du 23 septembre (soit 26 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint, créant un risque de rupture imminent. L'historique N-1 confirme également une activité soutenue en septembre/octobre. En appliquant la règle de la médiane sur les commandes récentes (1, 1, 2, 2, 3, 3, 4, 6), la médiane se situe à 2,5. Conformément aux consignes de prudence en cas de doute, la valeur inférieure de 2 unités est retenue pour éviter le surstockage tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 1,056 tokens
- **Output**: 177 tokens
- **Total**: 1,233 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 septembre, soit 26 jours. Le cycle moyen observé est d'environ 15 à 21 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous avons dépassé l'intervalle habituel de commande. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 2, 1, 3, 4, 2, 1, 2 unités. La médiane de ces commandes est de 2 unités. Conformément aux règles de précaution B2B et de maintien des rotations régulières, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,056 tokens
- **Output**: 169 tokens
- **Total**: 1,225 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 20 à 25 jours. La dernière commande datant du 02 septembre (soit 47 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent ou un besoin non couvert. En appliquant la règle de la médiane sur les commandes récentes (2u, 3u, 2u, 2u, 2u, 2u, 1u), la valeur centrale est de 2 unités. Conformément aux principes de précaution B2B et de stabilité des stocks, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,041 tokens
- **Output**: 170 tokens
- **Total**: 1,211 tokens



</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 19 août, soit 61 jours avant la date actuelle. Le cycle moyen constaté sur les commandes récentes est d'environ 15 à 25 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est critique car le délai habituel est largement dépassé. L'historique N-1 montre également une activité en septembre. En appliquant la règle de la médiane sur les quantités récentes (1, 3, 1, 2, 3, 4), la médiane se situe entre 2 et 3. Conformément au principe de précaution B2B privilégiant la valeur la plus basse en cas de doute pour éviter le surstock, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,021 tokens
- **Output**: 174 tokens
- **Total**: 1,195 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-23 06:18:30: 3u
- 2025-09-02 09:41:32: 5u
- 2025-08-19 08:35:46: 5u
- 2025-08-11 13:20:39: 5u
- 2025-08-11 10:59:30: 1u
- 2025-07-15 09:34:20: 6u
- 2025-06-23 12:14:05: 2u
- 2025-06-17 06:24:44: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:32:08: 2u
- 2024-09-24 12:35:42: 2u
- 2024-09-19 07:02:21: 3u
- 2024-08-07 13:24:40: 2u
- 2024-06-11 07:20:33: 3u
- 2024-06-04 08:24:14: 1u
- 2024-06-04 08:21:47: 1u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-23 06:18:30: 2u
- 2025-09-02 09:41:32: 4u
- 2025-08-11 13:20:39: 3u
- 2025-08-11 10:59:30: 2u
- 2025-07-15 09:34:20: 6u
- 2025-06-23 06:45:41: 1u
- 2025-06-17 06:24:44: 3u
- 2025-05-19 08:09:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:35:42: 5u
- 2024-09-19 07:02:21: 2u
- 2024-08-07 13:24:40: 2u
- 2024-07-05 08:39:50: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-23 06:18:30: 2u
- 2025-09-02 09:41:32: 1u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 4u
- 2025-07-15 09:34:20: 2u
- 2025-06-23 12:14:05: 1u
- 2025-06-23 06:45:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:32:08: 1u
- 2024-09-24 12:35:42: 2u
- 2024-09-19 07:02:21: 1u
- 2024-06-11 07:20:33: 1u
- 2024-06-04 08:24:14: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 09:41:32: 2u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 2u
- 2025-07-15 09:34:20: 2u
- 2025-06-23 12:14:05: 2u
- 2025-06-23 06:45:41: 2u
- 2025-05-19 08:09:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:35:42: 2u
- 2024-08-07 13:24:40: 2u
- 2024-06-11 07:20:33: 1u
- 2024-06-04 08:24:14: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 08:35:46: 4u
- 2025-08-11 13:20:39: 3u
- 2025-07-15 09:34:20: 2u
- 2025-06-23 06:45:41: 1u
- 2025-06-17 06:24:44: 3u
- 2025-05-19 08:09:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:26:22: 1u
- 2024-09-19 07:02:21: 1u
- 2024-06-11 07:20:33: 1u
- 2024-06-04 08:24:14: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (25)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | Predicted 3u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Predicted 2u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:07.404Z*
