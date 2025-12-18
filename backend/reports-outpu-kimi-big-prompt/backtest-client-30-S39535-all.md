# Rapport Backtest - Client Conserverie Et Moutarderie Belge

## Contexte

- **Client** : Conserverie Et Moutarderie Belge (ID: 30)
- **Commande réelle** : S39535
- **Date commande** : 2025-10-03 08:01:58
- **Date cutoff système** : 2025-10-03 00:00:00
- **Jours d'avance** : 0j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 12,782 input + 31,378 output = 44,160 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 5.7% | 35 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 10.8% | Score équilibré global |

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
| Exact Match (=0u) | 2 | Égalité parfaite |
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

## True Positives (2)

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
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: No consistent weekly pattern. Sporadic orders (4 orders in 3 months) averaging ~21-day intervals with decreasing recent intervals: 33d → 13d → 18d → 7d.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le pattern récent montre une stabilisation stricte à 1u (3/3 derniers mois). La date de prédiction est exactement 7j après la dernière commande - correspondance jour/semaine. Les outliers historiques 13u sont obsolètes et non représentatifs de la demande actuelle. La règle B2B interdit le 0 pour un client actif, donc je prédit la quantité la plus probable de la prochaine commande: 1u.

</details>


<details>
<summary><strong>2. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes éparses sans cycle hebdomadaire/mensuel clair. Jours favoris : mardi (4x), jeudi (4x). Vendredi hors cycle (1x seulement).
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -1u, 0u

**🧠 Raisonnement LLM:**
Le produit montre un comportement de commande épars (10 commandes en 18 mois) avec volumes majoritairement à 1u. La donnée récente (2025) est exclusivement à 1u sur 2 commandes, confirmant une stabilisation. L'unique pic de 4u (2024-10-01) est un outlier ancien non répété. La date de prédiction étant un vendredi (hors cycle habituel mardi/jeudi), je prédit la quantité de la prochaine commande probante : **1 unité**.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 06:28:44: 1u
- 2025-09-08 07:52:26: 1u
- 2025-08-26 09:02:26: 1u
- 2025-07-24 13:45:03: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-12 10:01:21: 1u
- 2024-09-05 11:50:34: 2u
- 2024-08-23 08:20:07: 13u
- 2024-08-13 10:10:43: 1u
- 2024-07-05 07:40:56: 1u
- 2024-04-30 10:09:27: 2u
- 2024-04-25 14:37:04: 1u
- 2024-04-25 08:31:46: 13u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 07:52:26: 1u
- 2025-07-24 13:45:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 06:55:39: 4u
- 2024-09-26 09:23:08: 2u
- 2024-09-05 11:50:34: 1u
- 2024-08-23 08:30:23: 1u
- 2024-08-13 10:10:43: 1u
- 2024-05-28 07:49:32: 1u
- 2024-04-30 10:09:27: 2u
- 2024-04-25 14:37:04: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (33)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 8 | Stock prédit: NaNu (NaNj restants) → prédit 8u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 4 | Stock prédit: NaNu (NaNj restants) → prédit 4u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 9 | Stock prédit: NaNu (NaNj restants) → prédit 9u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | Stock prédit: NaNu (NaNj restants) → prédit 4u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: NaNu (NaNj restants) → prédit 2u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | Stock prédit: NaNu (NaNj restants) → prédit 4u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 2 | Stock prédit: NaNu (NaNj restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 4 | Stock prédit: NaNu (NaNj restants) → prédit 4u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Stock prédit: NaNu (NaNj restants) → prédit 2u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | Stock prédit: NaNu (NaNj restants) → prédit 2u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 4 | Stock prédit: NaNu (NaNj restants) → prédit 4u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 1.0u (12j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 1.0u (12j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 1.0u (12j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 2 | Stock prédit: NaNu (NaNj restants) → prédit 2u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 4 | Stock prédit: NaNu (NaNj restants) → prédit 4u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 4 | Stock prédit: NaNu (NaNj restants) → prédit 4u mais non commandé |
| [DIS0003] Display TVF bois | 3 | Stock prédit: 1.0u (29j restants) → prédit 3u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 139 | Stock prédit: -30.8u (-11j restants) → prédit 139u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 0 | Stock prédit: -12.3u (-97j restants) → prédit 0u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:40:52.721Z*
