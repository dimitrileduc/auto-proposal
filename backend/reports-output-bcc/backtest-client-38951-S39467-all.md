# Rapport Backtest - Client ITM HERVE LEHDIS

## Contexte

- **Client** : ITM HERVE LEHDIS (ID: 38951)
- **Commande réelle** : S39467
- **Date commande** : 2025-10-01 07:35:25
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 25
- **Tokens**: 22,767 input + 4,128 output = 26,895 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.0% | 25 produits prédits, 11 corrects |
| **Rappel** | 73.3% | 15 produits réels, 11 détectés |
| **F1-Score** | 55.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 39.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 41.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF029] JF VOL AU VENT BOCAL 400G | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 4 | 3.0 | 75.0% | partial | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juillet 2025, soit 82 jours. L'historique montre des cycles de commande variant entre 30 et 60 jours. Nous avons largement dépassé le cycle moyen, ce qui indique un risque de rupture imminent ou un besoin non couvert pour la période actuelle. ÉTAPE 2 : Estimation de la quantité. L'historique récent présente des valeurs disparates (1u et 6u). En analysant l'historique N-1 sur la même période (août/septembre), on observe des commandes de 2u et 3u. La médiane globale de l'historique se situe à 2.5u. En application du principe de précaution B2B et pour s'aligner sur la saisonnalité de l'année précédente, la quantité de 3 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 205 tokens
- **Total**: 1,159 tokens



</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 70 jours. La dernière commande remontant au 10 juillet 2025 (soit plus de 80 jours), le risque de rupture est imminent ou déjà avéré pour la période de couverture de 30 jours. L'historique N-1 confirme également une activité sur la période août-octobre. En suivant la règle de la médiane des commandes récentes (3u et 2u) et en observant les volumes historiques (2u, 3u, 4u), la quantité de 3 unités est retenue pour couvrir le besoin tout en évitant le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 156 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 juillet 2025, soit 82 jours. L'historique N-1 montre des commandes en mai, juin et août, suggérant une consommation estivale et de rentrée. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement les intervalles habituels observés l'année précédente. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche une commande de 3u, tandis que l'historique N-1 oscille entre 1u et 2u. La médiane de l'ensemble des commandes historiques est de 1.5u. En suivant la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 235 tokens
- **Total**: 1,153 tokens



</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 10 juillet 2025, soit plus de 80 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60-70 jours entre les commandes actives). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane du volume historique récent et à la dernière commande effectuée, respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 144 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
La dernière commande remonte au 10 juillet 2025, soit 82 jours. L'historique de l'année précédente montre des commandes régulières entre mai et août (cycle de 30 à 45 jours). Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, créant un risque de rupture. En suivant le principe de précaution B2B et en se basant sur la médiane des commandes historiques (2u), une commande est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 129 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juillet 2025, soit 82 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées de 50 à 70 jours. À la date du 30 septembre, nous dépassons largement le cycle habituel. En application du principe de précaution B2B (risque de rupture sur un produit à rotation lente mais régulière), un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité par commande. La médiane est de 1. On maintient cette quantité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 157 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>7. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le principe de précaution B2B s'applique car le cycle est irrégulier et le risque de rupture est incertain sur l'horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 143 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>8. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 45-60 jours entre juin et août). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité parfaite à 2 unités par commande. La médiane est de 2. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 172 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>9. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 mai 2025, soit plus de 130 jours. L'historique montre des commandes espacées (mai et août en 2024). Bien que le cycle soit irrégulier et la rotation faible, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les intervalles observés précédemment. Un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes systématiques de 2 unités (mai 2024, août 2024, mai 2025). La médiane et la constante historique convergent vers 2 unités. On maintient cette quantité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 188 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>10. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (cycle moyen supérieur à 100 jours). La dernière commande remonte au 19 mai 2025, soit plus de 130 jours sans activité. Selon le principe de précaution B2B, un cycle aussi long et incertain impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu à la même période l'année précédente (août). La quantité retenue est de 2 unités, correspondant à la médiane et au volume le plus fréquent des commandes passées, respectant la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 152 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>11. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 19 mai 2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (environ 60-70 jours). Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. En suivant la règle de la médiane sur l'historique récent et passé (majorité de commandes à 1u ou 2u) et en privilégiant la valeur la plus basse en cas de doute sur un produit à faible rotation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 151 tokens
- **Total**: 1,090 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 09:54:13: 1u
- 2025-05-19 07:47:31: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:52:50: 3u
- 2024-06-25 12:33:34: 2u
- 2024-05-23 09:40:39: 3u
- 2024-03-14 13:11:34: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 09:54:13: 3u
- 2025-05-19 07:47:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:52:50: 3u
- 2024-06-25 12:33:34: 2u
- 2024-05-23 09:40:39: 4u
- 2024-03-14 13:11:34: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 09:54:13: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:52:50: 1u
- 2024-06-25 12:33:34: 2u
- 2024-05-23 09:40:39: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 09:54:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:52:50: 3u
- 2024-05-23 09:40:39: 0u
- 2024-03-14 13:11:34: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 09:54:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:52:50: 2u
- 2024-06-25 12:33:34: 4u
- 2024-05-23 09:40:39: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 09:54:13: 1u
- 2025-05-19 07:47:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 09:40:39: 1u
- 2024-03-14 13:11:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 07:47:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 07:47:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:52:50: 2u
- 2024-06-25 12:33:34: 2u
- 2024-05-23 09:40:39: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 07:47:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:52:50: 2u
- 2024-05-23 09:40:39: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 07:47:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:52:50: 2u
- 2024-05-23 09:40:39: 1u
- 2024-03-14 13:11:34: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 07:47:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:52:50: 1u
- 2024-06-25 12:33:34: 2u
- 2024-05-23 09:40:39: 0u
- 2024-03-14 13:11:34: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | Predicted 4u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF059] JF VOL AU VENT BOCAL 2,5kg | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Never ordered in previous analysis window (no history) |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:18:42.402Z*
