# Rapport Backtest - Client Quels sont vos Goûts

## Contexte

- **Client** : Quels sont vos Goûts (ID: 17695)
- **Commande réelle** : S39252
- **Date commande** : 2025-09-17 11:40:42
- **Date cutoff système** : 2025-09-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 39
- **Tokens**: 35,135 input + 5,933 output = 41,068 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 5 produits prédits, 3 corrects |
| **Rappel** | 60.0% | 5 produits réels, 3 détectés |
| **F1-Score** | 60.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 40.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV357] LV Tartinade BIO Asperge 190g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit 82 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 3 unités. En l'absence d'autres données ou de tendances contraires, la médiane de 3 unités est retenue pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 158 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>2. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 26 juin 2025, soit 82 jours avant la date actuelle. En l'absence d'historique plus complet pour définir un cycle précis, le principe de précaution B2B s'applique car le délai écoulé suggère un risque imminent de rupture de stock. Conformément aux règles de gestion, la quantité retenue correspond à la médiane de la commande la plus récente (3 unités) afin de maintenir le niveau de stock habituel sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 117 tokens
- **Total**: 989 tokens



</details>


<details>
<summary><strong>3. [LV156] LV Sauce barbecue 263 ml bio</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou d'absence de cycle défini, une commande est nécessaire pour constituer un stock initial ou tester la rotation. La quantité minimale de 1 unité est retenue conformément à la règle de rotation faible/incertaine afin d'éviter tout surstockage initial.

**Tokens utilises pour cette prediction:**
- **Input**: 858 tokens
- **Output**: 100 tokens
- **Total**: 958 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV156] LV Sauce barbecue 263 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (2 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (Recent Orders et Last Year Orders sont vides). En l'absence totale d'historique de consommation ou de cycle de commande, il est impossible d'établir un besoin de réapprovisionnement ou de calculer une quantité basée sur la médiane. Conformément aux règles, sans base de calcul, aucune commande n'est déclenchée.

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes et N-1 inexistantes). En l'absence totale d'historique de rotation ou de cycle de commande, il est impossible d'identifier un besoin ou de calculer une médiane de réapprovisionnement. Conformément aux règles de gestion, aucune commande n'est préconisée sans signal de demande préalable.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:18:31.161Z*
