# Rapport Backtest - Client AU RAYON BIO

## Contexte

- **Client** : AU RAYON BIO (ID: 17809)
- **Commande réelle** : S39577
- **Date commande** : 2025-10-09 06:15:56
- **Date cutoff système** : 2025-10-09 00:00:00
- **Jours d'avance** : 0j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 22,868 input + 55,395 output = 78,263 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 15 produits prédits, 12 corrects |
| **Rappel** | 80.0% | 15 produits réels, 12 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 52.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

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

## True Positives (12)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: The historic data (N-1) shows irregular intervals averaging 22 days, with orders primarily on Monday, Tuesday, and Friday. The recent 3-month period reveals a shift: two consecutive Thursday orders (July 17 & 24) followed by a Wednesday order (Sept 10). This indicates the customer is not locked to a fixed weekday but operates on a roughly monthly cycle with variable ordering days. Thursday is not a habitual day historically (0% of N-1 orders) but represents 67% of recent orders, signaling a temporary or evolving pattern shift.
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
The N-1 year establishes a stable baseline of 2u with 92% consistency. The recent period shows a definitive shift: average increases to 2.67u (+33%), mode shifts to 3u, and the customer experimented with Thursday orders. The Sept 10 order (most recent) confirms 3u as the new reference point. Given the prediction date falls on a Thursday—recently used but not historically habitual—the most probable scenario is the customer continuing their elevated order quantity whenever they next order. Precision requires selecting the most frequent recent value, not averaging with outdated N-1 data. The 1u outlier in March 2024 is isolated and discarded.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irregulier (~20-40 jours)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit montre une extrême stabilité avec 80% des commandes à 2u (12/15). Les données récentes confirment cette norme (2u le 2025-09-10). Les intervalles irréguliers (10-48j) et l'absence de jour fixe indiquent un produit à commandes ad-hoc plutôt que cyclique. Les rares variations (1u ou 3u) sont marginales et non répétitives. Comme le jeudi n'est pas un jour établi mais que la consigne interdit le 0, la réponse logique est la quantité la plus probable: 2u, qui sera la commande lors de la prochaine commande (peu importe le jour exact).

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mode = 3u (9/15 commandes = 60%). Valeurs aberrantes identifiées: les commandes à 1u (2024-01-22 et 2025-07-17) correspondent à des redémarrages/ tests. Le pic à 4u (2024-09-09) est 1.45× la moyenne mais isolé, probablement un événement ponctuel (promotion, stock exceptionnel). La valeur dominante et stable est 3u.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -1u

**🧠 Raisonnement LLM:**
Le client a redémarré sa commande en juillet 2025 (1u test puis 3u). La commande de septembre confirme le volume standard à 3u avec un intervalle de 48j couvrant la trêve estivale (normale en agro B2B). Le cycle de 29j jusqu'au 09/10, combiné à la stabilisation observée à 3u, indique une commande mensuelle régulière. Le Jeudi est un jour ouvré valide figurant dans l'historique récent. Exclure l'outlier 1u et privilégier la dernière valeur stable (3u) maximise la précision et minimise le MAPE, conformément aux meilleures pratiques agroalimentaire B2B.

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern hebdomadaire régulier détecté. Les commandes surviennent à intervalles irréguliers (10 à 67 jours) principalement les lundis, mardis et vendredis. Le jeudi est totalement absent de l'historique.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client ne commande jamais le jeudi (absence totale dans 12 mois d'historique). Les commandes historiques sont très éparses mais stables : 1-2u (moyenne 1,5u, mode 2u sur 5/12 des cas). La dernière commande de 3u le 10/09 est plus de 2x supérieure à la moyenne et considérée comme outlier ponctuel car isolée dans un historique d'une année. Pour minimiser le MAPE, la quantité la plus probable pour la prochaine commande (probablement lundi 13/10 ou vendredi 17/10) est la valeur récurrente historique : 2 unités.

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: sporadic_monthly
- **Saisonnalité**: none
- **Tendance**: stable_with_recent_uptick
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Les données révèlent une absence totale de pattern hebdomadaire (intervalles de 10 à 48 jours). Le comportement est sporadique avec une cadence plutôt mensuelle (~30 jours) : 11 commandes sur 12 mois en N-1 confirment ce cycle. Les jours de commande varient (lundi, mardi, vendredi principalement). La date de prédiction est un jeudi, mais cela n'a pas d'importance car le rythme n'est pas hebdo. L'intervalle entre la dernière commande (10/09/2025) et la date cible (09/10/2025) est exactement 29 jours, ce qui correspond parfaitement au cycle mensuel historique. FILTRAGE OUTLIERS: La valeur historique dominante est 2u (11/13 commandes). La commande de 1u en mars 2024 est un outlier à la baisse. La hausse récente à 3u (10/09/2025) représente +50% mais n'est pas un pic aberrant (pas de multiplication ×2/×3). C'est la dernière donnée disponible, donc la plus représentative de la situation actuelle. La tendance montre une légère progression (2u → 2u → 3u) plutôt qu'un phénomène exceptionnel. SYNTHÈSE & DÉCISION: En absence de pattern hebdomadaire, le jour de la semaine est secondaire. Le cycle mensuel (29j) et la tendance récente vers la hausse sont les facteurs déterminants. Pour minimiser le MAPE avec des données limitées, il est crucial d'accorder un poids très fort à la commande la plus récente tout en reconnaissant la stabilité historique. La prédiction de 3u reflète à la fois la progression récente et respecte le cycle mensuel identifié, offrant le meilleur compromis entre actualité et cohérence avec l'historique.

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.62u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle régulier clair détecté. Intervalles très variables (7j à 283j) sans pattern hebdomadaire ou mensuel stable. Comportement de commande sporadique plutôt que cyclique.
- **Saisonnalité**: none
- **Tendance**: stagnant_to_slightly_decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Les 13 commandes historiques montrent des intervalles irréguliers (7j, 18j, 67j, 283j) sans périodicité stable. Aucun 'jour habituel' clair: lundi(4), mardi(3), vendredi(3), jeudi(2), mercredi(1). Les données récentes (3 mois) montrent un léger tilt vers le jeudi (2/3 commandes), mais pas de cycle fixe.

FILTRAGE OUTLIERS: Toutes les quantités sont soit 1u (5x) soit 2u (8x). Pas d'outlier détectable - la dispersion est uniquement due au volume très bas. Pas de 'pic' isolé à ignorer.

PONDÉRATION TEMPORELLE: Comportement très sporadique. Dernière commande: 1u (2025-09-10). Les 3 dernières: [1u, 1u, 2u] = moyenne 1.33u. Historique total: moyenne 1.62u. Pondération 70% récent / 30% historique donne 1.465u.

OPTIMISATION MAPE: Calcul d'erreur attendue - Prédire 1u donne MAPE attendu de 16.7% (pondéré récent) versus 66.7% pour 2u. Le risque est moindre sur 1u qui est la dernière valeur et la tendance claire des 2/3 dernières commandes. Aucune preuve d'arrêt du produit (dernière commande il y a 1 mois).

DÉCISION: 1u minimise le MAPE tout en respectant le volume récent et l'aversion au surstock spécifiée.

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2.1666666666666665u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: mensuelle_irreguliere
- **Saisonnalité**: none
- **Tendance**: stable_downwards
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**1. Analyse Rythmique :**
- Pas de cycle hebdomadaire strict identifié sur N-1 (intervalles variables 10-38 jours, moyenne ~24j)
- **Pattern récent émergent** : 2 commandes consécutives le jeudi (17/07 et 24/07) puis un mercredi (10/09)
- Intervalle 29j entre 09/09/24 et 08/10/24 coïncide avec l'intervalle 29j entre 10/09/25 et 09/10/25 → **cycle mensuel plausible**
- **Le jeudi est maintenant dans le cycle** (utilisé en juillet 2025), donc pas de règle hors cycle à appliquer

**2. Filtrage des Outliers :**
- Données N-1 : moyenne 2.17u (étendue 1-3u, sans valeur extrême)
- Données récentes : [2u, 2u, **1u**] → **le 1u du 10/09 est atypique**, probable commande d'appoint ou correction
- Les 2 commandes de juillet à 2u sur jeudi consécutif représentent mieux le pattern actuel

**3. Synthèse & Décision :**
- **Tendance récente** : stabilité autour de 2u (2/3 des points), pas de rupture confirmée
- **Contexte saisonnier N-1** : octobre 2024 = 3u (mardi), mais le jeudi est le nouveau jour potentiel
- **Pondération** : Priorité à la consistance du jeudi récent (2u) vs point isolé à 1u
- **Risque MAPE** : Prédire 1u serait aberrant si retour au pattern 2u; prédire 3u ignorerait la baisse récente
- **Conclusion** : **2u** est la valeur médiane minimisant l'erreur, cohérente avec le pattern jeudi émergent et la moyenne historique

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aperiodic with occasional weekly cluster
- **Saisonnalité**: none
- **Tendance**: stable with high variability
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
The prediction date (Thursday) aligns with a recently attempted but inconsistent ordering pattern. In July 2025, two orders occurred on consecutive Thursdays (17th and 24th) with quantities 3u and 2u respectively, establishing a 7-day interval pattern that was subsequently interrupted by a 47-day gap until the September 10 order. This interruption, combined with a day shift to Wednesday and quantity reduction to 1u, suggests either: (a) a temporary cycle break (summer season) with potential resumption, or (b) a behavioral change toward lower/less frequent orders. Given B2B agro-food clients typically resume regular cycles after seasonal breaks, and considering the Thursday pattern was the most recent stable interval before the gap, the most probable scenario is a return to Thursday ordering. Historical analysis shows 2u is the dominant value across all data (8/14 orders), representing the statistical mode and the quantity from the last Thursday order. While the recent downward trend (3→2→1u) suggests caution, the one-time 1u order on a different weekday (Wednesday) may reflect exceptional circumstances rather than a new baseline. For minimal MAPE with such limited data, selecting the mode (2u) from the most relevant subset (Thursday orders) provides the highest probability outcome while avoiding overreaction to a single data point. Zero is prohibited per guidelines, and predicting the next probable order rather than forcing a Thursday-specific value would still yield 2u based on mode analysis.

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuelle irrégulière
- **Saisonnalité**: none
- **Tendance**: Baisse de volume de 2u à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**
- Pattern N-1 (2023-2024) : Commandes très éparses (intervalles 10-49 jours) sans jour fixe (5× vendredi, 4× mardi, 3× lundi)
- Pattern récent (2025) : Rupture majeure de 10 mois, puis reprise avec 3 commandes = [1u le 17/07 (jeu), 1u le 24/07 (jeu), 1u le 10/09 (mer)]
- Intervalle moyen N-1 : ~28 jours | Intervalle actuel : 7j puis 48j
- Date prédiction (09/10) : 29j après dernière commande → intervalle cohérent avec historique

**FILTRAGE OUTLIERS**
- Événement majeur : Produit "inactif" de sept 2024 à juillet 2025 (311j sans commande)
- Nouveau volume stable à 1u (3x consécutives) vs ancienne baseline à 2u (12x consécutives)
- Le passage 2u→1u n'est pas un outlier mais une rupture de tendance structurelle après reprise

**SYNTHESE & DÉCISION**
1. **Jour de commande** : Le jeudi est un jour de commande récent (2/3). Même si le dernier cycle était mercredi, l'intervalle de 29j rend un jeudi plausible.
2. **Volume** : Les 3 dernières commandes (post-reprise) sont stables à **1u**. La règle "dernière valeur cohérente avec tendance" s'applique.
3. **Contexte B2B** : Un produit relancé conserve son nouveau rythme. Prédire 2u serait surpondérer l'ancienne baseline obsolète.

**Règle spéciale jour hors cycle** : Non applicable car le jeudi EST un jour de commande récent (et 09/10 est un intervalle cohérent). La prochaine commande probable est bien pour cette date.

Décision : Privilégier la **tendance récente** (1u) sur l'historique obsolète (2u). La stabilité des 3 dernières commandes et l'intervalle plausible justifient 1 unité.

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sparse orders with emerging Thursday trend
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique épars montrant une baisse de volume récente (2u→1u) avec migration vers le jeudi comme nouveau jour de commande. La quantité la plus probable est celle de la dernière commande (1u), cohérente avec la tendance actuelle.

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: 7 days
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse révèle un pattern clé : les 2 dernières commandes (juillet 2025) sont exactement espacées de 7 jours et tombent un jeudi (2025-07-17 et 2025-07-24). Bien que l'historique N-1 montre un rythme irrégulier mensuel sur différents jours, le client a récemment basculé vers un cycle hebdomadaire fixe le jeudi. La quantité majoritaire historique est 2u (11/13 commandes). La dernière valeur du 2025-07-24 est 2u, cohérente avec cette tendance stable. Le pic à 3u du 2025-07-17 apparaît comme une variation ponctuelle autour de la baseline de 2u. Comme la date de prédiction (2025-10-09) est un jeudi et correspond au nouveau jour de cycle, la prochaine commande suivra ce pattern hebdomadaire avec la quantité la plus probable.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 2u
- 2025-07-24 14:00:56: 3u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 3u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 4u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 3u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 3u
- 2024-02-02 09:19:36: 3u
- 2024-01-22 12:29:19: 1u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 1u
- 2024-08-02 06:18:07: 1u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 1u
- 2024-05-21 08:51:32: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2023-12-15 07:53:16: 1u
- 2023-11-28 08:55:15: 2u
- 2023-10-30 07:15:45: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-11-28 08:55:15: 2u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 1u
- 2025-07-17 06:58:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-08-02 06:18:07: 1u
- 2024-07-15 06:44:53: 2u
- 2024-06-11 07:33:02: 2u
- 2024-04-15 06:28:42: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 1u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 1u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 1u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2023-12-15 07:53:16: 2u
- 2023-11-28 08:55:15: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u
- 2023-11-28 08:55:15: 1u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**✅ Quantité LLM**: 2u (confidence: high)
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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Stock prédit: 0.2u (8j restants) → prédit 2u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: -0.3u (-25j restants) → prédit 1u mais non commandé |


---

## False Negatives (3)

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
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock suffisant: 2.5u (45j restants > seuil 30j) |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock suffisant: 2.7u (60j restants > seuil 30j) |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock suffisant: 1.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T08:46:31.084Z*
