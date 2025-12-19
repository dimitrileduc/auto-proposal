# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S40361
- **Date commande** : 2025-11-14 11:29:39
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 252
- **Tokens**: 528,891 input + 902,182 output = 1,431,073 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.8% | 133 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 1.5% | Score équilibré global |

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
| **MAE** | 29.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 96.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 96.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -96.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0088] FILOU VOL AU VENT 800 GR | 1 | 30 | 29.0 | 96.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 1u vs Médiane: 7u (Réel: 30u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 7u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 29u (96.7%)
- 📉 **Erreur Médiane**: 23u (76.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle saccadé avec intervalles variant de 1 à 14 jours, médiane à 6 jours
- **Cycle médian (jours)**: 6
- **Dernière commande**: 2025-11-12
- **Prochaine prédite**: 2025-11-18 (dans 5j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: Commandes majoritairement le mercredi ou jeudi, conforme au jour actuel (jeudi)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Détection d'un risque de rupture à court terme (prochaine commande estimée au 2025-11-18, soit dans 5 jours). L'historique des quantités est extrêmement erratique (CV > 120%) avec un pic à 50u suivi d'une baisse marquée. En application de la méthodologie pour les flux erratiques (CV > 60%), la dernière valeur enregistrée (1u le 2025-11-12) est retenue comme base pour la prochaine commande unique. L'absence de données significatives en N-1 ne permet pas d'ajustement saisonnier.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,148 tokens
- **Output**: 2,619 tokens
- **Total**: 4,767 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking product sales data**

I'm currently focused on the sales data for product [PF0088]. Observing the last 30 days, I see some recent sales. On the 12th, there was 1 unit sold, and on the 29th of October, 24 units. A small bump of 2 units occurred on the 28th of October. I'll continue to track the movement over the coming weeks.


**Predicting future sales dates**

Following the sales data for [PF0088], I've calculated the intervals between sales occurrences. Analyzing the recent history, the average interval between sales is roughly 6.75 days, with a median of 6 days. The coefficient of variation is high, indicating significant variability. Based on the last sale, I predict the next one might occur around November 18th.


**Assessing Sales Intervals**

I'm deep in the analysis, examining the intervals between sales for product [PF0088]. The intervals are calculated as 7, 5, 1 and 14 days, revealing significant variability, with a high coefficient of variation (CV) of around 80%. This suggests less predictability. Consequently, the next sale is predicted on November 18th, though the model's confidence is low. I've also checked for outliers.


**Evaluating Data Variability**

I've further analyzed the sales data for [PF0088]. The coefficient of variation for sales quantities is a staggering 123%, confirming the erratic nature of sales. Considering this, and the high CV of the intervals, I've re-evaluated my predictions. Using the last non-outlier, or last sale, as a basis for the next one seems safer given the volatile conditions.


**Calculating and Refining Predictions**

I'm now fully immersed in the data. With a high coefficient of variation (CV) for both intervals and quantities, sales for [PF0088] are clearly erratic. This confirms my earlier assessment. Considering the recent sales pattern and the unpredictable nature, I've decided to refine the predictions using the last non-outlier value, which is 1 unit.


**Calculating Recommended Quantity**

I've carefully assessed the product [PF0088]'s sales data, noting the intervals and quantities. The high coefficient of variation confirms the erratic nature. Despite predicting the next sale for November 18th, I've decided to recommend a quantity of 1 unit, based on the last sale and the guidelines.




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

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 30u

</details>




---

## False Positives (132)

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
| [PF0094] FILOU MOUTARDE 700 GR | 2 | Stock prédit: 2.0u (11j restants) → prédit 2u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 3 | Stock prédit: 3.0u (13j restants) → prédit 3u mais non commandé |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 2 | Stock prédit: 3.0u (18j restants) → prédit 2u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 5 | Stock prédit: 5.0u (32j restants) → prédit 5u mais non commandé |
| [PF1705] LV TARTINADE BIO BASILIC 200ML | 720 | Stock prédit: 553.1u (26j restants) → prédit 720u mais non commandé |
| [PF1806] LV SAUCE COCKTAIL 250ML WECK | 200 | Stock prédit: 105.9u (8j restants) → prédit 200u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 3 | Stock prédit: -0.7u (-1j restants) → prédit 3u mais non commandé |
| [PF1797] LV MAYONNAI TOMATE 250ML WECK | 200 | Stock prédit: 34.5u (1j restants) → prédit 200u mais non commandé |
| [PF3391] LV VINAIGRETTE CAESAR 240ML | 150 | Stock prédit: 92.9u (13j restants) → prédit 150u mais non commandé |
| [PF1782] TARTINAPERO BIO BETTERAVE 200M | 350 | Stock prédit: 260.4u (20j restants) → prédit 350u mais non commandé |
| [PF1783] TARTINAPERO BIO BASILIC 200ML | 434 | Stock prédit: 147.4u (4j restants) → prédit 434u mais non commandé |
| [RISH06] RISH kombucha BIO - tagette 750ml | 8 | Stock prédit: 6.4u (33j restants) → prédit 8u mais non commandé |
| [RISH08] Rish Kombucha Lavender BIO - hibiscus 330ml | 25 | Stock prédit: 15.5u (13j restants) → prédit 25u mais non commandé |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | Stock prédit: 1.3u (16j restants) → prédit 2u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 20 | Stock prédit: 15.9u (24j restants) → prédit 20u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 5 | Stock prédit: 5.3u (15j restants) → prédit 5u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 7 | Stock prédit: 6.7u (28j restants) → prédit 7u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 10 | Stock prédit: 5.9u (19j restants) → prédit 10u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 10 | Stock prédit: 6.7u (28j restants) → prédit 10u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 15 | Stock prédit: 1.8u (2j restants) → prédit 15u mais non commandé |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 560 | Stock prédit: -153.7u (-14j restants) → prédit 560u mais non commandé |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 1819 | Stock prédit: 1640.9u (26j restants) → prédit 1819u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 10 | Stock prédit: 5.7u (18j restants) → prédit 10u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 10 | Stock prédit: 5.6u (17j restants) → prédit 10u mais non commandé |
| [PF1446] JF MAYONNA DU CHEF 470 ML WECK | 220 | Stock prédit: 57.9u (4j restants) → prédit 220u mais non commandé |
| [PF1526] JF SAUCE TARTARE 250ML WECK | 300 | Stock prédit: 235.3u (19j restants) → prédit 300u mais non commandé |
| [PF1601] JF SAMOURAI SQUEEZE 300ML | 130 | Stock prédit: 22.9u (2j restants) → prédit 130u mais non commandé |
| [PF1640] JF MITRAILLETTE SQUEEZE 300ML | 130 | Stock prédit: -4.8u (0j restants) → prédit 130u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 75 | Stock prédit: 1.3u (0j restants) → prédit 75u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Stock prédit: -17.8u (-3j restants) → prédit 56u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: -5.1u (-1j restants) → prédit 56u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | Stock prédit: 29.0u (4j restants) → prédit 56u mais non commandé |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Stock prédit: -21.3u (-3j restants) → prédit 64u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: 50.9u (11j restants) → prédit 56u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | Stock prédit: 9.9u (3j restants) → prédit 56u mais non commandé |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 8 | Stock prédit: 20.3u (24j restants) → prédit 8u mais non commandé |
| [PF0084] FILOU CARBONNADES 800 GR | 24 | Stock prédit: 17.8u (40j restants) → prédit 24u mais non commandé |
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 2 | Stock prédit: 1.8u (162j restants) → prédit 2u mais non commandé |
| [PF1471] JF MAYONNAIS WASABI 250ML WECK | 200 | Stock prédit: 96.8u (15j restants) → prédit 200u mais non commandé |
| [PF1474] JF MAYONNAISE OEUFS 250ML WECK | 300 | Stock prédit: 193.5u (15j restants) → prédit 300u mais non commandé |
| [PF3226] JF SAUCE LAPIN 380GX6 | 150 | Stock prédit: 112.7u (48j restants) → prédit 150u mais non commandé |
| [PF3400] JF MAYONNAISE OEUFS SQUEEZE 300ML | 116 | Stock prédit: 6.8u (1j restants) → prédit 116u mais non commandé |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 58 | Stock prédit: 24.7u (13j restants) → prédit 58u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 8 | Stock prédit: 3.9u (13j restants) → prédit 8u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 10 | Stock prédit: 3.7u (12j restants) → prédit 10u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 17 | Stock prédit: 10.6u (15j restants) → prédit 17u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 15 | Stock prédit: 8.6u (15j restants) → prédit 15u mais non commandé |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 64 | Stock prédit: 11.2u (4j restants) → prédit 64u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 50 | Stock prédit: 21.6u (15j restants) → prédit 50u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 25 | Stock prédit: 4.0u (4j restants) → prédit 25u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 360 | Stock prédit: 114.2u (10j restants) → prédit 360u mais non commandé |
| [PF3393] LV FR TARTINAPERO BIO AVOCAT BOCAL 190G | 434 | Stock prédit: -148.2u (-5j restants) → prédit 434u mais non commandé |
| [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK | 400 | Stock prédit: 24.4u (1j restants) → prédit 400u mais non commandé |
| [PF1684] LV TARTINADE BIO AUBERGINE 400 | 166 | Stock prédit: 63.3u (16j restants) → prédit 166u mais non commandé |
| [PF1686] LV TARTINADE BIO PAPRIKA 400G | 165 | Stock prédit: 66.2u (17j restants) → prédit 165u mais non commandé |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 2500 | Stock prédit: 853.7u (14j restants) → prédit 2500u mais non commandé |
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
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 60 | Stock prédit: -25.7u (-9j restants) → prédit 60u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 60 | Stock prédit: -66.9u (-15j restants) → prédit 60u mais non commandé |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 60 | Stock prédit: 33.9u (38j restants) → prédit 60u mais non commandé |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 20 | Stock prédit: -28.0u (-17j restants) → prédit 20u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 50 | Stock prédit: -21.4u (-9j restants) → prédit 50u mais non commandé |
| [PF1951] LV TARTINADE BIO BASILIC 400G | 166 | Stock prédit: 117.0u (81j restants) → prédit 166u mais non commandé |
| [PF1791] TARTI ALNATUR BIO OLIVE 200ML | 300 | Stock prédit: 73.6u (11j restants) → prédit 300u mais non commandé |
| [PF1790] TARTI ALNATUR BIO TOMATE 200ML | 300 | Stock prédit: 0.0u (0j restants) → prédit 300u mais non commandé |
| [PF3235] LV BE TARTINADE BIO TOMATE OLIVE CAPRE 190G | 350 | Stock prédit: 80.5u (10j restants) → prédit 350u mais non commandé |
| [PF3014] LV BE TARTINADE BIO TOMATE 380G | 162 | Stock prédit: 85.7u (16j restants) → prédit 162u mais non commandé |
| [PF1549] LV COCKTAIL BIO 200ML | 185 | Stock prédit: -45.1u (-6j restants) → prédit 185u mais non commandé |
| [PF1635] JF SAUCE AIOLI PESTO 250M WECK | 200 | Stock prédit: 34.1u (7j restants) → prédit 200u mais non commandé |
| [PF1793] LV MAYONNAI TRUFFES 250ML WECK | 400 | Stock prédit: -120.0u (-12j restants) → prédit 400u mais non commandé |
| [PF1800] LV MAYONNAISE OEUFS 250ML WECK | 262 | Stock prédit: 152.7u (21j restants) → prédit 262u mais non commandé |
| [PF1804] LV SAUCE TARTARE 250ML WECK | 273 | Stock prédit: -100.0u (-11j restants) → prédit 273u mais non commandé |
| [PF1773] TARTINAPERO BIO MANGUE 200ML | 434 | Stock prédit: -76.6u (-5j restants) → prédit 434u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 180 | Stock prédit: -36.7u (-8j restants) → prédit 180u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 90 | Stock prédit: -18.4u (-8j restants) → prédit 90u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 120 | Stock prédit: 15.5u (5j restants) → prédit 120u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 120 | Stock prédit: 15.5u (5j restants) → prédit 120u mais non commandé |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 24 | Stock prédit: -0.6u (0j restants) → prédit 24u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 24 | Stock prédit: -7.5u (-10j restants) → prédit 24u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 30 | Stock prédit: -15.4u (-16j restants) → prédit 30u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 48 | Stock prédit: 9.7u (10j restants) → prédit 48u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 48 | Stock prédit: 0.8u (0j restants) → prédit 48u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 48 | Stock prédit: 8.3u (8j restants) → prédit 48u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 20 | Stock prédit: -0.4u (0j restants) → prédit 20u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 23 | Stock prédit: -5.4u (-6j restants) → prédit 23u mais non commandé |
| [RIT02] RITCHIE Citron - verre 275ml | 40 | Stock prédit: -1.1u (-1j restants) → prédit 40u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 740 | Stock prédit: -72.6u (-3j restants) → prédit 740u mais non commandé |
| [PF1828] JF SAUCE BEARNAISE 470ML WECK | 110 | Stock prédit: -38.1u (-12j restants) → prédit 110u mais non commandé |
| [PF1462] LV AIOLI BIO 200ML | 185 | Stock prédit: 27.2u (8j restants) → prédit 185u mais non commandé |
| [PF1776] TARTINAPERO BIO CAROTTE 200ML | 350 | Stock prédit: -307.2u (-26j restants) → prédit 350u mais non commandé |
| [PF1556] LV TARTINADE BIO MANGUE 200ML | 2084 | Stock prédit: 829.6u (26j restants) → prédit 2084u mais non commandé |
| [PF1627] LV TARTINADE BIO POTIRON 200ML | 700 | Stock prédit: 359.0u (59j restants) → prédit 700u mais non commandé |
| [PF1788] TARTI ALNATUR BIO CAROTTE 200M | 300 | Stock prédit: 110.3u (33j restants) → prédit 300u mais non commandé |
| [PF1706] LV TARTINADE BIO BETTERAVE 200 | 524 | Stock prédit: 493.5u (50j restants) → prédit 524u mais non commandé |
| [PF1558] LV TARTINADE BIO CAROTTE 200ML | 951 | Stock prédit: -853.1u (-31j restants) → prédit 951u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 30 | Stock prédit: 2.7u (5j restants) → prédit 30u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 10 | Stock prédit: -17.6u (-37j restants) → prédit 10u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 20 | Stock prédit: 9.8u (55j restants) → prédit 20u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 5 | Stock prédit: -0.5u (-5j restants) → prédit 5u mais non commandé |
| [PF1703] LV MAYONNAISE BIO 470ML WECK | 140 | Stock prédit: 44.6u (28j restants) → prédit 140u mais non commandé |
| [PF1639] JF BURGER SQUEEZE 300ML | 150 | Stock prédit: -56.8u (-17j restants) → prédit 150u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 15 | Stock prédit: -3.1u (-8j restants) → prédit 15u mais non commandé |
| [PF3237] LV MAYONNAISE POIVRE 250ML WECK  | 233 | Stock prédit: -280.0u (-39j restants) → prédit 233u mais non commandé |
| [PF1775] TARTINAPERO BIO PAPRIKA 200ML | 434 | Stock prédit: -260.4u (-25j restants) → prédit 434u mais non commandé |
| [PF1779] TARTINAPERO BIO HOUMOUS 200ML | 339 | Stock prédit: 66.0u (12j restants) → prédit 339u mais non commandé |
| [PF1855] LV TARTINAPERO BIO TRIPACK | 1243 | Stock prédit: -783.0u (-26j restants) → prédit 1243u mais non commandé |
| [PF2978] TARTINAPERO BIO AIL OURS 200ML | 434 | Stock prédit: -318.9u (-28j restants) → prédit 434u mais non commandé |
| [PF1819] LV VINAIGRETTE CIBOU WECK 200M | 150 | Stock prédit: 97.0u (124j restants) → prédit 150u mais non commandé |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 300 | Stock prédit: -446.3u (-40j restants) → prédit 300u mais non commandé |
| [PF1967] JF SAUCE AIOLI 250ML WECK | 200 | Stock prédit: -73.3u (-18j restants) → prédit 200u mais non commandé |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 1750 | Stock prédit: 144.6u (5j restants) → prédit 1750u mais non commandé |
| [PF2980] LV TARTINADE BIO AIL OURS200ML | 700 | Stock prédit: -600.5u (-30j restants) → prédit 700u mais non commandé |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 458 | Stock prédit: 85.1u (15j restants) → prédit 458u mais non commandé |
| [PF3321] LV BE TARTINADE BIO KIDS 190G | 350 | Stock prédit: 114.4u (26j restants) → prédit 350u mais non commandé |
| [PF3395] LV SDP SAUCE COCKTAIL 125G | 2100 | Stock prédit: -6100.0u (-61j restants) → prédit 2100u mais non commandé |
| [PI3072] PI TARTI POIS CHICHES BIO CONS 250G  | 3341 | Stock prédit: 143.6u (2j restants) → prédit 3341u mais non commandé |
| [PI3073] PI TARTI TOMATE BIO CONS 250 | 9600 | Stock prédit: 1377.0u (13j restants) → prédit 9600u mais non commandé |
| [PF1721] LV VIN CAESAR PET 250 BIO | 260 | Stock prédit: -52.5u (-13j restants) → prédit 260u mais non commandé |
| [PF1720] LV VIN MIEL MOU PET 250 BIO | 260 | Stock prédit: 33.9u (12j restants) → prédit 260u mais non commandé |
| [PI3200] PI TARTI AUBERGINE BIO CONS 250 | 901 | Stock prédit: 115.6u (10j restants) → prédit 901u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-19T08:15:38.305Z*
