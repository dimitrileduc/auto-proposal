# Rapport Backtest - Client REWE MARKT GMBH - WEST

## Contexte

- **Client** : REWE MARKT GMBH - WEST (ID: 3865)
- **Commande réelle** : S39800
- **Date commande** : 2025-10-20 06:42:38
- **Date cutoff système** : 2025-10-19 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 57,414 input + 148,993 output = 206,407 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 20 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 40.0% | Score équilibré global |

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
| **MAE** | 2.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 87.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 148.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 62.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (5)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 6 | 1.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 12 | 2 | 10.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec 2 commandes le même jour (2025-08-11), puis intervalles de 8j, 14j, 21j. Cycle médian de 14j mais CV de 37% indique une irrégularité modérée.
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 14j détecté (CV=37.1% → medium). Prochaine commande prévue le 2025-10-07 (déjà 12 jours de retard vs date actuelle 2025-10-19). Quantité par moyenne tronquée=4u, ajustée à 5u (+25%) pour saisonnalité forte (histo N-1 à +90% vs récent).

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière avec intervalles de 0, 21 et 22 jours (médiane: 21j, CV: 70.8%)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 21j détecté sur 4 commandes (CV 70.8% → faible confiance phase 1). Prochaine commande attendue le 2025-10-14, soit 5 jours avant la date actuelle, indiquant un risque de rupture immédiat. Quantité moyenne tronquée de 2.5u (CV 30.1% → confiance phase 2 medium) arrondie à 3u. Aucune saisonnalité forte détectée dans N-1.

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière avec intervalles de 8 à 21 jours (médiane 14j, CV=37%)
- **Saisonnalité**: strong
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle median de 14 jours (CV=37%), derniere commande le 2025-09-23, prochaine attendue le 2025-10-07 (deja depassee de 12 jours). Historique quantitatif [1,2,3,4] sans outlier detecte. Baseline calculee par moyenne tronquee (exclusion min/max) = 2.5 arrondie a 3u. Impact saisonnier fort (+88% vs N-1) mais pattern non coherent, aucun ajustement applique.

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle médian de 15.5 jours (CV=42.7%, faible régularité). Intervalles: 8j, 23j.
- **Saisonnalité**: none
- **Tendance**: increasing
- **Outliers détectés**: 2u, 3u

**🧠 Raisonnement LLM:**
Cycle médian de 15.5j (CV=42.7%) avec intervalles hétérogènes. Prochaine commande prévue le 28 octobre (dans 9j). Quantité estimée à 3u (médiane des valeurs récentes non-outliers [2,3,2]). Tendance haussière vs N-1 (+50%) mais absence de pattern saisonnier clair. Recommandation: 3 unités.

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 12u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: medium)
- 📊 **Baseline N-1**: 11.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 10u (500.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Historique insuffisant (2 commandes récentes). Cycle médian de 14j basé sur les données disponibles.
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Outliers détectés**: 40u

**🧠 Raisonnement LLM:**
Historique très limité (2 commandes récentes) avec une longue période sans commande (61j). En extrapolant un cycle de 14j et en détectant une tendance d'augmentation des quantités (3→4), une commande de 12u est possible dans les 30 prochains jours. Le pattern N-1 suggère des commandes groupées en fin de mois avec une pause estivale.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:18:30: 3u
- 2025-09-02 09:41:32: 5u
- 2025-08-19 08:35:46: 5u
- 2025-08-11 13:20:39: 5u
- 2025-08-11 10:59:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:32:08: 2u
- 2024-09-24 12:35:42: 2u
- 2024-09-19 07:02:21: 3u
- 2024-08-07 13:24:40: 2u
- 2024-06-11 07:20:33: 3u
- 2024-06-04 08:24:14: 1u
- 2024-06-04 08:21:47: 1u

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:18:30: 2u
- 2025-09-02 09:41:32: 4u
- 2025-08-11 13:20:39: 3u
- 2025-08-11 10:59:30: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:35:42: 5u
- 2024-09-19 07:02:21: 2u
- 2024-08-07 13:24:40: 2u
- 2024-07-05 08:39:50: 1u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:18:30: 2u
- 2025-09-02 09:41:32: 1u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:32:08: 1u
- 2024-09-24 12:35:42: 2u
- 2024-09-19 07:02:21: 1u
- 2024-06-11 07:20:33: 1u
- 2024-06-04 08:24:14: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 2u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:35:42: 2u
- 2024-08-07 13:24:40: 2u
- 2024-06-11 07:20:33: 1u
- 2024-06-04 08:24:14: 1u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 08:35:46: 4u
- 2025-08-11 13:20:39: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:26:22: 1u
- 2024-09-19 07:02:21: 1u
- 2024-06-11 07:20:33: 1u
- 2024-06-04 08:24:14: 2u

**✅ Quantité LLM**: 12u (confidence: medium)
**📊 Quantité Réelle**: 2u

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
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | Stock prédit: 0.6u (33j restants) → prédit 2u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 3 | Stock prédit: -0.6u (-5j restants) → prédit 3u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | Stock prédit: -3.1u (-27j restants) → prédit 3u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 0.2u (4j restants) → prédit 2u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: 0.9u (19j restants) → prédit 2u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Stock prédit: 0.6u (19j restants) → prédit 2u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: -0.0u (0j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: -1.4u (-19j restants) → prédit 1u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: -0.8u (-12j restants) → prédit 1u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: -1.0u (-22j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: -0.6u (-26j restants) → prédit 2u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Stock prédit: -0.6u (-25j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: -1.0u (-58j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T07:31:43.466Z*
