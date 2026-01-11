# Rapport Backtest - Client ITM GHISLENGHIEN

## Contexte

- **Client** : ITM GHISLENGHIEN (ID: 56831)
- **Commande réelle** : S39986
- **Date commande** : 2025-10-29 11:24:53
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 19
- **Tokens**: 16,821 input + 2,917 output = 19,738 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 62.5% | 16 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 76.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 30.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
Le cycle de commande observé est d'environ 48 jours (entre juin et août). Depuis la dernière commande du 7 août 2025, 82 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent non couvert. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (3u et 2u), la quantité la plus basse est privilégiée pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 139 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 07/08/2025, soit 82 jours avant la date actuelle. Le cycle précédent était de 48 jours. Le délai actuel dépasse largement le cycle observé, ce qui indique une irrégularité ou un besoin imminent non couvert. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente des commandes de 2u et 3u. La médiane est de 2,5u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 193 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une dernière commande effectuée il y a 82 jours (le 07/08/2025). Bien que l'historique soit limité, le délai écoulé dépasse largement l'intervalle précédent (48 jours), ce qui indique un besoin de réapprovisionnement imminent ou une rupture probable dans l'horizon des 30 jours (seuil de précaution B2B). En application de la règle de la médiane sur les commandes récentes (3u et 2u) et de la consigne de prudence privilégiant la valeur la plus basse en cas de doute, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 150 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>4. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 82 jours. Le cycle précédent était de 48 jours. Le délai actuel dépasse largement le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement par précaution (principe de précaution B2B appliqué). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 2u et 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 164 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 07/08/2025, soit 82 jours. L'intervalle précédent était de 48 jours. Le délai actuel dépasse largement le cycle observé, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement par précaution (principe B2B). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u et 3u. Conformément à la règle de la médiane et au choix de la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 166 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 82 jours. L'intervalle précédent était de 48 jours. Le cycle moyen est largement dépassé, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement par précaution (principe B2B). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 2u et 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 152 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle précédent d'environ 48 jours. Depuis la dernière commande du 07/08/2025, 82 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (3u et 2u), la quantité de 2 unités est retenue (choix de la valeur la plus basse en cas de doute pour éviter le surstockage).

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 148 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>8. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 48 jours entre les deux dernières commandes. La dernière commande datant du 07/08/2025, le délai écoulé (82 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B face à un cycle irrégulier, un besoin est détecté pour éviter la rupture. La quantité retenue est de 2 unités, correspondant à la valeur basse de l'historique récent (médiane entre 2u et 3u), afin de couvrir le besoin sans surstocker sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 155 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>9. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 82 jours d'inactivité. Bien que le cycle soit difficile à déterminer avec une seule commande, le principe de précaution B2B s'applique face à une absence de réapprovisionnement prolongée. Le risque de rupture est considéré comme probable d'ici les 30 prochains jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la quantité de la dernière commande (3 unités) est utilisée comme référence pour maintenir le stock sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 151 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>10. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit de ce type. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à la valeur observée pour éviter le surstock tout en assurant la disponibilité. La médiane et la dernière valeur connue convergent vers 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 179 tokens
- **Total**: 1,052 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:38:04: 3u
- 2025-06-20 06:54:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:38:04: 3u
- 2025-06-20 06:54:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:38:04: 3u
- 2025-06-20 06:54:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:38:04: 3u
- 2025-06-20 06:54:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:38:04: 3u
- 2025-06-20 06:54:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:38:04: 3u
- 2025-06-20 06:54:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:38:04: 3u
- 2025-06-20 06:54:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:38:04: 3u
- 2025-06-20 06:54:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:38:04: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 06:54:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Predicted 3u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:52.901Z*
