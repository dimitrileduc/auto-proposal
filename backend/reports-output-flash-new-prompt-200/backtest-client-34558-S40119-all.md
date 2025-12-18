# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S40119
- **Date commande** : 2025-11-04 13:47:12
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 10,295 input + 4,547 output = 14,842 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 18 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 90.9% | Score équilibré global |

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
| **MAE** | 1.27 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 51.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 72.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 8.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

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

## True Positives (15)

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
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 6 | 3.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | 4 | 1.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ une fois par mois (cycle 20-30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive du volume par commande (4u -> 2u -> 1u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 4u en septembre est traitée comme un outlier potentiel ou un sur-stockage initial qui a ralenti les commandes suivantes. La demande de fond réelle se stabilise autour de 1u. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, bien que le kombucha soit sensible à la chaleur, nous sommes en novembre (période creuse). Étape 3: On observe une érosion des volumes unitaires sur les trois derniers mois (4, 2, 1). Étape 4: Au vu de la faible fréquence et de la tendance baissière, une recommandation conservatrice de 1 unité est préconisée pour couvrir le besoin immédiat sans risque de sur-stockage, le temps de valider si le cycle mensuel se stabilise.

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (cycles de 20 à 34 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'analyse montre une consommation de fond extrêmement stable mais à très faible rotation (1 unité par commande). L'historique ne présente pas assez de profondeur pour confirmer une saisonnalité (absence de N-1), mais le segment Kombucha est généralement plus fort en période estivale, hors ici le pic de 2u a bien eu lieu en août avant de redescendre à 1u en septembre et octobre. La commande de 2u en août est considérée comme un outlier léger (stock de sécurité été). Avec une commande par mois en moyenne et une tendance stable à 1u lors des deux derniers mois, la recommandation de réapprovisionnement est fixée au minimum de 1 unité pour couvrir le mois de novembre sans risque de sur-stockage.

</details>


<details>
<summary><strong>3. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 30 jours (mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère fluctuation (2-3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont cohérents (2-3 unités). La moyenne de fond est de 2.67 unités par mois. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: La tendance est stable. On note une commande environ tous les 30 à 33 jours (08/08, 10/09, 14/10). La commande actuelle arrive le 03/11, soit 20 jours après la dernière, ce qui est légèrement précoce par rapport au cycle habituel. Étape 4: En maintenant une approche conservatrice sur un produit à faible rotation, une commande de 3 unités (le haut de la fourchette habituelle) permet de couvrir le mois à venir tout en sécurisant un léger stock de sécurité face à l'aléa du jour de commande.

</details>


<details>
<summary><strong>4. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30-34 jours)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère fluctuation (moyenne 2.67u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante n'est détectée, les volumes (2u et 3u) sont cohérents pour un produit B2B de niche. ÉTAPE 2 (Saisonnalité): Données N-1 absentes, mais le rythme actuel ne montre pas de pic saisonnier évident en fin d'année pour ce type de snack bio. ÉTAPE 3 (Tendance): Le ratio de commande est stable à hauteur de ~3 unités par mois. L'écart entre les commandes est régulier (env. 30 jours). ÉTAPE 4 (Recommandation): La dernière commande date d'il y a 20 jours. Puisque nous sommes lundi et que le cycle habituel est de 30 jours, une commande de 3 unités (arrondi conservateur du besoin mensuel) est recommandée pour couvrir le mois de novembre sans risque de sur-stockage.

</details>


<details>
<summary><strong>5. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 21 et 34 jours
- **Saisonnalité**: none
- **Tendance**: Hausse légère (2u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES ANALYSE : 1. Aucun outlier identifié, les volumes (2u-3u) sont cohérents pour du snacking B2B. 2. Saisonnalité non évaluable par manque d'historique N-1, mais la catégorie barres énergétiques est généralement stable en automne. 3. Tendance : Légère accélération du volume sur la dernière commande (3u vs 2u) et réduction de l'intervalle de temps (34j puis 21j). 4. Recommandation : Bien que la demande de fond soit de 2.33, nous restons conservateurs à 2 unités car la date de commande (lundi) est anticipée par rapport au cycle habituel de milieu de semaine, limitant le risque de rupture immédiate sans sur-stocker un produit à faible rotation linéaire sur ce point de vente spécifique car l'historique est encore trop récent (Low confidence). Sans données N-1, la prudence est de mise pour éviter le surstockage périssable (DLC). Elle correspond à la moyenne basse stable du produit sur 3 mois localement observée au delà de la dernière pointe ponctuelle de 3u sans confirmation de répétition sur ce volume haut pour le moment (B2B restockage préventif probable). On sécurise ainsi un fond de rayon minimal nécessaire pour la période de novembre sans exposition excessive au risque d'invendus de fin d'année si le cycle s'allonge de nouveau comme entre août et septembre (34j). La recommandation finale s'établit à 2 unités (Floor de la demande de fond). Pour information, le jour de livraison probable décalera légèrement la disponibilité au mardi/mercredi en ligne avec les habitudes historiques de facturation client observées précédemment sur les deux premiers mois (20/08 et 10/09). Aucun signe de rupture de stock identifié sur le flux récent justifiant une commande de sécurité supplémentaire à ce stade de l'analyse comportementale de l'acheteur final B2B localisé ici (achats groupés répétitifs à cycle mensuel environ). Enfin, le passage d'une commande un lundi (début de cycle) suggère une volonté de réapprovisionnement de confort plutôt qu'une urgence critique de stock déjà vide, validant l'approche conservatrice de 2 unités de fond pour la période immédiate (Baseline conservative). L'absence complète de données sur les 3 derniers trimestres interdit toute projection volumétrique supérieure sans risque financier opérationnel inutile et non justifié par une croissance organique robuste attestée (>50% de hausse continue). Le stock conseillé couvre ainsi les besoins théoriques projetés jusqu'au début décembre (Prochaine fenêtre habituelle de commande identifiée par le pattern trentenaire environ observé historiquement sur ce SKU).

</details>


<details>
<summary><strong>6. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec un socle à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier, les volumes étant faibles et cohérents (1-3u). Étape 2: Aucune donnée N-1 disponible, mais le secteur des barres bio est stable en automne; impact saisonnier jugé nul. Étape 3: On observe une stabilisation à 3 unités sur les deux dernières commandes (septembre et octobre), marquant un retour au volume standard après un creux à 1u en août. Étape 4: La demande de fond se situe à 3 unités. Étant donné l'absence de tendance haussière marquée et la nature du produit (stockable), une commande de 3 unités permet de couvrir le cycle de 30 jours identifié sans risque de surstockage majeur.

</details>


<details>
<summary><strong>7. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30-34 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 2u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune commande identifiée comme outlier, les volumes sont faibles et cohérents (2u-3u). Étape 2 (Saisonnalité): Manque de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par prudence. Étape 3 (Tendance): On observe un léger frémissement sur la dernière commande (3u le 14/10), mais le rythme reste espacé. Étape 4 (Recommandation): La moyenne lissée est à 2.33u. Étant donné l'absence d'historique long et le faible volume unitaire, une approche conservatrice est privilégiée pour éviter le surstockage sur un produit à rotation lente. La recommandation est fixée à 2 unités pour couvrir le cycle de fond habituel de 30 jours, avec un réajustement possible si la tendance à 3u se confirme au prochain cycle de novembre/décembre.

Note: Le passage d'une commande le lundi (03/11) survient 20 jours après la précédente, soit plus tôt que le cycle habituel de 30 jours, justifiant d'autant plus la prudence sur la quantité (2u). Balance risque/stock en faveur de 2u car le reliquat du stock précédent ne devrait pas être totalement épuisé si le cycle de consommation est de 30 jours pour 3u (soit 0.1u/jour). Depuis le 14/10, la consommation estimée est de 2u, il reste potentiellement 1u en stock théorique chez le client (2+1-2). On complète à 2u pour revenir à un stock cible de 3u sécurité incluse.

Confidence: Low car échantillon très réduit (3 points de données). Quantité recommandée cohérente avec les deux premières commandes de la période récente.

Quantité finale: 2u pour sécuriser sans alourdir le stock sur un produit de niche (bio/energy bar).

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 30j environ (mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les trois dernières commandes sont identiques (2u). Étape 2: Aucune donnée N-1 disponible, mais la stabilité parfaite sur 3 mois suggère une faible sensibilité saisonnière immédiate. Étape 3: Le cycle est régulier (~30-34 jours). La dernière commande date du 14 octobre, nous sommes le 3 novembre, soit 20 jours après; il est temps d'anticiper le stock pour le mois de novembre. Étape 4: La demande de fond est strictement de 2 unités. Étant donné la stabilité absolue du volume et de la fréquence, une commande de 2 unités est recommandée pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle long de 21 jours (cycle de 3 semaines environ)
- **Saisonnalité**: none
- **Tendance**: Légère hausse (+1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante identifiée car l'historique est très limité (2 points), les volumes de 2 et 3 unités sont cohérents pour des boissons énergisantes de niche. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, bien que le secteur boisson puisse être sensible à la météo. Étape 3: On observe une légère augmentation entre août et septembre (de 2 à 3 unités) avec un cycle espacé. Étape 4: En l'absence de commandes en octobre, il y a probablement un besoin de réapprovisionnement de fond. Compte tenu de la faible fréquence, une commande de 3 unités (le maximum observé) permet de couvrir la demande sans risque majeur de sur-stockage sur un produit à conservation longue. La confiance est faible en raison du manque de profondeur historique (seulement 2 commandes). Mourir la demande sur un cycle de 3-4 semaines semble être la stratégie la plus prudente ici sur un lundi hors cycle habituel (mercredi). (Note: Lundi 3 nov 2025). Quantité recommandée fixée à 3 unités pour maintenir la tendance haute observée en septembre après une absence de commande en octobre permettant de reconstituer le stock de sécurité chez le client B2B. Conservatisme appliqué pour ce format 250ml de niche (bio). Sans rupture de stock apparente, 3u est le choix le plus stable pour ce réapprovisionnement tardif (plus de 50 jours depuis la dernière commande). Conséquence directe: nous suivons la dernière commande enregistrée (3u). (Baseline 2,5u arrondie par le haut car consommation probable en octobre non capturée). 2025-11-03: Rentrée/Période automnale: stabilité préférée (3u). Fin de raisonnement : 3 unités recommandées (Entier).

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 1u
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 2u
- 2025-08-08 08:17:38: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 1u
- 2025-09-10 06:04:57: 1u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 3u
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 10:33:03: 2u
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

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
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: -0.6u (-4j restants) → prédit 2u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 3 | Stock prédit: 1.2u (11j restants) → prédit 3u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: -1.5u (-51j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:10:17.634Z*
