# Rapport Backtest - Client K&F DE PAUW

## Contexte

- **Client** : K&F DE PAUW (ID: 3547)
- **Commande réelle** : S40269
- **Date commande** : 2025-11-12 11:39:39
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 44,918 input + 102,989 output = 147,907 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 6.3% | 16 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 11.8% | Score équilibré global |

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
| [PF1194] GF VIN FINES HERBES WECK 330ML | 160 | 160 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1194] GF VIN FINES HERBES WECK 330ML</strong> - LLM: 160u vs Médiane: 145u (Réel: 160u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 160u
- 📊 **Baseline calculée**: 160u
- 📊 **Médiane historique**: 145u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 15u (9.4%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 160u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: low
- **Confiance Phase 1 (détection risque)**: low
- **Confiance Phase 2 (quantité)**: low

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 40 jours
- **Cycle médian (jours)**: 40
- **Dernière commande**: 2025-08-25
- **Prochaine prédite**: 2025-11-13|2025-10-04 (theoretical cycle shift to 2025-11-13 after two 40d intervals from Aug 25th). Predicted for 2025-11-13 relative to current date 2025-11-11 is within 2 days which is within the 30-day horizon. 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très erratique (CV des intervalles > 100%) mais la médiane s'établit à 40 jours. En projetant ce cycle depuis la dernière commande du 2025-08-25, la prochaine occurrence théorique tombe le 2025-11-13, soit dans 2 jours (Risque = OUI). Côté quantité, on observe une hausse structurelle entre N-1 (~75u) et l'historique récent (160u). Le CV des quantités étant élevé (66%), la règle impose d'utiliser la dernière valeur stable observée (160u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,299 tokens
- **Output**: 3,321 tokens
- **Total**: 5,620 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Schedule**

I am now focused on the timeline for GF VIN FINES HERBES WECK 330ML [PF119 4], particularly the production schedule. My most recent observation involves a production run of 16 units on 2024-06-12, potentially a split or correction of another order. I am comparing the data points to infer patterns.


**Assessing Production Intervals**

I'm now calculating the intervals between production runs for GF VIN FINES HERBES WECK 330ML [PF119 4]. The median interval is 40 days, but the gaps are inconsistent. There's a significantly long 329-day interval I will have to investigate; I suspect incomplete data or an irregular pattern might be behind this anomaly. The intervals between the runs are highly variable.


**Predicting Future Production Runs**

I've examined the production intervals and their variability, revealing a very high coefficient of variation. Based on the 40-day median and the 2025-08-25 run, I estimate the next production date to be around 2025-11-13. Given the current date and the 30-day horizon, this indicates a potential risk.


**Refining the Predictive Model**

My analysis of the intervals has produced a highly variable pattern, with a median of 40 days. The predicted date of 2025-11-13 is very close to the current date of 2025-11-11, indicating a likely run within the 30-day horizon. I have analyzed quantities, finding an outlier and a potential upward trend.


**Evaluating Key Parameters**

I've determined a low confidence level due to the high variability in production intervals. The predicted production date of 2025-11-13 is very close, in two days. Quantities are also being analyzed. The quantity of 290 seems like an outlier, although not by the book.


**Summarizing the Findings**

I have concluded my analysis of GF VIN FINES HERBES WECK 330ML [PF119 4], and I have a low confidence level due to the variability. The predicted production date of 2025-11-13 falls in the 30-day window, indicating a risk. I recommend a baseline of 160 units based on the increasing trend and recent production.


**Reviewing the Analysis**

I'm now consolidating all the findings for GF VIN FINES HERBES WECK 330ML [PF119 4]. My calculations have revealed a high variability in both production intervals and quantities, resulting in a low confidence level. The estimated production date, 2025-11-13, is close to the current date, indicating a likely run within the next 30 days. Based on an increasing trend, I am recommending a baseline of 160 units.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1194] GF VIN FINES HERBES WECK 330ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 08:28:00: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:21:49: 145u
- 2024-06-12 06:00:48: 290u
- 2024-06-12 06:00:48: 16u
- 2024-05-27 07:37:32: 160u
- 2024-04-17 06:40:51: 64u
- 2024-03-28 08:01:49: 64u
- 2024-03-18 14:12:55: 75u
- 2024-02-01 14:41:32: 75u
- 2023-12-07 14:03:11: 75u
- 2023-11-13 14:18:34: 75u

**✅ Quantité LLM**: 160u (confidence: low)
**📊 Quantité Réelle**: 160u

</details>




---

## False Positives (15)

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
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 125 | Stock prédit: 29.5u (4j restants) → prédit 125u mais non commandé |
| [PF1195] GF VIN ANCIENNE WECK 330ML | 320 | Stock prédit: 18.0u (2j restants) → prédit 320u mais non commandé |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 75 | Stock prédit: -2.1u (0j restants) → prédit 75u mais non commandé |
| [PF1801] LD MAYONNA DU CHEF 470 ML WECK | 22 | Stock prédit: 74.6u (101j restants) → prédit 22u mais non commandé |
| [PF1803] LD SAUCE TARTARE 250ML WECK | 50 | Stock prédit: -76.3u (-29j restants) → prédit 50u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 200 | Stock prédit: -49.4u (-9j restants) → prédit 200u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 63 | Stock prédit: -2.1u (0j restants) → prédit 63u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 100 | Stock prédit: -2.1u (0j restants) → prédit 100u mais non commandé |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 25 | Stock prédit: 164.4u (221j restants) → prédit 25u mais non commandé |
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 200 | Stock prédit: -2.1u (0j restants) → prédit 200u mais non commandé |
| [PF0193] GF VIN ANCIENNE JERRYCAN 5L | 25 | Stock prédit: 0.8u (2j restants) → prédit 25u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 200 | Stock prédit: 87.8u (60j restants) → prédit 200u mais non commandé |
| [PF1807] LD SAUCE ANDALOUSE 250ML WECK | 25 | Stock prédit: 107.3u (110j restants) → prédit 25u mais non commandé |
| [PF1805] LD SAUCE COCKTAIL 250ML WECK | 25 | Stock prédit: 123.4u (153j restants) → prédit 25u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 38 | Stock prédit: 89.1u (76j restants) → prédit 38u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T08:04:02.123Z*
