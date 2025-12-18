# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S39663
- **Date commande** : 2025-10-13 08:25:46
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 15,670 input + 28,854 output = 44,524 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 16 produits prédits, 8 corrects |
| **Rappel** | 88.9% | 9 produits réels, 8 détectés |
| **F1-Score** | 64.0% | Score équilibré global |

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
| **MAE** | 5.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 32.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 15.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (8)

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
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0084] FILOU CARBONNADES 800 GR | 3 | 4 | 1.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | 20 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 4 | 10 | 6.0 | 60.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 74 | 44 | 30.0 | 68.2% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 70 | 65 | 5.0 | 7.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 20u vs Médiane: 30u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: low)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 30u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 10u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: irregular_pattern_not_weekly
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse Rythmique: 2 commandes uniquement sur 46 jours (05/08 au 20/09), sans cycle hebdomadaire stable (mardi puis samedi). Le lundi 13/10 est hors jour habituel. Je dois donc prédire la prochaine commande probable, pas une commande zéro ce jour-là. Filtrage Outliers: Le pic à 40u (05/08) est ancien et isolé, suivi d'une baisse à 20u (20/09) suggérant un retour à un niveau plus bas ou une consommation réduite. Synthèse: Avec seulement 2 points, je privilégie la tendance récente selon la règle 'données limitées → dernière valeur cohérente'. La baisse 40→20u indique une stabilisation probable autour de 20u.

</details>


<details>
<summary><strong>2. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 70u vs Médiane: 80u (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 70u (confidence: low)
- 📊 **Baseline N-1**: 70u
- 📊 **Médiane**: 80u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 5u (7.7%)
- 📉 **Erreur Médiane**: 15u (23.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: cycle_mensuel_épars
- **Saisonnalité**: none
- **Tendance**: stable_avec_legere_baisse
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Aucune donnée N-1. Cycle mensuel épars (37j d'intervalle) avec jours variables (mar.-jeu.). Lundi = hors cycle → règle spéciale: prédire la quantité de la prochaine commande réelle. Baisse 80→70u isolée mais pas de rupture confirmée. Avec 2 seuls points, la prédiction la plus précise (MAPE minimal) est la dernière valeur réelle: 70u.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0094] FILOU MOUTARDE 700 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-20 05:57:22: 20u
- 2025-08-05 09:12:07: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: low)
**📊 Quantité Réelle**: 20u

</details>


<details>
<summary><strong>2. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 08:06:57: 70u
- 2025-08-05 09:12:07: 80u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 70u (confidence: low)
**📊 Quantité Réelle**: 65u

</details>




---

## False Positives (8)

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
| [PF0085] FILOU CURRY KETCHUP  10 KG | 7 | Stock prédit: 3.4u (21j restants) → prédit 7u mais non commandé |
| [PF0075] FILOU CHASSEUR  10 L | 10 | Stock prédit: 5.0u (22j restants) → prédit 10u mais non commandé |
| [PF0078] FILOU CHASSEUR 5 L | 10 | Stock prédit: 1.1u (2j restants) → prédit 10u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 10 | Stock prédit: 3.1u (9j restants) → prédit 10u mais non commandé |
| [PF1844] FILOU ANDALOUSE SQUEEZE 300ML | 40 | Stock prédit: -19.1u (-22j restants) → prédit 40u mais non commandé |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 40 | Stock prédit: -0.3u (0j restants) → prédit 40u mais non commandé |
| [PF0088] FILOU VOL AU VENT 800 GR | 0 | Stock prédit: -61.9u (-56j restants) → prédit 0u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 0 | Stock prédit: -16.0u (-18j restants) → prédit 0u mais non commandé |


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
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 40 | Stock suffisant: 31.7u (83j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T08:43:38.474Z*
