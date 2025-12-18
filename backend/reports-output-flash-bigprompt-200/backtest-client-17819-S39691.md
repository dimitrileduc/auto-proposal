# Rapport Backtest - Client Tirtiaux Fruits srl

## Contexte

- **Client** : Tirtiaux Fruits srl (ID: 17819)
- **Commande réelle** : S39691
- **Date commande** : 2025-10-14 13:40:25
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 28
- **Tokens**: 42,693 input + 7,740 output = 50,433 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 32 produits prédits, 24 corrects |
| **Rappel** | 100.0% | 24 produits réels, 24 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 23.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 16 | Égalité parfaite |
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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (17 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel avec cycle de ~30 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une commande récurrente environ une fois par mois. En 2024, à la même période (30/09), le client commandait 3u, mais les données les plus récentes (08/09/2025 et 05/08/2025) montrent une stabilisation stricte à 2u. Étant donné que nous sommes à environ 35 jours de la dernière commande du 08/09, le cycle mensuel est mûr. Le lundi est le jour de commande préférentiel. Je privilégie la tendance récente de 2u sur le volume N-1 (3u) pour minimiser le MAPE, la stabilité récente étant un indicateur fort.

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité absolue de la quantité commandée (toujours 1 unité depuis fin 2023). Bien que la fréquence soit intermittente, le client commande majoritairement le lundi (4 fois sur 7 historiques). La dernière commande datant du 2025-09-08 (il y a environ 35 jours), le délai correspond au cycle habituel constaté de 30-60 jours. La prédiction de 1u est la plus probable compte tenu de l'absence totale de variation de volume dans l'historique.

</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Lundi aléatoire ou sporadique (tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité absolue du volume (1 unité par commande systématiquement depuis 2024). Bien que la fréquence de commande soit irrégulière (entre 1 et plusieurs mois d'intervalle), le lundi est un jour récurrent du cycle client. La dernière commande date du 8 septembre (lundi). Une commande le lundi 13 octobre (exactement 5 semaines plus tard) est statistiquement probable suivant ce rythme B2B de réapprovisionnement à l'unité. La quantité recommandée est de 1u, car aucun signal de croissance ou de pic n'est présent dans les données.

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~33-34 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Bien que l'historique soit limité à deux points, le comportement d'achat montre une stabilité parfaite à 1 unité avec un intervalle d'environ un mois (34 jours). La dernière commande a eu lieu le lundi 8 septembre. La date de prédiction (lundi 13 octobre) correspond exactement à l'échéance de ce cycle mensuel (35 jours après la précédente). Par conséquent, le volume de 1 unité est hautement probable pour maintenir ce rythme de consommation régulier.

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très ponctuelle / Erratique (1 commande tous les 2 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande extrêmement faible et erratique (3 commandes en 18 mois). Le volume de référence est de 1 unité, la commande de 2u en avril 2024 étant traitée comme un outlier léger ou un besoin ponctuel non répété. Bien que le cycle soit imprévisible, la règle B2B interdit de prédire 0. La dernière commande datant d'août 2025 pour 1u, on maintient cette quantité de fond pour la prochaine occurrence probable, malgré le manque de données pour confirmer une tendance hebdomadaire ou mensuelle.

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Donnée unique (sporadique)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u (basé sur l'unique point)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée de 1 unité le 05/08/2025 (mardi). En l'absence de cycle récurrent ou de données N-1, la règle d'or pour la précision en B2B avec des données éparses est de privilégier la dernière valeur connue comme base de référence. Bien que la date demandée (lundi) diffère du jour de la commande précédente (mardi), nous projetons une quantité de 1 unité pour le prochain événement de commande probable afin d'éviter une prédiction à 0 qui serait contraire aux guidelines.

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très irrégulier (30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable mais volume faible (1-3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande erratique sans cycle hebdomadaire strict, mais avec une récurrence notable le lundi. Historiquement, le volume oscille entre 1 et 3 unités. La dernière commande enregistrée (août 2025) était de 2 unités, ce qui correspond à la médiane historique. En l'absence de tendance à la hausse ou de saisonnalité marquée sur cette référence de tartinade en octobre (N-1 montrait 2u fin septembre 2024), la quantité la plus probable pour la prochaine occurrence est de 2 unités.

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère hausse (de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une alternance entre 1u et 2u avec une tendance récente (Août 2025) et N-1 (Novembre/Décembre 2023) stabilisée à 2u. Le produit est commandé de manière sporadique mais prévisible sur des jours de début de semaine. La date de prédiction étant un lundi, cela correspond parfaitement au cycle observé en août/septembre N-1. On privilégie la quantité de 2u observée lors de la dernière commande et lors des pics de fin d'année précédente pour éviter une rupture sur ce type de produit de niche (Tartinade).

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimestriel à trimestriel (Intervalle long d'environ 45 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité quasi-totale du produit sur 1u par commande. La seule exception est une commande de 2u en novembre 2023, restée isolée (outlier). Le client a commandé pour la dernière fois en août (1u), et avec un cycle moyen de 2 mois observé en 2024, le mois d'octobre correspond à la fenêtre de réapprovisionnement attendue. Le lundi étant le jour de commande préférentiel de ce client (50% des occurrences), la probabilité d'une commande de 1u ce jour précis est maximale.

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel erratique (30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse (de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un produit à faible rotation avec une fréquence de commande approximativement mensuelle. Durant l'année N-1 (2024), le volume était quasi systématiquement de 1 unité. Cependant, les deux dernières commandes enregistrées (fin 2023 et août 2025) sont passées à 2 unités, indiquant une légère augmentation du fond de roulement ou un changement de conditionnement de commande client. La date de prédiction est un lundi, ce qui est le jour préférentiel du client. Compte tenu de l'écart de temps depuis la dernière commande (août 2025), une commande est hautement probable en octobre, alignée sur le dernier volume observé de 2 unités.

</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle approximatif de 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une récurrence marquée le lundi (5 commandes sur 6). Bien qu'il n'y ait pas eu de commandes récentes au cours des 3 derniers mois, le volume historique est extrêmement stable à 1 unité (moyenne de 1.33 sur l'historique total, fortement tirée vers le bas par les occurrences de 1u). Le produit semble être un article de fond de rayon B2B avec une rotation lente mais prévisible. En suivant la règle du jour de cycle, le lundi 2025-10-13 correspond parfaitement au jour de commande habituel du client. Je préconise 1 unité pour minimiser le risque de surstockage tout en couvrant le besoin habituel.

</details>


<details>
<summary><strong>12. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique ultra-faible fréquence (cycle de 3 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et espacée (seulement 3 commandes en un an). Cependant, chacune de ces commandes est systématiquement de 1 unité, indiquant un besoin unitaire récurrent mais très lent du client pour cette mayonnaise. Bien qu'aucune commande n'ait été enregistrée sur les 3 derniers mois, la règle B2B impose de prédire la prochaine commande probable plutôt que 0. Étant donné la stabilité absolue du volume historique (1u), la probabilité que la prochaine commande soit différente de 1 est quasi nulle.

</details>


<details>
<summary><strong>13. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (2u en début d'année N-1 vers 1u en fin d'année N-1)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre que ce produit (Tartinade Carotte Gingembre) est commandé de manière sporadique avec un volume de fond de 1 unité. Bien qu'il n'y ait pas eu de commandes enregistrées sur les 3 derniers mois, le pattern de l'année précédente montre une activité sur la période septembre/octobre. Le jour de prédiction (lundi) correspond parfaitement au cycle habituel du client. Le pic de 3 unités en février 2024 est considéré comme un outlier au regard de la stabilité à 1 unité observée lors des trois dernières occurrences de 2024. On privilégie donc la quantité de 1 unité pour minimiser l'erreur.

</details>


<details>
<summary><strong>14. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique (intervalle 3-4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable mais volume faible (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement sporadique avec environ une commande par trimestre. Bien qu'aucune commande n'ait été enregistrée sur les 3 derniers mois, la date de prédiction (Octobre) se situe environ 13 mois après la commande de septembre 2024 (1u), ce qui pourrait correspondre à un besoin de réapprovisionnement annuel ou ponctuel. Les volumes oscillent strictement entre 1 et 2 unités. Sans tendance à la hausse et vu l'absence d'activité récente, je privilégie la valeur de base de 1 unité pour minimiser l'erreur, la probabilité d'un volume supérieur étant statistiquement faible.

</details>


<details>
<summary><strong>15. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (~28-35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 2u et 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de réapprovisionnement mensuel très régulier sur l'historique N-1 (environ toutes les 4-5 semaines). Bien que les données des 3 derniers mois soient absentes, l'historique montre une stabilité remarquable entre 2 et 4 unités par commande. La date de prédiction (lundi) correspond au jour de commande privilégié historiquement. En l'absence de tendance récente à la hausse ou à la baisse, on se base sur la moyenne historique arrondie à l'entier supérieur (3u) pour garantir la disponibilité tout en restant proche des volumes habituels.

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-identifiable (Manque de données)
- **Saisonnalité**: none
- **Tendance**: Indéterminée - Lancement ou nouveau produit
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale d'historique (N-1 et période récente), il est impossible d'identifier un cycle de commande ou une tendance de volume. Conformément aux règles de gestion des jours hors cycle interdisant de prédire 0 pour un produit actif, une quantité minimale de 1 unité est recommandée pour couvrir une éventuelle demande initiale sur ce lundi, en attendant des données de consommation réelles. Ce choix privilégie l'ouverture d'un cycle plutôt que l'absence de commande.

</details>


<details>
<summary><strong>17. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: No data available
- **Saisonnalité**: none
- **Tendance**: Not applicable - new product or inactive
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
As there is no historical data for this product (N-1 or recent), it is impossible to establish a trend or cycle. In an agro-business context for a premium product (bio chips), a recommendation of 1 unit (a single box/pallet depending on minimum order quantity) is suggested as a symbolic baseline rather than 0, to avoid complete stock-out for a potential initial order, while maintaining cautious inventory levels until actual demand data emerges.

</details>




### 📊 Données d'Input LLM (17 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 2u
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 3u
- 2024-08-05 06:29:22: 3u
- 2024-06-24 06:37:56: 2u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 2u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 2u
- 2024-02-02 07:19:09: 1u
- 2024-01-09 12:58:28: 2u
- 2023-12-05 08:08:03: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-02-02 07:19:09: 1u
- 2023-12-05 08:08:03: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:37:56: 1u
- 2024-04-02 08:47:10: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 2u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 3u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 3u
- 2024-01-09 12:58:28: 3u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 2u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u
- 2023-12-05 08:08:03: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-04-29 07:16:03: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-04-02 08:47:10: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 2u
- 2024-04-29 07:16:03: 1u
- 2024-04-02 08:47:10: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-05-31 07:24:37: 1u
- 2024-02-02 07:19:09: 1u
- 2023-11-07 08:22:06: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 2u
- 2024-02-29 08:57:59: 3u
- 2024-01-09 12:58:28: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-05-31 07:24:37: 2u
- 2024-02-29 08:57:59: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 2u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 3u
- 2024-04-29 07:16:03: 2u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 4u
- 2024-01-09 12:58:28: 3u
- 2023-12-05 08:08:03: 3u
- 2023-11-07 08:22:06: 3u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

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
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | Stock prédit: -0.5u (-9j restants) → prédit 3u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: -0.3u (-20j restants) → prédit 1u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Stock prédit: -0.6u (-35j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock prédit: -0.6u (-22j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:15:37.363Z*
