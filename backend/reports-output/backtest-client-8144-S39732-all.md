# Rapport Backtest - Client DELISALADES, Jean-Luc Durré

## Contexte

- **Client** : DELISALADES, Jean-Luc Durré (ID: 8144)
- **Commande réelle** : S39732
- **Date commande** : 2025-10-15 07:52:35
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 2
- **Tokens**: 1,768 input + 4,270 output = 6,038 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
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
| [PF3251] JEFKE CHIVE VINAIGRETTE 5L | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF3251] JEFKE CHIVE VINAIGRETTE 5L</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 40u
- 📊 **Baseline calculée**: 40u
- 📊 **Médiane historique**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 40u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 20-23 jours
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-14_2025-10-15_2025-10-16_2025-10-17_2025-10-18_2025-10-19_2025-10-20_2025-10-21_2025-10-22_2025-10-23_2025-10-24_2025-10-25_2025-10-26_2025-10-27_2025-10-28_2025-10-29_2025-10-30_2025-10-31_2025-11-01_2025-11-02_2025-11-03_2025-11-04_2025-11-05_2025-11-06_2025-11-07_2025-11-08_2025-11-09_2025-11-10_2025-11-11_2025-11-12_2025-11-13_2025-10-14_2025-10-14_2025-10-14_2025-10-14_2025-10-14_2025-10-14_2025-10-14_2025-10-14_2025-10-14_2025-10-12 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen entre les commandes est de 23 jours et le cycle médian est de 20 jours. La dernière commande datant du 22 septembre, nous sommes exactement à 22 jours d'intervalle à la date du jour (14 octobre). Une commande est donc imminente. Les volumes sont très stables avec une prédominance de 40 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 871 tokens
- **Output**: 1,629 tokens
- **Total**: 2,500 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product History**

I'm currently reviewing the historical data for product PF3251, JEFKE CHIVE V INAIGRETTE 5L, and its production volume (u) across several dates. I've noted a consistent 40u in July and August, then a drop to 30u in early September, and back up to 40u in late September. The target date for this product is in mid-October. I'm taking a closer look at this fluctuation.


**Calculating Order Prediction**

I've just finished the calculations. The product's reorder cycle is roughly 20 days, based on the recent history. The last order was on September 22nd. Given the target date of October 14th, the prediction for the next order date is spot on. My analysis suggests an order is indeed imminent, and the recommended quantity is 40.


**Finalizing the Recommendation**

I've just finalized the analysis. The product's reorder cycle is consistently around 20 days. The predicted order date aligns perfectly with today. Based on a stable history, the recommended order quantity is 40 units. I am very confident with my findings. Now I'm checking the JSON format and double-checking everything.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3251] JEFKE CHIVE VINAIGRETTE 5L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 10:41:21: 40u
- 2025-09-02 06:58:03: 30u
- 2025-08-14 06:19:08: 40u
- 2025-07-16 07:57:27: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>




---

## False Positives (1)

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
| [PF0078] FILOU CHASSEUR 5 L | 160 | Stock prédit: 160.0u (22j restants) → prédit 160u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:47:11.765Z*
