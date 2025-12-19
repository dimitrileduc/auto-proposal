# Rapport Backtest - Client ILIS    SA, FRANCESCO LOZANO

## Contexte

- **Client** : ILIS    SA, FRANCESCO LOZANO (ID: 8131)
- **Commande réelle** : S37570
- **Date commande** : 2025-06-20 08:53:32
- **Date cutoff système** : 2025-06-19 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 17,334 input + 13,868 output = 31,202 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 62.5% | 8 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 76.9% | Score équilibré global |

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
| **MAE** | 144.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 46.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -71.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 160 | 800 | 640.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 24 | 50 | 26.0 | 52.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 5 | 10 | 5.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 104 | 52.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 52 | 52 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 800u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 160u
- 📊 **Médiane historique**: 160u
- ✅ **Réel commandé**: 800u
- 📉 **Erreur LLM**: 640u (80.0%)
- 📉 **Erreur Médiane**: 640u (80.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes hebdomadaires régulières, principalement le vendredi
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 240u

**🧠 Raisonnement LLM:**
Le cycle de commande est très stable avec une médiane de 7 jours (11j, 3j, 7j, 7j). La prochaine commande est prévue pour le 2025-06-20, soit demain par rapport à la date actuelle. Concernant les quantités, 160u est la valeur modale apparaissant dans 80% des cas récents, constituant une base solide pour la prédiction.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,208 tokens
- **Output**: 1,617 tokens
- **Total**: 3,825 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

\n\n

I'm currently focused on FILOU CHASSEUR, specifically the 5L variant. Analyzing the sales figures, I've noted a dip, with 160 units sold last Friday. This is down from 240 units the Friday before. I'm also comparing this to Tuesday's sales. It's becoming clearer where my focus should be.


**Predicting Order Patterns**

\n\n

I've just finished analyzing the intervals between orders. The median interval is 7 days, placing the next order on 2025-06-20, which is within my 30-day horizon. Based on the confidence I've gained so far, I'm already at a high confidence level for a 'RISQUE = OUI' designation. I also took a look at the quantities.


**Forecasting Demand Quantity**

\n\n

Now I'm focusing on the predicted quantity. I've noted a stable baseline of 160 units, with an occasional outlier of 240. The 240u order clustered around the 160u orders, suggesting increased demand early in June. With the weekly cycle, recommending 160 units appears to be the most prudent, aligning with the consistent buying pattern. My confidence level remains high.


**Evaluating Order Intervals**

\n\n

My analysis has narrowed down the next order date to tomorrow, June 20th. Given the consistent 7-day cycle, I'm highly confident in a 'RISQUE = OUI' designation. I've also now finalized the recommended quantity, landing firmly on 160 units. The pattern is clear and supports this.




</details>

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 24u vs Médiane: 24u (Réel: 50u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 24u
- 📊 **Baseline calculée**: 22.6u
- 📊 **Médiane historique**: 24u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 26u (52.0%)
- 📉 **Erreur Médiane**: 26u (52.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 24u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 7-9 jours, majoritairement le vendredi
- **Cycle médian (jours)**: 8.5
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-22 (dans 3j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes fréquentes le vendredi (4 occurrences sur 5). Prochain besoin théorique ce week-end.
- **Outliers détectés**: 0u, 80u

**🧠 Raisonnement LLM:**
Le cycle médian détecté est de 8,5 jours. La dernière commande datant du 13/06, la prochaine est prévue aux alentours du 22/06, ce qui est imminent par rapport à la date actuelle (19/06). Les quantités sont stables (20-24 unités) en dehors d'un pic exceptionnel de 80u le 03/06. On préconise 24u, quantité récurrente dans l'historique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,203 tokens
- **Output**: 1,934 tokens
- **Total**: 4,137 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Sales Trends**

I've been analyzing the recent sales figures for the FILOU PROVENCALE product. Interesting to note the significant drop in sales on June 13th compared to June 3rd. It's important to understand the contributing factors, such as the day of the week, in order to make informed recommendations.


**Projecting Order Timing**

I'm now calculating the projected order date for the FILOU PROVENCALE product. Based on the historical data, specifically the intervals between orders, I've determined an average of roughly 8.5 days. Considering the last order was on June 13th, the next order is estimated around June 21st or 22nd. Given today's date, this falls within the next few days, signalling high risk.


**Estimating Optimal Order Size**

I'm now determining the optimal quantity for the upcoming order. Considering the historical data, specifically the most frequent quantities of 24 units, and the outlier of 80, I'm leaning toward recommending an order of around 24 units. The client seems to order regularly in this range, suggesting a baseline demand.


**Calculating Final Recommendation**

I've completed the analysis, determining the key elements. The cycle is roughly 8.5 days, with the next order predicted for June 22nd. Given today is June 19th, we have about 3 days. The usual quantity is around 24, though there was an outlier of 80. I'm recommending 24 units.


**Formulating the Recommendation**

I'm now putting everything together. The estimated order date is very soon, based on the historical pattern. I am finalizing the product recommendation. I've re-evaluated the quantities, considering the different values. Based on the patterns, 24 units are likely the right choice.




</details>

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 5u vs Médiane: 5u (Réel: 10u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 5u
- 📊 **Baseline calculée**: 4.4u
- 📊 **Médiane historique**: 5u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 5u (50.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 5u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande environ tous les 14 jours avec une tendance à l'espacement récent
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-06-13
- **Prochaine prédite**: 2025-06-27 (dans 8j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Dernières échéances variables (7, 10, 18, 28 jours), médiane à 14 jours
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
Cycle médian calculé à 14 jours à partir des intervalles récents [28, 18, 10, 7]. La prochaine commande est attendue pour le 2025-06-27, soit dans l'horizon des 30 jours. La quantité de 60u du 11 avril est écartée comme outlier (stock de départ ou promotion). Le client commande régulièrement 5u (3 occurrences sur les 5 dernières commandes), ce volume est donc privilégié face à la légère baisse à 3u lors du dernier achat pour garantir la disponibilité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,201 tokens
- **Output**: 1,416 tokens
- **Total**: 3,617 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Filou's Volumes**

I'm currently focused on the sales history of product PF0088. Recent data from the 13th of June shows 3 units sold, a drop from previous months. I'm investigating the outlier of 60 units on April 11th. Further analysis will look at seasonal trends.


**Assessing Order Intervals**

I'm calculating the median cycle between orders for product PF0088. The interval list of [28, 18, 10, 7] days suggests a median of 14 days. This implies a next order is due around June 27th, posing a moderate risk within the 30-day horizon. I'm focusing on confidence levels.


**Evaluating Predicted Dates**

I am now focusing on refining the 'predicted next order date' calculations. I am comparing the median 14-day cycle against the current date, June 19th. The predicted order of June 27th is within the 30-day window, posing a moderate risk. Considering the outlier of 60, I'm adjusting confidence levels accordingly. The baseline quantity of 5 seems appropriate.


**Refining Confidence Assessments**

I'm now integrating the outlier detection and trend analysis. The 60u sale strongly suggests a special event. Thus, I've adjusted the confidence level to reflect this. I still predict around 5 units as the baseline, with a slight adjustment given the recent 3-unit sale.




</details>

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 104u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 52u
- 📊 **Baseline calculée**: 52u
- 📊 **Médiane historique**: 52u
- ✅ **Réel commandé**: 104u
- 📉 **Erreur LLM**: 52u (50.0%)
- 📉 **Erreur Médiane**: 52u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 52u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières avec un cycle médian de 19 jours pour une quantité constante de 52u
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-06-03
- **Prochaine prédite**: 2025-06-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle d'achat est bien établi avec des intervalles variant entre 11 et 25 jours (médiane à 19 jours). Avec une dernière commande au 2025-06-03, la prochaine commande est attendue aux alentours du 2025-06-22, soit dans l'horizon des 30 jours (J+3). Le volume est extrêmement stable avec 52 unités commandées à chaque occurrence sans exception, ce qui permet d'isoler un pattern de commande par lot spécifique (vraisemblablement une unité de manutention précise).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,207 tokens
- **Output**: 1,362 tokens
- **Total**: 3,569 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Data Points**

\n\n

I've been meticulously charting the weekly unit sales for the [PF0085] product. The most recent figures from late June are now incorporated. Observing the trends across the last few months, I'm beginning to discern patterns. Initial observations suggest a consistent baseline demand, though I need to factor in potential seasonality or external variables. Next, I'll analyze the velocity and frequency of these points.


**Projecting Future Orders**

\n\n

My current focus is on forecasting the next order date for the [PF0085] product, given the recent history. I've calculated a median interval of 19 days between orders based on the available data. The last order was on June 3rd, implying a next order around June 22nd. Since today is June 19th, this falls within the 30-day horizon, indicating a high risk of rupture, given the imminent order date. Confidence in this projection is high due to the consistent order pattern. The stable quantity of 52 units also reinforces the precision.


**Evaluating Pattern Stability Further**

\n\n

My current analysis focuses on a deeper dive into the available data. Examining the intervals, the calculations confirm a median cycle of 19 days, but with some variation. The next order date, 2025-06-22, is nearing, representing a risk. The consistent volume of 52 units, along with no outliers, strongly reinforces the forecast. The JSON output appears to be well-formed, complete with double quotes.


**Summarizing the Findings**

\n\n

I've just finalized my summary, and the pattern is remarkably clear. With a 19-day median cycle and consistent 52-unit orders, the next order is highly probable around June 22nd.  It's a high-confidence forecast, given the stability of the order quantities and the lack of seasonality impact. There's a clear risk of rupture, given that the forecast order date is within the specified horizon.




</details>

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 52u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 52u
- 📊 **Baseline calculée**: 43.3u
- 📊 **Médiane historique**: 52u
- ✅ **Réel commandé**: 52u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 52u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne de 12.5 jours détectée sur l'historique court
- **Cycle médian (jours)**: 13
- **Dernière commande**: 2025-05-23
- **Prochaine prédite**: 2025-06-05 (dans -14j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes précédentes le lundi et vendredi. Le client est actuellement en retard sur son cycle habituel.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 13 jours (intervalles de 4 et 21 jours). La dernière commande datant du 23/05, le client est en retard de plus de deux semaines par rapport à son rythme constaté, ce qui indique un risque de rupture imminent. Concernant les quantités, le chiffre 52 revient deux fois sur trois, suggérant un multiple logistique ou une commande type. On recommande 52 unités pour sécuriser la disponibilité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,151 tokens
- **Output**: 1,686 tokens
- **Total**: 3,837 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Sales Data**

I've been poring over the sales figures for the FILOU TOMATO KET CHUP, product code PF0959. It's interesting to note the volumes from the past three months, specifically the 52 units sold on May 23rd and the 26 units from May 2nd. I'm keen to uncover what drove these specific sales peaks.


**Calculating Order Frequency**

I'm now focusing on order frequency. I've noted the intervals between orders, specifically 4 and 21 days, which suggests an irregular, but approximately three-week cycle. Comparing this against the current date, I'm now inclined to suggest the client may be experiencing a stockout situation, or is past due for an order.


**Projecting the Quantity**

I'm now assessing the order quantity. The pattern of 52, 26, and 52 units is clear, and the 26 could suggest half of a full order. The median order volume is 52 units, and considering the client's past, I'm leaning towards recommending a 52-unit order to address their likely current needs.


**Evaluating the Cycle and Volume**

I've examined the order frequency and the product's history and concluded that the client is significantly behind schedule for their next order. I'm focusing on the recurrent 52-unit orders, which seem to be a standard volume. Given the client's current situation, I recommend a 52-unit order to address their needs, since the client has not ordered since May 23.


**Calculating the Recommendation**

I've just finished the calculations. The client is significantly overdue based on their 12-day median order cycle. Given their past order history and current delays, I'm recommending a 52-unit order, as that's the recurring quantity. The client's supply may have been interrupted.




</details>

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 160u
- 2025-06-06 12:50:33: 240u
- 2025-06-03 14:09:59: 160u
- 2025-05-23 11:37:51: 160u
- 2025-05-16 09:00:32: 160u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 800u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 20u
- 2025-06-03 14:09:59: 80u
- 2025-05-16 09:00:32: 24u
- 2025-05-09 08:24:16: 24u
- 2025-05-02 09:39:44: 0u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 24u (confidence: medium)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 3u
- 2025-05-16 09:00:32: 5u
- 2025-04-28 06:00:45: 5u
- 2025-04-18 04:55:33: 5u
- 2025-04-11 07:18:35: 60u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-03 14:09:59: 52u
- 2025-05-23 11:37:51: 52u
- 2025-04-28 06:00:45: 52u
- 2025-04-04 11:33:35: 52u
- 2025-03-21 12:22:31: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 52u (confidence: high)
**📊 Quantité Réelle**: 104u

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-23 11:37:51: 52u
- 2025-05-02 09:39:44: 26u
- 2025-04-28 06:00:45: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 52u (confidence: medium)
**📊 Quantité Réelle**: 52u

</details>




---

## False Positives (3)

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
| [PF0097] FILOU MOUTARDE 5 KG | 30 | Stock prédit: -13.5u (-15j restants) → prédit 30u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 36 | Stock prédit: 6.2u (14j restants) → prédit 36u mais non commandé |
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 6 | Stock prédit: -2.5u (-22j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:55:46.315Z*
