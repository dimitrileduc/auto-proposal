# Rapport Backtest - Client Wandercoop

## Contexte

- **Client** : Wandercoop (ID: 60579)
- **Commande réelle** : S39420
- **Date commande** : 2025-10-02 06:12:05
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 15
- **Tokens**: 30,615 input + 8,572 output = 39,187 total
- **Coût**: $0.2204 (~22.04¢)
- **Coût par produit LLM**: $0.0147


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 18 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 71.4% | Score équilibré global |

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
| **wMAPE** | 52.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 54.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | 4 | 3.0 | 75.0% | ✅ partial | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement variable (8-21 jours entre commandes). Pas de jour fixe identifiable (mer/ven alternés). Tendance récente : accélération (21j d'écart, puis 32j, puis 21j entre les 3 dernières).
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité. Quantités oscillent entre 1-3u sans tendance claire à la hausse ou baisse. Moyenne récente (3 mois) : 1.8u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse rythmique** : Historique court (5 commandes sur 3 mois) avec pattern irrégulier. Intervalles variables : 2 jours (16-18 juil), 21 jours (18 juil-8 août), 26 jours (8 août-3 sept), 21 jours (3-24 sept). Dernier achat le 24/09 (mercredi), soit 8 jours avant la date de prédiction (02/10). Le client semble commander par petits volumes fréquents sans jour fixe.

**Filtrage outliers** : La commande de 3u (03/09) sort légèrement du pattern habituel (1-2u), mais reste dans un écart acceptable pour un produit premium bio en phase de lancement/test marché.

**Synthèse décision** : Absence de données N-1 = pas de référence saisonnière. Moyenne 3 mois = 1.8u. Les 3 dernières commandes montrent 1u, 3u, 2u → trend stable autour de 2u. Produit premium bio à rotation modérée typique du segment. Vu le délai de 8 jours depuis dernière commande et le rythme moyen de ~20-25j, le client est dans sa fenêtre normale de réapprovisionnement. 

**Prédiction** : 2 unités (valeur modale observée, équilibre entre les extrêmes 1u et 3u, cohérente avec la demande de fond). Confiance moyenne car historique court mais pattern cohérent avec un produit spécialisé B2B.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle variable (21j → 26j → 21j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse récente vers 2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Les commandes montrent des intervalles irréguliers (16/07→08/08: 23j, 08/08→03/09: 26j, 03/09→24/09: 21j). Aucun pattern hebdomadaire fixe détecté (mer-ven-mer-mer). Le client semble commander environ tous les 20-26 jours. La date de prédiction (02/10) est à 8 jours de la dernière commande (24/09), donc hors du cycle habituel.

**Filtrage outliers:** La commande de 3u du 08/08 est légèrement supérieure à la norme établie (1-2u). Les deux dernières commandes stabilisées à 2u suggèrent un retour à la normale.

**Synthèse:** Sans données N-1, impossible d'évaluer la saisonnalité. La tendance récente montre une stabilisation à 2u (dernières commandes). Cependant, vu que nous sommes seulement 8 jours après la dernière commande du 24/09 et que le pattern habituel est ~23j entre commandes, la probabilité d'une commande le 02/10 est faible, MAIS si commande il y a, elle devrait suivre le pattern récent de 2u. 

**Décision:** 2u correspond à la demande de fond observée sur les 2 dernières commandes et représente la quantité la plus probable si le client commande à cette date.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement croissant (37j → 26j → 21j). Pas de jour fixe identifié (ven./mer. alternance)
- **Saisonnalité**: none
- **Tendance**: Stable avec quantités faibles (1u dominant, 1 pic à 2u)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Les 4 commandes sur 3 mois montrent un pattern irrégulier avec intervalles variables (18 juillet → 8 août = 21j, → 3 sept = 26j, → 24 sept = 21j). Pas de jour fixe hebdomadaire détectable. Depuis la dernière commande (24/09), 8 jours se sont écoulés au 02/10, ce qui reste dans la fenêtre normale du cycle.

**Filtrage outliers**: La commande de 2u (3 sept) est un doublement ponctuel mais reste faible en volume absolu. Les 3 autres commandes à 1u (75% des cas) constituent la norme.

**Tendance**: Demande ultra-stable autour de 1 unité. Produit premium/bio de niche avec rotation lente typique du segment. Pas de saisonnalité N-1 disponible.

**Décision**: La baseline est clairement 1u (mode statistique). Aucun élément ne justifie d'anticiper un doublement : pas de pattern saisonnier octobre, pas de rattrapage nécessaire (dernière commande récente). Confidence medium car historique court (4 points) mais comportement très régulier en quantité.

</details>


<details>
<summary><strong>4. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (2j, 23j, 47j, ~90j)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive : 1u → 2u (+100%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse pas à pas :**

1. **RYTHMIQUE** : Historique très court (4 commandes sur 3 mois) avec intervalles très irréguliers : 2 jours entre 16/07 et 18/07, puis 23 jours jusqu'au 08/08, puis 47 jours jusqu'au 24/09. Aucun pattern hebdomadaire ou mensuel stable détectable. Le produit semble en phase de lancement ou de faible rotation.

2. **TENDANCE** : Évolution claire visible malgré le faible historique :
   - Juillet : 1u puis 1u (demande initiale faible)
   - Août : 2u (doublement)
   - Septembre : 2u (confirmation du nouveau niveau)
   La tendance montre une hausse de +100% entre juillet et août/septembre.

3. **OUTLIERS** : Aucune quantité ne sort de l'ordinaire. Pas d'événements promotionnels détectables.

4. **SAISONNALITÉ N-1** : Aucune donnée disponible pour évaluer un pattern saisonnier. Impact = none.

5. **DÉCISION** : 
   - Baseline théorique = moyenne pondérée avec poids fort sur les 2 dernières commandes (2u + 2u) / 2 = 2u
   - Les deux dernières commandes (août et septembre) montrent une stabilisation à 2u
   - Prédiction pour octobre (8 jours après dernière commande) : maintien à **2 unités**
   
La confiance est moyenne car l'historique est limité, mais la tendance récente vers 2u est cohérente sur les 2 derniers mois.

</details>


<details>
<summary><strong>5. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (8-21-26-21 jours) mais globalement mensuel
- **Saisonnalité**: none
- **Tendance**: Stable - Demande constante à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 5 dernières commandes montrent des intervalles de 8j (16-24 juil), 21j (24 juil-08 août), 26j (08 août-03 sept), et 21j (03-24 sept). La dernière commande date du 24/09 (mercredi), soit 8 jours avant la date de prédiction (02/10). Le pattern est irrégulier mais gravite autour d'une fréquence mensuelle basse.

**COMPORTEMENT CLIENT**: Toutes les commandes sont strictement de 1 unité. Ce produit bio premium semble être commandé par un client avec une demande très faible et régulière, probablement pour tester le marché ou satisfaire une niche clientèle spécifique. Aucun outlier détecté.

**SAISONNALITÉ**: Pas de données N-1 pour évaluer la saisonnalité. Les données récentes (juil-sept) ne montrent aucune variation saisonnière.

**TENDANCE**: Parfaitement stable. 100% des commandes = 1 unité. Aucun signe d'accélération ou ralentissement.

**DÉCISION**: La probabilité d'une commande de 1 unité est maximale si le client commande à cette date. La régularité parfaite des quantités (toujours 1u) donne une très forte confiance. Le délai de 8 jours depuis la dernière commande reste dans la fourchette observée (8-26j).

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (2j, 21j, 26j). Pas de pattern hebdomadaire ou mensuel clair
- **Saisonnalité**: none
- **Tendance**: Stable - commandes de 1-2 unités sur 3 mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: L'historique montre 4 commandes sur ~2.5 mois (16 juil - 3 sept) avec des intervalles très irréguliers: 2 jours (16→18 juil), 21 jours (18 juil→8 août), 26 jours (8 août→3 sept). Aucun pattern jour fixe détectable (mer/ven alternés). Fréquence moyenne ~20 jours entre commandes.

**TENDANCE QUANTITATIVE**: Les quantités oscillent entre 1u et 2u. Sur les 4 dernières commandes: 1u, 2u, 2u, 2u. La dernière commande du 3 sept (il y a 29 jours) était de 2u. Pas d'outliers détectés - ce sont des volumes normaux pour ce produit de niche bio.

**SAISONNALITÉ**: Aucune donnée N-1 disponible. Impossible d'identifier un effet saisonnier octobre. Le produit (barre énergétique bio) n'a pas de saisonnalité forte évidente.

**DÉCISION**: 
- Baseline théorique = moyenne des 3 dernières commandes = (2+2+2)/3 = 2u (en excluant la plus ancienne de 1u qui semble atypique basse)
- Le rythme de ~20-26 jours entre commandes suggère qu'une commande est attendue fin septembre/début octobre
- Date de prédiction (2 oct) = 29 jours après dernière commande → dans la fenêtre attendue
- Pattern récent montre stabilité à 2u

**PRÉDICTION**: 2 unités - correspond au volume modal récent, sans surgonfler car produit de niche avec faibles volumes réguliers.

</details>


<details>
<summary><strong>7. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (23-26-29 jours entre commandes, moyenne ~26j)
- **Saisonnalité**: none
- **Tendance**: Stable - Commandes constantes à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 3 dernières commandes montrent un pattern irrégulier avec des intervalles de 23 jours (16 juil→8 août), 26 jours (8 août→3 sept), et nous sommes maintenant à 29 jours depuis la dernière commande (3 sept→2 oct). Malgré la variabilité des intervalles, le cycle moyen est d'environ 26 jours, suggérant une commande mensuelle approximative.

**FILTRAGE OUTLIERS**: Aucun pic détecté. Les 3 commandes récentes sont toutes de 1 unité, indiquant une demande très stable et prévisible. Pas de données N-1 pour confirmer des patterns saisonniers.

**SYNTHÈSE**: 
- Produit de niche (barre chocolat bio) à rotation faible
- Quantités systématiquement minimales (1u) = commande de réassort minimal
- Intervalle depuis dernière commande (29j) cohérent avec le pattern mensuel observé
- Aucun élément suggérant une rupture de tendance ou un besoin accru

**DÉCISION**: La baseline théorique est de 1 unité. Sans saisonnalité identifiable, sans tendance haussière et avec un historique ultra-stable, la prédiction la plus probable reste 1 unité. Confidence "medium" car l'historique est court (3 mois) mais parfaitement constant.

</details>


<details>
<summary><strong>8. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 2 jours à 47 jours, pas de pattern hebdomadaire ou mensuel détectable
- **Saisonnalité**: none
- **Tendance**: Stable à très faible demande - 1u par commande sur les 3 dernières occurrences
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les 3 dernières commandes montrent des intervalles très irréguliers:
- 16 juillet → 18 juillet: 2 jours
- 18 juillet → 3 septembre: 47 jours
- 3 septembre → 2 octobre (prédiction): 29 jours

Aucun pattern hebdomadaire fixe n'est identifiable. Les jours varient (mercredi, vendredi, mercredi). Pas de cycle mensuel régulier non plus.

**VOLUME ET TENDANCE:**
Toutes les commandes sont de 1 unité exactement. C'est une demande minimale et très stable en quantité, même si irrégulière en fréquence. Produit de niche (barre énergétique bio méditerranéenne) qui semble avoir une rotation très lente.

**SAISONNALITÉ:**
Aucune donnée N-1 disponible pour évaluer un effet saisonnier. Les commandes récentes couvrent juillet-septembre sans variation de quantité.

**DÉCISION:**
Sans pattern temporel fiable et avec seulement 3 points de données (tous à 1u), la prédiction la plus probable est 1 unité. L'absence de données N-1 et le faible volume d'historique limitent la confiance, mais la consistance parfaite des quantités passées (100% à 1u) supporte cette prédiction. En B2B agroalimentaire, ce type de produit bio premium a souvent une demande faible mais régulière en quantité unitaire.

</details>


<details>
<summary><strong>9. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - seulement 2 commandes sur 3 mois (écart de 26 jours puis 56 jours)
- **Saisonnalité**: none
- **Tendance**: Stable mais très faible volume (1-2u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Historique extrêmement limité avec seulement 2 commandes (08/08 et 03/09). Intervalles irréguliers: 26 jours entre les 2 commandes, puis 29 jours jusqu'à la date de prédiction (02/10). Aucun pattern hebdomadaire ou mensuel clair détectable. SAISONNALITÉ: Absence totale de données N-1, donc impossible d'identifier un effet saisonnier. Impact: none. TENDANCE: Les 2 commandes montrent des volumes très faibles (1u puis 2u). La dernière commande (2u) est la plus récente et légèrement supérieure. OUTLIERS: Aucun événement exceptionnel identifiable dans ce faible échantillon. DÉCISION: Avec un historique aussi limité, je privilégie la donnée la plus récente (2u du 03/09) comme meilleur prédicteur. Le produit semble être en phase de test/lancement avec demande sporadique. Baseline théorique = moyenne (1+2)/2 = 1.5, mais je recommande 2u en alignement avec le dernier ordre observé. Confiance faible en raison du manque de données historiques.

</details>


<details>
<summary><strong>10. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - seulement 2 commandes récentes (16 et 18 juillet) avec 2 jours d'écart. Impossible d'établir un pattern fiable.
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - historique trop court (2 commandes seulement sur 3 mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE : Données extrêmement limitées**

Seulement 2 commandes dans l'historique récent (16 et 18 juillet 2025), aucune donnée N-1. Cela représente un défi majeur pour établir une prédiction fiable.

**ANALYSE RYTHMIQUE :**
- 2 commandes espacées de 2 jours (mercredi puis vendredi)
- Depuis le 18/07, aucune commande pendant 2,5 mois jusqu'au 02/10
- Cette absence prolongée suggère soit un arrêt temporaire, soit une commande ponctuelle en juillet

**ANALYSE QUANTITATIVE :**
- Commande 1 : 1 unité (16/07)
- Commande 2 : 2 unités (18/07)
- Moyenne : 1,5 unités
- Pas d'outlier détectable avec si peu de données

**PROBLÉMATIQUE MAJEURE :**
Le délai de 76 jours sans commande après juillet suggère que :
1. Le produit n'est peut-être plus actif dans l'assortiment
2. Les commandes de juillet étaient exceptionnelles (test produit, commande ponctuelle)
3. Le rythme réel n'est pas encore établi

**DÉCISION :**
Face à cette incertitude extrême, je recommande **1 unité** comme quantité minimale de sécurité, basée sur la commande la plus basse observée. Cette approche prudente évite le sur-stock pour un produit dont le pattern de demande n'est pas établi.

**Confiance : LOW** - Prédiction basée sur données insuffisantes pour garantir précision.

</details>




---

## False Positives (8)

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.8u (28j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.7u (17j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.6u (10j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 1.3u (12j restants) → prédit 2u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.3u (-15j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T09:05:06.981Z*
