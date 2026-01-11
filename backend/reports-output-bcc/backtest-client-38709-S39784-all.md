# Rapport Backtest - Client BEES COOP

## Contexte

- **Client** : BEES COOP (ID: 38709)
- **Commande réelle** : S39784
- **Date commande** : 2025-10-17 12:52:44
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 20,116 input + 3,543 output = 23,659 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 21 produits prédits, 14 corrects |
| **Rappel** | 93.3% | 15 produits réels, 14 détectés |
| **F1-Score** | 77.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.64 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 39.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le délai depuis la dernière commande (16/09/2025) est de 30 jours. Bien que le cycle historique soit long et irrégulier (environ 90 jours entre les deux dernières commandes), nous atteignons le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est déclenchée. ÉTAPE 2 : L'historique récent montre des commandes de 1u et 2u. La médiane est de 1,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute ou de rotation faible pour ne pas surestimer le stock, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 181 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>2. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 75 à 80 jours. La dernière commande datant du 16 septembre (il y a 30 jours), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days), d'autant plus qu'une commande avait été passée à la même période l'année dernière (20 septembre 2024). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et au volume historique de la même période en N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 154 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>3. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles récents de 13 jours (septembre) et 30 jours (août/septembre). La dernière commande datant du 16 septembre, soit il y a 30 jours, le seuil de réapprovisionnement de 30 jours est atteint. Il existe un risque de rupture imminent. En suivant la règle de la médiane sur l'historique récent (1u, 2u, 1u, 2u), la quantité retenue est de 2 unités pour couvrir le besoin tout en respectant le principe de précaution B2B.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 140 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 25 à 35 jours sur les derniers mois. La dernière commande datant du 16 septembre (soit 30 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours du seuil de réapprovisionnement. Historiquement, le produit présente une rotation régulière. En appliquant la règle de la médiane sur les commandes récentes (3, 4, 4, 5, 6), la valeur centrale est de 4 unités. Ce volume correspond également à la tendance observée l'année précédente à la même période.

**Tokens utilises pour cette prediction:**
- **Input**: 1,040 tokens
- **Output**: 145 tokens
- **Total**: 1,185 tokens



</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 15 à 30 jours entre les commandes récentes (16/09, 03/09, 04/08). Depuis la dernière commande du 16 septembre, 30 jours se sont écoulés, ce qui correspond exactement au seuil de réapprovisionnement (Replenishment Threshold Days). Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique récent et N-1 montre une rotation très faible et stable, oscillant entre 1 et 2 unités. Conformément à la règle de la médiane et au principe de ne pas surestimer les produits à faible rotation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 168 tokens
- **Total**: 1,157 tokens



</details>


<details>
<summary><strong>6. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 25 à 30 jours (ex: 13 jours entre les deux dernières commandes, mais des intervalles plus longs précédemment). La dernière commande datant du 16 septembre (il y a 30 jours), le seuil de réapprovisionnement de 30 jours est atteint, créant un risque de rupture imminent. Conformément à la règle de précaution B2B, une commande est nécessaire. La quantité est fixée à 2 unités, ce qui correspond à la médiane des commandes récentes (2, 3, 3, 2) et à la valeur la plus basse en cas de doute pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,023 tokens
- **Output**: 163 tokens
- **Total**: 1,186 tokens



</details>


<details>
<summary><strong>7. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une accélération récente avec deux commandes en septembre (le 03/09 et le 16/09). Depuis la dernière commande, 30 jours se sont écoulés, ce qui correspond exactement au seuil de réapprovisionnement de 30 jours. Bien que la rotation historique soit faible (1u), le principe de précaution B2B s'applique ici car nous entrons dans une zone de risque de rupture. La quantité retenue est de 1 unité, correspondant à la médiane historique et à la valeur la plus basse en cas de doute, afin d'éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 152 tokens
- **Total**: 1,157 tokens



</details>


<details>
<summary><strong>8. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 16/09/2025, soit il y a 30 jours. L'historique récent montre des cycles de commande variant entre 13 jours (septembre) et 30 jours (août/septembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle habituel est atteint. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont de 2, 1, 2 et 4 unités. La médiane de l'historique récent est de 2 unités. Ce volume est cohérent avec l'historique N-1 à la même période (1 à 2 unités). La quantité retenue est donc de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 205 tokens
- **Total**: 1,193 tokens



</details>


<details>
<summary><strong>9. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 80 à 90 jours entre les commandes récentes (juin à septembre). Depuis la dernière commande du 3 septembre 2025, 43 jours se sont écoulés. Bien que nous ne soyons pas encore au terme du cycle théorique, l'historique N-1 montre une activité en septembre et août, et le délai de 30 jours du seuil de réapprovisionnement nous place à un horizon de 73 jours post-commande, ce qui entre dans la zone de risque de rupture. En application du principe de précaution B2B, un besoin est détecté. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et à la dernière quantité commandée, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 187 tokens
- **Total**: 1,143 tokens



</details>


<details>
<summary><strong>10. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle récent montre des commandes environ tous les 30 à 50 jours (juin, août, septembre). Avec une dernière commande le 03/09/2025 et une date actuelle au 16/10/2025, nous avons dépassé les 40 jours, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que l'historique N-1 montre des quantités de 1u à cette période, le cycle récent est stabilisé à 2u de manière régulière. En suivant la règle de la médiane des commandes récentes et le principe de précaution B2B, une commande de 2u est nécessaire pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 172 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>11. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 65 jours entre les commandes récentes. La dernière commande datant du 03/09/2025 (soit 43 jours avant la date actuelle), nous avons dépassé le seuil de 70% du cycle moyen (45 jours), ce qui indique un risque de rupture imminent dans l'horizon des 30 jours de réapprovisionnement. Conformément à la règle de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent et N-1 montre une stabilité quasi systématique à 1 unité (médiane de 1u). On maintient donc cette quantité de 1 unité pour couvrir le prochain cycle sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 174 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>12. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 04/08/2025, soit 73 jours avant la date actuelle. L'historique montre une rotation lente mais régulière avec un cycle moyen d'environ 60 à 70 jours. Le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. En application du principe de précaution B2B et de la règle de la médiane sur les faibles rotations (1-2u), une commande de 1 unité est préconisée pour couvrir le besoin sans surstocker, la quantité de 2u en août étant considérée comme un pic ponctuel par rapport à l'historique N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 160 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>13. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/08/2025, soit 73 jours. L'historique montre un cycle moyen d'environ 60 à 70 jours (juin à août). Nous sommes au-delà de ce cycle habituel. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent (2025) montre une stabilité à 1 unité. Bien qu'un pic à 4 unités ait été observé en juin 2024, la médiane des commandes récentes et la tendance actuelle confirment un besoin de 1 unité. En cas de rotation faible, la règle impose de maintenir la quantité minimale sans augmenter sans raison.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 205 tokens
- **Total**: 1,160 tokens



</details>


<details>
<summary><strong>14. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 11 juin 2025, soit plus de 120 jours sans activité, ce qui dépasse largement le cycle de réapprovisionnement habituel observé l'année précédente (environ 30 à 50 jours). Bien que la rotation soit très faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée, surtout à l'approche de périodes potentiellement actives. La quantité retenue est de 1 unité, correspondant à la médiane historique et à la règle de maintien des faibles rotations (1-2u) sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 138 tokens
- **Total**: 1,090 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-06-11 07:06:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-06-30 13:22:14: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:29:53: 2u
- 2024-08-06 09:14:09: 2u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 1u
- 2025-08-04 11:59:10: 2u
- 2025-06-11 07:06:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-06 09:14:09: 2u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:36:35: 6u
- 2025-09-03 06:47:09: 3u
- 2025-08-04 11:59:10: 5u
- 2025-06-30 13:22:14: 4u
- 2025-06-11 07:06:03: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:29:53: 3u
- 2024-08-22 07:59:17: 2u
- 2024-08-06 09:14:09: 5u
- 2024-06-28 11:44:57: 6u
- 2024-05-13 11:48:40: 4u
- 2024-04-09 06:51:49: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:36:35: 1u
- 2025-09-03 06:47:09: 1u
- 2025-08-04 11:59:10: 2u
- 2025-06-30 13:22:14: 1u
- 2025-06-11 07:06:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:29:53: 2u
- 2024-08-22 07:59:17: 1u
- 2024-06-28 11:44:57: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 3u
- 2025-06-30 13:22:14: 3u
- 2025-06-11 07:06:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:29:53: 4u
- 2024-08-22 07:59:17: 1u
- 2024-08-06 09:14:09: 2u
- 2024-06-28 11:44:57: 2u
- 2024-05-13 11:48:40: 3u
- 2024-04-09 06:51:49: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>7. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 1u
- 2025-06-30 13:22:14: 1u
- 2025-06-11 07:06:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-22 07:59:17: 1u
- 2024-08-06 09:14:09: 1u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 1u
- 2025-08-04 11:59:10: 2u
- 2025-06-11 07:06:03: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-22 07:59:17: 2u
- 2024-08-06 09:14:09: 1u
- 2024-06-28 11:44:57: 2u
- 2024-05-13 11:48:40: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>9. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:47:09: 2u
- 2025-06-11 07:06:03: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:29:53: 2u
- 2024-08-06 09:14:09: 2u
- 2024-06-28 11:44:57: 1u
- 2024-04-09 06:51:49: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:47:09: 2u
- 2025-08-04 11:59:10: 2u
- 2025-06-11 07:06:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:29:53: 1u
- 2024-08-06 09:14:09: 1u
- 2024-06-28 11:44:57: 2u
- 2024-04-09 06:51:49: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:47:09: 1u
- 2025-06-30 13:22:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-22 07:59:17: 1u
- 2024-06-28 11:44:57: 1u
- 2024-04-09 06:51:49: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:59:10: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:29:53: 1u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:59:10: 1u
- 2025-06-11 07:06:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-22 07:59:17: 1u
- 2024-06-28 11:44:57: 4u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 07:06:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:29:53: 1u
- 2024-08-22 07:59:17: 1u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:06:15.941Z*
