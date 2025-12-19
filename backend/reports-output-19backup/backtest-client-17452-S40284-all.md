# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S40284
- **Date commande** : 2025-11-12 12:37:06
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 44
- **Tokens**: 29,492 input + 44,489 output = 73,981 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 21 produits prédits, 0 corrects |
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

## False Positives (21)

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
| [LV342] LV Organic Broccoli Spread 190 g | 214 | Stock prédit: 132.8u (10j restants) → prédit 214u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 822 | Stock prédit: 169.7u (7j restants) → prédit 822u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 112 | Stock prédit: 29.5u (10j restants) → prédit 112u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 527 | Stock prédit: 231.7u (16j restants) → prédit 527u mais non commandé |
| [LV139] LV Tartinade Paprika Chili 380g | 144 | Stock prédit: 10.1u (2j restants) → prédit 144u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 1050 | Stock prédit: 365.5u (14j restants) → prédit 1050u mais non commandé |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 144 | Stock prédit: -103.6u (-21j restants) → prédit 144u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 450 | Stock prédit: -168.1u (-13j restants) → prédit 450u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 108 | Stock prédit: 44.1u (15j restants) → prédit 108u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 62 | Stock prédit: 16.3u (10j restants) → prédit 62u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 310 | Stock prédit: 9.8u (1j restants) → prédit 310u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 168 | Stock prédit: 4.1u (0j restants) → prédit 168u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 137 | Stock prédit: 31.0u (8j restants) → prédit 137u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 300 | Stock prédit: 23.3u (3j restants) → prédit 300u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 150 | Stock prédit: -62.0u (-16j restants) → prédit 150u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 700 | Stock prédit: -450.3u (-31j restants) → prédit 700u mais non commandé |
| [LV158] LV Moutarde 200 ml | 50 | Stock prédit: -49.7u (-50j restants) → prédit 50u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 350 | Stock prédit: -177.4u (-31j restants) → prédit 350u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 120 | Stock prédit: -56.1u (-18j restants) → prédit 120u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 60 | Stock prédit: -57.9u (-50j restants) → prédit 60u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 98 | Stock prédit: 1.8u (0j restants) → prédit 98u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T21:31:27.745Z*
