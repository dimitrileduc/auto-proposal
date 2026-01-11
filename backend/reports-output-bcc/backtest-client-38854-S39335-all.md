# Rapport Backtest - Client DLL PROXY FERRIERES DELCOU

## Contexte

- **Client** : DLL PROXY FERRIERES DELCOU (ID: 38854)
- **Commande réelle** : S39335
- **Date commande** : 2025-11-07 11:18:04
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 53
- **Tokens**: 48,768 input + 8,421 output = 57,189 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 13.2% | 53 produits prédits, 7 corrects |
| **Rappel** | 70.0% | 10 produits réels, 7 détectés |
| **F1-Score** | 22.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 5.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 78.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 68.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -78.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 7 | 6.0 | 85.7% | partial | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 7 | 5.0 | 71.4% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 8 | 7.0 | 87.5% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 10 | 9.0 | 90.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 10 | 7.0 | 70.0% | partial | Non | Non | LLM |
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 7u
- **Erreur LLM**: 6u (85.7%)
- **Erreur Mediane**: 6u (85.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre une rotation lente mais régulière. La dernière commande date du 28 octobre 2025, soit il y a 9 jours. En observant l'historique N-1, deux commandes de 1u ont été passées à cette même période (30 octobre et 4 novembre 2024), ce qui indique un besoin saisonnier imminent. Le cycle moyen entre les commandes récentes est d'environ 60-70 jours, mais la récurrence historique à cette date précise crée un doute sur le besoin immédiat. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1u, correspondant à la médiane stricte des commandes récentes et à la stabilité du produit (rotation faible 1-2u).

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 194 tokens
- **Total**: 1,168 tokens



</details>


<details>
<summary><strong>2. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 7u (87.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 40 à 60 jours. La dernière commande date du 28 octobre 2025 (il y a 9 jours). Bien que le cycle ne soit pas encore totalement écoulé, l'historique N-1 montre une commande systématique début novembre (04/11/2024). En application du principe de précaution B2B et pour couvrir l'horizon de 30 jours (Replenishment Threshold), un besoin est identifié. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la quantité commandée à la même période l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 156 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>3. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 5u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 28/10/2025, soit il y a 9 jours. L'historique montre une commande à la même période l'année dernière (04/11/2024). Bien que le cycle soit irrégulier (environ 100 jours récemment), la saisonnalité N-1 indique un besoin immédiat. En application du principe de précaution B2B, un risque de rupture est identifié pour l'horizon de 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont constantes à 2u. La médiane de l'historique global (1, 2, 2, 2, 3) est de 2u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 204 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 8u
- **Erreur LLM**: 7u (87.5%)
- **Erreur Mediane**: 7u (87.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence d'environ 40 jours (dernière commande le 28/10, précédente le 18/09). Avec une date actuelle au 06/11, nous sommes à 9 jours de la dernière commande. Cependant, l'historique N-1 montre une activité spécifique fin octobre et début novembre (30/10 et 04/11). Le seuil de réapprovisionnement de 30 jours couvre la période de rotation habituelle et les dates anniversaires de l'an dernier. Par principe de précaution B2B et pour éviter une rupture sur ce produit à faible rotation, un besoin est détecté. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes et au volume observé l'année dernière à la même période.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 188 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 10u
- **Erreur LLM**: 9u (90.0%)
- **Erreur Mediane**: 8u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 34 jours. La dernière commande datant du 28 octobre (il y a 9 jours), le prochain besoin est estimé autour du 1er décembre, ce qui entre dans l'horizon des 30 jours du seuil de réapprovisionnement. Bien que le volume soit faible et irrégulier, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. La quantité retenue est de 1 unité, correspondant à la valeur la plus basse et fréquente de l'historique récent (médiane entre 1 et 3u), afin de ne pas surstocker un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 161 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 10u
- **Erreur LLM**: 7u (70.0%)
- **Erreur Mediane**: 7u (70.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 août 2025, soit plus de 75 jours. L'historique montre un cycle de commande moyen d'environ 45 à 60 jours. Le délai depuis la dernière commande dépasse largement ce cycle moyen, indiquant un risque de rupture imminent ou déjà avéré dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une grande stabilité avec des commandes de 2u ou 3u. La médiane des commandes (3u) est retenue pour maintenir le stock habituel sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 153 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>7. [JF048] JF DISPLAY SAUCES 250ML </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique, sans augmentation injustifiée.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 182 tokens
- **Total**: 1,053 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 10:51:44: 1u
- 2025-08-22 12:21:34: 1u
- 2025-07-17 09:53:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:09:49: 1u
- 2024-10-30 13:59:20: 1u
- 2024-07-30 08:35:04: 1u
- 2024-05-27 07:30:13: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>2. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 10:51:44: 2u
- 2025-09-18 12:28:28: 1u
- 2025-07-17 09:53:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:09:49: 2u
- 2024-09-24 10:00:15: 1u
- 2024-06-28 11:42:38: 2u
- 2024-05-27 07:30:13: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>3. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 10:51:44: 2u
- 2025-07-17 09:53:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:09:49: 3u
- 2024-09-24 10:00:15: 1u
- 2024-05-27 07:30:13: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 10:51:44: 2u
- 2025-09-18 12:28:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:09:49: 1u
- 2024-10-30 13:59:20: 1u
- 2024-05-27 07:30:13: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-28 10:51:44: 2u
- 2025-09-18 12:28:28: 1u
- 2025-08-22 12:21:34: 3u
- 2025-07-17 09:53:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:59:20: 1u
- 2024-06-28 11:42:38: 5u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 12:21:34: 3u
- 2025-07-17 09:53:53: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:09:49: 2u
- 2024-09-24 10:00:15: 3u
- 2024-07-30 08:35:04: 2u
- 2024-06-28 11:42:38: 3u
- 2024-05-27 07:30:13: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>7. [JF048] JF DISPLAY SAUCES 250ML </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 12:58:08: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (46)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Predicted 1u but not ordered |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 2 | Predicted 2u but not ordered |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Predicted 2u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |
| [LD014] LD Organic Avocado Spread 180 g | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [LD015] LD Onion Spread 180g | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [TVF013] TVF DISPLAY TARTINADES 200ML | 1 | Never ordered in previous analysis window (no history) |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Never ordered in previous analysis window (no history) |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:16:24.606Z*
