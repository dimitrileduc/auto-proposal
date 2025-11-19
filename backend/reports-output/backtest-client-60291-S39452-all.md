# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S39452
- **Date commande** : 2025-10-01 07:17:25
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 21
- **Tokens**: 32,508 input + 23,591 output = 56,099 total
- **Coût**: $0.4514 (~45.14¢)
- **Coût par produit LLM**: $0.0215


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
| **MAE** | 1.20 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 110.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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
| [fsv17] Mélange de noix bio vrac 2,75kg | 5 | 1 | 4.0 | 400.0% | ✅ partial | 🤖 LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

## ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)

Commandes analysées:
- 2u (24/09), 2u (17/09), 2u (02/09) = 2u répétitif
- 3u (19/08) = légèrement supérieur mais pas anormal
- 4u (22/07) = **OUTLIER POTENTIEL** (2x la médiane)
- 2u (14/07), 2u (30/06), 2u (25/06) = 2u répétitif
- 1u (11/06) = minimum observé
- 2u (03/06) = 2u répétitif

Moyenne brute: 2.2u
Médiane: 2u
**Outlier identifié**: 4u (22/07) - probablement stockage préventif ou promotion

**Demande de fond réelle** (après nettoyage): ~2u par commande

## ÉTAPE 2: SAISONNALITÉ

Produit analysé: Boisson aromatisée Citron-Framboise
- **Type de produit**: Boisson rafraîchissante = forte saisonnalité estivale
- Périodes observées:
  - Juin-Juillet (été): 2u, 2u, 1u, 2u, 4u (moyenne 2.2u avec outlier)
  - Août-Septembre (fin été/rentrée): 3u, 2u, 2u, 2u (moyenne 2.25u)
  
**Date actuelle**: 01/10/2025 = début octobre = **ENTRÉE EN PÉRIODE BASSE**
- Automne/hiver = consommation de boissons fraîches en baisse
- Nous sortons de la période estivale où le pic à 4u a été observé

**Ajustement saisonnier**: -20% (période basse imminente)

## ÉTAPE 3: TENDANCE RÉCENTE

**4 dernières commandes** (Sept 2025): 2u, 2u, 2u = ultra stable à 2u
**4 commandes précédentes** (Juil-Août): 3u, 4u, 2u, 2u = moyenne 2.75u

**Analyse**:
- Fréquence: ~7-15 jours entre commandes (assez régulier)
- Volume: Baisse légère de fin d'été vers automne déjà visible
- Stabilisation à 2u depuis septembre confirme la normalisation post-été

**Tendance détectée**: Légère baisse (-15%) déjà amorcée, cohérente avec sortie de saison

## ÉTAPE 4: RECOMMANDATION FINALE

**Calcul**:
- Base (demande de fond nettoyée): 2u
- Ajustement saisonnier (octobre = basse): -20%
- Ajustement tendance (baisse amorcée): déjà intégré dans la stabilisation à 2u
- Principe de prudence B2B: Ne pas sur-anticiper la baisse

**Synthèse**:
- Les 3 dernières commandes sont parfaitement stables à 2u
- Nous entrons en période creuse (octobre)
- Le client semble avoir un rythme bihebdomadaire stable
- En B2B agroalimentaire, les boissons rafraîchissantes baissent nettement en automne

**Recommandation**: 2 unités
- Maintient le flux sans rupture
- Évite le sur-stockage en période de baisse saisonnière
- Aligné sur la demande récente stabilisée


**📅 Analyse Temporelle:**

Fréquence de commande: 7-15 jours (régulier). Dernières commandes: 7j (24/09→17/09), 15j (17/09→02/09), 14j (02/09→19/08). Rythme stable bihebdomadaire. Depuis juin: 10 commandes en 4 mois = ~2.5 commandes/mois. Pas d'accélération ni ralentissement marqué.


**📊 Analyse Quantité:**

Distribution: 1u (1x), 2u (7x), 3u (1x), 4u (1x). Médiane: 2u. Mode: 2u (70% des cas). Outlier: 4u isolé en juillet (période estivale). Demande de fond: 2u très dominant. Septembre stabilisé à exactement 2u (3 commandes consécutives). Variation normale B2B constatée.


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
ÉTAPE 1 - DE-EVENTING:
Historique: 2u, 4u, 3u, 5u, 4u, 3u, 3u, 3u, 3u, 3u
Moyenne globale: 3.3u | Médiane: 3u
- La commande de 5u (19/08) est 1.5x la moyenne → possible pic mais pas extrême
- La commande de 4u récente (17/09) et 4u (22/07) sont dans la variation normale
- Aucun outlier franc à éliminer (pas de >2x la moyenne)
- Demande de fond réelle estimée: 3u (médiane stable)

ÉTAPE 2 - SAISONNALITÉ:
- Produit: Cola en verre → boisson rafraîchissante avec pic été attendu
- Juin-Août: quantités légèrement supérieures (5u, 4u, 4u) vs Sept (2u, 4u, 3u)
- Date actuelle: 01/10 → entrée automne/hiver = période BASSE pour sodas
- Impact: La saison actuelle justifie une révision À LA BAISSE de -10 à -15%

ÉTAPE 3 - TENDANCE RÉCENTE:
Les 4 dernières commandes: 2u, 4u, 3u, 5u (moy: 3.5u)
Les 6 précédentes: 4u, 3u, 3u, 3u, 3u, 3u (moy: 3.2u)
- Fréquence: ~7-14 jours en sept vs ~5-14 jours juin-août → légère stabilité
- Volume: Dernière commande de 2u (24/09) est la plus basse de l'historique
- SIGNAL IMPORTANT: Tendance baissière confirmée en sortie d'été
- Coefficient tendance: -10%

ÉTAPE 4 - RECOMMANDATION:
Base (demande de fond): 3u
Ajustement saisonnier (automne): -10% → -0.3u
Ajustement tendance (baisse récente): -10% → -0.3u
Calcul: 3 - 0.3 - 0.3 = 2.4u

Décision finale: 3u (arrondi conservateur)
Justification: Malgré les signaux baissiers, je reste à 3u plutôt que 2u car:
- Variation ±30% normale en B2B
- 3u = médiane historique solide
- Sécurité minimale contre rupture
- La dernière commande de 2u pourrait être ponctuelle (ajustement stock client)

**📅 Analyse Temporelle:**
Fréquence variable entre 5 et 15 jours. Dernières commandes: 7j (17→24/09), 15j (02→17/09), 14j (19/08→02/09). Moyenne inter-commande: ~10 jours. Pas d'accélération notable, plutôt une stabilisation autour d'1 commande tous les 10 jours en période récente.

**📊 Analyse Quantité:**
Quantités fluctuant entre 2u et 5u avec une médiane stable à 3u. Les 6 premières commandes (juin-juillet) montrent une forte stabilité à 3u, puis légère hausse en août (5u, 4u) correspondant à l'été, suivie d'une redescente en septembre (3u, 4u, 2u). La commande de 2u du 24/09 est la plus basse jamais observée, signal potentiel de baisse de demande saisonnière.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>3. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING:
L'historique montre 9 commandes sur ~6 mois (juin à septembre 2025).
Quantités: 2, 4, 2, 3, 3, 2, 2, 2, 2 unités.
- Moyenne globale: 2.4u
- Médiane: 2u
- La commande de 4u (17/09) est le seul point notable (1.67x la moyenne), mais pas suffisamment extrême pour être considéré comme outlier promotionnel (seuil 2x).
- Pas de pic isolé majeur détecté.
- Demande de fond réelle estimée: ~2-3u par commande.

ÉTAPE 2 - SAISONNALITÉ:
Produit: Cola ZERO en verre 275ml - boisson rafraîchissante.
- Période estivale (juin-août): commandes fréquentes (7 commandes sur 3 mois), avec quelques pics à 3u.
- Période septembre: toujours actif avec 3 commandes, dont une à 4u.
- Date actuelle: 01/10/2025 = début d'automne, sortie de la haute saison des boissons fraîches.
- Analyse: Le produit montre une activité soutenue en été. En octobre, on entre dans une période traditionnellement plus basse pour les sodas.
- Ajustement saisonnier: Légèrement négatif (-10 à -15%) car sortie de saison haute.

ÉTAPE 3 - TENDANCE RÉCENTE:
4 dernières commandes (sept. 2025): 2u, 4u, 2u, 3u = moyenne 2.75u
5 commandes précédentes (juin-juil.): 3u, 2u, 2u, 2u, 2u = moyenne 2.2u
- Volume: Légère hausse (+25%) sur la période récente vs période précédente.
- Fréquence: Septembre montre 3 commandes sur 1 mois (intervalle ~7-15 jours), plus fréquent qu'avant.
- MAIS: Cette hausse coïncide avec la fin de l'été, peut être un dernier sursaut avant baisse automnale.
- Ajustement tendance: Neutre à légèrement positif (0 à +10%), car la hausse récente est probablement temporaire.

ÉTAPE 4 - RECOMMANDATION FINALE:
- Base de demande nettoyée: 2.4u (moyenne) à 2.75u (tendance récente)
- Ajustement saisonnier (octobre = baisse): -10%
- Ajustement tendance (stabilisation attendue): +5%
- Calcul: 2.5u × 0.90 × 1.05 ≈ 2.4u
- Arrondi conservateur: 3u (pour sécurité minimale sans sur-stocker)
- Rationale: La dernière commande date du 24/09 (7 jours), intervalle moyen récent ~7-15j. Une commande de 3u permet de couvrir la demande probable des 2 prochaines semaines en début d'automne, sans excès.


**📅 Analyse Temporelle:**

Intervalles entre commandes:
- 24/09 → 17/09: 7 jours
- 17/09 → 02/09: 15 jours  
- 02/09 → 19/08: 14 jours
- 19/08 → 22/07: 28 jours (plus long, période estivale)
- 22/07 → 14/07: 8 jours
- 14/07 → 30/06: 14 jours
- 30/06 → 25/06: 5 jours (très court)
- 25/06 → 11/06: 14 jours

Moyenne des intervalles: ~13 jours
Intervalle récent (3 derniers): ~12 jours

Le rythme de commande est relativement régulier (1 à 2 semaines), avec accélération en septembre (fin de saison haute). Depuis la dernière commande (24/09), 7 jours se sont écoulés au 01/10, ce qui suggère qu'une nouvelle commande est imminente ou dans les prochains jours.


**📊 Analyse Quantité:**

Distribution des quantités:
- 2u: 6 occurrences (67%)
- 3u: 2 occurrences (22%)  
- 4u: 1 occurrence (11%)

Statistiques:
- Mode: 2u (quantité la plus fréquente)
- Médiane: 2u
- Moyenne: 2.44u
- Écart-type: ~0.73u

Le produit montre une demande stable et prévisible, centrée autour de 2-3 unités par commande. Les variations observées (±30%) sont normales pour le B2B et ne constituent pas des outliers significatifs. La commande de 4u récente (17/09) peut refléter un besoin ponctuel de fin de saison ou un ajustement de stock client.


**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)**
- Commande du 2025-06-25: 5u → C'est un pic significatif (2,5x la moyenne des autres commandes)
- Toutes les autres commandes sont dans la fourchette 1-2u
- Moyenne sans outlier: (2+1+2+2+2) / 5 = 1,8u
- Moyenne avec outlier: (2+1+2+2+5+2) / 6 = 2,33u
→ La commande de 5u semble être un événement ponctuel (probablement stockage préventif ou promotion). Demande de fond réelle ≈ 1,8u (arrondi à 2u)

**ÉTAPE 2: SAISONNALITÉ**
- Produit: RITCHIE Orange (boisson rafraîchissante en verre)
- Période actuelle: Octobre (début automne)
- Analyse historique: Le pic de 5u en juin correspond à l'entrée en période estivale (haute saison pour les boissons)
- Depuis juillet, retour à des quantités normales (2u) puis légère baisse en août-septembre (1-2u)
- Octobre = sortie de saison estivale → période basse pour les boissons rafraîchissantes
→ Ajustement saisonnier: -10% (période basse)

**ÉTAPE 3: TENDANCE RÉCENTE**
- 4 dernières commandes: 2u, 1u, 2u, 2u (sept à juillet)
- Fréquence des commandes: ~14-15 jours en moyenne récente
- Volume: Stable autour de 1,8u en moyenne, avec une légère baisse en septembre (1u)
- La fréquence reste régulière, pas d'accélération ni ralentissement notable
→ Tendance: Légèrement baissière (-5%) en raison de la sortie de saison

**ÉTAPE 4: RECOMMANDATION FINALE**
- Base demande de fond: 2u
- Ajustement saisonnier (octobre, période basse): -10%
- Ajustement tendance (légère baisse récente): -5%
- Calcul: 2u × 0,90 × 0,95 = 1,71u → arrondi à 2u
- Approche conservatrice appliquée: en B2B agroalimentaire, mieux vaut commander 2u pour assurer la continuité et éviter la rupture, sachant que les variations de ±30% sont normales
→ **Recommandation: 2 unités**


**📅 Analyse Temporelle:**
Fréquence de commande régulière avec intervalles moyens de 14-15 jours sur les 4 dernières commandes. L'intervalle entre les commandes reste stable, indiquant une demande prévisible. Aucun signe d'accélération ou de ralentissement significatif de la fréquence.

**📊 Analyse Quantité:**
Demande de fond stable à 2u après élimination du pic de 5u en juin (outlier saisonnier). Les 5 autres commandes montrent une cohérence (1-2u), avec moyenne de 1,8u. La commande de 1u en septembre est dans la plage normale de variation (±30%) et correspond à la fin de saison estivale.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>5. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM: 5u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 4u (400.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers):
L'historique montre 3 commandes avec des quantités très homogènes : 5u, 4u, 5u.
Aucune commande ne dépasse 2x la moyenne (moyenne = 4,67u).
→ Aucun outlier détecté. Toutes les commandes semblent représenter la demande de fond réelle.
→ Demande de fond = ~5u (médiane et mode)

ÉTAPE 2 - SAISONNALITÉ:
Dates des commandes : 17 sept 2025, 4 août 2025, 11 juin 2025
Intervalles : ~44 jours (juin-août), ~44 jours (août-sept) = très régulier
Le produit (mélange de noix bio) pourrait avoir une légère saisonnalité:
- Été: consommation potentiellement plus faible (produit énergétique)
- Automne/Hiver: hausse possible (snacking, période froide, préparation fêtes)
Nous sommes au 1er octobre = début de période potentiellement favorable
→ Ajustement saisonnier: légèrement positif (mais prudent car données limitées)

ÉTAPE 3 - TENDANCE RÉCENTE:
Les 3 dernières commandes montrent une stabilité remarquable:
- Quantités : 5u → 4u → 5u (oscillation normale autour de 5u)
- Fréquence : très stable (~44 jours entre chaque commande)
→ Tendance = STABLE, aucune accélération ni ralentissement détectable
→ Coefficient de tendance: 0% (stabilité)

ÉTAPE 4 - RECOMMANDATION FINALE:
Base (demande de fond) = 5u
+ Ajustement saisonnier = 0u (prudence car historique court, bien que début période favorable)
+ Ajustement tendance = 0u (stabilité parfaite)
= 5 unités recommandées

RATIONALE:
- Pattern très régulier et prévisible (5u tous les ~44 jours)
- Profil client stable et mature
- Début octobre = potentiel léger uptick saisonnier, mais historique insuffisant pour prendre risque
- Approche conservatrice privilégiée: 5u couvre la demande habituelle sans sur-stocker
- Si pic saisonnier se confirme, le client recommandera dans ~44 jours


**📅 Analyse Temporelle:**

Fréquence de commande très régulière: intervalles de 44 jours (11 juin → 4 août) et 44 jours (4 août → 17 sept). Le client montre un pattern de réapprovisionnement discipliné tous les 1,5 mois environ. Aucun signe d'accélération ou de ralentissement. Prochaine commande attendue vers mi-novembre.


**📊 Analyse Quantité:**

Quantités très stables oscillant autour de 5 unités (5u, 4u, 5u). Moyenne = 4,67u, Médiane = 5u. L'écart de 1 unité entre min et max (20%) reste dans la variabilité normale du B2B. Aucun outlier, aucun événement promotionnel détectable. Demande de fond claire à 5 unités par cycle de réapprovisionnement.


**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 3u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1 - DE-EVENTING:**
L'historique montre 3 commandes sur 4 mois:
- 17/09/2025: 3u
- 04/08/2025: 2u
- 11/06/2025: 3u

Aucun outlier détecté. Les quantités oscillent entre 2-3 unités, ce qui est cohérent avec des commandes régulières. Pas de pic anormal suggérant une promotion ou un stockage préventif. La demande de fond réelle semble être de 2,5u en moyenne (8u totales / 3 commandes).

**ÉTAPE 2 - SAISONNALITÉ:**
Produit: Noix de pécan bio en vrac - typiquement consommé en pâtisserie/boulangerie.
- Période haute: automne/hiver (septembre-décembre) pour les fêtes, pâtisseries saisonnières
- Période actuelle: 01/10/2025 = DÉBUT DE SAISON HAUTE

Les commandes montrent:
- Juin (basse saison): 3u
- Août (basse saison): 2u (plus faible)
- Septembre (début haute saison): 3u

Nous entrons dans la période de forte demande pour les fruits à coque (Halloween, Thanksgiving, Noël). Cela justifie un ajustement positif léger.

**ÉTAPE 3 - TENDANCE RÉCENTE:**
Fréquence de commande:
- Juin → Août: 54 jours d'écart
- Août → Septembre: 44 jours d'écart
- Fréquence moyenne: ~49 jours (stable)

Volume:
- 3u → 2u → 3u: Stable autour de 2,5-3u
- Pas de tendance haussière ou baissière claire
- Variation de ±1u considérée normale en B2B

La dernière commande (3u il y a 14 jours) suggère un rythme maintenu.

**ÉTAPE 4 - RECOMMANDATION FINALE:**
- Base de demande: 2,5-3u (demande de fond nettoyée)
- Ajustement saisonnier: +10% (début saison haute pour fruits à coque)
- Ajustement tendance: 0% (stable)
- Calcul: 2,5u × 1,1 = 2,75u → arrondi conservateur à 3u

**PRINCIPE DE PRÉCAUTION:** 
Avec seulement 3 points de données sur 4 mois, l'historique est limité. Je recommande 3u car:
1. C'est la quantité la plus fréquente (2/3 commandes)
2. Nous entrons en saison haute potentielle
3. Cela évite le sur-stockage tout en couvrant la demande probable
4. Le produit est bio en vrac (rotation nécessaire pour fraîcheur)


**📅 Analyse Temporelle:**

Fréquence de commande stable autour de 49 jours (7 semaines). Intervalle actuel: 14 jours depuis dernière commande du 17/09. Le cycle normal suggère une prochaine commande vers début novembre, mais nous sommes en début de saison haute (automne) ce qui pourrait accélérer légèrement le rythme. L'historique limité (3 commandes seulement) rend l'analyse temporelle peu robuste.


**📊 Analyse Quantité:**

Quantités commandées: 3u, 2u, 3u (moyenne 2,67u). Variation de ±1u considérée normale en B2B agroalimentaire. Aucun outlier détecté. Le pattern 3-2-3 suggère une demande de fond stable entre 2 et 3 unités par commande. La quantité de 2u en août (plein été) peut s'expliquer par une période creuse naturelle. Les 3u en juin et septembre sont cohérentes avec une demande standard/légèrement élevée.


**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)**
- Commande du 2025-09-02: 2u (la plus récente)
- Commandes précédentes: 1u, 1u, 1u, 1u
- Moyenne des 4 dernières commandes avant septembre: 1u
- La commande de 2u représente 200% de la moyenne, mais reste modeste en valeur absolue
- Étant donné que nous n'avons qu'UN seul pic à 2u et qu'il est récent, je ne le considère PAS comme un outlier promotionnel mais potentiellement comme un signal de demande réelle en hausse
- **Demande de fond**: 1u/commande historiquement

**ÉTAPE 2: SAISONNALITÉ**
- Produit: Citron-Gingembre - boisson rafraîchissante
- Période actuelle: Octobre 2025 (début automne)
- Historique disponible couvre: juin, juillet, août, septembre
- Pattern observé: Commandes plus fréquentes en été (juin: 2 commandes à 8 jours d'intervalle, juillet: 1u, août: 1u, septembre: 2u)
- **Analyse**: Produit à forte connotation estivale/rafraîchissante. Nous entrons en octobre (automne), donc sortie de la saison haute
- **Impact saisonnier**: NÉGATIF - La demande devrait naturellement décroître en automne/hiver pour ce type de boisson

**ÉTAPE 3: TENDANCE RÉCENTE**
- Analyse temporelle des intervalles:
  * Juin-03 → Juin-11: 8 jours
  * Juin-11 → Juillet-14: 33 jours
  * Juillet-14 → Août-19: 36 jours
  * Août-19 → Sept-02: 14 jours
- La fréquence de commande s'est accélérée en fin d'été (14 jours vs 33-36 jours)
- La quantité est passée de 1u constant à 2u en septembre
- **Cependant**: Cette hausse coïncide avec la fin de l'été (pic saisonnier naturel pour une boisson rafraîchissante)
- **Tendance post-ajustement saisonnier**: La hausse observée en septembre est probablement liée à la saisonnalité estivale. En octobre, nous devons anticiper un retour à la normale voire une baisse

**ÉTAPE 4: RECOMMANDATION FINALE**
- Base de demande nettoyée: 1u/commande
- Ajustement saisonnier: Octobre = début de période BASSE pour une boisson citron-gingembre → facteur 0.8-1.0
- Ajustement tendance: Le pic de septembre (2u) est probablement le dernier sursaut estival, pas une nouvelle baseline → pas d'ajustement haussier
- **Logique conservatrice**: Entre maintenir 1u (très prudent) et 2u (reproduire la dernière commande)
- **Décision**: 2u par principe de sécurité minimale, sachant que:
  * La dernière commande était de 2u (signal client récent)
  * Même en période basse, 2u reste une quantité très modeste
  * Risque de rupture > risque de sur-stock sur 1u de différence
  * Le produit reste probablement consommable sur plusieurs mois (DLC longue en B2B boissons)


**📅 Analyse Temporelle:**
Fréquence de commande irrégulière: intervalles variant de 8 à 36 jours (moyenne ~23 jours). Accélération observée en fin d'été (14 jours en août-septembre) qui correspond à la haute saison pour une boisson rafraîchissante. En octobre, nous entrons dans une période traditionnellement plus calme pour ce type de produit.

**📊 Analyse Quantité:**
Quantités très stables à 1u sur 4 commandes consécutives (juin à août), puis passage à 2u en septembre. Cette augmentation de 100% coïncide avec la fin de l'été, période de consommation maximale pour les boissons citron-gingembre. Pas d'autre outlier détecté. Volume total sur 5 mois: 6 unités, soit 1.2u/commande en moyenne.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
**ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)**
Analyse des quantités: 1u, 2u, 1u, 3u
- Quantité moyenne: 1.75u
- Seuil outlier (>2x moyenne): >3.5u
- La commande de 3u en juin reste dans les limites normales (exactement à 2x la moyenne, mais pas au-delà)
- Aucun pic promotionnel évident détecté
- **Demande de fond réelle: 1-3u par commande, moyenne ~1.75u**

**ÉTAPE 2: SAISONNALITÉ**
Produit: Orange Sanguine (agrume typiquement saisonnier)
- Période d'analyse: Juin à Septembre
- Orange sanguine = produit plutôt hivernal/printemps (pic janvier-avril), baisse en été
- Juin: 3u (fin de saison haute des agrumes)
- Juillet: 1u (creux estival)
- Août: 2u (maintien bas niveau)
- Septembre: 1u (toujours hors saison)
- **Nous sommes au 1er octobre: entrée en période de remontée progressive vers l'hiver (saison favorable aux agrumes), mais pas encore en pic**
- Ajustement saisonnier: légère hausse attendue (+10-20%)

**ÉTAPE 3: TENDANCE RÉCENTE**
Évolution des 4 dernières commandes: 3u → 1u → 2u → 1u
- Volume: Décroissant depuis juin (de 3u à 1u)
- Fréquence: Relativement stable (commandes tous les 28-41 jours, moyenne ~35 jours)
- Les 3 derniers mois montrent une stabilisation autour de 1-2u
- **Tendance: Légèrement baissière à stable sur la période estivale**

**ÉTAPE 4: RECOMMANDATION FINALE**
- Base de demande: 1.75u (moyenne observée)
- Ajustement saisonnier: +15% (début de remontée automnale pour agrumes): 1.75 × 1.15 = 2.01u
- Ajustement tendance: Neutre (stabilisation récente après creux estival)
- Principe de précaution B2B: Arrondi conservateur
- **Recommandation: 2 unités**

Cette quantité permet de couvrir la demande habituelle tout en anticipant une légère reprise saisonnière sans risquer de surstock important.

**📅 Analyse Temporelle:**
Fréquence de commande stable: environ tous les 28-41 jours (moyenne 35 jours). Dernier achat il y a 29 jours, cohérent avec le rythme habituel. Aucune accélération ni ralentissement significatif détecté.

**📊 Analyse Quantité:**
Quantités fluctuant entre 1-3 unités avec une moyenne de 1.75u. Pas d'outliers majeurs. Tendance décroissante depuis juin (3u) vers une stabilisation autour de 1-2u durant l'été. Compatible avec la saisonnalité d'un produit agrume en période estivale basse.

**📈 Tendance détectée:** ✅ Oui

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
| [fsv08] Banana chips bio vrac 1,6kg | 3 | Stock prédit: 0.4u (2j restants) → prédit 3u mais non commandé |
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

*Rapport généré automatiquement le 2025-11-19T16:30:14.378Z*
