# Rapport Backtest - Client HOUGARDY S.A.

## Contexte

- **Client** : HOUGARDY S.A. (ID: 3576)
- **Commande réelle** : S39635
- **Date commande** : 2025-10-09 09:00:46
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 2
- **Tokens**: 1,922 input + 3,433 output = 5,355 total


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
- 📊 **Baseline calculée**: 128u
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
- **Pattern temporel**: Cycle régulier alternant entre 6 et 14 jours (médiane 10.5j), principalement le jeudi ou vendredi
- **Cycle médian (jours)**: 10
- **Dernière commande**: 2025-10-02
- **Prochaine prédite**: 2025-10-12 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très stable avec une médiane de 10-11 jours. La dernière commande (80u) ayant eu lieu il y a 6 jours (le 02/10), la prochaine est prévue sous 4 à 5 jours, ce qui justifie une commande immédiate pour éviter la rupture (horizon < 40j). La quantité de 160u est retenue car c'est la quantité dominante (mode) dans l'historique récent et N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,036 tokens
- **Output**: 1,723 tokens
- **Total**: 2,759 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Recent Production Runs**

I'm currently tracking the production runs for the FILOU CHASSEUR product. I observed an 80u order six days ago, and before that, a 160u order two weeks prior. The 160u order before that was another two weeks back. The pattern seems somewhat consistent, with a potential cycle forming.


**Calculating Production Risk Level**

I've crunched the numbers on the FILOU CHASSEUR 5L product, focusing on the recent production runs to assess the risk. Based on the median interval of 10.5 days, I've projected the next order around October 12th or 13th. Since that falls within a timeframe I've deemed risky, with just 4-5 days to go, I've flagged this. I also noted the client appears to alternate orders, either 160u every two weeks or 80u weekly.


**Refining Risk Predictions**

I'm now zeroing in on the precise nature of the upcoming order. I've re-examined the history, paying particular attention to the N-1 data from October. This, combined with the observed weekly/bi-weekly order pattern, is helping to narrow down the probable volume. I now expect 160 units, and the risk remains high.


**Calculating Expected Quantity**

I've now decided to quantify the recommended order. Considering the cyclical nature and recent orders, especially the most recent 80u on October 2nd, I'm recommending a 160u order. This recommendation is based on a high confidence level due to the consistent pattern observed over time.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 11:42:51: 80u
- 2025-09-25 06:26:38: 160u
- 2025-09-11 08:09:42: 160u
- 2025-09-05 07:35:32: 80u
- 2025-08-22 09:59:43: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:59:28: 160u
- 2024-09-24 07:02:33: 160u
- 2024-09-12 09:58:22: 160u
- 2024-09-05 11:35:13: 80u
- 2024-08-14 06:06:20: 80u
- 2024-07-04 07:42:30: 160u
- 2024-06-27 07:49:07: 80u
- 2024-06-18 08:13:28: 160u
- 2024-06-06 12:24:49: 160u
- 2024-05-08 14:34:51: 160u
- 2024-04-18 07:28:42: 160u
- 2024-04-11 07:40:36: 80u

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
| [PF0077] FILOU PROVENCALE 5 L | 40 | Stock prédit: 32.2u (20j restants) → prédit 40u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T11:15:44.901Z*
