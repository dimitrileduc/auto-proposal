# Rapport Backtest - Client E.L.D. GMBH

## Contexte

- **Client** : E.L.D. GMBH (ID: 3875)
- **Commande réelle** : S40277
- **Date commande** : 2025-11-12 12:18:17
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 6,522 input + 22,838 output = 29,360 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score équilibré global |

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
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 5.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 4.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 80 | 96 | 16.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 80 | 80 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 80u vs Médiane: 80u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 80u (confidence: high)
- 📊 **Baseline N-1**: 80u
- 📊 **Médiane**: 80u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 16u (16.7%)
- 📉 **Erreur Médiane**: 16u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-hebdomadaire
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
Le jour de prédiction est un mardi. Bien que le lundi soit le jour prédominant (10 commandes), le mardi possède un historique significatif (5 commandes). Analyse des commandes mardi : médiane 80u, mode 80u, dernière valeur 128u (août 2025). Cependant, les 3 commandes les plus récentes (tous jours) sont toutes à 80u, indiquant un retour à la normale après les pics estivaux/automnaux. Le pic de 192u du 6 octobre est confirmé comme outlier car non répété le lundi 20 octobre. Le pattern bi-hebdomadaire sur les lundis (intervalles 14j) suggère que le mardi 11 novembre est un jour intermédiaire sans cycle spécifique, donc la probabilité forte est la valeur de référence du client.

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 80u (confidence: high)
- 📊 **Baseline N-1**: 80u
- 📊 **Médiane**: 80u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: The client shows a primary weekly pattern on Mondays (56% of orders) with variable intervals (13-15 days, 20 days, 28-34 days). Recent data indicates a shift to more frequent ordering (14-28 day intervals) exclusively on Mondays.
- **Saisonnalité**: none
- **Tendance**: increasing
- **Outliers détectés**: 128u

**🧠 Raisonnement LLM:**
Le jour habituel de commande est le **lundi** (9/16 commandes historiques, 3/3 commandes récentes). La date de prédiction du 11 novembre 2025 est un **mardi**, donc hors cycle.

**Analyse rythmique :**
- Intervalles variables (13-34 jours) mais préférence marquée pour le lundi
- 3 dernières commandes consecutives le lundi (22 sept, 20 oct, 3 nov) → cycle hebdomadaire renforcé
- Dernière commande : 3 novembre (lundi) 80u

**Gestion des outliers :**
- 128u (mai 2024) est un pic isolé (>2× la normale) → exclu
- 32u sont des valeurs basses valides mais obsolètes (tendance N-1 vs récent)
- Les 3 commandes récentes à 80u sont stables et cohérentes → privilégiées

**Tendance :**
- N-1 octobre : 64u moyenne
- Période récente : 80u stable depuis 3 commandes (+25% vs N-1)
- Pas d'indication de variation prochaine

**Application règle hors-cycle :**
Comme le mardi n'est pas le jour habituel, on prédit la quantité de la **prochaine commande lundi** (17 novembre). La valeur la plus probable est **80u**, confirmée par 3 commandes récentes stables sur cette valeur.

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 48u vs Médiane: 56u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: medium)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 8u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mardi
- **Saisonnalité**: none
- **Tendance**: augmentation
- **Outliers détectés**: 64u

**🧠 Raisonnement LLM:**
Pattern récent dominant

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 48u vs Médiane: 64u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: low)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: 64u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sur lundi avec intervalle 42 jours
- **Saisonnalité**: none
- **Tendance**: Plummeting
- **Outliers détectés**: -5u, 0u, 0u

**🧠 Raisonnement LLM:**
Deux commandes uniquement, sur lundi, avec intervalle de 42 jours. La date de prédiction (mardi) est hors cycle. Le 160u du 22 septembre s'écarte fortement de la dernière commande de 48u du 3 novembre (ratio 3.3). En agroalimentaire B2B, ce type de pic isolé correspond généralement à un événement exceptionnel (promotion, test, ou commande spéciale) et non à la demande régulière. Avec seulement 2 points, privilégier la valeur la plus récente (48u) minimise le risque d'erreur. Le mardi étant hors cycle, la prochaine commande probable aura lieu le lundi suivant avec une quantité similaire à la dernière commande de référence.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 80u
- 2025-10-20 09:34:51: 80u
- 2025-10-06 12:04:21: 192u
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 128u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 12:12:52: 80u
- 2024-10-15 07:31:18: 80u
- 2024-09-30 08:48:16: 80u
- 2024-09-18 06:24:53: 80u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 80u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 48u
- 2024-06-17 11:39:54: 192u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 48u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 80u
- 2025-10-20 09:34:51: 80u
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 12:12:52: 64u
- 2024-10-15 07:31:18: 64u
- 2024-09-30 08:48:16: 64u
- 2024-09-18 06:24:53: 64u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 64u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 64u
- 2024-06-17 11:39:54: 64u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 32u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 48u
- 2025-09-22 10:01:10: 48u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 12:12:52: 32u
- 2024-10-15 07:31:18: 32u
- 2024-09-30 08:48:16: 48u
- 2024-09-18 06:24:53: 32u
- 2024-08-19 09:44:26: 32u
- 2024-07-30 11:20:19: 32u
- 2024-07-15 11:14:37: 48u
- 2024-06-17 11:39:54: 64u
- 2024-05-16 07:53:36: 32u
- 2024-05-06 12:20:45: 64u
- 2024-04-16 06:52:33: 32u
- 2024-01-29 09:49:34: 48u

**✅ Quantité LLM**: 48u (confidence: medium)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 15:17:41: 48u
- 2025-09-22 10:01:10: 160u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 48u (confidence: low)
**📊 Quantité Réelle**: 48u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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

*Rapport généré automatiquement le 2025-12-18T08:15:58.876Z*
