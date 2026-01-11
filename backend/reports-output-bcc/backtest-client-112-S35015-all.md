# Rapport Backtest - Client Houtziplou

## Contexte

- **Client** : Houtziplou (ID: 112)
- **Commande réelle** : S35015
- **Date commande** : 2025-02-24 07:52:45
- **Date cutoff système** : 2025-02-23 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,901 input + 2,305 output = 16,206 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 73.3% | 15 produits prédits, 11 corrects |
| **Rappel** | 57.9% | 19 produits réels, 11 détectés |
| **F1-Score** | 64.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.45 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [CB006] CB Blackcurrant Apple juice 1l | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0014] MF Olives noires 500g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [CB006] CB Blackcurrant Apple juice 1l</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/12/2024, soit plus de 75 jours sans activité. Bien que la rotation soit très faible, l'historique N-1 montre une commande en décembre, et le délai écoulé dépasse largement les cycles habituels. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 128 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>2. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/12/2024, soit plus de 75 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (novembre/février). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 122 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>3. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/12/2024, soit plus de 75 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (8 jours d'intervalle en novembre 2023). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé, conformément à la règle de maintien pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 145 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>4. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 09/12/2024, soit plus de 75 jours. L'historique N-1 montre une commande à la même période (02/02/2024) et un cycle moyen d'environ 45 à 60 jours. Le délai depuis la dernière commande dépasse largement ce cycle, créant un risque de rupture imminent dans l'horizon des 30 jours. En suivant la règle de précaution B2B et en se basant sur la médiane des commandes récentes et historiques (2u), une commande de 2 unités est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 991 tokens
- **Output**: 140 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>5. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 09/12/2024, soit plus de 75 jours. Bien que la rotation soit faible et irrégulière, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60-70 jours entre les commandes de fin d'année). En application du principe de précaution B2B et pour éviter une rupture prolongée, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane du volume de la commande la plus récente, tout en restant prudent par rapport au pic de 4 unités de l'an dernier.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 143 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>6. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 à 70 jours entre les réapprovisionnements. La dernière commande datant du 09/12/2024 (soit 76 jours écoulés), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Bien que l'historique récent soit irrégulier (2u et 4u), l'historique N-1 à la même période (février) indique des volumes de 4u à 5u. En appliquant la règle de la médiane sur les commandes récentes et historiques cohérentes, une quantité de 4 unités est préconisée pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,004 tokens
- **Output**: 173 tokens
- **Total**: 1,177 tokens



</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/12/2024, soit 76 jours. L'historique montre un cycle moyen d'environ 60 à 70 jours entre les commandes (ex: oct-déc 2024, sept-nov 2023). Nous avons dépassé ce cycle, le risque de rupture dans les 30 prochains jours est élevé. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont stables à 2 unités. La médiane historique globale se situe également à 2 unités. En suivant le principe de précaution B2B et la stabilité de la rotation, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 166 tokens
- **Total**: 1,154 tokens



</details>


<details>
<summary><strong>8. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande effectuée il y a 76 jours (9 décembre). Bien que la rotation soit faible, le délai écoulé dépasse largement les intervalles observés précédemment, créant un doute important sur l'état des stocks à l'approche du seuil de 30 jours. En application du principe de précaution B2B, un besoin est détecté. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (2u et 3u) en privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 146 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>9. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/12/2024, soit 76 jours. Bien que la rotation soit lente, l'historique montre des commandes espacées de 2 à 3 mois (ex: oct-déc). À 76 jours d'intervalle, nous entrons dans la fenêtre critique de réapprovisionnement. En application du principe de précaution B2B (doute sur le cycle = prévoir), une commande est nécessaire pour éviter la rupture sur l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité forte à 2 unités (médiane des commandes). On maintient cette quantité habituelle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 180 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>10. [MF0014] MF Olives noires 500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/10/2024, soit plus de 140 jours. L'historique montre une rotation très faible et irrégulière (intervalles de 4 à 5 mois). Étant donné l'absence de commande depuis plus de 4 mois et le principe de précaution B2B, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique est constant avec des commandes unitaires (1u). La médiane des commandes récentes et passées est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 179 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/10/2024, soit plus de 140 jours. Bien que la rotation soit très faible, l'historique N-1 montre des commandes en mai, septembre et novembre. Le délai depuis la dernière commande dépasse largement tout cycle régulier, créant une incertitude sur le niveau de stock actuel. Par principe de précaution B2B et pour couvrir l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes entre 1u et 3u. La médiane des commandes passées est de 2u. Conformément aux règles de rotation faible, on maintient la quantité médiane sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 186 tokens
- **Total**: 1,105 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [CB006] CB Blackcurrant Apple juice 1l</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-09 10:22:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-12 07:27:03: 2u
- 2023-07-06 08:07:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-09 10:22:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-02 07:28:11: 1u
- 2023-11-15 15:12:19: 1u
- 2023-11-07 07:46:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-09 10:22:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-11-15 15:12:19: 1u
- 2023-11-07 07:46:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-09 10:22:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-02 07:28:11: 2u
- 2023-12-12 07:27:03: 1u
- 2023-11-07 07:46:42: 2u
- 2023-09-14 12:01:14: 2u
- 2023-07-06 08:07:34: 4u
- 2023-03-31 14:55:51: 6u
- 2023-02-24 11:52:57: 5u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-09 10:22:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-02 07:28:11: 4u
- 2023-11-07 07:46:42: 2u
- 2023-09-14 12:01:14: 2u
- 2023-05-12 13:32:41: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-09 10:22:05: 4u
- 2024-10-04 06:23:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-02 07:28:11: 4u
- 2023-12-12 07:27:03: 1u
- 2023-11-07 07:46:42: 4u
- 2023-09-14 12:01:14: 2u
- 2023-07-06 08:07:34: 4u
- 2023-03-31 14:55:51: 6u
- 2023-02-24 11:52:57: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-09 10:22:05: 2u
- 2024-10-04 06:23:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-02 07:28:11: 2u
- 2023-12-12 07:27:03: 1u
- 2023-11-07 07:46:42: 1u
- 2023-09-14 12:01:14: 2u
- 2023-05-12 13:32:41: 1u
- 2023-03-31 14:55:51: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-09 10:22:05: 2u
- 2024-10-04 06:23:14: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2023-11-07 07:46:42: 1u
- 2023-09-14 12:01:14: 2u
- 2023-05-12 13:32:41: 3u
- 2023-02-24 11:52:57: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-09 10:22:05: 2u
- 2024-10-04 06:23:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-02 07:28:11: 2u
- 2023-11-07 07:46:42: 1u
- 2023-09-14 12:01:14: 2u
- 2023-05-12 13:32:41: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [MF0014] MF Olives noires 500g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-10-04 06:23:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-02 07:28:11: 1u
- 2023-09-14 12:01:14: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-10-04 06:23:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2023-11-07 07:46:42: 1u
- 2023-09-14 12:01:14: 2u
- 2023-05-12 13:32:41: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [CB005] CB Apple juice 1l | 1 | Predicted 1u but not ordered |
| [LB005] LB Amber (5,2%) 33CL | 1 | Predicted 1u but not ordered |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LB006] LB Brown (7,0%)  33CL | 1 | Predicted 1u but not ordered |


---

## False Negatives (8)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0012] MF Olives Mix 500g | 1 | Never ordered in previous analysis window (no history) |
| [MF0013] MF Olives Vertes 500g | 1 | Never ordered in previous analysis window (no history) |
| [MF0034] MF Tarti Pomme Raifort 250g  | 3 | Never ordered in previous analysis window (no history) |
| [CB002] CB Cherry Apple juice 25cl | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 24 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 144 | Never ordered in previous analysis window (no history) |
| [VID0012] Consigne casier 6X1L CB | 1 | Never ordered in previous analysis window (no history) |
| [VID0011] Consigne Bouteille 1L CB | 6 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:26:07.046Z*
