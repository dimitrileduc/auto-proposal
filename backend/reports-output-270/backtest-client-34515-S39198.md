# Rapport Backtest - Client Fermes en Vie SC - Fermes en Vie

## Contexte

- **Client** : Fermes en Vie SC - Fermes en Vie (ID: 34515)
- **Commande réelle** : S39198
- **Date commande** : 2025-09-16 06:38:03
- **Date cutoff système** : 2025-09-15 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.3% | 33 produits prédits, 10 corrects |
| **Rappel** | 83.3% | 12 produits réels, 10 détectés |
| **F1-Score** | 44.4% | Score équilibré global |

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
| **MAE** | 1.10 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 70.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [REB11] ReBEL chips premium & bio - truffes 125g | 3 | 1 | 2.0 | 200.0% | ✅ partial |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 1 | 2.0 | 200.0% | ✅ partial |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | 2 | 1.0 | 50.0% | ✅ partial |


---

## False Positives (23)

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
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Stock prédit: 0.5u (17j restants) → prédit 1u mais non commandé |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [MF0047] MF Mayonnaise 250ml | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 2 | Stock prédit: -0.2u (-3j restants) → prédit 2u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 3 | Stock prédit: 0.2u (3j restants) → prédit 3u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |


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
| [VID0009] Consigne casier | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [VID0010] Consigne casier | 6 | Jamais commandé avant dans les 270j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-14T09:39:43.896Z*
