# Rapport Backtest - Client CRF MARKET REMOUCHAMPS FONVAL

## Contexte

- **Client** : CRF MARKET REMOUCHAMPS FONVAL (ID: 38760)
- **Commande réelle** : S39957
- **Date commande** : 2025-10-28 10:53:28
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 27,703 input + 5,244 output = 32,947 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 91.4% | 35 produits prédits, 32 corrects |
| **Rappel** | 91.4% | 35 produits réels, 32 détectés |
| **F1-Score** | 91.4% | Score équilibré global |

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
| **MAE** | 0.72 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 38.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 4.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 15 | Égalité parfaite |
| Partial Match (>0u) | 17 | Avec erreur |

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

## True Positives (32)

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
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 5 | 1.0 | 20.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF021] JF PICKLES 350 ML | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 4 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF020] JF SAUCE AIOLI 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (25-35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité quasi absolue sur ce produit avec une quantité systématique de 1 unité par commande depuis mars 2024 (à l'exception des zéros en juillet/août 2024 qui semblent être des ruptures ou absences de besoin). Les deux dernières commandes (août et septembre 2025) confirment le maintien de cette unité de besoin à environ 30 jours d'intervalle. Bien que le lundi 27 octobre ne corresponde pas statistiquement à un jour de commande récurrent, la règle métier impose de prédire la prochaine commande probable : au vu de la dernière commande le 17 septembre, le cycle de ~30-40 jours positionne la commande suivante idéalement fin octobre.

</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec écarts de 30-45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Le produit présente une demande de fond très stable à 1 unité par commande. L'historique récent (août et septembre 2025) confirme cette quantité de 1u. Bien que la date cible soit un lundi (jour moins fréquent historiquement), les règles de gestion hors cycle imposent de prédire le volume de la prochaine commande probable. Le pic de 3u en avril 2024 est considéré comme un outlier isolé au regard de la constance à 1u observée sur le reste de la période N et N-1.

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible rotation pour ce produit. En 2024, les volumes oscillaient entre 0 et 2 unités. Sur la période récente (août et septembre 2025), la consommation s'est stabilisée à exactement 1 unité par commande avec un intervalle d'environ 25 à 30 jours. La dernière commande datant du 17 septembre, une commande fin octobre (le 27) correspond parfaitement au cycle de réapprovisionnement observé. Bien que le lundi ne soit pas un jour habituel marqué, la règle de continuité de service impose de prévoir le volume de la prochaine commande probable, qui est de 1 unité.

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique, environ 1 commande tous les 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation lente et irrégulière avec un volume unitaire faible (1 ou 2 unités). Sur les 12 derniers mois, on observe une alternance quasi systématique entre des commandes de 1u et 2u sans saisonnalité marquée. La dernière commande (septembre 2025) était de 1u, précédée par 2u en août. En l'absence de cycle hebdomadaire fort et avec une fréquence moyenne d'une commande par mois, la probabilité d'une commande de fond pour ce lundi 27 octobre se stabilise sur le palier bas de 1 unité pour minimiser l'erreur de prédiction sur un produit à faible rotation.

</details>


<details>
<summary><strong>5. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 26-30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est restreint mais montre une constance parfaite sur le volume (2 unités). Les commandes ont eu lieu le 22 août puis le 17 septembre (intervalle de 26 jours). La date cible du 27 octobre correspond exactement à un cycle de 40 jours par rapport à la dernière commande, ce qui suggère l'arrivée du prochain besoin de réapprovisionnement. Bien que le lundi ne soit pas le jour habituel (précédemment mercredi et vendredi), les règles de gestion imposent de prédire la prochaine commande probable plutôt que 0. La stabilité du volume à 2 unités dicte la recommandation.

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel erratique (~25 à 40 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u en oct-24 vs 1.5u fin 2025)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre un produit à faible rotation avec une commande environ une fois par mois. En N-1 (octobre), le client avait commandé 3u, mais la tendance récente (août/septembre 2025) montre une baisse des volumes unitaires à 1u et 2u. Le cycle de commande laisse présager un besoin fin octobre (dernier point le 17/09). Compte tenu de la légère hausse sur la dernière commande (2u) par rapport à la précédente (1u) et de l'historique saisonnier à 3u, on retient une quantité de 2u pour couvrir le besoin sans surstocker sur un produit en perte de vitesse.

</details>


<details>
<summary><strong>7. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme aléatoire à lent (environ 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 0u et 1u avec un léger pic récent
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une consommation très faible mais régulière de 1 unité par commande. Bien que le dernier point (août 2025) affiche 2 unités, la majorité des données N-1 (2024) gravite autour de 1u (avec des passages à 0u). Étant donné l'espacement important entre les commandes (parfois plusieurs semaines), la quantité la plus probable pour maintenir un stock de fond pour ce format 300ML est de 1 unité. Le pic à 2u est considéré ici comme un ajustement ponctuel plutôt qu'une nouvelle tendance lourde.

</details>


<details>
<summary><strong>8. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-45 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Le produit présente une demande très stable mais espacée dans le temps (environ une commande par mois ou tous les deux mois). Historiquement, à l'exception d'un pic à 2u en mai 2024 et de quelques ruptures à 0u, la quantité modale est systématiquement de 1u. La dernière commande enregistrée en août 2025 confirme ce volume de 1u. Bien que le lundi ne soit pas le jour de commande le plus fréquent historiquement, les règles métier imposent de prédire le volume du prochain cycle probable plutôt que 0. Compte tenu de la faible rotation (Low Rotation), la quantité la plus probable pour la prochaine commande est de 1 unité.

</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 4u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 20 et 45 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (de 3-4u à 5u)
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
L'analyse des historiques montre une demande qui s'est stabilisée entre 3u et 4u en 2024, avec une progression vers 5u lors de la commande la plus récente (août 2025). Bien que les intervalles de commande soient larges (environ un mois), le volume par commande est très prévisible (faible écart-type). La date demandée (lundi) est cohérente avec une reprise de commande de début de semaine. Compte tenu de la tendance haussière sur le dernier point récent et de la stabilité historique, la quantité de 5u est la plus probable pour couvrir le prochain cycle.

</details>


<details>
<summary><strong>10. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 5u vs Médiane: 4u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique à mensuel (30-45 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à légère hausse, passage de moyenne 2.6u à 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande erratique avec de longs intervalles (parfois 2 mois sans commande). Historiquement, les volumes oscillent entre 1u et 4u. Cependant, la dernière commande enregistrée en août 2025 montre un volume de 5u, marquant un palier supérieur par rapport à l'année précédente. Pour la prédiction du lundi 27 octobre 2025, nous nous situons environ 60 jours après la dernière commande, ce qui correspond aux cycles de réapprovisionnement longs observés en 2024. Conformément aux guidelines B2B, bien que le lundi ne soit pas le jour dominant, nous projetons la prochaine commande probable. En raison de la tendance récente à la hausse des volumes unitaires, la cible de 5u est retenue pour minimiser le MAPE face à la dernière valeur connue (Last Value). Ils'agit d'un produit à faible rotation mais à volume stable par acte d'achat (moyenne historique ~3u vs récent 5u). Chaque unité ayant un impact fort sur l'erreur en faible volume, on privilégie la continuité du dernier point data cohérent (5u). Même si aucune commande n'est tombée en septembre, octobre est statistiquement un mois de commande (cf. oct-22 2024). Nous prévoyons donc le maintien du niveau de 5u pour la prochaine sollicitation client prévue fin octobre 2025. Un score de confiance 'low' est attribué dû à l'absence de données en septembre 2025 et à l'irrégularité calendaire du client sur ce produit spécifique (Sauce Tartare 250ML). La prédiction vise à couvrir le besoin complet de la semaine débutant le 27 octobre, le client ne commandant pas quotidiennement ce produit.

</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 3u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance bimensuelle/mensuelle élargie
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (de 1u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une fréquence de commande faible et irrégulière (environ une fois par mois ou tous les deux mois). Cependant, on observe une croissance constante du volume par commande, passant de 1u début 2024 à 2u mi-2024, pour atteindre 3u lors de la dernière commande d'août 2025. Bien que la date de prédiction soit un lundi (jour inhabituel), selon les guidelines, nous prédisons le volume de la prochaine commande probable. Compte tenu de la tendance haussière récente et du maintien de la demande de fond, une quantité de 3u est préconisée.

</details>


<details>
<summary><strong>12. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel et sporadique (tous les 15-30 jours environ)
- **Saisonnalité**: none
- **Tendance**: Instable avec activité nulle sur les 12 derniers mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très faible et ancien (aucune commande au cours de la dernière année civile). Cependant, les données N-1 montrent des commandes unitaires (1u, 3u) espacées. Selon les consignes B2B interdisant le '0' par défaut, et malgré l'absence d'activité récente, je prédis la plus petite unité de commande cohérente avec le passé historique (1u) pour anticiper une réactivation potentielle du produit à la date demandée.

</details>


<details>
<summary><strong>13. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique avec cycle mensuel dominant (environ 30-45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable mais très faible volume (1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une demande sporadique mais persistante, principalement de 1 unité. Bien que le client n'ait pas commandé au cours des 3 derniers mois, le pattern N-1 montre des commandes réparties environ tous les mois ou deux. Le pic de 3 unités en juillet 2024 est considéré comme un outlier isolé par rapport à la médiane de 1. Étant donné l'absence de commande récente, nous prédisons le maintien du volume minimal de fond (1u) pour couvrir la prochaine fenêtre de commande probable, même si le lundi n'est pas le jour de prédilection historique (souvent mar/jeu/ven).

</details>


<details>
<summary><strong>14. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière à base mensuelle ou bimestrielle
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (moyenne 2-3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un produit à rotation lente avec des commandes sporadiques espacées de 15 à 60 jours. Les volumes commandés lorsqu'une transaction a lieu oscillent entre 1u et 4u (moyenne de 2.2u hors valeurs à 0). Bien qu'aucune commande n'ait été enregistrée sur les 3 derniers mois, le produit n'est pas marqué comme arrêté. Le 27 octobre correspond à la fin de mois, période où des réapprovisionnements de fond de rayon ont été observés en N-1 (septembre/octobre). En suivant les règles B2B de ne pas prédire 0 pour un jour hors cycle, je projette la prochaine commande probable à 2 unités, ce qui correspond à la médiane des volumes historiques constatés.

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 2u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 0u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 2u
- 2024-08-01 11:40:34: 1u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 2u
- 2025-08-22 10:08:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 2u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 3u
- 2024-09-26 06:41:59: 3u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [JF035] JF BURGER SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JF037] JF BBQ SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 0u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 0u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 4u
- 2024-09-26 06:41:59: 4u
- 2024-08-21 13:58:20: 2u
- 2024-08-01 11:40:34: 2u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 4u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 3u

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>10. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 4u
- 2024-08-21 13:58:20: 3u
- 2024-08-01 11:40:34: 2u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 4u
- 2024-04-16 06:31:56: 4u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 3u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 3u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>14. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 3u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>




---

## False Positives (3)

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
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.4u (30j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 2 | Stock prédit: -0.7u (-26j restants) → prédit 2u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: -0.7u (-26j restants) → prédit 1u mais non commandé |


---

## False Negatives (3)

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
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:16:20.615Z*
