# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S40066
- **Date commande** : 2025-11-03 12:14:48
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 35
- **Tokens**: 34,070 input + 5,459 output = 39,529 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 32.4% | 34 produits prédits, 11 corrects |
| **Rappel** | 84.6% | 13 produits réels, 11 détectés |
| **F1-Score** | 46.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.45 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 27.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 20 octobre, soit il y a 13 jours. Le cycle moyen observé est d'environ 14 jours (commandes régulières les lundis toutes les deux semaines). À la date du 2 novembre, nous sommes à l'échéance du cycle habituel. Le risque de rupture dans les 30 prochains jours est donc avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilisation à 1 unité par commande sur les trois dernières occurrences (septembre/octobre), contre 2 unités auparavant. En suivant la règle de la médiane et du respect de la tendance à la baisse, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 947 tokens
- **Output**: 169 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>2. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 18 jours. La dernière commande datant du 20 octobre (il y a 13 jours), le prochain besoin est estimé sous 5 à 10 jours, ce qui entre dans l'horizon du seuil de réapprovisionnement de 30 jours. Bien que le cycle soit légèrement irrégulier, le principe de précaution B2B impose de prévoir une commande. Pour la quantité, on observe une tendance à la baisse sur les deux dernières commandes (1u). La médiane historique récente se situe entre 1u et 2u ; conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 993 tokens
- **Output**: 172 tokens
- **Total**: 1,165 tokens



</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

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
ÉTAPE 1 : Le cycle de commande est très régulier (tous les 14 jours environ). La dernière commande date du 20 octobre, soit il y a 13 jours. Le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement), car la prochaine commande devrait théoriquement intervenir sous peu. ÉTAPE 2 : L'historique récent montre une légère tendance à la baisse (passage de 3u à 2u sur les deux dernières commandes). La médiane des commandes récentes (hors pics à 5u/6u) se situe entre 2 et 3. En application de la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute ou de baisse constatée, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 182 tokens
- **Total**: 1,176 tokens



</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier de 14 jours (tous les lundis, une semaine sur deux). La dernière commande date du 20 octobre, soit il y a 13 jours. Une commande est donc imminente (cycle de 14 jours atteint demain) et tombe largement dans la fenêtre de réapprovisionnement de 30 jours. Concernant la quantité, la médiane des commandes récentes (1, 3, 3, 2, 5, 3, 3, 4) est de 3 unités. Le pic de 5 unités est considéré comme exceptionnel et la baisse à 1 unité lors de la dernière commande ne permet pas encore de confirmer une tendance durable à la baisse. La médiane de 3 unités est donc retenue pour assurer la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 187 tokens
- **Total**: 1,181 tokens



</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Le cycle de commande est extrêmement régulier (tous les 14 jours environ). La dernière commande date du 20 octobre, soit il y a 13 jours. Une nouvelle commande est donc imminente et tombe largement dans la fenêtre de réapprovisionnement de 30 jours. La quantité médiane des commandes récentes est de 2 unités (stabilité observée sur les 5 dernières commandes entre 1u et 2u). Conformément au principe de précaution B2B et à la régularité du cycle, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 131 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière variant entre 14 et 28 jours. La dernière commande date du 20 octobre, soit il y a 13 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car la prochaine commande théorique devrait intervenir sous peu (cycle moyen constaté). En application du principe de précaution B2B et face à une rotation très stable, la quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 125 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>7. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 30 à 45 jours. La dernière commande datant du 20 octobre (il y a 13 jours), le risque de rupture entre dans l'horizon des 30 jours du seuil de réapprovisionnement (Replenishment Threshold Days), d'autant plus que les intervalles sont irréguliers. En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, la médiane des commandes récentes est de 1 unité (4 commandes sur 5 sont de 1u). Conformément à la règle de ne pas surestimer pour les produits à faible rotation, la quantité retenue est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 164 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>8. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande récent montre une fréquence d'environ 14 à 42 jours. La dernière commande date du 20 octobre, soit il y a 13 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est identifié d'ici la fin du mois de novembre. Bien que l'historique N-1 montre un pic à 5 unités en octobre, la tendance récente (août à octobre 2025) indique une baisse de volume avec des commandes de 1 à 2 unités. En appliquant la règle de la médiane sur les commandes les plus récentes et en privilégiant la valeur la plus basse en cas de doute sur une rotation faible, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,092 tokens
- **Output**: 174 tokens
- **Total**: 1,266 tokens



</details>


<details>
<summary><strong>9. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le cycle de commande récent est extrêmement régulier, avec une commande toutes les deux semaines (14 jours). La dernière commande datant du 20 octobre, soit il y a 13 jours, le prochain besoin est imminent et tombe largement dans la fenêtre des 30 jours du seuil de réapprovisionnement. Concernant la quantité, bien que l'historique N-1 montre des volumes plus élevés (2-4u), la tendance récente sur les 5 dernières commandes est stabilisée à 1 unité. En suivant la règle de privilégier la médiane récente et de ne pas augmenter sans raison sur une rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,160 tokens
- **Output**: 150 tokens
- **Total**: 1,310 tokens



</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande extrêmement régulier de 14 jours (tous les deux lundis). La dernière commande datant du 2025-10-20, la prochaine est théoriquement attendue le 2025-11-03. Étant donné que nous sommes le 2025-11-02 et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est imminent. Concernant la quantité, les commandes récentes oscillent entre 1u et 3u. La médiane des 8 dernières commandes est de 2,5u. Conformément à la règle de prudence B2B privilégiant la valeur basse en cas de doute sur la médiane, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,158 tokens
- **Output**: 186 tokens
- **Total**: 1,344 tokens



</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse montre une absence de commande depuis le 11 août 2025 (soit plus de 80 jours), ce qui dépasse largement le cycle de rotation habituel observé en 2024. Bien que l'historique récent soit très faible (1u), les données N-1 sur la même période (novembre 2023) indiquent un besoin de 2u. En application du principe de précaution B2B face à une irrégularité de cycle et pour couvrir le risque de rupture sur l'horizon de 30 jours, une commande est nécessaire. La quantité retenue correspond à la médiane historique (2u), privilégiant la valeur basse par rapport aux pics de 3u constatés l'an dernier.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 170 tokens
- **Total**: 1,157 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 2u
- 2025-06-30 09:27:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 2u
- 2025-06-30 09:27:32: 4u
- 2025-06-16 09:06:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:35:01: 2u
- 2025-10-06 09:27:30: 2u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 3u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 5u
- 2025-06-30 09:27:32: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 3u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 5u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 3u
- 2025-06-30 09:27:32: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:35:01: 2u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 2u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 3u
- 2025-06-30 09:27:32: 1u
- 2025-06-16 09:06:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u
- 2025-06-30 09:27:32: 1u
- 2025-06-16 09:06:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 2u
- 2025-06-30 09:27:32: 1u
- 2025-06-16 09:06:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 2u
- 2025-06-16 09:06:18: 2u
- 2025-06-03 06:14:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 07:22:24: 5u
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 2u
- 2024-05-13 13:42:50: 2u
- 2024-03-19 14:47:15: 3u
- 2024-02-09 08:53:20: 2u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-07-14 11:44:16: 2u
- 2025-06-30 09:27:32: 1u
- 2025-06-16 09:06:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 07:22:24: 3u
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 4u
- 2024-06-11 06:44:54: 2u
- 2024-05-13 13:42:50: 4u
- 2024-04-15 11:54:11: 2u
- 2024-03-19 14:47:15: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:35:01: 3u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 2u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 3u
- 2025-06-30 09:27:32: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 07:22:24: 4u
- 2024-09-03 09:43:33: 4u
- 2024-08-06 09:10:28: 5u
- 2024-06-11 06:44:54: 4u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 5u
- 2024-03-19 14:47:15: 5u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 5u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 06:51:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 3u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (23)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Predicted 1u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | Predicted 4u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | Predicted 3u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Predicted 2u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Predicted 1u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Predicted 2u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Predicted 1u but not ordered |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Predicted 1u but not ordered |
| [LEA07] LEAMO orangeade bio 330ml | 1 | Predicted 1u but not ordered |
| [REB05] REB chips bio - sel de mer 35g | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Predicted 1u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [VID0009] Consigne casier | 6 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 36 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:04:53.167Z*
