# Rapport Backtest - Client ITM NANDRIN ST SEVERIN ECONAN

## Contexte

- **Client** : ITM NANDRIN ST SEVERIN ECONAN (ID: 38954)
- **Commande réelle** : S40270
- **Date commande** : 2025-11-12 14:31:04
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 35
- **Tokens**: 32,835 input + 5,467 output = 38,302 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.9% | 35 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 60.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (15)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (15 produits)


<details>
<summary><strong>1. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 40 à 50 jours. La dernière commande remonte au 13 octobre 2025, soit 29 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où le risque de rupture est imminent (70% du cycle atteint). Bien que l'historique récent montre une alternance entre 1u et 2u, la règle de prudence B2B impose de prévoir une commande. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité (médiane de l'historique global).

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 171 tokens
- **Total**: 1,157 tokens



</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 13 octobre 2025, soit 29 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. L'historique de l'année précédente montre une activité régulière en octobre et novembre (commandes de 2u). En appliquant la règle de la médiane sur les commandes récentes (1u, 1u, 2u) et en tenant compte de la saisonnalité N-1 qui confirme un besoin de 2u à cette période, une commande de 2 unités est préconisée pour couvrir les besoins du prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,004 tokens
- **Output**: 147 tokens
- **Total**: 1,151 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 40 jours. La dernière commande datant du 13 octobre (il y a 29 jours), nous atteignons le seuil de réapprovisionnement de 30 jours. Un risque de rupture est identifié pour l'horizon cible. La quantité est déterminée par la médiane des commandes récentes (1, 3, 2, 1), soit 1.5u. En application du principe de précaution B2B et pour couvrir la période à venir, on retient la valeur médiane arrondie à 2u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 148 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>4. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 45 à 60 jours. La dernière commande date du 13 octobre 2025, soit il y a 29 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (70% du cycle atteint). Bien que la rotation soit faible, l'historique N-1 confirme une commande systématique à cette période de l'année (fin octobre/novembre). En suivant la règle de précaution B2B et en se basant sur la médiane des quantités récentes (1u), une commande de 1 unité est nécessaire pour couvrir les besoins imminents sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,004 tokens
- **Output**: 167 tokens
- **Total**: 1,171 tokens



</details>


<details>
<summary><strong>5. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 13/10/2025, soit il y a 29 jours. Bien que l'historique soit très faible (rotation lente), le délai écoulé atteint le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour l'horizon à venir. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une stabilité stricte à 1 unité par commande (octobre 2025 et août 2024). La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 192 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 40 jours entre chaque réapprovisionnement. La dernière commande datant du 13 octobre (soit il y a 29 jours), nous entrons dans la fenêtre critique des 30 jours du seuil de réapprovisionnement (Replenishment Threshold Days). Bien que l'historique N-1 montre des volumes plus faibles en fin d'année, la tendance récente sur 2025 indique une augmentation de la consommation avec des commandes de 3 unités. En appliquant la règle de la médiane sur l'historique récent (3, 3, 2, 2), et par principe de précaution B2B pour éviter la rupture sur un produit à rotation régulière, une commande de 3 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,024 tokens
- **Output**: 181 tokens
- **Total**: 1,205 tokens



</details>


<details>
<summary><strong>7. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation faible mais régulière. La dernière commande remonte au 13 octobre 2025, soit il y a 29 jours. Sur la même période l'année précédente (octobre/novembre 2024), une commande avait été passée fin octobre. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et historiques, respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 145 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>8. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 13 octobre, soit il y a 29 jours. Le cycle entre les deux dernières commandes était d'environ 82 jours, mais l'historique montre une activité régulière durant la période automnale l'année précédente. Avec un seuil de réapprovisionnement de 30 jours, il existe un risque de rupture ou un besoin imminent pour maintenir le stock sur ce produit à faible rotation. ÉTAPE 2 : Les quantités récentes sont constantes à 1 unité. La médiane des commandes récentes est de 1. Conformément à la règle de précaution pour les rotations faibles (1-2u), on maintient la quantité habituelle de 1 unité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 915 tokens
- **Output**: 164 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>9. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 45 à 60 jours. La dernière commande remonte au 03/09/2025, soit 69 jours avant la date actuelle (11/11/2025). Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou une consommation déjà effectuée. L'historique N-1 confirme également une activité régulière sur cette période (octobre/novembre). En suivant la règle de la médiane des commandes récentes (1, 2, 3), la quantité retenue est de 2 unités pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 166 tokens
- **Total**: 1,156 tokens



</details>


<details>
<summary><strong>10. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
La dernière commande remonte au 03/09/2025, soit 69 jours. Le cycle moyen historique est d'environ 45 à 55 jours. Nous avons largement dépassé ce cycle, ce qui indique un besoin imminent ou une rupture probable dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (récentes et N-1), tout en respectant la règle de prudence qui privilégie la valeur basse en cas de doute sur une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 148 tokens
- **Total**: 1,153 tokens



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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 2 à 3 mois). La dernière commande remonte au 03/09/2025, soit plus de 68 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen observé, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement pour maintenir le stock en rayon. Conformément au principe de précaution B2B et à la règle de rotation faible (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes récentes et historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 139 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>12. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juillet, soit plus de 110 jours. Bien que la rotation soit très faible, l'intervalle entre les deux commandes précédentes était de 33 jours. Le délai actuel dépasse largement le cycle observé, ce qui crée une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une régularité stricte de 1 unité par commande. Conformément à la règle sur les rotations faibles, la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 170 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>13. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 20 juin 2025, soit plus de 140 jours. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une activité en septembre (2u). En application du principe de précaution B2B (si doute sur le cycle ou rotation difficile à déterminer -> prévoir), un risque de rupture est identifié pour couvrir la période de fin d'année. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes de 1u et 2u. Conformément à la règle de rotation très faible (1-2u) et au choix de la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 192 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>14. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à plus de 140 jours (20 juin 2025), ce qui dépasse largement tout cycle de rotation identifiable. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le produit était présent à la même période l'année précédente (septembre). Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est la valeur minimale observée dans l'historique récent et passé, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 135 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>15. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une rotation lente et régulière (environ tous les 3 mois). La dernière commande connue remonte à plus d'un an. En application du principe de précaution B2B et face à l'absence de données récentes, un besoin est détecté pour éviter une rupture de stock prolongée sur cette référence active. ÉTAPE 2 : Estimation de la quantité. L'historique montre une stabilité parfaite avec des commandes unitaires (1u). La médiane et le mode des commandes passées étant de 1, la quantité préconisée est de 1 unité pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 165 tokens
- **Total**: 1,074 tokens



</details>




### Donnees d'Input LLM (15 produits)


<details>
<summary><strong>1. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:40:35: 2u
- 2025-09-03 06:38:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 13:45:18: 1u
- 2024-09-30 07:05:31: 2u
- 2024-08-13 10:01:26: 1u
- 2024-07-10 05:50:18: 1u
- 2024-05-16 11:55:16: 1u
- 2024-04-15 13:07:50: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:40:35: 2u
- 2025-09-03 06:38:52: 1u
- 2025-06-20 07:56:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 13:45:18: 2u
- 2024-09-30 07:05:31: 2u
- 2024-08-13 10:01:26: 2u
- 2024-07-10 05:50:18: 3u
- 2024-05-16 11:55:16: 2u
- 2024-04-15 13:07:50: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:40:35: 1u
- 2025-09-03 06:38:52: 3u
- 2025-07-23 11:10:09: 2u
- 2025-06-20 07:56:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 10:01:26: 3u
- 2024-05-16 11:55:16: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:40:35: 1u
- 2025-09-03 06:38:52: 1u
- 2025-07-23 11:10:09: 2u
- 2025-06-20 07:56:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 13:45:18: 1u
- 2024-08-13 10:01:26: 1u
- 2024-07-10 05:50:18: 1u
- 2024-05-16 11:55:16: 1u
- 2024-04-15 13:07:50: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:40:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 10:01:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:40:35: 3u
- 2025-09-03 06:38:52: 3u
- 2025-07-23 11:10:09: 2u
- 2025-06-20 07:56:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 13:45:18: 1u
- 2024-09-30 07:05:31: 1u
- 2024-08-13 10:01:26: 2u
- 2024-07-10 05:50:18: 4u
- 2024-05-16 11:55:16: 2u
- 2024-04-15 13:07:50: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:40:35: 1u
- 2025-07-23 11:10:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 13:45:18: 1u
- 2024-09-30 07:05:31: 1u
- 2024-07-10 05:50:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:40:35: 1u
- 2025-07-23 11:10:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 10:01:26: 2u
- 2024-07-10 05:50:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:38:52: 3u
- 2025-07-23 11:10:09: 2u
- 2025-06-20 07:56:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 13:45:18: 1u
- 2024-08-13 10:01:26: 2u
- 2024-07-10 05:50:18: 3u
- 2024-05-16 11:55:16: 1u
- 2024-04-15 13:07:50: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:38:52: 3u
- 2025-07-23 11:10:09: 2u
- 2025-06-20 07:56:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 13:45:18: 2u
- 2024-09-30 07:05:31: 1u
- 2024-08-13 10:01:26: 3u
- 2024-07-10 05:50:18: 2u
- 2024-05-16 11:55:16: 2u
- 2024-04-15 13:07:50: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:38:52: 1u
- 2025-07-23 11:10:09: 1u
- 2025-06-20 07:56:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:05:31: 2u
- 2024-07-10 05:50:18: 1u
- 2024-05-16 11:55:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 11:10:09: 1u
- 2025-06-20 07:56:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:56:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:05:31: 2u
- 2024-07-10 05:50:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:56:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:05:31: 2u
- 2024-05-16 11:55:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:05:31: 1u
- 2024-07-10 05:50:18: 1u
- 2024-04-15 13:07:50: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (20)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:19.493Z*
