# Rapport Backtest - Client SODEXO SAFRAN BE3723

## Contexte

- **Client** : SODEXO SAFRAN BE3723 (ID: 60539)
- **Commande réelle** : S40028
- **Date commande** : 2025-10-30 13:17:36
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 9,902 input + 1,888 output = 11,790 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.5% | 11 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 70.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 28.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 5 | 7 | 2.0 | 28.6% | partial | Non | Non | LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 5 | 7 | 2.0 | 28.6% | partial | Non | Non | LLM |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 5 | 7 | 2.0 | 28.6% | partial | Non | Non | LLM |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 5 | 7 | 2.0 | 28.6% | partial | Non | Non | LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 5 | 7 | 2.0 | 28.6% | partial | Non | Non | LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 5 | 7 | 2.0 | 28.6% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM: 5u vs Médiane: 5u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 7u
- **Erreur LLM**: 2u (28.6%)
- **Erreur Mediane**: 2u (28.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 31 et 58 jours (moyenne ~45 jours). Depuis la dernière commande du 01/10/2025, 28 jours se sont écoulés, ce qui représente plus de 60% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 5 unités, correspondant à la médiane des commandes récentes (5, 6, 10) et à la valeur la plus basse pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 162 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>2. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 5u vs Médiane: 5u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 7u
- **Erreur LLM**: 2u (28.6%)
- **Erreur Mediane**: 2u (28.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 01/10/2025, soit 28 jours. Le cycle moyen observé est d'environ 45-60 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (28 jours écoulés + 30 jours de seuil = 58 jours, ce qui dépasse ou égale le cycle habituel). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 (QUANTITÉ) : L'historique récent montre des commandes de 10u, 6u et 5u. La médiane est de 6u, mais la tendance est à la baisse (10 > 6 > 5). Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de tendance baissière, la quantité retenue est de 5u.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 222 tokens
- **Total**: 1,135 tokens



</details>


<details>
<summary><strong>3. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM: 5u vs Médiane: 5u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 7u
- **Erreur LLM**: 2u (28.6%)
- **Erreur Mediane**: 2u (28.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 01/10/2025, soit il y a 28 jours. L'intervalle entre les deux commandes précédentes était de 90 jours, mais avec un seuil de réapprovisionnement de 30 jours et une rotation irrégulière, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre deux commandes (5u et 10u). Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible pour ne pas surestimer le stock, la quantité retenue est de 5 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 170 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>4. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 5u vs Médiane: 5u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 7u
- **Erreur LLM**: 2u (28.6%)
- **Erreur Mediane**: 2u (28.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 31 et 58 jours (moyenne ~45 jours). Depuis la dernière commande du 01/10/2025, 28 jours se sont écoulés, ce qui représente plus de 60% du cycle moyen. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 5 unités, correspondant à la médiane des commandes récentes (5, 6, 10) et à la valeur la plus basse pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 160 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>5. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 5u vs Médiane: 7u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 7u
- **Reel commande**: 7u
- **Erreur LLM**: 2u (28.6%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/10/2025, soit il y a 28 jours. L'historique montre des cycles de 31 jours (juillet-août) et 58 jours (août-octobre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou probable dans l'horizon défini. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les quantités récentes sont 10u, 6u et 5u. La médiane est de 6u. Cependant, la tendance est à la baisse (10 > 6 > 5). En suivant la règle de choisir la valeur la plus basse en cas de doute ou de tendance baissière pour éviter le surstock, la quantité retenue est de 5u.

**Tokens utilises pour cette prediction:**
- **Input**: 914 tokens
- **Output**: 209 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>6. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 5u vs Médiane: 8u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 8u
- **Reel commande**: 7u
- **Erreur LLM**: 2u (28.6%)
- **Erreur Mediane**: 1u (14.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 45 jours (56 jours entre juillet et août, 34 jours entre août et octobre). La dernière commande date du 01/10/2025, soit il y a 28 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons 58 jours d'écart potentiel, ce qui dépasse le cycle moyen. Le risque de rupture est réel. ÉTAPE 2 : Estimation quantité. Les quantités historiques sont 10, 7 et 5. La tendance est à la baisse. En suivant la règle de la médiane (7) mais en privilégiant la valeur la plus basse en cas de doute ou de tendance baissière marquée, la quantité de 5 unités est retenue pour éviter le surstockage tout en maintenant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 200 tokens
- **Total**: 1,113 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u
- 2025-07-03 06:37:05: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>2. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u
- 2025-07-03 06:37:05: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-07-03 06:37:05: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>4. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u
- 2025-07-03 06:37:05: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>5. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u
- 2025-07-03 06:37:05: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>6. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-28 06:05:44: 7u
- 2025-07-03 06:37:05: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 7u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 6 | Predicted 6u but not ordered |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 5 | Predicted 5u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | Predicted 3u but not ordered |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 3 | Predicted 3u but not ordered |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:42.322Z*
