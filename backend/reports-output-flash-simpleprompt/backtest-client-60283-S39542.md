# Rapport Backtest - Client DELITRAITEUR

## Contexte

- **Client** : DELITRAITEUR (ID: 60283)
- **Commande réelle** : S39542
- **Date commande** : 2025-10-03 13:14:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 5,618 input + 1,968 output = 7,586 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 70.0% | 10 produits prédits, 7 corrects |
| **Rappel** | 87.5% | 8 produits réels, 7 détectés |
| **F1-Score** | 77.8% | Score équilibré global |

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
| **MAE** | 29.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 81.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 94.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -54.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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

## True Positives (7)

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 3 | 60 | 57.0 | 95.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 15 | 25 | 10.0 | 40.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 21 | 7 | 14.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 10 | 40 | 30.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 10 | 60 | 50.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 18 | 45 | 27.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 38 | 18 | 20.0 | 111.1% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 3u vs Médiane: 19u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 19u
- 📊 **Médiane**: 19u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 57u (95.0%)
- 📉 **Erreur Médiane**: 41u (68.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-30 jours) le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à environ 19u
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Le client suit un cycle mensuel très régulier de ~20 unités chaque premier lundi du mois (04/08, 01/09, 29/09). La date de prédiction (02/10) se situe seulement 3 jours après la commande mensuelle habituelle du 29/09 (17u). Il n'y a aucune raison logistique pour une commande complète de 20u si tôt. Cependant, la commande du 29/09 était légèrement inférieure à la moyenne (17u vs 20u). La quantité recommandée de 3u correspond à un réajustement marginal ou à une demande spécifique hors-cycle, évitant un surstock inutile alors que le stock plein vient d'être livré.

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 21u vs Médiane: 25u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 21u (confidence: low)
- 📊 **Baseline N-1**: 17.5u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 14u (200.0%)
- 📉 **Erreur Médiane**: 18u (257.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier entre 15 et 45 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (25u vers 10u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est très irrégulier (46 jours entre juillet et août, 13 jours entre août et septembre). La dernière commande (10u) date d'il y a 31 jours, ce qui suggère qu'un réapprovisionnement est nécessaire. Bien que la tendance soit à la baisse (25u à 10u), l'intervalle d'un mois sans commande couplé à la nature de la référence (tartinade B2B) justifie une quantité de 21u (moyenne pondérée avec un léger ajustement pour compenser le délai de 30 jours depuis le dernier achat).

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 30u (75.0%)
- 📉 **Erreur Médiane**: 30u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-mensuel irrégulier (tous les 15 à 30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - de 20u à 10u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une diminution des volumes unitaires, passant de 20 unités en juillet/août à 10 unités lors des deux dernières commandes de fin août et début septembre. L'intervalle moyen de réapprovisionnement se situe autour de 15 à 20 jours. Puisque la dernière commande remonte au 1er septembre (soit 31 jours avant la date de prédiction), un besoin de réapprovisionnement est certain. Cependant, la tendance stabilisée à 10 unités reflète probablement une consommation plus faible en sortie d'été pour ce type de limonade bio. Je préconise donc le maintien de la quantité la plus récente (10u).

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: high)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 50u (83.3%)
- 📉 **Erreur Médiane**: 50u (83.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 30j environ (mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable à 10u
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre une régularité mensuelle nette (~30 jours) avec une stabilisation à 10 unités lors des deux derniers mois. La commande de juillet (20u) semble être un stock de lancement ou un pic estival isolé qui s'est lissé depuis. La date de prédiction (02/10) correspond parfaitement à l'intervalle d'un mois depuis la dernière commande du 01/09. Malgré le changement de jour (jeudi vs lundi), le volume de consommation de fond reste ancré à 10 unités.

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 18u vs Médiane: 18u (Réel: 45u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: low)
- 📊 **Baseline N-1**: 18u
- 📊 **Médiane**: 18u
- ✅ **Réel commandé**: 45u
- 📉 **Erreur LLM**: 27u (60.0%)
- 📉 **Erreur Médiane**: 27u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, environ tous les 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 18u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite sur le volume (18 unités), bien que la fréquence de commande soit faible et irrégulière (60 jours d'intervalle). En l'absence de données de saisonnalité N-1 et face à une tendance plate, la répétition du dernier volume observé est la prédiction la plus probable.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 09:22:29: 17u
- 2025-09-01 06:22:40: 20u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 25u
- 2025-07-04 11:09:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 21u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 10u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-04 09:36:12: 10u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: high)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 18u
- 2025-07-04 11:09:53: 18u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: low)
**📊 Quantité Réelle**: 45u

</details>




---

## False Positives (3)

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 126 | Stock prédit: -38.2u (-13j restants) → prédit 126u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 21 | Stock prédit: -18.3u (-27j restants) → prédit 21u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 53 | Stock prédit: -5.4u (-4j restants) → prédit 53u mais non commandé |


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
| [LV160] LV Tartinade Aubergine 190g | 50 | Stock suffisant: 32.9u (36j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:36:03.587Z*
