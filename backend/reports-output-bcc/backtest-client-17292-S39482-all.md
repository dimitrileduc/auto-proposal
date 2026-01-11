# Rapport Backtest - Client CARREFOUR BELGIUM SA, CRF Hyper Jambes

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CRF Hyper Jambes (ID: 17292)
- **Commande réelle** : S39482
- **Date commande** : 2025-10-01 07:16:28
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 15,673 input + 2,905 output = 18,578 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 41.2% | 17 produits prédits, 7 corrects |
| **Rappel** | 70.0% | 10 produits réels, 7 détectés |
| **F1-Score** | 51.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 21.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 23.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 37 et 62 jours. La dernière commande remonte au 19 août 2025, soit 42 jours avant la date actuelle. Ce délai ayant dépassé 70% du cycle moyen constaté, le risque de rupture dans les 30 prochains jours est avéré (principe de précaution B2B). Concernant la quantité, l'historique récent est extrêmement stable avec des commandes systématiques de 1 unité. La médiane des commandes récentes étant de 1, cette quantité est maintenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 138 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 60 jours (mai-juin-août). La dernière commande datant du 19 août, soit il y a 42 jours, nous atteignons 70% du cycle moyen. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent avant la prochaine fenêtre de commande. Historiquement, les volumes sont stables entre 2 et 3 unités. En appliquant la règle de la médiane sur l'historique récent (2, 2, 3) et le principe de prudence (choisir la valeur la plus basse en cas de doute), une quantité de 2 unités est préconisée pour couvrir les besoins sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 169 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19/08/2025, soit 42 jours. L'historique montre des cycles longs et irréguliers (environ 3 à 4 mois en 2024). Bien que le cycle moyen soit incertain, le délai depuis la dernière commande dépasse largement le seuil de précaution de 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B face à un cycle irrégulier, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 3u, mais l'historique N-1 sur la même période (septembre) indique 1u. Les quantités historiques oscillent entre 1u et 2u. En suivant la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible pour éviter le surstock, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 221 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>4. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 19 août 2025, soit 42 jours avant la date actuelle. Le cycle entre les deux dernières commandes était de 62 jours. En appliquant la règle des 70%, le risque de rupture survient à partir de 43 jours (62 * 0,7). Nous sommes à la veille de cette échéance, et avec un seuil de réapprovisionnement de 30 jours, le besoin est imminent. Conformément à la règle de précaution B2B et à l'historique récent de rotation faible mais constante, la quantité retenue est la médiane des commandes récentes, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 151 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 60 à 70 jours. La dernière commande datant du 19 août (soit 42 jours avant la date actuelle), le risque de rupture est élevé dans l'horizon des 30 jours de réapprovisionnement (seuil de précaution atteint). En 2024, une commande a également été passée début septembre. En suivant la règle de la médiane des quantités récentes (1, 3, 3) et en privilégiant la prudence face à une légère irrégularité, une quantité de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 153 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juin 2025, soit plus de 100 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique face à une absence prolongée de réapprovisionnement. Le risque de rupture est considéré comme présent par défaut. ÉTAPE 2 : Estimation quantité. En l'absence d'historique complexe ou de saisonnalité N-1, la quantité est basée sur la dernière commande connue (3 unités). Conformément aux règles, on maintient ce volume sans surestimation pour éviter un surstock sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 160 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>7. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juin 2025, soit plus de 100 jours. L'historique N-1 montre une commande le 3 septembre 2024, indiquant un besoin cyclique à cette période de l'année. Le délai écoulé dépasse largement le cycle habituel, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes stables entre 2 et 3 unités. La médiane des commandes (3u, 3u, 2u, 2u) se situe à 2.5. En suivant le principe de précaution B2B et la médiane haute constatée sur les commandes les plus récentes (3u), une quantité de 3 unités est préconisée pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 200 tokens
- **Total**: 1,119 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:24:49: 1u
- 2025-06-18 06:28:40: 1u
- 2025-05-12 06:55:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-27 07:07:10: 1u
- 2024-04-25 07:32:17: 1u
- 2024-03-18 15:28:49: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:24:49: 3u
- 2025-06-18 06:28:40: 2u
- 2025-05-12 06:55:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:18:42: 1u
- 2024-06-27 07:07:10: 2u
- 2024-04-25 07:32:17: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:24:49: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:18:42: 1u
- 2024-06-27 07:07:10: 1u
- 2024-03-18 15:28:49: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:24:49: 1u
- 2025-06-18 06:28:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-27 07:07:10: 2u
- 2024-03-18 15:28:49: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:24:49: 3u
- 2025-06-18 06:28:40: 1u
- 2025-05-12 06:55:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:18:42: 2u
- 2024-06-27 07:07:10: 3u
- 2024-04-25 07:32:17: 3u
- 2024-03-18 15:28:49: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 06:28:40: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 06:28:40: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:18:42: 3u
- 2024-06-27 07:07:10: 2u
- 2024-04-25 07:32:17: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 3 | Predicted 3u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:11:16.736Z*
