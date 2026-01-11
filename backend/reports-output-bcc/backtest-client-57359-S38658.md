# Rapport Backtest - Client NOUROLIA SRL (DLL AD BELGRADE)

## Contexte

- **Client** : NOUROLIA SRL (DLL AD BELGRADE) (ID: 57359)
- **Commande réelle** : S38658
- **Date commande** : 2025-08-25 06:31:56
- **Date cutoff système** : 2025-08-24 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 24
- **Tokens**: 21,029 input + 2,986 output = 24,015 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 78.6% | 14 produits prédits, 11 corrects |
| **Rappel** | 78.6% | 14 produits réels, 11 détectés |
| **F1-Score** | 78.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.09 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 39.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -27.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 5 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte à 55 jours (30/06/2025). Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = prévoir), un risque de rupture est identifié. ÉTAPE 2 : En l'absence de cycle établi et avec une rotation très faible, la règle consiste à maintenir la quantité historique de 1 unité pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 136 tokens
- **Total**: 1,011 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle montre une commande environ tous les 50-60 jours. La dernière commande datant du 30 juin (soit 55 jours d'écart avec la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (2u et 5u), la quantité retenue est la plus basse (2u) pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 134 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle montre une dernière commande il y a 55 jours (30 juin). Bien que l'historique soit limité, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant une incertitude sur le stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 5 unités, correspondant à la valeur la plus basse de l'historique récent (médiane entre 5 et 8, avec choix de la valeur inférieure en cas de doute) pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 150 tokens
- **Total**: 1,042 tokens



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
ÉTAPE 1 : Le cycle moyen observé est d'environ 53 jours. La dernière commande remonte au 30 juin, soit 55 jours avant la date actuelle. Nous avons dépassé 100% du cycle moyen, le risque de rupture est donc imminent dans l'horizon des 30 jours. ÉTAPE 2 : L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité médiane de 1 est maintenue pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 139 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse montre un cycle de commande d'environ 53 jours entre les deux dernières livraisons. Au 24 août, 55 jours se sont écoulés depuis la dernière commande (30 juin), ce qui dépasse largement le cycle moyen et le seuil de 70% défini par le principe de précaution. Le risque de rupture est imminent dans l'horizon des 30 jours. Pour la quantité, la médiane des commandes récentes (2u et 4u) est de 3u, mais conformément à la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 153 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin, soit 55 jours. Le cycle précédent était de 53 jours. Nous sommes à l'échéance du cycle moyen et dans l'horizon des 30 jours du seuil de réapprovisionnement. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 2u et 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 162 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>7. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 30 juin, soit 55 jours. Bien que le cycle soit irrégulier avec seulement deux commandes récentes, le délai écoulé dépasse largement l'intervalle précédent (53 jours). Dans un contexte B2B, le principe de précaution s'applique face à un risque de rupture probable dans les 30 prochains jours. ÉTAPE 2 : L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 146 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 30 juin, soit 55 jours. Bien que l'historique soit limité, l'intervalle entre les deux commandes précédentes était de 53 jours. Nous sommes actuellement à l'échéance du cycle observé. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : Les quantités historiques sont de 2u et 4u. En application de la règle de prudence B2B privilégiant la médiane et la valeur la plus basse en cas de doute pour éviter le surstockage sur des produits à faible rotation, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 160 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>9. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin, soit 55 jours. Bien que le cycle soit irrégulier (un intervalle précédent de 53 jours), le délai actuel dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B face à un cycle incertain, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 2u et 6u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible pour éviter le surstockage, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 165 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>10. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
La dernière commande remonte au 08/05/2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible, le principe de précaution B2B s'applique face à une absence prolongée de commande pour éviter une rupture de stock potentielle sur le point de vente. En l'absence d'un cycle régulier identifiable, un besoin est détecté. La quantité est fixée à 2 unités, correspondant à la médiane (et unique valeur) de l'historique récent, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 132 tokens
- **Total**: 1,009 tokens



</details>


<details>
<summary><strong>11. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/05/2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible, le principe de précaution B2B s'applique car le cycle de réapprovisionnement est indéterminé. En l'absence d'historique complexe, la règle de maintien de la quantité minimale (1u) est appliquée pour éviter une rupture prolongée tout en limitant le risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 111 tokens
- **Total**: 983 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:29:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:29:16: 2u
- 2025-05-08 06:47:25: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:29:16: 8u
- 2025-05-08 06:47:25: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:29:16: 1u
- 2025-05-08 06:47:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:29:16: 2u
- 2025-05-08 06:47:25: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:29:16: 3u
- 2025-05-08 06:47:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:29:16: 1u
- 2025-05-08 06:47:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:29:16: 2u
- 2025-05-08 06:47:25: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:29:16: 6u
- 2025-05-08 06:47:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:47:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>11. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:47:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 3 | Product analyzed but LLM -> 0 - client ordered 3u |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 3 | Product analyzed but LLM -> 0 - client ordered 3u |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (3 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>


<details>
<summary><strong>2. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de commande établi, aucun besoin de réapprovisionnement ne peut être justifié selon le principe de précaution. Le risque de rupture est considéré comme nul faute de demande enregistrée.

</details>


<details>
<summary><strong>3. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée de commande n'est disponible pour ce produit, que ce soit sur la période récente ou sur l'année précédente (N-1). En l'absence totale d'historique de rotation ou de cycle de consommation, il est impossible d'établir un besoin de réapprovisionnement ou de calculer une quantité basée sur la médiane. Par mesure de prudence et pour éviter la création de stock mort sans demande avérée, aucune commande n'est préconisée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:21:31.691Z*
