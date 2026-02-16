# Rapport Backtest - Client Bavaria Shop

## Contexte

- **Client** : Bavaria Shop (ID: 17954)
- **Commande réelle** : S40321
- **Date commande** : 2025-11-14 10:26:38
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,567 input + 2,191 output = 15,758 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 41.7% | 12 produits prédits, 5 corrects |
| **Rappel** | 83.3% | 6 produits réels, 5 détectés |
| **F1-Score** | 55.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -6.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 5 | 8 | 3.0 | 37.5% | partial | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 8u
- **Erreur LLM**: 3u (37.5%)
- **Erreur Mediane**: 3u (37.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 septembre 2025, soit 57 jours avant la date actuelle. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ 3-4 mois), ce qui crée une incertitude sur l'état des stocks. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 5 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes et historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 145 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>2. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 57 jours avant la date actuelle. Bien que l'historique soit limité, le délai écoulé dépasse largement les cycles standards de réapprovisionnement pour ce type de produit. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 2 unités. L'historique N-1 à la même période n'étant pas disponible (dernière commande N-1 en juillet), on se base sur la quantité la plus récente. La médiane des commandes récentes est de 2 unités. On maintient ce volume pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 196 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>3. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 17 septembre 2025, soit 57 jours avant la date actuelle. Bien que l'historique soit limité, le délai écoulé dépasse largement un cycle mensuel standard et le seuil de réapprovisionnement de 30 jours est atteint. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la dernière commande connue (médiane du flux récent), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 134 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>4. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 17 septembre, soit 57 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence de cycle établi, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture de stock prolongée. ÉTAPE 2 : La seule référence historique récente est de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et régulières, la quantité retenue est la médiane de l'historique disponible, soit 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 147 tokens
- **Total**: 1,018 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 57 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle habituel suggéré par l'historique. En application du principe de précaution B2B (risque de rupture sur un horizon de 30 jours), un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité parfaite à 2 unités. Conformément à la règle sur les rotations faibles, la quantité de 2 unités est maintenue pour assurer le réapprovisionnement sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 156 tokens
- **Total**: 1,044 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:38:17: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 06:15:40: 3u
- 2024-03-15 09:03:17: 5u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:38:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 06:15:40: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:38:17: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 06:15:40: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:38:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:38:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 06:15:40: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 3 | Predicted 3u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 5 | Predicted 5u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:12:36.838Z*
