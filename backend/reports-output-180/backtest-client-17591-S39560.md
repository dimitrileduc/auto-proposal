# Rapport Backtest - Client croquez Local

## Contexte

- **Client** : croquez Local (ID: 17591)
- **Commande réelle** : S39560
- **Date commande** : 2025-10-08 07:10:46
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 45 produits prédits, 18 corrects |
| **Rappel** | 51.4% | 35 produits réels, 18 détectés |
| **F1-Score** | 45.0% | Score équilibré global |

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
| **MAPE** | 33.3% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 10 | Égalité parfaite |
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

## True Positives (18)

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
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV158] LV Moutarde 200 ml | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV189] LV Tartinade Houmous Type 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (27)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: 0.2u (6j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.3u (11j restants) → prédit 1u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 1 | Stock prédit: 0.3u (11j restants) → prédit 1u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0052] MF Pois chiches  500g | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [MF0053] MF Maïs 500g | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [MF0060] MF Passata | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [MF0051] MF Kidney Beans 500g | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | Stock prédit: -0.3u (-18j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Stock prédit: -0.7u (-18j restants) → prédit 2u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Stock prédit: -0.1u (-4j restants) → prédit 2u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Stock prédit: -0.4u (-31j restants) → prédit 1u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |


---

## False Negatives (17)

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
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Stock suffisant: 1.2u (38j restants > seuil 19j) |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Stock suffisant: 1.4u (54j restants > seuil 19j) |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock suffisant: 1.2u (38j restants > seuil 19j) |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock suffisant: 1.2u (38j restants > seuil 19j) |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Stock suffisant: 0.5u (27j restants > seuil 19j) |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Stock suffisant: 1.0u (27j restants > seuil 19j) |
| [LV132] LV Tartinade Houmous type 190g | 2 | Stock suffisant: 1.2u (38j restants > seuil 19j) |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Stock suffisant: 1.1u (30j restants > seuil 19j) |
| [LV135] LV Tartinade Basilico 190g | 3 | Stock suffisant: 1.0u (27j restants > seuil 19j) |
| [LV188] LV Tartinade Aubergine  380g | 1 | Stock suffisant: 0.5u (86j restants > seuil 19j) |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 1 | Jamais commandé avant dans les 180j précédents (pas d'historique) |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | Stock suffisant: 1.4u (54j restants > seuil 19j) |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Stock suffisant: 0.5u (30j restants > seuil 19j) |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 4 | Stock suffisant: 1.7u (34j restants > seuil 19j) |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Stock suffisant: 0.7u (21j restants > seuil 19j) |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Jamais commandé avant dans les 180j précédents (pas d'historique) |
| [WIG03] WIGNAC cidre naturel bio 750ml | 1 | Jamais commandé avant dans les 180j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-14T10:04:16.435Z*
