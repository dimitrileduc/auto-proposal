# Rapport Backtest - Client DELISALADES

## Contexte

- **Client** : DELISALADES (ID: 23733)
- **Commande réelle** : S39469
- **Date commande** : 2025-10-03 08:03:20
- **Date cutoff système** : 2025-10-03 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 52.9% | 17 produits prédits, 9 corrects |
| **Rappel** | 81.8% | 11 produits réels, 9 détectés |
| **F1-Score** | 64.3% | Score équilibré global |

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
| **MAE** | 1.33 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 33.8% | Erreur moyenne en % (complémentaire) |
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
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | 3 | 2.0 | 66.7% | ✅ partial |
| [LV140] LV Moutarde à l'ancienne  200ml | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV129] LV Tartinade Carotte Gingembre 190g | 5 | 4 | 1.0 | 25.0% | ✅ partial |
| [LV161] LV Tartinade Mangue curry 190g | 5 | 8 | 3.0 | 37.5% | ✅ partial |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | 4 | 2.0 | 50.0% | ✅ partial |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 3 | 4 | 1.0 | 25.0% | ✅ partial |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF021] JF PICKLES 350 ML | 5 | 6 | 1.0 | 16.7% | ✅ partial |
| [LV136] LV Tartinade Betterave 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial |


---

## False Positives (8)

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
| [LV145] LV Sauce Tartare 200 ml  | 3 | Stock prédit: 0.6u (6j restants) → prédit 3u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 12 | Stock prédit: 5.5u (12j restants) → prédit 12u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 3 | Stock prédit: 1.0u (11j restants) → prédit 3u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 3 | Stock prédit: -1.2u (-30j restants) → prédit 3u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: -0.6u (-20j restants) → prédit 1u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 2 | Stock prédit: -1.4u (-32j restants) → prédit 2u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | Stock prédit: 0.3u (5j restants) → prédit 4u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 2 | Stock prédit: -0.7u (-26j restants) → prédit 2u mais non commandé |


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
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T10:00:21.780Z*
