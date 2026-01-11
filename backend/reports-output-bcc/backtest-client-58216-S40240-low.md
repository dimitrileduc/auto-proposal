# Rapport Backtest - Client TIERHOF ALTE KIRCHE

## Contexte

- **Client** : TIERHOF ALTE KIRCHE (ID: 58216)
- **Commande réelle** : S40240
- **Date commande** : 2025-11-12 10:45:37
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 17,497 input + 2,914 output = 20,411 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 27.8% | 18 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 43.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 54.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 52.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -54.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse montre une rotation très faible avec une seule commande enregistrée il y a 82 jours (21 août). Bien que le cycle soit difficile à établir avec un seul point de données, le principe de précaution B2B s'applique car le délai depuis la dernière commande est important. Le risque de rupture à l'horizon de 30 jours est considéré comme probable ou incertain. Conformément aux règles de gestion des rotations faibles (1-2u) et à l'utilisation de la médiane historique, la quantité préconisée est de 2 unités pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 137 tokens
- **Total**: 1,010 tokens



</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 21 août 2025, soit 82 jours avant la date actuelle (11 novembre). Bien que l'historique soit limité à une seule commande, le délai écoulé est très important. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière), un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique multiple, on se base sur la dernière quantité commandée (2u). Conformément aux règles pour les rotations faibles, on maintient cette quantité de 2 unités sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 170 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 août 2025, soit 82 jours sans réapprovisionnement. Bien que la rotation soit faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (si doute sur le cycle → prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane des commandes récentes est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 168 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 août 2025, soit 82 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé est important. En application du principe de précaution B2B (cycle irrégulier ou difficile à déterminer), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la quantité de la dernière commande (2 unités) est retenue comme référence pour maintenir le stock sans surstockage, conformément à la règle sur les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 154 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>5. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 août 2025, soit 82 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé est significatif pour un produit de type tartinade. En application du principe de précaution B2B (cycle difficile à déterminer = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. En l'absence de données multiples pour calculer une médiane, la quantité de la commande la plus récente (2 unités) est maintenue pour assurer le réapprovisionnement sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 158 tokens
- **Total**: 1,032 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 14:00:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 14:00:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 14:00:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 14:00:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 14:00:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Predicted 2u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 2 | Predicted 2u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Predicted 2u but not ordered |
| [JF066] FIL MOUTARDE 300G BOCAL | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:07.644Z*
