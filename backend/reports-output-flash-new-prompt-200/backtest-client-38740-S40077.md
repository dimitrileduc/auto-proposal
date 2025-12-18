# Rapport Backtest - Client CRF MARKET EMBOURG DESADIS

## Contexte

- **Client** : CRF MARKET EMBOURG DESADIS (ID: 38740)
- **Commande réelle** : S40077
- **Date commande** : 2025-11-04 07:10:58
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 21,716 input + 7,672 output = 29,388 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 45.7% | 35 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
| **F1-Score** | 62.7% | Score équilibré global |

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
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 31.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
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

## True Positives (16)

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
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD015] LD Onion Spread 180g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD011] LD Organic Kids Spread 180 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier moyen d'une commande tous les 15-20 jours (environ 2 fois par mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 2.25u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune valeur aberrante détectée, les volumes oscillent de manière cohérente entre 1u et 3u. Étape 2 (Saisonnalité): Pas de données N-1 disponibles, mais le produit (tartinade aubergine) ne montre pas de pic évident au début du mois de novembre. Étape 3 (Tendance): La moyenne lissée sur les 4 dernières commandes est de 2.25u. La fréquence semble s'étirer légèrement (environ 1 mois depuis la dernière commande le 02/10). Étape 4 (Recommandation): En l'absence de tendance haussière marquée et avec une date de commande (lundi) qui ne correspond pas au pic habituel de fin de semaine, nous restons conservateurs sur la moyenne simple arrondie à l'entier inférieur.

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 15 à 25 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u > 2u > 1u > 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité ne présente d'anomalie majeure par rapport à la moyenne de 2 unités. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit (tartinade) est stable hors période festive. Étape 3: On observe un ralentissement du volume global par rapport au pic d'août (3 unités), mais une stabilisation autour de 1.5 - 2 unités sur les deux derniers mois. Étape 4: La dernière commande date d'il y a 32 jours, suggérant un besoin imminent de réapprovisionnement pour maintenir le stock de fond. Une recommandation de 2 unités permet de couvrir le cycle moyen sans risque de sur-stockage.

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle approximatif de 20 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Hausse légère (1u en août/septembre vs 2u en octobre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune commande ne présente un profil atypique massif (pics > 5u), les volumes 1u-3u sont cohérents pour ce type de conditionnement (colis de 6). ÉTAPE 2 (SAISONNALITÉ): Données N-1 insuffisantes (une seule commande en juin) pour confirmer une saisonnalité marquée en novembre. ÉTAPE 3 (TENDANCE): On observe un passage de 1u à 2u lors de la dernière commande d'octobre, suggérant un besoin de fond un peu plus élevé ou un stock de sécurité atteint. Cependant, la fréquence est trop erratique pour garantir un besoin immédiat de gros volume. ÉTAPE 4 (RECOMMANDATION): Compte tenu de l'historique faible (4 points de données sur 18 mois), j'applique une approche conservatrice de 1 unité pour couvrir le besoin courant sans générer de surstock sur un produit dont la rotation semble lente.

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel erratique (cycle d'environ 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u/mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les volumes sont constants (1-2 unités). ÉTAPE 2: La saisonnalité est faible pour ce produit de niche (Mayonnaise Truffe), bien qu'une légère hausse à 2u ait été notée en août N-1 (potentiel effet estival/festif). ÉTAPE 3: La tendance récente est parfaitement stable avec 1 unité commandée par mois en septembre et octobre. ÉTAPE 4: Basé sur le rythme mensuel actuel, une commande de 1 unité est recommandée pour couvrir le besoin de novembre sans risquer le sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.7u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (environ 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec ralentissement de fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond extrêmement stable oscillant entre 1 et 2 unités par commande, avec une moyenne de 1,7u. Aucun outlier n'a été identifié. La saisonnalité N-1 ne montre pas de pic spécifique en novembre. La tendance récente (octobre/septembre) confirme un besoin de 2 unités tous les 30 jours environ. Bien que la commande intervienne un lundi (décalage par rapport au milieu de semaine habituel), le volume reste constant. Une recommandation de 2 unités permet de couvrir le cycle mensuel sans risque de surstockage significatif.

</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (cycles de 28 à 35 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucune donnée aberrante détectée, les volumes oscillent entre 1 et 2 unités, ce qui est cohérent pour un produit de niche (Mayonnaise Weck). ÉTAPE 2 (Saisonnalité) : Faible impact visible ; les données N-1 montrent des pics légers en mai/août mais la demande reste marginale. ÉTAPE 3 (Tendance) : La tendance récente (septembre/août) montre une stabilisation à 1 unité par commande tous les mois environ. ÉTAPE 4 (Recommandation) : Le produit est en demande de fond basse mais constante. Malgré un saut de commande en octobre, le stock de sécurité doit rester minimal pour éviter le gaspillage alimentaire sur un format 250ml. Recommandation d'une unité pour maintenir la rotation.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:18:26: 3u
- 2025-09-15 12:13:28: 1u
- 2025-09-03 14:41:32: 2u
- 2025-08-06 11:32:29: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:18:26: 2u
- 2025-09-15 12:13:28: 1u
- 2025-09-03 14:41:32: 2u
- 2025-08-06 11:32:29: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:18:26: 2u
- 2025-09-15 12:13:28: 1u
- 2025-08-06 11:32:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-21 08:44:16: 3u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:18:26: 1u
- 2025-09-03 14:41:32: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-14 06:00:40: 2u
- 2024-06-21 08:44:16: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:18:26: 2u
- 2025-09-03 14:41:32: 2u
- 2025-08-06 11:32:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-14 06:00:40: 2u
- 2024-06-21 08:44:16: 1u
- 2024-05-28 06:38:38: 2u
- 2024-03-26 15:27:00: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:41:32: 1u
- 2025-08-06 11:32:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-14 06:00:40: 2u
- 2024-06-21 08:44:16: 1u
- 2024-05-28 06:38:38: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (19)

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
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Stock prédit: 0.2u (4j restants) → prédit 2u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: -0.8u (-13j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: -0.5u (-5j restants) → prédit 2u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 2 | Stock prédit: -0.5u (-5j restants) → prédit 2u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Stock prédit: 0.8u (20j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: -0.5u (-10j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 2 | Stock prédit: 0.4u (10j restants) → prédit 2u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 2 | Stock prédit: 0.4u (10j restants) → prédit 2u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: -0.2u (-3j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 2 | Stock prédit: -0.2u (-3j restants) → prédit 2u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: -0.2u (-3j restants) → prédit 1u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: -0.8u (-26j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: -0.2u (-4j restants) → prédit 2u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.2u (14j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (13j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Stock prédit: -0.4u (-9j restants) → prédit 1u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (2j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:12:30.727Z*
