# Rapport Backtest - Client Chez Lucienne

## Contexte

- **Client** : Chez Lucienne (ID: 21059)
- **Commande réelle** : S39964
- **Date commande** : 2025-10-28 13:40:43
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 26,206 input + 4,043 output = 30,249 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 59.3% | 27 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
| **F1-Score** | 74.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 16 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (16)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [RISH01] RISH kombucha BIO - original 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RISH06] RISH kombucha BIO - tagette 750ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (16 produits)


<details>
<summary><strong>1. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/10/2025, soit il y a 26 jours. Le cycle moyen observé est d'environ 35 jours (intervalle entre les deux dernières commandes). 26 jours représentent environ 74% du cycle moyen, ce qui dépasse le seuil de risque de 70%. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u, 1u, 2u et 1u. La médiane des quantités est de 1u. Conformément à la règle de précaution B2B et au maintien des rotations faibles, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 188 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>2. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande moyen est d'environ 18 jours. La dernière commande remonte au 1er octobre, soit 26 jours avant la date actuelle. Ce délai représente plus de 70% du cycle habituel, signalant un risque imminent de rupture de stock d'ici les 30 prochains jours (Replenishment Threshold Days). Concernant la quantité, l'historique récent montre une rotation très stable et faible, oscillant entre 1u et 2u. Conformément aux règles de gestion des rotations faibles et à l'application de la médiane historique, une commande de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 992 tokens
- **Output**: 149 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 18 jours. La dernière commande datant du 01/10/2025 (soit 26 jours avant la date actuelle), nous avons largement dépassé le seuil de 70% du cycle habituel. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). Concernant la quantité, les volumes oscillent strictement entre 1u et 2u. Conformément à la règle de prudence B2B privilégiant la médiane et la valeur la plus basse en cas de doute sur une faible rotation, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 159 tokens
- **Total**: 1,153 tokens



</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 15 à 30 jours (moyenne de 25 jours entre les dernières commandes). La dernière commande datant du 01/10, soit il y a 26 jours, nous avons atteint 100% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de rotation régulière et faible (1u constante sur les 5 dernières commandes), la quantité retenue est la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 139 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 15 à 25 jours. La dernière commande remonte au 01/10/2025, soit 26 jours avant la date actuelle. Le délai écoulé dépasse largement 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un besoin est détecté. Concernant la quantité, l'historique est parfaitement stable avec une médiane de 1 unité par commande. Conformément aux règles de rotation faible, la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 977 tokens
- **Output**: 160 tokens
- **Total**: 1,137 tokens



</details>


<details>
<summary><strong>6. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle entre les deux dernières commandes est d'environ 86 jours. Depuis la dernière commande du 01/10/2025, 26 jours se sont écoulés. Bien que nous ne soyons qu'à environ 30% du cycle habituel, le seuil de réapprovisionnement est de 30 jours, ce qui nous place dans une fenêtre de vigilance. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est déclenchée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 150 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande récent montre une fréquence moyenne d'environ 35 jours entre chaque commande. La dernière commande datant du 01/10/2025 (soit 26 jours écoulés), nous atteignons 74% du cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Bien que l'historique N-1 affichait des volumes de 2 à 3 unités, la tendance récente en 2025 est strictement stabilisée à 1 unité par commande. En application de la règle de la médiane sur l'historique récent et du respect de la tendance à la baisse, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,072 tokens
- **Output**: 169 tokens
- **Total**: 1,241 tokens



</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande récent montre une fréquence moyenne d'environ 21 jours entre les commandes (juin-juillet) avec un espacement plus large récemment (34 jours entre août et octobre). Depuis la dernière commande du 1er octobre, 26 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons 86% du cycle moyen, ce qui présente un risque de rupture imminent. Bien que l'historique N-1 montre des volumes légèrement supérieurs (2u), la tendance récente est stabilisée à 1u par commande. En appliquant la règle de la médiane sur l'historique récent et le principe de précaution sans surestimation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,089 tokens
- **Output**: 174 tokens
- **Total**: 1,263 tokens



</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 21 jours sur les derniers mois. La dernière commande datant du 01/10/2025 (soit 26 jours), nous avons dépassé 70% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, l'historique récent montre des volumes de 1u ou 2u. La médiane des commandes récentes est de 1u. En suivant la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,106 tokens
- **Output**: 176 tokens
- **Total**: 1,282 tokens



</details>


<details>
<summary><strong>10. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande date du 01/10/2025, soit il y a 26 jours. Le cycle moyen récent est d'environ 20 à 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. L'historique N-1 montre également une activité sur cette période (octobre). En suivant la règle de la médiane des commandes récentes (majoritairement à 1u) et le principe de précaution pour les rotations faibles, une quantité de 1u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,105 tokens
- **Output**: 132 tokens
- **Total**: 1,237 tokens



</details>


<details>
<summary><strong>11. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande moyen est d'environ 25 jours sur les derniers mois. La dernière commande date du 01/10/2025, soit 26 jours avant la date actuelle. Le seuil de réapprovisionnement de 30 jours est atteint, créant un risque de rupture imminent. La quantité est basée sur la médiane historique récente (1u), en excluant le pic ponctuel de 2u pour éviter le surstockage sur ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,054 tokens
- **Output**: 115 tokens
- **Total**: 1,169 tokens



</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande récent montre une fréquence de réapprovisionnement toutes les 2 à 4 semaines (moyenne de 21 jours). La dernière commande datant du 1er octobre (soit 26 jours), le seuil de 70% du cycle est largement dépassé, indiquant un risque imminent de rupture dans l'horizon des 30 jours. Concernant la quantité, l'historique récent montre une stabilité parfaite à 1 unité par commande depuis juillet 2025. Conformément à la règle de la médiane et au respect de la tendance à la baisse par rapport à l'année précédente, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,092 tokens
- **Output**: 154 tokens
- **Total**: 1,246 tokens



</details>


<details>
<summary><strong>13. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 septembre, soit 41 jours. Bien que le cycle soit irrégulier (8 jours puis 83 jours), nous dépassons largement le seuil de précaution B2B. Le risque de rupture à l'horizon de 30 jours est réel compte tenu de l'absence de stock récent. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité absolue avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 148 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>14. [RISH06] RISH kombucha BIO - tagette 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation faible mais régulière avec un intervalle d'environ 83 jours entre les deux dernières commandes. La dernière commande datant du 16 septembre (il y a 41 jours), nous entrons dans la zone de risque de rupture à l'horizon des 30 jours du seuil de réapprovisionnement (71 jours cumulés). En application du principe de précaution B2B et face à un cycle de rotation lent, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes précédentes, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 148 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>15. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours entre chaque unité. La dernière commande remonte au 16 septembre, soit 41 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours est atteint. En application du principe de précaution B2B et face à une rotation très stable de 1 unité par commande, la quantité recommandée correspond à la médiane historique de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 117 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>16. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 20 et 50 jours. La dernière commande datant du 16 septembre (soit 41 jours avant la date actuelle), le produit entre dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de réapprovisionnement). Bien que la rotation soit faible, le principe de précaution B2B impose une commande. La quantité retenue est de 1 unité, correspondant à la médiane et au mode des commandes les plus récentes (3 dernières commandes à 1u), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,056 tokens
- **Output**: 137 tokens
- **Total**: 1,193 tokens



</details>




### Donnees d'Input LLM (16 produits)


<details>
<summary><strong>1. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u
- 2025-06-25 06:45:46: 2u
- 2025-06-17 08:07:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-22 09:52:47: 2u
- 2025-07-07 06:25:23: 1u
- 2025-06-25 06:45:46: 2u
- 2025-06-17 08:07:58: 1u
- 2025-06-03 08:13:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 2u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-22 09:52:47: 2u
- 2025-07-07 06:25:23: 1u
- 2025-06-25 06:45:46: 1u
- 2025-06-17 08:07:58: 1u
- 2025-06-03 08:13:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-07 06:25:23: 1u
- 2025-06-03 08:13:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-22 09:52:47: 1u
- 2025-07-07 06:25:23: 1u
- 2025-06-17 08:07:58: 1u
- 2025-06-03 08:13:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-07-07 06:25:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-22 09:52:47: 1u
- 2025-06-25 06:45:46: 1u
- 2025-06-03 08:13:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 3u
- 2024-04-29 07:17:35: 2u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-22 09:52:47: 2u
- 2025-07-07 06:25:23: 1u
- 2025-06-25 06:45:46: 1u
- 2025-06-17 08:07:58: 1u
- 2025-06-03 08:13:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 2u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 2u
- 2025-07-22 09:52:47: 2u
- 2025-07-07 06:25:23: 1u
- 2025-06-25 06:45:46: 1u
- 2025-06-17 08:07:58: 1u
- 2025-06-03 08:13:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 3u
- 2023-11-21 07:37:42: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-22 09:52:47: 2u
- 2025-07-07 06:25:23: 1u
- 2025-06-25 06:45:46: 1u
- 2025-06-17 08:07:58: 1u
- 2025-06-03 08:13:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 1u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 2u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 1u
- 2023-11-21 07:37:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-22 09:52:47: 2u
- 2025-07-07 06:25:23: 1u
- 2025-06-17 08:07:58: 1u
- 2025-06-03 08:13:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:44:54: 2u
- 2024-06-13 12:45:08: 1u
- 2024-04-29 07:17:35: 1u
- 2024-03-21 08:33:04: 1u
- 2023-12-07 14:11:59: 1u
- 2023-11-21 07:37:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-22 09:52:47: 1u
- 2025-07-07 06:25:23: 1u
- 2025-06-03 08:13:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:44:54: 1u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 3u
- 2023-11-21 07:37:42: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u
- 2025-06-25 06:45:46: 1u
- 2025-06-17 08:07:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [RISH06] RISH kombucha BIO - tagette 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u
- 2025-06-25 06:45:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-22 09:52:47: 1u
- 2025-06-17 08:07:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u
- 2025-07-07 06:25:23: 1u
- 2025-06-03 08:13:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:44:54: 1u
- 2024-07-15 08:47:57: 1u
- 2024-06-13 12:45:08: 3u
- 2024-04-29 07:17:35: 2u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 1u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:03.543Z*
