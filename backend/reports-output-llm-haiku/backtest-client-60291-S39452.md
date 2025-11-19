# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S39452
- **Date commande** : 2025-10-01 07:17:25
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 23
- **Tokens**: 21,199 input + 10,464 output = 31,663 total
- **Coût**: $0.0588 (~5.88¢)
- **Coût par produit LLM**: $0.0026


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
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes pour [RIT02] RITCHIE Citron - Framboise:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes relativement réguliers
- Variation entre 6-16 jours
- Dernières commandes très rapprochées (7-17 jours)
- Pattern suggère un besoin bimensuel stable

2. Analyse des quantités:
- Quantités très stables: majoritairement 2 unités
- Quelques variations mineures: 1u (min), 3-4u (max)
- Dernières 3 commandes strictement à 2u
- Pas de tendance haussière/baissière claire

3. Recommandation conservatrice:
- Maintenir le volume habituel de 2 unités
- Correspond au mode (valeur la plus fréquente)
- Cohérent avec les dernières commandes
- Variation acceptable de ±30% = entre 1-3u
- Choix de 2u minimise le risque de surstockage

**📅 Analyse Temporelle:**
Intervalles réguliers, centrés autour de 10-14 jours entre commandes

**📊 Analyse Quantité:**
Quantités stables autour de 2 unités, variations mineures acceptables

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes de RITCHIE Cola 275ml:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes relativement réguliers
- Moyenne d'environ 1 commande tous les 10-15 jours
- Période stable et prévisible sur les 4 derniers mois

2. Analyse des quantités:
- Quantités majoritairement stables autour de 3-4 unités
- Dernière commande à 2 unités semble être une légère anomalie
- Variation dans une fourchette acceptable de ±30%
- Pas de tendance haussière ou baissière claire

3. Recommandation conservatrice:
- Quantité recommandée: 3 unités
- Alignée avec la majorité des commandes historiques
- Prend en compte la dernière commande plus basse (2u)
- Conserve une approche prudente sans sur ou sous-stockage

**📅 Analyse Temporelle:**
Commandes tous les 7-15 jours, régularité moyenne à bonne. Dernier intervalle légèrement plus court (7 jours) mais dans la norme.

**📊 Analyse Quantité:**
Quantités stables entre 2-5 unités, concentration autour de 3 unités. Variations mineures considérées comme normales en B2B.

**📈 Tendance détectée:** ❌ Non

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
Analyse détaillée des commandes historiques de RITCHIE Cola ZERO:

1. Analyse temporelle des intervalles:
- Intervalle moyen entre commandes: environ 14-15 jours
- Pattern semi-régulier avec légers écarts
- Dernières commandes plus rapprochées (7-8 jours en septembre)

2. Analyse des quantités:
- Quantités historiques: 2u, 3u, 4u
- Variation normale entre 2-4 unités
- Dernière commande à 2u le 2025-09-24
- Moyenne glissante proche de 2.5-3 unités

3. Recommandation quantitative:
- Base recommandée: 3 unités
- Justification:
  * Proche de la moyenne historique
  * Conservatisme recommandé (+/- 30%)
  * Reflète le dernier comportement d'achat
  * Permet absorption des variations marginales

**📅 Analyse Temporelle:**
Commandes semi-régulières, intervalle moyen 14-15 jours, tendance récente à des cycles plus courts

**📊 Analyse Quantité:**
Variations normales entre 2-4 unités, pas de tendance forte à la hausse ou à la baisse

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
Analyse détaillée de l'historique des commandes pour le produit [RIT01] RITCHIE Orange - verre 275ml:

1. Analyse des intervalles entre commandes:
- Entre les commandes : environ 2 semaines à 1 mois
- Irrégularité modérée mais pas totalement aléatoire
- Dernière commande le 2025-09-17 (il y a environ 2 semaines de la date actuelle)

2. Analyse des quantités:
- Quantités variables : 1u, 2u (x3), 5u
- Moyenne = 2.33 unités
- Médiane = 2 unités
- Un pic à 5u, mais principalement stable autour de 2u
- Variations dans la plage normale B2B (±30%)

3. Recommandation conservative:
- Quantité recommandée : 2 unités
- Basée sur la médiane historique
- Alignée avec la tendance centrale des commandes
- Prend en compte la variabilité modérée sans surstock

Décision finale : Commander 2 unités comme quantité la plus représentative et prudente.

**📅 Analyse Temporelle:**
Intervalles entre commandes irréguliers mais contenus entre 2 semaines et 1 mois. Dernière commande récente (2025-09-17), suggérant un rythme de réapprovisionnement stable.

**📊 Analyse Quantité:**
Quantités principalement autour de 2 unités, avec une variation normale incluant un pic occasionnel à 5 unités. Pas de tendance claire à la hausse ou à la baisse.

**📈 Tendance détectée:** ❌ Non

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
Analyse détaillée de l'historique des commandes pour le produit [fsv17] Mélange de noix bio vrac 2,75kg :

1. Analyse temporelle des intervalles :
- Entre la 1ère et 2ème commande : 44 jours
- Entre la 2ème et 3ème commande : 68 jours
- Écart moyen : environ 56 jours
- Variabilité modérée mais pas complètement irrégulière

2. Analyse des quantités :
- Commandes : 5u, 4u, 5u
- Moyenne : 4,67u
- Variation très faible (+/- 1u)
- Tendance stable autour de 5 unités

3. Recommandation conservatrice :
- Quantité médiane historique : 5 unités
- Respect de la règle B2B (+/- 30%) : entre 3,5 et 6,5u
- Recommandation finale : 5 unités

La recommandation conserve la stabilité observée dans les commandes précédentes.

**📅 Analyse Temporelle:**
Intervalles entre commandes variables mais globalement autour de 56 jours. Pas de cycle parfaitement régulier.

**📊 Analyse Quantité:**
Quantités stables autour de 5 unités, avec très faible variation. Aucune tendance significative à la hausse ou à la baisse.

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
Analyse étape par étape de l'historique des commandes pour le produit [fsv05] Noix de pecan nature bio vrac 2,2kg :

1. Analyse temporelle des intervalles entre commandes :
- Entre 2025-06-11 et 2025-08-04 : ~54 jours
- Entre 2025-08-04 et 2025-09-17 : ~44 jours
Intervalle relativement régulier, avec une moyenne d'environ 49 jours entre les commandes.

2. Analyse des quantités :
- Commandes : 3u, 2u, 3u
- Variation stable autour de 2-3 unités
- Pas de tendance significative à la hausse ou à la baisse
- Variations normales pour un contexte B2B (+/- 30%)

3. Recommandation de quantité :
- Moyenne historique : 2,67 unités
- Arrondi conservateur à 3 unités
- Prend en compte la stabilité des commandes précédentes
- Permet de maintenir un stock de sécurité sans surstock

La recommandation de 3 unités offre un équilibre entre la demande historique et les besoins de stock.

**📅 Analyse Temporelle:**
Intervalles entre commandes relativement réguliers, autour de 49 jours en moyenne. Pas de pattern erratique détecté.

**📊 Analyse Quantité:**
Quantités stables entre 2 et 3 unités. Variations normales sans tendance claire à la hausse ou à la baisse.

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
Analyse étape par étape de l'historique de commandes:

1. Analyse temporelle des intervalles:
- Les commandes ne sont PAS complètement régulières
- Écarts entre commandes variables:
  * 14 jours (août → septembre)
  * 26 jours (juillet → août)
  * 33 jours (juin → juillet)
- Tendance à des commandes de plus en plus espacées

2. Analyse des quantités:
- Commandes principalement à 1 unité
- Dernière commande (septembre) à 2 unités, possible léger changement
- Variations restent dans une fourchette acceptable (+/- 30%)

3. Recommandation conservatrice:
- Basée sur la dernière commande: 2 unités
- Prend en compte la légère augmentation récente
- Reste prudent sans sur-stocker

Paramètres clés:
- Période récente: commande de 2u
- Variation acceptable: ±30%
- Stratégie: stock minimal + flexibilité

**📅 Analyse Temporelle:**
Intervalles irréguliers entre 14-33 jours, tendance à l'espacement des commandes

**📊 Analyse Quantité:**
Majorité des commandes à 1u, dernière commande à 2u, variations mineures

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
Analyse étape par étape des commandes historiques pour le produit [RIT11] RITCHIE Orange Sanguine - verre 275ml :

1. Analyse des intervalles temporels :
- Entre les commandes, les intervalles varient de 13 à 44 jours
- Pas de périodicité strictement régulière, mais un rythme relativement constant
- Moyenne des intervalles : environ 26-27 jours

2. Analyse des quantités :
- Quantités historiques : 1u, 2u, 1u, 3u
- Variations non-linéaires mais relativement contenues
- Moyenne des quantités : 1.75 unités
- Variation dans une plage acceptable (+/- 30%)

3. Recommandation conservative :
- Basée sur la moyenne historique : 2 unités
- Prend en compte la variabilité des commandes précédentes
- Correspond à la tendance centrale de l'historique

**📅 Analyse Temporelle:**
Intervalles entre commandes variables (13-44 jours), pas de cycle strict mais rythme globalement cohérent.

**📊 Analyse Quantité:**
Quantités fluctuantes entre 1 et 3 unités, moyenne à 1.75u, variations dans la norme B2B.

**📈 Tendance détectée:** ❌ Non

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
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 2 | Stock prédit: 0.4u (3j restants) → prédit 2u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | Stock prédit: 2.1u (13j restants) → prédit 3u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 1.4u (13j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 2 | Stock prédit: 0.6u (19j restants) → prédit 2u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | Stock prédit: 0.8u (8j restants) → prédit 2u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: 0.6u (16j restants) → prédit 1u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 4 | Stock prédit: 0.4u (2j restants) → prédit 4u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | Stock prédit: 2.9u (18j restants) → prédit 5u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Stock prédit: 0.9u (23j restants) → prédit 2u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: -0.6u (-16j restants) → prédit 1u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 2 | Stock prédit: 0.5u (28j restants) → prédit 2u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 4 | Stock prédit: -1.0u (-30j restants) → prédit 4u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:54:26.624Z*
