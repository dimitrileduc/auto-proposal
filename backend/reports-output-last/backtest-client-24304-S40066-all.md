# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S40066
- **Date commande** : 2025-11-03 12:14:48
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 40,805 input + 62,406 output = 103,211 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 39.3% | 28 produits prédits, 11 corrects |
| **Rappel** | 84.6% | 13 produits réels, 11 détectés |
| **F1-Score** | 53.7% | Score équilibré global |

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
| **MAE** | 0.55 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -22.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (11)

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
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel (tous les 14 jours) le lundi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -1.15u

**🧠 Raisonnement LLM:**
Cycle bimensuel stable le lundi. Tendance récente à 1u avec outlier ancien à 2u. Prochaine commande attendue le lundi 2025-11-03.

</details>


<details>
<summary><strong>2. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes bi-hebdomadaires (14j) avec exception de 28j entre 2025-09-22 et 2025-10-20
- **Saisonnalité**: none
- **Tendance**: Diminution progressive 3u→2u→2u→1u→1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Toutes les commandes historiques ont lieu le lundi avec intervalle majoritairement bi-hebdomadaire (14 jours). La date cible étant un dimanche, j'applique la règle Jour hors cycle: je prédis la quantité de la prochaine commande lundi (2025-11-03), pas 0. La tendance montre une stabilisation claire à 1u sur les deux dernières commandes (octobre et septembre), après diminution progressive de 3u. Le pattern de 28 jours entre septembre et octobre semble être une exception (commande sauté) plutôt qu'un nouveau cycle mensuel, car les 3 intervalles précédents étaient stables à 14 jours. Pour minimiser le MAPE en agroalimentaire B2B, je privilégie la valeur la plus récente stable (1u) plutôt que la moyenne historique qui suréstimerait (1.8u). Aucun outlier significatif ne justifie une pondération différente.

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: bi-mensuelle (14 jours) les lundis
- **Saisonnalité**: none
- **Tendance**: décroissante stabilisée
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Analyser en français : Le client suit un cycle bi-mensuel strict : commandes les lundis à 14 jours d’intervalle (25/08, 08/09, 22/09, 06/10, 20/10). La date demandée (dimanche 02/11) est hors cycle. Appliquant la règle pour jours hors cycle, je ne prédis pas 0 mais la quantité de la PROCHAINE commande, qui sera le lundi suivant (03/11). La commande du 25/08 (6u) est un outlier ancien et isolé. Les 4 commandes suivantes forment une tendance claire et stable : 3u, 3u, 2u, 2u. Les 2 dernières commandes sont identiques (2u), confirmant la stabilisation. Avec seulement 5 points et une tendance récente cohérente, la méthode la plus précise est de privilégier la dernière valeur stable. La moyenne pondérée serait moins précise car elle diluerait la tendance récente avec un outlier obsolète.

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Toutes les 2 semaines (intervalle exact: 14 jours)
- **Saisonnalité**: none
- **Tendance**: stable_to_slightly_decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un pattern B2B très régulier : commande toutes les 2 semaines le lundi. La date demandée (02/11, dimanche) est hors cycle. Je dois donc prédire la quantité pour la PROCHAINE commande (lundi 03/11). Les volumes oscillent entre 1-5 unités en décroissance récente (5→2→3→3→1). La dernière valeur très basse (1u) est probablement ponctuelle. La moyenne pondérée des 3 dernières commandes (2,33) reflète mieux la demande stable B2B.

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-mensuelle stricte (tous les 14j) sur jour fixe (lundi)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Le cycle bi-mensuel le lundi est parfaitement respecté. La dernière commande (20/10) était de 2u, valeur stable depuis août (sauf un outlier à 1u). Dimanche hors cycle → on prédit la prochaine commande lundi 03/11.

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes bi-mensuelles (intervalle moyen 14 jours) le lundi. Quantité constante 1u sur 5 derniers points. Un intervalle de 28 jours entre 2025-09-08 et 2025-10-06, mais le pattern s'est normalisé ensuite.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le jour de prédiction est hors cycle (dimanche vs lundi habituel). Selon les règles, je dois prédire la quantité pour la **prochaine commande** (lundi 2025-11-03). Historique: 5 commandes les lundis, toujours 1u, intervalles principalement 14j (pattern bi-mensuel). Une seule exception (28j) mais quantité inchangée. En agroalimentaire B2B, une telle stabilité reflète une consommation constante. La valeur la plus probable est donc celle du pattern établi: 1 unité. Le risque de rupture est faible car la dernière commande (2025-10-20) a respecté le cycle.

</details>


<details>
<summary><strong>7. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sur lundi avec intervalles de 14 et 56 jours. Pas de saisonnalité visible.
- **Saisonnalité**: none
- **Tendance**: stable_to_decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client montre un pattern de commande le lundi avec des intervalles variables (14j puis 56j). Les volumes sont passés de 2u à 1u puis stabilisés à 1u. La date de prédiction (dimanche) étant hors jour habituel, nous prédisons la quantité pour le **lundi suivant (2025-11-03)**. Compte tenu de la très faible volumétrie et de la stabilisation sur la dernière commande, le volume le plus probable est 1 unité, correspondant au niveau actuel d'activité du client.

</details>


<details>
<summary><strong>8. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Jusqu'à récemment, le client commandait majoritairement le mardi avec des volumes de 2-3 unités. Depuis 2025, le pattern a basculé vers le lundi avec des volumes DIVISÉS par 2 (1-2 unités). La commande de 5 unités du 2024-10-15 est isolée (+67% vs valeur max adjacente) et sera traitée comme outlier.
- **Saisonnalité**: none
- **Tendance**: Forte baisse des volumes (-50%): de 2-3u moyenne N-1 à 1-1.3u moyenne récente. Le pic de 5u en N-1 est sans fondement récent.
- **Outliers détectés**: -2024u

**🧠 Raisonnement LLM:**
Le client a changé son pattern en 2025 : commande désormais les lundis tôt le matin avec un intervalle de 14 jours récemment observé. Les volumes ont chuté de 50% vs N-1 et se sont stabilisés à 1 unité sur les 2 dernières commandes (Oct 2025). La date demandée (dimanche) est hors cycle → on prédit la PROCHAINE commande habituelle (lundi 03/11). Tous les indicateurs pointent vers 1 unité : (1) stabilité des 2 dernières valeurs, (2) tendance baissière confirmée, (3) outlier N-1 isolé de 5u à exclure.

</details>


<details>
<summary><strong>9. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: BI-WEEKLY MONDAY
- **Saisonnalité**: weak
- **Tendance**: declining
- **Outliers détectés**: 4u, 2u

**🧠 Raisonnement LLM:**
Le pattern récent est ultra-clair: 1u tous les 2 lundis depuis août 2025. Le dimanche est hors cycle, donc on prédit la quantité de la PROCHAINE commande (lundi 03/11). Les données N-1 (2-4u) sont hors sujet (>1an). Pas d'outlier récent à neutraliser.

</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rupture complète de cycle : passage d'un rythme mensuel irrégulier (mardi) à un cycle bi-hebdomadaire fixe (tous les lundis, intervalle 14j)
- **Saisonnalité**: none
- **Tendance**: Baisse significative des volumes (-50% vs N-1) avec stabilisation récente sur une alternance 1u/3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**1. Analyse Rythmique Déterminante** : Le client a radicalisé son comportement entre N-1 et 2025. Historiquement (N-1), des commandes irrégulières sur mardi (intervalles 27-56j, moyenne ~4,1u). Depuis août 2025, pattern parfait : commandes **tous les 14 jours le lundi** (5 cycles stricts). La date de prédiction (dimanche 02/11) est hors-cycle → on prédit la **prochaine commande du lundi 03/11** selon les règles spéciales.

**2. Filtrage Outliers & Pattern Dominant** : Aucun outlier statistique. Le signal le plus fort est l'**alternance rigoureuse 1u/3u** sur les 4 derniers cycles (écart de 14j exactement). Cette alternance correspond très probablement à une planification B2B intentionnelle (rotation de sites/produits). La valeur de transition 2u (25/08) est hors-pattern et doit être pondérée faiblement.

**3. Synthèse & Pondération** : N-1 est devenu quasi-irrélevant face à cette rupture de comportement. La précision maximale s'obtient en **ciblant la continuation du pattern actuel** plutôt qu'une moyenne qui lisserait l'information. L'alternance étant parfaite, la prochaine commande est statistiquement **1u** (erreur MAPE attendu minimisée à 22%).

**Conclusion** : La probabilité la plus élevée (60%) correspond à la logique d'alternance. Les 25% de chance d'une valeur moyenne (2u) et 15% de continuation (3u) sont secondaires face à un pattern intentionnel aussi marqué.

</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Monthly to quarterly irregular orders with variable weekdays (Tuesday 4x, Monday 2x, Friday 1x). No clear weekly cycle identified.
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
The product shows extremely sparse ordering pattern (7 orders over 23 months). The most recent data point from 2025-08-11 shows a significant drop to 1u (vs historical 2-3u), indicating a potential consumption reduction or new baseline for this B2B client. With only one recent data point and irregular intervals (28-84 days), the last observed value is the most reliable indicator of current behavior. The prediction date being Sunday doesn't invalidate the quantity prediction - B2B clients will place orders on the next business day with their established quantity. Given the clear downward break in pattern, predicting historical average (2-3u) would overestimate and increase MAPE. The 1u quantity reflects the client's current state while respecting the rule against predicting 0 for off-cycle days.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u
- 2025-08-11 06:51:13: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 2u
- 2025-10-06 09:27:30: 2u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 3u
- 2025-08-25 10:25:08: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 3u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 2u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 2u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 07:22:24: 5u
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 2u
- 2024-05-13 13:42:50: 2u
- 2024-03-19 14:47:15: 3u
- 2024-02-09 08:53:20: 2u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 1u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 07:22:24: 3u
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 4u
- 2024-06-11 06:44:54: 2u
- 2024-05-13 13:42:50: 4u
- 2024-04-15 11:54:11: 2u
- 2024-03-19 14:47:15: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 3u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:35:01: 3u
- 2025-10-06 09:27:30: 1u
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 07:22:24: 4u
- 2024-09-03 09:43:33: 4u
- 2024-08-06 09:10:28: 5u
- 2024-06-11 06:44:54: 4u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 5u
- 2024-03-19 14:47:15: 5u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 5u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 3u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (17)

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.3u (5j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.4u (8j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | Stock prédit: 1.3u (4j restants) → prédit 5u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | Stock prédit: -1.0u (-5j restants) → prédit 3u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: -0.9u (-5j restants) → prédit 2u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 4 | Stock prédit: 2.8u (27j restants) → prédit 4u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 3 | Stock prédit: 2.1u (29j restants) → prédit 3u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.6u (-9j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [LEA07] LEAMO orangeade bio 330ml | 1 | Stock prédit: -4.9u (-68j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 2 | Stock prédit: -1.2u (-45j restants) → prédit 2u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -0.6u (-26j restants) → prédit 2u mais non commandé |


---

## False Negatives (2)

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
| [VID0009] Consigne casier | 6 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 36 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T08:14:18.449Z*
