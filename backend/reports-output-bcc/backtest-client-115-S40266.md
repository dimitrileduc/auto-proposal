# Rapport Backtest - Client Terrenhof

## Contexte

- **Client** : Terrenhof (ID: 115)
- **Commande réelle** : S40266
- **Date commande** : 2025-11-12 10:52:21
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 19
- **Tokens**: 17,678 input + 3,018 output = 20,696 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 18 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 71.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -11.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0013] MF Olives Vertes 500g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0012] MF Olives Mix 500g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0052] MF Pois chiches  500g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0051] MF Kidney Beans 500g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [LV158] LV Moutarde 200 ml | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV146] LV Sauce Aïoli 200 ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [MF0013] MF Olives Vertes 500g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 05/09/2025, soit 67 jours. Bien que le cycle historique soit irrégulier (allant de 2 à 3 mois), l'absence de commande depuis plus de deux mois et l'approche de la période de fin d'année (historiquement active en décembre 2023) créent un risque de rupture dans les 30 prochains jours. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et au mode des commandes récentes ainsi qu'à la stabilité observée sur ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 969 tokens
- **Output**: 153 tokens
- **Total**: 1,122 tokens



</details>


<details>
<summary><strong>2. [MF0012] MF Olives Mix 500g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 70 à 80 jours entre les réapprovisionnements. La dernière commande datant du 5 septembre 2025 (soit 67 jours avant la date actuelle), nous atteignons le seuil de 70% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément au principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la quantité historique la plus fréquente, tout en respectant la règle de ne pas surestimer pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 968 tokens
- **Output**: 164 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 05/09/2025, soit plus de 60 jours, ce qui dépasse largement le cycle habituel observé l'année précédente à la même période (septembre puis janvier). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et au mode des commandes historiques récentes et de l'année N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 137 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>4. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (cycle moyen estimé à environ 80-100 jours). La dernière commande remonte au 05/09/2025, soit 67 jours avant la date actuelle. Bien que le cycle soit incertain, le délai écoulé dépasse largement les 70% de la fréquence habituelle, créant un risque de rupture potentiel dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B et de la règle sur les faibles rotations (1-2u), une commande de 1 unité est préconisée, correspondant à la médiane basse de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 160 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>5. [MF0052] MF Pois chiches  500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 67 jours. Le cycle précédent était de 78 jours. Nous sommes à plus de 85% du cycle moyen estimé, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. En suivant la règle de maintien des faibles rotations et la médiane historique, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 145 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>6. [MF0051] MF Kidney Beans 500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 05/09/2025, soit 67 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation très faible), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (Étape 1) et face à l'incertitude du cycle, un risque de rupture est identifié. Conformément aux règles de l'Étape 2 pour les rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 146 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>7. [LV158] LV Moutarde 200 ml</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 05/09/2025, soit 67 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 40-50 jours entre les commandes de printemps). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une commande de 2u. L'historique N-1 oscille entre 1u et 3u avec une médiane à 3u. Conformément à la règle de prudence (choisir la valeur la plus basse en cas de doute et maintenir les faibles rotations), la quantité de 2u est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 915 tokens
- **Output**: 218 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>8. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'environ 3 à 4 mois. La dernière commande datant du 05/09/2025 (soit 67 jours), nous entrons dans la fenêtre de réapprovisionnement compte tenu du seuil de 30 jours. Bien que l'historique N-1 montre des quantités de 2u, les commandes récentes de 2025 sont stabilisées à 1u. En application de la règle de la médiane sur l'historique récent et du principe de précaution sans surestimation pour les faibles rotations, une quantité de 1u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 149 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>9. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit environ 145 jours. L'historique montre des cycles très irréguliers et espacés (parfois 2 mois, parfois 5 mois). En application du principe de précaution B2B (cycle difficile à déterminer = prévoir), un besoin est identifié pour couvrir l'horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 1u et 2u. La médiane des commandes passées est de 2u. Conformément aux règles sur les rotations faibles, on maintient la quantité habituelle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 166 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>10. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 19 juin 2025, soit plus de 140 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement tout cycle de réapprovisionnement standard. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et N-1, conformément à la règle de ne pas augmenter les stocks sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 883 tokens
- **Output**: 134 tokens
- **Total**: 1,017 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [MF0013] MF Olives Vertes 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:50:27: 2u
- 2025-06-19 12:03:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-10 10:19:27: 1u
- 2024-08-01 06:09:54: 3u
- 2024-04-18 07:31:37: 2u
- 2024-01-18 08:55:30: 2u
- 2023-12-07 09:44:49: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [MF0012] MF Olives Mix 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:50:27: 2u
- 2025-06-19 12:03:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-10 10:19:27: 1u
- 2024-08-01 06:09:54: 3u
- 2024-04-18 07:31:37: 2u
- 2024-01-18 08:55:30: 2u
- 2023-12-07 09:44:49: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:50:27: 2u
- 2025-06-19 12:03:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-10 10:19:27: 2u
- 2024-05-30 06:08:18: 1u
- 2024-04-18 07:31:37: 2u
- 2024-01-18 08:55:30: 2u
- 2023-12-07 09:44:49: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:50:27: 2u
- 2025-06-19 12:03:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-10 10:19:27: 1u
- 2024-05-30 06:08:18: 1u
- 2024-04-18 07:31:37: 2u
- 2024-02-29 14:13:16: 1u
- 2024-01-18 08:55:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [MF0052] MF Pois chiches  500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:50:27: 1u
- 2025-06-19 12:03:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [MF0051] MF Kidney Beans 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:50:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [LV158] LV Moutarde 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:50:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-10 10:19:27: 3u
- 2024-05-30 06:08:18: 3u
- 2024-04-18 07:31:37: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 13:50:27: 1u
- 2025-06-19 12:03:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-10 10:19:27: 2u
- 2024-05-30 06:08:18: 2u
- 2024-02-29 14:13:16: 2u
- 2024-01-18 08:55:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 12:03:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-10 10:19:27: 1u
- 2024-08-01 06:09:54: 2u
- 2024-05-30 06:08:18: 1u
- 2023-12-07 09:44:49: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 12:03:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:09:54: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0014] MF Olives noires 500g | 2 | Predicted 2u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Predicted 1u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Predicted 2u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 1 | Predicted 1u but not ordered |
| [RF003] REFIELD Maïs 500G  | 3 | Predicted 3u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:53.486Z*
