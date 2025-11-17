# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S39690
- **Date commande** : 2025-10-13 08:23:06
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.7% | 35 produits prédits, 9 corrects |
| **Rappel** | 69.2% | 13 produits réels, 9 détectés |
| **F1-Score** | 37.5% | Score équilibré global |

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
| **MAE** | 128.56 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 28.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (9)

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
| [LV342] LV Organic Broccoli Spread 190 g | 155 | 310 | 155.0 | 50.0% | ✅ partial |
| [LV331] LV Tartinade Lentils Balsamico 190g | 200 | 124 | 76.0 | 61.3% | ✅ partial |
| [LV161] LV Tartinade Mangue curry 190g | 1050 | 775 | 275.0 | 35.5% | ✅ partial |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 750 | 620 | 130.0 | 21.0% | ✅ partial |
| [LV188] LV Tartinade Aubergine  380g | 144 | 112 | 32.0 | 28.6% | ✅ partial |
| [LV160] LV Tartinade Aubergine 190g | 700 | 775 | 75.0 | 9.7% | ✅ partial |
| [LV162] LV Tartinade Tomato Basilico 190g | 700 | 1085 | 385.0 | 35.5% | ✅ partial |
| [LV345] LV Spread KIDS 200ml Organic | 62 | 62 | 0.0 | 0.0% | 🎯 exact |
| [LV330] LV BIO Tartinade Toscana 190g | 250 | 279 | 29.0 | 10.4% | ✅ partial |


---

## False Positives (26)

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
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 6 | Stock prédit: 44.7u (9j restants) → prédit 6u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 275 | Stock prédit: 107.5u (14j restants) → prédit 275u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 225 | Stock prédit: -20.3u (-3j restants) → prédit 225u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 585 | Stock prédit: 49.5u (3j restants) → prédit 585u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 159 | Stock prédit: 31.0u (7j restants) → prédit 159u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 16 | Stock prédit: -0.4u (-1j restants) → prédit 16u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 81 | Stock prédit: -38.0u (-34j restants) → prédit 81u mais non commandé |
| [LV158] LV Moutarde 200 ml | 50 | Stock prédit: -22.1u (-21j restants) → prédit 50u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 350 | Stock prédit: 24.7u (3j restants) → prédit 350u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 248 | Stock prédit: 42.9u (9j restants) → prédit 248u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 140 | Stock prédit: 29.5u (8j restants) → prédit 140u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 35 | Stock prédit: -35.3u (-24j restants) → prédit 35u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 90 | Stock prédit: 6.6u (3j restants) → prédit 90u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 175 | Stock prédit: -103.3u (-18j restants) → prédit 175u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 237 | Stock prédit: -55.2u (-8j restants) → prédit 237u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 32 | Stock prédit: -0.9u (-1j restants) → prédit 32u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 108 | Stock prédit: 29.4u (17j restants) → prédit 108u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 350 | Stock prédit: -11.3u (-1j restants) → prédit 350u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 192 | Stock prédit: 8.3u (2j restants) → prédit 192u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 144 | Stock prédit: 19.1u (7j restants) → prédit 144u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 100 | Stock prédit: 40.2u (11j restants) → prédit 100u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 63 | Stock prédit: -28.0u (-37j restants) → prédit 63u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 25 | Stock prédit: -23.8u (-63j restants) → prédit 25u mais non commandé |
| [LV221] LV Cornichons Aigre-Doux 670g | 80 | Stock prédit: -112.7u (-90j restants) → prédit 80u mais non commandé |
| [LV140] LV Moutarde à l'ancienne  200ml | 30 | Stock prédit: -19.4u (-55j restants) → prédit 30u mais non commandé |
| [LV220] LV Cornichons Fins au vinaigre 330g | 126 | Stock prédit: -81.4u (-55j restants) → prédit 126u mais non commandé |


---

## False Negatives (4)

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
| [LV139] LV Tartinade Paprika Chili 380g | 128 | Stock suffisant: 68.6u (25j restants > seuil 19j) |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 32 | Stock suffisant: 178.3u (39j restants > seuil 19j) |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 186 | Stock suffisant: 405.8u (43j restants > seuil 19j) |
| [LV357] LV Tartinade BIO Asperge 190g | 248 | Stock suffisant: 85.4u (46j restants > seuil 19j) |


---

*Rapport généré automatiquement le 2025-11-17T11:58:44.636Z*
