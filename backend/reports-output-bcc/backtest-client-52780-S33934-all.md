# Rapport Backtest - Client Carrefour Express Guillemins

## Contexte

- **Client** : Carrefour Express Guillemins (ID: 52780)
- **Commande réelle** : S33934
- **Date commande** : 2025-01-07 07:02:38
- **Date cutoff système** : 2025-01-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,044 input + 970 output = 7,014 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 7 produits prédits, 7 corrects |
| **Rappel** | 77.8% | 9 produits réels, 7 détectés |
| **F1-Score** | 87.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 75.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 81.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 75.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 4 | 3 | 1.0 | 33.3% | partial | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | 3 | 1.0 | 33.3% | partial | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou sur l'année précédente (N-1). En l'absence totale de données sur le cycle de rotation, le principe de précaution B2B s'applique : tout doute sur le besoin impose de prévoir une commande pour éviter une rupture potentielle dès le lancement ou la reprise du produit. ÉTAPE 2 : ESTIMATION QUANTITÉ. Sans historique pour calculer une médiane, la règle des rotations faibles est appliquée. Une quantité minimale de 1 unité est préconisée pour tester la rotation sans générer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 862 tokens
- **Output**: 142 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Aucune donnée historique (récente ou N-1) n'est disponible pour ce produit. En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou d'absence de cycle défini, une commande est nécessaire pour constituer un stock initial ou pallier l'absence de visibilité. La quantité minimale de 1 unité est préconisée pour limiter le risque de surstockage tout en assurant une présence en rayon.

**Tokens utilises pour cette prediction:**
- **Input**: 863 tokens
- **Output**: 106 tokens
- **Total**: 969 tokens



</details>


<details>
<summary><strong>3. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou passé (N-1). En l'absence totale de données sur la rotation, le principe de précaution B2B s'applique pour éviter une rupture potentielle dès le lancement ou la mise en stock. Le doute sur le cycle de commande impose de prévoir une quantité minimale. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de médiane historique, une quantité minimale de 1 unité est préconisée pour assurer une présence en rayon sans risque de surstockage inutile, conformément à la règle sur les rotations faibles ou inconnues.

**Tokens utilises pour cette prediction:**
- **Input**: 863 tokens
- **Output**: 146 tokens
- **Total**: 1,009 tokens



</details>


<details>
<summary><strong>4. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou sur l'année précédente (N-1). En supply chain B2B, l'absence totale de données sur une référence active crée une incertitude critique. Selon le principe de précaution et la règle de détection en cas de doute sur le cycle, une commande doit être prévue pour éviter une rupture potentielle dès le lancement ou la reprise du produit. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique pour calculer une médiane, on applique la règle des rotations très faibles. La quantité minimale de 1 unité est préconisée pour initialiser le stock sans risque de surstockage, conformément à la règle de choisir la valeur la plus basse en cas de doute.

**Tokens utilises pour cette prediction:**
- **Input**: 864 tokens
- **Output**: 179 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>5. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou de cycle indéterminé, une commande est nécessaire pour constituer un stock initial ou tester la rotation. Conformément à la règle des rotations faibles sans historique, la quantité minimale de 1 unité est préconisée pour éviter une rupture immédiate tout en limitant le risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 865 tokens
- **Output**: 108 tokens
- **Total**: 973 tokens



</details>


<details>
<summary><strong>6. [TVF009] TVF TARTINADE BIO POIS CHICHES 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou sur l'année précédente (N-1). En application du principe de précaution B2B, tout doute sur le cycle ou l'absence de données doit conduire à prévoir une commande pour éviter une rupture potentielle ou assurer une mise en stock initiale. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique permettant de calculer une médiane, et conformément à la règle sur les rotations faibles ou inconnues, une quantité minimale de 1 unité est préconisée pour initier le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 865 tokens
- **Output**: 146 tokens
- **Total**: 1,011 tokens



</details>


<details>
<summary><strong>7. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou sur l'année précédente (N-1). En l'absence totale de données sur le cycle de rotation, le principe de précaution B2B s'applique pour éviter une rupture potentielle sur un produit référencé. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique permettant de calculer une médiane, une quantité minimale de 1 unité est préconisée pour tester la rotation ou assurer une présence minimale en rayon, conformément à la règle de ne pas surestimer en cas de doute.

**Tokens utilises pour cette prediction:**
- **Input**: 862 tokens
- **Output**: 143 tokens
- **Total**: 1,005 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [TVF009] TVF TARTINADE BIO POIS CHICHES 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:27:27.412Z*
