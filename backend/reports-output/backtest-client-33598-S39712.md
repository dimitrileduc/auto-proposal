# Rapport Backtest - Client COLRUYT FOOD RETAIL NV NEW

## Contexte

- **Client** : COLRUYT FOOD RETAIL NV NEW (ID: 33598)
- **Commande réelle** : S39712
- **Date commande** : 2025-10-14 13:24:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 25
- **Tokens**: 39,640 input + 28,103 output = 67,743 total
- **Coût**: $0.5405 (~54.05¢)
- **Coût par produit LLM**: $0.0216


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.5% | 32 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 22.2% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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

## True Positives (4)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 48 | 48 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 100u vs Médiane: undefinedu (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
ÉTAPE 1 - DE-EVENTING:
J'identifie la commande du 2025-07-15 (225u) comme un outlier évident. Cette quantité représente 2,25x la moyenne des autres commandes (100u). Il s'agit probablement d'un stockage préventif, d'une promotion, ou d'une commande groupée ponctuelle. En excluant cette commande, la demande de fond est très stable à 100u par commande sur toutes les autres occurrences (7 commandes sur 8 = 100u exactement).

ÉTAPE 2 - SAISONNALITÉ:
L'historique couvre juin à octobre (5 mois). Le produit "Tartinade Paprika Chili" pourrait théoriquement bénéficier d'une légère hausse en été (apéritifs, BBQ), mais les données ne montrent AUCUN pattern saisonnier clair hormis l'outlier de juillet. Les commandes de juin, juillet (hors outlier), août, septembre et octobre sont toutes à 100u. Nous sommes mi-octobre, donc en sortie d'été, mais sans signal de baisse visible. Impact saisonnier: NEUTRE.

ÉTAPE 3 - TENDANCE RÉCENTE:
Les 4 dernières commandes (oct, sept x2, août) = 100u chacune, avec une fréquence stable:
- 08/10 → 16/09: 22 jours
- 16/09 → 02/09: 14 jours  
- 02/09 → 13/08: 20 jours
Moyenne inter-commande: ~19 jours. La fréquence est régulière et les quantités parfaitement stables. Aucune accélération ni décélération détectable. Tendance: STABLE (0% d'ajustement).

ÉTAPE 4 - RECOMMANDATION FINALE:
- Demande de fond nettoyée: 100u (extrêmement cohérente)
- Ajustement saisonnier: 0% (pas de signal clair)
- Ajustement tendance: 0% (stabilité parfaite sur 4 dernières commandes)
- Facteur sécurité: La régularité quasi-parfaite permet une prédiction conservatrice sans marge excessive

RECOMMANDATION: 100 unités (confiance élevée compte tenu de la stabilité exceptionnelle du pattern)

**📅 Analyse Temporelle:**
Fréquence de commande très régulière avec un intervalle moyen de ~19 jours (entre 14 et 22 jours). Dernière commande il y a 6 jours (08/10), donc nous sommes en début de cycle. La régularité temporelle renforce la prévisibilité: le client commande systématiquement 100u tous les ~3 semaines, ce qui suggère un taux d'écoulement stable et maîtrisé.

**📊 Analyse Quantité:**
Homogénéité remarquable: 7 commandes sur 8 = exactement 100u (87,5% des cas). La seule exception (225u en juillet) est un outlier clair (2,25x la norme) à traiter comme un événement ponctuel. Aucune variation sur les quantités "normales", ce qui indique une gestion par seuils fixes ou une demande B2B très standardisée. L'absence totale de variation (pas de 90u, 110u, 120u...) confirme qu'il ne s'agit pas de demande fluctuante mais bien d'une commande de réapprovisionnement systématique.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 100u vs Médiane: undefinedu (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING:
Les 3 commandes historiques montrent une stabilité parfaite à 100 unités chacune. Aucun outlier détecté, pas de pics promotionnels ni d'événements ponctuels identifiables. La demande de fond réelle est clairement de 100 unités par commande.

ÉTAPE 2 - SAISONNALITÉ:
Avec seulement 3 mois de données (juillet, août, septembre 2025), l'historique est trop court pour identifier des patterns saisonniers fiables. Cependant, la tartinade de betterave peut connaître une légère hausse en automne/hiver (produit de type "comfort food" et légume d'hiver). Nous sommes mi-octobre, donc potentiellement en début de période favorable, mais sans données historiques sur plusieurs cycles annuels, il serait risqué de sur-estimer. Les 3 dernières commandes couvrent été-automne et restent stables.

ÉTAPE 3 - TENDANCE RÉCENTE:
- Quantités: 100u → 100u → 100u (100% stable)
- Intervalles entre commandes: 
  * 09/07 au 13/08 = 35 jours
  * 13/08 au 09/09 = 27 jours
  * 09/09 au 14/10 = 35 jours (projection pour prochaine commande)
- Fréquence: Moyenne de ~31 jours entre commandes, relativement stable
- Aucune tendance haussière ou baissière détectable sur les quantités
- La régularité des commandes suggère une demande stable et prévisible

ÉTAPE 4 - RECOMMANDATION FINALE:
- Base de demande: 100 unités (demande de fond stable)
- Ajustement saisonnier: 0% (données insuffisantes + stabilité observée même en été)
- Ajustement tendance: 0% (aucune évolution détectable)
- Principe de précaution: La parfaite régularité sur 3 commandes consécutives est un excellent indicateur. En B2B agroalimentaire, cette stabilité suggère soit un contrat récurrent, soit une demande très prévisible du client.

Conclusion: 100 unités est la quantité optimale avec une haute confiance.


**📅 Analyse Temporelle:**
Fréquence de commande très régulière avec un cycle moyen de ~31 jours (intervalle de 27 à 35 jours). La dernière commande date du 09/09, nous sommes au 14/10, soit 35 jours plus tard, ce qui correspond parfaitement au pattern observé. Le rythme est stable et prévisible.

**📊 Analyse Quantité:**
Stabilité parfaite sur les 3 dernières commandes à 100 unités chacune. Aucune variation, aucun outlier. Cette constance remarquable (coefficient de variation = 0%) indique soit un contrat d'approvisionnement régulier B2B, soit une demande finale très stable. Pas de signal de hausse ou de baisse.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 100u vs Médiane: undefinedu (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)**
Analyse de l'historique:
- 2025-09-09: 100u
- 2025-08-20: 100u
- 2025-07-15: 100u
- 2025-06-17: 100u

**Constat:** Aucun outlier détecté. Toutes les commandes sont parfaitement identiques à 100 unités. Il n'y a aucune promotion visible (pas de pic > 2x), aucun stockage préventif, aucune correction de stock. La demande de fond réelle est stable à 100u par commande.

**ÉTAPE 2: SAISONNALITÉ**
Analyse temporelle des commandes:
- Juin (17/06): 100u - Début d'été
- Juillet (15/07): 100u - Plein été
- Août (20/08): 100u - Plein été
- Septembre (09/09): 100u - Fin d'été

**Observation:** Pour une tartinade au basilic (produit méditerranéen typiquement estival), on observe une demande constante sur toute la période estivale (juin-septembre), ce qui suggère une forte demande pendant la saison chaude. Nous sommes actuellement mi-octobre 2025, soit environ 5 semaines après la dernière commande. Nous entrons dans la période automnale où la demande de produits frais/tartinades peut diminuer légèrement, mais le produit reste un basique de gamme professionnelle B2B.

**ÉTAPE 3: TENDANCE RÉCENTE**
Analyse de fréquence entre commandes:
- Entre 17/06 et 15/07: ~28 jours
- Entre 15/07 et 20/08: ~36 jours
- Entre 20/08 et 09/09: ~20 jours
- Depuis 09/09 jusqu'au 14/10: ~35 jours

**Moyenne d'intervalle:** ~30 jours entre commandes
**Tendance quantité:** Strictement stable (100u à chaque fois)
**Tendance fréquence:** Légère variabilité dans les intervalles (20-36 jours) mais moyenne cohérente autour de 30 jours, ce qui correspond au rythme mensuel classique en B2B.

**ÉTAPE 4: RECOMMANDATION FINALE**

**Base de calcul:**
- Demande de fond nettoyée: 100u (totalement stable)
- Pattern identifié: Commande mensuelle de 100u

**Ajustements:**
1. **Saisonnier:** Légère prudence car nous passons de l'été à l'automne, mais pour un produit de gamme professionnelle, l'impact est limité. Coefficient: 0% (neutre)

2. **Tendance:** Aucune tendance haussière ou baissière détectable. La régularité parfaite des commandes à 100u indique un rythme de consommation maîtrisé et stable. Coefficient: 0% (stable)

3. **Sécurité:** Vu la parfaite régularité historique et l'approche conservatrice requise, je reste sur la base historique sans sur-stocker.

**Calcul final:** 100u × (1 + 0% + 0%) = 100 unités

**Justification:** La régularité exceptionnelle des commandes (100u tous les ~30 jours) est un signal très fort d'une demande B2B bien calibrée, probablement liée à des contrats ou commandes récurrentes. Dans ce contexte, reproduire le pattern historique est la stratégie la plus sûre pour éviter à la fois la rupture et le sur-stockage.


**📅 Analyse Temporelle:**
Fréquence de commande très régulière avec intervalle moyen de 30 jours (variance de 20 à 36 jours, ce qui reste dans la norme B2B pour des achats mensuels). Dernière commande il y a 35 jours (09/09), donc le client est dans sa fenêtre normale de réapprovisionnement. Pattern mensuel bien établi.

**📊 Analyse Quantité:**
Stabilité remarquable: 100% des commandes à 100 unités exactement. Aucune variation, aucun outlier, aucune promotion visible. Cette constance parfaite suggère soit des contrats B2B fixes, soit une consommation parfaitement maîtrisée. Moyenne = Médiane = Mode = 100u. Coefficient de variation: 0%.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 48u vs Médiane: undefinedu (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING:
Les données montrent une régularité parfaite avec 3 commandes identiques de 48u chacune. Aucun outlier détecté:
- 2025-09-09: 48u
- 2025-07-15: 48u
- 2025-06-24: 48u
→ Moyenne = 48u, écart-type = 0. Aucune commande promotionnelle ou pic anormal. La demande de fond réelle est stable à 48u.

ÉTAPE 2 - SAISONNALITÉ:
Analyse des périodes de commande:
- Juin (24/06): période estivale débutante
- Juillet (15/07): plein été
- Septembre (09/09): rentrée/début automne
La date actuelle est octobre 2025, donc automne. Les pizzas bio peuvent avoir une légère hausse en été (terrasses, grillades) mais les intervalles et quantités sont stables. Produit bio premium → moins sensible aux variations saisonnières classiques, clientèle B2B régulière.
→ Pas d'ajustement saisonnier majeur nécessaire, la consommation semble stable toute l'année.

ÉTAPE 3 - TENDANCE RÉCENTE:
Fréquence de commande:
- Entre juin et juillet: 21 jours
- Entre juillet et septembre: 56 jours
- Dernier intervalle (sept → oct actuel): 35 jours écoulés
L'intervalle s'est allongé, suggérant une légère décélération. Cependant, les quantités restent rigoureusement identiques à 48u, ce qui indique que le besoin unitaire par commande n'a pas changé, seule la fréquence varie.
→ Tendance: STABLE en volume unitaire. Pas de coefficient à appliquer.

ÉTAPE 4 - RECOMMANDATION FINALE:
- Demande de fond: 48u (100% des commandes historiques)
- Ajustement saisonnier: 0% (automne, pas de variation détectée)
- Ajustement tendance: 0% (volume stable malgré fréquence variable)
- Principe de précaution: Le client commande systématiquement 48u, probablement lié à un conditionnement logistique (palette, carton) ou besoin mensuel moyen

→ QUANTITÉ RECOMMANDÉE: 48u
Cette recommandation est hautement fiable car basée sur une parfaite cohérence historique.


**📅 Analyse Temporelle:**
L'intervalle entre commandes varie (21 jours, puis 56 jours, actuellement 35 jours depuis la dernière). Cette variabilité suggère un réapprovisionnement à la demande plutôt qu'un calendrier fixe, typique du B2B où le client commande selon son niveau de stock. La fréquence s'est espacée récemment, mais cela peut refléter une gestion de stock plus optimisée plutôt qu'une baisse de consommation réelle. 35 jours écoulés depuis la dernière commande se situe dans la moyenne observée.

**📊 Analyse Quantité:**
Parfaite stabilité quantitative: 3 commandes consécutives de 48u exactement. Cette régularité absolue (σ=0) indique très probablement un conditionnement logistique standard (ex: 2 cartons de 24u, ou palette de 48u) ou un contrat/accord avec quantité fixe. Aucune variation, aucun test de volumes différents. Le chiffre 48 semble être l'unité de commande structurelle pour ce client/produit. Pas de signes de croissance ou décroissance du besoin.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (28)

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
| [PF3259] EVD MOUTARDE FORTE 350 GR | 3900 | Stock prédit: 3900.0u (30j restants) → prédit 3900u mais non commandé |
| [PF3302] BONI BIO MAYONNAISE 500ML | 110 | Stock prédit: 14.3u (0j restants) → prédit 110u mais non commandé |
| [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg | 336 | Stock prédit: 237.4u (9j restants) → prédit 336u mais non commandé |
| [PF1503] BONI VINAI MOUTARDE 450ML | 126 | Stock prédit: 37.1u (1j restants) → prédit 126u mais non commandé |
| [PF1502] BONI VINAI FINE HERBE 450ML | 315 | Stock prédit: -164.3u (-1j restants) → prédit 315u mais non commandé |
| [PF1501] BONI VINAI CIBOULETTE 450ML | 378 | Stock prédit: 137.0u (2j restants) → prédit 378u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 80 | Stock prédit: 61.4u (16j restants) → prédit 80u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 27 | Stock prédit: 22.0u (22j restants) → prédit 27u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 100 | Stock prédit: 67.2u (10j restants) → prédit 100u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 100 | Stock prédit: 50.2u (5j restants) → prédit 100u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 100 | Stock prédit: 66.1u (9j restants) → prédit 100u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 100 | Stock prédit: 64.0u (8j restants) → prédit 100u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 100 | Stock prédit: 38.6u (8j restants) → prédit 100u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 80 | Stock prédit: 36.2u (15j restants) → prédit 80u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 50 | Stock prédit: 22.6u (15j restants) → prédit 50u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 100 | Stock prédit: 10.0u (3j restants) → prédit 100u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 126 | Stock prédit: 30.8u (11j restants) → prédit 126u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 100 | Stock prédit: -13.3u (-4j restants) → prédit 100u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 50 | Stock prédit: 1.0u (0j restants) → prédit 50u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 48 | Stock prédit: 4.3u (3j restants) → prédit 48u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 56 | Stock prédit: 5.0u (3j restants) → prédit 56u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 75 | Stock prédit: -83.0u (-24j restants) → prédit 75u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 100 | Stock prédit: 13.5u (7j restants) → prédit 100u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 120 | Stock prédit: -97.4u (-26j restants) → prédit 120u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 40 | Stock prédit: -18.8u (-24j restants) → prédit 40u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 56 | Stock prédit: -34.8u (-34j restants) → prédit 56u mais non commandé |
| [PF1626] BONI VINAI MIEL MOUTARDE 450ML | 122 | Stock prédit: -191.2u (-61j restants) → prédit 122u mais non commandé |
| [PF1624] BONI VINAIGRETTE MANGUE 450ML | 625 | Stock prédit: -208.5u (-19j restants) → prédit 625u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T16:27:21.170Z*
