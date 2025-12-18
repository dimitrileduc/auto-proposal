# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S39452
- **Date commande** : 2025-10-01 07:17:25
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 51,349 input + 17,948 output = 69,297 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.5% | 29 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

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
| **MAE** | 1.10 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 78.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 95.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 78.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv17] Mélange de noix bio vrac 2,75kg | 5 | 1 | 4.0 | 400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec tendance hebdomadaire (mercredis et mardis). Dernière commande 24-09-2025 (mercredi). Historique suggère un cycle approximatif de 7-8 jours avec une préférence pour les mardis/mercredis.
- **Saisonnalité**: none
- **Tendance**: Baisse progressive: 4u (22-07) → 3u (19-08) → 2u (02-09 et 17-09 et 24-09). Stabilisation récente autour de 2u les 3 dernières commandes.
- **Outliers détectés**: 4u, 3u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: L'historique montre 5 commandes sur 3 mois avec un pattern plutôt irrégulier mais clairement orienté vers les jours de semaine (mardis/mercredis). Les intervalles varient entre 7 et 38 jours, suggérant un comportement d'achat non-régulier, probablement lié à un besoin client lui-même variable.

DÉTECTION DE TENDANCE: Évolution nette à la baisse: 4u→3u→2u→2u→2u. Les trois dernières commandes (02-09, 17-09, 24-09) sont toutes à 2u, indiquant une STABILISATION du niveau de demande à 2 unités.

ANALYSE DU JOUR CIBLE: La prédiction demandée est un MARDI (30-09-2025). L'historique montre que les commandes arrivent indistinctement les mardis ET mercredis, avec une légère préférence observée pour les mercredis (3/5 commandes). Un mardi de commande n'est donc pas anormal.

ÉVALUATION OUTLIERS: Les valeurs 4u (22-07) et 3u (19-08) constituent des pics par rapport aux 2u actuels. Aucun contexte de promotion ou anomalie signalée → ces pics pourraient refléter une consommation client antérieurement plus élevée, progressivement réduite.

ABSENCE DE SAISONNALITÉ N-1: Pas de données N-1 disponibles → impossible de modéliser un effet saisonnier automnal. Le produit RITCHIE Citron-Framboise en septembre pourrait potentiellement bénéficier d'une saisonnalité estivale décroissante, mais sans données, on ne peut la quantifier.

DÉCISION FINALE: La tendance stabilisée sur 3 points à 2u + l'absence de pattern saisonnier fort + le manque de données N-1 justifient une prédiction ancrée sur cette demande stable de 2 unités. Baseline = 2.4u (moyenne légèrement pondérée vers les valeurs récentes) → RECOMMANDATION: 2 unités.

Confiance MEDIUM car: ✓ pattern clair et stable récemment; ✗ peu de données historiques (5 points); ✗ aucune donnée N-1 pour saisonnalité; ✗ irrégularité des intervalles.

</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.6u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans cycle strict détecté. Dernière commande mercredi 24/09 (6j avant), pattern antérieur suggest commandes mardi-mercredi espacées de 7-30j
- **Saisonnalité**: none
- **Tendance**: Stable autour de 3.6u en moyenne. Dernière commande: 2u (légère baisse), avant: 4u (retour à la normale)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: L'historique montre 5 commandes sur ~2 mois (juillet à septembre). Les intervalles varient: 9j (17/9→24/9), 46j (2/9→17/9), 14j (19/8→2/9), 28j (22/7→19/8). Aucun cycle hebdomadaire strict (mardi vs mercredi). PRÉDICTION DE JOUR: La date demandée est MARDI 2025-09-30 (J+6 après la dernière commande du mercredi 24/9). Ce mardi s'aligne avec 3 des 5 commandes (2/9, 19/8, 22/7 étaient marindis/autres jours). Pattern suggère: client commande mardi OU mercredi, avec un rythme approximatif bi-hebdomadaire à mensuel. TENDANCE: Moyenne arithmétique = (2+4+3+5+4)/5 = 3.6u. Dernière donnée (2u le 24/9) semble basse - possible rattrapage partiel à prévoir. Pénultième (4u) représente mieux la baseline. ABSENCE DE SAISONNALITÉ N-1: Aucune donnée N-1 disponible pour identifier des pics saisonniers (ex: événements récurrents août-septembre). DÉCISION: Mardi étant un jour de commande probable historiquement, et avec 6 jours écoulés depuis la dernière, je prédis un retour vers la baseline moyenne (3-4u). La dernière commande basse (2u) suggère absence de rattrapage accumulé majeur. Quantité recommandée: 4u (plus probable que 3u car aligne avec pénultième commande, stabilité observée).

</details>


<details>
<summary><strong>3. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - Pattern hebdomadaire faible (3 mercredis espacés de 7-8 jours, 3 mardis espacés de ~45-50 jours). Pas de cycle régulier strict détecté.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2-4u - moyenne 2.8u. Pas de hausse ou baisse nette observable sur 5 données.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE DÉTAILLÉE:**

Intervalles observés:
- 2025-07-22 (mar.) → 2025-08-19 (mar.): 28 jours
- 2025-08-19 (mar.) → 2025-09-02 (mar.): 14 jours  
- 2025-09-02 (mar.) → 2025-09-17 (mer.): 15 jours
- 2025-09-17 (mer.) → 2025-09-24 (mer.): 7 jours

Observation: Les commandes ne suivent pas un jour fixe ni un cycle régulier strict. Le jour varie (mardi/mercredi) et les intervalles fluctuent (7j, 14j, 15j, 28j). Cela suggère une gestion réactive plutôt que programmée.

**ANALYSE DES QUANTITÉS:**
- Plage: 2-4 unités
- Distribution: [2u, 4u, 2u, 3u, 3u]
- Moyenne: 2.8u
- Pas d'outlier détecté (pas d'événement exceptionnel flagrant)

**GESTION DE LA DATE DE PRÉDICTION (2025-09-30, mardi):**
- Dernière commande: 2025-09-24 (mercredi) = 6 jours avant
- Le client n'a jamais commandé deux fois dans un intervalle de 6 jours
- Cet intervalle court suggère une possible rupture du rythme habituel
- Cependant, les données sont trop éparses pour affirmer un rattrapage imminent

**ABSENCE DE SAISONNALITÉ:**
- Pas de données N-1 pour détecter des pics saisonniers (promotions, périodes festives)
- Profil stable sur la période récente (septembre)

**DÉCISION FINALE:**
- Baseline: 2.8u (moyenne conservatrice, données réelles)
- Aucune tendance haussière ou baissière nette à appliquer
- Pas de signal fort de rattrapage (intervalle 6j anormal mais isolé)
- Recommandation: **3 unités** (arrondi à l'entier supérieur de la moyenne, représente un équilibre prudent-efficace)

Niveau de confiance: MEDIUM (seulement 5 données, pattern peu régulier, pas de N-1)

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pas de pattern hebdomadaire régulier détecté. Commandes irrégulières espacées de 12 à 46 jours (17 sep, 2 sep, 19 août, 14 juillet). Aucun jour fixe de commande observable.
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u. Moyenne historique: 1.75u. Pas d'indice de hausse ou baisse tendancielle.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **RYTHME & PÉRIODICITÉ**
   - 4 commandes en ~2.5 mois: un client peu actif et irrégulier
   - Intervalles observés: 46j (juil→août), 14j (août→sep), 15j (sep→sep)
   - Aucun jour de semaine dominant (lun, mar, mer observés)
   - Pas de cycle hebdomadaire identifié → client ad-hoc, pas d'approvisionnement systématique

2. **QUANTITÉS & TENDANCE**
   - Historique: 2u (17 sep), 1u (2 sep), 2u (19 août), 2u (14 juil)
   - Moyenne: 1.75u | Médiane: 2u
   - Plage très réduite (1-2u): demande très stable, peu volatile
   - Pas de pic exceptionnel → aucun outlier identifié
   - Pas d'indice de croissance ou déclin: la demande oscille autour de 1-2u

3. **SAISONNALITÉ**
   - N-1 absent: impossible d'identifier un pattern saisonnier
   - Produit agroalimentaire (jus de fruit): généralement plus demandé en été
   - Dates disponibles (juil-sep) sont dans la saison chaude, ce qui peut soutenir la demande
   - Impact présumé: FAIBLE à NUL (données insuffisantes)

4. **PRÉDICTION POUR 30-SEP (MARDI)**
   - Commande sur mardi: client a commandé mardi le 2 sep (28j avant)
   - Si cycle ~28-30j existait: attendu autour de 30 sep ✓
   - Quantité probable: base 1-2u, sans motif d'augmentation

5. **DÉCISION FINALE**
   - Baseline: 1.75u → arrondi à 2u (médiane et dernière commande)
   - Confiance FAIBLE: seulement 4 points de données, rythme très irrégulier
   - Stratégie conservative: recommande 2u (ni surgonflement, ni sous-stock risqué)
   - MAPE optimal: viser la modalité (2u) plutôt que la moyenne (1.75u)

</details>


<details>
<summary><strong>5. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 4u (400.0%)
- 📉 **Erreur Médiane**: 4u (400.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern insuffisamment clair - seulement 2 commandes en 3 mois. Intervalle observé: 44 jours entre commandes (lun. 04/08 → mer. 17/09). Impossible de confirmer un cycle hebdomadaire ou mensuel régulier.
- **Saisonnalité**: none
- **Tendance**: Hausse légère: 4u (04/08) → 5u (17/09), soit +25%. Tendance positive mais insuffisamment robuste pour être confirmée.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
CONTEXTE CRITIQUE: Seules 2 commandes en 3 mois disponibles → données très limitées pour une prédiction fiable.

ANALYSE RYTHMIQUE:
- 04/08/2025 (lun.): 4u
- 17/09/2025 (mer.): 5u
- Intervalle: 44 jours (~6 semaines) - pas de pattern hebdomadaire clair
- Aucune régularité jour fixe détectable avec 2 points de données seulement

TENDANCE:
- Légère hausse observée: +1u (+25% en proportions)
- Peut indiquer une croissance progressive de la demande
- MAIS avec seulement 2 points, il est prématuré d'affirmer une tendance stable

SAISONNALITÉ:
- Aucune donnée N-1 disponible → impossible d'évaluer les pics saisonniers (ex: fin d'année)
- Pas de signal saisonnier détectable dans la fenêtre réduite

PRÉDICTION POUR 30/09/2025 (mardi):
- Date cible est à 13 jours de la dernière commande (17/09/mer.)
- Baseline théorique: moyenne simple = 4.5u
- Tendance positive légère appliquée: +0.5u
- **Quantité recommandée: 5 unités**
- Justification: 5u représente la dernière observation et capture la tendance haussière modérée

CONFIANCE: LOW
- Données insuffisantes pour un MAPE fiable
- Nécessiterait historique complet d'au moins 3-6 mois avec cycles clairs
- Recommandation: Valider cette prédiction dès que davantage de commandes seront enregistrées

</details>


<details>
<summary><strong>6. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern très irrégulier - Seulement 2 commandes en 3 mois (intervalle de 44 jours entre les 2). Commande 1: mercredi 2025-09-17, Commande 2: lundi 2025-08-04. Aucune régularité hebdomadaire ou mensuelle détectable.
- **Saisonnalité**: none
- **Tendance**: Données insuffisantes pour établir une tendance fiable. Observations: première commande (2u), seconde commande (3u) = +50% sur 1 mois. Cependant, la volumétrie très faible et l'irrégularité rendent toute extrapolation hasardeuse.
- **Outliers détectés**: 3u, 2u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ ANALYSE RYTHMIQUE:
   - Historique très réduit: 2 commandes seulement en 3 mois
   - Intervalle: 44 jours entre 2025-08-04 et 2025-09-17 (aucune régularité visible)
   - Jours différents: lundi vs mercredi (pas de pattern jour fixe)
   - Conclusion: Aucun cycle détectable (hebdomadaire, bimensuel ou mensuel)

2️⃣ FILTRAGE OUTLIERS:
   - Quantités très faibles et homogènes: 2u et 3u
   - Aucun pic/creux exceptionnel identifiable
   - Pas de contexte promotionnel ou anormal évident
   - Les 2 valeurs semblent représenter une demande "stable" mais très réduite

3️⃣ SAISONNALITÉ:
   - Aucune donnée N-1 pour comparer
   - Période actuelle (août-septembre): potentiellement saisonnière pour noix de pécan, mais impossibilité de la démontrer
   - Impact: **NONE** (données insuffisantes)

4️⃣ TENDANCE:
   - 2u (04-08) → 3u (17-09) = hausse modérée de +50%
   - Intervalle long (44j) suggère une demande sporadique/très irrégulière plutôt qu'une "vraie tendance"
   - Conclusion: Tendance faible, peu fiable

5️⃣ SYNTHÈSE & DÉCISION:
   - **Baseline théorique**: Moyenne simple = (2+3)/2 = 2.5u
   - **Volatilité**: Écart 2-3u sur échantillon très réduit = risque majeur
   - **Stratégie conservation**: Partir sur la médiane/valeur la plus fréquente observée = **2 unités**
   - **Justification**: En agroalimentaire B2B avec demande aussi sporadique, il vaut mieux rester prudent et éviter une surcommande. Le client commandera à nouveau s'il a des besoins additionnels (cycle visiblement non-contraint)

**CONFIANCE: LOW** - Données trop rares et irrégulières pour une prédiction robuste. Marge d'erreur potentielle : ±1 unité.

</details>


<details>
<summary><strong>7. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern peu clair - 3 commandes dispersées sur 2.5 mois (intervalle moyen 45j). Mardi semble récurrent (2/3 commandes), mais données insuffisantes pour établir cycle fiable.
- **Saisonnalité**: none
- **Tendance**: Légère hausse vers 2u (dernière commande 2025-09-02), mais base très instable
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**ANALYSE CRITIQUE:**

1️⃣ **RYTHME IDENTIFIÉ (Faible confiance)**
   - 3 commandes seulement : 2025-07-14 (lun.) → 2025-08-19 (mar., +36j) → 2025-09-02 (mar., +14j)
   - Pas de cycle clair : alternance 36j puis 14j ≠ pattern régulier
   - Jour de semaine: 2 mardis vs 1 lundi → mardi légèrement favorisé mais trop peu de données
   - Prédiction pour MARDI 2025-09-30 : cohérent avec dernière commande (mardi 2025-09-02)
   - Intervalle depuis dernière commande : +28j

2️⃣ **QUANTITÉS OBSERVÉES**
   - 1u (2025-07-14) → 1u (2025-08-19) → 2u (2025-09-02)
   - Moyenne simple : 1.33u
   - Dernière commande = 2u (signal possible d'augmentation de consommation)
   - Pas d'outliers clairs détectables avec N=3

3️⃣ **SAISONNALITÉ**
   - Aucune donnée N-1 → **saisonnalité = "none"** (impossible à évaluer)
   - Juillet-septembre en agro B2B : légère activité estivale mais pas de pic saisonnier évident pour boissons citron

4️⃣ **TENDANCE**
   - Signal haussier faible : 1u → 1u → 2u (+100% en 2 commandes)
   - Mais base trop maigre pour valider montée structurelle
   - Classement : "Hausse progressive 1→2u" (prudent)

5️⃣ **DÉCISION FINALE**
   - Baseline théorique = 1.33u (moyenne)
   - Dernier signal = 2u (poids élevé, le plus proche temporellement)
   - Intervalle de 28j depuis 2025-09-02 : compatible avec cycle (ni trop court, ni trop long)
   - **Recommandation = 2u** (privilégie le signal récent + tendance haussière)
   
6️⃣ **CONFIANCE = LOW**
   - Seulement 3 points de données historiques
   - Pattern non confirmé (2-3 cycles minimum requis)
   - Aucune saisonnalité calibrée
   - MAPE attendu : élevé (±30-50% probable)
   
**SYNTHÈSE:** Prediction de 2u repose sur la dernière commande (2u) + jour de semaine cohérent (mardi). Risque: si cycle réel est ~40j vs ~30j, le client pourrait commander plus tard en octobre. **À monitorer hebdomadairement après 2025-10-07.**

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque mardi, cycle régulier d'environ 30-40 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1.3u en moyenne, sans tendance haussière ou baissière nette
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **ANALYSE RYTHMIQUE**
   - 2025-09-02 (mar.) → 1u
   - 2025-08-19 (mar.) → 2u
   - 2025-07-22 (mar.) → 1u
   
   Intervalle 1: 09-02 à 08-19 = 14 jours (2 semaines)
   Intervalle 2: 08-19 à 07-22 = 28 jours (4 semaines)
   
   Pattern identifié: Commandes systématiquement le MARDI, avec un cycle irrégulier (14j puis 28j). La date de prédiction (2025-09-30) est également un mardi → COHÉRENCE CYCLE MAINTENUE.

2. **FILTRAGE DES OUTLIERS**
   - Aucune donnée N-1 disponible → Pas de comparaison saisonnière possible
   - Les quantités (1u, 2u, 1u) sont faibles et typiques d'une petite structure B2B
   - Pas d'événement exceptionnel détecté dans les 3 derniers mois
   - Le pic de 2u du 19-08 n'est pas assez important pour être considéré comme aberration

3. **SYNTHÈSE STATISTIQUE**
   - Moyenne: (1 + 2 + 1) / 3 = 1.33u
   - Médiane: 1u
   - Dernière commande: 1u (signal de stabilité)
   - Baseline théorique: 1.3u

4. **RAISONNEMENT FINAL**
   - Pas de saisonnalité identifiable (N-1 manquant)
   - Pas de tendance claire (variation normale 1-2u)
   - Pattern rythmique maintenu (mardi régulier)
   - La demande tend vers 1u (médiane) avec légère hausse ponctuelle en août
   
   Prédiction: Arrondir à 1u (la valeur la plus fréquente et la plus récente)
   
   Cette quantité reflète fidèlement la probabilité la plus élevée sans surstock inutile, cohérente avec les 2/3 dernières commandes à 1u et le pattern stable observé.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 2u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u
- 2025-07-22 06:58:35: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u
- 2025-09-02 06:42:42: 3u
- 2025-08-19 11:00:28: 5u
- 2025-07-22 06:58:35: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u
- 2025-07-22 06:58:35: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:34:27: 2u
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u
- 2025-07-14 13:52:07: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:33:32: 5u
- 2025-08-04 13:50:22: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:33:32: 3u
- 2025-08-04 13:50:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 1u
- 2025-07-14 13:52:07: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u
- 2025-07-22 06:58:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (19)

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
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: 0.5u (4j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | Stock prédit: 2.2u (14j restants) → prédit 3u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | Stock prédit: 1.5u (14j restants) → prédit 3u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 2 | Stock prédit: 0.6u (20j restants) → prédit 2u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | Stock prédit: 0.9u (9j restants) → prédit 2u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: 0.6u (17j restants) → prédit 1u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 3 | Stock prédit: 0.5u (3j restants) → prédit 3u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | Stock prédit: 3.1u (19j restants) → prédit 5u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Stock prédit: 0.9u (24j restants) → prédit 2u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: -0.8u (-17j restants) → prédit 2u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | Stock prédit: -0.8u (-17j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | Stock prédit: -0.8u (-17j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: -0.6u (-15j restants) → prédit 1u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 5 | Stock prédit: 0.5u (28j restants) → prédit 5u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -1.0u (-29j restants) → prédit 1u mais non commandé |


---

## False Negatives (1)

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
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Stock suffisant: 0.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:13:52.902Z*
