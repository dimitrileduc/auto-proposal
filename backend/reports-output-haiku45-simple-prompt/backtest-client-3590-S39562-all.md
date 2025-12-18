# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S39562
- **Date commande** : 2025-10-06 09:21:48
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 19,241 input + 8,640 output = 27,881 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 37.5% | 8 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

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
| **MAE** | 23.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 26.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (3)

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
| [PF0078] FILOU CHASSEUR 5 L | 180 | 160 | 20.0 | 12.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 132 | 88 | 44.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 18 | 12 | 6.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 180u vs Médiane: 160u (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 180u (confidence: medium)
- 📊 **Baseline N-1**: 190u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 20u (12.5%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes principalement les lundis (lun. N-1: 80, 320, 240u; lun. récent: 240, 160u). Secondairement jeudis et mardis (jeu.: 240u; mar.: 160, 320, 160, 160u). Pas de pattern mensuel strict détecté. Cycles irréguliers: 6j, 10j, 7j, 17j, 19j, 14j, 12j entre commandes récentes.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive: N-1 moyenne 222u vs récent moyenne 184u (-17%). Stabilisation récente autour de 160-240u. Tendance baissière de -8% en septembre 2025.
- **Outliers détectés**: 320u, 320u, 240u

**🧠 Raisonnement LLM:**

ANALYSE CHAIN OF THOUGHT:

1. **ANALYSE RYTHMIQUE** 
   - Historique N-1 (juin-sept 2024): Commandes principalement le LUNDI (80, 320, 240u) avec pics jeudi (240u) et mercredi (320, 320u). Intervalles irréguliers: 4j, 10j, 7j, 12j, 12j, 18j.
   - Période récente (août-sept 2025): Aussi centré sur LUNDI (240u le 29/9, 160u le 15/9) avec jeudi (160u le 11/9) et mardis (160, 160u). Intervalles: 14j, 4j, 27j, 7j.
   - **Observation critique**: Pas de pattern hebdomadaire strict. Commandes irrégulières, apparemment déclenchées par un besoin réel, non prévisible mécaniquement.
   - **Date de prédiction = dimanche 5 oct 2025**: HORS-CYCLE (pas d'historique de dimanche). Client commande généralement lun-jeu. Une prédiction un dimanche suggère un scénario forcé; la commande est probablement destinée à la semaine suivante.

2. **FILTRAGE OUTLIERS**
   - Pics détectés: 320u (mer. 24/07 × 2, jeu. 26/09, mar. 27/08). Promotions ou événements ponctuels?
   - N-1 montre 2 pics consécutifs de 320u le 24/07 (mer.) → possible double commande ou promotion été.
   - Sept 2024: cycle 240u-320u-240u-160u (volatilité moyenne).
   - Sept 2025: stabilisation à 160-240u, pics rares.
   - **Interprétation**: Volatilité N-1 > volatilité récente. Les 320u semblent marginaux (3/17 données = 18%).

3. **ANALYSE TENDANCE**
   - N-1 (12 points, juin-sept 2024): Moyenne brute = 222u (écart-type élevé: 85u).
   - Récent (5 points, août-sept 2025): Moyenne = 184u (écart-type: 40u).
   - **Baisse de -17%** entre N-1 et récent.
   - Tendance septembre 2025: 240u (29/9) → 160u (15/9) → 160u (11/8) → 160u (12/8) = décentrage dans la série. En reordering: 160, 160, 160, 240 = stabilisation autour de 160-240u, légère baisse.
   - **Verdict**: Tendance baissière faible mais structurelle.

4. **SAISONNALITÉ**
   - Septembre N-1: 240+320+240+80 = 880u / 4 commandes = 220u moy.
   - Septembre 2025: 240+160+160 = 560u / 3 commandes = 187u moy.
   - Impact saisonnier septembre: -15% (faible).
   - Pas de pic "fin d'été" en septembre 2025 comparé à N-1.
   - **Impact saisonnier global**: WEAK.

5. **SYNTHÈSE & DÉCISION**
   - Baseline théorique (N-1 médiane excluant outliers extrêmes): 160u × coef tendance baisse (-8%) = 147u (trop conservateur).
   - Alternative: Moyenne pondérée (poids 60% récent, 40% N-1) = 0.6×184 + 0.4×222 = 110 + 89 = 199u.
   - Lissage exponentiel (poids fort derniers 3 mois): (240+160+160)/3 = 187u.
   - **Quantité attendue**: 180-190u.
   
   Choix: **180u** (arrondi par défaut)
   - Reflète tendance baissière (-8% vs N-1).
   - Cohérent avec moyenne récente (184u).
   - Réaliste pour produit B2B agroalimentaire (pas de survente).
   - Confiance MEDIUM: rythme irrégulier, faible nombre de données récentes (5 pts), mais tendance claire.
</reasoning_parameter>
</invoke>

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 132u vs Médiane: 104u (Réel: 88u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 132u (confidence: medium)
- 📊 **Baseline N-1**: 110u
- 📊 **Médiane**: 104u
- ✅ **Réel commandé**: 88u
- 📉 **Erreur LLM**: 44u (50.0%)
- 📉 **Erreur Médiane**: 16u (18.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec tendance multiples jours dans la semaine (lun, mar, jeu, ven). Pas de cycle strict identifié. Intervalle moyen ~15-20j. Récemment: 2025-09-29 (lun)=132u, 2025-09-11 (jeu)=132u, soit ~18j d'intervalle.
- **Saisonnalité**: weak
- **Tendance**: Hausse modérée: passage de 52-104u (3 derniers mois début: juillet-août) à 132u (septembre). Coefficient ~+15% à +27% observé en septembre N-1 vs juillet N-1 (104→156).
- **Outliers détectés**: 18u, 156u, 208u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1️⃣ **RHYTHM & CYCLES**
- 3 derniers mois (N): 2025-07-29 (52u) → 2025-08-19 (104u) → 2025-08-26 (104u) → 2025-09-11 (132u) → 2025-09-29 (132u)
- Intervalle moyens: ~7-18j entre commandes. Pas de jour fixe (mardi, jeudi, lundi observés).
- ANOMALIE: Pas de commande depuis 2025-09-29 (lun). Soit 6 jours avant la prédiction 2025-10-05 (dim). 
- Contexte: Dimanche = hors cycle normal (semaine). **Risque d'absence de commande, OU rattrapage en fin de semaine (vendredi 2025-10-03).**
- Données fournies: Arrêtées au 2025-09-29. Pas de visibilité sur 2025-10-03.

2️⃣ **SAISONNALITÉ ANNÉE N-1**
- Septembre 2024: 2024-09-26 (156u), 2024-09-16 (104u), 2024-09-09 (104u) → Volumes 104-156u
- Juillet-Août 2024: 18-208u (18u = probable erreur/promo; 208u pic exceptionnel Aug 14)
- **Baseline stable = 104u** (cœur de cible répété)
- Septembre N-1 montre une **hausse saisonnière +15 à +50%** vs juillet-août

3️⃣ **TENDANCE RÉCENTE (3 DERNIERS MOIS)**
- Juillet 2025: 52u (baisse vs N-1)
- Août 2025: 104u x2 (aligné N-1)
- **Septembre 2025: 132u x2 (HAUSSE NETTE +27% vs août)**
- Deux commandes consécutives de 132u (11 sept et 29 sept) → **Signal fort de stabilisation à 132u en septembre**

4️⃣ **OUTLIERS**
- 18u (2024-07-24): Probable erreur ou micro-commande urgente
- 156u (2024-09-26 & 2024-07-24): Pic saisonnier septembre OU promo ponctuelle
- 208u (2024-08-14): Exception claire (pic une seule fois) → à ignorer

5️⃣ **INTERPRÉTATION: Prédiction 2025-10-05 (DIMANCHE)**
- Date atypique = dimanche = **hors cycle normal**
- Hypothèse 1: Pas de commande sur dimanche (données système pour forecast, mais client n'achète pas dimanche)
- Hypothèse 2: Données sont des timestamps de confirmation, client commande vendredi 2025-10-03 pour livraison semaine 41
- **Approche adoptée: Prédire comme si c'était un MARDI typique (jour de cycle haut)**

6️⃣ **RECOMMANDATION FINALE**
- Baseline septembre-stable: **132u**
- Raison: Deux commandes consécutives de 132u = pattern stabilisé
- Ajustement saisonnalité: Septembre N-1 montrait pic 156u; N actuel 132u = léger recul (-15%) mais maintien hausse vs été
- **Confiance MEDIUM**: Données limitées (5 points récents), absence de clarté sur rythme exact, date aberrante (dimanche)
- Quantité MAPE-optimale: **132u** (reconnaissance du pattern consolidé septembre 2025) vs 104u (baseline généralist) vs 156u (surdimensionné sans event)

**RÉSUMÉ**: Le client passe de 52-104u (été) à 132u (septembre stable). Absence data post-2025-09-29 limite la certitude, mais deux commandes d'affilée de 132u justifient cette quantité comme plus probable que la baseline 104u.

</details>


<details>
<summary><strong>3. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 18u vs Médiane: 30u (Réel: 12u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: medium)
- 📊 **Baseline N-1**: 7.3u
- 📊 **Médiane**: 30u
- ✅ **Réel commandé**: 12u
- 📉 **Erreur LLM**: 6u (50.0%)
- 📉 **Erreur Médiane**: 18u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Pas de cycle hebdomadaire détecté. Récemment: deux commandes espacées de ~44 jours (29 juillet et 11 septembre 2025). Avant cela, intervalles très variables en N-1 (6 à 90 jours entre commandes).
- **Saisonnalité**: strong
- **Tendance**: Hausse significative +150% - Passage de 4-10u (N-1, moyenne 7.3u) à 20u (N actuel)
- **Outliers détectés**: 20u, 20u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1️⃣ PATTERNS TEMPORELS:
   - N-1 (12 commandes): Intervalles erratiques (6j à 90j), pas de rythme hebdomadaire régulier
   - Quantités N-1: 4-10u, moyenne 7.3u (stable mais variée)
   - N actuel (3 mois): 2 commandes seulement → 20u le 29/07, 20u le 11/09
   - Écart régulier: ~44 jours entre les deux dernières commandes

2️⃣ DÉTECTION SAISONNALITÉ:
   - SEPTEMBRE 2024 (N-1): Pic à 10u (16/09) puis 8u (09/09)
   - SEPTEMBRE 2025 (N actuel): 20u le 11/09 → MÊME PÉRIODE, VOLUME DOUBLÉ
   - Forte probabilité: Sept-Oct cyclique important pour ce produit agroalimentaire
   - Impact: STRONG (régularité à même calendrier N-1 vs N)

3️⃣ TENDANCE IMMÉDIATE:
   - Hausse brutale +150% (7.3u → 20u) entre N-1 et N
   - Confirmée par 2 commandes identiques (20u), suggère nouvelle demande de fond
   - Pas d'indication de pic temporaire (promo) → plausible changement structurel de volume

4️⃣ PRÉDICTION POUR 2025-10-05 (DIMANCHE):
   - Jour: Dimanche (hors cycle standard B2B Lun-Ven)
   - Contexte: Pattern actuel ~44j entre commandes → Prochaine commande attendue ~24 octobre
   - MAIS: Demande mercredi 1er/10 ou jeudi 2/10 possible pour livr. début/mi-octobre
   - Volume: Septembre a montré 20u → Octobre devrait maintenir cette tendance hausse
   - Ajustement: Conserver ~90% du niveau récent (18u) pour éviter surstock, reste conservateur sur saisonnalité

5️⃣ CONFIANCE MODÉRÉE (medium):
   - Peu de données N actuel (2 observations)
   - Pattern temporel irrégulier (pas cycle fixe)
   - Mais: Saisonnalité claire (Sept récurrent) et tendance direction nette (+150%)
   - Risque: Nouvelle demande peut fluctuer avant stabilisation

✅ QUANTITÉ FINALE: 18u (proche de 20u mais légèrement prudent pour minimiser surstock)

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 05:47:52: 240u
- 2025-09-15 12:12:38: 160u
- 2025-09-11 08:10:53: 160u
- 2025-08-19 09:04:50: 160u
- 2025-08-12 09:41:05: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:21:41: 80u
- 2024-09-26 08:50:24: 240u
- 2024-09-16 11:50:49: 320u
- 2024-09-09 11:38:48: 240u
- 2024-08-27 11:41:12: 160u
- 2024-08-27 11:40:22: 320u
- 2024-08-26 08:27:23: 160u
- 2024-08-14 07:59:29: 160u
- 2024-08-12 08:25:02: 160u
- 2024-07-24 07:35:24: 320u
- 2024-07-24 06:06:23: 320u
- 2024-06-24 09:19:20: 320u

**✅ Quantité LLM**: 180u (confidence: medium)
**📊 Quantité Réelle**: 160u

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 05:47:52: 132u
- 2025-09-11 08:10:53: 132u
- 2025-08-26 15:29:17: 104u
- 2025-08-19 09:04:50: 104u
- 2025-07-29 06:11:06: 52u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 08:50:24: 156u
- 2024-09-16 11:50:49: 104u
- 2024-09-09 11:38:48: 104u
- 2024-08-27 11:40:22: 104u
- 2024-08-14 07:59:29: 208u
- 2024-07-24 07:35:24: 18u
- 2024-07-24 06:06:23: 156u
- 2024-06-17 07:40:59: 104u
- 2024-06-06 12:27:23: 104u
- 2024-05-31 06:50:36: 52u
- 2024-05-23 06:43:22: 104u
- 2024-05-06 09:33:16: 104u

**✅ Quantité LLM**: 132u (confidence: medium)
**📊 Quantité Réelle**: 88u

</details>


<details>
<summary><strong>3. [PF3266] JF SAUCE BEARNAISE 3L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 08:10:53: 20u
- 2025-07-29 06:11:06: 20u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 08:50:24: 6u
- 2024-09-16 11:50:49: 10u
- 2024-09-09 11:38:48: 8u
- 2024-08-27 11:40:22: 10u
- 2024-08-14 07:59:29: 8u
- 2024-07-24 07:35:24: 6u
- 2024-07-24 06:06:23: 10u
- 2024-06-17 07:40:59: 6u
- 2024-06-06 12:27:23: 8u
- 2024-05-31 06:50:36: 6u
- 2024-05-23 06:43:22: 4u
- 2024-05-06 09:33:16: 6u

**✅ Quantité LLM**: 18u (confidence: medium)
**📊 Quantité Réelle**: 12u

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
| [PF1140] FILOU SAUCE CHASSEUR 850G | 6 | Stock prédit: 2.3u (6j restants) → prédit 6u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.6u (30j restants) → prédit 1u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 7 | Stock prédit: 1.7u (13j restants) → prédit 7u mais non commandé |
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Stock prédit: -0.6u (-28j restants) → prédit 1u mais non commandé |
| [PF3290] JF MAYO BARAKI 925ML | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |


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
| [PF0084] FILOU CARBONNADES 800 GR | 1 | Stock suffisant: 0.7u (47j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:09:58.743Z*
