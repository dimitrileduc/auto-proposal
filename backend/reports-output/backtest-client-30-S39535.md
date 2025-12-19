# Rapport Backtest - Client Conserverie Et Moutarderie Belge

## Contexte

- **Client** : Conserverie Et Moutarderie Belge (ID: 30)
- **Commande réelle** : S39535
- **Date commande** : 2025-10-03 08:01:58
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 7,328 input + 20,511 output = 27,839 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 28.6% | 7 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 44.4% | Score équilibré global |

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
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières avec un cycle de 13 à 33 jours
- **Cycle médian (jours)**: 18
- **Dernière commande**: 2025-09-26
- **Prochaine prédite**: 2025-10-14 (dans 12j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Habituellement commandé en début ou milieu de semaine, dernière commande un vendredi.
- **Outliers détectés**: 13u

**🧠 Raisonnement LLM:**
Le cycle médian détecté est de 18 jours. La dernière commande datant du 26 septembre, la prochaine est prévue autour du 14 octobre (sous 12 jours), ce qui justifie un réapprovisionnement immédiat pour couvrir le risque de rupture sous 30 jours. Les quantités récentes sont très stables à 1 unité par commande, les pics à 13 unités observés en N-1 étant traités comme des outliers exceptionnels.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 882 tokens
- **Output**: 1,321 tokens
- **Total**: 2,203 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Order History Data**

I'm currently working on analyzing the historical demand data for JF CURRY KETCHUP SQUEE ZE 300ML (JF040). So far, I've identified the order dates and quantities for the product. Now, I'm focusing on calculating the demand trends over time, by month and quarter.


**Calculating Lead Time and Risk**

Continuing the analysis, I've calculated the median interval between orders, which is 18 days.  Given the last order was on 2025-09-26, I predicted the next order date to be 2025-10-14. Today's date is 2025-10-02, so there's a 12-day window, indicating a "YES" risk of stockout.


**Evaluating Risk and Quantity**

I've completed my analysis.  I've assessed the risk of a stockout as "YES" given the predicted next order date of October 14th. My recommendation is to order 1 unit, with high confidence, based on the product's regular 18-day cycle and consistent recent demand. The 13-unit orders appear as outliers.


**Synthesizing Recommendations Now**

I've finalized my analysis. The product's demand is stable at 1 unit, with a recent order cycle of 18 days. The predicted next order date is October 14th, but with today being October 2nd, the risk of stockout is present. Therefore, my high-confidence recommendation is to order 1 unit. The "13u" order quantities are treated as outliers.




</details>

</details>


<details>
<summary><strong>2. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle variable, historiquement plus court en automne (10-20j) avec un pic d'activité fin septembre
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-09-08
- **Prochaine prédite**: 2025-10-03 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le client est entré dans sa fenêtre de commande habituelle (24 jours depuis la dernière commande). L'historique N-1 révèle une forte accélération du volume et de la fréquence à cette période précise (pic de 4u le 01/10/2024). Bien que les commandes de 2025 soient plus faibles (1u), la saisonnalité marquée justifie de commander une quantité de 2u pour prévenir une rupture imminente correspondant au pattern de l'an dernier.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 824 tokens
- **Output**: 2,202 tokens
- **Total**: 3,026 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Intervals**

I'm currently focusing on the time intervals between orders. I've noted the 46-day gap in 2025. Now I'm comparing it with the 2024 data, looking for patterns. The 2024 orders seem closer together. I need to understand what's influencing these fluctuations.


**Comparing the Order Cycles**

I'm now diving deeper into the order frequencies. The 2024 data shows a tighter cycle, roughly every 10-20 days in the August-October period. This contrasts sharply with the 46-day gap observed in 2025. Considering today's date and the 2024 pattern, I'm assessing if an order is overdue. The median cycle length is proving complex to pinpoint.


**Assessing the Implications**

Now, I'm analyzing the 2024 order data in detail. The 10-15 day cycles of last year are a key indicator, and I'm comparing the last order's date. The current date is 24 days past the last order, and this is outside the usual cycle. I'm also weighing up the quantity differences.


**Projecting the Next Order**

I've calculated the next order date for JF Ketchup, which I've predicted for tomorrow. Considering the 24-day gap since the last order and comparing it with last year's pattern, where a peak of 4 units was observed, a secure quantity of 2 units is now recommended. I have taken into account the slower 2025 activity.


**Evaluating the Recommendations**

I've finalized the recommended quantity, setting it to 2 units for tomorrow. The analysis highlights a 24-day gap since the last order, and I've carefully weighed the seasonal peak from last year against the slower 2025 activity. I've also re-confirmed all the outputs are valid.


**Calculating the Details**

I've meticulously reviewed the data, including the precise order dates and quantities. I've noted the 24-day interval since the last order, and am confirming tomorrow as the predicted order date. Considering the past peak, I've increased the recommended quantity to two units.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 06:28:44: 1u
- 2025-09-08 07:52:26: 1u
- 2025-08-26 09:02:26: 1u
- 2025-07-24 13:45:03: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-12 10:01:21: 1u
- 2024-09-05 11:50:34: 2u
- 2024-08-23 08:20:07: 13u
- 2024-08-13 10:10:43: 1u
- 2024-07-05 07:40:56: 1u
- 2024-04-30 10:09:27: 2u
- 2024-04-25 14:37:04: 1u
- 2024-04-25 08:31:46: 13u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 07:52:26: 1u
- 2025-07-24 13:45:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 06:55:39: 4u
- 2024-09-26 09:23:08: 2u
- 2024-09-05 11:50:34: 1u
- 2024-08-23 08:30:23: 1u
- 2024-08-13 10:10:43: 1u
- 2024-05-28 07:49:32: 1u
- 2024-04-30 10:09:27: 2u
- 2024-04-25 14:37:04: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (5)

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
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: -3.3u (-27j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -3.4u (-27j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (33j restants) → prédit 1u mais non commandé |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 161 | Stock prédit: -29.9u (-10j restants) → prédit 161u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T11:15:35.507Z*
