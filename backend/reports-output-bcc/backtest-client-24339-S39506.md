# Rapport Backtest - Client Maison Duysens

## Contexte

- **Client** : Maison Duysens (ID: 24339)
- **Commande réelle** : S39506
- **Date commande** : 2025-10-02 06:10:18
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 77
- **Tokens**: 69,426 input + 11,988 output = 81,414 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 62.7% | 67 produits prédits, 42 corrects |
| **Rappel** | 100.0% | 42 produits réels, 42 détectés |
| **F1-Score** | 77.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.31 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 11.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -9.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 31 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

---

## True Positives (42)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 5 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV040] LV Caprons apéritifs 240g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV145] LV Sauce Tartare 200 ml  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (42 produits)


<details>
<summary><strong>1. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 21 août 2025, soit 41 jours avant la date actuelle (1er octobre). Le cycle moyen observé est d'environ 45 à 50 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons largement 70% du cycle habituel. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u, 2u et 1u. La médiane est de 1u. Conformément à la règle sur les rotations faibles (1-2u) et au principe de choisir la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 190 tokens
- **Total**: 1,142 tokens



</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 21 août, soit 41 jours avant la date actuelle. Le cycle précédent était de 49 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré si l'on suit la rotation habituelle. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec 1 unité par commande (médiane = 1). Bien que l'historique N-1 mentionne 3 unités, la tendance actuelle est plus faible. Conformément aux règles, on maintient la quantité de la rotation régulière récente.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 168 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 21/08/2025, soit 41 jours avant la date actuelle. Le cycle historique est irrégulier (environ 90 jours récemment, mais plus fréquent l'année précédente). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans une zone d'incertitude sur le stock restant. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les commandes récentes montrent une tendance à la baisse (3u puis 1u). La médiane des commandes de 2025 est de 2u, mais conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible, la quantité de 1u est retenue pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 201 tokens
- **Total**: 1,138 tokens



</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence d'environ 45 à 50 jours (mai-juillet-août). La dernière commande datant du 21 août, soit il y a 41 jours, nous avons dépassé 70% du cycle moyen. Un risque de rupture est identifié pour l'horizon des 30 prochains jours (Replenishment Threshold). Concernant la quantité, l'historique récent est extrêmement stable avec une récurrence stricte de 3 unités par commande. Conformément à la règle de la médiane et du maintien des rotations régulières, la quantité préconisée est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 148 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>5. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles d'environ 45 à 75 jours. La dernière commande datant du 21 août (soit 41 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. Bien que la dernière commande ait été de 1 unité, l'historique récent montre une récurrence de 3 unités (médiane des trois dernières commandes). En application du principe de précaution B2B et pour couvrir le cycle habituel, la quantité retenue est la médiane de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 141 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>6. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 50 jours (entre juillet et août 2025). Au 1er octobre, 41 jours se sont écoulés depuis la dernière commande, ce qui représente plus de 80% du cycle moyen. Le risque de rupture est donc imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de précaution B2B et à la stabilité de la rotation récente (2 unités lors des deux dernières commandes), la quantité retenue est la médiane historique de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 135 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande d'environ 90 jours (mai à août). Au 1er octobre, 41 jours se sont écoulés depuis la dernière commande. Bien que nous ne soyons qu'à environ 45% du cycle théorique, l'irrégularité historique (commandes en mars, juin, décembre l'an dernier) et le principe de précaution B2B imposent de prévoir un réapprovisionnement pour couvrir les 30 prochains jours (seuil de réapprovisionnement). La quantité retenue est de 2 unités, correspondant à la dernière commande et à la médiane basse de l'historique récent, afin d'éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 170 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>8. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 45 à 50 jours (mai-juillet-août). La dernière commande datant du 21 août, soit il y a 41 jours, nous avons dépassé les 70% du cycle moyen. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de la médiane sur l'historique récent (4, 3, 4), la quantité retenue est de 4 unités pour couvrir le prochain cycle. Les pics de l'année précédente (12u, 10u) sont écartés car ils ne reflètent pas la tendance actuelle de consommation plus stable et modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 169 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>9. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 90 jours entre les commandes récentes (mai à août). Depuis la dernière commande du 21 août 2025, 41 jours se sont écoulés. Bien que nous ne soyons pas encore au terme du cycle théorique, le seuil de réapprovisionnement de 30 jours nous place dans une zone de risque de rupture à court terme, d'autant plus qu'une commande avait été passée fin août l'année précédente. En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent est très stable à 1 unité (médiane des commandes de 2025). Conformément à la règle de ne pas surestimer pour les faibles rotations, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 192 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 5u vs Médiane: 6u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 6u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 3u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant entre 43 et 49 jours sur les commandes récentes. La dernière commande datant du 21 août (soit 41 jours avant la date actuelle), nous atteignons 85% du cycle moyen estimé. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 5 unités, correspondant à la médiane et au mode des commandes récentes (5u, 2u, 5u), en écartant les volumes plus importants de l'année précédente qui ne reflètent pas la rotation actuelle.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 163 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 21 août 2025. L'historique récent montre des intervalles de 49 et 77 jours (moyenne ~63 jours). Au 1er octobre, 41 jours se sont écoulés, soit 65% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent avant la prochaine fenêtre de commande. Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 4u, 2u et 4u. La médiane de l'historique récent est de 4u. Les volumes de l'année précédente étaient plus volatils (pics à 10u), mais la tendance actuelle est stable à un niveau bas. On maintient la médiane récente de 4u.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 209 tokens
- **Total**: 1,179 tokens



</details>


<details>
<summary><strong>12. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse montre une rotation lente mais régulière. La dernière commande date du 21 août 2025, soit environ 40 jours avant la date actuelle. Bien que le cycle moyen soit d'environ 90 jours, l'historique N-1 montre une commande fin août suivie d'une période de consommation. En application du principe de précaution B2B (risque de rupture à l'horizon de 30 jours) et compte tenu de l'irrégularité du cycle, un besoin est détecté. La quantité retenue est de 1 unité, correspondant à la commande la plus récente et à la valeur la plus basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 158 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>13. [LV040] LV Caprons apéritifs 240g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 45 à 50 jours entre les dernières commandes (mai-juillet-août). La dernière commande datant du 21 août, soit il y a 41 jours, nous atteignons 80% du cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la tendance actuelle de rotation faible (1u), afin d'éviter un surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 155 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>14. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 90 jours entre les commandes récentes (mai à août). Depuis la dernière commande du 21 août 2025, 41 jours se sont écoulés. Bien que nous ne soyons pas encore au terme du cycle théorique, l'historique de l'année précédente montre une commande fin août, suggérant un besoin récurrent en cette période. En application du principe de précaution B2B (70% du cycle atteint et risque de rupture à l'horizon de 30 jours), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques et à la commande de la même période en N-1, respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 185 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>15. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 92 jours entre les deux dernières commandes. Au 01/10/2025, 41 jours se sont écoulés depuis la dernière commande (21/08). Bien que nous ne soyons qu'à environ 45% du cycle moyen, la rotation est très faible et irrégulière. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture sur un produit à faible rotation) et compte tenu du seuil de réapprovisionnement de 30 jours, une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la valeur basse de l'historique récent pour éviter un surstockage sur une référence à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 177 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>16. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 45 à 70 jours (mai-juillet-août). La dernière commande datant du 21 août, soit il y a 41 jours, nous atteignons 85% du cycle moyen estimé. Le risque de rupture est élevé dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément au principe de précaution B2B et à la règle de rotation très faible (1u), la quantité recommandée est de 1 unité, correspondant à la médiane stricte de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 141 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>17. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 21 août, soit 41 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande récente de 2 unités, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié. La quantité retenue correspond à la dernière commande connue (2 unités), conformément à la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 125 tokens
- **Total**: 998 tokens



</details>


<details>
<summary><strong>18. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle observé entre les deux dernières commandes est de 92 jours. La dernière commande date du 21 août 2025, soit il y a 41 jours. Bien que nous ne soyons qu'à 45% du cycle moyen, la rotation est très faible et irrégulière. En application du principe de précaution B2B (incertitude sur le cycle = prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilité stricte à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 196 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>19. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 49 jours entre les deux dernières commandes. Au 1er octobre, 41 jours se sont écoulés depuis la dernière commande (21 août), ce qui représente environ 84% du cycle moyen. Ce dépassement du seuil de 70% indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément au principe de précaution B2B et à la règle de rotation faible, la quantité retenue est de 1 unité, correspondant à la médiane et au volume constant des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 138 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>20. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen observé est d'environ 49 jours. La dernière commande date du 21 août, soit 41 jours avant la date actuelle. Nous avons atteint 83% du cycle moyen, ce qui dépasse le seuil de risque de 70%. Un réapprovisionnement est nécessaire pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En application de la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 154 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>21. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : L'historique montre un cycle de commande moyen d'environ 45 à 50 jours (49 jours entre mai et juillet, 49 jours entre juillet et août). La dernière commande date du 21 août, soit il y a 41 jours. Nous avons dépassé 80% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). ÉTAPE 2 (ESTIMATION QUANTITÉ) : Les quantités récentes sont très faibles et stables (1u, 1u, 2u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale pour éviter le surstock tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 189 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>22. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 48 et 49 jours. À la date du 2025-10-01, 41 jours se sont écoulés depuis la dernière commande (2025-08-21), ce qui représente environ 84% du cycle moyen. Le seuil de risque de 70% est dépassé, rendant une rupture probable dans les 30 prochains jours. La quantité est fixée à 2 unités, correspondant à la médiane des commandes récentes et à la valeur la plus basse du cycle régulier, conformément au principe de précaution sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 147 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>23. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre des commandes environ tous les 45 à 50 jours (21 mai, 3 juillet, 21 août). Au 1er octobre, 41 jours se sont écoulés depuis la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons largement les 70% du cycle moyen estimé. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités commandées sont de 2u, 4u et 2u. La médiane de l'historique récent est de 2u. Conformément à la règle de précaution privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 189 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>24. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande moyen d'environ 48 jours (49 jours entre mai et juillet, 49 jours entre juillet et août). La dernière commande date du 21 août, soit il y a 41 jours. Le seuil de réapprovisionnement est de 30 jours. Le délai depuis la dernière commande (41j) dépasse largement 70% du cycle moyen (34j). Il existe un risque de rupture imminent dans l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. Les trois dernières commandes sont strictement identiques (2u). La médiane est de 2u. Conformément à la règle sur les rotations faibles et régulières, on maintient cette quantité constante.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 179 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>25. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 45 à 50 jours. La dernière commande datant du 21 août (il y a 41 jours), nous avons dépassé les 70% du cycle habituel. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé durant cette période. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes (1, 1, 2), privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 156 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>26. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 45 à 70 jours (mai, juillet, août). La dernière commande datant du 21 août, soit il y a 41 jours, nous atteignons 85% du cycle moyen constaté. Le risque de rupture est élevé dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et face à une rotation stable de 1 unité par commande, la quantité recommandée est de 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 133 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>27. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique montre un cycle de commande régulier d'environ 50 à 70 jours (mai-juillet-août). La dernière commande datant du 21 août, soit il y a 41 jours, nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de 70% du cycle atteint). Conformément au principe de précaution B2B et à la règle de rotation faible, une commande de 1 unité est préconisée, correspondant à la médiane stricte des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 127 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>28. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 août 2025, soit 41 jours avant la date actuelle. Le cycle historique semble être trimestriel (mai à août = 3 mois), mais une commande a également eu lieu fin août l'année précédente. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où le stock actuel risque d'être épuisé ou le cycle de réachat dépassé. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique est extrêmement stable avec des commandes systématiques de 1 unité (médiane = 1). Conformément aux règles de rotation faible, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 185 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>29. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit environ 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 5 mois entre les commandes). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 1u et l'historique N-1 montre des commandes de 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 183 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>30. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 03/07/2025, soit environ 90 jours. Bien que le cycle historique soit irrégulier, le délai actuel dépasse largement les intervalles habituels, créant un risque de rupture imminent pour les 30 prochains jours. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (1, 2, 2, 2, 3) et à la quantité de la dernière commande, afin de maintenir un stock minimal sans surstockage sur ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 144 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>31. [LV154] LV Vinaigrette Miel et moutarde 250 ml bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit environ 90 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une activité en août et une rotation globale lente mais persistante. Compte tenu du délai écoulé et du seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié par principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. La médiane des commandes (récentes et N-1) se situe à 2u. Conformément à la règle de maintien des faibles rotations sans surestimation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 183 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>32. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit environ 90 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une activité en août et décembre. En application du principe de précaution B2B et face à une absence de commande depuis 3 mois, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. La médiane des commandes récentes et historiques (1, 3, 3, 3, 6, 6) est de 3 unités. Conformément à la règle de privilégier la médiane et de ne pas surestimer en cas de rotation faible/irrégulière, la quantité retenue est de 3.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 186 tokens
- **Total**: 1,139 tokens



</details>


<details>
<summary><strong>33. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/07/2025, soit environ 90 jours. L'historique montre un cycle de commande irrégulier mais récurrent (environ tous les 3 à 4 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car nous entrons dans la fenêtre habituelle de commande. En application du principe de précaution B2B, un besoin est détecté. La quantité retenue est de 3 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes et historiques (3u), en excluant le pic ponctuel de l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 152 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>34. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/07/2025, soit environ 90 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 5 mois entre les commandes de 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant au volume de la commande la plus récente, afin de maintenir un stock minimal sans risque de surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 148 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>35. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit environ 90 jours. Bien que la rotation soit lente, l'historique N-1 montre des commandes en juin et août. Le délai depuis la dernière commande dépasse largement les cycles habituels observés l'année précédente (environ 60-80 jours). Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité quasi constante à 3 unités (médiane de 3). On maintient cette quantité habituelle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 171 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>36. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle entre les deux dernières commandes est de 43 jours. La dernière commande remonte au 03/07/2025, soit 90 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle irrégulier/incertain), un besoin est détecté. ÉTAPE 2 : L'historique récent montre des quantités de 2u et 5u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 165 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>37. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 43 jours (entre mai et juillet). Depuis la dernière commande du 03/07/2025, 90 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une régularité stricte de 1 unité par commande. Conformément aux règles sur les rotations faibles, la quantité maintenue est de 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 158 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>38. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit environ 90 jours. Le cycle précédent était de 43 jours. Le délai actuel dépasse largement le cycle moyen constaté, ce qui indique un besoin de réapprovisionnement imminent ou une rupture de stock probable dans l'horizon des 30 jours (Replenishment Threshold). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante et faible de 1 unité par commande. La médiane des commandes récentes est de 1. Conformément aux règles de rotation faible, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 165 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>39. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 21 mai 2025, soit plus de 130 jours sans activité. Bien que la rotation soit très faible et irrégulière, l'historique montre des commandes sporadiques (notamment en fin d'année N-1 avec 4u en décembre). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours face à un cycle imprévisible, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane des commandes les plus récentes et respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 153 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>40. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 21 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière (une seule commande récente et une l'année précédente), le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement tout cycle raisonnable. En cas de doute sur le cycle pour un produit à faible rotation, il convient de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique (1u en 2024 et 1u en 2025), respectant la règle de ne pas augmenter les quantités sur les produits à rotation très faible.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 169 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>41. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a plus de 4 mois (133 jours). Bien que le cycle soit irrégulier et difficile à définir, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout si le stock est potentiellement épuisé. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité (médiane de l'historique récent) pour maintenir la disponibilité sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 126 tokens
- **Total**: 998 tokens



</details>


<details>
<summary><strong>42. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 21 mai 2025, soit plus de 130 jours sans activité. Bien que la rotation soit très faible, le principe de précaution B2B et l'absence d'historique sur l'année précédente imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée si un cycle de vente se déclenche. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité (médiane de l'historique récent) pour maintenir une disponibilité minimale sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 133 tokens
- **Total**: 1,004 tokens



</details>




### Donnees d'Input LLM (42 produits)


<details>
<summary><strong>1. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-07-03 07:07:44: 2u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 3u
- 2024-06-05 06:41:01: 1u
- 2024-03-25 07:48:16: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-07-03 07:07:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-25 07:48:16: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-05-21 06:30:22: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-05 06:41:01: 6u
- 2024-03-25 07:48:16: 2u
- 2023-12-05 07:50:03: 8u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 3u
- 2025-07-03 07:07:44: 3u
- 2025-05-21 06:30:22: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-05 06:41:01: 12u
- 2024-03-25 07:48:16: 6u
- 2023-12-05 07:50:03: 10u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-07-03 07:07:44: 3u
- 2025-05-21 06:30:22: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 2u
- 2024-06-05 06:41:01: 4u
- 2024-03-25 07:48:16: 5u
- 2023-12-05 07:50:03: 8u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV131] LV Tartinade Potiron 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 2u
- 2025-07-03 07:07:44: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-05 06:41:01: 2u
- 2023-12-05 07:50:03: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 2u
- 2025-05-21 06:30:22: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-05 06:41:01: 6u
- 2024-03-25 07:48:16: 1u
- 2023-12-05 07:50:03: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 4u
- 2025-07-03 07:07:44: 3u
- 2025-05-21 06:30:22: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 3u
- 2024-06-05 06:41:01: 12u
- 2024-03-25 07:48:16: 5u
- 2023-12-05 07:50:03: 10u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>9. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 1u
- 2024-06-05 06:41:01: 3u
- 2024-03-25 07:48:16: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 5u
- 2025-07-03 07:07:44: 2u
- 2025-05-21 06:30:22: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-05 06:41:01: 12u
- 2024-03-25 07:48:16: 6u
- 2023-12-05 07:50:03: 10u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 4u
- 2025-07-03 07:07:44: 2u
- 2025-05-21 06:30:22: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 1u
- 2024-06-05 06:41:01: 10u
- 2024-03-25 07:48:16: 4u
- 2023-12-05 07:50:03: 8u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>12. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-05-21 06:30:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 2u
- 2023-12-05 07:50:03: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV040] LV Caprons apéritifs 240g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-07-03 07:07:44: 1u
- 2025-05-21 06:30:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-25 07:48:16: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-05-21 06:30:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 2u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-07-03 07:07:44: 1u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-07-03 07:07:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 2u
- 2025-07-03 07:07:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-07-03 07:07:44: 1u
- 2025-05-21 06:30:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>22. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 2u
- 2025-07-03 07:07:44: 5u
- 2025-05-21 06:30:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>23. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 2u
- 2025-07-03 07:07:44: 4u
- 2025-05-21 06:30:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>24. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 2u
- 2025-07-03 07:07:44: 2u
- 2025-05-21 06:30:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>25. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 2u
- 2025-07-03 07:07:44: 1u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>26. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-07-03 07:07:44: 1u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>27. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-07-03 07:07:44: 1u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>28. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 06:30:12: 1u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>29. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:07:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 2u
- 2024-03-25 07:48:16: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>30. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:07:44: 2u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 3u
- 2024-06-05 06:41:01: 1u
- 2024-03-25 07:48:16: 2u
- 2023-12-05 07:50:03: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>31. [LV154] LV Vinaigrette Miel et moutarde 250 ml bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:07:44: 2u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 3u
- 2024-06-05 06:41:01: 1u
- 2024-03-25 07:48:16: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>32. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:07:44: 3u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 3u
- 2024-06-05 06:41:01: 6u
- 2024-03-25 07:48:16: 3u
- 2023-12-05 07:50:03: 6u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>33. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:07:44: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 4u
- 2024-06-05 06:41:01: 3u
- 2024-03-25 07:48:16: 3u
- 2023-12-05 07:50:03: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>34. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:07:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 2u
- 2024-03-25 07:48:16: 4u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>35. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:07:44: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 3u
- 2024-06-05 06:41:01: 3u
- 2024-03-25 07:48:16: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>36. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:07:44: 5u
- 2025-05-21 06:30:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>37. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:07:44: 1u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>38. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:07:44: 1u
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>39. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 1u
- 2024-03-25 07:48:16: 2u
- 2023-12-05 07:50:03: 4u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>40. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:19:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>41. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>42. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 06:30:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (25)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV135] LV Tartinade Basilico 190g | 2 | Predicted 2u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Predicted 1u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Predicted 1u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 3 | Predicted 3u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [LV158] LV Moutarde 200 ml | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 2 | Predicted 2u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 3 | Predicted 3u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:12.113Z*
