# Rapport Backtest - Client SRL DOMAINE DE CHERCQ

## Contexte

- **Client** : SRL DOMAINE DE CHERCQ (ID: 58137)
- **Commande réelle** : S39294
- **Date commande** : 2025-11-14 12:48:37
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 25
- **Tokens**: 21,994 input + 3,791 output = 25,785 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.4% | 23 produits prédits, 7 corrects |
| **Rappel** | 46.7% | 15 produits réels, 7 détectés |
| **F1-Score** | 36.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 31.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV345] LV Spread KIDS 200ml Organic | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV040] LV Caprons apéritifs 240g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 42 jours entre les commandes récentes (juin à août). Depuis la dernière commande du 7 août 2025, 98 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, l'absence de commande depuis plus de trois mois indique un risque de rupture imminent ou un besoin de restockage selon le principe de précaution B2B. La quantité est fixée à 2 unités, correspondant à la médiane stricte et constante de l'historique (2024 et 2025).

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 158 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 42 jours entre les commandes récentes. La dernière commande remontant au 07/08/2025 (soit plus de 90 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un risque de rupture ou un besoin imminent. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (2u et 5u), la quantité retenue est la valeur la plus basse (2u) pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 152 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>3. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/08/2025, soit plus de 90 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique face à une absence prolongée de réapprovisionnement. Le risque de rupture est considéré comme élevé si le produit est toujours au catalogue. Conformément à la règle de la médiane sur l'historique récent (3u), une quantité de 3 unités est préconisée pour reconstituer le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 129 tokens
- **Total**: 998 tokens



</details>


<details>
<summary><strong>4. [LV040] LV Caprons apéritifs 240g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 07/08/2025, soit environ 98 jours. Bien que la rotation soit très faible, l'historique montre une commande à la même période l'année dernière (octobre). Le délai écoulé depuis la dernière commande dépasse largement un cycle trimestriel classique. Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais constante, un besoin est détecté. ÉTAPE 2 (QUANTITÉ) : L'historique récent et N-1 est strictement identique avec des commandes unitaires (1u). La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 181 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>5. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/08/2025, soit plus de 90 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1 pour infirmer la saisonnalité, une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane et à la dernière commande enregistrée, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 147 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>6. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 07/08/2025, soit 98 jours sans activité pour ce produit. Bien que la rotation soit très faible, l'absence de cycle défini et le principe de précaution B2B imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée si un besoin survient dans les 30 prochains jours. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 2 unités, correspondant au volume de la dernière commande connue.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 122 tokens
- **Total**: 998 tokens



</details>


<details>
<summary><strong>7. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit présente une rotation extrêmement faible avec une seule commande enregistrée l'année dernière à la même période (octobre). Bien qu'il n'y ait pas de commandes récentes, le principe de précaution B2B et l'analyse de l'historique N-1 suggèrent un besoin potentiel pour maintenir le référencement ou répondre à une demande saisonnière ponctuelle. Le délai depuis la dernière commande connue dépasse largement tout cycle régulier, créant un doute qui justifie un réapprovisionnement. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique récent, la règle se base sur la quantité N-1. La commande précédente était de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 209 tokens
- **Total**: 1,087 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:40:29: 2u
- 2025-06-26 12:47:19: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-10 07:14:27: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:40:29: 2u
- 2025-06-26 12:47:19: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-10 07:14:27: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:40:29: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV040] LV Caprons apéritifs 240g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:40:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-10 07:14:27: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:40:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:40:29: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-10 07:14:27: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Predicted 1u but not ordered |
| [LV158] LV Moutarde 200 ml | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Predicted 2u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Predicted 1u but not ordered |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | Predicted 4u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Predicted 2u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Predicted 2u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 2 | Predicted 2u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Predicted 2u but not ordered |


---

## False Negatives (8)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [RF001] REFIELD Compote de pommes 500g  | 4 | Never ordered in previous analysis window (no history) |
| [RF002] REFIELD Passata tomates 500G | 3 | Never ordered in previous analysis window (no history) |
| [MF0047] MF Mayonnaise 250ml | 1 | Never ordered in previous analysis window (no history) |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Never ordered in previous analysis window (no history) |
| [MF0031] MF Tarti Olives verte 250g  | 2 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 11 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 66 | Never ordered in previous analysis window (no history) |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:17:16.118Z*
