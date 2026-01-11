# Rapport Backtest - Client Saccone, Cédric - La ferme au moulin

## Contexte

- **Client** : Saccone, Cédric - La ferme au moulin (ID: 56470)
- **Commande réelle** : S40351
- **Date commande** : 2025-11-13 13:55:48
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 51
- **Tokens**: 44,990 input + 7,167 output = 52,157 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.1% | 44 produits prédits, 4 corrects |
| **Rappel** | 44.4% | 9 produits réels, 4 détectés |
| **F1-Score** | 15.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 0 | 1.0 | 0.0% | partial | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 0 | 1.0 | 0.0% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 4 | 3.0 | 75.0% | partial | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit environ 90 jours. L'historique N-1 montre une activité sur la période estivale mais une absence de données sur la fin d'année. Cependant, selon le principe de précaution B2B et la règle du cycle irrégulier/incertain, un besoin est identifié pour éviter une rupture prolongée si une demande saisonnière se présente. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est extrêmement stable avec des commandes unitaires systématiques (1u). La médiane des quantités est de 1. Application de la règle "Rotation très faible (1-2u)" : maintien de la quantité à 1u sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 179 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 0u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 0u
- **Erreur LLM**: 1u (Infinity%)
- **Erreur Mediane**: 1u (Infinity%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse montre une rotation très faible mais régulière (1 unité par commande). La dernière commande remonte au 14 août 2025, soit environ 90 jours. Bien que le cycle soit lent, l'historique N-1 montre une activité sur la période septembre-novembre. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture sur un produit à rotation lente) et face à un cycle irrégulier, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 144 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 0u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 0u
- **Erreur LLM**: 1u (Infinity%)
- **Erreur Mediane**: 1u (Infinity%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit 90 jours avant la date actuelle. Bien que le cycle soit difficile à déterminer avec une seule commande, le délai écoulé est très important. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière -> prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 159 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 30 à 60 jours). La dernière commande remonte au 14 août, soit 90 jours avant la date actuelle, ce qui dépasse largement le cycle habituel et indique un besoin de réapprovisionnement immédiat pour couvrir les 30 prochains jours. En suivant la règle de précaution B2B et en se basant sur la médiane des commandes récentes (1u), une quantité de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 127 tokens
- **Total**: 1,062 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:10:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-09 06:25:50: 1u
- 2024-07-09 12:21:29: 1u
- 2024-06-21 06:27:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:10:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-06 10:05:50: 1u
- 2024-08-09 06:25:50: 1u
- 2024-07-09 12:21:29: 1u
- 2024-06-21 06:27:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 0u

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:10:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 0u

</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:10:48: 1u
- 2025-07-09 11:13:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-06 10:05:50: 2u
- 2024-08-09 06:25:50: 1u
- 2024-06-21 06:27:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>




---

## False Positives (40)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Predicted 1u but not ordered |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Predicted 1u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Predicted 1u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Predicted 1u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Predicted 1u but not ordered |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | Predicted 1u but not ordered |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 | Predicted 1u but not ordered |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 1 | Predicted 1u but not ordered |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Predicted 1u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Predicted 2u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Predicted 2u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Predicted 2u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Predicted 2u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Predicted 1u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 1 | Predicted 1u but not ordered |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [DIS0011] Display Foodprint Karton LV | 1 | Never ordered in previous analysis window (no history) |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 4 | Never ordered in previous analysis window (no history) |
| [LV342] LV Organic Broccoli Spread 190 g | 4 | Never ordered in previous analysis window (no history) |
| [LV136] LV Tartinade Betterave 190g | 4 | Never ordered in previous analysis window (no history) |
| [LV131] LV Tartinade Potiron 190g | 4 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:09:25.827Z*
