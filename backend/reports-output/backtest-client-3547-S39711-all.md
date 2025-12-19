# Rapport Backtest - Client K&F DE PAUW

## Contexte

- **Client** : K&F DE PAUW (ID: 3547)
- **Commande réelle** : S39711
- **Date commande** : 2025-10-14 07:25:09
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 17,222 input + 68,192 output = 85,414 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 5.9% | 17 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 11.1% | Score équilibré global |

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
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 200 | 200 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1809] LD SAUCE BEARNAISE 250ML WECK</strong> - LLM: 200u vs Médiane: 200u (Réel: 200u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 200u
- 📊 **Baseline calculée**: 200u
- 📊 **Médiane historique**: 200u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 200u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 22-25 jours avec augmentation saisonnière marquée en fin d'année
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-08-29
- **Prochaine prédite**: 2025-10-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 0u, 1u

**🧠 Raisonnement LLM:**
Le cycle de commande observé est d'environ 24 jours. La dernière commande effective remonte au 29 août pour 200u. L'entrée du 23 septembre à 0u indique un cycle manqué ou un incident de stock, rendant le besoin actuel critique. Selon le cycle habituel, la prochaine commande devrait tomber vers le 17 octobre. Le volume recommandé de 200u reflète la stabilisation de la demande observée sur les dernières périodes de forte activité (N-1 et N), nettement supérieure aux volumes du début d'année 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 979 tokens
- **Output**: 3,058 tokens
- **Total**: 4,037 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently reviewing the product data for LD SAUCE BEARNAISE 250ML WECK (PF1809). Recent history reveals an "0u" on 2025-09-23. My initial thought is it may signify an outlier or a need for verification, as this usually means no purchase. I need to investigate the meaning.


**Calculating Time Elapsed**

I've calculated the elapsed time since the last valid order of LD SAUCE BEARNAISE. From August 29th to October 13th, it's been about 45 days. This is significantly longer than the typical 22-25 day cycle, raising further questions about the "0u" entry and its implications for stock levels and upcoming orders.


**Evaluating Current Risk Level**

I'm now assessing the risk level for LD SAUCE BEARNAISE based on the data. Considering the 0u entry on September 23rd and the 45-day gap since the last valid order, combined with the usual 22-25 day cycle, the risk appears elevated. I see a high risk of stock depletion. I'm investigating potential explanations for the "0u" entry to refine this assessment.


**Predicting Future Orders**

I'm now calculating the predicted next order date and volume. Based on the 24-day cycle and the 200u baseline, I estimate the next order is due around October 17th. This aligns with the recent history of 200u orders, and takes into consideration the increasing trend in quantities since early 2024.


**Confirming Risk and Quantity**

I've re-evaluated the risk, and it remains high, with the next order predicted around October 17th. I've re-checked the historical volumes, and 200u appears to be the most recent consistent quantity, given the increasing trend. There's a strong seasonality pattern in Q3/Q4. The client likely needs stock.


**Summarizing Key Findings**

I'm now consolidating all the data. The 0u on September 23rd, 2025, seems significant, potentially indicating a missed order. Considering the 45-day gap and predicted next order around October 17th, the risk is high. Recent orders have stabilized at 200u, and the client may well need stock soon.


**Refining Final Recommendations**

I'm now putting the final polish on the recommendations. I'm focusing on the "reasoning" section to clearly explain the situation. The core of it comes down to a consistent 200u order every 24 days, and the 0u entry on September 23rd. My confidence remains high based on this, along with upcoming dates.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1809] LD SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:58:29: 0u
- 2025-08-29 12:31:54: 200u
- 2025-08-07 09:53:40: 200u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:28:38: 200u
- 2024-09-09 07:37:51: 150u
- 2024-08-14 07:53:18: 75u
- 2024-06-26 09:38:12: 1u
- 2024-06-12 06:17:25: 300u
- 2024-05-27 07:47:39: 75u
- 2024-05-03 06:34:29: 75u
- 2024-04-17 06:38:21: 100u
- 2024-03-28 07:59:23: 75u
- 2024-03-18 14:18:31: 100u
- 2024-02-23 12:36:35: 50u
- 2024-02-02 07:47:31: 50u

**✅ Quantité LLM**: 200u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>




---

## False Positives (16)

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
| [PF1195] GF VIN ANCIENNE WECK 330ML | 320 | Stock prédit: 220.9u (42j restants) → prédit 320u mais non commandé |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: 100.9u (19j restants) → prédit 200u mais non commandé |
| [PF1803] LD SAUCE TARTARE 250ML WECK | 50 | Stock prédit: 0.4u (0j restants) → prédit 50u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 200 | Stock prédit: 100.9u (19j restants) → prédit 200u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 200 | Stock prédit: 84.8u (14j restants) → prédit 200u mais non commandé |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 200 | Stock prédit: 125.7u (32j restants) → prédit 200u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 200 | Stock prédit: 122.9u (30j restants) → prédit 200u mais non commandé |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 25 | Stock prédit: 162.8u (83j restants) → prédit 25u mais non commandé |
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 200 | Stock prédit: 100.9u (19j restants) → prédit 200u mais non commandé |
| [PF1194] GF VIN FINES HERBES WECK 330ML | 160 | Stock prédit: 34.9u (13j restants) → prédit 160u mais non commandé |
| [PF0193] GF VIN ANCIENNE JERRYCAN 5L | 25 | Stock prédit: 4.5u (10j restants) → prédit 25u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 200 | Stock prédit: 106.1u (54j restants) → prédit 200u mais non commandé |
| [PF1807] LD SAUCE ANDALOUSE 250ML WECK | 25 | Stock prédit: 70.9u (36j restants) → prédit 25u mais non commandé |
| [PF1805] LD SAUCE COCKTAIL 250ML WECK | 25 | Stock prédit: 70.9u (36j restants) → prédit 25u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 50 | Stock prédit: 118.3u (95j restants) → prédit 50u mais non commandé |
| [PF1193] GF VIN TOMATE WECK 330ML | 145 | Stock prédit: -73.9u (-39j restants) → prédit 145u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T11:16:32.828Z*
