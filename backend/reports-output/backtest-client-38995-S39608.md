# Rapport Backtest - Client MASETTI

## Contexte

- **Client** : MASETTI (ID: 38995)
- **Commande réelle** : S39608
- **Date commande** : 2025-10-08 06:19:58
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.8% | 26 produits prédits, 21 corrects |
| **Rappel** | 87.5% | 24 produits réels, 21 détectés |
| **F1-Score** | 84.0% | Score équilibré global |

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
| **MAE** | 3.05 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 66.0% | Erreur moyenne en % (complémentaire) |
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
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 30 | 15 | 15.0 | 100.0% | ✅ partial |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 15 | 10 | 5.0 | 50.0% | ✅ partial |
| [JF009] JF SAUCE TARTARE 250ML WECK | 10 | 5 | 5.0 | 100.0% | ✅ partial |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 10 | 20 | 10.0 | 50.0% | ✅ partial |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 5 | 5 | 0.0 | 0.0% | 🎯 exact |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 10 | 10 | 0.0 | 0.0% | 🎯 exact |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 4 | 1 | 3.0 | 300.0% | ✅ partial |
| [JF035] JF BURGER SQUEEZE 300ML | 5 | 1 | 4.0 | 400.0% | ✅ partial |
| [JF037] JF BBQ SQUEEZE 300ML | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [JF029] JF VOL AU VENT BOCAL 400G | 4 | 10 | 6.0 | 60.0% | ✅ partial |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 2 | 4 | 2.0 | 50.0% | ✅ partial |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 3 | 4 | 1.0 | 25.0% | ✅ partial |
| [JF032] JF SAUCE LAPIN 380GX6 | 5 | 10 | 5.0 | 50.0% | ✅ partial |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 5 | 10 | 5.0 | 50.0% | ✅ partial |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | 2 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (5)

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
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 25 | Stock prédit: -2.5u (-3j restants) → prédit 25u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 5 | Stock prédit: -0.2u (-1j restants) → prédit 5u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 25 | Stock prédit: 0.3u (0j restants) → prédit 25u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 4 | Stock prédit: -2.4u (-49j restants) → prédit 4u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 5 | Stock prédit: -5.6u (-77j restants) → prédit 5u mais non commandé |


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
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 25 | Stock suffisant: 13.0u (28j restants > seuil 19j) |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Stock suffisant: 1.4u (29j restants > seuil 19j) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock suffisant: 2.0u (40j restants > seuil 19j) |


---

*Rapport généré automatiquement le 2025-11-17T12:01:08.205Z*
