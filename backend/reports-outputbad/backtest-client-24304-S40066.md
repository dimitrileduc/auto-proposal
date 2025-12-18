# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S40066
- **Date commande** : 2025-11-03 12:14:48
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 40,805 input + 73,651 output = 114,456 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.7% | 27 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 57.9% | Score équilibré global |

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
| **MAE** | 0.64 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 34.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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
| [MF0032] MF Tarti Pois chiches 250 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


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
- **Pattern temporel**: bi-weekly_monday
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Client orders bi-weekly on Mondays (last 3 orders: 1u every 14d). Prediction date is Sunday (hors cycle), so we predict the next Monday's order. The 2u from August is an isolated outlier in an irregular period; the stable recent pattern of 1u every 14 days is the reliable baseline. With zero N-1 seasonality data and high pattern consistency, the most probable quantity is 1 unit for the upcoming order cycle.

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
- **Pattern temporel**: bi-hebdomadaire (tous les 14 jours)
- **Saisonnalité**: none
- **Tendance**: stable à la baisse
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande exclusivement les lundis sur un cycle bi-hebdomadaire (14 jours) avec des volumes décroissants (3u→2u→2u→1u→1u). Les 2 dernières commandes sont stables à 1u. La date de prédiction (dimanche) est hors cycle : application de la règle spéciale B2B qui impose de prédire la prochaine commande probabile (lundi suivant 2025-11-03) et non 0. La valeur la plus probable pour cette prochaine commande est 1u, correspondant au niveau stabilisé observé récemment.

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bihebdomadaire les lundis (intervalles de 14 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à la baisse (6→3→2→2)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Le client B2B a un pattern bihebdomadaire strict les lundis. La date de prédiction (dimanche) étant hors cycle, j'applique la règle spéciale : prédire la quantité de la PROCHAINE commande (lundi 2025-11-03). Les données montrent une stabilisation récente à 2 unités sur les 2 dernières commandes, après un outlier de 6u et une période transitoire à 3u. En agroalimentaire B2B, la stabilité récente prime sur la moyenne historique bruitée. Le pic de 6u du 2025-08-25 est clairement un événement exceptionnel non répété dans les 3 mois suivants. La tendance actuelle est donc 2u.

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes bi-mensuelles hebdomadaires (intervalle constant de 14 jours, systématiquement le lundi)
- **Saisonnalité**: none
- **Tendance**: diminution_recente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Intervalle constant de 14 jours (bi-mensuel hebdomadaire) systématiquement le lundi. Date de prédiction (dimanche) hors cycle → prédiction pour le lundi suivant (03/11). 

DONNÉES RÉCENTES: Série 5→2→3→3→1u. Tendance baissière marquée sur 2 dernières commandes (-66%). La valeur de 1u est potentiellement un outlier bas (3× inférieur à la moyenne des précédentes), mais comme c'est la plus récente, elle ne peut être ignorée.

DÉCISION: En B2B agroalimentaire avec volumes faibles (1-5u) et pattern épars, la dernière valeur est le meilleur indicateur court terme, mais le risque d'outlier est élevé. Une moyenne pondérée récente (dernière valeur 1u × 40% + moyenne 3 derniers 2.33u × 30% + moyenne historique 2.8u × 30%) = 2.14u arrondi à **2 unités**. Ce niveau minimise le MAPE en équilibrant la baisse récente avec la volatilité historique, sans surgonfler inutilement.

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 15u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: biweekly_monday
- **Saisonnalité**: none
- **Tendance**: increasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande exclusivement le lundi avec un intervalle parfait de 14 jours (dernières dates : 08/09, 22/09, 06/10, 20/10). La date de prédiction étant un dimanche (hors cycle), je dois prédire la quantité pour le lundi suivant (2025-11-03). Les quantités montrent une progression claire : 2u → 2u → 2u → 1u → 2u, avec une tendance de fond stable autour de 2u. La valeur 1u du 06/10 est une anomalie isolée, immédiatement corrigée par un retour à 2u le 20/10. En l'absence de données N-1 et avec un pattern stable récent, la valeur la plus probable est la dernière observée et la plus fréquente : 2u.

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
- **Pattern temporel**: Toutes les commandes se produisent le lundi avec un intervalle principal de 14 jours (11 août → 25 août → 8 septembre). Une exception observe un intervalle de 28 jours entre le 8 septembre et le 6 octobre (probable commande manquée ou report), mais le pattern 14 jours a repris entre le 6 et le 20 octobre.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern identifié : commandes le lundi, toutes les 14 jours (bi-hebdomadaire), volume constant 1u. La date demandée (dimanche) étant hors cycle, j'applique la règle : ne pas prédire 0 mais la quantité de la prochaine commande attendue (lundi 3 novembre 2025). Historique sans variance, pas d'outliers. La stabilité du pattern malgré l'anomalie du 8 septembre (intervalle doublé) confirme la robustesse du rythme. Dernière commande : 20 octobre (1u). Prochaine attendue : 3 novembre (1u).

</details>


<details>
<summary><strong>7. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières concentrées les lundis, avec intervalles variables (14j, 56j). Absence de cycle hebdomadaire ou mensuel stable.
- **Saisonnalité**: none
- **Tendance**: stable_low_volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande exclusivement les lundis avec des intervalles irréguliers mais une quantité stable (1-2 unités). La date de prédiction étant un dimanche (hors cycle), les règles spéciales m'obligent à prédire la quantité pour la prochaine commande probable (lundi suivant) et NON pas 0. La dernière commande était de 1u, qui est aussi la valeur la plus fréquente et cohérente avec le rythme B2B pour ce produit très spécifique. Le volume extrêmement bas suggère un client-test ou un usage très ponctuel.

</details>


<details>
<summary><strong>8. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1.3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Période récente : cycle de 14-28 jours (moyenne 21j). La dernière commande était le 2025-10-20, donc le prochain cycle logique est le lundi 2025-11-03. Les intervalles N-1 étaient irréguliers (28-56j), mais la fréquence s'est accélérée et stabilisée récemment.
- **Saisonnalité**: weak
- **Tendance**: declining
- **Outliers détectés**: -0.5u, 1u, -0.5u

**🧠 Raisonnement LLM:**
Le dimanche 2025-11-02 est hors cycle. Le pattern récent exclusif montre des commandes le lundi toutes les 2 à 4 semaines : [2u (25-08), 1u (06-10), 1u (20-10)]. La tendance est clairement déclinante et s'est stabilisée à **1u** (2 des 3 dernières commandes). L'outlier de 5u en octobre 2024 est obsolète et non représentatif de la consommation actuelle. Le prochain lundi logique est le 2025-11-03. Pour minimiser le MAPE, privilégier la valeur la plus fréquente récemment.

</details>


<details>
<summary><strong>9. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 2.78u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: N/A
- **Saisonnalité**: none
- **Tendance**: down
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**1. ANALYSE RYTHMIQUE (Déterminant)**

- **N-1 (Nov 2023-Oct 2024)** : Rythme irrégulier mensuel (~28-42j), principalement mardi/lundi, quantités variables [2,3,4]u. Moyenne ≈ 2.78u.
- **Période récente (Août-Oct 2025)** : **Pattern bi-mensuel rigide** : commandes **TOUS les 14 jours exactement, le LUNDI** (2025-08-25, 09-08, 09-22, 10-06, 10-20). **5 commandes consécutives de 1u**.
- **Date prédiction (Dimanche 2025-11-02)** : Hors cycle ouvré. Dernière commande : Lundi 20 oct. La **prochaine commande prévisible** est Lundi 3 novembre (+14j).

**Conclusion rythmique** : Le client a basculé d'un cycle mensuel irrégulier (N-1) à un cycle **bi-mensuel stable** (14j). La date cible est hors cycle → prédiction pour le **Lundi 03/11**.

**2. FILTRAGE OUTLIERS**

- **N-1** : Valeurs 2-4u, **obsolètes** vis-à-vis de la tendance actuelle.
- **Période récente** : **Aucune disparité** (5×1u = 0% d'écart). Les pics à 4u (mai/août 2024) sont des **événements exceptionnels non répétés** depuis 5 cycles.
- **Décision** : Exclure les données N-1 du calcul (pondération 0%), car elles représentent un **comportement historique rompu**.

**3. SYNTHÈSE & DÉCISION**

- **Rupture nette** : Volume divisé par ~3 (2.78u → 1u), stabilité totale depuis **3 mois**.
- **Règle d'or** : « Précision > Prudence ». Pas de surgonflage "au cas où".
- **Pondération** : **100% période récente** (5/5 commandes identiques = confiance maximale).
- **Pas de saisonnalité** détectée sur ce produit.

**=> La quantité la plus probable pour la prochaine commande (Lundi 03/11) est la valeur stable actuelle : 1 unité.**

</details>


<details>
<summary><strong>10. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: bihebdomadaire_lundi
- **Saisonnalité**: none
- **Tendance**: stable_bas_volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client a basculé d'un rythme irrégulier (N-1 : mardi, ~28-56j) à un cycle **bihebdomadaire strict les lundis** (intervalles exacts de 14 jours depuis août 2025). La date de prédiction étant un dimanche, je prédis la quantité pour le **lundi suivant (2025-11-03)** selon les règles spéciales. Les 5 dernières commandes montrent un **pattern stable d'alternance 1u-3u** (1u,3u,1u,3u) avec une valeur moyenne de 2u. La dernière commande (2025-10-20) était de 3u, donc logiquement la prochaine sera **1u** selon le cycle identifié. Les volumes historiques N-1 (~4-5u) sont hors tendance actuelle et doivent être fortement dépréciés pour ne pas biaiser la prédiction.

</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune fréquence stable détectée. Les commandes sont ad-hoc avec des intervalles irréguliers (28j, 56j, 30j, 65j, 28j, 84j, 28j). Pas de tendance saisonnière claire sur N-1. Le volume N-1 oscille stablement entre 2-3 unités.
- **Saisonnalité**: none
- **Tendance**: Dernière commande le 2025-08-11 (1u) est anormalement basse vs historique stable (mode=2u, moyenne=2,25u). Cette valeur isolée ne représente pas une rupture de tendance mais probablement un événement ponctuel (stock d'urgence, test ou erreur). Pas de série récente suffisante pour valider une baisse durable.
- **Outliers détectés**: -1u

**🧠 Raisonnement LLM:**
Le dimanche étant exclu des cycles B2B, on prédit la quantité de la prochaine commande probable. L'absence de pattern fixe combine à une dernière valeur aberrante (1u) nous force à privilégier la tendance historique stable. Les 7 commandes N-1 montrent une distribution serrée 2-3u (mode=2u). La valeur 1u du 2025-08-11 est un outlier exceptionnel sans série récente de confirmation. Pour minimiser le MAPE, la valeur la plus probable historique (2u) est privilégiée sur une anomalie isolée.

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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.3u (5j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.4u (8j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | Stock prédit: 1.3u (4j restants) → prédit 5u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: -1.0u (-5j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: -0.9u (-5j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 4 | Stock prédit: 2.8u (27j restants) → prédit 4u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 3 | Stock prédit: 2.1u (29j restants) → prédit 3u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.6u (-9j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 2 | Stock prédit: -1.2u (-45j restants) → prédit 2u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 12 | Stock prédit: -0.6u (-26j restants) → prédit 12u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-17T16:31:21.041Z*
