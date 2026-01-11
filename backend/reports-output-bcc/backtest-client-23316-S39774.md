# Rapport Backtest - Client Ferme de Warichet

## Contexte

- **Client** : Ferme de Warichet (ID: 23316)
- **Commande réelle** : S39774
- **Date commande** : 2025-10-21 07:45:53
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 51
- **Tokens**: 47,317 input + 7,979 output = 55,296 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.9% | 42 produits prédits, 26 corrects |
| **Rappel** | 100.0% | 26 produits réels, 26 détectés |
| **F1-Score** | 76.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 24.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 23.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -9.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 14 | Égalité parfaite |
| Partial Match (>0u) | 12 | Avec erreur |

---

## True Positives (26)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV345] LV Spread KIDS 200ml Organic | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (26 produits)


<details>
<summary><strong>1. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 37 jours entre les deux dernières commandes. La dernière commande datant du 10 septembre (soit il y a 40 jours), nous avons dépassé le cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et face à une rotation faible mais existante, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la commande la plus récente et à la valeur la plus basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 147 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 35 à 40 jours. La dernière commande remontant au 10 septembre 2025 (soit 40 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, confirmant un risque de rupture imminent. L'historique de l'année précédente confirme également une activité régulière en octobre/novembre. En appliquant la règle de la médiane sur les commandes récentes (2, 3, 3, 4), la quantité retenue est de 3 unités pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 147 tokens
- **Total**: 1,185 tokens



</details>


<details>
<summary><strong>3. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence irrégulière mais persistante. La dernière commande remonte au 10 septembre 2025, soit 40 jours avant la date actuelle. Bien que le cycle moyen soit difficile à établir précisément, l'historique N-1 montre une activité importante en octobre et novembre (période de fin d'année propice aux produits de type tartinade aux truffes). Par principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes (1u, 1u, 2u), en privilégiant la valeur basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 178 tokens
- **Total**: 1,183 tokens



</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 10 septembre 2025, soit 40 jours avant la date actuelle. L'historique montre un cycle moyen d'environ 60 jours entre les commandes récentes (juin-juillet-septembre). Avec un seuil de réapprovisionnement de 30 jours, nous couvrons l'horizon jusqu'au 20 novembre. À cette date, le délai depuis la dernière commande sera de 71 jours, dépassant largement le cycle habituel. Le risque de rupture est donc avéré. ÉTAPE 2 : Estimation quantité. Les commandes récentes oscillent entre 1u et 2u. La médiane de l'historique récent est de 2u. L'historique N-1 à la même période (septembre/octobre 2024) confirme également un besoin de 2u à 3u. En suivant la règle de la médiane et de la prudence, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 231 tokens
- **Total**: 1,236 tokens



</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 jours. La dernière commande datant du 10 septembre 2025 (il y a 40 jours), nous entrons dans la zone de risque de rupture pour les 30 prochains jours (seuil de 70% du cycle atteint). Bien que l'historique N-1 affichait des volumes de 4u, la tendance récente en 2025 est stabilisée à une rotation régulière de 2u. En application de la règle de la médiane sur l'historique récent et du principe de précaution sans surestimation, une quantité de 2u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,021 tokens
- **Output**: 156 tokens
- **Total**: 1,177 tokens



</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 jours. La dernière commande datant du 10 septembre 2025 (il y a 40 jours), nous entrons dans la zone de risque de rupture pour les 30 prochains jours (seuil de réapprovisionnement). L'historique de l'année précédente confirme également une activité régulière en septembre/octobre. En suivant la règle de la médiane des commandes récentes (2u, 2u, 3u), la quantité retenue est de 2 unités, privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 154 tokens
- **Total**: 1,176 tokens



</details>


<details>
<summary><strong>7. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande d'environ 60 jours (juin, juillet, septembre). La dernière commande datant du 10 septembre 2025 (il y a 40 jours), le risque de rupture est élevé dans l'horizon des 30 jours de seuil de réapprovisionnement (70% du cycle atteint). Bien que les volumes de l'année précédente (N-1) étaient plus élevés en octobre/novembre (5-6u), la tendance récente est strictement stabilisée à 2 unités par commande. En application de la règle de la médiane sur l'historique récent et du principe de précaution sans surestimation, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,003 tokens
- **Output**: 171 tokens
- **Total**: 1,174 tokens



</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 35 et 64 jours en 2025. La dernière commande remonte au 10 septembre, soit 40 jours avant la date actuelle. Ce délai correspond à plus de 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la quantité la plus basse observée sur les deux dernières transactions, afin d'éviter un surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 162 tokens
- **Total**: 1,167 tokens



</details>


<details>
<summary><strong>9. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 à 70 jours. La dernière commande datant du 10 septembre 2025 (il y a 40 jours), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement (40 + 30 = 70 jours). Conformément à la règle de précaution B2B, un besoin est détecté. Pour la quantité, bien que l'historique N-1 montre des volumes de 4u, les commandes récentes de 2025 indiquent une tendance à la baisse avec une médiane de 2u. En suivant la règle de privilégier la médiane récente et de choisir la valeur la plus basse en cas de doute, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,004 tokens
- **Output**: 188 tokens
- **Total**: 1,192 tokens



</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 jours. La dernière commande remontant au 10 septembre (soit 40 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement (40 + 30 = 70 jours, dépassant le cycle moyen). Historiquement, le produit présente une rotation régulière et stable. La médiane des commandes récentes est de 2 unités. En suivant le principe de précaution B2B et en se basant sur la médiane historique pour éviter le surstockage, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,023 tokens
- **Output**: 150 tokens
- **Total**: 1,173 tokens



</details>


<details>
<summary><strong>11. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 jours entre les commandes récentes. La dernière commande datant du 10 septembre 2025 (soit il y a 40 jours), nous atteignons 66% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent dans cet horizon. En application du principe de précaution B2B et de la détection d'un besoin probable, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (2, 2, 3) et à la valeur la plus basse en cas de doute, afin d'éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 176 tokens
- **Total**: 1,162 tokens



</details>


<details>
<summary><strong>12. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 septembre 2025, soit 40 jours avant la date actuelle. L'historique (2024 et 2025) montre une fréquence de commande régulière tous les 30 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent, d'autant plus qu'une commande avait eu lieu à la mi-octobre l'année précédente. ÉTAPE 2 : Estimation quantité. Les quantités récentes oscillent entre 1u et 2u. La médiane de l'historique récent et de la même période N-1 est de 2u. En suivant le principe de précaution B2B et la stabilité du produit, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,020 tokens
- **Output**: 196 tokens
- **Total**: 1,216 tokens



</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 septembre 2025, soit 40 jours avant la date actuelle. L'historique montre un cycle moyen d'environ 45 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre habituelle de commande. De plus, l'historique N-1 confirme une activité en septembre/octobre. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes oscillent entre 1u et 2u. La médiane des commandes récentes est de 1u. Conformément à la règle de précaution B2B privilégiant la valeur la plus basse en cas de rotation faible (1-2u), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 196 tokens
- **Total**: 1,183 tokens



</details>


<details>
<summary><strong>14. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 septembre 2025, soit 40 jours avant la date actuelle (20 octobre). L'historique récent montre un cycle moyen d'environ 45 à 60 jours (63 jours entre juin et juillet, 64 jours entre juillet et septembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons largement les 70% du cycle moyen estimé. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent (2025) montre une baisse de volume par rapport à l'année précédente, avec des commandes de 2u, 2u et 3u. La médiane des commandes récentes est de 2u. Conformément à la règle de prudence et au respect de la tendance à la baisse, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 217 tokens
- **Total**: 1,207 tokens



</details>


<details>
<summary><strong>15. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 60 à 70 jours (juin, juillet, septembre). La dernière commande datant du 10 septembre, soit il y a 40 jours, le risque de rupture devient critique dans l'horizon des 30 jours de seuil (atteignant 70 jours d'intervalle début novembre). Bien que la rotation soit faible, le principe de précaution B2B impose un réapprovisionnement. La quantité retenue est de 2 unités, correspondant à la médiane stricte et constante des commandes récentes (2u, 2u, 2u), sans surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 155 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>16. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 45 à 60 jours. La dernière commande datant du 10 septembre (soit il y a 40 jours), nous atteignons le seuil de 70% du cycle moyen. Compte tenu du délai de réapprovisionnement de 30 jours, le risque de rupture est réel d'ici la prochaine fenêtre de commande. En suivant le principe de précaution B2B et en observant la tendance récente à la baisse (passant de 2u à 1u), la quantité retenue est la médiane des commandes récentes, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,006 tokens
- **Output**: 146 tokens
- **Total**: 1,152 tokens



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
La dernière commande remonte au 10 septembre 2025, soit 40 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 60 jours (juin à juillet, juillet à septembre). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (40 + 30 = 70 jours, dépassant le cycle habituel). En application du principe de précaution B2B, une commande est nécessaire. Concernant la quantité, le volume récent oscille entre 1u et 2u. La médiane des commandes de 2025 est de 2u, mais conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible, et en observant que les commandes de l'année précédente à la même période (septembre/octobre 2024) étaient de 1u, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 222 tokens
- **Total**: 1,210 tokens



</details>


<details>
<summary><strong>18. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle observé entre les deux dernières commandes est d'environ 100 jours. La dernière commande date du 10 septembre, soit il y a 40 jours. Bien que nous ne soyons qu'à 40% du cycle moyen, la rotation est très faible et irrégulière. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière -> prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilité parfaite avec des commandes de 2 unités. La médiane est de 2. Conformément à la règle sur les rotations faibles (1-2u), on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 188 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>19. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 35 et 64 jours. Avec 40 jours écoulés depuis la dernière commande (10 septembre) et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle moyen dépassé). La quantité est fixée à 2 unités, correspondant à la médiane et au volume le plus fréquent des commandes récentes, tout en maintenant un stock bas pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 121 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>20. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 35 et 64 jours. Depuis la dernière commande du 10 septembre 2025, 40 jours se sont écoulés. Étant donné que nous entrons dans la fenêtre critique par rapport au cycle moyen et que le seuil de réapprovisionnement est de 30 jours, il existe un risque de rupture imminent (principe de précaution B2B). La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 138 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>21. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

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
Le cycle de commande moyen est d'environ 35 jours. La dernière commande remonte au 10 septembre 2025, soit 40 jours avant la date actuelle. Le seuil de réapprovisionnement de 30 jours est largement dépassé, indiquant un besoin immédiat pour éviter la rupture. L'historique récent montre des quantités de 2, 3, 4 et 2 unités. La médiane de ces commandes récentes est de 2.5. En suivant la règle de précaution B2B et en observant l'historique N-1 à la même période (3u en septembre et octobre 2024), une quantité de 3 unités est préconisée pour couvrir les besoins du prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,027 tokens
- **Output**: 166 tokens
- **Total**: 1,193 tokens



</details>


<details>
<summary><strong>22. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 35 jours. La dernière commande enregistrée date du 04/08/2025, soit plus de 75 jours avant la date actuelle (20/10/2025). Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture critique ou un besoin imminent. Pour la quantité, bien que la dernière commande fût de 8u, l'historique récent et N-1 montre une médiane stable de 4u. En suivant le principe de précaution et en ignorant le pic exceptionnel de 8u, la quantité retenue est la médiane de 4u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,021 tokens
- **Output**: 175 tokens
- **Total**: 1,196 tokens



</details>


<details>
<summary><strong>23. [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 04/08/2025, soit 77 jours sans activité. Bien que le cycle historique soit irrégulier (27 jours entre les deux premières commandes), le délai actuel dépasse largement la fréquence habituelle, ce qui crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la valeur basse de la médiane historique (entre 1u et 2u), afin de limiter le risque de surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 152 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>24. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 04/08/2025, soit 77 jours. Bien que la rotation soit très faible, l'absence de commande récente et le dépassement d'un cycle standard de réapprovisionnement en B2B créent un doute sur le niveau de stock actuel. En application du principe de précaution (détection d'un besoin incertain), une commande est prévue. ÉTAPE 2 : L'historique récent présente une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 2 unités pour couvrir le besoin sans risquer de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 159 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>25. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 77 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles standards de réapprovisionnement. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 175 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>26. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 77 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 155 tokens
- **Total**: 1,026 tokens



</details>




### Donnees d'Input LLM (26 produits)


<details>
<summary><strong>1. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 1u
- 2025-08-04 12:33:57: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 3u
- 2025-08-04 12:33:57: 3u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 4u
- 2024-09-17 06:12:49: 3u
- 2024-07-29 06:03:35: 4u
- 2024-06-17 06:35:48: 4u
- 2024-04-18 13:10:52: 4u
- 2024-02-29 09:45:53: 5u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 1u
- 2025-06-03 06:13:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 4u
- 2024-07-29 06:03:35: 4u
- 2024-06-17 06:35:48: 2u
- 2024-04-18 13:10:52: 1u
- 2024-02-29 09:45:53: 4u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 2u
- 2024-09-17 06:12:49: 3u
- 2024-07-29 06:03:35: 2u
- 2024-06-17 06:35:48: 2u
- 2024-04-18 13:10:52: 2u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 4u
- 2024-09-17 06:12:49: 4u
- 2024-07-29 06:03:35: 4u
- 2024-06-17 06:35:48: 4u
- 2024-04-18 13:10:52: 4u
- 2024-02-29 09:45:53: 5u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 4u
- 2024-09-17 06:12:49: 2u
- 2024-07-29 06:03:35: 3u
- 2024-06-17 06:35:48: 4u
- 2024-04-18 13:10:52: 2u
- 2024-02-29 09:45:53: 4u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [LV131] LV Tartinade Potiron 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 5u
- 2024-07-29 06:03:35: 3u
- 2024-06-17 06:35:48: 5u
- 2024-04-18 13:10:52: 2u
- 2024-02-29 09:45:53: 4u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 4u
- 2024-09-17 06:12:49: 2u
- 2024-07-29 06:03:35: 3u
- 2024-06-17 06:35:48: 2u
- 2024-04-18 13:10:52: 4u
- 2024-02-29 09:45:53: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 4u
- 2024-07-29 06:03:35: 4u
- 2024-06-17 06:35:48: 2u
- 2024-04-18 13:10:52: 3u
- 2024-02-29 09:45:53: 4u
- 2023-11-09 11:04:30: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 1u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 3u
- 2024-09-17 06:12:49: 1u
- 2024-07-29 06:03:35: 2u
- 2024-06-17 06:35:48: 2u
- 2024-04-18 13:10:52: 2u
- 2024-02-29 09:45:53: 3u
- 2023-11-09 11:04:30: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 3u
- 2024-07-29 06:03:35: 4u
- 2024-06-17 06:35:48: 4u
- 2024-04-18 13:10:52: 3u
- 2023-11-09 11:04:30: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>12. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 1u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 2u
- 2024-09-17 06:12:49: 1u
- 2024-07-29 06:03:35: 2u
- 2024-06-17 06:35:48: 2u
- 2024-04-18 13:10:52: 2u
- 2024-02-29 09:45:53: 3u
- 2023-11-09 11:04:30: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 1u
- 2025-07-08 06:22:17: 1u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 2u
- 2024-09-17 06:12:49: 1u
- 2024-07-29 06:03:35: 2u
- 2024-04-18 13:10:52: 2u
- 2023-11-09 11:04:30: 4u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 4u
- 2024-06-17 06:35:48: 4u
- 2024-04-18 13:10:52: 4u
- 2024-02-29 09:45:53: 3u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-17 06:12:49: 1u
- 2024-07-29 06:03:35: 2u
- 2024-06-17 06:35:48: 4u
- 2024-04-18 13:10:52: 2u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>16. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 1u
- 2025-07-08 06:22:17: 1u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 2u
- 2024-07-29 06:03:35: 2u
- 2024-06-17 06:35:48: 2u
- 2024-04-18 13:10:52: 2u
- 2024-02-29 09:45:53: 1u
- 2023-11-09 11:04:30: 4u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 1u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 1u
- 2024-09-17 06:12:49: 1u
- 2024-07-29 06:03:35: 2u
- 2024-06-17 06:35:48: 3u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>19. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 1u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>20. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-07-08 06:22:17: 1u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>21. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-08-04 12:33:57: 3u
- 2025-07-08 06:22:17: 4u
- 2025-06-03 06:13:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 3u
- 2024-09-17 06:12:49: 3u
- 2024-06-17 06:35:48: 8u
- 2024-04-18 13:10:52: 5u
- 2024-02-29 09:45:53: 4u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>22. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:33:57: 8u
- 2025-07-08 06:22:17: 2u
- 2025-06-03 06:13:53: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:19:32: 4u
- 2024-09-17 06:12:49: 3u
- 2024-07-29 06:03:35: 3u
- 2024-06-17 06:35:48: 4u
- 2024-04-18 13:10:52: 4u
- 2024-02-29 09:45:53: 6u
- 2023-11-09 11:04:30: 6u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>23. [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:33:57: 2u
- 2025-07-08 06:22:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>24. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:33:57: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>25. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:33:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>26. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:33:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Predicted 2u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 2 | Predicted 2u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [MF0052] MF Pois chiches  500g | 2 | Predicted 2u but not ordered |
| [RF003] REFIELD Maïs 500G  | 2 | Predicted 2u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 2 | Predicted 2u but not ordered |
| [LV138] LV Tartinade Carotte gingembre  380g | 1 | Predicted 1u but not ordered |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | Predicted 1u but not ordered |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 2 | Predicted 2u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:05.613Z*
