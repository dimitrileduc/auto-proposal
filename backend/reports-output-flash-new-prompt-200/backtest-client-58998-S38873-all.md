# Rapport Backtest - Client VITAFRAIS SAS

## Contexte

- **Client** : VITAFRAIS SAS (ID: 58998)
- **Commande réelle** : S38873
- **Date commande** : 2025-08-29 11:55:17
- **Date cutoff système** : 2025-08-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,639 input + 1,874 output = 5,513 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 66.7% | 3 produits réels, 2 détectés |
| **F1-Score** | 57.1% | Score équilibré global |

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
| **MAE** | 25.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (2)

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
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 25 | 75 | 50.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 25u vs Médiane: 25u (Réel: 75u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 75u
- 📉 **Erreur LLM**: 50u (66.7%)
- 📉 **Erreur Médiane**: 50u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire le jeudi identifié sur les deux dernières semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 25u
- **Outliers détectés**: 50u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : La commande de 50u du 07/08 est traitée comme un outlier (2x la base de 25u), probablement un restockage initial ou une promotion locale. La demande de fond s'établit à 25u. ÉTAPE 2 (Saisonnalité) : Pas de données N-1 disponibles, impact considéré comme neutre à ce stade. ÉTAPE 3 (Tendance) : On observe une stabilisation à 25u avec une récurrence stricte le jeudi à 12h00 lors des deux dernières occurrences. ÉTAPE 4 (Recommandation) : Le maintien de la quantité de base de 25u est préconisé pour correspondre au rythme de consommation réel observé sans risquer le surstockage.

</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Un seul point de données identifié le jeudi (cycle de 14 jours potentiel)
- **Saisonnalité**: none
- **Tendance**: Stable à 25u sur le dernier point observé
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée sur l'unique entrée disponible. Étape 2: Absence d'historique N-1 pour corréler la saisonnalité, impact considéré comme neutre par défaut. Étape 3: Un rythme de 14 jours semble émerger (jeudi 14 au jeudi 28), suggérant une commande de réapprovisionnement cyclique de type bimensuelle. Étape 4: La recommandation s'aligne sur le volume précédent (25u) pour maintenir le stock sans historique de croissance prouvé, adoptant une approche conservatrice face au manque de profondeur de données (confiance faible). Elle intervient exactement 14 jours après la précédente, validant un besoin de renouvellement de stock identique au dernier approvisionnement connu car le délai est régulier (bi-hebdomadaire). Quantité finale : 25u pour couvrir les 14 prochains jours sur la base de la consommation précédente observée sur la même durée de cycle (14-28 août). Aucun ajustement n'est fait car les tendances ne sont pas encore établies sur plus de deux points de données consécutifs. La prédiction finale est un entier correspondant au volume de base stable car aucune raison de baisse ou hausse n'est justifiée par l'historique réduit. Fin du raisonnement étape par étape. Recommandation finale arrêtée à 25 pour éviter les ruptures sans sur-stocker abusivement un produit bio à potentielle DLC courte. Confidence fixée à low car basée sur un échantillon unique (n=1). Fin du bloc de raisonnement logique structuré sur 4 étapes distinctes. Aucune promotion ni saisonnalité forte n'est applicable avec ces données de base restreintes. Stable et conservateur. Volume de fond à 25. Recommandation finale : 25. Pas d'ajustements tendance ou saisonnier. Simple report du volume bimensuel observé. Fin du flux logique. Résultat : 25.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:24:53: 25u
- 2025-08-07 12:21:11: 50u
- 2025-06-02 12:59:55: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 75u

</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:24:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 25u

</details>




---

## False Positives (2)

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
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 25 | Stock prédit: 17.4u (29j restants) → prédit 25u mais non commandé |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 38 | Stock prédit: 7.6u (8j restants) → prédit 38u mais non commandé |


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
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 75 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:13:03.368Z*
