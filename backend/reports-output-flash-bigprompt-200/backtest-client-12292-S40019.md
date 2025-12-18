# Rapport Backtest - Client Green Peas

## Contexte

- **Client** : Green Peas (ID: 12292)
- **Commande réelle** : S40019
- **Date commande** : 2025-10-30 09:12:37
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 21,957 input + 4,119 output = 26,076 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.0% | 20 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 71.0% | Score équilibré global |

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
| **MAE** | 0.82 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 39.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 34.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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

## True Positives (11)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0052] MF Pois chiches  500g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite avec une commande d'une unité environ toutes les 4-5 semaines. Les deux dernières commandes mensuelles ont eu lieu un mercredi (03/09 et 06/08), ce qui correspond exactement au jour de la prédiction (2025-10-29). Bien que la commande d'octobre ait été avancée au jeudi 09/10 (probablement un décalage opérationnel), le volume reste constant à 1 unité. La prédiction de 1 unité est la plus probable pour maintenir ce stock de fond.

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j) irrégulier
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u en 2024 -> 1u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une réduction du volume par commande, passant de 2u de manière constante en début 2024 à 1u sur les deux dernières commandes de septembre et octobre 2025. L'intervalle de temps entre les commandes récentes (36 jours entre sept et oct) suggère que la prochaine commande devrait intervenir aux alentours de début novembre. Cependant, suivant les consignes de prédire la prochaine quantité probable sans tenir compte du décalage calendaire immédiat, la valeur de 1u est retenue car elle représente la tendance actuelle stabilisée du produit.

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation du produit à une unité par commande sur les deux derniers mois (septembre et octobre 2025). Bien que les volumes de 2024 aient pu atteindre 2 à 4 unités (pics isolés), la tendance récente est strictement de 1u. L'intervalle entre les deux dernières commandes était de 36 jours ; la date du 29 octobre se situe 20 jours après la dernière commande du 9 octobre, s'inscrivant dans la fenêtre de réapprovisionnement mensuel pour ce client B2B. En suivant la règle de précision MAPE, la valeur la plus probable est le maintien de la stabilité récente.

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (~28-35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à la hausse (1u vers 2u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel clair (06/08, 03/09, 09/10). Le volume de base est passé de 1u en août/septembre à 2u en octobre. Bien que l'historique N-1 affiche une valeur de 4u en juin (outlier promotionnel ou saisonnier spécifique), les données récentes confirment une stabilisation à 2 unités. La date cible du 2025-10-29 respecte l'intervalle d'environ 20 à 30 jours constaté entre les dernières commandes. Je recommande 2 unités pour refléter la hausse récente par rapport à la baseline de 1u.

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 2u et 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des trois derniers mois montre une régularité forte avec un cycle de commande mensuel. L'intervalle entre les dernières commandes est de 28 jours (août-sept) puis 36 jours (sept-oct). La prédiction pour le 29 octobre tombe exactement 20 jours après la dernière commande du 9 octobre, ce qui est légèrement en avance sur le cycle de 30 jours, mais comme il s'agit d'un produit B2B avec des volumes faibles et stables (2-3 unités), la commande se déclenchera probablement lors du passage du commercial ou du cycle d'inventaire de fin de mois. La tendance récente sur 2025 montre une légère hausse par rapport au plancher de 2u observé en 2024, avec deux des trois dernières commandes à 3u. Je retiens 3u pour couvrir le besoin mensuel habituel.

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 1u -> 2u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel très régulier depuis août 2025 (~30 jours d'intervalle). Bien que l'historique N-1 affiche des pointes à 6u (outliers probables ou stock de mise en place), la période récente est stabilisée sur un volume bas entre 1 et 3 unités. La dernière commande du 09/10 était de 2u. La date cible (29/10) s'inscrit parfaitement dans le rythme de renouvellement mensuel constaté sur les derniers mois. Je retiens la moyenne pondérée des trois derniers mois (2u) comme la cible la plus probable.

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u vers 1u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une fréquence de commande mensuelle. Bien que l'année 2024 tournait autour de 2 unités, les deux dernières commandes (août et septembre 2025) montrent une érosion du volume avec le passage à 1 unité lors de la dernière occurrence. La date cible du 29 octobre correspond à la fenêtre de réapprovisionnement mensuelle (environ 30-40 jours après la commande théorique de début octobre). Étant donné la tendance récente et le caractère B2B, la quantité la plus probable pour minimiser le MAPE est 1 unité.

</details>


<details>
<summary><strong>8. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-32 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation nette du produit à 1 unité par commande sur un rythme mensuel précis. Les commandes de 2025 (août et septembre) ont toutes deux été passées un mercredi avec un intervalle de 28 jours. La date de prédiction (2025-10-29) tombe exactement 8 semaines (56 jours) après la dernière commande, ce qui s'inscrit parfaitement dans ce cycle de mercredi périodique. Les volumes plus élevés de l'année précédente (4u, 3u) ne sont plus d'actualité au vu de la tendance récente très stable.

</details>


<details>
<summary><strong>9. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 3 à 5 mois)
- **Saisonnalité**: none
- **Tendance**: Baisse d'activité (aucune commande depuis plus d'un an)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre des commandes très espacées (irrégulières) avec un volume moyen tournant autour de 1.75u (1u, 3u, 2u, 1u). Il n'y a eu aucune activité ces 12 derniers mois sur ce produit spécifique (dernière commande en août 2024). Bien que le produit semble en 'sommeil', les consignes interdisent de prédire 0 car il n'est pas formellement arrêté. Le mercredi est hors cycle de commande habituel (lundi/mardi), je prévois donc la quantité de la prochaine commande probable. En l'absence de tendance récente, je me base sur la médiane historique pour lisser l'impact du pic de 3u (outlier potentiel) et j'arrondis à 2u, valeur la plus récurrente et cohérente avec une reprise de stock minimale.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 2u
- 2024-03-12 14:11:03: 2u
- 2024-02-12 06:43:09: 2u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 1u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 1u
- 2024-03-12 14:11:03: 2u
- 2024-02-12 06:43:09: 4u
- 2023-12-12 07:24:48: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 2u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 1u
- 2024-01-22 12:57:59: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 3u
- 2025-09-03 06:58:40: 3u
- 2025-08-06 06:20:35: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 3u
- 2024-08-05 06:36:16: 3u
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 2u
- 2024-02-12 06:43:09: 4u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 3u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 2u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 6u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 6u
- 2024-06-11 07:44:12: 5u
- 2024-05-13 11:42:43: 1u
- 2024-03-29 14:59:13: 6u
- 2024-03-12 14:11:03: 3u
- 2024-02-12 06:43:09: 2u
- 2024-01-22 12:57:59: 4u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 3u
- 2024-06-11 07:44:12: 2u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 2u
- 2024-03-12 14:11:03: 1u
- 2024-02-12 06:43:09: 4u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [MF0032] MF Tarti Pois chiches 250 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 1u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 1u
- 2024-01-22 12:57:59: 3u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 3u
- 2024-02-12 06:43:09: 2u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (9)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 1.2u (29j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [MF0051] MF Kidney Beans 500g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 2 | Stock prédit: -1.0u (-27j restants) → prédit 2u mais non commandé |
| [MF0061] MF Compote | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [MF0060] MF Passata | 2 | Stock prédit: -0.3u (-11j restants) → prédit 2u mais non commandé |
| [MF0024] MF KETCHUP 250g | 2 | Stock prédit: 0.4u (8j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:14:50.503Z*
