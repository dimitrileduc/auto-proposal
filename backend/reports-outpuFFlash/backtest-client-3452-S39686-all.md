# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S39686
- **Date commande** : 2025-10-13 07:49:42
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,402 input + 10,963 output = 14,365 total


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
- **Pattern temporel**: Cycle hebdomadaire identifié (env. 8 jours)
- **Cycle médian (jours)**: 8
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-15-2025-09-16-01-01-01-01-01-01-01-2025-09-16-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-09-16-01-01-2025-09-16-01-01-2025-09-16-00-00-00-01-01-01-01-2025-09-16-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-09-16-01-01-01-2025-09-16-01-01-2025-09-16-01-01-01-01-2025-09-16-01-01-01-01-01-2025-09-16-01-01-2025-09-16-01-01-2025-09-16-01-01-01-2025-09-16-01-01-01-01-01-01-2025-09-16-01-01-2025-09-16-01-01-01-01-2025-09-16-01-01-01-01-01-2025-09-16-01-01-01-01-01-01-2025-09-16-01-01-01-2025-09-16-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-2025-09-16-01-01-01-2025-09-16-01-01-01-01-01-2025-09-16-01-01-01-01-01-2025-09-16-01-01-01 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 390u

**🧠 Raisonnement LLM:**
D'après l'historique récent, le client commande en moyenne 130u tous les 8 jours. La dernière commande date du 8 Septembre, soit il y a 34 jours. Ce délai dépasse largement le cycle habituel, signalant un risque immédiat de rupture ou un besoin imminent en B2B. Le volume de 130u est la quantité la plus fréquente et stable.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 814 tokens
- **Output**: 2,339 tokens
- **Total**: 3,153 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Data Points**

I'm currently tracking the sales data for product PF3301. The latest entry reveals a consistent pattern of transactions, with the most recent one occurring on 2025-10-12. I'm noting the intervals between sales dates to understand any recurring cycles in demand. Specifically, I'm examining the quantities and their respective timing.


**Forecasting Potential Shortfalls**

Based on the order history, I've calculated a median cycle of roughly 7.5 days. The product hasn't been reordered in 34 days, indicating a substantial delay compared to the typical weekly pattern. I'm now assessing the risk of a stockout, as the current lag significantly exceeds the established cycle, signaling potential supply issues. The next step is to predict demand.


**Evaluating Quantity & Timing**

I'm now assessing the frequency of past orders to refine my projections, and analyzing the product's sales trends and demand intervals. I've noted a stable 130u baseline and some seasonal spikes, which informs my recommendation. Based on the past data I have derived a frequency pattern, detected outliers, and analyzed seasonality, which has led me to re-evaluate the risk of stockout.


**Predicting Urgent Reorder Needs**

Now I'm refining my calculations, focusing on the urgency of the reorder. Given the 34-day lapse since the last order, and a regular 8-day cycle, I've determined that action is required immediately. The analysis highlights a stable baseline of 130u, and I recommend a reorder of that quantity due to the considerable delay.




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
- **Pattern temporel**: Cycle hebdomadaire strict (principalement le lundi)
- **Cycle médian (jours)**: 7
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 196u

**🧠 Raisonnement LLM:**
Le produit suit un cycle de commande très régulier de 7 jours avec une quantité constante de 98u. Bien que la dernière commande remonte au 08/09 (soit 34 jours d'écart), le délai est inférieur au seuil de risque de 40 jours défini. Une commande immédiate de 98u est préconisée pour le prochain créneau habituel (lundi 13/10) afin de pallier l'absence de commande en septembre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 814 tokens
- **Output**: 1,488 tokens
- **Total**: 2,302 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product History**

I'm currently focused on the history of the PF3315 DLL VINAIGRETTE YOGORETTE PET 450ML product. Recent data points show consistent weekly values of 98u, specifically from Mondays and one Tuesday, across August and September of 2025. I need to consider why there's a lack of data for the current month and if this is a seasonal change.


**Assessing Data Anomalies**

I'm now zeroing in on the conspicuous absence of orders in October. The usual 7-day cycle, as observed in August and September, hasn't repeated. Given that the last order was on September 8th, and it's now October 12th, a stockout scenario is a major concern. The sudden halt after consistent weekly orders demands further investigation, specifically a dive into the customer's ordering behavior.


**Investigating Ordering Patterns**

Now I'm delving deeper into the customer's behavior. The 34-day gap since the last order of the PF3315 DLL product is alarming, especially considering the usual 7-day cycle. Comparing the September 2024 orders with the current situation, coupled with the consistent 98u baseline, strongly points towards a potential need for an immediate order.


**Confirming Replenishment Need**

I've now refined the analysis, confirming that a replenishment of 98u is necessary. The 7-day cycle, overwhelmingly on Mondays, points to an order needed by October 13th. The lack of orders since September 8th, alongside the consistent 98u baseline, strongly implies an urgent need to address the customer's apparent pause in ordering. I must communicate this promptly.




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

*Rapport généré automatiquement le 2025-12-19T12:48:12.262Z*
