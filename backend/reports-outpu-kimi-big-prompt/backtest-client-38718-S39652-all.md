# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S39652
- **Date commande** : 2025-10-09 11:32:03
- **Date cutoff système** : 2025-10-09 00:00:00
- **Jours d'avance** : 0j


### 🤖 Usage LLM

- **Appels**: 36
- **Tokens**: 51,864 input + 99,185 output = 151,049 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.3% | 45 produits prédits, 24 corrects |
| **Rappel** | 85.7% | 28 produits réels, 24 détectés |
| **F1-Score** | 65.8% | Score équilibré global |

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
| **MAE** | 1.04 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 56.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 88.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 43.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 14 | Avec erreur |

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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 8 | 1 | 7.0 | 700.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 6 | 1 | 5.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (19 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec intervalles de 30-90 jours. Pas de jour fixe identifié (mardi/mercredi/lundi observés). Cycle mensuel vague, non hebdomadaire.
- **Saisonnalité**: none
- **Tendance**: downtrend
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Les commandes suivent un cycle mensuel irrégulier (30-90j) sans jour fixe. La date de prédiction (jeudi) est hors cycle : le client ne commande jamais ce jour-là. La dernière commande remonte au 2025-09-17 (mercredi), soit 22 jours avant. Compte tenu du cycle mensuel, la prochaine commande probable aura lieu mi-octobre (j+30-40), probablement un mardi ou mercredi. Les quantités récentes montrent une baisse nette (3→2u) par rapport à N-1 (3-5u). La valeur 2u, bien que faible, est cohérente avec la tendance baissière et n'est pas un outlier isolé. Pour minimiser le MAPE sur une série limitée avec rupture de tendance, je privilégie les données récentes (70%) en lissant avec l'historique N-1 (30%). La moyenne pondérée donne 3 unités, ce qui anticipe un léger rebond plus réaliste qu'une commande à 2u répétée, tout en restant ancré sur la tendance actuelle.

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 14 et 30 jours, avec préférence historique pour le mardi (2 des 3 derniers points). La date de prédiction (jeudi) est hors cycle établi.
- **Saisonnalité**: none
- **Tendance**: stable_at_low_level
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**1. ANALYSE RYTHMIQUE** 
- Intervalles récents: 14j (mar.→mar.) puis 29j (mar.→mer.), suggérant un cycle bi-mensuel irrégulier
- Jour habituel: **Mardi** apparaît 2 fois / 3 sur la période récente (plus forte signal)
- La date cible (jeudi 09/10) est **hors cycle**: application de la règle spéciale → prédire la prochaine commande probable, pas 0

**2. FILTRAGE OUTLIERS**
- Les valeurs N-1 (4u, 6u) datent de 8-13 mois avant la période récente, hors contexte actuel
- La valeur 6u (août 2024) est isolée et sans répétition récente → outlier temporel
- Les 2 commandes les plus récentes sont **stables à 2u** (août et septembre 2025)

**3. SYNTHESE & DÉCISION**
- **Données limitées (2-3 points pertinents)** → privilégier la **dernière valeur cohérente avec la tendance**
- Séquence récente: 4u (5 août) → 2u (19 août) → **2u (17 sept.)**
- La baisse de 4u à 2u s'est stabilisée sur les 2 derniers mois, formant une nouvelle baseline fiable
- En agro B2B, une telle stabilisation indique un réajustement de consommation réel (nouvelle baseline), pas un pic temporaire
- **Règle jour hors cycle**: Comme jeudi n'est pas le jour de commande, je prédit la quantité de la prochaine commande (mardi 14/10 ou mercredi 15/10 probable) à **2u**

**Conclusion**: La tendance récente stable à 2u prime sur les anciennes valeurs N-1. La prédiction de 2u minimise le MAPE en visant la quantité la plus probable pour la prochaine commande, conformément aux règles B2B.

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: IRRÉGULIER. Intervalles de 14 jours puis 29 jours entre commandes. Pas de cycle hebdomadaire fixe ni mensuel strict.
- **Saisonnalité**: none
- **Tendance**: STABLE avec légère décroissance. N-1: 3.5u moyenne. Récent: 2.33u moyenne. Dernière commande = 2u.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern irrégulier mais volumes stables (2-4u). Dernière commande=2u, mode=2u. Hors cycle (jeudi) → prédiction pour prochaine commande (début semaine). Privilégie précision: pas de surgonflage. Valeur la plus probable=2u.

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (intervalle 37-43 jours)
- **Saisonnalité**: none
- **Tendance**: stable_avec_incertitude
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Privilégie la valeur récurrente (mode) qui apparaît dans 75% des cas historiques sur la dernière valeur atypique de 1u. En B2B agroalimentaire, les sauces gastronomiques ont des consommations stables; la baisse récente est probablement un ajustement temporaire de stock plutôt qu'une rupture de tendance. Avec seulement 4 points de données, le mode (2u) minimise mieux le MAPE que la moyenne (1.75u) ou la dernière valeur (1u).

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
- **Pattern temporel**: cycle_6_weeks
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Seulement 2 commandes dans l'historique (2u chacune) sur un intervalle de 43 jours. Pas de pattern hebdomadaire. Le jeudi 2025-10-09 est hors cycle probable (22j après la dernière commande vs 43j d'intervalle moyen) mais règle B2B oblige à ne jamais prédire 0. La quantité est stable et la prochaine commande sera vraisemblablement de 2 unités.

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes éparses (6 points en 18 mois). Tendance à des intervalles de 4-7 semaines. Les 2 dernières commandes 2025 sont espacées de 6 semaines (05/08 → 17/09). Aucun rythme précis à caler sur le jeudi 09/10.
- **Saisonnalité**: strong
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
[Rythme] Aucun cycle hebdomadaire ou mensuel stable. Intervalles 4-7 semaines. Le jeudi est hors jour habituel. [Tendance] 2025 montre une parfaite stabilité à 2u (août & septembre). La valeur 5u de mai 2024 est isolée et ancienne (non répétée récemment) = pondération très faible. [Décision] En agro B2B avec données éparses, on privilégie la fidélité à la demande récente la plus stable. La prochaine commande probable (lundi ou vendredi qui suit) sera très probablement de 2u, conforme au rythme actuel. Pas de signe de rupture ni d'accroissement.

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalles irréguliers : 14 jours (05/08→19/08) puis 29 jours (19/08→17/09). Pas de fréquence stable claire, mais tendance à un cycle bimensuel/mensuel variable.
- **Saisonnalité**: none
- **Tendance**: Hausse linéaire cohérente : 4u → 5u → 6u (+1u par commande).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le jeudi est hors cycle. Les 3 dernières commandes montrent une progression stable 4→5→6u mais le pattern de fréquence est irrégulier (14j, 29j). Sans données N-1 et avec seulement 3 points, la valeur la plus probable pour la prochaine commande est la dernière observée (6u). Prédire 7u basé sur une extrapolation linéaire serait trop spéculatoire et augmenterait le risque d'erreur (MAPE) dans un contexte B2B où les clients stabilisent leurs volumes. La progression observée reflète une demande en croissance contrôlée, pas une explosion. La prochaine commande probable (mercredi 15 octobre) sera donc de 6u.

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
- **Pattern temporel**: The available data shows a potential bi-monthly ordering pattern (~30 days) with inconsistent intervals: 14 days between Aug 5-Aug 19, then 29 days between Aug 19-Sep 17. The ordering days are inconsistent (Tuesday twice, Wednesday once). However, quantity shows perfect stability.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Only 3 data points exist, all showing identical quantity of 2 units, indicating perfect stability. 2) Prediction date (Thursday) does not match historical ordering days (Tuesday/Wednesday), triggering the 'day-out-of-cycle' rule. 3) Per B2B guidelines, we must NOT predict 0, but rather the quantity of the next probable order. 4) Given absolute quantity stability across all orders and no outliers, the next order - whenever it occurs - will almost certainly be 2 units. 5) With no N-1 seasonality data and minimal recent data, the most reliable predictor is the stable recent behavior. 6) In agro B2B, such stability (no variation across 3 orders spanning 6 weeks) strongly indicates a fixed consumption rate rather than promotional or irregular purchasing.

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (intervalles 14j et 29j), jour flexible
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande à intervalles irréguliers (14j puis 29j) sans jour fixe, mais toujours en semaine. Les quantités sont extrêmement basses et stables (2u, 1u, 2u). Avec seulement 3 points de données, la règle pour données limitées s'applique : privilégier la dernière valeur si cohérente avec la tendance. Le 2u est à la fois la dernière commande et le mode (valeur la plus fréquente). Le 1u n'est pas un outlier significatif mais une variation normale en B2B. La date de prédiction (jeudi) n'est pas un jour habituel, mais les règles interdisent la prédiction 0 ; on prédit donc la quantité de la prochaine commande probable, qui sera très vraisemblablement 2u.

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Epars (3 commandes sur 2 mois) - Pattern bisannuel puis mensuel suggéré
- **Saisonnalité**: none
- **Tendance**: Stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pas de données N-1 pour ancrer une saisonnalité. Pattern récent basé sur seulement 3 points, intervalles irréguliers (14j puis 29j). Jour de prédiction (jeudi) non historique. La prédiction se fonde sur le dernier volume réel (2u) qui reflète le niveau de consommation le plus récent et est cohérent avec la tendance globale (2u, 1u, 2u). Le coefficient de 1 (pas de pondération) est approprié vu la faiblesse des données. En agro B2B, privilégier la précision sur la prudence implique de ne pas appliquer de coefficient de sécurité inutile sur de si petits volumes.

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
- **Pattern temporel**: Aucune saisonnalité N-1. Pattern épisodique avec intervalle moyen de 43 jours. Pas de jour de la semaine récurrent identifié.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -1u

**🧠 Raisonnement LLM:**
Commandes épisodiques de 2u. Pas de pattern hebdomadaire. Date hors timing mais règle anti-0 applicable. Dernière valeur stable privilégiée.

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: cycle_mensuel
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern mensuel bas volume avec 2 commandes sur 3 à 2u. Le jeudi est hors cycle mais la règle interdit 0. La prochaine commande probable sera de 2u.

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aperiodic - commandes sporadiques selon besoin
- **Saisonnalité**: none
- **Tendance**: stable ultra-bas volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
[REB04] Produit ultra-niche à rotation exceptionnellement lente. Historique 3 commandes en 6 semaines uniquement. Aucune saisonnalité. Rythme aperiodique selon rupture de stock chez le client B2B. Date cible jeudi hors cycle (habituel mar/mer). Application guideline JOUR HORS CYCLE: prédiction de la quantité de la prochaine commande (≠0). Dernière valeur 2u cohérente avec tendance et mode (2u sur 3 commandes). Conclusion: 2 unités lors de la prochaine commande.

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle hebdomadaire détecté. Intervalle de 43 jours entre les 2 commandes (05/08 et 17/09), suggérant un rythme irrégulier ou mensuel approximatif. Jours de commande observés : mardi et mercredi.
- **Saisonnalité**: none
- **Tendance**: Baisse récente (2u → 1u). Tendance de faible fiabilité (seulement 2 points).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
donnees_limitées_derniere_valeur

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle hebdomadaire stable détecté. Les 2 commandes récentes montrent un intervalle de 43 jours avec des jours variables (mardi, mercredi), suggérant un rythme irrégulier/mensuel plutôt qu'hebdomadaire.
- **Saisonnalité**: none
- **Tendance**: légère hausse (+50% entre août et septembre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le jeudi 9 octobre est hors cycle par rapport aux jours de commande historiques (mardi/mercredi). Comme il s'agit d'un rythme irrégulier plutôt qu'un cycle hebdomadaire, je prédit la quantité de la prochaine commande probable. Sur les 2 seules commandes disponibles, la dernière (3 unités le 17/09) reflète l'état le plus récent de la relation client. La légère progression (2→3 unités) sur 43 jours ne justifie pas d'extrapolation supplémentaire. Pas d'outlier détecté.

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
- **Pattern temporel**: Aucun pattern détectable (donnée unique). La fréquence suggère une commande épisodique ou test plutôt qu'un cycle régulier.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le jeudi 09/10 est hors cycle par rapport au mardi historique (seule donnée disponible). Avec un pattern unique et aucune donnée N-1, j'applique la règle des jours hors cycle : je prédit la quantité de la prochaine commande probable plutôt que 0. La seule valeur de référence valide est 2u. Cette quantité reflète le profil d'un produit très épisodique (commandes espacées de 2+ mois), typique de produits test ou niche en B2B. La confiance est faible due au manque de récurrence, mais prédire 0 serait une erreur plus grande si une commande se produit.

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: UNKNOWN - Insufficient data (only 1 data point)
- **Saisonnalité**: none
- **Tendance**: unknown
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Monocritère: la seule donnée récente montre 2u. En l'absence de pattern et de saisonnalité, et en respectant la règle 'pas de 0 pour jour hors cycle', la dernière commande est retenue comme prédiction la plus probable pour une commande B2B agroalimentaire.

</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 8u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: low)
- 📊 **Baseline N-1**: 8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 7u (700.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: UNKNOWN
- **Saisonnalité**: none
- **Tendance**: UNKNOWN
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Absence totale de données historique. La prédiction est basée sur les benchmarks B2B agroalimentaire pour une confiture bio premium 370g. Le jeudi étant un jour de commande classique en restauration professionnelle (préparation weekend/semaine suivante), je ne peux pas appliquer 0 (interdit par guidelines). Le volume de 8 unités correspond à une estimation conservatrice d'une première commande récurrente pour ce type de produit dans le canal B2B (hôtellerie-restauration).

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 6u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 5u (500.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: ANALYSE DÉTAILLÉE DES DONNÉES1. ANALYSE RYTHMIQUE & DISPONIBILITÉ DES DONNÉES   - Données N-1: Aucune commande enregistrée → Impossible d'établir une baseline saisonnière   - Données récentes (3 derniers mois): Aucune commande → Impossible de détecter la tendance actuelle   - Nombre total de points de données: 0   - Date cible: 2025-10-09 (jeudi)   - Jour ouvré (B2B favorable) mais absence totale de pattern historique      CONCLUSION RYTHMIQUE: Pas de cycle détectable (hebdomadaire, bi-hebdomadaire ou mensuel). Impossible de déterminer si le jeudi est le jour habituel de commande.2. FILTRAGE DES OUTLIERS   - Aucune donnée historique → Aucun outlier à identifier ou pondérer   - Pas de pics anormaux, pas de volumes de référence3. SYNTHESE & STRATÉGIE DE DÉCISION   - Problème identifié: ABSENCE TOTALE DE DONNÉES HISTORIQUES   - Contexte produit: Boisson soda cola zero, format 275ml verre - produit standard B2B   - Comportement B2B typique: Commandes régulières de 6 à 48 unités selon taille client   - Risque: Incertitude maximale, erreur de prévision inévitable      APPROCHE ADOPTÉE:   En l'absence de tout historique, la règle métier 'prédire la prochaine commande probable' ne peut s'appliquer. Je bascule sur une estimation contextuelle minimale du secteur agroalimentaire B2B. Pour un produit standard de boisson en format verre individuel, la commande récurrente minimale plausible est un demi-carton (6 bouteilles). Cette valeur représente le volume le plus conservateur compatible avec une logistique B2B économiquement viable, et non une prédiction basée sur une tendance client.   Confiance dans la prédiction: TRÈS FAIBLE (données insuffisantes)
- **Saisonnalité**: none
- **Tendance**: unknown
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Absence totale de données historiques. Valeur par défaut contextuelle B2B appliquée pour respecter la contrainte 'pas de 0 sur jour ouvré' tout en reflétant l'incertitude maximale

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

**✅ Quantité LLM**: 3u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: low)
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

**✅ Quantité LLM**: 6u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: low)
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

**✅ Quantité LLM**: 3u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 8u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 1.1u (23j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 0.8u (14j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 1.0u (21j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -0.3u (-5j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -1.3u (-14j restants) → prédit 3u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.0u (24j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Stock prédit: -1.3u (-14j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF021] JF PICKLES 350 ML | 4 | Stock prédit: -1.3u (-19j restants) → prédit 4u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: -1.6u (-21j restants) → prédit 3u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: -0.8u (-12j restants) → prédit 3u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | Stock prédit: -1.3u (-36j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 5 | Stock prédit: -1.5u (-44j restants) → prédit 5u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 12 | Stock prédit: -0.5u (-21j restants) → prédit 12u mais non commandé |


---

## False Negatives (4)

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
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Stock suffisant: 1.3u (35j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T08:49:33.860Z*
