# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Kuringen

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Kuringen (ID: 17267)
- **Commande réelle** : S40156
- **Date commande** : 2025-11-06 07:10:04
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 20,094 input + 3,574 output = 23,668 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 22 produits prédits, 22 corrects |
| **Rappel** | 91.7% | 24 produits réels, 22 détectés |
| **F1-Score** | 95.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.64 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

---

## True Positives (22)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 6 | 2.0 | 33.3% | partial | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 8 | 8 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 6 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | 6 | 2.0 | 33.3% | partial | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (22 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 4 mois entre mai et septembre 2024). Un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) est extrêmement stable avec des commandes systématiques de 2 unités. La médiane est de 2. Conformément à la règle sur les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 177 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 60-110 jours). Un risque de rupture est probable à l'horizon de 30 jours. La quantité retenue est de 2 unités, correspondant à la médiane et au volume de la commande la plus récente, afin de maintenir le stock sans surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 133 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ 60-80 jours). En application du principe de précaution B2B et face à un cycle incertain, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 4u. L'historique N-1 oscille entre 2u, 4u et 6u. La médiane de l'ensemble des données est de 4u. Conformément aux règles, on maintient cette quantité médiane pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 193 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>4. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse montre une rotation très faible et irrégulière (1 unité par commande). La dernière commande remonte à plus de 120 jours (30 juin 2025), ce qui dépasse largement les cycles observés précédemment. En application du principe de précaution B2B, un besoin est détecté car le délai depuis la dernière commande suggère un risque de rupture de stock imminent. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé, afin de maintenir le stock sans risque de surstockage pour ce type de produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 136 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 120 jours sans activité. Bien que le cycle historique soit irrégulier et de faible rotation, le principe de précaution B2B s'applique ici car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (avril, mai, septembre). Un risque de rupture ou un besoin de réapprovisionnement est probable pour maintenir le stock en rayon. Conformément à la règle de la médiane sur les faibles rotations (1-2u), la quantité minimale de 1 unité est préconisée pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 149 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées de 4 à 9 mois. Dans un contexte B2B, le délai écoulé depuis la dernière unité vendue et l'approche de la fin d'année (période de consommation potentielle) induisent un doute sur le cycle. En application du principe de précaution, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique est constant à 1 unité par commande (médiane = 1). Conformément aux règles pour les rotations très faibles, on maintient la quantité minimale de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 185 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>7. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que l'historique récent soit limité, l'intervalle moyen constaté en N-1 (environ 2 à 4 mois) est largement dépassé. En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique N-1 montre des volumes de 4u et 8u. La commande la plus récente était de 6u. La médiane de l'historique global se situe à 4u. En cas de doute et pour éviter le surstockage sur un produit à rotation lente, la valeur la plus basse de la médiane (4u) est privilégiée.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 204 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>8. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 120 jours sans activité pour ce produit. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles historiques observés (environ 4 à 5 mois entre les commandes en 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes et au maintien du stock pour une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 141 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 120 jours sans activité. Bien que l'historique soit irrégulier, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés précédemment. Un risque de rupture est identifié pour couvrir les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la dernière commande connue, afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 124 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>10. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 120 jours sans activité. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés précédemment. En l'absence de cycle régulier (doute sur la rotation), une commande est préconisée pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (2u en juin 2025 et sept 2024), respectant la règle de ne pas augmenter les quantités sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 152 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>11. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 8u vs Médiane: 8u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 8u
- **Reel commande**: 8u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 30 juin 2025, soit plus de 120 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (environ 60 à 110 jours). Bien que la rotation soit lente, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu en septembre l'année dernière. La quantité retenue est de 8 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes historiques récentes et passées.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 136 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>12. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 6u vs Médiane: 5u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 5u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que l'historique récent soit limité à une seule commande, l'historique N-1 montre une activité à cette période (septembre/octobre). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. En l'absence de cycle de rotation fréquent, la quantité de la dernière commande récente (6u) est retenue comme référence médiane pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 161 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>13. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 60 à 110 jours). Un risque de rupture est probable. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) montre une constance absolue à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 165 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>14. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit faible, l'historique montre des commandes espacées de 2 à 4 mois. Le délai actuel dépasse largement le cycle habituel, créant un risque de rupture imminent ou un besoin de renouvellement de stock pour la période de fin d'année (comparable à l'activité de septembre N-1). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité quasi constante à 2 unités. La médiane des commandes est de 2u. Conformément à la règle de maintien des rotations faibles, la quantité retenue est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 189 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>15. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que l'historique récent soit espacé, le délai dépasse largement les cycles habituels observés l'année précédente (environ 60-80 jours). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 2u, 4u, 4u et 6u. La médiane des commandes historiques est de 4u. Conformément aux règles de gestion, nous privilégions la médiane et évitons le pic récent de 6u pour ne pas surestimer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 193 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>16. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles historiques observés (environ 5-6 mois). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une constance absolue à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité habituelle de 1 unité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 177 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>17. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible et irrégulière (cycle difficile à déterminer), le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le délai depuis la dernière commande dépasse largement les seuils habituels. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane et à la valeur constante de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 136 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>18. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que le cycle soit irrégulier et la rotation faible, le délai écoulé dépasse largement les intervalles observés historiquement (environ 60-90 jours en 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes constants entre 1u et 3u. La dernière commande était de 2u et la médiane des commandes (2024-2025) est de 2u. Conformément à la règle de maintien des rotations faibles sans surestimation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 206 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>19. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés précédemment. Un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u et 2u. La médiane des commandes récentes et historiques est de 2u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 159 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>20. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (cycle moyen estimé à environ 120-130 jours). La dernière commande remonte au 30 juin 2025, soit plus de 125 jours. Bien que le cycle soit difficile à déterminer avec précision, le principe de précaution B2B s'applique car nous avons largement dépassé l'intervalle historique constaté entre les commandes de 2024. Un risque de rupture est probable dans l'horizon des 30 jours. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 160 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>21. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés précédemment (environ 4 mois entre mai et septembre 2024). Un besoin est donc probable pour éviter une rupture prolongée. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane constante de l'historique.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 132 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>22. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées (mai, septembre, juin). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour couvrir la période de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité de 1 unité est maintenue pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 166 tokens
- **Total**: 1,074 tokens



</details>




### Donnees d'Input LLM (22 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 2u
- 2024-05-27 12:13:34: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 2u
- 2024-05-27 12:13:34: 1u
- 2024-04-05 07:35:17: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 6u
- 2024-05-27 12:13:34: 2u
- 2024-04-05 07:35:17: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 1u
- 2024-05-27 12:13:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 2u
- 2024-05-27 12:13:34: 1u
- 2024-04-05 07:35:17: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 1u
- 2024-05-27 12:13:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 4u
- 2024-05-27 12:13:34: 4u
- 2024-04-05 07:35:17: 8u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>8. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 2u
- 2024-04-05 07:35:17: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 2u
- 2024-05-27 12:13:34: 1u
- 2024-04-05 07:35:17: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 2u
- 2024-04-05 07:35:17: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 8u
- 2024-05-27 12:13:34: 8u
- 2024-04-05 07:35:17: 6u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>12. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 4u
- 2024-05-27 12:13:34: 8u
- 2024-04-05 07:35:17: 2u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>13. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 1u
- 2024-05-27 12:13:34: 1u
- 2024-04-05 07:35:17: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 2u
- 2024-05-27 12:13:34: 2u
- 2024-04-05 07:35:17: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 4u
- 2024-05-27 12:13:34: 4u
- 2024-04-05 07:35:17: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>16. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 1u
- 2024-04-05 07:35:17: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 1u
- 2024-04-05 07:35:17: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 2u
- 2024-05-27 12:13:34: 1u
- 2024-04-05 07:35:17: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>19. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 2u
- 2024-05-27 12:13:34: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 1u
- 2024-05-27 12:13:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 1u
- 2024-05-27 12:13:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 07:52:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:58:06: 1u
- 2024-05-27 12:13:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:18:39.902Z*
