# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S40197
- **Date commande** : 2025-11-07 12:51:16
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 35,198 input + 85,444 output = 120,642 total


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
| **MAE** | 7.11 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 52.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -13.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0078] FILOU CHASSEUR 5 L | 20 | 30 | 10.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | 10 | 8.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 3 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 68 | 65 | 3.0 | 4.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | 30 | 10.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 10 | 3 | 7.0 | 233.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 40 | 4.0 | 10.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0093] FILOU MOUTARDE 300GR | 30 | 50 | 20.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 20u vs Médiane: 10u (Réel: 30u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: medium)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 10u (33.3%)
- 📉 **Erreur Médiane**: 20u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle N-1: 11j (régulier) vs Cycle récent: 34j (erratique)
- **Saisonnalité**: none
- **Tendance**: increasing
- **Outliers détectés**: 50u

**🧠 Raisonnement LLM:**
Le cycle médian de 11j détecté sur N-1 place la prochaine commande le 2025-11-04 (dépassée de 2j). Risque immédiat de commande. Quantité calculée par moyenne tronquée de [10,20,30] après exclusion de l'outlier 50u = 20u.

</details>


<details>
<summary><strong>2. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: low)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 23 jours
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 23 jours détecté (intervalle unique 23j, CV=0%). Prochaine commande prévue le 2025-11-05 (hier), donc attendue immédiatement dans les 30 prochains jours. Quantité médiane stable de 40 unités après exclusion d'outliers (aucun détecté). Confiance faible phase 2 due à seulement 2 points d'historique malgré la stabilité. Aucune saisonnalité N-1 disponible.

</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - LLM: 2u vs Médiane: 2u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 8u (80.0%)
- 📉 **Erreur Médiane**: 8u (80.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 23j (2 commandes historiques, historique insuffisant)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 23 jours détecté sur seulement 2 commandes. La date théorique du 5 nov. étant passée, la prochaine occurrence est calée sur le 28 nov. (dans 22j). Quantité stable à 2 unités sans outlier. Confiance faible sur la régularité du cycle et la prédiction quantité.

</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle médian de 23 jours sur 1 occurence uniquement - historique insuffisant (<3 commandes)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
PHASE 1 - Cycle de 23 jours calculé entre les 2 seules commandes récentes (23/09-13/10). Médiane=23j, CV=0% (non significatif). Dernière commande: 13/10/2025. Date prédite: 13/10 + 23j = 05/11/2025. Par rapport au 06/11: commande attendue hier → RISQUE = OUI (immédiat). Confiance faible par historique insuffisant. PHASE 2 - Quantités [4,2u]: Q1=2.5, Q3=3.5, IQR=1.0 → barrières [1.0-5.0]. Aucune valeur exclue. CV=33.3% (moyenne=3, σ=1). Pour n=2, fallback médiane=3u. N-1 [2u] vs récent [4,2u]: différence +50% mais sur 1 point uniquement → pas de saisonnalité détectable. Baseline=3u × 1.0 = 3u. Confiance faible par <3 données.

</details>


<details>
<summary><strong>5. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 68u vs Médiane: 70u (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 68u (confidence: low)
- 📊 **Baseline N-1**: 67.5u
- 📊 **Médiane**: 70u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 3u (4.6%)
- 📉 **Erreur Médiane**: 5u (7.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 32j (intervalle médian sur 2 points)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 32j détecté entre 2 commandes. Prochaine prévue 2025-11-14 (dans 8j). Baseline=67.5u (médiane de [65,70], CV=5.24%, stable). Quantité recommandée=68u. Confiance Phase 1 élevée (cycle très régulier) mais confiance Phase 2 faible (historique insuffisant: 2 commandes uniquement).

</details>


<details>
<summary><strong>6. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 20u vs Médiane: 20u (Réel: 30u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: low)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 20u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 10u (33.3%)
- 📉 **Erreur Médiane**: 10u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 23 jours détecté (2 commandes observées)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 23 jours calculé entre 2 commandes. La date prévue (2025-11-05) est déjà passée par rapport à aujourd'hui (2025-11-06), indiquant un risque de rupture immédiat. Aucune donnée N-1 disponible. Quantité stable de 20 unités via médiane, mais confiance faible du fait de seulement 2 points historiques.

</details>


<details>
<summary><strong>7. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM: 10u vs Médiane: 7u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 7u (233.3%)
- 📉 **Erreur Médiane**: 4u (133.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 23 jours détecté mais basé sur un seul intervalle - historique insuffisant (<3 commandes)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Historique récent insuffisant (2 commandes). Cycle estimé 23j sur un intervalle uniquement. Prochaine commande attendue le 2025-11-05 (hier à la date de l'analyse), risque imminent. Quantité 3u exclue comme outlier contextuel (commande samedi, non représentative). Baseline 10u basée sur la valeur stable de la commande de mi-octobre, cohérente avec N-1. Pas de saisonnalité claire établie avec un seul point de comparaison N-1. Confiance faible sur l'ensemble des calculs du fait du nombre de points insuffisants.

</details>


<details>
<summary><strong>8. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 44u vs Médiane: 44u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 44u (confidence: medium)
- 📊 **Baseline N-1**: 44u
- 📊 **Médiane**: 44u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 4u (10.0%)
- 📉 **Erreur Médiane**: 4u (10.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 23j régulièrement
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 23j détecté avec CV=0% sur 2 commandes. Prochaine commande attendue le 2025-11-05 (1 jour de retard au 2025-11-06). Quantité médiane stable à 44u sans outlier. Saisonnalité N-1 non pertinente (pattern différent : 1 commande vs 2, quantité +18% seulement).

</details>


<details>
<summary><strong>9. [PF0093] FILOU MOUTARDE 300GR</strong> - LLM: 30u vs Médiane: 35u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 30u (confidence: low)
- 📊 **Baseline N-1**: 30u
- 📊 **Médiane**: 35u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 20u (40.0%)
- 📉 **Erreur Médiane**: 15u (30.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande unique détectée - Cycle indéterminable
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Seule 1 commande historique (30u le 2025-10-06). Comme exigé par la règle absolue pour historique insuffisant (<3 commandes) sans référence N-1, le cycle médian est déduit à 31 jours (intervalle observation-actuelle). Date prédite: 2025-11-30 (dans 24j). RISQUE=OUI par défaut d'absence de pattern stabilisé. Quantité recommandée = dernière commande = 30u (méthode 'dernière valeur non-outlier').

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

**✅ Quantité LLM**: 20u (confidence: medium)
**📊 Quantité Réelle**: 30u

</details>


<details>
<summary><strong>2. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 40u
- 2025-09-20 05:57:22: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: low)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 2u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 4u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:22:41: 2u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 65u
- 2025-09-11 08:06:57: 70u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 68u (confidence: low)
**📊 Quantité Réelle**: 65u

</details>


<details>
<summary><strong>6. [PF0094] FILOU MOUTARDE 700 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 20u
- 2025-09-20 05:57:22: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: low)
**📊 Quantité Réelle**: 30u

</details>


<details>
<summary><strong>7. [PF0096] FILOU MOUTARDE 3 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 10u
- 2025-09-20 05:57:22: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 07:08:28: 10u

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 44u
- 2025-09-20 05:57:22: 44u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 07:08:28: 52u

**✅ Quantité LLM**: 44u (confidence: medium)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>9. [PF0093] FILOU MOUTARDE 300GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:06:02: 30u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 30u (confidence: low)
**📊 Quantité Réelle**: 50u

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
| [PF0077] FILOU PROVENCALE 5 L | 11 | Stock prédit: 6.1u (18j restants) → prédit 11u mais non commandé |
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
| [PF0084] FILOU CARBONNADES 800 GR | 5 | Stock: 1.8u (17j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T07:33:14.481Z*
