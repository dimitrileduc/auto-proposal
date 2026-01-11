# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Bierges

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Bierges (ID: 23900)
- **Commande réelle** : S39881
- **Date commande** : 2025-10-23 06:18:52
- **Date cutoff système** : 2025-10-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 28
- **Tokens**: 26,597 input + 4,845 output = 31,442 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 51.9% | 27 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 68.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.79 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 61.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 67.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 38.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 5 | 2.0 | 40.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 08/09/2025, soit 44 jours avant la date actuelle. L'historique récent montre un cycle de commande variant entre 7 et 40 jours. Le délai actuel dépasse largement le cycle moyen constaté en septembre. Bien qu'il n'y ait pas eu de commande en octobre, le principe de précaution B2B et le risque de rupture imminent sur l'horizon de 30 jours imposent un réapprovisionnement. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont de 2, 4, 3 et 2 unités. La médiane de ces commandes est de 2,5. Conformément à la règle de privilégier la médiane et de ne pas surestimer, une quantité de 3 unités est retenue pour couvrir les besoins tout en restant proche de l'historique de l'année précédente à la même période (4u en septembre, 2u en juillet).

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 232 tokens
- **Total**: 1,221 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une reprise d'activité en septembre (commandes les 01/09 et 08/09) après une période estivale plus calme, ce qui est cohérent avec l'historique N-1 (commande le 09/09/2024). Depuis la dernière commande du 08/09/2025, 44 jours se sont écoulés. Ce délai dépasse largement la fréquence hebdomadaire observée en début de mois et suggère un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane des commandes récentes (2, 4, 2, 3) et de l'historique N-1 (4, 3, 2), tout en privilégiant la prudence face à l'irrégularité du cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 224 tokens
- **Total**: 1,197 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/09/2025, soit 44 jours avant la date actuelle. Le cycle de commande moyen sur l'historique récent est d'environ 24 jours. Le délai depuis la dernière commande dépasse largement ce cycle moyen ainsi que le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou une commande due. En appliquant la règle de la médiane sur les commandes récentes (1, 2, 1, 1, 3), la valeur centrale est de 1 unité. Conformément au principe de précaution B2B et à la règle de privilégier la quantité la plus basse en cas de rotation faible, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 170 tokens
- **Total**: 1,175 tokens



</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/09/2025, soit 44 jours. Bien que le cycle soit irrégulier, le délai dépasse largement l'intervalle habituel observé en septembre (7 jours) et le seuil de réapprovisionnement de 30 jours est atteint. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u, 1u, 3u et 2u. La médiane de ces commandes est de 1,5u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 184 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/09/2025, soit 44 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 30 à 45 jours (ex: 46 jours entre juillet et septembre, 22 jours entre juin et juillet). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (1, 1, 2, 3), la quantité retenue est de 1 unité, privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 172 tokens
- **Total**: 1,159 tokens



</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence trimestrielle (juin et septembre). Avec une dernière commande effectuée le 01/09/2025, soit il y a 51 jours, et un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement pour couvrir la fin d'année. Bien que le cycle soit lent, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. La quantité retenue est de 2 unités, correspondant à la médiane et à la constante des commandes récentes (juin et septembre 2025), ainsi qu'à la commande de juin N-1. On ignore le pic de 3u de septembre N-1 pour privilégier la stabilité du stock.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 180 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>7. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 40 à 50 jours (juin-juillet-septembre). Depuis la dernière commande du 01/09/2025, 51 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. Pour la quantité, l'historique récent montre des volumes de 1, 2 et 3 unités. En appliquant la règle de la médiane (2u) et le principe de précaution B2B sans surestimer le stock, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 157 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>8. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation faible et irrégulière. La dernière commande remonte au 01/09/2025 (il y a 51 jours). Bien que le cycle soit difficile à définir précisément, le principe de précaution B2B s'applique car nous entrons dans une période où une commande a été enregistrée l'année précédente (septembre). Le risque de rupture à l'horizon de 30 jours est considéré comme présent par défaut de visibilité sur le stock résiduel. Conformément aux règles de gestion des rotations faibles (1-2u) et à l'application de la médiane des commandes récentes (médiane entre 1u et 3u), la quantité de 1 unité est retenue pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 184 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>9. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre un cycle de commande irrégulier avec une dernière commande effectuée il y a 51 jours (01/09/2025). Bien que la rotation soit faible, le délai écoulé depuis la dernière commande dépasse largement la fréquence observée entre juin et septembre (environ 80 jours), créant une incertitude sur le stock disponible. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane des commandes historiques et au volume le plus bas observé, afin de ne pas surstocker un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 155 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>10. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant de 40 à 50 jours. La dernière commande datant du 1er septembre (soit plus de 50 jours), le risque de rupture est imminent dans l'horizon des 30 jours. Bien qu'une commande de 8u ait été observée l'année dernière à la même période, l'historique récent montre une volatilité importante (1u, 8u, 3u). En appliquant la règle de la médiane sur les commandes récentes (3u) et le principe de précaution B2B privilégiant la valeur la plus basse en cas de doute sur la tendance, une quantité de 3 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 160 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 20 à 30 jours (juin à juillet). La dernière commande remontant au 23 juillet 2025, soit il y a 91 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité en septembre (3u), ce qui confirme un besoin potentiel pour maintenir le stock en rayon. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (1u, 1u, 2u), la quantité retenue est de 1 unité (valeur la plus basse en cas de doute sur une faible rotation).

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 178 tokens
- **Total**: 1,135 tokens



</details>


<details>
<summary><strong>12. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'environ 20 à 25 jours entre les commandes récentes (juin à juillet). La dernière commande enregistrée remonte au 23 juillet 2025, soit 91 jours avant la date actuelle (22 octobre). Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture critique ou un besoin imminent. Bien que l'historique de l'année précédente montre des volumes plus élevés (jusqu'à 4u), la tendance récente est stabilisée à de petites unités. En appliquant la règle de la médiane sur les commandes récentes (1u, 1u, 2u), la médiane est de 1u. Par mesure de précaution B2B et respect de la tendance basse, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 199 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>13. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/07/2025, soit plus de 110 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés précédemment. En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 3u. L'historique N-1 oscille entre 2u et 4u. La médiane de l'ensemble des données est de 3u. Conformément à la règle de privilégier la médiane et de ne pas surestimer, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 192 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>14. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière avec une dernière commande enregistrée il y a plus de 110 jours (01/07/2025). Bien que le cycle soit irrégulier, le délai écoulé dépasse largement les intervalles habituels observés l'année précédente (environ 40 à 60 jours), ce qui indique un besoin de réapprovisionnement imminent ou une rupture probable. En application du principe de précaution B2B et face à l'incertitude du cycle, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane du volume de la commande la plus récente, tout en restant prudente par rapport au pic exceptionnel de 4 unités constaté l'an dernier.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 170 tokens
- **Total**: 1,105 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:30:34: 2u
- 2025-09-01 06:39:50: 4u
- 2025-07-23 07:38:08: 3u
- 2025-06-12 07:11:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 2u
- 2024-06-11 07:29:36: 1u
- 2024-04-30 10:14:14: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:30:34: 2u
- 2025-09-01 06:39:50: 4u
- 2025-07-01 06:43:33: 2u
- 2025-06-12 07:11:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 4u
- 2024-06-11 07:29:36: 3u
- 2024-04-30 10:14:14: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:30:34: 1u
- 2025-09-01 06:39:50: 2u
- 2025-07-23 07:38:08: 1u
- 2025-07-01 06:43:33: 1u
- 2025-06-12 07:11:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 2u
- 2024-06-11 07:29:36: 1u
- 2024-04-30 10:14:14: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:30:34: 1u
- 2025-09-01 06:39:50: 1u
- 2025-07-01 06:43:33: 3u
- 2025-06-12 07:11:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 10:14:14: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:30:34: 1u
- 2025-07-23 07:38:08: 1u
- 2025-07-01 06:43:33: 2u
- 2025-06-12 07:11:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 2u
- 2024-06-11 07:29:36: 3u
- 2024-04-30 10:14:14: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:39:50: 2u
- 2025-06-12 07:11:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 3u
- 2024-06-11 07:29:36: 2u
- 2024-04-30 10:14:14: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:39:50: 1u
- 2025-07-23 07:38:08: 2u
- 2025-06-12 07:11:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 1u
- 2024-04-30 10:14:14: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:39:50: 1u
- 2025-06-12 07:11:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 4u
- 2024-04-30 10:14:14: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:39:50: 1u
- 2025-06-12 07:11:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 10:14:14: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:39:50: 1u
- 2025-07-23 07:38:08: 8u
- 2025-06-12 07:11:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 8u
- 2024-07-18 05:34:21: 3u
- 2024-06-11 07:29:36: 3u
- 2024-04-30 10:14:14: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 07:38:08: 1u
- 2025-07-01 06:43:33: 1u
- 2025-06-12 07:11:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 3u
- 2024-06-11 07:29:36: 2u
- 2024-04-30 10:14:14: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 07:38:08: 1u
- 2025-07-01 06:43:33: 1u
- 2025-06-12 07:11:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 4u
- 2024-04-30 10:14:14: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-01 06:43:33: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 4u
- 2024-04-30 10:14:14: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-01 06:43:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 1u
- 2024-06-11 07:29:36: 1u
- 2024-04-30 10:14:14: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:04.471Z*
