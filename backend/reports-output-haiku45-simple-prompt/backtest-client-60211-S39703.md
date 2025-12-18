# Rapport Backtest - Client BIOK CORBAIS

## Contexte

- **Client** : BIOK CORBAIS (ID: 60211)
- **Commande réelle** : S39703
- **Date commande** : 2025-10-16 06:40:28
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 24
- **Tokens**: 53,474 input + 20,369 output = 73,843 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.5% | 29 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 51.3% | Score équilibré global |

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
| **MAE** | 0.70 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 53.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 55.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 53.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, approximativement tous les 30-34 jours (cycle mensuel détecté: 09/10→08/10 = 33j, 08/06→09/10 = 66j soit 2 mois). Jours variables (jeudi, mercredi, mercredi).
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2 unités. Dernière commande 2025-10-09 (1u) suggère volume de base à 1u, avec occasions ponctuelles à 2u.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - Historique très limité: 3 commandes seulement sur 3 mois
   - Intervalles: 2025-08-06 → 2025-09-10 (35j) | 2025-09-10 → 2025-10-09 (29j)
   - Pattern identifié: Cycle approximativement MENSUEL (~30-35j), avec variations de jours semaine
   - Aucun pattern hebdomadaire régulier (jeudi, mercredi, mercredi)
   - Pas d'effet "rattrapage" évident (pas de rupture prolongée avant la commande)

2. **FILTRAGE OUTLIERS**
   - Quantités très basses et cohérentes: 2u, 2u, 1u
   - Pas d'anomalies ou pics exceptionnels détectés
   - Dernière commande (1u) est la plus récente → signal de baseline actuelle
   - Les 2 commandes précédentes à 2u pourraient suggérer une oscillation normale

3. **ABSENCE DE SAISONNALITÉ**
   - Aucune donnée N-1 pour comparer
   - Période (août-oct) trop courte pour confirmer saisonnalité automnale sur confiture
   - Impact saisonnier: NONE

4. **TENDANCE DIRECTION**
   - Demande globalement STABLE mais légèrement variable (1-2u)
   - Pas de hausse ou baisse progressive observable
   - Volatilité faible: coefficient de variation ~33%

5. **DÉCISION FINALE**
   - Baseline théorique: Moyenne = (2+2+1)/3 = 1.67u → **arrondi à 1.5u**
   - La prédiction pour 2025-10-15 (mercredi) dépend du cycle mensuel:
     * Dernière commande: 2025-10-09 (jeudi) = 6 jours avant
     * Cycle moyen: 30-35j → prochaine commande attendue autour 2025-10-09+32j ≈ 2025-11-10
   - MAIS: 2025-10-15 est seulement 6 jours après dernière commande → **PRÉ-COMMANDE peu probable**
   
   **CORRECTION**: Si le client commande vraiment le 2025-10-15 (demande user), il s'agit d'une RUPTURE du cycle normal. Cela suggère:
   - Soit une demande urgente (rattrapage partiel)
   - Soit une exception ponctuelle
   - Soit une augmentation de fréquence
   
   En l'absence de clarté, j'applique la règle agro B2B: **Viser la quantité PROBABLE plutôt que conservateur**
   - Dernière quantité: 1u (signal le plus récent)
   - Moyenne historique: 1.67u
   - **Recommandation: 2u** (hedge prudent entre dernière commande et moyenne, tout en restant dans plage observée)

**CONFIANCE: FAIBLE** - Données insuffisantes (3 pts seulement), forte variabilité relative, absence N-1, cycle peu régulier. MAPE attendu: 25-35% en conditions normales.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Commandes espacées de 15-45 jours. Majorité des commandes en mercredi (3/5 commandes). Pas de cycle hebdomadaire strict détecté. Dernière commande: jeudi 2025-10-09 (6 jours avant la date de prédiction mercredi 2025-10-15).
- **Saisonnalité**: none
- **Tendance**: Volatilité importante - Commandes variant de 1u à 6u. Moyenne historique ~2.8u. Tendance récente mixte: pics ponctuels (6u sep, 5u jul) intercalés avec demandes faibles (1u régulier). Pas de tendance croissante ou décroissante marquée.
- **Outliers détectés**: 6u, 5u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE - CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE:**
   - 5 commandes sur 3 mois: fréquence ~15-45 jours (très irrégulière)
   - Jours de semaine: mercredi domine (3/5), mardi (1/5), jeudi (1/5)
   - Aucun cycle fixe détecté (pas de "chaque vendredi")
   - Dernière commande: 2025-10-09 (jeudi) = 6 jours avant prédiction
   - La date prédite est un mercredi (jour fréquent pour ce client)

2. **VOLATILITÉ & OUTLIERS:**
   - Commandes: 1u, 6u, 1u, 1u, 5u (moyenne: 2.8u, écart-type élevé)
   - Outliers probables: 6u (sep) et 5u (jul) - pics ponctuels
   - Commandes "normales": 1u (3 occurrences)
   - Pattern dominant: 1u avec pics exceptionnels

3. **SAISONNALITÉ:**
   - AUCUNE donnée N-1 disponible → impact saisonnier NON quantifiable
   - Impossible de détecter si octobre a historiquement des pics
   - Impact estimé: NONE (pas de preuve)

4. **TENDANCE IMMÉDIATE:**
   - Dernière commande: 1u (2025-10-09)
   - Pas d'accélération observée
   - Pas d'indication d'accumulation/rattrapage
   - Tendance: STABLE mais VOLATILE

5. **DÉCISION:**
   - Baseline logique: Moyenne pondérée = 2.8u
   - Client préfère petites quantités régulières (1u fréquent) avec pics rares
   - Arrondir à 3u = entre "demande normale" (1u) et tendance moyenne
   - Confidence FAIBLE car: données très limitées (5 pts), volatilité haute, pas de saisonnalité, pas de pattern temporel clair
   - Risque équilibré: 3u couvre la majorité des cas sans surstock excessif

CONCLUSION: **3 unités** est la prédiction la plus probable, reflétant la tendance centrale tout en restant prudent face à la haute volatilité des données.

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans cycle fixe identifié. Intervalles variables : 18j (10→22 sept), 12j (22 sept→10 oct), 16j (10 oct→dernière). Aucune ancrage à jour spécifique de la semaine.
- **Saisonnalité**: none
- **Tendance**: Baisse progressive avec volatilité : pic 6u le 10 sept, puis décroissance vers 1u-2u-4u-1u. Moyenne récente ~2.8u, volatilité haute sans pattern saisonnier.
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE EN CHAÎNE DE PENSÉE :

1️⃣ ANALYSE RYTHMIQUE :
   - Intervalles entre commandes récentes : 18j | 12j | 16j → AUCUN CYCLE RÉGULIER
   - Jours de semaine : Jeudi (09 oct), Lundi (22 sept), Mercredi (10 sept), Mercredi (27 août), Mardi (12 août)
   - Aucun anchor à jour fixe (pas de "toujours le mardi", ni "toujours le dernier vendredi du mois")
   - ❌ RUPTURE : Commande attendue entre 25-31 oct selon intervalles précédents, mais date de prédiction est 15 oct (rattrapage anticipé possible)

2️⃣ FILTRAGE OUTLIERS :
   - 6u (10 sept) : OUTLIER détecté. Isolé, 2.5x supérieur à la moyenne des autres (1-4u)
   - Autres données : 1u | 2u | 1u | 4u → Relativement cohérentes autour de 2-3u
   - Cause probable du pic : promotion, erreur de saisie, ou commande client spécifique → NON RÉCURRENTE

3️⃣ TENDANCE DIRECTIONNELLE :
   - Chronologie récente (du plus ancien au plus récent) : 1u → 4u → 1u → 2u → 1u
   - Direction observée : **Baisse avec forte volatilité**
   - Moyenne mobile (derniers 4 points hors outlier) : (1+1+2+1)/4 = 1.25u
   - Moyenne complète (tous 5 points) : 14/5 = 2.8u

4️⃣ SAISONNALITÉ :
   - N-1 : aucune donnée → **Impact saisonnalité = NONE**
   - Pas de contexte calendaire (rentrée scolaire, Noël) identifiable pour oct
   - Produit premium/bio : consommation probablement stable année-round en B2B

5️⃣ DÉCISION FINALE :
   - Demande de fond théorique = **2.8u** (moyenne simple sur historique, pondérée par récence)
   - Correction pour volatilité : présence de pics détectés mais non systématiques
   - Pattern instable = **HIGH UNCERTAINTY**
   - Quantité la plus probable = **2.8u arrondie à 3u** (entier, minimise perte pour stock faible + risque rupture)
   
⚠️ CONFIANCE BASSE car :
   - Seulement 5 commandes sur 3 mois → Signal très faible
   - Aucune régularité détectable → Impossible de segmenter client/produit
   - Intervalles erratiques → Risk de commande non-attendue dans les jours suivant la prédiction

RECOMMANDATION OPÉRATIONNELLE : Contactez le client pour clarifier rythme d'achat (contrat, min-max, triggers) afin d'affiner la prévision pour les 12 prochains mois.

</details>


<details>
<summary><strong>4. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.3u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern très fragmenté - Commandes sporadiques sans cycle régulier détecté. Intervalle: 88 jours (09/10→12/08), puis 57 jours (12/08→16/07). Aucun jour de semaine récurrent identifiable.
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1-2u). Aucune tendance haussière ou baissière nette observable sur 3 mois.
- **Outliers détectés**: 1u, 1u, 2u

**🧠 Raisonnement LLM:**
ANALYSE SUPPLY CHAIN SENIOR - PRODUIT [NOD01] NODA ROSE 330ml

🔍 **DIAGNOSTIC CRITIQUE DU DATASET:**
- Données insuffisantes: Seulement 3 commandes sur 3 mois (gap moyen: 73j)
- Aucune donnée N-1 pour saisonnalité (octobre étant potentiellement période creuse agro)
- Pattern EXTRÊMEMENT fragmenté → Impossible de détecter cycle fiable

📊 **ANALYSE RYTHMIQUE DÉTAILLÉE:**
- 2025-07-16 (mer.) | 2u → Commande ancienne
- 2025-08-12 (mar.) | 1u → -57 jours, quantité réduite
- 2025-10-09 (jeu.) | 1u → -88 jours, stabilisation à 1u
- Prédiction: 2025-10-15 (mer.) → Client commande en moyenne tous les 70-90 jours

⚠️ **RUPTURE DE RYTHME MAJEURE:**
- Dernier achat: 2025-10-09 (6 jours avant la prédiction)
- Probabilité très faible d'une nouvelle commande si prochaine cycle = ~70-80 jours
- ⚡ **POSSIBLE RATTRAPAGE STOCK:** Dernier achat très récent (jeu.) suivi d'une demande (mer.) = TRÈS ATYPIQUE

📈 **SYNTHÈSE DÉCISIONNELLE:**
Baseline calculée: (2+1+1)/3 = 1.33u
Tendance: Baisse progressive (2u→1u→1u) = Stabilisation à 1u minimum

**RECOMMANDATION PRÉCISE (MAPE minimisé):**
- 1 unité = Prédiction conforme au pattern stable observé
- Niveau confiance BAS car données insuffisantes pour discriminer entre:
  • Faible consommateur régulier (1u tous les 70j)
  • Client marginal avec achat sporadique
  • Possible commande promotionnelle
  
En Supply Chain B2B agro: mieux vaut prévoir 1u (proche moyenne) que surstock→déchet.

</details>


<details>
<summary><strong>5. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les ~30 jours (15 août → 27 août = 12j ; 27 août → 10 septembre = 14j). Pattern mensuel probable. Cycle prédit: dernier mercredi du mois ou intervalles variables de 2-3 semaines.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - données insuffisantes pour confirmer une tendance structurelle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** : Deux commandes observées sur 3 mois, toutes deux un mercredi (27/08 et 10/09). L'intervalle entre elles est ~14 jours. Aucune donnée N-1 pour valider saisonnalité. **CYCLES DÉTECTÉS** : Les deux commandes sont espacées d'environ 2 semaines, ne correspondant pas à un cycle hebdomadaire strict (pas de pattern lun-ven régulier observable). Mercredi semble être le jour privilégié de commande. **CONFIANCE LIMITÉE** : Seulement 2 points de données = base insuffisante pour un modèle fiable. **BASELINE** : Demande de fond = 1u (cohérent avec les deux observations). **PRÉDICTION 2025-10-15** (mercredi) : Cette date est un mercredi, compatible avec le jour habituel. L'intervalle 10/09 → 15/10 ≈ 35 jours suggère potentiellement un cycle mensuel plus long que les observations précédentes, OU un effet de rattrapage après une rupture. En l'absence de données suffisantes et en appliquant le principe de parcimonie (Occam), je préconise **1u** (égal aux deux commandes antérieures). **RISQUE** : Cette prédiction repose sur une base très fragile; une augmentation discrète (1-2u) reste possible si le client rattrape une demande cumulée, mais sans preuve, il est préférable de ne pas sur-estimer.</reasoning>
</invoke>

</details>


<details>
<summary><strong>6. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire: commandes tous les mercredis (2025-09-10 et 2025-08-27, soit 14 jours d'intervalle)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - historique court avec 2 observations identiques (1u chaque fois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAIN OF THOUGHT:

1. **ANALYSE RYTHMIQUE**
   - 2 commandes détectées: 2025-09-10 (mercredi) et 2025-08-27 (mercredi)
   - Intervalle: 14 jours exactement (2 semaines)
   - Jour de commande: MERCREDI systématiquement
   - DATE PRÉDICTION: 2025-10-15 (mercredi) = Continuation du cycle attendu
   - ✓ Cohérence temporelle confirmée

2. **FILTRAGE OUTLIERS**
   - Historique très court: 2 observations seulement
   - 2 commandes identiques (1u chaque): AUCUN pic, AUCUN creux détecté
   - Pas de données N-1 pour comparaison saisonnière
   - ✓ Pas d'exception identifiée

3. **SYNTHÈSE & DÉCISION**
   - Pattern: Cycle bi-hebdomadaire stable sur mercredi
   - Tendance: Horizontale (stable à 1u)
   - Absence totale de saisonnalité détectable
   - Baseline = 1u (moyenne observée)
   - PRÉDICTION FINALE: **1 unité**

**JUSTIFICATION HAUTE CONFIANCE:**
- Mercredi 2025-10-15 s'inscrit dans le cycle régulier des mercredis
- Comportement client très régulier (2/2 commandes identiques)
- Produit agro B2B avec demande prévisible et stable
- Aucun signal de rupture de tendance

**RISQUE MINIMAL**: La régularité observée + alignement jour/cycle diminue fortement l'incertitude.

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - Prédominance mercredi (3/4 commandes). Intervalles variables: 14j (10→27 août), 16j (27 août→12 sept), 55j (12 sept→10 oct). Pas de cycle hebdomadaire strict détecté.
- **Saisonnalité**: none
- **Tendance**: Volatilité haute avec tendance baissière long terme (6u→2u→1u→2u). Dernière commande (2025-09-10: 6u) identifiée comme pic anormal par rapport à la trajectoire décroissante N-3 mois.
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **RYTHME CHRONOLOGIQUE**:
   - 4 commandes en 65 jours = ~1 commande tous les 16-17 jours (rythme très irrégulier)
   - Jour de semaine prédominant: Mercredi (3/4 commandes)
   - Intervalles: 14j, 16j, 55j → Pas de cycle stable détecté
   - Date prédiction (2025-10-15: mercredi) = aligné avec jour préférentiel

2. **ANALYSE OUTLIERS**:
   - Pic anormal détecté: 6u du 2025-09-10
   - Trajectoire sous-jacente: 6→2→1→2 = baisse progressive moyenne 3.25u → anomalie suspecte
   - Le pic de 6u rompt la tendance décroissante observée avant → **événement exceptionnel probable** (promotion, commande rattrapage, ou erreur saisie)

3. **TREND ANALYSIS**:
   - Si on exclut le 6u anormal: 2→1→2 = moyenne = 1.67u (socle stable)
   - Si on inclut: 2→1→2→6 = moyenne 2.75u
   - **Tendance réelle = baisse douce avec stabilisation autour de 2-2.5u**

4. **SYNTHÈSE & DÉCISION**:
   - Pas de saisonnalité N-1 (aucune donnée)
   - Client volatil, petit volume, acheteur de niche premium bio
   - Mercredi 15/10: jour cohérent avec fréquence observée (possibilité commande)
   - Volume attendu: Moyenne des 3 dernières valeurs "stables" = (2+1+2)/3 = 1.67u OR Baseline moyenne complète = 2.75u
   - **Recommandation: 3u** = compromis prudent (arrondi baseline 2.75 à l'entier supérieur)
   - Alternative baissière (2u) risquerait sous-stock si rattrapage
   - Alternative hausse (4u) trop optimiste vu la baisse tend

5. **CONFIANCE FAIBLE** car:
   - Seules 4 données points (volume minimal pour machine learning)
   - Volatilité anormale (6→2→1 = rupture pattern)
   - Absence N-1 pour validation saisonnalité
   - Fréquence imprévisible (55j entre deux commandes = rupture cycle)
   - Client micro-volume B2B niche = comportement moins prévisible

</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, principalement le mercredi (3 sur 4). Intervalles entre commandes: 45 jours (09/10→08/27 impossible, vérifier), 16 jours (08/27→08/12 ne sont pas alignés), 27 jours (08/12→07/16). Pattern hebdomadaire faible, tendance plutôt opportuniste que programmée.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 3.25u en moyenne, légère volatilité (1u-6u), pas de tendance haussière ou baissière nette
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1️⃣ ANALYSE RYTHMIQUE
- Les 4 commandes couvrent ~70 jours avec un pattern très irrégulier
- Jours de semaine: mercredi 75% (3/4 commandes) + mardi (1/4)
- Pas de cycle hebdomadaire strict (intervalles: 27j, 16j, "45j"(?), 13j)
- ⚠️ Données de N-1: AUCUNE → impossibilité de calibrer saisonnalité
- Conclusion: Client opportuniste, pas programmé

2️⃣ FILTRAGE OUTLIERS
- Pic à 6u (2025-09-10): le + récent, donc signal probable de tendance réelle plutôt qu'exception
- Trois commandes à 1u ou 5u: volatilité normale, pas pattern clair
- Pas d'indication de promotion/erreur → les 6u sont probablement légitimes
- Détection: [6u] = 1 seul outlier potentiel, mais trop récent pour l'ignorer

3️⃣ SAISONNALITÉ
- Absence totale de données N-1 → seasonality_impact = "none"
- Octobre N (2025) vs juillet/août/septembre N: pas de référence de contraste

4️⃣ TENDANCE DIRECTION
- Moyenne arithmétique: (6+1+1+5)/4 = 3.25u
- Médiane: 3u
- ✓ Stable à 3u avec une excursion récente à 6u (mercredi 09/10)
- Le client commande à nouveau un MERCREDI (2025-10-15 = mercredi)
- Ressemblance avec dernier mercredi (09/10) sugère possible répétition, mais historique trop court

5️⃣ DÉCISION FINALE
- Données: N=4 seulement, pas de N-1, pattern mou → **CONFIANCE BASSE**
- Règle agro B2B: précision > prudence
- 2 stratégies en conflit:
  * Stratégie conservative: Revenir à baseline 3u (médiane) = limite surstock
  * Stratégie récence: Suivre 6u (dernière cmd) = risque si pic exceptionnel

→ **Prédiction: 3u** (médiane stable)
   - Justification: L'absence de pattern régulier + données limitées suggère que 3u est la demande la plus probable
   - Le 6u de sept est hors-profil; mercredi n'est pas suffisamment discriminant
   - En B2B agroalimentaire, mieux vaut éviter surstock de produits frais (125g premium)

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern peu clair - Seulement 2 commandes en 3 mois (76 jours d'intervalle). Première commande mardi 2025-08-12, deuxième mercredi 2025-08-27. Pas de cycle hebdomadaire établi. Possibilité d'un client faible consommateur ou d'une relation commerciale en démarrage.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - Deux commandes successives de 1 unité sans variation. Données insuffisantes pour détecter une tendance à la hausse ou à la baisse.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **DONNÉES DISPONIBLES**: Uniquement 2 commandes sur 76 jours (depuis 2025-08-12 au 2025-10-15), soit un échantillon TRÈS FAIBLE qui ne permet pas d'identifier un pattern fiable.

2. **RYTHME IDENTIFIÉ**: Les deux commandes sont espacées de 15 jours (mardi 12/08 → mercredi 27/08). Aucune régularité hebdomadaire claire n'émerge. L'absence de N-1 empêche toute analyse saisonnière.

3. **VOLUMES**: Les deux commandes sont identiques (1 unité chacune), suggérant une demande stable mais à très faible volume. Pas d'indicateur de croissance ou de déclin.

4. **CONTEXTE PRODUIT**: BUD03 est une energiedrank bio (segment premium agro B2B). Les volumes de 1u peuvent indiquer:
   - Un client test/petit compte
   - Des commandes de réapprovisiionnement régulier mais minimal
   - Une relation commerciale en phase d'évaluation

5. **DÉCISION**: En l'absence de données suffisantes et sans pattern établi, j'applique le principe conservateur: **reconduire la dernière quantité observée (1u)**. Cela minimise le risque de surstock tout en respectant la demande validée.

6. **CONFIANCE**: LOW - Seulement 2 points de données, aucune saisonnalité détectable, pattern non établi. Toute prédiction serait spéculative. La recommandation se base sur la stabilité observée, mais reste hautement incertaine.

**NOTE POUR SUPPLY CHAIN**: Recommande de collecter davantage d'historique ou d'interroger directement le client sur son rythme de commande prévu (hebdomadaire, bi-mensuel, mensuel ?) pour affiner la prévision.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 2u
- 2025-08-06 06:21:49: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-22 11:23:24: 2u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 2u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
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
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.7u (14j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.7u (11j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 2 | Stock prédit: 0.8u (25j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: 0.6u (7j restants) → prédit 2u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.8u (24j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: 0.8u (19j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | Stock prédit: 0.3u (8j restants) → prédit 2u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | undefined | Stock prédit: -1.5u (-20j restants) → prédit undefinedu mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | Stock prédit: 0.4u (22j restants) → prédit 2u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 4 | Stock prédit: -1.2u (-20j restants) → prédit 4u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 2 | Stock prédit: -0.6u (-19j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:13:20.839Z*
