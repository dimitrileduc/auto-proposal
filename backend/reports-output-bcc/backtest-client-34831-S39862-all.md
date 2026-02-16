# Rapport Backtest - Client Le Cortil asbl

## Contexte

- **Client** : Le Cortil asbl (ID: 34831)
- **Commande réelle** : S39862
- **Date commande** : 2025-10-22 11:59:36
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,299 input + 1,808 output = 14,107 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 9 produits prédits, 3 corrects |
| **Rappel** | 33.3% | 9 produits réels, 3 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 25 août, soit 57 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (août/novembre). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la commande la plus récente, afin de maintenir un stock cohérent avec la rotation actuelle sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 129 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 3u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 25 août 2025, soit 57 jours avant la date actuelle. Bien que l'historique soit limité, l'intervalle entre les commandes passées (environ 3-4 mois) et le seuil de réapprovisionnement de 30 jours indiquent un risque de rupture imminent ou un besoin de restockage par précaution. En application du principe de précaution B2B et face à un cycle irrégulier, une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane et à la valeur la plus récente observée, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 151 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>3. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 25 août 2025, soit 57 jours. Bien que l'historique soit limité, le délai écoulé dépasse largement le cycle de réapprovisionnement standard pour ce type de produit en période automnale (comparaison avec la commande de novembre N-1). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 3 unités, correspondant à la médiane de la commande la plus récente, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 141 tokens
- **Total**: 1,046 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:27:15: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 09:17:30: 5u
- 2023-11-30 07:49:48: 5u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:27:15: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 09:17:30: 5u
- 2023-11-30 07:49:48: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:27:15: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-12 09:17:30: 5u
- 2023-11-30 07:49:48: 5u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 3 | Predicted 3u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 3 | Predicted 3u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 3 | Predicted 3u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 3 | Predicted 3u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 4 | Predicted 4u but not ordered |


---

## False Negatives (6)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Never ordered in previous analysis window (no history) |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |


### Details des Predictions LLM pour FN (4 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) permettant d'établir un cycle de consommation ou une rotation pour ce produit. En l'absence totale d'historique, le risque de rupture ne peut être évalué et aucune quantité ne peut être justifiée selon les règles de calcul basées sur la médiane.

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour établir un cycle de consommation ou une quantité de référence. En l'absence totale d'historique, aucun besoin de réapprovisionnement ne peut être justifié par précaution.

</details>


<details>
<summary><strong>4. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée de commande n'est disponible pour ce produit, que ce soit sur la période récente ou sur l'année précédente (N-1). En l'absence totale d'historique de rotation ou de cycle de vente, il est impossible d'identifier un besoin ou de calculer une médiane de réapprovisionnement. Par mesure de prudence et pour éviter la création d'un stock mort sans demande avérée, aucune quantité n'est préconisée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:14:38.129Z*
