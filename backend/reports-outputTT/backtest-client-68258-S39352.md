# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S39352
- **Date commande** : 2025-09-24 12:49:59
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 19,517 input + 24,551 output = 44,068 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 15 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 1.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 36.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec accélération récente (cycle historique ~15j, dernier cycle 3j)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - de 10u en juin à 2-4u en septembre
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Étape 1 : La commande de 10u en juin est identifiée comme un outlier (remplissage initial ou promotion) et écartée de la demande de fond. Étape 2 : Absence de données N-1 pour confirmer une saisonnalité, bien que la demande semble s'essouffler après l'été. Étape 3 : La tendance est passée de 6u à une moyenne de 3u sur les deux dernières livraisons de septembre. Étape 4 : La dernière commande date du 12 septembre (il y a 11 jours). Avec un intervalle médian estimé entre 14 et 16 jours, une commande est attendue dans la fenêtre des 30 prochains jours. La quantité recommandée pour la prochaine commande unique est de 3 unités, correspondant à la moyenne récente hors pics.

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier mais s'accélérant (médiane à 17 jours, pics à 3 jours en septembre)
- **Saisonnalité**: none
- **Tendance**: Volume stable par commande (moyenne 2.8u) avec fréquence en hausse en septembre
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur n'est identifiée comme outlier (volumétrie homogène entre 1u et 5u). ÉTAPE 2: Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme neutre. ÉTAPE 3: On observe une accélération récente en septembre (2 commandes à 3 jours d'intervalle) après un été calme. La tendance en volume reste stable autour de 3 unités. ÉTAPE 4: La dernière commande date du 12/09. Avec un cycle médian estimé à 17 jours, la prochaine commande est attendue autour du 29/09 ou tout début octobre, soit largement dans la fenêtre des 30 jours. Bien qu'une deuxième commande puisse techniquement survenir en fin de fenêtre si le rythme de septembre se maintient, je ne préconise que la quantité de la première occurrence (3 unités).

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.75u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier (moyenne 17 jours), accélération forte en septembre
- **Saisonnalité**: none
- **Tendance**: Hausse de fréquence et volume stable à 4u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La commande de 1u le 19 août est traitée comme un outlier (ajustement de stock probable), la demande standard se situant entre 3 et 4u. ÉTAPE 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul. ÉTAPE 3: On observe une nette accélération en septembre avec deux commandes de 4u espacées de seulement 3 jours, contre un cycle moyen de 17 jours sur l'historique complet. ÉTAPE 4: La dernière commande date du 12 septembre. Basé sur le cycle moyen de 17 jours, la prochaine commande est attendue autour du 29 septembre, soit dans la fenêtre des 30 jours. La quantité recommandée pour cette commande unique est de 4u, correspondant au palier haut observé sur 75% des commandes nominales récentes.

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne de 40 jours (intervalle croissant de 30 à 51 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive du volume (3u -> 2u -> 1u) et ralentissement de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre seulement trois points de données avec une tendance à la baisse tant en volume qu'en fréquence. La dernière commande date du 12 septembre 2025. En se basant sur un cycle moyen de 40,5 jours, la prochaine commande devrait théoriquement tomber le 22 octobre 2025, ce qui se situe in extremis à l'intérieur de la fenêtre de 30 jours (se terminant le 23 octobre). Compte tenu de la tendance décroissante des quantités unitaires, on prévoit une commande d'une seule unité. La confiance est faible en raison de l'irrégularité croissante des intervalles et de la proximité de la date prévue avec la fin de la fenêtre d'analyse.

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 4.2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 14 à 27 jours (médiane à 21 jours), principalement le mardi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive du volume par commande (de 6u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande moyen de 20-21 jours. La dernière commande ayant eu lieu le 09/09, la prochaine commande théorique est attendue vers le 30/09 (un mardi), ce qui tombe dans la fenêtre d'analyse des 30 jours. Au niveau des quantités, on observe une érosion du volume par commande (passant de 6u en juin/juillet à une moyenne de 2.5u sur les deux dernières commandes). En l'absence de données N-1 pour confirmer une saisonnalité, nous nous basons sur la tendance récente stabilisée à 3 unités pour la prochaine commande unique.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'approvisionnement régulier environ toutes les 3 semaines (moyenne de 21,3 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les volumes (4-6u) sont cohérents avec un conditionnement carton de 6 unités. ÉTAPE 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit Chips Bio est un fond de rayon stable. ÉTAPE 3: La tendance est très stable, 3 des 4 dernières commandes étant à 6 unités. ÉTAPE 4: L'intervalle moyen est de 21 jours. La dernière commande datant du 09/09, la prochaine est prévue autour du 30/09 (soit 21 jours après la précédente), ce qui tombe dans la fenêtre d'analyse des 30 jours. On recommande donc la quantité standard du cycle suivant, soit 6 unités.

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 21 jours, principalement le mardi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 4-6u à 2u stabilisés)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (Nettoyage): La commande de 6u en juillet est traitée comme un pic saisonnier/exceptionnel. La demande de base s'est stabilisée à 2u. ÉTAPE 2 (Saisonnalité): Légère baisse observée après la période estivale, typique pour le segment snacking bio/chips. ÉTAPE 3 (Tendance): Le volume par commande a diminué de 50% par rapport à l'été, passant de 4u à 2u de façon constante sur les deux dernières livraisons. ÉTAPE 4 (Prédiction): L'intervalle moyen est de 21 jours. La dernière commande datant du 9 septembre, la prochaine est prévue autour du 30 septembre, ce qui se situe dans la fenêtre des 30 jours. On recommande la quantité stable de 2 unités pour cette prochaine commande unique.

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable entre 14 et 43 jours avec une moyenne de 26 jours, commandes passées le lundi ou le mardi.
- **Saisonnalité**: none
- **Tendance**: Stable à environ 3.5 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre 4 commandes sur les 3 derniers mois avec un intervalle moyen de 26 jours. La dernière commande datant du 9 septembre, la prochaine commande est statistiquement prévue entre le 30 septembre et le 5 octobre, ce qui se situe dans la fenêtre de prédiction de 30 jours. Le volume des commandes alterne entre 2, 4 et 6 unités ; la moyenne de fond est de 3.5 unités. On recommande 4 unités pour la prochaine commande, en cohérence avec la reprise de volume observée lors du dernier passage (4u) après deux commandes plus faibles (2u).

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 14 à 27 jours, moyenne de 20 jours, principalement le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 4 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Pas d'outliers détectés, les volumes gravitent entre 2 et 6 unités pour une moyenne de 4. ÉTAPE 2 : Pas de données historiques N-1 exploitables, mais la consommation est régulière sans signe de saisonnalité forte. ÉTAPE 3 : La tendance récente est parfaitement stable avec les deux dernières commandes à 4 unités. Le cycle moyen est d'environ 20 jours. ÉTAPE 4 : La dernière commande date du 2025-09-09. En ajoutant le cycle moyen de 20 jours, on arrive au 29/09 ou 30/09, ce qui place la prochaine commande à l'intérieur de la fenêtre de 30 jours. On recommande donc la quantité standard d'une commande, soit 4 unités.

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent entre 14 et 27 jours (moyenne ~20 jours), avec une préférence récente pour les commandes le mardi.
- **Saisonnalité**: none
- **Tendance**: Stable avec oscillations récurrentes entre 4u et 6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes oscillent de manière cohérente entre 2 et 6 unités. Étape 2: Absence de données N-1, mais la demande semble stable sur la période estivale/pré-rentrée. Étape 3: Le cycle moyen est de 19.5 jours. La dernière commande date d'il y a 14 jours (2025-09-09). Étape 4: Une commande est très probable dans les 15 prochains jours (fenêtre des 30 jours respectée). Étant donné que la dernière commande était de 4u et que la moyenne de fond est de 4.4u, une prévision de 4u pour la prochaine commande unique est la plus probable selon le cycle historique.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 4u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 5u
- 2025-08-19 13:27:28: 1u
- 2025-07-07 08:56:44: 2u
- 2025-06-23 07:14:01: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 4u
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 1u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 1u
- 2025-07-23 10:00:51: 2u
- 2025-06-23 07:14:01: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 3u
- 2025-08-19 13:27:28: 2u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 6u
- 2025-08-19 13:27:28: 6u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 2u
- 2025-08-19 13:27:28: 2u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 2u
- 2025-07-07 08:56:44: 2u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 4u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 4u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 6u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 4u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>




---

## False Positives (5)

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
| [JOY07] JOY! Organic Fig Jam 370g | 2 | Stock prédit: 2.0u (19j restants) → prédit 2u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 10 | Stock prédit: 3.2u (6j restants) → prédit 10u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Stock prédit: -4.4u (-23j restants) → prédit 2u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T18:57:01.273Z*
