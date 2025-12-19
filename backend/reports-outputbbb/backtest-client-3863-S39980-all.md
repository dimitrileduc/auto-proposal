# Rapport Backtest - Client C.F. GRELL NACHF. NATURKOST

## Contexte

- **Client** : C.F. GRELL NACHF. NATURKOST (ID: 3863)
- **Commande réelle** : S39980
- **Date commande** : 2025-10-29 07:42:30
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 9,677 input + 6,897 output = 16,574 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 50.0% | 4 produits réels, 2 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

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
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 32 | 64 | 32.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 32 | 16.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 64u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 28u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 64u
- 📉 **Erreur LLM**: 32u (50.0%)
- 📉 **Erreur Médiane**: 32u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande cyclique par multiple de 14 jours
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-10-27 (dans -1j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Habituellement le mercredi ou lundi. Client en retard de 1 jour sur son cycle médian.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très régulier (médiane de 14 jours). La dernière commande date du 13 octobre, ce qui plaçait la prochaine au 27 octobre. Au 28 octobre, le client est techniquement en retard, ce qui maximise le risque de rupture. Les quantités sont systématiquement des multiples de 16 (unité de conditionnement probable). Bien que les deux dernières commandes étaient de 16u, le volume moyen par cycle de 14 jours oscille entre 32u et 48u. On recommande 32u pour couvrir le besoin immédiat et sécuriser le stock.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,511 tokens
- **Output**: 1,723 tokens
- **Total**: 4,234 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing the Product Details**

I am taking a closer look at the MF0042 product, specifically the tomato and bear garlic spread. My focus is on the 250g offering, and I am zeroing in on the data from the past three months. Right now, I am tracking activities logged on the 13th and 8th of this month.


**Calculating the Order Risk**

I've crunched the numbers on the MF0042 tomato and bear garlic spread, focusing on the 250g size. Comparing the median cycle of 14 days against the recent order history, I've determined that the client is one day "late". Risk of stockout appears high over the next 30 days.


**Investigating Order Behavior**

I'm now examining the quantities ordered for the MF0042 tomato and bear garlic spread. The last two orders were 16 units, lower than the N-1 values. I'm investigating if the customer is splitting a larger order into two smaller ones, given the shorter 5-day interval between recent orders.


**Finalizing the Recommendation**

I've decided on the optimal order quantity. Considering the client's past behavior, the 32-unit recommendation balances the need with a slight upward adjustment. This is based on a rolling average and my understanding of the customer's typical ordering habits. I am now confident in my analysis.




</details>

</details>


<details>
<summary><strong>2. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 32u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 16u (50.0%)
- 📉 **Erreur Médiane**: 16u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières avec quantité fixe de 16u, intervalle médian de 9-10 jours
- **Cycle médian (jours)**: 9.5
- **Dernière commande**: 2025-10-13
- **Prochaine prédite**: 2025-10-23 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle d'approvisionnement détecté présente une médiane de 9,5 jours (intervalles de 14 et 5 jours). Avec une dernière commande au 13 octobre, le client est théoriquement en retard de 5 jours par rapport à son rythme habituel au jour actuel (28 octobre), ce qui rend une nouvelle commande très probable à très court terme. La quantité est strictement stable à 16 unités sur toutes les occurrences, suggérant un conditionnement par carton complet ou une unité de logistique fixe. Nous recommandons donc de prévoir une commande de 16 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,146 tokens
- **Output**: 2,114 tokens
- **Total**: 4,260 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Production Trends**

My focus has shifted to the MF0062 MF Tarti Betterave rouge product. I'm crunching the recent production data, specifically looking at the 30-day horizon from today, 2025-10-28. The 16 units produced on 2025-10-13 are a key data point, and I'm currently working to integrate the missing data from the 8th of October to gain a clearer picture of the production trends.


**Determining Cycle Time and Risk**

The analysis confirms a consistent order quantity of 16 units, suggesting a standard packaging size. However, the order frequency appears irregular, with a calculated median cycle of roughly 9.5 days. Considering the 2025-10-13 order date, the customer is now late based on this median cycle, triggering a risk assessment.


**Refining Production Predictions Now**

I'm now zeroing in on predicting future needs. Considering the stable quantity of 16 units per order and the 9.5-day cycle, the client is now overdue. With the current date, I'm adjusting for imminent demand. The 30-day forecast will confidently predict a need for 16 units, considering the "late" status.


**Calculating Risk and Quantity**

The customer is late; the 9.5-day cycle suggests an order around October 23rd. The fixed packaging of 16 units has me projecting an immediate requirement for that quantity. I'm focusing on the 30-day forecast, confident of a 16-unit order.


**Concluding Imminent Order Assessment**

Now, I'm synthesizing all data. The analysis shows a stable pattern of 16-unit orders. Given the 9.5-day cycle, and that the client is now late (October 28th), a 16-unit order is expected immediately.


**Evaluating Theoretical Order Dates**

I'm now calculating the "theoretical" order date using the median cycle of 9.5 days. With the last order on 2025-10-13, the calculated date is 2025-10-23. Since the current date is 2025-10-28, it implies the client is already late. I'm taking the late status into account for the final recommendations.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 14:04:36: 16u
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 48u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 06:48:32: 48u
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 48u
- 2024-08-23 06:50:23: 48u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 64u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-24 09:36:53: 64u
- 2024-05-13 07:07:14: 48u
- 2024-04-19 09:15:16: 64u
- 2024-03-22 09:26:53: 32u

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 64u

</details>


<details>
<summary><strong>2. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 14:04:36: 16u
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 32u

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
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 48 | Stock prédit: 21.2u (11j restants) → prédit 48u mais non commandé |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | Stock prédit: 4.5u (5j restants) → prédit 16u mais non commandé |


---

## False Negatives (2)

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
| [VID0009] Consigne casier | 96 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 576 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T08:55:04.348Z*
