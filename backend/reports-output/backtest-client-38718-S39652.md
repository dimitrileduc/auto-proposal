# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S39652
- **Date commande** : 2025-10-09 11:32:03
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 36
- **Tokens**: 52,596 input + 11,275 output = 63,871 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.3% | 45 produits prédits, 24 corrects |
| **Rappel** | 96.0% | 25 produits réels, 24 détectés |
| **F1-Score** | 68.6% | Score équilibré global |

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
| **MAE** | 0.58 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 41.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 9.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

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

## True Positives (24)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (19 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (43j entre dernières commandes, historique espacé)
- **Saisonnalité**: weak
- **Tendance**: Baisse -25% (moyenne N-1: 4u → récent: 2.5u)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Historique limité (6 commandes) avec rythme irrégulier. Analyse: (1) Pas de pattern hebdomadaire détectable - commandes sur lun/mar/mer sans régularité. (2) Tendance baissière nette: N-1 moyenne 4u vs période récente 2-3u. (3) Dernière commande 2u il y a 21j (17/09), intervalle modéré suggérant besoin régulier mais volumes réduits. (4) Pic 5u (juil-24) isolé, probablement exceptionnel. (5) Date prédiction mercredi cohérente avec 50% des commandes historiques. Baseline calculée: moyenne pondérée (70% récent: 2.5u + 30% N-1 filtré: 3.5u) = 2.8u. Arrondi à 3u car correspond au volume modal récent (août-25) et reflète la demande de fond actuelle sans sur-stockage. Confiance moyenne due au faible historique mais tendance claire.

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle - Intervalles variables: 14j (août), 29j (août-sept), puis 21j attendu
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (de 4u vers 2u sur dernières commandes)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Pattern mensuel irrégulier détecté. Les 3 dernières commandes montrent stabilisation à 2u (sept et août). Le pic N-1 de 6u en août 2024 est isolé (outlier probable promotion). Tendance nette vers volumes réduits: 4u→2u→2u. Intervalle depuis dernière commande (21j) cohérent avec rythme mensuel observé. Pas d'indication de rattrapage car dernières commandes régulières à 2u. Baseline ajustée sur demande récente stabilisée plutôt que sur historique N-1 gonflé. Prédiction: 2u (volume modal récent).

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables: 14j (juil-août N-1), 15j (août'25), 29j (août-sept'25). Pas de jour fixe identifié.
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - Passage de 3-4u (N-1 été) à 2-3u (été N), moyenne 2.3u sur 3 derniers mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Produit à rotation lente avec demande décroissante. Historique N-1 (juillet) montrait 3-4u, mais tendance N affiche 2-3u avec dernière commande à 2u (17/09). Intervalle depuis dernière commande: 21 jours, cohérent avec rythme mensuel observé. Absence de saisonnalité marquée et pas d'outliers identifiés. La baseline de 2.3u reflète la moyenne pondérée récente. Recommandation: 2u (arrondi conservateur de la baseline) car (1) dernière commande=2u, (2) tendance baissière confirmée, (3) pas d'événement exceptionnel prévu mi-octobre. Confiance medium car historique limité mais pattern stable sur T3.

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Écarts variables (21j, 37j, 43j) sans jour fixe identifiable
- **Saisonnalité**: none
- **Tendance**: Baisse progressive : 2u (N-1 août) → 2u (août 2025) → 1u (sept 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (4 commandes) mais tendance claire : passage de 2u à 1u sur les 2 dernières commandes 2025. Aucun pattern saisonnier détectable à cette date (aucune commande début oct N-1). Fréquence irrégulière (21-43j) avec dernière commande il y a 21j (17 sept). La baisse de 2u→1u suggère un ajustement du besoin client ou rotation plus lente. Sans signal de rattrapage ou événement saisonnier, la donnée la plus récente (1u en septembre) constitue le meilleur prédicteur. En contexte B2B sauce premium, cette quantité unitaire reflète probablement un besoin stable post-ajustement.

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes seulement (5 août et 17 sept = ~43j d'écart), données insuffisantes pour établir un cycle fiable
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante de 2u sur les 2 commandes observées
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (2 commandes uniquement) rendant toute analyse de pattern impossible. Les 2 commandes montrent une quantité identique de 2u, suggérant une demande de fond stable. L'intervalle de 43j entre les commandes ne révèle aucun cycle hebdomadaire/mensuel clair. Absence totale de données N-1 empêchant l'analyse saisonnière. La prédiction pour le 8 oct (21j après dernière commande) se base uniquement sur la constance observée. Recommandation: 2u par cohérence avec l'historique complet, mais confiance faible vu le manque de récurrence temporelle établie.

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~40j de cycle (43j entre 08/05 et 09/17, aucune commande depuis 64j)
- **Saisonnalité**: weak
- **Tendance**: Stable ~2u (moyenne récente) après pic isolé de 5u en mai N-1
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Le produit montre un rythme irrégulier (40-64j entre commandes). Les 2 dernières commandes (08/2025 et 09/2025) confirment une demande stable à 2u. Le pic de 5u (mai 2024) est isolé et non récurrent à cette période d'octobre. En N-1 octobre, aucune donnée directe mais juillet montrait 4u (probablement lié été/saisonalité). Vu l'absence de commande depuis 64j (dernier: 17/09), un besoin de réapprovisionnement est logique. La baseline de 2u correspond au pattern récent stabilisé. Pas de signal justifiant une hausse: je recommande 2u, quantité la plus probable selon la tendance actuelle.

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 6.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (14j, 29j, 43j) avec tendance à s'espacer
- **Saisonnalité**: none
- **Tendance**: Hausse progressive +25% (4→5→6u) mais ralentissement du rythme de commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern de commande irrégulier avec 3 points: 4u (05/08), 5u (19/08), 6u (17/09). Tendance haussière claire +50% en 6 semaines MAIS intervalles qui s'allongent (14j→29j→désormais 21j depuis dernière commande au 17/09). La prédiction pour le 08/10 représente un écart de 21 jours. Baseline à 6.5u (extrapolation tendance +0.5u par commande) arrondie à 6u car: (1) Pas de saisonnalité identifiable N-1, (2) Croissance organique modérée du besoin client, (3) Rythme espacé suggère stock tampon côté client. Confidence medium car seulement 3 points de données et pattern temporel instable - pourrait être 5u (maintien) ou 7u (accélération) selon évolution réelle du besoin.

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - commandes espacées de 14j, puis 29j, puis 31j. Pas de jour fixe détecté (mar/mar/mer)
- **Saisonnalité**: none
- **Tendance**: Stable - toutes les commandes à 2u sur 3 mois, aucune variation
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern très clair : 3 commandes consécutives à 2u exactement (05/08, 19/08, 17/09). Aucun outlier, aucune saisonnalité N-1 disponible. Les intervalles variables (14-31j) suggèrent une consommation régulière avec réapprovisionnement au besoin plutôt qu'un jour fixe. La constance parfaite de la quantité (2u à chaque fois) indique une demande de fond stable, probablement liée à un usage spécifique (2 caisses standard ou conditionnement minimal). Aucun signal de changement de tendance. La prédiction la plus probable est donc 2u, conformément à 100% de l'historique récent.

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 3 commandes en 3 mois, intervalles variables (14j puis 29j puis 51j)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation entre 1u et 2u sans tendance claire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court (3 commandes sur 3 mois) avec quantités oscillant entre 1u et 2u. Pattern d'achat irrégulier sans rythmicité claire. La dernière commande date du 2025-09-17 (il y a 21 jours), intervalle proche de la moyenne observée. Les 2 commandes sur 3 sont de 2u. Absence de données N-1 empêchant l'analyse saisonnière. La baseline moyenne de 1,67u suggère une demande de fond faible. En contexte B2B agroalimentaire avec historique limité, je recommande 2u car: (1) c'est la quantité la plus fréquente (2/3 des cas), (2) la dernière commande était de 2u, (3) l'intervalle écoulé (21j) justifie un réapprovisionnement standard. Confiance moyenne due au faible historique mais cohérence du pattern 1-2u observé.

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (14j, 15j, 43j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation entre 1-2u sur 3 commandes récentes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande de façon irrégulière avec volumes très faibles (1-2u). L'intervalle depuis dernière commande (2025-09-17) sera de ~21j au 2025-10-08, conforme au pattern observé. Les 3 dernières commandes montrent alternance 2u→1u→2u, suggérant cycle binaire. Pas de saisonnalité N-1 disponible. La moyenne récente (1.67u) s'arrondit naturellement à 2u, cohérent avec pattern d'alternance et volume du 17/09. Prédiction 2u maximise précision sur ce profil low-volume stable.

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Seulement 2 commandes espacées de 43 jours (05/08→17/09). Données insuffisantes pour établir un cycle fiable.
- **Saisonnalité**: none
- **Tendance**: Stable - Les 2 commandes montrent une quantité constante de 2u, pas de variation observable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (2 commandes seulement) empêchant l'identification d'un pattern robuste. Les deux observations montrent une demande stable de 2u sans variation. L'intervalle de 43 jours entre commandes suggère une fréquence mensuelle approximative. La prochaine commande étant prévue 21 jours après la dernière (17/09→08/10), soit un délai plus court que l'intervalle précédent, cela pourrait indiquer soit un ajustement de rythme, soit un besoin ponctuel. En l'absence de données N-1 et de pattern saisonnier, je maintiens la baseline observée de 2u comme prédiction la plus probable. Confiance faible due au manque d'historique permettant de valider cette hypothèse.

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (14j, 15j, 43j) - pas de jour fixe détecté
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation entre 1-2u, moyenne 1.67u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique limité (3 commandes) mais pattern cohérent : oscillation 1-2u avec moyenne 1.67u. Intervalles irréguliers (14-43j) suggèrent commandes au besoin plutôt que rythme fixe. Dernière commande le 2025-09-17 (2u) il y a 21j. Pas de saisonnalité N-1 disponible. Aucun outlier détecté - toutes les quantités sont dans la fourchette normale. Tendance stable sans hausse/baisse marquée. Produit premium bio à rotation lente typique du segment. Arrondi à 2u car : (1) cohérent avec dernière commande, (2) légèrement au-dessus de la moyenne pour compenser l'intervalle de 21j depuis dernier achat, (3) évite sous-stockage sur produit à faible fréquence. Confiance medium due à l'historique court mais pattern homogène.

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (14j, 13j, 45j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation entre 1-2u sans tendance claire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (3 commandes sur 2 mois). Pattern irrégulier sans cycle hebdo/mensuel identifiable. Intervalles: 14j (août), 13j (août-sept), puis 21j jusqu'à aujourd'hui (08/10). Quantités fluctuent 2-1-2u (médiane=2, moyenne=1.67). Aucune donnée N-1 pour valider saisonnalité. La dernière commande (17/09, 2u) remonte à 21j - légèrement au-delà du rythme moyen (~13-14j), suggérant que le besoin devrait se manifester prochainement. Cependant, l'alternance 2-1-2 et l'absence de pattern clair rendent difficile de prédire si la prochaine sera 1u ou 2u. En contexte B2B avec historique court, je privilégie la prudence statistique: la quantité minimale observée (1u) comme baseline conservatrice, car surgonfler à 2u risquerait un MAPE élevé si le client commande effectivement 1u. Confiance faible due au manque de données structurantes.

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes seulement (43j écart, puis 21j avant prédiction)
- **Saisonnalité**: none
- **Tendance**: Stable - volumes très faibles (1-2u) suggérant produit marginal/test
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Produit à rotation extrêmement faible: seulement 2 commandes en 3 mois (2u le 05/08, 1u le 17/09). Aucune saisonnalité N-1 détectable. Pattern irrégulier sans jour fixe. La moyenne mobile est 1.33u mais en B2B agroalimentaire, les très faibles rotations suivent souvent un schéma 1-2-1-2. Dernière commande = 1u il y a 21j. Sans signal de hausse ni événement particulier le 08/10, la probabilité maximale est 1u (commande minimale de réassort). Confidence faible car historique trop mince pour modélisation robuste.

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes en 3 mois (intervalle ~43j puis aucune depuis 21j)
- **Saisonnalité**: none
- **Tendance**: Stable - volumes faibles (2-3u) sans tendance marquée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (2 commandes seulement) rendant toute prédiction difficile. Pattern irrégulier sans rythme identifiable : 43 jours entre les 2 commandes, puis 21 jours d'attente actuelle. Volumes observés oscillent entre 2u et 3u sans outlier détectable. Absence de données N-1 empêche toute analyse saisonnière. La baseline théorique de 2.5u suggère une commande de 2u (arrondi conservateur) car : 1) Le produit semble à rotation très faible, 2) Impossible de détecter si un rattrapage est en cours, 3) En agro B2B avec si peu de données, mieux vaut prédire le volume le plus fréquent observé (2u apparaît comme plancher). Confiance faible due au manque critique de données historiques.

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Impossible à déterminer - une seule commande historique
- **Saisonnalité**: none
- **Tendance**: Impossible à évaluer - historique insuffisant
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique extrêmement limité (1 seule commande il y a 64 jours). Aucun pattern rythmique détectable, aucune donnée N-1 pour saisonnalité. La seule référence disponible est la commande du 2025-08-05 (2 unités un mardi). Sans autre élément, j'applique le principe de continuité : la prochaine commande devrait logiquement être de même volume (2u). Confiance faible car impossible de valider un pattern, détecter une tendance ou anticiper un rattrapage. Recommandation conservatrice basée sur l'unique observation disponible.

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - Une seule commande observée (2 août)
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - historique trop limité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique extrêmement limité avec une seule commande de 2u le 2025-08-05 (mardi). Sans données N-1 ni pattern observable, impossible de détecter cycles ou tendances. La prédiction pour le 2025-10-08 (mercredi, soit 64 jours après la dernière commande) se base sur l'unique référence disponible. Aucun élément ne justifie d'ajuster à la hausse ou à la baisse. En l'absence d'informations contradictoires, je recommande la quantité historique observée (2u). Confiance très faible due au manque critique de données - cette prédiction est essentiellement une répétition de l'unique observation.

</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 1u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune commande historique - Nouveau produit ou client inactif
- **Saisonnalité**: none
- **Tendance**: Indéterminé - Aucune donnée disponible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ABSENCE TOTALE DE DONNÉES: Aucun historique N-1, aucune commande sur les 3 derniers mois. Il s'agit soit d'un nouveau produit dans le catalogue, soit d'un article sans demande récente. En l'absence totale d'information sur le comportement d'achat, impossible d'établir un pattern de fréquence, une tendance ou une saisonnalité. La prédiction minimale de 1 unité respecte la contrainte technique (>=1) tout en reflétant la probabilité très faible de commande. Dans un contexte réel, il faudrait: 1) Vérifier si le produit est actif au catalogue, 2) Consulter le commercial sur les intentions d'achat du client, 3) Analyser les ventes de produits similaires (autres confitures biologiques) pour établir un proxy. Sans ces éléments, toute prédiction supérieure serait spéculative.

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun historique - Nouveau produit ou inactif
- **Saisonnalité**: none
- **Tendance**: Aucune donnée disponible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ABSENCE TOTALE DE DONNÉES : Aucun historique N-1, aucune commande dans les 3 derniers mois. Ce produit est soit nouveau dans le catalogue, soit totalement inactif pour ce client. En contexte B2B agroalimentaire, trois scénarios possibles : (1) Produit jamais commandé = demande nulle attendue, (2) Nouveau référencement en test = commande symbolique minimale, (3) Erreur de données. En l'absence d'information sur le statut du produit et pour éviter un MAPE à l'infini (division par zéro si prédiction=0 et commande réelle>0), je prédis la quantité minimale technique de 1 unité. Cette prédiction reflète l'impossibilité d'extrapoler sans données tout en maintenant une valeur non-nulle. Confiance très faible car basée uniquement sur une hypothèse de précaution méthodologique.

</details>




### 📊 Données d'Input LLM (19 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 4u
- 2024-07-15 07:59:25: 5u
- 2024-04-15 06:24:25: 3u
- 2024-03-12 14:06:41: 4u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 2u
- 2025-08-05 06:36:11: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 6u
- 2024-07-15 07:59:25: 4u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 3u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-15 07:59:25: 4u
- 2024-07-01 07:05:34: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 2u
- 2024-07-15 07:59:25: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-01 07:05:34: 4u
- 2024-05-31 07:27:57: 5u
- 2024-04-15 06:24:25: 2u
- 2024-03-12 14:06:41: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 6u
- 2025-08-19 12:02:03: 5u
- 2025-08-05 06:36:11: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 3u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (21)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 1.1u (24j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 0.8u (14j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 1.0u (22j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -0.3u (-4j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 3 | Stock prédit: 0.1u (0j restants) → prédit 3u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -1.2u (-14j restants) → prédit 3u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.0u (25j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Stock prédit: -1.2u (-14j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF021] JF PICKLES 350 ML | 4 | Stock prédit: -1.2u (-18j restants) → prédit 4u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: -1.5u (-21j restants) → prédit 3u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: -0.7u (-12j restants) → prédit 3u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | Stock prédit: -1.3u (-35j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -1.4u (-43j restants) → prédit 1u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |


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
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Stock suffisant: 1.3u (35j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-20T13:35:42.461Z*
