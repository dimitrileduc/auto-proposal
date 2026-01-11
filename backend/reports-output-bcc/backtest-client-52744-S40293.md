# Rapport Backtest - Client SCHMETS DELICATESSES

## Contexte

- **Client** : SCHMETS DELICATESSES (ID: 52744)
- **Commande réelle** : S40293
- **Date commande** : 2025-11-12 13:44:39
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 22,538 input + 4,121 output = 26,659 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 21 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 83.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 32.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 27.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 3.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (15)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 6 | 8 | 2.0 | 25.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 8 | 8 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 8 | 4.0 | 50.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 6 | 2.0 | 33.3% | partial | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 8 | 4 | 4.0 | 100.0% | partial | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 8 | 4 | 4.0 | 100.0% | partial | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (15 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 6u vs Médiane: 4u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 4u
- **Reel commande**: 8u
- **Erreur LLM**: 2u (25.0%)
- **Erreur Mediane**: 4u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 jours. La dernière commande remonte au 03/10/2025, soit 39 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent dans l'horizon de prévision (39 + 30 = 69 jours, dépassant le cycle moyen). En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 6 unités, ce qui correspond à la médiane des commandes récentes (4, 6, 6, 8) et à la commande historique de la même période l'année précédente (novembre 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 1,059 tokens
- **Output**: 172 tokens
- **Total**: 1,231 tokens



</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 8u vs Médiane: 7u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 7u
- **Reel commande**: 8u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (12.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/10/2025, soit 39 jours. Le cycle moyen constaté est d'environ 30 jours. Nous avons dépassé ce cycle et entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days), d'autant plus que l'historique N-1 montre une commande systématique début novembre. ÉTAPE 2 : Estimation quantité. Les quantités récentes oscillent entre 4u et 10u. La médiane des commandes récentes (8, 10, 8, 6, 4) est de 8u. Ce volume correspond également à la commande passée à la même période l'année dernière (05/11/2024). On maintient donc une quantité de 8u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,095 tokens
- **Output**: 197 tokens
- **Total**: 1,292 tokens



</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 40 jours. La dernière commande datant du 3 octobre (soit 39 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, confirmant un risque de rupture imminent. Concernant le volume, l'historique récent présente des quantités de 2u, 4u et 5u. La médiane des commandes récentes est de 4u. Bien que l'historique N-1 montre des volumes légèrement supérieurs (6-8u), la tendance actuelle est plus basse et stable autour de 4u. En application du principe de précaution et de l'utilisation de la médiane, une quantité de 4u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,042 tokens
- **Output**: 175 tokens
- **Total**: 1,217 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 8u
- **Erreur LLM**: 4u (50.0%)
- **Erreur Mediane**: 4u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 03/10/2025, soit 39 jours avant la date actuelle. Le cycle moyen observé est d'environ 30 à 35 jours. Nous avons dépassé ce cycle, et avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. ÉTAPE 2 : L'historique récent montre des quantités de 4u, 4u, 8u, 4u et 2u. La médiane de ces commandes est de 4u. La valeur de 8u est traitée comme un pic exceptionnel. Conformément à la règle de la médiane pour une rotation régulière, la quantité retenue est de 4u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,075 tokens
- **Output**: 176 tokens
- **Total**: 1,251 tokens



</details>


<details>
<summary><strong>5. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 03/10/2025, soit 39 jours avant la date actuelle (11/11/2025). Le cycle moyen observé sur l'historique récent et N-1 est d'environ 30 à 40 jours. Nous sommes donc à l'échéance critique du cycle de réapprovisionnement. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes oscillent entre 2u, 3u et 5u. La médiane des commandes récentes (5, 2, 5, 3) est de 4u, mais l'historique N-1 sur la même période (novembre) indique une commande de 3u. En application de la règle de prudence B2B (choisir la valeur la plus basse en cas de doute entre deux quantités types), la quantité de 3u est retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,044 tokens
- **Output**: 251 tokens
- **Total**: 1,295 tokens



</details>


<details>
<summary><strong>6. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 jours. La dernière commande datant du 03/10/2025 (soit 39 jours avant la date actuelle), nous entrons dans la zone de risque de rupture à l'horizon des 30 prochains jours (seuil de réapprovisionnement). Conformément au principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane et à la constante observée sur les trois dernières commandes récentes, ainsi qu'à la majorité des commandes de l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 1,042 tokens
- **Output**: 142 tokens
- **Total**: 1,184 tokens



</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 6u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 30 à 40 jours. La dernière commande remontant au 03/10/2025 (soit 39 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est dépassé, confirmant un risque de rupture imminent. Bien que la dernière commande ait été de 2 unités, l'historique récent et N-1 montre une consommation plus stable autour de 6 unités (médiane historique). En suivant le principe de précaution B2B et en se basant sur la médiane des volumes habituels hors baisse ponctuelle, une quantité de 6 unités est préconisée pour couvrir la période à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 1,056 tokens
- **Output**: 168 tokens
- **Total**: 1,224 tokens



</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours (01/09, 03/10). La dernière commande datant du 03/10, soit il y a 39 jours, le seuil de réapprovisionnement de 30 jours est dépassé, confirmant un risque de rupture imminent. Concernant la quantité, bien que l'historique N-1 affichait des volumes de 8u, la tendance récente en 2025 est stabilisée à 4u (4 commandes sur 5). En suivant la règle de la médiane des commandes récentes et le principe de ne pas surestimer, une quantité de 4u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,041 tokens
- **Output**: 169 tokens
- **Total**: 1,210 tokens



</details>


<details>
<summary><strong>9. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 8u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 4u (100.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours (05/08, 01/09, 03/10). La dernière commande datant du 03/10, soit il y a 39 jours, le seuil de réapprovisionnement de 30 jours est dépassé, indiquant un risque de rupture imminent. Bien que l'historique N-1 montre des volumes de 4u, la tendance récente sur les trois derniers mois s'est stabilisée à 8u par commande. En suivant la règle de la médiane des commandes récentes et pour maintenir la rotation actuelle, une quantité de 8 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,076 tokens
- **Output**: 162 tokens
- **Total**: 1,238 tokens



</details>


<details>
<summary><strong>10. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/10/2025, soit 39 jours. Le cycle moyen récent est d'environ 50-60 jours. Avec un seuil de réapprovisionnement de 30 jours, nous couvrons l'horizon jusqu'au 11/12/2025. L'historique N-1 montre une activité importante en octobre/novembre (3u et 6u). Il existe donc un risque de rupture imminent. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 1u, 1u et 2u. La médiane du récent est de 1u. Bien que l'année dernière ait connu un pic à 6u, la tendance 2025 est plus faible et stable. En respectant la règle de la médiane et de la prudence (choisir la valeur la plus basse en cas de doute), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,024 tokens
- **Output**: 232 tokens
- **Total**: 1,256 tokens



</details>


<details>
<summary><strong>11. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 03/10/2025, soit 39 jours. Le cycle moyen récent est d'environ 30 à 35 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. L'historique de l'année dernière montre également une activité en novembre (05/11). En suivant la règle de la médiane des commandes récentes (2u, 2u, 2u, 4u), la quantité retenue est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,043 tokens
- **Output**: 137 tokens
- **Total**: 1,180 tokens



</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 4u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/10/2025, soit 39 jours. Le cycle moyen récent est d'environ 30 jours. Nous avons dépassé ce cycle et entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days), d'autant plus qu'une commande avait été passée à la même période l'année dernière (05/11/2024). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une baisse de volume (4u, 4u) par rapport au pic d'août (8u). En suivant la règle de la médiane des commandes récentes (4, 4, 8) et en privilégiant la valeur la plus basse en cas de doute ou de tendance à la baisse, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 208 tokens
- **Total**: 1,246 tokens



</details>


<details>
<summary><strong>13. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 8u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 4u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 01/09/2025, soit 71 jours avant la date actuelle. Bien que l'historique récent soit espacé, l'historique N-1 montre une activité régulière en octobre et novembre (8u le 05/11/2024). Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes oscillent entre 2u, 8u et 12u. La médiane de l'historique récent est de 8u. En respectant le principe de précaution sans surestimer (le pic de 12u étant traité comme exceptionnel), la quantité de 8u est retenue pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 1,042 tokens
- **Output**: 203 tokens
- **Total**: 1,245 tokens



</details>


<details>
<summary><strong>14. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 01/09/2025, soit 71 jours. Le cycle moyen observé est d'environ 50 à 60 jours. Nous avons largement dépassé ce cycle et le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u et 3u. La médiane des commandes récentes est de 2u. Bien qu'une commande de 8u apparaisse l'année dernière à la même période, elle est considérée comme un pic exceptionnel par rapport à la rotation habituelle. En application du principe de précaution et de la règle de la médiane basse, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 195 tokens
- **Total**: 1,169 tokens



</details>


<details>
<summary><strong>15. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/09/2025, soit 71 jours avant la date actuelle (11/11/2025). Le cycle entre les deux dernières commandes était de 27 jours. Le délai actuel dépasse largement ce cycle et l'historique montre une activité sporadique. En application du principe de précaution B2B (incertitude sur le cycle = prévoir), un risque de rupture est identifié pour l'horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. La médiane est de 1,5u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute et de maintenir les faibles rotations (1-2u), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 205 tokens
- **Total**: 1,123 tokens



</details>




### Donnees d'Input LLM (15 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 6u
- 2025-08-05 09:14:52: 6u
- 2025-07-14 07:02:58: 4u
- 2025-06-16 10:57:11: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 6u
- 2024-10-01 06:56:31: 2u
- 2024-08-06 06:28:46: 2u
- 2024-07-10 08:20:57: 2u
- 2024-06-06 09:00:27: 5u
- 2024-05-13 14:17:22: 5u
- 2024-04-18 08:51:22: 4u
- 2024-03-27 07:23:47: 5u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 8u
- 2025-09-01 08:13:47: 10u
- 2025-08-05 09:14:52: 8u
- 2025-07-14 07:02:58: 6u
- 2025-06-16 10:57:11: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 8u
- 2024-10-01 06:56:31: 8u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 6u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 6u
- 2024-05-13 14:17:22: 8u
- 2024-04-18 08:51:22: 6u
- 2024-03-27 07:23:47: 5u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 2u
- 2025-08-05 09:14:52: 5u
- 2025-07-14 07:02:58: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 8u
- 2024-08-06 06:28:46: 6u
- 2024-07-10 08:20:57: 6u
- 2024-06-06 09:00:27: 6u
- 2024-05-13 14:17:22: 4u
- 2024-04-18 08:51:22: 4u
- 2024-03-27 07:23:47: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 4u
- 2025-08-05 09:14:52: 8u
- 2025-07-14 07:02:58: 4u
- 2025-06-16 10:57:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 3u
- 2024-10-01 06:56:31: 4u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 3u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 4u
- 2024-03-27 07:23:47: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>5. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 5u
- 2025-09-01 08:13:47: 2u
- 2025-08-05 09:14:52: 5u
- 2025-06-16 10:57:11: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 3u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 2u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>6. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 3u
- 2025-08-05 09:14:52: 3u
- 2025-07-14 07:02:58: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 4u
- 2024-10-01 06:56:31: 3u
- 2024-08-06 06:28:46: 3u
- 2024-07-10 08:20:57: 3u
- 2024-06-06 09:00:27: 3u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 2u
- 2025-09-01 08:13:47: 8u
- 2025-08-05 09:14:52: 8u
- 2025-06-16 10:57:11: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 6u
- 2024-10-01 06:56:31: 4u
- 2024-08-06 06:28:46: 6u
- 2024-07-10 08:20:57: 6u
- 2024-06-06 09:00:27: 6u
- 2024-05-13 14:17:22: 5u
- 2024-04-18 08:51:22: 6u
- 2024-03-27 07:23:47: 5u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 4u
- 2025-08-05 09:14:52: 8u
- 2025-07-14 07:02:58: 4u
- 2025-06-16 10:57:11: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 8u
- 2024-10-01 06:56:31: 8u
- 2024-08-06 06:28:46: 8u
- 2024-07-10 08:20:57: 8u
- 2024-05-13 14:17:22: 6u
- 2024-04-18 08:51:22: 6u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>9. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 8u
- 2025-09-01 08:13:47: 8u
- 2025-08-05 09:14:52: 8u
- 2025-07-14 07:02:58: 3u
- 2025-06-16 10:57:11: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 4u
- 2024-10-01 06:56:31: 4u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 3u
- 2024-05-13 14:17:22: 4u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 5u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>10. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 1u
- 2025-08-05 09:14:52: 1u
- 2025-06-16 10:57:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 6u
- 2024-10-01 06:56:31: 3u
- 2024-08-06 06:28:46: 1u
- 2024-07-10 08:20:57: 1u
- 2024-06-06 09:00:27: 1u
- 2024-04-18 08:51:22: 1u
- 2024-03-27 07:23:47: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 2u
- 2025-09-01 08:13:47: 2u
- 2025-08-05 09:14:52: 2u
- 2025-06-16 10:57:11: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 4u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 2u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 4u
- 2025-08-05 09:14:52: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 8u
- 2024-10-01 06:56:31: 5u
- 2024-08-06 06:28:46: 5u
- 2024-07-10 08:20:57: 5u
- 2024-06-06 09:00:27: 5u
- 2024-05-13 14:17:22: 5u
- 2024-04-18 08:51:22: 6u
- 2024-03-27 07:23:47: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>13. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 08:13:47: 12u
- 2025-08-05 09:14:52: 8u
- 2025-06-16 10:57:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 8u
- 2024-10-01 06:56:31: 2u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 2u
- 2024-06-06 09:00:27: 4u
- 2024-05-13 14:17:22: 5u
- 2024-04-18 08:51:22: 6u
- 2024-03-27 07:23:47: 5u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>14. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 08:13:47: 3u
- 2025-08-05 09:14:52: 2u
- 2025-06-16 10:57:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 08:12:13: 8u
- 2024-08-06 06:28:46: 2u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 08:13:47: 1u
- 2025-08-05 09:14:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 12:47:14: 5u
- 2024-03-27 07:23:47: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 6 | Predicted 6u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 4 | Predicted 4u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 8 | Predicted 8u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:41.491Z*
