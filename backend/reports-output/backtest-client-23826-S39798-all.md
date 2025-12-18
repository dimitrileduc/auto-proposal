# Rapport Backtest - Client La ferme du vieux bure

## Contexte

- **Client** : La ferme du vieux bure (ID: 23826)
- **Commande réelle** : S39798
- **Date commande** : 2025-10-20 06:51:11
- **Date cutoff système** : 2025-10-19 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 24,566 input + 34,422 output = 58,988 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.8% | 31 produits prédits, 8 corrects |
| **Rappel** | 61.5% | 13 produits réels, 8 détectés |
| **F1-Score** | 36.4% | Score équilibré global |

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
| **MAE** | 0.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -30.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec une tendance récente de cycle à 21 jours sur les deux derniers relevés
- **Saisonnalité**: none
- **Tendance**: Baisse de volume (de 2u à 1u) puis stabilisation à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation. Les commandes historiques sont espacées et irrégulières. Cependant, au cours de la période récente (août-septembre 2025), un rythme de 1 unité toutes les 3 semaines a été observé. La dernière commande datant du 15 septembre 2025 (il y a 34 jours), le client a dépassé son cycle court mais reste dans une fenêtre de réapprovisionnement mensuel/bimestriel probable pour ce type de tartinade. Une commande de 1 unité (conforme à la tendance récente) est anticipée pour les 30 prochains jours afin de renouveler le stock en rayon.

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long, environ 40 à 60 jours entre les commandes
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 4u à 1u) et stabilisation à l'unité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très faible et en diminution, se stabilisant à 1 unité par commande sur les deux dernières occurrences. La dernière commande remonte au 15 septembre 2025 (il y a 34 jours). Sur la base de l'intervalle le plus récent (41 jours), la prochaine commande est attendue aux alentours du 26 octobre 2025, ce qui se situe à l'intérieur de la fenêtre des 30 prochains jours. Malgré un historique peu dense et irrégulier, le rythme récent suggère le passage d'une commande unique d'une unité.

</details>


<details>
<summary><strong>3. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 40-41 jours (6 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est limité mais cohérent avec deux commandes de 1 unité espacées de 41 jours. La dernière commande ayant eu lieu le 15 septembre 2025, le délai écoulé au 19 octobre est de 34 jours. En suivant le cycle de réapprovisionnement observé, la prochaine commande (estimée autour du 26 octobre) tombe exactement dans la fenêtre d'analyse des 30 prochains jours. La tendance est strictement stable à l'unité.

</details>


<details>
<summary><strong>4. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle régulier de ~21 jours (environ 3 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier d'environ 21 jours. La dernière commande ayant eu lieu le 15 septembre 2025, le délai actuel est de 34 jours, ce qui signifie que le client a dépassé son cycle habituel de réapprovisionnement. Une commande est donc extrêmement probable dans les prochains jours (fenêtre des 30 jours respectée). Étant donné que les deux dernières commandes étaient de 1 unité, nous prédisons une quantité identique pour la prochaine commande, malgré le léger pic à 2u constaté au début de l'historique.

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des cycles variant entre 2 et 14 mois
- **Saisonnalité**: none
- **Tendance**: Réactivation après une longue période d'inactivité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse se décline en 4 étapes : 1. Nettoyage : Aucune commande aberrante n'est détectée, le volume se situant systématiquement entre 1u et 2u. 2. Saisonnalité : L'historique ne montre pas de pic spécifique en fin d'année, et les données sont trop fragmentées pour établir une corrélation saisonnière fiable. 3. Tendance : Le produit a connu une absence de commande de 14 mois (juin 2024 à août 2025) avant d'être réactivé récemment avec 1 unité. 4. Recommandation : Bien que le cycle soit imprévisible, les intervalles de 2024 (62 à 111 jours) suggèrent qu'un réapprovisionnement pourrait survenir d'ici la fin de la fenêtre des 30 jours (soit 85 jours après la commande d'août). On prévoit donc la commande d'une unité de fond de rayon, malgré une confiance faible due à l'irrégularité globale.

</details>


<details>
<summary><strong>6. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun historique de commande disponible
- **Saisonnalité**: none
- **Tendance**: Inexistante (absence de données)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'absence totale d'historique de commandes pour ce produit (aucune donnée sur l'année N-1 et aucune commande sur les 3 derniers mois) empêche d'identifier une demande de fond ou un cycle de réapprovisionnement. En l'état des données fournies, il est impossible de prévoir une commande dans les 30 prochains jours. Par conséquent, la quantité recommandée est de 0.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-25 06:31:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 2u
- 2024-01-03 08:57:40: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-05 13:48:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 3u
- 2024-01-03 08:57:40: 4u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [RIT01] RITCHIE Orange - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-05 13:48:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-25 06:31:24: 1u
- 2025-08-05 13:48:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:31:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 2u
- 2024-01-03 08:57:40: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (23)

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
| [LV136] LV Tartinade Betterave 190g | 2 | Stock prédit: 1.0u (30j restants) → prédit 2u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.4u (24j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Stock prédit: 0.2u (4j restants) → prédit 2u mais non commandé |
| [fsv18] Mendiant bio vrac 2,8kg | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Stock prédit: 0.3u (23j restants) → prédit 1u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | Stock prédit: -0.0u (-1j restants) → prédit 2u mais non commandé |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [LB003] LB Festive (4,5%) 33CL | 1 | Stock prédit: -1.8u (-74j restants) → prédit 1u mais non commandé |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Stock prédit: -1.8u (-74j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Stock prédit: -0.9u (-53j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Stock prédit: -0.8u (-33j restants) → prédit 2u mais non commandé |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 1 | Stock prédit: -0.5u (-37j restants) → prédit 1u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 1 | Stock prédit: -1.8u (-74j restants) → prédit 1u mais non commandé |


---

## False Negatives (5)

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
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.6u (-35j) mais client a commandé 1u |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV132] LV Tartinade Houmous type 190g | 2 | En rupture (-14j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [fsv04] Amande nature bio vrac 2,8 kg | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T20:00:25.581Z*
