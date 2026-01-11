# Rapport Backtest - Client CRF MARKET EMBOURG DESADIS

## Contexte

- **Client** : CRF MARKET EMBOURG DESADIS (ID: 38740)
- **Commande réelle** : S40077
- **Date commande** : 2025-11-04 07:10:58
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 50
- **Tokens**: 45,694 input + 7,524 output = 53,218 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 45 produits prédits, 18 corrects |
| **Rappel** | 100.0% | 18 produits réels, 18 détectés |
| **F1-Score** | 57.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.06 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 4.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 5.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 4.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 17 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (18)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LD015] LD Onion Spread 180g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LD011] LD Organic Kids Spread 180 g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (18 produits)


<details>
<summary><strong>1. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle de commande moyen est d'environ 19 jours (intervalles de 12, 18 et 28 jours). La dernière commande remonte au 02/10/2025, soit 32 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est avéré. ÉTAPE 2 : L'historique récent montre des quantités de 3, 1, 2 et 3 unités. La médiane de ces commandes est de 2,5. Conformément à la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 180 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 12, 18 et 29 jours. La dernière commande remontant au 02/10/2025 (soit 32 jours avant la date actuelle), le délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. Pour la quantité, l'historique récent présente des volumes de 1, 2 et 3 unités. Conformément à la règle de la médiane et à la prudence sur les faibles rotations, une quantité de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 927 tokens
- **Output**: 150 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>3. [LD015] LD Onion Spread 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 57 jours (entre août et octobre). La dernière commande date du 02/10/2025, soit 32 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 62 jours d'ici la fin de la période de vigilance, dépassant le cycle moyen constaté. Le risque de rupture est réel. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont identiques (2u). La médiane et la tendance récente indiquent un besoin stable de 2 unités. Conformément au principe de précaution B2B et à la régularité constatée, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 178 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>4. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant de 27 à 55 jours. La dernière commande remonte au 02/10/2025, soit 32 jours avant la date actuelle. Ce délai dépasse 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes est de 1 unité (3 commandes sur 4 à 1u). Conformément aux règles de rotation faible et de prudence, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 157 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 30 à 40 jours (07-23, 09-03, 10-02). La dernière commande datant du 2 octobre, soit il y a 32 jours, nous avons dépassé 70% du cycle moyen, ce qui indique un risque imminent de rupture dans l'horizon des 30 jours (Replenishment Threshold). Conformément au principe de précaution B2B et à la règle de rotation faible, la quantité retenue est de 1 unité, correspondant à la médiane et à la constante observée sur les trois dernières commandes.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 153 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 30 à 60 jours (dernières commandes le 03/09 et le 02/10). La dernière commande datant d'il y a 32 jours (02/10), nous avons atteint 100% du cycle moyen constaté récemment. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. Conformément à la règle de la médiane sur l'historique récent et N-1 (toutes les commandes étant de 1 unité), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 160 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>7. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 02/10/2025, soit 32 jours avant la date actuelle. L'historique montre un cycle moyen d'environ 70 à 80 jours, mais avec une commande enregistrée à la même période l'année dernière (26/09/2024). Compte tenu du seuil de réapprovisionnement de 30 jours et du principe de précaution B2B en cas de cycle irrégulier, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 194 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours (06/08, 03/09, 02/10). La dernière commande datant du 02/10, soit il y a 32 jours, le seuil de réapprovisionnement de 30 jours est atteint. Il existe un risque de rupture imminent. Concernant la quantité, l'historique récent et N-1 affiche une stabilité forte avec une médiane de 2 unités. Conformément à la règle de maintien des rotations régulières, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 146 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>9. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen observé est d'environ 40 jours. La dernière commande remonte au 15 septembre, soit 49 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et l'horizon de réapprovisionnement de 30 jours. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane est de 1,5u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute ou de faible rotation), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 162 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>10. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'historique récent montre deux commandes espacées de 40 jours (06/08 au 15/09). Au 03/11, 49 jours se sont écoulés depuis la dernière commande, ce qui dépasse le cycle moyen observé. Bien que la rotation soit faible, le principe de précaution B2B et le dépassement du cycle habituel indiquent un risque de rupture imminent dans l'horizon des 30 jours. Conformément aux règles de gestion des faibles rotations (1-2u) et à l'application de la médiane historique (médiane entre 1 et 3), la quantité de 1 unité est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 160 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>11. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 septembre, soit 49 jours. Le cycle précédent était de 40 jours. Nous avons dépassé ce cycle, et avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est avéré ou le stock est épuisé. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 3u et 1u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute pour les produits à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 148 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>12. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 15 septembre, soit 49 jours avant la date actuelle. Bien que le cycle historique soit de 40 jours, l'absence de commande en octobre et le délai actuel dépassent largement le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 (QUANTITÉ) : Les commandes récentes sont de 1u et 2u. La médiane est de 1,5u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 168 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>13. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 2 à 3 mois. La dernière commande remontant au 15 septembre 2025 (soit 49 jours), nous entrons dans la fenêtre de risque de rupture compte tenu du seuil de 30 jours. Bien que la dernière commande fût de 1u, l'historique récent et N-1 montre une médiane stable de 2u. En application du principe de précaution B2B et pour maintenir le stock sur ce produit à rotation lente mais régulière, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 141 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>14. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 14 à 28 jours. La dernière commande remontant au 03/09/2025 (soit 61 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin non couvert. En suivant la règle de la médiane sur les commandes récentes (1u, 1u, 1u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 142 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>15. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 42 jours (entre juillet et septembre). Au 3 novembre, 61 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture ou un besoin imminent. En suivant la règle de précaution B2B et en se basant sur la médiane des quantités récentes (1u), une commande de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 132 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>16. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 42 jours (entre juillet et septembre). Au 3 novembre, 61 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture ou un besoin imminent. En suivant la règle de la médiane sur les quantités récentes (1u et 1u) et le principe de précaution pour les faibles rotations, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 128 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>17. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité sporadique. En l'absence de données récentes et compte tenu du principe de précaution B2B, un risque de rupture est identifié pour couvrir le cycle potentiel. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles de gestion des rotations faibles, la quantité maintenue est de 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 134 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>18. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière basée sur l'historique N-1 (intervalle de 2 mois entre les deux seules commandes connues). En l'absence de commandes récentes et face à un cycle difficile à déterminer, le principe de précaution B2B s'applique pour éviter une rupture potentielle. La quantité retenue correspond à la médiane historique (1u), conformément à la règle de maintien des faibles rotations sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 102 tokens
- **Total**: 995 tokens



</details>




### Donnees d'Input LLM (18 produits)


<details>
<summary><strong>1. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:18:26: 3u
- 2025-09-15 12:13:28: 1u
- 2025-09-03 14:41:32: 2u
- 2025-08-06 11:32:29: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:18:26: 2u
- 2025-09-15 12:13:28: 1u
- 2025-09-03 14:41:32: 2u
- 2025-08-06 11:32:29: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:18:26: 2u
- 2025-08-06 11:32:29: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:18:26: 2u
- 2025-09-15 12:13:28: 1u
- 2025-08-06 11:32:29: 1u
- 2025-06-30 13:23:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-21 08:44:16: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:18:26: 1u
- 2025-09-03 14:41:32: 1u
- 2025-07-23 11:10:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:00:40: 2u
- 2024-06-21 08:44:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:18:26: 1u
- 2025-09-03 14:41:32: 1u
- 2025-06-30 13:23:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:37:04: 1u
- 2024-06-21 08:44:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:18:26: 1u
- 2025-07-23 11:10:46: 1u
- 2025-06-30 13:23:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:37:04: 1u
- 2024-08-14 06:00:40: 1u
- 2024-05-28 06:38:38: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:18:26: 2u
- 2025-09-03 14:41:32: 2u
- 2025-08-06 11:32:29: 1u
- 2025-06-30 13:23:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:00:40: 2u
- 2024-06-21 08:44:16: 1u
- 2024-05-28 06:38:38: 2u
- 2024-03-26 15:27:00: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LD011] LD Organic Kids Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 12:13:28: 1u
- 2025-08-06 11:32:29: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 12:13:28: 1u
- 2025-08-06 11:32:29: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 12:13:28: 1u
- 2025-08-06 11:32:29: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 12:13:28: 2u
- 2025-08-06 11:32:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 12:13:28: 1u
- 2025-07-23 11:10:46: 2u
- 2025-06-30 13:23:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 06:37:04: 1u
- 2024-08-14 06:00:40: 2u
- 2024-06-21 08:44:16: 2u
- 2024-05-28 06:38:38: 2u
- 2024-03-26 15:27:00: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:41:32: 1u
- 2025-08-06 11:32:29: 1u
- 2025-07-23 11:10:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:00:40: 2u
- 2024-06-21 08:44:16: 1u
- 2024-05-28 06:38:38: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:41:32: 1u
- 2025-07-23 11:10:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:41:32: 1u
- 2025-07-23 11:10:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:00:40: 1u
- 2024-06-21 08:44:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-28 06:38:38: 1u
- 2024-03-26 15:27:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (27)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Predicted 2u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [LD014] LD Organic Avocado Spread 180 g | 2 | Predicted 2u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Predicted 1u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Predicted 1u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Predicted 1u but not ordered |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:10.104Z*
