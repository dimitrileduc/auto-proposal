# Rapport Backtest - Client DLL AD EUPEN EUSCO

## Contexte

- **Client** : DLL AD EUPEN EUSCO (ID: 29139)
- **Commande réelle** : S39201
- **Date commande** : 2025-09-17 11:24:53
- **Date cutoff système** : 2025-09-16 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.0% | 10 produits prédits, 3 corrects |
| **Rappel** | 7.1% | 42 produits réels, 3 détectés |
| **F1-Score** | 11.5% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (3)

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
| [MF0021] MF Sauce BBQ 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (7)

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
| [JF049] JF DISPLAY SAUCES Squeeze | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0061] MF Compote | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0051] MF Kidney Beans 500g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0060] MF Passata | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |


---

## False Negatives (39)

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
| [LD014] LD Organic Avocado Spread 180 g | 2 | Stock suffisant: -1.1u (-19j restants > seuil 19j) |
| [LD012] LD Organic Samphire Spread 135 g | 2 | Stock suffisant: -0.9u (-28j restants > seuil 19j) |
| [LD010] LD Organic Truffle Spread 135 g | 2 | Stock suffisant: -1.3u (-18j restants > seuil 19j) |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | Stock suffisant: 0.6u (9j restants > seuil 19j) |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock suffisant: -1.4u (-10j restants > seuil 19j) |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 4 | Stock suffisant: 0.3u (3j restants > seuil 19j) |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock suffisant: -0.3u (-4j restants > seuil 19j) |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | Stock suffisant: -0.1u (-1j restants > seuil 19j) |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock suffisant: -1.3u (-29j restants > seuil 19j) |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock suffisant: 0.2u (11j restants > seuil 19j) |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock suffisant: 0.8u (58j restants > seuil 19j) |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Stock suffisant: 0.0u (2j restants > seuil 19j) |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock suffisant: 1.6u (23j restants > seuil 19j) |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock suffisant: -0.9u (-28j restants > seuil 19j) |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock suffisant: 0.2u (3j restants > seuil 19j) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock suffisant: 0.8u (11j restants > seuil 19j) |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Stock suffisant: 0.9u (7j restants > seuil 19j) |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock suffisant: -1.1u (-38j restants > seuil 19j) |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock suffisant: 0.5u (19j restants > seuil 19j) |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock suffisant: -1.4u (-30j restants > seuil 19j) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Stock suffisant: -0.9u (-8j restants > seuil 19j) |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock suffisant: 1.1u (24j restants > seuil 19j) |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock suffisant: 1.3u (32j restants > seuil 19j) |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock suffisant: 0.6u (32j restants > seuil 19j) |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock suffisant: 0.5u (16j restants > seuil 19j) |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Stock suffisant: 0.3u (6j restants > seuil 19j) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock suffisant: 0.6u (32j restants > seuil 19j) |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Stock suffisant: 1.9u (35j restants > seuil 19j) |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.2u (11j restants > seuil 19j) |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock suffisant: 2.7u (40j restants > seuil 19j) |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Stock suffisant: 0.5u (6j restants > seuil 19j) |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock suffisant: 2.1u (54j restants > seuil 19j) |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock suffisant: -0.6u (-49j restants > seuil 19j) |
| [MF0053] MF Maïs 500g | 1 | Stock suffisant: 0.2u (3j restants > seuil 19j) |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock suffisant: 0.4u (11j restants > seuil 19j) |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock suffisant: 0.5u (16j restants > seuil 19j) |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Stock suffisant: -0.7u (-7j restants > seuil 19j) |
| [VID0009] Consigne casier | 5 | Jamais commandé avant dans les 180j précédents (pas d'historique) |
| [VID0010] Consigne casier | 30 | Jamais commandé avant dans les 180j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-15T09:46:31.896Z*
