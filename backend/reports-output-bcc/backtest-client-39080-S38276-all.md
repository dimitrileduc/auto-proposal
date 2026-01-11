# Rapport Backtest - Client SPAR SINT-GENESIUS-RHODE WICARO

## Contexte

- **Client** : SPAR SINT-GENESIUS-RHODE WICARO (ID: 39080)
- **Commande réelle** : S38276
- **Date commande** : 2025-08-04 13:52:50
- **Date cutoff système** : 2025-08-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 19
- **Tokens**: 17,309 input + 2,927 output = 20,236 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.4% | 19 produits prédits, 9 corrects |
| **Rappel** | 64.3% | 14 produits réels, 9 détectés |
| **F1-Score** | 54.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.22 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 11.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 80 jours. La dernière commande datant du 8 mai (soit il y a 87 jours), le cycle habituel est largement dépassé, ce qui indique un besoin imminent ou une rupture de stock probable. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. Concernant la quantité, l'historique montre une rotation très faible et régulière (majoritairement 1u, avec un pic à 2u). Conformément aux règles de gestion des faibles rotations, la médiane de 1 unité est retenue pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 151 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/05/2025, soit environ 87 jours. Bien que la rotation soit faible, l'historique montre des commandes espacées de 49 à 80 jours. Nous avons largement dépassé le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B. La médiane des commandes récentes et historiques est de 1 unité (malgré un pic à 2u en mai). En suivant la règle de prudence sur les quantités, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 140 tokens
- **Total**: 1,060 tokens



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
L'analyse de l'historique montre une rotation très faible et irrégulière (environ une unité tous les 2 à 3 mois). La dernière commande remonte au 8 mai 2025, soit 87 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen observé, ce qui indique un besoin de réapprovisionnement imminent pour éviter une rupture prolongée. En application du principe de précaution B2B et de la règle sur les faibles rotations, la quantité retenue est de 1 unité, correspondant à la médiane constante des commandes passées.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 128 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le produit présente une rotation lente mais régulière avec un cycle moyen constaté d'environ 50 à 80 jours. La dernière commande remonte au 08/05/2025, soit 87 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un besoin immédiat pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent et N-1 montre une constance absolue avec des commandes unitaires (1u). En suivant la règle de la médiane et du maintien des faibles rotations, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 156 tokens
- **Total**: 1,077 tokens



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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 20 mars 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande fin avril. En application du principe de précaution B2B et face à un cycle irrégulier/long, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des commandes unitaires systématiques (1u). La médiane des quantités est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 176 tokens
- **Total**: 1,080 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 mars 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique montre une commande en avril l'année dernière et une en mars cette année. En B2B, le principe de précaution s'applique face à un cycle irrégulier pour éviter une rupture prolongée sur un produit de niche. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constante de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 170 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>7. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 20 mars 2025, soit plus de 130 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles observés l'année précédente (environ 80 jours entre avril et juillet 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 137 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>8. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 20 mars 2025, soit plus de 130 jours sans activité pour ce produit. Bien que la rotation soit très faible (1 unité par commande), l'historique de l'année précédente montre une commande en juillet (2024-07-19). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours face à un cycle irrégulier, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte des commandes historiques (1u) pour éviter tout surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 155 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>9. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 mars 2025, soit plus de 130 jours. Bien que la rotation soit extrêmement faible et irrégulière, le principe de précaution B2B s'applique face à une absence prolongée de mouvement. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) montre une constante de 1 unité par commande. En suivant la règle de maintien des rotations très faibles (1-2u) et la médiane historique, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 140 tokens
- **Total**: 1,045 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:48:45: 2u
- 2025-03-20 08:10:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-19 06:22:02: 1u
- 2024-04-29 12:39:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:48:45: 2u
- 2025-03-20 08:10:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-19 06:22:02: 1u
- 2024-04-29 12:39:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:48:45: 1u
- 2025-03-20 08:10:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-19 06:22:02: 1u
- 2024-04-29 12:39:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 06:48:45: 1u
- 2025-03-20 08:10:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-19 06:22:02: 1u
- 2024-04-29 12:39:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-20 08:10:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-19 06:22:02: 0u
- 2024-04-29 12:39:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-20 08:10:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-19 06:22:02: 0u
- 2024-04-29 12:39:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-20 08:10:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-19 06:22:02: 1u
- 2024-04-29 12:39:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-20 08:10:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-19 06:22:02: 1u
- 2024-04-29 12:39:07: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-20 08:10:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-19 06:22:02: 0u
- 2024-04-29 12:39:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Never ordered in previous analysis window (no history) |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Never ordered in previous analysis window (no history) |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Never ordered in previous analysis window (no history) |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:19:57.634Z*
