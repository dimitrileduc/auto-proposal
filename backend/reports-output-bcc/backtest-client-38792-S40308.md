# Rapport Backtest - Client DLL AD BÜLLINGEN DELVITH AG

## Contexte

- **Client** : DLL AD BÜLLINGEN DELVITH AG (ID: 38792)
- **Commande réelle** : S40308
- **Date commande** : 2025-11-13 10:14:42
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 26,841 input + 4,752 output = 31,593 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.5% | 24 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 22.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 75.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 70.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -75.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LD015] LD Onion Spread 180g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | 8 | 7.0 | 87.5% | partial | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 02/10/2025, soit 41 jours avant la date actuelle. Bien que la rotation soit faible, l'intervalle entre les deux dernières commandes était d'environ 100 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture potentielle si un cycle plus court se présente. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément à la règle sur les rotations faibles et au choix de la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 190 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>2. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 51 jours entre les deux dernières commandes (12/08 au 02/10). Au 12/11, 41 jours se sont écoulés depuis la dernière commande, ce qui représente 80% du cycle moyen. Le seuil de risque de 70% est dépassé, indiquant un besoin de réapprovisionnement imminent dans l'horizon des 30 jours. La quantité est fixée à 2 unités, correspondant à la médiane constante des commandes récentes pour ce produit à rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 133 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>3. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 8u
- **Erreur LLM**: 7u (87.5%)
- **Erreur Mediane**: 6u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 51 jours entre les deux dernières commandes. Au 12 novembre 2025, 41 jours se sont écoulés depuis la dernière commande (02/10/2025), ce qui représente 80% du cycle moyen. Le seuil de risque de 70% étant dépassé, un réapprovisionnement est nécessaire pour couvrir les 30 prochains jours. La quantité retenue est de 1 unité, correspondant à la valeur la plus basse de l'historique récent (médiane entre 1 et 2), conformément au principe de prudence pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 152 tokens
- **Total**: 1,041 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:29:46: 1u
- 2025-06-25 09:55:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:29:46: 2u
- 2025-08-12 10:59:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:29:46: 2u
- 2025-08-12 10:59:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 8u

</details>




---

## False Positives (21)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Predicted 2u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 3 | Predicted 3u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:14.447Z*
