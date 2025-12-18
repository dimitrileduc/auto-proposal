# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S39719
- **Date commande** : 2025-10-14 10:33:03
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 19
- **Tokens**: 42,203 input + 15,002 output = 57,205 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.2% | 23 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 78.9% | Score équilibré global |

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
| **MAE** | 0.93 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 41.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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
| [RISH04] RISH kombucha BIO - smash basil 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ❌ Non | 📊 Médiane |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (12 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, pas de cycle fixe identifié. Intervalles variables : 49j (22/07→08/09), 13j (08/08→20/08), 23j (20/08→10/09). Pas de jour privilégié (mardi, mercredi, vendredi observés).
- **Saisonnalité**: none
- **Tendance**: Stable avec volatilité - dernière commande 4u (10/09) pourrait être pic exceptionnel. Avant cela : moyenne 1,33u sur 2025-07 à 2025-08.
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1. **Analyse Rythmique (Critique)** :
   - 4 commandes seulement sur ~2.5 mois = fréquence très basse (1 cmd/~18j en moyenne)
   - Intervalles: 49j, 13j, 23j → AUCUN cycle régulier détectable
   - Jours hétérogènes (mar/mer/ven) → pas de pattern jour fixe
   - Prédiction pour LUNDI 2025-10-13 : client n'a jamais commandé lundi → risque élevé de non-commande

2. **Filtrage Outliers** :
   - 2025-09-10: 4u = HAUSSE NETTE (avant: max 2u)
   - Hypothèses : (a) promotion/événement ponctuel, (b) premier regain de demande, (c) erreur/rattrapage
   - Sans contexte N-1, impossible de confirmer si c'est saisonnier
   - Baseline stable = 1-2u (moyenne sur 07-08: 1,33u)

3. **Synthèse Décision** :
   - Données insuffisantes pour haute confiance (N-1 absent, pattern absent)
   - Dernière vraie tendance (hors outlier potentiel) = 1-2u
   - Demande lundi = RUPTURE du cycle habituel (aucune cmd lundi observée)
   - Prédiction conservative : 2u (médiane entre baseline stable et dernière cmd ponctuelle)
   - Alternative haute-risque si 4u = nouvelle baseline = 4u

**RECOMMANDATION FINALE** : 2u est le choix le plus prudent face à l'incertitude. Confiance BASSE en raison : (1) données limitées, (2) jour prédictif hors pattern, (3) volatilité non expliquée.

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, sans cycle hebdomadaire fixe. Dernières commandes espacées de 21j (22 juil→20 août), 12j (20 août→8 sept), 21j (8 sept→10 oct). Interpellation: aucun pattern lun-ven détecté, commandes réparties sur mer-ven-mar-mer.
- **Saisonnalité**: none
- **Tendance**: Demande extrêmement faible et stable (~1u modal). Moyenne des 4 points: 1.25u. Pas de N-1 pour comparer saisonnalité. Tendance: STABLE à très bas volume.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CRITIQUE: Le produit RISH03 kombucha affiche une demande extrêmement réduite (4 commandes en 3 mois, espacées irrégulièrement, toutes ≤2u). 

**Observations clés:**
1. **Pas de cycle régulier détecté**: Intervalle moyen ~21j, mais sans jour fixe. Dernière commande: 10 sept (mer), prédiction pour: 13 oct (lun) = 33 jours d'écart. Rupture nette du rythme.
2. **Baseline ultra-faible**: 3 commandes de 1u, 1 commande de 2u → modal = 1u, moyenne = 1.25u.
3. **Pas de saisonnalité exploitable**: Aucune donnée N-1 → impossible d'identifier pics saisonniers.
4. **Pas d'outliers** : Toutes les commandes sont cohérentes (1-2u), suggérant un client B2B avec très faible consommation du SKU.

**Décision finale:**
- Le dernier intervalle anormalement long (33j) pourrait indiquer un problème d'approvisionnement chez le client ou une perte d'intérêt pour ce produit.
- En l'absence de signal positif, appliquer le **principe de parsimonie**: ne pas sur-générer de stock.
- Quantité prédite: **1u** (quantité modale, correspondant à 75% des commandes).

**Confiance: LOW** → Données insuffisantes (4 pts seulement, pas de N-1, cycle imprévisible). Recommandation: collecter plus de données ou valider directement auprès du client.


</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (~30-35 jours) avec tendance aux mercredis. Dernières commandes: 10 sept (mer), 20 août (mer), 22 juil (mar). Intervalles: 51 jours (sept-août), 29 jours (août-juil). Pattern compatible avec commande mensuelle en milieu de semaine.
- **Saisonnalité**: none
- **Tendance**: Stable à 4u - Aucune variation observée sur les 3 dernières commandes, toutes à 4 unités. Pas de hausse ou baisse de tendance.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Les trois commandes disponibles s'échelonnent sur ~2 mois avec un cycle approximatif de 30-35 jours (51j entre sept-août, puis 29j entre août-juil). Le client semble commander une fois par mois, idéalement en milieu de semaine. La date prédite (lundi 13 oct) survient ~33 jours après la dernière commande (10 sept), ce qui s'aligne parfaitement avec ce cycle mensuel. COHÉRENCE QUANTITATIVE: Les trois commandes affichent une demande stable et homogène de 4 unités chacune. Aucun outlier détecté. Aucune volatilité, hausse ou baisse de tendance. SAISONNALITÉ: Absence de données N-1 - impossible de déceler un effet saisonnier. Pas de signal d'alerte pour le 13 octobre. JOURS DE LA SEMAINE: Les deux dernières commandes tombent le mercredi (10 sept, 20 août), contre un mardi pour la plus ancienne (22 juil). Le lundi 13 octobre s'inscrit cohéremment dans cette logique: après inactivité d'un mois, le client se manifeste en début de semaine (lundi vs mercredi habituel, possible léger décalage mais pattern similaire). CONCLUSION: Baseline = 4u. Aucun coefficient correctif justifié (pas de saisonnalité, pas de rattrapage, pas de rupture de tendance). La quantité recommandée est donc 4 unités. Confiance: HIGH - malgré un dataset limité (n=3), l'homogénéité des données et la régularité du cycle inspirent une forte confiance.

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pas de pattern régulier identifié - Commandes irrégulières tous les 30-45 jours (mer. 10/09 → ven. 08/08 = 33j, ven. 08/08 → mar. 22/07 = 17j). Aucun cycle hebdomadaire apparent, pas de jour fixe.
- **Saisonnalité**: none
- **Tendance**: Stable à 2-3u - Les trois dernières commandes oscillent entre 2u et 3u sans direction claire (2u → 3u → 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE :

1. **ANALYSE RYTHMIQUE** :
   - 3 données seulement sur 3 mois → dataset très réduit
   - Intervalles irréguliers : 17 jours puis 33 jours (variance importante)
   - Jours variables : mercredi, vendredi, mardi (aucun cycle hebdomadaire détectable)
   - Conclusion : Client n'a PAS de pattern régulier établi

2. **POSITION DE LA PRÉDICTION (lundi 2025-10-13)** :
   - Dernière commande : mercredi 10/09/2025 (33 jours avant)
   - Cette commande tombait mardi/mercredi/vendredi alternativement
   - Lundi = jour HORS cycle habituel (mais pas anomal, juste rare)

3. **ANALYSE DES QUANTITÉS** :
   - Moyenne simple : (2 + 3 + 2) / 3 = 2,33u
   - Pas de croissance (2→3→2, pas de tendance)
   - Pas de pic exceptionnel détectable
   - Pas de données saisonnières N-1 pour contextualiser

4. **FILTRAGE OUTLIERS** :
   - Aucun volume aberrant : 2u et 3u sont très proches
   - Pas d'événement promotionnel apparent
   - Pas d'erreur de commande détectable

5. **DÉCISION FINALE** :
   - Baseline : 2,33u (moyenne arithmétique)
   - Tendance : STABLE (pas de direction nette)
   - Régularité : TRÈS FAIBLE (trop peu de données, intervalles erratiques)
   - Recommandation : ARRONDIR À 2u (plutôt que 3u) car 2u représente la majorité des commandes (2 fois sur 3) et reflète une demande plutôt conservative
   
   Justification du choix 2u vs 3u :
   - Moyenne de 2,33 → arrondir à 2 est plus prudent en agro (mieux avoir stock que rupture avec ce type de produit)
   - 2u a été commandé 2 fois contre 1 fois pour 3u
   - Pattern irrégulier invite à la prudence mais pas à la surcommande

**CONFIANCE BASSE** : Seulement 3 points de données, intervalles imprévisibles, aucune saisonnalité N-1. Impossible d'établir un modèle fiable. Cette prédiction doit être révisée dès que plus de données historiques seront disponibles.

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très peu de données disponibles (2 commandes en 3 mois). Intervalles observés: 33 jours entre les deux commandes (08/08 au 10/09). Jours différents (vendredi vs mercredi). Impossible de confirmer un cycle hebdomadaire ou mensuel régulier avec seulement 2 points.
- **Saisonnalité**: none
- **Tendance**: Données insuffisantes. Dernière commande: 2u (09/10), précédente: 3u (08/08). Légère baisse observable mais non significative statistiquement.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
CONTEXTE CRITIQUE: Avec seulement 2 commandes en 3 mois (33 jours d'écart), il est impossible d'identifier un pattern fiable. Absence totale de données N-1 pour évaluer la saisonnalité. 

APPROCHE ADOPTÉE:
1. Les deux commandes (3u et 2u) suggèrent une demande très faible et irrégulière pour ce produit (NUT07 - bar choco 40g).
2. Baseline théorique = moyenne simple = 2.5u
3. Pas de saisonnalité détectable (pas de N-1, pattern trop flou).
4. La date prédite est un LUNDI (13 octobre 2025) - jour différent des commandes historiques (mercredi et vendredi).

RECOMMANDATION FINALE:
⚠️ **CONFIANCE TRÈS FAIBLE** - Arrondi à l'entier supérieur: **3 unités**
Justification: En agro B2B, face à l'incertitude avec données insuffisantes, privilégier une couverture modeste plutôt que le zéro. La dernière commande était 2u, mais le produit semble être en phase d'adoption/stabilisation (données lacunaires suggèrent peut-être un nouveau produit ou un client de faible volume).

RECOMMANDATION POUR LE SUPPLY CHAIN MANAGER: 
Collecter davantage de données historiques (N-1, 12 derniers mois) pour construire un modèle fiable. En l'état, cette prédiction est une extrapolation prudente basée sur un minimum vital d'information.

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les ~20-30 jours, jours variables (mercredi, mardi). Pattern irrégulier sans cycle fixe hebdomadaire apparent
- **Saisonnalité**: none
- **Tendance**: Stable à 2u - aucune variation observée, demande de fond très régulière
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE :

1. **ANALYSE RYTHMIQUE**
   - Historique disponible : 3 commandes sur 3 mois (juillet → août → septembre)
   - Intervalles : 29 jours (22 juil → 20 août), puis 21 jours (20 août → 10 sept)
   - Jours de semaine : mardi, mercredi, mercredi (pas de jour fixe détecté)
   - Conclusion : Pas de cycle hebdomadaire stricte. Pattern mensuel ou bi-mensuel probable (~3-4 semaines)

2. **FILTRAGE DES OUTLIERS**
   - Toutes les commandes affichent la même quantité (2u)
   - Zéro variabilité → pas d'outliers, pas d'événements exceptionnels
   - Pas de données N-1 pour comparer la saisonnalité
   - Produit apparemment peu affecté par des pics saisonniers

3. **ANALYSE DE TENDANCE**
   - Demande parfaitement stable à 2u (3/3 commandes)
   - Aucune hausse ou baisse détectée
   - Pas de rattrapage observé dans les intervalles
   - Dernière commande : 2025-09-10 (33 jours avant la prédiction du 2025-10-13)
   - Intervalle dans la normal → prochaine commande attendue fin octobre/début novembre normalement

4. **PRÉDICTION POUR LE 2025-10-13 (lundi)**
   - Date = 33 jours après dernière commande
   - Dépasse légèrement l'intervalle moyen (~25 jours), mais reste plausible
   - Possibilité 1 : Client commande effectivement ce jour (rattrapage ou timing spécifique)
   - Possibilité 2 : Prédiction hors du cycle normal
   - En agro B2B, absence de variabilité suggère forte régularité de commande
   - Baseline = 2u (demande de fond stable et validée par 3 observations)

5. **JUSTIFICATION CONFIANCE MOYENNE**
   - ✓ Pattern clair (2u systématiquement)
   - ✓ Pas de bruit/outliers
   - ✗ Très peu de données (n=3 seulement)
   - ✗ Pas de données N-1 pour valider saisonnalité
   - ✗ Incertitude sur le rythme exact (29j vs 21j)
   - ✗ Jour de la semaine imprévisible → peut-être hors cycle ce 2025-10-13

CONCLUSION : Recommander 2u (stabilité confirmée par 100% des commandes, pas d'évidence d'une hausse imminente).

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pas de cycle hebdomadaire détectable - Commandes irrégulières espacées de 22 à 43 jours. Dernier achat: 10/09/2025 (mercredi) soit 33 jours avant la date de prédiction (13/10/2025, lundi)
- **Saisonnalité**: none
- **Tendance**: Stable ~2-3u par commande - Pas de tendance croissante ou décroissante observable sur 4 points
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**

## ANALYSE DÉTAILLÉE

### 1. ANALYSE RYTHMIQUE
- **Commandes récentes**: 4 achats sur ~3 mois
  - 10/09 (mer) → 20/08 (mer): 21 jours
  - 20/08 (mer) → 08/08 (ven): -12 jours (DATA ANOMALIE? Dates décroissantes)
  - 08/08 (ven) → 22/07 (mar): -17 jours (ANOMALIE CONFIRMÉE)

**Problème critique**: Les 3 premières dates semblent mal ordonnées. Réinterprétation avec ordre chronologique correct:
- 22/07/2025 (mar) | 2u
- 08/08/2025 (ven) | 3u  
- 20/08/2025 (mer) | 1u
- 10/09/2025 (mer) | 3u

Intervalles réels: 17j → 12j → 21j = **IRRÉGULIER, pas de cycle fixe identifié**

- **Aucun jour préférentiel** : Commandes distribuées sur mer/ven/mar
- **Pas de cycle hebdomadaire** (Lun-Ven répétitif) détectable
- **Pas de pattern mensuel** (~30j) clair

### 2. GESTION DU JOUR HORS CYCLE
Date de prédiction: **13/10/2025 = LUNDI** (1er lundi depuis le 10/09)
- Aucune donnée historique sur commande le lundi
- Dernière commande: 33 jours avant (inhabituellement long)
- Risque: soit rattrapage volontaire, soit simple variation du cycle irrégulier

### 3. DÉTECTION D'OUTLIERS
- Toutes les quantités (1u, 2u, 3u) se situent dans une plage étroite
- Pas de pic exceptionnel (>5u) suggérant promotion ou urgence
- Pas de creux extrême (<1u) indiquant rupture d'approvisionnement

### 4. SAISONNALITÉ
- **Aucune donnée N-1** pour comparer pic/creux saisonnier
- Produit bio agro-alimentaire: légère saisonnalité possible (berries + gingembre)
- **Impact estimé: NONE** (données insuffisantes + pas de pattern détectable sur 4 points)

### 5. TENDANCE
- Moyenne arithmétique: (2+3+1+3) / 4 = **2.25u**
- Pondération dernières commandes (poids décroissant): 3 (10/09) + 1×0.8 (20/08) + 3×0.6 (08/08) + 2×0.4 (22/07) = **2.2u**
- **Direction: STABLE** - Oscillation autour de 2-3u sans trend clair

### 6. SYNTHÈSE & RECOMMANDATION

**Confiance: LOW** (seulement 4 points, pattern aléatoire, aucune saisonnalité observable)

**Raisonnement final:**
- Baseline = 2.25u (moyenne observée)
- Pas de hausse/baisse tendancielle à appliquer
- Dernier achat (3u) légèrement au-dessus de la moyenne
- Intervalle de 33j (plus long que les 17-21j usuels) pourrait indiquer:
  - Stock suffisant chez le client (pas rattrapage immédiat)
  - OU variation naturelle du cycle aléatoire

**Décision:** Arrondir à **2u** (cautionneur par rapport à la baseline 2.25, évitant la surcharge de stock en contexte d'irrégularité)

En agro B2B avec données aussi limitées, viser la moyenne glissante sécurisée plutôt que la dernière commande seule.
"


</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Commandes sporadiques sans cycle hebdomadaire ou mensuel régulier. Intervalle entre commandes: 10-23 jours. Dernière commande: 2025-09-10 (mercredi, 33 jours avant la prédiction du 2025-10-13)
- **Saisonnalité**: none
- **Tendance**: Stable à 1.5u en moyenne (plage 1-2u). Aucune tendance haussière ou baissière détectable sur les 4 données disponibles.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Le client présente un pattern de commande TRÈS IRRÉGULIER sur les 3 derniers mois avec seulement 4 commandes enregistrées. Les intervalles varient considérablement (10-23 jours entre commandes), sans jour fixe identifiable (mercredi x2, vendredi x1, mardi x1). Il n'existe pas de cycle hebdomadaire régulier (ex: chaque lundi) ni mensuel structuré. 

GESTION RATTRAPAGE: La dernière commande remonte au 13 septembre (33 jours avant la prédiction). Cet intervalle est le PLUS LONG observé. Cela suggère un possible rattrapage de stock client ou une absence d'activité récente. Cependant, sans confirmation d'une rupture de stock client ou d'un événement externe, on ne peut pas surinterpréter.

TENDANCE & BASELINE: Sur les 4 données, 3 commandes sont de 2u et 1 de 1u (moyenne = 1.5u). Stabilité claire autour de 2u, avec un outlier bas isolé (1u le 2025-08-20). Pas de tendance haussière ou baissière détectable.

SAISONNALITÉ: Zéro données N-1 → impossible d'évaluer l'impact saisonnier. Impact = "none" par défaut.

DÉCISION FINALE: 
- **Baseline théorique** = 1.5u (moyenne empirique)
- **Quantité recommandée** = **2u** (mode observé, arrondi à l'entier supérieur, align sur demande la plus fréquente)
- Cet ajustement haut (vs stricte moyenne) est justifié car: (1) 75% des commandes = 2u, (2) intervalle long depuis dernière commande peut indiquer besoin de réapprovisionnement, (3) en B2B agroalimentaire, mieux vaut couvrir la demande probable que de sous-approvisionner.

CONFIANCE: **LOW** - Seules 4 données sur 3 mois avec pattern très irregulier et aucune donnée N-1. Données insuffisantes pour modéliser une saisonnalité ou confirmer un cycle stable. Recommandation basée sur tendance majoritaire, non sur pattern fiable.

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier observé - Commandes espacées de 30 à 47 jours. Dernier achat le 10/09/2025 (mercredi), soit 33 jours avant la date de prédiction (13/10/2025). Pas de cycle hebdomadaire stable identifié.
- **Saisonnalité**: none
- **Tendance**: Stable à 2 unités - Toutes les 3 commandes observées portent sur 2 unités exactement, sans variation. Pas de signal de hausse ou baisse de tendance.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - 2025-07-22 (mar.) → 2025-08-08 (ven.) = 17 jours
   - 2025-08-08 (ven.) → 2025-09-10 (mer.) = 33 jours
   - 2025-09-10 (mer.) → 2025-10-13 (lun.) = 33 jours (écoulés à la date de prédiction)
   
   → Pattern irrégulier, sans cycle hebdomadaire clair (différents jours de la semaine). Les intervalles varient (17j puis 33j), ce qui suggère un achat non planifié ou un approvisionnement opportuniste.

2. **FILTRAGE DES OUTLIERS**
   - Aucun pic exceptionnel: les 3 commandes = 2u uniformément
   - Pas de donnée N-1 pour identifier des événements saisonniers récurrents
   - L'homogénéité des quantités (2u systématiquement) indique une demande très stable et prévisible
   - Aucune erreur ou promotion évidente à exclure

3. **IMPACT SAISONNEL**
   - Aucune donnée N-1 disponible → Impossible d'identifier un pattern saisonnier
   - Impact saisonnel = "none"

4. **SYNTHÈSE & DÉCISION**
   - **Baseline théorique**: 2 unités (moyenne = 2u, avec 100% de stabilité)
   - **Trend**: Stable (pas de variation observée)
   - **Jour de la prédiction**: Lundi 13/10/2025 - Ne correspond à aucun jour de la semaine "habituel" (variations mer/ven/mar)
   - **Conclusion**: En l'absence de pattern temporel clair et face à une demande extrêmement stable, la meilleure estimation reste la **moyenne observée = 2 unités**

5. **GESTION DE L'INCERTITUDE**
   - **Confiance basse** car:
     * Seulement 3 points de données
     * Pas de cycle identifiable (intervalles variables)
     * Pas de donnée N-1 pour valider la saisonnalité
     * Client potentiellement "réactif" plutôt que "planifié"
   - Recommandation: Maintenir 2u (valeur la plus probable) mais surveiller étroitement les prochaines commandes pour affiner le modèle

**PRÉDICTION FINALE: 2 unités** (confiance basse - pattern insuffisamment robuste pour justifier une variation)

</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes épisodiques sans cycle régulier détectable - 3 commandes sur 83 jours (intervalle ~41-50j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u - aucune variation dans les trois derniers mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
## ANALYSE DÉTAILLÉE

### 1️⃣ ANALYSE RYTHMIQUE
- **Intervalle dernier achat**: 2025-09-10 → 2025-10-13 = 33 jours (devrait dépasser les 40j habituels)
- **Pattern observé**: 
  - 2025-07-22 (mar.) → 2025-08-20 (mer.) = 29 jours
  - 2025-08-20 (mer.) → 2025-09-10 (mer.) = 21 jours
  - Intervalles hautement irréguliers (21j, 29j, 33j prédits)
- **Aucun cycle fixe détectable** : jours variables (mardi, mercredi, mercredi), pas de jour de semaine régulier

### 2️⃣ VOLUME CONSTANT
- Toutes les 3 commandes = **2u exactement**
- Zéro variation sur 83 jours
- Pas d'outliers identifiables

### 3️⃣ SAISONNALITÉ & CONTEXTE
- **N-1 absent** : pas de comparaison année précédente possible
- **Contexte produit**: NUT energy bar bio - produit premium/niché, volume faible cohérent avec SME/restauration bio
- Octobre 2025 : pas de saisonnalité événementielle majeure prévisible

### 4️⃣ DÉCISION FINALE
**Quantité prédite: 2u**

Le pattern montre une **demande de base extrêmement stable mais sporadique** (petit client, commandes irrégulières). La meilleure prédiction est la **moyenne historique invariante = 2u**.

⚠️ **LIMITE CRITIQUE DE CONFIANCE** : Avec seulement 3 points de donnée sur 83 jours, la prédiction manque de robustesse. Cependant, la stabilité complète des volumes justifie une extrapolation basée sur cette constante.

</details>


<details>
<summary><strong>11. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données très limitées (1 seule commande en 3 mois). Impossible de détecter un cycle hebdomadaire ou mensuel fiable. Commande unique le 2025-08-08 (vendredi) à 2u.
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer avec 1 seule donnée récente. N-1 absent. Pas de base historique pour extrapoler une tendance.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
CONTEXTE CRITIQUE : Historique extrêmement réduit (1 seule commande documentée en 3 mois + absence totale de données N-1). 

ANALYSE DÉTAILLÉE :
1. **Rythme & Pattern** : La date 2025-08-08 (vendredi) à 2u est l'unique point de référence. Impossible de confirmer si c'est un rythme hebdomadaire (chaque vendredi), mensuel, ou ponctuel. L'intervalle entre cette commande et la date de prédiction (2025-10-13, lundi) est ~66 jours, suggérant une fréquence très basse ou irrégulière.

2. **Saisonnalité & N-1** : Aucune donnée comparative. Impossible d'évaluer l'impact de la saisonnalité octobre vs août. Pour un produit premium/bio (truffe), on attendrait potentiellement une saisonnalité (pics automne/hiver), mais sans N-1, hypothèse non confirmable.

3. **Tendance** : Avec 1 seule donnée récente, pas de tendance mesurable. Pas de preuve de hausse, baisse ou stabilité.

4. **Jour de la semaine** : Commande historique = vendredi. Prédiction demandée = lundi. Pas d'effet "rattrapage de cycle" détectable.

DÉCISION PRUDENTE :
Faute de données suffisantes, je maintiens la baseline à **2 unités** (reproduction de la dernière commande documentée). C'est la prédiction la moins risquée, mais la confiance reste **TRÈS BASSE** (low).

**RECOMMANDATION MANAGÉRIALE** : Collectez d'urgence plus d'historique (12+ mois) pour affiner le modèle. Ce produit pourrait avoir une vraie saisonnalité ou un rythme régulier masqué par les données incomplètes. Contactez le client pour valider son rythme d'approvisionnement réel.</reasoning>
</invoke>

</details>


<details>
<summary><strong>12. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern indéterminé - Une seule commande observée (22/07/2025 mardi, 1u). Impossible de détecter un cycle récurrent sur 3 mois.
- **Saisonnalité**: none
- **Tendance**: Données insuffisantes - Dernière commande datée de 22/07/2025 (+ de 2 mois avant la prédiction du 13/10/2025). Pas de tendance mesurable.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
🔴 **ALERTE DONNÉES CRITIQUES** 

Analyse Chain of Thought :

1. **ANALYSE RYTHMIQUE**
   - Historique N-1 : Vide (aucune donnée comparative)
   - Derniers 3 mois : UNE SEULE commande le 22/07/2025 (mardi) = 1u
   - Intervalle depuis dernière commande : 82 jours (du 22/07 au 13/10)
   - Aucun pattern hebdomadaire/mensuel identifiable avec 1 seul point de données

2. **INTERPRÉTATION DU SILENCE**
   - L'absence de commandes depuis 82 jours suggère 3 scénarios possibles :
     a) Client inactif/dormant (churn risqué)
     b) Rupture de stock chez le client → rattrapage attendu
     c) Changement de fournisseur ou données manquantes
   - **Impossible de trancher sans contexte métier supplémentaire**

3. **DÉCISION PRUDENTE**
   - Sans pattern établi, sans N-1, sans données saisonnières
   - Baseline = dernière quantité observée = 1u (seul ancrage fiable)
   - Pas de hausse/baisse de tendance détectable
   - Recommandation = reconduction à 1u par défaut

⚠️ **CONFIDENCE TRÈS BASSE** : La prédiction est hautement spéculative. 
**Recommandation commerciale** : Valider avec le client son statut (actif/inactif), vérifier les ruptures de stock, ou collecter davantage de données de commande avant d'optimiser ce SKU.

</details>




### 📊 Données d'Input LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 2u
- 2025-08-08 08:17:38: 1u
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 1u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 4u
- 2025-07-22 11:20:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 3u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-08 08:17:38: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>12. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**📊 Quantité Médiane (fallback)**: 3u
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>13. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | Stock prédit: 2.1u (17j restants) → prédit 5u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 3 | Stock prédit: 0.8u (10j restants) → prédit 3u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | Stock prédit: 0.8u (7j restants) → prédit 4u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | Stock prédit: -0.7u (-13j restants) → prédit 2u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: -1.6u (-40j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -2.4u (-70j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-47j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -2.4u (-70j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:12:31.908Z*
