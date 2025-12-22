# Rapport Backtest - Client NATURKOST WEST GMBH

## Contexte

- **Client** : NATURKOST WEST GMBH (ID: 3818)
- **Commande réelle** : S39694
- **Date commande** : 2025-10-13 10:17:04
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 4,301 input + 7,282 output = 11,583 total


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
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 32 | 32 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 32 | 16.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 32u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 32u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel régulier (14 jours)
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-24
- **Prochaine prédite**: 2025-10-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande bimensuel très régulier de 14 jours, observé tant sur les commandes récentes (septembre 2025) que sur l'historique N-1. La dernière commande datant du 24 septembre, la prochaine était théoriquement prévue pour le 8 octobre. Étant au 12 octobre, la commande est imminente ou en léger retard. La quantité de 32 unités est la norme constante observée sur les flux récents.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,149 tokens
- **Output**: 1,464 tokens
- **Total**: 2,613 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Order Cycles**

I've been analyzing the order frequency for the chickpea-cumin spread. Initial data shows a consistent 14-day interval in 2025, with two recent orders. Further investigation is needed to compare against the 2024 orders to get a full picture of the ordering trend.


**Evaluating Replenishment Imminence**

I've examined the 2024 order history for the chickpea spread, identifying a wide range of intervals, from 2 to 14 days. The predicted order date, based on the recent 14-day cycle, was October 8th. As today's date is October 12th, the order is likely imminent or slightly delayed.


**Determining Order Quantity**

I've confirmed the consistent 32u baseline. Historical data confirms no significant seasonal impact. My confidence in the recommended order quantity of 32 units is high, given the regular 14-day cycle and stable demand.


**Assessing Stockout Risk**

My analysis confirms the predicted order date of October 8th has passed, which is October 12th. Given this, the risk of stockout is confirmed. Furthermore, I am recommending an order of 32 units, based on historical patterns and recent ordering behavior, where the median appears to be every 14 days.




</details>

</details>


<details>
<summary><strong>2. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 24u (Réel: 32u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 24u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 16u (50.0%)
- 📉 **Erreur Médiane**: 8u (25.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel à mensuel (14-21 jours)
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-0112:35:42 (lun.) | 16u
2024-09-05 07:56:09 (jeu.) | 32u
2024-08-27 12:23:03 (mar.) | 16u
2024-08-16 09:58:48 (ven.) | 16u
2024-06-27 07:43:54 (jeu.) | 16u
2024-06-13 06:56:18 (jeu.) | 16u
2024-05-16 08:11:07 (jeu.) | 16u
2024-05-14 08:23:32 (mar.) | 16u
2024-04-18 08:58:20 (jeu.) | 16u
2024-03-14 08:27:15 (jeu.) | 48u
2024-02-22 13:59:46 (jeu.) | 16u
2024-02-09 09:02:46 (ven.) | 16u

## DÉCISION 1: Y A-T-IL RISQUE DE RUPTURE ? (horizon 30j)

Raisonne sur:
- Cycle habituel du client (médiane des intervalles entre commandes)
- Dernière commande + cycle = prochaine date probable
- Si ≤30 jours → RISQUE OUI (commande imminente)
- Si 31-45 jours ET proche du cycle → RISQUE OUI (anticipation B2B nécessaire)
- Si >45 jours ET cycle régulier → RISQUE NON
- EXCEPTION: Produits sporadiques (>60j entre commandes) → vérifier si commande dans les 90 derniers jours

## DÉCISION 2: QUELLE QUANTITÉ ? (si risque = oui)

Principes:
- Prédire UNE commande (la prochaine), pas un cumul
- Privilégier les quantités récentes (plus de poids)
- Médiane robuste aux outliers
- Si pattern sur pls commandes évident à même date en N-1 → c'est saisonnier, pas un outlier

Ajustements CRITIQUES (dans l'ordre de priorité):
1. PETITES QUANTITÉS (1-2u):
   - Médiane récente TOUJOURS prioritaire
   - Si toujours 1u → prédire 1u (ignorer N-1)
   - Si alternance 1-2-1-2 → prédire 1u (valeur basse)
2. SAISONNALITÉ:
   - N-1 valide SEULEMENT si 3+ commandes avec +50% volume
   - Si 2025 montre baisse constante → ignorer N-1
3. GROSSES QUANTITÉS (>100u):
   - Exclure outliers évidents (>2x médiane)
   - Médiane des 3 dernières non-outliers
4. CHANGEMENT NET: Si 3 dernières montrent tendance claire → suivre
5. SAFETY B2B: En cas de doute, arrondir LÉGÈREMENT vers le haut (+10% max)

## OUTPUT JSON:

{
  "analysis": {
    "frequency_pattern": "description du cycle",
    "detected_outliers": [],
    "seasonality_impact": "none|weak|strong",
    "trend_direction": "stable|increasing|decreasing",
    "cycle_days": nombre,
    "last_order_date": "YYYY-MM-DD",
    "predicted_next_date": "YYYY-MM-DD",
    "days_until_next": nombre
  },
  "baseline_quantity": nombre décimal,
  "recommended_quantity": entier final (0 si pas de risque),
  "confidence": "low|medium|high",
  "confidence_phase1": "low|medium|high",
  "confidence_phase2": "low|medium|high" (si quantity > 0),
  "reasoning": "explication concise"
} → 2025-10-01-01 is slightly past, expecting order now or soonest possible date after 2025-10-12" , 10-01-01 is invalid format, corrected to 2025-10-01: "2025-10-01", "days_until_next": 0 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La dernière commande remonte au 10 septembre, soit 32 jours auparavant. Le cycle habituel moyen variant entre 14 et 21 jours, une rupture de stock est probable ou imminente. La demande de base stable est de 16u (médiane historique stable en 2024 et 2025).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,169 tokens
- **Output**: 3,117 tokens
- **Total**: 4,286 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product Orders**

I'm currently focused on the order history for the MF Delikatess Mayonnaise, specifically the 250ml DE variant. My analysis indicates a consistent demand, with recent orders spaced roughly a week apart early in August, then followed by a longer gap. I'm keen on understanding what influenced the difference.


**Predicting Order Imminence**

I've just crunched the numbers, and the 32-day gap since the last order of the MF Delikatess Mayonnaise 250ml DE variant is significant. Based on a 21-day average cycle, it appears a new order is overdue. Considering historical cycles and the potential for a stock rupture, the current timing warrants immediate attention.


**Assessing Order Quantities**

I've just finished the deep dive into order sizes for the MF Delikatess Mayonnaise, 250ml DE variant. The core appears to be 16 units, but a 32-unit order has surfaced recently.  Given the irregular cadence and the importance of the median, I'm leaning toward recommending a 16-unit replenishment to ensure safety.


**Forecasting Replenishment Needs**

I've just refined the replenishment forecast for the MF Delikatess Mayonnaise, 250ml DE variant. The 16-unit baseline seems most appropriate, considering the consistent demand and recent patterns.  The analysis confirms that the predicted order date, as of today, is slightly overdue, further reinforcing the need for immediate action.


**Determining Order Action**

I'm now determining the appropriate action, based on all analyzed data. The last order was over a month ago. Considering all historical data, the replenishment is overdue, pointing to an imminent need, and I'm leaning toward a 16-unit order given the consistent baseline and median quantities.


**Synthesizing Recommendations**

I'm now coalescing the core findings. Considering the overdue status, the consistent 16-unit baseline, and the low risk tolerance, I'm strongly leaning towards an immediate 16-unit replenishment for the MF Delikatess Mayonnaise, 250ml DE. I will recheck the N-1 data for more information.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:49:39: 32u
- 2025-09-10 06:32:45: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 12:35:42: 32u
- 2024-09-05 07:56:09: 32u
- 2024-08-27 12:23:03: 16u
- 2024-08-16 09:58:48: 16u
- 2024-06-27 07:43:54: 16u
- 2024-06-13 06:56:18: 32u
- 2024-05-16 08:11:07: 32u
- 2024-05-14 08:23:32: 16u
- 2024-03-14 08:27:15: 32u
- 2024-03-08 09:59:07: 32u
- 2024-02-22 13:59:46: 32u
- 2024-02-09 09:02:46: 32u

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 32u

</details>


<details>
<summary><strong>2. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:32:45: 32u
- 2025-08-20 12:43:59: 16u
- 2025-08-13 10:37:06: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 12:35:42: 16u
- 2024-09-05 07:56:09: 32u
- 2024-08-27 12:23:03: 16u
- 2024-08-16 09:58:48: 16u
- 2024-06-27 07:43:54: 16u
- 2024-06-13 06:56:18: 16u
- 2024-05-16 08:11:07: 16u
- 2024-05-14 08:23:32: 16u
- 2024-04-18 08:58:20: 16u
- 2024-03-14 08:27:15: 48u
- 2024-02-22 13:59:46: 16u
- 2024-02-09 09:02:46: 16u

**✅ Quantité LLM**: 16u (confidence: high)
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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 32 | Stock prédit: -3.3u (-1j restants) → prédit 32u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 16 | Stock prédit: -6.9u (-5j restants) → prédit 16u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:44:35.036Z*
