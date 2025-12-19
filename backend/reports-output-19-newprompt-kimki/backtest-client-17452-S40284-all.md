# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S40284
- **Date commande** : 2025-11-12 12:37:06
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 43
- **Tokens**: 93,544 input + 275,614 output = 369,158 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 2.7% | 37 produits prédits, 1 corrects |
| **Rappel** | 33.3% | 3 produits réels, 1 détectés |
| **F1-Score** | 5.0% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 28.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (1)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 56 | 28 | 28.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 56u vs Médiane: 42u (Réel: 28u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: medium)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 42u
- ✅ **Réel commandé**: 28u
- 📉 **Erreur LLM**: 28u (100.0%)
- 📉 **Erreur Médiane**: 14u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes erratiques (CV 99.43%), intervalle médian 76.5j
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Cycle médian de 76.5 jours très irrégulier (CV 99.43%). Prochaine commande prévue dans 18 jours (avant le 30j). Quantité de 56 unités (moyenne tronquée après exclusion de l'outlier 5u) car CV=30.22% dans la tranche 30-60%. Aucune saisonnalité claire détectable.

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:21:21: 56u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 06:56:17: 5u
- 2024-06-17 09:52:59: 56u
- 2024-04-15 11:59:14: 56u
- 2024-01-16 14:39:31: 56u
- 2023-12-19 08:26:37: 56u
- 2023-11-17 14:13:20: 16u

**✅ Quantité LLM**: 56u (confidence: medium)
**📊 Quantité Réelle**: 28u

</details>




---

## False Positives (36)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV330] LV BIO Tartinade Toscana 190g | 279 | Stock prédit: 139.8u (12j restants) → prédit 279u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 910 | Stock prédit: 66.8u (2j restants) → prédit 910u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 202 | Stock prédit: 174.3u (31j restants) → prédit 202u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 244 | Stock prédit: 132.8u (10j restants) → prédit 244u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 204 | Stock prédit: 174.4u (31j restants) → prédit 204u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 1050 | Stock prédit: 169.7u (7j restants) → prédit 1050u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 110 | Stock prédit: 29.5u (10j restants) → prédit 110u mais non commandé |
| [LV139] LV Tartinade Paprika Chili 380g | 192 | Stock prédit: 10.1u (2j restants) → prédit 192u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 1138 | Stock prédit: 365.5u (14j restants) → prédit 1138u mais non commandé |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 144 | Stock prédit: -103.6u (-21j restants) → prédit 144u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 341 | Stock prédit: -168.1u (-13j restants) → prédit 341u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 62 | Stock prédit: 16.3u (10j restants) → prédit 62u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 174 | Stock prédit: -8.4u (0j restants) → prédit 174u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 453 | Stock prédit: 9.8u (1j restants) → prédit 453u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 250 | Stock prédit: 4.1u (0j restants) → prédit 250u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 124 | Stock prédit: 31.0u (8j restants) → prédit 124u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 325 | Stock prédit: 82.3u (17j restants) → prédit 325u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 161 | Stock prédit: -62.0u (-16j restants) → prédit 161u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 700 | Stock prédit: -450.3u (-31j restants) → prédit 700u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 27 | Stock prédit: -20.9u (-43j restants) → prédit 27u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 25 | Stock prédit: -22.3u (-49j restants) → prédit 25u mais non commandé |
| [LV158] LV Moutarde 200 ml | 50 | Stock prédit: -49.7u (-50j restants) → prédit 50u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 440 | Stock prédit: -251.2u (-34j restants) → prédit 440u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 375 | Stock prédit: -177.4u (-31j restants) → prédit 375u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 99 | Stock prédit: 1.2u (0j restants) → prédit 99u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 200 | Stock prédit: -56.1u (-18j restants) → prédit 200u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 40 | Stock prédit: -57.9u (-50j restants) → prédit 40u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 100 | Stock prédit: -49.5u (-26j restants) → prédit 100u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 200 | Stock prédit: -229.9u (-45j restants) → prédit 200u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 190 | Stock prédit: -115.8u (-24j restants) → prédit 190u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 42 | Stock prédit: -32.8u (-38j restants) → prédit 42u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 65 | Stock prédit: -0.7u (0j restants) → prédit 65u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 144 | Stock prédit: -66.9u (-24j restants) → prédit 144u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 147 | Stock prédit: -75.2u (-26j restants) → prédit 147u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 126 | Stock prédit: 1.8u (0j restants) → prédit 126u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 144 | Stock prédit: -66.5u (-19j restants) → prédit 144u mais non commandé |


---

## False Negatives (2)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 56 | Stock: 10.3u (9j restants) - filtré pour autre raison |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 56 | Stock: 10.3u (9j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T07:37:00.659Z*
