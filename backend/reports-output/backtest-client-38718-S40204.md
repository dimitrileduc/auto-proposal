# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S40204
- **Date commande** : 2025-11-12 13:01:53
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 35
- **Tokens**: 41,965 input + 60,095 output = 102,060 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 32.5% | 40 produits prédits, 13 corrects |
| **Rappel** | 81.3% | 16 produits réels, 13 détectés |
| **F1-Score** | 46.4% | Score équilibré global |

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
| **Bias** | 33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
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
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle régulier d'environ 20-21 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse de volume sur la dernière commande (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande très régulier avec une moyenne de 20,5 jours entre chaque commande. La dernière commande ayant eu lieu le 28 octobre, la prochaine est statistiquement prévue autour du 17 ou 18 novembre, ce qui se situe dans la fenêtre des 30 prochains jours. En termes de volume, bien que la dernière commande ait été de 1 unité, les commandes précédentes étaient de 2 unités. Étant donné l'approche de la fin d'année, une quantité de 2 unités est cohérente avec la moyenne historique (1,67) pour couvrir les besoins du prochain cycle.

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
- **Pattern temporel**: Cycle régulier avec une accélération marquée des intervalles : 29 jours, puis 22 jours, puis 19 jours.
- **Saisonnalité**: none
- **Tendance**: Volume stable (moyenne 1.5u) avec une fréquence de commande qui semble s'intensifier.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des intervalles montre un cycle moyen de 23 jours qui tend à se raccourcir (dernier intervalle de 19 jours). La dernière commande datant du 2025-10-28, la prochaine est attendue entre le 14 et le 20 novembre 2025, soit dans la fenêtre des 30 jours. Bien que le volume alterne entre 1u et 2u, le volume de 1u est retenu pour la prochaine commande car il correspond à la dernière observation et à une gestion de stock prudente pour un produit bio à faible rotation. Une seule commande est attendue durant cette période malgré le raccourcissement du cycle.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle identifié de 41 jours entre les deux dernières commandes
- **Saisonnalité**: none
- **Tendance**: Légère baisse (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité aberrante détectée sur le faible historique disponible. Étape 2: Aucune donnée N-1 n'est disponible pour évaluer une saisonnalité spécifique, impact neutre. Étape 3: On observe un seul intervalle de 41 jours entre les deux commandes (17/09 et 28/10). La quantité est passée de 2 à 1 unité. Étape 4: En projetant le cycle de 41 jours après la dernière commande du 28 octobre (28 oct + 41j = 08 décembre), la prochaine commande est prévue dans la fenêtre des 30 prochains jours (avant le 11 décembre). La quantité recommandée est de 1 unité, correspondant au volume de la commande la plus récente.

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec une moyenne historique de 35-40 jours, accélération à 22 jours sur le dernier cycle.
- **Saisonnalité**: weak
- **Tendance**: Baisse de volume par rapport à N-1 (5u vs 2u) mais stabilisation récente.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, bien que les volumes de 2025 soient inférieurs à 2024. Étape 2: Le produit (mayonnaise à la truffe) est un produit à caractère festif. La période actuelle (mi-novembre) précède les fêtes de fin d'année, ce qui suggère une reprise de commande imminente pour le stock de décembre. Étape 3: Le volume récent est de 2u, mais la fréquence semble s'être resserrée (22 jours entre les dernières commandes). Étape 4: La dernière commande date du 09/10/2025, soit il y a 33 jours. En considérant le cycle médian et la préparation de la période festive, une commande est attendue immédiatement. La quantité recommandée est de 3 unités (ajustement léger de la base de 2u pour anticiper la demande saisonnière de décembre).

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
- **Pattern temporel**: Irrégulier à tendance mensuelle (cycle récent de 22 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation mais avec une activité récente stable. 1/ Aucun outlier n'est détecté, les volumes oscillant entre 2 et 4 unités. 2/ La saisonnalité est jugée faible malgré un historique suggérant des besoins en fin d'année. 3/ La tendance récente (septembre et octobre 2025) montre une stabilisation à 2 unités par commande. 4/ La dernière commande remonte au 9 octobre, soit il y a 33 jours. Étant donné que l'intervalle le plus court observé récemment est de 22 jours, le client est actuellement dans sa fenêtre de réapprovisionnement probabiliste. Une commande de 2 unités est donc prévue dans les 30 prochains jours pour maintenir le stock de fond.

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 22 à 30 jours
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 3u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très stable oscillant entre 22 et 29 jours sur les derniers mois. La dernière commande enregistrée date du 9 octobre 2025, soit il y a 33 jours. Le client est donc en léger retard par rapport à son rythme habituel, ce qui rend une commande extrêmement probable dans les prochains jours (fenêtre des 30 jours couverte). Après avoir écarté l'outlier de 6u de l'année précédente (non répété cette année), la demande de fond se stabilise à 3 unités. Conformément à la règle, seule la prochaine commande est prédite, sans cumul.

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
- **Pattern temporel**: Mensuel, intervalle moyen de 25 à 29 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 6 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique récent montre une consommation très régulière de 6 unités par commande, avec un cycle moyen de 25 jours. La dernière commande datant du 9 octobre 2025 (il y a 33 jours), le client a légèrement dépassé son cycle habituel. Une commande de réapprovisionnement est donc attendue de manière imminente dans les prochains jours. On maintient la quantité standard observée de 6 unités sans appliquer de cumul, conformément à la règle de la prochaine commande unique.

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
- **Pattern temporel**: Cycle mensuel identifié sur les données disponibles (~29-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande avec une irrégularité récente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes de 1 unité avec un intervalle de 29 jours (août et septembre). Bien qu'aucune commande n'ait été enregistrée en octobre (soit un retard de cycle d'environ 25 jours par rapport à la fréquence théorique), la fenêtre de prédiction de 30 jours (jusqu'au 11 décembre) couvre largement la période de réapprovisionnement attendue pour ce type de produit à faible rotation. Étant donné la stabilité du volume (1u), on prévoit une commande de réassort de 1 unité pour retrouver le stock de fond.

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
- **Pattern temporel**: Signal faible, commande unique enregistrée il y a 84 jours (potentiel cycle trimestriel)
- **Saisonnalité**: none
- **Tendance**: Stable sur point de donnée unique (3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur une donnée unique pointée le 19/08/2025 (3 unités). Environ 84 jours se sont écoulés depuis cette commande, ce qui suggère un cycle de rotation lent, potentiellement trimestriel pour ce type de produit (confiture bio). En suivant cette hypothèse, un réapprovisionnement de 3 unités est attendu autour de la mi-novembre, soit dans la fenêtre des 30 prochains jours. Le niveau de confiance est faible en raison de l'absence d'historique N-1 et de la rareté des points de comparaison.

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
- **Pattern temporel**: Aucun historique de commande identifié
- **Saisonnalité**: none
- **Tendance**: Inactif / Pas d'historique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 & 3: L'absence totale d'historique de commandes (aucune donnée pour l'année N-1 et aucune commande sur les 3 derniers mois) empêche d'identifier une demande de fond ou une tendance récente. Étape 2: L'impact saisonnier ne peut être évalué faute de données comparatives. Étape 4: En l'absence de cycle de commande établi ou d'activité passée sur ce produit pour ce client, la probabilité d'une commande spontanée dans les 30 prochains jours est nulle selon les données disponibles. Par conséquent, aucune quantité n'est recommandée.

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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: high)
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

## False Positives (27)

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
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Stock prédit: 1.4u (11j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: -0.1u (0j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.2u (3j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 0.1u (0j restants) → prédit 2u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 1.1u (14j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: -0.6u (-12j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: -0.6u (-12j restants) → prédit 2u mais non commandé |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Stock prédit: -0.3u (-7j restants) → prédit 1u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 2 | Stock prédit: -0.3u (-4j restants) → prédit 2u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
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
| [MANA02] MANA natural energy drink - tropical passion 250ml | 1 | Stock suffisant: 0.8u (63j restants > seuil 30j) |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock suffisant: 0.7u (69j restants > seuil 30j) |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -1.5u (-58j) mais client a commandé 1u |


---

*Rapport généré automatiquement le 2025-12-18T19:57:06.805Z*
