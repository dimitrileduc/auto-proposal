# Rapport Backtest - Client SODEXO SAFRAN BE3723

## Contexte

- **Client** : SODEXO SAFRAN BE3723 (ID: 60539)
- **Commande réelle** : S40028
- **Date commande** : 2025-10-30 13:17:36
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 6,324 input + 3,200 output = 9,524 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 8 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 1.83 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 26.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (6)

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
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 8 | 7 | 1.0 | 14.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle (cycle de 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 5-6 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES 1 & 2: Pas d'outliers détectés sur le faible échantillon disponible. Pas de données N-1 pour confirmer une saisonnalité, mais le produit (barre protéinée) est généralement stable en automne. ÉTAPE 3: La fréquence est très faible (2 commandes en 3 mois), suggérant un produit de niche ou à faible rotation. La tendance est stable. ÉTAPE 4: Avec une moyenne de 5.5 unités sur les deux derniers points de contact, une recommandation de 5 unités est prudente pour éviter le sur-stockage sur un produit dont la vitesse d'écoulement semble lente. Le niveau de confiance est bas en raison du manque d'historique.

</details>


<details>
<summary><strong>2. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 5-6 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée sur les deux seuls points de données (5 et 6 unités). Étape 2: Absence de données N-1 pour évaluer la saisonnalité, impact considéré comme nul par défaut. Étape 3: La tendance semble stable avec un volume très faible et une fréquence espacée (2 mois d'écart). Étape 4: La moyenne lissée est de 5.5 unités. Compte tenu du très faible historique et du risque de sur-stockage sur un produit à rotation lente, une approche conservatrice de 5 unités est recommandée pour couvrir la demande de base constatée lors de la dernière commande du même jour (mercredi). L'indice de confiance est faible dû au manque de profondeur historique (seulement 2 commandes). Sans accélération visible de la demande, il n'est pas justifié d'augmenter le stock au-delà du volume historique habituel car cela immobiliserait inutilement de la trésorerie sur une référence de niche (barre protéinée). L'alignement du jour de commande (mercredi) avec l'historique récent confirme la pertinence de ce volume de fond de 5 unités pour le cycle actuel d'approvisionnement du client en milieu de semaine, période de consommation régulière en snacking santé/B2B (salle de sport ou bureaux). En l'absence de signaux de croissance ou de promotion, on reste sur le volume minimum viable constaté lors de la dernière transaction d'octobre pour maintenir la fraîcheur du produit et éviter les dates courtes sur ce type de confiserie spécialisée. On suppose que le client commande par boîtes complètes ou multiples de 5 au vu de la régularité du volume par rapport à la dénomination produit standard 40g (barres individuelles). En résumé, la prédiction est basée sur la stabilité du dernier point de données connu à la même période de la semaine (mercredi 01/10). On choisit 5 plutôt que 6 pour minimiser le risque car la dernière commande était plus faible que l'avant-dernière (baisse de 1 unité), suggérant un écoulement plus lent ou un reliquat de stock disponible.

</details>


<details>
<summary><strong>3. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec légère baisse (6u vers 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée sur les deux points de données, la moyenne est de 5.5u. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: Le rythme de commande est très espacé (2 mois d'intervalle), passant de 6u le lundi 04/08 à 5u le mercredi 01/10. La demande actuelle intervient seulement 4 semaines après la dernière, suggérant soit une accélération des ventes, soit une commande de complément. Étape 4: En l'absence d'historique robuste et pour éviter le sur-stockage sur un produit à faible rotation, je recommande une quantité conservatrice de 5 unités, s'alignant sur la commande la plus récente.

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (Mensuel lointain avec 56 jours d'écart)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 5.5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes de 5 et 6 unités sont cohérents pour ce type de snack B2B. Étape 2: Aucune donnée N-1 disponible, mais le produit semble stable sans pic saisonnier immédiat visible. Étape 3: La fréquence est faible et irrégulière (presque 2 mois entre les deux commandes). La tendance est très légèrement baissière (6u à 5u) mais l'échantillon est trop petit pour confirmer une chute. Étape 4: En l'absence de données de rotation rapides, une approche conservatrice est adoptée. On recommande 5 unités pour satisfaire la demande de fond habituelle tout en évitant le sur-stockage sur un produit à faible rotation (Low Confidence due au manque d'historique).

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 5u vs Médiane: 7u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, environ toutes les 4 à 5 semaines
- **Saisonnalité**: none
- **Tendance**: Légère baisse (7u vers 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est basée sur un historique très limité (2 points de données). Etape 1 : Aucun outlier n'est détecté car les volumes (5u et 7u) sont cohérents pour du format B2B. Etape 2 : Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul. Etape 3 : On observe une baisse de 28% entre août et octobre, ainsi qu'un intervalle de commande d'environ 30 jours. Etape 4 : La demande actuelle (29/10) survient exactement 28 jours après la précédente (01/10), confirmant un cycle mensuel. Compte tenu de la tendance baissière et de l'absence de visibilité long terme, une approche conservatrice est privilégiée en s'alignant sur le dernier volume de 5 unités pour éviter le surstockage sur un produit à rotation lente ou irrégulière. Confiance faible due au manque d'historique significatif sur l'année complète ou les 6 derniers mois (Période Récente). Jours de commande (jeu, mer) non fixes mais rapprochés en milieu de semaine (mercredi). Finalement, la quantité recommandée au jour de la demande est de 5 unités pour maintenir le stock de sécurité sans excédent car le produit ne semble commander qu'une fois par mois environ sans grosse accélération visible à date de fin octobre malgré l'entrée en période Automne/Hiver (ventes barres chocolatées généralement stables ou en hausse). Cependant, sans preuve de croissance, on reste sur le volume le plus bas observé récement (5u). On ne commande pas 1 pour éviter une rupture car l'intervalle est long mais sans commander 7 pour prévenir une chute de la demande ou péremption si la rotation n'est pas constante d'un mois sur l'autre suite à la baisse observée entre août et octobre de 7 à 5u (tendance -28.5% entre ces deux points de commandes récents).

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>2. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>3. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-28 06:05:44: 7u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>




---

## False Positives (2)

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
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 5 | Stock prédit: 0.8u (5j restants) → prédit 5u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 6 | Stock prédit: 0.8u (5j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:11:59.369Z*
