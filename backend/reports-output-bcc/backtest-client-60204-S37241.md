# Rapport Backtest - Client BIO VRAC SCHAERBEEK

## Contexte

- **Client** : BIO VRAC SCHAERBEEK (ID: 60204)
- **Commande réelle** : S37241
- **Date commande** : 2025-06-04 07:55:49
- **Date cutoff système** : 2025-06-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 10,911 input + 1,947 output = 12,858 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 6 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 23.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -8.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 28 à 33 jours (06/02, 06/03, 10/04, 08/05). La dernière commande datant du 08/05 (soit 26 jours avant le 03/06), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. En appliquant la règle de la médiane sur l'historique récent (2, 4, 5, 5, 6), la valeur centrale est de 5u. Cependant, conformément à la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute sur une tendance (la dernière commande étant de 2u), une quantité de 4u est préconisée pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 202 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 28 à 35 jours (dernières commandes le 06/02, 06/03, 10/04, 08/05). Au 03/06, cela fait 26 jours depuis la dernière commande, ce qui place le prochain besoin à l'intérieur de la fenêtre de réapprovisionnement de 30 jours. En suivant la règle de précaution B2B, un risque de rupture est identifié. La quantité est déterminée par la médiane des commandes récentes (1, 3, 2, 1, 4), soit 2 unités. Ce volume permet de maintenir le stock sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 945 tokens
- **Output**: 169 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 28 à 34 jours (moyenne de 31 jours). La dernière commande datant du 08/05/2025, soit il y a 26 jours, le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Le cycle est stable et prévisible. Conformément à la règle de la médiane sur l'historique récent (4, 5, 6, 6, 7), la quantité recommandée est de 6 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 144 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 28 à 35 jours (intervalles de 28, 35, 32 et 28 jours). La dernière commande datant du 08/05/2025 (il y a 26 jours), nous atteignons 74% du cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément au principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, l'historique récent oscille entre 2u et 4u ; la médiane et la règle de prudence en cas de doute imposent de retenir la valeur basse de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 176 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>5. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 28 à 33 jours (06/02, 06/03, 10/04, 08/05). La dernière commande datant du 08/05, soit il y a 26 jours, le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B, une commande est nécessaire. La quantité est déterminée par la médiane des commandes récentes (2, 3, 3, 2, 5), soit 3 unités. On ignore le pic exceptionnel de 5 unités pour privilégier la stabilité du stock.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 170 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande régulier d'environ 28 à 32 jours (commandes mensuelles chaque premier ou deuxième jeudi du mois). La dernière commande date du 08/05/2025, soit il y a 26 jours. Étant donné que nous atteignons 86% du cycle moyen et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est imminent. En application du principe de précaution B2B et de la règle de la médiane sur les quantités récentes (3, 4, 4, 5, 6), la quantité retenue est de 4 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 165 tokens
- **Total**: 1,108 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:49:24: 2u
- 2025-04-10 06:44:26: 5u
- 2025-03-06 07:40:58: 4u
- 2025-02-06 10:28:34: 6u
- 2025-01-16 08:05:25: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:49:24: 1u
- 2025-04-10 06:44:26: 3u
- 2025-03-06 07:40:58: 2u
- 2025-02-06 10:28:34: 1u
- 2025-01-16 08:05:25: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:49:24: 7u
- 2025-04-10 06:44:26: 6u
- 2025-03-06 07:40:58: 5u
- 2025-02-06 10:28:34: 4u
- 2025-01-16 08:05:25: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:49:24: 2u
- 2025-04-10 06:44:26: 4u
- 2025-03-06 07:40:58: 2u
- 2025-02-06 10:28:34: 4u
- 2025-01-16 08:05:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:49:24: 5u
- 2025-04-10 06:44:26: 2u
- 2025-03-06 07:40:58: 3u
- 2025-02-06 10:28:34: 3u
- 2025-01-16 08:05:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:49:24: 4u
- 2025-04-10 06:44:26: 5u
- 2025-03-06 07:40:58: 3u
- 2025-02-06 10:28:34: 4u
- 2025-01-16 08:05:25: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:27.070Z*
