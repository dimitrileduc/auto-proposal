# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 25
- **Tokens**: 61,098 input + 23,416 output = 84,514 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 38.5% | 26 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 55.6% | Score équilibré global |

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
| **MAE** | 11.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 6.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 15.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -6.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | 50 | 25.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 31 | 62 | 31.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 62 | 62 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 93 | 124 | 31.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 62 | 93 | 31.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 25u vs Médiane: 25u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 31.25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 25u (50.0%)
- 📉 **Erreur Médiane**: 25u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes régulières le jeudi, avec pattern secondaire le mercredi. Cycles primaires : jeudi chaque semaine (2025-10-02, 2025-09-18, 2024-10-03, 2024-09-19, 2024-09-05). Décalage récent : mercredi 2025-10-01 (2 commandes). Date prédiction = mercredi 2025-10-15 = décalage d'un jour par rapport au jeudi habituel.
- **Saisonnalité**: weak
- **Tendance**: Stable avec fluctuations mineures. N-1 (sept-oct 2024) = 25u dominante avec pics à 50u. Période récente (sept-oct 2025) = 25u-50u identique. Pas de hausse/baisse séculaire détectée.
- **Outliers détectés**: 50u, 50u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ PATTERN HEBDOMADAIRE DOMINANT:
   - N-1 (2024): 5 jeudis = 100% des commandes (12 relevés jeudi)
   - Récent (2025): 2 jeudis + 2 mercredis (01/10) = jeudi = pattern primaire
   - Le mercredi 2025-10-01 semble être une exception ou un décalage mineur
   - Prédiction 2025-10-15 (MER) = jour inhabituel → ratio 1:0.95 vs jeudi

2️⃣ ANALYSE VOLUMÉTRIQUE:
   - N-1: 25u (80% des commandes) vs 50u (20% des pics)
   - Récent: 25u (60%) vs 50u (40%) = légère augmentation variance
   - Baseline empirique: (25×7 + 50×3) / 10 = 32.5u moyenne pondérée
   - Baseline conservatrice (mode): 25u (tendance centrale)

3️⃣ GESTION DU DÉCALAGE JOUR:
   - Prédiction = MERCREDI (vs jeudi habituel)
   - Mercredi 2025-10-01 = 2×25u = 25u par transaction
   - Applique le precedent: Commande mercredi = 25u probable
   - Pas d'inflation causée par le jour seul

4️⃣ SAISONNALITÉ FAIBLE:
   - Octobre N-1 vs N: Volumes identiques (25-50u range)
   - Pas de pic saisonnier automnal détecté
   - Impact = "weak"

5️⃣ CONFIANCE ÉLEVÉE:
   - Pattern régulier et répétitif (jeudi dominant)
   - Données N-1 robustes (12 relevés)
   - Données N suffisantes (5 commandes derniers mois)
   - Variance faible (25u ou 50u seulement)
   - Décalage jour expliqué par précédent (01/10 = mercredi aussi = 25u)

✅ RECOMMANDATION: 25u
   Justification: Mode empirique + précédent mercredi identique + stabilité tendance
   Ne pas sur-gonfler vers 32-35u (statistiquement moins probable)
   Risque résiduel: Si 50u possible (20%), marge légère absorbable en agro B2B

</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes hebdomadaires régulières, principalement jeudi (jeudi, vendredi, mercredi) avec pattern établi depuis N-1. Dernière commande 2025-10-02 jeudi (13 jours avant prédiction du 2025-10-15 mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable à 434u - aucune variation observée sur 12+ mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - Données N-1 (2024): 7 commandes sur 2 mois (mai-septembre), toutes à 434u, jours variables (lun, mer, jeu, ven)
   - Données récentes (oct 2025): 5 commandes en 24 jours, toutes à 434u, jours variables (mer, jeu, ven)
   - Intervalle moyen: ~5-7 jours entre commandes
   - Rythme: Apparemment hebdomadaire mais sans jour fixe unique (rotation mer/jeu/ven)
   - Dernière commande: 2025-10-02 jeudi → +13 jours jusqu'au 2025-10-15 mercredi (délai légèrement supérieur au cycle habituel)

2. **FILTRAGE OUTLIERS**
   - Zéro variation: 100% des 12 commandes = 434u exactement
   - Aucun pic, aucune creux
   - Aucun événement exceptionnel détectable (pas de promo, pas d'erreur)
   - Pattern ultra-régulier et fiable

3. **ANALYSE SAISONNIÈRE**
   - N-1 (été 2024, août-septembre): 434u
   - Présent (octobre 2025, même période N): 434u
   - Aucun impact saisonnier détecté (tartinade bio tomate = consommation stable année)
   - Impact saisonnier: NONE

4. **TENDANCE**
   - Pente 0: stabilité parfaite depuis 12 mois
   - Direction: Stable à 434u
   - Confiance: TRÈS ÉLEVÉE (data ultra-régulière, pas de bruit)

**DÉCISION FINALE**
Baseline = 434u (demande de fond stabilisée)
Ajustements: Aucun (pas de tendance, pas de saisonnalité, pas d'outlier)
Recommended = 434u

**Justification**: En agro B2B B2B, cette régularité extrême (12 commandes identiques) indique un contrat B2B avec quantités fixes. Le client commande probablement par lot standardisé toutes les semaines. Le mercredi 2025-10-15 s'inscrit dans le cycle normal (13 jours après dernière commande = timing dans normes observées). Aucune raison de dévier: la prédiction optimale = 434u.

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 31u vs Médiane: 31u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: medium)
- 📊 **Baseline N-1**: 45.2u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 31u (50.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque jeudi (80% des occurrences). Cycle hebdomadaire stable avec quelques commandes mercredi. Dernière commande jeudi 2025-10-02, prochaine attendue jeudi 2025-10-09, puis mercredi 2025-10-15 (rupture du pattern habituel - date demandée hors cycle normal).
- **Saisonnalité**: weak
- **Tendance**: Stable à 31-62u avec pics épisodiques. Moyenne récente 3 derniers mois: 45,2u. N-1 (oct-sept): moyenne 58,6u. Légère baisse de -23% N-1 vs période récente.
- **Outliers détectés**: 93u, 93u, 62u

**🧠 Raisonnement LLM:**
ANALYSE ÉTAPE PAR ÉTAPE:

1. **RYTHMIQUE OBSERVÉE**:
   - 80% des commandes le JEUDI (2024-10-03, 2024-09-19, 2024-09-05, 2025-10-02)
   - 1 commande vendredi (2024-08-09: 62u)
   - 2 commandes mercredi (2025-10-01: 2×31u)
   - Cycle très régulier hebdomadaire
   - RUPTURE: Date de prédiction = MERCREDI (2025-10-15), hors du cycle jeudi habituel

2. **ANALYSE DES QUANTITIES**:
   - Plage standard: 31u à 62u
   - Pics N-1 (septembre): 93u détectés → événements exceptionnels (promotion/client spécial/erreur de saisie)
   - Ces 93u ne se reproduisent PAS dans la période récente
   - Période récente (3 mois): 62, 31, 31, 31, 31 → distribution bimodale (31u ou 62u)

3. **SAISONNALITÉ**:
   - N-1 moyenne octobre-septembre: 58,6u (pics 93u inclus)
   - N-1 sans outliers: ~45u
   - Période récente (sept-oct 2025): 45,2u
   - Baisse progressive de ~23% N-1 vs actuellement → saisonnalité faible, tendance à la baisse

4. **GESTION DU JOUR EXCEPTIONNEL (Mercredi vs Jeudi)**:
   - Historiquement 2 commandes mercredi à 31u chacune (2025-10-01)
   - Ces commandes mercredi précédaient une commande jeudi
   - Mercredi 2025-10-15 suit immédiatement mercredi 2025-10-01 (14 jours) → rattrapage possible
   - MAIS: Les 2 commandes du 2025-10-01 sont de 31u chacune (faible), pas de signal de hausse

5. **DÉCISION FINALE**:
   - Baseline = Moyenne pondérée récente = 45,2u
   - Tendance: Stable à légèrement baissière
   - Jour inhabituel (mercredi): Référence historique mercredi = 31u
   - Pas de pic de rattrapage visible dans le pattern
   - Appliquer la PRÉCISION B2B agro: Quantité la plus probable = 31u (mode récent, aligné sur historique mercredi)

CONFIANCE MEDIUM car:
✓ Pattern jeudi très régulier (facile à prédire)
✗ Date demandée (mercredi) est minoritaire dans l'historique
✗ Saisonnalité faible (données insuffisantes pour certitude)
→ Prédiction: 31u (la plus probable, minimise le risque MAPE sur ce client stable)

</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 62u vs Médiane: 62u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: high)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande récurrente le jeudi (pattern dominant N-1 et récent), avec quelques exceptions mercredi. Intervalle régulier ~2 semaines en moyenne sur période récente.
- **Saisonnalité**: strong
- **Tendance**: Hausse progressive : de 31u (été 2024) → 62u (octobre 2025), soit +100% en un an
- **Outliers détectés**: 93u, 62u

**🧠 Raisonnement LLM:**
ANALYSE CHAIN-OF-THOUGHT :

1️⃣ **PATTERN RYTHMIQUE** 
   - N-1 (2024) : commandes jeudi uniquement (4 dates différentes) → pattern très stable
   - Récent (2025) : jeudi dominant (2025-10-02) + une exception mercredi (2025-10-01 et 2025-09-18)
   - DATE PRÉDICTION : mercredi 2025-10-15 → HORS du cycle habituel (mercredi au lieu de jeudi)
   - Intervalle dernière commande → prédiction : 13 jours (2025-10-02 au 2025-10-15)
   - Cycle attendu : ~14 jours (bi-hebdomadaire en moyenne)
   - ⚠️ Commande anticipée d'1 jour par rapport au jeudi habituel : probable rattrapage

2️⃣ **SAISONNALITÉ FORTE DÉTECTÉE**
   - N-1 (octobre 2024) : 31u dominant (3 dates) + pics 62u (2 dates) + pic 93u (2 dates)
   - 2025 (octobre 2025) : Immédiatement 62u (2025-10-02 jeudi) + 62u mercredi avant
   - HAUSSE TENDANCE NETTE : moyenne N-1 oct ≈ 43.5u vs moyenne récente 2025 ≈ 53.5u
   - Croissance globale ~100% en 12 mois (31→62)

3️⃣ **FILTRAGE OUTLIERS**
   - 93u (2024-09-05) : Pic exceptionnel, pas reproductif dans N-1 lui-même (fête/promo ponctuelle)
   - 62u : Maintenant stabilisé en 2025 (3 occurrences sur 5 dernières) vs anormal en N-1
   - ✅ 62u = nouvelle baseline, pas outlier

4️⃣ **AJUSTEMENT JOUR HORS CYCLE**
   - Jeudi = jour historique (95% des commandes N-1)
   - Mercredi 2025-10-15 = anticipation d'1 jour
   - Pattern mercredi émergeant récemment (2025-10-01, 2025-09-18)
   - Pas de réduction de volume lors des commandes mercredi observées (62u et 31u maintenus)
   - ➜ Pas de pénalité de quantité

5️⃣ **DÉCISION FINALE**
   - Baseline N-1 octobre : 31u
   - Coefficient croissance observée : +100% (31→62)
   - Dernières données (2025) convergent toutes sur 62u
   - Saisonnalité octobre N-1 compatible avec hausse 62u (pics 62-93 déjà présents)
   - **PRÉDICTION : 62u** (aligné tendance croissante + stabilisation récente + saisonnalité october compatible)

CONFIANCE HAUTE : Pattern régulier, cycle identifié, tendance nette, données récentes homogènes à 62u.

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - LLM: 93u vs Médiane: 93u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 31u (25.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes bi-hebdomadaires observées, principalement les jeudis (2025-10-02, 2025-09-18) avec occasionnellement des commandes en milieu de semaine (mercredi 2025-10-01, 2025-09-18). Pattern peu régulier, possibilité de rattrapage après rupture de cycle
- **Saisonnalité**: none
- **Tendance**: Hausse progressive: 31u → 93u (tripling) en septembre, puis stabilisation autour de 93u en octobre. Tendance haussière marquée (+200% de hausse)
- **Outliers détectés**: 31u

**🧠 Raisonnement LLM:**
ANALYSE CHRONOLOGIQUE:
• Données disponibles: 5 commandes sur 27 jours (Oct-Sept 2025)
• Dates clés: 2025-09-18 (jeudi) × 2 commandes (31u + 93u) | 2025-10-01 (mercredi) 93u | 2025-10-02 (jeudi) × 2 commandes (62u + 93u)

DÉTECTION DU PATTERN:
1. Deux doublons clairs: (31+93) le 18/09, puis (62+93) le 02/10 - probables corrections d'ordre ou scissions de commandes
2. La quantité RÉCURRENTE est 93u, observée 3 fois en 14 jours (dernière occurrence: 2025-10-02)
3. La valeur 31u est identifiée comme outlier (correction/erreur en septembre)
4. La valeur 62u du 02/10 semble être une transition vers la normalisation

TENDANCE OBSERVÉE:
• Septembre: Volatilité 31→93u (hausse de +200%)
• Octobre (jours 1-2): Stabilisation autour de 93u (avec une tentative de 62u)
• La dernière vraie commande significative: 93u (02/10)

CONTEXTE TEMPOREL DE PRÉDICTION:
• Date demandée: 2025-10-15 (mercredi)
• Dernier cycle: jeudi 02/10
• Intervalle: 13 jours écoulés depuis la dernière commande
• Jour changeant: passage du jeudi (habituel) au mercredi - possible anticipation ou décalage dans le cycle

BASELINE & AJUSTEMENTS:
• Baseline = 62u (moyenne des derniers "premiers ordres" de cycle)
• Multiplicateur tendance = +50% (stabilisation observée à 93u vs 62u)
• Ajustement jour: Mercredi vs jeudi = -10% (anticipation possible)
• Résultat: 62 × 1.5 = 93u

JUSTIFICATION FINALE:
La quantité 93u représente le "new normal" stable après la hausse de septembre. Malgré le changement de jour (mercredi au lieu de jeudi), la trajectoire haussière et la stabilisation à 93u sur les 3 dernières occurrences justifient une prédiction à 93u. Confiance MEDIUM car: (1) peu de données N-1 pour valider la saisonnalité, (2) pattern hebdomadaire peu établi encore, (3) mais tendance très claire sur les 14 derniers jours.

</details>


<details>
<summary><strong>6. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire régulière chaque jeudi (sauf exceptions 08-07 et 08-09 en N-1). Cycle très stable de 7 jours avec concentration sur jour jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à 434u - Aucune variation observée sur N-1 et période récente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

**1. ANALYSE RYTHMIQUE:**
- Historique N-1 (2024): 12 commandes, TOUTES à 434u, essentiellement en jeudi (avec 2 exceptions mer/ven en août)
- Période récente (2025, 3 derniers mois): 5 commandes, TOUTES à 434u, TOUTES en jeudi
- Intervalle jeudi-jeudi extrêmement régulier (~7 jours)
- Pattern identifié: Commande HEBDOMADAIRE CHAQUE JEUDI, quantité FIXE ET INVARIABLE

**2. SITUATION PRÉDICTION (2025-10-15 = mercredi):**
- Date demandée: MERCREDI (jour +1 par rapport au cycle habituel jeudi)
- Dernier jeudi (2025-10-02): 434u
- Prochain jeudi prévu: 2025-10-09 (PASSÉ d'une semaine)
- Situation inhabituelle: Si demande jeudi matin 2025-10-09, elle aurait dû être prévisible
- Décalage jeu→mer suggère possible anticipation ou gestion de rattrapage (-1 jour)

**3. FILTRAGE OUTLIERS:**
- Zéro variation observée (434u = 100% des cas)
- Pas de pics saisonniers, erreurs ou promotions détectables
- Stabilité parfaite = confiance maximale sur baseline

**4. SAISONNALITÉ:**
- Octobre N-1: 434u (2024-10-03 jeudi)
- Octobre N: Même contexte agroalimentaire prévisible
- Impact saisonnalité: NONE (produit BIO régulier, pas event saisonnier détectable)

**5. SYNTHÈSE & DÉCISION:**
- Baseline = 434u (moyenne = médiane = tous les points)
- Tendance = STABLE (zéro dérive sur 12 mois)
- Ajustement jour jeudi→mercredi = AUCUN (question opérationnelle, pas impact volume)
- Coefficient = 1.0x
- **PRÉDICTION = 434u**

Confiance HIGH car:
✓ Pattern parfaitement stable (17 observations identiques)
✓ Cycle établi sur 12+ mois
✓ Zéro anomalie ou variance détectable
✓ Produit standardisé (BIO TARTINADE = consommation régulière B2B)

</details>


<details>
<summary><strong>7. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: medium)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande récurrente tous les jeudis (N-1 et période récente). Pattern très stable avec intervalle régulier de 7 jours généralement. Seules exceptions : commandes décalées les 2024-08-09 (vendredi) et 2024-08-07/08 (mercredi/jeudi avec doublon). Date prédiction : 2025-10-15 (mercredi) = rupture du cycle jeudi habituel.
- **Saisonnalité**: weak
- **Tendance**: Stable à 434u dominant. Note : 2 commandes à 868u (2024-08-08, 2024-09-04) = probablement doubles commandes ou rattrapage exceptionnel. Tendance fondamentale reste 434u.
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE :

1. **PATTERN RYTHMIQUE IDENTIFIÉ**
   - N-1 : 100% des commandes en jeudi ou vendredi (5 entrées jeudi + 2 vendredi)
   - Période récente (3 derniers mois) : 3 jeudis + 1 mercredi + 1 jeudi = dominante jeudi très claire
   - Intervalle moyen : ~7 jours (cycle strictement hebdomadaire)
   - **RUPTURE DÉTECTÉE** : Date prédiction = mercredi (2025-10-15), alors que le client commande habituellement jeudi

2. **ANALYSE DES OUTLIERS**
   - 868u = 2× 434u. Occurrence : 2024-08-08 (jeudi) + 2024-09-04 (jeudi)
   - Hypothèse : Doubles commandes exceptionnelles (pas pattern saisonnier, car N-1 et N oscillent entre 434-868)
   - Fréquence : ~2 cas sur 17 commandes = 12% des commandes seulement
   - **NON RÉCURRENT** pour cette semaine spécifique

3. **SAISONNALITÉ**
   - Octobre N-1 : 434u (2 occurrences le 03-10)
   - Septembre N-1 : 434u dominant (+ 1 pic 868u)
   - Septembre N (récent) : 434u + 1 pic 868u
   - **Impact FAIBLE** : pas d'amplification automne notable

4. **GESTION DE LA RUPTURE DE CYCLE (mercredi vs jeudi)**
   - Client commande jeudi = jour de planning/besoin établi
   - Prédiction mercredi = 1 jour d'avance par rapport au pattern
   - Deux scénarios possibles :
     a) Avance d'un jour → quantité inchangée (434u)
     b) Report du jeudi au mercredi → quantité identique
   - **Pas d'indication de rattrapage** (dernier jeudi = 2025-10-02, soit 13 jours avant)
   - Prochaine commande attendue = 2025-10-09 théoriquement (jamais arrivée) → lundi ou mardi 2025-10-15

5. **DÉCISION FINALE**
   - Baseline dominante = **434u** (82% des commandes historiques)
   - Pas de pic saisonnier spécifique octobre
   - Rupture de jour compensée par stabilité de la demande
   - **Recommandation : 434u**

**CONFIANCE MEDIUM** (pas HIGH) car :
   ✓ Pattern très stable (bonus)
   ✓ Cycle régulier identifié clairement
   ✗ Rupture du jour de commande (jeudi→mercredi) crée incertitude
   ✗ Pas de données N pour ce mercredi 15-10 spécifiquement

</details>


<details>
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire régulière le jeudi (97% des cas) ou mercredi/vendredi (cas exceptionnels). Pattern primaire: jeudi chaque semaine ou deux fois le jeudi. Date prédiction (mercredi 2025-10-15) = décalage du rythme habituel.
- **Saisonnalité**: none
- **Tendance**: Stable à 40u depuis N-1 jusqu'à présent (aucune variation détectée sur 12 mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE (Chain of Thought):

1. **ANALYSE RYTHMIQUE** :
   - N-1 (2024): 8 commandes sur jeudi/vendredi (jeu=80%, ven=20%) avec intervalles réguliers (~15-30j)
   - Récent (3 derniers mois): 5 commandes réparties sur mercredi (1×) et jeudi (4×)
   - Pattern primaire CONFIRMÉ: Jeudi + Pattern secondaire: Mercredi/Vendredi (cas résiduel <5%)
   - **Spécificité 2025-10-15**: Date prédiction = MERCREDI. Décalage de -1j vs rythme habituel.

2. **ANALYSE DE RÉGULARITÉ** :
   - Quantité: RIGOUREUSEMENT constante = 40u sur TOUS les enregistrements (N-1 ET récent)
   - Aucune variation, aucun pic, aucune baisse → Demande ultra-stable
   - SKU de type "produit de fond" (Vinaigre César Bio): consommation fluide prévisible

3. **GESTION DU DÉCALAGE JOUR** :
   - Mercredi vs Jeudi habituel = -1 jour
   - Hypothèses:
     * Simple avance d'un jour du rythme client (gestion de fin de semaine)
     * OU acheteur en télétravail mercredi → commande la veille
   - Impact sur quantité: **AUCUN** (le décalage jour n'affecte pas le volume hebdo)
   - La prochaine commande jeudi aurait probablement lieu jeudi 2025-10-16 si routine normale

4. **SAISONNALITÉ** :
   - Septembre 2024 (N-1) vs Septembre 2025 (récent): Volumes identiques (40u)
   - Octobre 2024 (N-1) vs Octobre 2025 (récent): Aucune accélération détectée
   - Verdict: SAISONNALITÉ = "none" (produit non affecté par effets saisonniers)

5. **DÉTECTION D'OUTLIERS** :
   - Aucune anomalie (doublons mercredi 2025-10-01, ou quadruples jeudi 2025-09-18 = simples patterns de synchronisation système, pas exceptions de demande)
   - Volumes: Tous 40u → Pas de promotion, pas d'erreur saisie

6. **SYNTHÈSE & DÉCISION** :
   - Baseline théorique: 40u (moyenne = médiane = mode)
   - Tendance: Stable (+0%)
   - Coefficient jour: ×1 (décalage mercredi ne modifie pas le stock)
   - **Prédiction finale: 40 unités**
   - Confiance: HIGH (12 mois de données concordantes, pattern ultra-régulier, zéro variance)

</details>


<details>
<summary><strong>9. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 62u vs Médiane: 62u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: high)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 31u (33.3%)
- 📉 **Erreur Médiane**: 31u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes récurrentes le jeudi - Pattern hebdomadaire établi (jeu. N-1 et N, 100% des données jeudi). Intervalle moyenne: ~2 semaines entre séquences (19 sept, 5 sept N-1; 18 sept, 4 sept N). Pas de cycle mensuel détecté.
- **Saisonnalité**: weak
- **Tendance**: Hausse modérée - Septembre-Octobre N montre pics à 93u vs baseline historique 31-62u. Moyenne N: 62u vs Moyenne N-1: 52.3u (+18% environ). Cependant, les 93u semblent liés à rattrapage de cycle, pas à saisonnalité d'octobre pure.
- **Outliers détectés**: 93u, 93u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1️⃣ **RYTHME IDENTIFIÉ** (Critique)
   - Pattern JEUDI confirmé: 100% des commandes récentes jeudi
   - Date prédiction: 15-oct-2025 = MERCREDI (décalage d'1 jour par rapport au cycle habituel)
   - Dernière commande jeudi: 18-sept-2025 (27 jours avant le 15-oct)
   - Intervalle normal: ~7-14j entre commandes jeudi (basé sur les clusters de N-1)
   - ⚠️ DÉTECTION: Commande demandée mercredi = RUPTURE DE CYCLE → Client commande jour décalé OU rattrapage précoce

2️⃣ **ANALYSE DES QUANTITÉS**
   - N-1 (août-oct 2024): 31u, 31u, 31u, 31u, 62u, 62u, 62u, 62u (clusters pairs)
   - N (sept-oct 2025): 93u, 31u, 31u, 93u, 62u
   - Les 93u du 18-sept et 4-sept = pics d'environ +50% vs 62u → Rattrapage suite à dépassement du cycle?
   - Moyenne N-1 (juillet-déc): 52.3u | Moyenne N derniers 3 mois: 62u (+18%)

3️⃣ **SAISONNALITÉ OCTOBRE**
   - Octobre N-1: 62u le 3-oct (jeudi) = demande normalisée, pas pic saisonnier
   - Octobre N: aucune donnée ante-15-oct fournie
   - Saisonnalité FAIBLE: pas d'évidence d'événement particulier en octobre (rentrée scolaire finie, pas de fête majeure)

4️⃣ **GESTION DU DÉCALAGE JOUR**
   - Client commande normalement JEUDI
   - Prédiction pour MERCREDI 15-oct = jour hors cycle habituel
   - 2 scénarios: 
     a) Commande avancée d'1 jour (rattrapage normal, attendez jeudi?) → Quantité standard
     b) Commande réelle mercredi (changement de jour) → Quantité standard (aucune raison de penser une hausse)
   - Impact: NEUTRE - ne justifie pas augmentation

5️⃣ **DÉTECTION D'OUTLIERS**
   - 93u (18-sept et 4-sept): +50% vs baseline → Deux pics rapprochés (2 semaines)
   - Hypothèse: Rattrapage d'une semaine manquée OU double commande ponctuelle
   - Ces pics ne sont PAS récurrents à date fixe → événements ponctuels, pas saisonniers
   - Septembre 2024 vs Septembre 2025: N-1 stable (31-62u), N volatile (93-31u) → Variabilité accrue récemment

6️⃣ **DÉCISION FINALE**
   - Baseline théorique: **62u** (médiane des commandes stables, supérieure à moyenne pondérée 52.3u mais cohérente avec trend +18%)
   - Ajustements saisonniers: Aucun (octobre sans marqueur particulier)
   - Ajustement décalage jour: Aucun (mercredi vs jeudi = bruit administratif)
   - Risque de nouveau pic 93u? Faible (2 pics en 2 semaines peu probable à reproduire exactement)
   
   **PRÉDICTION: 62 unités**
   
   Justification: Correspond au centre de stabilité observé en N-1, aligné avec tendance récente (+18%), gère les pics comme anomalies temporaires. MAPE minimisé en visant précision plutôt que sur-stock.

**CONFIANCE: HIGH** (3 raisons):
   ✅ Pattern jeudi confirmé sur 12+ observations
   ✅ Baseline 62u validée par N-1 (fréquence) et N (trend)
   ✅ Peu de volatilité structurelle (outliers identifiés comme ponctuels)
   ⚠️ Seule limite: Jeu de données de 3 mois (N) fragmenté, mais N-1 solide

</details>


<details>
<summary><strong>10. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire chaque jeudi (pattern dominant). 14 commandes sur 19 (74%) sont des jeudis. Cycle régulier: tous les jeudis depuis septembre 2025, avec une seule exception en juillet 2025 (lundi/vendredi).
- **Saisonnalité**: none
- **Tendance**: Stable à 25u. Aucune variation observée sur N-1 et période récente. Demande constante et fiable.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **PATTERN HEBDOMADAIRE ULTRA-RÉGULIER**
   - 14 commandes sur 19 (74%) sont des jeudis
   - Cycle identifié: commande chaque jeudi sans exception depuis sept. 2025
   - Date de prédiction: 15 octobre 2025 = mercredi (J-1 avant la commande habituelle du jeudi 16 oct.)

2. **STABILITÉ COMPLÈTE DE LA DEMANDE**
   - TOUTES les 19 commandes historiques = exactement 25 unités
   - N-1 (2024): 25u de façon systématique
   - Période récente (juil-sept 2025): 25u sans exception
   - Zéro volatilité, zéro outlier détecté

3. **ABSENCE DE SAISONNALITÉ**
   - Pas de variation saisonnière entre N-1 et N
   - Produit BBQ BIO 300G: demande cohérente quelle que soit la saison
   - Volume juillet = volume septembre (même 25u)

4. **JOUR DE PRÉDICTION (MERCREDI)**
   - Prédiction du mercredi 15 octobre pour la commande attendue jeudi 16 octobre
   - Pattern jeudi confirmé sur 8 semaines consécutives
   - Aucun décalage anticipé

**CONCLUSION**: Pattern ultra-prévisible en supply chain B2B agroalimentaire. Commande de routine sans variation. Recommandation = 25 unités (demande de fond garantie).

**CONFIANCE**: HIGH (19/19 commandes à 25u = certitude quasi absolue)

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 50u
- 2025-10-01 14:24:40: 25u
- 2025-10-01 14:23:59: 25u
- 2025-09-18 11:03:27: 25u
- 2025-09-18 11:02:40: 50u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 25u
- 2024-10-03 06:12:09: 25u
- 2024-10-03 06:11:51: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:12:09: 25u
- 2024-09-19 21:11:27: 50u
- 2024-09-05 07:12:20: 25u
- 2024-09-05 07:12:01: 50u
- 2024-09-05 07:11:43: 25u
- 2024-09-05 07:10:56: 25u

**✅ Quantité LLM**: 25u (confidence: high)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 434u
- 2025-10-01 14:23:59: 434u
- 2025-09-19 08:03:40: 434u
- 2025-09-18 11:02:40: 434u
- 2025-09-04 08:22:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:38: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:33: 434u
- 2024-08-07 13:00:03: 434u
- 2024-07-25 07:58:01: 434u
- 2024-07-25 07:55:13: 434u
- 2024-07-01 05:44:03: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 62u
- 2025-10-02 06:43:53: 31u
- 2025-10-01 14:24:40: 31u
- 2025-10-01 14:23:59: 31u
- 2025-09-18 11:03:27: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 62u
- 2024-10-03 06:11:28: 31u
- 2024-09-19 21:12:31: 31u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 62u
- 2024-09-05 07:12:20: 93u
- 2024-09-05 07:12:01: 93u
- 2024-09-05 07:11:43: 62u
- 2024-09-05 07:10:56: 31u
- 2024-08-09 05:43:38: 62u

**✅ Quantité LLM**: 31u (confidence: medium)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 62u
- 2025-10-02 06:43:53: 62u
- 2025-10-01 14:24:40: 62u
- 2025-10-01 14:23:59: 31u
- 2025-09-18 11:03:27: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 31u
- 2024-10-03 06:11:51: 31u
- 2024-10-03 06:11:28: 31u
- 2024-09-19 21:13:09: 31u
- 2024-09-19 21:12:31: 31u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 62u
- 2024-09-05 07:12:20: 93u
- 2024-09-05 07:12:01: 93u
- 2024-09-05 07:11:43: 31u
- 2024-09-05 07:10:56: 31u

**✅ Quantité LLM**: 62u (confidence: high)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 62u
- 2025-10-02 06:43:53: 93u
- 2025-10-01 14:24:40: 93u
- 2025-09-18 11:03:27: 31u
- 2025-09-18 11:02:40: 93u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 93u (confidence: medium)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>6. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:43:53: 434u
- 2025-09-18 11:03:27: 434u
- 2025-09-18 11:01:30: 434u
- 2025-09-04 08:22:56: 434u
- 2025-09-04 08:22:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-08-09 05:42:53: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:49: 434u
- 2024-08-07 13:00:33: 434u
- 2024-07-25 07:55:56: 434u
- 2024-07-25 07:55:32: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>7. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:43:53: 434u
- 2025-10-01 14:23:59: 434u
- 2025-09-18 11:03:27: 434u
- 2025-09-04 08:22:56: 434u
- 2025-09-04 08:22:01: 868u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:11:51: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:13: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 868u
- 2024-08-07 13:00:33: 868u
- 2024-08-07 13:00:03: 434u

**✅ Quantité LLM**: 434u (confidence: medium)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:23:59: 40u
- 2025-09-18 11:03:27: 40u
- 2025-09-18 11:02:40: 40u
- 2025-09-18 11:02:12: 40u
- 2025-09-04 08:22:56: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 21:13:09: 40u
- 2024-09-19 21:12:09: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-09-05 07:11:43: 40u
- 2024-09-05 07:10:56: 40u
- 2024-08-09 05:43:38: 40u
- 2024-08-09 05:43:13: 40u
- 2024-08-08 06:02:21: 40u
- 2024-08-07 13:00:49: 40u
- 2024-08-07 13:00:33: 40u
- 2024-07-25 07:58:01: 40u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>9. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-18 11:03:27: 93u
- 2025-09-18 11:02:40: 31u
- 2025-09-18 11:01:30: 31u
- 2025-09-04 08:22:56: 93u
- 2025-09-04 08:22:01: 62u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 62u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 93u
- 2024-10-03 06:11:28: 62u
- 2024-09-19 21:13:09: 62u
- 2024-09-19 21:12:31: 62u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 31u
- 2024-09-05 07:12:20: 31u
- 2024-09-05 07:11:43: 31u
- 2024-09-05 07:10:56: 31u
- 2024-08-09 05:43:38: 31u

**✅ Quantité LLM**: 62u (confidence: high)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>10. [PF1690] LD BBQ BIO 300G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-18 11:02:12: 25u
- 2025-09-04 08:22:01: 25u
- 2025-09-04 08:20:24: 25u
- 2025-08-07 14:18:24: 25u
- 2025-07-18 10:37:55: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:11:27: 25u
- 2024-09-05 07:12:20: 25u
- 2024-08-09 05:42:26: 25u
- 2024-08-08 06:02:21: 25u
- 2024-08-07 13:00:33: 25u
- 2024-07-01 05:44:03: 25u
- 2024-07-01 05:43:42: 25u
- 2024-07-01 05:43:20: 25u
- 2024-06-28 11:30:23: 25u

**✅ Quantité LLM**: 25u (confidence: high)
**📊 Quantité Réelle**: 25u

</details>




---

## False Positives (16)

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
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 31 | Stock prédit: -8.7u (-2j restants) → prédit 31u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | Stock prédit: 29.5u (0j restants) → prédit 434u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | Stock prédit: 29.5u (0j restants) → prédit 434u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 31 | Stock prédit: 7.3u (3j restants) → prédit 31u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -15.5u (-3j restants) → prédit 40u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 235 | Stock prédit: -782.0u (-16j restants) → prédit 235u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1450 | Stock prédit: -5125.0u (-17j restants) → prédit 1450u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 650 | Stock prédit: -2150.0u (-17j restants) → prédit 650u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 520 | Stock prédit: -1385.0u (-17j restants) → prédit 520u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 328 | Stock prédit: -1084.0u (-17j restants) → prédit 328u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 190 | Stock prédit: -611.0u (-17j restants) → prédit 190u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 422 | Stock prédit: -1395.0u (-17j restants) → prédit 422u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: -4.2u (0j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: -233.6u (-19j restants) → prédit 248u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 185 | Stock prédit: -650.0u (-37j restants) → prédit 185u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: -572.1u (-38j restants) → prédit 434u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:10:59.157Z*
