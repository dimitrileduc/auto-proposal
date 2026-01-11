# Rapport Backtest - Client CARREFOUR BELGIUM SA, Market Bascule

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Market Bascule (ID: 17268)
- **Commande réelle** : S40127
- **Date commande** : 2025-11-05 07:22:50
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 20,240 input + 3,505 output = 23,745 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.6% | 22 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 77.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.36 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 19.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -3.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande moyen d'environ 60 à 70 jours (juin-juillet, juillet-septembre). La dernière commande date du 16 septembre, soit il y a 49 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 79 jours d'ici la fin de la période de couverture, ce qui dépasse le cycle habituel. Le risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent est extrêmement stable avec des commandes systématiques de 1 unité. La médiane des quantités est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 177 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 50 à 60 jours. La dernière commande datant du 16 septembre 2025 (soit 49 jours avant la date actuelle), nous avons dépassé 70% du cycle habituel. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). En application de la règle de précaution B2B et de la méthode de la médiane, la quantité retenue est de 2 unités, ce qui correspond à la commande récurrente observée tant sur l'année en cours que sur l'historique N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 154 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 16 septembre 2025, soit environ 49 jours. L'historique montre un cycle de réapprovisionnement d'environ 2 mois (juillet à septembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. En suivant le principe de précaution B2B et l'historique N-1 (commande de 2u en septembre 2024), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et au volume historique de cette période.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 142 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant entre 30 et 70 jours. La dernière commande remonte au 16 septembre 2025, soit 49 jours avant la date actuelle. Ce délai dépasse largement 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes (4u, 4u, 3u) est de 4 unités. Ce volume est cohérent avec l'historique de l'année précédente à la même période (octobre/septembre).

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 165 tokens
- **Total**: 1,138 tokens



</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 à 70 jours entre les réapprovisionnements. La dernière commande datant du 16 septembre 2025 (il y a 49 jours), nous atteignons 70% du cycle moyen, ce qui déclenche une alerte de risque de rupture dans l'horizon des 30 jours (Replenishment Threshold Days). De plus, l'historique N-1 confirme une activité sur cette période de fin d'année. En suivant la règle de la médiane des commandes récentes (1, 2, 2), la quantité retenue est de 2 unités pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 159 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>6. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'environ 60 à 70 jours. La dernière commande datant du 16 septembre 2025 (il y a 49 jours), nous entrons dans la zone de risque de rupture (seuil de 70% du cycle atteint) pour l'horizon des 30 prochains jours. Conformément au principe de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent est extrêmement stable avec une récurrence stricte de 2 unités sur les trois dernières commandes. La médiane et la constante étant de 2, cette quantité est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 159 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'environ 60 à 70 jours (juin-juillet-septembre). La dernière commande datant du 16 septembre 2025, soit il y a 49 jours, nous entrons dans la fenêtre de risque de rupture (70% du cycle atteint) pour les 30 prochains jours. Conformément au principe de précaution B2B et à la stabilité historique du produit (rotation constante de 1 unité), une commande de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 134 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>8. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 34, 65 et 69 jours. La dernière commande remonte au 16 septembre 2025, soit 49 jours avant la date actuelle. Ce délai dépasse 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques (1u, 1u, 2u), privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 162 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 16 septembre 2025, soit 49 jours avant la date actuelle. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle suggéré par l'historique N-1 (commande en octobre 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (Replenishment Threshold Days), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et au volume de la commande la plus récente, afin de maintenir le stock sans risque de surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 154 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>10. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 34, 65 et 69 jours. Depuis la dernière commande du 16 septembre 2025, 49 jours se sont écoulés. Ce délai dépasse 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent est extrêmement stable avec des commandes systématiques de 1 unité. La médiane des commandes récentes étant de 1, cette valeur est retenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 153 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>11. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 34 et 69 jours. La dernière commande remonte au 16 septembre 2025, soit 49 jours avant la date actuelle. Ce délai représente plus de 70% du cycle moyen observé, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes ainsi qu'à l'historique N-1 (octobre 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 156 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>12. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit environ 118 jours. Bien que la rotation soit faible, l'historique N-1 montre une commande à la mi-octobre (2u). Avec un seuil de réapprovisionnement de 30 jours et l'absence de commande récente depuis l'été, il existe un risque de rupture ou un besoin de renouvellement de stock pour la période de fin d'année. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. La commande N-1 à la même période était de 2u. La médiane et la valeur de référence historique convergent vers 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 193 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>13. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit environ 118 jours. Bien que la rotation soit très faible et irrégulière (une commande en 2024, une en 2025), le délai écoulé depuis la dernière livraison et l'entrée dans la période de fin d'année (correspondant à l'historique N-1 du 17/10) créent un doute sur le cycle. En application du principe de précaution B2B, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité stricte à 2 unités. La médiane est de 2. Conformément à la règle sur les rotations faibles, on maintient la quantité historique sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 200 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>14. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/06/2025, soit environ 152 jours. Bien que la rotation soit très faible et irrégulière, l'historique montre une commande à la même période l'année précédente (17/10/2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constante de 2 unités. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 2 unités sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 171 tokens
- **Total**: 1,058 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 1u
- 2025-07-09 11:19:18: 1u
- 2025-06-05 06:50:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 09:34:09: 1u
- 2024-05-14 06:32:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 2u
- 2025-07-09 11:19:18: 1u
- 2025-06-05 06:50:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-17 06:51:21: 2u
- 2024-09-19 06:32:08: 3u
- 2024-07-15 09:34:09: 2u
- 2024-05-14 06:32:28: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 2u
- 2025-07-09 11:19:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:32:08: 2u
- 2024-07-15 09:34:09: 1u
- 2024-05-14 06:32:28: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 4u
- 2025-07-09 11:19:18: 4u
- 2025-06-05 06:50:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-17 06:51:21: 2u
- 2024-09-19 06:32:08: 5u
- 2024-07-15 09:34:09: 3u
- 2024-05-14 06:32:28: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 1u
- 2025-07-09 11:19:18: 2u
- 2025-06-05 06:50:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:32:08: 2u
- 2024-07-15 09:34:09: 2u
- 2024-05-14 06:32:28: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 2u
- 2025-07-09 11:19:18: 2u
- 2025-06-05 06:50:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:32:08: 2u
- 2024-07-15 09:34:09: 3u
- 2024-05-14 06:32:28: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 1u
- 2025-07-09 11:19:18: 1u
- 2025-06-05 06:50:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:32:08: 1u
- 2024-07-15 09:34:09: 1u
- 2024-05-14 06:32:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 2u
- 2025-07-09 11:19:18: 1u
- 2025-06-05 06:50:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 09:34:09: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-17 06:51:21: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 1u
- 2025-07-09 11:19:18: 1u
- 2025-06-05 06:50:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-17 06:51:21: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:07:17: 2u
- 2025-07-09 11:19:18: 2u
- 2025-06-05 06:50:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-17 06:51:21: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>12. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:19:18: 1u
- 2025-06-05 06:50:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-17 06:51:21: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:19:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-17 06:51:21: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>14. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 06:50:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-17 06:51:21: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:06.982Z*
