# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S38709
- **Date commande** : 2025-08-26 07:26:18
- **Date cutoff système** : 2025-08-25 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 55
- **Tokens**: 65,681 input + 105,633 output = 171,314 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 54 produits prédits, 30 corrects |
| **Rappel** | 83.3% | 36 produits réels, 30 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 0.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -22.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 21 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (30)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 0 | 6 | 6.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 0 | 3 | 3.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent entre 7 et 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation régulière oscillant entre 1 et 2 unités par commande. Malgré l'absence de données N-1, le produit ne montre pas de pic ou de baisse brutale. L'intervalle moyen entre les commandes est d'environ 15 jours (médiane à 10,5j). La dernière commande remontant au 2025-08-06 (soit 19 jours avant la date actuelle), une nouvelle commande est statistiquement très probable dans les 10 prochains jours pour maintenir le stock. Le volume le plus fréquent (mode) étant de 2 unités, cette quantité est recommandée pour la prochaine commande unique.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier cycle moyen observé ~19 jours (7 à 37j)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible mais régulière en volume (1 ou 2 unités). La dernière commande date du 6 août, soit il y a 19 jours. Étant donné l'intervalle moyen constaté sur la période récente (hors pic de juin), une commande est prévue d'ici début septembre. Le volume de fond étant stabilisé à 2 unités par commande, nous recommandons cette quantité pour le prochain événement de commande unique identifié dans les 30 prochains jours.

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent de 7 à 20 jours (moyenne ~15j), principalement le lundi ou mercredi
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très stable de 2 unités par commande depuis juin. Le cycle de réapprovisionnement moyen (hors la pause inhabituelle de juillet) se situe autour de 15 jours. La dernière commande datant du 06/08 (soit 19 jours avant la date actuelle), une commande est statistiquement attendue dans les prochains jours (fenêtre fin août / début septembre). La quantité recommandée est de 2 unités pour couvrir le prochain besoin sans cumuler.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Initialement bimensuel (7-12j) évoluant vers un cycle mensuel (28j)
- **Saisonnalité**: none
- **Tendance**: Stable en volume (2u) avec ralentissement de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité remarquable de la quantité commandée (constamment 2 unités, sauf une exception à 1u). Le rythme de commande s'est toutefois espacé : après un cycle intensif en juin (tous les 7-12 jours), la dernière commande est intervenue après un intervalle de 28 jours. La date actuelle (25/08) se situe 19 jours après la dernière commande du 06/08. En suivant le cycle récent de ~28 jours, la prochaine commande devrait avoir lieu autour du 3 septembre, soit bien dans la fenêtre des 30 prochains jours. Nous recommandons la quantité standard de fond de 2 unités.

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel à mensuel, principalement les lundis et mercredis
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u, allongement du cycle de commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très stable de 2 unités par commande (80% des occurrences). Bien que la fréquence de commande se soit ralentie au cours de l'été (passage d'un cycle de ~10 jours en juin à 28 jours entre juillet et août), le délai depuis la dernière commande (06/08) est actuellement de 19 jours. Sur la base du cycle le plus long observé (28 jours), une commande de réapprovisionnement est fortement probable d'ici le 03 septembre, soit durant la fenêtre de prédiction. Conformément à la règle de non-cumul, nous prédisons la quantité standard de 2 unités pour cette prochaine commande unique.

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec alternance de cycles courts (~10j en juin) et une rupture prolongée en juillet (37j)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier identifié, les volumes sont constants entre 1 et 2 unités. Étape 2 : Absence de données N-1 pour confirmer une saisonnalité, mais le produit semble stable. Étape 3 : La tendance montre un ralentissement de la fréquence en Juillet/Août par rapport à Juin, mais le volume par commande reste identique. Étape 4 : La dernière commande date du 6 août (il y a 19 jours). Avec un intervalle historique moyen constaté de ~18 jours et un intervalle maximum de 37 jours, une nouvelle commande est prévue dans la fenêtre des 30 prochains jours (entre fin août et mi-septembre). La quantité recommandée est de 2 unités, correspondant au volume le plus fréquent.

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier compris entre 7 et 37 jours, avec une moyenne d'environ 18 jours
- **Saisonnalité**: strong
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité aberrante identifiée, la demande de fond est solidement établie à 2 unités. Étape 2: Bien que nous n'ayons pas de données N-1, le produit (tartinade d'olives) a une forte saisonnalité estivale (apéritif). Étape 3: La tendance est stable avec un volume de 2u par commande. Étape 4: La dernière commande a eu lieu le 06/08, soit il y a 19 jours. Compte tenu du cycle moyen de 18 jours et de l'historique de commande le lundi, une commande est immensément probable dans les prochains jours. La prédiction se base sur une commande unique de 2 unités.

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable de 12 à 28 jours (moyenne 19 jours), majoritairement le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité absolue avec une quantité systématique de 2 unités par commande sur les 4 derniers mouvements. Le cycle de commande moyen est de 19 jours. La dernière commande datant d'il y a 19 jours (06/08), la prochaine commande est imminente et surviendra très probablement dans les prochains jours, entrant ainsi dans la fenêtre de prédiction de 30 jours. On maintient la quantité habituelle de 2 unités sans cumul conformément aux consignes.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Transition d'un cycle hebdomadaire en juin vers un cycle mensuel (~28 jours) en juillet/août
- **Saisonnalité**: none
- **Tendance**: Volume stable à 2 unités avec ralentissement de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation du volume à 2 unités par commande. On observe un changement de rythme : le client est passé de commandes hebdomadaires en juin à une commande toutes les 4 semaines environ (intervalle de 28 jours entre les deux dernières livraisons). La dernière commande ayant eu lieu le 06/08, la prochaine est prévue autour du 03/09, ce qui se situe bien dans la fenêtre des 30 jours à venir. Conformément à la règle de non-cumul, nous recommandons la quantité standard de 2 unités pour cette unique prochaine commande.

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle moyen observé de 19 jours (intervalles de 12, 7 et 37 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1.5u/commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière mais à très faible volume (1 à 2 unités par commande). L'intervalle moyen entre les commandes est d'environ 19 jours. La dernière commande ayant eu lieu le 6 août 2025, soit il y a exactement 19 jours, une commande de réapprovisionnement est fortement probable dans les prochains jours. Compte tenu du stock de sécurité minimal pour ce type de conditionnement, une quantité de 2 unités (quantité maximale observée récemment) est préconisée pour la prochaine commande unique.

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel récent (~28 jours) après une phase hebdomadaire en juin
- **Saisonnalité**: none
- **Tendance**: Stabilisation de la quantité à 2u avec allongement du cycle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une évolution du rythme de commande : de hebdomadaire en juin à mensuel en juillet et août. Le dernier intervalle observé est de 28 jours. La dernière commande datant du 2025-08-06, la prochaine est statistiquement attendue autour du 3 septembre 2025, ce qui se situe dans la fenêtre des 30 jours. Concernant la quantité, bien que la moyenne soit de 1.6u, les deux dernières commandes se sont stabilisées à 2u. Nous prédisons donc une commande unique de 2 unités pour le début du mois de septembre.

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Passage d'un rythme hebdomadaire en juin à un rythme mensuel (cycle 28 jours) en juillet/août
- **Saisonnalité**: none
- **Tendance**: Quantité stable à 2 unités avec ralentissement de la fréquence de commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une stabilisation stricte du volume à 2 unités par commande. On observe un changement de fréquence : après une phase de réassort hebdomadaire en juin, le client est passé sur un cycle mensuel (28 jours entre les deux dernières commandes). La dernière commande datant du 06/08, la prochaine est théoriquement attendue autour du 3 septembre, ce qui se situe dans la fenêtre de prédiction des 30 jours. Nous recommandons donc la quantité habituelle de 2 unités.

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel, cycle strict de 28 jours (tous les deuxièmes mercredis du mois environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite sur les trois derniers mois : le client commande exactement 2 unités tous les 28 jours, toujours un mercredi. 
- Étape 1 : Aucun outlier détecté, la demande est constante.
- Étape 2 : Pas de données N-1 mais la stabilité récente suggère une absence d'impact saisonnier immédiat.
- Étape 3 : Tendance parfaitement stable.
- Étape 4 : La dernière commande date du mercredi 06/08/2025. En suivant le cycle de 28 jours, la prochaine commande est prévue pour le mercredi 03/09/2025, ce qui se situe bien dans la fenêtre des 30 prochains jours. En respectant la règle d'une seule commande par prédiction, la quantité recommandée est de 2 unités.

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de 21 à 28 jours, exclusivement le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite avec une commande d'une unité toutes les 3 à 4 semaines, systématiquement un mercredi. La dernière commande ayant eu lieu le 06/08/2025, la prochaine est statistiquement attendue entre le 27/08 et le 03/09, ce qui correspond à la fenêtre des 30 prochains jours. Bien que le produit puisse être sujet à la saisonnalité estivale, la demande de fond reste fixe à 1 unité par commande.

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle variable, historiquement environ 15 jours entre mai et juin, avec une interruption prolongée en juillet.
- **Saisonnalité**: none
- **Tendance**: Stable à environ 5-6u
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'analyse montre une reprise d'activité le 6 août après un arrêt en juillet. En se basant sur le cycle initial de mai/juin (tous les 12-16 jours), le client est actuellement en retard de commande (19 jours écoulés depuis le 6 août). Une commande est donc très probable dans les 30 prochains jours. La quantité recommandée de 6 unités correspond au volume de la dernière commande et à la moyenne lissée hors pic exceptionnel de juin.

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier (12-16 jours), avec une interruption de 44 jours observée en juillet.
- **Saisonnalité**: weak
- **Tendance**: Stable à tendance légèrement haussière (reprise à 6u en août)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Nettoyage de l'outlier de 10u (juin) qui représente le double de la moyenne habituelle. ÉTAPE 2 : Impact saisonnier supposé faible pour les chips bio en fin d'été, malgré l'absence de données N-1. ÉTAPE 3 : Le client a repris un rythme après une coupure en juillet, avec une commande de 6u le 06/08. Le délai médian hors interruption est de 14 jours. ÉTAPE 4 : Nous sommes à 19 jours de la dernière commande ; la prochaine est donc imminente. On prévoit une quantité de 6 unités pour la prochaine commande unique, s'alignant sur le volume de reprise récent.

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, avec un cycle médian observé de 16 jours mais une interruption majeure de 44 jours en juillet.
- **Saisonnalité**: none
- **Tendance**: Stable avec un volume moyen de fond de 4 à 6 unités.
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'analyse montre un historique fragmenté mais une reprise d'activité le 6 août (6u). En excluant l'outlier de 10u (pic de juin), la demande de fond se situe autour de 4 unités, mais la tendance récente (6u) suggère un besoin légèrement supérieur. Le délai depuis la dernière commande est de 19 jours (2025-08-06), ce qui, comparé au cycle médian de 16 jours, indique une commande imminente dans la fenêtre des 30 jours. On recommande la quantité de la dernière commande standard.

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (cycle de 28 jours observé), le mercredi
- **Saisonnalité**: none
- **Tendance**: Légère hausse (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux commandes. Un cycle de 28 jours a été identifié entre juin et juillet. Bien que la commande théorique de début août n'ait pas eu lieu (47 jours d'écart aujourd'hui depuis la dernière commande), il est probable qu'un réapprovisionnement survienne dans les 30 prochains jours pour pallier l'épuisement des stocks. On retient le volume de la dernière commande (2u) pour couvrir le besoin.

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle régulier d'environ 11 jours (principalement lundis et mercredis)
- **Saisonnalité**: none
- **Tendance**: Arrêt brutal de la consommation depuis le 09/07 (47 jours d'inactivité)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une consommation très stable de 1 unité avec un intervalle moyen de 11 jours entre fin mai et début juillet 2025. Cependant, aucune commande n'a été enregistrée depuis le 2025-07-09. À la date actuelle du 2025-08-25, cela représente une période d'inactivité de 47 jours, soit plus de quatre fois la durée du cycle habituel (11 jours). En l'absence de commande pendant une période aussi prolongée malgré la saison estivale (favorable aux energy drinks), on en déduit que le produit a probablement été déréférencé, remplacé ou que le client a cessé son approvisionnement sur ce SKU spécifique. Par conséquent, aucune commande n'est prévue dans les 30 prochains jours.

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle récurrent d'environ 11 jours observé en juin/juillet, interrompu depuis 47 jours.
- **Saisonnalité**: none
- **Tendance**: Instable - Rupture brutale du rythme habituel depuis le 09/07.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable (toujours 1 unité) avec une fréquence de 3 commandes par mois. Cependant, aucune commande n'a été enregistrée depuis le 9 juillet (soit un arrêt de plus de 6 semaines). Dans un contexte B2B agroalimentaire, ce type de produit (boisson énergisante bio) peut subir une saisonnalité estivale particulière ou une pause de stock durant les congés. On anticipe une commande de réapprovisionnement de 1 unité pour la période de rentrée de septembre, mais la confiance est faible due à la durée d'inactivité inhabituelle.

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 11 jours, commandes effectuées principalement le lundi et le mercredi
- **Saisonnalité**: none
- **Tendance**: Rupture de cycle (aucune commande depuis 47 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière de 1 unité avec un intervalle moyen de 11 jours entre mai et début juillet. Cependant, la dernière commande remonte au 09/07/2025. Au jour de l'analyse (25/08/2025), cela représente une période d'inactivité de 47 jours, soit plus de quatre fois le cycle habituel. Cette rupture prolongée suggère un arrêt de la consommation du produit, un déréférencement ou un changement de fournisseur. En l'absence de signal de reprise, aucune commande n'est prévue pour les 30 prochains jours.

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 0u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 6u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle identifiable (commande unique enregistrée)
- **Saisonnalité**: none
- **Tendance**: Inactivité prolongée (47 jours depuis la dernière commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique extrêmement limité d'une seule commande de 6 unités datant du 9 juillet 2025. À la date actuelle (25 août), 47 jours se sont écoulés sans aucun réapprovisionnement pour ce produit. Dans le secteur B2B, un tel délai pour une référence de cola (rotation généralement plus courte) suggère soit un achat ponctuel, soit l'arrêt de la référence chez le client. Aucun pattern de récurrence ne permettant d'anticiper une commande imminente dans les 30 prochains jours, la prédiction est fixée à 0.

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle historique d'environ 22 jours (intervalles de 21 et 23 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande, mais fréquence actuellement rompue
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation très régulière de 1 unité avec un cycle d'environ 3 semaines (Etape 1 & 3). Cependant, une rupture de rythme est observée : la dernière commande date du 09/07/2025, soit il y a 47 jours, ce qui dépasse largement le cycle habituel de 22 jours (Etape 4). Malgré ce retard inexpliqué (possible stock mort ou approvisionnement alternatif), si le client maintient la référence, un réapprovisionnement est critique et probable dans les 30 prochains jours. La quantité recommandée est maintenue à 1 unité, conformément à l'historique strict (Etape 4). Le niveau de confiance est faible car le client est 'hors cycle' depuis plus de 25 jours.

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle régulier d'environ 21 à 23 jours (moyenne 22 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation très stable de 1 unité par commande avec un intervalle moyen de 22 jours. La dernière commande enregistrée remonte au 09/07/2025. Au 25/08/2025 (date actuelle), cela fait 47 jours sans commande, soit plus de deux cycles habituels. Bien que le client ait manqué ses dates théoriques de réapprovisionnement, la probabilité d'une commande de réassort dans les 30 prochains jours est élevée pour éviter une rupture prolongée. On maintient la quantité historique de 1 unité pour la prochaine commande unique.

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle régulier de 21 à 23 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation très régulière de 1 unité toutes les 3 semaines environ (moyenne de 22 jours). La dernière commande date du 09/07/2025, soit il y a 47 jours. Le client a manqué ses deux derniers cycles théoriques (fin juillet et mi-août). Cependant, pour un produit de type Cola en canette (stock de fond), une commande de réapprovisionnement d'une unité est fortement probable durant la fenêtre des 30 prochains jours (prochain cycle théorique estimé vers le 10 septembre) pour compenser la rupture de stock probable.

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle régulier constaté de 16 à 19 jours (médiane ~18j) sur les données récentes avant rupture du rythme.
- **Saisonnalité**: weak
- **Tendance**: Inactivité prolongée (56 jours sans commande vs cycle habituel de 18 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité initiale (cycle de 18 jours) avec des volumes très faibles (1-2 unités). Cependant, aucune commande n'a été enregistrée depuis le 30 juin 2025, soit un silence de 56 jours (équivalent à 3 cycles manqués). Bien que le produit semble 'overdue' (en retard de réapprovisionnement), la rupture brutale de tendance suggère soit une sortie de catalogue client, soit une rotation extrêmement lente. Compte tenu de la fenêtre de 30 jours, je prédis une commande de réactivation minimale de 1 unité, tout en maintenant un niveau de confiance faible dû à cette inactivité prolongée.

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire identifié le lundi (intervalle de 7 jours) fin juin 2025
- **Saisonnalité**: none
- **Tendance**: Inactivité prolongée (aucune commande depuis 8 semaines)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle initial hebdomadaire de 1 unité constaté fin juin 2025. Cependant, il existe une rupture totale de l'historique depuis le 30 juin (soit 56 jours d'inactivité). Dans un contexte B2B, un tel écart sur un produit à faible volume et à cycle court (7j) indique généralement un arrêt de référencement, une substitution de produit ou une fin de besoin spécifique. Selon l'étape 4, le délai depuis la dernière commande étant largement supérieur au cycle habituel sans signal de reprise, il est plus probable qu'aucune commande ne soit passée dans les 30 prochains jours.

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Activité hebdomadaire ponctuelle identifiée en juin, suivie d'une inactivité prolongée de 56 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive vers un arrêt total des commandes (Churn ou déréférencement)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: La demande de fond était de 1 unité par commande en juin, sans anomalie détectée. ÉTAPE 2: Pas de données historiques N-1 pour confirmer une saisonnalité, bien que le produit soit typiquement estival. ÉTAPE 3: On observe une rupture nette du rythme. Après trois commandes hebdomadaires consécutives en juin, le client n'a plus passé commande depuis le 30 juin (soit 56 jours d'inactivité). ÉTAPE 4: Le cycle théorique de 7 jours est largement dépassé (8 cycles manqués). Malgré le fait que nous soyons un lundi (jour habituel de commande), le silence prolongé suggère un arrêt de consommation sur cette référence. Aucune commande n'est donc statistiquement probable dans les 30 prochains jours.

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 0u vs Médiane: 10u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 3u (100.0%)
- 📉 **Erreur Médiane**: 7u (233.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle initial court (12 jours) suivi d'une période d'inactivité prolongée (63 jours)
- **Saisonnalité**: none
- **Tendance**: Inactivité / Rupture de cycle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucun outlier n'est formellement identifié sur un historique si court, bien que la commande de 10u puisse correspondre à un remplissage de rayon initial suivi d'un réassort plus faible de 4u.
ÉTAPE 2 (Saisonnalité) : Produit de type 'chips' (snacking) normalement sujet à une hausse estivale, cependant l'absence totale de données en juillet et août infirme ce levier pour ce client spécifique.
ÉTAPE 3 (Tendance) : Tendance baissière sur le volume (10u vers 4u) suivie d'un silence de 63 jours. Le cycle de 12 jours observé en juin n'a pas été maintenu.
ÉTAPE 4 (Recommandation) : Le délai depuis la dernière commande est de 63 jours (soit 5 fois le cycle initial observé). En Supply Chain, une telle rupture de rythme sans signal récent (malgré le fait que nous soyons un lundi, jour de la dernière commande) suggère un produit dormant ou déréférencé par le client. Aucune commande n'est donc prévue dans les 30 prochains jours.

</details>




### 📊 Données d'Input LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>




---

## False Positives (24)

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
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.5u (17j restants) → prédit 3u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: 1.6u (21j restants) → prédit 3u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: 0.5u (5j restants) → prédit 3u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: -0.9u (-21j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.4u (-12j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.4u (-12j restants) → prédit 1u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Stock prédit: -1.9u (-30j restants) → prédit 1u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock prédit: -1.9u (-30j restants) → prédit 1u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -1.9u (-30j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: -1.9u (-30j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -2.1u (-18j restants) → prédit 3u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 3 | Stock prédit: -0.7u (-7j restants) → prédit 3u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: -2.9u (-46j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Stock prédit: -2.9u (-46j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Stock prédit: -2.9u (-46j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: -2.9u (-46j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Stock prédit: -7.3u (-58j restants) → prédit 2u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 4 | Stock prédit: -2.3u (-39j restants) → prédit 4u mais non commandé |


---

## False Negatives (6)

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.4u (-15j) mais client a commandé 1u |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.9u (-25j) mais client a commandé 1u |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -1.3u (-26j) mais client a commandé 1u |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -1.3u (-26j) mais client a commandé 1u |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | LLM avait prédit 0 (pas de besoin) avec stock: -8.6u (-42j) mais client a commandé 3u |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 6 | LLM avait prédit 0 (pas de besoin) avec stock: -0.5u (-3j) mais client a commandé 6u |


---

*Rapport généré automatiquement le 2025-12-18T18:57:49.963Z*
