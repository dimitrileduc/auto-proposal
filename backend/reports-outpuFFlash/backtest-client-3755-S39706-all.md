# Rapport Backtest - Client BVBA DRINK & FOOD

## Contexte

- **Client** : BVBA DRINK & FOOD (ID: 3755)
- **Commande réelle** : S39706
- **Date commande** : 2025-10-14 06:43:12
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 5
- **Tokens**: 4,315 input + 11,630 output = 15,945 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 2.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 2.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (2)

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
| [PF0085] FILOU CURRY KETCHUP  10 KG | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


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
- **Pattern temporel**: Commandes régulières toutes les 2 à 3 semaines environ
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-29
- **Prochaine prédite**: 2025-10-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande très stable avec une médiane de 18 jours entre chaque commande. La dernière commande datant du 29 septembre, la prochaine est prévue autour du 17 octobre (soit dans 4 jours par rapport à la date du jour). Le volume unitaire est systématiquement de 80u dans l'historique récent, ce qui en fait la quantité cible évidente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,028 tokens
- **Output**: 1,352 tokens
- **Total**: 2,380 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Production Timelines**

I'm currently focused on the production schedule for FILOU CHASSEUR. The 80u output increments appear consistent, but the intervals between them vary. I'm investigating the potential causes of these fluctuations and assessing how they might impact the target date.


**Evaluating Order Timing**

I've been analyzing the order history for FILOU CHASSEUR, specifically focusing on the intervals between orders. Based on the median cycle of approximately 18 days and the last order date, I've predicted the next order should be around October 17th. With today being October 13th, I'm identifying a potential risk of stockout within four days and recommending a 80u order.


**Recommending Order Quantity**

Based on a detailed analysis, I've determined the customer's typical order cycle for FILOU CHASSEUR is about 18 days, with the last order on September 29th. Considering the upcoming date of October 17th, I recommend placing an 80u order. My confidence level is high and the need to restock is imminent.




</details>

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 22 à 25 jours avec commandes en début de semaine (Lundi/Mardi)
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-09-16
- **Prochaine prédite**: 2025-10-10 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
La dernière commande remonte à 27 jours, dépassant légèrement le cycle médian de 24 jours identifié. Nous sommes actuellement le 13/10 (Lundi), jour préférentiel de commande pour ce client. Bien qu'un pic à 6 unités ait été observé à la même date en 2023, la tendance récente s'est stabilisée à 3 unités lors des deux dernières commandes. Je recommande donc de suivre cette tendance stable de 3 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 931 tokens
- **Output**: 1,660 tokens
- **Total**: 2,591 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product History**

I'm currently reviewing the history of the FILOU CURRY KET CHUP product, specifically [PF0085]. It seems that in the last three months, the product has had two recorded uses: one on 2025-09-16, and another on 2025-08-25. The interval between these uses appears to be 22 days, so I am going to analyze the specifics further.


**Predicting Product Demand**

I've calculated the predicted next order date as October 10th, based on a 24-day cycle derived from the product's recent usage history. Considering today is October 13th, the predicted date has already passed. The last order was 27 days ago, well within the 40-day risk threshold. Thus, I've confirmed a definite risk. Recent order quantities have been 3 units.


**Evaluating Consumption Trends**

I'm now focusing on consumption patterns, including both recent and N-1 data. While recent orders show consistency, the comparison with the previous year suggests a potential October peak. Despite this, I'm sticking with a baseline of 3 units based on the most frequent recent quantities, although, I'm keeping the historical data in mind.


**Calculating Recommended Order**

I've determined a recommended quantity of 3 units, given recent order patterns and the 24-day cycle. The product is also at a moderate level of risk, confirming my earlier prediction. Despite an October peak possibility, the recent consistency makes the 3-unit baseline the most appropriate for now.


**Refining Cycle and Quantity**

I've re-examined the cycle and find it is 22-25 days, with the last order 27 days ago, confirming the need to reorder. Analyzing the history, I've confirmed a 3-unit baseline, aligning with recent, consistent orders and a consideration for possible weekly ordering, considering today's date.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 15:25:16: 80u
- 2025-09-11 08:18:04: 80u
- 2025-08-25 08:11:04: 80u
- 2025-07-31 05:42:22: 80u
- 2025-07-23 08:42:42: 80u

**📅 Commandes N-1 (même période année dernière):**
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
- 2024-02-29 06:52:13: 80u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 05:58:23: 3u
- 2025-08-25 08:11:04: 3u
- 2025-07-31 05:42:22: 1u

**📅 Commandes N-1 (même période année dernière):**
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
- 2023-10-13 09:09:05: 6u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 1u

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
| [PF0088] FILOU VOL AU VENT 800 GR | 1 | Stock prédit: 1.5u (38j restants) → prédit 1u mais non commandé |
| [PF3272] JF PEPPER MAYONNAISE 925ML | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:49:44.633Z*
