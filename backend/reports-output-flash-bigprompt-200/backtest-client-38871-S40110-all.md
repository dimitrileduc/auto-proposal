# Rapport Backtest - Client DLL PROXY RIXENSART SHOPFRAIS

## Contexte

- **Client** : DLL PROXY RIXENSART SHOPFRAIS (ID: 38871)
- **Commande réelle** : S40110
- **Date commande** : 2025-11-05 14:53:54
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 16,611 input + 3,449 output = 20,060 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 70.0% | 10 produits prédits, 7 corrects |
| **Rappel** | 53.8% | 13 produits réels, 7 détectés |
| **F1-Score** | 60.9% | Score équilibré global |

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
| **MAE** | 0.29 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 14.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée/très faible rotation
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation extrêmement faible avec seulement deux occurrences de commande en un an. Cependant, les deux commandes enregistrées (octobre 2024 et septembre 2025) sont constantes à 1 unité. La date de prédiction (mardi) correspond exactement au jour de la semaine de la commande de l'année précédente. Bien que les données soient éparses, il s'agit d'un produit commandé à l'unité sans signe de croissance ou de déclin. En suivant la règle de ne pas prédire 0 pour les jours hors cycle ou à faible fréquence, la quantité la plus probable pour la prochaine occurrence est de 1 unité.

</details>


<details>
<summary><strong>2. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique - environ 1 commande tous les 2 à 4 mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique de commandes très espacées (faible rotation) mais d'une stabilité absolue de 1 unité par commande. Depuis avril 2024, chaque occurrence de vente est systématiquement de 1u. Bien que la fréquence soit imprévisible et que le mardi 4 novembre ne corresponde pas au pattern habituel, les règles métier imposent de prédire la prochaine commande probable plutôt que 0. Compte tenu de l'historique 100% constant, la prédiction la plus précise pour la prochaine rotation est de 1 unité.

</details>


<details>
<summary><strong>3. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique, cycle indéterminé (environ 1-2 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité absolue du volume unitaire (1u) sur l'année précédente et la commande la plus récente du mois de septembre 2025. Le produit présente une rotation lente et irrégulière mais aucun signal ne suggère une augmentation de la demande ou un arrêt de consommation. Bien que la fréquence soit imprécise, la quantité de fond à chaque occurrence est invariablement de 1 unité. En suivant la règle de prédire la prochaine commande probable même hors cycle habituel, le volume de 1u est le plus statistiquement fiable.

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-cyclique, commandes sporadiques (environ tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et sporadique pour ce produit. En 2024, le volume était stable à 2 unités par commande. Cependant, la commande la plus récente (septembre 2025) a enregistré une baisse à 1 unité. En l'absence de signaux de croissance ou de saisonnalité forte sur cette déclinaison 250ML, et conformément à la règle de privilégier la tendance la plus récente en cas de données limitées, la quantité de 1 unité est la plus probable pour la prochaine occurrence de commande.

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.17u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel et espacé (tous les 1 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une consommation très faible et irrégulière (environ une commande tous les 50-60 jours). La dernière commande date du 05/09/2025 pour 1 unité. Bien que le volume historique oscille entre 1 et 2 unités, la tendance la plus fréquente et la plus récente est de 1 unité. Étant donné la faible vélocité du produit (JF Mayonnaise Truffes en 250ml), un réapprovisionnement de 1 unité est le plus probable pour couvrir la demande suivante sans risquer de surstocker un produit de niche.

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier et sporadique (>30j)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique du produit JF009 montre une demande très faible et éparse. Bien qu'une commande de 2u ait été observée en octobre 2024 (outlier potentiel ou pic saisonnier non confirmé), toutes les autres transactions (septembre 2024, août 2024 et la plus récente en septembre 2025) sont de 1u. En l'absence de récurrence hebdomadaire ou mensuelle stricte et face à un volume de fond minimal, la quantité la plus probable pour la prochaine commande est l'unité minimale, indépendamment du jour de la semaine.

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel et sporadique (tous les 3 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une consommation très faible et irrégulière (environ une commande tous les 60 à 100 jours). La dernière commande date du 05/09/2025 pour 1 unité. Bien que le client ne commande pas chaque semaine, lorsqu'il le fait, le volume est quasi-systématiquement de 1 unité (75% des cas, l'unique commande de 2 unités datant de plus d'un an étant traitée comme un pic mineur). En suivant la règle de prédire la prochaine commande probable même si le jour est hors cycle strict, la quantité de base de 1 unité est la plus réaliste pour ce produit de niche.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:23:30: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-12 10:19:34: 1u
- 2024-06-07 10:14:11: 1u
- 2024-04-17 08:29:40: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-12 10:19:34: 1u
- 2024-08-07 06:16:00: 1u
- 2024-06-07 10:14:11: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:23:30: 2u
- 2024-09-12 10:19:34: 2u
- 2024-08-07 06:16:00: 2u
- 2024-06-07 10:14:11: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:23:30: 1u
- 2024-09-12 10:19:34: 1u
- 2024-08-07 06:16:00: 2u
- 2024-06-07 10:14:11: 2u
- 2024-04-17 08:29:40: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:23:30: 2u
- 2024-09-12 10:19:34: 1u
- 2024-08-07 06:16:00: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:23:30: 1u
- 2024-08-07 06:16:00: 2u
- 2024-06-07 10:14:11: 1u
- 2024-04-17 08:29:40: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Stock prédit: -1.2u (-32j restants) → prédit 2u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: 0.1u (3j restants) → prédit 2u mais non commandé |


---

## False Negatives (6)

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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:19:46.340Z*
