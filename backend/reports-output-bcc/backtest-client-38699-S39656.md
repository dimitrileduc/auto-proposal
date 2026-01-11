# Rapport Backtest - Client AMAUDIS SA

## Contexte

- **Client** : AMAUDIS SA (ID: 38699)
- **Commande réelle** : S39656
- **Date commande** : 2025-10-13 07:38:53
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 18,314 input + 3,282 output = 21,596 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 18 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 71.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.10 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 7.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 5.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/08/2025, soit 67 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande début octobre (01/10/2024). En application du principe de précaution B2B et face à un cycle irrégulier dépassant le seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une dominance de l'unité (médiane de 1u). Conformément aux règles sur les rotations faibles (1-2u), la quantité de 1u est maintenue pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 188 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/08/2025, soit plus de 60 jours. Bien que la rotation soit faible, l'historique montre des commandes espacées de 2 à 4 mois. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture ou de besoin imminent est présent selon le principe de précaution B2B (cycle irrégulier). ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 176 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/08/2025, soit plus de 60 jours. Bien que la rotation soit très faible, l'historique montre une commande à la même période l'année dernière (01/10/2024). En application du principe de précaution B2B et pour éviter une rupture sur un cycle long, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. On maintient cette quantité minimale pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 155 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 06/08/2025, soit 67 jours avant la date actuelle. Bien que la rotation soit faible et irrégulière, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60 jours entre mai et juillet). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane basse de l'historique récent et à la dernière commande effectuée, afin d'éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 151 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/08/2025, soit plus de 60 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité en août/juillet. En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité à 1 unité (médiane des commandes de 2025). Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité sans chercher à augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 175 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 06/08/2025, soit plus de 60 jours. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement les intervalles habituels observés l'année précédente (environ 45-60 jours). En application du principe de précaution B2B et pour éviter une rupture sur un horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et à la valeur la plus basse des commandes récentes, conformément à la règle de prudence sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 152 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 06/08/2025, soit plus de 60 jours. L'historique montre une rotation lente mais régulière avec des commandes environ tous les 2 à 3 mois. En 2024, une commande a eu lieu début octobre (01/10). Nous sommes actuellement le 12/10, ce qui indique un besoin imminent pour couvrir la période de fin d'année. En application du principe de précaution B2B et face à un cycle de commande qui dépasse les 60 jours, le risque de rupture est réel dans les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (1u, 2u, 2u, 2u, 3u) et à la quantité commandée l'année dernière à la même période.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 196 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>8. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/08/2025, soit plus de 60 jours. L'historique N-1 montre une commande systématique en octobre (01/10/2024). Le cycle moyen est largement dépassé, le risque de rupture est avéré pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité forte autour de 2 unités (médiane). Les commandes varient entre 1 et 3 unités, mais 2u est la quantité la plus récurrente et prudente pour ce type de rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 162 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>9. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique montre une commande à la même période l'année dernière (octobre 2024). En application du principe de précaution B2B et pour éviter une rupture sur un cycle long/irrégulier, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 171 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>10. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation lente et irrégulière avec un cycle moyen d'environ 70 à 90 jours. La dernière commande enregistrée remonte au 03/06/2025, soit plus de 130 jours sans activité. Selon le principe de précaution B2B, l'absence de commande récente sur une période dépassant largement le cycle habituel crée une incertitude et un risque de rupture imminent pour la période actuelle (octobre). En application de l'étape 1, un besoin est détecté par précaution. Pour la quantité, la médiane historique (1u) est privilégiée afin d'éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 161 tokens
- **Total**: 1,113 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:31:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:52:14: 1u
- 2024-07-11 13:42:17: 1u
- 2024-05-16 06:52:58: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:31:32: 1u
- 2025-06-03 13:57:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:52:14: 1u
- 2024-07-11 13:42:17: 1u
- 2024-03-05 13:30:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:31:32: 1u
- 2025-06-03 13:57:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:52:14: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:31:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 13:42:17: 2u
- 2024-05-16 06:52:58: 1u
- 2024-03-05 13:30:03: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:31:32: 1u
- 2025-06-03 13:57:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 05:58:15: 1u
- 2024-07-11 13:42:17: 2u
- 2024-03-05 13:30:03: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:31:32: 1u
- 2025-06-03 13:57:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:52:14: 1u
- 2024-08-20 05:58:15: 1u
- 2024-07-11 13:42:17: 2u
- 2024-05-16 06:52:58: 2u
- 2024-03-05 13:30:03: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:31:32: 2u
- 2025-06-03 13:57:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:52:14: 2u
- 2024-08-20 05:58:15: 2u
- 2024-05-16 06:52:58: 3u
- 2024-03-05 13:30:03: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:31:32: 2u
- 2025-06-03 13:57:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:52:14: 2u
- 2024-08-20 05:58:15: 3u
- 2024-07-11 13:42:17: 2u
- 2024-05-16 06:52:58: 1u
- 2024-03-05 13:30:03: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 13:57:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:52:14: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 13:57:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:52:14: 2u
- 2024-08-20 05:58:15: 1u
- 2024-07-11 13:42:17: 2u
- 2024-05-16 06:52:58: 1u
- 2024-03-05 13:30:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:48.031Z*
