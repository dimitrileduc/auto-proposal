# Rapport Backtest - Client MASETTI

## Contexte

- **Client** : MASETTI (ID: 38995)
- **Commande réelle** : S39608
- **Date commande** : 2025-10-08 06:19:58
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 31
- **Tokens**: 30,841 input + 5,507 output = 36,348 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 77.4% | 31 produits prédits, 24 corrects |
| **Rappel** | 100.0% | 24 produits réels, 24 détectés |
| **F1-Score** | 87.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 63.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 17.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 16 | Avec erreur |

---

## True Positives (24)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 25 | 25 | 0.0 | 0.0% | exact | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 25 | 25 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 30 | 15 | 15.0 | 100.0% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 15 | 10 | 5.0 | 50.0% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 10 | 5 | 5.0 | 100.0% | partial | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 10 | 20 | 10.0 | 50.0% | partial | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 3 | 5 | 2.0 | 40.0% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 10 | 10 | 0.0 | 0.0% | exact | LLM |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 4 | 1 | 3.0 | 300.0% | partial | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 5 | 3 | 2.0 | 66.7% | partial | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 5 | 10 | 5.0 | 50.0% | partial | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 10 | 4 | 6.0 | 150.0% | partial | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 10 | 10 | 0.0 | 0.0% | exact | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 5 | 10 | 5.0 | 50.0% | partial | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 50 | 25 | 25.0 | 100.0% | partial | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 25 | 25 | 0.0 | 0.0% | exact | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 25 | 25 | 0.0 | 0.0% | exact | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (24 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 25u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 45 à 60 jours. La dernière commande datant du 03/09/2025 (il y a 34 jours), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de 70% du cycle atteint). L'historique de l'année précédente confirme également une commande début octobre (03/10/2024). Pour la quantité, bien que des pics à 50u soient visibles, la médiane et la valeur la plus fréquente dans l'historique récent et N-1 est de 25u. En application du principe de prudence et de l'utilisation de la médiane, une commande de 25u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,034 tokens
- **Output**: 182 tokens
- **Total**: 1,216 tokens



</details>


<details>
<summary><strong>2. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 25u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre un intervalle moyen d'environ 40 à 48 jours (ex: 31 jours entre mai/juin, 30 jours entre juin/juillet, 48 jours entre juillet/septembre). Depuis la dernière commande du 03/09/2025, 34 jours se sont écoulés. Nous atteignons 70% du cycle moyen et entrons dans la fenêtre de risque de rupture sous 30 jours (Replenishment Threshold Days). Historiquement, la quantité est extrêmement stable à 25 unités sur les 4 dernières commandes récentes ainsi que sur la majorité des commandes N-1. La médiane est de 25u, ce qui constitue la cible de réapprovisionnement pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,036 tokens
- **Output**: 179 tokens
- **Total**: 1,215 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 30u vs Médiane: 30u (Réel: 15u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 30u
- **Baseline calculee**: 30u
- **Mediane historique**: 30u
- **Reel commande**: 15u
- **Erreur LLM**: 15u (100.0%)
- **Erreur Mediane**: 15u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 30u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre des intervalles de 21, 27 et 64 jours (moyenne ~37 jours). La dernière commande datant du 03/09/2025 (il y a 34 jours), nous avons dépassé 70% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). Historiquement, le produit présente une demande stable en octobre (35u en 2024). En appliquant la règle de la médiane sur les commandes récentes (30, 20, 30, 30), la quantité retenue est de 30 unités pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,070 tokens
- **Output**: 171 tokens
- **Total**: 1,241 tokens



</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 15u vs Médiane: 15u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 15u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 5u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 34 jours. Le cycle moyen observé est d'environ 30 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent, d'autant plus que l'historique N-1 montre une commande importante (30u) début octobre. ÉTAPE 2 : Estimation quantité. Les quantités récentes sont 5, 25, 15, 15. La médiane de l'historique récent est de 15u. Bien que l'année dernière à la même période la commande était de 30u, la règle de précaution B2B et la priorité à la médiane récente imposent de retenir 15u pour éviter le surstock tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 1,065 tokens
- **Output**: 208 tokens
- **Total**: 1,273 tokens



</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 10u vs Médiane: 13u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 13u
- **Reel commande**: 5u
- **Erreur LLM**: 5u (100.0%)
- **Erreur Mediane**: 8u (160.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 30 à 35 jours entre les réapprovisionnements récents. La dernière commande datant du 03/09/2025 (soit 34 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est dépassé, signalant un risque imminent de rupture. Bien qu'une commande de 30 unités ait été observée à la même période l'an dernier (octobre 2024), les volumes récents sont plus modérés (5u, 10u, 10u, 5u, 15u). En appliquant la règle de la médiane sur l'historique récent pour éviter de surstocker, la quantité retenue est de 10 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,066 tokens
- **Output**: 189 tokens
- **Total**: 1,255 tokens



</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 10u vs Médiane: 10u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 20u
- **Erreur LLM**: 10u (50.0%)
- **Erreur Mediane**: 10u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 45 à 60 jours. La dernière commande datant du 03/09/2025 (il y a 34 jours), nous avons dépassé 70% du cycle habituel, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). Historiquement, le volume de 10 unités est la constante la plus récurrente et correspond à la médiane des commandes récentes (10, 10, 3, 10). Bien qu'une commande de 20 unités ait été observée à la même période l'an dernier, la règle de prudence B2B impose de privilégier la médiane récente pour éviter le surstockage. Une quantité de 10 unités est donc préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,029 tokens
- **Output**: 194 tokens
- **Total**: 1,223 tokens



</details>


<details>
<summary><strong>7. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 10u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 10u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 8u (400.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle récent montre un intervalle de 27 jours entre les deux dernières commandes. La dernière commande datant du 03/09/2025, soit il y a 34 jours, le seuil de réapprovisionnement de 30 jours est dépassé, ce qui confirme un risque de rupture imminent. Bien que l'historique N-1 montre des volumes plus importants au printemps, la tendance récente est à la baisse avec des quantités de 5u puis 2u. En application de la règle de précaution B2B et du choix de la valeur la plus basse en cas de doute sur une tendance baissière, la quantité retenue est la médiane basse du cycle récent, soit 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 166 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>8. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 3u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle récent montre un intervalle de 48 jours entre les deux dernières commandes. Au 07/10/2025, il s'est écoulé 34 jours depuis la dernière commande (03/09), soit plus de 70% du cycle moyen constaté. Il existe donc un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes (3u et 5u) est de 4u, mais en application de la règle privilégiant la valeur la plus basse en cas de doute sur une rotation faible, la quantité de 3u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 174 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 10u vs Médiane: 10u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/09/2025, soit 34 jours écoulés. Le cycle moyen récent est d'environ 40-45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 75-80% du cycle habituel. De plus, l'historique N-1 montre une commande importante (20u) début octobre, confirmant une saisonnalité active. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 10u, 5u et 10u. La médiane des commandes récentes est de 10u. Bien que l'année dernière ait enregistré un pic à 20u, la règle de prudence B2B impose de se baser sur la médiane récente pour éviter le surstockage. La quantité retenue est donc de 10u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,031 tokens
- **Output**: 221 tokens
- **Total**: 1,252 tokens



</details>


<details>
<summary><strong>10. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 à 80 jours. La dernière commande datant du 03/09/2025 (il y a 34 jours), le risque de rupture est élevé dans l'horizon des 30 prochains jours (seuil de réapprovisionnement), d'autant plus qu'une commande avait été passée à la même période l'année dernière (03/10/2024). En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, la médiane des commandes récentes (2u, 2u, 3u) est de 2 unités. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 193 tokens
- **Total**: 1,167 tokens



</details>


<details>
<summary><strong>11. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 3u vs Médiane: 5u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 5u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 3u (150.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 40 à 50 jours entre les réapprovisionnements récents. La dernière commande remontant au 03/09/2025 (soit 34 jours avant la date actuelle), nous avons dépassé les 70% du cycle habituel. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). Pour la quantité, la médiane des commandes récentes (2, 3, 6, 3) est de 3 unités. Conformément aux règles de gestion B2B, nous privilégions cette médiane stable pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 159 tokens
- **Total**: 1,198 tokens



</details>


<details>
<summary><strong>12. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 4u vs Médiane: 4u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 3u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/09/2025, soit 34 jours. Le cycle moyen observé entre les commandes récentes est d'environ 50-60 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (34 + 30 = 64 jours, dépassant le cycle habituel). En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 4 unités, correspondant à la médiane des commandes récentes (2, 4, 5) et à la stabilité observée sur l'historique N-1 à la même période (4u en août, 5u en octobre).

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 169 tokens
- **Total**: 1,158 tokens



</details>


<details>
<summary><strong>13. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 3u vs Médiane: 5u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 5u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 4u (400.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre des intervalles de 21, 27 et 65 jours (moyenne ~38 jours). Depuis la dernière commande du 03/09/2025, 34 jours se sont écoulés, ce qui représente 89% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold). Pour la quantité, la médiane des commandes récentes (2, 5, 3, 7) est de 4, mais conformément à la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute sur une rotation irrégulière, on retient la médiane basse de 3 unités pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 170 tokens
- **Total**: 1,175 tokens



</details>


<details>
<summary><strong>14. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 5u vs Médiane: 5u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 45 à 50 jours entre les réapprovisionnements récents. La dernière commande datant du 3 septembre 2025 (il y a 34 jours), nous avons dépassé 70% du cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Historiquement, une commande a également eu lieu début octobre l'année précédente (8u le 03/10/2024), confirmant le besoin saisonnier. Pour la quantité, la médiane des commandes récentes (3, 3, 5, 5) est de 4 ou 5 ; conformément à la règle de maintien des rotations régulières et au principe de précaution B2B, la quantité de 5 unités est retenue pour couvrir la période.

**Tokens utilises pour cette prediction:**
- **Input**: 1,020 tokens
- **Output**: 201 tokens
- **Total**: 1,221 tokens



</details>


<details>
<summary><strong>15. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 5u vs Médiane: 5u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 5u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles d'environ 60 à 70 jours (mai-juillet-septembre). La dernière commande datant du 03/09 (il y a 34 jours), le prochain besoin est estimé sous 25-30 jours, ce qui entre dans l'horizon du seuil de réapprovisionnement (30 jours). En application du principe de précaution B2B, un risque de rupture est identifié. Pour la quantité, bien que la dernière commande soit de 2u, la médiane historique récente se situe à 5u. Conformément aux règles de gestion, nous retenons la médiane de 5u pour couvrir le cycle habituel sans surstocker par rapport aux pics de l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 175 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>16. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 10u vs Médiane: 8u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 8u
- **Reel commande**: 4u
- **Erreur LLM**: 6u (150.0%)
- **Erreur Mediane**: 4u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/08/2025, soit 61 jours avant la date actuelle. L'historique de l'année précédente montre une activité régulière en octobre (commande le 03/10/2024). Le cycle de commande moyen constaté en 2024 est d'environ 30 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. Bien que la commande la plus récente soit de 2u, l'historique N-1 sur la même période montre une récurrence à 10u. En application du principe de précaution B2B et pour s'aligner sur la saisonnalité historique, une commande est nécessaire. La quantité de 10u est retenue car elle représente la médiane haute des commandes significatives de l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 993 tokens
- **Output**: 207 tokens
- **Total**: 1,200 tokens



</details>


<details>
<summary><strong>17. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
La dernière commande remonte au 07/08/2025, soit 61 jours avant la date actuelle. L'historique de l'année précédente montre une commande à la même période (03/10/2024), confirmant un besoin cyclique à l'automne. Le délai depuis la dernière commande dépasse largement les cycles habituels observés en 2024, ce qui indique un risque de rupture imminent sous 30 jours. Pour la quantité, bien que la dernière commande fût de 5u, l'historique N-1 à cette période précise était de 2u. En suivant la règle de prudence B2B et en privilégiant la valeur la plus basse en cas de doute sur une rotation irrégulière, une commande de 2u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 181 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>18. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement d'environ 20 à 60 jours. La dernière commande remontant au 07/08/2025 (soit 61 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un besoin immédiat. En appliquant la règle de la médiane sur l'historique récent (3u, 3u, 5u), la quantité retenue est de 3 unités. Ce volume est cohérent avec l'historique N-1 à la même période (2u en octobre 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 1,023 tokens
- **Output**: 153 tokens
- **Total**: 1,176 tokens



</details>


<details>
<summary><strong>19. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 10u vs Médiane: 5u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 5u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 5u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande irrégulier mais une récurrence marquée à la période d'octobre (commande de 10u le 03/10/2024). La dernière commande remontant à 61 jours (07/08/2025), le délai dépasse largement le seuil de précaution face à l'historique N-1. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 10 unités, correspondant à la médiane des commandes passées et au volume exact commandé à la même période l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 168 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>20. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 5u vs Médiane: 10u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 10u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 07/08/2025, soit 61 jours avant la date actuelle. L'historique montre des cycles de commande variables (21 jours, 65 jours). En appliquant le principe de précaution B2B et compte tenu du délai de 61 jours sans réapprovisionnement, le risque de rupture est jugé élevé pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont de 10, 3 et 5 unités. La médiane de l'historique récent est de 5 unités. Conformément aux règles de gestion, nous privilégions la médiane pour éviter de surstocker tout en couvrant le besoin standard.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 182 tokens
- **Total**: 1,138 tokens



</details>


<details>
<summary><strong>21. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 50u vs Médiane: 25u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 50u
- **Baseline calculee**: 50u
- **Mediane historique**: 25u
- **Reel commande**: 25u
- **Erreur LLM**: 25u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 50u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 juillet 2025 (soit 82 jours). Bien que l'historique de l'année précédente montre un cycle de 30 à 45 jours pour des quantités de 25u, la commande la plus récente a doublé ce volume (50u). En appliquant le principe de précaution B2B, le délai écoulé depuis la dernière livraison dépasse largement le cycle habituel, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement pour maintenir le stock sur l'horizon des 30 prochains jours. La quantité retenue est de 50u, correspondant à la valeur de la commande la plus récente (médiane sur le nouveau volume observé).

**Tokens utilises pour cette prediction:**
- **Input**: 945 tokens
- **Output**: 168 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>22. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 25u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier d'environ 30 à 35 jours (mai, juin, juillet). La dernière commande datant du 17 juillet 2025, le délai écoulé (82 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un besoin urgent ou un cycle irrégulier nécessitant une commande de précaution. La quantité est fixée à 25 unités, correspondant à la médiane et à la valeur constante observée sur toutes les commandes récentes et la majorité des commandes N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 981 tokens
- **Output**: 144 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>23. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 25u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier d'environ 30 à 34 jours (mai, juin, juillet). La dernière commande datant du 17 juillet 2025, le délai depuis celle-ci (82 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture critique ou un besoin non couvert. La quantité historique est strictement constante à 25 unités sur toutes les commandes récentes et de l'année précédente. En suivant la règle de la médiane et de la stabilité du cycle, une commande de 25 unités est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 998 tokens
- **Output**: 153 tokens
- **Total**: 1,151 tokens



</details>


<details>
<summary><strong>24. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 30 à 40 jours. La dernière commande enregistrée date du 17 juillet 2025, soit plus de 80 jours avant la date actuelle (7 octobre 2025). Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture imminent ou un besoin non couvert. En application du principe de précaution B2B, une commande est nécessaire. La quantité est déterminée par la médiane des commandes récentes (1, 2, 3), soit 2 unités, ce qui correspond également à la tendance historique N-1 pour cette période de l'année.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 171 tokens
- **Total**: 1,161 tokens



</details>




### Donnees d'Input LLM (24 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 25u
- 2025-07-17 07:32:23: 50u
- 2025-06-17 06:15:40: 25u
- 2025-05-13 12:56:32: 50u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 35u
- 2024-07-12 09:46:49: 25u
- 2024-06-21 06:29:37: 25u
- 2024-05-30 14:22:18: 25u
- 2024-05-08 13:35:20: 25u
- 2024-04-15 08:56:03: 25u

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>2. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 25u
- 2025-07-17 07:32:23: 25u
- 2025-06-17 06:15:40: 25u
- 2025-05-13 12:56:32: 25u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 10u
- 2024-08-20 06:33:32: 25u
- 2024-06-21 06:29:37: 25u
- 2024-05-30 14:22:18: 25u
- 2024-04-15 08:56:03: 25u
- 2024-03-15 07:44:55: 10u

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 30u
- 2025-08-07 11:14:43: 20u
- 2025-07-17 07:32:23: 30u
- 2025-05-13 12:56:32: 30u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 35u
- 2024-08-20 06:33:32: 10u
- 2024-06-21 06:29:37: 30u
- 2024-05-30 14:22:18: 20u
- 2024-05-08 13:35:20: 10u
- 2024-04-15 08:56:03: 10u
- 2024-03-15 07:44:55: 15u
- 2024-03-06 08:22:59: 10u

**Quantite Mediane (fallback)**: 30u
**Quantite Reelle**: 15u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 5u
- 2025-07-17 07:32:23: 25u
- 2025-06-17 06:15:40: 15u
- 2025-05-13 12:56:32: 15u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 30u
- 2024-08-20 06:33:32: 5u
- 2024-06-21 06:29:37: 30u
- 2024-05-30 14:22:18: 20u
- 2024-05-08 13:35:20: 5u
- 2024-04-15 08:56:03: 10u
- 2024-03-15 07:44:55: 15u
- 2024-03-06 08:22:59: 10u

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 5u
- 2025-08-07 11:14:43: 10u
- 2025-07-17 07:32:23: 10u
- 2025-06-17 06:15:40: 5u
- 2025-05-13 12:56:32: 15u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 30u
- 2024-08-20 06:33:32: 10u
- 2024-06-21 06:29:37: 20u
- 2024-05-30 14:22:18: 15u
- 2024-04-15 08:56:03: 10u
- 2024-03-15 07:44:55: 10u
- 2024-03-06 08:22:59: 10u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 10u
- 2025-07-17 07:32:23: 10u
- 2025-06-17 06:15:40: 3u
- 2025-05-13 12:56:32: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 20u
- 2024-06-21 06:29:37: 10u
- 2024-05-30 14:22:18: 15u
- 2024-04-15 08:56:03: 5u
- 2024-03-15 07:44:55: 10u
- 2024-03-06 08:22:59: 5u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>7. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 2u
- 2025-08-07 11:14:43: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-21 06:29:37: 15u
- 2024-05-30 14:22:18: 10u
- 2024-04-15 08:56:03: 5u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 3u
- 2025-07-17 07:32:23: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-21 06:29:37: 15u
- 2024-05-30 14:22:18: 10u
- 2024-04-15 08:56:03: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 10u
- 2025-07-17 07:32:23: 5u
- 2025-06-17 06:15:40: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 20u
- 2024-08-20 06:33:32: 10u
- 2024-06-21 06:29:37: 10u
- 2024-05-30 14:22:18: 15u
- 2024-04-15 08:56:03: 5u
- 2024-03-15 07:44:55: 5u
- 2024-03-06 08:22:59: 10u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>10. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 3u
- 2025-08-07 11:14:43: 2u
- 2025-05-13 12:56:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 5u
- 2024-08-20 06:33:32: 3u
- 2024-05-30 14:22:18: 4u
- 2024-03-06 08:22:59: 5u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 2u
- 2025-07-17 07:32:23: 3u
- 2025-06-17 06:15:40: 6u
- 2025-05-13 12:56:32: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 3u
- 2024-08-20 06:33:32: 5u
- 2024-06-21 06:29:37: 5u
- 2024-05-30 14:22:18: 8u
- 2024-05-08 13:35:20: 1u
- 2024-04-15 08:56:03: 2u
- 2024-03-06 08:22:59: 5u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 4u
- 2025-06-17 06:15:40: 2u
- 2025-05-13 12:56:32: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 5u
- 2024-08-20 06:33:32: 4u
- 2024-06-21 06:29:37: 5u
- 2024-05-30 14:22:18: 3u
- 2024-03-06 08:22:59: 10u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 2u
- 2025-08-07 11:14:43: 5u
- 2025-07-17 07:32:23: 3u
- 2025-05-13 12:56:32: 7u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-21 06:29:37: 15u
- 2024-05-30 14:22:18: 7u
- 2024-05-08 13:35:20: 3u
- 2024-04-15 08:56:03: 2u
- 2024-03-06 08:22:59: 8u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 5u
- 2025-07-17 07:32:23: 5u
- 2025-06-17 06:15:40: 3u
- 2025-05-13 12:56:32: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 8u
- 2024-08-20 06:33:32: 4u
- 2024-06-21 06:29:37: 5u
- 2024-05-30 14:22:18: 7u
- 2024-05-08 13:35:20: 5u
- 2024-03-06 08:22:59: 5u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>15. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:18:29: 2u
- 2025-07-17 07:32:23: 5u
- 2025-05-13 12:56:32: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-15 08:56:03: 10u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>16. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 11:14:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 10u
- 2024-07-12 09:46:49: 10u
- 2024-06-21 06:29:37: 10u
- 2024-05-30 14:22:18: 5u
- 2024-05-08 13:35:20: 4u
- 2024-04-15 08:56:03: 2u
- 2024-03-06 08:22:59: 8u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>17. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 11:14:43: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 2u
- 2024-06-21 06:29:37: 5u
- 2024-05-30 14:22:18: 6u
- 2024-05-08 13:35:20: 2u
- 2024-04-15 08:56:03: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 11:14:43: 3u
- 2025-07-17 07:32:23: 3u
- 2025-05-13 12:56:32: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 2u
- 2024-08-20 06:33:32: 3u
- 2024-07-12 09:46:49: 5u
- 2024-06-21 06:29:37: 3u
- 2024-05-08 13:35:20: 3u
- 2024-04-15 08:56:03: 1u
- 2024-03-15 07:44:55: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>19. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 11:14:43: 5u
- 2025-05-13 12:56:32: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 10u
- 2024-04-15 08:56:03: 15u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>20. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 11:14:43: 10u
- 2025-07-17 07:32:23: 3u
- 2025-05-13 12:56:32: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 10u
- 2024-04-15 08:56:03: 10u
- 2024-03-06 08:22:59: 5u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>21. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 07:32:23: 50u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-21 06:29:37: 25u
- 2024-05-30 14:22:18: 25u
- 2024-04-15 08:56:03: 25u
- 2024-03-15 07:44:55: 25u

**Quantite Mediane (fallback)**: 50u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>22. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 07:32:23: 25u
- 2025-06-17 06:15:40: 25u
- 2025-05-13 12:56:32: 25u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 10u
- 2024-06-21 06:29:37: 25u
- 2024-05-08 13:35:20: 25u
- 2024-04-15 08:56:03: 25u

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>23. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 07:32:23: 25u
- 2025-06-17 06:15:40: 25u
- 2025-05-13 12:56:32: 25u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:33:32: 25u
- 2024-07-12 09:46:49: 25u
- 2024-06-21 06:29:37: 25u
- 2024-04-15 08:56:03: 25u
- 2024-03-06 08:22:59: 25u

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>24. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 07:32:23: 2u
- 2025-06-17 06:15:40: 1u
- 2025-05-13 12:56:32: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 07:18:43: 3u
- 2024-07-12 09:46:49: 5u
- 2024-06-21 06:29:37: 1u
- 2024-05-30 14:22:18: 2u
- 2024-05-08 13:35:20: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 25 | Predicted 25u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 5 | Predicted 5u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 4 | Predicted 4u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 25 | Predicted 25u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 15 | Predicted 15u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 3 | Predicted 3u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:07.713Z*
