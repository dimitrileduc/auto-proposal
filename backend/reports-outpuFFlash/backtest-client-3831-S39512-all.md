# Rapport Backtest - Client DANTESSE GmbH

## Contexte

- **Client** : DANTESSE GmbH (ID: 3831)
- **Commande réelle** : S39512
- **Date commande** : 2025-10-02 08:37:42
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 10,954 input + 30,070 output = 41,024 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.0% | 10 produits prédits, 1 corrects |
| **Rappel** | 50.0% | 2 produits réels, 1 détectés |
| **F1-Score** | 16.7% | Score équilibré global |

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
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 250 | 250 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 250u vs Médiane: 250u (Réel: 250u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 250u
- 📊 **Baseline calculée**: 250u
- 📊 **Médiane historique**: 250u
- ✅ **Réel commandé**: 250u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 250u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Accélération du cycle et augmentation drastique des volumes récents (~19 jours)
- **Cycle médian (jours)**: 19
- **Dernière commande**: 2025-09-22
- **Prochaine prédite**: 2025-10-11 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 55u

**🧠 Raisonnement LLM:**
Le client est passé d'une consommation de ~125u en 2024 à un palier de 250u en septembre 2025. Le dernier intervalle est de 19 jours. Avec une dernière commande au 22/09, la prochaine est prévue autour du 11/10 (soit dans 10 jours), ce qui justifie une commande immédiate. Le produit étant à base de truffe, l'approche de la fin d'année renforce l'importance de maintenir ce stock.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 982 tokens
- **Output**: 1,622 tokens
- **Total**: 2,604 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Down Deliveries**

I'm currently focused on the supply chain for LD MAYONNAI TRUFFES, specifically the 250ml WECK jars, product code PF1792. I've noted a series of deliveries: 250 units on 2025-09-22, and again on 2025-09-03, and finally 55 units on 2025-07-16. I am now calculating the intervals between the most recent deliveries.


**Projecting Order Volumes**

I'm now diving into the volume analysis, observing that recent orders show 250 units, significantly higher than the 125 units seen during the same period last year. This trend could indicate a surge in demand, warranting closer scrutiny. I will be looking to quantify the trend.


**Assessing Delivery Cycles**

I'm now calculating cycle lengths and comparing them. The recent cycle, 19 and 49 days, is variable, so I will compare the prior year. Then I'm using these calculations to predict the next order, with the current date being very close to the predicted date, raising potential supply risk.


**Calculating Cycle Medians**

I'm now comparing recent cycle medians to last year's data. The current median cycle length is 34 days, while last year shows a range of 6 to 37 days. My calculations suggest the next order is due around October 11th, and I must assess the associated risks.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 05:31:37: 250u
- 2025-09-03 07:49:42: 250u
- 2025-07-16 13:46:45: 55u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-25 19:46:57: 125u
- 2024-08-29 12:54:10: 75u
- 2024-08-23 09:48:48: 50u
- 2024-07-17 09:21:00: 80u
- 2024-06-07 10:11:53: 50u
- 2024-05-28 11:15:02: 125u
- 2024-04-23 06:22:53: 50u
- 2024-04-04 06:34:16: 125u
- 2024-03-12 11:50:55: 50u
- 2024-02-15 07:27:41: 70u
- 2024-01-17 14:53:06: 75u
- 2023-12-13 12:47:04: 125u

**✅ Quantité LLM**: 250u (confidence: high)
**📊 Quantité Réelle**: 250u

</details>




---

## False Positives (9)

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
| [PF1807] LD SAUCE ANDALOUSE 250ML WECK | 5 | Stock prédit: 2.0u (5j restants) → prédit 5u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Stock prédit: 0.9u (47j restants) → prédit 1u mais non commandé |
| [PF1802] LD MOUTARDE MIEL 250ML WECK | 5 | Stock prédit: 4.4u (53j restants) → prédit 5u mais non commandé |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 43 | Stock prédit: 16.9u (13j restants) → prédit 43u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 50 | Stock prédit: -3.3u (-1j restants) → prédit 50u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 50 | Stock prédit: 28.4u (99j restants) → prédit 50u mais non commandé |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 75 | Stock prédit: 25.7u (39j restants) → prédit 75u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 25 | Stock prédit: 46.6u (77j restants) → prédit 25u mais non commandé |
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 10 | Stock prédit: 21.5u (52j restants) → prédit 10u mais non commandé |


---

## False Negatives (1)

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
| [CONS070] PALETTE EURO | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T12:50:38.956Z*
