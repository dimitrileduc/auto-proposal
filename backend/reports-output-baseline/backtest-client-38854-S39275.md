# Rapport Backtest - Client DLL PROXY FERRIERES DELCOU

## Contexte

- **Client** : DLL PROXY FERRIERES DELCOU (ID: 38854)
- **Commande réelle** : S39275
- **Date commande** : 2025-09-18 12:28:28
- **Date cutoff système** : 2025-09-18 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 28.1% | 32 produits prédits, 9 corrects |
| **Rappel** | 90.0% | 10 produits réels, 9 détectés |
| **F1-Score** | 42.9% | Score équilibré global |

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
| **MAE** | 0.56 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 44.4% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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

## True Positives (9)

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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (23)

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
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: 0.3u (13j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | Stock prédit: 1.0u (13j restants) → prédit 3u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Stock prédit: -0.1u (-2j restants) → prédit 2u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Stock prédit: 1.0u (13j restants) → prédit 3u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.3u (13j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: 0.3u (27j restants) → prédit 1u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Stock prédit: 0.2u (17j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Stock prédit: 0.4u (16j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: 0.2u (17j restants) → prédit 1u mais non commandé |
| [JF021] JF PICKLES 350 ML | 1 | Stock prédit: -0.5u (-30j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: -0.5u (-30j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.2u (30j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: -0.3u (-28j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: -0.5u (-38j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: -0.5u (-38j restants) → prédit 1u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: -0.2u (-22j restants) → prédit 1u mais non commandé |


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
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Stock suffisant: 0.5u (41j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-18T14:38:05.324Z*
