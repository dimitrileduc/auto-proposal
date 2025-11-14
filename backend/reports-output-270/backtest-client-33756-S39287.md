# Rapport Backtest - Client BELICIOUS

## Contexte

- **Client** : BELICIOUS (ID: 33756)
- **Commande réelle** : S39287
- **Date commande** : 2025-09-22 06:23:29
- **Date cutoff système** : 2025-09-21 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 67.9% | 28 produits prédits, 19 corrects |
| **Rappel** | 73.1% | 26 produits réels, 19 détectés |
| **F1-Score** | 70.4% | Score équilibré global |

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
| **MAE** | 2.32 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 40.4% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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

## True Positives (19)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF011] JF SAUCE TARTARE 470ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 6 | 12 | 6.0 | 50.0% | ✅ partial |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 4 | 3 | 1.0 | 33.3% | ✅ partial |
| [MF0055] MF Noix de cajou - Curry 133g | 3 | 9 | 6.0 | 66.7% | ✅ partial |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 3 | 9 | 6.0 | 66.7% | ✅ partial |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 4 | 9 | 5.0 | 55.6% | ✅ partial |
| [MF0014] MF Olives noires 500g | 2 | 5 | 3.0 | 60.0% | ✅ partial |
| [MF0013] MF Olives Vertes 500g | 5 | 5 | 0.0 | 0.0% | 🎯 exact |
| [MF0012] MF Olives Mix 500g | 3 | 5 | 2.0 | 40.0% | ✅ partial |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 4 | 8 | 4.0 | 50.0% | ✅ partial |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 5 | 6 | 1.0 | 16.7% | ✅ partial |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 3 | 8 | 5.0 | 62.5% | ✅ partial |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 6 | 6 | 0.0 | 0.0% | 🎯 exact |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact |


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
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: 0.2u (9j restants) → prédit 2u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Stock prédit: -3.9u (-35j restants) → prédit 1u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: 1.9u (17j restants) → prédit 3u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 6 | Stock prédit: 0.0u (0j restants) → prédit 6u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [TVF017] TVF TARTINADE BIO TOMATE 380G | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |


---

## False Negatives (7)

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
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Stock suffisant: 1.2u (41j restants > seuil 19j) |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 10 | Stock suffisant: 3.9u (28j restants > seuil 19j) |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | Stock suffisant: 0.8u (20j restants > seuil 19j) |
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [MF0052] MF Pois chiches  500g | 9 | Stock suffisant: 2.6u (52j restants > seuil 19j) |
| [VID0009] Consigne casier | 51 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [VID0010] Consigne casier | 306 | Jamais commandé avant dans les 270j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-14T09:36:52.966Z*
