# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S38709
- **Date commande** : 2025-08-26 07:26:18
- **Date cutoff système** : 2025-08-25 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 49.2% | 61 produits prédits, 30 corrects |
| **Rappel** | 100.0% | 30 produits réels, 30 détectés |
| **F1-Score** | 65.9% | Score équilibré global |

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
| **MAE** | 0.30 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 10.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 25 | Égalité parfaite |
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

## True Positives (30)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV135] LV Tartinade Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV136] LV Tartinade Betterave 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 6 | 6 | 0.0 | 0.0% | 🎯 exact |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 6 | 3 | 3.0 | 100.0% | ✅ partial |


---

## False Positives (31)

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
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.5u (16j restants) → prédit 3u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | Stock prédit: -0.2u (-2j restants) → prédit 2u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 2 | Stock prédit: 1.5u (18j restants) → prédit 2u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Stock prédit: 0.5u (6j restants) → prédit 2u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: -2.4u (-32j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: -0.6u (-17j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | Stock prédit: -1.4u (-14j restants) → prédit 2u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Stock prédit: -0.7u (-8j restants) → prédit 2u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -1.0u (-28j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -1.0u (-28j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Stock prédit: -1.8u (-34j restants) → prédit 2u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | Stock prédit: -1.8u (-27j restants) → prédit 3u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 3 | Stock prédit: -1.4u (-24j restants) → prédit 3u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 3 | Stock prédit: -1.8u (-27j restants) → prédit 3u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 3 | Stock prédit: -1.8u (-27j restants) → prédit 3u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 3 | Stock prédit: -1.4u (-24j restants) → prédit 3u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 3 | Stock prédit: -1.8u (-27j restants) → prédit 3u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 3 | Stock prédit: -1.8u (-27j restants) → prédit 3u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 3 | Stock prédit: -1.2u (-26j restants) → prédit 3u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 3 | Stock prédit: -4.1u (-79j restants) → prédit 3u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-14T09:36:13.402Z*
