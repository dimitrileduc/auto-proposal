# Rapport Backtest - Client Fromagerie du Baîrsou

## Contexte

- **Client** : Fromagerie du Baîrsou (ID: 34516)
- **Commande réelle** : S39417
- **Date commande** : 2025-09-26 10:57:31
- **Date cutoff système** : 2025-09-26 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 57.1% | 21 produits prédits, 12 corrects |
| **Rappel** | 75.0% | 16 produits réels, 12 détectés |
| **F1-Score** | 64.9% | Score équilibré global |

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
| **MAE** | 0.25 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 9 | Égalité parfaite |
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
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


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
| [SOWA01] SOWA citron menthe 250ml | 2 | Stock prédit: -0.7u (-13j restants) → prédit 2u mais non commandé |
| [SOWA02] SOWA bissap 250ml | 1 | Stock prédit: 0.3u (26j restants) → prédit 1u mais non commandé |
| [SOWA03] SOWA ginger beer ardent 250ml | 2 | Stock prédit: -0.7u (-13j restants) → prédit 2u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock prédit: -0.3u (-12j restants) → prédit 1u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -1.4u (-51j restants) → prédit 1u mais non commandé |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -1.4u (-51j restants) → prédit 1u mais non commandé |


---

## False Negatives (4)

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
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock suffisant: 0.4u (37j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-18T15:42:51.480Z*
