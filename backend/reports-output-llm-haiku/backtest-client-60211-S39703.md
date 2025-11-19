# Rapport Backtest - Client BIOK CORBAIS

## Contexte

- **Client** : BIOK CORBAIS (ID: 60211)
- **Commande réelle** : S39703
- **Date commande** : 2025-10-16 06:40:28
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 25
- **Tokens**: 22,949 input + 11,444 output = 34,393 total
- **Coût**: $0.0641 (~6.41¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.5% | 29 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 51.3% | Score équilibré global |

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
| **MAE** | 0.60 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 55.0% | Erreur moyenne en % (complémentaire) |
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
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 1 | 3.0 | 300.0% | ✅ partial | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit JOY02:

1. Analyse temporelle des intervalles:
- Entre les commandes: environ 30-33 jours
- Intervalle relativement régulier, suggérant un cycle d'approvisionnement mensuel
- Dernier intervalle: 37 jours (légèrement plus long que la moyenne)

2. Analyse des quantités:
- Quantités alternant entre 1 et 2 unités
- Pas de croissance ou décroissance claire
- Variations normales dans la plage attendue en B2B (±30%)

3. Recommandation de quantité:
- Moyenne des dernières commandes: (1 + 2 + 2 + 1) / 4 = 1.5
- Arrondi conservativement à 2 unités
- Correspond à la tendance historique
- Permet de maintenir un stock tampon minimal

**📅 Analyse Temporelle:**
Intervalles entre commandes relativement constants (30-37 jours), suggérant un cycle mensuel stable.

**📊 Analyse Quantité:**
Quantités alternant entre 1 et 2 unités, variations normales sans tendance marquée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes pour le produit REB04:

1. Analyse temporelle:
- Les intervalles entre commandes sont variables
- Minimum: 6 jours (entre 2025-07-07 et 2025-07-16)
- Maximum: 44 jours (entre 2025-08-27 et 2025-09-10)
- Moyenne des intervalles: environ 16-20 jours
- Pas de périodicité stricte, mais rythme relativement régulier

2. Analyse des quantités:
- Quantités très variables: 1u, 3u, 4u, 5u, 6u
- Minimum: 1 unité
- Maximum: 6 unités
- Moyenne: environ 2.6 unités
- Dernière commande: 1 unité (2025-10-09)

3. Recommandation conservatrice:
- Choix de 3 unités basé sur:
  * Proche de la moyenne historique
  * Permet une marge de sécurité
  * Compatible avec les variations normales en B2B (±30%)
- Quantité prudente qui ne sur-stocke pas mais couvre les besoins probables

**📅 Analyse Temporelle:**
Intervalles de commande variables, sans périodicité fixe. Moyenne autour de 16-20 jours, mais grande variabilité entre 6 et 44 jours.

**📊 Analyse Quantité:**
Fortes variations de 1 à 6 unités, sans tendance claire. Moyenne autour de 2.6 unités, dernière commande à 1 unité.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [REB01] ReBEL chips premium & bio :

1. Analyse temporelle des intervalles :
- Intervalles entre commandes : entre 7 et 23 jours
- Moyenne d'intervalle : environ 14 jours
- Observation : Pas complètement régulier mais avec une certaine périodicité

2. Analyse des quantités :
- Quantités variantes : 1u, 2u, 3u, 4u, 6u
- Moyenne : 2.33 unités
- Min : 1u, Max : 6u
- Variation importante mais typique en B2B (±30% acceptable)

3. Recommandation quantitative :
- Dernière commande : 1u (2025-10-09)
- Tendance récente penche vers des petites quantités (1-2u)
- Recommandation conservatrice : 2 unités
- Justification : Proche de la moyenne historique, sécurise le stock sans surcharger

**📅 Analyse Temporelle:**
Commandes espacées de 7-23 jours, périodicité moyenne de 14 jours. Légère variabilité mais pattern identifiable.

**📊 Analyse Quantité:**
Quantités très variables (1-6u), moyenne à 2.33u. Variations normales en contexte B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour [NOD01] NODA limonade bio:

1. Analyse des intervalles entre commandes:
- Intervalles moyens: environ 30-45 jours
- Derniers intervalles:
  * 2025-10-09 -> 2025-08-12 : 58 jours
  * 2025-08-12 -> 2025-07-16 : 27 jours
  * 2025-07-16 -> 2025-06-18 : 29 jours
- Conclusion: Intervalles relativement réguliers avec légère variabilité

2. Analyse des quantités:
- Quantités historiques: 1u, 1u, 2u, 1u
- Moyenne: 1.25 unités
- Variation normale, pas de tendance claire à la hausse ou à la baisse
- Dernière commande: 1 unité (tendance récente stable)

3. Recommandation conservative:
- Basée sur le dernier pattern (1 unité)
- Prise en compte de la variabilité normale B2B (±30%)
- Recommandation finale: 1 unité

Justification de la recommandation:
- Stable sur les dernières commandes
- Pas de signal fort d'augmentation des besoins
- Approche prudente en conservant le niveau actuel

**📅 Analyse Temporelle:**
Intervalles entre commandes réguliers, centrés autour de 30-45 jours. Dernière période légèrement plus longue (58 jours) mais sans signal d'alarme.

**📊 Analyse Quantité:**
Quantités stables autour de 1-2 unités, avec une moyenne de 1.25. Dernières commandes à 1 unité indiquent un pattern récent constant.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [JOY04] JOY! Organic Four-Fruit Jam 370g:

1. Analyse des intervalles temporels:
- Entre 2025-07-07 et 2025-08-27: 51 jours
- Entre 2025-08-27 et 2025-09-10: 14 jours
- Intervalle irrégulier mais relativement rapproché
- Période moyenne entre commandes: environ 32-33 jours

2. Analyse des quantités:
- Quantité constante à 1 unité à chaque commande
- Pas de variation dans les volumes commandés
- Commandes régulières malgré des intervalles variables

3. Recommandation conservatrice:
- Maintenir la quantité historique de 1 unité
- Variation potential ±30% non nécessaire ici
- Commandes stables et prévisibles

Contexte B2B: Commande stable, pas de signaux de changement de besoin.

**📅 Analyse Temporelle:**
Intervalles entre commandes variables mais rapprochés (14-51 jours). Période moyenne: ~32-33 jours.

**📊 Analyse Quantité:**
Quantité constante à 1 unité. Aucune variation détectée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commande pour le produit [ORG04] ORGANICA crunchy fruit fraise 12g:

1. Analyse temporelle des intervalles:
- Entre 1ère et 2ème commande : 14 jours
- Entre 2ème et 3ème commande : 52 jours
- Écart irrégulier, pas de périodicité claire
- Dernière commande il y a environ 49 jours (depuis 2025-10-16)

2. Analyse des quantités:
- Toutes les commandes sont strictement de 1 unité
- Quantité parfaitement constante
- Aucune variation observée

3. Recommandation:
- Compte tenu de l'historique stable
- Marge de ±30% non nécessaire ici
- Recommandation conservatrice = 1 unité
- Niveau de confiance moyen due à l'irrégularité temporelle

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers : 14 jours puis 52 jours. Pas de périodicité standardisée.

**📊 Analyse Quantité:**
Quantité constante à 1 unité pour toutes les commandes. Variation = 0%.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB03] ReBEL chips premium & bio - poivre noir 125g :

1. Analyse temporelle des intervalles :
- Intervalles entre commandes : 
  13-14 jours (2025-09-10 - 2025-08-27)
  15 jours (2025-08-27 - 2025-08-12)
  16-17 jours (2025-08-12 - 2025-07-16)
  9 jours (2025-07-16 - 2025-07-07)
Observation : Intervalles relativement réguliers, entre 9 et 17 jours, avec une moyenne d'environ 13-14 jours.

2. Analyse des quantités :
- Quantités commandées : 1u, 2u, 2u, 3u, 6u
- Progression : Tendance à l'augmentation 
- Dernière commande : 6 unités (pic significatif)
- Moyenne des 3 dernières commandes : 3.33 unités

3. Recommandation conservatrice :
- Moyenne des dernières commandes : 3.33u
- Variation B2B acceptable : ±30%
- Fourchette recommandée : 2-4 unités
- Recommandation finale : 4 unités (légèrement au-dessus de la moyenne, mais en dessous du pic)

Justification : La recommandation de 4 unités reflète une croissance prudente tout en restant dans les limites de variation normales en B2B.

**📅 Analyse Temporelle:**
Intervalles de commande relativement réguliers, entre 9 et 17 jours, moyenne autour de 13-14 jours. Pas de pattern totalement fixe mais cohérence globale.

**📊 Analyse Quantité:**
Quantités en progression : 1u → 2u → 2u → 3u → 6u. Dernière commande représente un pic, mais tendance générale à la hausse.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour [REB02] ReBEL chips paprika fumé 125g :

1. Analyse temporelle des intervalles :
- Intervalles entre commandes très variables
- Minimum : 5 jours
- Maximum : 55 jours
- Moyenne : environ 18-20 jours
- Conclusion : Approvisionnement irrégulier et non standardisé

2. Analyse des quantités :
- Quantités très fluctuantes : 1u, 2u, 4u, 5u, 6u
- Pas de tendance linéaire claire
- Dernière commande à 6 unités est un pic inhabituel
- Écart-type élevé indiquant une grande variabilité

3. Recommandation conservative :
- Écarter le dernier pic de 6u comme potentielle anomalie
- Se concentrer sur la médiane/moyenne basse
- Recommandation : 2 unités
- Permet de maintenir un stock minimal
- Correspond à plusieurs commandes historiques
- Reste dans la zone de variation normale (±30%)

Stratégie : Commande prudente qui minimise le risque de surstock tout en assurant la disponibilité du produit.

**📅 Analyse Temporelle:**
Intervalles de commandes très variables, de 5 à 55 jours, sans périodicité claire. Approvisionnement non régulier.

**📊 Analyse Quantité:**
Fortes variations de 1 à 6 unités. Pas de tendance linéaire détectable. Dernière commande (6u) semble être un pic potentiellement atypique.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour [BUD03] BUDDY boisson énergétique biologique:

1. Analyse des intervalles temporels entre commandes:
- Entre la 1ère et 2ème commande: 16 jours
- Entre la 2ème et 3ème commande: 25 jours
- Entre la 3ème et 4ème commande: 42 jours
Les intervalles sont croissants mais pas totalement réguliers. Tendance à un allongement progressif entre les commandes.

2. Analyse des quantités:
- Toutes les commandes sont strictement identiques à 1 unité
- Aucune variation de quantité observée
- Commandes très stables et constantes

3. Recommandation conservative:
- Maintien de la quantité historique de 1 unité
- Variation potentielle de ±30% = entre 0 et 2 unités
- Choix conservateur de 1 unité pour minimiser le risque de surstockage

Paramètres de décision:
- Stabilité historique maximale
- Absence de signaux de croissance/changement

**📅 Analyse Temporelle:**
Intervalles entre commandes croissants (16j → 25j → 42j), légèrement irréguliers mais montrant une tendance à l'espacement

**📊 Analyse Quantité:**
Quantité constante à 1 unité, sans aucune variation

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
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.7u (13j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.6u (10j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 2 | Stock prédit: 0.8u (24j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | Stock prédit: -0.2u (0j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: 0.5u (6j restants) → prédit 2u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.8u (23j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: 0.8u (19j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | Stock prédit: 0.2u (7j restants) → prédit 2u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -0.1u (-1j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 2 | Stock prédit: -0.0u (0j restants) → prédit 2u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Stock prédit: 0.1u (5j restants) → prédit 2u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Stock prédit: -1.5u (-21j restants) → prédit 2u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | Stock prédit: -0.2u (-9j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | Stock prédit: 0.4u (21j restants) → prédit 2u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 3 | Stock prédit: -1.2u (-21j restants) → prédit 3u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 3 | Stock prédit: -0.2u (-3j restants) → prédit 3u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 2 | Stock prédit: -0.6u (-20j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:55:32.439Z*
