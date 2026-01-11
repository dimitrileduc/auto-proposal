# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Herstal

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Herstal (ID: 17271)
- **Commande réelle** : S39904
- **Date commande** : 2025-10-29 09:52:37
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 24,228 input + 4,175 output = 28,403 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.6% | 26 produits prédits, 9 corrects |
| **Rappel** | 90.0% | 10 produits réels, 9 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 46.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 6 | 4.0 | 66.7% | partial | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 4 | 2 | 2.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
La dernière commande remonte au 27 août 2025, soit 62 jours. L'historique de l'année précédente montre une commande le 24 octobre, ce qui indique un besoin cyclique à cette période de l'année. Le délai depuis la dernière commande dépasse largement le cycle de rotation observé (environ 60-70 jours), créant un risque de rupture imminent dans l'horizon des 30 jours. En suivant le principe de précaution B2B et la règle de la médiane des commandes récentes (2u), une commande de 2 unités est nécessaire pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 139 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>2. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation très faible mais régulière avec un cycle moyen d'environ 3 à 5 mois. La dernière commande remonte au 27 août 2025, soit il y a 62 jours. Bien que le cycle soit irrégulier, nous entrons dans une fenêtre de risque de rupture par rapport à la commande de l'année précédente (24 octobre 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 156 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>3. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit 62 jours. L'historique montre un cycle de réapprovisionnement d'environ 3 mois (85 jours entre juin et août). Avec un seuil de 30 jours, nous entrons dans la fenêtre de risque de rupture (62 + 30 = 92 jours, dépassant le cycle moyen). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 182 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>4. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 27 août 2025, soit il y a 62 jours. L'historique montre un cycle de commande d'environ 3 mois (85 jours entre juin et août). Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons l'horizon de 90 jours (cycle habituel) durant cette période. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique est extrêmement stable avec des commandes systématiques de 1 unité (médiane = 1). Conformément aux règles sur la rotation faible, on maintient la quantité habituelle de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 176 tokens
- **Total**: 1,097 tokens



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
L'analyse du cycle de commande montre un intervalle précédent d'environ 85 jours. La dernière commande datant du 27 août 2025 (soit il y a 62 jours), nous atteignons plus de 70% du cycle moyen estimé. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent durant cette période. En application du principe de précaution B2B et face à une rotation régulière mais faible, la quantité retenue correspond à la médiane historique constante de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 130 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 6u
- **Erreur LLM**: 4u (66.7%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre une rotation très faible mais régulière avec un cycle moyen d'environ 80 à 100 jours. La dernière commande remonte au 09/07/2025, soit 111 jours avant la date actuelle. Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture imminent ou un besoin de restockage. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est de 2 unités, correspondant à la médiane stricte et constante de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 154 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>7. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 09/07/2025, soit 111 jours. Le cycle précédent était de 36 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en août. Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B pour éviter une rupture prolongée sur un produit à faible rotation, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent (juin, juillet) et N-1 (août) est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 204 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>8. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 03/06/2025, soit plus de 140 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement tout cycle raisonnable, créant une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (1, 2, 3) et à la dernière quantité commandée, afin de maintenir un stock minimal sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 146 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>9. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit plus de 140 jours. Bien que le cycle soit difficile à déterminer avec une seule commande, le principe de précaution B2B s'applique ici car le délai depuis la dernière commande dépasse largement tout cycle standard de rotation de stock. Le risque de rupture est considéré comme élevé par manque de visibilité. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, on se base sur la seule donnée récente disponible (4 unités). La médiane et la valeur de référence sont donc de 4 unités pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 154 tokens
- **Total**: 1,029 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:59:46: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 13:36:02: 3u
- 2024-08-12 06:20:34: 2u
- 2024-05-27 12:18:48: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:59:46: 1u
- 2025-06-03 06:38:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 13:36:02: 1u
- 2024-05-27 12:18:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:59:46: 1u
- 2025-06-03 06:38:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 06:20:34: 1u
- 2024-05-27 12:18:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:59:46: 1u
- 2025-06-03 06:38:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 06:20:34: 1u
- 2024-05-27 12:18:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:59:46: 2u
- 2025-06-03 06:38:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:20:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 13:36:02: 2u
- 2024-08-12 06:20:34: 2u
- 2024-05-27 12:18:48: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>7. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:20:49: 1u
- 2025-06-03 06:38:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 06:20:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 06:38:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 13:36:02: 3u
- 2024-08-12 06:20:34: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 06:38:35: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>




---

## False Positives (17)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Predicted 2u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | Predicted 2u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF006] JF MAYONNAISE OEUFS 280ML DTO | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | Product analyzed but LLM -> 0 - client ordered 4u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 4u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour ce produit. En l'absence totale d'historique de rotation, il est impossible d'établir un cycle de commande ou une quantité médiane. Par mesure de prudence et pour éviter un surstockage sans demande avérée, aucune commande n'est préconisée à cette date.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:10:57.635Z*
