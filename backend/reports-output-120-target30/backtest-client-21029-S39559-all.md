# Rapport Backtest - Client R.E.L.A.I.S.Coop

## Contexte

- **Client** : R.E.L.A.I.S.Coop (ID: 21029)
- **Commande réelle** : S39559
- **Date commande** : 2025-10-08 07:06:25
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 36 produits prédits, 27 corrects |
| **Rappel** | 75.0% | 36 produits réels, 27 détectés |
| **F1-Score** | 75.0% | Score équilibré global |

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
| **MAE** | 0.44 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 24.1% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 15 | Égalité parfaite |
| Partial Match (>0u) | 12 | Avec erreur |

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

## True Positives (27)

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
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | 3 | 1.0 | 33.3% | ✅ partial |
| [LV145] LV Sauce Tartare 200 ml  | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV160] LV Tartinade Aubergine 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV129] LV Tartinade Carotte Gingembre 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV161] LV Tartinade Mangue curry 190g | 4 | 3 | 1.0 | 33.3% | ✅ partial |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial |
| [LV131] LV Tartinade Potiron 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV132] LV Tartinade Houmous type 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV135] LV Tartinade Basilico 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV136] LV Tartinade Betterave 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 4 | 3 | 1.0 | 33.3% | ✅ partial |
| [LV330] LV BIO Tartinade Toscana 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV188] LV Tartinade Aubergine  380g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [LV138] LV Tartinade Carotte gingembre  380g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [LV187] LV Tartinade Mangue Curry 380g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [MF0052] MF Pois chiches  500g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [fsv08] Banana chips bio vrac 1,6kg | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [fsv18] Mendiant bio vrac 2,8kg | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial |


---

## False Positives (9)

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
| [LV147] LV Sauce Cocktail 200 ml | 2 | Stock prédit: -0.7u (-25j restants) → prédit 2u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 2 | Stock prédit: -0.3u (-7j restants) → prédit 2u mais non commandé |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [LV189] LV Tartinade Houmous Type 380g | 2 | Stock prédit: -1.3u (-34j restants) → prédit 2u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [fsv01] Cerneaux de noix nature bio vrac 1,8kg | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |


---

## False Negatives (9)

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
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0051] MF Kidney Beans 500g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0053] MF Maïs 500g | 3 | Stock suffisant: 1.0u (32j restants > seuil 30j) |
| [LV157] LV Ketchup aux tomates 263 ml bio | 3 | Stock suffisant: 0.9u (51j restants > seuil 30j) |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV217] LV Tartinade Basilic 380g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0009] Consigne casier | 5 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 30 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T10:03:19.551Z*
