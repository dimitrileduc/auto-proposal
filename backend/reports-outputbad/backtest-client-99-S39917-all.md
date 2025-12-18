# Rapport Backtest - Client La Fermette Godelaine de Saint-Georges

## Contexte

- **Client** : La Fermette Godelaine de Saint-Georges (ID: 99)
- **Commande réelle** : S39917
- **Date commande** : 2025-10-27 07:18:16
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 37
- **Tokens**: 53,371 input + 84,901 output = 138,272 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 32.3% | 31 produits prédits, 10 corrects |
| **Rappel** | 58.8% | 17 produits réels, 10 détectés |
| **F1-Score** | 41.7% | Score équilibré global |

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
| **MAE** | 0.10 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 10.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 10.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 10.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (10)

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
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle hebdomadaire stable détecté
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec seulement 2 commandes identiques de 1u (jeu 9/10, lun 13/10), pas de pattern hebdomadaire clair. Dimanche 26/10 est hors cycle: je dois prédire la prochaine commande, non 0. Pas de données N-1 pour comparer. En agro B2B, un client commandant 1u régulièrement reste stable sauf événement. Aucun pic/outlier. La prochaine commande (lun 27/10 ou jeu 30/10) sera très probablement 1u.

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Toutes les 3 semaines (intervalle moyen: 23 jours)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -21u, 1u, 2u, 1u, 2025u

**🧠 Raisonnement LLM:**
Le client commande exclusivement en début de semaine (lundi ou mardi) avec un intervalle régulier de ~21-27 jours (pattern mensuel). La date de prédiction (dimanche) est hors cycle : selon les règles, je dois prédire la PROCHAINE commande probable, pas 0. Le 2025-10-13 (lundi) montre 1u, confirmant la tendance stable des 3 derniers mois. Le 2025-09-22 (2u) est un léger pic isolé (x2) sans rupture de tendance. Comme les volumes sont très bas (1-2u) et stables, la prochaine commande attendue (probablement lundi 2025-11-03) sera très vraisemblablement de 1 unité, minimisant ainsi le MAPE.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (non-hebdomadaire). Fréquence estimée: 1-2 commandes par mois.
- **Saisonnalité**: none
- **Tendance**: Decreasing then stabilizing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande irrégulièrement mais montre une préférence pour les lundis (2/3 des cas). La date de prédiction étant un dimanche (hors cycle B2B), j'applique la règle spéciale: prédire la quantité de la PROCHAINE commande probable, qui sera très vraisemblablement le lundi suivant (27 oct). Les 2 dernières commandes sont de 1u (9 et 13 oct), montrant une stabilisation du niveau de commande. La commande plus ancienne du 1 sept (2u) est considérée comme obsolète face à cette nouvelle tendance. Le pattern irrégulier (38j puis 4j d'intervalle) suggère un client qui commande à la demande, sans cycle fixe. Pour minimiser le MAPE, je privilégie la tendance récente la plus stable: 1u.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: 21_days
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -1u

**🧠 Raisonnement LLM:**
Le client commande ce produit selon un cycle planifié exceptionnellement régulier de 21 jours avec des commandes systématiquement passées un lundi (01 sept, 22 sept, 13 oct). La date demandée (26 octobre) est un dimanche, donc hors cycle. Conformément à la règle des jours hors cycle, je dois prédire la quantité de la PROCHAINE commande prévue, qui sera le lundi 3 novembre (13 oct + 21j). L'analyse des quantités montre 2u, 2u, puis 1u. La valeur de 1u est jugée comme outlier négatif probable car (a) elle casse une parfaite stabilité à 2u, (b) en B2B agroalimentaire premium & bio avec cycle long planifié, une variation de -50% est anormale et généralement liée à un événement exceptionnel (test, erreur, problème ponctuel) plutôt qu'une nouvelle tendance, (c) avec seulement 3 points de données, la valeur majoritaire (2u) est plus fiable que la dernière valeur non représentative. Privilégier la mode (2u) sur la moyenne (1.67u) minimise le MAPE attendu dans ce contexte de cycle B2B stable.

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: irrégulier - intervalles de 4 et 38 jours
- **Saisonnalité**: none
- **Tendance**: décroissant puis stabilisation
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La date de prédiction (dimanche) est hors cycle habituel de commande (lundi/jeudi). Les données récentes montrent une stabilisation à 1u après une légère baisse (2u le 1 sept, 1u le 9 oct, 1u le 13 oct). Avec seulement 3 points de données irréguliers et l'absence de saisonnalité N-1, la méthode la plus fiable pour minimiser le MAPE est d'utiliser la dernière valeur stable cohérente avec la tendance actuelle. La prochaine commande attendue (lundi 27 oct ou jeudi 30 oct) sera donc de 1u.

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Spasmodic with weekly tendency
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Jour hors cycle: aucune commande historique le dimanche. Règle spéciale B2B = prédire la prochaine commande probable, pas 0. Les commandes se font en début de semaine (lundi/mardi/jeudi). Toutes les commandes récentes (2025) sont de 1u avec un intervalle variable mais un volume extrêmement stable. La commande de 2u en août 2024 est un outlier historique non répété. La dernière commande (2025-10-13) est de 1u. La prochaine commande prévisible (lundi 28/10 ou jeudi 31/10) sera très probablement de 1u.

</details>


<details>
<summary><strong>7. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: irrégulière (pas de cycle hebdomadaire fixe)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pas de cycle hebdomadaire défini mais tendance stable à 1u sur les 3 dernières commandes. Dimanche hors cycle → prédiction de la prochaine commande basée sur la tendance immédiate. Volume très stable récemment, pas d'outlier significatif.

</details>


<details>
<summary><strong>8. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: .commandes trimestrielles - Un 2025-08-11 (lundit 1) - Cycle très lent (~75j) - Volume minimal
- **Saisonnalité**: none
- **Tendance**: stable_minimal
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule commande de 1u le 2025-08-11 (lundi) sur 3 mois, le pattern indique un produit ultra-lent ou en fin de vie. Le dimanche étant hors cycle B2B, je prédits pour le prochain jour ouvré (lundi 27). Même avec cette incertitude, la règle de précision impose de ne pas inventer un volume. Le 1u reste la seule donnée fiable, indiquant un client qui commande ce produit à l'unité sur des cycles trimestriels.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 1u
- 2025-08-05 10:30:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-08-11 09:21:12: 1u
- 2025-08-05 10:30:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:33:27: 2u
- 2024-06-20 06:56:28: 1u
- 2023-11-07 08:16:41: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:33:27: 2u
- 2024-06-20 06:56:28: 1u
- 2023-11-07 08:16:41: 3u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 09:21:12: 1u

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
| [RF003] REFIELD Maïs 500G  | 1 | Stock prédit: 0.7u (24j restants) → prédit 1u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Stock prédit: 0.6u (21j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.4u (11j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.5u (17j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Stock prédit: 0.8u (11j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: 0.9u (12j restants) → prédit 2u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: -0.2u (-5j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: -2.7u (-24j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: -0.5u (-11j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.4u (29j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Stock prédit: -1.0u (-27j restants) → prédit 1u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.9u (-34j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -1.1u (-38j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -1.8u (-47j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -0.9u (-34j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 0 | Stock prédit: -0.1u (-6j restants) → prédit 0u mais non commandé |
| [CB005] CB Apple juice 1l | 0 | Stock prédit: -0.0u (0j restants) → prédit 0u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: -5.1u (-91j restants) → prédit 1u mais non commandé |


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
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock suffisant: 0.5u (48j restants > seuil 30j) |
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [RISH06] RISH kombucha BIO - tagette 750ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [WIG01] WIGNAC cidre naturel bio 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0009] Consigne casier | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 18 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-17T16:31:31.207Z*
