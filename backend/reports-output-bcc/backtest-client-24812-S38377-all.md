# Rapport Backtest - Client KOCKARTZ Distripat GmbH (Filiale in Eynatten)

## Contexte

- **Client** : KOCKARTZ Distripat GmbH (Filiale in Eynatten) (ID: 24812)
- **Commande réelle** : S38377
- **Date commande** : 2025-08-07 06:33:33
- **Date cutoff système** : 2025-08-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,716 input + 526 output = 3,242 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 3 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 6.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 666.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 666.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 666.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV129] LV Tartinade Carotte Gingembre 190g | 8 | 1 | 7.0 | 700.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 8 | 1 | 7.0 | 700.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 7 | 1 | 6.0 | 600.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/04/2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la mi-juillet (18/07/2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique est constant à 1 unité par commande (médiane = 1). Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 175 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique montre une rotation très faible mais régulière (environ tous les 3 à 6 mois). La dernière commande enregistrée date du 18 juillet 2024. Après plus d'un an sans mouvement, et selon le principe de précaution B2B en cas de cycle irrégulier ou de doute sur la rotation, un besoin de réapprovisionnement est détecté pour éviter une rupture de stock prolongée sur cette référence. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 (2023-2024) montre une constance absolue avec des commandes unitaires (1u). Conformément à la règle sur les rotations très faibles, la quantité maintenue est de 1 unité, correspondant à la médiane historique.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 186 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande à la mi-juillet l'année dernière. Nous sommes actuellement le 6 août, soit au-delà de la date anniversaire de la dernière commande connue. En application du principe de précaution B2B et face à l'absence de données récentes, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique complet (N-1) est d'une régularité absolue avec des commandes unitaires (1u). La médiane et la constante historique étant de 1, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 165 tokens
- **Total**: 1,071 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-04 06:30:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-18 12:43:13: 1u
- 2024-04-05 08:48:25: 1u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-18 12:43:13: 1u
- 2024-04-05 08:48:25: 1u
- 2023-10-10 06:20:43: 1u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-18 12:43:13: 1u
- 2024-04-05 08:48:25: 1u
- 2023-10-10 06:20:43: 1u

**Quantite Mediane (fallback)**: 7u
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

*Rapport généré automatiquement le 2025-12-30T14:19:31.217Z*
