# Rapport Backtest - Client ASIE A TIK

## Contexte

- **Client** : ASIE A TIK (ID: 60160)
- **Commande réelle** : S39937
- **Date commande** : 2025-10-27 10:58:28
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 5,359 input + 1,639 output = 6,998 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 57.1% | 7 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 72.7% | Score équilibré global |

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
| **MAE** | 6.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 65.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 81.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (4)

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
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 9 | 20 | 11.0 | 55.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 10 | 5 | 5.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 12 | 5 | 7.0 | 140.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 7 | 10 | 3.0 | 30.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 9u vs Médiane: 9u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 9u (confidence: low)
- 📊 **Baseline N-1**: 9.33u
- 📊 **Médiane**: 9u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 11u (55.0%)
- 📉 **Erreur Médiane**: 11u (55.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier (~20-40 jours) avec une préférence pour le milieu de semaine (mercredi/jeudi).
- **Saisonnalité**: none
- **Tendance**: Hausse légère (+10% sur le dernier point)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation stable gravitant autour de 9,33 unités en moyenne. En l'absence de données historiques pour le mois d'octobre N-1 et face à une commande demandée un dimanche (jour hors cycle habituel), on se base sur la moyenne pondérée de la période récente. La tendance est flat avec une légère oscillation entre 8 et 10 unités; le chiffre de 9 unités est le médiateur le plus probable pour minimiser l'erreur de prévision.

</details>


<details>
<summary><strong>2. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 5u (100.0%)
- 📉 **Erreur Médiane**: 5u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non régulier, cycle long de 42 jours entre les deux derniers volumes significatifs
- **Saisonnalité**: none
- **Tendance**: Stable à 10u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'historique montre une récurrence sur le volume de 10 unités (août et octobre), tandis que la commande de 1 unité le 07/08 est identifiée comme un outlier ou un ajustement marginal. Bien que le cycle temporel ne soit pas parfaitement stable (42 jours d'écart puis 25 jours à date), la quantité de 10u représente la demande de fond standard pour ce produit de niche (thé bio 330ml). La commande tombant un dimanche suggère une préparation de stock pour le début de semaine, justifiant le maintien du volume habituel sans signe de décroissance.

</details>


<details>
<summary><strong>3. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 12u vs Médiane: 10u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 7u (140.0%)
- 📉 **Erreur Médiane**: 5u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle à bimensuelle (cycle 20-40 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (8u à 12u)
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
L'historique est limité mais montre une tendance à la hausse sur les volumes commandés (8u en août, 12u en octobre). La commande du 07/08 à 0u est ignorée car elle représente probablement une rupture ou une annulation. La dernière commande date d'il y a 25 jours, ce qui correspond au cycle observé entre août et octobre. Bien que la date demandée soit un dimanche, je me base sur le dernier volume de 12u pour maintenir le niveau de stock face à une tendance croissante.

</details>


<details>
<summary><strong>4. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM: 7u vs Médiane: 8u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 7u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 3u (30.0%)
- 📉 **Erreur Médiane**: 2u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles longs (13 à 60+ jours)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 7u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est trop parcellaire pour établir un cycle hebdomadaire strict. On observe deux commandes espacées de 13 jours en août suivies d'une longue interruption de deux mois. La quantité recommandée correspond à la moyenne simple des volumes récents (8u et 6u), le dimanche n'étant pas un jour de livraison B2B standard, suggérant une commande de réapprovisionnement de base.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:15:18: 10u
- 2025-08-20 11:40:57: 8u
- 2025-08-07 09:07:10: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 9u (confidence: low)
**📊 Quantité Réelle**: 20u

</details>


<details>
<summary><strong>2. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:15:18: 10u
- 2025-08-20 11:40:57: 10u
- 2025-08-07 09:07:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>3. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:15:18: 12u
- 2025-08-20 11:40:57: 8u
- 2025-08-07 09:07:10: 0u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 12u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>4. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-20 11:40:57: 8u
- 2025-08-07 09:07:10: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>




---

## False Positives (3)

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -7.9u (-48j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -12.7u (-61j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -5.4u (-38j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:37:26.291Z*
