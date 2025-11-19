# Rapport Backtest - Client TERRA NATURKOST HANDELS KG

## Contexte

- **Client** : TERRA NATURKOST HANDELS KG (ID: 3868)
- **Commande réelle** : S39421
- **Date commande** : 2025-09-26 09:47:05
- **Date cutoff système** : 2025-09-26 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 16 produits prédits, 12 corrects |
| **Rappel** | 85.7% | 14 produits réels, 12 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 35.83 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 144.8% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 48 | 48 | 0.0 | 0.0% | 🎯 exact |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 72 | 64 | 8.0 | 12.5% | ✅ partial |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 75 | 25 | 50.0 | 200.0% | ✅ partial |
| [LV331] LV Tartinade Lentils Balsamico 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial |
| [LV159] LV Tartinade aux Truffes  135g  | 50 | 25 | 25.0 | 100.0% | ✅ partial |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 48 | 16 | 32.0 | 200.0% | ✅ partial |
| [MF0062] ​MF Tarti Betterave rouge | 72 | 32 | 40.0 | 125.0% | ✅ partial |
| [LV136] LV Tartinade Betterave 190g | 75 | 25 | 50.0 | 200.0% | ✅ partial |
| [LV129] LV Tartinade Carotte Gingembre 190g | 75 | 25 | 50.0 | 200.0% | ✅ partial |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 75 | 25 | 50.0 | 200.0% | ✅ partial |
| [LV330] LV BIO Tartinade Toscana 190g | 75 | 25 | 50.0 | 200.0% | ✅ partial |
| [LV345] LV Spread KIDS 200ml Organic | 75 | 25 | 50.0 | 200.0% | ✅ partial |


---

## False Positives (4)

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
| [LV342] LV Organic Broccoli Spread 190 g | 50 | Stock prédit: 3.5u (2j restants) → prédit 50u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 50 | Stock prédit: 3.5u (2j restants) → prédit 50u mais non commandé |
| [LV189] LV Tartinade Houmous Type 380g | 75 | Stock prédit: -31.0u (-19j restants) → prédit 75u mais non commandé |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 75 | Stock prédit: -31.0u (-19j restants) → prédit 75u mais non commandé |


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
| [VID0009] Consigne casier | 160 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 960 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T15:39:07.078Z*
