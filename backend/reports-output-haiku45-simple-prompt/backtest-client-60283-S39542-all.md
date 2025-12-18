# Rapport Backtest - Client DELITRAITEUR

## Contexte

- **Client** : DELITRAITEUR (ID: 60283)
- **Commande réelle** : S39542
- **Date commande** : 2025-10-03 13:14:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 15,659 input + 6,593 output = 22,252 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 70.0% | 10 produits prédits, 7 corrects |
| **Rappel** | 77.8% | 9 produits réels, 7 détectés |
| **F1-Score** | 73.7% | Score équilibré global |

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
| **MAE** | 26.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 73.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 84.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -49.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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

## True Positives (7)

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 18 | 60 | 42.0 | 70.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 15 | 25 | 10.0 | 40.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 18 | 7 | 11.0 | 157.1% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 12 | 40 | 28.0 | 70.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 11 | 60 | 49.0 | 81.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 18 | 45 | 27.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 38 | 18 | 20.0 | 111.1% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 18u vs Médiane: 19u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: medium)
- 📊 **Baseline N-1**: 18.5u
- 📊 **Médiane**: 19u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 42u (70.0%)
- 📉 **Erreur Médiane**: 41u (68.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, principalement les lundis (3/4 dernières commandes) avec une exception le vendredi 2025-07-04. Intervalle moyen ~4 semaines entre commandes.
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 17-20u (dernières 3 commandes convergent vers 17-20u), avec une baisse ponctuelle à 10u le 2025-07-04
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**

ANALYSE DÉTAILLÉE:

1. **PATTERN RYTHMIQUE**
   - Dernières commandes: 2025-09-29(lun)=17u → 2025-09-01(lun)=20u → 2025-08-04(lun)=20u → 2025-07-04(ven)=10u
   - 3 commandes sur 4 sont des lundis (75% du pattern)
   - Intervalle moyen: ~4 semaines (28-29 jours)
   - Date de prédiction: 2025-10-02 (jeudi) = rupture du jour habituel
   - Dernière commande lundi 2025-09-29, donc la prédiction sur un jeudi s'écarte du cycle normal

2. **GESTION DU JOUR HORS CYCLE**
   - Commande habituelle: LUNDI
   - Prédiction demandée: JEUDI (2025-10-02)
   - Écart: +3 jours après le vendredi (jour potentiel de préparation)
   - Ce jeudi pourrait représenter un rattrapage ou une commande précoce pour la semaine suivante
   - Pas d'indice fort d'ajustement exceptnel dû au changement de jour

3. **FILTRAGE DES OUTLIERS**
   - Valeur 10u (2025-07-04) = outlier bas (écart -50% vs moyenne des autres)
   - Contexte: vendredi (day-of-week différent) + dates éloignées = possible promotion ou erreur
   - Les 3 derniers lundis convergent: 20u → 20u → 17u (stabilité croissante)

4. **TENDANCE & BASELINE**
   - Moyenne simple (4 commandes): (17+20+20+10)/4 = 16.75u
   - Moyenne pondérée (poids 60% sur 3 derniers): (17×0.4 + 20×0.3 + 20×0.3) = 18.8u
   - Excluant l'outlier 10u: (17+20+20)/3 = 19u
   - **Baseline retenue: 18.5u** (moyenne pondérée, excluant le pic bas exceptionnel du 2025-07-04)

5. **SAISONNALITÉ**
   - Aucune donnée N-1 pour comparaison
   - Produit saisonnier potentiel (boisson glacée estivale)
   - Impact: WEAK (données insuffisantes, mais octobre = début d'automne avec possible baisse saisonnière modérée)

6. **DÉCISION FINALE**
   - Pattern stable observé: 17-20u pour commandes "normales" (lundis)
   - Jeudi 2025-10-02 = jour excepté, mais prochain jour travail après lundi 2025-09-29
   - Aucune urgence de rattrapage détectable (dernière commande récente)
   - Recommendation: **18 unités** = valeur centrale pondérée, légèrement conservatrice
   - Confiance MEDIUM (données limitées à 4 commandes, absence de N-1, jour hors cycle)


</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 18u vs Médiane: 25u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: low)
- 📊 **Baseline N-1**: 15u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 11u (157.1%)
- 📉 **Erreur Médiane**: 18u (257.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern très irrégulier - Commandes espacées : 47 jours (01/07→19/08), puis 47 jours (19/08→04/09). Aucun cycle hebdomadaire ni mensuel régulier détecté.
- **Saisonnalité**: none
- **Tendance**: Instabilité extrême : 25u (juil) → 25u (août) → 10u (sept). Possible baisse ou simple volatilité aléatoire.
- **Outliers détectés**: 25u, 25u

**🧠 Raisonnement LLM:**
CONTEXTE CRITIQUE : Données extrêmement limitées (n=3 points) et très irrégulières, rendant la prédiction hautement incertaine.

ANALYSE ÉTAPE PAR ÉTAPE :

1. **ANALYSE RYTHMIQUE** 
   - Intervalle 1 : 19/08 → 01/09 = 13 jours
   - Intervalle 2 : 04/07 → 19/08 = 46 jours
   - **Aucun pattern cyclique régulier** (hebdomadaire, bi-hebdomadaire, ou mensuel)
   - Les jours de commande varient (lun, mar, ven) → pas de jour fixe

2. **FILTRAGE OUTLIERS**
   - 25u en juillet et août : volumes identiques, probablement "normaux" pour ce produit
   - 10u en septembre : **signal de réduction drastique** (-60% vs août)
   - Hypothèses : rupture de tendance ? Client en ralentissement ? Ou simple volatilité ?

3. **TENDANCE DIRECTION**
   - Dernière donnée (01/09) : 10u → suggère une demande atténuée
   - Cependant, l'absence de N-1 et l'irrégularité extrême empêchent de conclure à une vraie baisse structurelle

4. **SAISONNALITÉ**
   - N-1 : AUCUNE DONNÉE → impact saisonnier impossible à évaluer
   - Octobre N-1 : inconnu

5. **DÉCISION FINALE**
   - Baseline théorique : Moyenne prudente entre 10u (dernière) et 17.5u (moyenne historique) = **~15u**
   - Ajustement jeudi (rarement observé) : léger +20% de prudence → **18u**
   - Objectif : Couvrir la probabilité d'une demande "normale" (25u) sans surgonfler face à l'instabilité

**AVERTISSEMENT MAJEUR** : Confiance très faible (low) en raison de l'absence totale de régularité et de données historiques. Cette prédiction est un "meilleur pari" sur une base extrêmement fragile. Un suivi client ou une enquête sur la dernière baisse (10u) serait hautement recommandé.</reasoning>


</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 12u vs Médiane: 10u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: low)
- 📊 **Baseline N-1**: 12.5u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 28u (70.0%)
- 📉 **Erreur Médiane**: 30u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles très espacés (3+ semaines entre commandes). Absence de cycle fixe détectable (pas chaque jour spécifique de la semaine)
- **Saisonnalité**: none
- **Tendance**: Instabilité majeure : oscillation 10u ↔ 20u sans direction claire. Dernières commandes (sept-août): 10u régulièrement. Juillet-août: pics à 20u possiblement liés à l'été/saisonnalité
- **Outliers détectés**: 20u, 20u

**🧠 Raisonnement LLM:**

**ANALYSE DÉTAILLÉE:**

1️⃣ **ANALYSE RYTHMIQUE** 
   - Données très clairsemées : 4 commandes sur ~3 mois = fréquence très basse
   - Intervalles: 13j (01/09→19/08), 15j (19/08→04/08), 93j (04/08→04/07)
   - Aucun cycle hebdomadaire régulier (jours: lun, mar, lun, ven → pas de pattern)
   - Aucun cycle mensuel décelable
   - ⚠️ PROBABILITÉ HAUTE: Client ne commande PAS toutes les semaines, rupture probable

2️⃣ **FILTRAGE INTELLIGENT DES OUTLIERS**
   - Quantités 20u (04/08 et 04/07): Potentiellement liées à la saison estivale (limonade BIO citron = produit saisonnier fort en été)
   - Quantités 10u (01/09 et 19/08): Post-été, demande retombée à la normal
   - Pattern saisonnier PROBABLE mais données N-1 manquantes → Confirmation impossible
   - Pas d'erreur manifeste (quantités cohérentes pour un produit bio snacking)

3️⃣ **SYNTHÈSE & DÉCISION**
   - **Saisonnalité détectée**: Été (juillet-août) = 20u | Post-été (septembre) = 10u
   - **Date de prédiction: 2 octobre (automne)** → Dépasse le pic estival
   - **Baseline empirique**: Moyenne simple = (10+10+20+20)/4 = 15u MAIS:
     * Moyenne pondérée (poids sur dernières données=70%): (10×0.7 + 10×0.7 + 20×0.15 + 20×0.15) = 12.5u
     * Tendance récente (sept-août) = 10u minimum
   - **Recommandation finale**: 12u (arrondi de 12.5) = compromis entre:
     * Stabilisation post-estivale observée
     * Possible rattrapage résiduel de fin septembre
     * Prudence face à faible historique
   
**CONFIANCE: LOW** 
   - Seulement 4 points de données sur 3 mois
   - Pas d'historique N-1 pour valider saisonnalité estivale
   - Client potentiellement irrégulier (long délai 04/08 → 04/09)
   - Absence de clarté sur le cycle réel de commande

**RISQUE PRINCIPAL**: Si le client avait un rythme bimensuel ou trimensuel régulier, nos données fragmentées le masquent complètement → La vraie fréquence reste inconnue.


</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 11u vs Médiane: 10u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 11u (confidence: low)
- 📊 **Baseline N-1**: 13.33u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 49u (81.7%)
- 📉 **Erreur Médiane**: 50u (83.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques - pas de cycle régulier établi. Intervalles variables: ~28 jours entre juil-sept, puis 30+ jours. Aucun pattern hebdomadaire clair identifié.
- **Saisonnalité**: none
- **Tendance**: Stable à ~10-13u, avec un pic isolé (20u le 04/07 - vendredi). Pas de tendance haussière ou baissière significative détectée.
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
**ANALYSE CHAÎNE DE PENSÉE:**

1. **Données disponibles limitées** : Seulement 3 commandes en 3 mois = base réduite pour identifier un vrai pattern. N-1 absent = aucune comparaison saisonnière possible.

2. **Rythmique identifiée** :
   - Commandes à ~28-30 jours d'intervalle (sporadique, non hebdomadaire)
   - Jours de semaine variés (lun, ven) - aucun jour préféré clair
   - Le jeudi 02/10 sort du pattern observé (départ habituel plutôt lun/ven)

3. **Détection d'outliers** :
   - 20u le 04/07 (vendredi) = **pic isolé**, +100% vs moyenne (10u)
   - Interprétation : probablement promotion/commande spéciale, non représentatif de la demande de fond

4. **Baseline calculée** :
   - Commandes "normales" : 10u (lun 01/09), 10u (lun 04/08) = tendance centrale
   - Moyenne brute : (10+10+20)/3 = 13.33u, mais 20 est un outlier
   - Baseline prudente/probable = **~11-12u** (moyenne pondérée excluant partiellement le pic)

5. **Synthèse décisionnelle** :
   - Pas de saisonnalité identifiable (N-1 absent)
   - Pas de trend haussière/baissière marquée
   - Demande de fond = **~10-12u** (stable)
   - Confiance BASSE : données insuffisantes + jour de commande anormal
   - Prédiction = **11 unités** (moyenne prudente excluant outlier, plus proche de la normale observée)

**Alternative envisagée** : 10u si on exclut complètement le pic; 13u si on inclut la moyenne brute. Choix 11u = compromis optimal face à l'incertitude.

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 18u vs Médiane: 18u (Réel: 45u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: low)
- 📊 **Baseline N-1**: 18u
- 📊 **Médiane**: 18u
- ✅ **Réel commandé**: 45u
- 📉 **Erreur LLM**: 27u (60.0%)
- 📉 **Erreur Médiane**: 27u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - 2 commandes seulement sur 3 mois. Interval 59 jours entre commandes (2025-07-04 au 2025-09-01). Aucun pattern hebdomadaire clair détectable.
- **Saisonnalité**: none
- **Tendance**: Stable à 18u (les deux seules observations montrent 18u), mais données trop limitées pour confirmer une tendance.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CRITIQUE DE LA SITUATION:

**Contexte Data:**
- Seulement 2 commandes enregistrées en 3 mois (lun. 2025-09-01: 18u et ven. 2025-07-04: 18u)
- Écart de 59 jours entre les deux observations
- Aucune donnée N-1 disponible
- Prédiction demandée: jeudi 2025-10-02

**Chaîne d'Analyse:**

1. **ANALYSE RYTHMIQUE:**
   - L'intervalle de 59j ne correspond à aucun pattern régulier typique (hebdomadaire, bihebdomadaire, mensuel)
   - Les deux commandes sont sur des jours différents (lundi vs vendredi)
   - Volume identique (18u) aux deux dates → possibilité d'une demande stable, mais 2 points c'est très peu

2. **SAISONNALITÉ:**
   - Aucune donnée N-1 → impossible d'évaluer saisonnalité autour du 02-10
   - Impact saisonnier: NONE (pas d'élément comparatif)

3. **FILTRAGE OUTLIERS:**
   - Les 18u ne semblent pas exceptionnels (même volume observé 2×) → pas d'outliers détectés

4. **TENDANCE:**
   - Avec 2 seules observations identiques → Stable à 18u
   - Mais confidence TRÈS BASSE car données insuffisantes

5. **GESTION DU JEUDI (jour hors historique):**
   - Historique n'inclut que lun. et ven.
   - Pas de raison objective de modifier la quantité pour un jeudi
   - Maintiens la baseline observée

**DÉCISION:**
Faute de pattern régulier identifiable et avec données ultra-limitées, je recommande la quantité observée aux deux dernières commandes: **18 unités**.

⚠️ **LIMITE CRITIQUE:** Cette prédiction est fortement limitée par l'absence de:
- Pattern régulier détectable
- Données N-1 pour saisonnalité
- Densité suffisante de points pour valider une tendance
- Historique du comportement en jeudi

Pour améliorer la précision, il faudrait au minimum 8-10 semaines de données historiques continues."

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 09:22:29: 17u
- 2025-09-01 06:22:40: 20u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: medium)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 25u
- 2025-07-04 11:09:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 10u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 12u (confidence: low)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-04 09:36:12: 10u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 11u (confidence: low)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 18u
- 2025-07-04 11:09:53: 18u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: low)
**📊 Quantité Réelle**: 45u

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 126 | Stock prédit: -38.2u (-13j restants) → prédit 126u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 21 | Stock prédit: -18.3u (-27j restants) → prédit 21u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 53 | Stock prédit: -5.4u (-4j restants) → prédit 53u mais non commandé |


---

## False Negatives (2)

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
| [LV160] LV Tartinade Aubergine 190g | 50 | Stock suffisant: 32.9u (36j restants > seuil 30j) |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 40 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T10:13:30.544Z*
