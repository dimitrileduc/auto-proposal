# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S39576
- **Date commande** : 2025-10-06 09:27:30
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 29
- **Tokens**: 65,954 input + 24,730 output = 90,684 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.5% | 33 produits prédits, 18 corrects |
| **Rappel** | 90.0% | 20 produits réels, 18 détectés |
| **F1-Score** | 67.9% | Score équilibré global |

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
| **MAE** | 0.44 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 31.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 22.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
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

## True Positives (18)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ❌ Non | 📊 Médiane |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (17 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande très sporadique - 2 commandes en ~28 jours (22 sept & 25 août). Pattern peu clair : pas de cycle hebdomadaire régulier détecté. Les deux commandes (lun.) suggèrent une préférence pour les lundis, mais intervalles irréguliers (28j, puis 3 semaines avant?). Rythme imprévisible.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - Demande minimale et constante (1u à chaque occurrence)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE CRITIQUE DE LA SITUATION:**

1. **Données extrêmement limitées**: Seulement 2 commandes en ~1 mois. Aucune donnée N-1 pour saisonnalité. Risque de conclusion non-fiable.

2. **Rythmique observée**:
   - 2025-09-22 (lun.): 1u
   - 2025-08-25 (lun.): 1u
   - Intervalle: ~28 jours entre les deux
   - MAIS: Pas assez de données pour confirmer un cycle mensuels régulier

3. **Contexte défavorable**:
   - Date de prédiction: Dimanche 2025-10-05 (hors jours de travail typiques)
   - Écart avec dernière commande: 13 jours (22 sept → 5 oct)
   - Le client commande les lundis, pas les dimanches → Prédiction sur jour atypique

4. **Tendance & Baseline**:
   - Demande stable: 1u systématiquement
   - Pas de hausse, pas de baisse détectable
   - Produit: Limonade bio - marché agroalimentaire B2B avec demandes faibles (1u = probablement 1 palette/lot min ou client de très petite taille)

5. **Prédiction rationnelle**:
   - Maintien de la baseline: **1u**
   - Aucun signal d'escalade ou de promotion
   - Pattern trop faible pour anticiper rattrapage

**CONFIANCE FAIBLE** car: Insuffisance chronique de données (2 points = minimum statistique), aucune saisonnalité mesurable, jour de prédiction atypique (dimanche vs lundis habituels)."

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - uniquement 2 données disponibles (lun. 22 sept. 2025: 1u, lun. 25 août 2025: 2u). Interval approximatif: ~28 jours. Impossible de confirmer un pattern hebdomadaire ou mensuel stable.
- **Saisonnalité**: none
- **Tendance**: Baisse légère (-50% août→sept: de 2u à 1u), mais donnée insuffisante pour confirmer une tendance structurelle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
CONTEXTE CRITIQUE: Historique extrêmement limité (n=2 commandes seulement sur 3 mois) + absence totale de données N-1 → Confiance FAIBLE inévitable.

ANALYSE ÉTAPE PAR ÉTAPE:

1. **Rythmique** 
   - Seules 2 commandes détectées: 25 août (lun, 2u) et 22 sept (lun, 1u)
   - Intervalle: 28 jours (potentiellement mensuel, jour similaire)
   - Les deux sur LUNDI → pattern possible lundi hebdomadaire OU cycle mensuel dernier-lundi
   - MAIS: Date de prédiction = DIMANCHE 5 oct → jour INHABITUEL (décalage -1 jour)

2. **Filtrage outliers**
   - Aucun pic ou valeur extrême détecté (1-2u = volumes modérés)
   - Aucun marqueur de promotion/erreur
   - Aucune saisonnalité N-1 pour comparaison

3. **Tendance**
   - Baisse légère: 2u → 1u (-50%)
   - Mais 2 points insuffisent pour valider tendance vs fluctuation naturelle
   - Produit NODA = limonade BIO → Saisonnalité possible en été (manquante en données)

4. **Décision prédictive**
   - Baseline = moyenne pondérée [25 août: 2u (poids 40%), 22 sept: 1u (poids 60%)] = 1.4u → arrondi 1.5u
   - Prédiction la plus prudente ET probable: **1 unité** (align sur dernière commande connue, dimanche en Q4)
   - Alternative = 2u (si "rattrapage cyclique 28j" s'applique) mais trop spéculatif
   
CHOIX FINAL: **1 unité** = Safer bet given volatilité données + passage de lundi→dimanche

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes épisodiques, pas de cycle régulier détecté. Deux commandes observées avec intervalle de 28 jours (22/09 au 25/08 = 28 jours), mais sans assez de données pour confirmer un pattern mensuel stable.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u. Les deux seules commandes enregistrées sont identiques (1u chacune). Aucune tendance haussière ou baissière observable sur si peu de données.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE :

1️⃣ **ANALYSE RYTHMIQUE - Critique**
   - Historique extrêmement limité : seulement 2 commandes en ~1 an
   - Dates : 25/08/2025 (lundi) → 22/09/2025 (lundi) = 28 jours
   - Les deux occurrences sont sur un LUNDI (potentiel pattern)
   - L'intervalle de 28 jours pourrait suggérer un cycle mensuel, mais avec n=2 c'est insuffisant pour confirmer
   - DATE DE PRÉDICTION : 05/10/2025 (DIMANCHE) = jour différent du pattern observé (lundi)

2️⃣ **ANOMALIE JOUR HORS CYCLE**
   - Toutes les commandes historiques : lundi
   - Prédiction demandée : dimanche (veille)
   - Cette discontinuité rend la prédiction moins fiable → confidence BASSE

3️⃣ **FILTRAGE OUTLIERS**
   - Aucun pic, aucune promotion détectée
   - Aucune donnée N-1 pour comparaison saisonnière
   - Quantités identiques (1u) → pas d'outlier à isoler

4️⃣ **ABSENCE TOTALE DE SAISONNALITÉ**
   - Zéro donnée année précédente (N-1)
   - Impossible d'identifier un pattern saisonnier
   - Impact saisonnalité = "none"

5️⃣ **SYNTHÈSE & DÉCISION**
   - **Baseline théorique** : 1u (seule valeur observable, aucune variation)
   - **Trend** : Complètement stable, trop peu d'observations
   - **Approche** : En l'absence de pattern fiable et avec si peu de données, appliquer le principe du rasoir d'Occam
   - **Prédiction finale** : 1u (reproduire la dernière commande observable)

⚠️ **MISE EN GARDE**
   - Confiance BASSE car : données insuffisantes (n=2), jour hors cycle, aucune historique N-1
   - Le client pourrait augmenter son volume sans qu'on l'ait détecté
   - Recommandé : Relancer le client directement si commande < 5u paraît faible pour ses besoins


</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 4.2u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire fixe chaque lundi (25-45 jours d'intervalle)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -40% (de 8u en juillet à 3u en septembre)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:** 
Tous les 5 commandes récentes sont placées un LUNDI (9 semaines d'historique visible). Pattern très clair : client commande chaque lundi, intervalle ~2-3 semaines. La prédiction demandée est dimanche 2025-10-05, VEILLE du prochain lundi de commande habituel.

**DÉTECTION D'OUTLIERS:**
- Pic de 8u en juillet 2025 : déconnecter de la tendance générale (valeur exceptionnelle, 2.7x la moyenne récente)
- Moyenne "nettoyée" sur 4 dernières commandes: (3+5+6+3)/4 = 4.25u

**TENDANCE IMMÉDIATE:**
Baisse progressive nette : 8u (juil) → 3u (sep22) → récente stabilité à 3-5u. Coefficient: -40% de baisse observée. Les 3 dernières commandes oscillent autour de 3-6u.

**GESTION DE LA DATE (dimanche vs lundi):**
Demande pour dimanche 05-10-2025, mais pattern de commande habituel = lundi. Le client a probablement DÉJÀ commandé ce dimanche OU commandera lundi. Pas de données N-1 pour identifier saisonnalité début octobre. Aucun indication de rattrapage ou stock de sécurité particulier.

**SYNTHÈSE:**
- Pas de saisonnalité identifiable (N-1 absent)
- Tendance à la baisse mais stabilisation récente autour de 3-5u
- 3 dernières: moyenne simple = 4.67u, mais dernier très récent (22 sept) = 3u → Signal plus fort
- Pondération: Derniers jours > moyenne historique = 3u est plus probable que 5-6u

**PRÉDICTION FINALE:**
Baseline de fond = 4.2u (moyenne 4 derniers)
Ajustement baisse tendance = -15% → 3.6u → arrondi à **3 unités**

Confiance MEDIUM: Pattern hebdomadaire très clair, mais (1) N-1 absent limite détection saisonnalité, (2) historique court (5 points), (3) date de prédiction = dimanche vs lundi habituel = ambiguïté.

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire - Chaque lundi (intervalle régulier de 7-14 jours, 5 commandes sur 5 ont eu lieu un lundi)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 3-4u avec un pic isolé à 6u le 25/08 (possible promotion ou commande groupée)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**ANALYSE CHAIN OF THOUGHT:**

1️⃣ **ANALYSE RYTHMIQUE**
   - Toutes les 5 commandes historiques ont eu lieu un LUNDI (100% de régularité)
   - Intervalles: 22→8sept (14j), 8→25août (14j), 25→11août (14j), 11juil→14juil (sur même mois visible)
   - Pattern hebdomadaire très régulier: Cycle 14 jours (2 semaines) OU commande tous les 2 lundis
   - RUPTURE: Date de prédiction = dimanche 5 oct 2025 (jour hors cycle habituel)
   - Implication: Le client ne commandera probablement PAS dimanche → prédiction pour lundi 6 oct suivant

2️⃣ **DÉTECTION OUTLIERS**
   - 25/08: 6u (vs 3u en majorité) → écart +100% isolé
   - Qualité: Pic unique, non répété → Événement exceptionnel probable (promotion, client new B2B joint, ou stock client bas)
   - Traitement: À exclure de la baseline, mais noter la volatilité possible

3️⃣ **SYNTHÈSE DONNÉES STABLES**
   - Demandes normales: [3, 3, 3, 5, 3] → Mode=3u, Moyenne=3.4u
   - Le "5" du 14/07 pourrait aussi être un léger pic (ratio +66%), mais reste cohérent dans la volatilité
   - Baseline conservatrice: 3.8u (moyenne simple: (3+3+6+3+5)/5 = 4.0, ajustée à 3.8 en excluant le 6u aberrant)

4️⃣ **AUCUNE SAISONNALITÉ**
   - Pas de données N-1 → impossibilité confirmer pattern saisonnier
   - Données N (3 mois) montrent stabilité uniforme → No seasonality detected

5️⃣ **CONCLUSION - QUANTITÉ PRÉDITE**
   - Tendance: STABLE avec volatilité légère (+/-33% autour de 3-4u)
   - Coefficient tendance: Neutre (aucune hausse ou baisse significative)
   - Quantité la plus PROBABLE = Médiane des commandes normales = **4 unités**
   - Justification: 4u représente le comportement modal du client sans surgonfle "au cas où"

**GESTION DU JOUR HORS CYCLE:** Prédiction interprétée pour le lundi 6 octobre 2025 (prochain jour habituel de commande). Le dimanche 5 oct étant jour non-travail en B2B, cette date peut aussi être une saisie système. La recommandation de 4u vise le cycle hebdomadaire confirmé.

**CONFIANCE MEDIUM:** Regex pattern très régulier (5/5 lundis) élève la confiance, mais absence de données N-1, petit historique (5 pts), et présence d'outlier la réduisent à "medium".

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire régulière chaque lundi (5 commandes consécutives sur 5 lundis)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2-3u, avec un pic à 5u le 14/07 (possible promotion/événement)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
ANALYSE ÉTAPE PAR ÉTAPE :

1. **ANALYSE RYTHMIQUE** - Pattern extrêmement régulier
   - 5 commandes consécutives toutes un LUNDI (22/09, 08/09, 25/08, 11/08, 14/07)
   - Intervalle : exactement 2 semaines (14 jours) entre chaque commande
   - → Conclusion : Rythme hebdomadaire cristallisé, client commande chaque 2ème lundi

2. **FILTRAGE OUTLIERS**
   - Quantités observées : [3, 1, 4, 1, 5]
   - Pic à 5u (14/07) vs moyenne générale ~2.8u
   - → Cet événement (promotion, commande groupée ou fête d'été) est isolé et non récurrent
   - Le motif normal = 1-4 unités

3. **GESTION DU DÉCALAGE TEMPOREL**
   - Dernier achat : 22/09/2025 (lundi)
   - Date de prédiction : 05/10/2025 (dimanche)
   - Intervalle : 13 jours → Le cycle lunditype dépasse légèrement
   - Prochaine fenêtre probabledu rythme 2-semaines = mardi 06/10 ou mercredi 07/10
   - Prédiction demandée dimanche 05/10 = VEILLE de la commande habituelle
   - → Client commande probablement DEMAIN (lundi 06/10 décalé d'un jour)

4. **CALCUL BASELINE**
   - Moyenne hors outlier majeur : (3+1+4+1)/4 = 2.25u
   - Intégration pic 5u (poids faible, 20%) : 2.25×0.8 + 5×0.2 = 2.8u
   - → Baseline = 2.8u

5. **SAISONNALITÉ**
   - Aucune donnée N-1 disponible
   - Octobre vs juillet/août/septembre : pas de signe de saisonnalité forte
   - Impact = "none"

6. **RECOMMANDATION FINALE**
   - Pattern lunditype + cycle 2 semaines = très prévisible
   - Baseline 2.8u arrondie à l'entier = 3 unités
   - Confiance = HIGH (5 points de données, pattern parfait, régularité extrême)
   - Stratégie : Viser la quantité PROBABLE (3u) plutôt que de sur-commander par prudence


</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque lundi - Cycle hebdomadaire régulier (5 commandes sur 5 lundis dans les 3 derniers mois)
- **Saisonnalité**: none
- **Tendance**: Stable avec volatilité légère - Moyenne: 3.2u, médiane: 3u, amplitude: 2-5u
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ PATTERN DÉTECTÉ:
• Toutes les 5 commandes (100% des données) = LUNDI
• Intervalles: 14j (lun 22→lun 8 = skip 1 semaine), puis 14j, puis 14j, puis 28j
• Pattern FORT: Commande bi-hebdomadaire (tous les 2 lundis) avec possible variation mensuelle

2️⃣ FILTRAGE OUTLIERS:
• Pic le 25/08 (5u) = +56% vs moyenne
• Autres valeurs: 2u (min), 3u (mode=3), 3u, 3u
• La valeur 5u semble isolée - Hypothèse: promotion, commande groupée, ou rattrapage
• Exclusion de 5u de la baseline → Moyenne stable: (3+2+3+3)/4 = 2.75u ≈ 3u

3️⃣ SAISONNALITÉ:
• Aucune donnée N-1 disponible → Impact = NONE
• Q3 (juillet-septembre) ≠ Q4 (octobre) : Possibilité faible d'effet saisonnier précoce
• En agroalimentaire, chips premium N-1 inexistant → Pas de comparaison

4️⃣ TENDANCE DIRECTION:
• Série temporelle sur 12 semaines: 3→2→5→3→3
• Pas de progression linéaire claire
• Volatilité = ±1u autour de 3u
• Verdict: STABLE (tendance = 0%, oscillations normales)

5️⃣ DÉCISION - CALCUL FINAL:
• Baseline déduite: 3.2u (moyenne avec 5u, prudence légère)
• Ajustement saisonnier: 0% (pas de N-1)
• Ajustement tendance: 0% (stable)
• **Prédiction brute: 3.2u**
• Arrondi entier: **3u** (plus probable que 4u selon mode observé)
• Alternative prudente: 4u (+25% de marge) → Mais règle d'or supply chain agro: viser la PROBABILITÉ, pas le pessimisme

✅ CONFIANCE: MEDIUM
- Points forts: Pattern hebdomadaire très régulier (100% des lundis), 5 observations fiables
- Points faibles: Pas de N-1, dataset limité (12 semaines), 1 outlier non expliqué, dimanche ≠ lundi

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire fixe: chaque lundi (5 commandes consécutives sur 5 lundis en 3 mois). Intervalle régulier de 15 jours entre les lundis observés (2025-09-22, 2025-09-08, 2025-08-25, 2025-08-11, 2025-07-14).
- **Saisonnalité**: none
- **Tendance**: Stable avec fluctuations mineures autour de 2.6u. Pic isolé à 5u le 2025-07-14 (possible promotion ou commande rattrapage), suivi d'une normalisation. Tendance de fond très stable.
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** : Le client REB08 a un pattern de commande EXTRÊMEMENT régulier : tous les lundis sans exception (5 lundis/5 commandes en 3 mois). Intervalle parfait de ~15 jours entre chaque lundi. La date de prédiction est un DIMANCHE (2025-10-05), la veille du lundi habituel (2025-10-06). Le prochain cycle lundi sera dans ~1 jour.

**FILTRAGE OUTLIERS** : La commande de 5u (2025-07-14) est un pic isolé comparé aux autres (2-3u). Toutes les autres commandes (2025-09-22: 3u, 2025-09-08: 2u, 2025-08-25: 3u, 2025-08-11: 1u) oscillent autour de 2-3u. Le 5u semble être un événement exceptionnel (potentiel rattrapage ou promotion) et non la tendance régulière.

**CALCUL BASELINE** : Exclusion du pic à 5u. Moyenne des 4 commandes normales = (3+2+3+1)/4 = 2.25u. Médiane des 4 = (2+3)/2 = 2.5u. Considérant la stabilité du pattern, moyenne pondérée avec plus de poids sur les 2 dernières : (3×0.4 + 2×0.3 + 3×0.2 + 1×0.1) = 2.6u ≈ **2.8u en baseline théorique** (avec lissage).

**SYNTHÈSE** : 
- Pas de saisonnalité N-1 (données indisponibles)
- Trend STABLE (pas de hausse/baisse progressive observable)
- Pattern lundi verrouillé (très haute fiabilité)
- Prédiction pour dimanche 2025-10-05 = le client commandera lundi 2025-10-06

**QUANTITÉ RECOMMANDÉE = 3u** : C'est la dernière commande (2025-09-22) et représente le mode des demandes récentes (plus fréquent que 2u ou 1u). En agro B2B, on vise la PRÉCISION plutôt que la surcharge : 3u minimise le risque de sur-stockage tout en répondant à la demande régulière du client.

**CONFIANCE = HIGH** : Pattern extrêmement régulier (100% de fiabilité sur 5 observations consécutives), rhythme lundi verrouillé, pas de rupture tendance = base de prédiction très solide.

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire le lundi, cycles réguliers de 15-17 jours
- **Saisonnalité**: none
- **Tendance**: Stable à ~2u, avec un pic à 3u le 14-07-2025
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : Les 4 commandes disponibles suivent un pattern très régulier, TOUTES passées un lundi : 22-09 (L), 08-09 (L), 25-08 (L), 14-07 (L). L'intervalle moyen entre commandes est de ~15-17 jours, ce qui sugère un cycle hebdomadaire avec possibilité de semaines intercalées ou d'un rythme bimensuel stable.

PRÉDICTION POUR LE 05-10-2025 (dimanche) : Cette date est un dimanche, soit 13 jours après la dernière commande du 22-09 (lundi). Le client ne commande JAMAIS le dimanche selon l'historique. Cependant, la prédiction demandée est pour ce dimanche : je vais supposer une commande anticipée ou un décalage calendrier. Si cette prédiction représente la prochaine commande attendue, elle devrait survenir le 27-10 (lundi prochain du cycle) ou plus tôt. Néanmoins, en prédisant pour le 05-10, je dois extrapoler le volume attendu selon le cycle : 13 jours après dernière commande = point normal du cycle hebdomadaire.

VOLUMES OBSERVÉS : 3 commandes à 2u (récent & tendance), 1 commande à 3u (14-07). Pas de données N-1 pour saisonnalité. Le pic à 3u est isolé et pourrait être événementiel, mais trop peu de contexte pour confirmer.

SAISONNALITÉ : Absence totale de données N-1 et historique très court (4 données) → impact saisonnier impossible à évaluer avec certitude. Impact estimé : "none".

TENDANCE : Dominante stable autour de 2u avec moyenne = (2+2+2+3)/4 = 2,25u. Pas de baisse ou hausse nette, stabilité claire.

DÉCISION FINALE : Baseline 2u est fondée sur 3 confirmations récentes. La prédiction pour dimanche 05-10 correspond logiquement à la période du cycle 15-17j → quantité = 2u. Confiance medium car : (✓) Pattern très régulier et clair, (✓) Données convergentes récentes, (✗) Historique court, (✗) Pas de N-1, (✗) Jour hors-cycle normal (dimanche vs lundi habituel).

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire lundi - commandes toutes les semaines (ou presque) le lundi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% : de 2-4u en 2024 à 1-2u en 2025
- **Outliers détectés**: 4u, 3u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1️⃣ **PATTERN RYTHMIQUE** 
   - Historique récent (3 derniers mois): 4 commandes LES 4 LUNDIS
     * 2025-09-22 (lun) → 1u
     * 2025-09-08 (lun) → 1u
     * 2025-08-25 (lun) → 1u
     * 2025-07-14 (lun) → 2u
   - **Cycle parfaitement régulier: chaque lundi (intervalle ~14-21j)**
   - Dernière commande: 22 sept (lundi) | Prochaine commande attendue: 29 sept (lun) ou 6 oct (lun)
   - Date de prédiction = 5 octobre (dimanche) → VEILLE du cycle lundi attendu
   - ⚠️ **RUPTURE MINEURE**: Pas de commande le 29 sept observée → cycle retardé d'une semaine → prochaine commande le 6 oct (lundi)

2️⃣ **ANALYSE SAISONNIÈRE (N-1 vs N)**
   - **N-1 (Automne 2024)**: 3u (sept), 4u (août), 2u (juin) → moyenne ~3u
   - **N (Automne 2025)**: 1u (sept), 1u (août), 2u (juillet) → moyenne ~1.3u
   - **Chute de -60%** → Demande structurellement en baisse (client a réduit son activité ou changé de fournisseur)
   - Saisonnalité FAIBLE: pas de pic automnal remarquable

3️⃣ **FILTRAGE OUTLIERS**
   - Pics N-1 (3-4u) = contexte différent, non répétables → exclure de baseline
   - Stabilité N (1-2u) = vraie tendance → utiliser comme référence

4️⃣ **TREND & BASELINE**
   - **Tendance nette**: Baisse -50% en 12 mois
   - **Derniers 4 commandes**: 2u, 1u, 1u, 1u → moyenne = 1.25u
   - **Moyenne pondérée (poids 80% sur 3 dernières)**: 0.8×(1+1+1)/3 + 0.2×2 = 0.8 + 0.4 = 1.2u

5️⃣ **DÉCISION FINALE**
   - Client commande régulièrement les LUNDIS
   - Quantité stable à 1-2u (dernièrement plutôt 1u)
   - Pas d'événement exceptionnel prévisible en octobre
   - **Baseline = 1.5u** (moyenne conservatrice entre 1 et 2)
   - **Quantité recommandée = 1u** (correspond à 75% des 4 dernières commandes)
   
   En agro B2B: minimiser le risque de surstock (produit frais, 250g). La demande a baissé structurellement → respecter ce signal plutôt que de gonfler.

6️⃣ **CONFIANCE: HIGH**
   - ✅ Pattern parfaitement régulier (4 commandes = 4 lundis)
   - ✅ Tendance claire et stable depuis 3 mois
   - ✅ Pas d'ambiguïté dans la saisonnalité
   - ✅ Cycle de commande prévisible
   - ⚠️ Seul risque: si 5 oct (dimanche) = commande exceptionnelle dimanche → mais improbable en B2B

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire fixe le lundi (100% des 4 dernières commandes récentes)
- **Saisonnalité**: weak
- **Tendance**: Baisse nette -75% : N-1 moyennes 3u → N récent stable à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1️⃣ ANALYSE RYTHMIQUE - Pattern très clair :
   • Les 4 dernières commandes (juil-sep 2025) : TOUTES le LUNDI
   • Intervalles : ~27-28 jours régulièrement espacés
   • Rythme hebdomadaire rigide identifié
   
2️⃣ GESTION DE LA DATE PRÉDICTION (dimanche 2025-10-05) :
   • La prédiction est demandée un DIMANCHE (hors cycle)
   • Le prochain lundi = 2025-10-06 (demain)
   • Cette commande devrait logiquement arriver LUNDI prochain = juste après la date prédiction
   • Pattern = "lundi fixe" → appliquant le pattern: 1 unité attendue demain

3️⃣ TENDANCE QUANTITATIVE - Baisse structurelle :
   • N-1 (2023-2024) : moyenne 3u (4u, 3u, 3u, 3u, 3u, 3u, 2u, 2u)
   • N-1 à N : -75% de réduction
   • N récent (3 derniers mois) : STABLE à 1u sans exception
   • 🚨 Pas de tendance haussière observée → pas de rattrapage prévisible

4️⃣ SAISONNALITÉ :
   • Octobre N-1 : AUCUNE donnée (hiatus)
   • Pas de pic identifié en octobre N-1
   • Impact saisonnier = WEAK (données insuffisantes + stabilité récente)

5️⃣ OUTLIERS :
   • 2024-01-09 : 4u (aberration ponctuelle vs moyenne 3u) = EVENT exceptionnel
   • Contexte N-1 : contamination possible lors collecte données
   • Impact sur prédiction : NEUTRALISÉ (pattern récent = 1u)

✅ CONCLUSION LOGIQUE :
   • Pattern rigide lundi = FORTE confiance
   • Stabilité 1u sur 4 commandes récentes = segment déstabilisé ou client rationalisé
   • Pas de signal de hausse
   • Prédiction = demande la plus probable = 1 unité (baseline N-récent)
   • Confidence = HIGH (pattern temporel net + constance quantitative)

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque lundi (100% des commandes récentes: 22 sept, 8 sept, 25 août, 11 août, 14 juillet). Régularité très forte et cohérente sur les 5 dernières commandes.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -60% sur 3 mois: 3u → 1u → 2u → 2u → 3u (dernière récente: 3u du 22 sept). La moyenne mobile penche vers 2,2u avec oscillations.
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
**ANALYSE DÉTAILLÉE:**

1. **PATTERN TEMPOREL IDENTIFIÉ**
   - Les 5 dernières commandes sont TOUTES en LUNDI (100% de régularité)
   - Intervalles réguliers: 14 jours entre chaque (07/14 → 08/11 → 08/25 → 09/08 → 09/22)
   - Client a un cycle HEBDOMADAIRE-STABLE: chaque lundi
   
2. **GESTION DE LA DATE DEMANDÉE**
   - Date prédiction: 2025-10-05 = DIMANCHE
   - Prochain lundi: 2025-10-06 (DEMAIN)
   - Le dimanche n'est PAS un jour de commande habituel
   - → La prédiction se rapporte au prochain cycle régulier = lundi 06 octobre
   - OU il y a décalage ponctuel → Mais client historiquement commande le lundi

3. **ANALYSE QUANTITÉS RÉCENTES (3 mois)**
   - 22 sept (L): 3u
   - 08 sept (L): 1u ← OUTLIER NOTABLE (anomalie ponctuelle, baisse drastique)
   - 25 août (L): 2u
   - 11 août (L): 2u
   - 14 juil (L): 3u
   - Moyenne réelle: 2,2u
   - Mode (plus fréquent): 2u et 3u (bimodal)
   - Tendance dernière semaine: 3u (signal de redémarrage après creux)

4. **SAISONNALITÉ N-1 (Octobre 2024)**
   - 2024-09-03 (mar): 4u
   - 2024-08-06 (mar): 5u
   - Pas de donnée directe octobre N-1, donc impact faible
   - Historique global N-1: moyenne 4,2u (contraste: 2,2u actuellement)

5. **DÉTECTION OUTLIERS**
   - 1u (08 sept) = anomalie claire, sous la normale
   - Hypothèse: Cas exceptionnel (rupture de stock client, fermeture, problème supply)
   - → À IGNORER pour la prédiction normale

6. **DÉCISION FINALE**
   - Baseline = 2,2u (moyenne robuste sans outlier)
   - Dernière commande = 3u (signal positif, +36% vs moyenne)
   - Pattern: Stable avec légère oscillation 2-3u
   - Saisonnalité faible pour octobre (pas de pic récurrent clairement identifié)
   - → PRÉDICTION = 3u
   
**JUSTIFICATION: 3u minimise le MAPE en ciblant:**
- La dernière observation (signal le plus frais)
- Le mode observé récemment (3u apparaît 40% du temps)
- Recuperation post-anomalie du 08 sept
- Pattern stable sans rupture nette

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuée irrégulière - 2 observations: 08/11 (lundi) et 09/08 (lundi), intervalle ~28 jours. Absence de clarté sur le vrai cycle (hebdomadaire vs mensuel) avec données extrêmement limitées.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u (données insuffisantes pour détecter une tendance)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
CONTEXTE CRITIQUE : Données extrêmement limitées (n=2 observations seulement sur 3 mois).

ANALYSE RYTHMIQUE :
- Commande 1: 2025-08-11 (lundi) | 1u
- Commande 2: 2025-09-08 (lundi) | 1u
- Intervalle: 28 jours exactement
- Les 2 commandes tombent un LUNDI → pattern jour de semaine identifié
- Aucune donnée N-1 pour valider la saisonnalité

DATE DE PRÉDICTION : 2025-10-05 (dimanche)
- Décalage critique: la prédiction porte sur un DIMANCHE, alors que les commandes historiques tombent LUNDI
- Si le client respecte un cycle de 28j depuis le 09/08 → prochaine commande logique: ~06/10 (lundi)
- Prédiction demandée: 05/10 (dimanche) = JOUR HORS CYCLE

INTERPRÉTATION :
1. Scénario probable: le client commande tous les 28-30 jours, toujours un LUNDI
2. Scénario dimanche 05/10 : soit commande anticipée (rare B2B agroalimentaire), soit pas de commande ce jour
3. Compte tenu de la très faible quantité unitaire (1u) et du pattern très régulier, l'absence de commande le dimanche est plus probable qu'une anomalie

DÉTERMINATION BASELINE :
- Moyenne historique: 1u par commande
- Aucune tendance détectable (n=2, stabilité)
- Aucun outlier identifié
- Baseline = 1u

RECOMMANDATION :
En stricte application du pattern détecté (cycles mensuels, lundi), la prédiction pour un DIMANCHE résulte en probabilité faible de commande. Cependant, la fonction requiert un entier ≥1. 
Recommandation: **1 unité** (si le client passe exceptionnellement commande ce dimanche, il respecterait son profil de 1u)

**CONFIANCE: LOW** - Données insuffisantes (n=2), discontinuité jour de semaine, pas de N-1 pour valider saisonnalité, et date prédite hors du cycle probable.

</details>


<details>
<summary><strong>14. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 15 jours approximativement, préférentiellement le lundi (3 commandes sur 3 les lundis)
- **Saisonnalité**: none
- **Tendance**: Stable à 1.33u en moyenne, avec une variation ponctuelle à 2u le 2025-08-11
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE EN CHAÎNE DE PENSÉE:

**1. ANALYSE RYTHMIQUE - Pattern de commandes:**
   • Historique: 2025-09-08 (lun) → 2025-08-25 (lun, -14j) → 2025-08-11 (lun, -14j)
   • Pattern TRÈS clair: Commandes tous les 15 jours environ, TOUJOURS le lundi
   • Dernière commande: lundi 08-09-2025 → Prochain cycle attendu: lundi 22-09-2025 ou 29-09-2025
   • Date de prédiction: dimanche 05-10-2025 (hors-cycle, entre deux cycles)

**2. GESTION DU JOUR HORS-CYCLE:**
   • Dimanche 05-10 est hors-cycle (le client commande les lundis)
   • Scenario: Commande exceptionnelle un dimanche, ou prédiction pour une demande hypothétique
   • Risque: Très peu de données (N=3 commandes seulement) → Bruit statistique élevé

**3. FILTRAGE OUTLIERS & TENDANCE:**
   • Quantités observées: 1u, 1u, 2u (moyenne = 1.33u)
   • La valeur 2u du 2025-08-11 peut être:
     ✓ Un pic saisonnier (mois d'août?) - Aucune donnée N-1 pour confirmer
     ✗ Un rattrapage suite à rupture (pas d'évidence dans les dates)
     ✗ Une erreur - Données trop peu nombreuses pour distinguer
   • Interprétation conservatrice: Maintien 1u comme baseline; 2u étant ponctuel

**4. SAISONNALITÉ:**
   • Pas de données N-1 disponibles → Pas de pattern saisonnier identifiable
   • Octobre vs août: Produit JAM organique → Possible pic saisonnier automne? (confitures de rentrée)
   • Absence de confirmation: Impact saisonnel = NONE

**5. SYNTHÈSE DÉCISION:**
   • Demande de fond = 1u (2 commandes sur 3)
   • Tendance = Stable (pas de hausse/baisse nette visible)
   • Confidence très basse: Seulement 3 data points, 1 cycle complet incomplet
   • Recommandation = 1u (mode/médiane et probabilité la plus haute)

**⚠️ LIMITES CRITIQUES:**
   - Corpus extrêmement réduit (3 commandes)
   - Pas de données N-1 pour valider saisonnalité
   - Date de prédiction hors-cycle (dimanche vs lundi habituel)
   - Impossible de distinguer signal du bruit statistique
   → Confiance BASSE justifiée

**RECOMMANDATION FINALE:** 1 unité (estimation la plus conservatrice et probable)

</details>


<details>
<summary><strong>15. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande à intervalles irréguliers, environ tous les 28 jours le lundi (pattern mensuel lâche)
- **Saisonnalité**: none
- **Tendance**: Stable à ~1.33u, légère hausse sur dernière commande (2u le 11/08)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE** :
   - 3 commandes seulement sur 3 mois : données très insuffisantes
   - Intervalle 1 : 14/07 → 11/08 = 28 jours
   - Intervalle 2 : 11/08 → 08/09 = 28 jours
   - Pattern détecté : Cycle de ~28 jours, toujours un lundi
   - Prédiction 05/10/2025 (dimanche) : ⚠️ RUPTURE DE PATTERN (client commande normalement le lundi)
   
   → Le client devrait commander DEMAIN (06/10 lundi) selon le cycle régulier

2. **QUANTITÉS OBSERVÉES** :
   - 14/07 : 1u
   - 11/08 : 2u
   - 08/09 : 1u
   - Moyenne : 1.33u
   - Dernière commande revient à 1u (retour à baseline après probable pic d'approvisionnement)
   - Aucun outlier identifié (pas de promotion visible, pas d'erreur flagrante)

3. **SAISONNALITÉ** :
   - Aucune donnée N-1 → impossibilité d'identifier un pattern saisonnier automnal
   - Impact : "none" par défaut
   - Octobre n'est pas typiquement saisonnier pour confiture (pas de crise agricole connue)

4. **TREND** :
   - Dernière donnée (1u) = valeur la plus fiable et récente
   - Moyenne sur 3 points : 1.33u
   - Pas de hausse/baisse franche : stable

5. **GESTION DU JOUR HORS CYCLE** :
   - Date prédiction : 05/10 (dimanche)
   - Cycle habituel : lundi (28j)
   - Prochaine commande "sur rythme" : 06/10 (lundi)
   - **Interprétation** : Soit le client commande anticipé (dimanche avant fermeture), soit il n'y a PAS de commande dimanche et c'est une simulation hypothétique
   - En B2B agro, les commandes le dimanche sont exceptionnelles → **Probabilité très faible de commande ce jour**
   - Néanmoins, si commande : respecter l'historique (1u minimum)

6. **DÉCISION** :
   - Données trop peu nombreuses (N=3) → confiance intrinsèquement basse
   - Dernière valeur observée : 1u (plus fiable que moyenne)
   - Tendance : stable
   - **Recommandation : 1 unité**
   - Confidence : LOW (données insuffisantes, cycle long, rupture de jour)

</details>


<details>
<summary><strong>16. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes ponctuelles les lundis (25 août et 11 août 2025), intervalle de 14 jours détecté. Aucun pattern cyclique hebdomadaire établi - données insuffisantes pour confirmer récurrence.
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité - les deux dernières commandes identiques
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **Analyse Rythmique**:
   - Historique limité à 2 commandes seulement (données critiquement insuffisantes)
   - Commande 1: 25 août 2025 (lundi) - 1u
   - Commande 2: 11 août 2025 (lundi) - 1u
   - Intervalle: 14 jours (2 semaines) - suggère un pattern potentiel bi-hebdomadaire
   - Prochaine date prévisionnelle: 08 septembre 2025 si cycle 14j → mais nous sommes au 5 octobre 2025 (dimanche)
   - RUPTURE: Absence de commande entre le 25 août et le 5 octobre (41 jours d'inactivité)

2. **Observation Critique**:
   - Date de prédiction demandée: 5 octobre 2025 (dimanche)
   - Jours de commande historiques: lundis uniquement
   - Dimanche = jour inhabitu pour ce client
   - Possibilité: clients ayant commandé les 11 et 25 août ne montrent plus d'activité
   - Volume constant: 1u sur chaque commande = stabilité observée

3. **Saisonnalité**:
   - Aucune donnée N-1 pour calibrer la saisonnalité
   - Produit (Rhubarbe Bio) : potentiellement saisonnier (rhubarbe = printemps/été)
   - Impact: NONE faute de données de référence

4. **Gestion de l'Incertitude**:
   - Données quantitativement insuffisantes (n=2) pour modèle prédictif robuste
   - Seule certitude: demande minimale = 1u quand le client commande
   - Probabilité de commande le 5 octobre = FAIBLE (rupture 41 jours + jour inhabitu)

**PRÉDICTION**: 1 unité
- Justification: Si le client passe une commande, il commande 1u (100% des cas observés)
- Risk: La rupture depuis 25 août peut indiquer inactivité client
- Confiance: FAIBLE - trop peu de données pour valider pattern

</details>


<details>
<summary><strong>17. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, intervalles variables (25-90 jours). Récemment: 42 jours entre juillet et août 2025. Pattern hébdomadaire très faible - mélange de lundi, mardi, vendredi. Absence de jour fixe récurrent.
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u (demande de fond), avec un pic exceptionnel à 3u en mars 2024 (outlier)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE CHAIN OF THOUGHT:**

1. **ANALYSE RYTHMIQUE**
   - Dernière commande: 2025-07-14 (lundi) → 2 unités
   - Avant: 2025-08-25 (lundi) → 2 unités
   - Intervalle: 42 jours
   - Historique complet: intervalles très variables (25j, 90j, 120j+)
   - Conclusion: AUCUN pattern hebdomadaire strict. Client ne commande pas "chaque lundi" ni "chaque mardi"
   - Le jour de prédiction (dimanche 2025-10-05) est HORS cycle habituel (client préfère Lun-Mar-Ven)

2. **COMPORTEMENT CLIENT**
   - 9 commandes sur ~24 mois = cycle très long (~2,7 mois entre chaque)
   - Sur les 3 derniers mois (depuis 2025-07-14): UNE SEULE commande (42 jours ago)
   - Depuis 2025-08-25: 41 jours se sont écoulés jusqu'à la prédiction (2025-10-05)
   - Le délai de 42j entre juillet-août pourrait suggérer une nouvelle commande prochainement
   - Mais données insuffisantes pour confirmer un cycle régulier

3. **FILTRAGE OUTLIERS**
   - Pic à 3u le 2024-03-19: OUTLIER (seul pic, jamais répété)
   - Reste des commandes: 100% à 2u ou 1u
   - Référence baseline: 2u

4. **SAISONNALITÉ (N-1)**
   - Octobre 2024: aucune donnée disponible
   - Septembre 2024: commande de 2u (2024-09-03)
   - Août 2024: commande de 2u (2024-08-06)
   - Impact faible: pas de pic récurrent en octobre identifié
   - Produit "Tarti Pomme Raifort" = produit stable sans saisonnalité marquée (pomme+raifort = saveurs d'automne/hiver, mais demande restée à 2u)

5. **DÉCISION FINALE**
   - Demande de fond stable: 2u
   - Tendance récente: confirmée à 2u
   - Jour de prédiction (dimanche): hors habitude, mais ne change pas la quantité
   - Sans evidence de changement: maintien de la baseline
   - Recommandation: **2 unités**

**Confiance: MEDIUM** (peu de données récentes, rythme client très irrégulier, mais demande claire et stable)

</details>




### 📊 Données d'Input LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 5u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 3u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 4u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 5u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 3u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 2u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-07-14 11:44:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 4u
- 2024-06-11 06:44:54: 2u
- 2024-05-13 13:42:50: 4u
- 2024-04-15 11:54:11: 2u
- 2024-03-19 14:47:15: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 3u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 2u
- 2024-06-11 06:44:54: 3u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 3u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 2u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 4u
- 2024-08-06 09:10:28: 5u
- 2024-06-11 06:44:54: 4u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 5u
- 2024-03-19 14:47:15: 5u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 5u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**📊 Quantité Médiane (fallback)**: 1u
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 2u
- 2024-05-13 13:42:50: 2u
- 2024-03-19 14:47:15: 3u
- 2024-02-09 08:53:20: 2u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (15)

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.6u (20j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: -0.6u (-4j restants) → prédit 1u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 0 | Stock prédit: 0.6u (15j restants) → prédit 0u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock prédit: -1.1u (-13j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -2.3u (-27j restants) → prédit 1u mais non commandé |
| [LEA07] LEAMO orangeade bio 330ml | 1 | Stock prédit: -2.9u (-40j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 2 | Stock prédit: -1.3u (-30j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: -1.0u (-26j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -1.0u (-26j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.7u (-41j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-26j restants) → prédit 1u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Stock prédit: -1.6u (-68j restants) → prédit 1u mais non commandé |


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
| [VID0009] Consigne casier | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 24 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T10:12:32.111Z*
