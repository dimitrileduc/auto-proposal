# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S40119
- **Date commande** : 2025-11-04 13:47:12
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 10,553 input + 9,045 output = 19,598 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 81.8% | 11 produits prédits, 9 corrects |
| **Rappel** | 60.0% | 15 produits réels, 9 détectés |
| **F1-Score** | 69.2% | Score équilibré global |

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
| **MAE** | 1.11 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 52.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 72.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 21.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [RISH04] RISH kombucha BIO - smash basil 330ml | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 25 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse des intervalles montre une commande environ toutes les 3 à 4 semaines. La dernière commande datant du 14 octobre, une nouvelle commande est statistiquement attendue début novembre, soit dans la fenêtre des 30 prochains jours. En excluant le pic de 4 unités, le volume moyen se stabilise à 2 unités.

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier s'allongeant avec une moyenne d'environ 22 à 25 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u avec espacement croissant des commandes
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'intervalle moyen entre les commandes (22 jours) et la date de la dernière commande (14 octobre) suggèrent que la prochaine occurrence se situera début novembre, soit dans la fenêtre des 30 jours. La quantité standard observée hors premier point est de 1 unité.

</details>


<details>
<summary><strong>3. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.7u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 31 à 34 jours, environ une fois par mois.
- **Saisonnalité**: none
- **Tendance**: Stable entre 2u et 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen est de 32 jours. La dernière commande date du 14 octobre. La prochaine commande est donc statistiquement attendue autour du 15 novembre, ce qui se situe dans la fenêtre des 30 prochains jours. La quantité retenue est de 3 unités, correspondant au volume habituel stable sans anomalie détectée.

</details>


<details>
<summary><strong>4. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 32 jours
- **Saisonnalité**: none
- **Tendance**: Stable entre 2 et 3 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande régulière tous les 30 à 33 jours. La dernière commande datant du 14 octobre, la prochaine est prévue autour du 15 novembre, ce qui s'inscrit dans la fenêtre des 30 prochains jours. La quantité recommandée de 3 unités correspond à la tendance haute observée.

</details>


<details>
<summary><strong>5. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier mais s'accélérant (30j à 23j)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2u-3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une accélération de la cadence, la dernière commande datant du 14 octobre. En appliquant l'intervalle moyen observé d'environ 27 jours, la prochaine commande est estimée autour du 10 novembre 2025, soit dans la fenêtre des 30 prochains jours. La quantité recommandée correspond au volume médian historique.

</details>


<details>
<summary><strong>6. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle moyen d'environ 22 jours (cycles de 12j, 21j, 34j)
- **Saisonnalité**: none
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une fréquence de commande moyenne de 22 jours. La dernière commande datant du 14 octobre, le cycle théorique placerait la prochaine commande autour du 5 novembre. Cette date tombant dans la fenêtre des 30 prochains jours, une commande de la quantité habituelle de 3 unités est prévue.

</details>


<details>
<summary><strong>7. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle aux alentours du 10 du mois
- **Saisonnalité**: none
- **Tendance**: Hausse légère (+1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier d'environ 32-34 jours. La dernière commande datant du 14 octobre, la prochaine est statistiquement attendue autour du 15 novembre. Comme cette date tombe dans la fenêtre des 30 prochains jours, une commande de 3 unités est préconisée, suivant la tendance de la dernière occurrence.

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle régulier d'environ 30 jours (21 à 34 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande constante de 2 unités environ une fois par mois. La dernière commande datant du 14 octobre, le prochain réapprovisionnement est attendu aux alentours du 14 novembre, soit dans la fenêtre des 30 prochains jours. La quantité stable de 2 unités est donc recommandée.

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle d'environ 33 jours entre les commandes
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen d'environ un mois suggère qu'une commande est déjà attendue compte tenu de l'intervalle de 54 jours depuis la dernière transaction du 10 septembre. Une commande de réapprovisionnement de 4 unités est donc hautement probable dans les 30 prochains jours.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 1u
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 2u
- 2025-08-08 08:17:38: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 1u
- 2025-09-10 06:04:57: 1u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 2u
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-08 08:17:38: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

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
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: -0.6u (-4j restants) → prédit 2u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | Stock prédit: 1.2u (11j restants) → prédit 2u mais non commandé |


---

## False Negatives (6)

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | En rupture (-16j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | En rupture (-1j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 6 | Stock: 0.5u (5j restants) - filtré pour autre raison |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | Stock: 0.5u (5j restants) - filtré pour autre raison |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | Stock: 0.9u (8j restants) - filtré pour autre raison |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock: 1.7u (24j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-18T21:32:11.707Z*
