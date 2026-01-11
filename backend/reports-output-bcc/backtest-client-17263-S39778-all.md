# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper St Denijs Westrem

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper St Denijs Westrem (ID: 17263)
- **Commande réelle** : S39778
- **Date commande** : 2025-10-17 12:11:36
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 26,779 input + 4,455 output = 31,234 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 24.1% | 29 produits prédits, 7 corrects |
| **Rappel** | 87.5% | 8 produits réels, 7 détectés |
| **F1-Score** | 37.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 43.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 32.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -31.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 5 | 4.0 | 80.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 4u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 01/09/2025, soit 45 jours avant la date actuelle. Bien que le cycle de commande soit irrégulier (environ 90 jours entre les deux dernières), l'historique de l'année précédente montre une activité plus dense durant le dernier trimestre. En appliquant le principe de précaution B2B face à l'incertitude du cycle et au risque de rupture dans les 30 prochains jours, un besoin est détecté. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes et à la valeur la plus basse observée, afin d'éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 156 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>2. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (cycle moyen constaté de 60 à 90 jours). La dernière commande remonte au 04/08/2025, soit 73 jours avant la date actuelle. Bien que le cycle soit incertain, le délai écoulé dépasse largement les 70% de l'intervalle habituel, créant un risque de rupture imminent pour l'horizon des 30 prochains jours. En application du principe de précaution B2B et de la règle sur les faibles rotations (1-2u), une commande de 1 unité est préconisée (médiane de l'historique récent et N-1).

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 154 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 04/08/2025, soit plus de 70 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le seuil de 30 jours est largement atteint. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (récentes et N-1) et à la dernière commande enregistrée, afin de maintenir un stock minimal sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 128 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 04/08/2025, soit 73 jours avant la date actuelle. L'historique montre une rotation lente et irrégulière (cycles de 70 à 90 jours). Compte tenu du délai écoulé et du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle moyen atteint). Pour la quantité, la médiane historique se situe entre 2 et 3 unités ; conformément aux règles de gestion des rotations faibles, la valeur la plus basse (2 unités) est privilégiée pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 150 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>5. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière. La dernière commande remonte au 05/06/2025, soit plus de 130 jours, ce qui dépasse largement le cycle habituel observé l'année précédente (environ 30 à 60 jours entre les commandes). Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que la période actuelle (octobre) correspond historiquement à une phase d'activité (commandes en août/septembre N-1). La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (1, 1, 2, 2, 3), afin de maintenir un stock minimal sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 183 tokens
- **Total**: 1,139 tokens



</details>


<details>
<summary><strong>6. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/06/2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 30 jours entre mars et avril 2024). En cas de doute sur le cycle, il faut prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé, respectant la règle de ne pas augmenter les stocks sur les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 153 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>7. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 05/06/2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent présente une commande unique de 2 unités. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 161 tokens
- **Total**: 1,036 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:40:35: 2u
- 2025-06-05 06:55:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:38:38: 5u
- 2024-06-11 08:04:15: 1u
- 2024-05-21 08:10:47: 1u
- 2024-04-18 07:16:01: 1u
- 2024-03-21 10:07:29: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>2. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:48:38: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:36:21: 1u
- 2024-08-20 06:38:38: 2u
- 2024-05-21 08:10:47: 1u
- 2024-04-18 07:16:01: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:48:38: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:38:38: 4u
- 2024-06-11 08:04:15: 3u
- 2024-05-21 08:10:47: 1u
- 2024-03-21 10:07:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:48:38: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:38:38: 2u
- 2024-06-11 08:04:15: 3u
- 2024-03-21 10:07:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 06:55:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:36:21: 3u
- 2024-08-20 06:38:38: 2u
- 2024-06-11 08:04:15: 2u
- 2024-05-21 08:10:47: 1u
- 2024-04-18 07:16:01: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 06:55:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 07:16:01: 1u
- 2024-03-21 10:07:29: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 06:55:26: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (22)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 5 | Predicted 5u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Predicted 2u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 2 | Predicted 2u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Predicted 2u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:09:56.458Z*
