# Rapport Backtest - Client Epicerie Uhoda Vennes

## Contexte

- **Client** : Epicerie Uhoda Vennes (ID: 17587)
- **Commande réelle** : S40247
- **Date commande** : 2025-11-12 10:37:22
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 43
- **Tokens**: 90,515 input + 183,620 output = 274,135 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 18 produits prédits, 15 corrects |
| **Rappel** | 51.7% | 29 produits réels, 15 détectés |
| **F1-Score** | 63.8% | Score équilibré global |

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
| **MAE** | 0.27 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 26.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 16.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
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

## True Positives (15)

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
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (15 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 47j modérément régulier (CV=36%)
- **Saisonnalité**: weak
- **Tendance**: stable
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Cycle 47j détecté sur N-1 (médiane 47j, CV 36%). Dernière commande le 2025-10-23 + 47j → 2025-12-09 (dans 28j < 30j). RISQUE CONFIRMÉ. Quantités N-1 stables à 2u (médiane 2, CV 0% après exclusion de l'outlier 1u). Baseline retenue 2u. Saisonnalité faible (récent 1u vs N-1 2u, écart -50% mais historique limité).

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière avec intervalles de 21j et 38j, médiane 29.5j
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 29.5 jours détecté (CV=28.8%), prochaine commande dans 10 jours (21 nov), quantité médiane de 2u après filtrage (pas d'outliers)

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Historique critique (2 commandes) sur 38 jours - intervalle unique non reproductible
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
PHASE 1 - Détection risque: 2 commandes uniquement (2025-09-15 et 2025-10-23). Intervalle unique calculé: 38 jours. Comme échantillon <3 points, écart-type et CV non calculables (division par zéro) → confiance LOW par défaut. Prochaine prédite le 2025-11-30 (2025-10-23 + 38j) soit dans 19 jours (<30j) → RISQUE CONFIRMÉ. PHASE 2 - Quantité: Valeurs [2,1] (chronologique). Q1=1.25, Q3=1.75, IQR=0.5 → barrières [0.5,2.5] → aucun outlier. CV quantités=47.1% (σ=0.707/μ=1.5). Méthode: moyenne tronquée non applicable → fallback médiane =1.5 → arrondi 2 unités. Pas de donnée N-1 → saisonnalité 'none'. CONFIDENCE GLOBALE LOW due à historique critique.

</details>


<details>
<summary><strong>4. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle imprévisible (CV 98.73%) - historique trop erratique pour identifier une périodicité fiable
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 91 jours calculé sur 4 intervalles très dispersés (CV 98.73%). Prochaine commande prévue le 06/12/2025 dans 25 jours → RISQUE CONFIRMÉ. Quantité par moyenne tronquée: 2 unités (CV 30.63% des quantités). Aucun outlier statistique détecté. Pas de saisonnalité exploitable (N-1 non comparable).

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 41 jours (cycle médian) avec quantité constante
- **Saisonnalité**: weak
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 41 jours détecté sur N-1 (CV=34.05%), prochaine commande prévue le 2025-11-16 (dans 5 jours). Quantité stable de 2u sur 10 commandes, aucun outlier détecté. Saisonnalité faible sans impact sur la prévision.

</details>


<details>
<summary><strong>6. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, médiane 41j (CV 132%)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 1u, 1u, 3u, 3u

**🧠 Raisonnement LLM:**
Cycle erratique 41j, prochaine 5j, quantité médiane 2u

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique tous les 41j (médiane) avec CV élevé
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Cycle de 41j calculé sur N-1 (CV=37.77%, confiance medium). Dernière commande le 2025-10-06, prochaine prévue le 2025-11-16 (dans 5j) → risque détecté. Quantité: médiane=2u après exclusion du pic isolé de 3u (CV=20.35% sur valeurs filtrées, confiance high). Pas de saisonnalité forte détectée.

</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 40.5 jours en moyenne, cycle très régulier avec CV de 19.43%
- **Saisonnalité**: weak
- **Tendance**: stable
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Cycle de 40.5 jours détecté (CV=19.43%), prochaine commande prévue le 2025-11-15 (dans 4 jours). Quantité médiane stable de 2 unités observée sur 8 des 9 dernières commandes (1 outlier historique exclus). Pas d'ajustement saisonnier nécessaire. Confiance élevée sur les deux phases.

</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 21 jours très régulièrement
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 21 jours détecté sur historique récent (CV=0%), très régulier. Prochaine commande attendue le 2025-10-27, soit 15 jours de retard au 2025-11-11. Risque de commande immédiate très élevé. Baseline quantité de 2u via médiane des valeurs retenues [1,2,2] (CV=28%). Aucune saisonnalité forte détectée (impact=none, N-1 médiane=2u vs récent médiane=2u).

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier de 44 jours (médiane) basé sur N-1
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 44j détecté sur N-1 (CV=25.43%), prochaine commande dans 8 jours. Quantité moyenne tronquée de 2u sur historique N-1 stable. Pas de saisonnalité forte détectée avec historique récent limité.

</details>


<details>
<summary><strong>11. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle médian de 54 jours, historique très irrégulier avec CV de 117.8%
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 54 jours détecté (CV=117.8% très erratique). Prochaine commande prévue le 2025-11-29 dans 18 jours (RISQUE OUI). Baseline quantité calculée par moyenne tronquée = 1.2 → 1u. Aucun outlier détecté. Pas de saisonnalité forte. Confiance globale low due à l'irrégularité du cycle.

</details>


<details>
<summary><strong>12. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 42 jours (basé sur un seul intervalle, historique très limité)
- **Saisonnalité**: none
- **Tendance**: increasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 42 jours calculé sur un unique intervalle (25/08/2025 → 06/10/2025). Prochaine commande prévue le 17/11/2025, soit dans 6 jours (RISQUE OUI). Quantités [1,2] sans outlier, CV=47% → médiane=1.5 arrondie à 2 unités. Absence totale de données N-1 invalide l'analyse saisonnière. Confiance LOW globale du fait de l'historique critique (<3 commandes).

</details>


<details>
<summary><strong>13. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle médian de 21j (uniquement 2 commandes)
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Seulement 2 commandes historiques. Intervalle médian de 21j entre commandes. Dernière commande le 06 octobre, date suivante prévue le 27 octobre non observée. Prochaine commande anticipée le 17 novembre (dans 6j). Quantité médiane tronquée de 2u. Très faible confiance due à historique insuffisant et absence de données N-1 pour valider saisonnalité.

</details>


<details>
<summary><strong>14. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: 2 commandes sur 3 mois, intervalle unique de 21j - pattern non déterminable
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique critique: 2 commandes sans N-1, intervalle 21j. Date prédite 06/10 dépassée de 36j → risque rupture immédiat. Pattern rompu possible. Quantité=2u (dernière valeur) par défaut.

</details>


<details>
<summary><strong>15. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 21j selon les 2 points disponibles (insuffisant)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique insuffisant (2 commandes). Intervalle unique de 21j détecté → cycle théorique 21j. Dernière commande le 15/09, prochaine théorique le 17/11 (J+63 cumulé) soit dans 6j (<30j) → risque OUI. Quantités stables [2,2] sans outlier → baseline médiane = 2u.

</details>




### 📊 Données d'Input LLM (15 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 2u
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 3u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 1u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 3u
- 2024-03-18 09:21:22: 2u
- 2024-01-04 15:45:16: 1u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV139] LV Tartinade Paprika Chili 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-05-16 07:09:48: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 1u
- 2024-01-04 15:45:16: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.4u (13j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: -0.4u (-8j restants) → prédit 2u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 2 | Stock prédit: -0.1u (-9j restants) → prédit 2u mais non commandé |


---

## False Negatives (14)

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
| [LV131] LV Tartinade Potiron 190g | 2 | Stock: 0.8u (23j restants) - filtré pour autre raison |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Stock suffisant: 0.6u (50j restants > seuil 30j) |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock suffisant: 0.7u (37j restants > seuil 30j) |
| [LV135] LV Tartinade Basilico 190g | 2 | Stock: 0.4u (10j restants) - filtré pour autre raison |
| [LV136] LV Tartinade Betterave 190g | 2 | En rupture (-4j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Stock suffisant: 1.4u (84j restants > seuil 30j) |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | Stock: 0.4u (23j restants) - filtré pour autre raison |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | En rupture (-26j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock: 0.6u (29j restants) - filtré pour autre raison |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock: 0.6u (29j restants) - filtré pour autre raison |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | En rupture (-2j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 2 | En rupture (-5j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 2 | En rupture (-26j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock: 0.2u (7j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T07:36:21.252Z*
