# Rapport Backtest - Client L'association Vannieuwenhuyse - Wackers

## Contexte

- **Client** : L'association Vannieuwenhuyse - Wackers (ID: 34735)
- **Commande réelle** : S40224
- **Date commande** : 2025-11-14 12:45:29
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 14,145 input + 2,484 output = 16,629 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 88.9% | 9 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 94.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [RF003] REFIELD Maïs 500G  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [RF003] REFIELD Maïs 500G </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 69 jours. L'historique N-1 montre une commande le 07/10/2024. Bien que le cycle soit lent, le délai depuis la dernière commande dépasse largement l'intervalle observé l'année précédente. Par principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. On maintient cette quantité pour ce produit à rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 883 tokens
- **Output**: 168 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>2. [LV154] LV Vinaigrette Miel et moutarde 250 ml bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/09/2025, soit 69 jours. Bien que la rotation soit très faible, l'historique de l'année précédente montre une commande à la mi-novembre (16/11/2023). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (seuil de réapprovisionnement), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane constante de l'historique récent et passé pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 142 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 69 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle suggéré par l'historique N-1 (octobre). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité stricte à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 176 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 69 jours (05/09/2025). Bien que l'historique soit limité à une seule unité, le délai écoulé suggère un besoin de réapprovisionnement imminent pour couvrir les 30 prochains jours (seuil de précaution B2B). En l'absence de cycle établi, le principe de précaution s'applique. La quantité retenue correspond à la commande historique unique (1u), conformément à la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 116 tokens
- **Total**: 988 tokens



</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 69 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la même période (novembre 2023) et le délai actuel dépasse largement les cycles habituels. Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais constante, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des commandes de 1u ou 2u. Conformément à la règle de prudence pour les faibles rotations et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 179 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 05/09/2025, soit 69 jours. Bien que le cycle historique soit long et irrégulier (commandes en octobre 2024 et novembre 2023), nous entrons dans la période anniversaire des commandes précédentes (novembre). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une stabilité absolue avec des commandes unitaires (1u). La médiane et la constante étant de 1, la quantité recommandée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 188 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 05/09/2025, soit 69 jours. Bien que l'historique soit à rotation très faible, la comparaison avec l'historique N-1 (commandes en octobre 2024 et novembre 2023) indique que nous sommes dans la fenêtre de réapprovisionnement annuelle. Le délai depuis la dernière commande dépasse largement le cycle habituel constaté l'an dernier, créant un risque de rupture pour la période actuelle. ÉTAPE 2 : L'historique est constant avec des commandes unitaires (1u). Conformément à la règle sur les rotations faibles, la médiane de 1u est maintenue pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 175 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>8. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 05/09/2025, soit 69 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la même période (octobre/novembre). Le cycle est irrégulier, ce qui impose l'application du principe de précaution B2B pour éviter une rupture sur un produit à faible rotation. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des commandes de 1u. La médiane des commandes est de 1u. Conformément aux règles sur les rotations faibles (1-2u), on maintient la quantité minimale de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 177 tokens
- **Total**: 1,085 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [RF003] REFIELD Maïs 500G </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:30:50: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV154] LV Vinaigrette Miel et moutarde 250 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-11-16 07:19:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:30:50: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:30:50: 1u
- 2023-11-16 07:19:34: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:30:50: 1u
- 2023-11-16 07:19:34: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:30:50: 1u
- 2023-11-16 07:19:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 11:54:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:30:50: 1u
- 2023-11-16 07:19:34: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:02.371Z*
