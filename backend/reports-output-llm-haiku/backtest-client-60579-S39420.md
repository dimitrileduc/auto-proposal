# Rapport Backtest - Client Wandercoop

## Contexte

- **Client** : Wandercoop (ID: 60579)
- **Commande réelle** : S39420
- **Date commande** : 2025-10-02 06:12:05
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 15
- **Tokens**: 14,086 input + 6,703 output = 20,789 total
- **Coût**: $0.0381 (~3.81¢)
- **Coût par produit LLM**: $0.0025


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 18 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 71.4% | Score équilibré global |

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
| **MAE** | 0.90 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 56.7% | Erreur moyenne en % (complémentaire) |
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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 4 | 2.0 | 50.0% | ✅ partial | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB01] ReBEL chips premium & bio:

1. Analyse des intervalles entre commandes:
- Intervalles variables entre 7 et 26 jours
- Moyenne d'intervalle autour de 15-16 jours
- Pas de régularité stricte, mais rythme relativement proche

2. Analyse des quantités:
- Quantités oscillant entre 1 et 4 unités
- Moyenne des commandes: 2.43 unités
- Variation naturelle typique d'un comportement B2B

3. Recommandation de quantité:
- Quantité médiane historique: 2 unités
- Prise en compte de la variation de ±30%
- Choix d'une quantité conservative alignée avec l'historique
- Recommandation finale: 2 unités

**📅 Analyse Temporelle:**
Intervalles irréguliers mais resserrés, centrés autour de 15-16 jours. Variance acceptable dans un contexte B2B.

**📊 Analyse Quantité:**
Variations entre 1 et 4 unités. Moyenne à 2.43 unités. Fluctuations normales sans tendance forte.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [REB04] ReBEL chips premium & bio - thym/romarin125g :

1. Analyse temporelle des intervalles :
- Intervalles entre commandes variant de 12 à 46 jours
- Moyenne approximative : 20-25 jours
- Pattern légèrement irrégulier mais avec une certaine périodicité

2. Analyse des quantités :
- Quantités oscillant entre 1 et 3 unités
- Tendance centrale autour de 2 unités
- Variations considérées comme normales (±30%)
- Pas de croissance ou décroissance significative

3. Recommandation :
- Quantité recommandée : 2 unités
- Basée sur la moyenne historique
- Alignée avec le comportement de commande habituel
- Prend en compte la marge de variation normale en B2B

Facteurs additionnels :
- Période actuelle : Octobre 2025
- Stabilité apparente des besoins
- Pas de signaux de changement majeur dans le pattern de commande

**📅 Analyse Temporelle:**
Intervalles entre commandes variables : min 12 jours, max 46 jours. Moyenne autour de 20-25 jours. Pattern légèrement irrégulier.

**📊 Analyse Quantité:**
Quantités entre 1-3 unités. Moyenne centrée sur 2 unités. Variations normales sans tendance claire.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes du produit REB08:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes variant de 11 à 46 jours
- Pas de périodicité stricte mais tendance à commander toutes les 2-4 semaines
- Dernière commande le 24/09/2025, soit environ 8 jours avant la date actuelle

2. Analyse des quantités:
- Quantités oscillant entre 1 et 4 unités
- Moyenne des commandes : 1.7 unités
- Variation normale sans tendance haussière/baissière claire
- Variations conformes à la fourchette B2B acceptable de ±30%

3. Recommandation quantitative:
- Choix d'une quantité CONSERVATIVE de 2 unités
- Alignée avec la moyenne historique
- Correspond aux dernières commandes récentes
- Permet de maintenir un stock tampon sans surinvestissement

**📅 Analyse Temporelle:**
Commandes irrégulières mais groupées autour de 2-4 semaines, sans périodicité stricte

**📊 Analyse Quantité:**
Variations de 1-4 unités, moyenne de 1.7u, considérées comme normales

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g :

1. Analyse des intervalles entre commandes :
- Variations irrégulières entre les dates de commande
- Intervalles entre commandes : 
  * 24/09 - 08/08 : 47 jours
  * 08/08 - 18/07 : 21 jours
  * 18/07 - 16/07 : 2 jours
  * 16/07 - 18/06 : 28 jours
  * 18/06 - 03/06 : 15 jours
- Pas de périodicité claire, mais tendance à des commandes rapprochées

2. Analyse des quantités :
- Progression des quantités : 1u, 1u, 1u, 1u, 2u, 2u
- Légère tendance à l'augmentation des quantités (de 1 à 2 unités)
- Dernières deux commandes à 2 unités suggèrent un besoin récent plus important

3. Recommandation conservatrice :
- Basée sur les deux dernières commandes (2 unités)
- Prise en compte de la variation normale en B2B (±30%)
- Choix d'une quantité stable et récente
- Risque minimal de surstock ou de rupture

Recommandation finale : 2 unités

**📅 Analyse Temporelle:**
Intervalles de commande variables, pas de périodicité régulière. Tendance à des commandes plus fréquentes sur une période courte.

**📊 Analyse Quantité:**
Progression de 1 à 2 unités, dernières commandes stabilisées à 2 unités. Variation cohérente avec un comportement B2B normal.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>5. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [NUT04] NUTS & BERRIES energy bar:

1. Analyse temporelle des intervalles:
- Périodes entre commandes très régulières
- Moyenne de 15-16 jours entre chaque commande
- Dernière commande le 2025-09-24, soit environ 8 jours avant la date actuelle
- Modèle de commande très constant et prévisible

2. Analyse des quantités:
- Toutes les commandes sont strictement de 1 unité
- Aucune variation de quantité observée
- Commandes très stables et uniformes

3. Recommandation quantitative:
- Reconduction de la quantité historique standard
- Commande conservative de 1 unité
- Variation potentielle de ±30% non nécessaire ici, car historique ultra-stable

La recommandation de 1 unité maintient la dynamique d'achat actuelle avec un risque minimal.

**📅 Analyse Temporelle:**
Intervalles réguliers, moyenne de 15-16 jours, modèle très constant

**📊 Analyse Quantité:**
Commandes systématiquement de 1 unité, aucune variation

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse pas à pas de l'historique de commande pour le produit [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g:

1. Analyse des intervalles temporels:
- Intervalles irréguliers mais relativement rapprochés
- Entre 10-50 jours séparent chaque commande
- Dernières commandes plus fréquentes (environ toutes les 2-3 semaines)
- Suggestion d'un besoin régulier mais flexible

2. Analyse des quantités:
- Quantités stables: 1-2 unités par commande
- Légère tendance à 2 unités dans les dernières commandes
- Variations considérées comme normales (±30%)

3. Recommandation conservatrice:
- Basée sur les dernières commandes (2 unités)
- Prend en compte la stabilité des commandes précédentes
- Permet de maintenir un stock minimal sans surstock

Stratégie: Recommander 2 unités comme quantité standard, avec une confiance moyenne.

**📅 Analyse Temporelle:**
Commandes espacées de 10-50 jours, fréquence augmentant récemment. Pas de périodicité stricte mais tendance à des commandes bimensuelles.

**📊 Analyse Quantité:**
Quantités stables entre 1-2 unités, légère tendance à 2 unités dans les commandes récentes. Variations dans la plage normale de ±30%.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes du produit [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g :

1. Analyse des intervalles entre commandes :
- Variations entre 15-45 jours
- Pas de périodicité strictement régulière
- Dernier intervalle : 26 jours (entre 2025-08-08 et 2025-09-03)
- Intervalles légèrement irréguliers mais cohérents

2. Analyse des quantités :
- Majoritairement 1u par commande
- Exception : une commande de 4u en juin 2025
- Variabilité présente mais sans tendance claire
- Écart-type significatif dû à la commande de 4u

3. Recommandation conservatrice :
- Moyenne récente : 1-2u
- Proche des commandes typiques
- Prudence face à la variation de juin
- Marge de sécurité de ±30% 

Recommandation finale : 2 unités

**📅 Analyse Temporelle:**
Intervalles entre commandes variables (15-45 jours), sans périodicité stricte. Dernière commande il y a 29 jours.

**📊 Analyse Quantité:**
Commandes principalement à 1u, avec une variation exceptionnelle à 4u. Pas de tendance claire d'augmentation ou de diminution.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour [NUT03] NUTS & BERRIES energy bar:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes variables mais globalement rapprochés
- Périodicité approximative : toutes les 2-3 semaines
- Dernière commande le 2025-09-03, soit environ 4 semaines avant la date actuelle

2. Analyse des quantités:
- Toutes les commandes sont strictement identiques : 1 unité
- Aucune variation de quantité observée
- Commandes très constantes et prévisibles

3. Recommandation conservatrice:
- Maintien de la quantité historique standard
- Recommandation de 1 unité
- Confiance élevée due à l'uniformité absolue des commandes précédentes

4. Considérations B2B:
- Variation acceptable de ±30% 
- Recommandation reste stable à 1 unité
- Pas de signal d'augmentation ou de diminution des besoins

**📅 Analyse Temporelle:**
Commandes tous les 15-45 jours, moyenne autour de 30 jours. Dernière commande il y a 4 semaines.

**📊 Analyse Quantité:**
Quantité constante de 1 unité à chaque commande. Aucune variation détectable.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes pour le produit [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g:

1. Analyse temporelle des intervalles:
- Les commandes ne sont pas parfaitement régulières
- Intervalles entre commandes variant de 15 à 45 jours
- Dernière commande le 2025-09-03, soit environ 30 jours avant la date actuelle
- Pattern légèrement irrégulier mais avec une certaine périodicité autour de 30 jours

2. Analyse des quantités:
- Quantités oscillant entre 1u et 3u
- Moyenne des commandes : 1.8u
- Pas de tendance claire à la hausse ou à la baisse
- Variations considérées comme normales dans un contexte B2B (±30%)

3. Recommandation conservative:
- Se base sur la moyenne historique de 1.8u
- Arrondi prudemment à 2u pour anticiper un léger besoin supplémentaire
- Tient compte de la marge de ±30% acceptée en B2B

**📅 Analyse Temporelle:**
Intervalles entre commandes variables (15-45 jours), tendance autour de 30 jours, légèrement irrégulier

**📊 Analyse Quantité:**
Quantités entre 1u et 3u, moyenne à 1.8u, variations normales sans tendance marquée

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>10. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes de JOY02 Organic Strawberry Jam:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes: 
  * 2 jours (18/07 - 16/07)
  * 14 jours (30/06 - 16/07)
  * 33 jours (03/06 - 30/06)
- Les intervalles sont variables et irréguliers, ce qui suggère un besoin opportuniste plutôt que planifié

2. Analyse des quantités:
- Quantités commandées: 2u, 1u, 1u, 2u
- Variation entre 1-2 unités 
- Moyenne arithmétique : 1.5 unités
- Pas de tendance claire de croissance/décroissance

3. Recommandation conservative:
- Basée sur l'historique récent
- Variation acceptable ±30%
- Recommandation : 2 unités (proche de la moyenne et des dernières commandes)
- Garantit une couverture des besoins sans surstock

**📅 Analyse Temporelle:**
Intervalles de commande variables et non standardisés. Aucun rythme régulier détecté.

**📊 Analyse Quantité:**
Quantités stables entre 1-2 unités. Variation normale sans tendance significative.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (8)

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.8u (28j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.7u (17j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.6u (10j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 1.3u (12j restants) → prédit 2u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.3u (-15j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:56:20.225Z*
