# Rapport Backtest - Client COLRUYT FOOD RETAIL NV NEW

## Contexte

- **Client** : COLRUYT FOOD RETAIL NV NEW (ID: 33598)
- **Commande réelle** : S40243
- **Date commande** : 2025-11-12 07:34:47
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 38
- **Tokens**: 36,709 input + 6,186 output = 42,895 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.8% | 37 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 19.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 100 | 100 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 100 | 100 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV147] LV Sauce Cocktail 200 ml | 50 | 50 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 100 | 100 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 100u
- **Baseline calculee**: 100u
- **Mediane historique**: 100u
- **Reel commande**: 100u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 100u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 21 octobre 2025, soit il y a 21 jours. Le cycle moyen récent est d'environ 13 à 22 jours. À la date actuelle (11 novembre), nous avons dépassé 70% du cycle habituel. De plus, l'historique N-1 montre des commandes régulières en octobre et novembre. Il existe un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilisation très nette à 100 unités sur les quatre dernières commandes, après des pics estivaux (150u, 225u) considérés comme exceptionnels. La médiane des commandes récentes est de 100. En respectant le principe de précaution et la stabilité du flux actuel, la quantité retenue est de 100 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,041 tokens
- **Output**: 221 tokens
- **Total**: 1,262 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 100u
- **Baseline calculee**: 100u
- **Mediane historique**: 100u
- **Reel commande**: 100u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 100u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 15 à 25 jours entre chaque réapprovisionnement. La dernière commande datant du 21 octobre (soit 21 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que des pics à 200u et 250u aient été observés durant l'été, l'historique récent et les données N-1 confirment une stabilisation à 100u. En appliquant la règle de la médiane et la prudence B2B, une quantité de 100u est préconisée pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 165 tokens
- **Total**: 1,187 tokens



</details>


<details>
<summary><strong>3. [LV147] LV Sauce Cocktail 200 ml</strong> - LLM: 50u vs Médiane: 50u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 50u
- **Baseline calculee**: 50u
- **Mediane historique**: 50u
- **Reel commande**: 50u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 50u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 septembre 2025, soit 48 jours avant la date actuelle (11 novembre). L'historique montre des intervalles de 14 jours, 71 jours et une commande l'année précédente début octobre. Le cycle est irrégulier mais le délai depuis la dernière commande dépasse largement la fréquence habituelle et le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent est extrêmement stable avec des commandes systématiques de 50 unités. La médiane et la constante observée étant de 50, cette quantité est retenue pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 178 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 100u
- **Baseline calculee**: 100u
- **Mediane historique**: 100u
- **Reel commande**: 100u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 100u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours (Juillet-Août-Septembre). La dernière commande datant du 16 septembre 2025, soit il y a 56 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. L'historique N-1 confirme également un besoin sur la période d'octobre/novembre. En application du principe de précaution B2B et face à l'irrégularité récente, une commande est nécessaire. La quantité est fixée à 100 unités, correspondant à la médiane constante et stricte observée sur l'ensemble de l'historique.

**Tokens utilises pour cette prediction:**
- **Input**: 947 tokens
- **Output**: 171 tokens
- **Total**: 1,118 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 08:23:57: 100u
- 2025-10-08 06:27:45: 100u
- 2025-09-16 09:13:36: 100u
- 2025-08-26 09:29:26: 100u
- 2025-08-20 07:51:02: 150u
- 2025-07-15 11:13:22: 225u
- 2025-06-17 09:01:37: 100u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-08 10:15:57: 100u
- 2024-10-15 08:44:39: 100u
- 2024-10-08 11:14:44: 100u

**Quantite Mediane (fallback)**: 100u
**Quantite Reelle**: 100u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 08:23:57: 100u
- 2025-10-08 06:27:45: 100u
- 2025-09-16 09:13:36: 100u
- 2025-08-13 10:56:00: 200u
- 2025-07-15 11:13:22: 250u
- 2025-07-09 07:05:46: 100u
- 2025-06-17 09:01:37: 100u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 08:44:39: 100u
- 2024-10-08 11:14:44: 100u

**Quantite Mediane (fallback)**: 100u
**Quantite Reelle**: 100u

</details>


<details>
<summary><strong>3. [LV147] LV Sauce Cocktail 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 07:45:22: 50u
- 2025-07-15 11:13:22: 50u
- 2025-07-01 08:52:19: 50u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 11:14:44: 50u

**Quantite Mediane (fallback)**: 50u
**Quantite Reelle**: 50u

</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 09:13:36: 100u
- 2025-08-20 07:51:02: 100u
- 2025-07-15 11:13:22: 100u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-08 10:15:57: 100u
- 2024-10-01 08:04:30: 100u

**Quantite Mediane (fallback)**: 100u
**Quantite Reelle**: 100u

</details>




---

## False Positives (33)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3302] BONI BIO MAYONNAISE 500ML | 110 | Predicted 110u but not ordered |
| [PF1503] BONI VINAI MOUTARDE 450ML | 126 | Predicted 126u but not ordered |
| [PF1502] BONI VINAI FINE HERBE 450ML | 378 | Predicted 378u but not ordered |
| [PF1501] BONI VINAI CIBOULETTE 450ML | 252 | Predicted 252u but not ordered |
| [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg | 336 | Predicted 336u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 100 | Predicted 100u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 27 | Predicted 27u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 100 | Predicted 100u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 100 | Predicted 100u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 100 | Predicted 100u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 56 | Predicted 56u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 100 | Predicted 100u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 100 | Predicted 100u but not ordered |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 48 | Predicted 48u but not ordered |
| [LV149] LV Sauce Aioli Pesto 200ml | 50 | Predicted 50u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 50 | Predicted 50u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 56 | Predicted 56u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 100 | Predicted 100u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 100 | Predicted 100u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 48 | Predicted 48u but not ordered |
| [PF3259] EVD MOUTARDE FORTE 350 GR | 3900 | Predicted 3900u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 80 | Predicted 80u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 80 | Predicted 80u but not ordered |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 100 | Predicted 100u but not ordered |
| [LV339] LV Tripack apéro | 184 | Predicted 184u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 80 | Predicted 80u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 126 | Predicted 126u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 100 | Predicted 100u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 125 | Predicted 125u but not ordered |
| [PF1626] BONI VINAI MIEL MOUTARDE 450ML | 126 | Predicted 126u but not ordered |
| [PF1624] BONI VINAIGRETTE MANGUE 450ML | 252 | Predicted 252u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:01.702Z*
