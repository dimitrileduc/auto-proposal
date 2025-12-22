# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S39562
- **Date commande** : 2025-10-06 09:21:48
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 10
- **Tokens**: 8,429 input + 27,668 output = 36,097 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 10 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 57.1% | Score équilibré global |

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
| **MAE** | 13.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 19.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 29.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 19.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 160 | 160 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 132 | 88 | 44.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 20 | 12 | 8.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 160u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 176u
- 📊 **Médiane historique**: 160u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 11 jours avec une activité accrue en début de semaine
- **Cycle médian (jours)**: 11
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-10 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 11 jours. La dernière commande datant du 29/09, la prochaine est prévue aux alentours du 10/10, soit dans 5 jours; le risque de rupture est donc confirmé. En termes de volume, bien que la dernière commande ait atteint 240u (indiquant une hausse saisonnière cohérente avec N-1), la quantité modale stable sur l'historique récent reste 160u. On privilégie cette quantité standard pour une commande unique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,041 tokens
- **Output**: 2,162 tokens
- **Total**: 3,203 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Orders**

I'm currently focused on the recent order history for product [PF0078]. Analyzing the interval between orders, I see a pattern developing. The time between the last two orders is 14 days, with the preceding order at 4 days. This might indicate an issue or change in customer behavior.


**Projecting Future Demand**

The median interval of approximately 10.5 days is helping me estimate the next order date. I predict an order around October 9th or 10th. Given that it's already been six days since the last order, I've categorized this as a "RISQUE OUI." I'm also cross-referencing this data with last year's order quantities, noting that the recent 240u order might indicate a trend similar to late 2024.


**Refining Order Quantity**

The previous 240u order, combined with last year's late September volumes, makes me lean toward anticipating a 240u order. However, the consistent 160u baseline makes me hesitant. Considering the strong seasonal impact, I'm leaning toward erring on the side of caution.


**Evaluating Quantity Recommendations**

Considering the strong seasonal effect, the historical order volume, and the fact the 240u order was very recent, it leans towards a potential increase. However, after further reflection, the 160u base volume remains the most frequent. The 160u quantity is still the safest recommendation, despite the recent 240u order. I'm noting the regular 11-day cycle.


**Confirming Quantity Recommendation**

I'm now revisiting the recommendation, aiming for a single order prediction. Considering the strong seasonal pattern and the most frequent volume of 160u, I'm sticking with that for a conservative approach. However, the recent 240u order and the high volumes last year warrant mentioning an increased demand profile. I’ll keep the final JSON recommendation at 160u.




</details>

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 132u vs Médiane: 104u (Réel: 88u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 132u
- 📊 **Baseline calculée**: 125.3u
- 📊 **Médiane historique**: 104u
- ✅ **Réel commandé**: 88u
- 📉 **Erreur LLM**: 44u (50.0%)
- 📉 **Erreur Médiane**: 16u (18.2%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 132u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier variant entre 14 et 18 jours
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-16 (dans 11j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: Commandes majoritairement en début de semaine (Lundi/Mardi)
- **Outliers détectés**: 52u, 18u

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier avec une accélération du volume correspondant à la saisonnalité (Produit 'Chasseur' entrant en pic d'activité en Sept/Oct). Les deux dernières commandes à 132u confirment une tendance haussière par rapport à la médiane historique de 104u. Avec une commande passée le 29/09, le stock devrait être renouvelé aux alentours du 16/10.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,040 tokens
- **Output**: 1,682 tokens
- **Total**: 2,722 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Production Schedules**

I'm currently focused on the production schedule for [PF0075] FILOU CHASSEUR 10 L, specifically its recent history over the last three months. I'm noting the intervals between production runs to spot any trends or potential bottlenecks. So far, the data shows runs on 2025-09-29, 2025-09-11, 2025-08-26, and 2025-08-19. I'll continue to analyze this data.


**Calculating the Stock Risk**

I've just finished calculating the predicted next production date, factoring in the median interval of 17 days. My analysis estimates a production run around October 16th. Given a target date of October 5th, I've assessed the risk of a stockout. With only 11 days remaining until the predicted run, the risk is deemed present, and a new order is definitely needed soon.


**Refining Ordering Quantities**

I'm now deeply analyzing the optimal order quantity for [PF0075]. Considering recent production runs (132, 132, 104, 104, 52), I've identified a rising trend. Seasonality plays a key role, with hunting season driving higher volumes. The median quantity is 118, but the mode and recent trend point to a baseline of 132. Therefore, I'll recommend 132 units.


**Evaluating Seasonality and Ordering**

I'm now diving deeper into the seasonality data, specifically comparing the September/October figures from N-1 (2024) to the current trends. Analyzing those volumes (156, 104, 104) against the current 132-unit orders, confirms my earlier suspicions about the hunting season. Furthermore, I validated that my predicted next production run date is likely October 16th and the baseline quantity of 132 is correct.




</details>

</details>


<details>
<summary><strong>3. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Irrégulier avec cycle médian d'environ 45 jours
- **Cycle médian (jours)**: 45
- **Dernière commande**: 2025-09-11
- **Prochaine prédite**: 2025-10-26 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très clairsemé avec des commandes sporadiques. Sur la base du cycle médian historique (45 jours), la prochaine commande est estimée autour du 26 octobre 2025. Comme cette date se situe à 21 jours de la date actuelle (inférieur au seuil de risque de 40 jours), une commande de réapprovisionnement d'une unité (quantité la plus fréquente et la plus récente) est recommandée.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 686 tokens
- **Output**: 1,286 tokens
- **Total**: 1,972 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Historical Sales Data**

I'm currently focused on the sales data for product [PF0084], specifically the FILOU CARBONNADES 800 GR. I've pinpointed the recent sales history from the last three months, which shows a single unit sold on September 11th. Now, I'm digging into the historical data from 2024 to find comparable sales figures.


**Assessing Risk Parameters**

I'm now calculating the risk associated with the product [PF0084], given the historical sales data. Using a median cycle time of 45 days, and taking into consideration the 24 days since the last sale, I've determined that the predicted next order date is October 26th, 2025. This puts it within the critical window, so I've flagged this with a YES for risk.


**Evaluating Data Patterns**

Now I'm diving deeper into the nuances of this product's sales. I've analyzed the intervals between orders, which average around 45 days, but with significant variation. The quantities ordered tend to be small, usually one or two units. I've noted the lack of a clear seasonal trend, which is expected with the sporadic order history. Risk is confirmed and baseline quantity is 1 unit.


**Synthesizing Order Recommendations**

I've finalized my analysis of product [PF0084] FILOU CARBONNADES 800 GR, taking everything into account. Risk is high, and the predicted next order date is October 26th, which is within the critical 40-day timeframe. I recommend a quantity of 1 unit, given its history. I have low confidence in the forecast.




</details>

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 20u vs Médiane: 30u (Réel: 12u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 20u
- 📊 **Baseline calculée**: 20u
- 📊 **Médiane historique**: 30u
- ✅ **Réel commandé**: 12u
- 📉 **Erreur LLM**: 8u (66.7%)
- 📉 **Erreur Médiane**: 18u (150.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 20u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle récent s'établissant autour de 44 jours avec un doublement des quantités par rapport à N-1
- **Cycle médian (jours)**: 44
- **Dernière commande**: 2025-09-11
- **Prochaine prédite**: 2025-10-25Suspense: 2025-10-25 (basé sur le cycle de 44j dont 24j déjà écoulés). Cependant, le cycle historique de 11j suggère une commande déjà due - par prudence, anticipation d'une commande imminente pour 20u car 24j se sont déjà écoulés depuis la dernière commande (qui semble être le nouveau rythme plus espacé mais plus volumineux). Chaque commande en 2025 est de 20u, contre 8u en 2024. Le volume compensant la baisse de fréquence. Commande prévue sous 20 jours, risque de rupture identifié sous le seuil des 40 jours historiques. Quantité recommandée de 20 unités basée sur les commandes de juillet et septembre 2025. 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La structure de commande a changé entre 2024 (commandes fréquentes de 8u) et 2025 (commandes espacées de 20u). La dernière commande date d'il y a 24 jours. Avec un cycle détecté de 44 jours, la prochaine est prévue pour le 25 octobre, soit dans 20 jours. Étant donné l'horizon B2B et l'incertitude du cycle (peu de points de données récents), une commande de 20u est nécessaire pour couvrir le besoin imminent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 933 tokens
- **Output**: 1,729 tokens
- **Total**: 2,662 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Orders**

I'm currently focused on the JF SAUCE BEARNAISE product, specifically its recent order history. I've noted two orders in 2025, with a four-month gap between them. I'm now analyzing the order quantities and the time intervals to understand the demand pattern. The target date for this product is in October 2025, and I am aiming to establish how well the current sales align.


**Predicting Demand Patterns**

I'm now diving into the specifics of the JF SAUCE BEARNAISE's order behavior. I've calculated a 44-day cycle from the two 2025 orders, but the historical data from 2024 shows a much tighter ~11-day interval. Given the target date in early October, the current 24-day gap since the last order presents a potential risk to meet demands. The next predicted order based on the recent cycle is October 25th.


**Assessing Order Implications**

I'm now assessing the risk of product rupture. Based on the 44-day cycle, the next order is estimated for October 25th, potentially missing the target date of October 5th. This aligns with the "cycle irrégulier s'allongeant vers 44 jours avec augmentation de volume" trend. The increased order volume to 20 units also needs careful monitoring.


**Concluding Demand Analysis**

I've determined a risk of product rupture. Based on my analysis, the next order is forecasted for October 25th, which is past the October 5th target. The recent cycle suggests a 44-day interval, indicating a need for a 20-unit order. I have medium confidence in these projections.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 05:47:52: 240u
- 2025-09-15 12:12:38: 160u
- 2025-09-11 08:10:53: 160u
- 2025-08-19 09:04:50: 160u
- 2025-08-12 09:41:05: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:21:41: 80u
- 2024-09-26 08:50:24: 240u
- 2024-09-16 11:50:49: 320u
- 2024-09-09 11:38:48: 240u
- 2024-08-27 11:41:12: 160u
- 2024-08-27 11:40:22: 320u
- 2024-08-26 08:27:23: 160u
- 2024-08-14 07:59:29: 160u
- 2024-08-12 08:25:02: 160u
- 2024-07-24 07:35:24: 320u
- 2024-07-24 06:06:23: 320u
- 2024-06-24 09:19:20: 320u

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 160u

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 05:47:52: 132u
- 2025-09-11 08:10:53: 132u
- 2025-08-26 15:29:17: 104u
- 2025-08-19 09:04:50: 104u
- 2025-07-29 06:11:06: 52u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 08:50:24: 156u
- 2024-09-16 11:50:49: 104u
- 2024-09-09 11:38:48: 104u
- 2024-08-27 11:40:22: 104u
- 2024-08-14 07:59:29: 208u
- 2024-07-24 07:35:24: 18u
- 2024-07-24 06:06:23: 156u
- 2024-06-17 07:40:59: 104u
- 2024-06-06 12:27:23: 104u
- 2024-05-31 06:50:36: 52u
- 2024-05-23 06:43:22: 104u
- 2024-05-06 09:33:16: 104u

**✅ Quantité LLM**: 132u (confidence: high)
**📊 Quantité Réelle**: 88u

</details>


<details>
<summary><strong>3. [PF0084] FILOU CARBONNADES 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 08:10:53: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-17 07:40:59: 2u
- 2024-06-06 12:27:23: 1u
- 2024-02-22 07:08:34: 2u
- 2024-01-08 09:20:28: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 08:10:53: 20u
- 2025-07-29 06:11:06: 20u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 08:50:24: 6u
- 2024-09-16 11:50:49: 10u
- 2024-09-09 11:38:48: 8u
- 2024-08-27 11:40:22: 10u
- 2024-08-14 07:59:29: 8u
- 2024-07-24 07:35:24: 6u
- 2024-07-24 06:06:23: 10u
- 2024-06-17 07:40:59: 6u
- 2024-06-06 12:27:23: 8u
- 2024-05-31 06:50:36: 6u
- 2024-05-23 06:43:22: 4u
- 2024-05-06 09:33:16: 6u

**✅ Quantité LLM**: 20u (confidence: medium)
**📊 Quantité Réelle**: 12u

</details>




---

## False Positives (6)

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
| [PF1140] FILOU SAUCE CHASSEUR 850G | 8 | Stock prédit: 2.3u (6j restants) → prédit 8u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Stock prédit: 0.7u (38j restants) → prédit 1u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.6u (30j restants) → prédit 1u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 4 | Stock prédit: 1.7u (13j restants) → prédit 4u mais non commandé |
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Stock prédit: -0.6u (-28j restants) → prédit 1u mais non commandé |
| [PF3290] JF MAYO BARAKI 925ML | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:49:55.659Z*
