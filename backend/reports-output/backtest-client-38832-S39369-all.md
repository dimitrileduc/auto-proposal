# Rapport Backtest - Client DLL AD ST VITH DELVITH

## Contexte

- **Client** : DLL AD ST VITH DELVITH (ID: 38832)
- **Commande réelle** : S39369
- **Date commande** : 2025-09-24 11:00:28
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 69.7% | 33 produits prédits, 23 corrects |
| **Rappel** | 92.0% | 25 produits réels, 23 détectés |
| **F1-Score** | 79.3% | Score équilibré global |

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
| **MAE** | 0.52 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 33.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 13 | Égalité parfaite |
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

## True Positives (23)

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
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | 4 | 1.0 | 25.0% | ✅ partial |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LD014] LD Organic Avocado Spread 180 g | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 4 | 6 | 2.0 | 33.3% | ✅ partial |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 6 | 6 | 0.0 | 0.0% | 🎯 exact |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 5 | 5 | 0.0 | 0.0% | 🎯 exact |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LD011] LD Organic Kids Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | 2 | 1.0 | 50.0% | ✅ partial |


---

## False Positives (10)

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
| [JF022] JF MOUTARDE MIEL 250ML WECK | 3 | Stock prédit: 0.4u (10j restants) → prédit 3u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 0.4u (11j restants) → prédit 2u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [LD015] LD Onion Spread 180g | 1 | Stock prédit: -0.4u (-24j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: -3.3u (-69j restants) → prédit 2u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 3 | Stock prédit: -0.2u (-4j restants) → prédit 3u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | Stock prédit: -1.3u (-35j restants) → prédit 3u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | Stock prédit: -0.8u (-39j restants) → prédit 2u mais non commandé |


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
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock suffisant: 0.4u (34j restants > seuil 30j) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock suffisant: 0.5u (48j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-18T20:06:57.907Z*
