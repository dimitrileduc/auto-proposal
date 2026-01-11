# Rapport Backtest - Client CARREFOUR BELGIUM SA, CARREFOUR MARKET BOORTMEERBEEK

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CARREFOUR MARKET BOORTMEERBEEK (ID: 24180)
- **Commande réelle** : S39533
- **Date commande** : 2025-10-03 06:21:45
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 18,425 input + 3,462 output = 21,887 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 90.0% | 20 produits prédits, 18 corrects |
| **Rappel** | 100.0% | 18 produits réels, 18 détectés |
| **F1-Score** | 94.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 69.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 69.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 61.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 12 | Avec erreur |

---

## True Positives (18)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (18 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ 30 à 60 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes très faibles (1, 2 ou 3 unités). La médiane des commandes est de 1,5 unité. Conformément à la règle sur les rotations faibles (1-2u) et la consigne de choisir la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 196 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 60 jours entre mai et juillet 2024). Un besoin est probable pour reconstituer le stock de présentation. Conformément aux règles pour les rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la commande la plus récente et à la valeur basse de l'historique.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 142 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que la rotation soit faible, l'historique de l'année précédente montre une activité régulière entre avril et août. Le délai écoulé dépasse largement le cycle habituel, créant une incertitude sur le niveau de stock actuel. Par principe de précaution B2B, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent est très limité (1u), mais les commandes N-1 sur la période comparable affichaient des volumes entre 2u et 5u. La médiane historique globale se situe autour de 2u-3u. En suivant la règle de choisir la valeur la plus basse en cas de doute pour ne pas surstocker un produit à rotation lente, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 213 tokens
- **Total**: 1,153 tokens



</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 - DÉTECTION DU BESOIN : La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique de l'année précédente montre des besoins réguliers entre avril et juillet. Le délai écoulé depuis la dernière unité vendue dépasse largement les cycles habituels, créant un risque de rupture ou un besoin de renouvellement de stock imminent. Par principe de précaution B2B, un réapprovisionnement est nécessaire. ÉTAPE 2 - ESTIMATION QUANTITÉ : L'historique N-1 montre une constante de 2 unités par commande. La commande la plus récente était de 1 unité. En suivant la règle de la médiane et en observant la stabilité historique (2u), la quantité retenue est de 2 unités pour maintenir le stock fond de rayon sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 202 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 22 mai 2025 (soit plus de 130 jours), ce qui dépasse largement le cycle habituel observé l'année précédente (environ 45-60 jours). En application du principe de précaution B2B, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. Pour la quantité, bien que la dernière commande isolée soit de 1u, l'historique N-1 sur la même période et la médiane des commandes significatives s'établit à 3u. Conformément aux règles de gestion, nous retenons cette médiane historique de 3u pour reconstituer un stock opérationnel standard.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 170 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60-70 jours). En application du principe de précaution B2B et face à l'incertitude du cycle actuel, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique montre des volumes faibles (2u, 4u, 5u). La commande la plus récente est de 2u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur les produits à faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 201 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que l'historique récent soit faible, l'analyse de l'année précédente (N-1) montre une activité sur la période estivale et automnale (août). Le cycle de commande est irrégulier et très espacé. En application du principe de précaution B2B (si doute sur le cycle ou rotation faible), une commande est nécessaire pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et à la dernière quantité commandée, afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 152 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>8. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 30 à 60 jours). Un besoin est donc probable pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande de 1u. L'historique N-1 oscille entre 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 185 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>9. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 22 mai 2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles habituels observés l'année précédente (environ 45-60 jours). Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le stock actuel est présumé épuisé. Pour la quantité, l'historique N-1 montre des commandes de 1u et 2u, tandis que la commande la plus récente était de 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation lente, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 183 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>10. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le cycle de commande est difficile à déterminer avec précision. Un risque de rupture existe sur l'horizon de 30 jours si un besoin ponctuel survient. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 2u. L'historique N-1 à la même période (août) montre 1u. En suivant la règle de maintien des quantités pour les rotations faibles (1-2u) et en se basant sur la médiane des commandes passées (2u, 1u, 1u, 2u), la quantité de 2u est retenue pour couvrir le besoin sans créer de surstock excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 212 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre une rotation lente et irrégulière. La dernière commande remonte au 22 mai 2025 (soit plus de 130 jours), ce qui dépasse largement les cycles observés l'année précédente (environ 45 à 60 jours entre les commandes de printemps/été). Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande de 2 unités avait eu lieu en août N-1. En appliquant la règle de la médiane sur l'ensemble de l'historique (1, 1, 2, 4, 4), la médiane est de 2 unités. On retient cette quantité pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 185 tokens
- **Total**: 1,124 tokens



</details>


<details>
<summary><strong>12. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles observés historiquement (environ 3 à 4 mois). En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 1u. L'historique N-1 montre des volumes de 1u et 4u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute ou de rotation faible (1-2u), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 192 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>13. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 mai 2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (environ 40 à 60 jours). Bien que la rotation soit irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que nous entrons dans une période où des commandes avaient eu lieu l'an dernier (août). Pour la quantité, la médiane des commandes historiques (hors pic exceptionnel de 10u) se situe à 4 unités. Conformément à la règle de prudence sur les faibles rotations, nous maintenons ce volume de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 163 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>14. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que l'historique récent soit faible, l'historique N-1 montre une activité sur la période août-octobre. En application du principe de précaution B2B (doute sur le cycle = prévoir commande) et pour éviter une rupture prolongée sur un produit bio à rotation lente, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. La médiane des commandes historiques (2, 2, 4, 4, 10) est de 4 unités. Conformément à la règle de maintien des quantités sur rotation régulière et utilisation de la médiane pour écarter les pics (10u), la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 191 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>15. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 mai 2025, soit plus de 130 jours. Bien que l'historique récent soit limité à une seule commande, l'analyse de l'historique N-1 montre une activité sur la période estivale et automnale (août). Le délai depuis la dernière commande dépasse largement le cycle habituel suggéré par l'historique, ce qui indique un besoin de réapprovisionnement par précaution pour éviter une rupture prolongée. La quantité retenue est de 4 unités, correspondant à la médiane des commandes passées (4u en mai 2025, 4u en août 2024 et 4u en mai 2024), en ignorant la valeur basse isolée de 2u pour maintenir le stock standard.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 181 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>16. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 mai 2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (environ 40 à 60 jours). Bien que la rotation soit lente, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le seuil de 30 jours est largement atteint. La quantité retenue est de 4 unités, correspondant à la médiane des commandes récentes et historiques (1, 2, 4, 5), en privilégiant la stabilité du dernier volume commandé.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 147 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>17. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'y a aucune commande récente enregistrée, mais l'historique N-1 montre une commande en mai. En l'absence de données récentes pour établir un cycle de rotation précis, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur un produit référencé. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique récent, la prévision se base sur la commande de l'année précédente à la même période (4 unités). Cette quantité est maintenue pour assurer une présence minimale en stock sans risque de surstockage majeur.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 149 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>18. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou de cycle indéterminé, une commande est nécessaire pour initier le stock ou répondre à un besoin potentiel. La quantité minimale de 1 unité est retenue conformément à la règle de rotation faible/incertaine pour éviter le surstockage tout en prévenant une rupture totale.

**Tokens utilises pour cette prediction:**
- **Input**: 863 tokens
- **Output**: 107 tokens
- **Total**: 970 tokens



</details>




### Donnees d'Input LLM (18 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 06:19:26: 2u
- 2024-05-14 07:18:52: 3u
- 2024-04-05 07:47:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 06:19:26: 2u
- 2024-05-14 07:18:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:57:57: 2u
- 2024-07-10 06:19:26: 3u
- 2024-05-14 07:18:52: 5u
- 2024-04-05 07:47:57: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 06:19:26: 2u
- 2024-05-14 07:18:52: 2u
- 2024-04-05 07:47:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:57:57: 5u
- 2024-07-10 06:19:26: 3u
- 2024-05-14 07:18:52: 3u
- 2024-04-05 07:47:57: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:57:57: 2u
- 2024-07-10 06:19:26: 4u
- 2024-05-14 07:18:52: 5u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:57:57: 4u
- 2024-07-10 06:19:26: 1u
- 2024-05-14 07:18:52: 2u
- 2024-04-05 07:47:57: 2u
- 2024-04-05 07:47:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 06:19:26: 2u
- 2024-05-14 07:18:52: 2u
- 2024-04-05 07:47:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:57:57: 1u
- 2024-07-10 06:19:26: 1u
- 2024-05-14 07:18:52: 2u
- 2024-04-05 07:47:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:57:57: 1u
- 2024-07-10 06:19:26: 1u
- 2024-05-14 07:18:52: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:57:57: 2u
- 2024-07-10 06:19:26: 1u
- 2024-05-14 07:18:52: 4u
- 2024-04-05 07:47:57: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 06:19:26: 4u
- 2024-04-05 07:47:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:57:57: 4u
- 2024-07-10 06:19:26: 1u
- 2024-05-14 07:18:52: 10u
- 2024-04-05 07:47:57: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:57:57: 4u
- 2024-07-10 06:19:26: 2u
- 2024-05-14 07:18:52: 10u
- 2024-04-05 07:47:57: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:57:57: 4u
- 2024-07-10 06:19:26: 2u
- 2024-05-14 07:18:52: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:36:14: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 06:19:26: 1u
- 2024-05-14 07:18:52: 5u
- 2024-04-05 07:47:57: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-14 07:18:52: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF006] JF MAYONNAISE OEUFS 280ML DTO | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:53.539Z*
