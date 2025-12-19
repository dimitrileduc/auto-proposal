# Rapport Backtest - Client DANTESSE GmbH

## Contexte

- **Client** : DANTESSE GmbH (ID: 3831)
- **Commande réelle** : S39769
- **Date commande** : 2025-10-16 10:03:47
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 29,166 input + 28,799 output = 57,965 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.7% | 13 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 14.3% | Score équilibré global |

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
| **MAE** | 125.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 250 | 125 | 125.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 250u vs Médiane: 250u (Réel: 125u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 250u
- 📊 **Baseline calculée**: 250u
- 📊 **Médiane historique**: 250u
- ✅ **Réel commandé**: 125u
- 📉 **Erreur LLM**: 125u (100.0%)
- 📉 **Erreur Médiane**: 125u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 250u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 15 jours observé sur les 3 dernières commandes
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-17 (dans 2j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: Commandes passées en milieu ou fin de semaine (jeu, lun, mer), la prochaine est prévue sous 48h
- **Outliers détectés**: 55u

**🧠 Raisonnement LLM:**
Le client est entré dans une phase de consommation très stable avec trois commandes successives de 250u à intervalle de 10 et 19 jours (médiane ~15j). La dernière commande datant du 02/10, la prochaine est imminente (autour du 17/10). Le volume a doublé par rapport à l'année N-1 (pics à 125u), indiquant une croissance forte ou un changement de conditionnement logistique. On maintient la quantité fixe de 250u qui semble être le nouveau standard de commande.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,516 tokens
- **Output**: 1,927 tokens
- **Total**: 4,443 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Volumes**

I'm currently focused on the sales volume of "LD MAYONNAI TRUFFES 250ML WECK". The most recent data from October 15, 2025, shows sales of 250 units. Digging deeper, I see a consistent pattern of 250 units sold in September of 2025 as well, and even earlier in July the same year. I'll need to analyze the figures from 2024 next.


**Projecting Future Orders**

My analysis indicates a potential stock-out risk for "LD MAYONNAI TRUFFES 250ML WECK". Based on the sales data, specifically the intervals between orders, I've calculated a predicted order date of October 17th, 2025. Considering today's date, October 15th, a new order is imminent, which raises a red flag.


**Calculating Order Timing**

I've refined the ordering cycle analysis. The most recent intervals point to a roughly 15-day cycle. Considering the last order was on October 2nd, and with today being the 15th, a new order is highly probable. The consistent 250-unit order volume underscores this urgency. I need to inform the client of this need, as a stock-out risk is predicted.


**Evaluating Sales Patterns**

The recent focus is on refining the prediction. Based on a consistent 15-day cycle and the last order on October 2nd, I've calculated a predicted order date of October 17th. Analyzing the quantity, 250 units seem to be the baseline now, a significant increase from last year. I now classify the risk as high, with the client's next order imminent.


**Assessing Ordering Urgency**

I've re-examined the data and confirmed a 15-day ordering cycle, with the last order on October 2nd. This suggests an order is needed imminently, around October 17th. Analyzing the quantity, 250 units is the new consistent order size. Given the short timeframe and the pattern, a high-urgency level is warranted.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 08:37:42: 250u
- 2025-09-22 05:31:37: 250u
- 2025-09-03 07:49:42: 250u
- 2025-07-16 13:46:45: 55u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-25 19:46:57: 125u
- 2024-08-29 12:54:10: 75u
- 2024-08-23 09:48:48: 50u
- 2024-07-17 09:21:00: 80u
- 2024-06-07 10:11:53: 50u
- 2024-05-28 11:15:02: 125u
- 2024-04-23 06:22:53: 50u
- 2024-04-04 06:34:16: 125u
- 2024-03-12 11:50:55: 50u
- 2024-02-15 07:27:41: 70u
- 2024-01-17 14:53:06: 75u
- 2023-12-13 12:47:04: 125u

**✅ Quantité LLM**: 250u (confidence: high)
**📊 Quantité Réelle**: 125u

</details>




---

## False Positives (12)

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
| [PF1807] LD SAUCE ANDALOUSE 250ML WECK | 6 | Stock prédit: -0.4u (-1j restants) → prédit 6u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Stock prédit: 0.6u (35j restants) → prédit 1u mais non commandé |
| [PF3274] JF BURGER SAUCE 925ML | 6 | Stock prédit: -0.5u (-22j restants) → prédit 6u mais non commandé |
| [PF1802] LD MOUTARDE MIEL 250ML WECK | 6 | Stock prédit: 3.3u (44j restants) → prédit 6u mais non commandé |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 45 | Stock prédit: 10.8u (11j restants) → prédit 45u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 75 | Stock prédit: -18.3u (-11j restants) → prédit 75u mais non commandé |
| [PF1795] LD MAYONNAI WASABI 250ML WECK | 30 | Stock prédit: 42.2u (65j restants) → prédit 30u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 50 | Stock prédit: 25.7u (95j restants) → prédit 50u mais non commandé |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 75 | Stock prédit: 18.9u (30j restants) → prédit 75u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 50 | Stock prédit: 16.3u (43j restants) → prédit 50u mais non commandé |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 30 | Stock prédit: 23.9u (59j restants) → prédit 30u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 92 | Stock prédit: 39.6u (67j restants) → prédit 92u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:54:42.489Z*
