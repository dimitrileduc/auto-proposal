# Rapport Backtest - Client AU RAYON BIO

## Contexte

- **Client** : AU RAYON BIO (ID: 17809)
- **Commande réelle** : S39577
- **Date commande** : 2025-10-09 06:15:56
- **Date cutoff système** : 2025-10-09 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 14
- **Tokens**: 13,034 input + 6,424 output = 19,458 total
- **Coût**: $0.0361 (~3.61¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 81.3% | 16 produits prédits, 13 corrects |
| **Rappel** | 72.2% | 18 produits réels, 13 détectés |
| **F1-Score** | 76.5% | Score équilibré global |

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
| **MAE** | 0.85 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 57.7% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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

## True Positives (13)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 3 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique de commandes pour le produit LV160:

1. Analyse des intervalles temporels:
- Entre la dernière commande (2025-09-10) et la date actuelle (2025-10-09): ~29 jours
- Intervalles précédents: 
  * 2025-09-10 à 2025-07-24: 47 jours
  * 2025-07-24 à 2025-07-17: 7 jours
  * 2025-07-17 à 2025-06-20: 28 jours
Les intervalles sont relativement variables, mais oscillent entre 7 et 47 jours, sans régularité stricte.

2. Analyse des quantités:
- Quantités historiques: 1u, 3u, 2u, 3u
- Moyenne: 2.25 unités
- Variation: Entre 1 et 3 unités
- Pas de tendance claire à la hausse ou à la baisse
- Variations dans une plage acceptable (±30%)

3. Recommandation:
- Quantité conservatrice basée sur la moyenne et le dernier point: 3 unités
- Prend en compte les variations normales en B2B
- Permet de maintenir un stock de sécurité sans surstock

**📅 Analyse Temporelle:**
Intervalles variables entre 7 et 47 jours, sans périodicité claire. Dernier intervalle de ~29 jours.

**📊 Analyse Quantité:**
Quantités entre 1 et 3 unités. Moyenne de 2.25u. Variations normales sans tendance significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes pour le produit LV129:

1. Analyse temporelle des intervalles:
- Entre la dernière commande et l'avant-dernière: 37 jours
- Entre les commandes précédentes: 7 jours et 37 jours
- Intervalle moyen: environ 22-37 jours
- Conclusion: Intervals légèrement variables mais pas complètement erratiques

2. Analyse des quantités:
- Commandes: 1u, 2u, 3u, 2u
- Moyenne: 2 unités
- Variation: Entre 1-3 unités (±30-50%)
- Pas de tendance claire à la hausse ou à la baisse

3. Recommandation conservatrice:
- Basée sur la moyenne historique
- Tenant compte de la variabilité normale en B2B
- Recommandation de 2 unités pour la prochaine commande

La recommandation de 2 unités représente un choix prudent qui reflète l'historique récent.

**📅 Analyse Temporelle:**
Intervalles entre commandes variables: 7-37 jours, moyenne autour de 22-37 jours. Pas de cycle régulier strict.

**📊 Analyse Quantité:**
Quantités entre 1-3 unités. Moyenne de 2 unités. Variations normales dans la plage attendue pour un approvisionnement B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Analyse des intervalles temporels:
- Intervalles entre commandes: 
  * 2025-09-10 -> 2025-07-24 : 47 jours
  * 2025-07-24 -> 2025-07-17 : 7 jours
  * 2025-07-17 -> 2025-06-20 : 28 jours
Observation: Intervalles variables mais globalement entre 7-47 jours. Pas de régularité stricte.

2. Analyse des quantités:
- Quantités commandées: 3u, 3u, 1u, 3u
- Mode (quantité la plus fréquente): 3 unités
- Variation autour de 3u, avec un point bas à 1u
- Pas de tendance claire de croissance/décroissance

3. Recommandation quantitative:
- Quantité médiane: 3 unités
- Variation acceptable ±30%: entre 2-4 unités
- Choix conservateur: 3 unités (mode de l'historique)

La recommandation de 3 unités représente le comportement d'achat historique le plus probable.

**📅 Analyse Temporelle:**
Intervalles irréguliers entre 7-47 jours, sans cycle apparent. Fréquence approximative: tous les 20-30 jours.

**📊 Analyse Quantité:**
Quantités principalement stables autour de 3 unités, avec une légère variation ponctuelle à 1 unité.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape pour la recommandation de commande du produit [LV131] LV Tartinade Potiron 190g :

1. Analyse temporelle des intervalles :
- Les commandes sont relativement régulières
- Fréquence moyenne : environ tous les 15-20 jours
- Pas d'intervalles extrêmement irréguliers
- Dernière commande : 2025-09-10 (récente)

2. Analyse des quantités :
- Quantités oscillant entre 1u et 3u
- Distribution : 
  * 1u : 8 fois
  * 2u : 8 fois
  * 3u : 4 fois
- Pas de tendance claire de croissance ou décroissance
- Variations normales dans la plage B2B acceptée (±30%)

3. Recommandation conservative :
- Moyenne des dernières commandes : 2u
- Choix de 2u comme quantité recommandée
- Proche de la tendance centrale historique
- Permet de maintenir un stock tampon sans surstock
- Prend en compte la variabilité des besoins client

**📅 Analyse Temporelle:**
Commandes espacées de 15-20 jours en moyenne, avec une régularité acceptable en contexte B2B.

**📊 Analyse Quantité:**
Quantités variant entre 1u et 3u, avec une concentration autour de 1-2u. Variations normales sans tendance significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape :

1. Analyse des intervalles entre commandes :
- Intervalle moyen : environ 30-45 jours
- Derniers intervalles : 
  * 17/07 au 24/07 : 7 jours
  * 24/07 au 10/09 : 48 jours
- Pattern légèrement irrégulier mais cohérent globalement

2. Analyse des quantités :
- Quantités récentes : 2u, 2u, 3u
- Variation légère mais stable autour de 2-3 unités
- Dernière commande à 3 unités semble être la plus récente tendance

3. Recommandation conservative :
- Basée sur la dernière commande (3u)
- Marge de ±30% acceptable en B2B
- Recommandation finale : 3 unités

**📅 Analyse Temporelle:**
Intervalles de commande variables mais globalement entre 30-50 jours. Aucune périodicité stricte détectée.

**📊 Analyse Quantité:**
Quantités stables autour de 2-3 unités. Légère tendance à 3 unités pour la commande la plus récente.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape :

1. Analyse des intervalles temporels :
- Entre les commandes : 
  - 2025-09-10 et 2025-07-24 : 47 jours
  - 2025-07-24 et 2025-07-17 : 7 jours
  - 2025-07-17 et 2025-06-20 : 28 jours
Intervalle irrégulier, mais globalement entre 7-47 jours. Pas de cadence fixe claire.

2. Analyse des quantités :
- Variations entre 1u et 2u
- Moyenne : 1.25u par commande
- Écart-type relativement faible
- Pas de tendance haussière ou baissière marquée

3. Recommandation :
- Quantité médiane : 2u
- Variation acceptable de ±30% : entre 1 et 3u
- Choix conservateur : 2u pour maintenir un stock stable
- Prend en compte la variabilité sans sur-stocker

**📅 Analyse Temporelle:**
Intervalles entre commandes irréguliers : 7-47 jours. Pas de périodicité standard détectable.

**📊 Analyse Quantité:**
Quantités oscillant entre 1u et 2u. Moyenne de 1.25u. Variations mineures sans tendance significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique de commandes:

1. Analyse des intervalles entre commandes:
- Intervalles irréguliers entre commandes
- Minimum: 7 jours (entre 2025-07-17 et 2025-07-24)
- Maximum: 49 jours (entre 2025-07-24 et 2025-09-10)
- Dernier intervalle: 50 jours jusqu'à la date actuelle (2025-10-09)
Ces variations suggèrent un comportement d'achat non-standardisé.

2. Analyse des quantités:
- Quantités: 1u, 2u, 2u, 1u
- Variation entre 1-2 unités
- Pas de tendance claire de croissance ou de décroissance
- Variations considérées comme normales en B2B (±30%)

3. Recommandation conservatrice:
- Mode/moyenne des commandes précédentes: 2 unités
- Recommandation basée sur la moyenne historique
- Ajustement conservateur compte tenu des variations d'intervalles et de quantités

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, de 7 à 50 jours. Pas de périodicité claire.

**📊 Analyse Quantité:**
Quantités fluctuant entre 1-2 unités. Variations normales sans tendance significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes de [LV136] LV Tartinade Betterave 190g :

1. Analyse temporelle des intervalles :
- Intervalles entre commandes : 
  * 2025-09-10 → 2025-07-24 : 47 jours
  * 2025-07-24 → 2025-07-17 : 7 jours
  * 2025-07-17 → 2025-06-20 : 28 jours
Les intervalles sont irréguliers mais semblent se situer entre 7-50 jours. Pas de périodicité claire.

2. Analyse des quantités :
- Variation des quantités : 1u, 2u, 3u, 2u
- Moyenne : 2 unités
- Écart type : environ 0.82 unité
- Variation dans une plage acceptable (±30% autour de la moyenne)

3. Recommandation conservatrice :
- Quantité recommandée : 2 unités
- Basée sur la moyenne historique
- Alignée avec le comportement de commande récent
- Prend en compte la variabilité normale en B2B

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, entre 7-50 jours, sans périodicité évidente.

**📊 Analyse Quantité:**
Quantités variant entre 1-3 unités, moyenne de 2 unités, écart type de 0.82. Variations normales.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [LV126] LV Tartinade Tomate Ail des Ours 190g :

1. Analyse des intervalles temporels :
- Entre la dernière commande (2025-09-10) et la date actuelle (2025-10-09) : environ 1 mois
- Intervalles précédents variables : 
  * 17 jours entre 2 commandes (07-17 et 07-24)
  * 54 jours entre commandes suivantes (07-24 et 09-10)
- Conclusion : Intervals irréguliers, pas de périodicité claire

2. Analyse des quantités :
- Quantités : 1u, 1u, 1u, 2u
- Tendance : Majoritairement 1u, avec une commande à 2u
- Variation considérée comme normale (±30%)

3. Recommandation conservative :
- Mode (valeur la plus fréquente) = 1u
- Ajustement minimal à 1u, compte tenu de la variabilité modérée
- Risque minimal de surstockage ou de rupture

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, variant entre 17 et 54 jours. Pas de cycle d'approvisionnement standardisé.

**📊 Analyse Quantité:**
Quantités principalement stables à 1u, avec une variation occasionnelle à 2u. Considéré comme une variation normale en B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Analyse temporelle des intervalles:
- Entre 2025-06-20 et 2025-07-17: 27 jours
- Entre 2025-07-17 et 2025-07-24: 7 jours
- Entre 2025-07-24 et 2025-09-10: 47 jours
- Entre 2025-09-10 et 2025-10-09 (date actuelle): ~29 jours

Observation: Intervalles entre commandes irréguliers, mais généralement entre 20-50 jours. Pas de périodicité stricte.

2. Analyse des quantités:
- Quantités: 1u, 2u, 1u, 1u
- Variation entre 1-2 unités
- Moyenne: 1.25 unités
- Variation dans la plage normale (+/- 30%)

3. Recommandation:
- Quantité conservative basée sur l'historique: 2 unités
- Justification: 
  * Proche de la moyenne historique
  * Couvre les variations potentielles
  * Minimise le risque de rupture de stock
  * Cohérent avec le comportement d'achat précédent

**📅 Analyse Temporelle:**
Intervalles de commande variables, principalement entre 20-50 jours, sans modèle fixe régulier.

**📊 Analyse Quantité:**
Quantités stables autour de 1-2 unités, avec une légère tendance à 2 unités lors de certaines commandes.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit LV330:

1. Analyse des intervalles entre commandes:
- Entre 2025-06-20 et 2025-07-17: 28 jours
- Entre 2025-07-17 et 2025-07-24: 7 jours
Intervalles irréguliers, pas de pattern constant. Suggestion de prudence.

2. Analyse des quantités:
- 1ère commande: 1 unité
- 2ème commande: 3 unités 
- 3ème commande: 2 unités
Variations significatives, mais dans une fourchette acceptable (±30%)

3. Recommandation conservative:
- Moyenne des 3 dernières commandes = 2 unités
- Ajustement minimal pour refléter l'historique
- Choix de 2 unités comme quantité recommandée

**📅 Analyse Temporelle:**
Intervalles entre commandes variables: 7-28 jours. Pas de cycle régulier détecté.

**📊 Analyse Quantité:**
Variations de quantité entre 1-3 unités. Écart-type modéré, cohérent avec les variations B2B normales.

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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Stock prédit: 0.2u (8j restants) → prédit 2u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: -0.3u (-25j restants) → prédit 1u mais non commandé |


---

## False Negatives (5)

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
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock suffisant: 2.5u (45j restants > seuil 30j) |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock suffisant: 2.7u (60j restants > seuil 30j) |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock suffisant: 1.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T15:57:06.370Z*
