# Rapport Backtest - Client CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON

## Contexte

- **Client** : CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON (ID: 24092)
- **Commande réelle** : S39541
- **Date commande** : 2025-10-03 10:10:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 59,827 input + 45,676 output = 105,503 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 3.8% | 26 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 7.4% | Score équilibré global |

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
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 200.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 200.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 200.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.67u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier entre 10 et 29 jours, client actuellement en retard
- **Cycle médian (jours)**: 19.5
- **Dernière commande**: 2025-08-22
- **Prochaine prédite**: 2025-09-10 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande médian est estimé à environ 20 jours. La dernière commande enregistrée remonte au 22 août 2025, ce qui place le client en retard de plus d'un mois par rapport à son rythme habituel. En B2B, cela indique un risque de rupture élevé. Les quantités récentes oscillent entre 2 et 3 unités, cohérent avec l'historique N-1 (2u). On recommande 3 unités pour sécuriser la disponibilité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,360 tokens
- **Output**: 1,460 tokens
- **Total**: 3,820 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining the Production Data**

I've been reviewing the data for "PF 0121 - FILOU MAYONNAISE OEUFS SEAU 1000ML". Specifically, I am analyzing the production quantities from the given dates, noting the fluctuations in output, and also looking at trends over the specified 30-day period leading up to the target date of 2025-11-01. I observed some production on 2025-08-12.


**Evaluating the Production Cycle**

I'm now calculating the median cycle length based on the available order dates and intervals. Based on a few data points, the theoretical next order date would have been around September 10th. Given today's date, and the lack of recent orders, I've flagged a high risk of stock rupture and a need for further investigation of the production quantities and client's ordering habits.


**Refining Order Quantity**

I'm now calculating the typical order volume, which appears to be between 2 and 3 units based on the existing data. Given the lack of seasonality and the client's current lateness, I'm recommending we plan for an order of 3 units to avoid stock rupture. The confidence remains medium.


**Calculating the Order Size**

I'm now consolidating the data, checking for outliers, and running seasonality analysis. The demand appears steady, with a consistent pattern of 2 or 3 units per order. To accommodate for the delay and ensure stock availability, I'm recommending we order 3 units.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 11:46:40: 3u
- 2025-08-12 11:22:40: 1u
- 2025-08-12 10:31:34: 2u
- 2025-07-14 07:51:45: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 06:46:55: 2u
- 2024-03-20 07:37:07: 2u
- 2024-01-09 08:56:08: 0u
- 2023-12-12 14:54:31: 0u
- 2023-12-07 10:58:24: 0u
- 2023-11-07 08:23:13: 0u
- 2023-10-17 13:50:06: 0u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (25)

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
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 3 | Stock prédit: 1.8u (59j restants) → prédit 3u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 1 | Stock prédit: 0.7u (18j restants) → prédit 1u mais non commandé |
| [PF1798] LD MAYONNAI POIVRE 250ML WECK | 1 | Stock prédit: -0.0u (-25j restants) → prédit 1u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 1 | Stock prédit: 0.8u (147j restants) → prédit 1u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 2 | Stock prédit: -0.4u (-6j restants) → prédit 2u mais non commandé |
| [PF1687] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock prédit: 0.7u (20j restants) → prédit 2u mais non commandé |
| [PF0609] YVALLI SAUCE TOMATE 2,5 KG | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [PF0539] JF VOL AU VENT 2,5 KG | 1 | Stock prédit: 0.9u (307j restants) → prédit 1u mais non commandé |
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 12 | Stock prédit: -1.2u (-50j restants) → prédit 12u mais non commandé |
| [PF0501] YVALLI VINAIGRETTE 5 KG JERRY | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [PF1552] LV KETCHUP BIO 290G | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [PF1640] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.8u (188j restants) → prédit 1u mais non commandé |
| [PF3274] JF BURGER SAUCE 925ML | 1 | Stock prédit: 0.6u (71j restants) → prédit 1u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 4 | Stock prédit: -0.7u (-21j restants) → prédit 4u mais non commandé |
| [PF1598] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.9u (624j restants) → prédit 1u mais non commandé |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.5u (87j restants) → prédit 1u mais non commandé |
| [PF1601] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.9u (624j restants) → prédit 1u mais non commandé |
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 1 | Stock prédit: 0.0u (2j restants) → prédit 1u mais non commandé |
| [PF0096] FILOU MOUTARDE 3 KG | 3 | Stock prédit: 1.6u (114j restants) → prédit 3u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T09:01:50.027Z*
