# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S40119
- **Date commande** : 2025-11-04 13:47:12
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 24
- **Tokens**: 22,266 input + 3,855 output = 26,121 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.2% | 23 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 78.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.13 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 45.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 60.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -8.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

---

## True Positives (15)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 6 | 4.0 | 66.7% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (15 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 20 jours. La dernière commande datant du 14 octobre (soit 20 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Concernant la quantité, bien qu'un pic à 4u ait été observé en septembre, la majorité des commandes (5 sur 7) sont de 1u. En appliquant la règle de la médiane et le principe de prudence sur les faibles rotations, une commande de 1u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 143 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 22 jours. La dernière commande remonte au 14 octobre, soit 20 jours avant la date actuelle. Étant donné que nous atteignons 90% du cycle moyen et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est imminent. La rotation est faible et régulière, avec une médiane de 1 unité sur les commandes récentes. En suivant le principe de précaution B2B et la règle de la médiane pour les faibles rotations, une commande de 1 unité est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 138 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>3. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 26 jours. La dernière commande datant du 14 octobre (soit 20 jours avant la date actuelle), nous entrons dans la fenêtre de risque de rupture compte tenu du seuil de réapprovisionnement de 30 jours. Le principe de précaution B2B s'applique ici car nous atteignons plus de 70% du cycle habituel. Concernant la quantité, les volumes oscillent strictement entre 2 et 3 unités. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage, la médiane basse de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 962 tokens
- **Output**: 160 tokens
- **Total**: 1,122 tokens



</details>


<details>
<summary><strong>4. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours (intervalles de 34, 33, 35 et 20 jours). La dernière commande datant du 14 octobre (soit 20 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 2 unités, correspondant à la valeur basse de la médiane historique récente (alternance entre 2u et 3u), afin d'éviter le surstockage tout en maintenant la rotation habituelle.

**Tokens utilises pour cette prediction:**
- **Input**: 944 tokens
- **Output**: 162 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>5. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 32 jours entre chaque réapprovisionnement. La dernière commande datant du 14 octobre (soit il y a 20 jours), le prochain besoin est estimé sous 12 jours, ce qui entre dans l'horizon de 30 jours du seuil de réapprovisionnement. Le cycle étant régulier avec une légère tendance à la baisse ou stabilisation, la médiane des quantités récentes (2u) est retenue pour éviter le surstockage, conformément au principe de précaution B2B.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 131 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>6. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 20 jours. La dernière commande datant du 14 octobre (soit 20 jours avant la date actuelle), nous sommes à 100% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En appliquant la règle de la médiane sur les quantités récentes (3, 3, 1, 3, 2, 2, 3), la valeur médiane est de 3 unités. Cette quantité permet de maintenir le stock sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 977 tokens
- **Output**: 143 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>7. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier d'environ 60 jours (63 jours entre juin et août, 67 jours entre août et octobre). La dernière commande date du 14 octobre, soit il y a 20 jours. Avec un seuil de réapprovisionnement de 30 jours, nous couvrons l'horizon jusqu'au 3 décembre (soit 50 jours après la dernière commande). Bien que le cycle moyen ne soit pas encore atteint, le principe de précaution B2B s'applique car le risque de rupture se situe dans la fenêtre de réapprovisionnement. La quantité est fixée à 3 unités, correspondant à la médiane et à la constante parfaite observée sur toutes les commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 174 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>8. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 28 jours entre chaque réapprovisionnement. La dernière commande datant du 14 octobre (il y a 20 jours), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Le cycle est relativement régulier avec une tendance stable. En appliquant la règle de la médiane sur l'historique récent (valeurs : 1, 2, 2, 2, 3, 3), la quantité médiane est de 2 unités. Conformément aux principes de précaution B2B et de stabilité des stocks, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 159 tokens
- **Total**: 1,117 tokens



</details>


<details>
<summary><strong>9. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 25 à 30 jours. La dernière commande datant du 14 octobre (il y a 20 jours), le risque de rupture est imminent dans l'horizon des 30 jours du seuil de réapprovisionnement. Le cycle est régulier avec une quantité stabilisée à 2 unités sur les quatre dernières occurrences. En appliquant la règle de la médiane sur les commandes récentes (2u) et en privilégiant la stabilité du stock pour ce produit à faible rotation, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 140 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>10. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande moyen d'environ 50 jours (47 jours entre juillet et août, 55 jours entre août et octobre). La dernière commande date du 14 octobre, soit il y a 20 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 50 jours d'écart dans 30 jours. Le risque de rupture est réel durant cette période. ÉTAPE 2 : Estimation quantité. Les quantités récentes sont de 4u, 4u et 2u. La médiane est de 4u, mais la dernière commande montre une baisse à 2u. En application de la règle de précaution B2B privilégiant la valeur la plus basse en cas de doute ou de tendance à la baisse, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 200 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>11. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 4u (66.7%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 47 et 55 jours. La dernière commande datant du 14 octobre (il y a 20 jours), le prochain besoin est estimé sous 25 à 35 jours, ce qui entre dans l'horizon du seuil de réapprovisionnement de 30 jours (principe de précaution B2B). Concernant le volume, bien que les commandes précédentes fussent de 4u, la commande la plus récente est de 2u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute ou de tendance à la baisse, une quantité de 2u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 161 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique montre un cycle de commande d'environ 50 jours (entre juillet et septembre). Au 3 novembre, 54 jours se sont écoulés depuis la dernière commande du 10 septembre. Ce délai dépasse largement le cycle moyen et le seuil de 70%, indiquant un risque de rupture imminent ou un besoin de réapprovisionnement immédiat. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 4u et 6u. En appliquant la règle de la médiane et le principe de prudence B2B (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 169 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>13. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 18 et 29 jours sur les dernières occurrences. La dernière commande remontant au 10 septembre (soit 54 jours), le délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours, ce qui indique un besoin immédiat par principe de précaution B2B. Pour la quantité, bien qu'une légère tendance à la hausse soit visible (de 1u à 3u), la médiane des commandes récentes se situe à 1u et la moyenne à 1.6u. En application de la règle de prudence privilégiant la valeur basse en cas de doute sur une rotation irrégulière, une quantité de 2 unités est préconisée pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 948 tokens
- **Output**: 176 tokens
- **Total**: 1,124 tokens



</details>


<details>
<summary><strong>14. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 32 jours (33 jours entre les deux dernières, 35 jours entre les précédentes). Depuis la dernière commande du 10 septembre, 54 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture avéré. Pour la quantité, bien que l'historique varie entre 2u et 4u, les deux commandes les plus récentes sont de 4u. En suivant la règle de la médiane sur les commandes récentes (2, 2, 4, 4), la valeur se situe à 3 ou 4 ; par précaution B2B et pour maintenir le volume des dernières rotations, la quantité de 4u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 189 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>15. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 23 jours (12 jours entre les deux dernières, 35 jours entre les précédentes). La dernière commande remonte au 20 août, soit plus de 70 jours sans activité. Bien que le délai dépasse largement le cycle habituel, le principe de précaution B2B impose de prévoir un réapprovisionnement pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, d'autant plus que le cycle est irrégulier. La quantité retenue est de 2 unités, correspondant à la médiane et au mode des commandes récentes (2u, 1u, 2u), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 915 tokens
- **Output**: 164 tokens
- **Total**: 1,079 tokens



</details>




### Donnees d'Input LLM (15 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 1u
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 2u
- 2025-08-08 08:17:38: 1u
- 2025-07-22 11:20:28: 1u
- 2025-07-04 13:37:28: 1u
- 2025-06-11 07:12:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 1u
- 2025-09-10 06:04:57: 1u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 1u
- 2025-07-04 13:37:28: 1u
- 2025-06-11 07:12:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u
- 2025-07-22 11:20:28: 2u
- 2025-07-04 13:37:28: 2u
- 2025-06-11 07:12:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u
- 2025-07-04 13:37:28: 2u
- 2025-06-11 07:12:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 2u
- 2025-06-11 07:12:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 3u
- 2025-07-22 11:20:28: 2u
- 2025-07-04 13:37:28: 2u
- 2025-06-11 07:12:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-08-08 08:17:38: 3u
- 2025-06-11 07:12:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 2u
- 2025-07-04 13:37:28: 1u
- 2025-06-11 07:12:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 2u
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 2u
- 2025-07-04 13:37:28: 1u
- 2025-06-11 07:12:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 2u
- 2025-08-20 11:25:33: 4u
- 2025-07-04 13:37:28: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>11. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 10:33:03: 2u
- 2025-08-20 11:25:33: 4u
- 2025-07-04 13:37:28: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:04:57: 6u
- 2025-07-22 11:20:28: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>13. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 1u
- 2025-07-04 13:37:28: 1u
- 2025-06-11 07:12:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-08 08:17:38: 4u
- 2025-07-04 13:37:28: 2u
- 2025-06-11 07:12:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>15. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:25:33: 2u
- 2025-08-08 08:17:38: 1u
- 2025-07-04 13:37:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | Predicted 4u but not ordered |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | Predicted 2u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Predicted 2u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:21.745Z*
