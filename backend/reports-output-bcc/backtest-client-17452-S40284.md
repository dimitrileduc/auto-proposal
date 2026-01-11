# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S40284
- **Date commande** : 2025-11-12 12:37:06
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 48
- **Tokens**: 48,297 input + 9,486 output = 57,783 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 6.5% | 46 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 12.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 56 | 56 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 56 | 56 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 28 | 28 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 56u
- **Baseline calculee**: 56u
- **Mediane historique**: 56u
- **Reel commande**: 56u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 56u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 jours entre les commandes récentes (août à octobre). La dernière commande datant du 1er octobre (il y a 41 jours), nous avons dépassé les 70% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, la médiane des commandes récentes (56, 56, 28) est de 56 unités. Ce volume est cohérent avec l'historique et permet de maintenir le stock sans surstockage, les pics de l'année précédente (112u, 168u) étant écartés pour privilégier la stabilité récente.

**Tokens utilises pour cette prediction:**
- **Input**: 1,004 tokens
- **Output**: 189 tokens
- **Total**: 1,193 tokens



</details>


<details>
<summary><strong>2. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 56u
- **Baseline calculee**: 56u
- **Mediane historique**: 56u
- **Reel commande**: 56u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 56u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence d'environ 60 à 70 jours (juin-août-octobre). La dernière commande datant du 1er octobre (il y a 41 jours), nous entrons dans la zone de risque de rupture pour les 30 prochains jours (seuil de 70% du cycle atteint). Bien que l'historique N-1 montre des volumes plus élevés en fin d'année, la tendance récente est strictement stabilisée à 56 unités par commande. En application de la règle de la médiane et du maintien de la rotation régulière constatée sur les trois dernières occurrences, une quantité de 56 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,000 tokens
- **Output**: 159 tokens
- **Total**: 1,159 tokens



</details>


<details>
<summary><strong>3. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 28u vs Médiane: 42u (Réel: 28u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 28u
- **Baseline calculee**: 28u
- **Mediane historique**: 42u
- **Reel commande**: 28u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 14u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 28u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/10/2025, soit 41 jours écoulés. Le cycle moyen récent est d'environ 50-60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (41 + 30 > cycle habituel). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes de 28u et 56u. La médiane des commandes récentes est de 28u. Bien que la dernière commande fût de 56u, les deux précédentes étaient de 28u. En cas de doute entre deux volumes, la règle impose de choisir la quantité la plus basse pour éviter le surstock. On retient donc 28u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,014 tokens
- **Output**: 205 tokens
- **Total**: 1,219 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 14:21:21: 56u
- 2025-08-04 08:03:52: 56u
- 2025-06-26 07:39:54: 28u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 06:56:17: 24u
- 2024-06-17 09:52:59: 168u
- 2024-04-15 11:59:14: 112u
- 2024-01-16 14:39:31: 56u
- 2023-12-19 08:26:37: 112u

**Quantite Mediane (fallback)**: 56u
**Quantite Reelle**: 56u

</details>


<details>
<summary><strong>2. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 14:21:21: 56u
- 2025-08-04 08:03:52: 56u
- 2025-06-26 07:39:54: 56u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 06:56:17: 80u
- 2024-06-17 09:52:59: 112u
- 2024-04-15 11:59:14: 112u
- 2024-01-16 14:39:31: 56u
- 2023-12-19 08:26:37: 112u

**Quantite Mediane (fallback)**: 56u
**Quantite Reelle**: 56u

</details>


<details>
<summary><strong>3. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 14:21:21: 56u
- 2025-08-04 08:03:52: 28u
- 2025-06-26 07:39:54: 28u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 06:56:17: 5u
- 2024-06-17 09:52:59: 56u
- 2024-04-15 11:59:14: 56u
- 2024-01-16 14:39:31: 56u
- 2023-12-19 08:26:37: 56u
- 2023-11-17 14:13:20: 16u

**Quantite Mediane (fallback)**: 28u
**Quantite Reelle**: 28u

</details>




---

## False Positives (43)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV330] LV BIO Tartinade Toscana 190g | 264 | Predicted 264u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 208 | Predicted 208u but not ordered |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 201 | Predicted 201u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 275 | Predicted 275u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 341 | Predicted 341u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 775 | Predicted 775u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 112 | Predicted 112u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 620 | Predicted 620u but not ordered |
| [LV139] LV Tartinade Paprika Chili 380g | 192 | Predicted 192u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 868 | Predicted 868u but not ordered |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 120 | Predicted 120u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 345 | Predicted 345u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 124 | Predicted 124u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 62 | Predicted 62u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 100 | Predicted 100u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 341 | Predicted 341u but not ordered |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 186 | Predicted 186u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 150 | Predicted 150u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 279 | Predicted 279u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 200 | Predicted 200u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 225 | Predicted 225u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 585 | Predicted 585u but not ordered |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 32 | Predicted 32u but not ordered |
| [LV149] LV Sauce Aioli Pesto 200ml | 12 | Predicted 12u but not ordered |
| [LV158] LV Moutarde 200 ml | 50 | Predicted 50u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 380 | Predicted 380u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 248 | Predicted 248u but not ordered |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 132 | Predicted 132u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 160 | Predicted 160u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 30 | Predicted 30u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 80 | Predicted 80u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 150 | Predicted 150u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 200 | Predicted 200u but not ordered |
| [LV217] LV Tartinade Basilic 380g | 32 | Predicted 32u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 72 | Predicted 72u but not ordered |
| [LV138] LV Tartinade Carotte gingembre  380g | 128 | Predicted 128u but not ordered |
| [LV187] LV Tartinade Mangue Curry 380g | 152 | Predicted 152u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 120 | Predicted 120u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 175 | Predicted 175u but not ordered |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 75 | Predicted 75u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 75 | Predicted 75u but not ordered |
| [LV156] LV Sauce barbecue 263 ml bio | 25 | Predicted 25u but not ordered |
| [LV339] LV Tripack apéro | 60 | Predicted 60u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:03:56.778Z*
