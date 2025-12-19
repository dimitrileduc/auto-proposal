# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S40361
- **Date commande** : 2025-11-14 11:29:39
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 251
- **Tokens**: 528,541 input + 1,095,042 output = 1,623,583 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.8% | 119 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 1.7% | Score équilibré global |

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
| **MAE** | 6.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (1)

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
| [PF0088] FILOU VOL AU VENT 800 GR | 24 | 30 | 6.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 24u vs Médiane: 7u (Réel: 30u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 24u (confidence: low)
- 📊 **Baseline N-1**: 24u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 6u (20.0%)
- 📉 **Erreur Médiane**: 23u (76.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle médian de 6 jours, très erratique (CV≈70%) avec commandes rapprochées (1 jour)
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Outliers détectés**: 1u, 2u

**🧠 Raisonnement LLM:**
Cycle médian de 6 jours calculé sur intervalles [14,1,5,7] jours, CV≈70%. Prochaine commande prédite le 2025-11-18 (dans 5 jours). Valeurs 1u et 2u exclues comme outliers contextuels (tests/compléments). Baseline fixée à 24u (dernière valeur stable, méthode 'dernière valeur' appliquée car CV>60% sur valeurs retenues). Aucune saisonnalité via N-1. Tendance décroissante malgré forte volatilité.

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0088] FILOU VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 14:06:16: 1u
- 2025-10-29 14:04:03: 24u
- 2025-10-28 07:39:16: 2u
- 2025-10-23 13:34:44: 7u
- 2025-10-16 13:01:09: 50u

**📅 Commandes N-1 (même période année dernière):**
- 2024-02-29 15:58:25: 0u

**✅ Quantité LLM**: 24u (confidence: low)
**📊 Quantité Réelle**: 30u

</details>




---

## False Positives (118)

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
| [PF0094] FILOU MOUTARDE 700 GR | 3 | Stock prédit: 2.0u (11j restants) → prédit 3u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 3 | Stock prédit: 3.0u (13j restants) → prédit 3u mais non commandé |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 2 | Stock prédit: 3.0u (18j restants) → prédit 2u mais non commandé |
| [PF1705] LV TARTINADE BIO BASILIC 200ML | 525 | Stock prédit: 553.1u (26j restants) → prédit 525u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 3 | Stock prédit: -0.7u (-1j restants) → prédit 3u mais non commandé |
| [PF1797] LV MAYONNAI TOMATE 250ML WECK | 200 | Stock prédit: 34.5u (1j restants) → prédit 200u mais non commandé |
| [PF1783] TARTINAPERO BIO BASILIC 200ML | 434 | Stock prédit: 147.4u (4j restants) → prédit 434u mais non commandé |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | Stock prédit: 1.3u (16j restants) → prédit 2u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 20 | Stock prédit: 15.9u (24j restants) → prédit 20u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 5 | Stock prédit: 5.3u (15j restants) → prédit 5u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 5 | Stock prédit: 6.7u (28j restants) → prédit 5u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 10 | Stock prédit: 5.9u (19j restants) → prédit 10u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 5 | Stock prédit: 6.7u (28j restants) → prédit 5u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 15 | Stock prédit: 1.8u (2j restants) → prédit 15u mais non commandé |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 600 | Stock prédit: -153.7u (-14j restants) → prédit 600u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 10 | Stock prédit: 5.7u (18j restants) → prédit 10u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 10 | Stock prédit: 5.6u (17j restants) → prédit 10u mais non commandé |
| [PF1446] JF MAYONNA DU CHEF 470 ML WECK | 220 | Stock prédit: 57.9u (4j restants) → prédit 220u mais non commandé |
| [PF1526] JF SAUCE TARTARE 250ML WECK | 300 | Stock prédit: 235.3u (19j restants) → prédit 300u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 75 | Stock prédit: 1.3u (0j restants) → prédit 75u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Stock prédit: -17.8u (-3j restants) → prédit 56u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: -5.1u (-1j restants) → prédit 56u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | Stock prédit: 29.0u (4j restants) → prédit 56u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | Stock prédit: 9.9u (3j restants) → prédit 56u mais non commandé |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 9 | Stock prédit: 20.3u (24j restants) → prédit 9u mais non commandé |
| [PF0084] FILOU CARBONNADES 800 GR | 8 | Stock prédit: 17.8u (40j restants) → prédit 8u mais non commandé |
| [PF1474] JF MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: 193.5u (15j restants) → prédit 200u mais non commandé |
| [PF3400] JF MAYONNAISE OEUFS SQUEEZE 300ML | 116 | Stock prédit: 6.8u (1j restants) → prédit 116u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 8 | Stock prédit: 3.9u (13j restants) → prédit 8u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 10 | Stock prédit: 3.7u (12j restants) → prédit 10u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 17 | Stock prédit: 10.6u (15j restants) → prédit 17u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 15 | Stock prédit: 8.6u (15j restants) → prédit 15u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 40 | Stock prédit: 21.6u (15j restants) → prédit 40u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 25 | Stock prédit: 4.0u (4j restants) → prédit 25u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 360 | Stock prédit: 114.2u (10j restants) → prédit 360u mais non commandé |
| [PF3393] LV FR TARTINAPERO BIO AVOCAT BOCAL 190G | 434 | Stock prédit: -148.2u (-5j restants) → prédit 434u mais non commandé |
| [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK | 267 | Stock prédit: 24.4u (1j restants) → prédit 267u mais non commandé |
| [PF1684] LV TARTINADE BIO AUBERGINE 400 | 166 | Stock prédit: 63.3u (16j restants) → prédit 166u mais non commandé |
| [PF1686] LV TARTINADE BIO PAPRIKA 400G | 166 | Stock prédit: 66.2u (17j restants) → prédit 166u mais non commandé |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 2500 | Stock prédit: 853.7u (14j restants) → prédit 2500u mais non commandé |
| [PF1527] JF SAUCE BEARNAISE 250ML WECK | 400 | Stock prédit: 138.7u (14j restants) → prédit 400u mais non commandé |
| [PF1469] JF MAYONNAI TRUFFES 250ML WECK | 400 | Stock prédit: 82.4u (6j restants) → prédit 400u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 200 | Stock prédit: 44.6u (7j restants) → prédit 200u mais non commandé |
| [PF1475] JF MOUTARDE MIEL 250ML WECK | 111 | Stock prédit: 25.8u (4j restants) → prédit 111u mais non commandé |
| [PF1598] JF ANDALOUSE SQUEEZE 300ML | 150 | Stock prédit: -88.2u (-10j restants) → prédit 150u mais non commandé |
| [JOY05] JOY! Confiture bio à la cerise 370g | 200 | Stock prédit: 133.7u (54j restants) → prédit 200u mais non commandé |
| [PF1810] LV SAUCE BEARNAISE 250ML WECK | 400 | Stock prédit: -345.9u (-18j restants) → prédit 400u mais non commandé |
| [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK | 256 | Stock prédit: -537.1u (-19j restants) → prédit 256u mais non commandé |
| [PF1778] TARTINAPERO BIO TOMATE 200ML | 434 | Stock prédit: -158.3u (-7j restants) → prédit 434u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 60 | Stock prédit: -66.9u (-15j restants) → prédit 60u mais non commandé |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 60 | Stock prédit: 33.9u (38j restants) → prédit 60u mais non commandé |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 20 | Stock prédit: -28.0u (-17j restants) → prédit 20u mais non commandé |
| [PF1951] LV TARTINADE BIO BASILIC 400G | 74 | Stock prédit: 117.0u (81j restants) → prédit 74u mais non commandé |
| [PF1791] TARTI ALNATUR BIO OLIVE 200ML | 360 | Stock prédit: 73.6u (11j restants) → prédit 360u mais non commandé |
| [PF1790] TARTI ALNATUR BIO TOMATE 200ML | 300 | Stock prédit: 0.0u (0j restants) → prédit 300u mais non commandé |
| [PF3235] LV BE TARTINADE BIO TOMATE OLIVE CAPRE 190G | 350 | Stock prédit: 80.5u (10j restants) → prédit 350u mais non commandé |
| [PF3014] LV BE TARTINADE BIO TOMATE 380G | 162 | Stock prédit: 85.7u (16j restants) → prédit 162u mais non commandé |
| [PF1549] LV COCKTAIL BIO 200ML | 185 | Stock prédit: -45.1u (-6j restants) → prédit 185u mais non commandé |
| [PF1635] JF SAUCE AIOLI PESTO 250M WECK | 200 | Stock prédit: 34.1u (7j restants) → prédit 200u mais non commandé |
| [PF1793] LV MAYONNAI TRUFFES 250ML WECK | 200 | Stock prédit: -120.0u (-12j restants) → prédit 200u mais non commandé |
| [PF1800] LV MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: 152.7u (21j restants) → prédit 200u mais non commandé |
| [PF1804] LV SAUCE TARTARE 250ML WECK | 291 | Stock prédit: -100.0u (-11j restants) → prédit 291u mais non commandé |
| [PF1773] TARTINAPERO BIO MANGUE 200ML | 434 | Stock prédit: -76.6u (-5j restants) → prédit 434u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 180 | Stock prédit: -36.7u (-8j restants) → prédit 180u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 90 | Stock prédit: -18.4u (-8j restants) → prédit 90u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 120 | Stock prédit: 15.5u (5j restants) → prédit 120u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 120 | Stock prédit: 15.5u (5j restants) → prédit 120u mais non commandé |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 24 | Stock prédit: 20.6u (31j restants) → prédit 24u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 24 | Stock prédit: -7.5u (-10j restants) → prédit 24u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 30 | Stock prédit: -15.4u (-16j restants) → prédit 30u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 36 | Stock prédit: 0.8u (0j restants) → prédit 36u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 48 | Stock prédit: 8.3u (8j restants) → prédit 48u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 20 | Stock prédit: -0.4u (0j restants) → prédit 20u mais non commandé |
| [RIT02] RITCHIE Citron - verre 275ml | 20 | Stock prédit: -1.1u (-1j restants) → prédit 20u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Stock prédit: 0.5u (46j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: -1.3u (-27j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -1.3u (-27j restants) → prédit 1u mais non commandé |
| [MF0021] MF Sauce BBQ 250ml | 1 | Stock prédit: -1.3u (-27j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 740 | Stock prédit: -72.6u (-3j restants) → prédit 740u mais non commandé |
| [PF1828] JF SAUCE BEARNAISE 470ML WECK | 110 | Stock prédit: -38.1u (-12j restants) → prédit 110u mais non commandé |
| [PF1462] LV AIOLI BIO 200ML | 185 | Stock prédit: 27.2u (8j restants) → prédit 185u mais non commandé |
| [PF3329] LV SDP SAUCE BEARNAISE 125G | 2100 | Stock prédit: -76.4u (-1j restants) → prédit 2100u mais non commandé |
| [PF1556] LV TARTINADE BIO MANGUE 200ML | 2067 | Stock prédit: 829.6u (26j restants) → prédit 2067u mais non commandé |
| [PF1627] LV TARTINADE BIO POTIRON 200ML | 469 | Stock prédit: 359.0u (59j restants) → prédit 469u mais non commandé |
| [PF1788] TARTI ALNATUR BIO CAROTTE 200M | 300 | Stock prédit: 110.3u (33j restants) → prédit 300u mais non commandé |
| [PF1706] LV TARTINADE BIO BETTERAVE 200 | 472 | Stock prédit: 493.5u (50j restants) → prédit 472u mais non commandé |
| [PF1558] LV TARTINADE BIO CAROTTE 200ML | 1135 | Stock prédit: -853.1u (-31j restants) → prédit 1135u mais non commandé |
| [PF1704] LV TARTINADE BIO OLIVE 200 | 464 | Stock prédit: 222.9u (26j restants) → prédit 464u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 10 | Stock prédit: -17.6u (-37j restants) → prédit 10u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 10 | Stock prédit: 3.2u (29j restants) → prédit 10u mais non commandé |
| [PF1703] LV MAYONNAISE BIO 470ML WECK | 140 | Stock prédit: 44.6u (28j restants) → prédit 140u mais non commandé |
| [PF1460] LV MAYONNAISE BIO 200ML | 319 | Stock prédit: -189.5u (-21j restants) → prédit 319u mais non commandé |
| [PF1639] JF BURGER SQUEEZE 300ML | 150 | Stock prédit: -56.8u (-17j restants) → prédit 150u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 15 | Stock prédit: -3.1u (-8j restants) → prédit 15u mais non commandé |
| [PF3237] LV MAYONNAISE POIVRE 250ML WECK  | 200 | Stock prédit: -280.0u (-39j restants) → prédit 200u mais non commandé |
| [PF1775] TARTINAPERO BIO PAPRIKA 200ML | 350 | Stock prédit: -260.4u (-25j restants) → prédit 350u mais non commandé |
| [PF1779] TARTINAPERO BIO HOUMOUS 200ML | 339 | Stock prédit: 66.0u (12j restants) → prédit 339u mais non commandé |
| [PF1855] LV TARTINAPERO BIO TRIPACK | 2036 | Stock prédit: -783.0u (-26j restants) → prédit 2036u mais non commandé |
| [PF2978] TARTINAPERO BIO AIL OURS 200ML | 348 | Stock prédit: -318.9u (-28j restants) → prédit 348u mais non commandé |
| [PF1819] LV VINAIGRETTE CIBOU WECK 200M | 150 | Stock prédit: 97.0u (124j restants) → prédit 150u mais non commandé |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 400 | Stock prédit: -446.3u (-40j restants) → prédit 400u mais non commandé |
| [PF1967] JF SAUCE AIOLI 250ML WECK | 200 | Stock prédit: -73.3u (-18j restants) → prédit 200u mais non commandé |
| [PF3386] JF VINAIGRETTE MIEL MOUTARDE 240ML | 200 | Stock prédit: -447.6u (-47j restants) → prédit 200u mais non commandé |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 2015 | Stock prédit: 144.6u (5j restants) → prédit 2015u mais non commandé |
| [PF1685] LV TARTINADE BIO CAROTTE 400G | 130 | Stock prédit: 106.8u (36j restants) → prédit 130u mais non commandé |
| [PF2980] LV TARTINADE BIO AIL OURS200ML | 700 | Stock prédit: -600.5u (-30j restants) → prédit 700u mais non commandé |
| [PF3365] LV BE TARTINADE BIO BROCOLI 190G | 932 | Stock prédit: 236.0u (26j restants) → prédit 932u mais non commandé |
| [PF1630] LV TARTINADE BIO ANANAS 200ML | 350 | Stock prédit: 112.6u (26j restants) → prédit 350u mais non commandé |
| [PF3321] LV BE TARTINADE BIO KIDS 190G | 350 | Stock prédit: 114.4u (26j restants) → prédit 350u mais non commandé |
| [PI3072] PI TARTI POIS CHICHES BIO CONS 250G  | 2943 | Stock prédit: 143.6u (2j restants) → prédit 2943u mais non commandé |
| [PI3073] PI TARTI TOMATE BIO CONS 250 | 4397 | Stock prédit: 1377.0u (13j restants) → prédit 4397u mais non commandé |
| [PF1721] LV VIN CAESAR PET 250 BIO | 260 | Stock prédit: -52.5u (-13j restants) → prédit 260u mais non commandé |
| [PF1720] LV VIN MIEL MOU PET 250 BIO | 260 | Stock prédit: 33.9u (12j restants) → prédit 260u mais non commandé |
| [JOY02] JOY! Confiture bio à la fraise 370g | 200 | Stock prédit: -87.1u (-25j restants) → prédit 200u mais non commandé |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 200 | Stock prédit: -7.5u (-3j restants) → prédit 200u mais non commandé |
| [PI3200] PI TARTI AUBERGINE BIO CONS 250 | 776 | Stock prédit: 115.6u (10j restants) → prédit 776u mais non commandé |
| [PI3307] PI TARTINADE POMME BIO CONS 250G | 1129 | Stock prédit: 1085.7u (153j restants) → prédit 1129u mais non commandé |
| [PI3309] PI TARTINADE CAROTTE BIO ECOTERRA CONS 250G | 1126 | Stock prédit: 879.5u (133j restants) → prédit 1126u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T07:44:05.796Z*
