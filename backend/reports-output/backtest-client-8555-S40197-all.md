# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S40197
- **Date commande** : 2025-11-07 12:51:16
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 9,383 input + 13,072 output = 22,455 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 15 produits prédits, 10 corrects |
| **Rappel** | 71.4% | 14 produits réels, 10 détectés |
| **F1-Score** | 69.0% | Score équilibré global |

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
| **MAE** | 8.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 44.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 65 | 65 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | 30 | 10.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 40 | 4.0 | 10.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0093] FILOU MOUTARDE 300GR | 35 | 50 | 15.0 | 30.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 0 | 40 | 40.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: medium)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle régulier de 23 jours identifié entre les commandes.
- **Saisonnalité**: none
- **Tendance**: Stable à 40u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur deux commandes récentes de volume identique (40 unités). L'intervalle entre ces deux commandes est de 23 jours. La dernière commande ayant eu lieu le 13 octobre 2025, soit 24 jours avant la date actuelle du 6 novembre 2025, le cycle habituel suggère qu'une commande est imminente. Puisque le volume est resté parfaitement stable sur les deux derniers relevés (40u), nous prévoyons une quantité identique pour la prochaine commande unique. L'absence de données N-1 ne permet pas de confirmer une saisonnalité, mais la récurrence du volume suggère une unité de conditionnement standardisée.

</details>


<details>
<summary><strong>2. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 23 jours (comparaison entre les deux commandes de 2025)
- **Saisonnalité**: weak
- **Tendance**: Hausse de volume observée (2u à 4u) avec fréquence stable sur la période récente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé entre les deux dernières commandes est de 23 jours. La dernière commande datant du 13 octobre 2025, l'échéance théorique pour la suivante était autour du 5 novembre. Nous sommes le 6 novembre, une commande est donc imminente. Bien que les données historiques soient limitées, on observe un doublement de la quantité (de 2u à 4u) à l'approche de la saison froide, ce qui est cohérent pour des carbonnades. Je préconise de maintenir la quantité de 4 unités pour la prochaine commande. Un second cycle pourrait survenir en fin de mois (fin novembre), mais conformément aux règles, seule la prochaine commande est comptabilisée.

</details>


<details>
<summary><strong>3. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 65u vs Médiane: 70u (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 65u (confidence: low)
- 📊 **Baseline N-1**: 67.5u
- 📊 **Médiane**: 70u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 5u (7.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 32 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec légère fluctuation (70u à 65u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes espacées de 32 jours (11 sept et 13 oct). En extrapolant ce cycle, la prochaine commande est attendue autour du 14 novembre 2025, ce qui se situe bien dans la fenêtre de prédiction des 30 jours. Bien qu'il y ait une légère baisse de volume entre septembre et octobre (-5 unités), la demande reste stable pour un seau de 1000ml de mayonnaise. Nous recommandons la quantité de la dernière commande (65u) pour la prochaine itération. La confiance est faible en raison de la brièveté de l'historique fourni (2 points).

</details>


<details>
<summary><strong>4. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 20u vs Médiane: 20u (Réel: 30u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: medium)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 20u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 10u (33.3%)
- 📉 **Erreur Médiane**: 10u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 23 à 25 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 20u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur deux commandes récentes d'une régularité parfaite (20 unités à chaque fois). L'intervalle observé entre les deux points de données est de 23 jours. La dernière commande ayant eu lieu le 13/10/2025, nous sommes à 24 jours de recul à la date du 06/11/2025. Le client est donc dans sa fenêtre habituelle de réapprovisionnement. Une commande de 20 unités est prévue de manière imminente. Bien qu'un second cycle puisse techniquement tomber à la toute fin de la fenêtre des 30 jours, conformément à la règle de la commande unique, seule la prochaine occurrence de 20u est recommandée.

</details>


<details>
<summary><strong>5. [PF1689] FILOU CURRY KETCH SQUEEZE 300</strong> - LLM: 0u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 40u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun historique de commande identifié
- **Saisonnalité**: none
- **Tendance**: Inexistante (absence de données)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une absence totale de données pour ce produit, que ce soit sur l'année précédente (N-1) ou sur les trois derniers mois. En l'absence de base de consommation, de fréquence de commande ou de signal de lancement de produit, il est impossible de prédire une intention d'achat dans les 30 prochains jours. Par conséquent, la recommandation est fixée à 0.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 40u
- 2025-09-20 05:57:22: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: medium)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>2. [PF0084] FILOU CARBONNADES 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 4u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:22:41: 2u

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>3. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 65u
- 2025-09-11 08:06:57: 70u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 65u (confidence: low)
**📊 Quantité Réelle**: 65u

</details>


<details>
<summary><strong>4. [PF0094] FILOU MOUTARDE 700 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 20u
- 2025-09-20 05:57:22: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: medium)
**📊 Quantité Réelle**: 30u

</details>


<details>
<summary><strong>5. [PF1689] FILOU CURRY KETCH SQUEEZE 300</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 40u

</details>




---

## False Positives (5)

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
| [PF1844] FILOU ANDALOUSE SQUEEZE 300ML | 40 | Stock prédit: -68.2u (-58j restants) → prédit 40u mais non commandé |


---

## False Negatives (4)

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
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 40 | LLM avait prédit 0 (pas de besoin) avec stock: -10.7u (-19j) mais client a commandé 40u |
| [PF0088] FILOU VOL AU VENT 800 GR | 50 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [PF0089] FILOU VOL AU VENT 400 GR | 20 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [PF0078] FILOU CHASSEUR 5 L | 30 | Stock suffisant: 23.5u (43j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T19:54:29.888Z*
