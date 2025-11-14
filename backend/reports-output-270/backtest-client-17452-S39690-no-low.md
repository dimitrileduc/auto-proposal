# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S39690
- **Date commande** : 2025-10-13 08:23:06
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 27.8% | 36 produits prédits, 10 corrects |
| **Rappel** | 76.9% | 13 produits réels, 10 détectés |
| **F1-Score** | 40.8% | Score équilibré global |

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
| **MAE** | 122.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 33.5% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (10)

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
| [LV342] LV Organic Broccoli Spread 190 g | 155 | 310 | 155.0 | 50.0% | ✅ partial |
| [LV331] LV Tartinade Lentils Balsamico 190g | 225 | 124 | 101.0 | 81.5% | ✅ partial |
| [LV161] LV Tartinade Mangue curry 190g | 1050 | 775 | 275.0 | 35.5% | ✅ partial |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 700 | 620 | 80.0 | 12.9% | ✅ partial |
| [LV188] LV Tartinade Aubergine  380g | 168 | 112 | 56.0 | 50.0% | ✅ partial |
| [LV160] LV Tartinade Aubergine 190g | 700 | 775 | 75.0 | 9.7% | ✅ partial |
| [LV162] LV Tartinade Tomato Basilico 190g | 700 | 1085 | 385.0 | 35.5% | ✅ partial |
| [LV345] LV Spread KIDS 200ml Organic | 62 | 62 | 0.0 | 0.0% | 🎯 exact |
| [LV139] LV Tartinade Paprika Chili 380g | 192 | 128 | 64.0 | 50.0% | ✅ partial |
| [LV330] LV BIO Tartinade Toscana 190g | 250 | 279 | 29.0 | 10.4% | ✅ partial |


---

## False Positives (26)

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
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 6 | Stock prédit: 44.7u (9j restants) → prédit 6u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 275 | Stock prédit: 100.0u (12j restants) → prédit 275u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 225 | Stock prédit: -1.6u (0j restants) → prédit 225u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 620 | Stock prédit: -214.7u (-11j restants) → prédit 620u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 217 | Stock prédit: -18.5u (-3j restants) → prédit 217u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 24 | Stock prédit: -7.9u (-15j restants) → prédit 24u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 25 | Stock prédit: -27.1u (-31j restants) → prédit 25u mais non commandé |
| [LV158] LV Moutarde 200 ml | 50 | Stock prédit: -21.4u (-21j restants) → prédit 50u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 350 | Stock prédit: -56.5u (-7j restants) → prédit 350u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 299 | Stock prédit: -28.6u (-4j restants) → prédit 299u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 120 | Stock prédit: 24.8u (7j restants) → prédit 120u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 40 | Stock prédit: -44.8u (-27j restants) → prédit 40u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 90 | Stock prédit: 2.1u (1j restants) → prédit 90u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 175 | Stock prédit: -163.8u (-23j restants) → prédit 175u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 237 | Stock prédit: -49.3u (-7j restants) → prédit 237u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 48 | Stock prédit: -3.9u (-5j restants) → prédit 48u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 108 | Stock prédit: 30.6u (18j restants) → prédit 108u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 350 | Stock prédit: -372.4u (-24j restants) → prédit 350u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 184 | Stock prédit: 12.4u (4j restants) → prédit 184u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 144 | Stock prédit: -18.6u (-5j restants) → prédit 144u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 100 | Stock prédit: 46.6u (13j restants) → prédit 100u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 75 | Stock prédit: -63.6u (-57j restants) → prédit 75u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 33 | Stock prédit: -12.2u (-46j restants) → prédit 33u mais non commandé |
| [LV221] LV Cornichons Aigre-Doux 670g | 80 | Stock prédit: -91.4u (-82j restants) → prédit 80u mais non commandé |
| [LV140] LV Moutarde à l'ancienne  200ml | 25 | Stock prédit: -23.8u (-62j restants) → prédit 25u mais non commandé |
| [LV220] LV Cornichons Fins au vinaigre 330g | 105 | Stock prédit: -109.0u (-66j restants) → prédit 105u mais non commandé |


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
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 32 | Stock suffisant: 180.3u (46j restants > seuil 19j) |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 186 | Stock suffisant: 409.8u (50j restants > seuil 19j) |
| [LV357] LV Tartinade BIO Asperge 190g | 248 | Stock suffisant: 85.4u (46j restants > seuil 19j) |


---

*Rapport généré automatiquement le 2025-11-14T09:35:16.361Z*
