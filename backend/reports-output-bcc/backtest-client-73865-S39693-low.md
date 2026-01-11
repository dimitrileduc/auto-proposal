# Rapport Backtest - Client COALLA LOGISTICA S.L.

## Contexte

- **Client** : COALLA LOGISTICA S.L. (ID: 73865)
- **Commande réelle** : S39693
- **Date commande** : 2025-10-13 09:48:12
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,123 input + 996 output = 7,119 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 7 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 83.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 19.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 51.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 6 | 25 | 19.0 | 76.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 10 | 25 | 15.0 | 60.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 50 | 100 | 50.0 | 50.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 25 | 25 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 6 | 20 | 14.0 | 70.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 6u vs Médiane: 6u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 25u
- **Erreur LLM**: 19u (76.0%)
- **Erreur Mediane**: 19u (76.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/09/2025, soit 40 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré selon le cycle de rotation standard B2B. En l'absence d'historique étendu, le principe de précaution s'applique pour éviter la rupture de stock. La quantité retenue est de 6 unités, correspondant à la quantité de la commande la plus récente (médiane sur échantillon unique).

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 126 tokens
- **Total**: 1,001 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 10u vs Médiane: 10u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 25u
- **Erreur LLM**: 15u (60.0%)
- **Erreur Mediane**: 15u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande de 10 unités remonte au 02/09/2025, soit il y a 40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà effectif, car le cycle de rotation pour ce type de produit dépasse généralement le mois. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente une commande unique de 10 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou uniques sans tendance inverse, la quantité retenue est de 10 unités (médiane de l'historique disponible).

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 188 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 50u vs Médiane: 50u (Réel: 100u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 50u
- **Baseline calculee**: 50u
- **Mediane historique**: 50u
- **Reel commande**: 100u
- **Erreur LLM**: 50u (50.0%)
- **Erreur Mediane**: 50u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 50u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/09/2025, soit 40 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré, d'autant plus qu'il n'y a qu'une seule commande récente pour établir un cycle. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un réapprovisionnement est nécessaire. La quantité est fixée à 50 unités, correspondant à la valeur de la dernière commande connue (médiane sur historique unique).

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 141 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 25u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/09/2025, soit 40 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié. La quantité est fixée à 25 unités, correspondant à la valeur unique observée dans l'historique récent (médiane par défaut).

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 139 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>5. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 6u vs Médiane: 6u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 20u
- **Erreur LLM**: 14u (70.0%)
- **Erreur Mediane**: 14u (70.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/09/2025, soit il y a 40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré, d'autant plus qu'il n'y a qu'une seule commande récente permettant d'établir un cycle. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire. La quantité retenue est de 6 unités, correspondant à la quantité de la dernière commande connue (médiane sur historique court).

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 137 tokens
- **Total**: 1,011 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 13:43:26: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 13:43:26: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 13:43:26: 50u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 50u
**Quantite Reelle**: 100u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 13:43:26: 25u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>5. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 13:43:26: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 20u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 25 | Predicted 25u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 10 | Predicted 10u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:25:10.063Z*
