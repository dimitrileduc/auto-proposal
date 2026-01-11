# Rapport Backtest - Client Der grüne Schirm

## Contexte

- **Client** : Der grüne Schirm (ID: 24533)
- **Commande réelle** : S38999
- **Date commande** : 2025-09-05 13:54:52
- **Date cutoff système** : 2025-09-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 10,703 input + 1,821 output = 12,524 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 12 produits prédits, 6 corrects |
| **Rappel** | 50.0% | 12 produits réels, 6 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 29.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0013] MF Olives Vertes 500g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [MF0013] MF Olives Vertes 500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 avril 2025, soit plus de 120 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai écoulé dépasse largement les cycles observés précédemment (environ 5-6 mois). Un besoin est donc probable pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) montre une constance absolue à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 170 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (Détection du besoin) : La dernière commande remonte au 30 avril 2025, soit plus de 120 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés précédemment. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 (Estimation quantité) : La dernière commande était de 3 unités. L'historique N-1 montre des volumes faibles (1-2u). En suivant la règle de la médiane et de la stabilité sur les rotations faibles, la quantité de 3 unités est retenue pour assurer la disponibilité sans surstockage excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 174 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 4u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 avril 2025, soit plus de 120 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement tout cycle de rotation standard. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. La commande la plus récente (4u) montre une augmentation par rapport à l'année précédente (1u). En suivant la règle de la médiane sur l'historique récent et le maintien de la quantité si elle est régulière ou unique récemment, la quantité de 4 unités est retenue pour assurer la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 174 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>4. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 30/04/2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande fin octobre (30/10/2023). En application du principe de précaution B2B et face à un cycle irrégulier, un besoin est identifié pour couvrir l'horizon des 30 prochains jours et éviter une rupture sur un produit à rotation lente. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche 1u et l'historique N-1 affiche 2u. Conformément à la règle de privilégier la quantité la plus basse en cas de doute et de respecter la tendance (dernière commande à 1u), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 202 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>5. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 avril 2025, soit plus de 120 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, le cycle moyen étant largement dépassé. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 1u. Les commandes de l'année précédente étaient de 2u. Conformément à la règle de privilégier la quantité la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 156 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à plus de 4 mois (127 jours), ce qui indique une rotation très faible ou irrégulière. Selon le principe de précaution B2B, en cas de cycle difficile à déterminer ou de doute sur la rotation, il convient de prévoir un réapprovisionnement pour éviter une rupture prolongée. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité est fixée à 1 unité (médiane de l'historique récent) pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 122 tokens
- **Total**: 997 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [MF0013] MF Olives Vertes 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-30 13:07:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 11:13:20: 1u
- 2023-10-30 14:58:05: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-30 13:07:58: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 11:13:20: 2u
- 2023-10-30 14:58:05: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-30 13:07:58: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 11:13:20: 1u
- 2023-10-30 14:58:05: 1u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-30 13:07:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 11:13:20: 2u
- 2023-10-30 14:58:05: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-30 13:07:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 11:13:20: 2u
- 2023-10-30 14:58:05: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-30 13:07:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Predicted 1u but not ordered |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Predicted 1u but not ordered |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [fsv17] Mélange de noix bio vrac 2,75kg | 1 | Predicted 1u but not ordered |
| [JF066] FIL MOUTARDE 300G BOCAL | 1 | Predicted 1u but not ordered |


---

## False Negatives (6)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Never ordered in previous analysis window (no history) |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Never ordered in previous analysis window (no history) |
| [MF0012] MF Olives Mix 500g | 1 | Never ordered in previous analysis window (no history) |
| [MF0047] MF Mayonnaise 250ml | 1 | Never ordered in previous analysis window (no history) |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:19:39.757Z*
