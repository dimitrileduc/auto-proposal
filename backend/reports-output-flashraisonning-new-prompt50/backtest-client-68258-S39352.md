# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S39352
- **Date commande** : 2025-09-24 12:49:59
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 15,152 input + 22,216 output = 37,368 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.8% | 17 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 74.1% | Score équilibré global |

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
- **Pattern temporel**: Irrégulier avec des intervalles de 14 à 48 jours, sauf un pic de fréquence rapproché début septembre (3 jours).
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive des volumes unitaires de 10u vers une stabilisation entre 2u et 4u.
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 10u en juin est traitée comme un outlier (stockage initial ou promotion). La moyenne de fond après retrait est de 3,5u. Étape 2: On observe une baisse des volumes post-été, suggérant que la période de forte demande pour la confiture de fraise bio est passée. Étape 3: La tendance récente montre des volumes faibles (4u et 2u) malgré le rapprochement des dates. Étape 4: En appliquant une approche conservatrice pour éviter le sur-stockage sur un produit dont la demande s'essouffle, une recommandation de 3 unités est optimale pour maintenir le flux sans risque majeur.

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
- **Pattern temporel**: Rythme irrégulier avec accélération nette en septembre (deux commandes en 3 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse significative du volume et de la fréquence en septembre
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur n'est identifiée comme outlier car les volumes restent cohérents pour du B2B (1-5 unités). ÉTAPE 2: Pas de données N-1 pour confirmer une saisonnalité, bien qu'un pic d'activité soit visible à la rentrée (septembre). ÉTAPE 3: La tendance est à l'accélération avec 50% du volume total commandé sur les 15 derniers jours. ÉTAPE 4: La moyenne historique est de 2,8 unités. Compte tenu de la dynamique récente de septembre (moyenne de 3,5u sur les deux dernières livraisons) et du cycle habituel du mardi, une commande de 3 unités permet de soutenir la demande actuelle sans risque de sur-stockage.

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
- **Pattern temporel**: Irrégulier avec accélération en septembre (intervalle 3-11 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Étape 1 : Nettoyage de l'outlier du 19/08 (1u) qui semble être un ajustement mineur, portant la moyenne de fond à 3,75u. Étape 2 : Aucune donnée N-1 disponible pour confirmer une saisonnalité, nous traitons le produit comme stable. Étape 3 : On observe une hausse de fréquence en septembre avec deux commandes de 4u rapprochées. La dernière commande date d'il y a 11 jours (12/09), ce qui suggère un besoin de réapprovisionnement imminent. Étape 4 : La quantité de 4u est recommandée car elle représente le mode de consommation actuel et la quantité la plus fréquente lors des pics d'activité récents.

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
- **Pattern temporel**: Mensuel irrégulier avec décalage (cycle ~30-50 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -33% par commande (3u > 2u > 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une diminution systématique des volumes de commande (3, 2, puis 1 unité) sur les trois derniers mois. Il n'y a pas de données N-1 pour confirmer une saisonnalité, mais la fin de l'été correspond généralement à une baisse de demande pour la rhubarbe. La dernière commande (1u) date d'il y a seulement 11 jours (le 12/09) ; une recommandation conservatrice de 1 unité est donc préconisée pour couvrir le cycle de fin septembre sans risquer de sur-stockage sur un produit en perte de vitesse.

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Approvisionnement toutes les 2 à 3 semaines, avec un passage du lundi au mardi sur les cycles récents.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (de 6u en juin/juillet à ~2-3u en août/septembre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une décélération nette de la demande après le pic de début d'été (juin/juillet à 6u). Aucun outlier n'est détecté, il s'agit d'une consommation de fond qui se stabilise. La moyenne des trois dernières commandes est de 3 unités. Bien que l'intervalle entre la dernière commande et aujourd'hui soit plus court (14 jours contre 21 précédemment), le volume de 3u reste le plus cohérent pour couvrir le besoin actuel sans risquer un surstockage sur un produit dont la tendance est baissière.

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
- **Pattern temporel**: Cycle bi-mensuel (14 à 21 jours), principalement le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier identifié, les volumes oscillent de façon cohérente entre 4u et 6u. Étape 2 : Absence de données N-1 pour confirmer une saisonnalité, mais la demande reste stable en fin de période estivale. Étape 3 : On observe une stabilisation du volume à 6 unités sur les dernières commandes avec un cycle moyen de 14 à 21 jours. Étape 4 : La commande intervient exactement 14 jours après la précédente, s'inscrivant parfaitement dans le cycle le plus court observé. Étant donné la stabilité des derniers volumes (6u) et le jour de commande (mardi) qui est récurrent, une quantité de 6 unités est recommandée pour maintenir le stock sans risque de sur-stockage.

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier s'allongeant vers 3 semaines, commandes passées principalement le lundi ou mardi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive puis stabilisation à 2u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'analyse montre une dégressivité nette du volume de commande après le pic estival de juillet (6u et 4u). Sur les deux derniers mois (août et septembre), la demande s'est stabilisée à 2 unités par commande avec un espacement d'environ 21 jours. Étant donné l'absence de données N-1 pour anticiper une reprise automnale et la tendance actuelle à la baisse des volumes de snacking estival, le maintien à 2 unités permet de couvrir le besoin sans risque de sur-stockage.

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
- **Pattern temporel**: Accélération du cycle de commande passé de 6 semaines à 2 semaines, stabilisation sur le mardi.
- **Saisonnalité**: none
- **Tendance**: Hausse significative de la fréquence et du volume (+100% sur la dernière commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une intensification nette du rythme de réapprovisionnement. Après une période calme en juillet/août (2u toutes les 3 à 6 semaines), la commande du 09/09 a doublé en volume (4u) et s'est rapprochée en fréquence (21 jours). Actuellement à 14 jours du dernier relevé, la tendance suggère un besoin de maintien du stock. Bien que le volume historique moyen soit de 3.5u, la dynamique récente justifie une commande de 4u pour couvrir la demande croissante de septembre sans atteindre le pic de 6u observé en juin, restant ainsi conservateur.

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (14-21 jours) avec commandes principalement en début de semaine (mardi/lundi)
- **Saisonnalité**: none
- **Tendance**: Stable à 4u avec une fréquence régulière
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation de la demande à 4 unités sur les deux dernières commandes, remplaçant la volatilité observée en juin-juillet. Aucun outlier n'est détecté. Le rythme de commande semble s'être fixé sur un intervalle de 14 à 21 jours. Étant donné que la dernière commande (4u) date d'il y a exactement 14 jours, une commande de réapprovisionnement de 4 unités est recommandée pour maintenir le stock de fond sans risque de sur-stockage, en l'absence de données N-1 indiquant une saisonnalité spécifique.

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
- **Pattern temporel**: Cycle bimensuel (tous les 14 à 21 jours) préférentiellement en début de semaine
- **Saisonnalité**: none
- **Tendance**: Stable avec une moyenne de 4.4 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des historiques montre une demande régulière et stable. ÉTAPE 1: Aucune valeur aberrante n'est détectée, les volumes oscillant faiblement entre 2 et 6 unités. ÉTAPE 2: En l'absence de données N-1, l'observation des mois de juillet/août ne révèle pas de pic saisonnier significatif pour ce produit bio premium. ÉTAPE 3: La fréquence s'est stabilisée sur un cycle de 14 à 21 jours. Nous sommes aujourd'hui à J+14 de la dernière commande (09/09), ce qui correspond à la borne basse du cycle de réapprovisionnement. ÉTAPE 4: La moyenne de fond est de 4.4u. En suivant une approche conservatrice pour éviter le surstockage d'un produit spécifique (bio/thym-romarin), une commande de 4 unités est préconisée, ce qui correspond au volume de la dernière livraison.

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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 4u (confidence: medium)
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

## False Positives (7)

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -5.5u (-60j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 12 | Stock prédit: -6.9u (-60j restants) → prédit 12u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:24:50.118Z*
