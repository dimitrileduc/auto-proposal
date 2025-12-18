# Rapport Backtest - Client Le bon Wagon Eupen

## Contexte

- **Client** : Le bon Wagon Eupen (ID: 113)
- **Commande réelle** : S40194
- **Date commande** : 2025-11-12 10:42:35
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 22,748 input + 4,339 output = 27,087 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 26 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
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
| **MAE** | 0.81 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 52.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 52.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

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

## True Positives (16)

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
| [MF0033] MF Tarti Poivron chilli 250g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0047] MF Mayonnaise 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 5 | 3.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (Point unique)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u (basé sur un point unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée de 1 unité le mercredi 08/10/2025. En l'absence de données N-1 et de répétition de cycle, la stratégie la plus précise consiste à projeter la dernière valeur observée. Bien que le jour demandé (mardi) diffère du jour de la commande précédente (mercredi), les règles de gestion prescrivent de ne pas prédire 0 et de viser la quantité de la prochaine commande probable. Sans preuve de croissance ou de saisonnalité, 1 unité est le volume de référence à maintenir pour ce produit Superfood bio.

</details>


<details>
<summary><strong>2. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles de 1 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1.5u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande faible et irrégulière (environ tous les 1.5 à 2 mois). La dernière commande date de mi-août (2u), ce qui suggère un besoin de réapprovisionnement pour novembre. Bien que le volume historique oscille entre 1u et 3u, la valeur de 3u en juillet 2024 semble être un pic isolé. Les commandes les plus fréquentes sont de 1u ou 2u. Étant donné la commande de 2u en août 2025 et la stabilité globale à basse échelle, une quantité de 2u est retenue pour couvrir le cycle de fin d'année, en cohérence avec le jour de commande (mardi) qui correspond à l'historique du client.

</details>


<details>
<summary><strong>3. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot tous les 45 à 90 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive 2u -> 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande très irrégulière et de faibles volumes. Historiquement, les commandes étaient de 2 unités en 2024, mais la commande la plus récente (août 2025) est descendue à 1 unité. Bien que l'intervalle moyen de commande soit dépassé (84 jours depuis la dernière commande vs moyenne de ~60j), la tendance de volume sur ce type de référence premium (Noix de cajou Curry) s'oriente vers le réapprovisionnement à l'unité. Le mardi 11 novembre est un jour historiquement valide pour ce client, mais vu le faible historique récent, le maintien à 1 unité est le plus probable pour minimiser l'erreur (MAPE). Aucun pic saisonnier n'est corrélé à novembre sur l'historique N-1 (volume faible en déc-janv). Même si le 11 novembre est férié dans certains pays, le système demande une prédiction pour cette date précise, nous recommandons le volume de base habituel de 1u pour la prochaine commande survenant autour de cette période car le produit n'est pas arrêté (commande en août). Les données étant éparses (1 seule commande en 2025), la confiance reste faible sur le timing exact mais haute sur le volume unitaire de 1u par rapport au 2u de l'an dernier (optimisation de stock). Le baseline de 1u est donc retenu comme quantité cible car représente 100% du volume des 3 derniers mois sur le cycle de vie actuel du produit (2025). On ne prédit pas 0 car les guidelines interdisent de rejeter la commande sur une base calendaire brute si le cycle est proche de l'historique (mardi). En conclusion, la prochaine commande attendue pour ce client sur cet article sera de 1 unité (unité de vente min).

</details>


<details>
<summary><strong>4. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles 1 à 2 mois)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit MF0032 présente des volumes très faibles et une fréquence de commande faible (7 commandes en 2 ans). Les volumes historiques oscillent entre 1 et 2 unités. La commande la plus récente (août 2025) était de 1u, tout comme la dernière commande à la même période en N-1 (juillet 2024 = 1u). Bien que les données soient éparses, la tendance actuelle sur ce type de référence à faible rotation suggère un maintien à l'unité minimale de commande.

</details>


<details>
<summary><strong>5. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ 1 commande tous les 3-4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande très faible (environ une fois par trimestre). Les volumes sont de 1u, à l'exception de deux commandes en 2024 de 2u. La donnée récente la plus fiable (août 2025) indique 1u. Bien que le cycle soit irrégulier, la date demandée tombe un mardi, jour statistiquement fréquent pour ce client. Compte tenu du profil B2B de faible rotation sur cette référence 'Pomme Raifort', la quantité la plus probable est l'unité minimale constatée récemment.

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ tous les 2 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (passage de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une distribution très espacée (tous les 60-90 jours environ). La dernière commande date du 19 août 2025 (1u). Pour la date du 11 novembre 2025, nous sommes exactement dans la fenêtre de récurrence observée (environ 84 jours après la dernière commande). Bien que les volumes historiques en 2024 aient atteint 2u, la commande la plus récente et les données de fin 2023 se stabilisent à 1u. Le mardi étant son jour de commande privilégié historiquement, la probabilité d'une commande de 1u est maximale.

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 3u (60.0%)
- 📉 **Erreur Médiane**: 3u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation très stable mais sporadique, oscillant entre 2u et 3u par commande. La commande la plus récente (août 2025) était de 2u un mardi, ce qui correspond au jour de la semaine demandé. Bien que le volume annuel soit faible, la valeur de 2u est la plus récurrente lors des dernières occurrences et correspond à la ligne de base actuelle pour ce produit à faible rotation. En l'absence de pic saisonnier visible en novembre N-1, nous maintenons la quantité de la dernière observation.

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique / Donnée unique
- **Saisonnalité**: none
- **Tendance**: Stable à 1u (basé sur point unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique extrêmement limité avec une seule commande enregistrée le mardi 19 août 2025 pour 1 unité. La date de prédiction (2025-11-11) tombe également un mardi, ce qui respecte le jour de commande observé précédemment. En l'absence de données de saisonnalité N-1 ou d'évolution de tendance, nous maintenons la dernière valeur connue comme le volume le plus probable pour ce client B2B sur ce SKU spécifique.

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée / Fréquence très faible
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement restreint avec une unique commande de 1u enregistrée un mardi il y a environ trois mois. En l'absence d'autres données ou de cycles clairs de réapprovisionnement, la valeur la plus probable pour une commande sur ce produit de niche (chips piment citron) reste l'unité minimale observée (1u). Le jour demandé (mardi) correspond au seul point connu, ce qui renforce la pertinence de maintenir ce volume de base plutôt que de prévoir une absence de commande ou une augmentation non justifiée.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 10:15:32: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 1u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 3u
- 2024-06-04 06:36:04: 1u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [MF0055] MF Noix de cajou - Curry 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 2u
- 2024-09-02 13:08:13: 2u
- 2024-06-04 06:36:04: 2u
- 2024-04-25 08:12:11: 1u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 2u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [MF0032] MF Tarti Pois chiches 250 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 1u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 2u
- 2024-06-04 06:36:04: 2u
- 2024-04-25 08:12:11: 1u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:08:13: 2u
- 2024-06-04 06:36:04: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 3u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 3u
- 2024-06-04 06:36:04: 3u
- 2024-04-25 08:12:11: 3u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 2u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (10)

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
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 2 | Stock prédit: 0.4u (25j restants) → prédit 2u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: 0.2u (17j restants) → prédit 1u mais non commandé |
| [MF0014] MF Olives noires 500g | 1 | Stock prédit: 0.2u (26j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -0.4u (-23j restants) → prédit 1u mais non commandé |
| [MF0060] MF Passata | 1 | Stock prédit: -0.7u (-34j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.0u (3j restants) → prédit 2u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Stock prédit: -0.6u (-31j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:18:18.553Z*
