# Rapport Backtest - Client Epicerie Uhoda Beaufays

## Contexte

- **Client** : Epicerie Uhoda Beaufays (ID: 17669)
- **Commande réelle** : S39953
- **Date commande** : 2025-10-28 09:35:16
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 39
- **Tokens**: 38,020 input + 6,417 output = 44,437 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 39 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.23 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 15.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 08/10/2025, soit 19 jours avant la date actuelle. Le cycle moyen observé est d'environ 15 à 20 jours sur les commandes récentes (septembre/octobre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons le cycle habituel. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une alternance entre 1u et 2u. La médiane des commandes récentes est de 1,5u. En suivant le principe de précaution B2B et la médiane, on retient la valeur haute de la rotation régulière (2u) pour couvrir la période à venir, tout en restant cohérent avec les pics fréquents à 2u constatés en août, septembre et octobre.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 207 tokens
- **Total**: 1,201 tokens



</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 08/10/2025, soit 19 jours avant la date actuelle. Le cycle moyen récent est d'environ 22 jours (entre août, septembre et octobre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 86% du cycle moyen, dépassant le seuil d'alerte de 70%. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une consommation très stable de 1 unité par commande sur les trois dernières occurrences. La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter inutilement le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,075 tokens
- **Output**: 185 tokens
- **Total**: 1,260 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande récent montre une fréquence moyenne d'environ 20 à 25 jours entre chaque réapprovisionnement. La dernière commande datant du 1er octobre (soit 26 jours avant la date actuelle), le seuil de risque de rupture est atteint dans l'horizon des 30 jours définis par le replenishmentThresholdDays. Bien que le volume historique de l'année précédente fût plus élevé (3-4u), la tendance récente en 2025 s'est stabilisée sur des quantités plus faibles. En appliquant la règle de la médiane sur les commandes récentes (1u, 2u, 2u, 2u, 2u, 1u, 2u, 1u), la valeur médiane est de 2u. Cette quantité est retenue pour couvrir le besoin imminent tout en respectant la rotation actuelle du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 1,108 tokens
- **Output**: 198 tokens
- **Total**: 1,306 tokens



</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande récent montre une fréquence d'approvisionnement moyenne d'environ 25 jours. La dernière commande datant du 1er octobre (soit 26 jours avant la date actuelle), nous avons dépassé 70% du cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Concernant la quantité, l'historique récent est très stable avec une prédominance de commandes de 1u (médiane de 1u sur les deux derniers mois). Conformément aux règles de gestion des rotations faibles et à la priorité donnée à la médiane récente, une commande de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 168 tokens
- **Total**: 1,207 tokens



</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 15 à 25 jours entre chaque achat. La dernière commande datant du 1er octobre (soit 26 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint. Conformément au principe de précaution B2B et à la détection d'un risque de rupture imminent, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 964 tokens
- **Output**: 125 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>6. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière (environ toutes les 4 à 5 semaines). La dernière commande datant du 1er octobre (soit 26 jours), nous atteignons le seuil de réapprovisionnement de 30 jours. Le risque de rupture est imminent selon le principe de précaution B2B. Concernant la quantité, l'historique est extrêmement stable avec une rotation constante de 1 unité par commande. La médiane et le mode étant de 1, cette quantité est maintenue pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 963 tokens
- **Output**: 129 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation régulière avec un cycle moyen d'environ 15 à 20 jours entre les commandes. La dernière commande datant du 1er octobre (soit 26 jours avant la date actuelle), nous avons dépassé 70% du cycle habituel. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de la médiane sur les commandes récentes qui sont toutes de 1 unité, la quantité préconisée est de 1u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,001 tokens
- **Output**: 135 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 16 septembre, soit plus de 40 jours. Le cycle moyen de commande récent est d'environ 20 à 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est avéré. Bien que l'historique de l'année précédente montre des volumes plus élevés (3u), la tendance récente en 2025 est stabilisée sur une rotation faible de 1 à 2 unités. En suivant la règle de la médiane des commandes récentes et en privilégiant la valeur la plus basse en cas de doute sur une rotation faible, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,091 tokens
- **Output**: 152 tokens
- **Total**: 1,243 tokens



</details>


<details>
<summary><strong>9. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 21 jours entre juin et septembre. La dernière commande remontant au 16 septembre (soit 41 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture avéré. Concernant la quantité, l'historique oscille entre 1u et 2u. En appliquant la règle de la médiane sur les commandes récentes et le principe de précaution B2B pour un produit à faible rotation, une quantité de 2 unités est préconisée pour couvrir les besoins sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 156 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : Le cycle moyen de commande est d'environ 28 jours (intervalles de 29, 28, 27 jours sur les commandes récentes). La dernière commande remonte au 03/09/2025, soit 54 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin de restockage imminent. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une rotation stable de 1u (médiane des 5 dernières commandes). Bien que des commandes de 2u apparaissent ponctuellement en N-1, la tendance récente privilégie l'unité. En application du principe de précaution et de la règle de la médiane, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 213 tokens
- **Total**: 1,218 tokens



</details>


<details>
<summary><strong>11. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/09/2025, soit 54 jours. Le cycle moyen récent est d'environ 25 jours entre les commandes de mai à juillet, mais s'est allongé à 57 jours entre juillet et septembre. Avec un seuil de réapprovisionnement de 30 jours, nous sommes largement au-delà du cycle habituel (54 jours écoulés). En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une rotation très faible et stable (1u, 2u, 1u, 1u, 1u). La médiane des commandes récentes est de 1u. Conformément aux règles sur les rotations faibles (1-2u) et la priorité à la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 233 tokens
- **Total**: 1,272 tokens



</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 15 à 28 jours. La dernière commande remontant au 03/09/2025 (soit 54 jours avant la date actuelle), le délai habituel est largement dépassé, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement immédiat selon le principe de précaution B2B. La quantité est fixée à 1 unité, correspondant à la médiane constante observée sur toutes les commandes précédentes (rotation faible mais stable).

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 130 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>13. [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours entre juin et août. Depuis la dernière commande du 27 août, 61 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou un besoin non couvert. Conformément à la règle de la médiane sur l'historique récent (1u, 1u, 1u), la quantité préconisée est de 1 unité pour maintenir la rotation constante sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 136 tokens
- **Total**: 1,046 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:26:15: 2u
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 2u
- 2025-08-06 06:23:24: 2u
- 2025-07-15 09:58:18: 1u
- 2025-07-08 12:46:21: 1u
- 2025-06-19 08:52:32: 1u
- 2025-06-05 08:45:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:26:15: 1u
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 3u
- 2025-06-19 08:52:32: 1u
- 2025-06-11 13:19:43: 1u
- 2025-06-05 08:45:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 2u
- 2024-07-01 06:32:15: 2u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 2u
- 2025-08-27 06:19:11: 2u
- 2025-07-22 13:55:28: 2u
- 2025-07-15 09:58:18: 2u
- 2025-06-11 13:19:43: 1u
- 2025-06-05 08:45:41: 2u
- 2025-05-28 08:13:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:26:03: 4u
- 2024-07-30 10:52:57: 4u
- 2024-07-01 06:32:15: 4u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 3u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 1u
- 2025-08-06 06:23:24: 2u
- 2025-07-08 12:46:21: 1u
- 2025-06-25 13:16:08: 1u
- 2025-06-05 08:45:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:26:03: 3u
- 2024-07-01 06:32:15: 4u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-22 13:55:28: 1u
- 2025-07-15 09:58:18: 1u
- 2025-06-05 08:45:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 1u
- 2025-06-25 13:16:08: 1u
- 2025-06-05 08:45:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-22 13:55:28: 1u
- 2025-07-08 12:46:21: 1u
- 2025-06-25 13:16:08: 1u
- 2025-06-11 13:19:43: 1u
- 2025-06-05 08:45:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-08-06 06:23:24: 1u
- 2025-07-22 13:55:28: 2u
- 2025-07-15 09:58:18: 1u
- 2025-06-25 13:16:08: 2u
- 2025-06-05 08:45:41: 2u
- 2025-05-28 08:13:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:26:03: 3u
- 2024-07-30 10:52:57: 3u
- 2024-07-01 06:32:15: 3u
- 2024-05-13 08:03:20: 4u
- 2024-03-27 09:29:35: 3u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:15:06: 2u
- 2025-08-06 06:23:24: 2u
- 2025-07-22 13:55:28: 1u
- 2025-07-15 09:58:18: 1u
- 2025-07-08 12:46:21: 1u
- 2025-06-05 08:45:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-06 06:23:24: 2u
- 2025-07-08 12:46:21: 1u
- 2025-06-11 13:19:43: 1u
- 2025-06-05 08:45:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 2u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-07-08 12:46:21: 2u
- 2025-06-19 08:52:32: 1u
- 2025-06-11 13:19:43: 1u
- 2025-05-28 08:13:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:26:03: 2u
- 2024-07-01 06:32:15: 2u
- 2024-05-13 08:03:20: 2u
- 2024-03-27 09:29:35: 3u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-06 06:23:24: 1u
- 2025-07-22 13:55:28: 1u
- 2025-07-08 12:46:21: 1u
- 2025-06-11 13:19:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:19:11: 1u
- 2025-07-22 13:55:28: 1u
- 2025-06-19 08:52:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (26)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 2 | Predicted 2u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Predicted 1u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Predicted 1u but not ordered |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 2 | Predicted 2u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Predicted 1u but not ordered |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 3 | Predicted 3u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 3 | Predicted 3u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Predicted 1u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:37.382Z*
