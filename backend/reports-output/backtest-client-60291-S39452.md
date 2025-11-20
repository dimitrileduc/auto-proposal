# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S39452
- **Date commande** : 2025-10-01 07:17:25
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 21
- **Tokens**: 42,699 input + 12,111 output = 54,810 total
- **Coût**: $0.3098 (~30.98¢)
- **Coût par produit LLM**: $0.0148


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.5% | 29 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
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
| **MAE** | 0.90 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 64.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 80.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 64.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [fsv17] Mélange de noix bio vrac 2,75kg | 4 | 1 | 3.0 | 300.0% | ✅ partial | 🤖 LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~14-18j - Transition vers hebdomadaire mercredi
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (4u → 2u sur 10 semaines)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- 22/07 (mar) → 19/08 (mar) : 28j | 4u → 3u
- 19/08 (mar) → 02/09 (mar) : 14j | 3u → 2u
- 02/09 (mar) → 17/09 (mer) : 15j | 2u (stable)
- 17/09 (mer) → 24/09 (mer) : 7j | 2u (stable)
→ Pattern évolue vers un rythme hebdomadaire mercredi (2 dernières commandes)
→ La prédiction tombe un **mercredi 01/10**, soit 7j après la dernière commande du 24/09 (mer)

**FILTRAGE OUTLIERS:**
- 4u en juillet = anomalie haute (démarrage ou test produit)
- Tendance baissière claire : 4u → 3u → stabilisation à 2u
- Les 3 dernières commandes sont constantes à 2u (nouvelle baseline établie)

**TENDANCE:**
- Baisse de 50% entre juillet-août, puis **stabilisation totale à 2u** depuis début septembre
- Aucune saisonnalité N-1 disponible
- Le client semble avoir trouvé son rythme de croisière : 2u chaque semaine (mercredi)

**DÉCISION:**
- Prédiction au 01/10 (mercredi) = respect du pattern hebdomadaire mercredi
- 3 commandes consécutives à 2u = signal fort de demande stabilisée
- Aucun élément ne justifie une déviation de cette baseline
→ **Recommandation : 2 unités** (précision maximale sur tendance établie)

</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Variable ~14-28j, majoritairement mardi-mercredi
- **Saisonnalité**: none
- **Tendance**: Baisse légère -30% (de 4-5u vers 2-3u)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le client commande de façon irrégulière tous les 14-28 jours, avec une préférence pour les mardis et mercredis. Les intervalles observés : 28j (22/07→19/08), 14j (19/08→02/09), 15j (02/09→17/09), 7j (17/09→24/09). Le 24/09 a vu une commande de seulement 2u après un intervalle court de 7j, suggérant un cycle de réapprovisionnement qui s'accélère. Depuis le 24/09, 7 jours se sont écoulés au 01/10, ce qui pourrait indiquer un nouveau cycle.

**Détection outliers**: La commande de 5u du 19/08 semble être un pic exceptionnel dans un contexte de volumes habituels de 2-4u. Les autres commandes (2-4u) représentent mieux la demande récurrente.

**Tendance**: On observe une baisse progressive : 4u (juillet) → 5u outlier (août) → 3u → 4u → 2u (septembre). La moyenne des 3 dernières commandes (hors outlier) est de 3u (3+4+2)/3=3u.

**Décision**: Pas de saisonnalité N-1 disponible. La demande de fond stabilisée autour de 3u. Le client a commandé 2u il y a 7 jours (24/09), ce qui suggère un stock résiduel faible au 01/10. Pattern récent pointe vers 3u comme quantité normale de réapprovisionnement après filtrage du pic de 5u.

</details>


<details>
<summary><strong>3. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable 14-28 jours, majoritairement mardi-mercredi, commandes récentes rapprochées (7j)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation 2-3u (moyenne 2.8u), pic isolé 4u le 17/09
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**Analyse rythmique** : Le client commande de façon irrégulière avec intervalles variables (28j entre 22/07 et 19/08, puis 14j, puis 7j deux fois). Les 3 dernières commandes montrent un rapprochement net du rythme (7j), probablement lié à une rotation plus rapide du stock.

**Jours de commande** : Majoritairement mardi-mercredi (4/5 commandes), la prédiction au 01/10 (mercredi) tombe pile dans ce pattern.

**Filtrage outliers** : Le 4u du 17/09 est suspect (double du volume standard). Toutes les autres commandes oscillent entre 2-3u. Je l'identifie comme probable événement ponctuel (promotion, rattrapage stock).

**Tendance** : Sur les 5 dernières commandes (hors outlier 4u) : 3u, 3u, 2u, 2u = moyenne 2.5u. Pas de tendance haussière/baissière nette, demande de fond stable.

**Décision** : Avec un cycle récent de 7j (dernière commande le 24/09), la prochaine commande au 01/10 suit le rythme. La demande de fond étant 2.5u et le dernier ordre étant 2u (possiblement sous le besoin réel), je vise **3u** comme quantité la plus probable - conforme au volume standard hors outlier et au pattern mardi historique (3u les 19/08 et 22/07).

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (25-35 jours) sans jour fixe de la semaine
- **Saisonnalité**: none
- **Tendance**: Stable - Oscillation entre 1-2u sans tendance claire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes montrent un pattern irrégulier avec des intervalles de ~27 jours (14/07→19/08), ~14 jours (19/08→02/09), et ~15 jours (02/09→17/09). Pas de jour fixe identifiable (lun, mar, mar, mer). La prochaine commande au 01/10 représenterait un intervalle de ~14 jours depuis le 17/09, cohérent avec la cadence récente.

**FILTRAGE OUTLIERS**: Aucun pic exceptionnel détecté. Les quantités oscillent naturellement entre 1u et 2u sans événement promotionnel apparent.

**TENDANCE & SAISONNALITÉ**: Absence de données N-1 empêche l'analyse saisonnière. Sur les 3 derniers mois, la demande reste stable (2-1-2-2u). Pas de hausse ni baisse significative.

**DÉCISION**: La dernière commande (17/09) était de 2u, et historiquement 75% des commandes sont à 2u (3/4). Avec un intervalle de 14 jours depuis la dernière commande, le client suit un rythme de réapprovisionnement modéré. La baseline théorique de 1.75u s'arrondit logiquement à 2u, qui représente le mode statistique et la quantité la plus probable pour ce produit à faible rotation.

</details>


<details>
<summary><strong>5. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM: 4u vs Médiane: 5u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 4u (400.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes espacées de 44 jours (04/08→17/09), puis 14 jours jusqu'à date prédiction (17/09→01/10)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantités homogènes (4-5u) mais historique trop court
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE**: Historique extrêmement limité (seulement 2 commandes sur 2 mois) sans données N-1 pour référence saisonnière.

**ANALYSE RYTHMIQUE**: 
- Intervalle 1: 44 jours (04/08→17/09)
- Intervalle projeté: 14 jours (17/09→01/10) 
- Pattern NON stabilisé - impossible de confirmer un cycle récurrent
- La commande du 17/09 (mercredi, 5u) est la plus récente et pertinente

**TENDANCE**: 
- Quantités observées: 4u puis 5u
- Variation minime (+25% mais sur base faible)
- Pas de signal clair de croissance ou décroissance
- Moyenne simple: 4.5u

**DÉCISION**: 
Face à l'absence de pattern établi et la proximité temporelle incertaine de la prochaine commande (14 jours depuis dernière vs 44 jours avant), je privilégie la **prudence statistique** avec une légère pondération vers la donnée la plus récente. La baseline théorique de 4.5u me conduit à recommander **4 unités** (arrondi conservateur) plutôt que 5, car:
1. Le cycle n'est pas confirmé (2 points insuffisants)
2. La commande peut intervenir plus tard que le 01/10
3. En B2B bio vrac, la fraîcheur prime sur le surstock

**CONFIANCE BASSE** justifiée par le manque criant de profondeur historique.

</details>


<details>
<summary><strong>6. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes en 3 mois (intervalle 44 jours), historique insuffisant
- **Saisonnalité**: none
- **Tendance**: Hausse +50% (2u → 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Contexte critique** : Historique extrêmement limité (seulement 2 commandes sur 3 mois), absence totale de données N-1, impossible d'identifier un pattern fiable.

**Analyse rythmique** : Les 2 commandes sont espacées de 44 jours (4 août → 17 septembre), sans pattern hebdomadaire ou mensuel clair. La date de prédiction (1er octobre) se situe 14 jours après la dernière commande, ce qui pourrait correspondre à un cycle bimensuel émergent, mais sans confirmation historique.

**Tendance observée** : Progression de 2u à 3u (+50%), ce qui suggère soit une croissance de la demande client, soit une simple variation de commande ponctuelle.

**Décision** : En l'absence de données structurantes, je privilégie la **dernière valeur observée (3u)** comme meilleur prédicteur, car :
- Elle représente la demande la plus récente du client
- L'intervalle de 14 jours depuis la dernière commande reste dans une zone plausible de réapprovisionnement
- La baseline théorique (moyenne 2,5u) est ajustée à 3u pour refléter la dynamique récente

**Confiance faible** justifiée par le manque criant de données historiques pour valider quelque pattern que ce soit.

</details>


<details>
<summary><strong>7. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (25-40 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable - commandes unitaires faibles (1-2u)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: L'historique montre 3 commandes sur 3 mois (14 juillet, 19 août, 2 septembre). Les intervalles sont de ~36 jours puis ~14 jours, suggérant un pattern irrégulier sans cycle hebdomadaire fixe. La dernière commande date du 2 septembre (29 jours avant la prédiction du 1er octobre), ce qui correspond à une fenêtre de réapprovisionnement plausible.

**FILTRAGE OUTLIERS**: La commande de 2u du 2 septembre représente le double du volume habituel (1u). Sans contexte additionnel et avec seulement 3 points de données, je l'identifie comme potentiellement exceptionnelle, mais cela pourrait aussi signaler une légère hausse.

**SAISONNALITÉ**: Aucune donnée N-1 disponible. Impossible d'identifier un pattern saisonnier. Impact: none.

**TENDANCE**: Les volumes restent très faibles (1-2u). Pas de tendance haussière claire - le produit semble être en phase de test ou commande d'appoint occasionnelle.

**DÉCISION**: En l'absence de pattern fort et avec des volumes historiques de 1u majoritairement, je recommande la quantité de base de **1 unité**. La commande de 2u étant isolée, je privilégie la prudence statistique. Confiance moyenne car l'historique est limité (3 points seulement).

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~30-45j), commandes systématiques le Mardi
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité (1-2u)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le client commande exclusivement le MARDI avec un rythme mensuel irrégulier (22/07→19/08 = 28j, 19/08→02/09 = 14j). La prédiction est pour un mercredi (01/10), soit 29 jours après la dernière commande du 02/09.

**Pattern détecté**: 
- 22/07: 1u (mar.)
- 19/08: 2u (mar.) - OUTLIER probable (double quantité ponctuelle)
- 02/09: 1u (mar.) - retour à la normale

**Filtrage outlier**: La commande de 2u du 19/08 apparaît exceptionnelle car encadrée par des commandes de 1u. Possible commande de rattrapage ou anticipation.

**Tendance**: Demande de fond stable à 1 unité. Pas de saisonnalité N-1 détectable (aucune donnée). Le rythme mensuel + jour fixe (mardi) suggère un réapprovisionnement régulier de faible volume.

**Décision**: Baseline = 1u (quantité modale hors outlier). La date de prédiction (mercredi) ne correspond pas au jour habituel de commande (mardi), mais le délai de 29j depuis la dernière commande justifie une commande imminente. Quantité recommandée: **1 unité** (demande de fond récurrente).

</details>




---

## False Positives (19)

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
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: 0.4u (3j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | Stock prédit: 2.1u (13j restants) → prédit 3u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 1.4u (13j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 2 | Stock prédit: 0.6u (19j restants) → prédit 2u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | Stock prédit: 0.8u (8j restants) → prédit 2u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: 0.6u (16j restants) → prédit 1u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 2 | Stock prédit: 0.4u (2j restants) → prédit 2u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | Stock prédit: 2.9u (18j restants) → prédit 5u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Stock prédit: 0.9u (23j restants) → prédit 2u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: -0.6u (-16j restants) → prédit 1u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.5u (28j restants) → prédit 1u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -1.0u (-30j restants) → prédit 1u mais non commandé |


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
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Stock suffisant: 0.7u (37j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-20T09:00:24.834Z*
