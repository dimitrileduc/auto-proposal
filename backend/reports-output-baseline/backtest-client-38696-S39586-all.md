# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S39586
- **Date commande** : 2025-10-07 06:59:59
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.0% | 50 produits prédits, 8 corrects |
| **Rappel** | 72.7% | 11 produits réels, 8 détectés |
| **F1-Score** | 26.2% | Score équilibré global |

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
| **MAE** | 1.25 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 60.4% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

## True Positives (8)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 6 | 3 | 3.0 | 100.0% | ✅ partial |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 3 | 2.0 | 66.7% | ✅ partial |
| [MF0029] MF Tarti Datte chili 250g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (42)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 1.6u (30j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 1.5u (21j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: 0.4u (4j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 1.5u (24j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 3 | Stock prédit: 1.3u (12j restants) → prédit 3u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: 0.2u (0j restants) → prédit 2u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 5 | Stock prédit: 6.9u (28j restants) → prédit 5u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock prédit: 1.1u (15j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.5u (14j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (25j restants) → prédit 1u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: 1.3u (21j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | Stock prédit: -0.8u (-8j restants) → prédit 4u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 5 | Stock prédit: 1.6u (13j restants) → prédit 5u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Stock prédit: 1.6u (29j restants) → prédit 2u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Stock prédit: 0.4u (25j restants) → prédit 2u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: -3.2u (-27j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 0.8u (29j restants) → prédit 2u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 3 | Stock prédit: 0.5u (13j restants) → prédit 3u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 3 | Stock prédit: -0.5u (-15j restants) → prédit 3u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Stock prédit: -0.5u (-14j restants) → prédit 2u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: -0.4u (-6j restants) → prédit 3u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: 0.4u (9j restants) → prédit 3u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -0.7u (-14j restants) → prédit 2u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Stock prédit: -1.7u (-61j restants) → prédit 2u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -2.7u (-82j restants) → prédit 1u mais non commandé |


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
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock suffisant: 0.6u (73j restants > seuil 30j) |
| [VID0009] Consigne casier | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 12 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T14:35:31.475Z*
