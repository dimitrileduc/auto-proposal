# Rapport Backtest - Client ROB - THE GOURMETS' MARKET

## Contexte

- **Client** : ROB - THE GOURMETS' MARKET (ID: 60526)
- **Commande réelle** : S40074
- **Date commande** : 2025-11-03 12:12:50
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 18,531 input + 3,198 output = 21,729 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 21 produits prédits, 15 corrects |
| **Rappel** | 93.8% | 16 produits réels, 15 détectés |
| **F1-Score** | 81.1% | Score équilibré global |

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
| **MAE** | 1.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 27.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
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

## True Positives (15)

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH01] RISH kombucha BIO - original 330ml | 10 | 10 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 10 | 10 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 6 | 15 | 9.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH05] RISH kombucha BIO - rose 750ml | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 10 | 10 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 5 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LEA06] LEAMO maté 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM: 10u vs Médiane: 8u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Inconnu (donnée unique)
- **Saisonnalité**: none
- **Tendance**: Stable à 10u (basé sur l'unique point)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une unique commande de 10 unités enregistrée un lundi (2025-09-22). La date de prédiction étant un dimanche, soit un jour hors cycle habituel pour le B2B, j'applique la règle de report sur la prochaine commande probable. En l'absence de tendance contradictoire ou d'outliers identifiables, la valeur de 10 unités constitue la meilleure estimation de la demande de fond pour ce produit.

</details>


<details>
<summary><strong>2. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Donnée unique (commande isolée)
- **Saisonnalité**: none
- **Tendance**: Stable à 10u (base point unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec un seul point de données (10 unités le lundi 22 sept). En l'absence d'historique N-1 ou d'autres points récents, la dernière valeur observée est la meilleure estimation de la demande de fond. La date cible étant un dimanche (jour hors cycle), conformément aux guidelines, je prédis la quantité de la commande attendue pour le début de cycle suivant (probablement le lundi 03/11). La prédiction est fixée à 10 unités pour refléter la seule demande connue.

</details>


<details>
<summary><strong>3. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 6u vs Médiane: 12u (Réel: 15u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 12u
- ✅ **Réel commandé**: 15u
- 📉 **Erreur LLM**: 9u (60.0%)
- 📉 **Erreur Médiane**: 3u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée ou opportuniste (donnée unique)
- **Saisonnalité**: none
- **Tendance**: Stable à 6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande de 6 unités enregistrée un lundi (22/09). Selon les directives de gestion des jours hors cycle, bien que la prédiction soit demandée pour un dimanche, nous ne prédisons pas 0. Nous projetons la quantité de la prochaine itération probable sur la base de la dernière valeur connue. En l'absence de tendance contradictoire ou de saisonnalité N-1, la valeur de 6 unités reste la référence la plus probable pour ce client.

</details>


<details>
<summary><strong>4. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM: 6u vs Médiane: 8u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (donnée unique)
- **Saisonnalité**: none
- **Tendance**: Stable à 6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule donnée historique (6u le lundi 22 septembre), il est impossible d'établir un cycle précis (hebdomadaire ou mensuel). Cependant, en suivant les guidelines B2B, nous ne prédisons pas 0 pour un dimanche mais la prochaine commande probable. Comme le seul point de donnée est de 6 unités, cette valeur est retenue comme la référence la plus probable pour la reprise de l'activité en début de semaine suivant le dimanche 2 novembre.

</details>


<details>
<summary><strong>5. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée/sporadique (insuffisance de points)
- **Saisonnalité**: none
- **Tendance**: Stable à 10u (basé sur l'unique point)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée de 10 unités le lundi 22 septembre. Bien que la date de prédiction soit un dimanche (jour hors cycle), conformément aux règles de gestion des jours hors cycle, je prédis le volume de la prochaine commande probable. Sans autres données indiquant une baisse ou une hausse, la valeur de référence la plus fiable est la dernière quantité observée (10u). La confiance est faible en raison de l'absence de répétabilité statistique.

</details>


<details>
<summary><strong>6. [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (1 seule donnée disponible)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique extrêmement limité avec une unique commande de 1 unité enregistrée le lundi 22 septembre 2025. Bien que la date de prédiction soit un dimanche (jour inhabituel pour du B2B), les consignes stipulent de ne pas prédire 0 et de se projeter sur la prochaine commande probable. En l'absence de tendance ou de cycle récurrent établi, la dernière et unique valeur observée (1u) constitue la meilleure estimation de la demande de fond pour ce client.

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (données insuffisantes)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée (2 unités le lundi 11 août 2025). Bien que la date de prédiction soit un dimanche (jour hors cycle), les règles de gestion imposent de prédire la prochaine commande probable plutôt que 0. En l'absence de tendance contradictoire ou de saisonnalité connue pour ce produit spécifique dans le jeu de données, la dernière valeur observée (2u) est conservée comme la référence la plus probable pour la récurrence de ce client.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [RISH01] RISH kombucha BIO - original 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>2. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>3. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 15u

</details>


<details>
<summary><strong>4. [RISH05] RISH kombucha BIO - rose 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>5. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>6. [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 10:26:33: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (6)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 5 | Stock prédit: -1.4u (-12j restants) → prédit 5u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 3 | Stock prédit: 0.9u (18j restants) → prédit 3u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 2 | Stock prédit: -1.3u (-15j restants) → prédit 2u mais non commandé |
| [LEA05] LEAMO organic lemon lemonade 330 ml | 2 | Stock prédit: -0.0u (0j restants) → prédit 2u mais non commandé |
| [LEA07] LEAMO orangeade bio 330ml | 3 | Stock prédit: 1.6u (25j restants) → prédit 3u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 4 | Stock prédit: -1.2u (-19j restants) → prédit 4u mais non commandé |


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
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock suffisant: 1.3u (67j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:16:47.774Z*
