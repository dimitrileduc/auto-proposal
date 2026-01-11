# Rapport Backtest - Client DLL PROXY BEAUFAYS HULEMAS.GT

## Contexte

- **Client** : DLL PROXY BEAUFAYS HULEMAS.GT (ID: 38851)
- **Commande réelle** : S40141
- **Date commande** : 2025-11-05 13:28:13
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 41
- **Tokens**: 38,194 input + 6,555 output = 44,749 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 19.5% | 41 produits prédits, 8 corrects |
| **Rappel** | 72.7% | 11 produits réels, 8 détectés |
| **F1-Score** | 30.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -9.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible mais régulière avec une quantité constante de 1 unité par commande. Le cycle moyen constaté est d'environ 60 à 80 jours. La dernière commande datant du 02 octobre 2025 (soit 33 jours avant la date actuelle), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B et de la règle de maintien des faibles rotations, une commande de 1 unité (médiane historique) est nécessaire pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 142 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 02/10/2025, soit 33 jours avant la date actuelle. Le cycle moyen observé entre les commandes récentes est d'environ 50 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (33 jours écoulés + 30 jours de seuil = 63 jours, dépassant le cycle moyen). Bien que la dernière commande fût de 2 unités, l'historique long terme (N-1) montre une récurrence très stable de 1 unité par commande. En application de la règle de prudence B2B et du choix de la valeur la plus basse en cas de doute sur une faible rotation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 182 tokens
- **Total**: 1,189 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement moyenne d'environ 40 à 50 jours. La dernière commande datant du 02 octobre (il y a 33 jours), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de 70% du cycle dépassé). L'historique récent est extrêmement stable avec une quantité constante de 2 unités sur les quatre dernières commandes. En appliquant la règle de la médiane et de la stabilité du cycle récent, une commande de 2 unités est préconisée pour couvrir les besoins du mois à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 142 tokens
- **Total**: 1,181 tokens



</details>


<details>
<summary><strong>4. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique montre une rotation très faible et irrégulière (1 unité par commande). La dernière commande remonte au 13 août 2025, soit plus de 80 jours. Bien que le cycle soit lent, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les intervalles observés l'année précédente à la même période. Un risque de rupture est identifié pour les 30 prochains jours. Conformément aux règles de gestion des faibles rotations, la quantité retenue est de 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 130 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 30 à 60 jours. La dernière commande remontant au 13 août 2025 (soit plus de 80 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou un besoin non couvert. Conformément au principe de précaution B2B et à la règle de rotation faible (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes récentes et historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 140 tokens
- **Total**: 1,095 tokens



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
Le produit présente une rotation très faible et irrégulière (cycle moyen estimé à environ 90-120 jours). La dernière commande remonte au 16 juillet 2025, soit plus de 110 jours. Bien que le cycle soit difficile à déterminer précisément, le principe de précaution B2B s'applique car nous avons largement dépassé les intervalles constatés l'année précédente (mai-juillet-octobre). Afin d'éviter une rupture sur un produit à faible volume, une commande est nécessaire. Conformément à la règle des rotations faibles (1-2u) et à l'historique constant, la quantité retenue est la médiane de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 155 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 16 juillet 2025, soit plus de 110 jours. Bien que le cycle historique semble irrégulier, le délai écoulé dépasse largement la fréquence observée entre juin et juillet (30 jours). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : L'historique récent montre des commandes de 2u et 4u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 160 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>8. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique récent est quasi inexistant (0 unité en juin), mais les données N-1 indiquent une commande à cette période de l'année (juillet). En l'absence de cycle de rotation clair et compte tenu du délai important depuis la dernière interaction (plus de 140 jours), le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. La quantité retenue se base sur l'historique N-1 (1 unité), ce qui correspond à la quantité minimale pour un produit à rotation très faible.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 125 tokens
- **Total**: 1,013 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:16:53: 1u
- 2025-07-16 11:36:31: 1u
- 2025-06-16 08:38:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 08:51:34: 1u
- 2024-08-14 05:50:19: 1u
- 2024-07-16 14:11:14: 1u
- 2024-06-20 12:46:30: 1u
- 2024-04-25 08:14:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:16:53: 2u
- 2025-08-13 13:10:58: 1u
- 2025-06-16 08:38:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 07:58:15: 1u
- 2024-09-19 08:51:34: 1u
- 2024-08-14 05:50:19: 1u
- 2024-07-16 14:11:14: 1u
- 2024-06-20 12:46:30: 1u
- 2024-03-27 12:44:04: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:16:53: 2u
- 2025-08-13 13:10:58: 2u
- 2025-07-16 11:36:31: 2u
- 2025-06-16 08:38:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 07:58:15: 1u
- 2024-09-19 08:51:34: 3u
- 2024-08-14 05:50:19: 2u
- 2024-07-16 14:11:14: 1u
- 2024-06-20 12:46:30: 3u
- 2024-05-22 09:11:19: 2u
- 2024-04-25 08:14:08: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 13:10:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 05:50:19: 1u
- 2024-04-25 08:14:08: 1u
- 2024-03-27 12:44:04: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 13:10:58: 1u
- 2025-07-16 11:36:31: 1u
- 2025-06-16 08:38:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 08:51:34: 1u
- 2024-06-20 12:46:30: 3u
- 2024-05-22 09:11:19: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 11:36:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 07:58:15: 1u
- 2024-07-16 14:11:14: 1u
- 2024-05-22 09:11:19: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 11:36:31: 2u
- 2025-06-16 08:38:21: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-25 08:14:08: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 08:38:21: 0u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 14:11:14: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (33)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Predicted 2u but not ordered |
| [LD008] LD Tartinade Pois chiches bio 180g   | 2 | Predicted 2u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |
| [LD014] LD Organic Avocado Spread 180 g | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Predicted 1u but not ordered |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:08:10.723Z*
