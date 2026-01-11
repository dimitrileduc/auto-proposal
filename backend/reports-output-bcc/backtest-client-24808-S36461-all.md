# Rapport Backtest - Client KOCKARTZ Distripat GmbH Filiale in Raeren

## Contexte

- **Client** : KOCKARTZ Distripat GmbH Filiale in Raeren (ID: 24808)
- **Commande réelle** : S36461
- **Date commande** : 2025-05-02 09:59:13
- **Date cutoff système** : 2025-05-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,627 input + 687 output = 4,314 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 80.0% | 5 produits réels, 4 détectés |
| **F1-Score** | 88.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 5.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 500.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 500.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 500.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | 1 | 5.0 | 500.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 6 | 1 | 5.0 | 500.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 6 | 1 | 5.0 | 500.0% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 6 | 1 | 5.0 | 500.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande n'a été enregistrée sur l'année en cours (Recent Orders vide). La dernière commande enregistrée date du 05/04/2024. En appliquant le principe de précaution B2B et la règle du cycle N-1, un besoin est identifié pour couvrir la période de mai, d'autant plus que le délai depuis la dernière commande connue dépasse largement les cycles habituels. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 montre des commandes de 1u et 2u. La médiane des commandes historiques est de 2u. Conformément aux règles sur les rotations faibles, on maintient la quantité habituelle de 2u pour assurer la disponibilité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 183 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande le 05/04/2024. En l'absence de données récentes, le principe de précaution B2B s'applique pour couvrir la période équivalente de l'année précédente. Le risque de rupture est considéré comme présent pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique N-1 oscille entre 1u et 2u. La médiane des commandes passées est de 2u. Conformément aux règles de rotation faible, on maintient ce volume sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 160 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande n'a été enregistrée sur l'année en cours (Recent Orders vide). Cependant, l'historique N-1 montre une commande le 05/04/2024. En l'absence de données récentes, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur un produit à rotation lente mais existante. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 oscille entre 1u et 2u. La médiane des commandes passées est de 2u. Conformément aux règles de rotation faible, on maintient la quantité habituelle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 164 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande n'a été passée sur l'année en cours (2025). L'historique N-1 montre une commande le 05/04/2024. En l'absence de données récentes, le principe de précaution B2B s'applique car le cycle est irrégulier et la dernière commande connue remonte à plus d'un an. Un besoin est donc détecté pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre des volumes très faibles (1u ou 2u). La médiane des commandes passées est de 2u. Conformément aux règles pour les rotations faibles, on maintient ce volume historique sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 180 tokens
- **Total**: 1,087 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-05 08:46:54: 2u
- 2023-09-08 10:12:38: 1u
- 2023-06-12 06:37:32: 2u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-05 08:46:54: 2u
- 2023-09-08 10:12:38: 1u
- 2023-06-12 06:37:32: 2u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-05 08:46:54: 2u
- 2023-09-08 10:12:38: 1u
- 2023-06-12 06:37:32: 2u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-05 08:46:54: 2u
- 2023-09-08 10:12:38: 1u
- 2023-06-12 06:37:32: 2u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:26:14.614Z*
