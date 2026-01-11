# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S40359
- **Date commande** : 2025-11-14 11:38:35
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 17,032 input + 2,637 output = 19,669 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 12 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 55.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 62.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -44.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 4 | 8 | 4.0 | 50.0% | partial | Non | Non | LLM |
| [JOY05] Organic Cherry Jam 370g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | 10 | 6.0 | 60.0% | partial | Non | Non | LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 8u
- **Erreur LLM**: 4u (50.0%)
- **Erreur Mediane**: 4u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 20 jours. La dernière commande date d'hier (12/11) pour seulement 1 unité, ce qui est très inférieur au volume habituel de 4 unités observé sur les mois précédents (septembre, juillet). Ce faible volume suggère un besoin de complément immédiat pour couvrir le seuil de réapprovisionnement de 30 jours, d'autant plus que le cycle est irrégulier. En appliquant la règle de la médiane sur les commandes significatives (1, 6, 4, 4, 1, 4, 3, 2), la médiane se situe à 3.5. Conformément au principe de précaution B2B et à la récurrence du chiffre 4 dans l'historique, une quantité de 4 unités est préconisée pour stabiliser le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 202 tokens
- **Total**: 1,192 tokens



</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 21 jours entre chaque réapprovisionnement. La dernière commande datant du 12 novembre (hier), nous sommes théoriquement au début d'un nouveau cycle. Cependant, le délai entre les deux dernières commandes s'est considérablement allongé (49 jours), ce qui rend le cycle irrégulier. En application du principe de précaution B2B (si doute sur le cycle ou irrégularité → prévoir), une commande est déclenchée pour couvrir le risque de rupture sur l'horizon des 30 prochains jours. La quantité est fixée à 2 unités, correspondant à la médiane des commandes récentes (1, 2, 3, 2, 4, 6, 6), tout en respectant la tendance récente à la baisse des volumes.

**Tokens utilises pour cette prediction:**
- **Input**: 969 tokens
- **Output**: 183 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date d'hier (2025-11-12), mais l'historique montre une fréquence très irrégulière avec des commandes parfois espacées de seulement 3 jours (septembre). Bien que le stock vienne d'être sollicité, le principe de précaution B2B s'applique ici car le cycle est imprévisible. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes de 1u et 3u. La médiane des commandes récentes est de 1u. En respectant la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 174 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 2u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date d'hier (2025-11-12), ce qui suggère un stock théoriquement plein. Cependant, l'historique montre des cycles très irréguliers (allant de 14 jours à 2 mois) et des volumes variables. En B2B, selon le principe de précaution et la règle du doute sur le cycle, un risque de rupture est identifié à l'horizon de 30 jours si la rotation s'accélère comme observé en juillet. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche les quantités suivantes : 4, 2, 2, 8, 2, 2. La valeur 8 est un pic exceptionnel à exclure. La médiane des commandes récentes est de 2 unités. En respectant la règle de choisir la quantité la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 227 tokens
- **Total**: 1,181 tokens



</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 10u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 20 jours. La dernière commande datant du 12 novembre (hier), nous sommes au début d'un nouveau cycle. Cependant, avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient avant la prochaine fenêtre de calcul. En application du principe de précaution B2B et pour couvrir l'horizon des 30 prochains jours, une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à la médiane des commandes récentes (excluant le pic exceptionnel de 10u), ce qui assure une couverture stable sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 154 tokens
- **Total**: 1,143 tokens



</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 20 jours. La dernière commande datant du 17 octobre (soit 27 jours avant la date actuelle), nous avons dépassé le cycle habituel et entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 2, 2, 4, 4, 5), tout en privilégiant la valeur basse pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 163 tokens
- **Total**: 1,135 tokens



</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Le cycle de commande moyen est d'environ 31 jours. La dernière commande remonte au 24 septembre, soit 50 jours avant la date actuelle. Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un besoin imminent ou un stock probablement épuisé. En suivant la règle de la médiane des quantités récentes (1, 2, 2, 3), la quantité retenue est de 2 unités pour couvrir la consommation régulière sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 120 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse montre un cycle de commande irrégulier avec une dernière commande effectuée il y a 62 jours (12 septembre). Bien que la rotation soit lente, le délai écoulé dépasse largement les intervalles précédents (3-30 jours), ce qui induit un doute sur l'état du stock à l'approche du seuil de 30 jours. En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 2 unités, correspondant à la médiane des commandes récentes (1, 2, 3, 5), en privilégiant la valeur basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 149 tokens
- **Total**: 1,070 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 6u
- 2025-09-12 12:57:02: 4u
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 1u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 3u
- 2025-06-23 07:14:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 2u
- 2025-09-09 12:58:36: 3u
- 2025-08-19 13:27:28: 2u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-12 12:57:02: 3u
- 2025-09-09 12:58:36: 1u
- 2025-07-07 08:56:44: 1u
- 2025-06-23 07:14:01: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-12 11:57:26: 4u
- 2025-10-17 10:21:30: 2u
- 2025-08-19 13:27:28: 2u
- 2025-07-23 10:00:51: 8u
- 2025-07-07 08:56:44: 2u
- 2025-06-23 07:14:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-12 11:57:26: 4u
- 2025-10-17 10:21:30: 6u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 4u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-17 10:21:30: 2u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 5u
- 2025-08-19 13:27:28: 1u
- 2025-07-07 08:56:44: 2u
- 2025-06-23 07:14:01: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 12:49:59: 2u
- 2025-09-12 12:57:02: 1u
- 2025-07-23 10:00:51: 2u
- 2025-06-23 07:14:01: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 12:57:02: 5u
- 2025-09-09 12:58:36: 1u
- 2025-07-23 10:00:51: 2u
- 2025-06-23 07:14:01: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | Predicted 6u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 10 | Predicted 10u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 5 | Predicted 5u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 5 | Predicted 5u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:20.832Z*
