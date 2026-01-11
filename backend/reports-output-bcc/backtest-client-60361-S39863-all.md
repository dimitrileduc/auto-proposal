# Rapport Backtest - Client HOUTOPIA

## Contexte

- **Client** : HOUTOPIA (ID: 60361)
- **Commande réelle** : S39863
- **Date commande** : 2025-10-22 11:56:52
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,607 input + 2,374 output = 14,981 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 57.1% | 14 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 72.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.13 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 56.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 52.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 31.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 5 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 5u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/09/2025, soit 48 jours. Le cycle moyen observé entre les commandes précédentes est d'environ 26 jours (12 jours entre juillet, puis 43 jours jusqu'à septembre). Nous avons largement dépassé le cycle moyen et le seuil de 70% du cycle. Le risque de rupture est élevé d'ici les 30 prochains jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 4u, 10u et 5u. La médiane de ces commandes est de 5u. Conformément à la règle de privilégier la médiane et de ne pas surestimer en cas de doute, la quantité retenue est de 5 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 199 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>2. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 4u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/09/2025, soit 48 jours. Le cycle moyen observé entre les commandes précédentes est d'environ 25 jours. Nous avons largement dépassé ce cycle, et avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est critique (principe de précaution B2B). Pour la quantité, l'historique récent montre des volumes de 2u, 2u, 5u et 4u. La médiane de ces commandes est de 3u, mais la tendance récente s'oriente vers 4-5u. En suivant la règle de la médiane et de la prudence face aux pics, une quantité de 4u est préconisée pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 178 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>3. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 48 jours. L'intervalle précédent était de 43 jours. Le cycle moyen est d'environ 45 jours. À la date du 21/10/2025, nous avons dépassé le cycle habituel, le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes de 3 unités. La médiane est de 3. Conformément à la règle de maintien des rotations régulières, la quantité préconisée est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 170 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>4. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/09/2025, soit 48 jours avant la date actuelle (21/10/2025). L'historique montre des intervalles de 12 jours puis 43 jours. Le délai actuel dépasse largement le cycle moyen constaté. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente les quantités suivantes : 3, 5, 3. La médiane de ces commandes est de 3 unités. Conformément aux règles de gestion des rotations faibles et à la priorité donnée à la médiane pour éviter le surstockage, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 916 tokens
- **Output**: 205 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 43 jours (36 jours entre juin et juillet, 43 jours entre juillet et septembre). Depuis la dernière commande du 3 septembre, 48 jours se sont écoulés, ce qui dépasse le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique présente des volumes de 1u, 3u et 1u. La médiane de ces commandes est de 1u. Conformément aux règles de prudence B2B et de maintien des faibles rotations, la quantité de 1u est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 168 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>6. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 48 jours. Le cycle moyen observé est d'environ 40-45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes de 1u, 3u et 1u. La médiane est de 1u. Conformément aux règles de rotation faible et de choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 169 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>7. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre des intervalles de 22 jours puis 55 jours. La dernière commande remonte au 03/09/2025, soit 48 jours avant la date actuelle (21/10/2025). Ce délai dépasse largement 70% du cycle moyen estimé. Le risque de rupture est imminent dans l'horizon des 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités commandées sont de 2, 4 et 3 unités. La médiane de cet historique récent est de 3 unités. Conformément aux règles de précaution et de stabilité, on retient cette valeur médiane pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 174 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>8. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique montre des commandes environ tous les 12 à 43 jours (moyenne ~27 jours). La dernière commande date du 03/09/2025, soit 48 jours avant la date actuelle. Le cycle habituel est largement dépassé, ce qui indique un besoin imminent ou une rupture probable dans l'horizon des 30 jours (Replenishment Threshold). ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont 1, 1, 4, 3. La médiane de cet historique est de 2u, mais les deux dernières commandes montrent une baisse à 1u. En application de la règle de précaution B2B (choisir la valeur la plus basse en cas de doute ou de tendance à la baisse), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 202 tokens
- **Total**: 1,126 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:32:29: 4u
- 2025-07-22 09:53:28: 10u
- 2025-07-10 07:07:58: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:32:29: 4u
- 2025-07-22 09:53:28: 5u
- 2025-07-10 07:07:58: 2u
- 2025-06-18 06:54:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:32:29: 3u
- 2025-07-22 09:53:28: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:32:29: 3u
- 2025-07-22 09:53:28: 5u
- 2025-07-10 07:07:58: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:32:29: 1u
- 2025-07-22 09:53:28: 3u
- 2025-06-18 06:54:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:32:29: 1u
- 2025-07-22 09:53:28: 3u
- 2025-06-18 06:54:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:32:29: 2u
- 2025-07-10 07:07:58: 4u
- 2025-06-18 06:54:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:32:29: 1u
- 2025-07-22 09:53:28: 1u
- 2025-07-10 07:07:58: 4u
- 2025-06-18 06:54:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 2 | Predicted 2u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Predicted 1u but not ordered |
| [REB05] REB chips bio - sel de mer 35g | 2 | Predicted 2u but not ordered |
| [REB06] REB chips bio - paprika fumé 35g | 2 | Predicted 2u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Predicted 1u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:40.847Z*
