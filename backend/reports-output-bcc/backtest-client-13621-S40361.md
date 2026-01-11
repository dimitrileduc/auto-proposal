# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S40361
- **Date commande** : 2025-11-14 11:29:39
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 285
- **Tokens**: 265,366 input + 47,336 output = 312,702 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.5% | 219 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 0.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 6.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0088] FILOU VOL AU VENT 800 GR | 24 | 30 | 6.0 | 20.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 24u vs Médiane: 8u (Réel: 30u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 24u
- **Baseline calculee**: 24u
- **Mediane historique**: 8u
- **Reel commande**: 30u
- **Erreur LLM**: 6u (20.0%)
- **Erreur Mediane**: 22u (73.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 24u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier (environ tous les 7 à 14 jours). La dernière commande date du 12 novembre (1u), mais elle fait suite à une commande importante le 29 octobre (24u). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est identifié car le stock tampon semble s'épuiser rapidement au vu des volumes d'octobre (pics à 50u et 32u). En appliquant la règle de la médiane sur les quantités significatives (excluant les micro-ajustements de 1u ou 2u qui sont des exceptions), la valeur de 24u est retenue comme volume de référence stable pour couvrir les besoins du prochain cycle sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,006 tokens
- **Output**: 185 tokens
- **Total**: 1,191 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-12 14:06:16: 1u
- 2025-10-29 14:04:03: 24u
- 2025-10-28 07:39:16: 2u
- 2025-10-23 13:34:44: 7u
- 2025-10-16 13:01:09: 50u
- 2025-10-16 07:37:11: 8u
- 2025-10-02 13:11:26: 32u
- 2025-09-24 11:33:13: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-29 15:58:25: 0u

**Quantite Mediane (fallback)**: 24u
**Quantite Reelle**: 30u

</details>




---

## False Positives (218)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0094] FILOU MOUTARDE 700 GR | 2 | Predicted 2u but not ordered |
| [PF0093] FILOU MOUTARDE 300GR | 2 | Predicted 2u but not ordered |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 3 | Predicted 3u but not ordered |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 48 | Predicted 48u but not ordered |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 24 | Predicted 24u but not ordered |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 48 | Predicted 48u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 24 | Predicted 24u but not ordered |
| [fsv01] Cerneaux de noix nature bio vrac 1,8 kg | 10 | Predicted 10u but not ordered |
| [PF1705] LV TARTINADE BIO BASILIC 200ML | 525 | Predicted 525u but not ordered |
| [PF1806] LV SAUCE COCKTAIL 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1811] LV SAUCE AIOLI PESTO 250M WECK | 200 | Predicted 200u but not ordered |
| [PF1781] TARTINAPERO BIO LENTILLE 200ML | 350 | Predicted 350u but not ordered |
| [PF0089] FILOU VOL AU VENT 400 GR | 3 | Predicted 3u but not ordered |
| [PF1797] LV MAYONNAI TOMATE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1782] TARTINAPERO BIO BETTERAVE 200M | 355 | Predicted 355u but not ordered |
| [PF1783] TARTINAPERO BIO BASILIC 200ML | 434 | Predicted 434u but not ordered |
| [PF3309] LV FR TARTINAPERO BIO BROCOLI 190G | 360 | Predicted 360u but not ordered |
| [RISH01] RISH kombucha BIO - original 330ml | 20 | Predicted 20u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 25 | Predicted 25u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 25 | Predicted 25u but not ordered |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 19 | Predicted 19u but not ordered |
| [RISH05] RISH kombucha BIO - rose 750ml | 10 | Predicted 10u but not ordered |
| [RISH06] RISH kombucha BIO - tagette 750ml | 8 | Predicted 8u but not ordered |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | Predicted 2u but not ordered |
| [RIT01] RITCHIE Orange - verre 275ml | 20 | Predicted 20u but not ordered |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 5 | Predicted 5u but not ordered |
| [RIT07] RITCHIE Orange - canette 330ml | 5 | Predicted 5u but not ordered |
| [RIT08] RITCHIE Citron - canette 330ml | 10 | Predicted 10u but not ordered |
| [RIT09] RITCHIE Cola - canette 330ml | 5 | Predicted 5u but not ordered |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 5 | Predicted 5u but not ordered |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 15 | Predicted 15u but not ordered |
| [PF3307] LV DE BROTAUFSTRICH BIO DATTE CHILI 180G | 720 | Predicted 720u but not ordered |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 600 | Predicted 600u but not ordered |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 2135 | Predicted 2135u but not ordered |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 10 | Predicted 10u but not ordered |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 10 | Predicted 10u but not ordered |
| [PF1446] JF MAYONNA DU CHEF 470 ML WECK | 220 | Predicted 220u but not ordered |
| [PF1526] JF SAUCE TARTARE 250ML WECK | 400 | Predicted 400u but not ordered |
| [PF1601] JF SAMOURAI SQUEEZE 300ML | 130 | Predicted 130u but not ordered |
| [PF1640] JF MITRAILLETTE SQUEEZE 300ML | 130 | Predicted 130u but not ordered |
| [PF1687] JF CURRY KETCHUP SQUEEZE 300ML | 50 | Predicted 50u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 56 | Predicted 56u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Predicted 56u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Predicted 56u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | Predicted 56u but not ordered |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Predicted 64u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Predicted 56u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | Predicted 56u but not ordered |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 8 | Predicted 8u but not ordered |
| [PF0084] FILOU CARBONNADES 800 GR | 8 | Predicted 8u but not ordered |
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 2 | Predicted 2u but not ordered |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [PF1471] JF MAYONNAIS WASABI 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1474] JF MAYONNAISE OEUFS 250ML WECK | 400 | Predicted 400u but not ordered |
| [PF3226] JF SAUCE LAPIN 380GX6 | 150 | Predicted 150u but not ordered |
| [PF3400] JF MAYONNAISE OEUFS SQUEEZE 300ML | 116 | Predicted 116u but not ordered |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 60 | Predicted 60u but not ordered |
| [WIG02] WIGNAC cidre rosé bio 330ml | 8 | Predicted 8u but not ordered |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 10 | Predicted 10u but not ordered |
| [WIG03] WIGNAC cidre naturel bio 750ml | 17 | Predicted 17u but not ordered |
| [WIG04] WIGNAC cidre rosé bio 750ml | 15 | Predicted 15u but not ordered |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 64 | Predicted 64u but not ordered |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 15 | Predicted 15u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 45 | Predicted 45u but not ordered |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 25 | Predicted 25u but not ordered |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 360 | Predicted 360u but not ordered |
| [PF3393] LV FR TARTINAPERO BIO AVOCAT BOCAL 190G | 434 | Predicted 434u but not ordered |
| [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK | 400 | Predicted 400u but not ordered |
| [PF1684] LV TARTINADE BIO AUBERGINE 400 | 110 | Predicted 110u but not ordered |
| [PF1686] LV TARTINADE BIO PAPRIKA 400G | 166 | Predicted 166u but not ordered |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 2500 | Predicted 2500u but not ordered |
| [PF3234] LV BE TARTINADE BIO LENTILLE BALSAMIQUE 190G | 350 | Predicted 350u but not ordered |
| [PF1527] JF SAUCE BEARNAISE 250ML WECK | 400 | Predicted 400u but not ordered |
| [PF1469] JF MAYONNAI TRUFFES 250ML WECK | 400 | Predicted 400u but not ordered |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1475] JF MOUTARDE MIEL 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1598] JF ANDALOUSE SQUEEZE 300ML | 150 | Predicted 150u but not ordered |
| [JOY05] JOY! Confiture bio à la cerise 370g | 200 | Predicted 200u but not ordered |
| [BUD02] BUDDY bio functional & energy drink citorn & gingembre - 250ml | 20 | Predicted 20u but not ordered |
| [BUD04] BUDDY bio functional & energy drink grenade hibiscus - 250ml | 40 | Predicted 40u but not ordered |
| [BUD03] BUDDY bio functional & energy drink mangue passion - 250ml | 60 | Predicted 60u but not ordered |
| [PF1810] LV SAUCE BEARNAISE 250ML WECK | 400 | Predicted 400u but not ordered |
| [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK | 256 | Predicted 256u but not ordered |
| [PF1778] TARTINAPERO BIO TOMATE 200ML | 434 | Predicted 434u but not ordered |
| [PF1534] JF SAUCE COCKTAIL 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 60 | Predicted 60u but not ordered |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 1 | Predicted 1u but not ordered |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 20 | Predicted 20u but not ordered |
| [PF1951] LV TARTINADE BIO BASILIC 400G | 166 | Predicted 166u but not ordered |
| [PF1791] TARTI ALNATUR BIO OLIVE 200ML | 300 | Predicted 300u but not ordered |
| [PF1790] TARTI ALNATUR BIO TOMATE 200ML | 300 | Predicted 300u but not ordered |
| [PF3235] LV BE TARTINADE BIO TOMATE OLIVE CAPRE 190G | 350 | Predicted 350u but not ordered |
| [PF3014] LV BE TARTINADE BIO TOMATE 380G | 166 | Predicted 166u but not ordered |
| [PF1473] JF MAYONNAIS POIVRE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1829] JF SAUCE TARTARE 470ML WECK | 110 | Predicted 110u but not ordered |
| [PF1784] JF MOUTARDE DOUCE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1549] LV COCKTAIL BIO 200ML | 185 | Predicted 185u but not ordered |
| [PF1635] JF SAUCE AIOLI PESTO 250M WECK | 200 | Predicted 200u but not ordered |
| [PF1793] LV MAYONNAI TRUFFES 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1800] LV MAYONNAISE OEUFS 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1804] LV SAUCE TARTARE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1773] TARTINAPERO BIO MANGUE 200ML | 434 | Predicted 434u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 120 | Predicted 120u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 60 | Predicted 60u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 120 | Predicted 120u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 120 | Predicted 120u but not ordered |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 4 | Predicted 4u but not ordered |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 24 | Predicted 24u but not ordered |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 24 | Predicted 24u but not ordered |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 24 | Predicted 24u but not ordered |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 24 | Predicted 24u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 48 | Predicted 48u but not ordered |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 48 | Predicted 48u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 48 | Predicted 48u but not ordered |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 15 | Predicted 15u but not ordered |
| [RIT05] RITCHIE Cola - verre 275ml | 20 | Predicted 20u but not ordered |
| [RIT02] RITCHIE Citron - verre 275ml | 20 | Predicted 20u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV158] LV Moutarde 200 ml | 1 | Predicted 1u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Predicted 1u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 36 | Predicted 36u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 90 | Predicted 90u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 72 | Predicted 72u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 630 | Predicted 630u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 240 | Predicted 240u but not ordered |
| [PF3254] JEFKE VOL AU VENT 400G | 192 | Predicted 192u but not ordered |
| [PF1828] JF SAUCE BEARNAISE 470ML WECK | 110 | Predicted 110u but not ordered |
| [PF1462] LV AIOLI BIO 200ML | 185 | Predicted 185u but not ordered |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 10 | Predicted 10u but not ordered |
| [PF3329] LV SDP SAUCE BEARNAISE 125G | 2100 | Predicted 2100u but not ordered |
| [PF1776] TARTINAPERO BIO CAROTTE 200ML | 350 | Predicted 350u but not ordered |
| [PF3232] LV FR TARTINAPERO BIO TOMATE OLIVE CAPRE 190G | 350 | Predicted 350u but not ordered |
| [PF1556] LV TARTINADE BIO MANGUE 200ML | 2050 | Predicted 2050u but not ordered |
| [PF1627] LV TARTINADE BIO POTIRON 200ML | 700 | Predicted 700u but not ordered |
| [PF1788] TARTI ALNATUR BIO CAROTTE 200M | 300 | Predicted 300u but not ordered |
| [PF1706] LV TARTINADE BIO BETTERAVE 200 | 330 | Predicted 330u but not ordered |
| [PF1558] LV TARTINADE BIO CAROTTE 200ML | 700 | Predicted 700u but not ordered |
| [PF1704] LV TARTINADE BIO OLIVE 200 | 700 | Predicted 700u but not ordered |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 30 | Predicted 30u but not ordered |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 15 | Predicted 15u but not ordered |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 10 | Predicted 10u but not ordered |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 20 | Predicted 20u but not ordered |
| [fsv03] Noisette nature bio vrac 2,8kg  | 10 | Predicted 10u but not ordered |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 3 | Predicted 3u but not ordered |
| [PF1703] LV MAYONNAISE BIO 470ML WECK | 140 | Predicted 140u but not ordered |
| [PF1460] LV MAYONNAISE BIO 200ML | 370 | Predicted 370u but not ordered |
| [PF1639] JF BURGER SQUEEZE 300ML | 150 | Predicted 150u but not ordered |
| [PI3102] PI TARTI PAPRIKA BIO CONS 250 | 780 | Predicted 780u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 90 | Predicted 90u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 270 | Predicted 270u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 180 | Predicted 180u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 90 | Predicted 90u but not ordered |
| [WIG01] WIGNAC cidre naturel bio 330ml | 10 | Predicted 10u but not ordered |
| [PF3237] LV MAYONNAISE POIVRE 250ML WECK  | 200 | Predicted 200u but not ordered |
| [PF1775] TARTINAPERO BIO PAPRIKA 200ML | 434 | Predicted 434u but not ordered |
| [PF1779] TARTINAPERO BIO HOUMOUS 200ML | 339 | Predicted 339u but not ordered |
| [PF1855] LV TARTINAPERO BIO TRIPACK | 1243 | Predicted 1243u but not ordered |
| [PF2978] TARTINAPERO BIO AIL OURS 200ML | 434 | Predicted 434u but not ordered |
| [PF1819] LV VINAIGRETTE CIBOU WECK 200M | 150 | Predicted 150u but not ordered |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 300 | Predicted 300u but not ordered |
| [PF1967] JF SAUCE AIOLI 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF3370] JF MAYONNAISE CITRON 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 2000 | Predicted 2000u but not ordered |
| [PF1685] LV TARTINADE BIO CAROTTE 400G | 166 | Predicted 166u but not ordered |
| [PF1707] LV TARTINADE BIO LENTILLE 200 | 466 | Predicted 466u but not ordered |
| [PF2980] LV TARTINADE BIO AIL OURS200ML | 700 | Predicted 700u but not ordered |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 400 | Predicted 400u but not ordered |
| [PF3365] LV BE TARTINADE BIO BROCOLI 190G | 932 | Predicted 932u but not ordered |
| [PF1630] LV TARTINADE BIO ANANAS 200ML | 350 | Predicted 350u but not ordered |
| [PF3321] LV BE TARTINADE BIO KIDS 190G | 350 | Predicted 350u but not ordered |
| [PF3366] LV BE TARTINADE BIO ASPERGE 190G | 1 | Predicted 1u but not ordered |
| [PI3072] PI TARTI POIS CHICHES BIO CONS 250G  | 3120 | Predicted 3120u but not ordered |
| [PI3073] PI TARTI TOMATE BIO CONS 250 | 5400 | Predicted 5400u but not ordered |
| [PI3346] PI TARTINADE BETTERAVE BIO CONS 250G | 5700 | Predicted 5700u but not ordered |
| [PF1721] LV VIN CAESAR PET 250 BIO | 260 | Predicted 260u but not ordered |
| [PF1720] LV VIN MIEL MOU PET 250 BIO | 260 | Predicted 260u but not ordered |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 50 | Predicted 50u but not ordered |
| [PI3308] PI TARTINADE AUBERGINE BIO ECOTERRA CONS 250G | 1152 | Predicted 1152u but not ordered |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 15 | Predicted 15u but not ordered |
| [JOY02] JOY! Confiture bio à la fraise 370g | 200 | Predicted 200u but not ordered |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 200 | Predicted 200u but not ordered |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 200 | Predicted 200u but not ordered |
| [PF3238] LV SAUCE ANDALOUSE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF3236] LV MAYONNAISE WASABI 250ML WECK | 200 | Predicted 200u but not ordered |
| [PI3200] PI TARTI AUBERGINE BIO CONS 250 | 1152 | Predicted 1152u but not ordered |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 1 | Predicted 1u but not ordered |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 1 | Predicted 1u but not ordered |
| [PI3307] PI TARTINADE POMME BIO CONS 250G | 1777 | Predicted 1777u but not ordered |
| [PI3309] PI TARTINADE CAROTTE BIO ECOTERRA CONS 250G | 1527 | Predicted 1527u but not ordered |
| [PF3331] LV SDP SAUCE POIVRE 125G | 2100 | Predicted 2100u but not ordered |
| [PF3330] LV SDP SAUCE TARTARE 125G | 2100 | Predicted 2100u but not ordered |
| [PF3338] LV DE BROTAUFSTRICH BIO POTIRON 180G | 616 | Predicted 616u but not ordered |
| [PF1484] JF VINAIGRETTE FH WECK 200ML | 150 | Predicted 150u but not ordered |
| [PF3227] JF SAUCE LIEGEOISE 380GX6 | 438 | Predicted 438u but not ordered |
| [PF1540] JF SAUCE SAMOURAI 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF3371] JF MAYONNAISE MIEL MOUTARDE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF3372] JF SAUCE CHIPOTLE 250ML WECK | 200 | Predicted 200u but not ordered |
| [RISH07] RISH kombucha BIO - PetNat Fig 750ml  | 4 | Predicted 4u but not ordered |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 4 | Predicted 4u but not ordered |
| [KOKO02] KOKO Kombucha citron gingembre 330ml | 60 | Predicted 60u but not ordered |
| [KOKO03] KOKO Kombucha framboise hibiscus 330ml | 80 | Predicted 80u but not ordered |
| [PI3103] PI TARTI DATTES BIO CONS 250G BIO | 1560 | Predicted 1560u but not ordered |
| [PI3202] PI TARTI OLIVE BIO CONS 250 | 1560 | Predicted 1560u but not ordered |
| [PI3203] PI TARTI MANGUE BIO CONS 250 | 780 | Predicted 780u but not ordered |
| [PF1461] LV TARTARE BIO 200ML | 185 | Predicted 185u but not ordered |
| [PF1770] LV MOUT ANCIENNE BIO 200 | 100 | Predicted 100u but not ordered |
| [LEA09] LEAMO cola bio 330ml | 10 | Predicted 10u but not ordered |
| [PF1924] JF PICKLES 250ML | 150 | Predicted 150u but not ordered |
| [PF1688] JF BBQ SQUEEZE 300ML | 124 | Predicted 124u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Predicted 1u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Predicted 1u but not ordered |
| [PF3240] TVF TARTINADE BIO BETTERAVE RAIFORT 180G | 150 | Predicted 150u but not ordered |
| [PI3267] PI MAYONNAISE BIO CONS 250ML | 346 | Predicted 346u but not ordered |
| [PF1850] JF MAYO BARAKI SQUEEZE 300ML | 145 | Predicted 145u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:41.612Z*
