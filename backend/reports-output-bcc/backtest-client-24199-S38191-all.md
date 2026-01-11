# Rapport Backtest - Client AUX DELICES D'EMBOURG

## Contexte

- **Client** : AUX DELICES D'EMBOURG (ID: 24199)
- **Commande réelle** : S38191
- **Date commande** : 2025-07-23 07:43:47
- **Date cutoff système** : 2025-07-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 9,621 input + 1,606 output = 11,227 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 36.4% | 11 produits prédits, 4 corrects |
| **Rappel** | 26.7% | 15 produits réels, 4 détectés |
| **F1-Score** | 30.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit plus de 130 jours. Bien que la rotation soit extrêmement faible, l'absence de commande sur une période aussi longue pour un produit de type boisson (thé vert) suggère un risque de rupture ou un besoin de renouvellement de stock imminent. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est préconisée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 882 tokens
- **Output**: 177 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>2. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 13 mars 2025, soit plus de 130 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande de 1 unité est préconisée. La quantité est fixée à 1, correspondant à la médiane et à la valeur la plus basse de l'historique récent pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 142 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>3. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 13 mars 2025, soit plus de 130 jours sans activité. Bien que le cycle soit difficile à déterminer en l'absence d'historique récurrent, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si le produit est toujours au catalogue. La quantité retenue correspond à la dernière commande connue (2 unités), respectant la règle de maintien pour les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 109 tokens
- **Total**: 986 tokens



</details>


<details>
<summary><strong>4. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 13 mars 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur un produit actif, le délai depuis la dernière commande dépassant largement tout cycle raisonnable. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 149 tokens
- **Total**: 1,027 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:02:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:02:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:02:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:02:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [fsv03] Noisette nature bio vrac 2,8kg  | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 2 | Predicted 2u but not ordered |
| [LV189] LV Tartinade Houmous Type 380g | 1 | Predicted 1u but not ordered |


---

## False Negatives (11)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0061] MF Compote | 1 | Never ordered in previous analysis window (no history) |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Never ordered in previous analysis window (no history) |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Never ordered in previous analysis window (no history) |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Never ordered in previous analysis window (no history) |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Never ordered in previous analysis window (no history) |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 1 | Never ordered in previous analysis window (no history) |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Never ordered in previous analysis window (no history) |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Never ordered in previous analysis window (no history) |
| [LV040] LV Caprons apéritifs 240g | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 4 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 24 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:24:49.607Z*
