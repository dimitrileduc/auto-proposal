# Rapport Backtest - Client Hyper St Agathe Berchem

## Contexte

- **Client** : Hyper St Agathe Berchem (ID: 17282)
- **Commande réelle** : S38846
- **Date commande** : 2025-09-01 06:41:12
- **Date cutoff système** : 2025-08-31 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 95.5% | 22 produits prédits, 21 corrects |
| **Rappel** | 95.5% | 22 produits réels, 21 détectés |
| **F1-Score** | 95.5% | Score équilibré global |

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
| **MAE** | 0.90 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 46.5% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

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

## True Positives (21)

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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 5 | 3.0 | 60.0% | ✅ partial |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial |


---

## False Positives (1)

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
| [DIS0004] Display JF bois | 1 | Stock prédit: -0.8u (-106j restants) → prédit 1u mais non commandé |


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
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock suffisant: 0.6u (24j restants > seuil 19j) |


---

*Rapport généré automatiquement le 2025-11-14T09:38:19.520Z*
