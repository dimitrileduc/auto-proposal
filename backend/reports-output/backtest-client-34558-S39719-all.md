# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S39719
- **Date commande** : 2025-10-14 10:33:03
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 29,176 input + 5,944 output = 35,120 total


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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 43.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -2.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (22j, 12j, 21j, 53j depuis dernière commande)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse - moyenne 2u mais pic récent à 4u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Historique court (4 commandes sur 3 mois) avec pattern irrégulier. Les 3 premières commandes montrent 1-2u (demande de fond stable), puis pic à 4u le 2025-09-10 (possiblement rattrapage après 21j sans commande ou événement ponctuel). Depuis ce pic, 33 jours se sont écoulés - intervalle cohérent avec le rythme observé (22-53j). La commande de 4u étant isolée et suivant une longue période, je la traite comme outlier. Baseline à 2u (moyenne des 3 autres commandes arrondie) reflète mieux la demande récurrente. Pas de saisonnalité N-1 détectable. Prédiction conservatrice à 2u car le pattern ne justifie pas d'anticiper un nouveau pic sans signal clair de rattrapage.

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec allongement progressif des intervalles (19j → 21j → 13j → 33j depuis début). Pas de jour fixe détecté (mer/ven/mar/mer).
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1u (hors unique commande de 2u le 2025-08-08). Fréquence en baisse: intervalle moyen passe de ~17j (juil-août) à 33j (dernière commande).
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Historique court (4 commandes sur 3 mois) montrant une demande de fond à 1u (75% des cas). L'unique commande de 2u semble exceptionnelle. Le dernier intervalle de 33 jours (vs ~17j avant) suggère soit une baisse d'activité, soit un stock résiduel chez le client. Au 13/10, soit 33j après la dernière commande, le rythme coïncide avec un réapprovisionnement minimal. Absence de saisonnalité N-1 et de pattern hebdomadaire fiable. Prédiction: retour à la commande unitaire standard (1u) avec confiance moyenne compte tenu de l'irrégularité croissante.

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
- **Pattern temporel**: Mensuel irrégulier ~20-30j (22j, 21j, 21j entre commandes) - Commandes exclusivement mar./mer.
- **Saisonnalité**: none
- **Tendance**: Stable - Demande constante 4u par commande sur 3 mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern très stable identifié : 3 commandes consécutives de 4u avec intervalles réguliers (22j→21j→21j). Dernière commande le 2025-09-10, donc +33j au 2025-10-13 = léger retard vs rythme habituel ~21j, mais pas assez pour doubler la quantité (pas d'effet rattrapage majeur en agro B2B sur ce type produit premium). Absence totale d'outliers et de données N-1. Le client a un besoin récurrent stable de 4u/mois. Pas de signal justifiant une déviation : prédiction 4u avec haute confiance.

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles variables (18j, 33j, 49j) - pas de jour fixe détecté
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation entre 2-3u sans tendance claire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique limité (3 commandes sur 3 mois) montrant pattern irrégulier. Intervalles: 18j→33j→49j (rythme s'allonge). Quantités stables 2-3u (moyenne 2.33). Dernier achat il y a 33j (2025-09-10), délai médian suggère nouvelle commande probable. Baseline 2.3u arrondie à 2u car produit bio premium avec rotation lente. Absence de saisonnalité N-1 et volumes faibles indiquent client occasionnel. Confiance faible due au manque de données structurées, mais 2u correspond au mode observé (2 apparitions sur 3).

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes en 3 mois (intervalle ~33j puis ~32j)
- **Saisonnalité**: none
- **Tendance**: Stable - volume faible constant (2-3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (2 commandes seulement). Pattern irrégulier avec intervalle ~33j suggère commande mensuelle légère. Volumes constants 2-3u indiquent produit de niche/test. Dernière commande (10 sept) = 2u il y a ~33j. En l'absence de saisonnalité N-1 et avec tendance stable, la baseline théorique (moyenne 2.5u) est arrondie à 2u (quantité la plus récente et probable pour ce type de produit à faible rotation). Confidence faible car données insuffisantes pour pattern robuste.

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~21-30j) - Commandes principalement mercredi/mardi
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante 2u sur 3 dernières commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern clair détecté: client commande systématiquement 2 unités à intervalles de 21-30 jours (10/09→20/08=21j, 20/08→22/07=29j). Dernière commande 10/09, donc au 13/10 (33 jours écoulés) nous sommes dans la fenêtre d'achat attendue. Aucun outlier, aucune saisonnalité N-1, demande parfaitement stable à 2u. Pas de signal de changement de comportement. Prédiction: 2 unités (quantité historique constante).

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables: 21j, 12j, 17j, 23j entre commandes. Pas de jour fixe détecté (mer/ven/mar/mer)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation 1-3u autour d'une moyenne de 2.25u, pas de tendance claire sur 3 mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court (4 commandes) avec pattern irrégulier mais volumes stables (1-3u, médiane=2.5u). Aucune donnée N-1 pour saisonnalité. Dernière commande il y a 33 jours (2025-09-10) suggère cycle ~30j. La moyenne arithmétique est 2.25u, mais la distribution montre 2 occurrences de 3u vs 1×1u et 1×2u. En l'absence de signal fort, je privilégie la valeur centrale robuste: 2u (proche médiane, cohérent avec historique récent, évite sur-stockage). Confiance moyenne car données limitées et pattern non-établi.

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables: 21j, 12j, 18j, 33j depuis juil-25. Pas de jour fixe (mar/ven/mer/mer)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation 1-2u sans tendance claire, moyenne 1.75u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court (4 commandes) avec pattern irrégulier mais volumes constants (1-2u). Dernière commande le 2025-09-10 (mer), soit 33j avant prédiction du 2025-10-13. Ce délai est le plus long observé, suggérant un cycle étendu. Aucun outlier détecté, demande de fond stable autour de 1.75u. En l'absence de saisonnalité N-1 et avec une fréquence espacée, la quantité la plus probable est 2u (valeur récurrente 3/4 fois). Pas de rattrapage évident car pas de rupture de rythme net - le client semble commander par petits lots selon besoins. Recommandation: 2u comme quantité modale et cohérente avec le pattern observé.

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (17j, 33j, 49j) sans pattern fixe
- **Saisonnalité**: none
- **Tendance**: Stable - quantité constante de 2u sur toutes les commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit montre un historique court (3 commandes sur 3 mois) avec une demande PARFAITEMENT STABLE de 2 unités à chaque commande. Aucun outlier détecté, pas de saisonnalité N-1 disponible. Les intervalles sont irréguliers (17-33-49 jours) mais la quantité reste invariable. Sans pattern temporel clair, la logique B2B agroalimentaire suggère que le client maintient un stock minimal et recommande systématiquement 2 unités par cycle. Absence de tendance haussière/baissière. La prédiction de 2 unités repose sur la constance parfaite observée (100% des commandes = 2u). Confidence medium car historique limité, mais le signal quantitatif est très cohérent.

</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~21-30 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante de 2u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit montre un pattern de commande mensuel régulier avec une quantité stable de 2u à chaque fois (22/07, 20/08, 10/09). Le prochain intervalle prévu place la commande vers mi-octobre, cohérent avec la date de prédiction du 13/10. Aucun outlier détecté, pas de saisonnalité N-1 disponible, et une tendance parfaitement stable sur les 3 derniers mois. La demande de fond théorique de 2u correspond exactement au comportement observé. Sans élément perturbateur ni signal de changement, la prédiction la plus précise est de maintenir cette quantité habituelle de 2 unités.

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
- **Pattern temporel**: Données insuffisantes - une seule commande observée (2u le 08/08/2025)
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - historique trop limité (1 point de données uniquement)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique extrêmement limité avec UNE SEULE commande de 2 unités il y a 2 mois (08/08). Aucun pattern rythmique détectable, aucune saisonnalité N-1 disponible, impossible d'établir une tendance. En l'absence totale de données structurantes, j'applique le principe de récurrence minimale : la seule référence quantitative disponible est cette commande de 2u. Produit premium/bio à rotation probablement faible en B2B. La prédiction de 2u représente la seule baseline observable, mais la confiance est TRÈS FAIBLE car basée sur un échantillon unique sans validation possible du pattern de réapprovisionnement. Risque élevé d'erreur dans les deux sens (sur/sous-estimation).

</details>


<details>
<summary><strong>12. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - Une seule commande observée (2025-08-08)
- **Saisonnalité**: none
- **Tendance**: Impossible à établir - historique trop limité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule commande historique (3u le 2025-08-08, soit 66 jours avant la date de prédiction), l'analyse est extrêmement limitée. Aucun pattern rythmique, saisonnier ou tendanciel ne peut être établi. En l'absence totale de données N-1 et avec un historique récent quasi-inexistant, la seule référence disponible est cette commande unique de 3 unités. Par défaut méthodologique, je reproduis cette quantité observée comme baseline, tout en soulignant que la fiabilité est très faible. Dans un contexte réel, cette prédiction nécessiterait validation humaine et collecte de données complémentaires (budget client, type de contrat, fréquence contractuelle prévue).

</details>


<details>
<summary><strong>13. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - Une seule commande observée il y a 83 jours
- **Saisonnalité**: none
- **Tendance**: Indéterminé - historique trop limité (1 commande unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique extrêmement limité (1 seule commande de 1u le 2025-07-22, soit 83 jours avant la date de prédiction). Aucun pattern rythmique détectable, pas de saisonnalité N-1, impossibilité d'identifier une tendance. En l'absence totale de régularité et face à un intervalle de 83 jours sans réapprovisionnement, deux hypothèses: (1) produit à rotation très lente/test, (2) client inactif sur ce SKU. La baseline théorique de 1u reflète la seule observation disponible. Par principe de parcimonie et vu l'absence de signaux de reprise d'activité, la prédiction conserve la quantité minimale observée. Toute projection au-delà de 1u serait spéculative sans fondement dans les données. Confiance très faible - recommandation de collecter davantage d'historique avant optimisation.

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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: high)
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
<summary><strong>12. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
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
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 4 | Stock prédit: 0.8u (10j restants) → prédit 4u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | Stock prédit: 0.8u (7j restants) → prédit 4u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.7u (-13j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -1.6u (-40j restants) → prédit 1u mais non commandé |
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

*Rapport généré automatiquement le 2025-11-20T13:29:01.523Z*
