# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S39719
- **Date commande** : 2025-10-14 10:33:03
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 15,531 input + 4,483 output = 20,014 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.2% | 23 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 78.9% | Score équilibré global |

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
| **MAE** | 1.13 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 47.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 56.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 2.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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

## True Positives (15)

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
| [RISH04] RISH kombucha BIO - smash basil 330ml | 4 | 1 | 3.0 | 300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 4u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, environ tous les 15 à 20 jours
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (1u -> 2u -> 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une accélération nette du volume par commande, passant de 1 unité en juillet à 4 unités lors du dernier passage en septembre. Bien que l'intervalle de temps entre la dernière commande (10 septembre) et la date de prédiction (13 octobre) soit légèrement plus long que d'habitude (33 jours vs ~20 jours), la tendance haussière sur ce produit de niche (Kombucha) suggère de maintenir le dernier palier atteint. L'absence de données N-1 limite la certitude saisonnière, mais la dynamique récente soutient une commande de 4 unités pour couvrir la période à venir.

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle approximatif de 15 à 20 jours sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande stable et faible (1u majoritaire) avec une fréquence de commande environ toutes les 3 semaines. La dernière commande datant de plus d'un mois (10 septembre), la probabilité d'une commande de réapprovisionnement standard de 1 unité pour ce lundi est élevée, sans signe de croissance ou de saisonnalité marquée.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (21 à 29 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite du volume à 4 unités par commande sur les trois derniers mois. Bien que l'intervalle temporel varie légèrement entre 21 et 29 jours, le besoin unitaire reste constant. La commande intervient ici 33 jours après la dernière, ce qui confirme l'échéance du cycle de réapprovisionnement sans signe de croissance ou de baisse de la demande.

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle d'environ 30 jours (mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable entre 2u et 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel régulier sans jour de semaine fixe. Le volume moyen observé est de 2,33 unités avec une légère déflation lors de la dernière commande. La prédiction de 2 unités est retenue pour s'aligner sur la tendance la plus récente et minimiser le risque d'erreur sur un produit à faible rotation.

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-33 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à baisse légère (3u vers 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (seulement 2 points de données). On observe un rythme approximativement mensuel (8 août, 10 septembre). La commande du 13 octobre s'inscrit parfaitement dans ce cycle de ~30 jours. La tendance quantitative montre un volume très faible (2 à 3 unités). Étant donné l'absence d'historique N-1 et la légère baisse entre les deux dernières commandes, je préconise la quantité la plus récente (2u) pour éviter un surstockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (~20-30j)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité absolue avec des commandes systématiques de 2 unités. Le délai écoulé depuis la dernière commande (septembre) correspond à la fenêtre de réapprovisionnement habituelle du client.

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier variant de 12 à 21 jours
- **Saisonnalité**: none
- **Tendance**: Légère hausse (+10%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence de commande avec un volume moyen de 2,25 unités. Étant donné l'absence de données N-1 et un intervalle de plus de 30 jours depuis la dernière commande (10 septembre), on observe une stabilisation du besoin autour de 2 unités pour maintenir le stock de fond sans sur-stockage.

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier moyen de 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1.75u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation stable variant entre 1 et 2 unités avec une moyenne de 1,75. La dernière commande remonte au 10 septembre (il y a 33 jours), ce qui dépasse l'intervalle moyen observé de 20 jours. Ce retard de commande suggère un besoin imminent. Compte tenu de la faible volatilité et de l'historique des volumes, la quantité de 2 unités est la plus probable pour reconstituer le stock sans sur-stockage.

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 30 jours (moyenne 25.5j)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité parfaite sur les trois derniers mois avec une quantité constante de 2 unités par commande. L'intervalle entre les commandes oscille entre 17 et 33 jours, avec une dernière commande enregistrée il y a 33 jours (10 septembre). La prédiction au 13 octobre respecte ce cycle mensuel de réapprovisionnement. Bien qu'il n'y ait pas de jour fixe dans la semaine, le volume par acte d'achat est le signal le plus fiable ici.

</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 20 à 30 jours, tendance milieu de semaine (mardi/mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite à 2 unités par commande avec un intervalle moyen de 25 à 30 jours. La commande du 13 octobre intervient 33 jours après la précédente, s'inscrivant dans le cycle de réapprovisionnement habituel sans signe de croissance ou de baisse de volume.

</details>


<details>
<summary><strong>11. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (1 seule donnée disponible)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée il y a deux mois (août). En l'absence de données N-1 et de récurrence hebdomadaire établie, la base de référence la plus probable pour ce produit premium de niche est le maintien du dernier volume observé (2 unités). La confiance est faible en raison du manque de profondeur historique, mais la stabilité du volume est privilégiée pour minimiser le risque de surstockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>12. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule commande enregistrée il y a 66 jours)
- **Saisonnalité**: none
- **Tendance**: Stable sur point unique à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande de 3 unités enregistrée le 08/08/2025. En l'absence de données N-1 ou de commandes répétées au cours des 3 derniers mois, la meilleure estimation statistique (principe de parcimonie) consiste à reconduire le seul volume connu. L'écart temporel de plus de deux mois suggère une commande ponctuelle ou un réapprovisionnement à rotation très lente pour ce produit spécifique.

</details>


<details>
<summary><strong>13. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-existent (single isolated order)
- **Saisonnalité**: none
- **Tendance**: Stable at 1u (insufficient data)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
The historical data for this product is extremely thin, with only one recorded order of 1 unit on July 22nd. No seasonal data from N-1 is available to predict a recurring cycle. In B2B supply chain management, when no growth trend or frequency pattern is established, the safest and most accurate prediction remains the last observed unit quantity to avoid overstocking, especially for a product with a single point of reference.

</details>




### 📊 Données d'Input LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 2u
- 2025-08-08 08:17:38: 1u
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 1u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 4u
- 2025-07-22 11:20:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 3u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-08 08:17:38: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>12. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>13. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (8)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | Stock prédit: 2.1u (17j restants) → prédit 5u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 4 | Stock prédit: 0.8u (10j restants) → prédit 4u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | Stock prédit: 0.8u (7j restants) → prédit 4u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | Stock prédit: -0.7u (-13j restants) → prédit 2u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -1.6u (-40j restants) → prédit 1u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -2.4u (-70j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-47j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -2.4u (-70j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:35:23.644Z*
