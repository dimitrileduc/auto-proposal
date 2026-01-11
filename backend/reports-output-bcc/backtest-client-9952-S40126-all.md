# Rapport Backtest - Client Chaman

## Contexte

- **Client** : Chaman (ID: 9952)
- **Commande réelle** : S40126
- **Date commande** : 2025-11-14 10:21:50
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 38
- **Tokens**: 34,901 input + 5,813 output = 40,714 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 27.0% | 37 produits prédits, 10 corrects |
| **Rappel** | 58.8% | 17 produits réels, 10 détectés |
| **F1-Score** | 37.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 30.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [MF0047] MF Mayonnaise 250ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 71 jours puis 28 jours, indiquant une rotation irrégulière mais persistante. La dernière commande date du 15 octobre 2025, soit il y a 29 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle moyen étant atteint ou dépassé). La quantité historique est constante à 1 unité par commande. En suivant la règle de la médiane sur l'historique récent et le maintien des faibles rotations, une commande de 1 unité est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 146 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'environ 28 à 30 jours (17/09 au 15/10). Depuis la dernière commande du 15 octobre, 29 jours se sont écoulés, ce qui correspond à 100% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de la médiane sur l'historique récent et N-1, la quantité constante de 2 unités est maintenue pour ce produit à rotation faible et régulière.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 135 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>3. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 15 octobre, soit il y a 29 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de risque de rupture. Bien que l'historique soit limité à une seule commande récente, le principe de précaution B2B impose de prévoir un réapprovisionnement pour maintenir la disponibilité du produit. La quantité retenue correspond à la commande précédente (1u), conformément à la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 115 tokens
- **Total**: 986 tokens



</details>


<details>
<summary><strong>4. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre, soit 57 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement l'intervalle précédent (71 jours). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité absolue à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 148 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>5. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence irrégulière avec une dernière commande datant de 57 jours (17 septembre). Bien que la rotation soit faible, nous entrons dans une période où des commandes ont été enregistrées l'année précédente (novembre). En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et au volume historique de fin d'année, tout en évitant le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 991 tokens
- **Output**: 128 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 17 septembre 2025, soit 57 jours. L'historique N-1 montre des commandes régulières en octobre et novembre (2u et 1u). Le cycle moyen est d'environ 45-60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car le cycle habituel est dépassé. ÉTAPE 2 : ESTIMATION QUANTITÉ. La médiane des commandes récentes est de 1u, mais l'historique N-1 sur la même période et la majorité des commandes historiques se situent à 2u. En suivant le principe de précaution B2B pour éviter une rupture sur un produit à rotation lente mais constante, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 195 tokens
- **Total**: 1,202 tokens



</details>


<details>
<summary><strong>7. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles irréguliers (23 jours, 48 jours) avec une dernière commande enregistrée il y a 57 jours (17 septembre). Ce délai dépasse largement le cycle moyen constaté, ce qui indique un risque de rupture imminent ou une commande déjà due selon le principe de précaution B2B. Bien que les commandes récentes soient de 1u, l'historique à la même période l'année dernière (novembre/septembre) et la médiane historique globale s'établissent à 2u. En suivant la règle de la médiane et pour couvrir le besoin sur l'horizon de 30 jours, une quantité de 2u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 967 tokens
- **Output**: 158 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>8. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 25 août 2025, soit 80 jours sans réapprovisionnement. Bien que la rotation soit très faible, l'historique N-1 montre une commande fin septembre. Le délai écoulé dépasse largement les cycles habituels de consommation pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 179 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>9. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 août 2025, soit 80 jours avant la date actuelle. Bien que le cycle soit irrégulier, l'historique montre une commande à la même période l'année précédente (30 octobre 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est extrêmement stable avec des commandes unitaires systématiques (1u). La médiane des quantités est de 1. Conformément aux règles sur les rotations faibles, la quantité de 1u est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 173 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>10. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec un cycle de commande moyen d'environ 60 à 90 jours. La dernière commande enregistrée remonte au 08/07/2025, soit plus de 120 jours sans réapprovisionnement, ce qui dépasse largement le cycle habituel et le seuil de précaution (70% du cycle). Le risque de rupture est critique. En suivant la règle de la médiane sur l'historique récent et N-1 (commandes de 1u, 2u et 3u), la quantité de 2 unités est retenue pour couvrir le besoin sans surstocker ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 159 tokens
- **Total**: 1,130 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-15 04:58:48: 1u
- 2025-09-17 06:35:06: 1u
- 2025-07-08 06:24:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-15 04:58:48: 2u
- 2025-09-17 06:35:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 15:06:28: 2u
- 2024-02-13 11:04:59: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-15 04:58:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:35:06: 1u
- 2025-07-08 06:24:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:35:06: 2u
- 2025-08-25 06:27:39: 1u
- 2025-07-08 06:24:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 06:45:48: 3u
- 2024-06-17 06:29:11: 3u
- 2024-04-05 08:54:08: 3u
- 2024-02-13 11:04:59: 2u
- 2023-11-28 08:48:09: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:35:06: 2u
- 2025-08-25 06:27:39: 1u
- 2025-07-08 06:24:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 15:06:28: 2u
- 2024-09-27 06:45:48: 2u
- 2024-06-17 06:29:11: 3u
- 2024-04-05 08:54:08: 2u
- 2024-02-13 11:04:59: 2u
- 2023-11-28 08:48:09: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [MF0047] MF Mayonnaise 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:35:06: 1u
- 2025-08-25 06:27:39: 1u
- 2025-07-08 06:24:57: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 06:45:48: 3u
- 2024-04-05 08:54:08: 2u
- 2024-02-13 11:04:59: 2u
- 2023-11-28 08:48:09: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:27:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 06:45:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:27:39: 1u
- 2025-07-08 06:24:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 15:06:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 06:24:57: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 15:06:28: 2u
- 2024-09-27 06:45:48: 3u
- 2024-06-17 06:29:11: 3u
- 2024-04-05 08:54:08: 2u
- 2024-02-13 11:04:59: 1u
- 2023-11-28 08:48:09: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (27)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV145] LV Sauce Tartare 200 ml  | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Predicted 2u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Predicted 1u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Predicted 2u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Predicted 1u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Predicted 1u but not ordered |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 1 | Predicted 1u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [MF0024] MF KETCHUP 250g | 2 | Predicted 2u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (7)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Never ordered in previous analysis window (no history) |
| [LV158] LV Moutarde 200 ml | 1 | Never ordered in previous analysis window (no history) |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Never ordered in previous analysis window (no history) |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Never ordered in previous analysis window (no history) |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 6 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 36 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:07:41.474Z*
