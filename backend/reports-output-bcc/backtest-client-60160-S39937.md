# Rapport Backtest - Client ASIE A TIK

## Contexte

- **Client** : ASIE A TIK (ID: 60160)
- **Commande réelle** : S39937
- **Date commande** : 2025-10-27 10:58:28
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 7,313 input + 1,522 output = 8,835 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 8 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 5.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 55.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 67.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 10 | 20 | 10.0 | 50.0% | partial | Non | Non | LLM |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 10 | 5 | 5.0 | 100.0% | partial | Non | Non | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 10 | 5 | 5.0 | 100.0% | partial | Non | Non | LLM |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 8 | 10 | 2.0 | 20.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 20u
- **Erreur LLM**: 10u (50.0%)
- **Erreur Mediane**: 10u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse de l'historique récent montre un cycle de commande moyen d'environ 33 jours. La dernière commande date du 01/10/2025, soit il y a 25 jours. Ce délai représente 75% du cycle moyen, ce qui dépasse le seuil de risque de 70%. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont : 10, 8, 10, 6, 20. La valeur de 20u est un pic exceptionnel à écarter. La médiane des commandes récentes (6, 8, 10, 10) se situe à 9u. En suivant la règle de précaution B2B et la récurrence du chiffre 10 dans l'historique, la quantité de 10u est retenue pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 238 tokens
- **Total**: 1,191 tokens



</details>


<details>
<summary><strong>2. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM: 10u vs Médiane: 6u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 6u
- **Reel commande**: 5u
- **Erreur LLM**: 5u (100.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION) : L'analyse de l'historique récent montre un cycle de commande moyen d'environ 42 jours (intervalle de 42 jours entre les deux dernières commandes). La dernière commande date du 01/10/2025, soit il y a 25 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteindrons le cycle moyen dans les 17 prochains jours. ÉTAPE 2 (QUANTITÉ) : Les quantités récentes sont 10, 10, 1, 6. La médiane de ces commandes est de 8u, mais la tendance récente sur les deux dernières commandes majeures est de 10u. En suivant la règle de précaution B2B et la stabilité des volumes récents les plus significatifs, la quantité de 10u est retenue pour couvrir la période à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 929 tokens
- **Output**: 216 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>3. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 5u
- **Erreur LLM**: 5u (100.0%)
- **Erreur Mediane**: 5u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/10/2025, soit 25 jours avant la date actuelle. Le cycle moyen constaté entre les commandes précédentes est d'environ 35 jours (42j, 13j, 31j, 34j). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (25 jours écoulés ≥ 70% du cycle moyen). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre les quantités suivantes : 12, 8, 15, 10. La médiane de ces commandes est de 11. En suivant la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 10 unités (correspondant également à la commande de juin).

**Tokens utilises pour cette prediction:**
- **Input**: 949 tokens
- **Output**: 227 tokens
- **Total**: 1,176 tokens



</details>


<details>
<summary><strong>4. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM: 8u vs Médiane: 7u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 7u
- **Reel commande**: 10u
- **Erreur LLM**: 2u (20.0%)
- **Erreur Mediane**: 3u (30.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 26 jours (intervalles de 34, 31 et 13 jours). La dernière commande remonte au 20 août 2025, soit 67 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture critique ou un besoin imminent. En suivant le principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 8 unités, ce qui correspond à la médiane et à la valeur la plus fréquente des commandes récentes (8, 6, 8, 8).

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 162 tokens
- **Total**: 1,090 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:15:18: 10u
- 2025-08-20 11:40:57: 8u
- 2025-08-07 09:07:10: 10u
- 2025-07-07 11:38:49: 6u
- 2025-06-03 07:16:03: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>2. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:15:18: 10u
- 2025-08-20 11:40:57: 10u
- 2025-08-07 09:07:10: 1u
- 2025-06-03 07:16:03: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>3. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:15:18: 12u
- 2025-08-20 11:40:57: 8u
- 2025-08-07 09:07:10: 0u
- 2025-07-07 11:38:49: 15u
- 2025-06-03 07:16:03: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>4. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:40:57: 8u
- 2025-08-07 09:07:10: 6u
- 2025-07-07 11:38:49: 8u
- 2025-06-03 07:16:03: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 10u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 8 | Predicted 8u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 5 | Predicted 5u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 5 | Predicted 5u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 8 | Predicted 8u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:06.887Z*
