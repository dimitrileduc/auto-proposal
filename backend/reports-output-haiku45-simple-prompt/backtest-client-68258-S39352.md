# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S39352
- **Date commande** : 2025-09-24 12:49:59
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 36,069 input + 13,227 output = 49,296 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.8% | 17 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 74.1% | Score équilibré global |

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
| **wMAPE** | 27.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 35.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 5 | 6 | 1.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans pattern hebdomadaire clair - intervalles de 16j (12→23 sept), 45j (23 juin→7 juil), 37j (7→23 juil), 48j (23 juil→9 sept), 3j (9→12 sept)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive de la tendance générale - pics à 10u (juin) et 6u (juil) vs récent 2-4u (sept)
- **Outliers détectés**: 10u, 6u

**🧠 Raisonnement LLM:**

ANALYSE DÉTAILLÉE (Chain of Thought) :

1. **ANALYSE RYTHMIQUE**
   - Les 5 commandes couvrent ~3.5 mois (juin-sept 2025)
   - Intervalles très irréguliers : 45j, 37j, 48j, 3j, 16j
   - AUCUN pattern hebdomadaire apparent (Lun, Mer, Lun, Lun, Mar, Ven)
   - Le client ne commande PAS selon un cycle régulier prédictible
   - Date de prédiction = mardi 2025-09-23 (3 jours après dernière commande du 12/09)

2. **FILTRAGE OUTLIERS & TENDANCE**
   - Pics identifiés : 10u (23/06, lun) et 6u (07/07, lun)
   - Baisse notable en septembre : 4u (09/09) → 2u (12/09)
   - Pattern: Juin-Juillet = volumes forts (10, 6u) | Septembre = volumes faibles (4, 2u)
   - Interprétation : Baisse progressive -60% sur 3 mois, possibilité de baisse saisonnière (fin d'été)

3. **CRITIQUE DES DONNÉES**
   - N-1 inexistant : Impossible de valider saisonnalité
   - Seules 5 observations en 3.5 mois : Base très fragile pour pattern
   - Dernière commande très récente (12/09, -3 jours) : Déjà en rattrapage court-terme ?
   - Demande semble réactionnaire plutôt que prévisionnelle

4. **BASELINE & DÉCISION**
   - Moyenne brute = (2+4+2+6+10)/5 = 4.8u
   - Moyenne pondérée récente (poids sur 3 dernières) = (2×2 + 4 + 2)/4 = 2.5u
   - Moyenne simple 2 dernières commandes = (4+2)/2 = 3u
   - Tendance claire: 10→6→2→4→2 = DÉCROISSANCE avec volatilité
   - Le client commence à réduire ses achats (de 6-10u en juillet à 2-4u en septembre)

5. **PRÉDICTION FINALE**
   - Baseline retenue: 4.0u (moyenne consensuelle ajustée)
   - Ajustement baisse saisonnière: -25% → 3u
   - Confiance: LOW (données insuffisantes + pattern chaotique + pas de N-1)
   - Recommandation prudente mais conservative: 3u

JUSTIFICATION: Mardi 2025-09-23 est jour de faible activité historique, la dernière commande (12/09) était déjà réduite à 2u. Le trend 3-4-2 suggère stabilisation autour de 2-3u. Sans données N-1, impossible de distinguer saisonnalité de baisse durable. On privilégie la donnée récente (2u) avec prudence modérée (+50% = 3u) plutôt que la moyenne globale (4-5u) qui inclurait les pics exceptionnels de juin-juillet.


</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans cycle apparent - dominance des mardis (2/5 commandes), présence de lundis et vendredis. Intervalle dernier mardi (09-09) au mardi cible (23-09): 14 jours. Pas de rythme hebdomadaire strict détecté.
- **Saisonnalité**: none
- **Tendance**: Volatilité haute (1-5u) - Stable autour de 2.6u moyenne, mais sans tendance claire ascendante/descendante
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Historique très limité (5 commandes sur 3 mois) révèle un pattern fragile. Identification d'une affinité pour les mardis (2/5 commandes: 09-09 et 19-08, intervalle de 22 jours). La date cible (23-09) est un mardi, suggestion faible de reprendre le cycle.

FILTRAGE OUTLIERS: Le pic à 5u (09-09) se distingue nettement. Aucune donnée N-1 pour confirmer saisonnalité. Interprétation conservatrice: événement ponctuel, non reproductible.

TENDANCE: Moyenne simple = (2+5+1+2+4)/5 = 2.8u. Examen des 3 dernières valeurs (19-08: 1u, 07-07: 2u, 23-06: 4u) déjà trop anciennes. Les 2 plus récentes (12-09: 2u, 09-09: 5u) montrent volatilité sans direction claire.

DÉCISION FINALE: 
- Baseline = 2.6u (moyenne pondérée légèrement favorable au récent)
- Pas de saisonnalité exploitable (N-1 absent)
- Jour du mardi peut être légèrement bullish (+0.4u)
- Prescription conservatrice face à l'incertitude: recommandation arrondie à 3u

Cette quantité minimise le risque de surstock tout en restant prudente. Confidence MEDIUM car données insuffisantes pour certitude élevée.

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, sans cycle hebdomadaire établi. Intervalles: 43j (12/09→08/19), 31j (19/08→23/07), 16j (23/07→07/07). Pattern instable.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 4u, avec une valeur basse isolée (1u le 19/08 - probable commande minimale ou erreur)
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: L'historique révèle une clientèle à commandes irrégulières. Pas de jour fixe (mardi, vendredi, mercredi alternent). Les intervalles varient de 16 à 43 jours, ce qui suggère une gestion d'approvisionnement non planifiée ou basée sur des seuils de stock plutôt que sur un calendrier. **FILTRAGE OUTLIERS**: La quantité de 1u le 19/08 détonne clairement (anomalie isolée dans une série de 3-4u) → marquée comme outlier, probablement une commande minimale de maintenance stock. **TENDANCE CENTRALE**: En excluant cet outlier, les 4 autres commandes oscillent entre 3-4u, avec un poids fort sur les dernières données (4u le 12/09, très récemment). **SAISONNALITÉ**: Absence totale de donnée N-1 → pas de pattern saisonnier identifiable. Impact 'none'. **DÉCISION FINALE**: Avec une tendance stable autour de 4u et la dernière commande confirmant ce niveau, la prédiction pour le 23/09 (mardi) doit reproduire cette demande de fond probable. La date (mardi) ne crée pas de rupture : c'est un jour de semaine ordinaire sans signal de rattrapage. **Quantité recommandée: 4u** (demande standard probable). **Confiance: MEDIUM** (données limitées, pattern peu régulier, mais signal clair sur le dernier mois)."

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier avec intervalles croissants : 52 jours (23/06→23/07), puis 51 jours (23/07→12/09). Aucune commande depuis le 12/09 (11 jours). Pas de cycle hebdomadaire fixe détecté.
- **Saisonnalité**: none
- **Tendance**: Baisse progressive : 3u (juin) → 2u (juillet) → 1u (septembre). Tendance décroissante de -33% par cycle.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CRITIQUE - Données extrêmement limitées :

1. **OBSERVATION RYTHMIQUE**
   - Historique : 3 commandes sur 3 mois (très clairsemé)
   - Intervalles : 52j (juin→juillet) et 51j (juillet→septembre)
   - Depuis dernière commande (12/09) : 11 jours écoulés
   - Jour prédit (23/09, mardi) ne correspond à AUCUN jour d'historique
   - Aucune récurrence jour-fixe détectable

2. **DÉTECTION OUTLIERS**
   - Aucun pic anormal identifié
   - Les quantités (3→2→1) reflètent une tendance, pas des exceptions
   - Pas de données N-1 pour valider saisonnalité

3. **TENDANCE & BASELINE**
   - Direction : **Baisse progressive -33% par cycle** (3u→2u→1u)
   - Dernière commande : 1u (12/09, vendredi)
   - Baseline théorique : 1u (confirmée par dernière observation)
   - Aucun signal de rattrapage détectable

4. **SYNTHÈSE DÉCISIONNELLE**
   - Confiance FAIBLE : données insuffisantes (N=3 seulement)
   - Le pattern montre une décroissance régulière
   - La dernière quantité (1u) s'inscrit dans cette tendance
   - Prédiction : **1 unité** (conservation de la dernière quantité observée)
   - Risque : si le client reprend un cycle normal, cette quantité pourrait être sous-estimée

**RECOMMANDATION OPÉRATIONNELLE** : Validez auprès du client si ce produit bénéficie d'une vraie demande ou si ce compte est en phase de rundown. Les données suggèrent une décroissance de l'intérêt.

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, intervalles variables: 45j (09/09→08/19), 27j (08/19→07/23), 16j (07/23→07/07), 15j (07/07→06/23). Pas de jour fixe détecté (mardi, mardi, mercredi, lundi, lundi)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive: 6u (juin) → 6u (juil) → 4u (juil) → 2u (août) → 3u (sept). Dernière commande en baisse à 3u
- **Outliers détectés**: 6u, 6u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **RYTHME OBSERVÉ**: Les 5 commandes s'échelonnent sur ~3 mois avec des intervalles très irréguliers (15, 16, 27, 45 jours). Pas de cycle hebdomadaire clair. Jours hétérogènes: 2 lundis, 2 mardis, 1 mercredi.

2. **TENDANCE QUANTITATIVE**: 
   - Juin 23: 6u
   - Juil 7: 6u (plateau)
   - Juil 23: 4u (baisse de -33%)
   - Août 19: 2u (baisse de -50%)
   - Sept 9: 3u (légère remontée +50%)
   → Tendance globale baissière (-50% sur 3 mois)

3. **ABSENCE DE SAISONNALITÉ N-1**: Aucune donnée N-1 = pas de comparaison saisonnière possible. On travaille en aveugle sur les saisonnalités.

4. **OUTLIERS**: Les valeurs 6u (juin-juil) pourraient être des commandes exceptionnelles ou des "rattrapage", mais sans contexte elles restent dans l'historique.

5. **SITUATION POUR 23/09/2025** (mardi):
   - Intervalle depuis dernière commande (09/09): 14 jours
   - Aucun indication de commande spéciale ou cyclique
   - Jour "mardi" correspond à 2 précédentes commandes (sept 9 et août 19)
   - Dernière commande: 3u (sept 9, mardi aussi)

6. **DÉCISION FINALE**: 
   - Baseline calculée: moyenne (6+6+4+2+3)/5 = 4.2u, arrondie à 4u
   - Pondération forte sur dernières données stables: 3u (sept 9) et 2u (août 19) = moyenne 2.5u
   - Tendance baissière suggère de rester prudent
   - **Prédiction: 3u** (valeur de la dernière commande de même jour de semaine)

⚠️ **CONFIANCE BASSE** car: historique court (5 points), aucune donnée N-1, rythme très irrégulier, données insuffisantes pour pattern fiable.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande variable - aucun jour fixe détecté. Intervalle erratique: ~47j (09/09→08/19), ~27j (08/19→07/23), ~16j (07/23→07/07). Aucune saisonnalité détectable (N-1 absent). Pattern suggère réapprovisionement à la demande plutôt que commande programmée.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 5.5u - 4 dernières commandes : 6u, 6u, 4u, 6u. Moyenne = 5.5u. Aucune hausse ou baisse systématique observable. Légère variabilité (±1u) mais pas de tendance directionnelle.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE CHAÎNE DE PENSÉE:**

1. **Rythme & Fréquence** ✓
   - 4 commandes sur ~2.5 mois → Fréquence: ~1 cmd/3 semaines (irrégulière)
   - Jours de semaine: Mardi (2×), Mercredi (1×), Lundi (1×) → AUCUN jour fixe
   - Intervalles: 47j, 27j, 16j → Pattern CHAOTIQUE, non cyclique
   - Conclusion: Client réapprovisionne à la demande, pas selon calendrier fixe

2. **Analyse des Quantités** ✓
   - Dernières 4 cmd: 6u | 6u | 4u | 6u
   - Moyenne: 5.5u
   - Pas d'outliers détectés (variation naturelle ±1u)
   - Moyenne pondérée (poids fort sur récent): (6×0.35 + 6×0.30 + 4×0.20 + 6×0.15) = 5.6u → arrondi à 6u

3. **Saisonnalité** ✓
   - N-1 absent → impact = NONE
   - Pas de pic saisonnier observable
   - Pas d'effet été/hiver vs reste de l'année

4. **Tendance** ✓
   - Demande STABLE: oscillation mineure autour de 5-6u
   - Pas de hausse progressive ni baisse progressive
   - Pas d'accélération/décélération

5. **Gestion du jour de prédiction (mardi)** ✓
   - Date cible: 2025-09-23 (MARDI)
   - Dernier mardi de commande: 2025-09-09 (6u)
   - Intervalle: 14 jours exactement
   - Un mardi ne garantit PAS une commande (rythme erratique) mais AUGMENTE PROBABILITÉ
   - Aucun effet "rattrapage" détecté (intervalles aléatoires, pas de retard)

**DÉCISION FINALE:**
- Baseline = 5.5u (moyenne robuste)
- Pas d'ajustement saisonnier (N-1 absent)
- Pas d'ajustement tendance (stable)
- Ajustement mineur: +0.5u car mardi = jour possible (2 cmd les 4) → **6u**
- Confidence = MEDIUM (données limitées N-1 absentes, mais pattern récent cohérent)

**MAPE MINIMISÉ:** En visant 5.5→6u, on couvre 75% des cas (3/4 commandes ≥5u) et évite la surcommande.

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, intervalle variable entre 15 et 47 jours. Deux commandes mardi (09-09, 08-19) mais pas cycle fixe confirmé. Pas de pattern hebdomadaire ou mensuel clair détecté.
- **Saisonnalité**: none
- **Tendance**: Baisse progressive: de 6u (07-07) → 4u (06-23, 07-23) → 2u (récentes: 08-19, 09-09). Tendance moyenne -50% sur 3 mois
- **Outliers détectés**: 6u, 4u

**🧠 Raisonnement LLM:**
ANALYSE ÉTAPE PAR ÉTAPE:

1. **ANALYSE RYTHMIQUE**
   - Intervalles entre commandes: 45j (09-09→08-19), 27j (08-19→07-23), 16j (07-23→07-07), 15j (07-07→06-23)
   - Aucun cycle fixe clair (pas récurrence à jour précis ni intervalle régulier)
   - Deux commandes mardi (09-09, 08-19) mais insuffisant pour confirmer pattern
   - Date prédiction: mardi 23-09 (14 jours après dernière commande du 09-09)

2. **DÉTECTION OUTLIERS & TENDANCE**
   - Historique: 4u → 6u → 4u → 2u → 2u (chronologie inversée)
   - Pic 6u (07-07) semble exceptionnel vs baseline 2-4u
   - Tendance claire: baisse de 6u → 2u en 2.5 mois (-67%)
   - Les deux derniers mois convergent à 2u (stabilisation possible)

3. **BASELINE & AJUSTEMENTS**
   - Demande stable récente: 2u (2 commandes consécutives)
   - Moyenne simple 3 derniers mois: (2+2+4+6+4)/5 = 3.6u
   - Moyenne pondérée (poids fort récent): 2.8u
   - Aucune saisonnalité N-1 détectable (pas données historiques)

4. **DÉCISION FINALE**
   - Tendance baisse confirmée + stabilisation à 2u sur 2 dernières périodes
   - Intervalle de 14j depuis dernière commande (proche des 15-16j observés précédemment)
   - Pas de facteur externe connu (date neutre, pas période promotionnelle agro)
   - Recommandation: **2 unités** (aligné sur dernière demande observée et tendance stabilisée)

CONFIANCE MEDIUM: Pattern irrégulier limite la précision, mais convergence récente à 2u fournit signal fort.

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier avec tendance bimensuelle à mensuelle. Commandes relevées: 09 sept (mar.), 19 août (mar.), 07 juil. (lun.), 23 juin (lun.). Intervalle moyen ~23 jours. Pas de cycle strict hebdomadaire détectable.
- **Saisonnalité**: none
- **Tendance**: Hausse modérée (+50% entre juin et septembre). Dernière commande 4u (09 sept) vs moyenne historique ~3.5u. Tendance positive observée mais sur faible volume.
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ **ANALYSE RYTHMIQUE:**
   - 4 commandes en 3 mois (09 sept, 19 août, 07 juil, 23 juin)
   - Intervalle 1: 09 sept → 19 août = 21 jours
   - Intervalle 2: 19 août → 07 juil = 43 jours (RUPTURE)
   - Intervalle 3: 07 juil → 23 juin = 14 jours
   - Moyenne: ~26 jours, mais très irrégulier
   - OBSERVATION: Pas de jour de semaine fixe (mélange Lundi/Mardi)
   - CONCLUSION: Pattern quasi-mensuel sans calendrier strict

2️⃣ **FILTRAGE DES OUTLIERS:**
   - Quantité 6u (23 juin) = +71% vs moyenne (3.5u)
   - Cette hausse pourrait être: promotion saisonnière été, erreur de commande, ou demande client prise isolée
   - Raison: Après ce pic (6u), retour à 2u (19 août), puis 4u (09 sept)
   - VERDICT: Traiter 6u comme outlier exceptionnel (non récurrent)

3️⃣ **TENDANCE MESURABLE:**
   - Hors outlier (6u): 4u → 2u → 4u
   - Moyenne filtrée: (4+2+4)/3 = 3.33u
   - Dernière commande (09 sept, mardi): 4u ✅ Rebond positif après le 2u d'août
   - DIRECTION: Légère hausse vers stabilisation à 4u

4️⃣ **CONTEXTE SAISONNIER N-1:**
   - AUCUNE DONNÉE N-1 disponible
   - Pas de benchmark saisonnier exploitable
   - Impact saisonnier = NONE

5️⃣ **DATE DE PRÉDICTION:**
   - 23 septembre 2025 = MARDI
   - Dernière commande mardi: 09 sept (4u)
   - Intervalle prévisible: 23 sept - 09 sept = 14 jours (court)
   - OBSERVATION: Cycle de 14j irait à l'encontre du pattern mensuel observé
   - Plus probable: Décalage calendrier naturel de la commande

6️⃣ **DÉCISION FINALE:**
   - Baseline (quantité "normale"): 3.5u
   - Tendance: +14% vers le haut (4u dernièrement vs 3u avant)
   - Sécurité: Stock premium B2B, faible volume → recommander la dernière quantité observée (4u)
   - Pas d'indice de baisse → maintenir le niveau récent
   
   **RECOMMANDATION: 4 unités**
   
JUSTIFICATION: En absence de données N-1 et avec pattern irrégulier, la meilleure stratégie est d'aligner sur la dernière tendance observée (4u le 09 sept). Cette quantité reflète la hausse progressive et correspond au rebound après le creux d'août. Confiance "medium" car historique court et faible volume masquent les patterns saisonniers potentiels.

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes intermittentes sur mardi/lundi-mercredi, intervalle ~26-47 jours. Dernières deux commandes: mardi 09/09 (4u) et avant cela mardi 08/19 (4u). Pattern suggère un cycle d'environ 20-25 jours entre commandes, avec préférence pour jours semaine (pas de week-end). Date prédiction 2025-09-23 (mardi) s'aligne parfaitement avec le cycle observé des mardis.
- **Saisonnalité**: none
- **Tendance**: Stable à 4u. La majorité des commandes récentes (3/5) sont à 4u. Le seul pic à 6u (23/06) représente 20% de hausse ponctuelle, probablement lié à un événement B2B spécifique (commande groupée), non une tendance structurelle.
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ **ANALYSE RYTHMIQUE**
   - Dernier mardi: 09/09/2025 → 4u
   - Avant-dernier mardi: 08/19/2025 → 4u (écart: 21 jours)
   - Le client commande régulièrement le MARDI
   - Aujourd'hui: 2025-09-23 = MARDI (parfaitement aligné avec le cycle)
   - Intervalle depuis 09/09: exactement 14 jours (2 semaines) = légèrement court vs 21j habituel, mais confirmé par pattern

2️⃣ **FILTRAGE DES OUTLIERS**
   - Pic à 6u (23/06): +50% par rapport à baseline 4u → OUTLIER événementiel
   - Les 2u (23/07): cas isolé entre deux commandes 4-4u → anomalie mineure, confirme instabilité temporelle, non baisse structurelle
   - Données confirment: baseline = 4u, variations mineures

3️⃣ **ÉVALUATION SAISONNALITÉ**
   - AUCUNE donnée N-1 → impossible de détecter saisonnalité annuelle
   - Impact saisonnier = NONE

4️⃣ **SYNTHÈSE DÉCISION**
   - Pattern: Commandes régulières chaque MARDI
   - Demande stable: 4u est la quantité modale (3/5 commandes)
   - Tendance: Stable (pas de baisse/hausse progressive)
   - Confiance HAUTE: Pattern très régulier, 5 points de données confirmant cycle ~14-21j mardi
   - Prédiction: **4 unités** = quantité la plus probable et régulière

JUSTIFICATION DU CHOIX 4u vs alternatives:
- 2u: improbable (isolé, vs 4-4 dernièrement)
- 6u: improbable (outlier événementiel)
- 4u: OPTIMAL = maximise précision MAPE et aligne avec pattern établi

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 5u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4.4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans pattern hebdomadaire clair. Intervalles variables: 47j (23/06→09/07), 16j (07/07→23/07), 27j (23/07→19/08), 21j (19/08→09/09). Pas de jour fixe: Lun, Lun, Mer, Mar, Mar
- **Saisonnalité**: none
- **Tendance**: Stable autour de 4-5u, avec variabilité: moyenne historique 4.4u (22/110 sur 5 commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - 5 commandes sur 3 mois uniquement → données très fragmentées
   - Intervalles entre commandes: 47j, 16j, 27j, 21j → PAS de pattern régulier
   - Jours de semaine: Lun, Lun, Mer, Mar, Mar → aucun jour fixe apparent
   - Conclusion: Rythme d'achat erratique, client non-régulier (déstockage ou consommation très volatile)

2. **DÉTECTION OUTLIERS**
   - Quantités: 4, 6, 2, 4, 6 unités → amplitude faible (2-6u)
   - Pas de pic anormal détectable (pas de N-1 pour comparaison)
   - Les 6u (juin, août) ne dépassent pas significativement le contexte
   - Les 2u (juillet) peuvent représenter une semaine plus creuse mais cohérent avec volatilité

3. **SAISONNALITÉ & TENDANCE**
   - Aucune donnée N-1 → impossibilité d'identifier seasonality
   - Trend direction: Stable en moyenne (4.4u)
   - Légère oscillation 4→6→2→4→6 plutôt que hausse/baisse structurelle
   - Impact saisonnier: NONE (données insuffisantes et pas de pattern calendaire visible)

4. **SYNTHÈSE DÉCISIONNELLE**
   - Moyenne arithmétique: (4+6+2+4+6)/5 = 4.4u
   - Moyenne pondérée récente (poids fort sur dernière): légèrement favorisée vers 5u
   - Dernière commande (09/09): 4u, intervalle 21j depuis précédente
   - Date de prédiction (23/09): intervalle de 14j depuis dernière → POSSIBLE RATTRAPAGE ou commande intermédiaire
   - La prédiction intervient en milieu de cycle apparent (~21j), d'où incertitude maximale

5. **DÉCISION FINALE**
   - Recommandé: 5u (arrondi légèrement à la hausse de la baseline)
   - Justification: moyenne 4.4u + volatilité oblige à couvrir possibilité de demande 6u
   - Confiance: FAIBLE (données trop fragmentées, pas de pattern clair, pas d'historique N-1)
   - MAPE probable élevé donné la nature imprévisible du comportement client

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 4u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 5u
- 2025-08-19 13:27:28: 1u
- 2025-07-07 08:56:44: 2u
- 2025-06-23 07:14:01: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 4u
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 1u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 1u
- 2025-07-23 10:00:51: 2u
- 2025-06-23 07:14:01: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 3u
- 2025-08-19 13:27:28: 2u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 6u
- 2025-08-19 13:27:28: 6u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 2u
- 2025-08-19 13:27:28: 2u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 2u
- 2025-07-07 08:56:44: 2u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 4u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 4u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 6u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 4u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>




---

## False Positives (7)

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
| [JOY07] JOY! Organic Fig Jam 370g | 2 | Stock prédit: 2.0u (19j restants) → prédit 2u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 11 | Stock prédit: 3.2u (6j restants) → prédit 11u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Stock prédit: -4.4u (-23j restants) → prédit 2u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -5.5u (-60j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -6.9u (-60j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:14:01.059Z*
