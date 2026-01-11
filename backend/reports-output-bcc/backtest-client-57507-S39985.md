# Rapport Backtest - Client ITM HERSTAL

## Contexte

- **Client** : ITM HERSTAL (ID: 57507)
- **Commande réelle** : S39985
- **Date commande** : 2025-10-29 09:48:55
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 15,306 input + 2,869 output = 18,175 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.3% | 15 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 69.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13 août 2025, soit 76 jours. L'historique montre des intervalles de commande d'environ 37 jours (septembre à octobre 2024). Le délai actuel dépasse largement le cycle habituel et l'horizon de 30 jours du seuil de réapprovisionnement. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. Application de la règle de rotation faible : maintien de la quantité historique de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 172 tokens
- **Total**: 1,077 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août 2025, soit plus de 75 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité sur la période de septembre/octobre (2 commandes de 1u). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. La médiane des commandes est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 177 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente et irrégulière. La dernière commande remonte au 13 août 2025, soit plus de 75 jours sans activité. Bien que le cycle soit difficile à définir précisément, l'historique de l'année précédente (septembre/octobre 2024) indique un besoin durant cette période saisonnière. En application du principe de précaution B2B face à un cycle incertain et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes et à la valeur la plus basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 167 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13 août 2025, soit 76 jours avant la date actuelle. L'historique N-1 montre des commandes en septembre et octobre. Bien que le cycle soit irrégulier et la rotation faible, le principe de précaution B2B s'applique car nous sommes dans la période d'activité constatée l'an dernier. Le risque de rupture est considéré comme présent par manque de visibilité sur le stock résiduel. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes très faibles (1u ou 2u). Conformément à la règle sur les rotations faibles, on maintient la quantité minimale. La médiane des commandes est de 1u. On retient donc 1 unité pour éviter le surstock tout en assurant la présence produit.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 203 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août 2025, soit 76 jours. Bien que le cycle récent soit irrégulier (48 jours entre juin et août), nous entrons dans la période de forte activité de fin d'année (octobre/novembre), confirmée par l'historique N-1 (commandes en septembre et octobre). Le délai depuis la dernière commande dépasse largement le cycle moyen observé, créant un risque de rupture imminent pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes très faibles (1u et 2u). La médiane des commandes récentes est de 1,5u. Conformément à la règle de précaution sur les faibles rotations et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 210 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>6. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière avec un intervalle moyen d'environ 45 à 60 jours. La dernière commande remontant au 13 août 2025 (soit plus de 75 jours), le risque de rupture est critique pour les 30 prochains jours. Conformément au principe de précaution B2B et à l'historique N-1 (commandes en septembre/octobre 2024), un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes passées (1u et 2u) pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 153 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>7. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière, avec une dernière commande enregistrée il y a 124 jours (26 juin 2025). Bien que le cycle soit difficile à définir, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu à la mi-septembre l'année précédente. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane historique et à la dernière commande passée.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 135 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 26 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles habituels observés entre 2024 et 2025. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 131 tokens
- **Total**: 1,017 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:16:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 14:17:45: 1u
- 2024-09-16 12:52:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:16:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 12:05:49: 1u
- 2024-09-16 12:52:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:16:54: 1u
- 2025-06-26 12:10:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 12:05:49: 2u
- 2024-09-16 12:52:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:16:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 12:05:49: 2u
- 2024-09-16 12:52:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:16:54: 1u
- 2025-06-26 12:10:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 12:05:49: 3u
- 2024-09-16 12:52:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:16:54: 1u
- 2025-06-26 12:10:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 12:05:49: 2u
- 2024-09-16 12:52:25: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 12:10:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 12:52:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 12:10:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 12:52:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:45.137Z*
