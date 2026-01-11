# Rapport Backtest - Client DLL AD LOVENJOEL WVB

## Contexte

- **Client** : DLL AD LOVENJOEL WVB (ID: 38816)
- **Commande réelle** : S36606
- **Date commande** : 2025-05-08 08:28:48
- **Date cutoff système** : 2025-05-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 13,988 input + 2,419 output = 16,407 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 15 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 57.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit 55 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence de cycle établi, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : Estimation de la quantité. La seule donnée historique disponible est de 1 unité. Conformément à la règle sur les rotations faibles et l'absence d'historique complexe, la quantité est maintenue à 1 unité (médiane de l'historique récent).

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 167 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>2. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13 mars 2025, soit 55 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 167 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>3. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13 mars 2025, soit 55 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, l'horizon de prévision atteint 85 jours sans commande. Bien que l'historique soit limité à une seule unité, l'absence de commande sur une période aussi longue pour un produit de type tartinade bio suggère un risque de rupture imminent ou un besoin de renouvellement de stock par précaution. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien de la médiane historique, la quantité recommandée est de 1 unité pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 189 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit 55 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation, bien que peu documenté, dépasse largement le délai de précaution habituel. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane des commandes récentes, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 175 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>5. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 13 mars 2025, soit 55 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande récente, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 124 tokens
- **Total**: 1,002 tokens



</details>


<details>
<summary><strong>6. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit 55 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré compte tenu de l'absence d'historique plus large permettant de définir un cycle précis. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 167 tokens
- **Total**: 1,040 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:24:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:24:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:24:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:24:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:24:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:24:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Predicted 2u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Predicted 2u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Predicted 1u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:29:24.176Z*
