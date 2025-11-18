# Rapport Backtest - Client SASPJ ass. RENAUD JOSEPH ET RENAUD FABIAN

## Contexte

- **Client** : SASPJ ass. RENAUD JOSEPH ET RENAUD FABIAN (ID: 60416)
- **Commande réelle** : S39192
- **Date commande** : 2025-09-16 06:28:45
- **Date cutoff système** : 2025-09-16 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.3% | 26 produits prédits, 11 corrects |
| **Rappel** | 84.6% | 13 produits réels, 11 détectés |
| **F1-Score** | 56.4% | Score équilibré global |

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
| **MAE** | 0.27 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 21.2% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (11)

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
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 3 | 1.0 | 33.3% | ✅ partial |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (15)

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
| [LV146] LV Sauce Aïoli 200 ml | 1 | Stock prédit: 0.3u (18j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.3u (18j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Stock prédit: -0.4u (-11j restants) → prédit 1u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Stock prédit: 0.3u (18j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: -0.8u (-40j restants) → prédit 1u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Stock prédit: -0.1u (-7j restants) → prédit 1u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Stock prédit: -0.1u (-7j restants) → prédit 1u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock prédit: -0.9u (-56j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: -0.6u (-44j restants) → prédit 1u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Stock prédit: -0.1u (-7j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: -1.4u (-70j restants) → prédit 1u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Stock prédit: -0.5u (-42j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -1.4u (-70j restants) → prédit 1u mais non commandé |


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
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JOY05] Organic Cherry Jam 370g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T14:39:11.807Z*
