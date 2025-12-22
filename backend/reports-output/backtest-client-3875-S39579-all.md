# Rapport Backtest - Client E.L.D. GMBH

## Contexte

- **Client** : E.L.D. GMBH (ID: 3875)
- **Commande réelle** : S39579
- **Date commande** : 2025-10-06 12:04:21
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 4,393 input + 12,798 output = 17,191 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 4 produits prédits, 1 corrects |
| **Rappel** | 33.3% | 3 produits réels, 1 détectés |
| **F1-Score** | 28.6% | Score équilibré global |

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
| **MAE** | 80.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 41.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -41.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (1)

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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 112 | 192 | 80.0 | 41.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 112u vs Médiane: 128u (Réel: 192u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 112u
- 📊 **Baseline calculée**: 104u
- 📊 **Médiane historique**: 128u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 80u (41.7%)
- 📉 **Erreur Médiane**: 64u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 112u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier de 18 à 21 jours, principalement commandé le lundi.
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-12 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
Le cycle habituel de 20 jours indique une commande imminente (prévue autour du 12 octobre, soit dans 7 jours). L'analyse des volumes de 2025 montre une médiane robuste à 104 unités (supérieure aux 80 unités de N-1). La recommandation de 112 unités applique une marge de sécurité B2B légère (+7,7% par rapport à la médiane) tout en restant alignée avec les multiples de conditionnement logistiques observés (base 16).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,207 tokens
- **Output**: 4,753 tokens
- **Total**: 5,960 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Data**

I've been poring over the sales data for the MF0042 product, specifically the Tomate Bärlauch spread. Looking at the 2025 figures, there's a recent 80-unit sale on September 22nd. I'm noting the intervals between sales, which seem to fluctuate, and compare them with 2024 to pinpoint any patterns.


**Projecting Order Timing**

I've calculated the median order cycle, landing between 18 and 20 days. Given the last order on September 22nd, I anticipate the next around October 10th. With today being October 5th, we're only five days away, well within the safety horizon, though a rupture risk is present.


**Evaluating Order Quantity**

The product's recent 80-unit order aligns with historical patterns. I'm focusing on quantity, comparing the current 2025 data to the previous year. I'm noting the recent 128u orders, and the drop to 80u recently. Based on recent activity, the order should probably be 112u, but the last order was 80, so somewhere between 80 and 112.


**Predicting Next Actions**

I'm focused on the timing of the next order, using the consistent 18-20 day cycle. Based on the last order on September 22nd and the median interval, I anticipate another order around October 11th. I've re-evaluated quantities, and my analysis points to a recommended order of 104 units, the robust median for 2025.


**Forecasting Next Purchase**

I'm focused on the timing of the next order, with the last occurring on September 22nd. Given the consistent 18-20 day cycle, I'm projecting the next order around October 11th. Since today is October 5th, the risk horizon is tight, with a 6-day window. The median for this year's orders is 104, though recent activity suggests 96 or 104 units as the best fit.


**Calculating Order Details**

I've re-evaluated order quantities. The 128-unit orders and the consistent 80-unit orders are the points of focus. Taking the median of the last three, I arrive at 128 units, which, while a solid fit, seems to overstate recent buying. I've re-calculated, and the new recommendation is for 112 units.


**Finalizing Quantity Recommendation**

I'm now satisfied with the order quantity, settling on 112 units. This decision balances the recent sales data, the historical trends, and the potential need for a slight safety buffer. This recommendation is based on a cycle of 19 days, meaning the next order should be due in 6 days.


**Confirming Quantity Recommendation**

I've decided on 112 units, balancing historical trends with the most recent sales and potential need for a buffer. With a 19-day cycle, the next order is due in 6 days. I'm now certain this is the optimal quantity, given the data.


**Revising Recommendation Parameters**

I've re-evaluated and confirmed my calculations, maintaining a focus on recent sales trends, the consistent 19-day cycle, and the importance of a safety stock. I've adjusted the order quantity to 112 units, balancing 2025's fluctuating numbers and N-1's consistent 80s, accounting for potential seasonal shifts.


**Finalizing Order Recommendation**

I've decided on 112 units, balancing 2025 sales and historical trends with a small safety margin. The next order should be in 7 days, based on the established 20-day cycle. My confidence level is high.


**Calculating Final Recommendation**

After a thorough review, I've concluded on a quantity of 112 units. This decision reflects the 20-day cycle, last order date, upcoming date, and recent sales trends, with a small adjustment for B2B practice. The next order is expected in approximately 7 days.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 128u
- 2025-08-04 10:51:04: 128u
- 2025-07-14 09:47:20: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 08:48:16: 80u
- 2024-09-18 06:24:53: 80u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 80u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 48u
- 2024-06-17 11:39:54: 192u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 48u
- 2024-03-13 08:20:22: 128u
- 2024-02-19 10:46:41: 64u

**✅ Quantité LLM**: 112u (confidence: high)
**📊 Quantité Réelle**: 192u

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
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 64 | Stock prédit: 29.4u (6j restants) → prédit 64u mais non commandé |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 48 | Stock prédit: 10.0u (3j restants) → prédit 48u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 123 | Stock prédit: 108.0u (24j restants) → prédit 123u mais non commandé |


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
| [VID0009] Consigne casier | 192 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 1152 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T14:46:21.353Z*
