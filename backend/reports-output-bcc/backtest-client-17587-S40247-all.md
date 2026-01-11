# Rapport Backtest - Client Epicerie Uhoda Vennes

## Contexte

- **Client** : Epicerie Uhoda Vennes (ID: 17587)
- **Commande réelle** : S40247
- **Date commande** : 2025-11-12 10:37:22
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 52
- **Tokens**: 48,720 input + 8,184 output = 56,904 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.8% | 52 produits prédits, 29 corrects |
| **Rappel** | 96.7% | 30 produits réels, 29 détectés |
| **F1-Score** | 70.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.59 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 34.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -22.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 17 | Avec erreur |

---

## True Positives (29)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV132] LV Tartinade Houmous type 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (29 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement moyenne d'environ 45 à 60 jours. La dernière commande datant du 23 octobre 2025 (soit 19 jours avant la date actuelle), le risque de rupture entre dans l'horizon des 30 jours du seuil de réapprovisionnement (70% du cycle atteint ou proche). Bien que l'historique N-1 affichait des quantités de 2u, les quatre dernières commandes de 2025 sont stabilisées à 1u. En application de la règle de la médiane récente et du respect des tendances à la baisse, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 160 tokens
- **Total**: 1,199 tokens



</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 3 à 4 mois). La dernière commande date du 23 octobre 2025, soit il y a 19 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture potentielle, d'autant plus que l'historique N-1 montre une activité en novembre. En application du principe de précaution B2B et face à un cycle de rotation espacé, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la dernière commande enregistrée, afin d'éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 167 tokens
- **Total**: 1,122 tokens



</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse du cycle récent montre des intervalles de 19, 75 et 38 jours. La dernière commande date du 23 octobre 2025, soit 19 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous couvrons la période jusqu'au 11 décembre. Le délai depuis la dernière commande (19j) ajouté au seuil (30j) atteint 49 jours, ce qui dépasse le cycle moyen récent (~44 jours). Il existe donc un risque de rupture imminent. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une tendance à la baisse avec des commandes de 1u (septembre et octobre). La médiane des commandes récentes est de 1u. En respectant la règle de prudence B2B et la tendance baissière constatée, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,020 tokens
- **Output**: 222 tokens
- **Total**: 1,242 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 28 jours. La dernière commande remonte au 23 octobre, soit 19 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans les 11 prochains jours, ce qui justifie une commande immédiate par précaution. La quantité retenue est de 2 unités, correspondant à la médiane et au mode des commandes récentes (2u), tout en respectant la stabilité de ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 126 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 45 jours. La dernière commande datant du 23 octobre (il y a 19 jours), le prochain besoin est estimé d'ici 25 à 30 jours, ce qui entre dans l'horizon du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à un cycle légèrement irrégulier, un risque de rupture est identifié. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes (alternance entre 1u et 2u) et respectant la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 174 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>6. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 59 et 73 jours. La dernière commande datant du 23 octobre (il y a 19 jours), le risque de rupture immédiat semble faible, mais le cycle est irrégulier et la rotation est très faible (1 unité par commande). En application du principe de précaution B2B et pour couvrir l'horizon de 30 jours (Replenishment Threshold Days), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes historiques récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 929 tokens
- **Output**: 133 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 60 à 75 jours (77 jours entre juin et août, 77 jours entre août et octobre). La dernière commande date du 23 octobre, soit il y a 19 jours. Avec un seuil de réapprovisionnement de 30 jours, nous couvrons l'horizon jusqu'au 11 décembre (soit 49 jours après la dernière commande). Bien que nous ne soyons pas encore au terme du cycle moyen, la règle de précaution B2B s'applique ici car le risque de rupture se rapproche de la fenêtre de 30 jours. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes précédentes (rotation très faible et régulière).

**Tokens utilises pour cette prediction:**
- **Input**: 916 tokens
- **Output**: 177 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>8. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 28 jours (intervalles de 21, 39 et 21 jours). La dernière commande datant du 06/10/2025 (soit 36 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est dépassé, indiquant un risque de rupture imminent. Bien que la dernière commande ait été de 2 unités, la médiane historique sur les commandes récentes et l'historique N-1 est de 1 unité. En application du principe de précaution B2B et de la règle de choisir la valeur la plus basse en cas de doute sur une faible rotation, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 175 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>9. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement d'environ 21 à 30 jours sur les commandes récentes (septembre/octobre). La dernière commande datant du 06 octobre, soit il y a 36 jours, le seuil de réapprovisionnement de 30 jours est dépassé, ce qui indique un risque de rupture imminent. L'historique N-1 confirme également une activité régulière sur cette période de l'année. La quantité retenue est de 2 unités, correspondant à la médiane stable observée sur la quasi-totalité des commandes historiques (récentes et N-1).

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 145 tokens
- **Total**: 1,184 tokens



</details>


<details>
<summary><strong>10. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen de commande sur l'historique récent est d'environ 32 jours. La dernière commande remonte au 06/10/2025, soit 36 jours avant la date actuelle (11/11/2025). Le délai depuis la dernière commande dépasse déjà le cycle moyen et l'horizon de réapprovisionnement de 30 jours. Le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane des commandes récentes est de 2u. Conformément aux règles de rotation faible et de maintien des volumes habituels, la quantité de 2u est retenue pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,072 tokens
- **Output**: 179 tokens
- **Total**: 1,251 tokens



</details>


<details>
<summary><strong>11. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 33 jours (intervalles de 18, 42 et 49 jours sur les dernières occurrences). La dernière commande datant du 06 octobre 2025, soit il y a 36 jours, nous avons dépassé le cycle moyen. Le risque de rupture est donc avéré pour l'horizon des 30 prochains jours (Replenishment Threshold Days). Concernant la quantité, l'historique récent est très stable avec une prédominance de commandes à 2 unités. La médiane des commandes récentes (2, 1, 2, 2, 2) est de 2. Conformément aux règles de gestion B2B, nous maintenons ce volume habituel pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,055 tokens
- **Output**: 183 tokens
- **Total**: 1,238 tokens



</details>


<details>
<summary><strong>12. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 30 à 35 jours (intervalles de 21, 39, 36 et 29 jours). La dernière commande datant du 06 octobre 2025, soit il y a 36 jours, le produit a dépassé son cycle habituel et présente un risque de rupture immédiat ou dans l'horizon des 30 jours (seuil de réapprovisionnement). La quantité commandée est extrêmement stable avec une médiane de 2 unités sur les 4 dernières commandes et sur la quasi-totalité de l'historique N-1. En suivant le principe de précaution B2B et la règle de la médiane, une commande de 2 unités est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 1,090 tokens
- **Output**: 179 tokens
- **Total**: 1,269 tokens



</details>


<details>
<summary><strong>13. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 35 à 45 jours. La dernière commande datant du 06 octobre 2025 (il y a 36 jours), nous avons dépassé 70% du cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). Bien que l'historique N-1 montre des pics à 2u en automne, l'historique récent est dominé par des commandes de 1u (médiane de 1u sur les 4 dernières commandes). En application du principe de précaution B2B et de la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,020 tokens
- **Output**: 184 tokens
- **Total**: 1,204 tokens



</details>


<details>
<summary><strong>14. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 21 jours entre chaque réapprovisionnement. La dernière commande datant du 06 octobre 2025 (soit 36 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique récent est très stable avec une alternance entre 1u et 2u. Conformément à la règle de la médiane sur les 7 dernières commandes (2, 2, 1, 2, 1, 2, 2), la valeur médiane est de 2u. Cette quantité est cohérente avec l'historique N-1 pour maintenir un stock de roulement sécuritaire sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,089 tokens
- **Output**: 189 tokens
- **Total**: 1,278 tokens



</details>


<details>
<summary><strong>15. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 06/10/2025, soit 36 jours avant la date actuelle. Bien que la rotation soit très faible (cycle long), le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais régulière, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane historique et au volume de la dernière commande, conformément à la règle de ne pas augmenter les stocks sans raison sur les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 135 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>16. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles irréguliers (environ 20 à 90 jours). La dernière commande remonte au 6 octobre 2025, soit 36 jours avant la date actuelle. Ce délai dépasse le seuil de réapprovisionnement de 30 jours et correspond à une période de risque de rupture selon le principe de précaution B2B. L'historique récent et N-1 montre une rotation faible et stable entre 1 et 2 unités. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute sur un produit à faible rotation, une quantité de 1 unité est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 160 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>17. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 06/10/2025, soit 36 jours avant la date actuelle. L'historique récent montre un cycle de commande moyen d'environ 40 à 50 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici la prochaine fenêtre de commande. En suivant le principe de précaution B2B et la règle de la médiane sur l'historique récent (1u, 2u, 1u, 1u), la quantité retenue est de 1 unité, ce qui correspond à la valeur la plus fréquente et la plus basse en cas de doute pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 161 tokens
- **Total**: 1,183 tokens



</details>


<details>
<summary><strong>18. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 45 à 60 jours. La dernière commande remonte au 06/10/2025, soit 36 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 80% du cycle habituel. Conformément au principe de précaution B2B, une commande est nécessaire. Concernant la quantité, l'historique récent est extrêmement stable avec des commandes unitaires systématiques (médiane de 1u). On maintient donc cette quantité de 1 unité pour couvrir le prochain cycle sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 158 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>19. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 06/10/2025, soit 36 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais fréquent à cette période de l'année (cf. commande de 2u en novembre 2023). Le délai depuis la dernière commande dépasse le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture imminent. En suivant la règle de précaution B2B et en se basant sur la médiane des commandes récentes (1u), une commande de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 146 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>20. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 73 et 42 jours (moyenne ~57 jours). Depuis la dernière commande du 06/10/2025, 36 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 63% du cycle moyen dans un contexte de rotation irrégulière (principe de précaution B2B appliqué). La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 4), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 916 tokens
- **Output**: 147 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>21. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 40 jours (21 jours entre les deux dernières, 60 jours entre les précédentes). Depuis la dernière commande du 06/10/2025, 36 jours se sont écoulés, ce qui dépasse 70% du cycle moyen et indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et au volume habituel pour ce produit à faible rotation, afin d'éviter un surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 158 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>22. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 06/10/2025, soit 36 jours avant la date actuelle. L'historique montre un cycle moyen d'environ 30 à 40 jours entre les commandes. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 1u, 2u et 1u. La médiane de l'historique récent est de 1u. En cas de doute ou de rotation faible, la règle impose de choisir la valeur la plus basse pour éviter le surstock. La quantité retenue est donc de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 186 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>23. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 septembre 2025, soit 57 jours. Le cycle moyen récent est d'environ 45 jours (21 jours entre juin/août, 21 jours entre août/septembre). Nous avons largement dépassé ce cycle moyen et le seuil de réapprovisionnement de 30 jours est atteint. Le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u, 1u et 2u. La médiane de ces commandes est de 1u. Conformément à la règle de prudence sur les faibles rotations et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 182 tokens
- **Total**: 1,117 tokens



</details>


<details>
<summary><strong>24. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant de 18 à 44 jours. La dernière commande remonte au 15 septembre, soit 57 jours avant la date actuelle (11 novembre). Ce délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou une consommation du stock de sécurité. En application du principe de précaution B2B, une commande est nécessaire. Concernant la quantité, l'historique récent montre une rotation très stable de 1 unité, avec un pic isolé à 2 unités en septembre. Conformément à la règle de la médiane et à la gestion des rotations faibles, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 162 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>25. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 31 jours (35, 36 et 39 jours entre les premières commandes). La dernière commande remonte au 15 septembre, soit 57 jours avant la date actuelle (11 novembre). Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture ou un besoin imminent. En suivant la règle de la médiane des quantités récentes (1, 1, 1, 2), la quantité retenue est de 1 unité, privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 160 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>26. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle moyen entre les commandes récentes est d'environ 25 jours. La dernière commande remonte au 15 septembre, soit 57 jours avant la date actuelle (11 novembre). Ce délai dépasse largement le cycle habituel et l'horizon de réapprovisionnement de 30 jours. Il existe un risque de rupture critique ou un besoin non couvert. ÉTAPE 2 : L'historique récent montre des quantités de 1u, 2u, 2u et 2u. La médiane des commandes récentes est de 2u. Conformément au principe de précaution B2B et à la stabilité de la rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 161 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>27. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 septembre, soit 57 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence de cycle établi, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, représentant la médiane de l'historique disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 160 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>28. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 21 jours puis 39 jours (moyenne de 30 jours). Depuis la dernière commande du 15 septembre, 57 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture ou un besoin imminent. En suivant la règle de la médiane sur l'historique récent (1u, 2u, 1u), la quantité recommandée est de 1 unité, privilégiant la valeur la plus basse en cas de doute pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 142 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>29. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre une rotation lente mais régulière avec des intervalles de 19 à 54 jours. La dernière commande remonte au 25 août, soit 78 jours avant la date actuelle. Le cycle moyen est largement dépassé, ce qui indique un besoin de réapprovisionnement immédiat pour éviter une rupture de stock prolongée (principe de précaution B2B). ÉTAPE 2 : Estimation quantité. Les trois dernières commandes sont identiques (1u). La médiane et la tendance constante confirment une quantité de 1 unité pour maintenir le stock sans surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 914 tokens
- **Output**: 144 tokens
- **Total**: 1,058 tokens



</details>




### Donnees d'Input LLM (29 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-08-25 06:29:58: 1u
- 2025-07-17 09:56:09: 1u
- 2025-07-02 07:40:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-06-13 09:39:10: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:26:02: 2u
- 2024-05-16 07:09:48: 2u
- 2024-02-05 13:12:52: 1u
- 2023-11-21 07:34:13: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-09-15 06:21:36: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 3u
- 2024-03-18 09:21:22: 2u
- 2023-11-21 07:34:13: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 11:48:15: 2u
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u
- 2025-06-13 09:39:10: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 0u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-08-07 13:57:36: 1u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 1u
- 2025-08-07 13:57:36: 1u
- 2025-07-17 09:56:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:26:02: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2023-11-21 07:34:13: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u
- 2025-07-02 07:40:31: 2u
- 2025-06-13 09:39:10: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:55:57: 3u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 3u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 2u
- 2025-07-02 07:40:31: 2u
- 2025-06-13 09:39:10: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 1u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u
- 2025-08-07 13:57:36: 2u
- 2025-07-02 07:40:31: 2u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [LV131] LV Tartinade Potiron 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-08-25 06:29:58: 1u
- 2025-07-17 09:56:09: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-05-16 07:09:48: 3u
- 2024-02-05 13:12:52: 1u
- 2023-11-21 07:34:13: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 2u
- 2025-07-17 09:56:09: 1u
- 2025-07-02 07:40:31: 2u
- 2025-06-13 09:39:10: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:55:57: 3u
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:55:57: 1u
- 2024-06-26 06:47:10: 2u
- 2024-03-18 09:21:22: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:26:02: 1u
- 2024-04-11 06:31:38: 2u
- 2023-11-21 07:34:13: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-08-07 13:57:36: 2u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:26:02: 1u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 3u
- 2024-03-18 09:21:22: 2u
- 2024-01-04 15:45:16: 1u
- 2023-11-21 07:34:13: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-08-25 06:29:58: 1u
- 2025-07-17 09:56:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:26:02: 1u
- 2024-05-16 07:09:48: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 1u
- 2024-01-04 15:45:16: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-07-17 09:56:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 12:55:57: 3u
- 2024-06-26 06:47:10: 1u
- 2024-05-16 07:09:48: 1u
- 2023-11-21 07:34:13: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-08-25 06:29:58: 1u
- 2025-06-13 09:39:10: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>22. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>23. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 06:47:10: 2u
- 2023-11-21 07:34:13: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>24. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>25. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-07 13:57:36: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>26. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 2u
- 2025-08-07 13:57:36: 1u
- 2025-07-02 07:40:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>27. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:21:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>28. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:21:36: 1u
- 2025-08-07 13:57:36: 2u
- 2025-07-17 09:56:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>29. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:29:58: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (23)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Predicted 2u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 1 | Predicted 1u but not ordered |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Predicted 1u but not ordered |
| [CB005] CB Apple juice 1l | 1 | Predicted 1u but not ordered |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Predicted 1u but not ordered |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LV217] LV Tartinade Basilic 380g | 1 | Predicted 1u but not ordered |
| [LV189] LV Tartinade Houmous Type 380g | 1 | Predicted 1u but not ordered |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [CB001] CB Apple juice 25cl | 1 | Predicted 1u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 4 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:05:25.161Z*
