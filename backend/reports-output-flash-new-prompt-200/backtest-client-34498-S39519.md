# Rapport Backtest - Client D'ICI NANINNE

## Contexte

- **Client** : D'ICI NANINNE (ID: 34498)
- **Commande réelle** : S39519
- **Date commande** : 2025-10-03 06:18:15
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 12,601 input + 4,696 output = 17,297 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 14 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 100.0% | Score équilibré global |

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
| **MAE** | 2.14 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 73.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 132.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 68.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 12 | Avec erreur |

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

## True Positives (14)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 7 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 5 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 7 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 7 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 4 | 1 | 3.0 | 300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 5 | 1 | 4.0 | 400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 6 | 1 | 5.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 7u vs Médiane: 6u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 7u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (8u vers 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante n'est détectée sur les deux points de données (6u et 8u), reflétant une demande de fond stable pour un produit de niche. ÉTAPE 2 (Saisonnalité): Absence de données N-1 et historique trop court pour confirmer un impact saisonnier. ÉTAPE 3 (Tendance): On observe un ralentissement de la fréquence et une légère baisse de volume entre juillet et septembre. ÉTAPE 4 (Recommandation): La moyenne arithmétique de 7 unités est retenue comme base de réapprovisionnement sécuritaire. Étant donné l'irrégularité des commandes, ce volume permet de couvrir la demande sans risque majeur de surstockage pour ce format bio 125g.

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 5u vs Médiane: 10u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 7u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 6u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique, environ 1 commande tous les 50-60 jours
- **Saisonnalité**: none
- **Tendance**: Baisse du volume (-60%) entre les deux derniers points de données
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux commandes sur trois mois. L'étape 1 ne montre pas d'outliers évidents, mais une baisse de volume de 10u à 4u. Étape 2: Aucune donnée N-1 pour confirmer une saisonnalité, bien que le piment/citron soit souvent lié à l'apéritif estival (ce qui expliquerait la baisse en septembre). Étape 3: La tendance est à la baisse et la fréquence est faible. Étape 4: La moyenne lissée est de 7u, mais compte tenu de la tendance récente baissière et de la faible fréquence, une recommandation conservatrice de 5u (quantité plancher légèrement supérieure à la dernière commande) est préconisée pour éviter le sur-stockage sur un produit à rotation lente ou erratique en cette période de rentrée/automne. La confiance est faible due au manque de profondeur historique (N-1 absent). Ils commandent quand le stock est vide plutôt que sur un cycle hebdomadaire fixe (le jeudi actuel ne correspond pas aux jours passés). Aucun signal de rupture immédiate n'impose une commande massive aujourd'hui (jeudi). On s'aligne sur le besoin récent de 4u avec une marge de +1u de sécurité par précaution (total 5u). L'absence de cycle régulier suggère une gestion par point de commande manuel côté client plutôt qu'un approvisionnement structuré.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique (60 jours d'intervalle)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (6u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. DE-EVENTING: Aucune donnée aberrante n'est identifiée vu le très faible historique de commandes ; 2. SAISONNALITÉ : Pas de données N-1 disponibles pour évaluer un impact saisonnier spécifique sur ce produit ; 3. TENDANCE : On observe un ralentissement du volume passant de 6u en juillet à 3u en septembre, avec une fréquence de commande très espacée (2 mois) ; 4. RECOMMANDATION : Étant donné le faible historique et la baisse de volume observée, une approche conservatrice est privilégiée avec une commande de 3u pour couvrir le besoin courant sans risquer de surstockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 7u vs Médiane: 7u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 6.5u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique (intervalle de 54 jours)
- **Saisonnalité**: none
- **Tendance**: Stable (moyenne 6.5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante identifiée, les volumes de 6u et 7u sont cohérents pour du snacking B2B. Étape 2: Pas de données N-1 pour confirmer une saisonnalité, mais le produit (chips) est stable hors été/fêtes. Étape 3: Pas de rythme hebdomadaire strict (fréquence longue de ~2 mois). Étape 4: En l'absence de récurrence forte, nous basons la commande sur la moyenne haute récente (7u) pour couvrir la période à venir. La confiance est faible car l'historique ne contient que deux points de données très espacés.

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 7u vs Médiane: 8u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 7.5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 3u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence de commande (tous les 2 mois environ)
- **Saisonnalité**: none
- **Tendance**: Stable entre 7u et 8u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Pas d'outliers détectés sur les deux seules données disponibles (7u et 8u). Étape 2 (Saisonnalité): Données N-1 absentes, aucun impact saisonnier déductible pour ce produit spécifique. Étape 3 (Tendance): La demande semble stable autour de 7,5 unités avec une récurrence très espacée (environ 60 jours). Étape 4 (Recommandation): Au vu du faible historique et de la date de dernière commande (01/09), le cycle suggère un besoin imminent. Je recommande une quantité conservatrice de 7 unités (arrondi inférieur de la moyenne) pour couvrir la demande tout en évitant le surstockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence (~45-50 jours), jours variables (mercredi/lundi)
- **Saisonnalité**: none
- **Tendance**: Stable à baisse légère (5u vers 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante identifiée, les volumes de 3 et 5 unités sont cohérents pour du snacking bio premium. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul. Étape 3: La fréquence est très espacée (presque 2 mois entre les commandes) avec une légère baisse de volume sur la dernière occurrence. Étape 4: La moyenne lissée est de 4 unités. Étant donné l'absence d'historique solide et la faible rotation, on préconise la moyenne pour maintenir un stock de sécurité minimal sans risquer le surstockage sur un produit à rotation lente. La confiance est faible car basée sur seulement deux points de données historiques sur 3 mois (juillet et septembre). Aucun besoin spécifique identifié pour le jeudi (jour de demande actuel). Pour un produit premium bio (DLUO potentiellement plus courte), la prudence est de mise avec 4 unités (valeur médiane).er le surstockage sur un produit à rotation lente. La confiance est faible car basée sur seulement deux points de données historiques sur 3 mois (juillet et septembre). Aucun besoin spécifique identifié pour le jeudi (jour de demande actuel). Pour un produit premium bio (DLUO potentiellement plus courte), la prudence est de mise avec 4 unités.

</details>


<details>
<summary><strong>7. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 4u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (environ une commande tous les 50-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à baisse légère (de 6u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est limitée par un historique très pauvre (seulement 2 points de données). ÉTAPE 1: Aucune valeur n'est identifiée comme outlier, la moyenne est de 5 unités. ÉTAPE 2: Pas de données N-1 pour confirmer une saisonnalité, impact considéré nul. ÉTAPE 3: La dernière commande (4u) montre un volume plus faible que la précédente (6u), suggérant une rotation lente. ÉTAPE 4: Compte tenu de l'absence de régularité et de la nature non périssable immédiate mais spécifique du produit (Barre bio), on opte pour une approche conservatrice basée sur le dernier volume observé (4u) pour éviter un surstockage sur un produit à faible rotation (Low Runner). La confiance est faible car le pattern temporel est erratique (63 jours d'intervalle). Pour une commande un jeudi hors cycle habituel, on maintient le volume de fond sans supplément sécurité car le rythme semble ralentir de 33%.', 'baseline_quantity': 5.0, 'recommended_quantity': 4, 'confidence': 'low', 'reasoning': 'Analyse sur données limitées (2 commandes). Absence de saisonnalité mesurable et tendance baissière légère (6u vers 4u). Recommandation conservatrice de 4 unités pour s'aligner sur la demande la plus récente et éviter l'immobilisation de stock sur un produit à faible rotation.

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 4u vs Médiane: 7u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 6u (600.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (intervalle de 54 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse du volume (-42%) et fréquence erratique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'apparaît comme un outlier massif, les deux commandes (4u et 7u) sont conservées pour établir la base. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, impact considéré nul. Étape 3: La tendance récente montre un ralentissement entre juillet et septembre (7u vers 4u). L'intervalle de commande est long (2 mois). Étape 4: En l'absence de régularité et face à une baisse du volume sur la dernière commande, une approche conservatrice est adoptée en s'alignant sur le dernier volume constaté (4u) pour éviter le sur-stockage d'un produit bio à rotation lente.

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 4u vs Médiane: 10u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 8u (400.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (Intervalle de 54 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (10u vers 4u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 10u en juillet est considérée comme un outlier par rapport à la demande plus récente de 4u. Étape 2: Aucune donnée N-1 n'est disponible et le produit ne présente pas de saisonnalité évidente à ce stade. Étape 3: La tendance est à la baisse ou à la stabilisation sur un petit volume (4u). Étape 4: En l'absence de fréquence régulière et face à un historique pauvre, une approche conservatrice est privilégiée en se basant sur la dernière commande réelle pour éviter le sur-stockage sur une référence peu active.

</details>


<details>
<summary><strong>10. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 4u vs Médiane: 10u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 6u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, environ 30 à 60 jours entre les commandes
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (10u vers 4u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 10 unités en juillet est traitée comme un outlier ou un stock initial, la demande de fond récente se situant à 4 unités. Étape 2: Aucune donnée N-1 n'est disponible pour confirmer une saisonnalité, impact considéré comme nul. Étape 3: La tendance est à la baisse entre les deux seuls points de données disponibles (juillet vs septembre). Étape 4: En l'absence de récurrence forte et avec un historique très limité de seulement deux commandes en trois mois, la prudence impose de recommander la dernière quantité observée (4u) pour éviter le surstockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>11. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 5u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 3u (150.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (approx. tous les 50-60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse de volume (-50%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Pas d'outliers identifiés, les deux commandes (4u et 8u) sont cohérentes pour du B2B de niche. ÉTAPE 2 (Saisonnalité): Données insuffisantes (pas de N-1) pour confirmer une saisonnalité, impact considéré comme nul. ÉTAPE 3 (Tendance): On observe un espacement de 54 jours entre les deux commandes et une baisse de volume (de 8u à 4u). ÉTAPE 4 (Recommandation): La moyenne lissée est de 6u, mais la tendance récente est à 4u. Étant donné l'absence de pattern de jour fixe et la faible fréquence, une approche conservatrice de 5 unités est recommandée pour couvrir la demande de fond tout en limitant le risque de sur-stockage sur un produit à rotation lente (low confidence due au faible historique).

</details>


<details>
<summary><strong>12. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 4u (400.0%)
- 📉 **Erreur Médiane**: 5u (500.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (tous les deux mois environ)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes 4u et 6u sont cohérents pour ce type de snack bio. Étape 2: Aucune donnée historique N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: Tendance stable sur une faible fréquence (moyenne de 5 unités). Étape 4: En l'absence de régularité hebdomadaire et face à un historique très pauvre (seulement 2 points de données), la recommandation se base sur la moyenne arithmétique simple. On privilégie une approche conservatrice pour éviter le sur-stockage d'un produit à rotation apparemment lente (cycle de ~60 jours). La confiance est faible car l'historique est statistiquement insuffisant pour un modèle prédictif robuste, mais 5 unités couvrent le besoin moyen observé sur les deux derniers points de vente sans risque majeur de perte de péremption (DLV).

</details>


<details>
<summary><strong>13. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 6u vs Médiane: 6u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 8u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 5u (500.0%)
- 📉 **Erreur Médiane**: 5u (500.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique (60+ jours d'intervalle)
- **Saisonnalité**: none
- **Tendance**: Baisse (passant de 10u à 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier identifié car l'historique est trop restreint (seulement 2 points de données). Étape 2 : Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3 : La tendance récente montre une diminution du volume de commande (de 10u en juillet à 6u en septembre) avec une fréquence très faible (une commande tous les deux mois environ). Étape 4 : La demande de fond est de 8 unités en moyenne, mais la tendance baissière et le délai de 30 jours depuis la dernière commande justifient une approche conservatrice. La recommandation est fixée à 6 unités pour éviter le sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>14. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence de commande (intervalle de 2 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande de fond est fixée à 4u sur la base des deux points de données disponibles. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul. Étape 3: La tendance est stable en volume (4u), mais la fréquence est très espacée (juillet puis septembre). Étape 4: Nous sommes le jeudi 2 octobre, soit un mois après la dernière commande. Bien que le cycle semble être de 60 jours, le caractère 'Superfood bio' et le risque de rupture en B2B justifient le maintien d'un stock de fond de 4u. La confiance est faible en raison de la pauvreté de l'historique.

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 6u
- 2025-07-09 11:05:21: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 3u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 7u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 7u
- 2025-07-09 11:05:21: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 3u
- 2025-07-09 11:05:21: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 7u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>11. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 6u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>14. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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

*Rapport généré automatiquement le 2025-12-18T12:15:59.498Z*
