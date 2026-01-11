# Rapport Backtest - Client DELISALADES

## Contexte

- **Client** : DELISALADES (ID: 23733)
- **Commande réelle** : S40322
- **Date commande** : 2025-11-13 12:24:21
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 23
- **Tokens**: 22,925 input + 3,849 output = 26,774 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.8% | 23 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 51.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.63 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 42.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV140] LV Moutarde à l'ancienne  200ml | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 12 | 6 | 6.0 | 100.0% | partial | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 5 | 8 | 3.0 | 37.5% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [LV140] LV Moutarde à l'ancienne  200ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 20 à 30 jours entre chaque réapprovisionnement (20 jours entre les deux dernières, 23 jours précédemment). La dernière commande datant du 23 octobre, soit il y a 20 jours, le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold). Concernant la quantité, les quatre dernières commandes sont stabilisées à 3 unités. En suivant la règle de la médiane et de la stabilité du cycle récent, une commande de 3 unités est nécessaire pour couvrir les besoins du prochain mois.

**Tokens utilises pour cette prediction:**
- **Input**: 1,040 tokens
- **Output**: 140 tokens
- **Total**: 1,180 tokens



</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 25 à 30 jours (intervalles récents de 20, 23 et 34 jours). La dernière commande datant du 23 octobre (soit 20 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. En application de la règle de précaution B2B, une commande est nécessaire. Pour la quantité, la médiane des commandes récentes (3, 4, 4, 6, 8, 10) est de 5, mais conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de maintien de rotation stable, la quantité de 4 unités (fréquente dans l'historique récent et N-1) est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,159 tokens
- **Output**: 196 tokens
- **Total**: 1,355 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 12u vs Médiane: 9u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12u
- **Baseline calculee**: 12u
- **Mediane historique**: 9u
- **Reel commande**: 6u
- **Erreur LLM**: 6u (100.0%)
- **Erreur Mediane**: 3u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12u (risque detecte)

**Raisonnement LLM:**
Le cycle de commande récent montre un intervalle moyen d'environ 32 jours (43 jours, 34 jours, 15 jours, 35 jours). La dernière commande datant du 23 octobre (soit 20 jours avant la date actuelle), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de 70% du cycle atteint). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est déterminée par la médiane des commandes récentes (8, 8, 12, 15, 15), soit 12 unités. Cette valeur est cohérente avec l'historique N-1 qui montrait également une activité soutenue en octobre/novembre.

**Tokens utilises pour cette prediction:**
- **Input**: 1,145 tokens
- **Output**: 179 tokens
- **Total**: 1,324 tokens



</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 03/10/2025, soit environ 40 jours. Historiquement, une commande a eu lieu à la même période l'année dernière (07/10/2024). Compte tenu du délai écoulé et du seuil de réapprovisionnement de 30 jours, il existe un risque de rupture imminent. En suivant le principe de précaution B2B et la règle de la médiane sur un historique de faible rotation (1-2u), la quantité de 1 unité est préconisée (choix de la valeur la plus basse en cas de doute pour éviter le surstockage).

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 163 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 03/10/2025, soit 40 jours avant la date actuelle. Bien que l'historique soit à faible rotation, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (2u en oct 2025 et oct 2024) et respectant la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 142 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>6. [JF021] JF PICKLES 350 ML</strong> - LLM: 5u vs Médiane: 5u (Réel: 8u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'environ 70 à 90 jours. La dernière commande datant du 03 octobre 2025 (il y a 40 jours), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days), d'autant plus qu'une commande avait été passée à la même période l'année précédente (07 octobre 2024). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 5 unités, correspondant à la médiane entre les commandes récentes (4u, 6u) et l'historique N-1 (5u), évitant ainsi le pic exceptionnel de 10u constaté par le passé.

**Tokens utilises pour cette prediction:**
- **Input**: 967 tokens
- **Output**: 183 tokens
- **Total**: 1,150 tokens



</details>


<details>
<summary><strong>7. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 25 à 30 jours (intervalles de 23, 34, 28 et 40 jours). La dernière commande datant du 03 octobre (soit 40 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent. Pour la quantité, la médiane des commandes récentes (4, 2, 4, 10, 5) est de 4 unités. Ce volume est cohérent avec l'historique N-1 à la même période (8u et 4u en fin d'année 2024). En suivant le principe de précaution B2B et la règle de la médiane, une commande de 4 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,126 tokens
- **Output**: 202 tokens
- **Total**: 1,328 tokens



</details>


<details>
<summary><strong>8. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 23 juillet 2025, soit plus de 110 jours. Bien que l'historique récent soit limité à une seule commande, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 10 à 70 jours). En application du principe de précaution B2B (Étape 1), un besoin est détecté car le risque de rupture est élevé compte tenu de l'absence de réapprovisionnement récent. Pour la quantité (Étape 2), la médiane des commandes historiques (récentes et N-1) est de 4 unités. Cette valeur est stable et cohérente avec le profil de rotation du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 156 tokens
- **Total**: 1,078 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [LV140] LV Moutarde à l'ancienne  200ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 09:44:15: 3u
- 2025-10-03 08:03:20: 3u
- 2025-09-10 08:42:30: 3u
- 2025-08-07 09:13:18: 3u
- 2025-07-23 10:06:55: 2u
- 2025-06-18 07:19:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 10:06:10: 4u
- 2024-06-17 08:26:34: 2u
- 2024-06-04 07:52:11: 1u
- 2024-05-14 14:28:33: 2u
- 2024-02-12 12:18:18: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 09:44:15: 4u
- 2025-10-03 08:03:20: 8u
- 2025-09-10 08:42:30: 3u
- 2025-08-07 09:13:18: 4u
- 2025-07-23 10:06:55: 10u
- 2025-06-18 07:19:28: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 14:18:31: 6u
- 2024-10-07 12:34:29: 4u
- 2024-09-12 09:46:28: 4u
- 2024-08-12 12:27:21: 6u
- 2024-07-16 10:06:10: 10u
- 2024-06-17 08:26:34: 2u
- 2024-06-04 07:52:11: 6u
- 2024-05-14 14:28:33: 8u
- 2024-04-05 09:30:21: 4u
- 2024-03-07 14:50:08: 4u
- 2024-01-25 09:32:53: 6u
- 2024-01-03 14:44:54: 6u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-23 09:44:15: 12u
- 2025-09-10 08:42:30: 15u
- 2025-08-07 09:13:18: 8u
- 2025-07-23 10:06:55: 15u
- 2025-06-18 07:19:28: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 14:18:31: 6u
- 2024-10-07 12:34:29: 10u
- 2024-09-12 09:46:28: 6u
- 2024-08-12 12:27:21: 8u
- 2024-07-16 10:06:10: 20u
- 2024-06-17 08:26:34: 4u
- 2024-06-04 07:52:11: 4u
- 2024-05-14 14:28:33: 6u
- 2024-04-18 12:24:57: 8u
- 2024-04-05 09:30:21: 6u
- 2024-03-26 10:49:17: 6u
- 2024-03-07 14:50:08: 6u

**Quantite Mediane (fallback)**: 12u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 08:03:20: 2u
- 2025-07-23 10:06:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:34:29: 1u
- 2024-06-17 08:26:34: 0u
- 2024-03-26 10:49:17: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 08:03:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:34:29: 2u
- 2024-06-17 08:26:34: 0u
- 2024-05-14 14:28:33: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF021] JF PICKLES 350 ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 08:03:20: 6u
- 2025-07-23 10:06:55: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:34:29: 5u
- 2024-06-17 08:26:34: 0u
- 2024-05-14 14:28:33: 4u
- 2024-04-05 09:30:21: 10u
- 2024-03-26 10:49:17: 4u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>7. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 08:03:20: 4u
- 2025-09-10 08:42:30: 2u
- 2025-08-07 09:13:18: 4u
- 2025-07-23 10:06:55: 10u
- 2025-06-18 07:19:28: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 14:18:31: 8u
- 2024-09-12 09:46:28: 4u
- 2024-07-16 10:06:10: 15u
- 2024-06-17 08:26:34: 3u
- 2024-05-14 14:28:33: 8u
- 2024-04-18 12:24:57: 3u
- 2024-03-07 14:50:08: 4u
- 2024-02-12 12:18:18: 3u
- 2024-01-03 14:44:54: 4u
- 2023-12-07 13:55:19: 8u
- 2023-11-23 10:34:37: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>8. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 10:06:55: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 08:26:34: 4u
- 2024-04-05 09:30:21: 3u
- 2024-03-26 10:49:17: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV146] LV Sauce Aïoli 200 ml | 2 | Predicted 2u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 2 | Predicted 2u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | Predicted 6u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 3 | Predicted 3u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 3 | Predicted 3u but not ordered |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 2 | Predicted 2u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | Predicted 2u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | Predicted 4u but not ordered |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | Predicted 2u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 3 | Predicted 3u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Predicted 3u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:58.350Z*
