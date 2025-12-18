# Rapport Backtest - Client ASIE A TIK

## Contexte

- **Client** : ASIE A TIK (ID: 60160)
- **Commande réelle** : S39937
- **Date commande** : 2025-10-27 10:58:28
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 6,220 input + 3,078 output = 9,298 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 57.1% | 7 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 72.7% | Score équilibré global |

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
| **MAE** | 6.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 62.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 76.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (4)

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 9 | 20 | 11.0 | 55.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 10 | 5 | 5.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 11 | 5 | 6.0 | 120.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 7 | 10 | 3.0 | 30.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 9u vs Médiane: 9u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 9u (confidence: low)
- 📊 **Baseline N-1**: 9.33u
- 📊 **Médiane**: 9u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 11u (55.0%)
- 📉 **Erreur Médiane**: 11u (55.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle (25-45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 9u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée, les volumes sont homogènes (8-10u). ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles, mais le produit (thé glacé) est généralement corrélé à la chaleur; en octobre, la demande devrait être stable ou en légère baisse. ÉTAPE 3 (Tendance): Le volume est stable. Cependant, la fréquence est faible et espacée (dernière commande il y a 25 jours), suggérant une consommation lente. ÉTAPE 4 (Recommandation): La moyenne lissée est de 9.33 unités. Étant donné l'absence de données historiques solides et le jour de commande inhabituel (dimanche), une approche conservatrice de 9 unités est recommandée pour couvrir le mois à venir sans risque de sur-stockage en période automnale hors saisonnalité forte du thé glacé bio direct-to-consumer/B2B caféterie ou retail sélectif localisé par le type de référence TEN01 thé citron sureau 330ml (produit de niche). L'absence d'outliers renforce la stabilité de ce volume de fond de 9u, mais la confiance reste basse due au faible historique (3 points). Quantité finale arrondie à l'entier le plus proche de la tendance stable (9u). Même si c'est un dimanche, la régularité du volume prévaut sur le cycle journalier indéfini dans les données actuelles (les commandes précédentes étant en milieu de semaine). Pas de besoin immédiat d'ajustement à la hausse car dernière livraison récente (25 j vs cycle précédent de 42 j). Le stock devrait encore être suffisant pour amortir une demande faible constante avant la nouvelle livraison, orientant vers la prudence de ne pas charger plus que la rotation moyenne constatée sur 3 mois glissants sans signal de croissance de part de marché sur ce SKU spécifique sur la zone d'approvisionnement B2B identifiée par le label du produit TENSAÏ TEA. Finalisation à 9 unités conformément au mode de calcul conservateur par défaut du modèle Senior Supply Chain en absence de visibilité N-1 claire sur le 4e trimestre pour cette boisson aromatisée au citron et fleurs infusées bio certifiée par les points 10, 8, 10 de l'historique fournis ci-dessus.

</details>


<details>
<summary><strong>2. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 5u (100.0%)
- 📉 **Erreur Médiane**: 5u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière, environ toutes les 3 à 6 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 10u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 1u du 07/08 est isolée et identifiée comme un ajustement ou reliquat; la demande de fond se stabilise à 10u. Étape 2: Aucune donnée N-1 disponible, mais le thé au gingembre est un produit stable hors canicule, l'impact saisonnier est neutre en octobre. Étape 3: La tendance est stable (10u sur les deux dernières commandes majeures) malgré une fréquence erratique. Étape 4: La date actuelle est un dimanche alors que les commandes tombent habituellement en milieu de semaine; nous recommandons 10u pour couvrir le cycle de novembre tout en restant conservateur face au manque d'historique dense (confiance basse). Maison de thé (Tensaï) en B2B suggère un réapprovisionnement par carton complet, 10 semble être l'unité de conditionnement standard constaté.

</details>


<details>
<summary><strong>3. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 11u vs Médiane: 10u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 11u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 6u (120.0%)
- 📉 **Erreur Médiane**: 5u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle à bimensuelle (mercredi prédominant)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (8u à 12u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur n'est identifiée comme outlier faute d'un historique volumineux; la moyenne se situe à 10u. ÉTAPE 2: Pas de données N-1 pour confirmer une saisonnalité, bien que le thé glacé soit généralement plus faible en automne. ÉTAPE 3: On observe une légère tendance à la hausse sur les volumes commandés (8u en août vs 12u en octobre), mais la fréquence est très espacée (environ 40 jours). ÉTAPE 4: La commande intervient un dimanche alors que le client achète habituellement le mercredi. En lissant la tendance haussière récente avec une approche conservatrice due au faible historique, une recommandation de 11 unités est optimale pour couvrir le mois à venir sans sur-stockage massif durant la période de refroidissement automnale (octobre). Confidence 'low' car seulement 2 points de données réels (>0) sont disponibles sur 3 mois localisés sur la fin de l'été/début d'automne sans visibilité N-1 annuelle complète pour confirmer la récurrence du besoin mensuel face à la chute des températures de fin d'année qui pourrait ralentir les ventes de boissons fraîches types thé blanc bio en bouteille de 330ml de type snack/impulsion et nous conseillerait donc de ne pas sur-commander sur ce seul signal de progression (12u). Une quantité de 11 permet de conserver le stock tampon en fonctionnant sur un mode réapprovisionnement à flux régulier plutôt qu'en réplication de pic de 12u si ce dernier contenait une part de stockage ponctuelle non identifiée ici ou simplement à cause de la modification de saison qui va jouer négativement sur l'écoulement du produit en point de vente retail/B2B après le mois d'octobre qui est le point de bascule vers l'hiver et les boissons chaudes plus adaptées au milieu du dernier quadrimestre de l'année scolaire et civile pour ce segment spécifique de thé premium prêt-à-boire de chez Tensaï Tea connu pour son aspect rafraîchissant plutôt que convivial d'hiver massif en format 330ml individuel typique des consommations extérieures réduit en cette période actuelle de l'année demandée par rapport au mois d'août précédent plus propice à la forte demande volumique et dont l'écoulement semble ralenti ici par l'écart entre la commande d'août et celle d'octobre qui laisse supposer un fond de stock durable et peu rotatif en point de vente final du professionnel client de la plateforme b2b en question ce jour.

</details>


<details>
<summary><strong>4. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM: 7u vs Médiane: 8u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 7u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 3u (30.0%)
- 📉 **Erreur Médiane**: 2u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel (intervalles espacés de 13 jours en août)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 7u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée sur le faible échantillon. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, bien que le thé glacé soit théoriquement saisonnier. Étape 3: Les données sont très anciennes (août 2025) et révèlent une absence d'activité sur septembre/octobre, suggérant soit une rotation très faible, soit un arrêt temporaire. Étape 4: La recommandation se base sur la moyenne historique (7u) pour reconstituer un stock de fond prudent. La confiance est faible en raison de l'ancienneté des dernières transactions (shadow period de 60 jours). On privilégie une quantité conservatrice proche de la dernière commande pour limiter le risque de péremption sur un produit bio à rotation lente en période hivernale naissante (octobre). Aucun cycle hebdomadaire clair n'est établi le dimanche (date actuelle). Jouer la moyenne basse est la stratégie supply chain la plus sûre ici pour éviter le sur-stockage sur un produit n'ayant pas tourné récemment dans les données transmises (26 octobre). Ce volume de 7 unités (environ un carton standard de 6 ou 12 selon packaging habituel) permet de tester la reprise de la demande sans risque majeur de perte sèche sur les fins de stocks bio à rotation lente en automne/hiver (octobre). On évite de monter à 10 ou plus tant que la reprise du flux après 2 mois d'arrêt n'est pas confirmée opérationnellement par une vente réelle de récurrence courte (hebdomadaire ou bimensuelle). La recommandation finale est donc alignée sur la demande de fond de 7u, en l'attente de nouveaux signaux de vente qui justifieraient une augmentation du stock tampon par la suite si le flux se stabilise ou s'accélère durant la fin d'année 2025 (fêtes ou événements promotionnels non encore identifiés sur ce SKU spécifique).

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:15:18: 10u
- 2025-08-20 11:40:57: 8u
- 2025-08-07 09:07:10: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 9u (confidence: low)
**📊 Quantité Réelle**: 20u

</details>


<details>
<summary><strong>2. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:15:18: 10u
- 2025-08-20 11:40:57: 10u
- 2025-08-07 09:07:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>3. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:15:18: 12u
- 2025-08-20 11:40:57: 8u
- 2025-08-07 09:07:10: 0u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 11u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>4. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-20 11:40:57: 8u
- 2025-08-07 09:07:10: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 10u

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -7.9u (-48j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -12.7u (-61j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -5.4u (-38j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:12:28.303Z*
