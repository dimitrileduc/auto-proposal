# Rapport Backtest - Client CORNU magasin

## Contexte

- **Client** : CORNU magasin (ID: 60273)
- **Commande réelle** : S39787
- **Date commande** : 2025-10-21 07:07:54
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 28
- **Tokens**: 24,543 input + 3,793 output = 28,336 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 43.8% | 16 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 60.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.29 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 5 | 6 | 1.0 | 16.7% | partial | Non | Non | LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande (1u) remonte au 16 septembre, soit 34 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le cycle est dépassé ou en phase critique. En l'absence d'historique long permettant de définir une rotation précise, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : Estimation de la quantité. L'historique récent ne montre qu'une seule commande de 1u. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la médiane de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 155 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 76 jours (entre juillet et septembre). Au 20 octobre, 34 jours se sont écoulés depuis la dernière commande. Bien que nous ne soyons pas encore au terme du cycle théorique, l'intervalle de réapprovisionnement de 30 jours nous place dans une zone de risque de rupture avant la prochaine fenêtre de commande. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 151 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle observé entre les deux dernières commandes est de 42 jours. La dernière commande date du 16 septembre, soit il y a 34 jours. Ce délai représente 81% du cycle moyen, ce qui dépasse le seuil de risque de 70%. Un besoin de réapprovisionnement est donc détecté pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une consommation constante et faible de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, la quantité de 1 unité est maintenue pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 155 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>4. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 1u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 35 à 45 jours (intervalle moyen de 38 jours). La dernière commande datant du 16 septembre (il y a 34 jours), nous avons dépassé 70% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). Conformément à la règle de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 5 unités, correspondant à la médiane des commandes récentes (5, 6, 5) et à la valeur la plus basse en cas de doute, afin d'éviter le surstockage tout en maintenant la rotation habituelle.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 173 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>5. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande régulier d'environ 35 à 42 jours. La dernière commande remonte au 16 septembre, soit 34 jours avant la date actuelle. Le seuil de réapprovisionnement étant de 30 jours, le risque de rupture est imminent car nous avons déjà atteint la durée habituelle du cycle. En suivant le principe de précaution B2B et la règle de la médiane sur les quantités constantes (2u à chaque occurrence), une commande de 2 unités est nécessaire pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 133 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>6. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 34 et 42 jours. Depuis la dernière commande du 16 septembre, 34 jours se sont écoulés. Nous atteignons le cycle moyen alors que le seuil de réapprovisionnement est de 30 jours, ce qui indique un risque de rupture imminent. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes (1, 2, 1) et à la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 145 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>7. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 40 jours (42 jours entre juillet et août, 42 jours entre août et septembre). La dernière commande datant du 16 septembre, soit il y a 34 jours, nous avons dépassé 70% du cycle habituel. Un risque de rupture est donc identifié dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de la médiane sur les quantités récentes (1u, 2u, 1u), la quantité retenue est de 1 unité, privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 161 tokens
- **Total**: 1,067 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:34:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:34:46: 1u
- 2025-07-02 07:34:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:34:46: 1u
- 2025-08-05 12:51:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:34:46: 5u
- 2025-08-05 12:51:26: 6u
- 2025-07-02 07:34:53: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>5. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:34:46: 2u
- 2025-08-05 12:51:26: 2u
- 2025-07-02 07:34:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:34:46: 1u
- 2025-08-05 12:51:26: 2u
- 2025-07-02 07:34:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:34:46: 1u
- 2025-08-05 12:51:26: 2u
- 2025-07-02 07:34:53: 1u

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
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | Predicted 2u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | Predicted 2u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Predicted 1u but not ordered |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |
| [MF0012] MF Olives Mix 500g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:19.269Z*
