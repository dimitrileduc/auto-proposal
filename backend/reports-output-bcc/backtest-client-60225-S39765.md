# Rapport Backtest - Client BONBON CARAMEL

## Contexte

- **Client** : BONBON CARAMEL (ID: 60225)
- **Commande réelle** : S39765
- **Date commande** : 2025-10-16 11:39:34
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,387 input + 1,187 output = 7,574 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 6 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 90.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -40.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 11 septembre, soit 34 jours avant la date actuelle. Le cycle moyen constaté est d'environ 32 jours. Le seuil de réapprovisionnement étant de 30 jours, le risque de rupture est imminent ou déjà avéré. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 2, 3, 6 et 4 unités. La médiane de ces commandes est de 3,5. En application de la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 155 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>2. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant de 14 à 51 jours. La dernière commande remonte au 11 septembre, soit 34 jours avant la date actuelle. Ce délai dépasse 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes (2, 3, 4, 6) se situe entre 3 et 4, mais la tendance récente montre une baisse (2u et 3u). Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de tendance baissière, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 184 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 14, 50 et 36 jours. Depuis la dernière commande du 11 septembre, 34 jours se sont écoulés. Ce délai dépasse 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 3 unités, correspondant à la médiane des commandes récentes (2, 3, 4, 6), en privilégiant la valeur basse pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 154 tokens
- **Total**: 1,080 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 11 septembre, soit 34 jours écoulés. Le cycle moyen observé est d'environ 32 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des quantités de 2, 3, 6 et 4 unités. La médiane se situe à 3,5 unités, mais la tendance récente est à la baisse (6 -> 4 -> 3 -> 2). En application de la règle de précaution B2B privilégiant la valeur la plus basse en cas de doute ou de tendance baissière, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 178 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

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
La dernière commande remonte au 11 septembre, soit 34 jours avant la date actuelle. Le cycle moyen entre les commandes précédentes est d'environ 32 jours (36 jours entre juin et août, 36 jours entre août et septembre). Le délai actuel dépasse déjà ce cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En suivant la règle de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes (2, 3, 4, 6) est de 3.5, mais la tendance est à la baisse (6u -> 4u -> 3u -> 2u). Conformément aux consignes de privilégier la valeur la plus basse en cas de doute et de respecter la tendance baissière, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 202 tokens
- **Total**: 1,128 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:45:25: 2u
- 2025-08-06 06:58:38: 3u
- 2025-06-17 07:17:19: 6u
- 2025-06-03 12:06:49: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:45:25: 2u
- 2025-08-06 06:58:38: 3u
- 2025-06-17 07:17:19: 6u
- 2025-06-03 12:06:49: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:45:25: 2u
- 2025-08-06 06:58:38: 3u
- 2025-06-17 07:17:19: 6u
- 2025-06-03 12:06:49: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:45:25: 2u
- 2025-08-06 06:58:38: 3u
- 2025-06-17 07:17:19: 6u
- 2025-06-03 12:06:49: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:45:25: 2u
- 2025-08-06 06:58:38: 3u
- 2025-06-17 07:17:19: 6u
- 2025-06-03 12:06:49: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:26.275Z*
