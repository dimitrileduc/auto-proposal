# Rapport Backtest - Client D’ici Champion

## Contexte

- **Client** : D’ici Champion (ID: 73989)
- **Commande réelle** : S39822
- **Date commande** : 2025-10-23 11:51:49
- **Date cutoff système** : 2025-10-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,248 input + 2,052 output = 14,300 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 78.6% | 14 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 88.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 78.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 147.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 71.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | 2 | 3.0 | 150.0% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 6 | 1 | 5.0 | 500.0% | partial | Non | Non | LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 5 | 1 | 4.0 | 400.0% | partial | Non | Non | LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 5 | 1 | 4.0 | 400.0% | partial | Non | Non | LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 5 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 5u vs Médiane: 5u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 2u
- **Erreur LLM**: 3u (150.0%)
- **Erreur Mediane**: 3u (150.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 septembre, soit 42 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 5 unités, correspondant à la valeur unique observée dans l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 134 tokens
- **Total**: 1,009 tokens



</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 septembre 2025, soit 42 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le délai écoulé dépasse largement la fenêtre de sécurité habituelle pour un produit de ce type. En l'absence d'un historique complet pour établir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. La quantité retenue est de 4 unités, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 141 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 10 septembre, soit 42 jours. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : En l'absence d'historique long, la quantité est basée sur la dernière commande connue (3 unités) afin de maintenir le stock sur ce produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 141 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>4. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 1u
- **Erreur LLM**: 5u (500.0%)
- **Erreur Mediane**: 5u (500.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 septembre 2025, soit 42 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence de cycle établi, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de multiples points de données pour calculer une médiane, la quantité de la commande précédente (6 unités) est reconduite pour maintenir le stock sur ce produit premium bio à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 162 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>5. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 5u vs Médiane: 5u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 1u
- **Erreur LLM**: 4u (400.0%)
- **Erreur Mediane**: 4u (400.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 10 septembre, soit 42 jours avant la date actuelle. En l'absence d'un historique long, le cycle est considéré comme incertain. Selon le principe de précaution B2B, un délai de 42 jours combiné à un seuil de réapprovisionnement de 30 jours présente un risque de rupture imminent. ÉTAPE 2 : L'historique récent montre une commande unique de 5 unités. En suivant la règle de maintien des quantités pour les rotations régulières ou uniques sans tendance inverse, la quantité retenue est la médiane de l'historique disponible, soit 5 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 151 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>6. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 5u vs Médiane: 5u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 1u
- **Erreur LLM**: 4u (400.0%)
- **Erreur Mediane**: 4u (400.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 septembre, soit 42 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré si l'on considère un cycle de rotation standard pour ce type de produit. En l'absence d'historique long ou de données N-1, le principe de précaution B2B s'applique. La quantité retenue est de 5 unités, correspondant strictement au volume de la dernière commande (médiane sur historique récent), afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 136 tokens
- **Total**: 1,011 tokens



</details>


<details>
<summary><strong>7. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 6u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 septembre 2025, soit 42 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré, d'autant plus qu'aucun cycle historique n'est établi pour infirmer ce besoin. En application du principe de précaution B2B et face à l'absence d'historique long, la commande est déclenchée. La quantité retenue est de 6 unités, correspondant à la valeur de la dernière commande connue (médiane sur échantillon unique), ce qui permet de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 151 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : La dernière commande date du 10 septembre, soit il y a 42 jours. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : En l'absence d'historique long ou de saisonnalité N-1, la quantité est basée sur la dernière commande connue (3 unités), ce qui correspond à la médiane de l'historique récent disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 153 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>9. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 10 septembre, soit 42 jours. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 (QUANTITÉ) : En suivant la règle de maintien des rotations régulières et faibles, la quantité de la dernière commande (3 unités) est reconduite comme valeur de référence pour couvrir le besoin sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 160 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>10. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 5u vs Médiane: 5u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 septembre 2025, soit 42 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 5 unités, correspondant à la valeur unique observée dans l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 139 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>11. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande date du 10 septembre, soit il y a 42 jours. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la valeur unique observée dans l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 132 tokens
- **Total**: 1,009 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>11. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:18:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 10 | Predicted 10u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 7 | Predicted 7u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 6 | Predicted 6u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:25:09.482Z*
