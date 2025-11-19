# Rapport Backtest - Client Le bon Wagon Eupen

## Contexte

- **Client** : Le bon Wagon Eupen (ID: 113)
- **Commande réelle** : S39623
- **Date commande** : 2025-10-08 10:15:32
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 38.5% | 26 produits prédits, 10 corrects |
| **Rappel** | 58.8% | 17 produits réels, 10 détectés |
| **F1-Score** | 46.5% | Score équilibré global |

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
| **MAE** | 0.60 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 55.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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
| [MF0033] MF Tarti Poivron chilli 250g | 3 | 1 | 2.0 | 200.0% | ✅ partial |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [MF0029] MF Tarti Datte chili 250g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [MF0047] MF Mayonnaise 250ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial |


---

## False Positives (16)

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
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | Stock prédit: 0.5u (17j restants) → prédit 2u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | Stock prédit: -0.5u (-16j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Stock prédit: -0.5u (-16j restants) → prédit 2u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 3 | Stock prédit: -0.5u (-9j restants) → prédit 3u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: 0.2u (9j restants) → prédit 1u mais non commandé |
| [MF0060] MF Passata | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.3u (25j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [CB006] CB Blackcurrant Apple juice 1l | 1 | Stock prédit: -0.3u (-11j restants) → prédit 1u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Stock prédit: 0.1u (11j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: -0.1u (-11j restants) → prédit 1u mais non commandé |


---

## False Negatives (7)

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
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0013] MF Olives Vertes 500g | 1 | Stock suffisant: 0.6u (72j restants > seuil 30j) |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [WIG01] WIGNAC cidre naturel bio 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0009] Consigne casier | 9 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 54 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T15:41:52.092Z*
