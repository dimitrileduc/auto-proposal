# Rapport Backtest - Client BELICIOUS

## Contexte

- **Client** : BELICIOUS (ID: 33756)
- **Commande réelle** : S39994
- **Date commande** : 2025-10-29 13:48:17
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 30
- **Tokens**: 27,771 input + 4,993 output = 32,764 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 28.6% | 28 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 44.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.63 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 89.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 6 | 4.0 | 66.7% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 8 | 2 | 6.0 | 300.0% | partial | Non | Non | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 6 | 8 | 2.0 | 25.0% | partial | Non | Non | LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [MF0012] MF Olives Mix 500g | 6 | 8 | 2.0 | 25.0% | partial | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 6 | 2 | 4.0 | 200.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 6u
- **Erreur LLM**: 4u (66.7%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 septembre, soit 36 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent si le cycle de consommation est mensuel. En l'absence d'historique étendu, le principe de précaution B2B s'applique pour éviter une rupture de stock. La quantité retenue correspond à la dernière commande connue (2 unités), respectant la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 115 tokens
- **Total**: 990 tokens



</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 8u vs Médiane: 5u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 5u
- **Reel commande**: 2u
- **Erreur LLM**: 6u (300.0%)
- **Erreur Mediane**: 3u (150.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence mensuelle régulière (intervalles de 16, 31 et 31 jours). La dernière commande datant du 22 septembre (soit 36 jours), le seuil de réapprovisionnement de 30 jours est dépassé, confirmant un risque de rupture imminent. Pour la quantité, l'historique récent présente des volumes de 2, 8 et 10 unités. Conformément à la règle de la médiane pour stabiliser le stock sans surestimer, la valeur de 8 unités est retenue, ce qui correspond également au volume commandé à la même période l'année précédente (octobre 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 159 tokens
- **Total**: 1,117 tokens



</details>


<details>
<summary><strong>3. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 6u vs Médiane: 4u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 4u
- **Reel commande**: 8u
- **Erreur LLM**: 2u (25.0%)
- **Erreur Mediane**: 4u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 30 jours entre les commandes récentes (août et septembre). Depuis la dernière commande du 22 septembre 2025, 36 jours se sont écoulés, ce qui dépasse le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture immédiat. Pour la quantité, bien que l'historique récent soit faible (1-3u), l'historique N-1 à la même période (octobre) montre un pic saisonnier important à 12u. En appliquant le principe de précaution B2B tout en évitant la surestimation, on retient la médiane de l'historique global disponible (6u) pour couvrir le besoin sans risque d'excédent excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 189 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>4. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

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
La dernière commande remonte au 22 septembre, soit 36 jours avant la date actuelle. Le cycle moyen constaté est d'environ 30 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. L'historique de l'année précédente montre également une activité soutenue en septembre/octobre (commandes de 10u, 4u et 2u). En appliquant la règle de la médiane sur les commandes récentes (3, 4, 9), la valeur centrale est 4. Conformément au principe de précaution B2B et à la sélection de la médiane pour éviter les pics exceptionnels (9u), une quantité de 4 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,024 tokens
- **Output**: 171 tokens
- **Total**: 1,195 tokens



</details>


<details>
<summary><strong>5. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 30 à 60 jours. La dernière commande remontant au 22 septembre (soit 36 jours avant la date actuelle), nous avons dépassé le seuil de 70% du cycle habituel, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). L'historique de l'année précédente confirme également une activité soutenue en septembre/octobre. Pour la quantité, la médiane des commandes récentes (3, 4, 9) est de 4 unités. Conformément aux règles de gestion B2B privilégiant la médiane pour éviter l'influence des pics isolés, une commande de 4 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,026 tokens
- **Output**: 173 tokens
- **Total**: 1,199 tokens



</details>


<details>
<summary><strong>6. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 22 septembre 2025, soit 36 jours avant la date actuelle (28 octobre). L'historique récent montre un cycle moyen d'environ 30 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent, d'autant plus que l'historique N-1 montre une activité soutenue en septembre/octobre (3 commandes sur cette période). ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 3, 4 et 9 unités. La médiane de l'historique récent est de 4 unités. Bien que la dernière commande ait été de 9u, il s'agit d'un pic par rapport au reste de l'historique (médiane N-1 également autour de 4-6u). En application de la règle de prudence B2B et du choix de la médiane, une quantité de 4 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,027 tokens
- **Output**: 241 tokens
- **Total**: 1,268 tokens



</details>


<details>
<summary><strong>7. [MF0012] MF Olives Mix 500g</strong> - LLM: 6u vs Médiane: 5u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 5u
- **Reel commande**: 8u
- **Erreur LLM**: 2u (25.0%)
- **Erreur Mediane**: 3u (37.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 22/09/2025, soit 36 jours. Bien que l'historique récent soit faible (2 commandes), l'historique N-1 montre une activité soutenue en septembre/octobre (3 commandes en 2024). Le délai depuis la dernière commande dépasse le seuil de 30 jours et correspond à la saisonnalité observée l'an dernier. Le risque de rupture est réel, une commande est nécessaire par précaution. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent (1u, 5u) est trop court pour être représentatif. En se basant sur la période N-1 (octobre 2024), la quantité était de 6u. La médiane historique globale excluant les pics (20u) se situe autour de 8-10u, mais conformément à la règle de prudence et à la tendance basse des deux dernières commandes, la quantité de 6u (valeur N-1 la plus basse pour octobre) est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,006 tokens
- **Output**: 253 tokens
- **Total**: 1,259 tokens



</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 6u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 4u (200.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 06/08/2025, soit 83 jours. L'historique N-1 montre une activité soutenue entre septembre et octobre (5 commandes sur 2 mois), suggérant une saisonnalité ou un besoin de réapprovisionnement imminent pour couvrir la fin d'année. Le délai depuis la dernière commande dépasse largement le cycle habituel observé l'an dernier (environ 15-20 jours). Le risque de rupture est élevé. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent est trop irrégulier (1u et 12u). En se basant sur l'historique N-1 à la même période, les quantités commandées étaient de 2, 5, 6, 4 et 6. La médiane de ces valeurs est de 5. Cependant, en suivant le principe de précaution B2B et en observant les pics à 6u, on retient la valeur stable de 6u pour assurer la disponibilité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 246 tokens
- **Total**: 1,221 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:23:29: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:23:29: 10u
- 2025-08-22 12:20:23: 8u
- 2025-08-06 11:16:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:29:22: 8u
- 2024-09-11 08:44:25: 4u
- 2024-08-22 06:40:04: 6u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:23:29: 3u
- 2025-08-22 12:20:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 12:48:10: 12u
- 2024-09-26 06:23:33: 6u
- 2024-08-22 06:40:04: 6u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>4. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:23:29: 9u
- 2025-08-22 12:20:23: 4u
- 2025-06-20 07:47:01: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:29:22: 2u
- 2024-09-26 06:23:33: 10u
- 2024-09-11 08:44:25: 4u
- 2024-08-22 06:40:04: 6u
- 2024-06-18 12:19:20: 2u
- 2024-04-03 08:22:17: 6u
- 2024-02-29 14:12:46: 6u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:23:29: 9u
- 2025-08-22 12:20:23: 4u
- 2025-06-20 07:47:01: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:29:22: 2u
- 2024-09-26 06:23:33: 10u
- 2024-09-11 08:44:25: 4u
- 2024-08-22 06:40:04: 6u
- 2024-06-18 12:19:20: 2u
- 2024-04-03 08:22:17: 6u
- 2024-02-29 14:12:46: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:23:29: 9u
- 2025-08-22 12:20:23: 4u
- 2025-06-20 07:47:01: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:29:22: 2u
- 2024-09-26 06:23:33: 10u
- 2024-09-11 08:44:25: 4u
- 2024-08-22 06:40:04: 6u
- 2024-06-18 12:19:20: 2u
- 2024-04-03 08:22:17: 6u
- 2024-02-29 14:12:46: 6u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [MF0012] MF Olives Mix 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:23:29: 5u
- 2025-08-22 12:20:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:29:22: 6u
- 2024-09-26 06:23:33: 10u
- 2024-09-11 08:44:25: 6u
- 2024-08-22 06:40:04: 12u
- 2024-06-18 12:19:20: 8u
- 2024-02-29 14:12:46: 20u
- 2024-01-24 10:10:29: 12u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 11:16:16: 1u
- 2025-06-20 07:47:01: 12u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 12:48:10: 2u
- 2024-10-11 06:29:22: 5u
- 2024-09-26 06:23:33: 6u
- 2024-09-11 08:44:25: 4u
- 2024-08-22 06:40:04: 6u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 2u

</details>




---

## False Positives (20)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Predicted 3u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 3 | Predicted 3u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | Predicted 3u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | Predicted 3u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 8 | Predicted 8u but not ordered |
| [MF0014] MF Olives noires 500g | 2 | Predicted 2u but not ordered |
| [MF0013] MF Olives Vertes 500g | 5 | Predicted 5u but not ordered |
| [MF0052] MF Pois chiches  500g | 4 | Predicted 4u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 2 | Predicted 2u but not ordered |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Predicted 2u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 3 | Predicted 3u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 3 | Predicted 3u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 4 | Predicted 4u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 6 | Predicted 6u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:15.756Z*
