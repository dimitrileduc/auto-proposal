# Rapport Backtest - Client Arth en vrac

## Contexte

- **Client** : Arth en vrac (ID: 23780)
- **Commande réelle** : S39554
- **Date commande** : 2025-10-09 06:39:50
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 33
- **Tokens**: 29,663 input + 5,010 output = 34,673 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 39.3% | 28 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 56.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.73 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -19.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [MF0052] MF Pois chiches  500g | 1 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 65 jours. Bien que le cycle récent soit long (environ 77 jours), l'historique N-1 montre une commande systématique entre septembre et novembre (02/09/2024 et 23/11/2023). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture sur l'horizon de fin d'année est réel. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont stables à 2u. La médiane historique globale est de 2.5u, mais les données les plus récentes (2025) indiquent une rotation de 2u. En suivant la règle de privilégier la médiane récente et de choisir la valeur la plus basse en cas de doute, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 229 tokens
- **Total**: 1,182 tokens



</details>


<details>
<summary><strong>2. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande espacé d'environ 2 à 3 mois. La dernière commande datant du 4 août 2025 (soit plus de 60 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un risque de rupture imminent. Bien que la rotation soit faible, le principe de précaution B2B impose une commande. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et au volume historique le plus fréquent pour ce produit.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 135 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence irrégulière avec une dernière commande effectuée il y a 65 jours (04/08/2025). Bien que la rotation soit faible, l'historique de l'année précédente (N-1) indique une commande de 2 unités début septembre, suggérant un besoin latent pour la période actuelle. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture sur un horizon de 30 jours), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la commande historique de la même période l'an dernier.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 154 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>4. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation faible mais régulière avec un cycle moyen d'environ 75 jours entre les commandes récentes. La dernière commande datant du 04/08/2025 (soit 65 jours avant la date actuelle), nous atteignons 86% du cycle moyen, ce qui dépasse le seuil de précaution de 70%. Un risque de rupture est identifié pour l'horizon des 30 prochains jours. Conformément à la règle de la médiane sur historique récent et à la gestion des produits à faible rotation (1-2u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 156 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>5. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 65 jours. L'historique montre un cycle moyen d'environ 75 jours entre les commandes. À la date actuelle (08/10/2025), nous avons dépassé 85% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). ÉTAPE 2 : Estimation quantité. Les commandes récentes sont stables à 2 unités. Bien que l'historique N-1 montre des pics à 3 unités, la règle de précaution B2B impose de suivre la médiane récente et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage. La quantité retenue est donc de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 193 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>6. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 65 jours. L'historique montre une commande en septembre l'année dernière (02/09/2024). Bien que le cycle soit irrégulier, le délai écoulé dépasse largement les intervalles habituels et la période correspond à un besoin historique (N-1). Par principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une rotation très faible et constante de 1 unité (médiane = 1). Conformément aux règles sur les faibles rotations, on maintient la quantité minimale de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 186 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 19 mai 2025, soit plus de 140 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement tout cycle habituel. Un besoin de réapprovisionnement est donc détecté pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre des commandes de 1u (récent) et 2u à 3u (N-1). En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation lente, la quantité de 2u est retenue (médiane entre 1, 2 et 3).

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 202 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>8. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 19 mai 2025, soit plus de 140 jours sans activité. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le seuil de 30 jours est largement dépassé par rapport au cycle moyen estimé. Conformément à la règle des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 133 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>9. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 19 mai 2025, soit plus de 140 jours sans activité. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que des commandes ont été enregistrées à la même période l'année précédente (novembre). En suivant la règle des rotations faibles (1-2u) et en privilégiant la valeur basse pour éviter le surstock, la quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques les plus fréquentes.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 140 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>10. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 mai 2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles (1-2u), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 174 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>11. [MF0052] MF Pois chiches  500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente enregistrée, mais une commande historique à la même période l'année dernière (septembre). En l'absence de données récentes et face à un cycle indéterminé, le principe de précaution B2B s'applique pour éviter une rupture potentielle sur ce produit à rotation très faible. ÉTAPE 2 : Estimation de la quantité. L'historique N-1 indique une unité. Conformément aux règles sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 141 tokens
- **Total**: 1,011 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:43:17: 2u
- 2025-05-19 08:11:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:22:24: 3u
- 2024-05-15 07:23:24: 4u
- 2024-01-25 12:26:07: 1u
- 2023-11-23 15:40:04: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:43:17: 2u
- 2025-05-19 08:11:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:22:24: 1u
- 2024-05-15 07:23:24: 2u
- 2024-01-25 12:26:07: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:43:17: 1u
- 2025-05-19 08:11:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:22:24: 2u
- 2024-05-15 07:23:24: 3u
- 2024-01-25 12:26:07: 3u
- 2023-11-23 15:40:04: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:43:17: 1u
- 2025-05-19 08:11:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:22:24: 1u
- 2024-01-25 12:26:07: 2u
- 2023-11-23 15:40:04: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:43:17: 2u
- 2025-05-19 08:11:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:22:24: 2u
- 2024-05-15 07:23:24: 3u
- 2024-01-25 12:26:07: 3u
- 2023-11-23 15:40:04: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:43:17: 1u
- 2025-05-19 08:11:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:22:24: 1u
- 2024-01-25 12:26:07: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 08:11:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-15 07:23:24: 3u
- 2024-01-25 12:26:07: 3u
- 2023-11-23 15:40:04: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 08:11:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:22:24: 1u
- 2024-01-25 12:26:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 08:11:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:22:24: 1u
- 2024-05-15 07:23:24: 3u
- 2024-01-25 12:26:07: 1u
- 2023-11-23 15:40:04: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 08:11:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [MF0052] MF Pois chiches  500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:22:24: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (17)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Predicted 2u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | Predicted 1u but not ordered |
| [RF003] REFIELD Maïs 500G  | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:04.643Z*
