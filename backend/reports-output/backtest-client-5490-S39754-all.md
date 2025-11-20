# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 26
- **Tokens**: 58,163 input + 15,989 output = 74,152 total
- **Coût**: $0.4143 (~41.43¢)
- **Coût par produit LLM**: $0.0159


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 38.5% | 26 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 55.6% | Score équilibré global |

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
| **MAE** | 18.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 10.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 20.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 31 | 62 | 31.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 62 | 93 | 31.0 | 33.3% | ✅ partial | 🤖 LLM |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 31 | 124 | 93.0 | 75.0% | ✅ partial | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | 50 | 25.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 62 | 62 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bimensuelle ~14 jours, principalement les jeudis
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité fixe de 434u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les commandes récentes montrent un pattern très régulier:
- 2025-10-15 (mer.) → 2025-10-02 (jeu.): 13 jours
- 2025-10-02 (jeu.) → 2025-09-18 (jeu.): 14 jours  
- 2025-09-18 (jeu.) → 2025-09-04 (jeu.): 14 jours

Le client commande toutes les 2 semaines environ, avec une forte préférence pour les jeudis. La prédiction est pour le 2025-10-16 (jeudi), soit 1 jour après la dernière commande du 15/10.

**ANALYSE DE QUANTITÉ:**
- 100% des commandes (N-1 et période récente) = 434 unités exactement
- Aucune variation, aucun outlier détecté
- Demande parfaitement stable et prévisible

**SAISONNALITÉ:**
- Comparaison octobre 2024 vs octobre 2025: même quantité de 434u
- Aucun effet saisonnier visible
- Produit à rotation constante

**DÉCISION:**
La commande du 15/10 vient juste d'avoir lieu (1 jour avant la date de prédiction). Cependant, étant donné le pattern bimensuel observé (~14 jours entre commandes) et la régularité absolue, la prochaine commande logique serait attendue vers fin octobre (vers le 29-30/10). 

**ATTENTION**: La date de prédiction (16/10) tombe immédiatement après une commande (15/10). Cela suggère soit une commande exceptionnelle de rattrapage, soit le pattern habituel. Vu la régularité absolue des 434u et l'absence totale de variation, je prédis 434u avec une confiance élevée.

</details>


<details>
<summary><strong>2. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bimensuelle irrégulière (intervalle ~14-17 jours), principalement jeudi avec quelques mercredis
- **Saisonnalité**: none
- **Tendance**: Stable (434u systématique depuis septembre 2024)
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Le client commande toutes les 2 semaines environ (14-17 jours). Dernière commande: 2025-10-15 (mer). La prédiction pour le 2025-10-16 (jeu) tombe donc 1 jour après seulement - probabilité très faible de commande immédiate. CEPENDANT, l'historique montre un pattern spécifique: plusieurs occurrences de commandes consécutives mer-jeu (ex: 2025-10-01 mer + 2025-10-02 jeu, pattern similaire visible en 2024). ANALYSE QUANTITATIVE: 434u est LA quantité standard absolue depuis septembre 2024 (100% des commandes récentes). Les 868u d'août 2024 sont clairement des doublons ou erreurs (commandes multiples le même jour). SAISONNALITÉ: Aucun impact - volumes identiques N vs N-1 pour cette période. DÉCISION: Malgré l'intervalle très court (1 jour après dernière commande), le pattern historique mer-jeu observé et la stabilité absolue de la quantité commande justifient une prédiction de 434u. Si pas de commande ce jour, ce sera sous 2 semaines, mais le pattern suggère une possibilité réelle pour le lendemain jeudi.

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 31u vs Médiane: 31u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 31u (50.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier avec concentration début de mois (jeu./mer.)
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère baisse -10%
- **Outliers détectés**: 93u

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Le produit montre un pattern d'achat concentré en début de mois (1-3 du mois), avec alternance jeu./mer. En octobre 2025, nous avons déjà eu 2 commandes les 1-2/10 (jeu.: 93u total, mer. 01/10: 31u) puis une nouvelle vague le 15/10 (mer.: 62u). La date du 16/10 intervient juste après cette commande du 15/10.

**Comparaison N-1:** En octobre 2024, nous avions des commandes groupées le 03/10 (186u cumulées) puis le 19/09 (155u). Les quantités 93u du 05/09/2024 sont identifiées comme outliers exceptionnels.

**Détection outliers:** Les 93u individuels (2024-09-05) sont atypiques car la norme se situe entre 31-62u.

**Tendance récente:** Les 3 derniers mois montrent une stabilité autour de 31-62u par commande, avec un total octobre 2025 déjà à ~155u (31+62+31+31). Cela correspond au niveau N-1 même période.

**Décision:** Étant donné qu'une commande vient d'être passée le 15/10 (hier), et que le pattern montre généralement un espacement de plusieurs jours entre commandes, la probabilité d'une nouvelle commande le 16/10 existe mais sera de faible volume (réapprovisionnement complémentaire). La baseline serait 62u, mais compte tenu de la proximité temporelle (J+1), je prédis 31u comme quantité d'ajustement probable.

</details>


<details>
<summary><strong>4. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 62u vs Médiane: 31u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 31u (33.3%)
- 📉 **Erreur Médiane**: 62u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~27-30j entre cycles), principalement jeudi, quelques commandes mercredi
- **Saisonnalité**: weak
- **Tendance**: Baisse -50% (de ~280u/mois en oct 2024 à ~155u/mois récent)
- **Outliers détectés**: 93u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** : Le client commande tous les ~28 jours, principalement le jeudi. Dernière commande le 2025-09-18 (jeu.), nous sommes le 2025-10-16 (jeu.) = 28 jours écoulés → parfaitement dans le cycle habituel.

**PATTERN HISTORIQUE N-1** : Le 2024-10-03 (même période), on observe 4 commandes le même jour pour un total de 279u (62+62+93+62), soit une moyenne de ~70u par commande. Le 93u apparaît comme outlier mais reste dans la fourchette observée.

**TENDANCE RÉCENTE** : En 2025, baisse nette du volume. Le 2025-09-18 montre 155u total (93+31+31), soit une baisse de ~44% vs N-1. Les commandes individuelles récentes oscillent entre 31u et 93u.

**SAISONNALITÉ** : Faible impact saisonnier détecté. L'ail des ours (produit de saison) montre une demande plus faible en 2025, probablement due à changement de mix client ou fin de saison.

**DÉCISION** : Sur la base du pattern observé (commandes multiples groupées le jeudi), et compte tenu de la tendance baissière mais du maintien d'une commande "standard" autour de 62u (quantité récurrente en N-1), je prédis **62u** comme quantité la plus probable pour cette commande spécifique. C'est la médiane des commandes non-outliers observées historiquement.

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - LLM: 31u vs Médiane: 62u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: medium)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 93u (75.0%)
- 📉 **Erreur Médiane**: 62u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec concentration début octobre (~2 semaines), après 13j de pause depuis mi-septembre
- **Saisonnalité**: none
- **Tendance**: Hausse +200% (31u mi-sept → 93u début oct, avec pics à 62-93u)
- **Outliers détectés**: 62u, 93u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Les commandes récentes montrent un pattern irrégulier. Entre le 18 sept et le 1er oct (13 jours), puis concentration massive le 1-2 octobre (3 commandes en 2 jours: 93+62+93=248u), suivie d'une nouvelle commande le 15 oct (31u) après 13 jours. Le client semble commander par vagues espacées de ~2 semaines.

FILTRAGE OUTLIERS: Les quantités 62u et 93u apparaissent concentrées les 1-2 octobre, suggérant un rattrapage/reconstitution de stock massif (248u en 48h). La commande du 15/10 (31u) revient à un volume plus modéré, probablement le volume "normal" entre deux reconstitutions.

SYNTHÈSE: La prédiction pour le 16/10 (lendemain immédiat) est délicate. Deux scénarios:
1) Le client vient de commander 31u le 15/10 → peu probable qu'il recommande 24h après
2) Si pattern bi-hebdomadaire confirmé → prochaine commande dans ~13-14j (fin octobre)

La baseline récente hors pics = 31u (18/09 et 15/10). Vu que le client a commandé hier 31u, la probabilité d'une commande significative aujourd'hui est faible, mais si elle survient, elle suivrait le volume standard de 31u. Pas d'indication de saisonnalité N-1 ni d'événement spécial le 16 octobre.

PRÉDICTION: 31u (volume standard hors reconstitution)

</details>


<details>
<summary><strong>6. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (~14-28 jours), concentration forte sur les jeudis
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante à 25u sur toute la période
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique détaillée :**
- Intervalles récents : 15 oct → 18 sept (27j) → 4 sept (14j) → 7 août (28j)
- Pattern : Commandes espacées de 2 à 4 semaines, avec une forte préférence pour le jeudi
- Dernière commande : HIER (15 oct, mercredi) - événement très récent !

**Éléments clés :**
1. **Stabilité absolue des quantités** : 100% des commandes = 25u (17 commandes analysées), aucun outlier détecté
2. **Pas de saisonnalité** : Les volumes N-1 (août-octobre 2024) sont identiques à N (août-octobre 2025)
3. **Commande HIER** : Le client vient de commander 25u il y a moins de 24h (15/10)

**Décision critique :**
Étant donné que la dernière commande date d'HIER (15 octobre), et que le pattern montre des intervalles de 14-28 jours, la probabilité d'une nouvelle commande DEMAIN (16 octobre) est **extrêmement faible**. Le client n'a jamais montré de commandes à J+1.

CEPENDANT, la question porte sur la "prochaine quantité" à commander, pas sur "commander demain ou non". Si/quand le client commandera à nouveau (probablement dans 2-4 semaines), ce sera 25u basé sur l'historique parfaitement stable.

**Prédiction : 25 unités** - cohérent avec 100% de l'historique disponible.

</details>


<details>
<summary><strong>7. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 25u vs Médiane: 25u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 25u (50.0%)
- 📉 **Erreur Médiane**: 25u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme bimensuel (~14-17 jours) avec concentration sur jeudi/mercredi
- **Saisonnalité**: weak
- **Tendance**: Stable, maintien à 25u par commande individuelle
- **Outliers détectés**: 50u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les commandes récentes montrent un pattern clair:
- 18/09/2025 (jeu.) → 01-02/10/2025 (mer.) = ~14 jours
- 01-02/10/2025 (mer.) → 15/10/2025 (mer.) = ~14 jours
- 15/10/2025 (mer.) → 16/10/2025 (jeu.) = +1 jour

Le client vient JUSTE de commander hier (15/10), ce qui suggère que le besoin immédiat est satisfait.

**PATTERN HISTORIQUE:**
- N-1 (sept-oct 2024): Commandes groupées tous les ~14-16 jours, toujours le jeudi
- N (2025): Même pattern bimensuel, commandes majoritairement de 25u
- Les 50u sont des exceptions rares (2-3 occurrences sur 17 commandes)

**SAISONNALITÉ:**
Impact faible. Les volumes N-1 (sept-oct 2024) montrent des commandes similaires à N (25u standard), sans pic significatif mi-octobre.

**DÉCISION:**
Étant donné qu'une commande de 25u vient d'être passée hier (15/10), et que le rythme habituel est bimensuel (~14 jours), une nouvelle commande aujourd'hui (16/10) serait une exception au pattern établi. Toutefois, si commande il y a, elle suivra le standard de 25u observé dans 88% des cas récents.

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-hebdomadaire à hebdomadaire irrégulier, principalement jeudi/mercredi, intervalles de 1-15 jours
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante à 434u sur toute la période
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse rythmique : Le client commande de manière récurrente avec une fréquence variable (1 à 15 jours d'intervalle) mais concentrée sur jeudi/mercredi. Dernière commande : 2025-10-02 (jeudi), soit 14 jours avant la date de prédiction (2025-10-16, jeudi). Pattern cohérent avec l'historique.

Stabilité remarquable : TOUTES les commandes sans exception sont de 434u sur 17 mois d'historique (N-1 et période récente). Aucun outlier détecté, aucune variation de quantité.

Saisonnalité : Aucun impact saisonnier observable. Les volumes restent identiques entre juillet 2024 et octobre 2025, quelle que soit la période.

Tendance : Parfaitement stable. La quantité de 434u représente manifestement un lot standard ou une contrainte logistique du client (palette complète, contenant spécifique).

Décision : Avec un pattern de commande aussi constant et prévisible, la prédiction la plus précise est 434u. Le jeudi 2025-10-16 correspond au jour de commande privilégié du client, avec un intervalle de 14 jours cohérent avec son rythme observé."

</details>


<details>
<summary><strong>9. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 62u vs Médiane: 62u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bi-hebdomadaire irrégulière, principalement jeudi avec quelques mercredis. Intervalles ~14-15 jours entre cycles récents
- **Saisonnalité**: weak
- **Tendance**: Baisse -40% (passage de ~100u/cycle N-1 à ~62u/cycle récent)
- **Outliers détectés**: 93u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le produit suit un pattern bi-hebdomadaire sur les jeudis principalement. Dernière commande le 2 oct (jeudi), soit 14 jours avant la date de prédiction (16 oct, jeudi). Le cycle est respecté.

**Analyse N-1 (sept-oct 2024)**: 
- 5 sept: 248u total (dont 2×93u = outliers probables)
- 19 sept: 186u total
- 3 oct: 124u total
Volume moyen ~100-120u par cycle, mais avec forte variabilité.

**Tendance récente (sept-oct 2025)**:
- 18 sept: 31u (commande unique, faible)
- 1-2 oct: 217u cumulé (31+62+62+62=217u)
Mais analyse fine du 1-2 oct: 4 lignes de commande rapprochées suggèrent un regroupement administratif. Quantité unitaire récurrente: 62u.

**Saisonnalité**: Impact faible. On observe une baisse structurelle du volume entre N-1 et N, mais pas de pattern saisonnier fort à cette période d'octobre.

**Décision**: La quantité de 62u apparaît comme le nouveau standard récent (3 occurrences sur les 5 dernières lignes). Le rythme bi-hebdomadaire est confirmé. Prédiction à 62u pour respecter la tendance actuelle sans surgonfler.

</details>


<details>
<summary><strong>10. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ toutes les 2 semaines, principalement les jeudis et mercredis
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante de 40u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse rythmique: Les données récentes (3 derniers mois) montrent un pattern clair avec des commandes le 04/09 (jeu.), 18/09 (jeu. - 3 commandes groupées), et 01/10 (mer.). Cela représente des intervalles d'environ 14 jours entre cycles de commande. La date de prédiction 2025-10-16 (jeu.) se situe 15 jours après la dernière commande, parfaitement alignée avec ce rythme bihebdomadaire.

Cohérence historique: Sur les 17 commandes observées (N-1 et période récente), 100% des quantités sont de 40u sans aucune exception. Cette stabilité parfaite sur plus d'un an indique un produit à rotation constante, probablement commandé par lot standard de 40 unités.

Saisonnalité: Aucun impact saisonnier détecté. Les volumes N-1 (juillet-septembre 2024) sont identiques aux volumes récents (septembre-octobre 2025).

Outliers: Aucun événement exceptionnel détecté. Les 3 commandes du 18/09 regroupées en quelques minutes représentent probablement une saisie multiple pour le même besoin, pas une surconsommation.

Conclusion: La prédiction de 40u est la plus probable car elle reflète (1) la constance absolue du produit, (2) l'alignement parfait avec le cycle bihebdomadaire, et (3) l'absence totale de variabilité historique.

</details>




---

## False Positives (16)

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
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 31 | Stock prédit: 31.0u (8j restants) → prédit 31u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 31 | Stock prédit: 31.0u (11j restants) → prédit 31u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 25 | Stock prédit: 25.0u (1j restants) → prédit 25u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | Stock prédit: 434.0u (11j restants) → prédit 434u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | Stock prédit: 0.0u (0j restants) → prédit 434u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -19.2u (-4j restants) → prédit 40u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 235 | Stock prédit: -782.0u (-17j restants) → prédit 235u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1450 | Stock prédit: -5125.0u (-18j restants) → prédit 1450u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 625 | Stock prédit: -2150.0u (-18j restants) → prédit 625u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 400 | Stock prédit: -1385.0u (-18j restants) → prédit 400u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 314 | Stock prédit: -1084.0u (-18j restants) → prédit 314u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 185 | Stock prédit: -611.0u (-18j restants) → prédit 185u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 410 | Stock prédit: -1395.0u (-17j restants) → prédit 410u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: -16.7u (-1j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: -240.8u (-20j restants) → prédit 248u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: -575.4u (-39j restants) → prédit 434u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T08:58:09.905Z*
