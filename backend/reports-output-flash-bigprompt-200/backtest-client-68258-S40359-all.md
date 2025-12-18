# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S40359
- **Date commande** : 2025-11-14 11:38:35
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 21,218 input + 4,088 output = 25,306 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 2.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 58.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 72.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -41.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 8 | 7.0 | 87.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 4 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | 10 | 6.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 7u (87.5%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec accélération récente (cycle ~12-14j identifié en septembre)
- **Saisonnalité**: none
- **Tendance**: Baisse du volume par commande (6u -> 4u -> 1u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'historique montre une érosion du volume par commande, passant de 4-6 unités en septembre à seulement 1 unité hier (mercredi 12/11). La demande pour ce jeudi 13/11 intervient immédiatement après une commande effectuée la veille. En B2B, cela indique soit un complément de stock spécifique, soit un passage à un flux tendu d'une unité par commande. Étant donné la commande de 1u hier, la probabilité la plus forte pour le lendemain (jour consécutif) reste le maintien de ce volume minimal de 1u plutôt qu'un retour aux volumes de 4u observés deux mois auparavant.

</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier mais s'accélérant (21j puis 49j puis 1j)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive du volume par commande (3u -> 2u -> 1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une accélération soudaine de la fréquence (commande hier le 12/11 de 1u après un creux de 49 jours). Cependant, les volumes unitaires chutent (3, 2, 1). La demande pour un jeudi, juste après une commande le mercredi, suggère soit un reliquat, soit une stabilisation de la consommation sur de petits volumes. Compte tenu de la tendance dégressive mais du besoin de stock minimal en B2B pour de la confiture bio (produit de niche), on retient la moyenne basse des commandes récentes (2u) pour couvrir la prochaine période probable, car 1u semble être un ajustement de dernière minute plutôt qu'un volume de fond habituel (précédemment 2u ou 3u). Malgré la date 'hors cycle' d'un jour, on prédit le volume nécessaire pour le prochain mouvement de stock cohérent avec l'historique récent des 3 mois.

</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Asynchrone avec accélération récente (intervalle 60j puis 1j)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique est très limité et ne montre pas de cycle hebdomadaire strict. Après une commande de 3u en septembre (outlier probable ou restockage massif), la commande la plus récente (hier, mercredi 2025-11-12) est de 1u. Dans un contexte de réapprovisionnement B2B pour un produit de niche (confiture de figue bio), une commande consécutive le lendemain (jeudi) pour compléter un besoin immédiat ou maintenir le stock est le scénario le plus probable avec un volume minimal de 1u, suivant la tendance immédiate de 24h. Les règles interdisent de prédire 0 malgré l'absence de pattern clair.

</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec accélération récente (~25-60 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse +100% (passant de 2u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (3 points). On observe une commande hier (mercredi 12/11) de 4 unités, ce qui est le double des commandes précédentes (2u). Les intervalles sont passés de 60 jours à 26 jours. Étant donné la commande très récente d'hier, une nouvelle commande le jeudi 13/11 est peu probable en termes de logistique de réapprovisionnement immédiat, mais selon les règles métier de prédire la 'prochaine commande probable' sans mettre 0, nous retenons le dernier volume observé (4u) qui marque une rupture de tendance par rapport aux 2u historiques. Le niveau de confiance est faible dû au manque de profondeur historique et à la proximité immédiate de la dernière commande (24h).

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 6u (60.0%)
- 📉 **Erreur Médiane**: 6u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, environ tous les 15-20 jours
- **Saisonnalité**: none
- **Tendance**: Stable entre 4u et 6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre des volumes de commande très stables, oscillant majoritairement entre 4 et 6 unités. Bien qu'une commande de 4u ait été passée le 12/11 (mercredi), la demande porte sur le 13/11 (jeudi). En suivant les règles de gestion des jours hors cycle et la nature B2B, nous prédisons le volume de la prochaine commande probable. Le client commande souvent par lots de 4u (occurrences le 09/09, 24/09 et 12/11). La tendance récente est de 4u, ce qui constitue la base la plus fiable malgré l'absence de données N-1.

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier (3j à 23j), moyenne ~14 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse, stabilisation à 2u
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
L'analyse montre une fréquence de commande approximative de toutes les deux semaines. La dernière commande date du 17 octobre (il y a 27 jours), ce qui suggère qu'une commande est imminente ou en retard par rapport au cycle moyen. En termes de volumes, on observe une stabilisation à 2 unités sur les vendredis, mais une moyenne historique de 2.8 unités sur les 5 points de données. Le pic de 5u en septembre semble exceptionnel par rapport au reste de la période (1u, 2u, 4u, 2u). Compte tenu de l'attente prolongée depuis la dernière commande, une quantité légèrement supérieure à la dernière valeur (2u) est probable pour compenser le stock, soit 3 unités.

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique / Cycle ~12j
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec seulement deux points de données historiques, le signal est faible. On observe une commande de 1u le vendredi 12/09 et 2u le mercredi 24/09. L'intervalle était de 12 jours. Bien que le 13/11 soit très éloigné de la dernière activité enregistrée, en suivant les règles B2B, nous prédisons le volume de la prochaine commande probable. Compte tenu du faible volume unitaire (1-2u) et de la légère hausse sur la dernière itération, la quantité la plus probable pour maintenir un stock minimum est de 2 unités.

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 3 jours sur l'historique réduit
- **Saisonnalité**: none
- **Tendance**: Stable à 3u de moyenne
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité (2 points). On observe une commande de 1u un mardi et 5u le vendredi suivant. La date cible est un jeudi. En l'absence de cycle hebdomadaire clair sur un échantillon si petit, la moyenne des deux seules valeurs connues (3u) constitue la prédiction la plus rationnelle. Comme le produit est 'Organic Sweet Orange Jam', un volume de 3 unités (fond de rayon) est cohérent pour une commande de réapprovisionnement classique.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 6u
- 2025-09-12 12:57:02: 4u
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 2u
- 2025-09-09 12:58:36: 3u
- 2025-08-19 13:27:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-12 12:57:02: 3u
- 2025-09-09 12:58:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 4u
- 2025-10-17 10:21:30: 2u
- 2025-08-19 13:27:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 4u
- 2025-10-17 10:21:30: 6u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 10:21:30: 2u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 5u
- 2025-08-19 13:27:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:49:59: 2u
- 2025-09-12 12:57:02: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 5u
- 2025-09-09 12:58:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 8 | Stock prédit: 8.0u (24j restants) → prédit 8u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | Stock prédit: 6.0u (30j restants) → prédit 6u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 6 | Stock prédit: 6.0u (28j restants) → prédit 6u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 5 | Stock prédit: 4.0u (14j restants) → prédit 5u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 8 | Stock prédit: -1.8u (-4j restants) → prédit 8u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:13:25.215Z*
