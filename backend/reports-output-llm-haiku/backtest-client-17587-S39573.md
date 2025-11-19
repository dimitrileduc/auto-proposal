# Rapport Backtest - Client Epicerie Uhoda Vennes

## Contexte

- **Client** : Epicerie Uhoda Vennes (ID: 17587)
- **Commande réelle** : S39573
- **Date commande** : 2025-10-06 09:26:46
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 33
- **Tokens**: 29,899 input + 14,932 output = 44,831 total
- **Coût**: $0.0836 (~8.36¢)
- **Coût par produit LLM**: $0.0025


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 26.8% | 41 produits prédits, 11 corrects |
| **Rappel** | 78.6% | 14 produits réels, 11 détectés |
| **F1-Score** | 40.0% | Score équilibré global |

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
| **MAE** | 0.55 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 36.4% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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

## True Positives (11)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit LV160:

1. Analyse des intervalles temporels:
- Entre 2025-06-13 et 2025-07-02: 19 jours
- Entre 2025-07-02 et 2025-07-17: 15 jours
- Entre 2025-07-17 et 2025-09-15: 59 jours
Les intervalles sont irréguliers, avec une dernière période plus longue de 59 jours.

2. Analyse des quantités:
- Quantités observées: 2u, 1u, 2u, 2u
- Moyenne: 1.75 unités
- Variation stable autour de 2 unités, avec un léger creux à 1 unité

3. Recommandation:
- Quantité recommandée: 2 unités
- Justification: 
  * Correspond à la quantité la plus fréquente
  * Proche de la moyenne historique
  * Prend en compte la variabilité normale en B2B (±30%)
  * Période récente suggère une stabilisation à 2 unités

**📅 Analyse Temporelle:**
Intervalles entre commandes irréguliers, tendant vers des périodes de 15-59 jours. Dernier intervalle plus long (59 jours).

**📊 Analyse Quantité:**
Quantités principalement stables autour de 2 unités, avec une variation mineure (1-2 unités).

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [LV159] LV Tartinade aux Truffes 135g:

1. Analyse des intervalles entre commandes:
- Entre 2025-09-15 et 2025-08-07: 39 jours
- Entre 2025-08-07 et 2025-07-17: 21 jours
- Intervalle moyen: environ 30 jours
- Conclusion: Intervalles relativement réguliers, suggérant un besoin mensuel stable

2. Analyse des quantités:
- Toutes les commandes sont de 1 unité
- Aucune variation de quantité
- Stable à 1 unité par commande

3. Recommandation conservatrice:
- Basée sur l'historique constant de 1 unité
- Période entre commandes d'environ 30 jours
- Recommandation de 1 unité pour maintenir le stock
- Variation acceptable de ±30% non nécessaire ici

La recommandation de 1 unité est hautement fiable et alignée avec l'historique des commandes.

**📅 Analyse Temporelle:**
Intervalles de commande réguliers, centrés autour de 30 jours. Comportement d'achat prévisible et stable.

**📊 Analyse Quantité:**
Quantité constante de 1 unité par commande. Aucune variation détectée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la demande pour le produit [LV130] LV BIO Tartinade Paprika Chili 190g:

1. Analyse des intervalles entre commandes:
- Intervalles entre commandes relativement réguliers
- Moyenne des intervalles: environ 30-40 jours
- Dernière commande le 2025-09-15
- Variation d'intervalle relativement stable (±15 jours)

2. Analyse des quantités:
- Quantités principalement stables à 2 unités
- Une commande à 1 unité détectée (2025-06-13)
- Variation mineure qui reste dans les limites attendues en B2B (±30%)

3. Recommandation conservatrice:
- Basée sur le mode (2 unités) des commandes précédentes
- Prend en compte la stabilité historique
- Ajustement minimal pour maintenir un stock optimal
- Recommandation de 2 unités comme quantité la plus probable

Paramètres de décision:
- Régularité des commandes
- Stabilité des quantités
- Approche conservative en B2B

**📅 Analyse Temporelle:**
Intervalles entre commandes:
- 2025-06-13 → 2025-07-02: 19 jours
- 2025-07-02 → 2025-08-07: 36 jours
- 2025-08-07 → 2025-09-15: 39 jours
Moyenne: environ 31-32 jours
Écart-type relativement faible, indiquant une régularité

**📊 Analyse Quantité:**
Analyse quantitative:
- Mode: 2 unités
- Nombre de commandes à 2u: 3/4
- Nombre de commandes à 1u: 1/4
- Variation dans l'intervalle acceptable (±30%)
Stabilité globale des quantités confirmée

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit LV162:

1. Analyse des intervalles temporels:
- Intervalles moyens entre commandes : environ 15-20 jours
- Variation relativement régulière et prévisible
- Dernière commande le 2025-09-15, donc prochain approvisionnement attendu autour du 2025-10-06

2. Analyse des quantités:
- Quantités oscillant entre 1 et 2 unités
- Pas de tendance claire de croissance ou décroissance
- Variations considérées comme normales dans un contexte B2B (+/- 30%)
- Mode (valeur la plus fréquente) = 2 unités

3. Recommandation conservatrice:
- Basée sur l'historique récent
- Quantité stable de 2 unités
- Cohérent avec la majorité des commandes précédentes
- Marge de sécurité incluse

**📅 Analyse Temporelle:**
Intervalles réguliers de 15-20 jours entre commandes, avec une périodicité assez stable

**📊 Analyse Quantité:**
Variations normales entre 1-2 unités, sans tendance significative de hausse ou baisse

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV161] LV Tartinade Mangue curry 190g:

1. Analyse des intervalles temporels:
- Entre la 1ère et 2ème commande : 18 jours
- Entre la 2ème et 3ème commande : 25 jours
- Entre la 3ème et 4ème commande : 12 jours
Intervalle moyen : ~18-19 jours
Conclusion : Intervalles relativement réguliers avec une légère variabilité

2. Analyse des quantités:
- Dernière commande : 1u
- Commandes précédentes : 2u (x3 fois)
Observation : Quantité stable à 2u, dernière commande légèrement réduite à 1u
Variations dans la plage acceptable de ±30%

3. Recommandation de quantité:
- Historique principalement à 2u
- Dernière commande à 1u (possible ajustement ponctuel)
- Recommandation conservatrice : 2u
- Justification : Maintenir le niveau de commande historique standard

Recommandation finale : Commander 2 unités

**📅 Analyse Temporelle:**
Intervalles entre commandes relativement réguliers, centrés autour de 18-19 jours. Léger écart mais pas de pattern erratique significatif.

**📊 Analyse Quantité:**
Quantités stables à 2u, avec une variation ponctuelle à 1u. Variations dans la norme acceptable de ±30% pour le B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour le produit [LV131] LV Tartinade Potiron 190g:

1. Analyse temporelle des intervalles:
- Entre 2025-06-13 et 2025-07-02: 19 jours
- Entre 2025-07-02 et 2025-07-17: 15 jours
- Entre 2025-07-17 et 2025-08-25: 39 jours
Ces intervalles sont relativement irréguliers mais rapprochés, suggérant un besoin récurrent mais variable.

2. Analyse des quantités:
- Toutes les commandes sont strictement identiques à 1 unité
- Aucune variation de quantité n'est observée
- Stabilité parfaite des volumes commandés

3. Recommandation conservatrice:
- Compte tenu de la constance historique
- En respectant la tolérance B2B de ±30%
- Je recommande de maintenir la quantité à 1 unité

Stratégie: Reconduction à l'identique avec haute confiance.

**📅 Analyse Temporelle:**
Intervalles variables: 15-39 jours, moyenne autour de 24-25 jours entre commandes. Pas de périodicité stricte.

**📊 Analyse Quantité:**
Quantité stable à 1 unité. Aucune variation détectée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV332] LV Tartinade Olive Caper Tomato 190g :

1. Analyse des intervalles entre commandes :
- Entre la 1ère et 2ème commande : 36 jours
- Entre la 2ème et 3ème commande : 41 jours
- Intervalle moyen : environ 38-39 jours
- Conclusion : Intervalles relativement réguliers, suggérant un besoin périodique stable

2. Analyse des quantités :
- Progression des commandes : 1u → 1u → 2u
- Légère tendance à l'augmentation des volumes
- Dernière commande à 2 unités semble être le point de référence actuel

3. Recommandation conservative :
- Basée sur la dernière commande (2 unités)
- Variation acceptable de ±30%
- Recommandation finale : 2 unités
- Justification : Maintenir le niveau récent sans sur-stockage

Paramètres de décision :
- Stabilité des intervalles
- Dernière commande comme référence
- Approche prudente en B2B

**📅 Analyse Temporelle:**
Intervalles de commande réguliers, centrés autour de 38-39 jours. Pas de disruption significative détectée.

**📊 Analyse Quantité:**
Quantités en légère progression, passant de 1 à 2 unités. Variation considérée comme normale dans le cadre B2B.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>8. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV336] LV BIO Tartinade Tomato Basilico 380g:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes irréguliers
- Minimum: 1,5 mois (entre 2024-05-16 et 2024-06-26)
- Maximum: 6 mois (entre 2024-09-24 et 2025-03-21)
- Moyenne approximative: 2-3 mois
- Pattern: Commandes sporadiques sans cycle fixe précis

2. Analyse des quantités:
- Variations entre 1u et 3u
- Modes principaux: 1u (5 fois), 2u (2 fois), 3u (1 fois)
- Pas de tendance claire à l'augmentation ou la diminution
- Fluctuations considérées comme normales en B2B (±30%)

3. Recommandation conservatrice:
- Dernière commande: 1u (2025-07-17)
- Moyenne historique proche de 1-2u
- Choix stratégique: recommander 1u pour minimiser le risque de surstock
- Permet de maintenir un stock minimal sans immobilisation de capital

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, moyenne autour de 2-3 mois, sans cycle standardisé

**📊 Analyse Quantité:**
Quantités variantes entre 1u et 3u, mode principal à 1u, variations normales

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (30)

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
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Stock prédit: 0.8u (12j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.9u (18j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 1.1u (25j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 1.1u (25j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 0.5u (7j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Stock prédit: 0.6u (25j restants) → prédit 2u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock prédit: -0.3u (-9j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Stock prédit: 0.4u (23j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 2 | Stock prédit: -0.1u (-1j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.6u (-21j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 2 | Stock prédit: -0.6u (-21j restants) → prédit 2u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: -0.4u (-22j restants) → prédit 1u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 1 | Stock prédit: -0.7u (-37j restants) → prédit 1u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-21j restants) → prédit 1u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Stock prédit: -0.4u (-26j restants) → prédit 1u mais non commandé |
| [CB001] CB Apple juice 25cl | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.8u (-114j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -1.1u (-59j restants) → prédit 1u mais non commandé |


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
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Stock suffisant: 1.5u (56j restants > seuil 30j) |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock suffisant: 1.3u (33j restants > seuil 30j) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock suffisant: 1.3u (33j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T15:57:38.229Z*
