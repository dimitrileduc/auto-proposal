# Rapport Backtest - Client Epicerie Uhoda Kennedy

## Contexte

- **Client** : Epicerie Uhoda Kennedy (ID: 23342)
- **Commande réelle** : S39409
- **Date commande** : 2025-10-08 07:16:30
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 11.9% | 42 produits prédits, 5 corrects |
| **Rappel** | 50.0% | 10 produits réels, 5 détectés |
| **F1-Score** | 19.2% | Score équilibré global |

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
| **MAE** | 0.20 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 10.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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

## True Positives (5)

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
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LB003] LB Festive (4,5%) 33CL | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (37)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: 1.8u (17j restants) → prédit 2u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: 0.3u (5j restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Stock prédit: 1.9u (19j restants) → prédit 2u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Stock prédit: -0.0u (0j restants) → prédit 2u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | Stock prédit: 1.1u (13j restants) → prédit 3u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: 0.2u (3j restants) → prédit 2u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock prédit: 0.6u (19j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: 0.7u (26j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.7u (26j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.7u (26j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: 0.7u (21j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Stock prédit: 0.7u (21j restants) → prédit 1u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Stock prédit: 0.3u (5j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Stock prédit: 1.0u (10j restants) → prédit 2u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: 0.7u (30j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: -0.2u (-6j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | Stock prédit: -2.0u (-56j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 2 | Stock prédit: -0.2u (-8j restants) → prédit 2u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | Stock prédit: -1.5u (-50j restants) → prédit 2u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Stock prédit: -2.1u (-43j restants) → prédit 2u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | Stock prédit: -1.8u (-39j restants) → prédit 2u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 3 | Stock prédit: -1.3u (-33j restants) → prédit 3u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Stock prédit: -1.6u (-52j restants) → prédit 1u mais non commandé |
| [CB010] CB Jus de Pomme cubis 3l | 2 | Stock prédit: 0.2u (5j restants) → prédit 2u mais non commandé |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Stock prédit: -2.1u (-67j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 3 | Stock prédit: -0.6u (-16j restants) → prédit 3u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Stock prédit: -1.0u (-49j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: -1.9u (-64j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | Stock prédit: -1.6u (-61j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | Stock prédit: -1.6u (-61j restants) → prédit 2u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Stock prédit: -2.5u (-62j restants) → prédit 2u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: -0.4u (-31j restants) → prédit 1u mais non commandé |


---

## False Negatives (5)

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
| [LB005] LB Amber (5,2%) 33CL | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [KLAK01] KLAK Maté 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Stock suffisant: 0.6u (57j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-18T10:44:06.815Z*
