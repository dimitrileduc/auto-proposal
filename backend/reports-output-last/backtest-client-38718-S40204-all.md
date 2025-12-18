# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S40204
- **Date commande** : 2025-11-12 13:01:53
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 35
- **Tokens**: 50,895 input + 93,298 output = 144,193 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 29.5% | 44 produits prédits, 13 corrects |
| **Rappel** | 65.0% | 20 produits réels, 13 détectés |
| **F1-Score** | 40.6% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 61.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 61.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 23.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

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

## True Positives (13)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 6 | 2 | 4.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune
- **Saisonnalité**: strong
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique limité (3 commandes) avec intervalles irréguliers (19-22 jours) sans pattern hebdomadaire. Valeurs stables 2u/2u/1u. Le mardi est un jour ouvrable plausible (dernière commande le 28/10). Comme les données sont éparses, privilégier la dernière valeur cohérente avec la tendance stable permet de minimiser le MAPE.

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mardi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le mardi est le jour habituel (2/4 commandes). Les commandes mardi historiques sont systématiquement de 1u (19/08 et 28/10). La dernière commande (28/10) était de 1u. Pour minimiser le MAPE sur un produit à faible rotation B2B, il faut privilégier la précision du pattern jour spécifique plutôt qu'une moyenne générique. Un client qui commande 1u premium bio revient rarement avant 3 semaines ; la probabilité d'une commande le 11/11 est faible, mais si elle se produit ce mardi, elle sera de 1u suivant le pattern établi. Surgonfler à 2u augmenterait artificiellement le MAPE.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune périodicité claire définie (données insuffisantes)
- **Saisonnalité**: none
- **Tendance**: downward
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Les 2 commandes récentes montrent un intervalle moyen de 41 jours avec diminution de volume (2u → 1u). Le jour de prédiction (11 nov, mardi) est un jour ouvré mais apparaît 14 jours seulement après la dernière commande, soit bien en-deçà du cycle observé. Comme aucun pattern hebdomadaire stable n'existe et qu'il est interdit de prédire 0 pour un jour ouvré sauf arrêt produit avéré, la règle des 'jours hors cycle' s'applique partiellement : je dois prédire la quantité de la prochaine commande potentielle plutôt que 0. La dernière valeur observée (1u) constitue le seul comportement récent fiable pour un jour ouvré comparable (mardi 28 oct). La faible quantité reflète probablement le comportement d'achat 'petit volume' caractéristique des produits premium/bio en test ou rotation lente.

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle hebdomadaire ou mensuel clair identifié. Les commandes sont très éparses (intervalles variables: 22j, 34j, 37j, 71j, 91j) sans jour récurrent dominant.
- **Saisonnalité**: none
- **Tendance**: Baisse marquée récente : rupture de tendance -55% vs historique N-1 (2u récent vs 4,2u période N-1).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Détection d'une rupture de tendance majeure : les volumes sont passés de 3-5u (N-1) à 2u de manière stable sur les 2 dernières commandes (sept. et oct. 2025). L'absence de cycle régulier et la date de prédiction (mardi, non récurrent) invalident les modèles saisonniers. En B2B agroalimentaire, une telle baisse récente et stable reflète un nouveau niveau de commande probable (ajustement stock, moindre rotation). La prochaine commande, quelle que soit la date, suivra cette nouvelle tendance.

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irregular non-weekly pattern - commandes spaced 34, 128, 71, 322 then 22 days apart. No reliable periodicity.
- **Saisonnalité**: weak
- **Tendance**: stable_low_volume
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Commande hors cycle - prédire prochaine commande probable. Tendance récente stable à 2u (2 dernières commandes). Mode historique = 2u (4/6 commandes). Outlier 4u (N-1) exclu car ancien et non répété.

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle hebdomadaire détecté (7j). Intervalles irréguliers entre commandes : 14j, 108j, 293j, 29j, 22j. Pattern dominant : commandes éparses toutes les 3-4 semaines (moyenne 25,5j sur la période récente), sans jour fixe.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : Les 6 commandes historiques ne montrent pas de cycle hebdomadaire régulier. Les intervalles varient considérablement (14j à 293j). Sur les 3 derniers mois, l'intervalle moyen est de 25,5 jours (commandes du 19/08, 17/09, 09/10), suggérant une cadence d'environ 3-4 semaines sans corrélation jour de semaine fixe. Le mardi 11/11 est donc potentiellement le jour de la prochaine commande (33j après la dernière). FILTRAGE DES OUTLIERS : Les volumes (6u,4u,3u,3u,2u,3u) ne présentent pas de pic 2-3× supérieur à la moyenne. La valeur 6u du 31/10/24 est 1,7× la moyenne historique mais datée ; elle n'influence pas la tendance récente stable à 2-3u. Aucun outlier à exclure. SYNTHÈSE & DÉCISION : Dataset très limité mais tendance récente claire. Les 3 dernières commandes sont stables : 3u (19/08), 2u (17/09), 3u (09/10). La moyenne récente est 2,67u. Les données N-1 (4-6u) sont trop anciennes et non répétitives pour pondérer fortement. En agroalimentaire B2B avec commandes éparses, privilégier la proximité temporelle. Le mardi n'est pas hors cycle (au moins 1 commande historique un mardi), donc pas d'application de la règle spéciale. Pour maximiser la précision et minimiser le MAPE, la valeur entière la plus probable correspondant à la tendance récente est 3u.

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: high)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 4u (200.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern mensuel irrégulier (~22-33 jours) plutôt que hebdomadaire. Jours de commande variables (mardi, mercredi, jeudi).
- **Saisonnalité**: none
- **Tendance**: stable avec légère hausse (5→6→6)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pas de données N-1. 3 commandes récentes stables à 5-6u, intervalles 22-29j. Pattern mensuel flexible, pas hebdomadaire. 2025-11-11 (mardi) n'est pas hors cycle (commande mardi historique le 19/08). Tendance stable, dernière valeur 6u = mode. Prédiction = 6 unités.

</details>


<details>
<summary><strong>8. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune régularité hebdomadaire détectée. Les commandes sont mensuelles irrégulières (intervalle de 29 jours entre août et septembre)
- **Saisonnalité**: none
- **Tendance**: stable à 1 unité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données extrêmement limitées (2 commandes/3 mois). Pattern mensuel irrégulier avec volume ultra-stable à 1u. Absence de données N-1 et saisonnalité. Le 11 nov étant jour ouvré, compatible avec un éventuel cycle. La valeur la plus probable minimisant le MAPE est 1 unité.

</details>


<details>
<summary><strong>9. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Unable to determine with single data point
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse rythmique impossible avec un seul point de donnée. L'unique commande de 3u remonte au 19 août 2025 (mardi), soit 84 jours avant la date de prédiction (11 novembre, également un mardi). Cette très longue période sans commande visible suggère un client très épisodique ou à très faible rotation. Malgré la correspondance des jours (mardi), l'intervalle exclut un cycle hebdomadaire ou mensuel régulier. En l'absence de données N-1 et avec une seule observation, toute inférence de tendance ou saisonnalité serait pure spéculation. La règle 'hors cycle' interdit la prédiction 0. Pour les données extrêmement limitées (<3 points), la méthode la plus précise consiste à privilégier la dernière valeur connue, d'autant qu'aucun outlier ou rupture de tendance ne peut être démontré. La faible quantité (3u) est cohérente avec un produit de niche bio en B2B. La prédiction la plus probable est donc une reproduction de la dernière commande.

</details>


<details>
<summary><strong>10. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune fréquence détectable (absence totale d'historique)
- **Saisonnalité**: none
- **Tendance**: stable (pas d'activité)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Absence totale d'historique de commandes (ni N-1 ni période récente). Le produit NOD03 n'a aucun pattern de commande établi. Selon les guidelines, prédire 0 est autorisé quand le client a arrêté le produit, ce qui correspond à ce cas d'absence totale d'historique. Toute autre valeur serait une estimation non fondée et augmenterait artificiellement le MAPE.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 15:03:31: 1u
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 15:03:31: 1u
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 15:03:31: 1u
- 2025-09-17 11:26:26: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:43:32: 5u
- 2024-08-21 13:55:22: 4u
- 2024-07-15 07:59:25: 5u
- 2024-04-15 06:24:25: 3u
- 2024-03-12 14:06:41: 4u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:43:32: 4u
- 2024-08-21 13:55:22: 2u
- 2024-04-15 06:24:25: 3u
- 2024-03-12 14:06:41: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 11:32:03: 3u
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:43:32: 6u
- 2024-07-15 07:59:25: 4u
- 2024-07-01 07:05:34: 3u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 11:32:03: 6u
- 2025-09-17 11:26:26: 6u
- 2025-08-19 12:02:03: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [RIT07] RITCHIE Orange - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-19 12:02:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [JOY07] JOY! Organic Fig Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 12:02:03: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (31)

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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Stock prédit: 1.1u (14j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: 0.1u (0j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: 0.9u (11j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: 0.8u (8j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: 1.8u (19j restants) → prédit 3u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Stock prédit: 1.4u (11j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: -0.1u (0j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.2u (3j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 0.1u (0j restants) → prédit 2u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 1.1u (14j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: -0.6u (-12j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock prédit: -0.6u (-12j restants) → prédit 1u mais non commandé |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Stock prédit: -0.3u (-7j restants) → prédit 1u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 2 | Stock prédit: -0.3u (-4j restants) → prédit 2u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 0 | Stock prédit: 0.2u (8j restants) → prédit 0u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: -0.2u (-5j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: -0.2u (-5j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.3u (27j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: -0.8u (-15j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 3 | Stock prédit: -3.1u (-27j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.6u (-18j restants) → prédit 2u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Stock prédit: -2.1u (-34j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 0 | Stock prédit: 0.4u (24j restants) → prédit 0u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 0 | Stock prédit: -0.9u (-29j restants) → prédit 0u mais non commandé |
| [JF021] JF PICKLES 350 ML | 5 | Stock prédit: -3.0u (-48j restants) → prédit 5u mais non commandé |


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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MANA02] MANA natural energy drink - tropical passion 250ml | 1 | Stock suffisant: 0.8u (63j restants > seuil 30j) |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock suffisant: 0.7u (69j restants > seuil 30j) |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T08:16:47.157Z*
