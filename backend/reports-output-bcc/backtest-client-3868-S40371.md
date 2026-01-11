# Rapport Backtest - Client TERRA NATURKOST HANDELS KG

## Contexte

- **Client** : TERRA NATURKOST HANDELS KG (ID: 3868)
- **Commande réelle** : S40371
- **Date commande** : 2025-11-14 15:19:09
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 15,054 input + 2,605 output = 17,659 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 92.9% | 14 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 96.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 14.31 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 24.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -31.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 32 | 48 | 16.0 | 33.3% | partial | Non | Non | LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 48 | 48 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 64 | 80 | 16.0 | 20.0% | partial | Non | Non | LLM |
| [MF0062] ​MF Tarti Betterave rouge | 32 | 80 | 48.0 | 60.0% | partial | Non | Non | LLM |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 25 | 50 | 25.0 | 50.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 25 | 25 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 25 | 50 | 25.0 | 50.0% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 25 | 25 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 25 | 25 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 25 | 53 | 28.0 | 52.8% | partial | Non | Non | LLM |
| [LV345] LV Spread KIDS 200ml Organic | 25 | 25 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 25 | 53 | 28.0 | 52.8% | partial | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 25 | 25 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 32u vs Médiane: 40u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 32u
- **Baseline calculee**: 32u
- **Mediane historique**: 40u
- **Reel commande**: 48u
- **Erreur LLM**: 16u (33.3%)
- **Erreur Mediane**: 8u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 32u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 25 à 30 jours. La dernière commande datant du 17 octobre (soit 27 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours du seuil de réapprovisionnement. Concernant la quantité, l'historique récent présente des volumes de 16u, 32u et 48u. La médiane de ces commandes récentes est de 32u, ce qui correspond également au volume le plus fréquent observé sur l'historique de l'année précédente. Conformément aux règles de gestion, nous retenons cette valeur médiane pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,124 tokens
- **Output**: 160 tokens
- **Total**: 1,284 tokens



</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 48u vs Médiane: 48u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 48u
- **Baseline calculee**: 48u
- **Mediane historique**: 48u
- **Reel commande**: 48u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 48u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 17 octobre 2025, soit il y a 27 jours. L'historique récent montre un cycle de commande moyen d'environ 20 à 25 jours (ex: 21 jours entre les deux dernières commandes). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous avons déjà dépassé l'intervalle habituel. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes oscillent entre 32u, 48u et 64u. La médiane des commandes récentes est de 48u. Ce volume correspond également à la commande de la même période l'année dernière (octobre 2024). En suivant la règle de la médiane et de la stabilité historique, la quantité de 48u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,132 tokens
- **Output**: 209 tokens
- **Total**: 1,341 tokens



</details>


<details>
<summary><strong>3. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 64u vs Médiane: 72u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 64u
- **Baseline calculee**: 64u
- **Mediane historique**: 72u
- **Reel commande**: 80u
- **Erreur LLM**: 16u (20.0%)
- **Erreur Mediane**: 8u (10.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 64u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence de réapprovisionnement d'environ 15 à 25 jours sur les trois dernières commandes (septembre/octobre). La dernière commande datant du 17 octobre, soit il y a 27 jours, le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Concernant la quantité, l'historique récent est très stable avec trois commandes consécutives de 64 unités. Conformément à la règle de la médiane et du maintien d'une rotation régulière, une quantité de 64 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,129 tokens
- **Output**: 145 tokens
- **Total**: 1,274 tokens



</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 32u vs Médiane: 64u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 32u
- **Baseline calculee**: 32u
- **Mediane historique**: 64u
- **Reel commande**: 80u
- **Erreur LLM**: 48u (60.0%)
- **Erreur Mediane**: 16u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 32u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 21 à 53 jours. La dernière commande date du 17 octobre, soit 27 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la fin du cycle habituel. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 32u, 32u et 64u. La médiane des commandes récentes est de 32u. La commande de 64u est traitée comme un pic exceptionnel. Conformément à la règle de prudence et de maintien de la rotation régulière, la quantité retenue est de 32u.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 176 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>5. [LV348] LV Tartinade Dattes-Chili 180g BE bio</strong> - LLM: 25u vs Médiane: 50u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 50u
- **Reel commande**: 50u
- **Erreur LLM**: 25u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 15 jours entre les deux dernières commandes (11/09 et 26/09). Depuis la dernière commande du 26 septembre, 48 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou une consommation non couverte. Conformément à la règle de la médiane sur l'historique récent, les commandes de 75u en juillet étant des pics isolés, la quantité de 25u (observée sur les deux dernières commandes) est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 933 tokens
- **Output**: 160 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>6. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 25u vs Médiane: 50u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 50u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 25u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 66 jours entre les deux dernières commandes. Au 13 novembre, 48 jours se sont écoulés depuis la dernière commande (26 septembre), ce qui représente environ 73% du cycle moyen. Ce dépassement du seuil de 70% indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent, la quantité retenue est de 25 unités, correspondant à la commande la plus récente et la plus basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 152 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>7. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 25u vs Médiane: 50u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 50u
- **Reel commande**: 50u
- **Erreur LLM**: 25u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 66 jours entre les deux dernières commandes. Au 13 novembre 2025, 48 jours se sont écoulés depuis la dernière commande (26 septembre), ce qui représente environ 73% du cycle moyen. Ce dépassement du seuil de 70% indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application de la règle de précaution B2B et de la méthode de la médiane, la quantité retenue est de 25 unités, correspondant au volume de la commande la plus récente et la plus basse, afin d'éviter un surstockage tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 163 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 25u vs Médiane: 75u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 75u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 50u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 66 jours entre les deux dernières sessions de commande (22 juillet au 26 septembre). Au 13 novembre, 48 jours se sont écoulés depuis la dernière commande, ce qui représente environ 73% du cycle moyen. Selon la règle des 70%, le risque de rupture est identifié pour l'horizon des 30 prochains jours. Concernant la quantité, bien que des volumes de 75u aient été observés en juillet, la commande la plus récente est de 25u. En application du principe de précaution B2B et de la règle privilégiant la valeur la plus basse en cas de doute sur la tendance, la quantité retenue est la médiane basse de 25u.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 177 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>9. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 25u vs Médiane: 50u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 50u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 25u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 26 septembre, soit il y a 48 jours. L'intervalle précédent était de 66 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique (48 + 30 = 78 jours, dépassant le cycle moyen observé). Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre deux commandes (25u et 75u). La commande de 75u semble être un pic exceptionnel ou un stock de mise en place. Conformément à la règle de privilégier la médiane et, en cas de doute, la valeur la plus basse pour éviter le surstockage, la quantité retenue est de 25u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 198 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>10. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 25u vs Médiane: 25u (Réel: 53u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 25u
- **Reel commande**: 53u
- **Erreur LLM**: 28u (52.8%)
- **Erreur Mediane**: 28u (52.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 30 jours entre les commandes régulières (septembre). Depuis la dernière commande du 26 septembre, 48 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Pour la quantité, bien qu'une commande de 75u ait été passée en juillet, les deux commandes les plus récentes et régulières sont de 25u. En appliquant la règle de la médiane et de prudence pour éviter le surstockage sur un produit à rotation modérée, la quantité de 25u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 161 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>11. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 25u vs Médiane: 50u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 50u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 25u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 septembre, soit 48 jours. L'intervalle précédent était de 66 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique (48 + 30 = 78 jours, dépassant le cycle moyen observé). Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre deux valeurs (25u et 75u). Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de tendance incertaine pour éviter le surstock, la quantité de 25u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 175 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>12. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 25u vs Médiane: 50u (Réel: 53u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 50u
- **Reel commande**: 53u
- **Erreur LLM**: 28u (52.8%)
- **Erreur Mediane**: 3u (5.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 septembre, soit 63 jours. L'intervalle précédent était de 51 jours. Nous avons largement dépassé le cycle moyen constaté. Le risque de rupture est imminent ou déjà avéré dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique présente deux valeurs (25u et 75u). Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de quantité irrégulière pour éviter le surstockage, la quantité de 25u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 146 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>13. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 25u vs Médiane: 50u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 50u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 25u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 51 jours entre les deux dernières commandes. Au 13 novembre 2025, 63 jours se sont écoulés depuis la dernière commande (11 septembre), ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. Pour la quantité, bien qu'une commande de 75u ait été passée en juillet, la commande la plus récente est de 25u. En application de la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute ou de tendance incertaine, la quantité retenue est de 25u.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 161 tokens
- **Total**: 1,052 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-17 12:58:29: 32u
- 2025-09-26 09:47:05: 16u
- 2025-08-04 10:30:17: 48u
- 2025-07-22 13:10:16: 16u
- 2025-07-22 10:11:33: 48u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 11:39:30: 16u
- 2024-09-23 07:00:28: 32u
- 2024-08-16 11:44:09: 32u
- 2024-07-05 09:22:25: 16u
- 2024-05-06 12:17:20: 32u
- 2024-04-25 07:54:19: 32u
- 2024-03-27 14:20:05: 32u
- 2024-02-23 08:25:35: 48u
- 2024-01-26 09:38:43: 16u
- 2024-01-05 08:53:58: 32u

**Quantite Mediane (fallback)**: 32u
**Quantite Reelle**: 48u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-17 12:58:29: 48u
- 2025-09-26 09:47:05: 48u
- 2025-09-11 14:14:00: 32u
- 2025-08-04 10:30:17: 32u
- 2025-07-22 10:11:33: 64u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 11:39:30: 48u
- 2024-09-23 07:00:28: 80u
- 2024-08-16 11:44:09: 48u
- 2024-07-05 09:22:25: 64u
- 2024-05-06 12:17:20: 32u
- 2024-04-25 07:54:19: 48u
- 2024-03-27 14:20:05: 48u
- 2024-02-23 08:25:35: 48u
- 2024-01-26 09:38:43: 48u
- 2024-01-05 08:53:58: 48u

**Quantite Mediane (fallback)**: 48u
**Quantite Reelle**: 48u

</details>


<details>
<summary><strong>3. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-17 12:58:29: 64u
- 2025-09-26 09:47:05: 64u
- 2025-09-11 14:14:00: 64u
- 2025-08-04 10:30:17: 16u
- 2025-07-22 13:10:16: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 11:39:30: 80u
- 2024-09-23 07:00:28: 48u
- 2024-08-16 11:44:09: 80u
- 2024-07-05 09:22:25: 80u
- 2024-05-06 12:17:20: 80u
- 2024-04-25 07:54:19: 80u
- 2024-03-27 14:20:05: 80u
- 2024-02-23 08:25:35: 64u
- 2024-01-26 09:38:43: 80u
- 2024-01-05 08:53:58: 64u

**Quantite Mediane (fallback)**: 64u
**Quantite Reelle**: 80u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-17 12:58:29: 32u
- 2025-09-26 09:47:05: 32u
- 2025-08-04 10:30:17: 64u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 32u
**Quantite Reelle**: 80u

</details>


<details>
<summary><strong>5. [LV348] LV Tartinade Dattes-Chili 180g BE bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-09-11 14:14:00: 25u
- 2025-07-22 13:10:16: 75u
- 2025-07-22 10:11:33: 75u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 50u

</details>


<details>
<summary><strong>6. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-07-22 10:11:33: 75u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>7. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-07-22 10:11:33: 75u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 50u

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-07-22 13:10:16: 75u
- 2025-07-22 10:11:33: 75u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>9. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-07-22 10:11:33: 75u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>10. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-09-11 14:14:00: 25u
- 2025-07-22 10:11:33: 75u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 53u

</details>


<details>
<summary><strong>11. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-07-22 10:11:33: 75u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>12. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 14:14:00: 25u
- 2025-07-22 10:11:33: 75u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 53u

</details>


<details>
<summary><strong>13. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 14:14:00: 25u
- 2025-07-22 10:11:33: 75u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV331] LV Tartinade Lentils Balsamico 190g | 25 | Predicted 25u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:32.018Z*
