# Rapport Backtest - Client Ferme de la Yauge

## Contexte

- **Client** : Ferme de la Yauge (ID: 23687)
- **Commande réelle** : S38167
- **Date commande** : 2025-07-22 07:46:08
- **Date cutoff système** : 2025-07-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,849 input + 2,126 output = 13,975 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 80.0% | 10 produits réels, 8 détectés |
| **F1-Score** | 69.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV145] LV Sauce Tartare 200 ml  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV146] LV Sauce Aïoli 200 ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 3 à 4 mois). La dernière commande remonte au 26 mai 2025, soit 56 jours avant la date actuelle. Bien que le cycle soit irrégulier, l'historique de l'année précédente montre une commande en juin, suggérant un besoin imminent pour couvrir la période estivale. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et au volume maximum observé lors des pics de consommation précédents.

**Tokens utilises pour cette prediction:**
- **Input**: 944 tokens
- **Output**: 154 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>2. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai 2025, soit 56 jours. Bien que l'historique soit irrégulier, le délai actuel dépasse largement les cycles observés précédemment (environ 4 mois entre les commandes de 2023/2024). En application du principe de précaution B2B et face à un cycle difficile à déterminer avec précision, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique complet (récent et N-1) montre une stabilité absolue à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles, la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 178 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>3. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai 2025, soit 56 jours. Bien que la rotation soit très faible, le délai écoulé suggère un besoin de réapprovisionnement imminent pour maintenir le stock en rayon, surtout face à l'incertitude du cycle. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constante de 1 unité par commande. En respectant la règle de maintien des rotations faibles (1-2u) et la médiane historique, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 883 tokens
- **Output**: 157 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 26 mai 2025, soit 56 jours avant la date actuelle. L'historique montre un cycle de rotation lent mais régulier (environ tous les 3 à 4 mois). Bien que le cycle moyen ne soit pas encore totalement atteint, le principe de précaution B2B s'applique car nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de réapprovisionnement). Concernant la quantité, l'historique N-1 et les commandes précédentes affichent une constante de 2 unités, tandis que la dernière commande était de 3 unités. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute sur une rotation faible, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 181 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 26 mai 2025, soit 56 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais une récurrence annuelle sur la période de juin/juillet (2u en juin 2024). En appliquant le principe de précaution B2B face à un cycle incertain et un risque de rupture potentiel dans les 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (excluant le pic ponctuel de 3u) et à la consommation observée l'année précédente à la même période.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 154 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>6. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai 2025, soit 56 jours. L'historique montre un cycle irrégulier (environ 84 jours entre les deux dernières commandes). Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de risque (56 + 30 = 86 jours), ce qui correspond à la périodicité observée. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En cas de doute ou de rotation faible, la règle impose de choisir la valeur la plus basse pour éviter le surstock. La quantité retenue est donc de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 186 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 26 mai 2025, soit 56 jours avant la date actuelle. Bien que le cycle soit irrégulier, l'historique N-1 montre une commande en juin, suggérant un besoin durant la période estivale. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est jugé probable par précaution B2B. ÉTAPE 2 : L'historique récent montre des commandes de 1u et 3u, tandis que l'historique N-1 est stable à 2u. La médiane globale et la prudence face à une rotation faible orientent vers une quantité de 2 unités pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 169 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>8. [LV157] LV Ketchup aux tomates 263 ml bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et sporadique (1 unité en mars 2025, 1 unité en février 2024). Bien que le cycle soit irrégulier et que la dernière commande remonte à plus de 140 jours, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur un produit bio à longue conservation. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane historique stricte.

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 126 tokens
- **Total**: 1,010 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 06:36:43: 2u
- 2025-03-03 09:41:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:30:03: 2u
- 2024-02-29 09:25:42: 1u
- 2023-10-24 07:10:21: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 06:36:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-29 09:25:42: 1u
- 2023-10-24 07:10:21: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 06:36:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-29 09:25:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 06:36:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:30:03: 2u
- 2024-02-29 09:25:42: 2u
- 2023-10-24 07:10:21: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 06:36:43: 3u
- 2025-03-03 09:41:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:30:03: 2u
- 2024-02-29 09:25:42: 2u
- 2023-10-24 07:10:21: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 06:36:43: 2u
- 2025-03-03 09:41:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-29 09:25:42: 2u
- 2023-10-24 07:10:21: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 06:36:43: 3u
- 2025-03-03 09:41:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:30:03: 2u
- 2024-02-29 09:25:42: 2u
- 2023-10-24 07:10:21: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV157] LV Ketchup aux tomates 263 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-03 09:41:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-29 09:25:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV097] LV Asperges (origine UE)  280 g  | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV147] LV Sauce Cocktail 200 ml | 1 | Never ordered in previous analysis window (no history) |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:15:29.060Z*
