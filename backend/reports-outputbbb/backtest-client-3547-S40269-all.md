# Rapport Backtest - Client K&F DE PAUW

## Contexte

- **Client** : K&F DE PAUW (ID: 3547)
- **Commande réelle** : S40269
- **Date commande** : 2025-11-12 11:39:39
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 46,358 input + 97,083 output = 143,441 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 5.0% | 20 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 9.5% | Score équilibré global |

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
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [PF1194] GF VIN FINES HERBES WECK 330ML | 160 | 160 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1194] GF VIN FINES HERBES WECK 330ML</strong> - LLM: 160u vs Médiane: 145u (Réel: 160u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 110.5u
- 📊 **Médiane historique**: 145u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 15u (9.4%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle historique médian d'environ 32 jours, mais activité irrégulière avec des périodes de latence plus longues
- **Cycle médian (jours)**: 32
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-09-26 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 290u

**🧠 Raisonnement LLM:**
Le cycle médian détecté sur l'historique N-1 est de 32 jours. Avec une dernière commande au 2025-08-25, le client est largement en retard sur son cycle habituel (plus de 75 jours écoulés). La période N-1 montre une activité en novembre et décembre (75u). Bien que la baseline soit de 110u, les volumes récents (août 2025 et mai 2024) sont montés à 160u, suggérant une augmentation des stocks tampons ou de la demande. Dans une optique de sécurisation B2B, on préconise 160u pour la prochaine commande imminente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,371 tokens
- **Output**: 1,891 tokens
- **Total**: 4,262 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Project Projections**

I'm currently focused on the [PF1194] GF VIN FINES HERBES  WECK 330ML product, specifically its sales projections. I see a 30-day horizon from 2025-11-11, and I am analyzing recent sales history. I need to consider the 160 units sold on 2025-08-25, and historical data from the previous year, including the 145 units sold on 2024-09-30.


**Assessing Sales Patterns**

My analysis now focuses on the median interval between orders, calculated at approximately 32 days, and this is compared to the 78 days since the last recorded order. Examining the N-1 data, I'm noting the orders around the same time last year.  The product's sales appear to have an end-of-year seasonality.


**Projecting Future Orders**

I'm now weighing the quantity of the next order. Considering the recent trend of 160 units, and comparing that with the earlier orders of 75 units, I am concluding that around 160 units would be a good starting point to maintain the stock.


**Synthesizing Order Predictions**

I've finalized my analysis, focusing on the product's sales, considering recent and historical orders. The median cycle of 32 days versus the 78 days since the last order highlights a potential risk. Taking into account the end-of-year seasonality and recent larger orders, I am recommending an order of 160 units, based on a weighted average from past sales.


**Concluding Order Predictions**

I've now synthesized my findings, focusing on the historical and recent sales data for the product, highlighting a delay in the ordering cycle. I am recommending a purchase of 160 units, and am taking into account the slightly higher average sales, considering the end-of-year seasonality. I have medium confidence due to the gap in recent order data.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1194] GF VIN FINES HERBES WECK 330ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 08:28:00: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:21:49: 145u
- 2024-06-12 06:00:48: 290u
- 2024-06-12 06:00:48: 16u
- 2024-05-27 07:37:32: 160u
- 2024-04-17 06:40:51: 64u
- 2024-03-28 08:01:49: 64u
- 2024-03-18 14:12:55: 75u
- 2024-02-01 14:41:32: 75u
- 2023-12-07 14:03:11: 75u
- 2023-11-13 14:18:34: 75u

**✅ Quantité LLM**: 160u (confidence: medium)
**📊 Quantité Réelle**: 160u

</details>




---

## False Positives (19)

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
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 200 | Stock prédit: 29.5u (4j restants) → prédit 200u mais non commandé |
| [PF1195] GF VIN ANCIENNE WECK 330ML | 320 | Stock prédit: 18.0u (2j restants) → prédit 320u mais non commandé |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 125 | Stock prédit: -2.1u (0j restants) → prédit 125u mais non commandé |
| [PF1801] LD MAYONNA DU CHEF 470 ML WECK | 110 | Stock prédit: 74.6u (101j restants) → prédit 110u mais non commandé |
| [PF1803] LD SAUCE TARTARE 250ML WECK | 75 | Stock prédit: -76.3u (-29j restants) → prédit 75u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 200 | Stock prédit: -49.4u (-9j restants) → prédit 200u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 150 | Stock prédit: -2.1u (0j restants) → prédit 150u mais non commandé |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 150 | Stock prédit: -2.1u (0j restants) → prédit 150u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 100 | Stock prédit: -2.1u (0j restants) → prédit 100u mais non commandé |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 25 | Stock prédit: 164.4u (221j restants) → prédit 25u mais non commandé |
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 150 | Stock prédit: -2.1u (0j restants) → prédit 150u mais non commandé |
| [PF0193] GF VIN ANCIENNE JERRYCAN 5L | 25 | Stock prédit: 0.8u (2j restants) → prédit 25u mais non commandé |
| [PF3282] LD SAUCE AIOLI 250ML WECK | 50 | Stock prédit: 128.6u (138j restants) → prédit 50u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 200 | Stock prédit: 87.8u (60j restants) → prédit 200u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 200 | Stock prédit: 93.9u (68j restants) → prédit 200u mais non commandé |
| [PF1795] LD MAYONNAI WASABI 250ML WECK | 25 | Stock prédit: 119.9u (142j restants) → prédit 25u mais non commandé |
| [PF1807] LD SAUCE ANDALOUSE 250ML WECK | 25 | Stock prédit: 107.3u (110j restants) → prédit 25u mais non commandé |
| [PF1805] LD SAUCE COCKTAIL 250ML WECK | 25 | Stock prédit: 123.4u (153j restants) → prédit 25u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 50 | Stock prédit: 89.1u (76j restants) → prédit 50u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:55:19.302Z*
