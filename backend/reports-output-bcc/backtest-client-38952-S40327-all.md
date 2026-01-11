# Rapport Backtest - Client ITM LIMELETTE OTTIGNIES FOUGIS

## Contexte

- **Client** : ITM LIMELETTE OTTIGNIES FOUGIS (ID: 38952)
- **Commande réelle** : S40327
- **Date commande** : 2025-11-14 12:33:27
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 23
- **Tokens**: 20,993 input + 3,783 output = 24,776 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.4% | 23 produits prédits, 7 corrects |
| **Rappel** | 63.6% | 11 produits réels, 7 détectés |
| **F1-Score** | 41.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 28.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -8.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 03/10/2025, soit 41 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais fréquent (environ tous les 1 à 2 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car nous avons dépassé le délai habituel de réassort. En application du principe de précaution B2B et de la règle des 70% du cycle, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la dernière quantité commandée, afin de maintenir le stock sans surstockage sur ce produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 164 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/10/2025, soit 41 jours. L'historique montre une commande récurrente à cette période l'année dernière (22/10/2024). Bien que le cycle soit irrégulier, le délai écoulé dépasse largement le seuil de précaution de 30 jours. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité autour de 2 unités (médiane). Les pics à 3u ou baisses à 1u sont ponctuels. On maintient la quantité standard de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 176 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 27 juin 2025, soit plus de 130 jours. Bien que l'historique récent soit limité, l'analyse de l'année précédente (N-1) montre une commande systématique durant la période d'octobre/novembre (22/10/2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane historique et au volume habituel hors pic exceptionnel de juin.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 146 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>4. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la même période (22 octobre 2024). Le délai écoulé dépasse largement le cycle habituel, créant un risque de rupture ou un besoin de renouvellement de stock pour la période de fin d'année. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes entre 1 et 2 unités. En suivant la règle de précaution B2B et la médiane des commandes (2u en juin 2025, 2u en avril 2024), une quantité de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 197 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 juin 2025, soit plus de 130 jours. L'historique N-1 montre des commandes en juillet, septembre et mars, suggérant une rotation lente mais régulière (cycle d'environ 60-90 jours). Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique est extrêmement stable avec des commandes systématiques de 2 unités. La médiane et la constante historique étant de 2, cette quantité est maintenue pour éviter la rupture sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 177 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>6. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 27 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles historiques observés (environ 90 jours entre les commandes de 2024). En application du principe de précaution B2B et compte tenu du seuil de réapprovisionnement de 30 jours, un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre des commandes unitaires (1u) avec un pic à 2u en juin. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 189 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>7. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 27 juin 2025, soit plus de 130 jours. Bien que la rotation soit extrêmement faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit alimentaire. En application du principe de précaution B2B (incertitude sur le cycle = prévoir), un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 169 tokens
- **Total**: 1,043 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:16:26: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 08:52:11: 1u
- 2024-09-13 11:44:49: 1u
- 2024-07-17 11:07:37: 3u
- 2024-03-15 09:08:51: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 06:16:26: 2u
- 2025-06-27 09:01:44: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 08:52:11: 2u
- 2024-09-13 11:44:49: 1u
- 2024-07-17 11:07:37: 3u
- 2024-04-18 12:00:02: 1u
- 2024-03-15 09:08:51: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-27 09:01:44: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 08:52:11: 1u
- 2024-07-17 11:07:37: 1u
- 2024-04-18 12:00:02: 1u
- 2024-03-15 09:08:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-27 09:01:44: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 08:52:11: 1u
- 2024-07-17 11:07:37: 1u
- 2024-04-18 12:00:02: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-27 09:01:44: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:44:49: 2u
- 2024-07-17 11:07:37: 2u
- 2024-03-15 09:08:51: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-27 09:01:44: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:44:49: 1u
- 2024-07-17 11:07:37: 1u
- 2024-04-18 12:00:02: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-27 09:01:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Predicted 2u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [FIL26] FIL SAMOURAI 300ML SQUEEZE  | 0 | Never ordered in previous analysis window (no history) |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:11:44.555Z*
