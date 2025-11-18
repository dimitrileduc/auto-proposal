# Rapport Backtest - Client CRF HYPER MARKET EUPEN

## Contexte

- **Client** : CRF HYPER MARKET EUPEN (ID: 29069)
- **Commande réelle** : S39365
- **Date commande** : 2025-09-24 09:13:07
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 17.7% | 62 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 30.1% | Score équilibré global |

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
| **MAE** | 0.45 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 23.5% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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

## True Positives (11)

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
| [MF0030] MF Tarti Mangue Curry 250g  | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [FIL21] FIL BOULETTES SAUCE CHASSEUR 800G BOCAL  | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [FIL18] FIL VOL AU VENT 800G BOCAL  | 3 | 4 | 1.0 | 25.0% | ✅ partial |
| [FIL19] FIL VOL AU VENT 400G BOCAL | 4 | 4 | 0.0 | 0.0% | 🎯 exact |
| [FIL08] FIL MOUTARDE 700G BOCAL | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [FIL09] FIL MOUTARDE 300G BOCAL | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [FIL11] FIL MAYONNAISE ŒUFS 1L SEAU  | 4 | 3 | 1.0 | 33.3% | ✅ partial |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LD011] LD Organic Kids Spread 180 g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [FIL22] FIL BOULLETTES SAUCE TOMATE 800G BOCAL  | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (51)

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
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: 0.7u (15j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: 0.8u (21j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: 1.4u (15j restants) → prédit 3u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | Stock prédit: 0.5u (6j restants) → prédit 3u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: 1.7u (30j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: 3.3u (27j restants) → prédit 4u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 1.6u (22j restants) → prédit 2u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Stock prédit: 0.7u (15j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.7u (17j restants) → prédit 1u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: 0.7u (15j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.7u (17j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Stock prédit: 1.7u (30j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Stock prédit: 0.7u (15j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Stock prédit: 0.8u (22j restants) → prédit 2u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Stock prédit: 1.5u (18j restants) → prédit 2u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Stock prédit: 1.6u (28j restants) → prédit 2u mais non commandé |
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | Stock prédit: 0.7u (26j restants) → prédit 1u mais non commandé |
| [FIL23] FIL MAYONNAISE 300ML SQUEEZE  | 1 | Stock prédit: -0.7u (-19j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: -1.2u (-25j restants) → prédit 1u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 1 | Stock prédit: 0.8u (18j restants) → prédit 1u mais non commandé |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 2 | Stock prédit: 0.6u (20j restants) → prédit 2u mais non commandé |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [LD012] LD Organic Samphire Spread 135 g | 2 | Stock prédit: -0.2u (-3j restants) → prédit 2u mais non commandé |
| [LD010] LD Organic Truffle Spread 135 g | 2 | Stock prédit: 0.6u (20j restants) → prédit 2u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | Stock prédit: 1.0u (15j restants) → prédit 2u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 2 | Stock prédit: -0.7u (-18j restants) → prédit 2u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Stock prédit: -1.2u (-25j restants) → prédit 2u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Stock prédit: -0.0u (-4j restants) → prédit 1u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: -0.6u (-30j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: -0.6u (-30j restants) → prédit 1u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: 0.1u (13j restants) → prédit 1u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Stock prédit: 0.1u (4j restants) → prédit 2u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Stock prédit: -0.4u (-25j restants) → prédit 1u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: -0.6u (-30j restants) → prédit 1u mais non commandé |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Stock prédit: 0.2u (15j restants) → prédit 1u mais non commandé |
| [MF0047] MF Mayonnaise 250ml | 1 | Stock prédit: -0.4u (-26j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -0.4u (-26j restants) → prédit 1u mais non commandé |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Stock prédit: -0.6u (-30j restants) → prédit 1u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: -0.9u (-26j restants) → prédit 1u mais non commandé |
| [TVF015] TVF TARTINADE BIO AUBERGINE 380G | 1 | Stock prédit: -0.2u (-6j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Stock prédit: -0.3u (-17j restants) → prédit 1u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Stock prédit: 0.0u (3j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: -0.8u (-49j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: -0.3u (-28j restants) → prédit 1u mais non commandé |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Stock prédit: 0.0u (4j restants) → prédit 1u mais non commandé |
| [FIL24] FIL CURRY KETCHUP 300ML SQUEEZE  | 1 | Stock prédit: -1.5u (-65j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-18T14:37:07.791Z*
