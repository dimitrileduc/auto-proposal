# Rapport Backtest - Client REWE KARL ESSER Gmbh&CO OHG

## Contexte

- **Client** : REWE KARL ESSER Gmbh&CO OHG (ID: 39030)
- **Commande réelle** : S40340
- **Date commande** : 2025-11-13 12:49:53
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 12,615 input + 3,966 output = 16,581 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 21.4% | 14 produits prédits, 3 corrects |
| **Rappel** | 30.0% | 10 produits réels, 3 détectés |
| **F1-Score** | 25.0% | Score équilibré global |

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
| **MAE** | 4.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 69.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (3)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 6 | 4.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 7 | 4.0 | 57.1% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 7 | 6.0 | 85.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 4u (57.1%)
- 📉 **Erreur Médiane**: 5u (71.4%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse légère à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'a été identifiée comme outlier, les volumes restant stables entre 2u et 4u. Étape 2: La saisonnalité est faible, bien qu'une commande de 3u ait été enregistrée en novembre N-1, suggérant une stabilité en fin d'année. Étape 3: La tendance récente montre un passage de 2u à 3u entre septembre et octobre 2025. Étape 4: La moyenne lissée sur les 3 derniers mois est de 2.33u. Compte tenu de la dernière commande à 3u et du comportement N-1 à la même période (3u le 08/11/2024), nous recommandons 3 unités pour couvrir le cycle de novembre tout en évitant le sur-stockage.

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 6u (85.7%)
- 📉 **Erreur Médiane**: 5u (71.4%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2-3 mois
- **Saisonnalité**: weak
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à rotation très lente (Slow Mover) avec un historique clairsemé. 1. De-eventing : Aucune quantité ne semble aberrante au vu du volume (1 à 3 unités). 2. Saisonnalité : On note une légère activité en période estivale (3u en juillet N-1) et une commande de 1u en novembre N-1. Nous sommes actuellement en novembre. 3. Tendance : La dernière commande date de septembre (2u), suggérant un besoin latent. 4. Recommandation : En l'absence de pattern de commandes groupées ou de forte tendance haussière, et pour un produit de 250ml (risque de péremption si sur-stockage), une commande de sécurité de 1 unité est préconisée pour couvrir la demande de fond sans immobiliser de stock inutilement.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 10:56:30: 3u
- 2025-09-30 06:14:36: 2u
- 2025-09-01 13:34:19: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-08 09:29:18: 3u
- 2024-08-23 08:46:44: 3u
- 2024-07-17 11:27:03: 3u
- 2024-05-28 07:04:34: 2u
- 2024-03-21 14:00:13: 4u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 13:34:19: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-08 09:29:18: 1u
- 2024-07-17 11:27:03: 3u
- 2024-05-28 07:04:34: 2u
- 2024-03-21 14:00:13: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>




---

## False Positives (11)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | Stock prédit: 2.2u (17j restants) → prédit 4u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: 0.6u (21j restants) → prédit 1u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: 0.6u (21j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: 0.6u (21j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | Stock prédit: 0.2u (5j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.4u (24j restants) → prédit 1u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: -1.4u (-41j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |


---

## False Negatives (7)

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
| [DIS0012] Display Foodprint Karton LD | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD014] LD Organic Avocado Spread 180 g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD015] LD Onion Spread 180g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD011] LD Organic Kids Spread 180 g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:16:29.402Z*
