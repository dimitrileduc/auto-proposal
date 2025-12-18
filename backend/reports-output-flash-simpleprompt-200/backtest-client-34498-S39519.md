# Rapport Backtest - Client D'ICI NANINNE

## Contexte

- **Client** : D'ICI NANINNE (ID: 34498)
- **Commande réelle** : S39519
- **Date commande** : 2025-10-03 06:18:15
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 10,806 input + 3,567 output = 14,373 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 14 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 100.0% | Score équilibré global |

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
| **MAE** | 2.21 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 75.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 150.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 75.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 7 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 7 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 7 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 5 | 1 | 4.0 | 400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 5 | 1 | 4.0 | 400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 8 | 1 | 7.0 | 700.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 7u vs Médiane: 6u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 7u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (intervalle de 54 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (8u à 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux points de données espacés de pratiquement deux mois. On observe une légère baisse de volume entre juillet (8u) et septembre (6u). Sans pattern hebdomadaire clair ni saisonnalité N-1, la prédiction repose sur la moyenne simple des commandes récentes pour lisser la tendance incertaine, tout en notant que l'intervalle suggère une consommation lente de ce produit premium bio.

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 10u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 6u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse du volume sur la dernière commande -60%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux points de données espacés de 54 jours. On observe une baisse significative du volume entre juillet (10u) et septembre (4u). Sans données N-1 pour confirmer une saisonnalité et face à un rythme de commande non stabilisé, la dernière valeur enregistrée (4u) constitue la base de prédiction la plus probable pour minimiser l'erreur de prévision, en supposant que le pic de 10u était un stock de lancement ou un événement ponctuel.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-régulier, environ tous les 50-60 jours
- **Saisonnalité**: none
- **Tendance**: Baisse de volume de 6u à 3u (-50%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (seulement 2 points de données). On observe un intervalle de 54 jours entre les deux dernières commandes. La date de prédiction (2 octobre) se situe 31 jours après la dernière commande du 1er septembre, ce qui suggère une commande de milieu de cycle ou un léger ralentissement. La moyenne arithmétique est de 4.5 unités, mais compte tenu de la tendance à la baisse observée sur la dernière commande (3u vs 6u), je préconise une valeur de 4 unités pour équilibrer la moyenne et la tendance récente, en l'absence de données de saisonnalité N-1.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 7u vs Médiane: 7u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 6.5u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (~30-50 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à la hausse (+14,2%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 commandes). On observe un intervalle d'environ 54 jours entre les deux premières commandes. La commande du 01/09 (7u) montre une légère progression par rapport à celle du 09/07 (6u). La date de prédiction (02/10) se situe exactement un mois après la dernière livraison, suggérant un passage à un rythme mensuel de réapprovisionnement. En l'absence de saisonnalité N-1 et compte tenu de la stabilité du volume, la quantité de 7 unités est la plus probable pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 7u vs Médiane: 8u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 7.5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 3u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec un intervalle observé de ~53 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 7-8 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité (seulement 2 points de données). On observe une consommation moyenne de 7,5 unités par commande sur une période de deux mois. La commande de septembre (7u) montre une légère baisse par rapport à juillet (8u). En l'absence de saisonnalité N-1 ou de cycle hebdomadaire clair, la quantité la plus probable se situe dans la moyenne basse de la tendance récente, soit 7 unités.

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-régulier, environ 30 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Baisse légère (5u vers 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique limité de deux points de données montrant une fréquence irrégulière et une légère érosion des volumes. En l'absence de saisonnalité N-1, la moyenne pondérée de la période récente est utilisée pour établir une commande de base, ajustée pour refléter le volume médian observé.

</details>


<details>
<summary><strong>7. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 3u (150.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non régulier, intervalle long (~30-50 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (6u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points de données). On observe un intervalle de 54 jours entre les deux premières commandes. La commande du 02/10 intervient 31 jours après la dernière commande du 01/09. En l'absence de saisonnalité N-1 et de cycle hebdomadaire clair, la quantité recommandée est la moyenne simple des deux derniers volumes (6 et 4) pour stabiliser le stock sur ce produit à faible rotation.

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 5u vs Médiane: 7u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 4u (400.0%)
- 📉 **Erreur Médiane**: 6u (600.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-régulier, environ tous les 45-60 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (7u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité (2 points de données). On observe une commande en juillet (7u) puis une en septembre (4u), suggérant un cycle de réapprovisionnement long d'environ 2 mois. La date de prédiction (début octobre) est précoce par rapport au cycle de 54 jours observé précédemment, mais nécessaire si le stock s'épuise. La moyenne pondérée donne 5.5, arrondie à 5 pour refléter la baisse de volume du dernier point et l'absence de données N-1 pour confirmer une saisonnalité haute en automne.

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 4u vs Médiane: 10u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 8u (400.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (espacement de 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (10u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique limité à deux points de données ne permettant pas d'établir un cycle hebdomadaire ou mensuel strict. La dernière commande (septembre) montre une baisse de volume (4u) par rapport à juillet (10u). En l'absence de données N-1 et face à une tendance de fond en diminution, la recommandation se base sur le volume le plus récent (4u) pour coller au rythme de consommation actuel et minimiser le risque de surstockage.

</details>


<details>
<summary><strong>10. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 4u vs Médiane: 10u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 6u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement massif (~50-60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse significative (-60%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique extrêmement restreint (2 points de données). La commande de juillet était de 10 unités pour un intervalle de 54 jours par rapport à septembre (4 unités). Un intervalle de 31 jours s'est écoulé depuis la dernière commande. Vu la baisse de volume observée entre juillet et septembre et l'absence d'historique N-1 pour justifier un rebond, la valeur la plus probable pour minimiser le MAPE est le maintien du volume récent le plus bas (4 unités).

</details>


<details>
<summary><strong>11. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, environ un cycle de 30 à 50 jours
- **Saisonnalité**: none
- **Tendance**: Baisse de volume de 8u à 4u (-50%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est trop limité pour établir un cycle hebdomadaire ou mensuel strict. On observe une diminution du volume par deux entre juillet et septembre. En l'absence de données de saisonnalité N-1 et face à une tendance baissière récente, la prédiction s'aligne sur le dernier point de donnée connu (4 unités) pour minimiser l'erreur, le jeudi ne présentant pas de caractéristique de pic de fin de semaine dans ce contexte.

</details>


<details>
<summary><strong>12. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 4u (400.0%)
- 📉 **Erreur Médiane**: 5u (500.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 45-60 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse (6u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux points de données espacés de deux mois. On observe une demande de 6 unités en juillet et 4 unités en septembre. En l'absence de cycle hebdomadaire clair ou de saisonnalité N-1, la moyenne pondérée (5 unités) est la prédiction la plus probable pour stabiliser le stock, tout en notant que la demande semble se manifester tous les deux mois environ. La commande tombe un jeudi, ce qui ne correspond pas aux jours précédents (lundi/mercredi), renforçant l'aspect ponctuel de la demande.

</details>


<details>
<summary><strong>13. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 8u vs Médiane: 6u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: low)
- 📊 **Baseline N-1**: 8u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 7u (700.0%)
- 📉 **Erreur Médiane**: 5u (500.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (environ 50-60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse modérée (-40% sur le dernier volume)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux points de données distants de 54 jours. On observe une diminution de 10u à 6u entre juillet et septembre. La date de prédiction (2 octobre) arrive 31 jours après la dernière commande, ce qui est plus court que l'intervalle précédent (54j), suggérant soit un besoin plus faible, soit une accélération de la fréquence. Sans saisonnalité N-1, la moyenne simple de 8u est retenue comme la valeur la plus probable pour équilibrer la baisse récente et le stock de sécurité nécessaire pour couvrir un cycle potentiellement plus long que 30 jours.

</details>


<details>
<summary><strong>14. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalle de ~50 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux points de données séparés de 54 jours (début juillet et début septembre). Cependant, la quantité commandée est strictement identique (4 unités), ce qui indique une demande de fond très stable malgré l'irrégularité temporelle. Le cycle actuel suggère une commande environ tous les deux mois ; bien que la date de prédiction soit un peu prématurée par rapport au dernier intervalle, la stabilité du volume à 4 unités est le signal le plus fiable disponible. Aucune tendance à la hausse ou à la baisse n'est détectable, justifiant le maintien du volume historique.

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 6u
- 2025-07-09 11:05:21: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 3u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 7u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 7u
- 2025-07-09 11:05:21: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 3u
- 2025-07-09 11:05:21: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 7u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>11. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 6u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 8u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>14. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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

*Rapport généré automatiquement le 2025-12-18T11:41:05.794Z*
