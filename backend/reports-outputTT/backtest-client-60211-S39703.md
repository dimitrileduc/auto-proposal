# Rapport Backtest - Client BIOK CORBAIS

## Contexte

- **Client** : BIOK CORBAIS (ID: 60211)
- **Commande réelle** : S39703
- **Date commande** : 2025-10-16 06:40:28
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 25
- **Tokens**: 29,629 input + 45,015 output = 74,644 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 41.7% | 24 produits prédits, 10 corrects |
| **Rappel** | 83.3% | 12 produits réels, 10 détectés |
| **F1-Score** | 55.6% | Score équilibré global |

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
| **MAE** | 1.10 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 84.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 90.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 53.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 1 | 3.0 | 300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 32 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse de volume (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une fréquence de commande régulière avec un intervalle moyen de 32 jours (35j puis 29j). La dernière commande ayant eu lieu le 9 octobre 2025, la prochaine est estimée autour du 10 novembre 2025, ce qui se situe à l'intérieur de la fenêtre de prédiction de 30 jours. Bien que la dernière quantité commandée soit descendue à 1u, le volume historique récurrent sur les mois précédents était de 2u. En l'absence de données N-1 pour confirmer une saisonnalité, je préconise la quantité standard de 2 unités pour la prochaine occurrence unique.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable d'environ 21 jours (intervalles entre 14 et 29 jours)
- **Saisonnalité**: none
- **Tendance**: Stable en fréquence, volumes en dents de scie
- **Outliers détectés**: 5u, 6u

**🧠 Raisonnement LLM:**
Étape 1 : Nettoyage - Les commandes de 5u et 6u sont traitées comme des pics de stockage, la demande de fond se situant entre 1u et 3u. Étape 2 : Saisonnalité - Absence de données N-1 pour confirmer un impact saisonnier, analyse basée sur le comportement récent. Étape 3 : Tendance - Le client commande régulièrement (tous les 21 jours en moyenne). La dernière commande date du 09/10 (1u), précédée d'une commande forte le 10/09 (6u). Étape 4 : Calcul - Avec un cycle moyen de 21 jours, la prochaine commande est prévue aux alentours du 30 octobre 2025, soit dans la fenêtre des 30 jours. La quantité recommandée de 3u correspond à la moyenne lissée des commandes précédentes pour assurer le maintien du stock sans sur-stockage après le petit réapprovisionnement de début octobre.

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel régulier (intervalle moyen de 14.5 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive du volume par commande (6u -> 2u -> 1u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'analyse montre une régularité chronologique forte avec un intervalle moyen de 14,5 jours entre les commandes. La dernière commande datant du 9 octobre, la prochaine est statistiquement prévue autour du 23-24 octobre, ce qui se situe dans la fenêtre de 30 jours. Après retrait de la commande aberrante de 6u (probablement un stockage initial ou une promotion de septembre), la demande de fond se stabilise à une moyenne de 2 unités. Malgré une baisse ponctuelle à 1u lors de la dernière commande, le cycle prévoit un réapprovisionnement de 2 unités pour maintenir le roulement habituel.

</details>


<details>
<summary><strong>4. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier, moyenne 42 jours, dernier intervalle 58 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse de la fréquence de commande et de volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une diminution de la fréquence de réapprovisionnement, le cycle étant passé de 27 jours en été à 58 jours entre août et octobre. La dernière commande étant très récente (9 octobre 2025, soit il y a 6 jours), et le cycle moyen se situant à 42 jours, la prochaine commande est statistiquement prévue autour du 20 novembre. Même en utilisant l'intervalle le plus court observé (27 jours), une commande interviendrait le 5 novembre, mais le ralentissement marqué de la demande et la saisonnalité défavorable pour les boissons rafraîchissantes en automne (période de fin octobre) suggèrent qu'aucune commande ne sera passée avant la fin de la fenêtre de prédiction (14 novembre).

</details>


<details>
<summary><strong>5. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-hebdomadaire (14 jours) observé le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle initial de 14 jours (intervalle entre le 27/08 et le 10/09) avec une quantité constante de 1 unité. Bien que le client ait manqué les deux derniers créneaux théoriques (le 24/09 et le 08/10), le délai actuel de 35 jours depuis la dernière livraison suggère un besoin de réapprovisionnement imminent dans la fenêtre des 30 prochains jours. En l'absence de données N-1 et avec seulement deux points de données, la confiance est faible, mais la tendance unitaire est stable.

</details>


<details>
<summary><strong>6. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel identifié (intervalle de 14 jours le mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite sur un cycle de 14 jours (commandes les mercredis 27/08 et 10/09) avec une quantité constante d'une unité. Nous sommes actuellement le 15/10/2025, soit 35 jours après la dernière commande enregistrée. Le client a sauté les échéances théoriques du 24/09 et du 08/10. Compte tenu du délai écoulé dépassant largement le cycle habituel, un réapprovisionnement pour la prochaine commande est imminent et très probable dans la fenêtre des 30 prochains jours. La quantité recommandée suit strictement l'historique de fond sans cumul.

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel (14-15j) identifié en août, cycle rompu par un volume de commande triple le 10/09
- **Saisonnalité**: none
- **Tendance**: Instable - Hausse soudaine suivie d'un arrêt prolongé (>30 jours)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle initial de 15-27 jours avec une consommation de fond de 2 unités. La dernière commande de 6u (10/09) était un outlier qui a probablement servi à couvrir les besoins des 30 à 45 jours suivants, expliquant l'absence de commande depuis 35 jours. En supposant un épuisement imminent de ce stock, une commande de réapprovisionnement est prévue dans les 30 prochains jours. La quantité recommandée de 4u est un compromis entre la baseline historique (2u) et le besoin de rattrapage après une longue période d'inactivité, tout en restant prudente par rapport au pic exceptionnel de 6u.

</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 5u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 3.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 3u (150.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Semi-mensuel (intervalles de 14, 15 et 27 jours), principalement le mercredi
- **Saisonnalité**: none
- **Tendance**: Volume unitaire en hausse (6u) malgré un espacement récent du rythme
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle médian de 15 jours. La dernière commande datant d'il y a 35 jours (10/09), le client est largement au-delà de son cycle de réapprovisionnement habituel, ce qui rend une commande très probable dans les prochains jours pour reconstituer le stock. Bien que la moyenne soit de 3.25u, les commandes significatives (hors dépannage de 1u) se situent entre 5u et 6u. Après une absence de commande de plus d'un mois, on retient la borne haute de 5 unités pour la prochaine commande unique.

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Initialement bi-mensuel (15 jours) en août, suivi d'une période d'inactivité
- **Saisonnalité**: none
- **Tendance**: Baisse progressive / Rupture de cycle (49 jours sans commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible (1u) avec un intervalle initial de 15 jours entre le 12 et le 27 août 2025. Depuis cette date, aucune commande n'a été passée pendant 49 jours. En tenant compte du cycle observé, trois commandes auraient dû avoir lieu (aux alentours du 11/09, 26/09 et 11/10). L'absence totale d'activité depuis 7 semaines pour un produit à si faible rotation suggère un arrêt de la consommation ou un besoin ponctuel non renouvelé. En application de la règle de cycle habituel, le signal est insuffisant pour prédire une commande dans les 30 prochains jours.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 2u
- 2025-08-06 06:21:49: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-22 11:23:24: 2u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 2u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (14)

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
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.7u (14j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.7u (11j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 2 | Stock prédit: 0.8u (25j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: 0.6u (7j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.8u (24j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: 0.8u (19j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | Stock prédit: 0.3u (8j restants) → prédit 2u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: -1.5u (-20j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 2 | Stock prédit: -0.6u (-19j restants) → prédit 2u mais non commandé |


---

## False Negatives (2)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: 0.8u (18j) mais client a commandé 1u |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.6u (-18j) mais client a commandé 1u |


---

*Rapport généré automatiquement le 2025-12-18T18:56:32.947Z*
