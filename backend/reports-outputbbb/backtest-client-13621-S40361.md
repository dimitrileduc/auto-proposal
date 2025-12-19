# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S40361
- **Date commande** : 2025-11-14 11:29:39
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 250
- **Tokens**: 542,417 input + 584,823 output = 1,127,240 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.5% | 206 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 1.0% | Score équilibré global |

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

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 24u
- 📊 **Baseline calculée**: 16.8u
- 📊 **Médiane historique**: 7u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 6u (20.0%)
- 📉 **Erreur Médiane**: 23u (76.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 24u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle de commande hebdomadaire (7 jours en moyenne)
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-11-12
- **Prochaine prédite**: 2025-11-19 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 1u, 2u

**🧠 Raisonnement LLM:**
Le cycle de commande médian est de 7 jours. La dernière commande du 12/11 (1u) semble être un ajustement ponctuel et non une commande de réapprovisionnement de fond. Compte tenu de l'historique récent (50u puis 24u), et de l'intervalle de 14 jours depuis la dernière commande significative du 29/10, un risque de rupture imminent est identifié pour les 30 prochains jours. On recommande une quantité de 24u, alignée sur le volume de la dernière commande substantielle et cohérente avec une logique de stock B2B.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,220 tokens
- **Output**: 2,690 tokens
- **Total**: 4,910 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Data Points**

I'm now focusing on the last 30 days of data, specifically for product [PF0088]. The sales history shows some fluctuations, with a recent spike of 24 units on October 29th. I'm trying to identify potential drivers behind this bump. There are other recent orders, but nothing as substantial as the aforementioned spike.


**Forecasting the Next Order**

I've refined the intervals, grouping the 10/28 and 10/29 orders, recalculating the median order frequency to approximately 7 days. Considering this, and the last order date of November 12th, the next potential order is projected for around November 19th, still within the 30-day window. The initial risk assessment is positive, which is to say "Oui."


**Calculating Potential Order Size**

I'm now examining the quantities of the orders, noting considerable variance, including a recent, likely "topping up" order of only 1 unit. I've calculated a median order size of 7 units, and a mean of 16.8 units. The order history shows peaks of 50 and 24 units, suggesting a B2B pattern. Since N-1 sales were zero, no seasonal adjustment is needed. The trend is downward.


**Assessing Order Dynamics**

I'm now factoring in the 1u order from yesterday, and how that fits within the overall pattern. The client seems to be topping up, and given the short gap since the prior orders, the "standard" order is likely still coming. The trend is downward, but the upcoming date is still around November 19th. I'm settling on recommending 24 units.


**Evaluating the Latest Data**

I'm now integrating the 1u order from yesterday into the analysis, considering it a potential "top-up." With the 7-day interval and the downward trend in quantities, I'm leaning toward the belief that a full replenishment order is likely still coming. Considering this, and the short gap since the prior orders, I'm sticking with a 24-unit recommendation.


**Calculating Recommendation Rationale**

I'm now integrating the final, thorough rationale. I've concluded a 7-day median cycle. The 1u order on 11/12 seems like a top-up. The most recent, substantial order was 24u on 10/29. I anticipate a standard replenishment order within the next week. Therefore, I will recommend 24 units, and say it with confidence.


**Concluding Order Recommendations**

I've re-examined the order history, and am confident. Given a 7-day median cycle, and the 1u order as a likely top-up, I'm sticking with my recommendation of 24 units. This is based on the most recent, substantial order, and I'm quite confident in this estimate.




</details>

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

**✅ Quantité LLM**: 24u (confidence: medium)
**📊 Quantité Réelle**: 30u

</details>




---

## False Positives (205)

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
| [PF0094] FILOU MOUTARDE 700 GR | 4 | Stock prédit: 2.0u (11j restants) → prédit 4u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 4 | Stock prédit: 3.0u (13j restants) → prédit 4u mais non commandé |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 3 | Stock prédit: 3.0u (18j restants) → prédit 3u mais non commandé |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 48 | Stock prédit: 48.0u (21j restants) → prédit 48u mais non commandé |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 48 | Stock prédit: 48.0u (28j restants) → prédit 48u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 48 | Stock prédit: 48.0u (21j restants) → prédit 48u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 48 | Stock prédit: 48.0u (25j restants) → prédit 48u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 24 | Stock prédit: 1.0u (0j restants) → prédit 24u mais non commandé |
| [fsv01] Cerneaux de noix nature bio vrac 1,8 kg | 10 | Stock prédit: 10.0u (72j restants) → prédit 10u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 5 | Stock prédit: 5.0u (32j restants) → prédit 5u mais non commandé |
| [fsv04] Amande nature bio vrac 2,8 kg | 8 | Stock prédit: 8.0u (31j restants) → prédit 8u mais non commandé |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 5 | Stock prédit: 5.0u (49j restants) → prédit 5u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 10 | Stock prédit: 10.0u (38j restants) → prédit 10u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 10 | Stock prédit: 10.0u (41j restants) → prédit 10u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 5 | Stock prédit: 5.0u (31j restants) → prédit 5u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 10 | Stock prédit: 10.0u (65j restants) → prédit 10u mais non commandé |
| [fsv18] Mendiant bio vrac 2,8kg | 6 | Stock prédit: 6.0u (33j restants) → prédit 6u mais non commandé |
| [PF1705] LV TARTINADE BIO BASILIC 200ML | 650 | Stock prédit: 553.1u (26j restants) → prédit 650u mais non commandé |
| [PF3233] LV BE TARTINADE BIO TOSCANE 190G | 900 | Stock prédit: 713.0u (30j restants) → prédit 900u mais non commandé |
| [PF1806] LV SAUCE COCKTAIL 250ML WECK | 200 | Stock prédit: 105.9u (8j restants) → prédit 200u mais non commandé |
| [PF1780] TARTINAPERO BIO OLIVE 200ML | 350 | Stock prédit: 327.0u (113j restants) → prédit 350u mais non commandé |
| [PF1781] TARTINAPERO BIO LENTILLE 200ML | 350 | Stock prédit: 326.9u (113j restants) → prédit 350u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 14 | Stock prédit: -0.7u (-1j restants) → prédit 14u mais non commandé |
| [PF1797] LV MAYONNAI TOMATE 250ML WECK | 200 | Stock prédit: 34.5u (1j restants) → prédit 200u mais non commandé |
| [PF1782] TARTINAPERO BIO BETTERAVE 200M | 350 | Stock prédit: 260.4u (20j restants) → prédit 350u mais non commandé |
| [PF1783] TARTINAPERO BIO BASILIC 200ML | 434 | Stock prédit: 147.4u (4j restants) → prédit 434u mais non commandé |
| [PF3309] LV FR TARTINAPERO BIO BROCOLI 190G | 360 | Stock prédit: 341.6u (148j restants) → prédit 360u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 20 | Stock prédit: 13.3u (15j restants) → prédit 20u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 25 | Stock prédit: 17.5u (18j restants) → prédit 25u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 25 | Stock prédit: 17.5u (18j restants) → prédit 25u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 20 | Stock prédit: 10.8u (12j restants) → prédit 20u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 10 | Stock prédit: 6.7u (15j restants) → prédit 10u mais non commandé |
| [RISH06] RISH kombucha BIO - tagette 750ml | 8 | Stock prédit: 6.4u (33j restants) → prédit 8u mais non commandé |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | Stock prédit: 1.3u (16j restants) → prédit 2u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 25 | Stock prédit: 15.9u (24j restants) → prédit 25u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 10 | Stock prédit: 5.3u (15j restants) → prédit 10u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 10 | Stock prédit: 6.7u (28j restants) → prédit 10u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 10 | Stock prédit: 5.9u (19j restants) → prédit 10u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 10 | Stock prédit: 6.7u (28j restants) → prédit 10u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 10 | Stock prédit: 7.5u (42j restants) → prédit 10u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 15 | Stock prédit: 1.8u (2j restants) → prédit 15u mais non commandé |
| [PF3307] LV DE BROTAUFSTRICH BIO DATTE CHILI 180G | 720 | Stock prédit: 429.1u (20j restants) → prédit 720u mais non commandé |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 600 | Stock prédit: -153.7u (-14j restants) → prédit 600u mais non commandé |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 1800 | Stock prédit: 1640.9u (26j restants) → prédit 1800u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 10 | Stock prédit: 5.7u (18j restants) → prédit 10u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 10 | Stock prédit: 5.6u (17j restants) → prédit 10u mais non commandé |
| [PF1446] JF MAYONNA DU CHEF 470 ML WECK | 220 | Stock prédit: 57.9u (4j restants) → prédit 220u mais non commandé |
| [PF1526] JF SAUCE TARTARE 250ML WECK | 400 | Stock prédit: 235.3u (19j restants) → prédit 400u mais non commandé |
| [PF1601] JF SAMOURAI SQUEEZE 300ML | 130 | Stock prédit: 22.9u (2j restants) → prédit 130u mais non commandé |
| [PF1640] JF MITRAILLETTE SQUEEZE 300ML | 130 | Stock prédit: -4.8u (0j restants) → prédit 130u mais non commandé |
| [PF1687] JF CURRY KETCHUP SQUEEZE 300ML | 50 | Stock prédit: 17.0u (7j restants) → prédit 50u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 112 | Stock prédit: 1.3u (0j restants) → prédit 112u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Stock prédit: -17.8u (-3j restants) → prédit 56u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: -5.1u (-1j restants) → prédit 56u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | Stock prédit: 29.0u (4j restants) → prédit 56u mais non commandé |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Stock prédit: -21.3u (-3j restants) → prédit 64u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: 50.9u (11j restants) → prédit 56u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | Stock prédit: 9.9u (3j restants) → prédit 56u mais non commandé |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 16 | Stock prédit: 20.3u (24j restants) → prédit 16u mais non commandé |
| [PF0084] FILOU CARBONNADES 800 GR | 16 | Stock prédit: 17.8u (40j restants) → prédit 16u mais non commandé |
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 2 | Stock prédit: 1.8u (162j restants) → prédit 2u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 1 | Stock prédit: 0.7u (33j restants) → prédit 1u mais non commandé |
| [PF1471] JF MAYONNAIS WASABI 250ML WECK | 200 | Stock prédit: 96.8u (15j restants) → prédit 200u mais non commandé |
| [PF1474] JF MAYONNAISE OEUFS 250ML WECK | 300 | Stock prédit: 193.5u (15j restants) → prédit 300u mais non commandé |
| [PF3226] JF SAUCE LAPIN 380GX6 | 150 | Stock prédit: 112.7u (48j restants) → prédit 150u mais non commandé |
| [PF3400] JF MAYONNAISE OEUFS SQUEEZE 300ML | 120 | Stock prédit: 6.8u (1j restants) → prédit 120u mais non commandé |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 60 | Stock prédit: 24.7u (13j restants) → prédit 60u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 10 | Stock prédit: 3.9u (13j restants) → prédit 10u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 10 | Stock prédit: 3.7u (12j restants) → prédit 10u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 20 | Stock prédit: 10.6u (15j restants) → prédit 20u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 20 | Stock prédit: 8.6u (15j restants) → prédit 20u mais non commandé |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 64 | Stock prédit: 11.2u (4j restants) → prédit 64u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 15 | Stock prédit: 7.6u (21j restants) → prédit 15u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 50 | Stock prédit: 21.6u (15j restants) → prédit 50u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 30 | Stock prédit: 4.0u (4j restants) → prédit 30u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 360 | Stock prédit: 114.2u (10j restants) → prédit 360u mais non commandé |
| [PF3393] LV FR TARTINAPERO BIO AVOCAT BOCAL 190G | 434 | Stock prédit: -148.2u (-5j restants) → prédit 434u mais non commandé |
| [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK | 400 | Stock prédit: 24.4u (1j restants) → prédit 400u mais non commandé |
| [PF1684] LV TARTINADE BIO AUBERGINE 400 | 166 | Stock prédit: 63.3u (16j restants) → prédit 166u mais non commandé |
| [PF1686] LV TARTINADE BIO PAPRIKA 400G | 166 | Stock prédit: 66.2u (17j restants) → prédit 166u mais non commandé |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 2500 | Stock prédit: 853.7u (14j restants) → prédit 2500u mais non commandé |
| [PF3234] LV BE TARTINADE BIO LENTILLE BALSAMIQUE 190G | 350 | Stock prédit: 242.4u (60j restants) → prédit 350u mais non commandé |
| [PF1527] JF SAUCE BEARNAISE 250ML WECK | 400 | Stock prédit: 138.7u (14j restants) → prédit 400u mais non commandé |
| [PF1469] JF MAYONNAI TRUFFES 250ML WECK | 400 | Stock prédit: 82.4u (6j restants) → prédit 400u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 200 | Stock prédit: 44.6u (7j restants) → prédit 200u mais non commandé |
| [PF1475] JF MOUTARDE MIEL 250ML WECK | 200 | Stock prédit: 25.8u (4j restants) → prédit 200u mais non commandé |
| [PF1598] JF ANDALOUSE SQUEEZE 300ML | 150 | Stock prédit: -88.2u (-10j restants) → prédit 150u mais non commandé |
| [JOY05] JOY! Confiture bio à la cerise 370g | 200 | Stock prédit: 133.7u (54j restants) → prédit 200u mais non commandé |
| [BUD02] BUDDY bio functional & energy drink citorn & gingembre - 250ml | 20 | Stock prédit: 10.2u (28j restants) → prédit 20u mais non commandé |
| [BUD04] BUDDY bio functional & energy drink grenade hibiscus - 250ml | 40 | Stock prédit: 15.5u (17j restants) → prédit 40u mais non commandé |
| [BUD03] BUDDY bio functional & energy drink mangue passion - 250ml | 60 | Stock prédit: 30.5u (28j restants) → prédit 60u mais non commandé |
| [PF1810] LV SAUCE BEARNAISE 250ML WECK | 400 | Stock prédit: -345.9u (-18j restants) → prédit 400u mais non commandé |
| [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK | 920 | Stock prédit: -537.1u (-19j restants) → prédit 920u mais non commandé |
| [PF1778] TARTINAPERO BIO TOMATE 200ML | 434 | Stock prédit: -158.3u (-7j restants) → prédit 434u mais non commandé |
| [PF1534] JF SAUCE COCKTAIL 250ML WECK | 200 | Stock prédit: 116.6u (40j restants) → prédit 200u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 150 | Stock prédit: -66.9u (-15j restants) → prédit 150u mais non commandé |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 60 | Stock prédit: 33.9u (38j restants) → prédit 60u mais non commandé |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 60 | Stock prédit: -28.0u (-17j restants) → prédit 60u mais non commandé |
| [PF1951] LV TARTINADE BIO BASILIC 400G | 160 | Stock prédit: 117.0u (81j restants) → prédit 160u mais non commandé |
| [PF1791] TARTI ALNATUR BIO OLIVE 200ML | 300 | Stock prédit: 73.6u (11j restants) → prédit 300u mais non commandé |
| [PF1790] TARTI ALNATUR BIO TOMATE 200ML | 300 | Stock prédit: 0.0u (0j restants) → prédit 300u mais non commandé |
| [PF3235] LV BE TARTINADE BIO TOMATE OLIVE CAPRE 190G | 350 | Stock prédit: 80.5u (10j restants) → prédit 350u mais non commandé |
| [PF3014] LV BE TARTINADE BIO TOMATE 380G | 166 | Stock prédit: 85.7u (16j restants) → prédit 166u mais non commandé |
| [PF1473] JF MAYONNAIS POIVRE 250ML WECK | 200 | Stock prédit: 81.2u (23j restants) → prédit 200u mais non commandé |
| [PF1829] JF SAUCE TARTARE 470ML WECK | 110 | Stock prédit: 14.9u (5j restants) → prédit 110u mais non commandé |
| [PF1784] JF MOUTARDE DOUCE 250ML WECK | 200 | Stock prédit: 102.7u (35j restants) → prédit 200u mais non commandé |
| [PF1549] LV COCKTAIL BIO 200ML | 185 | Stock prédit: -45.1u (-6j restants) → prédit 185u mais non commandé |
| [PF1635] JF SAUCE AIOLI PESTO 250M WECK | 200 | Stock prédit: 34.1u (7j restants) → prédit 200u mais non commandé |
| [PF1793] LV MAYONNAI TRUFFES 250ML WECK | 200 | Stock prédit: -120.0u (-12j restants) → prédit 200u mais non commandé |
| [PF1800] LV MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: 152.7u (21j restants) → prédit 200u mais non commandé |
| [PF1804] LV SAUCE TARTARE 250ML WECK | 200 | Stock prédit: -100.0u (-11j restants) → prédit 200u mais non commandé |
| [PF1773] TARTINAPERO BIO MANGUE 200ML | 434 | Stock prédit: -76.6u (-5j restants) → prédit 434u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 120 | Stock prédit: -36.7u (-8j restants) → prédit 120u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 60 | Stock prédit: -18.4u (-8j restants) → prédit 60u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 120 | Stock prédit: 15.5u (5j restants) → prédit 120u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 120 | Stock prédit: 15.5u (5j restants) → prédit 120u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 4 | Stock prédit: 1.2u (15j restants) → prédit 4u mais non commandé |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 48 | Stock prédit: 20.6u (31j restants) → prédit 48u mais non commandé |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 24 | Stock prédit: -0.6u (0j restants) → prédit 24u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 24 | Stock prédit: -7.5u (-10j restants) → prédit 24u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 36 | Stock prédit: -15.4u (-16j restants) → prédit 36u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 48 | Stock prédit: 9.7u (10j restants) → prédit 48u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 36 | Stock prédit: 0.8u (0j restants) → prédit 36u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 48 | Stock prédit: 8.3u (8j restants) → prédit 48u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 20 | Stock prédit: -0.4u (0j restants) → prédit 20u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 30 | Stock prédit: -5.4u (-6j restants) → prédit 30u mais non commandé |
| [RIT02] RITCHIE Citron - verre 275ml | 30 | Stock prédit: -1.1u (-1j restants) → prédit 30u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: 0.5u (46j restants) → prédit 1u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Stock prédit: 0.5u (46j restants) → prédit 1u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Stock prédit: 0.5u (46j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (46j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 6 | Stock prédit: 0.5u (46j restants) → prédit 6u mais non commandé |
| [LV158] LV Moutarde 200 ml | 1 | Stock prédit: 0.5u (46j restants) → prédit 1u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Stock prédit: 0.5u (46j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 36 | Stock prédit: -20.3u (-17j restants) → prédit 36u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 90 | Stock prédit: 19.6u (13j restants) → prédit 90u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 72 | Stock prédit: 34.4u (43j restants) → prédit 72u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 850 | Stock prédit: -72.6u (-3j restants) → prédit 850u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 240 | Stock prédit: 52.2u (13j restants) → prédit 240u mais non commandé |
| [PF3254] JEFKE VOL AU VENT 400G | 192 | Stock prédit: 66.4u (25j restants) → prédit 192u mais non commandé |
| [PF1828] JF SAUCE BEARNAISE 470ML WECK | 110 | Stock prédit: -38.1u (-12j restants) → prédit 110u mais non commandé |
| [PF1462] LV AIOLI BIO 200ML | 185 | Stock prédit: 27.2u (8j restants) → prédit 185u mais non commandé |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 20 | Stock prédit: 4.8u (17j restants) → prédit 20u mais non commandé |
| [PF3329] LV SDP SAUCE BEARNAISE 125G | 2100 | Stock prédit: -76.4u (-1j restants) → prédit 2100u mais non commandé |
| [PF1776] TARTINAPERO BIO CAROTTE 200ML | 350 | Stock prédit: -307.2u (-26j restants) → prédit 350u mais non commandé |
| [PF3232] LV FR TARTINAPERO BIO TOMATE OLIVE CAPRE 190G | 350 | Stock prédit: 214.3u (90j restants) → prédit 350u mais non commandé |
| [PF1556] LV TARTINADE BIO MANGUE 200ML | 2100 | Stock prédit: 829.6u (26j restants) → prédit 2100u mais non commandé |
| [PF1627] LV TARTINADE BIO POTIRON 200ML | 700 | Stock prédit: 359.0u (59j restants) → prédit 700u mais non commandé |
| [PF1788] TARTI ALNATUR BIO CAROTTE 200M | 150 | Stock prédit: 110.3u (33j restants) → prédit 150u mais non commandé |
| [PF1706] LV TARTINADE BIO BETTERAVE 200 | 500 | Stock prédit: 493.5u (50j restants) → prédit 500u mais non commandé |
| [PF1558] LV TARTINADE BIO CAROTTE 200ML | 850 | Stock prédit: -853.1u (-31j restants) → prédit 850u mais non commandé |
| [PF1704] LV TARTINADE BIO OLIVE 200 | 700 | Stock prédit: 222.9u (26j restants) → prédit 700u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 30 | Stock prédit: 2.7u (5j restants) → prédit 30u mais non commandé |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 15 | Stock prédit: 6.5u (44j restants) → prédit 15u mais non commandé |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 10 | Stock prédit: 3.9u (36j restants) → prédit 10u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 20 | Stock prédit: 9.8u (55j restants) → prédit 20u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 10 | Stock prédit: 3.2u (29j restants) → prédit 10u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 5 | Stock prédit: -0.5u (-5j restants) → prédit 5u mais non commandé |
| [PF1703] LV MAYONNAISE BIO 470ML WECK | 140 | Stock prédit: 44.6u (28j restants) → prédit 140u mais non commandé |
| [PF1460] LV MAYONNAISE BIO 200ML | 370 | Stock prédit: -189.5u (-21j restants) → prédit 370u mais non commandé |
| [PF1639] JF BURGER SQUEEZE 300ML | 150 | Stock prédit: -56.8u (-17j restants) → prédit 150u mais non commandé |
| [PI3102] PI TARTI PAPRIKA BIO CONS 250 | 775 | Stock prédit: 1030.0u (139j restants) → prédit 775u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 90 | Stock prédit: 24.2u (23j restants) → prédit 90u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 270 | Stock prédit: 105.4u (40j restants) → prédit 270u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 180 | Stock prédit: 48.3u (23j restants) → prédit 180u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 90 | Stock prédit: -8.7u (-5j restants) → prédit 90u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 20 | Stock prédit: -3.1u (-8j restants) → prédit 20u mais non commandé |
| [PF3237] LV MAYONNAISE POIVRE 250ML WECK  | 200 | Stock prédit: -280.0u (-39j restants) → prédit 200u mais non commandé |
| [PF1775] TARTINAPERO BIO PAPRIKA 200ML | 434 | Stock prédit: -260.4u (-25j restants) → prédit 434u mais non commandé |
| [PF1779] TARTINAPERO BIO HOUMOUS 200ML | 350 | Stock prédit: 66.0u (12j restants) → prédit 350u mais non commandé |
| [PF1855] LV TARTINAPERO BIO TRIPACK | 2385 | Stock prédit: -783.0u (-26j restants) → prédit 2385u mais non commandé |
| [PF2978] TARTINAPERO BIO AIL OURS 200ML | 434 | Stock prédit: -318.9u (-28j restants) → prédit 434u mais non commandé |
| [PF1819] LV VINAIGRETTE CIBOU WECK 200M | 150 | Stock prédit: 97.0u (124j restants) → prédit 150u mais non commandé |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 300 | Stock prédit: -446.3u (-40j restants) → prédit 300u mais non commandé |
| [PF1967] JF SAUCE AIOLI 250ML WECK | 200 | Stock prédit: -73.3u (-18j restants) → prédit 200u mais non commandé |
| [PF3370] JF MAYONNAISE CITRON 250ML WECK | 200 | Stock prédit: 24.1u (9j restants) → prédit 200u mais non commandé |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 2000 | Stock prédit: 144.6u (5j restants) → prédit 2000u mais non commandé |
| [PF1685] LV TARTINADE BIO CAROTTE 400G | 249 | Stock prédit: 106.8u (36j restants) → prédit 249u mais non commandé |
| [PF1707] LV TARTINADE BIO LENTILLE 200 | 466 | Stock prédit: 178.9u (47j restants) → prédit 466u mais non commandé |
| [PF2980] LV TARTINADE BIO AIL OURS200ML | 700 | Stock prédit: -600.5u (-30j restants) → prédit 700u mais non commandé |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 500 | Stock prédit: 85.1u (15j restants) → prédit 500u mais non commandé |
| [PF3365] LV BE TARTINADE BIO BROCOLI 190G | 932 | Stock prédit: 236.0u (26j restants) → prédit 932u mais non commandé |
| [PF1630] LV TARTINADE BIO ANANAS 200ML | 450 | Stock prédit: 112.6u (26j restants) → prédit 450u mais non commandé |
| [PF3321] LV BE TARTINADE BIO KIDS 190G | 350 | Stock prédit: 114.4u (26j restants) → prédit 350u mais non commandé |
| [PF3366] LV BE TARTINADE BIO ASPERGE 190G | 12 | Stock prédit: -222.5u (-82j restants) → prédit 12u mais non commandé |
| [PI3072] PI TARTI POIS CHICHES BIO CONS 250G  | 3800 | Stock prédit: 143.6u (2j restants) → prédit 3800u mais non commandé |
| [PI3073] PI TARTI TOMATE BIO CONS 250 | 5400 | Stock prédit: 1377.0u (13j restants) → prédit 5400u mais non commandé |
| [PI3346] PI TARTINADE BETTERAVE BIO CONS 250G | 6000 | Stock prédit: -544.5u (-6j restants) → prédit 6000u mais non commandé |
| [PF1721] LV VIN CAESAR PET 250 BIO | 260 | Stock prédit: -52.5u (-13j restants) → prédit 260u mais non commandé |
| [PF1720] LV VIN MIEL MOU PET 250 BIO | 260 | Stock prédit: 33.9u (12j restants) → prédit 260u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 50 | Stock prédit: -15.1u (-18j restants) → prédit 50u mais non commandé |
| [PI3308] PI TARTINADE AUBERGINE BIO ECOTERRA CONS 250G | 1152 | Stock prédit: 678.1u (117j restants) → prédit 1152u mais non commandé |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 15 | Stock prédit: 3.1u (21j restants) → prédit 15u mais non commandé |
| [JOY02] JOY! Confiture bio à la fraise 370g | 200 | Stock prédit: -87.1u (-25j restants) → prédit 200u mais non commandé |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 200 | Stock prédit: -7.5u (-3j restants) → prédit 200u mais non commandé |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 200 | Stock prédit: -112.9u (-30j restants) → prédit 200u mais non commandé |
| [PF3238] LV SAUCE ANDALOUSE 250ML WECK | 200 | Stock prédit: 53.2u (30j restants) → prédit 200u mais non commandé |
| [PF3236] LV MAYONNAISE WASABI 250ML WECK | 200 | Stock prédit: 76.3u (52j restants) → prédit 200u mais non commandé |
| [PI3200] PI TARTI AUBERGINE BIO CONS 250 | 1152 | Stock prédit: 115.6u (10j restants) → prédit 1152u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 6 | Stock prédit: 0.8u (525j restants) → prédit 6u mais non commandé |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 6 | Stock prédit: 0.7u (214j restants) → prédit 6u mais non commandé |
| [PI3307] PI TARTINADE POMME BIO CONS 250G | 1129 | Stock prédit: 1085.7u (153j restants) → prédit 1129u mais non commandé |
| [PI3309] PI TARTINADE CAROTTE BIO ECOTERRA CONS 250G | 792 | Stock prédit: 879.5u (133j restants) → prédit 792u mais non commandé |
| [PF3331] LV SDP SAUCE POIVRE 125G | 12 | Stock prédit: -769.6u (-29j restants) → prédit 12u mais non commandé |
| [PF3338] LV DE BROTAUFSTRICH BIO POTIRON 180G | 560 | Stock prédit: 297.5u (109j restants) → prédit 560u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T09:04:18.481Z*
