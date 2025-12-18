# Rapport Backtest - Client FOODPRINT SRL - FP

## Contexte

- **Client** : FOODPRINT SRL - FP (ID: 71903)
- **Commande réelle** : S36080
- **Date commande** : 2025-04-14 08:31:16
- **Date cutoff système** : 2025-04-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 12
- **Tokens**: 11,418 input + 4,683 output = 16,101 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 14.8% | 61 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 25.7% | Score équilibré global |

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
| **MAE** | 4.56 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -11.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [RIT01] RITCHIE Orange - verre 275ml | 20 | 10 | 10.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT02] RITCHIE Citron - verre 275ml | 20 | 20 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 5 | 10 | 5.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT05] RITCHIE Cola - verre 275ml | 15 | 20 | 5.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 5 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 5 | 15 | 10.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT08] RITCHIE Citron - canette 330ml | 5 | 10 | 5.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT09] RITCHIE Cola - canette 330ml | 5 | 6 | 1.0 | 16.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 5 | 2 | 3.0 | 150.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |






---

## False Positives (52)

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
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [fsv11] Noix de cajou mexicaines bio vrac 2,8kg  | 4 | Stock prédit: NaNu (NaNj restants) → prédit 4u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [fsv14] Amandes grillées bio vrac 2,8kg | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [fsv18] Mendiant bio vrac 2,8kg | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 180 | Stock prédit: NaNu (NaNj restants) → prédit 180u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 180 | Stock prédit: NaNu (NaNj restants) → prédit 180u mais non commandé |
| [LEA04] LEAMO ginger beer bio 750ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [LEA09] LEAMO cola bio 330ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 15 | Stock prédit: NaNu (NaNj restants) → prédit 15u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 120 | Stock prédit: NaNu (NaNj restants) → prédit 120u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 60 | Stock prédit: NaNu (NaNj restants) → prédit 60u mais non commandé |
| [DAM05] Dr. Antonio Martins eau de coco bio & fairtrade 330ml | 30 | Stock prédit: NaNu (NaNj restants) → prédit 30u mais non commandé |
| [BUD02] BUDDY bio functional & energy drink citorn & gingembre - 250ml | 60 | Stock prédit: NaNu (NaNj restants) → prédit 60u mais non commandé |
| [BUD03] BUDDY bio functional & energy drink mangue passion - 250ml | 60 | Stock prédit: NaNu (NaNj restants) → prédit 60u mais non commandé |
| [BUD04] BUDDY bio functional & energy drink grenade hibiscus - 250ml | 60 | Stock prédit: NaNu (NaNj restants) → prédit 60u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 20 | Stock prédit: NaNu (NaNj restants) → prédit 20u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 90 | Stock prédit: NaNu (NaNj restants) → prédit 90u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 180 | Stock prédit: NaNu (NaNj restants) → prédit 180u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 180 | Stock prédit: NaNu (NaNj restants) → prédit 180u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 180 | Stock prédit: NaNu (NaNj restants) → prédit 180u mais non commandé |
| [KOKO02] KOKO Kombucha citron gingembre 330ml | 40 | Stock prédit: NaNu (NaNj restants) → prédit 40u mais non commandé |
| [KOKO03] KOKO Kombucha framboise hibiscus 330ml | 40 | Stock prédit: NaNu (NaNj restants) → prédit 40u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 40 | Stock prédit: NaNu (NaNj restants) → prédit 40u mais non commandé |
| Palette EURO | 333 | Stock prédit: NaNu (NaNj restants) → prédit 333u mais non commandé |
| [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 15 | Stock prédit: NaNu (NaNj restants) → prédit 15u mais non commandé |
| [JOY08] JOY! Confiture bio à la framboise 370g | 196 | Stock prédit: NaNu (NaNj restants) → prédit 196u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 20 | Stock prédit: NaNu (NaNj restants) → prédit 20u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 30 | Stock prédit: NaNu (NaNj restants) → prédit 30u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 20 | Stock prédit: NaNu (NaNj restants) → prédit 20u mais non commandé |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 30 | Stock prédit: NaNu (NaNj restants) → prédit 30u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 20 | Stock prédit: NaNu (NaNj restants) → prédit 20u mais non commandé |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 203 | Stock prédit: NaNu (NaNj restants) → prédit 203u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 46 | Stock prédit: NaNu (NaNj restants) → prédit 46u mais non commandé |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [JOY02] JOY! Confiture bio à la fraise 370g | 196 | Stock prédit: NaNu (NaNj restants) → prédit 196u mais non commandé |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 199 | Stock prédit: NaNu (NaNj restants) → prédit 199u mais non commandé |
| [JOY06] JOY! Confiture bio à la rhubarbe 370g | 257 | Stock prédit: NaNu (NaNj restants) → prédit 257u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 48 | Stock prédit: NaNu (NaNj restants) → prédit 48u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 12 | Stock prédit: NaNu (NaNj restants) → prédit 12u mais non commandé |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 12 | Stock prédit: NaNu (NaNj restants) → prédit 12u mais non commandé |
| [JOY05] JOY! Confiture bio à la cerise 370g | 200 | Stock prédit: NaNu (NaNj restants) → prédit 200u mais non commandé |
| [JOY07] JOY! Confiture bio à la figue 370g | 281 | Stock prédit: NaNu (NaNj restants) → prédit 281u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:08:17.969Z*
