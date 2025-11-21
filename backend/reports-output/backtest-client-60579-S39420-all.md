# Rapport Backtest - Client Wandercoop

## Contexte

- **Client** : Wandercoop (ID: 60579)
- **Commande réelle** : S39420
- **Date commande** : 2025-10-02 06:12:05
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 22,245 input + 4,735 output = 26,980 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 20 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 52.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 54.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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

## True Positives (10)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tentative d'hebdomadaire mer/ven - intervalles variables (2j, 14j, 21j, 22j, 52j)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u (moyenne 1.8u) - commande du 03/09 à 3u semble exceptionnelle
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Pattern irrégulier mais concentration récente sur mercredis (16/07, 03/09, 24/09). La dernière commande date du 24/09 (mercredi) avec 2u, soit 7 jours avant la prédiction (01/10 mercredi). Intervalle cohérent avec rythme hebdomadaire émergent. La commande à 3u du 03/09 semble outlier (21j d'écart précédent, possible rattrapage). Baseline réelle: médiane des 4 dernières = 1.5u, mais les 2 mercredis récents montrent 2u puis retour probable à 2u pour maintenir le rythme. Pas de saisonnalité N-1 disponible. Prédiction: 2u (quantité modale récente, alignée avec dernier mercredi et intervalle hebdomadaire)

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec dominante mercredi (3/4 commandes). Intervalles variables : 21j, 32j, 26j. Pas de rythme fixe détectable.
- **Saisonnalité**: none
- **Tendance**: Stable avec léger biais baisse. Quantités entre 1-3u, moyenne récente ~2u. Dernière commande = 2u.
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Pattern temporel flou mais dominante mercredi confirmée (date prédiction = mercredi). Les 3 dernières commandes mercredi = 2u, 2u, 1u montrant stabilité autour de 2u. La commande de 3u (vendredi août) est isolée et atypique (jour différent + quantité supérieure) = outlier probable. Sans saisonnalité N-1 ni tendance franche, la prédiction repose sur la demande de fond récente. Les 2 derniers mercredis = 2u chacun, ce qui établit un précédent direct pour mercredi prochain. Baseline théorique 2u validée par pattern jour-quantité cohérent. Confidence medium car historique court (4 points) et intervalles irréguliers limitent la certitude, mais convergence vers 2u sur mercredis récents renforce la prédiction.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles variables (21j, 32j, 26j, 7j). Concentration récente sur les mercredis (3/4 dernières commandes)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u avec tendance récente vers 1u (3 des 4 dernières commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très court (4 commandes) sur produit premium/bio à faible rotation. Pattern: intervalles irréguliers (7-32j) avec prédominance mercredis récents. Dernière commande il y a 7j (2025-09-24) = intervalle le plus court observé, suggérant cycle accéléré mais volume unitaire maintenu à 1u. Tendance claire: 3/4 dernières commandes = 1u (seule exception: 2u le 03/09). Sans saisonnalité N-1 ni pattern mensuel stable, la baseline de 1.25u reflète la moyenne, mais la dynamique récente (dernier achat très proche + normalisation vers 1u) indique fortement une commande unitaire. Produit premium à faible vélocité = commandes fréquentes de petits volumes plutôt que stocks importants. Prédiction: 1u (quantité modale et tendance immédiate).

</details>


<details>
<summary><strong>4. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables: 2j (Jul16-18), 21j (Jul18-Aug08), 47j (Aug08-Sep24). Pas de jour fixe détecté
- **Saisonnalité**: none
- **Tendance**: Stable - volumes faibles constants (1-2u), légère hausse récente vers 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern irrégulier avec 4 commandes sur 3 mois (moyenne ~1 commande/23j). La dernière commande date du 24/09 (mer.) soit 7 jours avant la prédiction du 01/10 (mer.). Volumes historiques très faibles et stables (1-2u). Les 2 dernières commandes montrent une légère consolidation vers 2u (Aug08: 2u, Sep24: 2u) après des commandes à 1u en juillet. Sans saisonnalité N-1 et avec un rythme imprévisible, je me base sur la tendance immédiate: les 2 commandes les plus récentes sont à 2u. Le délai de 7j depuis dernière commande reste dans la plage observée. Prédiction: 2u (quantité modale récente, reflète le niveau actuel de demande).

</details>


<details>
<summary><strong>5. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec légère préférence mercredi (3/5 commandes). Intervalle variable: 2j, 21j, 26j, 23j, 21j. Pas de cycle hebdo/mensuel strict.
- **Saisonnalité**: none
- **Tendance**: Stable - Toutes commandes à 1u sur les 3 derniers mois. Aucune variation de volume détectée.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern clair sur 5 dernières commandes: volume constant de 1 unité par commande. Pas de saisonnalité N-1 disponible. Fréquence variable mais quantité invariable (100% des commandes à 1u). Client semble commander unitairement selon besoins ponctuels. Date prédiction mercredi = jour où 60% des commandes récentes ont eu lieu. Sans rupture de stock signalée ni changement de comportement, la probabilité maximale reste 1 unité. Agro B2B produit bio premium: rotation faible typique des références niche.

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec alternance 2-3 semaines (18j, 21j, 26j entre commandes). Pas de jour fixe (mer-ven-ven-mer).
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation 1-2u, moyenne 1.75u sur 4 dernières commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court (4 commandes sur 80j) montrant pattern irrégulier sans saisonnalité N-1. Fréquence moyenne ~20j entre commandes, dernière du 2025-09-03 → 28j d'écart au 2025-10-01, suggérant fenêtre de réapprovisionnement ouverte. Quantités alternent 2-1-2-2u (75% à 2u). Absence d'outliers et stabilité du niveau → prédiction 2u comme valeur modale la plus probable. Pas de surgonflage car pas d'indicateur de hausse ni d'effet rattrapage détectable.

</details>


<details>
<summary><strong>7. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - commandes espacées de 23 à 26 jours
- **Saisonnalité**: none
- **Tendance**: Stable - quantité constante de 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre 3 commandes sur 3 mois (16 juil, 8 août, 3 sept) avec une quantité strictement constante de 1u. L'intervalle moyen est de 24,5 jours. La prédiction au 1er octobre tombe 28 jours après la dernière commande du 3 sept, ce qui est légèrement au-dessus du rythme observé mais reste cohérent avec la variabilité constatée (23-26j). Aucun outlier, aucune saisonnalité N-1 disponible, tendance parfaitement stable à 1u. La recommandation de 1u reflète le pattern systématique observé. Confiance medium car l'historique est court (3 points) et le rythme n'est pas strictement régulier, mais la constance de la quantité unitaire est un signal fort.

</details>


<details>
<summary><strong>8. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables: 2j (16-18 juil), 47j (18 juil-3 sept). Pas de pattern hebdomadaire ou mensuel clair
- **Saisonnalité**: none
- **Tendance**: Stable - Commandes unitaires constantes (1u à chaque fois), fréquence très faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (3 commandes sur 3 mois) avec quantités constantes de 1u. Intervalles variables (2j puis 47j) sans pattern détectable. Absence totale de données N-1 empêche analyse saisonnière. La régularité unitaire suggère commandes opportunistes ou test produit. En l'absence de signal haussier et vu la récurrence du volume unitaire, la prédiction la plus probable reste 1u. Confidence faible car impossible de déterminer si commande aura lieu le 01/10 (rythme très irrégulier).

</details>


<details>
<summary><strong>9. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes en 2 mois (intervalle de 26 jours entre août et septembre)
- **Saisonnalité**: none
- **Tendance**: Stable - volumes très faibles et constants (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique limité (2 commandes seulement) montrant un pattern de faible volume constant. La dernière commande du 03/09 (mercredi) correspond exactement à la date de prédiction (01/10, mercredi aussi), suggérant un cycle mensuel potentiel. Les quantités oscillent entre 1-2u sans outliers. Aucune saisonnalité N-1 disponible. La baseline théorique de 1.5u arrondie à 2u représente le volume le plus probable, cohérent avec la dernière commande et le pattern observé. Pas de surgonflage car produit de niche bio à rotation lente en B2B.

</details>


<details>
<summary><strong>10. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - Seulement 2 commandes observées (mer. 16/07 et ven. 18/07), intervalle de 2 jours
- **Saisonnalité**: none
- **Tendance**: Stable - Volume très faible (1-2u) sur les 2 seules observations
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Contexte critique: historique extrêmement limité (2 commandes seulement sur 3 mois, aucune donnée N-1). Les 2 commandes montrent un pattern micro-volume (1u et 2u) sans régularité identifiable. L'intervalle de prédiction (15/10 vs dernière commande 18/07) représente 2.5 mois de silence - suggère soit un produit de test/niche, soit un abandon progressif. En l'absence de signal saisonnier et face à des volumes unitaires systématiques, la baseline théorique de 1.5u reflète la moyenne observée. Cependant, la probabilité d'une commande nulle est élevée. Par prudence méthodologique et respect du minimum requis (>=1), je recommande 1u comme quantité la plus probable si commande effective, tout en soulignant que le scénario 'pas de commande' est statistiquement plausible. Confiance faible en raison du manque critique de données structurantes.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:59:39: 2u
- 2025-09-03 06:51:32: 3u
- 2025-08-08 11:54:27: 1u
- 2025-07-18 10:48:56: 2u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:59:39: 2u
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 3u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:59:39: 1u
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 1u
- 2025-07-18 10:48:56: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:59:39: 2u
- 2025-08-08 11:54:27: 2u
- 2025-07-18 10:48:56: 1u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:59:39: 1u
- 2025-09-03 06:51:32: 1u
- 2025-08-08 11:54:27: 1u
- 2025-07-18 10:48:56: 1u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 2u
- 2025-07-18 10:48:56: 2u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:51:32: 1u
- 2025-08-08 11:54:27: 1u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:51:32: 1u
- 2025-07-18 10:48:56: 1u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>10. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-18 10:48:56: 2u
- 2025-07-16 06:25:08: 1u

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.8u (28j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.7u (17j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.6u (11j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 1.4u (13j restants) → prédit 2u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Stock prédit: 0.7u (15j restants) → prédit 1u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Stock prédit: 0.7u (15j restants) → prédit 1u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.2u (-14j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T13:34:15.000Z*
