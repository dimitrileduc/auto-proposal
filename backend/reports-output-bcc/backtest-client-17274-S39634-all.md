# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Malmedy

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Malmedy (ID: 17274)
- **Commande réelle** : S39634
- **Date commande** : 2025-10-09 06:08:46
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 25
- **Tokens**: 23,045 input + 4,148 output = 27,193 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 64.0% | 25 produits prédits, 16 corrects |
| **Rappel** | 76.2% | 21 produits réels, 16 détectés |
| **F1-Score** | 69.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.56 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 34.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 7.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (16)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 12 | 12 | 0.0 | 0.0% | exact | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (16 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 19 août 2025, soit 50 jours avant la date actuelle. Bien que le cycle récent soit irrégulier, l'historique de l'année précédente montre une activité soutenue entre septembre et octobre (commande de 3u le 19/09/2024). En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue correspond à la médiane des commandes historiques (2u), en écartant le pic exceptionnel de 3u pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 145 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 19 août 2025, soit 50 jours. Bien que l'historique soit à faible rotation, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours et suggère un besoin imminent pour maintenir le stock, surtout à l'approche de la période de commande constatée l'an dernier (septembre). En application du principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : L'historique récent montre une commande de 1u. L'historique N-1 montre des commandes de 2u. Conformément à la règle de privilégier la quantité la plus basse en cas de doute ou de rotation faible, la quantité de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 183 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 60 jours. La dernière commande datant du 19 août (soit 50 jours avant la date actuelle), nous atteignons le seuil critique de réapprovisionnement, d'autant plus qu'une commande avait été passée à la même période l'année précédente (19 septembre). Le risque de rupture est réel dans l'horizon des 30 jours. Pour la quantité, l'historique récent présente des valeurs de 2, 3 et 4 unités. Conformément à la règle de la médiane et à la prudence B2B (choisir la valeur basse en cas de doute sur la tendance), une quantité de 3 unités est préconisée pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 177 tokens
- **Total**: 1,148 tokens



</details>


<details>
<summary><strong>4. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 19 août 2025, soit 50 jours avant la date actuelle. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle observé l'année précédente (environ 3 mois entre les commandes). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est jugé élevé par précaution B2B. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la dernière commande effectuée, respectant la règle de maintien pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 131 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 60 jours entre les commandes récentes. La dernière commande datant du 19 août (soit 50 jours avant la date actuelle), nous avons dépassé 70% du cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours de seuil. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, l'historique récent est extrêmement stable avec une médiane de 2 unités. Conformément aux règles de gestion des rotations faibles, nous maintenons ce volume de 2 unités sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 155 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>6. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 90 jours entre les commandes récentes (mai à août). La dernière commande datant du 19 août 2025, nous sommes à 50 jours d'ancienneté, soit plus de 50% du cycle. Compte tenu de l'historique N-1 qui présente une commande en septembre, il existe un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes et à la tendance de rotation faible observée.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 161 tokens
- **Total**: 1,080 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août 2025, soit 50 jours. L'historique montre un cycle moyen d'environ 90 jours en 2025, mais l'historique N-1 indique une commande le 19 septembre 2024. Par principe de précaution B2B et pour couvrir l'horizon de 30 jours (seuil de réapprovisionnement), un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. La rotation est très faible et régulière (1 à 2 unités). La médiane des commandes récentes est de 1 unité. Conformément aux règles de rotation faible, on maintient la quantité minimale de 1 unité sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 178 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 19/08/2025, soit 50 jours. Bien que le cycle récent soit irrégulier (47 jours entre les deux dernières), l'historique N-1 montre une activité soutenue en septembre/octobre. En application du principe de précaution B2B et face à l'incertitude du cycle actuel, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent est trop faible (1u et 2u) pour être représentatif face à la saisonnalité N-1. L'année dernière, à la même période (septembre), la commande était de 3u. La médiane historique globale se situe à 3u. Conformément aux règles, on retient la médiane de 3u pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 218 tokens
- **Total**: 1,171 tokens



</details>


<details>
<summary><strong>9. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 47 jours entre les deux dernières commandes. La dernière commande datant du 19 août (soit 50 jours avant la date actuelle), le cycle habituel est dépassé, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. Bien que l'historique récent soit limité, la médiane des commandes de 2025 est de 2,5 unités. En appliquant le principe de précaution B2B et en observant une commande de 6 unités à la même période l'année dernière (septembre/octobre), une quantité de 3 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 162 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>10. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles d'environ 50 à 70 jours (51 jours entre mai et juillet, 47 jours entre juillet et août). La dernière commande datant du 19 août, soit il y a 50 jours, nous avons dépassé le cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 3 unités, correspondant à la médiane des commandes récentes (3, 4, 3) et à la valeur la plus basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 153 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>11. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 12u vs Médiane: 12u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12u
- **Baseline calculee**: 12u
- **Mediane historique**: 12u
- **Reel commande**: 12u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 98 jours entre les commandes récentes (mai à août). La dernière commande datant du 19 août 2025, nous sommes à 50 jours d'ancienneté. Bien que nous n'ayons pas encore atteint les 70% du cycle théorique, l'historique N-1 montre une commande en septembre, suggérant un besoin saisonnier ou une accélération à cette période de l'année. En application du principe de précaution B2B et pour couvrir l'horizon des 30 prochains jours (Replenishment Threshold Days), un risque de rupture est identifié. La quantité retenue est de 12 unités, correspondant à la médiane et à la constante des commandes de l'année en cours.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 183 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>12. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle de commande historique est irrégulier (environ 50 à 90 jours). La dernière commande remonte au 03/07/2025, soit 97 jours avant la date actuelle. Le délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours, indiquant un besoin imminent ou un risque de rupture. ÉTAPE 2 : L'historique montre une consommation constante de 2 unités par commande (médiane de 2u), à l'exception d'un pic ponctuel en 2024. En suivant le principe de précaution B2B et la règle de la médiane, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 168 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>13. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit plus de 90 jours. Bien que le cycle récent soit irrégulier (environ 50 jours entre les deux dernières commandes), le délai actuel dépasse largement la fréquence habituelle. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 2u et 4u (médiane 3u). L'historique N-1 à la même période (septembre) indique également une commande de 3u. La médiane globale et l'historique saisonnier convergent vers une quantité de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 191 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>14. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13 mai 2025, soit environ 148 jours. Bien que l'historique soit irrégulier et à faible rotation, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 90 jours entre juin et septembre 2024). En application du principe de précaution B2B et face à un cycle difficile à déterminer, un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des commandes de 1u et 2u. La médiane des commandes est de 2u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 187 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>15. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mai 2025, soit près de 5 mois d'inactivité. Bien que le cycle soit très lent, l'historique montre une commande à la même période l'année dernière (septembre 2024). En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant avec des commandes de 4 unités. La médiane est de 4. Conformément à la règle de maintien des quantités pour les rotations régulières, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 179 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>16. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse montre une rotation très faible et irrégulière avec une dernière commande remontant à 148 jours (mai 2025). Bien que le cycle historique soit difficile à établir précisément, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les intervalles observés l'année précédente (environ 45 à 60 jours). Un risque de rupture est donc identifié. Pour la quantité, la médiane des commandes récentes et historiques se situe entre 2 et 3 unités. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 153 tokens
- **Total**: 1,073 tokens



</details>




### Donnees d'Input LLM (16 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 1u
- 2025-05-13 07:38:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 3u
- 2024-07-31 06:12:55: 2u
- 2024-06-13 06:46:36: 2u
- 2024-04-25 07:28:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 2u
- 2024-06-13 06:46:36: 2u
- 2024-04-25 07:28:57: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 2u
- 2025-07-03 07:27:28: 4u
- 2025-05-13 07:38:11: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 3u
- 2024-07-31 06:12:55: 4u
- 2024-06-13 06:46:36: 3u
- 2024-04-25 07:28:57: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:12:55: 2u
- 2024-04-25 07:28:57: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 2u
- 2025-07-03 07:27:28: 2u
- 2025-05-13 07:38:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 4u
- 2024-06-13 06:46:36: 3u
- 2024-04-25 07:28:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 1u
- 2025-05-13 07:38:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 1u
- 2024-06-13 06:46:36: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 1u
- 2025-05-13 07:38:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 2u
- 2024-06-13 06:46:36: 1u
- 2024-04-25 07:28:57: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 1u
- 2025-07-03 07:27:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 3u
- 2024-07-31 06:12:55: 3u
- 2024-06-13 06:46:36: 4u
- 2024-04-25 07:28:57: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 3u
- 2025-07-03 07:27:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 6u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 3u
- 2025-07-03 07:27:28: 4u
- 2025-05-13 07:38:11: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 6u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>11. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:17:36: 12u
- 2025-05-13 07:38:11: 12u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 6u

**Quantite Mediane (fallback)**: 12u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>12. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:27:28: 2u
- 2025-05-13 07:38:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 2u
- 2024-06-13 06:46:36: 2u
- 2024-04-25 07:28:57: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:27:28: 2u
- 2025-05-13 07:38:11: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 3u
- 2024-07-31 06:12:55: 3u
- 2024-04-25 07:28:57: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>14. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 07:38:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 2u
- 2024-06-13 06:46:36: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 07:38:11: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:25:13: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 07:38:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:12:55: 3u
- 2024-06-13 06:46:36: 3u
- 2024-04-25 07:28:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | Predicted 2u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Predicted 2u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 3 | Predicted 3u but not ordered |
| [JF021] JF PICKLES 350 ML | 2 | Predicted 2u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Never ordered in previous analysis window (no history) |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:11:09.042Z*
