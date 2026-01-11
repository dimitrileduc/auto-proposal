# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S40204
- **Date commande** : 2025-11-12 13:01:53
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 53
- **Tokens**: 49,044 input + 8,465 output = 57,509 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.2% | 53 produits prédits, 16 corrects |
| **Rappel** | 80.0% | 20 produits réels, 16 détectés |
| **F1-Score** | 43.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.56 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 34.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 28.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (16)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MANA02] MANA natural energy drink - tropical passion 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 6 | 2 | 4.0 | 200.0% | partial | Non | Non | LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (16 produits)


<details>
<summary><strong>1. [MANA02] MANA natural energy drink - tropical passion 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande date de 14 jours (28 octobre). Bien que l'historique soit limité à une seule commande, le seuil de réapprovisionnement de 30 jours impose une stratégie de précaution en B2B. En l'absence de cycle établi, le principe de détection du besoin s'applique pour éviter une rupture potentielle. La quantité retenue correspond à la médiane de l'historique récent (1u), respectant la règle de ne pas surestimer les volumes sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 121 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique montre un cycle de commande moyen d'environ 25 à 30 jours (intervalles de 19, 22, 43 et 41 jours). La dernière commande date du 28 octobre, soit il y a 14 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient d'ici 16 jours, ce qui entre dans la fenêtre critique. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes oscillent entre 1u et 2u. La médiane des commandes récentes est de 2u. Conformément aux règles de rotation faible, nous maintenons ce volume habituel sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 193 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 25 jours. La dernière commande datant du 28 octobre (il y a 14 jours), le prochain besoin interviendra durant la période de couverture des 30 jours (Replenishment Threshold Days). Le cycle est relativement régulier avec une alternance entre 1u et 2u. En application de la règle de précaution B2B et pour couvrir le risque de rupture sur l'horizon défini, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane haute des commandes récentes pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 148 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 42 jours (43 jours entre août et septembre, 41 jours entre septembre et octobre). La dernière commande datant du 28 octobre (il y a 14 jours), le prochain besoin est estimé autour du 9 décembre. Étant donné que le seuil de réapprovisionnement est de 30 jours, l'échéance tombe exactement dans la fenêtre de vigilance. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon défini, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane et à la valeur la plus basse de l'historique récent pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 172 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence d'approvisionnement tous les 22 à 43 jours (moyenne ~30 jours). La dernière commande datant du 09/10/2025, soit il y a 33 jours, le seuil de réapprovisionnement de 30 jours est dépassé, ce qui confirme un risque de rupture imminent. Bien que l'historique N-1 à la même période (octobre/novembre) montre des volumes plus élevés (5u), la tendance récente en 2025 est stable à 2u. En application de la règle de la médiane sur l'historique récent et du principe de prudence (choisir la valeur la plus basse en cas de doute), une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 185 tokens
- **Total**: 1,192 tokens



</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 22 à 43 jours. La dernière commande datant du 09/10/2025 (soit 33 jours avant la date actuelle), nous avons dépassé le cycle moyen constaté. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application de la règle de la médiane sur les commandes récentes (2u, 2u, 2u), la quantité préconisée est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 139 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 25 à 30 jours entre chaque réapprovisionnement. La dernière commande datant du 9 octobre (soit 33 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est dépassé, ce qui indique un risque de rupture imminent. Bien que l'historique de l'année précédente montre un pic à 6 unités fin octobre, les données récentes de 2025 sont stables avec des commandes de 2 ou 3 unités. En appliquant la règle de la médiane sur l'historique récent (2, 3, 2, 3, 2), la quantité recommandée est de 3 unités pour couvrir les besoins tout en évitant le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 178 tokens
- **Total**: 1,166 tokens



</details>


<details>
<summary><strong>8. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: 5u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 5u
- **Reel commande**: 2u
- **Erreur LLM**: 4u (200.0%)
- **Erreur Mediane**: 3u (150.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 14, 29 et 22 jours (moyenne de 22 jours). Depuis la dernière commande du 09/10/2025, 33 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est imminent. Concernant la quantité, l'historique récent présente des volumes de 4, 5, 6 et 6 unités. La médiane se situant à 5.5, nous appliquons la règle de précaution B2B en retenant la valeur haute de 6 unités pour couvrir la période, tout en restant cohérent avec les deux dernières commandes identiques.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 171 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>9. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 60 à 70 jours (62 jours entre juin et août, 51 jours entre août et octobre). Depuis la dernière commande du 9 octobre, 33 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de risque de rupture (33 + 30 = 63 jours), ce qui correspond au cycle moyen constaté. En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 2 unités, correspondant à la médiane des commandes récentes et à la valeur la plus basse en cas de doute, conformément aux règles de gestion des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 166 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>10. [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 09/10/2025, soit 33 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous sommes dans une zone d'incertitude sur le cycle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 152 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>11. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 56 jours entre les deux dernières commandes (17/09 au 09/10). La dernière commande datant du 09/10, soit il y a 33 jours, nous avons dépassé 50% du cycle habituel. Compte tenu du seuil de réapprovisionnement de 30 jours, il existe un risque de rupture imminent. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane constante observée sur l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 146 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>12. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 50 à 65 jours (juin à août, puis août à octobre). La dernière commande date du 09/10/2025, soit il y a 33 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une commande est probable pour maintenir le stock, d'autant plus que le délai depuis la dernière commande dépasse 50% du cycle habituel. Par précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. La rotation est très faible et constante avec 1 unité par commande. La médiane des commandes récentes est de 1. Conformément aux règles pour les rotations faibles (1-2u), on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 199 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>13. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 14 et 29 jours entre les commandes précédentes. La dernière commande remonte au 17 septembre, soit 55 jours avant la date actuelle (11 novembre). Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, ce qui indique un besoin imminent ou un retard de commande. En suivant le principe de précaution B2B et la règle de la médiane historique (1u, 1u, 2u), la quantité recommandée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 138 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>14. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
La dernière commande remonte au 19 août 2025, soit 84 jours avant la date actuelle. En l'absence d'un historique complet permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture prolongée, surtout avec un seuil de réapprovisionnement de 30 jours. La quantité retenue est de 3 unités, correspondant à la dernière commande connue (médiane de l'historique récent), afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 123 tokens
- **Total**: 992 tokens



</details>


<details>
<summary><strong>15. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/08/2025, soit 98 jours. Le cycle précédent était de 41 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle habituel et l'horizon de 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une régularité stricte de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 174 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 25 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible (2u), l'absence de données historiques supplémentaires et le délai écoulé créent une incertitude sur le cycle de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité est fixée à 2 unités, correspondant à la médiane et au volume de la dernière commande enregistrée, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 138 tokens
- **Total**: 1,008 tokens



</details>




### Donnees d'Input LLM (16 produits)


<details>
<summary><strong>1. [MANA02] MANA natural energy drink - tropical passion 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 15:03:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 15:03:31: 1u
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u
- 2025-06-25 06:46:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 15:03:31: 1u
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u
- 2025-06-25 06:46:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 15:03:31: 1u
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 3u
- 2025-06-18 07:03:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 14:43:32: 5u
- 2024-08-21 13:55:22: 4u
- 2024-07-15 07:59:25: 5u
- 2024-04-15 06:24:25: 3u
- 2024-03-12 14:06:41: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 14:43:32: 4u
- 2024-08-21 13:55:22: 2u
- 2024-04-15 06:24:25: 3u
- 2024-03-12 14:06:41: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:32:03: 3u
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 3u
- 2025-08-05 06:36:11: 2u
- 2025-06-25 06:46:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 14:43:32: 6u
- 2024-07-15 07:59:25: 4u
- 2024-07-01 07:05:34: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:32:03: 6u
- 2025-09-17 11:26:26: 6u
- 2025-08-19 12:02:03: 5u
- 2025-08-05 06:36:11: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:32:03: 2u
- 2025-08-19 12:02:03: 3u
- 2025-06-18 07:03:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:32:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u
- 2025-06-18 07:03:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:32:03: 1u
- 2025-08-05 06:36:11: 1u
- 2025-06-25 06:46:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 12:02:03: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:36:11: 1u
- 2025-06-25 06:46:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-25 06:46:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (37)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | Predicted 2u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Predicted 2u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Predicted 3u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 3 | Predicted 3u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Predicted 3u but not ordered |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Predicted 2u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Predicted 2u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Predicted 2u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Predicted 2u but not ordered |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Predicted 2u but not ordered |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT05] RITCHIE Cola - verre 275ml | 2 | Predicted 2u but not ordered |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Predicted 2u but not ordered |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 3 | Predicted 3u but not ordered |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Predicted 3u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF021] JF PICKLES 350 ML | 3 | Predicted 3u but not ordered |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 2 | Predicted 2u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Never ordered in previous analysis window (no history) |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Never ordered in previous analysis window (no history) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Never ordered in previous analysis window (no history) |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:05:16.930Z*
