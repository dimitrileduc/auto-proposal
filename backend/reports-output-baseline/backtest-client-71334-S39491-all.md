# Rapport Backtest - Client BIODIS

## Contexte

- **Client** : BIODIS (ID: 71334)
- **Commande réelle** : S39491
- **Date commande** : 2025-10-01 11:19:31
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 18 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
| **F1-Score** | 69.0% | Score équilibré global |

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
| **MAE** | 17.20 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 29.8% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 93 | 93 | 0.0 | 0.0% | 🎯 exact |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 124 | 217 | 93.0 | 42.9% | ✅ partial |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 93 | 93 | 0.0 | 0.0% | 🎯 exact |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 31 | 31 | 0.0 | 0.0% | 🎯 exact |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 25 | 25 | 0.0 | 0.0% | 🎯 exact |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 62 | 62 | 0.0 | 0.0% | 🎯 exact |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 47 | 31 | 16.0 | 51.6% | ✅ partial |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 78 | 31 | 47.0 | 151.6% | ✅ partial |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 47 | 31 | 16.0 | 51.6% | ✅ partial |


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
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | Stock prédit: 75.8u (5j restants) → prédit 434u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 62 | Stock prédit: -6.9u (-2j restants) → prédit 62u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 62 | Stock prédit: -9.5u (-7j restants) → prédit 62u mais non commandé |
| [PF1690] LD BBQ BIO 300G | 25 | Stock prédit: -23.1u (-36j restants) → prédit 25u mais non commandé |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | Stock prédit: -23.1u (-36j restants) → prédit 25u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 31 | Stock prédit: -68.4u (-51j restants) → prédit 31u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -17.1u (-28j restants) → prédit 40u mais non commandé |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 47 | Stock prédit: -4.4u (-6j restants) → prédit 47u mais non commandé |


---

## False Negatives (1)

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
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 100 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T14:36:37.910Z*
