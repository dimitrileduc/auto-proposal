# Rapport Backtest - Client CRF MARKET BUTGENBACH GROSSMAR

## Contexte

- **Client** : CRF MARKET BUTGENBACH GROSSMAR (ID: 38738)
- **Commande réelle** : S40307
- **Date commande** : 2025-11-13 10:12:27
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 56
- **Tokens**: 51,043 input + 8,742 output = 59,785 total


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
| **MAE** | 3.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 67.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LD011] LD Organic Kids Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | 8 | 7.0 | 87.5% | partial | Non | Non | LLM |
| [LD015] LD Onion Spread 180g | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 06/11/2025, soit il y a seulement 6 jours. Cependant, l'historique montre un cycle très irrégulier et espacé (juillet à novembre). En application du principe de précaution B2B (si cycle irrégulier ou difficile à déterminer -> PRÉVOIR), une commande est déclenchée pour éviter toute rupture incertaine sur l'horizon de 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes de 2 unités. La médiane est de 2. Conformément à la règle sur les rotations faibles (1-2u), on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 173 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>2. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 8u
- **Erreur LLM**: 7u (87.5%)
- **Erreur Mediane**: 7u (87.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 06/11/2025, soit il y a seulement 6 jours. Cependant, l'historique montre une rotation extrêmement faible et irrégulière (intervalle de 86 jours entre les deux dernières commandes). En B2B, selon le principe de précaution et la règle du doute sur le cycle, un risque de rupture est considéré pour couvrir l'horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. Les deux dernières commandes sont de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 166 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>3. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 06/11/2025 (il y a 6 jours). Bien que le cycle historique soit long (environ 86 jours entre août et novembre), l'intervalle de réapprovisionnement de 30 jours et le principe de précaution B2B imposent une vigilance. En cas de rotation faible ou irrégulière, la règle stipule de prévoir une commande pour éviter toute rupture imprévue. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane est de 1. Conformément aux règles pour les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 177 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>4. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 06/11, soit il y a 6 jours. Bien que l'historique soit limité à une seule commande, le seuil de réapprovisionnement est de 30 jours. En l'absence de cycle établi (cycle irrégulier/indéterminé), le principe de précaution B2B s'applique pour éviter une rupture sur un produit dont la rotation démarre. ÉTAPE 2 : Estimation de la quantité. En se basant sur l'unique commande récente de 2 unités (médiane de l'historique disponible), on maintient cette quantité pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 158 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>5. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 06/11/2025, soit il y a 6 jours. Bien que l'historique soit limité à une seule commande récente, le seuil de réapprovisionnement est de 30 jours. En application du principe de précaution B2B (cycle difficile à déterminer = prévoir), un risque de rupture est identifié pour maintenir la disponibilité du produit. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la médiane de 1 unité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 154 tokens
- **Total**: 1,029 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LD011] LD Organic Kids Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-06 14:56:30: 2u
- 2025-07-22 12:17:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-06 14:56:30: 1u
- 2025-08-12 10:38:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>3. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-06 14:56:30: 1u
- 2025-08-12 10:38:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-06 14:56:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-06 14:56:30: 1u

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
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 4 | Predicted 4u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Predicted 3u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 3 | Predicted 3u but not ordered |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Predicted 1u but not ordered |
| [LD010] LD Organic Truffle Spread 135 g | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 3 | Predicted 3u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Predicted 2u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:36.178Z*
