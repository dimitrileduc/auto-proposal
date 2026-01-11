# Rapport Backtest - Client VRAC & CO

## Contexte

- **Client** : VRAC & CO (ID: 39102)
- **Commande réelle** : S39330
- **Date commande** : 2025-11-03 12:16:45
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 54
- **Tokens**: 47,612 input + 7,927 output = 55,539 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 27.6% | 29 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 43.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 90 jours entre les commandes récentes (juin à septembre). Depuis la dernière commande du 02/09/2025, 61 jours se sont écoulés, ce qui représente environ 68% du cycle moyen. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent durant cette période. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane de l'historique récent et à la quantité commandée à la même période l'année précédente (août/novembre 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 162 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>2. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 02/09/2025, soit 61 jours avant la date actuelle. Bien que l'historique soit très faible (rotation lente), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours et suggère un besoin potentiel de renouvellement du stock pour éviter une rupture prolongée. En application du principe de précaution B2B et face à un cycle irrégulier, une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes passées (1u en 2024 et 1u en 2025), respectant la règle de ne pas augmenter les quantités sur les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 169 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 60 jours (juin à juillet, puis juillet à septembre). Depuis la dernière commande du 2 septembre 2025, 61 jours se sont écoulés, ce qui dépasse le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. En suivant la règle de la médiane sur les quantités récentes (toutes à 1u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 131 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 35 à 60 jours. La dernière commande date du 02/09/2025, soit il y a 61 jours. Le délai dépasse le cycle habituel et l'horizon de réapprovisionnement de 30 jours est largement atteint. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les trois dernières commandes sont constantes à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 160 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique récent montre un cycle de commande moyen d'environ 60 jours (juin à juillet, puis juillet à septembre). Depuis la dernière commande du 02/09/2025, 61 jours se sont écoulés, ce qui dépasse le cycle habituel. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En suivant le principe de précaution B2B et la règle de la médiane sur une rotation faible et régulière, une commande de 1 unité est nécessaire pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 133 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle observé entre les deux dernières commandes est de 91 jours. La dernière commande date du 02/09/2025, soit il y a 61 jours. Le délai actuel représente 67% du cycle moyen, ce qui approche du seuil de risque (70%) dans l'horizon des 30 jours de réapprovisionnement. Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais régulière, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes de 1 unité. La médiane est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 181 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 09/07/2025, soit environ 116 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles habituels observés entre l'année dernière et cette année. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 128 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit environ 150 jours. Bien que la rotation soit extrêmement faible, l'historique montre une commande à la même période l'année précédente (août). En B2B, le principe de précaution s'applique pour éviter une rupture prolongée sur un produit à cycle lent mais présent. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. Conformément aux règles pour les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 160 tokens
- **Total**: 1,046 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:41:21: 2u
- 2025-06-03 13:52:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:03:44: 2u
- 2024-05-21 07:34:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:41:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-21 07:34:29: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:41:21: 1u
- 2025-07-09 11:11:22: 1u
- 2025-06-03 13:52:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:41:21: 1u
- 2025-07-09 11:11:22: 1u
- 2025-06-03 13:52:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:41:21: 1u
- 2025-07-09 11:11:22: 1u
- 2025-06-03 13:52:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:41:21: 1u
- 2025-06-03 13:52:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:11:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:03:44: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 13:52:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:03:44: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (21)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Predicted 1u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [SOWA01] SOWA citron menthe 250ml | 1 | Predicted 1u but not ordered |
| [SOWA04] SOWA thé glacé pêche 250ml | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [MF0052] MF Pois chiches  500g | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:09.320Z*
