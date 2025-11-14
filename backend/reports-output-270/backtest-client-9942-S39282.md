# Rapport Backtest - Client La fermette

## Contexte

- **Client** : La fermette (ID: 9942)
- **Commande réelle** : S39282
- **Date commande** : 2025-09-22 06:26:45
- **Date cutoff système** : 2025-09-21 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 19.1% | 47 produits prédits, 9 corrects |
| **Rappel** | 52.9% | 17 produits réels, 9 détectés |
| **F1-Score** | 28.1% | Score équilibré global |

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
| **MAE** | 0.33 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 27.8% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial |


---

## False Positives (38)

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
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -1.2u (-35j restants) → prédit 1u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.5u (-27j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: -0.5u (-27j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [MF0047] MF Mayonnaise 250ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock prédit: -0.2u (-14j restants) → prédit 1u mais non commandé |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [MF0061] MF Compote | 1 | Stock prédit: -0.9u (-37j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 1 | Stock prédit: -0.2u (-14j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.1u (9j restants) → prédit 1u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB007] CB Apple Nettle juice 1l | 1 | Stock prédit: -0.8u (-53j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Stock prédit: -0.6u (-58j restants) → prédit 1u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock prédit: -0.6u (-58j restants) → prédit 1u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB006] CB Blackcurrant Apple juice 1l | 1 | Stock prédit: -0.4u (-53j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.6u (-74j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.8u (-98j restants) → prédit 1u mais non commandé |
| [CB009] CB Cherry Apple juice 1l | 1 | Stock prédit: -0.8u (-98j restants) → prédit 1u mais non commandé |
| [RISH06] RISH kombucha BIO - tagette 750ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LB003] LB Festive (4,5%) 33CL | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LEA04] LEAMO ginger beer bio 750ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |


---

## False Negatives (8)

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
| [LB006] LB Brown (7,0%)  33CL | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock suffisant: 0.6u (20j restants > seuil 19j) |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock suffisant: 0.7u (25j restants > seuil 19j) |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Stock suffisant: 0.7u (24j restants > seuil 19j) |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock suffisant: 0.8u (44j restants > seuil 19j) |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [VID0009] Consigne casier | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [VID0010] Consigne casier | 6 | Jamais commandé avant dans les 270j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-14T09:36:56.400Z*
