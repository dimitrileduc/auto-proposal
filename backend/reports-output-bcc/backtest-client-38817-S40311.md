# Rapport Backtest - Client DLL AD MALMEDY

## Contexte

- **Client** : DLL AD MALMEDY (ID: 38817)
- **Commande réelle** : S40311
- **Date commande** : 2025-11-13 10:22:15
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 47
- **Tokens**: 46,066 input + 8,200 output = 54,266 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.2% | 41 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 21.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 58.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 55.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -58.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [LD011] LD Organic Kids Spread 180 g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [LD015] LD Onion Spread 180g | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le produit présente une rotation très faible et irrégulière (dernière commande le 06/11, précédente en juin). Bien que la dernière commande soit récente (6 jours), le cycle est imprévisible. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une constante de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 158 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>2. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 6u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 35 à 40 jours. La dernière commande date du 06/11/2025, soit il y a seulement 6 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours, la prochaine échéance théorique (début décembre) tombe à l'intérieur de cet horizon de vigilance. En application du principe de précaution B2B et pour éviter toute rupture sur un produit à rotation constante, une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la valeur la plus basse du cycle pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 158 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>3. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 02/10/2025, soit 41 jours avant la date actuelle (12/11/2025). Les cycles précédents étaient de 33 jours et 71 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent selon le cycle moyen. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u, 4u et 3u. La médiane de ces quantités est de 3u. Conformément aux règles, on privilégie la médiane pour stabiliser le stock sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 184 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>4. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen entre les commandes est d'environ 68 jours (69 jours entre juin et août, 36 jours entre août et octobre). La dernière commande date du 02/10/2025, soit il y a 41 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons un horizon de 71 jours sans commande. Le risque de rupture est réel car nous dépassons le cycle moyen constaté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent est extrêmement stable avec une quantité constante de 3 unités par commande. La médiane est de 3. Conformément à la règle de maintien des rotations régulières, la quantité préconisée est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 185 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>5. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 35 jours. La dernière commande remonte au 02/10/2025, soit 41 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et l'horizon de 30 jours du seuil de réapprovisionnement. Le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u (3 fois) et 2u (1 fois). La médiane est de 1u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 170 tokens
- **Total**: 1,089 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-06 12:41:19: 1u
- 2025-06-20 06:58:19: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-06 12:41:19: 2u
- 2025-10-02 13:25:55: 3u
- 2025-08-27 12:10:07: 3u
- 2025-07-23 11:07:42: 2u
- 2025-06-20 06:58:19: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>3. [LD011] LD Organic Kids Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:25:55: 3u
- 2025-07-23 11:07:42: 4u
- 2025-06-20 06:58:19: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:25:55: 3u
- 2025-08-27 12:10:07: 3u
- 2025-06-20 06:58:19: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:25:55: 1u
- 2025-08-27 12:10:07: 1u
- 2025-07-23 11:07:42: 1u
- 2025-06-20 06:58:19: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>




---

## False Positives (36)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 6 | Predicted 6u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LD010] LD Organic Truffle Spread 135 g | 1 | Predicted 1u but not ordered |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Predicted 3u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | Predicted 3u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Predicted 1u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 3 | Predicted 3u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | Predicted 3u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 6 | Predicted 6u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:37.049Z*
