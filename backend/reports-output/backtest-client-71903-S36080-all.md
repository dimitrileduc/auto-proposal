# Rapport Backtest - Client FOODPRINT SRL - FP

## Contexte

- **Client** : FOODPRINT SRL - FP (ID: 71903)
- **Commande réelle** : S36080
- **Date commande** : 2025-04-14 08:31:16
- **Date cutoff système** : 2025-04-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 11
- **Tokens**: 22,520 input + 6,538 output = 29,058 total
- **Coût**: $0.1656 (~16.56¢)
- **Coût par produit LLM**: $0.0151


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 11.5% | 104 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 20.7% | Score équilibré global |

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
| **MAE** | 8.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 47.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

## True Positives (12)

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
| [RIT01] RITCHIE Orange - verre 275ml | 20 | 10 | 10.0 | 100.0% | ✅ partial | 📊 Médiane |
| [RIT02] RITCHIE Citron - verre 275ml | 20 | 20 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 5 | 10 | 5.0 | 50.0% | ✅ partial | 📊 Médiane |
| [RIT05] RITCHIE Cola - verre 275ml | 15 | 20 | 5.0 | 25.0% | ✅ partial | 📊 Médiane |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 5 | 3 | 2.0 | 66.7% | ✅ partial | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 5 | 15 | 10.0 | 66.7% | ✅ partial | 📊 Médiane |
| [RIT08] RITCHIE Citron - canette 330ml | 5 | 10 | 5.0 | 50.0% | ✅ partial | 📊 Médiane |
| [RIT09] RITCHIE Cola - canette 330ml | 5 | 6 | 1.0 | 16.7% | ✅ partial | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 5 | 2 | 3.0 | 150.0% | ✅ partial | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 56 | 112 | 56.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | 56 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | 56 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 112u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: low)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 56u (50.0%)
- 📉 **Erreur Médiane**: 56u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - Seulement 5 commandes groupées sur 1 minute le 2025-04-12 (sam.)
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - historique trop court (1 seul jour)
- **Outliers détectés**: 112u

**🧠 Raisonnement LLM:**
**ANALYSE CRITIQUE DES DONNÉES:**

**1. RYTHMIQUE & PATTERN:**
- Historique extrêmement limité : 5 commandes concentrées sur 1 minute le samedi 12/04/2025
- Pattern apparent : 4 commandes de 56u + 1 commande de 112u (= 2×56u)
- Total commandé : 336 unités en une seule session
- Impossible de détecter un rythme (hebdo/mensuel) avec un seul événement
- **Délai jusqu'à prédiction** : 2 jours (sam. → lun.)

**2. INTERPRÉTATION DU COMPORTEMENT:**
- Ces commandes groupées suggèrent soit :
  a) Un démarrage de référencement produit
  b) Des corrections/ajustements de stock initiaux
  c) Une commande bulk fragmentée en plusieurs lignes
- La quantité 56u semble être l'unité de commande standard (4/5 occurrences)
- Le 112u apparaît comme un multiple (outlier quantitatif mais logique)

**3. DÉCISION:**
- Sans historique N-1, sans pattern établi, sans tendance observable
- **Hypothèse la plus probable** : 56u représente l'unité de commande de base
- Pour le lundi 14/04, si rythme régulier s'établit : probable réassort standard
- **Risque majeur** : Les 336u du 12/04 peuvent couvrir plusieurs jours/semaines → commande nulle possible

**PRÉDICTION FINALE : 56 unités**
Basée sur la quantité unitaire la plus fréquente, mais avec **confiance très faible** vu l'absence totale de recul historique. En contexte réel, je recommanderais d'attendre plus de données avant toute prédiction fiable.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: low)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - Unique journée observée (5 commandes groupées le sam. 12/04)
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - historique <3 jours
- **Outliers détectés**: 112u

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE : Historique extrêmement limité**

L'historique ne contient que 5 commandes toutes passées le même jour (samedi 12/04/2025) en 2 minutes, totalisant 336 unités (56+56+56+56+112).

**ANALYSE RYTHMIQUE :**
- Impossible de détecter un pattern : toutes les commandes sont groupées sur 1 seule journée
- Pas de récurrence hebdo/mensuelle observable
- La séquence suggère soit une initialisation stock, soit un traitement par lots

**FILTRAGE OUTLIERS :**
- La commande de 112u (double des autres) pourrait être un outlier ou simplement un arrondi logistique
- Les 4 commandes de 56u suggèrent que 56u pourrait être l'unité de commande standard (conditionnement produit ?)

**HYPOTHÈSE DE TRAVAIL :**
En l'absence totale de pattern temporel, je me base sur la valeur modale (56u apparaît 4 fois sur 5). Le 112u étant exactement 2×56, il s'agit probablement d'un doublement ponctuel.

Pour le lundi 14/04 (2 jours après la dernière commande groupée), il est statistiquement peu probable qu'une nouvelle commande intervienne si rapidement sans pattern établi. Cependant, si commande il y a, l'unité standard serait 56u.

**RISQUE MAJEUR :** Avec <3 jours d'historique, toute prédiction est hautement spéculative. La recommandation de 56u reflète l'unité de commande la plus fréquente observée.

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: low)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - 3 commandes groupées le même jour (samedi 12/04/2025)
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - historique trop limité (1 seul jour de commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE**: Historique extrêmement limité - seulement 3 commandes identiques (56u chacune) enregistrées le même jour (samedi 12/04/2025), avec des écarts de quelques minutes seulement (10:04, 10:31, 10:31).

**ANALYSE RYTHMIQUE**: Impossible d'identifier un pattern temporel fiable. Les 3 commandes groupées le même jour suggèrent soit:
- Un démarrage récent de la référence produit
- Des commandes multiples techniques (corrections, clients différents)
- Un événement ponctuel

**HYPOTHÈSE RETENUE**: Je considère 56u comme la quantité unitaire standard par commande. Les 3 occurrences identiques renforcent cette hypothèse.

**PRÉDICTION POUR LE 14/04 (lundi)**: 
- Sans pattern hebdomadaire identifiable
- Sans historique N-1 pour la saisonnalité
- Produit premium/bio à rotation probablement limitée
- Je recommande la quantité unitaire observée: **56 unités**

**LIMITES**: Confiance LOW en raison du manque total de recul temporel. Cette prédiction repose uniquement sur la répétition du quantum observé. Surveillance étroite recommandée lors des prochaines commandes pour ajuster le modèle.

</details>




---

## False Positives (92)

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
| [ORG01] ORGANICA crunchy fruit ananas 16g | 36 | Stock prédit: -36.0u (0j restants) → prédit 36u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 54 | Stock prédit: -54.0u (0j restants) → prédit 54u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 90 | Stock prédit: -90.0u (0j restants) → prédit 90u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 72 | Stock prédit: -72.0u (0j restants) → prédit 72u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 54 | Stock prédit: -54.0u (0j restants) → prédit 54u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 36 | Stock prédit: -36.0u (0j restants) → prédit 36u mais non commandé |
| [fsv01] Cerneaux de noix nature bio vrac 1,8 kg | 6 | Stock prédit: -6.0u (0j restants) → prédit 6u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 10 | Stock prédit: -15.0u (0j restants) → prédit 10u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 8 | Stock prédit: -10.0u (0j restants) → prédit 8u mais non commandé |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 6 | Stock prédit: -6.0u (0j restants) → prédit 6u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 3 | Stock prédit: -1.0u (0j restants) → prédit 3u mais non commandé |
| [fsv11] Noix de cajou mexicaines bio vrac 2,8kg  | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [fsv14] Amandes grillées bio vrac 2,8kg | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 3 | Stock prédit: -1.0u (0j restants) → prédit 3u mais non commandé |
| [fsv18] Mendiant bio vrac 2,8kg | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 180 | Stock prédit: 0.0u (0j restants) → prédit 180u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 180 | Stock prédit: 0.0u (0j restants) → prédit 180u mais non commandé |
| [LEA04] LEAMO ginger beer bio 750ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [LEA09] LEAMO cola bio 330ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 15 | Stock prédit: 0.0u (0j restants) → prédit 15u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 120 | Stock prédit: 0.0u (0j restants) → prédit 120u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 60 | Stock prédit: 0.0u (0j restants) → prédit 60u mais non commandé |
| [DAM05] Dr. Antonio Martins eau de coco bio & fairtrade 330ml | 30 | Stock prédit: 0.0u (0j restants) → prédit 30u mais non commandé |
| [SOWA01] SOWA citron menthe 250ml | 6 | Stock prédit: -10.0u (0j restants) → prédit 6u mais non commandé |
| [SOWA02] SOWA bissap 250ml | 6 | Stock prédit: -10.0u (0j restants) → prédit 6u mais non commandé |
| [SOWA03] SOWA ginger beer ardent 250ml | 6 | Stock prédit: -10.0u (0j restants) → prédit 6u mais non commandé |
| [SOWA04] SOWA thé glacé pêche 250ml | 5 | Stock prédit: -8.0u (0j restants) → prédit 5u mais non commandé |
| [KLAK01] KLAK Maté 330ml | 2 | Stock prédit: -2.0u (0j restants) → prédit 2u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 13 | Stock prédit: -10.0u (0j restants) → prédit 13u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 8 | Stock prédit: -20.0u (0j restants) → prédit 8u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 18 | Stock prédit: -10.0u (0j restants) → prédit 18u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 26 | Stock prédit: -27.0u (0j restants) → prédit 26u mais non commandé |
| [BUD02] BUDDY bio functional & energy drink citorn & gingembre - 250ml | 60 | Stock prédit: 0.0u (0j restants) → prédit 60u mais non commandé |
| [BUD03] BUDDY bio functional & energy drink mangue passion - 250ml | 60 | Stock prédit: 0.0u (0j restants) → prédit 60u mais non commandé |
| [BUD04] BUDDY bio functional & energy drink grenade hibiscus - 250ml | 60 | Stock prédit: 0.0u (0j restants) → prédit 60u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 20 | Stock prédit: 0.0u (0j restants) → prédit 20u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 90 | Stock prédit: 0.0u (0j restants) → prédit 90u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 180 | Stock prédit: 0.0u (0j restants) → prédit 180u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 180 | Stock prédit: 0.0u (0j restants) → prédit 180u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 180 | Stock prédit: 0.0u (0j restants) → prédit 180u mais non commandé |
| [KOKO02] KOKO Kombucha citron gingembre 330ml | 40 | Stock prédit: 0.0u (0j restants) → prédit 40u mais non commandé |
| [KOKO03] KOKO Kombucha framboise hibiscus 330ml | 40 | Stock prédit: 0.0u (0j restants) → prédit 40u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 40 | Stock prédit: 0.0u (0j restants) → prédit 40u mais non commandé |
| Palette EURO | 333 | Stock prédit: 0.0u (0j restants) → prédit 333u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 42 | Stock prédit: -36.0u (0j restants) → prédit 42u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 42 | Stock prédit: -36.0u (0j restants) → prédit 42u mais non commandé |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 18 | Stock prédit: -12.0u (0j restants) → prédit 18u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 30 | Stock prédit: -36.0u (0j restants) → prédit 30u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 42 | Stock prédit: -60.0u (0j restants) → prédit 42u mais non commandé |
| [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 13 | Stock prédit: -10.0u (0j restants) → prédit 13u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 13 | Stock prédit: -10.0u (0j restants) → prédit 13u mais non commandé |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 15 | Stock prédit: 0.0u (0j restants) → prédit 15u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Stock prédit: -10.0u (0j restants) → prédit 10u mais non commandé |
| [JOY08] JOY! Confiture bio à la framboise 370g | 196 | Stock prédit: 0.0u (0j restants) → prédit 196u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 8 | Stock prédit: -5.0u (0j restants) → prédit 8u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 20 | Stock prédit: 0.0u (0j restants) → prédit 20u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 30 | Stock prédit: 0.0u (0j restants) → prédit 30u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 20 | Stock prédit: 0.0u (0j restants) → prédit 20u mais non commandé |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 30 | Stock prédit: 0.0u (0j restants) → prédit 30u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 20 | Stock prédit: 0.0u (0j restants) → prédit 20u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 25 | Stock prédit: -25.0u (0j restants) → prédit 25u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 20 | Stock prédit: -35.0u (0j restants) → prédit 20u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 20 | Stock prédit: -35.0u (0j restants) → prédit 20u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 23 | Stock prédit: -35.0u (0j restants) → prédit 23u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 8 | Stock prédit: -12.0u (0j restants) → prédit 8u mais non commandé |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 203 | Stock prédit: 0.0u (0j restants) → prédit 203u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 46 | Stock prédit: 0.0u (0j restants) → prédit 46u mais non commandé |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 10 | Stock prédit: 0.0u (0j restants) → prédit 10u mais non commandé |
| [JOY02] JOY! Confiture bio à la fraise 370g | 196 | Stock prédit: 0.0u (0j restants) → prédit 196u mais non commandé |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 199 | Stock prédit: 0.0u (0j restants) → prédit 199u mais non commandé |
| [JOY06] JOY! Confiture bio à la rhubarbe 370g | 257 | Stock prédit: 0.0u (0j restants) → prédit 257u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 36 | Stock prédit: 0.0u (0j restants) → prédit 36u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 48 | Stock prédit: 0.0u (0j restants) → prédit 48u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 36 | Stock prédit: 0.0u (0j restants) → prédit 36u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 36 | Stock prédit: 0.0u (0j restants) → prédit 36u mais non commandé |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 12 | Stock prédit: 0.0u (0j restants) → prédit 12u mais non commandé |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 12 | Stock prédit: 0.0u (0j restants) → prédit 12u mais non commandé |
| [JOY05] JOY! Confiture bio à la cerise 370g | 200 | Stock prédit: 0.0u (0j restants) → prédit 200u mais non commandé |
| [JOY07] JOY! Confiture bio à la figue 370g | 281 | Stock prédit: 0.0u (0j restants) → prédit 281u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: -280.0u (0j restants) → prédit 56u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: -336.0u (0j restants) → prédit 56u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Stock prédit: -448.0u (0j restants) → prédit 56u mais non commandé |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 54 | Stock prédit: -150.0u (0j restants) → prédit 54u mais non commandé |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Stock prédit: -64.0u (0j restants) → prédit 64u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T08:59:00.276Z*
