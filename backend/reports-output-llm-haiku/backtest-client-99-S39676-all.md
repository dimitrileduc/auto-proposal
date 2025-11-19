# Rapport Backtest - Client La Fermette Godelaine de Saint-Georges

## Contexte

- **Client** : La Fermette Godelaine de Saint-Georges (ID: 99)
- **Commande réelle** : S39676
- **Date commande** : 2025-10-13 07:37:52
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 37
- **Tokens**: 33,820 input + 16,199 output = 50,019 total
- **Coût**: $0.0919 (~9.19¢)
- **Coût par produit LLM**: $0.0025


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.3% | 33 produits prédits, 10 corrects |
| **Rappel** | 76.9% | 13 produits réels, 10 détectés |
| **F1-Score** | 43.5% | Score équilibré global |

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
| **MAE** | 0.40 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [MF0053] MF Maïs 500g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [MF0035] MF Tarti Tomate Ail des ours 250g:

1. Analyse temporelle des intervalles:
- Intervalle entre 1ère et 2ème commande: 37 jours
- Intervalle entre 2ème et 3ème commande: 6 jours
- Les intervalles sont irréguliers, sans pattern clair de périodicité

2. Analyse des quantités:
- Toutes les commandes sont strictement identiques à 1 unité
- Pas de variation de quantité observée
- Quantité stable et constante

3. Recommandation conservatrice:
- Maintien de la quantité historique
- Recommandation de 1 unité
- Variation possible de ±30% selon contexte B2B
- Fourchette potentielle: 0-2 unités

4. Niveau de confiance:
- Historique très court (3 commandes)
- Quantité constante
- Confiance moyenne due au manque de données long terme

**📅 Analyse Temporelle:**
Intervalles entre commandes irréguliers et variables (37j puis 6j). Aucune périodicité claire détectée.

**📊 Analyse Quantité:**
Quantité stable à 1 unité pour les 3 commandes. Aucune variation observée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques de ReBEL chips (piment citron 125g):

1. Analyse des intervalles entre commandes:
- Entre 2025-06-19 et 2025-09-01 : 74 jours
- Entre 2025-09-01 et 2025-10-09 : 38 jours
- Intervalle irrégulier, mais tendance à des commandes rapprochées ces derniers mois

2. Analyse des quantités:
- 2025-06-19 : 1 unité
- 2025-09-01 : 2 unités
- 2025-10-09 : 1 unité
- Légère variation entre 1-2 unités, sans tendance linéaire claire

3. Recommandation conservative:
- Dernière commande : 1 unité
- Commande précédente : 2 unités
- Choix d'une quantité de 2 unités, médiane des commandes récentes
- Variation dans l'acceptable (+/- 30%)
- Permet de maintenir un stock minimal sans surstock

**📅 Analyse Temporelle:**
Intervalles entre commandes irréguliers mais rapprochés (38-74 jours). Tendance récente à des commandes plus fréquentes.

**📊 Analyse Quantité:**
Quantités oscillant entre 1 et 2 unités. Pas de croissance linéaire détectable.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB04] ReBEL chips premium & bio:

1. Analyse temporelle des intervalles:
- Entre la 1ère et 2ème commande : 38 jours
- Entre la 2ème et 3ème commande : 47 jours
- Entre la 3ème et 4ème commande : 32 jours
Intervalle moyen : environ 39 jours
Variation relativement régulière, suggérant un besoin récurrent

**📅 Analyse Temporelle:**
Intervalles entre commandes : 38-47 jours
Moyenne : 39 jours
Écart-type faible, indiquant une périodicité assez stable

**📊 Analyse Quantité:**
Quantités commandées : 1u, 2u, 1u, 1u
Mode (valeur la plus fréquente) : 1u
Variation occasionnelle à 2u, probablement liée à des besoins ponctuels

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB02] ReBEL chips premium & bio - paprika fumé 125g:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes varient de 10 à 45 jours
- Moyenne d'intervalle : environ 20-25 jours
- Pas de périodicité stricte, mais rythme semi-régulier
- Dernière commande le 2025-09-22 (20 jours avant la date actuelle)

2. Analyse des quantités:
- Variations entre 1u et 2u
- Pas de croissance linéaire claire
- Fluctuations normales dans la plage ±30%
- Dernières commandes à 2u suggèrent une préférence récente

3. Recommandation quantitative:
- Mode (valeur la plus fréquente) = 1u
- Tendance récente vers 2u
- Choix conservateur : 2 unités
- Correspond au comportement d'achat récent
- Offre flexibilité sans surinvestissement

**📅 Analyse Temporelle:**
Intervalles irréguliers mais cohérents, moyenne ~20-25 jours, dernière commande récente

**📊 Analyse Quantité:**
Variations entre 1-2u, sans tendance linéaire claire, dernières commandes à 2u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape des commandes historiques du produit REB01:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes relativement réguliers
- Moyenne d'environ 20-30 jours entre chaque commande
- Dernière commande le 2025-09-22, période actuelle le 2025-10-13
- Cohérence dans la périodicité des commandes

2. Analyse des quantités:
- Quantités très stables: 4 commandes à 2 unités
- Une commande à 1 unité (outlier potentiel)
- Tendance principale clairement à 2 unités
- Variation normale dans la plage acceptable de ±30%

3. Recommandation quantitative:
- Basée sur la tendance dominante des commandes
- Maintien de la quantité historique standard
- Recommandation conservatrice de 2 unités
- Alignée avec le comportement d'achat B2B observé

**📅 Analyse Temporelle:**
Intervalles réguliers entre 20-30 jours, dernière commande récente le 2025-09-22

**📊 Analyse Quantité:**
4/5 commandes à 2 unités, variation marginale considérée comme normale

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>6. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes de PAOLA cola verre 250ml:

1. Analyse des intervalles entre commandes:
- Entre 2025-02-17 et 2025-06-02 : ~3.5 mois
- Entre 2025-06-02 et 2025-07-08 : ~1 mois
Les intervalles sont irréguliers, suggérant un approvisionnement non systématique.

2. Analyse des quantités:
- Quantité constante à 1 unité pour chaque commande
- Pas de variation ou de tendance claire de croissance/décroissance
- Volumes très faibles, probablement un produit de niche ou test

3. Recommandation conservative:
- Maintien de la quantité historique de 1 unité
- Fourchette acceptable selon les variations B2B: 0-2 unités
- Confidence moyenne due aux intervalles irréguliers

**📅 Analyse Temporelle:**
Intervalles entre commandes irréguliers:
- Premier intervalle: 3.5 mois
- Deuxième intervalle: 1 mois
Pas de périodicité claire

**📊 Analyse Quantité:**
Quantité stable à 1 unité
Aucune variation significative
Pas de tendance détectable

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes de TENSAÏ TEA:

1. Analyse des intervalles temporels:
- Entre 2025-01-20 et 2025-03-18: ~2 mois
- Entre 2025-03-18 et 2025-07-08: ~3.5 mois
- Intervalles irréguliers mais relativement rapprochés

2. Analyse des quantités:
- Quantité constante de 1 unité à chaque commande
- Pas de variation, donc demande stable
- Aucune tendance significative à la hausse ou à la baisse

3. Recommandation conservative:
- Maintien de la quantité historique: 1 unité
- Fourchette acceptable: 0-2 unités (±30%)
- Recommandation basée sur un pattern de commande stable

**📅 Analyse Temporelle:**
Intervalles entre commandes variables mais rapprochés (2-3.5 mois). Pas de périodicité stricte.

**📊 Analyse Quantité:**
Quantité constante de 1 unité. Stabilité parfaite sans variation.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (23)

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
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Stock prédit: 0.9u (28j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.9u (21j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.9u (25j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Stock prédit: 1.8u (21j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: 0.8u (11j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: 0.8u (13j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: 1.8u (21j restants) → prédit 2u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 2 | Stock prédit: -0.7u (-8j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | Stock prédit: -1.1u (-21j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Stock prédit: -0.8u (-18j restants) → prédit 1u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.8u (-28j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -0.9u (-30j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -1.6u (-37j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -0.8u (-28j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.0u (2j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: 0.1u (9j restants) → prédit 1u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: -3.8u (-76j restants) → prédit 1u mais non commandé |
| [LEA04] LEAMO ginger beer bio 750ml | 2 | Stock prédit: -0.7u (-46j restants) → prédit 2u mais non commandé |


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
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock suffisant: 0.9u (40j restants > seuil 30j) |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Stock suffisant: 0.9u (35j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T15:56:03.541Z*
