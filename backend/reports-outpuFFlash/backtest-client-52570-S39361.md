# Rapport Backtest - Client ASBL L'Accueil - Magasin du Val Dieu

## Contexte

- **Client** : ASBL L'Accueil - Magasin du Val Dieu (ID: 52570)
- **Commande réelle** : S39361
- **Date commande** : 2025-09-24 09:45:50
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 14,528 input + 72,919 output = 87,447 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.4% | 18 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 61.5% | Score équilibré global |

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
| **MAE** | 0.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 41.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 35.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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

## True Positives (8)

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
| [LV160] LV Tartinade Aubergine 190g | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 22 à 26 jours identifié sur 2024 et 2025.
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-08-26
- **Prochaine prédite**: 2025-09-19 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Le cycle moyen de commande est d'environ 24 jours. La dernière commande date d'il y a 28 jours (26 août), ce qui signifie que le produit est théoriquement déjà en rupture ou en besoin immédiat de réapprovisionnement. Bien que la dernière commande ait été anormalement basse (1 unité), l'historique N-1 et le début d'été 2025 montrent une demande constante de 4 unités pour cette période. On préconise donc le retour à la quantité habituelle de 4.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 876 tokens
- **Output**: 1,471 tokens
- **Total**: 2,347 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Sales Data Trends**

The data reveals a consistent pattern in LV Tartinade Aubergine 190g sales. Analyzing the sales history from 2025 shows a series of sporadic orders, with 1 unit sold on 2025-08-26, and 4 units each on 2025-08-04 and 2025-07-10.


**Projecting Future Orders**

Considering the past sales of LV Tartinade Aubergine 190g, specifically from 2024 and 2025, I've calculated a median order cycle of approximately 23-24 days.  The last order was on 2025-08-26, and the current date is 2025-09-23, which is 28 days later. This suggests an order is likely overdue. I assess a high risk of stock rupture within 30 days.


**Assessing Recommended Order Quantity**

I've examined the quantity data. The recent drop to 1 unit on the last order is a key point. However, the consistent historical norm is 4 units, particularly around this time of year. Therefore, I'm recommending a quantity of 4 with medium confidence due to that recent anomaly.


**Evaluating Overdue Order Status**

My analysis indicates that the order for LV Tartinade Aubergine 190g is overdue based on the calculated 24-day cycle. Today being 2025-09-23, and the last order being on 2025-08-26, implies a potential stock rupture. I am assessing the confidence level in the 4-unit recommendation and refining that based on current order patterns.




</details>

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 28 jours
- **Cycle médian (jours)**: 28
- **Dernière commande**: 2025-08-26
- **Prochaine prédite**: 2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23 00:00:00 - predict_today_as_2025-09-23_instead_of_date_pattern_placeholder_value_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days_predicted_next_date_2025-09-23_until_next_0_days_until_next_0_days 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande moyen est de 28 jours. La dernière commande ayant eu lieu le 2025-08-26, la prochaine commande théorique tombe aujourd'hui (2025-09-23). Il existe un risque de rupture imminent. Les quantités historiques sont très stables, centrées sur 4 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 850 tokens
- **Output**: 29,053 tokens
- **Total**: 29,903 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product History**

I'm currently looking at the sales history of LV BIO Tartinade Paprika Chili 190g. Recent data shows sales on 2025-08-26 with 4 units sold, and prior to that, 4 units on 2025-07-10. I'm focusing on the sales intervals within 2025 to understand the trends.


**Projecting Future Orders**

I've crunched the numbers and calculated the median and average sales intervals for this product. Based on the 28-day average, and given the last order was on August 26th, I predicted today, September 23rd, as the next potential order date. Looking at September 2024 data, there's further support, so I'm keen to observe for confirmations.


**Determining Order Quantities**

I've examined the sales quantities, finding a stable trend, with "4" being the median and mode. Based on this, and the consistent sales across the last two years, I'm recommending an order quantity of 4 units. Confidence is high, due to the predictable sales pattern.


**Reviewing Data and Analysis**

I've just finished the deeper dive into the data. The analysis shows a clear 28-day cycle with stable demand. Today is the predicted order date, confirming my previous calculations. Also, the recommended order quantity is 4 units. I'm feeling confident about this recommendation, given the consistency I've seen.




</details>

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier avec une médiane de 22 jours
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-08-26
- **Prochaine prédite**: 2025-09-17 (dans -6j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: Commande habituellement toutes les 3-4 semaines, dernière commande il y a 28 jours
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle habituel de réapprovisionnement (médiane de 22 jours) est dépassé car la dernière commande date de 28 jours. L'historique récent et N-1 montre une stabilité parfaite sur la quantité de 4 unités pour cette période de l'année. Un besoin de réapprovisionnement est donc imminent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 849 tokens
- **Output**: 1,314 tokens
- **Total**: 2,163 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently focused on the sales history for LV Tartinade Mangue curry. I've noted the consistent sales of 4 units across several dates in 2025. Now I'm comparing this to the previous year, specifically looking at the 2024 data to identify any patterns or significant shifts in demand. I am starting to form some initial hypotheses.


**Predicting Future Orders**

I'm now zeroing in on the potential for an overdue order. The median cycle is 22 days, and the last order was 28 days ago. Comparing this to September 2024 data, where orders occurred around the same time, I believe a reorder is highly probable and potentially overdue. I am currently evaluating the possible risks.


**Assessing Reorder Probability**

I've just finished analyzing the data for LV Tartinade Mangue curry, and the conclusion is clear. The reorder is overdue, based on the median cycle and the fact the last order was 28 days ago. The quantities are consistent, and a new order for 4 units is highly likely. I've calculated the date to be the 17th of Sept, and it is the 23rd, so it is indeed overdue. The confidence level is high.




</details>

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 4u
- 📊 **Baseline calculée**: 4u
- 📊 **Médiane historique**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 4u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 22 à 25 jours
- **Cycle médian (jours)**: 24
- **Dernière commande**: 2025-08-26
- **Prochaine prédite**: 2025-09-19 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est extrêmement stable avec une médiane de 24 jours. À la date actuelle (23 septembre), la commande est théoriquement due depuis le 19 septembre (28 jours se sont écoulés depuis la dernière commande). La quantité est constante à 4 unités sur les trois derniers mois et correspond à l'historique N-1 sur la même période.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 822 tokens
- **Output**: 1,494 tokens
- **Total**: 2,316 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Product Demand**

I've been crunching the numbers on the LV Tartinade Tomato Basilico, focusing on its sales history. The interval between sales in August was 22 days, then a recent sale of 4 units on August 26th. It's giving me a decent picture of the demand for this product. I need to extrapolate to predict sales in September.


**Forecasting Sales Trends**

I've analyzed the historical sales data for the Tartinade. Comparing the recent 28-day gap since the last order to the 24-day median interval, I see we're overdue. Considering the consistent quantity of 4 units per sale recently, and similar trends from last year, an imminent order seems highly probable.


**Evaluating Order Imminence**

I've been calculating the number of days since the last order of the Tartinade, which was on August 26th. The median cycle is about 24 days, and at 28 days past the last order, I've concluded the order is overdue. Sales quantities have been consistently at 4 units. The risk criteria confirm we need to recommend another order.


**Predicting Next Order Date**

I've been examining the product's ordering patterns in detail.  Comparing 2024 and 2025, the last order on August 26th is now 28 days past, significantly exceeding the 24-day median cycle. Quantities remain stable at 4 units. I'm now confident in predicting an urgent need for an order.




</details>

</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 1.67u
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
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Rythme de commande régulier d'environ 25 jours
- **Cycle médian (jours)**: 25
- **Dernière commande**: 2025-08-26
- **Prochaine prédite**: 2025-09-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle médian entre les commandes est de 25 jours. La dernière commande datant du 2025-08-26, la prochaine commande était théoriquement attendue aux alentours du 2025-09-20. Nous sommes le 2025-09-23, le client est donc en retard sur son cycle habituel, ce qui indique un besoin immédiat. La quantité de 2 unités est la plus fréquente et correspond à la médiane des commandes récentes.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 828 tokens
- **Output**: 1,876 tokens
- **Total**: 2,704 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Sales Trends**

I've been poring over the sales data for the LV Mini grissini. It looks like unit sales are slightly down this year compared to last, especially when considering the time between purchases. I'm focusing on the delta between the two years' sales patterns. The 2024 data is proving useful to identify any patterns.


**Projecting Order Probability**

I'm focusing now on the risk assessment. The model projected an order on September 20th, which has already passed. The median order quantity is 2, though the baseline suggests 1. Risk is currently high, so I will prioritize this client.


**Assessing Restock Timing**

\n\n

I've calculated the median order cycle for the LV Mini grissini at 25 days, and the last order was 28 days ago. This confirms the client is overdue. I've recommended a quantity of 2 units, consistent with recent order patterns and the 2025 data. The risk level is flagged as high.




</details>

</details>


<details>
<summary><strong>6. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Irrégulier avec des cycles variant entre 28 et 72 jours (médiane ~47 jours)
- **Cycle médian (jours)**: 47
- **Dernière commande**: 2025-07-10
- **Prochaine prédite**: 2025-08-26 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
La dernière commande remonte au 10 juillet 2025, soit il y a 75 jours. Le cycle médian observé est de 47 jours et l'intervalle le plus long enregistré par le passé est de 72 jours. Le client est donc statistiquement en rupture ou proche de l'être. On se base sur la quantité la plus fréquente (2u) constatée récemment et en N-1 pour le réapprovisionnement.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 720 tokens
- **Output**: 1,364 tokens
- **Total**: 2,084 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Anticipating Product Launch**

I'm focused on the upcoming launch of LV Pizza Croccantina. I've pinpointed the target date as September 23rd, 2025. Recent progress shows 2 units were completed on July 10th. Looking back, I can see production history from September 2nd, 2024.


**Assessing Production Intervals**

I'm deep in the analysis, examining the production intervals for LV Pizza Croccantina in 2024. My calculations show a median interval of roughly 47 days. However, with 75 days elapsed since the last order, I'm now concerned. I am currently evaluating the irregular demand patterns and predicting the next potential order date based on these irregular patterns.


**Projecting Order Volume**

I'm now assessing potential order quantities for the LV Pizza Croccantina. I've excluded the outlier of 5 units. The calculations show a median of 2 units, a mean of 1.6 units, and the most frequent volume is 2 units. I've noted a weak seasonality, and the trend remains stable.


**Determining Restock Strategy**

I've examined the history and concluded the customer is likely overdue for restock of LV Pizza Croccantina. I considered the median cycle, current elapsed time, and historical gaps. My assessment now favors a restocking recommendation of 2 units, given the stable trend and the business-to-business context. I am building a model to predict the next order.




</details>

</details>


<details>
<summary><strong>7. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.4u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes sporadiques avec un cycle médian d'environ 48 jours (plage 28-72 jours).
- **Cycle médian (jours)**: 48
- **Dernière commande**: 2025-07-10
- **Prochaine prédite**: 2025-08-27 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Le cycle moyen de réapprovisionnement (48 jours) est largement dépassé (75 jours depuis la dernière commande). Bien que le volume soit faible et irrégulier, une commande d'une unité à la même période en N-1 et l'épuisement probable du stock actuel justifient un réapprovisionnement de précaution.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 716 tokens
- **Output**: 1,925 tokens
- **Total**: 2,641 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating recent production runs**

I'm focused on the production history for LV002, the Pizza Croccantina. I've pinpointed a run of 1u on 2025-07-10, roughly 75 days ago. I'm also cross-referencing this with the past year, noting a run of 1u on 2024-09-02. I'm building a timeline to understand production frequency.


**Analyzing order frequency patterns**

I'm now diving into the intervals between orders in 2024 to refine my understanding. The median interval seems to be around 47-48 days. Also, I've noted that the 2024-09-02 order puts current timing right on schedule, if we consider that order's timing last year. Based on this, there is no real urgency.


**Predicting the next order**

I've examined the recent ordering behavior, and the client is past due for an order based on the 48-day median cycle. Given the sporadic nature, and the last September order being 1u, I project a 1u order is likely in the next 30 days. The risk profile is YES.


**Estimating order quantity and dates**

I'm now calculating a likely order quantity, given the trend towards 1u orders, and the previous year's September order. My confidence is low due to the sparse data. Also, the next order is overdue based on historical patterns. I'm reviewing the recent 2024 order history for precise timing.


**Refining risk assessment and projection**

I'm now recalculating the risk profile, using a predicted date of August 27th, and the current date of September 23rd. This confirms that the next order is overdue. The days_until_next is actually -27 days, meaning the order is in the past, and I am assigning a risk profile of YES. Additionally, I am looking at the confidence level.


**Refining final calculations**

I'm now recalculating the risk profile, using a predicted date of August 27th, and the current date of September 23rd. My analysis of the time since the last order indicates it is overdue, and, therefore, I'm assigning a "Risk YES" profile. Also, I am adjusting my confidence level.




</details>

</details>


<details>
<summary><strong>8. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2.1u
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
- **Pattern temporel**: Cycle irrégulier avec une médiane de 39 jours en période active
- **Cycle médian (jours)**: 39
- **Dernière commande**: 2025-07-10
- **Prochaine prédite**: 2025-09-26 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La dernière commande remonte à 75 jours, ce qui dépasse largement le cycle médian détecté de 39 jours. Le client a commandé à la même période l'année dernière (septembre 2024). Bien que le cycle soit irrégulier, le risque de rupture sur l'horizon de 30 jours est élevé car une commande de réapprovisionnement est statistiquement imminente. La quantité recommandée se base sur la médiane et les commandes récentes (2 unités).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 716 tokens
- **Output**: 1,937 tokens
- **Total**: 2,653 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Analyzing Product Sales Data**

The initial data point is understood: a July order of two units. Now, I'm analyzing the 2024 sales data to establish a baseline. I've noted a September 2024 order of one unit. Considering seasonal variations will be essential, and I'll soon move to assess other contributing factors like marketing campaigns.


**Forecasting Order Frequency**

I'm now calculating the typical reorder intervals from the 2024 data, excluding the large gap. The median interval is approximately 39 days. Since it's been 75 days since the last order on July 10th, I see a high risk of stock rupture within the next 30 days. This warrants urgent attention.


**Determining Reorder Timeline**

I've calculated the median reorder interval, excluding the unusually long gap, to be 39 days. Since it's now September 23rd and the last order was on July 10th, I'm concerned about a potential stock rupture. The erratic ordering pattern complicates things, but the last order was 75 days ago, well past the 39-day median. Given past ordering patterns, I anticipate an order soon. I'm focusing on quantity next.


**Evaluating Replenishment Risk**

I've determined a strong risk of stock rupture. Given the 75 days since the last order, and an irregular, but roughly 39-day median reorder cycle, combined with the fact that there was a September order last year, I estimate a replenishment order is highly likely within the next month, and quantity is likely to be 2.


**Calculating the Risk Assessment**

Now, I've confirmed that the order frequency is irregular, but I've noted a median cycle of 39 days. Since it's been 75 days since the last order, and an order occurred in September last year, the risk of a missed sale is high in the next 30 days. Furthermore, quantities have been steady at 2.




</details>

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 07:12:09: 1u
- 2025-08-04 11:51:02: 4u
- 2025-07-10 11:10:19: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 4u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 3u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 07:12:09: 4u
- 2025-07-10 11:10:19: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 07:12:09: 4u
- 2025-08-04 11:51:02: 4u
- 2025-07-10 11:10:19: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 4u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 3u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 07:12:09: 4u
- 2025-08-04 11:51:02: 4u
- 2025-07-10 11:10:19: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 07:12:09: 2u
- 2025-08-04 11:51:02: 1u
- 2025-07-10 11:10:19: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-06-27 05:39:39: 2u
- 2024-05-08 09:59:31: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 1u
- 2024-02-20 11:06:01: 3u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-10 11:10:19: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-06-05 12:11:39: 2u
- 2024-03-25 10:03:13: 1u
- 2024-02-20 11:06:01: 5u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-10 11:10:19: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-06-05 12:11:39: 2u
- 2024-03-25 10:03:13: 1u
- 2024-02-20 11:06:01: 5u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-10 11:10:19: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-05-08 09:59:31: 2u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 5u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

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
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | Stock prédit: 2.4u (16j restants) → prédit 4u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 3 | Stock prédit: 1.5u (11j restants) → prédit 3u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 4 | Stock prédit: 1.9u (9j restants) → prédit 4u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 4 | Stock prédit: 1.9u (9j restants) → prédit 4u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 4 | Stock prédit: 0.1u (0j restants) → prédit 4u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 4 | Stock prédit: 1.9u (43j restants) → prédit 4u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | Stock prédit: 0.9u (40j restants) → prédit 2u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | Stock prédit: 0.9u (40j restants) → prédit 2u mais non commandé |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | Stock prédit: 0.9u (40j restants) → prédit 2u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 4 | Stock prédit: -0.6u (-10j restants) → prédit 4u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T13:01:02.230Z*
