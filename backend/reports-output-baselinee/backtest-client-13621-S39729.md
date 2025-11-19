# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S39729
- **Date commande** : 2025-10-14 14:05:41
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 3.7% | 107 produits prédits, 4 corrects |
| **Rappel** | 66.7% | 6 produits réels, 4 détectés |
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
| **MAE** | 154.25 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (4)

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
| [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK | 200 | 400 | 200.0 | 50.0% | ✅ partial |
| [PF1778] TARTINAPERO BIO TOMATE 200ML | 434 | 434 | 0.0 | 0.0% | 🎯 exact |
| [PF3393] LV FR TARTINAPERO BIO AVOCAT BOCAL 190G | 651 | 434 | 217.0 | 50.0% | ✅ partial |
| [PF1810] LV SAUCE BEARNAISE 250ML WECK | 400 | 200 | 200.0 | 100.0% | ✅ partial |


---

## False Positives (103)

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
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 60 | Stock prédit: 60.0u (21j restants) → prédit 60u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 60 | Stock prédit: 60.0u (21j restants) → prédit 60u mais non commandé |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 60 | Stock prédit: 20.0u (15j restants) → prédit 60u mais non commandé |
| [PF1549] LV COCKTAIL BIO 200ML | 185 | Stock prédit: 155.7u (21j restants) → prédit 185u mais non commandé |
| [PF1793] LV MAYONNAI TRUFFES 250ML WECK | 200 | Stock prédit: 167.0u (20j restants) → prédit 200u mais non commandé |
| [PF1804] LV SAUCE TARTARE 250ML WECK | 300 | Stock prédit: 166.5u (19j restants) → prédit 300u mais non commandé |
| [PF1773] TARTINAPERO BIO MANGUE 200ML | 434 | Stock prédit: 366.3u (21j restants) → prédit 434u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 56 | Stock prédit: 63.6u (6j restants) → prédit 56u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Stock prédit: 22.8u (3j restants) → prédit 56u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: 33.8u (7j restants) → prédit 56u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | Stock prédit: 22.8u (3j restants) → prédit 56u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 3 | Stock prédit: -0.2u (-1j restants) → prédit 3u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 240 | Stock prédit: 91.5u (22j restants) → prédit 240u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 10 | Stock prédit: 3.7u (20j restants) → prédit 10u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 49 | Stock prédit: 22.6u (10j restants) → prédit 49u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 37 | Stock prédit: 4.8u (3j restants) → prédit 37u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 37 | Stock prédit: 4.8u (3j restants) → prédit 37u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 15 | Stock prédit: 4.7u (4j restants) → prédit 15u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 20 | Stock prédit: 9.5u (6j restants) → prédit 20u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 8 | Stock prédit: -3.2u (-5j restants) → prédit 8u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 5 | Stock prédit: 3.4u (29j restants) → prédit 5u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 5 | Stock prédit: 2.5u (14j restants) → prédit 5u mais non commandé |
| [RIT02] RITCHIE Citron - verre 275ml | 20 | Stock prédit: 19.4u (25j restants) → prédit 20u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 90 | Stock prédit: 13.4u (10j restants) → prédit 90u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 740 | Stock prédit: 413.7u (17j restants) → prédit 740u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 24 | Stock prédit: 12.0u (26j restants) → prédit 24u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 30 | Stock prédit: 9.9u (17j restants) → prédit 30u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 26 | Stock prédit: 11.3u (23j restants) → prédit 26u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 2 | Stock prédit: 1.1u (25j restants) → prédit 2u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 2 | Stock prédit: -1.3u (-7j restants) → prédit 2u mais non commandé |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 4 | Stock prédit: 1.0u (9j restants) → prédit 4u mais non commandé |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 1 | Stock prédit: 0.2u (6j restants) → prédit 1u mais non commandé |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 8 | Stock prédit: -15.0u (-17j restants) → prédit 8u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: -88.4u (-11j restants) → prédit 56u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | Stock prédit: 7.9u (3j restants) → prédit 56u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 20 | Stock prédit: 8.2u (18j restants) → prédit 20u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 5 | Stock prédit: 2.1u (18j restants) → prédit 5u mais non commandé |
| [PF3329] LV SDP SAUCE BEARNAISE 125G | 2100 | Stock prédit: 682.5u (13j restants) → prédit 2100u mais non commandé |
| [PF1776] TARTINAPERO BIO CAROTTE 200ML | 392 | Stock prédit: -564.1u (-16j restants) → prédit 392u mais non commandé |
| [PF1474] JF MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: -826.0u (-21j restants) → prédit 200u mais non commandé |
| [PF1705] LV TARTINADE BIO BASILIC 200ML | 496 | Stock prédit: 16.1u (0j restants) → prédit 496u mais non commandé |
| [PF1558] LV TARTINADE BIO CAROTTE 200ML | 1049 | Stock prédit: -645.3u (-12j restants) → prédit 1049u mais non commandé |
| [PF1460] LV MAYONNAISE BIO 200ML | 370 | Stock prédit: -192.4u (-10j restants) → prédit 370u mais non commandé |
| [PF1527] JF SAUCE BEARNAISE 250ML WECK | 200 | Stock prédit: 10.0u (1j restants) → prédit 200u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 8 | Stock prédit: -3.6u (-9j restants) → prédit 8u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 7 | Stock prédit: -5.9u (-16j restants) → prédit 7u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 15 | Stock prédit: -5.5u (-7j restants) → prédit 15u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 16 | Stock prédit: -12.2u (-15j restants) → prédit 16u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 13 | Stock prédit: -12.1u (-18j restants) → prédit 13u mais non commandé |
| [PF0084] FILOU CARBONNADES 800 GR | 5 | Stock prédit: -3.5u (-10j restants) → prédit 5u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 40 | Stock prédit: -0.1u (0j restants) → prédit 40u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 25 | Stock prédit: 14.9u (22j restants) → prédit 25u mais non commandé |
| [PF3237] LV MAYONNAISE POIVRE 250ML WECK  | 300 | Stock prédit: -437.1u (-26j restants) → prédit 300u mais non commandé |
| [PF1775] TARTINAPERO BIO PAPRIKA 200ML | 434 | Stock prédit: -1.2u (0j restants) → prédit 434u mais non commandé |
| [PF1779] TARTINAPERO BIO HOUMOUS 200ML | 350 | Stock prédit: 165.2u (23j restants) → prédit 350u mais non commandé |
| [PF1855] LV TARTINAPERO BIO TRIPACK | 768 | Stock prédit: -350.9u (-8j restants) → prédit 768u mais non commandé |
| [PF2978] TARTINAPERO BIO AIL OURS 200ML | 392 | Stock prédit: -209.2u (-12j restants) → prédit 392u mais non commandé |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 1050 | Stock prédit: 517.3u (15j restants) → prédit 1050u mais non commandé |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 450 | Stock prédit: -860.4u (-28j restants) → prédit 450u mais non commandé |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 450 | Stock prédit: -860.4u (-28j restants) → prédit 450u mais non commandé |
| [PF3370] JF MAYONNAISE CITRON 250ML WECK | 200 | Stock prédit: 75.5u (23j restants) → prédit 200u mais non commandé |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 1750 | Stock prédit: 326.5u (7j restants) → prédit 1750u mais non commandé |
| [PF1685] LV TARTINADE BIO CAROTTE 400G | 166 | Stock prédit: 107.4u (22j restants) → prédit 166u mais non commandé |
| [PF2980] LV TARTINADE BIO AIL OURS200ML | 816 | Stock prédit: -6354.9u (-40j restants) → prédit 816u mais non commandé |
| [PF3307] LV DE BROTAUFSTRICH BIO DATTE CHILI 180G | 740 | Stock prédit: 232.1u (16j restants) → prédit 740u mais non commandé |
| [PF3366] LV BE TARTINADE BIO ASPERGE 190G | 350 | Stock prédit: -196.5u (-52j restants) → prédit 350u mais non commandé |
| [PI3072] PI TARTI POIS CHICHES CONS 250G BIO | 4260 | Stock prédit: 1833.2u (26j restants) → prédit 4260u mais non commandé |
| [PI3073] PI TARTI TOMATE CONS 250 | 7500 | Stock prédit: 3320.3u (27j restants) → prédit 7500u mais non commandé |
| [PI3346] PI TARTINADE BETTERAVE CONS 250G | 5700 | Stock prédit: 1227.5u (13j restants) → prédit 5700u mais non commandé |
| [PF1721] LV VIN CAESAR PET 250 BIO | 260 | Stock prédit: 49.4u (12j restants) → prédit 260u mais non commandé |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 1650 | Stock prédit: 489.5u (12j restants) → prédit 1650u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 75 | Stock prédit: 15.4u (23j restants) → prédit 75u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 13 | Stock prédit: 2.7u (11j restants) → prédit 13u mais non commandé |
| [JOY02] JOY! Confiture bio à la fraise 370g | 202 | Stock prédit: -19.9u (-4j restants) → prédit 202u mais non commandé |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 199 | Stock prédit: 66.7u (27j restants) → prédit 199u mais non commandé |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 200 | Stock prédit: -67.9u (-13j restants) → prédit 200u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 5 | Stock prédit: -3.2u (-21j restants) → prédit 5u mais non commandé |
| [PI3200] PI TARTI AUBERGINE CONS 250 | 1356 | Stock prédit: -363.5u (-14j restants) → prédit 1356u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 2 | Stock prédit: -2.5u (-48j restants) → prédit 2u mais non commandé |
| [BUD02] BUDDY bio functional & energy drink citorn & gingembre - 250ml | 60 | Stock prédit: -103.2u (-67j restants) → prédit 60u mais non commandé |
| [BUD03] BUDDY bio functional & energy drink mangue passion - 250ml | 60 | Stock prédit: -63.2u (-41j restants) → prédit 60u mais non commandé |
| [BUD04] BUDDY bio functional & energy drink grenade hibiscus - 250ml | 60 | Stock prédit: -63.2u (-41j restants) → prédit 60u mais non commandé |
| [PF3331] LV SDP SAUCE POIVRE 125G | 1050 | Stock prédit: -1527.3u (-33j restants) → prédit 1050u mais non commandé |
| [PF3330] LV SDP SAUCE TARTARE 125G | 1050 | Stock prédit: -1527.3u (-33j restants) → prédit 1050u mais non commandé |
| [PF1484] JF VINAIGRETTE FH WECK 200ML | 150 | Stock prédit: -10.9u (-6j restants) → prédit 150u mais non commandé |
| [PF1534] JF SAUCE COCKTAIL 250ML WECK | 200 | Stock prédit: -0.4u (0j restants) → prédit 200u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 200 | Stock prédit: -244.9u (-52j restants) → prédit 200u mais non commandé |
| [PF1540] JF SAUCE SAMOURAI 250ML WECK | 200 | Stock prédit: 12.0u (6j restants) → prédit 200u mais non commandé |
| [PF3371] JF MAYONNAISE MIEL MOUTARDE 250ML WECK | 200 | Stock prédit: 27.9u (15j restants) → prédit 200u mais non commandé |
| [PF3372] JF SAUCE CHIPOTLE 250ML WECK | 200 | Stock prédit: 27.9u (15j restants) → prédit 200u mais non commandé |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 64 | Stock prédit: -591.3u (-87j restants) → prédit 64u mais non commandé |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Stock prédit: -146.6u (-67j restants) → prédit 64u mais non commandé |
| [RISH06] RISH kombucha BIO - tagette 750ml | 11 | Stock prédit: -38.8u (-77j restants) → prédit 11u mais non commandé |
| [RISH07] RISH kombucha BIO - PetNat Fig 750ml  | 5 | Stock prédit: -17.2u (-75j restants) → prédit 5u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 12 | Stock prédit: -12.7u (-60j restants) → prédit 12u mais non commandé |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 5 | Stock prédit: -4.6u (-52j restants) → prédit 5u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 8 | Stock prédit: -16.3u (-74j restants) → prédit 8u mais non commandé |
| [KOKO02] KOKO Kombucha citron gingembre 330ml | 68 | Stock prédit: -55.1u (-46j restants) → prédit 68u mais non commandé |
| [KOKO03] KOKO Kombucha framboise hibiscus 330ml | 80 | Stock prédit: -55.4u (-40j restants) → prédit 80u mais non commandé |
| [PI3203] PI TARTI MANGUE CONS 250 | 1560 | Stock prédit: -82.2u (-5j restants) → prédit 1560u mais non commandé |
| [PF1461] LV TARTARE BIO 200ML | 350 | Stock prédit: -253.3u (-46j restants) → prédit 350u mais non commandé |
| [PF1640] JF MITRAILLETTE SQUEEZE 300ML | 130 | Stock prédit: -95.4u (-48j restants) → prédit 130u mais non commandé |
| [LEA09] LEAMO cola bio 330ml | 8 | Stock prédit: -24.8u (-84j restants) → prédit 8u mais non commandé |


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
| [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK | 256 | Stock suffisant: 868.6u (219j restants > seuil 30j) |
| [PF1783] TARTINAPERO BIO BASILIC 200ML | 350 | Stock suffisant: 425.1u (190j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-18T18:54:08.009Z*
