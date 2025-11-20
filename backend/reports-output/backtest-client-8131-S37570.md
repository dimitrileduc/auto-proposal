# Rapport Backtest - Client ILIS    SA, FRANCESCO LOZANO

## Contexte

- **Client** : ILIS    SA, FRANCESCO LOZANO (ID: 8131)
- **Commande réelle** : S37570
- **Date commande** : 2025-06-20 08:53:32
- **Date cutoff système** : 2025-06-20 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 5
- **Tokens**: 10,331 input + 2,944 output = 13,275 total
- **Coût**: $0.0752 (~7.52¢)
- **Coût par produit LLM**: $0.0150


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 62.5% | 8 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 76.9% | Score équilibré global |

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
| **MAE** | 145.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 51.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -71.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (5)

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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 800 | 640.0 | 80.0% | ✅ partial | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 22 | 50 | 28.0 | 56.0% | ✅ partial | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 3 | 10 | 7.0 | 70.0% | ✅ partial | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 104 | 52.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 52 | 52 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 800u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 160u (confidence: high)
- 📊 **Baseline N-1**: 160u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 800u
- 📉 **Erreur LLM**: 640u (80.0%)
- 📉 **Erreur Médiane**: 640u (80.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire le vendredi (pattern très régulier), avec une exception ponctuelle le mardi 03/06
- **Saisonnalité**: none
- **Tendance**: Stable autour de 160u (la commande de 240u du 06/06 semble être un rattrapage ou une exception)
- **Outliers détectés**: 240u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Le client présente un pattern hebdomadaire très clair avec commandes quasi-systématiques le vendredi (16/05, 23/05, 06/06, 13/06). L'exception du mardi 03/06 (160u) suivie de la commande exceptionnelle de 240u le vendredi 06/06 suggère un rattrapage ou un besoin ponctuel (240u = 1,5x la quantité habituelle).

FILTRAGE OUTLIERS: La commande de 240u du 06/06 est identifiée comme outlier car elle rompt avec le pattern stable de 160u observé sur 4 autres dates. L'absence de données N-1 empêche de confirmer une saisonnalité, mais le pattern récent (mai-juin) montre une demande de fond à 160u.

SYNTHÈSE: 
- Fréquence: Hebdomadaire le vendredi
- Demande de fond: 160u (4 occurrences sur 5)
- Pas de tendance haussière durable
- Date de prédiction: Vendredi 20/06 (J+7 après la dernière commande du 13/06)

DÉCISION: La quantité la plus PROBABLE est 160u, correspondant au rythme hebdomadaire régulier du client. La commande de 240u est considérée comme une exception ponctuelle déjà résorbée.

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 22u vs Médiane: 24u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 22u (confidence: medium)
- 📊 **Baseline N-1**: 23u
- 📊 **Médiane**: 24u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 28u (56.0%)
- 📉 **Erreur Médiane**: 26u (52.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire le vendredi (3 vendredis consécutifs en mai : 02/05, 09/05, 16/05), puis rupture avec commande mardi 03/06, puis retour vendredi 13/06
- **Saisonnalité**: none
- **Tendance**: Stable autour de 22-24u (hors outliers)
- **Outliers détectés**: 80u, 0u

**🧠 Raisonnement LLM:**

ANALYSE RYTHMIQUE:
- Pattern clair : commandes le vendredi (09/05, 16/05, 13/06 = tous vendredis)
- La commande du 02/05 (vendredi) à 0u est une anomalie (commande technique ou annulation)
- La commande du 03/06 (mardi) à 80u est un outlier majeur (probable rattrapage ou besoin exceptionnel)
- Intervalles normaux : ~7 jours (hebdomadaire)

FILTRAGE OUTLIERS:
- 0u le 02/05 : anomalie administrative à ignorer
- 80u le 03/06 : pic exceptionnel (3,3x la normale), probablement événement ponctuel ou rattrapage après le 0u du 02/05
- Demande de fond réelle : 24u (09/05), 24u (16/05), 20u (13/06)

TENDANCE & BASELINE:
- Volume stabilisé entre 20-24u sur les vendredis normaux
- Légère baisse récente : 24u → 20u (-17%)
- Baseline calculée : moyenne des 3 derniers vendredis normaux = (24+24+20)/3 = 22,67u

PRÉDICTION POUR LE 20/06 (VENDREDI):
- Intervalle depuis dernière commande : 7 jours (rythme hebdomadaire respecté)
- Pas de saisonnalité N-1 détectable (pas de données)
- Application baseline ajustée à la baisse récente : 22u
- Confiance moyenne car historique court (5 points dont 2 outliers)


</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 3u vs Médiane: 5u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 7u (70.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec prédominance vendredi (4/5 commandes), intervalle variable 7-28 jours
- **Saisonnalité**: none
- **Tendance**: Baisse -40% (exclusion outlier: 5u → 3u)
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: 
- 4/5 commandes tombent un vendredi (18/04, 11/04, 16/05, 13/06), suggérant une préférence hebdomadaire/bi-hebdomadaire pour ce jour
- Intervalle variable: 7j (11→18/04), 10j (18/04→28/04 lun.), 18j (28/04→16/05), 28j (16/05→13/06)
- La prédiction tombe un vendredi (20/06), aligné avec le pattern observé

**FILTRAGE OUTLIERS**:
- Le 11/04: 60u est un pic exceptionnel (+1100% vs moyenne) → Probable promotion/événement/erreur saisie
- Exclusion justifiée: aucune autre commande ne dépasse 5u

**TENDANCE RÉCENTE** (hors outlier):
- 18/04: 5u, 28/04: 5u, 16/05: 5u → Stable à 5u
- 13/06: 3u → **Rupture récente -40%**
- Dernier intervalle (28 jours) plus long que la moyenne → possible ajustement de rythme ou baisse structurelle

**DÉCISION**:
- Baseline théorique sans outlier: 4.5u (moyenne 18/04-16/05)
- Dernière commande (3u) la plus récente indique nouvelle norme probable
- Pas de saisonnalité N-1 disponible pour validation
- **Prédiction: 3u** - Privilégie le signal récent de baisse tout en restant conservateur sur l'ampleur (peut être conjoncturel)

Confiance MEDIUM: Pattern jour fiable (vendredi) mais incertitude sur permanence de la baisse observée.

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 104u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 52u (confidence: high)
- 📊 **Baseline N-1**: 52u
- 📊 **Médiane**: 52u
- ✅ **Réel commandé**: 104u
- 📉 **Erreur LLM**: 52u (50.0%)
- 📉 **Erreur Médiane**: 52u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle (~14-25 jours d'écart)
- **Saisonnalité**: none
- **Tendance**: Stable - Demande constante à 52u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Intervalles observés: 21/03→04/04 (14j), 04/04→28/04 (24j), 28/04→23/05 (25j), 23/05→03/06 (11j). Pattern irrégulier mais fréquence globalement bi-mensuelle. Dernière commande il y a 17 jours (03/06→20/06), ce qui correspond au rythme observé.

**STABILITÉ PARFAITE:**
100% des 5 dernières commandes = 52u exactement. Aucun outlier détecté, aucune variation de quantité. Cette constance absolue indique un besoin structurel fixe, probablement lié à un conditionnement ou une utilisation process standardisée.

**ABSENCE DE SAISONNALITÉ:**
Pas de données N-1 pour comparaison, mais la régularité sur Q1-Q2 2025 (mars à juin) ne montre aucun effet saisonnier.

**DÉCISION:**
La prédiction la plus précise est 52u, car:
- Pattern de quantité invariable (5/5 commandes identiques)
- Pas de signal de changement de tendance
- Intervalle depuis dernière commande cohérent avec historique
- Produit industriel (CURRY KETCHUP 10KG) = usage process stable

Confiance HIGH: la constance historique rend cette prédiction très fiable.

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 52u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 52u (confidence: medium)
- 📊 **Baseline N-1**: 43.33u
- 📊 **Médiane**: 52u
- ✅ **Réel commandé**: 52u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance vendredi (2/3 commandes un vendredi), intervalles variables: 4j entre 28/04-02/05, puis 21j entre 02/05-23/05
- **Saisonnalité**: none
- **Tendance**: Stable avec alternance 26u/52u (double format)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le client présente un pattern irrégulier mais avec préférence pour le vendredi (2/3 commandes). Intervalles variables: 4 jours (28/04→02/05) puis 21 jours (02/05→23/05). Depuis la dernière commande du 23/05, nous sommes à 28 jours d'écart au 20/06, ce qui suggère qu'une commande est due.

**PATTERN QUANTITATIF**: Alternance claire entre deux formats: 26u (petit format) et 52u (double). Séquence observée: 52u → 26u → 52u. Cela suggère un cycle où le client alterne selon ses besoins.

**DÉCISION**: La dernière commande était de 52u le 23/05 (vendredi). Suivant le pattern d'alternance, on pourrait s'attendre à 26u. CEPENDANT, l'intervalle de 28 jours (plus long que les précédents) suggère une accumulation de besoin. La prédiction se fait un vendredi (jour favori du client), et l'intervalle prolongé indique plutôt un besoin du format standard 52u.

**BASELINE**: Moyenne = 43.33u, mais le pattern binaire (26/52) rend cette moyenne moins pertinente. La quantité la plus probable est 52u compte tenu de l'intervalle long et du jour favorable.

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
| [PF0097] FILOU MOUTARDE 5 KG | 20 | Stock prédit: -13.9u (-16j restants) → prédit 20u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 20 | Stock prédit: 6.1u (14j restants) → prédit 20u mais non commandé |
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 15 | Stock prédit: -2.6u (-22j restants) → prédit 15u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T09:01:43.530Z*
