# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S39719
- **Date commande** : 2025-10-14 10:33:03
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 17
- **Tokens**: 34,422 input + 9,260 output = 43,682 total
- **Coût**: $0.2422 (~24.22¢)
- **Coût par produit LLM**: $0.0142


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
| **MAE** | 1.07 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 44.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [RISH04] RISH kombucha BIO - smash basil 330ml | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 3u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables: 23j, 12j, 17j, 37j entre commandes
- **Saisonnalité**: none
- **Tendance**: Hausse progressive +150% (de 1u à 2-4u sur 3 mois)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Le produit montre un pattern irrégulier sans jour fixe (mer-mer-ven-mar), avec des intervalles très variables (12 à 37 jours). La dernière commande date du 10 sept (34 jours avant la prédiction du 14 oct), ce qui suggère qu'une commande est imminente.

TENDANCE: Croissance nette observée sur 3 mois: 1u (juil) → 1u (août début) → 2u (août fin) → 4u (sept). La commande de 4u pourrait être un léger outlier (rattrapage après 21j sans commande), mais la moyenne des 3 dernières commandes (2,33u) montre une demande qui s'établit autour de 2-3u.

ABSENCE DE SAISONNALITÉ: Aucune donnée N-1 pour confirmer un pattern saisonnier. Le produit semble en phase de développement commercial (volumes faibles mais croissants).

DÉCISION: Baseline théorique à 2,5u (moyenne pondérée excluant partiellement le pic de 4u). Arrondi à 3u pour refléter la tendance haussière récente tout en restant conservateur face à la volatilité. La prédiction de 3u représente un équilibre entre la demande de fond (2u) et le potentiel de croissance observé.

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
- **Pattern temporel**: Irrégulier - intervalles variables (13-21-43 jours)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1u (hors outlier)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** : Les 4 commandes récentes montrent des intervalles très irréguliers : 13 jours (10/09→20/08), 12 jours (20/08→08/08), et 17 jours (08/08→22/07). Aucun pattern hebdomadaire ou mensuel clair détectable. La prochaine commande prévue le 14/10 intervient 34 jours après la dernière (10/09), suggérant un client à commandes sporadiques.

**FILTRAGE OUTLIERS** : La commande de 2u du 08/08 (vendredi) est identifiée comme outlier. Les 3 autres commandes (22/07, 20/08, 10/09) sont toutes de 1u, établissant clairement la demande de base. Aucune donnée N-1 pour valider une récurrence saisonnière.

**TENDANCE** : Stabilité autour de 1u (75% des commandes). Pas de tendance haussière ou baissière marquée. Le produit semble avoir une demande de niche constante.

**DÉCISION** : En l'absence de pattern temporel précis et avec une demande stabilisée à 1u (hors événement ponctuel), la baseline de 1u est la prédiction la plus probable. La date du mardi 14/10 ne présente pas de particularité saisonnière identifiable. Confiance moyenne car historique court (seulement 4 points) mais comportement récent cohérent.

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
- **Pattern temporel**: Commande ~mensuelle (21-30j d'intervalle)
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse Rythmique**: Les 3 dernières commandes montrent un pattern mensuel régulier:
- 22 juillet → 20 août (29 jours)
- 20 août → 10 septembre (21 jours)
Le client semble commander environ tous les 25-30 jours. La date de prédiction (14 octobre) se situe 34 jours après la dernière commande du 10 septembre, ce qui correspond au rythme habituel légèrement prolongé.

**Stabilité Totale**: Les 3 dernières commandes sont parfaitement stables à 4u, sans aucune variation. Aucun outlier détecté.

**Absence de Saisonnalité**: Pas de données N-1 pour évaluer l'impact saisonnier. Sur les 3 mois disponibles (juillet-septembre), aucune variation n'est observable.

**Décision**: Avec une stabilité parfaite sur 3 commandes consécutives et un rythme mensuel régulier qui correspond à la date de prédiction, la quantité la plus probable est 4u. Confidence "medium" car l'historique est limité (seulement 3 points) et sans validation saisonnière N-1.

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (20-33 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation 2-3u autour d'une moyenne constante
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: 
Historique très limité avec 3 commandes sur 3 mois:
- 22/07 → 08/08 : 17 jours (2u)
- 08/08 → 10/09 : 33 jours (3u)
- 10/09 → 14/10 : 34 jours

Pattern irrégulier, pas de récurrence hebdomadaire claire. La fréquence semble mensuelle allongée (~30-35j récemment).

**FILTRAGE OUTLIERS**:
La commande de 3u du 08/08 apparaît comme légèrement supérieure aux autres (2u). Cependant, avec seulement 3 points de données, il est difficile de qualifier définitivement cette valeur d'outlier. Elle pourrait représenter une variation naturelle de la demande.

**SYNTHÈSE**:
- Absence totale de données N-1 : pas d'analyse saisonnière possible
- Tendance stable : oscillation entre 2-3u sans direction claire
- Moyenne observée : 2.33u
- Dernière commande (la plus récente, 10/09) : 2u
- Pas de signal de hausse structurelle

**DÉCISION**:
En l'absence de saisonnalité identifiable et avec une tendance stable, je privilégie la valeur modale observée (2u apparaît 2 fois sur 3) et la dernière commande connue. La baseline théorique de 2.3u conduit naturellement à une recommandation de **2 unités**, choix le plus probable pour minimiser le MAPE en contexte de demande faible et régulière.

Confiance medium car historique limité (3 points) mais pattern cohérent.

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
- **Pattern temporel**: Irrégulier - 2 commandes en 3 mois (intervalle ~33 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse -33% (de 3u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Historique très limité avec seulement 2 commandes sur 3 mois (08/08 et 10/09), soit un intervalle d'environ 33 jours. Le prochain cycle théorique tomberait mi-octobre, compatible avec la date de prédiction (14/10). Aucun pattern hebdomadaire clair détectable. **FILTRAGE OUTLIERS**: Aucune donnée N-1 pour validation saisonnière. Les 2 quantités (3u et 2u) sont cohérentes pour un produit de niche bio - pas d'outlier identifié. **TENDANCE**: Légère baisse de 3u à 2u (-33%), mais sur échantillon trop faible pour confirmer une vraie tendance structurelle. **DÉCISION**: En l'absence de saisonnalité établie et avec un historique minimal, je privilégie la donnée la plus récente (2u du 10/09) qui reflète le comportement actuel du client. La baseline théorique de 2.5u (moyenne) est arrondie à 2u car : 1) Tendance récente à 2u, 2) Produit premium bio à rotation lente, 3) Principe de précision > prudence. **Confiance LOW** en raison du manque critique de données historiques pour valider le pattern.

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
- **Pattern temporel**: Irrégulier - Environ 20-30 jours d'intervalle (21j entre juil-août, 21j entre août-sept)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante de 2u sur toutes les commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le client présente un pattern d'achat irrégulier mais relativement prévisible avec des intervalles de ~21 jours (22/07→20/08: 29j, 20/08→10/09: 21j). La prochaine commande prédite au 14/10 représente 34 jours depuis la dernière (10/09), ce qui reste dans la fourchette observée.

**STABILITÉ TOTALE**: Les 3 dernières commandes montrent une cohérence parfaite à 2 unités, sans aucune variation. Aucun outlier détecté, aucune tendance à la hausse ou à la baisse.

**ABSENCE DE SAISONNALITÉ**: Sans données N-1 et avec seulement 3 points sur une période de 3 mois, aucun pattern saisonnier n'est identifiable. Le produit (barre chocolat bio) peut avoir une légère saisonnalité, mais les données actuelles ne le confirment pas.

**DÉCISION**: Dans ce contexte B2B avec demande régulière et stable, la prédiction la plus précise est de maintenir la quantité habituelle de 2 unités. Toute variation serait une sur-interprétation des données disponibles. Confiance élevée car pattern très stable.

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables: 19j, 12j, 21j. Pas de pattern hebdomadaire clair.
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité - oscillation entre 1-3u sans tendance nette
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 4 commandes récentes (22/07, 08/08, 20/08, 10/09) montrent des intervalles irréguliers (17j, 12j, 21j) sans pattern hebdomadaire fixe. La prédiction au 14/10 représente 34 jours depuis la dernière commande du 10/09, ce qui est dans la fourchette observée mais légèrement plus long.

**FILTRAGE OUTLIERS**: Aucun pic exceptionnel détecté. Les quantités (2u, 3u, 1u, 3u) montrent une oscillation normale entre 1-3 unités, typique d'un produit de niche bio à rotation modérée. Pas de données N-1 pour identifier des effets saisonniers.

**SYNTHÈSE**: Avec une moyenne arithmétique de 2.25u et une médiane de 2.5u sur les 4 dernières commandes, et compte tenu de l'absence de tendance haussière ou baissière marquée, la prédiction optimale se situe à 2u. C'est la valeur qui minimise le risque d'erreur (MAPE) dans un contexte de demande stable mais faiblement prévisible. La commande la plus ancienne (22/07) et la plus récente (10/09) sont toutes deux à 2-3u, renforçant ce niveau de base.

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
- **Pattern temporel**: Irrégulier avec intervalles variables (21-12-19 jours) - pas de pattern hebdomadaire fixe
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u avec légère concentration vers 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 4 commandes disponibles montrent des intervalles irréguliers (22 juil → 8 août = 17j, 8 août → 20 août = 12j, 20 août → 10 sept = 21j). Aucun pattern hebdomadaire fixe détecté. La prédiction tombe 34 jours après la dernière commande du 10/09, ce qui dépasse largement le cycle moyen de ~17 jours, suggérant qu'une commande est probable.

**ANALYSE DES QUANTITÉS**: Sur 4 observations, 3 fois 2u et 1 fois 1u. Aucun outlier détecté - les quantités restent très homogènes et faibles (produit de niche bio). La tendance est stable sans hausse ni baisse marquée.

**ABSENCE DE SAISONNALITÉ**: Pas de données N-1 pour confirmer un effet saisonnier. Octobre ne présente pas a priori de saisonnalité forte pour ce type de produit bio.

**DÉCISION**: La baseline théorique est de 1.75u (moyenne des 4 commandes). Vu la prédominance de 2u (75% des cas) et l'intervalle long écoulé depuis la dernière commande (rattrapage probable), je recommande **2 unités** comme quantité la plus probable. Confiance medium car l'historique est court (4 points seulement) mais le pattern quantitatif est cohérent.

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (15j, 33j, 65j) - Faible fréquence d'achat
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante à 2u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 3 commandes observées montrent des intervalles très irréguliers (22 juil → 8 août = 17j, 8 août → 10 sept = 33j). Aucun pattern hebdomadaire ou mensuel clair n'émerge. Le produit semble commandé de manière opportuniste/sporadique, typique d'un produit de niche bio en B2B.

**FILTRAGE OUTLIERS**: Aucune anomalie détectée. Les 3 commandes sont parfaitement constantes à 2 unités, ce qui indique un calibrage de besoin stable (probablement format d'échantillonnage, rotation minimaliste ou client de petite taille).

**SYNTHÈSE & DÉCISION**: 
- Absence de données N-1 = impossible de valider un effet saisonnier à mi-octobre
- Quantité ultra-stable (100% des commandes = 2u) = forte prévisibilité du quantum
- Date de prédiction (14 oct) = 34 jours après dernière commande (10 sept), cohérent avec l'intervalle moyen observé (~25-33j)

**Logique finale**: En l'absence de variation historique et avec un pattern quantitatif parfaitement constant, la prédiction la plus probable reste **2 unités**. La confiance est "medium" car le faible historique (3 points) et l'irrégularité temporelle créent une incertitude sur le timing exact, mais la quantité conditionnelle (SI commande) est hautement prévisible.

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
- **Pattern temporel**: Irrégulier ~25-30j - Commandes sporadiques sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante de 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le client présente un pattern irrégulier avec des commandes espacées de ~21-30j (22/07→20/08: 29j, 20/08→10/09: 21j). Les commandes tombent sur différents jours (mardi, mercredi), indiquant une absence de cycle hebdomadaire fixe. Depuis le 10/09, nous sommes à 34 jours d'écart au 14/10, ce qui dépasse légèrement l'intervalle habituel mais reste dans la plage observée - un léger retard possible suggérant une commande imminente.

**DÉTECTION OUTLIERS**: Aucune anomalie détectée. Les 3 commandes récentes sont parfaitement homogènes à 2u, suggérant un besoin récurrent stable, probablement lié à un usage régulier en test/échantillon ou petite distribution.

**TENDANCE & SAISONNALITÉ**: Absence totale de données N-1, donc impact saisonnier non évaluable. La tendance récente est parfaitement stable (2u→2u→2u) sans variation. Pas d'indice de croissance ou décroissance.

**DÉCISION**: Baseline de 2u confirmée par 100% des commandes récentes. Pas de facteur justifiant un ajustement à la hausse ou à la baisse. La prédiction de 2u est la plus probable statistiquement. Confiance moyenne car l'historique est court (3 points seulement) mais très cohérent.

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
- **Pattern temporel**: Données insuffisantes - Une seule commande observée il y a 67 jours
- **Saisonnalité**: none
- **Tendance**: Indéterminé - historique trop limité (1 commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE**: Historique extrêmement limité avec une seule commande de 2 unités le 2025-08-08 (il y a 67 jours).

**ANALYSE RYTHMIQUE**: Impossible de détecter un pattern fiable avec un seul point de données. Aucun cycle hebdomadaire ou mensuel identifiable. L'absence de commandes depuis 67 jours suggère soit :
- Un produit en phase de lancement/test
- Un client occasionnel à très faible fréquence
- Une commande unique sans suite régulière

**SAISONNALITÉ**: Aucune donnée N-1 disponible pour évaluer l'impact saisonnier. La commande unique en août ne permet pas de conclusions.

**DÉCISION**: Face à l'absence quasi-totale de données, j'applique le principe de la dernière observation connue (2 unités) comme meilleure estimation disponible. Cette prédiction est hautement incertaine car :
- Pas de confirmation du rythme de réapprovisionnement
- Pas de visibilité sur la demande réelle du client
- Intervalle de 67 jours suggère une très faible rotation

**RECOMMANDATION**: Valider auprès du commercial si ce client est toujours actif et si des commandes sont attendues. La quantité de 2 unités représente un minimum prudent basé sur l'unique référence historique.

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
- **Pattern temporel**: Données insuffisantes - Une seule commande observée (2025-08-08)
- **Saisonnalité**: none
- **Tendance**: Indéterminé - historique trop limité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE : Données extrêmement limitées**

**1. ANALYSE RYTHMIQUE:**
- Une seule commande dans l'historique : 3 unités le 2025-08-08 (vendredi)
- Intervalle entre dernière commande et date de prédiction : ~67 jours (8 août → 14 octobre)
- Impossible d'identifier un pattern récurrent (hebdomadaire, bimensuel, mensuel)
- Aucune donnée N-1 pour validation saisonnière

**2. FILTRAGE OUTLIERS:**
- Avec un seul point de données, impossible de détecter des anomalies
- La quantité de 3 unités devient la seule référence disponible
- Pas d'éléments permettant de qualifier cette commande d'exceptionnelle ou normale

**3. HYPOTHÈSES ET DÉCISION:**
- **Hypothèse principale** : Le produit est soit nouveau dans l'assortiment, soit commandé de manière très sporadique
- L'intervalle de 67 jours suggère soit : 
  - Un abandon potentiel du produit
  - Une commande très occasionnelle/saisonnière
  - Un produit en phase de test
- **En l'absence totale de pattern**, la seule référence quantitative est la commande de 3 unités
- Principe de parcimonie : répéter la dernière quantité observée en attendant plus de données

**LIMITATION MAJEURE:** Cette prédiction repose sur un historique trop faible pour être fiable. Un monitoring rapproché et une validation auprès du client seraient recommandés.

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
- **Pattern temporel**: Données insuffisantes - Une seule commande historique
- **Saisonnalité**: none
- **Tendance**: Indéterminé - historique trop limité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Contexte critique : historique ultra-limité**

Nous disposons d'une seule commande historique :
- 2025-07-22 (mardi) : 1 unité
- Prédiction demandée : 2025-10-14 (mardi), soit ~84 jours après

**Analyse détaillée :**

1. **RYTHMIQUE** : Impossible à déterminer avec une seule donnée. Nous ne pouvons pas identifier si le client commande hebdomadairement, mensuellement ou de manière irrégulière.

2. **SAISONNALITÉ N-1** : Aucune donnée N-1 disponible, donc impact saisonnier impossible à évaluer.

3. **TENDANCE** : Aucune tendance décelable (nécessiterait minimum 3-4 points de données).

4. **OUTLIERS** : La quantité de 1 unité semble être une commande test ou échantillon, typique d'un nouveau référencement produit.

**Hypothèses et décision :**

Avec 84 jours d'écart depuis la dernière (et unique) commande, deux scénarios possibles :
- **Scénario A** : Produit en phase de test/introduction → commandes sporadiques de faible volume
- **Scénario B** : Client a abandonné le produit → probabilité de commande nulle

En B2B agroalimentaire, une commande unique de 1 unité il y a 3 mois suggère soit un test produit, soit une demande très occasionnelle. Sans pattern établi, la prédiction la plus probable par défaut reste **1 unité** (réplication du seul comportement observé).

**Confiance LOW** : L'absence totale de pattern rend toute prédiction hautement spéculative.

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | Stock prédit: 2.0u (16j restants) → prédit 5u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 4 | Stock prédit: 0.7u (10j restants) → prédit 4u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | Stock prédit: 0.7u (7j restants) → prédit 4u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.7u (-13j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -1.6u (-40j restants) → prédit 1u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -2.5u (-71j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-48j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -2.5u (-71j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T09:06:49.031Z*
