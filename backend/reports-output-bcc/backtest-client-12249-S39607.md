# Rapport Backtest - Client Haus Ternell V.o.G

## Contexte

- **Client** : Haus Ternell V.o.G (ID: 12249)
- **Commande réelle** : S39607
- **Date commande** : 2025-10-08 06:49:40
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 8,948 input + 1,662 output = 10,610 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 8 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.88 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 56.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 7.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0029] MF Tarti Datte chili 250g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/05/2025, soit exactement 5 mois (153 jours). Bien que la rotation soit extrêmement faible, le principe de précaution B2B et l'absence d'historique sur l'année précédente imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée si un cycle saisonnier ou ponctuel redémarre. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 168 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/05/2025, soit 153 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une commande à la même période (10/10/2023). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 oscille entre 1u et 2u. La médiane des commandes est de 1.5u. En suivant la règle de maintien des quantités pour les rotations faibles et le principe de précaution, la quantité de 2u est retenue pour éviter une rupture sur ce produit à faible volume.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 196 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>3. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/05/2025, soit exactement 5 mois (153 jours). Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue pour un produit actif crée une incertitude sur l'état du stock. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1u sans l'augmenter. La médiane des commandes récentes est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 179 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/05/2025, soit 153 jours sans activité. Bien que le cycle soit irrégulier, l'historique N-1 montre une commande à la même période (10/10/2023). En application du principe de précaution B2B et pour éviter une rupture sur un besoin saisonnier potentiel, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (2u en 2025, 2u en 2023).

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 133 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse montre une rotation très faible et irrégulière. La dernière commande remonte à 5 mois (mai 2025). Cependant, l'historique N-1 indique une commande à la même période l'année dernière (octobre 2023). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour couvrir les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et à la quantité de la dernière commande ferme, afin d'éviter une rupture sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 141 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>6. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/05/2025, soit 153 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la même période (23/09/2024). Le délai écoulé dépasse largement le cycle habituel, créant un risque de rupture de stock pour ce produit à rotation lente. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) est constant avec des commandes unitaires de 1u. En suivant la règle de maintien pour les rotations faibles (1-2u), la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 165 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>7. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/05/2025, soit 153 jours. L'historique montre une rotation très faible et irrégulière (environ tous les 4 à 5 mois). Bien que le cycle soit long, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement la fréquence habituelle constatée en 2024 (mai à septembre). Un besoin de réapprovisionnement est probable pour maintenir la disponibilité. ÉTAPE 2 : Estimation de la quantité. L'historique est constant sur une unité (médiane = 1). Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 180 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>8. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 07/05/2025, soit 153 jours sans activité. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles historiques observés (environ 120 jours entre mai et septembre 2024). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 135 tokens
- **Total**: 1,042 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:09:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:09:44: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:37:01: 1u
- 2024-05-28 08:49:08: 1u
- 2023-10-10 11:21:44: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:09:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:09:44: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:37:01: 1u
- 2023-10-10 11:21:44: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:09:44: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:37:01: 1u
- 2024-05-28 08:49:08: 1u
- 2023-10-10 11:21:44: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:09:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:37:01: 1u
- 2024-05-28 08:49:08: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:09:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:37:01: 1u
- 2024-05-28 08:49:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:09:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:37:01: 1u
- 2024-05-28 08:49:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:00.490Z*
