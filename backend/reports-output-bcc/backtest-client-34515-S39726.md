# Rapport Backtest - Client Fermes en Vie SC - Fermes en Vie

## Contexte

- **Client** : Fermes en Vie SC - Fermes en Vie (ID: 34515)
- **Commande réelle** : S39726
- **Date commande** : 2025-10-21 07:07:14
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 34
- **Tokens**: 30,438 input + 4,992 output = 35,430 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 56.0% | 25 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 71.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.64 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 35.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -22.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0047] MF Mayonnaise 250ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande régulier d'environ 30 à 40 jours (07/07, 07/08, 16/09). La dernière commande date de 34 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : Estimation quantité. Les trois dernières commandes sont strictement identiques (1u). La médiane est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 145 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>2. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 16 septembre, soit 34 jours. Le cycle moyen observé est d'environ 35-40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : L'historique récent montre une régularité parfaite avec des commandes unitaires (1u). La médiane des quantités est de 1. En suivant le principe de maintien pour les rotations faibles, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 127 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 31, 21 et 19 jours. La dernière commande date du 16 septembre, soit 34 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen constaté et le seuil de réapprovisionnement de 30 jours, confirmant un besoin immédiat pour éviter la rupture. Concernant la quantité, l'historique récent présente des volumes de 1, 2, 2 et 4 unités. La médiane de ces commandes est de 2 unités. Conformément aux règles de gestion B2B privilégiant la médiane et la prudence face aux pics isolés (4u), une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 160 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 21, 21 et 31 jours. La dernière commande datant du 16 septembre (soit 34 jours avant la date actuelle), le délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Un besoin est donc identifié par précaution. Pour la quantité, bien qu'un pic à 4 unités ait été observé récemment, la médiane des commandes historiques (1, 2, 2, 4) est de 2 unités. Conformément à la règle de prudence et de stabilité, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 148 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>5. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle moyen observé est d'environ 40 jours. La dernière commande date du 16 septembre, soit il y a 34 jours. Nous avons dépassé 70% du cycle moyen (28 jours) et entrons dans la fenêtre de risque de rupture pour les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une consommation constante et faible de 1 unité par commande. En suivant la règle de la médiane pour les rotations faibles, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 127 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 21, 21 et 31 jours. La dernière commande remonte au 16 septembre, soit 34 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours, confirmant un besoin immédiat pour éviter la rupture. Concernant la quantité, l'historique récent oscille entre 1 et 2 unités. En appliquant la règle de la médiane sur les commandes récentes (2, 2, 1, 2), la valeur centrale est de 2 unités. Ce volume permet de maintenir le stock sans risque de surstockage pour ce produit à rotation faible mais régulière.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 161 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 20 jours (21 jours entre août et septembre). La dernière commande datant du 16 septembre, soit il y a 34 jours, le seuil de réapprovisionnement de 30 jours est dépassé. Il existe donc un risque de rupture imminent. Conformément à la règle de la médiane sur l'historique récent (1u, 1u, 1u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 126 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>8. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 16 septembre, soit 34 jours avant la date actuelle. Le cycle précédent était de 19 jours. Le délai actuel dépasse largement le cycle observé et l'horizon de 30 jours (Replenishment Threshold Days), ce qui indique un besoin de réapprovisionnement imminent ou une rupture probable. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une consommation constante et faible de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la médiane de 1 unité est maintenue pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 160 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>9. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 août, soit 53 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (52 jours entre juillet et août). En application du principe de précaution B2B et compte tenu du seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité absolue avec des commandes unitaires (1u). Conformément à la règle sur les rotations faibles, la quantité de 1u est maintenue pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 158 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>10. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 août, soit 53 jours. Le cycle moyen observé est d'environ 25-30 jours. Nous avons largement dépassé ce cycle, ce qui indique un besoin imminent ou une rupture probable à l'horizon des 30 jours (seuil de réapprovisionnement). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une régularité absolue avec des commandes unitaires (1u). La médiane et la tendance constante étant de 1, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 152 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>11. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le cycle de commande moyen est d'environ 26 jours (21 jours entre les deux dernières, 31 jours entre les précédentes). La dernière commande remonte au 28 août, soit 53 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un besoin immédiat pour éviter une rupture prolongée. La quantité est fixée à 1 unité, correspondant à la médiane constante observée sur l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 118 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>12. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 31 jours puis 21 jours. La dernière commande remonte au 28 août 2025, soit 53 jours avant la date actuelle (20 octobre). Ce délai dépasse largement le cycle moyen constaté et l'horizon de réapprovisionnement de 30 jours, signalant un risque de rupture imminent ou un besoin de restockage par précaution. En suivant la règle de la médiane sur l'historique récent (1u, 2u, 1u), la quantité retenue est de 1 unité, privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 159 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>13. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 28 août, soit 53 jours. Le cycle moyen observé est d'environ 25-30 jours. Nous avons largement dépassé ce cycle, ce qui indique un besoin imminent ou une rupture probable. Avec un seuil de réapprovisionnement de 30 jours, le risque est confirmé par principe de précaution B2B. ÉTAPE 2 (QUANTITÉ) : L'historique récent montre des volumes très faibles (1u, 2u, 1u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u sans augmenter sans raison spécifique.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 169 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>14. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 31 et 21 jours. La dernière commande remonte au 28 août, soit 53 jours sans réapprovisionnement, ce qui dépasse largement le cycle moyen et le seuil de 30 jours (risque de rupture imminent ou déjà effectif). En application du principe de précaution B2B et face à une rotation très faible mais régulière de 1 unité, la quantité retenue est la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 114 tokens
- **Total**: 1,017 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:38:03: 1u
- 2025-08-07 07:38:59: 1u
- 2025-07-07 06:11:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:38:03: 1u
- 2025-08-28 06:13:56: 1u
- 2025-07-07 06:11:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:38:03: 4u
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 2u
- 2025-07-07 06:11:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:38:03: 4u
- 2025-08-28 06:13:56: 2u
- 2025-08-07 07:38:59: 1u
- 2025-07-07 06:11:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:38:03: 1u
- 2025-08-07 07:38:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:38:03: 2u
- 2025-08-28 06:13:56: 2u
- 2025-08-07 07:38:59: 1u
- 2025-07-07 06:11:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:38:03: 1u
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:38:03: 1u
- 2025-08-28 06:13:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-07-07 06:11:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 1u
- 2025-07-07 06:11:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 1u
- 2025-07-07 06:11:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 2u
- 2025-07-07 06:11:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 2u
- 2025-07-07 06:11:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [MF0047] MF Mayonnaise 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 1u
- 2025-07-07 06:11:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 2 | Predicted 2u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Predicted 2u but not ordered |
| [MF0021] MF Sauce BBQ 250ml | 1 | Predicted 1u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Predicted 1u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 2 | Predicted 2u but not ordered |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Predicted 2u but not ordered |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Predicted 1u but not ordered |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | Predicted 1u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:45.188Z*
