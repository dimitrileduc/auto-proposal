# Rapport Backtest - Client DLL AD BERTRIX

## Contexte

- **Client** : DLL AD BERTRIX (ID: 57004)
- **Commande réelle** : S40022
- **Date commande** : 2025-11-04 13:52:45
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 49
- **Tokens**: 44,447 input + 7,762 output = 52,209 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.3% | 47 produits prédits, 26 corrects |
| **Rappel** | 100.0% | 26 produits réels, 26 détectés |
| **F1-Score** | 71.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.73 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 42.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -6.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 14 | Avec erreur |

---

## True Positives (26)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LD011] LD Organic Kids Spread 180 g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD015] LD Onion Spread 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD010] LD Organic Truffle Spread 135 g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LD009] LD Organic Asparagus Spread 180 g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 4 | 1 | 3.0 | 300.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (26 produits)


<details>
<summary><strong>1. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 78 jours (entre juin et septembre). Au 3 novembre, 61 jours se sont écoulés depuis la dernière commande, ce qui représente environ 78% du cycle moyen. Ce dépassement du seuil de 70% indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la constante observée sur les commandes précédentes pour ce produit à rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 148 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>2. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/09/2025, soit il y a 61 jours. L'intervalle précédent était de 78 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique (61 + 30 = 91 jours, dépassant le cycle moyen observé). Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 176 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>3. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle entre les deux dernières commandes est de 78 jours. La dernière commande date du 03/09/2025, soit il y a 61 jours. Ce délai représente 78% du cycle moyen, dépassant le seuil de risque de 70%. Un besoin de réapprovisionnement est donc détecté par précaution pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique montre des quantités très faibles (1u et 2u). Conformément à la règle sur les rotations faibles et au principe de choisir la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est la médiane basse, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 165 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>4. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle entre les deux dernières commandes est de 78 jours. La dernière commande date du 03/09/2025, soit il y a 61 jours. Ce délai représente 78% du cycle moyen, ce qui dépasse le seuil de risque de 70%. Un besoin de réapprovisionnement est donc détecté par précaution pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique récent montre des commandes de 2u et 4u. Conformément à la règle de prudence en cas de doute et pour éviter le surstockage sur un produit à faible rotation, la quantité la plus basse (2u) est privilégiée.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 162 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>5. [LD009] LD Organic Asparagus Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'historique montre un cycle de commande d'environ 78 jours (entre juin et septembre). Au 3 novembre, 61 jours se sont écoulés depuis la dernière commande, ce qui représente environ 78% du cycle moyen. Le seuil de risque de 70% est dépassé, indiquant un besoin de réapprovisionnement imminent dans l'horizon des 30 jours. La quantité est fixée à 2 unités, correspondant à la médiane et à la constante observée sur les commandes récentes pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 124 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>6. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/09/2025, soit 61 jours avant la date actuelle. L'intervalle précédent était de 78 jours. En appliquant la règle des 70% du cycle moyen (environ 55 jours), le risque de rupture est avéré pour les 30 prochains jours. Le cycle étant irrégulier et la rotation faible, le principe de précaution B2B impose un réapprovisionnement. La quantité retenue est de 2 unités, correspondant à la valeur basse de l'historique récent (médiane entre 2u et 4u, choix de la plus basse pour éviter le surstockage).

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 154 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>7. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/09/2025, soit 61 jours. L'intervalle précédent était de 78 jours. À 61 jours, nous atteignons 78% du cycle précédent (seuil de 70% dépassé), ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u et 4u. En application de la règle de précaution B2B privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est la médiane basse de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 178 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>8. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 61 jours. Bien que la rotation soit faible, l'historique montre des commandes espacées de 2 à 3 mois. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 4u, tandis que l'année précédente était stable à 1u. En suivant la règle de la médiane et le principe de précaution (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité de 1u est retenue pour maintenir le produit en rayon sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 193 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>9. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 30 à 60 jours (juin, juillet, septembre). Depuis la dernière commande du 03/09/2025, 61 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. La quantité est déterminée par la médiane des commandes récentes (2, 3, 4), soit 3 unités, ce qui correspond également au volume commandé à la même période l'année précédente (3u en août).

**Tokens utilises pour cette prediction:**
- **Input**: 942 tokens
- **Output**: 141 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>10. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 03/09/2025, soit 61 jours avant la date actuelle. Bien que le cycle entre les deux dernières commandes soit de 78 jours, le délai actuel dépasse largement les 70% de ce cycle (55 jours), ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la commande la plus récente et à la valeur la plus basse pour ce produit à faible rotation, afin d'éviter un surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 159 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>11. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 03/09/2025, soit 61 jours. Le cycle moyen observé est d'environ 45-50 jours. Nous avons largement dépassé ce cycle et le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : L'historique récent montre des quantités de 2, 3 et 4 unités. La médiane de ces commandes est de 3 unités. Conformément au principe de précaution B2B et à la stabilité de la rotation, nous retenons la médiane pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 150 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>12. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 4u vs Médiane: 4u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 30 à 45 jours (juin-juillet-septembre). Depuis la dernière commande du 03/09/2025, 61 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou avéré. En suivant la règle de la médiane des commandes récentes (3, 4, 4), la quantité recommandée est de 4 unités pour reconstituer le stock sur ce produit à rotation régulière.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 138 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>13. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 45 à 60 jours. La dernière commande remontant au 03 septembre 2025 (soit 61 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Bien que l'historique soit de faible rotation, le principe de précaution B2B impose une commande. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (2u et 3u) et à l'historique N-1 sur la même période, tout en privilégiant la valeur basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 166 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>14. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 03/09/2025, soit 61 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une commande fin septembre (27/09/2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est présent par principe de précaution B2B face à une absence de commande depuis deux mois. ÉTAPE 2 : L'historique récent montre une stabilité à 1 unité (juillet et septembre). La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 169 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>15. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 30 à 60 jours (juin, juillet, septembre). Depuis la dernière commande du 03/09/2025, 61 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. En appliquant la règle de la médiane sur l'historique récent (1, 2, 4), la valeur centrale est de 2 unités. Ce volume correspond également à l'historique N-1 pour la même période (septembre 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 150 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>16. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 30 et 60 jours. La dernière commande remontant au 03 septembre 2025 (soit 61 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement dépassé, indiquant un risque de rupture imminent ou une commande déjà due. L'historique de l'année précédente confirme également une activité régulière sur cette période (septembre/octobre). En appliquant la règle de la médiane sur les commandes récentes (1, 2, 4) et en tenant compte de l'historique N-1 (2, 3, 4), la quantité de 2 unités est retenue pour couvrir le besoin sans surstocker, conformément au principe de prudence sur les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 180 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>17. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement le cycle observé entre les deux premières commandes (31 jours). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes de 1u et 3u. Conformément à la règle de privilégier la médiane et, en cas de doute, de choisir la valeur la plus basse pour ne pas surestimer le stock de sécurité sur une rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 180 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>18. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande espacé (environ 30 à 45 jours en période d'activité). La dernière commande remontant au 18 juillet 2025, soit plus de 100 jours, et compte tenu de l'historique N-1 qui montre une activité en août, il existe un doute raisonnable sur l'état des stocks pour couvrir les 30 prochains jours. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (2u) et au volume observé l'année précédente à la même période.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 164 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>19. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière avec une dernière commande enregistrée il y a plus de 100 jours (18 juillet). Bien que le cycle soit difficile à déterminer, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si un besoin survient dans les 30 prochains jours. Conformément aux règles de gestion des faibles rotations (1-2u) et en privilégiant la valeur la plus basse en cas de doute, la quantité est fixée à 1 unité (médiane basse de l'historique récent).

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 133 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>20. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours. Bien que la rotation soit lente, l'historique N-1 montre une activité sur la période août-juillet. En application du principe de précaution B2B et face à une irrégularité de cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane des commandes récentes est de 1.5u. Conformément à la règle de privilégier la médiane et de se référer à l'historique N-1 (2u et 3u) pour stabiliser le stock sur un produit à faible rotation, une quantité de 2 unités est retenue pour couvrir le seuil de 30 jours.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 209 tokens
- **Total**: 1,129 tokens



</details>


<details>
<summary><strong>21. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande fin septembre. Le délai écoulé dépasse largement le cycle habituel, créant un doute sur l'état du stock. Par principe de précaution B2B, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. En cas de rotation très faible et de doute sur la quantité, la règle impose de choisir la valeur la plus basse pour éviter le surstockage. La médiane basse de 1 unité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 171 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>22. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible (1u), le délai écoulé dépasse largement le cycle habituel suggéré par l'historique N-1 (août). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes historiques pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 130 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>23. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le produit présente une rotation très faible avec une dernière commande enregistrée il y a plus de 100 jours (18 juillet). Bien que le cycle soit irrégulier, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le seuil de 30 jours est largement dépassé par rapport à l'intervalle historique. ÉTAPE 2 : L'historique récent et N-1 montre une quantité constante de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 166 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>24. [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours sans mouvement pour un produit dont le cycle historique (N-1) suggère une rotation estivale et automnale. Bien que la rotation soit très faible, le principe de précaution B2B et l'incertitude sur le cycle imposent de prévoir une unité pour éviter une rupture prolongée si la demande se manifeste. La quantité retenue correspond à la médiane des commandes historiques (1u).

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 114 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>25. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés précédemment (environ 90-100 jours entre les mouvements historiques). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais constante, un besoin est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constante de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 178 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>26. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable et l'historique N-1 montre un besoin durant la période estivale/automne. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très bas (1u et 2u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 176 tokens
- **Total**: 1,063 tokens



</details>




### Donnees d'Input LLM (26 produits)


<details>
<summary><strong>1. [LD011] LD Organic Kids Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 2u
- 2025-06-17 06:42:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LD015] LD Onion Spread 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 1u
- 2025-06-17 06:42:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 1u
- 2025-06-17 06:42:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 4u
- 2025-06-17 06:42:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [LD009] LD Organic Asparagus Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 2u
- 2025-06-17 06:42:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 4u
- 2025-06-17 06:42:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>7. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 4u
- 2025-06-17 06:42:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 1u
- 2025-06-17 06:42:04: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:34:51: 1u
- 2024-07-10 07:09:01: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 3u
- 2025-07-18 08:19:53: 2u
- 2025-06-17 06:42:04: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:34:51: 3u
- 2024-07-10 07:09:01: 0u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 1u
- 2025-06-17 06:42:04: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:34:51: 4u
- 2024-07-10 07:09:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 3u
- 2025-07-18 08:19:53: 2u
- 2025-06-17 06:42:04: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:34:51: 3u
- 2024-07-10 07:09:01: 0u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 4u
- 2025-07-18 08:19:53: 3u
- 2025-06-17 06:42:04: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:34:51: 3u
- 2024-07-10 07:09:01: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 2u
- 2025-07-18 08:19:53: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 06:49:56: 1u
- 2024-08-23 08:34:51: 3u
- 2024-07-10 07:09:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 1u
- 2025-07-18 08:19:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 06:49:56: 1u
- 2024-08-23 08:34:51: 2u
- 2024-07-10 07:09:01: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 4u
- 2025-07-18 08:19:53: 1u
- 2025-06-17 06:42:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 06:49:56: 2u
- 2024-07-10 07:09:01: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:36:38: 1u
- 2025-07-18 08:19:53: 4u
- 2025-06-17 06:42:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 06:49:56: 2u
- 2024-08-23 08:34:51: 3u
- 2024-07-10 07:09:01: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:19:53: 3u
- 2025-06-17 06:42:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:19:53: 2u
- 2025-06-17 06:42:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:34:51: 2u
- 2024-07-10 07:09:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:19:53: 2u
- 2025-06-17 06:42:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:19:53: 1u
- 2025-06-17 06:42:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:34:51: 3u
- 2024-07-10 07:09:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>21. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:19:53: 2u
- 2025-06-17 06:42:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 06:49:56: 1u
- 2024-07-10 07:09:01: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:19:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:34:51: 1u
- 2024-07-10 07:09:01: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>23. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:19:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 07:09:01: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>24. [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:19:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:34:51: 1u
- 2024-07-10 07:09:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>25. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 06:42:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 06:49:56: 1u
- 2024-07-10 07:09:01: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>26. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 06:42:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 07:09:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (21)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Predicted 1u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Predicted 1u but not ordered |
| [LD012] LD Organic Samphire Spread 135 g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | Predicted 3u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Predicted 4u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 3 | Predicted 3u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Predicted 2u but not ordered |
| [TVF015] TVF TARTINADE BIO AUBERGINE 380G | 1 | Predicted 1u but not ordered |
| [TVF016] TVF TARTINADE BIO POIS CHICHES 380G | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:57.575Z*
