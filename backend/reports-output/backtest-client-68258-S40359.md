# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S40359
- **Date commande** : 2025-11-14 11:38:35
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 17,112 input + 29,619 output = 46,731 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 72.7% | 11 produits réels, 8 détectés |
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
| **MAE** | 2.13 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 61.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JOY05] Organic Cherry Jam 370g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 4 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | 10 | 6.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 4u (50.0%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier, intervalles variant de 3 à 49 jours (moyenne glissante de ~21 jours)
- **Saisonnalité**: none
- **Tendance**: Reprise de l'activité après une rupture de flux de 49 jours
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Étape 1 & 2 : Aucune donnée N-1 disponible. Les volumes sont faibles (1u à 6u), l'unité commandée le 12/11 semble être un ajustement ponctuel. Étape 3 : On observe une longue période d'inactivité de 49 jours entre septembre et novembre, suivie d'une commande d'une seule unité le 12/11. Étape 4 : Malgré la commande d'hier, l'intervalle moyen de 21 jours suggère qu'une nouvelle commande de réapprovisionnement réel aura lieu avant le 13 décembre (environ vers le 3 décembre). En se basant sur la médiane des commandes de la période active de septembre (4u), la prochaine commande devrait se stabiliser à ce niveau pour reconstituer un stock de fond.

</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne de 28 jours et une médiane de 21 jours, principalement le mardi et mercredi.
- **Saisonnalité**: none
- **Tendance**: Légère baisse de volume sur la dernière commande (1u) par rapport à la moyenne historique de 2u.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande moyen de 28 jours. La dernière commande ayant eu lieu le 12 novembre 2025, la prochaine est prévue entre le 3 et le 10 décembre 2025, ce qui se situe à l'intérieur de la fenêtre de prédiction de 30 jours. Bien que le dernier volume fût de 1 unité, la moyenne des commandes précédentes et la nature du produit suggèrent un réapprovisionnement standard de 2 unités pour la prochaine occurrence.

</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 0u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycles longs (60 jours) avec rares micro-réapprovisionnements à 3 jours d'intervalle.
- **Saisonnalité**: weak
- **Tendance**: Stable à très faible volume (1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une rotation très faible pour cette confiture de figues. Une commande de 1 unité a été passée hier (le 12/11). En observant l'écart de 61 jours entre le cluster de septembre et la commande de novembre, il est fort probable que le besoin du client soit déjà couvert pour le mois à venir. Bien qu'un pic de 3 unités ait eu lieu en septembre après un premier achat, la tendance générale sur 3 mois indique que le client commande de manière sporadique. Aucune nouvelle commande n'est donc anticipée dans la fenêtre des 30 prochains jours.

</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une accélération marquée passant de 60 jours à 26 jours sur la période récente
- **Saisonnalité**: none
- **Tendance**: Hausse du volume (4u vs 2u) et accélération du rythme de commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre seulement trois points de données, mais avec une tendance claire à l'accélération. La première commande était espacée de deux mois, tandis que la plus récente (hier, le 12 novembre) est intervenue seulement 26 jours après la précédente. En projetant ce nouveau cycle d'environ 26 jours, la prochaine commande est attendue autour du 8 décembre 2025, soit à l'intérieur de la fenêtre des 30 prochains jours. Bien que le volume historique était de 2u, la commande d'hier était de 4u, suggérant soit une hausse de la demande de fond, soit un réapprovisionnement pour une période plus longue ; je retiens 4u pour la prochaine itération par précaution face à la croissance observée.

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
- **Pattern temporel**: Cycle régulier d'environ 23 à 26 jours (hors pics rapprochés de septembre)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Aucune anomalie majeure n'est détectée, les volumes (2-6u) sont cohérents pour un produit B2B de niche. ÉTAPE 2 : Manque de données N-1 pour confirmer une saisonnalité, le calcul repose sur la demande de fond récente. ÉTAPE 3 : La tendance est stable avec une moyenne de 4 unités par commande. Le cycle s'est stabilisé à environ 25 jours lors des deux derniers intervalles. ÉTAPE 4 : La dernière commande ayant eu lieu le 12 novembre, et le cycle moyen étant de ~25 jours, la prochaine commande est attendue aux alentours du 7 décembre. Cette date tombant dans la fenêtre des 30 prochains jours, une commande de 4 unités est prévue.

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 16 jours et un intervalle maximum de 23 jours.
- **Saisonnalité**: none
- **Tendance**: Stable à environ 3 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation régulière mais à faible volume (moyenne de 2,8 unités). La dernière commande remonte au 17 octobre 2025, soit il y a 27 jours. Étant donné que l'intervalle historique maximal entre deux commandes est de 23 jours (août-septembre), le client est actuellement en retard de réapprovisionnement ('overdue'). Une commande est donc extrêmement probable dans les 30 prochains jours. En l'absence de tendance à la hausse ou à la baisse marquée et sans pic saisonnier identifiable, la prédiction se base sur la moyenne historique arrondie à 3 unités pour la prochaine commande unique.

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 0u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle initial de 12 jours observé en septembre, suivi d'une rupture complète
- **Saisonnalité**: none
- **Tendance**: Inactivité prolongée (absence de commande depuis 50 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre seulement deux commandes rapprochées en septembre (intervalle de 12 jours). Cependant, depuis la dernière commande du 24 septembre 2025, le client n'a plus sollicité ce produit. Ce délai de 50 jours sans activité excède largement les quatre derniers cycles théoriques de 12 jours. En l'absence de données sur l'année précédente (N-1) pour identifier un éventuel rebond saisonnier en fin d'année et compte tenu de cette inactivité prolongée, il est fort probable que le produit ne soit plus référencé ou que le stock actuel soit suffisant. Aucune commande n'est donc prévue pour les 30 prochains jours.

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 0u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Inactivité prolongée (62 jours) après deux commandes initiales rapprochées en septembre.
- **Saisonnalité**: none
- **Tendance**: Baisse significative / Stock mort
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre que le client n'a commandé ce produit que deux fois, de manière très rapprochée (3 jours d'intervalle), au début du mois de septembre 2025 (1u puis 5u). Depuis la dernière commande du 12 septembre, soit plus de 60 jours, aucune activité n'a été enregistrée. Dans un contexte de Supply Chain B2B, un tel silence suggère soit un échec du produit après test, soit un stock toujours suffisant pour une rotation très faible. En l'absence de données N-1 confirmant un pic saisonnier en novembre ou d'une fréquence de commande établie, il est impossible de prévoir une commande dans la fenêtre des 30 prochains jours.

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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 0u (confidence: low)
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

**✅ Quantité LLM**: 4u (confidence: low)
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

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:49:59: 2u
- 2025-09-12 12:57:02: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 5u
- 2025-09-09 12:58:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 7 | Stock prédit: 8.0u (24j restants) → prédit 7u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | Stock prédit: 6.0u (30j restants) → prédit 6u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | Stock prédit: 6.0u (28j restants) → prédit 4u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 6 | Stock prédit: 4.0u (14j restants) → prédit 6u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 8 | Stock prédit: -1.8u (-4j restants) → prédit 8u mais non commandé |


---

## False Negatives (3)

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: 0.6u (9j) mais client a commandé 1u |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.2u (-4j) mais client a commandé 1u |
| [JOY07] JOY! Organic Fig Jam 370g | 2 | LLM avait prédit 0 (pas de besoin) avec stock: 1.0u (12j) mais client a commandé 2u |


---

*Rapport généré automatiquement le 2025-12-18T19:55:55.556Z*
