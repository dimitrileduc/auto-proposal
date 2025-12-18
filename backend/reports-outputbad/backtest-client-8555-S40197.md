# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S40197
- **Date commande** : 2025-11-07 12:51:16
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 11,455 input + 23,110 output = 34,565 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 14 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 7.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 43.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (10)

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
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | 10 | 8.0 | 80.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 3 | 5 | 2.0 | 40.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0084] FILOU CARBONNADES 800 GR | 4 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 67 | 65 | 2.0 | 3.1% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | 30 | 10.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 40 | 4.0 | 10.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0093] FILOU MOUTARDE 300GR | 35 | 50 | 15.0 | 30.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 8 | 40 | 32.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: low)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern hebdomadaire ou mensuel clair identifiable. Les deux commandes sont espacées de 23 jours (20 sept. → 13 oct.) avec des jours différents (samedi, lundi).
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
J'ai seulement 2 commandes récentes, toutes deux de 40 unités avec un intervalle de 23 jours. Aucune saisonnalité N-1 disponible. Les jours de commande varient (samedi, lundi), donc pas de cycle hebdomadaire fixe. L'intervalle de 23 jours suggère un rythme mensuel irrégulier. La jeudi 6 nov. est hors des jours habituels, mais selon la règle des jours hors cycle, je dois prédire la prochaine commande probable, pas 0. Comme les deux dernières commandes sont identiques et stables à 40u, et que le 6 nov. tombe dans la fenêtre temporelle attendue (≈23-30j après 13 oct.), la quantité la plus probable reste 40u.

</details>


<details>
<summary><strong>2. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cadence mensuelle irrégulière (~23-24 jours) sans jour fixe (2/3 lundi, 1/3 samedi). Le jeudi est un jour hors cycle inhabituel mais la date cible correspond à l'échéance naturelle de la prochaine commande selon l'intervalle observé.
- **Saisonnalité**: none
- **Tendance**: Légère hausse récente : 2u (Sept 2025) → 4u (Oct 2025), soit x2. La valeur N-1 (2u en Sept 2024) est stable mais ancienne. La progression récente reste modérée et non volatile.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cadence mensuelle irrégulière - Dernière valeur reflète tendance actuelle

</details>


<details>
<summary><strong>3. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 67u vs Médiane: 70u (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 67u (confidence: low)
- 📊 **Baseline N-1**: 68u
- 📊 **Médiane**: 70u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 2u (3.1%)
- 📉 **Erreur Médiane**: 5u (7.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (~32 jours)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle mensuel variable (32 jours entre commandes) sans jour fixe. La dernière commande (13 octobre, 65u) était 24 jours avant la date cible. La prochaine commande est attendue vers le 14 novembre (cycle +32j). Avec seulement 2 points, la tendance est considérée stable ; la légère baisse 70→65u est interprétée comme variation normale. Moyenne pondérée (65u×0.7 + 70u×0.3) = 66.5u arrondie. Le produit standard mayonnaise montre une demande régulière sans saisonnalité prononcée à cette période.

</details>


<details>
<summary><strong>4. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 20u vs Médiane: 20u (Réel: 30u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: low)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 20u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 10u (33.3%)
- 📉 **Erreur Médiane**: 10u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 23 jours entre les deux commandes (20 sept > 13 oct) - pattern approximatif de évolution mensuelle (cycle ~3-4 semaines) mais avec jour variable (samedi puis lundi).
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données récentes limitées à 2 points stables. Pas de saisonnalité N-1. Le jeudi est hors cycle (habituellement lundi/samedi). Application de la règle spéciale : prédiction pour la prochaine commande, pas 0. Les 2 dernières commandes étant de 20u, c’est la valeur la plus probable.

</details>


<details>
<summary><strong>5. [PF1689] FILOU CURRY KETCH SQUEEZE 300</strong> - LLM: 8u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: low)
- 📊 **Baseline N-1**: 8u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 32u (80.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun historique disponible - pattern indéterminable
- **Saisonnalité**: none
- **Tendance**: undetermined
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Absence totale d'historique (N-1 et période récente vides). Pour un condiment B2B 'Curry Ketchup Squeeze 300', une commande type de test/lancement est de 5-15 unités. Appliquant la règle 'ne jamais prédire 0 hors cycle' et visant la précision maximale sans sur-gonfler, la valeur la plus probable est 8 unités - correspondant à un palier de commande minimal viable pour un distributeur B2B testant un produit de niche.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 40u
- 2025-09-20 05:57:22: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: low)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>2. [PF0084] FILOU CARBONNADES 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 4u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:22:41: 2u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>3. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 65u
- 2025-09-11 08:06:57: 70u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 67u (confidence: low)
**📊 Quantité Réelle**: 65u

</details>


<details>
<summary><strong>4. [PF0094] FILOU MOUTARDE 700 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 20u
- 2025-09-20 05:57:22: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: low)
**📊 Quantité Réelle**: 30u

</details>


<details>
<summary><strong>5. [PF1689] FILOU CURRY KETCH SQUEEZE 300</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 8u (confidence: low)
**📊 Quantité Réelle**: 40u

</details>




---

## False Positives (4)

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
| [PF0075] FILOU CHASSEUR  10 L | 10 | Stock prédit: 6.1u (18j restants) → prédit 10u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 10 | Stock prédit: 6.1u (18j restants) → prédit 10u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 40 | Stock prédit: 0.0u (0j restants) → prédit 40u mais non commandé |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 5 | Stock prédit: 2.0u (18j restants) → prédit 5u mais non commandé |


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
| [PF0078] FILOU CHASSEUR 5 L | 30 | Stock suffisant: 23.5u (43j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-17T16:29:02.216Z*
