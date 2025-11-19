# Rapport Backtest - Client Epicerie Uhoda Beaufays

## Contexte

- **Client** : Epicerie Uhoda Beaufays (ID: 17669)
- **Commande réelle** : S39600
- **Date commande** : 2025-10-08 07:26:15
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 36
- **Tokens**: 33,145 input + 16,255 output = 49,400 total
- **Coût**: $0.0915 (~9.15¢)
- **Coût par produit LLM**: $0.0025


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 28.9% | 38 produits prédits, 11 corrects |
| **Rappel** | 91.7% | 12 produits réels, 11 détectés |
| **F1-Score** | 44.0% | Score équilibré global |

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
| **MAE** | 0.18 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 18.2% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV126] LV Tartinade Tomate Ail des Ours 190g:

1. Analyse des intervalles entre commandes:
- Intervalles variables mais relativement rapprochés
- Entre 14 et 45 jours
- Dernière commande le 2025-10-01
- Légère tendance à des commandes fréquentes

2. Analyse des quantités:
- Commandes principalement à 1 unité
- Une commande exceptionnelle à 2 unités (2025-06-19)
- Variation considérée comme normale en B2B (±30%)

3. Recommandation de quantité:
- Basée sur le mode (1 unité) 
- Prise en compte de la variation potentielle
- Recommandation prudente et conservative de 1 unité

**📅 Analyse Temporelle:**
Intervalles entre commandes variables:
- 2025-10-01 -> 2025-08-27 : 35 jours
- 2025-08-27 -> 2025-07-22 : 36 jours
- 2025-07-22 -> 2025-07-08 : 14 jours
- 2025-07-08 -> 2025-06-19 : 19 jours

Fréquence moyenne: environ 26 jours

**📊 Analyse Quantité:**
Quantités stables avec une légère variation:
- 4 commandes à 1 unité
- 1 commande à 2 unités
- Écart-type faible
- Variation considérée comme normale

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [REB01] ReBEL chips premium & bio:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes: 15-46 jours
- Moyenne d'intervalle: environ 22 jours
- Variabilité modérée mais pas totalement erratique
- Dernière commande le 2025-10-01 (7 jours avant la date actuelle)

2. Analyse des quantités:
- Quantités historiques: 1u, 2u, 1u, 2u, 1u, 1u
- Variation entre 1-2 unités
- Pas de croissance claire mais alternance entre 1 et 2 unités
- Dernière commande: 1u le 2025-10-01

3. Recommandation conservative:
- Basée sur la tendance récente et la variation historique
- Choix de 2 unités comme quantité recommandée
- Correspond à la quantité la plus fréquente dans l'historique
- Permet de maintenir un stock stable avec une marge de sécurité de ±30%

**📅 Analyse Temporelle:**
Intervalles de commande variables (15-46 jours), moyenne autour de 22 jours. Pas de périodicité stricte mais un rythme semi-régulier.

**📊 Analyse Quantité:**
Quantités oscillant entre 1 et 2 unités, sans tendance de croissance claire. Variations normales dans un intervalle restreint.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV132] LV Tartinade Houmous 190g :

1. Analyse temporelle des intervalles :
- Entre 2025-06-11 et 2025-06-25 : 14 jours
- Entre 2025-06-25 et 2025-09-03 : 70 jours
- Entre 2025-09-03 et 2025-09-16 : 13 jours
Intervalles irréguliers, sans modèle de périodicité claire. Pas de cycle d'approvisionnement standard.

2. Analyse des quantités :
- Alternance entre 1u et 2u
- Variation normale : 1-2 unités
- Pas de croissance ou décroissance marquée
- Variation dans la plage acceptable de ±30%

3. Recommandation quantitative :
- Moyenne des dernières commandes : 1.5u
- Arrondi conservateur : 2u
- Correspond aux volumes historiques
- Permet de couvrir les besoins sans surstock

Recommandation finale : Commander 2 unités

**📅 Analyse Temporelle:**
Intervalles de commande variables et non standardisés. Pas de cycle régulier identifié.

**📊 Analyse Quantité:**
Quantités oscillant entre 1 et 2 unités. Variations normales sans tendance significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit [LV129] LV Tartinade Carotte Gingembre 190g:

1. Analyse des intervalles entre commandes:
- Intervalles variables entre 9-51 jours
- Pas de périodicité stricte
- Intervalle moyen: environ 23-25 jours
- Conclusion: Commandes semi-régulières mais avec une certaine variabilité

2. Analyse des quantités:
- Quantités: 1u, 1u, 3u, 1u, 1u
- Majorité des commandes à 1u
- Un pic à 3u (probablement une commande exceptionnelle)
- Écart-type faible
- Conclusion: Commandes généralement stables autour de 1u

3. Recommandation conservative:
- Moyenne des dernières commandes: 1.4u
- Ajustement +/- 30% recommandé en B2B
- Recommandation finale: 2 unités
- Justification: Couvre la variabilité tout en restant prudent
- Permet de maintenir un stock de sécurité

**📅 Analyse Temporelle:**
Commandes espacées de 9 à 51 jours, moyenne autour de 23-25 jours. Pas de cycle régulier strict.

**📊 Analyse Quantité:**
Variations entre 1-3 unités, majorité des commandes à 1u. Stabilité globale avec un pic occasionnel.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour [REB11] ReBEL chips premium & bio - truffes 125g :

1. Analyse des intervalles temporels :
- Entre 2025-07-08 et 2025-08-06 : 29 jours
- Entre 2025-08-06 et 2025-09-03 : 28 jours
- Entre 2025-09-03 et 2025-09-16 : 13 jours
Observation : Intervalles quasi-réguliers de ~28-29 jours, avec un léger écart récent

2. Analyse des quantités :
- Toutes les commandes sont strictement identiques : 1 unité
- Aucune variation de quantité détectée
- Comportement d'achat très stable

3. Recommandation quantitative :
- Historique constant à 1 unité
- Pas de signes de changement de besoin
- Recommandation conservatrice : 1 unité

Recommandation finale basée sur un niveau de confiance moyen, tenant compte de la stabilité historique.

**📅 Analyse Temporelle:**
Intervalles réguliers de ~28-29 jours, légère variation récente (13 jours)

**📊 Analyse Quantité:**
Quantité constante de 1 unité, aucune variation

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse step-by-step:

1. Intervalles entre commandes:
- Entre les commandes : 
  * 2025-09-16 et 2025-08-27 : ~20 jours
  * 2025-08-27 et 2025-07-08 : ~50 jours
  * 2025-07-08 et 2025-06-19 : ~20 jours
- Intervalle moyen : environ 30 jours
- Conclusion : Commandes relativement régulières, avec léger décalage occasionnel

2. Analyse des quantités:
- Toutes les commandes sont strictement de 1 unité
- Quantité TOTALEMENT STABLE
- Aucune variation ou tendance détectable

3. Recommandation quantité:
- Historique montre une demande constante de 1 unité
- Aucun signal de changement de besoin
- Recommandation CONSERVATIVE : 1 unité
- Variation acceptable ±30% : entre 0-2 unités (mais on reste à 1)

La stratégie est de maintenir le pattern existant sans risque de sur-stockage.

**📅 Analyse Temporelle:**
Périodicité moyenne de 30 jours, légèrement variable mais cohérente

**📊 Analyse Quantité:**
Commandes strictement constantes à 1 unité, aucune variation

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit [TEN03] TENSAÏ TEA:

1. Analyse temporelle des intervalles:
- Entre la dernière commande (2025-09-03) et l'avant-dernière (2025-08-27): 7 jours
- Entre 2025-08-27 et 2025-06-25: 63 jours
- Entre 2025-06-25 et 2025-06-11: 14 jours
Les intervalles sont variables, sans patron régulier strict. Présence de commandes espacées et rapprochées.

2. Analyse des quantités:
- Toutes les commandes sont strictement identiques à 1 unité
- Aucune variation de quantité observée
- Commandes très stables et constantes

3. Recommandation conservatrice:
- Compte tenu de l'historique constant de 1 unité
- En respectant la tolérance B2B de ±30%
- Je recommande 1 unité pour la prochaine commande

La recommandation est hautement confiance car basée sur un historique uniforme.

**📅 Analyse Temporelle:**
Intervalles entre commandes variables: 7 jours, 63 jours, 14 jours. Pas de périodicité claire.

**📊 Analyse Quantité:**
Quantité constante à 1 unité pour chaque commande. Aucune variation.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de la recommandation de commande pour [REB08] ReBEL chips:

1. Analyse des intervalles de commande:
- Entre commandes : 
  • 2025-09-03 - 2025-08-27 = 7 jours
  • 2025-08-27 - 2025-07-08 = 50 jours
  • 2025-07-08 - 2025-06-11 = 28 jours
- Intervalle IRREGULIER, mais avec une moyenne autour de 28-30 jours
- Suggestion : Comportement d'achat potentiellement lié à des besoins ponctuels

2. Analyse des quantités:
- Quantité CONSTANTE à 1 unité à chaque commande
- Aucune variation ou tendance haussière/baissière
- Stable et prévisible

3. Recommandation quantitative:
- Historique montre 1u comme quantité standard
- Variation B2B de ±30% non nécessaire ici
- Recommandation CONSERVATIVE : 1 unité
- Haute confiance car historique très régulier

**📅 Analyse Temporelle:**
Intervalles irréguliers entre 7-50 jours, moyenne autour de 28-30 jours. Pas de périodicité stricte.

**📊 Analyse Quantité:**
Quantité constante à 1 unité. Aucune variation détectée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [LV342] LV Organic Broccoli Spread 190 g:

1. Analyse des intervalles temporels:
- Intervalles entre commandes variant entre 6-7 jours
- Pattern relativement régulier et cohérent
- Dernière commande le 2025-07-22, soit environ 2,5 mois avant la date actuelle

2. Analyse des quantités:
- Variations entre 1-2 unités
- Légère tendance à la baisse récemment (de 2u à 1u)
- Les variations restent dans une plage acceptable de ±30%

3. Recommandation de quantité:
- Basée sur les 2-3 dernières commandes
- Recommandation conservatrice de 2 unités
- Prend en compte la stabilité relative des commandes précédentes

Facteurs additionnels considérés:
- Variation normale en B2B
- Potentiel de stock de sécurité
- Possibilités d'achats groupés

**📅 Analyse Temporelle:**
Intervalles de commandes stables, variant entre 6-7 jours. Dernier gap plus long (2,5 mois) pourrait indiquer un changement de besoin.

**📊 Analyse Quantité:**
Quantités oscillant entre 1-2 unités, avec une légère tendance à la baisse récente. Variations dans la norme acceptable.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV134] LV BIO Tartinade Olives Vertes 190g:

1. Analyse des intervalles entre commandes:
- Entre 2025-06-11 et 2025-06-25 : 14 jours
- Entre 2025-06-25 et 2025-07-15 : 20 jours
- Variation d'intervalle relativement faible (écart de 6 jours)
- Tendance à une commande environ tous les 15-20 jours

2. Analyse des quantités:
- Toutes les commandes sont strictement identiques : 1 unité
- Aucune variation de quantité observée
- Commandes très stables et prévisibles

3. Recommandation quantitative:
- Compte tenu de la stabilité historique
- En considérant la marge de ±30% acceptable en B2B
- Recommandation conservatrice : 1 unité

Facteurs additionnels:
- Pas de signe de croissance/décroissance
- Commandes régulières suggèrent un besoin constant

**📅 Analyse Temporelle:**
Intervalles entre commandes relativement réguliers (14-20 jours), avec une moyenne autour de 17 jours

**📊 Analyse Quantité:**
Quantité parfaitement stable à 1 unité par commande

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (27)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: 1.4u (13j restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 2 | Stock prédit: 0.7u (12j restants) → prédit 2u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: 0.7u (11j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.6u (10j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.7u (14j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: 0.6u (8j restants) → prédit 1u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: 0.7u (14j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: 0.6u (10j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock prédit: -0.4u (-6j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: 0.3u (7j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 0.4u (4j restants) → prédit 2u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 2 | Stock prédit: -0.4u (-10j restants) → prédit 2u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | Stock prédit: -1.6u (-21j restants) → prédit 2u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: -1.6u (-20j restants) → prédit 2u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -1.3u (-19j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Stock prédit: -0.4u (-10j restants) → prédit 2u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: -0.4u (-10j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | Stock prédit: -1.1u (-21j restants) → prédit 2u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -2.1u (-56j restants) → prédit 2u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Stock prédit: -2.1u (-61j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 3 | Stock prédit: -6.3u (-61j restants) → prédit 3u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 3 | Stock prédit: -4.4u (-54j restants) → prédit 3u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Stock prédit: -0.5u (-19j restants) → prédit 2u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Stock prédit: -0.6u (-37j restants) → prédit 1u mais non commandé |


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
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock suffisant: 0.8u (32j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T15:55:06.372Z*
