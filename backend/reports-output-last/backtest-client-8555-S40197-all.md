# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S40197
- **Date commande** : 2025-11-07 12:51:16
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 11,455 input + 30,257 output = 41,712 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 15 produits prédits, 10 corrects |
| **Rappel** | 76.9% | 13 produits réels, 10 détectés |
| **F1-Score** | 71.4% | Score équilibré global |

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
| **MAE** | 7.70 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 42.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 64 | 65 | 1.0 | 1.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | 30 | 10.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 40 | 4.0 | 10.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0093] FILOU MOUTARDE 300GR | 35 | 50 | 15.0 | 30.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 8 | 40 | 32.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


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
- **Pattern temporel**: NON_HEBDO_INFERENCE_23J
- **Saisonnalité**: none
- **Tendance**: flat
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
# ANALYSE RYTHMIQUE
**Données disponibles** : Seulement 2 points (20 sept [sam] : 40u, 13 oct [lun] : 40u). Intervalle : 23 jours. Jours différents.

**Pattern identifié** : Pas de cycle hebdomadaire stable. Pas de saisonnalité N-1. Les commandes semblent suivre un rythme mensuel irrégulier (~23-30j) plutôt qu'un jour fixe. La quantité est REMARQUABLEMENT stable (40u exacts à chaque fois).

**Date prédiction (6 nov, jeudi)** : Non identifiable comme "jour habituel" (pas assez de données pour déterminer un jour récurrent précis). Cependant, le 6 nov tombe dans la fenêtre probable de la prochaine commande (23-30 jours après le 13 oct = entre 5 et 12 nov). Ce n'est DONC PAS un jour hors cycle, mais un jour DANS la fenêtre de commande potentielle.

# FILTRAGE OUTLIERS
**Pas d'outlier détecté** : Les deux valeurs sont identiques (40u). Pas de pic isolé ni de rupture apparente. La stabilité parfaite suggère que 40u est le volume contractuel ou standard pour ce client B2B.

# SYNTHÈSE & DÉCISION
**Situation** : Données extrêmement limitées mais signal ultra-stable.
**Règle appliquée** : "Pour données limitées (2-3 points) → Privilégie dernière valeur si cohérente avec la tendance"
**Justification** : La dernière commande (13 oct) était 40u. La précédente (20 sept) était aussi 40u. L'absence de variance et l'intervalle régulier (23j) indiquent un comportement récurrent fiable. En agro B2B, de tels patterns stables sont typiques de contrats de réapprovisionnement mensuels.

**Conclusion** : La prochaine commande, quelle que soit l'adherence au jour exact, sera très probablement de **40 unités**.

</details>


<details>
<summary><strong>2. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: **Pattern Rythmique Détécté**: Cycle sporadique ~23-24 jours (non hebdomadaire). Lundi apparaît 2x/3 mais intervalle temporel est le vrai pattern. Date prédiction (2025-11-06) tombe à 24j après dernière commande → dans la fenêtre de cycle récent.
- **Saisonnalité**: none
- **Tendance**: upward
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé est de ~23-24 jours entre commandes récentes (20 sept → 13 oct = 23j). La date de prédiction (6 nov) est à 24j de la dernière commande, tombant dans la fenêtre de renouvellement attendue. Les quantités étaient stables à 2u puis ont doublé à 4u le 13 octobre. Cette augmentation récente, même si elle pourrait être ponctuelle, est le meilleur indicateur de l'état actuel du client. En B2B agro, privilégier la précision signifier accepter le risque du pic récent plutôt que de lisser vers la moyenne historique qui ne reflète pas la demande actuelle.

</details>


<details>
<summary><strong>3. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 64u vs Médiane: 70u (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 64u (confidence: low)
- 📊 **Baseline N-1**: 64u
- 📊 **Médiane**: 70u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 1u (1.5%)
- 📉 **Erreur Médiane**: 5u (7.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: cycle_mensuel_environ_32_jours_identifie
- **Saisonnalité**: none
- **Tendance**: stable_a_legere_baisse
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle mensuel detecte (~32j) mais date cible hors cycle (24j depuis derniere commande). Application regle Jours Hors Cycle: prediction de la quantite de la prochaine commande probable plutot que 0. Tendance stable avec legere baisse de 7% entre les 2 points. Strategie: derniere valeur (65u) ajustee de la baisse tendancielle (1u) pour minimiser le MAPE.

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
- **Pattern temporel**: Aucun pattern hebdomadaire détecté (commandes sur samedi et lundi). Cycle mensuel irrégulier (~23 jours entre les deux commandes)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données limitées mais stables (2 commandes de 20u). Pas de pattern hebdomadaire, mais cycle mensuel estimé à 23-28 jours. Le 06/11 (jeudi) à 24j de la dernière commande correspond à la période probable de la prochaine commande. En absence d'outlier et de tendance de variation, la quantité la plus probable est la dernière valeur stable.

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
- **Pattern temporel**: Aucune donnée historique disponible
- **Saisonnalité**: none
- **Tendance**: inconnu
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Absence totale de données historiques (N-1 et 3 derniers mois vides). Impossible d'établir un pattern rythmique, détecter des outliers ou une saisonnalité. Le produit [PF1689] est un condiment squeeze 300ml, format typique pour restauration B2B. Sans historique, il s'agit vraisemblablement d'un produit nouveau ou à commandes très épisodiques. En agro B2B, une première commande de test ou un réapprovisionnement minimal après longue absence correspond généralement à 1 cartouche (6-12 unités). La valeur médiane de 8 unités représente une commande de lancement/prospection réaliste, minimisant le risque MAPE tout en respectant la règle d'éviter le 0 non justifié.

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

**✅ Quantité LLM**: 64u (confidence: low)
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

## False Negatives (3)

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
| [PF0088] FILOU VOL AU VENT 800 GR | 50 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [PF0089] FILOU VOL AU VENT 400 GR | 20 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [PF0078] FILOU CHASSEUR 5 L | 30 | Stock suffisant: 23.5u (43j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T08:11:54.844Z*
