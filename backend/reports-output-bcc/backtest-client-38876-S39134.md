# Rapport Backtest - Client DLL PROXY TROIS-PONTS

## Contexte

- **Client** : DLL PROXY TROIS-PONTS (ID: 38876)
- **Commande réelle** : S39134
- **Date commande** : 2025-09-11 11:05:17
- **Date cutoff système** : 2025-09-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 48
- **Tokens**: 43,855 input + 7,836 output = 51,691 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.7% | 45 produits prédits, 21 corrects |
| **Rappel** | 100.0% | 21 produits réels, 21 détectés |
| **F1-Score** | 63.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.52 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 45.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 55.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 12 | Avec erreur |

---

## True Positives (21)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 10 | 8.0 | 80.0% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | 6 | 3.0 | 50.0% | partial | Non | Non | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 4 | 6 | 2.0 | 33.3% | partial | Non | Non | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 6 | 6 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 10 | 2 | 8.0 | 400.0% | partial | Non | Non | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 10 | 10 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD009] LD Organic Asparagus Spread 180 g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD012] LD Organic Samphire Spread 135 g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (21 produits)


<details>
<summary><strong>1. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit 69 jours. L'historique montre un cycle moyen d'environ 45 à 60 jours. Nous avons largement dépassé ce cycle, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement immédiat pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes en 2025 sont de 2 unités, contre 1 unité en 2024. La médiane des commandes récentes est de 2. En suivant le principe de précaution B2B et la stabilité du volume récent, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 172 tokens
- **Total**: 1,129 tokens



</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 03/07/2025, soit 69 jours. Le cycle moyen observé est d'environ 45 à 50 jours. Nous avons largement dépassé ce cycle, ce qui indique un besoin imminent ou une rupture de stock probable. Le principe de précaution B2B s'applique pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique récent montre des commandes de 1u et 2u. L'historique N-1 sur la même période (août) était de 1u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 173 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>3. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 48 jours entre les deux dernières commandes (mai à juillet). Au 10 septembre, 69 jours se sont écoulés depuis la dernière commande du 3 juillet, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou un besoin non couvert. Conformément à la règle de la médiane sur l'historique récent (3u et 4u), la quantité retenue est de 3u, privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 145 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>4. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 48 jours entre les deux dernières commandes (mai et juillet). Au 10 septembre, 69 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que le volume historique de l'année précédente à la même période était plus élevé (4u), la tendance récente montre une rotation stable mais faible de 1u. En application du principe de précaution B2B pour éviter la rupture malgré un cycle irrégulier, une commande est nécessaire. La quantité retenue est de 1u, correspondant à la médiane des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 156 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>5. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit 69 jours. L'historique N-1 montre des commandes en mai et juin, suggérant une rotation lente mais existante. Bien que le cycle soit irrégulier, le délai depuis la dernière commande dépasse largement les standards de rotation habituels pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent affiche 1u et l'historique N-1 affiche 2u. Conformément à la règle de privilégier la quantité la plus basse en cas de doute ou de rotation faible (1-2u), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 198 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>6. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 7u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 7u
- **Reel commande**: 10u
- **Erreur LLM**: 8u (80.0%)
- **Erreur Mediane**: 3u (30.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit 69 jours. L'historique N-1 montre une activité régulière en août et septembre (commandes les 01/08 et 29/08). Le délai actuel dépasse largement le cycle habituel, créant un risque de rupture imminent pour la période de septembre. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes de 2u et 8u. En N-1, les volumes oscillent entre 2u et 10u. En application de la règle de précaution B2B et du choix de la valeur la plus basse en cas de doute sur une rotation faible, la médiane basse de 2u est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 194 tokens
- **Total**: 1,169 tokens



</details>


<details>
<summary><strong>7. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 3u vs Médiane: 6u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 6u
- **Reel commande**: 6u
- **Erreur LLM**: 3u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/07/2025, soit 69 jours avant la date actuelle. L'historique montre un cycle moyen d'environ 50 à 70 jours. Nous sommes au-delà du cycle habituel et entrons dans la période de commande de l'année précédente (août/septembre). Le risque de rupture sous 30 jours est élevé. ÉTAPE 2 : Estimation quantité. Les commandes récentes oscillent entre 2u et 6u. L'historique N-1 à la même période (août) était de 3u. En suivant la règle de la médiane et du choix de la valeur la plus basse en cas de doute sur une rotation faible, une quantité de 3u est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 195 tokens
- **Total**: 1,153 tokens



</details>


<details>
<summary><strong>8. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 4u vs Médiane: 5u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 1u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 60 jours. La dernière commande datant du 03 juillet 2025 (soit 69 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement dépassé, confirmant un risque de rupture imminent. Bien que l'historique récent soit irrégulier (2u et 6u), la médiane des commandes récentes se situe à 4u. En appliquant le principe de précaution B2B pour un produit à rotation modérée, une commande de 4 unités est préconisée pour couvrir les besoins sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 153 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>9. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 6u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 48 jours entre les deux dernières commandes de 2025. La dernière commande datant du 3 juillet (soit 69 jours avant la date actuelle), le seuil de réapprovisionnement est largement dépassé, indiquant un risque de rupture imminent. Bien que l'historique de l'année précédente montre des volumes plus faibles (médiane de 3u), la tendance récente en 2025 s'est stabilisée sur des lots de 6u. En application de la règle de la médiane sur l'historique récent et du principe de précaution B2B, une commande de 6 unités est nécessaire pour couvrir les besoins des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 169 tokens
- **Total**: 1,142 tokens



</details>


<details>
<summary><strong>10. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 10u vs Médiane: 9u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 9u
- **Reel commande**: 2u
- **Erreur LLM**: 8u (400.0%)
- **Erreur Mediane**: 7u (350.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/07/2025, soit 69 jours avant la date actuelle. L'historique montre un cycle moyen d'environ 50 à 60 jours. Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il y a un risque de rupture avéré. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 10u et 12u. La médiane du récent est de 11u. En suivant la règle de prudence B2B (choisir la valeur la plus basse en cas de doute entre deux quantités proches), la quantité retenue est de 10u, ce qui correspond également à la dernière commande passée.

**Tokens utilises pour cette prediction:**
- **Input**: 978 tokens
- **Output**: 190 tokens
- **Total**: 1,168 tokens



</details>


<details>
<summary><strong>11. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 10u vs Médiane: 9u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 9u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (10.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/07/2025, soit 69 jours avant la date actuelle (10/09/2025). L'historique montre un cycle moyen d'environ 50 à 60 jours. Nous avons largement dépassé ce cycle, ce qui indique un risque de rupture imminent ou déjà effectif dans l'horizon des 30 jours (Replenishment Threshold). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 8u et 12u (médiane 10u). L'historique N-1 à la même période (août/juin) montre une stabilité à 10u. En suivant la règle de la médiane et la cohérence avec l'historique N-1, une quantité de 10 unités est préconisée pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 959 tokens
- **Output**: 223 tokens
- **Total**: 1,182 tokens



</details>


<details>
<summary><strong>12. [LD009] LD Organic Asparagus Spread 180 g</strong> - LLM: 2u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 48 jours entre les deux dernières commandes. Au 10 septembre, 69 jours se sont écoulés depuis la dernière commande (03/07), ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent. En suivant la règle de la médiane des quantités récentes (2u et 6u) et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation modérée, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 144 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>13. [LD012] LD Organic Samphire Spread 135 g</strong> - LLM: 3u vs Médiane: 5u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 5u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 48 jours entre les deux dernières commandes. Au 10 septembre, 69 jours se sont écoulés depuis la dernière commande (03/07), ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent. En application du principe de précaution B2B et de la règle de la médiane/valeur basse sur un historique court, une commande de 3 unités (quantité minimale observée) est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 141 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>14. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 6u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'historique récent montre un cycle de commande d'environ 48 jours (entre mai et juillet). Au 10 septembre, 69 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est critique. En suivant la règle de la médiane sur les commandes récentes (6u et 6u), la quantité préconisée est de 6 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 118 tokens
- **Total**: 1,007 tokens



</details>


<details>
<summary><strong>15. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 mai 2025, soit 117 jours. L'historique N-1 montre des commandes en juin et août, suggérant un cycle de rotation qui aurait dû déclencher un réapprovisionnement durant l'été. Le délai depuis la dernière commande dépasse largement les cycles habituels, créant un risque de rupture imminent. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 2 et 3 unités. En application de la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute sur une rotation irrégulière, la médiane basse de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 167 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>16. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse montre une rotation lente mais régulière. La dernière commande remonte au 16 mai 2025, soit plus de 110 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (environ 40 à 60 jours). Bien que la demande semble saisonnière ou sporadique, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le seuil de 30 jours est largement atteint. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (1, 2, 2, 3, 3), en privilégiant la valeur basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 170 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>17. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 16 mai 2025, soit 117 jours sans activité. Bien que l'historique récent soit limité à une seule commande de 4u, l'historique N-1 montre une activité régulière entre mai et août avec des quantités de 1u à 2u. Le délai depuis la dernière commande dépasse largement les cycles habituels, créant un risque de rupture imminent ou un besoin de renouvellement de stock. En application du principe de précaution B2B et en se basant sur la médiane historique de l'année précédente (2u), une commande de 2 unités est préconisée pour couvrir le seuil de 30 jours.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 156 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>18. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 mai 2025, soit environ 117 jours. L'historique de l'année précédente montre une commande fin août (29/08/2024). Bien que le cycle soit irrégulier et la rotation faible, le délai depuis la dernière commande dépasse largement les intervalles habituels. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des commandes constantes de 1u (médiane de 1u), avec une seule occurrence de 2u. Conformément à la règle sur les rotations faibles (1-2u) et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 211 tokens
- **Total**: 1,148 tokens



</details>


<details>
<summary><strong>19. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 16 mai 2025, soit 117 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (environ 30 à 60 jours entre mai et août). Bien que la rotation soit faible, l'absence de commande depuis près de 4 mois et le seuil de réapprovisionnement de 30 jours imposent une commande de précaution pour éviter une rupture prolongée. La quantité est fixée à 2 unités, correspondant à la médiane de l'historique global (1, 2, 3, 4), en privilégiant la valeur basse par prudence face à la faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 152 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>20. [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 16 mai 2025, soit plus de 115 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente à la même période (août). Selon le principe de précaution B2B et la détection d'un besoin incertain après une longue période d'inactivité, un réapprovisionnement est nécessaire pour couvrir le risque de rupture sur les 30 prochains jours. Pour la quantité, la médiane historique globale se situe entre 2u et 3u ; conformément aux règles de gestion des rotations faibles, nous retenons la valeur de 3u (médiane des commandes significatives) pour reconstituer un stock de base sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 162 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>21. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande le 01/08/2024. Avec une date actuelle au 10/09/2025, le cycle annuel est dépassé. En application du principe de précaution B2B (incertitude sur la rotation), un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique récent, la référence est la commande N-1 de la même période, soit 1 unité. Conformément à la règle sur les rotations très faibles, on maintient la quantité minimale de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 168 tokens
- **Total**: 1,039 tokens



</details>




### Donnees d'Input LLM (21 produits)


<details>
<summary><strong>1. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 2u
- 2025-05-16 10:25:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 12:13:32: 1u
- 2024-06-24 06:30:02: 1u
- 2024-05-16 06:55:33: 1u
- 2024-04-03 14:35:33: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 1u
- 2025-05-16 10:25:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 12:13:32: 1u
- 2024-06-24 06:30:02: 1u
- 2024-05-16 06:55:33: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 3u
- 2025-05-16 10:25:45: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 06:30:02: 1u
- 2024-05-16 06:55:33: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 1u
- 2025-05-16 10:25:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 06:30:02: 4u
- 2024-05-16 06:55:33: 4u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 06:30:02: 2u
- 2024-05-16 06:55:33: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 2u
- 2025-05-16 10:25:45: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:10:09: 8u
- 2024-08-01 12:13:32: 2u
- 2024-06-24 06:30:02: 10u
- 2024-05-16 06:55:33: 6u
- 2024-04-03 14:35:33: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>7. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 2u
- 2025-05-16 10:25:45: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:10:09: 3u
- 2024-06-24 06:30:02: 10u
- 2024-05-16 06:55:33: 6u
- 2024-04-03 14:35:33: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>8. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 2u
- 2025-05-16 10:25:45: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 06:30:02: 8u
- 2024-05-16 06:55:33: 2u
- 2024-04-03 14:35:33: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>9. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 6u
- 2025-05-16 10:25:45: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:10:09: 3u
- 2024-08-01 12:13:32: 2u
- 2024-06-24 06:30:02: 4u
- 2024-05-16 06:55:33: 3u
- 2024-04-03 14:35:33: 3u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>10. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 10u
- 2025-05-16 10:25:45: 12u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:10:09: 8u
- 2024-08-01 12:13:32: 4u
- 2024-06-24 06:30:02: 12u
- 2024-05-16 06:55:33: 6u
- 2024-04-03 14:35:33: 6u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 8u
- 2025-05-16 10:25:45: 12u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 12:13:32: 10u
- 2024-06-24 06:30:02: 10u
- 2024-05-16 06:55:33: 3u
- 2024-04-03 14:35:33: 6u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>12. [LD009] LD Organic Asparagus Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 2u
- 2025-05-16 10:25:45: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [LD012] LD Organic Samphire Spread 135 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 6u
- 2025-05-16 10:25:45: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>14. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 13:03:17: 6u
- 2025-05-16 10:25:45: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>15. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-16 10:25:45: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:10:09: 2u
- 2024-06-24 06:30:02: 2u
- 2024-05-16 06:55:33: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>16. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-16 10:25:45: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 12:13:32: 1u
- 2024-06-24 06:30:02: 2u
- 2024-05-16 06:55:33: 3u
- 2024-04-03 14:35:33: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-16 10:25:45: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:10:09: 1u
- 2024-08-01 12:13:32: 1u
- 2024-06-24 06:30:02: 2u
- 2024-05-16 06:55:33: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-16 10:25:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:10:09: 1u
- 2024-06-24 06:30:02: 2u
- 2024-05-16 06:55:33: 1u
- 2024-04-03 14:35:33: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>19. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-16 10:25:45: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:10:09: 1u
- 2024-06-24 06:30:02: 2u
- 2024-05-16 06:55:33: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-16 10:25:45: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:10:09: 3u
- 2024-08-01 12:13:32: 1u
- 2024-05-16 06:55:33: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 12:13:32: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (24)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Predicted 3u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Predicted 2u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Predicted 2u but not ordered |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 2 | Predicted 2u but not ordered |
| [LD010] LD Organic Truffle Spread 135 g | 3 | Predicted 3u but not ordered |
| [LD011] LD Organic Kids Spread 180 g | 4 | Predicted 4u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 4 | Predicted 4u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 3 | Predicted 3u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:22.185Z*
