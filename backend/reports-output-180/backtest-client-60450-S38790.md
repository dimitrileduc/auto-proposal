# Rapport Backtest - Client LE TIROIR DES SAVEURS

## Contexte

- **Client** : LE TIROIR DES SAVEURS (ID: 60450)
- **Commande réelle** : S38790
- **Date commande** : 2025-08-28 06:08:37
- **Date cutoff système** : 2025-08-27 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 16 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
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
| **MAE** | 1.50 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 20.8% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (4)

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
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 8 | 6 | 2.0 | 33.3% | ✅ partial |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial |
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | 4 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (12)

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
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 8 | Stock prédit: -0.8u (-4j restants) → prédit 8u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 7 | Stock prédit: -0.1u (-1j restants) → prédit 7u mais non commandé |
| [UPI02] Jus de pomme-fraise bio d'UPIGNY 250ml | 7 | Stock prédit: -0.1u (-1j restants) → prédit 7u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 5 | Stock prédit: -2.1u (-26j restants) → prédit 5u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 5 | Stock prédit: -1.0u (-15j restants) → prédit 5u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | Stock prédit: -2.9u (-44j restants) → prédit 4u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | Stock prédit: -1.6u (-35j restants) → prédit 4u mais non commandé |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-14T10:04:55.990Z*
