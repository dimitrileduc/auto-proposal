# Rapport Backtest - Client ROB - THE GOURMETS' MARKET

## Contexte

- **Client** : ROB - THE GOURMETS' MARKET (ID: 60526)
- **Commande réelle** : S39314
- **Date commande** : 2025-09-22 07:01:50
- **Date cutoff système** : 2025-09-22 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.6% | 29 produits prédits, 17 corrects |
| **Rappel** | 85.0% | 20 produits réels, 17 détectés |
| **F1-Score** | 69.4% | Score équilibré global |

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
| **MAE** | 1.88 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 52.1% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 15 | Avec erreur |

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

## True Positives (17)

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 5 | 3 | 2.0 | 66.7% | ✅ partial |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 3 | 1.0 | 33.3% | ✅ partial |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 4 | 1.0 | 25.0% | ✅ partial |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 4 | 6 | 2.0 | 33.3% | ✅ partial |
| [LEA07] LEAMO orangeade bio 330ml | 2 | 4 | 2.0 | 50.0% | ✅ partial |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 6 | 2 | 4.0 | 200.0% | ✅ partial |
| [RISH01] RISH kombucha BIO - original 330ml | 8 | 10 | 2.0 | 20.0% | ✅ partial |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 12 | 10 | 2.0 | 20.0% | ✅ partial |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 12 | 6 | 6.0 | 100.0% | ✅ partial |
| [RISH05] RISH kombucha BIO - rose 750ml | 10 | 6 | 4.0 | 66.7% | ✅ partial |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 12 | 10 | 2.0 | 20.0% | ✅ partial |


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
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 3 | Stock prédit: -0.8u (-11j restants) → prédit 3u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 4 | Stock prédit: 0.7u (9j restants) → prédit 4u mais non commandé |
| [LEA06] LEAMO maté 330ml | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 2 | Stock prédit: -1.5u (-38j restants) → prédit 2u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 3 | Stock prédit: -1.6u (-30j restants) → prédit 3u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 3 | Stock prédit: -1.6u (-30j restants) → prédit 3u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 3 | Stock prédit: -2.3u (-38j restants) → prédit 3u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -3.0u (-52j restants) → prédit 2u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 3 | Stock prédit: -2.0u (-44j restants) → prédit 3u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 4 | Stock prédit: -2.6u (-34j restants) → prédit 4u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 4 | Stock prédit: -5.2u (-49j restants) → prédit 4u mais non commandé |
| [RISH06] RISH kombucha BIO - tagette 750ml | 8 | Stock prédit: -5.4u (-38j restants) → prédit 8u mais non commandé |


---

## False Negatives (3)

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
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | Stock suffisant: 1.6u (45j restants > seuil 30j) |
| [LEA09] LEAMO cola bio 330ml | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LEA05] LEAMO organic lemon lemonade 330 ml | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T10:01:51.928Z*
