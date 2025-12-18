# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S40204
- **Date commande** : 2025-11-12 13:01:53
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 35
- **Tokens**: 27,817 input + 9,120 output = 36,937 total


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
| **MAE** | 0.92 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 57.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 53.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 14 et 22 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un volume très faible et une tendance à la baisse (passant de 2 unités en septembre/octobre à 1 unité fin octobre). L'intervalle depuis la dernière commande (14 jours) concorde avec le cycle le plus court observé. Étant donné la faible rotation du produit et la dernière commande positionnée à 1 unité, la probabilité est plus élevée de rester sur un réapprovisionnement minimal de 1 unité plutôt que de remonter à 2.

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 14 et 28 jours (environ bimensuel)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une alternance entre 1u et 2u avec un intervalle moyen de 20-25 jours. La dernière commande date d'il y a exactement 14 jours (28/10), ce qui suggère un réapprovisionnement de faible volume pour maintenir le stock rayon. Étant donné que la commande précédente était de 1u et que le cycle est en phase de transition, la quantité de 1u est la plus probable pour éviter le surstockage sur un produit bio de niche à rotation lente.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 3 et 6 semaines
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité (2 points de données). On observe un intervalle de 41 jours entre les deux dernières commandes. La commande du 11 novembre intervient seulement 14 jours après celle du 28 octobre, ce qui est très précoce par rapport au rythme habituel. Cependant, la tendance de volume est faible (1-2 unités). Étant donné la faible vélocité du produit et l'absence de saisonnalité N-1, le maintien de la quantité minimale observée récemment (1u) est le scénario le plus probable pour éviter le surstock.

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalles irréguliers longs (30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% vs N-1
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une diminution structurelle du volume : alors que la moyenne 2024 se situait autour de 4.2 unités, les deux commandes les plus récentes (septembre et octobre 2025) sont stables à 2 unités. L'intervalle entre les deux dernières commandes est de 22 jours, suggérant qu'un réapprovisionnement est dû pour mi-novembre. Bien que l'année précédente montre une commande de 5u fin octobre, l'absence de pic similaire en octobre 2025 confirme la baisse de régime. On privilégie la tendance récente (2u) pour minimiser le risque de surstock sur un produit de niche.

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les 25-35 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique récent (septembre et octobre 2025) montre une stabilisation parfaite à 2 unités avec un intervalle d'environ 22 à 30 jours. Bien qu'une commande de 4 unités ait été observée fin octobre l'année précédente (potentiel effet Halloween ou stock de sécurité), la tendance actuelle de consommation sur les 3 derniers mois privilégie un volume bas de 2 unités. L'écart entre la dernière commande (09/10) et la date de prédiction (11/11) correspond exactement au cycle de réapprovisionnement naturel observé de ~30 jours.

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-32 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 3u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière de 3 unités par mois sur la période récente (août et octobre). La commande de septembre (2u) est légèrement plus faible mais compensée par le rythme de 3 units. La commande de 6u en octobre N-1 semble être un outlier lié à un événement spécifique (Halloween/Fin de mois) non reproduit dans les tendances de 2025. Le cycle actuel favorise une répétition de la demande standard de 3 unités, d'autant plus que la date de prédiction tombe un mardi, jour exact de la commande d'août.

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5.67u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 4u (200.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 22 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Hausse légère (5u vers 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande régulière une fois par mois. L'intervalle depuis la dernière commande (09/10) est de 33 jours, ce qui correspond au cycle habituel constaté entre août et septembre (29 jours) et septembre et octobre (22 jours). La quantité s'est stabilisée à 6 unités sur les deux derniers mois. Étant donné la régularité du volume sur les cycles récents et l'absence de données N-1 pour contredire cette tendance, la cible de 6 unités est la plus probable.

</details>


<details>
<summary><strong>8. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite avec une unité commandée environ tous les 30 jours (intervalle de 29 jours entre août et septembre). La commande de septembre a eu lieu le mercredi 17. Le 11 novembre 2025 correspond à un mardi, ce qui s'inscrit parfaitement dans le cycle mensuel attendu après une période de silence en octobre (possible commande manquante ou stock suffisant). La demande est extrêmement stable à 1 unité par commande.

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
- **Pattern temporel**: Non-identifiable (Commande unique)
- **Saisonnalité**: none
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule donnée historique (3 unités commandées le mardi 19 août), et aucune donnée N-1 disponible, la base de référence la plus fiable est la dernière commande observée. L'absence de récurrence (intervalle de 12 semaines) suggère soit un produit à faible rotation, soit un réapprovisionnement ponctuel. En l'absence d'information sur une promotion ou une rupture, la quantité de 3 unités est maintenue car elle correspond au besoin ponctuel identifié pour ce jour de la semaine (mardi).

</details>


<details>
<summary><strong>10. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes pour établir un cycle
- **Saisonnalité**: none
- **Tendance**: Absence d'historique (Nouveau produit ou client)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale d'historique de commandes (N-1 et période récente), il est impossible d'établir une baseline statistique fiable. Pour un produit B2B de type boissons (Limonade 330ml), une recommandation de 1 unité (ou colis standard) est suggérée en guise de stock de sécurité initial ou de commande test, dans l'attente d'une observation du premier cycle de vente réel.

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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [RIT07] RITCHIE Orange - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-19 12:02:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: low)
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
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | Stock prédit: 0.9u (11j restants) → prédit 2u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: 0.8u (8j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: 1.8u (19j restants) → prédit 3u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Stock prédit: 1.4u (11j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: -0.1u (0j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.1u (0j restants) → prédit 1u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 1.1u (14j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: -0.6u (-12j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: -0.6u (-12j restants) → prédit 2u mais non commandé |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Stock prédit: -0.3u (-7j restants) → prédit 1u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: -0.2u (-5j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: -0.2u (-5j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.3u (27j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Stock prédit: -0.8u (-15j restants) → prédit 1u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 3 | Stock prédit: -3.1u (-27j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.6u (-18j restants) → prédit 2u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Stock prédit: -2.1u (-34j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 0 | Stock prédit: 0.4u (24j restants) → prédit 0u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.9u (-29j restants) → prédit 2u mais non commandé |
| [JF021] JF PICKLES 350 ML | 1 | Stock prédit: -3.0u (-48j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:35:26.492Z*
