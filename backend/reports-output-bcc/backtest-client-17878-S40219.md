# Rapport Backtest - Client Epicerie Flocon d'Avoine

## Contexte

- **Client** : Epicerie Flocon d'Avoine (ID: 17878)
- **Commande réelle** : S40219
- **Date commande** : 2025-11-14 12:44:14
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 34
- **Tokens**: 32,303 input + 5,213 output = 37,516 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.6% | 32 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 57.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 6.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 3.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV345] LV Spread KIDS 200ml Organic | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte à 29 jours (15 octobre), ce qui est proche du seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture, d'autant plus que l'historique N-1 montre une activité en fin d'année (novembre/décembre). La quantité retenue est de 1 unité, correspondant à la dernière commande connue, afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 128 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 15 octobre 2025, soit il y a 29 jours. Le cycle récent entre les deux dernières commandes était de 42 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (70% du cycle atteint). Bien que l'historique récent montre une rotation faible de 1 unité, le principe de précaution B2B impose de prévoir une commande pour couvrir les 30 prochains jours. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la tendance actuelle de consommation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,021 tokens
- **Output**: 144 tokens
- **Total**: 1,165 tokens



</details>


<details>
<summary><strong>3. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande récent est d'environ 30 à 40 jours (août, septembre, octobre). La dernière commande datant du 15 octobre, soit il y a 29 jours, le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que l'historique N-1 montre un pic à 3u en septembre, la tendance récente est extrêmement stable à 1u par commande. En suivant la règle de la médiane des commandes récentes et le principe de ne pas surestimer pour les faibles rotations, une quantité de 1u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,003 tokens
- **Output**: 144 tokens
- **Total**: 1,147 tokens



</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande récent est d'environ 30 à 40 jours (août, septembre, octobre). La dernière commande remonte au 15 octobre, soit 29 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le besoin de renouvellement est atteint. La rotation est très faible et constante à 1 unité par commande sur l'historique récent et la majorité de l'historique N-1. En suivant la règle de précaution B2B et la médiane des quantités, une commande de 1 unité est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 140 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>5. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen récent est d'environ 40 jours (intervalles de 36, 29 et 42 jours). La dernière commande date du 15 octobre, soit il y a 29 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons 72% du cycle moyen (29/40). Le risque de rupture est imminent dans l'horizon défini. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilité parfaite avec une médiane de 1 unité par commande sur les 4 dernières occurrences. Bien que l'historique N-1 montre des volumes légèrement supérieurs, la tendance actuelle est à la baisse et stabilisée à 1u. Conformément aux règles de rotation faible, on maintient la quantité de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,058 tokens
- **Output**: 200 tokens
- **Total**: 1,258 tokens



</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 28 jours sur les trois dernières commandes. La dernière commande datant du 15 octobre (soit 29 jours avant la date actuelle), nous avons dépassé le cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien qu'un pic exceptionnel de 17 unités ait été observé en septembre, la médiane des commandes récentes (hors valeurs extrêmes) se situe à 3 unités. En suivant le principe de précaution B2B et la règle de la médiane, une commande de 3 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,090 tokens
- **Output**: 161 tokens
- **Total**: 1,251 tokens



</details>


<details>
<summary><strong>7. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 15 octobre 2025, soit 29 jours avant la date actuelle. Le cycle moyen constaté sur l'historique récent et N-1 est d'environ 35 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent dans l'horizon défini. Bien que la dernière commande fût de 1u, la médiane historique (récente et N-1) se situe à 2u. En application du principe de précaution B2B pour éviter une rupture sur un produit à rotation régulière, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,027 tokens
- **Output**: 149 tokens
- **Total**: 1,176 tokens



</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/09/2025, soit plus de 70 jours sans réapprovisionnement. Bien que la rotation soit faible, l'historique N-1 montre une activité régulière en fin d'année (novembre/décembre). En application du principe de précaution B2B face à un cycle irrégulier et un risque de rupture imminent pour la période de fin d'année, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et au mode des commandes récentes, respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,021 tokens
- **Output**: 144 tokens
- **Total**: 1,165 tokens



</details>


<details>
<summary><strong>9. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/09/2025, soit 71 jours avant la date actuelle. Bien que le cycle de rotation soit lent et irrégulier, le délai écoulé dépasse largement les intervalles observés historiquement (environ 60 jours entre les deux dernières commandes). En application du principe de précaution B2B pour éviter une rupture sur un produit à faible rotation, un besoin est détecté. La quantité est fixée à 1 unité, correspondant à la médiane stricte des commandes récentes et de l'historique N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 128 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>10. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/08/2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'intervalle entre les deux commandes précédentes était de 36 jours. Le délai actuel dépasse largement ce cycle, créant une incertitude sur le stock résiduel. En application du principe de précaution B2B (doute sur le cycle = prévoir), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une régularité stricte de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 182 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>11. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/08/2025, soit 100 jours d'inactivité. Bien que la rotation soit très faible, l'absence de cycle défini et le délai important depuis la dernière commande imposent une commande de précaution pour éviter une rupture de stock prolongée sur ce produit, conformément au principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane de 2 unités est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 161 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>12. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec une quantité constante de 1 unité par commande. La dernière commande remonte au 05/08/2025, soit plus de 3 mois (environ 100 jours). Bien que le cycle soit irrégulier, le délai écoulé dépasse largement les intervalles observés en 2024. En application du principe de précaution B2B (incertitude sur le cycle = prévoir) et pour couvrir le risque de rupture sur l'horizon de 30 jours, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 159 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>13. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (1 unité par commande). La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. Bien que le cycle soit difficile à déterminer avec précision, le principe de précaution B2B et le risque de rupture sur un produit à longue traîne imposent de prévoir un réapprovisionnement. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique, afin d'éviter un surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 142 tokens
- **Total**: 1,063 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:43:55: 2u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:43:55: 3u
- 2024-07-29 06:27:47: 2u
- 2024-06-17 06:02:18: 2u
- 2024-05-16 12:15:00: 2u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-12-12 13:33:41: 1u
- 2023-11-23 08:04:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 1u
- 2025-08-05 06:27:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:43:55: 3u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 1u
- 2025-08-05 06:27:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:43:55: 3u
- 2024-06-17 06:02:18: 1u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-12-12 13:33:41: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 1u
- 2025-08-05 06:27:11: 1u
- 2025-06-30 12:25:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:43:55: 2u
- 2024-07-29 06:27:47: 2u
- 2024-06-17 06:02:18: 4u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 2u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-15 05:02:02: 2u
- 2025-09-17 06:40:39: 17u
- 2025-09-03 06:41:22: 3u
- 2025-08-05 06:27:11: 2u
- 2025-06-30 12:25:33: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:43:55: 4u
- 2024-09-26 06:43:55: 2u
- 2024-07-29 06:27:47: 3u
- 2024-06-17 06:02:18: 2u
- 2024-05-16 12:15:00: 4u
- 2024-04-22 10:02:31: 3u
- 2024-03-05 10:49:15: 2u
- 2023-12-12 13:33:41: 3u
- 2023-11-23 08:04:40: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 2u
- 2025-08-05 06:27:11: 2u
- 2025-06-30 12:25:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:43:55: 2u
- 2024-06-17 06:02:18: 2u
- 2024-04-22 10:02:31: 2u
- 2024-03-05 10:49:15: 2u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:41:22: 1u
- 2025-08-05 06:27:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:43:55: 3u
- 2024-07-29 06:27:47: 2u
- 2024-06-17 06:02:18: 1u
- 2024-05-16 12:15:00: 2u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:41:22: 1u
- 2025-06-30 12:25:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:27:47: 1u
- 2024-06-17 06:02:18: 1u
- 2024-05-16 12:15:00: 1u
- 2023-11-23 08:04:40: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:27:11: 1u
- 2025-06-30 12:25:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:27:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:27:11: 1u
- 2025-06-30 12:25:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:43:55: 1u
- 2024-06-17 06:02:18: 1u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-11-23 08:04:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:25:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:27:47: 1u
- 2024-06-17 06:02:18: 1u
- 2024-03-05 10:49:15: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (19)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Predicted 1u but not ordered |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 1 | Predicted 1u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:21.229Z*
