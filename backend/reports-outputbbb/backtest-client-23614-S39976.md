# Rapport Backtest - Client Alnatura Produktions- und Handels GmbH, Invoice Address

## Contexte

- **Client** : Alnatura Produktions- und Handels GmbH, Invoice Address (ID: 23614)
- **Commande réelle** : S39976
- **Date commande** : 2025-10-29 07:41:55
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 25,430 input + 20,066 output = 45,496 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.1% | 11 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 16.7% | Score équilibré global |

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
| [LV104] LV Paprika Chili Aufstri 180g DE | 600 | 600 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [LV104] LV Paprika Chili Aufstri 180g DE</strong> - LLM: 600u vs Médiane: 300u (Réel: 600u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 600u
- 📊 **Baseline calculée**: 450u
- 📊 **Médiane historique**: 300u
- ✅ **Réel commandé**: 600u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 300u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 600u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel (14j) détecté en période d'activité, mais avec une interruption saisonnière observée en automne
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-03
- **Prochaine prédite**: 2025-10-28 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel de 14 jours (300u) est dépassé depuis le 2025-09-03 (55 jours sans commande). L'historique N-1 montre une commande spécifique de 600u à la mi-octobre (2024-10-15), suggérant une saisonnalité de volume. On préconise 600u car le client est largement en retard sur son cycle habituel et que ce volume correspond aux pics récurrents du produit en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,492 tokens
- **Output**: 1,751 tokens
- **Total**: 4,243 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Demand**

The data shows a recent dip in sales, which has me concerned. I'm focusing on the 30-day horizon, but those figures from September and August are making me re-evaluate. Is it a seasonal trend or a sign of something more? I need to analyze this further.


**Scrutinizing the Delays**

I'm now deep-diving into the product's history, focusing on the LV104. The 3-month sales are concerning, and I'm seeing significant delays in the ordering cycle. The theoretical next order dates are well past, suggesting potential issues. The last order was over 50 days ago, raising my concern to RISQUE = OUI. I'm prioritizing the previous year's figures to understand seasonality.


**Projecting Future Orders**

I'm now forecasting the upcoming order. Given the 55-day gap since the last order, and referencing last year's October figures, I'm leaning toward a 600u order. This aligns with the historical pattern, considering the extended timeframe. The 300u order quantity is now superseded by the historical data and late order timing.


**Forecasting the Order Quantity**

The product's order pattern and the current overdue status confirm the 600u recommendation. The 14-day cycle is disrupted, but last year's October order and the extended gap support a larger order. This is a conservative yet data-driven approach based on past seasonality and the client's current status.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV104] LV Paprika Chili Aufstri 180g DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 08:18:02: 300u
- 2025-08-20 06:08:56: 300u
- 2025-08-07 07:25:44: 300u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 11:47:58: 600u
- 2024-09-18 06:25:10: 300u
- 2024-08-27 11:52:00: 300u
- 2024-08-07 07:56:23: 300u
- 2024-07-03 07:36:16: 900u
- 2024-05-29 09:11:13: 300u
- 2024-05-08 06:38:08: 600u
- 2024-04-16 12:55:07: 300u
- 2024-03-26 12:32:16: 300u
- 2024-03-05 13:51:42: 600u
- 2024-01-16 12:42:37: 600u
- 2024-01-03 14:24:51: 600u

**✅ Quantité LLM**: 600u (confidence: medium)
**📊 Quantité Réelle**: 600u

</details>




---

## False Positives (10)

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
| [LV102] LV Karot. Ingwer Aufstrich 180g DE | 300 | Stock prédit: 116.1u (12j restants) → prédit 300u mais non commandé |
| [LV105] LV Tomate Basil Aufstr 180g | 300 | Stock prédit: 159.3u (21j restants) → prédit 300u mais non commandé |
| [LV106] LV Oliven Aufstrich 180g DE | 300 | Stock prédit: 182.5u (29j restants) → prédit 300u mais non commandé |
| [LV343] LV Toskana Aufstrich 180g | 300 | Stock prédit: 225.3u (57j restants) → prédit 300u mais non commandé |
| [LV347] LV Trüffel Aufstrich 180g DE | 150 | Stock prédit: 97.0u (34j restants) → prédit 150u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 300 | Stock prédit: 21.6u (4j restants) → prédit 300u mais non commandé |
| [LV103] LV Mango Curry Aufstrich 180g | 300 | Stock prédit: -137.8u (-17j restants) → prédit 300u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 300 | Stock prédit: -251.4u (-30j restants) → prédit 300u mais non commandé |
| [LV346] LV Kürbis Aufstrich 180g DE | 616 | Stock prédit: 421.9u (149j restants) → prédit 616u mais non commandé |
| [LV341] LV Zwiebel Aufstrich 180g | 300 | Stock prédit: 1.7u (0j restants) → prédit 300u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T09:01:04.417Z*
