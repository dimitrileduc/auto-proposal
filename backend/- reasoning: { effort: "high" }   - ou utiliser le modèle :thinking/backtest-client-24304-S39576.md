# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S39576
- **Date commande** : 2025-10-06 09:27:30
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 30
- **Tokens**: 29,202 input + 10,143 output = 39,345 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 56.3% | 32 produits prédits, 18 corrects |
| **Rappel** | 100.0% | 18 produits réels, 18 détectés |
| **F1-Score** | 72.0% | Score équilibré global |

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
| **MAE** | 0.22 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 14.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 19.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 14 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (18)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de 28 jours (Lundi)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre un comportement d'achat extrêmement régulier malgré le faible historique : une commande unique d'une unité exactement tous les 28 jours (les lundis 25/08 et 22/09). ÉTAPE 1: Aucune valeur aberrante n'est détectée, la demande de fond est de 1u. ÉTAPE 2: Absence de données N-1, mais le produit (limonade bio) pourrait faiblir en octobre ; toutefois, la stabilité actuelle prime. ÉTAPE 3: La tendance est parfaitement stable. ÉTAPE 4: Bien que nous soyons dimanche (J-1 par rapport au prochain cycle attendu le 06/10), le besoin de réapprovisionnement pour maintenir le stock de fond est de 1 unité. Une approche conservatrice est maintenue car il n'y a aucun signal de croissance ou de stockage de précaution.

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel identifié (tous les derniers lundis du mois)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive identifiée (2u en août, 1u en septembre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Les deux points de données sont cohérents avec une demande de fond B2B faible, aucun outlier détecté. Étape 2 (Saisonnalité) : Pas de données N-1 pour confirmer un pic estival ou automnal, impact considéré comme neutre. Étape 3 (Tendance) : Le volume a diminué de 50% entre août et septembre. Le cycle de commande semble être de 28 à 30 jours, calé sur le lundi. La commande actuelle intervient le dimanche 5 octobre, soit seulement 13 jours après la précédente, brisant le cycle mensuel habituel. Étape 4 (Recommandation) : Étant donné la faible fréquence, la baisse de volume récente et l'intervalle de temps raccourci, une approche conservatrice de 1 unité est préconisée pour éviter le surstockage inutile d'une boisson bio à faible rotation sur cette période de l'année (octobre). Il est recommandé d'attendre le cycle habituel de fin de mois pour un volume supérieur sinon nécessaire pour le stock de sécurité immédiat si la rupture est imminente le dimanche soir avant le lundi de livraison habituel par ailleurs possiblement l'origine de la commande anticipée d'une journée par rapport au cycle mensuel standard (dernier lundi du mois vs début du mois en cours). On restera sur 1u par précaution maximale au vu du peu de données historiques exploitables (Confidence LOW). Aucun stock ne semble nécessaire pour augmenter cette commande car on observe une baisse du volume sur l'unique comparaison disponible (2u -> 1u). On réapprovisionne donc sur la base de la dernière quantité observée sans prendre de risque supplémentaire sur un produit qui semble moins sollicité en automne qu'en plein été fin août. On optera pour le maintien d'une unité à titre préventif ou de service client constant (Minimum Order Quantity induite par l'activité).

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28 jours), commande le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite sur les deux derniers mois avec une commande unitaire (1u) passée exactement toutes les 4 semaines le lundi. Bien qu'il n'y ait pas de données N-1, la stabilité de la demande de fond est confirmée. La commande actuelle intervient un dimanche, soit 27 jours après la précédente, s'inscrivant parfaitement dans le cycle de réapprovisionnement mensuel de l'acheteur. Étant donné le faible volume et la stabilité, une quantité de 1 unité est recommandée pour maintenir le stock sans risque de sur-stockage sur cette référence à faible rotation.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4.25u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours) le lundi
- **Saisonnalité**: none
- **Tendance**: Légère baisse (moyenne glissante 5u -> 4u)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'analyse montre un rythme de commande extrêmement régulier toutes les deux semaines (un lundi sur deux). La commande de 8u en juillet est écartée comme outlier (stockage d'été ou événement ponctuel). La moyenne filtrée sur les 4 dernières itérations est de 4,25u. On observe une légère tendance à la baisse sur les trois dernières commandes (6, 5, 3). Comme nous sommes dimanche et que la dernière commande date du 22 septembre (il y a exactement 13 jours), le réapprovisionnement doit avoir lieu pour le cycle de demain. Une quantité de 4 unités est recommandée pour s'aligner sur la demande de fond tout en restant conservateur face à la tendance baissière récente.

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours), le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 3 unités
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande extrêmement régulier toutes les deux semaines (le lundi). ÉTAPE 1: La commande de 6u le 25/08 est identifiée comme un outlier (double du volume habituel) et ramenée à la demande de fond. ÉTAPE 2: Aucune donnée N-1 n'est disponible, mais la stabilité récente suggère une faible saisonnalité immédiate. ÉTAPE 3: La tendance est stable à 3 unités sur les deux dernières occurrences. ÉTAPE 4: La date actuelle (dimanche 05/10) correspond exactement à l'échéance du cycle de 14 jours par rapport à la dernière commande du 22/09. On recommande donc la quantité nominale de 3 unités pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours) le lundi
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité (moyenne 2.8u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur n'excède le double de la moyenne (moyenne = 2.8u, max = 5u). Toutes les données sont conservées pour le calcul de la demande de fond. ÉTAPE 2 (Saisonnalité): Absence de données N-1, cependant le produit (chips bio) présente une consommation régulière. ÉTAPE 3 (Tendance): Le rythme de commande est extrêmement rigoureux (exactement tous les 14 jours, sauf un saut en juillet). La dernière commande était le 22/09, le cycle prévoyait une commande le 06/10 (lundi). La demande actuelle du 05/10 (dimanche) s'inscrit parfaitement dans ce cycle bimensuel. ÉTAPE 4 (Recommandation): La moyenne glissante est de 2.8 unités. Compte tenu de la stabilité du cycle et de la nature du produit, on arrondit à l'entier supérieur pour couvrir les 14 prochains jours.

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.75u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours) le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 3u
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande extrêmement régulier toutes les deux semaines le lundi. ÉTAPE 1: La commande de 5u du 25/08 est traitée comme un outlier léger (pic isolé), ramenant la moyenne de fond à 2.75u (basée sur les commandes de 2u et 3u). ÉTAPE 2: Aucune donnée N-1 n'est disponible, mais la stabilité récente suggère une absence d'impact saisonnier fort sur ce produit bio de niche. ÉTAPE 3: La tendance est stable avec une récurrence stricte de 14 jours. ÉTAPE 4: La dernière commande ayant eu lieu le 22/09, le prochain créneau logique est le lundi 06/10. La demande actuelle (dimanche 05/10) anticipe ce cycle de 24h. On recommande 3 unités pour maintenir le stock de fond habituel sans risque de sur-stockage.

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours) le lundi
- **Saisonnalité**: none
- **Tendance**: Stable avec légère oscillation (2u - 3u)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
L'analyse montre un rythme de commande très régulier toutes les deux semaines (le lundi). ÉTAPE 1: La commande de 5u en juillet est traitée comme un outlier (Pic isolé pré-vacances ou promotion). La moyenne de fond après retrait est de 2.25u. ÉTAPE 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit semble stable sur l'été/rentrée. ÉTAPE 3: La tendance est stable, alternant entre 2u et 3u. Le cycle de 14 jours est respecté (dernière commande le 22/09, nous sommes le 05/10, soit 13 jours après). ÉTAPE 4: La date actuelle étant un dimanche, il s'agit d'une commande d'anticipation pour le cycle habituel du lundi. Une quantité de 2u est recommandée pour maintenir le stock sans sur-stockage, restant conservateur face à l'absence d'historique long.

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ) le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec un léger ralentissement de volume vs juillet
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les quantités (2-3u) sont cohérentes pour un produit organique B2B. Demande de fond établie à 2u. ÉTAPE 2: Absence de données N-1, mais la stabilité estivale/automnale suggère une faible saisonnalité immédiate. ÉTAPE 3: Le pattern est extrêmement régulier (tous les deux lundis). La dernière commande date du 22/09, soit il y a exactement 13 jours. La commande du 05/10 (dimanche) s'inscrit parfaitement dans le cycle de 14 jours (prévu normalement le lundi 06/10). ÉTAPE 4: La tendance est stable à 2 unités par commande depuis août. Recommandation conservatrice de 2 unités pour maintenir le rythme bimensuel sans sur-stockage.

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours environ) le lundi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (passant de 2-3u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont faibles et cohérents. Étape 2: La saisonnalité N-1 montrait une activité légèrement plus soutenue en automne (3u en sept/nov), mais l'impact reste faible. Étape 3: On observe une tendance baissière marquée sur les 3 derniers mois, se stabilisant à 1 unité toutes les deux semaines. Étape 4: La date actuelle du 05/10 (dimanche) correspond à l'échéance du cycle de 14 jours constaté en septembre (dernière commande le 22/09). Compte tenu de la stabilité de la demande récente à 1u et de la volonté de ne pas sur-stocker un produit en baisse de volume, la recommandation est de 1 unité.

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours) le lundi
- **Saisonnalité**: weak
- **Tendance**: Baisse significative (-66% vs N-1) stabilisée à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre une transition claire d'un volume historique de 3u (2024) vers une demande stabilisée de 1u toutes les deux semaines depuis juillet 2025. Aucun outlier majeur n'est détecté récemment, le pic de 4u en début 2024 étant trop ancien. La saisonnalité N-1 suggérait un maintien des volumes en octobre, mais la tendance récente prime : le produit suit désormais un rythme bimensuel strict de 1u. La dernière commande datant du 22 septembre, le cycle de 14 jours désigne le lundi 6 octobre (demain) comme date de réapprovisionnement logique pour 1 unité.

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ) le lundi
- **Saisonnalité**: weak
- **Tendance**: Stable mais volume réduit par rapport à N-1
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune promotion massive détectée, mais la commande de 1u le 08/09 est considérée comme un outlier bas (correction de stock possible). La demande de fond s'établit à 2.5u sur la période récente. ÉTAPE 2: La saisonnalité est faible; bien que les tartinables d'aubergine puissent être estivaux, les volumes N-1 étaient stables entre septembre et novembre (4-5u). ÉTAPE 3: On observe un changement de rythme: passage d'un cycle mensuel le mardi en 2024 à un cycle bimensuel strict le lundi en 2025. Le volume unitaire a baissé (moyenne de 4.3u en N-1 vs 2.5u en 2025). ÉTAPE 4: La dernière commande date du 22/09 (il y a 13 jours). Le cycle de 14 jours identifié suggère une commande nécessaire ce dimanche ou lundi. En restant conservateur face à la baisse de volume par rapport à l'an dernier, une quantité de 2u est recommandée.

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 28-30 jours le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u/mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite sur les deux derniers mois avec une commande de 1 unité tous les lundis du début de deuxième semaine du mois (08/09 et 11/08). ÉTAPE 1: Aucune donnée aberrante détectée, la demande de fond est de 1u. ÉTAPE 2: Données N-1 absentes, mais le produit est stable sur la période récente. ÉTAPE 3: La tendance est strictement plate (1u). ÉTAPE 4: Bien que la commande tombe un dimanche au lieu du lundi habituel, le cycle de réapprovisionnement mensuel arrive à échéance. Compte tenu du faible volume unitaire, le risque de surstockage est nul et la nécessité de maintien en rayon justifie l'unité habituelle.

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-hebdomadaire (tous les 14 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u toutes les deux semaines
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les commandes sont strictement linéaires à 1 unité. Étape 2: Aucune donnée N-1 disponible, mais la régularité du produit suggère une consommation de fond stable sans pic saisonnier immédiat. Étape 3: Le cycle est de 14 jours (bi-mensuel). La dernière commande date du 08/09, soit il y a 27 jours. Une rupture de rythme est observée (commande manquante attendue fin septembre). Étape 4: La demande actuelle (dimanche) précède le jour habituel (lundi), confirmant le besoin de réapprovisionnement pour couvrir le cycle manqué et le cycle à venir. Une recommandation de 1 unité respecte la consommation habituelle tout en évitant le surstockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u par cycle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier toutes les deux semaines le lundi (8/09, 25/08, 11/08). Aucune donnée N-1 n'est disponible pour confirmer une saisonnalité, mais le produit semble stable sur la période récente. La dernière commande datant du 8 septembre, un réapprovisionnement est attendu pour début octobre. La moyenne est de 1,33 unités par commande. Étant donné l'absence d'historique long et le faible volume unitaire, une approche conservatrice de 1 unité est recommandée pour éviter le surstockage, tout en respectant la cadence bimensuelle observée.

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel fixe, environ tous les 28 jours (2ème lundi du mois)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère fluctuation (1u-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un rythme de commande extrêmement régulier : une fois par mois, spécifiquement le deuxième lundi de chaque mois. ÉTAPE 1: Aucune valeur aberrante n'est détectée, les volumes de 1 et 2 unités constituent la demande de fond. ÉTAPE 2: Pas de données N-1 disponibles, mais la stabilité estivale (juillet/aout) suggère une faible saisonnalité sur ce produit bio. ÉTAPE 3: La tendance est stable avec une moyenne de 1,33 unités par commande. ÉTAPE 4: Nous sommes le dimanche 5 octobre, soit la veille du 'lundi théorique' de commande (6 octobre). Vu la faible rotation et l'absence de tendance haussière, une commande de 1 unité est recommandée pour couvrir le mois d'octobre tout en évitant le sur-stockage.

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-mensuel, cycle de 14 jours (lundi)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande de fond est de 1 unité. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: Le pattern identifié montre une commande toutes les deux semaines le lundi. La dernière commande date du 25 août, suggérant un arrêt de l'activité sur ce produit en septembre ou un stock de sécurité encore suffisant. Étape 4: La date actuelle étant un dimanche (veille du jour de commande habituel), et malgré l'absence de commande en septembre, le volume historique est très faible et constant. On recommande 1 unité pour maintenir le stock sans risque de sur-stockage massif, compte tenu du manque de visibilité récent.

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier moyen d'environ 30 à 45 jours, majoritairement le lundi ou mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec ralentissement de fréquence
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La quantité de 3u en mars 2024 est isolée; la demande de fond est solidement établie à 2u par commande. ÉTAPE 2 (Saisonnalité): Aucune saisonnalité marquée n'est visible sur les données N-1; le produit (Pomme Raifort) semble être un article de fond de rayon. ÉTAPE 3 (Tendance): La tendance est stable en volume (2u constants), mais la fréquence a ralenti (aucune commande en septembre 2025 alors qu'une commande a eu lieu en septembre 2024). L'absence de commande depuis fin août suggère un besoin imminent. ÉTAPE 4 (Recommandation): On maintient la quantité standard de 2u pour couvrir le cycle de 4-6 semaines sans risque de sur-stockage sur un produit à rotation lente.

</details>




### 📊 Données d'Input LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 5u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 3u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 4u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 5u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 3u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 2u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-07-14 11:44:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 4u
- 2024-06-11 06:44:54: 2u
- 2024-05-13 13:42:50: 4u
- 2024-04-15 11:54:11: 2u
- 2024-03-19 14:47:15: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 3u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 2u
- 2024-06-11 06:44:54: 3u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 3u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 2u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 4u
- 2024-08-06 09:10:28: 5u
- 2024-06-11 06:44:54: 4u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 5u
- 2024-03-19 14:47:15: 5u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 5u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 2u
- 2024-05-13 13:42:50: 2u
- 2024-03-19 14:47:15: 3u
- 2024-02-09 08:53:20: 2u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.6u (20j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.6u (-4j restants) → prédit 2u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: 0.6u (15j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock prédit: -1.1u (-13j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.8u (-18j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -2.3u (-27j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 1 | Stock prédit: -1.3u (-30j restants) → prédit 1u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: -1.0u (-26j restants) → prédit 2u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -1.0u (-26j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.7u (-41j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-26j restants) → prédit 1u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Stock prédit: -1.6u (-68j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:01:44.839Z*
