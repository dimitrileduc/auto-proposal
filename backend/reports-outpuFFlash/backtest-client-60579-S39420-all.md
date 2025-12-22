# Rapport Backtest - Client Wandercoop

## Contexte

- **Client** : Wandercoop (ID: 60579)
- **Commande réelle** : S39420
- **Date commande** : 2025-10-02 06:12:05
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 12,800 input + 39,705 output = 52,505 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 56.3% | 16 produits prédits, 9 corrects |
| **Rappel** | 90.0% | 10 produits réels, 9 détectés |
| **F1-Score** | 69.2% | Score équilibré global |

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
| **MAE** | 1.11 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 55.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 60.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -22.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (9)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 3 semaines (21-26 jours)
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-15_12:59:39-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00-00:00 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La fréquence de commande est stable avec un intervalle médian de 21 jours. La prochaine commande est estimée autour du 15 octobre, ce qui place le besoin à 14 jours de la date actuelle (bien en-dessous du seuil de 40 jours). La quantité de 2 unités est cohérente avec la médiane historique et les volumes récents.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 699 tokens
- **Output**: 3,333 tokens
- **Total**: 4,032 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Order Intervals**

I've calculated the median interval between orders, excluding an obvious outlier.  Based on this, and the last order date, I've projected the next order date and assessed the risk. The predicted date is comfortably within the defined threshold. Quantities have been noted, and the median quantity derived.


**Calculating Order Projections**

I've now focused on the [REB01] product specifically. After analyzing order history, I calculated the median interval as 21 days. The predicted next order date is October 15th, approximately two weeks from now. I've noted a stable trend in quantities, recommending 2 units. Finally, I've assessed the confidence level as medium.


**Confirming and Refining Details**

My analysis is complete and is now focused on validation and precision. I've double-checked all quoted strings, ensured numeric data types, and validated enums. I'm now reviewing the final recommendations and reasoning for clarity and accuracy.




</details>

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande toutes les 3 semaines environ (21-26 jours)
- **Cycle médian (jours)**: 23
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec un intervalle médian de 23 jours. La dernière commande datant du 24 septembre, la prochaine occurrence est estimée au 17 octobre, soit dans moins de 40 jours (Risque de rupture avéré). Les quantités commandées sont stables avec une médiane à 2 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 672 tokens
- **Output**: 1,078 tokens
- **Total**: 1,750 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Chip Sales Data**

I've been reviewing the recent sales data for the ReBEL chips, specifically the thym/romarin 125g variety. The past three months show consistent, albeit low, demand with only two units sold on each of the specified dates. I'm focusing on identifying any trends or anomalies in this limited data.


**Projecting Future Orders**

I've calculated the median cycle time to be 23 days based on the provided data. Considering the last order was on September 24th, my model predicts the next order on October 17th. This suggests a low risk of stock depletion, as the days until the predicted order (16 days) is below the threshold. The baseline and recommended quantity is 2 units.


**Calculating Order Frequency**

I've just finished the calculations. The median cycle is indeed 23 days, with the predicted order date on October 17th. Considering the current date, I've confirmed we have 16 days before the predicted order. I've also verified the date calculations and the JSON formatting to ensure data integrity.




</details>

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.25u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 21 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de réapprovisionnement très stable de 21 jours (médiane). La prochaine commande est estimée pour le 15 octobre, soit dans 14 jours par rapport à la date du jour. Étant donné que le cycle est inférieur au seuil de 40 jours, il y a un risque de rupture imminent. La quantité commandée est constante à 1 unité (75% des cas).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 672 tokens
- **Output**: 1,197 tokens
- **Total**: 1,869 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product Sales Data**

The initial data point from September 24th, 2025, shows a single unit sold. I am now charting the second data point from September 3rd, 2025, showing two units. The 21-day gap is notable, suggesting a possible sales fluctuation that requires further investigation.


**Predicting Order Requirements**

The cycle of roughly 21 days is strongly influencing my projections. Considering the recent date, October 1st, and that the next order is predicted to be around October 15th, an order is needed soon. The baseline quantity is 1.25, while the recommended order is 1 unit.




</details>

</details>


<details>
<summary><strong>4. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Approximativement toutes les 3 semaines
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-15 (dans 14j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: Les commandes alternent entre mercredi et vendredi
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est estimé à 21 jours. La dernière commande date d'il y a 7 jours, plaçant la prochaine commande probable vers le 15 octobre soit dans 14 jours (inférieur au seuil de risque de 40j). La tendance est à la hausse passant de 1u à 2u lors des deux dernières commandes, nous retenons donc la quantité la plus récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 673 tokens
- **Output**: 964 tokens
- **Total**: 1,637 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Demand Patterns**

I'm currently analyzing the sales data for the [NUT05] bar. I've noted the recent drop on September 24th, with 2 units sold, following a similar pattern in August. Interestingly, July saw a single unit sold. I'm focusing on identifying any weekly or monthly demand trends for this product.


**Estimating Next Order**

I've calculated the median cycle between orders for the [NUT05] bar to be 21 days. Based on the last order on 2025-09-24, the next order should be around 2025-10-15. This is 14 days from now, which is within the 40-day risk assessment. Therefore, I've flagged a potential risk. I'm also factoring in a recent trend of increasing quantities, and the recommendation is to order 2 units, based on the last two orders.


**Assessing Confidence & Trends**

I've examined the recent data and find no quantity outliers for the [NUT05] bar, keeping confidence high in Phase 1 (risk assessment). While no seasonality is apparent due to limited history, a clear increasing trend in quantity exists, from 1 to 2 units, resulting in medium confidence for the recommended quantity.




</details>

</details>


<details>
<summary><strong>5. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières environ toutes les 3 semaines (21-26j).
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-15 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Un cycle de consommation stable a été identifié avec une médiane de 21 jours entre les commandes. La quantité commandée est systématiquement de 1 unité, sans aucune variation historique. La prochaine commande est prévue dans environ 14 jours (le 15 octobre), ce qui se situe bien dans l'horizon de risque de 40 jours.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 700 tokens
- **Output**: 1,227 tokens
- **Total**: 1,927 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Data Points**

My focus is on the recent sales data for NUT04. I've noted two sales within the last three months, specifically one unit sold on September 24th and another on September 3rd. Now I'm trying to figure out how these values fit into the wider context of this product's performance.


**Calculating Ordering Frequency**

I've now calculated the intervals between sales for NUT04, ranging from 2 to 26 days. The median interval appears to be 21 days, indicating a fairly consistent ordering pattern. I identified the 2-day interval as a potential outlier, but the overall trend looks stable. Based on this, I'm predicting the next order date and assessing the associated risk.


**Predicting Replenishment Needs**

I've just refined the replenishment forecast. Given the consistent ordering cycle of roughly three weeks, and a last order on September 24th, I'm projecting the next order for NUT04 around October 15th. The quantity remains at 1, so the recommendation is to order one unit. My confidence level is high, based on the reliable ordering pattern.




</details>

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière environ toutes les 3 à 4 semaines (cycle médian 23-24 jours)
- **Cycle médian (jours)**: 23
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-26 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Le cycle de commande moyen est de 23 jours. La dernière commande datant du 03 septembre, la prochaine était théoriquement attendue autour du 26 septembre. Au 01 octobre, le client est en retard sur son cycle habituel, ce qui indique un besoin immédiat. La quantité de 2 unités est très stable sur les trois dernières commandes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 669 tokens
- **Output**: 1,641 tokens
- **Total**: 2,310 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Sales Data**

I've been poring over the sales figures for the NUT01 bar. Initial observations show a couple of sales in August and September. I'm focusing on identifying any trends, perhaps seasonal ones, to better understand demand patterns. It's early days, but I'm looking for a solid baseline to project future sales.


**Forecasting Demand Patterns**

The sales data for NUT01 now includes an overdue alert, since the last order was September 3rd. Based on prior intervals, a new order was expected around September 26th. Given the expected frequency, a stockout within the next 30 days is highly probable. My focus now is determining the ideal order size.


**Evaluating Order Recommendations**

I've finalized my order recommendations. Based on the consistent pattern, I'm advising an immediate order for 2 units of NUT01. Given that the customer is already overdue, the probability of a stockout is very high. I have a high confidence level due to the stable historical data.


**Reassessing the Risk**

The analysis confirms the customer's overdue status. I've focused on the interval between orders, using a median of ~23 days to pinpoint the expected reorder date. Considering the "≤40 days" rule, I'm confident in the "high risk" assessment.  I am finalizing the summary with this.


**Calculating the Recommendation**

I've just finished the final calculations, including the risk assessment. The customer's order is already overdue. The consistent ordering pattern and the stable demand for 2 units justify immediate action. Considering all factors, I am finalizing the report with a high-confidence recommendation for 2 units.




</details>

</details>


<details>
<summary><strong>7. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier de 23 à 26 jours
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très stable (médiane de 25 jours) avec une quantité constante de 1 unité. La dernière commande datant d'il y a 28 jours, la date théorique de réapprovisionnement (28 sept) est déjà passée, rendant le risque de rupture critique pour l'horizon de 30 jours.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 646 tokens
- **Output**: 1,474 tokens
- **Total**: 2,120 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I'm analyzing the sales data for NUT07. The focus is on the bio 40g bar. So far, I see one unit sold on September 3rd and another on August 8th. I'm keen to understand the factors driving this. My next step is to look for seasonal trends.


**Calculating Order Frequency**

I've calculated the median cycle time for the NUT07 bar to be roughly 25 days, based on recent sales. Since the last order was on September 3rd, and today is October 1st, we're 28 days out. This suggests the next order is overdue and requires immediate attention to avoid a stockout.


**Evaluating Stockout Risk**

I'm now assessing the stockout risk for the NUT07 bar. Given the consistent 25-day cycle and that the last order was 28 days ago, the risk is elevated. The recommendation is to order one unit immediately. A stable, monthly pattern suggests high confidence in this analysis.


**Synthesizing Order Recommendations**

I've finalized my analysis. The NUT07 bar requires an immediate order of one unit. The 28-day gap since the last order, exceeding the typical 25-day cycle, presents a clear stockout risk. My confidence in this recommendation is high due to the consistent order pattern.




</details>

</details>


<details>
<summary><strong>8. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes irrégulières avec un cycle médian de 25 jours
- **Cycle médian (jours)**: 24.5
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court avec des quantités stables à 1 unité. Le cycle médian calculé sur les intervalles (2j et 47j) est de 24.5 jours. La dernière commande datant d'il y a 28 jours, le réapprovisionnement est théoriquement déjà nécessaire pour maintenir le stock, justifiant la commande de l'unité habituelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 643 tokens
- **Output**: 2,632 tokens
- **Total**: 3,275 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Ordering Trends**

I've been analyzing the order history for the NUT03 energy bar. Calculations reveal a median cycle of 24.5 days, though the intervals vary significantly. The last order was on September 3rd, and based on the longer cycle, the next order is projected around October 20th. I'm focusing on the risk of stockout within the next month, considering these varied timelines.


**Evaluating Reorder Timing**

I'm now recalculating the reorder timing for the NUT03 bar, focusing on the variance in order frequency. Considering the 47-day interval more representative, I project the next order around October 20th. With today being October 1st, I see a 19-day window. The median cycle of 24.5 days has already passed, leading to an immediate need. I'll recommend ordering one unit.


**Refining Order Prediction Logic**

I've re-evaluated the cycle calculations. I now consider the 47-day interval as a more representative cycle. The median of 24.5 is still in play, however. My current date is October 1st. My calculations result in a near immediate need based on one cycle, and 19 days based on the other. A rule-based approach confirms urgency. I'm recommending one unit.


**Determining Optimal Replenishment**

I'm finalizing the order recommendation for the NUT03 bar. While the median cycle suggests an overdue reorder, I'm opting to use the 47-day cycle. This results in a 19-day window. With the quantity always being one, I'll recommend ordering a single unit, given the B2B nature and potential stockout risk.


**Synthesizing Findings and Rationale**

I've reviewed the final JSON structure and confirmed all constraints. The -4 day projection for the next order based on the median cycle indicates a critical need. My recommendation remains one unit, reflecting the B2B context and the consistent order quantity. The confidence levels reflect the limited historical data.




</details>

</details>


<details>
<summary><strong>9. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle d'environ 26 jours détecté sur l'historique récent
- **Cycle médian (jours)**: 26
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-09-29 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes espacées de 26 jours. La date prévue de la prochaine commande (29 septembre) est déjà dépassée au 1er octobre, indiquant un besoin de réapprovisionnement immédiat. La tendance est à la hausse (de 1 à 2 unités). On recommande 2 unités pour s'aligner sur la consommation la plus récente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 620 tokens
- **Output**: 1,549 tokens
- **Total**: 2,169 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Projections**

I'm now diving into the product's recent sales data for the NUT08 bar. The interval between the two recent sales dates is providing interesting insights. I am also focusing on August's performance, as the data is pointing to a specific volume for that period.


**Confirming Stock Level Analysis**

I've finalized the order recommendations for the NUT08 bar, specifically 2 units. My analysis flagged an imminent risk of stockout, given the 26-day cycle and the passing of the predicted order date. I am also adjusting the confidence level to "low" due to the very limited historical data available.


**Evaluating Data and Projections**

I've reviewed the data, noting an order frequency of roughly 26 days based on the two available data points, which now guides my projections. Considering the recent trend, I am proposing an order of 2 units. The model suggests the order is overdue based on the date. My confidence in this recommendation is low due to the limited historical data.




</details>

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:59:39: 2u
- 2025-09-03 06:51:32: 3u
- 2025-08-08 11:54:27: 1u
- 2025-07-18 10:48:56: 2u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:59:39: 2u
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 3u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:59:39: 1u
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 1u
- 2025-07-18 10:48:56: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:59:39: 2u
- 2025-08-08 11:54:27: 2u
- 2025-07-18 10:48:56: 1u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:59:39: 1u
- 2025-09-03 06:51:32: 1u
- 2025-08-08 11:54:27: 1u
- 2025-07-18 10:48:56: 1u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 2u
- 2025-07-18 10:48:56: 2u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:51:32: 1u
- 2025-08-08 11:54:27: 1u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:51:32: 1u
- 2025-07-18 10:48:56: 1u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>




---

## False Positives (7)

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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.7u (17j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.6u (11j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 1.4u (13j restants) → prédit 2u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Stock prédit: 0.7u (15j restants) → prédit 1u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Stock prédit: 0.7u (15j restants) → prédit 1u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |


---

## False Negatives (1)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | En rupture (-34j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T13:03:58.565Z*
