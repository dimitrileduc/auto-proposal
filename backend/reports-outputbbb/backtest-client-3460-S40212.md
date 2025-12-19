# Rapport Backtest - Client UPFRESH - HUPPA

## Contexte

- **Client** : UPFRESH - HUPPA (ID: 3460)
- **Commande réelle** : S40212
- **Date commande** : 2025-11-07 12:42:09
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 2
- **Tokens**: 4,930 input + 5,637 output = 10,567 total


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
| **MAE** | 80.00 unités | Erreur moyenne absolue (symétrique) |
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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 80 | 80.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 80u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 160u
- 📊 **Médiane historique**: 160u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 80u (100.0%)
- 📉 **Erreur Médiane**: 80u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel régulier (médiane 14j), client actuellement en retard
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-03
- **Prochaine prédite**: 2025-10-17 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Habituellement commandé le vendredi, dernière commande il y a 34 jours.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des intervalles récents [6, 22, 12, 16 jours] donne un cycle médian de 14 jours. La dernière commande datant du 2025-10-03, le client est en retard de plus de 20 jours sur son cycle habituel, ce qui déclenche un risque immédiat de rupture (Risque = OUI). Concernant les quantités, le client oscille entre 80u et 160u (multiples de 80), avec une prédominance pour le volume de 160u lors des trois dernières commandes de 160u (sauf une exception). On maintient donc la proposition sur la borne haute habituelle pour sécuriser le stock après cette période d'inactivité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,540 tokens
- **Output**: 2,267 tokens
- **Total**: 4,807 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Potential Demand**

I've been crunching the numbers for PF0078, the FILOU CHASSEUR 5 L. Focusing on the last three months, I'm noting the sales figures from the recent history. Specifically, I'm looking at the past sales from the dates of 2025-10-03, 2025-09-17, and 2025-09-05. Right now, I am estimating the baseline demand.


**Assessing Quantity Prediction**

I am now focusing on determining the quantity needed. Reviewing recent sales data, I've noted the fluctuating figures of 160, 160, 80, 160, and 80 units. I plan to use these, along with the historical N-1 data, to establish a range. The next step is to use the sales interval to determine the next order date. I am seeing if there are any seasonal trends.


**Evaluating Client Status**

I am now reviewing the client's order frequency. Analysis reveals a bi-weekly cycle, with the last order exceeding the expected timeframe. The risk assessment flags the client as overdue, suggesting an immediate need. With the "Dans le doute, on commande" and "Client en retard" rules, ordering the usual quantity is necessary.


**Calculating Order Recommendations**

I have finalized the analysis for PF0078. Considering the bi-weekly cycle and the overdue status, the "Dans le doute, on commande" rule confirms the need to order. Historical data points to 160 units as the most frequent and recent quantity. My assessment strongly recommends ordering 160 units immediately.


**Synthesizing Order Recommendations**

I am now consolidating all findings. The client's bi-weekly cycle is clear, and they are overdue. Historical data shows frequent orders of 160 units, which is also the most recent quantity. Due to the overdue status and consistent historical orders, I am recommending an immediate order of 160 units.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 09:41:57: 160u
- 2025-09-17 14:17:46: 160u
- 2025-09-05 12:22:01: 80u
- 2025-08-14 08:19:07: 160u
- 2025-08-08 11:47:43: 80u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-18 10:25:14: 80u
- 2024-10-11 09:28:27: 160u
- 2024-10-04 08:58:23: 120u
- 2024-09-24 07:06:54: 80u
- 2024-08-30 09:47:24: 160u
- 2024-08-12 09:07:12: 160u
- 2024-07-19 09:36:52: 80u
- 2024-06-28 10:23:12: 160u
- 2024-06-17 07:31:21: 80u
- 2024-05-31 10:28:10: 80u
- 2024-05-27 06:49:47: 120u
- 2024-04-30 06:38:23: 160u

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 80u

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
| [PF0088] FILOU VOL AU VENT 800 GR | 20 | Stock prédit: -7.5u (-39j restants) → prédit 20u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:52:31.424Z*
