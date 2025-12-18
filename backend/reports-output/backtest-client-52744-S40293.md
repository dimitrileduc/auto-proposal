# Rapport Backtest - Client SCHMETS DELICATESSES

## Contexte

- **Client** : SCHMETS DELICATESSES (ID: 52744)
- **Commande réelle** : S40293
- **Date commande** : 2025-11-12 13:44:39
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 20,229 input + 26,587 output = 46,816 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 20 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 1.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 41.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 10 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 8 | 4.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 5 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 8 | 4 | 4.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 5 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 10 | 4 | 6.0 | 150.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier avec une moyenne de cycle de 35 à 40 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à légèrement haussière sur les pics saisonniers (6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande environ tous les 35-40 jours. La dernière commande ayant eu lieu le 03/10/2025 (soit il y a 39 jours), une commande est statistiquement imminente dans la fenêtre des 30 prochains jours. En termes de volume, on observe une corrélation entre la dernière commande (6u) et la commande de novembre N-1 (6u), suggérant un besoin accru en fin d'année par rapport aux volumes estivaux (2u). On se base donc sur ce volume de 6u pour la prochaine commande unique.

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 10u vs Médiane: 8u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: high)
- 📊 **Baseline N-1**: 8u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel variant de 30 à 35 jours
- **Saisonnalité**: strong
- **Tendance**: Hausse légère (8-10u récemment vs 5-8u en N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité mensuelle nette avec un intervalle moyen de 32 jours. La dernière commande date du 03/10/2025 (il y a 39 jours), ce qui indique qu'une commande de réapprovisionnement est imminente et se produira certainement dans les 30 prochains jours. En raison de la nature festive du produit (mayonnaise à la truffe) et de l'approche de la période de fin d'année, nous prévoyons une quantité de 10 unités, alignée sur le volume maximal observé récemment pour répondre à la hausse de la demande saisonnière.

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (moyenne 30-35 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande d'environ 30 jours. La dernière commande datant du 03/10/2025, le client est actuellement en retard de réapprovisionnement (39 jours écoulés). Une commande est donc hautement probable dans les prochains jours. Bien qu'un pic à 8u ait été observé en novembre 2024, les données récentes de 2025 (2u en septembre et 4u en octobre) indiquent une demande de fond plus prudente. Nous recommandons 4 unités pour couvrir le besoin immédiat sans surstockage.

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 4u (50.0%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (cycle moyen de 30 à 35 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité remarquable avec des commandes mensuelles comprises entre 3 et 5 unités (moyenne à 4 unités). La dernière commande a été passée le 2025-10-03, soit il y a 39 jours. Étant donné que le cycle habituel oscille autour de 32-35 jours, le client est actuellement en phase de réapprovisionnement imminent. La tendance étant parfaitement stable et sans saisonnalité marquée sur ce SKU (Mayonnaise), une commande de 4 unités est prévue dans les 30 prochains jours.

</details>


<details>
<summary><strong>5. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.44u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une périodicité moyenne observée entre 30 et 60 jours.
- **Saisonnalité**: weak
- **Tendance**: Stable avec une légère hausse du volume par commande (passage de 3u à 4u-5u).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des historiques montre une demande de fond stable sans outliers majeurs. Le client commande généralement tous les mois ou tous les deux mois. La dernière commande date du 03/10/2025 (il y a 39 jours), ce qui, corrélé à la commande passée le 05/11 l'année précédente (N-1), indique qu'une commande est imminente ou attendue sous peu. On observe une légère augmentation des volumes sur la période récente (5u en octobre), mais la baseline historique se situe plus proche de 3.5 unités. Une recommandation de 4 unités pour la prochaine commande unique est ainsi préconisée pour couvrir les besoins sans surstockage.

</details>


<details>
<summary><strong>6. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (intervalle de 25 à 40 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable (mode de 3u) avec une fréquence quasi mensuelle. La dernière commande enregistrée date du 03/10/2025. Avec un écart moyen constaté de 30 à 35 jours entre les commandes, et sachant que 39 jours se sont écoulés depuis la dernière livraison, une commande est imminente dans la fenêtre des 30 prochains jours. Nous prédisons une commande de 3 unités, correspondant à la demande de fond standard observée sur l'ensemble de l'historique récent et de l'année précédente.

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 5u vs Médiane: 8u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 4u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel régulier (intervalle moyen de 31 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable avec volatilité récente (moyenne ~5.5u)
- **Outliers détectés**: 2u, 8u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier d'environ 30 jours. 1/ DE-EVENTING: Les deux dernières commandes (8u et 2u) s'écartent de la médiane historique de 6u, mais se compensent (moyenne de 5u sur les 2 derniers mois). 2/ SAISONNALITÉ: Faible influence, le produit est consommé de manière linéaire sur l'année N-1. 3/ TENDANCE: Le rythme de commande semble stable malgré une légère irrégularité récente sur les volumes. 4/ PRÉDICTION: La dernière commande date du 3 octobre 2025. Avec un cycle moyen de 31 jours, le client est déjà en léger retard (39 jours d'écart au 11 novembre). Une commande est donc hautement probable dans les 30 prochains jours. Nous recommandons une quantité de 5 unités, correspondant à la moyenne récente et proche de la ligne de fond historique.

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier d'environ 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive du volume unitaire (8u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité de commande mensuelle. Bien que le volume unitaire ait diminué de moitié par rapport à l'année précédente (passant de 8u à 4u en 2025), le client maintient un cycle stable. La dernière commande datant du 2025-10-03 (soit 39 jours avant la date actuelle), le client a dépassé son intervalle habituel de 32-35 jours. Une commande de réapprovisionnement de 4 unités est donc attendue de manière imminente dans les prochains jours. On ne prévoit qu'une seule commande compte tenu de la fréquence constatée.

</details>


<details>
<summary><strong>9. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 8u vs Médiane: 8u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: high)
- 📊 **Baseline N-1**: 8u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 4u (100.0%)
- 📉 **Erreur Médiane**: 4u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (cycle d'environ 32 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse stabilisée à 8u (+100% vs N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une transition nette d'un volume de 4u en 2024 à un volume de 8u en 2025, maintenu sur les deux dernières commandes (septembre et octobre). Le cycle de commande identifié est mensuel (environ 32 jours). La dernière commande ayant été passée le 2025-10-03, nous sommes actuellement à J+39, ce qui indique qu'une commande est imminente et se produira très probablement dans la fenêtre des 30 prochains jours. En suivant la tendance récente stabilisée, la quantité prévisible pour la prochaine commande est de 8 unités.

</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (intervalle moyen de 35 à 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3-4u en 2024 vers 2u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un produit commandé de manière sporadique mais persistante avec un cycle d'environ un mois. La dernière commande date du 03/10/2025, soit il y a 39 jours. Compte tenu de la fréquence habituelle et de l'historique N-1 (commande en novembre), une commande est attendue sous peu dans la fenêtre des 30 prochains jours. Bien que le volume historique oscillait entre 3 et 4 unités, les deux dernières commandes de septembre et octobre se sont stabilisées à 2 unités. Nous retenons donc cette quantité de 2 unités pour la prochaine commande unique, suivant la tendance récente.

</details>


<details>
<summary><strong>11. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 5u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 30 à 35 jours
- **Saisonnalité**: weak
- **Tendance**: Légère baisse (passage de 5u en moyenne à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande mensuel régulier avec une moyenne de base de 5 unités en 2024, passée à 4 unités lors des deux dernières commandes de septembre et octobre 2025. La dernière commande date du 3 octobre 2025, soit il y a 39 jours. Compte tenu du cycle moyen de 30-35 jours, une commande est imminente dans la fenêtre des 30 prochains jours. En observant l'historique N-1 sur la même période (Novembre 2024), on note un pic à 8 unités, suggérant un besoin accru en fin d'année. J'ajuste donc la recommandation à 5 unités pour concilier la tendance récente de 4u et l'effet saisonnier haussier de novembre.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 6u
- 2024-10-01 06:56:31: 2u
- 2024-08-06 06:28:46: 2u
- 2024-07-10 08:20:57: 2u
- 2024-06-06 09:00:27: 5u
- 2024-05-13 14:17:22: 5u
- 2024-04-18 08:51:22: 4u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 8u
- 2025-09-01 08:13:47: 10u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 8u
- 2024-10-01 06:56:31: 8u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 6u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 6u
- 2024-05-13 14:17:22: 8u
- 2024-04-18 08:51:22: 6u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 10u (confidence: high)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 8u
- 2024-08-06 06:28:46: 6u
- 2024-07-10 08:20:57: 6u
- 2024-06-06 09:00:27: 6u
- 2024-05-13 14:17:22: 4u
- 2024-04-18 08:51:22: 4u
- 2024-03-27 07:23:47: 4u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 3u
- 2024-10-01 06:56:31: 4u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 3u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 4u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>5. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 5u
- 2025-09-01 08:13:47: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 3u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 2u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 4u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>6. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 4u
- 2024-10-01 06:56:31: 3u
- 2024-08-06 06:28:46: 3u
- 2024-07-10 08:20:57: 3u
- 2024-06-06 09:00:27: 3u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 4u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 2u
- 2025-09-01 08:13:47: 8u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 6u
- 2024-10-01 06:56:31: 4u
- 2024-08-06 06:28:46: 6u
- 2024-07-10 08:20:57: 6u
- 2024-06-06 09:00:27: 6u
- 2024-05-13 14:17:22: 5u
- 2024-04-18 08:51:22: 6u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 8u
- 2024-10-01 06:56:31: 8u
- 2024-08-06 06:28:46: 8u
- 2024-07-10 08:20:57: 8u
- 2024-05-13 14:17:22: 6u
- 2024-04-18 08:51:22: 6u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>9. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 8u
- 2025-09-01 08:13:47: 8u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 4u
- 2024-10-01 06:56:31: 4u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 3u
- 2024-05-13 14:17:22: 4u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 8u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 2u
- 2025-09-01 08:13:47: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 4u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 2u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 8u
- 2024-10-01 06:56:31: 5u
- 2024-08-06 06:28:46: 5u
- 2024-07-10 08:20:57: 5u
- 2024-06-06 09:00:27: 5u
- 2024-05-13 14:17:22: 5u
- 2024-04-18 08:51:22: 6u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 4u

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
| [JF022] JF MOUTARDE MIEL 250ML WECK | 6 | Stock prédit: 0.1u (0j restants) → prédit 6u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 6 | Stock prédit: 4.6u (23j restants) → prédit 6u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 3 | Stock prédit: 1.5u (13j restants) → prédit 3u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 4 | Stock prédit: -1.8u (-21j restants) → prédit 4u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 5 | Stock prédit: -0.3u (-4j restants) → prédit 5u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T19:58:24.688Z*
