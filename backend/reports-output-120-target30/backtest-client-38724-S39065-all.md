# Rapport Backtest - Client CORA S.A.

## Contexte

- **Client** : CORA S.A. (ID: 38724)
- **Commande réelle** : S39065
- **Date commande** : 2025-09-08 07:10:00
- **Date cutoff système** : 2025-09-08 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 11 produits prédits, 11 corrects |
| **Rappel** | 61.1% | 18 produits réels, 11 détectés |
| **F1-Score** | 75.9% | Score équilibré global |

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
| **MAE** | 9.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 64.2% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 14 | 33 | 19.0 | 57.6% | ✅ partial |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 8 | 6 | 2.0 | 33.3% | ✅ partial |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 7 | 8 | 1.0 | 12.5% | ✅ partial |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 16 | 25 | 9.0 | 36.0% | ✅ partial |
| [JF009] JF SAUCE TARTARE 250ML WECK | 13 | 25 | 12.0 | 48.0% | ✅ partial |
| [FIL18] FIL VOL AU VENT 800G BOCAL  | 16 | 32 | 16.0 | 50.0% | ✅ partial |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 4 | 8 | 4.0 | 50.0% | ✅ partial |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 5 | 13 | 8.0 | 61.5% | ✅ partial |
| [JF035] JF BURGER SQUEEZE 300ML | 3 | 7 | 4.0 | 57.1% | ✅ partial |
| [FIL22] FIL BOULLETTES SAUCE TOMATE 800G BOCAL  | 8 | 8 | 0.0 | 0.0% | 🎯 exact |
| [FIL20] FIL CARBONNADES 800G BOCAL  | 32 | 8 | 24.0 | 300.0% | ✅ partial |


---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 25 | Stock suffisant: 16.0u (32j restants > seuil 30j) |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 25 | Stock suffisant: 5.3u (31j restants > seuil 30j) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 11 | Stock suffisant: 4.5u (37j restants > seuil 30j) |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 15 | Stock suffisant: 12.0u (47j restants > seuil 30j) |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 5 | Stock suffisant: 7.4u (51j restants > seuil 30j) |
| [JF037] JF BBQ SQUEEZE 300ML | 6 | Stock suffisant: 4.6u (47j restants > seuil 30j) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 21 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T10:00:56.538Z*
