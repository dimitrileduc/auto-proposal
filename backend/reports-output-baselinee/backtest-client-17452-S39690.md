# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S39690
- **Date commande** : 2025-10-13 08:23:06
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 32.3% | 31 produits prédits, 10 corrects |
| **Rappel** | 76.9% | 13 produits réels, 10 détectés |
| **F1-Score** | 45.5% | Score équilibré global |

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
| **MAE** | 78.60 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 18.5% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (10)

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type |
|---------|--------|------|-----------|----------|------|
| [LV342] LV Organic Broccoli Spread 190 g | 275 | 310 | 35.0 | 11.3% | ✅ partial |
| [LV331] LV Tartinade Lentils Balsamico 190g | 147 | 124 | 23.0 | 18.5% | ✅ partial |
| [LV161] LV Tartinade Mangue curry 190g | 928 | 775 | 153.0 | 19.7% | ✅ partial |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 742 | 620 | 122.0 | 19.7% | ✅ partial |
| [LV188] LV Tartinade Aubergine  380g | 128 | 112 | 16.0 | 14.3% | ✅ partial |
| [LV160] LV Tartinade Aubergine 190g | 784 | 775 | 9.0 | 1.2% | ✅ partial |
| [LV162] LV Tartinade Tomato Basilico 190g | 784 | 1085 | 301.0 | 27.7% | ✅ partial |
| [LV345] LV Spread KIDS 200ml Organic | 62 | 62 | 0.0 | 0.0% | 🎯 exact |
| [LV139] LV Tartinade Paprika Chili 380g | 192 | 128 | 64.0 | 50.0% | ✅ partial |
| [LV330] LV BIO Tartinade Toscana 190g | 342 | 279 | 63.0 | 22.6% | ✅ partial |


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
| [LV145] LV Sauce Tartare 200 ml  | 225 | Stock prédit: -79.4u (-12j restants) → prédit 225u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 585 | Stock prédit: 161.8u (16j restants) → prédit 585u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 24 | Stock prédit: -2.8u (-6j restants) → prédit 24u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 25 | Stock prédit: -3.7u (-11j restants) → prédit 25u mais non commandé |
| [LV158] LV Moutarde 200 ml | 38 | Stock prédit: -4.8u (-7j restants) → prédit 38u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 380 | Stock prédit: 12.3u (1j restants) → prédit 380u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 299 | Stock prédit: 13.8u (2j restants) → prédit 299u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 99 | Stock prédit: 9.2u (3j restants) → prédit 99u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 170 | Stock prédit: 46.8u (16j restants) → prédit 170u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 30 | Stock prédit: -7.2u (-9j restants) → prédit 30u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 75 | Stock prédit: 31.3u (25j restants) → prédit 75u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 128 | Stock prédit: 54.7u (25j restants) → prédit 128u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 200 | Stock prédit: -33.6u (-5j restants) → prédit 200u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 32 | Stock prédit: 0.9u (1j restants) → prédit 32u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 99 | Stock prédit: 30.5u (18j restants) → prédit 99u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 396 | Stock prédit: 77.1u (13j restants) → prédit 396u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 176 | Stock prédit: 20.1u (7j restants) → prédit 176u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 152 | Stock prédit: 24.9u (9j restants) → prédit 152u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 174 | Stock prédit: 51.7u (16j restants) → prédit 174u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 75 | Stock prédit: -133.0u (-75j restants) → prédit 75u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 25 | Stock prédit: -44.3u (-77j restants) → prédit 25u mais non commandé |


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
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 32 | Stock suffisant: 181.1u (66j restants > seuil 30j) |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 186 | Stock suffisant: 407.4u (61j restants > seuil 30j) |
| [LV357] LV Tartinade BIO Asperge 190g | 248 | Stock suffisant: 85.3u (52j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-18T18:54:07.629Z*
