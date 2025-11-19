# Rapport Backtest - Client BIOK THOREMBAIS

## Contexte

- **Client** : BIOK THOREMBAIS (ID: 60213)
- **Commande réelle** : S39350
- **Date commande** : 2025-09-24 13:05:32
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 18
- **Tokens**: 16,476 input + 8,272 output = 24,748 total
- **Coût**: $0.0463 (~4.63¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.6% | 21 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 64.5% | Score équilibré global |

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
| **MAE** | 0.80 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 68.3% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [KOKO01] KOKO Kombucha original 330ml | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB01] ReBEL chips premium & bio - sel de mer 125g:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes : 
  * 22 jours entre 06-11 et 06-24
  * 14 jours entre 06-24 et 07-08
  * 15 jours entre 07-08 et 07-23
  * 20 jours entre 07-23 et 08-12
  * 22 jours entre 08-12 et 09-03
- Cohérence : Intervalles relativement réguliers, entre 14-22 jours
- Fréquence moyenne : Commande tous les 15-20 jours environ

2. Analyse des quantités:
- Quantités historiques : 3u, 3u, 3u, 2u, 1u, 4u
- Variation autour de 3 unités
- Dernière commande : 4 unités (légère hausse)
- Écart-type faible, indiquant une demande assez stable

3. Recommandation conservative:
- Quantité recommandée basée sur la moyenne historique : 3 unités
- Prise en compte de la variation de ±30% : entre 2 et 4 unités
- Choix de 3 unités comme point médian stable

**📅 Analyse Temporelle:**
Intervalles réguliers de 14-22 jours, fréquence de commande stable autour de 15-20 jours.

**📊 Analyse Quantité:**
Quantités stables autour de 3 unités, avec légère variation de 1 à 4 unités. Pas de tendance significative à la hausse ou à la baisse.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB02] ReBEL chips premium & bio - paprika fumé 125g:

1. Analyse des intervalles entre commandes:
- Intervalles entre commandes: 12-15 jours environ
- Variation relativement régulière, suggérant un besoin récurrent
- Pas de pattern parfaitement fixe, mais tendance à des commandes bi-hebdomadaires

2. Analyse des quantités:
- Quantités variantes: 1u, 2u, 3u
- Moyenne des dernières commandes: 2.33 unités
- Pas de croissance linéaire claire
- Variations considérées comme normales dans le cadre B2B (±30%)

3. Recommandation conservative:
- Basée sur la moyenne des dernières commandes
- Arrondie légèrement à la baisse pour sécurité
- Quantité recommandée: 2 unités

**📅 Analyse Temporelle:**
Commandes bi-hebdomadaires avec léger décalage, intervalles entre 12-15 jours. Pas de saisonnalité évidente.

**📊 Analyse Quantité:**
Variations de 1-3 unités, moyenne à 2.33u. Variations considérées comme normales en B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la demande historique pour le produit [REB03] ReBEL chips premium & bio - poivre noir 125g:

1. Analyse des intervalles entre commandes:
- Intervalles entre commandes varient entre 14 et 44 jours
- Moyenne des intervalles: environ 28 jours
- Pattern suggère des commandes mensuelles régulières

2. Analyse des quantités:
- Toutes les commandes sont exactement de 1 unité
- Quantité parfaitement stable sans aucune variation
- Indique un besoin constant et prévisible

3. Recommandation quantitative:
- Historique montre une demande constante de 1 unité
- Aucune tendance à la hausse ou à la baisse
- Recommandation conservatrice = 1 unité
- Variation acceptable de ±30% non nécessaire car demande très stable

Conclusion: Recommander 1 unité avec une confiance élevée.

**📅 Analyse Temporelle:**
Commandes mensuelles régulières, intervalles moyens de 28 jours, légère variabilité acceptable.

**📊 Analyse Quantité:**
Quantité constante de 1 unité par commande, aucune variation détectée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit REB08:

1. Analyse temporelle:
- Intervalles entre commandes deviennent plus rapprochés récemment
- Dernier intervalle: 22 jours (2025-08-12 → 2025-09-03)
- Tendance à une fréquence d'environ 2-4 semaines
- Progression : plus régulier et plus fréquent dans les derniers mois

2. Analyse des quantités:
- Commandes majoritairement à 1u
- Dernière commande à 2u (augmentation significative)
- Variation cohérente avec les règles B2B (+/- 30%)
- Signal possible d'une légère croissance des besoins

3. Recommandation:
- Quantité conservative basée sur la dernière commande
- Prendre 2u comme référence
- Confiance élevée due à la régularité de l'historique

La recommandation de 2u reflète la dynamique récente et reste prudente.

**📅 Analyse Temporelle:**
Intervalles entre commandes se resserrant, tendance à une périodicité de 2-4 semaines, dernièrement plus réguliers

**📊 Analyse Quantité:**
Commandes principalement à 1u, dernière commande à 2u, légère tendance à l'augmentation

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>5. [KOKO01] KOKO Kombucha original 330ml</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la demande pour KOKO Kombucha:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes: 
  * 2025-09-03 à 2025-08-12 = 22 jours
  * 2025-08-12 à 2025-07-23 = 20 jours
  * 2025-07-23 à 2025-06-24 = 29 jours
  * 2025-06-24 à 2025-06-11 = 13 jours
- Observation: Intervalles relativement réguliers (moyenne ~21 jours), léger bruit mais cohérent

2. Analyse des quantités:
- Quantités historiques: 3u, 2u, 0u, 1u, 2u
- Moyenne: 1.6 unités
- Dernière commande: 3 unités (tendance récente à la hausse)
- Variation normale confirmée (fluctuations de ±30% acceptables)

3. Recommandation conservatrice:
- Basée sur la dernière commande (3u)
- Ajustée légèrement à la baisse pour rester conservateur
- Recommandation finale: 3 unités

**📅 Analyse Temporelle:**
Intervalles de commande relativement stables, centrés autour de 21 jours, avec une légère variabilité acceptable en contexte B2B.

**📊 Analyse Quantité:**
Quantités variables mais centrées autour de 1-3 unités, avec une tendance récente à la hausse (dernière commande à 3 unités).

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>6. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes:

1. Analyse des intervalles entre commandes:
- Intervalles irréguliers, variant de 14 à 46 jours
- Moyenne d'intervalle : environ 24-25 jours
- Pas de periodicité stricte, mais commandes relativement fréquentes

2. Analyse des quantités:
- Quantités très variables : 1u, 2u, 3u, 4u
- Pas de tendance linéaire claire
- Dernière commande (3u) légèrement au-dessus de la moyenne historique
- Fluctuations normales en B2B (+/- 30%)

3. Recommandation conservatrice:
- Moyenne des 3 dernières commandes : (3 + 1 + 4) / 3 = 2.67u
- Arrondi conservateur à 2u pour limiter le risque de surstock
- Prend en compte la variabilité et le principe de prudence en approvisionnement

**📅 Analyse Temporelle:**
Intervalles entre commandes variables, moyenne ~24-25 jours. Aucune périodicité stricte détectée.

**📊 Analyse Quantité:**
Quantités fluctuantes entre 1u et 4u. Variations normales sans tendance linéaire claire.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour KOKO Kombucha Raspberry Hibiscus 330ml:

1. Analyse temporelle des intervalles:
- Les commandes ne sont pas strictement régulières
- Intervalles variables entre 12-45 jours
- Tendance à commander tous les 2-3 semaines environ
- Dernière commande le 2025-09-03 (21 jours avant date actuelle)

2. Analyse des quantités:
- Variations de 1u à 4u
- Moyenne : 2.16 unités par commande
- Pas de tendance linéaire claire
- Variations considérées comme normales (fluctuations B2B standard)

3. Recommandation conservative:
- Basée sur la moyenne historique
- Ajustée légèrement à la baisse pour rester prudent
- Quantité recommandée : 2 unités
- Dans la fourchette de variation normale (±30% autour de la moyenne)

Stratégie: Commande modérée qui reflète le comportement d'achat récent sans sur ou sous-stockage.

**📅 Analyse Temporelle:**
Commandes non régulières, intervalle moyen de 21-25 jours, variabilité modérée

**📊 Analyse Quantité:**
Variations de 1-4u, moyenne de 2.16u, pas de tendance significative

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [NOD04] NODA limonade bio:

1. Analyse des intervalles de commande:
- Entre 2025-07-08 et 2025-08-12: 35 jours
- Entre 2025-08-12 et 2025-09-03: 22 jours
- Intervalle moyen: environ 28-30 jours
- Suggestion: Commandes quasi-mensuelles, pattern relativement régulier

2. Analyse des quantités:
- Toutes les commandes sont de 1 unité 
- Quantité parfaitement stable
- Aucune variation ou tendance à la hausse/baisse
- Commandes très probablement liées à un besoin constant

3. Recommandation conservative:
- Maintenir le même volume de 1 unité
- Marge de sécurité standard B2B de ±30% non applicable ici car quantité très faible
- Probabilité élevée que le prochain réapprovisionnement suive le même schéma

**📅 Analyse Temporelle:**
Commandes mensuelles régulières, intervalle moyen de 28-30 jours

**📊 Analyse Quantité:**
Quantité constante de 1 unité, aucune variation

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (11)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.6u (27j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: -0.8u (-8j restants) → prédit 2u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.4u (25j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.2u (9j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.3u (-18j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: -0.2u (-20j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:56:47.111Z*
