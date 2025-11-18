# Rapport Backtest - Client La ferme du vieux bure

## Contexte

- **Client** : La ferme du vieux bure (ID: 23826)
- **Commande réelle** : S38925
- **Date commande** : 2025-09-15 06:25:43
- **Date cutoff système** : 2025-09-15 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 26.5% | 34 produits prédits, 9 corrects |
| **Rappel** | 81.8% | 11 produits réels, 9 détectés |
| **F1-Score** | 40.0% | Score équilibré global |

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
| **MAE** | 0.11 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 5.6% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 8 | Égalité parfaite |
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
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (25)

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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: 0.6u (24j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Stock prédit: 0.6u (24j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.6u (24j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock prédit: 0.6u (24j restants) → prédit 1u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | Stock prédit: 0.4u (21j restants) → prédit 2u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: -0.5u (-14j restants) → prédit 1u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: -0.5u (-14j restants) → prédit 1u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [LV158] LV Moutarde 200 ml | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Stock prédit: -0.8u (-36j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Stock prédit: -0.7u (-21j restants) → prédit 2u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: -0.6u (-29j restants) → prédit 1u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: 0.2u (18j restants) → prédit 1u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 1 | Stock prédit: -0.8u (-36j restants) → prédit 1u mais non commandé |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 1 | Stock prédit: -0.3u (-20j restants) → prédit 1u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 1 | Stock prédit: -0.8u (-36j restants) → prédit 1u mais non commandé |


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
| [CWLVRB0011] CW LV RB SALAD BOWL H107/ Ø 245mm | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [fsv18] Mendiant bio vrac 2,8kg | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T10:44:46.923Z*
