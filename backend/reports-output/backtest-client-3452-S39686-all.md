# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S39686
- **Date commande** : 2025-10-13 07:49:42
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,402 input + 8,197 output = 11,599 total


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
- **Pattern temporel**: Intervalle variable, passant de hebdomadaire en août/septembre à mensuel historiquement
- **Cycle médian (jours)**: 8
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-09-16 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 390u

**🧠 Raisonnement LLM:**
La dernière commande date du 2025-09-08. Sur la base du cycle récent (médiane de 8 jours), la commande est en retard de 26 jours. Même selon l'historique N-1 (commande le 01/10/2024), nous avons dépassé la date de réapprovisionnement habituelle. La quantité de 130u est extrêmement constante (4 des 5 dernières commandes récentes et 3 des 4 commandes N-1).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 814 tokens
- **Output**: 2,231 tokens
- **Total**: 3,045 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Recent Sales Trends**

I'm currently working on analyzing the sales data for product [PF3301]. I've started by examining the last three months of history. It looks like there's a repeating pattern. The sales numbers seem to be fluctuating, with noticeable drops after a 10-day period. Further investigation is needed to determine the exact nature of this pattern.


**Refining Order Prediction Analysis**

I've examined the recent sales history for product [PF3301], focusing on the intervals between orders. Calculating the median interval from the past few orders, it comes to approximately 8 days. However, I've noted the wide range in order frequency: 7, 10, 8, and 3 days. I also looked at the historical data, where orders came roughly monthly. Given the current date and the elapsed time since the last order (34 days), I'm assessing the potential risks associated with not ordering soon.


**Forecasting Order Quantity Needs**

I've examined the recent sales for the [PF3301] product. Currently, the product is overdue for an order, with 34 days since the last purchase. My analysis points to a stable demand, with 130 units as the most frequent and median order quantity, though I noticed a past outlier (390 units), suggesting the possibility of bulk purchases. Given the elapsed time, I conclude a new order is needed, at the baseline of 130 units.


**Confirming Order Recommendation**

I've examined the product's recent sales data for the [PF3301] product. Based on the 34-day elapsed time since the last order, and an 8-day cycle, I've confirmed a high risk of depletion. Given the stable demand for 130 units and the recent bulk order in history, I will recommend the standard order quantity of 130.


**Recommending Immediate Action**

Based on analyzing the product [PF3301]'s data, the 34-day interval since the last order indicates an immediate need. Although recent cycles were shorter, at 8 days, the extended gap, and the historical pattern from 2024, suggest the current situation poses a risk. I recommend ordering 130 units, the baseline quantity.


**Formulating a Recommendation**

I've finished the analysis for the [PF3301] product, and the situation warrants immediate action. The 34-day lapse since the last order, far exceeding the typical 8-day cycle, presents a clear risk. The recommended order quantity remains 130 units, with high confidence.




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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Hebdomadaire (cycle de 7 jours)
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-12 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 196u

**🧠 Raisonnement LLM:**
Le client a suivi un cycle hebdomadaire strict de 98 unités entre la mi-août et début septembre 2025. Avec une dernière commande enregistrée le 08/09, le délai actuel est de 34 jours, ce qui est inférieur au seuil de risque de 40 jours défini et indique un retard important par rapport au cycle habituel de 7 jours. La quantité recommandée de 98u se base sur la médiane et le mode des commandes récentes, écartant le pic exceptionnel de 196u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 814 tokens
- **Output**: 2,090 tokens
- **Total**: 2,904 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the recent history of the PF3315 DLL VINAIGRETTE YOGORETTE. The data shows consistent weekly updates of 98u, with the last update on September 8th. I'm focusing on the consistency of the data and any potential anomalies in the update frequency.


**Calculating Replenishment Risk**

I've calculated the time elapsed since the last order for the PF3315 product, arriving at 34 days. Given the observed weekly update pattern, this signifies a considerable delay. I'm now focusing on the risk of a potential rupture within the next 30 days due to this overdue replenishment. I am extrapolating the predicted next date based on the consistent, although irregular, intervals observed in recent data.


**Examining Order Trends**

I am now focusing on the historical frequency of orders. I've noted a consistent weekly pattern in August and September. However, this regular cadence has ceased for 34 days, indicating a substantial deviation from the established trend. I'm investigating the potential causes for this disruption, and considering their impact.


**Determining Order Recommendations**

I'm now assessing the order quantity. The recent trend strongly favors 98 units per order, and the same pattern was present in the prior year. While there's an outlier of 196 units, its occurrence is rare, suggesting a baseline of 98 units for a stable demand. Given the 34-day delay and expected weekly rhythm, I recommend the same quantity to address immediate needs.


**Evaluating Product Risk**

I've now focused on the immediate risk associated with the PF3315 product, and noted the 34-day delay since the last order. Despite a history of weekly orders, there's a significant deviation from the anticipated replenishment cycle. As such, I'm now evaluating whether this duration presents a risk, given the established patterns, along with the consistent quantity.


**Determining Replenishment Strategy**

I'm now assessing the best course of action. Given the substantial 34-day delay and a history of weekly orders, I'm recommending an immediate order of 98 units, reflecting the consistent baseline demand. I'm focusing on minimizing the risk of a rupture.




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

**✅ Quantité LLM**: 98u (confidence: medium)
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
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 392 | Stock prédit: -833.0u (-26j restants) → prédit 392u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T11:15:28.559Z*
