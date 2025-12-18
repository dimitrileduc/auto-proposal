# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S39718
- **Date commande** : 2025-10-14 08:41:27
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 12
- **Tokens**: 28,584 input + 10,826 output = 39,410 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 24.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 19.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 21.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 19.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (8)

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
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 240 | 192 | 48.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3339] CARRE MAYONNAISE ANCIENNE 500ML | 96 | 96 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3343] SIMPL CARRE VOL AU VENT 800 GR | 192 | 96 | 96.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 162 | 108 | 54.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1952] CARRE VIN CIBOULET PET 450 | 98 | 98 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3341] CARRE MAYONNAISE BIO 500ML | 110 | 110 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - LLM: 240u vs Médiane: 192u (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 240u (confidence: medium)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 48u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec tendance Mardi dominant (5 commandes le mardi en 3 mois) + jeudi occasionnel. Pas de cycle fixe strictement régulier. Dernière commande jeudi 2025-10-09 rompt le pattern mardi habituel.
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive sur les 3 derniers mois (+15-20% vs N-1). Moyenne récente 2025: ~211u vs moyenne N-1 sep-oct: ~217u. Volatilité élevée masque la tendance réelle mais dernières commandes oscillent entre 96-384u.
- **Outliers détectés**: 480u, 384u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNÉE:

1️⃣ RYTHME DÉTECTÉ:
- Période récente (3 mois): 5 commandes, 2025-09-16 au 2025-10-09
- Jours dominants: MARDI (4x) + jeudi (1x le 2025-10-09)
- Intervalle moyen: ~7-14 jours
- Date prédiction: LUNDI 2025-10-13 → hors pattern mardi/jeudi habituel

2️⃣ RUPTURE DE CYCLE DÉTECTÉE:
- Dernière commande: jeudi 2025-10-09 (288u) = rupture du pattern mardi
- Normalement: mardi toutes les ~1-2 semaines
- Le lundi 2025-10-13 arrive 4 jours après jeudi → RATTRAPAGE POSSIBLE

3️⃣ FILTRAGE OUTLIERS:
- Pics 480u (2024-09-17) et 384u (2025-09-30): événements promotionnels/exceptionnels
- Outliers détectés: [480, 384]
- Baseline stable autour de 96-192u en commande "normale"

4️⃣ SAISONNALITÉ (N-1):
- Octobre 2024 (N-1): 96u, 288u (moyenne ~192u)
- Septembre 2024 (N-1): 96u, 480u, 192u, 288u (volatile)
- Impact saisonnier FAIBLE (pas de pic d'octobre marqué, volatilité persistante)

5️⃣ TENDANCE RÉCENTE:
- Sept 2025: 96u, 96u (stable bas)
- Oct 2025: 384u → 192u → 288u (hausse modérée)
- Moyenne 3 mois = (192+384+96+96+288)/5 = 211u
- Direction: STABLE-ASCENDANTE +10-15% vs N-1

6️⃣ DÉCISION FINALE:
- Baseline = 192u (commande médiane habituelle sans outlier)
- Contexte: 4 jours après dernière commande (jeudi) → possible petit rattrapage si pattern bascule mardi
- Tendance douce: +10% = 192 × 1.10 = 211u
- Facteur rattrapage (rupture mardi→lundi): +15% = 192 × 1.15 = 220u
- Arrondi intelligent: 240u (multiple de 48 habituel, entre 211-220 avec sécurité modérée)

⚠️ CONFIANCE = MEDIUM:
- Volatilité haute (96-480u)
- Pattern hebdomadaire perturbé (jeudi dernier)
- Pas de cycle ultra-régulier
- Saisonnalité faible mais présente

PRÉDICTION: 240 unités (optimisation mape vs surstock)

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque mardi, cycle hebdomadaire régulier. Dernière commande: jeudi 2025-10-09 (exception horaire). Pattern normal: mardi de chaque semaine.
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 192u avec variations occasionnelles. Moyenne récente 3 derniers mois: 192u. Pas de hausse ou baisse progressive détectée.
- **Outliers détectés**: 576u, 480u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **PATTERN HEBDOMADAIRE CONFIRMÉ**
   - Historique N-1 (juin-août 2024): Forte concentration de commandes le mardi (6 commandes sur 7 jours identifiés)
   - Période récente (sept-oct 2025): Continuite du pattern mardi (2025-10-07, 2025-09-30, 2025-09-23, 2025-09-16)
   - Exception récente: 2025-10-09 (jeudi) = décalage ponctuel, probablement rattrapage avant week-end
   - Prédiction 2025-10-13 (lundi) = jour atypique mais cohérent avec cycle 7j depuis jeudi

2. **DÉTECTION DES OUTLIERS**
   - 576u (2024-07-15) et 480u (2024-07-03): Pics exceptionnels (3x la baseline)
   - Contexte: Juillet = période estivale, promotions saisonnières possibles
   - Décision: Exclure de la baseline (one-shot événementiels)
   - Outliers mineurs acceptables: 288u (2025-09-30) = 1.5x baseline, mais tendance normale

3. **ANALYSE DE TENDANCE**
   - Baseline stable: Les commandes régulières oscillent autour de 192u
   - Moyenne 3 derniers mois: (192 + 96 + 288 + 192 + 192) / 5 = 192u
   - Moyenne 5 dernières commandes hors outliers: 192u
   - PAS de tendance haussière ou baissière progressive
   - Le 288u (30 sept) n'est pas suffisant pour conclure à une hausse structurelle

4. **IMPACT SAISONNALITÉ**
   - Octobre N-1 (2024-10-08, 2024-10-01): 192u et 96u → moyennes normales
   - Pas de pic saisonnier d'automne identifié pour ce produit
   - Impact saisonnalité = FAIBLE

5. **GESTION DU JOUR ATYPIQUE**
   - Lundi au lieu de mardi/mercredi habituel
   - Cependant: 4 jours après dernière commande (jeudi) = rythme cohérent
   - Pas de facteur additionnel justifiant une augmentation

**CONCLUSION**: Demande de fond stable à 192u. Aucun indicateur de hausse. Maintenir la baseline pour minimiser le MAPE (risque de surstockage si gonflage arbitraire). La régularité du pattern mardi + données récentes convergent vers 192u.

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - LLM: 108u vs Médiane: 108u (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: high)
- 📊 **Baseline N-1**: 108u
- 📊 **Médiane**: 108u
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire le mardi - cycle régulier de 7 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 108u - pas de tendance haussière ou baissière détectée
- **Outliers détectés**: 216u, 324u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - Historique récent (3 derniers mois): 5 commandes, TOUTES le mardi
   - Intervalles observés: 11j (26/8→9/9), 14j (9/9→23/9), 7j (23/9→30/9), 7j (30/9→7/10)
   - Pattern dominant: Commande hebdomadaire le mardi (forte régularité)
   - DÉCALAGE: Prédiction pour lundi 2025-10-13, mais cycle naturel place prochaine commande mardi 2025-10-14 (+1 jour)

2. **FILTRAGE DES OUTLIERS**
   - Pic 216u identifié 2x (2024-09-17, 2024-06-25) = événements exceptionnels (promotions, rattrapage)
   - Pic 324u (2024-07-02) = outlier majeur, likely one-shot
   - Période N-1 (oct 2024): 108u → pas de spike saisonnière en octobre
   - Baseline: 108u (commandes régulières non-exceptionnelles)

3. **SAISONNALITÉ & TENDANCE**
   - N-1 octobre: 108u (identique à période récente)
   - Aucune hausse détectée en période récente vs N-1
   - Saisonnalité FAIBLE (pas de variation automne/été)
   - Direction: STABLE

4. **SYNTHÈSE & DÉCISION**
   - Demande extrêmement prévisible et régulière
   - 100% des 5 dernières commandes = 108u
   - Pas de rattrapage anticipé (rythme constant)
   - Pas de facteur saisonnier négatif en octobre N-1
   - **PRÉDICTION: 108u** (quantité baseline confirmée par 5 commandes consécutives identiques)

**RATIONALE FINALE**: Client B2B Carrefour très régulier. Commandes mardis systématiquement. Pas de volatilité. Pas de rupture de tendance. Précision maximale = certitude baseline.

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - LLM: 96u vs Médiane: 96u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: high)
- 📊 **Baseline N-1**: 96u
- 📊 **Médiane**: 96u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire le MARDI - Cycle strict tous les 7 jours depuis début octobre
- **Saisonnalité**: none
- **Tendance**: Stable à 96u avec 1 pic exceptionnel (192u le 29/07)
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ ANALYSE RYTHMIQUE - Pattern détecté:
   • 2025-10-07 (mar.) | 96u
   • 2025-09-30 (mar.) | 96u  
   • 2025-09-16 (mar.) | 96u
   • 2025-09-09 (mar.) | 96u
   → Cycle PARFAITEMENT régulier: Chaque MARDI, sans exception
   → Intervalles: 7j, 14j, 7j, 43j (jusqu'au pic de juillet)
   → La prédiction est pour lundi 2025-10-13 (veille habituelle) mais le pattern reste hebdomadaire

2️⃣ DÉTECTION D'OUTLIERS:
   • 2025-07-29 (mar.) | 192u = EXCEPTIONNEL (2× la baseline)
   • Cet événement est isolé et ancien (>2 mois)
   • Hypothèse: Promotion ponctuelle, rattrapage après rupture, ou commande combinée
   • Ne doit PAS influencer la prédiction car le rythme post-juillet s'est stabilisé à 96u

3️⃣ SAISONNALITÉ:
   • Aucune donnée N-1 disponible → pas de comparaison saisonnière
   • Les 4 dernières commandes (septembre-octobre) sont identiques: 96u
   • Impact saisonnalité: NONE

4️⃣ TENDANCE DIRECTION:
   • Données récentes (4 derniers mardis): STABLE à 96u
   • Pas de hausse progressive observée
   • Pas de baisse progressive observée
   • Tendance: STABLE

5️⃣ SYNTHÈSE & DÉCISION:
   • Régularité extrême (4 commandes identiques de 96u)
   • Pattern très clair et prévisible
   • Absence de volatilité → Confiance HIGH
   → BASELINE = 96u
   → RECOMMENDED = 96u (application du pattern habituel)

⚠️ NOTE SUR LE JOUR: Prédiction demandée pour lundi 2025-10-13, mais le client commande traditionnellement le MARDI. Cette prédiction anticipe potentiellement le mardi 2025-10-14 ou représente une exception. En tout cas, le volume type reste 96u basé sur la régularité observée.

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 96u (100.0%)
- 📉 **Erreur Médiane**: 96u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque mardi, cycle hebdomadaire régulier (7j d'intervalle)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive puis stabilisation : 96u (2025-09-02) → 192u (2025-09-09) → 192u récurrents
- **Outliers détectés**: 96u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1. **RYTHMIQUE OBSERVÉE** :
   - 2025-09-02 (mar.) | 96u
   - 2025-09-09 (mar.) | 192u [+100% → possible rattrapage suite à rupture]
   - 2025-09-23 (mar.) | 192u [stable]
   - 2025-09-30 (mar.) | 192u [stable]
   - 2025-10-07 (mar.) | 192u [stable]
   
   **Pattern identifié** : Cycle HEBDOMADAIRE STRICT chaque MARDI. Aucune exception.

2. **ANALYSE DES OUTLIERS** :
   - Le 96u du 2025-09-02 est clairement une ANOMALIE (raison : rupture/erreur/ajustement initial).
   - L'augmentation à 192u le 2025-09-09 représente la NORMALISATION du rythme.
   - 4 commandes consécutives à 192u confirment la stabilité retrouvée.

3. **SAISONNALITÉ** :
   - Absence totale de données N-1 → impossible de détecter des pics saisonniers (rentrée scolaire, fêtes, etc.).
   - Impact classé comme **WEAK** (précaution).
   - Aucun signal de variation saisonnière visible en N (3 derniers mois stables).

4. **TENDANCE IMMÉDIATE** :
   - **Hausse progressive** (96 → 192) suivi d'une **stabilisation 4 semaines consécutives**.
   - La stabilité à 192u sur 4 semaines = baseline solidifiée.
   - Aucun signal de baisse ou hausse additionnelle.

5. **CONTEXTE CALENDAIRE** :
   - Date de prédiction : 2025-10-13 = LUNDI.
   - Dernière commande : 2025-10-07 = MARDI (dernier mardi).
   - Prochaine commande attendue : ~2025-10-14 = MARDI (cycle +7j).
   - **ANOMALIE À GÉRER** : La demande pour le lundi 13/10 est sortie du cycle normal (jour hors rythme habituel).
   
   → Si la commande est effectivement prévue le lundi 13/10 (hors cycle) : possible **rattrapage ponctuel** OR **changement de jour** → Je maintiens 192u (pattern primordial).

6. **DÉCISION FINALE** :
   - Baseline = 192u (moyenne stabilisée sur 4 semaines).
   - Pas d'outlier à compenser.
   - Pas de tendance à ajuster.
   - **Recommandation : 192 unités** (maximum précision, zéro surcharge).

**CONFIANCE HIGH** : 4 semaines consécutives identiques = pattern extrêmement robuste. Risque MAPE minimal.

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - LLM: 162u vs Médiane: 108u (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 162u (confidence: medium)
- 📊 **Baseline N-1**: 126u
- 📊 **Médiane**: 108u
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 54u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque mardi (cycle hebdomadaire régulier)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive: 108u stable (4 commandes) puis pic à 216u (+100%)
- **Outliers détectés**: 216u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **PATTERN TEMPOREL**:
   - 5 commandes analysées, TOUTES le MARDI (mar.)
   - Intervalles réguliers: ~2 semaines entre chaque
   - Cycle parfaitement hebdomadaire/bihebdomadaire identifié
   - Date de prédiction: 2025-10-13 = LUNDI (jour décalé du cycle habituel)

2. **ANALYSE DES QUANTITÉS**:
   - 4 commandes stables à 108u (26/08, 12/08, 09/09, 23/09)
   - 1 pic récent à 216u (30/09 = +100%)
   - Baseline théorique: 108u (demande stable historique)

3. **DÉTECTION DU PIC - RATTRAPAGE?**:
   - 216u = EXACTEMENT 2 × 108u (doublement parfait)
   - Timing: 30 sep vs 23 sep = 7 jours (cycle normal)
   - Hypothèse: Rattrapage de stock OU commande double (promotionnel?)
   - Classifié comme OUTLIER exceptionnel (promotion/événement spécial)

4. **IMPACT DU DÉCALAGE CALENDAIRE**:
   - Historique: TOUJOURS mardi
   - Date cible: LUNDI 13 oct
   - Client changera-t-il son jour de commande? → INCERTITUDE (+25% à la confiance)
   - Si commande lundi: peut être "anticipation avant mardi", normal marché

5. **SYNTHÈSE TENDANCIELLE**:
   - Tendance baseline: 108u stable (demande de fond régulière)
   - Dernière observation: 216u (récente, mais outlier)
   - Moyenne pondérée (60% baseline + 40% pic): (108 × 0.6) + (216 × 0.4) = 64.8 + 86.4 = 151.2u
   - Arrondi tendance progressive: ~150-165u

6. **PRÉDICTION FINALE**:
   - Baseline conservateur: 108u
   - Ajustement tendance (pic 30/09): +50% de probabilité de hausse maintenue
   - Quantité recommandée: 162u (correspond à 1.5 × 108u = moyenne prudente entre stabilité et hausse)
   - Justification: Capture le potentiel de maintien partiel du pic tout en mitigeant le risque outlier

**Confiance MEDIUM** car:
- ✅ Pattern très régulier (tous les mardis)
- ✅ Données suffisantes (5 points)
- ❌ Pas de N-1 (pas de saisonnalité validable)
- ❌ Décalage jour (lundi vs mardi attendu)
- ❌ Pic récent non expliqué (source inconnue)

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - LLM: 98u vs Médiane: 98u (Réel: 98u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: high)
- 📊 **Baseline N-1**: 98u
- 📊 **Médiane**: 98u
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande régulière chaque mardi (cycle hebdomadaire). Intervalle standard : 14-16 jours entre commandes récentes (mardi au mardi). Aucun pattern mensuel détecté.
- **Saisonnalité**: weak
- **Tendance**: Stable à 98u en régime nominal. Pic exceptionnel 29-07 (392u + 196u) : rattrapage ou commande groupée, isolé en N0. N-1 affiche demande stable sans variation saisonnière marquée à cette période.
- **Outliers détectés**: 392u, 196u, 196u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : Les données montrent un pattern ultra-stable sur 14+ mois. Le client commande régulièrement chaque mardi, avec un volume standard de 98u. Les 5 commandes les plus récentes (2025-07-29 à 2025-09-23) montrent : 98u > 98u > 98u, puis une anomalie ponctuelle le 29 juillet (392u + 196u = 588u groupés, possiblement rattrapage ou promotion). Cette anomalie est isolée et non-récurrente.

FILTRAGE OUTLIERS : Le pic du 29-07 (588u total) est un événement exceptionnel :
- Deux commandes groupées le même jour (192u + 196u)
- Contextuel et non-répété dans la séquence récente (mardi suivants : 98u régulier)
- Ne reflète pas une hausse de tendance structurelle

SAISONNALITÉ : N-1 (octobre 2024) affiche des volumes identiques (98u régulier), sans pic spécifique le 13 octobre. Saisonnalité faible/absente.

TENDANCE : La courbe reste stable à 98u sur 14 mois, avec un baseline très robuste.

DÉCISION : 
- Date prédiction : 2025-10-13 (lundi)
- Jour habituel de commande : mardi (décalage de 1 jour)
- Bien que la commande soit demandée lundi au lieu de mardi, le pattern régulier et l'absence de données lundi dans l'historique suggèrent que soit : (a) la commande arrive mardi comme d'habitude, soit (b) le client anticipe légèrement
- Recommandation : **98u** (baseline nominal, aucune justification pour dévier)

Confiance HAUTE : pattern extrêmement régulier, historique long, variance très faible, saisonnalité absente.

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - LLM: 110u vs Médiane: 110u (Réel: 110u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 110u (confidence: medium)
- 📊 **Baseline N-1**: 110u
- 📊 **Médiane**: 110u
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque Mardi, cycle hebdomadaire régulier (7 jours entre chaque commande)
- **Saisonnalité**: none
- **Tendance**: Stable à 110u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **RHYTHME DÉTECTÉ** :
   - 4 commandes disponibles, toutes sur MARDI
   - Quantités identiques: 110u
   - Intervalles: 22 sept (mar) → 29 sept (mar) = 7j; 29 sept → 22 oct (mar) = 23j → anormal
   - Dernière commande: 23 sept 2025 (mardi) = 20 jours avant la date de prédiction

2. **DÉCALAGE DE JOUR** :
   - Client commande normalement le MARDI
   - Prédiction demandée pour LUNDI 13 oct
   - Ce décalage (-1 jour) peut indiquer: 
     a) Un rattrapage avancé avant le week-end
     b) Une commande avant le cycle habituel
   - Cependant, les données montrent un rythme très stable à 110u

3. **ABSENCE DE SAISONNALITÉ** :
   - Pas de données N-1 → impossible confirmer saisonnalité
   - Données récentes montrent stabilité complète

4. **DÉCISION** :
   - Pattern: Extrêmement régulier (110u chaque mardi)
   - Baseline: 110u
   - Rattrapage lundi: Le client gardera probablement le même volume (110u) même s'il commande un jour plus tôt
   - Confiance MEDIUM: Peu de données, décalage de jour inhaibuel, absence N-1

PRÉDICTION: 110 unités (stabilité du pattern + pas de signal de changement de volume)

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 10:12:05: 288u
- 2025-10-07 09:21:19: 192u
- 2025-09-30 10:39:35: 384u
- 2025-09-23 14:07:32: 96u
- 2025-09-16 12:31:33: 96u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 96u
- 2024-10-01 09:34:05: 288u
- 2024-09-24 07:15:22: 96u
- 2024-09-17 15:18:07: 480u
- 2024-09-12 12:47:26: 192u
- 2024-09-05 07:15:19: 288u
- 2024-08-27 09:32:47: 192u
- 2024-08-20 08:57:46: 192u
- 2024-08-13 08:17:17: 96u
- 2024-06-25 12:51:56: 288u
- 2024-06-25 12:51:20: 288u
- 2024-06-25 12:50:51: 384u

**✅ Quantité LLM**: 240u (confidence: medium)
**📊 Quantité Réelle**: 192u

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 10:12:05: 192u
- 2025-10-07 09:21:19: 96u
- 2025-09-30 10:39:35: 288u
- 2025-09-23 14:07:32: 192u
- 2025-09-16 12:31:33: 192u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 192u
- 2024-10-01 09:34:05: 96u
- 2024-08-20 08:57:46: 192u
- 2024-07-15 10:04:22: 576u
- 2024-07-03 11:51:49: 96u
- 2024-07-03 08:54:55: 480u
- 2024-07-02 08:34:10: 384u
- 2024-06-27 12:35:53: 96u
- 2024-06-25 12:51:56: 192u
- 2024-06-25 12:51:20: 192u
- 2024-06-25 12:50:51: 192u
- 2024-06-25 08:49:38: 192u

**✅ Quantité LLM**: 192u (confidence: high)
**📊 Quantité Réelle**: 192u

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 108u
- 2025-09-30 10:39:35: 108u
- 2025-09-23 14:07:32: 108u
- 2025-09-09 13:17:20: 108u
- 2025-08-26 13:19:30: 108u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 108u
- 2024-10-01 09:34:05: 108u
- 2024-09-24 07:15:22: 108u
- 2024-09-17 15:18:07: 216u
- 2024-09-12 12:47:26: 108u
- 2024-07-03 11:51:49: 108u
- 2024-07-02 08:34:10: 324u
- 2024-06-27 12:35:53: 108u
- 2024-06-25 12:51:56: 108u
- 2024-06-25 12:51:20: 108u
- 2024-06-25 12:50:51: 216u
- 2024-06-25 08:49:38: 108u

**✅ Quantité LLM**: 108u (confidence: high)
**📊 Quantité Réelle**: 108u

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 96u
- 2025-09-30 10:39:35: 96u
- 2025-09-16 12:31:33: 96u
- 2025-09-09 13:17:20: 96u
- 2025-07-29 04:52:34: 192u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 96u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 192u
- 2025-09-30 10:39:35: 192u
- 2025-09-23 14:07:32: 192u
- 2025-09-09 13:17:20: 192u
- 2025-09-02 11:55:00: 96u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 192u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-30 10:39:35: 216u
- 2025-09-23 14:07:32: 108u
- 2025-09-09 13:17:20: 108u
- 2025-08-26 13:19:30: 108u
- 2025-08-12 09:34:57: 108u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 162u (confidence: medium)
**📊 Quantité Réelle**: 108u

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 14:07:32: 98u
- 2025-09-09 13:17:20: 98u
- 2025-08-12 10:12:59: 98u
- 2025-07-29 04:52:34: 392u
- 2025-07-29 04:52:06: 196u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 98u
- 2024-09-24 07:15:22: 98u
- 2024-09-12 12:47:26: 98u
- 2024-09-05 07:15:19: 98u
- 2024-08-27 09:32:47: 98u
- 2024-08-20 08:57:46: 98u
- 2024-08-13 08:17:17: 98u
- 2024-08-06 14:39:19: 98u
- 2024-06-25 12:51:56: 196u
- 2024-06-25 12:51:20: 98u
- 2024-06-25 12:50:51: 98u
- 2024-06-25 08:49:38: 196u

**✅ Quantité LLM**: 98u (confidence: high)
**📊 Quantité Réelle**: 98u

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 14:07:32: 110u
- 2025-07-29 04:52:34: 110u
- 2025-07-29 04:52:06: 110u
- 2025-07-22 14:39:10: 110u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 110u (confidence: medium)
**📊 Quantité Réelle**: 110u

</details>




---

## False Positives (5)

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
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 80 | Stock prédit: 18.2u (1j restants) → prédit 80u mais non commandé |
| [PF3344] SIMPL CARRE CARBONNADES 800 GR PAR 8 | 96 | Stock prédit: 63.4u (9j restants) → prédit 96u mais non commandé |
| [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML | 112 | Stock prédit: -11.9u (-2j restants) → prédit 112u mais non commandé |
| [PF2933] CARRE VIN MIEL MOU PET 450 BIO | 98 | Stock prédit: -319.8u (-51j restants) → prédit 98u mais non commandé |
| [PF2932] CARRE VIN CIBOULET PET 450 BIO | 98 | Stock prédit: -436.5u (-61j restants) → prédit 98u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:11:10.029Z*
