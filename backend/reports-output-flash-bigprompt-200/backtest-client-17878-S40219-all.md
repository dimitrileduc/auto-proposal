# Rapport Backtest - Client Epicerie Flocon d'Avoine

## Contexte

- **Client** : Epicerie Flocon d'Avoine (ID: 17878)
- **Commande réelle** : S40219
- **Date commande** : 2025-11-14 12:44:14
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 22
- **Tokens**: 33,761 input + 6,283 output = 40,044 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.7% | 27 produits prédits, 11 corrects |
| **Rappel** | 78.6% | 14 produits réels, 11 détectés |
| **F1-Score** | 53.7% | Score équilibré global |

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
| **MAE** | 0.27 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 21.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 13.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
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

## True Positives (11)

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
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence (~45-60 jours en 2025, irrégulier N-1)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation de la demande à 1 unité par commande en 2025. Bien que les deux dernières commandes (septembre et octobre 2025) aient eu lieu un mercredi, la date de prédiction (jeudi) correspond au jour historique prédominant de 2024. Le volume de 3u observé en septembre 2024 est considéré comme un outlier au vu de la constance à 1u sur toutes les autres occurrences de 2024 et 2025. Nous prédisons donc le maintien de la demande de fond de 1 unité.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier long (45-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse des données montre une demande de fond très stable à 1 unité par commande. La valeur de 3u observée en septembre 2024 est un outlier isolé non reproduit depuis. Les deux dernières commandes (septembre et octobre 2025) confirment un rythme de croisière à 1u. Bien que la fréquence soit espacée (environ tous les 42 jours), la tendance est systématiquement orientée vers l'unité minimale de commande pour ce produit de niche (Tartinade Carotte Gingembre). Le jeudi est un jour de commande déjà observé dans l'historique N-1.

</details>


<details>
<summary><strong>3. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles de 30 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (de 2u à 1u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre un ralentissement net de la rotation de ce produit. Alors qu'en 2024 les quantités oscillaient entre 2 et 3 unités par commande, les deux dernières commandes (septembre et octobre 2025) se sont stabilisées à exactement 1 unité. Bien que l'intervalle moyen soit d'environ 45 jours, la demande est passée sur un mode de réapprovisionnement à l'unité (flux tendu). La date cible (jeudi) correspond à un jour de commande historiquement utilisé par ce client. Nous privilégions la tendance récente très stable de 1 unité pour minimiser le MAPE, contre la moyenne historique de 1.86u.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier (2 à 4 semaines) avec tendance cyclique mensuelle
- **Saisonnalité**: none
- **Tendance**: Stable à 2-3u
- **Outliers détectés**: 17u

**🧠 Raisonnement LLM:**
L'historique montre une consommation de fond très stable entre 2 et 4 unités depuis 2023. La valeur de 17u observée le 2025-09-17 est identifiée comme un outlier majeur (pic ponctuel 6x supérieur à la médiane), probablement une promotion ou un stock de sécurité exceptionnel, car la commande suivante est revenue immédiatement à 2u. Le cycle n'est pas strictement hebdomadaire mais plutôt bimensuel ou mensuel. La date de prédiction (jeudi) correspond aux jours de commande historiques (5 occurrences sur 12). Compte tenu de la stabilité de la demande de fond (moyenne de 2,7u hors outlier), une commande de 3u est la plus probable pour maintenir le stock.

</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique, environ tous les 45 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Baisse légère (passage de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un produit à faible rotation avec des commandes très espacées (cycle de 1.5 à 2 mois). La dernière commande date du 15 octobre (1u). Bien que l'intervalle moyen suggère une prochaine commande fin novembre ou début décembre, la règle métier impose de ne pas prédire 0 pour un jour hors cycle ou pour un produit actif. La tendance récente sur 2025 montre une diminution du volume par commande (1u) par rapport à 2024 (2u). Je prévois donc 1 unité pour couvrir le prochain besoin probable, en privilégiant la valeur la plus récente.

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel à irrégulier (2 à 3 mois d'intervalle)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et éparse pour cette référence. Sur les 5 dernières commandes (incluant N-1), 4 commandes sur 5 sont de 1 unité. La valeur de 2 unités observée en novembre 2023 semble être un pic isolé. Le rythme récent (septembre 2025) confirme la stabilité à 1 unité. Bien que l'intervalle de commande soit long (environ 60-70 jours), la date de prédiction arrive 71 jours après la dernière commande, ce qui correspond à la fenêtre de réapprovisionnement probable.

</details>


<details>
<summary><strong>7. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Inconnu - Absence de données historiques
- **Saisonnalité**: none
- **Tendance**: Indéterminée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques (N-1 ou récentes), il est impossible d'établir une baseline statistique. Cependant, conformément aux consignes B2B interdisant de prédire 0 pour une date d'échéance de commande active, une quantité minimale de 1 unité (colis/carton) est recommandée comme 'stock de sécurité' de départ. Le produit étant une tartinade BIO, il s'agit probablement d'un lancement de référence ou d'un premier référencement pour ce client.

</details>


<details>
<summary><strong>8. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (absence totale de données historiques)
- **Saisonnalité**: none
- **Tendance**: Inexistante (nouveau produit ou client)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques ou récentes pour ce produit spécifique, il est impossible d'établir une baseline statistique. Cependant, conformément aux consignes B2B interdisant de prédire 0 (sauf en cas d'arrêt produit avéré), je recommande une commande minimale de 1 unité. Cette prédiction de 'fondation' permet de couvrir une demande initiale potentielle ou un réassort de sécurité, tout en attendant de collecter les premiers points de données réels.

</details>


<details>
<summary><strong>9. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique, environ tous les 1 à 2 mois
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité absolue du volume de commande à 1 unité par itération depuis fin 2023. Bien qu'il n'y ait pas eu de commande au cours des 3 derniers mois, le produit n'est pas considéré comme arrêté mais comme ayant une rotation lente. Le jeudi correspond parfaitement au jour de commande préférentiel observé dans l'historique (50% des commandes). Compte tenu de la régularité unitaire stricte de ce client pour cette référence, la prédiction la plus probable est le maintien de ce volume de fond.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 3u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 3u
- 2024-06-17 06:02:18: 1u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-12-12 13:33:41: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 2u
- 2024-07-29 06:27:47: 2u
- 2024-06-17 06:02:18: 4u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 2u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 3u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-15 05:02:02: 2u
- 2025-09-17 06:40:39: 17u
- 2025-09-03 06:41:22: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 4u
- 2024-09-26 06:43:55: 2u
- 2024-07-29 06:27:47: 3u
- 2024-06-17 06:02:18: 2u
- 2024-05-16 12:15:00: 4u
- 2024-04-22 10:02:31: 3u
- 2024-03-05 10:49:15: 2u
- 2023-12-12 13:33:41: 3u
- 2023-11-23 08:04:40: 3u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 2u
- 2024-06-17 06:02:18: 2u
- 2024-04-22 10:02:31: 2u
- 2024-03-05 10:49:15: 2u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:41:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-29 06:27:47: 1u
- 2024-06-17 06:02:18: 1u
- 2024-05-16 12:15:00: 1u
- 2023-11-23 08:04:40: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV357] LV Tartinade BIO Asperge 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV345] LV Spread KIDS 200ml Organic</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 1u
- 2024-06-17 06:02:18: 1u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-11-23 08:04:40: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (16)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Stock prédit: 0.4u (21j restants) → prédit 1u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Stock prédit: 0.4u (21j restants) → prédit 1u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Stock prédit: -0.1u (-8j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.1u (11j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -0.1u (-9j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: -0.8u (-43j restants) → prédit 1u mais non commandé |
| [fsv11] Noix de cajou mexicaines bio vrac 2,8kg  | 1 | Stock prédit: -2.4u (-70j restants) → prédit 1u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock prédit: -0.4u (-29j restants) → prédit 1u mais non commandé |


---

## False Negatives (3)

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
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock suffisant: 0.5u (32j restants > seuil 30j) |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:16:21.417Z*
