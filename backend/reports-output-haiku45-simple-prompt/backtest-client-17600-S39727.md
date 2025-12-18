# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S39727
- **Date commande** : 2025-10-14 13:50:03
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 25
- **Tokens**: 57,592 input + 22,309 output = 79,901 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 24 produits prédits, 6 corrects |
| **Rappel** | 85.7% | 7 produits réels, 6 détectés |
| **F1-Score** | 38.7% | Score équilibré global |

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
| **MAE** | 122.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 46.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 17.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 200 | 400 | 200.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 450 | 434 | 16.0 | 3.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 400 | 200 | 200.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 200 | 200 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV356] LV SET 3 X 135G trisauces  SDP | 576 | 256 | 320.0 | 125.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - LLM: 200u vs Médiane: 198u (Réel: 400u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: medium)
- 📊 **Baseline N-1**: 200u
- 📊 **Médiane**: 198u
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 200u (50.0%)
- 📉 **Erreur Médiane**: 202u (50.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - Intervalles de 21 à 29 jours (20/08 → 16/09 : 27j, 16/09 → 08/10 : 22j). Pas de pattern hebdomadaire strict (mercredis + mardi). Possible cycle mensuel ~25-30 jours.
- **Saisonnalité**: none
- **Tendance**: Stable à ~200u (200u + 200u + 196u + 4u fractionné en 2025). Le pic de 4u du 20/08 est une fraction (likely erreur système ou split order).
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE :

1. **RYTHME & FRÉQUENCE**
   - Historique réduit (4 données sur ~2 mois)
   - 20/08 (mer) → 16/09 (mar) : 27 jours
   - 16/09 (mar) → 08/10 (mer) : 22 jours
   - Intervalle moyen ~24-25 jours (quasi-mensuel), pas hebdomadaire
   - Prochaine fenêtre attendue : ~08/10 + 25j ≈ 02-03/11, or prédiction demandée le 13/10 (lundi) = LÉGÈREMENT EN AVANCE

2. **VOLUMES**
   - Les 3 dernières commandes "normales" : 200u, 200u, 196u
   - Ligne de base très stable (~200u)
   - Le 4u du 20/08 est un outlier/fraction (possiblement doublon ou complément) → ignoré dans calcul baseline

3. **SAISONNALITÉ**
   - Aucune donnée N-1 → pas d'analyse saisonnière possible
   - Impact "none" sur ce produit (données insuffisantes)

4. **JOUR DE SEMAINE**
   - Prédiction le lundi 13/10 (hors cycle habituel)
   - Historique montre des jours variés (mer, mar, mer)
   - Le client ne respecte PAS un jour fixe → probablement une commande "opportuniste" ou anticipée

5. **CONCLUSION**
   - Demande de fond : 200u (très régulière)
   - Pas de hausse/baisse de tendance détectable
   - Pas d'effet saisonnier identifié
   - **Recommandation : 200u** (ligne de base maintenue)
   - Confiance MEDIUM car : peu de données (4 points), intervalles légèrement variables (22-27j), pas de N-1 pour validation saisonnière, mais tendance volume très claire (200u stable)

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 350u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes régulières tous les ~30-60 jours, concentrées en mardi/mercredi/jeudi. Pattern récent: mercredi (2025-10-08), jeudi (2025-09-04), mardi (2025-08-19). Cycle semble s'être accéléré (intervalle ~35-45j vs ~60j en N-1)
- **Saisonnalité**: strong
- **Tendance**: Hausse nette +24% (350u en N-1 → 434u en 2025). Rupture de tendance marquée sur les 3 derniers mois
- **Outliers détectés**: 434u, 434u, 434u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1️⃣ **RYTHME IDENTIFIÉ** (Crucial)
   - N-1 (2024): Commandes espacées de ~60-90j, majoritairement le mardi (7 mardis sur 11 commandes)
   - Récent (3 derniers mois 2025): Acceleration → Mercredi 2025-10-08, Jeudi 2025-09-04, Mardi 2025-08-19
   - Intervalle récent: 19j (08-19 à 09-04) + 16j (09-04 à 10-08) = cycle compressé ~35-45j vs ~60j avant
   - Jour prédit: Lundi 2025-10-13 (rupture du pattern mardi) → possible effet rattrapage/réassort

2️⃣ **RUPTURE STRUCTURELLE DÉTECTÉE**
   - N-1 stable: 11 commandes sur 12 à exactement 350u (92% régularité)
   - 2025 (3 derniers mois): 3 commandes consécutives à 434u (stabilité à nouveau niveau)
   - Transition: +84u (+24%) entre 2024 et 2025
   - **Interprétation**: Pas une promotion ponctuelle (3 fois d'affilée), mais nouvelle référence de volume régulier

3️⃣ **SAISONNALITÉ ANALYSÉE**
   - Octobre 2024: 350u (N-1) 
   - Octobre 2025: contexte apéro/automne (Tartin'apero = produit apéritif B2B)
   - Pas de pic saisonnier spécifique en octobre detectable, mais produit apéritif connaît demande stable en automne
   - Impact saisonnier: FORT car confirme une nouvelle plateforme de consommation (+24% stable)

4️⃣ **GESTION DU JOUR NON-STANDARD (LUNDI)**
   - Mardi était le jour modal en N-1
   - Récemment: écart du lundi (dernière fois: N-1) 
   - Lundi 2025-10-13: possible jour de rattrapage hebdomadaire (fin de semaine) ou reporting décalé
   - Risque: Sous-commander → effet rattrapage après
   - Logique: Maintenir le volume nouveau (434u) établi

5️⃣ **BASELINE & PRÉDICTION**
   - Baseline théorique N-1: 350u
   - Coefficient hausse observée: 434/350 = 1.24
   - Dernières 3 données identiques: 434u (stabilité maxima)
   - **DÉCISION**: Recommander 434u (poursuite de la nouvelle tendance)
   - Confiance: HIGH (3 points de données consécutifs identiques + break structurel net)

⚠️ **ALTERNATIVE TESTÉE & REJETÉE**:
   - "Et si c'est un lundi de faible demande?" → Non justifié (historique ne montre pas d'effet jour spécifique négatif)
   - "Surgonfler pour sécurité?" → Non, violate la règle "précision vs prudence"

✅ **CONCLUSION**: 434 unités → Demande de fond confirmée à ce nouveau palier

</details>


<details>
<summary><strong>3. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - LLM: 450u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 450u (confidence: low)
- 📊 **Baseline N-1**: 300u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 16u (3.7%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier détecté - Commandes espacées (49 jours entre 08/20 et 10/08). Pas de cycle hebdomadaire fixe identifiable. Possibilité de commandes événementielles ou à la demande.
- **Saisonnalité**: none
- **Tendance**: Volatile - Une commande majeure de 864u le 20/08, suivi d'une micro-commande (4u - probable erreur de saisie), puis baisse à 434u. Pattern instable sans tendance claire.
- **Outliers détectés**: 864u, 4u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **ANALYSE RYTHMIQUE** 
   - Intervalle 1: 20/08 → 20/08 = 0j (double enregistrement même jour)
   - Intervalle 2: 20/08 → 08/10 = 49 jours (~7 semaines)
   - Aucun pattern hebdomadaire fixe identifiable
   - La prédiction pour un LUNDI (2025-10-13) sort complètement du rythme observé

2. **FILTRAGE OUTLIERS**
   - 864u (20/08): Pic significatif - possible commande préparatoire ou événement (promotion, lancement)
   - 4u (20/08): OUTLIER CLAIR - micro-quantité (erreur de saisie ou échantillon probable)
   - 434u (08/10): Commande "normale" récente, référence plus fiable
   - La valeur 4u doit être EXCLUE du calcul baseline

3. **TENDANCE**
   - Baisse relative: 864u → 434u (-49% sur 49j)
   - Demande de fond estimée: ~434u (dernière commande, la plus robuste)
   - Aucune N-1 = Pas de saisonnalité octobre N-1 à comparer

4. **DÉCISION FINALE**
   - Baseline théorique: ~350-400u (moyenne pondérée excludant outliers)
   - Adjustment pour LUNDI (jour de semaine standard): +5-10% vs mercredi habituel
   - Baseline ajustée: ~400u
   - Conservative margin: +12% pour rattrapage potentiel après ~5j sans commande
   - **RECOMMENDATION: 450u**

5. **LIMITES DE CONFIANCE**
   - Seulement 2 points de données fiables (3 si on compte l'erreur)
   - Aucune donnée N-1 pour saisonnalité
   - Pattern imprévisible, possible commandes à la demande plutôt que cycliques
   - **CONFIANCE: LOW** - Prédiction basée sur données insuffisantes


</details>


<details>
<summary><strong>4. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - LLM: 400u vs Médiane: 500u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 400u (confidence: high)
- 📊 **Baseline N-1**: 400u
- 📊 **Médiane**: 500u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: 300u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande approximativement hebdomadaire (intervalle 5-7 jours), avec prédilection pour les jours milieu/fin de semaine (mar-jeu). Dernière commande: 10 sept (mer.), soit 33j avant la prédiction du 13 oct.
- **Saisonnalité**: weak
- **Tendance**: Stable à 400u en tendance fondamentale. Pic saisonnier octobre N-1: 400u (jeu 10 oct), pas d'anomalie. Hausse temporaire été 2025 (600u le 19 août) suggère une variation mineure, non récurrente.
- **Outliers détectés**: 800u, 600u

**🧠 Raisonnement LLM:**
**ANALYSE DÉTAILLÉE:**

1. **Rythme identifié**: L'historique complet (N-1 + N actuel) révèle un cycle **approximativement hebdomadaire**, avec commandes concentrées entre mardi et jeudi (80% des commandes). Les intervalles varient de 5 à 35 jours, ce dernier étant anormal (33j entre 10 sept et 13 oct).

2. **Contexte octobre N-1**: Le 10 octobre 2024, une commande de 400u a été passée un jeudi. Aucune anomalie saisonnière majeure en octobre (pas de pic festif récurrent). Octobre N-1 = octobre "normal".

3. **Outliers détectés**: 
   - 800u (11 juin) et 600u (19 août) = pics isolés, probablement liés à promotions ou rattrapage stock.
   - Représentent 16% des données → ignorés dans le baseline.

4. **Tendance fondamentale**: Sur 15 commandes, 10 sont à 400u (67%). Baseline = **400u** (demande stable de fond).

5. **Jour de la semaine (lundi vs mid-week)**: Le dernier lundi observé (25 mars N-1) = 200u. MAIS c'était en fin de mois (fin Q1), contexte atypique. Depuis 2024, le client commande 80% du temps entre mar-jeu. Un lundi de début octobre suggère :
   - Soit un changement de rythme mineur (passage à cycle lun-ven) → hypothèse faible car seul dernier lundi connu.
   - Soit un rattrapage après inactivité week-end → ramène à la norme de 400u.

6. **Absence de commande du 10 sept au 13 oct (33j)**: Cela suggère un décalage ou une accumulation de stock. La prochaine commande devrait revenir à l'équilibre : **400u** (not 600u de compensation).

7. **Saison N-1 (octobre 2024 = 400u)**: Aucune saisonnalité forte détectée. Impact faible.

**CONCLUSION**: Baseline = 400u. Pas de raison d'ajustement pour lundi vs jeudi (pattern primaire = mid-week, mais lundi ne contredit pas). Pas de compensation rattrapage (stock stabilisé après 33j). Confiance HAUTE basée sur stabilité récente (2× 400u en septembre N actuel) et cycle répétitif observable.

</details>


<details>
<summary><strong>5. [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml</strong> - LLM: 200u vs Médiane: 200u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: medium)
- 📊 **Baseline N-1**: 200u
- 📊 **Médiane**: 200u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande trimestrielle approx. tous les 90 jours (juin, avril, décembre, octobre). Jour préférentiel: mardi (3 fois sur 4). Intervalle observé: 85-245 jours.
- **Saisonnalité**: weak
- **Tendance**: Stable à 200u - aucune tendance haussière ou baissière détectée sur N-1
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
## ANALYSE CHAÎNE DE PENSÉE

### 1. ANALYSE RYTHMIQUE
**Intervalle entre commandes:**
- 2024-06-11 → 2024-04-02 = -70 jours (problème chronologique: données non ordonnées)
- Réorganisation chronologique: 2023-10-18 → 2023-12-19 (+62j) → 2024-04-02 (+105j) → 2024-06-11 (+70j)
- **Pattern identifié:** Cycle de 60-105 jours (~trimestre), avec forte irrégularité
- **Jour de semaine:** Mardi (3/4), Mercredi (1/4) → préférence mardi confirmée
- **Aucune commande depuis juin 2024** → rupture possible du cycle, ou client inactif

### 2. JOURS DE COMMANDE vs DATE PRÉDITE
- **Date prédite:** 2025-10-13 (lundi) 
- **Pattern client:** Préfère mardi/mercredi
- **Distance à cycle:** 15 mois depuis juin 2024 → anomalie majeure
- Hypothèses: (A) Client dormant depuis 1 an+, (B) Données incomplètes N-1, (C) Changement de fournisseur

### 3. FILTRAGE OUTLIERS
- **Aucun pic exceptionnel détecté** → pas de promotion/erreur logistique identifiée
- **Quantité stable:** Tous les historiques = 200u (100% de régularité)
- **Pas d'outlier à filtrer**

### 4. SAISONNALITÉ
- Octobre 2024 avait besoin (2023-10-18: 200u)
- Pas de pic saisonnier (fruits secs/conserves) visible
- **Seasonality_impact = weak** (absence d'effet visible)

### 5. DÉCISION FINALE
**Contexte problématique:** 
- 15 mois sans commande vs cycle 60-105j habituel = **RUPTURE MAJEURE**
- Lundi prédiction vs mardi-mercredi préférence = changement comportement
- Données insuffisantes sur tendance actuelle N (aucune donnée 2025)

**Approche conservative en agro B2B:**
- Revenir à la **baseline n-1 vérifiée: 200u**
- Pas de surcharge (pas de signal de demande croissante)
- Pas de réduction (quantité historiquement stable)
- **Confidence = MEDIUM** (données très lacunaires, rupture temporelle inexpliquée)

**Hypothèses majeures à valider avec client:**
1. Reprise de commandes après 15 mois?
2. Changement de jour de commande (lundi vs mardi)?
3. Intégration possible d'un nouveau fournisseur?


</details>


<details>
<summary><strong>6. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - LLM: 576u vs Médiane: 512u (Réel: 256u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 576u (confidence: low)
- 📊 **Baseline N-1**: 576u
- 📊 **Médiane**: 512u
- ✅ **Réel commandé**: 256u
- 📉 **Erreur LLM**: 320u (125.0%)
- 📉 **Erreur Médiane**: 256u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - historique fragmentaire. Pattern détecté N-1: commandes en août et octobre (intervalles irréguliers). Pas de cycle hebdomadaire ou mensuel clair identifié.
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 576u (moyenne N-1). Pas de données récentes (3 derniers mois vides) = absence de tendance détectable court terme.
- **Outliers détectés**: 512u, 640u

**🧠 Raisonnement LLM:**
SITUATION CRITIQUE - Historique très limité:

**ÉTAPE 1 - ANALYSE RYTHMIQUE:**
- N-1 montre seulement 2 commandes (2024-10-01 à 512u et 2024-08-07 à 640u)
- Intervalle: ~55 jours entre août et octobre
- AUCUNE commande dans les 3 derniers mois précédant la prédiction
- Date de prédiction: lundi 2025-10-13 (correspond au samedi de semaine N-1 du 01-10 N-1)
- **IMPOSSIBILITÉ d'identifier un pattern saisonnier fiable ou cyclique**

**ÉTAPE 2 - FILTRAGE OUTLIERS:**
- Les 2 points N-1 (512u et 640u) présentent une variation de +25% (640-512)
- Sans contexte de promotion/événement annoncé, considérés comme fluctuation normale
- Aucun pic exceptionnel identifié

**ÉTAPE 3 - SYNTHÈSE:**
- **Saisonnalité:** WEAK (octobre N-1 = 512u, mais données trop rares pour affirmer pattern)
- **Tendance court terme:** INDÉFINIE (aucune donnée récente)
- **Baseline:** Moyenne simple N-1 = (512+640)/2 = **576u**

**JUSTIFICATION DU CHOIX 576u:**
Sans rythme clair ni données récentes, la moyenne N-1 est le seul ancrage objectif. Un rattrapage après 3 mois de silence semblerait contreinuitif en B2B agro (généralement le client recommande avant rupture, sauf vrai rupture de relation).

**⚠️ CONFIANCE: LOW** - Ce produit manque cruellement de données pour une prédiction fiable. Recommandation: Vérifier auprès du client si sa consommation s'est stabilisée à ce niveau ou s'il y a eu changement de fournisseur/volume.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 200u
- 2025-09-16 11:31:53: 200u
- 2025-08-20 10:22:31: 196u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 200u (confidence: medium)
**📊 Quantité Réelle**: 400u

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 434u
- 2025-09-04 09:10:58: 434u
- 2025-08-19 07:26:59: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:46:54: 350u
- 2024-09-11 07:42:30: 350u
- 2024-08-08 07:00:55: 350u
- 2024-08-07 07:54:26: 350u
- 2024-06-11 08:53:39: 350u
- 2024-05-23 09:00:22: 305u
- 2024-04-24 08:56:28: 350u
- 2024-04-02 13:39:05: 350u
- 2024-01-30 09:51:19: 350u
- 2023-12-19 08:25:50: 350u
- 2023-11-07 14:19:04: 350u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 434u
- 2025-08-20 10:22:31: 864u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 450u (confidence: low)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>4. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 09:37:56: 400u
- 2025-09-04 09:10:58: 400u
- 2025-08-19 07:26:59: 600u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-10 12:10:09: 400u
- 2024-09-11 07:42:30: 200u
- 2024-08-08 07:00:55: 200u
- 2024-08-07 07:54:26: 400u
- 2024-06-11 08:46:37: 800u
- 2024-05-23 09:00:22: 400u
- 2024-04-24 08:56:28: 400u
- 2024-04-02 13:39:05: 400u
- 2024-03-25 14:38:30: 200u
- 2024-03-13 08:07:55: 400u
- 2024-01-30 09:51:19: 400u
- 2023-12-19 08:26:46: 400u

**✅ Quantité LLM**: 400u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>


<details>
<summary><strong>5. [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-11 08:46:37: 200u
- 2024-04-02 13:39:05: 200u
- 2023-12-19 08:25:50: 200u
- 2023-10-18 13:56:51: 200u

**✅ Quantité LLM**: 200u (confidence: medium)
**📊 Quantité Réelle**: 200u

</details>


<details>
<summary><strong>6. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:31:17: 512u
- 2024-08-07 07:56:04: 640u

**✅ Quantité LLM**: 576u (confidence: low)
**📊 Quantité Réelle**: 256u

</details>




---

## False Positives (18)

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
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | Stock prédit: 145.8u (10j restants) → prédit 200u mais non commandé |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Stock prédit: 345.1u (25j restants) → prédit 400u mais non commandé |
| [LV313] LV "CLASSIQUE" WECK Sauce COCKTAIL 250ml | 200 | Stock prédit: 170.4u (23j restants) → prédit 200u mais non commandé |
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 220 | Stock prédit: 160.8u (16j restants) → prédit 220u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: 354.3u (17j restants) → prédit 434u mais non commandé |
| [LV358] LV SDP SAUCE BEARNAISE 125G (copie) | 350 | Stock prédit: 175.0u (25j restants) → prédit 350u mais non commandé |
| [LV302] LV BIO Tartin'apero Carotte Gingembre SDP 200 ml  | 392 | Stock prédit: -186.4u (-9j restants) → prédit 392u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -81.5u (-10j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 200 | Stock prédit: -98.0u (-12j restants) → prédit 200u mais non commandé |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Stock prédit: -70.9u (-5j restants) → prédit 434u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 392 | Stock prédit: 141.9u (18j restants) → prédit 392u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 256 | Stock prédit: -125.5u (-12j restants) → prédit 256u mais non commandé |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Stock prédit: -19.8u (-1j restants) → prédit 434u mais non commandé |
| [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie) | 217 | Stock prédit: -4.0u (0j restants) → prédit 217u mais non commandé |
| [LV364] LV SDP SAUCE Cocktail  125ML | 175 | Stock prédit: -4.0u (0j restants) → prédit 175u mais non commandé |
| [LV306] LV BIO Tartin'apero Olives Vertes SDP200 ml  | 350 | Stock prédit: -20.6u (-2j restants) → prédit 350u mais non commandé |
| [LV301] LV BIO Tartin'apero Aubergine SDP 200 ml  | 350 | Stock prédit: 26.9u (8j restants) → prédit 350u mais non commandé |
| [LV327] LV BIO Tartin'apero Toscane SDP 200 ml   | 350 | Stock prédit: 26.9u (8j restants) → prédit 350u mais non commandé |


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
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 350 | Stock suffisant: 421.7u (137j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:11:37.220Z*
