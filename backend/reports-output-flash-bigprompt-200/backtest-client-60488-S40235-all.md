# Rapport Backtest - Client MDH FOODSERVICE

## Contexte

- **Client** : MDH FOODSERVICE (ID: 60488)
- **Commande réelle** : S40235
- **Date commande** : 2025-11-12 09:20:02
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 5,937 input + 1,174 output = 7,111 total


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
| **MAE** | 20.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 80.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 79.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -80.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 5 | 30 | 25.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 5u vs Médiane: 10u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 15u (75.0%)
- 📉 **Erreur Médiane**: 10u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (~20-30j)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -50%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux phases : un volume stable de 10 unités entre août et septembre avec un rythme de ~20-30 jours, suivi d'une commande réduite à 5 unités fin octobre. La date cible (mardi 11 novembre) se situe 13 jours après la dernière commande du mercredi 29 octobre. Bien que l'intervalle soit plus court que les cycles précédents, la tendance est à la baisse de volume. En suivant la règle de prédire la prochaine commande probable sans utiliser 0 pour cause de jour hors cycle, je retiens la dernière valeur observée (5u) comme la référence la plus fiable pour la demande actuelle, car elle reflète mieux la dynamique récente que la moyenne historique de 8,75u.

</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 5u vs Médiane: 10u (Réel: 30u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 25u (83.3%)
- 📉 **Erreur Médiane**: 20u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier s'allongeant (20j, 30j puis 37j)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -75% (20u à 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une diminution nette du volume par commande, passant de 20 unités en septembre à seulement 5 unités lors de la dernière commande du 29/10. Bien que les intervalles entre les commandes soient irréguliers et s'étendent, la commande la plus récente (5u) reflète la tendance de consommation actuelle pour ce produit organique. Le jour de prédiction (mardi) correspond à une fenêtre de commande historique (mardi 19/08). Je retiens la dernière valeur connue de 5u pour minimiser le risque d'erreur face à cette tendance baissière marquée.

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

**✅ Quantité LLM**: 5u (confidence: low)
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

*Rapport généré automatiquement le 2025-12-18T11:15:20.669Z*
