# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S40197
- **Date commande** : 2025-11-07 12:51:16
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 8,546 input + 5,565 output = 14,111 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 12 produits prédits, 9 corrects |
| **Rappel** | 81.8% | 11 produits réels, 9 détectés |
| **F1-Score** | 78.3% | Score équilibré global |

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
| **MAE** | 4.44 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 48.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (9)

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
| [PF0078] FILOU CHASSEUR 5 L | 25 | 30 | 5.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | 10 | 8.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 4 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 3 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 68 | 65 | 3.0 | 4.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | 30 | 10.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 10 | 3 | 7.0 | 233.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 40 | 4.0 | 10.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 25u vs Médiane: 10u (Réel: 30u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 5u (16.7%)
- 📉 **Erreur Médiane**: 20u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier mais suggérant un rythme d'environ 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable mais imprécise (volumes récents entre 10u et 30u)
- **Outliers détectés**: 50u

**🧠 Raisonnement LLM:**
La dernière commande datant du 24 octobre (30u), le cycle habituel suggère une récurrence dans la deuxième quinzaine de novembre, soit dans les 30 prochains jours. En excluant le pic de 50u de l'an dernier et en moyennant les volumes récents (10u et 30u), une commande de 25u est anticipée pour maintenir les stocks.

</details>


<details>
<summary><strong>2. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 23 jours identifié
- **Saisonnalité**: none
- **Tendance**: Stable à 40u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle régulier d'environ 23 jours. La dernière commande datant du 13 octobre, la prochaine est statistiquement prévue autour du 5 novembre. Étant à la date du 6 novembre, une commande de réapprovisionnement de 40 unités est attendue de manière imminente (dans la fenêtre de 30 jours).

</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - LLM: 2u vs Médiane: 2u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 8u (80.0%)
- 📉 **Erreur Médiane**: 8u (80.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ tous les 23-30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des intervalles montre une fréquence de commande d'environ 23 à 30 jours. La dernière commande datant du 13 octobre, la prochaine est prévue autour de début novembre. La date actuelle étant le 6 novembre, le besoin de réapprovisionnement est immédiat pour maintenir le cycle de consommation observé de 2 unités.

</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle d'environ 23 jours (irrégulier)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (2u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle moyen d'environ 23 jours. La dernière commande datant du 13 octobre, la prochaine échéance théorique se situe début novembre. Puisque nous sommes le 6 novembre, une commande est probable dans la fenêtre des 30 prochains jours pour maintenir le stock, sur la base de la dernière quantité observée.

</details>


<details>
<summary><strong>5. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 23 jours constaté entre les deux dernières commandes
- **Saisonnalité**: none
- **Tendance**: Stable avec un volume moyen de 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une commande environ tous les 23 jours. La dernière commande datant du 13 octobre, la prochaine est statistiquement prévue autour du 5 novembre. Étant donné la proximité immédiate de cette échéance par rapport à la date cible du 6 novembre, une commande de réapprovisionnement de 3 unités (moyenne historique) est prévue dans les 30 prochains jours.

</details>


<details>
<summary><strong>6. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 68u vs Médiane: 70u (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 68u (confidence: medium)
- 📊 **Baseline N-1**: 67.5u
- 📊 **Médiane**: 70u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 3u (4.6%)
- 📉 **Erreur Médiane**: 5u (7.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 32 jours
- **Saisonnalité**: none
- **Tendance**: Stable autour de 65-70u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'intervalle entre les deux dernières commandes est de 32 jours. La dernière commande datant du 13 octobre, la suivante est théoriquement attendue autour du 14 novembre 2025, soit dans 8 jours. Ce délai s'inscrivant dans la fenêtre des 30 prochains jours, une commande de réapprovisionnement standard est prévue.

</details>


<details>
<summary><strong>7. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 20u vs Médiane: 20u (Réel: 30u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: medium)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 20u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 10u (33.3%)
- 📉 **Erreur Médiane**: 10u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle d'environ 23-24 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 20u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande toutes les 3 semaines environ. La dernière commande datant du 13 octobre, la prochaine est statistiquement attendue autour du 5 ou 6 novembre. Étant donné que nous sommes le 6 novembre, le besoin est immédiat ou imminent dans la fenêtre des 30 prochains jours.

</details>


<details>
<summary><strong>8. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM: 10u vs Médiane: 7u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 6.5u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 7u (233.3%)
- 📉 **Erreur Médiane**: 4u (133.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 23 jours (irrégulier)
- **Saisonnalité**: none
- **Tendance**: Hausse entre la dernière et l'avant-dernière commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique suggère un cycle moyen de 23 jours. La dernière commande datant du 13 octobre, la prochaine commande théorique était prévue autour du 5 novembre. Étant le 6 novembre, une commande est imminente sous 30 jours. La quantité recommandée de 10 unités se base sur le volume le plus récent, représentatif d'un besoin stabilisé.

</details>


<details>
<summary><strong>9. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 44u vs Médiane: 44u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 44u (confidence: medium)
- 📊 **Baseline N-1**: 44u
- 📊 **Médiane**: 44u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 4u (10.0%)
- 📉 **Erreur Médiane**: 4u (10.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 23 jours constaté entre les commandes
- **Saisonnalité**: none
- **Tendance**: Stable à 44u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande d'environ 23 jours. La dernière commande ayant eu lieu le 13 octobre 2025, la prochaine échéance théorique se situe autour du 5 novembre 2025. Étant donné la date actuelle du 6 novembre 2025, le besoin est immédiat ou imminent dans la fenêtre des 30 prochains jours.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-24 11:20:40: 30u
- 2025-09-20 05:57:22: 10u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 07:08:28: 20u
- 2024-10-03 07:50:47: 50u

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 30u

</details>


<details>
<summary><strong>2. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 40u
- 2025-09-20 05:57:22: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 2u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 4u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:22:41: 2u

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [PF0084] FILOU CARBONNADES 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 4u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:22:41: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>6. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 65u
- 2025-09-11 08:06:57: 70u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 68u (confidence: medium)
**📊 Quantité Réelle**: 65u

</details>


<details>
<summary><strong>7. [PF0094] FILOU MOUTARDE 700 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 20u
- 2025-09-20 05:57:22: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: medium)
**📊 Quantité Réelle**: 30u

</details>


<details>
<summary><strong>8. [PF0096] FILOU MOUTARDE 3 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 10u
- 2025-09-20 05:57:22: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 07:08:28: 10u

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>9. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 44u
- 2025-09-20 05:57:22: 44u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 07:08:28: 52u

**✅ Quantité LLM**: 44u (confidence: medium)
**📊 Quantité Réelle**: 40u

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
| [PF0075] FILOU CHASSEUR  10 L | 10 | Stock prédit: 6.1u (18j restants) → prédit 10u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 10 | Stock prédit: 6.1u (18j restants) → prédit 10u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 40 | Stock prédit: 0.0u (0j restants) → prédit 40u mais non commandé |


---

## False Negatives (2)

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
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 40 | En rupture (-19j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [PF0093] FILOU MOUTARDE 300GR | 50 | Stock: 7.2u (9j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-18T21:34:47.927Z*
