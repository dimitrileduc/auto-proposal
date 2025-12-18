# Rapport Backtest - Client REWE MARKT GMBH - WEST

## Contexte

- **Client** : REWE MARKT GMBH - WEST (ID: 3865)
- **Commande réelle** : S39292
- **Date commande** : 2025-09-23 06:18:30
- **Date cutoff système** : 2025-09-22 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 52,047 input + 21,723 output = 73,770 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.8% | 24 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 34.5% | Score équilibré global |

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
| **MAE** | 0.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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

## True Positives (5)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 4u vs Médiane: 5u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.4u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans pattern hebdomadaire strict. Rythme apparent: intervalles variables (7j, 20j, 6j, 27j entre commandes récentes). Absence de cycle fixe identifié (lundi, mardi, etc.). Dernière commande: 02/09 (mardi), demande: 22/09 (lundi) = +20 jours.
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive +50% (N-1: moyenne 2u vs N: moyenne 4,4u sur 3 derniers mois). Volume structurellement accru mais sans pattern saisonnier marqué à cette période.
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**ANALYSE DÉTAILLÉE**

📊 **1. RYTHMIQUE - Absence de pattern régulier**
- Intervalles entre commandes récentes très variables: 7j (11/08→02/09), 20j (19/08→02/09), 6j (15/07→11/08), 27j (19/08→15/07)
- Aucune récurrence hebdomadaire claire (mardis, lundis mixés)
- Rythme imprévisible typique d'un client sans commande planifiée récurrente

**📈 2. SAISONNALITÉ (N-1 vs N)**
- N-1 (sept 2024): 3u le 19/09 (jeudi)
- N (période équivalente): données très limitées pour cette période
- Faible pattern saisonnier identifié
- Pas d'événement remarquable en septembre N-1

**📉 3. TENDANCE & OUTLIERS**
- **Demande de fond N-1** (5 commandes): 2u, 3u, 1u, 1u, 1u = moyenne 1,6u → **baseline théorique ~2u**
- **3 derniers mois** (5 commandes): 5u, 5u, 5u, 1u, 6u = moyenne 4,4u → **+175% vs N-1**
- **Hausse confirmée**: Structure de demande structurellement supérieure en 2025
- **Outlier détecté**: 6u (15/07) = pic supérieur d'1-2u vs cycle normal (5u habituel)
- **Double commande 11/08**: 5u + 1u = peut indiquer ajustement/rupture de cycle

**⏰ 4. SITUATION PRÉDICTION (22/09/2025 - LUNDI)**
- Dernier achat: 02/09 (mardi) = 5u
- Intervalle actuel: +20 jours
- Lundi vs pattern des mardis: changement de jour possible (rattrapage ou décalage?)
- **Risque faible**: 20j sans commande est dans la fourchette historique

**🎯 5. DÉCISION FINALE**
Tendance claire: **5u est devenu le "nouveau normal"** (3 commandes sur 5 récentes)
Cependant, historicité limitée et variabilité élevée justifient prudence légère.

**Quantité recommandée: 4u**
- Formule appliquée: Moyenne récente pondérée avec légère dépréciation (4,4u → 4u arrondi à l'entier inférieur)
- Justification: Anticiper léger défaut de rattrapage (20j vs cycles plus courts), mais rester proche du standard observé (5u)
- Confidence medium: Données irrégulières + manque d'historique N-1 robuste à cette période

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier sans cycle hebdomadaire fixe. Commandes observées : jeudi (N-1), mercredi (N-1), vendredi (N-1), mardi (récent x2), lundi (récent x3). Intervalles très variables : 43j, 33j, 31j, 49j, 19j, entre les commandes. Pas de jour fixe de commande identifié.
- **Saisonnalité**: weak
- **Tendance**: Hausse +100% (N-1: 1-2u stable → N: moyenne 2.8u). Tendance croissante sur 3 derniers mois avec pic à 6u le 2025-07-15.
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1️⃣ **ANALYSE RYTHMIQUE** :
   - Historique très irrégulier : 8 commandes sur ~14 mois
   - Pas de jour fixe identifiable (jeu, mer, ven en N-1 vs mar, lun en période récente)
   - Intervalles erratiques (19j à 49j) → client suit sa propre logique d'approvisionnement, pas un cycle régulier

2️⃣ **SAISONNALITÉ** :
   - N-1 (sept 2024) : 2u → pas de pic saisonnier apparent à cette date
   - Données limitées pour confirmer une saisonnalité forte → Impact = WEAK

3️⃣ **FILTRAGE OUTLIERS** :
   - 6u le 2025-07-15 (mardi) = pics clairement supérieur aux autres (moyenne hors pics: 2-3u)
   - Pourrait être : promo ponctuelle, rattrapage, ou erreur
   - Classé OUTLIER non-récurrent → Ne pas l'inclure dans baseline

4️⃣ **ANALYSE TENDANCE** :
   - N-1 (3 commandes) : moyenne 1.67u (stable, faible demande)
   - 3 derniers mois (5 commandes hors outlier 6u) : moyenne 2.6u (4+3+2+1 = 10u / 4 = 2.5u)
   - **Hausse nette de +100%** : croissance vraie du client

5️⃣ **CONTEXTE DATE PRÉDICTION** :
   - Demandé : 2025-09-22 (LUNDI) → pas d'historique similaire (dernier lundi fut 2025-08-11: 3u et 2u)
   - Pas de rattrapage de cycle identifiable

6️⃣ **CALCUL FINAL** :
   - Baseline = Moyenne pondérée récente HORS outliers = (4 + 3 + 2 + 1) / 4 = 2.5u
   - Ajustement tendance : +10% (croissance stabilisée, pas exponentielle)
   - Baseline ajustée ≈ 2.75u
   - Arrondi conservateur vers le bas (éviter surstock) = **3u**

⚠️ CONFIANCE MEDIUM car :
   ✅ Tendance claire (hausse identifiée)
   ✅ Données cohérentes sur 3 mois
   ❌ Pattern temporel trop irrégulier
   ❌ Peu de données comparables pour un lundi
   ❌ Outlier non expliqué crée du bruit

**PRÉDICTION OPTIMALE : 3 unités** (équilibre entre croissance observée et variabilité client)

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières principalement les mardis (4/5 dernières commandes), avec quelques commandes le lundi. Intervalles variables: 2025-08-19 à 2025-09-02 = 14j, 2025-08-11 à 2025-08-19 = 8j, 2025-07-15 à 2025-08-11 = 27j, 2025-06-23 à 2025-07-15 = 22j. Pattern hebdomadaire incertain mais tendance mardi marquée récemment.
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive +100% (médiane 1u en N-1 → médiane 2u en 3 derniers mois), avec dernier pic à 4u le 2025-08-11
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - N-1 (2024): 3 commandes distantes (19 sept, 11 juin, 4 juin) → Pattern très irrégulier
   - 3 derniers mois: 5 commandes en ~3 mois (fréquence élevée comparée à N-1)
   - Jours identifiés: Mardi dominant (2025-09-02, 2025-08-19, 2025-07-15 = 3/5), Lundi (2025-08-11, 2025-06-23 = 2/5)
   - Intervalles: 8j, 14j, 22j, 27j → pas de cyclicité stricte. Absence de pattern "chaque mardi" régulier
   - DATE PRÉDICTION: Lundi 2025-09-22 (hors jour habituel principal)

2. **FILTRAGE INTELLIGENT DES OUTLIERS**
   - 2025-08-11 = 4u: pic isolé (+100% vs moyenne 2u). Contexte: Lundi (jour atypique pour ce client). Probabilité: Rattrapage après rupture de cycle OU commande exceptionnelle
   - Autres: 1u, 2u, 3u, 1u → variabilité "normale" en B2B agroalimentaire
   - N-1 (2024-09-19 = 1u): date similaire (septembre) mais quantité faible → saisonnalité FAIBLE

3. **SYNTHÈSE & DÉCISION**
   - Baseline théorique: Moyenne récente = (1+3+4+2+1)/5 = 2.2u → arrondir 1.5u (excluant l'outlier 4u) ou 2u (incluant trend)
   - Trend direction: +100% vs N-1 (1u médiane → 2u médiane) = tendance HAUSSIÈRE confirmée
   - Saisonnalité: Faible (N-1 septembre = 1u, mais données insuffisantes)
   - **Effet jour atypique**: Lundi au lieu de Mardi habituel = RISQUE rattrapage? Données insuffisantes pour confirmer. Maintenir baseline
   - **Recommandation**: Baseline 2u (moyenne stable récente hors outlier extrême) × facteur tendance 1.0 = **2u**

4. **CALIBRAGE PRÉCISION MAPE**
   - Commandes: [1, 3, 4, 2, 1] → écarts [-1, +1, +2, 0, -1]
   - Prédiction 2u minimise MAPE vs 1u (qui aurait prédiction trop basse pour le trend haussier)
   - Prédiction 3-4u serait aggressive et ignorerait la majorité des cas stables (1u, 2u)
   - **2u = Point d'équilibre optimal** entre trend haussier et données historiques

CONFIANCE: MEDIUM (données éparses, pas de cycle hebdomadaire strict confirmé, jour atypique, but N-1 limité)

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, pas de cycle hebdomadaire fixe détecté. Intervalles variables : 13j (15/7-19/8), 8j (19/8-27/8), 18j (27/8-14/9), 20j (14/9-4/9), 7j (4/9-11/9). Toutefois, légère préférence pour le MARDI (4 commandes sur 8 récentes en mardi/dimanche) et le LUNDI (2 commandes). Commande demandée un LUNDI.
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 1-2u, avec 2 pics à 3u (août/septembre 2025)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1️⃣ **PATTERN TEMPOREL** :
   - Historique très fragmenté : 8 commandes sur ~15 mois
   - N-1 (3 commandes espacées juin/août/septembre 2024) : demande très faible et sporadique
   - Récent (5 commandes en 3 mois) : légère accélération mais toujours irrégulière
   - Intervalles : 7j, 8j, 13j, 18j, 20j → AUCUN cycle régulier stable
   - Jours de semaine : Mardi dominant (4/8), Lundi fréquent (2/8) → Pas de contrainte jour

2️⃣ **SAISONNALITÉ** :
   - N-1 septembre 2024 : 1u (même mois, année précédente)
   - Septembre 2025 récent : 1u (2/9) → Pas d'effet de saisonnalité forte détecté
   - Impact saisonnier : **FAIBLE** (pas de pic particulier en septembre observé)

3️⃣ **OUTLIERS & TENDANCE** :
   - Deux pics à 3u (19/8 et 11/8) : possibles promotions B2B ou stock client en baisse
   - Reste du temps : 1u stable (baseline naturelle)
   - Tendance : Légère hausse récente (août-septembre) par rapport à N-1 (1u moyen)
   - Direction : **Stable à 1u + deux événements à 3u** → hausse faible +15-20%

4️⃣ **DÉCISION POUR 2025-09-22 (LUNDI)** :
   - Jour : Lundi acceptable (2 commandes précédentes) mais pas le favori
   - Dernière commande : 2025-09-02 (1u, mardi) → 20 jours d'intervalle
   - Cette date suit le pattern "intervalles > 15j" observé récemment
   - Pas d'événement connu (vacances, fête, promo) le 22 septembre
   - Baseline stable : **1u (demande standard)** avec potential léger rattrapage
   - Trend légèrement positif : **+1 ou +1.5u** (moyenne pondérée: 60% poids récent)

5️⃣ **QUANTITÉ RECOMMANDÉE** :
   - **Baseline pure : 1u**
   - **+ Trend récent faible : +0.5u → 1.5u moyenne**
   - **Arrondi optimal pour agro B2B : 2u**
   
   La prédiction de **2u** est un compromis rationnel qui :
   ✓ Représente la tendance légèrement positive (août-septembre)
   ✓ Reste prudent face à l'irrégularité chronique
   ✓ Minimise le risque de rupture (inacceptable B2B alimentaire)
   ✓ Évite la sur-prédiction (MAPE bas sur pattern stable)

6️⃣ **CONFIANCE** :
   - **MEDIUM** : Historique très clairsemé, pattern peu prédictif, mais tendance récente cohérente
   - Risque de variance ±1u dû à l'irrégularité du client


</details>


<details>
<summary><strong>5. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern très irrégulier - Commandes espacées de 50+ jours. Aucune périodicité hebdomadaire ou mensuelle détectée. Dernière commande: 2025-06-23 (lundi), avant celle-ci: 2024-07-05 (vendredi) soit 354 jours plus tôt
- **Saisonnalité**: weak
- **Tendance**: Stable à très faible volume (1u dominante). La commande N-1 de 3u en juillet 2024 reste isolée, pas de confirmation de tendance haussière
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse critique du produit JF034:**

**1. DÉTECTION RYTHMIQUE:**
- Historique extrêmement sparse (4 données sur ~15 mois)
- Intervalle dernier: 2025-06-23 à 2025-09-22 = 91 jours
- Pas de cycle hebdomadaire identifiable (mardi, vendredi, lundi: aucun pattern)
- Commandes très espacées = consommation très faible ou client très irrégulier

**2. ANALYSE DES QUANTITÉS:**
- N-1 (juil 2024): 3u - Pic isolé, potentiellement exceptionnel (promo, erreur, stockage)
- N-1 (juin 2024): 1u
- Récent (juin 2025): 1u ← Pattern dominant
- Baseline observée: 1u en conditions normales

**3. SAISONNALITÉ:**
- Données insuffisantes pour pattern saisonnier robuste
- Juillet 2024 ≠ Septembre 2025 = contextes différents
- Impact faible, à ignorer dans cette prédiction

**4. TENDANCE:**
- Pas de hausse confirmée malgré le pic de 3u il y a 1 an
- Dernière commande (1u) = signal de stabilité à la baisse
- Absence de commande entre juillet 2024 et juin 2025 suggère une consommation très sporadique

**5. DÉCISION:**
Produit de type "faible volume/appel occasionnel". La dernière tendance observable (1u) est le meilleur indicateur faute de données robustes. Recommander 1u = minimiser le MAPE en restant proche du pattern dominant et du dernier signal. Confiance basse en raison de l'insuffisance critère des données.


</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 5u
- 2025-08-19 08:35:46: 5u
- 2025-08-11 13:20:39: 5u
- 2025-08-11 10:59:30: 1u
- 2025-07-15 09:34:20: 6u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 3u
- 2024-08-07 13:24:40: 2u
- 2024-06-11 07:20:33: 3u
- 2024-06-04 08:24:14: 1u
- 2024-06-04 08:21:47: 1u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 4u
- 2025-08-11 13:20:39: 3u
- 2025-08-11 10:59:30: 2u
- 2025-07-15 09:34:20: 6u
- 2025-06-23 06:45:41: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 2u
- 2024-08-07 13:24:40: 2u
- 2024-07-05 08:39:50: 1u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 1u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 4u
- 2025-07-15 09:34:20: 2u
- 2025-06-23 12:14:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 1u
- 2024-06-11 07:20:33: 1u
- 2024-06-04 08:24:14: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 09:41:32: 1u
- 2025-08-19 08:35:46: 3u
- 2025-08-11 13:20:39: 3u
- 2025-07-15 09:34:20: 1u
- 2025-06-23 12:14:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 07:02:21: 1u
- 2024-08-07 13:24:40: 1u
- 2024-06-11 07:20:33: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-23 12:14:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-05 08:39:50: 3u
- 2024-06-04 08:24:14: 1u

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.7u (-5j restants) → prédit 2u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: -1.0u (-6j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 1.0u (9j restants) → prédit 2u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: -1.4u (-13j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-4j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Stock prédit: -0.5u (-3j restants) → prédit 3u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | Stock prédit: 0.5u (28j restants) → prédit 2u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 3 | Stock prédit: -1.0u (-30j restants) → prédit 3u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -0.3u (-22j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: -1.0u (-45j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.3u (30j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:10:43.864Z*
