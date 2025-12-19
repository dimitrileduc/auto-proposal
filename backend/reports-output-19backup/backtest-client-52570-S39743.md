# Rapport Backtest - Client ASBL L'Accueil - Magasin du Val Dieu

## Contexte

- **Client** : ASBL L'Accueil - Magasin du Val Dieu (ID: 52570)
- **Commande réelle** : S39743
- **Date commande** : 2025-10-16 11:39:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 12,713 input + 8,911 output = 21,624 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 10 produits prédits, 6 corrects |
| **Rappel** | 42.9% | 14 produits réels, 6 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

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
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 15.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 15.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

## True Positives (6)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [WIG03] WIGNAC cidre naturel bio 750ml | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [WIG04] WIGNAC cidre rosé bio 750ml | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle régulier d'environ 25 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable entre 3u et 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande mensuelle systématique. La dernière commande datant du 24 septembre, le cycle de 25-30 jours place la prochaine échéance aux alentours du 20-25 octobre, soit dans la fenêtre des 30 prochains jours. La quantité de 3 unités correspond à la tendance récente la plus stable.

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 28 à 30 jours (mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 3u-4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité mensuelle quasi systématique. La dernière commande datant du 24 septembre, la prochaine est prévue aux alentours du 24 octobre, soit dans les 30 prochains jours. Une quantité de 4 unités est recommandée en accord avec les volumes récents et historiques.

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 3.75u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 21 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La fréquence de commande moyenne est d'environ 25 jours. La dernière commande datant du 24 septembre, le réapprovisionnement est attendu aux alentours du 19 octobre, ce qui se situe à l'intérieur de la fenêtre des 30 prochains jours. La quantité est stable entre 3 et 4 unités.

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle mensuel approximatif de 25 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une fréquence de commande d'environ une fois par mois. La dernière commande datant du 24 septembre, le cycle suggère un réapprovisionnement imminent dans la deuxième quinzaine d'octobre. La quantité stable récente de 2 unités est donc préconisée.

</details>


<details>
<summary><strong>5. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4.3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier mais s'approchant d'un cycle de 30-35 jours
- **Saisonnalité**: none
- **Tendance**: Stable entre 4 et 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre des intervalles de 35 et 16 jours. En se basant sur la dernière commande du 11 septembre, nous avons dépassé le délai minimal de réapprovisionnement de 30 jours. Une commande est donc imminente dans la fenêtre des 30 prochains jours. La quantité est calculée sur la base de la stabilité observée des commandes précédentes.

</details>


<details>
<summary><strong>6. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4.33u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 30 à 35 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 4 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 34 jours. La dernière commande ayant eu lieu le 11 septembre, la prochaine échéance est prévue autour du 15 octobre. Comme cette date correspond à l'échéance de prédiction, une commande de réapprovisionnement de 4 unités est attendue.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 1u
- 2025-08-04 11:51:02: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 4u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 3u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 4u
- 2025-08-04 11:51:02: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 2u
- 2025-08-26 07:12:09: 2u
- 2025-08-04 11:51:02: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-06-27 05:39:39: 2u
- 2024-05-08 09:59:31: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 1u
- 2024-02-20 11:06:01: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 07:04:59: 4u
- 2025-08-26 07:12:09: 4u
- 2025-07-22 07:46:41: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 07:04:59: 4u
- 2025-08-26 07:12:09: 4u
- 2025-07-22 07:46:41: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 3u

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
| [LV161] LV Tartinade Mangue curry 190g | 4 | Stock prédit: -0.1u (0j restants) → prédit 4u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | Stock prédit: 0.3u (2j restants) → prédit 4u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 4 | Stock prédit: -2.1u (-17j restants) → prédit 4u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 3 | Stock prédit: 1.1u (25j restants) → prédit 3u mais non commandé |


---

## False Negatives (8)

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
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | Stock: 0.5u (21j restants) - filtré pour autre raison |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | Stock: 0.5u (21j restants) - filtré pour autre raison |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | Stock: 0.5u (21j restants) - filtré pour autre raison |
| [LV133] LV Tartinade Ananas Coco 190g | 4 | Stock suffisant: 2.5u (101j restants > seuil 30j) |
| [LV132] LV Tartinade Houmous type 190g | 4 | En rupture (-39j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | Stock: 0.4u (12j restants) - filtré pour autre raison |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 2 | Stock: 0.6u (28j restants) - filtré pour autre raison |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | Stock: 0.4u (12j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-18T21:33:37.992Z*
