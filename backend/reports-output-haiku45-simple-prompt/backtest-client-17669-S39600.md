# Rapport Backtest - Client Epicerie Uhoda Beaufays

## Contexte

- **Client** : Epicerie Uhoda Beaufays (ID: 17669)
- **Commande réelle** : S39600
- **Date commande** : 2025-10-08 07:26:15
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 32
- **Tokens**: 72,831 input + 26,497 output = 99,328 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 29.7% | 37 produits prédits, 11 corrects |
| **Rappel** | 91.7% | 12 produits réels, 11 détectés |
| **F1-Score** | 44.9% | Score équilibré global |

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
| **MAE** | 0.09 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 7.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 4.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
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
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ❌ Non | 📊 Médiane |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ❌ Non | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes très espacées et irrégulières. Deux commandes en mardi (2025-07-08 et 2025-07-22), une mercredi (2025-08-27), une mercredi (2025-10-01). Pas de cycle hebdomadaire identifiable. Intervalle moyen : ~35-40 jours entre commandes.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - toutes les commandes historiques sont d'une unique unité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1. **PATTERN IDENTIFIÉ** :
   - Historique extrêmement limité : 4 commandes seulement sur ~3 mois
   - Chaque commande = 1u systématiquement (0% de variabilité)
   - Intervalles: 14j (22 jul → 08 jul), ~35j (27 aug → 22 jul), ~35j (01 oct → 27 aug)
   - Pas de cycle régulier détecté (mix de mardi/mercredi, espacements variables)

2. **SAISONNALITÉ** :
   - Aucune donnée N-1 → impossible de détecter saisonnalité
   - Les 4 points couvrent été/automne : pas de pic de saison visible
   - Impact saisonnalité = "none"

3. **TENDANCE** :
   - Stabilité totale : 1u → 1u → 1u → 1u
   - Aucune hausse, aucune baisse
   - Trend_direction = "Stable à 1u"

4. **JOUR DE PRÉDICTION (2025-10-07, mardi)** :
   - Dernière commande: 2025-10-01 (6 jours avant) - mardi+6j = mercredi
   - Client a commandé il y a peu (6 jours)
   - Mercredi précédent (01 oct) vs mardi prédit (07 oct) : rupture du jour habituel récent
   - Mais données insuffisantes pour conclure à "rattrapage"

5. **CONCLUSION** :
   - Base solide = 1u (100% des commandes)
   - Aucune raison d'augmenter (pas de tendance, pas de saisonnalité, pas d'outlier)
   - Recommandation = 1u

**CONFIANCE = "medium"** (données très limitées, mais pattern interne cohérent)
**RISQUE** : Historique trop court pour exclure qu'un volume plus élevé soit commandé régulièrement mais en dehors de cette fenêtre (données manquantes antérieures)

</details>


<details>
<summary><strong>2. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec moyenne ~14-30 jours d'intervalle. Pas de jour fixe détecté (mardi, mercredi, jeudi, lundi tous représentés). Dernière commande: 2025-09-16 (mardi) - 13 jours avant la date de prédiction 2025-10-07 (mardi)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 1-2u. Pic isolé à 4u le 2024-07-30 (outlier probable - pas répété en N-1 ni en période récente)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1️⃣ RYTHME OBSERVÉ:
- Historique N-1: 8 commandes sur ~11 mois = ~44 jours d'intervalle moyen
- Période récente (3 derniers mois): 2 commandes seulement
  • 2025-09-03 (mercredi): 1u
  • 2025-09-16 (mardi): 2u → Intervalle: 13 jours
- Date de prédiction: 2025-10-07 (mardi) = +21 jours après 2025-09-16

🔍 ANALYSE CRITIQUE:
Le dernier pattern observable montre 13 jours entre les deux dernières commandes. Si le rythme s'était accéléré, on verrait ~13-14 jours après 2025-09-16, soit autour du 30 septembre. La date de prédiction (2025-10-07) représente +21 jours, suggérant soit un délai avant la commande suivante, soit une absence récente.

2️⃣ QUANTITÉS:
- N-1 mode: 1-2u (6 commandes sur 8 = 75% du temps)
- Outlier détecté: 4u le 2024-07-30 (non répété → événement ponctuel)
- Tendance récente: 1u puis 2u (stabilité, pas de hausse nette)

3️⃣ SAISONNALITÉ:
- Octobre N-1: 1 commande (24-10, mardi) = 2u
- Septembre N-1: 1 commande (26-09, jeudi) = 1u
- Pas de pic saisonnier détecté pour octobre

4️⃣ DÉCISION FINALE:
- Baseline théorique: 1.5u (moyenne mode pondérée)
- Dernière observation: 2u (tendance récente légèrement supérieure)
- Pas de rattrapage apparent (rythme stable)
- **Prédiction**: 2 unités

Cette quantité reflète le comportement stable du client (1-2u généralement) avec une légère faveur pour 2u basée sur la dernière commande observée.

</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, principalement les mardis et mercredis. Intervalle moyen ~30-40 jours entre commandes récentes. Pas de cycle hebdomadaire strict détecté.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive. N-1 (sept 2024): 1u → Récent (sept 2025): 1u. Pic à 3u en juillet 2025 semble être un événement ponctuel (outlier).
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **RYTHME OBSERVÉ**: 
   - Historique N-1 (2023-2024): 7 commandes sur ~12 mois = cycle long (~50j)
   - 3 derniers mois (juil-sept 2025): 3 commandes avec intervalles 20j → 30j → 40j
   - Pas de pattern hebdomadaire strict (mar/mer/lun mixés)
   - Rythme décélère légèrement (intervalle s'allonge)

2. **FILTRAGE OUTLIERS**:
   - Pic 3u en juillet 2025: OUTLIER détecté (anomalie contextuelle)
   - Baseline réelle: 1-2u par commande
   - N-1 septembre 2024 = 1u (équivalent contextuel à septembre 2025)

3. **SAISONNALITÉ**:
   - Septembre 2024 (N-1): 1u
   - Septembre 2025 (prédiction mardi): Même période, demande stable
   - Saisonnalité FAIBLE sur ce produit (pas de pics récurrents marqués)

4. **TENDANCE IMMÉDIATE**:
   - Dernière commande (16 sept): 1u
   - Avant (27 août): 1u
   - Avant (8 juillet): 3u (outlier)
   - Tendance = STABLE à 1u (hors outlier)

5. **DÉCISION MARDI 7 OCTOBRE 2025**:
   - Intervalle depuis 16 sept = 21 jours
   - Pattern minimal: client commande 1-2u par commande
   - Pas de signal d'urgence ou rattrapage
   - Baseline théorique: 1.5u (moyenne filtrée N-1)
   - **PRÉDICTION: 1u** (demande stable, pas d'accélération détectée)

**Confiance MEDIUM** car:
✓ Pattern régulier identifié (intervalle ~25-30j)
✓ Historique N-1 cohérent
✗ Faible volume absolu (1-3u) = volatilité relative élevée
✗ Données limitées (10 points totaux)

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes très espacées et irrégulières. Intervalles: 50 jours (16/09→27/08), puis 50 jours (27/08→08/07). Pas de pattern hebdomadaire détectable.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - demande extrêmement faible et constante. Aucune hausse, aucune baisse observée sur 3 mois.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ ANALYSE RYTHMIQUE:
- Commande 1: 2025-09-16 (mardi) → 1u
- Commande 2: 2025-08-27 (mercredi) → 1u  
- Commande 3: 2025-07-08 (mardi) → 1u
- Intervalles: ~50 jours entre chaque commande
- OBSERVATION: Rythme très irrégulier, aucun cycle hebdomadaire (Lun-Ven) récurrent
- DATE PRÉDICTION: 2025-10-07 (mardi) → 21 jours après dernière commande
- Ce mardi arrive TÔT dans le cycle inhabituel de 50 jours

2️⃣ ANALYSE QUANTITÉS:
- Toutes les 3 commandes: 1 unité uniquement
- Aucune variation observée
- Aucun outlier détectable (pas de pic promotionnel, pas d'erreur manifeste)
- Volume extrêmement faible: produit premium B2B avec demande de niche

3️⃣ SAISONNALITÉ:
- Zéro donnée N-1 disponible → impossible de détecter saisonnalité
- Impact = NONE (pas de référence saisonnière)

4️⃣ SYNTHÈSE:
- Demande de FOND: 1u (baseline stable depuis 3 mois)
- Tendance: STABLE (aucune hausse/baisse progressive)
- Confiance: BASSE (seulement 3 points de données sur 3 mois, rythme erratique, absence N-1)
- Rattrapage possible? Non détectable (client ne suit pas un jour fixe)

5️⃣ DÉCISION FINALE:
Malgré l'arrivée du mardi (jour de la dernière commande), l'intervalle normal est ~50 jours. Nous ne sommes qu'à J+21. La prédiction la plus PROBABLE reste 1 unité (baseline constante), mais avec confiance BASSE en raison du rythme imprévisible.

⚠️ RISQUE: Ce client très peu commandeur pourrait ne rien acheter avant plusieurs semaines. Mais suivant la Règle d'Or (être PRÉCIS, pas prudent), on vise la quantité la plus probable = 1u."

</details>


<details>
<summary><strong>5. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes espacées - Interval de 7 jours (mer. 27 août → mer. 3 sept). Pas de cycle régulier établi. Date de prédiction mardi (hors jour de commande habituel)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - Deux commandes récentes identiques
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE SUPPLY CHAIN SENIOR:

**1. RYTHMIQUE OBSERVÉE:**
- Seules 2 commandes dans l'historique (27 août, 3 septembre 2025)
- Intervalle: 7 jours (mercredi → mercredi)
- **RUPTURE POTENTIELLE:** La prédiction est demandée pour un MARDI (2025-10-07), alors que le client commandait habituellement les MERCREDIS
- Délai depuis dernière commande: ~34 jours (3 sept → 7 oct)

**2. FACTEURS D'INCERTITUDE CRITIQUES:**
- **Data insuffisante:** Seulement 2 observations (minimum statistique non atteint)
- **Pas de données N-1:** Aucune comparaison saisonnière possible
- **Absence de contexte:** Raison de la prédiction inconnue (client oubli? rupture? planification?)
- **Effet jour de semaine:** L'écart de 34 jours suggère un rattrapage probable

**3. SYNTHÈSE:**
Avec si peu de données, l'extrapolation est hasardeuse. Cependant:
- Quantité stable (1u + 1u) → baseline = 1u
- Aucun outlier identifié
- Aucune tendance haussière/baissière
- Probabilité: cliente renouvelle sa commande régulière de 1u

**DÉCISION:** Maintenir la baseline de 1u (seule donnée cohérente).

**MISE EN GARDE:** Confiance BASSE - Cette prédiction est théorique. RECOMMANDATION: Solliciter le client pour confirmation avant approvisionnement.</reasoning>
</invoke>

</details>


<details>
<summary><strong>6. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes très irrégulières - intervalles variables entre 6 à 31 jours. Dernière commande: 2025-09-03 (mercredi). Date prédite: 2025-10-07 (mardi) = 34 jours après. Aucun pattern hebdomadaire ou mensuel régulier détectable
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - Toutes les commandes historiques = 1 unité. Aucune variation de volume observée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1️⃣ ANALYSE RYTHMIQUE:
   • 3 commandes totales sur 3 mois (2025-07-08, 2025-08-27, 2025-09-03)
   • Intervalles: 50 jours (juil→août), puis 7 jours (août→sep)
   • Comportement très irrégulier, aucun cycle hebdomadaire ou mensuel stable
   • Client opportuniste/faible consommation vs commandes très ponctuelles

2️⃣ ANALYSE DE TENDANCE:
   • Volume CONSTANT: 3 commandes = 3 unités (1u chaque)
   • Pas de hausse, pas de baisse → stabilité absolue
   • Zéro variabilité de quantité

3️⃣ CONTEXTE DE LA DATE PRÉDITE (2025-10-07):
   • 34 jours après dernière commande (2025-09-03)
   • Tombée sur mardi (vs mercredi habituel des 2 dernières)
   • Ne correspond à aucun cycle identifié

4️⃣ BILAN:
   • Données INSUFFISANTES pour confiance élevée (n=3, patterns faibles)
   • Baseline = Moyenne = 1u (l'unique constante observée)
   • Pas d'outliers, pas de saisonnalité (N-1 absent)
   • Prédiction par défaut = comportement passé (1u)
   
⚠️ NUANCE: Ce client présente un profil "low-consumption/sporadic". Il est possible qu'il ne commande PAS le 2025-10-07. Cependant, EN CAS de commande, l'historique suggère 1u comme quantité la plus probable.

RECOMMANDATION: 1 unité (par cohérence avec l'historique total)

</details>


<details>
<summary><strong>7. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire chaque mardi - Cycle stable de 7 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive : 2u → 1u → 1u (de -50% à stabilisation)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ **ANALYSE RYTHMIQUE** :
   - 2025-07-08 (mar.) → 2025-07-15 (mar.) : Intervalle = 7 jours
   - 2025-07-15 (mar.) → 2025-07-22 (mar.) : Intervalle = 7 jours
   - Pattern détecté : Commande CHAQUE MARDI sans exception
   - La date prédite (2025-10-07) est un MARDI → Cohérent avec le cycle

2️⃣ **DÉTECTION DES OUTLIERS** :
   - 22 juil (1u), 15 juil (1u), 08 juil (2u)
   - Le pic à 2u du 08 juillet apparaît comme anomalie unique
   - Hypothèse : Commande de rattrapage ou ajustement ponctuel
   - Classé comme outlier à exclure de la baseline

3️⃣ **TENDANCE OBSERVÉE** :
   - De 2u (08 juil) à 1u (15 juil) à 1u (22 juil)
   - Baisse initiale de -50% (2u→1u) puis stabilisation à 1u
   - La tendance récente converge vers 1u par mardi
   - AUCUN rebond observé sur les 2 dernières semaines

4️⃣ **SAISONNALITÉ** :
   - AUCUNE donnée N-1 disponible
   - Impossible d'identifier impact saisonnier octobre vs juillet
   - Impact saisonnier = NONE par défaut

5️⃣ **SYNTHÈSE & DÉCISION** :
   - Pattern stable + cycle régulier + 2 observations convergentes
   - Baseline théorique (excluant outlier 2u) = (1 + 1) / 2 = 1u
   - Moyenne pondérée : Dernière obs (22 juil) = 1u a fort poids → 1u
   - Aucun coefficient de correction à appliquer
   - **PRÉDICTION FINALE = 1 unité**

**CONFIANCE = HIGH** : 3 points de données, pattern régulier, cycle hebdomadaire strict, dernières observations convergentes malgré manque de données N-1.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-22 13:55:28: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 2u
- 2025-08-06 06:23:24: 2u
- 2025-07-15 09:58:18: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**📊 Quantité Médiane (fallback)**: 1u
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 2u
- 2025-09-03 06:40:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 4u
- 2024-07-01 06:32:15: 1u
- 2024-05-13 08:03:20: 1u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 2u
- 2023-10-24 07:06:59: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 2u
- 2024-07-01 06:32:15: 2u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u
- 2023-10-24 07:06:59: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-09-03 06:40:21: 1u
- 2025-08-06 06:23:24: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**📊 Quantité Médiane (fallback)**: 1u
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-22 13:55:28: 1u
- 2025-07-15 09:58:18: 1u
- 2025-07-08 12:46:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-15 09:58:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-01 06:32:15: 3u
- 2024-05-13 08:03:20: 4u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u
- 2023-10-24 07:06:59: 3u

**📊 Quantité Médiane (fallback)**: 1u
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (26)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: 1.5u (14j restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Stock prédit: 0.6u (6j restants) → prédit 2u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: 0.7u (13j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Stock prédit: 0.7u (12j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.7u (11j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.8u (15j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: 0.6u (8j restants) → prédit 1u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: 0.8u (15j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: 0.7u (11j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock prédit: -0.4u (-5j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: 0.3u (7j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: 0.4u (5j restants) → prédit 1u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 1 | Stock prédit: -0.4u (-9j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -1.6u (-20j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -1.5u (-20j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Stock prédit: -0.4u (-9j restants) → prédit 2u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: -0.4u (-9j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: -1.1u (-20j restants) → prédit 1u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -2.0u (-55j restants) → prédit 2u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Stock prédit: -2.1u (-60j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 3 | Stock prédit: -6.2u (-60j restants) → prédit 3u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 3 | Stock prédit: -4.4u (-53j restants) → prédit 3u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Stock prédit: -0.5u (-18j restants) → prédit 2u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 0 | Stock prédit: -0.5u (-36j restants) → prédit 0u mais non commandé |


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
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock suffisant: 0.9u (33j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:11:51.724Z*
