# Rapport Backtest - Client D'ICI NANINNE

## Contexte

- **Client** : D'ICI NANINNE (ID: 34498)
- **Commande réelle** : S39519
- **Date commande** : 2025-10-03 06:18:15
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,754 input + 2,514 output = 15,268 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 14 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.79 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 95.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 152.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 95.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 5 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 8 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 5 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 4 | 1 | 3.0 | 300.0% | partial | Non | Non | LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 10 | 2 | 8.0 | 400.0% | partial | Non | Non | LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 10 | 4 | 6.0 | 150.0% | partial | Non | Non | LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 4 | 1 | 3.0 | 300.0% | partial | Non | Non | LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 6 | 1 | 5.0 | 500.0% | partial | Non | Non | LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles d'environ 50 à 60 jours (juin-juillet, juillet-septembre). La dernière commande datant du 1er septembre (il y a 31 jours), nous entrons dans la fenêtre de risque de rupture compte tenu du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent présente des volumes de 6u et 8u. La médiane et la valeur la plus basse de la tendance régulière étant de 6u, cette quantité est retenue pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 160 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 9u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 9u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 5u (125.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/09/2025, soit 31 jours écoulés. Le cycle moyen observé est d'environ 45-50 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 70% du cycle habituel. ÉTAPE 2 : Estimation quantité. L'historique montre une tendance à la baisse (17u, 10u, puis 4u). Conformément à la règle de prudence et au respect de la tendance baissière, la quantité retenue est la plus basse du cycle récent pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 163 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 5u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/09/2025, soit 31 jours écoulés. Le cycle moyen observé est d'environ 45-50 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (31 jours écoulés + 30 jours de seuil > cycle moyen). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 3u, 6u et 5u. La médiane de ces valeurs est de 5u. Conformément aux règles, nous retenons la médiane pour stabiliser le stock sans surévaluer.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 179 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 8u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 8u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (Détection) : La dernière commande date du 01/09/2025, soit 31 jours écoulés. Le cycle moyen observé est d'environ 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car la prochaine commande théorique devrait intervenir sous 14 jours. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 (Quantité) : L'historique récent montre des commandes de 7u, 6u et un pic à 18u. La valeur de 18u est traitée comme un événement ponctuel. La médiane des commandes récentes se situe entre 6u et 7u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 6u.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 210 tokens
- **Total**: 1,122 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 8u vs Médiane: 8u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 8u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 54 jours (64 jours entre juin et juillet, 54 jours entre juillet et septembre). La dernière commande date du 01/09/2025, soit il y a 31 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de risque de rupture (31 + 30 = 61 jours, ce qui dépasse le cycle moyen de 54 jours). Le besoin est donc confirmé par précaution. ÉTAPE 2 : Estimation quantité. L'historique récent montre des quantités de 10, 8 et 7 unités. La médiane de ces commandes est de 8 unités. Conformément à la règle de privilégier la médiane et de ne pas surestimer en cas de doute, la quantité retenue est de 8.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 208 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 5u vs Médiane: 5u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 01/09/2025, soit 31 jours écoulés. Le cycle moyen observé est d'environ 45-50 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture à horizon J+30 est élevé (total de 61 jours sans commande). Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : L'historique récent montre des quantités de 3, 5 et 8 unités. La médiane de ces commandes est de 5 unités. Conformément aux règles, on retient cette valeur médiane pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 163 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>7. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 36 jours puis 54 jours. Depuis la dernière commande du 01/09/2025, 31 jours se sont écoulés, ce qui dépasse 70% du cycle moyen estimé (environ 45 jours). Le risque de rupture est réel dans l'horizon des 30 jours (Replenishment Threshold). Pour la quantité, l'historique récent montre une tendance à la baisse (10u, 6u, 4u). En appliquant la règle de la médiane des commandes récentes (6u) mais en privilégiant la valeur la plus basse en cas de doute ou de tendance baissière marquée pour éviter le surstock, une commande de 4 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 175 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 4u vs Médiane: 6u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 6u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 5u (500.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'intervalle entre les commandes précédentes est d'environ 36 à 54 jours (moyenne ~45 jours). La dernière commande date du 01/09, soit 31 jours écoulés. Le seuil de réapprovisionnement étant de 30 jours, nous entrons dans la fenêtre de risque de rupture (70% du cycle atteint). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une tendance à la baisse (10u, 7u, 4u). En suivant la règle de respecter la tendance baissière et de privilégier la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 189 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 10u vs Médiane: 6u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 6u
- **Reel commande**: 2u
- **Erreur LLM**: 8u (400.0%)
- **Erreur Mediane**: 4u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique montre des commandes environ tous les 30 à 60 jours (juin, juillet, septembre). La dernière commande date du 01/09, soit il y a 31 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock pour éviter une rupture. ÉTAPE 2 : Estimation quantité. Les quantités récentes sont de 4u, 10u et 11u. La médiane de cet historique est de 10u. La commande de 4u semble être une baisse ponctuelle ou un ajustement, tandis que 10u et 11u représentent le volume habituel. En suivant la règle de la médiane et de la précaution B2B, une quantité de 10u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 914 tokens
- **Output**: 202 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>10. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 10u vs Médiane: 5u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 5u
- **Reel commande**: 4u
- **Erreur LLM**: 6u (150.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse du cycle montre des intervalles de 36 et 54 jours. La dernière commande date du 01/09/2025, soit 31 jours écoulés. Le seuil de réapprovisionnement étant de 30 jours, nous entrons dans la fenêtre critique de rupture potentielle (31 jours écoulés + 30 jours de seuil = 61 jours, ce qui dépasse le cycle moyen constaté). Le risque de rupture est réel. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 10u, 10u et 4u. La médiane des commandes historiques est de 10u. Conformément à la règle de maintien des volumes réguliers et au principe de précaution B2B, la quantité retenue est de 10u.

**Tokens utilises pour cette prediction:**
- **Input**: 915 tokens
- **Output**: 206 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>11. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 4u vs Médiane: 5u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 3u (150.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 36 et 54 jours (moyenne de 45 jours). Depuis la dernière commande du 01/09/2025, 31 jours se sont écoulés, ce qui représente environ 70% du cycle moyen. Le risque de rupture est donc identifié dans l'horizon des 30 jours (Replenishment Threshold). Pour la quantité, l'historique récent présente des valeurs de 4u, 8u et 4u. La médiane de 4u est retenue, conformément à la règle de prudence privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 156 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>12. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 4u vs Médiane: 5u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 4u (400.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles d'environ 36 à 54 jours. La dernière commande datant du 1er septembre (il y a 31 jours), nous atteignons 86% du cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes (4, 6, 6) est de 6, mais la commande la plus récente montre une baisse à 4 unités. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de tendance à la baisse, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 175 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>13. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 6u vs Médiane: 6u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 1u
- **Erreur LLM**: 5u (500.0%)
- **Erreur Mediane**: 5u (500.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 36 et 54 jours (moyenne de 45 jours). Depuis la dernière commande du 01/09/2025, 31 jours se sont écoulés, ce qui représente environ 70% du cycle moyen. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. En suivant la règle de la médiane des quantités récentes (6, 10, 6), la quantité retenue est de 6 unités, privilégiant la valeur la plus basse et la plus fréquente pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 144 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>14. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes récentes est d'environ 45 jours. La dernière commande date du 01/09/2025, soit il y a 31 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (31 + 30 = 61 jours, ce qui dépasse largement le cycle habituel). ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 4u, 4u et 8u. La médiane est de 4u. Conformément à la règle de privilégier la médiane et la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 4u.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 184 tokens
- **Total**: 1,093 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 6u
- 2025-07-09 11:05:21: 8u
- 2025-06-03 06:12:08: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u
- 2025-06-03 06:12:08: 17u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 3u
- 2025-07-09 11:05:21: 6u
- 2025-06-03 06:12:08: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 7u
- 2025-07-09 11:05:21: 6u
- 2025-06-03 06:12:08: 18u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 7u
- 2025-07-09 11:05:21: 8u
- 2025-06-03 06:12:08: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 3u
- 2025-07-09 11:05:21: 5u
- 2025-06-03 06:12:08: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>7. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 6u
- 2025-06-03 06:12:08: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 7u
- 2025-06-03 06:12:08: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u
- 2025-06-03 06:12:08: 11u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u
- 2025-06-03 06:12:08: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>11. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 8u
- 2025-06-03 06:12:08: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 6u
- 2025-06-03 06:12:08: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 6u
- 2025-07-09 11:05:21: 10u
- 2025-06-03 06:12:08: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 4u
- 2025-06-03 06:12:08: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:43.525Z*
