# Rapport Backtest - Client Kazidomi France

## Contexte

- **Client** : Kazidomi France (ID: 23356)
- **Commande réelle** : S40162
- **Date commande** : 2025-11-06 08:40:04
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 17,287 input + 3,348 output = 20,635 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 17 produits prédits, 17 corrects |
| **Rappel** | 100.0% | 17 produits réels, 17 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 6.18 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 161.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 39.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 17 | Avec erreur |

---

## True Positives (17)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV129] LV Tartinade Carotte Gingembre 190g | 20 | 3 | 17.0 | 566.7% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 7 | 5 | 2.0 | 40.0% | partial | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 20 | 21 | 1.0 | 4.8% | partial | Non | Non | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 10 | 16 | 6.0 | 37.5% | partial | Non | Non | LLM |
| [LV040] LV Caprons apéritifs 240g | 3 | 5 | 2.0 | 40.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 20 | 26 | 6.0 | 23.1% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 29 | 17 | 12.0 | 70.6% | partial | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 3 | 8 | 5.0 | 62.5% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 16 | 2 | 14.0 | 700.0% | partial | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 6 | 3 | 3.0 | 100.0% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 11 | 3 | 8.0 | 266.7% | partial | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 6 | 7 | 1.0 | 14.3% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 14 | 16 | 2.0 | 12.5% | partial | Non | Non | LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 10 | 3 | 7.0 | 233.3% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 10 | 7 | 3.0 | 42.9% | partial | Non | Non | LLM |
| [LV138] LV Tartinade Carotte gingembre  380g | 14 | 6 | 8.0 | 133.3% | partial | Non | Non | LLM |
| [LV217] LV Tartinade Basilic 380g | 10 | 2 | 8.0 | 400.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (17 produits)


<details>
<summary><strong>1. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 20u vs Médiane: 17u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 17u
- **Reel commande**: 3u
- **Erreur LLM**: 17u (566.7%)
- **Erreur Mediane**: 14u (466.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 09/10/2025, soit il y a 27 jours. Le cycle moyen récent est d'environ 50 jours (37 jours entre les deux dernières, 69 jours entre les précédentes). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (27 jours écoulés + 30 jours de seuil > cycle moyen). De plus, l'historique N-1 montre une activité régulière en novembre (commandes les 07/11 et 29/11). Le besoin est donc confirmé par précaution. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 27u, 17u et 20u. La médiane de ces valeurs est de 20u. Bien que l'historique lointain montre des pics (72u, 126u), la règle privilégie la médiane du flux récent pour éviter le surstockage. La quantité retenue est de 20u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,086 tokens
- **Output**: 259 tokens
- **Total**: 1,345 tokens



</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 7u vs Médiane: 8u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 7u
- **Baseline calculee**: 7u
- **Mediane historique**: 8u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 7u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 jours entre les dernières commandes (37 jours entre sept/oct, 69 jours entre juin/sept). La dernière commande datant du 09/10/2025 (soit 27 jours avant la date actuelle), nous atteignons le seuil de 70% du cycle moyen. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). Pour la quantité, l'historique récent présente des volumes de 4, 7 et 10 unités. La médiane de ces commandes récentes est de 7 unités. Les volumes très élevés de l'année précédente (42u, 48u) sont écartés car ils ne reflètent pas la tendance de consommation actuelle plus modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,081 tokens
- **Output**: 189 tokens
- **Total**: 1,270 tokens



</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 20u vs Médiane: 20u (Réel: 21u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 20u
- **Reel commande**: 21u
- **Erreur LLM**: 1u (4.8%)
- **Erreur Mediane**: 1u (4.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 09/10/2025, soit 27 jours avant la date actuelle. Le cycle moyen récent est d'environ 35-40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent dans cet horizon. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 16u, 26u et 20u. La médiane de ces valeurs est de 20u. Les volumes très importants constatés l'année dernière (144u, 180u) sont écartés car ils ne reflètent pas la tendance de consommation actuelle plus modérée et régulière. La quantité retenue est donc la médiane des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 1,089 tokens
- **Output**: 204 tokens
- **Total**: 1,293 tokens



</details>


<details>
<summary><strong>4. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 10u vs Médiane: 10u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 16u
- **Erreur LLM**: 6u (37.5%)
- **Erreur Mediane**: 6u (37.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre des intervalles d'environ 37 à 68 jours. La dernière commande datant du 09/10/2025 (soit 27 jours avant la date actuelle), nous entrons dans la fenêtre de risque de rupture compte tenu du seuil de réapprovisionnement de 30 jours. Bien que l'historique N-1 présente des pics exceptionnels (144u, 84u), la tendance récente est beaucoup plus stable et modérée. En appliquant la règle de la médiane sur les commandes récentes (9, 10, 12), la quantité retenue est de 10 unités pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,082 tokens
- **Output**: 165 tokens
- **Total**: 1,247 tokens



</details>


<details>
<summary><strong>5. [LV040] LV Caprons apéritifs 240g</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 09/10/2025, soit 27 jours avant la date actuelle. Le cycle moyen récent est d'environ 35-40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici la fin de la période de couverture. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 3u, 6u et 3u. La médiane des commandes récentes est de 3u. Bien que l'historique N-1 montre des pics ponctuels (30u, 66u), la règle de précaution B2B impose de ne pas prendre en compte les événements exceptionnels et de privilégier la médiane basse pour éviter le surstockage. La quantité retenue est donc de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,059 tokens
- **Output**: 206 tokens
- **Total**: 1,265 tokens



</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 20u vs Médiane: 15u (Réel: 26u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 15u
- **Reel commande**: 26u
- **Erreur LLM**: 6u (23.1%)
- **Erreur Mediane**: 11u (42.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 09/10/2025, soit il y a 27 jours. Le cycle moyen récent est d'environ 50 jours, mais l'historique N-1 montre une activité soutenue en fin d'année (novembre/décembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est réel d'ici début décembre. Par mesure de précaution B2B, le besoin est validé. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 7, 23 et 20 unités. La médiane de l'historique récent est de 20 unités. Bien que l'année précédente affichait des volumes plus élevés, la tendance 2025 est à la baisse ; nous privilégions donc la médiane récente de 20 unités pour éviter le surstock tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 1,086 tokens
- **Output**: 226 tokens
- **Total**: 1,312 tokens



</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 29u vs Médiane: 27u (Réel: 17u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 29u
- **Baseline calculee**: 29u
- **Mediane historique**: 27u
- **Reel commande**: 17u
- **Erreur LLM**: 12u (70.6%)
- **Erreur Mediane**: 10u (58.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 29u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre un intervalle moyen d'environ 50 jours (37 jours entre les deux dernières, 69 jours entre les précédentes). La dernière commande datant du 09/10/2025 (soit 27 jours avant la date actuelle), nous atteignons 73% du cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément au principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes (20, 29, 32) est de 29 unités. Les volumes exceptionnels de l'année précédente (96u, 192u, 120u) sont écartés car ils ne reflètent pas la tendance de consommation actuelle plus stable et modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,088 tokens
- **Output**: 203 tokens
- **Total**: 1,291 tokens



</details>


<details>
<summary><strong>8. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 3u vs Médiane: 5u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 5u
- **Reel commande**: 8u
- **Erreur LLM**: 5u (62.5%)
- **Erreur Mediane**: 3u (37.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 09/10/2025, soit il y a 27 jours. L'historique montre une récurrence de commandes environ tous les 30 à 40 jours sur cette période (comparaison avec 2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente des volumes de 3u, 6u et 3u. La médiane des commandes récentes est de 3u. Les volumes importants constatés fin 2023 et début 2024 (18u, 54u, 60u) sont considérés comme des pics exceptionnels ou des stocks de mise en place qui ne reflètent pas la rotation courante actuelle. Application de la règle de prudence : maintien de la médiane basse à 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,043 tokens
- **Output**: 225 tokens
- **Total**: 1,268 tokens



</details>


<details>
<summary><strong>9. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 16u vs Médiane: 8u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 8u
- **Reel commande**: 2u
- **Erreur LLM**: 14u (700.0%)
- **Erreur Mediane**: 6u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 69 jours puis 37 jours. Depuis la dernière commande du 09/10/2025, 27 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (27 jours écoulés sur un cycle court de 37 jours, soit >70%). En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent présente des valeurs de 6, 16 et 17 unités. La médiane de ces commandes est de 16 unités. Cette quantité est retenue pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 171 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 6u vs Médiane: 6u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 3u
- **Erreur LLM**: 3u (100.0%)
- **Erreur Mediane**: 3u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 09/10/2025, soit 27 jours avant la date actuelle. Le cycle moyen observé est d'environ 53 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons l'horizon de risque à J+57, ce qui correspond à l'échéance théorique de la prochaine commande. Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation irrégulière, le besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 6u, 2u et 6u. La médiane des quantités est de 6u. Conformément aux règles, nous maintenons la quantité habituelle de 6u pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 200 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>11. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 11u vs Médiane: 10u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 11u
- **Baseline calculee**: 11u
- **Mediane historique**: 10u
- **Reel commande**: 3u
- **Erreur LLM**: 8u (266.7%)
- **Erreur Mediane**: 7u (233.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 11u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 09/10/2025, soit 27 jours avant la date actuelle. L'intervalle précédent était d'environ 106 jours, mais avec un seuil de réapprovisionnement de 30 jours et une rotation irrégulière, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre deux commandes (11u et 16u). Conformément à la règle de privilégier la médiane et, en cas de doute, de choisir la valeur la plus basse pour éviter le surstockage, la quantité retenue est de 11 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 178 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>12. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 6u vs Médiane: 10u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 10u
- **Reel commande**: 7u
- **Erreur LLM**: 1u (14.3%)
- **Erreur Mediane**: 3u (42.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
Le cycle de commande observé est d'environ 37 jours (entre le 02/09 et le 09/10). Au 05/11, 27 jours se sont écoulés depuis la dernière commande, ce qui représente 73% du cycle moyen. Ce dépassement du seuil de 70% indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 6 unités, correspondant à la médiane des commandes récentes et à la valeur la plus basse du cycle pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 156 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>13. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 14u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 14u
- **Baseline calculee**: 14u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 2u (12.5%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 14u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 02/09/2025, soit 64 jours. L'historique N-1 montre une activité régulière en octobre et novembre (commandes le 04/10/2024 et fin novembre 2023). Le délai depuis la dernière commande dépasse largement le cycle moyen observé l'an dernier à la même période. Le risque de rupture est avéré dans l'horizon des 30 jours. ÉTAPE 2 : L'historique récent (17u, 10u) et les commandes stables de l'an dernier (17u, 14u, 10u, 12u) indiquent une consommation régulière hors pics exceptionnels (72u, 102u). La médiane des commandes de volume standard se situe autour de 14 unités. Par mesure de précaution et respect de la médiane basse, la quantité de 14 est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,086 tokens
- **Output**: 224 tokens
- **Total**: 1,310 tokens



</details>


<details>
<summary><strong>14. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM: 10u vs Médiane: 10u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 3u
- **Erreur LLM**: 7u (233.3%)
- **Erreur Mediane**: 7u (233.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/09/2025, soit plus de 60 jours. L'historique N-1 montre une activité importante en novembre (30u et 36u) et une fréquence de commande régulière tous les 1 à 2 mois. Le risque de rupture est élevé pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une baisse (2u et 10u) par rapport aux volumes massifs de 2024 (souvent 42u). En suivant la règle de la médiane des commandes récentes et en privilégiant la prudence face à la tendance baissière, une quantité de 10u est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,066 tokens
- **Output**: 189 tokens
- **Total**: 1,255 tokens



</details>


<details>
<summary><strong>15. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 10u vs Médiane: 11u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 11u
- **Reel commande**: 7u
- **Erreur LLM**: 3u (42.9%)
- **Erreur Mediane**: 4u (57.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée remonte au 25 juin 2025, soit plus de 130 jours sans activité. L'historique N-1 montre une activité importante sur la période de novembre (48u le 29/11 et 120u le 07/11). Face à cette absence de données récentes et à l'approche d'une période historiquement active, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : Estimation de la quantité. L'historique N-1 présente de fortes variations (pics à 120u-156u probablement promotionnels). Conformément aux règles, les pics exceptionnels sont écartés. La commande la plus récente est de 10u et les volumes de fond de rayon hors pics oscillent entre 7u et 15u. La médiane des volumes réguliers se situe à 10u. En cas de doute sur la reprise de la rotation, la valeur la plus basse et prudente est privilégiée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,052 tokens
- **Output**: 247 tokens
- **Total**: 1,299 tokens



</details>


<details>
<summary><strong>16. [LV138] LV Tartinade Carotte gingembre  380g</strong> - LLM: 14u vs Médiane: 10u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 14u
- **Baseline calculee**: 14u
- **Mediane historique**: 10u
- **Reel commande**: 6u
- **Erreur LLM**: 8u (133.3%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 14u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 25 juin 2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (souvent inférieurs à 60 jours). L'historique N-1 montre une activité importante en novembre (36u et 48u), indiquant une saisonnalité forte pour ce produit. En application du principe de précaution B2B et face au risque de rupture pour la période de fin d'année, un réapprovisionnement est nécessaire. La quantité est fixée à 14 unités, correspondant à la médiane des commandes historiques hors pics exceptionnels (72u, 48u, 36u), privilégiant ainsi une approche prudente pour éviter le surstock tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 180 tokens
- **Total**: 1,174 tokens



</details>


<details>
<summary><strong>17. [LV217] LV Tartinade Basilic 380g</strong> - LLM: 10u vs Médiane: 10u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 2u
- **Erreur LLM**: 8u (400.0%)
- **Erreur Mediane**: 8u (400.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 133 jours. Bien que le cycle soit indéterminé, le principe de précaution B2B s'applique face à une absence de commande sur une période prolongée. En cas de doute sur le cycle ou de données insuffisantes pour établir une régularité, la règle impose de prévoir une commande pour éviter une rupture de stock prolongée. La quantité est fixée à 10 unités, correspondant à la médiane (et unique valeur) de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 126 tokens
- **Total**: 998 tokens



</details>




### Donnees d'Input LLM (17 produits)


<details>
<summary><strong>1. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 27u
- 2025-09-02 12:52:12: 17u
- 2025-06-25 12:27:15: 20u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 10u
- 2024-09-03 06:40:12: 16u
- 2024-08-14 13:57:42: 6u
- 2024-07-01 04:56:24: 72u
- 2024-05-28 08:10:45: 6u
- 2024-04-09 11:38:43: 126u
- 2024-02-26 13:32:31: 5u
- 2024-02-19 09:42:57: 72u
- 2023-11-29 10:39:30: 54u
- 2023-11-07 13:59:38: 48u

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 7u
- 2025-09-02 12:52:12: 4u
- 2025-06-25 12:27:15: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 2u
- 2024-09-03 06:40:12: 7u
- 2024-08-14 13:57:42: 5u
- 2024-07-01 04:56:24: 42u
- 2024-05-28 08:10:45: 8u
- 2024-03-22 09:31:43: 30u
- 2024-02-26 13:32:31: 11u
- 2024-02-19 09:42:57: 42u
- 2023-11-29 10:39:30: 48u
- 2023-11-07 13:59:38: 24u

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 16u
- 2025-09-02 12:52:12: 26u
- 2025-06-25 12:27:15: 20u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 23u
- 2024-09-03 06:40:12: 25u
- 2024-08-14 13:57:42: 14u
- 2024-07-01 04:56:24: 144u
- 2024-05-28 08:10:45: 13u
- 2024-04-09 11:38:43: 180u
- 2024-02-26 13:32:31: 21u
- 2024-02-19 09:42:57: 78u
- 2023-11-29 10:39:30: 54u
- 2023-11-07 13:59:38: 120u

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 21u

</details>


<details>
<summary><strong>4. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 9u
- 2025-09-02 12:52:12: 12u
- 2025-06-25 12:27:15: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 14u
- 2024-08-14 13:57:42: 4u
- 2024-07-01 04:56:24: 42u
- 2024-05-28 08:10:45: 3u
- 2024-04-09 11:38:43: 144u
- 2024-03-22 09:31:43: 84u
- 2024-02-26 13:32:31: 6u
- 2024-02-19 09:42:57: 66u
- 2023-11-29 10:39:30: 30u
- 2023-11-07 13:59:38: 42u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>5. [LV040] LV Caprons apéritifs 240g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 3u
- 2025-09-02 12:52:12: 6u
- 2025-06-25 12:27:15: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 3u
- 2024-09-03 06:40:12: 5u
- 2024-08-14 13:57:42: 6u
- 2024-07-01 04:56:24: 30u
- 2024-05-28 08:10:45: 9u
- 2024-03-22 09:31:43: 66u
- 2024-02-26 13:32:31: 5u
- 2024-02-19 09:42:57: 30u
- 2023-11-29 10:39:30: 36u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 7u
- 2025-09-02 12:52:12: 23u
- 2025-06-25 12:27:15: 20u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 23u
- 2024-09-03 06:40:12: 10u
- 2024-08-14 13:57:42: 14u
- 2024-07-01 04:56:24: 114u
- 2024-05-28 08:10:45: 12u
- 2024-04-09 11:38:43: 36u
- 2024-03-22 09:31:43: 102u
- 2024-02-19 09:42:57: 90u
- 2023-11-29 10:39:30: 78u
- 2023-11-07 13:59:38: 42u

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 26u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 32u
- 2025-09-02 12:52:12: 29u
- 2025-06-25 12:27:15: 20u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 25u
- 2024-08-14 13:57:42: 34u
- 2024-07-01 04:56:24: 96u
- 2024-05-28 08:10:45: 25u
- 2024-04-09 11:38:43: 36u
- 2024-03-22 09:31:43: 192u
- 2024-02-26 13:32:31: 16u
- 2024-02-19 09:42:57: 120u
- 2023-11-29 10:39:30: 126u
- 2023-11-07 13:59:38: 72u

**Quantite Mediane (fallback)**: 29u
**Quantite Reelle**: 17u

</details>


<details>
<summary><strong>8. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 3u
- 2025-09-02 12:52:12: 6u
- 2025-06-25 12:27:15: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 3u
- 2024-08-14 13:57:42: 7u
- 2024-05-28 08:10:45: 3u
- 2024-03-22 09:31:43: 60u
- 2024-02-26 13:32:31: 2u
- 2024-02-19 09:42:57: 18u
- 2023-11-29 10:39:30: 54u
- 2023-11-07 13:59:38: 18u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>9. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 17u
- 2025-09-02 12:52:12: 6u
- 2025-06-25 12:27:15: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 6u
- 2025-09-02 12:52:12: 2u
- 2025-06-25 12:27:15: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>11. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 11u
- 2025-06-25 12:27:15: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 11u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>12. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 08:03:15: 6u
- 2025-09-02 12:52:12: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>13. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 12:52:12: 17u
- 2025-06-25 12:27:15: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 17u
- 2024-09-03 06:40:12: 14u
- 2024-08-14 13:57:42: 10u
- 2024-07-01 04:56:24: 102u
- 2024-05-28 08:10:45: 12u
- 2024-04-09 11:38:43: 54u
- 2024-03-22 09:31:43: 96u
- 2024-02-26 13:32:31: 4u
- 2024-02-19 09:42:57: 78u
- 2023-11-29 10:39:30: 72u
- 2023-11-07 13:59:38: 42u

**Quantite Mediane (fallback)**: 14u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>14. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 12:52:12: 2u
- 2025-06-25 12:27:15: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 11u
- 2024-09-03 06:40:12: 8u
- 2024-08-14 13:57:42: 7u
- 2024-07-01 04:56:24: 42u
- 2024-05-28 08:10:45: 13u
- 2024-04-09 11:38:43: 42u
- 2024-02-26 13:32:31: 13u
- 2024-02-19 09:42:57: 42u
- 2023-11-29 10:39:30: 36u
- 2023-11-07 13:59:38: 30u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>15. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-25 12:27:15: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 13:39:17: 11u
- 2024-09-03 06:40:12: 7u
- 2024-08-14 13:57:42: 14u
- 2024-07-01 04:56:24: 120u
- 2024-05-28 08:10:45: 9u
- 2024-04-09 11:38:43: 156u
- 2024-02-26 13:32:31: 15u
- 2024-02-19 09:42:57: 108u
- 2023-11-29 10:39:30: 48u
- 2023-11-07 13:59:38: 120u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>16. [LV138] LV Tartinade Carotte gingembre  380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-25 12:27:15: 9u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 06:40:12: 14u
- 2024-05-28 08:10:45: 5u
- 2024-03-22 09:31:43: 72u
- 2024-02-26 13:32:31: 14u
- 2024-02-19 09:42:57: 18u
- 2023-11-29 10:39:30: 48u
- 2023-11-07 13:59:38: 36u

**Quantite Mediane (fallback)**: 14u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>17. [LV217] LV Tartinade Basilic 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-25 12:27:15: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:52.366Z*
