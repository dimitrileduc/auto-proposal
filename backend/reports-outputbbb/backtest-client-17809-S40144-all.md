# Rapport Backtest - Client AU RAYON BIO

## Contexte

- **Client** : AU RAYON BIO (ID: 17809)
- **Commande réelle** : S40144
- **Date commande** : 2025-11-05 14:50:02
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 49,104 input + 41,303 output = 90,407 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.6% | 21 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 64.5% | Score équilibré global |

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
| **MAE** | 0.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 13.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 18.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 4.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (10)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 24 jours (médiane historique)
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian historique calculé sur l'historique N-1 et récent est de 24 jours. Avec une dernière commande au 2025-10-09, la commande théorique suivante était attendue pour le 2025-11-02. À la date actuelle (2025-11-04), le client est en retard de 2 jours par rapport à son rythme habituel, ce qui déclenche un risque de rupture imminent. Concernant la quantité, l'historique montre une stabilité remarquable à 2 unités par commande (présent dans 80% des cas), compensant les légères variations récentes (3u et 1u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,435 tokens
- **Output**: 1,842 tokens
- **Total**: 4,277 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Timeline**

I'm currently reviewing the recent history of the LV Tartinade Aubergine. The initial data point on the 9th of October shows 1 unit. I'm focusing now on charting out trends over the next 30 days to see how these initial data points evolve, specifically looking for shifts.


**Calculating Order Cycles**

I've moved from the initial date points to calculating the median order cycle. By sorting the intervals between orders from the previous year, I'm now determining the typical time frame between orders. The goal is to establish a reliable cadence.


**Evaluating Potential Risk Detected**

Now, I've confirmed that the order is slightly delayed based on the 24-day median cycle I calculated. Considering the last order was on 2025-10-09, I see the client is two days late. Moreover, I'm confident in anticipating the order of two units, the most common quantity.


**Projecting Next Order Details**

I've determined a 24-day order cycle and predicted the next order date as November 2nd, but it's now November 4th, revealing a slight delay. My model anticipates a two-unit order, a pattern consistently observed in the historical data. The client is a couple of days late, and a risk of rupture is confirmed.




</details>

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière tous les ~29 jours
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-07_00:00:00.000000Z00:00:00.000000Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z2025-11-07T00:00:00Z 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian détecté est de 29 jours avec une prochaine commande prévue autour du 7 novembre, soit dans l'horizon des 30 jours. Historiquement (N-1), le client commande très majoritairement 2 unités par session, malgré une légère variation récente. On préconise donc le maintien de cette quantité standard pour assurer la disponibilité sans surstockage.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,435 tokens
- **Output**: 6,313 tokens
- **Total**: 8,748 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Tartinade Data**

I've begun analyzing the sales data for the LV Tartinade Mangue Curry. Based on the provided information, I see only two data points, which indicates a 29-day cycle. This is a very limited dataset; further analysis needs to incorporate more data points to establish a reliable trend.


**Projecting Demand for LV161**

I've incorporated the historical data to refine the demand forecast for the Tartinade Mangue Curry. Based on the 29-day cycle and a predicted next order date of November 7th, I assess a high-risk situation within the next 30 days. The quantities show a mixed trend, leaning towards 2u but with recent peaks. The model should consider this.


**Finalizing the Recommendation**

I've now analyzed the data, concluding a high-risk situation within the next 30 days due to the predicted order date of November 7th. The long-term pattern points to 2u as the baseline, though recent data fluctuated. My confidence in the prediction is medium, accounting for the recent variability. I'm recommending 2u.


**Evaluating Final Parameters**

I've reviewed the final parameters: the frequency pattern, outliers, and seasonality. The product shows a stable trend with a 29-day cycle. The predicted next order is in three days. My confidence is high based on this, the client is on schedule, and the baseline quantity is a safe 2u.




</details>

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 24 jours
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian calculé sur l'historique long terme (N-1 et récent) est de 24 jours. La dernière commande datant du 2025-10-09, la date théorique de réapprovisionnement était le 2025-11-02. Au 2025-11-04, le client est en retard de 2 jours sur son rythme habituel, ce qui déclenche un risque de rupture imminent. Les quantités commandées sont extrêmement stables, oscillant presque exclusivement entre 2 et 3 unités (médiane de 3).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,436 tokens
- **Output**: 1,746 tokens
- **Total**: 4,182 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Evaluating Recent Sales Trends**

I'm currently focused on the sales data for the LV BIO Tartinade Paprika Chili. I've noted the recent sales history, specifically the two units sold on October 9th. Now, I'm digging deeper into the data, analyzing the impact of external factors such as seasonal trends or promotional activity. My goal is to forecast future sales for the next 30 days.


**Calculating Historical Trends Further**

I'm now calculating the median interval between historical sales to better understand the frequency of orders. By comparing the recent intervals to this median, I am aiming to identify any irregularities that might impact future forecasts. The median interval period is calculated by comparing order dates.


**Identifying Potential Risk Factors**

I'm now assessing the risk level. Based on the calculated median interval, and the product's recent order history, the client is two days past the expected reorder date. This, combined with the consistent order patterns, triggers a "RISQUE = OUI" flag, indicating a potential risk. I'll now focus on the quantity analysis to refine the order prediction.


**Calculating Reorder Recommendations**

I'm now calculating the recommended order quantity, taking into account the median cycle and the client's current status. Since they're two days overdue, combined with stable historical quantities and the lack of seasonality, I recommend 3 units. The confidence level is high due to the consistent order behavior observed.


**Summarizing Findings and Recommending**

Based on the analysis, I've confirmed a "RISQUE = OUI" flag due to the client being two days overdue. Considering the stable historical order quantities and the lack of seasonality, I recommend ordering 3 units. The confidence level is high, supported by the consistent order patterns observed. Now I'm preparing the final JSON output.




</details>

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier (~30 jours)
- **Cycle médian (jours)**: 30
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-08 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très stable avec une médiane de 30 jours observée sur l'historique récent (29j) et N-1. La dernière commande datant du 9 octobre, la prochaine est prévue pour le 8 novembre, soit dans 4 jours. En termes de quantité, le client commande quasi systématiquement par 2 unités (mode historique), les variations à 1 ou 3 unités étant occasionnelles. On maintient la recommandation à 2 unités pour assurer la disponibilité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,435 tokens
- **Output**: 2,011 tokens
- **Total**: 4,446 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Sales Data**

I'm currently analyzing the sales data for the LV Tartinade Tomato Basilico, specifically looking at the quantity sold over the past few months. I've noted the sales volumes from October and September and am preparing to extrapolate the trend, to understand seasonality and potential future demand.


**Calculating Intervals & Trends**

I'm now diving into the historical sales intervals. Analyzing the data, I've calculated a median interval of around 30 days, both recently and when considering last year's trends. Based on this, and the last order date, I'm predicting the next order to be approximately November 8th. I'm taking this into account while modeling for demand.


**Forecasting Order Placement**

I'm now zeroing in on the imminent order. Considering the consistent 30-day interval, and the current date being November 4th, I am confirming my prediction from earlier that another order is likely close. I've analyzed the historical order quantities and find them quite stable, and am confident in advising an order of 2 units.


**Reviewing and Refining Forecast**

I've re-examined the order intervals, finding more variance in the past than initially thought, but confirming an approximate 30-day cycle remains valid. Based on the date, I am confident in advising an order of 2 units. The analysis included historical quantities, trends, and dates. My reasoning is the 30-day ordering cycle and no seasonal peaks.


**Concluding Order Recommendations**

I have now finalized my analysis, integrating all the historical data. After refining the 30-day cycle and confirming the most common order quantity as 2 units, I'm confident in recommending an order of 2 units, given the approaching due date of November 8th.




</details>

</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.5u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 24 jours identifié en N-1 et confirmé récemment
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian calculé sur l'historique complet est de 24 jours. Avec une dernière commande au 2025-10-09, la date théorique de réapprovisionnement était le 2025-11-02. Le client est donc en léger retard sur son cycle habituel à la date actuelle (2025-11-04). Les quantités sont extrêmement stables (90% des commandes entre 2 et 3 unités), sans saisonnalité marquée. On recommande 3 unités pour assurer la disponibilité, correspondant au mode statistique observé.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,434 tokens
- **Output**: 1,703 tokens
- **Total**: 4,137 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product Performance**

I'm currently focused on the product "LV Tartinade Basilico 190g," specifically its sales data. I've noted recent activity, including 3 units sold on 2025-10-09 and 1 unit on 2025-09-10. Now, I'm delving into the prior year's performance to establish trends.


**Predicting Order Frequency**

I've crunched the numbers on the "LV Tartinade Basilico 190g" product, analyzing sales intervals from last year and comparing them to recent data. My calculations reveal a median cycle of 24 days.  Based on the last order on 2025-10-09, the next order was predicted for 2025-11-02, which has already passed. The client is flagged as "at risk" due to this delay.


**Forecasting Quantity Needed**

I'm now assessing the optimal order quantity for "LV Tartinade Basilico 190g." I've calculated the median of last year's orders (2.5 units, rounded to 3) and determined stable ordering patterns. The client's past quantities are mostly 2 or 3 units, and the client is currently slightly late on a previous prediction, given the order cycle, suggesting a need for 3 units.


**Evaluating Client Behavior**

I've just finished the comprehensive analysis. It shows the client is a little late, based on a 24-day cycle, and a recommendation for 3 units to meet their usual demand. My confidence in this advice is high, given the consistency of their ordering patterns. Now the conclusion is in JSON format.




</details>

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier (~29 jours)
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-07 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très stable à environ 29 jours, qu'il s'agisse de l'historique récent ou de N-1. La prochaine commande est théoriquement prévue pour le 2025-11-07 (soit dans 3 jours), ce qui justifie un risque de rupture imminent. En termes de volume, on observe une légère montée en puissance sur cette période tant en 2024 (1u -> 2u -> 3u) qu'en 2025 (1u -> 3u). On recommande donc de suivre la quantité maximale de 3 unités constatée lors des dernières occurrences pour assurer la disponibilité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,407 tokens
- **Output**: 1,988 tokens
- **Total**: 4,395 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Performance Trends**

I'm currently tracking the sales figures for the LV Tartinade Betterave, specifically looking at the last three months. Early data suggests relatively low, sporadic demand, with only a few units sold in September and October. I'm focusing on identifying any patterns or potential catalysts for these sales.


**Projecting Sales Cycle Behavior**

Now, I've dived deeper into the product's sales cycle. Analyzing intervals between orders reveals a median cycle of roughly 29 days. Based on this, and the last order, I've predicted the next potential order date, which falls in three days. This puts us in a "risk" scenario, with medium confidence in the prediction.


**Evaluating Inventory Needs**

I've just finished reviewing the sales quantities and seasonal trends. Comparing this year's data to last, I've seen low but slightly rising demand in Q4. Considering a potential order in three days, and a slight volume increase, I'm recommending we order 3 units.


**Finalizing the Recommendation**

I've synthesized the analysis and am ready to finalize my recommendation. Based on the 29-day cycle and the approaching order date of November 7th, with just three days to go, I'm at medium confidence. Considering the slight uptick in demand, and the consistent history of 3-unit orders in late October, I'm confidently recommending ordering three units to ensure sufficient stock.


**Summarizing Key Analysis Findings**

I've reviewed all data points, validating dates and sales figures. The 29-day cycle remains consistent, with the next order date predicted for November 7th. I've considered the increased demand at this time of year and the overall pattern of ordering 3 units. The final recommendation is to order 3 units.




</details>

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.5u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière environ chaque mois (24-29 jours)
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-07 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian calculé entre 24 et 29 jours à travers l'historique complet. La prochaine commande est attendue pour le 2025-11-07, soit dans 3 jours. Bien que les deux commandes de 2025 soient de 1u, la quasi-totalité de l'historique N-1 affiche des commandes de 2u. Dans une optique de disponibilité B2B, on retient la quantité historique robuste de 2u pour couvrir le besoin de novembre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,438 tokens
- **Output**: 1,785 tokens
- **Total**: 4,223 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Recent Data Points**

I'm currently focused on the sales data for LV126, the tomato and wild garlic tartinade. I'm examining the recent sales figures. Seeing just one unit sold on October 9th is something I need to further investigate, as I consider my 30-day horizon, and what the recent trends are telling me.


**Calculating Interval Durations**

I'm now calculating the intervals between sales in the N-1 data to pinpoint the cadence of purchases. The initial view indicates significant variability in the time between sales, with intervals ranging from 10 to 49 days. This requires deeper analysis to determine if there's any pattern at all, or seasonality.


**Evaluating the Order Cadence**

I've examined the N-1 sales data and compared it to the recent sales interval of 29 days. Based on the 24-day median interval from last year's data, I now predict the next order could occur around November 7th. The next data point will inform the rest of my decision.


**Predicting Order Quantity**

I've moved on to the question of quantity. Although recent orders have been 1 unit, the historical data suggests a preference for 2 units. The analysis of N-1 orders and the seasonal context point towards 2 units. I'm now inclined to recommend 2 units. I've noted the low risk, and that the product is almost due to be ordered.




</details>

</details>


<details>
<summary><strong>8. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande mensuelle régulière avec un cycle médian de 24 jours
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-02 (dans -2j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Le client commande habituellement tous les 24 jours; la commande théorique était attendue il y a 2 jours.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement identifié sur l'historique N-1 est très régulier avec une médiane de 24 jours. La dernière commande datant du 2025-10-09, le client est actuellement en retard de 2 jours sur son rythme habituel (date prédite au 2025-11-02), ce qui déclenche un risque de rupture imminent. Les quantités sont remarquablement stables avec 2 unités commandées systématiquement dans 92% des cas.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,407 tokens
- **Output**: 1,652 tokens
- **Total**: 4,059 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining LV BIO Sales**

I've been analyzing the LV BIO Tartinade Toscana sales data, specifically the LV330 product. I'm focusing on its recent history, particularly the October 2025 order of two units. Then, I'm examining sales patterns from January to October 2024 to understand the overall trends.


**Assessing the Order Delay**

I've determined the median order interval for LV330 to be 24 days, and the predicted next order date was November 2nd, 2025. Given today's date, November 4th, I've classified this as a "RISQUE = OUI" scenario, indicating a potential delay. The client is now two days past the expected order date.


**Determining the Order Details**

I've examined the historical order intervals, and the median is 24 days, leading me to predict the next order on November 2nd. The pattern shows consistent monthly orders, predominantly of two units. This robust data suggests a "RISQUE = OUI" assessment, and a recommended order for 2 units.


**Calculating the Next Order**

I've rigorously analyzed the order history for the LV330 product, confirming the 24-day median cycle. Using the last order date of October 9th, 2025, the projected next order date was November 2nd, 2025, which has passed, and which has now reinforced the "RISQUE = OUI" flag. I'll maintain the recommendation of 2 units.




</details>

</details>


<details>
<summary><strong>9. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.76u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 29 jours
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-07 (dans 3j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Habituellement en semaine (lun/mar/mer/ven), dernière commande un jeudi, commande prévue imminente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 29 jours identifié via une analyse exhaustive de l'historique récent et N-1. La prochaine commande est prévue pour le 2025-11-07 (J+3), ce qui déclenche un risque imminent dans l'horizon de 30 jours. Les quantités sont historiquement très stables, oscillant majoritairement entre 1 et 2 unités. La recommandation de 2u est cohérente avec la médiane et assure la disponibilité sans surstockage excessif.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,410 tokens
- **Output**: 1,879 tokens
- **Total**: 4,289 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Recent Data Points**

I'm currently focused on the sales data for the LV Tartinade Lentils Balsamico. The most recent history shows a purchase of one unit on October 9th, and three units a month prior. My next step will be to look for external factors and determine if there are any significant patterns or actionable insights that I can identify based on these figures.


**Calculating Order Intervals**

I've just finished calculating the intervals between orders for the LV Tartinade Lentils Balsamico. The median interval seems to be around 29 days, with some significant variation over time. Now, I'm considering the implications of this data, and what factors might explain such a range in purchase frequency.


**Evaluating The Order's Risk**

I've just calculated the predicted next order date as November 7th, just three days from today. Based on the historical data, I have high confidence in this prediction. I'm also observing the baseline quantities, mostly 1s and 2s, with a recent order of 3 units, and no significant seasonality to note, so far.


**Determining Recommended Quantity**

I'm now zeroing in on the ideal order quantity, considering both the recent and past buying habits. The client usually buys 1 or 2 units. Thus, I've calculated the baseline, and I'm leaning toward recommending 2 units based on both the history and recent trends. I am factoring this into my final prediction.


**Formulating The Recommendation**

I'm synthesizing all the data now. The client's order cycle is around 29 days, with a predicted order for November 7th. Considering the historical quantity patterns, especially the recent trend, I suggest recommending 2 units. I'm highly confident in the prediction, although the small order sizes warrant caution.




</details>

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.6u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 30 à 35 jours
- **Cycle médian (jours)**: 35
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-13 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian identifié sur l'ensemble de l'historique est de 34,5 jours. La dernière commande datant du 2025-10-09, la prochaine est estimée autour du 2025-11-13 (soit dans 9 jours), ce qui entre dans l'horizon de 30 jours. Les quantités sont historiquement comprises entre 1u et 2u. Par prudence B2B et au vu de la dernière commande de 2u, on retient la quantité haute habituelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,382 tokens
- **Output**: 1,728 tokens
- **Total**: 4,110 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product Sales**

The initial data shows a slow start with minimal units sold in the recent past. The trend, based on the last three months, doesn't suggest strong growth for the olive, caper, and tomato tartinade. I'm now keen on diving deeper into last year's sales to get a clearer view of seasonal patterns and identify potential demand drivers.


**Investigating Order Cycles**

I'm now calculating the median order cycle for the LV332 tartinade by reviewing the intervals between past orders, aiming to understand the frequency of purchases. Sorting those intervals, and calculating the median, gives me roughly 34.5 days, though the most recent cycles are shorter. This leads me to want to see if this is related to a shortage or some other factor.


**Projecting Future Orders**

Considering the 34.5-day median order cycle, and the most recent order on October 9th, I'm projecting the next order around November 12th. Based on past orders, and stable, low volume, I recommend ordering 2 units. The absence of seasonality suggests consistent demand.


**Determining Recommended Quantity**

The product's historical data confirms an average order quantity of roughly 1.6 units, with most orders being 2. Considering the client's preference for ordering in small quantities, and the lack of seasonality, I lean toward recommending 2 units for the upcoming order to ensure enough stock. Confidence is medium.




</details>

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:57:37: 2u
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 3u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 2u
- 2025-09-10 13:23:04: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:57:37: 3u
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 4u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 3u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 3u
- 2024-02-02 09:19:36: 3u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:57:37: 1u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-11-28 08:55:15: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 3u
- 2025-09-10 13:23:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:57:37: 3u
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 3u
- 2025-09-10 13:23:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:57:37: 3u
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 1u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 1u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2023-12-15 07:53:16: 2u
- 2023-11-28 08:55:15: 1u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-11-28 08:55:15: 1u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 2u
- 2025-09-10 13:23:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u
- 2023-11-28 08:55:15: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (11)

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
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock prédit: 0.7u (72j restants) → prédit 1u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Stock prédit: 0.6u (43j restants) → prédit 1u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 3 | Stock prédit: 0.9u (11j restants) → prédit 3u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: -0.9u (-11j restants) → prédit 2u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 2 | Stock prédit: -1.3u (-14j restants) → prédit 2u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock prédit: 0.6u (11j restants) → prédit 2u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Stock prédit: 1.1u (29j restants) → prédit 2u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 3 | Stock prédit: -0.3u (-3j restants) → prédit 3u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: 0.2u (17j restants) → prédit 1u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Stock prédit: 0.2u (23j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T09:00:38.254Z*
