# Rapport Backtest - Client DELHAIZE OTTIGNIES

## Contexte

- **Client** : DELHAIZE OTTIGNIES (ID: 52836)
- **Commande réelle** : S39781
- **Date commande** : 2025-10-22 13:41:36
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 35
- **Tokens**: 33,101 input + 5,950 output = 39,051 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.6% | 32 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 57.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.46 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 41.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -39.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 4 | 10 | 6.0 | 60.0% | partial | Non | Non | LLM |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (13 produits)


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
La dernière commande remonte au 22 septembre, soit 29 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. Le cycle historique montre une fréquence de commande environ tous les mois. Bien que la dernière commande était de 4 unités (pic exceptionnel), l'historique N-1 et la tendance long terme montrent une consommation régulière de 2 unités. En appliquant la règle de la médiane et de précaution (choisir la valeur la plus basse en cas de doute sur un pic), une quantité de 2 unités est préconisée pour couvrir les besoins du prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 147 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 septembre 2025, soit 29 jours avant la date actuelle. Bien que l'historique récent soit irrégulier (cycle de ~118 jours), l'historique N-1 montre une activité plus dense sur la période avril-juillet. Avec un seuil de réapprovisionnement de 30 jours, le principe de précaution B2B s'applique face à l'incertitude du cycle. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes oscillent entre 1u et 2u. La médiane de l'historique récent est de 1,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 192 tokens
- **Total**: 1,147 tokens



</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 22 septembre 2025, soit il y a 29 jours. L'historique N-1 montre une commande le 24 septembre suivie d'une période de calme, mais le cycle actuel est irrégulier. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est considéré comme présent par principe de précaution B2B, car nous atteignons le délai critique depuis la dernière rotation. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 1u. Bien que l'année dernière affichait des volumes légèrement supérieurs (2-3u), la tendance actuelle sur 2025 est stabilisée à 1u par commande. En suivant la règle de la médiane des commandes récentes et en privilégiant la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 214 tokens
- **Total**: 1,204 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/09/2025, soit 48 jours. L'historique N-1 montre une fréquence de commande environ tous les 30 à 45 jours (ex: 12/08 au 24/09). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. En suivant la règle de la médiane des quantités historiques (2u, 4u, 2u, 2u, 4u, 1u, 2u), la valeur médiane est de 2 unités. On maintient cette quantité stable conformément aux principes de rotation régulière.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 157 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 48 jours. Bien que le cycle soit irrégulier (intervalle précédent de 99 jours), le délai actuel dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B face à un cycle incertain, un besoin est détecté pour éviter une rupture. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 3u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 170 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>6. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 48 jours. Bien que le cycle soit irrégulier (intervalle précédent de 99 jours), le principe de précaution B2B s'applique car nous entrons dans une zone d'incertitude sur le stock restant. Un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 173 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>7. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/09/2025, soit 48 jours. Bien que le cycle précédent soit plus long (environ 100 jours), la rotation est irrégulière et faible. En application du principe de précaution B2B, si le cycle est difficile à déterminer ou incertain, il faut prévoir une commande pour éviter une rupture potentielle dans les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité absolue avec des commandes unitaires (1u). La médiane des commandes récentes est de 1. Conformément aux règles pour les rotations très faibles (1-2u), on maintient la quantité de 1u sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 171 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>8. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 4u vs Médiane: 4u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 10u
- **Erreur LLM**: 6u (60.0%)
- **Erreur Mediane**: 6u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/09/2025, soit 48 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une commande fin septembre (24/09/2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est présent par principe de précaution B2B. La quantité retenue est de 4 unités, correspondant à la médiane des commandes historiques (excluant les valeurs nulles) et au volume commandé à la même période l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 134 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>9. [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g</strong> - LLM: 2u vs Médiane: 0u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 0u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/09/2025, soit 48 jours avant la date actuelle. Bien que l'historique soit limité, le délai écoulé dépasse largement le cycle de réapprovisionnement standard pour un produit en rotation. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), une commande est nécessaire pour couvrir les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la dernière commande connue (médiane de l'historique récent), afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 139 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>10. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 2u vs Médiane: 0u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 0u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 4u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/09/2025, soit 48 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande récente de 2 unités, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié. La quantité retenue correspond à la dernière commande connue (2 unités), conformément à la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 132 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>11. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 mai 2025, soit environ 147 jours. Bien que l'historique récent soit faible, l'analyse de l'année précédente (N-1) montre une activité significative entre septembre et octobre (commande le 24/09/2024). Avec un seuil de réapprovisionnement de 30 jours et une absence de commande depuis plusieurs mois, le risque de rupture ou de besoin imminent est élevé par principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. La médiane des commandes historiques (1, 2, 2, 3, 3, 3, 4) est de 2,5. En suivant la règle de privilégier la médiane et de ne pas surestimer, mais en observant que les commandes les plus fréquentes et la dernière en date sont de 3 unités, la quantité de 3 est retenue pour couvrir le cycle à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 228 tokens
- **Total**: 1,199 tokens



</details>


<details>
<summary><strong>12. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 27 mai 2025, soit environ 147 jours. Bien que l'historique récent soit limité, l'historique N-1 montre une activité régulière entre avril et septembre (5 commandes). En l'absence de données récentes pour l'automne, le principe de précaution B2B s'applique car le cycle est irrégulier et le risque de rupture sur l'horizon de 30 jours est incertain. ÉTAPE 2 : ESTIMATION QUANTITÉ. La médiane des commandes historiques (1, 1, 1, 2, 2, 3) est de 1.5. En suivant la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, mais en observant que la commande la plus récente était de 2u, on maintient la quantité de 2u pour couvrir le besoin potentiel sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 226 tokens
- **Total**: 1,183 tokens



</details>


<details>
<summary><strong>13. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 mai 2025, soit plus de 140 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 30 à 60 jours). Un risque de rupture est probable. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes très bas (1u ou 2u). La médiane des commandes (récentes et N-1) est de 1u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 180 tokens
- **Total**: 1,136 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:20:01: 4u
- 2025-09-03 07:01:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:51:21: 2u
- 2024-08-12 06:00:43: 2u
- 2024-07-05 08:59:36: 2u
- 2024-06-17 13:08:38: 1u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:20:01: 1u
- 2025-05-27 12:15:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:59:36: 1u
- 2024-06-17 13:08:38: 4u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:20:01: 1u
- 2025-05-27 12:15:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:51:21: 3u
- 2024-08-12 06:00:43: 2u
- 2024-07-05 08:59:36: 0u
- 2024-06-17 13:08:38: 0u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:01:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:51:21: 4u
- 2024-08-12 06:00:43: 2u
- 2024-07-05 08:59:36: 2u
- 2024-06-17 13:08:38: 4u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:01:13: 1u
- 2025-05-27 12:15:53: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:59:36: 0u
- 2024-06-17 13:08:38: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:01:13: 1u
- 2025-05-27 12:15:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:59:36: 0u
- 2024-06-17 13:08:38: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>7. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:01:13: 1u
- 2025-05-27 12:15:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:59:36: 0u
- 2024-06-17 13:08:38: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:01:13: 3u
- 2025-05-27 12:15:53: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:51:21: 4u
- 2024-07-05 08:59:36: 2u
- 2024-06-17 13:08:38: 0u
- 2024-05-27 11:55:31: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>9. [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:01:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:59:36: 0u
- 2024-06-17 13:08:38: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 07:01:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:59:36: 0u
- 2024-06-17 13:08:38: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>11. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 12:15:53: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:51:21: 3u
- 2024-08-12 06:00:43: 1u
- 2024-07-05 08:59:36: 3u
- 2024-06-17 13:08:38: 4u
- 2024-05-27 11:55:31: 2u
- 2024-04-23 14:55:41: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>12. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 12:15:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:51:21: 3u
- 2024-08-12 06:00:43: 1u
- 2024-07-05 08:59:36: 1u
- 2024-06-17 13:08:38: 1u
- 2024-04-23 14:55:41: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 12:15:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 06:00:43: 1u
- 2024-07-05 08:59:36: 2u
- 2024-06-17 13:08:38: 2u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (19)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Predicted 2u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Predicted 2u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Predicted 3u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 4 | Predicted 4u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 4 | Predicted 4u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 4 | Predicted 4u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Predicted 4u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:58.574Z*
