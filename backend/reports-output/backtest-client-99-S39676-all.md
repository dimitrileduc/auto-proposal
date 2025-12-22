# Rapport Backtest - Client La Fermette Godelaine de Saint-Georges

## Contexte

- **Client** : La Fermette Godelaine de Saint-Georges (ID: 99)
- **Commande réelle** : S39676
- **Date commande** : 2025-10-13 07:37:52
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 50
- **Tokens**: 41,080 input + 145,122 output = 186,202 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.0% | 25 produits prédits, 3 corrects |
| **Rappel** | 23.1% | 13 produits réels, 3 détectés |
| **F1-Score** | 15.8% | Score équilibré global |

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
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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

## True Positives (3)

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
| [MF0027] MF Tarti Aubergine 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle long et régulier identifié entre 38 et 46 jours
- **Cycle médian (jours)**: 38
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-16 (dans 35j)
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Commandes sporadiques alternant lundi et jeudi ; la dernière commande vient d'être effectuée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle récent entre les deux dernières commandes est de 38 jours. La dernière commande ayant eu lieu il y a 3 jours (2025-10-09), la prochaine est estimée pour le 2025-11-16 (soit dans 35 jours). Selon les règles de gestion B2B pour les cycles de 31-45 jours, une anticipation est nécessaire. La quantité est stabilisée à 1 unité sur l'année 2025, remplaçant les fluctuations de 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 884 tokens
- **Output**: 2,429 tokens
- **Total**: 3,313 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I'm currently focused on the sales data for product MF0027, specifically the MF Tarti Aubergine 250g. I've noted the recent sales history, with 1 unit sold on October 9th and another on September 1st. The sales interval seems to be around 3. I'm trying to determine trends.


**Assessing Order Risk**

I'm now calculating the risk of reordering MF Tarti Aubergine 250g. Using the 38-day cycle, I project the next order around November 16th. Given today's date of October 12th, that's 35 days away, which triggers a potential risk flag. The last order was recent, though, so it needs further analysis. I am looking more closely at the last order's date.


**Refining Risk Evaluation**

I'm wrestling with the conflicting indicators on MF Tarti Aubergine 250g. The 35-day window to the predicted next order (November 16th) triggers a potential risk flag according to the rules, but the recent order (October 9th) contradicts it. I'm focusing on the rule's nuances now.


**Reflecting on the Rules**

I am now reviewing the rules again. The 35-day window to the predicted order date still flags a risk, which triggers a recommendation for an order. However, the short interval since the last order (only 3 days) feels counterintuitive. I am confirming if the rules account for this circumstance.


**Evaluating System Logic**

I'm now grappling with the rules' nuances, the 35-day window for MF Tarti Aubergine 250g, and the recent order. While the rules flag a risk for anticipation, a recent purchase feels contradictory. I need to clarify the relationship between the 30-day decision horizon and the potential 35-day order date, considering B2B implications. The "Yes" on risk leads to a recommended quantity > 0.


**Revisiting Quantity Decisions**

I'm now clarifying the order quantity. Because a "Risk = Yes" flag triggers, the recommended quantity is >0. The historical data and the rules suggest 1 unit. The 38-day cycle, with the last order on October 9th, aligns with the anticipation window, so I'm finalizing the baseline.


**Formulating Final Recommendations**

I'm now consolidating all the data. The rules dictate a "Yes" on risk due to the 35-day window, prompting a reorder. However, recent orders and quantity consistency complicate the decision. I've re-examined the cycle, quantity and dates, leading me to confirm a baseline order of 1 unit.




</details>

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.5u
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
- **Pattern temporel**: Cycle régulier d'environ 21 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian détecté est de 21 jours. La dernière commande datant du 22 septembre, la prochaine est prévue pour le 13 octobre (soit demain par rapport à la date du jour). Il y a donc un risque imminent de rupture. Concernant le volume, les quantités oscillent strictement entre 1 et 2 unités. Conformément aux directives pour les petites quantités (1-2u), on retient la valeur basse de l'alternance.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 868 tokens
- **Output**: 1,687 tokens
- **Total**: 2,555 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking recent sales data**

I'm currently focused on the sales history for the ReBEL chips, specifically the paprika fumé flavor. My initial scan confirms only a couple of units moved in September. I'm noting the days of the week to detect potential trends.


**Predicting the next sale**

I've calculated the median interval between sales, currently at 21 days. Based on this, and the last sale date of September 22nd, I anticipate the next order to come very soon, potentially tomorrow. I'm also assessing the risk level. The predicted order quantity will be 1 unit, given the sales pattern observed.


**Calculating predicted order details**

I'm now calculating the precise quantity for the next order. Given the recent sales history of the ReBEL chips and the patterns I'm observing, I predict a quantity of 1 unit. This conservative estimate is based on the fluctuating 1-2 unit sales.


**Confirming the predicted order**

The model confirms a high confidence in the prediction. I've re-evaluated the data and refined the analysis, the cycle and date calculations are fully correct. The anticipated order is for a single unit, and the date is estimated as tomorrow. I'm now cross-referencing this with external factors.




</details>

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 33 jours
- **Cycle médian (jours)**: 33
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité parfaite du volume par commande (2 unités). Bien que le cycle entre les commandes soit fluctuant (45 jours puis 21 jours), la médiane de 33 jours place la prochaine commande autour du 25 octobre. Étant à moins de 15 jours de cette date estimée, une commande est nécessaire. La quantité recommandée suit strictement la médiane historique très stable pour ce segment de petit volume.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 841 tokens
- **Output**: 1,457 tokens
- **Total**: 2,298 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking ReBEL Chip Sales**

Today, I'm focusing on the sales trajectory of the ReBEL chip product. I've been reviewing the sales history, noting the consistent bi-weekly Monday purchases of two units each. The most recent data point from 2025-10-12 and I see two previous purchases on 2025-09-22, and 2025-09-01, both Mondays. The data is consistent!


**Forecasting Future Purchases**

I'm now calculating the next potential purchase date, using the median interval between past orders. The intervals are 45 and 21 days, so the median interval is 33 days. Based on the last purchase on 2025-09-22, I predict the next order could be around 2025-10-25. This means there's a risk.


**Evaluating Order Timing Risk**

I'm now assessing the risk based on the predicted order date. The interval between orders seems to be shortening, and the calculated next order date is October 25th. Given today's date of October 12th, the estimated 13-day window presents a 'YES' risk, but the exact order date is still variable.


**Predicting the Replenishment**

I'm now refining the prediction. Based on the 21-day interval, a purchase on October 13th is expected, creating an even shorter window. However, to stay conservative, the 33-day median of the intervals will be kept. Considering the variability, a constant stock of two units is recommended.




</details>

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:33:27: 2u
- 2024-06-20 06:56:28: 1u
- 2023-11-07 08:16:41: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 1u
- 2025-08-05 10:30:50: 1u
- 2025-07-18 08:34:46: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 2u
- 2025-07-18 08:34:46: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (22)

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
| [ORG04] ORGANICA crunchy fruit fraise 12g | 2 | Stock prédit: 1.9u (59j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.9u (26j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Stock prédit: 1.8u (21j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: 0.9u (12j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: 0.9u (14j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: 1.8u (22j restants) → prédit 2u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.7u (38j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 2 | Stock prédit: -0.7u (-7j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.5u (19j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.8u (59j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.5u (38j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: 0.6u (51j restants) → prédit 1u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: 0.6u (60j restants) → prédit 1u mais non commandé |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | Stock prédit: -1.0u (-20j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Stock prédit: -0.8u (-17j restants) → prédit 1u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock prédit: 0.5u (47j restants) → prédit 1u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -0.8u (-27j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.0u (2j restants) → prédit 1u mais non commandé |


---

## False Negatives (10)

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
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock suffisant: 1.0u (40j restants > seuil 30j) |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | En rupture (-16j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | En rupture (-7j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | En rupture (-94j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [RF003] REFIELD Maïs 500G  | 1 | En rupture (-37j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | En rupture (-94j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock: 0.9u (26j restants) - filtré pour autre raison |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock: 0.9u (20j restants) - filtré pour autre raison |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock: 0.9u (20j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T14:46:54.172Z*
