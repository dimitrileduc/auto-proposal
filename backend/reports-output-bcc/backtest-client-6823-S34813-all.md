# Rapport Backtest - Client ÖKORING HANDELS GMBH, Delivery Address

## Contexte

- **Client** : ÖKORING HANDELS GMBH, Delivery Address (ID: 6823)
- **Commande réelle** : S34813
- **Date commande** : 2025-02-11 07:34:37
- **Date cutoff système** : 2025-02-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 9,339 input + 1,322 output = 10,661 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 75.0% | 8 produits réels, 6 détectés |
| **F1-Score** | 70.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0027] MF Tarti Aubergine 250g  | 16 | 16 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 16 | 16 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 16 | 16 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 16 | 16 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | 16 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 16 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier (environ tous les 7 à 14 jours en janvier). La dernière commande datant du 28 janvier (soit 13 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. La quantité commandée est strictement constante à 16 unités sur toutes les dernières occurrences ainsi que sur l'historique N-1. En suivant la règle de la médiane et de la stabilité du cycle, une commande de 16 unités est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 1,014 tokens
- **Output**: 138 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>2. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier avec un intervalle moyen d'environ 10 à 14 jours sur les dernières occurrences. La dernière commande datant du 28 janvier (soit 13 jours avant la date actuelle), nous atteignons le seuil critique de réapprovisionnement pour couvrir les 30 prochains jours. La quantité est extrêmement stable à 16 unités sur toutes les commandes récentes et historiques. En suivant la règle de la médiane et de la rotation régulière, la quantité préconisée est de 16 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,013 tokens
- **Output**: 132 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
Le produit présente un cycle de commande très régulier avec une quantité constante de 16 unités. La dernière commande date du 28 janvier, soit il y a 13 jours. Le cycle moyen observé récemment est d'environ 7 à 10 jours (entre les deux dernières commandes) ou mensuel historiquement. Étant donné que nous sommes à 13 jours de la dernière commande et que le seuil de réapprovisionnement est de 30 jours, il existe un risque de rupture imminent selon le principe de précaution B2B. La quantité de 16 unités est systématique dans l'historique (médiane parfaite), elle est donc reconduite.

**Tokens utilises pour cette prediction:**
- **Input**: 1,014 tokens
- **Output**: 154 tokens
- **Total**: 1,168 tokens



</details>


<details>
<summary><strong>4. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande très régulier d'environ 21 à 35 jours. La dernière commande date du 28 janvier, soit il y a 13 jours. Avec un seuil de réapprovisionnement de 30 jours, la prochaine commande est attendue aux alentours du 18-25 février, ce qui entre dans l'horizon de prévision. Le risque de rupture est identifié selon le principe de précaution B2B. La quantité est fixée à 16 unités, correspondant à la constante stricte observée sur toutes les commandes récentes et historiques (médiane parfaite).

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 149 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>5. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence d'approvisionnement toutes les 2 à 3 semaines (dernières commandes les 07/01 et 21/01). Avec 20 jours écoulés depuis la dernière commande et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. Bien que l'historique N-1 affichait des volumes plus importants, la tendance actuelle est stabilisée à une quantité récurrente de 16 unités (médiane des commandes récentes, hors pic exceptionnel de décembre). En application du principe de précaution B2B et du respect de la médiane récente, une commande de 16 unités est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 1,163 tokens
- **Output**: 163 tokens
- **Total**: 1,326 tokens



</details>


<details>
<summary><strong>6. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : Le cycle de commande observé est de 14 jours (tous les mardis, une semaine sur deux). La dernière commande remonte au 21 janvier, soit 20 jours avant la date actuelle. Le délai depuis la dernière commande dépasse largement le cycle habituel et l'horizon de réapprovisionnement de 30 jours est largement entamé. Il existe un risque de rupture imminent. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une stabilité parfaite avec deux commandes de 16 unités. La médiane est de 16. Conformément à la règle de maintien des rotations régulières, la quantité préconisée est de 16 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 173 tokens
- **Total**: 1,060 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 10:24:58: 16u
- 2025-01-21 12:09:16: 16u
- 2025-01-07 12:44:00: 16u
- 2024-12-11 09:03:42: 16u
- 2024-12-02 07:02:52: 16u
- 2024-11-06 08:01:07: 16u
- 2024-10-08 11:14:50: 16u
- 2024-09-11 06:16:03: 16u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-06 14:18:11: 16u

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>2. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 10:24:58: 16u
- 2025-01-21 12:09:16: 16u
- 2025-01-07 12:44:00: 16u
- 2024-12-19 10:05:40: 16u
- 2024-12-11 09:03:42: 16u
- 2024-12-02 07:02:52: 16u
- 2024-11-06 08:01:07: 16u
- 2024-10-08 11:14:50: 16u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-06 14:18:11: 16u

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 10:24:58: 16u
- 2025-01-21 12:09:16: 16u
- 2024-12-19 10:05:40: 16u
- 2024-12-11 09:03:42: 16u
- 2024-12-02 07:02:52: 16u
- 2024-11-06 08:01:07: 16u
- 2024-10-08 11:14:50: 16u
- 2024-09-11 06:16:03: 16u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-06 14:18:11: 16u

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>4. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 10:24:58: 16u
- 2025-01-07 12:44:00: 16u
- 2024-12-11 09:03:42: 16u
- 2024-11-06 08:01:07: 16u
- 2024-10-08 11:14:50: 16u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-06 14:18:11: 16u

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>5. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-21 12:09:16: 16u
- 2025-01-07 12:44:00: 16u
- 2024-12-19 10:05:40: 32u
- 2024-12-11 09:03:42: 16u
- 2024-12-02 07:02:52: 16u
- 2024-11-06 08:01:07: 16u
- 2024-10-08 11:14:50: 16u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-06 14:18:11: 32u
- 2024-01-23 12:13:22: 48u
- 2023-12-05 10:30:11: 80u
- 2023-11-28 11:23:06: 48u
- 2023-11-15 14:57:10: 32u
- 2023-11-07 12:47:29: 32u
- 2023-10-25 07:38:40: 48u
- 2023-10-10 09:11:51: 48u
- 2023-09-19 12:20:46: 16u
- 2023-06-13 13:16:06: 16u

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>6. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-21 12:09:16: 16u
- 2025-01-07 12:44:00: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 16 | Predicted 16u but not ordered |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | Predicted 16u but not ordered |
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 16 | Predicted 16u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [VID0009] Consigne casier | 96 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 576 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:18:08.315Z*
