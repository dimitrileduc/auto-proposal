# Rapport Backtest - Client BIOK THOREMBAIS

## Contexte

- **Client** : BIOK THOREMBAIS (ID: 60213)
- **Commande réelle** : S40238
- **Date commande** : 2025-11-14 10:35:55
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 23,698 input + 3,924 output = 27,622 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 48.0% | 25 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 64.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 15.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 15.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [KOKO01] KOKO Kombucha original 330ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 20 jours. La dernière commande datant du 22 octobre (soit 22 jours avant la date actuelle), nous avons dépassé 100% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. En suivant la règle de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes (1, 1, 3, 1, 4, 1, 1) et à la tendance observée sur les deux dernières occurrences.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 152 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>2. [KOKO01] KOKO Kombucha original 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle moyen de commande est d'environ 25 jours (intervalles de 21, 22, 28 jours). La dernière commande remonte au 22 octobre, soit 22 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 88% du cycle moyen. ÉTAPE 2 : L'historique récent montre des quantités de 1, 3, 1, 2. La médiane de ces commandes est de 1.5. En suivant la règle de précaution B2B et en observant la dernière commande à 2u, on stabilise la commande à 2 unités pour couvrir la période à venir sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 178 tokens
- **Total**: 1,135 tokens



</details>


<details>
<summary><strong>3. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 21 jours entre chaque réapprovisionnement. La dernière commande datant du 22 octobre (soit 22 jours avant la date actuelle), nous avons dépassé 100% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. En appliquant la règle de la médiane sur l'historique récent (valeurs : 1, 1, 2, 2, 2, 3, 4), la médiane se situe à 2 unités. Conformément au principe de précaution B2B et à la stabilité de la rotation, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 976 tokens
- **Output**: 163 tokens
- **Total**: 1,139 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 21 jours entre chaque réapprovisionnement. La dernière commande datant du 22 octobre (soit 22 jours avant la date actuelle), nous avons dépassé 100% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, l'historique récent présente des volumes de 1, 2, 3 et 4 unités. La médiane de ces commandes est de 2,5. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 977 tokens
- **Output**: 175 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 21 jours. La dernière commande datant du 22 octobre (soit 22 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. En appliquant la règle de la médiane sur les quantités récentes (1, 1, 2, 2, 3, 3, 3), la valeur centrale est de 2 unités. Conformément au principe de précaution B2B et à la stabilité de la rotation, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 977 tokens
- **Output**: 149 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 24 jours. La dernière commande datant du 22 octobre (soit il y a 22 jours), nous atteignons 91% du cycle moyen, ce qui dépasse le seuil de précaution de 70%. Un risque de rupture est donc identifié dans l'horizon des 30 jours (Replenishment Threshold Days). Concernant la quantité, l'historique oscille strictement entre 1u et 2u. La médiane des commandes récentes est de 2u, quantité retenue pour assurer le réapprovisionnement sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 148 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 21 à 35 jours. La dernière commande remonte au 22 octobre, soit 22 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteindrons environ 52 jours sans commande d'ici la fin de la période de vigilance, ce qui dépasse largement le cycle habituel. En application du principe de précaution B2B et constatant une rotation constante de 1 unité par commande (médiane et mode), une quantité de 1 est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 157 tokens
- **Total**: 1,117 tokens



</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen de commande est d'environ 21 jours. La dernière commande remonte au 22 octobre, soit 22 jours avant la date actuelle. Nous avons dépassé 100% du cycle moyen, le risque de rupture dans les 30 prochains jours est donc avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une rotation très stable et faible, principalement de 1 unité par commande. La médiane des quantités récentes est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 979 tokens
- **Output**: 154 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 56 et 21 jours. Depuis la dernière commande du 24 septembre, 50 jours se sont écoulés. Ce délai dépasse largement les 70% du cycle moyen estimé, présentant un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et face à une rotation faible mais régulière, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques récentes, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 914 tokens
- **Output**: 137 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>10. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 71 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (22 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une régularité stricte de 1 unité par commande. Conformément aux règles pour les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 179 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>11. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 71 jours entre les deux dernières commandes. Au 13 novembre 2025, 71 jours se sont écoulés depuis la dernière commande du 3 septembre. Le seuil de réapprovisionnement de 30 jours est donc largement atteint, confirmant un risque de rupture imminent. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane et à la constante observée dans l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 126 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>12. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 12 août 2025, soit 93 jours avant la date actuelle. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de type boisson. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 178 tokens
- **Total**: 1,055 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:39: 1u
- 2025-09-24 13:05:32: 1u
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 4u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [KOKO01] KOKO Kombucha original 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:39: 2u
- 2025-09-24 13:05:32: 1u
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 2u
- 2025-07-23 08:08:35: 0u
- 2025-06-24 12:29:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:39: 2u
- 2025-09-24 13:05:32: 2u
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 4u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:39: 3u
- 2025-09-24 13:05:32: 2u
- 2025-09-03 06:56:39: 4u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 2u
- 2025-07-08 06:30:25: 3u
- 2025-06-24 12:29:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:39: 2u
- 2025-09-24 13:05:32: 3u
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 1u
- 2025-07-08 06:30:25: 2u
- 2025-06-24 12:29:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:39: 2u
- 2025-09-03 06:56:39: 1u
- 2025-08-12 12:02:43: 2u
- 2025-07-23 08:08:35: 1u
- 2025-07-08 06:30:25: 2u
- 2025-06-24 12:29:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:39: 1u
- 2025-09-24 13:05:32: 1u
- 2025-09-03 06:56:39: 1u
- 2025-08-12 12:02:43: 1u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:39: 1u
- 2025-09-24 13:05:32: 1u
- 2025-09-03 06:56:39: 2u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 1u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:05:32: 1u
- 2025-09-03 06:56:39: 2u
- 2025-07-08 06:30:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:56:39: 1u
- 2025-08-12 12:02:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:56:39: 1u
- 2025-06-24 12:29:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-12 12:02:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Predicted 1u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:05.572Z*
