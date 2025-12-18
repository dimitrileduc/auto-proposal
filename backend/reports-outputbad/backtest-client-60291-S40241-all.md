# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S40241
- **Date commande** : 2025-11-12 09:14:35
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 22
- **Tokens**: 31,867 input + 64,936 output = 96,803 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.0% | 27 produits prédits, 17 corrects |
| **Rappel** | 70.8% | 24 produits réels, 17 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 0.59 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 52.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
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

## True Positives (17)

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
| [RIT05] RITCHIE Cola - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv17] Mélange de noix bio vrac 2,75kg | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: hebdomadaire
- **Saisonnalité**: none
- **Tendance**: stable_with_volatility
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle hebdomadaire récent les mardis (28/10 et 04/11), avec des quantités volatiles (3u puis 1u). La médiane historique (2u) et la moyenne des commandes mardi (2u) convergent. Aucune donnée N-1 ni saisonnalité détectable. Le jour de prédiction (11/11) correspond au jour habituel après intervalle de 7 jours.

</details>


<details>
<summary><strong>2. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire récent sur les mardis (28/10, 04/11) avec intervalle exact de 7 jours
- **Saisonnalité**: none
- **Tendance**: Stabilisation après une période de transition
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. **Analyse Rythmique** : Le client a initié un nouveau cycle hebdomadaire les mardis depuis le 28/10, avec une répétition exacte à +7 jours le 04/11. La date de prédiction (11/11) correspond au prochain mardi logique (+7j). 2. **Filtrage Outliers** : La commande de 1u du 04/11 représente une baisse de 66% vs la précédente (3u). En contexte B2B agro, une telle diminution ponctuelle correspond à un ajustement de stock exceptionnel plutôt qu'une nouvelle tendance. Les valeurs 2-3u sont historiquement plus représentatives d'une commande standard. 3. **Décision** : La médiane des données récentes est de 2u (valeur la plus fréquente). C'est le volume qui minimise le MAPE face aux incertitudes 1u vs 3u. Le pattern mardi étant récent mais stable, je privilégie la valeur médiane robuste plutôt que la dernière valeur atypique.

</details>


<details>
<summary><strong>3. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: non_regular_intervals
- **Saisonnalité**: none
- **Tendance**: stable_repeating
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Les données montrent une valeur stable de 5u récurrente (17 sept et 4 nov) et un outlier de 1u (1 oct) non représentatif. Le cycle est irrégulier (intervalles 14j et 34j) sans pattern hebdomadaire clair. Le mardi 11 nov étant hors du cycle habituel historique (mercredi) mais à seulement 7 jours du dernier cycle, je ne prédits pas 0 (interdit) mais la quantité de la prochaine commande probable. La valeur récurrente validée est 5u, correspondant aux deux dernières commandes réelles de type 'normal'. Le produit vrac bio B2B confirme des volumes stables. J'exclus l'outlier 1u qui représentait un besoin exceptionnel ou erreur.

</details>


<details>
<summary><strong>4. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aperiodic with potential weekly emergence
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern recognition: Two identical orders (5u) with the most recent occurring exactly 7 days before prediction date on the same weekday (Tuesday). Despite long prior interval (48 days), recent temporal alignment and quantity stability indicate probable weekly cycle emergence or consistent reorder behavior. Following 'limited data' rule: prioritize last known value when trend-stable. Outliers: none detected. Seasonality: no N-1 data available. B2B behavior: small consistent batches typical for premium product testing/limited stock rotation.

</details>


<details>
<summary><strong>5. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intermittent
- **Saisonnalité**: none
- **Tendance**: downward
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec seulement 3 points de données et pas de données N-1, je privilégie la tendance immédiate et cohérente. Les deux dernières commandes (01/10 et 04/11) sont identiques à 1u, montrant une stabilisation. La commande de 3u du 17/09 est un outlier isolé non répété. La date de prédiction (11/11) étant un mardi comme le dernier historique (04/11), cela correspond au cycle détecté.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: mensuel (~35 jours)
- **Saisonnalité**: none
- **Tendance**: >>> **1. ANALYSE RYTHMIQUE (CLÉ)**
- **Cycle identifié : MENSUEL (~35 jours)**, non hebdomadaire
  - Intervalles : 36j (août→sept) puis 34j (sept→oct)
  - Jours de la semaine : mardi, mercredi, mardi (variable)
  - **Date de prédiction (11 nov) est HORS CYCLE** : J+14 après la dernière commande (28 oct), loin des 35j habituels
- **Jour habituel de commande** : pas un jour précis, mais une période (début de mois)
- **Prochaine commande attendue** : ~2 décembre 2025 (35j après 28 oct)

**>>> 2. FILTRAGE OUTLIERS**
- **Pas d'outlier détecté** : Les valeurs 4u, 3u, 2u sont cohérentes (diminution régulière)
- Tendance parfaitement linéaire (-1u/cycle), pas de variation aléatoire

**>>> 3. SYNTHÈSE & DÉCISION**
- **Données limitées (3 points) MAIS tendance nette et parfaite**
- Le 11 nov est un jour hors cycle → je dois prédire la **quantité de la PROCHAINE commande** (début décembre), pas celle du 11 nov
- **Tendance claire** : décroissance de -1 unité par cycle mensuel
- **Dernière commande** : 28 octobre = 2u
- **Prochaine commande (début déc)** : suivi logique de la tendance = **1u**
- **Produit premium & bio** : volumes naturellement bas en B2B (cafés, épiceries fines)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle mensuel précis (~35j) avec une tendance de diminution parfaitement linéaire (4→3→2u). La date du 11 nov étant intermédiaire dans le cycle, je dois prédire la prochaine commande attendue début décembre. La tendance irrégularité parfaite conduit à **1u**, tout en observant que cela pourrait signaler un désengagement progressif du produit.

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern mensuel (~30-35 jours) avec variation de jour (mardi/mercredi). Pas de cycle hebdomadaire stable.
- **Saisonnalité**: none
- **Tendance**: Décroissante forte et régulière: 4u → 2u → 1u avec réduction de 50% entre chaque commande sur 3 mois.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Tendance décroissante régulière sur données limitées. Dernière valeur cohérente avec le pattern.

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel le mardi (intervalle ~14 jours) avec une commande intermédiaire exceptionnelle le 01/10. Fréquence non hebdomadaire mais sporadique avec tendance à la quinzaine.
- **Saisonnalité**: none
- **Tendance**: horizontal
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le mardi est bien le jour de référence (75% des commandes). Le cycle de 14 jours (19/08→02/09→28/10) réapparaît logiquement le 11/11. La commande du 01/10 est considérée comme outlier (jour et intervalle atypiques). En B2B agroalimentaire, ces micro-volumes (1-2u) indiquent un produit d'appoint dont la dernière commande régulière (28/10) donne la tendance. La dernière valeur 2u est cohérente avec le max historique stable et représente le niveau de consommation actuel du client.

</details>


<details>
<summary><strong>9. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Weekly (7-day interval) since mid-September, previously bi-weekly
- **Saisonnalité**: weak
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Commandes les mercredis. Prédit pour mardi = prochain mercredi (2025-11-12). Volume stable: 2u (4 dernières commandes). Pas de saisonnalité, pas d'outlier récent.

</details>


<details>
<summary><strong>10. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (36 jours d’intervalle)
- **Saisonnalité**: none
- **Tendance**: Decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande selon un cycle mensuel irrégulier (36j entre août et septembre) sans jour fixe. La quantité a chuté de 3u à 1u (-67%), suggérant une baisse de la demande ou un retour à un niveau de base plus réaliste pour ce produit premium. Avec seulement 2 commandes, le pattern hebdomadaire est absent - le mardi n'est pas un jour habituel vs mercredi plus récent. La date cible (11 nov) dépasse l'intervalle mensuel attendu (24 sept + 36j = ~30 oct), donc correspond à un jour hors-cycle. Selon les règles, on ne prédit pas 0 mais la prochaine commande probable. Comme la tendance récente est baissière et les volumes sont faibles pour un produit niche, la valeur la plus probable est la dernière observée : 1 unité. Prédire une moyenne (2u) serait contre-productif car cela ignorerait la dynamique baissière récente.

</details>


<details>
<summary><strong>11. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: INDETERMINE (1 seule commande sur 3 mois)
- **Saisonnalité**: none
- **Tendance**: inconnu
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse rythmique impossible avec une seule commande (2025-09-17, mercredi). L'intervalle de 55 jours sans commande suggère fortement un test non reconduit ou un cycle trimestriel exceptionnel. La date cible (mardi) est hors du jour observé (mercredi). Conformément aux règles strictes agro B2B, je ne peux prédire 0 pour 'jour hors cycle' (INTERDIT) - je dois prédire la quantité de la prochaine commande probable. Comme aucune tendance de croissance/décroissance n'est établie et que le volume historique est stable à 1u, cette valeur représente la commande la plus probable pour un client ultra-petit ou en phase de test. Le risque d'arrêt (0u) est réel mais non démontrable sans plus de données.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-10-28 07:14:16: 3u
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-10-28 07:14:16: 3u
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-10-01 07:17:25: 1u
- 2025-09-17 06:33:32: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>4. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-09-17 06:33:32: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 1u
- 2025-10-01 07:17:25: 1u
- 2025-09-17 06:33:32: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-09-24 06:16:03: 3u
- 2025-08-19 11:00:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 1u
- 2025-09-24 06:16:03: 2u
- 2025-08-19 11:00:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-10-01 07:17:25: 1u
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 2u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 1u
- 2025-08-19 11:00:28: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:34:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (10)

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
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock prédit: 0.8u (21j restants) → prédit 1u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: 0.6u (7j restants) → prédit 1u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 1.0u (13j restants) → prédit 2u mais non commandé |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Stock prédit: -0.7u (-16j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 1 | Stock prédit: -0.6u (-38j restants) → prédit 1u mais non commandé |


---

## False Negatives (7)

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
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock suffisant: 1.5u (34j restants > seuil 30j) |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock suffisant: 0.9u (52j restants > seuil 30j) |
| [fsv04] Amande nature bio vrac 2,8 kg | 5 | Stock suffisant: 4.3u (38j restants > seuil 30j) |
| [fsv18] Mendiant bio vrac 2,8kg | 2 | Stock suffisant: 1.7u (33j restants > seuil 30j) |
| [fsv08] Banana chips bio vrac 1,6kg | 5 | Stock suffisant: 4.3u (34j restants > seuil 30j) |
| [fsv03] Noisette nature bio vrac 2,8kg  | 2 | Stock suffisant: 1.8u (59j restants > seuil 30j) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-17T16:26:57.414Z*
