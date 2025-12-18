# Rapport Backtest - Client Wandercoop

## Contexte

- **Client** : Wandercoop (ID: 60579)
- **Commande réelle** : S40360
- **Date commande** : 2025-11-14 12:32:09
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 23,066 input + 53,856 output = 76,922 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 18 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
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
| **MAE** | 0.56 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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

## True Positives (9)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: INTERMITTENT
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : Très faible historique (2 commandes sur +2 mois). Intervalle moyen de 34 jours suggère un cycle **mensuel irrégulier** plutôt qu'hebdomadaire. Jours variables (jeu. → mer.) indiquent flexibilité sur le jour exact. Intervalle depuis dernière commande (8j) est court vs cycle habituel. **FILTRAGE OUTLIERS** : Volume parfaitement stable (1u, 1u) → aucun outlier. **DÉCISION** : Données extrêmement limitées avec stabilité absolue des volumes. Le jeudi n'est pas hors cycle (le client a déjà commandé un jeudi le 02/10). Comme le cycle est mensuel, une commande le 13/11 est **prématurée**, mais les règles interdisent le 0. La prochaine commande probable (quand elle surviendra) reprendra le volume stable observé. **Politique B2B** : En commande éparses, le volume précédent est le meilleur proxy.

</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes les mercredis à intervalle régulier de 42 jours (6 semaines)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**1. ANALYSE RYTHMIQUE DÉTERMINANTE**: 2 commandes historiques identiques (1u) le même jour (mercredi) avec un intervalle précis de 42 jours (2025-09-24 → 2025-11-05). Ce pattern bi-mensuel régulier est clair malgré le faible volume de données. **2. GESTION OUTLIERS**: Aucun outlier détecté - les deux valeurs sont identiques et stables. **3. JOUR HORS CYCLE**: La date de prédiction (2025-11-13) est un jeudi, soit 8 jours après le dernier cycle (mercredi). Conformément à la règle essentielle, je ne prédits pas 0. **4. DÉCISION**: Le client commande tous les 42 jours de 1 unité. La prochaine commande prévue est le mercredi 2025-12-17. La quantité la plus probable pour cette prochaine commande est la valeur récurrente observée.**5. PRÉCISION B2B**: En agroalimentaire B2B, même avec peu de données, privilégier la récurrence stable plutôt que des interpolations hasardeuses.

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuelle irrégulière avec latence variable (21±13 jours). Pas de saisonnalité exploitable (données N-1 absentes).
- **Saisonnalité**: none
- **Tendance**: stable_low_volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client opère sur un cycle mensuel irrégulier (intervalles 8-34j) avec préférence mercredi mais pas d'exclusion jeudi. Aucune donnée N-1. Les volumes sont stables (1-3u) avec dernière commande à 3u le 05/11, valeur majoritaire (mode). La commande jeudi 02/10 (1u) est une variation basse isolée, non répétée. Pour minimiser le MAPE sur un produit low-volume B2B sans saisonnalité, la règle est : **dernière valeur = meilleure prédicteur**. La quantité la plus probable pour la prochaine commande, quelle que soit le jour exact, est 3 unités.

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuelle irrégulière (21j, 8j, 34j) plutôt que hebdomadaire
- **Saisonnalité**: none
- **Tendance**: Stable avec légère augmentation récente
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Le client commande principalement le mercredi à intervalles mensuels irréguliers (21-34j). Le jour de prédiction (jeudi 13 nov) est hors cycle. La dernière commande de 3u le 5 nov semble un pic temporaire dans une tendance stable à 2u. La valeur de 1u est identifiée comme outlier. Avec seulement 4 points de données et sans historique N-1, la valeur la plus probable est le mode (2u) qui apparaît deux fois et représente la médiane, plutôt que le dernier pic à 3u qui n'a pas de support historique récurrent. En agroalimentaire B2B, ce type de produit premium bio a des commandes stables une fois le client équipé. La prochaine commande réelle attendue est le mercredi 19 nov.

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sur mercredi (intervalles 21j et 42j), mais jour fixe identifié. Pas de saisonnalité N-1 disponible.
- **Saisonnalité**: none
- **Tendance**: Légère hausse (2→3 unités sur la dernière commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Prédiction pour MERCREDI 19 nov (prochaine commande réelle). Dernière valeur = 3u avec tendance stable à légèrement ascendante. Pas d'outlier. Volume B2B typique pour produit premium.

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: mensuel_variable_jour
- **Saisonnalité**: none
- **Tendance**: stable_to_declining
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données très limitées (3 commandes sur 3 mois) sans historique N-1. Le pattern est **mensuel (~31-32 jours)** avec variation du jour (mercredi/jeudi), pas hebdomadaire. La date de prédiction (13 nov) est hors cycle : seulement 8j après la dernière commande (5 nov) alors que le cycle est d'environ 32j. Application de la règle **'hors cycle = pas de 0'**. Les volumes sont extrêmement faibles [2, 3, 1] sans outlier. La dernière commande de 1u montre une **tendance récente à la baisse** (3→1). Pour données éparses, stratégie **privilégier la dernière valeur** comme meilleure estimation du niveau d'activité actuel, malgré la volatilité.

</details>


<details>
<summary><strong>7. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: mensuel_instable
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern mensuel approximatif (30j) avec volumes stables 2-3u mais date hors cycle. Application règle spéciale jour inhabituelfinal_weighted_score (60% dernier+moyenne pondérée):

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Épars / à la demande - Volume très faible et irrégulier suggère un produit en phase de test ou commandes ponctuelles événementielles
- **Saisonnalité**: none
- **Tendance**: Diminution récente (2u → 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données extrêmement limitées (2 points). Dernière commande le 02/10 (jeu.) = 1u. Tendance à la baisse (2→1). Aucun cycle hebdomadaire ou mensuel validable. Le produit semble en phase test B2B avec volume décroissant. Comme le 13/11 est un jeudi et qu'une commande a eu lieu un jeudi, on considère ce jour comme POSSIBLE mais pas certain. Règle 'données limitées' → privilégier la dernière valeur cohérente avec la tendance. Pas de surgonflement: le client teste avec 1u, pas de signe de reprise.

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 4u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: aucun pattern hebdomadaire ou mensuel clair détectable
- **Saisonnalité**: none
- **Tendance**: inconnu
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Après analyse des seules deux commandes disponibles (1u le 3 septembre, 4u le 2 octobre), le cycle est trop irrégulier pour modéliser une tendance. Le délai de 42 jours depuis la dernière commande et l'absence de commande début novembre indiquent que le 13 novembre est hors timing habituel. Conformément aux règles strictes, je ne mets pas 0 mais la quantité de la prochaine commande probable, qui correspond à la dernière valeur connue de 4u.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 1u
- 2025-10-02 06:12:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 1u
- 2025-09-24 12:59:39: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 3u
- 2025-10-02 06:12:05: 1u
- 2025-09-24 12:59:39: 2u
- 2025-09-03 06:51:32: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 3u
- 2025-10-02 06:12:05: 2u
- 2025-09-24 12:59:39: 1u
- 2025-09-03 06:51:32: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 3u
- 2025-09-24 12:59:39: 2u
- 2025-09-03 06:51:32: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 1u
- 2025-10-02 06:12:05: 3u
- 2025-09-03 06:51:32: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 2u
- 2025-10-02 06:12:05: 3u
- 2025-09-03 06:51:32: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:12:05: 1u
- 2025-09-24 12:59:39: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:12:05: 4u
- 2025-09-03 06:51:32: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 3u

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
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Stock prédit: 2.3u (22j restants) → prédit 3u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock prédit: 0.5u (7j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.2u (9j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.6u (-19j restants) → prédit 1u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Stock prédit: -0.9u (-23j restants) → prédit 1u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Stock prédit: -0.9u (-23j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 10 | Stock prédit: -0.7u (-40j restants) → prédit 10u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 5 | Stock prédit: -0.5u (-39j restants) → prédit 5u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:14:22.873Z*
