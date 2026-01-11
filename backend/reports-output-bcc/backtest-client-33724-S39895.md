# Rapport Backtest - Client Tipi - Boutique zéro déchet

## Contexte

- **Client** : Tipi - Boutique zéro déchet (ID: 33724)
- **Commande réelle** : S39895
- **Date commande** : 2025-10-23 13:23:18
- **Date cutoff système** : 2025-10-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 23,568 input + 4,090 output = 27,658 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 76.0% | 25 produits prédits, 19 corrects |
| **Rappel** | 100.0% | 19 produits réels, 19 détectés |
| **F1-Score** | 86.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.37 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 21.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -19.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (19)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (19 produits)


<details>
<summary><strong>1. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 15/09/2025, soit 37 jours écoulés. L'historique montre un cycle irrégulier (environ 90 jours récemment, mais plus fréquent l'année précédente). Avec un seuil de réapprovisionnement de 30 jours et une rotation imprévisible, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes unitaires (1u). La médiane des quantités récentes est de 1. Conformément aux règles sur la rotation faible, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 944 tokens
- **Output**: 163 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 15 septembre 2025, soit 37 jours avant la date actuelle. Bien que la rotation soit faible, l'historique montre des commandes unitaires espacées. Avec un seuil de réapprovisionnement de 30 jours, le délai depuis la dernière commande dépasse le cycle habituel constaté l'année précédente (environ 30-45 jours). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais régulière, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 148 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 15 septembre, soit 37 jours. Le cycle historique est irrégulier (allant de 2 à 3 mois). Compte tenu du délai écoulé et du seuil de réapprovisionnement de 30 jours, il existe un risque de rupture ou un besoin imminent. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre des volumes très faibles (1u et 2u). La médiane des commandes récentes est de 1,5u. Conformément à la règle des rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 167 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 15 septembre, soit 37 jours avant la date actuelle. Avec un intervalle précédent de 94 jours, le cycle est irrégulier. En appliquant le principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément à la règle sur les rotations faibles, on privilégie la valeur la plus basse de la médiane pour éviter le surstockage. La quantité retenue est donc de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 163 tokens
- **Total**: 1,053 tokens



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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 15 septembre 2025, soit il y a 37 jours. Bien que le cycle moyen soit difficile à établir précisément, le délai actuel dépasse le seuil de précaution B2B pour éviter une rupture de stock dans les 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution face à un cycle irrégulier, un besoin est détecté. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la quantité de la dernière commande, respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 153 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 15 septembre, soit 37 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une activité sur cette période. Avec un seuil de réapprovisionnement de 30 jours, il existe un risque de rupture ou un besoin imminent. Par principe de précaution B2B, une commande est déclenchée. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont stables à 1 unité. La médiane de l'historique récent est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1 unité sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 158 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 septembre, soit 37 jours. Bien que le cycle historique soit long et irrégulier (environ 90 jours entre les deux dernières commandes), nous entrons dans une période où des commandes ont été passées l'année précédente (juillet/mai). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une rotation très faible et stable de 1 unité par commande. Conformément aux règles sur les faibles rotations, la médiane des commandes récentes (1u) est privilégiée pour éviter le surstockage, malgré des volumes plus élevés l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 185 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 15 septembre 2025, soit 37 jours. Bien que le cycle moyen soit d'environ 90 jours, l'absence de commandes en 2025 par rapport à 2024 crée une incertitude sur la fréquence actuelle. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture sur l'horizon de 30 jours), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes (1u) et respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 165 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 15 septembre 2025, soit 37 jours. Bien que le cycle de rotation soit lent et irrégulier, le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours, créant un risque de rupture selon le principe de précaution B2B. L'historique récent montre une baisse de volume (1u et 2u) par rapport à l'année précédente (3u). En suivant la règle de la médiane des commandes récentes et en privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 144 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 15 septembre 2025, soit 37 jours avant la date actuelle. Bien que le cycle de rotation soit lent et irrégulier, l'intervalle actuel dépasse le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B et pour éviter une rupture sur un produit à faible rotation, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de la médiane et au traitement des rotations faibles (1-2u), la quantité minimale de 1u est privilégiée pour éviter le surstockage tout en maintenant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 172 tokens
- **Total**: 1,124 tokens



</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande date du 15 septembre, soit il y a 37 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est avéré car nous avons dépassé le cycle de précaution habituel pour ce type de produit. En l'absence d'historique complexe ou de saisonnalité N-1, la règle de précaution B2B s'applique. La quantité retenue est de 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 135 tokens
- **Total**: 1,010 tokens



</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 94 jours (entre juin et septembre). La dernière commande date du 15 septembre, soit il y a 37 jours. Bien que le cycle théorique ne soit pas encore atteint, la rotation est irrégulière et faible. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié à l'horizon des 30 jours de seuil de réapprovisionnement. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 176 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 94 jours entre les deux dernières commandes. Au 22 octobre, 37 jours se sont écoulés depuis la dernière commande (15 septembre). Bien que nous ne soyons qu'à environ 40% du cycle moyen, la faible rotation et l'irrégularité de l'historique imposent l'application du principe de précaution B2B pour éviter toute rupture sur un horizon de 30 jours. Conformément à la règle de la médiane sur les faibles rotations (1-2u), la quantité retenue est de 1 unité, privilégiant la valeur la plus basse en cas de doute.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 152 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>14. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 15 septembre, soit 37 jours avant la date actuelle. Avec un intervalle précédent de 94 jours, le cycle est irrégulier et difficile à déterminer précisément. En application du principe de précaution B2B (si doute sur le cycle → prévoir), et compte tenu du seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément à la règle sur les rotations faibles, on privilégie la médiane ou la valeur la plus basse en cas de doute pour éviter le surstock. La quantité de 1 unité est donc retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 175 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>15. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec un intervalle d'environ 90 jours entre les commandes. La dernière commande datant du 15 septembre (il y a 37 jours), nous entrons dans la fenêtre de vigilance pour couvrir les 30 prochains jours (Replenishment Threshold Days), d'autant plus que le cycle est peu documenté. En application du principe de précaution B2B et pour éviter une rupture sur un produit à faible rotation, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 140 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>16. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 septembre, soit 37 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle observé entre les deux commandes précédentes (environ 90 jours), mais le principe de précaution B2B s'applique ici car le stock résiduel est probablement nul ou critique à l'approche du seuil de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes très faibles (1u et 2u). Conformément à la règle sur les rotations faibles, on retient la valeur la plus basse de la médiane pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 157 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>17. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 septembre, soit 37 jours. Bien que la rotation soit faible, le délai écoulé dépasse le cycle précédent (environ 90 jours entre juin et septembre), mais l'irrégularité et le principe de précaution B2B imposent de prévoir un réapprovisionnement pour couvrir les 30 prochains jours (seuil de réapprovisionnement). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 167 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>18. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 juin 2025, soit plus de 130 jours. Bien que la rotation soit extrêmement faible, le principe de précaution B2B et l'absence de cycle défini imposent de prévoir un réapprovisionnement pour éviter une rupture définitive du produit en rayon, surtout face à un horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité (médiane de l'historique) sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 164 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>19. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 juin 2025, soit plus de 130 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ tous les 2 mois). En application du principe de précaution B2B et face à l'incertitude du cycle actuel, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente montre une régularité constante à 2 unités. La dernière commande isolée de 1 unité est traitée comme une valeur basse ponctuelle. La médiane historique de 2 unités est retenue pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 175 tokens
- **Total**: 1,114 tokens



</details>




### Donnees d'Input LLM (19 produits)


<details>
<summary><strong>1. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:44:16: 1u
- 2024-03-27 12:45:15: 1u
- 2024-02-20 10:43:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-13 11:45:24: 1u
- 2024-03-27 12:45:15: 1u
- 2024-02-20 10:43:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:44:16: 2u
- 2024-05-13 11:45:24: 4u
- 2024-03-27 12:45:15: 2u
- 2024-02-20 10:43:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 2u
- 2025-06-13 13:28:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:44:16: 3u
- 2024-05-13 11:45:24: 4u
- 2024-03-27 12:45:15: 2u
- 2024-02-20 10:43:03: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:44:16: 3u
- 2024-05-13 11:45:24: 1u
- 2024-03-27 12:45:15: 2u
- 2024-02-20 10:43:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:44:16: 4u
- 2024-05-13 11:45:24: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:44:16: 3u
- 2024-03-27 12:45:15: 2u
- 2024-02-20 10:43:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:44:16: 3u
- 2024-05-13 11:45:24: 3u
- 2024-03-27 12:45:15: 3u
- 2024-02-20 10:43:03: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:44:16: 3u
- 2024-05-13 11:45:24: 3u
- 2024-03-27 12:45:15: 3u
- 2024-02-20 10:43:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:25:00: 1u
- 2025-06-13 13:28:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-13 13:28:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-13 13:28:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:44:16: 2u
- 2024-05-13 11:45:24: 2u
- 2024-03-27 12:45:15: 2u
- 2024-02-20 10:43:03: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Predicted 1u but not ordered |
| [CB005] CB Apple juice 1l | 3 | Predicted 3u but not ordered |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | Predicted 1u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:22.586Z*
