# Rapport Backtest - Client LA FERME DU BUEAU

## Contexte

- **Client** : LA FERME DU BUEAU (ID: 60411)
- **Commande réelle** : S39677
- **Date commande** : 2025-10-14 06:47:17
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 25 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 57.1% | Score équilibré global |

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
| **MAE** | 0.40 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 15.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 7 | Égalité parfaite |
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
| [RIT05] RITCHIE Cola - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 3 | 1.0 | 33.3% | ✅ partial |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 3 | 2.0 | 66.7% | ✅ partial |


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
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 1 | Stock prédit: 0.5u (29j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock prédit: 0.5u (29j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: 0.5u (29j restants) → prédit 1u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 1 | Stock prédit: 0.5u (29j restants) → prédit 1u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock prédit: 0.5u (29j restants) → prédit 1u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Stock prédit: 0.4u (20j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [MF0060] MF Passata | 1 | Stock prédit: -0.2u (-12j restants) → prédit 1u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Stock prédit: 0.2u (17j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -0.4u (-32j restants) → prédit 1u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: -0.4u (-32j restants) → prédit 1u mais non commandé |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 1 | Stock prédit: -0.7u (-47j restants) → prédit 1u mais non commandé |


---

## False Negatives (0)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>

*Aucun faux négatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-11-18T20:05:12.698Z*
