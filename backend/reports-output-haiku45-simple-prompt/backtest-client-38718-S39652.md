# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S39652
- **Date commande** : 2025-10-09 11:32:03
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 36
- **Tokens**: 79,992 input + 27,517 output = 107,509 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.3% | 45 produits prédits, 24 corrects |
| **Rappel** | 96.0% | 25 produits réels, 24 détectés |
| **F1-Score** | 68.6% | Score équilibré global |

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
| **MAE** | 2.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 136.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 237.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 127.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

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

## True Positives (24)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 15 | 1 | 14.0 | 1400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 35 | 1 | 34.0 | 3400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (19 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - Aucun cycle hebdomadaire ou mensuel détecté. Intervalles variables entre commandes (23j en N-1, 43j entre 2025-08-05 et 2025-09-17). Pas de jour préférentiel clair (mer., lun., mar. équitablement distribués). Pattern apparent: demande très sporadique d'un produit de niche (mayonnaise truffes haut de gamme).
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50%: Moyenne N-1 = 4u vs Récent = 2.5u (dernières 2 commandes). Le produit semble être en phase de normalisation après une phase exploratoire ou en déclin de demande.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **RYTHME IDENTIFIÉ**: Aucun pattern cyclique fort. Historique très fragmenté avec 6 commandes sur ~18 mois. Intervalles aléatoires (23j, 60j, 400j+, 30j, 43j). Produit manifestement commandé à la demande et non en abonnement régulier.

2. **SAISONNALITÉ N-1 vs PRÉSENT**: 
   - Août 2024: 4u (21 août)
   - Octobre 2025 = même période calendaire mais sans donnée N-1 directe
   - Impact faible: données N-1 trop fragmentées pour établir un pattern saisonnier robuste

3. **TENDANCE RÉCENTE**:
   - 2025-08-05: 3u (mardi)
   - 2025-09-17: 2u (mercredi) 
   - Baisse de -33% entre les deux dernières commandes
   - Moyenne N-1 (4 commandes): 4.0u
   - Moyenne récente (2 commandes): 2.5u
   - **Indication de baisse structurelle du produit**

4. **JOUR DE PRÉDICTION (Mercredi 2025-10-08)**:
   - Prédiction le mercredi = historique montre des commandes en jour haut pour ce produit (2 occurrences)
   - Pas d'anomalie à corriger

5. **SYNTHÈSE & DÉCISION**:
   - Baseline théorique = **Moyenne pondérée**: 50% poids sur récent (2.5u) + 50% poids sur N-1 (4.0u) = **3.25u → arrondi à 3u**
   - Ou directement: moyenne sur 6 commandes = (4+5+3+4+2+3)/6 = 3.5u → tend vers **3-4u**
   - Tendance baissière incline à **favoriser 3u** plutôt que 4u
   - **Recommandation: 3u** (baisse progressive respectée, prudence face à l'irrégularité)

CONFIANCE: **LOW** - Données trop éparses, pas de cycle identifié, intervalle 43 jours depuis dernière commande (peut indiquer une commande manquée/décalée ou une baisse réelle). La prédiction est une "meilleure estimation" mais l'erreur potentielle est importante (±50% plausible).

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, pas de cycle fixe identifié. Dernière commande: mercredi 2025-09-17 (3 semaines avant la date de prédiction). Historique N-1 très limité (août 2024) sans pattern clair de reconduction.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -67%: de 6u (août N-1) → 4u (août N) → 2u (septembre N). Stabilisation possible autour de 2u en septembre-octobre N.
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1️⃣ RYTHME OBSERVÉ:
   - Aucun pattern cyclique fort identifié (pas de commande hebdomadaire régulière)
   - Dernière commande: 2025-09-17 (mercredi, 3 semaines avant la prédiction du 2025-10-08)
   - Intervalles très variables: ~25j (du 19 août au 17 sept), puis 21j avant prédiction

2️⃣ DONNÉES N-1 (Saisonnalité):
   - 2024-08-21 (mer.): 6u
   - 2024-07-15 (lun.): 4u
   - Le pic à 6u en août N-1 n'a PAS été réconduit en août N (4u observé) → pas de récurrence saisonnière forte
   - Saisonnalité faible pour ce produit

3️⃣ TENDANCE IMMÉDIATE (3 derniers mois):
   - 2025-09-17: 2u (dernière commande)
   - 2025-08-19: 2u (stable)
   - 2025-08-05: 4u
   - Tendance BAISSE -67% observée: 6u → 4u → 2u
   - La demande semble s'être STABILISÉE à 2u depuis août

4️⃣ DÉTECTION OUTLIERS:
   - 6u (août N-1) = pic exceptionnel ou demande antérieure (2 ans de recul insuffisant pour conclure)
   - 4u (août N) = point intermédiaire
   - 2u (août-sept N) = nouvelle baseline émergente

5️⃣ JOUR DE PRÉDICTION (mercredi 2025-10-08):
   - La dernière commande était aussi un mercredi (2025-09-17)
   - Pas d'effet "jours hors cycle" majeur
   - Maintien du rythme mercredi probable

6️⃣ SYNTHÈSE & DÉCISION:
   - Baseline théorique: 2u (derniers patterns) avec possible rattrapage vers 2.5u
   - Tendance forte à la baisse stabilisée → préférer la donnée récente
   - PRÉDICTION: 2 unités (probabilité la PLUS ÉLEVÉE basée sur régularité août-septembre)
   - Confidence MEDIUM: données limitées (4 commandes seulement), pattern court, mais stabilité récente observable

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sur 3 mois récents : 17/09 (mer.), 19/08 (mar.), 05/08 (mar.). Pas de cycle régulier hebdomadaire détecté. Intervalles variables : 23 jours (05/08→19/08), puis 29 jours (19/08→17/09). Tendance vers un cycle ~28-30 jours approximatif en période récente.
- **Saisonnalité**: weak
- **Tendance**: Stable à 2-3u avec légère baisse (3u en août → 2u en septembre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1. **ANALYSE RYTHMIQUE**
   - Historique N-1 (juillet 2024) : 4u (lun 15) et 3u (lun 01) → indique une demande mensuelle avec volumes 3-4u
   - Période récente (3 mois) : Trois commandes seulement (2, 3, 2u)
   - Intervalles détectés : 23j (05/08→19/08) et 29j (19/08→17/09)
   - Pattern : Cycle approximativement mensuel (~28-30 jours), PAS de jour fixe hebdomadaire
   - Dernière commande : 17/09 (mercredi, 2u). Date de prédiction : 08/10 (mercredi) = 21 jours d'écart

2. **RUPTURE POTENTIELLE DE RYTHME**
   - Décalage observé : Les dernières commandes alternent entre mardi (19/08, 05/08) et mercredi (17/09)
   - L'intervalle 17/09→08/10 de 21 jours est PLUS COURT que le cycle précédent (~29j)
   - Cet écart suggère soit : (a) accélération du cycle, (b) rapprochement de la commande

3. **FILTRAGE OUTLIERS**
   - Aucun pic exceptionnel identifié
   - Données N-1 (3-4u) homogènes avec période récente (2-3u)
   - Pas d'événement promotionnel ou d'erreur évidente

4. **SYNTHÈSE DÉCISION**
   - Baseline théorique : Moyenne période récente = (2+3+2)/3 = 2.33u
   - Correction saisonnalité N-1 : N-1 affiche 3-4u (saison juillet) vs octobre (saison automnale potentiellement plus stable)
   - Saisonnalité impact : WEAK (données insuffisantes pour affirmer un pic saisonnier fort en octobre)
   - Tendance actuelle : Baisse douce 3u→2u (possibilité de stabilisation à 2-3u)

5. **DÉCISION FINALE**
   - Étant donné : (a) cycle ~25-30j détecté, (b) demande stable 2-3u, (c) N-1 montre 3-4u
   - Recommandation : **3 unités**
   - Justification : Recommander 3u plutôt que 2u car :
     * Align avec baseline N-1 (3u juillet 2024)
     * Réduit risque de rupture (produit agroalimentaire, marge de sécurité prudente)
     * Cohérent avec cycle détecté (~25-30j depuis dernière commande)
   
**Confidence MEDIUM** : Données limitées (N-1 très restreint, seulement 3 commandes récentes). Pattern détecté est fiable mais volume exact reste incertain (2-3u plausible).

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Commandes espacées de 30-50 jours. Dernière commande en semaine (mer. 17/09), précédente 40 jours avant (mar. 05/08). Pas de cycle hebdomadaire détecté. Client semble fonctionner sur demande irrégulière.
- **Saisonnalité**: weak
- **Tendance**: Stable à 1-2u. N-1 (août/juillet 2024) affichait 2u, récemment 1-2u. Pas de tendance haussière ou baissière nette. Légère stabilisation autour de 1-2 unités.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE :

1️⃣ **RYTHME & CYCLES**
   - Données très éparses (seulement 4 commandes sur ~24 mois)
   - Dernier intervalle : 2025-09-17 → 2025-10-08 = 21 jours
   - Intervalle précédent : 2025-08-05 → 2025-09-17 = 43 jours
   - Pattern N-1 : espacées de ~30 jours (21-07 / 15-07)
   - ⚠️ PAS de cycle hebdomadaire régulier détecté (commandes à différents jours de la semaine)

2️⃣ **SAISONNALITÉ**
   - Octobre 2024 vs 2025 : N-1 affichait 2u (août 2024)
   - Pas de pic saisonnier marqué à cette période
   - Impact saisonnier FAIBLE

3️⃣ **TENDANCE IMMÉDIATE**
   - Dernière commande (17/09) : 1u (minimum)
   - Commande précédente (05/08) : 2u
   - Moyenne 3 derniers mois : 1.5u
   - Aucune accélération = tendance STABLE

4️⃣ **BASELINE & AJUSTEMENTS**
   - Moyenne arithmétique complète : 1.75u → arrondir à 1.5u
   - Baseline théorique : 1.5u (avant ajustements)
   - Ajustement saisonnier faible : +0u à +0.5u
   - Effet « rattrapage » : 21 jours depuis dernière commande = délai normal, pas de rattrapage excepté

5️⃣ **CONCLUSION**
   - Quantité PROBABLE : 1-2 unités
   - Recommandation : **2 unités** (conservative, alignée sur historique N-1, minimise risque rupture)
   - Confiance : MEDIUM (données très limitées, pattern peu fiable)

**Recommandation finale : 2 unités** - Balance entre la stabilité observée (1-2u régulièrement) et la prudence (dernière commande 1u, mais historique montre 2u habituel).

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes très espacées - 2025-08-05 (mardi) puis 2025-09-17 (mercredi), soit ~43 jours d'intervalle. Pas de pattern hebdomadaire clair détecté sur les 2 seules observations disponibles.
- **Saisonnalité**: none
- **Tendance**: Stable à 2u - Les deux seules commandes récentes sont identiques (2u chacune). Aucune tendance haussière ou baissière observable avec si peu de points de données.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - Données ultra-limitées : seulement 2 commandes en 3 mois
   - Intervalle: 2025-08-05 (mardi) → 2025-09-17 (mercredi) = 43 jours
   - Aucun pattern hebdomadaire fiable (un mardi, un mercredi)
   - Aucun pattern mensuel régulier détectable
   - Interprétation: Client "low-frequency" pour ce produit, avec achats sporadiques

2. **ANALYSE QUANTITATIVE**
   - 2025-08-05: 2u
   - 2025-09-17: 2u
   - Demande homogène, aucun pic/creux détecté
   - Pas d'outliers: les 2 quantités sont identiques et probablement représentatives
   - Baseline très stable: 2u par commande

3. **DÉTECTION SAISONNALITÉ & N-1**
   - Aucune donnée N-1 disponible → impossible d'identifier saisonnalité
   - Impact saisonnier: "none" par défaut (pas de preuve)
   - Octobre 2025 (prédiction) vs août/septembre récents: aucun événement saisonnier connu pour sauce aïoli pesto

4. **GESTION DE LA DATE PRÉDICTION**
   - Date demandée: 2025-10-08 (mercredi)
   - Dernière commande: 2025-09-17 (mercredi) = 21 jours avant
   - Aucune indication de rattrapage ou changement de jour
   - Aucune anomalie jour-de-semaine

5. **DÉCISION FINALE**
   - Avec seulement 2 points identiques (2u chacun), la prédiction la plus probable est: **2u**
   - Pas de raison d'augmenter ("au cas où") ni de diminuer
   - Confiance BASSE justifiée: échantillon très petit (n=2), pas de pattern saisonnier, données très parcimonieuses
   - Risque: Client pourrait commander 0, 1, 3+ unités (variabilité inconnue du vrai cycle)

RECOMMANDATION: Commandez 2 unités, avec vigilance sur la vraie fréquence du client qui reste à clarifier.

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, sans cycle hebdomadaire/mensuel identifiable. Dernière commande: 2025-09-17 (mercredi) à 2u. Avant: 2025-08-05 (mardi) à 2u. Intervalles courts (43 jours entre les deux dernières commandes récentes, mais données N-1 très espacées: 116j, 47j, 34j)
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u. Pas de hausse/baisse détectable sur période récente. Historique N-1 montrait aussi des quantités très basses (2-5u) avec une majorité de 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**

## Analyse Détaillée :

### 1. ANALYSE RYTHMIQUE
- **Dernière commande (N-1)**: 2025-09-17 (mercredi) → 2u
- **Commande précédente**: 2025-08-05 (mardi) → 2u
- **Joours de la semaine**: Les 2 dernières commandes sont en milieu/fin de semaine (mardi, mercredi)
- **Intervalles**: 43 jours entre les 2 dernières commandes récentes
- **Historique N-1**: Commandes très étalées dans le temps (juillet, mai, avril, mars), sans pattern hebdomadaire ou mensuel clair

### 2. ABSENCE DE CYCLE DÉTERMINISTE
- ❌ Pas de commande "chaque vendredi"
- ❌ Pas de cycle "30j" visible
- ❌ Les jours varient (lun, mar, mer)
- ⚠️ Données très creuses (6 points seulement en ~18 mois)

### 3. ANALYSE DE LA SAISONNALITÉ
- Dates N-1: juillet (4u), mai (5u), avril (2u), mars (2u)
- Date cible: octobre (2025-10-08)
- octobre N-1: aucune donnée
- Saisonnalité impossible à déterminer avec certitude → **impact "weak"**

### 4. TENDANCE DÉTECTÉE
- **N-1**: Majorité des commandes à 2u (3/4), une outlier à 5u (mai)
- **N (récent)**: Stabilité stricte à 2u (2/2 commandes)
- **Conclusion**: Tendance stable à la baisse comparé à N-1 (5u→2u), mais plateau maintenu à 2u depuis août
- **Direction**: Stable à 2u (pas de croissance ni de chute)

### 5. CHOIX DE LA PRÉDICTION
Pas de raison de dévier de 2u :
- Dernière commande: 2u
- Penultième commande: 2u
- Majorité historique: 2u
- Aucun pattern saisonnier contre-indiquant 2u
- Aucun outlier en octobre N-1 pour justifier une hausse

**Recommandation finale: 2 unités**

### Caveat sur la Confiance
- Confiance **"medium"** et non "high" car:
  - Très peu de données (N=6)
  - Rythme de commande imprévisible
  - Saisonnalité non observable
  - Ce client achète très peu de ce produit → volatilité possible
- Confiance **"medium"** et non "low" car:
  - Signal clair de stabilité à 2u sur les 2 mois récents
  - Pas de facteurs évidents contre 2u

La prédiction reste robuste à 2u, mais avec prudence.


</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - intervalles variables: 45 jours (17 sept au 2 oct implicite), puis 15 jours (2 oct au 17 sept), puis 15 jours (19 août au 5 août = données rétroactives). Pattern hebdomadaire peu clair avec seulement 3 données sur 3 mois.
- **Saisonnalité**: none
- **Tendance**: Hausse progressive: 4u → 5u → 6u (+50% sur 2 mois)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **RYTHME & FRÉQUENCE**: Historique très limité (3 commandes en 3 mois). Les intervalles sont erratiques:
   - 19 août → 5 août: données non-séquentielles (données antérieures)
   - 5 août → 19 août: ~2 semaines
   - 19 août → 17 septembre: ~29 jours
   - 17 septembre → 8 octobre (date prédiction): ~21 jours
   
   Aucun cycle rigide détectable (pas chaque mardi, pas chaque vendredi).

2. **TENDANCE OBSERVÉE**: Hausse progressive et CLAIRE
   - 4u (5 août) → 5u (19 août) → 6u (17 sept)
   - Croissance +25% puis +20% = accélération de la demande

3. **SAISONNALITÉ**: Impossible à évaluer (aucune donnée N-1). Impact = "none".

4. **DÉTECTION D'OUTLIERS**: La dernière commande (6u le 17 sept) s'inscrit dans une tendance logique, pas un pic isolé. C'est le nouvel état du marché. Aucun vrai outlier.

5. **JOUR DE LA SEMAINE**: 
   - Dernière commande: mercredi 17 sept
   - Prédiction: mercredi 8 oct (même jour de la semaine)
   - Intervalle: 21 jours (~3 semaines)
   - Cohérence: Le client pourrait commander à rythme quasi-hebdomadaire (mer-mer).

6. **BASELINE**: Moyenne simple = (4+5+6)/3 = 5u. Moyenne pondérée (poids récent): ~5.5u.

7. **CONCLUSION**: La tendance haussière est nette et régulière. Le dernier niveau (6u) représente le nouvel "état stable". Vu que la prédiction tombe un mercredi (comme la dernière commande), on peut anticiper une continuité.

**RECOMMANDATION FINALE: 6 unités**
- Justification: Poursuite de la tendance haussière (4→5→6)
- Risk: Confiance BASSE faute de données suffisantes (seulement 3 points, pas de cycle clair)
- Logique agro B2B: Commandes récurrentes au même jour → 6u est le nouveau "baseline"


</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - Pas de cycle fixe identifié. Intervalles: ~30 jours (17 sept → 19 août), puis rupture (19 août → 5 août = -15j). Pas de pattern hebdomadaire clair (mer., mar., mar.).
- **Saisonnalité**: none
- **Tendance**: Stable à 2u - Toutes les commandes récentes = 2 unités (aucune hausse/baisse détectée)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ ANALYSE RYTHMIQUE:
   • 3 données seulement sur 3 mois → données limitées, patterns peu fiables
   • Jours: mercredi (17/09), mardi (19/08), mardi (05/08) → pas de jour fixe régulier
   • Intervalles: ~30j puis -15j → rythme irrégulier, pas de cycle stable
   • Pas d'évidence d'un pattern hebdomadaire ou mensuel strict
   • PRÉDICTION: 2025-10-08 est un mercredi (correspond au jour du 17/09 récent)

2️⃣ FILTRAGE OUTLIERS:
   • Aucune valeur exceptionnelle: toutes = 2u
   • Aucune promotion/pic détecté
   • Aucune donnée N-1 pour valider saisonnalité

3️⃣ TENDANCE:
   • Stabilité absolue: 2u | 2u | 2u
   • Aucun signal de croissance/décroissance
   • Baseline = 2 unités

4️⃣ RATTRAPAGE & CONTEXTE:
   • Intervalle 17/09 → 08/10 = 21 jours (ni court ni long pour rattrapage)
   • Client B2B agroalimentaire = régularité attendue, mais données insuffisantes pour confirmer
   • Aucun indicateur d'augmentation de consommation

✅ CONCLUSION:
   En l'absence de tendance claire, saisonnalité identifiable, ou rupture de pattern, la meilleure prédiction est la MOYENNE OBSERVÉE = 2 unités.
   Confiance = MEDIUM (faute de données N-1 et de volatilité temporelle minimale qui rend le pattern peu robuste)."

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.7u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, intervalles variables (43j, 45j, 15j) - Pas de cycle fixe détecté
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1.7u en moyenne, dernière commande 2u (17 sept.)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE** 
   - Intervalle 17 août → 5 août: 43 jours
   - Intervalle 19 août → 5 août: impossible (progression temporelle inversée sur données brutes)
   - Intervalle 17 sept → 19 août: ~45 jours  
   - Intervalle 17 sept → 8 oct: 21 jours (date de prédiction)
   - ⚠️ Rythmique TRÈS IRRÉGULIÈRE: pas de cycle hebdomadaire (lun/mar/mer fixe), pas de cycle mensuel régulier

2. **QUANTITÉS OBSERVÉES**
   - Moyenne: (2 + 1 + 2) / 3 = 1.67u
   - Plage: [1u, 2u] - très compressée, pas d'outliers majeurs
   - Pas de pics exceptionnels ou creux anormaux

3. **INDICATEURS SAISONNIERS**
   - Aucune donnée N-1 disponible → impossibilité d'identifier saisonnalité octobre vs année précédente
   - Impact saisonnier: **NONE** (données insuffisantes)

4. **TENDANCE RÉCENTE**
   - Dernière commande (17 sept): 2u
   - Avant (19 août): 1u  
   - Évolution: +1u (hausse ponctuelle ou retour à baseline 2u ?)
   - Direction: **STABLE** autour de 1.7u, avec dernière observation à 2u

5. **DÉCISION FINALE**
   - Données très limitées (N=3 points) sur 62 jours → CONFIANCE FAIBLE
   - Moyenne historique: 1.67u → arrondi à 2u
   - Dernière commande: 2u (renforce cette prédiction)
   - Pas d'indice d'accélération ou ralentissement
   - **PRÉDICTION: 2 unités** (alignement avec dernière commande + moyenne)

⚠️ LIMITATION: Seul 3 données sur 2 mois = historique très court. Recommandation: collecter 2-3 mois supplémentaires pour affiner pattern réel.

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Commandes espacées entre 15 et 45 jours. Pas de cycle hebdomadaire fixe détecté. Dernière commande: mercredi 17-09-2025 (2u), prédiction aussi sur mercredi (21 jours d'écart).
- **Saisonnalité**: none
- **Tendance**: Stable à ~1.67u en moyenne (historique limité: 2u + 1u + 2u / 3 = 1.67u). Pas de hausse ni baisse significative observable sur 3 mois.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE SUPPLY CHAIN:

1️⃣ OBSERVATION RYTHMIQUE
- Historique très réduit: 3 commandes seulement sur 3 mois
- Intervalles: 45 jours (05-08 → 19-08), puis 29 jours (19-08 → 17-09), puis 21 jours jusqu'à la prédiction (17-09 → 08-10)
- OBSERVATION: Pattern d'accélération légère (45j → 29j → 21j)
- Les commandes ne suivent PAS un cycle hebdomadaire fixe (jours différents: mardi, mardi, mercredi)
- La date de prédiction (mercredi) ne correspond qu'à la dernière commande en termes de jour de la semaine

2️⃣ FILTRAGE OUTLIERS & SAISONNALITÉ
- Quantités très basses (1-2u): aucune donnée N-1 pour détecter pic saisonnier
- Aucune anomalie détectable (promotions, ruptures)
- Impact saisonnier: NONE (pas de données comparables N-1)

3️⃣ TENDANCE & BASELINE
- Moyenne arithmétique: (2 + 1 + 2) / 3 = 1.67u
- Les 3 points sont stables autour de ce niveau
- Dernière commande (plus fiable): 2u

4️⃣ DÉCISION FINALE
- Volume demandé historiquement: 2u (dernière commande = meilleur prédicteur sur données aussi limitées)
- Pas de signal d'augmentation de demande
- Appliquer la règle "précision plutôt que prudence": recommander la valeur OBSERVÉE plutôt que la moyenne
- **Quantité recommandée: 2 unités**

⚠️ CONFIANCE BAS: Seulement 3 points de données, pattern temporel peu clair, pas de saisonnalité identifiable. Une prédiction fiable nécessiterait 6-12 mois d'historique minimum.

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes pour établir un pattern régulier. Historique limité : 2 commandes en ~6 semaines (2025-08-05 et 2025-09-17). Pas de cycle hebdomadaire clair détectable. Intervalle: 43 jours entre les deux commandes.
- **Saisonnalité**: none
- **Tendance**: Stable à 2u - données trop limitées pour déterminer une tendance directionnelle fiable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE :

1. **ANALYSE RYTHMIQUE** :
   - Seulement 2 commandes en 6+ semaines (2025-08-05 mar. → 2025-09-17 mer.) = intervalle de 43 jours
   - Aucun pattern hebdomadaire détectable (pas assez de points de données)
   - Aucun pattern mensuel identifiable
   - Pas de cycle régulier observable

2. **FILTRAGE DES OUTLIERS** :
   - Les deux commandes sont identiques (2u chacune)
   - Pas d'événements exceptionnels identifiés dans l'historique
   - Pas de données N-1 pour comparaison saisonnière

3. **SAISONNALITÉ** :
   - Impact = NONE (absence totale de données historiques N-1)
   - Contexte automnale (octobre) : aucune baseline de référence pour évaluer l'impact

4. **SYNTHÈSE & DÉCISION** :
   - Baseline théorique : 2u (moyenne de l'historique limité)
   - Tendance : STABLE mais TRÈS INCERTAINE (données insuffisantes)
   - Date de prédiction (mercredi 08-10) vs dernier ordre (mercredi 17-09) : délai cohérent de ~21 jours
   - Absence d'indicateurs de variation → maintien du niveau observé

5. **CONCLUSION** :
   - Recommandation : **2 unités**
   - Confiance : LOW (données trop rares et insuffisamment régulières)
   - Risque majeur : ce client a un historique très clairsemé, probablement une consommation faible ou irrégulière
   - Stratégie : Maintenir 2u comme prédiction "probable", mais anticiper une possible rupture de pattern si des données futures révèlent un cycle réel différent

⚠️ NOTE IMPORTANTE : Avec seulement 2 datapoints espacés de 43 jours, cette prédiction est hautement incertaine. Recommander au client/manager d'augmenter la granularité des données (historique plus complet ou suivi sur plusieurs mois) pour affiner le modèle."

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Commandes espacées de 15 à 45 jours (17/09, 19/08, 05/08). Aucun cycle hebdomadaire détecté. Rythme aléatoire ou événementiel.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u. Dernière commande 17/09 = 2u (quantité maximale observée, confirmée par 05/08 = 2u). Pas d'accélération ou décélération significative.
- **Outliers détectés**: 2u, 2u, 1u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : Historique extrêmement réduit (3 commandes seulement sur 45 jours) et espacement irrégulier (45j → 15j → 14j) → pas de cycle fiable détectable. Aucun pattern hébdomadaire ou mensuel identifié.

DONNÉES DISPONIBLES : 
- 17/09/2025 (mer.) : 2u → RÉCENTE (21 jours avant prédiction)
- 19/08/2025 (mar.) : 1u → ancienne
- 05/08/2025 (mar.) : 2u → ancienne

Baseline calculée : (2+1+2)/3 = 1.67u

DÉCISION PRÉDICTIVE : 
En l'absence de pattern temporel clair et avec un historique très limité, je m'appuie sur la RÉCENCE (25% du délai depuis dernière commande). La dernière commande 17/09 = 2u est le signal le plus fiable. Les deux autres instances où 2u a été commandé (05/08) confirment une stabilité à ce niveau.

PRÉDICTION = 2 UNITS (arrondi de 1.67 + confirmation dernière commande)

CONFIANCE LIMITÉE À MEDIUM : données insuffisantes pour construire un modèle robuste. Un seul mois d'historique contre 21 jours d'intervalle crée une sous-détermination statistique. Le client pourrait commander à l'improviste ou suivre un cycle interne non visible.

RISQUE MITIGATION : Cette prédiction minimise le MAPE en restant proche de la moyenne historique tout en donnant du poids à la dernière observation (recency bias maîtrisé).

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier sur données limitées - Commandes espacées de 15j en moyenne (17 sept → 19 août = 29j, 19 août → 5 août = 14j). Aucun cycle hebdomadaire fixe détecté. Dernière commande le mercredi 17 sept, date de prédiction également mercredi (même jour de semaine, intervalle 21j).
- **Saisonnalité**: none
- **Tendance**: Stable à 1.67 u/mois en moyenne (5u sur 3 mois). Dernière commande: 2u (17 sept), précédentes: 1u et 2u. Pas de hausse ou baisse progressive identifiée - volatilité naturelle autour de la baseline.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE SUPPLY CHAIN:

📊 **Contexte données**: Seulement 3 commandes sur 3 mois → historique limité, d'où confiance 'medium' plutôt que 'high'. Pas de données N-1 exploitable pour saisonnalité.

🔄 **Rythme identifié**: 
- 5 sept-17 à 19 août = 14 jours
- 19 août à 17 sept = 29 jours
- Intervalle moyen: ~21 jours
- Dernière commande: mercredi 17 sept | Prédiction: mercredi 08 oct (21 jours exact)
→ L'alignment jour/intervalle suggère rattrapage possible (même jour de semaine après intervalle type)

📈 **Baseline de consommation**: 
- Total 3 mois: 5 unités (2+1+2)
- Moyenne: 1.67 u/mois ou ~0.38 u/semaine
- Tendance: STABLE (pas de hausse/baisse progressive)

🎯 **Recommandation logique**:
La dernière commande était 2u (17 sept). Aujourd'hui (08 oct), après 21j:
- Baseline prévue: 1.67u (moyenne annualisée)
- Dernière réelle: 2u (trend actuel)
- Pas d'outlier détecté ni de saisonnalité forte
→ **Préconiser 2u** (aligné sur dernière commande, cohérent avec stabilité observée)

Ce choix minimise le MAPE en privilégiant la donnée la PLUS RÉCENTE dans un contexte de demande stable, tout en restant ancré à la baseline moyenne.

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données extrêmement limitées - Cycle indéterminé. Dernière commande: 2025-09-17 (mercredi) à 1u. Commande antérieure: 2025-08-05 (mardi) à 2u. Intervalle: 43 jours. Aucun pattern hebdomadaire ou mensuel stable identifiable.
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -50% (de 2u à 1u sur les 2 dernières commandes). Mais données insuffisantes pour confirmer une vraie tendance.
- **Outliers détectés**: 2u, 1u

**🧠 Raisonnement LLM:**
CONTEXTE CRITIQUE: Seules 2 commandes en 3 mois (43 jours d'intervalle) - données EXTRÊMEMENT LIMITÉES pour construire un modèle prédictif fiable.

ANALYSE DÉTAILLÉE:

1. **RYTHME IDENTIFIÉ**: 
   - 2025-08-05 (mardi): 2u
   - 2025-09-17 (mercredi): 1u
   - Intervalle: 43 jours (pas de cycle hebdomadaire régulier visible)
   - Pas de pattern jour-fixe apparent

2. **SAISONNALITÉ**:
   - Aucune donnée N-1 disponible
   - Impact saisonnier non évaluable → "none"

3. **TENDANCE OBSERVÉE**:
   - Baisse: 2u → 1u (-50%)
   - BUT: Avec seulement 2 points, impossible de distinguer une tendance réelle d'une variation aléatoire ou d'un one-shot

4. **CONTEXTE PRODUIT (Citron-Framboise 275ml)**:
   - Boisson B2B agroalimentaire
   - Volumes très faibles (1-2u) → peut indiquer: client occasionnel, test produit, ou petit distributeur
   - Risque élevé d'irrégularité

5. **DÉCISION FINALE**:
   - Baseline théorique: (2 + 1) / 2 = 1.5u
   - Pondération: Dernière commande (1u) observée le 2025-09-17
   - Jour de prédiction (2025-10-08 = mercredi) ≈ 21 jours après dernière commande
   - Tendance baissière + données insuffisantes → **Recommandation: 1 unité**
   
   Cette quantité est conservatrice et alignée sur la dernière observation. Risque de rupture modéré mais minimisation du surstock.

**CONFIANCE: LOW** - Insuffisance de données pour un modèle robuste. À révaluer après 5-6 commandes consécutives.

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern insuffisamment clair - 2 commandes en 43 jours (2025-08-05 mardi + 2025-09-17 mercredi). Aucun cycle hebdomadaire ou mensuel établi. Impossibilité de déterminer un rythme fiable.
- **Saisonnalité**: none
- **Tendance**: Stable à 2-3u (données trop limitées pour établir une tendance significative). Dernière commande: 3u le 2025-09-17.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**SITUATION CRITIQUE - DONNÉES INSUFFISANTES**

1. **Analyse Rythmique:**
   - Seules 2 commandes disponibles en 3 mois (43 jours entre commandes)
   - 2025-08-05 (mardi): 2u → 2025-09-17 (mercredi): 3u
   - Intervalles hétérogènes → impossible de confirmer un cycle fiable
   - Pas de pattern hebdomadaire ou mensuel décelable

2. **Absence Totale de N-1:**
   - Aucune donnée historique année précédente
   - Impossibilité d'analyser la saisonnalité
   - Impact saisonnier octobre: INCONNU

3. **Tendance Observée:**
   - Légère hausse: 2u → 3u (micro-échantillon)
   - Cette hausse peut être un artefact statistique, pas une tendance réelle
   - Stabilité autour de 2-3u plus probable

4. **Déduction Finale:**
   - Baseline théorique: 2.5u (moyenne des 2 commandes)
   - Dernière commande récente (3u) + léger optimisme tendance = arrondi à 3u
   - **CONFIANCE: FAIBLE** - Risque MAPE élevé avec si peu de données

**Recommandation: 3 unités** (prudence minimale, basée sur dernière commande)
⚠️ Prévoir une révision urgent si vous avez accès à l'historique complet N-1 ou à des données mensuelles antérieures.</reasoning>
</invoke>

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - une seule commande observée le 2025-08-05 (mardi). Impossible de détecter un cycle hebdomadaire ou mensuel fiable. La date de prédiction est un mercredi (2025-10-08), soit 64 jours plus tard.
- **Saisonnalité**: none
- **Tendance**: Indéterminé - seul un point de donnée (2u le 05-08). Pas de tendance mesurable sur 3 mois. Pas de données N-1 pour évaluer la saisonnalité automne.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
🔴 SITUATION CRITIQUE - Données extrêmement limitées :

**Analyse Chaîne de Pensée :**

1️⃣ **ANALYSE RYTHMIQUE** 
   - Une SEULE commande sur 3 mois (05-08 à 2u) → Impossible détecter pattern
   - Mercredi 08-10 vs Mardi 05-08 → Jour différent, délai de 64j
   - Risque critique : Client peut-il être en rupture depuis 2 mois ? Ou commandes d'autres origines ?

2️⃣ **ABSENCE DE BASELINE**
   - Pas de données N-1 → Pas de référence saisonnière
   - Pas de pattern discernable → Pas de cycle à extrapoler
   - Seul indicateur : dernier commande = 2u

3️⃣ **DÉCISION EN CONTEXTE LOW-DATA**
   - Maintenir la dernière quantité observée = Approche prudente par défaut
   - Alternative risquée : Dégonfler (1u) → Risque rupture si demande latente
   - Alternative conservatrice : Augmenter (3-4u) → Pas justifié, aucun signal haussier

**⚠️ RECOMMANDATIONS COMPLÉMENTAIRES :**
- **Action urgente** : Obtenir l'historique COMPLET (avant 05-08, N-1 complète)
- **Vérification** : Client actif ? Aucune autre commande depuis 2 mois = anomalie ?
- **Ajustement post-commande** : Demander feedback après cette prédiction pour calibrer modèle

**PRÉDICTION FINALE : 2 unités** (reproduction conservative de dernière quantité, confiance très faible)"

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données extrêmement limitées - Une seule commande observée le 2025-08-05 (mardi) avec quantité 2u. Impossible de déterminer un cycle régulier (hebdomadaire, mensuel ou autre). L'intervalle jusqu'à la date de prédiction (2025-10-08, mercredi) est de 64 jours, ce qui suggère soit une très basse fréquence de commande, soit des données historiques incomplètes.
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - données insuffisantes (N=1 observation). Aucune tendance observable avec un seul point de donnée.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**

ANALYSE CHAÎNE DE PENSÉE :

1. **CONTEXTE CRITIQUE - Données Insuffisantes**
   - Historique disponible : 1 seule commande (2025-08-05, mardi, 2u)
   - N-1 : Aucune donnée saisonnière
   - Période récente (3 derniers mois) : 1 unique observation
   - Écart jusqu'à prédiction : 64 jours
   
2. **ANALYSE RYTHMIQUE**
   - Impossible de détecter un pattern répétitif (jour fixe, cycle mensuel, etc.)
   - Avec un seul point, on ne peut ni valider une régularité, ni détecter un rattrapage
   - Hypothèse 1 : Produit à très faible fréquence de commande (commande opportuniste)
   - Hypothèse 2 : Données historiques amputées ou client nouveau
   
3. **DÉTECTION D'OUTLIERS**
   - La seule valeur (2u) pourrait être baseline ou exceptionnel - impossible à trancher
   - Aucun comparatif pour identifier une anomalie
   
4. **SYNTHÈSE & DÉCISION**
   - En l'absence de pattern, de saisonnalité et de tendance, la seule information fiable est la dernière commande observée (2u)
   - Stratégie conservative : Répliquer la dernière quantité connue
   - Recommandation : **2 unités** (réplication de la commande connue)
   - Confiance : **LOW** - cette prédiction est hautement incertaine et dépend fortement de données manquantes

⚠️ RECOMMANDATIONS OPÉRATIONNELLES :
- Collecter davantage d'historique (6-12 mois minimum recommandés)
- Valider auprès du client les patterns de commande réels
- Monitorer les volumes post-commande pour affiner la prédiction future
- Considérer des variables qualitatives (saisonnalité du citron, campagnes marketing bio) si disponibles


</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 15u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 15u (confidence: low)
- 📊 **Baseline N-1**: 15u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 14u (1400.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern inconnu - Aucune donnée historique disponible
- **Saisonnalité**: none
- **Tendance**: Indéterminé - Pas de base de comparaison
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
SITUATION CRITIQUE: Absence totale de données historiques (N-1 vide, 3 derniers mois vides). Impossible d'identifier les patterns de commande, la saisonnalité, la tendance ou le jour de cycle habituel pour ce produit [JOY08] Organic Raspberry Jam 370g.

APPROCHE PAR DÉFAUT (Heuristique minimisant le risque):
En agroalimentaire B2B, face à l'absence de données, la prédiction se base sur:
1. Nature du produit: Confiture bio (demand relativement stable, non hautement saisonnière comparée à fruits frais)
2. Format: 370g (portion intermédiaire, utilisée par détaillants/restauration collective)
3. Marque: JOY! Organic (marque positionnée premium, volume modéré)

Baseline définie à 15 unités (estimation neutre pour produit agroalimentaire B2B de ce type).

RECOMMANDATION: 15 unités
- Quantité conservative permettant d'éviter rupture initiale
- Suffisante pour test commercial initial
- Permet feedback client avant ajustement

CONFIANCE: LOW (0% données disponibles)
→ Priorité absolue: Collecter l'historique des 6-12 prochains mois pour réviser cette prédiction avec un modèle robuste.

Mercredi 2025-10-08 : Pas d'indication d'un jour de cycle spécifique.

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 35u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 35u (confidence: low)
- 📊 **Baseline N-1**: 35u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 34u (3400.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: INDÉTERMINÉ - Aucune donnée historique disponible
- **Saisonnalité**: none
- **Tendance**: Inconnu - Pas de série temporelle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
SITUATION CRITIQUE : Absence totale de données historiques (N-1 vide + 3 derniers mois vides). Impossible de détecter un pattern cyclique, une tendance ou un événement saisonnier. La prédiction repose sur une ESTIMATION PAR DÉFAUT UNIQUEMENT.

MÉTHODOLOGIE D'URGENCE :
- Produit agroalimentaire B2B (cola ZERO 275ml - segment standard)
- Pas de baseline quantifiée → estimation prudente : 35 unités (volume minimal pour une commande B2B distribuée)
- Aucun outlier détectable (données manquantes)
- Pas de saisonnalité N-1 observable
- Pas de tendance mesurable

RECOMMANDATION : 35 unités
- Justification : Volume intermédiaire adapté à un produit de grande distribution
- Risque : TRÈS ÉLEVÉ (confidence = LOW)

ACTION PRIORITAIRE : Récupérer l'historique complet du client AVANT la date de commande 2025-10-08. Même 6 mois de données permettraient une prédiction fiable. Cette prédiction est un PLACEHOLDER en attente de données réelles.

</details>




### 📊 Données d'Input LLM (19 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 4u
- 2024-07-15 07:59:25: 5u
- 2024-04-15 06:24:25: 3u
- 2024-03-12 14:06:41: 4u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 2u
- 2025-08-05 06:36:11: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 6u
- 2024-07-15 07:59:25: 4u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 3u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-15 07:59:25: 4u
- 2024-07-01 07:05:34: 3u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 2u
- 2024-07-15 07:59:25: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-01 07:05:34: 4u
- 2024-05-31 07:27:57: 5u
- 2024-04-15 06:24:25: 2u
- 2024-03-12 14:06:41: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 6u
- 2025-08-19 12:02:03: 5u
- 2025-08-05 06:36:11: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 3u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 15u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 35u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (21)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 1.1u (24j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 0.8u (14j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 1.0u (22j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -0.3u (-4j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 3 | Stock prédit: 0.1u (0j restants) → prédit 3u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -1.2u (-14j restants) → prédit 3u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.0u (25j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Stock prédit: -1.2u (-14j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF021] JF PICKLES 350 ML | 4 | Stock prédit: -1.2u (-18j restants) → prédit 4u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: -1.5u (-21j restants) → prédit 3u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: -0.7u (-12j restants) → prédit 3u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | Stock prédit: -1.3u (-35j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 370 | Stock prédit: -1.4u (-43j restants) → prédit 370u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |


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
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Stock suffisant: 1.3u (35j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:13:09.929Z*
