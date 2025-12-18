# Rapport Backtest - Client D'ICI WEPION

## Contexte

- **Client** : D'ICI WEPION (ID: 60278)
- **Commande réelle** : S39701
- **Date commande** : 2025-10-21 07:43:33
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 8,247 input + 3,160 output = 11,407 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 12 produits prédits, 12 corrects |
| **Rappel** | 85.7% | 14 produits réels, 12 détectés |
| **F1-Score** | 92.3% | Score équilibré global |

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
| **MAE** | 1.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 45.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -17.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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

## True Positives (12)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | 6 | 1.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 4 | 10 | 6.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.33u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 25-30 jours (mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère fluctuation (3u à 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune valeur aberrante détectée, les volumes (3-5u) sont cohérents pour du snacking bio premium. Étape 2 (Saisonnalité): Pas de données N-1 disponibles, impact considéré nul par défaut. Étape 3 (Tendance): Le rythme de commande est mensuel (août, sept, oct). La moyenne est de 4,33 unités. La dernière commande date du 1er octobre, nous sommes le 20 octobre, ce qui correspond à la fenêtre de réapprovisionnement habituelle. Étape 4 (Recommandation): En restant conservateur face à l'absence d'historique long, une commande de 4 unités permet de couvrir la demande de fond sans risquer le sur-stockage sur un produit à rotation modérée.

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~25-30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (de 2u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING) : Aucune commande aberrante détectée sur les 3 derniers mois (2u, 3u, 3u), les volumes sont cohérents pour du format B2B premium. ÉTAPE 2 (SAISONNALITÉ) : Données N-1 absentes, mais le produit montre une stabilité inter-saisonnière d'août à octobre. ÉTAPE 3 (TENDANCE) : On observe une légère accélération du volume passant de 2 à 3 unités par mois. L'intervalle de temps entre les commandes est régulier (environ 1 mois). La commande actuelle intervient 19 jours après la précédente, signalant une accélération potentielle du cycle de vente. ÉTAPE 4 (RECOMMANDATION) : Basé sur la moyenne récente et le maintien du rythme de consommation de 3 unités, cette quantité est recommandée pour couvrir le mois à venir sans risque de sur-stockage massif.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~25-30 jours), lundi ou mercredi
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passant de 3u à 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES : 1. Aucun outlier identifié, les volumes (3u-5u) sont cohérents pour du snacking premium bio. 2. Saisonnalité non évaluable faute de données N-1, impact considéré comme neutre. 3. On observe une légère accélération du volume sur la dernière commande (5u au 1er octobre) après deux commandes à 3u. Le délai entre les commandes est d'environ 4 semaines. 4. La recommandation de 4 unités se base sur la moyenne mobile récente (3.67) arrondie à l'entier supérieur pour couvrir la légère hausse de demande constatée début octobre, tout en restant conservateur face au manque d'historique long terme (Confiance FAIBLE). Cette quantité permet de maintenir le stock sans risque majeur de péremption sur un produit bio de 125g au cycle de rotation lent (1u par semaine environ). Aucun rattrapage nécessaire car le rythme mensuel est respecté (dernière commande il y a 19 jours). Les lundis et mercredis sont les jours types de réapprovisionnement identifiés pour ce client sur ce SKU spécifique car ils correspondent à ses jours de passage de commande habituels d'après l'historique fourni (8 sept. et 1er oct.).

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~25-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les trois dernières commandes sont strictement identiques (5u). ÉTAPE 2: Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. ÉTAPE 3: La tendance est parfaitement stable avec une fréquence de commande mensuelle (début de mois ou milieu de mois). La commande actuelle arrive environ 20 jours après la précédente, s'insérant dans le rythme habituel. ÉTAPE 4: La demande de fond étant de 5 unités avec une régularité parfaite sur les trois derniers mois, il est recommandé de maintenir ce volume de 5 unités pour couvrir le prochain cycle sans risque de sur-stockage.

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 4u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.67u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 20 à 30 jours, commandes principalement en début de mois ou milieu de semaine
- **Saisonnalité**: none
- **Tendance**: Légère baisse (5u en août vers 3u en septembre/octobre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur n'est identifiée comme outlier, les volumes étant faibles et cohérents (3 à 5 unités). ÉTAPE 2 (Saisonnalité): Absence de données N-1 pour confirmer une saisonnalité, mais le produit (chips bio) est stable hors période estivale. ÉTAPE 3 (Tendance): On observe un ralentissement depuis le pic d'août (5u) stabilisé à 3u sur les deux derniers mois. ÉTAPE 4 (Recommandation): La demande de fond se stabilise à 3 unités par commande avec une fréquence mensuelle. Étant donné l'absence de données historiques riches, une approche conservatrice de 3 unités est préconisée pour éviter le sur-stockage sur un produit à rotation modérée.

</details>


<details>
<summary><strong>6. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~25-30j)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (1u vers 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont cohérents pour du snack B2B de niche. Étape 2: Absence de données N-1, impact saisonnier considéré comme nul par défaut. Étape 3: On observe un passage d'une unité en août à deux unités systématiques en septembre et octobre, indiquant une stabilisation de la demande à ce niveau. Étape 4: La moyenne récente se situe à 1.67 unités. Étant donné la tendance haussière légère et le délai de 20 jours depuis la dernière commande, une commande de 2 unités permet de couvrir le mois à venir sans risque de sur-stockage majeur.

</details>


<details>
<summary><strong>7. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3.67u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 6u (60.0%)
- 📉 **Erreur Médiane**: 6u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 25-30 jours
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (3u -> 2u -> 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur n'est identifiée comme outlier, les volumes étant faibles et cohérents avec un produit premium. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles, impact considéré nul par défaut. ÉTAPE 3 (Tendance): On observe une accélération sur la dernière commande (6u le 01/10) après une période plus calme. Le délai entre les commandes est d'environ 3 à 4 semaines. ÉTAPE 4 (Recommandation): La moyenne lissée est de 3.67 unités. Compte tenu de la hausse récente mais du faible historique, une commande de 4 unités permet de couvrir la demande de fond tout en restant conservateur pour éviter le sur-stockage d'un produit bio à rotation lente (125g). Niveau de confiance faible dû au manque de profondeur historique (3 points de données). Pour une gestion prudente, on ne suit pas le pic de 6u immédiatement afin de valider si la tendance se confirme ou s'il s'agissait d'un réapprovisionnement de stock ponctuel chez le client B2B en début de mois d'octobre. Étant à la date du 20/10, on anticipe le cycle de novembre avec une quantité centrale de 4u. Chaque unité représentant une part significative du stock pour ce SKU premium, la prudence est de mise pour préserver la DLUO (Date Limite d'Utilisation Optimale). Rappel: commande conforme au cycle mensuel estimé (dernière le 01/10). Le réapprovisionnement se fait 20 jours plus tard, suggérant un besoin imminent pour fin de mois/début mois suivant. Recommandation finale: 4 unités d'un bloc homogène pour maintenir le niveau moyen constaté sur le dernier trimestre sans surréagir au dernier pic de 6u, évitant ainsi un surstockage coûteux sur un segment 'premium & bio' dont les ventes peuvent fluctuer selon le comportement du consommateur final en fins de mois.

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée (une seule occurrence)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (historique insuffisant)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): L'unique commande enregistrée est de 1 unité, ce qui constitue la base de référence minimale. Aucun outlier détecté. ÉTAPE 2 (SAISONNALITÉ): Aucune donnée N-1 disponible pour identifier un pic en octobre. En tant que produit 'Superfood', la demande est généralement stable mais non documentée ici. ÉTAPE 3 (TENDANCE): Aucune commande depuis le 13 août (plus de 2 mois d'inactivité). La tendance ne peut être établie. ÉTAPE 4 (RECOMMANDATION): Dans un contexte d'incertitude totale avec un historique quasi-inexistant, l'approche conservatrice B2B impose de commander l'unité minimale de vente (1u) pour tester la réactivation du produit sans risque de surstockage.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 5u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 3u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 5u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 5u
- 2025-09-08 10:27:39: 5u
- 2025-08-13 06:26:39: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 3u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>6. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 2u
- 2025-09-08 10:27:39: 2u
- 2025-08-13 06:26:39: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 6u
- 2025-09-08 10:27:39: 2u
- 2025-08-13 06:26:39: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-13 06:26:39: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Stock suffisant: 2.3u (59j restants > seuil 30j) |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | Stock suffisant: 1.2u (63j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:13:17.809Z*
