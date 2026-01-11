# Rapport Backtest - Client CARREFOUR BELGIUM SA, Market intégré Bilzen

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Market intégré Bilzen (ID: 17286)
- **Commande réelle** : S39553
- **Date commande** : 2025-10-06 06:30:12
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 14,199 input + 2,619 output = 16,818 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 31.3% | 16 produits prédits, 5 corrects |
| **Rappel** | 38.5% | 13 produits réels, 5 détectés |
| **F1-Score** | 34.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 60.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/07/2025, soit 93 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en juillet et une autre en mars. Le délai écoulé depuis la dernière commande est important et le cycle est irrégulier. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. La médiane des commandes est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 182 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/07/2025, soit 93 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport à l'historique N-1 (juillet) et le délai de réapprovisionnement de 30 jours créent une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 2u. Conformément à la règle de maintien des quantités pour les faibles rotations (1-2u) et l'utilisation de la valeur récente la plus représentative, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 196 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/07/2025, soit 93 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 154 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 04/07/2025, soit 93 jours sans activité. Bien que l'historique soit limité à une seule commande récente, le délai écoulé dépasse largement un cycle de rotation standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 3 unités, correspondant au volume de la commande la plus récente, afin de reconstituer le stock sur la base de la dernière demande observée.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 126 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/07/2025, soit 93 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés précédemment. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un réapprovisionnement est nécessaire pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 2u. L'historique N-1 montre des volumes faibles (1u et 3u). La médiane des commandes historiques est de 2u. Conformément aux règles de rotation faible, nous maintenons la quantité médiane de 2u sans surestimer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 185 tokens
- **Total**: 1,091 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:05:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-12 07:49:11: 1u
- 2024-03-27 12:50:43: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:05:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-12 07:49:11: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:05:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:05:40: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-12 07:49:11: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:05:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-12 07:49:11: 1u
- 2024-03-27 12:50:43: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |


---

## False Negatives (8)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Never ordered in previous analysis window (no history) |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Never ordered in previous analysis window (no history) |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Never ordered in previous analysis window (no history) |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:19:35.178Z*
