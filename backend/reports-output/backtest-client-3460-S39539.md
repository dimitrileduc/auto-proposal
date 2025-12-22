# Rapport Backtest - Client UPFRESH - HUPPA

## Contexte

- **Client** : UPFRESH - HUPPA (ID: 3460)
- **Commande réelle** : S39539
- **Date commande** : 2025-10-03 09:41:57
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 3,464 input + 5,927 output = 9,391 total


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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 160 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 160u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 160u
- 📊 **Médiane historique**: 160u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier alternant entre 6 et 15 jours, souvent groupé en multiples de 80u
- **Cycle médian (jours)**: 12
- **Dernière commande**: 2025-09-17
- **Prochaine prédite**: 2025-09-29 (dans -3j)
- **Dans horizon 30j ?**: ✅ OUI
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: Les commandes surviennent principalement en milieu et fin de semaine, la dernière commande date d'il y a 15 jours sur un cycle moyen de 12 jours.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit suit un cycle de réapprovisionnement très régulier d'environ 12 jours. La dernière commande remontant au 17 septembre, le client est déjà en phase de réapprovisionnement (15 jours écoulés). Les quantités sont standardisées par multiples de 80u, avec une médiane récente à 160u.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,325 tokens
- **Output**: 1,820 tokens
- **Total**: 3,145 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Recent Order Trends**

The recent order history for PF0078, the FILOU CHASSEUR 5 L product, reveals a pattern. There's a repeating order cycle: 160 units, then 80 units. I'm noting the intervals between these orders to predict future demands. The most recent order was 15 days ago, and I am currently considering the implications of this cycle.


**Refining Demand Projections**

I'm now zeroing in on the implications of the cycle. I've calculated a median interval of 9 days between orders, and even considering a slightly wider range, we're at day 15 since the last order. This suggests a high likelihood of a new order imminently, indicating a possible rupture risk if we're not prepared. I'm focusing on the predicted date now.


**Projecting Order Quantity & Risk**

I'm now focusing on the quantity. Given the oscillating pattern of 80 and 160 units, and that 160 units was the most recent order, I'm estimating the next order quantity will be 80 units, considering the historical pattern. Further, I am assessing the monthly volumes, which show a consistent demand. With a high probability of a new order, I will confirm a rupture risk exists.


**Concluding Forecasting & Action**

I'm now fully confident in the prediction. Based on the consistent 80/160 unit cycle, and monthly volume trend increases, I'm recommending we plan for an immediate order. The last order was 15 days ago, and a repeat of 160 units is most probable, which aligns with historical trends.


**Synthesizing Findings & Action**

I've finalized my analysis and reached a conclusive recommendation. Based on the consistent 80/160 unit cycle and a rising monthly demand trend, I'm recommending action. Specifically, I'm adjusting for the previous quantity patterns and considering the 2024 and 2025 volumes. I am confident we need to plan for a replenishment order of 160 units immediately, given that the cycle is now -3 days overdue.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 14:17:46: 160u
- 2025-09-05 12:22:01: 80u
- 2025-08-14 08:19:07: 160u
- 2025-08-08 11:47:43: 80u
- 2025-08-07 12:26:12: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 07:06:54: 80u
- 2024-08-30 09:47:24: 160u
- 2024-08-12 09:07:12: 160u
- 2024-07-19 09:36:52: 80u
- 2024-06-28 10:23:12: 160u
- 2024-06-17 07:31:21: 80u
- 2024-05-31 10:28:10: 80u
- 2024-05-27 06:49:47: 120u
- 2024-04-30 06:38:23: 160u
- 2024-04-05 09:23:24: 80u
- 2024-03-22 10:12:21: 80u
- 2024-03-15 10:48:34: 80u

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 160u

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
| [PF0088] FILOU VOL AU VENT 800 GR | 6 | Stock prédit: -3.0u (-11j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-22T13:54:48.520Z*
