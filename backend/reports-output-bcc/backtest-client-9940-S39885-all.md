# Rapport Backtest - Client Un poids c'est tout

## Contexte

- **Client** : Un poids c'est tout (ID: 9940)
- **Commande réelle** : S39885
- **Date commande** : 2025-10-28 07:15:40
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 34
- **Tokens**: 31,008 input + 5,099 output = 36,107 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 33 produits prédits, 11 corrects |
| **Rappel** | 78.6% | 14 produits réels, 11 détectés |
| **F1-Score** | 46.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.36 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 27.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0012] MF Olives Mix 500g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0052] MF Pois chiches  500g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 35 à 50 jours (juin-août, août-septembre). La dernière commande datant du 09/09/2025, soit il y a 48 jours, le cycle habituel est dépassé. Selon le principe de précaution B2B et le seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. La quantité est fixée à 2 unités, correspondant à la médiane des commandes récentes (1, 2, 3), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 143 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles d'environ 50 à 70 jours (49 jours entre juin et août, 35 jours entre août et septembre). Depuis la dernière commande du 09/09/2025, 48 jours se sont écoulés. Nous atteignons la fin du cycle habituel et le risque de rupture est élevé dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 4 unités, correspondant à la médiane et au volume récurrent des commandes précédentes, la commande de 1 unité étant traitée comme une valeur basse isolée.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 162 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>3. [MF0012] MF Olives Mix 500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 45 à 50 jours (juin à août, puis août à septembre). La dernière commande datant du 09 septembre 2025, soit il y a 48 jours, le seuil de réapprovisionnement est largement atteint. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 934 tokens
- **Output**: 133 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>4. [MF0052] MF Pois chiches  500g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 09/09/2025, soit 48 jours. Bien que le cycle historique soit irrégulier (allant de 45 à 90 jours), nous entrons dans une zone de risque de rupture à l'horizon des 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre des volumes très faibles (1u et 2u). La médiane des commandes récentes est de 1,5u. Conformément à la règle des rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 951 tokens
- **Output**: 172 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>5. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 09/09/2025, soit 48 jours avant la date actuelle. Bien que le cycle historique soit irrégulier, le délai écoulé dépasse largement la fréquence habituelle de rotation (environ 30-40 jours). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane des commandes récentes est de 1,5u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute ou de rotation faible), la quantité retenue est de 1u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 199 tokens
- **Total**: 1,155 tokens



</details>


<details>
<summary><strong>6. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 09/09/2025, soit 48 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'un cycle historique clair, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 153 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>7. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/08/2025, soit 83 jours. Le cycle historique moyen est d'environ 60 à 70 jours. Nous avons largement dépassé ce cycle, ce qui indique un besoin imminent ou une rupture de stock probable. Le principe de précaution B2B s'applique. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite à 2 unités (août et juin 2025). L'historique N-1 confirme également une récurrence de 2 unités sur la majorité des commandes. La médiane est de 2. Conformément aux règles, on maintient cette quantité stable sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 959 tokens
- **Output**: 172 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>8. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit ne présente qu'une seule donnée historique récente (0 unité le 05/08/2025), ce qui rend le cycle de commande indéterminé. Selon le principe de précaution B2B, en cas de doute sur le cycle ou de rotation difficile à déterminer, il convient de prévoir une commande pour éviter une rupture potentielle. La quantité minimale de 1 unité est retenue conformément à la règle de prudence sur les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 105 tokens
- **Total**: 983 tokens



</details>


<details>
<summary><strong>9. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 17 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement tout cycle raisonnable, suggérant un besoin de réapprovisionnement pour éviter une rupture prolongée. Conformément aux règles pour les rotations faibles (1-2u), la quantité retenue est le minimum historique récent, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 114 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>10. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte à plus de 4 mois (132 jours). Bien que la rotation soit très faible, l'absence de commande récente sur une période aussi longue, combinée au principe de précaution B2B, suggère un risque de rupture de stock ou un besoin de renouvellement imminent pour maintenir une présence produit. ÉTAPE 2 : En suivant la règle de rotation très faible (1-2u) et la médiane historique, la quantité est fixée à 1 unité pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 130 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>11. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une rotation faible et sporadique (tous les 2 à 3 mois). La dernière commande enregistrée remonte à plus de 15 mois. En application du principe de précaution B2B, l'absence de données récentes crée un doute sur le cycle actuel, ce qui justifie une commande de réactivation pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique N-1 présente des quantités de 1u et 2u. Conformément à la règle de rotation faible et au choix de la valeur la plus basse en cas de doute, la quantité retenue est la médiane basse de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 176 tokens
- **Total**: 1,083 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 06:26:24: 2u
- 2025-08-05 08:32:36: 3u
- 2025-06-17 06:40:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 06:26:24: 1u
- 2025-08-05 08:32:36: 4u
- 2025-06-17 06:40:09: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [MF0012] MF Olives Mix 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 06:26:24: 1u
- 2025-08-05 08:32:36: 1u
- 2025-06-17 06:40:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-14 08:48:29: 1u
- 2024-02-06 07:12:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [MF0052] MF Pois chiches  500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 06:26:24: 1u
- 2025-06-17 06:40:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:23:47: 3u
- 2024-05-14 08:48:29: 2u
- 2024-02-06 07:12:28: 1u
- 2023-12-05 08:13:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 06:26:24: 1u
- 2025-08-05 08:32:36: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:23:47: 3u
- 2024-05-14 08:48:29: 1u
- 2024-02-06 07:12:28: 2u
- 2023-12-05 08:13:39: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 06:26:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 08:32:36: 2u
- 2025-06-17 06:40:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:23:47: 3u
- 2024-05-14 08:48:29: 2u
- 2024-02-06 07:12:28: 2u
- 2023-12-05 08:13:39: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 08:32:36: 0u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 06:40:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:23:47: 2u
- 2024-02-06 07:12:28: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 06:40:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:23:47: 2u
- 2024-05-14 08:48:29: 1u
- 2024-02-06 07:12:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (22)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Predicted 2u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | Predicted 3u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Predicted 2u but not ordered |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Predicted 1u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [MF0024] MF KETCHUP 250g | 1 | Predicted 1u but not ordered |
| [MF0047] MF Mayonnaise 250ml | 3 | Predicted 3u but not ordered |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Predicted 2u but not ordered |
| [MF0014] MF Olives noires 500g | 1 | Predicted 1u but not ordered |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Predicted 2u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Predicted 2u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Predicted 2u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Predicted 1u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Predicted 1u but not ordered |
| [MF0021] MF Sauce BBQ 250ml | 1 | Predicted 1u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [RF003] REFIELD Maïs 500G  | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 7 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 42 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:08:24.296Z*
