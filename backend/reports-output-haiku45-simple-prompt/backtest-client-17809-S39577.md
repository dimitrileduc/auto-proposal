# Rapport Backtest - Client AU RAYON BIO

## Contexte

- **Client** : AU RAYON BIO (ID: 17809)
- **Commande réelle** : S39577
- **Date commande** : 2025-10-09 06:15:56
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 33,980 input + 13,939 output = 47,919 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 15 produits prédits, 12 corrects |
| **Rappel** | 80.0% | 15 produits réels, 12 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **wMAPE** | 52.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 65.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (12)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière, pas de cycle hebdomadaire fixe. N-1: ~1 commande/mois (intervalles 21-30j). Récent (3 derniers mois): 3 commandes en 50 jours (accélération). Dernière commande: 2025-09-10 (28j avant la date prédite).
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive: N-1 stable à 2u, Récent montre 3u puis 2u puis 3u (moyenne 2.67u). Signal d'accélération modérée vs année précédente.
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: L'historique révèle un client B2B avec demande peu prévisible. En N-1, les commandes s'espacent de 21-30 jours (moyenne ~25j). Les 3 derniers mois montrent une RUPTURE: 3 commandes en 50j (au lieu de ~2 sur 3 mois). La dernière commande (2025-09-10, mercredi) remonte à 28 jours avant la date prédite, situant cette demande DANS LE CYCLE typique du client.

FILTRAGE OUTLIERS: La quantité 1u du 2024-03-15 est isolée et clairement anormale (tous autres: 2-3u). Écartée de l'analyse. Les trois commandes récentes (3, 2, 3u) suggèrent une volatilité normale plutôt qu'un pic exceptionnel.

SAISONNALITÉ: Pas d'effet saisonnier fort détecté (octobre N-1 n'a pas de données spécifiques). Impact classé WEAK par précaution.

TENDANCE: N-1 montrait une BASELINE stable à 2u. Les 3 derniers mois (moyenne 2.67u) indiquent une HAUSSE de +33% par rapport à la moyenne historique. Cette accélération suggère une augmentation structurelle de la demande (croissance client ou expansion produit).

SYNTHÈSE & DÉCISION: 
- Baseline théorique: 2u (niveau historique N-1)
- Ajustement pour tendance: +0.5 à +1u (signal d'accélération modéré)
- Jour de semaine: Mercredi (neutre, pas d'effet spécifique observé)
- Timing: 28j depuis dernière commande = placement parfait dans le cycle client

**PRÉDICTION: 3 unités**
Justification: Ce volume représente la moyenne des 3 dernières commandes (2.67u arrondi) et reflète l'accélération observée vs N-1. Il est PROBABLE plutôt que pessimiste ("au cas où"), aligné avec la directive agro B2B de PRÉCISION maximale.</reasoning>
</invoke>

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande très irrégulière sur cycle long (30-60 jours). Pas de récurrence fixe par jour de semaine. 15 commandes sur 2 ans = moyenne ~1 commande tous les 48 jours environ.
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u depuis fin 2024 après stabilisation initiale (1u déc 2023 → 2u régulier 2024-2025). Une anomalie ponctuelle à 3u le 24-07-2025.
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

**1. DIAGNOSTIC RYTHMIQUE**
- Historique s'étend de 2023-12-15 à 2025-09-10 = 669 jours
- 15 commandes total = fréquence extrêmement basse (1 commande /~45 jours)
- Intervalles entre 3 commandes récentes: 28j (24-07 → 17-07 = IMPOSSIBLE, erreur de donnée), puis 48j (10-09 → 24-07)
- Pas de jour fixe (Lun, Mar, Ven, Jeu, Mer observés)
- **Conclusion**: Pas de cycle hebdomadaire. Rythme long et imprévisible.

**2. FILTRAGE OUTLIERS**
- 2023-12-15: 1u (anomalie basse initiale, oubli ou test)
- Juillet 2025: 3u sur 24-07, 1u sur 17-07 (données suspectes - 7 jours d'intervalle inhabituel)
- Le pic de 3u du 24-07 rompt le pattern 2u stable
- **Classification**: 3u = outlier ponctuel (probable promotion, essai client ou erreur saisie)
- 1u du 17-07 = autre anomalie courte

**3. SAISONNALITÉ N-1 vs N**
- Septembre 2024: 1 commande (09-09, 2u)
- Septembre 2025: 1 commande (10-09, 2u) 
- Pattern identique → pas d'effet saisonnier fort
- Impact saisonnier = **WEAK**

**4. TENDANCE**
- 2024 complet: 11 commandes, exclusivement 2u (sauf 1u décembre)
- 2025 à ce jour: 3 commandes = 2u, 3u, 1u → volatilité augmentée
- Cependant, dernière observation stables 2u (10-09-2025)
- **Direction**: Stable à 2u avec micro-volatilité résiduelle

**5. CYCLE DE RATTRAPAGE**
- Dernier ordre: 10-09-2025 (28 jours avant prédiction 08-10)
- Interval légèrement sous la moyenne 45j
- Aucun signal de rattrapage massif détecté

**6. BASELINE & PRÉDICTION**
- Baseline = 2u (médiane de tous les ordres réguliers)
- Ajustement saisonnier (faible impact) = 0%
- Ajustement tendance = 0% (stable)
- **Quantité finale = 2u**

**JUSTIFICATION FINALE**:
Malgré la volatilité récente (3u, 1u), la demande core reste 2u. Le client B2B suit un pattern de reconstitution de stock très espacé. La commande du 10-09 à 2u et l'absence d'événement spécial identifié pointent vers une continuité à 2u. Prédire 3u serait sur-interpréter un outlier isolé (24-07). Prédire 1u ignorerait 2 ans de stabilité.

**Confiance HIGH** : Pattern très régulier une fois les outliers filtrés, données cohérentes sur longue période.

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, tous les 40-80 jours en moyenne. Pas de jour fixe identifié (lun, mar, ven, jeu, mer observés). N-1 montre une dispersion similaire.
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 2.8u. Dernières commandes N (3u, 3u, 1u) cohérentes avec N-1 (moyenne 2.5u). Pas de hausse significative détectée.
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **PATTERNS TEMPORELS**: L'historique révèle des commandes très espacées et irrégulières (~40-80 jours), sans jour de semaine dominant. N-1 (2023-2024) et période récente (2025) montrent des intervalles similaires → pattern stabilisé.

2. **QUANTITÉS N-1 (Baseline annuelle)**: Moyenne = 2.5u avec forte dispersion (1-4u). Les pics à 4u sont exceptionnels (Déc 2024, Sept 2024).

3. **QUANTITÉS RÉCENTES (3 derniers mois)**: 
   - 2025-09-10: 3u (mercredi, +18j)
   - 2025-07-24: 3u (jeudi)
   - 2025-07-17: 1u (jeudi, -7j)
   → Moyenne = 2.3u, avec une valeur basse identifiée (1u le 17/07 = probable oubli/stock)

4. **SAISONNALITÉ**: Octobre N-1 n'est pas documenté. Septembre-Août N-1 = 3-4u. Pas de pattern saisonnier d'automne détecté → impact WEAK.

5. **OUTLIERS**: La valeur 1u du 17/07/2025 dévie fortement de la tendance (correction/rupture stock). Elle est filtrée comme anomalie.

6. **TENDANCE DIRECTION**: Stable à 2.8-3u sans accélération ou décélération nette.

7. **JOUR DE COMMANDE**: Prédiction mercredi (2025-10-08). Aucune préférence mercredi en N-1. Pas d'ajustement jour spécifique.

**CONCLUSION**: 
- Baseline robuste = 2.8u (moyenne pondérée: 70% N récent, 30% N-1)
- Arrondi entier = **3u** (cohérent avec 2/3 des dernières commandes)
- Confiance MEDIUM (données peu nombreuses en N, pattern irrégulier limite la précision)

**JUSTIFICATION**: En agro B2B, commandes irrégulières = stock management client, pas promotion cyclique. La valeur 3u représente la demande régulière hors anomalies. Évite surstock (4u) et sous-stock (1-2u).

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, pas de cycle stable détecté. Historique N-1 montre des achats sporadiques (1-2u), avec intervalles variables (15-50 jours). Dernière commande récente: 2025-09-10 (mercredi) à 3u.
- **Saisonnalité**: weak
- **Tendance**: Hausse exceptionnelle +50% (de 1-2u habituel à 3u le 2025-09-10)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **PATTERN RYTHMIQUE**: Aucun cycle stable identifié. L'historique N-1 (12 commandes sur 1 an) montre une demande très irrégulière sans jour préférentiel: lundi (3x), vendredi (4x), mardi (3x), mercredi (2x). Intervalles variables (10-50 jours). Cela indique un client à demande sporadique, possiblement événementielle ou driven par des besoins spécifiques.

2. **DONNÉES RÉCENTES (CRUCIAL)**: Une seule commande en 3 mois (2025-09-10 à 3u). C'est un SIGNAL D'ALERTE:
   - Soit le client a réduit ses achats → tend vers 0-1u
   - Soit il y a eu une promotion/événement → pic de 3u ne se reproduira pas immédiatement
   - Intervalle de 2 jours avant la date de prédiction (2025-10-08) → trop court pour détecter un nouveau cycle

3. **SAISONNALITÉ N-1**: Octobre 2023 (N-2) = 1u. Pas d'indication forte d'une hausse saisonnière en octobre. Baseline N-1 moyenne = (1+1+2+2+1+1+2+2+2+1+2+1)/12 ≈ **1.5u**.

4. **FILTRAGE OUTLIERS**: Le pic de 3u du 2025-09-10 est 100% au-dessus de la baseline. C'est probablement une demande ponctuelle (événement, stock bas du client, test produit). Risque élevé de **RETOUR À LA BASELINE** après ce pic.

5. **DÉCISION PRUDENTE**: Avec une seule data point récente et aucun pattern stable, privilégier la **moyenne historique légèrement ajustée à la hausse** pour capturer la tendance récente (+50%), mais pas pleinement car risque d'overstock. 
   - Baseline: 1.5u
   - Ajustement tendance récente: +0.5u max
   - **Prédiction = 2u** (arrondi supérieur pour capturer volatilité, mais pas le pic exceptionnel)

**CONFIANCE**: LOW car données très limitées en récence (1 seule commande en 90j), pattern instable, et impossibilité de valider si le pic de 3u est récurrent.

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes épisodiques non régulières - Intervalles variables entre 17 et 78 jours. Pas de cycle hebdomadaire ni mensuel détecté. Jours de semaine variés (lun, mar, ven, jeu, mer) sans fixité. Dernière commande 2025-09-10 (mer) → nouvelle demande 2025-10-08 (mer) = 28 jours d'intervalle.
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive légère : N-1 stables à 2u (1 exception à 1u en mars 2024), période récente montre 3u le 2025-09-10 (+50% vs baseline). Demande remonte mais sans pattern cyclique saisonnier fort.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE ÉTAPE PAR ÉTAPE:

1. **ANALYSE RYTHMIQUE**: 
   - L'historique complet montre 15 commandes sur ~2 ans avec intervalles très irréguliers (17j à 78j)
   - Pas de jour fixe : Mix lun/mar/ven/jeu/mer = client opportuniste ou gestion par pic de besoin
   - N-1 (2023-2024): Commandes épisodiques, toutes à 2u sauf 1 exception mars 2024 (1u)
   - Période récente: Seules 3 commandes disponibles (juil-sept 2025)

2. **PATTERN DÉTECTÉ - RUPTURE POSITIVE**:
   - 2025-07-24 (jeu): 2u | 2025-07-17 (jeu): 2u → Tentative 2u en juillet (intervalles réguliers, 7j)
   - 2025-09-10 (mer): 3u → **Hausse de 50%** = rupture nette (+1u) par rapport à l'historique
   - Intervalle dernier achat → prédiction: 28 jours (cohérent avec demandes ponctuelles)

3. **FILTRAGE OUTLIERS**:
   - La valeur 3u du 2025-09-10 n'est PAS un pic exceptionnel (erreur/promo), c'est une montée de consommation
   - Tous les autres points (N-1 = 2u, sauf 1u mars 2024) forment une baseline stable
   - Mars 2024 (1u) = vrai outlier à exclure (contexte indéterminé)

4. **SAISONNALITÉ**:
   - N-1 octobre (2024-10-30): 2u | N actuellement: octobre 2025
   - Aucun pic saisonnier fort identifié (pas de variation décembre/janvier/septembre récurrente)
   - Impact saisonnier = FAIBLE

5. **SYNTHÈSE & DÉCISION**:
   - **Baseline théorique**: 2u (moyenne N-1 = 2u, 11 commandes / 12 si on exclut l'outlier)
   - **Coefficient récent**: Dernière commande 3u = +50% vs baseline
   - **Probabilité hausse confirmée**: Juillet 2025 montre 2 commandes à 2u, mais septembre monte à 3u → tendance haussière modérée
   - **Prédiction finale**: 3u (valider la nouvelle baseline récente plutôt que revenir à 2u)
   
   MAPE optimal: Recommander la dernière valeur observée (3u) minimise l'erreur si la tendance se poursuit. Revenir à 2u risquerait une sous-commande (-33%).

**Date prédiction (2025-10-08 mer) ≈ 28j après 2025-09-10** → Délai cohérent avec le rythme opportuniste du client.

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans pattern hebdomadaire fixe. N-1 montre commandes dispersées (lun, mar, ven). Période récente (3 mois) : 3 commandes sur jeu/mer sans régularité (24/07, 17/07, 10/09). Aucun cycle menstruel ni hebdomadaire apparent.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% : N-1 montre demandes équilibrées (1-2u), période récente stable à 1-2u mais plus espacées (intervalles 38j, 7j, 50j). Pas de hausse, demande tasse-mozèle.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1️⃣ **ANALYSE RYTHMIQUE** :
   - N-1 (2023-2024) : 9 commandes sur ~11 mois → rythme très lâche (1-2u par commande)
   - Derniers 3 mois : 3 commandes seulement (10/09, 24/07, 17/07)
   - Intervalles récents : 50j (17/07→24/07 ✗, erreur lecture), puis 38j (24/07→10/09), puis 48j (10/09→08/10 prédiction)
   - **PATTERN : Irrégulier**. Pas de jour fixe (lun/mar/jeu/mer/ven alternent). Pas de cycle mensuel régulier.

2️⃣ **SEGMENTATION DONNÉES** :
   - N-1 baseline : moyenne = (1+2+2+2+2+2+2+1+2)/9 ≈ 1.67u
   - Période récente (3 mois) : 1u + 1u + 2u = 4u en 3 commandes → 1.33u/cmd
   - **Pas d'outliers détectés** : toutes les quantités (1-2u) sont cohérentes et représentatives

3️⃣ **SAISONNALITÉ** :
   - N-1 : aucun pic saisonnier visible (août 1u, juillet 2u, juin 2u, avril 2u, février 2-2u, janvier 2u)
   - Impact WEAK : produit tartinade olives vertes = consommation relativement stable année, pas effet "fête" ou "récolte"

4️⃣ **TENDANCE IMMÉDIATE** :
   - Dernière commande : 1u (10/09/2025 mercredi)
   - DATE PRÉDICTION : 08/10/2025 (mercredi) → +48j après dernière cmd
   - Tendance : **STABLE** (pas hausse, pas baisse nette). Oscillation 1-2u

5️⃣ **JOUR DE COMMANDE** :
   - Prédiction mercredi (08/10)
   - N-1 : vendredi (2x), lundi (3x), mardi (2x), vendredi (1x) → pas de mercredi
   - Période récente : jeudi (2x), mercredi (1x)
   - **Pas d'effet jour** : le client commande tout jour de la semaine

6️⃣ **SYNTHÈSE & DÉCISION** :
   - Baseline théorique N-1 = 1.67u
   - Tendance récente = 1.33u (légèrement en baisse)
   - Dernier point = 1u
   - **Moyenne pondérée (40% N-1 + 60% récent)** = 0.4×1.67 + 0.6×1.33 ≈ **1.47u**
   - **ARRONDI LOGIQUE** : En B2B agroalimentaire, on commande par unité entière. Oscillation naturelle 1-2u suggère **cycle de rattrapage tous les 2 cmd**.
   - **RECOMMANDATION : 2u** (rattrapage léger après commande précédente à 1u, + moyenne historique proche de 1.5-1.67u)

🎯 **CONFIANCE MEDIUM** : Données peu denses (3 cmd/3 mois), pattern très irrégulier, mais cohérence quantitative forte (toujours 1-2u) réduit le risque.

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pas de cycle hebdomadaire régulier identifié. Historique très fragmenté : commandes espacées de 30-60j en N-1, puis rupture quasi-totale en 2025. Dernières commandes (3 mois récents) : 10/09/2025 (mer), 24/07/2025 (jeu), 17/07/2025 (jeu). Intervalle irrégulier suggère demande imprévisible ou produit non prioritaire.
- **Saisonnalité**: weak
- **Tendance**: Baisse forte observée : N-1 montre moyenne 2.3u régulière ; 2025 révèle crash d'activité (3 commandes en 6 mois vs 12 en 2024). Dernière commande (10/09) = 1u, tendance déjà comprimée. Pas de saisonnalité marquée à octobre N-1 (dernière donnée: novembre 2023 = 3u).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1️⃣ **ANALYSE RYTHMIQUE**
   - N-1 (2024) : 12 commandes étalées irrégulièrement (pas de jour fixe récurrent)
   - 3 derniers mois (2025) : seulement 3 commandes = effondrement de 75% du rythme
   - Pas de cycle hebdomadaire détectable (mélange lun/mar/ven/jeu/mer)
   - Pas de cycle mensuel régulier (~30j) observable

2️⃣ **FILTRAGE OUTLIERS**
   - Aucun pic exceptionnel détecté. Toutes les quantités entre 1u et 3u
   - Moyenne N-1 = 2.3u ; Moyenne récente (3 mois) = 1.67u (baisse progressive)
   - La dernière commande (10/09/2025) = 1u = signal de compression

3️⃣ **SAISONNALITÉ**
   - Octobre N-1 : aucune donnée
   - Novembre N-1 (2023) = 3u (ponctuel, non confirmé en 2024)
   - Impact saisonnier FAIBLE à inexistant pour octobre

4️⃣ **TENDANCE**
   - 2024 → 2.3u/commande stable
   - 2025 → crash brutal (1.67u/commande, dernière = 1u)
   - Client apparemment devenu inactif ou redirigé ailleurs
   - Tendance = **Baisse forte -28%**

5️⃣ **DATE PRÉDICTION (08/10/2025 = mercredi)**
   - Dernière commande = 10/09/2025 (mercredi) = 1u
   - Intervalle = 28 jours (un mois)
   - Aucun pattern "mercredi habituel" observable (trop peu de données)

**CONCLUSION RÉSERVÉE** :
Baseline = 1.5u (moyenne pondérée : 70% récent=1.67u + 30% N-1=2.3u)
**Recommandation = 1u** (privilégier le signal le plus RÉCENT et la tendance observée)

⚠️ **CONFIANCE = LOW** : Historique fragmenté + rupture brutale de comportement = données insuffisantes pour haute précision. Ce produit mérite un questionnement client (produit en fin de vie ?).


</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier avec prédominance de jeudi/vendredi. Pas de cycle hebdomadaire strict. Intervalles variables : 48j entre 2025-07-24 et 2025-09-10 ; 7j entre 2025-07-17 et 2025-07-24
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive N-1 vers N : moyenne N-1 = 1.6u, moyenne récente (3 derniers mois) = 2.0u, mais dernière commande seule = 1u (2025-09-10). Tendance actuelle: volatilité avec légère baisse
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
## ANALYSE CHAÎN OF THOUGHT

### 1️⃣ ANALYSE RYTHMIQUE
- **Jours de commande N-1**: Lun (3x), Mar (2x), Ven (3x), Jeu (0x) → Concentration mardi/vendredi
- **Jours récents (3 derniers mois)**: Mer (1x), Jeu (2x) → Glissement vers Jeudi, pas de mercredi récent
- **Intervalles**: 48 jours entre dernières commandes (2025-07-24 → 2025-09-10), puis 49 jours vers 2025-10-08
- **Conclusion**: Pas de cycle fixe hebdomadaire. Client commande irrégulièrement, plutôt mensuel (~7-8 semaines).

### 2️⃣ FILTRE OUTLIERS & SAISONNALITÉ
- **Pic détecté**: 3u le 2025-07-17 → Possible promotion été/déstockage. Événement ONE-SHOT (ne se répète pas le 2024-07-15 qui avait 2u)
- **Saisonnalité N-1 vs N**: 
  - Octobre N-1: 1 commande (2u)
  - Septembre N-1: 1 commande (1u)
  - Septembre N récent: 1u (2025-09-10)
  - **Impact**: FAIBLE. Pas de pattern saisonnier fort octobre-septembre

### 3️⃣ TENDANCE & BASELINE
- **Moyenne N-1** (8 données pertinentes): (1+2+2+2+1+2+2+1+2)/9 = 1.67u ≈ **1.8u**
- **Moyenne récente** (3 derniers mois): (1+2+3)/3 = **2.0u**
- **Dernière commande seule**: 1u (2025-09-10) → Baisse ponctuelle
- **Tendance globale**: Stable/légère volatilité autour de 1.8-2.0u

### 4️⃣ DÉCISION FINALE
- **Baseline théorique**: 1.8u (moyenne pondérée historique)
- **Ajustement jour**: Mercredi (date prédiction) n'est PAS jour habituel (-5% de risque déviation)
- **Ajustement outlier**: Le pic 3u est isolé → n'ajuste pas à la hausse
- **Justification 2u**:
  - Proche baseline (1.8u arrondi à 2u)
  - Cohérent avec récent (moyenne 2.0u)
  - Jour anormal (mercredi) → conservatisme léger (pas de hausse)
  - Évite surstock après volatilité

**CONFIANCE MEDIUM** : Données insuffisantes (n=11 sur 2 ans), pattern irrégulier, jour de prédiction atypique.

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - 3 commandes en 3 mois (août-septembre 2025), intervalle ~24-45j. Rupture majeure du pattern N-1 (moyenne ~1.8 mois d'écart en 2024). Aucun cycle hebdomadaire fixe détecté.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive et stabilisation à 1u - Passage de 2u (N-1, moyenne 2024) à 1u (100% des commandes récentes depuis juillet 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE :**\n- N-1 (2024) : 12 commandes sur 12 mois, moyenne ~1.8 mois entre commandes, quantité systématique = 2u (sauf 1 outlier à 1u).\n- Période récente (3 mois, juil-sep 2025) : Seulement 3 commandes (24-45j d'intervalle), TOUTES à 1u. Rupture nette de fréquence (moins régulière) ET de volume (50% moins).\n\n**FILTRAGE OUTLIERS :**\n- Aucune quantité exceptionnelle détectée. Les 2u de N-1 représentent le pattern standard, pas un pic.\n- L'unique 1u en nov-2023 était isolé sur 12 mois.\n- Les 3 × 1u récentes (juil-sep 2025) forment un nouveau pattern stable et cohérent.\n\n**SAISONNALITÉ :**\n- Octobre 2024 : aucune donnée (période non comparable).\n- Pas d'événement saisonnier identifié (pas de pics fête/promotion).\n- Impact saisonnier = FAIBLE (produit régulier, tartinade tomate basique).\n\n**TENDANCE :**\n- Évidence : Baisse progressive et STABILISATION à 1u depuis juillet 2025.\n- Hypothèses causales : Changement de client/besoin, réduction budgétaire, substitution produit, ou ajustement stock.\n- La dernière commande (10-sep-2025, 1u) est le signal le plus fiable.\n\n**PRÉDICTION POUR 2025-10-08 (mercredi) :**\n- Baseline = 1.5u (moyenne arithmétique : (2u N-1 + 1u récent)/2 = 1.5u, avec poids 70% sur récent).\n- Ajustement tendance : -50% confirmé sur 3 mois → recommander 1u (= attendre stabilisation, pas surstock).\n- Le jour (mercredi) ne modifie pas le pattern (irrégularité jour-to-jour en N-1).\n- Confidence = MEDIUM (données insuffisantes en 2025 pour certitude, mais signal baisse est clair).\n\n**CONCLUSION :**\nRecommander 1u répond à la tendance observée et minimise MAPE (évite surstock de 2u non justifié). En cas d'augmentation soudaine à la commande suivante, cela signalera une reprise à monitorer."

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans cycle hebdomadaire fixe. N-1 : 1-2u tous les 30-60j environ. N+3mois (récent) : 3 commandes en ~50j (juillet-septembre 2025) avec intervalles de 7j et 49j
- **Saisonnalité**: weak
- **Tendance**: Stable à 1-2u avec tendance légère vers 1u en période récente
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**ANALYSE CHAÎNE DE PENSÉE :**

1. **RYTHMIQUE OBSERVÉE**
   - N-1 (2024): 10 commandes sur ~10 mois = rythme ~30-35 jours en moyenne, pas de jour fixe récurrent
   - Récent (3 derniers mois, 2025): 3 commandes distribuées irrégulièrement (24/07, 17/07 à 7j d'intervalle, puis 49 jours avant 10/09)
   - **Pas de pattern hebdomadaire fixe (lundi, vendredi, etc.) → client commande à besoin sporadique**

2. **CYCLICITÉ DÉTECTÉE**
   - Dernière commande: **2025-09-10 (mercredi) = 1u**
   - Aujourd'hui (demandée): **2025-10-08 (mercredi) = +28 jours exactement**
   - Cet intervalle de 28 jours pourrait signaler un cycle mensuel émergent
   - OR, les 3 commandes précédentes (N-1 + 3mois récent) montrent intervalles variables (7j, 49j, ~35j avant)
   - **Interprétation : Possible début de rythme mensuel, mais incertitude modérée**

3. **FILTRE OUTLIERS & SAISONNALITÉ**
   - Quantités: 1u, 1u, 2u (récent) vs N-1: 1-2u de manière équilibrée
   - Les pics à 2u (2024-08-02, 2024-06-21, 2024-03-15, 2025-07-24) ne correspondent pas à octobre → **pas de saisonnalité forte détectée pour octobre**
   - **October 2024 (N-1): 2025-10-30 → 2u** MAIS sur 1 seul point, insuffisant pour conclure saisonnalité
   - **Verdict: Saisonnalité FAIBLE, client achète régulièrement mais pas d'pics spécifiques à octobre**

4. **TENDANCE IMMÉDIATE**
   - Moyenne N-1: (2+2+2+1+2+2+2+1+1+2) / 10 = **1.7u**
   - Moyenne Récent (3 derniers mois): (1+2+1) / 3 = **1.33u** → légère baisse
   - **Trend direction: Stable à 1-1.5u, avec inflexion légère vers 1u**

5. **BASELINE THÉORIQUE**
   - Fond stable observé = **1-1.5u**
   - Client B2B Agro acquiert cette tartinade olive-caper régulièrement mais en faible volume (1-2u par commande)
   - Profil: petit distributeur ou restaurateur achetant peu fréquemment

6. **DÉCISION FINALE**
   - Date demandée: mercredi = même jour que dernière commande (excellente synchronisation)
   - Intervalle 28j parfait pour cycle mensuel → **indication pour oui**
   - Quantité attendue: dernière commande était 1u → **reconduction à 1u probable**
   - Les 2 pics (1 en juillet, potentiel ratrapage) → **reconduction prudente à 1u, pas d'amplification**
   - Confiance MEDIUM car: pattern récent est court (3 pts), variabilité historique reste (1-2u), intervalle est régulier MAIS pas répliqué suffisamment

**RECOMMANDATION: 1u** (correspondance jour, intervalle cyclique, tendance récente, prudence sur volume)**

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 30-45 jours avec légère volatilité. N-1 montre une commande tous les mois, dernièrement tous les jeudis (2025-07-24 et 2025-07-17, 7j d'intervalle = rupture de cycle?)
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u, avec spike ponctuel à 3u en juillet 2025
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1️⃣ **PATTERN RYTHMIQUE - Observation critique:**
   - N-1 (2023-2024): Commandes très régulières, ~1 par mois, majoritairement le lundi ou vendredi, quantité quasi-stable à 2u (95% des cas)
   - Intervalle moyen N-1: ~28-45 jours entre commandes
   - Dernières 3 mois: 2 commandes le jeudi (2025-07-17 et 2025-07-24) = RUPTURE du cycle habituel
   - Intervalle récent: 7 jours seulement (vs 30j en N-1) = possible phase d'accélération ou rattrapage

2️⃣ **OUTLIERS DÉTECTÉS:**
   - 2025-07-17: 3u (pic vs baseline 2u) → +50% = potentiel one-shot (promotion, client spécial, erreur)
   - Reste de l'historique: strictement 2u (11 cas) ou 1u (2 cas exceptionnels)
   - Pas de pattern de 3u en N-1 à cette période → outlier ponctuel

3️⃣ **SAISONNALITÉ (Octobre vs historique):**
   - N-1 octobre: 1 commande (2024-09-09) à 2u = comportement normal
   - Pas de pic saisonnier marqué en septembre/octobre → impact WEAK

4️⃣ **TENDANCE DÉCENTE:**
   - Stable à 2u depuis N-1 jusqu'à juillet 2025
   - Le pic de 3u (2025-07-17) est isolé et non confirmé par la commande suivante (2025-07-24 = 2u)
   - Conclusion: tendance STABLE, not trend-driven

5️⃣ **DÉCISION PRÉDICTIVE:**
   - Date 2025-10-08 = mercredi (rupture du pattern jeudi récent)
   - Intervalle depuis 2025-07-24: 76 jours = revenir à cycle mensuel normal ~30-45j
   - Baseline: 2u (stabilité maximale depuis N-1)
   - Ajustements: aucun (+0, car pas de saisonnalité, trend stable)
   - **RECOMMANDATION: 2u** (confidence HIGH car 95% de l'historique le confirme)

**Minimisation MAPE:** Prédire 2u minimise l'erreur vs historique (résidu moyen ≈0, MAPE ≈ 5% si un outlier de 3u survient exceptionnellement)

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 2u
- 2025-07-24 14:00:56: 3u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 3u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 4u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 3u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 3u
- 2024-02-02 09:19:36: 3u
- 2024-01-22 12:29:19: 1u
- 2023-12-15 07:53:16: 1u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 1u
- 2024-08-02 06:18:07: 1u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 1u
- 2024-05-21 08:51:32: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2023-12-15 07:53:16: 1u
- 2023-11-28 08:55:15: 2u
- 2023-10-30 07:15:45: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-11-28 08:55:15: 2u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 1u
- 2025-07-17 06:58:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:18:07: 1u
- 2024-07-15 06:44:53: 2u
- 2024-06-11 07:33:02: 2u
- 2024-04-15 06:28:42: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-11-28 08:55:15: 3u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 1u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 1u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 1u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2023-12-15 07:53:16: 2u
- 2023-11-28 08:55:15: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u
- 2023-11-28 08:55:15: 1u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (3)

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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Stock prédit: 0.3u (9j restants) → prédit 2u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 2 | Stock prédit: -0.3u (-24j restants) → prédit 2u mais non commandé |


---

## False Negatives (3)

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
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock suffisant: 2.5u (45j restants > seuil 30j) |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock suffisant: 2.8u (60j restants > seuil 30j) |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock suffisant: 1.8u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:12:03.247Z*
