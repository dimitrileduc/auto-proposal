# Rapport Backtest - Client Ferme de Warichet

## Contexte

- **Client** : Ferme de Warichet (ID: 23316)
- **Commande réelle** : S39117
- **Date commande** : 2025-09-10 06:21:45
- **Date cutoff système** : 2025-09-10 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 51.2% | 43 produits prédits, 22 corrects |
| **Rappel** | 91.7% | 24 produits réels, 22 détectés |
| **F1-Score** | 65.7% | Score équilibré global |

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
| **MAE** | 0.55 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 31.8% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 12 | Avec erreur |

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

## True Positives (22)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV131] LV Tartinade Potiron 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV132] LV Tartinade Houmous type 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV133] LV Tartinade Ananas Coco 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV135] LV Tartinade Basilico 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV188] LV Tartinade Aubergine  380g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV345] LV Spread KIDS 200ml Organic | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV357] LV Tartinade BIO Asperge 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial |


---

## False Positives (21)

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
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | Stock prédit: 2.9u (20j restants) → prédit 4u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: 0.8u (22j restants) → prédit 1u mais non commandé |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 1 | Stock prédit: 0.8u (22j restants) → prédit 1u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Stock prédit: 0.8u (22j restants) → prédit 1u mais non commandé |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Stock prédit: 0.4u (22j restants) → prédit 1u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | Stock prédit: 0.4u (22j restants) → prédit 1u mais non commandé |
| [MF0061] MF Compote | 2 | Stock prédit: -1.6u (-28j restants) → prédit 2u mais non commandé |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: -0.8u (-28j restants) → prédit 1u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Stock prédit: -0.8u (-28j restants) → prédit 1u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 1 | Stock prédit: -0.8u (-28j restants) → prédit 1u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 2 | Stock prédit: 0.3u (14j restants) → prédit 2u mais non commandé |
| [UPI02] Jus de pomme-fraise bio d'UPIGNY 250ml | 1 | Stock prédit: -2.3u (-82j restants) → prédit 1u mais non commandé |
| [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml | 1 | Stock prédit: -2.3u (-82j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Stock prédit: -2.3u (-82j restants) → prédit 1u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -2.3u (-82j restants) → prédit 1u mais non commandé |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Stock prédit: -2.3u (-82j restants) → prédit 1u mais non commandé |


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
| [RIT01] RITCHIE Orange - verre 275ml | 1 | Stock suffisant: 1.1u (42j restants > seuil 30j) |
| [LV040] LV Caprons apéritifs 240g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T15:41:04.647Z*
