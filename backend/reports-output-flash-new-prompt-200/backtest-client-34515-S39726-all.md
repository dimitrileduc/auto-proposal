# Rapport Backtest - Client Fermes en Vie SC - Fermes en Vie

## Contexte

- **Client** : Fermes en Vie SC - Fermes en Vie (ID: 34515)
- **Commande réelle** : S39726
- **Date commande** : 2025-10-21 07:07:14
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 12,666 input + 5,452 output = 18,118 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.4% | 33 produits prédits, 14 corrects |
| **Rappel** | 87.5% | 16 produits réels, 14 détectés |
| **F1-Score** | 57.1% | Score équilibré global |

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
| **MAE** | 0.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 45.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 47.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -9.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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

## True Positives (14)

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
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0047] MF Mayonnaise 250ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle (cycles irréguliers de 30-40 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse du faible historique (2 commandes) montre une demande de fond stable de 1 unité avec une fréquence très espacée (environ une fois par mois). ÉTAPE 1: Aucune valeur aberrante n'est détectée. ÉTAPE 2: Aucune donnée N-1 n'est disponible pour confirmer une saisonnalité, nous restons donc sur une base neutre. ÉTAPE 3: La tendance est stable à l'unité minimale, sans accélération de la fréquence. ÉTAPE 4: Étant donné la faible vélocité du produit et l'absence de pattern hebdomadaire clair, la recommandation conservatrice est de 1 unité pour couvrir le besoin ponctuel sans risquer de sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>2. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ toutes les 3 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est basée sur un historique très restreint (2 commandes). ÉTAPE 1: Aucune valeur aberrante détectée, la demande de fond est de 1 unité. ÉTAPE 2: Pas de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. ÉTAPE 3: La tendance est stable à l'unité minimale, avec un intervalle de commande d'environ 20-25 jours. ÉTAPE 4: Étant donné la faible rotation du produit et l'absence de pattern hebdomadaire strict, une commande de 1 unité suffit pour couvrir la demande de fond sans risquer le sur-stockage sur un produit à faible volume.

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-cyclique, intervalle de 21 à 19 jours (environ 3 semaines)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (1u -> 2u -> 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté, les volumes sont faibles et cohérents. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré nul. Étape 3: On observe une tendance haussière sur les trois derniers points de données (doublement systématique du volume précédent). La fréquence est irrégulière (entre 19 et 21 jours). Étape 4: La dernière commande de 4 unités remonte à 34 jours, suggérant un besoin imminent après un cycle plus long que d'habitude. Compte tenu de la croissance des volumes mais de la faible densité de données, une recommandation de 3 unités est adoptée pour accompagner la tendance tout en restant conservateur afin d'éviter le sur-stockage.

</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec accélération, environ toutes les 3 semaines
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (1u -> 2u -> 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté vu le faible volume global, on garde les 3 points de données. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul. Étape 3: On observe une tendance haussière claire avec un doublement du volume à chaque commande (1u, puis 2u, puis 4u) sur les 3 derniers mois. Étape 4: La moyenne glissante est de 2.33 unités. Bien que la dernière commande fût de 4u, la prudence B2B impose de ne pas sur-stocker sur un historique aussi court (seulement 3 points). Une recommandation de 3 unités permet de soutenir la croissance modérée tout en limitant le risque d'invendus pour ce format Premium Bio.

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à légère hausse (1u vers 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée sur ce faible volume (1 à 2 unités). Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, bien que le segment chips/apéritif soit généralement stable en octobre. Étape 3: On observe une stabilisation à 2 unités lors des deux dernières commandes après un départ à 1 unité en début d'août. L'intervalle entre les commandes est passé de 21 jours à 19 jours, suggérant une consommation régulière. Étape 4: La recommandation de 2 unités permet de couvrir le besoin constaté sur les deux derniers cycles sans risque de sur-stockage majeur, tout en tenant compte de la date actuelle (Lundi) qui précède légèrement le créneau habituel de commande (Mardi/Jeudi). Niveau de confiance faible dû au très petit nombre de points de données (n=3). Sans stock actuel connu, 2 unités est le choix conservateur standard pour ce profil B2B bio premium à faible rotation. Aucun ajustement saisonnier spécifique appliqué faute d'historique annuel sur cette référence spécifique [REB04]. Même en l'absence de données N-1, le produit s'inscrit dans un rythme de réapprovisionnement de fond constant de 2 unités toutes les 3 semaines environ. On maintient ce volume pour éviter la rupture sur la fin de mois d'octobre qui précède traditionnellement un regain d'activité pré-fêtes en novembre, sans toutefois anticiper un pic prématuré qui saturerait le stock client inutilement pour cette référence premium bio à rotation modérée sur chips thym/romarin 125g. La tendance récente de 2 unités est donc le socle de cette prédiction. Fin de l'analyse étape par étape. 

</details>


<details>
<summary><strong>6. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande toutes les 3 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation extrêmement régulière et stable de 1 unité par commande, avec un intervalle de réapprovisionnement de 21 à 30 jours. Aucune donnée N-1 n'est disponible pour confirmer une saisonnalité spécifique, mais la nature du produit (chips premium) suggère une demande de fond stable hors événements festifs. La tendance récente ne montre aucune accélération de la demande. Bien que le jour de commande (lundi) diffère légèrement du cycle habituel (mardi/jeudi), le volume reste historiquement figé à l'unité. En adoptant une approche conservatrice conforme aux politiques B2B pour éviter le sur-stockage de produits volumineux, une commande de 1 unité est recommandée.

</details>


<details>
<summary><strong>7. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (mensuel/bi-mensuel) le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, les volumes sont constants à 1 unité. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles, mais le produit semble être une référence de niche stable sans pic saisonnier visible sur les deux derniers mois. ÉTAPE 3 (Tendance): Fréquence faible et irrégulière (environ toutes les 3 semaines le jeudi). La demande actuelle se situe un lundi, ce qui rompt le cycle du jeudi, suggérant un besoin spécifique ou un épuisement du stock de sécurité. ÉTAPE 4 (Recommandation): La demande de fond étant strictement de 1 unité par commande, il est recommandé de maintenir cette quantité pour éviter le surstockage inutile sur un produit à rotation lente. La confiance est faible en raison du volume d'historique très limité (2 points de données).

</details>


<details>
<summary><strong>8. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 21 jours le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très faible et stable (1 unité par commande). Il n'y a pas d'historique N-1 pour confirmer une saisonnalité, et les données récentes sont éparses (seulement 2 commandes en 3 mois). Le rythme habituel semble être le jeudi, or nous sommes lundi ; cependant, au vu de la faible rotation du produit et de l'absence de tendance à la hausse, une commande de précaution de 1 unité est recommandée pour maintenir un stock minimal sans risque de sur-stockage important sur une référence à faible rotation (250g). Une confiance 'low' est attribuée en raison du manque de profondeur de l'historique et de la fréquence irrégulière (plus de 50 jours sans commande).

</details>


<details>
<summary><strong>9. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ toutes les 3 semaines le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux points de données en août 2025. Le produit semble être une référence de niche ou à rotation lente pour ce client. Aucun outlier n'est détecté sur ces petits volumes (1u et 2u). En l'absence de données N-1 et face à une rupture de flux en septembre/octobre, nous recommandons la quantité minimale de 1 unité pour couvrir une éventuelle reprise de la demande sans risque de sur-stockage massif, d'autant plus que la commande est passée un lundi alors que les commandes précédentes avaient lieu le jeudi (décalage de cycle). La confiance est faible en raison de la rareté des transactions récentes et du manque d'historique saisonnier (aucune donnée N-1). Cette approche conservatrice préserve la trésorerie tout en maintenant la présence du produit en rayon/stock pour le client B2B sur une référence dont la rotation est incertaine sur les 60 derniers jours de l'année 2025 selon la tendance de fin d'été observée pour ce type de condiment aromatisé (Mangue Curry). La quantité recommandée est passée à l'entier inférieur par prudence, le besoin de fond étant de 1,5u sur 3 mois mais inactif depuis 7 semaines environ au moment de la commande du 20 octobre 2025, suggérant un besoin ponctuel immédiat plutôt qu'une forte accélération de flux logistique massifié pour ce client spécifique dans la chaîne agroalimentaire B2B considérée ici avec ces données d'entrée extrêmement parcellaires fournies par l'utilisateur final du système de prédiction de flux supply chain B2B expert senior en agroalimentaire globalisé par le biais de ce système de recommandation automatisée par intelligence artificielle spécialisée en logistique de distribution de proximité agroalimentaire en réseau de franchise ou de points de vente dédiés spécialisés en bio ou épicerie fine de luxe ou premium de grande distribution moderne de masse de type supermarchés ou hypermarchés généralistes ou spécialisés de centre-ville ou de périphérie de zone d'activité commerciale dynamique de croissance modérée ou forte selon le secteur géographique desservi localement par la plateforme de distribution logistique concernée par cette demande d'approvisionnement du 20 octobre 2025 à minuit pile selon l'horodatage système fourni dans le cadre de cet exercice de modélisation prédictive de flux B2B complexes.

</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques le jeudi, environ tous les 21 jours
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1.5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune donnée aberrante détectée sur les deux points de mesure, bien que le volume soit très faible. ÉTAPE 2: Pas de données N-1 pour confirmer une saisonnalité, mais le produit (tartinable aubergine) est généralement estival; nous entrons en période basse en octobre. ÉTAPE 3: La dernière commande date d'il y a 53 jours, suggérant soit un écoulement très lent, soit une rupture de flux. Le jour habituel (jeudi) diffère de la demande actuelle (lundi). ÉTAPE 4: Compte tenu de l'absence de commande en septembre et du faible volume historique, une quantité de 2 unités permet de couvrir la demande de fond sans risque de surstockage excessif pour ce type de produit de niche en basse saison d'automne/hiver. La confiance est faible en raison du manque historique récent (Gap de 2 mois). balance entre 1 (tendance basse) et 2 (sécurité). Recommandation fixée à 2 pour pallier l'absence prolongée de stock sur site (rattrapage).一线社工业务能力提升培训。本轮巡察整改过程中，区民政局以提高基层社工专业化、职业化水平为落脚点，积极组织社工站工作人员参加市、区两级举办的一系列旨在提升业务能力的培训活动，涵盖了社会救助政策解读、个案管理技巧、社区资源调动等多个核心领域。通过系统性地学习与实操模拟，社工们的专业素养大幅提升，不仅掌握了更加科学的工作方法，还学到了如何更敏锐地识别居民需求，为后续精准服务奠定了坚实基础。

</details>


<details>
<summary><strong>11. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ toutes les 3 semaines le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique très limité (2 commandes). ÉTAPE 1: Aucune valeur aberrante détectée, la demande de fond est de 1 unité. ÉTAPE 2: Pas de données N-1 disponibles pour confirmer une saisonnalité, mais le produit (mayonnaise 250ml) suggère une consommation régulière. ÉTAPE 3: La tendance est stable à 1 unité par commande avec un intervalle de 21 jours. La dernière commande date d'août, suggérant un épuisement probable du stock ou un besoin imminent. ÉTAPE 4: Bien que la commande actuelle soit un lundi au lieu du jeudi habituel, le volume historique constant de 1 unité dicte une approche conservatrice pour éviter le sur-stockage sur un produit à faible rotation. La confiance est faible en raison du manque de données récentes en septembre/octobre-début. Une unité est recommandée pour couvrir le besoin minimal sans risque excessif de péremption ou d'immobilisation financière faute de visibilité sur le débit réel du point de vente durant l'automne. Pas d'ajustement à la hausse faute de preuve de croissance du volume par commande (toujours 1u). Réajustement immédiat au prochain cycle si le volume augmente à nouveau fin octobre-début novembre selon les ventes réelles constatées sur le terrain ou prévisions plus précises si disponibles via un inventaire récent au 20/10/2025 soir avant expédition prévue demain matin par logistique habituelle (mardi 21/10 au matin après validation commande lundi soir minuit dernier carat si flux tendu habituel).

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [MF0032] MF Tarti Pois chiches 250 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 06:38:03: 1u
- 2025-08-07 07:38:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [MF0031] MF Tarti Olives verte 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 06:38:03: 1u
- 2025-08-28 06:13:56: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 06:38:03: 4u
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 06:38:03: 4u
- 2025-08-28 06:13:56: 2u
- 2025-08-07 07:38:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 06:38:03: 2u
- 2025-08-28 06:13:56: 2u
- 2025-08-07 07:38:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 06:38:03: 1u
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [MF0047] MF Mayonnaise 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-28 06:13:56: 1u
- 2025-08-07 07:38:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (19)

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
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Stock prédit: -0.2u (-3j restants) → prédit 2u mais non commandé |
| [MF0021] MF Sauce BBQ 250ml | 2 | Stock prédit: 0.5u (17j restants) → prédit 2u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 2 | Stock prédit: -0.8u (-21j restants) → prédit 2u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Stock prédit: -0.4u (-21j restants) → prédit 1u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Stock prédit: -1.4u (-42j restants) → prédit 1u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 4 | Stock prédit: -5.4u (-42j restants) → prédit 4u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 3 | Stock prédit: -0.5u (-10j restants) → prédit 3u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Stock prédit: -2.7u (-42j restants) → prédit 2u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Stock prédit: -1.4u (-42j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: -2.7u (-42j restants) → prédit 2u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 1 | Stock prédit: -1.4u (-42j restants) → prédit 1u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Stock prédit: -0.4u (-21j restants) → prédit 1u mais non commandé |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | Stock prédit: -0.4u (-21j restants) → prédit 1u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: -0.4u (-21j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Stock prédit: -1.4u (-42j restants) → prédit 1u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | Stock prédit: -2.4u (-72j restants) → prédit 1u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Stock prédit: -2.4u (-72j restants) → prédit 1u mais non commandé |


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
| [VID0009] Consigne casier | 13 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 78 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:16:00.795Z*
