# Rapport Backtest - Client LES SORBIERS

## Contexte

- **Client** : LES SORBIERS (ID: 60468)
- **Commande réelle** : S40043
- **Date commande** : 2025-11-04 13:42:21
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 23,719 input + 4,051 output = 27,770 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 25 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 57.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 62.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 67.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 62.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV188] LV Tartinade Aubergine  380g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV138] LV Tartinade Carotte gingembre  380g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY05] Organic Cherry Jam 370g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 5 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 5 | 2 | 3.0 | 150.0% | partial | Non | Non | LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [LV188] LV Tartinade Aubergine  380g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 17 septembre, soit 47 jours avant la date actuelle. Bien que le cycle soit irrégulier (92 jours entre les deux dernières commandes), le délai actuel dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = prévoir), un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 168 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>2. [LV138] LV Tartinade Carotte gingembre  380g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 17 septembre, soit 47 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence de cycle établi, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : La quantité est basée sur l'unique point de donnée récent (2 unités), ce qui constitue la médiane de l'historique disponible. On maintient ce volume pour répondre au besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 140 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 4u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 4u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 3u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre, soit 47 jours. Le cycle précédent était de 98 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 77 jours d'écart à l'échéance. Bien que le cycle soit irrégulier et l'historique faible, le principe de précaution B2B s'applique pour éviter une rupture sur un produit bio à rotation lente. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u et 4u. Conformément à la règle de prudence et à la préférence pour la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 179 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>4. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 11 août 2025, soit 84 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard pour ce type de produit. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité est fixée à 3 unités, correspondant à la valeur de la dernière commande connue (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 128 tokens
- **Total**: 997 tokens



</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 août 2025, soit 84 jours. Le cycle précédent était de 61 jours. Nous avons largement dépassé le cycle moyen constaté, ce qui indique un besoin imminent ou une rupture probable dans l'horizon des 30 jours (Replenishment Threshold Days). Par principe de précaution B2B, le besoin est validé. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u et 3u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute ou de rotation faible pour éviter le surstockage, la quantité de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 177 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 30 à 60 jours. La dernière commande remontant au 11 août 2025 (soit plus de 80 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture imminent ou un besoin de restockage. Conformément à la règle de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (2u, 2u, 3u) et respectant le principe de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 171 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 5u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/08/2025, soit 91 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de la règle sur les cycles irréguliers/difficiles à déterminer, un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de multiples points de données pour calculer une médiane, la quantité de la dernière commande connue (5u) est maintenue pour assurer la rotation du produit sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 168 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>8. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 5u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 3u (150.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 04/08/2025, soit environ 90 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et compte tenu du seuil de réapprovisionnement de 30 jours, une commande est nécessaire. La quantité est fixée à 5 unités, correspondant à la seule valeur historique connue (médiane par défaut).

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 129 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>9. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'historique récent montre une consommation régulière de 3 unités avec un intervalle de 6 jours entre les commandes. Bien que la dernière commande remonte à plusieurs mois (juin), l'absence de données plus récentes et le principe de précaution B2B imposent de prévoir un réapprovisionnement pour couvrir le risque de rupture sur l'horizon de 30 jours. La quantité retenue correspond à la médiane exacte des commandes précédentes (3u), conformément à la règle de maintien des rotations régulières.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 115 tokens
- **Total**: 1,001 tokens



</details>


<details>
<summary><strong>10. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 17 juin 2025, soit plus de 130 jours. Bien que l'historique récent soit limité à deux commandes rapprochées en juin, l'absence de commandes depuis lors crée une incertitude sur le cycle de rotation. En application du principe de précaution B2B (si doute sur le cycle → prévoir commande), un besoin est identifié pour éviter une rupture prolongée si la demande reprend. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une régularité stricte de 3 unités par commande. Conformément à la règle de maintien des quantités pour les rotations régulières et l'utilisation de la médiane, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 181 tokens
- **Total**: 1,068 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV188] LV Tartinade Aubergine  380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:38:08: 2u
- 2025-06-17 08:19:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV138] LV Tartinade Carotte gingembre  380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:38:08: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:38:08: 4u
- 2025-06-11 07:01:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JOY05] Organic Cherry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 10:58:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 10:58:02: 3u
- 2025-06-11 07:01:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 10:58:02: 2u
- 2025-06-17 08:19:39: 2u
- 2025-06-11 07:01:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:34:42: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>8. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:34:42: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:19:39: 3u
- 2025-06-11 07:01:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:19:39: 3u
- 2025-06-11 07:01:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV189] LV Tartinade Houmous Type 380g | 1 | Predicted 1u but not ordered |
| [LV217] LV Tartinade Basilic 380g | 2 | Predicted 2u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | Predicted 2u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | Predicted 3u but not ordered |
| [REB05] REB chips bio - sel de mer 35g | 4 | Predicted 4u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | Predicted 3u but not ordered |
| [REB06] REB chips bio - paprika fumé 35g | 3 | Predicted 3u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Predicted 2u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Predicted 3u but not ordered |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 3 | Predicted 3u but not ordered |
| [fsv03] Noisette nature bio vrac 2,8kg  | 3 | Predicted 3u but not ordered |
| [fsv04] Amande nature bio vrac 2,8 kg | 3 | Predicted 3u but not ordered |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 3 | Predicted 3u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:36.123Z*
