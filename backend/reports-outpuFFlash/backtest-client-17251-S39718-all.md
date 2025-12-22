# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S39718
- **Date commande** : 2025-10-14 08:41:27
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 10,866 input + 20,155 output = 31,021 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 24.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 19.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 18.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 19.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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

## True Positives (8)

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
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 288 | 192 | 96.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3339] CARRE MAYONNAISE ANCIENNE 500ML | 96 | 96 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3343] SIMPL CARRE VOL AU VENT 800 GR | 192 | 96 | 96.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1952] CARRE VIN CIBOULET PET 450 | 98 | 98 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3341] CARRE MAYONNAISE BIO 500ML | 110 | 110 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - LLM: 288u vs Médiane: 192u (Réel: 192u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 288u
- 📊 **Baseline calculée**: 211.2u
- 📊 **Médiane historique**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 96u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 288u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande hebdomadaire régulière, principalement le mardi
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-10-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 384u, 480u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande hebdomadaire quasi systématique. Les volumes récents (288u le 09/10, 192u le 07/10 et 384u le 30/09) indiquent une nette accélération par rapport au début septembre, ce qui correspond à la saisonnalité habituelle des bouchées à la reine/vol au vent en fin d'année (N-1 montre également une activité intense à cette période). La prochaine commande est attendue pour le 16/10, soit dans 3 jours. On préconise 288u, volume de la dernière commande et multiple standard constaté.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,042 tokens
- **Output**: 1,661 tokens
- **Total**: 2,703 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I'm analyzing the sales data for [PF3229] CARREFOUR VOL AU VENT. The most recent figures show 288 units sold on October 9th. Before that, sales were 192 units on the 7th of October, and a higher 384 units on September 30th. I also see a significantly lower figure of 96 units on September 23rd.


**Calculating Anticipated Order Dates**

I've been calculating the anticipated next order date based on the sales data, and the cycle median seems to be 7 days. Considering the last order was on October 9th, and today is October 13th, I'm predicting the next order will be on October 16th. I've flagged this as a high-risk item as it is imminent.


**Assessing Order Quantities**

I'm now focusing on projecting the order quantity. Considering recent sales, the median is 192 units, and the mean is 211.2. The historical recurring quantities are 96, 192, and 288. Given the increasing trend and seasonal boost, I'm leaning toward predicting an order of 288 units.


**Synthesizing Order Predictions**

I'm now weaving together the frequency and quantity analyses to make a final prediction. Based on a consistent 7-day cycle, I project another order on October 16th. Given the recent sales increase and seasonal considerations, I'm confident in recommending an order of 288 units, like the last one, and the confidence is high.




</details>

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 192u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 192u
- 📊 **Baseline calculée**: 192u
- 📊 **Médiane historique**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 192u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire marqué (principalement le mardi)
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-10-16 (dans 3j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Habituellement le mardi, avec une commande récente exceptionnelle le jeudi 09/10
- **Outliers détectés**: 288u

**🧠 Raisonnement LLM:**
Le produit présente une régularité forte avec un cycle de 7 jours. Bien que la dernière commande ait eu lieu un jeudi (09/10), le volume récurrent de 192 unités domine l'historique récent et N-1. La prochaine commande est attendue sous 3 jours pour maintenir le rythme hebdomadaire.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,042 tokens
- **Output**: 1,167 tokens
- **Total**: 2,209 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the sales data for the CARREFOUR VOL AU VENT product. So far, I've noted the unit sales from the past week. It seems there was a significant jump in sales on October 9th compared to the 7th. I need to investigate the cause of this variance.


**Calculating Reorder Levels**

I'm now calculating the reorder level. Based on the past three months, the median order quantity is 192 units, with a clear mode at the same value. My analysis indicates a stable trend around 192 units. The interval between orders is typically 7 days. I am also factoring in the previous year's data for context.


**Assessing Inventory Risk**

I'm now assessing the risk of stock rupture for CARREFOUR VOL AU VENT. With 3 days until the next predicted order, and the lead time being less than the 40-day horizon, the risk assessment indicates the risk of rupture. The product baseline quantity is a stable 192 units.




</details>

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - LLM: 108u vs Médiane: 108u (Réel: 108u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 108u
- 📊 **Baseline calculée**: 108u
- 📊 **Médiane historique**: 108u
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 108u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande hebdomadaire ou bimensuelle, systématiquement le mardi
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-10-07
- **Prochaine prédite**: 2025-10-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 216u, 324u

**🧠 Raisonnement LLM:**
Le produit présente une régularité exceptionnelle avec une quantité fixe de 108 unités par commande sur tous les derniers relevés de 2025. Le rythme actuel s'est stabilisé sur un cycle hebdomadaire (chaque mardi) lors des trois dernières semaines. La date actuelle (lundi 13/10) précède de 24h la date de commande habituelle prévue le mardi 14/10.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,048 tokens
- **Output**: 1,457 tokens
- **Total**: 2,505 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I'm currently reviewing the recent sales data for the Carrefour Carbonnades product, specifically focusing on the last three months. I see two entries for the past month, both indicating a volume of 108 units. I'm keen to understand the trends here.


**Calculating Order Predictions**

I've analyzed the sales history, particularly the intervals. It seems the product, CARREFOUR CARBONNADES, usually has orders on Tuesdays, either weekly or bi-weekly. Considering the last order was on October 7th, I predict the next order will be tomorrow, October 14th. This is based on a weekly cycle.


**Finalizing Order Recommendations**

I've concluded that the recommended order quantity is 108 units, based on consistent historical data and the product's stable demand. I've considered seasonality, outliers and the established weekly order cycle. My prediction is for an order tomorrow, October 14th, in line with the established pattern.


**Determining Optimal Order Amount**

I've examined the recent sales history, and the consistent volume of 108 units is striking. I've noted a weekly or bi-weekly cadence, mostly Tuesdays, with an upcoming order predicted for tomorrow. No discernible seasonality or major outliers influence my recommendation, which aligns with the observed pattern. The confidence level is high.




</details>

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - LLM: 96u vs Médiane: 96u (Réel: 96u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 96u
- 📊 **Baseline calculée**: 96u
- 📊 **Médiane historique**: 96u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 96u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire ou bimensuel le mardi
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-10-07
- **Prochaine prédite**: 2025-10-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande très régulier, principalement hebdomadaire (tous les 7 jours) le mardi. La dernière commande date du 07/10, ce qui place la prochaine date théorique au 14/10 (soit demain). La quantité commandée est extrêmement stable à 96 unités sur les 4 dernières itérations.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 706 tokens
- **Output**: 1,093 tokens
- **Total**: 1,799 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating a Purchase**

I'm currently determining the optimal order quantity for the [PF3339] CARRE MAYONNAISE ANCIENNE 500ML. Examining the sales data, I need to balance the need to fulfill demand with the risk of overstocking before the order date on 2025-10-13.


**Determining the Order**

I've analyzed the sales data for the [PF3339] CARRE MAYONNAISE ANCIENNE 500ML. The intervals between orders have been calculated and the frequency of ordering is every 7 days (median). The latest order was 96 units, and the baseline quantity is also 96. The date is October 13, 2025. Given the need date of October 14, and the consistency in orders, 96 units are recommended.


**Calculating the Recommendation**

The evaluation is complete, with a recommended order of 96 units for the [PF3339] CARRE MAYONNAISE ANCIENNE 500ML. The reasoning emphasizes the consistent weekly ordering cycle, a stable demand, and the previous order volume of 96 units. The high confidence level reflects the reliable pattern.




</details>

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 96u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 192u
- 📊 **Baseline calculée**: 192u
- 📊 **Médiane historique**: 192u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 96u (100.0%)
- 📉 **Erreur Médiane**: 96u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 192u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande hebdomadaire le mardi
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-10-07
- **Prochaine prédite**: 2025-10-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 96u

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec une occurrence hebdomadaire chaque mardi. La dernière commande date d'il y a 6 jours, plaçant la prochaine commande théorique au 14 octobre (demain). Le volume est stable à 192 unités sur les quatre dernières commandes, ce qui définit la recommandation.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 706 tokens
- **Output**: 1,202 tokens
- **Total**: 1,908 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently looking at the sales data for the "SIMPL CARRE VOL AU VENT 800 GR" product, specifically focusing on the recent three-month period. I see a consistent sales volume of 192 units on the last two Tuesdays. I'll need to dig deeper to find out the story behind this trend.


**Assessing Order Prediction**

I've crunched the numbers further, focusing on the "SIMPL CARRE VOL AU VENT 800 GR" product. The cycle median is 7 days, and the last order was on the 7th. The projected next order is tomorrow, the 14th, which aligns with my calculations. Given the consistent recent demand, I've flagged a stockout risk.


**Finalizing the Recommendation**

I've synthesized the data. The customer has a very consistent weekly order pattern, every Tuesday. With a stockout risk identified, I'm confidently recommending an order of 192 units to meet the demand, with a predicted order tomorrow. The confidence level is high.


**Concluding Order Strategy**

I've completed the analysis, focusing on the product "[PF3343] SIMPL CARRE VOL AU VENT 800 GR". Given the regular Tuesday orders, and the previous order on the 7th, the next order is highly probable tomorrow, the 14th, making it a high stockout risk. I recommend a purchase of 192 units.




</details>

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - LLM: 108u vs Médiane: 108u (Réel: 108u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 108u
- 📊 **Baseline calculée**: 108u
- 📊 **Médiane historique**: 108u
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 108u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel régulier (tous les 14 jours) le mardi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-30
- **Prochaine prédite**: 2025-10-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 216u

**🧠 Raisonnement LLM:**
Le cycle de commande est très précis (tous les 14 jours). La dernière commande date du 30 septembre, ce qui place la prochaine échéance au 14 octobre. Comme nous sommes le 13 octobre, le risque de rupture est immédiat. Bien qu'une commande double de 216u ait été observée récemment, le volume historique récurrent est de 108u, ce qui constitue la base la plus fiable.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 711 tokens
- **Output**: 1,396 tokens
- **Total**: 2,107 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Production Data**

The current date is October 13th, 2025. I've just reviewed the production data for product [PF3348], specifically the "CARRE BOULETTES TOMATE" in 680g packs of 8. Recent data shows production runs on Tuesdays, with quantities of 216 units on September 30th, 108 units on both September 23rd and September 9th, and 108 units on August 26th. I'm noting a consistent production cadence.


**Assessing Order Intervals**

I've calculated the median interval between orders, which is 14 days, with the most recent order being on September 30th. Given the current date, October 13th, I anticipate the next order to be tomorrow, October 14th. This warrants a "YES" risk assessment, given the proximity.


**Calculating Baseline Quantities**

I've moved on to examining the order quantities. The pattern is clear: a standard batch is 108 units, but the last order was 216. Therefore, while a rising trend is suggested, I'm adjusting for the outlier, and I'm concluding that we should predict a baseline of 108 units.


**Forecasting Order Details**

I'm now projecting the next order details, solidifying a high-confidence prediction. Given the consistent 14-day cycle and the current date, I'm anticipating the next order to occur tomorrow. The data strongly suggests a baseline quantity of 108 units, despite the recent outlier of 216.




</details>

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - LLM: 98u vs Médiane: 98u (Réel: 98u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 98u
- 📊 **Baseline calculée**: 98u
- 📊 **Médiane historique**: 98u
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 98u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bi-hebdomadaire (tous les 14 jours) généralement le mardi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-23
- **Prochaine prédite**: 2025-10-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 588u

**🧠 Raisonnement LLM:**
Le client suit un cycle de commande très régulier de 98 unités tous les 14 jours, principalement le mardi. La dernière commande date du 23 septembre, soit il y a 20 jours. Une commande était théoriquement attendue autour du 7 octobre, mais la récurrence historique suggère qu'une commande de 98u est imminente (prochain créneau probable le mardi 14 octobre). L'événement de fin juillet est considéré comme un outlier car il ne s'est pas répété en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,033 tokens
- **Output**: 1,467 tokens
- **Total**: 2,500 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Data Patterns**

\n\n

I'm currently focused on the recurring "98u" values, trying to understand their significance in relation to the date intervals. The 14-day and 28-day intervals between the occurrences are particularly intriguing. I need to determine if the "392u + 196u" value, which appears only once, fits the established pattern somehow.


**Forecasting Next Order**

\n\n

My current focus is on predicting the next order date. Given the usual Tuesday cadence, and the 14-day cycle seen in recent data, I initially predicted October 7th. However, the order is overdue. Considering the historical fluctuations, and the 20-day gap, I must assess the potential risk of a stockout and recalculate, accounting for the possibility of a longer cycle.


**Assessing Imminent Demand**

\n\n

My current evaluation centers on the overdue order and the potential for a stockout. Considering the typical Tuesday cadence and the 20-day gap since the last order, I'm recalculating the predicted arrival date, which now points to tomorrow, October 14th, with a 98u quantity. I must adjust for the historical fluctuations, and the 20-day lag to confirm these predictions, and whether the quantity will vary.


**Predicting the Upcoming Order**

\n\n

My current evaluation suggests the order will arrive tomorrow, October 14th, a Tuesday, which aligns with historical cycles. The consistently requested quantity of 98u also appears likely. The overdue nature of the order heightens the risk of a stockout, but the established patterns provide a high degree of confidence in the forecast.




</details>

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - LLM: 110u vs Médiane: 110u (Réel: 110u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 110u
- 📊 **Baseline calculée**: 110u
- 📊 **Médiane historique**: 110u
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 110u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes le mardi, intervalle irrégulier avec une moyenne de 31 jours
- **Cycle médian (jours)**: 32
- **Dernière commande**: 2025-09-23
- **Prochaine prédite**: 2025-10-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande systématiquement le mardi avec une quantité fixe de 110u. L'historique montre des intervalles de 7 et 56 jours, soit un cycle médian d'environ 31-32 jours. La dernière commande datant du 23 septembre (il y a 20 jours), la prochaine est estimée autour du 21 octobre. Le délai restant (8 jours) étant inférieur au seuil de risque de 40 jours, une commande de 110u est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 678 tokens
- **Output**: 1,995 tokens
- **Total**: 2,673 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Past Orders**

I'm currently reviewing the order history for the CARRE MAYONNAISE BIO 500ML product. Specifically, I'm trying to understand the two entries from July 29th, 2025. It seems there's a duplication, with two orders of 110u placed simultaneously. I need to determine if this was a data entry error or a split order.


**Calculating Likely Order Dates**

I've analyzed the order intervals for the CARRE MAYONNAISE BIO 500ML. The 7 and 56-day intervals present a challenge for predicting the next order. Considering the last order was on September 23rd, and today is October 13th, the 20-day gap raises a risk flag, especially since the prompt specifies ≤ 40 days as "RISK YES."


**Determining Risk Factors**

I'm now zeroing in on the "RISK YES" trigger, applying this product's unusual order history. With the 20-day gap, I'm analyzing potential cycle lengths, aiming for an approximate 30-day interval for the product. Since this interval falls within the <=40 day range, I'm confident I can flag this as a "RISK YES" scenario. The consistent 110u order size further informs this assessment.


**Determining Next Order Date**

I've considered the product's irregular order history, especially the 7- and 56-day intervals. Taking into account the 20-day gap since the last order on September 23rd, my analysis focuses on a monthly cycle. Consequently, I project the next order around October 21st, making the risk "YES," as the timeframe falls within the prompt's specifications.


**Predicting Replenishment Cycles**

I'm focused on the inconsistencies in order frequency for this product, marked by varying intervals. The 7- and 56-day gaps complicate predictions. However, I estimate a 28-day cycle, considering Tuesday orders, with the last order 20 days ago. I anticipate the next order around October 21st, satisfying the "RISK YES" threshold. The unit size of 110u remains standard.




</details>

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 10:12:05: 288u
- 2025-10-07 09:21:19: 192u
- 2025-09-30 10:39:35: 384u
- 2025-09-23 14:07:32: 96u
- 2025-09-16 12:31:33: 96u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 96u
- 2024-10-01 09:34:05: 288u
- 2024-09-24 07:15:22: 96u
- 2024-09-17 15:18:07: 480u
- 2024-09-12 12:47:26: 192u
- 2024-09-05 07:15:19: 288u
- 2024-08-27 09:32:47: 192u
- 2024-08-20 08:57:46: 192u
- 2024-08-13 08:17:17: 96u
- 2024-06-25 12:51:56: 288u
- 2024-06-25 12:51:20: 288u
- 2024-06-25 12:50:51: 384u

**✅ Quantité LLM**: 288u (confidence: high)
**📊 Quantité Réelle**: 192u

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 10:12:05: 192u
- 2025-10-07 09:21:19: 96u
- 2025-09-30 10:39:35: 288u
- 2025-09-23 14:07:32: 192u
- 2025-09-16 12:31:33: 192u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 192u
- 2024-10-01 09:34:05: 96u
- 2024-08-20 08:57:46: 192u
- 2024-07-15 10:04:22: 576u
- 2024-07-03 11:51:49: 96u
- 2024-07-03 08:54:55: 480u
- 2024-07-02 08:34:10: 384u
- 2024-06-27 12:35:53: 96u
- 2024-06-25 12:51:56: 192u
- 2024-06-25 12:51:20: 192u
- 2024-06-25 12:50:51: 192u
- 2024-06-25 08:49:38: 192u

**✅ Quantité LLM**: 192u (confidence: high)
**📊 Quantité Réelle**: 192u

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 108u
- 2025-09-30 10:39:35: 108u
- 2025-09-23 14:07:32: 108u
- 2025-09-09 13:17:20: 108u
- 2025-08-26 13:19:30: 108u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 108u
- 2024-10-01 09:34:05: 108u
- 2024-09-24 07:15:22: 108u
- 2024-09-17 15:18:07: 216u
- 2024-09-12 12:47:26: 108u
- 2024-07-03 11:51:49: 108u
- 2024-07-02 08:34:10: 324u
- 2024-06-27 12:35:53: 108u
- 2024-06-25 12:51:56: 108u
- 2024-06-25 12:51:20: 108u
- 2024-06-25 12:50:51: 216u
- 2024-06-25 08:49:38: 108u

**✅ Quantité LLM**: 108u (confidence: high)
**📊 Quantité Réelle**: 108u

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 96u
- 2025-09-30 10:39:35: 96u
- 2025-09-16 12:31:33: 96u
- 2025-09-09 13:17:20: 96u
- 2025-07-29 04:52:34: 192u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 96u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 192u
- 2025-09-30 10:39:35: 192u
- 2025-09-23 14:07:32: 192u
- 2025-09-09 13:17:20: 192u
- 2025-09-02 11:55:00: 96u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 192u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-30 10:39:35: 216u
- 2025-09-23 14:07:32: 108u
- 2025-09-09 13:17:20: 108u
- 2025-08-26 13:19:30: 108u
- 2025-08-12 09:34:57: 108u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 108u (confidence: high)
**📊 Quantité Réelle**: 108u

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 14:07:32: 98u
- 2025-09-09 13:17:20: 98u
- 2025-08-12 10:12:59: 98u
- 2025-07-29 04:52:34: 392u
- 2025-07-29 04:52:06: 196u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 98u
- 2024-09-24 07:15:22: 98u
- 2024-09-12 12:47:26: 98u
- 2024-09-05 07:15:19: 98u
- 2024-08-27 09:32:47: 98u
- 2024-08-20 08:57:46: 98u
- 2024-08-13 08:17:17: 98u
- 2024-08-06 14:39:19: 98u
- 2024-06-25 12:51:56: 196u
- 2024-06-25 12:51:20: 98u
- 2024-06-25 12:50:51: 98u
- 2024-06-25 08:49:38: 196u

**✅ Quantité LLM**: 98u (confidence: high)
**📊 Quantité Réelle**: 98u

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 14:07:32: 110u
- 2025-07-29 04:52:34: 110u
- 2025-07-29 04:52:06: 110u
- 2025-07-22 14:39:10: 110u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 110u (confidence: medium)
**📊 Quantité Réelle**: 110u

</details>




---

## False Positives (5)

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
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 80 | Stock prédit: 18.2u (1j restants) → prédit 80u mais non commandé |
| [PF3344] SIMPL CARRE CARBONNADES 800 GR PAR 8 | 96 | Stock prédit: 63.4u (9j restants) → prédit 96u mais non commandé |
| [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML | 112 | Stock prédit: -11.9u (-2j restants) → prédit 112u mais non commandé |
| [PF2933] CARRE VIN MIEL MOU PET 450 BIO | 98 | Stock prédit: -319.8u (-51j restants) → prédit 98u mais non commandé |
| [PF2932] CARRE VIN CIBOULET PET 450 BIO | 98 | Stock prédit: -436.5u (-61j restants) → prédit 98u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:52:02.736Z*
