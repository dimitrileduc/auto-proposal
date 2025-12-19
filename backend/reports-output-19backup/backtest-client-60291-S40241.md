# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S40241
- **Date commande** : 2025-11-12 09:14:35
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 35
- **Tokens**: 17,826 input + 18,672 output = 36,498 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 12 produits prédits, 8 corrects |
| **Rappel** | 34.8% | 23 produits réels, 8 détectés |
| **F1-Score** | 45.7% | Score équilibré global |

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
| **MAE** | 0.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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
| [RIT05] RITCHIE Cola - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv17] Mélange de noix bio vrac 2,75kg | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv08] Banana chips bio vrac 1,6kg | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (7 jours) avec transition récente du mercredi vers le mardi
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un rythme hebdomadaire strict (tous les 7 jours). Après une commande le 04/11, la prochaine est prévue pour le 11/11, soit aujourd'hui. La quantité moyenne est ajustée pour refléter la demande réelle en écartant la baisse ponctuelle à 1u.

</details>


<details>
<summary><strong>2. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire (cycles de 7 jours)
- **Saisonnalité**: none
- **Tendance**: Tendance à la baisse vers 1-2u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le cycle de commande est devenu hebdomadaire chaque mardi depuis fin octobre. La prochaine commande est prévue exactement le 2025-11-11. En excluant le pic de 4u de septembre, la moyenne stabilisée et la tendance récente suggèrent une commande de 2 unités.

</details>


<details>
<summary><strong>3. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier de 14 à 34 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 5u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
La commande précédente date du 4 novembre (il y a 7 jours). Le cycle le plus court observé est de 14 jours, ce qui situerait la prochaine commande autour du 18 novembre, tombant ainsi dans la fenêtre des 30 prochains jours. La quantité de 1u étant considérée comme une anomalie par rapport au volume standard, la quantité recommandée est de 5u.

</details>


<details>
<summary><strong>4. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier entre 28 et 34 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une commande mensuelle régulière. La dernière commande date du 4 novembre. Sur la base du cycle observé de ~30 jours, la prochaine commande devrait intervenir vers début décembre, soit dans la fenêtre des 30 prochains jours. La quantité retenue est de 1 unité, excluant le pic exceptionnel de septembre.

</details>


<details>
<summary><strong>5. [fsv08] Banana chips bio vrac 1,6kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier suite à une reprise de commande récente (48j vs 7j)
- **Saisonnalité**: none
- **Tendance**: Hausse récente à 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande très récente le 04/11. En se basant sur la tendance de consommation actuelle et l'écart entre les deux points de données, un réapprovisionnement de 5 unités est projeté d'ici fin novembre pour maintenir le stock.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 33-35 jours (dernier mardi ou mercredi du mois)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4u -> 3u -> 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle observé est d'environ 34 jours. La dernière commande ayant eu lieu le 28 octobre, la prochaine occurrence est prévue autour du 1er décembre 2025, ce qui se situe à l'intérieur de la fenêtre de 30 jours à compter du 11 novembre. Bien que la tendance soit à la baisse, une quantité de 2 unités est retenue pour maintenir le stock de fond.

</details>


<details>
<summary><strong>7. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle moyen de 25 jours (cycle mensuel environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande moyen identifié est d'environ 25 jours. La dernière commande datant du 28 octobre, la prochaine commande est statistiquement prévue autour du 22 novembre, soit dans les 30 prochains jours. La quantité recommandée suit la tendance récente de 2 unités observée le mois dernier.

</details>


<details>
<summary><strong>8. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ tous les 36 jours
- **Saisonnalité**: none
- **Tendance**: Instable, volume faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique suggère un cycle moyen de 36 jours entre les commandes. La dernière ayant eu lieu le 24 septembre, la prochaine projection théorique se situait aux alentours du 30 octobre. Étant donné qu'aucune commande n'a été passée depuis, le réapprovisionnement est statistiquement imminent et devrait intervenir dans la fenêtre des 30 prochains jours (avant le 11 décembre). La quantité recommandée de 2 unités est la moyenne des commandes précédentes.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-10-28 07:14:16: 3u
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-10-28 07:14:16: 3u
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-10-01 07:17:25: 1u
- 2025-09-17 06:33:32: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>4. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 1u
- 2025-10-01 07:17:25: 1u
- 2025-09-17 06:33:32: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [fsv08] Banana chips bio vrac 1,6kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-09-17 06:33:32: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-09-24 06:16:03: 3u
- 2025-08-19 11:00:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-10-01 07:17:25: 1u
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 1u
- 2025-08-19 11:00:28: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (4)

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
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: 0.6u (7j restants) → prédit 1u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 1.0u (13j restants) → prédit 2u mais non commandé |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Stock prédit: -0.7u (-16j restants) → prédit 1u mais non commandé |


---

## False Negatives (15)

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
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | En rupture (-25j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | En rupture (-2j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock suffisant: 1.5u (34j restants > seuil 30j) |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock suffisant: 0.9u (52j restants > seuil 30j) |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | En rupture (-2j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock: 0.3u (10j restants) - filtré pour autre raison |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | En rupture (-45j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | En rupture (-45j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | En rupture (-45j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | En rupture (-3j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 2 | Stock: 1.4u (15j restants) - filtré pour autre raison |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | Stock: 4.1u (29j restants) - filtré pour autre raison |
| [fsv04] Amande nature bio vrac 2,8 kg | 5 | Stock suffisant: 4.3u (38j restants > seuil 30j) |
| [fsv18] Mendiant bio vrac 2,8kg | 2 | Stock suffisant: 1.7u (33j restants > seuil 30j) |
| [fsv03] Noisette nature bio vrac 2,8kg  | 2 | Stock suffisant: 1.8u (59j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T21:36:14.738Z*
