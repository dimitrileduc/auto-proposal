# Rapport Backtest - Client DLL AD WEZEMAAL WEDIS

## Contexte

- **Client** : DLL AD WEZEMAAL WEDIS (ID: 38845)
- **Commande réelle** : S39846
- **Date commande** : 2025-10-21 12:06:38
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 30
- **Tokens**: 29,158 input + 4,698 output = 33,856 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.5% | 29 produits prédits, 19 corrects |
| **Rappel** | 90.5% | 21 produits réels, 19 détectés |
| **F1-Score** | 76.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.79 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 39.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -42.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 15 | Avec erreur |

---

## True Positives (19)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (19 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 à 40 jours (juin, juillet, août, septembre). La dernière commande datant du 01/09/2025, soit il y a 49 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Conformément à la règle de la médiane sur les commandes récentes (toutes à 1u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,023 tokens
- **Output**: 143 tokens
- **Total**: 1,166 tokens



</details>


<details>
<summary><strong>2. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle montre une commande récente le 01/09/2025, soit il y a environ 50 jours. Historiquement, une commande a été passée à la même période l'année dernière (03/09/2024). Bien que la rotation soit faible et irrégulière, le délai depuis la dernière commande dépasse largement le cycle de réapprovisionnement habituel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et au volume historique stable pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 157 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande récent montre une fréquence d'environ 30 à 35 jours (juin, juillet, août, septembre). La dernière commande datant du 1er septembre, soit il y a 49 jours, le cycle habituel est largement dépassé. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. Concernant la quantité, l'historique récent affiche une médiane de 1 unité (3 commandes sur 4 à 1u). Conformément à la règle de ne pas surestimer sur les faibles rotations et de privilégier la médiane, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,008 tokens
- **Output**: 161 tokens
- **Total**: 1,169 tokens



</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 60 à 90 jours. La dernière commande datant du 1er septembre (soit 49 jours), le risque de rupture est élevé dans l'horizon des 30 prochains jours (seuil de réapprovisionnement). Bien que l'historique N-1 montre des quantités de 2u, les commandes récentes de 2025 sont systématiquement de 1u. En suivant la règle de la médiane récente et le principe de ne pas surestimer les faibles rotations, une quantité de 1u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,009 tokens
- **Output**: 144 tokens
- **Total**: 1,153 tokens



</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande régulier d'environ 30 à 45 jours (août, septembre). La dernière commande datant du 1er septembre, soit il y a 49 jours, le délai dépasse largement le cycle habituel et entre dans la fenêtre critique des 30 jours de réapprovisionnement (Replenishment Threshold Days). Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes récentes et de l'historique N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 145 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>6. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 01/09/2025, soit 49 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une activité en septembre. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est présent compte tenu du délai écoulé depuis la dernière unité vendue. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une rotation très faible et constante de 1 unité par commande (juin et septembre 2025). La médiane des commandes récentes est de 1. Conformément aux règles sur les rotations faibles, on maintient la quantité minimale de 1 unité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 194 tokens
- **Total**: 1,167 tokens



</details>


<details>
<summary><strong>7. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 01/09/2025, soit 49 jours avant la date actuelle. Le cycle récent observé entre les deux dernières commandes est de 28 jours. Le délai actuel dépasse largement ce cycle moyen (49 jours > 28 jours), ce qui indique un risque de rupture imminent ou un besoin non couvert pour la période de 30 jours à venir. En suivant le principe de précaution B2B et la règle de la médiane sur l'historique récent (1u en août et septembre), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 143 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>8. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION) : Le cycle de commande moyen observé est d'environ 30 à 35 jours (juillet-août-septembre). La dernière commande remonte au 01/09/2025, soit 49 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent. ÉTAPE 2 (ESTIMATION) : L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). Bien qu'une commande de 3u ait été observée l'an dernier, la médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 995 tokens
- **Output**: 190 tokens
- **Total**: 1,185 tokens



</details>


<details>
<summary><strong>9. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 01/09/2025, soit 49 jours. Le cycle moyen observé entre les commandes récentes est d'environ 40 à 50 jours (28 jours entre août et sept, 54 jours entre juin et août). Nous sommes actuellement à la limite supérieure de ce cycle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une stabilité absolue avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 976 tokens
- **Output**: 187 tokens
- **Total**: 1,163 tokens



</details>


<details>
<summary><strong>10. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande moyen observé est d'environ 30 à 40 jours. La dernière commande datant du 04/08/2025, le délai écoulé (77 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité en septembre. Par principe de précaution B2B et pour éviter une rupture prolongée, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 991 tokens
- **Output**: 135 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>11. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit plus de 75 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité sur la période septembre/octobre. En application du principe de précaution B2B (cycle irrégulier = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité quasi systématique à 1 unité par commande. La médiane des quantités est de 1. On maintient donc cette quantité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 156 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 04/08/2025, soit 77 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais persistant (environ tous les 2 à 3 mois). En appliquant le principe de précaution B2B et le seuil de réapprovisionnement de 30 jours, le risque de rupture est identifié car nous dépassons largement le délai habituel entre deux commandes. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la tendance de rotation faible observée sur 2025.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 140 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>13. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/08/2025, soit plus de 75 jours. Bien que le cycle historique soit irrégulier (environ 30 à 45 jours), l'absence de commande récente combinée à l'historique de l'année précédente (commandes en septembre/octobre) indique un besoin probable ou une rupture de stock. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes oscillent entre 1u et 2u. La médiane de l'historique récent est de 2u. Conformément aux règles de rotation faible, nous maintenons ce volume sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 181 tokens
- **Total**: 1,188 tokens



</details>


<details>
<summary><strong>14. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/08/2025, soit 77 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité sur la période septembre/octobre (3u en sept 2024). Le cycle moyen est irrégulier, ce qui impose l'application du principe de précaution B2B pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont stables à 1u. Conformément à la règle sur les rotations faibles (1-2u) et à l'utilisation de la médiane pour éviter le surstockage, la quantité recommandée est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 170 tokens
- **Total**: 1,144 tokens



</details>


<details>
<summary><strong>15. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours sur la période récente (juin à août). La dernière commande datant du 4 août 2025, le délai écoulé (77 jours) dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours, indiquant un besoin imminent ou une rupture probable. Bien que l'historique N-1 montre des volumes légèrement supérieurs (médiane de 2u), la tendance récente est stabilisée à 1 unité par commande. En application de la règle de précaution B2B et du choix de la quantité la plus basse en cas de rotation faible, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 991 tokens
- **Output**: 166 tokens
- **Total**: 1,157 tokens



</details>


<details>
<summary><strong>16. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 22 jours (entre le 11/06 et le 03/07). Depuis la dernière commande du 03/07/2025, plus de 100 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit très faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes précédentes (1u et 1u), conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 164 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>17. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le produit présente une rotation très faible et irrégulière. La dernière commande remonte au 03/07/2025 (soit plus de 100 jours), ce qui dépasse largement les cycles observés précédemment. Bien que la demande soit sporadique, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande de 1u avait été enregistrée à la même période l'année précédente (septembre). Conformément aux règles de gestion des faibles rotations, la quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 144 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>18. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 03/07/2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une commande en septembre (1u). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et face à un cycle difficile à déterminer, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques et au maintien du stock pour un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 134 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>19. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte à plus de 130 jours (11 juin 2025), ce qui dépasse largement les cycles de rotation observés historiquement. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout à l'approche de périodes où des commandes ont été enregistrées l'année précédente. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane et à la dernière commande enregistrée.

**Tokens utilises pour cette prediction:**
- **Input**: 934 tokens
- **Output**: 134 tokens
- **Total**: 1,068 tokens



</details>




### Donnees d'Input LLM (19 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u
- 2025-08-04 13:24:05: 1u
- 2025-07-03 12:07:29: 1u
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:21:52: 1u
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u
- 2025-07-03 12:07:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 0u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:45:37: 2u
- 2025-08-04 13:24:05: 1u
- 2025-07-03 12:07:29: 1u
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 09:56:31: 2u
- 2024-07-18 13:08:11: 3u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 4u
- 2024-03-28 15:42:01: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u
- 2025-07-03 12:07:29: 1u
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:21:52: 1u
- 2024-09-03 09:56:31: 2u
- 2024-07-18 13:08:11: 2u
- 2024-07-02 10:08:11: 2u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u
- 2025-08-04 13:24:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:21:52: 1u
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 1u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 0u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 3u
- 2024-03-28 15:42:01: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u
- 2025-08-04 13:24:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-18 13:08:11: 0u
- 2024-07-02 10:08:11: 4u
- 2024-05-23 07:58:15: 2u
- 2024-03-28 15:42:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u
- 2025-08-04 13:24:05: 1u
- 2025-07-03 12:07:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:21:52: 3u
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 1u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u
- 2025-08-04 13:24:05: 1u
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 1u
- 2024-05-23 07:58:15: 1u
- 2024-03-28 15:42:01: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:24:05: 1u
- 2025-07-03 12:07:29: 1u
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 0u
- 2024-07-02 10:08:11: 1u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:24:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 1u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:24:05: 1u
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 09:56:31: 2u
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:24:05: 2u
- 2025-07-03 12:07:29: 1u
- 2025-06-11 13:25:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:21:52: 3u
- 2024-09-03 09:56:31: 3u
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 1u
- 2024-05-23 07:58:15: 4u
- 2024-03-28 15:42:01: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:24:05: 1u
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:21:52: 3u
- 2024-07-18 13:08:11: 3u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 1u
- 2024-03-28 15:42:01: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:24:05: 1u
- 2025-07-03 12:07:29: 1u
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:21:52: 3u
- 2024-07-18 13:08:11: 0u
- 2024-07-02 10:08:11: 2u
- 2024-05-23 07:58:15: 1u
- 2024-03-28 15:42:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:07:29: 1u
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:07:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 0u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:07:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:21:52: 1u
- 2024-07-18 13:08:11: 3u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 1u
- 2024-03-28 15:42:01: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>19. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 13:25:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-18 13:08:11: 0u
- 2024-07-02 10:08:11: 2u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Never ordered in previous analysis window (no history) |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:16:26.102Z*
