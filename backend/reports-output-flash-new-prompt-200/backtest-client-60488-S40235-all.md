# Rapport Backtest - Client MDH FOODSERVICE

## Contexte

- **Client** : MDH FOODSERVICE (ID: 60488)
- **Commande réelle** : S40235
- **Date commande** : 2025-11-12 09:20:02
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,664 input + 1,314 output = 4,978 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 19.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 78.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 77.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -78.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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
| [JOY03] JOY! Organic Apricot Jam 370g | 5 | 20 | 15.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 6 | 30 | 24.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 5u vs Médiane: 10u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 8.75u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 15u (75.0%)
- 📉 **Erreur Médiane**: 10u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 14 et 37 jours, principalement en début de semaine (Lundi/Mardi)
- **Saisonnalité**: none
- **Tendance**: Baisse de volume de -50% sur la dernière commande (5u vs 10u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur n'est identifiée comme outlier, les volumes (5-10u) étant cohérents avec un flux B2B régulier. ÉTAPE 2: Pas de données N-1 disponibles pour confirmer une saisonnalité sur la confiture d'abricot Bio. ÉTAPE 3: On observe une baisse de volume significative lors de la commande du 29/10 (5u au lieu de 10u), bien que la fréquence semble se resserrer. ÉTAPE 4: Compte tenu de la tendance baissière récente du volume par commande et de l'absence de visibilité saisonnière, une approche conservatrice de 5 unités est recommandée pour s'aligner sur la demande réelle observée fin octobre et éviter le surstockage.

</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 6u vs Médiane: 10u (Réel: 30u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 8.3u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 24u (80.0%)
- 📉 **Erreur Médiane**: 20u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne de 21 jours entre les commandes
- **Saisonnalité**: none
- **Tendance**: Forte baisse (Baisse de -75% sur la dernière commande)
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'analyse montre une rupture brutale de la consommation : après deux commandes de 20u en septembre, le volume est tombé à 5u fin octobre. ÉTAPE 1 : Les commandes de 20u sont traitées comme des outliers potentiels (stockage de rentrée). ÉTAPE 2 : Aucune donnée N-1 disponible, impact saisonnier non vérifiable. ÉTAPE 3 : La tendance est baissière avec un allongement des délais entre les commandes. ÉTAPE 4 : En l'absence de visibilité et face à une chute de volume, nous adoptons une position conservatrice proche de la dernière commande réelle (5u) ajustée à 6u pour couvrir une éventuelle stabilisation basse, évitant ainsi le sur-stockage d'un produit bio dont la rotation ralentit.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-29 14:49:41: 5u
- 2025-09-22 09:26:25: 10u
- 2025-09-01 08:56:10: 10u
- 2025-08-19 09:01:45: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 20u

</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-29 14:49:41: 5u
- 2025-09-22 09:26:25: 20u
- 2025-09-01 08:56:10: 20u
- 2025-08-19 09:01:45: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 30u

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | Stock prédit: 3.3u (23j restants) → prédit 4u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 7 | Stock prédit: 6.8u (25j restants) → prédit 7u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:11:41.637Z*
