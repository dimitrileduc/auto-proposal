# Rapport Backtest - Client K&F DE PAUW

## Contexte

- **Client** : K&F DE PAUW (ID: 3547)
- **Commande réelle** : S39711
- **Date commande** : 2025-10-14 07:25:09
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 21,338 input + 81,429 output = 102,767 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 5.6% | 18 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 10.5% | Score équilibré global |

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
- **Pattern temporel**: Cycle régulier de 21 à 25 jours environ
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-08-29
- **Prochaine prédite**: 2025-09-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
Le cycle habituel de 22 jours n'a pas été respecté suite à une commande nulle (0u) le 2025-09-23. Nous sommes à 45 jours depuis la dernière livraison réelle (2025-08-29), soit deux cycles complets. Le risque de rupture est immédiat. La quantité recommandée de 200u est basée sur la médiane des deux dernières commandes effectives et confirmée par l'historique N-1 qui montre une montée en puissance sur le dernier trimestre (passant de 100u à 200u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,175 tokens
- **Output**: 1,648 tokens
- **Total**: 2,823 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Investigating Product Orders**

I'm currently looking at the order history for LD SAUCE BEARNAISE 250ML WECK (PF1809). The recent "0u" order on September 23rd is throwing me off. It usually indicates a cancellation or no order. To understand this anomaly, I'm focusing on the time gap between the 200u order of August 7th and the 200u order on August 29th (22 days), to see if any pattern emerges.


**Assessing Potential Risks**

I'm now deeply concerned about the overdue order for LD SAUCE BEARNAISE. My calculations point to a potential rupture, given the extended time since the last order on August 29th. The 0u order on September 23rd reinforces this. Analyzing the 2024 data, particularly the September and October orders, strengthens the concern, highlighting the immediacy of the requirement.


**Confirming Immediate Action Required**

Now I'm digging into the 2025 and 2024 data, and the cycle time (~22 days) confirms my suspicions. Given today's date (October 13th) and the missed order window, the 0u on September 23rd becomes crucial. The product requires immediate action to prevent potential supply issues, confirming my initial assessment of urgency.


**Synthesizing Order Recommendations**

I've finalized my analysis. Given the 45-day gap since the last order on August 29th and the consistent 22-day cycle, a rupture is likely. The 0u order on September 23rd confirms an issue. I am recommending an immediate order of 200 units, based on the recent consumption patterns, with high confidence in my assessment.




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

## False Positives (17)

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
| [PF1801] LD MAYONNA DU CHEF 470 ML WECK | 22 | Stock prédit: 95.1u (121j restants) → prédit 22u mais non commandé |
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
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 200 | Stock prédit: 74.8u (28j restants) → prédit 200u mais non commandé |
| [PF1795] LD MAYONNAI WASABI 250ML WECK | 25 | Stock prédit: 70.9u (36j restants) → prédit 25u mais non commandé |
| [PF1805] LD SAUCE COCKTAIL 250ML WECK | 25 | Stock prédit: 70.9u (36j restants) → prédit 25u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 75 | Stock prédit: 118.3u (95j restants) → prédit 75u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T14:44:41.738Z*
