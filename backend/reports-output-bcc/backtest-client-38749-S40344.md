# Rapport Backtest - Client CRF MARKET HOTTON HODICA SA

## Contexte

- **Client** : CRF MARKET HOTTON HODICA SA (ID: 38749)
- **Commande réelle** : S40344
- **Date commande** : 2025-11-14 12:41:32
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 23,543 input + 4,035 output = 27,578 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 82.6% | 23 produits prédits, 19 corrects |
| **Rappel** | 100.0% | 19 produits réels, 19 détectés |
| **F1-Score** | 90.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.11 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 8.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 5.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -8.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 17 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (19)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (19 produits)


<details>
<summary><strong>1. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 70 jours. La dernière commande datant du 03/09/2025 (soit 71 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Bien que les quantités oscillent entre 1u et 4u, l'historique N-1 à la même période (septembre 2024) indique une commande de 1u. En application du principe de précaution B2B et de la règle de choisir la valeur la plus basse en cas de doute sur une rotation irrégulière, une quantité de 1u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 171 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>2. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/09/2025, soit 71 jours d'inactivité. Bien que la rotation soit très faible (1u par commande), le délai écoulé dépasse largement le cycle habituel observé l'année précédente (environ 5 mois entre les commandes). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue correspond à la médiane historique constante de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 124 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>3. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 71 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle habituel suggéré par l'historique. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une constante de 1 unité. Conformément aux règles sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 161 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>4. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/09/2025, soit 71 jours avant la date actuelle. Bien que la rotation soit faible et irrégulière, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60 jours entre les commandes). En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et historiques, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 128 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>5. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 71 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles historiques observés (environ 60-70 jours). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes unitaires (1u) ou très faibles (2u). La médiane des commandes récentes et historiques est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 176 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit plus de 70 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 55 jours entre juillet et septembre). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u ou 2u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 177 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>7. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/09/2025, soit 71 jours. L'historique montre un cycle moyen d'environ 60 à 70 jours (ex: juillet à septembre). Nous sommes au-delà de ce cycle habituel, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité à 2 unités. L'historique N-1 confirme des volumes faibles (1-2u). En suivant la règle de la médiane des commandes récentes et le maintien des rotations faibles, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 171 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>8. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juillet 2025, soit environ 119 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés précédemment (environ 4 mois entre les commandes de 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité absolue avec des commandes unitaires (1u). La médiane des quantités est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 180 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>9. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juillet 2025, soit environ 119 jours. L'historique montre une rotation très faible et irrégulière (avril, juillet). En application du principe de précaution B2B, face à un cycle difficile à déterminer et une absence de commande depuis plusieurs mois, un risque de rupture est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) est constant à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 167 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>10. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 17 juillet 2025, soit environ 119 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées de plusieurs mois (avril à juillet). En application du principe de précaution B2B et face à un cycle irrégulier/long, un besoin est détecté pour éviter une rupture prolongée sur cette référence. ÉTAPE 2 (QUANTITÉ) : L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 162 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>11. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière. La dernière commande remonte à 119 jours (17 juillet 2025), ce qui dépasse largement les cycles observés historiquement. Selon le principe de précaution B2B, en cas de cycle irrégulier ou de doute sur la rotation, il convient de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques et au volume habituel pour ce type de rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 119 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juillet 2025, soit environ 119 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés entre l'année dernière (juillet) et cette année. En application du principe de précaution B2B (doute sur le cycle), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u (récent) et 2u (N-1). Conformément à la règle de rotation faible et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 172 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>13. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 17 juillet 2025, soit environ 119 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande fin juillet et une absence de données sur la fin d'année. En application du principe de précaution B2B et face à l'incertitude du cycle sur ce produit à faible rotation, un risque de rupture est identifié pour couvrir la période de fin d'année. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des commandes unitaires (1u). La médiane des commandes est de 1u. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 195 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>14. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande espacé (environ tous les 2 à 3 mois). La dernière commande datant du 17 juillet 2025, soit il y a environ 119 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent non couvert. Conformément au principe de précaution B2B et à la règle de la médiane historique (les commandes étant majoritairement de 2 unités en 2024 et 2025), une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 150 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>15. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juillet 2025, soit environ 119 jours. L'historique montre une rotation très faible et irrégulière (avril, juillet). En application du principe de précaution B2B, face à un cycle difficile à déterminer et une absence de commande depuis plusieurs mois, un risque de rupture est identifié pour couvrir la période à venir. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) est constant avec des commandes unitaires (1u). La médiane des quantités est de 1. Conformément à la règle sur les rotations très faibles, on maintient la quantité de 1u sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 171 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>16. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juillet 2025, soit environ 119 jours. Bien que la rotation soit très faible et irrégulière, l'historique montre des besoins ponctuels. En application du principe de précaution B2B (si doute sur le cycle ou rotation difficile à déterminer), un besoin est identifié pour éviter une rupture prolongée sur ce produit à faible rotation. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des commandes unitaires (1u) ou très faibles (2u). La médiane des commandes est de 1u. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1u sans augmenter sans raison.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 178 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>17. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit présente une rotation très faible et irrégulière (3 commandes l'année précédente). Aucune commande n'a été enregistrée récemment. En l'absence d'historique récent et compte tenu du principe de précaution B2B, un risque de rupture est identifié pour couvrir la période de fin d'année. ÉTAPE 2 : ESTIMATION QUANTITÉ. En se basant sur l'historique N-1 (médiane de 1u) et conformément à la règle sur les rotations très faibles (1-2u), la quantité est fixée à 1 unité pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 158 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>18. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucun historique récent disponible pour 2025. En consultant l'historique N-1, la dernière commande enregistrée date de septembre. Avec une date actuelle au 13 novembre et un seuil de réapprovisionnement de 30 jours, il existe un doute majeur sur le cycle de rotation. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique N-1 montre des volumes très faibles (1u ou 2u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est la médiane basse de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 180 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>19. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Il n'y a aucune commande récente pour ce produit, mais l'historique de l'année précédente montre une rotation très faible et sporadique (1 à 2 unités). Le délai depuis la dernière commande connue est extrêmement long, ce qui rend le cycle imprévisible. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle sur les rotations très faibles, une commande de 1 unité est préconisée pour maintenir un stock minimal, en choisissant la valeur la plus basse de l'historique pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 136 tokens
- **Total**: 1,027 tokens



</details>




### Donnees d'Input LLM (19 produits)


<details>
<summary><strong>1. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:39:08: 4u
- 2025-07-17 06:55:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:14:46: 1u
- 2024-07-30 10:55:26: 4u
- 2024-05-30 06:10:07: 4u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:39:08: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:14:46: 1u
- 2024-04-17 08:25:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:39:08: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 06:10:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:39:08: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:55:26: 2u
- 2024-05-30 06:10:07: 1u
- 2024-04-17 08:25:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:39:08: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:55:26: 2u
- 2024-04-17 08:25:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:39:08: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:14:46: 1u
- 2024-07-30 10:55:26: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:39:08: 2u
- 2025-07-17 06:55:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:14:46: 1u
- 2024-07-30 10:55:26: 2u
- 2024-05-30 06:10:07: 1u
- 2024-04-17 08:25:25: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:55:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:14:46: 1u
- 2024-05-30 06:10:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:55:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:55:26: 1u
- 2024-04-17 08:25:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:55:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:55:26: 1u
- 2024-04-17 08:25:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:55:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:14:46: 1u
- 2024-07-30 10:55:26: 2u
- 2024-05-30 06:10:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:55:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:55:26: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:55:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:55:26: 1u
- 2024-04-17 08:25:25: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:55:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:14:46: 1u
- 2024-07-30 10:55:26: 2u
- 2024-05-30 06:10:07: 2u
- 2024-04-17 08:25:25: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:55:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:55:26: 1u
- 2024-04-17 08:25:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:55:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:55:26: 2u
- 2024-05-30 06:10:07: 1u
- 2024-04-17 08:25:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:14:46: 1u
- 2024-07-30 10:55:26: 2u
- 2024-04-17 08:25:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-23 13:14:46: 1u
- 2024-07-30 10:55:26: 2u
- 2024-04-17 08:25:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:55:26: 2u
- 2024-04-17 08:25:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:52.144Z*
