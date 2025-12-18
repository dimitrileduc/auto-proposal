# Rapport Backtest - Client CRF MARKET AUBEL SA AGBA

## Contexte

- **Client** : CRF MARKET AUBEL SA AGBA (ID: 38732)
- **Commande réelle** : S39932
- **Date commande** : 2025-10-27 10:41:25
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 23,083 input + 8,571 output = 31,654 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 52.4% | 42 produits prédits, 22 corrects |
| **Rappel** | 100.0% | 22 produits réels, 22 détectés |
| **F1-Score** | 68.8% | Score équilibré global |

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
| **MAPE** | 50.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 4 | 3.0 | 75.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (15 produits)


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
- **Pattern temporel**: Non-régulier, cycle moyen de 30-45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1-2 unités par commande
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une demande sporadique mais persistante sans pattern hebdomadaire fixe. La dernière commande date du 12 septembre (il y a 44 jours), ce qui correspond à l'intervalle maximal observé entre deux commandes. Bien que le jour demandé soit un dimanche, le stock client semble devoir être reconstitué. La moyenne pondérée des commandes récentes (1u et 2u) ainsi que l'absence de saisonnalité marquée en fin d'année suggèrent un besoin de 2 unités pour couvrir la période à venir.

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
- **Pattern temporel**: Cycle irrégulier long (~30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande très faible et sporadique avec un volume constant de 1 unité par commande (à l'exception d'une commande de 2u en mars 2024). L'intervalle entre les commandes est long et irrégulier. La dernière commande date du 12 septembre (soit 44 jours avant la date cible). Bien que le cycle moyen suggère qu'une commande pourrait survenir prochainement, la date demandée (dimanche) est atypique pour ce compte B2B. Cependant, au vu de l'historique de consommation, la quantité la plus probable lors du prochain déclenchement de commande reste strictement de 1 unité.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long environ 30-45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et stable, oscillant majoritairement entre 1u et 2u avec une fréquence de commande d'environ une fois par mois ou tous les deux mois. La dernière commande date du 12 septembre (1u), soit il y a environ 44 jours. Bien que le jour demandé soit un dimanche (jour inhabituel pour ce client qui commande en semaine), le délai écoulé suggère un besoin de réapprovisionnement imminent. Étant donné la tendance récente (2025) exclusivement à 1u, il est hautement probable que la commande reste sur ce volume minimal pour ce produit de niche.

</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier long (environ 30 à 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (Moyenne N-1: 4.14u vs Récent: 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande sporadique mais persistante. On observe une légère érosion des volumes par rapport à l'année précédente (moyenne de 4.14 unités en 2024 contre une moyenne de 3.0 sur les deux dernières commandes de 2025). La dernière commande remonte au 12 septembre, soit un intervalle de 44 jours par rapport à la date de prédiction (26 octobre), ce qui correspond au cycle maximum observé en N-1. Bien que la date de prédiction tombe un dimanche, le comportement d'achat suggère un besoin de réapprovisionnement imminent pour maintenir le stock de fond. La quantité de 3 unités est choisie pour s'aligner sur la tendance baissière récente tout en respectant le rythme de consommation observé.

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
- **Pattern temporel**: Rythme sporadique ~30-45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une demande unitaire constante (1u) depuis juin 2024, à l'exception d'un outlier en mars 2024 (3u). La dernière commande date du 12 septembre, soit une latence de 44 jours au moment de la prédiction (26 octobre). Bien que le jour demandé soit un dimanche (atypique pour les livraisons B2B relevées), le cycle de renouvellement de ~30-45 jours est atteint. L'absence de saisonnalité marquée et la stabilité du besoin unitaire pointent vers une commande de renouvellement standard de 1 unité.

</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Atypique / Cycle long (env. 30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (moyenne 1u vers 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une augmentation structurelle du volume : toutes les commandes de 2025 sont passées à 2 unités alors que 2024 oscillait majoritairement à 1 unité. Bien que la fréquence ne soit pas strictement hebdomadaire, l'intervalle entre les deux dernières commandes (août et septembre) était de 22 jours. Le saut vers le 26 octobre (44 jours après la dernière commande) suggère un besoin de réapprovisionnement imminent. La saisonnalité N-1 confirme une commande à 2 unités en octobre. Le volume de 2 est donc le plus probable pour maintenir le stock sans sur-stockage.

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
- **Pattern temporel**: Commande sporadique environ tous les mois avec tendance vers un rythme de 30-40 jours
- **Saisonnalité**: none
- **Tendance**: Hausse stabilisée à 2u contre 1u historiquement
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une faible rotation mais une stabilité remarquable sur les 12 derniers mois. La tendance est passée de 1u en 2024 à 2u systématiquement sur les commandes de 2025 (mai, août, septembre). Bien que la date cible soit un dimanche (jour inhabituel pour du B2B), l'intervalle depuis la dernière commande (septembre) suggère un besoin de réapprovisionnement imminent. La baseline de 2 unités est la plus probable compte tenu de la stabilité récente du volume par commande.

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
- **Pattern temporel**: Intervalle irrégulier long (~21-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec faible rotation
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation très faible et sporadique (uniquement deux points de données en trois mois). Les deux dernières commandes sont identiques (2 unités), ce qui établit une baseline constante. Bien que la commande du dimanche soit inhabituelle par rapport aux jours de livraison précédents (jeudi/vendredi), rien n'indique une accélération de la demande ou un besoin de stock tampon supplémentaire. La prédiction se base sur la répétition du volume historique le plus récent.

</details>


<details>
<summary><strong>9. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30 à 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (moyenne 3.5u vs 3u récent)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière mais faible, avec un cycle de réapprovisionnement d'environ un mois. La dernière commande remonte au 12 septembre (2 unités). Avec un intervalle habituel de 30-45 jours, une commande est attendue fin octobre. Bien que la tendance récente soit à 2-4 unités, la moyenne historique N-1 sur la même période était de 3 unités. Étant donné l'absence de pic saisonnier majeur sur ce produit (tartinade) en fin d'année, on retient la moyenne pondérée de 3 unités pour couvrir le besoin mensuel sans surstockage.

</details>


<details>
<summary><strong>10. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme erratique et lent (~30-45 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (moyenne 2u en 2024 vs 3u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande faible et irrégulière sans pattern hebdomadaire fixe. L'historique 2024 montre un volume de fond entre 1 et 3 unités. La dernière commande enregistrée (août 2025) a marqué un volume de 3 unités. Étant donné l'absence de commande depuis fin août et le délai de ~60 jours écoulé, un besoin de réapprovisionnement à hauteur du volume récent le plus élevé (3u) est le scénario le plus probable pour couvrir la demande latente, malgré la date atypique de la demande (dimanche).

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
- **Pattern temporel**: Non identifié (une seule commande enregistrée)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée il y a deux mois (21 août). En l'absence de données de saisonnalité N-1 ou d'un cycle de commande récurrent, la valeur de 5 unités constitue la seule référence de consommation réelle pour ce produit. La prédiction de 5 unités est donc la baseline la plus probable par défaut, bien que le niveau de confiance soit faible dû au manque de points de comparaison.

</details>


<details>
<summary><strong>12. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30 à 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (+15-20%) par rapport à N-1
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande constante oscillant entre 2 et 4 unités. La dernière commande date de plus de 2 mois (21/08), signalant un besoin de réapprovisionnement imminent. Bien que N-1 en octobre 2024 affichait 2 unités, la tendance récente de 2025 montre une augmentation du volume unitaire (4u en août). La moyenne pondérée et le temps écoulé depuis la dernière commande justifient une quantité de 3 unités pour couvrir le cycle de consommation habituel sans risque de surstockage excessif.

</details>


<details>
<summary><strong>13. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ 1 commande tous les 2 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation extrêmement faible et irrégulière (4 commandes en 18 mois). L'unité de vente semble être de 1 carton par commande de manière constante, sauf une exception en mars 2024. La dernière commande date d'il y a 2 mois (août 2025), ce qui pourrait suggérer un besoin imminent, mais la date de prédiction étant un dimanche (jour de fermeture habituel en B2B) et l'historique étant trop clairsemé, la probabilité statistique reste faible. Cependant, si commande il y a, elle sera de 1 unité.

</details>


<details>
<summary><strong>14. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalles irréguliers (longs cycles de 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable mais sporadique, avec une quantité constante de 1 unité par commande depuis plus d'un an. Bien qu'aucune commande n'ait été passée durant les 3 derniers mois, le produit ne montre aucun signe de croissance de volume unitaire par transaction. La prédiction se base sur la répétitivité stricte du volume unitaire (1u) observé sur 100% des points de données historiques, malgré l'absence de régularité dans le calendrier de passage de commande.

</details>


<details>
<summary><strong>15. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique infra-annuelle (tous les 1 à 6 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement faible et sporadique avec un volume constant de 1 unité par commande. Il n'y a eu aucune activité depuis plus de 12 mois (dernière commande en octobre 2024). Bien que la date cible (dimanche) ne corresponde pas aux habitudes de commande (Lundi/Vendredi), si une commande devait être déclenchée, la donnée historique la plus probable reste l'unité minimale, sans signe de croissance ou de saisonnalité marquée.

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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: low)
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
<summary><strong>12. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

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

**✅ Quantité LLM**: 3u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: -2.0u (-28j restants) → prédit 2u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: -1.6u (-26j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 4 | Stock prédit: -1.7u (-16j restants) → prédit 4u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: -6.5u (-44j restants) → prédit 4u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-18T11:37:50.728Z*
