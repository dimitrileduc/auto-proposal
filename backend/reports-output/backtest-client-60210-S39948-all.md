# Rapport Backtest - Client BIOK BOIS DE VILLERS

## Contexte

- **Client** : BIOK BOIS DE VILLERS (ID: 60210)
- **Commande réelle** : S39948
- **Date commande** : 2025-10-28 07:20:57
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 24,591 input + 35,200 output = 59,791 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 72.0% | 25 produits prédits, 18 corrects |
| **Rappel** | 78.3% | 23 produits réels, 18 détectés |
| **F1-Score** | 75.0% | Score équilibré global |

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
| **MAE** | 0.94 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 48.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 47.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 2 | 4.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 0 | 5 | 5.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JOY07] JOY! Organic Fig Jam 370g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (15 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel avec un cycle moyen d'environ 29 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse de volume (4u vers 3u) et ralentissement du rythme
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: L'historique ne montre aucun outlier, les volumes sont constants entre 3 et 4 unités. ÉTAPE 2: Absence de données N-1, mais le produit (chips bio) présente généralement une demande de fond stable hors promotions. ÉTAPE 3: On observe une légère diminution du volume lors de la dernière commande (3u) et un allongement de l'intervalle entre les commandes (passant de 22 à 36 jours). ÉTAPE 4: La dernière commande date du 08/10/2025. En suivant le cycle moyen de ~30 jours, la prochaine commande est attendue autour du 07/11/2025, ce qui se situe bien dans la fenêtre de prédiction des 30 prochains jours. Nous prévoyons une quantité de 3 unités, alignée sur la commande la plus récente.

</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 29 jours (intervalles de 22 et 36 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse du volume unitaire (3u à 1u) et ralentissement de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES : 1. Pas d'outliers identifiés sur les 3 seules commandes disponibles. 2. Aucune donnée N-1 disponible pour évaluer la saisonnalité, bien que le parfum truffe puisse suggérer une hausse en fin d'année. 3. Le cycle moyen est de 29 jours. La tendance récente montre une diminution du volume (1u lors de la dernière commande le 08/10). 4. La prochaine commande est attendue théoriquement vers le 06 novembre (08/10 + 29 jours), ce qui tombe dans la fenêtre d'analyse. Compte tenu de la moyenne historique (2.33) et de la faiblesse du dernier volume, une recommandation de 2 unités est retenue pour une commande unique.

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 6u vs Médiane: 5u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5.33u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 4u (200.0%)
- 📉 **Erreur Médiane**: 3u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 29 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Légère hausse (passage de 5u à 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une grande régularité avec des intervalles de 22 et 36 jours (moyenne de 29 jours). La dernière commande ayant eu lieu le 08/10/2025, la prochaine est statistiquement prévue autour du 07/11/2025, soit dans la fenêtre d'analyse de 30 jours. Le volume est stable avec une légère progression à 6 unités lors de la dernière occurrence. Nous prédisons donc une commande unique de 6 unités pour maintenir cette tendance de fond, sans cumuler de commandes supplémentaires malgré la proximité de la fin du mois de novembre.

</details>


<details>
<summary><strong>4. [ORG09] ORGANICA crunchy fruit cerise 20g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier d'environ 36 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes de 1 unité avec un intervalle de 36 jours. La dernière commande ayant eu lieu le 08/10/2025, la prochaine commande théorique est attendue aux alentours du 13/11/2025. Cette date se situe dans la fenêtre d'analyse des 30 prochains jours (jusqu'au 26/11). Le volume étant extrêmement stable (1u), nous prédisons une commande unique de 1u. La confiance est faible en raison du très petit nombre de points de données (2 commandes).

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (moyenne 29 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse de volume (3u -> 1u) sur les deux dernières commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 29 jours. La dernière commande ayant eu lieu le 08/10, la prochaine est statistiquement attendue autour du 06/11, ce qui entre dans la fenêtre des 30 prochains jours. Les volumes sont très faibles et instables (1, 2 et 3 unités), sans outliers marquants. Bien que la tendance récente soit à la baisse (1 seule unité en octobre), la moyenne historique se situe à 2 unités. Je prévois donc une commande unique de 2 unités pour le début du mois de novembre. La confiance est faible en raison du très court historique (3 points de données) et de l'absence de données N-1.

</details>


<details>
<summary><strong>6. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle identifié d'environ 36 jours (intervalle entre les deux seules commandes)
- **Saisonnalité**: none
- **Tendance**: Baisse observée (de 3u à 1u) sur un historique très court
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique minimal de deux commandes. L'intervalle constaté entre les commandes du 02/09 et du 08/10 est de 36 jours. En appliquant ce cycle, la prochaine commande est projetée vers le 13 novembre 2025, ce qui l'inscrit dans la fenêtre des 30 prochains jours. Bien que la dernière commande fût de 1 unité, la moyenne des commandes (baseline) se situe à 2 unités. Étant donné la faible fréquence, on préconise une commande de 2 unités pour couvrir la demande du prochain mois.

</details>


<details>
<summary><strong>7. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 36 jours, commandes en début de mois (mardi/mercredi)
- **Saisonnalité**: none
- **Tendance**: Baisse de volume (de 4u à 1u) avec un rythme lent
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse se base sur seulement deux points de données. Un cycle de 36 jours a été identifié entre la commande du 02/09 et celle du 08/10. En projetant ce cycle, la prochaine commande devrait intervenir vers le 13 novembre 2025, ce qui se situe dans la fenêtre des 30 prochains jours. Bien que le volume soit passé de 4 à 1 unité, la moyenne se situe à 2,5. Compte tenu de la tendance incertaine et du faible historique, une recommandation prudente de 2 unités est préconisée pour la prochaine commande unique.

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 36 jours identifié
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes identiques de 2 unités espacées de 36 jours. La dernière commande ayant eu lieu le 8 octobre 2025, l'échéance théorique du cycle (dernière commande + intervalle de 36 jours) tombe le 13 novembre 2025, soit dans la fenêtre d'analyse des 30 prochains jours. Bien que les données soient limitées (confiance faible), la stabilité parfaite de la quantité (2u) permet de recommander ce volume pour la prochaine commande unique prévue.

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 0u vs Médiane: 6u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 5u (100.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 22 jours observé sur les données limitées (août à septembre)
- **Saisonnalité**: none
- **Tendance**: Inactivité prolongée (55 jours sans commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique restreint de deux commandes de 6 unités distantes de 22 jours. La dernière commande date du 2 septembre 2025. Au 27 octobre 2025, un intervalle de 55 jours s'est écoulé, ce qui représente plus de 2,5 fois le cycle habituel observé. Le client a manqué au moins deux cycles théoriques de réapprovisionnement. En l'absence de données de saisonnalité N-1 indiquant un pic en novembre ou d'une tendance à la hausse, la probabilité d'une commande dans les 30 prochains jours est considérée comme faible. La recommandation est donc de 0 (pas de commande prévue).

</details>


<details>
<summary><strong>10. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Un cycle initial de 22 jours a été observé, mais une rupture de rythme est constatée depuis 55 jours.
- **Saisonnalité**: none
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes identiques de 3 unités avec un intervalle de 22 jours. Cependant, aucune commande n'a été enregistrée depuis le 02/09 (soit 55 jours d'inactivité). Malgré ce ralentissement, le produit étant un article de fond de rayon bio, un réapprovisionnement de la quantité habituelle (3u) est fortement probable dans les 30 prochains jours pour reconstituer le stock. La confiance est faible en raison du faible volume de données et du délai important depuis la dernière commande.

</details>


<details>
<summary><strong>11. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé / Lente rotation. Intervalle initial de 22 jours, suivi d'une inactivité de 55 jours.
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (2-3u), rythme très irrégulier
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Pas d'outliers identifiés, les volumes sont faibles et cohérents avec un produit de niche (2-3 unités). Étape 2: Pas d'historique N-1 pour confirmer une saisonnalité, bien que le segment chips premium soit souvent plus actif en période estivale. Étape 3: Le client n'a pas commandé depuis le 2 septembre, soit un intervalle de 55 jours, alors que le premier intervalle enregistré était de 22 jours. Cela indique soit une rotation très lente, soit un arrêt potentiel de la référence. Étape 4: Malgré le dépassement du cycle initial, une commande de réapprovisionnement est statistiquement probable sous 30 jours pour éviter une rupture définitive si le produit reste au catalogue. On préconise 2 unités (dernière quantité connue) pour une commande unique.

</details>


<details>
<summary><strong>12. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle identifié d'environ 22 jours, bien qu'un saut de cycle soit observé actuellement (55 jours depuis la dernière commande).
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 commandes). Un cycle initial de 22 jours a été observé entre août et début septembre (11/08 au 02/09). Depuis, aucune commande n'a été enregistrée (55 jours de carence). Cependant, en projetant des cycles de 22 jours à partir de la dernière commande, la prochaine échéance théorique après les cycles 'sautés' tomberait aux alentours du 7 novembre 2025. Compte tenu de la stabilité absolue du volume (1u), on prévoit une commande de réapprovisionnement d'une unité dans les 30 prochains jours pour pallier l'absence prolongée de stock.

</details>


<details>
<summary><strong>13. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Signal insuffisant (commande unique isolée)
- **Saisonnalité**: none
- **Tendance**: Inexistante (absence d'activité depuis 8 semaines)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La recommandation est fixée à 0 car les données historiques sont insuffisantes pour établir une prévision fiable. Une seule commande de 1 unité a été enregistrée le 2 septembre 2025. Depuis cette date (il y a 55 jours), aucune activité n'a été relevée. En l'absence de données de l'année précédente (N-1) et sans cycle de réapprovisionnement identifiable (le délai actuel dépasse largement les cycles standards de l'agroalimentaire pour de faibles volumes), il est impossible de prédire une commande dans les 30 prochains jours. La faible quantité initiale (1u) suggérait probablement un test produit ou un besoin ponctuel non récurrent.

</details>


<details>
<summary><strong>14. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM: 0u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Un cycle initial de 22 jours a été observé entre les deux seules commandes connues (Août et Septembre).
- **Saisonnalité**: none
- **Tendance**: Baisse significative ou arrêt (55 jours sans commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre que le client commandait initialement 1 unité tous les 22 jours. Cependant, au 27 octobre, aucune commande n'a été passée depuis le 2 septembre, soit un silence de 55 jours. Ce délai représente 2,5 fois la durée du cycle habituel, ce qui indique une rupture nette de la tendance. Dans un contexte B2B, un tel écart suggère que le produit n'est plus en rotation régulière ou que le stock initial de septembre n'est pas encore écoulé (consommation très lente). Par conséquent, il est peu probable qu'une commande soit passée dans les 30 prochains jours.

</details>


<details>
<summary><strong>15. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande unique isolée (absence de cycle)
- **Saisonnalité**: none
- **Tendance**: Inexistante / Demande nulle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne présente qu'une seule commande de 1 unité enregistrée le 02 septembre 2025. Depuis plus de 55 jours, aucun réapprovisionnement n'a été observé, ce qui exclut l'existence d'un cycle mensuel ou hebdomadaire. Dans le secteur B2B, une commande unique de faible volume (1u) pour un produit type limonade s'apparente souvent à un échantillonnage ou un test produit non concluant pour le client. De plus, la saisonnalité pour les boissons fraîches en novembre est défavorable. Sans signal de récurrence, il est prédit qu'aucune commande n'aura lieu dans les 30 prochains jours.

</details>




### 📊 Données d'Input LLM (15 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 3u
- 2025-09-02 10:03:59: 4u
- 2025-08-11 11:56:21: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 3u
- 2025-08-11 11:56:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 6u
- 2025-09-02 10:03:59: 5u
- 2025-08-11 11:56:21: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [ORG09] ORGANICA crunchy fruit cerise 20g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 3u
- 2025-08-11 11:56:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 2u
- 2025-09-02 10:03:59: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 6u
- 2025-08-11 11:56:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>10. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 3u
- 2025-08-11 11:56:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>11. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 2u
- 2025-08-11 11:56:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u
- 2025-08-11 11:56:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [JOY07] JOY! Organic Fig Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>14. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u
- 2025-08-11 11:56:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>15. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [REB05] REB chips bio - sel de mer 35g | 6 | Stock prédit: 1.1u (4j restants) → prédit 6u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |


---

## False Negatives (5)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | LLM avait prédit 0 (pas de besoin) avec stock: -2.8u (-17j) mais client a commandé 5u |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: 0.2u (17j) mais client a commandé 1u |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 2 | LLM avait prédit 0 (pas de besoin) avec stock: -0.8u (-24j) mais client a commandé 2u |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 2 | Stock suffisant: 1.9u (32j restants > seuil 30j) |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.3u (-13j) mais client a commandé 1u |


---

*Rapport généré automatiquement le 2025-12-18T19:58:58.161Z*
