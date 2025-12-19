# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S40284
- **Date commande** : 2025-11-12 12:37:06
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 44
- **Tokens**: 96,991 input + 180,537 output = 277,528 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 36 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 3 produits réels, 0 détectés |
| **F1-Score** | 0.0% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (0)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>

*Aucun produit correctement prédit (rappel = 0%)*

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
| [LV161] LV Tartinade Mangue curry 190g | 775 | Stock prédit: 66.8u (2j restants) → prédit 775u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 205 | Stock prédit: 174.3u (31j restants) → prédit 205u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 244 | Stock prédit: 132.8u (10j restants) → prédit 244u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 208 | Stock prédit: 174.4u (31j restants) → prédit 208u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 1032 | Stock prédit: 169.7u (7j restants) → prédit 1032u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 112 | Stock prédit: 29.5u (10j restants) → prédit 112u mais non commandé |
| [LV139] LV Tartinade Paprika Chili 380g | 165 | Stock prédit: 10.1u (2j restants) → prédit 165u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 1013 | Stock prédit: 365.5u (14j restants) → prédit 1013u mais non commandé |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 134 | Stock prédit: -103.6u (-21j restants) → prédit 134u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 341 | Stock prédit: -168.1u (-13j restants) → prédit 341u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 62 | Stock prédit: 16.3u (10j restants) → prédit 62u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 248 | Stock prédit: -8.4u (0j restants) → prédit 248u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 503 | Stock prédit: 9.8u (1j restants) → prédit 503u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 225 | Stock prédit: 4.1u (0j restants) → prédit 225u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 124 | Stock prédit: 31.0u (8j restants) → prédit 124u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 353 | Stock prédit: 23.3u (3j restants) → prédit 353u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 350 | Stock prédit: 82.3u (17j restants) → prédit 350u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 172 | Stock prédit: -62.0u (-16j restants) → prédit 172u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 700 | Stock prédit: -450.3u (-31j restants) → prédit 700u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 32 | Stock prédit: -20.9u (-43j restants) → prédit 32u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 19 | Stock prédit: -22.3u (-49j restants) → prédit 19u mais non commandé |
| [LV158] LV Moutarde 200 ml | 50 | Stock prédit: -49.7u (-50j restants) → prédit 50u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 438 | Stock prédit: -251.2u (-34j restants) → prédit 438u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 420 | Stock prédit: -177.4u (-31j restants) → prédit 420u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 99 | Stock prédit: 1.2u (0j restants) → prédit 99u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 190 | Stock prédit: -56.1u (-18j restants) → prédit 190u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 56 | Stock prédit: -57.9u (-50j restants) → prédit 56u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 105 | Stock prédit: -49.5u (-26j restants) → prédit 105u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 221 | Stock prédit: -229.9u (-45j restants) → prédit 221u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 250 | Stock prédit: -115.8u (-24j restants) → prédit 250u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 48 | Stock prédit: -32.8u (-38j restants) → prédit 48u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 72 | Stock prédit: -0.7u (0j restants) → prédit 72u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 128 | Stock prédit: -66.9u (-24j restants) → prédit 128u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 166 | Stock prédit: -75.2u (-26j restants) → prédit 166u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 119 | Stock prédit: 1.8u (0j restants) → prédit 119u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 157 | Stock prédit: -66.5u (-19j restants) → prédit 157u mais non commandé |


---

## False Negatives (3)

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
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 28 | Stock: 21.7u (25j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T08:08:16.362Z*
