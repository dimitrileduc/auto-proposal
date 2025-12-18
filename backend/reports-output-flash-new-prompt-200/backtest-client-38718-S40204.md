# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S40204
- **Date commande** : 2025-11-12 13:01:53
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 35
- **Tokens**: 32,500 input + 12,518 output = 45,018 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 29.5% | 44 produits prédits, 13 corrects |
| **Rappel** | 86.7% | 15 produits réels, 13 détectés |
| **F1-Score** | 44.1% | Score équilibré global |

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
| **MAE** | 1.77 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 109.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 138.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 81.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

## True Positives (13)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 6 | 2 | 4.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 12 | 1 | 11.0 | 1100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 20 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les volumes sont très faibles et cohérents (1-2u). ÉTAPE 2: Données N-1 absentes, pas d'impact saisonnier identifiable sur ce faible volume. ÉTAPE 3: On observe une légère érosion du volume, la dernière commande étant passée à 1 unité le 28/10. Le délai depuis la dernière commande est de 14 jours, ce qui est inférieur au cycle moyen constaté de 20 jours. ÉTAPE 4: Compte tenu de la tendance baissière et de l'absence de régularité forte, une approche conservatrice de 1 unité est recommandée pour couvrir la demande sans risquer le sur-stockage sur un produit à faible rotation linéaire (Slow Mover). Le niveau de confiance est faible en raison de la pauvreté de l'historique (3 points de données). Nous suivons la dernière quantité commandée (1u). Chaque unité supplémentaire doublerait le stock théorique, ce qui est risqué pour ce profil de produit Chips Bio (DLUO à surveiller). Chaque unité supplémentaire représenterait +100% de la demande récente (1u). On préconise donc le maintien à 1u pour valider si le nouveau plateau de consommation est de 1u par cycle de 2-3 semaines. En B2B, il est préférable de rester sur le minimum facturable ou le minimum de commande habituel pour ce type de référence premium et niche. Le réapprovisionnement à la date actuelle (mardi) est cohérent avec la dernière commande passée un mardi également, bien qu'aucun pattern de jour fixe ne soit réellement établi. La priorité est donnée à l'évitement du sur-stockage.

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel irrégulier (tous les 20 à 30 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1.5u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune commande atypique détectée sur l'historique récent (volumes de 1u et 2u), pas d'outliers à exclure. ÉTAPE 2 (Saisonnalité): Manque de données N-1 pour affirmer une saisonnalité, mais le produit bio premium semble suivre une demande de fond stable sans pic automnal majeur. ÉTAPE 3 (Tendance): La moyenne lissée sur les 4 dernières commandes est de 1,5 unité. Le rythme de commande s'est légèrement accéléré entre septembre et octobre (intervalle réduit). ÉTAPE 4 (Recommandation): La base est de 1.5u. Étant donné l'objectif de ne pas sur-stocker et l'historique alternant entre 1 et 2 unités, une commande de 1 unité est recommandée pour maintenir un stock de sécurité minimal tout en restant conservateur face à une demande à faible volume.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle (cycle ~40 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES ANALYSE : 1. Aucun outlier identifié au vu du très faible volume de données. 2. Pas de données N-1 pour confirmer une saisonnalité, bien que le secteur agroalimentaire suggère une stabilité hors périodes festives. 3. Tendance incertaine avec seulement deux points de données (une baisse de 2u à 1u), et un écart de 41 jours entre les commandes. 4. RECOMMANDATION : Le volume est extrêmement faible. Pour éviter le sur-stockage d'un produit bio de niche à faible rotation, je recommande l'unité minimale de 1u pour couvrir le besoin immédiat tout en restant conservateur face à une tendance récente en baisse sur des commandes intermittentes (mardi).

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement de 30 à 45 jours entre les commandes
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée (2u vs moyenne historique de 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité aberrante identifiée, les volumes oscillent naturellement entre 2 et 5 unités. Étape 2: Faible impact saisonnier bien qu'une commande de 5u ait été notée fin octobre en N-1, non reproduite cette année. Étape 3: Tendance baissière marquée sur les deux derniers mois avec un passage constant à 2 unités contre 4 à 5 unités historiquement. Étape 4: En raison du ralentissement de la consommation (demande de fond actuelle à 2u) et de l'absence de pic de mi-novembre l'an dernier, une quantité conservatrice de 2 unités est préconisée pour éviter le sur-stockage.

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle d'environ 30 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
1. DE-EVENTING: La commande de 4u en oct. 2024 est traitée comme un outlier léger (pré-stockage hivernal probable). La demande de fond se stabilise autour de 2u. 2. SAISONNALITÉ: Faible impact observé, bien que l'historique suggère une légère hausse d'activité en fin d'année (N-1). 3. TENDANCE: Les deux dernières commandes (septembre et octobre 2025) sont constantes à 2u, montrant une stabilisation du volume malgré une fréquence espacée. 4. RECOMMANDATION: Maintien du volume de 2u pour couvrir le besoin mensuel sans risque de sur-stockage sur un produit de niche (Poivre 250ml), le jour de commande (mardi) ne présentant pas d'incohérence avec le flux historique.

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.66u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 30 jours (mensuel)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 2.5u à 3u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 6u en oct-2024 est traitée comme un outlier (pic isolé). La demande de fond se situe entre 2 et 3 unités. Étape 2: Faible saisonnalité observée, bien qu'un léger pic apparaisse en fin d'année. Étape 3: Tendance stable sur les 3 derniers mois avec une moyenne de 2.66u. Étape 4: La recommandation de 3 unités permet de couvrir la demande mensuelle habituelle sans risque de sur-stockage massif, tout en tenant compte de la légère remontée des volumes constatée historiquement en fin d'année (nov/dec).

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5.67u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 4u (200.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-32 jours) - Jours variables (mar, mer, jeu)
- **Saisonnalité**: none
- **Tendance**: Légère hausse (+20%) sur les deux derniers mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée, les volumes (5u, 6u, 6u) sont stables et cohérents. ÉTAPE 2 (Saisonnalité): Absence de données N-1, impact considéré comme nul par défaut, bien que la mayonnaise puisse être stable en B2B. ÉTAPE 3 (Tendance): On observe un passage de 5u à 6u stabilisé sur les deux derniers mois, indiquant une demande de fond de 6 unités par cycle mensuel. ÉTAPE 4 (Recommandation): Le cycle de ~30 jours est atteint (dernière commande il y a 33 jours). La quantité de 6 unités permet de maintenir le stock pour le mois à venir sans risque de sur-stockage massif, tout en suivant la tendance haute récente.

</details>


<details>
<summary><strong>8. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée sur les deux seules commandes enregistrées, la demande de fond est fixée à 1 unité. ÉTAPE 2 (Saisonnalité): Données N-1 absentes et historique trop court pour confirmer une saisonnalité, impact considéré comme nul par prudence. ÉTAPE 3 (Tendance): Le volume est parfaitement stable (1u) mais la fréquence est très faible (une commande par mois). La commande actuelle intervient avec un décalage (pas de commande en octobre), ce qui pourrait indiquer un besoin de réapprovisionnement de routine. ÉTAPE 4 (Recommandation): Au vu du très faible historique et du volume constant, une commande de 1 unité est recommandée pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>9. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée unique
- **Saisonnalité**: none
- **Tendance**: Indéterminée (historique insuffisant)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec un seul point de données datant de trois mois (août). Aucune tendance ou saisonnalité ne peut être statistiquement validée. En l'absence de données supplémentaires et en suivant une approche conservatrice en Supply Chain B2B, la recommandation se base sur la seule valeur connue (3 unités) pour couvrir un besoin ponctuel similaire, tout en minimisant le risque de sur-stockage sur un produit à rotation apparemment faible.

</details>


<details>
<summary><strong>10. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 12u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: low)
- 📊 **Baseline N-1**: 12u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 11u (1100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern détecté (nouveau produit ou absence d'historique)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (absence de données)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale d'historique de commandes (N-1 et période récente), la recommandation se base sur une unité de conditionnement standard type 'carton de lancement' ou 'fond de rayon minimum' pour un produit type boisson 330ml en secteur B2B. Une quantité conservatrice de 12 unités (généralement un fardeau ou un carton) est préconisée pour initier le référencement sans risque de surstockage majeur. La confiance est faible due au manque de données transactionnelles.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 15:03:31: 1u
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 15:03:31: 1u
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 15:03:31: 1u
- 2025-09-17 11:26:26: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:43:32: 5u
- 2024-08-21 13:55:22: 4u
- 2024-07-15 07:59:25: 5u
- 2024-04-15 06:24:25: 3u
- 2024-03-12 14:06:41: 4u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 11:32:03: 2u
- 2025-09-17 11:26:26: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:43:32: 4u
- 2024-08-21 13:55:22: 2u
- 2024-04-15 06:24:25: 3u
- 2024-03-12 14:06:41: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 11:32:03: 3u
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:43:32: 6u
- 2024-07-15 07:59:25: 4u
- 2024-07-01 07:05:34: 3u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 11:32:03: 6u
- 2025-09-17 11:26:26: 6u
- 2025-08-19 12:02:03: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [RIT07] RITCHIE Orange - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-19 12:02:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [JOY07] JOY! Organic Fig Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 12:02:03: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 12u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (31)

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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Stock prédit: 1.1u (14j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: 0.1u (0j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | Stock prédit: 0.9u (11j restants) → prédit 2u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: 0.8u (8j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: 1.8u (19j restants) → prédit 3u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Stock prédit: 1.4u (11j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: -0.1u (0j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.2u (3j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 0.1u (0j restants) → prédit 2u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 1.1u (14j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: -0.6u (-12j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: -0.6u (-12j restants) → prédit 2u mais non commandé |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Stock prédit: -0.3u (-7j restants) → prédit 1u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 2 | Stock prédit: -0.3u (-4j restants) → prédit 2u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: -0.2u (-5j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: -0.2u (-5j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.3u (27j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: -0.8u (-15j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 3 | Stock prédit: -3.1u (-27j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.6u (-18j restants) → prédit 2u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Stock prédit: -2.1u (-34j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: 0.4u (24j restants) → prédit 1u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.9u (-29j restants) → prédit 2u mais non commandé |
| [JF021] JF PICKLES 350 ML | 1 | Stock prédit: -3.0u (-48j restants) → prédit 1u mais non commandé |


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
| [MANA02] MANA natural energy drink - tropical passion 250ml | 1 | Stock suffisant: 0.8u (63j restants > seuil 30j) |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock suffisant: 0.7u (69j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:10:12.885Z*
