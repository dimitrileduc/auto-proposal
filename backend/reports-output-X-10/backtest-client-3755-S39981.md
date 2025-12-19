# Rapport Backtest - Client BVBA DRINK & FOOD

## Contexte

- **Client** : BVBA DRINK & FOOD (ID: 3755)
- **Commande réelle** : S39981
- **Date commande** : 2025-10-29 07:28:14
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 5
- **Tokens**: 13,169 input + 9,454 output = 22,623 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 5 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 75.0% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

## True Positives (3)

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
| [PF0078] FILOU CHASSEUR 5 L | 80 | 80 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 80u
- 📊 **Baseline calculée**: 80u
- 📊 **Médiane historique**: 80u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 80u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière environ tous les 17-18 jours avec une stabilité parfaite des volumes.
- **Cycle médian (jours)**: 17
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-10-31 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle d'approvisionnement est extrêmement régulier avec un intervalle médian de 17,5 jours entre les commandes. La dernière commande datant du 14 octobre, la prochaine commande est attendue autour du 31 octobre (dans 3 jours), ce qui justifie un risque de rupture imminent. Les quantités commandées sont systématiquement de 80 unités dans l'historique récent et correspondent aux volumes de base observés en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,788 tokens
- **Output**: 1,851 tokens
- **Total**: 4,639 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent History**

I'm currently reviewing the recent history of the [PF0078] FILOU CHASSEUR  5 L product, focusing on the last three months. I see a couple of 80u transactions, spaced 15 days apart. I'll need to analyze the intervals and quantities more closely to see if there are any emerging trends.


**Calculating Theoretical Order Date**

The median interval between the last four orders is 17.5 days. Based on this, and the last order date (October 14, 2025), I estimate the next order around October 31st or November 1st, 2025. It's safe to say the client will need to order within the next few days, as it's nearly the end of October.


**Assessing Ordering Patterns**

Now I'm delving deeper into the data, confirming the client's regular ordering behavior of 80 units, with intervals averaging 17 to 18 days. The previous year's data reveals a similar pattern, albeit with some instances of double orders. The next order is highly likely within the next few days.


**Summarizing Key Findings**

I've now compiled the data and the analysis. Based on the consistent 80-unit orders every 17-18 days, with the last order on October 14th, the next order is due around October 31st. I have a very high confidence level in this prediction.


**Synthesizing Key Information**

Now I am completely confident about the order. Given the established 17-18 day cycle, the next order is due around October 31st. With an 80-unit baseline, and no recent outliers, I recommend ordering 80 units. I am confident in this recommendation.




</details>

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 25 jours
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian calculé à 25 jours basé sur les intervalles récents de 28, 22 et 25 jours. La prochaine commande théorique est prévue le 08/11/2025, soit dans 11 jours, confirmant un risque de rupture imminent. En termes de volume, la médiane des 4 dernières commandes est de 2 unités (données: 1, 3, 3, 1). Ce volume de 2 unités est parfaitement cohérent avec l'historique N-1 de la même période (2 unités en sept et oct 2024).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,718 tokens
- **Output**: 2,176 tokens
- **Total**: 4,894 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Demand**

The data on product [PF0085] FILOU CURRY KET CHUP 10 KG has been reviewed. The sales history reveals a pattern of sporadic, low-volume orders in previous months. Initial findings show a single unit sold on 2025-10-14, 3 units on 2025-09-16, and again 3 units on 2025-08-25. July 31st shows no sales. The next step is to project demand for the next 30 days.


**Calculating Order Intervals**

I've calculated the time intervals between past orders for [PF0085], arriving at intervals of 28, 22, and 25 days. The median interval is 25 days, and I'm using this to project the next order date. Given the last order on 2025-10-14, I predict the next order will be around 2025-11-08.


**Projecting Future Volumes**

I'm now integrating the N-1 data to refine my volume forecast. I've noted the median quantity in prior Octobers and Novembers is 2 units, which is useful context. Considering the recent trend shows a slight decline from 3 to 1 unit, and blending this with the historical median, I'll forecast 1 unit for the next order.


**Evaluating Final Recommendation**

After reviewing all the data and calculations, the final recommendation is in. The frequency is a regular monthly cycle, or about 25 days. Given the last order on 2025-10-14, the next order is projected around 2025-11-08. With a mix of recent and historical data, the recommended order quantity is 2 units. I'm feeling confident given the consistent patterns observed.


**Confirming the Conclusion**

I'm now fully confident in the recommendation. The calculations show a 25-day ordering cycle, with a predicted order date of 2025-11-08. With 11 days left until the next expected order, there is a risk, and the forecasted quantity is 2 units, based on a blended approach. This balances recent sales and historical context, offering a reliable forecast.




</details>

</details>


<details>
<summary><strong>3. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 29 jours, client actuellement en retard de plus de 30 jours
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-10-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian est de 29 jours. La dernière commande remonte au 2025-08-25 (il y a 64 jours), plaçant le client en retard important sur son rythme habituel. L'historique N-1 montre une commande spécifique de 3u le 24 octobre 2024, confirmant un besoin à cette période précise. Bien que les dernières commandes étaient de 1u, la médiane historique de 2u est privilégiée pour assurer la disponibilité face à ce retard de cycle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,661 tokens
- **Output**: 2,164 tokens
- **Total**: 4,825 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I've been examining the recent sales data for the FILOU PROVENCALE product. It looks like the last two recorded sales were in July and August of 2025, with one unit sold in each month. I'm now comparing this to the same period in the previous year to identify any trends.


**Calculating Sales Interval Lengths**

I've calculated the intervals between sales for both the recent and historical periods. It is taking some time to find the median of the historical sales intervals, which are a bit sporadic. There seems to be a significant gap between the last few historical sales periods. I'm noting the results now.


**Evaluating The Sales Cycle**

I'm now calculating the sales cycle for the FILOU PROVENCALE product, and it appears the client is late on their usual cycle. Comparing the 64 days since the last order to the 29-day median interval paints a clear picture. The N-1 data supports this, with activity in October 2024. My next step will be calculating quantity.


**Finalizing Order Recommendations**

I'm now determining the order quantity for the FILOU PROVENCALE product. Given the client is late in their cycle, I'm analyzing the data. The mode and median quantities are 2u, and the N-1 data shows a 3u order at this time last year. I'm recommending a 2u order based on the strong frequency of that quantity.


**Synthesizing Order Recommendations**

I've determined that a 2u order is a solid recommendation for the FILOU PROVENCALE product. It aligns with the historical median quantity, though the N-1 data from October 2024 suggests a 3u order at this point in the cycle. This supports a 2u order.


**Considering Cycle Lateness**

The FILOU PROVENCALE product is late on its cycle. I'm now taking that lateness into account in my recommendations. The N-1 data shows a 3u order in October, one year ago, which I'm considering. The median quantity is 2u, so I am leaning toward a 2u order, as the safest approach.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 06:43:12: 80u
- 2025-09-29 15:25:16: 80u
- 2025-09-11 08:18:04: 80u
- 2025-08-25 08:11:04: 80u
- 2025-07-31 05:42:22: 80u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 09:57:51: 80u
- 2024-09-24 07:11:41: 160u
- 2024-08-21 11:24:26: 80u
- 2024-08-13 06:35:30: 80u
- 2024-07-25 06:08:11: 80u
- 2024-06-12 13:04:35: 160u
- 2024-06-06 09:56:07: 80u
- 2024-05-27 08:24:25: 80u
- 2024-05-03 12:12:17: 80u
- 2024-04-22 11:43:15: 160u
- 2024-04-08 12:25:11: 80u
- 2024-03-20 08:07:07: 80u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 06:43:12: 1u
- 2025-09-16 05:58:23: 3u
- 2025-08-25 08:11:04: 3u
- 2025-07-31 05:42:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 09:57:51: 2u
- 2024-09-24 07:11:41: 2u
- 2024-08-21 11:24:26: 1u
- 2024-08-13 06:35:30: 2u
- 2024-06-25 09:29:04: 4u
- 2024-06-12 13:04:35: 4u
- 2024-05-27 08:24:25: 2u
- 2024-05-03 12:12:17: 1u
- 2024-04-25 08:06:34: 3u
- 2024-03-20 08:07:07: 1u
- 2023-12-12 09:14:02: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [PF0077] FILOU PROVENCALE 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 08:11:04: 1u
- 2025-07-31 05:42:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 09:57:51: 3u
- 2024-08-21 11:24:26: 1u
- 2024-08-13 06:35:30: 1u
- 2024-07-25 06:08:11: 2u
- 2024-06-12 13:04:35: 2u
- 2024-05-27 08:24:25: 2u
- 2024-04-25 08:06:34: 1u
- 2024-03-20 08:07:07: 1u
- 2024-02-05 07:49:45: 2u
- 2023-12-12 09:14:02: 2u
- 2023-12-07 06:46:14: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (2)

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
| [PF0088] FILOU VOL AU VENT 800 GR | 2 | Stock prédit: 1.0u (30j restants) → prédit 2u mais non commandé |
| [PF3272] JF PEPPER MAYONNAISE 925ML | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T09:31:56.235Z*
