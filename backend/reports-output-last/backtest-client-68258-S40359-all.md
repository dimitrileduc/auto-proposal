# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S40359
- **Date commande** : 2025-11-14 11:38:35
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 20,597 input + 61,140 output = 81,737 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 2.63 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 61.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 99.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -32.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 4 | 8 | 4.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 4 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | 10 | 6.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 5 | 1 | 4.0 | 400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 4u (50.0%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aperiodic - irregular intervals (21d, 3d, 12d, 49d) without clear weekly cycle
- **Saisonnalité**: none
- **Tendance**: decreasing from 4-6u to 1u in recent orders
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Thursday is off-cycle for this client (no historical Thursday orders). The 1u order on Wed 2025-11-12 is an urgent top-up pattern (similar to 19 Aug). After such low-volume urgent orders, the client returns to their standard 4u replenishment within 3-21 days. The most probable next regular order is therefore 4u, expected on the next observed ordering day (Friday or Tuesday).

</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalles irréguliers : 21j → 15j → 49j
- **Saisonnalité**: none
- **Tendance**: Strong decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**1. ANALYSE RYTHMIQUE**: Le produit [JOY05] montre un cycle de commandes très irrégulier sur 3 mois (4 points). Les intervalles s'allongent drastiquement : 21 jours (19/08→09/09), 15 jours (09/09→24/09), puis **49 jours** (24/09→12/11). Le jour habituel oscille entre mardi et mercredi (**0% de commandes le jeudi**). La date de prédiction (13/11) est clairement hors cycle. La dernière commande (1u) date d'hier (12/11), ce qui confirme l'absence de pattern hebdomadaire stable. **2. FILTRAGE OUTLIERS**: Aucun pic supérieur à 3× la moyenne détecté, mais la **commande de 1u du 12/11 est un point de rupture** : chute de 50% par rapport à la précédente (2u), après un intervalle exceptionnel de 49 jours. Ce n'est pas un outlier statistique ponctuel, mais un **signal de désengagement client potentiel** (test de produit, rotation ultra-lente, ou discontinuation en cours). **3. SYNTHÈSE & DÉCISION**: En B2B agroalimentaire, un allongement d'intervalle de 49j couplé à une réduction de volume à **1 unité** est fortement indicatif d'un produit en **fin de cycle de vie** chez ce client. Cependant, sans confirmation formelle d'arrêt, l'application des règles exclut la prédiction 0. La tendance est clairement décroissante (2→3→2→1) et la dernière valeur est le reflet le plus à jour du comportement. Pour minimiser le MAPE sur des données éparses, **privilégier la dernière valeur cohérente avec la tendance** est la stratégie optimale. La prochaine commande probable (post-13/11) surviendra un mardi/mercredi dans 3-5 semaines si le client ne discontinue pas, mais la quantité la plus probable sera **1u**, reflet de la demande résiduelle actuelle.

</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aperiodic
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client ne semble pas avoir de cycle hebdomadaire régulier : seules 3 commandes sur 2 mois, avec des intervalles de 3 jours puis 61 jours. Les jours varient (mar., ven., mer.). Le pic de 3 unités du 12 septembre est isolé entre deux commandes de 1 unité, ce qui suggère un outlier lié à un besoin ponctuel (promotion, événement) plutôt qu'une tendance. La valeur la plus fréquente et la plus récente est 1 unité. La date de prédiction (jeudi) est hors cycle sans jour habituel identifiable, mais la règle interdit la prédiction 0. La quantité la plus probable pour la prochaine commande est donc 1 unité, correspondant à la commande standard du client.

</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pas de fréquence stable détectable (ni hebdomadaire ni mensuelle). Commandes sporadiques avec intervalles décroissants mais variables
- **Saisonnalité**: none
- **Tendance**: upward
- **Outliers détectés**: 2025.11u, 4u

**🧠 Raisonnement LLM:**
Les 3 commandes montrent une évolution 2u → 2u → 4u. La dernière commande du 12 nov (4u) représente une augmentation de 100% et est très récente (hier). En agroalimentaire B2B, une telle hausse soudaine traduit généralement un nouveau niveau d'activité du client (nouveau point de vente, augmentation de sa clientèle) plutôt qu'un pic isolé, car les promotions sont généralement planifiées et récurrentes. L'absence totale de données N-1 élimine tout facteur saisonnier. Avec seulement 3 points de données et pas de pattern de jour fixe, la méthode la plus robuste est le 'last value carried forward' pondéré par la tendance. La valeur la plus fréquente historique est 2u (2 occurrences), mais ignorerait la montée récente. Une moyenne (2.67u) serait une sous-estimation si la hausse est structurelle. Le risque MAPE est moindre en suivant la tendance ascendante que de la nier. Le jeudi 13 nov étant hors cycle, la règle spéciale s'applique: on prédit la quantité de la prochaine commande probable, qui sera similaire au dernier niveau observé.

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 6u (60.0%)
- 📉 **Erreur Médiane**: 6u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irregular bi-weekly to monthly rhythm with last order on 2025-11-12
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -1u

**🧠 Raisonnement LLM:**
Données limitées (5 points) sans historique N-1. Pattern irrégulier mais valeur 4u apparaît 3 fois sur 5, incluant la dernière commande très récente (2025-11-12). Jeudi hors cycle → prédiction quantité de la PROCHAINE commande selon règles B2B. Outliers identifiés et pondérés : 2u (exception basse) et 6u (variation acceptable). Pas de saisonnalité détectable. Approche : privilégier la valeur la plus fréquente et récente pour maximiser la précision.

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: 2 unités apparaît 2 fois (mode) | Intervalle moyen : 14.5 jours | Pas de jour récurrent unique
- **Saisonnalité**: none
- **Tendance**: Stabilisation autour de 2u après variations 1u→5u
- **Outliers détectés**: -1u, 5u

**🧠 Raisonnement LLM:**
Données très limitées mais convergentes vers 2u comme valeur la plus probable

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern hebdomadaire stable détecté avec seulement 2 commandes sur 3 mois (écart: 12 jours)
- **Saisonnalité**: none
- **Tendance**: stable_inc
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Seulement 2 commandes en 3 mois (1u le 12/09 vendredi, 2u le 24/09 mercredi) révèlent un rythme sporadique sans jour fixe. L'intervalle de 12 jours et les jours variables (ven.→mer.) indiquent un client B2B très irrégulier ou test produit. **JOUR DE PRÉDICTION**: Le jeudi 13/11 est hors cycle habituel (ni mercredi ni vendredi). **FILTRAGE DATA**: Aucun outlier avec des volumes microscopiques (1-2u). **RÈGLE SPÉCIALE JOUR HORS CYCLE**: Comme le jeudi n'est jamais un jour de commande historique, je dois prédire la quantité de la PROCHAINE commande probable (et non 0). **DÉCISION**: Avec 2 points seulement, la dernière valeur (2u) reflète l'état le plus récent. La progression 1→2u est minime et non significative. En B2B agroalimentaire, un tel produit organique premium à micro-volumes suggère un client qui teste ou un approvisionnement ponctuel. La prochaine commande (quelle que soit son jour) sera très probablement de 1-2 unités. La valeur la plus récente (2u) est la meilleure estimation de la demande actuelle.

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 5u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 4u (400.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irregular (only 2 orders in 3 months, interval of 3 days between Sep 9-12)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
The prediction date (Thursday) is outside the client's observed ordering pattern (Tuesday/Friday). Per B2B guidelines for off-cycle days, we predict the quantity for the *next probable order* (Friday) rather than returning zero. The last Friday order of 5u is more representative than the isolated 1u Tuesday complement, making 5u the most probable quantity for the upcoming order cycle.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 6u
- 2025-09-12 12:57:02: 4u
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 2u
- 2025-09-09 12:58:36: 3u
- 2025-08-19 13:27:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-12 12:57:02: 3u
- 2025-09-09 12:58:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 4u
- 2025-10-17 10:21:30: 2u
- 2025-08-19 13:27:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 4u
- 2025-10-17 10:21:30: 6u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 10:21:30: 2u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 5u
- 2025-08-19 13:27:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:49:59: 2u
- 2025-09-12 12:57:02: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 5u
- 2025-09-09 12:58:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (5)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 8 | Stock prédit: 8.0u (24j restants) → prédit 8u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | Stock prédit: 6.0u (30j restants) → prédit 6u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 5 | Stock prédit: 6.0u (28j restants) → prédit 5u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 6 | Stock prédit: 4.0u (14j restants) → prédit 6u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 6 | Stock prédit: -1.8u (-4j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:14:48.289Z*
