# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S40241
- **Date commande** : 2025-11-12 09:14:35
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 36
- **Tokens**: 33,229 input + 6,078 output = 39,307 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.7% | 35 produits prédits, 23 corrects |
| **Rappel** | 95.8% | 24 produits réels, 23 détectés |
| **F1-Score** | 78.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.39 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 27.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 2.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 14 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

---

## True Positives (23)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [fsv17] Mélange de noix bio vrac 2,75kg | 5 | 5 | 0.0 | 0.0% | exact | LLM |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | 5 | 0.0 | 0.0% | exact | LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [fsv04] Amande nature bio vrac 2,8 kg | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [fsv03] Noisette nature bio vrac 2,8kg  | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [fsv18] Mendiant bio vrac 2,8kg | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [fsv08] Banana chips bio vrac 1,6kg | 5 | 5 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (23 produits)


<details>
<summary><strong>1. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 04/11/2025, soit il y a seulement 7 jours. Bien que l'historique soit très faible (2 commandes espacées de plusieurs mois), le principe de précaution B2B s'applique ici car le cycle est irrégulier et difficile à déterminer. Un risque de rupture ne peut être exclu sur un horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément aux règles de rotation faible et de choix de la valeur la plus basse en cas de doute, la quantité retenue est la médiane basse, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 167 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande régulier (environ tous les 7 à 14 jours). La dernière commande datant du 04/11 (il y a 7 jours), le risque de rupture est élevé dans l'horizon des 30 jours (seuil de réapprovisionnement). En appliquant la règle de la médiane sur les quantités récentes (1, 3, 2, 2, 4, 3, 5, 4), la médiane est de 2,5. Conformément aux consignes de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 159 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>3. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier (environ tous les 7 à 14 jours). La dernière commande datant du 04/11 (il y a 7 jours), le risque de rupture est élevé dans l'horizon des 30 jours (Replenishment Threshold). En appliquant la règle de la médiane sur les quantités récentes (1, 3, 2, 2, 4, 2, 3, 3), la valeur médiane est de 2,5. Conformément aux consignes de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 991 tokens
- **Output**: 158 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>4. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM: 5u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 04/11/2025 (il y a 7 jours). Bien que le cycle moyen soit d'environ 35-40 jours, l'historique montre une irrégularité marquée (parfois seulement 14 jours entre deux commandes comme en septembre). Compte tenu du seuil de réapprovisionnement de 30 jours et du principe de précaution B2B en cas de cycle irrégulier, un risque de rupture est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 5u, 1u, 5u, 4u, 5u. La médiane de ces commandes est de 5u. Conformément à la règle de maintien de la quantité pour une rotation régulière, la quantité retenue est de 5u.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 205 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>5. [fsv02] Noix de cajou nature bio vrac 2,8kg </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 50 jours. La dernière commande date du 04/11/2025 (il y a 7 jours). Bien que le délai soit court, l'irrégularité des intervalles (allant de 19 à 78 jours) et l'absence d'historique N-1 imposent l'application du principe de précaution B2B pour éviter une rupture imprévue sous 30 jours. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 3, 3), conformément à la règle de privilégier la valeur médiane basse en cas de doute.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 166 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>6. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - LLM: 5u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Analyse du cycle. Les commandes précédentes montrent des intervalles de 44 jours (août à sept) et 48 jours (sept à nov). La dernière commande date du 04/11, soit il y a seulement 7 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours, nous couvrons la période jusqu'au 11/12. À cette date, nous serons à 37 jours depuis la dernière commande, ce qui représente environ 80% du cycle moyen (46 jours). Le risque de rupture est donc réel durant la fenêtre de vigilance. ÉTAPE 2 : La quantité est stable, oscillant entre 4u et 5u. La médiane des commandes récentes est de 5u. En suivant le principe de précaution B2B pour éviter la rupture sur un produit à rotation régulière, la quantité de 5u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 209 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>7. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 04/11/2025 (il y a 7 jours). L'analyse de l'historique montre un cycle moyen d'environ 35-40 jours. Bien que nous soyons tôt dans le cycle, le seuil de réapprovisionnement est de 30 jours, ce qui couvre la période où une commande devient statistiquement probable. Par principe de précaution B2B et pour éviter toute rupture sur un produit à rotation régulière, un besoin est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes oscillent entre 1u et 3u. La médiane des commandes récentes est de 2u, mais les deux dernières commandes montrent une tendance à la baisse (1u). Conformément à la règle de choisir la valeur la plus basse en cas de doute ou de tendance baissière, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 944 tokens
- **Output**: 218 tokens
- **Total**: 1,162 tokens



</details>


<details>
<summary><strong>8. [fsv04] Amande nature bio vrac 2,8 kg</strong> - LLM: 4u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une accélération de la rotation (48 jours entre août et septembre, puis 48 jours entre septembre et novembre). Bien que la dernière commande date de seulement 7 jours, le seuil de réapprovisionnement de 30 jours nous place dans une fenêtre critique où un besoin est probable pour maintenir le stock face à cette tendance croissante. En suivant la règle de la médiane des commandes récentes (1, 2, 4, 5), la médiane se situe entre 2 et 4. Conformément au principe de précaution B2B et à la règle de choisir la valeur la plus basse en cas de doute sur une tendance, nous retenons 4 unités pour couvrir le cycle sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 166 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>9. [fsv03] Noisette nature bio vrac 2,8kg </strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre des intervalles de commande de 54 jours et 92 jours. La dernière commande date du 04/11/2025 (il y a 7 jours). Bien que le cycle moyen ne soit pas encore atteint, la rotation est irrégulière et le stock B2B sur du vrac nécessite une vigilance particulière. En application du principe de précaution (si doute sur le cycle → prévoir), un besoin est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 1u, 1u et 2u. La médiane est de 1u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 200 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>10. [fsv18] Mendiant bio vrac 2,8kg</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 50 jours. La dernière commande date du 04/11/2025, soit il y a seulement 7 jours. Cependant, le cycle est irrégulier (intervalle variant de 44 à 48 jours, mais avec une commande très rapprochée en novembre). En application du principe de précaution B2B et face à l'irrégularité du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes (mode), assurant ainsi le maintien du stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 167 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>11. [fsv08] Banana chips bio vrac 1,6kg</strong> - LLM: 5u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence de réapprovisionnement moyenne d'environ 40 jours. La dernière commande date du 04/11/2025 (il y a 7 jours). Bien que le délai soit court, l'intervalle entre les deux dernières commandes n'était que de 48 jours et le seuil de réapprovisionnement est de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 5 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes (mode), assurant ainsi la couverture du stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 167 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>12. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 26 jours (intervalles de 15, 36, 35 et 34 jours). La dernière commande datant du 28 octobre (il y a 14 jours), le prochain besoin est estimé sous 12 à 15 jours, ce qui entre dans l'horizon du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 3 unités, correspondant à la médiane des commandes récentes (2, 3, 4, 3, 2), afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 168 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>13. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 35 jours. La dernière commande date du 28 octobre, soit il y a 14 jours. Avec un seuil de réapprovisionnement de 30 jours, la prochaine échéance théorique tombe dans 21 jours, ce qui entre dans l'horizon de vigilance (14 + 21 = 35 jours). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes très faibles (1u ou 2u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 178 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>14. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles réguliers d'environ 30 à 35 jours (24/09 au 28/10 = 34 jours). La dernière commande datant du 28/10 (il y a 14 jours), le prochain besoin est estimé sous 15 à 20 jours, ce qui entre dans l'horizon du seuil de réapprovisionnement de 30 jours. En suivant le principe de précaution B2B et la règle de la médiane sur l'historique récent (1, 2, 4, 2, 2), la quantité retenue est de 2 unités pour couvrir le cycle à venir sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 165 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>15. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 28 jours. La dernière commande datant du 28 octobre (il y a 14 jours), le prochain besoin théorique se situe autour du 25 novembre, ce qui entre dans la fenêtre de réapprovisionnement de 30 jours. Bien que le cycle soit légèrement irrégulier, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. Concernant la quantité, la médiane des commandes récentes se situe entre 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 959 tokens
- **Output**: 162 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>16. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande hebdomadaire très régulier (tous les mercredis en septembre/octobre). La dernière commande datant du 01/10/2025, le délai de 41 jours dépasse largement le cycle habituel de 7 à 14 jours, ce qui indique un besoin immédiat ou un risque de rupture imminent dans l'horizon des 30 jours. Concernant la quantité, les trois dernières commandes sont strictement identiques (2u). En appliquant la règle de la médiane sur l'historique récent et en privilégiant la stabilité pour une rotation régulière, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 995 tokens
- **Output**: 155 tokens
- **Total**: 1,150 tokens



</details>


<details>
<summary><strong>17. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 01/10/2025, soit 41 jours avant la date actuelle (11/11/2025). L'intervalle entre les deux dernières commandes était de 70 jours. Bien que nous ne soyons pas encore à l'échéance théorique du cycle, le délai de réapprovisionnement de 30 jours (Replenishment Threshold Days) nous place dans une zone de risque de rupture à court terme. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre des volumes très faibles (1u et 2u). Conformément aux règles de gestion des rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité (médiane basse).

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 211 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>18. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 septembre, soit 48 jours. Le cycle moyen observé est d'environ 24 jours. Nous avons largement dépassé ce cycle et le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes faibles (1, 3, 1, 2). La médiane de ces commandes est de 1,5. Conformément à la règle de précaution sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 157 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>19. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre, soit 55 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (84 jours entre juin et septembre). Avec un seuil de réapprovisionnement de 30 jours, il existe un risque de rupture ou un besoin imminent selon le principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes très faibles (1u et 2u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est la médiane minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 161 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>20. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (Détection) : La dernière commande remonte au 02/09/2025, soit 70 jours avant la date actuelle. Le cycle précédent était de 50 jours. Nous avons largement dépassé ce cycle moyen, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B (70 jours > 70% du cycle estimé). ÉTAPE 2 (Quantité) : L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute pour les produits à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 170 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>21. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle moyen observé est d'environ 28 jours. La dernière commande remonte au 20 août 2025, soit 83 jours sans commande. Bien que le délai dépasse largement le cycle habituel, le principe de précaution B2B impose de prévoir un réapprovisionnement car le besoin est incertain mais probable pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre des quantités de 1u et 2u. En suivant la règle de la médiane et le choix de la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 151 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>22. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 20 août, soit 83 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (28 jours). En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des volumes de 1u et 2u. Conformément à la règle sur les rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 156 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>23. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août, soit 83 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle observé entre les deux premières commandes (28 jours). En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 153 tokens
- **Total**: 1,042 tokens



</details>




### Donnees d'Input LLM (23 produits)


<details>
<summary><strong>1. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-06-25 06:45:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-10-28 07:14:16: 3u
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u
- 2025-09-02 06:42:42: 3u
- 2025-08-19 11:00:28: 5u
- 2025-07-22 06:58:35: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-10-28 07:14:16: 3u
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u
- 2025-07-22 06:58:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-10-01 07:17:25: 1u
- 2025-09-17 06:33:32: 5u
- 2025-08-04 13:50:22: 4u
- 2025-06-11 06:57:05: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [fsv02] Noix de cajou nature bio vrac 2,8kg </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:35:39: 2u
- 2025-09-17 06:33:32: 3u
- 2025-06-30 12:36:16: 1u
- 2025-06-11 06:57:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-09-17 06:33:32: 5u
- 2025-08-04 13:50:22: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>7. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:35:39: 1u
- 2025-10-01 07:17:25: 1u
- 2025-09-17 06:33:32: 3u
- 2025-08-04 13:50:22: 2u
- 2025-06-11 06:57:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [fsv04] Amande nature bio vrac 2,8 kg</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-09-17 06:33:32: 4u
- 2025-08-04 13:50:22: 2u
- 2025-06-11 06:57:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>9. [fsv03] Noisette nature bio vrac 2,8kg </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:35:39: 2u
- 2025-08-04 13:50:22: 1u
- 2025-06-11 06:57:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [fsv18] Mendiant bio vrac 2,8kg</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:35:39: 2u
- 2025-09-17 06:33:32: 2u
- 2025-08-04 13:50:22: 1u
- 2025-06-11 06:57:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [fsv08] Banana chips bio vrac 1,6kg</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-09-17 06:33:32: 2u
- 2025-08-04 13:50:22: 5u
- 2025-06-30 12:36:16: 2u
- 2025-06-11 06:57:05: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>12. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-09-24 06:16:03: 3u
- 2025-08-19 11:00:28: 4u
- 2025-08-04 13:50:22: 3u
- 2025-07-14 13:52:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-08-19 11:00:28: 1u
- 2025-08-04 13:50:22: 1u
- 2025-07-14 13:52:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 07:14:16: 1u
- 2025-09-24 06:16:03: 2u
- 2025-08-19 11:00:28: 4u
- 2025-08-04 13:50:22: 2u
- 2025-07-14 13:52:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-10-01 07:17:25: 1u
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u
- 2025-07-22 06:58:35: 1u
- 2025-06-11 06:58:08: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 2u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u
- 2025-07-22 06:58:35: 4u
- 2025-07-14 13:52:07: 2u
- 2025-06-30 12:36:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:17:25: 1u
- 2025-07-23 06:55:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 06:16:03: 1u
- 2025-08-19 11:00:28: 3u
- 2025-08-04 13:50:22: 1u
- 2025-07-14 13:52:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:34:27: 1u
- 2025-06-25 06:45:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:42:42: 2u
- 2025-07-14 13:52:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 09:46:10: 1u
- 2025-07-23 06:55:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 09:46:10: 1u
- 2025-07-23 06:55:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>23. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 09:46:10: 1u
- 2025-07-23 06:55:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | Predicted 1u but not ordered |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Predicted 1u but not ordered |
| [fsv01] Cerneaux de noix nature bio vrac 1,8kg | 3 | Predicted 3u but not ordered |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Predicted 2u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Predicted 2u but not ordered |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Predicted 1u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | Predicted 2u but not ordered |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Predicted 1u but not ordered |
| [OCC05] OCCHIOLINO premium arancello 500ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 2 | Product analyzed but LLM -> 0 - client ordered 2u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique de commande n'est disponible pour ce produit (Recent Orders et Last Year Orders sont vides). En l'absence totale d'historique de rotation ou de cycle de commande, il est impossible d'établir un besoin de réapprovisionnement ou de calculer une quantité basée sur la médiane. Par mesure de prudence et pour éviter un surstockage injustifié, aucune commande n'est préconisée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:16:01.671Z*
