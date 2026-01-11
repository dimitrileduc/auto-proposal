# Rapport Backtest - Client D'ICI WEPION

## Contexte

- **Client** : D'ICI WEPION (ID: 60278)
- **Commande réelle** : S39701
- **Date commande** : 2025-10-21 07:43:33
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,914 input + 2,325 output = 15,239 total


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
| **MAE** | 0.86 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | 6 | 1.0 | 16.7% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | 6 | 1.0 | 16.7% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 5 | 2.0 | 40.0% | partial | Non | Non | LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 4 | 10 | 6.0 | 60.0% | partial | Non | Non | LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 1u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 35 jours entre chaque réapprovisionnement. La dernière commande datant du 01/10/2025 (il y a 19 jours), le risque de rupture se situe dans l'horizon des 30 jours du seuil de réapprovisionnement (Replenishment Threshold Days). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 5 unités, correspondant à la médiane et à la valeur la plus fréquente observée dans l'historique récent (4 commandes sur 5 à 5u).

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 149 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 23, 26 et 36 jours (moyenne ~28 jours). Depuis la dernière commande du 01/10/2025, 19 jours se sont écoulés, ce qui représente environ 68% du cycle moyen. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). En suivant la règle de la médiane des commandes récentes (3, 3, 2, 1, 6), la quantité retenue est de 3 unités pour maintenir le stock sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 143 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 28 jours entre les dernières commandes (23 jours entre les deux dernières). Avec 19 jours écoulés depuis la dernière commande du 01/10 et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (70% du cycle atteint). Le volume de commande est en légère croissance mais reste modéré. En appliquant la règle de la médiane sur l'historique récent (2, 2, 3, 3, 5), la valeur centrale est de 3 unités. Conformément au principe de précaution B2B et à la méthode de la médiane, une commande de 3 unités est préconisée pour couvrir les besoins du prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 177 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 1u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier d'environ 25 à 30 jours (08/07, 13/08, 08/09, 01/10). La dernière commande datant du 01/10 (soit 19 jours écoulés), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. La quantité est fixée à 5 unités, correspondant à la médiane stricte et à la valeur constante observée sur la majorité des commandes récentes, conformément à la règle de maintien des rotations régulières.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 151 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 25 à 30 jours (dernières commandes le 08/09 et le 01/10). Avec une dernière commande datant de 19 jours et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent dans l'horizon défini. En suivant la règle de la médiane des commandes récentes (3, 3, 5, 6, 5), la valeur médiane est de 5, mais compte tenu de la tendance récente à la baisse (3u sur les deux dernières commandes) et de la consigne de choisir la valeur la plus basse en cas de doute pour éviter le surstock, une quantité de 3 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 945 tokens
- **Output**: 174 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 01/10/2025, soit il y a 19 jours. Bien que le cycle historique soit long (environ 45-80 jours), le délai de réapprovisionnement de 30 jours nous place dans une fenêtre de risque. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un besoin est identifié pour éviter toute rupture. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u, 1u et un pic à 3u. Conformément aux règles, les pics exceptionnels sont écartés et la médiane est privilégiée. La médiane des commandes récentes est de 1u. En cas de doute entre 1 et 3, la valeur la plus basse est choisie pour ne pas surestimer le stock de sécurité.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 210 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>7. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Le cycle moyen entre les dernières commandes est d'environ 25 jours. La dernière commande datant du 01/10 (soit 19 jours), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En suivant le principe de précaution B2B et la règle des 70% du cycle, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et au volume des commandes les plus récentes pour maintenir la rotation actuelle.

**Tokens utilises pour cette prediction:**
- **Input**: 930 tokens
- **Output**: 122 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>8. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle moyen entre les deux dernières commandes est de 23 jours. La dernière commande date du 01/10/2025, soit il y a 19 jours. Le seuil de réapprovisionnement étant de 30 jours, le risque de rupture est imminent (19 jours écoulés représentent plus de 80% du cycle récent). ÉTAPE 2 : L'historique récent montre des quantités très faibles (1u et 2u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale pour éviter le surstock tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 156 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>9. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande irrégulier (environ 49 jours entre mai et août, puis 49 jours entre août et octobre). La dernière commande date du 01/10/2025, soit 19 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 49 jours d'ici la fin de la période de vigilance. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. La médiane et le mode des commandes récentes sont strictement de 1 unité. Conformément à la règle sur les rotations faibles, la quantité de 1u est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 181 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>10. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 10u
- **Erreur LLM**: 6u (60.0%)
- **Erreur Mediane**: 6u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen entre les commandes est d'environ 35 jours. La dernière commande date du 01/10/2025, soit il y a 19 jours. Avec un seuil de réapprovisionnement de 30 jours, l'horizon d'analyse s'étend jusqu'au 19/11/2025. À cette date, 49 jours se seront écoulés depuis la dernière commande, ce qui dépasse largement le cycle habituel (140% du cycle). Le risque de rupture est avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre les quantités suivantes : 6, 2, 3, 4, 5. La médiane de ces commandes est de 4 unités. Conformément à la règle de privilégier la médiane pour lisser les variations, la quantité retenue est de 4.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 217 tokens
- **Total**: 1,160 tokens



</details>


<details>
<summary><strong>11. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/09/2025, soit 42 jours avant la date actuelle. Bien que le cycle historique soit irrégulier (111 jours entre les deux premières commandes), le délai actuel dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B face à un cycle incertain, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément aux règles de rotation faible et de choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 177 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>12. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles irréguliers (26 jours, puis 85 jours). La dernière commande remonte au 08/09/2025, soit 42 jours avant la date actuelle. Ce délai dépasse largement le seuil de réapprovisionnement de 30 jours et représente un risque de rupture imminent selon le principe de précaution B2B. Concernant la quantité, l'historique récent affiche des volumes très faibles (1u, 1u, 2u). Conformément aux règles de gestion des rotations faibles, la médiane de 1 unité est retenue pour éviter un surstockage inutile tout en maintenant la disponibilité du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 154 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>13. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles irréguliers (26 jours, puis 85 jours), ce qui impose l'application du principe de précaution B2B. La dernière commande datant du 08/09/2025 (soit 42 jours avant la date actuelle), le risque de rupture est jugé probable dans l'horizon des 30 jours de réapprovisionnement. Conformément à la règle de la médiane sur l'historique récent (1u, 1u, 2u), la quantité retenue est de 1 unité, privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 156 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>14. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août 2025, soit 68 jours. L'intervalle précédent était de 85 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 98 jours sans commande à l'horizon du seuil, ce qui dépasse le cycle moyen observé. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane des commandes récentes est de 1. On maintient cette quantité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 158 tokens
- **Total**: 1,048 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:30:34: 5u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 5u
- 2025-07-08 06:24:26: 5u
- 2025-05-20 10:52:20: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:30:34: 3u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 2u
- 2025-07-08 06:24:26: 1u
- 2025-05-20 10:52:20: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:30:34: 5u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 3u
- 2025-07-08 06:24:26: 2u
- 2025-05-20 10:52:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:30:34: 5u
- 2025-09-08 10:27:39: 5u
- 2025-08-13 06:26:39: 5u
- 2025-07-08 06:24:26: 6u
- 2025-05-20 10:52:20: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:30:34: 3u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 5u
- 2025-07-08 06:24:26: 6u
- 2025-05-20 10:52:20: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:30:34: 3u
- 2025-07-08 06:24:26: 1u
- 2025-05-20 10:52:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:30:34: 2u
- 2025-09-08 10:27:39: 2u
- 2025-08-13 06:26:39: 1u
- 2025-05-20 10:52:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:30:34: 1u
- 2025-09-08 10:27:39: 2u
- 2025-05-20 10:52:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:30:34: 1u
- 2025-08-13 06:26:39: 1u
- 2025-05-20 10:52:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:30:34: 6u
- 2025-09-08 10:27:39: 2u
- 2025-08-13 06:26:39: 3u
- 2025-07-08 06:24:26: 4u
- 2025-05-20 10:52:20: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>11. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 10:27:39: 2u
- 2025-05-20 10:52:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 10:27:39: 2u
- 2025-08-13 06:26:39: 1u
- 2025-05-20 10:52:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 10:27:39: 2u
- 2025-08-13 06:26:39: 1u
- 2025-05-20 10:52:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 06:26:39: 1u
- 2025-05-20 10:52:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:55.302Z*
