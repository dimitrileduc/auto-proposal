# Rapport Backtest - Client DELITRAITEUR

## Contexte

- **Client** : DELITRAITEUR (ID: 60283)
- **Commande réelle** : S39542
- **Date commande** : 2025-10-03 13:14:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 10,148 input + 1,948 output = 12,096 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 72.7% | 11 produits prédits, 8 corrects |
| **Rappel** | 88.9% | 9 produits réels, 8 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 27.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 89.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -55.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 18 | 60 | 42.0 | 70.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 25 | 50 | 25.0 | 50.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 5 | 25 | 20.0 | 80.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 25 | 7 | 18.0 | 257.1% | partial | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 10 | 40 | 30.0 | 75.0% | partial | Non | Non | LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 10 | 60 | 50.0 | 83.3% | partial | Non | Non | LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 18 | 45 | 27.0 | 60.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 25 | 18 | 7.0 | 38.9% | partial | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 18u vs Médiane: 20u (Réel: 60u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 18u
- **Baseline calculee**: 18u
- **Mediane historique**: 20u
- **Reel commande**: 60u
- **Erreur LLM**: 42u (70.0%)
- **Erreur Mediane**: 40u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 18u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 28 jours (04/08, 01/09, 29/09). Bien que la dernière commande soit très récente (3 jours), le seuil de réapprovisionnement de 30 jours couvre l'intégralité du prochain cycle prévu fin octobre. Par principe de précaution B2B et pour éviter une rupture sur cette période, une commande est préconisée. La quantité est déterminée par la médiane des commandes récentes (10, 17, 20, 20, 60), soit 20u, mais ajustée à 18u (moyenne basse entre la dernière commande de 17u et la médiane) pour respecter la règle de prudence et ne pas surstocker suite au pic exceptionnel de mai.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 192 tokens
- **Total**: 1,147 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 25u vs Médiane: 38u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 38u
- **Reel commande**: 50u
- **Erreur LLM**: 25u (50.0%)
- **Erreur Mediane**: 12u (24.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 12 septembre (il y a 20 jours). Le cycle moyen entre les commandes est d'environ 38 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans l'horizon de prévision (20 + 30 = 50 jours > cycle moyen). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre des quantités de 50, 5, 25 et 50. La médiane de ces commandes est de 37.5. Cependant, en suivant la règle de privilégier la valeur la plus basse en cas de doute ou de volatilité (5u étant un pic bas et 50u un pic haut), la quantité de 25u (valeur centrale historique) est retenue pour éviter le surstockage tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 218 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 5u vs Médiane: 25u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 25u
- **Reel commande**: 25u
- **Erreur LLM**: 20u (80.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 46 jours puis 59 jours. Avec 31 jours écoulés depuis la dernière commande (01/09) et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle moyen atteint). Concernant la quantité, on observe une tendance à la baisse marquée (50u > 25u > 5u). Conformément aux règles de gestion, la médiane des commandes récentes est de 25u, mais la règle de respect de la tendance baissière et le choix de la valeur la plus basse en cas de doute imposent de maintenir la dernière quantité observée de 5u.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 170 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 25u vs Médiane: 25u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 25u
- **Reel commande**: 7u
- **Erreur LLM**: 18u (257.1%)
- **Erreur Mediane**: 18u (257.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 46, 46 et 13 jours. Depuis la dernière commande du 01/09/2025, 31 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la durée moyenne du cycle. En appliquant la règle de la médiane sur les quantités récentes (10, 25, 25, 50), la valeur centrale est de 25 unités. Cette quantité est privilégiée pour maintenir le stock sans surestimer, conformément au principe de précaution B2B.

**Tokens utilises pour cette prediction:**
- **Input**: 927 tokens
- **Output**: 152 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 10u vs Médiane: 20u (Réel: 40u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 20u
- **Reel commande**: 40u
- **Erreur LLM**: 30u (75.0%)
- **Erreur Mediane**: 20u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/09/2025, soit 31 jours avant la date actuelle. Le cycle moyen observé est d'environ 15 à 20 jours. Le délai depuis la dernière commande dépasse largement 70% du cycle habituel, indiquant un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 10u et 20u. La médiane des commandes récentes est de 10u. En suivant le principe de précaution B2B et la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 10u.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 178 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>6. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 60u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 60u
- **Erreur LLM**: 50u (83.3%)
- **Erreur Mediane**: 50u (83.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 jours (04/07, 04/08, 01/09). La dernière commande datant du 01/09, soit il y a 31 jours, le seuil de réapprovisionnement de 30 jours est atteint. Il existe un risque de rupture imminent. Concernant la quantité, bien qu'un pic à 20u ait été observé en juillet, la médiane et la fréquence dominante se situent à 10u. En application du principe de précaution et de l'utilisation de la médiane, une commande de 10 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 932 tokens
- **Output**: 163 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>7. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 18u vs Médiane: 14u (Réel: 45u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 18u
- **Baseline calculee**: 18u
- **Mediane historique**: 14u
- **Reel commande**: 45u
- **Erreur LLM**: 27u (60.0%)
- **Erreur Mediane**: 31u (68.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 18u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique récent montre un cycle de commande d'environ 30 à 60 jours. La dernière commande date du 01/09/2025, soit il y a 31 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de risque de rupture (31 jours écoulés >= 70% du cycle moyen estimé). Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. Les quantités commandées sont 18u, 18u et 9u. La médiane des commandes récentes est de 18u. Conformément aux règles, nous maintenons cette quantité habituelle pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 183 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 25u vs Médiane: 38u (Réel: 18u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 38u
- **Reel commande**: 18u
- **Erreur LLM**: 7u (38.9%)
- **Erreur Mediane**: 20u (111.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre un intervalle de 46 jours entre les deux premières commandes. La dernière commande remonte au 04/07/2025, soit 90 jours avant la date actuelle (02/10/2025). Ce délai dépasse largement le cycle moyen observé et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes précédentes étaient de 50u et 25u. Conformément à la règle de privilégier la médiane et, en cas de doute entre deux quantités, de choisir la plus basse pour éviter le surstockage, la quantité retenue est de 25u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 205 tokens
- **Total**: 1,097 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-29 09:22:29: 17u
- 2025-09-01 06:22:40: 20u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 10u
- 2025-05-19 07:03:41: 60u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 18u
**Quantite Reelle**: 60u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 09:19:50: 50u
- 2025-09-01 06:22:40: 5u
- 2025-07-04 11:09:53: 25u
- 2025-05-19 07:03:41: 50u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 50u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:22:40: 5u
- 2025-07-04 11:09:53: 25u
- 2025-05-19 07:03:41: 50u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 25u
- 2025-07-04 11:09:53: 25u
- 2025-05-19 07:03:41: 50u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 10u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 20u
- 2025-06-30 07:38:16: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 40u

</details>


<details>
<summary><strong>6. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-04 09:36:12: 10u
- 2025-07-04 11:09:53: 20u
- 2025-06-30 07:38:16: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 60u

</details>


<details>
<summary><strong>7. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:22:40: 18u
- 2025-07-04 11:09:53: 18u
- 2025-06-30 07:38:16: 9u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 18u
**Quantite Reelle**: 45u

</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 11:09:53: 25u
- 2025-05-19 07:03:41: 50u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 18u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 126 | Predicted 126u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 21 | Predicted 21u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 42 | Predicted 42u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 40 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:05:44.637Z*
