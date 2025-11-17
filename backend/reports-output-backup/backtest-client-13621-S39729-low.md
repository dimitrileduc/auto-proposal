# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S39729
- **Date commande** : 2025-10-14 14:05:41
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 141 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 7 produits réels, 0 détectés |
| **F1-Score** | 0.0% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (0)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>

*Aucun produit correctement prédit (rappel = 0%)*

---

## False Positives (141)

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
| [PF1951] LV TARTINADE BIO BASILIC 400G | 166 | Stock prédit: 0.0u (0j restants) → prédit 166u mais non commandé |
| [PF1791] TARTI ALNATUR BIO OLIVE 200ML | 300 | Stock prédit: 0.0u (0j restants) → prédit 300u mais non commandé |
| [PF1473] JF MAYONNAIS POIVRE 250ML WECK | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF1784] JF MOUTARDE DOUCE 250ML WECK | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF1601] JF SAMOURAI SQUEEZE 300ML | 130 | Stock prédit: 0.0u (0j restants) → prédit 130u mais non commandé |
| [RF001] REFIELD Compote de pommes 500g  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [RF002] REFIELD Passata tomates 500G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3400] JF MAYONNAISE OEUFS SQUEEZE 300ML | 112 | Stock prédit: 0.0u (0j restants) → prédit 112u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0021] MF Sauce BBQ 250ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 36 | Stock prédit: 0.0u (0j restants) → prédit 36u mais non commandé |
| [PF1462] LV AIOLI BIO 200ML | 185 | Stock prédit: 0.0u (0j restants) → prédit 185u mais non commandé |
| [UPI02] Jus de pomme-fraise bio d'UPIGNY 250ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [PF1703] LV MAYONNAISE BIO 470ML WECK | 140 | Stock prédit: 0.0u (0j restants) → prédit 140u mais non commandé |
| [PF1639] JF BURGER SQUEEZE 300ML | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PI3102] PI TARTI PAPRIKA CONS 250 | 1488 | Stock prédit: 0.0u (0j restants) → prédit 1488u mais non commandé |
| [PF1811] LV SAUCE AIOLI PESTO 250M WECK | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF1819] LV VINAIGRETTE CIBOU WECK 200M | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 60 | Stock prédit: 0.0u (0j restants) → prédit 60u mais non commandé |
| [PF3387] JF VINAIGRETTE CAESAR 240ML | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF3383] JF VINAIGRETTE CIBOULETTE 240ML  | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF3386] JF VINAIGRETTE MIEL MOUTARDE 240ML | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF3385] JF VINAIGRETTE TRUFFES 240ML | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF3384] JF VINAIGRETTE FINES HERBES 240ML  | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 100 | Stock prédit: -0.0u (0j restants) → prédit 100u mais non commandé |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 500 | Stock prédit: 0.0u (0j restants) → prédit 500u mais non commandé |
| [PF3321] LV BE TARTINADE BIO KIDS 190G | 466 | Stock prédit: 0.0u (0j restants) → prédit 466u mais non commandé |
| [PF3395] LV SDP SAUCE COCKTAIL 125G | 2100 | Stock prédit: 0.0u (0j restants) → prédit 2100u mais non commandé |
| [PF3392] LV FR TARTINAPERO BIO ASPERGE BOCAL 190G | 434 | Stock prédit: 0.0u (0j restants) → prédit 434u mais non commandé |
| [PF1721] LV VIN CAESAR PET 250 BIO | 260 | Stock prédit: 0.0u (0j restants) → prédit 260u mais non commandé |
| [PF1720] LV VIN MIEL MOU PET 250 BIO | 260 | Stock prédit: 0.0u (0j restants) → prédit 260u mais non commandé |
| [PI3308] PI TARTINADE AUBERGINE BIO ECOTERRA CONS 250G | 1152 | Stock prédit: 0.0u (0j restants) → prédit 1152u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [JOY06] JOY! Confiture bio à la rhubarbe 370g | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [JOY08] JOY! Confiture bio à la framboise 370g | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF3236] LV MAYONNAISE WASABI 250ML WECK | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PI3307] PI TARTINADE POMME BIO CONS 250G | 1777 | Stock prédit: 0.0u (0j restants) → prédit 1777u mais non commandé |
| [PI3309] PI TARTINADE CAROTTE BIO ECOTERRA CONS 250G | 1527 | Stock prédit: 0.0u (0j restants) → prédit 1527u mais non commandé |
| [PF3338] LV DE BROTAUFSTRICH BIO POTIRON 180G | 616 | Stock prédit: 0.0u (0j restants) → prédit 616u mais non commandé |
| [PF1484] JF VINAIGRETTE FH WECK 200ML | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF3227] JF SAUCE LIEGEOISE 380GX6 | 438 | Stock prédit: 0.0u (0j restants) → prédit 438u mais non commandé |
| [PF3226] JF SAUCE LAPIN 380GX6 | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF1534] JF SAUCE COCKTAIL 250ML WECK | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF1540] JF SAUCE SAMOURAI 250ML WECK | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF3371] JF MAYONNAISE MIEL MOUTARDE 250ML WECK | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF3372] JF SAUCE CHIPOTLE 250ML WECK | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 8 | Stock prédit: 0.0u (0j restants) → prédit 8u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 40 | Stock prédit: 0.0u (0j restants) → prédit 40u mais non commandé |
| [PI3103] PI TARTI DATTES CONS 250G BIO | 1596 | Stock prédit: 0.0u (0j restants) → prédit 1596u mais non commandé |
| [PI3202] PI TARTI OLIVE CONS 250 | 1560 | Stock prédit: 0.0u (0j restants) → prédit 1560u mais non commandé |
| [PI3203] PI TARTI MANGUE CONS 250 | 1596 | Stock prédit: 0.0u (0j restants) → prédit 1596u mais non commandé |
| [PF1770] LV MOUT ANCIENNE BIO 200 | 185 | Stock prédit: 0.0u (0j restants) → prédit 185u mais non commandé |
| [AQUA01] AQUAPAX - eau minérale naturelle 500ml | 111 | Stock prédit: 0.0u (0j restants) → prédit 111u mais non commandé |
| [PF1924] JF PICKLES 350 ML | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PF1688] JF BBQ SQUEEZE 300ML | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF3240] TVF TARTINADE BIO BETTERAVE RAIFORT 180G | 300 | Stock prédit: 0.0u (0j restants) → prédit 300u mais non commandé |
| [JOY05] JOY! Confiture bio à la cerise 370g | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [JOY01] JOY! Confiture bio à l' orange douce 370g | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [PI3267] PI MAYONNAISE BIO CONS 250ML | 640 | Stock prédit: 0.0u (0j restants) → prédit 640u mais non commandé |
| [PF1850] JF MAYO BARAKI SQUEEZE 300ML | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [LEA05] LEAMO limonade bio au citron 330ml | 27 | Stock prédit: 0.0u (0j restants) → prédit 27u mais non commandé |
| [LEA06] LEAMO maté 330ml | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [LEA07] LEAMO orangeade bio 330ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 30 | Stock prédit: 0.0u (0j restants) → prédit 30u mais non commandé |
| [PF0539] JF VOL AU VENT 2,5 KG | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1563] LV AIOLI PESTO BIO 200ML | 185 | Stock prédit: 0.0u (0j restants) → prédit 185u mais non commandé |
| [PF2003] TVF TARTINADE BIO PAPRIKA200ML | 354 | Stock prédit: 0.0u (0j restants) → prédit 354u mais non commandé |
| [PF2004] TVF TARTINADE BIO CAROTTE200ML | 300 | Stock prédit: 0.0u (0j restants) → prédit 300u mais non commandé |
| [fsv01] Cerneaux de noix nature bio vrac 1,8 kg | 15 | Stock prédit: 0.0u (0j restants) → prédit 15u mais non commandé |
| [PF1780] TARTINAPERO BIO OLIVE 200ML | 350 | Stock prédit: 0.0u (0j restants) → prédit 350u mais non commandé |
| [PF1781] TARTINAPERO BIO LENTILLE 200ML | 350 | Stock prédit: 0.0u (0j restants) → prédit 350u mais non commandé |
| [PF3322] LV FR TARTINAPERO BIO KIDS 190G | 250 | Stock prédit: 0.0u (0j restants) → prédit 250u mais non commandé |
| [SOWA01] SOWA citron menthe 250ml | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [SOWA02] SOWA bissap 250ml | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [SOWA03] SOWA ginger beer ardent 250ml | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [SOWA04] SOWA thé glacé pêche 250ml | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LD010] LD Organic Truffle Spread 135 g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LD015] LD Onion Spread 180g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LD003] LD Tartinade Poivron Chili | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 36 | Stock prédit: 0.0u (0j restants) → prédit 36u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 100 | Stock prédit: 0.0u (0j restants) → prédit 100u mais non commandé |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 100 | Stock prédit: 0.0u (0j restants) → prédit 100u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF1818] LV VINAIGRETTE MOUTA WECK 200M | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF3309] LV FR TARTINAPERO BIO BROCOLI 190G | 350 | Stock prédit: 0.0u (0j restants) → prédit 350u mais non commandé |
| [PF3308] LV FR TARTINAPERO BIO OIGNON 190G | 350 | Stock prédit: 0.0u (0j restants) → prédit 350u mais non commandé |
| [PF1550] LV MOUTARDE BIO 200ML | 185 | Stock prédit: 0.0u (0j restants) → prédit 185u mais non commandé |
| [PF1683] LV TARTINADE BIO MANGUE 400G | 166 | Stock prédit: 0.0u (0j restants) → prédit 166u mais non commandé |
| [PF2002] TVF TARTINADE BIO MANGUE 200ML | 300 | Stock prédit: 0.0u (0j restants) → prédit 300u mais non commandé |
| [PF2005] TVF TARTINADE BIO OLIVE 200ML | 150 | Stock prédit: 0.0u (0j restants) → prédit 150u mais non commandé |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1628] LV TARTINADE BIO HOUMOUS 200ML | 700 | Stock prédit: 0.0u (0j restants) → prédit 700u mais non commandé |
| [PF1686] LV TARTINADE BIO PAPRIKA 400G | 166 | Stock prédit: 0.0u (0j restants) → prédit 166u mais non commandé |
| [PF3234] LV BE TARTINADE BIO LENTILLE BALSAMIQUE 190G | 350 | Stock prédit: 0.0u (0j restants) → prédit 350u mais non commandé |
| [PF3228] LV VOL AU VENT BIO 400 GR | 660 | Stock prédit: 0.0u (0j restants) → prédit 660u mais non commandé |


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
| [PF1797] LV MAYONNAI TOMATE 250ML WECK | 200 | Jamais commandé avant dans les 180j précédents (pas d'historique) |
| [PF1810] LV SAUCE BEARNAISE 250ML WECK | 200 | Stock suffisant: -151.0u (-8j restants > seuil 19j) |
| [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK | 256 | Stock suffisant: 800.0u (80j restants > seuil 19j) |
| [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK | 400 | Stock suffisant: 164.7u (13j restants > seuil 19j) |
| [PF1778] TARTINAPERO BIO TOMATE 200ML | 434 | Stock suffisant: 389.6u (26j restants > seuil 19j) |
| [PF3393] LV FR TARTINAPERO BIO AVOCAT BOCAL 190G | 434 | Stock suffisant: 357.4u (13j restants > seuil 19j) |
| [PF1783] TARTINAPERO BIO BASILIC 200ML | 350 | Stock suffisant: 419.2u (85j restants > seuil 19j) |


---

*Rapport généré automatiquement le 2025-11-15T09:45:01.676Z*
