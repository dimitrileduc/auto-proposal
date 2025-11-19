# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S39729
- **Date commande** : 2025-10-14 14:05:41
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 124
- **Tokens**: 116,186 input + 57,316 output = 173,502 total
- **Coût**: $0.3222 (~32.22¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 2.2% | 178 produits prédits, 4 corrects |
| **Rappel** | 57.1% | 7 produits réels, 4 détectés |
| **F1-Score** | 4.3% | Score équilibré global |

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
| **MAE** | 154.25 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK | 200 | 400 | 200.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF1778] TARTINAPERO BIO TOMATE 200ML | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3393] LV FR TARTINAPERO BIO AVOCAT BOCAL 190G | 651 | 434 | 217.0 | 50.0% | ✅ partial | 📊 Médiane |
| [PF1810] LV SAUCE BEARNAISE 250ML WECK | 400 | 200 | 200.0 | 100.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK</strong> - LLM: 200u vs Médiane: undefinedu (Réel: 400u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 200u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour le produit [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes très réguliers
- Entre le 22/08 et le 16/09 : 25 jours
- Entre le 16/09 et le 09/10 : 23 jours
- Période moyenne de commande : ~24 jours
- Très forte régularité temporelle

2. Analyse des quantités:
- Quantité strictement constante à 200 unités
- Aucune variation observée
- Stabilité parfaite des volumes commandés

3. Recommandation conservatrice:
- Pas de raison de modifier la quantité standard
- Confirmation du volume habituel de 200 unités
- Écart acceptable ±30% : entre 140 et 260 unités
- Recommandation finale : 200 unités

**📅 Analyse Temporelle:**
Commandes très régulières tous les 23-25 jours, forte périodicité

**📊 Analyse Quantité:**
Quantité stable à 200 unités, aucune variation

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [PF1778] TARTINAPERO BIO TOMATE 200ML</strong> - LLM: 434u vs Médiane: undefinedu (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour le produit PF1778:

1. Analyse des intervalles entre commandes:
- Commandes principalement entre 15-45 jours d'intervalle
- Dernière commande le 2025-10-09
- Intervalle moyen: environ 30-45 jours
- Pattern relativement régulier malgré quelques variations

2. Analyse des quantités:
- 4 commandes à 434u 
- 1 commande à 350u 
- Variation de +/- 20% autour de 434u
- Quantité stable et cohérente
- La dernière commande est revenue à 434u, confirmant le volume standard

3. Recommandation conservatrice:
- Quantité recommandée: 434 unités
- Correspond au volume le plus fréquent
- Dans la plage de variation normale B2B (+/- 30%)
- Pas de signal de changement significatif de la demande

**📅 Analyse Temporelle:**
Commandes espacées de 15-45 jours, rythme semi-régulier avec tendance à se stabiliser autour de 30-45 jours entre chaque livraison.

**📊 Analyse Quantité:**
Quantité principalement stable à 434u, avec une légère variation à 350u. Coefficient de variation < 20%, considéré comme normal en B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [PF1810] LV SAUCE BEARNAISE 250ML WECK</strong> - LLM: 400u vs Médiane: undefinedu (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 400u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [PF1810] LV SAUCE BEARNAISE 250ML WECK:

1. Analyse des intervalles entre commandes:
- Entre 2025-09-05 et 2025-09-10 : 5 jours (très court)
- Entre 2025-08-19 et 2025-09-05 : 17 jours 
Intervalle relativement irrégulier, mais avec une certaine fréquence proche de 2-3 semaines.

2. Analyse des quantités:
- Dernière commande (2025-09-10) : 400u
- Commande précédente (2025-09-05) : 400u
- Commande avant (2025-08-19) : 600u
On observe une stabilisation récente autour de 400u, avec une variation ponctuelle à 600u.

3. Recommandation:
- La quantité médiane/récente est 400u
- Variation acceptable en B2B de ±30%
- Recommandation conservative : 400u 

La quantité recommandée s'aligne avec la tendance récente et limite les risques de surstock.

**📅 Analyse Temporelle:**
Intervalles entre commandes irréguliers mais rapprochés (5-17 jours), suggérant un approvisionnement fréquent et ajustable.

**📊 Analyse Quantité:**
Stabilisation autour de 400u, avec une variation ponctuelle à 600u. Pas de tendance claire de croissance ou décroissance.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (174)

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
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 60 | Stock prédit: 60.0u (22j restants) → prédit 60u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 50 | Stock prédit: 60.0u (8j restants) → prédit 50u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 120 | Stock prédit: 60.0u (5j restants) → prédit 120u mais non commandé |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 60 | Stock prédit: 20.0u (7j restants) → prédit 60u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 50 | Stock prédit: 50.0u (21j restants) → prédit 50u mais non commandé |
| [PF1790] TARTI ALNATUR BIO TOMATE 200ML | 300 | Stock prédit: 236.8u (15j restants) → prédit 300u mais non commandé |
| [PF3235] LV BE TARTINADE BIO TOMATE OLIVE CAPRE 190G | 325 | Stock prédit: 300.0u (24j restants) → prédit 325u mais non commandé |
| [PF3014] LV BE TARTINADE BIO TOMATE 380G | 215 | Stock prédit: 230.9u (27j restants) → prédit 215u mais non commandé |
| [PF1549] LV COCKTAIL BIO 200ML | 185 | Stock prédit: 142.3u (13j restants) → prédit 185u mais non commandé |
| [PF1635] JF SAUCE AIOLI PESTO 250M WECK | 200 | Stock prédit: 169.2u (22j restants) → prédit 200u mais non commandé |
| [PF1793] LV MAYONNAI TRUFFES 250ML WECK | 200 | Stock prédit: 164.0u (18j restants) → prédit 200u mais non commandé |
| [PF1804] LV SAUCE TARTARE 250ML WECK | 300 | Stock prédit: 136.8u (8j restants) → prédit 300u mais non commandé |
| [PF1773] TARTINAPERO BIO MANGUE 200ML | 434 | Stock prédit: 349.2u (16j restants) → prédit 434u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 112 | Stock prédit: 72.0u (9j restants) → prédit 112u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 84 | Stock prédit: 23.1u (3j restants) → prédit 84u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: 32.5u (6j restants) → prédit 56u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | Stock prédit: 24.6u (3j restants) → prédit 56u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 5 | Stock prédit: -1.6u (-3j restants) → prédit 5u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 180 | Stock prédit: 84.7u (16j restants) → prédit 180u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 90 | Stock prédit: 45.9u (22j restants) → prédit 90u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 8 | Stock prédit: 7.8u (25j restants) → prédit 8u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 10 | Stock prédit: 3.4u (15j restants) → prédit 10u mais non commandé |
| [RF001] REFIELD Compote de pommes 500g  | 1 | Stock prédit: 0.5u (11j restants) → prédit 1u mais non commandé |
| [RF002] REFIELD Passata tomates 500G | 1 | Stock prédit: 0.5u (11j restants) → prédit 1u mais non commandé |
| [PF0088] FILOU VOL AU VENT 800 GR | 20 | Stock prédit: 16.7u (12j restants) → prédit 20u mais non commandé |
| [PF3400] JF MAYONNAISE OEUFS SQUEEZE 300ML | 112 | Stock prédit: 56.0u (11j restants) → prédit 112u mais non commandé |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 24 | Stock prédit: 16.6u (26j restants) → prédit 24u mais non commandé |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 24 | Stock prédit: 16.6u (26j restants) → prédit 24u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 49 | Stock prédit: 13.4u (4j restants) → prédit 49u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 24 | Stock prédit: 12.0u (12j restants) → prédit 24u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 28 | Stock prédit: 15.4u (21j restants) → prédit 28u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 37 | Stock prédit: -2.1u (0j restants) → prédit 37u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 37 | Stock prédit: -2.1u (0j restants) → prédit 37u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 15 | Stock prédit: 12.6u (24j restants) → prédit 15u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 22 | Stock prédit: 18.1u (21j restants) → prédit 22u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 9 | Stock prédit: 0.7u (2j restants) → prédit 9u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 8 | Stock prédit: 1.1u (3j restants) → prédit 8u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 8 | Stock prédit: 0.8u (2j restants) → prédit 8u mais non commandé |
| [RIT02] RITCHIE Citron - verre 275ml | 25 | Stock prédit: 15.8u (15j restants) → prédit 25u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [MF0021] MF Sauce BBQ 250ml | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 36 | Stock prédit: 6.5u (3j restants) → prédit 36u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 54 | Stock prédit: 10.8u (7j restants) → prédit 54u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 740 | Stock prédit: 283.2u (8j restants) → prédit 740u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 22 | Stock prédit: 9.6u (16j restants) → prédit 22u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 28 | Stock prédit: 7.1u (9j restants) → prédit 28u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 27 | Stock prédit: 7.7u (11j restants) → prédit 27u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 25 | Stock prédit: 13.8u (22j restants) → prédit 25u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 10 | Stock prédit: 6.2u (29j restants) → prédit 10u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 2 | Stock prédit: 1.1u (22j restants) → prédit 2u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 2 | Stock prédit: -0.8u (-5j restants) → prédit 2u mais non commandé |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 4 | Stock prédit: 0.8u (6j restants) → prédit 4u mais non commandé |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | Stock prédit: -0.1u (-2j restants) → prédit 2u mais non commandé |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 5 | Stock prédit: -7.5u (-16j restants) → prédit 5u mais non commandé |
| [PF1828] JF SAUCE BEARNAISE 470ML WECK | 110 | Stock prédit: 66.5u (29j restants) → prédit 110u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: -51.3u (-9j restants) → prédit 56u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | Stock prédit: 19.3u (10j restants) → prédit 56u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 20 | Stock prédit: 5.8u (10j restants) → prédit 20u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 5 | Stock prédit: 1.5u (10j restants) → prédit 5u mais non commandé |
| [PF3329] LV SDP SAUCE BEARNAISE 125G | 2100 | Stock prédit: 988.2u (24j restants) → prédit 2100u mais non commandé |
| [PF1776] TARTINAPERO BIO CAROTTE 200ML | 392 | Stock prédit: -207.1u (-10j restants) → prédit 392u mais non commandé |
| [PF1474] JF MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: -25.0u (-3j restants) → prédit 200u mais non commandé |
| [PF1705] LV TARTINADE BIO BASILIC 200ML | 496 | Stock prédit: 10.4u (0j restants) → prédit 496u mais non commandé |
| [PF1558] LV TARTINADE BIO CAROTTE 200ML | 1049 | Stock prédit: -505.2u (-11j restants) → prédit 1049u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 40 | Stock prédit: 14.0u (24j restants) → prédit 40u mais non commandé |
| [UPI02] Jus de pomme-fraise bio d'UPIGNY 250ml | 10 | Stock prédit: -2.7u (-5j restants) → prédit 10u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 10 | Stock prédit: -2.7u (-5j restants) → prédit 10u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Stock prédit: -2.7u (-5j restants) → prédit 10u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 7 | Stock prédit: 2.6u (25j restants) → prédit 7u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 5 | Stock prédit: 2.1u (22j restants) → prédit 5u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 7 | Stock prédit: 1.9u (19j restants) → prédit 7u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 4 | Stock prédit: 2.4u (29j restants) → prédit 4u mais non commandé |
| [PF1460] LV MAYONNAISE BIO 200ML | 370 | Stock prédit: -85.4u (-5j restants) → prédit 370u mais non commandé |
| [PF1471] JF MAYONNAIS WASABI 250ML WECK | 200 | Stock prédit: 66.7u (15j restants) → prédit 200u mais non commandé |
| [PF1527] JF SAUCE BEARNAISE 250ML WECK | 267 | Stock prédit: -66.7u (-8j restants) → prédit 267u mais non commandé |
| [PF1475] JF MOUTARDE MIEL 250ML WECK | 200 | Stock prédit: 91.0u (26j restants) → prédit 200u mais non commandé |
| [PF1639] JF BURGER SQUEEZE 300ML | 250 | Stock prédit: 37.8u (10j restants) → prédit 250u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 135 | Stock prédit: 26.7u (14j restants) → prédit 135u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 8 | Stock prédit: 0.4u (1j restants) → prédit 8u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 7 | Stock prédit: -3.0u (-11j restants) → prédit 7u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 15 | Stock prédit: 0.8u (1j restants) → prédit 15u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 16 | Stock prédit: -5.5u (-9j restants) → prédit 16u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 13 | Stock prédit: -6.0u (-12j restants) → prédit 13u mais non commandé |
| [PF0084] FILOU CARBONNADES 800 GR | 8 | Stock prédit: -1.6u (-5j restants) → prédit 8u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 45 | Stock prédit: -3.2u (-2j restants) → prédit 45u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 35 | Stock prédit: 10.6u (13j restants) → prédit 35u mais non commandé |
| [PF3237] LV MAYONNAISE POIVRE 250ML WECK  | 300 | Stock prédit: -214.5u (-19j restants) → prédit 300u mais non commandé |
| [PF1775] TARTINAPERO BIO PAPRIKA 200ML | 434 | Stock prédit: 17.0u (1j restants) → prédit 434u mais non commandé |
| [PF1855] LV TARTINAPERO BIO TRIPACK | 768 | Stock prédit: 218.8u (7j restants) → prédit 768u mais non commandé |
| [PF2978] TARTINAPERO BIO AIL OURS 200ML | 434 | Stock prédit: -19.8u (-1j restants) → prédit 434u mais non commandé |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 1450 | Stock prédit: 726.9u (26j restants) → prédit 1450u mais non commandé |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 450 | Stock prédit: -357.7u (-20j restants) → prédit 450u mais non commandé |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 450 | Stock prédit: -357.7u (-20j restants) → prédit 450u mais non commandé |
| [PF1469] JF MAYONNAI TRUFFES 250ML WECK | 400 | Stock prédit: 135.3u (19j restants) → prédit 400u mais non commandé |
| [PF1526] JF SAUCE TARTARE 250ML WECK | 300 | Stock prédit: 162.5u (26j restants) → prédit 300u mais non commandé |
| [PF1967] JF SAUCE AIOLI 250ML WECK | 200 | Stock prédit: 63.1u (17j restants) → prédit 200u mais non commandé |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 60 | Stock prédit: -28.8u (-12j restants) → prédit 60u mais non commandé |
| [PF3370] JF MAYONNAISE CITRON 250ML WECK | 200 | Stock prédit: 41.7u (9j restants) → prédit 200u mais non commandé |
| [PF3387] JF VINAIGRETTE CAESAR 240ML | 200 | Stock prédit: -145.5u (-16j restants) → prédit 200u mais non commandé |
| [PF3383] JF VINAIGRETTE CIBOULETTE 240ML  | 200 | Stock prédit: -145.5u (-16j restants) → prédit 200u mais non commandé |
| [PF3386] JF VINAIGRETTE MIEL MOUTARDE 240ML | 200 | Stock prédit: -145.5u (-16j restants) → prédit 200u mais non commandé |
| [PF3385] JF VINAIGRETTE TRUFFES 240ML | 200 | Stock prédit: -145.5u (-16j restants) → prédit 200u mais non commandé |
| [PF3384] JF VINAIGRETTE FINES HERBES 240ML  | 200 | Stock prédit: -145.5u (-16j restants) → prédit 200u mais non commandé |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 1750 | Stock prédit: 900.9u (29j restants) → prédit 1750u mais non commandé |
| [PF2980] LV TARTINADE BIO AIL OURS200ML | 816 | Stock prédit: -543.1u (-17j restants) → prédit 816u mais non commandé |
| [PF3307] LV DE BROTAUFSTRICH BIO DATTE CHILI 180G | 740 | Stock prédit: 170.2u (11j restants) → prédit 740u mais non commandé |
| [PF3366] LV BE TARTINADE BIO ASPERGE 190G | 350 | Stock prédit: -159.6u (-52j restants) → prédit 350u mais non commandé |
| [PF3395] LV SDP SAUCE COCKTAIL 125G | 2100 | Stock prédit: -2863.6u (-30j restants) → prédit 2100u mais non commandé |
| [PF3392] LV FR TARTINAPERO BIO ASPERGE BOCAL 190G | 434 | Stock prédit: -591.8u (-29j restants) → prédit 434u mais non commandé |
| [PI3072] PI TARTI POIS CHICHES CONS 250G BIO | 4260 | Stock prédit: 1408.6u (18j restants) → prédit 4260u mais non commandé |
| [PI3073] PI TARTI TOMATE CONS 250 | 7500 | Stock prédit: 2573.0u (19j restants) → prédit 7500u mais non commandé |
| [PI3346] PI TARTINADE BETTERAVE CONS 250G | 5700 | Stock prédit: 659.5u (6j restants) → prédit 5700u mais non commandé |
| [PF1721] LV VIN CAESAR PET 250 BIO | 260 | Stock prédit: 61.0u (15j restants) → prédit 260u mais non commandé |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 2700 | Stock prédit: 749.9u (22j restants) → prédit 2700u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 75 | Stock prédit: 0.9u (1j restants) → prédit 75u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 3 | Stock prédit: -4.1u (-29j restants) → prédit 3u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 13 | Stock prédit: 2.5u (11j restants) → prédit 13u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 10 | Stock prédit: -15.0u (-33j restants) → prédit 10u mais non commandé |
| [JOY02] JOY! Confiture bio à la fraise 370g | 201 | Stock prédit: -22.9u (-5j restants) → prédit 201u mais non commandé |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 199 | Stock prédit: 35.4u (11j restants) → prédit 199u mais non commandé |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 200 | Stock prédit: -48.1u (-10j restants) → prédit 200u mais non commandé |
| [JOY06] JOY! Confiture bio à la rhubarbe 370g | 200 | Stock prédit: -300.0u (-33j restants) → prédit 200u mais non commandé |
| [JOY08] JOY! Confiture bio à la framboise 370g | 200 | Stock prédit: -300.0u (-33j restants) → prédit 200u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 5 | Stock prédit: -1.1u (-9j restants) → prédit 5u mais non commandé |
| [PI3200] PI TARTI AUBERGINE CONS 250 | 1356 | Stock prédit: -313.9u (-12j restants) → prédit 1356u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 2 | Stock prédit: -1.0u (-32j restants) → prédit 2u mais non commandé |
| [BUD02] BUDDY bio functional & energy drink citorn & gingembre - 250ml | 40 | Stock prédit: -53.2u (-58j restants) → prédit 40u mais non commandé |
| [BUD03] BUDDY bio functional & energy drink mangue passion - 250ml | 60 | Stock prédit: -34.1u (-29j restants) → prédit 60u mais non commandé |
| [BUD04] BUDDY bio functional & energy drink grenade hibiscus - 250ml | 60 | Stock prédit: -34.1u (-29j restants) → prédit 60u mais non commandé |
| [PF3331] LV SDP SAUCE POIVRE 125G | 1050 | Stock prédit: 452.9u (21j restants) → prédit 1050u mais non commandé |
| [PF3330] LV SDP SAUCE TARTARE 125G | 1050 | Stock prédit: 452.9u (21j restants) → prédit 1050u mais non commandé |
| [PF1484] JF VINAIGRETTE FH WECK 200ML | 150 | Stock prédit: -130.4u (-44j restants) → prédit 150u mais non commandé |
| [PF3226] JF SAUCE LAPIN 380GX6 | 300 | Stock prédit: -60.8u (-27j restants) → prédit 300u mais non commandé |
| [PF1534] JF SAUCE COCKTAIL 250ML WECK | 200 | Stock prédit: -59.6u (-22j restants) → prédit 200u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 200 | Stock prédit: -348.1u (-60j restants) → prédit 200u mais non commandé |
| [PF1540] JF SAUCE SAMOURAI 250ML WECK | 200 | Stock prédit: -122.1u (-36j restants) → prédit 200u mais non commandé |
| [PF3371] JF MAYONNAISE MIEL MOUTARDE 250ML WECK | 200 | Stock prédit: 9.9u (5j restants) → prédit 200u mais non commandé |
| [PF3372] JF SAUCE CHIPOTLE 250ML WECK | 200 | Stock prédit: 9.9u (5j restants) → prédit 200u mais non commandé |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 64 | Stock prédit: -97.9u (-58j restants) → prédit 64u mais non commandé |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Stock prédit: -56.9u (-45j restants) → prédit 64u mais non commandé |
| [RISH06] RISH kombucha BIO - tagette 750ml | 11 | Stock prédit: -7.3u (-41j restants) → prédit 11u mais non commandé |
| [RISH07] RISH kombucha BIO - PetNat Fig 750ml  | 5 | Stock prédit: -2.4u (-31j restants) → prédit 5u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 12 | Stock prédit: -6.8u (-45j restants) → prédit 12u mais non commandé |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 8 | Stock prédit: -27.6u (-76j restants) → prédit 8u mais non commandé |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 5 | Stock prédit: -1.8u (-30j restants) → prédit 5u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 8 | Stock prédit: -6.1u (-53j restants) → prédit 8u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 40 | Stock prédit: -138.2u (-76j restants) → prédit 40u mais non commandé |
| [KOKO02] KOKO Kombucha citron gingembre 330ml | 68 | Stock prédit: -27.1u (-30j restants) → prédit 68u mais non commandé |
| [KOKO03] KOKO Kombucha framboise hibiscus 330ml | 80 | Stock prédit: -22.5u (-21j restants) → prédit 80u mais non commandé |
| [PI3203] PI TARTI MANGUE CONS 250 | 1550 | Stock prédit: 220.2u (17j restants) → prédit 1550u mais non commandé |
| [PF1461] LV TARTARE BIO 200ML | 310 | Stock prédit: -74.6u (-19j restants) → prédit 310u mais non commandé |
| [PF1640] JF MITRAILLETTE SQUEEZE 300ML | 130 | Stock prédit: -270.0u (-77j restants) → prédit 130u mais non commandé |
| [AQUA01] AQUAPAX - eau minérale naturelle 500ml | 111 | Stock prédit: -489.4u (-97j restants) → prédit 111u mais non commandé |
| [LEA09] LEAMO cola bio 330ml | 8 | Stock prédit: -2.3u (-22j restants) → prédit 8u mais non commandé |


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
| [PF1797] LV MAYONNAI TOMATE 250ML WECK | 200 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK | 256 | Stock suffisant: 857.1u (177j restants > seuil 30j) |
| [PF1783] TARTINAPERO BIO BASILIC 200ML | 350 | Stock suffisant: 421.7u (136j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T15:54:45.106Z*
