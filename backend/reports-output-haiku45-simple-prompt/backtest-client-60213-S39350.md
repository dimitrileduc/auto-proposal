# Rapport Backtest - Client BIOK THOREMBAIS

## Contexte

- **Client** : BIOK THOREMBAIS (ID: 60213)
- **Commande réelle** : S39350
- **Date commande** : 2025-09-24 13:05:32
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 40,133 input + 14,031 output = 54,164 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.6% | 21 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 64.5% | Score équilibré global |

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
| **MAE** | 0.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 48.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [KOKO01] KOKO Kombucha original 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.6u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans cycle hebdomadaire apparent. Intervalles: 22j (03/09-12/08), 20j (12/08-23/07), 15j (23/07-08/07), 14j (08/07-24/06). Moyenne inter-commande: ~17-18 jours. Le client ne commande pas à jour fixe (alternance mar./mer.). Absence de pattern strict.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2-3u avec un pic exceptionnel à 4u (03/09, veille période estivale). Pas de tendance linéaire claire sur la période récente.
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **RYTHMIQUE**: L'historique montre des commandes très irrégulières (intervalles: 22j → 20j → 15j → 14j). Pas de jour fixe détectable (alternance mardi/mercredi). Le pattern suggère plutôt une demande opportuniste/variable plutôt qu'un cycle rigide.

2. **DONNÉES DISPONIBLES**: Uniquement 5 commandes sur 3 mois (juin-sept 2025). Volume très restreint limite la fiabilité de tout pattern. Aucune donnée N-1 pour calibrer saisonnalité.

3. **OUTLIER DÉTECTÉ**: Le 03/09 (4u) se détache des autres commandes (1, 2, 3, 3u). Ce pic peut être lié à:
   - Promotion de fin d'été (plausible en agro B2B)
   - Reconstitution de stock après rupture
   - Événement ponctuel (one-shot)
   La moyenne hors outlier: (1+2+3+3)/4 = 2.25u

4. **BASELINE**: Moyenne simple = (4+1+2+3+3)/5 = 2.6u. Moyenne robuste (médiane) = 3u. Moyenne hors outlier = 2.25u. Privilégier la médiane (3u) plutôt que la moyenne biaisée par le pic.

5. **TENDANCE**: Pas de hausse ni baisse progressive. Les 4 dernières commandes (après le pic): 1, 2, 3, 3 montrent une légère remontée de 1u → 3u, potentiellement normalisante post-pic.

6. **JOUR DE LA SEMAINE**: Prédiction le MARDI 23/09. Les commandes récentes ont alterné mar./mer. Pas d'avantage à privilégier un jour spécifique. Pas d'effet "jour hors cycle" détectable.

7. **DÉCISION FINALE**: 
   - Baseline = 2.6u (moyenne pondérée)
   - Médiane = 3u (plus robuste)
   - Tendance récente légère hausse
   - → Recommandation: **3u** (arrondi naturel, cohérent avec dernières commandes stables)

CONFIANCE MEDIUM: Données limitées (5 points), pattern irrégulier, pas de saisonnalité calibrée. La prédiction reste prudente mais justifiée par les données disponibles.

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pas de pattern hebdomadaire strict. Commandes irrégulières avec intervalles variables : 22j (23-07→08-08), 47j (08-07→24-06 inversé), 21j (24-06→12-08), 22j (12-08→03-09). Aucune préférence de jour de semaine détectée.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2u avec pic isolé à 3u le 03-09. Moyenne pondérée récente (3 dernières commandes) : 1.67u, tendance légèrement à la baisse depuis le pic septembre.
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1️⃣ **ANALYSE RYTHMIQUE** :
   - 5 commandes en 3 mois avec intervalles fortement irréguliers (21-47 jours)
   - Aucun jour de semaine privilégié (mer., mar., mar., mar., mer.)
   - Pas de cycle hebdomadaire (Lun-Ven) ni mensuel détectable (~30j)
   - Pattern : **Demande imprévisible/client-driven**

2️⃣ **FILTRAGE OUTLIERS** :
   - Pic du 03-09 à 3u est isolé → événement ponctuel (promotion interne, affichage client, test stock)
   - Les 4 autres commandes concentrées à 1-2u → baseline stable
   - Pas de N-1 pour valider si 3u est récurrence saisonnière → traiter comme événement

3️⃣ **SYNTHÈSE QUANTITATIVE** :
   - Moyenne brute : 2.0u (10u/5 commandes)
   - Moyenne pondérée récente (poids décroissant) : 
     * 03-09 (3u) × 1.0 = 3.0
     * 12-08 (1u) × 0.7 = 0.7
     * 23-07 (1u) × 0.5 = 0.5
     * Total pondéré : 4.2u / 2.2 = 1.9u ≈ 2u
   - Ajustement jour hors-cycle : Mardi 23-09 n'est pas un jour de commande habituel (pas de préférence détectée), donc pas d'ajustement rattrapage

4️⃣ **DÉCISION FINALE** :
   - Baseline = 2u (moyenne stable, excluant pic 3u)
   - Tendance récente : légère baisse post-pic → maintien baseline
   - **Confiance MEDIUM** : données limitées, pattern erratique, pas de N-1, mais 2u reste la quantité la plus probable et robuste

✅ **PRÉDICTION : 2 unités** → Minimise écart vs demande réelle tout en évitant surstock spéculatif.</reasoning>
</invoke>

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, concentration les mardis (3 commandes sur 4) avec écarts de 44-57 jours entre chaque demande
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité - aucune hausse ou baisse observée sur la période récente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE - Détection du pattern**
   - Données: 4 commandes sur 4 mois (Juin→Sept 2025)
   - Intervalles: Juin 24→Juil 8 (14j), Juil 8→Août 12 (35j), Août 12→Sept 3 (22j)
   - Mardi: 3/4 commandes (Juin 24, Juil 8, Août 12) - faible signal de régularité
   - Mercredi: 1/4 (Sept 3)
   - Pattern: TRÈS IRRÉGULIER - pas de cycle fiable (hebdo ou mensuel)
   - Intervalles erratiques (14j, 35j, 22j) sans structure discernable

2. **FILTRAGE OUTLIERS**
   - Toutes les commandes = 1 unité exactement
   - Aucun pic, aucun zéro - données très stables en volume
   - Pas d'anomalie dans les quantités

3. **DONNÉES N-1**
   - Absent - impossible d'évaluer saisonnalité annuelle
   - Pas de référence historique pour "septembre N-1"

4. **TENDANCE & BASELINE**
   - Tendance: STABLE à 1u
   - Moyenne: 1u (min=1, max=1)
   - Aucune hausse (+0%), aucune baisse (0%)
   - Baseline = 1 unité

5. **JOUR DE PRÉDICTION: MARDI 23/09/2025**
   - Mardi = jour le plus probable (75% des commandes)
   - Cohérent avec pattern historique (bien que faible)
   - Aucune raison de modifier basé sur le jour

6. **DÉCISION FINALE**
   - En absence de saisonnalité N-1 et avec demande ultra-stable (100% des commandes = 1u)
   - Pas de signal de rupture de tendance
   - Recommandation = 1 unité
   - Confiance = MEDIUM (données limitées: 4 points seulement, pattern irrégulier, pas de N-1)

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 20-52 jours. Commandes détectées: mar (3x), mer (2x). Pas de jour privilégié. Moyenne: ~42 jours entre commandes.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1u, avec un outlier à 2u le 2025-09-03
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE** :
   - 5 commandes sur 3 mois: 2025-06-24 (mar) → 2025-07-08 (mar, +14j) → 2025-07-23 (mer, +15j) → 2025-08-12 (mar, +20j) → 2025-09-03 (mer, +22j)
   - Intervalles croissants mais sans pattern hebdo fixe (alternance mar/mer sans cadence régulière)
   - Fréquence moyenne: ~42 jours entre commandes
   - CLIENT: Client de faible volume (1u typique), rythme étirement → signal de demande fluctuante/basse activité

2. **FILTRAGE OUTLIERS** :
   - 2025-09-03: 2u (unique pic à 2u) = 100% au-dessus de la moyenne
   - Contexte: Aucune donnée N-1, aucun événement identifié
   - HYPOTHÈSE: Achat ponctuel (test, promotion client, ou rattrapage d'une rupture antérieure)
   - DÉCISION: Traiter comme outlier, ne pas extrapoler la hausse

3. **ABSENCE DE SAISONNALITÉ** :
   - Zéro données N-1 → impossibilité de détecter effet saisonnier
   - Produit BIO/Premium agroalimentaire : habituellement sensible à la saisonnalité, MAIS données trop limitées
   - Défaut: saisonnalité = "none"

4. **TENDANCE** :
   - Base stable à 1u (4 commandes / 5)
   - Hausse unique atypique le 2025-09-03
   - Interpretation: Stable avec spike exceptionnel, tendance = "Stable 1u + pic +100%"

5. **DATE DE PRÉDICTION (2025-09-23, mardi)** :
   - Mardi = jour historiquement observé (2025-06-24, 2025-07-08, 2025-08-12)
   - Délai depuis dernière commande: 2025-09-03 → 2025-09-23 = **20 jours**
   - Intervalle observé précédent (2025-08-12 → 2025-09-03) = 22 jours
   - Cohérent avec rythme observé (~20-22j depuis derniers commandements)
   - SIGNIFICATION: Probablement un cycle régulier implicite autour de 20-22j

6. **BASELINE & RECOMMANDATION** :
   - Baseline théorique (hors outlier): 1u (moyenne pondérée des 4 commandes "normales")
   - Spike 2u du 2025-09-03: Trop isolé, pas de confirmation N-1 → ne pas l'intégrer
   - Aucune indication de hausse durable → maintenir 1u
   - Arrondi baseline 1.2 → Conservative estimate compte tenu de la faible visibilité

**CONCLUSION**: Demande stable à 1 unité. Confiance MEDIUM (données limitées, pas de N-1, cycles irréguliers apparents mais bande plausible 20-22j).

</details>


<details>
<summary><strong>5. [KOKO01] KOKO Kombucha original 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pas de pattern hebdomadaire régulier détecté. Intervalles très irréguliers entre commandes: 52 jours (07-23 au 08-12), 50 jours (06-24 au 07-23), 70 jours (08-12 au 09-03). Commandes sporadiques et imprévisibles.
- **Saisonnalité**: none
- **Tendance**: Baisse progressive. Moyenne des 4 derniers mois: 1.5u. Dernière commande (09-03): 3u, mais suivie d'une absence totale pendant 20 jours (pas de commande du 09-03 au 09-23).
- **Outliers détectés**: 3u, 0u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **Problématique critique**: Seules 4 données sur 4 mois avec des intervalles chaotiques (50-70 jours). Aucune régularité détectable. Impossibilité d'identifier un véritable pattern cyclique.

2. **Absence N-1**: Sans données de l'année précédente, impossible de calibrer la saisonnalité septembre. RISQUE ÉLEVÉ de prédiction erronée.

3. **Tendance immédiate**:
   - Historique: 1u → 0u → 2u → 3u (dernière valeur 09-03)
   - Moyenne brute: 1.5u
   - La tendance semble légèrement à la hausse récemment (+50% entre 08-12 et 09-03)
   - MAIS: 20 jours sans commande après le 09-03 suggère une demande très faible ou irrégulière

4. **Jours hors cycle**: Prédiction le 23-09 (mardi). Les 4 commandes connues ont lieu les mardi (2x) et mercredi (2x). Pas de différence significative selon le jour.

5. **Décision finale**:
   - Recommande **2 unités** (arrondi supérieur de la moyenne 1.5, reflétant la légère hausse récente)
   - Confidence très basse en raison du manque criant de données fiables
   - Le client pourrait aussi bien ne rien commander que commander 5u

MISE EN GARDE: Cette prédiction doit être validée par le terrain (contact client, contexte marché, évolution production) car les données insuffisantes rendent tout modèle statistique peu robuste.

</details>


<details>
<summary><strong>6. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 15 à 46 jours (moyenne ~25j). Pas de jour fixe détecté. Mélange de mardis (3), mercredis (2).
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u avec pic exceptionnel à 3u en septembre
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : Historique très fragmenté sur 3 mois avec seulement 5 commandes. Intervalles : 22j (mar→mar), 46j (mar→mer), 15j (mer→mar), 24j (mar→mar). Aucun pattern hebdomadaire ou mensuel régulier détecté.

FILTRAGE OUTLIERS : Le pic de 3u du 03-09 (mercredi) se détache nettement de la baseline ~1u. Bien que sans N-1 pour contexte, cette hausse pourrait indiquer un événement ponctuel (promotion interne, stock faible chez client) plutôt qu'une tendance structurelle.

SYNTHÈSE : 
- Baseline de fond très basse : moyenne simple = (3+1+4+1+1)/5 = 2u, mais si on exclut l'outlier 3u → moyenne = (1+4+1+1)/4 = 1.75u
- Données insuffisantes pour saisonnalité (zéro historique N-1)
- Demande extrêmement volatile (1u à 4u) suggère un client B2B occasionnel ou test de produit
- Date de prédiction (mardi 25-09) suit logiquement le dernier mardi (08-06 + 110j)

DÉCISION : Recommander 2u (arrondi de 1.75u de baseline stable). Cela reflète la demande centrale sans surgonfler sur le pic exceptionnel. La confiance est BASSE en raison de l'insuffisance de données et de l'absence totale de régularité.

</details>


<details>
<summary><strong>7. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irréguler avec tendance aux commandes les mardis et mercredis. Intervalles variables: 22j (mar-mer), 15j (mar-mar), 16j (mar-mar), 17j (mar-mer). Pas de cycle hebdomadaire régulier détecté. Possible trigger de commande lié à seuil de stock critique plutôt qu'à calendrier fixe.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2-2.5u. Le pic isolé de 4u le 2025-07-23 n'est pas confirmé par la suite (retour à 1-3u). Pas de tendance croissante ou décroissante nette.
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: L'historique montre 5 commandes sur ~3 mois (moyenne ~1 commande tous les 18 jours). Les jours varient (mar-mer), sans cycle hebdomadaire fixe. Intervalles: 22j → 15j → 16j → 17j (relativement réguliers autour de 16-17j). Date prédiction = mardi 2025-09-23. Dernier mardi: 2025-08-12 (42 jours avant), ce qui est un écart significatif par rapport au pattern habituel (~16-17j).

DÉTECTION OUTLIERS: Le pic de 4u (2025-07-23) se distingue, mais étant isolé et suivi par des commandes de 1-2u, c'est un événement ponctuel (stock bas, promotion locale, ou test?), pas une nouvelle tendance.

PROFIL DE DEMANDE: Moyenne simple = (3+1+4+1+2)/5 = 2.2u. Moyenne pondérée (poids récent) ≈ 2u. La stabilité est la caractéristique dominante, avec une variabilité faible (σ ≈ 1.3).

SAISONNALITÉ: Aucune donnée N-1 → pas de signal saisonnier exploitable. Le produit (kombucha Raspberry Hibiscus) n'a pas d'historique long-terme pour valider un effet été/hiver.

DÉCISION: En B2B agroalimentaire, face à une demande STABLE mais avec rupture du rythme (+42j depuis dernière commande mardi), la probabilité que le client repasse commande suite à épuisement du dernier lot est modérée. La quantité commande est faible (1-4u) → client petit volume ou test. Baseline stable à ~2u, sans signaux exceptionnels. PRÉDICTION: 2u (légèrement prudent vs. 2.2, cohérent avec pattern mode et récent).

CONFIANCE: MEDIUM. Peu de données (n=5), pas de N-1, pattern jour variable, mais stabilité de volume claire permet écarter sous/sur-estimation grossière.

</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Demandes très espacées (26-56 jours d'intervalle), aucun cycle hebdomadaire ou mensuel régulier détecté. Les trois commandes sont sur trois mardis différents (08/12, 07/08, 09/03) mais sans régularité d'intervalle.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - toutes les commandes enregistrées sont de 1 unité, aucune variation
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - Intervalle 1 (2025-07-08 au 2025-08-12): 35 jours
   - Intervalle 2 (2025-08-12 au 2025-09-03): 22 jours
   - Dernier intervalle (2025-09-03 au 2025-09-23): 20 jours
   - Aucun jour fixe de commande : les trois mardis ne montrent pas de régularité d'intervalle
   - Pas de pattern hebdomadaire (Lun-Ven) ni mensuel récurrent

2. **FILTRAGE OUTLIERS**
   - Toutes les commandes = 1 unité exactement
   - Aucun outlier détecté (pas de pic, pas de creux)
   - Aucune donnée N-1 pour vérifier une saisonnalité
   - Aucun événement promotionnel visible

3. **SAISONNALITÉ**
   - N-1 absent → pas d'analyse saisonnière possible
   - Impact = "none"

4. **SYNTHÈSE & DÉCISION**
   - **Données très limitées** (3 commandes seulement sur 2.5 mois)
   - **Stabilité absolue** : chaque commande = 1 unité
   - **Absence de trend** : pas de hausse (+) ni de baisse (-)
   - **Prédiction prudente** : avec si peu de données, la baseline est simplement la moyenne = 1 unité
   - **Confiance basse** : l'absence de pattern clair et le volume de données minimal rend la prédiction fragile

**QUANTITÉ RECOMMANDÉE: 1 unité**
- Raison: Demande stable et prévisible à 1u, mais confiance très basse en raison du manque de données
- Risque: Si le client rattrape une commande retardée, la vraie demande pourrait être plus élevée (imprévisible avec les données actuelles)

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 4u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 2u
- 2025-07-08 06:30:25: 3u
- 2025-06-24 12:29:05: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 1u
- 2025-07-08 06:30:25: 2u
- 2025-06-24 12:29:05: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 1u
- 2025-08-12 12:02:43: 1u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 2u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 1u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [KOKO01] KOKO Kombucha original 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 2u
- 2025-07-23 08:08:35: 0u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 4u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 4u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 1u
- 2025-08-12 12:02:43: 1u
- 2025-07-08 06:30:25: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (11)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.6u (28j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: -0.7u (-7j restants) → prédit 2u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.2u (-6j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.1u (6j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.3u (-17j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: -0.2u (-19j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:13:33.156Z*
