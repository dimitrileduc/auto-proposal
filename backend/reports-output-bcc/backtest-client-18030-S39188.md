# Rapport Backtest - Client La Taniere Des Ourses

## Contexte

- **Client** : La Taniere Des Ourses (ID: 18030)
- **Commande réelle** : S39188
- **Date commande** : 2025-09-17 06:28:35
- **Date cutoff système** : 2025-09-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 31
- **Tokens**: 28,711 input + 5,007 output = 33,718 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 76.2% | 21 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
| **F1-Score** | 86.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.31 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 17.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (16)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV188] LV Tartinade Aubergine  380g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (16 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle précédent de 40 jours (entre mai et juin). Depuis la dernière commande du 17 juin 2025, 91 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane constante des commandes historiques récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 125 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>2. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit environ 91 jours. L'historique montre un cycle de commande irrégulier mais récurrent (environ tous les 2 à 3 mois). En 2023, une commande a eu lieu précisément le 19 septembre. Étant donné que nous sommes le 16 septembre et que le seuil de réapprovisionnement est de 30 jours, il existe un risque de rupture imminent basé sur la saisonnalité N-1. ÉTAPE 2 : Estimation de la quantité. Le produit présente une rotation très faible et stable. La médiane des commandes récentes et historiques est de 1 unité. Conformément à la règle des rotations faibles (1-2u), on maintient la quantité de 1 unité pour éviter le surstock tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 200 tokens
- **Total**: 1,172 tokens



</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 17 juin 2025, soit environ 90 jours sans réapprovisionnement, ce qui dépasse largement les cycles habituels observés en 2024 (environ 60 jours). Il existe donc un risque de rupture imminent ou un besoin de restockage pour la période actuelle. En appliquant la règle de la médiane sur l'historique récent et passé (valeurs entre 1u et 3u), la médiane se situe à 2u. Conformément au principe de précaution B2B et à la règle de ne pas surestimer les stocks sur les faibles rotations, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 168 tokens
- **Total**: 1,155 tokens



</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement moyenne d'environ 60 à 70 jours. La dernière commande enregistrée remonte au 17 juin 2025, soit il y a 91 jours. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou une commande déjà en retard. Bien que les commandes récentes soient faibles (1u et 2u), l'historique N-1 sur la même période (septembre/novembre) montre des volumes de 2u à 3u. En appliquant la règle de la médiane sur l'historique global et en privilégiant la prudence face à une rotation irrégulière, une quantité de 2 unités est préconisée pour couvrir les besoins sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 191 tokens
- **Total**: 1,178 tokens



</details>


<details>
<summary><strong>5. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit environ 91 jours. L'historique N-1 montre une activité régulière en septembre (commande le 19/09/2023) et un cycle moyen historique d'environ 60 à 70 jours. Le délai actuel dépasse largement ce cycle, indiquant un risque de rupture imminent ou un besoin de réapprovisionnement pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une alternance entre 1u et 2u. La médiane des commandes est de 2u. En suivant le principe de précaution B2B et la stabilité des volumes historiques, une quantité de 2u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 189 tokens
- **Total**: 1,177 tokens



</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit environ 91 jours. Bien que le cycle récent soit irrégulier, l'historique N-1 montre une activité constante en septembre (commande le 19/09/2023). Selon le principe de précaution B2B et le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 1u. L'historique N-1 montre des quantités de 1u à 2u. En suivant la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 195 tokens
- **Total**: 1,183 tokens



</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une rotation irrégulière avec une dernière commande enregistrée il y a 91 jours (17 juin 2025). Bien que l'historique récent soit espacé, le délai actuel dépasse largement les cycles habituels observés l'année précédente (environ 60 jours). En application du principe de précaution B2B, un besoin est détecté pour éviter une rupture prolongée. La quantité est fixée à 2 unités, correspondant à la médiane des commandes récentes (1, 2, 4) et à la valeur historique fréquente, privilégiant la prudence face à une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 1,004 tokens
- **Output**: 142 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>8. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit 91 jours. Le cycle précédent était de 35 jours. Le délai actuel dépasse largement le cycle habituel et l'historique montre une rotation lente mais persistante. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent (2025) montre une stabilisation à 1 unité par commande, contre 2 unités l'année précédente. Conformément à la règle de respecter la tendance à la baisse et de privilégier la médiane des commandes récentes, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 179 tokens
- **Total**: 1,117 tokens



</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit environ 91 jours. L'historique N-1 montre une activité régulière en septembre (2023-09-19) et une fréquence de commande moyenne d'environ 60 à 70 jours. Le délai actuel dépasse largement le cycle habituel, créant un risque de rupture imminent ou un besoin non couvert pour la période actuelle. Par principe de précaution B2B, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. L'historique N-1 est très stable à 2u. La médiane globale et la récurrence historique sur cette période pointent vers 2 unités. On retient cette valeur stable pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,003 tokens
- **Output**: 206 tokens
- **Total**: 1,209 tokens



</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 17 juin 2025, soit 91 jours avant la date actuelle. L'historique montre une rotation régulière avec des intervalles variant de 5 à 60 jours. Le délai actuel dépasse largement le cycle moyen constaté, ce qui indique un besoin de réapprovisionnement immédiat pour éviter une rupture prolongée, surtout au regard de l'historique N-1 (commandes en juillet et septembre). ÉTAPE 2 (QUANTITÉ) : Les commandes récentes oscillent entre 1u et 2u. La médiane de l'historique récent est de 2u. Conformément à la règle de précaution B2B et au maintien des rotations faibles, la quantité de 2u est retenue pour couvrir les besoins sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 189 tokens
- **Total**: 1,196 tokens



</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement irrégulière avec une dernière commande effectuée il y a 91 jours (17 juin). Bien que la rotation soit faible, le délai écoulé dépasse largement les intervalles habituels, créant un risque de rupture imminent ou un besoin de restockage pour la période actuelle. En application du principe de précaution B2B (doute sur le cycle = prévoir), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (excluant le pic ponctuel de 3u et la commande minimale de 1u) afin de maintenir un stock de roulement cohérent sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 158 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>12. [LV188] LV Tartinade Aubergine  380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 17 juin 2025, soit 91 jours sans activité. Bien que le cycle historique soit irrégulier, l'analyse de l'année précédente montre une commande en septembre (19/09/2023). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et face à un cycle difficile à déterminer, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et historiques, respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 143 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>13. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence irrégulière avec une dernière commande enregistrée il y a 91 jours (17 juin). Bien que le délai dépasse largement le cycle moyen, le principe de précaution B2B impose de prévoir un réapprovisionnement pour couvrir le risque de rupture, d'autant plus qu'une commande avait eu lieu à cette période l'année précédente (juillet). La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes (1u, 1u, 2u) et respectant la règle de prudence pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 136 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>14. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 126 jours. Bien que le cycle soit difficile à déterminer en raison du manque d'historique, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si un besoin survient. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane historique, afin de maintenir une disponibilité minimale sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 119 tokens
- **Total**: 990 tokens



</details>


<details>
<summary><strong>15. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre des commandes régulières tous les 2 à 3 mois. Le délai écoulé dépasse largement le cycle habituel, créant un risque de rupture ou un besoin de renouvellement de stock imminent. Par précaution B2B, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique est extrêmement stable avec une quantité constante de 2 unités sur toutes les commandes passées. La médiane est de 2. Conformément à la règle sur les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 178 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>16. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/05/2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles habituels observés en N-1 (environ 60 à 90 jours). Bien que la rotation soit faible et irrégulière, l'historique montre une commande systématique à cette période de l'année (septembre/novembre en 2023). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes historiques récentes et passées.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 166 tokens
- **Total**: 1,119 tokens



</details>




### Donnees d'Input LLM (16 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 2u
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 1u
- 2025-05-13 14:29:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 1u
- 2024-05-28 06:31:06: 1u
- 2024-03-28 15:41:09: 2u
- 2024-02-08 11:55:04: 1u
- 2023-09-19 07:08:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 1u
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 3u
- 2024-05-28 06:31:06: 2u
- 2024-03-28 15:41:09: 3u
- 2024-02-08 11:55:04: 3u
- 2023-11-21 07:31:31: 3u
- 2023-09-19 07:08:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 1u
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 2u
- 2024-05-28 06:31:06: 2u
- 2024-03-28 15:41:09: 2u
- 2024-02-08 11:55:04: 1u
- 2023-11-21 07:31:31: 3u
- 2023-09-19 07:08:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 1u
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 2u
- 2024-05-28 06:31:06: 2u
- 2024-03-28 15:41:09: 2u
- 2024-02-08 11:55:04: 1u
- 2023-11-21 07:31:31: 2u
- 2023-09-19 07:08:57: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 1u
- 2025-05-08 10:11:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 2u
- 2024-05-28 06:31:06: 2u
- 2024-03-28 15:41:09: 2u
- 2024-02-08 11:55:04: 1u
- 2023-11-21 07:31:31: 2u
- 2023-09-19 07:08:57: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 2u
- 2025-05-13 14:29:36: 1u
- 2025-05-08 10:11:06: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 4u
- 2024-05-28 06:31:06: 3u
- 2024-03-28 15:41:09: 2u
- 2024-02-08 11:55:04: 3u
- 2023-11-21 07:31:31: 2u
- 2023-09-19 07:08:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 1u
- 2025-05-13 14:29:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-28 15:41:09: 2u
- 2024-02-08 11:55:04: 2u
- 2023-11-21 07:31:31: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 1u
- 2025-05-13 14:29:36: 1u
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 2u
- 2024-05-28 06:31:06: 2u
- 2024-03-28 15:41:09: 2u
- 2024-02-08 11:55:04: 3u
- 2023-11-21 07:31:31: 2u
- 2023-09-19 07:08:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 2u
- 2025-05-13 14:29:36: 1u
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 4u
- 2024-05-28 06:31:06: 2u
- 2024-03-28 15:41:09: 3u
- 2024-02-08 11:55:04: 2u
- 2023-11-21 07:31:31: 3u
- 2023-09-19 07:08:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 1u
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-28 15:41:09: 2u
- 2024-02-08 11:55:04: 2u
- 2023-11-21 07:31:31: 3u
- 2023-09-19 07:08:57: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LV188] LV Tartinade Aubergine  380g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 1u
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 1u
- 2024-05-28 06:31:06: 1u
- 2024-03-28 15:41:09: 1u
- 2024-02-08 11:55:04: 1u
- 2023-09-19 07:08:57: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:18:23: 1u
- 2025-05-13 14:29:36: 1u
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV131] LV Tartinade Potiron 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 14:29:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 2u
- 2024-05-28 06:31:06: 2u
- 2024-03-28 15:41:09: 2u
- 2024-02-08 11:55:04: 2u
- 2023-11-21 07:31:31: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 10:11:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:58:18: 3u
- 2024-03-28 15:41:09: 2u
- 2024-02-08 11:55:04: 1u
- 2023-11-21 07:31:31: 2u
- 2023-09-19 07:08:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Predicted 2u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | Predicted 2u but not ordered |
| [LV138] LV Tartinade Carotte gingembre  380g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:04.584Z*
