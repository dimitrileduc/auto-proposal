# Rapport Backtest - Client ÖKORING HANDELS GMBH

## Contexte

- **Client** : ÖKORING HANDELS GMBH (ID: 3812)
- **Commande réelle** : S39594
- **Date commande** : 2025-10-08 06:30:49
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 18,111 input + 6,569 output = 24,680 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (6)

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
| [MF0030] MF Tarti Mangue Curry 250g  | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec majorité le lundi (2 commandes), mardi (2 commandes) et jeudi (1 commande). Intervalle récent de 8 jours (29 sept lun → 7 oct mar), suggérant un rythme hebdomadaire ou bi-hebdomadaire fluctuant
- **Saisonnalité**: none
- **Tendance**: Stable à 16u avec pic exceptionnel du 29/09 (32u = double de la baseline)
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **DONNÉES DISPONIBLES**: 5 commandes seulement sur 3 mois (dataset limité)
   - 2025-09-29 (lun): 32u ← OUTLIER majeur (2x la normale)
   - 2025-08-26 (mar): 16u
   - 2025-08-19 (mar): 16u
   - 2025-08-11 (lun): 16u
   - 2025-08-07 (jeu): 16u

2. **ANALYSE RYTHMIQUE**:
   - 4 commandes à 16u + 1 commande à 32u
   - Jours de commande: lundi (2x), mardi (2x), jeudi (1x) → aucun jour de la semaine privilégié
   - Intervalle du 29 sept au 7 oct = 8 jours → cohérent avec cycle hebdomadaire (~7-8j)
   - Pas de pattern mensuel net (août échelonné, septembre concentré)

3. **DIAGNOSTIC DE L'OUTLIER (32u le 29/09)**:
   - Ampleur: 2x la demande habituelle
   - Contexte: Pas de N-1 pour confirmer saisonnalité fin septembre
   - Hypothèses: Rattrapage après rupture de 22 jours (7 sept→29 sept), promotion, ou augmentation de consommation client
   - Verdict: Événement exceptionnel NON récurrent (4/5 données confirment 16u comme baseline)

4. **SAISONNALITÉ**:
   - Aucune donnée N-1 → impact impossible à mesurer
   - Produit agroalimentaire (Tarti Mangue Curry) = faible saisonnalité probante avec 1 seul cycle

5. **DATE DE PRÉDICTION (07/10/2025 - mardi)**:
   - Historique montre 2 commandes le mardi (26 août et autre) → cohérent
   - Intervalle 29 sept (lun) → 7 oct (mar) = 8 jours = cycle normal
   - Pas d'indice de nouvelle hausse après le pic du 29/09

6. **DÉCISION**:
   - Baseline théorique: 16u (confirmée par 4/5 observations)
   - Le pic du 29/09 (32u) = anomalie, pas new baseline
   - Correction jour du cycle: La prédiction tombe un mardi (comme 2 commandes historiques) → pas de malus
   - Quantité la PLUS PROBABLE: 16u

CONFIANCE MODÉRÉE car:
✓ Pattern répétitif sur 16u (4 données identiques)
✓ Jour de semaine cohérent (mardi = jour historique)
✗ Dataset réduit (5 observations seulement)
✗ Pas de N-1 pour valider saisonnalité
✗ Outlier du 29/09 crée ambiguïté (tendance future ?)

**RECOMMANDATION FINALE: 16u** (baseline stable, peak du 29/09 = incident non-récurrent)

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 24u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec concentration les lundis (3/5 commandes), mais sans cycle strict. Dernière commande: 29 sept (lun). Prédiction: mardi 7 oct - décalage d'1j par rapport au pattern lundi habituel.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive: 48u (N-1 août) → moyenne 20u (3 derniers mois). Tendance à la baisse de -58% sur 1 an.
- **Outliers détectés**: 48u, 32u

**🧠 Raisonnement LLM:**
ANALYSE ÉTAPE PAR ÉTAPE:

1. **ANALYSE RYTHMIQUE**
   - Historique récent (3 mois): 5 commandes en ~80 jours = ~2 commandes/mois
   - Intervalles observés: 20j (7 au 29 oct) → 8j (19 au 27 août) → 4j (11 au 15 août) → 24j (14 juillet au 7 août)
   - Pattern LUNDI dominant: 3 commandes sur 5 récentes tombent lundi (29 sept, 11 août, 14 juil)
   - DATE DE PRÉDICTION: **MARDI 7 octobre** = décalage d'1 jour vs cycle lundi habituel
   - ⚠️ IMPLICATION: Possible effet "rattrapage" si client reporte sa commande lundi normale?

2. **FILTRAGE INTELLIGENT DES OUTLIERS**
   - 48u (28 août N-1): pic isolé, valeur 2.4x la moyenne récente → événement exceptionnel (promotion? client test?)
   - 32u (19 août, 14 juil): quantités hautes, mais récurrentes → plutôt des "pics de saison" été (juillet-août)
   - Core demand: 16u = quantité dominante (3/5 commandes récentes) → **baseline solide**

3. **SAISONNALITÉ**
   - N-1 (août 2024): 48u
   - N (juillet-août-sept 2025): Moyenne 20u (les 32+16+16+16)/4 hors le 48 de N-1)
   - Tendance: **Baisse de ~-58%** sur 1 an → produit en déclin OU client a réduit ses commandes
   - Octobre 2025 vs octobre N-1: Pas de donnée N-1 octubre → saisonnalité faible

4. **SYNTHESIS & DÉCISION**
   - **Tendance dominante**: Baisse nette, avec stabilisation autour de 16u en septembre
   - **Dernier signal** (29 sept): 16u = confirmation du nouveau baseline bas
   - **Décalage de jour** (mardi vs lundi): Peut indiquer un rattrapage possible, mais data insuffisante pour augmenter
   - **Stratégie**: Appliquer le baseline récent (16u) sans surgonflage "au cas où"

**PRÉDICTION FINALE: 16 unités**
- Confidence MEDIUM car: données limitées (5 points), pattern lundi brisé par jour de prédiction (mardi), saisonnalité faible

Justification: Le produit montre une tendance baissière stable à 16u en cette fin septembre. Malgré le décalage de jour (mardi), aucune hausse justifiée. Logique B2B agro: coller à la demande probable plutôt que spéculer.

</details>


<details>
<summary><strong>3. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire, prédominance lundi-mardi, cycle de ~7-10 jours détecté. Dernières 5 commandes: lun (16u), mar (16u), lun (16u), jeu (16u), lun (16u). Prédiction pour mardi 2025-10-07 : cohérent avec pattern mardi (cf. 2025-08-19)
- **Saisonnalité**: weak
- **Tendance**: Stable à 16u. Contrastes N-1 (32u, 48u) vs période récente (16u constant) = baisse structurelle de -50% à -67% par rapport année précédente, mais palier de 16u très régulier depuis 5 commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : Les 5 dernières commandes (3 derniers mois) affichent une régularité remarquable : 16u, 16u, 16u, 16u, 16u. Intervalles détectés : ~8-10 jours entre commandes. Le pattern jour-de-semaine (lun/mar/jeu/lun) suggère un cycle hebdomadaire flexible, sans jour fixe univoque, mais clairement en semaine.

JOUR DE PRÉDICTION : Mardi 2025-10-07 est COHÉRENT avec l'historique. Le client a déjà commandé un mardi (2025-08-19) à 16u, et la majorité des commandes tombent les jours ouvrables (lun-jeu).

FILTRAGE OUTLIERS : Aucun pic ou creux détecté dans la période récente. Les données N-1 (32u, 48u en 2024) constituent des quantités SUPÉRIEURES, mais isolées (seulement 2 points) et anciennes de 12+ mois. Aucun événement exceptionnel (promotion, erreur de saisie) identifié.

SAISONNALITÉ : Impact FAIBLE. Bien qu'une hausse soit observable en août N-1 (32u), la stabilité des 3 derniers mois efface tout signal saisonnier. Pas de récurrence de pic à cette même date en 2025.

DÉCISION FINALE : Moyenne de 16u sur 5 commandes = 16u. La stabilité remarquable, l'absence de trend haussier/baissier dans les 90 jours récents, et la cohérence jour-semaine justifient une prédiction PONCTUELLE et PRÉCISE à 16u. Pas de sur-bufferisation "au cas où" : en B2B agro, la régularité observe prime.

CONFIANCE : HIGH. 5 points de données très homogènes, pattern clair, cohérence jour-semaine, aucune aberration.


</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec tendance à un rythme hebdomadaire/bi-hebdomadaire sur mardi/lundi. La majorité des 5 dernières commandes s'échelonnent sur 7-9 jours d'intervalle, avec une concentration sur mar/lun. Cycle instable sans pattern fixe identifiable (pas de rythme régulier du type 'chaque mardi').
- **Saisonnalité**: none
- **Tendance**: Pic exceptionnel le 26-08 (48u = 3x la demande habituelle), suivi retour à baseline 16u stable. Moyenne hors outlier: 16u avec une hausse de +200% ponctuelle (26-08).
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
**ANALYSE CHAÎNE DE PENSÉE:**

1. **Filtrage outliers** : La commande du 26-08 (48u) représente 3x la demande habituelle, très probablement une promotion ou rattrapage ponctuel. Elle ne reflète pas la demande structurelle.

2. **Pattern récurrent** : 4 commandes à 16u (19-08, 11-08, 07-08, 14-07) indiquent un **baseline stable de 16u**. Pas de saisonnalité N-1 à l'appui (données manquantes).

3. **Rythme hebdomadaire instable** : Les intervalles varient (7 jours 19→26-08, puis 8 jours 11→19-08, puis 4 jours 07→11-08). Aucun jour fixe récurrent (mar/lun/jeu en alternance). Le client ne commande pas à jour régulier.

4. **Contexte prédiction (2025-10-07, mardi)** : 
   - C'est un mardi (jour commun dans l'historique: 26-08, 19-08 sont marди)
   - Délai depuis dernière commande: 5 semaines (26-08 → 07-10) = rattrapage possible
   - MAIS: les 3 commandes précédentes (avant le pic 48u) sont toutes à 16u
   - Si le 26-08 était un rattrapage (48u pour 3 sem), le retour à 16u indique un **cycle 2-3 semaines à 16u/commande**

5. **Décision finale** : 
   - Baseline solide : **16u**
   - Le pic 48u était exceptionnel (isolé, suivi de retour à 16u)
   - Pas d'élément suggérant un nouveau pic (pas de calendrier festif N-1 connu)
   - Confiance moyenne : données limitées (5 points) et irrégularité du rythme

**RECOMMANDATION: 16 unités** (maintien de la demande stable identifiée)

</details>


<details>
<summary><strong>5. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les ~15 jours, pattern alternant lundi/mardi
- **Saisonnalité**: weak
- **Tendance**: Stable à 16u en période récente, pic ponctuel de 32u en août N-1
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **ANALYSE RYTHMIQUE**
   - Historique N-1: 2024-08-28 (mer) 32u, 2024-01-09 (mar) 16u → données très espacées, peu prédictives
   - Période récente (3 derniers mois): 2025-08-26 (mar) 16u, 2025-08-11 (lun) 16u
   - Intervalle entre les 2 dernières commandes: ~15 jours
   - Pattern observé: alternance lundi/mardi, quantité stable à 16u

2. **GESTION DE LA DATE HORS CYCLE**
   - Date de prédiction: 2025-10-07 (mardi) 
   - Dernière commande: 2025-08-26 (mardi)
   - Intervalle théorique: ~42 jours (bien au-delà du cycle 15j identifié)
   - Le client ne commande probablement PAS le 7 octobre (rupture du cycle ~15j)
   - Si commande: alignement sur cycle lundi/mardi → possible, mais tardive

3. **FILTRAGE OUTLIERS**
   - Le pic de 32u en 2024-08-28 = OUTLIER ponctuel (N-1, contexte inconnu)
   - Coefficient d'exception: +100% → non justifié par data récente
   - Demande de base N-1 (2024-01-09): 16u = COHÉRENT avec période récente

4. **SYNTHÈSE SAISONNALITÉ**
   - N-1 août (32u) vs N actuel août (16u): BAISSE -50%
   - Impact saisonnalité: WEAK (données insuffisantes pour confirmer pattern saisonnier)
   - Tendance récente plus fiable: STABLE à 16u

5. **DÉCISION FINALE**
   - Baseline confirmée: 16u (N-1 janvier + période récente)
   - Trend: Stable (aucune hausse/baisse progressive détectée)
   - Aucun coefficient multiplicateur justifié
   - Confiance MEDIUM: données limitées mais signal clair et cohérent

**PRÉDICTION: 16 unités** (demande standard récurrente, sans augmentation)

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières : intervalles entre 12-19 jours (19 jours entre 14-07 et 07-08, 13 jours entre 07-08 et 19-08). Pas de cycle hebdomadaire identifié. Historique très limité (3 données seulement).
- **Saisonnalité**: none
- **Tendance**: Stable à 16u - Toutes les trois commandes récentes sont identiques (16u). Aucune tendance haussière ou baissière observable.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : L'historique montre 3 commandes espacées de manière irrégulière (19j puis 13j), sans pattern hebdomadaire ni mensuel clair identifié. Les jours varient (lundi, jeudi, mardi) et les intervalles ne permettent pas de détecter un cycle fixe.

STABILITÉ DE DEMANDE : Les trois commandes présentes affichent une quantité IDENTIQUE de 16 unités, ce qui indique une demande stable et prévisible pour ce produit (MF Tarti Aubergine 250g).

SAISONNALITÉ : Aucune donnée N-1 disponible pour analyser les effets saisonniers. Impact évalué à "none".

JOUR DE PRÉDICTION (mardi 2025-10-07) : Aucun pattern jour-fixe identifié qui empêcherait une commande ce jour-là. La dernière commande date du 19-08 (79 jours avant), ce qui suggère un cycle long ou des ruptures de commande.

SYNTHÈSE : Face à une demande stable et régulière (16u à chaque fois), la prédiction la plus fiable est le maintien de cette quantité. L'absence de tendance haussière/baissière et l'uniformité des trois données soutiennent cette approche.

CONFIANCE : Medium, car l'historique reste limité (3 points seulement) et les intervalles irréguliers laissent subsister une incertitude sur le vrai cycle de commande du client.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 10:19:21: 32u
- 2025-08-26 09:44:27: 16u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 10:19:21: 16u
- 2025-08-19 07:45:38: 32u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u
- 2025-07-14 07:05:06: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-28 08:31:22: 48u

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>3. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 10:19:21: 16u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u
- 2025-07-14 07:05:06: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-28 08:31:22: 32u
- 2024-01-09 09:56:05: 48u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 09:44:27: 48u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u
- 2025-07-14 07:05:06: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>5. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 09:44:27: 16u
- 2025-08-11 11:36:10: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-28 08:31:22: 32u
- 2024-01-09 09:56:05: 16u

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 07:45:38: 16u
- 2025-08-07 06:30:17: 16u
- 2025-07-14 07:05:06: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

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
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | Stock prédit: 12.0u (21j restants) → prédit 16u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 16 | Stock prédit: 12.8u (27j restants) → prédit 16u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 16 | Stock prédit: -5.9u (-11j restants) → prédit 16u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:10:05.307Z*
