# Rapport Backtest - Client Epicerie Uhoda Kennedy

## Contexte

- **Client** : Epicerie Uhoda Kennedy (ID: 23342)
- **Commande réelle** : S39989
- **Date commande** : 2025-10-29 11:28:56
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 56
- **Tokens**: 50,483 input + 8,763 output = 59,246 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.5% | 56 produits prédits, 7 corrects |
| **Rappel** | 63.6% | 11 produits réels, 7 détectés |
| **F1-Score** | 20.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 28.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -36.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date de 20 jours (2025-10-08). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture, d'autant plus que l'historique est trop limité pour établir un cycle précis. En B2B, le principe de précaution s'applique en cas de doute sur la rotation. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 163 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 30 à 70 jours. La dernière commande remonte au 26 septembre (il y a 32 jours). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une rupture est probable. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes historiques récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 119 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>3. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 26 septembre, soit 32 jours. Avec un seuil de réapprovisionnement de 30 jours, nous sommes dans la fenêtre critique de renouvellement. En l'absence d'un historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités régulières, la médiane de 1 unité est retenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 141 tokens
- **Total**: 1,020 tokens



</details>


<details>
<summary><strong>4. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande date de 32 jours (26 septembre). Bien que le cycle historique ne soit pas encore établi avec une seule commande récente, le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane de l'historique récent, afin de maintenir le stock sans surstockage inutile pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 882 tokens
- **Output**: 124 tokens
- **Total**: 1,006 tokens



</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 53 jours. L'intervalle précédent était de 52 jours. Nous sommes actuellement à 100% du cycle moyen constaté. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 170 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 50 à 60 jours. La dernière commande datant du 05/09/2025 (soit 53 jours avant la date actuelle), nous avons dépassé 70% du cycle habituel. En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes précédentes (rotation faible et régulière).

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 129 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>7. [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit environ 120 jours. Bien que la rotation soit très faible, le principe de précaution B2B s'applique face à une absence de commande prolongée pour éviter une rupture de stock totale sur cette référence. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 139 tokens
- **Total**: 1,015 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:16:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 06:18:58: 1u
- 2025-07-15 07:29:35: 1u
- 2025-06-16 08:46:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 06:18:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 06:18:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:08:16: 1u
- 2025-07-15 07:29:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:08:16: 1u
- 2025-07-15 07:29:35: 1u
- 2025-06-16 08:46:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 13:24:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (49)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LB003] LB Festive (4,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LB005] LB Amber (5,2%) 33CL | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Predicted 2u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Predicted 2u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Predicted 1u but not ordered |
| [KLAK01] KLAK Maté 330ml | 1 | Predicted 1u but not ordered |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 2 | Predicted 2u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Predicted 2u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Predicted 2u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Predicted 2u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Predicted 1u but not ordered |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Predicted 1u but not ordered |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Predicted 1u but not ordered |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Predicted 1u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 2 | Predicted 2u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Predicted 1u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | Predicted 1u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Predicted 1u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Predicted 2u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | Predicted 2u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 2 | Predicted 2u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Predicted 1u but not ordered |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Predicted 1u but not ordered |
| [CB010] CB Jus de Pomme cubis 3l | 3 | Predicted 3u but not ordered |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 3 | Predicted 3u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Predicted 2u but not ordered |
| [CB005] CB Apple juice 1l | 1 | Predicted 1u but not ordered |
| [LV189] LV Tartinade Houmous Type 380g | 1 | Predicted 1u but not ordered |
| [LV187] LV Tartinade Mangue Curry 380g | 2 | Predicted 2u but not ordered |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Never ordered in previous analysis window (no history) |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Never ordered in previous analysis window (no history) |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 2 | Never ordered in previous analysis window (no history) |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:05:45.447Z*
