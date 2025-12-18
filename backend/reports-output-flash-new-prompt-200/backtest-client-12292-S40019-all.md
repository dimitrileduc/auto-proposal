# Rapport Backtest - Client Green Peas

## Contexte

- **Client** : Green Peas (ID: 12292)
- **Commande réelle** : S40019
- **Date commande** : 2025-10-30 09:12:37
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 14,251 input + 4,902 output = 19,153 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.0% | 20 produits prédits, 11 corrects |
| **Rappel** | 84.6% | 13 produits réels, 11 détectés |
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
| **MAE** | 0.64 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 22.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0052] MF Pois chiches  500g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'un mois (approx. tous les 28-34 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, la demande est constante à 1 unité par commande. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles, mais le produit montre une stabilité parfaite sur les 3 derniers mois malgré le passage de l'été à l'automne. ÉTAPE 3 (Tendance): La cadence est extrêmement régulière (mensuelle). La commande actuelle (29 octobre) intervient exactement 20 jours après la précédente (9 octobre), soit légèrement plus tôt que le cycle habituel de 30 jours, suggérant une consommation stable sans accélération. ÉTAPE 4 (Recommandation): La demande de fond étant de 1 unité par cycle, et face à un produit stable sans signe de croissance, la recommandation reste conservatrice à 1 unité pour éviter le sur-stockage.

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
- **Pattern temporel**: Mensuel irrégulier, cycle moyen de 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation sans outliers identifiés. En N-1, le volume était stable à 2 unités par commande, mais les données récentes de septembre et octobre 2025 indiquent un passage à 1 unité par commande, suggérant un ralentissement de la demande ou une optimisation du stock client. Aucune saisonnalité marquée n'est visible sur les mois d'octobre/novembre en N-1. Compte tenu de la tendance récente à la baisse et de la stratégie conservatrice en B2B pour éviter le sur-stockage sur un produit à faible volume, la commande est maintenue à 1 unité.

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier basse fréquence (environ 30-45 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 4u, 3u

**🧠 Raisonnement LLM:**
Étapes de l'analyse : 1. Nettoyage : Les commandes de 4u et 3u fin 2023/début 2024 ont été isolées comme outliers (pics de stockage hivernal ou démarrage produit). La demande de fond actuelle s'établit à 1u. 2. Saisonnalité : On observe historiquement une baisse de volume entre septembre et octobre (passage de 2u à 1u en N-1), confirmée par les données récentes. 3. Tendance : Le volume est stabilisé à 1u par commande depuis juin 2024. Le rythme de commande s'est ralenti (environ tous les 30 jours). 4. Recommandation : Compte tenu de la faible rotation (1u par mois) et de la date (fin octobre), une commande de 1u suffit pour couvrir le besoin immédiat sans risquer le surstockage sur un produit à cycle lent.

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 28-35 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (passant de 1u à 2u sur le dernier mois)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): La commande de 4u en juin N-1 est traitée comme un outlier (2x la moyenne habituelle). La demande de fond se stabilise autour de 1.33u. ÉTAPE 2 (SAISONNALITÉ): Faible impact identifié en octobre; les volumes historiques N-1 montrent une activité sporadique sans pic majeur de fin d'année. ÉTAPE 3 (TENDANCE): On observe un doublement du volume lors de la dernière commande (2u le 09/10) par rapport aux précédentes (1u). Le rythme de commande semble s'accélérer légèrement avec un intervalle réduit à environ 30 jours. ÉTAPE 4 (RECOMMANDATION): Pour couvrir le besoin mensuel tout en tenant compte de la légère hausse récente (passage de 1 à 2u), une commande de 2 unités est recommandée pour sécuriser le stock sans risque de sur-stockage majeur.

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.7u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours), début de mois
- **Saisonnalité**: weak
- **Tendance**: Stable entre 2u et 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée, les quantités oscillent de manière cohérente entre 2 et 4 unités. ÉTAPE 2 (Saisonnalité): Pas de pic majeur sur la fin d'année en N-1, le produit maintient une demande de fond stable même en période hivernale. ÉTAPE 3 (Tendance): La moyenne des trois derniers mois (2.66u) est quasi identique à la moyenne historique globale (2.75u), indiquant une stabilité parfaite. ÉTAPE 4 (Recommandation): Avec un cycle de réapprovisionnement mensuel respecté lors des trois derniers mois et une dernière commande le 9 octobre, la commande du 29 octobre s'inscrit dans le rythme habituel. On arrondit à 3 unités pour couvrir le mois à venir sans risque de sur-stockage.

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ toutes les 4 à 5 semaines)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (moyenne récente 2u vs moyenne historique 3.4u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation avec une demande de fond stable autour de 2 unités. ÉTAPE 1: Les commandes de 6 unités en N-1 ont été identifiées comme des pics ponctuels (outliers) car elles doublent la moyenne habituelle. ÉTAPE 2: La saisonnalité est faible, bien qu'un léger ralentissement soit observable en fin d'année. ÉTAPE 3: La tendance récente est à la baisse avec un volume moyen de 2u sur les 3 derniers mois contre 3.4u historiquement. ÉTAPE 4: En tenant compte du cycle de réapprovisionnement mensuel (dernière commande il y a 20 jours) et de la volonté de ne pas sur-stocker un produit en légère baisse, une quantité de 2 unités est recommandée pour couvrir le mois de novembre.

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de 30 jours (début de mois)
- **Saisonnalité**: none
- **Tendance**: Légère baisse (1u à la dernière commande)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1: Nettoyage de l'outlier de 4u (février 2024), ramenant la demande de fond à environ 1.8u. Étape 2: Aucune saisonnalité marquée n'est détectée entre sept/oct N-1 (2u) et le reste de l'année. Étape 3: Le rythme de commande s'est stabilisé sur un cycle mensuel précis (tous les 28-30 jours). La dernière commande était de 1u, mais la moyenne historique basse suggère un besoin de réapprovisionnement standard. Étape 4: La commande tombe pile dans le cycle mensuel (dernière commande il y a 8 semaines, sautée en octobre). Une quantité de 2u couvre le besoin mensuel habituel tout en restant conservateur face à la légère baisse de volume observée en septembre.

</details>


<details>
<summary><strong>8. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 4u en juin 2024 est identifiée comme un outlier (supérieur à 2x la moyenne), la demande de fond se situant entre 1 et 2u. ÉTAPE 2 (Saisonnalité): Pas de corrélation forte entre N-1 et N; le produit présente une demande erratique mais globalement faible toute l'année. ÉTAPE 3 (Tendance): Stabilisation nette à 1u sur les deux derniers mois (août/septembre) avec un passage au mercredi comme jour de commande préférentiel. ÉTAPE 4 (Recommandation): La consommation est faible et stable. Étant donné l'absence de pic historique en octobre/novembre et la tendance récente, une quantité de 1u suffit pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>9. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel et erratique (intervalle de 2 à 6 mois)
- **Saisonnalité**: none
- **Tendance**: Inactivité prolongée (aucune commande depuis > 14 mois)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière sans saisonnalité marquée (pics isolés en fév/juin/août/déc). La quantité de 3u est traitée comme un outlier par rapport à la médiane de 1u. En l'absence totale de commandes sur les 12 derniers mois, le produit semble être en déclin ou activé uniquement sur commande spéciale. La recommandation est fixée au minimum de l'unité de besoin (1u) pour couvrir une demande résiduelle potentielle sans risque de surstockage sur un produit à rotation très lente.

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

**✅ Quantité LLM**: 1u (confidence: high)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: 1.2u (29j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [MF0051] MF Kidney Beans 500g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 2 | Stock prédit: -1.0u (-27j restants) → prédit 2u mais non commandé |
| [MF0061] MF Compote | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [MF0060] MF Passata | 2 | Stock prédit: -0.3u (-11j restants) → prédit 2u mais non commandé |
| [MF0024] MF KETCHUP 250g | 2 | Stock prédit: 0.4u (8j restants) → prédit 2u mais non commandé |


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
| [VID0009] Consigne casier | 21 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 126 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:11:07.042Z*
