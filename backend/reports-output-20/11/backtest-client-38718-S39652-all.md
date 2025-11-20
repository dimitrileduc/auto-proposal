# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S39652
- **Date commande** : 2025-10-09 11:32:03
- **Date cutoff système** : 2025-10-09 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 32
- **Tokens**: 64,966 input + 7,574 output = 72,540 total
- **Coût**: $0.3085 (~30.85¢)
- **Coût par produit LLM**: $0.0096


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.3% | 45 produits prédits, 24 corrects |
| **Rappel** | 85.7% | 28 produits réels, 24 détectés |
| **F1-Score** | 65.8% | Score équilibré global |

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
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 47.9% | Erreur moyenne en % (biaisé, pour info) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 14 | Avec erreur |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 5 | 6 | 1.0 | 16.7% | ✅ partial | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 3 | 1 | 2.0 | 200.0% | ✅ partial | 📊 Médiane |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (17 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-37%

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
L'historique N-1 montre une demande de fond stable autour de 4 unités par commande (3-5u). La période récente révèle une baisse notable avec 2-3 unités par commande, soit environ -37% vs baseline. Aucune saisonnalité marquée détectée pour ce produit premium (mayonnaise truffes), donc je privilégie la tendance récente. Je recommande 3 unités, reflétant la demande actuelle observée sans surestimation.

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: N/Au (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-50%

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Les données N-1 (août-juillet 2024) montrent une demande de fond entre 4-6 unités. La période récente révèle une tendance nette à la baisse avec 3 commandes stables à 2-4u (médiane=2u). Aucune saisonnalité marquée détectée pour octobre. Je privilégie la vue récente qui montre une demande stabilisée autour de 2 unités, reflétant probablement une baisse structurelle de consommation chez ce client B2B.

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: N/Au (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-20%

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Les données N-1 (juillet 2024) montrent une demande de fond entre 3-4u, sans commandes exceptionnelles détectées. La période récente (août-septembre 2025) révèle une tendance à la baisse avec une médiane stable à 2u (commandes de 2u, 3u, 2u). Aucune saisonnalité marquée n'est visible dans ce produit sauce. Je recommande 2u basé sur la réalité actuelle de la demande récente.

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Les données N-1 montrent une demande de fond autour de 2u sur la période juillet-août, et les données récentes (août-septembre 2025) confirment ce pattern avec 2u en août et 1u en septembre. Aucune saisonnalité marquée ni commande exceptionnelle détectée. La sauce béarnaise étant un produit de fond en B2B avec usage constant, je recommande 2u basé sur la médiane observée et la récurrence dans l'historique.

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 empêche d'établir une demande de fond historique. Vue récente montre 2 commandes de 2u espacées sur 3 mois (août et septembre), suggérant une demande sporadique très faible. Sans historique ni pattern saisonnier identifiable, je recommande la médiane observée (2u) mais avec confiance très faible car le produit pourrait être nouveau, en déclin ou simplement à rotation lente.

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 3.25u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-35%

**🔍 Outliers détectés:**
5u

**🧠 Raisonnement LLM:**
Analyse N-1 : demande de fond autour de 2-4u/commande avec médiane à ~3u (la commande de 5u semble atypique). Période récente montre une stabilité à 2u sur les 2 dernières commandes. Pas de saisonnalité marquée détectée pour cette sauce aioli, et la tendance récente est orientée à la baisse. Je recommande 2u, aligné sur la réalité actuelle des commandes plutôt qu'un moyennage historique qui surestimerait le besoin.

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 5u vs Médiane: N/Au (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 3 commandes récentes (4u, 5u, 6u) espacées sur 2 mois. Les quantités sont homogènes et montrent une stabilité autour de 5 unités (médiane). Aucun pattern saisonnier détectable, donc je me base uniquement sur la médiane récente. Confiance faible car historique très limité pour ce produit qui semble nouveau ou peu commandé.

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 3 commandes récentes très espacées (août-septembre), toutes identiques à 2 unités. Cela suggère une demande de fond très faible et régulière, probablement un nouveau référencement ou un produit de niche. La régularité parfaite des commandes (2u) indique une demande stable mais très limitée. Confiance faible car historique trop court pour détecter toute saisonnalité ou tendance fiable.

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Aucune donnée N-1 disponible pour établir une référence saisonnière. Les 3 derniers mois montrent des commandes modestes et régulières (2u, 1u, 2u) sans pattern particulier, soit environ 1.67u en moyenne. Je recommande 2 unités car c'est la médiane et la valeur la plus fréquente observée récemment, mais la confiance reste faible vu le manque d'historique robuste.

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.7u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 3 commandes récentes (2u, 1u, 2u) sur 3 mois. Aucune saisonnalité détectable. La médiane des commandes récentes est 2u, ce qui représente le comportement le plus probable. Confiance faible car l'historique est très limité - ce produit semble être nouveau ou peu commandé par ce client.

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Historique très limité avec seulement 2 commandes récentes (août et septembre) de 2 unités chacune, sans données N-1 pour référence saisonnière. Le pattern suggère une demande régulière mais très faible de 2 unités mensuelles. Confiance faible car données insuffisantes pour détecter tendances ou saisonnalité - produit possiblement nouveau ou client occasionnel.

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.7u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Produit sans historique N-1, très peu de données récentes (3 commandes sur 3 mois). Les quantités observées sont faibles et régulières (1u, 2u, 2u) suggérant une demande de fond minimale. En l'absence de pattern saisonnier identifiable et avec si peu de données, je recommande la médiane observée (2u), qui représente la quantité la plus fréquente et la plus probable pour la prochaine commande.

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 3 commandes sur les 3 derniers mois (5u au total). La médiane récente est de 2u avec un rythme très irrégulier (espacements de 14, 45, puis 22 jours). Sans historique pour valider la saisonnalité ou la demande de fond, je recommande 2u (médiane récente) comme quantité la plus probable pour le prochain réapprovisionnement.

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 2 commandes sporadiques récentes (1u et 2u sur 3 mois). Ce produit montre une demande extrêmement faible et irrégulière, typique d'un article marginal ou en fin de vie. Sans historique structuré, je recommande la quantité minimale observée récemment (médiane = 1u) pour tester la demande sans risque de surstock important. Confiance faible car données insuffisantes pour identifier un pattern fiable.

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Aucune donnée N-1 disponible et seulement 2 commandes récentes (3u et 2u sur 3 mois), ce qui constitue un historique très limité. La médiane des données récentes est de 2.5u, sans pattern saisonnier identifiable. Je recommande 3u par défaut en l'absence d'éléments structurants, mais avec une confiance faible vu la pauvreté des données disponibles pour ce produit.

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
2u

**🧠 Raisonnement LLM:**
Produit avec historique quasi-inexistant : aucune donnée N-1 et une seule commande de 2 unités en période récente (août 2025). Cette commande unique pourrait être un test de marché ou une commande ponctuelle. En l'absence de pattern établi, je recommande la quantité observée (2u) mais avec une confiance très faible, car il est impossible de déterminer si c'est une demande récurrente ou exceptionnelle. Suivi rapproché indispensable.

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Produit très récent ou en phase de test : aucune donnée N-1 disponible et seulement 1 commande observée sur les 3 derniers mois (2 unités début août). Sans historique significatif ni pattern identifiable, je me base sur cette unique observation récente. La confiance est faible car impossible d'identifier une tendance ou saisonnalité avec un seul point de données.

</details>




---

## False Positives (21)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 1.1u (23j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 0.8u (14j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 1.0u (21j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -0.3u (-5j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -1.3u (-14j restants) → prédit 3u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.0u (24j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Stock prédit: -1.3u (-14j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF021] JF PICKLES 350 ML | 4 | Stock prédit: -1.3u (-19j restants) → prédit 4u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: -1.6u (-21j restants) → prédit 3u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: -0.8u (-12j restants) → prédit 3u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | Stock prédit: -1.3u (-36j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | Stock prédit: -1.5u (-44j restants) → prédit 2u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 2 | Stock prédit: -0.5u (-21j restants) → prédit 2u mais non commandé |


---

## False Negatives (4)

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
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Stock suffisant: 1.3u (35j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T20:03:22.257Z*
