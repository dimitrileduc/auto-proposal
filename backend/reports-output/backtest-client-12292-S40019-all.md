# Rapport Backtest - Client Green Peas

## Contexte

- **Client** : Green Peas (ID: 12292)
- **Commande réelle** : S40019
- **Date commande** : 2025-10-30 09:12:37
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 18,054 input + 23,284 output = 41,338 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.1% | 18 produits prédits, 11 corrects |
| **Rappel** | 78.6% | 14 produits réels, 11 détectés |
| **F1-Score** | 68.8% | Score équilibré global |

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
| **MAE** | 0.82 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 39.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 34.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -30.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0052] MF Pois chiches  500g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 32 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite sur la quantité (1u) avec un intervalle moyen de 32 jours entre les commandes. La dernière commande ayant eu lieu le 9 octobre 2025, la prochaine est statistiquement attendue autour du 10 novembre 2025. Cette date se situe dans la fenêtre de prédiction des 30 prochains jours (jusqu'au 28 novembre). Le client devrait donc passer une commande d'une unité durant cette période.

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier avec un cycle moyen de 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Légère baisse de volume par commande (de 2u à 1u) mais maintien de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 & 2 : Aucune commande exceptionnelle détectée, les volumes sont constants (1 ou 2 unités). La saisonnalité est faible, avec une activité répartie sur toute l'année. Étape 3 : On observe une tendance récente à 1 unité par commande sur les deux derniers mois, contrairement à l'année précédente où 2 unités étaient plus fréquentes. Étape 4 : La dernière commande a eu lieu le 9 octobre 2025. Avec un cycle observé variant entre 30 et 40 jours, la prochaine commande est estimée entre le 8 et le 18 novembre 2025, ce qui tombe dans la fenêtre d'analyse de 30 jours. Étant donné la tendance récente, une commande de 1 unité est prévue.

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel erratique oscillant entre 25 et 40 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1 : Nettoyage des données. La commande de 4u en février 2024 est un pic isolé, la demande de fond se situant entre 1u et 2u. Étape 2 : Pas de saisonnalité forte détectée sur cette période (octobre/novembre) les années précédentes. Étape 3 : Tendance stable avec une consommation de 1u sur les deux derniers mois. Étape 4 : Le cycle de commande moyen est d'environ 35 jours. La dernière commande datant du 2025-10-09, la prochaine est estimée aux alentours du 2025-11-13 (dans 15 jours), ce qui rentre dans la fenêtre des 30 jours. Le volume cible pour cette commande unique est de 1u.

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier avec un intervalle moyen de 32 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec un volume de base de 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1 : Nettoyage : La commande de 4u en Juin 2024 est traitée comme un outlier car elle est 2x supérieure à la moyenne récente. La demande de fond se situe entre 1u et 2u.
Étape 2 : Saisonnalité : Aucune corrélation saisonnière forte n'est identifiée entre N et N-1 pour cette période de l'année sur ce produit spécifique.
Étape 3 : Tendance : Le rythme est très stable. L'intervalle entre les trois dernières commandes est de 28 jours puis 36 jours (moyenne 32 jours). Le volume est passé de 1u à 2u lors de la dernière saisie.
Étape 4 : Recommandation : La dernière commande date du 09/10/2025. Avec un cycle moyen de 32 jours, la prochaine commande est prévue aux alentours du 10/11/2025, ce qui s'inscrit dans la fenêtre des 30 jours. Bien que la dernière commande fût de 2u, le volume historique récurrent (mode) est de 1u. Étant donné l'absence de tendance de croissance confirmée, nous prédisons 1u pour la prochaine commande.

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.75u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 30 à 35 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un comportement d'achat très régulier avec un intervalle médian de 33 jours entre les commandes. La dernière commande ayant eu lieu le 09/10/2025, la prochaine livraison est statistiquement attendue autour du 11 novembre 2025, soit bien à l'intérieur de la fenêtre de 30 jours. Les volumes sont stables (3 unités lors des deux dernières commandes) et aucun événement exceptionnel ne vient perturber la demande de fond. Une commande unique de 3 unités est donc prévue.

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~32 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'analyse du cycle récent montre une commande environ tous les 32 jours (intervalles de 28 et 36 jours sur les 3 derniers mois). La dernière commande ayant eu lieu le 09/10/2025, la prochaine est projetée aux alentours du 10/11/2025, ce qui l'inclut dans la fenêtre des 30 prochains jours. En termes de volume, bien que des pics à 6u aient été observés en 2024, la tendance 2025 est plus faible et stable avec une moyenne de 2u par commande. Nous prédisons donc une commande unique de 2 unités pour le milieu du mois de novembre.

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.9u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (cycle approximatif de 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stabilité du volume par commande (2u) mais ralentissement récent de la fréquence
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière d'environ 2 unités par mois. La dernière commande enregistrée date du 3 septembre 2025 (il y a 56 jours), ce qui signifie que le client a sauté le cycle d'octobre. Étant donné l'intervalle moyen constaté (30 jours), une commande de réapprovisionnement est fortement probable dans les 30 prochains jours. Nous prédisons une commande standard de 2 unités pour couvrir le besoin de fond, sans cumuler le retard pour éviter le surstockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>8. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalles irréguliers variant de 28 à 76 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1 : Nettoyage effectué, la quantité de 4u en juin 2024 est un outlier isolé ; la demande de fond est de 1u. Étape 2 : Pas de saisonnalité marquée à l'automne sur ce produit. Étape 3 : La tendance récente montre une stabilisation à 1u par commande. Étape 4 : Le cycle de commande est fluctuant. Bien qu'aucune commande n'ait été passée en octobre (56 jours écoulés depuis la dernière), l'historique de l'automne précédent montre un intervalle de 76 jours entre les commandes. Ce délai placerait la prochaine commande autour de la mi-novembre, soit dans la fenêtre des 30 prochains jours. Vu la stabilité du besoin unitaire, on recommande 1u.

</details>


<details>
<summary><strong>9. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 2 à 4 mois en 2024)
- **Saisonnalité**: none
- **Tendance**: Inactif (aucune commande depuis > 14 mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre que ce produit n'a pas été commandé depuis le 5 août 2024, soit un arrêt d'activité de plus de 14 mois. Bien que le produit ait été commandé irrégulièrement auparavant (tous les 2 à 4 mois avec des volumes faibles de 1 à 3 unités), l'absence prolongée de demande suggère soit un déréférencement du produit par le client, soit un changement profond de recette/besoin. Dans ce contexte de rupture de cycle évidente, il est hautement improbable qu'une commande soit passée dans les 30 prochains jours.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 2u
- 2024-03-12 14:11:03: 2u
- 2024-02-12 06:43:09: 2u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 1u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 1u
- 2024-03-12 14:11:03: 2u
- 2024-02-12 06:43:09: 4u
- 2023-12-12 07:24:48: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 2u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 1u
- 2024-01-22 12:57:59: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 3u
- 2025-09-03 06:58:40: 3u
- 2025-08-06 06:20:35: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 3u
- 2024-08-05 06:36:16: 3u
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 2u
- 2024-02-12 06:43:09: 4u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 3u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 2u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 6u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 6u
- 2024-06-11 07:44:12: 5u
- 2024-05-13 11:42:43: 1u
- 2024-03-29 14:59:13: 6u
- 2024-03-12 14:11:03: 3u
- 2024-02-12 06:43:09: 2u
- 2024-01-22 12:57:59: 4u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 3u
- 2024-06-11 07:44:12: 2u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 2u
- 2024-03-12 14:11:03: 1u
- 2024-02-12 06:43:09: 4u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [MF0032] MF Tarti Pois chiches 250 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 1u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 1u
- 2024-01-22 12:57:59: 3u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 3u
- 2024-02-12 06:43:09: 2u
- 2023-12-12 07:24:48: 1u

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 1.2u (29j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [MF0051] MF Kidney Beans 500g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 2 | Stock prédit: -1.0u (-27j restants) → prédit 2u mais non commandé |
| [MF0061] MF Compote | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |


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
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -1.8u (-77j) mais client a commandé 1u |
| [VID0009] Consigne casier | 21 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 126 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T19:59:22.056Z*
