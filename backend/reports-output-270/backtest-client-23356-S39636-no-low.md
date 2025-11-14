# Rapport Backtest - Client Kazidomi France

## Contexte

- **Client** : Kazidomi France (ID: 23356)
- **Commande réelle** : S39636
- **Date commande** : 2025-10-09 08:03:15
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 18 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 5.08 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 48.9% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

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

## True Positives (12)

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
| [LV129] LV Tartinade Carotte Gingembre 190g | 20 | 27 | 7.0 | 25.9% | ✅ partial |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 10 | 7 | 3.0 | 42.9% | ✅ partial |
| [LV135] LV Tartinade Basilico 190g | 20 | 16 | 4.0 | 25.0% | ✅ partial |
| [LV137] LV Tartinade Lentilles Curry 190g | 10 | 9 | 1.0 | 11.1% | ✅ partial |
| [LV040] LV Caprons apéritifs 240g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV161] LV Tartinade Mangue curry 190g | 20 | 7 | 13.0 | 185.7% | ✅ partial |
| [LV162] LV Tartinade Tomato Basilico 190g | 20 | 32 | 12.0 | 37.5% | ✅ partial |
| [LV159] LV Tartinade aux Truffes  135g  | 6 | 3 | 3.0 | 100.0% | ✅ partial |
| [LV160] LV Tartinade Aubergine 190g | 6 | 17 | 11.0 | 64.7% | ✅ partial |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 6 | 6 | 0.0 | 0.0% | 🎯 exact |
| [LV342] LV Organic Broccoli Spread 190 g | 10 | 6 | 4.0 | 66.7% | ✅ partial |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 8 | 11 | 3.0 | 27.3% | ✅ partial |


---

## False Positives (6)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 17 | Stock prédit: 5.9u (18j restants) → prédit 17u mais non commandé |
| [LV139] LV Tartinade Paprika Chili 380g | 10 | Stock prédit: -6.1u (-26j restants) → prédit 10u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 10 | Stock prédit: -14.9u (-62j restants) → prédit 10u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 10 | Stock prédit: -9.5u (-53j restants) → prédit 10u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 10 | Stock prédit: -4.9u (-33j restants) → prédit 10u mais non commandé |
| [LV097] LV Asperges (origine UE)  280 g  | 7 | Stock prédit: -0.3u (-4j restants) → prédit 7u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-14T09:38:53.405Z*
