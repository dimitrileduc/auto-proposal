# Rapport Backtest - Client CRF MARKET AUBEL SA AGBA

## Contexte

- **Client** : CRF MARKET AUBEL SA AGBA (ID: 38732)
- **Commande réelle** : S39932
- **Date commande** : 2025-10-27 10:41:25
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 39,897 input + 7,512 output = 47,409 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 52.4% | 42 produits prédits, 22 corrects |
| **Rappel** | 91.7% | 24 produits réels, 22 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 1.23 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 49.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -27.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 16 | Avec erreur |

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

## True Positives (22)

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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD010] LD Organic Truffle Spread 135 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ❌ Non | 📊 Médiane |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 4 | 3.0 | 75.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 20 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une consommation sporadique de ce produit (sauce Béarnaise) avec des volumes très faibles. La commande de 3u en avril 2024 semble être un pic isolé. Les deux dernières commandes (août/septembre 2025) montrent une reprise de rythme avec 1u puis 2u. Bien que la demande porte sur un dimanche, les règles métier imposent de prédire la prochaine occurrence probable. Compte tenu de l'augmentation légère lors de la dernière commande (2u le 12/09) et de la faible rotation, on retient 2u pour couvrir la prochaine période de consommation.

</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique à basse fréquence (tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une consommation très faible et irrégulière mais persistante. Le produit est commandé par unité simple (1u) dans 83% des cas. La commande de 2u en mars 2024 est un événement isolé. Malgré le fait que le 26 octobre soit un dimanche, les règles métier imposent de ne pas prédire 0 et de projeter la prochaine commande probable. Compte tenu de la dernière commande le 12 septembre (il y a environ 44 jours), le cycle de réapprovisionnement arrive à échéance fin octobre. La quantité la plus probable est le maintien de l'unité de base.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation stabilisée à 1 unité depuis juin 2024, à l'exception d'une commande isolée en octobre 2024. Le cycle de commande est d'environ une fois par mois. Bien que le 26/10/2025 soit un dimanche, les règles de gestion imposent de ne pas prédire 0. La consommation de fond est systématiquement d'une unité lors des derniers points de données (août et septembre 2025). Par conséquent, nous prédisons 1 unité pour couvrir le prochain besoin du cycle mensuel, indépendamment du jour spécifique de la semaine.

</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme erratique (30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (Stable à 3u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'historique montre une consommation irrégulière mais persistante. Entre 2024 et 2025, le volume moyen par commande est passé de 4.1u à 3u. Les deux dernières commandes (4u en août, 2u en septembre) confirment une demande de fond stable autour de 3 unités. Bien que la prédiction soit demandée pour un dimanche, le comportement B2B observé sur ce produit montre des commandes réparties sur tous les jours ouvrés ; nous prédisons donc le volume de la prochaine fenêtre de commande probable. Le pic de 6u en juin 2024 est considéré comme un outlier car non reproduit depuis 16 mois. La valeur de 3u (moyenne des deux dernières commandes) est la plus probable pour minimiser le MAPE.

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (Cycle ~30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une demande très stable et faible (1 unité) depuis plus d'un an, à l'exception d'un pic isolé à 3 unités en mars 2024 identifié comme un outlier historique. Les deux dernières commandes (août et septembre 2025) confirment ce volume de 1 unité. Bien que la date de prédiction soit un dimanche (hors jours ouvrés habituels), selon les consignes, je prédis le volume de la prochaine commande probable. Compte tenu de la régularité du volume sur les périodes récentes et N-1, la quantité recommandée est de 1.

</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique à mensuel (~30-45 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence de commande sur ce produit spécifique. Sur l'année N-1, le volume oscillait entre 1u et 2u, avec une concentration sur octobre/septembre. Les deux commandes les plus récentes (août et septembre 2025) sont stables à 2u. Bien que la demande tombe un dimanche, conformément aux guidelines B2B, je prédis le volume de la prochaine commande attendue. La tendance actuelle s'est consolidée à 2u, dépassant la moyenne historique de 1.25u.

</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement long (30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stabilisation à la hausse (de 1u en 2024 à 2u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence d'achat lente mais régulière. En 2024, le volume standard était de 1u, mais les deux commandes les plus récentes (août et septembre 2025) montrent une stabilisation à 2u par commande. Bien que la date de prédiction soit un dimanche, jour hors cycle habituel, la règle de prédiction impose de projeter le volume de la prochaine commande probable. Compte tenu de la tendance récente et de l'intervalle moyen constaté, la prochaine commande devrait maintenir le volume de 2 unités.

</details>


<details>
<summary><strong>8. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle long (20-30j), basse fréquence
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très restreint (2 points) mais montre une stabilité parfaite à 2 unités. Les commandes ont eu lieu à environ 22 jours d'intervalle, la dernière datant du 12 septembre. Bien que la date demandée soit un dimanche (jour théoriquement chômé), selon les guidelines, nous prédisons le volume de la prochaine commande probable plutôt que 0. Étant donné la faible vélocité de ce produit organique et la constance des commandes précédentes, un renouvellement de 2 unités est la prévision la plus précise.

</details>


<details>
<summary><strong>9. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j) flottant
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u vers 2u)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une commande par mois environ. Bien que l'année N-1 affichait des volumes de 3-4u, la période récente (septembre 2025) montre une descente à 2u. Le pic de 5u en 2024 n'a pas été répété. La prédiction tombe un dimanche, jour de fermeture B2B; selon les guidelines, on anticipe la commande du cycle suivant (fin octobre/début novembre). Compte tenu de la dernière commande à 2u et de l'absence de signal de hausse, la quantité de 2u est la plus probable pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>10. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.125u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passant de 1-2u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une fréquence d'achat espacée d'environ 1 mois. La dernière commande (août 2025) à 3u marque une progression par rapport aux volumes de 2024 (moyenne de 2u). Bien que la date demandée soit un dimanche, en suivant les guidelines B2B, nous prédisons le volume du prochain cycle probable. La tendance récente de 3 unités est retenue car elle reflète mieux la situation actuelle du produit TVF002 que la moyenne historique plus faible.

</details>


<details>
<summary><strong>11. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 5u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 3u (150.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Donnée isolée, fréquence non encore établie
- **Saisonnalité**: none
- **Tendance**: Stable sur le point observé (5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne contient qu'une seule commande récente de 5 unités effectuée le jeudi 21 août 2025. En l'absence de données N-1 et de patterns récurrents, la valeur de 5 unités constitue la seule base factuelle disponible pour ce produit bio spécialisé (Tuscan Organic Spread). Bien que la date de prédiction soit un dimanche, conformément aux consignes pour les jours hors cycle, nous prédisons le volume de la prochaine commande probable en tenant compte de la dernière transaction connue (5u). Le niveau de confiance est bas en raison du manque de points de données pour valider une fréquence ou une tendance.

</details>


<details>
<summary><strong>12. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ultra-sporadique (intervalle de 2 à 5 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre des commandes très espacées sans rythme hebdomadaire ou mensuel fixe. La dernière commande (août 2025) était de 1 unité, ce qui correspond à 75% de l'historique total (la valeur de 2u en mars 2024 étant traitée comme un pic mineur isolé). Bien que la prédiction tombe un dimanche, jour inhabituel, les règles de gestion imposent de prédire la prochaine commande probable plutôt que 0. Compte tenu de la faible rotation du produit [JF032], une quantité de 1 unité est la plus probable pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>13. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot / irrégulière (Intervalle ~30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation extrêmement stable mais éparse, avec une quantité constante de 1 unité par commande depuis 2024. Le produit semble être un article de niche ou de réapprovisionnement ponctuel sans saisonnalité marquée. Bien que la date de prédiction soit un dimanche (jour de fermeture probable en B2B), les règles de gestion imposent de prédire la prochaine commande probable plutôt que 0. Étant donné l'absence de commande depuis plusieurs mois et la stabilité parfaite des volumes historiques (1u), la probabilité la plus forte pour la prochaine occurrence est de 1 unité.

</details>


<details>
<summary><strong>14. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très sporadique (3 commandes en 18 mois), cycle long non défini
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et ponctuelle, mais d'une stabilité parfaite (1 unité à chaque commande). Bien qu'il n'y ait pas de commandes récentes (3 derniers mois), le produit n'est pas marqué comme arrêté. En suivant les règles B2B pour les jours hors cycle (dimanche), on prévoit le volume de la prochaine commande probable. Comme chaque interaction historique s'est soldée par l'achat d'une unité unique, la prédiction la plus précise pour le prochain événement est de 1 unité.

</details>




### 📊 Données d'Input LLM (15 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:15:39: 1u
- 2024-08-09 06:13:57: 1u
- 2024-06-27 07:05:16: 2u
- 2024-04-23 07:38:39: 3u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 1u
- 2024-03-18 09:22:57: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u
- 2025-08-21 12:13:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 2u
- 2024-09-09 13:15:39: 1u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 2u
- 2024-05-22 09:12:24: 2u
- 2024-04-23 07:38:39: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 5u
- 2024-09-09 13:15:39: 3u
- 2024-07-16 10:53:09: 2u
- 2024-06-27 07:05:16: 6u
- 2024-05-22 09:12:24: 5u
- 2024-04-23 07:38:39: 4u
- 2024-03-18 09:22:57: 4u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u
- 2025-08-21 12:13:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 1u
- 2024-09-09 13:15:39: 1u
- 2024-06-27 07:05:16: 1u
- 2024-03-18 09:22:57: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 2u
- 2024-09-09 13:15:39: 1u
- 2024-07-16 10:53:09: 2u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 1u
- 2024-03-18 09:22:57: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 1u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 1u
- 2024-05-22 09:12:24: 2u
- 2024-03-18 09:22:57: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [LD014] LD Organic Avocado Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 3u
- 2024-09-09 13:15:39: 3u
- 2024-08-09 06:13:57: 2u
- 2024-07-16 10:53:09: 2u
- 2024-06-27 07:05:16: 5u
- 2024-05-22 09:12:24: 5u
- 2024-04-23 07:38:39: 4u
- 2024-03-18 09:22:57: 4u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-21 12:13:27: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:15:39: 2u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 2u
- 2024-06-27 07:05:16: 3u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 3u
- 2024-03-18 09:22:57: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [LD013] LD Tuscan Organic Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-21 12:13:27: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-21 12:13:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 2u
- 2024-09-09 13:15:39: 3u
- 2024-08-09 06:13:57: 2u
- 2024-07-16 10:53:09: 3u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 4u
- 2024-04-23 07:38:39: 2u
- 2024-03-18 09:22:57: 3u

**📊 Quantité Médiane (fallback)**: 2u
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>13. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-21 12:13:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-03-18 09:22:57: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 1u
- 2024-09-09 13:15:39: 1u
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 1u
- 2024-03-18 09:22:57: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 1u
- 2024-09-09 13:15:39: 1u
- 2024-03-18 09:22:57: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (20)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Stock prédit: -0.3u (-10j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Stock prédit: 0.3u (7j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: -0.3u (-10j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [LD011] LD Organic Kids Spread 180 g | 2 | Stock prédit: 0.1u (3j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Stock prédit: -2.0u (-28j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: -1.6u (-26j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 5 | Stock prédit: -1.7u (-16j restants) → prédit 5u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 3 | Stock prédit: -6.5u (-44j restants) → prédit 3u mais non commandé |
| [LD009] LD Organic Asparagus Spread 180 g | 2 | Stock prédit: -0.7u (-26j restants) → prédit 2u mais non commandé |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Stock prédit: -0.3u (-14j restants) → prédit 1u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Stock prédit: 0.3u (12j restants) → prédit 2u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Stock prédit: -0.2u (-10j restants) → prédit 2u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (13j restants) → prédit 1u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: -2.2u (-43j restants) → prédit 3u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.1u (15j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [LD015] LD Onion Spread 180g | 1 | Stock prédit: -3.3u (-88j restants) → prédit 1u mais non commandé |


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
| [LD004] LD Tartinade Tomate Basilic bio 180g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD006] LD Tartinade Olives bio 180g   | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:16:28.193Z*
