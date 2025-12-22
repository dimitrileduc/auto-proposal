# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S39686
- **Date commande** : 2025-10-13 07:49:42
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 4,186 input + 7,972 output = 12,158 total


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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [PF3301] DLL MAYONNAISE CITRON 300ML | 130 | 130 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 98 | 98 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3301] DLL MAYONNAISE CITRON 300ML</strong> - LLM: 130u vs Médiane: 130u (Réel: 130u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 130u
- 📊 **Baseline calculée**: 130u
- 📊 **Médiane historique**: 130u
- ✅ **Réel commandé**: 130u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 130u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle hebdomadaire court (~8 jours) avec une pause apparente en septembre
- **Cycle médian (jours)**: 8
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-14 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 390u

**🧠 Raisonnement LLM:**
Le cycle habituel de 8 jours est interrompu depuis le 08/09 (34 jours d'inactivité). Cependant, l'historique N-1 montre également une commande début octobre après une période similaire. Le volume de 130u est extrêmement stable sur 2024 et 2025 (médiane parfaite). Une commande est imminente pour reconstituer le stock après cette pause de 4 semaines.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,010 tokens
- **Output**: 1,811 tokens
- **Total**: 2,821 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Trends**

I'm currently focused on the sales data for product PF3301. The recent history reveals some interesting patterns. Specifically, I'm noting the sales volumes and the intervals between sales dates. Examining the 2025 data, I'm trying to identify potential trends, like the spike on August 22nd.


**Assessing Order Frequency**

I'm now analyzing the order intervals for product PF3301 to identify a typical cycle. The median interval seems to be around 7.5 days, based on recent 2025 sales data. Considering the last order was on September 8th, I initially predicted the next order around September 16th. However, since it's now October 12th, and 34 days have elapsed, the customer is overdue. I'm leaning toward a possible monthly refill or stockout scenario, as is common in B2B.


**Calculating Future Orders**

I've examined the 2024 order history, which aligns with the 2025 data. The client's order on October 1st, 2024, mirrors our current timeframe. Based on the 7-10 day cycle, I expected an order around September 16th. Given the 34-day gap and a stable "130u" quantity trend, I will recommend 130 units. This suggests the client is due, and a stockout is plausible.


**Refining Prediction Accuracy**

I'm now refining the prediction date for the next order. Given the 2025-09-08 last order, the usual 8-day cycle is significantly off. Considering the 2024-10-01 order occurred roughly 22 days after the prior, and given today's date (Oct 12), the client is already overdue. The recommendation for 130 units remains solid, and the probability of an imminent order is high.


**Determining Order Quantity**

I'm now zeroing in on the quantity to recommend. While the 7-10 day cycle is consistent, the past data reveals a stable baseline order of 130 units. Considering both the history and recent patterns, I'm confident in recommending a quantity of 130, especially given the client's overdue status.




</details>

</details>


<details>
<summary><strong>2. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - LLM: 98u vs Médiane: 98u (Réel: 98u)</summary>

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
- **Pattern temporel**: cycle hebdomadaire (7 jours) identifié le lundi
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 196u

**🧠 Raisonnement LLM:**
Le produit présente une régularité parfaite de 98 unités par semaine tous les lundis. Bien qu'aucune commande n'ait été enregistrée depuis le 08/09, le cycle historique de 7 jours et le jour habituel de commande (lundi) suggèrent une reprise imminente pour la date du 13/10 (soit J+1 par rapport à la date de l'analyse). Le volume reste stable à 98u malgré des volumes plus élevés en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,010 tokens
- **Output**: 1,763 tokens
- **Total**: 2,773 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Production Volume Trends**

I'm currently focused on the [PF3315] DLL VINAIGRETTE  YOGORETTE PET 450ML product and its production history. Analyzing the past three months, specifically the weekly production data from September 2025 back to August, the production volume has remained consistently at 98 units each week. It's Monday's data that needs closer inspection.


**Evaluating Order Cycle Discrepancies**

I've examined the historical data further, and the weekly production pattern seems consistent, *except* for the notable absence of recent orders. My calculations show the client's order cycle is significantly overdue, with a 34-day gap since the last order. This variance raises serious stockout concerns.


**Projecting Demand and Risk**

Given the consistent weekly order pattern, I'm now zeroing in on predicting the next order volume. Analyzing the production quantities, I'm leaning toward a base quantity of 98 units, reflecting the stable trend observed in the past three months. The outlier, a doubled order of 196u, doesn't suggest a significant seasonality. The absence of orders for 34 days, however, significantly increases the stockout risk, so I'm also preparing for a possible replenishment.


**Calculating Expected Replenishment**

My current focus is on pinpointing the *exact* quantity needed for the upcoming order. Considering the stable production rate of 98 units, and the 34-day delay since the last order, I'm leaning toward requesting 98 units, or the base quantity. Despite the risk of stockout, I'll need to verify that this base order still fits the client's current needs, since this analysis implies the order is overdue.


**Predicting the Upcoming Order**

I've re-examined the data and confirmed the 34-day gap since the last order. My analysis now strongly suggests the order is overdue. Although the risk is high, I'm predicting the next order will be for the usual base quantity of 98 units, to resume the prior stable production rate, assuming it resumes.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3301] DLL MAYONNAISE CITRON 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 10:16:06: 130u
- 2025-09-01 08:56:14: 130u
- 2025-08-22 08:51:08: 390u
- 2025-08-14 13:30:24: 130u
- 2025-08-11 07:01:13: 130u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 06:38:15: 130u
- 2024-09-09 11:24:26: 130u
- 2024-08-06 10:01:31: 130u
- 2024-07-11 10:01:48: 390u

**✅ Quantité LLM**: 130u (confidence: high)
**📊 Quantité Réelle**: 130u

</details>


<details>
<summary><strong>2. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 10:16:06: 98u
- 2025-09-01 08:56:14: 98u
- 2025-08-25 08:08:15: 98u
- 2025-08-19 09:02:08: 98u
- 2025-08-14 13:30:24: 196u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 07:05:31: 196u
- 2024-09-23 11:56:39: 196u
- 2024-08-06 10:01:31: 98u
- 2024-07-11 10:01:48: 392u

**✅ Quantité LLM**: 98u (confidence: high)
**📊 Quantité Réelle**: 98u

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
| [PF3300] DLL MAYONNAISE OEUFS 300ML | 130 | Stock prédit: 110.0u (4j restants) → prédit 130u mais non commandé |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 490 | Stock prédit: -833.0u (-26j restants) → prédit 490u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:43:08.609Z*
