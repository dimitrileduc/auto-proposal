# Rapport Backtest - Client croquez Local

## Contexte

- **Client** : croquez Local (ID: 17591)
- **Commande réelle** : S39916
- **Date commande** : 2025-11-14 10:24:13
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 70
- **Tokens**: 64,947 input + 11,166 output = 76,113 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 64.4% | 59 produits prédits, 38 corrects |
| **Rappel** | 100.0% | 38 produits réels, 38 détectés |
| **F1-Score** | 78.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.55 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -1.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 20 | Égalité parfaite |
| Partial Match (>0u) | 18 | Avec erreur |

---

## True Positives (38)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV146] LV Sauce Aïoli 200 ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV188] LV Tartinade Aubergine  380g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV040] LV Caprons apéritifs 240g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV147] LV Sauce Cocktail 200 ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (38 produits)


<details>
<summary><strong>1. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/10/2025, soit 36 jours avant la date actuelle. L'historique montre un cycle de commande variant entre 30 et 90 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons l'intervalle moyen constaté récemment. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente observée dans l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 139 tokens
- **Total**: 1,129 tokens



</details>


<details>
<summary><strong>2. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/10/2025, soit 36 jours avant la date actuelle. L'historique récent montre un cycle de commande variant entre 28 et 86 jours. Étant donné que nous avons dépassé le délai de la dernière rotation (28 jours) et que le seuil de réapprovisionnement est de 30 jours, il existe un risque de rupture imminent ou un besoin de stock de précaution. En suivant la règle de la médiane sur les quantités récentes (1u, 2u, 1u), la médiane est de 1u. Conformément au principe de précaution B2B et à la gestion des faibles rotations, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 951 tokens
- **Output**: 169 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>3. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 45 jours sur les derniers mois. La dernière commande datant du 08 octobre (il y a 36 jours), le seuil de réapprovisionnement de 30 jours est dépassé, indiquant un risque de rupture imminent. Bien que l'historique N-1 montre une activité plus calme en fin d'année, la tendance récente sur les deux dernières commandes est de 2 unités. En suivant la règle de la médiane des commandes récentes (2, 2, 1, 1), la quantité de 2 unités est retenue pour couvrir le besoin tout en restant prudent.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 152 tokens
- **Total**: 1,191 tokens



</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'approvisionnement environ tous les 30 à 50 jours. La dernière commande remontant au 08/10/2025 (soit 36 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint, créant un risque de rupture imminent. Concernant la quantité, l'historique récent est extrêmement stable avec une récurrence systématique de 3 unités lors des quatre dernières commandes. La médiane des commandes récentes est de 3u, ce qui correspond également au volume majoritaire de l'année précédente. Conformément aux règles de maintien de quantité pour une rotation régulière, la commande est fixée à 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 166 tokens
- **Total**: 1,204 tokens



</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 08/10/2025, soit 36 jours avant la date actuelle. Le cycle moyen constaté est d'environ 28 à 35 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. L'historique récent montre une stabilisation à 1 unité lors des deux dernières commandes, contre 2 unités auparavant. En suivant la règle de la médiane et en respectant la tendance à la baisse pour éviter le surstockage sur un produit à faible rotation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 143 tokens
- **Total**: 1,165 tokens



</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 45 jours. La dernière commande remontant au 08/10/2025 (soit 36 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint, créant un risque de rupture imminent. Bien que la rotation soit faible, le principe de précaution B2B impose une commande. La quantité retenue est de 2 unités, correspondant à la médiane et au mode des commandes historiques (1u ou 2u), afin de couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 142 tokens
- **Total**: 1,180 tokens



</details>


<details>
<summary><strong>7. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 30 à 60 jours. La dernière commande datant du 08 octobre 2025 (soit 36 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint, créant un risque de rupture imminent. L'historique récent (2025) montre une stabilité à 1 unité par commande, tandis que l'historique N-1 confirme un besoin constant sur la période de fin d'année. En suivant la règle de la médiane des commandes récentes et le principe de précaution B2B, une commande de 1 unité est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 1,003 tokens
- **Output**: 158 tokens
- **Total**: 1,161 tokens



</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 28 à 49 jours. La dernière commande remontant au 08/10/2025 (soit 36 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est dépassé, indiquant un risque de rupture imminent. Le volume de commande est extrêmement stable à 2 unités sur les trois dernières occurrences. En suivant la règle de la médiane et de la stabilité du cycle récent, une quantité de 2 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 140 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 08/10/2025, soit il y a 36 jours. L'historique récent montre un cycle moyen d'environ 35 à 45 jours (ex: 28 jours entre sept et oct, 49 jours entre juillet et sept). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous avons dépassé le délai habituel de commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 3u, 2u, 3u, 3u. La médiane de l'historique récent est de 3u. L'historique N-1 confirme également une demande stable autour de 3u pour cette période de l'année. Conformément au principe de précaution B2B et à la stabilité de la rotation, une commande de 3u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,021 tokens
- **Output**: 223 tokens
- **Total**: 1,244 tokens



</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 08/10/2025, soit 36 jours avant la date actuelle (13/11/2025). L'historique récent montre des cycles de commande variant entre 28 et 49 jours. Le délai actuel (36 jours) dépasse 70% du cycle moyen observé. Il existe donc un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent (2025) présente des volumes de 1u, 2u, 1u, 1u. La médiane de ces commandes est de 1u. Conformément à la règle de prudence sur les faibles rotations et au choix de la valeur la plus basse en cas de doute, la quantité recommandée est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 211 tokens
- **Total**: 1,200 tokens



</details>


<details>
<summary><strong>11. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement d'environ 30 à 50 jours sur les derniers mois. La dernière commande datant du 08 octobre 2025 (soit 36 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint. Il existe un risque de rupture imminent. En appliquant la règle de la médiane sur l'historique récent (1u, 2u, 2u, 3u), la médiane se situe à 2 unités. Conformément au principe de précaution B2B et à la stabilisation des volumes récents, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 159 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
Le cycle de commande moyen observé sur les derniers mois est d'environ 35 à 45 jours. La dernière commande datant du 08/10/2025 (soit 36 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint, créant un risque de rupture imminent. En suivant la règle de la médiane sur l'historique récent (2u, 1u, 2u, 2u), la quantité recommandée est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 130 tokens
- **Total**: 1,137 tokens



</details>


<details>
<summary><strong>13. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement moyenne d'environ 30 à 45 jours. La dernière commande datant du 08/10/2025 (soit 36 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint, créant un risque de rupture imminent. Bien que les volumes soient faibles, l'historique récent et N-1 montre une alternance entre 1u et 2u. En application du principe de précaution B2B et en se basant sur la médiane des commandes historiques (2u), une commande de 2 unités est préconisée pour couvrir la période à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 1,020 tokens
- **Output**: 160 tokens
- **Total**: 1,180 tokens



</details>


<details>
<summary><strong>14. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 08/10/2025, soit 36 jours avant la date actuelle. L'historique montre une rotation lente mais régulière avec des commandes espacées de 2 à 4 mois en moyenne. Cependant, l'historique N-1 indique une commande le 21/10/2024, suggérant un besoin récurrent en fin d'année. En application du principe de précaution B2B (risque de rupture à l'horizon de 30 jours), un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes oscillent entre 1u et 2u. La médiane des commandes récentes et de l'historique N-1 est de 1u. Conformément à la règle de privilégier la valeur la plus basse en cas de rotation faible (1-2u), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 224 tokens
- **Total**: 1,195 tokens



</details>


<details>
<summary><strong>15. [LV188] LV Tartinade Aubergine  380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle observé entre les deux dernières commandes est de 77 jours. La dernière commande date du 08/10/2025, soit il y a 36 jours. Bien que nous n'ayons pas encore atteint 70% du cycle moyen (54 jours), le produit présente une rotation très faible et irrégulière. En application du principe de précaution B2B (si doute sur le cycle → prévoir), une commande est déclenchée pour éviter une rupture prolongée si le besoin se manifeste dans les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilité stricte à 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 194 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>16. [LV209] LV Confit de Figues Bio 150g (bocal weck)</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 08/10/2025, soit 36 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours. De plus, l'historique N-1 montre une commande à cette période (21/10/2024). Par principe de précaution B2B et pour éviter une rupture sur un produit à cycle lent mais présent, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 150 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>17. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/10/2025, soit 36 jours. Le cycle moyen récent est d'environ 28 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. L'historique N-1 montre également une activité régulière en octobre/novembre. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes oscillent entre 1u et 2u. La médiane des commandes historiques est de 2u. En suivant le principe de précaution B2B et la stabilité de la rotation, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,010 tokens
- **Output**: 167 tokens
- **Total**: 1,177 tokens



</details>


<details>
<summary><strong>18. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation faible mais régulière (1 unité par commande). La dernière commande date du 08/10/2025, soit il y a 36 jours. Le cycle moyen constaté en 2024 et 2025 est d'environ 60 à 70 jours, mais avec une commande enregistrée à la même période l'année dernière (21/10/2024), le risque de rupture à l'horizon des 30 jours de seuil de réapprovisionnement est réel. En application du principe de précaution B2B et pour maintenir le stock sur ce produit à faible rotation, une commande de 1 unité (médiane historique) est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 976 tokens
- **Output**: 172 tokens
- **Total**: 1,148 tokens



</details>


<details>
<summary><strong>19. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 30 à 60 jours). La dernière commande remonte au 08/10/2025, soit 36 jours avant la date actuelle. Ce délai dépasse le cycle moyen récent (28 jours entre les deux dernières commandes) et entre dans la fenêtre critique des 30 jours du seuil de réapprovisionnement. L'historique N-1 confirme également un besoin à cette période (commande le 21/10/2024). En application du principe de précaution B2B et face à un risque de rupture imminent, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane constante observée sur l'ensemble de l'historique.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 179 tokens
- **Total**: 1,117 tokens



</details>


<details>
<summary><strong>20. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 35 à 45 jours entre les dernières commandes. La dernière commande datant du 08/10/2025 (soit 36 jours avant la date actuelle), nous avons dépassé 70% du cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. En suivant la règle de la médiane sur l'historique récent (2u, 2u, 2u, 1u), la quantité de 2 unités est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 150 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>21. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 38 jours. La dernière commande datant du 08/10/2025 (soit 36 jours avant la date actuelle), nous avons dépassé 70% du cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). En suivant la règle de la médiane sur les quantités récentes (4, 3, 2, 2), la médiane se situe entre 2 et 3. Conformément au principe de précaution B2B pour éviter la rupture tout en restant prudent sur les stocks, une quantité de 3 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 927 tokens
- **Output**: 163 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>22. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 28 et 49 jours. La dernière commande remonte au 08/10/2025, soit 36 jours avant la date actuelle. Ce délai dépasse 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes se situe entre 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage sur des produits à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 927 tokens
- **Output**: 173 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>23. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 42 jours (28 jours entre les deux dernières commandes, 49 jours entre les précédentes). La dernière commande datant du 08/10/2025, soit il y a 36 jours, nous avons dépassé 70% du cycle moyen. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). La quantité retenue correspond à la médiane des commandes récentes (1u), en respectant le principe de précaution B2B sans surestimer le stock pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 148 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>24. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen constaté entre les dernières commandes est d'environ 45 jours (37 jours entre les deux dernières, 49 jours entre les précédentes). La dernière commande date du 08/10/2025, soit 36 jours avant la date actuelle. Le seuil de réapprovisionnement étant de 30 jours, le risque de rupture est imminent car nous avons atteint 80% du cycle moyen. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent est extrêmement stable avec une quantité constante de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 175 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>25. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle observé entre les deux dernières commandes est de 77 jours. La dernière commande date du 08/10/2025, soit il y a 36 jours. Bien que nous soyons à environ 47% du cycle moyen, l'irrégularité de l'historique et le principe de précaution B2B imposent de prévoir un réapprovisionnement pour couvrir les 30 prochains jours (Replenishment Threshold Days), afin d'éviter une rupture sur un produit à rotation lente mais constante. ÉTAPE 2 : L'historique récent montre une stabilité parfaite avec des commandes de 3 unités. La médiane est de 3u. Conformément aux règles, on maintient cette quantité constante.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 172 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>26. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
Le cycle de commande observé est de 28 jours (entre le 10/09 et le 08/10). Au 13/11, 36 jours se sont écoulés depuis la dernière commande, ce qui dépasse le cycle moyen et entre dans la fenêtre de risque des 30 jours (Replenishment Threshold). Un besoin est donc détecté par précaution. La quantité est fixée à 2 unités, correspondant à la médiane et à la constante des commandes récentes, conformément à la règle de maintien pour les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 125 tokens
- **Total**: 1,017 tokens



</details>


<details>
<summary><strong>27. [WIG07] WIGNAC cidre naturel bio sans alcool 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 37 et 77 jours. Depuis la dernière commande du 08/10/2025, 36 jours se sont écoulés. Étant donné que nous atteignons la durée du cycle court et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est identifié par précaution. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes (1, 1, 2), en privilégiant la valeur basse conformément aux règles de gestion des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 135 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>28. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 septembre 2025, soit 64 jours. L'historique montre un cycle moyen d'environ 50 à 70 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une rotation très stable et faible (majoritairement 1u). La médiane des commandes récentes est de 1u. En respectant le principe de ne pas surestimer les produits à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 163 tokens
- **Total**: 1,151 tokens



</details>


<details>
<summary><strong>29. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 2 à 3 mois. La dernière commande date du 10 septembre 2025, soit il y a 64 jours. En comparant avec l'historique N-1 (commande le 21 octobre 2024), le produit entre dans sa fenêtre critique de réapprovisionnement sous 30 jours. La rotation est très faible et constante à 1 unité par commande. En application du principe de précaution B2B et de la règle de maintien des faibles rotations, une commande de 1 unité est nécessaire pour couvrir le risque de rupture imminent.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 149 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>30. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière. La dernière commande remonte au 10 septembre 2025, soit 64 jours avant la date actuelle. Le cycle moyen observé en 2024 était d'environ 60 à 70 jours. Nous arrivons donc à l'échéance critique du cycle de réapprovisionnement. En application du principe de précaution B2B (70% du cycle atteint), un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur constante des commandes les plus récentes de 2025.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 155 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>31. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 10 septembre 2025, soit 64 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais récurrent (environ tous les 3 à 4 mois). En appliquant le principe de précaution B2B, le délai écoulé depuis la dernière commande suggère un risque de rupture imminent ou un besoin de réapprovisionnement pour couvrir les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane et au volume maximum observé lors des commandes précédentes, afin de sécuriser le stock sans surstockage excessif pour ce type de produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 148 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>32. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen observé est d'environ 49 jours (entre juillet et septembre). La dernière commande remonte au 10 septembre, soit 64 jours avant la date actuelle. Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou un besoin de réassort par précaution. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une consommation constante et faible de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 168 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>33. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 23 juillet 2025, soit plus de 110 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (environ 37 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 176 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>34. [LV156] LV Sauce barbecue 263 ml bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit environ 150 jours. Bien que la rotation soit très faible, l'historique montre des commandes sporadiques (mars, août, juin). En application du principe de précaution B2B et face à l'incertitude du cycle, une commande est prévue pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1u. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 165 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>35. [LV165] LV Vol-au-vent (avec viande de volaille) 400 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit environ 150 jours. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une commande en décembre (2u). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la période de fin d'année où une demande a été observée précédemment. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des commandes majoritaires de 1u (médiane). Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1u pour éviter le surstock tout en couvrant le risque de rupture.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 193 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>36. [LV040] LV Caprons apéritifs 240g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (1 unité par commande). La dernière commande remonte à juin 2025, soit environ 150 jours. Bien que le cycle soit difficile à définir précisément, l'historique montre des besoins espacés de plusieurs mois. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture sur un horizon de 30 jours) et compte tenu de l'absence de commande depuis 5 mois, un réapprovisionnement est préconisé. La quantité est fixée à 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 149 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>37. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (dernière commande il y a 150 jours). Bien que le cycle soit difficile à déterminer, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout face à l'absence de données récentes. En suivant la règle des cas particuliers pour les rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane historique et au volume des commandes précédentes, afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 125 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>38. [LV147] LV Sauce Cocktail 200 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit environ 150 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement tout cycle raisonnable. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique montre des commandes de 1u ou 2u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est la médiane basse de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 898 tokens
- **Output**: 157 tokens
- **Total**: 1,055 tokens



</details>




### Donnees d'Input LLM (38 produits)


<details>
<summary><strong>1. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 2u
- 2025-06-16 11:04:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 2u
- 2023-12-05 07:47:51: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 2u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-01-11 08:27:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u
- 2025-07-23 07:42:23: 1u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 3u
- 2025-09-10 06:22:23: 3u
- 2025-07-23 07:42:23: 3u
- 2025-06-16 11:04:07: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 4u
- 2024-08-27 06:21:49: 3u
- 2024-06-24 13:19:30: 4u
- 2024-05-06 12:55:07: 3u
- 2024-03-15 08:42:38: 3u
- 2024-01-11 08:27:56: 3u
- 2023-12-05 07:47:51: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u
- 2025-07-23 07:42:23: 2u
- 2025-06-16 11:04:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 2u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u
- 2025-07-23 07:42:23: 2u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u
- 2025-07-23 07:42:23: 2u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 1u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u
- 2025-07-23 07:42:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 3u
- 2024-01-11 08:27:56: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 3u
- 2025-09-10 06:22:23: 2u
- 2025-07-23 07:42:23: 3u
- 2025-06-16 11:04:07: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 3u
- 2024-08-27 06:21:49: 3u
- 2024-06-24 13:19:30: 4u
- 2024-03-15 08:42:38: 4u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 2u
- 2025-07-23 07:42:23: 1u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 3u
- 2025-09-10 06:22:23: 2u
- 2025-07-23 07:42:23: 2u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-06-24 13:19:30: 1u
- 2024-05-06 12:55:07: 1u
- 2024-01-11 08:27:56: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u
- 2025-07-23 07:42:23: 2u
- 2025-06-16 11:04:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-27 06:21:49: 2u
- 2024-05-06 12:55:07: 2u
- 2024-03-15 08:42:38: 3u
- 2024-01-11 08:27:56: 3u
- 2023-12-05 07:47:51: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u
- 2025-07-23 07:42:23: 2u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-06-16 11:04:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [LV188] LV Tartinade Aubergine  380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-07-23 07:42:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [LV209] LV Confit de Figues Bio 150g (bocal weck)</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2023-12-05 07:47:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u
- 2025-07-23 07:42:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 1u
- 2024-05-06 12:55:07: 2u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-07-23 07:42:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-06-24 13:19:30: 1u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u
- 2025-07-23 07:42:23: 2u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 4u
- 2025-09-10 06:22:23: 3u
- 2025-07-23 07:42:23: 2u
- 2025-06-16 11:04:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u
- 2025-07-23 07:42:23: 1u
- 2025-06-16 11:04:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>23. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u
- 2025-07-23 07:42:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>24. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u
- 2025-07-23 07:42:23: 1u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>25. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 3u
- 2025-07-23 07:42:23: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>26. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>27. [WIG07] WIGNAC cidre naturel bio sans alcool 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-07-23 07:42:23: 1u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>28. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:22:23: 1u
- 2025-07-23 07:42:23: 2u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>29. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:22:23: 1u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>30. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:22:23: 2u
- 2025-06-16 11:04:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>31. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:22:23: 2u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-27 06:21:49: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>32. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:22:23: 1u
- 2025-07-23 07:42:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>33. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 07:42:23: 1u
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>34. [LV156] LV Sauce barbecue 263 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-27 06:21:49: 1u
- 2024-03-15 08:42:38: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>35. [LV165] LV Vol-au-vent (avec viande de volaille) 400 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:19:30: 1u
- 2024-03-15 08:42:38: 1u
- 2023-12-05 07:47:51: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>36. [LV040] LV Caprons apéritifs 240g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-03-15 08:42:38: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>37. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-27 06:21:49: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>38. [LV147] LV Sauce Cocktail 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 11:04:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:01:10: 1u
- 2024-03-15 08:42:38: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (21)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV158] LV Moutarde 200 ml | 1 | Predicted 1u but not ordered |
| [LV189] LV Tartinade Houmous Type 380g | 1 | Predicted 1u but not ordered |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 1 | Predicted 1u but not ordered |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | Predicted 2u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Predicted 2u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Predicted 2u but not ordered |
| [WIG02] WIGNAC cidre rosé bio 330ml | 1 | Predicted 1u but not ordered |
| [MF0052] MF Pois chiches  500g | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [RF003] REFIELD Maïs 500G  | 1 | Predicted 1u but not ordered |
| [MF0060] MF Passata | 1 | Predicted 1u but not ordered |
| [MF0051] MF Kidney Beans 500g | 1 | Predicted 1u but not ordered |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | Predicted 2u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Predicted 2u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Predicted 2u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:22.769Z*
