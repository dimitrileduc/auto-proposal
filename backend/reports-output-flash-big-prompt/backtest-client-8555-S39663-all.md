# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S39663
- **Date commande** : 2025-10-13 08:25:46
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 15,871 input + 3,651 output = 19,522 total


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
- **Pattern temporel**: Irrégulier (30 à 45 jours d intervalle)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -50%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très restreint avec seulement deux points. On observe une commande le 05/08 (40u) suivie d'une commande le 20/09 (20u), soit une baisse de 50% sur l'intervalle. Le cycle semble se situer entre 30 et 45 jours. La date de prédiction (12/10) se situe 22 jours après la dernière commande, ce qui est légèrement précoce par rapport au cycle observé, mais conformément aux règles 'jours hors cycle', nous prédisons le volume de la prochaine commande probable. Compte tenu de la tendance baissière récente et de l'absence de données N-1 pour confirmer une saisonnalité, la dernière valeur connue (20u) constitue la base la plus fiable pour la livraison suivante.

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
- **Pattern temporel**: Cycle mensuel (~30-35j)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -12.5%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points), mais montre un cycle mensuel. Entre août (80u) et septembre (70u), une baisse de 12.5% est observée. La date de prédiction (12 octobre) tombe environ 31 jours après la dernière commande du 11 septembre, ce qui correspond au cycle habituel. Bien que ce soit un dimanche, selon les règles de gestion des jours hors cycle, nous prédisons la quantité du prochain passage de commande probable. En l'absence de données plus denses, la dernière valeur connue (70u) est la base la plus fiable pour minimiser le MAPE, reflétant la tendance baissière récente par rapport au premier point de données de 80u. Confiance basse due au très faible nombre d'échantillons (n=2). Los volumes restants importants (70u) suggèrent qu'il s'agit d'un réapprovisionnement de stock sec (seau 1000ml) à rotation mensuelle pour un établissement B2B moyen-gros (ex: cafétéria ou restaurant). Quantité de 70u retenue car c'est le volume le plus récent consommé sur un cycle de 30 jours au même produit/format identique au mois écoulé sans indicateur de rebond immédiat vers 80u (août). C'est la valeur de base nécessaire pour couvrir le cycle de consommation du mois de commande à suivre à partir du 12 octobre. Ce volume est crédible car il s'agit d'un seau de 1 litre d'un condensé de graisse (mayonnaise), donc d'une denrée stable n'impliquant pas de réapprovisionnements ultra-fréquents mais stables selon l'activité de l'enseigne cliente. Le 12 octobre étant le dimanche suivant le mois écoulé (septembre 11 -> oct 12), il correspond au point de déclenchement probable de la commande de reconstitution de stock mensuel.

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
| [PF0085] FILOU CURRY KETCHUP  10 KG | 7 | Stock prédit: 3.6u (21j restants) → prédit 7u mais non commandé |
| [PF0075] FILOU CHASSEUR  10 L | 10 | Stock prédit: 5.2u (23j restants) → prédit 10u mais non commandé |
| [PF0078] FILOU CHASSEUR 5 L | 10 | Stock prédit: 1.4u (3j restants) → prédit 10u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 10 | Stock prédit: 3.3u (10j restants) → prédit 10u mais non commandé |
| [PF1844] FILOU ANDALOUSE SQUEEZE 300ML | 40 | Stock prédit: -18.3u (-21j restants) → prédit 40u mais non commandé |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 40 | Stock prédit: 0.1u (0j restants) → prédit 40u mais non commandé |
| [PF0088] FILOU VOL AU VENT 800 GR | 64 | Stock prédit: -61.1u (-55j restants) → prédit 64u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 30 | Stock prédit: -15.4u (-17j restants) → prédit 30u mais non commandé |


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
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 40 | Stock suffisant: 32.0u (84j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:57:31.911Z*
