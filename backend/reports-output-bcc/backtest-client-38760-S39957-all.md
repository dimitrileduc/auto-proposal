# Rapport Backtest - Client CRF MARKET REMOUCHAMPS FONVAL

## Contexte

- **Client** : CRF MARKET REMOUCHAMPS FONVAL (ID: 38760)
- **Commande réelle** : S39957
- **Date commande** : 2025-10-28 10:53:28
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 38
- **Tokens**: 38,675 input + 6,263 output = 44,938 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 89.5% | 38 produits prédits, 34 corrects |
| **Rappel** | 97.1% | 35 produits réels, 34 détectés |
| **F1-Score** | 93.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.59 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 17 | Égalité parfaite |
| Partial Match (>0u) | 17 | Avec erreur |

---

## True Positives (34)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 5 | 2.0 | 40.0% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (34 produits)


<details>
<summary><strong>1. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 30 à 45 jours (dernières commandes le 23/07, 22/08 et 17/09). Au 27 octobre, 40 jours se sont écoulés depuis la dernière commande, ce qui dépasse le seuil de 70% du cycle moyen et entre dans la fenêtre de risque des 30 jours (Replenishment Threshold Days). Bien que la rotation soit faible, elle est extrêmement régulière. En suivant la règle de précaution B2B et en se basant sur la médiane historique constante de 1 unité, une commande de 1 unité est nécessaire pour éviter la rupture.

**Tokens utilises pour cette prediction:**
- **Input**: 1,074 tokens
- **Output**: 163 tokens
- **Total**: 1,237 tokens



</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le cycle de commande moyen observé sur les derniers mois est d'environ 28 jours (intervalles de 20, 30 et 26 jours). La dernière commande datant du 17 septembre, soit il y a 40 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que l'historique N-1 montre une commande le 22 octobre, l'absence de mouvement récent confirme un besoin imminent. Conformément à la règle de rotation faible et constante, la quantité retenue est la médiane historique de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,058 tokens
- **Output**: 140 tokens
- **Total**: 1,198 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 40 à 60 jours entre les commandes récentes. La dernière commande datant du 17 septembre (il y a 40 jours), nous entrons dans la fenêtre de réapprovisionnement critique, surtout avec un seuil de 30 jours. L'historique de l'année précédente confirme également une activité régulière en octobre et novembre. En appliquant la règle de la médiane sur les commandes récentes les plus significatives (4u, 4u, 1u), la quantité de 4 unités est retenue pour couvrir le besoin imminent et éviter la rupture.

**Tokens utilises pour cette prediction:**
- **Input**: 1,056 tokens
- **Output**: 145 tokens
- **Total**: 1,201 tokens



</details>


<details>
<summary><strong>4. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande récent montre une fréquence d'environ 30 à 45 jours (22 août au 17 septembre). Depuis la dernière commande du 17 septembre, 40 jours se sont écoulés, ce qui dépasse le cycle moyen constaté. Bien que la rotation soit faible, le risque de rupture est imminent au regard du seuil de réapprovisionnement de 30 jours. En suivant la règle de précaution B2B et en se basant sur la médiane des commandes récentes (1u), une commande de 1 unité est nécessaire pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,024 tokens
- **Output**: 140 tokens
- **Total**: 1,164 tokens



</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 25 à 30 jours (intervalles récents de 26, 30 et 20 jours). La dernière commande remontant au 17 septembre 2025, soit 40 jours avant la date actuelle, le seuil de réapprovisionnement de 30 jours est largement dépassé. Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique récent et N-1 montre une rotation stable de faible volume (médiane entre 1u et 2u). En application du principe de précaution B2B et de la règle privilégiant la valeur la plus basse en cas de doute sur une faible rotation, une commande de 1 unité est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,057 tokens
- **Output**: 186 tokens
- **Total**: 1,243 tokens



</details>


<details>
<summary><strong>6. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 38 jours (26 jours entre les deux dernières, 50 jours entre les précédentes). La dernière commande remonte au 17 septembre, soit 40 jours avant la date actuelle. Nous avons dépassé le cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 2 unités, correspondant à la médiane constante et stricte observée sur toutes les commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 145 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>7. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 0u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 0u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 79 jours puis 26 jours, indiquant une rotation irrégulière. Depuis la dernière commande du 17 septembre 2025, 40 jours se sont écoulés. Compte tenu du seuil de réapprovisionnement de 30 jours, nous entrons dans une zone de risque de rupture (principe de précaution B2B en cas de cycle incertain). La quantité historique est constante à 1 unité par commande sur la période récente. En appliquant la règle de la médiane sur l'historique récent (1, 1, 1), la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,000 tokens
- **Output**: 152 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 20 et 30 jours (22/08 au 17/09 = 26 jours). La dernière commande datant du 17 septembre, soit il y a 40 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. Historiquement, sur la même période l'année dernière (octobre), le client commandait 3 unités. Cependant, en suivant la règle de la médiane des commandes récentes (1, 2, 1, 2) et le principe de précaution B2B privilégiant la valeur la plus basse en cas de doute sur une faible rotation, une quantité de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,089 tokens
- **Output**: 189 tokens
- **Total**: 1,278 tokens



</details>


<details>
<summary><strong>9. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande espacé d'environ 30 à 50 jours. La dernière commande enregistrée date du 22 août, soit plus de 60 jours avant la date actuelle (27 octobre). Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle habituel, ce qui indique un besoin de réapprovisionnement imminent pour éviter une rupture de stock prolongée. Conformément à la règle de la médiane sur les quantités récentes (1u, 1u, 1u), la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 136 tokens
- **Total**: 1,175 tokens



</details>


<details>
<summary><strong>10. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation régulière mais espacée (environ tous les 30 à 60 jours). La dernière commande remonte au 22 août 2025, soit plus de 60 jours avant la date actuelle (27 octobre). Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle habituel, ce qui indique un besoin de réapprovisionnement imminent pour éviter une rupture de stock prolongée. En suivant la règle de précaution B2B et en se basant sur la médiane historique constante de 1 unité, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 141 tokens
- **Total**: 1,180 tokens



</details>


<details>
<summary><strong>11. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 22 août 2025, soit 66 jours avant la date actuelle. L'historique récent et N-1 montre un cycle de commande moyen d'environ 20 à 30 jours. Le délai depuis la dernière commande dépasse largement ce cycle moyen (bien au-delà des 70%). Il existe un risque de rupture imminent ou déjà avéré pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente des quantités de 1u, 1u et 2u. La médiane de ces commandes est de 1u. Conformément à la règle de précaution sur les faibles rotations et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,055 tokens
- **Output**: 195 tokens
- **Total**: 1,250 tokens



</details>


<details>
<summary><strong>12. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation faible mais régulière (1 unité par commande). La dernière commande remonte au 22 août 2025, soit plus de 60 jours. Bien que le cycle soit lent, l'historique N-1 montre des commandes en septembre et octobre (26/09/2024 et 22/10/2024). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation sporadique, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane constante des commandes récentes et historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 1,037 tokens
- **Output**: 149 tokens
- **Total**: 1,186 tokens



</details>


<details>
<summary><strong>13. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 août 2025, soit plus de 60 jours. Bien que le cycle historique soit irrégulier, le délai écoulé dépasse largement les intervalles habituels, créant un risque de rupture imminent pour les 30 prochains jours (seuil de réapprovisionnement). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (2u et 3u) tout en privilégiant la valeur la plus basse pour éviter le surstockage sur une référence à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,024 tokens
- **Output**: 138 tokens
- **Total**: 1,162 tokens



</details>


<details>
<summary><strong>14. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Le cycle entre les deux dernières commandes est de 50 jours. La dernière commande remonte au 22 août, soit 66 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen (132% du cycle), ce qui indique un besoin de réapprovisionnement immédiat ou un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : L'historique récent montre des quantités de 3u et 4u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 156 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>15. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 45 à 50 jours. La dernière commande remontant au 22 août 2025 (soit plus de 60 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent. Bien que l'historique récent soit espacé, les données N-1 confirment une activité régulière sur cette période (octobre/novembre). En appliquant la règle de la médiane sur les commandes récentes (2, 3, 4) et historiques, la quantité de 3 unités est retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,075 tokens
- **Output**: 160 tokens
- **Total**: 1,235 tokens



</details>


<details>
<summary><strong>16. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 22/08/2025, soit 66 jours avant la date actuelle (27/10/2025). L'historique N-1 montre une activité régulière en septembre et octobre (1u le 22/10/2024, 2u le 26/09/2024). Le cycle de commande est irrégulier mais le délai actuel dépasse largement les fréquences habituelles. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 2u et 3u. La médiane de l'historique récent est de 2,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation modérée, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,040 tokens
- **Output**: 242 tokens
- **Total**: 1,282 tokens



</details>


<details>
<summary><strong>17. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre un cycle de commande d'environ 50 jours (entre juillet et août). La dernière commande remonte au 22 août 2025, soit 66 jours avant la date actuelle (27 octobre). Ce délai dépasse largement le cycle moyen observé et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à un cycle qui semble s'allonger ou devenir irrégulier, le risque de rupture est considéré comme avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les deux dernières commandes sont identiques (3u). La médiane et la constante historique convergent vers cette valeur. Conformément à la règle de maintien des rotations régulières, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 190 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>18. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 22 août 2025, soit 66 jours avant la date actuelle. Le cycle historique récent montre un intervalle d'environ 30 jours entre juillet et août. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle habituel et l'historique N-1 montre une activité en septembre/octobre (1u le 22/10/2024). En application du principe de précaution B2B pour éviter une rupture prolongée, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la stabilité de la consommation observée sur ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 161 tokens
- **Total**: 1,183 tokens



</details>


<details>
<summary><strong>19. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 4u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 août 2025, soit plus de 60 jours sans réapprovisionnement. Bien que l'historique récent montre un cycle espacé (environ 50 jours entre juillet et août), le délai actuel dépasse largement ce cycle moyen, créant un risque de rupture imminent pour les 30 prochains jours. En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, la médiane des commandes récentes (4u et 5u) est de 4,5u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,055 tokens
- **Output**: 160 tokens
- **Total**: 1,215 tokens



</details>


<details>
<summary><strong>20. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 4u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 50 jours entre les deux dernières commandes (juillet et août). Depuis la dernière commande du 22 août 2025, 66 jours se sont écoulés, ce qui dépasse largement le cycle moyen constaté et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Pour la quantité, bien que l'historique N-1 montre des volumes plus faibles (1-2u), les commandes les plus récentes en 2025 sont stables à 4 unités. En suivant la règle de la médiane sur l'historique récent et le maintien d'une rotation régulière constatée, une commande de 4 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,040 tokens
- **Output**: 170 tokens
- **Total**: 1,210 tokens



</details>


<details>
<summary><strong>21. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 22 août 2025, soit 66 jours avant la date actuelle. Bien que l'historique récent montre un cycle d'environ 30 jours entre juillet et août, l'absence de commande en septembre et octobre indique une irrégularité ou un risque de rupture imminent face au seuil de 30 jours. En application du principe de précaution B2B (doute sur le cycle), un besoin est détecté. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre des commandes de 2u et 3u. La médiane de ces valeurs est de 2,5u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 207 tokens
- **Total**: 1,214 tokens



</details>


<details>
<summary><strong>22. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 22/08/2025, soit 66 jours avant la date actuelle (27/10/2025). L'historique montre un cycle moyen d'environ 20 à 30 jours. Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture critique ou un besoin imminent non couvert. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 5u, 2u et 4u. La médiane de l'historique récent est de 4u. L'historique N-1 sur la même période (octobre/novembre) confirme également des volumes de 4u. Application de la médiane pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,075 tokens
- **Output**: 206 tokens
- **Total**: 1,281 tokens



</details>


<details>
<summary><strong>23. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 août 2025, soit 66 jours. L'historique montre un cycle de commande moyen d'environ 30 à 60 jours (ex: 23/07 au 22/08). Le délai actuel dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent (2025) montre une stabilité parfaite avec des commandes de 1 unité. La médiane des commandes historiques est de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 1,023 tokens
- **Output**: 193 tokens
- **Total**: 1,216 tokens



</details>


<details>
<summary><strong>24. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 3u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 40 jours. La dernière commande remontant au 22 août 2025 (soit plus de 60 jours), le délai de réapprovisionnement est largement dépassé, ce qui indique un risque de rupture imminent ou un besoin non couvert pour la période actuelle. En appliquant la règle de précaution B2B, un réapprovisionnement est nécessaire. La quantité est déterminée par la médiane des commandes récentes (1, 2, 4, 5), soit 3 unités, ce qui correspond également à la moyenne observée sur la même période l'année précédente (août-octobre 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 1,090 tokens
- **Output**: 163 tokens
- **Total**: 1,253 tokens



</details>


<details>
<summary><strong>25. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 août 2025, soit plus de 60 jours avant la date actuelle. Bien que le cycle de commande soit irrégulier, le délai écoulé dépasse largement les intervalles observés historiquement (souvent 30 à 50 jours). En application du principe de précaution B2B et face à un risque de rupture imminent dans l'horizon des 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane des commandes récentes (3u et 4u) en privilégiant la valeur la plus basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 146 tokens
- **Total**: 1,168 tokens



</details>


<details>
<summary><strong>26. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
La dernière commande remonte au 22 août 2025, soit plus de 60 jours. Bien que le cycle historique soit irrégulier, le délai actuel dépasse largement les intervalles habituels observés en 2024 (souvent mensuels). En application du principe de précaution B2B et face à un risque de rupture imminent dans l'horizon des 30 jours, un réapprovisionnement est nécessaire. La quantité est fixée à 3 unités, correspondant à la médiane des commandes récentes (3u et 4u) et de l'historique N-1 sur la même période (2u et 4u), en privilégiant la valeur prudente.

**Tokens utilises pour cette prediction:**
- **Input**: 1,040 tokens
- **Output**: 154 tokens
- **Total**: 1,194 tokens



</details>


<details>
<summary><strong>27. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 22 août, soit plus de 60 jours. Bien que le cycle historique soit irrégulier, le délai actuel dépasse largement la fréquence habituelle constatée en 2024 et 2025. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques et respectant la règle de prudence pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,042 tokens
- **Output**: 123 tokens
- **Total**: 1,165 tokens



</details>


<details>
<summary><strong>28. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 août 2025, soit 66 jours avant la date actuelle. L'historique montre des cycles de commande irréguliers (allant de 30 à 60+ jours). Selon le principe de précaution B2B et le risque de rupture sur l'horizon de 30 jours (Replenishment Threshold Days), un réapprovisionnement est nécessaire car nous avons dépassé le délai habituel de rotation. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 3u. L'historique N-1 à la même période (septembre/octobre) indique une commande de 1u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 208 tokens
- **Total**: 1,213 tokens



</details>


<details>
<summary><strong>29. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juillet 2025, soit plus de 90 jours. Bien que la rotation soit très faible, l'intervalle entre les deux dernières commandes était de 49 jours. Nous avons largement dépassé ce cycle moyen, ce qui crée une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite à 1 unité par commande. La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 184 tokens
- **Total**: 1,173 tokens



</details>


<details>
<summary><strong>30. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juillet 2025, soit plus de 90 jours. Bien que la rotation soit faible, l'historique N-1 montre une commande le 22 octobre 2024. Compte tenu du délai écoulé et du principe de précaution B2B pour éviter une rupture sur un produit à rotation lente mais existante, un besoin est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane est de 1,5u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,006 tokens
- **Output**: 188 tokens
- **Total**: 1,194 tokens



</details>


<details>
<summary><strong>31. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit plus de 110 jours. L'historique N-1 montre une activité régulière en septembre et octobre (22/10/2024). Le cycle moyen historique est d'environ 30 à 45 jours. Le délai depuis la dernière commande dépasse largement ce cycle, créant un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre une rotation faible mais constante, principalement de 1 unité (médiane historique). Bien que la dernière commande était de 3 unités, la règle de précaution sur rotation faible impose de revenir à la médiane de 1 unité pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,024 tokens
- **Output**: 187 tokens
- **Total**: 1,211 tokens



</details>


<details>
<summary><strong>32. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
La dernière commande remonte au 03/07/2025, soit plus de 110 jours. Bien que la rotation soit faible et irrégulière, l'historique N-1 montre une activité à cette période (commande de 3u le 26/09/2024). En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière), un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la dernière commande connue (médiane basse), afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,003 tokens
- **Output**: 150 tokens
- **Total**: 1,153 tokens



</details>


<details>
<summary><strong>33. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/06/2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'historique N-1 montre des commandes régulières durant la période estivale et automnale (juillet/août). En application du principe de précaution B2B et face à une absence de commande récente prolongée, un risque de rupture ou un besoin de renouvellement de stock est identifié pour l'horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes constants entre 1 et 2 unités. La médiane des commandes passées est de 1 unité. Conformément à la règle sur les rotations faibles (1-2u) et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 205 tokens
- **Total**: 1,195 tokens



</details>


<details>
<summary><strong>34. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre des besoins sporadiques (avril et juillet). En l'absence de données récentes et compte tenu du principe de précaution B2B, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre une rotation très faible et régulière de 1 unité lors des périodes d'activité. La médiane des commandes passées est de 1 unité. Conformément aux règles sur les rotations faibles, on maintient la quantité minimale de 1 unité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 153 tokens
- **Total**: 1,111 tokens



</details>




### Donnees d'Input LLM (34 produits)


<details>
<summary><strong>1. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u
- 2025-07-23 11:41:52: 1u
- 2025-06-04 08:55:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u
- 2025-07-23 11:41:52: 1u
- 2025-07-03 06:34:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:37:02: 4u
- 2025-07-03 06:34:37: 4u
- 2025-06-04 08:55:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 2u
- 2024-09-26 06:41:59: 3u
- 2024-08-21 13:58:20: 3u
- 2024-08-01 11:40:34: 2u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 2u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>4. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u
- 2025-07-03 06:34:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:41:59: 2u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 2u
- 2025-07-23 11:41:52: 1u
- 2025-07-03 06:34:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:41:59: 2u
- 2024-08-01 11:40:34: 1u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:37:02: 2u
- 2025-08-22 10:08:24: 2u
- 2025-07-03 06:34:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u
- 2025-06-04 08:55:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:37:02: 2u
- 2025-08-22 10:08:24: 1u
- 2025-07-23 11:41:52: 1u
- 2025-07-03 06:34:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 3u
- 2024-09-26 06:41:59: 3u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 1u
- 2025-07-03 06:34:37: 1u
- 2025-06-04 08:55:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 1u
- 2025-07-03 06:34:37: 1u
- 2025-06-04 08:55:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 2u
- 2025-07-23 11:41:52: 1u
- 2025-07-03 06:34:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 1u
- 2025-06-04 08:55:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 0u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 2u
- 2025-07-03 06:34:37: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 1u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 2u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>14. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 3u
- 2025-07-03 06:34:37: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>15. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 4u
- 2025-07-23 11:41:52: 3u
- 2025-06-04 08:55:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 2u
- 2024-09-26 06:41:59: 3u
- 2024-08-21 13:58:20: 4u
- 2024-08-01 11:40:34: 2u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 2u
- 2024-05-16 11:57:50: 4u
- 2024-04-16 06:31:56: 2u
- 2024-03-22 09:42:15: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>16. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 3u
- 2025-07-03 06:34:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 2u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 3u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>17. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 3u
- 2025-07-03 06:34:37: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>18. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 1u
- 2025-07-23 11:41:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 5u
- 2025-07-03 06:34:37: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 2u
- 2024-09-26 06:41:59: 2u
- 2024-08-21 13:58:20: 2u
- 2024-08-01 11:40:34: 1u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 2u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>20. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 4u
- 2025-07-03 06:34:37: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 2u
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 2u
- 2024-08-01 11:40:34: 1u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 2u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 1u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>21. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 3u
- 2025-07-23 11:41:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 2u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>22. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 5u
- 2025-07-23 11:41:52: 2u
- 2025-07-03 06:34:37: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 4u
- 2024-09-26 06:41:59: 4u
- 2024-08-21 13:58:20: 2u
- 2024-08-01 11:40:34: 2u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 4u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>23. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 1u
- 2025-07-23 11:41:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 0u
- 2024-03-22 09:42:15: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>24. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 5u
- 2025-07-23 11:41:52: 1u
- 2025-07-03 06:34:37: 4u
- 2025-06-04 08:55:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 4u
- 2024-08-21 13:58:20: 3u
- 2024-08-01 11:40:34: 2u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 4u
- 2024-04-16 06:31:56: 4u
- 2024-03-22 09:42:15: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>25. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 3u
- 2025-07-03 06:34:37: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 2u
- 2024-08-21 13:58:20: 4u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>26. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 4u
- 2025-07-03 06:34:37: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:41:59: 2u
- 2024-08-21 13:58:20: 4u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 5u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 4u
- 2024-04-16 06:31:56: 4u
- 2024-03-22 09:42:15: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>27. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 3u
- 2025-07-23 11:41:52: 1u
- 2025-07-03 06:34:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:41:59: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>28. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:08:24: 1u
- 2025-07-03 06:34:37: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:41:59: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>29. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 11:41:52: 1u
- 2025-06-04 08:55:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 3u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>30. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 11:41:52: 2u
- 2025-07-03 06:34:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>31. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 06:34:37: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 3u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>32. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 06:34:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:41:59: 3u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>33. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 08:55:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>34. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:07:25.403Z*
