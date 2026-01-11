# Rapport Backtest - Client CRF MARKET AUBEL SA AGBA

## Contexte

- **Client** : CRF MARKET AUBEL SA AGBA (ID: 38732)
- **Commande réelle** : S39932
- **Date commande** : 2025-10-27 10:41:25
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 47
- **Tokens**: 45,129 input + 7,345 output = 52,474 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.8% | 47 produits prédits, 22 corrects |
| **Rappel** | 91.7% | 24 produits réels, 22 détectés |
| **F1-Score** | 62.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.36 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 54.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -36.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 16 | Avec erreur |

---

## True Positives (22)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LD010] LD Organic Truffle Spread 135 g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (22 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse de l'historique récent montre un cycle de commande moyen d'environ 43 jours (intervalles de 77, 36 et 22 jours). La dernière commande remonte au 12 septembre, soit 44 jours avant la date actuelle. Nous avons dépassé le cycle moyen et le seuil de réapprovisionnement de 30 jours est largement entamé. Le risque de rupture est avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes oscillent entre 1u et 2u. La médiane des commandes récentes est de 1u. Conformément à la règle de prudence sur les faibles rotations et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 190 tokens
- **Total**: 1,178 tokens



</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 12 septembre 2025, soit 44 jours avant la date actuelle. Bien que le cycle moyen soit d'environ 45 à 60 jours, le principe de précaution B2B s'applique ici car nous entrons dans la fenêtre critique des 30 jours (Replenishment Threshold Days) où une rupture pourrait survenir. L'historique récent et N-1 montre une demande constante de 1 unité par commande (médiane de 1u). Conformément aux règles de gestion des rotations faibles, la quantité de 1 unité est maintenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 161 tokens
- **Total**: 1,150 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 45 jours. La dernière commande datant du 12 septembre 2025 (soit 44 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique récent et N-1 montre une rotation stable de 1 ou 2 unités. Conformément à la règle de prudence et à l'utilisation de la médiane sur un produit à faible rotation, une quantité de 1 unité est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,024 tokens
- **Output**: 157 tokens
- **Total**: 1,181 tokens



</details>


<details>
<summary><strong>4. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 78 jours puis 22 jours, indiquant une rotation irrégulière. Depuis la dernière commande du 12 septembre, 44 jours se sont écoulés. Compte tenu du seuil de réapprovisionnement de 30 jours et de l'incertitude du cycle, le principe de précaution B2B s'applique pour éviter une rupture. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la valeur la plus basse observée, conformément aux règles de gestion des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 132 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>5. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 25 à 35 jours. La dernière commande remontant au 12 septembre (soit 44 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, confirmant un risque de rupture imminent. L'historique de l'année précédente confirme également une activité régulière en septembre/octobre. En appliquant la règle de la médiane sur les commandes récentes (1, 2, 2, 4), la quantité retenue est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,040 tokens
- **Output**: 147 tokens
- **Total**: 1,187 tokens



</details>


<details>
<summary><strong>6. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 35 à 45 jours. La dernière commande datant du 12 septembre (soit 44 jours avant la date actuelle), le seuil de réapprovisionnement est largement atteint. De plus, l'historique N-1 confirme une activité régulière en septembre/octobre. En suivant le principe de précaution B2B et en se basant sur la médiane des commandes récentes (1u), une commande de 1 unité est nécessaire pour couvrir le risque de rupture imminent.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 129 tokens
- **Total**: 1,117 tokens



</details>


<details>
<summary><strong>7. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 25 à 35 jours entre chaque réapprovisionnement sur les derniers mois. La dernière commande remontant au 12 septembre 2025 (soit 44 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique récent est extrêmement stable avec une récurrence de 2 unités sur les quatre dernières commandes. En suivant la règle de la médiane et de la stabilité du stock, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,040 tokens
- **Output**: 153 tokens
- **Total**: 1,193 tokens



</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 45 à 60 jours. La dernière commande remontant au 12 septembre 2025 (soit 44 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. Bien que l'historique N-1 montre une commande en octobre, la rotation actuelle est stable. En appliquant la règle de la médiane sur les commandes récentes (2, 2, 1, 2), la quantité retenue est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,004 tokens
- **Output**: 145 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>9. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande observé est d'environ 22 jours (entre le 21/08 et le 12/09). La dernière commande datant du 12/09, soit il y a 44 jours, nous avons largement dépassé le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 131 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>10. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
Le cycle de commande moyen est d'environ 28 jours. La dernière commande remontant au 12 septembre (soit 44 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Concernant la quantité, bien que des commandes de 4 unités aient été observées en juin et juillet, l'historique récent montre une stabilisation à 2 unités. En suivant la règle de la médiane et de la prudence sur les volumes, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 137 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>11. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 3u vs Médiane: 5u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 25 à 35 jours. La dernière commande datant du 12 septembre (soit 44 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent. L'historique de l'année précédente confirme également une activité régulière en octobre (3u). En appliquant la règle de la médiane sur les commandes récentes (2, 3, 4, 4, 7), la valeur centrale est de 3 unités. Cette quantité est cohérente avec la consommation historique pour sécuriser le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,077 tokens
- **Output**: 158 tokens
- **Total**: 1,235 tokens



</details>


<details>
<summary><strong>12. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 3u vs Médiane: 4u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 3u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 21 août, soit 66 jours avant la date actuelle. Le cycle moyen observé sur l'historique récent et N-1 est d'environ 30 à 45 jours. Le délai écoulé dépasse largement ce cycle, indiquant un risque de rupture imminent ou une consommation du stock de sécurité dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane des commandes récentes (3, 4, 3) et à la valeur haute observée l'année précédente, afin de stabiliser le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,025 tokens
- **Output**: 162 tokens
- **Total**: 1,187 tokens



</details>


<details>
<summary><strong>13. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 26 jours (intervalles de 27, 15 et 36 jours). La dernière commande remontant au 21 août, soit il y a 66 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture critique ou un besoin imminent non couvert. En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 4 unités, correspondant à la médiane des commandes récentes (2, 4, 4, 5), en écartant le pic de 5 unités pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 166 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>14. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 21 août 2025, soit plus de 60 jours avant la date actuelle. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement les standards de réapprovisionnement habituels pour ce produit, créant un risque de rupture imminent dans l'horizon des 30 jours. En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, la médiane historique et la règle sur les rotations faibles (1-2u) imposent de rester sur le volume minimal de 1 unité pour éviter un surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 991 tokens
- **Output**: 150 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>15. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 août 2025, soit 66 jours. L'historique N-1 montre une commande le 11 octobre 2024, indiquant un besoin récurrent à cette période de l'année. Le cycle moyen étant dépassé et le seuil de réapprovisionnement de 30 jours étant engagé, le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane de l'historique global (majoritairement des unités de 1) et le principe de précaution en cas de rotation faible imposent de choisir la valeur la plus basse pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 177 tokens
- **Total**: 1,165 tokens



</details>


<details>
<summary><strong>16. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 45 jours. La dernière commande enregistrée remonte au 21 août 2025, soit plus de 60 jours avant la date actuelle (26 octobre). Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou une consommation du stock de sécurité. En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent montre des volumes de 1u, 2u, 2u et 4u. La médiane de ces commandes est de 2u. Conformément aux règles de gestion, nous retenons cette valeur médiane pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,060 tokens
- **Output**: 183 tokens
- **Total**: 1,243 tokens



</details>


<details>
<summary><strong>17. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 21 août 2025, soit 66 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 30 à 45 jours (ex: juillet-août 2025, juin-juillet-août-septembre 2024). Le délai actuel dépasse largement ce cycle habituel, ce qui indique un risque de rupture imminent ou une consommation déjà effectuée. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes et à la rotation régulière observée sur ce produit à faible volume.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 159 tokens
- **Total**: 1,148 tokens



</details>


<details>
<summary><strong>18. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 50 à 60 jours. La dernière commande remontant au 21 août 2025 (soit plus de 65 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un risque de rupture imminent. Bien que l'historique N-1 montre des volumes variables (1u à 3u), les deux dernières commandes de 2025 sont stables à 2 unités. En application de la règle de la médiane et du maintien des rotations régulières, une quantité de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 163 tokens
- **Total**: 1,168 tokens



</details>


<details>
<summary><strong>19. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (1 à 2 unités par commande). La dernière commande remonte au 21 août 2025, soit plus de 60 jours. Bien que le cycle soit difficile à définir précisément, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le seuil de 30 jours est largement atteint. Conformément aux règles de gestion des faibles rotations, la quantité retenue est de 1 unité (médiane basse de l'historique récent et N-1) afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 154 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>20. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 1 à 2 mois). La dernière commande enregistrée remonte au 16 juillet 2025, soit plus de 100 jours sans activité, ce qui dépasse largement le cycle habituel et indique un risque de rupture imminent ou un besoin de réapprovisionnement pour maintenir le stock en rayon. Conformément au principe de précaution B2B et à la règle de rotation très faible (1-2u), une commande de 1 unité est préconisée. Cette quantité correspond à la médiane stricte de l'historique récent et de l'année précédente, garantissant une couverture sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,008 tokens
- **Output**: 158 tokens
- **Total**: 1,166 tokens



</details>


<details>
<summary><strong>21. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre une rotation lente et irrégulière. La dernière commande remonte à plus de 100 jours (16 juillet), ce qui dépasse largement les cycles observés précédemment. Bien que la demande soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu en septembre l'année précédente. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et historiques, afin de couvrir le besoin sans créer de surstock inutile sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 138 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>22. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et sporadique (1 unité par commande). La dernière commande remonte au 16 juillet 2025, soit plus de 100 jours. Bien que le cycle soit irrégulier, l'historique de l'année précédente montre des commandes en septembre et octobre. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et compte tenu du délai écoulé, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de toutes les commandes passées.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 145 tokens
- **Total**: 1,084 tokens



</details>




### Donnees d'Input LLM (22 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 1u
- 2025-07-16 06:27:44: 1u
- 2025-06-04 07:55:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:15:39: 1u
- 2024-08-09 06:13:57: 1u
- 2024-06-27 07:05:16: 2u
- 2024-04-23 07:38:39: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u
- 2025-07-16 06:27:44: 1u
- 2025-07-01 12:34:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 1u
- 2024-03-18 09:22:57: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u
- 2025-08-21 12:13:27: 1u
- 2025-07-01 12:34:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 2u
- 2024-09-09 13:15:39: 1u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 2u
- 2024-05-22 09:12:24: 2u
- 2024-04-23 07:38:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u
- 2025-08-21 12:13:27: 1u
- 2025-06-04 07:55:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 4u
- 2025-07-16 06:27:44: 2u
- 2025-07-01 12:34:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 5u
- 2024-09-09 13:15:39: 3u
- 2024-07-16 10:53:09: 2u
- 2024-06-27 07:05:16: 6u
- 2024-05-22 09:12:24: 5u
- 2024-04-23 07:38:39: 4u
- 2024-03-18 09:22:57: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>6. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u
- 2025-08-21 12:13:27: 1u
- 2025-07-01 12:34:20: 2u
- 2025-06-04 07:55:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 1u
- 2024-09-09 13:15:39: 1u
- 2024-06-27 07:05:16: 1u
- 2024-03-18 09:22:57: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 2u
- 2025-07-16 06:27:44: 2u
- 2025-07-01 12:34:20: 2u
- 2025-06-04 07:55:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 2u
- 2024-09-09 13:15:39: 1u
- 2024-07-16 10:53:09: 2u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 1u
- 2024-03-18 09:22:57: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 2u
- 2025-07-16 06:27:44: 1u
- 2025-06-04 07:55:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 1u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 1u
- 2024-05-22 09:12:24: 2u
- 2024-03-18 09:22:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u
- 2025-08-21 12:13:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 2u
- 2025-07-16 06:27:44: 2u
- 2025-07-01 12:34:20: 4u
- 2025-06-04 07:55:23: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 4u
- 2025-07-16 06:27:44: 3u
- 2025-07-01 12:34:20: 7u
- 2025-06-04 07:55:23: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 3u
- 2024-09-09 13:15:39: 3u
- 2024-08-09 06:13:57: 2u
- 2024-07-16 10:53:09: 2u
- 2024-06-27 07:05:16: 5u
- 2024-05-22 09:12:24: 5u
- 2024-04-23 07:38:39: 4u
- 2024-03-18 09:22:57: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 12:13:27: 3u
- 2025-07-16 06:27:44: 4u
- 2025-07-01 12:34:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:15:39: 2u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 2u
- 2024-06-27 07:05:16: 3u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 3u
- 2024-03-18 09:22:57: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 12:13:27: 5u
- 2025-07-16 06:27:44: 2u
- 2025-07-01 12:34:20: 4u
- 2025-06-04 07:55:23: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 12:13:27: 2u
- 2025-07-01 12:34:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 1u
- 2024-09-09 13:15:39: 1u
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 12:13:27: 1u
- 2025-07-01 12:34:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 1u
- 2024-08-09 06:13:57: 2u
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 1u
- 2024-03-18 09:22:57: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>16. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 12:13:27: 4u
- 2025-07-16 06:27:44: 2u
- 2025-07-01 12:34:20: 2u
- 2025-06-04 07:55:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 2u
- 2024-09-09 13:15:39: 3u
- 2024-08-09 06:13:57: 2u
- 2024-07-16 10:53:09: 3u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 4u
- 2024-04-23 07:38:39: 2u
- 2024-03-18 09:22:57: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>17. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 12:13:27: 1u
- 2025-07-16 06:27:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 2u
- 2024-09-09 13:15:39: 1u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-04-23 07:38:39: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>18. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 12:13:27: 2u
- 2025-07-01 12:34:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 3u
- 2024-09-09 13:15:39: 1u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 2u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 2u
- 2024-03-18 09:22:57: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>19. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 12:13:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-03-18 09:22:57: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>20. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 06:27:44: 1u
- 2025-06-04 07:55:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 1u
- 2024-09-09 13:15:39: 1u
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 1u
- 2024-03-18 09:22:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 06:27:44: 1u
- 2025-07-01 12:34:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:15:39: 1u
- 2024-07-16 10:53:09: 1u
- 2024-03-18 09:22:57: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>22. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 06:27:44: 1u
- 2025-06-04 07:55:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:21:26: 1u
- 2024-09-09 13:15:39: 1u
- 2024-03-18 09:22:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (25)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [LD011] LD Organic Kids Spread 180 g | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Predicted 2u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Predicted 3u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 3 | Predicted 3u but not ordered |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Predicted 1u but not ordered |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LD015] LD Onion Spread 180g | 1 | Predicted 1u but not ordered |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 4 | Predicted 4u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [DIS0003] Display TVF bois | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LD004] LD Tartinade Tomate Basilic bio 180g | 2 | Never ordered in previous analysis window (no history) |
| [LD006] LD Tartinade Olives bio 180g   | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:07:39.966Z*
