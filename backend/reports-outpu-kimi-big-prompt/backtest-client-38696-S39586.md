# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S39586
- **Date commande** : 2025-10-07 06:59:59
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 0j


### 🤖 Usage LLM

- **Appels**: 37
- **Tokens**: 56,302 input + 127,667 output = 183,969 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.3% | 49 produits prédits, 8 corrects |
| **Rappel** | 88.9% | 9 produits réels, 8 détectés |
| **F1-Score** | 27.6% | Score équilibré global |

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
| **MAE** | 0.88 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 39.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 4u vs Médiane: 6u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4.3u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 3u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aperiodic with 20-23 day average intervals
- **Saisonnalité**: none
- **Tendance**: stable around 4-5 units
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Analyse rythmique: Le client commande à intervalles irréguliers de 15-30 jours (moyenne 20-23j) sans jour fixe. Lundi et mercredi sont les plus fréquents historiquement, mais le mardi apparaît 2 fois sur 4 commandes récentes. Le 2025-10-07 tombe 8 jours après la dernière commande (2025-09-29), ce qui est court vs l'intervalle moyen, mais le mardi n'est pas un jour hors cycle absolu. 

Filtrage outliers: Deux commandes de 10u sont identifiées (2024-04-29 et 2025-09-09). Les deux sont isolées entre des valeurs stables (3-7u) et représentent des pics 2x supérieurs à la médiane. Le retour immédiat à 4u après le pic de septembre 2025 confirme le caractère exceptionnel. La commande de 1u (2024-07-11) est aussi un outlier minimal. Ces valeurs sont pénalisées dans le calcul.

Synthèse: En agroalimentaire B2B premium (mayonnaise truffe), la demande est volatile mais avec un socle stable. La stratégie optimale pour minimiser le MAPE est de privilégier la tendance récente hors outliers. La dernière commande réelle de 4u (2025-09-29) est l'indicateur le plus fiable, renforcé par la médiane récente de 4-5u. Le pic de 10u est traité comme un événement ponctuel sans répétition attendue le 2025-10-07.

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes très éparses (9 commandes sur ~17 mois soit ~0,5 commande/mois). Pas de jour de la semaine dominante clair malgré une légère concentration sur lundis et mardis. La fréquence ne permet pas d'attendre une commande précise le 7 octobre (seulement 8j après la dernière).
- **Saisonnalité**: strong
- **Tendance**: Commandes plus fréquentes en fin d'été/début d'automne (juillet-septembre). Les volumes restent stables (1-2u). Le produit semble saisonnier avec une activité concentrée sur Q3.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données éparses sans cycle hebdomadaire, intervalle moyen ~30j, dernier commande exceptionnelle, les mardis historiques sont systématiquement 1u

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuelle irrégulière avec concentration récente le mardi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande ce produit avec un intervalle moyen de 20-30 jours. Le jour de commande historique était principalement le lundi. Cependant, depuis 3 mois, 3 des 4 dernières commandes ont eu lieu un mardi, indiquant un changement de pattern vers le mardi. Les quantités commandées sont extrêmement stables : uniquement 1u ou 2u, sans outlier. Les 2 dernières commandes du mardi (2025-08-05 et 2025-09-23) étaient de 2u, montrant une stabilisation à ce niveau. La date de prédiction (2025-10-07) est un mardi, correspondant exactement au nouveau jour de cycle. La dernière commande mardi était le 2025-09-23, soit exactement 14 jours avant notre date de prédiction, ce qui renforce la probabilité d'une commande ce jour-là. Compte tenu de la tendance récente et de la stabilisation à 2u, cette valeur est la plus probable.

</details>


<details>
<summary><strong>4. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: > **1. ANALYSE RYTHMIQUE**
> - **Jour habituel identifié** : Mardi (3 commandes sur 5, soit 60% des cas)
> - **Intervalles irréguliers** : 21j → 6j → 11j → 18j (moyenne ≈ 14j, mais forte variance)
> - **Cycle** : Aucun pattern hebdomadaire strict (pas de 7j constant) ni mensuel (pas de 30j constant)
> - **Comportement** : Commandes "ponctuelles" selon besoin, sans cadence fixe
> - **Date de prédiction** : Mardi 07/10/2025 → **JOUR HABITUEL** (pas de règle hors cycle à appliquer)
> - **Intervalle depuis dernière commande** : 28 jours (09/09 → 07/10) → correspond à un cycle "mensuel" atypique
- **Saisonnalité**: none
- **Tendance**: **2. FILTRAGE OUTLIERS**
> - **Quantités** : [2u, 3u, 3u, 3u, 2u] → Toutes entre 2-3 unités
> - **Absence d'outliers** : Aucun pic aberrant à écarter
> - **Stabilité confirmée** : Produit à très faible volume, probable commande de test ou d'appoint
- **Outliers détectés**: -1u

**🧠 Raisonnement LLM:**
Le client commande principalement le mardi (60% des cas) mais sans intervalle constant, indiquant un besoin ponctuel plutôt qu'un cycle régulier. Les volumes sont extrêmement stables (2-3u). La dernière commande sur un mardi était de 2u (09/09). Comme il n'y a pas de tendance de croissance/déclin ni de data N-1, la quantité la plus probable pour le prochain mardi est la dernière observée sur ce jour.

</details>


<details>
<summary><strong>5. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimonthly with preference for Tuesday
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le mardi 2025-10-07 est un jour de commande habituel (cycle de 17-21 jours, 3/4 des dernières commandes étaient des mardis). Les deux dernières commandes sont stables à 1u (août et septembre 2025), montrant une tendance à la baisse par rapport aux 2u historiques. Le pic de 4u en juin 2024 est un outlier isolé non répété. Le produit reste actif avec des commandes récentes. La prochaine commande probable maintenira le volume actuel de 1u.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 06:22:00: 4u
- 2025-09-09 06:35:00: 10u
- 2025-08-22 06:53:50: 3u
- 2025-07-22 10:11:51: 6u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-25 06:29:04: 4u
- 2024-09-16 12:44:43: 6u
- 2024-08-26 14:03:19: 3u
- 2024-08-19 06:08:42: 4u
- 2024-07-31 06:22:12: 5u
- 2024-07-11 06:44:28: 1u
- 2024-06-26 12:38:31: 6u
- 2024-06-19 10:15:51: 5u
- 2024-05-31 12:44:08: 5u
- 2024-05-16 07:03:39: 7u
- 2024-04-29 11:50:19: 10u
- 2024-03-21 09:05:03: 4u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 06:22:00: 2u
- 2025-09-23 06:05:27: 1u
- 2025-08-22 06:53:50: 1u
- 2025-07-22 10:11:51: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-19 06:08:42: 1u
- 2024-07-11 06:44:28: 1u
- 2024-05-31 12:44:08: 2u
- 2024-05-28 06:26:27: 1u
- 2024-05-06 07:25:48: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:05:27: 2u
- 2025-08-11 10:56:49: 1u
- 2025-08-05 11:44:48: 2u
- 2025-07-22 10:11:51: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 12:44:43: 2u
- 2024-08-19 06:08:42: 2u
- 2024-07-31 06:22:12: 2u
- 2024-07-11 06:44:28: 1u
- 2024-06-19 10:15:51: 1u
- 2024-05-31 12:44:08: 2u
- 2024-05-28 06:26:27: 1u
- 2024-05-06 07:25:48: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:35:00: 2u
- 2025-08-22 06:53:50: 3u
- 2025-08-11 10:56:49: 3u
- 2025-08-05 11:44:48: 3u
- 2025-07-15 09:37:25: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:35:00: 1u
- 2025-08-22 06:53:50: 1u
- 2025-08-05 11:44:48: 2u
- 2025-07-15 09:37:25: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-26 14:03:19: 2u
- 2024-06-19 10:15:51: 4u
- 2024-04-29 11:50:19: 2u
- 2024-03-21 09:05:03: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (41)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 1.6u (30j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 1.5u (21j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: 0.4u (4j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 1.5u (24j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 1.3u (12j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: 0.2u (0j restants) → prédit 2u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 10 | Stock prédit: 6.9u (28j restants) → prédit 10u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: 1.1u (15j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.5u (14j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (25j restants) → prédit 1u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: 1.3u (21j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | Stock prédit: -0.8u (-8j restants) → prédit 4u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 5 | Stock prédit: 1.6u (13j restants) → prédit 5u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 3 | Stock prédit: 1.6u (29j restants) → prédit 3u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.4u (25j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 0 | Stock prédit: -3.2u (-27j restants) → prédit 0u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 0.8u (29j restants) → prédit 2u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 3 | Stock prédit: 0.5u (13j restants) → prédit 3u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 3 | Stock prédit: -0.5u (-15j restants) → prédit 3u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.5u (-14j restants) → prédit 1u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: -0.4u (-6j restants) → prédit 3u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 4 | Stock prédit: 0.4u (9j restants) → prédit 4u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -0.7u (-14j restants) → prédit 2u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 0 | Stock prédit: -1.7u (-61j restants) → prédit 0u mais non commandé |


---

## False Negatives (1)

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
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock suffisant: 0.6u (73j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T08:49:47.823Z*
