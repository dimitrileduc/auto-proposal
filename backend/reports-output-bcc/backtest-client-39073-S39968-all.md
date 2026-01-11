# Rapport Backtest - Client SPAR MANHAY LAMBERTDIS

## Contexte

- **Client** : SPAR MANHAY LAMBERTDIS (ID: 39073)
- **Commande réelle** : S39968
- **Date commande** : 2025-10-28 13:39:04
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 18,736 input + 3,278 output = 22,014 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 23.8% | 21 produits prédits, 5 corrects |
| **Rappel** | 55.6% | 9 produits réels, 5 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 42.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière avec un intervalle moyen d'environ 70 à 90 jours. La dernière commande datant du 03 septembre 2025 (soit 54 jours avant la date actuelle), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de réapprovisionnement). En application du principe de précaution B2B et face à un cycle qui tend à se renouveler, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (2u en sept-25 et août-24) afin de couvrir le besoin sans surstocker ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 164 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 03/09/2025, soit 54 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle mensuel standard. En application du principe de précaution B2B et pour couvrir l'horizon de 30 jours (Replenishment Threshold Days), un risque de rupture est identifié. La quantité retenue correspond à la médiane historique récente (1u), conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 119 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>3. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 69 jours entre les deux dernières commandes. Au 27 octobre 2025, 54 jours se sont écoulés depuis la dernière commande du 3 septembre, ce qui représente environ 78% du cycle moyen. Ce dépassement du seuil de 70% indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément au principe de précaution B2B et à la règle de rotation faible, la quantité retenue est la médiane historique de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 144 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>4. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 69 jours (entre juin et septembre). Depuis la dernière commande du 03/09/2025, 54 jours se sont écoulés, ce qui représente environ 78 % du cycle moyen. Ce dépassement du seuil de 70 % indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : L'historique récent montre une consommation constante de 2 unités par commande. La médiane des quantités récentes est de 2. Conformément au principe de précaution B2B et à la stabilité de la rotation, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 165 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 juin 2025, soit plus de 120 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (juillet/août). En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande de 2 unités. L'historique N-1 montre 1 unité. Conformément à la règle de maintien des quantités pour les rotations faibles, la médiane des commandes récentes (2u) est retenue pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 186 tokens
- **Total**: 1,093 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:35:43: 2u
- 2025-06-26 13:23:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 06:40:57: 2u
- 2024-07-05 08:52:40: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:35:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 08:52:40: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:35:43: 2u
- 2025-06-26 13:23:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 14:35:43: 2u
- 2025-06-26 13:23:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 13:23:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 06:40:57: 1u
- 2024-07-05 08:52:40: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [LD011] LD Organic Kids Spread 180 g | 1 | Predicted 1u but not ordered |
| [LD009] LD Organic Asparagus Spread 180 g | 2 | Predicted 2u but not ordered |
| [LD015] LD Onion Spread 180g | 2 | Predicted 2u but not ordered |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 2 | Never ordered in previous analysis window (no history) |
| [LD006] LD Tartinade Olives bio 180g   | 1 | Never ordered in previous analysis window (no history) |
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:17:51.770Z*
