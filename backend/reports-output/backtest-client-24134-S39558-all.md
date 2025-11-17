# Rapport Backtest - Client Terre de fromages S.A

## Contexte

- **Client** : Terre de fromages S.A (ID: 24134)
- **Commande réelle** : S39558
- **Date commande** : 2025-10-08 07:15:49
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 15 produits prédits, 6 corrects |
| **Rappel** | 40.0% | 15 produits réels, 6 détectés |
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
| **MAE** | 1.67 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 104.2% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (6)

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
| [LV149] LV Sauce Aioli Pesto 200ml | 3 | 1 | 2.0 | 200.0% | ✅ partial |
| [LV160] LV Tartinade Aubergine 190g | 6 | 2 | 4.0 | 200.0% | ✅ partial |
| [LV161] LV Tartinade Mangue curry 190g | 4 | 2 | 2.0 | 100.0% | ✅ partial |
| [LV146] LV Sauce Aïoli 200 ml | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV162] LV Tartinade Tomato Basilico 190g | 5 | 4 | 1.0 | 25.0% | ✅ partial |


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
| [LV145] LV Sauce Tartare 200 ml  | 2 | Stock prédit: 0.2u (7j restants) → prédit 2u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 2 | Stock prédit: 0.4u (17j restants) → prédit 2u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 4 | Stock prédit: 0.2u (2j restants) → prédit 4u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 5 | Stock prédit: 1.6u (16j restants) → prédit 5u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -0.5u (-29j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: -0.0u (-2j restants) → prédit 1u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 4 | Stock prédit: -4.1u (-56j restants) → prédit 4u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 4 | Stock prédit: -4.0u (-56j restants) → prédit 4u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 4 | Stock prédit: -1.6u (-46j restants) → prédit 4u mais non commandé |


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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Stock suffisant: 1.3u (49j restants > seuil 19j) |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock suffisant: 0.6u (31j restants > seuil 19j) |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock suffisant: 0.6u (31j restants > seuil 19j) |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock suffisant: 0.6u (31j restants > seuil 19j) |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock suffisant: 0.6u (31j restants > seuil 19j) |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock suffisant: 0.6u (31j restants > seuil 19j) |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 4 | Stock suffisant: 1.2u (40j restants > seuil 19j) |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | Stock suffisant: 2.1u (57j restants > seuil 19j) |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | Jamais commandé avant dans les 180j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-17T12:02:24.564Z*
