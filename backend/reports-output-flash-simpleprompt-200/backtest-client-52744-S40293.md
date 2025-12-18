# Rapport Backtest - Client SCHMETS DELICATESSES

## Contexte

- **Client** : SCHMETS DELICATESSES (ID: 52744)
- **Commande réelle** : S40293
- **Date commande** : 2025-11-12 13:44:39
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 14,191 input + 4,669 output = 18,860 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 21 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 83.3% | Score équilibré global |

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
| **MAE** | 1.53 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 38.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 9 | 8 | 1.0 | 12.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 8 | 4.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 5 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 8 | 4 | 4.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 10 | 4 | 6.0 | 150.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec tendance mensuelle à bimensuelle, forte prédominance du mardi
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (de 2-4u vers 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une augmentation de la demande de base passant de 2-4 unités en début d'année 2024 à 6 unités lors de la dernière commande d'octobre 2025. Historiquement, à la même période l'année dernière (5 novembre 2024), le client a commandé exactement 6 unités un mardi. Le rythme actuel semble s'être stabilisé sur ce nouveau plateau de consommation. La date de prédiction étant un mardi, jour historique de commande, la quantité de 6 unités est la plus probable pour répondre au besoin sans surstockage.

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 9u vs Médiane: 8u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 9u (confidence: high)
- 📊 **Baseline N-1**: 9u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 1u (12.5%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel (environ tous les 30 à 35 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive +25%
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le produit suit un cycle de réapprovisionnement mensuel très régulier. On observe une tendance haussière sur les deux derniers mois (8u puis 10u) par rapport à la moyenne N-1 qui oscillait entre 6u et 8u. La commande de novembre 2024 était précisément de 8u un mardi. Compte tenu de la croissance modérée de la consommation sur ce SKU (+25% vs baseline N-1), une quantité de 9 unités (moyenne pondérée de la tendance actuelle et de l'historique saisonnier) est la plus probable pour couvrir le cycle de 30 jours à venir sans surstockage.

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30 à 40 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 6-8u en 2024 à 2-4u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un ralentissement structurel du produit par rapport à l'année précédente (8u en novembre 2024). Le cycle de commande actuel est d'environ un mois, et la dernière commande remonte au 03 octobre (il y a 39 jours), ce qui rend une commande le 11 novembre très probable par effet de cycle. Bien que la tendance récente soit faible (2u et 4u), le volume de novembre 2024 suggère un léger pic saisonnier. Je recommande 4 unités, ce qui équilibre la tendance basse de 2025 avec le besoin de stock pour couvrir la période automnale.

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
- **Pattern temporel**: Cycle mensuel (~30-35 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité remarquable sur ce produit avec une consommation quasi constante de 4 unités par mois. La dernière commande date du 03 octobre (4u), soit il y a environ 39 jours. Le passage à la date du 11 novembre s'inscrit dans le cycle de réapprovisionnement mensuel habituel observé en 2024 (ex: 1er oct puis 5 nov). Malgré une légère variation des jours de la semaine, le volume de 4 unités est le mode statistique (60% des occurrences) et correspond à la tendance des deux derniers mois.

</details>


<details>
<summary><strong>5. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.7u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30-40 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (moyenne 3.3u en N-1 vs 3.5u récent)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande est d'environ un mois. La dernière commande date du 03/10 (il y a 39 jours), ce qui rend une commande le 11/11 très probable pour couvrir le stock du mois. Bien que la moyenne historique soit de 3.3 unités, les volumes récents montrent une volatilité avec un pic à 5u en octobre. Le volume le plus fréquent à cette période (N-1) est de 3 unités, mais compte tenu du délai légèrement plus long depuis la dernière commande (5 semaines vs 4 habituellement) et de la tendance haussière sur le dernier trimestre, une quantité de 4 unités est la plus probable pour équilibrer la demande.

</details>


<details>
<summary><strong>6. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.125u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (cycles de 28 à 35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 3u avec pics ponctuels à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très stable oscillant entre 3 et 4 unités par commande. La fréquence est environ mensuelle. La dernière commande date du 3 octobre (il y a 39 jours), ce qui suggère qu'une commande est due pour novembre. Bien que l'an dernier à la même date (5 nov) la commande était de 4u, la moyenne des 6 dernières commandes est de 3.16u. En l'absence de tendance haussière marquée ou de pic promotionnel, la quantité la plus probable pour minimiser le MAPE est le mode statistique de 3 unités.

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 5u vs Médiane: 8u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5.4u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 4u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~30-40 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 5-6u
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond très stable située entre 4 et 6 unités. La commande de septembre (8u) semble être un restockage après une absence de commande en août, tandis que celle d'octobre (2u) agissait comme un ajustement mineur. En observant la saisonnalité N-1, le mois de novembre 2024 avait enregistré une commande de 6u le premier mardi du mois. La date de prédiction (mardi 11/11/25) correspond à ce cycle mensuel. On s'appuie sur la moyenne long-terme (5.5u) pondérée par la légère baisse observée en octobre pour viser la valeur la plus probable de 5 unités.

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
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30 à 40 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 8u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une transition nette entre 2024 (moyenne de 7-8u) et 2025 (stabilisation à 4u sur les deux derniers mois). Bien que novembre 2024 ait enregistré 8u, la tendance actuelle est à la rationalisation des stocks. L'intervalle depuis la dernière commande (03/10) est de 39 jours, ce qui est cohérent avec le cycle mensuel observé. La quantité de 4u reflète le nouveau palier de consommation du client sans risque de surstockage.

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
- **Pattern temporel**: Cycle mensuel (~30-33 jours), majoritairement en début de mois
- **Saisonnalité**: weak
- **Tendance**: Hausse significative +100% vs N-1 (de 4u à 8u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une transition nette d'un volume de base de 4u en 2024 vers un nouveau palier de 8u établi lors des deux dernières commandes (septembre et octobre 2025). Le cycle de commande est d'environ un mois. La dernière commande datant du 03/10, la demande du 11/11 respecte parfaitement l'intervalle habituel de réapprovisionnement de 30 à 35 jours. Il n'y a aucun signe de saisonnalité inversée ou de ralentissement; le maintien à 8 unités est donc le scénario le plus probable pour minimiser le MAPE.

</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (moyenne 34 jours), jour variable
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 4u en 2024 à 2u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une dégradation du volume par commande au fil du temps : le produit est passé d'une base de 4u à 3u en début 2024, pour se stabiliser à 2u sur les commandes de fin 2024 et tout au long de 2025. Bien qu'une commande de 4u ait été passée exactement à la même période l'an dernier (novembre 2024), la tendance récente sur les 3 derniers mois montre une consommation réduite et stable de 2 unités par cycle. Le délai entre la dernière commande (03/10) et la date actuelle (11/11) est de 39 jours, ce qui correspond au cycle habituel de réapprovisionnement du client (30-45 jours). Une quantité de 2u est la plus probable pour minimiser le MAPE compte tenu de la stabilité récente.

</details>


<details>
<summary><strong>11. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle mensuel (environ 30-33 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -20% (de 5u à 4u)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
Le cycle de commande est stable avec un intervalle d'environ 30 jours. La dernière commande date du 03/10, soit environ 39 jours avant la date de prédiction (11/11), ce qui correspond au cycle habituel. Bien que l'année précédente (N-1) affichait 8u en novembre, les commandes de 2025 montrent une baisse structurelle de 5u vers 4u (septembre et octobre). En l'absence de preuve de promotion, nous privilégions la tendance récente de 4 unités pour maximiser la précision (minimiser le MAPE) plutôt que le pic isolé de 8u de l'an passé.

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

**✅ Quantité LLM**: 9u (confidence: high)
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

**✅ Quantité LLM**: 3u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 4u (confidence: high)
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
| [JF022] JF MOUTARDE MIEL 250ML WECK | 4 | Stock prédit: 0.1u (0j restants) → prédit 4u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 6 | Stock prédit: 4.6u (23j restants) → prédit 6u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 5 | Stock prédit: 1.5u (13j restants) → prédit 5u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 4 | Stock prédit: -1.8u (-21j restants) → prédit 4u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 5 | Stock prédit: -0.3u (-4j restants) → prédit 5u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: -1.1u (-51j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:35:55.230Z*
