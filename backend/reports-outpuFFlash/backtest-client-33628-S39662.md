# Rapport Backtest - Client LIDL BELGIE GMBH

## Contexte

- **Client** : LIDL BELGIE GMBH (ID: 33628)
- **Commande réelle** : S39662
- **Date commande** : 2025-10-13 04:38:31
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 2,837 input + 7,898 output = 10,735 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 3 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
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
| **MAE** | 128.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167) | 256 | 384 | 128.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167)</strong> - LLM: 256u vs Médiane: 256u (Réel: 384u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 256u
- 📊 **Baseline calculée**: 256u
- 📊 **Médiane historique**: 256u
- ✅ **Réel commandé**: 384u
- 📉 **Erreur LLM**: 128u (33.3%)
- 📉 **Erreur Médiane**: 128u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 256u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle court hebdomadaire avec une médiane de 6 jours, bien que le client n'ait pas commandé depuis plus d'un mois.
- **Cycle médian (jours)**: 6
- **Dernière commande**: 2025-09-05
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 1024u

**🧠 Raisonnement LLM:**
Le cycle habituel de 6 jours a été largement dépassé (37 jours depuis la dernière commande le 05/09). Selon la règle des 40 jours (37 <= 40), le risque de rupture est imminent. La quantité recommandée suit le mode récent de 256u, l'unité de 1024u ayant été identifiée comme un outlier et les volumes historiques de 2024 étant en nette baisse par rapport au flux actuel.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,057 tokens
- **Output**: 2,511 tokens
- **Total**: 3,568 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Date Gaps**

I'm currently focused on the date gaps between the listed entries. The most recent calculation shows a 12-day gap, which seems significant. I'm noting potential outliers like the 6-day gap, and I am working to identify the key factors driving these fluctuations.


**Predicting Future Orders**

I'm now shifting my focus to anticipating the next order. The 37-day gap since the last order raises concerns about stock levels. Despite recent short inter-order intervals, the significant time elapsed suggests a potential supply issue, warranting immediate attention. The data hints at September orders in prior years, but nothing in October.


**Reassessing Supply Risk**

My calculations reveal a 37-day gap since the last order, a significant deviation from the usual 6-day cycle. Considering the seasonality, with no October orders in 2024, and decreasing volumes, a stockout is a real concern. The "≤40 days" rule confirms it: RISQUE OUI. I need to understand this decrease.


**Forecasting Order Timing**

My analysis now extends to pinpointing the urgency of a new order.  Considering the 37-day gap since the last replenishment, well past the predicted 6-day cycle, immediate action is warranted.  Furthermore, the data suggests potential supply chain disruptions, reinforcing the necessity for prompt intervention given decreasing volumes.


**Determining Replenishment Urgency**

I'm now assessing the immediacy of a new order based on the 37-day gap since the last replenishment. While the standard 6-day cycle has long elapsed, triggering a "RISQUE OUI" flag, I also considered the downward volume trend. The combination of these factors underscores a critical need for replenishment.


**Analyzing Ordering Urgency**

I'm now zeroing in on the "RISQUE OUI" threshold, confirming a high-risk scenario due to the 37-day gap, far exceeding the 6-day cycle. The past-due predicted date and downward volume trend since 2024 reinforce an immediate replenishment need, considering the high likelihood of stock depletion. I'm focusing on quantity, 256u.


**Calculating Critical Urgency**

I'm now determining the most urgent replenishment needs. Considering the 37-day lapse since the last order, vastly exceeding the typical 6-day cycle, alongside a downward volume trend, the "RISQUE OUI" status is confirmed. I am finalizing the recommended quantity as 256u, and estimating the next date as 2025-10-13, given the risk.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167)</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 11:06:08: 256u
- 2025-09-01 08:52:49: 256u
- 2025-08-26 15:25:52: 1024u
- 2025-08-14 13:29:11: 256u
- 2025-08-08 11:41:05: 256u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 13:13:17: 512u
- 2024-09-11 10:27:42: 384u
- 2024-08-20 10:37:14: 256u
- 2024-06-26 10:02:06: 384u
- 2024-06-13 15:25:35: 768u
- 2024-06-11 09:08:43: 512u
- 2024-05-31 06:38:37: 768u
- 2024-05-15 08:55:53: 384u
- 2024-05-15 08:55:53: 256u
- 2024-05-13 08:04:16: 640u
- 2024-04-11 13:23:35: 640u
- 2024-04-09 09:15:49: 384u

**✅ Quantité LLM**: 256u (confidence: high)
**📊 Quantité Réelle**: 384u

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
| [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK | 400 | Stock prédit: -313.6u (-3j restants) → prédit 400u mais non commandé |
| [PF3328] DELUXE MIX SAUCES 250ML WECK | 384 | Stock prédit: -88.3u (0j restants) → prédit 384u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:57:47.310Z*
