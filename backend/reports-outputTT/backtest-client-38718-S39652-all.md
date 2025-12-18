# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S39652
- **Date commande** : 2025-10-09 11:32:03
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 36
- **Tokens**: 42,541 input + 53,921 output = 96,462 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.2% | 38 produits prédits, 24 corrects |
| **Rappel** | 75.0% | 32 produits réels, 24 détectés |
| **F1-Score** | 68.6% | Score équilibré global |

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
| **MAE** | 0.58 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 45.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
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

## True Positives (24)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (19 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle sporadique long d'environ 35 à 45 jours principalement en milieu de semaine
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (passage de 4u à 2u lors des dernières occurrences)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation régulière mais à faible volume. 1/ Aucun événement exceptionnel n'est identifié dans l'historique. 2/ L'absence de données pour octobre N-1 ne permet pas de confirmer une saisonnalité spécifique, bien que le produit puisse être lié aux fêtes de fin d'année. 3/ On observe une baisse du volume par commande lors des deux dernières livraisons (3u puis 2u). 4/ Le cycle moyen constaté est d'environ 40 jours. La dernière commande ayant eu lieu le 17 septembre, la prochaine occurrence est statistiquement attendue autour du 27 octobre 2025. Cette date tombant dans la fenêtre des 30 prochains jours, une commande unique de 2 unités (alignée sur la tendance récente) est recommandée.

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle régulier d'environ 21 à 25 jours
- **Saisonnalité**: weak
- **Tendance**: Stabilisation à 2u après une baisse par rapport à N-1
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 & 3 : Les données récentes montrent une stabilisation de la demande à 2 unités par commande, contre 4 à 6 unités l'année précédente. Aucun outlier n'est à signaler sur les trois derniers mois. Étape 2 : L'impact saisonnier semble faible, bien que les volumes de fin d'été/début d'automne soient structurellement plus bas que l'été 2024. Étape 4 : L'intervalle moyen entre les commandes est d'environ 22 jours. La dernière commande ayant eu lieu le 17 septembre 2025 (il y a 21 jours), la prochaine commande est prévue de façon imminente, probablement cette semaine ou la suivante. En suivant la tendance récente, une quantité de 2 unités est recommandée pour couvrir le besoin de fond.

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable entre 14 et 29 jours (moyenne ~22 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande régulier bien qu'oscillant entre 14 et 29 jours. La dernière commande date du 17 septembre 2025 (il y a exactement 21 jours). Sur la base d'une fréquence moyenne de 22 jours, une commande est imminente (prévue entre aujourd'hui et la semaine prochaine). Aucun outlier n'est détecté, les quantités se stabilisent à 2 unités après une période estivale légèrement plus haute (3-4 unités en juillet/août), ce qui est cohérent avec la fin de saison des barbecues pour une sauce andalouse.

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle récurrent identifié entre 37 et 43 jours (moyenne 40 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume moyen de 2u, malgré une légère baisse à 1u sur la dernière commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande régulier d'environ 40 jours. 1. DE-EVENTING: Aucune anomalie détectée, les volumes sont faibles et stables (1-2u). 2. SAISONNALITÉ: Le produit est commandé durant l'été et le début de l'automne (Juillet à Septembre). 3. TENDANCE: Le rythme est stable. La dernière commande date du 17/09/2025. 4. PRÉDICTION: Avec un cycle de 40 jours, la prochaine commande est estimée autour du 27/10/2025, soit dans la fenêtre de 30 jours (avant le 07/11/2025). La quantité recommandée est de 2 unités, correspondant à la demande de fond historique pour ce format Weck.

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 43 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très restreint avec seulement deux points de données (août et septembre). On observe un intervalle de 43 jours entre les deux dernières commandes. La dernière commande ayant eu lieu le 17 septembre 2025, la prochaine est estimée statistiquement autour du 30 octobre 2025. Cette date se situe dans la fenêtre de prédiction (avant le 7 novembre 2025). La quantité de fond est stable à 2 unités par commande.

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 40-45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
L'analyse se décline en 4 étapes : 1. DE-EVENTING : La quantité de 5u en mai 2024 a été identifiée comme un pic saisonnier/évènementiel, la base de consommation réelle se situant à 2u. 2. SAISONNALITÉ : Le produit (Aïoli) présente une légère saisonnalité estivale (pics à 4u-5u en N-1). Nous entrons actuellement dans une période de basse saison automnale. 3. TENDANCE : Les deux dernières commandes (août et septembre 2025) montrent une stabilité parfaite à 2u avec un intervalle de 43 jours. 4. PRÉDICTION : La dernière commande date du 17/09/2025. Avec un cycle moyen constaté de ~40 jours, la prochaine commande est estimée autour du 27-30 octobre, ce qui entre dans la fenêtre des 30 jours. La quantité recommandée pour cette commande unique est de 2u, calquée sur la demande de fond récente.

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 21 jours (intervalles de 14 et 29 jours)
- **Saisonnalité**: none
- **Tendance**: Légère hausse (+1u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre seulement trois commandes avec un intervalle moyen de 21,5 jours. La dernière commande date du 2025-09-17, soit exactement 21 jours avant la date actuelle (2025-10-08). Un besoin est donc imminent dans la fenêtre des 30 prochains jours. En suivant la tendance incrémentale observée sur les volumes (4u, puis 5u, puis 6u), la prochaine commande est estimée à 6 unités.

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable entre 14 et 29 jours (moyenne ~21 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite sur la quantité (2 unités) avec un intervalle moyen de 21 jours entre les commandes. La dernière commande ayant eu lieu le 17 septembre 2025, nous sommes aujourd'hui à J+21, ce qui correspond au cycle moyen observé. Une commande de 2 unités est donc hautement probable dans les prochains jours. Conformément à la règle de non-cumul, nous prédisons seulement la prochaine occurrence.

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable d'environ 21 jours (intervalles observés de 14 et 29 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1.5 - 2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière mais à faible volume. Le cycle moyen entre les commandes est de 21 jours. La dernière commande ayant eu lieu le 17 septembre 2025, le délai de 21 jours nous place précisément à la date actuelle (8 octobre 2025). Il est donc très probable qu'une commande soit passée dans les prochains jours. La demande de fond oscillant entre 1 et 2 unités sans tendance à la hausse ou à la baisse marquée, une recommandation de 2 unités (quantité la plus fréquente) est retenue pour la prochaine commande unique.

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier alternant entre 14 et 29 jours (moyenne ~22 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1.67u de moyenne)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune commande aberrante détectée sur cet historique court (1 à 2 unités par commande). ÉTAPE 2: Pas d'historique N-1 disponible, mais le produit (Energy Drink) présente une demande de fond stable sur les 3 derniers mois. ÉTAPE 3: La fréquence moyenne est de 21.5 jours. La dernière commande datant du 17/09/2025, le délai de 21 jours est atteint aujourd'hui même (08/10/2025). ÉTAPE 4: Une commande est donc imminente dans la fenêtre des 30 jours. On retient la quantité de 2 unités, correspondant au volume le plus fréquent et à la dernière commande enregistrée.

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 43 jours (basé sur l'intervalle entre août et septembre)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est limité à deux points de données, mais présente une régularité parfaite en termes de volume (2u). L'intervalle observé entre la commande du 05/08 et celle du 17/09 est de 43 jours. En projetant ce même cycle à partir de la dernière commande, on estime la prochaine livraison aux alentours du 30 octobre 2025. Cette date se situant dans la fenêtre des 30 prochains jours, une commande de 2 unités (conforme à la demande de fond) est attendue. Le niveau de confiance est faible en raison de la rareté des points de données historiques.

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 14 et 29 jours (moyenne ~21 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1.7u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier détecté, les volumes sont constants (1 ou 2 unités). Étape 2 : Pas de données N-1 pour évaluer la saisonnalité, nous traitons le flux comme stable. Étape 3 : La tendance est constante. Le cycle moyen de commande est de 21,5 jours. Étape 4 : La dernière commande date du 17 septembre, soit il y a exactement 21 jours par rapport à la date actuelle (8 octobre). Une commande est donc imminente dans la fenêtre des 30 jours. Sur la base du mode historique et de la nécessité de couvrir les besoins sur un produit à faible rotation, une quantité de 2 unités est recommandée.

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 21 jours avec commandes situées les mardis ou mercredis
- **Saisonnalité**: weak
- **Tendance**: Stable (alternance entre 1u et 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des intervalles entre les commandes (14 jours puis 29 jours) donne une moyenne de 21,5 jours. La dernière commande datant du 17 septembre 2025, le renouvellement est théoriquement dû le 8 ou 9 octobre (soit immédiatement). Les quantités historiques oscillent entre 1 et 2 unités. Étant donné que le client a commandé 2u la dernière fois et que le cycle est atteint, une commande de 2u est attendue dans les prochains jours. Une seule commande est prévue malgré la fenêtre de 30 jours car le cycle est relativement long (21j).

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long d'environ 43 jours (6 semaines)
- **Saisonnalité**: weak
- **Tendance**: Légère baisse (2u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux commandes. L'intervalle entre les commandes précédentes était de 43 jours. La dernière commande ayant eu lieu le 17 septembre, la prochaine occurrence est statistiquement prévue autour du 30 octobre, ce qui se situe à l'intérieur de la fenêtre de 30 jours (avant le 7 novembre). Compte tenu des très faibles volumes et du ralentissement saisonnier des boissons fraîches en automne, une quantité de 1 unité est préconisée pour la seule commande attendue.

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long identifié d'environ 43 jours entre les commandes
- **Saisonnalité**: weak
- **Tendance**: Hausse légère observée passant de 2u à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique limité à deux commandes. On observe un intervalle de 43 jours entre les commandes (05/08 et 17/09). La dernière commande datant d'il y a 21 jours, la prochaine commande est projetée aux alentours du 30 octobre 2025, soit dans la fenêtre des 30 prochains jours. Bien que le volume soit faible, la tendance récente montre un passage de 2 à 3 unités, nous retenons donc 3 unités pour la commande unique à venir.

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 0u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (commande unique)
- **Saisonnalité**: weak
- **Tendance**: Inactif (dernière commande > 60 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une activité très limitée pour ce produit avec une seule commande isolée de 2 unités enregistrée le 05/08/2025. ÉTAPE 1: Aucune donnée aberrante car le volume est minimal. ÉTAPE 2: La saisonnalité des boissons fraîches est naturellement plus faible en octobre/novembre qu'en août, réduisant la probabilité d'un réapprovisionnement. ÉTAPE 3: Aucune tendance ni cycle de commande n'a pu être établi. ÉTAPE 4: Il s'est écoulé 64 jours depuis la dernière commande, ce qui dépasse largement la fenêtre d'analyse de 30 jours sans signe de récurrence. En l'absence de base de données suggérant un cycle régulier, aucune commande n'est prévue pour les 30 prochains jours.

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 0u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle identifiable (commande unique enregistrée)
- **Saisonnalité**: none
- **Tendance**: Inexistante (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur une seule commande historique de 2 unités datant du 5 août 2025. Depuis cette date, soit plus de 60 jours, aucune nouvelle commande n'a été passée. L'absence de commande durant le mois de septembre suggère que ce produit n'est pas un article de réapprovisionnement régulier ou qu'il s'agissait d'un achat ponctuel/test. En tenant compte du délai écoulé (2 mois) et de l'entrée dans une saison moins propice aux boissons fraîches (octobre), la probabilité d'une commande dans les 30 prochains jours est jugée trop faible pour recommander un achat.

</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 0u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé - Absence totale d'historique de commandes
- **Saisonnalité**: none
- **Tendance**: Inconnue (Données manquantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse prédictive est impossible en raison de l'absence totale de données historiques pour ce client et ce produit ([JOY08] JOY! Organic Raspberry Jam 370g), que ce soit sur la période récente (3 derniers mois) ou sur la période N-1. Aucun cycle de commande (Step 3) ou tendance (Step 4) ne peut être établi. En l'absence de signaux de consommation passée, la probabilité d'une commande spontanée dans les 30 prochains jours ne peut être étayée statistiquement. Conformément aux règles de gestion, la quantité recommandée est de 0.

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun historique de commande identifié
- **Saisonnalité**: none
- **Tendance**: Inconnue (absence de données)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse ne peut s'appuyer sur aucun historique de commande pour ce produit (ni sur l'année précédente, ni sur les trois derniers mois). En l'absence de données transactionnelles permettant d'identifier une fréquence de réapprovisionnement, un cycle de vie ou un volume de fond, il est impossible de prédire un besoin pour les 30 prochains jours. Par conséquent, la quantité recommandée est de 0.

</details>




### 📊 Données d'Input LLM (19 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 4u
- 2024-07-15 07:59:25: 5u
- 2024-04-15 06:24:25: 3u
- 2024-03-12 14:06:41: 4u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 2u
- 2025-08-05 06:36:11: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 6u
- 2024-07-15 07:59:25: 4u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 3u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-15 07:59:25: 4u
- 2024-07-01 07:05:34: 3u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 2u
- 2024-07-15 07:59:25: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-01 07:05:34: 4u
- 2024-05-31 07:27:57: 5u
- 2024-04-15 06:24:25: 2u
- 2024-03-12 14:06:41: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 6u
- 2025-08-19 12:02:03: 5u
- 2025-08-05 06:36:11: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 3u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (14)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 1.1u (24j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 0.8u (14j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 1.0u (22j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -0.3u (-4j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 4 | Stock prédit: 0.1u (0j restants) → prédit 4u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -1.2u (-14j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF021] JF PICKLES 350 ML | 4 | Stock prédit: -1.2u (-18j restants) → prédit 4u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |


---

## False Negatives (8)

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
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -2.1u (-56j) mais client a commandé 1u |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Stock suffisant: 1.3u (35j restants > seuil 30j) |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.6u (-27j) mais client a commandé 1u |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: 0.1u (2j) mais client a commandé 1u |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.6u (-13j) mais client a commandé 1u |


---

*Rapport généré automatiquement le 2025-12-18T18:56:18.021Z*
