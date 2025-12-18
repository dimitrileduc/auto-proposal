# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Bierges

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Bierges (ID: 23900)
- **Commande réelle** : S39881
- **Date commande** : 2025-10-23 06:18:52
- **Date cutoff système** : 2025-10-22 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 24,085 input + 4,599 output = 28,684 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 45.8% | 24 produits prédits, 11 corrects |
| **Rappel** | 78.6% | 14 produits réels, 11 détectés |
| **F1-Score** | 57.9% | Score équilibré global |

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
| **MAE** | 0.45 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 45.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique s'intensifiant vers une base hebdomadaire en septembre
- **Saisonnalité**: weak
- **Tendance**: Stabilisation récente autour de 2u-3u après pics à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation irrégulière mais une présence constante sur le produit JF008. En 2024, les volumes oscillaient entre 1 et 4u (moyenne 2.25u). Sur la période récente, on observe une densification des commandes en septembre (hebdomadaire) à 2u et 4u. Bien que le lundi soit devenu le jour dominant récemment, la commande du 23/07/2025 prouve que le client commande également le mercredi. En excluant le pic de 4u comme étant le haut de fourchette, une quantité de 3u est préconisée pour couvrir les besoins du cycle actuel, s'alignant sur la commande de juillet et la moyenne haute pondérée.

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme erratique avec tendance à la commande hebdomadaire rapprochée en septembre
- **Saisonnalité**: none
- **Tendance**: Stabilisation à la baisse (2u-4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence globale mais une activité plus régulière en septembre 2025 avec deux commandes consécutives (2u et 4u) le lundi. Le volume historique (N-1) oscillait entre 2u et 4u également. Bien que la date cible soit un mercredi (hors cycle lundi/mardi habituel), la moyenne des volumes récents et historiques converge vers 3u. Étant donné l'absence de données entre le 08/09 et aujourd'hui, on anticipe une commande de réapprovisionnement standard de 3 unités pour couvrir le besoin actuel du client sur ce format spécifique (250ml).

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande erratique longue distance (mensuelle à trimestrielle)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -50% vs N-1
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre une faible rotation du produit JF009. Les volumes historiques sont bas (moyenne de 1.8u sur l'historique complet). En 2024, le client commandait par 2u ou 4u, mais les données récentes de septembre 2025 montrent une stabilisation à 1u. Bien que la demande porte sur un mercredi alors que les lundis sont statistiquement plus fréquents, la règle B2B impose de prédire la prochaine commande probable. Compte tenu de la tendance baissière et de la consommation lente sur le dernier trimestre (1u à 2u), la quantité la plus précise est 1 unité.

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (7j) sur une courte période observée
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité à 1 unité sur les deux dernières occurrences (septembre 2025). Bien que la commande N-1 (avril 2024) affichait 2 unités, la tendance récente prime. Le client commande habituellement le lundi ; la prédiction demandée pour un mercredi est donc traitée comme la prédiction pour le prochain cycle de commande probable, lequel reste stabilisé à 1 unité.

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique à faible rotation (environ tous les 45 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u en 2024 -> 1u en 2025)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le produit présente une rotation très faible et une tendance à la baisse. En 2024, les volumes oscillaient entre 2 et 4 unités. Sur la période récente de 2025, le volume s'est stabilisé à 1 unité par commande avec un intervalle d'environ 47 jours entre les deux dernières commandes (juillet à septembre). La prédiction pour octobre 2025 se situe environ 44 jours après la dernière commande, ce qui correspond au cycle de réapprovisionnement observé. Bien que le jour de commande soit variable, le volume de 1 unité est le plus probable au regard de la transition vers des micro-volumes.

</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 4 à 5 mois)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un produit à très faible rotation avec des commandes espacées de plusieurs mois sans cycle hebdomadaire fixe. On observe une tendance baissière sur les volumes unitaires par commande (passant de 4 unités en 2024 à 1 unité lors de la dernière commande en septembre 2025). Bien que la date demandée soit un mercredi alors que les commandes précédentes étaient le lundi ou mardi, la règle métier impose de ne pas prédire 0. La quantité la plus probable pour la prochaine récurrence est de 1 unité, reflétant le volume de la commande la plus récente.

</details>


<details>
<summary><strong>7. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 1 à 2 mois sans rythme fixe)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement faible et discontinue. La commande de 4u en septembre 2024 est identifiée comme un outlier face à une série de commandes unitaires (1u) sur le reste de l'historique. En l'absence de commandes récentes au cours des 3 derniers mois et sans jour de cycle hebdomadaire défini, la prédiction se base sur la valeur plancher de la demande de fond habituelle (1u) pour couvrir le prochain besoin probable, conformément aux règles de gestion des jours hors cycle.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:30:34: 2u
- 2025-09-01 06:39:50: 4u
- 2025-07-23 07:38:08: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 2u
- 2024-06-11 07:29:36: 1u
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:30:34: 2u
- 2025-09-01 06:39:50: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-06-11 07:29:36: 3u
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:30:34: 1u
- 2025-09-01 06:39:50: 2u
- 2025-07-23 07:38:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 2u
- 2024-06-11 07:29:36: 1u
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:30:34: 1u
- 2025-09-01 06:39:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:30:34: 1u
- 2025-07-23 07:38:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 2u
- 2024-06-11 07:29:36: 3u
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:39:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JF037] JF BBQ SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 1u
- 2024-06-11 07:29:36: 1u
- 2024-04-30 10:14:14: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (13)

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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Stock prédit: -2.1u (-28j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: -0.9u (-13j restants) → prédit 2u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | Stock prédit: -0.6u (-9j restants) → prédit 2u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: -0.7u (-18j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: -0.7u (-18j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 2 | Stock prédit: -0.6u (-9j restants) → prédit 2u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Stock prédit: -0.6u (-9j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Stock prédit: 0.2u (6j restants) → prédit 2u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Stock prédit: -0.3u (-12j restants) → prédit 2u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: -0.5u (-22j restants) → prédit 1u mais non commandé |


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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock suffisant: 0.8u (32j restants > seuil 30j) |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock suffisant: 0.7u (35j restants > seuil 30j) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock suffisant: 0.4u (39j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:18:41.225Z*
