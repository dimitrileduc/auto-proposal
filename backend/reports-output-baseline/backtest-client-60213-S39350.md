# Rapport Backtest - Client BIOK THOREMBAIS

## Contexte

- **Client** : BIOK THOREMBAIS (ID: 60213)
- **Commande réelle** : S39350
- **Date commande** : 2025-09-24 13:05:32
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.6% | 21 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 64.5% | Score équilibré global |

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
| **MAE** | 0.50 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 38.3% | Erreur moyenne en % (complémentaire) |
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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 3 | 1.0 | 33.3% | ✅ partial |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [KOKO01] KOKO Kombucha original 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (11)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.6u (27j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: -0.8u (-8j restants) → prédit 2u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.4u (25j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.2u (9j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.3u (-18j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: -0.2u (-20j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-18T14:35:53.869Z*
