# Rapport Backtest - Client CARREFOUR BELGIUM SA, HYPER SCHOTEN

## Contexte

- **Client** : CARREFOUR BELGIUM SA, HYPER SCHOTEN (ID: 24275)
- **Commande réelle** : S39796
- **Date commande** : 2025-10-20 06:42:57
- **Date cutoff système** : 2025-10-19 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 23
- **Tokens**: 20,951 input + 3,658 output = 24,609 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 78.3% | 23 produits prédits, 18 corrects |
| **Rappel** | 94.7% | 19 produits réels, 18 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.28 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 27.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 27.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (18)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (18 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique récent montre une rotation très régulière avec une commande de 1 unité environ tous les 30 jours (04/08, 05/09, 02/10). La dernière commande datant du 02/10 (soit 17 jours avant la date actuelle), le prochain besoin interviendra durant la période de couverture des 30 jours (Replenishment Threshold Days). En suivant le principe de précaution B2B et la règle de maintien des rotations faibles, une commande de 1 unité (médiane historique) est nécessaire pour éviter la rupture sur le cycle à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 143 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 30 jours (23 jours entre août et septembre, 36 jours entre septembre et octobre). Depuis la dernière commande du 2 octobre, 17 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons l'échéance du cycle habituel (environ 30-35 jours) dans la fenêtre de vigilance. Par principe de précaution B2B et pour éviter une rupture sur ce produit à faible rotation, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la quantité la plus fréquente, respectant la règle de ne pas surestimer les stocks sur les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 177 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>3. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle moyen entre les deux dernières commandes est de 36 jours. La dernière commande date du 02/10/2025, soit 17 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 47 jours d'ici la fin de la période de vigilance, ce qui dépasse largement le cycle habituel. Il existe donc un risque de rupture. ÉTAPE 2 : L'historique récent montre des quantités de 1u et 3u. La commande de l'année précédente à la même période était de 1u. En suivant la règle de la médiane et le principe de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 189 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle récent de 36 jours. Depuis la dernière commande du 02/10/2025, 17 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans les 13 prochains jours, ce qui justifie une commande par précaution. Pour la quantité, bien que la dernière commande fût de 4u, l'historique global (2u en août 2025 et 2u en septembre 2024) indique une rotation de base plus faible. En appliquant la règle de la médiane et le principe de prudence (choisir la valeur la plus basse en cas de doute sur un pic), la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 181 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>5. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 21 jours (intervalles de 23, 21 et 15 jours). La dernière commande datant du 02/10/2025 (soit 17 jours avant la date actuelle), nous atteignons 80% du cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques et à la rotation régulière observée, en écartant le pic ponctuel de 2 unités pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 175 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 44 jours puis 15 jours, indiquant une accélération ou une irrégularité. Depuis la dernière commande (02/10), 17 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 47 jours d'ancienneté, ce qui dépasse le cycle moyen constaté. Par principe de précaution B2B et pour éviter une rupture sur ce produit à faible rotation, un besoin est détecté. La quantité retenue est de 1 unité, correspondant à la médiane constante et stricte de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 152 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 30 jours (23 jours entre août et 36 jours entre août et octobre). La dernière commande datant du 02/10, soit il y a 17 jours, le risque de rupture est élevé d'ici les 30 prochains jours (seuil de réapprovisionnement). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes, tout en évitant le surstockage pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 149 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 23 et 36 jours (moyenne de 29,5 jours). La dernière commande datant du 02/10/2025 (il y a 17 jours), le prochain besoin est estimé sous 12 jours, ce qui entre dans l'horizon de réapprovisionnement de 30 jours. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (1u, 2u, 2u), la quantité retenue est de 2 unités pour couvrir le cycle habituel sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 149 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>9. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle moyen entre les commandes récentes est d'environ 29 jours (44 jours entre août et septembre, 15 jours entre septembre et octobre). La dernière commande date du 02/10, soit il y a 17 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient d'ici 13 jours, ce qui entre dans la fenêtre de vigilance. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Les quantités historiques sont très faibles (1u, 2u, 1u). La médiane est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 180 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>10. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'environ 30 jours (dernières commandes le 05/09 et le 02/10). Actuellement à 17 jours depuis la dernière commande, le risque de rupture se situe dans l'horizon des 30 jours du seuil de réapprovisionnement. Conformément au principe de précaution B2B et à la détection d'un cycle régulier, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 138 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles récents de 23 et 36 jours (moyenne ~30 jours). Depuis la dernière commande du 02/10/2025, 17 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans les 13 prochains jours, ce qui justifie une commande par précaution. La médiane des quantités récentes (1, 2, 3) est de 2 unités. Conformément aux règles de gestion, nous retenons cette valeur médiane pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 144 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>12. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 15 à 45 jours. La dernière commande date du 02/10, soit 17 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 47 jours sans commande à l'horizon du seuil, ce qui dépasse le cycle moyen constaté. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. La rotation est très faible et constante (1 unité par commande). La médiane des commandes récentes est de 1. Conformément aux règles pour les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 171 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>13. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 44 jours puis 15 jours, soit une moyenne de 29,5 jours. Depuis la dernière commande du 02/10/2025, 17 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans les 13 prochains jours, ce qui justifie une commande par précaution. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes (1, 2, 1) et respectant la règle de prudence pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 145 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>14. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique récent montre une rotation régulière avec un cycle moyen d'environ 30 à 35 jours entre chaque commande (23 jours entre août et fin août, 36 jours entre août et octobre). La dernière commande datant du 02/10 (soit 17 jours avant la date actuelle), le prochain besoin est estimé sous 15 à 20 jours, ce qui entre dans l'horizon du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à un cycle de rotation établi, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 161 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>15. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 44 jours puis 15 jours, indiquant une rotation irrégulière mais active. Depuis la dernière commande du 02/10/2025, 17 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de risque de rupture (J+47). En application du principe de précaution B2B pour les cycles irréguliers, un besoin est détecté. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes historiques récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 139 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>16. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 23 et 36 jours (moyenne de 29 jours). Depuis la dernière commande du 02/10/2025, 17 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans 13 jours, ce qui entre dans la fenêtre de vigilance. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 3), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 150 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>17. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 32 jours. Le cycle entre les deux dernières commandes était de 44 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons 72% du cycle moyen (32/44), ce qui dépasse le seuil de précaution de 70%. De plus, l'historique N-1 montre une commande à cette période précise (19 septembre). Le risque de rupture est donc identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une consommation stable de 1 unité par commande. Bien que l'année dernière les quantités étaient de 3 unités, la règle de priorité à l'historique récent et le respect des tendances à la baisse imposent de retenir la médiane récente, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 205 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>18. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 17 septembre 2025, soit il y a 32 jours. L'historique montre une commande à la même période l'année dernière (19 septembre 2024). Le délai actuel dépasse le cycle de réapprovisionnement suggéré par l'historique récent et N-1. Il existe un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Le produit présente une rotation très faible et constante de 1 unité par commande. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 170 tokens
- **Total**: 1,092 tokens



</details>




### Donnees d'Input LLM (18 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 1u
- 2025-09-05 12:05:06: 1u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:18:39: 1u
- 2024-05-16 07:46:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 1u
- 2025-08-27 06:20:34: 2u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 3u
- 2025-08-27 06:20:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:18:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 4u
- 2025-08-27 06:20:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:18:39: 2u
- 2024-05-16 07:46:51: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 2u
- 2025-09-17 06:08:16: 1u
- 2025-08-27 06:20:34: 1u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 1u
- 2025-09-17 06:08:16: 1u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:18:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 2u
- 2025-08-27 06:20:34: 2u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 2u
- 2025-08-27 06:20:34: 2u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 1u
- 2025-09-17 06:08:16: 2u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 1u
- 2025-09-05 12:05:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:18:39: 1u
- 2024-05-16 07:46:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 3u
- 2025-08-27 06:20:34: 2u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:18:39: 2u
- 2024-05-16 07:46:51: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 1u
- 2025-09-17 06:08:16: 1u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 1u
- 2025-09-17 06:08:16: 2u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 1u
- 2025-08-27 06:20:34: 1u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 1u
- 2025-09-17 06:08:16: 1u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:29:05: 3u
- 2025-08-27 06:20:34: 2u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:08:16: 1u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:18:39: 3u
- 2024-05-16 07:46:51: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:08:16: 1u
- 2025-08-04 11:47:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:18:39: 1u
- 2024-05-16 07:46:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:17:04.937Z*
