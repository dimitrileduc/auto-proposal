# Rapport Backtest - Client Epicerie Uhoda Beaufays

## Contexte

- **Client** : Epicerie Uhoda Beaufays (ID: 17669)
- **Commande réelle** : S39600
- **Date commande** : 2025-10-08 07:26:15
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 35
- **Tokens**: 72,666 input + 20,756 output = 93,422 total
- **Coût**: $0.5293 (~52.93¢)
- **Coût par produit LLM**: $0.0151


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
| **MAE** | 0.09 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 7.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 4.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (14j, 35j, 35j)
- **Saisonnalité**: none
- **Tendance**: Stable - demande constante à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse temporelle:**
- 4 commandes sur les 3 derniers mois: 08/07 (mar), 22/07 (mar), 27/08 (mer), 01/10 (mer)
- Intervalles: 14 jours, puis 36 jours, puis 35 jours
- Pattern pas strictement régulier mais fréquence moyenne de ~30 jours
- Date de prédiction: 08/10 (mer), soit 7 jours après la dernière commande du 01/10

**Observations clés:**
- Quantité parfaitement stable: toujours 1 unité par commande
- Aucun outlier détecté
- Pas de données N-1 pour évaluer la saisonnalité
- Produit de niche (Tartinade Ail des Ours) suggérant une demande spécifique mais limitée

**Considération du timing:**
La dernière commande date du 01/10, il y a seulement 7 jours. Vu les intervalles observés (14-36 jours), il est MOINS probable qu'une nouvelle commande arrive si tôt. Cependant, le pattern montre parfois des commandes à 14 jours d'intervalle.

**Décision:**
Si le client commande à cette date, la quantité sera très probablement 1 unité (100% de constance historique). La baseline est claire à 1u. Recommandation: **1 unité**.

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement variable (7-41 jours), mais présence récurrente les mardis et mercredis
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité (1-2u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 5 commandes s'étalent sur ~3 mois avec intervalles variables : 7j (08/07→15/07), 22j (15/07→06/08), 41j (06/08→16/09), 15j (16/09→01/10). Pattern irrégulier mais concentration sur mar-mer. Depuis la dernière commande (01/10), nous sommes à 7 jours, ce qui correspond à l'intervalle le plus court observé.

**TENDANCE & VOLUMES**: Sur les 5 commandes, distribution : 3×1u et 2×2u. Moyenne simple = 1.4u. Moyenne pondérée (poids fort sur récent) : 01/10(1u), 16/09(2u), 06/08(2u) → tendance vers 1-2u. La dernière commande était de 1u.

**OUTLIERS**: Aucun pic exceptionnel détecté. Les quantités 1-2u sont cohérentes pour un produit premium bio en B2B.

**SAISONNALITÉ**: Absence de données N-1, impossible d'identifier un pattern saisonnier. Impact = none.

**DÉCISION**: En l'absence de pattern régulier fort et avec une dernière commande de 1u il y a 7 jours (intervalle court), le client maintient probablement un rythme de réapprovisionnement léger. La quantité la plus PROBABLE est 1u (mode statistique = 60% des commandes). Baseline théorique à 1.4u mais arrondi à 1u pour coller à la réalité observée des commandes unitaires dominantes.

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.7u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (13 jours entre dernières commandes, historique espacé de plusieurs semaines à mois)
- **Saisonnalité**: none
- **Tendance**: Stable - Fluctuation entre 1-2u typiquement, moyenne ~1.8u sur période récente
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**Analyse détaillée:**

1. **Pattern rythmique:** L'historique montre des commandes très irrégulières sans jour fixe identifiable. Sur N-1, les intervalles varient de plusieurs semaines à mois. En période récente (3 derniers mois), seulement 2 commandes: 1u le 03/09 (mer.) et 2u le 16/09 (mar.), soit 13 jours d'écart. Pas de pattern hebdomadaire clair.

2. **Filtrage outliers:** La commande de 4u du 30/07/2024 se détache nettement de toutes les autres (1-2u typiquement). C'est clairement un événement exceptionnel (probable promotion ou commande groupée). À exclure du calcul de baseline.

3. **Saisonnalité:** Aucun pic récurrent à début octobre dans l'historique N-1. La commande du 24/10/2023 (2u) ne montre pas de pattern saisonnier fort pour cette période. Impact saisonnier négligeable.

4. **Tendance récente:** Sans l'outlier de 4u, les 8 dernières commandes montrent: 1, 1, 2, 3, 2, 1, 1, 2u. Moyenne ~1.6u, médiane 1.5u. Les 2 dernières commandes (1u puis 2u) suggèrent une alternance légère.

5. **Décision:** Avec 22 jours depuis la dernière commande (16/09 → 08/10), le client est dans une fenêtre de réapprovisionnement plausible. La quantité la plus probable oscille entre 1-2u selon le pattern historique. Vu la dernière commande de 2u et l'intervalle légèrement plus long, je privilégie **2u** comme prédiction la plus probable, correspondant à la médiane haute observée.

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~30-50j entre commandes, sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (passage de 2-3u à 1u systématique)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Historique N-1 montre commandes espacées de façon irrégulière (1-3 mois) avec volumes 2-3u. 
Période récente (3 derniers mois): 08/07→27/08 (50j) puis 27/08→16/09 (20j). Intervalle moyen ~35j.
Depuis la date de prédiction (08/10), 22 jours se sont écoulés depuis la dernière commande (16/09) - nous sommes dans la fenêtre probable de réapprovisionnement.

**FILTRAGE OUTLIERS:**
La commande de 3u (08/07/2025 et 13/05/2024) semble être un pic ponctuel. L'historique N-1 montre principalement 2u. 
Les 3 derniers mois révèlent une tendance nette à la baisse: passage systématique à 1u (27/08 et 16/09).

**SAISONNALITÉ:**
Aucun pattern saisonnier détectable. Pas d'événement récurrent en octobre. La commande d'octobre 2024 (26/09) était de 1u, cohérent avec la nouvelle tendance.

**SYNTHÈSE:**
Tendance baisse confirmée sur les 2 dernières commandes (1u chacune). Le produit tartinade carotte-gingembre est probablement en phase de faible rotation chez ce client. 
La baseline s'établit désormais à 1u. Aucun élément ne justifie un retour aux volumes antérieurs (2-3u).

**DÉCISION:** 1 unité - cohérent avec le nouveau rythme stabilisé du client.

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~28-35 jours) - Commandes principalement mardi/mercredi
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante à 1u sur tous les cycles
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les 4 dernières commandes montrent un pattern mensuel régulier:
- 08/07 (mar.) → 06/08 (mer.) = 29 jours
- 06/08 (mer.) → 03/09 (mer.) = 28 jours  
- 03/09 (mer.) → 16/09 (mar.) = 13 jours (demi-cycle - possible ajustement)
- 16/09 (mar.) → 08/10 (mer.) = 22 jours

La prédiction tombe le 08/10, exactement 22 jours après la dernière commande du 16/09. Ce timing correspond à une fenêtre de réapprovisionnement cohérente avec le cycle mensuel observé.

**FILTRAGE OUTLIERS:**
Aucun outlier détecté. Toutes les commandes sont à 1 unité, ce qui suggère:
- Un produit premium/niche à rotation lente
- Une commande de sécurité/réassort régulier
- Un client final spécifique ou usage test

**SAISONNALITÉ:**
Absence de données N-1, mais aucune variation saisonnière visible sur juillet-septembre. Produit stable.

**DÉCISION:**
La régularité parfaite (100% des commandes = 1u) + le timing cohérent avec le cycle d'approvisionnement + l'absence de signal de changement = **Prédiction de 1 unité avec haute confiance**.

Le produit premium bio truffes a un comportement B2B typique de niche: faible volume, haute régularité.

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalle variable (20j, 50j, puis 22j) - Pas de pattern fixe détectable
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante de 1u sur toutes les commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les 3 commandes historiques montrent des intervalles irréguliers:
- 08/07 → 27/08: 50 jours
- 27/08 → 16/09: 20 jours  
- 16/09 → 08/10 (prédiction): 22 jours

Pas de pattern hebdomadaire fixe (mar., mer., mar.), ni de régularité mensuelle stricte. Le client semble commander de manière opportuniste ou selon des besoins non cycliques.

**FILTRAGE OUTLIERS:**
Aucun outlier détecté. Les 3 commandes montrent une quantité parfaitement stable de 1 unité. Pas de données N-1 pour détecter d'éventuels pics saisonniers.

**SYNTHÈSE & DÉCISION:**
- **Demande ultra-stable**: 100% des commandes = 1 unité
- **Produit premium/bio à rotation lente**: cohérent avec commandes espacées et volumes unitaires
- **Aucune saisonnalité identifiable** (pas de données N-1)
- **Dernière commande récente** (16/09, soit 22j avant prédiction) suggère un cycle en cours

**CONCLUSION:** 
La baseline théorique est 1u (moyenne et médiane historiques). Sans signal de changement de tendance, promotion, ou rupture de pattern, la prédiction la plus probable reste **1 unité**.

Confiance MEDIUM (et non HIGH) car l'historique est limité (3 points seulement) et le pattern irrégulier rend difficile l'anticipation du timing exact, mais la quantité elle-même est très prévisible.

</details>


<details>
<summary><strong>7. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire - Commande chaque mercredi (intervalle 7 jours)
- **Saisonnalité**: none
- **Tendance**: Stable - 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Pattern hebdomadaire très clair détecté - 2 commandes espacées exactement de 7 jours (27/08 → 03/09), toutes deux un mercredi. La date de prédiction (08/10/2025) tombe également un mercredi, ce qui s'inscrit parfaitement dans le rythme établi (5 semaines après la dernière commande, suggérant peut-être quelques semaines d'inventaire).

**FILTRAGE OUTLIERS**: Aucune anomalie détectée. Les 2 commandes montrent une quantité unitaire strictement identique (1u), sans variation ni pic exceptionnel.

**SYNTHÈSE & DÉCISION**: 
- Absence de données N-1 : impossible d'évaluer la saisonnalité
- Pattern récent ultra-stable : 100% des commandes = 1u
- Rythme hebdomadaire sur mercredi confirmé
- Aucun signal de rupture de tendance ou effet rattrapage

La demande de fond théorique est de 1 unité. Le produit [TEN03] semble être un article de niche (thé blanc bio spécialisé) avec une rotation très faible mais régulière. En B2B agroalimentaire, ce type de référence premium suit généralement des patterns fixes pour maintenir la disponibilité sans surstockage.

**PRÉDICTION**: 1 unité avec haute confiance basée sur la parfaite constance observée.

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle - intervalles variables (50j puis 7j)
- **Saisonnalité**: none
- **Tendance**: Stable - micro-commandes de 1u constantes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Les 3 commandes disponibles montrent des intervalles très variables (08/07→27/08: 50j, puis 27/08→03/09: 7j). Les 2 dernières commandes sont des mercredis, suggérant une possible préférence hebdomadaire récente, mais l'échantillon est trop petit pour confirmer. La dernière commande du 03/09 remonte à 35 jours avant la date de prédiction (08/10), ce qui est dans la fourchette du pattern observé.

**Volumétrie constante:** Toutes les commandes sont strictement de 1 unité - aucun outlier. Cela suggère soit des tests produit, soit une commande de complément marginal dans un assortiment plus large. Pas de volatilité sur les volumes.

**Absence de saisonnalité:** Aucune donnée N-1 disponible, impossible d'évaluer l'impact saisonnier d'octobre.

**Décision:** Le pattern est trop irrégulier pour anticiper avec certitude la prochaine commande exacte, mais la constance absolue du volume unitaire (1u) et l'intervalle de 35 jours depuis la dernière commande (cohérent avec le rythme historique) suggèrent qu'une commande de 1u est le scénario le plus probable si le client maintient son comportement. La confiance est medium car le manque d'historique profond et l'irrégularité temporelle limitent la prédictibilité.

</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire chaque Mardi (intervalle 7 jours strict)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère variation 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le client présente un pattern hebdomadaire ultra-régulier avec commandes strictement chaque MARDI (2025-07-22, 2025-07-15, 2025-07-08). La date de prédiction (2025-10-08) tombe un MERCREDI, ce qui représente une rupture du cycle habituel.

**ANALYSE QUANTITATIVE**: Sur les 3 commandes récentes : 1u, 1u, 2u. La commande de 2u (2025-07-08) ne semble pas être un outlier mais plutôt une variation normale. Moyenne = 1,33u, médiane = 1u.

**FACTEURS DÉCISIONNELS**:
- Aucune donnée N-1 pour valider la saisonnalité
- Pattern stable sur 3 mois avec prédominance de commandes à 1u (2/3)
- **RUPTURE CRITIQUE**: La prédiction est demandée pour un MERCREDI alors que le pattern établi est MARDI. Cela pourrait indiquer : (a) décalage exceptionnel d'un jour, (b) commande de rattrapage, ou (c) erreur de date

**DÉCISION**: En supposant qu'il s'agit d'un décalage ponctuel du cycle hebdomadaire (commande mardi décalée au mercredi), je recommande 1u car c'est la quantité modale et la plus récente observée. La probabilité d'une commande de 2u existe mais reste minoritaire dans l'historique récent.

</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacements longs (2-3 mois entre commandes)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -67% (de ~3u en N-1 vers 1u récent)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le produit [LV134] présente un pattern de commande très irrégulier avec des espacements de 2-3 mois. Historique N-1 montre 6 commandes sur 12 mois (oct-23 à sept-24) avec quantités variant de 1 à 4u. La dernière commande récente date du 15 juillet 2025 (1u), soit environ 2,8 mois avant la date de prédiction (8 octobre).

**Filtrage outliers**: La commande de 4u du 13 mai 2024 apparaît exceptionnelle comparée au pattern général (médiane à 3u pour N-1). Les autres quantités oscillent entre 1-3u.

**Tendance observée**: Déclin net entre N-1 (moyenne ~2,7u hors outlier) et période récente (1u). La dernière commande à 1u suggère une normalisation à un niveau plus bas, possiblement due à une rotation plus faible du produit bio spécialisé ou à une réduction de la demande client final.

**Saisonnalité**: Aucun pattern saisonnier détectable. Les commandes sont dispersées sur tous les mois sans concentration particulière en octobre N-1.

**Décision**: Avec un espacement typique de 2-3 mois et la dernière commande datant de mi-juillet, une commande début octobre est cohérente avec le rythme. La tendance baissière récente et la dernière quantité à 1u orientent vers une prédiction conservatrice. Baseline théorique à 1,5u, mais arrondi à 1u pour coller à la réalité opérationnelle récente du client.

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
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: 0.7u (12j restants) → prédit 1u mais non commandé |
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
| [LV136] LV Tartinade Betterave 190g | 1 | Stock prédit: -0.4u (-10j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -1.6u (-21j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -1.6u (-20j restants) → prédit 1u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -1.3u (-19j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock prédit: -0.4u (-10j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: -0.4u (-10j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: -1.1u (-21j restants) → prédit 1u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Stock prédit: -2.1u (-56j restants) → prédit 1u mais non commandé |
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

*Rapport généré automatiquement le 2025-11-20T09:01:54.017Z*
