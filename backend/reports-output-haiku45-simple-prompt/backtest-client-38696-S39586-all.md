# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S39586
- **Date commande** : 2025-10-07 06:59:59
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 37
- **Tokens**: 85,350 input + 33,234 output = 118,584 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.0% | 50 produits prédits, 8 corrects |
| **Rappel** | 72.7% | 11 produits réels, 8 détectés |
| **F1-Score** | 26.2% | Score équilibré global |

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
| **wMAPE** | 44.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 6u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 3u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans cycle strict; intervalles variables entre 10 et 68 jours. Pas de pattern hebdomadaire marqué (combinaison lun/mar/mer/jeu/ven). Dernière commande: 29 sept 2025 (lun). Date prédiction: 6 oct 2025 (lun), soit 7 jours après.
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 4.5u en moyenne récente (sept 2025: 4u, mais pics ponctuels à 10u en mars/sept N-1 et sept 2025). Pas de tendance haussière ou baissière marquée.
- **Outliers détectés**: 10u, 7u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **RYTHME & CYCLES**
   - Historique N-1 (2024): 12 commandes sur ~7 mois → commandes irrégulières
   - Période récente (juil-sept 2025): 4 commandes sur 2.5 mois → rythme ~20j environ
   - Jours de commande: lun (3x), mar (2x), mer (2x), jeu (2x), ven (2x) → aucun jour préférentiel marqué
   - INTERVALLE DEPUIS DERNIÈRE: 7 jours (29 sept → 6 oct)
   - CONCLUSION: Pas de cycle hebdomadaire strict; intervalles multiples (7-68j). Probable que 6 oct ne soit pas une date de commande "normale" → risque de non-commande ou rattrapage.

2. **IDENTIFICATION DES OUTLIERS**
   - Pics: 10u (29/04/2024 & 09/09/2025) → périodes avril & septembre, possibles pics saisonniers ou ponctuels
   - Pic 7u (16/05/2024) → isolé, peu représentatif
   - Baseline récurrente: 3-6u (représente ~70% des commandes)

3. **SAISONNALITÉ**
   - Sept N-1 (2024): 4 & 6u sur 2 commandes
   - Sept N (2025): 4u & 10u sur 2 commandes
   - Pattern septembre: plutôt stable (pic 10u est outlier, moyenne ~6-7u)
   - Oct N-1: aucune donnée → saisonnalité FAIBLE, pas de récurrence marquée

4. **TENDANCE IMMÉDIATE**
   - Derniers 4 mois: [6u (juil), 3u (août), 10u (sept-09), 4u (sept-29)]
   - Moyenne derniers 90j: 5.75u
   - Pas de croissance/décroissance nette; oscillation autour de 5u

5. **DÉTERMINANT CRITIQUE: JOUR DE SEMAINE**
   - Date prédiction: **LUNDI 6 Oct 2025**
   - Jours lundi dans historique: 2024-08-26 (3u), 2024-08-19 (4u), 2024-04-29 (10u), 2025-09-16 (6u), 2025-09-29 (4u)
   - Moyenne lundi (hors outlier 10u): 4.3u
   - Mais SEULEMENT 7j après dernière commande (29 sept) → cycle très court, inusuel
   - Hypothèse: Commande de rattrapage ou commande exceptionnelle → mais dernière était déjà en cycle normal

6. **SYNTHÈSE DÉCISION**
   - Baseline théorique: **5u** (moyenne tout historique: 5.08u; moyenne récente: 5.75u; moyenne lundi: 4.3u)
   - Ajustement saisonnalité octobre: AUCUN (pas de pattern clair; données N-1 insuffisantes)
   - Ajustement jour lundi: NEUTRE (pattern lundi cohérent avec baseline)
   - Ajustement intervalle court (7j): AUCUN (commande faite à 29 sept; probable que 6 oct ne soit pas une date normale, mais hypothèse de prédiction = commande a lieu)
   - **RECOMMANDATION FINALE: 5u**
   - Justification: Valeur centrale stable, cohérente avec historique, sans signaux d'exception justifiant variation.

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.3u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, sans cycle fixe identifiable. Historique fragmenté avec intervalles variables (20-70 jours entre commandes). Pas de jour de semaine privilégié (distribution sur Lun-Mar-Ven). Dernière commande le 29/09/2025 (lundi), soit 7 jours avant la prédiction du 06/10/2025 (lundi)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 1-2u. Dernière commande en N-1 (19/08/2024): 1u. Récemment en N: hausse légère avec pics occasionnels à 2u (29/09/2025, 31/05/2024)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: L'historique montre une demande TRÈS IRRÉGULIÈRE et fragmentée. Sur 9 commandes totales (N-1 + 3 derniers mois), les intervalles varient entre 7 et 70 jours sans pattern clairement établi. Aucun jour de semaine n'est privilégié (distribution sur lun/mar/jeu/ven). DERNIÈRE COMMANDE: 29/09/2025 (lundi, 2u), soit exactement 7 jours avant la date de prédiction (06/10/2025 lundi). FILTRAGE OUTLIERS: Pas d'événements exceptionnels détectés. Les quantités alternent entre 1u et 2u sans anomalies. SAISONNALITÉ: Impact faible. N-1 montre la même volatilité qu'actuellement (quantités 1-2u). Pas d'indicateur saisonnier fort à cette période (octobre) comparé à N-1 (mai-août). TENDANCE: Stable à très légèrement haussière (moyenne 1.25u). Derniers 3 mois: 2,1,1,1u (moyenne 1.25u). DÉCISION FINALE: Face à cette irrégularité, une approche conservative basée sur la moyenne pondérée (poids fort sur récent) donne ~1.3u. Arrondi à l'entier inférieur = 1u (pour respecter la volatilité observe et éviter le surstock chronique observable). Confidence faible en raison de la fragmentation extrême des données.

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec tendance mensuelle faible. N-1 (2024) montre des commandes espacées de 10-60 jours sans jour fixe. Période récente (2025) montre accélération avec 4 commandes en 3 mois vs 8 commandes en 12 mois en 2024. Jours variés (lun/mar/mer/jeu/ven) sans cycle hebdomadaire strict.
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive +50% (moyenne N-1: 1.5u/mois → période récente: 1.33u/mois corrigée, mais fréquence accrue suggère croissance du portefeuille client)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: L'historique montre une demande très irrégulière sans jour fixe de commande. N-1 (2024) présente 8 commandes sur 12 mois, tandis que la période récente (3 mois) en compte déjà 4, suggérant une augmentation de fréquence. Les intervalles varient considérablement (8j à 62j), sans pattern cyclique clair.

**VOLUMES**: Majoritairement 2u (9 cas sur 12, soit 75%), avec quelques commandes à 1u (3 cas). Le produit est stable en agro-alimentaire B2B, mais avec une base client qui semble grandir.

**SAISONNALITÉ**: Faible impact détecté. Septembre 2024 (2u) vs septembre 2025 (2u) montrent une cohérence, mais sans tendance saisonnière marquée.

**DÉTECTION D'OUTLIERS**: Aucun pic anormal. Les 1u et 2u alternent naturellement selon la taille des commandes client.

**TENDANCE RÉCENTE**: Accélération observée en 2025 (fréquence +33% vs 2024). Dernière commande: 23-09-2025 (2u) il y a ~13 jours. Délai habituel: ~30j, mais la tendance récente raccourcit les intervalles.

**DÉCISION FINALE**: Baseline 1.5u (moyenne N-1) ajustée à **2u** (mode + tendance haussière légère). La prédiction du lundi 2025-10-06 correspond à un délai de ~13j depuis la dernière commande, cohérent avec les patterns accélérés observés. Confiance MEDIUM en raison de l'irrégularité structurelle du produit.

</details>


<details>
<summary><strong>4. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.6u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, intervalle variable de 7 à 38 jours. Pas de jour fixe de commande détecté. Jours observés: mardi (3x), vendredi (1x), lundi (1x). Dernier intervalle: 18 jours (09/09 → prédiction 06/10). Aucun pattern hebdomadaire clairement établi.
- **Saisonnalité**: none
- **Tendance**: Stable à 2.6u en moyenne (dernières 5 commandes: 2, 3, 3, 3, 2). Pas de saisonnalité N-1 disponible. Absence de hausse ou baisse structurelle détectée.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse Rythmique**: L'historique montre 5 commandes sur ~2 mois avec des intervalles très variables (7, 21, 6, 38, 18 jours). Aucun pattern hebdomadaire récurrent détecté malgré la présence de mardi et vendredi. La date de prédiction (lundi 06/10) ne coïncide avec aucun jour de commande habituel.

**Filtrage Outliers**: Aucun pic exceptionnel ou creux manifeste. Toutes les quantités commandées tournent autour de 2-3 unités (moyenne: 2.6u).

**Saisonnalité**: Absence totale de données N-1, donc impossible d'identifier des effets saisonniers automnaux pour ce produit d'œufs/mayo.

**Tendance**: Horizontale et stable. Les 5 dernières commandes oscillent entre 2 et 3 unités sans direction claire (+15% ou -20%).

**Calcul Final**: 
- Moyenne simple: 2.6u
- Médiane: 3u (la majorité des commandes = 3u)
- Dernière commande: 2u (18 jours avant la date de prédiction)

Face à cette stabilité et à l'absence de tendance directionnelle, le choix est entre 2.6 et 3. En agro B2B sur un produit laitier/œuf stabilisé comme la mayo, la quantité de 3 unités est la plus probable: elle représente 3 des 5 dernières commandes. Le risque de rupture stock est limité; une sous-commande expose davantage au rupture que la surcommande dans ce segment.

**Confiance MEDIUM** : Pattern peu régulier (5 points historiques seulement, intervalles variables) mais trend clairement stable sans volatilité.

</details>


<details>
<summary><strong>5. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, réparties sur différents jours de la semaine (lundi, mardi, mercredi, vendredi, jeudi). Aucun jour fixe apparent. Intervalle moyen entre commandes récentes: ~23 jours (09/09 → 08/22 = 18j, 08/22 → 08/05 = 17j, 08/05 → 07/15 = 21j). Pattern suggère commande mensuelle approximative, mais sans cohérence de jour précis.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (N-1 moyenne 2.5u → récent moyenne 1.5u). Demande en décroissance légère mais régulière.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE EN CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - Historique N-1 (2024): 4 commandes sur 5 mois (très espacées)
   - Récent (3 derniers mois): 4 commandes sur 3 mois (fréquence similaire)
   - Aucun pattern hebdomadaire récurrent (mardi, vendredi, mardi, mardi depuis 09/09)
   - Intervalles: 21j, 17j, 18j depuis juillet → rythme mensuel approximatif (~19j moyenne)
   - Date de prédiction: lundi 06/10/2025. Dernière commande: mardi 09/09/2025 (27 jours avant). Rattrapage potentiel faible.

2. **ANALYSE DE TENDANCE**
   - N-1 moyenne: (2+4+2+2)/4 = 2.5u
   - Récent moyenne: (1+1+2+2)/4 = 1.5u
   - Baisse observée: -40% (de 2.5 à 1.5)
   - Dernière commande (09/09): 1u (particulièrement basse)
   - Les 2 commandes avant (08/22, 08/05) montrent 1u et 2u (volatilité faible)

3. **FILTRAGE OUTLIERS**
   - Aucun pic anormal détecté. Aucun point n'écarte la moyenne de >2x
   - Le 4u de 2024-06-19 est isolé dans N-1 mais trop ancien pour impacter saisonnalité
   - Données cohérentes: pas d'erreur apparente

4. **SYNTHÈSE & DÉCISION**
   - Pattern: Demande stable mais en légère décroissance
   - Saisonnalité: FAIBLE (octobre vs juillet-septembre, différence minimale, pas d'événement spécifique identifié)
   - Baseline actuelle: 1.5u (moyenne récente)
   - Correction: +0.5u de "prudence conservative" pour compenser la baisse progressive et la volatilité observée
   - **RECOMMANDATION: 2u**

5. **JUSTIFICATION DE LA PRÉCISION**
   - 2u = médiane des 4 derniers mois (1, 1, 2, 2)
   - 2u = équilibre entre tendance baissière et volume minimum viable en B2B
   - Confidence MEDIUM car: peu de données (8 points), pattern irrégulier, mais stabilité récente confirmée</reasoning>
</invoke>

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 06:22:00: 4u
- 2025-09-09 06:35:00: 10u
- 2025-08-22 06:53:50: 3u
- 2025-07-22 10:11:51: 6u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-25 06:29:04: 4u
- 2024-09-16 12:44:43: 6u
- 2024-08-26 14:03:19: 3u
- 2024-08-19 06:08:42: 4u
- 2024-07-31 06:22:12: 5u
- 2024-07-11 06:44:28: 1u
- 2024-06-26 12:38:31: 6u
- 2024-06-19 10:15:51: 5u
- 2024-05-31 12:44:08: 5u
- 2024-05-16 07:03:39: 7u
- 2024-04-29 11:50:19: 10u
- 2024-03-21 09:05:03: 4u

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 06:22:00: 2u
- 2025-09-23 06:05:27: 1u
- 2025-08-22 06:53:50: 1u
- 2025-07-22 10:11:51: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-19 06:08:42: 1u
- 2024-07-11 06:44:28: 1u
- 2024-05-31 12:44:08: 2u
- 2024-05-28 06:26:27: 1u
- 2024-05-06 07:25:48: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:05:27: 2u
- 2025-08-11 10:56:49: 1u
- 2025-08-05 11:44:48: 2u
- 2025-07-22 10:11:51: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 12:44:43: 2u
- 2024-08-19 06:08:42: 2u
- 2024-07-31 06:22:12: 2u
- 2024-07-11 06:44:28: 1u
- 2024-06-19 10:15:51: 1u
- 2024-05-31 12:44:08: 2u
- 2024-05-28 06:26:27: 1u
- 2024-05-06 07:25:48: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:35:00: 2u
- 2025-08-22 06:53:50: 3u
- 2025-08-11 10:56:49: 3u
- 2025-08-05 11:44:48: 3u
- 2025-07-15 09:37:25: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:35:00: 1u
- 2025-08-22 06:53:50: 1u
- 2025-08-05 11:44:48: 2u
- 2025-07-15 09:37:25: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-26 14:03:19: 2u
- 2024-06-19 10:15:51: 4u
- 2024-04-29 11:50:19: 2u
- 2024-03-21 09:05:03: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (42)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 1.7u (30j restants) → prédit 2u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 1.6u (21j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 1.6u (24j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 1.4u (13j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: 0.4u (1j restants) → prédit 2u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 6 | Stock prédit: 7.1u (29j restants) → prédit 6u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: 1.1u (15j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 1.3u (20j restants) → prédit 2u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.6u (15j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -0.2u (-3j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (26j restants) → prédit 1u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: 0.3u (3j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: 1.4u (21j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | Stock prédit: -0.8u (-7j restants) → prédit 4u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Stock prédit: 1.7u (13j restants) → prédit 4u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Stock prédit: 1.6u (29j restants) → prédit 2u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: -3.2u (-26j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 0.8u (29j restants) → prédit 2u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 3 | Stock prédit: 0.5u (14j restants) → prédit 3u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 3 | Stock prédit: -0.5u (-14j restants) → prédit 3u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Stock prédit: -0.4u (-13j restants) → prédit 2u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 2 | Stock prédit: 0.2u (13j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: -0.4u (-6j restants) → prédit 3u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: 0.5u (10j restants) → prédit 3u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -0.7u (-14j restants) → prédit 2u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: -1.7u (-61j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -2.7u (-81j restants) → prédit 1u mais non commandé |


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
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock suffisant: 0.6u (74j restants > seuil 30j) |
| [VID0009] Consigne casier | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 12 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T10:13:09.441Z*
