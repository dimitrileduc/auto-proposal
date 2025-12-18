# Rapport Backtest - Client Wandercoop

## Contexte

- **Client** : Wandercoop (ID: 60579)
- **Commande réelle** : S39420
- **Date commande** : 2025-10-02 06:12:05
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 33,660 input + 13,130 output = 46,790 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 18 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 71.4% | Score équilibré global |

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
| **wMAPE** | 57.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 64.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec concentration sur mercredis (3 commandes) et vendredis (2 commandes) - Pas de cycle fixe identifié, intervalles variables entre 11 et 47 jours
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u, dernière commande 2025-09-24 (mer.) à 2u - aucune tendance haussière ou baissière détectable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **ANALYSE RYTHMIQUE:**
   - 5 commandes sur ~80 jours (août-septembre 2025)
   - Intervalles: 47j (juil→aug), 11j (aug→sept 3), 26j (sept 3→sept 24)
   - Pas de cycle hebdomadaire strict (mercredi et vendredi mélangés)
   - Pas de cycle mensuel apparent
   - Dernière commande le 2025-09-24 (mercredi) = 7 jours avant la date de prédiction

2. **FILTRAGE OUTLIERS:**
   - Historique compact (1-3u): aucun pic anormal
   - Aucune évidence d'événement exceptionnel
   - Données réelles stables, pas de promotion ou erreur identifiée

3. **SAISONNALITÉ:**
   - Aucune donnée N-1 disponible → pas de comparaison annuelle possible
   - Impact saisonnier = "none" (impossibilité d'évaluer)

4. **TENDANCE:**
   - 5 valeurs: 1, 2, 3, 1, 2 (moyenne = 1.8u)
   - Aucune progression/régression nette
   - Dernière commande (2u) aligne avec la moyenne
   - Stabilité à 1-2 unités

5. **DÉCISION FINALE:**
   - Client commande régulièrement mais sans pattern strict
   - Mercredi 2025-10-01 : jour de semaine privilégié historiquement (3/5 commandes)
   - Quantité attendue = moyenne pondérée avec poids fort sur dernier obs. = 2u
   - Baseline 1.8u arrondie à 2u (cohérent avec récent et moyenne)

**JUSTIFICATION:** Même en l'absence de cycle fixe détectable, la stabilité remarquable (1-3u) et la présence d'une dernière commande à 2u le mercredi précédent justifient une prédiction de 2u pour mercredi prochain. Confiance moyenne due au manque de données N-1 et à l'absence de pattern cyclique strict.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec majorité le mercredi (3/4 commandes). Intervalle récent: 47 jours (24 sept), 26 jours (3 sept), puis 26 jours (8 août). Pattern hebdomadaire possible mais très peu dense en volume.
- **Saisonnalité**: none
- **Tendance**: Stable à faible demande (1-2u dominant), pic à 3u le 08-08 identifié comme outlier, pas de N-1 pour validation saisonnière
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: L'historique montre 4 commandes sur 3 mois avec une forte concentration le mercredi (75% des commandes). Les intervalles (47j, 26j, 26j, ~57j jusqu'à la prédiction) ne révèlent pas de cycle régulier hebdomadaire ou mensuel strict. La demande reste très fragmentée.

FILTRAGE OUTLIERS: La commande de 3u du 08-08 (vendredi) contraste nettement avec le pattern dominant de 1-2u. Elle est identifiée comme événement exceptionnel (promotion, test client, ou commande groupée) et ne doit pas surpondérer la prédiction.

SYNTHÈSE TENDANCIELLE: 
- 3 commandes sur 4 = 2u (mercredi: 24-sept, 03-sept, 16-juil)
- 1 commande = 1u (16-juil mercredi)
- 1 outlier = 3u (08-août vendredi)
- Moyenne pondérée (hors outlier): (2+2+2+1)/4 = 1,75u
- La plus récente commande (24-sept) = 2u confirme le pattern dominant

JOUR DE PRÉDICTION: 01-10 = mercredi (aligned avec 75% du pattern historique), favorable à une reconduction de la demande standard.

CONFIANCE MEDIUM: Insuffisance chronique de données (N-1 absent, densité faible), mais régularité claire sur les 3 derniers mois. La prédiction 2u représente le mode observé et le jour est compatible avec le cycle identifié.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Pas de cycle hebdomadaire établi. Dernières commandes: 24/09 (mer.), 03/09 (mer., +21j), 08/08 (ven., +26j), 18/07 (ven., +21j). Alternance entre mercredi et vendredi sans régularité claire.
- **Saisonnalité**: none
- **Tendance**: Très stable mais extrêmement variable - Demande entre 1 et 2 unités sans tendance directionnelle. La commande du 03/09 (2u) pourrait représenter un achat groupé, le reste étant à 1u. Absence d'acélération ou de baisse structurelle.
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **RYTHME IDENTIFIÉ**:
   - 4 commandes en ~2.5 mois = fréquence très faible
   - Intervalles entre commandes: 21j, 26j, 21j (moyenne: ~23j)
   - Jours alternatifs: Mercredi (24/09), Mercredi (03/09), Vendredi (08/08), Vendredi (18/07)
   - Pas de cycle hebdomadaire strict → Pattern imprévisible

2. **FILTRAGE OUTLIERS**:
   - Commande du 03/09 (2u) = OUTLIER potentiel
   - Justification: Toutes les autres à 1u (3 sur 4)
   - Hypothèse: Achat group é ou besoin exceptionnel, pas pattern récurrent
   - Détection outlier confirmée: 2u isolé dans un ensemble de 1u

3. **SAISONNALITÉ N-1**:
   - Aucune donnée N-1 disponible
   - Pas de référence saisonnière possible
   - Impact saisonnalité = NONE

4. **TENDANCE RÉCENTE**:
   - Donnée la plus fraîche: 24/09 (1u) mercredi
   - Aucune rupture de tendance = stabilité
   - Trend direction = Stable

5. **BASELINE THÉORIQUE**:
   - Filtre les outliers (1u conservé 3 fois, 2u exceptionnel)
   - Baseline robuste = 1u
   - Avec outlier occasionnel: moyenne pondérée = (1+1+1+2)/4 = 1.25u ≈ 1.2u

6. **DÉCISION FINALE**:
   - Données très limitées (N-1 absent, seulement 4 points)
   - Demande ultra-stable autour de 1u
   - Commande la plus récente = 1u (mercredi 24/09)
   - Date prédiction = mercredi 01/10 (même jour semaine que dernière commande)
   - Prédiction = 1u (pattern dominant, exclut outlier)

**CONFIANCE: LOW** - Historique très court, pattern peu structuré, absence totale de N-1, impossibilité de valider la saisonnalité ou d'amortir l'incertitude.

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
- **Pattern temporel**: Commandes irrégulières, principalement le mercredi (2 commandes) et vendredi (2 commandes). Intervalles variables : 47 jours (sept-août), 21 jours (août-juillet), 2 jours (juillet). Pas de cycle hebdomadaire régulier détectable.
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2 unités. Moyenne historique 1.5u, dernière commande 2u (24 sept, 7 jours avant prédiction).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1. **ANALYSE RYTHMIQUE** :
   - 4 commandes en ~3 mois : rythme très irrégulier
   - Jours : 2× mercredi (16 juil, 24 sept), 2× vendredi (18 juil, 8 août)
   - Intervalles : 63j → 21j → 2j → 47j → chaotique
   - Pas de pattern hebdomadaire fixe (ex: pas "chaque vendredi")
   - Pas de cycle mensuel régulier (~30j)
   - ⚠️ Client imprévisible en timing, mais quantités basses et stables

2. **FILTRAGE OUTLIERS** :
   - Aucune donnée N-1 → pas de saisonnalité détectable
   - Toutes les quantités (1u, 1u, 2u, 2u) sont cohérentes, pas de pic exceptionnel
   - Pas de promotion ou événement signalé

3. **SYNTHÈSE & DÉCISION** :
   - **Baseline théorique** : Moyenne = (2+2+1+1)/4 = 1.5u
   - **Tendance récente** : Les 2 dernières commandes = 2u (stable à ce niveau)
   - **Date mercredi (01 oct)** : Correspond aux 2 précédentes commandes mercredi
   - **Effet jour** : Mercredi a parfois 2u (24 sept, 16 juil), parfois 1u
   - **Pas de surcharge prévisible** : Pas N-1 pour octobre

4. **DÉCISION FINALE** :
   - Dernière commande (24 sept) : 2u mercredi
   - Cette commande : 01 oct mercredi
   - Même jour, 7 jours après
   - **Prédiction** : 2u (alignement sur dernier niveau mercredi + stabilité observée)
   - **Confiance medium** : Peu de données, client irrégulier, mais pattern homogène sur quantités

**JUSTIFICATION PRÉCISION (Minimiser MAPE)** :
- Moyenne = 1.5u → risque d'understock (-33% vs 2u)
- Tendance récente = 2u → minimise écart vs dernière commande
- Mercredi historique = moyenne 1.5u, mais derniers mercredi = 2u
- **2u = meilleur compromis** entre conservatisme (1.5) et alignement données récentes (2)


</details>


<details>
<summary><strong>5. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier, principalement mercredi et vendredi - Intervalles variables entre 10 et 48 jours. Dernière commande: 2025-09-24 (mer.), soit 6 jours avant la date de prédiction 2025-10-01 (mer.)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - Toutes les 5 commandes enregistrées sont de 1 unité exactement, aucune variation de volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: L'historique montre 5 commandes sur 3 mois avec un pattern FRAGMENTÉ. Les jours de commande alternent entre mercredi (3 fois: 07-16, 09-03, 09-24) et vendredi (2 fois: 07-18, 08-08). Les intervalles sont très irréguliers (10j, 26j, 48j, 17j, 6j). AUCUN RYTHME HEBDOMADAIRE RÉGULIER détecté.\n\nFILTRAGE OUTLIERS: Pas d'événement exceptionnel identifié. Chaque commande est de 1 unité - volume constant, pas de pic ou baisse. L'absence de données N-1 empêche l'analyse de saisonnalité.\n\nSYNTHÈSE: (1) Le client commande très faiblement (1u par commande). (2) La date prédite (2025-10-01, mercredi) correspond à un jour historiquement actif (mercredi = 3/5 commandes). (3) L'intervalle depuis la dernière commande (09-24) est court (6 jours), ce qui suggère une demande très ponctuelle ou épisodique, sans rattrapage à prévoir. (4) La demande de fond est très stable à 1 unité, avec ZÉRO variabilité sur toute la période.\n\nCONCLUSION: En l'absence de saisonnalité, d'outliers ou de tendance directionnelle, et vu la stabilité absolue des volumes (toujours 1u), le baseline théorique est 1 unité. Le mercredi 2025-10-01 est un jour d'historiquement probable, mais l'intervalle très court (6j) depuis la dernière commande suggère UNE FAIBLE PROBABILITÉ d'une nouvelle commande si tôt. Cependant, le pattern étant imprévisible, on se base sur le volume constant observé.\n\nRECOMMANDATION: 1 unité - confiance MEDIUM car le rythme est très fragmenté et peu régulier, limitant la prédictibilité."

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier bi-hebdomadaire avec concentration sur mercredi/vendredi. Commandes observées: mer. 03/09, ven. 08/08, ven. 18/07, mer. 16/07. Cycles variables entre 17-23 jours.
- **Saisonnalité**: none
- **Tendance**: Stable à 1.5u en moyenne (1u à 2u sur les 4 commandes récentes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE** - Pattern détecté:
   - Dernière commande: 03/09/2025 (mercredi) = 2u
   - Intervalle depuis 03/09 → 01/10 = 28 jours (cycle proche du mensuel)
   - Historique montre alternance mercredi/vendredi sur juillet-septembre
   - OBSERVATION CLÉE: Client commande en moyenne tous les 20-23 jours, avec préférence jour semaine (pas weekend)
   - Pas de pattern jour fixe détecté (ni "chaque jeudi" ni "dernier lundi du mois")

2. **FILTRAGE OUTLIERS**:
   - 4 commandes seulement, toutes entre 1-2u → Pas d'outliers évidents
   - Pas de données N-1 → Impossible détecter pics saisonniers récurrents
   - Quantités cohérentes avec un petit client ou segment de niche (energy bars bio premium)

3. **ANALYSE TENDANCE & SAISONNALITÉ**:
   - Aucune donnée N-1 → seasonality_impact = "none"
   - Données trop limitées pour détecter tendance (hausse/baisse)
   - Moyenne des 4 commandes = (2+2+2+1)/4 = 1.75u
   - Demande apparaît STABLE, oscillant légèrement autour de 1.5-2u

4. **CONTEXTE DATE 01/10/2025 (mercredi)**:
   - Date est un MERCREDI → Cohérent avec historique (2 commandes le mercredi)
   - 28 jours depuis dernière commande → Cycle légèrement supérieur à moyenne
   - Octobre = début automne (potentiel léger regain énergie bar si saisonnalité, mais sans N-1 = spéculation)
   - Pas d'événement identifié (pas de Black Friday, pas de fête)

5. **SYNTHÈSE & DÉCISION**:
   - **Règle en agroalimentaire B2B**: Préférer précision à prudence
   - Baseline = 1.5u (moyenne prudente)
   - Dernière commande = 2u (plus récent = plus pertinent)
   - **Décision**: Recommander **2u** car:
     * Dernière observation = 2u (poids fort sur récent)
     * Mercredi = jour de commande habituel du client
     * Cycle 28j valide cette date
     * Moyenne 1.75u arrondie à 2u
   
   **Confidence = MEDIUM** car:
   - Données très limitées (n=4 seulement)
   - Pas historique N-1 pour valider saisonnalité
   - Pattern hebdomadaire flou (alternance mere/vend sans régularité stricte)
   - Mais demande stable et prévisible minimise risque d'erreur

**PRÉDICTION FINALE: 2 unités** (valeur maximale observée, alignée avec trend stable et contexte date appropriée)

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
- **Pattern temporel**: Commandes irrégulières, intervalles variables: ~26 jours (3 sept - 8 août) et ~23 jours (8 août - 16 juillet). Pas de jour fixe identifié (mercredi, vendredi, mercredi). Pattern non cyclique détecté.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u, demande très faible et régulière sans tendance haussière ou baissière observable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - Historique limité: 3 commandes sur ~2.5 mois (depuis le 16/07/2025)
   - Intervalles: 23 jours (16/07→08/08), puis 26 jours (08/08→03/09)
   - Jours: mercredi (16/07), vendredi (08/08), mercredi (03/09)
   - Observation: Aucun jour fixe, intervalles variables (~23-26j) → Pattern irrégulier, possiblement mensuel vague
   - Date prédiction: 01/10/2025 (mercredi) = 28 jours après dernière commande (03/09)
   - **Rupture potentielle du cycle** mais dans la fourchette observée (~23-26j devient 28j, léger allongement)

2. **FILTRAGE INTELLIGENTS DES OUTLIERS**
   - Toutes les quantités = 1 unité exactement
   - Aucune variation, aucun pic → Pas de promotion ou erreur détectée
   - N-1 inexistante → Pas de saisonnalité confirmée (octobre=pas de référence)
   - Produit: NUTS & BERRIES Bar (produit de niche bio) → Demande B2B structurellement faible et stable

3. **SYNTHÈSE & DÉCISION**
   - **Demande extrêmement régulière**: 3 commandes = 3×1u → Stabilité absolue
   - **Pas de saisonnalité**: Aucune donnée N-1, octobre sans référence historique
   - **Tendance**: Plat à 1u, aucune inflexion
   - **Baseline**: 1 unité (moyenne = médiane = mode observé)
   - **Ajustement jour hors cycle**: Le mercredi (01/10) dans la fourchette mais +2-5j vs moyenne → Pas de rattrapage nécessaire, léger allongement absorbé par volatilité historique

**PRÉDICTION**: Reconduction stricte de la demande historique = 1 unité
**Confiance MEDIUM** (données limitées, pas N-1, mais régularité extrême compense)

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
- **Pattern temporel**: Commandes éparses, non cyclique - Dernière commande 58 jours avant la date de prédiction. Pas de pattern hebdomadaire ou mensuel identifié. Les 3 commandes sont distribuées sur 2.5 mois (09-03, 07-18, 07-16) sans régularité apparente.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - Toutes les commandes de l'historique sont à 1 unité. Aucune variation de volume observée malgré l'écart temporel.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE CHAÎNE DE PENSÉE:**

1. **ANALYSE RYTHMIQUE - Absence de pattern structuré**
   - 3 commandes seulement sur ~2.5 mois
   - Intervalles très irréguliers: 48j (03-07-18), puis 2j (18-16 inversé = impossible, donc 16-18 = 2j en juillet)
   - Aucun pattern hebdomadaire détecté (mercredi, vendredi, mercredi = pas de récurrence)
   - Aucun cycle mensuel identifiable
   - **Conclusion:** Client à faible fréquence de commande, pas prévisible temporellement

2. **FILTRAGE DES OUTLIERS**
   - Toutes les commandes = 1 unité exactement
   - Aucun pic, aucune anomalie volumétrique
   - Volume homogène malgré les délais longs
   - **Conclusion:** Pas d'outlier à écarter

3. **SAISONNALITÉ & CONTEXTE**
   - N-1 inexistant → impossible d'évaluer l'impact saisonnier automnal
   - Produit "energy bar bio" en agroalimentaire B2B: potentiel léger pic automnal (back-to-school, rentrée fitness) mais données insuffisantes
   - Avec seulement 3 points, aucun pattern saisonnier ne peut être confirmé
   - **Impact:** NONE (données insuffisantes)

4. **SYNTHÈSE & DÉCISION**
   - **Baseline théorique:** 1 unité (moyenne = 1u, tous les points = 1u)
   - **Tendance:** Parfaitement stable → pas d'ajustement haussier/baissier
   - **Jour de prédiction (mercredi 2025-10-01):** Coïncide avec 2 commandes passées (03-07-16 mer., 09-03 mer.) → légère indication possible d'un pattern mercredi, mais trop faible (N=2) pour être significatif
   - **Décision finale:** Appliquer le principe "Ockham" = ne pas sur-complexifier. La prédiction la plus probable = 1 unité (100% des commandes antérieures)

**CONFIANCE: LOW**
- Très peu de données historiques (N=3 seulement)
- Pas de pattern temporal clair
- Pas de N-1 pour validation saisonnière
- Volatilité temporelle trop élevée (48j à 2j)
- Recommandation: Rester attentif à tout changement de comportement client

**JUSTIFICATION FINALE:** En l'absence de pattern discernable et avec 100% des commandes historiques à 1u, la prédiction rationnelle est 1u. Mieux vaut rester fidèle aux faits observés que de spéculer sur une saisonnalité non-démontrée.

</details>


<details>
<summary><strong>9. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern très irrégulier - commandes isolées sans cycle établi. Commande mercredi 03/09 (2u), puis 35 jours d'inactivité, puis vendredi 08/08 (1u). Aucun rythme hebdomadaire ou mensuel détectable.
- **Saisonnalité**: none
- **Tendance**: Baisse progressive : 2u → 1u sur les 2 dernières commandes (historique très limité)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
ANALYSE CRITIQUE DE LA PRÉDICTION :

🔴 **PROBLÈME DE DONNÉES MAJEUR** :
- Seulement 2 commandes sur 3 mois (août-septembre 2025)
- Intervalle énorme : 35 jours entre les 2 commandes (03/09 → 08/08)
- Aucune donnée N-1 pour valider saisonnalité
- IMPOSSIBLE d'établir un pattern fiable avec < 3 observations

**ANALYSE RYTHMIQUE** :
- Mercredi 03/09: 2u
- Vendredi 08/08: 1u (35 jours plus tôt)
- Aucun cycle hebdomadaire régulier détectable
- Pas de rythme mensuel (retour attendu ~03/10 si cycle 30j, pas ~01/10)

**DÉTECTION DE TENDANCE** :
- Baisse apparent : 2u → 1u
- ⚠️ Mais: 2 points seulement = statistiquement NON SIGNIFICATIF
- Impossible de distinguer : tendance réelle vs. variation naturelle vs. absence d'appel

**HYPOTHÈSES POSSIBLES** :
1. Client en-dessous du seuil de commande (très basse demande ou stock interne élevé)
2. Produit en phase d'essai/évaluation (faible engagement)
3. Données incomplètes (commandes manquantes dans l'historique)
4. Rupture de pattern : client abandonne ou change fournisseur

**DÉCISION FINALE** :
- Baseline calculée: (2+1)/2 = 1.5u
- Ajustement baisse: -25% → 1.125u
- **Arrondissement conservateur (non surgonflage)**: 2u
  
Justification: Bien que la tendance soit baissière, recommander 1u paraît risqué (potentiel sous-approvisionnement). 2u offre buffer minimal en B2B agro tout en restant réaliste.

**CONFIDENCE TRÈS FAIBLE** : Données insuffisantes pour prédiction fiable. Risque MAPE très élevé.

</details>


<details>
<summary><strong>10. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier détecté - 2 commandes en 12 jours (16/07 mercredi 1u, 18/07 vendredi 2u). Historique trop court pour identifier un cycle hebdomadaire ou mensuel fiable.
- **Saisonnalité**: none
- **Tendance**: Insuffisant de données pour conclure. Observation: légère hausse ponctuelle (1u → 2u) sur 2 commandes récentes, mais échantillon trop réduit pour valider une tendance.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **DONNÉES DISPONIBLES - Très limitées:**
   - Seulement 2 commandes en 3 mois (16/07 et 18/07/2025)
   - Aucune donnée N-1 pour évaluer la saisonnalité
   - Intervalle très court (2 jours) entre les 2 commandes ne représente pas un pattern cyclique

2. **ANALYSE RYTHMIQUE:**
   - 16/07/2025 (mercredi): 1 unité
   - 18/07/2025 (vendredi): 2 unités
   - Intervalle de 2 jours seulement - trop court pour identifier un cycle hebdomadaire classique
   - Absence de commande depuis le 18/07 jusqu'à la date de prédiction (2025-10-01) = 75 jours de silence
   - Cette absence prolongée suggère soit: inactivité du client, rupture de commande, ou changement de fournisseur

3. **TENDANCE OBSERVÉE:**
   - La dernière commande (18/07) était de 2u
   - Petite hausse de 1u → 2u, mais basée sur seulement 2 points
   - Hausse trop marginale et sur historique trop court pour valider une tendance haussière

4. **BASELINE THÉORIQUE:**
   - Moyenne simple: (1 + 2) / 2 = 1.5u
   - Pondération sur dernière commande (plus proche de la date de prédiction): 2u
   - Baseline conservatrice: 1.5u

5. **PRÉDICTION POUR 2025-10-01 (mercredi):**
   - En l'absence de pattern clair et d'historique, privilégier la DERNIÈRE COMMANDE ENREGISTRÉE (2u)
   - Le client ayant commandé 2u en vendredi 18/07, une commande mercredi 01/10 pourrait reprendre à ce niveau
   - Aucun indice de saisonnalité de rentrée (octobre en agroalimentaire peut voir des pics, mais sans N-1, impossible de l'évaluer)

**RECOMMANDATION FINALE: 2 unités**
Justification: Basée sur la dernière quantité observée (2u), seul point de repère fiable avec 75 jours d'intervalle suggérant une reprise de commande à niveau antérieur.

**AVERTISSEMENT CRITIQUE:** Confiance BASSE - Ce dataset est dramatiquement insuffisant pour une prédiction fiable. Il manque:
- Minimum 12-24 semaines de données historiques
- Données N-1 pour saisonnalité
- Clarification du hiatus de 75 jours entre les 2 commandes

En production réelle, recommander au client de valider directement sa prévisionnelle."

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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>10. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-18 10:48:56: 2u
- 2025-07-16 06:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.8u (28j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.7u (17j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.6u (11j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 1.4u (13j restants) → prédit 2u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-18T10:13:56.780Z*
