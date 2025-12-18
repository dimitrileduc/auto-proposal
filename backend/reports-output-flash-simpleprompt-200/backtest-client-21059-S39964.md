# Rapport Backtest - Client Chez Lucienne

## Contexte

- **Client** : Chez Lucienne (ID: 21059)
- **Commande réelle** : S39964
- **Date commande** : 2025-10-28 13:40:43
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 16,947 input + 5,322 output = 22,269 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 64.0% | 25 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
| **F1-Score** | 78.0% | Score équilibré global |

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
| **MAE** | 0.06 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 6.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 6.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 15 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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
| [RISH01] RISH kombucha BIO - original 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH06] RISH kombucha BIO - tagette 750ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 15 à 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation extrêmement stable et faible (1 unité par commande). L'intervalle entre les commandes varie entre 15 et 26 jours. Bien que la date de prédiction arrive 26 jours après la dernière saisie (ce qui correspond à la borne haute de l'intervalle observé en août/septembre), il n'y a aucun signal de croissance de volume ou de changement de comportement justifiant une augmentation. La recommandation reste fixée à l'unité habituelle pour minimiser le MAPE sur ce profil de 'petit rouleur'.

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier (15-20 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible volumétrie avec une fréquence d'approvisionnement d'environ deux fois par mois. La dernière commande date du 01/10 (2u), soit un intervalle de 26 jours jusqu'au 27/10. Bien que le volume ait doublé lors de la dernière occurrence (2u), la moyenne glissante et le faible recul suggèrent qu'une commande de 1u est plus probable pour maintenir le stock sans sur-stockage, le cycle de rotation étant lent sur ce produit spécifique (chips premium bio).

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 15 à 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité absolue avec une quantité unitaire de 1u par commande. Bien que l'intervalle entre les commandes soit légèrement irrégulier (15 jours puis 20 jours), le volume n'a jamais dévié. La commande actuelle intervient 26 jours après la précédente (soit un léger retard par rapport au cycle observé), mais sur un produit de type 'premium & bio' avec un historique aussi constant, il n'y a aucun signal suggérant une augmentation de volume ou un stockage de masse. La prédiction de 1u est la plus probable pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 15 a 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable a 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilite parfaite avec des commandes systematiques de 1 unite. L'intervalle depuis la derniere commande (01/10) est de 26 jours, ce qui est legerement superieur a la moyenne habituelle (15-20 jours), confirmant que le besoin de reapprovisonnement est arrive a echeance. Bien que le jour de commande (lundi) differe legerement du milieu de semaine habituel, le volume de base reste constant a l'unite.

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme aléatoire long terme (~35-60j), tendance récente stable bimensuelle
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 3u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une dégradation du volume par commande au fil du temps : le produit est passé de 3 unités en début 2024 à 2 unités fin 2024, puis à seulement 1 unité lors des deux dernières commandes de septembre et octobre 2025. Bien que les commandes historiques de fin d'année (octobre/novembre) tournaient autour de 2 unités, la tendance immédiate (les 3 derniers mois) est stabilisée à 1 unité par commande. Sans signe de promotion ou de reprise de volume, la prédiction se cale sur la demande de fond la plus récente pour minimiser le risque de surstockage.

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~35-60 jours), préférence historique pour le lundi
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une faible rotation du produit LV161 avec une tendance baissière marquée. En N-1, le volume oscillait entre 2 et 3 unités par commande. Cependant, les deux dernières commandes (août et octobre 2025) se sont stabilisées à 1 unité seulement. Bien que l'intervalle entre la dernière commande (01/10) et la date de prédiction (27/10) soit légèrement plus court que le cycle habituel de 5-8 semaines, le volume de fond actuel ne justifie pas une commande supérieure à l'unité minimale, d'autant plus qu'aucun pic saisonnier n'est observé sur la période fin octobre en N-1.

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-60 jours) avec préférence historique pour le lundi/jeudi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond stable entre 2 et 3 unités par commande. Cependant, les deux dernières commandes (août et octobre 2025) montrent une érosion du volume (2u puis 1u) et un changement de rythme (intervalles plus longs). La commande de 1u le 01/10 suggère un stock résiduel faible à fin octobre. Bien que la tendance soit baissière, le lundi reste un jour de commande fort historiquement pour ce client. On prévoit un retour à 2 unités pour compenser la livraison minimale de 1u du cycle précédent et s'aligner sur la moyenne long terme.

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.15u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec une préférence pour le lundi (40%) et une fréquence moyenne de 30 à 45 jours.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 3u en début N-1 à 1u en période récente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une baisse structurelle du volume par commande : alors que le client commandait régulièrement 3u en 2024, les deux dernières commandes (août et octobre 2025) se sont stabilisées à 1u. Bien que la date de prédiction (lundi) corresponde au jour historique de commande, le rythme actuel est ralenti (intervalle de 35 jours). La dernière commande datant du 1er octobre, une commande le 27 octobre s'inscrit dans ce nouveau cycle de faible volume. On privilégie la tendance récente de 1u pour minimiser le MAPE, le stock résiduel étant probablement suffisant chez le client.

</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité quasi-totale à 1 unité par commande depuis fin 2023. Bien qu'une commande de 2 unités ait été observée à la même période en N-1 (octobre 2024), les données de 2025 (août et octobre) confirment un maintien à 1 unité. L'intervalle de commande actuel varie entre 30 et 60 jours ; la dernière commande datant du 1er octobre, une commande le 27 octobre s'inscrit dans cette fenêtre basse avec un besoin unitaire.

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier de 15 à 21 jours, sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Baisse nette vers un socle de 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une érosion structurelle du volume : nous sommes passés de commandes régulières de 3u en 2024 à une stabilité absolue à 1u sur les trois derniers mois (août, septembre, octobre 2025). L'intervalle entre les commandes récentes est d'environ 15 à 20 jours. La dernière commande datant du 1er octobre, une commande le 27 octobre (26 jours plus tard) s'inscrit parfaitement dans ce cycle de réapprovisionnement de faible volume. Aucun pic saisonnier n'est observé sur la fin d'année en N-1.

</details>


<details>
<summary><strong>11. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée / Rythme non établi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée (1u le mardi 16 septembre). En l'absence de données N-1 et de répétition de cycle, la source de vérité la plus fiable est la dernière occurrence. Bien que la commande tombe un lundi au lieu d'un mardi, le volume unitaire suggère un besoin de réapprovisionnement ponctuel ou un test produit constant. Sans indicateur de croissance ou de saisonnalité, la recommandation reste fixée à la valeur observée.

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~20-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et sporadique mais stable de 1 unité par commande avec un intervalle d'environ 20 à 30 jours. La dernière commande date d'il y a 41 jours (16 sept), ce qui suggère qu'une nouvelle commande de réapprovisionnement de fond de rayon est due. En l'absence de données N-1 et vu la stabilité des volumes récents, le maintien de la quantité à 1 unité est le scénario le plus probable.

</details>


<details>
<summary><strong>13. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique, environ 20-30 jours entre commandes sur le long terme
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une érosion des volumes de commande pour cette référence, passant de pics à 3 unités en début 2024 à une stabilisation constante à 1 unité sur les trois dernières livraisons (octobre 2024, août 2025, septembre 2025). Bien que la date de prédiction corresponde à un lundi, jour historiquement privilégié pour ce client, il n'y a aucun signal de croissance ou de saisonnalité forte justifiant un passage à 2 unités. Le délai écoulé depuis la dernière commande (41 jours) suggère un besoin de réapprovisionnement imminent pour maintenir le stock de fond à l'unité.

</details>




### 📊 Données d'Input LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 2u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 3u
- 2024-04-29 07:17:35: 2u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 2u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 3u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 1u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 2u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 1u
- 2023-11-21 07:37:42: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-06-13 12:45:08: 1u
- 2024-04-29 07:17:35: 1u
- 2024-03-21 08:33:04: 1u
- 2023-12-07 14:11:59: 1u
- 2023-11-21 07:37:42: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 1u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 3u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [RISH05] RISH kombucha BIO - rose 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 1u
- 2024-07-15 08:47:57: 1u
- 2024-06-13 12:45:08: 3u
- 2024-04-29 07:17:35: 2u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 1u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
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
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: 0.5u (30j restants) → prédit 1u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: 0.5u (30j restants) → prédit 1u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Stock prédit: 0.4u (28j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: -0.4u (-18j restants) → prédit 1u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock prédit: -0.6u (-42j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:36:17.480Z*
