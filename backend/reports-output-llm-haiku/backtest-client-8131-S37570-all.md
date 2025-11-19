# Rapport Backtest - Client ILIS    SA, FRANCESCO LOZANO

## Contexte

- **Client** : ILIS    SA, FRANCESCO LOZANO (ID: 8131)
- **Commande réelle** : S37570
- **Date commande** : 2025-06-20 08:53:32
- **Date cutoff système** : 2025-06-20 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 6
- **Tokens**: 5,757 input + 2,897 output = 8,654 total
- **Coût**: $0.0162 (~1.62¢)
- **Coût par produit LLM**: $0.0027


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 62.5% | 8 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 76.9% | Score équilibré global |

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
| **MAE** | 134.40 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 41.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (5)

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
| [PF0078] FILOU CHASSEUR 5 L | 200 | 800 | 600.0 | 75.0% | ✅ partial | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 35 | 50 | 15.0 | 30.0% | ✅ partial | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 5 | 10 | 5.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 104 | 52.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 52 | 52 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 200u vs Médiane: undefinedu (Réel: 800u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 800u
- 📉 **Erreur LLM**: 600u (75.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit FILOU CHASSEUR 5 L:

1. Analyse des intervalles entre commandes:
- Intervalles irréguliers mais principalement entre 7-10 jours
- Variation de 3-13 jours entre les commandes
- Pas de cycle parfaitement régulier, mais rythme semi-constant

2. Analyse des quantités:
- Quantités variables: 80u, 160u, 240u, 320u, 400u
- Modes principaux: 160u (4 fois), 240u (3 fois)
- Dernières commandes récentes: 160u, 240u
- Écart-type significatif indiquant des besoins fluctuants

3. Recommandation conservatrice:
- Moyenne des 5 dernières commandes: ~180u
- Ajustement selon la variabilité: +/- 10-20%
- Recommandation finale: 200u
  - Proche de la moyenne
  - Sécurise le stock
  - Reste dans la fourchette de ±30% acceptable en B2B

Hypothèses sous-jacentes:
- Demande client variable
- Pas de tendance claire à la hausse/baisse
- Stratégie de commande opportuniste

**📅 Analyse Temporelle:**
Commandes principalement tous les 7-10 jours, mais avec une variabilité de 3-13 jours. Pas de cycle parfaitement régulier.

**📊 Analyse Quantité:**
Quantités très variables (80u à 400u), avec des modes à 160u et 240u. Dernières commandes stabilisées autour de 160-240u.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 35u vs Médiane: undefinedu (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 35u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 15u (30.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit FILOU PROVENCALE 5 L:

1. Analyse des intervalles entre commandes:
- Intervalles irréguliers variant entre 7 et 14 jours
- Dernière commande le 2025-06-13, donc potentielle prochaine commande attendue autour du 2025-06-27
- Pas de périodicité stricte, mais tendance à des commandes assez rapprochées

2. Analyse des quantités:
- Quantités très variables: 0u, 12u, 20u, 24u, 52u, 80u
- Moyenne des commandes non nulles: ~34 unités
- Dernières commandes: 20u et 80u (forte variation)
- Écart-type élevé indiquant une demande fluctuante

3. Recommandation conservative:
- Moyenne des 3 dernières commandes non nulles: (20 + 80 + 24) / 3 ≈ 41u
- Ajustement pour variation B2B (±30%): Fourchette 29-53u
- Recommandation prudente: 35 unités

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, entre 7-14 jours, sans périodicité stricte

**📊 Analyse Quantité:**
Fortes variations de quantités, de 0 à 80 unités, moyenne des commandes non nulles autour de 34 unités

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 5u vs Médiane: undefinedu (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 5u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Intervalles temporels:
- Les commandes sont irrégulières
- Intervalles variant de 7 à 48 jours
- Pas de périodicité claire
- Dernier intervalle: 28 jours entre 2025-05-16 et 2025-06-13

2. Analyse des quantités:
- Quantités très variables: de 2u à 60u
- Plusieurs commandes autour de 5u (4 occurrences)
- Une commande exceptionnelle à 60u (probablement événementielle)
- Tendance globale: commandes plutôt petites et stables autour de 5u

3. Recommandation:
- Écarter la commande outlier de 60u 
- Se concentrer sur les commandes typiques autour de 5u
- Appliquer une marge de sécurité de ±30%
- Recommandation conservatrice: 5 unités

**📅 Analyse Temporelle:**
Commandes irrégulières, intervalles variables (7-48 jours), pas de cycle standard

**📊 Analyse Quantité:**
Quantités instables, majorité autour de 5u, une commande outlier à 60u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 52u vs Médiane: undefinedu (Réel: 104u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 52u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 104u
- 📉 **Erreur LLM**: 52u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour FILOU CURRY KETCHUP 10 KG:

1. Analyse des intervalles entre commandes:
- Intervalles réguliers observés : environ 15-30 jours entre chaque commande
- Dernière commande le 2025-06-03
- Intervalle moyen : ~21 jours
- Pattern très stable et prévisible

2. Analyse des quantités:
- Quantité constante à 52 unités pour TOUTES les commandes
- Aucune variation, donc stabilité parfaite
- Pas de tendance haussière ou baissière détectable

3. Recommandation quantitative:
- Maintien strict de la quantité historique : 52 unités
- Variation acceptable de ±30% = [36-68] unités
- Choix de 52 unités = meilleure recommandation conservative
- Haute confiance due à l'historique ultra-régulier

Stratégie recommandée : Commande de 52 unités de [PF0085] FILOU CURRY KETCHUP 10 KG

**📅 Analyse Temporelle:**
Intervalles réguliers entre commandes, centrés autour de 21 jours. Dernier achat le 2025-06-03, donc prochain achat recommandé autour du 2025-07-04 (+/- quelques jours).

**📊 Analyse Quantité:**
Quantité parfaitement stable à 52 unités sur 5 commandes consécutives. Aucune variation détectable.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 52u vs Médiane: undefinedu (Réel: 52u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 52u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 52u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour FILOU TOMATO KETCHUP 10KG:

1. Analyse des intervalles entre commandes:
- Intervalles entre commandes: 
  * 2025-05-23 -> 2025-05-02 : 21 jours
  * 2025-05-02 -> 2025-04-28 : 4 jours
  * 2025-04-28 -> 2025-02-26 : 61 jours
- Conclusion: Intervalle irrégulier mais tendant vers un cycle d'environ 30-45 jours

2. Analyse des quantités:
- Quantités historiques: 52u, 26u, 52u, 52u
- Quantité modale/récurrente: 52 unités
- Variation observée: Un lot de 26u (probablement une demi-commande)
- Écart par rapport à la moyenne: Négligeable, cohérent avec les variations B2B attendues

3. Recommandation quantitative:
- Quantité de référence: 52 unités
- Variation acceptable ±30%: Entre 36 et 68 unités
- Recommandation conservatrice: 52 unités (quantité la plus fréquente)

La recommandation de 52 unités est justifiée par la stabilité historique et s'inscrit dans les variations normales du contexte B2B.

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers mais avec une tendance autour de 30-45 jours. Dernier intervalle de 52 jours depuis la dernière commande.

**📊 Analyse Quantité:**
Quantités principalement stables à 52 unités, avec une occurrence de 26 unités (possiblement un demi-lot).

**📈 Tendance détectée:** ❌ Non

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
| [PF0097] FILOU MOUTARDE 5 KG | 25 | Stock prédit: -13.9u (-16j restants) → prédit 25u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 20 | Stock prédit: 6.1u (14j restants) → prédit 20u mais non commandé |
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 15 | Stock prédit: -2.6u (-22j restants) → prédit 15u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:55:06.955Z*
