# Rapport Backtest - Client LBF FRITERIE CENTRAL

## Contexte

- **Client** : LBF FRITERIE CENTRAL (ID: 3627)
- **Commande réelle** : S39891
- **Date commande** : 2025-10-23 19:14:56
- **Date cutoff système** : 2025-10-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,870 input + 1,027 output = 6,897 total


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
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 24.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 15.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0075] FILOU CHASSEUR  10 L | 8 | 7 | 1.0 | 14.3% | partial | Non | Non | LLM |
| [PF0077] FILOU PROVENCALE 5 L | 8 | 6 | 2.0 | 33.3% | partial | Non | Non | LLM |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 15 | 16 | 1.0 | 6.3% | partial | Non | Non | LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 10 | 7 | 3.0 | 42.9% | partial | Non | Non | LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 5 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 8u vs Médiane: 8u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 8u
- **Reel commande**: 7u
- **Erreur LLM**: 1u (14.3%)
- **Erreur Mediane**: 1u (14.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle historique montre une fréquence de commande environ tous les 60 à 70 jours. La dernière commande datant du 19 août 2025 (soit 64 jours avant la date actuelle), nous avons dépassé le seuil de 70% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes et historiques se situe à 8 unités (valeurs observées : 10, 8, 7, 6, 8, 8, 8, 10). Nous retenons cette valeur médiane stable pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 177 tokens
- **Total**: 1,164 tokens



</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 8u vs Médiane: 8u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 8u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 19/08/2025, soit 64 jours. L'historique N-1 montre une commande le 05/09/2024 suivie d'une période de consommation en fin d'année. Le cycle moyen constaté est d'environ 60-70 jours. Nous sommes dans la fenêtre critique de réapprovisionnement pour couvrir les besoins des 30 prochains jours (Replenishment Threshold Days). Le risque de rupture est réel. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes oscillent entre 8u et 10u. En appliquant la règle de la médiane sur l'historique récent et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 8u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 203 tokens
- **Total**: 1,210 tokens



</details>


<details>
<summary><strong>3. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 15u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 1u (6.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 60 à 70 jours. La dernière commande datant du 19 août 2025 (soit 64 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, présentant un risque de rupture imminent. En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 15 unités, correspondant à la médiane des commandes récentes et à la valeur historique la plus fréquente (mode) observée sur l'année précédente, tout en privilégiant la prudence face aux légères variations (15-18u).

**Tokens utilises pour cette prediction:**
- **Input**: 1,017 tokens
- **Output**: 158 tokens
- **Total**: 1,175 tokens



</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 10u vs Médiane: 10u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 7u
- **Erreur LLM**: 3u (42.9%)
- **Erreur Mediane**: 3u (42.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 70 à 80 jours entre les réapprovisionnements récents. La dernière commande datant du 19 août 2025 (soit 64 jours avant la date actuelle), nous atteignons 80% du cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). Bien que l'historique N-1 montre des volumes variables (5u à 10u), les deux dernières commandes de 2025 sont stables à 10u. En suivant la règle de la médiane sur l'historique récent et le principe de précaution B2B, une quantité de 10 unités est préconisée pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 991 tokens
- **Output**: 182 tokens
- **Total**: 1,173 tokens



</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 5u vs Médiane: 5u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 74 jours entre les deux dernières commandes (juin à août). Au 22 octobre, 64 jours se sont écoulés depuis la dernière livraison, ce qui représente environ 86% du cycle moyen. Le seuil de risque de 70% étant largement dépassé, un réapprovisionnement est nécessaire pour couvrir les 30 prochains jours. La quantité est fixée à 5 unités, correspondant à la médiane et à la constante observée sur l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 124 tokens
- **Total**: 1,014 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 08:57:17: 10u
- 2025-06-06 12:49:32: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 11:30:07: 7u
- 2024-07-10 07:37:25: 6u
- 2024-05-15 09:15:50: 8u
- 2024-03-14 13:45:12: 8u
- 2024-01-09 10:09:49: 8u
- 2023-11-15 10:38:18: 10u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 08:57:17: 10u
- 2025-06-06 12:49:32: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 11:30:07: 5u
- 2024-07-10 07:37:25: 2u
- 2024-05-15 09:15:50: 7u
- 2024-03-14 13:45:12: 10u
- 2024-01-25 12:25:39: 8u
- 2024-01-09 10:09:49: 10u
- 2023-11-15 10:38:18: 6u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>3. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 08:57:17: 15u
- 2025-06-26 09:17:33: 17u
- 2025-06-06 12:49:32: 18u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 11:30:07: 12u
- 2024-07-10 07:37:25: 15u
- 2024-05-15 09:15:50: 16u
- 2024-03-14 13:45:12: 15u
- 2024-01-09 10:09:49: 15u
- 2023-11-15 10:38:18: 18u

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 08:57:17: 10u
- 2025-06-06 12:49:32: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 11:30:07: 9u
- 2024-07-10 07:37:25: 5u
- 2024-05-15 09:15:50: 8u
- 2024-03-14 13:45:12: 8u
- 2024-01-09 10:09:49: 10u
- 2023-11-15 10:38:18: 5u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 08:57:17: 5u
- 2025-06-06 12:49:32: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 4u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0958] FILOU/LD TOMATO KETCHUP  10KG | 30 | Predicted 30u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:54.171Z*
