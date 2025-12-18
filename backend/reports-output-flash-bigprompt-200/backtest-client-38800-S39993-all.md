# Rapport Backtest - Client DLL AD FLEMALLE

## Contexte

- **Client** : DLL AD FLEMALLE (ID: 38800)
- **Commande réelle** : S39993
- **Date commande** : 2025-10-29 12:29:32
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 19,429 input + 3,597 output = 23,026 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 59.1% | 22 produits prédits, 13 corrects |
| **Rappel** | 86.7% | 15 produits réels, 13 détectés |
| **F1-Score** | 70.3% | Score équilibré global |

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
| **MAE** | 0.31 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 26.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les 45 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 1-2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence de commande (environ 7 commandes en 18 mois). La dernière commande date de mi-septembre (2u), précédée d'une commande début août (1u). Le volume est extrêmement faible et stable. Le pic de 3u en septembre 2024 semble être un outlier au regard de la moyenne de 1.25u sur le reste des données. Étant donné l'intervalle moyen de commande (souvent supérieur à 30 jours) et le dernier volume enregistré de 2u, je prévois la prochaine commande à 2u pour couvrir la demande de fond, malgré le caractère erratique des dates de commande.

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique / long cycle (environ 30-45 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre des volumes très faibles (1u ou 2u) avec une fréquence espacée. La dernière commande date de mi-septembre (1u). Bien que l'année N-1 affichait 2u fin octobre, la tendance récente de septembre montre une unité unique. En B2B Agro, pour ces produits à faible rotation, la reproduction de la dernière valeur observée est la plus précise pour minimiser le MAPE, évitant de surstocker un produit qui sort au compte-gouttes.

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence erratique (intervalle 1 à 2 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique de commandes très éparses avec des volumes extrêmement faibles (1 ou 2 unités). Il n'y a pas de cycle hebdomadaire clair, les commandes intervenant tous les 45 à 60 jours en moyenne. La dernière commande date d'août (1u). Bien que le produit ait été commandé en octobre l'année précédente (1u le 23/10/2024), la tendance actuelle sur 2025 et la majorité de l'historique pointe vers une unité par commande. Étant donné la faible rotation, on maintient la quantité minimale de 1 unité pour couvrir le besoin sans risque de surstockage sur un produit à faible flux.

</details>


<details>
<summary><strong>4. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très sporadique, environ 1 commande par trimestre
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1u par commande
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une consommation très faible et irrégulière pour ce produit spécifique (JF SAUCE AIOLI 250ML). Il n'y a pas eu de commande au cours des 3 derniers mois. Cependant, les données N-1 indiquent des commandes unitaires (1u) quasi-systématiquement à cette période de l'année (octobre 2024 avait enregistré une commande de 1u). Le volume de 2u observé en juillet 2024 semble être un pic isolé. En l'absence de récurrence hebdomadaire, on se base sur la commande unitaire minimale historique pour capturer le prochain besoin probable, la date de prédiction (mardi) étant cohérente avec les jours ouvrés déjà observés.

</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible rotation, cycle sporadique (~45-60j)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique très sporadique avec seulement 4 commandes sur l'année N-1 et aucune activité ces 3 derniers mois. Les volumes oscillent strictement entre 1 et 2 unités. Le mardi est un jour cohérent avec l'historique (2/4 commandes passées un mardi). Compte tenu de la faible rotation et de la dernière commande enregistrée à 1u après un pic à 2u, la quantité la plus probable pour une reprise d'activité est le minimum opérationnel de 1 unité.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 13:19:37: 2u
- 2025-08-06 08:47:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-23 14:15:30: 1u
- 2024-09-03 07:16:58: 3u
- 2024-07-17 12:35:11: 2u
- 2024-06-11 11:51:50: 1u
- 2024-04-22 10:01:16: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 13:19:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-23 14:15:30: 2u
- 2024-09-03 07:16:58: 1u
- 2024-04-22 10:01:16: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 08:47:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-23 14:15:30: 1u
- 2024-09-03 07:16:58: 2u
- 2024-07-17 12:35:11: 2u
- 2024-06-11 11:51:50: 1u
- 2024-04-22 10:01:16: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-23 14:15:30: 1u
- 2024-07-17 12:35:11: 2u
- 2024-06-11 11:51:50: 1u
- 2024-04-22 10:01:16: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 07:16:58: 1u
- 2024-07-17 12:35:11: 1u
- 2024-06-11 11:51:50: 2u
- 2024-04-22 10:01:16: 2u

**✅ Quantité LLM**: 1u (confidence: low)
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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: 0.3u (17j restants) → prédit 1u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Stock prédit: 0.3u (17j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Stock prédit: 0.3u (17j restants) → prédit 1u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [JF021] JF PICKLES 350 ML | 1 | Stock prédit: 0.3u (28j restants) → prédit 1u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Stock prédit: 0.4u (19j restants) → prédit 2u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: 0.1u (6j restants) → prédit 1u mais non commandé |


---

## False Negatives (2)

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
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Stock suffisant: 0.6u (70j restants > seuil 30j) |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:19:00.377Z*
