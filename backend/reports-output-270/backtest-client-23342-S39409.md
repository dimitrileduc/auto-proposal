# Rapport Backtest - Client Epicerie Uhoda Kennedy

## Contexte

- **Client** : Epicerie Uhoda Kennedy (ID: 23342)
- **Commande réelle** : S39409
- **Date commande** : 2025-10-08 07:16:30
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 4.3% | 46 produits prédits, 2 corrects |
| **Rappel** | 20.0% | 10 produits réels, 2 détectés |
| **F1-Score** | 7.1% | Score équilibré global |

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
| **MAE** | 0.50 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (2)

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
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (44)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: 1.9u (18j restants) → prédit 2u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: 0.4u (6j restants) → prédit 2u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | Stock prédit: 1.2u (14j restants) → prédit 3u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: 0.3u (4j restants) → prédit 2u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.3u (10j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: -0.2u (-6j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 2 | Stock prédit: 0.8u (18j restants) → prédit 2u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | Stock prédit: -1.4u (-48j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -1.7u (-38j restants) → prédit 1u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | Stock prédit: -1.5u (-50j restants) → prédit 2u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Stock prédit: 0.3u (16j restants) → prédit 2u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | Stock prédit: 0.1u (4j restants) → prédit 2u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB010] CB Jus de Pomme cubis 3l | 2 | Stock prédit: 0.2u (6j restants) → prédit 2u mais non commandé |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Stock prédit: 0.2u (5j restants) → prédit 2u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Stock prédit: -1.0u (-49j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: -1.8u (-63j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | Stock prédit: -2.7u (-71j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | Stock prédit: -2.7u (-71j restants) → prédit 2u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Stock prédit: -1.9u (-55j restants) → prédit 2u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: -0.4u (-30j restants) → prédit 1u mais non commandé |
| [LV189] LV Tartinade Houmous Type 380g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 2 | Stock prédit: -2.2u (-74j restants) → prédit 2u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: -0.6u (-39j restants) → prédit 2u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock prédit: -1.4u (-74j restants) → prédit 1u mais non commandé |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: -2.4u (-126j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -0.7u (-74j restants) → prédit 1u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [NOC01] NOCCIOLATA Pâte cacao-noisette bio 250g | 3 | Stock prédit: -2.7u (-94j restants) → prédit 3u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB006] CB Blackcurrant Apple juice 1l | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |


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
| [LB003] LB Festive (4,5%) 33CL | 1 | Stock suffisant: 0.3u (25j restants > seuil 19j) |
| [LB005] LB Amber (5,2%) 33CL | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Stock suffisant: 1.4u (23j restants > seuil 19j) |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock suffisant: 0.9u (27j restants > seuil 19j) |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock suffisant: 0.4u (25j restants > seuil 19j) |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock suffisant: 0.7u (26j restants > seuil 19j) |
| [KLAK01] KLAK Maté 330ml | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Stock suffisant: 0.7u (58j restants > seuil 19j) |


---

*Rapport généré automatiquement le 2025-11-14T09:36:29.571Z*
