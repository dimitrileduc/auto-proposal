# Rapport Backtest - Client CRF MARKET GEMBLOUX SWISS DIST

## Contexte

- **Client** : CRF MARKET GEMBLOUX SWISS DIST (ID: 38742)
- **Commande réelle** : S39760
- **Date commande** : 2025-10-21 07:46:48
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 33
- **Tokens**: 30,564 input + 5,290 output = 35,854 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 32.3% | 31 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 48.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


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
L'analyse du cycle de commande montre des intervalles variant entre 30 et 60 jours. La dernière commande remonte au 09/09/2025, soit 41 jours avant la date actuelle. Ce délai dépasse 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément au principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, l'historique récent et N-1 montre une médiane stable de 2 unités (malgré une baisse ponctuelle à 1u en septembre). En suivant la règle de la médiane historique, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,023 tokens
- **Output**: 167 tokens
- **Total**: 1,190 tokens



</details>


<details>
<summary><strong>2. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/09/2025, soit 41 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais espacé (environ tous les 2 à 4 mois). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans une zone d'incertitude où le risque de rupture devient probable selon le principe de précaution B2B. En suivant la règle de la médiane sur l'historique récent et passé (majoritairement des commandes de 1u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 149 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 30 à 60 jours. La dernière commande remonte au 09/09/2025, soit 41 jours avant la date actuelle. Le cycle moyen étant largement entamé et dépassant le seuil de 70%, le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Historiquement, tant sur l'année en cours que sur l'année précédente (N-1), les quantités commandées sont systématiquement de 1 unité. En suivant la règle de la médiane et de la stabilité pour les faibles rotations, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 161 tokens
- **Total**: 1,168 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 54 à 82 jours. La dernière commande datant du 09/09/2025 (soit 41 jours), nous entrons dans la fenêtre de risque de rupture (seuil de 70% du cycle moyen atteint) pour les 30 prochains jours. Conformément au principe de précaution B2B et à la rotation très faible mais régulière du produit, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes récentes et à l'historique N-1 pour cette période.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 142 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/09/2025, soit 41 jours. Le cycle récent entre les deux dernières commandes était de 29 jours. Nous avons largement dépassé ce cycle (141% du cycle moyen), ce qui indique un risque de rupture imminent ou une vente manquée. De plus, l'historique N-1 montre une commande à la même période (07/10/2024). Le besoin est confirmé par précaution. ÉTAPE 2 : Estimation quantité. L'historique est extrêmement stable avec une quantité constante de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 179 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>6. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 2 à 3 mois. La dernière commande datant du 9 septembre 2025 (il y a 41 jours), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de réapprovisionnement). Bien que la dernière commande fût de 1 unité, l'historique récent et N-1 montre une médiane stable de 2 unités. En application du principe de précaution B2B et pour couvrir le cycle habituel, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 140 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>7. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 11 août 2025, soit 70 jours avant la date actuelle. L'historique montre une rotation très faible et irrégulière (environ tous les 2 à 3 mois). Bien que le cycle soit difficile à définir précisément, le délai écoulé dépasse largement les intervalles observés l'année précédente (mai à août). Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente, un besoin est détecté. ÉTAPE 2 : L'historique récent et N-1 montre une constante de 1 unité par commande. La médiane des quantités est de 1. Conformément à la règle sur les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 173 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 août 2025, soit 70 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 60 à 80 jours (ex: juin à août, août à octobre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle est déjà dépassé. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique est extrêmement stable avec des commandes systématiques de 1 unité. La médiane et la constante étant de 1, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 168 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en juillet. Le délai écoulé dépasse largement le cycle habituel, créant un doute sur la disponibilité du stock. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter la rupture sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 165 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>10. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucun historique récent disponible pour 2025. L'historique N-1 montre des commandes sporadiques (mars et juillet). En l'absence de données récentes et compte tenu du principe de précaution B2B, un risque de rupture est identifié pour couvrir la période à venir. ÉTAPE 2 : Estimation de la quantité. En se basant sur l'historique N-1 (1u en mars et 1u en juillet), la médiane est de 1 unité. Conformément à la règle sur les rotations très faibles, on maintient la quantité minimale de 1 unité pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 158 tokens
- **Total**: 1,063 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 10:47:10: 1u
- 2025-08-11 08:25:08: 2u
- 2025-06-18 06:18:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:33:18: 2u
- 2024-08-29 06:04:31: 2u
- 2024-07-18 12:54:08: 2u
- 2024-06-20 11:44:25: 0u
- 2024-05-28 12:27:34: 2u
- 2024-04-16 09:08:25: 2u
- 2024-03-25 13:53:45: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 10:47:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:33:18: 2u
- 2024-06-20 11:44:25: 1u
- 2024-04-16 09:08:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 10:47:10: 1u
- 2025-08-11 08:25:08: 1u
- 2025-06-18 06:18:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:33:18: 1u
- 2024-08-29 06:04:31: 1u
- 2024-06-20 11:44:25: 1u
- 2024-05-28 12:27:34: 1u
- 2024-04-16 09:08:25: 1u
- 2024-03-25 13:53:45: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 10:47:10: 1u
- 2025-08-11 08:25:08: 1u
- 2025-06-18 06:18:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:33:18: 1u
- 2024-08-29 06:04:31: 2u
- 2024-06-20 11:44:25: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 10:47:10: 1u
- 2025-08-11 08:25:08: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:33:18: 1u
- 2024-07-18 12:54:08: 1u
- 2024-06-20 11:44:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 10:47:10: 1u
- 2025-08-11 08:25:08: 2u
- 2025-06-18 06:18:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:04:31: 2u
- 2024-07-18 12:54:08: 2u
- 2024-06-20 11:44:25: 0u
- 2024-04-16 09:08:25: 2u
- 2024-03-25 13:53:45: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:25:08: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:04:31: 1u
- 2024-06-20 11:44:25: 0u
- 2024-05-28 12:27:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:25:08: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:33:18: 1u
- 2024-08-29 06:04:31: 1u
- 2024-06-20 11:44:25: 1u
- 2024-03-25 13:53:45: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 06:18:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-18 12:54:08: 1u
- 2024-06-20 11:44:25: 0u
- 2024-04-16 09:08:25: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-18 12:54:08: 1u
- 2024-06-20 11:44:25: 0u
- 2024-03-25 13:53:45: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (21)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:12.427Z*
