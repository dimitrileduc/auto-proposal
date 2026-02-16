# Rapport Backtest - Client DLL AD BATTICE

## Contexte

- **Client** : DLL AD BATTICE (ID: 38785)
- **Commande réelle** : S40133
- **Date commande** : 2025-11-05 10:30:05
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 37
- **Tokens**: 33,946 input + 6,035 output = 39,981 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 69.7% | 33 produits prédits, 23 corrects |
| **Rappel** | 100.0% | 23 produits réels, 23 détectés |
| **F1-Score** | 82.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.52 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -24.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

---

## True Positives (23)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (23 produits)


<details>
<summary><strong>1. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 03/10/2025, soit 32 jours avant la date actuelle. L'historique montre une rotation très faible mais régulière (environ tous les 3-4 mois en N-1, mais avec une commande récente en octobre). Étant donné que nous avons dépassé le seuil de 30 jours (Replenishment Threshold Days) et que le cycle est irrégulier, le principe de précaution B2B s'applique pour éviter une rupture sur ce produit à faible rotation. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique complet (récent et N-1) est strictement composé de commandes de 1 unité. La médiane est donc de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 208 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>2. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 30 et 70 jours. La dernière commande remonte au 03/10/2025, soit 32 jours avant la date actuelle. Étant donné que nous entrons dans la fenêtre critique par rapport au cycle moyen et que le seuil de réapprovisionnement est de 30 jours, un risque de rupture est identifié (principe de précaution B2B). La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la dernière commande enregistrée, respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 148 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/10/2025, soit il y a 32 jours. L'historique montre un cycle de réapprovisionnement d'environ 2 à 3 mois. Bien que le cycle ne soit pas encore totalement atteint, l'historique N-1 montre une commande début octobre suivie d'une période de consommation. En application du principe de précaution B2B et pour couvrir l'horizon des 30 prochains jours (Replenishment Threshold Days), un besoin est identifié. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 2 unités. L'historique N-1 oscillait entre 2 et 4 unités. Conformément à la règle de privilégier la médiane du récent et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 210 tokens
- **Total**: 1,168 tokens



</details>


<details>
<summary><strong>4. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen constaté est d'environ 35 à 40 jours. La dernière commande remonte au 03/10/2025, soit 32 jours avant la date actuelle. Étant donné que nous sommes à plus de 70% du cycle habituel et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est imminent. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u, 2u et 1u. La médiane de ces commandes est de 1u. Conformément à la règle de prudence sur les faibles rotations, on maintient la quantité de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 168 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/10/2025, soit il y a 32 jours. L'historique montre une commande récurrente début octobre (2024 et 2025). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est présent car le cycle de rotation habituel est atteint. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité à 1 unité (médiane de 1u). Conformément à la règle de précaution B2B et au maintien des rotations faibles, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 164 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 35 à 40 jours (27/08 au 03/10). Depuis la dernière commande du 3 octobre, 32 jours se sont écoulés, ce qui dépasse le seuil de 70% du cycle habituel. Bien que la dernière commande soit de 1u, la médiane des commandes récentes (1, 2, 3) est de 2u. L'historique N-1 confirme également une activité sur cette période (3u en octobre 2024). Par mesure de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, une commande est nécessaire. La quantité retenue est la médiane de 2u, évitant le pic de 3u pour ne pas surestimer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 198 tokens
- **Total**: 1,171 tokens



</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/10/2025, soit 32 jours avant la date actuelle (04/11/2025). Le cycle moyen constaté est d'environ 35-40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane des commandes récentes est de 2u, mais la dernière commande (octobre 2025) ainsi que la commande N-1 à la même période (octobre 2024) sont de 1u. En suivant la règle de prudence B2B et en privilégiant la valeur la plus basse en cas de doute sur une rotation faible, la quantité de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 211 tokens
- **Total**: 1,233 tokens



</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 60 jours entre les réapprovisionnements. La dernière commande datant du 3 octobre 2025 (il y a 32 jours), le risque de rupture est élevé d'ici les 30 prochains jours (seuil de réapprovisionnement), d'autant plus que l'historique N-1 montre une activité régulière en octobre/novembre. En appliquant la règle de la médiane sur les commandes récentes (2u, 1u, 2u), la quantité recommandée est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 149 tokens
- **Total**: 1,154 tokens



</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 03/10/2025, soit 32 jours avant la date actuelle. L'historique montre un cycle de commande d'environ 37 jours (entre août et octobre 2025) et une présence de commande à la même période l'année précédente (02/10/2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle de renouvellement est atteint. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont constantes à 1 unité. Bien qu'une commande de 2 unités ait eu lieu l'an dernier, la médiane des commandes récentes est de 1. En respectant le principe de précaution B2B sans surestimer le stock, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 208 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>10. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/10/2025, soit il y a 32 jours. L'historique montre un cycle de réapprovisionnement d'environ 2 à 3 mois. Bien que le cycle ne soit pas encore totalement atteint, l'historique N-1 indique une commande début octobre suivie d'une période de consommation. En application du principe de précaution B2B (si doute sur le cycle → prévoir), une commande est nécessaire pour couvrir les 30 prochains jours et éviter une rupture. ÉTAPE 2 : Estimation quantité. L'historique est extrêmement stable avec des commandes systématiques de 1 unité. La médiane des commandes récentes et passées est de 1. On maintient donc cette quantité de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 932 tokens
- **Output**: 184 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>11. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 27 jours puis 72 jours. La dernière commande remonte au 03/10/2025, soit 32 jours avant la date actuelle. Ce délai dépasse le seuil de réapprovisionnement de 30 jours et correspond à la phase de risque de rupture selon le principe de précaution B2B. La rotation est faible mais constante (1 unité par commande). En suivant la règle de la médiane des commandes récentes et le maintien des quantités pour les rotations de 1-2 unités, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 140 tokens
- **Total**: 1,048 tokens



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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 03/10/2025, soit 32 jours avant la date actuelle (04/11/2025). L'historique montre un cycle de rotation d'environ 3 à 4 mois, mais avec une commande enregistrée à la même période l'année dernière (02/10/2024). Compte tenu du seuil de réapprovisionnement de 30 jours et de l'irrégularité du cycle, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 1u. Bien qu'une commande de 2u ait eu lieu l'année dernière, la médiane des commandes récentes et la règle de prudence sur les faibles rotations imposent de maintenir une quantité de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 211 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>13. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 35 à 60 jours. La dernière commande remontant au 27 août 2025 (soit plus de 65 jours), le risque de rupture est imminent ou déjà avéré, dépassant largement le seuil de réapprovisionnement de 30 jours. Conformément au principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 2 unités, ce qui correspond à la médiane des commandes récentes et à la quantité la plus fréquente observée dans l'historique (mode), assurant une couverture stable sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 146 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>14. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit 69 jours. L'historique montre des cycles longs et irréguliers (environ 30 à 150 jours). Compte tenu du délai écoulé et du principe de précaution B2B, il existe un risque de rupture ou un besoin imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique (récent et N-1) est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 164 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>15. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'environ 35 à 40 jours entre les commandes récentes. La dernière commande datant du 27 août 2025, le délai écoulé (environ 69 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture ou un besoin non couvert. En suivant la règle de la médiane des commandes récentes (2u en juillet et août 2025), la quantité préconisée est de 2 unités, privilégiant la stabilité du stock pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 142 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>16. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 30 à 35 jours entre juin et août 2025. Depuis la dernière commande du 27 août, plus de 60 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture ou un besoin imminent. En appliquant la règle de la médiane sur l'historique récent (2u, 1u, 1u), la médiane est de 1u. Conformément au principe de précaution B2B et à la règle de choisir la valeur la plus basse en cas de doute sur une faible rotation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 170 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>17. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 27 et 69 jours. La dernière commande remontant au 27 août 2025 (soit 69 jours avant la date actuelle), le seuil de réapprovisionnement est largement atteint et le risque de rupture est imminent. Bien que l'historique récent montre une volatilité (1u à 4u), la médiane des commandes récentes se situe à 2u. En application du principe de précaution B2B et de la règle de la médiane pour éviter les pics exceptionnels (comme le 4u d'août), une quantité de 2 unités est préconisée pour couvrir les besoins des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 161 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>18. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 35 à 60 jours. La dernière commande remontant au 27 août 2025 (soit plus de 60 jours), le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Bien que l'historique N-1 montre des volumes de 3 unités, les commandes récentes de 2025 indiquent une tendance à la baisse (1u et 2u). En appliquant la règle de la médiane sur l'historique récent et le principe de précaution B2B sans surestimer, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 159 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>19. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 août 2025, soit plus de 60 jours. Bien que la rotation soit très faible (1-2 unités), le délai écoulé dépasse largement le cycle suggéré par l'historique. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et respectant la règle de ne pas augmenter les stocks sur les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 133 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>20. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 23 juillet 2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit en catalogue. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 162 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>21. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité sur la période octobre/novembre (commande le 02/10/2024). Par principe de précaution B2B et pour éviter une rupture sur un produit à cycle long et irrégulier, un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité par commande. La médiane est de 1. Application de la règle de maintien pour rotation faible (1-2u).

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 171 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>22. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u) et à l'utilisation de la médiane, la quantité de 2 unités est maintenue pour reconstituer le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 175 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>23. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur l'état du stock. En application du principe de précaution B2B (mieux vaut prévenir une rupture incertaine), un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique disponible) pour éviter tout surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 185 tokens
- **Total**: 1,061 tokens



</details>




### Donnees d'Input LLM (23 produits)


<details>
<summary><strong>1. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 1u
- 2024-07-15 13:21:02: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-07-23 11:06:27: 2u
- 2025-06-26 08:50:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:49:55: 2u
- 2024-05-30 14:06:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 2u
- 2025-07-23 11:06:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 3u
- 2024-08-08 07:49:55: 3u
- 2024-05-30 14:06:56: 2u
- 2024-03-27 12:46:44: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-08-27 12:42:53: 2u
- 2025-07-23 11:06:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-07-23 11:06:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 1u
- 2024-08-08 07:49:55: 1u
- 2024-04-30 09:31:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-08-27 12:42:53: 3u
- 2025-07-23 11:06:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 3u
- 2024-07-15 13:21:02: 3u
- 2024-05-30 14:06:56: 1u
- 2024-03-27 12:46:44: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-08-27 12:42:53: 2u
- 2025-07-23 11:06:27: 2u
- 2025-06-26 08:50:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 1u
- 2024-08-08 07:49:55: 3u
- 2024-07-15 13:21:02: 1u
- 2024-05-30 14:06:56: 1u
- 2024-04-30 09:31:30: 2u
- 2024-03-27 12:46:44: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 2u
- 2025-08-27 12:42:53: 1u
- 2025-06-26 08:50:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 3u
- 2024-08-08 07:49:55: 3u
- 2024-07-15 13:21:02: 1u
- 2024-05-30 14:06:56: 2u
- 2024-04-30 09:31:30: 2u
- 2024-03-27 12:46:44: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-08-27 12:42:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 2u
- 2024-07-15 13:21:02: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-08-27 12:42:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 1u
- 2024-07-15 13:21:02: 1u
- 2024-04-30 09:31:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-07-23 11:06:27: 1u
- 2025-06-26 08:50:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-06-26 08:50:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 2u
- 2024-07-15 13:21:02: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 12:42:53: 2u
- 2025-07-23 11:06:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 2u
- 2024-07-15 13:21:02: 1u
- 2024-05-30 14:06:56: 2u
- 2024-03-27 12:46:44: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 12:42:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 1u
- 2024-04-30 09:31:30: 1u
- 2024-03-27 12:46:44: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 12:42:53: 2u
- 2025-07-23 11:06:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:49:55: 3u
- 2024-04-30 09:31:30: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>16. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 12:42:53: 2u
- 2025-07-23 11:06:27: 1u
- 2025-06-26 08:50:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:49:55: 2u
- 2024-03-27 12:46:44: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 12:42:53: 4u
- 2025-07-23 11:06:27: 1u
- 2025-06-26 08:50:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:49:55: 3u
- 2024-05-30 14:06:56: 2u
- 2024-03-27 12:46:44: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 12:42:53: 2u
- 2025-07-23 11:06:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 3u
- 2024-07-15 13:21:02: 3u
- 2024-04-30 09:31:30: 3u
- 2024-03-27 12:46:44: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>19. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 12:42:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 11:06:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 08:50:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:27:51: 1u
- 2024-08-08 07:49:55: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 08:50:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>23. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 08:50:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Predicted 2u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:54.296Z*
