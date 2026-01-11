# Rapport Backtest - Client CRF MARKET LONTZEN CENTRALMARK

## Contexte

- **Client** : CRF MARKET LONTZEN CENTRALMARK (ID: 38754)
- **Commande réelle** : S40306
- **Date commande** : 2025-11-13 10:10:34
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 42
- **Tokens**: 39,986 input + 7,068 output = 47,054 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.1% | 42 produits prédits, 3 corrects |
| **Rappel** | 50.0% | 6 produits réels, 3 détectés |
| **F1-Score** | 12.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 75.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 75.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -75.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [LD015] LD Onion Spread 180g | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 8u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 02/10/2025, soit 41 jours avant la date actuelle. Le cycle moyen observé est d'environ 45-50 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent dans l'horizon de prévision. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u, 2u et 2u. La médiane des quantités récentes est de 2u. Conformément aux règles de rotation faible, nous maintenons ce volume habituel sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 171 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>2. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/10/2025, soit 41 jours. Bien que le cycle historique soit long (environ 90 jours entre les deux dernières commandes), le délai actuel dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à un cycle irrégulier/faible, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane est de 1,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute et de maintenir une rotation faible (1-2u) sans augmenter sans raison, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 189 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>3. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 02/10/2025, soit 41 jours avant la date actuelle. Le cycle entre les deux dernières commandes était de 91 jours. Bien que nous soyons à environ 45% du cycle précédent, la rotation est très faible et irrégulière. En application du principe de précaution B2B (si doute sur le cycle ou rotation difficile à déterminer), un risque de rupture est identifié à l'horizon des 30 jours de seuil. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément aux règles pour les rotations très faibles (1-2u) et au choix de la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 199 tokens
- **Total**: 1,086 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:13:46: 2u
- 2025-08-06 06:32:19: 2u
- 2025-07-03 12:14:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:13:46: 2u
- 2025-07-03 12:14:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:13:46: 2u
- 2025-07-03 12:14:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>




---

## False Positives (39)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Predicted 2u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Predicted 2u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [DIS0012] Display Foodprint Karton LD | 1 | Never ordered in previous analysis window (no history) |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 4 | Never ordered in previous analysis window (no history) |
| [LD011] LD Organic Kids Spread 180 g | 4 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:07:41.635Z*
